export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","global.css","silka-regular-webfont.woff2"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.613dc6f3.js","app":"_app/immutable/entry/app.404c2c73.js","imports":["_app/immutable/entry/start.613dc6f3.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.72d05a1e.js","_app/immutable/chunks/index.35a173b3.js","_app/immutable/entry/app.404c2c73.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.8c174c11.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
