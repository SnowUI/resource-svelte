<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M18 6v20a1 1 0 0 1-2 0V7.766l-3.485 2.091a1 1 0 1 1-1.03-1.715l5-3A1 1 0 0 1 18 6"/>`, 'thin': `<path fill="currentColor" d="M17.5 6v20a.5.5 0 1 1-1 0V6.883l-4.242 2.546a.5.5 0 1 1-.515-.858l5-3A.5.5 0 0 1 17.5 6"/>`, 'light': `<path fill="currentColor" d="M17.75 6v20a.75.75 0 1 1-1.5 0V7.325l-3.863 2.318a.75.75 0 0 1-.773-1.287l5-3A.75.75 0 0 1 17.75 6"/>`, 'bold': `<path fill="currentColor" d="M18.5 6v20a1.5 1.5 0 1 1-3 0V8.649l-2.729 1.637a1.5 1.5 0 0 1-1.542-2.572l5-3A1.5 1.5 0 0 1 18.5 6"/>`, 'fill': `<path fill="currentColor" d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 20a1 1 0 0 1-2 0V10.618l-2.552 1.277a1 1 0 1 1-.896-1.79l4-2A1 1 0 0 1 18 9z"/>`, 'duotone': `<path fill="currentColor" d="M27 5v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="M18 6v20a1 1 0 0 1-2 0V7.766l-3.485 2.091a1 1 0 1 1-1.03-1.715l5-3A1 1 0 0 1 18 6"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
