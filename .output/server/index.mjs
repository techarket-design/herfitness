globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-08-21T08:12:15.805Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/about-BxO8a3VK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2448-DLfxbJC+nnJc2DIBGZG2Phnorx8\"",
		"mtime": "2026-08-23T15:48:41.652Z",
		"size": 9288,
		"path": "../public/assets/about-BxO8a3VK.js"
	},
	"/assets/accordion-BtKt6GVy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b9b-M5Dj9um3Np1SMh8WGzCXfwWNHgU\"",
		"mtime": "2026-08-23T15:48:41.652Z",
		"size": 7067,
		"path": "../public/assets/accordion-BtKt6GVy.js"
	},
	"/her-fitness-logo.png": {
		"type": "image/png",
		"etag": "\"952e-Lhtnl8af3An40K/xVuppkY2SMbw\"",
		"mtime": "2026-08-21T08:12:15.400Z",
		"size": 38190,
		"path": "../public/her-fitness-logo.png"
	},
	"/assets/arrow-left-A3znn8rO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-gJgVZeuJHPvwnSMPdKYRREedwN8\"",
		"mtime": "2026-08-23T15:48:41.654Z",
		"size": 155,
		"path": "../public/assets/arrow-left-A3znn8rO.js"
	},
	"/assets/arrow-up-right-CfedwX1j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-J3dO19ugvTkoOmx2CVWT5Fh21Mo\"",
		"mtime": "2026-08-23T15:48:41.654Z",
		"size": 157,
		"path": "../public/assets/arrow-up-right-CfedwX1j.js"
	},
	"/assets/award-VAqQ2zEl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"108-cOeztnkJMazkw2Ox4RCnsOWKwok\"",
		"mtime": "2026-08-23T15:48:41.654Z",
		"size": 264,
		"path": "../public/assets/award-VAqQ2zEl.js"
	},
	"/assets/blogs.index-B8br9UKW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b87-wSNTj0DlDbe5LeIA0gwu5e9lUh4\"",
		"mtime": "2026-08-23T15:48:41.655Z",
		"size": 11143,
		"path": "../public/assets/blogs.index-B8br9UKW.js"
	},
	"/assets/blogs.manage-C72K1gq6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5407-1KRd9U0NnZuaH/JfTlJib5WStQ0\"",
		"mtime": "2026-08-23T15:48:41.655Z",
		"size": 21511,
		"path": "../public/assets/blogs.manage-C72K1gq6.js"
	},
	"/assets/blogs._blogId-Bujr6kMU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fa2-pptaS5W+1KQWxBWxMoiSkh5UrT0\"",
		"mtime": "2026-08-23T15:48:41.655Z",
		"size": 8098,
		"path": "../public/assets/blogs._blogId-Bujr6kMU.js"
	},
	"/assets/calendar-B8-GEmkf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7-YpNLRQgvsPMHMHPr5V8Ca84EZu0\"",
		"mtime": "2026-08-23T15:48:41.655Z",
		"size": 247,
		"path": "../public/assets/calendar-B8-GEmkf.js"
	},
	"/assets/browserUpload-CwpNx7Vl-lYeaOtZY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1238-gCM5ObSNXVxjQY033Prd5unWVeg\"",
		"mtime": "2026-08-23T15:48:41.655Z",
		"size": 4664,
		"path": "../public/assets/browserUpload-CwpNx7Vl-lYeaOtZY.js"
	},
	"/assets/clock-D_EMOQxT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-esXhANvWGAJvzUi0R3z0HulqyOE\"",
		"mtime": "2026-08-23T15:48:41.655Z",
		"size": 159,
		"path": "../public/assets/clock-D_EMOQxT.js"
	},
	"/assets/ContactForm-Dk0a3sYN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d4-L+WwN0yfaeAnjht0T+T/cjkev2k\"",
		"mtime": "2026-08-23T15:48:41.631Z",
		"size": 5076,
		"path": "../public/assets/ContactForm-Dk0a3sYN.js"
	},
	"/assets/flame-F_9d3AHe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd-7uWIx1rrSX/c0nMtcCUb0PZrIlo\"",
		"mtime": "2026-08-23T15:48:41.656Z",
		"size": 189,
		"path": "../public/assets/flame-F_9d3AHe.js"
	},
	"/assets/Footer-DHcoclKe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3a3-OmWWg+/soQgNJmIN/aoHn0SQxRc\"",
		"mtime": "2026-08-23T15:48:41.640Z",
		"size": 41891,
		"path": "../public/assets/Footer-DHcoclKe.js"
	},
	"/assets/input-3QK_uIeF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26e-/l/BANSN1f/M4enqH0wesdi+E0o\"",
		"mtime": "2026-08-23T15:48:41.656Z",
		"size": 622,
		"path": "../public/assets/input-3QK_uIeF.js"
	},
	"/assets/isRecord-Kfmt-nk--BGze3w87.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f-bd4ZYllBi+6/ZVs6N0B4M+X0a8o\"",
		"mtime": "2026-08-23T15:48:41.656Z",
		"size": 79,
		"path": "../public/assets/isRecord-Kfmt-nk--BGze3w87.js"
	},
	"/assets/ChatBot-BZIvOuuX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2121d-mCuZ9gs76t3mKrnuSilXHLKXFak\"",
		"mtime": "2026-08-23T15:48:41.631Z",
		"size": 135709,
		"path": "../public/assets/ChatBot-BZIvOuuX.js"
	},
	"/assets/hero-B1S2zmaL.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e87f-xzfzkTsxWXZSUm5x7yHic7o7MH8\"",
		"mtime": "2026-08-23T15:48:41.665Z",
		"size": 125055,
		"path": "../public/assets/hero-B1S2zmaL.jpg"
	},
	"/assets/lazyRouteComponent-q9hFxgLb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"122f-sXfei/IxTdRz7MsTUpSxbZspf4g\"",
		"mtime": "2026-08-23T15:48:41.656Z",
		"size": 4655,
		"path": "../public/assets/lazyRouteComponent-q9hFxgLb.js"
	},
	"/assets/locations.index-DNxx-04s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cec-URGYWlUhHOnMnxZZ07xBO7JVM/o\"",
		"mtime": "2026-08-23T15:48:41.661Z",
		"size": 3308,
		"path": "../public/assets/locations.index-DNxx-04s.js"
	},
	"/assets/locations-CvAkZsLy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b5a6-aQH67iML5kHDLz3n1PvLd5kXjf8\"",
		"mtime": "2026-08-23T15:48:41.656Z",
		"size": 46502,
		"path": "../public/assets/locations-CvAkZsLy.js"
	},
	"/assets/locations._location-BLrF8Xwi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"343f-gbRf5hFGkobAe4fRRWQQh0kyc8I\"",
		"mtime": "2026-08-23T15:48:41.660Z",
		"size": 13375,
		"path": "../public/assets/locations._location-BLrF8Xwi.js"
	},
	"/assets/index-DcgqyLQq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d47e-pnwXjjdYGn7urAIe9dyDWaLI+X0\"",
		"mtime": "2026-08-23T15:48:41.625Z",
		"size": 316542,
		"path": "../public/assets/index-DcgqyLQq.js"
	},
	"/assets/pen-line-C9AHaAw-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ed-xxP12nFG82pJVIsInYO/wZd0tGs\"",
		"mtime": "2026-08-23T15:48:41.661Z",
		"size": 493,
		"path": "../public/assets/pen-line-C9AHaAw-.js"
	},
	"/assets/preload-helper-Czpn1I53.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ac-sE+5KsaRXTMfwOfrOATQajMSGV4\"",
		"mtime": "2026-08-23T15:48:41.661Z",
		"size": 1196,
		"path": "../public/assets/preload-helper-Czpn1I53.js"
	},
	"/assets/program-hiit-CTRQ9bcW.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ae58-JXenTNfYTtd5vItlCsh9x1h7yvo\"",
		"mtime": "2026-08-23T15:48:41.676Z",
		"size": 110168,
		"path": "../public/assets/program-hiit-CTRQ9bcW.jpg"
	},
	"/assets/program-yoga-CBFdhOF5.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c953-TAX86ZTuSJSt6vnztG7xGXBZaWk\"",
		"mtime": "2026-08-23T15:48:41.676Z",
		"size": 117075,
		"path": "../public/assets/program-yoga-CBFdhOF5.jpg"
	},
	"/assets/program-dance-CoByVy_V.jpg": {
		"type": "image/jpeg",
		"etag": "\"19aa2-NZ21q1r776BCRUIVsE/QnpN+nDU\"",
		"mtime": "2026-08-23T15:48:41.665Z",
		"size": 105122,
		"path": "../public/assets/program-dance-CoByVy_V.jpg"
	},
	"/assets/resolveEditInfo-Cz-smq3a-CvR8xTEJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1598-2tnP2+p83IfaX0Tlr2OTVsOsFG0\"",
		"mtime": "2026-08-23T15:48:41.661Z",
		"size": 5528,
		"path": "../public/assets/resolveEditInfo-Cz-smq3a-CvR8xTEJ.js"
	},
	"/assets/routes-BK5h9YVk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"640d-Uq44tPjO0L6jC19BaCN9nUcp3Sk\"",
		"mtime": "2026-08-23T15:48:41.662Z",
		"size": 25613,
		"path": "../public/assets/routes-BK5h9YVk.js"
	},
	"/assets/request-BhMuKj0D-BKzybUpc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6aeb-CLaXssjQtbZVB/md13qhmylEJ1Q\"",
		"mtime": "2026-08-23T15:48:41.661Z",
		"size": 27371,
		"path": "../public/assets/request-BhMuKj0D-BKzybUpc.js"
	},
	"/assets/services-BUawF_Kf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21f8-ghreL/84gbryb8j6HLaeUMe5KBw\"",
		"mtime": "2026-08-23T15:48:41.664Z",
		"size": 8696,
		"path": "../public/assets/services-BUawF_Kf.js"
	},
	"/assets/services.index-D8bwU_fl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1064-H2M7lffOtPZdu5oww3eLvwsobpk\"",
		"mtime": "2026-08-23T15:48:41.664Z",
		"size": 4196,
		"path": "../public/assets/services.index-D8bwU_fl.js"
	},
	"/assets/services._service-BJ31ieai.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22d9-yw9DmHLx9y7pOPEDUBhdg0CyCHs\"",
		"mtime": "2026-08-23T15:48:41.664Z",
		"size": 8921,
		"path": "../public/assets/services._service-BJ31ieai.js"
	},
	"/assets/program-strength-CpWBYe0M.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a78a-5/Xd7ltZ25x2m3iwnJzvnsPRNF8\"",
		"mtime": "2026-08-23T15:48:41.676Z",
		"size": 108426,
		"path": "../public/assets/program-strength-CpWBYe0M.jpg"
	},
	"/assets/stegaEncodeSourceMap-YR3NQ3iz-Dt-8YFO2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e48-fV5pjem0FtpAaiMG1j2Tlk96bos\"",
		"mtime": "2026-08-23T15:48:41.664Z",
		"size": 3656,
		"path": "../public/assets/stegaEncodeSourceMap-YR3NQ3iz-Dt-8YFO2.js"
	},
	"/assets/select-D2XyMX9j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14fd9-/fnpyZgfe40/7fPnQ5mc30HzPvg\"",
		"mtime": "2026-08-23T15:48:41.664Z",
		"size": 85977,
		"path": "../public/assets/select-D2XyMX9j.js"
	},
	"/assets/Testimonials-BTE_N23n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"357f-IUutU8rbUIhGUSuH08vkN4iSGMc\"",
		"mtime": "2026-08-23T15:48:41.640Z",
		"size": 13695,
		"path": "../public/assets/Testimonials-BTE_N23n.js"
	},
	"/assets/styles-DJpbUpkM.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1ae91-o4oFpUXJyo2vg8/M9e52IomuVhE\"",
		"mtime": "2026-08-23T15:48:41.677Z",
		"size": 110225,
		"path": "../public/assets/styles-DJpbUpkM.css"
	},
	"/assets/sanity-qxa4XFcB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16574-9oSbtsCTEKIymvdeJ7br0q1jiKE\"",
		"mtime": "2026-08-23T15:48:41.663Z",
		"size": 91508,
		"path": "../public/assets/sanity-qxa4XFcB.js"
	},
	"/assets/trainer-1-BC46LgLj.jpg": {
		"type": "image/jpeg",
		"etag": "\"12ee3-9KvNhBIMGQZjv+bDV1J9hoJ85pY\"",
		"mtime": "2026-08-23T15:48:41.677Z",
		"size": 77539,
		"path": "../public/assets/trainer-1-BC46LgLj.jpg"
	},
	"/assets/trainer-2-D3SfsvHD.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e14e-/mT+K0kd7/s9U3XUQBcSOALFck8\"",
		"mtime": "2026-08-23T15:48:41.677Z",
		"size": 123214,
		"path": "../public/assets/trainer-2-D3SfsvHD.jpg"
	},
	"/assets/trainer-3-Brc5FLD3.jpg": {
		"type": "image/jpeg",
		"etag": "\"22376-cWm+LjWbj32MB5FpHXsKoFyvYwk\"",
		"mtime": "2026-08-23T15:48:41.677Z",
		"size": 140150,
		"path": "../public/assets/trainer-3-Brc5FLD3.jpg"
	},
	"/assets/trainer-5-DeS-66-e.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b721-ke+oZI4akwDs3q2zXkH4xLe94aQ\"",
		"mtime": "2026-08-23T15:48:41.678Z",
		"size": 112417,
		"path": "../public/assets/trainer-5-DeS-66-e.jpg"
	},
	"/assets/trainer-4-CajSSGIp.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e3bc-4EwRwv0TgN1sUeobbn5BnCfVsns\"",
		"mtime": "2026-08-23T15:48:41.678Z",
		"size": 123836,
		"path": "../public/assets/trainer-4-CajSSGIp.jpg"
	},
	"/assets/trainer-6-jCCK2rif.jpg": {
		"type": "image/jpeg",
		"etag": "\"18711-LULXTt7IDTqzxtR2VNRBQ0XuugM\"",
		"mtime": "2026-08-23T15:48:41.678Z",
		"size": 100113,
		"path": "../public/assets/trainer-6-jCCK2rif.jpg"
	},
	"/assets/trainer-7-Dkxa1O5N.jpg": {
		"type": "image/jpeg",
		"etag": "\"184d7-cRcZuMjIlr20LR4uuOtByidTa/s\"",
		"mtime": "2026-08-23T15:48:41.678Z",
		"size": 99543,
		"path": "../public/assets/trainer-7-Dkxa1O5N.jpg"
	},
	"/assets/trainer-8-Df93LgX-.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c513-1RmXjnoZWtJSopZd0GONAHZ1PpY\"",
		"mtime": "2026-08-23T15:48:41.679Z",
		"size": 115987,
		"path": "../public/assets/trainer-8-Df93LgX-.jpg"
	},
	"/assets/trainers-BPjNzhZu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fae-Yjg1w42EMTjAQIQbjzQBuNOKNMc\"",
		"mtime": "2026-08-23T15:48:41.665Z",
		"size": 8110,
		"path": "../public/assets/trainers-BPjNzhZu.js"
	},
	"/assets/Trainers-RzWd7nVs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7c-Uiig8wLYKu7P0kF6Ju24dYdzmqM\"",
		"mtime": "2026-08-23T15:48:41.640Z",
		"size": 2684,
		"path": "../public/assets/Trainers-RzWd7nVs.js"
	},
	"/assets/trainer-9-B58p9S-B.jpg": {
		"type": "image/jpeg",
		"etag": "\"159da-Bo4rN6svdf0bm4/JuJfUoXqYHx0\"",
		"mtime": "2026-08-23T15:48:41.679Z",
		"size": 88538,
		"path": "../public/assets/trainer-9-B58p9S-B.jpg"
	},
	"/assets/Transformations-CmRUl8uY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d4-LSdWEk02zmOENCErScTOP6NT6HA\"",
		"mtime": "2026-08-23T15:48:41.641Z",
		"size": 2516,
		"path": "../public/assets/Transformations-CmRUl8uY.js"
	},
	"/assets/tslib.es6-DBiTlYkD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11ec-WNbYtdcHiYO9gQeu2MpSZ5nBXdU\"",
		"mtime": "2026-08-23T15:48:41.665Z",
		"size": 4588,
		"path": "../public/assets/tslib.es6-DBiTlYkD.js"
	},
	"/assets/use-transform-B6yW2aqO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"539-cLIxF+NAWmyIkQieXiE2ZwiSl9I\"",
		"mtime": "2026-08-23T15:48:41.665Z",
		"size": 1337,
		"path": "../public/assets/use-transform-B6yW2aqO.js"
	},
	"/assets/transform-3-B9V5LuM0.jpg": {
		"type": "image/jpeg",
		"etag": "\"fb28-ZIpCguKNLyjz3Ru9AOJxLnz1ki8\"",
		"mtime": "2026-08-23T15:48:41.680Z",
		"size": 64296,
		"path": "../public/assets/transform-3-B9V5LuM0.jpg"
	},
	"/assets/transform-2-C9zQETKC.jpg": {
		"type": "image/jpeg",
		"etag": "\"12e42-mS0Ff/PcSJr/6NO4rjnm9KYa+N4\"",
		"mtime": "2026-08-23T15:48:41.679Z",
		"size": 77378,
		"path": "../public/assets/transform-2-C9zQETKC.jpg"
	},
	"/assets/transform-1-C3Cs5Gru.jpg": {
		"type": "image/jpeg",
		"etag": "\"17458-mid6ulnF6lsebSZi6oVyiJkZxIE\"",
		"mtime": "2026-08-23T15:48:41.679Z",
		"size": 95320,
		"path": "../public/assets/transform-1-C3Cs5Gru.jpg"
	},
	"/assets/users-DWPeqn4u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"128-xIyl5GUuYFFf//iPXH18q7kkJ/g\"",
		"mtime": "2026-08-23T15:48:41.665Z",
		"size": 296,
		"path": "../public/assets/users-DWPeqn4u.js"
	},
	"/videos/README.md": {
		"type": "text/markdown; charset=utf-8",
		"etag": "\"2dc-gwOCJA2Pdl8jza0uU3vljK4nTbc\"",
		"mtime": "2026-08-21T08:12:14.994Z",
		"size": 732,
		"path": "../public/videos/README.md"
	},
	"/assets/VideoBlock-CGjG6gAX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c20-CsFgj23knWxYC+InnonCzUIetms\"",
		"mtime": "2026-08-23T15:48:41.649Z",
		"size": 11296,
		"path": "../public/assets/VideoBlock-CGjG6gAX.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_aTdSNS = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_aTdSNS
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
