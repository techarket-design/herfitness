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
	"/her-fitness-logo.png": {
		"type": "image/png",
		"etag": "\"952e-Lhtnl8af3An40K/xVuppkY2SMbw\"",
		"mtime": "2026-08-21T08:12:15.400Z",
		"size": 38190,
		"path": "../public/her-fitness-logo.png"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"86d-CILTQj9o7zsfSBRzXN34upmRO+I\"",
		"mtime": "2026-08-23T19:57:47.955Z",
		"size": 2157,
		"path": "../public/sitemap.xml"
	},
	"/assets/About-dwarka-BjIEHpC5.jpg": {
		"type": "image/jpeg",
		"etag": "\"144a9-lOLkCTBuWUfxSVKUg2oFmvorr4I\"",
		"mtime": "2026-08-23T20:05:37.353Z",
		"size": 83113,
		"path": "../public/assets/About-dwarka-BjIEHpC5.jpg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"43-8lGKQ3GXMfr0fIjtR4WieQI+57I\"",
		"mtime": "2026-08-23T19:57:45.192Z",
		"size": 67,
		"path": "../public/robots.txt"
	},
	"/assets/About-janakpuri-CcN-Lum9.jpg": {
		"type": "image/jpeg",
		"etag": "\"a5e6-qBCFS7KGyEtVVRfgvchwgVvBxiQ\"",
		"mtime": "2026-08-23T20:05:37.354Z",
		"size": 42470,
		"path": "../public/assets/About-janakpuri-CcN-Lum9.jpg"
	},
	"/assets/About-kirti-nagar--4bfXs7a.jpg": {
		"type": "image/jpeg",
		"etag": "\"15a9e-++x4zOvb4/QcBivxyEeqaP4u3fU\"",
		"mtime": "2026-08-23T20:05:37.354Z",
		"size": 88734,
		"path": "../public/assets/About-kirti-nagar--4bfXs7a.jpg"
	},
	"/assets/About-paschim-vihar-DpjXOw8o.jpg": {
		"type": "image/jpeg",
		"etag": "\"163db-iF6bv4ZauxSbwb5al4jWqEkSV+k\"",
		"mtime": "2026-08-23T20:05:37.354Z",
		"size": 91099,
		"path": "../public/assets/About-paschim-vihar-DpjXOw8o.jpg"
	},
	"/assets/About-prashant-vihar--a_r9fMY.jpg": {
		"type": "image/jpeg",
		"etag": "\"16bca-MltI+UMgMmvwOsAImPR3rUGSCHQ\"",
		"mtime": "2026-08-23T20:05:37.354Z",
		"size": 93130,
		"path": "../public/assets/About-prashant-vihar--a_r9fMY.jpg"
	},
	"/assets/About-Punjabi bagh-DYm5xCLK.jpg": {
		"type": "image/jpeg",
		"etag": "\"10ab2-+HLm69ejAyht4ohjGYymCA/wS4A\"",
		"mtime": "2026-08-23T20:05:37.353Z",
		"size": 68274,
		"path": "../public/assets/About-Punjabi bagh-DYm5xCLK.jpg"
	},
	"/assets/About-rajouri-garden-BBWgqejP.jpg": {
		"type": "image/jpeg",
		"etag": "\"fcc3-HkMHpsXmeeAqX2yUOSxBznW20J0\"",
		"mtime": "2026-08-23T20:05:37.354Z",
		"size": 64707,
		"path": "../public/assets/About-rajouri-garden-BBWgqejP.jpg"
	},
	"/assets/about-S_u380tY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2448-NCVk3nNTEcVUsKsAU8swQ9j4dhU\"",
		"mtime": "2026-08-23T20:05:37.349Z",
		"size": 9288,
		"path": "../public/assets/about-S_u380tY.js"
	},
	"/assets/accordion-TxyFbJx4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b9b-6aHiCDyFAyNVzS3Kf+Nmz/FAxxE\"",
		"mtime": "2026-08-23T20:05:37.349Z",
		"size": 7067,
		"path": "../public/assets/accordion-TxyFbJx4.js"
	},
	"/assets/arrow-left-D2SWup8p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-dmOg2PkqT3j+c+T/SM6qCkfxM7A\"",
		"mtime": "2026-08-23T20:05:37.349Z",
		"size": 155,
		"path": "../public/assets/arrow-left-D2SWup8p.js"
	},
	"/assets/arrow-up-right-DXvP8hPZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-khFc/ZgidG25+l2gTSgpqKYYEhg\"",
		"mtime": "2026-08-23T20:05:37.349Z",
		"size": 157,
		"path": "../public/assets/arrow-up-right-DXvP8hPZ.js"
	},
	"/assets/blogs.index-Bx4K7DZo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b87-RI6pljs8pw/9wUm7caI+OKL1wtM\"",
		"mtime": "2026-08-23T20:05:37.350Z",
		"size": 11143,
		"path": "../public/assets/blogs.index-Bx4K7DZo.js"
	},
	"/assets/award-BV1cLY0J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"108-oQErdgTNnlcZSR5vwslSqG7bSFY\"",
		"mtime": "2026-08-23T20:05:37.349Z",
		"size": 264,
		"path": "../public/assets/award-BV1cLY0J.js"
	},
	"/assets/blogs.manage-CnaHNmhc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5407-w6vx9Eh+aZUfe9mRLkPsiiJiuVw\"",
		"mtime": "2026-08-23T20:05:37.350Z",
		"size": 21511,
		"path": "../public/assets/blogs.manage-CnaHNmhc.js"
	},
	"/assets/About-vikas-puri-BWBGOxpK.jpg": {
		"type": "image/jpeg",
		"etag": "\"14d7c-CUIewwoFEhaovzJYLhbeR1oJ13I\"",
		"mtime": "2026-08-23T20:05:37.354Z",
		"size": 85372,
		"path": "../public/assets/About-vikas-puri-BWBGOxpK.jpg"
	},
	"/assets/blogs._blogId-BywtIlBm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fa2-CuPnva465W4ELVAsizyzUv4TRtI\"",
		"mtime": "2026-08-23T20:05:37.349Z",
		"size": 8098,
		"path": "../public/assets/blogs._blogId-BywtIlBm.js"
	},
	"/assets/calendar-BXk3wY_T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7-eQhAhAR988O1e8Y35sVDJquVY0w\"",
		"mtime": "2026-08-23T20:05:37.350Z",
		"size": 247,
		"path": "../public/assets/calendar-BXk3wY_T.js"
	},
	"/assets/browserUpload-CwpNx7Vl-lYeaOtZY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1238-gCM5ObSNXVxjQY033Prd5unWVeg\"",
		"mtime": "2026-08-23T20:05:37.350Z",
		"size": 4664,
		"path": "../public/assets/browserUpload-CwpNx7Vl-lYeaOtZY.js"
	},
	"/assets/clock-DEzEEJkl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-2CXm0of3cqCI/DwDpoYUatdKRQk\"",
		"mtime": "2026-08-23T20:05:37.350Z",
		"size": 159,
		"path": "../public/assets/clock-DEzEEJkl.js"
	},
	"/assets/ContactForm-DyLQ2e_b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13cf-ROe+vDC4LyZprvRYIoGEsU2/jIc\"",
		"mtime": "2026-08-23T20:05:37.346Z",
		"size": 5071,
		"path": "../public/assets/ContactForm-DyLQ2e_b.js"
	},
	"/assets/flame-LFQh6RRZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd-QZ6Wz8hXcYnClc3N4fX5iYnvCaQ\"",
		"mtime": "2026-08-23T20:05:37.350Z",
		"size": 189,
		"path": "../public/assets/flame-LFQh6RRZ.js"
	},
	"/assets/Footer-DA75LIY3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3a3-pqEo3WAvxULeJXL6N+XwG61I8DM\"",
		"mtime": "2026-08-23T20:05:37.347Z",
		"size": 41891,
		"path": "../public/assets/Footer-DA75LIY3.js"
	},
	"/assets/Gallery-dwarka1-D4yZcssq.jpg": {
		"type": "image/jpeg",
		"etag": "\"7ed0-4KSDE+8ekAwRJinxlL+frKJK6FY\"",
		"mtime": "2026-08-23T20:05:37.355Z",
		"size": 32464,
		"path": "../public/assets/Gallery-dwarka1-D4yZcssq.jpg"
	},
	"/assets/Gallery-dwarka2-NKVsBIbf.jpg": {
		"type": "image/jpeg",
		"etag": "\"7633-XYrIG4Q4xK5i8YN/oRAOyb1pzek\"",
		"mtime": "2026-08-23T20:05:37.355Z",
		"size": 30259,
		"path": "../public/assets/Gallery-dwarka2-NKVsBIbf.jpg"
	},
	"/assets/Gallery-dwarka3-C6POE7Yi.jpg": {
		"type": "image/jpeg",
		"etag": "\"7971-ilA1yyNKW7STYnnfE/7hNulLB2Y\"",
		"mtime": "2026-08-23T20:05:37.356Z",
		"size": 31089,
		"path": "../public/assets/Gallery-dwarka3-C6POE7Yi.jpg"
	},
	"/assets/Gallery-dwarka4-BkatXnbY.jpg": {
		"type": "image/jpeg",
		"etag": "\"9114-ZjMLdl8bhVKijgmiB5vllcTN+dQ\"",
		"mtime": "2026-08-23T20:05:37.356Z",
		"size": 37140,
		"path": "../public/assets/Gallery-dwarka4-BkatXnbY.jpg"
	},
	"/assets/Gallery-janakpuri1-CwBNY7Zl.jpg": {
		"type": "image/jpeg",
		"etag": "\"8053-6mfnuTKG6vMFoTa8LIOtZbXOCIQ\"",
		"mtime": "2026-08-23T20:05:37.356Z",
		"size": 32851,
		"path": "../public/assets/Gallery-janakpuri1-CwBNY7Zl.jpg"
	},
	"/assets/Gallery-janakpuri2-DuSDx1Bd.jpg": {
		"type": "image/jpeg",
		"etag": "\"a372-E9vRf4/MJQHLfEca/rWdDGpRVg8\"",
		"mtime": "2026-08-23T20:05:37.356Z",
		"size": 41842,
		"path": "../public/assets/Gallery-janakpuri2-DuSDx1Bd.jpg"
	},
	"/assets/Gallery-janakpuri3-1zyrJX5C.jpg": {
		"type": "image/jpeg",
		"etag": "\"8832-Jp7gfswkI1hEhH59bC8aFiEheWQ\"",
		"mtime": "2026-08-23T20:05:37.356Z",
		"size": 34866,
		"path": "../public/assets/Gallery-janakpuri3-1zyrJX5C.jpg"
	},
	"/assets/Gallery-janakpuri4-DQro5tUL.jpg": {
		"type": "image/jpeg",
		"etag": "\"7a23-Sj5N0odjX26zWPqdbwCsWCNu/Pk\"",
		"mtime": "2026-08-23T20:05:37.356Z",
		"size": 31267,
		"path": "../public/assets/Gallery-janakpuri4-DQro5tUL.jpg"
	},
	"/assets/Gallery-kirti-nagar1-qVjUYAUU.jpg": {
		"type": "image/jpeg",
		"etag": "\"931a-O5n0vhYDxRs+hlrxV8D69eDRk3k\"",
		"mtime": "2026-08-23T20:05:37.356Z",
		"size": 37658,
		"path": "../public/assets/Gallery-kirti-nagar1-qVjUYAUU.jpg"
	},
	"/assets/Gallery-kirti-nagar2-BXv9Ua9X.jpg": {
		"type": "image/jpeg",
		"etag": "\"6fb8-B740u32VWqOR1ia5nzNwNr3uHcU\"",
		"mtime": "2026-08-23T20:05:37.357Z",
		"size": 28600,
		"path": "../public/assets/Gallery-kirti-nagar2-BXv9Ua9X.jpg"
	},
	"/assets/Gallery-kirti-nagar3-0X0eVhIk.jpg": {
		"type": "image/jpeg",
		"etag": "\"a175-ggHsByJAmgsuRCnrvmb+RdwxI1s\"",
		"mtime": "2026-08-23T20:05:37.357Z",
		"size": 41333,
		"path": "../public/assets/Gallery-kirti-nagar3-0X0eVhIk.jpg"
	},
	"/assets/Gallery-kirti-nagar4-ry7Xfgpb.jpg": {
		"type": "image/jpeg",
		"etag": "\"8eea-FVLaXNCejxFVPicxexyPr8Cd9Ao\"",
		"mtime": "2026-08-23T20:05:37.357Z",
		"size": 36586,
		"path": "../public/assets/Gallery-kirti-nagar4-ry7Xfgpb.jpg"
	},
	"/assets/Gallery-paschim-vihar1-CwcT6JJj.jpg": {
		"type": "image/jpeg",
		"etag": "\"8647-sCcqyLt7tlz1T/daqfAZnYFlOzg\"",
		"mtime": "2026-08-23T20:05:37.357Z",
		"size": 34375,
		"path": "../public/assets/Gallery-paschim-vihar1-CwcT6JJj.jpg"
	},
	"/assets/Gallery-paschim-vihar2-DfXTDsiq.jpg": {
		"type": "image/jpeg",
		"etag": "\"6a0b-ho0myIV/EC3cmOIqy5lP9pr6Q0Q\"",
		"mtime": "2026-08-23T20:05:37.357Z",
		"size": 27147,
		"path": "../public/assets/Gallery-paschim-vihar2-DfXTDsiq.jpg"
	},
	"/assets/Gallery-paschim-vihar3-DeENoXtP.jpg": {
		"type": "image/jpeg",
		"etag": "\"76c4-4jfAYdEcuwib0R3a9DtMbUXGGgE\"",
		"mtime": "2026-08-23T20:05:37.357Z",
		"size": 30404,
		"path": "../public/assets/Gallery-paschim-vihar3-DeENoXtP.jpg"
	},
	"/assets/Gallery-paschim-vihar4-1r9QRIJL.jpg": {
		"type": "image/jpeg",
		"etag": "\"6639-UXkB5dbkXZXt6AO6j3kzaJB8D2o\"",
		"mtime": "2026-08-23T20:05:37.357Z",
		"size": 26169,
		"path": "../public/assets/Gallery-paschim-vihar4-1r9QRIJL.jpg"
	},
	"/assets/Gallery-prashant-vihar1-DEeh_uqn.jpg": {
		"type": "image/jpeg",
		"etag": "\"abec-3m7dzgRLxwcZAWCwa0R4x3SDf44\"",
		"mtime": "2026-08-23T20:05:37.358Z",
		"size": 44012,
		"path": "../public/assets/Gallery-prashant-vihar1-DEeh_uqn.jpg"
	},
	"/assets/Gallery-prashant-vihar3-C8W1khb_.jpg": {
		"type": "image/jpeg",
		"etag": "\"7df0-cf3dWl/D4g6900IP/aRBFYCemWA\"",
		"mtime": "2026-08-23T20:05:37.358Z",
		"size": 32240,
		"path": "../public/assets/Gallery-prashant-vihar3-C8W1khb_.jpg"
	},
	"/assets/Gallery-prashant-vihar2-Dyi3o_5v.jpg": {
		"type": "image/jpeg",
		"etag": "\"84ed-875xvE+2j/rkyrqC9wiuOoGgoP8\"",
		"mtime": "2026-08-23T20:05:37.358Z",
		"size": 34029,
		"path": "../public/assets/Gallery-prashant-vihar2-Dyi3o_5v.jpg"
	},
	"/assets/Gallery-prashant-vihar4-DwzFFLca.jpg": {
		"type": "image/jpeg",
		"etag": "\"9b2f-E4/5ggBTwz7RuVeIUuXXhtOt864\"",
		"mtime": "2026-08-23T20:05:37.358Z",
		"size": 39727,
		"path": "../public/assets/Gallery-prashant-vihar4-DwzFFLca.jpg"
	},
	"/assets/Gallery-Punjabi bagh2-am3htALh.jpg": {
		"type": "image/jpeg",
		"etag": "\"8270-7KBY0I79a8R3V6vrwIuUBX+gjQc\"",
		"mtime": "2026-08-23T20:05:37.355Z",
		"size": 33392,
		"path": "../public/assets/Gallery-Punjabi bagh2-am3htALh.jpg"
	},
	"/assets/Gallery-Punjabi bagh1-DtKa5oFG.jpg": {
		"type": "image/jpeg",
		"etag": "\"8b00-9b7fRyE4RJVX9jM3Nttwy28aemQ\"",
		"mtime": "2026-08-23T20:05:37.355Z",
		"size": 35584,
		"path": "../public/assets/Gallery-Punjabi bagh1-DtKa5oFG.jpg"
	},
	"/assets/Gallery-Punjabi bagh3-BiqJ_acr.jpg": {
		"type": "image/jpeg",
		"etag": "\"79e9-88l9xbpOB+IaE+uU7yAiQRnttqc\"",
		"mtime": "2026-08-23T20:05:37.355Z",
		"size": 31209,
		"path": "../public/assets/Gallery-Punjabi bagh3-BiqJ_acr.jpg"
	},
	"/assets/Gallery-Punjabi bagh4-DIAcOE3Q.jpg": {
		"type": "image/jpeg",
		"etag": "\"834e-9RUKd66hHyC2EDE6M2PthG0STYE\"",
		"mtime": "2026-08-23T20:05:37.355Z",
		"size": 33614,
		"path": "../public/assets/Gallery-Punjabi bagh4-DIAcOE3Q.jpg"
	},
	"/assets/Gallery-rajouri-garden1-B1D0Id-O.jpg": {
		"type": "image/jpeg",
		"etag": "\"779a-rkbEYyjnIsSEesOXj3jeLipi5v8\"",
		"mtime": "2026-08-23T20:05:37.358Z",
		"size": 30618,
		"path": "../public/assets/Gallery-rajouri-garden1-B1D0Id-O.jpg"
	},
	"/assets/Gallery-rajouri-garden2-BzRD-J3x.jpg": {
		"type": "image/jpeg",
		"etag": "\"7509-9YZ6MAVF3qWWJkSMV6+19AY42xg\"",
		"mtime": "2026-08-23T20:05:37.358Z",
		"size": 29961,
		"path": "../public/assets/Gallery-rajouri-garden2-BzRD-J3x.jpg"
	},
	"/assets/Gallery-rajouri-garden3-DZCU9PaV.jpg": {
		"type": "image/jpeg",
		"etag": "\"7659-HvVmwCUHUQCo29td2RfJZb3iBVI\"",
		"mtime": "2026-08-23T20:05:37.359Z",
		"size": 30297,
		"path": "../public/assets/Gallery-rajouri-garden3-DZCU9PaV.jpg"
	},
	"/assets/Gallery-rajouri-garden4-BoIgrzzR.jpg": {
		"type": "image/jpeg",
		"etag": "\"7ae0-jYBudlZjj+qwDCCdctFUGoAFr4I\"",
		"mtime": "2026-08-23T20:05:37.359Z",
		"size": 31456,
		"path": "../public/assets/Gallery-rajouri-garden4-BoIgrzzR.jpg"
	},
	"/assets/Gallery-vikas-puri1-BpRUHvuE.jpg": {
		"type": "image/jpeg",
		"etag": "\"6dd9-tfrrITet1sa7UeeT2UHm0TIXNFo\"",
		"mtime": "2026-08-23T20:05:37.359Z",
		"size": 28121,
		"path": "../public/assets/Gallery-vikas-puri1-BpRUHvuE.jpg"
	},
	"/assets/Gallery-vikas-puri2-BvV_Se-j.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f7e-luMqjDfddWSM/l1jUWchoAyO4Kw\"",
		"mtime": "2026-08-23T20:05:37.359Z",
		"size": 28542,
		"path": "../public/assets/Gallery-vikas-puri2-BvV_Se-j.jpg"
	},
	"/assets/Gallery-vikas-puri3-buJ3Ho66.jpg": {
		"type": "image/jpeg",
		"etag": "\"7a2e-nQBPeFk68qDStx9WJbZ07n66Vac\"",
		"mtime": "2026-08-23T20:05:37.359Z",
		"size": 31278,
		"path": "../public/assets/Gallery-vikas-puri3-buJ3Ho66.jpg"
	},
	"/assets/Gallery-vikas-puri4-AWZJFY0q.jpg": {
		"type": "image/jpeg",
		"etag": "\"8ce3-A9Bg4VLGLkBaLQwvM8xNqjPOalc\"",
		"mtime": "2026-08-23T20:05:37.359Z",
		"size": 36067,
		"path": "../public/assets/Gallery-vikas-puri4-AWZJFY0q.jpg"
	},
	"/assets/hero-DJflrJ4f.jpg": {
		"type": "image/jpeg",
		"etag": "\"470a4-poH8uGK1UlY/sRHUFyR71T/BS2I\"",
		"mtime": "2026-08-23T20:05:37.362Z",
		"size": 290980,
		"path": "../public/assets/hero-DJflrJ4f.jpg"
	},
	"/assets/Hero-dwarka-DOqWj62h.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d1c5-NGqHKplDquLjh1n8xFO2jqc9KfA\"",
		"mtime": "2026-08-23T20:05:37.359Z",
		"size": 250309,
		"path": "../public/assets/Hero-dwarka-DOqWj62h.jpg"
	},
	"/assets/Hero-janakpuri-CHS5w53x.jpg": {
		"type": "image/jpeg",
		"etag": "\"4bf60-UGRsaJIgC0um6JdnsUVDE3Nd7W0\"",
		"mtime": "2026-08-23T20:05:37.360Z",
		"size": 311136,
		"path": "../public/assets/Hero-janakpuri-CHS5w53x.jpg"
	},
	"/assets/Hero-kirti nagar-BVcYObkF.jpg": {
		"type": "image/jpeg",
		"etag": "\"36b76-mSQZLmT2PcWx0h36ZCNa8Gc/c4c\"",
		"mtime": "2026-08-23T20:05:37.360Z",
		"size": 224118,
		"path": "../public/assets/Hero-kirti nagar-BVcYObkF.jpg"
	},
	"/assets/Hero-prashant vihar-oMrBXbl2.jpg": {
		"type": "image/jpeg",
		"etag": "\"420d4-4yIbjHc8jZErzIxotFyC0hCBVcM\"",
		"mtime": "2026-08-23T20:05:37.361Z",
		"size": 270548,
		"path": "../public/assets/Hero-prashant vihar-oMrBXbl2.jpg"
	},
	"/assets/Hero-paschim-vihar-B2ggGBt0.jpg": {
		"type": "image/jpeg",
		"etag": "\"45a61-gqKmFCivwb5LgPgwB/3z9YgcVr4\"",
		"mtime": "2026-08-23T20:05:37.360Z",
		"size": 285281,
		"path": "../public/assets/Hero-paschim-vihar-B2ggGBt0.jpg"
	},
	"/assets/Hero-rajouri-garden-Pzr6eCTE.jpg": {
		"type": "image/jpeg",
		"etag": "\"34c9f-/RnU/JgQojnyoG/5QcFubge0uR8\"",
		"mtime": "2026-08-23T20:05:37.361Z",
		"size": 216223,
		"path": "../public/assets/Hero-rajouri-garden-Pzr6eCTE.jpg"
	},
	"/assets/Hero-vikas puri-BHGos0Mg.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b41a-ysSqed8hYL1OcyNKEA8yzSQES5k\"",
		"mtime": "2026-08-23T20:05:37.361Z",
		"size": 177178,
		"path": "../public/assets/Hero-vikas puri-BHGos0Mg.jpg"
	},
	"/assets/Hero-punjabi bagh-D38Rno8I.jpg": {
		"type": "image/jpeg",
		"etag": "\"72c14-zzK+T1FI+65yia8g9JZm18/42qk\"",
		"mtime": "2026-08-23T20:05:37.361Z",
		"size": 470036,
		"path": "../public/assets/Hero-punjabi bagh-D38Rno8I.jpg"
	},
	"/assets/input-b8R4NfFe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26e-dkrfcP1tIo0nmCaESmMBlK8J/qk\"",
		"mtime": "2026-08-23T20:05:37.350Z",
		"size": 622,
		"path": "../public/assets/input-b8R4NfFe.js"
	},
	"/assets/isRecord-Kfmt-nk--BGze3w87.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f-bd4ZYllBi+6/ZVs6N0B4M+X0a8o\"",
		"mtime": "2026-08-23T20:05:37.350Z",
		"size": 79,
		"path": "../public/assets/isRecord-Kfmt-nk--BGze3w87.js"
	},
	"/assets/lazyRouteComponent-RCseDZmn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1194-arKZc5a48t4d9FMbTMthY10Q0Tw\"",
		"mtime": "2026-08-23T20:05:37.351Z",
		"size": 4500,
		"path": "../public/assets/lazyRouteComponent-RCseDZmn.js"
	},
	"/assets/index-DQ-XrTB_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4dba9-6Q/yG5cIf4vCvnzUFVTL+3ceyrQ\"",
		"mtime": "2026-08-23T20:05:37.346Z",
		"size": 318377,
		"path": "../public/assets/index-DQ-XrTB_.js"
	},
	"/assets/locations-D-2m1VB2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a885-FKfslGDCYXoC8xqWb5LKYhaBxbU\"",
		"mtime": "2026-08-23T20:05:37.351Z",
		"size": 43141,
		"path": "../public/assets/locations-D-2m1VB2.js"
	},
	"/assets/locations.index-DibCNcpJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cec-YteKmuFlwVqOz4o8xPNBqPx2Wmk\"",
		"mtime": "2026-08-23T20:05:37.351Z",
		"size": 3308,
		"path": "../public/assets/locations.index-DibCNcpJ.js"
	},
	"/assets/ChatBot-FwfGaCHU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2121d-GKqLGRmSHTOq+keP2qt1NIusXi0\"",
		"mtime": "2026-08-23T20:05:37.346Z",
		"size": 135709,
		"path": "../public/assets/ChatBot-FwfGaCHU.js"
	},
	"/assets/preload-helper-Czpn1I53.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ac-sE+5KsaRXTMfwOfrOATQajMSGV4\"",
		"mtime": "2026-08-23T20:05:37.351Z",
		"size": 1196,
		"path": "../public/assets/preload-helper-Czpn1I53.js"
	},
	"/assets/pen-line-BGuLOwMV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ed-PccDxWtEU1hPpvKOFlKVgTCzlik\"",
		"mtime": "2026-08-23T20:05:37.351Z",
		"size": 493,
		"path": "../public/assets/pen-line-BGuLOwMV.js"
	},
	"/assets/locations._location-qgcjv7gU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"343f-W3XAqZIeO1PGzc1Dj9+CUSjZvKQ\"",
		"mtime": "2026-08-23T20:05:37.351Z",
		"size": 13375,
		"path": "../public/assets/locations._location-qgcjv7gU.js"
	},
	"/assets/program-dance-CoByVy_V.jpg": {
		"type": "image/jpeg",
		"etag": "\"19aa2-NZ21q1r776BCRUIVsE/QnpN+nDU\"",
		"mtime": "2026-08-23T20:05:37.362Z",
		"size": 105122,
		"path": "../public/assets/program-dance-CoByVy_V.jpg"
	},
	"/assets/program-hiit-CTRQ9bcW.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ae58-JXenTNfYTtd5vItlCsh9x1h7yvo\"",
		"mtime": "2026-08-23T20:05:37.362Z",
		"size": 110168,
		"path": "../public/assets/program-hiit-CTRQ9bcW.jpg"
	},
	"/assets/resolveEditInfo-Cz-smq3a-CvR8xTEJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1598-2tnP2+p83IfaX0Tlr2OTVsOsFG0\"",
		"mtime": "2026-08-23T20:05:37.351Z",
		"size": 5528,
		"path": "../public/assets/resolveEditInfo-Cz-smq3a-CvR8xTEJ.js"
	},
	"/assets/program-strength-CpWBYe0M.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a78a-5/Xd7ltZ25x2m3iwnJzvnsPRNF8\"",
		"mtime": "2026-08-23T20:05:37.362Z",
		"size": 108426,
		"path": "../public/assets/program-strength-CpWBYe0M.jpg"
	},
	"/assets/request-BhMuKj0D-BKzybUpc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6aeb-CLaXssjQtbZVB/md13qhmylEJ1Q\"",
		"mtime": "2026-08-23T20:05:37.351Z",
		"size": 27371,
		"path": "../public/assets/request-BhMuKj0D-BKzybUpc.js"
	},
	"/assets/program-yoga-CBFdhOF5.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c953-TAX86ZTuSJSt6vnztG7xGXBZaWk\"",
		"mtime": "2026-08-23T20:05:37.362Z",
		"size": 117075,
		"path": "../public/assets/program-yoga-CBFdhOF5.jpg"
	},
	"/assets/routes-CsiuN4r4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6408-2fR/9zc91kNnh5EvBHPQ1hCpGLA\"",
		"mtime": "2026-08-23T20:05:37.352Z",
		"size": 25608,
		"path": "../public/assets/routes-CsiuN4r4.js"
	},
	"/assets/services-a4XWYuzs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21f8-3qcapouvnVDB6j2aCZ8B75kD7v8\"",
		"mtime": "2026-08-23T20:05:37.352Z",
		"size": 8696,
		"path": "../public/assets/services-a4XWYuzs.js"
	},
	"/assets/services.index-6yebJ4Ng.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1064-sgUbKbFBUQPnY8dmDK/IcuX24/0\"",
		"mtime": "2026-08-23T20:05:37.352Z",
		"size": 4196,
		"path": "../public/assets/services.index-6yebJ4Ng.js"
	},
	"/assets/sanity-CQeKOB-b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16574-5J5WQw+/6HBrTNrphLV+wBjTtVA\"",
		"mtime": "2026-08-23T20:05:37.352Z",
		"size": 91508,
		"path": "../public/assets/sanity-CQeKOB-b.js"
	},
	"/assets/select-DjPEzXcN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14ff9-2qbruROE2M6e499EOlr8nLgP2ZQ\"",
		"mtime": "2026-08-23T20:05:37.352Z",
		"size": 86009,
		"path": "../public/assets/select-DjPEzXcN.js"
	},
	"/assets/services._service-BMw7DSGO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22d9-M6FTfFLEURh0gnBSYwogQN+7mJo\"",
		"mtime": "2026-08-23T20:05:37.352Z",
		"size": 8921,
		"path": "../public/assets/services._service-BMw7DSGO.js"
	},
	"/assets/stegaEncodeSourceMap-YR3NQ3iz-Dt-8YFO2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e48-fV5pjem0FtpAaiMG1j2Tlk96bos\"",
		"mtime": "2026-08-23T20:05:37.353Z",
		"size": 3656,
		"path": "../public/assets/stegaEncodeSourceMap-YR3NQ3iz-Dt-8YFO2.js"
	},
	"/assets/Testimonials-xSKxGsVt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"357f-HMENobkLOIW8OUn6Cz3Ke9dOIjI\"",
		"mtime": "2026-08-23T20:05:37.347Z",
		"size": 13695,
		"path": "../public/assets/Testimonials-xSKxGsVt.js"
	},
	"/assets/styles-D9u6Es4s.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1aead-juTDqQtlGF26Fz7OEYivOSartxE\"",
		"mtime": "2026-08-23T20:05:37.363Z",
		"size": 110253,
		"path": "../public/assets/styles-D9u6Es4s.css"
	},
	"/assets/trainer-1-BC46LgLj.jpg": {
		"type": "image/jpeg",
		"etag": "\"12ee3-9KvNhBIMGQZjv+bDV1J9hoJ85pY\"",
		"mtime": "2026-08-23T20:05:37.363Z",
		"size": 77539,
		"path": "../public/assets/trainer-1-BC46LgLj.jpg"
	},
	"/assets/trainer-2-D3SfsvHD.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e14e-/mT+K0kd7/s9U3XUQBcSOALFck8\"",
		"mtime": "2026-08-23T20:05:37.363Z",
		"size": 123214,
		"path": "../public/assets/trainer-2-D3SfsvHD.jpg"
	},
	"/assets/trainer-3-Brc5FLD3.jpg": {
		"type": "image/jpeg",
		"etag": "\"22376-cWm+LjWbj32MB5FpHXsKoFyvYwk\"",
		"mtime": "2026-08-23T20:05:37.363Z",
		"size": 140150,
		"path": "../public/assets/trainer-3-Brc5FLD3.jpg"
	},
	"/assets/trainer-5-DeS-66-e.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b721-ke+oZI4akwDs3q2zXkH4xLe94aQ\"",
		"mtime": "2026-08-23T20:05:37.364Z",
		"size": 112417,
		"path": "../public/assets/trainer-5-DeS-66-e.jpg"
	},
	"/assets/trainer-4-CajSSGIp.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e3bc-4EwRwv0TgN1sUeobbn5BnCfVsns\"",
		"mtime": "2026-08-23T20:05:37.364Z",
		"size": 123836,
		"path": "../public/assets/trainer-4-CajSSGIp.jpg"
	},
	"/assets/trainer-6-jCCK2rif.jpg": {
		"type": "image/jpeg",
		"etag": "\"18711-LULXTt7IDTqzxtR2VNRBQ0XuugM\"",
		"mtime": "2026-08-23T20:05:37.364Z",
		"size": 100113,
		"path": "../public/assets/trainer-6-jCCK2rif.jpg"
	},
	"/assets/trainer-7-Dkxa1O5N.jpg": {
		"type": "image/jpeg",
		"etag": "\"184d7-cRcZuMjIlr20LR4uuOtByidTa/s\"",
		"mtime": "2026-08-23T20:05:37.364Z",
		"size": 99543,
		"path": "../public/assets/trainer-7-Dkxa1O5N.jpg"
	},
	"/assets/trainers-D6fqdIwj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2032-vf1TVls4BXbWF6UuW3Wng49Sf18\"",
		"mtime": "2026-08-23T20:05:37.353Z",
		"size": 8242,
		"path": "../public/assets/trainers-D6fqdIwj.js"
	},
	"/assets/trainer-8-Df93LgX-.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c513-1RmXjnoZWtJSopZd0GONAHZ1PpY\"",
		"mtime": "2026-08-23T20:05:37.364Z",
		"size": 115987,
		"path": "../public/assets/trainer-8-Df93LgX-.jpg"
	},
	"/assets/trainer-9-B58p9S-B.jpg": {
		"type": "image/jpeg",
		"etag": "\"159da-Bo4rN6svdf0bm4/JuJfUoXqYHx0\"",
		"mtime": "2026-08-23T20:05:37.364Z",
		"size": 88538,
		"path": "../public/assets/trainer-9-B58p9S-B.jpg"
	},
	"/assets/Trainers-JRweou8g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7c-8OX4tzHYuXQpl/7U7sisZzxj/Jw\"",
		"mtime": "2026-08-23T20:05:37.348Z",
		"size": 2684,
		"path": "../public/assets/Trainers-JRweou8g.js"
	},
	"/assets/transform-1-C3Cs5Gru.jpg": {
		"type": "image/jpeg",
		"etag": "\"17458-mid6ulnF6lsebSZi6oVyiJkZxIE\"",
		"mtime": "2026-08-23T20:05:37.364Z",
		"size": 95320,
		"path": "../public/assets/transform-1-C3Cs5Gru.jpg"
	},
	"/assets/transform-2-C9zQETKC.jpg": {
		"type": "image/jpeg",
		"etag": "\"12e42-mS0Ff/PcSJr/6NO4rjnm9KYa+N4\"",
		"mtime": "2026-08-23T20:05:37.365Z",
		"size": 77378,
		"path": "../public/assets/transform-2-C9zQETKC.jpg"
	},
	"/assets/Transformations-CYknBj1N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d4-uPBaC240lfvSgUgex6hP2o9hxJ0\"",
		"mtime": "2026-08-23T20:05:37.348Z",
		"size": 2516,
		"path": "../public/assets/Transformations-CYknBj1N.js"
	},
	"/assets/tslib.es6-DBiTlYkD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11ec-WNbYtdcHiYO9gQeu2MpSZ5nBXdU\"",
		"mtime": "2026-08-23T20:05:37.353Z",
		"size": 4588,
		"path": "../public/assets/tslib.es6-DBiTlYkD.js"
	},
	"/assets/transform-3-B9V5LuM0.jpg": {
		"type": "image/jpeg",
		"etag": "\"fb28-ZIpCguKNLyjz3Ru9AOJxLnz1ki8\"",
		"mtime": "2026-08-23T20:05:37.365Z",
		"size": 64296,
		"path": "../public/assets/transform-3-B9V5LuM0.jpg"
	},
	"/assets/use-transform-Dqwg7YRQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"539-UMOJR24Ndu4IPARzJ8V2fM5+Bjo\"",
		"mtime": "2026-08-23T20:05:37.353Z",
		"size": 1337,
		"path": "../public/assets/use-transform-Dqwg7YRQ.js"
	},
	"/assets/users-B2DMfj1f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"128-tKlYpVodGpshdBvahgNbiY4xOec\"",
		"mtime": "2026-08-23T20:05:37.353Z",
		"size": 296,
		"path": "../public/assets/users-B2DMfj1f.js"
	},
	"/assets/VideoBlock-BPMPtmdl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c20-4A/r2xGe8d/g82JHtZB7aCbGciU\"",
		"mtime": "2026-08-23T20:05:37.349Z",
		"size": 11296,
		"path": "../public/assets/VideoBlock-BPMPtmdl.js"
	},
	"/videos/README.md": {
		"type": "text/markdown; charset=utf-8",
		"etag": "\"2dc-gwOCJA2Pdl8jza0uU3vljK4nTbc\"",
		"mtime": "2026-08-23T19:01:22.318Z",
		"size": 732,
		"path": "../public/videos/README.md"
	},
	"/videos/services-showcase.mp4": {
		"type": "video/mp4",
		"etag": "\"41ad879-j494k3mAQtlTJIr2Kxku1ybmfgE\"",
		"mtime": "2026-08-23T19:00:27.006Z",
		"size": 68868217,
		"path": "../public/videos/services-showcase.mp4"
	},
	"/videos/gym-showcase.mp4": {
		"type": "video/mp4",
		"etag": "\"45351f0-T7zxW0o1L5+Q4ACUtvHb58i0ydw\"",
		"mtime": "2026-08-23T18:55:46.754Z",
		"size": 72569328,
		"path": "../public/videos/gym-showcase.mp4"
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
