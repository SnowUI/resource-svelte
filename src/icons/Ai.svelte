<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M24.937 4.653c-.322-.87-1.553-.87-1.876 0l-.793 2.144a1 1 0 0 1-.59.59l-2.144.794c-.87.322-.87 1.553 0 1.875l2.143.794a1 1 0 0 1 .591.59l.793 2.144c.323.87 1.554.87 1.876 0l.793-2.144a1 1 0 0 1 .591-.59l2.144-.794c.87-.322.87-1.553 0-1.875l-2.144-.794a1 1 0 0 1-.59-.59z"/><path fill="currentColor" fillRule="evenodd" d="m4.97 27.361 2.061-8.243h7.939l2.06 8.243a1 1 0 0 0 1.94-.485L13.91 6.637c-.757-3.03-5.063-3.03-5.82 0L3.03 26.876a1 1 0 0 0 1.94.485m7-20.239c-.252-1.01-1.687-1.01-1.94 0l-2.499 9.996h6.939z" clipRule="evenodd"/><path fill="currentColor" d="M25 18.118a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
