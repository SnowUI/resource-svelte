import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(import.meta.dirname, '..');
const packageName = '@snowui-design-system/resource-svelte';
const extension = '.svelte';
const manifestPath = path.join(root, 'RESOURCE_LICENSE_MANIFEST.json');
const materialGroups = ['avatars', 'backgrounds', 'cursors', 'emoji', 'illustrations', 'images', 'logos'];

async function locateBaseManifest() {
  const candidates = [
    path.resolve(root, '..', 'resource-base', 'RESOURCE_LICENSE_MANIFEST.json'),
    path.join(root, 'node_modules', '@snowui-design-system', 'resource-base', 'RESOURCE_LICENSE_MANIFEST.json'),
  ];
  for (const candidate of candidates) {
    try { await fs.access(candidate); return candidate; } catch {}
  }
  throw new Error('Cannot find resource-base/RESOURCE_LICENSE_MANIFEST.json.');
}

async function componentFiles() {
  const result = [];
  for (const group of materialGroups) {
    const dir = path.join(root, 'src', group);
    for (const name of await fs.readdir(dir).catch(() => [])) {
      if (name.endsWith(extension)) result.push(path.join(dir, name));
    }
  }
  const iconsRoot = path.join(root, 'src', 'icons');
  for (const collection of await fs.readdir(iconsRoot, { withFileTypes: true })) {
    if (!collection.isDirectory()) continue;
    for (const name of await fs.readdir(path.join(iconsRoot, collection.name))) {
      if (name.endsWith(extension)) result.push(path.join(iconsRoot, collection.name, name));
    }
  }
  return result.sort();
}

const baseManifestPath = await locateBaseManifest();
const baseManifest = JSON.parse(await fs.readFile(baseManifestPath, 'utf8'));
const byId = new Map(baseManifest.assets.map(entry => [entry.id, entry]));
const byOutput = new Map();
for (const entry of baseManifest.assets) {
  for (const output of entry.packagedFiles) {
    if (!byOutput.has(output)) byOutput.set(output, []);
    byOutput.get(output).push(entry.id);
  }
}

const entries = [];
const mappingErrors = [];
for (const absolute of await componentFiles()) {
  const relative = path.relative(root, absolute).split(path.sep).join('/');
  const content = await fs.readFile(absolute, 'utf8');
  const ids = new Set();
  if (relative.startsWith('src/icons/')) {
    const match = content.match(/collection:\s*['"]([^'"]+)['"],\s*usageName:\s*['"]([^'"]+)['"]/);
    if (match) ids.add(`icon:${match[1]}:${match[2]}`);
  } else {
    for (const match of content.matchAll(/@snowui-design-system\/resource-base\/(assets\/[^'";]+)/g)) {
      for (const id of byOutput.get(match[1]) ?? []) ids.add(id);
    }
    if (ids.size === 0) {
      const [group] = relative.slice('src/'.length).split('/');
      const componentName = path.basename(relative, extension);
      const normalized = componentName
        .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Za-z])([0-9])/g, '$1-$2')
        .toLowerCase();
      if (byId.has(`material:${group}:${normalized}`)) ids.add(`material:${group}:${normalized}`);
    }
  }
  if (ids.size === 0) {
    mappingErrors.push({ generatedFile: relative, matches: [...ids].sort() });
    continue;
  }
  const baseAssetIds = [...ids].sort();
  const sources = baseAssetIds.map(id => byId.get(id)).filter(Boolean);
  if (sources.length !== baseAssetIds.length) {
    mappingErrors.push({ generatedFile: relative, matches: baseAssetIds, error: 'base-entry-missing' });
    continue;
  }
  const baseAssetId = [...ids][0];
  const source = byId.get(baseAssetId);
  const relatedBaseAssetIds = baseAssetIds.filter(id => id !== baseAssetId);
  const inheritedAssetRights = sources.map(entry => ({
    baseAssetId: entry.id,
    source: entry.source,
    sourceVersion: entry.sourceVersion,
    rightsEvidence: entry.rightsEvidence,
    applicableLicense: entry.applicableLicense,
    brandMark: entry.brandMark,
    ownerConfirmed: entry.ownerConfirmed,
    confirmationRecord: entry.confirmationRecord,
    resolution: entry.resolution,
  }));
  const reasons = [...new Set(sources.flatMap(entry => entry.resolution.reasons))];
  if (relatedBaseAssetIds.length > 0) reasons.push('additional-source-assets-in-compatibility-component');
  const applicableLicenses = [...new Set(sources.map(entry => entry.applicableLicense))];
  if (applicableLicenses.length > 1) reasons.push('multiple-applicable-license-boundaries');
  const unresolvedBaseAssetIds = sources.filter(entry => entry.resolution.status !== 'resolved').map(entry => entry.id);
  entries.push({
    generatedFile: relative,
    generatedFileSha256: createHash('sha256').update(content).digest('hex'),
    mappingType: relatedBaseAssetIds.length === 0 ? 'logical-asset' : 'compatibility-aggregate',
    baseAssetId,
    relatedBaseAssetIds,
    inheritedAssetRights,
    unresolvedBaseAssetIds,
    source: source.source,
    sourceVersion: source.sourceVersion,
    rightsEvidence: [...new Set(sources.flatMap(entry => entry.rightsEvidence))],
    applicableLicense: applicableLicenses.length === 1 ? applicableLicenses[0] : null,
    brandMark: sources.some(entry => entry.brandMark),
    ownerConfirmed: sources.every(entry => entry.ownerConfirmed === true),
    confirmationRecord: baseManifest.ownerConfirmation?.record ?? null,
    resolution: {
      status: unresolvedBaseAssetIds.length === 0 && applicableLicenses.length === 1 ? 'resolved' : 'unresolved',
      evidenceBasis: sources.every(entry => entry.ownerConfirmed === true) ? 'owner-confirmed' : 'incomplete',
      mappingBasis: 'automated-mapping-verified',
      reasons,
    },
  });
}

const groupedEntries = new Map();
for (const entry of entries) groupedEntries.set(entry.generatedFile, [...(groupedEntries.get(entry.generatedFile) ?? []), entry]);
const duplicates = [...groupedEntries].filter(([, values]) => values.length > 1)
  .map(([generatedFile, values]) => ({ generatedFile, baseAssetIds: values.map(value => value.baseAssetId) }));
const byLogicalAsset = new Map();
for (const entry of entries) {
  byLogicalAsset.set(entry.baseAssetId, [...(byLogicalAsset.get(entry.baseAssetId) ?? []), entry]);
}
const aliases = [...byLogicalAsset].filter(([, values]) => values.length > 1)
  .map(([baseAssetId, values]) => ({ baseAssetId, generatedFiles: values.map(value => value.generatedFile).sort() }));
for (const values of byLogicalAsset.values()) {
  if (values.length > 1) for (const entry of values) {
    if (entry.mappingType === 'logical-asset') entry.mappingType = 'compatibility-shared-source';
  }
}
const coveredBaseAssets = new Set(entries.flatMap(entry => [entry.baseAssetId, ...entry.relatedBaseAssetIds]));
const missingBaseAssets = [...byId.keys()].filter(id => !coveredBaseAssets.has(id)).sort();
const unresolved = entries.filter(entry => entry.resolution.status === 'unresolved');
const manifest = {
  schemaVersion: 1,
  package: packageName,
  baseManifest: '@snowui-design-system/resource-base/RESOURCE_LICENSE_MANIFEST.json',
  ownerConfirmation: baseManifest.ownerConfirmation,
  summary: { generatedComponents: entries.length, unresolved: unresolved.length, mappingErrors: mappingErrors.length, duplicateMappings: duplicates.length, aliasGroups: aliases.length, missingBaseAssets: missingBaseAssets.length },
  mappingErrors,
  duplicateMappings: duplicates,
  aliases,
  missingBaseAssets,
  components: entries.sort((a, b) => a.generatedFile.localeCompare(b.generatedFile)),
};
const serialized = `${JSON.stringify(manifest, null, 2)}\n`;
const check = process.argv.includes('--check');
const publication = process.argv.includes('--publication');
if (check) {
  const current = await fs.readFile(manifestPath, 'utf8').catch(() => '');
  if (current !== serialized) { console.error('RESOURCE_LICENSE_MANIFEST.json is stale; run pnpm license:manifest.'); process.exit(1); }
} else {
  await fs.writeFile(manifestPath, serialized);
}
if (mappingErrors.length || duplicates.length || missingBaseAssets.length) {
  console.error(`Resource component mapping failed: ${mappingErrors.length} unmatched / ${duplicates.length} duplicate generated files / ${missingBaseAssets.length} uncovered Base assets.`);
  process.exit(1);
}
console.log(`Resource component mapping: ${entries.length} generated components; unresolved ${unresolved.length}.`);
if (publication && unresolved.length) {
  console.error('Publication blocked: inherited unresolved asset rights evidence remains.');
  process.exit(1);
}
