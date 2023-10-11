

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.74df9a7c.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.8c174c11.js"];
export const stylesheets = [];
export const fonts = [];
