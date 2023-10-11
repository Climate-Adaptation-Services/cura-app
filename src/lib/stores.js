import { writable } from 'svelte/store';

export const w = writable(0);
export const h = writable(0);

export const datalaag = writable('Seasonal average temperature');
