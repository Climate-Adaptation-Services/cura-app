import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.bb181285.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.8c174c11.js","_app/immutable/chunks/index.35a173b3.js"];
export const stylesheets = ["_app/immutable/assets/2.24210082.css"];
export const fonts = [];
