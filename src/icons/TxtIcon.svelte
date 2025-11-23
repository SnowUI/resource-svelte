<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="#9D9C9B" fillRule="evenodd" d="M4 2.794v26.412C4 30.75 5.231 32 6.75 32h18.5c1.519 0 2.75-1.25 2.75-2.794V7.351c0-.746-.294-1.461-.816-1.986L22.648.807A2.73 2.73 0 0 0 20.714 0H6.75C5.231 0 4 1.25 4 2.794m1.75 26.412V2.794c0-.561.448-1.016 1-1.016h13.625v6.095c0 1.052.84 1.905 1.875 1.905h4v19.428c0 .561-.448 1.016-1 1.016H6.75c-.552 0-1-.455-1-1.016M26.25 8v-.649c0-.271-.107-.531-.297-.722l-3.828-3.846v5.09c0 .07.056.127.125.127z" clipRule="evenodd"/><path fill="#C9C7C5" fillRule="evenodd" d="M8 13c0-.75.25-1 1-1h14c.75 0 1 .25 1 1s-.25 1-1 1H9c-.75 0-1-.25-1-1M8 17c0-.75.25-1 1-1h14c.75 0 1 .25 1 1s-.25 1-1 1H9c-.75 0-1-.25-1-1M8 21c0-.75.25-1 1-1h14c.75 0 1 .25 1 1s-.25 1-1 1H9c-.75 0-1-.25-1-1M8 25c0-.75.25-1 1-1h14c.75 0 1 .25 1 1s-.25 1-1 1H9c-.75 0-1-.25-1-1" clipRule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
