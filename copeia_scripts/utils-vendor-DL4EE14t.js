import {
    R as at,
    g as Lr
} from "./react-vendor-Bqc3y1uR.js";
import {
    j as It
} from "./three-vendor-BWlPw9Wh.js";
const Pn = e => {
        let t;
        const n = new Set,
            r = (a, u) => {
                const f = typeof a == "function" ? a(t) : a;
                if (!Object.is(f, t)) {
                    const h = t;
                    t = u ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), n.forEach(p => p(t, h))
                }
            },
            i = () => t,
            s = {
                setState: r,
                getState: i,
                getInitialState: () => c,
                subscribe: a => (n.add(a), () => n.delete(a))
            },
            c = t = e(r, i, s);
        return s
    },
    $i = (e => e ? Pn(e) : Pn),
    Wi = e => e;

function Ji(e, t = Wi) {
    const n = at.useSyncExternalStore(e.subscribe, at.useCallback(() => t(e.getState()), [e, t]), at.useCallback(() => t(e.getInitialState()), [e, t]));
    return at.useDebugValue(n), n
}
const _n = e => {
        const t = $i(e),
            n = r => Ji(t, r);
        return Object.assign(n, t), n
    },
    $c = (e => e ? _n(e) : _n);

function Nr(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: Xi
} = Object.prototype, {
    getPrototypeOf: ln
} = Object, {
    iterator: wt,
    toStringTag: Dr
} = Symbol, kt = (e => t => {
    const n = Xi.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
})(Object.create(null)), ge = e => (e = e.toLowerCase(), t => kt(t) === e), St = e => t => typeof t === e, {
    isArray: Me
} = Array, ve = St("undefined");

function et(e) {
    return e !== null && !ve(e) && e.constructor !== null && !ve(e.constructor) && oe(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Fr = ge("ArrayBuffer");

function Ki(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Fr(e.buffer), t
}
const Yi = St("string"),
    oe = St("function"),
    zr = St("number"),
    tt = e => e !== null && typeof e == "object",
    Qi = e => e === !0 || e === !1,
    ht = e => {
        if (kt(e) !== "object") return !1;
        const t = ln(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Dr in e) && !(wt in e)
    },
    Gi = e => {
        if (!tt(e) || et(e)) return !1;
        try {
            return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype
        } catch {
            return !1
        }
    },
    Zi = ge("Date"),
    eo = ge("File"),
    to = ge("Blob"),
    no = ge("FileList"),
    ro = e => tt(e) && oe(e.pipe),
    io = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || oe(e.append) && ((t = kt(e)) === "formdata" || t === "object" && oe(e.toString) && e.toString() === "[object FormData]"))
    },
    oo = ge("URLSearchParams"),
    [lo, so, ao, uo] = ["ReadableStream", "Request", "Response", "Headers"].map(ge),
    co = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function nt(e, t, {
    allOwnKeys: n = !1
} = {}) {
    if (e === null || typeof e > "u") return;
    let r, i;
    if (typeof e != "object" && (e = [e]), Me(e))
        for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
    else {
        if (et(e)) return;
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            l = o.length;
        let s;
        for (r = 0; r < l; r++) s = o[r], t.call(null, e[s], s, e)
    }
}

function Br(e, t) {
    if (et(e)) return null;
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        i;
    for (; r-- > 0;)
        if (i = n[r], t === i.toLowerCase()) return i;
    return null
}
const Re = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    vr = e => !ve(e) && e !== Re;

function $t() {
    const {
        caseless: e,
        skipUndefined: t
    } = vr(this) && this || {}, n = {}, r = (i, o) => {
        if (o === "__proto__" || o === "constructor" || o === "prototype") return;
        const l = e && Br(n, o) || o;
        ht(n[l]) && ht(i) ? n[l] = $t(n[l], i) : ht(i) ? n[l] = $t({}, i) : Me(i) ? n[l] = i.slice() : (!t || !ve(i)) && (n[l] = i)
    };
    for (let i = 0, o = arguments.length; i < o; i++) arguments[i] && nt(arguments[i], r);
    return n
}
const fo = (e, t, n, {
        allOwnKeys: r
    } = {}) => (nt(t, (i, o) => {
        n && oe(i) ? Object.defineProperty(e, o, {
            value: Nr(i, n),
            writable: !0,
            enumerable: !0,
            configurable: !0
        }) : Object.defineProperty(e, o, {
            value: i,
            writable: !0,
            enumerable: !0,
            configurable: !0
        })
    }, {
        allOwnKeys: r
    }), e),
    po = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    ho = (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
            value: e,
            writable: !0,
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e, "super", {
            value: t.prototype
        }), n && Object.assign(e.prototype, n)
    },
    mo = (e, t, n, r) => {
        let i, o, l;
        const s = {};
        if (t = t || {}, e == null) return t;
        do {
            for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0;) l = i[o], (!r || r(l, e, t)) && !s[l] && (t[l] = e[l], s[l] = !0);
            e = n !== !1 && ln(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    },
    go = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        const r = e.indexOf(t, n);
        return r !== -1 && r === n
    },
    yo = e => {
        if (!e) return null;
        if (Me(e)) return e;
        let t = e.length;
        if (!zr(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    },
    xo = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && ln(Uint8Array)),
    bo = (e, t) => {
        const r = (e && e[wt]).call(e);
        let i;
        for (;
            (i = r.next()) && !i.done;) {
            const o = i.value;
            t.call(e, o[0], o[1])
        }
    },
    wo = (e, t) => {
        let n;
        const r = [];
        for (;
            (n = e.exec(t)) !== null;) r.push(n);
        return r
    },
    ko = ge("HTMLFormElement"),
    So = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
        return r.toUpperCase() + i
    }),
    Ln = (({
        hasOwnProperty: e
    }) => (t, n) => e.call(t, n))(Object.prototype),
    Eo = ge("RegExp"),
    Mr = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        nt(n, (i, o) => {
            let l;
            (l = t(i, o, e)) !== !1 && (r[o] = l || i)
        }), Object.defineProperties(e, r)
    },
    Co = e => {
        Mr(e, (t, n) => {
            if (oe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const r = e[n];
            if (oe(r)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    },
    To = (e, t) => {
        const n = {},
            r = i => {
                i.forEach(o => {
                    n[o] = !0
                })
            };
        return Me(e) ? r(e) : r(String(e).split(t)), n
    },
    Ao = () => {},
    Ro = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;

function Io(e) {
    return !!(e && oe(e.append) && e[Dr] === "FormData" && e[wt])
}
const Oo = e => {
        const t = new Array(10),
            n = (r, i) => {
                if (tt(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (et(r)) return r;
                    if (!("toJSON" in r)) {
                        t[i] = r;
                        const o = Me(r) ? [] : {};
                        return nt(r, (l, s) => {
                            const c = n(l, i + 1);
                            !ve(c) && (o[s] = c)
                        }), t[i] = void 0, o
                    }
                }
                return r
            };
        return n(e, 0)
    },
    Po = ge("AsyncFunction"),
    _o = e => e && (tt(e) || oe(e)) && oe(e.then) && oe(e.catch),
    jr = ((e, t) => e ? setImmediate : t ? ((n, r) => (Re.addEventListener("message", ({
        source: i,
        data: o
    }) => {
        i === Re && o === n && r.length && r.shift()()
    }, !1), i => {
        r.push(i), Re.postMessage(n, "*")
    }))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", oe(Re.postMessage)),
    Lo = typeof queueMicrotask < "u" ? queueMicrotask.bind(Re) : typeof process < "u" && process.nextTick || jr,
    No = e => e != null && oe(e[wt]),
    y = {
        isArray: Me,
        isArrayBuffer: Fr,
        isBuffer: et,
        isFormData: io,
        isArrayBufferView: Ki,
        isString: Yi,
        isNumber: zr,
        isBoolean: Qi,
        isObject: tt,
        isPlainObject: ht,
        isEmptyObject: Gi,
        isReadableStream: lo,
        isRequest: so,
        isResponse: ao,
        isHeaders: uo,
        isUndefined: ve,
        isDate: Zi,
        isFile: eo,
        isBlob: to,
        isRegExp: Eo,
        isFunction: oe,
        isStream: ro,
        isURLSearchParams: oo,
        isTypedArray: xo,
        isFileList: no,
        forEach: nt,
        merge: $t,
        extend: fo,
        trim: co,
        stripBOM: po,
        inherits: ho,
        toFlatObject: mo,
        kindOf: kt,
        kindOfTest: ge,
        endsWith: go,
        toArray: yo,
        forEachEntry: bo,
        matchAll: wo,
        isHTMLForm: ko,
        hasOwnProperty: Ln,
        hasOwnProp: Ln,
        reduceDescriptors: Mr,
        freezeMethods: Co,
        toObjectSet: To,
        toCamelCase: So,
        noop: Ao,
        toFiniteNumber: Ro,
        findKey: Br,
        global: Re,
        isContextDefined: vr,
        isSpecCompliantForm: Io,
        toJSONObject: Oo,
        isAsyncFn: Po,
        isThenable: _o,
        setImmediate: jr,
        asap: Lo,
        isIterable: No
    };
let _ = class Ur extends Error {
    static from(t, n, r, i, o, l) {
        const s = new Ur(t.message, n || t.code, r, i, o);
        return s.cause = t, s.name = t.name, l && Object.assign(s, l), s
    }
    constructor(t, n, r, i, o) {
        super(t), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), i && (this.request = i), o && (this.response = o, this.status = o.status)
    }
    toJSON() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: y.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
};
_.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
_.ERR_BAD_OPTION = "ERR_BAD_OPTION";
_.ECONNABORTED = "ECONNABORTED";
_.ETIMEDOUT = "ETIMEDOUT";
_.ERR_NETWORK = "ERR_NETWORK";
_.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
_.ERR_DEPRECATED = "ERR_DEPRECATED";
_.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
_.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
_.ERR_CANCELED = "ERR_CANCELED";
_.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
_.ERR_INVALID_URL = "ERR_INVALID_URL";
const Do = null;

function Wt(e) {
    return y.isPlainObject(e) || y.isArray(e)
}

function Hr(e) {
    return y.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function Nn(e, t, n) {
    return e ? e.concat(t).map(function(i, o) {
        return i = Hr(i), !n && o ? "[" + i + "]" : i
    }).join(n ? "." : "") : t
}

function Fo(e) {
    return y.isArray(e) && !e.some(Wt)
}
const zo = y.toFlatObject(y, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});

function Et(e, t, n) {
    if (!y.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = y.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(b, x) {
        return !y.isUndefined(x[b])
    });
    const r = n.metaTokens,
        i = n.visitor || u,
        o = n.dots,
        l = n.indexes,
        c = (n.Blob || typeof Blob < "u" && Blob) && y.isSpecCompliantForm(t);
    if (!y.isFunction(i)) throw new TypeError("visitor must be a function");

    function a(g) {
        if (g === null) return "";
        if (y.isDate(g)) return g.toISOString();
        if (y.isBoolean(g)) return g.toString();
        if (!c && y.isBlob(g)) throw new _("Blob is not supported. Use a Buffer instead.");
        return y.isArrayBuffer(g) || y.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g
    }

    function u(g, b, x) {
        let k = g;
        if (g && !x && typeof g == "object") {
            if (y.endsWith(b, "{}")) b = r ? b : b.slice(0, -2), g = JSON.stringify(g);
            else if (y.isArray(g) && Fo(g) || (y.isFileList(g) || y.endsWith(b, "[]")) && (k = y.toArray(g))) return b = Hr(b), k.forEach(function(C, z) {
                !(y.isUndefined(C) || C === null) && t.append(l === !0 ? Nn([b], z, o) : l === null ? b : b + "[]", a(C))
            }), !1
        }
        return Wt(g) ? !0 : (t.append(Nn(x, b, o), a(g)), !1)
    }
    const f = [],
        h = Object.assign(zo, {
            defaultVisitor: u,
            convertValue: a,
            isVisitable: Wt
        });

    function p(g, b) {
        if (!y.isUndefined(g)) {
            if (f.indexOf(g) !== -1) throw Error("Circular reference detected in " + b.join("."));
            f.push(g), y.forEach(g, function(k, R) {
                (!(y.isUndefined(k) || k === null) && i.call(t, k, y.isString(R) ? R.trim() : R, b, h)) === !0 && p(k, b ? b.concat(R) : [R])
            }), f.pop()
        }
    }
    if (!y.isObject(e)) throw new TypeError("data must be an object");
    return p(e), t
}

function Dn(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}

function sn(e, t) {
    this._pairs = [], e && Et(e, this, t)
}
const qr = sn.prototype;
qr.append = function(t, n) {
    this._pairs.push([t, n])
};
qr.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Dn)
    } : Dn;
    return this._pairs.map(function(i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
};

function Bo(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}

function Vr(e, t, n) {
    if (!t) return e;
    const r = n && n.encode || Bo,
        i = y.isFunction(n) ? {
            serialize: n
        } : n,
        o = i && i.serialize;
    let l;
    if (o ? l = o(t, i) : l = y.isURLSearchParams(t) ? t.toString() : new sn(t, i).toString(r), l) {
        const s = e.indexOf("#");
        s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + l
    }
    return e
}
class Fn {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }), this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        y.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const an = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
        legacyInterceptorReqResOrdering: !0
    },
    vo = typeof URLSearchParams < "u" ? URLSearchParams : sn,
    Mo = typeof FormData < "u" ? FormData : null,
    jo = typeof Blob < "u" ? Blob : null,
    Uo = {
        isBrowser: !0,
        classes: {
            URLSearchParams: vo,
            FormData: Mo,
            Blob: jo
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    un = typeof window < "u" && typeof document < "u",
    Jt = typeof navigator == "object" && navigator || void 0,
    Ho = un && (!Jt || ["ReactNative", "NativeScript", "NS"].indexOf(Jt.product) < 0),
    qo = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    Vo = un && window.location.href || "http://localhost",
    $o = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: un,
        hasStandardBrowserEnv: Ho,
        hasStandardBrowserWebWorkerEnv: qo,
        navigator: Jt,
        origin: Vo
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ne = {
        ...$o,
        ...Uo
    };

function Wo(e, t) {
    return Et(e, new ne.classes.URLSearchParams, {
        visitor: function(n, r, i, o) {
            return ne.isNode && y.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments)
        },
        ...t
    })
}

function Jo(e) {
    return y.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function Xo(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const i = n.length;
    let o;
    for (r = 0; r < i; r++) o = n[r], t[o] = e[o];
    return t
}

function $r(e) {
    function t(n, r, i, o) {
        let l = n[o++];
        if (l === "__proto__") return !0;
        const s = Number.isFinite(+l),
            c = o >= n.length;
        return l = !l && y.isArray(i) ? i.length : l, c ? (y.hasOwnProp(i, l) ? i[l] = [i[l], r] : i[l] = r, !s) : ((!i[l] || !y.isObject(i[l])) && (i[l] = []), t(n, r, i[l], o) && y.isArray(i[l]) && (i[l] = Xo(i[l])), !s)
    }
    if (y.isFormData(e) && y.isFunction(e.entries)) {
        const n = {};
        return y.forEachEntry(e, (r, i) => {
            t(Jo(r), i, n, 0)
        }), n
    }
    return null
}

function Ko(e, t, n) {
    if (y.isString(e)) try {
        return (t || JSON.parse)(e), y.trim(e)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (n || JSON.stringify)(e)
}
const rt = {
    transitional: an,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || "",
            i = r.indexOf("application/json") > -1,
            o = y.isObject(t);
        if (o && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t)) return i ? JSON.stringify($r(t)) : t;
        if (y.isArrayBuffer(t) || y.isBuffer(t) || y.isStream(t) || y.isFile(t) || y.isBlob(t) || y.isReadableStream(t)) return t;
        if (y.isArrayBufferView(t)) return t.buffer;
        if (y.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let s;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1) return Wo(t, this.formSerializer).toString();
            if ((s = y.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const c = this.env && this.env.FormData;
                return Et(s ? {
                    "files[]": t
                } : t, c && new c, this.formSerializer)
            }
        }
        return o || i ? (n.setContentType("application/json", !1), Ko(t)) : t
    }],
    transformResponse: [function(t) {
        const n = this.transitional || rt.transitional,
            r = n && n.forcedJSONParsing,
            i = this.responseType === "json";
        if (y.isResponse(t) || y.isReadableStream(t)) return t;
        if (t && y.isString(t) && (r && !this.responseType || i)) {
            const l = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(t, this.parseReviver)
            } catch (s) {
                if (l) throw s.name === "SyntaxError" ? _.from(s, _.ERR_BAD_RESPONSE, this, null, this.response) : s
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: ne.classes.FormData,
        Blob: ne.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
y.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    rt.headers[e] = {}
});
const Yo = y.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    Qo = e => {
        const t = {};
        let n, r, i;
        return e && e.split(`
`).forEach(function(l) {
            i = l.indexOf(":"), n = l.substring(0, i).trim().toLowerCase(), r = l.substring(i + 1).trim(), !(!n || t[n] && Yo[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
        }), t
    },
    zn = Symbol("internals");

function $e(e) {
    return e && String(e).trim().toLowerCase()
}

function dt(e) {
    return e === !1 || e == null ? e : y.isArray(e) ? e.map(dt) : String(e)
}

function Go(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e);) t[r[1]] = r[2];
    return t
}
const Zo = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function Ot(e, t, n, r, i) {
    if (y.isFunction(r)) return r.call(this, t, n);
    if (i && (t = n), !!y.isString(t)) {
        if (y.isString(r)) return t.indexOf(r) !== -1;
        if (y.isRegExp(r)) return r.test(t)
    }
}

function el(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}

function tl(e, t) {
    const n = y.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(i, o, l) {
                return this[r].call(this, t, i, o, l)
            },
            configurable: !0
        })
    })
}
let le = class {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const i = this;

        function o(s, c, a) {
            const u = $e(c);
            if (!u) throw new Error("header name must be a non-empty string");
            const f = y.findKey(i, u);
            (!f || i[f] === void 0 || a === !0 || a === void 0 && i[f] !== !1) && (i[f || c] = dt(s))
        }
        const l = (s, c) => y.forEach(s, (a, u) => o(a, u, c));
        if (y.isPlainObject(t) || t instanceof this.constructor) l(t, n);
        else if (y.isString(t) && (t = t.trim()) && !Zo(t)) l(Qo(t), n);
        else if (y.isObject(t) && y.isIterable(t)) {
            let s = {},
                c, a;
            for (const u of t) {
                if (!y.isArray(u)) throw TypeError("Object iterator must return a key-value pair");
                s[a = u[0]] = (c = s[a]) ? y.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1]
            }
            l(s, n)
        } else t != null && o(n, t, r);
        return this
    }
    get(t, n) {
        if (t = $e(t), t) {
            const r = y.findKey(this, t);
            if (r) {
                const i = this[r];
                if (!n) return i;
                if (n === !0) return Go(i);
                if (y.isFunction(n)) return n.call(this, i, r);
                if (y.isRegExp(n)) return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = $e(t), t) {
            const r = y.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Ot(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let i = !1;

        function o(l) {
            if (l = $e(l), l) {
                const s = y.findKey(r, l);
                s && (!n || Ot(r, r[s], s, n)) && (delete r[s], i = !0)
            }
        }
        return y.isArray(t) ? t.forEach(o) : o(t), i
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length,
            i = !1;
        for (; r--;) {
            const o = n[r];
            (!t || Ot(this, this[o], o, t, !0)) && (delete this[o], i = !0)
        }
        return i
    }
    normalize(t) {
        const n = this,
            r = {};
        return y.forEach(this, (i, o) => {
            const l = y.findKey(r, o);
            if (l) {
                n[l] = dt(i), delete n[o];
                return
            }
            const s = t ? el(o) : String(o).trim();
            s !== o && delete n[o], n[s] = dt(i), r[s] = !0
        }), this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return y.forEach(this, (r, i) => {
            r != null && r !== !1 && (n[i] = t && y.isArray(r) ? r.join(", ") : r)
        }), n
    } [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(i => r.set(i)), r
    }
    static accessor(t) {
        const r = (this[zn] = this[zn] = {
                accessors: {}
            }).accessors,
            i = this.prototype;

        function o(l) {
            const s = $e(l);
            r[s] || (tl(i, l), r[s] = !0)
        }
        return y.isArray(t) ? t.forEach(o) : o(t), this
    }
};
le.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
y.reduceDescriptors(le.prototype, ({
    value: e
}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
});
y.freezeMethods(le);

function Pt(e, t) {
    const n = this || rt,
        r = t || n,
        i = le.from(r.headers);
    let o = r.data;
    return y.forEach(e, function(s) {
        o = s.call(n, o, i.normalize(), t ? t.status : void 0)
    }), i.normalize(), o
}

function Wr(e) {
    return !!(e && e.__CANCEL__)
}
let it = class extends _ {
    constructor(t, n, r) {
        super(t ?? "canceled", _.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0
    }
};

function Jr(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new _("Request failed with status code " + n.status, [_.ERR_BAD_REQUEST, _.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}

function nl(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function rl(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let i = 0,
        o = 0,
        l;
    return t = t !== void 0 ? t : 1e3,
        function(c) {
            const a = Date.now(),
                u = r[o];
            l || (l = a), n[i] = c, r[i] = a;
            let f = o,
                h = 0;
            for (; f !== i;) h += n[f++], f = f % e;
            if (i = (i + 1) % e, i === o && (o = (o + 1) % e), a - l < t) return;
            const p = u && a - u;
            return p ? Math.round(h * 1e3 / p) : void 0
        }
}

function il(e, t) {
    let n = 0,
        r = 1e3 / t,
        i, o;
    const l = (a, u = Date.now()) => {
        n = u, i = null, o && (clearTimeout(o), o = null), e(...a)
    };
    return [(...a) => {
        const u = Date.now(),
            f = u - n;
        f >= r ? l(a, u) : (i = a, o || (o = setTimeout(() => {
            o = null, l(i)
        }, r - f)))
    }, () => i && l(i)]
}
const yt = (e, t, n = 3) => {
        let r = 0;
        const i = rl(50, 250);
        return il(o => {
            const l = o.loaded,
                s = o.lengthComputable ? o.total : void 0,
                c = l - r,
                a = i(c),
                u = l <= s;
            r = l;
            const f = {
                loaded: l,
                total: s,
                progress: s ? l / s : void 0,
                bytes: c,
                rate: a || void 0,
                estimated: a && s && u ? (s - l) / a : void 0,
                event: o,
                lengthComputable: s != null,
                [t ? "download" : "upload"]: !0
            };
            e(f)
        }, n)
    },
    Bn = (e, t) => {
        const n = e != null;
        return [r => t[0]({
            lengthComputable: n,
            total: e,
            loaded: r
        }), t[1]]
    },
    vn = e => (...t) => y.asap(() => e(...t)),
    ol = ne.hasStandardBrowserEnv ? ((e, t) => n => (n = new URL(n, ne.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(ne.origin), ne.navigator && /(msie|trident)/i.test(ne.navigator.userAgent)) : () => !0,
    ll = ne.hasStandardBrowserEnv ? {
        write(e, t, n, r, i, o, l) {
            if (typeof document > "u") return;
            const s = [`${e}=${encodeURIComponent(t)}`];
            y.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), y.isString(r) && s.push(`path=${r}`), y.isString(i) && s.push(`domain=${i}`), o === !0 && s.push("secure"), y.isString(l) && s.push(`SameSite=${l}`), document.cookie = s.join("; ")
        },
        read(e) {
            if (typeof document > "u") return null;
            const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
            return t ? decodeURIComponent(t[1]) : null
        },
        remove(e) {
            this.write(e, "", Date.now() - 864e5, "/")
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    };

function sl(e) {
    return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function al(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function Xr(e, t, n) {
    let r = !sl(t);
    return e && (r || n == !1) ? al(e, t) : t
}
const Mn = e => e instanceof le ? {
    ...e
} : e;

function Oe(e, t) {
    t = t || {};
    const n = {};

    function r(a, u, f, h) {
        return y.isPlainObject(a) && y.isPlainObject(u) ? y.merge.call({
            caseless: h
        }, a, u) : y.isPlainObject(u) ? y.merge({}, u) : y.isArray(u) ? u.slice() : u
    }

    function i(a, u, f, h) {
        if (y.isUndefined(u)) {
            if (!y.isUndefined(a)) return r(void 0, a, f, h)
        } else return r(a, u, f, h)
    }

    function o(a, u) {
        if (!y.isUndefined(u)) return r(void 0, u)
    }

    function l(a, u) {
        if (y.isUndefined(u)) {
            if (!y.isUndefined(a)) return r(void 0, a)
        } else return r(void 0, u)
    }

    function s(a, u, f) {
        if (f in t) return r(a, u);
        if (f in e) return r(void 0, a)
    }
    const c = {
        url: o,
        method: o,
        data: o,
        baseURL: l,
        transformRequest: l,
        transformResponse: l,
        paramsSerializer: l,
        timeout: l,
        timeoutMessage: l,
        withCredentials: l,
        withXSRFToken: l,
        adapter: l,
        responseType: l,
        xsrfCookieName: l,
        xsrfHeaderName: l,
        onUploadProgress: l,
        onDownloadProgress: l,
        decompress: l,
        maxContentLength: l,
        maxBodyLength: l,
        beforeRedirect: l,
        transport: l,
        httpAgent: l,
        httpsAgent: l,
        cancelToken: l,
        socketPath: l,
        responseEncoding: l,
        validateStatus: s,
        headers: (a, u, f) => i(Mn(a), Mn(u), f, !0)
    };
    return y.forEach(Object.keys({
        ...e,
        ...t
    }), function(u) {
        if (u === "__proto__" || u === "constructor" || u === "prototype") return;
        const f = y.hasOwnProp(c, u) ? c[u] : i,
            h = f(e[u], t[u], u);
        y.isUndefined(h) && f !== s || (n[u] = h)
    }), n
}
const Kr = e => {
        const t = Oe({}, e);
        let {
            data: n,
            withXSRFToken: r,
            xsrfHeaderName: i,
            xsrfCookieName: o,
            headers: l,
            auth: s
        } = t;
        if (t.headers = l = le.from(l), t.url = Vr(Xr(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && l.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))), y.isFormData(n)) {
            if (ne.hasStandardBrowserEnv || ne.hasStandardBrowserWebWorkerEnv) l.setContentType(void 0);
            else if (y.isFunction(n.getHeaders)) {
                const c = n.getHeaders(),
                    a = ["content-type", "content-length"];
                Object.entries(c).forEach(([u, f]) => {
                    a.includes(u.toLowerCase()) && l.set(u, f)
                })
            }
        }
        if (ne.hasStandardBrowserEnv && (r && y.isFunction(r) && (r = r(t)), r || r !== !1 && ol(t.url))) {
            const c = i && o && ll.read(o);
            c && l.set(i, c)
        }
        return t
    },
    ul = typeof XMLHttpRequest < "u",
    cl = ul && function(e) {
        return new Promise(function(n, r) {
            const i = Kr(e);
            let o = i.data;
            const l = le.from(i.headers).normalize();
            let {
                responseType: s,
                onUploadProgress: c,
                onDownloadProgress: a
            } = i, u, f, h, p, g;

            function b() {
                p && p(), g && g(), i.cancelToken && i.cancelToken.unsubscribe(u), i.signal && i.signal.removeEventListener("abort", u)
            }
            let x = new XMLHttpRequest;
            x.open(i.method.toUpperCase(), i.url, !0), x.timeout = i.timeout;

            function k() {
                if (!x) return;
                const C = le.from("getAllResponseHeaders" in x && x.getAllResponseHeaders()),
                    v = {
                        data: !s || s === "text" || s === "json" ? x.responseText : x.response,
                        status: x.status,
                        statusText: x.statusText,
                        headers: C,
                        config: e,
                        request: x
                    };
                Jr(function(N) {
                    n(N), b()
                }, function(N) {
                    r(N), b()
                }, v), x = null
            }
            "onloadend" in x ? x.onloadend = k : x.onreadystatechange = function() {
                !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(k)
            }, x.onabort = function() {
                x && (r(new _("Request aborted", _.ECONNABORTED, e, x)), x = null)
            }, x.onerror = function(z) {
                const v = z && z.message ? z.message : "Network Error",
                    S = new _(v, _.ERR_NETWORK, e, x);
                S.event = z || null, r(S), x = null
            }, x.ontimeout = function() {
                let z = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
                const v = i.transitional || an;
                i.timeoutErrorMessage && (z = i.timeoutErrorMessage), r(new _(z, v.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED, e, x)), x = null
            }, o === void 0 && l.setContentType(null), "setRequestHeader" in x && y.forEach(l.toJSON(), function(z, v) {
                x.setRequestHeader(v, z)
            }), y.isUndefined(i.withCredentials) || (x.withCredentials = !!i.withCredentials), s && s !== "json" && (x.responseType = i.responseType), a && ([h, g] = yt(a, !0), x.addEventListener("progress", h)), c && x.upload && ([f, p] = yt(c), x.upload.addEventListener("progress", f), x.upload.addEventListener("loadend", p)), (i.cancelToken || i.signal) && (u = C => {
                x && (r(!C || C.type ? new it(null, e, x) : C), x.abort(), x = null)
            }, i.cancelToken && i.cancelToken.subscribe(u), i.signal && (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
            const R = nl(i.url);
            if (R && ne.protocols.indexOf(R) === -1) {
                r(new _("Unsupported protocol " + R + ":", _.ERR_BAD_REQUEST, e));
                return
            }
            x.send(o || null)
        })
    },
    fl = (e, t) => {
        const {
            length: n
        } = e = e ? e.filter(Boolean) : [];
        if (t || n) {
            let r = new AbortController,
                i;
            const o = function(a) {
                if (!i) {
                    i = !0, s();
                    const u = a instanceof Error ? a : this.reason;
                    r.abort(u instanceof _ ? u : new it(u instanceof Error ? u.message : u))
                }
            };
            let l = t && setTimeout(() => {
                l = null, o(new _(`timeout of ${t}ms exceeded`, _.ETIMEDOUT))
            }, t);
            const s = () => {
                e && (l && clearTimeout(l), l = null, e.forEach(a => {
                    a.unsubscribe ? a.unsubscribe(o) : a.removeEventListener("abort", o)
                }), e = null)
            };
            e.forEach(a => a.addEventListener("abort", o));
            const {
                signal: c
            } = r;
            return c.unsubscribe = () => y.asap(s), c
        }
    },
    pl = function*(e, t) {
        let n = e.byteLength;
        if (n < t) {
            yield e;
            return
        }
        let r = 0,
            i;
        for (; r < n;) i = r + t, yield e.slice(r, i), r = i
    },
    hl = async function*(e, t) {
        for await (const n of dl(e)) yield* pl(n, t)
    }, dl = async function*(e) {
        if (e[Symbol.asyncIterator]) {
            yield* e;
            return
        }
        const t = e.getReader();
        try {
            for (;;) {
                const {
                    done: n,
                    value: r
                } = await t.read();
                if (n) break;
                yield r
            }
        } finally {
            await t.cancel()
        }
    }, jn = (e, t, n, r) => {
        const i = hl(e, t);
        let o = 0,
            l, s = c => {
                l || (l = !0, r && r(c))
            };
        return new ReadableStream({
            async pull(c) {
                try {
                    const {
                        done: a,
                        value: u
                    } = await i.next();
                    if (a) {
                        s(), c.close();
                        return
                    }
                    let f = u.byteLength;
                    if (n) {
                        let h = o += f;
                        n(h)
                    }
                    c.enqueue(new Uint8Array(u))
                } catch (a) {
                    throw s(a), a
                }
            },
            cancel(c) {
                return s(c), i.return()
            }
        }, {
            highWaterMark: 2
        })
    }, Un = 64 * 1024, {
        isFunction: ut
    } = y, ml = (({
        Request: e,
        Response: t
    }) => ({
        Request: e,
        Response: t
    }))(y.global), {
        ReadableStream: Hn,
        TextEncoder: qn
    } = y.global, Vn = (e, ...t) => {
        try {
            return !!e(...t)
        } catch {
            return !1
        }
    }, gl = e => {
        e = y.merge.call({
            skipUndefined: !0
        }, ml, e);
        const {
            fetch: t,
            Request: n,
            Response: r
        } = e, i = t ? ut(t) : typeof fetch == "function", o = ut(n), l = ut(r);
        if (!i) return !1;
        const s = i && ut(Hn),
            c = i && (typeof qn == "function" ? (g => b => g.encode(b))(new qn) : async g => new Uint8Array(await new n(g).arrayBuffer())),
            a = o && s && Vn(() => {
                let g = !1;
                const b = new n(ne.origin, {
                    body: new Hn,
                    method: "POST",
                    get duplex() {
                        return g = !0, "half"
                    }
                }).headers.has("Content-Type");
                return g && !b
            }),
            u = l && s && Vn(() => y.isReadableStream(new r("").body)),
            f = {
                stream: u && (g => g.body)
            };
        i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(g => {
            !f[g] && (f[g] = (b, x) => {
                let k = b && b[g];
                if (k) return k.call(b);
                throw new _(`Response type '${g}' is not supported`, _.ERR_NOT_SUPPORT, x)
            })
        });
        const h = async g => {
            if (g == null) return 0;
            if (y.isBlob(g)) return g.size;
            if (y.isSpecCompliantForm(g)) return (await new n(ne.origin, {
                method: "POST",
                body: g
            }).arrayBuffer()).byteLength;
            if (y.isArrayBufferView(g) || y.isArrayBuffer(g)) return g.byteLength;
            if (y.isURLSearchParams(g) && (g = g + ""), y.isString(g)) return (await c(g)).byteLength
        }, p = async (g, b) => {
            const x = y.toFiniteNumber(g.getContentLength());
            return x ?? h(b)
        };
        return async g => {
            let {
                url: b,
                method: x,
                data: k,
                signal: R,
                cancelToken: C,
                timeout: z,
                onDownloadProgress: v,
                onUploadProgress: S,
                responseType: N,
                headers: V,
                withCredentials: M = "same-origin",
                fetchOptions: H
            } = Kr(g), P = t || fetch;
            N = N ? (N + "").toLowerCase() : "text";
            let I = fl([R, C && C.toAbortSignal()], z),
                U = null;
            const O = I && I.unsubscribe && (() => {
                I.unsubscribe()
            });
            let A;
            try {
                if (S && a && x !== "get" && x !== "head" && (A = await p(V, k)) !== 0) {
                    let Y = new n(b, {
                            method: "POST",
                            body: k,
                            duplex: "half"
                        }),
                        ee;
                    if (y.isFormData(k) && (ee = Y.headers.get("content-type")) && V.setContentType(ee), Y.body) {
                        const [m, te] = Bn(A, yt(vn(S)));
                        k = jn(Y.body, Un, m, te)
                    }
                }
                y.isString(M) || (M = M ? "include" : "omit");
                const D = o && "credentials" in n.prototype,
                    X = {
                        ...H,
                        signal: I,
                        method: x.toUpperCase(),
                        headers: V.normalize().toJSON(),
                        body: k,
                        duplex: "half",
                        credentials: D ? M : void 0
                    };
                U = o && new n(b, X);
                let K = await (o ? P(U, H) : P(b, X));
                const pe = u && (N === "stream" || N === "response");
                if (u && (v || pe && O)) {
                    const Y = {};
                    ["status", "statusText", "headers"].forEach(ye => {
                        Y[ye] = K[ye]
                    });
                    const ee = y.toFiniteNumber(K.headers.get("content-length")),
                        [m, te] = v && Bn(ee, yt(vn(v), !0)) || [];
                    K = new r(jn(K.body, Un, m, () => {
                        te && te(), O && O()
                    }), Y)
                }
                N = N || "text";
                let d = await f[y.findKey(f, N) || "text"](K, g);
                return !pe && O && O(), await new Promise((Y, ee) => {
                    Jr(Y, ee, {
                        data: d,
                        headers: le.from(K.headers),
                        status: K.status,
                        statusText: K.statusText,
                        config: g,
                        request: U
                    })
                })
            } catch (D) {
                throw O && O(), D && D.name === "TypeError" && /Load failed|fetch/i.test(D.message) ? Object.assign(new _("Network Error", _.ERR_NETWORK, g, U, D && D.response), {
                    cause: D.cause || D
                }) : _.from(D, D && D.code, g, U, D && D.response)
            }
        }
    }, yl = new Map, Yr = e => {
        let t = e && e.env || {};
        const {
            fetch: n,
            Request: r,
            Response: i
        } = t, o = [r, i, n];
        let l = o.length,
            s = l,
            c, a, u = yl;
        for (; s--;) c = o[s], a = u.get(c), a === void 0 && u.set(c, a = s ? new Map : gl(t)), u = a;
        return a
    };
Yr();
const cn = {
    http: Do,
    xhr: cl,
    fetch: {
        get: Yr
    }
};
y.forEach(cn, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
});
const $n = e => `- ${e}`,
    xl = e => y.isFunction(e) || e === null || e === !1;

function bl(e, t) {
    e = y.isArray(e) ? e : [e];
    const {
        length: n
    } = e;
    let r, i;
    const o = {};
    for (let l = 0; l < n; l++) {
        r = e[l];
        let s;
        if (i = r, !xl(r) && (i = cn[(s = String(r)).toLowerCase()], i === void 0)) throw new _(`Unknown adapter '${s}'`);
        if (i && (y.isFunction(i) || (i = i.get(t)))) break;
        o[s || "#" + l] = i
    }
    if (!i) {
        const l = Object.entries(o).map(([c, a]) => `adapter ${c} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build"));
        let s = n ? l.length > 1 ? `since :
` + l.map($n).join(`
`) : " " + $n(l[0]) : "as no adapter specified";
        throw new _("There is no suitable adapter to dispatch the request " + s, "ERR_NOT_SUPPORT")
    }
    return i
}
const Qr = {
    getAdapter: bl,
    adapters: cn
};

function _t(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new it(null, e)
}

function Wn(e) {
    return _t(e), e.headers = le.from(e.headers), e.data = Pt.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Qr.getAdapter(e.adapter || rt.adapter, e)(e).then(function(r) {
        return _t(e), r.data = Pt.call(e, e.transformResponse, r), r.headers = le.from(r.headers), r
    }, function(r) {
        return Wr(r) || (_t(e), r && r.response && (r.response.data = Pt.call(e, e.transformResponse, r.response), r.response.headers = le.from(r.response.headers))), Promise.reject(r)
    })
}
const Gr = "1.13.5",
    Ct = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    Ct[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const Jn = {};
Ct.transitional = function(t, n, r) {
    function i(o, l) {
        return "[Axios v" + Gr + "] Transitional option '" + o + "'" + l + (r ? ". " + r : "")
    }
    return (o, l, s) => {
        if (t === !1) throw new _(i(l, " has been removed" + (n ? " in " + n : "")), _.ERR_DEPRECATED);
        return n && !Jn[l] && (Jn[l] = !0), t ? t(o, l, s) : !0
    }
};
Ct.spelling = function(t) {
    return (n, r) => !0
};

function wl(e, t, n) {
    if (typeof e != "object") throw new _("options must be an object", _.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0;) {
        const o = r[i],
            l = t[o];
        if (l) {
            const s = e[o],
                c = s === void 0 || l(s, o, e);
            if (c !== !0) throw new _("option " + o + " must be " + c, _.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new _("Unknown option " + o, _.ERR_BAD_OPTION)
    }
}
const mt = {
        assertOptions: wl,
        validators: Ct
    },
    he = mt.validators;
let Ie = class {
    constructor(t) {
        this.defaults = t || {}, this.interceptors = {
            request: new Fn,
            response: new Fn
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let i = {};
                Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error;
                const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Oe(this.defaults, n);
        const {
            transitional: r,
            paramsSerializer: i,
            headers: o
        } = n;
        r !== void 0 && mt.assertOptions(r, {
            silentJSONParsing: he.transitional(he.boolean),
            forcedJSONParsing: he.transitional(he.boolean),
            clarifyTimeoutError: he.transitional(he.boolean),
            legacyInterceptorReqResOrdering: he.transitional(he.boolean)
        }, !1), i != null && (y.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : mt.assertOptions(i, {
            encode: he.function,
            serialize: he.function
        }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), mt.assertOptions(n, {
            baseUrl: he.spelling("baseURL"),
            withXsrfToken: he.spelling("withXSRFToken")
        }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let l = o && y.merge(o.common, o[n.method]);
        o && y.forEach(["delete", "get", "head", "post", "put", "patch", "common"], g => {
            delete o[g]
        }), n.headers = le.concat(l, o);
        const s = [];
        let c = !0;
        this.interceptors.request.forEach(function(b) {
            if (typeof b.runWhen == "function" && b.runWhen(n) === !1) return;
            c = c && b.synchronous;
            const x = n.transitional || an;
            x && x.legacyInterceptorReqResOrdering ? s.unshift(b.fulfilled, b.rejected) : s.push(b.fulfilled, b.rejected)
        });
        const a = [];
        this.interceptors.response.forEach(function(b) {
            a.push(b.fulfilled, b.rejected)
        });
        let u, f = 0,
            h;
        if (!c) {
            const g = [Wn.bind(this), void 0];
            for (g.unshift(...s), g.push(...a), h = g.length, u = Promise.resolve(n); f < h;) u = u.then(g[f++], g[f++]);
            return u
        }
        h = s.length;
        let p = n;
        for (; f < h;) {
            const g = s[f++],
                b = s[f++];
            try {
                p = g(p)
            } catch (x) {
                b.call(this, x);
                break
            }
        }
        try {
            u = Wn.call(this, p)
        } catch (g) {
            return Promise.reject(g)
        }
        for (f = 0, h = a.length; f < h;) u = u.then(a[f++], a[f++]);
        return u
    }
    getUri(t) {
        t = Oe(this.defaults, t);
        const n = Xr(t.baseURL, t.url, t.allowAbsoluteUrls);
        return Vr(n, t.params, t.paramsSerializer)
    }
};
y.forEach(["delete", "get", "head", "options"], function(t) {
    Ie.prototype[t] = function(n, r) {
        return this.request(Oe(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
y.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(o, l, s) {
            return this.request(Oe(s || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: l
            }))
        }
    }
    Ie.prototype[t] = n(), Ie.prototype[t + "Form"] = n(!0)
});
let kl = class Zr {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(o) {
            n = o
        });
        const r = this;
        this.promise.then(i => {
            if (!r._listeners) return;
            let o = r._listeners.length;
            for (; o-- > 0;) r._listeners[o](i);
            r._listeners = null
        }), this.promise.then = i => {
            let o;
            const l = new Promise(s => {
                r.subscribe(s), o = s
            }).then(i);
            return l.cancel = function() {
                r.unsubscribe(o)
            }, l
        }, t(function(o, l, s) {
            r.reason || (r.reason = new it(o, l, s), n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController,
            n = r => {
                t.abort(r)
            };
        return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal
    }
    static source() {
        let t;
        return {
            token: new Zr(function(i) {
                t = i
            }),
            cancel: t
        }
    }
};

function Sl(e) {
    return function(n) {
        return e.apply(null, n)
    }
}

function El(e) {
    return y.isObject(e) && e.isAxiosError === !0
}
const Xt = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(Xt).forEach(([e, t]) => {
    Xt[t] = e
});

function ei(e) {
    const t = new Ie(e),
        n = Nr(Ie.prototype.request, t);
    return y.extend(n, Ie.prototype, t, {
        allOwnKeys: !0
    }), y.extend(n, t, null, {
        allOwnKeys: !0
    }), n.create = function(i) {
        return ei(Oe(e, i))
    }, n
}
const G = ei(rt);
G.Axios = Ie;
G.CanceledError = it;
G.CancelToken = kl;
G.isCancel = Wr;
G.VERSION = Gr;
G.toFormData = Et;
G.AxiosError = _;
G.Cancel = G.CanceledError;
G.all = function(t) {
    return Promise.all(t)
};
G.spread = Sl;
G.isAxiosError = El;
G.mergeConfig = Oe;
G.AxiosHeaders = le;
G.formToJSON = e => $r(y.isHTMLForm(e) ? new FormData(e) : e);
G.getAdapter = Qr.getAdapter;
G.HttpStatusCode = Xt;
G.default = G;
const {
    Axios: Kc,
    AxiosError: Yc,
    CanceledError: Qc,
    isCancel: Gc,
    CancelToken: Zc,
    VERSION: ef,
    all: tf,
    Cancel: nf,
    isAxiosError: rf,
    spread: of,
    toFormData: lf,
    AxiosHeaders: sf,
    HttpStatusCode: af,
    formToJSON: uf,
    getAdapter: cf,
    mergeConfig: ff
} = G;

function Cl(e, t) {
    const n = {};
    return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim()
}
const Tl = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    Al = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    Rl = {};

function Xn(e, t) {
    return (Rl.jsx ? Al : Tl).test(e)
}
const Il = /[ \t\n\f\r]/g;

function Ol(e) {
    return typeof e == "object" ? e.type === "text" ? Kn(e.value) : !1 : Kn(e)
}

function Kn(e) {
    return e.replace(Il, "") === ""
}
class ot {
    constructor(t, n, r) {
        this.normal = n, this.property = t, r && (this.space = r)
    }
}
ot.prototype.normal = {};
ot.prototype.property = {};
ot.prototype.space = void 0;

function ti(e, t) {
    const n = {},
        r = {};
    for (const i of e) Object.assign(n, i.property), Object.assign(r, i.normal);
    return new ot(n, r, t)
}

function Kt(e) {
    return e.toLowerCase()
}
class ae {
    constructor(t, n) {
        this.attribute = n, this.property = t
    }
}
ae.prototype.attribute = "";
ae.prototype.booleanish = !1;
ae.prototype.boolean = !1;
ae.prototype.commaOrSpaceSeparated = !1;
ae.prototype.commaSeparated = !1;
ae.prototype.defined = !1;
ae.prototype.mustUseProperty = !1;
ae.prototype.number = !1;
ae.prototype.overloadedBoolean = !1;
ae.prototype.property = "";
ae.prototype.spaceSeparated = !1;
ae.prototype.space = void 0;
let Pl = 0;
const B = Pe(),
    Q = Pe(),
    Yt = Pe(),
    E = Pe(),
    W = Pe(),
    ze = Pe(),
    ce = Pe();

function Pe() {
    return 2 ** ++Pl
}
const Qt = Object.freeze(Object.defineProperty({
        __proto__: null,
        boolean: B,
        booleanish: Q,
        commaOrSpaceSeparated: ce,
        commaSeparated: ze,
        number: E,
        overloadedBoolean: Yt,
        spaceSeparated: W
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Lt = Object.keys(Qt);
class fn extends ae {
    constructor(t, n, r, i) {
        let o = -1;
        if (super(t, n), Yn(this, "space", i), typeof r == "number")
            for (; ++o < Lt.length;) {
                const l = Lt[o];
                Yn(this, Lt[o], (r & Qt[l]) === Qt[l])
            }
    }
}
fn.prototype.defined = !0;

function Yn(e, t, n) {
    n && (e[t] = n)
}

function je(e) {
    const t = {},
        n = {};
    for (const [r, i] of Object.entries(e.properties)) {
        const o = new fn(r, e.transform(e.attributes || {}, r), i, e.space);
        e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[Kt(r)] = r, n[Kt(o.attribute)] = r
    }
    return new ot(t, n, e.space)
}
const ni = je({
    properties: {
        ariaActiveDescendant: null,
        ariaAtomic: Q,
        ariaAutoComplete: null,
        ariaBusy: Q,
        ariaChecked: Q,
        ariaColCount: E,
        ariaColIndex: E,
        ariaColSpan: E,
        ariaControls: W,
        ariaCurrent: null,
        ariaDescribedBy: W,
        ariaDetails: null,
        ariaDisabled: Q,
        ariaDropEffect: W,
        ariaErrorMessage: null,
        ariaExpanded: Q,
        ariaFlowTo: W,
        ariaGrabbed: Q,
        ariaHasPopup: null,
        ariaHidden: Q,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: W,
        ariaLevel: E,
        ariaLive: null,
        ariaModal: Q,
        ariaMultiLine: Q,
        ariaMultiSelectable: Q,
        ariaOrientation: null,
        ariaOwns: W,
        ariaPlaceholder: null,
        ariaPosInSet: E,
        ariaPressed: Q,
        ariaReadOnly: Q,
        ariaRelevant: null,
        ariaRequired: Q,
        ariaRoleDescription: W,
        ariaRowCount: E,
        ariaRowIndex: E,
        ariaRowSpan: E,
        ariaSelected: Q,
        ariaSetSize: E,
        ariaSort: null,
        ariaValueMax: E,
        ariaValueMin: E,
        ariaValueNow: E,
        ariaValueText: null,
        role: null
    },
    transform(e, t) {
        return t === "role" ? t : "aria-" + t.slice(4).toLowerCase()
    }
});

function ri(e, t) {
    return t in e ? e[t] : t
}

function ii(e, t) {
    return ri(e, t.toLowerCase())
}
const _l = je({
        attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv"
        },
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
            abbr: null,
            accept: ze,
            acceptCharset: W,
            accessKey: W,
            action: null,
            allow: null,
            allowFullScreen: B,
            allowPaymentRequest: B,
            allowUserMedia: B,
            alt: null,
            as: null,
            async: B,
            autoCapitalize: null,
            autoComplete: W,
            autoFocus: B,
            autoPlay: B,
            blocking: W,
            capture: null,
            charSet: null,
            checked: B,
            cite: null,
            className: W,
            cols: E,
            colSpan: null,
            content: null,
            contentEditable: Q,
            controls: B,
            controlsList: W,
            coords: E | ze,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: B,
            defer: B,
            dir: null,
            dirName: null,
            disabled: B,
            download: Yt,
            draggable: Q,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: B,
            formTarget: null,
            headers: W,
            height: E,
            hidden: Yt,
            high: E,
            href: null,
            hrefLang: null,
            htmlFor: W,
            httpEquiv: W,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: B,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: B,
            itemId: null,
            itemProp: W,
            itemRef: W,
            itemScope: B,
            itemType: W,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: B,
            low: E,
            manifest: null,
            max: null,
            maxLength: E,
            media: null,
            method: null,
            min: null,
            minLength: E,
            multiple: B,
            muted: B,
            name: null,
            nonce: null,
            noModule: B,
            noValidate: B,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: B,
            optimum: E,
            pattern: null,
            ping: W,
            placeholder: null,
            playsInline: B,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: B,
            referrerPolicy: null,
            rel: W,
            required: B,
            reversed: B,
            rows: E,
            rowSpan: E,
            sandbox: W,
            scope: null,
            scoped: B,
            seamless: B,
            selected: B,
            shadowRootClonable: B,
            shadowRootDelegatesFocus: B,
            shadowRootMode: null,
            shape: null,
            size: E,
            sizes: null,
            slot: null,
            span: E,
            spellCheck: Q,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: E,
            step: null,
            style: null,
            tabIndex: E,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: B,
            useMap: null,
            value: Q,
            width: E,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: W,
            axis: null,
            background: null,
            bgColor: null,
            border: E,
            borderColor: null,
            bottomMargin: E,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: B,
            declare: B,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: E,
            leftMargin: E,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: E,
            marginWidth: E,
            noResize: B,
            noHref: B,
            noShade: B,
            noWrap: B,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: E,
            rules: null,
            scheme: null,
            scrolling: Q,
            standby: null,
            summary: null,
            text: null,
            topMargin: E,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: E,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: B,
            disableRemotePlayback: B,
            prefix: null,
            property: null,
            results: E,
            security: null,
            unselectable: null
        },
        space: "html",
        transform: ii
    }),
    Ll = je({
        attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin"
        },
        properties: {
            about: ce,
            accentHeight: E,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: E,
            amplitude: E,
            arabicForm: null,
            ascent: E,
            attributeName: null,
            attributeType: null,
            azimuth: E,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: E,
            by: null,
            calcMode: null,
            capHeight: E,
            className: W,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: E,
            diffuseConstant: E,
            direction: null,
            display: null,
            dur: null,
            divisor: E,
            dominantBaseline: null,
            download: B,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: E,
            enableBackground: null,
            end: null,
            event: null,
            exponent: E,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: E,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: ze,
            g2: ze,
            glyphName: ze,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: E,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: E,
            horizOriginX: E,
            horizOriginY: E,
            id: null,
            ideographic: E,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: E,
            k: E,
            k1: E,
            k2: E,
            k3: E,
            k4: E,
            kernelMatrix: ce,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: E,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: E,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: E,
            overlineThickness: E,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: E,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: W,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: E,
            pointsAtY: E,
            pointsAtZ: E,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: ce,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: ce,
            rev: ce,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: ce,
            requiredFeatures: ce,
            requiredFonts: ce,
            requiredFormats: ce,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: E,
            specularExponent: E,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: E,
            strikethroughThickness: E,
            string: null,
            stroke: null,
            strokeDashArray: ce,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: E,
            strokeOpacity: E,
            strokeWidth: null,
            style: null,
            surfaceScale: E,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: ce,
            tabIndex: E,
            tableValues: null,
            target: null,
            targetX: E,
            targetY: E,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: ce,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: E,
            underlineThickness: E,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: E,
            values: null,
            vAlphabetic: E,
            vMathematical: E,
            vectorEffect: null,
            vHanging: E,
            vIdeographic: E,
            version: null,
            vertAdvY: E,
            vertOriginX: E,
            vertOriginY: E,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: E,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null
        },
        space: "svg",
        transform: ri
    }),
    oi = je({
        properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null
        },
        space: "xlink",
        transform(e, t) {
            return "xlink:" + t.slice(5).toLowerCase()
        }
    }),
    li = je({
        attributes: {
            xmlnsxlink: "xmlns:xlink"
        },
        properties: {
            xmlnsXLink: null,
            xmlns: null
        },
        space: "xmlns",
        transform: ii
    }),
    si = je({
        properties: {
            xmlBase: null,
            xmlLang: null,
            xmlSpace: null
        },
        space: "xml",
        transform(e, t) {
            return "xml:" + t.slice(3).toLowerCase()
        }
    }),
    Nl = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink"
    },
    Dl = /[A-Z]/g,
    Qn = /-[a-z]/g,
    Fl = /^data[-\w.:]+$/i;

function zl(e, t) {
    const n = Kt(t);
    let r = t,
        i = ae;
    if (n in e.normal) return e.property[e.normal[n]];
    if (n.length > 4 && n.slice(0, 4) === "data" && Fl.test(t)) {
        if (t.charAt(4) === "-") {
            const o = t.slice(5).replace(Qn, vl);
            r = "data" + o.charAt(0).toUpperCase() + o.slice(1)
        } else {
            const o = t.slice(4);
            if (!Qn.test(o)) {
                let l = o.replace(Dl, Bl);
                l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l
            }
        }
        i = fn
    }
    return new i(r, t)
}

function Bl(e) {
    return "-" + e.toLowerCase()
}

function vl(e) {
    return e.charAt(1).toUpperCase()
}
const Ml = ti([ni, _l, oi, li, si], "html"),
    pn = ti([ni, Ll, oi, li, si], "svg");

function jl(e) {
    return e.join(" ").trim()
}
var De = {},
    Nt, Gn;

function Ul() {
    if (Gn) return Nt;
    Gn = 1;
    var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        t = /\n/g,
        n = /^\s*/,
        r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        i = /^:\s*/,
        o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        l = /^[;\s]*/,
        s = /^\s+|\s+$/g,
        c = `
`,
        a = "/",
        u = "*",
        f = "",
        h = "comment",
        p = "declaration";

    function g(x, k) {
        if (typeof x != "string") throw new TypeError("First argument must be a string");
        if (!x) return [];
        k = k || {};
        var R = 1,
            C = 1;

        function z(O) {
            var A = O.match(t);
            A && (R += A.length);
            var D = O.lastIndexOf(c);
            C = ~D ? O.length - D : C + O.length
        }

        function v() {
            var O = {
                line: R,
                column: C
            };
            return function(A) {
                return A.position = new S(O), M(), A
            }
        }

        function S(O) {
            this.start = O, this.end = {
                line: R,
                column: C
            }, this.source = k.source
        }
        S.prototype.content = x;

        function N(O) {
            var A = new Error(k.source + ":" + R + ":" + C + ": " + O);
            if (A.reason = O, A.filename = k.source, A.line = R, A.column = C, A.source = x, !k.silent) throw A
        }

        function V(O) {
            var A = O.exec(x);
            if (A) {
                var D = A[0];
                return z(D), x = x.slice(D.length), A
            }
        }

        function M() {
            V(n)
        }

        function H(O) {
            var A;
            for (O = O || []; A = P();) A !== !1 && O.push(A);
            return O
        }

        function P() {
            var O = v();
            if (!(a != x.charAt(0) || u != x.charAt(1))) {
                for (var A = 2; f != x.charAt(A) && (u != x.charAt(A) || a != x.charAt(A + 1));) ++A;
                if (A += 2, f === x.charAt(A - 1)) return N("End of comment missing");
                var D = x.slice(2, A - 2);
                return C += 2, z(D), x = x.slice(A), C += 2, O({
                    type: h,
                    comment: D
                })
            }
        }

        function I() {
            var O = v(),
                A = V(r);
            if (A) {
                if (P(), !V(i)) return N("property missing ':'");
                var D = V(o),
                    X = O({
                        type: p,
                        property: b(A[0].replace(e, f)),
                        value: D ? b(D[0].replace(e, f)) : f
                    });
                return V(l), X
            }
        }

        function U() {
            var O = [];
            H(O);
            for (var A; A = I();) A !== !1 && (O.push(A), H(O));
            return O
        }
        return M(), U()
    }

    function b(x) {
        return x ? x.replace(s, f) : f
    }
    return Nt = g, Nt
}
var Zn;

function Hl() {
    if (Zn) return De;
    Zn = 1;
    var e = De && De.__importDefault || function(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    };
    Object.defineProperty(De, "__esModule", {
        value: !0
    }), De.default = n;
    const t = e(Ul());

    function n(r, i) {
        let o = null;
        if (!r || typeof r != "string") return o;
        const l = (0, t.default)(r),
            s = typeof i == "function";
        return l.forEach(c => {
            if (c.type !== "declaration") return;
            const {
                property: a,
                value: u
            } = c;
            s ? i(a, u, c) : u && (o = o || {}, o[a] = u)
        }), o
    }
    return De
}
var We = {},
    er;

function ql() {
    if (er) return We;
    er = 1, Object.defineProperty(We, "__esModule", {
        value: !0
    }), We.camelCase = void 0;
    var e = /^--[a-zA-Z0-9_-]+$/,
        t = /-([a-z])/g,
        n = /^[^-]+$/,
        r = /^-(webkit|moz|ms|o|khtml)-/,
        i = /^-(ms)-/,
        o = function(a) {
            return !a || n.test(a) || e.test(a)
        },
        l = function(a, u) {
            return u.toUpperCase()
        },
        s = function(a, u) {
            return "".concat(u, "-")
        },
        c = function(a, u) {
            return u === void 0 && (u = {}), o(a) ? a : (a = a.toLowerCase(), u.reactCompat ? a = a.replace(i, s) : a = a.replace(r, s), a.replace(t, l))
        };
    return We.camelCase = c, We
}
var Je, tr;

function Vl() {
    if (tr) return Je;
    tr = 1;
    var e = Je && Je.__importDefault || function(i) {
            return i && i.__esModule ? i : {
                default: i
            }
        },
        t = e(Hl()),
        n = ql();

    function r(i, o) {
        var l = {};
        return !i || typeof i != "string" || (0, t.default)(i, function(s, c) {
            s && c && (l[(0, n.camelCase)(s, o)] = c)
        }), l
    }
    return r.default = r, Je = r, Je
}
var $l = Vl();
const Wl = Lr($l),
    ai = ui("end"),
    hn = ui("start");

function ui(e) {
    return t;

    function t(n) {
        const r = n && n.position && n.position[e] || {};
        if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0) return {
            line: r.line,
            column: r.column,
            offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
        }
    }
}

function Jl(e) {
    const t = hn(e),
        n = ai(e);
    if (t && n) return {
        start: t,
        end: n
    }
}

function Ye(e) {
    return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? nr(e.position) : "start" in e || "end" in e ? nr(e) : "line" in e || "column" in e ? Gt(e) : ""
}

function Gt(e) {
    return rr(e && e.line) + ":" + rr(e && e.column)
}

function nr(e) {
    return Gt(e && e.start) + "-" + Gt(e && e.end)
}

function rr(e) {
    return e && typeof e == "number" ? e : 1
}
class re extends Error {
    constructor(t, n, r) {
        super(), typeof n == "string" && (r = n, n = void 0);
        let i = "",
            o = {},
            l = !1;
        if (n && ("line" in n && "column" in n ? o = {
                place: n
            } : "start" in n && "end" in n ? o = {
                place: n
            } : "type" in n ? o = {
                ancestors: [n],
                place: n.position
            } : o = {
                ...n
            }), typeof t == "string" ? i = t : !o.cause && t && (l = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
            const c = r.indexOf(":");
            c === -1 ? o.ruleId = r : (o.source = r.slice(0, c), o.ruleId = r.slice(c + 1))
        }
        if (!o.place && o.ancestors && o.ancestors) {
            const c = o.ancestors[o.ancestors.length - 1];
            c && (o.place = c.position)
        }
        const s = o.place && "start" in o.place ? o.place.start : o.place;
        this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = s ? s.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = s ? s.line : void 0, this.name = Ye(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = l && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0
    }
}
re.prototype.file = "";
re.prototype.name = "";
re.prototype.reason = "";
re.prototype.message = "";
re.prototype.stack = "";
re.prototype.column = void 0;
re.prototype.line = void 0;
re.prototype.ancestors = void 0;
re.prototype.cause = void 0;
re.prototype.fatal = void 0;
re.prototype.place = void 0;
re.prototype.ruleId = void 0;
re.prototype.source = void 0;
const dn = {}.hasOwnProperty,
    Xl = new Map,
    Kl = /[A-Z]/g,
    Yl = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
    Ql = new Set(["td", "th"]),
    ci = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";

function Gl(e, t) {
    if (!t || t.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    const n = t.filePath || void 0;
    let r;
    if (t.development) {
        if (typeof t.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
        r = ls(n, t.jsxDEV)
    } else {
        if (typeof t.jsx != "function") throw new TypeError("Expected `jsx` in production options");
        if (typeof t.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
        r = os(n, t.jsx, t.jsxs)
    }
    const i = {
            Fragment: t.Fragment,
            ancestors: [],
            components: t.components || {},
            create: r,
            elementAttributeNameCase: t.elementAttributeNameCase || "react",
            evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
            filePath: n,
            ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
            passKeys: t.passKeys !== !1,
            passNode: t.passNode || !1,
            schema: t.space === "svg" ? pn : Ml,
            stylePropertyNameCase: t.stylePropertyNameCase || "dom",
            tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
        },
        o = fi(i, e, void 0);
    return o && typeof o != "string" ? o : i.create(e, i.Fragment, {
        children: o || void 0
    }, void 0)
}

function fi(e, t, n) {
    if (t.type === "element") return Zl(e, t, n);
    if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return es(e, t);
    if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return ns(e, t, n);
    if (t.type === "mdxjsEsm") return ts(e, t);
    if (t.type === "root") return rs(e, t, n);
    if (t.type === "text") return is(e, t)
}

function Zl(e, t, n) {
    const r = e.schema;
    let i = r;
    t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = pn, e.schema = i), e.ancestors.push(t);
    const o = hi(e, t.tagName, !1),
        l = ss(e, t);
    let s = gn(e, t);
    return Yl.has(t.tagName) && (s = s.filter(function(c) {
        return typeof c == "string" ? !Ol(c) : !0
    })), pi(e, l, o, t), mn(l, s), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n)
}

function es(e, t) {
    if (t.data && t.data.estree && e.evaluater) {
        const r = t.data.estree.body[0];
        return r.type, e.evaluater.evaluateExpression(r.expression)
    }
    Ze(e, t.position)
}

function ts(e, t) {
    if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
    Ze(e, t.position)
}

function ns(e, t, n) {
    const r = e.schema;
    let i = r;
    t.name === "svg" && r.space === "html" && (i = pn, e.schema = i), e.ancestors.push(t);
    const o = t.name === null ? e.Fragment : hi(e, t.name, !0),
        l = as(e, t),
        s = gn(e, t);
    return pi(e, l, o, t), mn(l, s), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n)
}

function rs(e, t, n) {
    const r = {};
    return mn(r, gn(e, t)), e.create(t, e.Fragment, r, n)
}

function is(e, t) {
    return t.value
}

function pi(e, t, n, r) {
    typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r)
}

function mn(e, t) {
    if (t.length > 0) {
        const n = t.length > 1 ? t : t[0];
        n && (e.children = n)
    }
}

function os(e, t, n) {
    return r;

    function r(i, o, l, s) {
        const a = Array.isArray(l.children) ? n : t;
        return s ? a(o, l, s) : a(o, l)
    }
}

function ls(e, t) {
    return n;

    function n(r, i, o, l) {
        const s = Array.isArray(o.children),
            c = hn(r);
        return t(i, o, l, s, {
            columnNumber: c ? c.column - 1 : void 0,
            fileName: e,
            lineNumber: c ? c.line : void 0
        }, void 0)
    }
}

function ss(e, t) {
    const n = {};
    let r, i;
    for (i in t.properties)
        if (i !== "children" && dn.call(t.properties, i)) {
            const o = us(e, i, t.properties[i]);
            if (o) {
                const [l, s] = o;
                e.tableCellAlignToStyle && l === "align" && typeof s == "string" && Ql.has(t.tagName) ? r = s : n[l] = s
            }
        } if (r) {
        const o = n.style || (n.style = {});
        o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r
    }
    return n
}

function as(e, t) {
    const n = {};
    for (const r of t.attributes)
        if (r.type === "mdxJsxExpressionAttribute")
            if (r.data && r.data.estree && e.evaluater) {
                const o = r.data.estree.body[0];
                o.type;
                const l = o.expression;
                l.type;
                const s = l.properties[0];
                s.type, Object.assign(n, e.evaluater.evaluateExpression(s.argument))
            } else Ze(e, t.position);
    else {
        const i = r.name;
        let o;
        if (r.value && typeof r.value == "object")
            if (r.value.data && r.value.data.estree && e.evaluater) {
                const s = r.value.data.estree.body[0];
                s.type, o = e.evaluater.evaluateExpression(s.expression)
            } else Ze(e, t.position);
        else o = r.value === null ? !0 : r.value;
        n[i] = o
    }
    return n
}

function gn(e, t) {
    const n = [];
    let r = -1;
    const i = e.passKeys ? new Map : Xl;
    for (; ++r < t.children.length;) {
        const o = t.children[r];
        let l;
        if (e.passKeys) {
            const c = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
            if (c) {
                const a = i.get(c) || 0;
                l = c + "-" + a, i.set(c, a + 1)
            }
        }
        const s = fi(e, o, l);
        s !== void 0 && n.push(s)
    }
    return n
}

function us(e, t, n) {
    const r = zl(e.schema, t);
    if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
        if (Array.isArray(n) && (n = r.commaSeparated ? Cl(n) : jl(n)), r.property === "style") {
            let i = typeof n == "object" ? n : cs(e, String(n));
            return e.stylePropertyNameCase === "css" && (i = fs(i)), ["style", i]
        }
        return [e.elementAttributeNameCase === "react" && r.space ? Nl[r.property] || r.property : r.attribute, n]
    }
}

function cs(e, t) {
    try {
        return Wl(t, {
            reactCompat: !0
        })
    } catch (n) {
        if (e.ignoreInvalidStyle) return {};
        const r = n,
            i = new re("Cannot parse `style` attribute", {
                ancestors: e.ancestors,
                cause: r,
                ruleId: "style",
                source: "hast-util-to-jsx-runtime"
            });
        throw i.file = e.filePath || void 0, i.url = ci + "#cannot-parse-style-attribute", i
    }
}

function hi(e, t, n) {
    let r;
    if (!n) r = {
        type: "Literal",
        value: t
    };
    else if (t.includes(".")) {
        const i = t.split(".");
        let o = -1,
            l;
        for (; ++o < i.length;) {
            const s = Xn(i[o]) ? {
                type: "Identifier",
                name: i[o]
            } : {
                type: "Literal",
                value: i[o]
            };
            l = l ? {
                type: "MemberExpression",
                object: l,
                property: s,
                computed: !!(o && s.type === "Literal"),
                optional: !1
            } : s
        }
        r = l
    } else r = Xn(t) && !/^[a-z]/.test(t) ? {
        type: "Identifier",
        name: t
    } : {
        type: "Literal",
        value: t
    };
    if (r.type === "Literal") {
        const i = r.value;
        return dn.call(e.components, i) ? e.components[i] : i
    }
    if (e.evaluater) return e.evaluater.evaluateExpression(r);
    Ze(e)
}

function Ze(e, t) {
    const n = new re("Cannot handle MDX estrees without `createEvaluater`", {
        ancestors: e.ancestors,
        place: t,
        ruleId: "mdx-estree",
        source: "hast-util-to-jsx-runtime"
    });
    throw n.file = e.filePath || void 0, n.url = ci + "#cannot-handle-mdx-estrees-without-createevaluater", n
}

function fs(e) {
    const t = {};
    let n;
    for (n in e) dn.call(e, n) && (t[ps(n)] = e[n]);
    return t
}

function ps(e) {
    let t = e.replace(Kl, hs);
    return t.slice(0, 3) === "ms-" && (t = "-" + t), t
}

function hs(e) {
    return "-" + e.toLowerCase()
}
const Dt = {
        action: ["form"],
        cite: ["blockquote", "del", "ins", "q"],
        data: ["object"],
        formAction: ["button", "input"],
        href: ["a", "area", "base", "link"],
        icon: ["menuitem"],
        itemId: null,
        manifest: ["html"],
        ping: ["a", "area"],
        poster: ["video"],
        src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]
    },
    ds = {};

function ms(e, t) {
    const n = ds,
        r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
        i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
    return di(e, r, i)
}

function di(e, t, n) {
    if (gs(e)) {
        if ("value" in e) return e.type === "html" && !n ? "" : e.value;
        if (t && "alt" in e && e.alt) return e.alt;
        if ("children" in e) return ir(e.children, t, n)
    }
    return Array.isArray(e) ? ir(e, t, n) : ""
}

function ir(e, t, n) {
    const r = [];
    let i = -1;
    for (; ++i < e.length;) r[i] = di(e[i], t, n);
    return r.join("")
}

function gs(e) {
    return !!(e && typeof e == "object")
}
const or = document.createElement("i");

function yn(e) {
    const t = "&" + e + ";";
    or.innerHTML = t;
    const n = or.textContent;
    return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
}

function we(e, t, n, r) {
    const i = e.length;
    let o = 0,
        l;
    if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) l = Array.from(r), l.unshift(t, n), e.splice(...l);
    else
        for (n && e.splice(t, n); o < r.length;) l = r.slice(o, o + 1e4), l.unshift(t, 0), e.splice(...l), o += 1e4, t += 1e4
}

function de(e, t) {
    return e.length > 0 ? (we(e, e.length, 0, t), e) : t
}
const lr = {}.hasOwnProperty;

function ys(e) {
    const t = {};
    let n = -1;
    for (; ++n < e.length;) xs(t, e[n]);
    return t
}

function xs(e, t) {
    let n;
    for (n in t) {
        const i = (lr.call(e, n) ? e[n] : void 0) || (e[n] = {}),
            o = t[n];
        let l;
        if (o)
            for (l in o) {
                lr.call(i, l) || (i[l] = []);
                const s = o[l];
                bs(i[l], Array.isArray(s) ? s : s ? [s] : [])
            }
    }
}

function bs(e, t) {
    let n = -1;
    const r = [];
    for (; ++n < t.length;)(t[n].add === "after" ? e : r).push(t[n]);
    we(e, 0, 0, r)
}

function mi(e, t) {
    const n = Number.parseInt(e, t);
    return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "�" : String.fromCodePoint(n)
}

function Be(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
}
const be = Te(/[A-Za-z]/),
    fe = Te(/[\dA-Za-z]/),
    ws = Te(/[#-'*+\--9=?A-Z^-~]/);

function Zt(e) {
    return e !== null && (e < 32 || e === 127)
}
const en = Te(/\d/),
    ks = Te(/[\dA-Fa-f]/),
    Ss = Te(/[!-/:-@[-`{-~]/);

function L(e) {
    return e !== null && e < -2
}

function se(e) {
    return e !== null && (e < 0 || e === 32)
}

function q(e) {
    return e === -2 || e === -1 || e === 32
}
const Es = Te(new RegExp("\\p{P}|\\p{S}", "u")),
    Cs = Te(/\s/);

function Te(e) {
    return t;

    function t(n) {
        return n !== null && n > -1 && e.test(String.fromCharCode(n))
    }
}

function Ue(e) {
    const t = [];
    let n = -1,
        r = 0,
        i = 0;
    for (; ++n < e.length;) {
        const o = e.charCodeAt(n);
        let l = "";
        if (o === 37 && fe(e.charCodeAt(n + 1)) && fe(e.charCodeAt(n + 2))) i = 2;
        else if (o < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
        else if (o > 55295 && o < 57344) {
            const s = e.charCodeAt(n + 1);
            o < 56320 && s > 56319 && s < 57344 ? (l = String.fromCharCode(o, s), i = 1) : l = "�"
        } else l = String.fromCharCode(o);
        l && (t.push(e.slice(r, n), encodeURIComponent(l)), r = n + i + 1, l = ""), i && (n += i, i = 0)
    }
    return t.join("") + e.slice(r)
}

function J(e, t, n, r) {
    const i = r ? r - 1 : Number.POSITIVE_INFINITY;
    let o = 0;
    return l;

    function l(c) {
        return q(c) ? (e.enter(n), s(c)) : t(c)
    }

    function s(c) {
        return q(c) && o++ < i ? (e.consume(c), s) : (e.exit(n), t(c))
    }
}
const Ts = {
    tokenize: As
};

function As(e) {
    const t = e.attempt(this.parser.constructs.contentInitial, r, i);
    let n;
    return t;

    function r(s) {
        if (s === null) {
            e.consume(s);
            return
        }
        return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), J(e, t, "linePrefix")
    }

    function i(s) {
        return e.enter("paragraph"), o(s)
    }

    function o(s) {
        const c = e.enter("chunkText", {
            contentType: "text",
            previous: n
        });
        return n && (n.next = c), n = c, l(s)
    }

    function l(s) {
        if (s === null) {
            e.exit("chunkText"), e.exit("paragraph"), e.consume(s);
            return
        }
        return L(s) ? (e.consume(s), e.exit("chunkText"), o) : (e.consume(s), l)
    }
}
const Rs = {
        tokenize: Is
    },
    sr = {
        tokenize: Os
    };

function Is(e) {
    const t = this,
        n = [];
    let r = 0,
        i, o, l;
    return s;

    function s(C) {
        if (r < n.length) {
            const z = n[r];
            return t.containerState = z[1], e.attempt(z[0].continuation, c, a)(C)
        }
        return a(C)
    }

    function c(C) {
        if (r++, t.containerState._closeFlow) {
            t.containerState._closeFlow = void 0, i && R();
            const z = t.events.length;
            let v = z,
                S;
            for (; v--;)
                if (t.events[v][0] === "exit" && t.events[v][1].type === "chunkFlow") {
                    S = t.events[v][1].end;
                    break
                } k(r);
            let N = z;
            for (; N < t.events.length;) t.events[N][1].end = {
                ...S
            }, N++;
            return we(t.events, v + 1, 0, t.events.slice(z)), t.events.length = N, a(C)
        }
        return s(C)
    }

    function a(C) {
        if (r === n.length) {
            if (!i) return h(C);
            if (i.currentConstruct && i.currentConstruct.concrete) return g(C);
            t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
        }
        return t.containerState = {}, e.check(sr, u, f)(C)
    }

    function u(C) {
        return i && R(), k(r), h(C)
    }

    function f(C) {
        return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, g(C)
    }

    function h(C) {
        return t.containerState = {}, e.attempt(sr, p, g)(C)
    }

    function p(C) {
        return r++, n.push([t.currentConstruct, t.containerState]), h(C)
    }

    function g(C) {
        if (C === null) {
            i && R(), k(0), e.consume(C);
            return
        }
        return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
            _tokenizer: i,
            contentType: "flow",
            previous: o
        }), b(C)
    }

    function b(C) {
        if (C === null) {
            x(e.exit("chunkFlow"), !0), k(0), e.consume(C);
            return
        }
        return L(C) ? (e.consume(C), x(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(C), b)
    }

    function x(C, z) {
        const v = t.sliceStream(C);
        if (z && v.push(null), C.previous = o, o && (o.next = C), o = C, i.defineSkip(C.start), i.write(v), t.parser.lazy[C.start.line]) {
            let S = i.events.length;
            for (; S--;)
                if (i.events[S][1].start.offset < l && (!i.events[S][1].end || i.events[S][1].end.offset > l)) return;
            const N = t.events.length;
            let V = N,
                M, H;
            for (; V--;)
                if (t.events[V][0] === "exit" && t.events[V][1].type === "chunkFlow") {
                    if (M) {
                        H = t.events[V][1].end;
                        break
                    }
                    M = !0
                } for (k(r), S = N; S < t.events.length;) t.events[S][1].end = {
                ...H
            }, S++;
            we(t.events, V + 1, 0, t.events.slice(N)), t.events.length = S
        }
    }

    function k(C) {
        let z = n.length;
        for (; z-- > C;) {
            const v = n[z];
            t.containerState = v[1], v[0].exit.call(t, e)
        }
        n.length = C
    }

    function R() {
        i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0
    }
}

function Os(e, t, n) {
    return J(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
}

function ar(e) {
    if (e === null || se(e) || Cs(e)) return 1;
    if (Es(e)) return 2
}

function xn(e, t, n) {
    const r = [];
    let i = -1;
    for (; ++i < e.length;) {
        const o = e[i].resolveAll;
        o && !r.includes(o) && (t = o(t, n), r.push(o))
    }
    return t
}
const tn = {
    name: "attention",
    resolveAll: Ps,
    tokenize: _s
};

function Ps(e, t) {
    let n = -1,
        r, i, o, l, s, c, a, u;
    for (; ++n < e.length;)
        if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
            for (r = n; r--;)
                if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
                    if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
                    c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
                    const f = {
                            ...e[r][1].end
                        },
                        h = {
                            ...e[n][1].start
                        };
                    ur(f, -c), ur(h, c), l = {
                        type: c > 1 ? "strongSequence" : "emphasisSequence",
                        start: f,
                        end: {
                            ...e[r][1].end
                        }
                    }, s = {
                        type: c > 1 ? "strongSequence" : "emphasisSequence",
                        start: {
                            ...e[n][1].start
                        },
                        end: h
                    }, o = {
                        type: c > 1 ? "strongText" : "emphasisText",
                        start: {
                            ...e[r][1].end
                        },
                        end: {
                            ...e[n][1].start
                        }
                    }, i = {
                        type: c > 1 ? "strong" : "emphasis",
                        start: {
                            ...l.start
                        },
                        end: {
                            ...s.end
                        }
                    }, e[r][1].end = {
                        ...l.start
                    }, e[n][1].start = {
                        ...s.end
                    }, a = [], e[r][1].end.offset - e[r][1].start.offset && (a = de(a, [
                        ["enter", e[r][1], t],
                        ["exit", e[r][1], t]
                    ])), a = de(a, [
                        ["enter", i, t],
                        ["enter", l, t],
                        ["exit", l, t],
                        ["enter", o, t]
                    ]), a = de(a, xn(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), a = de(a, [
                        ["exit", o, t],
                        ["enter", s, t],
                        ["exit", s, t],
                        ["exit", i, t]
                    ]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, a = de(a, [
                        ["enter", e[n][1], t],
                        ["exit", e[n][1], t]
                    ])) : u = 0, we(e, r - 1, n - r + 3, a), n = r + a.length - u - 2;
                    break
                }
        } for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
    return e
}

function _s(e, t) {
    const n = this.parser.constructs.attentionMarkers.null,
        r = this.previous,
        i = ar(r);
    let o;
    return l;

    function l(c) {
        return o = c, e.enter("attentionSequence"), s(c)
    }

    function s(c) {
        if (c === o) return e.consume(c), s;
        const a = e.exit("attentionSequence"),
            u = ar(c),
            f = !u || u === 2 && i || n.includes(c),
            h = !i || i === 2 && u || n.includes(r);
        return a._open = !!(o === 42 ? f : f && (i || !h)), a._close = !!(o === 42 ? h : h && (u || !f)), t(c)
    }
}

function ur(e, t) {
    e.column += t, e.offset += t, e._bufferIndex += t
}
const Ls = {
    name: "autolink",
    tokenize: Ns
};

function Ns(e, t, n) {
    let r = 0;
    return i;

    function i(p) {
        return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o
    }

    function o(p) {
        return be(p) ? (e.consume(p), l) : p === 64 ? n(p) : a(p)
    }

    function l(p) {
        return p === 43 || p === 45 || p === 46 || fe(p) ? (r = 1, s(p)) : a(p)
    }

    function s(p) {
        return p === 58 ? (e.consume(p), r = 0, c) : (p === 43 || p === 45 || p === 46 || fe(p)) && r++ < 32 ? (e.consume(p), s) : (r = 0, a(p))
    }

    function c(p) {
        return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : p === null || p === 32 || p === 60 || Zt(p) ? n(p) : (e.consume(p), c)
    }

    function a(p) {
        return p === 64 ? (e.consume(p), u) : ws(p) ? (e.consume(p), a) : n(p)
    }

    function u(p) {
        return fe(p) ? f(p) : n(p)
    }

    function f(p) {
        return p === 46 ? (e.consume(p), r = 0, u) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : h(p)
    }

    function h(p) {
        if ((p === 45 || fe(p)) && r++ < 63) {
            const g = p === 45 ? h : f;
            return e.consume(p), g
        }
        return n(p)
    }
}
const Tt = {
    partial: !0,
    tokenize: Ds
};

function Ds(e, t, n) {
    return r;

    function r(o) {
        return q(o) ? J(e, i, "linePrefix")(o) : i(o)
    }

    function i(o) {
        return o === null || L(o) ? t(o) : n(o)
    }
}
const gi = {
    continuation: {
        tokenize: zs
    },
    exit: Bs,
    name: "blockQuote",
    tokenize: Fs
};

function Fs(e, t, n) {
    const r = this;
    return i;

    function i(l) {
        if (l === 62) {
            const s = r.containerState;
            return s.open || (e.enter("blockQuote", {
                _container: !0
            }), s.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), o
        }
        return n(l)
    }

    function o(l) {
        return q(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l))
    }
}

function zs(e, t, n) {
    const r = this;
    return i;

    function i(l) {
        return q(l) ? J(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : o(l)
    }

    function o(l) {
        return e.attempt(gi, t, n)(l)
    }
}

function Bs(e) {
    e.exit("blockQuote")
}
const yi = {
    name: "characterEscape",
    tokenize: vs
};

function vs(e, t, n) {
    return r;

    function r(o) {
        return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i
    }

    function i(o) {
        return Ss(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o)
    }
}
const xi = {
    name: "characterReference",
    tokenize: Ms
};

function Ms(e, t, n) {
    const r = this;
    let i = 0,
        o, l;
    return s;

    function s(f) {
        return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), c
    }

    function c(f) {
        return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), a) : (e.enter("characterReferenceValue"), o = 31, l = fe, u(f))
    }

    function a(f) {
        return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = ks, u) : (e.enter("characterReferenceValue"), o = 7, l = en, u(f))
    }

    function u(f) {
        if (f === 59 && i) {
            const h = e.exit("characterReferenceValue");
            return l === fe && !yn(r.sliceSerialize(h)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)
        }
        return l(f) && i++ < o ? (e.consume(f), u) : n(f)
    }
}
const cr = {
        partial: !0,
        tokenize: Us
    },
    fr = {
        concrete: !0,
        name: "codeFenced",
        tokenize: js
    };

function js(e, t, n) {
    const r = this,
        i = {
            partial: !0,
            tokenize: v
        };
    let o = 0,
        l = 0,
        s;
    return c;

    function c(S) {
        return a(S)
    }

    function a(S) {
        const N = r.events[r.events.length - 1];
        return o = N && N[1].type === "linePrefix" ? N[2].sliceSerialize(N[1], !0).length : 0, s = S, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(S)
    }

    function u(S) {
        return S === s ? (l++, e.consume(S), u) : l < 3 ? n(S) : (e.exit("codeFencedFenceSequence"), q(S) ? J(e, f, "whitespace")(S) : f(S))
    }

    function f(S) {
        return S === null || L(S) ? (e.exit("codeFencedFence"), r.interrupt ? t(S) : e.check(cr, b, z)(S)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
            contentType: "string"
        }), h(S))
    }

    function h(S) {
        return S === null || L(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(S)) : q(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), J(e, p, "whitespace")(S)) : S === 96 && S === s ? n(S) : (e.consume(S), h)
    }

    function p(S) {
        return S === null || L(S) ? f(S) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
            contentType: "string"
        }), g(S))
    }

    function g(S) {
        return S === null || L(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(S)) : S === 96 && S === s ? n(S) : (e.consume(S), g)
    }

    function b(S) {
        return e.attempt(i, z, x)(S)
    }

    function x(S) {
        return e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), k
    }

    function k(S) {
        return o > 0 && q(S) ? J(e, R, "linePrefix", o + 1)(S) : R(S)
    }

    function R(S) {
        return S === null || L(S) ? e.check(cr, b, z)(S) : (e.enter("codeFlowValue"), C(S))
    }

    function C(S) {
        return S === null || L(S) ? (e.exit("codeFlowValue"), R(S)) : (e.consume(S), C)
    }

    function z(S) {
        return e.exit("codeFenced"), t(S)
    }

    function v(S, N, V) {
        let M = 0;
        return H;

        function H(A) {
            return S.enter("lineEnding"), S.consume(A), S.exit("lineEnding"), P
        }

        function P(A) {
            return S.enter("codeFencedFence"), q(A) ? J(S, I, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(A) : I(A)
        }

        function I(A) {
            return A === s ? (S.enter("codeFencedFenceSequence"), U(A)) : V(A)
        }

        function U(A) {
            return A === s ? (M++, S.consume(A), U) : M >= l ? (S.exit("codeFencedFenceSequence"), q(A) ? J(S, O, "whitespace")(A) : O(A)) : V(A)
        }

        function O(A) {
            return A === null || L(A) ? (S.exit("codeFencedFence"), N(A)) : V(A)
        }
    }
}

function Us(e, t, n) {
    const r = this;
    return i;

    function i(l) {
        return l === null ? n(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o)
    }

    function o(l) {
        return r.parser.lazy[r.now().line] ? n(l) : t(l)
    }
}
const Ft = {
        name: "codeIndented",
        tokenize: qs
    },
    Hs = {
        partial: !0,
        tokenize: Vs
    };

function qs(e, t, n) {
    const r = this;
    return i;

    function i(a) {
        return e.enter("codeIndented"), J(e, o, "linePrefix", 5)(a)
    }

    function o(a) {
        const u = r.events[r.events.length - 1];
        return u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], !0).length >= 4 ? l(a) : n(a)
    }

    function l(a) {
        return a === null ? c(a) : L(a) ? e.attempt(Hs, l, c)(a) : (e.enter("codeFlowValue"), s(a))
    }

    function s(a) {
        return a === null || L(a) ? (e.exit("codeFlowValue"), l(a)) : (e.consume(a), s)
    }

    function c(a) {
        return e.exit("codeIndented"), t(a)
    }
}

function Vs(e, t, n) {
    const r = this;
    return i;

    function i(l) {
        return r.parser.lazy[r.now().line] ? n(l) : L(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : J(e, o, "linePrefix", 5)(l)
    }

    function o(l) {
        const s = r.events[r.events.length - 1];
        return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(l) : L(l) ? i(l) : n(l)
    }
}
const $s = {
    name: "codeText",
    previous: Js,
    resolve: Ws,
    tokenize: Xs
};

function Ws(e) {
    let t = e.length - 4,
        n = 3,
        r, i;
    if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
        for (r = n; ++r < t;)
            if (e[r][1].type === "codeTextData") {
                e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
                break
            }
    }
    for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
    return e
}

function Js(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape"
}

function Xs(e, t, n) {
    let r = 0,
        i, o;
    return l;

    function l(f) {
        return e.enter("codeText"), e.enter("codeTextSequence"), s(f)
    }

    function s(f) {
        return f === 96 ? (e.consume(f), r++, s) : (e.exit("codeTextSequence"), c(f))
    }

    function c(f) {
        return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), c) : f === 96 ? (o = e.enter("codeTextSequence"), i = 0, u(f)) : L(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), c) : (e.enter("codeTextData"), a(f))
    }

    function a(f) {
        return f === null || f === 32 || f === 96 || L(f) ? (e.exit("codeTextData"), c(f)) : (e.consume(f), a)
    }

    function u(f) {
        return f === 96 ? (e.consume(f), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (o.type = "codeTextData", a(f))
    }
}
class Ks {
    constructor(t) {
        this.left = t ? [...t] : [], this.right = []
    }
    get(t) {
        if (t < 0 || t >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
        return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1]
    }
    get length() {
        return this.left.length + this.right.length
    }
    shift() {
        return this.setCursor(0), this.right.pop()
    }
    slice(t, n) {
        const r = n ?? Number.POSITIVE_INFINITY;
        return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse())
    }
    splice(t, n, r) {
        const i = n || 0;
        this.setCursor(Math.trunc(t));
        const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
        return r && Xe(this.left, r), o.reverse()
    }
    pop() {
        return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop()
    }
    push(t) {
        this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t)
    }
    pushMany(t) {
        this.setCursor(Number.POSITIVE_INFINITY), Xe(this.left, t)
    }
    unshift(t) {
        this.setCursor(0), this.right.push(t)
    }
    unshiftMany(t) {
        this.setCursor(0), Xe(this.right, t.reverse())
    }
    setCursor(t) {
        if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
            if (t < this.left.length) {
                const n = this.left.splice(t, Number.POSITIVE_INFINITY);
                Xe(this.right, n.reverse())
            } else {
                const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
                Xe(this.left, n.reverse())
            }
    }
}

function Xe(e, t) {
    let n = 0;
    if (t.length < 1e4) e.push(...t);
    else
        for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4
}

function bi(e) {
    const t = {};
    let n = -1,
        r, i, o, l, s, c, a;
    const u = new Ks(e);
    for (; ++n < u.length;) {
        for (; n in t;) n = t[n];
        if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, o = 0, o < c.length && c[o][1].type === "lineEndingBlank" && (o += 2), o < c.length && c[o][1].type === "content"))
            for (; ++o < c.length && c[o][1].type !== "content";) c[o][1].type === "chunkText" && (c[o][1]._isInFirstContentOfListItem = !0, o++);
        if (r[0] === "enter") r[1].contentType && (Object.assign(t, Ys(u, n)), n = t[n], a = !0);
        else if (r[1]._container) {
            for (o = n, i = void 0; o--;)
                if (l = u.get(o), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank") l[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
                else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
            i && (r[1].end = {
                ...u.get(i)[1].start
            }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s))
        }
    }
    return we(e, 0, Number.POSITIVE_INFINITY, u.slice(0)), !a
}

function Ys(e, t) {
    const n = e.get(t)[1],
        r = e.get(t)[2];
    let i = t - 1;
    const o = [];
    let l = n._tokenizer;
    l || (l = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
    const s = l.events,
        c = [],
        a = {};
    let u, f, h = -1,
        p = n,
        g = 0,
        b = 0;
    const x = [b];
    for (; p;) {
        for (; e.get(++i)[1] !== p;);
        o.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), f && l.defineSkip(p.start), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(u), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), f = p, p = p.next
    }
    for (p = n; ++h < s.length;) s[h][0] === "exit" && s[h - 1][0] === "enter" && s[h][1].type === s[h - 1][1].type && s[h][1].start.line !== s[h][1].end.line && (b = h + 1, x.push(b), p._tokenizer = void 0, p.previous = void 0, p = p.next);
    for (l.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : x.pop(), h = x.length; h--;) {
        const k = s.slice(x[h], x[h + 1]),
            R = o.pop();
        c.push([R, R + k.length - 1]), e.splice(R, 2, k)
    }
    for (c.reverse(), h = -1; ++h < c.length;) a[g + c[h][0]] = g + c[h][1], g += c[h][1] - c[h][0] - 1;
    return a
}
const Qs = {
        resolve: Zs,
        tokenize: ea
    },
    Gs = {
        partial: !0,
        tokenize: ta
    };

function Zs(e) {
    return bi(e), e
}

function ea(e, t) {
    let n;
    return r;

    function r(s) {
        return e.enter("content"), n = e.enter("chunkContent", {
            contentType: "content"
        }), i(s)
    }

    function i(s) {
        return s === null ? o(s) : L(s) ? e.check(Gs, l, o)(s) : (e.consume(s), i)
    }

    function o(s) {
        return e.exit("chunkContent"), e.exit("content"), t(s)
    }

    function l(s) {
        return e.consume(s), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
            contentType: "content",
            previous: n
        }), n = n.next, i
    }
}

function ta(e, t, n) {
    const r = this;
    return i;

    function i(l) {
        return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), J(e, o, "linePrefix")
    }

    function o(l) {
        if (l === null || L(l)) return n(l);
        const s = r.events[r.events.length - 1];
        return !r.parser.constructs.disable.null.includes("codeIndented") && s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l)
    }
}

function wi(e, t, n, r, i, o, l, s, c) {
    const a = c || Number.POSITIVE_INFINITY;
    let u = 0;
    return f;

    function f(k) {
        return k === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(k), e.exit(o), h) : k === null || k === 32 || k === 41 || Zt(k) ? n(k) : (e.enter(r), e.enter(l), e.enter(s), e.enter("chunkString", {
            contentType: "string"
        }), b(k))
    }

    function h(k) {
        return k === 62 ? (e.enter(o), e.consume(k), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", {
            contentType: "string"
        }), p(k))
    }

    function p(k) {
        return k === 62 ? (e.exit("chunkString"), e.exit(s), h(k)) : k === null || k === 60 || L(k) ? n(k) : (e.consume(k), k === 92 ? g : p)
    }

    function g(k) {
        return k === 60 || k === 62 || k === 92 ? (e.consume(k), p) : p(k)
    }

    function b(k) {
        return !u && (k === null || k === 41 || se(k)) ? (e.exit("chunkString"), e.exit(s), e.exit(l), e.exit(r), t(k)) : u < a && k === 40 ? (e.consume(k), u++, b) : k === 41 ? (e.consume(k), u--, b) : k === null || k === 32 || k === 40 || Zt(k) ? n(k) : (e.consume(k), k === 92 ? x : b)
    }

    function x(k) {
        return k === 40 || k === 41 || k === 92 ? (e.consume(k), b) : b(k)
    }
}

function ki(e, t, n, r, i, o) {
    const l = this;
    let s = 0,
        c;
    return a;

    function a(p) {
        return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(o), u
    }

    function u(p) {
        return s > 999 || p === null || p === 91 || p === 93 && !c || p === 94 && !s && "_hiddenFootnoteSupport" in l.parser.constructs ? n(p) : p === 93 ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : L(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), u) : (e.enter("chunkString", {
            contentType: "string"
        }), f(p))
    }

    function f(p) {
        return p === null || p === 91 || p === 93 || L(p) || s++ > 999 ? (e.exit("chunkString"), u(p)) : (e.consume(p), c || (c = !q(p)), p === 92 ? h : f)
    }

    function h(p) {
        return p === 91 || p === 92 || p === 93 ? (e.consume(p), s++, f) : f(p)
    }
}

function Si(e, t, n, r, i, o) {
    let l;
    return s;

    function s(h) {
        return h === 34 || h === 39 || h === 40 ? (e.enter(r), e.enter(i), e.consume(h), e.exit(i), l = h === 40 ? 41 : h, c) : n(h)
    }

    function c(h) {
        return h === l ? (e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : (e.enter(o), a(h))
    }

    function a(h) {
        return h === l ? (e.exit(o), c(l)) : h === null ? n(h) : L(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), J(e, a, "linePrefix")) : (e.enter("chunkString", {
            contentType: "string"
        }), u(h))
    }

    function u(h) {
        return h === l || h === null || L(h) ? (e.exit("chunkString"), a(h)) : (e.consume(h), h === 92 ? f : u)
    }

    function f(h) {
        return h === l || h === 92 ? (e.consume(h), u) : u(h)
    }
}

function Qe(e, t) {
    let n;
    return r;

    function r(i) {
        return L(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : q(i) ? J(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
    }
}
const na = {
        name: "definition",
        tokenize: ia
    },
    ra = {
        partial: !0,
        tokenize: oa
    };

function ia(e, t, n) {
    const r = this;
    let i;
    return o;

    function o(p) {
        return e.enter("definition"), l(p)
    }

    function l(p) {
        return ki.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(p)
    }

    function s(p) {
        return i = Be(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), c) : n(p)
    }

    function c(p) {
        return se(p) ? Qe(e, a)(p) : a(p)
    }

    function a(p) {
        return wi(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(p)
    }

    function u(p) {
        return e.attempt(ra, f, f)(p)
    }

    function f(p) {
        return q(p) ? J(e, h, "whitespace")(p) : h(p)
    }

    function h(p) {
        return p === null || L(p) ? (e.exit("definition"), r.parser.defined.push(i), t(p)) : n(p)
    }
}

function oa(e, t, n) {
    return r;

    function r(s) {
        return se(s) ? Qe(e, i)(s) : n(s)
    }

    function i(s) {
        return Si(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(s)
    }

    function o(s) {
        return q(s) ? J(e, l, "whitespace")(s) : l(s)
    }

    function l(s) {
        return s === null || L(s) ? t(s) : n(s)
    }
}
const la = {
    name: "hardBreakEscape",
    tokenize: sa
};

function sa(e, t, n) {
    return r;

    function r(o) {
        return e.enter("hardBreakEscape"), e.consume(o), i
    }

    function i(o) {
        return L(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o)
    }
}
const aa = {
    name: "headingAtx",
    resolve: ua,
    tokenize: ca
};

function ua(e, t) {
    let n = e.length - 2,
        r = 3,
        i, o;
    return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
        type: "atxHeadingText",
        start: e[r][1].start,
        end: e[n][1].end
    }, o = {
        type: "chunkText",
        start: e[r][1].start,
        end: e[n][1].end,
        contentType: "text"
    }, we(e, r, n - r + 1, [
        ["enter", i, t],
        ["enter", o, t],
        ["exit", o, t],
        ["exit", i, t]
    ])), e
}

function ca(e, t, n) {
    let r = 0;
    return i;

    function i(u) {
        return e.enter("atxHeading"), o(u)
    }

    function o(u) {
        return e.enter("atxHeadingSequence"), l(u)
    }

    function l(u) {
        return u === 35 && r++ < 6 ? (e.consume(u), l) : u === null || se(u) ? (e.exit("atxHeadingSequence"), s(u)) : n(u)
    }

    function s(u) {
        return u === 35 ? (e.enter("atxHeadingSequence"), c(u)) : u === null || L(u) ? (e.exit("atxHeading"), t(u)) : q(u) ? J(e, s, "whitespace")(u) : (e.enter("atxHeadingText"), a(u))
    }

    function c(u) {
        return u === 35 ? (e.consume(u), c) : (e.exit("atxHeadingSequence"), s(u))
    }

    function a(u) {
        return u === null || u === 35 || se(u) ? (e.exit("atxHeadingText"), s(u)) : (e.consume(u), a)
    }
}
const fa = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
    pr = ["pre", "script", "style", "textarea"],
    pa = {
        concrete: !0,
        name: "htmlFlow",
        resolveTo: ma,
        tokenize: ga
    },
    ha = {
        partial: !0,
        tokenize: xa
    },
    da = {
        partial: !0,
        tokenize: ya
    };

function ma(e) {
    let t = e.length;
    for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
    return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
}

function ga(e, t, n) {
    const r = this;
    let i, o, l, s, c;
    return a;

    function a(m) {
        return u(m)
    }

    function u(m) {
        return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(m), f
    }

    function f(m) {
        return m === 33 ? (e.consume(m), h) : m === 47 ? (e.consume(m), o = !0, b) : m === 63 ? (e.consume(m), i = 3, r.interrupt ? t : d) : be(m) ? (e.consume(m), l = String.fromCharCode(m), x) : n(m)
    }

    function h(m) {
        return m === 45 ? (e.consume(m), i = 2, p) : m === 91 ? (e.consume(m), i = 5, s = 0, g) : be(m) ? (e.consume(m), i = 4, r.interrupt ? t : d) : n(m)
    }

    function p(m) {
        return m === 45 ? (e.consume(m), r.interrupt ? t : d) : n(m)
    }

    function g(m) {
        const te = "CDATA[";
        return m === te.charCodeAt(s++) ? (e.consume(m), s === te.length ? r.interrupt ? t : I : g) : n(m)
    }

    function b(m) {
        return be(m) ? (e.consume(m), l = String.fromCharCode(m), x) : n(m)
    }

    function x(m) {
        if (m === null || m === 47 || m === 62 || se(m)) {
            const te = m === 47,
                ye = l.toLowerCase();
            return !te && !o && pr.includes(ye) ? (i = 1, r.interrupt ? t(m) : I(m)) : fa.includes(l.toLowerCase()) ? (i = 6, te ? (e.consume(m), k) : r.interrupt ? t(m) : I(m)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(m) : o ? R(m) : C(m))
        }
        return m === 45 || fe(m) ? (e.consume(m), l += String.fromCharCode(m), x) : n(m)
    }

    function k(m) {
        return m === 62 ? (e.consume(m), r.interrupt ? t : I) : n(m)
    }

    function R(m) {
        return q(m) ? (e.consume(m), R) : H(m)
    }

    function C(m) {
        return m === 47 ? (e.consume(m), H) : m === 58 || m === 95 || be(m) ? (e.consume(m), z) : q(m) ? (e.consume(m), C) : H(m)
    }

    function z(m) {
        return m === 45 || m === 46 || m === 58 || m === 95 || fe(m) ? (e.consume(m), z) : v(m)
    }

    function v(m) {
        return m === 61 ? (e.consume(m), S) : q(m) ? (e.consume(m), v) : C(m)
    }

    function S(m) {
        return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), c = m, N) : q(m) ? (e.consume(m), S) : V(m)
    }

    function N(m) {
        return m === c ? (e.consume(m), c = null, M) : m === null || L(m) ? n(m) : (e.consume(m), N)
    }

    function V(m) {
        return m === null || m === 34 || m === 39 || m === 47 || m === 60 || m === 61 || m === 62 || m === 96 || se(m) ? v(m) : (e.consume(m), V)
    }

    function M(m) {
        return m === 47 || m === 62 || q(m) ? C(m) : n(m)
    }

    function H(m) {
        return m === 62 ? (e.consume(m), P) : n(m)
    }

    function P(m) {
        return m === null || L(m) ? I(m) : q(m) ? (e.consume(m), P) : n(m)
    }

    function I(m) {
        return m === 45 && i === 2 ? (e.consume(m), D) : m === 60 && i === 1 ? (e.consume(m), X) : m === 62 && i === 4 ? (e.consume(m), Y) : m === 63 && i === 3 ? (e.consume(m), d) : m === 93 && i === 5 ? (e.consume(m), pe) : L(m) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(ha, ee, U)(m)) : m === null || L(m) ? (e.exit("htmlFlowData"), U(m)) : (e.consume(m), I)
    }

    function U(m) {
        return e.check(da, O, ee)(m)
    }

    function O(m) {
        return e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), A
    }

    function A(m) {
        return m === null || L(m) ? U(m) : (e.enter("htmlFlowData"), I(m))
    }

    function D(m) {
        return m === 45 ? (e.consume(m), d) : I(m)
    }

    function X(m) {
        return m === 47 ? (e.consume(m), l = "", K) : I(m)
    }

    function K(m) {
        if (m === 62) {
            const te = l.toLowerCase();
            return pr.includes(te) ? (e.consume(m), Y) : I(m)
        }
        return be(m) && l.length < 8 ? (e.consume(m), l += String.fromCharCode(m), K) : I(m)
    }

    function pe(m) {
        return m === 93 ? (e.consume(m), d) : I(m)
    }

    function d(m) {
        return m === 62 ? (e.consume(m), Y) : m === 45 && i === 2 ? (e.consume(m), d) : I(m)
    }

    function Y(m) {
        return m === null || L(m) ? (e.exit("htmlFlowData"), ee(m)) : (e.consume(m), Y)
    }

    function ee(m) {
        return e.exit("htmlFlow"), t(m)
    }
}

function ya(e, t, n) {
    const r = this;
    return i;

    function i(l) {
        return L(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : n(l)
    }

    function o(l) {
        return r.parser.lazy[r.now().line] ? n(l) : t(l)
    }
}

function xa(e, t, n) {
    return r;

    function r(i) {
        return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Tt, t, n)
    }
}
const ba = {
    name: "htmlText",
    tokenize: wa
};

function wa(e, t, n) {
    const r = this;
    let i, o, l;
    return s;

    function s(d) {
        return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(d), c
    }

    function c(d) {
        return d === 33 ? (e.consume(d), a) : d === 47 ? (e.consume(d), v) : d === 63 ? (e.consume(d), C) : be(d) ? (e.consume(d), V) : n(d)
    }

    function a(d) {
        return d === 45 ? (e.consume(d), u) : d === 91 ? (e.consume(d), o = 0, g) : be(d) ? (e.consume(d), R) : n(d)
    }

    function u(d) {
        return d === 45 ? (e.consume(d), p) : n(d)
    }

    function f(d) {
        return d === null ? n(d) : d === 45 ? (e.consume(d), h) : L(d) ? (l = f, X(d)) : (e.consume(d), f)
    }

    function h(d) {
        return d === 45 ? (e.consume(d), p) : f(d)
    }

    function p(d) {
        return d === 62 ? D(d) : d === 45 ? h(d) : f(d)
    }

    function g(d) {
        const Y = "CDATA[";
        return d === Y.charCodeAt(o++) ? (e.consume(d), o === Y.length ? b : g) : n(d)
    }

    function b(d) {
        return d === null ? n(d) : d === 93 ? (e.consume(d), x) : L(d) ? (l = b, X(d)) : (e.consume(d), b)
    }

    function x(d) {
        return d === 93 ? (e.consume(d), k) : b(d)
    }

    function k(d) {
        return d === 62 ? D(d) : d === 93 ? (e.consume(d), k) : b(d)
    }

    function R(d) {
        return d === null || d === 62 ? D(d) : L(d) ? (l = R, X(d)) : (e.consume(d), R)
    }

    function C(d) {
        return d === null ? n(d) : d === 63 ? (e.consume(d), z) : L(d) ? (l = C, X(d)) : (e.consume(d), C)
    }

    function z(d) {
        return d === 62 ? D(d) : C(d)
    }

    function v(d) {
        return be(d) ? (e.consume(d), S) : n(d)
    }

    function S(d) {
        return d === 45 || fe(d) ? (e.consume(d), S) : N(d)
    }

    function N(d) {
        return L(d) ? (l = N, X(d)) : q(d) ? (e.consume(d), N) : D(d)
    }

    function V(d) {
        return d === 45 || fe(d) ? (e.consume(d), V) : d === 47 || d === 62 || se(d) ? M(d) : n(d)
    }

    function M(d) {
        return d === 47 ? (e.consume(d), D) : d === 58 || d === 95 || be(d) ? (e.consume(d), H) : L(d) ? (l = M, X(d)) : q(d) ? (e.consume(d), M) : D(d)
    }

    function H(d) {
        return d === 45 || d === 46 || d === 58 || d === 95 || fe(d) ? (e.consume(d), H) : P(d)
    }

    function P(d) {
        return d === 61 ? (e.consume(d), I) : L(d) ? (l = P, X(d)) : q(d) ? (e.consume(d), P) : M(d)
    }

    function I(d) {
        return d === null || d === 60 || d === 61 || d === 62 || d === 96 ? n(d) : d === 34 || d === 39 ? (e.consume(d), i = d, U) : L(d) ? (l = I, X(d)) : q(d) ? (e.consume(d), I) : (e.consume(d), O)
    }

    function U(d) {
        return d === i ? (e.consume(d), i = void 0, A) : d === null ? n(d) : L(d) ? (l = U, X(d)) : (e.consume(d), U)
    }

    function O(d) {
        return d === null || d === 34 || d === 39 || d === 60 || d === 61 || d === 96 ? n(d) : d === 47 || d === 62 || se(d) ? M(d) : (e.consume(d), O)
    }

    function A(d) {
        return d === 47 || d === 62 || se(d) ? M(d) : n(d)
    }

    function D(d) {
        return d === 62 ? (e.consume(d), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(d)
    }

    function X(d) {
        return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), K
    }

    function K(d) {
        return q(d) ? J(e, pe, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d) : pe(d)
    }

    function pe(d) {
        return e.enter("htmlTextData"), l(d)
    }
}
const bn = {
        name: "labelEnd",
        resolveAll: Ca,
        resolveTo: Ta,
        tokenize: Aa
    },
    ka = {
        tokenize: Ra
    },
    Sa = {
        tokenize: Ia
    },
    Ea = {
        tokenize: Oa
    };

function Ca(e) {
    let t = -1;
    const n = [];
    for (; ++t < e.length;) {
        const r = e[t][1];
        if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
            const i = r.type === "labelImage" ? 4 : 2;
            r.type = "data", t += i
        }
    }
    return e.length !== n.length && we(e, 0, e.length, n), e
}

function Ta(e, t) {
    let n = e.length,
        r = 0,
        i, o, l, s;
    for (; n--;)
        if (i = e[n][1], o) {
            if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
            e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0)
        } else if (l) {
        if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
            r = 2;
            break
        }
    } else i.type === "labelEnd" && (l = n);
    const c = {
            type: e[o][1].type === "labelLink" ? "link" : "image",
            start: {
                ...e[o][1].start
            },
            end: {
                ...e[e.length - 1][1].end
            }
        },
        a = {
            type: "label",
            start: {
                ...e[o][1].start
            },
            end: {
                ...e[l][1].end
            }
        },
        u = {
            type: "labelText",
            start: {
                ...e[o + r + 2][1].end
            },
            end: {
                ...e[l - 2][1].start
            }
        };
    return s = [
        ["enter", c, t],
        ["enter", a, t]
    ], s = de(s, e.slice(o + 1, o + r + 3)), s = de(s, [
        ["enter", u, t]
    ]), s = de(s, xn(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, l - 3), t)), s = de(s, [
        ["exit", u, t], e[l - 2], e[l - 1],
        ["exit", a, t]
    ]), s = de(s, e.slice(l + 1)), s = de(s, [
        ["exit", c, t]
    ]), we(e, o, e.length, s), e
}

function Aa(e, t, n) {
    const r = this;
    let i = r.events.length,
        o, l;
    for (; i--;)
        if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
            o = r.events[i][1];
            break
        } return s;

    function s(h) {
        return o ? o._inactive ? f(h) : (l = r.parser.defined.includes(Be(r.sliceSerialize({
            start: o.end,
            end: r.now()
        }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(h), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(h)
    }

    function c(h) {
        return h === 40 ? e.attempt(ka, u, l ? u : f)(h) : h === 91 ? e.attempt(Sa, u, l ? a : f)(h) : l ? u(h) : f(h)
    }

    function a(h) {
        return e.attempt(Ea, u, f)(h)
    }

    function u(h) {
        return t(h)
    }

    function f(h) {
        return o._balanced = !0, n(h)
    }
}

function Ra(e, t, n) {
    return r;

    function r(f) {
        return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i
    }

    function i(f) {
        return se(f) ? Qe(e, o)(f) : o(f)
    }

    function o(f) {
        return f === 41 ? u(f) : wi(e, l, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f)
    }

    function l(f) {
        return se(f) ? Qe(e, c)(f) : u(f)
    }

    function s(f) {
        return n(f)
    }

    function c(f) {
        return f === 34 || f === 39 || f === 40 ? Si(e, a, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : u(f)
    }

    function a(f) {
        return se(f) ? Qe(e, u)(f) : u(f)
    }

    function u(f) {
        return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f)
    }
}

function Ia(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return ki.call(r, e, o, l, "reference", "referenceMarker", "referenceString")(s)
    }

    function o(s) {
        return r.parser.defined.includes(Be(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(s) : n(s)
    }

    function l(s) {
        return n(s)
    }
}

function Oa(e, t, n) {
    return r;

    function r(o) {
        return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i
    }

    function i(o) {
        return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o)
    }
}
const Pa = {
    name: "labelStartImage",
    resolveAll: bn.resolveAll,
    tokenize: _a
};

function _a(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(s), e.exit("labelImageMarker"), o
    }

    function o(s) {
        return s === 91 ? (e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelImage"), l) : n(s)
    }

    function l(s) {
        return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s)
    }
}
const La = {
    name: "labelStartLink",
    resolveAll: bn.resolveAll,
    tokenize: Na
};

function Na(e, t, n) {
    const r = this;
    return i;

    function i(l) {
        return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o
    }

    function o(l) {
        return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l)
    }
}
const zt = {
    name: "lineEnding",
    tokenize: Da
};

function Da(e, t) {
    return n;

    function n(r) {
        return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), J(e, t, "linePrefix")
    }
}
const gt = {
    name: "thematicBreak",
    tokenize: Fa
};

function Fa(e, t, n) {
    let r = 0,
        i;
    return o;

    function o(a) {
        return e.enter("thematicBreak"), l(a)
    }

    function l(a) {
        return i = a, s(a)
    }

    function s(a) {
        return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || L(a)) ? (e.exit("thematicBreak"), t(a)) : n(a)
    }

    function c(a) {
        return a === i ? (e.consume(a), r++, c) : (e.exit("thematicBreakSequence"), q(a) ? J(e, s, "whitespace")(a) : s(a))
    }
}
const ie = {
        continuation: {
            tokenize: Ma
        },
        exit: Ua,
        name: "list",
        tokenize: va
    },
    za = {
        partial: !0,
        tokenize: Ha
    },
    Ba = {
        partial: !0,
        tokenize: ja
    };

function va(e, t, n) {
    const r = this,
        i = r.events[r.events.length - 1];
    let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
        l = 0;
    return s;

    function s(p) {
        const g = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
        if (g === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : en(p)) {
            if (r.containerState.type || (r.containerState.type = g, e.enter(g, {
                    _container: !0
                })), g === "listUnordered") return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(gt, n, a)(p) : a(p);
            if (!r.interrupt || p === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(p)
        }
        return n(p)
    }

    function c(p) {
        return en(p) && ++l < 10 ? (e.consume(p), c) : (!r.interrupt || l < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), a(p)) : n(p)
    }

    function a(p) {
        return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(Tt, r.interrupt ? n : u, e.attempt(za, h, f))
    }

    function u(p) {
        return r.containerState.initialBlankLine = !0, o++, h(p)
    }

    function f(p) {
        return q(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), h) : n(p)
    }

    function h(p) {
        return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(p)
    }
}

function Ma(e, t, n) {
    const r = this;
    return r.containerState._closeFlow = void 0, e.check(Tt, i, o);

    function i(s) {
        return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, J(e, t, "listItemIndent", r.containerState.size + 1)(s)
    }

    function o(s) {
        return r.containerState.furtherBlankLines || !q(s) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(s)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Ba, t, l)(s))
    }

    function l(s) {
        return r.containerState._closeFlow = !0, r.interrupt = void 0, J(e, e.attempt(ie, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s)
    }
}

function ja(e, t, n) {
    const r = this;
    return J(e, i, "listItemIndent", r.containerState.size + 1);

    function i(o) {
        const l = r.events[r.events.length - 1];
        return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? t(o) : n(o)
    }
}

function Ua(e) {
    e.exit(this.containerState.type)
}

function Ha(e, t, n) {
    const r = this;
    return J(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);

    function i(o) {
        const l = r.events[r.events.length - 1];
        return !q(o) && l && l[1].type === "listItemPrefixWhitespace" ? t(o) : n(o)
    }
}
const hr = {
    name: "setextUnderline",
    resolveTo: qa,
    tokenize: Va
};

function qa(e, t) {
    let n = e.length,
        r, i, o;
    for (; n--;)
        if (e[n][0] === "enter") {
            if (e[n][1].type === "content") {
                r = n;
                break
            }
            e[n][1].type === "paragraph" && (i = n)
        } else e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
    const l = {
        type: "setextHeading",
        start: {
            ...e[r][1].start
        },
        end: {
            ...e[e.length - 1][1].end
        }
    };
    return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", l, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
        ...e[o][1].end
    }) : e[r][1] = l, e.push(["exit", l, t]), e
}

function Va(e, t, n) {
    const r = this;
    let i;
    return o;

    function o(a) {
        let u = r.events.length,
            f;
        for (; u--;)
            if (r.events[u][1].type !== "lineEnding" && r.events[u][1].type !== "linePrefix" && r.events[u][1].type !== "content") {
                f = r.events[u][1].type === "paragraph";
                break
            } return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = a, l(a)) : n(a)
    }

    function l(a) {
        return e.enter("setextHeadingLineSequence"), s(a)
    }

    function s(a) {
        return a === i ? (e.consume(a), s) : (e.exit("setextHeadingLineSequence"), q(a) ? J(e, c, "lineSuffix")(a) : c(a))
    }

    function c(a) {
        return a === null || L(a) ? (e.exit("setextHeadingLine"), t(a)) : n(a)
    }
}
const $a = {
    tokenize: Wa
};

function Wa(e) {
    const t = this,
        n = e.attempt(Tt, r, e.attempt(this.parser.constructs.flowInitial, i, J(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Qs, i)), "linePrefix")));
    return n;

    function r(o) {
        if (o === null) {
            e.consume(o);
            return
        }
        return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
    }

    function i(o) {
        if (o === null) {
            e.consume(o);
            return
        }
        return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n
    }
}
const Ja = {
        resolveAll: Ci()
    },
    Xa = Ei("string"),
    Ka = Ei("text");

function Ei(e) {
    return {
        resolveAll: Ci(e === "text" ? Ya : void 0),
        tokenize: t
    };

    function t(n) {
        const r = this,
            i = this.parser.constructs[e],
            o = n.attempt(i, l, s);
        return l;

        function l(u) {
            return a(u) ? o(u) : s(u)
        }

        function s(u) {
            if (u === null) {
                n.consume(u);
                return
            }
            return n.enter("data"), n.consume(u), c
        }

        function c(u) {
            return a(u) ? (n.exit("data"), o(u)) : (n.consume(u), c)
        }

        function a(u) {
            if (u === null) return !0;
            const f = i[u];
            let h = -1;
            if (f)
                for (; ++h < f.length;) {
                    const p = f[h];
                    if (!p.previous || p.previous.call(r, r.previous)) return !0
                }
            return !1
        }
    }
}

function Ci(e) {
    return t;

    function t(n, r) {
        let i = -1,
            o;
        for (; ++i <= n.length;) o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
        return e ? e(n, r) : n
    }
}

function Ya(e, t) {
    let n = 0;
    for (; ++n <= e.length;)
        if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
            const r = e[n - 1][1],
                i = t.sliceStream(r);
            let o = i.length,
                l = -1,
                s = 0,
                c;
            for (; o--;) {
                const a = i[o];
                if (typeof a == "string") {
                    for (l = a.length; a.charCodeAt(l - 1) === 32;) s++, l--;
                    if (l) break;
                    l = -1
                } else if (a === -2) c = !0, s++;
                else if (a !== -1) {
                    o++;
                    break
                }
            }
            if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
                const a = {
                    type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
                    start: {
                        _bufferIndex: o ? l : r.start._bufferIndex + l,
                        _index: r.start._index + o,
                        line: r.end.line,
                        column: r.end.column - s,
                        offset: r.end.offset - s
                    },
                    end: {
                        ...r.end
                    }
                };
                r.end = {
                    ...a.start
                }, r.start.offset === r.end.offset ? Object.assign(r, a) : (e.splice(n, 0, ["enter", a, t], ["exit", a, t]), n += 2)
            }
            n++
        } return e
}
const Qa = {
        42: ie,
        43: ie,
        45: ie,
        48: ie,
        49: ie,
        50: ie,
        51: ie,
        52: ie,
        53: ie,
        54: ie,
        55: ie,
        56: ie,
        57: ie,
        62: gi
    },
    Ga = {
        91: na
    },
    Za = {
        [-2]: Ft,
        [-1]: Ft,
        32: Ft
    },
    eu = {
        35: aa,
        42: gt,
        45: [hr, gt],
        60: pa,
        61: hr,
        95: gt,
        96: fr,
        126: fr
    },
    tu = {
        38: xi,
        92: yi
    },
    nu = {
        [-5]: zt,
        [-4]: zt,
        [-3]: zt,
        33: Pa,
        38: xi,
        42: tn,
        60: [Ls, ba],
        91: La,
        92: [la, yi],
        93: bn,
        95: tn,
        96: $s
    },
    ru = {
        null: [tn, Ja]
    },
    iu = {
        null: [42, 95]
    },
    ou = {
        null: []
    },
    lu = Object.freeze(Object.defineProperty({
        __proto__: null,
        attentionMarkers: iu,
        contentInitial: Ga,
        disable: ou,
        document: Qa,
        flow: eu,
        flowInitial: Za,
        insideSpan: ru,
        string: tu,
        text: nu
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function su(e, t, n) {
    let r = {
        _bufferIndex: -1,
        _index: 0,
        line: n && n.line || 1,
        column: n && n.column || 1,
        offset: n && n.offset || 0
    };
    const i = {},
        o = [];
    let l = [],
        s = [];
    const c = {
            attempt: N(v),
            check: N(S),
            consume: R,
            enter: C,
            exit: z,
            interrupt: N(S, {
                interrupt: !0
            })
        },
        a = {
            code: null,
            containerState: {},
            defineSkip: b,
            events: [],
            now: g,
            parser: e,
            previous: null,
            sliceSerialize: h,
            sliceStream: p,
            write: f
        };
    let u = t.tokenize.call(a, c);
    return t.resolveAll && o.push(t), a;

    function f(P) {
        return l = de(l, P), x(), l[l.length - 1] !== null ? [] : (V(t, 0), a.events = xn(o, a.events, a), a.events)
    }

    function h(P, I) {
        return uu(p(P), I)
    }

    function p(P) {
        return au(l, P)
    }

    function g() {
        const {
            _bufferIndex: P,
            _index: I,
            line: U,
            column: O,
            offset: A
        } = r;
        return {
            _bufferIndex: P,
            _index: I,
            line: U,
            column: O,
            offset: A
        }
    }

    function b(P) {
        i[P.line] = P.column, H()
    }

    function x() {
        let P;
        for (; r._index < l.length;) {
            const I = l[r._index];
            if (typeof I == "string")
                for (P = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === P && r._bufferIndex < I.length;) k(I.charCodeAt(r._bufferIndex));
            else k(I)
        }
    }

    function k(P) {
        u = u(P)
    }

    function R(P) {
        L(P) ? (r.line++, r.column = 1, r.offset += P === -3 ? 2 : 1, H()) : P !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), a.previous = P
    }

    function C(P, I) {
        const U = I || {};
        return U.type = P, U.start = g(), a.events.push(["enter", U, a]), s.push(U), U
    }

    function z(P) {
        const I = s.pop();
        return I.end = g(), a.events.push(["exit", I, a]), I
    }

    function v(P, I) {
        V(P, I.from)
    }

    function S(P, I) {
        I.restore()
    }

    function N(P, I) {
        return U;

        function U(O, A, D) {
            let X, K, pe, d;
            return Array.isArray(O) ? ee(O) : "tokenize" in O ? ee([O]) : Y(O);

            function Y(Z) {
                return He;

                function He(Ee) {
                    const _e = Ee !== null && Z[Ee],
                        Le = Ee !== null && Z.null,
                        st = [...Array.isArray(_e) ? _e : _e ? [_e] : [], ...Array.isArray(Le) ? Le : Le ? [Le] : []];
                    return ee(st)(Ee)
                }
            }

            function ee(Z) {
                return X = Z, K = 0, Z.length === 0 ? D : m(Z[K])
            }

            function m(Z) {
                return He;

                function He(Ee) {
                    return d = M(), pe = Z, Z.partial || (a.currentConstruct = Z), Z.name && a.parser.constructs.disable.null.includes(Z.name) ? ye() : Z.tokenize.call(I ? Object.assign(Object.create(a), I) : a, c, te, ye)(Ee)
                }
            }

            function te(Z) {
                return P(pe, d), A
            }

            function ye(Z) {
                return d.restore(), ++K < X.length ? m(X[K]) : D
            }
        }
    }

    function V(P, I) {
        P.resolveAll && !o.includes(P) && o.push(P), P.resolve && we(a.events, I, a.events.length - I, P.resolve(a.events.slice(I), a)), P.resolveTo && (a.events = P.resolveTo(a.events, a))
    }

    function M() {
        const P = g(),
            I = a.previous,
            U = a.currentConstruct,
            O = a.events.length,
            A = Array.from(s);
        return {
            from: O,
            restore: D
        };

        function D() {
            r = P, a.previous = I, a.currentConstruct = U, a.events.length = O, s = A, H()
        }
    }

    function H() {
        r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
    }
}

function au(e, t) {
    const n = t.start._index,
        r = t.start._bufferIndex,
        i = t.end._index,
        o = t.end._bufferIndex;
    let l;
    if (n === i) l = [e[n].slice(r, o)];
    else {
        if (l = e.slice(n, i), r > -1) {
            const s = l[0];
            typeof s == "string" ? l[0] = s.slice(r) : l.shift()
        }
        o > 0 && l.push(e[i].slice(0, o))
    }
    return l
}

function uu(e, t) {
    let n = -1;
    const r = [];
    let i;
    for (; ++n < e.length;) {
        const o = e[n];
        let l;
        if (typeof o == "string") l = o;
        else switch (o) {
            case -5: {
                l = "\r";
                break
            }
            case -4: {
                l = `
`;
                break
            }
            case -3: {
                l = `\r
`;
                break
            }
            case -2: {
                l = t ? " " : "	";
                break
            }
            case -1: {
                if (!t && i) continue;
                l = " ";
                break
            }
            default:
                l = String.fromCharCode(o)
        }
        i = o === -2, r.push(l)
    }
    return r.join("")
}

function cu(e) {
    const r = {
        constructs: ys([lu, ...(e || {}).extensions || []]),
        content: i(Ts),
        defined: [],
        document: i(Rs),
        flow: i($a),
        lazy: {},
        string: i(Xa),
        text: i(Ka)
    };
    return r;

    function i(o) {
        return l;

        function l(s) {
            return su(r, o, s)
        }
    }
}

function fu(e) {
    for (; !bi(e););
    return e
}
const dr = /[\0\t\n\r]/g;

function pu() {
    let e = 1,
        t = "",
        n = !0,
        r;
    return i;

    function i(o, l, s) {
        const c = [];
        let a, u, f, h, p;
        for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(l || void 0).decode(o)), f = 0, t = "", n && (o.charCodeAt(0) === 65279 && f++, n = void 0); f < o.length;) {
            if (dr.lastIndex = f, a = dr.exec(o), h = a && a.index !== void 0 ? a.index : o.length, p = o.charCodeAt(h), !a) {
                t = o.slice(f);
                break
            }
            if (p === 10 && f === h && r) c.push(-3), r = void 0;
            else switch (r && (c.push(-5), r = void 0), f < h && (c.push(o.slice(f, h)), e += h - f), p) {
                case 0: {
                    c.push(65533), e++;
                    break
                }
                case 9: {
                    for (u = Math.ceil(e / 4) * 4, c.push(-2); e++ < u;) c.push(-1);
                    break
                }
                case 10: {
                    c.push(-4), e = 1;
                    break
                }
                default:
                    r = !0, e = 1
            }
            f = h + 1
        }
        return s && (r && c.push(-5), t && c.push(t), c.push(null)), c
    }
}
const hu = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

function du(e) {
    return e.replace(hu, mu)
}

function mu(e, t, n) {
    if (t) return t;
    if (n.charCodeAt(0) === 35) {
        const i = n.charCodeAt(1),
            o = i === 120 || i === 88;
        return mi(n.slice(o ? 2 : 1), o ? 16 : 10)
    }
    return yn(n) || e
}
const Ti = {}.hasOwnProperty;

function gu(e, t, n) {
    return typeof t != "string" && (n = t, t = void 0), yu(n)(fu(cu(n).document().write(pu()(e, t, !0))))
}

function yu(e) {
    const t = {
        transforms: [],
        canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
        enter: {
            autolink: o(In),
            autolinkProtocol: M,
            autolinkEmail: M,
            atxHeading: o(Tn),
            blockQuote: o(Le),
            characterEscape: M,
            characterReference: M,
            codeFenced: o(st),
            codeFencedFenceInfo: l,
            codeFencedFenceMeta: l,
            codeIndented: o(st, l),
            codeText: o(zi, l),
            codeTextData: M,
            data: M,
            codeFlowValue: M,
            definition: o(Bi),
            definitionDestinationString: l,
            definitionLabelString: l,
            definitionTitleString: l,
            emphasis: o(vi),
            hardBreakEscape: o(An),
            hardBreakTrailing: o(An),
            htmlFlow: o(Rn, l),
            htmlFlowData: M,
            htmlText: o(Rn, l),
            htmlTextData: M,
            image: o(Mi),
            label: l,
            link: o(In),
            listItem: o(ji),
            listItemValue: h,
            listOrdered: o(On, f),
            listUnordered: o(On),
            paragraph: o(Ui),
            reference: m,
            referenceString: l,
            resourceDestinationString: l,
            resourceTitleString: l,
            setextHeading: o(Tn),
            strong: o(Hi),
            thematicBreak: o(Vi)
        },
        exit: {
            atxHeading: c(),
            atxHeadingSequence: v,
            autolink: c(),
            autolinkEmail: _e,
            autolinkProtocol: Ee,
            blockQuote: c(),
            characterEscapeValue: H,
            characterReferenceMarkerHexadecimal: ye,
            characterReferenceMarkerNumeric: ye,
            characterReferenceValue: Z,
            characterReference: He,
            codeFenced: c(x),
            codeFencedFence: b,
            codeFencedFenceInfo: p,
            codeFencedFenceMeta: g,
            codeFlowValue: H,
            codeIndented: c(k),
            codeText: c(A),
            codeTextData: H,
            data: H,
            definition: c(),
            definitionDestinationString: z,
            definitionLabelString: R,
            definitionTitleString: C,
            emphasis: c(),
            hardBreakEscape: c(I),
            hardBreakTrailing: c(I),
            htmlFlow: c(U),
            htmlFlowData: H,
            htmlText: c(O),
            htmlTextData: H,
            image: c(X),
            label: pe,
            labelText: K,
            lineEnding: P,
            link: c(D),
            listItem: c(),
            listOrdered: c(),
            listUnordered: c(),
            paragraph: c(),
            referenceString: te,
            resourceDestinationString: d,
            resourceTitleString: Y,
            resource: ee,
            setextHeading: c(V),
            setextHeadingLineSequence: N,
            setextHeadingText: S,
            strong: c(),
            thematicBreak: c()
        }
    };
    Ai(t, (e || {}).mdastExtensions || []);
    const n = {};
    return r;

    function r(w) {
        let T = {
            type: "root",
            children: []
        };
        const F = {
                stack: [T],
                tokenStack: [],
                config: t,
                enter: s,
                exit: a,
                buffer: l,
                resume: u,
                data: n
            },
            j = [];
        let $ = -1;
        for (; ++$ < w.length;)
            if (w[$][1].type === "listOrdered" || w[$][1].type === "listUnordered")
                if (w[$][0] === "enter") j.push($);
                else {
                    const me = j.pop();
                    $ = i(w, me, $)
                } for ($ = -1; ++$ < w.length;) {
            const me = t[w[$][0]];
            Ti.call(me, w[$][1].type) && me[w[$][1].type].call(Object.assign({
                sliceSerialize: w[$][2].sliceSerialize
            }, F), w[$][1])
        }
        if (F.tokenStack.length > 0) {
            const me = F.tokenStack[F.tokenStack.length - 1];
            (me[1] || mr).call(F, void 0, me[0])
        }
        for (T.position = {
                start: Ce(w.length > 0 ? w[0][1].start : {
                    line: 1,
                    column: 1,
                    offset: 0
                }),
                end: Ce(w.length > 0 ? w[w.length - 2][1].end : {
                    line: 1,
                    column: 1,
                    offset: 0
                })
            }, $ = -1; ++$ < t.transforms.length;) T = t.transforms[$](T) || T;
        return T
    }

    function i(w, T, F) {
        let j = T - 1,
            $ = -1,
            me = !1,
            Ae, ke, qe, Ve;
        for (; ++j <= F;) {
            const ue = w[j];
            switch (ue[1].type) {
                case "listUnordered":
                case "listOrdered":
                case "blockQuote": {
                    ue[0] === "enter" ? $++ : $--, Ve = void 0;
                    break
                }
                case "lineEndingBlank": {
                    ue[0] === "enter" && (Ae && !Ve && !$ && !qe && (qe = j), Ve = void 0);
                    break
                }
                case "linePrefix":
                case "listItemValue":
                case "listItemMarker":
                case "listItemPrefix":
                case "listItemPrefixWhitespace":
                    break;
                default:
                    Ve = void 0
            }
            if (!$ && ue[0] === "enter" && ue[1].type === "listItemPrefix" || $ === -1 && ue[0] === "exit" && (ue[1].type === "listUnordered" || ue[1].type === "listOrdered")) {
                if (Ae) {
                    let Ne = j;
                    for (ke = void 0; Ne--;) {
                        const Se = w[Ne];
                        if (Se[1].type === "lineEnding" || Se[1].type === "lineEndingBlank") {
                            if (Se[0] === "exit") continue;
                            ke && (w[ke][1].type = "lineEndingBlank", me = !0), Se[1].type = "lineEnding", ke = Ne
                        } else if (!(Se[1].type === "linePrefix" || Se[1].type === "blockQuotePrefix" || Se[1].type === "blockQuotePrefixWhitespace" || Se[1].type === "blockQuoteMarker" || Se[1].type === "listItemIndent")) break
                    }
                    qe && (!ke || qe < ke) && (Ae._spread = !0), Ae.end = Object.assign({}, ke ? w[ke][1].start : ue[1].end), w.splice(ke || j, 0, ["exit", Ae, ue[2]]), j++, F++
                }
                if (ue[1].type === "listItemPrefix") {
                    const Ne = {
                        type: "listItem",
                        _spread: !1,
                        start: Object.assign({}, ue[1].start),
                        end: void 0
                    };
                    Ae = Ne, w.splice(j, 0, ["enter", Ne, ue[2]]), j++, F++, qe = void 0, Ve = !0
                }
            }
        }
        return w[T][1]._spread = me, F
    }

    function o(w, T) {
        return F;

        function F(j) {
            s.call(this, w(j), j), T && T.call(this, j)
        }
    }

    function l() {
        this.stack.push({
            type: "fragment",
            children: []
        })
    }

    function s(w, T, F) {
        this.stack[this.stack.length - 1].children.push(w), this.stack.push(w), this.tokenStack.push([T, F || void 0]), w.position = {
            start: Ce(T.start),
            end: void 0
        }
    }

    function c(w) {
        return T;

        function T(F) {
            w && w.call(this, F), a.call(this, F)
        }
    }

    function a(w, T) {
        const F = this.stack.pop(),
            j = this.tokenStack.pop();
        if (j) j[0].type !== w.type && (T ? T.call(this, w, j[0]) : (j[1] || mr).call(this, w, j[0]));
        else throw new Error("Cannot close `" + w.type + "` (" + Ye({
            start: w.start,
            end: w.end
        }) + "): it’s not open");
        F.position.end = Ce(w.end)
    }

    function u() {
        return ms(this.stack.pop())
    }

    function f() {
        this.data.expectingFirstListItemValue = !0
    }

    function h(w) {
        if (this.data.expectingFirstListItemValue) {
            const T = this.stack[this.stack.length - 2];
            T.start = Number.parseInt(this.sliceSerialize(w), 10), this.data.expectingFirstListItemValue = void 0
        }
    }

    function p() {
        const w = this.resume(),
            T = this.stack[this.stack.length - 1];
        T.lang = w
    }

    function g() {
        const w = this.resume(),
            T = this.stack[this.stack.length - 1];
        T.meta = w
    }

    function b() {
        this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0)
    }

    function x() {
        const w = this.resume(),
            T = this.stack[this.stack.length - 1];
        T.value = w.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0
    }

    function k() {
        const w = this.resume(),
            T = this.stack[this.stack.length - 1];
        T.value = w.replace(/(\r?\n|\r)$/g, "")
    }

    function R(w) {
        const T = this.resume(),
            F = this.stack[this.stack.length - 1];
        F.label = T, F.identifier = Be(this.sliceSerialize(w)).toLowerCase()
    }

    function C() {
        const w = this.resume(),
            T = this.stack[this.stack.length - 1];
        T.title = w
    }

    function z() {
        const w = this.resume(),
            T = this.stack[this.stack.length - 1];
        T.url = w
    }

    function v(w) {
        const T = this.stack[this.stack.length - 1];
        if (!T.depth) {
            const F = this.sliceSerialize(w).length;
            T.depth = F
        }
    }

    function S() {
        this.data.setextHeadingSlurpLineEnding = !0
    }

    function N(w) {
        const T = this.stack[this.stack.length - 1];
        T.depth = this.sliceSerialize(w).codePointAt(0) === 61 ? 1 : 2
    }

    function V() {
        this.data.setextHeadingSlurpLineEnding = void 0
    }

    function M(w) {
        const F = this.stack[this.stack.length - 1].children;
        let j = F[F.length - 1];
        (!j || j.type !== "text") && (j = qi(), j.position = {
            start: Ce(w.start),
            end: void 0
        }, F.push(j)), this.stack.push(j)
    }

    function H(w) {
        const T = this.stack.pop();
        T.value += this.sliceSerialize(w), T.position.end = Ce(w.end)
    }

    function P(w) {
        const T = this.stack[this.stack.length - 1];
        if (this.data.atHardBreak) {
            const F = T.children[T.children.length - 1];
            F.position.end = Ce(w.end), this.data.atHardBreak = void 0;
            return
        }!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(T.type) && (M.call(this, w), H.call(this, w))
    }

    function I() {
        this.data.atHardBreak = !0
    }

    function U() {
        const w = this.resume(),
            T = this.stack[this.stack.length - 1];
        T.value = w
    }

    function O() {
        const w = this.resume(),
            T = this.stack[this.stack.length - 1];
        T.value = w
    }

    function A() {
        const w = this.resume(),
            T = this.stack[this.stack.length - 1];
        T.value = w
    }

    function D() {
        const w = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const T = this.data.referenceType || "shortcut";
            w.type += "Reference", w.referenceType = T, delete w.url, delete w.title
        } else delete w.identifier, delete w.label;
        this.data.referenceType = void 0
    }

    function X() {
        const w = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const T = this.data.referenceType || "shortcut";
            w.type += "Reference", w.referenceType = T, delete w.url, delete w.title
        } else delete w.identifier, delete w.label;
        this.data.referenceType = void 0
    }

    function K(w) {
        const T = this.sliceSerialize(w),
            F = this.stack[this.stack.length - 2];
        F.label = du(T), F.identifier = Be(T).toLowerCase()
    }

    function pe() {
        const w = this.stack[this.stack.length - 1],
            T = this.resume(),
            F = this.stack[this.stack.length - 1];
        if (this.data.inReference = !0, F.type === "link") {
            const j = w.children;
            F.children = j
        } else F.alt = T
    }

    function d() {
        const w = this.resume(),
            T = this.stack[this.stack.length - 1];
        T.url = w
    }

    function Y() {
        const w = this.resume(),
            T = this.stack[this.stack.length - 1];
        T.title = w
    }

    function ee() {
        this.data.inReference = void 0
    }

    function m() {
        this.data.referenceType = "collapsed"
    }

    function te(w) {
        const T = this.resume(),
            F = this.stack[this.stack.length - 1];
        F.label = T, F.identifier = Be(this.sliceSerialize(w)).toLowerCase(), this.data.referenceType = "full"
    }

    function ye(w) {
        this.data.characterReferenceType = w.type
    }

    function Z(w) {
        const T = this.sliceSerialize(w),
            F = this.data.characterReferenceType;
        let j;
        F ? (j = mi(T, F === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : j = yn(T);
        const $ = this.stack[this.stack.length - 1];
        $.value += j
    }

    function He(w) {
        const T = this.stack.pop();
        T.position.end = Ce(w.end)
    }

    function Ee(w) {
        H.call(this, w);
        const T = this.stack[this.stack.length - 1];
        T.url = this.sliceSerialize(w)
    }

    function _e(w) {
        H.call(this, w);
        const T = this.stack[this.stack.length - 1];
        T.url = "mailto:" + this.sliceSerialize(w)
    }

    function Le() {
        return {
            type: "blockquote",
            children: []
        }
    }

    function st() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        }
    }

    function zi() {
        return {
            type: "inlineCode",
            value: ""
        }
    }

    function Bi() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        }
    }

    function vi() {
        return {
            type: "emphasis",
            children: []
        }
    }

    function Tn() {
        return {
            type: "heading",
            depth: 0,
            children: []
        }
    }

    function An() {
        return {
            type: "break"
        }
    }

    function Rn() {
        return {
            type: "html",
            value: ""
        }
    }

    function Mi() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        }
    }

    function In() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        }
    }

    function On(w) {
        return {
            type: "list",
            ordered: w.type === "listOrdered",
            start: null,
            spread: w._spread,
            children: []
        }
    }

    function ji(w) {
        return {
            type: "listItem",
            spread: w._spread,
            checked: null,
            children: []
        }
    }

    function Ui() {
        return {
            type: "paragraph",
            children: []
        }
    }

    function Hi() {
        return {
            type: "strong",
            children: []
        }
    }

    function qi() {
        return {
            type: "text",
            value: ""
        }
    }

    function Vi() {
        return {
            type: "thematicBreak"
        }
    }
}

function Ce(e) {
    return {
        line: e.line,
        column: e.column,
        offset: e.offset
    }
}

function Ai(e, t) {
    let n = -1;
    for (; ++n < t.length;) {
        const r = t[n];
        Array.isArray(r) ? Ai(e, r) : xu(e, r)
    }
}

function xu(e, t) {
    let n;
    for (n in t)
        if (Ti.call(t, n)) switch (n) {
            case "canContainEols": {
                const r = t[n];
                r && e[n].push(...r);
                break
            }
            case "transforms": {
                const r = t[n];
                r && e[n].push(...r);
                break
            }
            case "enter":
            case "exit": {
                const r = t[n];
                r && Object.assign(e[n], r);
                break
            }
        }
}

function mr(e, t) {
    throw e ? new Error("Cannot close `" + e.type + "` (" + Ye({
        start: e.start,
        end: e.end
    }) + "): a different token (`" + t.type + "`, " + Ye({
        start: t.start,
        end: t.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Ye({
        start: t.start,
        end: t.end
    }) + ") is still open")
}

function bu(e) {
    const t = this;
    t.parser = n;

    function n(r) {
        return gu(r, {
            ...t.data("settings"),
            ...e,
            extensions: t.data("micromarkExtensions") || [],
            mdastExtensions: t.data("fromMarkdownExtensions") || []
        })
    }
}

function wu(e, t) {
    const n = {
        type: "element",
        tagName: "blockquote",
        properties: {},
        children: e.wrap(e.all(t), !0)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function ku(e, t) {
    const n = {
        type: "element",
        tagName: "br",
        properties: {},
        children: []
    };
    return e.patch(t, n), [e.applyData(t, n), {
        type: "text",
        value: `
`
    }]
}

function Su(e, t) {
    const n = t.value ? t.value + `
` : "",
        r = {},
        i = t.lang ? t.lang.split(/\s+/) : [];
    i.length > 0 && (r.className = ["language-" + i[0]]);
    let o = {
        type: "element",
        tagName: "code",
        properties: r,
        children: [{
            type: "text",
            value: n
        }]
    };
    return t.meta && (o.data = {
        meta: t.meta
    }), e.patch(t, o), o = e.applyData(t, o), o = {
        type: "element",
        tagName: "pre",
        properties: {},
        children: [o]
    }, e.patch(t, o), o
}

function Eu(e, t) {
    const n = {
        type: "element",
        tagName: "del",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function Cu(e, t) {
    const n = {
        type: "element",
        tagName: "em",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function Tu(e, t) {
    const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
        r = String(t.identifier).toUpperCase(),
        i = Ue(r.toLowerCase()),
        o = e.footnoteOrder.indexOf(r);
    let l, s = e.footnoteCounts.get(r);
    s === void 0 ? (s = 0, e.footnoteOrder.push(r), l = e.footnoteOrder.length) : l = o + 1, s += 1, e.footnoteCounts.set(r, s);
    const c = {
        type: "element",
        tagName: "a",
        properties: {
            href: "#" + n + "fn-" + i,
            id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
            dataFootnoteRef: !0,
            ariaDescribedBy: ["footnote-label"]
        },
        children: [{
            type: "text",
            value: String(l)
        }]
    };
    e.patch(t, c);
    const a = {
        type: "element",
        tagName: "sup",
        properties: {},
        children: [c]
    };
    return e.patch(t, a), e.applyData(t, a)
}

function Au(e, t) {
    const n = {
        type: "element",
        tagName: "h" + t.depth,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function Ru(e, t) {
    if (e.options.allowDangerousHtml) {
        const n = {
            type: "raw",
            value: t.value
        };
        return e.patch(t, n), e.applyData(t, n)
    }
}

function Ri(e, t) {
    const n = t.referenceType;
    let r = "]";
    if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
        type: "text",
        value: "![" + t.alt + r
    }];
    const i = e.all(t),
        o = i[0];
    o && o.type === "text" ? o.value = "[" + o.value : i.unshift({
        type: "text",
        value: "["
    });
    const l = i[i.length - 1];
    return l && l.type === "text" ? l.value += r : i.push({
        type: "text",
        value: r
    }), i
}

function Iu(e, t) {
    const n = String(t.identifier).toUpperCase(),
        r = e.definitionById.get(n);
    if (!r) return Ri(e, t);
    const i = {
        src: Ue(r.url || ""),
        alt: t.alt
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const o = {
        type: "element",
        tagName: "img",
        properties: i,
        children: []
    };
    return e.patch(t, o), e.applyData(t, o)
}

function Ou(e, t) {
    const n = {
        src: Ue(t.url)
    };
    t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = {
        type: "element",
        tagName: "img",
        properties: n,
        children: []
    };
    return e.patch(t, r), e.applyData(t, r)
}

function Pu(e, t) {
    const n = {
        type: "text",
        value: t.value.replace(/\r?\n|\r/g, " ")
    };
    e.patch(t, n);
    const r = {
        type: "element",
        tagName: "code",
        properties: {},
        children: [n]
    };
    return e.patch(t, r), e.applyData(t, r)
}

function _u(e, t) {
    const n = String(t.identifier).toUpperCase(),
        r = e.definitionById.get(n);
    if (!r) return Ri(e, t);
    const i = {
        href: Ue(r.url || "")
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const o = {
        type: "element",
        tagName: "a",
        properties: i,
        children: e.all(t)
    };
    return e.patch(t, o), e.applyData(t, o)
}

function Lu(e, t) {
    const n = {
        href: Ue(t.url)
    };
    t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = {
        type: "element",
        tagName: "a",
        properties: n,
        children: e.all(t)
    };
    return e.patch(t, r), e.applyData(t, r)
}

function Nu(e, t, n) {
    const r = e.all(t),
        i = n ? Du(n) : Ii(t),
        o = {},
        l = [];
    if (typeof t.checked == "boolean") {
        const u = r[0];
        let f;
        u && u.type === "element" && u.tagName === "p" ? f = u : (f = {
            type: "element",
            tagName: "p",
            properties: {},
            children: []
        }, r.unshift(f)), f.children.length > 0 && f.children.unshift({
            type: "text",
            value: " "
        }), f.children.unshift({
            type: "element",
            tagName: "input",
            properties: {
                type: "checkbox",
                checked: t.checked,
                disabled: !0
            },
            children: []
        }), o.className = ["task-list-item"]
    }
    let s = -1;
    for (; ++s < r.length;) {
        const u = r[s];
        (i || s !== 0 || u.type !== "element" || u.tagName !== "p") && l.push({
            type: "text",
            value: `
`
        }), u.type === "element" && u.tagName === "p" && !i ? l.push(...u.children) : l.push(u)
    }
    const c = r[r.length - 1];
    c && (i || c.type !== "element" || c.tagName !== "p") && l.push({
        type: "text",
        value: `
`
    });
    const a = {
        type: "element",
        tagName: "li",
        properties: o,
        children: l
    };
    return e.patch(t, a), e.applyData(t, a)
}

function Du(e) {
    let t = !1;
    if (e.type === "list") {
        t = e.spread || !1;
        const n = e.children;
        let r = -1;
        for (; !t && ++r < n.length;) t = Ii(n[r])
    }
    return t
}

function Ii(e) {
    const t = e.spread;
    return t ?? e.children.length > 1
}

function Fu(e, t) {
    const n = {},
        r = e.all(t);
    let i = -1;
    for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
        const l = r[i];
        if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
            n.className = ["contains-task-list"];
            break
        }
    }
    const o = {
        type: "element",
        tagName: t.ordered ? "ol" : "ul",
        properties: n,
        children: e.wrap(r, !0)
    };
    return e.patch(t, o), e.applyData(t, o)
}

function zu(e, t) {
    const n = {
        type: "element",
        tagName: "p",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function Bu(e, t) {
    const n = {
        type: "root",
        children: e.wrap(e.all(t))
    };
    return e.patch(t, n), e.applyData(t, n)
}

function vu(e, t) {
    const n = {
        type: "element",
        tagName: "strong",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function Mu(e, t) {
    const n = e.all(t),
        r = n.shift(),
        i = [];
    if (r) {
        const l = {
            type: "element",
            tagName: "thead",
            properties: {},
            children: e.wrap([r], !0)
        };
        e.patch(t.children[0], l), i.push(l)
    }
    if (n.length > 0) {
        const l = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: e.wrap(n, !0)
            },
            s = hn(t.children[1]),
            c = ai(t.children[t.children.length - 1]);
        s && c && (l.position = {
            start: s,
            end: c
        }), i.push(l)
    }
    const o = {
        type: "element",
        tagName: "table",
        properties: {},
        children: e.wrap(i, !0)
    };
    return e.patch(t, o), e.applyData(t, o)
}

function ju(e, t, n) {
    const r = n ? n.children : void 0,
        o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
        l = n && n.type === "table" ? n.align : void 0,
        s = l ? l.length : t.children.length;
    let c = -1;
    const a = [];
    for (; ++c < s;) {
        const f = t.children[c],
            h = {},
            p = l ? l[c] : void 0;
        p && (h.align = p);
        let g = {
            type: "element",
            tagName: o,
            properties: h,
            children: []
        };
        f && (g.children = e.all(f), e.patch(f, g), g = e.applyData(f, g)), a.push(g)
    }
    const u = {
        type: "element",
        tagName: "tr",
        properties: {},
        children: e.wrap(a, !0)
    };
    return e.patch(t, u), e.applyData(t, u)
}

function Uu(e, t) {
    const n = {
        type: "element",
        tagName: "td",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}
const gr = 9,
    yr = 32;

function Hu(e) {
    const t = String(e),
        n = /\r?\n|\r/g;
    let r = n.exec(t),
        i = 0;
    const o = [];
    for (; r;) o.push(xr(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
    return o.push(xr(t.slice(i), i > 0, !1)), o.join("")
}

function xr(e, t, n) {
    let r = 0,
        i = e.length;
    if (t) {
        let o = e.codePointAt(r);
        for (; o === gr || o === yr;) r++, o = e.codePointAt(r)
    }
    if (n) {
        let o = e.codePointAt(i - 1);
        for (; o === gr || o === yr;) i--, o = e.codePointAt(i - 1)
    }
    return i > r ? e.slice(r, i) : ""
}

function qu(e, t) {
    const n = {
        type: "text",
        value: Hu(String(t.value))
    };
    return e.patch(t, n), e.applyData(t, n)
}

function Vu(e, t) {
    const n = {
        type: "element",
        tagName: "hr",
        properties: {},
        children: []
    };
    return e.patch(t, n), e.applyData(t, n)
}
const $u = {
    blockquote: wu,
    break: ku,
    code: Su,
    delete: Eu,
    emphasis: Cu,
    footnoteReference: Tu,
    heading: Au,
    html: Ru,
    imageReference: Iu,
    image: Ou,
    inlineCode: Pu,
    linkReference: _u,
    link: Lu,
    listItem: Nu,
    list: Fu,
    paragraph: zu,
    root: Bu,
    strong: vu,
    table: Mu,
    tableCell: Uu,
    tableRow: ju,
    text: qu,
    thematicBreak: Vu,
    toml: ct,
    yaml: ct,
    definition: ct,
    footnoteDefinition: ct
};

function ct() {}
const Oi = -1,
    At = 0,
    Ge = 1,
    xt = 2,
    wn = 3,
    kn = 4,
    Sn = 5,
    En = 6,
    Pi = 7,
    _i = 8,
    br = typeof self == "object" ? self : globalThis,
    Wu = (e, t) => {
        const n = (i, o) => (e.set(o, i), i),
            r = i => {
                if (e.has(i)) return e.get(i);
                const [o, l] = t[i];
                switch (o) {
                    case At:
                    case Oi:
                        return n(l, i);
                    case Ge: {
                        const s = n([], i);
                        for (const c of l) s.push(r(c));
                        return s
                    }
                    case xt: {
                        const s = n({}, i);
                        for (const [c, a] of l) s[r(c)] = r(a);
                        return s
                    }
                    case wn:
                        return n(new Date(l), i);
                    case kn: {
                        const {
                            source: s,
                            flags: c
                        } = l;
                        return n(new RegExp(s, c), i)
                    }
                    case Sn: {
                        const s = n(new Map, i);
                        for (const [c, a] of l) s.set(r(c), r(a));
                        return s
                    }
                    case En: {
                        const s = n(new Set, i);
                        for (const c of l) s.add(r(c));
                        return s
                    }
                    case Pi: {
                        const {
                            name: s,
                            message: c
                        } = l;
                        return n(new br[s](c), i)
                    }
                    case _i:
                        return n(BigInt(l), i);
                    case "BigInt":
                        return n(Object(BigInt(l)), i);
                    case "ArrayBuffer":
                        return n(new Uint8Array(l).buffer, l);
                    case "DataView": {
                        const {
                            buffer: s
                        } = new Uint8Array(l);
                        return n(new DataView(s), l)
                    }
                }
                return n(new br[o](l), i)
            };
        return r
    },
    wr = e => Wu(new Map, e)(0),
    Fe = "",
    {
        toString: Ju
    } = {},
    {
        keys: Xu
    } = Object,
    Ke = e => {
        const t = typeof e;
        if (t !== "object" || !e) return [At, t];
        const n = Ju.call(e).slice(8, -1);
        switch (n) {
            case "Array":
                return [Ge, Fe];
            case "Object":
                return [xt, Fe];
            case "Date":
                return [wn, Fe];
            case "RegExp":
                return [kn, Fe];
            case "Map":
                return [Sn, Fe];
            case "Set":
                return [En, Fe];
            case "DataView":
                return [Ge, n]
        }
        return n.includes("Array") ? [Ge, n] : n.includes("Error") ? [Pi, n] : [xt, n]
    },
    ft = ([e, t]) => e === At && (t === "function" || t === "symbol"),
    Ku = (e, t, n, r) => {
        const i = (l, s) => {
                const c = r.push(l) - 1;
                return n.set(s, c), c
            },
            o = l => {
                if (n.has(l)) return n.get(l);
                let [s, c] = Ke(l);
                switch (s) {
                    case At: {
                        let u = l;
                        switch (c) {
                            case "bigint":
                                s = _i, u = l.toString();
                                break;
                            case "function":
                            case "symbol":
                                if (e) throw new TypeError("unable to serialize " + c);
                                u = null;
                                break;
                            case "undefined":
                                return i([Oi], l)
                        }
                        return i([s, u], l)
                    }
                    case Ge: {
                        if (c) {
                            let h = l;
                            return c === "DataView" ? h = new Uint8Array(l.buffer) : c === "ArrayBuffer" && (h = new Uint8Array(l)), i([c, [...h]], l)
                        }
                        const u = [],
                            f = i([s, u], l);
                        for (const h of l) u.push(o(h));
                        return f
                    }
                    case xt: {
                        if (c) switch (c) {
                            case "BigInt":
                                return i([c, l.toString()], l);
                            case "Boolean":
                            case "Number":
                            case "String":
                                return i([c, l.valueOf()], l)
                        }
                        if (t && "toJSON" in l) return o(l.toJSON());
                        const u = [],
                            f = i([s, u], l);
                        for (const h of Xu(l))(e || !ft(Ke(l[h]))) && u.push([o(h), o(l[h])]);
                        return f
                    }
                    case wn:
                        return i([s, l.toISOString()], l);
                    case kn: {
                        const {
                            source: u,
                            flags: f
                        } = l;
                        return i([s, {
                            source: u,
                            flags: f
                        }], l)
                    }
                    case Sn: {
                        const u = [],
                            f = i([s, u], l);
                        for (const [h, p] of l)(e || !(ft(Ke(h)) || ft(Ke(p)))) && u.push([o(h), o(p)]);
                        return f
                    }
                    case En: {
                        const u = [],
                            f = i([s, u], l);
                        for (const h of l)(e || !ft(Ke(h))) && u.push(o(h));
                        return f
                    }
                }
                const {
                    message: a
                } = l;
                return i([s, {
                    name: c,
                    message: a
                }], l)
            };
        return o
    },
    kr = (e, {
        json: t,
        lossy: n
    } = {}) => {
        const r = [];
        return Ku(!(t || n), !!t, new Map, r)(e), r
    },
    bt = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? wr(kr(e, t)) : structuredClone(e) : (e, t) => wr(kr(e, t));

function Yu(e, t) {
    const n = [{
        type: "text",
        value: "↩"
    }];
    return t > 1 && n.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{
            type: "text",
            value: String(t)
        }]
    }), n
}

function Qu(e, t) {
    return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "")
}

function Gu(e) {
    const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
        n = e.options.footnoteBackContent || Yu,
        r = e.options.footnoteBackLabel || Qu,
        i = e.options.footnoteLabel || "Footnotes",
        o = e.options.footnoteLabelTagName || "h2",
        l = e.options.footnoteLabelProperties || {
            className: ["sr-only"]
        },
        s = [];
    let c = -1;
    for (; ++c < e.footnoteOrder.length;) {
        const a = e.footnoteById.get(e.footnoteOrder[c]);
        if (!a) continue;
        const u = e.all(a),
            f = String(a.identifier).toUpperCase(),
            h = Ue(f.toLowerCase());
        let p = 0;
        const g = [],
            b = e.footnoteCounts.get(f);
        for (; b !== void 0 && ++p <= b;) {
            g.length > 0 && g.push({
                type: "text",
                value: " "
            });
            let R = typeof n == "string" ? n : n(c, p);
            typeof R == "string" && (R = {
                type: "text",
                value: R
            }), g.push({
                type: "element",
                tagName: "a",
                properties: {
                    href: "#" + t + "fnref-" + h + (p > 1 ? "-" + p : ""),
                    dataFootnoteBackref: "",
                    ariaLabel: typeof r == "string" ? r : r(c, p),
                    className: ["data-footnote-backref"]
                },
                children: Array.isArray(R) ? R : [R]
            })
        }
        const x = u[u.length - 1];
        if (x && x.type === "element" && x.tagName === "p") {
            const R = x.children[x.children.length - 1];
            R && R.type === "text" ? R.value += " " : x.children.push({
                type: "text",
                value: " "
            }), x.children.push(...g)
        } else u.push(...g);
        const k = {
            type: "element",
            tagName: "li",
            properties: {
                id: t + "fn-" + h
            },
            children: e.wrap(u, !0)
        };
        e.patch(a, k), s.push(k)
    }
    if (s.length !== 0) return {
        type: "element",
        tagName: "section",
        properties: {
            dataFootnotes: !0,
            className: ["footnotes"]
        },
        children: [{
            type: "element",
            tagName: o,
            properties: {
                ...bt(l),
                id: "footnote-label"
            },
            children: [{
                type: "text",
                value: i
            }]
        }, {
            type: "text",
            value: `
`
        }, {
            type: "element",
            tagName: "ol",
            properties: {},
            children: e.wrap(s, !0)
        }, {
            type: "text",
            value: `
`
        }]
    }
}
const Li = (function(e) {
    if (e == null) return nc;
    if (typeof e == "function") return Rt(e);
    if (typeof e == "object") return Array.isArray(e) ? Zu(e) : ec(e);
    if (typeof e == "string") return tc(e);
    throw new Error("Expected function, string, or object as test")
});

function Zu(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.length;) t[n] = Li(e[n]);
    return Rt(r);

    function r(...i) {
        let o = -1;
        for (; ++o < t.length;)
            if (t[o].apply(this, i)) return !0;
        return !1
    }
}

function ec(e) {
    const t = e;
    return Rt(n);

    function n(r) {
        const i = r;
        let o;
        for (o in e)
            if (i[o] !== t[o]) return !1;
        return !0
    }
}

function tc(e) {
    return Rt(t);

    function t(n) {
        return n && n.type === e
    }
}

function Rt(e) {
    return t;

    function t(n, r, i) {
        return !!(rc(n) && e.call(this, n, typeof r == "number" ? r : void 0, i || void 0))
    }
}

function nc() {
    return !0
}

function rc(e) {
    return e !== null && typeof e == "object" && "type" in e
}
const Ni = [],
    ic = !0,
    Sr = !1,
    oc = "skip";

function lc(e, t, n, r) {
    let i;
    typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
    const o = Li(i),
        l = r ? -1 : 1;
    s(e, void 0, [])();

    function s(c, a, u) {
        const f = c && typeof c == "object" ? c : {};
        if (typeof f.type == "string") {
            const p = typeof f.tagName == "string" ? f.tagName : typeof f.name == "string" ? f.name : void 0;
            Object.defineProperty(h, "name", {
                value: "node (" + (c.type + (p ? "<" + p + ">" : "")) + ")"
            })
        }
        return h;

        function h() {
            let p = Ni,
                g, b, x;
            if ((!t || o(c, a, u[u.length - 1] || void 0)) && (p = sc(n(c, u)), p[0] === Sr)) return p;
            if ("children" in c && c.children) {
                const k = c;
                if (k.children && p[0] !== oc)
                    for (b = (r ? k.children.length : -1) + l, x = u.concat(k); b > -1 && b < k.children.length;) {
                        const R = k.children[b];
                        if (g = s(R, b, x)(), g[0] === Sr) return g;
                        b = typeof g[1] == "number" ? g[1] : b + l
                    }
            }
            return p
        }
    }
}

function sc(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [ic, e] : e == null ? Ni : [e]
}

function Di(e, t, n, r) {
    let i, o, l;
    typeof t == "function" && typeof n != "function" ? (o = void 0, l = t, i = n) : (o = t, l = n, i = r), lc(e, o, s, i);

    function s(c, a) {
        const u = a[a.length - 1],
            f = u ? u.children.indexOf(c) : void 0;
        return l(c, f, u)
    }
}
const nn = {}.hasOwnProperty,
    ac = {};

function uc(e, t) {
    const n = t || ac,
        r = new Map,
        i = new Map,
        o = new Map,
        l = {
            ...$u,
            ...n.handlers
        },
        s = {
            all: a,
            applyData: fc,
            definitionById: r,
            footnoteById: i,
            footnoteCounts: o,
            footnoteOrder: [],
            handlers: l,
            one: c,
            options: n,
            patch: cc,
            wrap: hc
        };
    return Di(e, function(u) {
        if (u.type === "definition" || u.type === "footnoteDefinition") {
            const f = u.type === "definition" ? r : i,
                h = String(u.identifier).toUpperCase();
            f.has(h) || f.set(h, u)
        }
    }), s;

    function c(u, f) {
        const h = u.type,
            p = s.handlers[h];
        if (nn.call(s.handlers, h) && p) return p(s, u, f);
        if (s.options.passThrough && s.options.passThrough.includes(h)) {
            if ("children" in u) {
                const {
                    children: b,
                    ...x
                } = u, k = bt(x);
                return k.children = s.all(u), k
            }
            return bt(u)
        }
        return (s.options.unknownHandler || pc)(s, u, f)
    }

    function a(u) {
        const f = [];
        if ("children" in u) {
            const h = u.children;
            let p = -1;
            for (; ++p < h.length;) {
                const g = s.one(h[p], u);
                if (g) {
                    if (p && h[p - 1].type === "break" && (!Array.isArray(g) && g.type === "text" && (g.value = Er(g.value)), !Array.isArray(g) && g.type === "element")) {
                        const b = g.children[0];
                        b && b.type === "text" && (b.value = Er(b.value))
                    }
                    Array.isArray(g) ? f.push(...g) : f.push(g)
                }
            }
        }
        return f
    }
}

function cc(e, t) {
    e.position && (t.position = Jl(e))
}

function fc(e, t) {
    let n = t;
    if (e && e.data) {
        const r = e.data.hName,
            i = e.data.hChildren,
            o = e.data.hProperties;
        if (typeof r == "string")
            if (n.type === "element") n.tagName = r;
            else {
                const l = "children" in n ? n.children : [n];
                n = {
                    type: "element",
                    tagName: r,
                    properties: {},
                    children: l
                }
            } n.type === "element" && o && Object.assign(n.properties, bt(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i)
    }
    return n
}

function pc(e, t) {
    const n = t.data || {},
        r = "value" in t && !(nn.call(n, "hProperties") || nn.call(n, "hChildren")) ? {
            type: "text",
            value: t.value
        } : {
            type: "element",
            tagName: "div",
            properties: {},
            children: e.all(t)
        };
    return e.patch(t, r), e.applyData(t, r)
}

function hc(e, t) {
    const n = [];
    let r = -1;
    for (t && n.push({
            type: "text",
            value: `
`
        }); ++r < e.length;) r && n.push({
        type: "text",
        value: `
`
    }), n.push(e[r]);
    return t && e.length > 0 && n.push({
        type: "text",
        value: `
`
    }), n
}

function Er(e) {
    let t = 0,
        n = e.charCodeAt(t);
    for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
    return e.slice(t)
}

function Cr(e, t) {
    const n = uc(e, t),
        r = n.one(e, void 0),
        i = Gu(n),
        o = Array.isArray(r) ? {
            type: "root",
            children: r
        } : r || {
            type: "root",
            children: []
        };
    return i && o.children.push({
        type: "text",
        value: `
`
    }, i), o
}

function dc(e, t) {
    return e && "run" in e ? async function(n, r) {
        const i = Cr(n, {
            file: r,
            ...t
        });
        await e.run(i, r)
    }: function(n, r) {
        return Cr(n, {
            file: r,
            ...e || t
        })
    }
}

function Tr(e) {
    if (e) throw e
}
var Bt, Ar;

function mc() {
    if (Ar) return Bt;
    Ar = 1;
    var e = Object.prototype.hasOwnProperty,
        t = Object.prototype.toString,
        n = Object.defineProperty,
        r = Object.getOwnPropertyDescriptor,
        i = function(a) {
            return typeof Array.isArray == "function" ? Array.isArray(a) : t.call(a) === "[object Array]"
        },
        o = function(a) {
            if (!a || t.call(a) !== "[object Object]") return !1;
            var u = e.call(a, "constructor"),
                f = a.constructor && a.constructor.prototype && e.call(a.constructor.prototype, "isPrototypeOf");
            if (a.constructor && !u && !f) return !1;
            var h;
            for (h in a);
            return typeof h > "u" || e.call(a, h)
        },
        l = function(a, u) {
            n && u.name === "__proto__" ? n(a, u.name, {
                enumerable: !0,
                configurable: !0,
                value: u.newValue,
                writable: !0
            }) : a[u.name] = u.newValue
        },
        s = function(a, u) {
            if (u === "__proto__")
                if (e.call(a, u)) {
                    if (r) return r(a, u).value
                } else return;
            return a[u]
        };
    return Bt = function c() {
        var a, u, f, h, p, g, b = arguments[0],
            x = 1,
            k = arguments.length,
            R = !1;
        for (typeof b == "boolean" && (R = b, b = arguments[1] || {}, x = 2), (b == null || typeof b != "object" && typeof b != "function") && (b = {}); x < k; ++x)
            if (a = arguments[x], a != null)
                for (u in a) f = s(b, u), h = s(a, u), b !== h && (R && h && (o(h) || (p = i(h))) ? (p ? (p = !1, g = f && i(f) ? f : []) : g = f && o(f) ? f : {}, l(b, {
                    name: u,
                    newValue: c(R, g, h)
                })) : typeof h < "u" && l(b, {
                    name: u,
                    newValue: h
                }));
        return b
    }, Bt
}
var gc = mc();
const vt = Lr(gc);

function rn(e) {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}

function yc() {
    const e = [],
        t = {
            run: n,
            use: r
        };
    return t;

    function n(...i) {
        let o = -1;
        const l = i.pop();
        if (typeof l != "function") throw new TypeError("Expected function as last argument, not " + l);
        s(null, ...i);

        function s(c, ...a) {
            const u = e[++o];
            let f = -1;
            if (c) {
                l(c);
                return
            }
            for (; ++f < i.length;)(a[f] === null || a[f] === void 0) && (a[f] = i[f]);
            i = a, u ? xc(u, s)(...a) : l(null, ...a)
        }
    }

    function r(i) {
        if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
        return e.push(i), t
    }
}

function xc(e, t) {
    let n;
    return r;

    function r(...l) {
        const s = e.length > l.length;
        let c;
        s && l.push(i);
        try {
            c = e.apply(this, l)
        } catch (a) {
            const u = a;
            if (s && n) throw u;
            return i(u)
        }
        s || (c && c.then && typeof c.then == "function" ? c.then(o, i) : c instanceof Error ? i(c) : o(c))
    }

    function i(l, ...s) {
        n || (n = !0, t(l, ...s))
    }

    function o(l) {
        i(null, l)
    }
}
const xe = {
    basename: bc,
    dirname: wc,
    extname: kc,
    join: Sc,
    sep: "/"
};

function bc(e, t) {
    if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
    lt(e);
    let n = 0,
        r = -1,
        i = e.length,
        o;
    if (t === void 0 || t.length === 0 || t.length > e.length) {
        for (; i--;)
            if (e.codePointAt(i) === 47) {
                if (o) {
                    n = i + 1;
                    break
                }
            } else r < 0 && (o = !0, r = i + 1);
        return r < 0 ? "" : e.slice(n, r)
    }
    if (t === e) return "";
    let l = -1,
        s = t.length - 1;
    for (; i--;)
        if (e.codePointAt(i) === 47) {
            if (o) {
                n = i + 1;
                break
            }
        } else l < 0 && (o = !0, l = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = l));
    return n === r ? r = l : r < 0 && (r = e.length), e.slice(n, r)
}

function wc(e) {
    if (lt(e), e.length === 0) return ".";
    let t = -1,
        n = e.length,
        r;
    for (; --n;)
        if (e.codePointAt(n) === 47) {
            if (r) {
                t = n;
                break
            }
        } else r || (r = !0);
    return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t)
}

function kc(e) {
    lt(e);
    let t = e.length,
        n = -1,
        r = 0,
        i = -1,
        o = 0,
        l;
    for (; t--;) {
        const s = e.codePointAt(t);
        if (s === 47) {
            if (l) {
                r = t + 1;
                break
            }
            continue
        }
        n < 0 && (l = !0, n = t + 1), s === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1)
    }
    return i < 0 || n < 0 || o === 0 || o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n)
}

function Sc(...e) {
    let t = -1,
        n;
    for (; ++t < e.length;) lt(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
    return n === void 0 ? "." : Ec(n)
}

function Ec(e) {
    lt(e);
    const t = e.codePointAt(0) === 47;
    let n = Cc(e, !t);
    return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n
}

function Cc(e, t) {
    let n = "",
        r = 0,
        i = -1,
        o = 0,
        l = -1,
        s, c;
    for (; ++l <= e.length;) {
        if (l < e.length) s = e.codePointAt(l);
        else {
            if (s === 47) break;
            s = 47
        }
        if (s === 47) {
            if (!(i === l - 1 || o === 1))
                if (i !== l - 1 && o === 2) {
                    if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
                        if (n.length > 2) {
                            if (c = n.lastIndexOf("/"), c !== n.length - 1) {
                                c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = l, o = 0;
                                continue
                            }
                        } else if (n.length > 0) {
                            n = "", r = 0, i = l, o = 0;
                            continue
                        }
                    }
                    t && (n = n.length > 0 ? n + "/.." : "..", r = 2)
                } else n.length > 0 ? n += "/" + e.slice(i + 1, l) : n = e.slice(i + 1, l), r = l - i - 1;
            i = l, o = 0
        } else s === 46 && o > -1 ? o++ : o = -1
    }
    return n
}

function lt(e) {
    if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
}
const Tc = {
    cwd: Ac
};

function Ac() {
    return "/"
}

function on(e) {
    return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0)
}

function Rc(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!on(e)) {
        const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
        throw t.code = "ERR_INVALID_ARG_TYPE", t
    }
    if (e.protocol !== "file:") {
        const t = new TypeError("The URL must be of scheme file");
        throw t.code = "ERR_INVALID_URL_SCHEME", t
    }
    return Ic(e)
}

function Ic(e) {
    if (e.hostname !== "") {
        const r = new TypeError('File URL host must be "localhost" or empty on darwin');
        throw r.code = "ERR_INVALID_FILE_URL_HOST", r
    }
    const t = e.pathname;
    let n = -1;
    for (; ++n < t.length;)
        if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
            const r = t.codePointAt(n + 2);
            if (r === 70 || r === 102) {
                const i = new TypeError("File URL path must not include encoded / characters");
                throw i.code = "ERR_INVALID_FILE_URL_PATH", i
            }
        } return decodeURIComponent(t)
}
const Mt = ["history", "path", "basename", "stem", "extname", "dirname"];
class Fi {
    constructor(t) {
        let n;
        t ? on(t) ? n = {
            path: t
        } : typeof t == "string" || Oc(t) ? n = {
            value: t
        } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Tc.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
        let r = -1;
        for (; ++r < Mt.length;) {
            const o = Mt[r];
            o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o])
        }
        let i;
        for (i in n) Mt.includes(i) || (this[i] = n[i])
    }
    get basename() {
        return typeof this.path == "string" ? xe.basename(this.path) : void 0
    }
    set basename(t) {
        Ut(t, "basename"), jt(t, "basename"), this.path = xe.join(this.dirname || "", t)
    }
    get dirname() {
        return typeof this.path == "string" ? xe.dirname(this.path) : void 0
    }
    set dirname(t) {
        Rr(this.basename, "dirname"), this.path = xe.join(t || "", this.basename)
    }
    get extname() {
        return typeof this.path == "string" ? xe.extname(this.path) : void 0
    }
    set extname(t) {
        if (jt(t, "extname"), Rr(this.dirname, "extname"), t) {
            if (t.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
            if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
        }
        this.path = xe.join(this.dirname, this.stem + (t || ""))
    }
    get path() {
        return this.history[this.history.length - 1]
    }
    set path(t) {
        on(t) && (t = Rc(t)), Ut(t, "path"), this.path !== t && this.history.push(t)
    }
    get stem() {
        return typeof this.path == "string" ? xe.basename(this.path, this.extname) : void 0
    }
    set stem(t) {
        Ut(t, "stem"), jt(t, "stem"), this.path = xe.join(this.dirname || "", t + (this.extname || ""))
    }
    fail(t, n, r) {
        const i = this.message(t, n, r);
        throw i.fatal = !0, i
    }
    info(t, n, r) {
        const i = this.message(t, n, r);
        return i.fatal = void 0, i
    }
    message(t, n, r) {
        const i = new re(t, n, r);
        return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i
    }
    toString(t) {
        return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value)
    }
}

function jt(e, t) {
    if (e && e.includes(xe.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + xe.sep + "`")
}

function Ut(e, t) {
    if (!e) throw new Error("`" + t + "` cannot be empty")
}

function Rr(e, t) {
    if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
}

function Oc(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e)
}
const Pc = (function(e) {
        const r = this.constructor.prototype,
            i = r[e],
            o = function() {
                return i.apply(o, arguments)
            };
        return Object.setPrototypeOf(o, r), o
    }),
    _c = {}.hasOwnProperty;
class Cn extends Pc {
    constructor() {
        super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = yc()
    }
    copy() {
        const t = new Cn;
        let n = -1;
        for (; ++n < this.attachers.length;) {
            const r = this.attachers[n];
            t.use(...r)
        }
        return t.data(vt(!0, {}, this.namespace)), t
    }
    data(t, n) {
        return typeof t == "string" ? arguments.length === 2 ? (Vt("data", this.frozen), this.namespace[t] = n, this) : _c.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Vt("data", this.frozen), this.namespace = t, this) : this.namespace
    }
    freeze() {
        if (this.frozen) return this;
        const t = this;
        for (; ++this.freezeIndex < this.attachers.length;) {
            const [n, ...r] = this.attachers[this.freezeIndex];
            if (r[0] === !1) continue;
            r[0] === !0 && (r[0] = void 0);
            const i = n.call(t, ...r);
            typeof i == "function" && this.transformers.use(i)
        }
        return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this
    }
    parse(t) {
        this.freeze();
        const n = pt(t),
            r = this.parser || this.Parser;
        return Ht("parse", r), r(String(n), n)
    }
    process(t, n) {
        const r = this;
        return this.freeze(), Ht("process", this.parser || this.Parser), qt("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);

        function i(o, l) {
            const s = pt(t),
                c = r.parse(s);
            r.run(c, s, function(u, f, h) {
                if (u || !f || !h) return a(u);
                const p = f,
                    g = r.stringify(p, h);
                Dc(g) ? h.value = g : h.result = g, a(u, h)
            });

            function a(u, f) {
                u || !f ? l(u) : o ? o(f) : n(void 0, f)
            }
        }
    }
    processSync(t) {
        let n = !1,
            r;
        return this.freeze(), Ht("processSync", this.parser || this.Parser), qt("processSync", this.compiler || this.Compiler), this.process(t, i), Or("processSync", "process", n), r;

        function i(o, l) {
            n = !0, Tr(o), r = l
        }
    }
    run(t, n, r) {
        Ir(t), this.freeze();
        const i = this.transformers;
        return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);

        function o(l, s) {
            const c = pt(n);
            i.run(t, c, a);

            function a(u, f, h) {
                const p = f || t;
                u ? s(u) : l ? l(p) : r(void 0, p, h)
            }
        }
    }
    runSync(t, n) {
        let r = !1,
            i;
        return this.run(t, n, o), Or("runSync", "run", r), i;

        function o(l, s) {
            Tr(l), i = s, r = !0
        }
    }
    stringify(t, n) {
        this.freeze();
        const r = pt(n),
            i = this.compiler || this.Compiler;
        return qt("stringify", i), Ir(t), i(t, r)
    }
    use(t, ...n) {
        const r = this.attachers,
            i = this.namespace;
        if (Vt("use", this.frozen), t != null)
            if (typeof t == "function") c(t, n);
            else if (typeof t == "object") Array.isArray(t) ? s(t) : l(t);
        else throw new TypeError("Expected usable value, not `" + t + "`");
        return this;

        function o(a) {
            if (typeof a == "function") c(a, []);
            else if (typeof a == "object")
                if (Array.isArray(a)) {
                    const [u, ...f] = a;
                    c(u, f)
                } else l(a);
            else throw new TypeError("Expected usable value, not `" + a + "`")
        }

        function l(a) {
            if (!("plugins" in a) && !("settings" in a)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
            s(a.plugins), a.settings && (i.settings = vt(!0, i.settings, a.settings))
        }

        function s(a) {
            let u = -1;
            if (a != null)
                if (Array.isArray(a))
                    for (; ++u < a.length;) {
                        const f = a[u];
                        o(f)
                    } else throw new TypeError("Expected a list of plugins, not `" + a + "`")
        }

        function c(a, u) {
            let f = -1,
                h = -1;
            for (; ++f < r.length;)
                if (r[f][0] === a) {
                    h = f;
                    break
                } if (h === -1) r.push([a, ...u]);
            else if (u.length > 0) {
                let [p, ...g] = u;
                const b = r[h][1];
                rn(b) && rn(p) && (p = vt(!0, b, p)), r[h] = [a, p, ...g]
            }
        }
    }
}
const Lc = new Cn().freeze();

function Ht(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `parser`")
}

function qt(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `compiler`")
}

function Vt(e, t) {
    if (t) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
}

function Ir(e) {
    if (!rn(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`")
}

function Or(e, t, n) {
    if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
}

function pt(e) {
    return Nc(e) ? e : new Fi(e)
}

function Nc(e) {
    return !!(e && typeof e == "object" && "message" in e && "messages" in e)
}

function Dc(e) {
    return typeof e == "string" || Fc(e)
}

function Fc(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e)
}
const zc = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
    Pr = [],
    _r = {
        allowDangerousHtml: !0
    },
    Bc = /^(https?|ircs?|mailto|xmpp)$/i,
    vc = [{
        from: "astPlugins",
        id: "remove-buggy-html-in-markdown-parser"
    }, {
        from: "allowDangerousHtml",
        id: "remove-buggy-html-in-markdown-parser"
    }, {
        from: "allowNode",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "allowElement"
    }, {
        from: "allowedTypes",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "allowedElements"
    }, {
        from: "className",
        id: "remove-classname"
    }, {
        from: "disallowedTypes",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "disallowedElements"
    }, {
        from: "escapeHtml",
        id: "remove-buggy-html-in-markdown-parser"
    }, {
        from: "includeElementIndex",
        id: "#remove-includeelementindex"
    }, {
        from: "includeNodeIndex",
        id: "change-includenodeindex-to-includeelementindex"
    }, {
        from: "linkTarget",
        id: "remove-linktarget"
    }, {
        from: "plugins",
        id: "change-plugins-to-remarkplugins",
        to: "remarkPlugins"
    }, {
        from: "rawSourcePos",
        id: "#remove-rawsourcepos"
    }, {
        from: "renderers",
        id: "change-renderers-to-components",
        to: "components"
    }, {
        from: "source",
        id: "change-source-to-children",
        to: "children"
    }, {
        from: "sourcePos",
        id: "#remove-sourcepos"
    }, {
        from: "transformImageUri",
        id: "#add-urltransform",
        to: "urlTransform"
    }, {
        from: "transformLinkUri",
        id: "#add-urltransform",
        to: "urlTransform"
    }];

function pf(e) {
    const t = Mc(e),
        n = jc(e);
    return Uc(t.runSync(t.parse(n), n), e)
}

function Mc(e) {
    const t = e.rehypePlugins || Pr,
        n = e.remarkPlugins || Pr,
        r = e.remarkRehypeOptions ? {
            ...e.remarkRehypeOptions,
            ..._r
        } : _r;
    return Lc().use(bu).use(n).use(dc, r).use(t)
}

function jc(e) {
    const t = e.children || "",
        n = new Fi;
    return typeof t == "string" && (n.value = t), n
}

function Uc(e, t) {
    const n = t.allowedElements,
        r = t.allowElement,
        i = t.components,
        o = t.disallowedElements,
        l = t.skipHtml,
        s = t.unwrapDisallowed,
        c = t.urlTransform || Hc;
    for (const u of vc) Object.hasOwn(t, u.from) && ("" + u.from + (u.to ? "use `" + u.to + "` instead" : "remove it") + zc + u.id, void 0);
    return Di(e, a), Gl(e, {
        Fragment: It.Fragment,
        components: i,
        ignoreInvalidStyle: !0,
        jsx: It.jsx,
        jsxs: It.jsxs,
        passKeys: !0,
        passNode: !0
    });

    function a(u, f, h) {
        if (u.type === "raw" && h && typeof f == "number") return l ? h.children.splice(f, 1) : h.children[f] = {
            type: "text",
            value: u.value
        }, f;
        if (u.type === "element") {
            let p;
            for (p in Dt)
                if (Object.hasOwn(Dt, p) && Object.hasOwn(u.properties, p)) {
                    const g = u.properties[p],
                        b = Dt[p];
                    (b === null || b.includes(u.tagName)) && (u.properties[p] = c(String(g || ""), p, u))
                }
        }
        if (u.type === "element") {
            let p = n ? !n.includes(u.tagName) : o ? o.includes(u.tagName) : !1;
            if (!p && r && typeof f == "number" && (p = !r(u, f, h)), p && h && typeof f == "number") return s && u.children ? h.children.splice(f, 1, ...u.children) : h.children.splice(f, 1), f
        }
    }
}

function Hc(e) {
    const t = e.indexOf(":"),
        n = e.indexOf("?"),
        r = e.indexOf("#"),
        i = e.indexOf("/");
    return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || Bc.test(e.slice(0, t)) ? e : ""
}
export {
    pf as M, G as a, $c as c
};