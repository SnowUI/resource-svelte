<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="#9D9C9B" fillRule="evenodd" d="M8 2.794v26.412C8 30.75 9.231 32 10.75 32h18.5c1.519 0 2.75-1.25 2.75-2.794V7.351c0-.746-.294-1.461-.816-1.986L26.648.807A2.73 2.73 0 0 0 24.714 0H10.75C9.231 0 8 1.25 8 2.794m1.75 26.412V2.794c0-.561.448-1.016 1-1.016h13.625v6.095c0 1.052.84 1.905 1.875 1.905h4v19.428c0 .561-.448 1.016-1 1.016h-18.5c-.552 0-1-.455-1-1.016M30.25 8v-.649c0-.271-.107-.531-.297-.722l-3.828-3.846v5.09c0 .07.056.127.125.127z" clipRule="evenodd"/><path fill="#4EA7AF" fillRule="evenodd" d="M25 14h-5v-2h5a3 3 0 1 1 0 6h-5v-2h5a1 1 0 1 0 0-2" clipRule="evenodd"/><path fill="#3D9298" fillRule="evenodd" d="M25 22h-5v-2h5a3 3 0 1 1 0 6h-5v-2h5a1 1 0 1 0 0-2" clipRule="evenodd"/><path fill="#3D9298" d="M0 9.25a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5z"/><path fill="#fff" d="M6.5 21.522V11.5H12v2H8.5v2H12v2H8.5l.023 4.021z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
