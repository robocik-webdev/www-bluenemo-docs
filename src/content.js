import { writable, derived } from 'svelte/store';

async function fetchContent() {
  const req = await fetch('content.json');
  const json = await req.json();
  return json;
}

export const langChoice = writable('eng');
export const lang = derived(
  langChoice,
  async ($langChoice, set) => {
    const json = await fetchContent();
    set(json[$langChoice]);
  },
  {}
);

//zgadza się, ukradłem, ale tylko frajer by nie skorzystał