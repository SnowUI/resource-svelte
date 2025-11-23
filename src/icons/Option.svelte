<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M29 23a1 1 0 0 1-1 1h-7.882a1.99 1.99 0 0 1-1.79-1.105L11.884 10H4a1 1 0 1 1 0-2h7.883a1.99 1.99 0 0 1 1.788 1.105L20.118 22H28a1 1 0 0 1 1 1M19 10h9a1 1 0 1 0 0-2h-9a1 1 0 1 0 0 2"/>`, 'thin': `<path fill="currentColor" d="M28.5 23a.5.5 0 0 1-.5.5h-7.882a1.49 1.49 0 0 1-1.342-.829L12.33 9.776a.5.5 0 0 0-.447-.276H4a.5.5 0 1 1 0-1h7.883a1.49 1.49 0 0 1 1.34.829l6.448 12.895a.5.5 0 0 0 .447.276H28a.5.5 0 0 1 .5.5M19 9.5h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1"/>`, 'light': `<path fill="currentColor" d="M28.75 23a.75.75 0 0 1-.75.75h-7.882a1.74 1.74 0 0 1-1.565-.968L12.104 9.89a.25.25 0 0 0-.223-.139H4a.75.75 0 0 1 0-1.5h7.883a1.74 1.74 0 0 1 1.565.968l6.447 12.893a.25.25 0 0 0 .223.139H28a.75.75 0 0 1 .75.75M19 9.75h9a.75.75 0 1 0 0-1.5h-9a.75.75 0 1 0 0 1.5"/>`, 'bold': `<path fill="currentColor" d="M29.5 23a1.5 1.5 0 0 1-1.5 1.5h-7.882a2.49 2.49 0 0 1-2.235-1.383L11.573 10.5H4a1.5 1.5 0 1 1 0-3h7.883a2.49 2.49 0 0 1 2.235 1.383l6.31 12.617H28a1.5 1.5 0 0 1 1.5 1.5M19 10.5h9a1.5 1.5 0 1 0 0-3h-9a1.5 1.5 0 0 0 0 3"/>`, 'fill': `<path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-2 17h-5.882a1.99 1.99 0 0 1-1.79-1.105L12.884 12H7a1 1 0 0 1 0-2h5.883a1.99 1.99 0 0 1 1.788 1.105L19.118 20H25a1 1 0 0 1 0 2m0-10h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M28 9v14H5a1 1 0 0 1-1-1V9z" opacity=".08"/><path fill="currentColor" d="M29 23a1 1 0 0 1-1 1h-7.882a1.99 1.99 0 0 1-1.79-1.105L11.884 10H4a1 1 0 1 1 0-2h7.883a1.99 1.99 0 0 1 1.788 1.105L20.118 22H28a1 1 0 0 1 1 1M19 10h9a1 1 0 1 0 0-2h-9a1 1 0 1 0 0 2"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
