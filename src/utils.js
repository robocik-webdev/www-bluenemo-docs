import { scrollTo } from 'svelte-scrollto';


export function scrollto(id) {
    scrollTo({ element: id, duration: 400, offset: -55 });
  }