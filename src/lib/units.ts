import { writable } from 'svelte/store';

export const inputUnit = writable<string>("px");
export const outputUnit = writable<string>("vw");
export const options: string[] = ["px", "vw", "%", "vh"];

export const input = writable<number>(0);

export const viewportWidth = writable<number>(document.body.clientWidth || 0);
