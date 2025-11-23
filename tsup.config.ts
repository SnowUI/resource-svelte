import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: false, // Svelte components don't need .d.ts files
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['svelte'],
});

