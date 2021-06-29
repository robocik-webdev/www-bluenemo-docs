import { writable } from 'svelte/store';

export const opened = writable(false);
export const picState = writable('rsc/Logo/menu.svg');