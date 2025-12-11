<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M0 8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z" opacity=".04"/><path fill="currentColor" fill-rule="evenodd" d="M28 4a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zm-6.5 1H4a3 3 0 0 0-3 3v3.5h6.375a4.125 4.125 0 0 1 4.125 4.125V27h10zm1 22H28a3 3 0 0 0 3-3v-.27h-8.5zm8.5-4.27v-5.025h-8.5v5.026zm0-6.025V11.68h-8.5v5.025zm0-6.025V8a3 3 0 0 0-3-3h-5.5v5.68zM1 17.232V12.5h6.375c1.726 0 3.125 1.4 3.125 3.125v1.607zm0 5.731v-4.731h9.5v4.731zM1 24v-.037h9.5V27H4a3 3 0 0 1-3-3" clip-rule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
