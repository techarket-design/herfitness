import { r as __exportAll$1 } from "../../_runtime.mjs";
import { C as __values, S as __spreadArray, _ as __await, b as __generator, g as __asyncValues, h as __asyncGenerator, v as __awaiter, x as __read, y as __extends } from "../@radix-ui/react-select+[...].mjs";
import processModule from "node:process";
import { Buffer } from "node:buffer";
import { formatWithOptions, inspect } from "node:util";
//#region node_modules/@sanity/client/dist/isRecord-Kfmt-nk-.js
/** @internal */
function isRecord$1(value) {
	return typeof value == "object" && !!value && !Array.isArray(value);
}
//#endregion
//#region node_modules/get-it/dist/errorGuards-C36CfYld.js
/**
* An error thrown when an HTTP request fails with a non-2xx status code.
* Contains details about the request and response for debugging purposes.
*
* @public
*/
var HttpError = class extends Error {
	constructor(opts) {
		let url = opts.url.length > 400 ? opts.url.slice(0, 399) + "…" : opts.url;
		super(`${opts.method}-request to ${url} resulted in HTTP ${opts.status} ${opts.statusText}`), this.name = "HttpError", this.url = opts.url, this.method = opts.method, this.status = opts.status, this.statusText = opts.statusText, this.headers = opts.headers, this.body = opts.body, this.response = opts.response;
	}
};
var TimeoutError = class extends Error {
	constructor(opts) {
		let url = opts.url.length > 400 ? opts.url.slice(0, 399) + "…" : opts.url;
		super(`Request timed out after ${opts.timeoutMs}ms waiting for response headers: ${opts.method} ${url}`), this.name = "TimeoutError", this.url = opts.url, this.method = opts.method, this.timeoutMs = opts.timeoutMs, this.phase = opts.phase, this.code = "ETIMEDOUT";
	}
};
var decoder;
/**
* Creates a {@link BufferedResponse} from raw response parts. Text and JSON
* decoding are lazy and cached — the body bytes are only decoded on first access.
*
* @param status - HTTP status code.
* @param statusText - HTTP status text.
* @param headers - Response headers.
* @param body - Raw response body bytes.
* @param url - Final response URL after redirects.
* @param redirected - Whether the response resulted from following a redirect.
* @returns A buffered response with `text()`, `json()`, and `bytes()` accessors.
*
* @internal
*/
function createBufferedResponse(status, statusText, headers, body, url, redirected) {
	let cachedText, cachedJson;
	return {
		status,
		statusText,
		headers,
		url,
		redirected,
		body,
		text() {
			return cachedText ??= (decoder ??= new TextDecoder()).decode(body);
		},
		json() {
			return (cachedJson ??= { value: JSON.parse(this.text()) }).value;
		},
		bytes() {
			return body;
		}
	};
}
function createRequester(options) {
	let instanceFetch = options?.fetch, instanceBase = options?.base, instanceHttpErrors = options?.httpErrors, instanceTimeout = options?.timeout, instanceCredentials = options?.credentials, middleware = options?.middleware ?? [], transforms = [], wrappers = [];
	for (let mw of middleware) typeof mw == "object" ? transforms.push(mw) : wrappers.push(mw);
	/**
	* Builds fetch args, applies the headers-phase timeout when configured,
	* and performs the fetch. Lives inside the wrapping-middleware chain, so
	* each retry() attempt gets a fresh headers timer.
	*/
	async function performFetch(fetchFn, opts) {
		let { totalMs, headersMs, attachSignal } = resolveTimeout(opts.timeout === void 0 ? instanceTimeout : opts.timeout), { url, init, clearTotalTimer } = buildFetchArgs(opts, attachSignal ? totalMs : void 0, instanceCredentials), method = init.method ?? "GET", totalTimeout = !attachSignal && totalMs !== void 0 ? rejectAfterTimeout(totalMs, new DOMException("The operation was aborted due to timeout", "TimeoutError")) : void 0, totalDeadline = totalTimeout?.deadline, clearDeadline = () => {
			clearTotalTimer?.(), totalTimeout?.clear();
		};
		if (headersMs === void 0 && totalDeadline === void 0) try {
			return {
				response: await fetchFn(url, init),
				url,
				method,
				totalDeadline,
				clearDeadline
			};
		} catch (reason) {
			throw clearDeadline(), reason;
		}
		let deadlines = totalDeadline === void 0 ? [] : [totalDeadline], timer, controller;
		if (headersMs !== void 0) {
			let timeoutError = new TimeoutError({
				url,
				method,
				timeoutMs: headersMs,
				phase: "headers"
			});
			controller = attachSignal ? new AbortController() : void 0, deadlines.push(new Promise((_, reject) => {
				timer = setTimeout(() => {
					reject(timeoutError), controller?.abort(timeoutError);
				}, headersMs);
			}));
		}
		let signal = controller && init.signal ? AbortSignal.any([init.signal, controller.signal]) : controller?.signal ?? init.signal, fetching;
		try {
			return fetching = Promise.resolve(controller ? fetchFn(url, {
				...init,
				signal
			}) : fetchFn(url, init)), {
				response: await Promise.race([fetching, ...deadlines]),
				url,
				method,
				totalDeadline,
				clearDeadline
			};
		} catch (reason) {
			throw fetching?.then((response) => response.body?.cancel()).catch(() => {}), clearDeadline(), reason;
		} finally {
			clearTimeout(timer);
		}
	}
	/**
	* Core fetch + buffer function. This is the innermost layer
	* that wrapping middlewares eventually call.
	*/
	async function getItBuffered(opts) {
		let { response, url, method, totalDeadline, clearDeadline } = await performFetch(opts.fetch ?? instanceFetch ?? globalThis.fetch, opts), httpErrors = opts.httpErrors ?? instanceHttpErrors ?? !0;
		try {
			return await raceDeadline(bufferAndCheck(response, httpErrors, url, method), totalDeadline);
		} finally {
			clearDeadline();
		}
	}
	let fetchChain = composeFetchChain(getItBuffered, wrappers);
	async function requestJson(opts) {
		let transformedOpts = runBeforeRequest(opts, transforms), buffered = runAfterResponse(await fetchChain(transformedOpts), transformedOpts, transforms);
		try {
			return responseOf(buffered, JSON.parse(buffered.text()));
		} catch (cause) {
			throw TypeError(`Failed to parse JSON response from ${opts.url}: ${cause instanceof Error ? cause.message : cause}`, { cause });
		}
	}
	async function requestText(opts) {
		let transformedOpts = runBeforeRequest(opts, transforms), buffered = runAfterResponse(await fetchChain(transformedOpts), transformedOpts, transforms);
		return responseOf(buffered, buffered.text());
	}
	async function requestStream(opts) {
		let transformedOpts = runBeforeRequest(opts, transforms), capturedResponse;
		async function getItStreamed(reqOpts) {
			let { response, url, method, totalDeadline, clearDeadline } = await performFetch(reqOpts.fetch ?? instanceFetch ?? globalThis.fetch, reqOpts), httpErrors = reqOpts.httpErrors ?? instanceHttpErrors ?? !0;
			if (httpErrors && response.status >= 400) try {
				return await raceDeadline(bufferAndCheck(response, httpErrors, url, method), totalDeadline);
			} finally {
				clearDeadline();
			}
			return totalDeadline !== void 0 && clearDeadline(), capturedResponse = response, createBufferedResponse(response.status, response.statusText, response.headers, /* @__PURE__ */ new Uint8Array(), response.url, response.redirected);
		}
		if (defineFnName(getItStreamed, "getItStreamed"), await composeFetchChain(getItStreamed, wrappers)(transformedOpts), !capturedResponse) throw Error("Stream response was not captured");
		let streamBody = capturedResponse.body ?? new ReadableStream({ start(controller) {
			controller.close();
		} });
		return responseOf(capturedResponse, streamBody);
	}
	async function request(input) {
		let raw = typeof input == "string" ? { url: input } : input, url = raw.url;
		instanceBase && !/^https?:\/\//.test(url) && (url = instanceBase.replace(/\/$/, "") + "/" + url.replace(/^\//, ""));
		let opts = {
			...raw,
			url,
			headers: mergeHeaders(options?.headers, raw.headers)
		};
		switch (opts.as ?? options?.as) {
			case "json": return await requestJson(opts);
			case "text": return await requestText(opts);
			case "stream": return await requestStream(opts);
			default: {
				let transformedOpts = runBeforeRequest(opts, transforms);
				return runAfterResponse(await fetchChain(transformedOpts), transformedOpts, transforms);
			}
		}
	}
	return defineFnName(performFetch, "performFetch"), defineFnName(getItBuffered, "getItBuffered"), defineFnName(requestStream, "requestStream"), defineFnName(requestJson, "requestJson"), defineFnName(requestText, "requestText"), defineFnName(request, "request"), request;
}
/**
* Normalizes a `timeout` option value into per-phase millisecond values.
* `false` and values <= 0 disable a phase; an omitted `total` falls back to
* the 120 000 ms default. A plain number or `false` is total-only shorthand.
* @internal
*/
function resolveTimeout(value) {
	return typeof value == "number" || value === !1 ? {
		totalMs: enabledMs(value),
		headersMs: void 0,
		attachSignal: !0
	} : {
		totalMs: value?.total === void 0 ? 12e4 : enabledMs(value.total),
		headersMs: enabledMs(value?.headers),
		attachSignal: value?.signal !== !1
	};
}
function enabledMs(value) {
	if (!(value === void 0 || value === !1 || value <= 0)) return value;
}
/**
* Prevents a pending deadline timer from holding the Node.js event loop open
* for the full timeout window; no-op on platforms without timer.unref().
*/
function unrefTimer(timer) {
	typeof timer == "object" && timer && "unref" in timer && typeof timer.unref == "function" && timer.unref();
}
/**
* Creates the rejection-only (`timeout: {signal: false}`) total deadline: a
* promise that rejects with `reason` once `ms` elapses. Pre-armed with a
* no-op catch handler so the rejection never becomes "unhandled" when the
* guarded work settles first. The timer is unref'd so it cannot hold the
* Node.js event loop open, and `clear` releases it entirely once the request
* settles.
*/
function rejectAfterTimeout(ms, reason) {
	let timer, deadline = new Promise((_, reject) => {
		timer = setTimeout(() => reject(reason), ms), unrefTimer(timer);
	});
	return deadline.catch(() => {}), {
		deadline,
		clear: () => clearTimeout(timer)
	};
}
/**
* Awaits `work` while a rejection-only total deadline keeps racing it. If the
* deadline wins, `work` continues in the background — its eventual settlement
* is swallowed so it cannot become an unhandled rejection.
*/
async function raceDeadline(work, deadline) {
	if (deadline === void 0) return work;
	try {
		return await Promise.race([work, deadline]);
	} catch (reason) {
		throw work.catch(() => {}), reason;
	}
}
function isPlainObject(value) {
	if (typeof value != "object" || !value || Array.isArray(value)) return !1;
	let proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null;
}
/**
* Type guard narrowing an `unknown` request body to a binary `FetchBody`.
*/
function isBinaryBody(value) {
	return value instanceof Blob || value instanceof ArrayBuffer || value instanceof ReadableStream || ArrayBuffer.isView(value) || value instanceof FormData || value instanceof URLSearchParams;
}
/**
* Sanitize a FetchHeaders value by stripping entries with undefined values.
* Plain Records may contain undefined if callers bypass TypeScript checks;
* `new Headers()` would stringify them to the literal string "undefined".
*/
function sanitizeHeaders(input) {
	if (input instanceof Headers || Array.isArray(input)) return input;
	let clean = {};
	for (let [key, value] of Object.entries(input)) value !== void 0 && (clean[key] = value);
	return clean;
}
/**
* Merge two FetchHeaders values into a plain Record so that middleware
* can safely spread the result (Headers instances have no enumerable
* own properties and would be lost on `{ ...opts.headers }`).
* The second argument wins on conflicts.
*/
function mergeHeaders(base, override) {
	let headers = new Headers(base ? sanitizeHeaders(base) : void 0);
	override && new Headers(sanitizeHeaders(override)).forEach((value, key) => {
		headers.set(key, value);
	});
	let result = {};
	return headers.forEach((value, key) => {
		result[key] = value;
	}), result;
}
/**
* Build the URL, headers, and fetch init from request options.
* Expects headers to already be merged (via mergeHeaders in request()).
*/
function buildFetchArgs(opts, totalMs, instanceCredentials) {
	let url = opts.url;
	if (opts.query) {
		let entries = opts.query instanceof URLSearchParams ? opts.query.entries() : Object.entries(opts.query), params = new URLSearchParams();
		for (let [key, value] of entries) value !== void 0 && params.append(key, `${value}`);
		let qs = params.toString();
		if (qs) {
			let fragmentStart = url.indexOf("#"), urlWithoutFragment = fragmentStart === -1 ? url : url.slice(0, fragmentStart), fragment = fragmentStart === -1 ? "" : url.slice(fragmentStart);
			url = `${urlWithoutFragment}${urlWithoutFragment.includes("?") ? "&" : "?"}${qs}${fragment}`;
		}
	}
	let headers = new Headers(opts.headers), init = {};
	if (opts.method && (init.method = opts.method), !opts.method && opts.body !== void 0 && opts.body !== null && (init.method = "POST"), opts.body !== void 0 && opts.body !== null) if (typeof opts.body == "string") init.body = opts.body;
	else if (isPlainObject(opts.body) || Array.isArray(opts.body)) init.body = JSON.stringify(opts.body), headers.has("content-type") || headers.set("content-type", "application/json");
	else if (isBinaryBody(opts.body)) init.body = opts.body;
	else throw TypeError(`Unsupported body type: ${typeof opts.body}`);
	init.headers = headers;
	let signal = opts.signal, clearTotalTimer;
	if (totalMs !== void 0) {
		let totalController = new AbortController(), timer = setTimeout(() => totalController.abort(new DOMException("The operation was aborted due to timeout", "TimeoutError")), totalMs);
		unrefTimer(timer), clearTotalTimer = () => clearTimeout(timer), signal = signal ? AbortSignal.any([signal, totalController.signal]) : totalController.signal;
	}
	signal && (init.signal = signal);
	let credentials = opts.credentials ?? instanceCredentials;
	return credentials !== void 0 && (init.credentials = credentials), opts.redirect && (init.redirect = opts.redirect), {
		url,
		init,
		clearTotalTimer
	};
}
/**
* Buffer the response body and create a BufferedResponse.
* Optionally throws HttpError for error status codes.
*/
async function bufferAndCheck(response, httpErrors, requestUrl, requestMethod) {
	let arrayBuffer = await response.arrayBuffer(), bytes = new Uint8Array(arrayBuffer), buffered = createBufferedResponse(response.status, response.statusText, response.headers, bytes, response.url, response.redirected);
	if (httpErrors && response.status >= 400) {
		let error = new HttpError({
			url: requestUrl,
			method: requestMethod,
			status: response.status,
			statusText: response.statusText,
			headers: response.headers,
			body: buffered.text(),
			response: buffered
		});
		throw hasV8StackTraceApi(Error) && Error.captureStackTrace(error, bufferAndCheck), error;
	}
	return buffered;
}
/**
* Compose wrapping middlewares around a core fetch function.
* The first wrapper in the array is outermost (wraps from right to left).
*/
function composeFetchChain(coreFetch, wrappers) {
	let chain = coreFetch;
	for (let i = wrappers.length - 1; i >= 0; i--) {
		let wrapper = wrappers[i], next = chain;
		chain = (opts) => wrapper(opts, next);
	}
	return chain;
}
/**
* Run all beforeRequest transforms sequentially, returning the final options.
*/
function runBeforeRequest(opts, transforms) {
	let result = opts;
	for (let mw of transforms) mw.beforeRequest && (result = mw.beforeRequest(result));
	return result;
}
/**
* Run all afterResponse transforms sequentially, returning the final response.
*/
function runAfterResponse(response, options, transforms) {
	let result = response;
	for (let mw of transforms) mw.afterResponse && (result = mw.afterResponse(result, options));
	return result;
}
function responseOf(source, body) {
	return {
		status: source.status,
		statusText: source.statusText,
		headers: source.headers,
		url: source.url,
		redirected: source.redirected,
		body
	};
}
/**
* V8 (Node, Chrome, Edge) exposes `Error.captureStackTrace` which lets us
* strip internal frames from the stack trace so end-users only see relevant
* call sites. This type guard enables its use without type assertions — the
* API simply doesn't exist on non-V8 engines, where this is a no-op.
*/
function hasV8StackTraceApi(ctor) {
	return "captureStackTrace" in ctor;
}
function defineFnName(fn, name) {
	Object.defineProperty(fn, "name", { value: name });
}
/**
* Checks whether a value has the public shape of a get-it {@link HttpError}.
*
* Unlike `instanceof HttpError`, this recognizes errors created by another
* installed copy of get-it.
*
* @param error - The value to check.
* @returns `true` when the value is a get-it HTTP error.
*
* @public
*/
function isHttpError(error) {
	if (!isRecord(error) || error.name !== "HttpError" || typeof error.message != "string" || typeof error.url != "string" || typeof error.method != "string" || typeof error.status != "number" || typeof error.statusText != "string" || !isHeaders(error.headers) || !("body" in error) || !isRecord(error.response)) return !1;
	let response = error.response;
	return response.status === error.status && typeof response.statusText == "string" && isHeaders(response.headers) && "body" in response && (response.url === void 0 || typeof response.url == "string") && (response.redirected === void 0 || typeof response.redirected == "boolean");
}
function isRecord(value) {
	return typeof value == "object" && !!value;
}
function isHeaders(value) {
	return isRecord(value) && typeof value.get == "function";
}
//#endregion
//#region node_modules/get-it/dist/middleware.js
/**
* Creates a `WrappingMiddleware` that retries failed requests.
*
* By default, retries up to 5 times on transient network errors for
* idempotent methods (`GET`, `HEAD`) using exponential backoff with jitter.
* HTTP errors (4xx/5xx) are never retried.
*
* @param opts - Retry options: `maxRetries` (default `5`) sets the max attempts,
*   `retryDelay` returns the delay in ms for a given attempt (default: exponential
*   backoff `100 * 2^attempt + random(0–100)`), and `shouldRetry` is a predicate
*   that decides if an error is retryable (default: transient network errors on
*   GET/HEAD only). A per-request `maxRetries` option overrides the construction
*   value for that request, in both directions.
* @returns A wrapping middleware that adds retry logic.
*
* @example
* ```ts
* const request = createRequester({
*   middleware: [retry({maxRetries: 3})],
* })
* ```
*
* @public
*/
function retry(opts) {
	let defaultMaxRetries = opts?.maxRetries ?? 5, retryDelay = opts?.retryDelay ?? getRetryDelay, shouldRetry = opts?.shouldRetry ?? isRetryableRequest;
	return async function retryMiddleware(options, next) {
		let maxRetries = typeof options.maxRetries == "number" ? options.maxRetries : defaultMaxRetries, lastError;
		for (let attempt = 0; attempt <= maxRetries; attempt++) try {
			return await next(options);
		} catch (error) {
			if (lastError = error, attempt >= maxRetries || !shouldRetry(error, attempt, options)) throw error;
			await sleep(retryDelay(attempt), options.signal);
		}
		throw lastError;
	};
}
/**
* Default retry delay using exponential backoff with jitter:
* `100ms * 2^attempt + random(0–100ms)`.
*
* @param attemptNumber - Zero-based attempt index.
* @returns Delay in milliseconds before the next retry.
*
* @public
*/
function getRetryDelay(attemptNumber) {
	return 100 * 2 ** attemptNumber + Math.random() * 100;
}
/**
* Default predicate for deciding whether a failed request should be retried.
*
* Returns `true` only for transient network errors on idempotent methods
* (`GET`, `HEAD`). HTTP errors (`HttpError`) are never retried.
*
* @param error - The error thrown by the request.
* @param _attemptNumber - Zero-based attempt index (unused by default).
* @param options - The request options (used to check the HTTP method).
* @returns `true` if the request should be retried.
*
* @public
*/
function isRetryableRequest(error, _attemptNumber, options) {
	let method = (options.method ?? "GET").toUpperCase();
	return method !== "GET" && method !== "HEAD" || error instanceof Error && "name" in error && error.name === "HttpError" ? !1 : isRetryableError(error);
}
/**
* Network error codes that are safe to retry — transient failures where
* the server likely never received (or fully processed) the request.
*/
var RETRYABLE_CODES = /* @__PURE__ */ new Set([
	"ECONNRESET",
	"ECONNREFUSED",
	"ETIMEDOUT",
	"EPIPE",
	"ENOTFOUND",
	"ENETDOWN",
	"EHOSTUNREACH",
	"EAI_AGAIN",
	"UND_ERR_CONNECT_TIMEOUT",
	"UND_ERR_SOCKET"
]);
/**
* Determine if an error is retryable. In Node.js (undici), fetch throws
* `TypeError: fetch failed` with a `.cause` containing the original error
* and its `.code`. In browsers, fetch throws a `TypeError` with no `.cause`
* — those are always network errors and are retryable. In Cloudflare Workers
* (workerd), fetch throws a plain `Error` with no code, but tags transient
* failures with a `retryable: true` property.
*/
function isRetryableError(error) {
	if (!(error instanceof Error)) return !1;
	let code = getErrorCode(error) ?? getErrorCode(error.cause);
	return code ? RETRYABLE_CODES.has(code) : error.name === "TimeoutError" || error.name === "AbortError" ? !1 : "retryable" in error && typeof error.retryable == "boolean" ? error.retryable : error instanceof TypeError;
}
function getErrorCode(error) {
	if (error instanceof Error) return "code" in error && typeof error.code == "string" ? error.code : void 0;
}
function sleep(ms, signal) {
	return new Promise((resolve, reject) => {
		if (signal?.aborted) {
			reject(signal.reason);
			return;
		}
		let timer = setTimeout(resolve, ms);
		signal?.addEventListener("abort", () => {
			clearTimeout(timer), reject(signal.reason);
		}, { once: !0 });
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
	return typeof value === "function";
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
	var _super = function(instance) {
		Error.call(instance);
		instance.stack = (/* @__PURE__ */ new Error()).stack;
	};
	var ctorFunc = createImpl(_super);
	ctorFunc.prototype = Object.create(Error.prototype);
	ctorFunc.prototype.constructor = ctorFunc;
	return ctorFunc;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError = createErrorClass(function(_super) {
	return function UnsubscriptionErrorImpl(errors) {
		_super(this);
		this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
			return i + 1 + ") " + err.toString();
		}).join("\n  ") : "";
		this.name = "UnsubscriptionError";
		this.errors = errors;
	};
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
	if (arr) {
		var index = arr.indexOf(item);
		0 <= index && arr.splice(index, 1);
	}
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = function() {
	function Subscription(initialTeardown) {
		this.initialTeardown = initialTeardown;
		this.closed = false;
		this._parentage = null;
		this._finalizers = null;
	}
	Subscription.prototype.unsubscribe = function() {
		var e_1, _a, e_2, _b;
		var errors;
		if (!this.closed) {
			this.closed = true;
			var _parentage = this._parentage;
			if (_parentage) {
				this._parentage = null;
				if (Array.isArray(_parentage)) try {
					for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) _parentage_1_1.value.remove(this);
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
				else _parentage.remove(this);
			}
			var initialFinalizer = this.initialTeardown;
			if (isFunction(initialFinalizer)) try {
				initialFinalizer();
			} catch (e) {
				errors = e instanceof UnsubscriptionError ? e.errors : [e];
			}
			var _finalizers = this._finalizers;
			if (_finalizers) {
				this._finalizers = null;
				try {
					for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
						var finalizer = _finalizers_1_1.value;
						try {
							execFinalizer(finalizer);
						} catch (err) {
							errors = errors !== null && errors !== void 0 ? errors : [];
							if (err instanceof UnsubscriptionError) errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
							else errors.push(err);
						}
					}
				} catch (e_2_1) {
					e_2 = { error: e_2_1 };
				} finally {
					try {
						if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
					} finally {
						if (e_2) throw e_2.error;
					}
				}
			}
			if (errors) throw new UnsubscriptionError(errors);
		}
	};
	Subscription.prototype.add = function(teardown) {
		var _a;
		if (teardown && teardown !== this) if (this.closed) execFinalizer(teardown);
		else {
			if (teardown instanceof Subscription) {
				if (teardown.closed || teardown._hasParent(this)) return;
				teardown._addParent(this);
			}
			(this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
		}
	};
	Subscription.prototype._hasParent = function(parent) {
		var _parentage = this._parentage;
		return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
	};
	Subscription.prototype._addParent = function(parent) {
		var _parentage = this._parentage;
		this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
	};
	Subscription.prototype._removeParent = function(parent) {
		var _parentage = this._parentage;
		if (_parentage === parent) this._parentage = null;
		else if (Array.isArray(_parentage)) arrRemove(_parentage, parent);
	};
	Subscription.prototype.remove = function(teardown) {
		var _finalizers = this._finalizers;
		_finalizers && arrRemove(_finalizers, teardown);
		if (teardown instanceof Subscription) teardown._removeParent(this);
	};
	Subscription.EMPTY = (function() {
		var empty = new Subscription();
		empty.closed = true;
		return empty;
	})();
	return Subscription;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
	return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
	if (isFunction(finalizer)) finalizer();
	else finalizer.unsubscribe();
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/config.js
var config = {
	onUnhandledError: null,
	onStoppedNotification: null,
	Promise: void 0,
	useDeprecatedSynchronousErrorHandling: false,
	useDeprecatedNextContext: false
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
var timeoutProvider = {
	setTimeout: function(handler, timeout) {
		var args = [];
		for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
		var delegate = timeoutProvider.delegate;
		if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
		return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
	},
	clearTimeout: function(handle) {
		var delegate = timeoutProvider.delegate;
		return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
	},
	delegate: void 0
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function reportUnhandledError(err) {
	timeoutProvider.setTimeout(function() {
		var onUnhandledError = config.onUnhandledError;
		if (onUnhandledError) onUnhandledError(err);
		else throw err;
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() {}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = (function() {
	return createNotification("C", void 0, void 0);
})();
function errorNotification(error) {
	return createNotification("E", void 0, error);
}
function nextNotification(value) {
	return createNotification("N", value, void 0);
}
function createNotification(kind, value, error) {
	return {
		kind,
		value,
		error
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var context = null;
function errorContext(cb) {
	if (config.useDeprecatedSynchronousErrorHandling) {
		var isRoot = !context;
		if (isRoot) context = {
			errorThrown: false,
			error: null
		};
		cb();
		if (isRoot) {
			var _a = context, errorThrown = _a.errorThrown, error = _a.error;
			context = null;
			if (errorThrown) throw error;
		}
	} else cb();
}
function captureError(err) {
	if (config.useDeprecatedSynchronousErrorHandling && context) {
		context.errorThrown = true;
		context.error = err;
	}
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Subscriber.js
var Subscriber = function(_super) {
	__extends(Subscriber, _super);
	function Subscriber(destination) {
		var _this = _super.call(this) || this;
		_this.isStopped = false;
		if (destination) {
			_this.destination = destination;
			if (isSubscription(destination)) destination.add(_this);
		} else _this.destination = EMPTY_OBSERVER;
		return _this;
	}
	Subscriber.create = function(next, error, complete) {
		return new SafeSubscriber(next, error, complete);
	};
	Subscriber.prototype.next = function(value) {
		if (this.isStopped) handleStoppedNotification(nextNotification(value), this);
		else this._next(value);
	};
	Subscriber.prototype.error = function(err) {
		if (this.isStopped) handleStoppedNotification(errorNotification(err), this);
		else {
			this.isStopped = true;
			this._error(err);
		}
	};
	Subscriber.prototype.complete = function() {
		if (this.isStopped) handleStoppedNotification(COMPLETE_NOTIFICATION, this);
		else {
			this.isStopped = true;
			this._complete();
		}
	};
	Subscriber.prototype.unsubscribe = function() {
		if (!this.closed) {
			this.isStopped = true;
			_super.prototype.unsubscribe.call(this);
			this.destination = null;
		}
	};
	Subscriber.prototype._next = function(value) {
		this.destination.next(value);
	};
	Subscriber.prototype._error = function(err) {
		try {
			this.destination.error(err);
		} finally {
			this.unsubscribe();
		}
	};
	Subscriber.prototype._complete = function() {
		try {
			this.destination.complete();
		} finally {
			this.unsubscribe();
		}
	};
	return Subscriber;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
	return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
	function ConsumerObserver(partialObserver) {
		this.partialObserver = partialObserver;
	}
	ConsumerObserver.prototype.next = function(value) {
		var partialObserver = this.partialObserver;
		if (partialObserver.next) try {
			partialObserver.next(value);
		} catch (error) {
			handleUnhandledError(error);
		}
	};
	ConsumerObserver.prototype.error = function(err) {
		var partialObserver = this.partialObserver;
		if (partialObserver.error) try {
			partialObserver.error(err);
		} catch (error) {
			handleUnhandledError(error);
		}
		else handleUnhandledError(err);
	};
	ConsumerObserver.prototype.complete = function() {
		var partialObserver = this.partialObserver;
		if (partialObserver.complete) try {
			partialObserver.complete();
		} catch (error) {
			handleUnhandledError(error);
		}
	};
	return ConsumerObserver;
}();
var SafeSubscriber = function(_super) {
	__extends(SafeSubscriber, _super);
	function SafeSubscriber(observerOrNext, error, complete) {
		var _this = _super.call(this) || this;
		var partialObserver;
		if (isFunction(observerOrNext) || !observerOrNext) partialObserver = {
			next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
			error: error !== null && error !== void 0 ? error : void 0,
			complete: complete !== null && complete !== void 0 ? complete : void 0
		};
		else {
			var context_1;
			if (_this && config.useDeprecatedNextContext) {
				context_1 = Object.create(observerOrNext);
				context_1.unsubscribe = function() {
					return _this.unsubscribe();
				};
				partialObserver = {
					next: observerOrNext.next && bind(observerOrNext.next, context_1),
					error: observerOrNext.error && bind(observerOrNext.error, context_1),
					complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
				};
			} else partialObserver = observerOrNext;
		}
		_this.destination = new ConsumerObserver(partialObserver);
		return _this;
	}
	return SafeSubscriber;
}(Subscriber);
function handleUnhandledError(error) {
	if (config.useDeprecatedSynchronousErrorHandling) captureError(error);
	else reportUnhandledError(error);
}
function defaultErrorHandler(err) {
	throw err;
}
function handleStoppedNotification(notification, subscriber) {
	var onStoppedNotification = config.onStoppedNotification;
	onStoppedNotification && timeoutProvider.setTimeout(function() {
		return onStoppedNotification(notification, subscriber);
	});
}
var EMPTY_OBSERVER = {
	closed: true,
	next: noop,
	error: defaultErrorHandler,
	complete: noop
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = (function() {
	return typeof Symbol === "function" && Symbol.observable || "@@observable";
})();
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
	return x;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/pipe.js
function pipeFromArray(fns) {
	if (fns.length === 0) return identity;
	if (fns.length === 1) return fns[0];
	return function piped(input) {
		return fns.reduce(function(prev, fn) {
			return fn(prev);
		}, input);
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = function() {
	function Observable(subscribe) {
		if (subscribe) this._subscribe = subscribe;
	}
	Observable.prototype.lift = function(operator) {
		var observable = new Observable();
		observable.source = this;
		observable.operator = operator;
		return observable;
	};
	Observable.prototype.subscribe = function(observerOrNext, error, complete) {
		var _this = this;
		var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
		errorContext(function() {
			var _a = _this, operator = _a.operator, source = _a.source;
			subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
		});
		return subscriber;
	};
	Observable.prototype._trySubscribe = function(sink) {
		try {
			return this._subscribe(sink);
		} catch (err) {
			sink.error(err);
		}
	};
	Observable.prototype.forEach = function(next, promiseCtor) {
		var _this = this;
		promiseCtor = getPromiseCtor(promiseCtor);
		return new promiseCtor(function(resolve, reject) {
			var subscriber = new SafeSubscriber({
				next: function(value) {
					try {
						next(value);
					} catch (err) {
						reject(err);
						subscriber.unsubscribe();
					}
				},
				error: reject,
				complete: resolve
			});
			_this.subscribe(subscriber);
		});
	};
	Observable.prototype._subscribe = function(subscriber) {
		var _a;
		return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
	};
	Observable.prototype[observable] = function() {
		return this;
	};
	Observable.prototype.pipe = function() {
		var operations = [];
		for (var _i = 0; _i < arguments.length; _i++) operations[_i] = arguments[_i];
		return pipeFromArray(operations)(this);
	};
	Observable.prototype.toPromise = function(promiseCtor) {
		var _this = this;
		promiseCtor = getPromiseCtor(promiseCtor);
		return new promiseCtor(function(resolve, reject) {
			var value;
			_this.subscribe(function(x) {
				return value = x;
			}, function(err) {
				return reject(err);
			}, function() {
				return resolve(value);
			});
		});
	};
	Observable.create = function(subscribe) {
		return new Observable(subscribe);
	};
	return Observable;
}();
function getPromiseCtor(promiseCtor) {
	var _a;
	return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
	return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
	return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/lift.js
function hasLift(source) {
	return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
	return function(source) {
		if (hasLift(source)) return source.lift(function(liftedSource) {
			try {
				return init(liftedSource, this);
			} catch (err) {
				this.error(err);
			}
		});
		throw new TypeError("Unable to lift unknown Observable type");
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
	return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
	__extends(OperatorSubscriber, _super);
	function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
		var _this = _super.call(this, destination) || this;
		_this.onFinalize = onFinalize;
		_this.shouldUnsubscribe = shouldUnsubscribe;
		_this._next = onNext ? function(value) {
			try {
				onNext(value);
			} catch (err) {
				destination.error(err);
			}
		} : _super.prototype._next;
		_this._error = onError ? function(err) {
			try {
				onError(err);
			} catch (err) {
				destination.error(err);
			} finally {
				this.unsubscribe();
			}
		} : _super.prototype._error;
		_this._complete = onComplete ? function() {
			try {
				onComplete();
			} catch (err) {
				destination.error(err);
			} finally {
				this.unsubscribe();
			}
		} : _super.prototype._complete;
		return _this;
	}
	OperatorSubscriber.prototype.unsubscribe = function() {
		var _a;
		if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
			var closed_1 = this.closed;
			_super.prototype.unsubscribe.call(this);
			!closed_1 && ((_a = this.onFinalize) === null || _a === void 0 || _a.call(this));
		}
	};
	return OperatorSubscriber;
}(Subscriber);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError = createErrorClass(function(_super) {
	return function ObjectUnsubscribedErrorImpl() {
		_super(this);
		this.name = "ObjectUnsubscribedError";
		this.message = "object unsubscribed";
	};
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Subject.js
var Subject = function(_super) {
	__extends(Subject, _super);
	function Subject() {
		var _this = _super.call(this) || this;
		_this.closed = false;
		_this.currentObservers = null;
		_this.observers = [];
		_this.isStopped = false;
		_this.hasError = false;
		_this.thrownError = null;
		return _this;
	}
	Subject.prototype.lift = function(operator) {
		var subject = new AnonymousSubject(this, this);
		subject.operator = operator;
		return subject;
	};
	Subject.prototype._throwIfClosed = function() {
		if (this.closed) throw new ObjectUnsubscribedError();
	};
	Subject.prototype.next = function(value) {
		var _this = this;
		errorContext(function() {
			var e_1, _a;
			_this._throwIfClosed();
			if (!_this.isStopped) {
				if (!_this.currentObservers) _this.currentObservers = Array.from(_this.observers);
				try {
					for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) _c.value.next(value);
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
			}
		});
	};
	Subject.prototype.error = function(err) {
		var _this = this;
		errorContext(function() {
			_this._throwIfClosed();
			if (!_this.isStopped) {
				_this.hasError = _this.isStopped = true;
				_this.thrownError = err;
				var observers = _this.observers;
				while (observers.length) observers.shift().error(err);
			}
		});
	};
	Subject.prototype.complete = function() {
		var _this = this;
		errorContext(function() {
			_this._throwIfClosed();
			if (!_this.isStopped) {
				_this.isStopped = true;
				var observers = _this.observers;
				while (observers.length) observers.shift().complete();
			}
		});
	};
	Subject.prototype.unsubscribe = function() {
		this.isStopped = this.closed = true;
		this.observers = this.currentObservers = null;
	};
	Object.defineProperty(Subject.prototype, "observed", {
		get: function() {
			var _a;
			return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
		},
		enumerable: false,
		configurable: true
	});
	Subject.prototype._trySubscribe = function(subscriber) {
		this._throwIfClosed();
		return _super.prototype._trySubscribe.call(this, subscriber);
	};
	Subject.prototype._subscribe = function(subscriber) {
		this._throwIfClosed();
		this._checkFinalizedStatuses(subscriber);
		return this._innerSubscribe(subscriber);
	};
	Subject.prototype._innerSubscribe = function(subscriber) {
		var _this = this;
		var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
		if (hasError || isStopped) return EMPTY_SUBSCRIPTION;
		this.currentObservers = null;
		observers.push(subscriber);
		return new Subscription(function() {
			_this.currentObservers = null;
			arrRemove(observers, subscriber);
		});
	};
	Subject.prototype._checkFinalizedStatuses = function(subscriber) {
		var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
		if (hasError) subscriber.error(thrownError);
		else if (isStopped) subscriber.complete();
	};
	Subject.prototype.asObservable = function() {
		var observable = new Observable();
		observable.source = this;
		return observable;
	};
	Subject.create = function(destination, source) {
		return new AnonymousSubject(destination, source);
	};
	return Subject;
}(Observable);
var AnonymousSubject = function(_super) {
	__extends(AnonymousSubject, _super);
	function AnonymousSubject(destination, source) {
		var _this = _super.call(this) || this;
		_this.destination = destination;
		_this.source = source;
		return _this;
	}
	AnonymousSubject.prototype.next = function(value) {
		var _a, _b;
		(_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 || _b.call(_a, value);
	};
	AnonymousSubject.prototype.error = function(err) {
		var _a, _b;
		(_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 || _b.call(_a, err);
	};
	AnonymousSubject.prototype.complete = function() {
		var _a, _b;
		(_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 || _b.call(_a);
	};
	AnonymousSubject.prototype._subscribe = function(subscriber) {
		var _a, _b;
		return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
	};
	return AnonymousSubject;
}(Subject);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
	now: function() {
		return (dateTimestampProvider.delegate || Date).now();
	},
	delegate: void 0
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
var Action = function(_super) {
	__extends(Action, _super);
	function Action(scheduler, work) {
		return _super.call(this) || this;
	}
	Action.prototype.schedule = function(state, delay) {
		if (delay === void 0) delay = 0;
		return this;
	};
	return Action;
}(Subscription);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
var intervalProvider = {
	setInterval: function(handler, timeout) {
		var args = [];
		for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
		var delegate = intervalProvider.delegate;
		if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
		return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
	},
	clearInterval: function(handle) {
		var delegate = intervalProvider.delegate;
		return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
	},
	delegate: void 0
};
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
var AsyncAction = function(_super) {
	__extends(AsyncAction, _super);
	function AsyncAction(scheduler, work) {
		var _this = _super.call(this, scheduler, work) || this;
		_this.scheduler = scheduler;
		_this.work = work;
		_this.pending = false;
		return _this;
	}
	AsyncAction.prototype.schedule = function(state, delay) {
		var _a;
		if (delay === void 0) delay = 0;
		if (this.closed) return this;
		this.state = state;
		var id = this.id;
		var scheduler = this.scheduler;
		if (id != null) this.id = this.recycleAsyncId(scheduler, id, delay);
		this.pending = true;
		this.delay = delay;
		this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
		return this;
	};
	AsyncAction.prototype.requestAsyncId = function(scheduler, _id, delay) {
		if (delay === void 0) delay = 0;
		return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
	};
	AsyncAction.prototype.recycleAsyncId = function(_scheduler, id, delay) {
		if (delay === void 0) delay = 0;
		if (delay != null && this.delay === delay && this.pending === false) return id;
		if (id != null) intervalProvider.clearInterval(id);
	};
	AsyncAction.prototype.execute = function(state, delay) {
		if (this.closed) return /* @__PURE__ */ new Error("executing a cancelled action");
		this.pending = false;
		var error = this._execute(state, delay);
		if (error) return error;
		else if (this.pending === false && this.id != null) this.id = this.recycleAsyncId(this.scheduler, this.id, null);
	};
	AsyncAction.prototype._execute = function(state, _delay) {
		var errored = false;
		var errorValue;
		try {
			this.work(state);
		} catch (e) {
			errored = true;
			errorValue = e ? e : /* @__PURE__ */ new Error("Scheduled action threw falsy error");
		}
		if (errored) {
			this.unsubscribe();
			return errorValue;
		}
	};
	AsyncAction.prototype.unsubscribe = function() {
		if (!this.closed) {
			var _a = this, id = _a.id, scheduler = _a.scheduler;
			var actions = scheduler.actions;
			this.work = this.state = this.scheduler = null;
			this.pending = false;
			arrRemove(actions, this);
			if (id != null) this.id = this.recycleAsyncId(scheduler, id, null);
			this.delay = null;
			_super.prototype.unsubscribe.call(this);
		}
	};
	return AsyncAction;
}(Action);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/Scheduler.js
var Scheduler = function() {
	function Scheduler(schedulerActionCtor, now) {
		if (now === void 0) now = Scheduler.now;
		this.schedulerActionCtor = schedulerActionCtor;
		this.now = now;
	}
	Scheduler.prototype.schedule = function(work, delay, state) {
		if (delay === void 0) delay = 0;
		return new this.schedulerActionCtor(this, work).schedule(state, delay);
	};
	Scheduler.now = dateTimestampProvider.now;
	return Scheduler;
}();
var async = new (function(_super) {
	__extends(AsyncScheduler, _super);
	function AsyncScheduler(SchedulerAction, now) {
		if (now === void 0) now = Scheduler.now;
		var _this = _super.call(this, SchedulerAction, now) || this;
		_this.actions = [];
		_this._active = false;
		return _this;
	}
	AsyncScheduler.prototype.flush = function(action) {
		var actions = this.actions;
		if (this._active) {
			actions.push(action);
			return;
		}
		var error;
		this._active = true;
		do
			if (error = action.execute(action.state, action.delay)) break;
		while (action = actions.shift());
		this._active = false;
		if (error) {
			while (action = actions.shift()) action.unsubscribe();
			throw error;
		}
	};
	return AsyncScheduler;
}(Scheduler))(AsyncAction);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/empty.js
var EMPTY = new Observable(function(subscriber) {
	return subscriber.complete();
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function isScheduler(value) {
	return value && isFunction(value.schedule);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/args.js
function last(arr) {
	return arr[arr.length - 1];
}
function popScheduler(args) {
	return isScheduler(last(args)) ? args.pop() : void 0;
}
function popNumber(args, defaultValue) {
	return typeof last(args) === "number" ? args.pop() : defaultValue;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = (function(x) {
	return x && typeof x.length === "number" && typeof x !== "function";
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function isPromise(value) {
	return isFunction(value === null || value === void 0 ? void 0 : value.then);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function isInteropObservable(input) {
	return isFunction(input[observable]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function isAsyncIterable(obj) {
	return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
	return /* @__PURE__ */ new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
	if (typeof Symbol !== "function" || !Symbol.iterator) return "@@iterator";
	return Symbol.iterator;
}
var iterator = getSymbolIterator();
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function isIterable(input) {
	return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function readableStreamLikeToAsyncGenerator(readableStream) {
	return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
		var reader, _a, value, done;
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					reader = readableStream.getReader();
					_b.label = 1;
				case 1:
					_b.trys.push([
						1,
						,
						9,
						10
					]);
					_b.label = 2;
				case 2: return [4, __await(reader.read())];
				case 3:
					_a = _b.sent(), value = _a.value, done = _a.done;
					if (!done) return [3, 5];
					return [4, __await(void 0)];
				case 4: return [2, _b.sent()];
				case 5: return [4, __await(value)];
				case 6: return [4, _b.sent()];
				case 7:
					_b.sent();
					return [3, 2];
				case 8: return [3, 10];
				case 9:
					reader.releaseLock();
					return [7];
				case 10: return [2];
			}
		});
	});
}
function isReadableStreamLike(obj) {
	return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function innerFrom(input) {
	if (input instanceof Observable) return input;
	if (input != null) {
		if (isInteropObservable(input)) return fromInteropObservable(input);
		if (isArrayLike(input)) return fromArrayLike(input);
		if (isPromise(input)) return fromPromise(input);
		if (isAsyncIterable(input)) return fromAsyncIterable(input);
		if (isIterable(input)) return fromIterable(input);
		if (isReadableStreamLike(input)) return fromReadableStreamLike(input);
	}
	throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
	return new Observable(function(subscriber) {
		var obs = obj[observable]();
		if (isFunction(obs.subscribe)) return obs.subscribe(subscriber);
		throw new TypeError("Provided object does not correctly implement Symbol.observable");
	});
}
function fromArrayLike(array) {
	return new Observable(function(subscriber) {
		for (var i = 0; i < array.length && !subscriber.closed; i++) subscriber.next(array[i]);
		subscriber.complete();
	});
}
function fromPromise(promise) {
	return new Observable(function(subscriber) {
		promise.then(function(value) {
			if (!subscriber.closed) {
				subscriber.next(value);
				subscriber.complete();
			}
		}, function(err) {
			return subscriber.error(err);
		}).then(null, reportUnhandledError);
	});
}
function fromIterable(iterable) {
	return new Observable(function(subscriber) {
		var e_1, _a;
		try {
			for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
				var value = iterable_1_1.value;
				subscriber.next(value);
				if (subscriber.closed) return;
			}
		} catch (e_1_1) {
			e_1 = { error: e_1_1 };
		} finally {
			try {
				if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
			} finally {
				if (e_1) throw e_1.error;
			}
		}
		subscriber.complete();
	});
}
function fromAsyncIterable(asyncIterable) {
	return new Observable(function(subscriber) {
		process(asyncIterable, subscriber).catch(function(err) {
			return subscriber.error(err);
		});
	});
}
function fromReadableStreamLike(readableStream) {
	return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
	var asyncIterable_1, asyncIterable_1_1;
	var e_2, _a;
	return __awaiter(this, void 0, void 0, function() {
		var value, e_2_1;
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					_b.trys.push([
						0,
						5,
						6,
						11
					]);
					asyncIterable_1 = __asyncValues(asyncIterable);
					_b.label = 1;
				case 1: return [4, asyncIterable_1.next()];
				case 2:
					if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
					value = asyncIterable_1_1.value;
					subscriber.next(value);
					if (subscriber.closed) return [2];
					_b.label = 3;
				case 3: return [3, 1];
				case 4: return [3, 11];
				case 5:
					e_2_1 = _b.sent();
					e_2 = { error: e_2_1 };
					return [3, 11];
				case 6:
					_b.trys.push([
						6,
						,
						9,
						10
					]);
					if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
					return [4, _a.call(asyncIterable_1)];
				case 7:
					_b.sent();
					_b.label = 8;
				case 8: return [3, 10];
				case 9:
					if (e_2) throw e_2.error;
					return [7];
				case 10: return [7];
				case 11:
					subscriber.complete();
					return [2];
			}
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
	if (delay === void 0) delay = 0;
	if (repeat === void 0) repeat = false;
	var scheduleSubscription = scheduler.schedule(function() {
		work();
		if (repeat) parentSubscription.add(this.schedule(null, delay));
		else this.unsubscribe();
	}, delay);
	parentSubscription.add(scheduleSubscription);
	if (!repeat) return scheduleSubscription;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function observeOn(scheduler, delay) {
	if (delay === void 0) delay = 0;
	return operate(function(source, subscriber) {
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			return executeSchedule(subscriber, scheduler, function() {
				return subscriber.next(value);
			}, delay);
		}, function() {
			return executeSchedule(subscriber, scheduler, function() {
				return subscriber.complete();
			}, delay);
		}, function(err) {
			return executeSchedule(subscriber, scheduler, function() {
				return subscriber.error(err);
			}, delay);
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay) {
	if (delay === void 0) delay = 0;
	return operate(function(source, subscriber) {
		subscriber.add(scheduler.schedule(function() {
			return source.subscribe(subscriber);
		}, delay));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
	return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
	return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
	return new Observable(function(subscriber) {
		var i = 0;
		return scheduler.schedule(function() {
			if (i === input.length) subscriber.complete();
			else {
				subscriber.next(input[i++]);
				if (!subscriber.closed) this.schedule();
			}
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
	return new Observable(function(subscriber) {
		var iterator$1;
		executeSchedule(subscriber, scheduler, function() {
			iterator$1 = input[iterator]();
			executeSchedule(subscriber, scheduler, function() {
				var _a;
				var value;
				var done;
				try {
					_a = iterator$1.next(), value = _a.value, done = _a.done;
				} catch (err) {
					subscriber.error(err);
					return;
				}
				if (done) subscriber.complete();
				else subscriber.next(value);
			}, 0, true);
		});
		return function() {
			return isFunction(iterator$1 === null || iterator$1 === void 0 ? void 0 : iterator$1.return) && iterator$1.return();
		};
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function scheduleAsyncIterable(input, scheduler) {
	if (!input) throw new Error("Iterable cannot be null");
	return new Observable(function(subscriber) {
		executeSchedule(subscriber, scheduler, function() {
			var iterator = input[Symbol.asyncIterator]();
			executeSchedule(subscriber, scheduler, function() {
				iterator.next().then(function(result) {
					if (result.done) subscriber.complete();
					else subscriber.next(result.value);
				});
			}, 0, true);
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function scheduleReadableStreamLike(input, scheduler) {
	return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
	if (input != null) {
		if (isInteropObservable(input)) return scheduleObservable(input, scheduler);
		if (isArrayLike(input)) return scheduleArray(input, scheduler);
		if (isPromise(input)) return schedulePromise(input, scheduler);
		if (isAsyncIterable(input)) return scheduleAsyncIterable(input, scheduler);
		if (isIterable(input)) return scheduleIterable(input, scheduler);
		if (isReadableStreamLike(input)) return scheduleReadableStreamLike(input, scheduler);
	}
	throw createInvalidObservableTypeError(input);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/from.js
function from(input, scheduler) {
	return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/of.js
function of() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	return from(args, popScheduler(args));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/throwError.js
function throwError(errorOrErrorFactory, scheduler) {
	var errorFactory = isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
		return errorOrErrorFactory;
	};
	var init = function(subscriber) {
		return subscriber.error(errorFactory());
	};
	return new Observable(scheduler ? function(subscriber) {
		return scheduler.schedule(init, 0, subscriber);
	} : init);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isObservable.js
function isObservable(obj) {
	return !!obj && (obj instanceof Observable || isFunction(obj.lift) && isFunction(obj.subscribe));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/EmptyError.js
var EmptyError = createErrorClass(function(_super) {
	return function EmptyErrorImpl() {
		_super(this);
		this.name = "EmptyError";
		this.message = "no elements in sequence";
	};
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/lastValueFrom.js
function lastValueFrom(source, config) {
	var hasConfig = typeof config === "object";
	return new Promise(function(resolve, reject) {
		var _hasValue = false;
		var _value;
		source.subscribe({
			next: function(value) {
				_value = value;
				_hasValue = true;
			},
			error: reject,
			complete: function() {
				if (_hasValue) resolve(_value);
				else if (hasConfig) resolve(config.defaultValue);
				else reject(new EmptyError());
			}
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate$1(value) {
	return value instanceof Date && !isNaN(value);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/map.js
function map(project, thisArg) {
	return operate(function(source, subscriber) {
		var index = 0;
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			subscriber.next(project.call(thisArg, value, index++));
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
	var buffer = [];
	var active = 0;
	var index = 0;
	var isComplete = false;
	var checkComplete = function() {
		if (isComplete && !buffer.length && !active) subscriber.complete();
	};
	var outerNext = function(value) {
		return active < concurrent ? doInnerSub(value) : buffer.push(value);
	};
	var doInnerSub = function(value) {
		expand && subscriber.next(value);
		active++;
		var innerComplete = false;
		innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
			onBeforeNext === null || onBeforeNext === void 0 || onBeforeNext(innerValue);
			if (expand) outerNext(innerValue);
			else subscriber.next(innerValue);
		}, function() {
			innerComplete = true;
		}, void 0, function() {
			if (innerComplete) try {
				active--;
				var _loop_1 = function() {
					var bufferedValue = buffer.shift();
					if (innerSubScheduler) executeSchedule(subscriber, innerSubScheduler, function() {
						return doInnerSub(bufferedValue);
					});
					else doInnerSub(bufferedValue);
				};
				while (buffer.length && active < concurrent) _loop_1();
				checkComplete();
			} catch (err) {
				subscriber.error(err);
			}
		}));
	};
	source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
		isComplete = true;
		checkComplete();
	}));
	return function() {
		additionalFinalizer === null || additionalFinalizer === void 0 || additionalFinalizer();
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
function mergeMap(project, resultSelector, concurrent) {
	if (concurrent === void 0) concurrent = Infinity;
	if (isFunction(resultSelector)) return mergeMap(function(a, i) {
		return map(function(b, ii) {
			return resultSelector(a, b, i, ii);
		})(innerFrom(project(a, i)));
	}, concurrent);
	else if (typeof resultSelector === "number") concurrent = resultSelector;
	return operate(function(source, subscriber) {
		return mergeInternals(source, subscriber, project, concurrent);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
function mergeAll(concurrent) {
	if (concurrent === void 0) concurrent = Infinity;
	return mergeMap(identity, concurrent);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/concatAll.js
function concatAll() {
	return mergeAll(1);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/concat.js
function concat() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	return concatAll()(from(args, popScheduler(args)));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/defer.js
function defer(observableFactory) {
	return new Observable(function(subscriber) {
		innerFrom(observableFactory()).subscribe(subscriber);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/timer.js
function timer(dueTime, intervalOrScheduler, scheduler) {
	if (dueTime === void 0) dueTime = 0;
	if (scheduler === void 0) scheduler = async;
	var intervalDuration = -1;
	if (intervalOrScheduler != null) if (isScheduler(intervalOrScheduler)) scheduler = intervalOrScheduler;
	else intervalDuration = intervalOrScheduler;
	return new Observable(function(subscriber) {
		var due = isValidDate$1(dueTime) ? +dueTime - scheduler.now() : dueTime;
		if (due < 0) due = 0;
		var n = 0;
		return scheduler.schedule(function() {
			if (!subscriber.closed) {
				subscriber.next(n++);
				if (0 <= intervalDuration) this.schedule(void 0, intervalDuration);
				else subscriber.complete();
			}
		}, due);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/merge.js
function merge() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	var scheduler = popScheduler(args);
	var concurrent = popNumber(args, Infinity);
	var sources = args;
	return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/filter.js
function filter(predicate, thisArg) {
	return operate(function(source, subscriber) {
		var index = 0;
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			return predicate.call(thisArg, value, index++) && subscriber.next(value);
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/catchError.js
function catchError(selector) {
	return operate(function(source, subscriber) {
		var innerSub = null;
		var syncUnsub = false;
		var handledResult;
		innerSub = source.subscribe(createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
			handledResult = innerFrom(selector(err, catchError(selector)(source)));
			if (innerSub) {
				innerSub.unsubscribe();
				innerSub = null;
				handledResult.subscribe(subscriber);
			} else syncUnsub = true;
		}));
		if (syncUnsub) {
			innerSub.unsubscribe();
			innerSub = null;
			handledResult.subscribe(subscriber);
		}
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/finalize.js
function finalize(callback) {
	return operate(function(source, subscriber) {
		try {
			source.subscribe(subscriber);
		} finally {
			subscriber.add(callback);
		}
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/share.js
function share(options) {
	if (options === void 0) options = {};
	var _a = options.connector, connector = _a === void 0 ? function() {
		return new Subject();
	} : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
	return function(wrapperSource) {
		var connection;
		var resetConnection;
		var subject;
		var refCount = 0;
		var hasCompleted = false;
		var hasErrored = false;
		var cancelReset = function() {
			resetConnection === null || resetConnection === void 0 || resetConnection.unsubscribe();
			resetConnection = void 0;
		};
		var reset = function() {
			cancelReset();
			connection = subject = void 0;
			hasCompleted = hasErrored = false;
		};
		var resetAndUnsubscribe = function() {
			var conn = connection;
			reset();
			conn === null || conn === void 0 || conn.unsubscribe();
		};
		return operate(function(source, subscriber) {
			refCount++;
			if (!hasErrored && !hasCompleted) cancelReset();
			var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
			subscriber.add(function() {
				refCount--;
				if (refCount === 0 && !hasErrored && !hasCompleted) resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
			});
			dest.subscribe(subscriber);
			if (!connection && refCount > 0) {
				connection = new SafeSubscriber({
					next: function(value) {
						return dest.next(value);
					},
					error: function(err) {
						hasErrored = true;
						cancelReset();
						resetConnection = handleReset(reset, resetOnError, err);
						dest.error(err);
					},
					complete: function() {
						hasCompleted = true;
						cancelReset();
						resetConnection = handleReset(reset, resetOnComplete);
						dest.complete();
					}
				});
				innerFrom(source).subscribe(connection);
			}
		})(wrapperSource);
	};
}
function handleReset(reset, on) {
	var args = [];
	for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
	if (on === true) {
		reset();
		return;
	}
	if (on === false) return;
	var onSubscriber = new SafeSubscriber({ next: function() {
		onSubscriber.unsubscribe();
		reset();
	} });
	return innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/tap.js
function tap(observerOrNext, error, complete) {
	var tapObserver = isFunction(observerOrNext) || error || complete ? {
		next: observerOrNext,
		error,
		complete
	} : observerOrNext;
	return tapObserver ? operate(function(source, subscriber) {
		var _a;
		(_a = tapObserver.subscribe) === null || _a === void 0 || _a.call(tapObserver);
		var isUnsub = true;
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			var _a;
			(_a = tapObserver.next) === null || _a === void 0 || _a.call(tapObserver, value);
			subscriber.next(value);
		}, function() {
			var _a;
			isUnsub = false;
			(_a = tapObserver.complete) === null || _a === void 0 || _a.call(tapObserver);
			subscriber.complete();
		}, function(err) {
			var _a;
			isUnsub = false;
			(_a = tapObserver.error) === null || _a === void 0 || _a.call(tapObserver, err);
			subscriber.error(err);
		}, function() {
			var _a, _b;
			if (isUnsub) (_a = tapObserver.unsubscribe) === null || _a === void 0 || _a.call(tapObserver);
			(_b = tapObserver.finalize) === null || _b === void 0 || _b.call(tapObserver);
		}));
	}) : identity;
}
//#endregion
//#region node_modules/@sanity/client/dist/request-BhMuKj0D.js
/**
* RegExp to test for newlines.
*/
var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
/**
* Highlight a code frame with the given location and message.
*
* @param query - The query to be highlighted.
* @param location - The location of the error in the code/query.
* @param message - Message to be displayed inline (if possible) next to the highlighted
* location in the code. If it can't be positioned inline, it will be placed above the
* code frame.
* @returns The highlighted code frame.
*/
function codeFrame(query, location, message) {
	let lines = query.split(NEWLINE), { start, end, markerLines } = getMarkerLines({
		start: columnToLine(location.start, lines),
		end: location.end ? columnToLine(location.end, lines) : void 0
	}, lines), numberMaxWidth = `${end}`.length;
	return query.split(NEWLINE, end).slice(start, end).map((line, index) => {
		let number = start + 1 + index, gutter = ` ${` ${number}`.slice(-numberMaxWidth)} |`, hasMarker = markerLines[number], lastMarkerLine = !markerLines[number + 1];
		if (!hasMarker) return ` ${gutter}${line.length > 0 ? ` ${line}` : ""}`;
		let markerLine = "";
		if (Array.isArray(hasMarker)) {
			let markerSpacing = line.slice(0, Math.max(hasMarker[0] - 1, 0)).replace(/[^\t]/g, " "), numberOfMarkers = hasMarker[1] || 1;
			markerLine = [
				"\n ",
				gutter.replace(/\d/g, " "),
				" ",
				markerSpacing,
				"^".repeat(numberOfMarkers)
			].join(""), lastMarkerLine && message && (markerLine += " " + message);
		}
		return [
			">",
			gutter,
			line.length > 0 ? ` ${line}` : "",
			markerLine
		].join("");
	}).join("\n");
}
function getMarkerLines(loc, source) {
	let startLoc = { ...loc.start }, endLoc = {
		...startLoc,
		...loc.end
	}, startLine = startLoc.line ?? -1, startColumn = startLoc.column ?? 0, endLine = endLoc.line, endColumn = endLoc.column, start = Math.max(startLine - 3, 0), end = Math.min(source.length, endLine + 3);
	startLine === -1 && (start = 0), endLine === -1 && (end = source.length);
	let lineDiff = endLine - startLine, markerLines = {};
	if (lineDiff) for (let i = 0; i <= lineDiff; i++) {
		let lineNumber = i + startLine;
		markerLines[lineNumber] = startColumn ? i === 0 ? [startColumn, source[lineNumber - 1].length - startColumn + 1] : i === lineDiff ? [0, endColumn] : [0, source[lineNumber - i].length] : !0;
	}
	else markerLines[startLine] = startColumn === endColumn ? !startColumn || [startColumn, 0] : [startColumn, endColumn - startColumn];
	return {
		start,
		end,
		markerLines
	};
}
function columnToLine(column, lines) {
	let offset = 0;
	for (let i = 0; i < lines.length; i++) {
		let lineLength = lines[i].length + 1;
		if (offset + lineLength > column) return {
			line: i + 1,
			column: column - offset
		};
		offset += lineLength;
	}
	return {
		line: lines.length,
		column: lines[lines.length - 1]?.length ?? 0
	};
}
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
		return typeof o;
	} : function(o) {
		return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
function toPrimitive(t, r) {
	if (_typeof(t) != "object" || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (e !== void 0) {
		var i = e.call(t, r || "default");
		if (_typeof(i) != "object") return i;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (r === "string" ? String : Number)(t);
}
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return _typeof(i) == "symbol" ? i : i + "";
}
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
/**
* Adapter for buffered responses from get-it v9 (`BufferedResponse`-shaped).
*
* The URL and method aren't on the response itself in v9, so the request
* options must be passed alongside.
*
* @internal
*/
function httpResponseFromFetch(res, reqUrl, reqMethod) {
	return {
		statusCode: res.status,
		statusMessage: res.statusText || null,
		headers: headersToRecord$1(res.headers),
		body: res.body,
		url: res.url || reqUrl,
		method: reqMethod
	};
}
function headersToRecord$1(headers) {
	let out = {};
	return headers.forEach((value, key) => {
		out[key] = value;
	}), out;
}
/** @public */
var ClientError = class extends Error {
	constructor(res, tag) {
		let props = extractErrorProps(res, tag);
		super(props.message), _defineProperty(this, "response", void 0), _defineProperty(this, "statusCode", 400), _defineProperty(this, "responseBody", void 0), _defineProperty(this, "traceId", void 0), _defineProperty(this, "details", void 0), Object.assign(this, props);
	}
};
var ServerError = class extends Error {
	constructor(res) {
		let props = extractErrorProps(res);
		super(props.message), _defineProperty(this, "response", void 0), _defineProperty(this, "statusCode", 500), _defineProperty(this, "responseBody", void 0), _defineProperty(this, "traceId", void 0), _defineProperty(this, "details", void 0), Object.assign(this, props);
	}
};
function extractErrorProps(res, tag) {
	let body = res.body, props = {
		response: res,
		statusCode: res.statusCode,
		responseBody: stringifyBody(body, res),
		traceId: extractTraceId(res),
		message: "",
		details: void 0
	};
	if (!isRecord$1(body)) return props.message = `${httpErrorMessage(res, body)}${formatTraceId(props.traceId)}`, props;
	let error = body.error;
	if (typeof error == "string" && typeof body.message == "string") return props.message = `${error} - ${body.message}${formatTraceId(props.traceId)}`, props;
	if (typeof error != "object" || !error) return props.message = typeof error == "string" ? `${error}${formatTraceId(props.traceId)}` : typeof body.message == "string" ? `${body.message}${formatTraceId(props.traceId)}` : `${httpErrorMessage(res, body)}${formatTraceId(props.traceId)}`, props;
	if (isMutationError(error) || isActionError(error)) {
		let allItems = error.items || [], items = allItems.slice(0, 5).map((item) => item.error?.description).filter(Boolean), itemsStr = items.length ? `:\n- ${items.join("\n- ")}` : "";
		return allItems.length > 5 && (itemsStr += `\n...and ${allItems.length - 5} more`), props.message = `${error.description}${formatTraceId(props.traceId)}${itemsStr}`, props.details = body.error, props;
	}
	return isQueryParseError(error) ? (props.message = formatQueryParseError(error, tag, props.traceId), props.details = body.error, props) : "description" in error && typeof error.description == "string" ? (props.message = `${error.description}${formatTraceId(props.traceId)}`, props.details = error, props) : (props.message = `${httpErrorMessage(res, body)}${formatTraceId(props.traceId)}`, props);
}
function isMutationError(error) {
	return "type" in error && error.type === "mutationError" && "description" in error && typeof error.description == "string";
}
function isActionError(error) {
	return "type" in error && error.type === "actionError" && "description" in error && typeof error.description == "string";
}
/** @internal */
function isQueryParseError(error) {
	return isRecord$1(error) && error.type === "queryParseError" && typeof error.query == "string" && typeof error.start == "number" && typeof error.end == "number";
}
/**
* Formats a GROQ query parse error into a human-readable string.
*
* @param error - The error object containing details about the parse error.
* @param tag - An optional tag to include in the error message.
* @returns A formatted error message string.
* @public
*/
function formatQueryParseError(error, tag, traceId) {
	let { query, start, end, description } = error, withTraceId = traceId ? `\n(traceId: ${traceId})` : "";
	if (!query || start === void 0) return `GROQ query parse error: ${description}${withTraceId}`;
	let withTag = tag ? `\n\nTag: ${tag}` : "";
	return `GROQ query parse error:\n${codeFrame(query, {
		start,
		end
	}, description)}${withTag}${withTraceId}`;
}
function httpErrorMessage(res, body) {
	let details = typeof body == "string" ? ` (${sliceWithEllipsis(body, 100)})` : "", statusMessage = res.statusMessage ? ` ${res.statusMessage}` : "";
	return `${res.method}-request to ${res.url} resulted in HTTP ${res.statusCode}${statusMessage}${details}`;
}
/**
* Extract the traceId from the traceparent header on the response.
*
* The traceparent is on the format [version]-[traceId]-[parentId]-[traceFlags], but
* when debugging end-user issues it's the traceId we need to be able to get hold of
* the relevant traces.
*
* @see https://www.w3.org/TR/trace-context/
* @returns The traceId for HTTP response
*/
function extractTraceId(res) {
	let traceparent = res?.headers?.traceparent;
	if (traceparent) return traceparent.split("-")[1];
}
function stringifyBody(body, res) {
	return (res.headers["content-type"] || "").toLowerCase().indexOf("application/json") === -1 ? body : JSON.stringify(body, null, 2);
}
function formatTraceId(traceId) {
	return traceId ? ` (traceId: ${traceId})` : "";
}
function sliceWithEllipsis(str, max) {
	return str.length > max ? `${str.slice(0, max)}…` : str;
}
/** @public */
var CorsOriginError = class extends Error {
	constructor({ projectId, credentials } = {}) {
		if (super("CorsOriginError"), _defineProperty(this, "projectId", void 0), _defineProperty(this, "addOriginUrl", void 0), this.name = "CorsOriginError", this.projectId = projectId, projectId && typeof location < "u") {
			let url = new URL(`https://sanity.io/manage/project/${projectId}/api`), { origin } = location;
			url.searchParams.set("cors", "add"), url.searchParams.set("origin", origin), credentials && url.searchParams.set("credentials", ""), this.addOriginUrl = url, this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${url}`;
		} else this.message = projectId ? `The current origin is not allowed to connect to the Live Content API. Change your configuration here: https://sanity.io/manage/project/${projectId}/api` : "The current origin is not allowed to connect to the Live Content API.";
	}
};
/**
* Build both the observable and promise transport forms from a single get-it
* requester. The promise form is the primitive (`executeRequest` is already
* promise-based); the observable form wraps it lazily so each subscription
* starts its own request (cold), and unsubscribing aborts the in-flight
* fetch — the same contract as the get-it v8 observable adapter.
*
* @internal
*/
function defineRequester(envOptions, config = {}) {
	let applyFetchInit = (opts, next) => {
		let fetchInit = opts.meta?.fetchInit;
		if (typeof fetchInit != "object" || !fetchInit) return next(opts);
		let baseFetch = opts.fetch ?? envOptions.fetch ?? globalThis.fetch, fetchWithInit = (input, init) => baseFetch(input, {
			...fetchInit,
			...init
		});
		return next({
			...opts,
			fetch: fetchWithInit
		});
	}, requester = createRequester({
		...envOptions.fetch ? { fetch: envOptions.fetch } : {},
		headers: envOptions.headers,
		httpErrors: !0,
		middleware: [
			retry({
				shouldRetry: shouldRetryRequest,
				maxRetries: config.maxRetries ?? 5,
				...config.retryDelay ? { retryDelay: config.retryDelay } : {}
			}),
			...envOptions.middleware,
			applyFetchInit,
			printWarnings(config)
		]
	}), promise = (options) => {
		if (typeof options.url != "string") throw TypeError("Request options must include a `url`");
		return executeRequest(requester, options);
	}, observable = (options) => new Observable((subscriber) => {
		let controller = new AbortController(), userSignal = options.signal, signal = userSignal ? AbortSignal.any([userSignal, controller.signal]) : controller.signal, subscription = from(promise({
			...options,
			signal
		})).subscribe(subscriber);
		return () => {
			subscription.unsubscribe(), controller.abort();
		};
	});
	return {
		promise,
		observable
	};
}
async function executeRequest(requester, fetchOptions) {
	let url = fetchOptions.url, method = (fetchOptions.method ?? "GET").toUpperCase(), response;
	try {
		response = await requester(fetchOptions);
	} catch (err) {
		if (isHttpError(err)) {
			let errBody = parseJsonText(typeof err.body == "string" ? err.body : "", err.headers), canonical = httpResponseFromFetch({
				status: err.status,
				statusText: err.statusText,
				headers: err.headers,
				body: errBody,
				url: err.response.url ?? err.url
			}, url, method), tag = extractRequestTag(fetchOptions.query);
			throw canonical.statusCode >= 500 ? new ServerError(canonical) : new ClientError(canonical, tag);
		}
		throw err;
	}
	return {
		type: "response",
		body: parseJsonBody(response),
		statusCode: response.status,
		statusMessage: response.statusText || null,
		headers: headersToRecord(response.headers),
		url: response.url || url,
		method
	};
}
/**
* Extract the GROQ request tag (used for error messages) from the query.
*/
function extractRequestTag(query) {
	if (!query) return;
	if (query instanceof URLSearchParams) return query.get("tag") ?? void 0;
	let tag = query.tag;
	return typeof tag == "string" ? tag : void 0;
}
function parseJsonBody(response) {
	return parseJsonText(response.text(), response.headers);
}
/**
* Parse a response body according to its `content-type`: JSON when the header
* says so (falling back to the raw text on malformed JSON), text otherwise.
* Shared with the browser XHR upload path so error bodies parse identically
* on both transports.
*
* @internal
*/
function parseJsonText(text, headers) {
	let contentType = (headers.get("content-type") ?? "").toLowerCase();
	if (text) {
		if (contentType.includes("application/json")) try {
			return JSON.parse(text);
		} catch {
			return text;
		}
		return text;
	}
}
function headersToRecord(headers) {
	let out = {};
	return headers.forEach((value, key) => {
		out[key] = value;
	}), out;
}
function shouldRetryRequest(err, attempt, options) {
	if (isHttpError(err)) {
		let isSafe = (options.method ?? "GET") === "GET" || options.method === "HEAD", isQuery = (options.url ?? "").includes("/data/query"), status = err.status;
		return !!((isSafe || isQuery) && (status === 429 || status === 502 || status === 503));
	}
	return isRetryableRequest(err, attempt, options);
}
function printWarnings(config) {
	let seen = {}, shouldIgnore = (message) => config.ignoreWarnings !== void 0 && (Array.isArray(config.ignoreWarnings) ? config.ignoreWarnings : [config.ignoreWarnings]).some((pattern) => typeof pattern == "string" ? message.includes(pattern) : pattern.test(message));
	return { afterResponse(response) {
		let header = response.headers.get("x-sanity-warning");
		if (!header) return response;
		for (let msg of header.split(",").map((m) => m.trim())) !msg || seen[msg] || shouldIgnore(msg) || (seen[msg] = !0, console.warn(msg));
		return response;
	} };
}
//#endregion
//#region node_modules/@sanity/client/dist/config-3wiPP-sZ.js
function generateHelpUrl(slug) {
	return "https://www.sanity.io/help/" + slug;
}
var VALID_ASSET_TYPES = ["image", "file"];
var VALID_INSERT_LOCATIONS = [
	"before",
	"after",
	"replace"
];
var dataset = (name) => {
	if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(name)) throw Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters");
};
var projectId = (id) => {
	if (!/^[-a-z0-9]+$/i.test(id)) throw Error("`projectId` can only contain only a-z, 0-9 and dashes");
};
var validateAssetType = (type) => {
	if (VALID_ASSET_TYPES.indexOf(type) === -1) throw Error(`Invalid asset type: ${type}. Must be one of ${VALID_ASSET_TYPES.join(", ")}`);
};
var validateObject = (op, val) => {
	if (typeof val != "object" || !val || Array.isArray(val)) throw Error(`${op}() takes an object of properties`);
};
var validateDocumentId = (op, id) => {
	if (typeof id != "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(id) || id.includes("..")) throw Error(`${op}(): "${id}" is not a valid document ID`);
};
var requireDocumentId = (op, doc) => {
	if (!doc._id) throw Error(`${op}() requires that the document contains an ID ("_id" property)`);
	validateDocumentId(op, doc._id);
};
var validateDocumentType = (op, type) => {
	if (typeof type != "string") throw Error(`\`${op}()\`: \`${type}\` is not a valid document type`);
};
var requireDocumentType = (op, doc) => {
	if (!doc._type) throw Error(`\`${op}()\` requires that the document contains a type (\`_type\` property)`);
	validateDocumentType(op, doc._type);
};
var validateVersionIdMatch = (builtVersionId, document) => {
	if (document._id && document._id !== builtVersionId) throw Error(`The provided document ID (\`${document._id}\`) does not match the generated version ID (\`${builtVersionId}\`)`);
};
var validateInsert = (at, selector, items) => {
	let signature = "insert(at, selector, items)";
	if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
		let valid = VALID_INSERT_LOCATIONS.map((loc) => `"${loc}"`).join(", ");
		throw Error(`${signature} takes an "at"-argument which is one of: ${valid}`);
	}
	if (typeof selector != "string") throw Error(`${signature} takes a "selector"-argument which must be a string`);
	if (!Array.isArray(items)) throw Error(`${signature} takes an "items"-argument which must be an array`);
};
var hasDataset = (config) => {
	if (config.dataset) return config.dataset;
	let resource = config.resource;
	if (resource && resource.type === "dataset") {
		let segments = resource.id.split(".");
		if (segments.length !== 2) throw Error("Dataset resource ID must be in the format \"project.dataset\"");
		return segments[1];
	}
	throw Error("`dataset` must be provided to perform queries");
};
var requestTag = (tag) => {
	if (typeof tag != "string" || !/^[a-z0-9._-]{1,75}$/i.test(tag)) throw Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
	return tag;
};
var resourceConfig = (config) => {
	let resource = config.resource;
	if (!resource) throw Error("`resource` must be provided to perform resource queries");
	let { type, id } = resource;
	switch (type) {
		case "dataset":
			if (id.split(".").length !== 2) throw Error("Dataset resource ID must be in the format \"project.dataset\"");
			return;
		case "dashboard":
		case "media-library":
		case "canvas": return;
		default: throw Error(`Unsupported resource type: ${type.toString()}`);
	}
};
var resourceGuard = (service, config) => {
	if (config.resource) throw Error(`\`${service}\` does not support resource-based operations`);
};
function once(fn) {
	let didCall = !1, returnValue;
	return (...args) => didCall ? returnValue : (returnValue = fn(...args), didCall = !0, returnValue);
}
var createWarningPrinter = (message) => once((...args) => console.warn(message.join(" "), ...args));
var printCdnAndWithCredentialsWarning = createWarningPrinter(["Because you set `withCredentials` to true, we will override your `useCdn`", "setting to be false since (cookie-based) credentials are never set on the CDN"]);
var printCdnWarning = createWarningPrinter([
	"Since you haven't set a value for `useCdn`, we will deliver content using our",
	"global, edge-cached API-CDN. If you wish to have content delivered faster, set",
	"`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."
]);
var printCdnPreviewDraftsWarning = createWarningPrinter(["The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.", "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."]);
var printPreviewDraftsDeprecationWarning = createWarningPrinter(["The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version"]);
var printBrowserTokenWarning = createWarningPrinter(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", `See ${generateHelpUrl("js-client-browser-token")} for more information and how to hide this warning.`]);
var printCredentialedTokenWarning = createWarningPrinter(["You have configured Sanity client to use a token, but also provided `withCredentials: true`.", "This is no longer supported - only token will be used - remove `withCredentials: true`."]);
var printNoApiVersionSpecifiedWarning = createWarningPrinter(["Using the Sanity client without specifying an API version is deprecated.", `See ${generateHelpUrl("js-client-api-version")}`]);
createWarningPrinter(["The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."]);
var printCreateVersionWithBaseIdWarning = createWarningPrinter(["You have called `createVersion()` with a defined `document`.", "If you are creating a version of a document that already exists, prefer providing `baseId` and `releaseId` instead."]);
var printDeprecatedUriOptionWarning = createWarningPrinter(["The `uri` request option has been renamed to `url`.", "Please update your code to use `url` instead. Support for `uri` will be removed in a future version."]);
var printDeprecatedResourceConfigWarning = createWarningPrinter(["The `~experimental_resource` configuration property has been renamed to `resource`.", "Please update your client configuration to use `resource` instead. Support for `~experimental_resource` will be removed in a future version."]);
var defaultConfig = {
	apiHost: "https://api.sanity.io",
	apiVersion: "1",
	useProjectHostname: !0,
	stega: { enabled: !1 }
};
var LOCALHOSTS = [
	"localhost",
	"127.0.0.1",
	"0.0.0.0"
];
var isLocal = (host) => LOCALHOSTS.indexOf(host) !== -1;
function validateApiVersion(apiVersion) {
	if (apiVersion === "1" || apiVersion === "X") return;
	let apiDate = new Date(apiVersion);
	if (!(/^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0)) throw Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
}
/**
* @internal - it may have breaking changes in any release
*/
function validateApiPerspective(perspective) {
	if (Array.isArray(perspective) && perspective.length > 1 && perspective.includes("raw")) throw TypeError("Invalid API perspective value: \"raw\". The raw-perspective can not be combined with other perspectives");
}
var initConfig = (config, prevConfig) => {
	let specifiedConfig = {
		...prevConfig,
		...config,
		stega: {
			...typeof prevConfig.stega == "boolean" ? { enabled: prevConfig.stega } : prevConfig.stega || defaultConfig.stega,
			...typeof config.stega == "boolean" ? { enabled: config.stega } : config.stega || {}
		}
	};
	specifiedConfig.apiVersion || printNoApiVersionSpecifiedWarning();
	let newConfig = {
		...defaultConfig,
		...specifiedConfig
	};
	newConfig["~experimental_resource"] && !newConfig.resource && (printDeprecatedResourceConfigWarning(), newConfig.resource = newConfig["~experimental_resource"]);
	let resourceConfig$1 = newConfig.resource, projectBased = newConfig.useProjectHostname && !resourceConfig$1;
	if (typeof Promise > "u") {
		let helpUrl = generateHelpUrl("js-client-promise-polyfill");
		throw Error(`No native Promise-implementation found, polyfill needed - see ${helpUrl}`);
	}
	if (projectBased && !newConfig.projectId) throw Error("Configuration must contain `projectId`");
	if (resourceConfig$1 && resourceConfig(newConfig), newConfig.perspective !== void 0 && validateApiPerspective(newConfig.perspective), "encodeSourceMap" in newConfig) throw Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?");
	if ("encodeSourceMapAtPath" in newConfig) throw Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?");
	if (typeof newConfig.stega.enabled != "boolean") throw Error(`stega.enabled must be a boolean, received ${newConfig.stega.enabled}`);
	if (newConfig.stega.enabled && newConfig.stega.studioUrl === void 0) throw Error("stega.studioUrl must be defined when stega.enabled is true");
	if (newConfig.stega.enabled && typeof newConfig.stega.studioUrl != "string" && typeof newConfig.stega.studioUrl != "function") throw Error(`stega.studioUrl must be a string or a function, received ${newConfig.stega.studioUrl}`);
	let isBrowser = typeof window < "u" && window.location && window.location.hostname, isLocalhost = isBrowser && isLocal(window.location.hostname), hasToken = !!newConfig.token;
	newConfig.withCredentials && hasToken && (printCredentialedTokenWarning(), newConfig.withCredentials = !1), isBrowser && isLocalhost && hasToken && newConfig.ignoreBrowserTokenWarning !== !0 ? printBrowserTokenWarning() : newConfig.useCdn === void 0 && printCdnWarning(), projectBased && projectId(newConfig.projectId), newConfig.dataset && dataset(newConfig.dataset), "requestTagPrefix" in newConfig && (newConfig.requestTagPrefix = newConfig.requestTagPrefix ? requestTag(newConfig.requestTagPrefix).replace(/\.+$/, "") : void 0), newConfig.apiVersion = `${newConfig.apiVersion}`.replace(/^v/, ""), newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost, newConfig.useCdn === !0 && newConfig.withCredentials && printCdnAndWithCredentialsWarning(), newConfig.useCdn = newConfig.useCdn !== !1 && !newConfig.withCredentials, validateApiVersion(newConfig.apiVersion);
	let hostParts = newConfig.apiHost.split("://", 2), protocol = hostParts[0], host = hostParts[1], cdnHost = newConfig.isDefaultApi ? "apicdn.sanity.io" : host;
	return projectBased ? (newConfig.url = `${protocol}://${newConfig.projectId}.${host}/v${newConfig.apiVersion}`, newConfig.cdnUrl = `${protocol}://${newConfig.projectId}.${cdnHost}/v${newConfig.apiVersion}`) : (newConfig.url = `${newConfig.apiHost}/v${newConfig.apiVersion}`, newConfig.cdnUrl = newConfig.url), newConfig;
};
//#endregion
//#region node_modules/@sanity/client/dist/dist-Z8cIRxoB.js
var p = {
	0: 8203,
	1: 8204,
	2: 8205,
	3: 8290,
	4: 8291,
	5: 8288,
	6: 65279,
	7: 8289,
	8: 119155,
	9: 119156,
	a: 119157,
	b: 119158,
	c: 119159,
	d: 119160,
	e: 119161,
	f: 119162
};
var l = {
	0: 8203,
	1: 8204,
	2: 8205,
	3: 65279
};
var d = {
	0: String.fromCodePoint(l[0]),
	1: String.fromCodePoint(l[1]),
	2: String.fromCodePoint(l[2]),
	3: String.fromCodePoint(l[3])
};
var u = [
	,
	,
	,
	,
].fill(String.fromCodePoint(l[0])).join("");
function A(e) {
	let r = JSON.stringify(e), t = new TextEncoder().encode(r), i = "";
	for (let c = 0; c < t.length; c++) {
		let n = t[c];
		i += d[n >> 6 & 3] + d[n >> 4 & 3] + d[n >> 2 & 3] + d[n & 3];
	}
	return u + i;
}
function I(e) {
	return !Number.isNaN(Number(e)) || /[a-z]/i.test(e) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(e) ? !1 : !!Date.parse(e);
}
function S(e) {
	try {
		new URL(e, e.startsWith("/") ? "https://acme.com" : void 0);
	} catch {
		return !1;
	}
	return !0;
}
function y(e, r, t = "auto") {
	return t === !0 || t === "auto" && (I(e) || S(e)) ? e : `${e}${A(r)}`;
}
Object.fromEntries(Object.entries(d).map((e) => [e[1], +e[0]])), Object.fromEntries(Object.entries(p).map((e) => e.reverse()));
var h = `${Object.values(p).map((e) => `\\u{${e.toString(16)}}`).join("")}`;
var x = RegExp(`[${h}]{4,}`, "gu");
function P(e) {
	return {
		cleaned: e.replace(x, ""),
		encoded: e.match(x)?.[0] || ""
	};
}
function w(e) {
	return e && JSON.parse(P(JSON.stringify(e)).cleaned);
}
//#endregion
//#region node_modules/@sanity/client/dist/stegaClean-C18wLWau.js
/**
* Can take a `result` JSON from a `const {result} = client.fetch(query, params, {filterResponse: false})`
* and remove all stega-encoded data from it.
* If the result type has strings branded as `StegaString` (by `ClientReturnStega` or `stegaBrand()`),
* the brand is stripped and the original string type is restored.
* @public
*/
function stegaClean(result) {
	return w(result);
}
//#endregion
//#region node_modules/@sanity/client/dist/rolldown-runtime-vyAXikos.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: !0
	});
	return no_symbols || __defProp(target, Symbol.toStringTag, { value: "Module" }), target;
};
//#endregion
//#region node_modules/@sanity/client/dist/resolveEditInfo-Cz-smq3a.js
var reKeySegment = /_key\s*==\s*['"](.*)['"]/;
/** @internal */
function isKeySegment(segment) {
	return typeof segment == "string" ? reKeySegment.test(segment.trim()) : typeof segment == "object" && "_key" in segment;
}
/** @alpha */
function toString(path) {
	if (!Array.isArray(path)) throw Error("Path is not an array");
	return path.reduce((target, segment, i) => {
		let segmentType = typeof segment;
		if (segmentType === "number") return `${target}[${segment}]`;
		if (segmentType === "string") return `${target}${i === 0 ? "" : "."}${segment}`;
		if (isKeySegment(segment) && segment._key) return `${target}[_key=="${segment._key}"]`;
		if (Array.isArray(segment)) {
			let [from, to] = segment;
			return `${target}[${from}:${to}]`;
		}
		throw Error(`Unsupported path segment \`${JSON.stringify(segment)}\``);
	}, "");
}
/** @internal */
var DRAFTS_FOLDER = "drafts";
var VERSION_FOLDER = "versions";
var DRAFTS_PREFIX = `${DRAFTS_FOLDER}.`;
var VERSION_PREFIX = `${VERSION_FOLDER}.`;
/** @internal */
function isDraftId(id) {
	return id.startsWith(DRAFTS_PREFIX);
}
/** @internal */
function isVersionId(id) {
	return id.startsWith(VERSION_PREFIX);
}
/** @internal */
function isPublishedId(id) {
	return !isDraftId(id) && !isVersionId(id);
}
/**
* A phantom brand like `DraftId` has no runtime representation, so it can never be produced
* by narrowing a string - there's nothing to check. These two functions are the only places
* allowed to assert a plain string into a branded id.
*/
function asDraftId(value) {
	return value;
}
function asPublishedId(value) {
	return value;
}
/** @internal */
function getDraftId(id) {
	if (isVersionId(id)) return asDraftId(DRAFTS_PREFIX + getPublishedId(id));
	return isDraftId(id) ? id : DRAFTS_PREFIX + id;
}
/**  @internal */
function getVersionId(id, version) {
	if (version === "drafts" || version === "published") throw Error("Version can not be \"published\" or \"drafts\"");
	return `${VERSION_PREFIX}${version}.${getPublishedId(id)}`;
}
/**
*  @internal
*  Given an id, returns the versionId if it exists.
*  e.g. `versions.summer-drop.foo` = `summer-drop`
*  e.g. `drafts.foo` = `undefined`
*  e.g. `foo` = `undefined`
*/
function getVersionFromId(id) {
	if (!isVersionId(id)) return;
	let [_versionPrefix, versionId, ..._publishedId] = id.split(".");
	return versionId;
}
/** @internal */
function getPublishedId(id) {
	if (isVersionId(id)) return asPublishedId(id.split(".").slice(2).join("."));
	if (isDraftId(id)) return asPublishedId(id.slice(DRAFTS_PREFIX.length));
	if (isPublishedId(id)) return id;
	throw Error(`Unable to resolve a published id from "${id}"`);
}
var ESCAPE = {
	"\f": "\\f",
	"\n": "\\n",
	"\r": "\\r",
	"	": "\\t",
	"'": "\\'",
	"\\": "\\\\"
};
var UNESCAPE = {
	"\\f": "\f",
	"\\n": "\n",
	"\\r": "\r",
	"\\t": "	",
	"\\'": "'",
	"\\\\": "\\"
};
/**
* @internal
*/
function jsonPath(path) {
	return `$${path.map((segment) => typeof segment == "string" ? `['${segment.replace(/[\f\n\r\t'\\]/g, (match) => ESCAPE[match])}']` : typeof segment == "number" ? `[${segment}]` : segment._key === "" ? `[${segment._index}]` : `[?(@._key=='${segment._key.replace(/['\\]/g, (match) => ESCAPE[match])}')]`).join("")}`;
}
/**
* @internal
*/
function jsonPathArray(path) {
	return path.map((segment) => typeof segment == "string" ? `['${segment.replace(/[\f\n\r\t'\\]/g, (match) => ESCAPE[match])}']` : typeof segment == "number" ? `[${segment}]` : segment._key === "" ? `[${segment._index}]` : `[?(@._key=='${segment._key.replace(/['\\]/g, (match) => ESCAPE[match])}')]`);
}
/**
* @internal
*/
function parseJsonPath(path) {
	let parsed = [], parseRe = /\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g, match;
	for (; (match = parseRe.exec(path)) !== null;) {
		if (match[1] !== void 0) {
			let key = match[1].replace(/\\(\\|f|n|r|t|')/g, (m) => UNESCAPE[m]);
			parsed.push(key);
			continue;
		}
		if (match[2] !== void 0) {
			parsed.push(parseInt(match[2], 10));
			continue;
		}
		if (match[3] !== void 0) {
			let _key = match[3].replace(/\\(\\')/g, (m) => UNESCAPE[m]);
			parsed.push({
				_key,
				_index: -1
			});
			continue;
		}
	}
	return parsed;
}
/**
* @internal
*/
function jsonPathToStudioPath(path) {
	return path.map((segment) => {
		if (typeof segment == "string" || typeof segment == "number") return segment;
		if (segment._key !== "") return { _key: segment._key };
		if (segment._index !== -1) return segment._index;
		throw Error(`invalid segment:${JSON.stringify(segment)}`);
	});
}
/**
* @internal
*/
function jsonPathToMappingPath(path) {
	return path.map((segment) => {
		if (typeof segment == "string" || typeof segment == "number") return segment;
		if (segment._index !== -1) return segment._index;
		throw Error(`invalid segment:${JSON.stringify(segment)}`);
	});
}
/**
* @internal
*/
function resolveMapping(resultPath, csm) {
	if (!csm?.mappings) return;
	let resultMappingPath = jsonPath(jsonPathToMappingPath(resultPath));
	if (csm.mappings[resultMappingPath] !== void 0) return {
		mapping: csm.mappings[resultMappingPath],
		matchedPath: resultMappingPath,
		pathSuffix: ""
	};
	let resultMappingPathArray = jsonPathArray(jsonPathToMappingPath(resultPath));
	for (let i = resultMappingPathArray.length - 1; i >= 0; i--) {
		let key = `$${resultMappingPathArray.slice(0, i).join("")}`, mappingFound = csm.mappings[key];
		if (mappingFound) return {
			mapping: mappingFound,
			matchedPath: key,
			pathSuffix: resultMappingPath.substring(key.length)
		};
	}
}
/** @internal */
function isArray(value) {
	return value !== null && Array.isArray(value);
}
/**
* generic way to walk a nested object or array and apply a mapping function to each value
* @internal
*/
function walkMap(value, mappingFn, path = []) {
	if (isArray(value)) return value.map((v, idx) => {
		if (isRecord$1(v)) {
			let _key = v._key;
			if (typeof _key == "string") return walkMap(v, mappingFn, path.concat({
				_key,
				_index: idx
			}));
		}
		return walkMap(v, mappingFn, path.concat(idx));
	});
	if (isRecord$1(value)) {
		if (value._type === "block" || value._type === "span") {
			let result = { ...value };
			return value._type === "block" ? result.children = walkMap(value.children, mappingFn, path.concat("children")) : value._type === "span" && (result.text = walkMap(value.text, mappingFn, path.concat("text"))), result;
		}
		return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, walkMap(v, mappingFn, path.concat(k))]));
	}
	return mappingFn(value, path);
}
/** @internal */
function createEditUrl(options) {
	let { baseUrl, workspace: _workspace = "default", tool: _tool = "default", id: _id, type, path, projectId, dataset } = options;
	if (!baseUrl) throw Error("baseUrl is required");
	if (!path) throw Error("path is required");
	if (!_id) throw Error("id is required");
	if (baseUrl !== "/" && baseUrl.endsWith("/")) throw Error("baseUrl must not end with a slash");
	let workspace = _workspace === "default" ? void 0 : _workspace, tool = _tool === "default" ? void 0 : _tool, id = getPublishedId(_id), stringifiedPath = Array.isArray(path) ? toString(jsonPathToStudioPath(path)) : path, searchParams = new URLSearchParams({
		baseUrl,
		id,
		type,
		path: stringifiedPath
	});
	if (workspace && searchParams.set("workspace", workspace), tool && searchParams.set("tool", tool), projectId && searchParams.set("projectId", projectId), dataset && searchParams.set("dataset", dataset), isPublishedId(_id)) searchParams.set("perspective", "published");
	else if (isVersionId(_id)) {
		let versionId = getVersionFromId(_id);
		searchParams.set("perspective", versionId);
	}
	let segments = [baseUrl === "/" ? "" : baseUrl];
	workspace && segments.push(workspace);
	let routerParams = [
		"mode=presentation",
		`id=${id}`,
		`type=${type}`,
		`path=${encodeURIComponent(stringifiedPath)}`
	];
	return tool && routerParams.push(`tool=${tool}`), segments.push("intent", "edit", `${routerParams.join(";")}?${searchParams}`), segments.join("/");
}
/** @internal */
function resolveStudioBaseRoute(studioUrl) {
	let baseUrl = typeof studioUrl == "string" ? studioUrl : studioUrl.baseUrl;
	return baseUrl !== "/" && (baseUrl = baseUrl.replace(/\/$/, "")), typeof studioUrl == "string" ? { baseUrl } : {
		...studioUrl,
		baseUrl
	};
}
//#endregion
//#region node_modules/eventsource/dist/errors.js
/**
* An extended version of the `Event` emitted by the `EventSource` object when an error occurs.
* While the spec does not include any additional properties, we intentionally go beyond the spec
* and provide some (minimal) additional information to aid in debugging.
*
* @public
*/
var ErrorEvent = class extends Event {
	/**
	* HTTP status code, if this was triggered by an HTTP error
	* Note: this is not part of the spec, but is included for better error handling.
	*
	* @public
	*/
	code;
	/**
	* Optional message attached to the error.
	* Note: this is not part of the spec, but is included for better error handling.
	*
	* @public
	*/
	message;
	/**
	* Constructs a new `ErrorEvent` instance. This is typically not called directly,
	* but rather emitted by the `EventSource` object when an error occurs.
	*
	* @param type - The type of the event (should be "error")
	* @param errorEventInitDict - Optional properties to include in the error event
	*/
	constructor(type, errorEventInitDict) {
		super(type);
		this.code = errorEventInitDict?.code ?? void 0;
		this.message = errorEventInitDict?.message ?? void 0;
	}
	/**
	* Node.js "hides" the `message` and `code` properties of the `ErrorEvent` instance,
	* when it is `console.log`'ed. This makes it harder to debug errors. To ease debugging,
	* we explicitly include the properties in the `inspect` method.
	*
	* This is automatically called by Node.js when you `console.log` an instance of this class.
	*
	* @param _depth - The current depth
	* @param options - The options passed to `util.inspect`
	* @param inspect - The inspect function to use (prevents having to import it from `util`)
	* @returns A string representation of the error
	*/
	[Symbol.for("nodejs.util.inspect.custom")](_depth, options, inspect) {
		return inspect(inspectableError(this), options);
	}
	/**
	* Deno "hides" the `message` and `code` properties of the `ErrorEvent` instance,
	* when it is `console.log`'ed. This makes it harder to debug errors. To ease debugging,
	* we explicitly include the properties in the `inspect` method.
	*
	* This is automatically called by Deno when you `console.log` an instance of this class.
	*
	* @param inspect - The inspect function to use (prevents having to import it from `util`)
	* @param options - The options passed to `Deno.inspect`
	* @returns A string representation of the error
	*/
	[Symbol.for("Deno.customInspect")](inspect, options) {
		return inspect(inspectableError(this), options);
	}
};
/**
* For environments where DOMException may not exist, we will use a SyntaxError instead.
* While this isn't strictly according to spec, it is very close.
*
* @param message - The message to include in the error
* @returns A `DOMException` or `SyntaxError` instance
* @internal
*/
function syntaxError(message) {
	const DomException = globalThis.DOMException;
	if (typeof DomException === "function") return new DomException(message, "SyntaxError");
	return new SyntaxError(message);
}
/**
* Flatten an error into a single error message string.
* Unwraps nested errors and joins them with a comma.
*
* @param err - The error to flatten
* @returns A string representation of the error
* @internal
*/
function flattenError(err) {
	if (!(err instanceof Error)) return `${err}`;
	if ("errors" in err && Array.isArray(err.errors)) return err.errors.map(flattenError).join(", ");
	if ("cause" in err && err.cause instanceof Error) return `${err}: ${flattenError(err.cause)}`;
	return err.message;
}
/**
* Convert an `ErrorEvent` instance into a plain object for inspection.
*
* @param err - The `ErrorEvent` instance to inspect
* @returns A plain object representation of the error
* @internal
*/
function inspectableError(err) {
	return {
		type: err.type,
		message: err.message,
		code: err.code,
		defaultPrevented: err.defaultPrevented,
		cancelable: err.cancelable,
		timeStamp: err.timeStamp
	};
}
//#endregion
//#region node_modules/eventsource-parser/dist/errors.js
/**
* Error thrown when encountering an issue during parsing.
*
* @public
*/
var ParseError = class extends Error {
	constructor(message, options) {
		super(message);
		this.name = "ParseError";
		this.type = options.type;
		this.field = options.field;
		this.value = options.value;
		this.line = options.line;
	}
};
//#endregion
//#region node_modules/eventsource-parser/dist/parse.js
/**
* EventSource/Server-Sent Events parser
* @see https://html.spec.whatwg.org/multipage/server-sent-events.html
*/
var LF = 10;
var CR = 13;
var SPACE = 32;
var MAX_FIELD_PREFIX_LENGTH = 6;
/**
* Creates a new EventSource parser.
*
* @param config - Parser configuration. Accepts callbacks (see {@link ParserCallbacks})
*   and options like `maxBufferSize` (see {@link ParserConfig}).
*
* @returns A new EventSource parser, with `feed` and `reset` methods.
* @public
*/
function createParser(config) {
	if (typeof config === "function") throw new TypeError("`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?");
	const { maxBufferSize, onComment, onError, onEvent, onId, onRetry } = config;
	const pendingFragments = [];
	let pendingFragmentsLength = 0;
	let isFirstChunk = true;
	let id;
	let data = "";
	let dataLines = 0;
	let eventType;
	let terminated = false;
	let skippingLine = false;
	let skipNextLineFeed = false;
	/**
	* Feeds a chunk of the SSE stream to the parser. Any trailing bytes that do
	* not yet form a complete line are held back and prepended to the next chunk,
	* so callers can pass arbitrary slices of the stream without worrying about
	* line boundaries.
	*
	* Per the SSE spec, one leading UTF-8 BOM at the start of the very first chunk
	* is stripped before parsing. This handles both the raw 3-byte form (0xEF 0xBB
	* 0xBF) and a single decoded U+FEFF, so a leading BOM is ignored regardless of
	* how the caller decoded the bytes.
	*
	* @see https://html.spec.whatwg.org/multipage/server-sent-events.html#parsing-an-event-stream
	*/
	function feed(chunk) {
		if (terminated) throw new Error("Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing.");
		if (isFirstChunk) {
			isFirstChunk = false;
			if (chunk.charCodeAt(0) === 65279) chunk = chunk.slice(1);
			else if (chunk.charCodeAt(0) === 239 && chunk.charCodeAt(1) === 187 && chunk.charCodeAt(2) === 191) chunk = chunk.slice(3);
		}
		if (skippingLine || skipNextLineFeed) {
			chunk = resumeAfterSkip(chunk);
			if (!chunk) return;
		}
		if (!pendingFragments.length) {
			const trailing = processLines(chunk);
			if (trailing !== "") storeTrailing(trailing);
			checkBufferSize();
			return;
		}
		if (chunk.indexOf("\n") === -1 && chunk.indexOf("\r") === -1) {
			if (pendingFragmentsLength < MAX_FIELD_PREFIX_LENGTH) {
				if (!shouldBufferTrailing(pendingFragments.join("") + chunk.slice(0, MAX_FIELD_PREFIX_LENGTH - pendingFragmentsLength))) {
					pendingFragments.length = 0;
					pendingFragmentsLength = 0;
					skippingLine = true;
					return;
				}
			}
			pendingFragments.push(chunk);
			pendingFragmentsLength += chunk.length;
			checkBufferSize();
			return;
		}
		pendingFragments.push(chunk);
		const input = pendingFragments.join("");
		pendingFragments.length = 0;
		pendingFragmentsLength = 0;
		storeTrailing(processLines(input));
		checkBufferSize();
	}
	function resumeAfterSkip(chunk) {
		if (chunk.length === 0) return chunk;
		if (skipNextLineFeed) {
			skipNextLineFeed = false;
			return chunk.charCodeAt(0) === LF ? chunk.slice(1) : chunk;
		}
		const crIndex = chunk.indexOf("\r");
		const lfIndex = chunk.indexOf("\n");
		const lineEnd = crIndex === -1 ? lfIndex : lfIndex === -1 ? crIndex : crIndex < lfIndex ? crIndex : lfIndex;
		if (lineEnd === -1) return "";
		if (lineEnd === chunk.length - 1 && chunk.charCodeAt(lineEnd) === CR) {
			skippingLine = false;
			skipNextLineFeed = true;
			return "";
		}
		skippingLine = false;
		return chunk.slice(lineEnd + (chunk.charCodeAt(lineEnd) === CR && chunk.charCodeAt(lineEnd + 1) === LF ? 2 : 1));
	}
	function storeTrailing(trailing) {
		if (!trailing) return;
		if (trailing.charCodeAt(trailing.length - 1) === CR) {
			parseLine(trailing, 0, trailing.length - 1);
			skipNextLineFeed = true;
			return;
		}
		if (shouldBufferTrailing(trailing)) {
			pendingFragments.push(trailing);
			pendingFragmentsLength = trailing.length;
			return;
		}
		skippingLine = true;
	}
	function shouldBufferTrailing(trailing) {
		const firstCharCode = trailing.charCodeAt(0);
		return firstCharCode === 58 && !!onComment || firstCharCode === 100 && isPotentialField(trailing, "data") || firstCharCode === 101 && isPotentialField(trailing, "event") || firstCharCode === 105 && isPotentialField(trailing, "id") || firstCharCode === 114 && isPotentialField(trailing, "retry");
	}
	function checkBufferSize() {
		if (maxBufferSize === void 0) return;
		if (pendingFragmentsLength + data.length <= maxBufferSize) return;
		terminated = true;
		pendingFragments.length = 0;
		pendingFragmentsLength = 0;
		id = void 0;
		data = "";
		dataLines = 0;
		eventType = void 0;
		skippingLine = false;
		skipNextLineFeed = false;
		onError === null || onError === void 0 || onError(new ParseError(`Buffered data exceeded max buffer size of ${maxBufferSize} characters`, { type: "max-buffer-size-exceeded" }));
	}
	/**
	* Splits `chunk` into SSE lines and dispatches each to the appropriate handler.
	* Returns any trailing bytes that did not terminate with a line break, so the
	* caller can prepend them to the next chunk.
	*
	* The SSE spec permits three line terminators: `\n`, `\r`, and `\r\n`. Real-world
	* streams almost always use plain `\n`, so we take a fast path when no `\r` is
	* present in the chunk. The slow path is spec-correct but does more work per line.
	*/
	function processLines(chunk) {
		let searchIndex = 0;
		if (chunk.indexOf("\r") === -1) {
			let lfIndex = chunk.indexOf("\n", searchIndex);
			while (lfIndex !== -1) {
				if (searchIndex === lfIndex) {
					if (id !== void 0) onId === null || onId === void 0 || onId(id);
					if (dataLines > 0) onEvent === null || onEvent === void 0 || onEvent({
						id,
						event: eventType,
						data
					});
					id = void 0;
					data = "";
					dataLines = 0;
					eventType = void 0;
					searchIndex = lfIndex + 1;
					lfIndex = chunk.indexOf("\n", searchIndex);
					continue;
				}
				const firstCharCode = chunk.charCodeAt(searchIndex);
				if (isDataPrefix(chunk, searchIndex, firstCharCode)) {
					const valueStart = chunk.charCodeAt(searchIndex + 5) === SPACE ? searchIndex + 6 : searchIndex + 5;
					const value = chunk.slice(valueStart, lfIndex);
					if (dataLines === 0 && chunk.charCodeAt(lfIndex + 1) === LF) {
						if (id !== void 0) onId === null || onId === void 0 || onId(id);
						onEvent === null || onEvent === void 0 || onEvent({
							id,
							event: eventType,
							data: value
						});
						id = void 0;
						data = "";
						eventType = void 0;
						searchIndex = lfIndex + 2;
						lfIndex = chunk.indexOf("\n", searchIndex);
						continue;
					}
					data = dataLines === 0 ? value : `${data}\n${value}`;
					dataLines++;
				} else if (isEventPrefix(chunk, searchIndex, firstCharCode)) eventType = chunk.slice(chunk.charCodeAt(searchIndex + 6) === SPACE ? searchIndex + 7 : searchIndex + 6, lfIndex) || void 0;
				else parseLine(chunk, searchIndex, lfIndex);
				searchIndex = lfIndex + 1;
				lfIndex = chunk.indexOf("\n", searchIndex);
			}
			return chunk.slice(searchIndex);
		}
		while (searchIndex < chunk.length) {
			const crIndex = chunk.indexOf("\r", searchIndex);
			const lfIndex = chunk.indexOf("\n", searchIndex);
			let lineEnd = -1;
			if (crIndex !== -1 && lfIndex !== -1) lineEnd = crIndex < lfIndex ? crIndex : lfIndex;
			else if (crIndex !== -1) if (crIndex === chunk.length - 1) lineEnd = -1;
			else lineEnd = crIndex;
			else if (lfIndex !== -1) lineEnd = lfIndex;
			if (lineEnd === -1) break;
			parseLine(chunk, searchIndex, lineEnd);
			searchIndex = lineEnd + 1;
			if (chunk.charCodeAt(searchIndex - 1) === CR && chunk.charCodeAt(searchIndex) === LF) searchIndex++;
		}
		return chunk.slice(searchIndex);
	}
	function parseLine(chunk, start, end) {
		if (start === end) {
			dispatchEvent();
			return;
		}
		const firstCharCode = chunk.charCodeAt(start);
		if (isDataPrefix(chunk, start, firstCharCode)) {
			const valueStart = chunk.charCodeAt(start + 5) === SPACE ? start + 6 : start + 5;
			const value = chunk.slice(valueStart, end);
			data = dataLines === 0 ? value : `${data}\n${value}`;
			dataLines++;
			return;
		}
		if (isEventPrefix(chunk, start, firstCharCode)) {
			eventType = chunk.slice(chunk.charCodeAt(start + 6) === SPACE ? start + 7 : start + 6, end) || void 0;
			return;
		}
		if (firstCharCode === 105 && chunk.charCodeAt(start + 1) === 100 && chunk.charCodeAt(start + 2) === 58) {
			const value = chunk.slice(chunk.charCodeAt(start + 3) === SPACE ? start + 4 : start + 3, end);
			if (!value.includes("\0")) id = value;
			return;
		}
		if (firstCharCode === 58) {
			if (onComment) {
				const line = chunk.slice(start, end);
				onComment(line.slice(chunk.charCodeAt(start + 1) === SPACE ? 2 : 1));
			}
			return;
		}
		const line = chunk.slice(start, end);
		const fieldSeparatorIndex = line.indexOf(":");
		if (fieldSeparatorIndex === -1) {
			processField(line, "", line);
			return;
		}
		const field = line.slice(0, fieldSeparatorIndex);
		const offset = line.charCodeAt(fieldSeparatorIndex + 1) === SPACE ? 2 : 1;
		processField(field, line.slice(fieldSeparatorIndex + offset), line);
	}
	function processField(field, value, line) {
		switch (field) {
			case "event":
				eventType = value || void 0;
				break;
			case "data":
				data = dataLines === 0 ? value : `${data}\n${value}`;
				dataLines++;
				break;
			case "id":
				if (!value.includes("\0")) id = value;
				break;
			case "retry":
				if (/^\d+$/.test(value)) onRetry === null || onRetry === void 0 || onRetry(parseInt(value, 10));
				else onError === null || onError === void 0 || onError(new ParseError(`Invalid \`retry\` value: "${value}"`, {
					type: "invalid-retry",
					value,
					line
				}));
				break;
			default:
				onError === null || onError === void 0 || onError(new ParseError(`Unknown field "${field.length > 20 ? `${field.slice(0, 20)}…` : field}"`, {
					type: "unknown-field",
					field,
					value,
					line
				}));
				break;
		}
	}
	function dispatchEvent() {
		if (id !== void 0) onId === null || onId === void 0 || onId(id);
		if (dataLines > 0) onEvent === null || onEvent === void 0 || onEvent({
			id,
			event: eventType,
			data
		});
		id = void 0;
		data = "";
		dataLines = 0;
		eventType = void 0;
	}
	function reset(options = {}) {
		if (options.consume && pendingFragments.length > 0) {
			const incompleteLine = pendingFragments.join("");
			parseLine(incompleteLine, 0, incompleteLine.length);
		}
		isFirstChunk = true;
		id = void 0;
		data = "";
		dataLines = 0;
		eventType = void 0;
		pendingFragments.length = 0;
		pendingFragmentsLength = 0;
		terminated = false;
		skippingLine = false;
		skipNextLineFeed = false;
	}
	return {
		feed,
		reset
	};
}
/**
* Checks if `chunk` starts with the literal `data:` at index `i`.
*
* Equivalent to `chunk.startsWith('data:', i)`, but benchmarks show this
* hand-unrolled char-code comparison is ~20% faster on common event types.
* The caller passes `firstCharCode` (the code at `i`) so it can be reused
* across prefix checks.
*
* ASCII: 'd' = 100, 'a' = 97, 't' = 116, 'a' = 97, ':' = 58
*/
function isDataPrefix(chunk, i, firstCharCode) {
	return firstCharCode === 100 && chunk.charCodeAt(i + 1) === 97 && chunk.charCodeAt(i + 2) === 116 && chunk.charCodeAt(i + 3) === 97 && chunk.charCodeAt(i + 4) === 58;
}
/**
* Checks if `chunk` starts with the literal `event:` at index `i`.
*
* See {@link isDataPrefix} for why this is hand-unrolled rather than using
* `String.prototype.startsWith`.
*
* ASCII: 'e' = 101, 'v' = 118, 'e' = 101, 'n' = 110, 't' = 116, ':' = 58
*/
function isEventPrefix(chunk, i, firstCharCode) {
	return firstCharCode === 101 && chunk.charCodeAt(i + 1) === 118 && chunk.charCodeAt(i + 2) === 101 && chunk.charCodeAt(i + 3) === 110 && chunk.charCodeAt(i + 4) === 116 && chunk.charCodeAt(i + 5) === 58;
}
function isPotentialField(line, field) {
	let i = 1;
	while (i < line.length && i < field.length) {
		if (line.charCodeAt(i) !== field.charCodeAt(i)) return false;
		i++;
	}
	return line.length <= field.length || line.charCodeAt(field.length) === 58;
}
//#endregion
//#region node_modules/eventsource/dist/EventSource.js
var DEFAULT_MAX_BUFFER_SIZE = 100 * 1024 * 1024;
/**
* Implementation of the `EventSource` interface.
*
* Intentionally not exported: TypeScript emits a `#private` brand into declaration files for any
* class holding hard-private (`#`) fields, which makes the emitted type nominal. Exporting the
* interface and const instead keeps the public type structural, while the implementation keeps
* its actual, runtime-enforced private state.
*
* Public members are documented on the `EventSource` interface, which is what consumers see.
*
* @internal
*/
var EventSourceImpl = class extends EventTarget {
	static CONNECTING = 0;
	static OPEN = 1;
	static CLOSED = 2;
	CONNECTING = 0;
	OPEN = 1;
	CLOSED = 2;
	get readyState() {
		return this.#readyState;
	}
	get url() {
		return this.#url.href;
	}
	get withCredentials() {
		return this.#withCredentials;
	}
	get onerror() {
		return this.#onError;
	}
	set onerror(value) {
		if (this.#onError) this.removeEventListener("error", this.#onError);
		this.#onError = value;
		if (value) this.addEventListener("error", value);
	}
	get onmessage() {
		return this.#onMessage;
	}
	set onmessage(value) {
		if (this.#onMessage) this.removeEventListener("message", this.#onMessage);
		this.#onMessage = value;
		if (value) this.addEventListener("message", value);
	}
	get onopen() {
		return this.#onOpen;
	}
	set onopen(value) {
		if (this.#onOpen) this.removeEventListener("open", this.#onOpen);
		this.#onOpen = value;
		if (value) this.addEventListener("open", value);
	}
	addEventListener(type, listener, options) {
		const listen = listener;
		super.addEventListener(type, listen, options);
	}
	removeEventListener(type, listener, options) {
		const listen = listener;
		super.removeEventListener(type, listen, options);
	}
	constructor(url, eventSourceInitDict) {
		super();
		try {
			if (url instanceof URL) this.#url = url;
			else if (typeof url === "string") this.#url = new URL(url, getBaseURL());
			else throw new Error("Invalid URL");
		} catch {
			throw syntaxError("An invalid or illegal string was specified");
		}
		this.#parser = createParser({
			maxBufferSize: eventSourceInitDict?.maxBufferSize ?? DEFAULT_MAX_BUFFER_SIZE,
			onEvent: this.#onEvent,
			onError: this.#onParseError,
			onId: this.#onIdChange,
			onRetry: this.#onRetryChange
		});
		this.#readyState = this.CONNECTING;
		this.#reconnectInterval = 3e3;
		this.#fetch = eventSourceInitDict?.fetch ?? globalThis.fetch;
		this.#withCredentials = eventSourceInitDict?.withCredentials ?? false;
		this.#connect();
	}
	close() {
		if (this.#reconnectTimer) clearTimeout(this.#reconnectTimer);
		if (this.#readyState === this.CLOSED) return;
		if (this.#controller) this.#controller.abort();
		this.#readyState = this.CLOSED;
		this.#controller = void 0;
	}
	/**
	* Current connection state
	*
	* @internal
	*/
	#readyState;
	/**
	* Original URL used to connect.
	*
	* Note that this will stay the same even after a redirect.
	*
	* @internal
	*/
	#url;
	/**
	* The destination URL after a redirect. Is reset on reconnection.
	*
	* @internal
	*/
	#redirectUrl;
	/**
	* Whether to include credentials in the request
	*
	* @internal
	*/
	#withCredentials;
	/**
	* The fetch implementation to use
	*
	* @internal
	*/
	#fetch;
	/**
	* The reconnection time in milliseconds
	*
	* @internal
	*/
	#reconnectInterval;
	/**
	* Reference to an ongoing reconnect attempt, if any
	*
	* @internal
	*/
	#reconnectTimer;
	/**
	* The last event ID seen by the EventSource, which will be sent as `Last-Event-ID` in the
	* request headers on a reconnection attempt.
	*
	* @internal
	*/
	#lastEventId = null;
	/**
	* The AbortController instance used to abort the fetch request
	*
	* @internal
	*/
	#controller;
	/**
	* Instance of an EventSource parser (`eventsource-parser` npm module)
	*
	* @internal
	*/
	#parser;
	/**
	* Holds the current error handler, attached through `onerror` property directly.
	* Note that `addEventListener('error', …)` will not be stored here.
	*
	* @internal
	*/
	#onError = null;
	/**
	* Holds the current message handler, attached through `onmessage` property directly.
	* Note that `addEventListener('message', …)` will not be stored here.
	*
	* @internal
	*/
	#onMessage = null;
	/**
	* Holds the current open handler, attached through `onopen` property directly.
	* Note that `addEventListener('open', …)` will not be stored here.
	*
	* @internal
	*/
	#onOpen = null;
	/**
	* Connect to the given URL and start receiving events
	*
	* @internal
	*/
	#connect() {
		this.#readyState = this.CONNECTING;
		this.#controller = new AbortController();
		const fetch = this.#fetch;
		fetch(this.#url, this.#getRequestOptions()).then(this.#onFetchResponse).catch(this.#onFetchError);
	}
	/**
	* Handles the fetch response
	*
	* @param response - The Fetch(ish) response
	* @internal
	*/
	#onFetchResponse = async (response) => {
		this.#parser.reset();
		const { body, redirected, status, headers } = response;
		if (status === 204) {
			this.#failConnection("Server sent HTTP 204, not reconnecting", 204);
			this.close();
			return;
		}
		if (redirected) this.#redirectUrl = new URL(response.url);
		else this.#redirectUrl = void 0;
		if (status !== 200) {
			this.#failConnection(`Non-200 status code (${status})`, status);
			return;
		}
		if (!(headers.get("content-type") || "").startsWith("text/event-stream")) {
			this.#failConnection("Invalid content type, expected \"text/event-stream\"", status);
			return;
		}
		if (this.#readyState === this.CLOSED) return;
		this.#readyState = this.OPEN;
		const openEvent = new Event("open");
		this.dispatchEvent(openEvent);
		if (typeof body !== "object" || !body || !("getReader" in body)) {
			this.#failConnection("Invalid response body, expected a web ReadableStream", status);
			this.close();
			return;
		}
		const decoder = new TextDecoder();
		const reader = body.getReader();
		let open = true;
		do {
			const { done, value } = await reader.read();
			if (this.#readyState === this.CLOSED) {
				open = false;
				break;
			}
			if (value) this.#parser.feed(decoder.decode(value, { stream: !done }));
			if (!done) continue;
			open = false;
			this.#parser.reset();
			this.#scheduleReconnect();
		} while (open);
	};
	/**
	* Handles rejected requests for the EventSource endpoint
	*
	* @param err - The error from `fetch()`
	* @internal
	*/
	#onFetchError = (err) => {
		this.#controller = void 0;
		if (err.name === "AbortError" || err.type === "aborted") return;
		this.#scheduleReconnect(flattenError(err));
	};
	/**
	* Get request options for the `fetch()` request
	*
	* @returns The request options
	* @internal
	*/
	#getRequestOptions() {
		const init = {
			mode: "cors",
			redirect: "follow",
			headers: {
				Accept: "text/event-stream",
				...this.#lastEventId ? { "Last-Event-ID": this.#lastEventId } : void 0
			},
			cache: "no-store",
			signal: this.#controller?.signal
		};
		if ("window" in globalThis) init.credentials = this.withCredentials ? "include" : "same-origin";
		return init;
	}
	/**
	* Called by EventSourceParser when a blank line ends a block containing a valid `id` field.
	* This runs before `#onEvent` when the same block also contains data.
	*
	* @param value - The value of the `id` field
	* @internal
	*/
	#onIdChange = (value) => {
		this.#lastEventId = value;
	};
	/**
	* Called by EventSourceParser instance when an event has successfully been parsed
	* and is ready to be processed.
	*
	* @param event - The parsed event
	* @internal
	*/
	#onEvent = (event) => {
		const origin = this.#redirectUrl ? this.#redirectUrl.origin : this.#url.origin;
		const lastEventId = this.#lastEventId ?? "";
		const messageEvent = new MessageEvent(event.event || "message", {
			data: event.data,
			origin,
			lastEventId
		});
		if (messageEvent.origin !== origin) defineEventProperty(messageEvent, "origin", origin);
		if (messageEvent.lastEventId !== lastEventId) defineEventProperty(messageEvent, "lastEventId", lastEventId);
		this.dispatchEvent(messageEvent);
	};
	/**
	* Called by EventSourceParser instance when a new reconnection interval is received
	* from the EventSource endpoint.
	*
	* @param value - The new reconnection interval in milliseconds
	* @internal
	*/
	#onRetryChange = (value) => {
		this.#reconnectInterval = value;
	};
	/**
	* Called by EventSourceParser instance when a parse error occurs.
	*
	* @param error - The parser error
	* @internal
	*/
	#onParseError = (error) => {
		if (error.type !== "max-buffer-size-exceeded") return;
		this.close();
		this.#failConnection(error.message);
	};
	/**
	* Handles the process referred to in the EventSource specification as "failing a connection".
	*
	* @param error - The error causing the connection to fail
	* @param code - The HTTP status code, if available
	* @internal
	*/
	#failConnection(message, code) {
		if (this.#readyState !== this.CLOSED) this.#readyState = this.CLOSED;
		const errorEvent = new ErrorEvent("error", {
			code,
			message
		});
		this.dispatchEvent(errorEvent);
	}
	/**
	* Schedules a reconnection attempt against the EventSource endpoint.
	*
	* @param message - The error causing the connection to fail
	* @param code - The HTTP status code, if available
	* @internal
	*/
	#scheduleReconnect(message, code) {
		if (this.#readyState === this.CLOSED) return;
		this.#readyState = this.CONNECTING;
		const errorEvent = new ErrorEvent("error", {
			code,
			message
		});
		this.dispatchEvent(errorEvent);
		const timer = setTimeout(this.#reconnect, this.#reconnectInterval);
		if (typeof timer === "object" && timer !== null && "unref" in timer) timer.unref();
		this.#reconnectTimer = timer;
	}
	/**
	* Reconnects to the EventSource endpoint after a disconnect/failure
	*
	* @internal
	*/
	#reconnect = () => {
		this.#reconnectTimer = void 0;
		if (this.#readyState !== this.CONNECTING) return;
		this.#connect();
	};
};
Object.defineProperty(EventSourceImpl, "name", { value: "EventSource" });
Object.defineProperty(EventSourceImpl, Symbol.for("eventsource.supports-fetch-override"), {
	value: true,
	writable: false,
	configurable: false,
	enumerable: false
});
/**
* An `EventSource` instance opens a persistent connection to an HTTP server, which sends events
* in `text/event-stream` format. The connection remains open until closed by calling `.close()`.
*
* @public
* @example
* ```js
* const eventSource = new EventSource('https://example.com/stream')
* eventSource.addEventListener('error', (error) => {
*   console.error(error)
* })
* eventSource.addEventListener('message', (event) => {
*  console.log('Received message:', event.data)
* })
* ```
*/
var EventSource = EventSourceImpl;
/**
* According to spec, when constructing a URL:
* > 1. Let baseURL be environment's base URL, if environment is a Document object
* > 2. Return the result of applying the URL parser to url, with baseURL.
*
* Thus we should use `document.baseURI` if available, since it can be set through a base tag.
*
* @returns The base URL, if available - otherwise `undefined`
* @internal
*/
function getBaseURL() {
	const doc = "document" in globalThis ? globalThis.document : void 0;
	return doc && typeof doc === "object" && "baseURI" in doc && typeof doc.baseURI === "string" ? doc.baseURI : void 0;
}
/**
* Assigns a `MessageEvent` property that the constructor's init dictionary was supposed to have
* set, for runtimes that ignore it.
*
* Defined rather than assigned because on the runtimes that do implement the property as a
* prototype getter, a plain assignment would throw in strict mode. `enumerable` and
* `configurable` mirror how a spec-compliant implementation exposes it.
*
* @param event - The message event to define the property on
* @param property - The property to define
* @param value - The value the constructor should have set
* @internal
*/
function defineEventProperty(event, property, value) {
	Object.defineProperty(event, property, {
		value,
		enumerable: true,
		configurable: true
	});
}
//#endregion
//#region node_modules/@sanity/client/node_modules/nanoid/url-alphabet/index.js
var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
//#endregion
//#region node_modules/@sanity/client/node_modules/nanoid/index.js
var GET_RANDOM_LIMIT = 65536;
function fillRandom(buffer) {
	let from = 0;
	while (from < buffer.length) {
		let to = Math.min(from + GET_RANDOM_LIMIT, buffer.length);
		crypto.getRandomValues(buffer.subarray(from, to));
		from = to;
	}
}
function random(bytes) {
	bytes |= 0;
	if (bytes < 0) throw new RangeError("Wrong ID size");
	let buffer = Buffer.allocUnsafe(bytes);
	fillRandom(buffer);
	return buffer;
}
function customRandom(alphabet, defaultSize, getRandom) {
	let safeByteCutoff = 256 - 256 % alphabet.length;
	if (safeByteCutoff === 256) {
		let mask = alphabet.length - 1;
		return (size = defaultSize) => {
			if (!size) return "";
			let id = "";
			while (true) {
				let bytes = getRandom(size);
				let i = size;
				while (i--) {
					id += alphabet[bytes[i] & mask];
					if (id.length >= size) return id;
				}
			}
		};
	}
	let step = Math.ceil(1.6 * 256 * defaultSize / safeByteCutoff);
	return (size = defaultSize) => {
		if (!size) return "";
		let id = "";
		while (true) {
			let bytes = getRandom(step);
			let i = step;
			while (i--) if (bytes[i] < safeByteCutoff) {
				id += alphabet[bytes[i] % alphabet.length];
				if (id.length >= size) return id;
			}
		}
	};
}
var POOL_MAX = GET_RANDOM_LIMIT / 2;
function customAlphabet(alphabet, defaultSize = 21) {
	if (typeof alphabet !== "string" || !alphabet || alphabet.length > 256) return customRandom(alphabet, defaultSize, random);
	for (let i = 0; i < alphabet.length; i++) if (alphabet.charCodeAt(i) > 255) return customRandom(alphabet, defaultSize, random);
	let charCodes = Uint8Array.from(alphabet, (str) => {
		return str.charCodeAt(0);
	});
	let alphabetLen = alphabet.length;
	let mask = (2 << 31 - Math.clz32(alphabetLen - 1 | 1)) - 1;
	let pool = "";
	let poolOffset = 0;
	let poolNext = 0;
	return (size = defaultSize) => {
		size |= 0;
		if (size < 0) throw new RangeError("Wrong ID size");
		if (size === 0) return "";
		if (poolOffset + size > pool.length) {
			let target = Math.max(poolNext, size);
			poolNext = Math.min(target * 16, POOL_MAX);
			let buffer = Buffer.allocUnsafe(target);
			if (mask === alphabetLen - 1) {
				fillRandom(buffer);
				for (let i = 0; i < target; i++) buffer[i] = charCodes[buffer[i] & mask];
			} else {
				let randomBytes = Buffer.allocUnsafe(Math.ceil(1.6 * (mask + 1) * target / alphabetLen));
				let accepted = 0;
				while (accepted < target) {
					fillRandom(randomBytes);
					for (let i = 0; i < randomBytes.length; i++) {
						let index = randomBytes[i] & mask;
						if (index < alphabetLen) {
							buffer[accepted++] = charCodes[index];
							if (accepted === target) break;
						}
					}
				}
			}
			pool = buffer.toString("latin1");
			poolOffset = 0;
		}
		poolOffset += size;
		return pool.substring(poolOffset - size, poolOffset);
	};
}
customAlphabet(urlAlphabet);
//#endregion
//#region node_modules/@sanity/client/dist/index.js
/**
* Thrown when the EventSource connection could not be established, or was rejected by the server.
* Transient failures (network drops, 5xx, 408, 429) are reconnected internally and emitted as
* `reconnect` events; a permanent rejection (any other 4xx, eg an expired token) errors the
* stream with this class so consumers can react — check `status` for the rejection code.
*
* @public
*/
var ConnectionFailedError = class extends Error {
	constructor(message, options = {}) {
		let { status, ...errorOptions } = options;
		super(message, errorOptions), _defineProperty(this, "name", "ConnectionFailedError"), _defineProperty(this, "status", void 0), this.status = status;
	}
};
var DisconnectError = class extends Error {
	constructor(message, reason, options = {}) {
		super(message, options), _defineProperty(this, "name", "DisconnectError"), _defineProperty(this, "reason", void 0), this.reason = reason;
	}
};
var ChannelError = class extends Error {
	constructor(message, data) {
		super(message), _defineProperty(this, "name", "ChannelError"), _defineProperty(this, "data", void 0), this.data = data;
	}
};
var MessageError = class extends Error {
	constructor(message, data, options = {}) {
		super(message, options), _defineProperty(this, "name", "MessageError"), _defineProperty(this, "data", void 0), this.data = data;
	}
};
var MessageParseError = class extends Error {
	constructor(..._args) {
		super(..._args), _defineProperty(this, "name", "MessageParseError");
	}
};
var REQUIRED_EVENTS = ["channelError", "disconnect"];
/**
* Sanity API specific EventSource handler shared between the listen and live APIs
*
* Since the `EventSource` API is not provided by all environments, this function enables custom initialization of the EventSource instance
* for runtimes that requires polyfilling or custom setup logic (e.g. custom HTTP headers)
* via the passed `initEventSource` function which must return an EventSource instance.
*
* Possible errors to be thrown on the returned observable are:
* - {@link MessageError}
* - {@link MessageParseError}
* - {@link ChannelError}
* - {@link DisconnectError}
* - {@link ConnectionFailedError}
*
* @param initEventSource - A function that returns an EventSource instance or an Observable that resolves to an EventSource instance
* @param events - an array of named events from the API to listen for.
*
* @internal
*/
function connectEventSource(initEventSource, events) {
	return defer(() => {
		let es = initEventSource();
		return isObservable(es) ? es : of(es);
	}).pipe(mergeMap((es) => connectWithESInstance(es, events)));
}
/**
* Provides an observable from the passed EventSource instance, subscribing to the passed list of names of events types to listen for
* Handles connection logic, adding/removing event listeners, payload parsing, error propagation, etc.
*
* @param es - The EventSource instance
* @param events - List of event names to listen for
*/
function connectWithESInstance(es, events) {
	return new Observable((observer) => {
		let requestedEvents = new Set(events), isRequestedEvent = (type) => requestedEvents.has(type), emitOpen = isRequestedEvent("open");
		function onError(evt) {
			if ("data" in evt) {
				let [parseError, event] = parseEvent(evt);
				observer.error(parseError || !event ? new MessageParseError("Unable to parse EventSource error message", { cause: parseError }) : new MessageError(isRecord$1(event.data) && typeof event.data.message == "string" ? event.data.message : "", event));
				return;
			}
			if (evt.code !== void 0) {
				observer.error(new ConnectionFailedError("EventSource connection failed", { status: evt.code }));
				return;
			}
			if (es.readyState === es.CLOSED) observer.error(new ConnectionFailedError("EventSource connection failed"));
			else {
				let type = "reconnect";
				isRequestedEvent(type) && observer.next({ type });
			}
		}
		function onOpen() {
			let type = "open";
			isRequestedEvent(type) && observer.next({ type });
		}
		function onMessage(message) {
			let [parseError, event] = parseEvent(message);
			if (parseError || !event) {
				observer.error(new MessageParseError("Unable to parse EventSource message", { cause: parseError }));
				return;
			}
			if (message.type === "channelError") {
				let tag = new URL(es.url).searchParams.get("tag");
				observer.error(new ChannelError(extractErrorMessage(event?.data, tag), event.data));
				return;
			}
			if (message.type === "disconnect") {
				observer.error(new DisconnectError(`Server disconnected client: ${isRecord$1(event.data) && typeof event.data.reason == "string" && event.data.reason || "unknown error"}`));
				return;
			}
			isRequestedEvent(message.type) && observer.next({
				type: message.type,
				id: message.lastEventId,
				...event.data ? { data: event.data } : {}
			});
		}
		es.addEventListener("error", onError), emitOpen && es.addEventListener("open", onOpen);
		let cleanedEvents = [.../* @__PURE__ */ new Set([...REQUIRED_EVENTS, ...events])].filter((type) => type !== "error" && type !== "open" && type !== "reconnect");
		return cleanedEvents.forEach((type) => es.addEventListener(type, onMessage)), () => {
			es.removeEventListener("error", onError), emitOpen && es.removeEventListener("open", onOpen), cleanedEvents.forEach((type) => es.removeEventListener(type, onMessage)), es.close();
		};
	});
}
function parseEvent(message) {
	try {
		let data = typeof message.data == "string" && JSON.parse(message.data);
		return [null, {
			type: message.type,
			id: message.lastEventId,
			...isEmptyObject(data) ? {} : { data }
		}];
	} catch (err) {
		return [err, null];
	}
}
function extractErrorMessage(err, tag) {
	let error = isRecord$1(err) ? err.error : void 0;
	if (!error) {
		let message = isRecord$1(err) ? err.message : void 0;
		return typeof message == "string" && message || "Unknown listener error";
	}
	if (isRecord$1(error)) {
		if (isQueryParseError(error)) return formatQueryParseError(error, tag);
		if (typeof error.description == "string") return error.description;
	}
	return typeof error == "string" ? error : JSON.stringify(error, null, 2);
}
function isEmptyObject(data) {
	for (let _ in data) return !1;
	return !0;
}
function getSelection(sel) {
	if (typeof sel == "string") return { id: sel };
	if (Array.isArray(sel)) return {
		query: "*[_id in $ids]",
		params: { ids: sel }
	};
	if (typeof sel == "object" && sel && "query" in sel && typeof sel.query == "string") return "params" in sel && typeof sel.params == "object" && sel.params !== null ? {
		query: sel.query,
		params: sel.params
	} : { query: sel.query };
	let selectionOpts = [
		"* Document ID (<docId>)",
		"* Array of document IDs",
		"* Object containing `query`"
	].join("\n");
	throw Error(`Unknown selection - must be one of:\n\n${selectionOpts}`);
}
function _checkPrivateRedeclaration(e, t) {
	if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldInitSpec(e, t, a) {
	_checkPrivateRedeclaration(e, t), t.set(e, a);
}
function _assertClassBrand(e, t, n) {
	if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
	throw TypeError("Private element is not present on this object");
}
function _classPrivateFieldSet2(s, a, r) {
	return s.set(_assertClassBrand(s, a), r), r;
}
function _classPrivateFieldGet2(s, a) {
	return s.get(_assertClassBrand(s, a));
}
/** @internal */
var BasePatch = class {
	constructor(selection, operations = {}) {
		_defineProperty(this, "selection", void 0), _defineProperty(this, "operations", void 0), this.selection = selection, this.operations = operations;
	}
	/**
	* Sets the given attributes to the document. Does NOT merge objects.
	* The operation is added to the current patch, ready to be commited by `commit()`
	*
	* @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
	*/
	set(attrs) {
		return this._assign("set", attrs);
	}
	/**
	* Sets the given attributes to the document if they are not currently set. Does NOT merge objects.
	* The operation is added to the current patch, ready to be commited by `commit()`
	*
	* @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
	*/
	setIfMissing(attrs) {
		return this._assign("setIfMissing", attrs);
	}
	/**
	* Performs a "diff-match-patch" operation on the string attributes provided.
	* The operation is added to the current patch, ready to be commited by `commit()`
	*
	* @param attrs - Attributes to perform operation on. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "dmp"\}
	*/
	diffMatchPatch(attrs) {
		return validateObject("diffMatchPatch", attrs), this._assign("diffMatchPatch", attrs);
	}
	/**
	* Unsets the attribute paths provided.
	* The operation is added to the current patch, ready to be commited by `commit()`
	*
	* @param attrs - Attribute paths to unset.
	*/
	unset(attrs) {
		if (!Array.isArray(attrs)) throw Error("unset(attrs) takes an array of attributes to unset, non-array given");
		return this.operations = Object.assign({}, this.operations, { unset: attrs }), this;
	}
	/**
	* Increment a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
	*
	* @param attrs - Object of attribute paths to increment, values representing the number to increment by.
	*/
	inc(attrs) {
		return this._assign("inc", attrs);
	}
	/**
	* Decrement a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
	*
	* @param attrs - Object of attribute paths to decrement, values representing the number to decrement by.
	*/
	dec(attrs) {
		return this._assign("dec", attrs);
	}
	/**
	* Provides methods for modifying arrays, by inserting, appending and replacing elements via a JSONPath expression.
	*
	* @param at - Location to insert at, relative to the given selector, or 'replace' the matched path
	* @param selector - JSONPath expression, eg `comments[-1]` or `blocks[_key=="abc123"]`
	* @param items - Array of items to insert/replace
	*/
	insert(at, selector, items) {
		return validateInsert(at, selector, items), this._assign("insert", {
			[at]: selector,
			items
		});
	}
	/**
	* Append the given items to the array at the given JSONPath
	*
	* @param selector - Attribute/path to append to, eg `comments` or `person.hobbies`
	* @param items - Array of items to append to the array
	*/
	append(selector, items) {
		return this.insert("after", `${selector}[-1]`, items);
	}
	/**
	* Prepend the given items to the array at the given JSONPath
	*
	* @param selector - Attribute/path to prepend to, eg `comments` or `person.hobbies`
	* @param items - Array of items to prepend to the array
	*/
	prepend(selector, items) {
		return this.insert("before", `${selector}[0]`, items);
	}
	/**
	* Change the contents of an array by removing existing elements and/or adding new elements.
	*
	* @param selector - Attribute or JSONPath expression for array
	* @param start - Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.x
	* @param deleteCount - An integer indicating the number of old array elements to remove.
	* @param items - The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
	*/
	splice(selector, start, deleteCount, items) {
		let delAll = deleteCount === void 0 || deleteCount === -1, startIndex = start < 0 ? start - 1 : start, delCount = delAll ? -1 : Math.max(0, start + deleteCount), rangeSelector = `${selector}[${startIndex}:${startIndex < 0 && delCount >= 0 ? "" : delCount}]`;
		return this.insert("replace", rangeSelector, items || []);
	}
	/**
	* Adds a revision clause, preventing the document from being patched if the `_rev` property does not match the given value
	*
	* @param rev - Revision to lock the patch to
	*/
	ifRevisionId(rev) {
		return this.operations.ifRevisionID = rev, this;
	}
	/**
	* Return a plain JSON representation of the patch
	*/
	serialize() {
		return {
			...getSelection(this.selection),
			...this.operations
		};
	}
	/**
	* Return a plain JSON representation of the patch
	*/
	toJSON() {
		return this.serialize();
	}
	/**
	* Clears the patch of all operations
	*/
	reset() {
		return this.operations = {}, this;
	}
	_assign(op, props, merge = !0) {
		return validateObject(op, props), this.operations = Object.assign({}, this.operations, { [op]: Object.assign({}, merge && this.operations[op] || {}, props) }), this;
	}
	_set(op, props) {
		return this._assign(op, props, !1);
	}
};
var _client$11 = /* @__PURE__ */ new WeakMap();
var ObservablePatch = class ObservablePatch extends BasePatch {
	constructor(selection, operations, client) {
		super(selection, operations), _classPrivateFieldInitSpec(this, _client$11, void 0), _classPrivateFieldSet2(_client$11, this, client);
	}
	/**
	* Clones the patch
	*/
	clone() {
		return new ObservablePatch(this.selection, { ...this.operations }, _classPrivateFieldGet2(_client$11, this));
	}
	commit(options) {
		if (!_classPrivateFieldGet2(_client$11, this)) throw Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
		let returnFirst = typeof this.selection == "string", opts = Object.assign({
			returnFirst,
			returnDocuments: !0
		}, options);
		return _classPrivateFieldGet2(_client$11, this).mutate({ patch: this.serialize() }, opts);
	}
};
var _client2$10 = /* @__PURE__ */ new WeakMap();
var Patch = class Patch extends BasePatch {
	constructor(selection, operations, client) {
		super(selection, operations), _classPrivateFieldInitSpec(this, _client2$10, void 0), _classPrivateFieldSet2(_client2$10, this, client);
	}
	/**
	* Clones the patch
	*/
	clone() {
		return new Patch(this.selection, { ...this.operations }, _classPrivateFieldGet2(_client2$10, this));
	}
	commit(options) {
		if (!_classPrivateFieldGet2(_client2$10, this)) throw Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
		let returnFirst = typeof this.selection == "string", opts = Object.assign({
			returnFirst,
			returnDocuments: !0
		}, options);
		return _classPrivateFieldGet2(_client2$10, this).mutate({ patch: this.serialize() }, opts);
	}
};
var defaultMutateOptions = { returnDocuments: !1 };
/** @internal */
var BaseTransaction = class {
	constructor(operations = [], transactionId) {
		_defineProperty(this, "operations", void 0), _defineProperty(this, "trxId", void 0), this.operations = operations, this.trxId = transactionId;
	}
	/**
	* Creates a new Sanity document. If `_id` is provided and already exists, the mutation will fail. If no `_id` is given, one will automatically be generated by the database.
	* The operation is added to the current transaction, ready to be commited by `commit()`
	*
	* @param doc - Document to create. Requires a `_type` property.
	*/
	create(doc) {
		return validateObject("create", doc), this._add({ create: doc });
	}
	/**
	* Creates a new Sanity document. If a document with the same `_id` already exists, the create operation will be ignored.
	* The operation is added to the current transaction, ready to be commited by `commit()`
	*
	* @param doc - Document to create if it does not already exist. Requires `_id` and `_type` properties.
	*/
	createIfNotExists(doc) {
		let op = "createIfNotExists";
		return validateObject(op, doc), requireDocumentId(op, doc), this._add({ [op]: doc });
	}
	/**
	* Creates a new Sanity document, or replaces an existing one if the same `_id` is already used.
	* The operation is added to the current transaction, ready to be commited by `commit()`
	*
	* @param doc - Document to create or replace. Requires `_id` and `_type` properties.
	*/
	createOrReplace(doc) {
		let op = "createOrReplace";
		return validateObject(op, doc), requireDocumentId(op, doc), this._add({ [op]: doc });
	}
	/**
	* Deletes the document with the given document ID
	* The operation is added to the current transaction, ready to be commited by `commit()`
	*
	* @param documentId - Document ID to delete
	*/
	delete(documentId) {
		return validateDocumentId("delete", documentId), this._add({ delete: { id: documentId } });
	}
	transactionId(id) {
		return id ? (this.trxId = id, this) : this.trxId;
	}
	/**
	* Return a plain JSON representation of the transaction
	*/
	serialize() {
		return [...this.operations];
	}
	/**
	* Return a plain JSON representation of the transaction
	*/
	toJSON() {
		return this.serialize();
	}
	/**
	* Clears the transaction of all operations
	*/
	reset() {
		return this.operations = [], this;
	}
	_add(mut) {
		return this.operations.push(mut), this;
	}
};
var _client$10 = /* @__PURE__ */ new WeakMap();
var Transaction = class Transaction extends BaseTransaction {
	constructor(operations, client, transactionId) {
		super(operations, transactionId), _classPrivateFieldInitSpec(this, _client$10, void 0), _classPrivateFieldSet2(_client$10, this, client);
	}
	/**
	* Clones the transaction
	*/
	clone() {
		return new Transaction([...this.operations], _classPrivateFieldGet2(_client$10, this), this.trxId);
	}
	commit(options) {
		if (!_classPrivateFieldGet2(_client$10, this)) throw Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
		return _classPrivateFieldGet2(_client$10, this).mutate(this.serialize(), Object.assign({ transactionId: this.trxId }, defaultMutateOptions, options || {}));
	}
	patch(patchOrDocumentId, patchOps) {
		let isBuilder = typeof patchOps == "function", isPatch = typeof patchOrDocumentId != "string" && patchOrDocumentId instanceof Patch, isMutationSelection = typeof patchOrDocumentId == "object" && ("query" in patchOrDocumentId || "id" in patchOrDocumentId);
		if (isPatch) return this._add({ patch: patchOrDocumentId.serialize() });
		if (isBuilder) {
			let patch = patchOps(new Patch(patchOrDocumentId, {}, _classPrivateFieldGet2(_client$10, this)));
			if (!(patch instanceof Patch)) throw Error("function passed to `patch()` must return the patch");
			return this._add({ patch: patch.serialize() });
		}
		if (isMutationSelection) {
			let patch = new Patch(patchOrDocumentId, patchOps || {}, _classPrivateFieldGet2(_client$10, this));
			return this._add({ patch: patch.serialize() });
		}
		return this._add({ patch: {
			id: patchOrDocumentId,
			...patchOps
		} });
	}
};
var _client2$9 = /* @__PURE__ */ new WeakMap();
var ObservableTransaction = class ObservableTransaction extends BaseTransaction {
	constructor(operations, client, transactionId) {
		super(operations, transactionId), _classPrivateFieldInitSpec(this, _client2$9, void 0), _classPrivateFieldSet2(_client2$9, this, client);
	}
	/**
	* Clones the transaction
	*/
	clone() {
		return new ObservableTransaction([...this.operations], _classPrivateFieldGet2(_client2$9, this), this.trxId);
	}
	commit(options) {
		if (!_classPrivateFieldGet2(_client2$9, this)) throw Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
		return _classPrivateFieldGet2(_client2$9, this).mutate(this.serialize(), Object.assign({ transactionId: this.trxId }, defaultMutateOptions, options || {}));
	}
	patch(patchOrDocumentId, patchOps) {
		let isBuilder = typeof patchOps == "function";
		if (typeof patchOrDocumentId != "string" && patchOrDocumentId instanceof ObservablePatch) return this._add({ patch: patchOrDocumentId.serialize() });
		if (isBuilder) {
			let patch = patchOps(new ObservablePatch(patchOrDocumentId, {}, _classPrivateFieldGet2(_client2$9, this)));
			if (!(patch instanceof ObservablePatch)) throw Error("function passed to `patch()` must return the patch");
			return this._add({ patch: patch.serialize() });
		}
		return this._add({ patch: {
			id: patchOrDocumentId,
			...patchOps
		} });
	}
};
/**
* Project the public request options (`timeout: 0` to disable,
* `withCredentials`, `maxRedirects`, the function/object-form `fetch`, ...)
* plus the client config into a get-it v9 fetch-shaped request. This is the
* single translation boundary between the client's public option names and
* the transport — everything below it speaks get-it v9.
*
* Reads the live client config, so reconfiguration via `client.config()` /
* `withConfig()` (token, headers, proxy, ...) applies to subsequent requests.
*
* @internal
*/
function requestOptions(config, overrides = {}) {
	let headers = {};
	config.headers && Object.assign(headers, config.headers);
	let token = overrides.token || config.token;
	token && (headers.Authorization = `Bearer ${token}`), !overrides.useGlobalApi && !config.useProjectHostname && config.projectId && (headers["X-Sanity-Project-ID"] = config.projectId);
	let request = {
		url: overrides.url,
		headers: Object.assign(headers, overrides.headers || {})
	};
	overrides.method && (request.method = overrides.method), overrides.body !== void 0 && (request.body = overrides.body), overrides.query && (request.query = expandQueryArrays(overrides.query)), overrides.signal && (request.signal = overrides.signal), (overrides.withCredentials === void 0 ? config.withCredentials : overrides.withCredentials) && (request.credentials = "include"), typeof overrides.maxRedirects == "number" && (request.redirect = overrides.maxRedirects === 0 ? "manual" : "follow");
	let timeout = overrides.timeout === void 0 ? config.timeout : overrides.timeout;
	request.timeout = timeout === void 0 ? 3e5 : timeout !== 0 && timeout, overrides.useAbortSignal === !1 && !request.signal && (request.timeout = typeof request.timeout == "number" && request.timeout > 0 && {
		total: request.timeout,
		signal: !1
	});
	let fetchOption = typeof overrides.fetch == "object" && typeof config.fetch == "object" ? {
		...config.fetch,
		...overrides.fetch
	} : overrides.fetch || config.fetch;
	return typeof fetchOption == "function" ? request.fetch = fetchOption : typeof fetchOption == "object" && fetchOption && (request.meta = {
		...request.meta,
		fetchInit: fetchOption
	}), !request.fetch && config.resolveFetch && (request.fetch = config.resolveFetch(typeof config.proxy == "string" ? config.proxy : void 0)), typeof overrides.maxRetries == "number" && (request.maxRetries = overrides.maxRetries), typeof config.lineage == "string" && config.lineage && (request.meta = {
		...request.meta,
		lineage: config.lineage
	}), request;
}
/**
* Expand array-valued query params into repeated keys.
*
* get-it v9 stringifies a plain object's values directly, so passing
* `{meta: ['palette', 'location']}` would produce `?meta=palette,location`
* — which Content Lake doesn't recognise. Repeated keys
* (`?meta=palette&meta=location`) are produced via `URLSearchParams`.
*/
function expandQueryArrays(query) {
	if (query instanceof URLSearchParams || !query || typeof query != "object" || !Object.values(query).some(Array.isArray)) return query;
	let params = new URLSearchParams();
	for (let [key, value] of Object.entries(query)) if (value != null) if (Array.isArray(value)) for (let item of value) item != null && params.append(key, `${item}`);
	else params.append(key, `${value}`);
	return params;
}
var encodeQueryString = ({ query, params = {}, options = {} }) => {
	let searchParams = new URLSearchParams(), { tag, includeMutations, returnQuery, ...opts } = options;
	tag && searchParams.append("tag", tag), searchParams.append("query", query);
	for (let [key, value] of Object.entries(params)) value !== void 0 && searchParams.append(`$${key}`, JSON.stringify(value));
	for (let [key, value] of Object.entries(opts)) value && searchParams.append(key, `${value}`);
	return returnQuery === !1 && searchParams.append("returnQuery", "false"), includeMutations === !1 && searchParams.append("includeMutations", "false"), `?${searchParams}`;
};
var excludeFalsey = (param, defValue) => param === !1 ? void 0 : param === void 0 ? defValue : param;
var getMutationQuery = (options = {}) => ({
	dryRun: options.dryRun,
	returnIds: !0,
	returnDocuments: excludeFalsey(options.returnDocuments, !0),
	visibility: options.visibility || "sync",
	autoGenerateArrayKeys: options.autoGenerateArrayKeys,
	skipCrossDatasetReferenceValidation: options.skipCrossDatasetReferenceValidation
});
var indexBy = (docs, attr) => docs.reduce((indexed, doc) => (indexed[attr(doc)] = doc, indexed), Object.create(null));
/**
* Resolve the effective stega config, cleaned params, response mapper and
* transport request options for a `fetch()` call. Shared by the observable and
* promise paths.
*
* @internal
*/
function _fetchRequest(_stega, _params, options) {
	let stega = "stega" in options ? {
		..._stega,
		...typeof options.stega == "boolean" ? { enabled: options.stega } : options.stega || {}
	} : _stega, params = stega.enabled ? stegaClean(_params) : _params, mapResponse = options.filterResponse === !1 ? (res) => res : (res) => res.result, { cache, next, ...opts } = {
		useAbortSignal: options.signal !== void 0,
		resultSourceMap: stega.enabled ? "withKeyArraySelector" : options.resultSourceMap,
		...options,
		returnQuery: options.filterResponse === !1 && options.returnQuery !== !1
	};
	return {
		stega,
		params,
		mapResponse,
		reqOpts: cache !== void 0 || next !== void 0 ? {
			...opts,
			fetch: {
				cache,
				next
			}
		} : opts
	};
}
/** @internal */
function _fetchObservable(client, httpRequest, _stega, query, _params = {}, options = {}) {
	return _observe(options.signal, (signal) => _fetch$1(client, httpRequest, _stega, query, _params, {
		...options,
		signal
	}));
}
/**
* Promise-based sibling of {@link _fetchObservable}.
*
* @internal
*/
function _fetch$1(client, httpRequest, _stega, query, _params = {}, options = {}) {
	let { stega, params, mapResponse, reqOpts } = _fetchRequest(_stega, _params, options), request = _dataRequest(client, httpRequest, "query", {
		query,
		params
	}, reqOpts);
	return stega.enabled ? Promise.all([request, Promise.resolve().then(() => stegaEncodeSourceMap_YR3NQ3iz_exports).then((n) => n.n)]).then(([res, { stegaEncodeSourceMap }]) => {
		let result = stegaEncodeSourceMap(res.result, res.resultSourceMap, stega);
		return mapResponse({
			...res,
			result
		});
	}) : request.then(mapResponse);
}
/** @internal */
function _getDocumentObservable(client, httpRequest, id, opts = {}) {
	return _observe(opts.signal, (signal) => _request(client, httpRequest, _getDocumentOptions(client, id, {
		...opts,
		signal
	})).then((body) => _mapGetDocument(body, opts.includeAllVersions)));
}
/** @internal */
function _getDocument(client, httpRequest, id, opts = {}) {
	return _request(client, httpRequest, _getDocumentOptions(client, id, opts)).then((body) => _mapGetDocument(body, opts.includeAllVersions));
}
/**
* Resolve the document id (honoring `releaseId`) and build the transport
* request options for {@link _getDocumentObservable}. Shared by the observable and
* promise paths.
*
* @internal
*/
function _getDocumentOptions(client, id, opts) {
	let docId = id;
	if (opts.releaseId) {
		let versionId = getVersionFromId(id);
		if (!versionId) {
			if (isDraftId(id)) throw Error(`The document ID (\`${id}\`) is a draft, but \`options.releaseId\` is set as \`${opts.releaseId}\``);
			docId = getVersionId(id, opts.releaseId);
		} else if (versionId !== opts.releaseId) throw Error(`The document ID (\`${id}\`) is already a version of \`${versionId}\` release, but this does not match the provided \`options.releaseId\` (\`${opts.releaseId}\`)`);
	}
	return {
		url: _getDataUrl(client, "doc", docId),
		tag: opts.tag,
		signal: opts.signal,
		query: opts.includeAllVersions === void 0 ? void 0 : { includeAllVersions: opts.includeAllVersions }
	};
}
function _mapGetDocument(body, includeAllVersions) {
	let documents = body.documents;
	return documents ? includeAllVersions ? documents : documents[0] : includeAllVersions ? [] : void 0;
}
/** @internal */
function _getDocumentsObservable(client, httpRequest, ids, opts = {}) {
	return _observe(opts.signal, (signal) => _getDocuments(client, httpRequest, ids, {
		...opts,
		signal
	}));
}
/**
* Promise-based sibling of {@link _getDocumentsObservable}.
*
* @internal
*/
function _getDocuments(client, httpRequest, ids, opts = {}) {
	return _request(client, httpRequest, _getDocumentsOptions(client, ids, opts)).then((body) => _mapGetDocuments(body, ids));
}
function _getDocumentsOptions(client, ids, opts) {
	return {
		url: _getDataUrl(client, "doc", ids.join(",")),
		tag: opts.tag,
		signal: opts.signal
	};
}
function _mapGetDocuments(body, ids) {
	let indexed = indexBy(body.documents || [], (doc) => doc._id);
	return ids.map((id) => indexed[id] || null);
}
/** @internal */
function _documentsExistsObservable(client, httpRequest, ids, opts = {}) {
	return _observe(opts.signal, (signal) => _documentsExists(client, httpRequest, ids, {
		...opts,
		signal
	}));
}
/**
* Promise-based sibling of {@link _documentsExistsObservable}. Checks document
* existence in batches, resolving to the set of IDs that exist.
*
* @internal
*/
async function _documentsExists(client, httpRequest, ids, opts = {}) {
	let existing = /* @__PURE__ */ new Set();
	if (ids.length === 0) return existing;
	for (let i = 0; i < ids.length; i += 100) {
		let batchIds = ids.slice(i, i + 100), body = await _request(client, httpRequest, {
			url: _getDataUrl(client, "doc", batchIds.map(encodeURIComponent).join(",")),
			tag: opts.tag,
			signal: opts.signal,
			query: { excludeContent: !0 }
		}), missing = /* @__PURE__ */ new Set();
		for (let omitted of body.omitted || []) omitted.reason === "existence" && missing.add(omitted.id);
		for (let id of batchIds) missing.has(id) || existing.add(id);
	}
	return existing;
}
/** @internal */
function _getReleaseDocumentsObservable(client, httpRequest, releaseId, opts = {}) {
	return _observe(opts.signal, (signal) => _getReleaseDocuments(client, httpRequest, releaseId, {
		...opts,
		signal
	}));
}
/**
* Promise-based sibling of {@link _getReleaseDocumentsObservable}.
*
* @internal
*/
function _getReleaseDocuments(client, httpRequest, releaseId, opts = {}) {
	return _dataRequest(client, httpRequest, "query", {
		query: "*[sanity::partOfRelease($releaseId)]",
		params: { releaseId }
	}, opts);
}
/** @internal */
function _createIfNotExistsObservable(client, httpRequest, doc, options) {
	return _observe(options?.signal, (signal) => _createIfNotExists(client, httpRequest, doc, {
		...options,
		signal
	}));
}
/** @internal */
function _createOrReplaceObservable(client, httpRequest, doc, options) {
	return _observe(options?.signal, (signal) => _createOrReplace(client, httpRequest, doc, {
		...options,
		signal
	}));
}
/** @internal */
function _createVersionObservable(client, httpRequest, doc, publishedId, options) {
	return _observe(options?.signal, (signal) => _createVersion(client, httpRequest, doc, publishedId, {
		...options,
		signal
	}));
}
/** @internal */
function _createVersionFromBaseObservable(client, httpRequest, publishedId, baseId, releaseId, ifBaseRevisionId, options) {
	return _observe(options?.signal, (signal) => _createVersionFromBase(client, httpRequest, publishedId, baseId, releaseId, ifBaseRevisionId, {
		...options,
		signal
	}));
}
/** @internal */
function _deleteObservable(client, httpRequest, selection, options) {
	return _observe(options?.signal, (signal) => _delete$1(client, httpRequest, selection, {
		...options,
		signal
	}));
}
/** @internal */
function _discardVersionObservable(client, httpRequest, versionId, purge = !1, options) {
	return _observe(options?.signal, (signal) => _discardVersion(client, httpRequest, versionId, purge, {
		...options,
		signal
	}));
}
/** @internal */
function _replaceVersionObservable(client, httpRequest, doc, options) {
	return _observe(options?.signal, (signal) => _replaceVersion(client, httpRequest, doc, {
		...options,
		signal
	}));
}
/** @internal */
function _unpublishVersionObservable(client, httpRequest, versionId, publishedId, options) {
	return _observe(options?.signal, (signal) => _unpublishVersion(client, httpRequest, versionId, publishedId, {
		...options,
		signal
	}));
}
/** @internal */
function _mutateObservable(client, httpRequest, mutations, options) {
	return _observe(options?.signal, (signal) => _mutate(client, httpRequest, mutations, {
		...options,
		signal
	}));
}
/**
* @internal
*/
function _actionObservable(client, httpRequest, actions, options) {
	return _observe(options?.signal, (signal) => _action(client, httpRequest, actions, {
		...options,
		signal
	}));
}
/**
* Build the transport request options for a data endpoint (`query` / `mutate`
* / `actions`). Shared by the observable and promise request paths.
*
* @internal
*/
function _dataRequestOptions(client, endpoint, body, options = {}) {
	let isMutation = endpoint === "mutate", isAction = endpoint === "actions", isQuery = endpoint === "query", strQuery = isMutation || isAction ? "" : encodeQueryString(body), useGet = !isMutation && !isAction && strQuery.length < 11264, stringQuery = useGet ? strQuery : "", returnFirst = options.returnFirst, { timeout, token, tag, headers, returnQuery, lastLiveEventId, cacheMode } = options, url = _getDataUrl(client, endpoint, stringQuery);
	return {
		reqOptions: {
			method: useGet ? "GET" : "POST",
			url,
			body: useGet ? void 0 : body,
			query: isMutation && getMutationQuery(options),
			timeout,
			headers,
			token,
			tag,
			returnQuery,
			perspective: options.perspective,
			variant: options.variant,
			resultSourceMap: options.resultSourceMap,
			lastLiveEventId: Array.isArray(lastLiveEventId) ? lastLiveEventId[0] : lastLiveEventId,
			cacheMode,
			canUseCdn: isQuery,
			signal: options.signal,
			fetch: options.fetch,
			useAbortSignal: options.useAbortSignal,
			useCdn: options.useCdn
		},
		isMutation,
		returnFirst
	};
}
/**
* Shape the raw response body of a data request. For mutations this reduces
* the API response to documents or ids; everything else passes through. Pure
* function shared by the observable and promise request paths.
*
* @internal
*/
function _mapDataResponse(res, isMutation, returnFirst, returnDocuments) {
	if (!isMutation) return res;
	let results = res.results || [];
	if (returnDocuments) return returnFirst ? results[0] && results[0].document : results.map((mut) => mut.document);
	let key = returnFirst ? "documentId" : "documentIds", ids = returnFirst ? results[0] && results[0].id : results.map((mut) => mut.id);
	return {
		transactionId: res.transactionId,
		results,
		[key]: ids
	};
}
/**
* @internal
*/
function _dataRequest(client, httpRequest, endpoint, body, options = {}) {
	let { reqOptions, isMutation, returnFirst } = _dataRequestOptions(client, endpoint, body, options);
	return _request(client, httpRequest, reqOptions).then((res) => _mapDataResponse(res, isMutation, returnFirst, options.returnDocuments));
}
/**
* @internal
*/
function _createObservable(client, httpRequest, doc, op, options = {}) {
	return _observe(options.signal, (signal) => _create$1(client, httpRequest, doc, op, {
		...options,
		signal
	}));
}
/**
* Promise-based sibling of {@link _createObservable}.
*
* @internal
*/
function _create$1(client, httpRequest, doc, op, options = {}) {
	let mutation = { [op]: doc }, opts = Object.assign({
		returnFirst: !0,
		returnDocuments: !0
	}, options);
	return _dataRequest(client, httpRequest, "mutate", { mutations: [mutation] }, opts);
}
/**
* Promise-based sibling of {@link _actionObservable}.
*
* @internal
*/
function _action(client, httpRequest, actions, options) {
	return _dataRequest(client, httpRequest, "actions", {
		actions: Array.isArray(actions) ? actions : [actions],
		transactionId: options && options.transactionId || void 0,
		skipCrossDatasetReferenceValidation: options && options.skipCrossDatasetReferenceValidation || void 0,
		dryRun: options && options.dryRun || void 0
	}, options);
}
/**
* Promise-based sibling of {@link _mutateObservable}.
*
* @internal
*/
function _mutate(client, httpRequest, mutations, options) {
	let mut;
	return mut = mutations instanceof Patch || mutations instanceof ObservablePatch ? { patch: mutations.serialize() } : mutations instanceof Transaction || mutations instanceof ObservableTransaction ? mutations.serialize() : mutations, _dataRequest(client, httpRequest, "mutate", {
		mutations: Array.isArray(mut) ? mut : [mut],
		transactionId: options && options.transactionId || void 0
	}, options);
}
/**
* Promise-based sibling of {@link _deleteObservable}.
*
* @internal
*/
function _delete$1(client, httpRequest, selection, options) {
	return _dataRequest(client, httpRequest, "mutate", { mutations: [{ delete: getSelection(selection) }] }, options);
}
/**
* Promise-based sibling of {@link _createIfNotExistsObservable}.
*
* @internal
*/
function _createIfNotExists(client, httpRequest, doc, options) {
	return requireDocumentId("createIfNotExists", doc), _create$1(client, httpRequest, doc, "createIfNotExists", options);
}
/**
* Promise-based sibling of {@link _createOrReplaceObservable}.
*
* @internal
*/
function _createOrReplace(client, httpRequest, doc, options) {
	return requireDocumentId("createOrReplace", doc), _create$1(client, httpRequest, doc, "createOrReplace", options);
}
/**
* Promise-based sibling of {@link _createVersionObservable}.
*
* @internal
*/
function _createVersion(client, httpRequest, doc, publishedId, options) {
	return requireDocumentId("createVersion", doc), requireDocumentType("createVersion", doc), printCreateVersionWithBaseIdWarning(), _action(client, httpRequest, {
		actionType: "sanity.action.document.version.create",
		publishedId,
		document: doc
	}, options);
}
/**
* Promise-based sibling of {@link _createVersionFromBaseObservable}.
*
* @internal
*/
function _createVersionFromBase(client, httpRequest, publishedId, baseId, releaseId, ifBaseRevisionId, options) {
	if (!baseId) throw Error("`createVersion()` requires `baseId` when no `document` is provided");
	if (!publishedId) throw Error("`createVersion()` requires `publishedId` when `baseId` is provided");
	return validateDocumentId("createVersion", baseId), validateDocumentId("createVersion", publishedId), _action(client, httpRequest, {
		actionType: "sanity.action.document.version.create",
		publishedId,
		baseId,
		versionId: releaseId ? getVersionId(publishedId, releaseId) : getDraftId(publishedId),
		ifBaseRevisionId
	}, options);
}
/**
* Promise-based sibling of {@link _discardVersionObservable}.
*
* @internal
*/
function _discardVersion(client, httpRequest, versionId, purge = !1, options) {
	return _action(client, httpRequest, {
		actionType: "sanity.action.document.version.discard",
		versionId,
		purge
	}, options);
}
/**
* Promise-based sibling of {@link _replaceVersionObservable}.
*
* @internal
*/
function _replaceVersion(client, httpRequest, doc, options) {
	return requireDocumentId("replaceVersion", doc), requireDocumentType("replaceVersion", doc), _action(client, httpRequest, {
		actionType: "sanity.action.document.version.replace",
		document: doc
	}, options);
}
/**
* Promise-based sibling of {@link _unpublishVersionObservable}.
*
* @internal
*/
function _unpublishVersion(client, httpRequest, versionId, publishedId, options) {
	return _action(client, httpRequest, {
		actionType: "sanity.action.document.version.unpublish",
		versionId,
		publishedId
	}, options);
}
var hasDataConfig = (client) => {
	let config = client.config();
	return config.dataset !== void 0 && config.projectId !== void 0 || config.resource !== void 0;
};
var isQuery = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "query"));
var isMutate = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "mutate"));
var isDoc = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "doc", ""));
var isListener = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "listen"));
var isHistory = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "history", ""));
var isData = (client, uri) => uri.startsWith("/data/") || isQuery(client, uri) || isMutate(client, uri) || isDoc(client, uri) || isListener(client, uri) || isHistory(client, uri);
/**
* Build the final request options (URL, headers, query params, etc.) used by
* both the regular request pipeline and the asset upload path.
*
* @internal
*/
function _prepareRequest(client, options) {
	options.uri !== void 0 && printDeprecatedUriOptionWarning();
	let uri = options.uri || options.url;
	if (typeof uri != "string") throw TypeError("Request options must include a `url`");
	let config = client.config(), canUseCdn = options.canUseCdn === void 0 ? ["GET", "HEAD"].indexOf(options.method || "GET") >= 0 && isData(client, uri) : options.canUseCdn, useCdn = (options.useCdn ?? config.useCdn) && canUseCdn, tag = options.tag && config.requestTagPrefix ? [config.requestTagPrefix, options.tag].join(".") : options.tag || config.requestTagPrefix;
	if (tag && options.tag !== null && (options.query = {
		tag: requestTag(tag),
		...options.query
	}), [
		"GET",
		"HEAD",
		"POST"
	].indexOf(options.method || "GET") >= 0 && isQuery(client, uri)) {
		let resultSourceMap = options.resultSourceMap ?? config.resultSourceMap;
		resultSourceMap !== void 0 && resultSourceMap !== !1 && (options.query = {
			resultSourceMap,
			...options.query
		});
		let perspectiveOption = options.perspective || config.perspective;
		perspectiveOption !== void 0 && (perspectiveOption === "previewDrafts" && printPreviewDraftsDeprecationWarning(), validateApiPerspective(perspectiveOption), options.query = {
			perspective: Array.isArray(perspectiveOption) ? perspectiveOption.join(",") : perspectiveOption,
			...options.query
		}, (Array.isArray(perspectiveOption) && perspectiveOption.length > 0 || perspectiveOption === "previewDrafts" || perspectiveOption === "drafts") && useCdn && (useCdn = !1, printCdnPreviewDraftsWarning()));
		let variantOption = options.variant || config.variant;
		typeof variantOption == "string" && (options.query = {
			variant: variantOption,
			...options.query
		}), typeof variantOption == "object" && (options.query = {
			variantCondition: variantConditionsToQueryArray(variantOption),
			...options.query
		}), options.lastLiveEventId && (options.query = {
			...options.query,
			lastLiveEventId: options.lastLiveEventId
		}), options.returnQuery === !1 && (options.query = {
			returnQuery: "false",
			...options.query
		}), useCdn && options.cacheMode == "noStale" && (options.query = {
			cacheMode: "noStale",
			...options.query
		});
	}
	return requestOptions(config, Object.assign({}, options, { url: _getUrl(client, uri, useCdn) }));
}
/**
* Wrap a promise-returning request in a cold, single-value Observable.
*
* Each subscription invokes `run` with a fresh `AbortSignal` that is aborted
* when the subscriber unsubscribes — so unsubscribing cancels the in-flight
* `fetch`. A caller-supplied `userSignal` is chained in too, so the request
* still aborts when the caller's own signal fires. The single resolved value
* (or rejection) is forwarded to the subscriber.
*
* This is the bridge that lets the observable client surface reuse the exact
* same promise implementations as the promise client surface, with no
* duplicated request logic.
*
* @internal
*/
function _observe(userSignal, run) {
	return new Observable((subscriber) => {
		let controller = new AbortController();
		return run(userSignal ? AbortSignal.any([userSignal, controller.signal]) : controller.signal).then((value) => {
			subscriber.next(value), subscriber.complete();
		}, (err) => subscriber.error(err)), () => controller.abort();
	});
}
/**
* Promise-based sibling of {@link _requestObservable}. Resolves directly to
* the parsed response body without ever constructing an Observable. The abort
* signal is honored by the underlying `fetch` (it is threaded onto the request
* options), so no RxJS-level teardown is required.
*
* @internal
*/
function _request(client, httpRequest, options) {
	return httpRequest(_prepareRequest(client, options), client.config().requestHandler).then((body) => body);
}
/**
* Execute an HTTP request through the regular pipeline and resolve to the
* parsed response body. Observable wrapper over {@link _request}.
*
* @internal
*/
function _requestObservable(client, httpRequest, options) {
	return _observe(options.signal, (signal) => _request(client, httpRequest, {
		...options,
		signal
	}));
}
/**
* Execute an asset upload through the underlying requester directly,
* exposing the full upload event stream (progress + response).
*
* Bypasses the body-only `HttpRequest` boundary so progress events from the
* transport layer can surface to consumers, reading the resolved requester
* straight off the initialized config.
*
* @internal
*/
function _uploadObservable(client, options) {
	let reqOptions = _prepareRequest(client, options), requester = client.config().requester, request = new Observable((subscriber) => requester(reqOptions).subscribe(subscriber)).pipe(filter((event) => event?.type === "progress" || event?.type === "response"), map((event) => event.type === "progress" ? {
		type: "progress",
		stage: event.stage,
		percent: event.percent,
		total: event.total,
		loaded: event.loaded,
		lengthComputable: event.lengthComputable
	} : {
		type: "response",
		body: event.body
	}));
	return options.signal ? request.pipe(_withAbortSignal(options.signal)) : request;
}
/**
* @internal
*/
function _getDataUrl(client, operation, path) {
	let config = client.config();
	if (config.resource) return resourceConfig(config), `${resourceDataBase(config)}/${path === void 0 ? operation : `${operation}/${path}`}`.replace(/\/($|\?)/, "$1");
	let baseUri = `/${operation}/${hasDataset(config)}`;
	return `/data${path === void 0 ? baseUri : `${baseUri}/${path}`}`.replace(/\/($|\?)/, "$1");
}
/**
* @internal
*/
function _getUrl(client, uri, canUseCdn = !1) {
	let { url, cdnUrl } = client.config();
	return `${canUseCdn ? cdnUrl : url}/${uri.replace(/^\//, "")}`;
}
/**
* @internal
*/
function _withAbortSignal(signal) {
	return (input) => new Observable((observer) => {
		let abort = () => observer.error(_createAbortError(signal));
		if (signal && signal.aborted) {
			abort();
			return;
		}
		let subscription = input.subscribe(observer);
		return signal.addEventListener("abort", abort), () => {
			signal.removeEventListener("abort", abort), subscription.unsubscribe();
		};
	});
}
/**
* `DOMException` is globally available in every supported runtime
* (Node 22.12+ and all modern browsers), so we can construct one directly.
*
* @internal
*/
function _createAbortError(signal) {
	return new DOMException(signal?.reason ?? "The operation was aborted.", "AbortError");
}
var resourceDataBase = (config) => {
	let resource = config.resource;
	if (!resource) throw Error("`resource` must be provided to perform resource queries");
	let { type, id } = resource;
	switch (type) {
		case "dataset": {
			let segments = id.split(".");
			if (segments.length !== 2) throw Error("Dataset ID must be in the format \"project.dataset\"");
			return `/projects/${segments[0]}/datasets/${segments[1]}`;
		}
		case "canvas": return `/canvases/${id}`;
		case "media-library": return `/media-libraries/${id}`;
		case "dashboard": return `/dashboards/${id}`;
		default: throw Error(`Unsupported resource type: ${type.toString()}`);
	}
};
function variantConditionsToQueryArray(variantConditions) {
	return Object.entries(variantConditions).map(([condition, value]) => `${condition}:${value}`).toSorted();
}
function _generateObservable(client, httpRequest, request) {
	return _requestObservable(client, httpRequest, {
		method: "POST",
		url: `/agent/action/generate/${hasDataset(client.config())}`,
		body: request
	});
}
function _generate(client, httpRequest, request) {
	return _request(client, httpRequest, {
		method: "POST",
		url: `/agent/action/generate/${hasDataset(client.config())}`,
		body: request
	});
}
function _patch(client, httpRequest, request) {
	return _request(client, httpRequest, {
		method: "POST",
		url: `/agent/action/patch/${hasDataset(client.config())}`,
		body: request
	});
}
function _prompt(client, httpRequest, request) {
	return _request(client, httpRequest, {
		method: "POST",
		url: `/agent/action/prompt/${hasDataset(client.config())}`,
		body: request
	});
}
function _transformObservable(client, httpRequest, request) {
	return _requestObservable(client, httpRequest, {
		method: "POST",
		url: `/agent/action/transform/${hasDataset(client.config())}`,
		body: request
	});
}
function _transform(client, httpRequest, request) {
	return _request(client, httpRequest, {
		method: "POST",
		url: `/agent/action/transform/${hasDataset(client.config())}`,
		body: request
	});
}
function _translateObservable(client, httpRequest, request) {
	return _requestObservable(client, httpRequest, {
		method: "POST",
		url: `/agent/action/translate/${hasDataset(client.config())}`,
		body: request
	});
}
function _translate(client, httpRequest, request) {
	return _request(client, httpRequest, {
		method: "POST",
		url: `/agent/action/translate/${hasDataset(client.config())}`,
		body: request
	});
}
var _client$9 = /* @__PURE__ */ new WeakMap();
var _httpRequest$8 = /* @__PURE__ */ new WeakMap();
var ObservableAgentsActionClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client$9, void 0), _classPrivateFieldInitSpec(this, _httpRequest$8, void 0), _classPrivateFieldSet2(_client$9, this, client), _classPrivateFieldSet2(_httpRequest$8, this, httpRequest);
	}
	/**
	* Run an instruction to generate content in a target document.
	* @param request - instruction request
	*/
	generate(request) {
		return _generateObservable(_classPrivateFieldGet2(_client$9, this), _classPrivateFieldGet2(_httpRequest$8, this), request);
	}
	/**
	* Transform a target document based on a source.
	* @param request - translation request
	*/
	transform(request) {
		return _transformObservable(_classPrivateFieldGet2(_client$9, this), _classPrivateFieldGet2(_httpRequest$8, this), request);
	}
	/**
	* Translate a target document based on a source.
	* @param request - translation request
	*/
	translate(request) {
		return _translateObservable(_classPrivateFieldGet2(_client$9, this), _classPrivateFieldGet2(_httpRequest$8, this), request);
	}
};
var _client2$8 = /* @__PURE__ */ new WeakMap();
var _httpRequest2$9 = /* @__PURE__ */ new WeakMap();
var AgentActionsClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client2$8, void 0), _classPrivateFieldInitSpec(this, _httpRequest2$9, void 0), _classPrivateFieldSet2(_client2$8, this, client), _classPrivateFieldSet2(_httpRequest2$9, this, httpRequest);
	}
	/**
	* Run an instruction to generate content in a target document.
	* @param request - instruction request
	*/
	generate(request) {
		return _generate(_classPrivateFieldGet2(_client2$8, this), _classPrivateFieldGet2(_httpRequest2$9, this), request);
	}
	/**
	* Transform a target document based on a source.
	* @param request - translation request
	*/
	transform(request) {
		return _transform(_classPrivateFieldGet2(_client2$8, this), _classPrivateFieldGet2(_httpRequest2$9, this), request);
	}
	/**
	* Translate a target document based on a source.
	* @param request - translation request
	*/
	translate(request) {
		return _translate(_classPrivateFieldGet2(_client2$8, this), _classPrivateFieldGet2(_httpRequest2$9, this), request);
	}
	/**
	* Run a raw instruction and return the result either as text or json
	* @param request - prompt request
	*/
	prompt(request) {
		return _prompt(_classPrivateFieldGet2(_client2$8, this), _classPrivateFieldGet2(_httpRequest2$9, this), request);
	}
	/**
	* Patch a document using a schema aware API.
	* Does not use an LLM, but uses the schema to ensure paths and values matches the schema.
	* @param request - instruction request
	*/
	patch(request) {
		return _patch(_classPrivateFieldGet2(_client2$8, this), _classPrivateFieldGet2(_httpRequest2$9, this), request);
	}
};
var _client$8 = /* @__PURE__ */ new WeakMap();
var _httpRequest2$8 = /* @__PURE__ */ new WeakMap();
var ObservableAssetsClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client$8, void 0), _classPrivateFieldInitSpec(this, _httpRequest2$8, void 0), _classPrivateFieldSet2(_client$8, this, client), _classPrivateFieldSet2(_httpRequest2$8, this, httpRequest);
	}
	upload(assetType, body, options) {
		return _upload(_classPrivateFieldGet2(_client$8, this), _classPrivateFieldGet2(_httpRequest2$8, this), assetType, body, options);
	}
};
var _client2$7 = /* @__PURE__ */ new WeakMap();
var _httpRequest3 = /* @__PURE__ */ new WeakMap();
var AssetsClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client2$7, void 0), _classPrivateFieldInitSpec(this, _httpRequest3, void 0), _classPrivateFieldSet2(_client2$7, this, client), _classPrivateFieldSet2(_httpRequest3, this, httpRequest);
	}
	upload(assetType, body, options) {
		return lastValueFrom(_upload(_classPrivateFieldGet2(_client2$7, this), _classPrivateFieldGet2(_httpRequest3, this), assetType, body, options).pipe(filter((event) => event.type === "response"), map((event) => pluckUploadedAsset(event.body))));
	}
};
/**
* Content Lake's upload endpoint responds with `{document: ...}`; the Media
* Library upload endpoint responds with `{asset: ...}` instead (a
* `sanity.asset` document, not a Content Lake asset document). Narrowing on
* the response body itself - rather than on the client's `resource` config -
* keeps this correct regardless of how the two are ever wired together.
*/
function isMediaLibraryUploadBody(body) {
	return "asset" in body;
}
function pluckUploadedAsset(body) {
	return isMediaLibraryUploadBody(body) ? body.asset : body.document;
}
function _upload(client, _httpRequest, assetType, body, opts = {}) {
	validateAssetType(assetType);
	let meta = opts.extract || void 0;
	meta && !meta.length && (meta = ["none"]);
	let config = client.config(), options = optionsFromFile(opts, body), { tag, label, title, description, creditLine, filename, source } = options, isMediaLibrary = config.resource?.type === "media-library", query = isMediaLibrary ? {
		title,
		filename
	} : {
		label,
		title,
		description,
		filename,
		meta,
		creditLine
	};
	source && !isMediaLibrary && (query.sourceId = source.id, query.sourceName = source.name, query.sourceUrl = source.url);
	let headers = options.contentType ? { "Content-Type": options.contentType } : {}, baseRequest = {
		tag,
		method: "POST",
		timeout: options.timeout || 0,
		url: buildAssetUploadUrl(config, assetType),
		headers,
		query,
		body
	};
	return typeof XMLHttpRequest < "u" ? defer(async () => {
		let { uploadWithProgress } = await Promise.resolve().then(() => browserUpload_CwpNx7Vl_exports), req = _prepareRequest(client, { ...baseRequest });
		return uploadWithProgress({
			url: appendQuery(req.url, req.query),
			method: req.method ?? "POST",
			headers: req.headers,
			body,
			withCredentials: req.credentials === "include",
			timeout: typeof req.timeout == "object" ? req.timeout.total : req.timeout,
			signal: req.signal
		});
	}).pipe(mergeAll()) : _uploadObservable(client, baseRequest);
}
function appendQuery(url, query) {
	if (!query) return url;
	let qs = (query instanceof URLSearchParams ? query : new URLSearchParams(Object.entries(query).flatMap(([key, value]) => value == null ? [] : [[key, `${value}`]]))).toString();
	return qs ? url + (url.includes("?") ? "&" : "?") + qs : url;
}
function buildAssetUploadUrl(config, assetType) {
	let assetTypeEndpoint = assetType === "image" ? "images" : "files", resource = config.resource;
	if (resource) {
		let { type, id } = resource;
		switch (type) {
			case "dataset": throw Error("Assets are not supported for dataset resources, yet. Configure the client with `{projectId: <projectId>, dataset: <datasetId>}` instead.");
			case "canvas": return `/canvases/${id}/assets/${assetTypeEndpoint}`;
			case "media-library": return `/media-libraries/${id}/upload`;
			case "dashboard": return `/dashboards/${id}/assets/${assetTypeEndpoint}`;
			default: throw Error(`Unsupported resource type: ${type.toString()}`);
		}
	}
	return `assets/${assetTypeEndpoint}/${hasDataset(config)}`;
}
function optionsFromFile(opts, file) {
	return typeof File > "u" || !(file instanceof File) ? opts : Object.assign({
		filename: opts.preserveFilename === !1 ? void 0 : file.name,
		contentType: file.type
	}, opts);
}
var defaults_default = (obj, defaults) => Object.keys(defaults).concat(Object.keys(obj)).reduce((target, prop) => (target[prop] = obj[prop] === void 0 ? defaults[prop] : obj[prop], target), {});
var pick = (obj, props) => props.reduce((selection, prop) => (obj[prop] === void 0 || (selection[prop] = obj[prop]), selection), {});
var RETRYABLE_STATUSES = /* @__PURE__ */ new Set([408, 429]);
/**
* Note: connection failure is not the same as network disconnect which may happen more frequent.
* The EventSource instance will automatically reconnect in case of a network disconnect, however,
* in some rare cases a ConnectionFailed Error will be thrown and this operator explicitly retries these
*/
function reconnectOnConnectionFailure() {
	return function(source) {
		return source.pipe(catchError((err, caught) => err instanceof ConnectionFailedError && (typeof err.status != "number" || err.status < 400 || err.status >= 500 || RETRYABLE_STATUSES.has(err.status)) ? concat(of({ type: "reconnect" }), timer(1e3).pipe(mergeMap(() => caught))) : throwError(() => err)));
	};
}
/**
* Build a `fetch` implementation suitable for the `eventsource` package's
* `fetch` option. Routes the EventSource connection through the same
* transport layer the rest of the client uses, so things like the
* test-fetch override, the per-request `proxy` config, and `HTTPS_PROXY`
* env-var support apply to SSE too.
*
* Resolution order on each request:
*
*   1. `config.resolveFetch(config.proxy)` if set — the client's fetch
*      resolver, so SSE uses the same transport as regular requests:
*      custom fetch variants (incl. the test suite's injected mock),
*      undici configuration, an explicit `proxy` config, and env-proxy
*      support all apply to SSE too. The Node entry supplies get-it's
*      undici-backed fetch (threading the resolver through the env
*      instead of importing `get-it/node` directly keeps `undici` out of
*      the browser bundle); the browser entry leaves it unset.
*   2. `globalThis.fetch`. Note that Node's global fetch does NOT read
*      proxy env vars (that is opt-in via `NODE_USE_ENV_PROXY`), which
*      is one of the reasons step 1 exists.
*
* The returned fetch always merges `options.headers` into the outgoing
* request, regardless of which underlying fetch was picked.
*
* @internal
*/
function resolveEventSourceFetch(config, options = {}) {
	let extraHeaders = options.headers, credentials = options.withCredentials ? "include" : void 0;
	return function eventSourceFetch(url, init) {
		let baseFetch = pickBaseFetch(config), mergedInit = { ...init };
		if (extraHeaders) {
			let headers = new Headers(init?.headers);
			for (let [key, value] of Object.entries(extraHeaders)) headers.set(key, value);
			mergedInit.headers = headers;
		}
		return credentials !== void 0 && (mergedInit.credentials = credentials), baseFetch(typeof url == "string" ? url : url.href, mergedInit);
	};
}
/**
* The fetch the client's own transport resolves for this config: the
* configured `resolveFetch` (honouring an explicit `proxy`) if present,
* otherwise the global fetch. Shared by the EventSource connection and the
* `/check/cors` probe so both resolve identically.
*
* @internal
*/
function pickBaseFetch(config) {
	return config.resolveFetch ? config.resolveFetch(typeof config.proxy == "string" ? config.proxy : void 0) : globalThis.fetch.bind(globalThis);
}
/** @internal */
var possibleOptions = [
	"includePreviousRevision",
	"includeResult",
	"includeMutations",
	"includeAllVersions",
	"visibility",
	"effectFormat",
	"enableResume",
	"tag"
];
var defaultOptions$1 = { includeResult: !0 };
/** @public */
function _listen$1(query, params, opts = {}) {
	let { url, requestTagPrefix } = this.config(), tag = opts.tag && requestTagPrefix ? [requestTagPrefix, opts.tag].join(".") : opts.tag, options = {
		...defaults_default(opts, defaultOptions$1),
		tag
	}, qs = encodeQueryString({
		query,
		params,
		options: {
			tag,
			...pick(options, possibleOptions)
		}
	}), uri = `${url}${_getDataUrl(this, "listen", qs)}`;
	if (uri.length > 14800) return throwError(() => /* @__PURE__ */ Error("Query too large for listener"));
	let listenFor = options.events ? options.events : ["mutation"];
	return _connectListenEventSource(this, uri, listenFor);
}
/** @internal */
function _connectListenEventSource(client, uri, listenFor) {
	let config = client.config(), { token, withCredentials, headers: configHeaders } = config, headers = {};
	token && (headers.Authorization = `Bearer ${token}`), configHeaders && Object.assign(headers, configHeaders);
	let initEventSource = () => new EventSource(uri, { fetch: resolveEventSourceFetch(config, {
		headers: Object.keys(headers).length ? headers : void 0,
		withCredentials
	}) });
	return connectEventSource(initEventSource, listenFor).pipe(reconnectOnConnectionFailure(), filter((event) => listenFor.includes(event.type)), map((event) => ({
		type: event.type,
		..."data" in event ? event.data : {}
	})));
}
/** @internal */
var possibleRequestOptions = [
	"headers",
	"signal",
	"tag",
	"timeout",
	"token"
];
function commentUrl(id) {
	if (!id) throw Error("Comment ID must be provided");
	return `/collaboration/comments/${encodeURIComponent(id)}`;
}
function resolveCommentResource(client) {
	let { resource, projectId, dataset } = client.config();
	if (resource) return resource;
	if (projectId && dataset) return {
		type: "dataset",
		id: `${projectId}.${dataset}`
	};
	throw Error("`resource` or `projectId` and `dataset` must be configured to use collaboration comments");
}
function resourceQuery(client) {
	let { collaboration } = client.config(), organizationId = collaboration?.organizationId;
	if (!organizationId) throw Error("`collaboration.organizationId` must be configured to use collaboration comments");
	let resource = resolveCommentResource(client);
	return {
		organizationId,
		resourceId: resource.id,
		resourceType: resource.type
	};
}
/** @internal */
function _getTargetDocumentRef(client, documentId) {
	if (!documentId) throw Error("Document ID must be provided");
	let resource = resolveCommentResource(client);
	return `${resource.type}:${resource.id}:${getPublishedId(documentId)}`;
}
function write(client, httpRequest, method, url, body, options = {}) {
	return _requestObservable(client, httpRequest, {
		method,
		url,
		body,
		query: {
			...resourceQuery(client),
			...options.transactionId ? { transactionId: options.transactionId } : {}
		},
		...pick(options, possibleRequestOptions)
	});
}
/**
* `commentId` picks the written comment out of the results: a status update
* cascades to the comment's replies, and the API leaves the results unordered.
* Creates pass the requested `_id`, which is undefined when the API assigns
* one, and always come back with a single result.
*/
function writeDocument(commentId, ...args) {
	return write(...args).pipe(map(({ results }) => {
		let result = commentId ? results.find(({ id }) => id === commentId) : results[0];
		if (!result?.document) throw Error("Comment write did not return a comment document");
		return result.document;
	}));
}
function writeMutationResult(...args) {
	return write(...args).pipe(map(({ transactionId, results }) => ({
		transactionId,
		documentIds: results.map((result) => result.id),
		results
	})));
}
/** @internal */
function _create(client, httpRequest, body, options) {
	return writeDocument(body._id, client, httpRequest, "POST", "/collaboration/comments", body, options);
}
/** @internal */
function _update(client, httpRequest, id, body, options) {
	return writeDocument(id, client, httpRequest, "PATCH", commentUrl(id), body, options);
}
/** @internal */
function _delete(client, httpRequest, id, options) {
	return writeMutationResult(client, httpRequest, "DELETE", commentUrl(id), void 0, options);
}
/** @internal */
function _addReaction(client, httpRequest, id, shortName, options) {
	return writeDocument(id, client, httpRequest, "POST", `${commentUrl(id)}/reactions`, { shortName }, options);
}
/** @internal */
function _removeReaction(client, httpRequest, id, shortName, options) {
	return writeDocument(id, client, httpRequest, "DELETE", `${commentUrl(id)}/reactions/${encodeURIComponent(shortName)}`, void 0, options);
}
/** @internal */
function _fetch(client, httpRequest, query, params, options) {
	let search = resourceQuery(client);
	return _requestObservable(client, httpRequest, {
		...encodeQueryString({
			query,
			params
		}).length < 11264 ? {
			method: "GET",
			url: `/collaboration/comments/query${encodeQueryString({
				query,
				params,
				options: search
			})}`
		} : {
			method: "POST",
			url: "/collaboration/comments/query",
			query: search,
			body: {
				query,
				params: params ?? {}
			}
		},
		...pick(options || {}, possibleRequestOptions)
	}).pipe(map((response) => response.result));
}
/** @internal */
function _listen(client, query, params, options) {
	let opts = options ?? {}, { requestTagPrefix } = client.config(), tag = opts.tag && requestTagPrefix ? [requestTagPrefix, opts.tag].join(".") : opts.tag, qs = encodeQueryString({
		query,
		params,
		options: {
			...pick({
				...defaults_default(opts, defaultOptions$1),
				tag
			}, possibleOptions),
			...resourceQuery(client)
		}
	}), uri = `${client.getUrl("/collaboration/comments/listen")}${qs}`;
	return uri.length > 14800 ? throwError(() => /* @__PURE__ */ Error("Query too large for listener")) : _connectListenEventSource(client, uri, opts.events ? opts.events : ["mutation"]);
}
var _client$7 = /* @__PURE__ */ new WeakMap();
var _httpRequest$7 = /* @__PURE__ */ new WeakMap();
var ObservableCollaborationCommentsClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client$7, void 0), _classPrivateFieldInitSpec(this, _httpRequest$7, void 0), _classPrivateFieldSet2(_client$7, this, client), _classPrivateFieldSet2(_httpRequest$7, this, httpRequest);
	}
	/**
	* Create a comment or reply on the configured resource.
	*
	* A top-level comment requires `target`; a reply requires `parentCommentId` (never both).
	* Replies inherit `target`, `status`, and `threadId` from the parent comment.
	*
	* @param body - Comment to create
	* @param options - Optional request options
	* @returns The created comment
	*/
	create(body, options) {
		return _create(_classPrivateFieldGet2(_client$7, this), _classPrivateFieldGet2(_httpRequest$7, this), body, options);
	}
	/**
	* Update an existing comment.
	*
	* Updating `status` cascades to the comment's replies.
	*
	* @param id - Comment document ID
	* @param body - Fields to update
	* @param options - Optional request options
	* @returns The updated comment
	*/
	update(id, body, options) {
		return _update(_classPrivateFieldGet2(_client$7, this), _classPrivateFieldGet2(_httpRequest$7, this), id, body, options);
	}
	/**
	* Delete a comment and its replies.
	*
	* @param id - Comment document ID
	* @param options - Optional request options
	* @returns Mutation result, where `documentIds` covers the comment and every deleted reply
	*/
	delete(id, options) {
		return _delete(_classPrivateFieldGet2(_client$7, this), _classPrivateFieldGet2(_httpRequest$7, this), id, options);
	}
	/**
	* Add the current user's reaction to a comment.
	*
	* @param id - Comment document ID
	* @param shortName - Emoji short name, for example `:+1:`
	* @param options - Optional request options
	* @returns The comment, with the reaction applied
	*/
	addReaction(id, shortName, options) {
		return _addReaction(_classPrivateFieldGet2(_client$7, this), _classPrivateFieldGet2(_httpRequest$7, this), id, shortName, options);
	}
	/**
	* Remove the current user's reaction from a comment.
	*
	* @param id - Comment document ID
	* @param shortName - Emoji short name, for example `:+1:`
	* @param options - Optional request options
	* @returns The comment, with the reaction removed
	*/
	removeReaction(id, shortName, options) {
		return _removeReaction(_classPrivateFieldGet2(_client$7, this), _classPrivateFieldGet2(_httpRequest$7, this), id, shortName, options);
	}
	/**
	* Build the global document reference used by `target.document._ref`, for use in
	* queries and listeners.
	*
	* The reference is built from the configured `resource` and the published ID of
	* the given document ID, since comment references always use published IDs.
	*
	* @example
	* ```ts
	* client.collaboration.comments.listen(
	*   '*[_type == "sanity.comment" && target.document._ref == $ref]',
	*   {ref: client.collaboration.comments.getTargetDocumentRef('doc-1')},
	* )
	* ```
	*
	* @param documentId - Document ID, in published, draft or version form
	* @returns Global document reference, of the form `resourceType:resourceId:documentId`
	*/
	getTargetDocumentRef(documentId) {
		return _getTargetDocumentRef(_classPrivateFieldGet2(_client$7, this), documentId);
	}
	/**
	* Fetch comments on the configured resource.
	*
	* Takes the same `query` and `params` as `client.fetch`, and switches from a
	* GET to a POST for queries too large for the request URL in the same way,
	* but queries the comments endpoint, which accepts none of the query options
	* `client.fetch` does (`perspective`, `useCdn`, `filterResponse`,
	* `resultSourceMap`, stega).
	*
	* The query runs against the organization store, which is not scoped to
	* comments, so filter on `_type == "sanity.comment"`.
	*
	* @param query - GROQ-query to perform
	* @param params - Optional query parameters
	* @param options - Optional request options
	*/
	fetch(query, params, options) {
		return _fetch(_classPrivateFieldGet2(_client$7, this), _classPrivateFieldGet2(_httpRequest$7, this), query, params, options);
	}
	listen(query, params, options) {
		return _listen(_classPrivateFieldGet2(_client$7, this), query, params, options);
	}
};
var _client2$6 = /* @__PURE__ */ new WeakMap();
var _httpRequest2$7 = /* @__PURE__ */ new WeakMap();
var CollaborationCommentsClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client2$6, void 0), _classPrivateFieldInitSpec(this, _httpRequest2$7, void 0), _classPrivateFieldSet2(_client2$6, this, client), _classPrivateFieldSet2(_httpRequest2$7, this, httpRequest);
	}
	/**
	* Create a comment or reply on the configured resource.
	*
	* A top-level comment requires `target`; a reply requires `parentCommentId` (never both).
	* Replies inherit `target`, `status`, and `threadId` from the parent comment.
	*
	* @param body - Comment to create
	* @param options - Optional request options
	* @returns The created comment
	*/
	create(body, options) {
		return lastValueFrom(_create(_classPrivateFieldGet2(_client2$6, this), _classPrivateFieldGet2(_httpRequest2$7, this), body, options));
	}
	/**
	* Update an existing comment.
	*
	* Updating `status` cascades to the comment's replies.
	*
	* @param id - Comment document ID
	* @param body - Fields to update
	* @param options - Optional request options
	* @returns The updated comment
	*/
	update(id, body, options) {
		return lastValueFrom(_update(_classPrivateFieldGet2(_client2$6, this), _classPrivateFieldGet2(_httpRequest2$7, this), id, body, options));
	}
	/**
	* Delete a comment and its replies.
	*
	* @param id - Comment document ID
	* @param options - Optional request options
	* @returns Mutation result, where `documentIds` covers the comment and every deleted reply
	*/
	delete(id, options) {
		return lastValueFrom(_delete(_classPrivateFieldGet2(_client2$6, this), _classPrivateFieldGet2(_httpRequest2$7, this), id, options));
	}
	/**
	* Add the current user's reaction to a comment.
	*
	* @param id - Comment document ID
	* @param shortName - Emoji short name, for example `:+1:`
	* @param options - Optional request options
	* @returns The comment, with the reaction applied
	*/
	addReaction(id, shortName, options) {
		return lastValueFrom(_addReaction(_classPrivateFieldGet2(_client2$6, this), _classPrivateFieldGet2(_httpRequest2$7, this), id, shortName, options));
	}
	/**
	* Remove the current user's reaction from a comment.
	*
	* @param id - Comment document ID
	* @param shortName - Emoji short name, for example `:+1:`
	* @param options - Optional request options
	* @returns The comment, with the reaction removed
	*/
	removeReaction(id, shortName, options) {
		return lastValueFrom(_removeReaction(_classPrivateFieldGet2(_client2$6, this), _classPrivateFieldGet2(_httpRequest2$7, this), id, shortName, options));
	}
	/**
	* Build the global document reference used by `target.document._ref`, for use in
	* queries and listeners.
	*
	* The reference is built from the configured `resource` and the published ID of
	* the given document ID, since comment references always use published IDs.
	*
	* @example
	* ```ts
	* const comments = await client.collaboration.comments.fetch(
	*   '*[_type == "sanity.comment" && target.document._ref == $ref]',
	*   {ref: client.collaboration.comments.getTargetDocumentRef('doc-1')},
	* )
	* ```
	*
	* @param documentId - Document ID, in published, draft or version form
	* @returns Global document reference, of the form `resourceType:resourceId:documentId`
	*/
	getTargetDocumentRef(documentId) {
		return _getTargetDocumentRef(_classPrivateFieldGet2(_client2$6, this), documentId);
	}
	/**
	* Fetch comments on the configured resource.
	*
	* Takes the same `query` and `params` as `client.fetch`, and switches from a
	* GET to a POST for queries too large for the request URL in the same way,
	* but queries the comments endpoint, which accepts none of the query options
	* `client.fetch` does (`perspective`, `useCdn`, `filterResponse`,
	* `resultSourceMap`, stega).
	*
	* The query runs against the organization store, which is not scoped to
	* comments, so filter on `_type == "sanity.comment"`.
	*
	* @param query - GROQ-query to perform
	* @param params - Optional query parameters
	* @param options - Optional request options
	*/
	fetch(query, params, options) {
		return lastValueFrom(_fetch(_classPrivateFieldGet2(_client2$6, this), _classPrivateFieldGet2(_httpRequest2$7, this), query, params, options));
	}
	listen(query, params, options) {
		return _listen(_classPrivateFieldGet2(_client2$6, this), query, params, options);
	}
};
/**
* A variant of share that takes a predicate function to determine which value to replay to new subscribers
* @param configOrPredicate - Predicate function to determine which value to replay
* @param config - Optional ShareConfig
*/
function shareReplayLatest(configOrPredicate, config) {
	return _shareReplayLatest(typeof configOrPredicate == "function" ? {
		predicate: configOrPredicate,
		...config
	} : configOrPredicate);
}
function _shareReplayLatest(config) {
	return (source) => {
		let latest, emitted = !1, { predicate, ...shareConfig } = config;
		return merge(source.pipe(tap((value) => {
			config.predicate(value) && (emitted = !0, latest = value);
		}), finalize(() => {
			emitted = !1, latest = void 0;
		}), share(shareConfig)), new Observable((subscriber) => {
			emitted && subscriber.next(latest), subscriber.complete();
		}));
	};
}
var requiredApiVersion = "2021-03-25";
var _client$6 = /* @__PURE__ */ new WeakMap();
var LiveClient = class {
	constructor(client) {
		_classPrivateFieldInitSpec(this, _client$6, void 0), _classPrivateFieldSet2(_client$6, this, client);
	}
	/**
	* Requires `apiVersion` to be `2021-03-25` or later.
	*/
	events({ includeDrafts = !1, tag: _tag, waitFor } = {}) {
		let config = _classPrivateFieldGet2(_client$6, this).config(), { projectId, apiVersion: _apiVersion, token, withCredentials, requestTagPrefix, headers: configHeaders } = config, apiVersion = _apiVersion.replace(/^v/, "");
		if (apiVersion !== "X" && apiVersion < requiredApiVersion) throw Error(`The live events API requires API version ${requiredApiVersion} or later. The current API version is ${apiVersion}. Please update your API version to use this feature.`);
		if (includeDrafts && !token && !withCredentials) throw Error("The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role.");
		let path = _getDataUrl(_classPrivateFieldGet2(_client$6, this), "live/events"), url = new URL(_classPrivateFieldGet2(_client$6, this).getUrl(path, !1)), tag = _tag && requestTagPrefix ? [requestTagPrefix, _tag].join(".") : _tag;
		tag && url.searchParams.set("tag", tag), includeDrafts && url.searchParams.set("includeDrafts", "true"), waitFor && url.searchParams.set("waitFor", waitFor);
		let eventSourceHeaders = {};
		includeDrafts && token && (eventSourceHeaders.Authorization = `Bearer ${token}`), configHeaders && Object.assign(eventSourceHeaders, configHeaders);
		let eventSourceWithCredentials = !!(includeDrafts && withCredentials), transportCache = eventsCache.get(config.resolveFetch);
		transportCache || (transportCache = /* @__PURE__ */ new Map(), eventsCache.set(config.resolveFetch, transportCache));
		let cacheKey = JSON.stringify([
			url.href,
			typeof config.proxy == "string" ? config.proxy : null,
			eventSourceHeaders,
			eventSourceWithCredentials
		]), existing = transportCache.get(cacheKey);
		if (existing) return existing;
		let initEventSource = () => new EventSource(url.href, { fetch: resolveEventSourceFetch(config, {
			headers: Object.keys(eventSourceHeaders).length ? eventSourceHeaders : void 0,
			withCredentials: eventSourceWithCredentials
		}) }), events = connectEventSource(initEventSource, [
			"message",
			"restart",
			"welcome",
			"reconnect",
			"goaway"
		]), checkCors = checkCorsObservable(new URL(_classPrivateFieldGet2(_client$6, this).getUrl("/check/cors", !1)), projectId, eventSourceWithCredentials, pickBaseFetch(config)), observable = events.pipe(reconnectOnConnectionFailure(), mergeMap((event) => event.type === "reconnect" ? checkCors.pipe(mergeMap(() => of(event))) : of(event)), catchError((err) => err instanceof CorsOriginError ? throwError(() => err) : checkCors.pipe(mergeMap(() => {
			throw err;
		}))), map((event) => {
			if (event.type === "message") {
				let { data, ...rest } = event;
				return {
					...rest,
					tags: data.tags
				};
			}
			return event;
		})).pipe(finalize(() => {
			transportCache.delete(cacheKey), transportCache.size === 0 && eventsCache.delete(config.resolveFetch);
		}), shareReplayLatest({ predicate: (event) => event.type === "welcome" }));
		return transportCache.set(cacheKey, observable), observable;
	}
};
/**
* Probes the `/check/cors` endpoint to confirm whether the current origin is
* allowed by the project's CORS configuration. EventSource failures are opaque,
* so we use this side-channel purely to tell "the server actively rejected our
* origin" apart from every other class of failure.
*
* Errors with `CorsOriginError` when either:
*
* - `requireCredentials` is `true` (the EventSource was about to send
*   credentials) and `/check/cors` reports `result.withCredentials === false`.
*   The credentialed request would fail due to a missing
*   `access-control-allow-credentials` header. The resulting error carries
*   `credentials: true` so its `addOriginUrl` deep-link pre-selects the
*   "Allow credentials" toggle in the Sanity management form.
* - `/check/cors` reports `result.allowed === false` (origin is not on the
*   project's CORS allow-list). The error carries `credentials: requireCredentials`
*   so the deep-link still pre-selects credentials when the caller needed them.
*
* Every other outcome is intentionally treated as "we don't know": the
* observable emits a single `void` value and then completes, so downstream
* `mergeMap(() => ...)` consumers can continue. No error is surfaced for any
* of these cases:
*
* - `allowed: true` (with credentials satisfied if required) or an
*   unrecognised body shape: the server did not confirm a CORS rejection.
* - Non-2xx HTTP response from `/check/cors`: same - no signal either way, and
*   a 5xx on the probe shouldn't poison the EventSource's original error.
* - `fetch` / network / JSON parse failures: indistinguishable from ordinary
*   connectivity hiccups (offline, DNS, certs, transient outages). Reporting
*   those as CORS errors is exactly the false-positive class this helper
*   exists to prevent.
* - The subscription was aborted: nothing to emit and nothing to complete.
*
* In all of those cases the caller's original underlying error from the
* EventSource is allowed to propagate unchanged.
*/
function checkCorsObservable(url, projectId, requireCredentials, fetcher) {
	return new Observable((observer) => {
		let controller = new AbortController(), { signal } = controller;
		return fetcher(url.href, {
			method: "GET",
			credentials: "omit",
			signal
		}).then((response) => {
			if (!(signal.aborted || !response.ok)) return response.text();
		}).then((text) => {
			if (signal.aborted) return;
			let parsed = text === void 0 ? void 0 : JSON.parse(text), result = isRecord$1(parsed) ? parsed.result : void 0;
			if (requireCredentials && isRecord$1(result) && result.withCredentials === !1) {
				observer.error(new CorsOriginError({
					projectId,
					credentials: !0
				}));
				return;
			}
			if (isRecord$1(result) && result.allowed === !1) {
				observer.error(new CorsOriginError({
					projectId,
					credentials: requireCredentials
				}));
				return;
			}
			observer.next(), observer.complete();
		}).catch(() => {
			signal.aborted || observer.closed || (observer.next(), observer.complete());
		}), () => controller.abort();
	});
}
/**
* Cached observables capture their transport (`initEventSource` closes over
* `config.resolveFetch` and `config.proxy`), so the cache is scoped per
* resolver — `undefined` covers the `globalThis.fetch` fallback.
*/
var eventsCache = /* @__PURE__ */ new Map();
var _client$5 = /* @__PURE__ */ new WeakMap();
var _httpRequest$6 = /* @__PURE__ */ new WeakMap();
var ObservableDatasetsClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client$5, void 0), _classPrivateFieldInitSpec(this, _httpRequest$6, void 0), _classPrivateFieldSet2(_client$5, this, client), _classPrivateFieldSet2(_httpRequest$6, this, httpRequest);
	}
	/**
	* Create a new dataset with the given name
	*
	* @param name - Name of the dataset to create
	* @param options - Options for the dataset, including optional embeddings configuration
	*/
	create(name, options) {
		return _modifyObservable(_classPrivateFieldGet2(_client$5, this), _classPrivateFieldGet2(_httpRequest$6, this), "PUT", name, options);
	}
	/**
	* Edit a dataset with the given name
	*
	* @param name - Name of the dataset to edit
	* @param options - New options for the dataset
	*/
	edit(name, options) {
		return _modifyObservable(_classPrivateFieldGet2(_client$5, this), _classPrivateFieldGet2(_httpRequest$6, this), "PATCH", name, options);
	}
	/**
	* Delete a dataset with the given name
	*
	* @param name - Name of the dataset to delete
	*/
	delete(name) {
		return _modifyObservable(_classPrivateFieldGet2(_client$5, this), _classPrivateFieldGet2(_httpRequest$6, this), "DELETE", name);
	}
	/**
	* Fetch a list of datasets for the configured project
	*/
	list() {
		resourceGuard("dataset", _classPrivateFieldGet2(_client$5, this).config());
		let config = _classPrivateFieldGet2(_client$5, this).config(), projectId = config.projectId, url = "/datasets";
		return config.useProjectHostname === !1 && (url = `/projects/${projectId}/datasets`), _requestObservable(_classPrivateFieldGet2(_client$5, this), _classPrivateFieldGet2(_httpRequest$6, this), {
			url,
			tag: null
		});
	}
	/**
	* Get embeddings settings for a dataset
	*
	* @param name - Name of the dataset
	*/
	getEmbeddingsSettings(name) {
		return resourceGuard("dataset", _classPrivateFieldGet2(_client$5, this).config()), dataset(name), _requestObservable(_classPrivateFieldGet2(_client$5, this), _classPrivateFieldGet2(_httpRequest$6, this), {
			url: _embeddingsSettingsUri(_classPrivateFieldGet2(_client$5, this), name),
			tag: null
		});
	}
	/**
	* Edit embeddings settings for a dataset
	*
	* @param name - Name of the dataset
	* @param settings - Embeddings settings to apply
	*/
	editEmbeddingsSettings(name, settings) {
		return resourceGuard("dataset", _classPrivateFieldGet2(_client$5, this).config()), dataset(name), _requestObservable(_classPrivateFieldGet2(_client$5, this), _classPrivateFieldGet2(_httpRequest$6, this), {
			method: "PUT",
			url: _embeddingsSettingsUri(_classPrivateFieldGet2(_client$5, this), name),
			body: settings,
			tag: null
		});
	}
};
var _client2$5 = /* @__PURE__ */ new WeakMap();
var _httpRequest2$6 = /* @__PURE__ */ new WeakMap();
var DatasetsClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client2$5, void 0), _classPrivateFieldInitSpec(this, _httpRequest2$6, void 0), _classPrivateFieldSet2(_client2$5, this, client), _classPrivateFieldSet2(_httpRequest2$6, this, httpRequest);
	}
	/**
	* Create a new dataset with the given name
	*
	* @param name - Name of the dataset to create
	* @param options - Options for the dataset, including optional embeddings configuration
	*/
	create(name, options) {
		return resourceGuard("dataset", _classPrivateFieldGet2(_client2$5, this).config()), _modify(_classPrivateFieldGet2(_client2$5, this), _classPrivateFieldGet2(_httpRequest2$6, this), "PUT", name, options);
	}
	/**
	* Edit a dataset with the given name
	*
	* @param name - Name of the dataset to edit
	* @param options - New options for the dataset
	*/
	edit(name, options) {
		return resourceGuard("dataset", _classPrivateFieldGet2(_client2$5, this).config()), _modify(_classPrivateFieldGet2(_client2$5, this), _classPrivateFieldGet2(_httpRequest2$6, this), "PATCH", name, options);
	}
	/**
	* Delete a dataset with the given name
	*
	* @param name - Name of the dataset to delete
	*/
	delete(name) {
		return resourceGuard("dataset", _classPrivateFieldGet2(_client2$5, this).config()), _modify(_classPrivateFieldGet2(_client2$5, this), _classPrivateFieldGet2(_httpRequest2$6, this), "DELETE", name);
	}
	/**
	* Fetch a list of datasets for the configured project
	*/
	list() {
		resourceGuard("dataset", _classPrivateFieldGet2(_client2$5, this).config());
		let config = _classPrivateFieldGet2(_client2$5, this).config(), projectId = config.projectId, url = "/datasets";
		return config.useProjectHostname === !1 && (url = `/projects/${projectId}/datasets`), _request(_classPrivateFieldGet2(_client2$5, this), _classPrivateFieldGet2(_httpRequest2$6, this), {
			url,
			tag: null
		});
	}
	/**
	* Get embeddings settings for a dataset
	*
	* @param name - Name of the dataset
	*/
	getEmbeddingsSettings(name) {
		return resourceGuard("dataset", _classPrivateFieldGet2(_client2$5, this).config()), dataset(name), _request(_classPrivateFieldGet2(_client2$5, this), _classPrivateFieldGet2(_httpRequest2$6, this), {
			url: _embeddingsSettingsUri(_classPrivateFieldGet2(_client2$5, this), name),
			tag: null
		});
	}
	/**
	* Edit embeddings settings for a dataset
	*
	* @param name - Name of the dataset
	* @param settings - Embeddings settings to apply
	*/
	editEmbeddingsSettings(name, settings) {
		return resourceGuard("dataset", _classPrivateFieldGet2(_client2$5, this).config()), dataset(name), _request(_classPrivateFieldGet2(_client2$5, this), _classPrivateFieldGet2(_httpRequest2$6, this), {
			method: "PUT",
			url: _embeddingsSettingsUri(_classPrivateFieldGet2(_client2$5, this), name),
			body: settings,
			tag: null
		});
	}
};
function _embeddingsSettingsUri(client, name) {
	let config = client.config();
	return config.useProjectHostname === !1 ? `/projects/${config.projectId}/datasets/${name}/settings/embeddings` : `/datasets/${name}/settings/embeddings`;
}
function _modifyObservable(client, httpRequest, method, name, options) {
	return resourceGuard("dataset", client.config()), dataset(name), _requestObservable(client, httpRequest, {
		method,
		url: `/datasets/${name}`,
		body: options,
		tag: null
	});
}
function _modify(client, httpRequest, method, name, options) {
	return resourceGuard("dataset", client.config()), dataset(name), _request(client, httpRequest, {
		method,
		url: `/datasets/${name}`,
		body: options,
		tag: null
	});
}
/** Function resource types in a blueprint are namespaced under this prefix. */
var scopeHeaders = (config, request) => {
	let organizationId = request?.organizationId || config.organizationId;
	if (organizationId) return {
		"X-Sanity-Scope-Type": "organization",
		"X-Sanity-Scope-Id": organizationId
	};
	let { projectId } = config;
	if (!projectId) throw Error("`functions.invoke()` requires a `projectId` to be set in the client config, or an `organizationId` for a stack deployed at organization scope");
	return {
		"X-Sanity-Scope-Type": "project",
		"X-Sanity-Scope-Id": projectId
	};
};
var resolveStackId = (config, request) => {
	let stackId = request?.stackId || config.stackId;
	if (!stackId) throw Error("`functions.invoke()` requires a `stackId`, either in the client config or on the request. Function names are only unique within a stack.");
	return stackId;
};
/**
* The invoke route is keyed by function id, but callers know functions by the
* name declared in the blueprint. Names are unique within a stack, so the stack
* both makes the name resolvable and confines the call to its own functions.
*
* @internal
*/
function _resolveFunctionId(client, httpRequest, functionName, stackId, headers, request) {
	return _requestObservable(client, httpRequest, {
		method: "GET",
		url: `/blueprints/stacks/${stackId}`,
		headers,
		signal: request?.signal
	}).pipe(map((stack) => {
		let match = (stack?.resources || []).find((resource) => resource.type?.startsWith("sanity.function.") && resource.name === functionName);
		if (!match) throw Error(`Function "${functionName}" not found in stack "${stackId}"`);
		if (!match.externalId) throw Error(`Function "${functionName}" is declared in stack "${stackId}" but is not deployed`);
		if (match.type !== "sanity.function.pubsub") throw Error(`Function invocation is not supported for ${match.type}`);
		return match.externalId;
	}));
}
/** @internal */
function _invoke(client, httpRequest, functionName, request) {
	return defer(() => {
		let config = client.config(), headers = scopeHeaders(config, request);
		return _resolveFunctionId(client, httpRequest, functionName, resolveStackId(config, request), headers, request).pipe(mergeMap((functionId) => _requestObservable(client, httpRequest, {
			method: "POST",
			url: `/functions/${functionId}/invoke`,
			headers,
			body: { event: { data: request?.event?.data ?? {} } },
			timeout: request?.timeout,
			signal: request?.signal
		})));
	});
}
var _client$4 = /* @__PURE__ */ new WeakMap();
var _httpRequest$5 = /* @__PURE__ */ new WeakMap();
var ObservableFunctionsClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client$4, void 0), _classPrivateFieldInitSpec(this, _httpRequest$5, void 0), _classPrivateFieldSet2(_client$4, this, client), _classPrivateFieldSet2(_httpRequest$5, this, httpRequest);
	}
	/**
	* Invoke a deployed function by its blueprint name.
	*
	* The name is resolved within the stack given by `stackId` on the request or
	* the client config. Passes the function's return value once it finishes.
	*
	* @param functionName - name of the function, as declared in the blueprint
	* @param request - payload and request options
	*/
	invoke(functionName, request) {
		return _invoke(_classPrivateFieldGet2(_client$4, this), _classPrivateFieldGet2(_httpRequest$5, this), functionName, request);
	}
};
var _client2$4 = /* @__PURE__ */ new WeakMap();
var _httpRequest2$5 = /* @__PURE__ */ new WeakMap();
var FunctionsClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client2$4, void 0), _classPrivateFieldInitSpec(this, _httpRequest2$5, void 0), _classPrivateFieldSet2(_client2$4, this, client), _classPrivateFieldSet2(_httpRequest2$5, this, httpRequest);
	}
	/**
	* Invoke a deployed function by its blueprint name.
	*
	* The name is resolved within the stack given by `stackId` on the request or
	* the client config, which costs one extra request per call. Rejects if the
	* stack has no function by that name, or if the name resolves to anything
	* other than a `sanity.function.pubsub` function.
	*
	* The lookup is scoped to `projectId`, or to `organizationId` when one is set
	* for a stack deployed at organization scope.
	*
	* The request stays open until the function finishes, and resolves with its
	* return value, or `undefined` if it returns nothing. Long-running functions
	* may need an explicit `timeout`.
	*
	* @param functionName - name of the function, as declared in the blueprint
	* @param request - payload and request options
	*/
	invoke(functionName, request) {
		return lastValueFrom(_invoke(_classPrivateFieldGet2(_client2$4, this), _classPrivateFieldGet2(_httpRequest2$5, this), functionName, request));
	}
};
var _client$3 = /* @__PURE__ */ new WeakMap();
var _httpRequest$4 = /* @__PURE__ */ new WeakMap();
var ObservableMediaLibraryVideoClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client$3, void 0), _classPrivateFieldInitSpec(this, _httpRequest$4, void 0), _classPrivateFieldSet2(_client$3, this, client), _classPrivateFieldSet2(_httpRequest$4, this, httpRequest);
	}
	/**
	* Get video playback information for a media library asset
	*
	* @param assetIdentifier - Asset instance identifier (GDR, video-prefixed ID, or container ID)
	* @param options - Options for transformations and expiration
	*/
	getPlaybackInfo(assetIdentifier, options = {}) {
		let config = _classPrivateFieldGet2(_client$3, this).config(), configMediaLibraryId = (config.resource || config["~experimental_resource"])?.id, { instanceId, libraryId } = parseAssetInstanceId(assetIdentifier), effectiveLibraryId = libraryId || configMediaLibraryId;
		if (!effectiveLibraryId) throw Error("Could not determine Media Library ID - you need to provide a valid Media Library ID in the client config or a Media Library GDR");
		let url = buildVideoPlaybackInfoUrl(instanceId, effectiveLibraryId), queryParams = buildQueryParams(options);
		return _requestObservable(_classPrivateFieldGet2(_client$3, this), _classPrivateFieldGet2(_httpRequest$4, this), {
			method: "GET",
			url,
			query: queryParams
		});
	}
};
var _client2$3 = /* @__PURE__ */ new WeakMap();
var _httpRequest2$4 = /* @__PURE__ */ new WeakMap();
var MediaLibraryVideoClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client2$3, void 0), _classPrivateFieldInitSpec(this, _httpRequest2$4, void 0), _classPrivateFieldSet2(_client2$3, this, client), _classPrivateFieldSet2(_httpRequest2$4, this, httpRequest);
	}
	/**
	* Get video playback information for a media library asset
	*
	* @param assetIdentifier - Asset instance identifier (GDR, video-prefixed ID, or container ID)
	* @param options - Options for transformations and expiration
	*/
	getPlaybackInfo(assetIdentifier, options = {}) {
		let config = _classPrivateFieldGet2(_client2$3, this).config(), configMediaLibraryId = (config.resource || config["~experimental_resource"])?.id, { instanceId, libraryId } = parseAssetInstanceId(assetIdentifier), effectiveLibraryId = libraryId || configMediaLibraryId;
		if (!effectiveLibraryId) throw Error("Could not determine Media Library ID - you need to provide a valid Media Library ID in the client config or a Media Library GDR");
		let url = buildVideoPlaybackInfoUrl(instanceId, effectiveLibraryId), queryParams = buildQueryParams(options);
		return _request(_classPrivateFieldGet2(_client2$3, this), _classPrivateFieldGet2(_httpRequest2$4, this), {
			method: "GET",
			url,
			query: queryParams
		});
	}
};
var ML_GDR_PATTERN = /^media-library:(ml[^:]+):([^:]+)$/;
/** @internal */
function isSanityReference(assetIdentifier) {
	return typeof assetIdentifier == "object" && "_ref" in assetIdentifier;
}
/**
* Parse the asset instance id and library id from the asset identifier
*
* @param assetIdentifier - The asset identifier - either a asset instance id or a Media Library GDR
* @returns The asset instance id and library id
*/
function parseAssetInstanceId(assetIdentifier) {
	let ref = isSanityReference(assetIdentifier) ? assetIdentifier._ref : assetIdentifier, match = ML_GDR_PATTERN.exec(ref);
	if (match) {
		let [, libraryId, instanceId] = match;
		return {
			libraryId,
			instanceId
		};
	}
	if (typeof assetIdentifier == "string" && assetIdentifier.startsWith("video-")) return { instanceId: assetIdentifier };
	throw Error(`Invalid video asset instance identifier "${ref}": must be a valid video instance id or a Global Dataset Reference (GDR) to the video asset in the Media Library`);
}
function buildVideoPlaybackInfoUrl(instanceId, libraryId) {
	return `/media-libraries/${libraryId}/video/${instanceId}/playback-info`;
}
function buildQueryParams(options) {
	let params = {};
	if (options.transformations) {
		let { thumbnail, animated, storyboard } = options.transformations;
		thumbnail && (thumbnail.width && (params.thumbnailWidth = thumbnail.width), thumbnail.height && (params.thumbnailHeight = thumbnail.height), thumbnail.time !== void 0 && (params.thumbnailTime = thumbnail.time), thumbnail.fit && (params.thumbnailFit = thumbnail.fit), thumbnail.format && (params.thumbnailFormat = thumbnail.format)), animated && (animated.width && (params.animatedWidth = animated.width), animated.height && (params.animatedHeight = animated.height), animated.start !== void 0 && (params.animatedStart = animated.start), animated.end !== void 0 && (params.animatedEnd = animated.end), animated.fps && (params.animatedFps = animated.fps), animated.format && (params.animatedFormat = animated.format)), storyboard && storyboard.format && (params.storyboardFormat = storyboard.format);
	}
	return options.expiration && (params.expiration = options.expiration), params;
}
var _client$2 = /* @__PURE__ */ new WeakMap();
var _httpRequest$3 = /* @__PURE__ */ new WeakMap();
var ObservableProjectsClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client$2, void 0), _classPrivateFieldInitSpec(this, _httpRequest$3, void 0), _classPrivateFieldSet2(_client$2, this, client), _classPrivateFieldSet2(_httpRequest$3, this, httpRequest);
	}
	/**
	* Fetch a list of projects the authenticated user has access to.
	*
	* @param options - Options for the list request
	*   - `includeMembers` - Whether to include members in the response (default: true)
	*   - `includeFeatures` - Whether to include features in the response (default: true)
	*   - `organizationId` - ID of the organization to fetch projects for
	*   - `onlyExplicitMembership` - Whether to include only projects with explicit membership (default: false)
	*/
	list(options) {
		let query = {};
		return options?.includeMembers === !1 && (query.includeMembers = "false"), options?.includeFeatures === !1 && (query.includeFeatures = "false"), options?.organizationId && (query.organizationId = options.organizationId), options?.onlyExplicitMembership && (query.onlyExplicitMembership = "true"), _requestObservable(_classPrivateFieldGet2(_client$2, this), _classPrivateFieldGet2(_httpRequest$3, this), {
			url: "/projects",
			query
		});
	}
	/**
	* Fetch a project by project ID
	*
	* @param projectId - ID of the project to fetch
	*/
	getById(projectId) {
		return _requestObservable(_classPrivateFieldGet2(_client$2, this), _classPrivateFieldGet2(_httpRequest$3, this), { url: `/projects/${projectId}` });
	}
};
var _client2$2 = /* @__PURE__ */ new WeakMap();
var _httpRequest2$3 = /* @__PURE__ */ new WeakMap();
var ProjectsClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client2$2, void 0), _classPrivateFieldInitSpec(this, _httpRequest2$3, void 0), _classPrivateFieldSet2(_client2$2, this, client), _classPrivateFieldSet2(_httpRequest2$3, this, httpRequest);
	}
	/**
	* Fetch a list of projects the authenticated user has access to.
	*
	* @param options - Options for the list request
	*   - `includeMembers` - Whether to include members in the response (default: true)
	*   - `includeFeatures` - Whether to include features in the response (default: true)
	*   - `organizationId` - ID of the organization to fetch projects for
	*   - `onlyExplicitMembership` - Whether to include only projects with explicit membership (default: false)
	*/
	list(options) {
		let query = {};
		return options?.includeMembers === !1 && (query.includeMembers = "false"), options?.includeFeatures === !1 && (query.includeFeatures = "false"), options?.organizationId && (query.organizationId = options.organizationId), options?.onlyExplicitMembership && (query.onlyExplicitMembership = "true"), _request(_classPrivateFieldGet2(_client2$2, this), _classPrivateFieldGet2(_httpRequest2$3, this), {
			url: "/projects",
			query
		});
	}
	/**
	* Fetch a project by project ID
	*
	* @param projectId - ID of the project to fetch
	*/
	getById(projectId) {
		return _request(_classPrivateFieldGet2(_client2$2, this), _classPrivateFieldGet2(_httpRequest2$3, this), { url: `/projects/${projectId}` });
	}
};
/**
* @internal
*
* ~24 years (or 7.54e+8 seconds) needed, in order to have a 1% probability of at least one collision if 10 ID's are generated every hour.
*/
var generateReleaseId = customAlphabet("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 8);
var getDocumentVersionId = (publishedId, releaseId) => releaseId ? getVersionId(publishedId, releaseId) : getDraftId(publishedId);
/** @internal */
function deriveDocumentVersionId(op, { releaseId, publishedId, document }) {
	if (publishedId && document._id) {
		let versionId = getDocumentVersionId(publishedId, releaseId);
		return validateVersionIdMatch(versionId, document), versionId;
	}
	if (document._id) {
		let isDraft = isDraftId(document._id), isVersion = isVersionId(document._id);
		if (!isDraft && !isVersion) throw Error(`\`${op}()\` requires a document with an \`_id\` that is a version or draft ID`);
		if (releaseId) {
			if (isDraft) throw Error(`\`${op}()\` was called with a document ID (\`${document._id}\`) that is a draft ID, but a release ID (\`${releaseId}\`) was also provided.`);
			let builtVersionId = getVersionFromId(document._id);
			if (builtVersionId !== releaseId) throw Error(`\`${op}()\` was called with a document ID (\`${document._id}\`) that is a version ID, but the release ID (\`${releaseId}\`) does not match the document's version ID (\`${builtVersionId}\`).`);
		}
		return document._id;
	}
	if (publishedId) return getDocumentVersionId(publishedId, releaseId);
	throw Error(`\`${op}()\` requires either a publishedId or a document with an \`_id\``);
}
var getArgs = (releaseOrOptions, maybeOptions) => {
	if (typeof releaseOrOptions == "object" && releaseOrOptions && ("releaseId" in releaseOrOptions || "metadata" in releaseOrOptions)) {
		let { releaseId = generateReleaseId(), metadata = {} } = releaseOrOptions;
		return [
			releaseId,
			metadata,
			maybeOptions
		];
	}
	return [
		generateReleaseId(),
		{},
		releaseOrOptions
	];
};
var createRelease = (releaseOrOptions, maybeOptions) => {
	let [releaseId, metadata, options] = getArgs(releaseOrOptions, maybeOptions);
	return {
		action: {
			actionType: "sanity.action.release.create",
			releaseId,
			metadata: {
				...metadata,
				releaseType: metadata.releaseType || "undecided"
			}
		},
		options
	};
};
var _client$1 = /* @__PURE__ */ new WeakMap();
var _httpRequest$2 = /* @__PURE__ */ new WeakMap();
var ObservableReleasesClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client$1, void 0), _classPrivateFieldInitSpec(this, _httpRequest$2, void 0), _classPrivateFieldSet2(_client$1, this, client), _classPrivateFieldSet2(_httpRequest$2, this, httpRequest);
	}
	/**
	* @public
	*
	* Retrieve a release by id.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to retrieve.
	* @param options - Additional query options including abort signal and query tag.
	* @returns An observable that resolves to the release document {@link ReleaseDocument}.
	*
	* @example Retrieving a release by id
	* ```ts
	* client.observable.releases.get({releaseId: 'my-release'}).pipe(
	*   tap((release) => console.log(release)),
	*   // {
	*   //   _id: '_.releases.my-release',
	*   //   name: 'my-release'
	*   //   _type: 'system.release',
	*   //   metadata: {releaseType: 'asap'},
	*   //   _createdAt: '2021-01-01T00:00:00.000Z',
	*   //   ...
	*   // }
	* ).subscribe()
	* ```
	*/
	get({ releaseId }, options) {
		return _getDocumentObservable(_classPrivateFieldGet2(_client$1, this), _classPrivateFieldGet2(_httpRequest$2, this), `_.releases.${releaseId}`, options);
	}
	create(releaseOrOptions, maybeOptions) {
		let { action, options } = createRelease(releaseOrOptions, maybeOptions), { releaseId, metadata } = action;
		return _actionObservable(_classPrivateFieldGet2(_client$1, this), _classPrivateFieldGet2(_httpRequest$2, this), action, options).pipe(map((actionResult) => ({
			...actionResult,
			releaseId,
			metadata
		})));
	}
	/**
	* @public
	*
	* Edits an existing release, updating the metadata.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to edit.
	*   - `patch` - The patch operation to apply on the release metadata {@link PatchMutationOperation}.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	edit({ releaseId, patch }, options) {
		let editAction = {
			actionType: "sanity.action.release.edit",
			releaseId,
			patch
		};
		return _actionObservable(_classPrivateFieldGet2(_client$1, this), _classPrivateFieldGet2(_httpRequest$2, this), editAction, options);
	}
	/**
	* @public
	*
	* Publishes all documents in a release at once. For larger releases the effect of the publish
	* will be visible immediately when querying but the removal of the `versions.<releasesId>.*`
	* documents and creation of the corresponding published documents with the new content may
	* take some time.
	*
	* During this period both the source and target documents are locked and cannot be
	* modified through any other means.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to publish.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	publish({ releaseId }, options) {
		let publishAction = {
			actionType: "sanity.action.release.publish",
			releaseId
		};
		return _actionObservable(_classPrivateFieldGet2(_client$1, this), _classPrivateFieldGet2(_httpRequest$2, this), publishAction, options);
	}
	/**
	* @public
	*
	* An archive action removes an active release. The documents that comprise the release
	* are deleted and therefore no longer queryable.
	*
	* While the documents remain in retention the last version can still be accessed using document history endpoint.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to archive.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	archive({ releaseId }, options) {
		let archiveAction = {
			actionType: "sanity.action.release.archive",
			releaseId
		};
		return _actionObservable(_classPrivateFieldGet2(_client$1, this), _classPrivateFieldGet2(_httpRequest$2, this), archiveAction, options);
	}
	/**
	* @public
	*
	* An unarchive action restores an archived release and all documents
	* with the content they had just prior to archiving.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to unarchive.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	unarchive({ releaseId }, options) {
		let unarchiveAction = {
			actionType: "sanity.action.release.unarchive",
			releaseId
		};
		return _actionObservable(_classPrivateFieldGet2(_client$1, this), _classPrivateFieldGet2(_httpRequest$2, this), unarchiveAction, options);
	}
	/**
	* @public
	*
	* A schedule action queues a release for publishing at the given future time.
	* The release is locked such that no documents in the release can be modified and
	* no documents that it references can be deleted as this would make the publish fail.
	* At the given time, the same logic as for the publish action is triggered.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to schedule.
	*   - `publishAt` - The serialised date and time to publish the release. If the `publishAt` is in the past, the release will be published immediately.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	schedule({ releaseId, publishAt }, options) {
		let scheduleAction = {
			actionType: "sanity.action.release.schedule",
			releaseId,
			publishAt
		};
		return _actionObservable(_classPrivateFieldGet2(_client$1, this), _classPrivateFieldGet2(_httpRequest$2, this), scheduleAction, options);
	}
	/**
	* @public
	*
	* An unschedule action stops a release from being published.
	* The documents in the release are considered unlocked and can be edited again.
	* This may fail if another release is scheduled to be published after this one and
	* has a reference to a document created by this one.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to unschedule.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	unschedule({ releaseId }, options) {
		let unscheduleAction = {
			actionType: "sanity.action.release.unschedule",
			releaseId
		};
		return _actionObservable(_classPrivateFieldGet2(_client$1, this), _classPrivateFieldGet2(_httpRequest$2, this), unscheduleAction, options);
	}
	/**
	* @public
	*
	* A delete action removes a published or archived release.
	* The backing system document will be removed from the dataset.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to delete.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	delete({ releaseId }, options) {
		let deleteAction = {
			actionType: "sanity.action.release.delete",
			releaseId
		};
		return _actionObservable(_classPrivateFieldGet2(_client$1, this), _classPrivateFieldGet2(_httpRequest$2, this), deleteAction, options);
	}
	/**
	* @public
	*
	* Fetch the documents in a release by release id.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to fetch documents for.
	* @param options - Additional mutation options {@link BaseMutationOptions}.
	* @returns An observable that resolves to the documents in the release.
	*/
	fetchDocuments({ releaseId }, options) {
		return _getReleaseDocumentsObservable(_classPrivateFieldGet2(_client$1, this), _classPrivateFieldGet2(_httpRequest$2, this), releaseId, options);
	}
};
var _client2$1 = /* @__PURE__ */ new WeakMap();
var _httpRequest2$2 = /* @__PURE__ */ new WeakMap();
var ReleasesClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client2$1, void 0), _classPrivateFieldInitSpec(this, _httpRequest2$2, void 0), _classPrivateFieldSet2(_client2$1, this, client), _classPrivateFieldSet2(_httpRequest2$2, this, httpRequest);
	}
	/**
	* @public
	*
	* Retrieve a release by id.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to retrieve.
	* @param options - Additional query options including abort signal and query tag.
	* @returns A promise that resolves to the release document {@link ReleaseDocument}.
	*
	* @example Retrieving a release by id
	* ```ts
	* const release = await client.releases.get({releaseId: 'my-release'})
	* console.log(release)
	* // {
	* //   _id: '_.releases.my-release',
	* //   name: 'my-release'
	* //   _type: 'system.release',
	* //   metadata: {releaseType: 'asap'},
	* //   _createdAt: '2021-01-01T00:00:00.000Z',
	* //   ...
	* // }
	* ```
	*/
	get({ releaseId }, options) {
		return _getDocument(_classPrivateFieldGet2(_client2$1, this), _classPrivateFieldGet2(_httpRequest2$2, this), `_.releases.${releaseId}`, options);
	}
	async create(releaseOrOptions, maybeOptions) {
		let { action, options } = createRelease(releaseOrOptions, maybeOptions), { releaseId, metadata } = action;
		return {
			...await _action(_classPrivateFieldGet2(_client2$1, this), _classPrivateFieldGet2(_httpRequest2$2, this), action, options),
			releaseId,
			metadata
		};
	}
	/**
	* @public
	*
	* Edits an existing release, updating the metadata.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to edit.
	*   - `patch` - The patch operation to apply on the release metadata {@link PatchMutationOperation}.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	edit({ releaseId, patch }, options) {
		let editAction = {
			actionType: "sanity.action.release.edit",
			releaseId,
			patch
		};
		return _action(_classPrivateFieldGet2(_client2$1, this), _classPrivateFieldGet2(_httpRequest2$2, this), editAction, options);
	}
	/**
	* @public
	*
	* Publishes all documents in a release at once. For larger releases the effect of the publish
	* will be visible immediately when querying but the removal of the `versions.<releasesId>.*`
	* documents and creation of the corresponding published documents with the new content may
	* take some time.
	*
	* During this period both the source and target documents are locked and cannot be
	* modified through any other means.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to publish.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	publish({ releaseId }, options) {
		let publishAction = {
			actionType: "sanity.action.release.publish",
			releaseId
		};
		return _action(_classPrivateFieldGet2(_client2$1, this), _classPrivateFieldGet2(_httpRequest2$2, this), publishAction, options);
	}
	/**
	* @public
	*
	* An archive action removes an active release. The documents that comprise the release
	* are deleted and therefore no longer queryable.
	*
	* While the documents remain in retention the last version can still be accessed using document history endpoint.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to archive.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	archive({ releaseId }, options) {
		let archiveAction = {
			actionType: "sanity.action.release.archive",
			releaseId
		};
		return _action(_classPrivateFieldGet2(_client2$1, this), _classPrivateFieldGet2(_httpRequest2$2, this), archiveAction, options);
	}
	/**
	* @public
	*
	* An unarchive action restores an archived release and all documents
	* with the content they had just prior to archiving.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to unarchive.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	unarchive({ releaseId }, options) {
		let unarchiveAction = {
			actionType: "sanity.action.release.unarchive",
			releaseId
		};
		return _action(_classPrivateFieldGet2(_client2$1, this), _classPrivateFieldGet2(_httpRequest2$2, this), unarchiveAction, options);
	}
	/**
	* @public
	*
	* A schedule action queues a release for publishing at the given future time.
	* The release is locked such that no documents in the release can be modified and
	* no documents that it references can be deleted as this would make the publish fail.
	* At the given time, the same logic as for the publish action is triggered.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to schedule.
	*   - `publishAt` - The serialised date and time to publish the release. If the `publishAt` is in the past, the release will be published immediately.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	schedule({ releaseId, publishAt }, options) {
		let scheduleAction = {
			actionType: "sanity.action.release.schedule",
			releaseId,
			publishAt
		};
		return _action(_classPrivateFieldGet2(_client2$1, this), _classPrivateFieldGet2(_httpRequest2$2, this), scheduleAction, options);
	}
	/**
	* @public
	*
	* An unschedule action stops a release from being published.
	* The documents in the release are considered unlocked and can be edited again.
	* This may fail if another release is scheduled to be published after this one and
	* has a reference to a document created by this one.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to unschedule.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	unschedule({ releaseId }, options) {
		let unscheduleAction = {
			actionType: "sanity.action.release.unschedule",
			releaseId
		};
		return _action(_classPrivateFieldGet2(_client2$1, this), _classPrivateFieldGet2(_httpRequest2$2, this), unscheduleAction, options);
	}
	/**
	* @public
	*
	* A delete action removes a published or archived release.
	* The backing system document will be removed from the dataset.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to delete.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	delete({ releaseId }, options) {
		let deleteAction = {
			actionType: "sanity.action.release.delete",
			releaseId
		};
		return _action(_classPrivateFieldGet2(_client2$1, this), _classPrivateFieldGet2(_httpRequest2$2, this), deleteAction, options);
	}
	/**
	* @public
	*
	* Fetch the documents in a release by release id.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to fetch documents for.
	* @param options - Additional mutation options {@link BaseMutationOptions}.
	* @returns A promise that resolves to the documents in the release.
	*/
	fetchDocuments({ releaseId }, options) {
		return _getReleaseDocuments(_classPrivateFieldGet2(_client2$1, this), _classPrivateFieldGet2(_httpRequest2$2, this), releaseId, options);
	}
};
var _client = /* @__PURE__ */ new WeakMap();
var _httpRequest$1 = /* @__PURE__ */ new WeakMap();
var ObservableUsersClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client, void 0), _classPrivateFieldInitSpec(this, _httpRequest$1, void 0), _classPrivateFieldSet2(_client, this, client), _classPrivateFieldSet2(_httpRequest$1, this, httpRequest);
	}
	/**
	* Fetch a user by user ID
	*
	* @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
	*/
	getById(id) {
		return _requestObservable(_classPrivateFieldGet2(_client, this), _classPrivateFieldGet2(_httpRequest$1, this), { url: `/users/${id}` });
	}
};
var _client2 = /* @__PURE__ */ new WeakMap();
var _httpRequest2$1 = /* @__PURE__ */ new WeakMap();
var UsersClient = class {
	constructor(client, httpRequest) {
		_classPrivateFieldInitSpec(this, _client2, void 0), _classPrivateFieldInitSpec(this, _httpRequest2$1, void 0), _classPrivateFieldSet2(_client2, this, client), _classPrivateFieldSet2(_httpRequest2$1, this, httpRequest);
	}
	/**
	* Fetch a user by user ID
	*
	* @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
	*/
	getById(id) {
		return _request(_classPrivateFieldGet2(_client2, this), _classPrivateFieldGet2(_httpRequest2$1, this), { url: `/users/${id}` });
	}
};
var _clientConfig = /* @__PURE__ */ new WeakMap();
var _httpRequest = /* @__PURE__ */ new WeakMap();
var ObservableSanityClient = class ObservableSanityClient {
	constructor(httpRequest, config = defaultConfig) {
		_defineProperty(this, "assets", void 0), _defineProperty(this, "datasets", void 0), _defineProperty(this, "live", void 0), _defineProperty(this, "mediaLibrary", void 0), _defineProperty(this, "projects", void 0), _defineProperty(this, "users", void 0), _defineProperty(this, "agent", void 0), _defineProperty(this, "collaboration", void 0), _defineProperty(this, "functions", void 0), _defineProperty(this, "releases", void 0), _classPrivateFieldInitSpec(this, _clientConfig, void 0), _classPrivateFieldInitSpec(this, _httpRequest, void 0), _defineProperty(
			this,
			/**
			* Instance properties
			*/
			"listen",
			_listen$1
		), this.config(config), _classPrivateFieldSet2(_httpRequest, this, httpRequest), this.assets = new ObservableAssetsClient(this, _classPrivateFieldGet2(_httpRequest, this)), this.datasets = new ObservableDatasetsClient(this, _classPrivateFieldGet2(_httpRequest, this)), this.live = new LiveClient(this), this.mediaLibrary = { video: new ObservableMediaLibraryVideoClient(this, _classPrivateFieldGet2(_httpRequest, this)) }, this.projects = new ObservableProjectsClient(this, _classPrivateFieldGet2(_httpRequest, this)), this.users = new ObservableUsersClient(this, _classPrivateFieldGet2(_httpRequest, this)), this.agent = { action: new ObservableAgentsActionClient(this, _classPrivateFieldGet2(_httpRequest, this)) }, this.collaboration = { comments: new ObservableCollaborationCommentsClient(this, _classPrivateFieldGet2(_httpRequest, this)) }, this.functions = new ObservableFunctionsClient(this, _classPrivateFieldGet2(_httpRequest, this)), this.releases = new ObservableReleasesClient(this, _classPrivateFieldGet2(_httpRequest, this));
	}
	/**
	* Clone the client - returns a new instance
	*/
	clone() {
		return new ObservableSanityClient(_classPrivateFieldGet2(_httpRequest, this), this.config());
	}
	config(newConfig) {
		if (newConfig === void 0) return { ..._classPrivateFieldGet2(_clientConfig, this) };
		if (_classPrivateFieldGet2(_clientConfig, this) && _classPrivateFieldGet2(_clientConfig, this).allowReconfigure === !1) throw Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
		return _classPrivateFieldSet2(_clientConfig, this, initConfig(newConfig, _classPrivateFieldGet2(_clientConfig, this) || {})), this;
	}
	/**
	* Clone the client with a new (partial) configuration.
	*
	* @param newConfig - New client configuration properties, shallowly merged with existing configuration
	*/
	withConfig(newConfig) {
		let thisConfig = this.config();
		return new ObservableSanityClient(_classPrivateFieldGet2(_httpRequest, this), {
			...thisConfig,
			...newConfig,
			stega: {
				...thisConfig.stega,
				...typeof newConfig?.stega == "boolean" ? { enabled: newConfig.stega } : newConfig?.stega || {}
			}
		});
	}
	fetch(query, params, options) {
		return _fetchObservable(this, _classPrivateFieldGet2(_httpRequest, this), _classPrivateFieldGet2(_clientConfig, this).stega, query, params, options);
	}
	getDocument(id, options) {
		if (options?.includeAllVersions === !0) return _getDocumentObservable(this, _classPrivateFieldGet2(_httpRequest, this), id, {
			...options,
			includeAllVersions: !0
		});
		let opts = {
			signal: options?.signal,
			tag: options?.tag,
			releaseId: options?.releaseId,
			...options && "includeAllVersions" in options ? { includeAllVersions: !1 } : {}
		};
		return _getDocumentObservable(this, _classPrivateFieldGet2(_httpRequest, this), id, opts);
	}
	/**
	* Fetch multiple documents in one request.
	* Should be used sparingly - performing a query is usually a better option.
	* The order/position of documents is preserved based on the original array of IDs.
	* If any of the documents are missing, they will be replaced by a `null` entry in the returned array
	*
	* @param ids - Document IDs to fetch
	* @param options - Request options
	*/
	getDocuments(ids, options) {
		return _getDocumentsObservable(this, _classPrivateFieldGet2(_httpRequest, this), ids, options);
	}
	/**
	* Convenient and bandwidth efficient method of checking wether a set of document IDs exists.
	* Returns a set of the IDs that exist.
	*
	* @param ids - Document IDs to check
	* @param options - Request options
	*/
	documentsExists(ids, options) {
		return _documentsExistsObservable(this, _classPrivateFieldGet2(_httpRequest, this), ids, options);
	}
	create(document, options) {
		return _createObservable(this, _classPrivateFieldGet2(_httpRequest, this), document, "create", options);
	}
	createIfNotExists(document, options) {
		return _createIfNotExistsObservable(this, _classPrivateFieldGet2(_httpRequest, this), document, options);
	}
	createOrReplace(document, options) {
		return _createOrReplaceObservable(this, _classPrivateFieldGet2(_httpRequest, this), document, options);
	}
	createVersion({ document, publishedId, releaseId, baseId, ifBaseRevisionId }, options) {
		if (!document) return _createVersionFromBaseObservable(this, _classPrivateFieldGet2(_httpRequest, this), publishedId, baseId, releaseId, ifBaseRevisionId, options);
		let documentVersionId = deriveDocumentVersionId("createVersion", {
			document,
			publishedId,
			releaseId
		}), documentVersion = {
			...document,
			_id: documentVersionId
		}, versionPublishedId = publishedId || getPublishedId(document._id);
		return _createVersionObservable(this, _classPrivateFieldGet2(_httpRequest, this), documentVersion, versionPublishedId, options);
	}
	delete(selection, options) {
		return _deleteObservable(this, _classPrivateFieldGet2(_httpRequest, this), selection, options);
	}
	/**
	* @public
	*
	* Deletes the draft or release version of a document.
	*
	* @remarks
	* * Discarding a version with no `releaseId` will discard the draft version of the published document.
	* * If the draft or release version does not exist, any error will throw.
	*
	* @param params - Version action parameters:
	*   - `releaseId` - The ID of the release to discard the document from.
	*   - `publishedId` - The published ID of the document to discard.
	* @param purge - if `true` the document history is also discarded.
	* @param options - Additional action options.
	* @returns an observable that resolves to the `transactionId`.
	*
	* @example Discarding a release version of a document
	* ```ts
	* client.observable.discardVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
	* // The document with the ID `versions.myRelease.myDocument` will be discarded.
	* ```
	*
	* @example Discarding a draft version of a document
	* ```ts
	* client.observable.discardVersion({publishedId: 'myDocument'})
	* // The document with the ID `drafts.myDocument` will be discarded.
	* ```
	*/
	discardVersion({ releaseId, publishedId }, purge, options) {
		let documentVersionId = getDocumentVersionId(publishedId, releaseId);
		return _discardVersionObservable(this, _classPrivateFieldGet2(_httpRequest, this), documentVersionId, purge, options);
	}
	replaceVersion({ document, publishedId, releaseId }, options) {
		let documentVersionId = deriveDocumentVersionId("replaceVersion", {
			document,
			publishedId,
			releaseId
		}), documentVersion = {
			...document,
			_id: documentVersionId
		};
		return _replaceVersionObservable(this, _classPrivateFieldGet2(_httpRequest, this), documentVersion, options);
	}
	/**
	* @public
	*
	* Used to indicate when a document within a release should be unpublished when
	* the release is run.
	*
	* @remarks
	* * If the published document does not exist, an error will be thrown.
	*
	* @param params - Version action parameters:
	*   - `releaseId` - The ID of the release to unpublish the document from.
	*   - `publishedId` - The published ID of the document to unpublish.
	* @param options - Additional action options.
	* @returns an observable that resolves to the `transactionId`.
	*
	* @example Unpublishing a release version of a published document
	* ```ts
	* client.observable.unpublishVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
	* // The document with the ID `versions.myRelease.myDocument` will be unpublished. when `myRelease` is run.
	* ```
	*/
	unpublishVersion({ releaseId, publishedId }, options) {
		let versionId = getVersionId(publishedId, releaseId);
		return _unpublishVersionObservable(this, _classPrivateFieldGet2(_httpRequest, this), versionId, publishedId, options);
	}
	mutate(operations, options) {
		return _mutateObservable(this, _classPrivateFieldGet2(_httpRequest, this), operations, options);
	}
	/**
	* Create a new buildable patch of operations to perform
	*
	* @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
	* @param operations - Optional object of patch operations to initialize the patch instance with
	* @returns Patch instance - call `.commit()` to perform the operations defined
	*/
	patch(selection, operations) {
		return new ObservablePatch(selection, operations, this);
	}
	/**
	* Create a new transaction of mutations
	*
	* @param operations - Optional array of mutation operations to initialize the transaction instance with
	*/
	transaction(operations) {
		return new ObservableTransaction(operations, this);
	}
	/**
	* Perform action operations against the configured dataset
	*
	* @param operations - Action operation(s) to execute
	* @param options - Action options
	*/
	action(operations, options) {
		return _actionObservable(this, _classPrivateFieldGet2(_httpRequest, this), operations, options);
	}
	/**
	* Perform an HTTP request against the Sanity API
	*
	* @param options - Request options
	*/
	request(options) {
		return _requestObservable(this, _classPrivateFieldGet2(_httpRequest, this), options);
	}
	/**
	* Get a Sanity API URL for the URI provided
	*
	* @param uri - URI/path to build URL for
	* @param canUseCdn - Whether or not to allow using the API CDN for this route
	*/
	getUrl(uri, canUseCdn) {
		return _getUrl(this, uri, canUseCdn);
	}
	/**
	* Get a Sanity API URL for the data operation and path provided
	*
	* @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
	* @param path - Path to append after the operation
	*/
	getDataUrl(operation, path) {
		return _getDataUrl(this, operation, path);
	}
};
var _clientConfig2 = /* @__PURE__ */ new WeakMap();
var _httpRequest2 = /* @__PURE__ */ new WeakMap();
var SanityClient = class SanityClient {
	constructor(httpRequest, config = defaultConfig) {
		_defineProperty(this, "assets", void 0), _defineProperty(this, "datasets", void 0), _defineProperty(this, "live", void 0), _defineProperty(this, "mediaLibrary", void 0), _defineProperty(this, "projects", void 0), _defineProperty(this, "users", void 0), _defineProperty(this, "agent", void 0), _defineProperty(this, "collaboration", void 0), _defineProperty(this, "functions", void 0), _defineProperty(this, "releases", void 0), _defineProperty(
			this,
			/**
			* Observable version of the Sanity client, with the same configuration as the promise-based one
			*/
			"observable",
			void 0
		), _classPrivateFieldInitSpec(this, _clientConfig2, void 0), _classPrivateFieldInitSpec(this, _httpRequest2, void 0), _defineProperty(
			this,
			/**
			* Instance properties
			*/
			"listen",
			_listen$1
		), this.config(config), _classPrivateFieldSet2(_httpRequest2, this, httpRequest), this.assets = new AssetsClient(this, _classPrivateFieldGet2(_httpRequest2, this)), this.datasets = new DatasetsClient(this, _classPrivateFieldGet2(_httpRequest2, this)), this.live = new LiveClient(this), this.mediaLibrary = { video: new MediaLibraryVideoClient(this, _classPrivateFieldGet2(_httpRequest2, this)) }, this.projects = new ProjectsClient(this, _classPrivateFieldGet2(_httpRequest2, this)), this.users = new UsersClient(this, _classPrivateFieldGet2(_httpRequest2, this)), this.agent = { action: new AgentActionsClient(this, _classPrivateFieldGet2(_httpRequest2, this)) }, this.collaboration = { comments: new CollaborationCommentsClient(this, _classPrivateFieldGet2(_httpRequest2, this)) }, this.functions = new FunctionsClient(this, _classPrivateFieldGet2(_httpRequest2, this)), this.releases = new ReleasesClient(this, _classPrivateFieldGet2(_httpRequest2, this)), this.observable = new ObservableSanityClient(httpRequest, config);
	}
	/**
	* Clone the client - returns a new instance
	*/
	clone() {
		return new SanityClient(_classPrivateFieldGet2(_httpRequest2, this), this.config());
	}
	config(newConfig) {
		if (newConfig === void 0) return { ..._classPrivateFieldGet2(_clientConfig2, this) };
		if (_classPrivateFieldGet2(_clientConfig2, this) && _classPrivateFieldGet2(_clientConfig2, this).allowReconfigure === !1) throw Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
		return this.observable && this.observable.config(newConfig), _classPrivateFieldSet2(_clientConfig2, this, initConfig(newConfig, _classPrivateFieldGet2(_clientConfig2, this) || {})), this;
	}
	/**
	* Clone the client with a new (partial) configuration.
	*
	* @param newConfig - New client configuration properties, shallowly merged with existing configuration
	*/
	withConfig(newConfig) {
		let thisConfig = this.config();
		return new SanityClient(_classPrivateFieldGet2(_httpRequest2, this), {
			...thisConfig,
			...newConfig,
			stega: {
				...thisConfig.stega,
				...typeof newConfig?.stega == "boolean" ? { enabled: newConfig.stega } : newConfig?.stega || {}
			}
		});
	}
	fetch(query, params, options) {
		return _fetch$1(this, _classPrivateFieldGet2(_httpRequest2, this), _classPrivateFieldGet2(_clientConfig2, this).stega, query, params, options);
	}
	getDocument(id, options) {
		if (options?.includeAllVersions === !0) return _getDocument(this, _classPrivateFieldGet2(_httpRequest2, this), id, {
			...options,
			includeAllVersions: !0
		});
		let opts = {
			signal: options?.signal,
			tag: options?.tag,
			releaseId: options?.releaseId,
			...options && "includeAllVersions" in options ? { includeAllVersions: !1 } : {}
		};
		return _getDocument(this, _classPrivateFieldGet2(_httpRequest2, this), id, opts);
	}
	/**
	* Fetch multiple documents in one request.
	* Should be used sparingly - performing a query is usually a better option.
	* The order/position of documents is preserved based on the original array of IDs.
	* If any of the documents are missing, they will be replaced by a `null` entry in the returned array
	*
	* @param ids - Document IDs to fetch
	* @param options - Request options
	*/
	getDocuments(ids, options) {
		return _getDocuments(this, _classPrivateFieldGet2(_httpRequest2, this), ids, options);
	}
	/**
	* Convenient and bandwidth efficient method of checking wether a set of document IDs exists.
	* Returns a set of the IDs that exist.
	*
	* @param ids - Document IDs to check
	* @param options - Request options
	*/
	documentsExists(ids, options) {
		return _documentsExists(this, _classPrivateFieldGet2(_httpRequest2, this), ids, options);
	}
	create(document, options) {
		return _create$1(this, _classPrivateFieldGet2(_httpRequest2, this), document, "create", options);
	}
	createIfNotExists(document, options) {
		return _createIfNotExists(this, _classPrivateFieldGet2(_httpRequest2, this), document, options);
	}
	createOrReplace(document, options) {
		return _createOrReplace(this, _classPrivateFieldGet2(_httpRequest2, this), document, options);
	}
	createVersion({ document, publishedId, releaseId, baseId, ifBaseRevisionId }, options) {
		if (!document) return _createVersionFromBase(this, _classPrivateFieldGet2(_httpRequest2, this), publishedId, baseId, releaseId, ifBaseRevisionId, options);
		let documentVersionId = deriveDocumentVersionId("createVersion", {
			document,
			publishedId,
			releaseId
		}), documentVersion = {
			...document,
			_id: documentVersionId
		}, versionPublishedId = publishedId || getPublishedId(document._id);
		return _createVersion(this, _classPrivateFieldGet2(_httpRequest2, this), documentVersion, versionPublishedId, options);
	}
	delete(selection, options) {
		return _delete$1(this, _classPrivateFieldGet2(_httpRequest2, this), selection, options);
	}
	/**
	* @public
	*
	* Deletes the draft or release version of a document.
	*
	* @remarks
	* * Discarding a version with no `releaseId` will discard the draft version of the published document.
	* * If the draft or release version does not exist, any error will throw.
	*
	* @param params - Version action parameters:
	*   - `releaseId` - The ID of the release to discard the document from.
	*   - `publishedId` - The published ID of the document to discard.
	* @param purge - if `true` the document history is also discarded.
	* @param options - Additional action options.
	* @returns a promise that resolves to the `transactionId`.
	*
	* @example Discarding a release version of a document
	* ```ts
	* client.discardVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
	* // The document with the ID `versions.myRelease.myDocument` will be discarded.
	* ```
	*
	* @example Discarding a draft version of a document
	* ```ts
	* client.discardVersion({publishedId: 'myDocument'})
	* // The document with the ID `drafts.myDocument` will be discarded.
	* ```
	*/
	discardVersion({ releaseId, publishedId }, purge, options) {
		let documentVersionId = getDocumentVersionId(publishedId, releaseId);
		return _discardVersion(this, _classPrivateFieldGet2(_httpRequest2, this), documentVersionId, purge, options);
	}
	replaceVersion({ document, publishedId, releaseId }, options) {
		let documentVersionId = deriveDocumentVersionId("replaceVersion", {
			document,
			publishedId,
			releaseId
		}), documentVersion = {
			...document,
			_id: documentVersionId
		};
		return _replaceVersion(this, _classPrivateFieldGet2(_httpRequest2, this), documentVersion, options);
	}
	/**
	* @public
	*
	* Used to indicate when a document within a release should be unpublished when
	* the release is run.
	*
	* @remarks
	* * If the published document does not exist, an error will be thrown.
	*
	* @param params - Version action parameters:
	*   - `releaseId` - The ID of the release to unpublish the document from.
	*   - `publishedId` - The published ID of the document to unpublish.
	* @param options - Additional action options.
	* @returns a promise that resolves to the `transactionId`.
	*
	* @example Unpublishing a release version of a published document
	* ```ts
	* await client.unpublishVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
	* // The document with the ID `versions.myRelease.myDocument` will be unpublished. when `myRelease` is run.
	* ```
	*/
	unpublishVersion({ releaseId, publishedId }, options) {
		let versionId = getVersionId(publishedId, releaseId);
		return _unpublishVersion(this, _classPrivateFieldGet2(_httpRequest2, this), versionId, publishedId, options);
	}
	mutate(operations, options) {
		return _mutate(this, _classPrivateFieldGet2(_httpRequest2, this), operations, options);
	}
	/**
	* Create a new buildable patch of operations to perform
	*
	* @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
	* @param operations - Optional object of patch operations to initialize the patch instance with
	* @returns Patch instance - call `.commit()` to perform the operations defined
	*/
	patch(documentId, operations) {
		return new Patch(documentId, operations, this);
	}
	/**
	* Create a new transaction of mutations
	*
	* @param operations - Optional array of mutation operations to initialize the transaction instance with
	*/
	transaction(operations) {
		return new Transaction(operations, this);
	}
	/**
	* Perform action operations against the configured dataset
	* Returns a promise that resolves to the transaction result
	*
	* @param operations - Action operation(s) to execute
	* @param options - Action options
	*/
	action(operations, options) {
		return _action(this, _classPrivateFieldGet2(_httpRequest2, this), operations, options);
	}
	/**
	* Perform a request against the Sanity API
	* NOTE: Only use this for Sanity API endpoints, not for your own APIs!
	*
	* @param options - Request options
	* @returns Promise resolving to the response body
	*/
	request(options) {
		return _request(this, _classPrivateFieldGet2(_httpRequest2, this), options);
	}
	/**
	* Perform an HTTP request a `/data` sub-endpoint
	* NOTE: Considered internal, thus marked as deprecated. Use `request` instead.
	*
	* @deprecated - Use `request()` or your own HTTP library instead
	* @param endpoint - Endpoint to hit (mutate, query etc)
	* @param body - Request body
	* @param options - Request options
	* @internal
	*/
	dataRequest(endpoint, body, options) {
		return _dataRequest(this, _classPrivateFieldGet2(_httpRequest2, this), endpoint, body, options);
	}
	/**
	* Get a Sanity API URL for the URI provided
	*
	* @param uri - URI/path to build URL for
	* @param canUseCdn - Whether or not to allow using the API CDN for this route
	*/
	getUrl(uri, canUseCdn) {
		return _getUrl(this, uri, canUseCdn);
	}
	/**
	* Get a Sanity API URL for the data operation and path provided
	*
	* @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
	* @param path - Path to append after the operation
	*/
	getDataUrl(operation, path) {
		return _getDataUrl(this, operation, path);
	}
};
/**
* Create the `requester` and `createClient` exports, that have environment specific middleware for node and browsers
* @internal
*/
function defineCreateClientExports(envOptions, ClassConstructor) {
	let defaultRequester = defineRequester(envOptions).observable, createClient = (config) => {
		let { observable: clientRequester, promise: clientRequesterPromise } = defineRequester(envOptions, {
			ignoreWarnings: config.ignoreWarnings,
			maxRetries: config.maxRetries,
			retryDelay: config.retryDelay
		}), performRequest = async (options) => (await clientRequesterPromise({
			redirect: "manual",
			...options
		})).body, httpRequest = (options, requestHandler) => requestHandler ? requestHandler(options, performRequest) : performRequest(options);
		return new ClassConstructor(httpRequest, {
			...config,
			requester: clientRequester,
			resolveFetch: config.resolveFetch ?? envOptions.resolveFetch
		});
	};
	return {
		requester: defaultRequester,
		createClient
	};
}
var exp = defineCreateClientExports({ middleware: [] }, SanityClient);
exp.requester;
var createClient = exp.createClient;
//#endregion
//#region node_modules/obug/dist/core.js
/**
* Coerce `value`.
*/
function coerce(value) {
	if (value instanceof Error) return value.stack || value.message;
	return value;
}
/**
* Selects a color for a debug namespace
* @return An ANSI color code for the given namespace
*/
function selectColor(colors, namespace) {
	let hash = 0;
	for (let i = 0; i < namespace.length; i++) {
		hash = (hash << 5) - hash + namespace.charCodeAt(i);
		hash |= 0;
	}
	return colors[Math.abs(hash) % colors.length];
}
/**
* Checks if the given string matches a namespace template, honoring
* asterisks as wildcards.
*/
function matchesTemplate(search, template) {
	let searchIndex = 0;
	let templateIndex = 0;
	let starIndex = -1;
	let matchIndex = 0;
	while (searchIndex < search.length) if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) if (template[templateIndex] === "*") {
		starIndex = templateIndex;
		matchIndex = searchIndex;
		templateIndex++;
	} else {
		searchIndex++;
		templateIndex++;
	}
	else if (starIndex !== -1) {
		templateIndex = starIndex + 1;
		matchIndex++;
		searchIndex = matchIndex;
	} else return false;
	while (templateIndex < template.length && template[templateIndex] === "*") templateIndex++;
	return templateIndex === template.length;
}
function humanize(value) {
	if (value >= 1e3) return `${(value / 1e3).toFixed(1)}s`;
	return `${value}ms`;
}
var globalNamespaces = "";
function createDebug$1(namespace, options) {
	let prevTime;
	let enableOverride;
	let namespacesCache;
	let enabledCache;
	const debug = (...args) => {
		if (!debug.enabled) return;
		const curr = Date.now();
		const diff = curr - (prevTime || curr);
		prevTime = curr;
		args[0] = coerce(args[0]);
		if (typeof args[0] !== "string") args.unshift("%O");
		let index = 0;
		args[0] = args[0].replace(/%([a-z%])/gi, (match, format) => {
			if (match === "%%") return "%";
			index++;
			const formatter = options.formatters[format];
			if (typeof formatter === "function") {
				const value = args[index];
				match = formatter.call(debug, value);
				args.splice(index, 1);
				index--;
			}
			return match;
		});
		options.formatArgs.call(debug, diff, args);
		debug.log(...args);
	};
	debug.extend = function(namespace, delimiter = ":") {
		return createDebug$1(this.namespace + delimiter + namespace, {
			useColors: this.useColors,
			color: this.color,
			formatArgs: this.formatArgs,
			formatters: this.formatters,
			inspectOpts: this.inspectOpts,
			log: this.log,
			humanize: this.humanize
		});
	};
	Object.assign(debug, options);
	debug.namespace = namespace;
	Object.defineProperty(debug, "enabled", {
		enumerable: true,
		configurable: false,
		get: () => {
			if (enableOverride != null) return enableOverride;
			if (namespacesCache !== globalNamespaces) {
				namespacesCache = globalNamespaces;
				enabledCache = enabled(namespace);
			}
			return enabledCache;
		},
		set: (v) => {
			enableOverride = v;
		}
	});
	return debug;
}
var names = [];
var skips = [];
function enable(namespaces) {
	globalNamespaces = namespaces;
	names = [];
	skips = [];
	const split = globalNamespaces.trim().replace(/\s+/g, ",").split(",").filter(Boolean);
	for (const ns of split) if (ns[0] === "-") skips.push(ns.slice(1));
	else names.push(ns);
}
/**
* Returns true if the given mode name is enabled, false otherwise.
*/
function enabled(name) {
	for (const skip of skips) if (matchesTemplate(name, skip)) return false;
	for (const ns of names) if (matchesTemplate(name, ns)) return true;
	return false;
}
//#endregion
//#region node_modules/unenv/dist/runtime/node/tty.mjs
var isatty = function() {
	return false;
};
//#endregion
//#region node_modules/obug/dist/node.js
var env = {};
try {
	processModule.env.DEBUG;
	env = processModule.env;
} catch (_unused) {}
var colors = processModule.stderr.getColorDepth && processModule.stderr.getColorDepth(env) > 2 ? [
	20,
	21,
	26,
	27,
	32,
	33,
	38,
	39,
	40,
	41,
	42,
	43,
	44,
	45,
	56,
	57,
	62,
	63,
	68,
	69,
	74,
	75,
	76,
	77,
	78,
	79,
	80,
	81,
	92,
	93,
	98,
	99,
	112,
	113,
	128,
	129,
	134,
	135,
	148,
	149,
	160,
	161,
	162,
	163,
	164,
	165,
	166,
	167,
	168,
	169,
	170,
	171,
	172,
	173,
	178,
	179,
	184,
	185,
	196,
	197,
	198,
	199,
	200,
	201,
	202,
	203,
	204,
	205,
	206,
	207,
	208,
	209,
	214,
	215,
	220,
	221
] : [
	6,
	2,
	3,
	4,
	5,
	1
];
var inspectOpts = Object.keys(env).filter((key) => /^debug_/i.test(key)).reduce((obj, key) => {
	const prop = key.slice(6).toLowerCase().replace(/_([a-z])/g, (_, k) => k.toUpperCase());
	let value = env[key];
	const lowerCase = typeof value === "string" && value.toLowerCase();
	if (value === "null") value = null;
	else if (lowerCase === "yes" || lowerCase === "on" || lowerCase === "true" || lowerCase === "enabled") value = true;
	else if (lowerCase === "no" || lowerCase === "off" || lowerCase === "false" || lowerCase === "disabled") value = false;
	else value = Number(value);
	obj[prop] = value;
	return obj;
}, Object.create(null));
/**
* Is stdout a TTY? Colored output is enabled when `true`.
*/
function useColors() {
	return "colors" in inspectOpts ? Boolean(inspectOpts.colors) : isatty(processModule.stderr.fd);
}
function getDate() {
	if (inspectOpts.hideDate) return "";
	return `${(/* @__PURE__ */ new Date()).toISOString()} `;
}
/**
* Adds ANSI color escape codes if enabled.
*/
function formatArgs(diff, args) {
	const { namespace: name, useColors } = this;
	if (useColors) {
		const c = this.color;
		const colorCode = `\u001B[3${c < 8 ? c : `8;5;${c}`}`;
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;
		args[0] = prefix + args[0].split("\n").join(`\n${prefix}`);
		args.push(`${colorCode}m+${this.humanize(diff)}\u001B[0m`);
	} else args[0] = `${getDate()}${name} ${args[0]}`;
}
function log$1(...args) {
	processModule.stderr.write(`${formatWithOptions(this.inspectOpts, ...args)}\n`);
}
var defaultOptions = {
	useColors: useColors(),
	formatArgs,
	formatters: {
		/**
		* Map %o to `util.inspect()`, all on a single line.
		*/
		o(v) {
			this.inspectOpts.colors = this.useColors;
			return inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
		},
		/**
		* Map %O to `util.inspect()`, allowing multiple lines if needed.
		*/
		O(v) {
			this.inspectOpts.colors = this.useColors;
			return inspect(v, this.inspectOpts);
		}
	},
	inspectOpts,
	log: log$1,
	humanize
};
function createDebug(namespace, options) {
	var _ref;
	const color = (_ref = options && options.color) !== null && _ref !== void 0 ? _ref : selectColor(colors, namespace);
	return createDebug$1(namespace, Object.assign(defaultOptions, { color }, options));
}
enable(env.DEBUG || "");
//#endregion
//#region node_modules/@sanity/client/dist/browserUpload-CwpNx7Vl.js
var browserUpload_CwpNx7Vl_exports = /* @__PURE__ */ __exportAll$1({ uploadWithProgress: () => uploadWithProgress });
var log = createDebug("sanity:client");
var nextRequestId = 1;
/**
* Run an asset upload through `XMLHttpRequest` so we can surface per-chunk
* upload progress events. get-it v9 / fetch has no equivalent hook in the
* browser, so the observable asset-upload API falls back to this path when
* `XMLHttpRequest` is available.
*
* @internal
*/
function uploadWithProgress(options) {
	return new Observable((subscriber) => {
		let xhr = new XMLHttpRequest(), requestId = nextRequestId++, { url, method, headers, body, withCredentials, timeout, signal } = options;
		log("[%d] %s %s (XHR upload with progress)", requestId, method, url), xhr.open(method, url), xhr.withCredentials = withCredentials, typeof timeout == "number" && timeout > 0 && (xhr.timeout = timeout);
		for (let [key, value] of Object.entries(headers)) xhr.setRequestHeader(key, value);
		xhr.upload.onprogress = (e) => {
			subscriber.next({
				type: "progress",
				stage: "upload",
				percent: e.lengthComputable ? Math.round(e.loaded / e.total * 100) : 0,
				total: e.total || void 0,
				loaded: e.loaded,
				lengthComputable: e.lengthComputable
			});
		}, xhr.onload = () => {
			if (log("[%d] %s %s — %d", requestId, method, url, xhr.status), xhr.status >= 400) {
				let errorHeaders = parseXhrResponseHeaders(xhr.getAllResponseHeaders()), canonical = httpResponseFromFetch({
					status: xhr.status,
					statusText: xhr.statusText,
					headers: errorHeaders,
					body: parseJsonText(xhr.responseText, errorHeaders),
					url: xhr.responseURL
				}, url, method);
				subscriber.error(xhr.status >= 500 ? new ServerError(canonical) : new ClientError(canonical));
				return;
			}
			let responseBody;
			try {
				responseBody = JSON.parse(xhr.responseText);
			} catch {
				subscriber.error(/* @__PURE__ */ Error("Failed to parse upload response as JSON"));
				return;
			}
			subscriber.next({
				type: "response",
				body: responseBody
			}), subscriber.complete();
		}, xhr.onerror = () => {
			log("[%d] %s %s — network error", requestId, method, url), subscriber.error(/* @__PURE__ */ Error("XHR upload network error"));
		}, xhr.ontimeout = () => {
			log("[%d] %s %s — timed out after %dms", requestId, method, url, timeout), subscriber.error(new DOMException(`The operation timed out after ${timeout}ms while attempting to reach ${url}`, "TimeoutError"));
		}, xhr.onabort = () => {
			subscriber.error(new DOMException("Upload aborted", "AbortError"));
		};
		let onSignalAbort = () => xhr.abort();
		if (signal) {
			if (signal.aborted) {
				subscriber.error(new DOMException("Upload aborted", "AbortError"));
				return;
			}
			signal.addEventListener("abort", onSignalAbort, { once: !0 });
		}
		return xhr.send(body), () => {
			signal?.removeEventListener("abort", onSignalAbort), xhr.abort();
		};
	});
}
/**
* Parse `XMLHttpRequest.getAllResponseHeaders()` output (CRLF-separated
* `name: value` lines) into a `Headers` instance.
*/
function parseXhrResponseHeaders(raw) {
	let headers = new Headers();
	for (let line of raw.split("\r\n")) {
		let separator = line.indexOf(":");
		if (!(separator <= 0)) try {
			headers.append(line.slice(0, separator).trim(), line.slice(separator + 1).trim());
		} catch {}
	}
	return headers;
}
//#endregion
//#region node_modules/@sanity/client/dist/stegaEncodeSourceMap-YR3NQ3iz.js
var stegaEncodeSourceMap_YR3NQ3iz_exports = /* @__PURE__ */ __exportAll$1({
	n: () => stegaEncodeSourceMap_exports,
	r: () => encodeIntoResult,
	t: () => stegaEncodeSourceMap
});
/**
* @internal
*/
function encodeIntoResult(result, csm, encoder) {
	return walkMap(result, (value, path) => {
		if (typeof value != "string") return value;
		let resolveMappingResult = resolveMapping(path, csm);
		if (!resolveMappingResult) return value;
		let { mapping, matchedPath } = resolveMappingResult;
		if (mapping.type !== "value" || mapping.source.type !== "documentValue") return value;
		let sourceDocument = csm.documents[mapping.source.document], sourcePath = csm.paths[mapping.source.path], matchPathSegments = parseJsonPath(matchedPath);
		return encoder({
			sourcePath: parseJsonPath(sourcePath).concat(path.slice(matchPathSegments.length)),
			sourceDocument,
			resultPath: path,
			value
		});
	});
}
var filterDefault = ({ sourcePath, resultPath, value }) => {
	if (isValidDate(value) || isValidURL(value)) return !1;
	let endPath = sourcePath.at(-1);
	return !(sourcePath.at(-2) === "slug" && endPath === "current" || typeof endPath == "string" && (endPath.startsWith("_") || endPath.endsWith("Id")) || sourcePath.some((path) => path === "meta" || path === "metadata" || path === "openGraph" || path === "seo") || hasTypeLike(sourcePath) || hasTypeLike(resultPath) || typeof endPath == "string" && denylist.has(endPath));
};
var denylist = /* @__PURE__ */ new Set(/* @__PURE__ */ "color.colour.currency.email.format.gid.hex.href.hsl.hsla.icon.id.index.key.language.layout.link.linkAction.locale.lqip.page.path.ref.rgb.rgba.route.secret.slug.status.tag.template.theme.type.textTheme.unit.url.username.variant.website".split("."));
function isValidDate(dateString) {
	return /^\d{4}-\d{2}-\d{2}/.test(dateString) ? !!Date.parse(dateString) : !1;
}
var allowedProtocols = /* @__PURE__ */ new Set([
	"app:",
	"data:",
	"discord:",
	"file:",
	"ftp:",
	"ftps:",
	"geo:",
	"http:",
	"https:",
	"imap:",
	"javascript:",
	"magnet:",
	"mailto:",
	"maps:",
	"ms-excel:",
	"ms-powerpoint:",
	"ms-word:",
	"slack:",
	"sms:",
	"spotify:",
	"steam:",
	"teams:",
	"tel:",
	"vscode:",
	"zoom:"
]);
function isValidURL(url) {
	try {
		let { protocol } = new URL(url, url.startsWith("/") ? "https://acme.com" : void 0);
		return allowedProtocols.has(protocol) || protocol.startsWith("web+");
	} catch {
		return !1;
	}
}
function hasTypeLike(path) {
	return path.some((segment) => typeof segment == "string" && segment.match(/type/i) !== null);
}
var stegaEncodeSourceMap_exports = /* @__PURE__ */ __exportAll({
	encodeIntoResult: () => encodeIntoResult,
	stegaEncodeSourceMap: () => stegaEncodeSourceMap
});
/**
* Uses `@vercel/stega` to embed edit info JSON into strings in your query result.
* The JSON payloads are added using invisible characters so they don't show up visually.
* The edit info is generated from the Content Source Map (CSM) that is returned from Sanity for the query.
* @public
*/
function stegaEncodeSourceMap(result, resultSourceMap, config) {
	let { filter, logger, enabled } = config;
	if (!enabled) {
		let msg = "config.enabled must be true, don't call this function otherwise";
		throw logger?.error?.(`[@sanity/client]: ${msg}`, {
			result,
			resultSourceMap,
			config
		}), TypeError(msg);
	}
	if (!resultSourceMap) return logger?.error?.("[@sanity/client]: Missing Content Source Map from response body", {
		result,
		resultSourceMap,
		config
	}), result;
	if (!config.studioUrl) {
		let msg = "config.studioUrl must be defined";
		throw logger?.error?.(`[@sanity/client]: ${msg}`, {
			result,
			resultSourceMap,
			config
		}), TypeError(msg);
	}
	let report = {
		encoded: [],
		skipped: []
	}, resultWithStega = encodeIntoResult(result, resultSourceMap, ({ sourcePath, sourceDocument, resultPath, value }) => {
		if ((typeof filter == "function" ? filter({
			sourcePath,
			resultPath,
			filterDefault,
			sourceDocument,
			value
		}) : filterDefault({
			sourcePath,
			resultPath,
			filterDefault,
			sourceDocument,
			value
		})) === !1) return logger && report.skipped.push({
			path: prettyPathForLogging(sourcePath),
			value: `${value.slice(0, 20)}${value.length > 20 ? "..." : ""}`,
			length: value.length
		}), value;
		logger && report.encoded.push({
			path: prettyPathForLogging(sourcePath),
			value: `${value.slice(0, 20)}${value.length > 20 ? "..." : ""}`,
			length: value.length
		});
		let { baseUrl, workspace, tool } = resolveStudioBaseRoute(typeof config.studioUrl == "function" ? config.studioUrl(sourceDocument) : config.studioUrl);
		if (!baseUrl) return value;
		let { _id: id, _type: type, _projectId: projectId, _dataset: dataset } = sourceDocument;
		return y(value, {
			origin: "sanity.io",
			href: createEditUrl({
				baseUrl,
				workspace,
				tool,
				id,
				type,
				path: sourcePath,
				...!config.omitCrossDatasetReferenceData && {
					dataset,
					projectId
				}
			})
		}, !1);
	});
	if (logger) {
		let isSkipping = report.skipped.length, isEncoding = report.encoded.length;
		if ((isSkipping || isEncoding) && ((logger?.groupCollapsed || logger.log)?.("[@sanity/client]: Encoding source map into result"), logger.log?.(`[@sanity/client]: Paths encoded: ${report.encoded.length}, skipped: ${report.skipped.length}`)), report.encoded.length > 0 && (logger?.log?.("[@sanity/client]: Table of encoded paths"), (logger?.table || logger.log)?.(report.encoded)), report.skipped.length > 0) {
			let skipped = /* @__PURE__ */ new Set();
			for (let { path } of report.skipped) skipped.add(path.replace(reKeySegment, "0").replace(/\[\d+\]/g, "[]"));
			logger?.log?.("[@sanity/client]: List of skipped paths", [...skipped.values()]);
		}
		(isSkipping || isEncoding) && logger?.groupEnd?.();
	}
	return resultWithStega;
}
function prettyPathForLogging(path) {
	return toString(jsonPathToStudioPath(path));
}
//#endregion
export { createClient as t };
