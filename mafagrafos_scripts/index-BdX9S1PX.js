const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/ModelDetail-B8SaGqlX.js", "assets/three-vendor-BWlPw9Wh.js", "assets/react-vendor-Bqc3y1uR.js", "assets/exportOptions-CkoSw_Z-.js", "assets/i18n-vendor-CS9SJH6h.js", "assets/utils-vendor-DL4EE14t.js", "assets/ModelDetail-CpsiuDeM.css", "assets/Customize-CpqIuGmI.js", "assets/Customize-DCnPr_Me.css", "assets/PrintableDetail-B_ZOBIuj.js", "assets/PrintableDetail-DR50lMhs.css"]))) => i.map(i => d[i]);
import {
    j as r,
    _ as sr,
    R as _a
} from "./three-vendor-BWlPw9Wh.js";
import {
    b as w,
    c as wa,
    u as Da,
    L as T,
    d as Re,
    e as ir,
    f as ba,
    B as ja,
    h as Sa,
    i as V,
    N as Na,
    R as Ra
} from "./react-vendor-Bqc3y1uR.js";
import {
    a as Un,
    c as ka
} from "./utils-vendor-DL4EE14t.js";
import {
    u as X,
    i as Ma,
    B as Fa,
    a as Pa
} from "./i18n-vendor-CS9SJH6h.js";
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) t(n);
    new MutationObserver(n => {
        for (const o of n)
            if (o.type === "childList")
                for (const a of o.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && t(a)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(n) {
        const o = {};
        return n.integrity && (o.integrity = n.integrity), n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? o.credentials = "include" : n.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function t(n) {
        if (n.ep) return;
        n.ep = !0;
        const o = s(n);
        fetch(n.href, o)
    }
})();
var f = typeof window < "u" ? window : void 0,
    te = typeof globalThis < "u" ? globalThis : f;
typeof self > "u" && (te.self = te), typeof File > "u" && (te.File = function() {});
var On = Array.prototype,
    Qr = On.forEach,
    vr = On.indexOf,
    fe = te?.navigator,
    x = te?.document,
    ie = te?.location,
    vt = te?.fetch,
    yt = te != null && te.XMLHttpRequest && "withCredentials" in new te.XMLHttpRequest ? te.XMLHttpRequest : void 0,
    yr = te?.AbortController,
    de = fe?.userAgent,
    N = f ?? {},
    Fe = {
        DEBUG: !1,
        LIB_VERSION: "1.351.3"
    };

function xr(i, e, s, t, n, o, a) {
    try {
        var A = i[o](a),
            l = A.value
    } catch (c) {
        return void s(c)
    }
    A.done ? e(l) : Promise.resolve(l).then(t, n)
}

function ms(i) {
    return function() {
        var e = this,
            s = arguments;
        return new Promise((function(t, n) {
            var o = i.apply(e, s);

            function a(l) {
                xr(o, t, n, a, A, "next", l)
            }

            function A(l) {
                xr(o, t, n, a, A, "throw", l)
            }
            a(void 0)
        }))
    }
}

function j() {
    return j = Object.assign ? Object.assign.bind() : function(i) {
        for (var e = 1; e < arguments.length; e++) {
            var s = arguments[e];
            for (var t in s)({}).hasOwnProperty.call(s, t) && (i[t] = s[t])
        }
        return i
    }, j.apply(null, arguments)
}

function Yn(i, e) {
    if (i == null) return {};
    var s = {};
    for (var t in i)
        if ({}.hasOwnProperty.call(i, t)) {
            if (e.indexOf(t) !== -1) continue;
            s[t] = i[t]
        } return s
}
var La = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"],
    Ta = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"],
    _r = function(i, e) {
        if (e === void 0 && (e = []), !i) return !1;
        var s = i.toLowerCase();
        return Ta.concat(e).some((t => {
            var n = t.toLowerCase();
            return s.indexOf(n) !== -1
        }))
    };

function F(i, e) {
    return i.indexOf(e) !== -1
}
var Yi = function(i) {
        return i.trim()
    },
    xt = function(i) {
        return i.replace(/^\$/, "")
    },
    Ga = Array.isArray,
    Kn = Object.prototype,
    qn = Kn.hasOwnProperty,
    Ki = Kn.toString,
    L = Ga || function(i) {
        return Ki.call(i) === "[object Array]"
    },
    Ge = i => typeof i == "function",
    ee = i => i === Object(i) && !L(i),
    Bs = i => {
        if (ee(i)) {
            for (var e in i)
                if (qn.call(i, e)) return !1;
            return !0
        }
        return !1
    },
    _ = i => i === void 0,
    W = i => Ki.call(i) == "[object String]",
    _t = i => W(i) && i.trim().length === 0,
    Qe = i => i === null,
    P = i => _(i) || Qe(i),
    Ye = i => Ki.call(i) == "[object Number]" && i == i,
    Cs = i => Ye(i) && i > 0,
    Oe = i => Ki.call(i) === "[object Boolean]",
    Ua = i => i instanceof FormData,
    Oa = i => F(La, i);

function wt(i) {
    return i === null || typeof i != "object"
}

function xi(i, e) {
    return Object.prototype.toString.call(i) === "[object " + e + "]"
}

function Hn(i) {
    return !_(Event) && (function(e, s) {
        try {
            return e instanceof s
        } catch {
            return !1
        }
    })(i, Event)
}
var Ya = [!0, "true", 1, "1", "yes"],
    Wi = i => F(Ya, i),
    Ka = [!1, "false", 0, "0", "no"];

function Se(i, e, s, t, n) {
    return e > s && (t.warn("min cannot be greater than max."), e = s), Ye(i) ? i > s ? (t.warn(" cannot be  greater than max: " + s + ". Using max value instead."), s) : i < e ? (t.warn(" cannot be less than min: " + e + ". Using min value instead."), e) : i : (t.warn(" must be a number. using max or fallback. max: " + s + ", fallback: " + n), Se(n || s, e, s, t))
}
let qa = class {
    constructor(e) {
        this.t = {}, this.i = e.i, this.o = Se(e.bucketSize, 0, 100, e.h), this.m = Se(e.refillRate, 0, this.o, e.h), this.$ = Se(e.refillInterval, 0, 864e5, e.h)
    }
    S(e, s) {
        var t = s - e.lastAccess,
            n = Math.floor(t / this.$);
        if (n > 0) {
            var o = n * this.m;
            e.tokens = Math.min(e.tokens + o, this.o), e.lastAccess = e.lastAccess + n * this.$
        }
    }
    consumeRateLimit(e) {
        var s, t = Date.now(),
            n = String(e),
            o = this.t[n];
        return o ? this.S(o, t) : (o = {
            tokens: this.o,
            lastAccess: t
        }, this.t[n] = o), o.tokens === 0 || (o.tokens--, o.tokens === 0 && ((s = this.i) == null || s.call(this, e)), o.tokens === 0)
    }
    stop() {
        this.t = {}
    }
};
var me = "Mobile",
    _i = "iOS",
    Ue = "Android",
    si = "Tablet",
    Jn = Ue + " " + si,
    zn = "iPad",
    Vn = "Apple",
    $n = Vn + " Watch",
    ii = "Safari",
    bs = "BlackBerry",
    Wn = "Samsung",
    Zn = Wn + "Browser",
    Xn = Wn + " Internet",
    As = "Chrome",
    Ha = As + " OS",
    eo = As + " " + _i,
    tr = "Internet Explorer",
    so = tr + " " + me,
    rr = "Opera",
    Ja = rr + " Mini",
    nr = "Edge",
    io = "Microsoft " + nr,
    xs = "Firefox",
    to = xs + " " + _i,
    ti = "Nintendo",
    ri = "PlayStation",
    _s = "Xbox",
    ro = Ue + " " + me,
    no = me + " " + ii,
    Ys = "Windows",
    Dt = Ys + " Phone",
    wr = "Nokia",
    bt = "Ouya",
    oo = "Generic",
    za = oo + " " + me.toLowerCase(),
    ao = oo + " " + si.toLowerCase(),
    jt = "Konqueror",
    ce = "(\\d+(\\.\\d+)?)",
    Zi = new RegExp("Version/" + ce),
    Va = new RegExp(_s, "i"),
    $a = new RegExp(ri + " \\w+", "i"),
    Wa = new RegExp(ti + " \\w+", "i"),
    or = new RegExp(bs + "|PlayBook|BB10", "i"),
    Za = {
        "NT3.51": "NT 3.11",
        "NT4.0": "NT 4.0",
        "5.0": "2000",
        5.1: "XP",
        5.2: "XP",
        "6.0": "Vista",
        6.1: "7",
        6.2: "8",
        6.3: "8.1",
        6.4: "10",
        "10.0": "10"
    },
    gi, Dr, Xi, Xa = (i, e) => e && F(e, Vn) || (function(s) {
        return F(s, ii) && !F(s, As) && !F(s, Ue)
    })(i),
    Ao = function(i, e) {
        return e = e || "", F(i, " OPR/") && F(i, "Mini") ? Ja : F(i, " OPR/") ? rr : or.test(i) ? bs : F(i, "IE" + me) || F(i, "WPDesktop") ? so : F(i, Zn) ? Xn : F(i, nr) || F(i, "Edg/") ? io : F(i, "FBIOS") ? "Facebook " + me : F(i, "UCWEB") || F(i, "UCBrowser") ? "UC Browser" : F(i, "CriOS") ? eo : F(i, "CrMo") || F(i, As) ? As : F(i, Ue) && F(i, ii) ? ro : F(i, "FxiOS") ? to : F(i.toLowerCase(), jt.toLowerCase()) ? jt : Xa(i, e) ? F(i, me) ? no : ii : F(i, xs) ? xs : F(i, "MSIE") || F(i, "Trident/") ? tr : F(i, "Gecko") ? xs : ""
    },
    eA = {
        [so]: [new RegExp("rv:" + ce)],
        [io]: [new RegExp(nr + "?\\/" + ce)],
        [As]: [new RegExp("(" + As + "|CrMo)\\/" + ce)],
        [eo]: [new RegExp("CriOS\\/" + ce)],
        "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/" + ce)],
        [ii]: [Zi],
        [no]: [Zi],
        [rr]: [new RegExp("(Opera|OPR)\\/" + ce)],
        [xs]: [new RegExp(xs + "\\/" + ce)],
        [to]: [new RegExp("FxiOS\\/" + ce)],
        [jt]: [new RegExp("Konqueror[:/]?" + ce, "i")],
        [bs]: [new RegExp(bs + " " + ce), Zi],
        [ro]: [new RegExp("android\\s" + ce, "i")],
        [Xn]: [new RegExp(Zn + "\\/" + ce)],
        [tr]: [new RegExp("(rv:|MSIE )" + ce)],
        Mozilla: [new RegExp("rv:" + ce)]
    },
    sA = function(i, e) {
        var s = Ao(i, e),
            t = eA[s];
        if (_(t)) return null;
        for (var n = 0; n < t.length; n++) {
            var o = t[n],
                a = i.match(o);
            if (a) return parseFloat(a[a.length - 2])
        }
        return null
    },
    br = [
        [new RegExp(_s + "; " + _s + " (.*?)[);]", "i"), i => [_s, i && i[1] || ""]],
        [new RegExp(ti, "i"), [ti, ""]],
        [new RegExp(ri, "i"), [ri, ""]],
        [or, [bs, ""]],
        [new RegExp(Ys, "i"), (i, e) => {
            if (/Phone/.test(e) || /WPDesktop/.test(e)) return [Dt, ""];
            if (new RegExp(me).test(e) && !/IEMobile\b/.test(e)) return [Ys + " " + me, ""];
            var s = /Windows NT ([0-9.]+)/i.exec(e);
            if (s && s[1]) {
                var t = s[1],
                    n = Za[t] || "";
                return /arm/i.test(e) && (n = "RT"), [Ys, n]
            }
            return [Ys, ""]
        }],
        [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, i => {
            if (i && i[3]) {
                var e = [i[3], i[4], i[5] || "0"];
                return [_i, e.join(".")]
            }
            return [_i, ""]
        }],
        [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, i => {
            var e = "";
            return i && i.length >= 3 && (e = _(i[2]) ? i[3] : i[2]), ["watchOS", e]
        }],
        [new RegExp("(" + Ue + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + Ue + ")", "i"), i => {
            if (i && i[2]) {
                var e = [i[2], i[3], i[4] || "0"];
                return [Ue, e.join(".")]
            }
            return [Ue, ""]
        }],
        [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, i => {
            var e = ["Mac OS X", ""];
            if (i && i[1]) {
                var s = [i[1], i[2], i[3] || "0"];
                e[1] = s.join(".")
            }
            return e
        }],
        [/Mac/i, ["Mac OS X", ""]],
        [/CrOS/, [Ha, ""]],
        [/Linux|debian/i, ["Linux", ""]]
    ],
    jr = function(i) {
        return Wa.test(i) ? ti : $a.test(i) ? ri : Va.test(i) ? _s : new RegExp(bt, "i").test(i) ? bt : new RegExp("(" + Dt + "|WPDesktop)", "i").test(i) ? Dt : /iPad/.test(i) ? zn : /iPod/.test(i) ? "iPod Touch" : /iPhone/.test(i) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(i) ? $n : or.test(i) ? bs : /(kobo)\s(ereader|touch)/i.test(i) ? "Kobo" : new RegExp(wr, "i").test(i) ? wr : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(i) || /(kf[a-z]+)( bui|\)).+silk\//i.test(i) ? "Kindle Fire" : /(Android|ZTE)/i.test(i) ? new RegExp(me).test(i) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(i) || /pixel[\daxl ]{1,6}/i.test(i) && !/pixel c/i.test(i) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(i) || /lmy47v/i.test(i) && !/QTAQZ3/i.test(i) ? Ue : Jn : new RegExp("(pda|" + me + ")", "i").test(i) ? za : new RegExp(si, "i").test(i) && !new RegExp(si + " pc", "i").test(i) ? ao : ""
    },
    iA = i => i instanceof Error;

function tA(i) {
    var e = globalThis._posthogChunkIds;
    if (e) {
        var s = Object.keys(e);
        return Xi && s.length === Dr || (Dr = s.length, Xi = s.reduce(((t, n) => {
            gi || (gi = {});
            var o = gi[n];
            if (o) t[o[0]] = o[1];
            else
                for (var a = i(n), A = a.length - 1; A >= 0; A--) {
                    var l = a[A],
                        c = l?.filename,
                        g = e[n];
                    if (c && g) {
                        t[c] = g, gi[n] = [c, g];
                        break
                    }
                }
            return t
        }), {})), Xi
    }
}
class rA {
    constructor(e, s, t) {
        t === void 0 && (t = []), this.coercers = e, this.stackParser = s, this.modifiers = t
    }
    buildFromUnknown(e, s) {
        s === void 0 && (s = {});
        var t = s && s.mechanism || {
                handled: !0,
                type: "generic"
            },
            n = this.buildCoercingContext(t, s, 0).apply(e),
            o = this.buildParsingContext(s),
            a = this.parseStacktrace(n, o);
        return {
            $exception_list: this.convertToExceptionList(a, t),
            $exception_level: "error"
        }
    }
    modifyFrames(e) {
        var s = this;
        return ms((function*() {
            for (var t of e) t.stacktrace && t.stacktrace.frames && L(t.stacktrace.frames) && (t.stacktrace.frames = yield s.applyModifiers(t.stacktrace.frames));
            return e
        }))()
    }
    coerceFallback(e) {
        var s;
        return {
            type: "Error",
            value: "Unknown error",
            stack: (s = e.syntheticException) == null ? void 0 : s.stack,
            synthetic: !0
        }
    }
    parseStacktrace(e, s) {
        var t, n;
        return e.cause != null && (t = this.parseStacktrace(e.cause, s)), e.stack != "" && e.stack != null && (n = this.applyChunkIds(this.stackParser(e.stack, e.synthetic ? s.skipFirstLines : 0), s.chunkIdMap)), j({}, e, {
            cause: t,
            stack: n
        })
    }
    applyChunkIds(e, s) {
        return e.map((t => (t.filename && s && (t.chunk_id = s[t.filename]), t)))
    }
    applyCoercers(e, s) {
        for (var t of this.coercers)
            if (t.match(e)) return t.coerce(e, s);
        return this.coerceFallback(s)
    }
    applyModifiers(e) {
        var s = this;
        return ms((function*() {
            var t = e;
            for (var n of s.modifiers) t = yield n(t);
            return t
        }))()
    }
    convertToExceptionList(e, s) {
        var t, n, o, a = {
            type: e.type,
            value: e.value,
            mechanism: {
                type: (t = s.type) !== null && t !== void 0 ? t : "generic",
                handled: (n = s.handled) === null || n === void 0 || n,
                synthetic: (o = e.synthetic) !== null && o !== void 0 && o
            }
        };
        e.stack && (a.stacktrace = {
            type: "raw",
            frames: e.stack
        });
        var A = [a];
        return e.cause != null && A.push(...this.convertToExceptionList(e.cause, j({}, s, {
            handled: !0
        }))), A
    }
    buildParsingContext(e) {
        var s;
        return {
            chunkIdMap: tA(this.stackParser),
            skipFirstLines: (s = e.skipFirstLines) !== null && s !== void 0 ? s : 1
        }
    }
    buildCoercingContext(e, s, t) {
        t === void 0 && (t = 0);
        var n = (o, a) => {
            if (a <= 4) {
                var A = this.buildCoercingContext(e, s, a);
                return this.applyCoercers(o, A)
            }
        };
        return j({}, s, {
            syntheticException: t == 0 ? s.syntheticException : void 0,
            mechanism: e,
            apply: o => n(o, t),
            next: o => n(o, t + 1)
        })
    }
}
var js = "?";

function St(i, e, s, t, n) {
    var o = {
        platform: i,
        filename: e,
        function: s === "<anonymous>" ? js : s,
        in_app: !0
    };
    return _(t) || (o.lineno = t), _(n) || (o.colno = n), o
}
var lo = (i, e) => {
        var s = i.indexOf("safari-extension") !== -1,
            t = i.indexOf("safari-web-extension") !== -1;
        return s || t ? [i.indexOf("@") !== -1 ? i.split("@")[0] : js, s ? "safari-extension:" + e : "safari-web-extension:" + e] : [i, e]
    },
    nA = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    oA = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    aA = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    AA = (i, e) => {
        var s = nA.exec(i);
        if (s) {
            var [, t, n, o] = s;
            return St(e, t, js, +n, +o)
        }
        var a = oA.exec(i);
        if (a) {
            if (a[2] && a[2].indexOf("eval") === 0) {
                var A = aA.exec(a[2]);
                A && (a[2] = A[1], a[3] = A[2], a[4] = A[3])
            }
            var [l, c] = lo(a[1] || js, a[2]);
            return St(e, c, l, a[3] ? +a[3] : void 0, a[4] ? +a[4] : void 0)
        }
    },
    lA = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    cA = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    gA = (i, e) => {
        var s = lA.exec(i);
        if (s) {
            if (s[3] && s[3].indexOf(" > eval") > -1) {
                var t = cA.exec(s[3]);
                t && (s[1] = s[1] || "eval", s[3] = t[1], s[4] = t[2], s[5] = "")
            }
            var n = s[3],
                o = s[1] || js;
            return [o, n] = lo(o, n), St(e, n, o, s[4] ? +s[4] : void 0, s[5] ? +s[5] : void 0)
        }
    },
    Sr = /\(error: (.*)\)/,
    Nr = 50;

function dA() {
    return (function(i) {
        for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++) s[t - 1] = arguments[t];
        return function(n, o) {
            o === void 0 && (o = 0);
            for (var a = [], A = n.split(`
`), l = o; l < A.length; l++) {
                var c = A[l];
                if (!(c.length > 1024)) {
                    var g = Sr.test(c) ? c.replace(Sr, "$1") : c;
                    if (!g.match(/\S*Error: /)) {
                        for (var d of s) {
                            var u = d(g, i);
                            if (u) {
                                a.push(u);
                                break
                            }
                        }
                        if (a.length >= Nr) break
                    }
                }
            }
            return (function(h) {
                if (!h.length) return [];
                var I = Array.from(h);
                return I.reverse(), I.slice(0, Nr).map((p => {
                    return j({}, p, {
                        filename: p.filename || (m = I, m[m.length - 1] || {}).filename,
                        function: p.function || js
                    });
                    var m
                }))
            })(a)
        }
    })("web:javascript", AA, gA)
}
class uA {
    match(e) {
        return this.isDOMException(e) || this.isDOMError(e)
    }
    coerce(e, s) {
        var t = W(e.stack);
        return {
            type: this.getType(e),
            value: this.getValue(e),
            stack: t ? e.stack : void 0,
            cause: e.cause ? s.next(e.cause) : void 0,
            synthetic: !1
        }
    }
    getType(e) {
        return this.isDOMError(e) ? "DOMError" : "DOMException"
    }
    getValue(e) {
        var s = e.name || (this.isDOMError(e) ? "DOMError" : "DOMException");
        return e.message ? s + ": " + e.message : s
    }
    isDOMException(e) {
        return xi(e, "DOMException")
    }
    isDOMError(e) {
        return xi(e, "DOMError")
    }
}
class hA {
    match(e) {
        return (s => s instanceof Error)(e)
    }
    coerce(e, s) {
        return {
            type: this.getType(e),
            value: this.getMessage(e, s),
            stack: this.getStack(e),
            cause: e.cause ? s.next(e.cause) : void 0,
            synthetic: !1
        }
    }
    getType(e) {
        return e.name || e.constructor.name
    }
    getMessage(e, s) {
        var t = e.message;
        return t.error && typeof t.error.message == "string" ? String(t.error.message) : String(t)
    }
    getStack(e) {
        return e.stacktrace || e.stack || void 0
    }
}
class IA {
    constructor() {}
    match(e) {
        return xi(e, "ErrorEvent") && e.error != null
    }
    coerce(e, s) {
        var t, n = s.apply(e.error);
        return n || {
            type: "ErrorEvent",
            value: e.message,
            stack: (t = s.syntheticException) == null ? void 0 : t.stack,
            synthetic: !0
        }
    }
}
var pA = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
class CA {
    match(e) {
        return typeof e == "string"
    }
    coerce(e, s) {
        var t, [n, o] = this.getInfos(e);
        return {
            type: n ?? "Error",
            value: o ?? e,
            stack: (t = s.syntheticException) == null ? void 0 : t.stack,
            synthetic: !0
        }
    }
    getInfos(e) {
        var s = "Error",
            t = e,
            n = e.match(pA);
        return n && (s = n[1], t = n[2]), [s, t]
    }
}
var fA = ["fatal", "error", "warning", "log", "info", "debug"];

function co(i, e) {
    e === void 0 && (e = 40);
    var s = Object.keys(i);
    if (s.sort(), !s.length) return "[object has no keys]";
    for (var t = s.length; t > 0; t--) {
        var n = s.slice(0, t).join(", ");
        if (!(n.length > e)) return t === s.length || n.length <= e ? n : n.slice(0, e) + "..."
    }
    return ""
}
class EA {
    match(e) {
        return typeof e == "object" && e !== null
    }
    coerce(e, s) {
        var t, n = this.getErrorPropertyFromObject(e);
        return n ? s.apply(n) : {
            type: this.getType(e),
            value: this.getValue(e),
            stack: (t = s.syntheticException) == null ? void 0 : t.stack,
            level: this.isSeverityLevel(e.level) ? e.level : "error",
            synthetic: !0
        }
    }
    getType(e) {
        return Hn(e) ? e.constructor.name : "Error"
    }
    getValue(e) {
        if ("name" in e && typeof e.name == "string") {
            var s = "'" + e.name + "' captured as exception";
            return "message" in e && typeof e.message == "string" && (s += " with message: '" + e.message + "'"), s
        }
        if ("message" in e && typeof e.message == "string") return e.message;
        var t = this.getObjectClassName(e);
        return (t && t !== "Object" ? "'" + t + "'" : "Object") + " captured as exception with keys: " + co(e)
    }
    isSeverityLevel(e) {
        return W(e) && !_t(e) && fA.indexOf(e) >= 0
    }
    getErrorPropertyFromObject(e) {
        for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s)) {
                var t = e[s];
                if (iA(t)) return t
            }
    }
    getObjectClassName(e) {
        try {
            var s = Object.getPrototypeOf(e);
            return s ? s.constructor.name : void 0
        } catch {
            return
        }
    }
}
class mA {
    match(e) {
        return Hn(e)
    }
    coerce(e, s) {
        var t, n = e.constructor.name;
        return {
            type: n,
            value: n + " captured as exception with keys: " + co(e),
            stack: (t = s.syntheticException) == null ? void 0 : t.stack,
            synthetic: !0
        }
    }
}
class BA {
    match(e) {
        return wt(e)
    }
    coerce(e, s) {
        var t;
        return {
            type: "Error",
            value: "Primitive value captured as exception: " + String(e),
            stack: (t = s.syntheticException) == null ? void 0 : t.stack,
            synthetic: !0
        }
    }
}
class QA {
    match(e) {
        return xi(e, "PromiseRejectionEvent")
    }
    coerce(e, s) {
        var t, n = this.getUnhandledRejectionReason(e);
        return wt(n) ? {
            type: "UnhandledRejection",
            value: "Non-Error promise rejection captured with value: " + String(n),
            stack: (t = s.syntheticException) == null ? void 0 : t.stack,
            synthetic: !0
        } : s.apply(n)
    }
    getUnhandledRejectionReason(e) {
        if (wt(e)) return e;
        try {
            if ("reason" in e) return e.reason;
            if ("detail" in e && "reason" in e.detail) return e.detail.reason
        } catch {}
        return e
    }
}
var go = function(i, e) {
        var {
            debugEnabled: s
        } = e === void 0 ? {} : e, t = {
            k: function(n) {
                if (f && (Fe.DEBUG || N.POSTHOG_DEBUG || s) && !_(f.console) && f.console) {
                    for (var o = ("__rrweb_original__" in f.console[n]) ? f.console[n].__rrweb_original__ : f.console[n], a = arguments.length, A = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++) A[l - 1] = arguments[l];
                    o(i, ...A)
                }
            },
            info: function() {
                for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                t.k("log", ...o)
            },
            warn: function() {
                for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                t.k("warn", ...o)
            },
            error: function() {
                for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                t.k("error", ...o)
            },
            critical: function() {
                for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a]
            },
            uninitializedWarning: n => {
                t.error("You must initialize PostHog before calling " + n)
            },
            createLogger: (n, o) => go(i + " " + n, o)
        };
        return t
    },
    D = go("[PostHog.js]"),
    q = D.createLogger,
    vA = q("[ExternalScriptsLoader]"),
    Rr = (i, e, s) => {
        if (i.config.disable_external_dependency_loading) return vA.warn(e + " was requested but loading of external scripts is disabled."), s("Loading of external scripts is disabled");
        var t = x?.querySelectorAll("script");
        if (t) {
            for (var n, o = function() {
                    if (t[a].src === e) {
                        var l = t[a];
                        return l.__posthog_loading_callback_fired ? {
                            v: s()
                        } : (l.addEventListener("load", (c => {
                            l.__posthog_loading_callback_fired = !0, s(void 0, c)
                        })), l.onerror = c => s(c), {
                            v: void 0
                        })
                    }
                }, a = 0; a < t.length; a++)
                if (n = o()) return n.v
        }
        var A = () => {
            if (!x) return s("document not found");
            var l = x.createElement("script");
            if (l.type = "text/javascript", l.crossOrigin = "anonymous", l.src = e, l.onload = d => {
                    l.__posthog_loading_callback_fired = !0, s(void 0, d)
                }, l.onerror = d => s(d), i.config.prepare_external_dependency_script && (l = i.config.prepare_external_dependency_script(l)), !l) return s("prepare_external_dependency_script returned null");
            if (i.config.external_scripts_inject_target === "head") x.head.appendChild(l);
            else {
                var c, g = x.querySelectorAll("body > script");
                g.length > 0 ? (c = g[0].parentNode) == null || c.insertBefore(l, g[0]) : x.body.appendChild(l)
            }
        };
        x != null && x.body ? A() : x?.addEventListener("DOMContentLoaded", A)
    };
N.__PosthogExtensions__ = N.__PosthogExtensions__ || {}, N.__PosthogExtensions__.loadExternalDependency = (i, e, s) => {
    var t = "/static/" + e + ".js?v=" + i.version;
    if (e === "remote-config" && (t = "/array/" + i.config.token + "/config.js"), e === "toolbar") {
        var n = 3e5;
        t = t + "&t=" + Math.floor(Date.now() / n) * n
    }
    var o = i.requestRouter.endpointFor("assets", t);
    Rr(i, o, s)
}, N.__PosthogExtensions__.loadSiteApp = (i, e, s) => {
    var t = i.requestRouter.endpointFor("api", e);
    Rr(i, t, s)
};
var wi = {};

function Xe(i, e, s) {
    if (L(i)) {
        if (Qr && i.forEach === Qr) i.forEach(e, s);
        else if ("length" in i && i.length === +i.length) {
            for (var t = 0, n = i.length; t < n; t++)
                if (t in i && e.call(s, i[t], t) === wi) return
        }
    }
}

function O(i, e, s) {
    if (!P(i)) {
        if (L(i)) return Xe(i, e, s);
        if (Ua(i)) {
            for (var t of i.entries())
                if (e.call(s, t[1], t[0]) === wi) return
        } else
            for (var n in i)
                if (qn.call(i, n) && e.call(s, i[n], n) === wi) return
    }
}
var z = function(i) {
        for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++) s[t - 1] = arguments[t];
        return Xe(s, (function(n) {
            for (var o in n) n[o] !== void 0 && (i[o] = n[o])
        })), i
    },
    Ns = function(i) {
        for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++) s[t - 1] = arguments[t];
        return Xe(s, (function(n) {
            Xe(n, (function(o) {
                i.push(o)
            }))
        })), i
    };

function mi(i) {
    for (var e = Object.keys(i), s = e.length, t = new Array(s); s--;) t[s] = [e[s], i[e[s]]];
    return t
}
var kr = function(i) {
        try {
            return i()
        } catch {
            return
        }
    },
    yA = function(i) {
        return function() {
            try {
                for (var e = arguments.length, s = new Array(e), t = 0; t < e; t++) s[t] = arguments[t];
                return i.apply(this, s)
            } catch (n) {
                D.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), D.critical(n)
            }
        }
    },
    ar = function(i) {
        var e = {};
        return O(i, (function(s, t) {
            (W(s) && s.length > 0 || Ye(s)) && (e[t] = s)
        })), e
    };

function xA(i, e) {
    return s = i, t = o => W(o) && !Qe(e) ? o.slice(0, e) : o, n = new Set, (function o(a, A) {
        return a !== Object(a) ? t ? t(a, A) : a : n.has(a) ? void 0 : (n.add(a), L(a) ? (l = [], Xe(a, (c => {
            l.push(o(c))
        }))) : (l = {}, O(a, ((c, g) => {
            n.has(c) || (l[g] = o(c, g))
        }))), l);
        var l
    })(s);
    var s, t, n
}
var _A = ["herokuapp.com", "vercel.app", "netlify.app"];

function wA(i) {
    var e = i?.hostname;
    if (!W(e)) return !1;
    var s = e.split(".").slice(-2).join(".");
    for (var t of _A)
        if (s === t) return !1;
    return !0
}

function uo(i, e) {
    for (var s = 0; s < i.length; s++)
        if (e(i[s])) return i[s]
}

function Z(i, e, s, t) {
    var {
        capture: n = !1,
        passive: o = !0
    } = t ?? {};
    i?.addEventListener(e, s, {
        capture: n,
        passive: o
    })
}
var ho = "$people_distinct_id",
    Ks = "__alias",
    qs = "__timers",
    Mr = "$autocapture_disabled_server_side",
    Nt = "$heatmaps_enabled_server_side",
    Fr = "$exception_capture_enabled_server_side",
    Rt = "$error_tracking_suppression_rules",
    Pr = "$error_tracking_capture_extension_exceptions",
    Lr = "$web_vitals_enabled_server_side",
    Io = "$dead_clicks_enabled_server_side",
    Tr = "$product_tours_enabled_server_side",
    Gr = "$web_vitals_allowed_metrics",
    di = "$session_recording_remote_config",
    Di = "$sesid",
    po = "$session_is_sampled",
    Qs = "$enabled_feature_flags",
    Hs = "$early_access_features",
    kt = "$feature_flag_details",
    Js = "$stored_person_properties",
    os = "$stored_group_properties",
    Mt = "$surveys",
    bi = "$flag_call_reported",
    Ft = "$feature_flag_errors",
    Pe = "$user_state",
    Pt = "$client_session_props",
    Lt = "$capture_rate_limit",
    Tt = "$initial_campaign_params",
    Gt = "$initial_referrer_info",
    ji = "$initial_person_info",
    Si = "$epp",
    Co = "__POSTHOG_TOOLBAR__",
    ks = "$posthog_cookieless",
    DA = [ho, Ks, "__cmpns", qs, "$session_recording_enabled_server_side", Nt, Di, Qs, Rt, Pe, Hs, kt, os, Js, Mt, bi, Ft, Pt, Lt, Tt, Gt, Si, ji, "$conversations_widget_session_id", "$conversations_ticket_id", "$conversations_widget_state", "$conversations_user_traits"];

function Ur(i) {
    return i instanceof Element && (i.id === Co || !(i.closest == null || !i.closest(".toolbar-global-fade-container")))
}

function qi(i) {
    return !!i && i.nodeType === 1
}

function es(i, e) {
    return !!i && !!i.tagName && i.tagName.toLowerCase() === e.toLowerCase()
}

function fo(i) {
    return !!i && i.nodeType === 3
}

function Eo(i) {
    return !!i && i.nodeType === 11
}

function Ar(i) {
    return i ? Yi(i).split(/\s+/) : []
}

function Or(i) {
    var e = f?.location.href;
    return !!(e && i && i.some((s => e.match(s))))
}

function Ni(i) {
    var e = "";
    switch (typeof i.className) {
        case "string":
            e = i.className;
            break;
        case "object":
            e = (i.className && "baseVal" in i.className ? i.className.baseVal : null) || i.getAttribute("class") || "";
            break;
        default:
            e = ""
    }
    return Ar(e)
}

function mo(i) {
    return P(i) ? null : Yi(i).split(/(\s+)/).filter((e => ni(e))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
}

function Ai(i) {
    var e = "";
    return Ut(i) && !xo(i) && i.childNodes && i.childNodes.length && O(i.childNodes, (function(s) {
        var t;
        fo(s) && s.textContent && (e += (t = mo(s.textContent)) !== null && t !== void 0 ? t : "")
    })), Yi(e)
}

function Bo(i) {
    return _(i.target) ? i.srcElement || null : (e = i.target) != null && e.shadowRoot ? i.composedPath()[0] || null : i.target || null;
    var e
}
var lr = ["a", "button", "form", "input", "select", "textarea", "label"];

function Qo(i, e) {
    if (_(e)) return !0;
    var s, t = function(o) {
        if (e.some((a => o.matches(a)))) return {
            v: !0
        }
    };
    for (var n of i)
        if (s = t(n)) return s.v;
    return !1
}

function vo(i) {
    var e = i.parentNode;
    return !(!e || !qi(e)) && e
}
var bA = ["next", "previous", "prev", ">", "<"],
    Yr = 10,
    Kr = [".ph-no-rageclick", ".ph-no-capture"];

function jA(i, e) {
    if (!f || cr(i)) return !1;
    var s, t, n;
    if (Oe(e) ? (s = !!e && Kr, t = void 0) : (s = (n = e?.css_selector_ignorelist) !== null && n !== void 0 ? n : Kr, t = e?.content_ignorelist), s === !1) return !1;
    var {
        targetElementList: o
    } = yo(i, !1);
    return !(function(a, A) {
        if (a === !1 || _(a)) return !1;
        var l;
        if (a === !0) l = bA;
        else {
            if (!L(a)) return !1;
            if (a.length > Yr) return D.error("[PostHog] content_ignorelist array cannot exceed " + Yr + " items. Use css_selector_ignorelist for more complex matching."), !1;
            l = a.map((c => c.toLowerCase()))
        }
        return A.some((c => {
            var {
                safeText: g,
                ariaLabel: d
            } = c;
            return l.some((u => g.includes(u) || d.includes(u)))
        }))
    })(t, o.map((a => {
        var A;
        return {
            safeText: Ai(a).toLowerCase(),
            ariaLabel: ((A = a.getAttribute("aria-label")) == null ? void 0 : A.toLowerCase().trim()) || ""
        }
    }))) && !Qo(o, s)
}
var cr = i => !i || es(i, "html") || !qi(i),
    yo = (i, e) => {
        if (!f || cr(i)) return {
            parentIsUsefulElement: !1,
            targetElementList: []
        };
        for (var s = !1, t = [i], n = i; n.parentNode && !es(n, "body");)
            if (Eo(n.parentNode)) t.push(n.parentNode.host), n = n.parentNode.host;
            else {
                var o = vo(n);
                if (!o) break;
                if (e || lr.indexOf(o.tagName.toLowerCase()) > -1) s = !0;
                else {
                    var a = f.getComputedStyle(o);
                    a && a.getPropertyValue("cursor") === "pointer" && (s = !0)
                }
                t.push(o), n = o
            } return {
            parentIsUsefulElement: s,
            targetElementList: t
        }
    };

function SA(i, e, s, t, n) {
    var o, a, A, l;
    if (s === void 0 && (s = void 0), !f || cr(i) || (o = s) != null && o.url_allowlist && !Or(s.url_allowlist) || (a = s) != null && a.url_ignorelist && Or(s.url_ignorelist)) return !1;
    if ((A = s) != null && A.dom_event_allowlist) {
        var c = s.dom_event_allowlist;
        if (c && !c.some((I => e.type === I))) return !1
    }
    var {
        parentIsUsefulElement: g,
        targetElementList: d
    } = yo(i, t);
    if (!(function(I, p) {
            var m = p?.element_allowlist;
            if (_(m)) return !0;
            var E, B = function(y) {
                if (m.some((b => y.tagName.toLowerCase() === b))) return {
                    v: !0
                }
            };
            for (var v of I)
                if (E = B(v)) return E.v;
            return !1
        })(d, s) || !Qo(d, (l = s) == null ? void 0 : l.css_selector_allowlist)) return !1;
    var u = f.getComputedStyle(i);
    if (u && u.getPropertyValue("cursor") === "pointer" && e.type === "click") return !0;
    var h = i.tagName.toLowerCase();
    switch (h) {
        case "html":
            return !1;
        case "form":
            return (n || ["submit"]).indexOf(e.type) >= 0;
        case "input":
        case "select":
        case "textarea":
            return (n || ["change", "click"]).indexOf(e.type) >= 0;
        default:
            return g ? (n || ["click"]).indexOf(e.type) >= 0 : (n || ["click"]).indexOf(e.type) >= 0 && (lr.indexOf(h) > -1 || i.getAttribute("contenteditable") === "true")
    }
}

function Ut(i) {
    for (var e = i; e.parentNode && !es(e, "body"); e = e.parentNode) {
        var s = Ni(e);
        if (F(s, "ph-sensitive") || F(s, "ph-no-capture")) return !1
    }
    if (F(Ni(i), "ph-include")) return !0;
    var t = i.type || "";
    if (W(t)) switch (t.toLowerCase()) {
        case "hidden":
        case "password":
            return !1
    }
    var n = i.name || i.id || "";
    return !(W(n) && /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(n.replace(/[^a-zA-Z0-9]/g, "")))
}

function xo(i) {
    return !!(es(i, "input") && !["button", "checkbox", "submit", "reset"].includes(i.type) || es(i, "select") || es(i, "textarea") || i.getAttribute("contenteditable") === "true")
}
var _o = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
    NA = new RegExp("^(?:" + _o + ")$"),
    RA = new RegExp(_o),
    wo = "\\d{3}-?\\d{2}-?\\d{4}",
    kA = new RegExp("^(" + wo + ")$"),
    MA = new RegExp("(" + wo + ")");

function ni(i, e) {
    return e === void 0 && (e = !0), !(P(i) || W(i) && (i = Yi(i), (e ? NA : RA).test((i || "").replace(/[- ]/g, "")) || (e ? kA : MA).test(i)))
}

function Do(i) {
    var e = Ai(i);
    return ni(e = (e + " " + bo(i)).trim()) ? e : ""
}

function bo(i) {
    var e = "";
    return i && i.childNodes && i.childNodes.length && O(i.childNodes, (function(s) {
        var t;
        if (s && ((t = s.tagName) == null ? void 0 : t.toLowerCase()) === "span") try {
            var n = Ai(s);
            e = (e + " " + n).trim(), s.childNodes && s.childNodes.length && (e = (e + " " + bo(s)).trim())
        } catch (o) {
            D.error("[AutoCapture]", o)
        }
    })), e
}

function FA(i) {
    return (function(e) {
        var s = e.map((t => {
            var n, o, a = "";
            if (t.tag_name && (a += t.tag_name), t.attr_class)
                for (var A of (t.attr_class.sort(), t.attr_class)) a += "." + A.replace(/"/g, "");
            var l = j({}, t.text ? {
                    text: t.text
                } : {}, {
                    "nth-child": (n = t.nth_child) !== null && n !== void 0 ? n : 0,
                    "nth-of-type": (o = t.nth_of_type) !== null && o !== void 0 ? o : 0
                }, t.href ? {
                    href: t.href
                } : {}, t.attr_id ? {
                    attr_id: t.attr_id
                } : {}, t.attributes),
                c = {};
            return mi(l).sort(((g, d) => {
                var [u] = g, [h] = d;
                return u.localeCompare(h)
            })).forEach((g => {
                var [d, u] = g;
                return c[qr(d.toString())] = qr(u.toString())
            })), a += ":", a += mi(c).map((g => {
                var [d, u] = g;
                return d + '="' + u + '"'
            })).join("")
        }));
        return s.join(";")
    })((function(e) {
        return e.map((s => {
            var t, n, o = {
                text: (t = s.$el_text) == null ? void 0 : t.slice(0, 400),
                tag_name: s.tag_name,
                href: (n = s.attr__href) == null ? void 0 : n.slice(0, 2048),
                attr_class: PA(s),
                attr_id: s.attr__id,
                nth_child: s.nth_child,
                nth_of_type: s.nth_of_type,
                attributes: {}
            };
            return mi(s).filter((a => {
                var [A] = a;
                return A.indexOf("attr__") === 0
            })).forEach((a => {
                var [A, l] = a;
                return o.attributes[A] = l
            })), o
        }))
    })(i))
}

function qr(i) {
    return i.replace(/"|\\"/g, '\\"')
}

function PA(i) {
    var e = i.attr__class;
    return e ? L(e) ? e : Ar(e) : void 0
}
class jo {
    constructor(e) {
        this.disabled = e === !1;
        var s = ee(e) ? e : {};
        this.thresholdPx = s.threshold_px || 30, this.timeoutMs = s.timeout_ms || 1e3, this.clickCount = s.click_count || 3, this.clicks = []
    }
    isRageClick(e, s, t) {
        if (this.disabled) return !1;
        var n = this.clicks[this.clicks.length - 1];
        if (n && Math.abs(e - n.x) + Math.abs(s - n.y) < this.thresholdPx && t - n.timestamp < this.timeoutMs) {
            if (this.clicks.push({
                    x: e,
                    y: s,
                    timestamp: t
                }), this.clicks.length === this.clickCount) return !0
        } else this.clicks = [{
            x: e,
            y: s,
            timestamp: t
        }];
        return !1
    }
}
var Ri = i => {
        var e = x?.createElement("a");
        return _(e) ? null : (e.href = i, e)
    },
    LA = function(i, e) {
        var s, t;
        e === void 0 && (e = "&");
        var n = [];
        return O(i, (function(o, a) {
            _(o) || _(a) || a === "undefined" || (s = encodeURIComponent((A => A instanceof File)(o) ? o.name : o.toString()), t = encodeURIComponent(a), n[n.length] = t + "=" + s)
        })), n.join(e)
    },
    ki = function(i, e) {
        for (var s, t = ((i.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"), n = 0; n < t.length; n++) {
            var o = t[n].split("=");
            if (o[0] === e) {
                s = o;
                break
            }
        }
        if (!L(s) || s.length < 2) return "";
        var a = s[1];
        try {
            a = decodeURIComponent(a)
        } catch {
            D.error("Skipping decoding for malformed query param: " + a)
        }
        return a.replace(/\+/g, " ")
    },
    li = function(i, e, s) {
        if (!i || !e || !e.length) return i;
        for (var t = i.split("#"), n = t[0] || "", o = t[1], a = n.split("?"), A = a[1], l = a[0], c = (A || "").split("&"), g = [], d = 0; d < c.length; d++) {
            var u = c[d].split("=");
            L(u) && (e.includes(u[0]) ? g.push(u[0] + "=" + s) : g.push(c[d]))
        }
        var h = l;
        return A != null && (h += "?" + g.join("&")), o != null && (h += "#" + o), h
    },
    Mi = function(i, e) {
        var s = i.match(new RegExp(e + "=([^&]*)"));
        return s ? s[1] : null
    },
    et = "$copy_autocapture",
    Hr = q("[AutoCapture]");

function st(i, e) {
    return e.length > i ? e.slice(0, i) + "..." : e
}

function TA(i) {
    if (i.previousElementSibling) return i.previousElementSibling;
    var e = i;
    do e = e.previousSibling; while (e && !qi(e));
    return e
}

function GA(i, e, s, t) {
    var n = i.tagName.toLowerCase(),
        o = {
            tag_name: n
        };
    lr.indexOf(n) > -1 && !s && (n.toLowerCase() === "a" || n.toLowerCase() === "button" ? o.$el_text = st(1024, Do(i)) : o.$el_text = st(1024, Ai(i)));
    var a = Ni(i);
    a.length > 0 && (o.classes = a.filter((function(g) {
        return g !== ""
    }))), O(i.attributes, (function(g) {
        var d;
        if ((!xo(i) || ["name", "id", "class", "aria-label"].indexOf(g.name) !== -1) && (t == null || !t.includes(g.name)) && !e && ni(g.value) && (d = g.name, !W(d) || d.substring(0, 10) !== "_ngcontent" && d.substring(0, 7) !== "_nghost")) {
            var u = g.value;
            g.name === "class" && (u = Ar(u).join(" ")), o["attr__" + g.name] = st(1024, u)
        }
    }));
    for (var A = 1, l = 1, c = i; c = TA(c);) A++, c.tagName === i.tagName && l++;
    return o.nth_child = A, o.nth_of_type = l, o
}

function UA(i, e) {
    for (var s, t, {
            e: n,
            maskAllElementAttributes: o,
            maskAllText: a,
            elementAttributeIgnoreList: A,
            elementsChainAsString: l
        } = e, c = [i], g = i; g.parentNode && !es(g, "body");) Eo(g.parentNode) ? (c.push(g.parentNode.host), g = g.parentNode.host) : (c.push(g.parentNode), g = g.parentNode);
    var d, u = [],
        h = {},
        I = !1,
        p = !1;
    if (O(c, (y => {
            var b = Ut(y);
            y.tagName.toLowerCase() === "a" && (I = y.getAttribute("href"), I = b && I && ni(I) && I), F(Ni(y), "ph-no-capture") && (p = !0), u.push(GA(y, o, a, A));
            var k = (function(R) {
                if (!Ut(R)) return {};
                var S = {};
                return O(R.attributes, (function(M) {
                    if (M.name && M.name.indexOf("data-ph-capture-attribute") === 0) {
                        var G = M.name.replace("data-ph-capture-attribute-", ""),
                            re = M.value;
                        G && re && ni(re) && (S[G] = re)
                    }
                })), S
            })(y);
            z(h, k)
        })), p) return {
        props: {},
        explicitNoCapture: p
    };
    if (a || (i.tagName.toLowerCase() === "a" || i.tagName.toLowerCase() === "button" ? u[0].$el_text = Do(i) : u[0].$el_text = Ai(i)), I) {
        var m, E;
        u[0].attr__href = I;
        var B = (m = Ri(I)) == null ? void 0 : m.host,
            v = f == null || (E = f.location) == null ? void 0 : E.host;
        B && v && B !== v && (d = I)
    }
    return {
        props: z({
            $event_type: n.type,
            $ce_version: 1
        }, l ? {} : {
            $elements: u
        }, {
            $elements_chain: FA(u)
        }, (s = u[0]) != null && s.$el_text ? {
            $el_text: (t = u[0]) == null ? void 0 : t.$el_text
        } : {}, d && n.type === "click" ? {
            $external_click_url: d
        } : {}, h)
    }
}
class OA {
    constructor(e) {
        this.P = !1, this.T = null, this.I = !1, this.instance = e, this.rageclicks = new jo(e.config.rageclick), this.C = null
    }
    get R() {
        var e, s, t = ee(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
        return t.url_allowlist = (e = t.url_allowlist) == null ? void 0 : e.map((n => new RegExp(n))), t.url_ignorelist = (s = t.url_ignorelist) == null ? void 0 : s.map((n => new RegExp(n))), t
    }
    F() {
        if (this.isBrowserSupported()) {
            if (f && x) {
                var e = t => {
                    t = t || f?.event;
                    try {
                        this.O(t)
                    } catch (n) {
                        Hr.error("Failed to capture event", n)
                    }
                };
                if (Z(x, "submit", e, {
                        capture: !0
                    }), Z(x, "change", e, {
                        capture: !0
                    }), Z(x, "click", e, {
                        capture: !0
                    }), this.R.capture_copied_text) {
                    var s = t => {
                        t = t || f?.event, this.O(t, et)
                    };
                    Z(x, "copy", s, {
                        capture: !0
                    }), Z(x, "cut", s, {
                        capture: !0
                    })
                }
            }
        } else Hr.info("Disabling Automatic Event Collection because this browser is not supported")
    }
    startIfEnabled() {
        this.isEnabled && !this.P && (this.F(), this.P = !0)
    }
    onRemoteConfig(e) {
        e.elementsChainAsString && (this.I = e.elementsChainAsString), this.instance.persistence && this.instance.persistence.register({
            [Mr]: !!e.autocapture_opt_out
        }), this.T = !!e.autocapture_opt_out, this.startIfEnabled()
    }
    setElementSelectors(e) {
        this.C = e
    }
    getElementSelectors(e) {
        var s, t = [];
        return (s = this.C) == null || s.forEach((n => {
            var o = x?.querySelectorAll(n);
            o?.forEach((a => {
                e === a && t.push(n)
            }))
        })), t
    }
    get isEnabled() {
        var e, s, t = (e = this.instance.persistence) == null ? void 0 : e.props[Mr],
            n = this.T;
        if (Qe(n) && !Oe(t) && !this.instance.M()) return !1;
        var o = (s = this.T) !== null && s !== void 0 ? s : !!t;
        return !!this.instance.config.autocapture && !o
    }
    O(e, s) {
        if (s === void 0 && (s = "$autocapture"), this.isEnabled) {
            var t, n = Bo(e);
            fo(n) && (n = n.parentNode || null), s === "$autocapture" && e.type === "click" && e instanceof MouseEvent && this.instance.config.rageclick && (t = this.rageclicks) != null && t.isRageClick(e.clientX, e.clientY, e.timeStamp || new Date().getTime()) && jA(n, this.instance.config.rageclick) && this.O(e, "$rageclick");
            var o = s === et;
            if (n && SA(n, e, this.R, o, o ? ["copy", "cut"] : void 0)) {
                var {
                    props: a,
                    explicitNoCapture: A
                } = UA(n, {
                    e,
                    maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
                    maskAllText: this.instance.config.mask_all_text,
                    elementAttributeIgnoreList: this.R.element_attribute_ignorelist,
                    elementsChainAsString: this.I
                });
                if (A) return !1;
                var l = this.getElementSelectors(n);
                if (l && l.length > 0 && (a.$element_selectors = l), s === et) {
                    var c, g = mo(f == null || (c = f.getSelection()) == null ? void 0 : c.toString()),
                        d = e.type || "clipboard";
                    if (!g) return !1;
                    a.$selected_content = g, a.$copy_type = d
                }
                return this.instance.capture(s, a), !0
            }
        }
    }
    isBrowserSupported() {
        return Ge(x?.querySelectorAll)
    }
}
Math.trunc || (Math.trunc = function(i) {
    return i < 0 ? Math.ceil(i) : Math.floor(i)
}), Number.isInteger || (Number.isInteger = function(i) {
    return Ye(i) && isFinite(i) && Math.floor(i) === i
});
var Jr = "0123456789abcdef";
class Fi {
    constructor(e) {
        if (this.bytes = e, e.length !== 16) throw new TypeError("not 128-bit length")
    }
    static fromFieldsV7(e, s, t, n) {
        if (!Number.isInteger(e) || !Number.isInteger(s) || !Number.isInteger(t) || !Number.isInteger(n) || e < 0 || s < 0 || t < 0 || n < 0 || e > 0xffffffffffff || s > 4095 || t > 1073741823 || n > 4294967295) throw new RangeError("invalid field value");
        var o = new Uint8Array(16);
        return o[0] = e / Math.pow(2, 40), o[1] = e / Math.pow(2, 32), o[2] = e / Math.pow(2, 24), o[3] = e / Math.pow(2, 16), o[4] = e / Math.pow(2, 8), o[5] = e, o[6] = 112 | s >>> 8, o[7] = s, o[8] = 128 | t >>> 24, o[9] = t >>> 16, o[10] = t >>> 8, o[11] = t, o[12] = n >>> 24, o[13] = n >>> 16, o[14] = n >>> 8, o[15] = n, new Fi(o)
    }
    toString() {
        for (var e = "", s = 0; s < this.bytes.length; s++) e = e + Jr.charAt(this.bytes[s] >>> 4) + Jr.charAt(15 & this.bytes[s]), s !== 3 && s !== 5 && s !== 7 && s !== 9 || (e += "-");
        if (e.length !== 36) throw new Error("Invalid UUIDv7 was generated");
        return e
    }
    clone() {
        return new Fi(this.bytes.slice(0))
    }
    equals(e) {
        return this.compareTo(e) === 0
    }
    compareTo(e) {
        for (var s = 0; s < 16; s++) {
            var t = this.bytes[s] - e.bytes[s];
            if (t !== 0) return Math.sign(t)
        }
        return 0
    }
}
class YA {
    constructor() {
        this.A = 0, this.j = 0, this.D = new KA
    }
    generate() {
        var e = this.generateOrAbort();
        if (_(e)) {
            this.A = 0;
            var s = this.generateOrAbort();
            if (_(s)) throw new Error("Could not generate UUID after timestamp reset");
            return s
        }
        return e
    }
    generateOrAbort() {
        var e = Date.now();
        if (e > this.A) this.A = e, this.L();
        else {
            if (!(e + 1e4 > this.A)) return;
            this.j++, this.j > 4398046511103 && (this.A++, this.L())
        }
        return Fi.fromFieldsV7(this.A, Math.trunc(this.j / Math.pow(2, 30)), this.j & Math.pow(2, 30) - 1, this.D.nextUint32())
    }
    L() {
        this.j = 1024 * this.D.nextUint32() + (1023 & this.D.nextUint32())
    }
}
var zr, So = i => {
    if (typeof UUIDV7_DENY_WEAK_RNG < "u" && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
    for (var e = 0; e < i.length; e++) i[e] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
    return i
};
f && !_(f.crypto) && crypto.getRandomValues && (So = i => crypto.getRandomValues(i));
class KA {
    constructor() {
        this.N = new Uint32Array(8), this.U = 1 / 0
    }
    nextUint32() {
        return this.U >= this.N.length && (So(this.N), this.U = 0), this.N[this.U++]
    }
}
var Ze = () => qA().toString(),
    qA = () => (zr || (zr = new YA)).generate(),
    Ms = "",
    HA = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;

function JA(i, e) {
    if (e) {
        var s = (function(n, o) {
            if (o === void 0 && (o = x), Ms) return Ms;
            if (!o || ["localhost", "127.0.0.1"].includes(n)) return "";
            for (var a = n.split("."), A = Math.min(a.length, 8), l = "dmn_chk_" + Ze(); !Ms && A--;) {
                var c = a.slice(A).join("."),
                    g = l + "=1;domain=." + c + ";path=/";
                o.cookie = g + ";max-age=3", o.cookie.includes(l) && (o.cookie = g + ";max-age=0", Ms = c)
            }
            return Ms
        })(i);
        if (!s) {
            var t = (n => {
                var o = n.match(HA);
                return o ? o[0] : ""
            })(i);
            t !== s && D.info("Warning: cookie subdomain discovery mismatch", t, s), s = t
        }
        return s ? "; domain=." + s : ""
    }
    return ""
}
var je = {
        H: () => !!x,
        B: function(i) {
            D.error("cookieStore error: " + i)
        },
        q: function(i) {
            if (x) {
                try {
                    for (var e = i + "=", s = x.cookie.split(";").filter((o => o.length)), t = 0; t < s.length; t++) {
                        for (var n = s[t]; n.charAt(0) == " ";) n = n.substring(1, n.length);
                        if (n.indexOf(e) === 0) return decodeURIComponent(n.substring(e.length, n.length))
                    }
                } catch {}
                return null
            }
        },
        W: function(i) {
            var e;
            try {
                e = JSON.parse(je.q(i)) || {}
            } catch {}
            return e
        },
        G: function(i, e, s, t, n) {
            if (x) try {
                var o = "",
                    a = "",
                    A = JA(x.location.hostname, t);
                if (s) {
                    var l = new Date;
                    l.setTime(l.getTime() + 24 * s * 60 * 60 * 1e3), o = "; expires=" + l.toUTCString()
                }
                n && (a = "; secure");
                var c = i + "=" + encodeURIComponent(JSON.stringify(e)) + o + "; SameSite=Lax; path=/" + A + a;
                return c.length > 3686.4 && D.warn("cookieStore warning: large cookie, len=" + c.length), x.cookie = c, c
            } catch {
                return
            }
        },
        V: function(i, e) {
            if (x != null && x.cookie) try {
                je.G(i, "", -1, e)
            } catch {
                return
            }
        }
    },
    it = null,
    K = {
        H: function() {
            if (!Qe(it)) return it;
            var i = !0;
            if (_(f)) i = !1;
            else try {
                var e = "__mplssupport__";
                K.G(e, "xyz"), K.q(e) !== '"xyz"' && (i = !1), K.V(e)
            } catch {
                i = !1
            }
            return i || D.error("localStorage unsupported; falling back to cookie store"), it = i, i
        },
        B: function(i) {
            D.error("localStorage error: " + i)
        },
        q: function(i) {
            try {
                return f?.localStorage.getItem(i)
            } catch (e) {
                K.B(e)
            }
            return null
        },
        W: function(i) {
            try {
                return JSON.parse(K.q(i)) || {}
            } catch {}
            return null
        },
        G: function(i, e) {
            try {
                f?.localStorage.setItem(i, JSON.stringify(e))
            } catch (s) {
                K.B(s)
            }
        },
        V: function(i) {
            try {
                f?.localStorage.removeItem(i)
            } catch (e) {
                K.B(e)
            }
        }
    },
    zA = ["$device_id", "distinct_id", Di, po, Si, ji],
    ui = {},
    VA = {
        H: function() {
            return !0
        },
        B: function(i) {
            D.error("memoryStorage error: " + i)
        },
        q: function(i) {
            return ui[i] || null
        },
        W: function(i) {
            return ui[i] || null
        },
        G: function(i, e) {
            ui[i] = e
        },
        V: function(i) {
            delete ui[i]
        }
    },
    ts = null,
    se = {
        H: function() {
            if (!Qe(ts)) return ts;
            if (ts = !0, _(f)) ts = !1;
            else try {
                var i = "__support__";
                se.G(i, "xyz"), se.q(i) !== '"xyz"' && (ts = !1), se.V(i)
            } catch {
                ts = !1
            }
            return ts
        },
        B: function(i) {
            D.error("sessionStorage error: ", i)
        },
        q: function(i) {
            try {
                return f?.sessionStorage.getItem(i)
            } catch (e) {
                se.B(e)
            }
            return null
        },
        W: function(i) {
            try {
                return JSON.parse(se.q(i)) || null
            } catch {}
            return null
        },
        G: function(i, e) {
            try {
                f?.sessionStorage.setItem(i, JSON.stringify(e))
            } catch (s) {
                se.B(s)
            }
        },
        V: function(i) {
            try {
                f?.sessionStorage.removeItem(i)
            } catch (e) {
                se.B(e)
            }
        }
    },
    Le = (function(i) {
        return i[i.PENDING = -1] = "PENDING", i[i.DENIED = 0] = "DENIED", i[i.GRANTED = 1] = "GRANTED", i
    })({});
class $A {
    constructor(e) {
        this._instance = e
    }
    get R() {
        return this._instance.config
    }
    get consent() {
        return this.J() ? Le.DENIED : this.K
    }
    isOptedOut() {
        return this.R.cookieless_mode === "always" || this.consent === Le.DENIED || this.consent === Le.PENDING && (this.R.opt_out_capturing_by_default || this.R.cookieless_mode === "on_reject")
    }
    isOptedIn() {
        return !this.isOptedOut()
    }
    isExplicitlyOptedOut() {
        return this.consent === Le.DENIED
    }
    optInOut(e) {
        this.Y.G(this.X, e ? 1 : 0, this.R.cookie_expiration, this.R.cross_subdomain_cookie, this.R.secure_cookie)
    }
    reset() {
        this.Y.V(this.X, this.R.cross_subdomain_cookie)
    }
    get X() {
        var {
            token: e,
            opt_out_capturing_cookie_prefix: s,
            consent_persistence_name: t
        } = this._instance.config;
        return t || (s ? s + e : "__ph_opt_in_out_" + e)
    }
    get K() {
        var e = this.Y.q(this.X);
        return Wi(e) ? Le.GRANTED : F(Ka, e) ? Le.DENIED : Le.PENDING
    }
    get Y() {
        if (!this.Z) {
            var e = this.R.opt_out_capturing_persistence_type;
            this.Z = e === "localStorage" ? K : je;
            var s = e === "localStorage" ? je : K;
            s.q(this.X) && (this.Z.q(this.X) || this.optInOut(Wi(s.q(this.X))), s.V(this.X, this.R.cross_subdomain_cookie))
        }
        return this.Z
    }
    J() {
        return !!this.R.respect_dnt && !!uo([fe?.doNotTrack, fe?.msDoNotTrack, N.doNotTrack], (e => Wi(e)))
    }
}
var hi = q("[Dead Clicks]"),
    WA = () => !0,
    ZA = i => {
        var e, s = !((e = i.instance.persistence) == null || !e.get_property(Io)),
            t = i.instance.config.capture_dead_clicks;
        return Oe(t) ? t : !!ee(t) || s
    };
class No {
    get lazyLoadedDeadClicksAutocapture() {
        return this.tt
    }
    constructor(e, s, t) {
        this.instance = e, this.isEnabled = s, this.onCapture = t, this.startIfEnabledOrStop()
    }
    onRemoteConfig(e) {
        "captureDeadClicks" in e && (this.instance.persistence && this.instance.persistence.register({
            [Io]: e.captureDeadClicks
        }), this.startIfEnabledOrStop())
    }
    startIfEnabledOrStop() {
        this.isEnabled(this) ? this.it((() => {
            this.et()
        })) : this.stop()
    }
    it(e) {
        var s, t;
        (s = N.__PosthogExtensions__) != null && s.initDeadClicksAutocapture && e(), (t = N.__PosthogExtensions__) == null || t.loadExternalDependency == null || t.loadExternalDependency(this.instance, "dead-clicks-autocapture", (n => {
            n ? hi.error("failed to load script", n) : e()
        }))
    }
    et() {
        var e;
        if (x) {
            if (!this.tt && (e = N.__PosthogExtensions__) != null && e.initDeadClicksAutocapture) {
                var s = ee(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
                s.__onCapture = this.onCapture, this.tt = N.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, s), this.tt.start(x), hi.info("starting...")
            }
        } else hi.error("`document` not found. Cannot start.")
    }
    stop() {
        this.tt && (this.tt.stop(), this.tt = void 0, hi.info("stopping..."))
    }
}
var Fs = q("[ExceptionAutocapture]");
class XA {
    constructor(e) {
        var s, t, n;
        this.rt = () => {
            var o;
            if (f && this.isEnabled && (o = N.__PosthogExtensions__) != null && o.errorWrappingFunctions) {
                var a = N.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                    A = N.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                    l = N.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
                try {
                    !this.st && this.R.capture_unhandled_errors && (this.st = a(this.captureException.bind(this))), !this.nt && this.R.capture_unhandled_rejections && (this.nt = A(this.captureException.bind(this))), !this.ot && this.R.capture_console_errors && (this.ot = l(this.captureException.bind(this)))
                } catch (c) {
                    Fs.error("failed to start", c), this.ut()
                }
            }
        }, this._instance = e, this.ht = !((s = this._instance.persistence) == null || !s.props[Fr]), this.dt = new qa({
            refillRate: (t = this._instance.config.error_tracking.__exceptionRateLimiterRefillRate) !== null && t !== void 0 ? t : 1,
            bucketSize: (n = this._instance.config.error_tracking.__exceptionRateLimiterBucketSize) !== null && n !== void 0 ? n : 10,
            refillInterval: 1e4,
            h: Fs
        }), this.R = this.vt(), this.startIfEnabledOrStop()
    }
    vt() {
        var e = this._instance.config.capture_exceptions,
            s = {
                capture_unhandled_errors: !1,
                capture_unhandled_rejections: !1,
                capture_console_errors: !1
            };
        return ee(e) ? s = j({}, s, e) : (_(e) ? this.ht : e) && (s = j({}, s, {
            capture_unhandled_errors: !0,
            capture_unhandled_rejections: !0
        })), s
    }
    get isEnabled() {
        return this.R.capture_console_errors || this.R.capture_unhandled_errors || this.R.capture_unhandled_rejections
    }
    startIfEnabledOrStop() {
        this.isEnabled ? (Fs.info("enabled"), this.ut(), this.it(this.rt)) : this.ut()
    }
    it(e) {
        var s, t;
        (s = N.__PosthogExtensions__) != null && s.errorWrappingFunctions && e(), (t = N.__PosthogExtensions__) == null || t.loadExternalDependency == null || t.loadExternalDependency(this._instance, "exception-autocapture", (n => {
            if (n) return Fs.error("failed to load script", n);
            e()
        }))
    }
    ut() {
        var e, s, t;
        (e = this.st) == null || e.call(this), this.st = void 0, (s = this.nt) == null || s.call(this), this.nt = void 0, (t = this.ot) == null || t.call(this), this.ot = void 0
    }
    onRemoteConfig(e) {
        if ("autocaptureExceptions" in e) {
            var s = e.autocaptureExceptions;
            this.ht = !!s || !1, this._instance.persistence && this._instance.persistence.register({
                [Fr]: this.ht
            }), this.R = this.vt(), this.startIfEnabledOrStop()
        }
    }
    onConfigChange() {
        this.R = this.vt()
    }
    captureException(e) {
        var s, t, n = (s = e == null || (t = e.$exception_list) == null || (t = t[0]) == null ? void 0 : t.type) !== null && s !== void 0 ? s : "Exception";
        this.dt.consumeRateLimit(n) ? Fs.info("Skipping exception capture because of client rate limiting.", {
            exception: n
        }) : this._instance.exceptions.sendExceptionEvent(e)
    }
}

function Vr(i, e, s) {
    try {
        if (!(e in i)) return () => {};
        var t = i[e],
            n = s(t);
        return Ge(n) && (n.prototype = n.prototype || {}, Object.defineProperties(n, {
            __posthog_wrapped__: {
                enumerable: !1,
                value: !0
            }
        })), i[e] = n, () => {
            i[e] = t
        }
    } catch {
        return () => {}
    }
}
class el {
    constructor(e) {
        var s;
        this._instance = e, this.ct = (f == null || (s = f.location) == null ? void 0 : s.pathname) || ""
    }
    get isEnabled() {
        return this._instance.config.capture_pageview === "history_change"
    }
    startIfEnabled() {
        this.isEnabled && (D.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges())
    }
    stop() {
        this.ft && this.ft(), this.ft = void 0, D.info("History API monitoring stopped")
    }
    monitorHistoryChanges() {
        var e, s;
        if (f && f.history) {
            var t = this;
            (e = f.history.pushState) != null && e.__posthog_wrapped__ || Vr(f.history, "pushState", (n => function(o, a, A) {
                n.call(this, o, a, A), t._t("pushState")
            })), (s = f.history.replaceState) != null && s.__posthog_wrapped__ || Vr(f.history, "replaceState", (n => function(o, a, A) {
                n.call(this, o, a, A), t._t("replaceState")
            })), this.bt()
        }
    }
    _t(e) {
        try {
            var s, t = f == null || (s = f.location) == null ? void 0 : s.pathname;
            if (!t) return;
            t !== this.ct && this.isEnabled && this._instance.capture("$pageview", {
                navigation_type: e
            }), this.ct = t
        } catch (n) {
            D.error("Error capturing " + e + " pageview", n)
        }
    }
    bt() {
        if (!this.ft) {
            var e = () => {
                this._t("popstate")
            };
            Z(f, "popstate", e), this.ft = () => {
                f && f.removeEventListener("popstate", e)
            }
        }
    }
}
var tt = q("[SegmentIntegration]");

function sl(i, e) {
    var s = i.config.segment;
    if (!s) return e();
    (function(t, n) {
        var o = t.config.segment;
        if (!o) return n();
        var a = l => {
                var c = () => l.anonymousId() || Ze();
                t.config.get_device_id = c, l.id() && (t.register({
                    distinct_id: l.id(),
                    $device_id: c()
                }), t.persistence.set_property(Pe, "identified")), n()
            },
            A = o.user();
        "then" in A && Ge(A.then) ? A.then(a) : a(A)
    })(i, (() => {
        s.register((t => {
            Promise && Promise.resolve || tt.warn("This browser does not have Promise support, and can not use the segment integration");
            var n = (o, a) => {
                if (!a) return o;
                o.event.userId || o.event.anonymousId === t.get_distinct_id() || (tt.info("No userId set, resetting PostHog"), t.reset()), o.event.userId && o.event.userId !== t.get_distinct_id() && (tt.info("UserId set, identifying with PostHog"), t.identify(o.event.userId));
                var A = t.calculateEventProperties(a, o.event.properties);
                return o.event.properties = Object.assign({}, A, o.event.properties), o
            };
            return {
                name: "PostHog JS",
                type: "enrichment",
                version: "1.0.0",
                isLoaded: () => !0,
                load: () => Promise.resolve(),
                track: o => n(o, o.event.event),
                page: o => n(o, "$pageview"),
                identify: o => n(o, "$identify"),
                screen: o => n(o, "$screen")
            }
        })(i)).then((() => {
            e()
        }))
    }))
}
var Ro = "posthog-js";

function ko(i, e) {
    var {
        organization: s,
        projectId: t,
        prefix: n,
        severityAllowList: o = ["error"],
        sendExceptionsToPostHog: a = !0
    } = e === void 0 ? {} : e;
    return A => {
        var l, c, g, d, u;
        if (!(o === "*" || o.includes(A.level)) || !i.__loaded) return A;
        A.tags || (A.tags = {});
        var h = i.requestRouter.endpointFor("ui", "/project/" + i.config.token + "/person/" + i.get_distinct_id());
        A.tags["PostHog Person URL"] = h, i.sessionRecordingStarted() && (A.tags["PostHog Recording URL"] = i.get_session_replay_url({
            withTimestamp: !0
        }));
        var I = ((l = A.exception) == null ? void 0 : l.values) || [],
            p = I.map((E => j({}, E, {
                stacktrace: E.stacktrace ? j({}, E.stacktrace, {
                    type: "raw",
                    frames: (E.stacktrace.frames || []).map((B => j({}, B, {
                        platform: "web:javascript"
                    })))
                }) : void 0
            }))),
            m = {
                $exception_message: ((c = I[0]) == null ? void 0 : c.value) || A.message,
                $exception_type: (g = I[0]) == null ? void 0 : g.type,
                $exception_level: A.level,
                $exception_list: p,
                $sentry_event_id: A.event_id,
                $sentry_exception: A.exception,
                $sentry_exception_message: ((d = I[0]) == null ? void 0 : d.value) || A.message,
                $sentry_exception_type: (u = I[0]) == null ? void 0 : u.type,
                $sentry_tags: A.tags
            };
        return s && t && (m.$sentry_url = (n || "https://sentry.io/organizations/") + s + "/issues/?project=" + t + "&query=" + A.event_id), a && i.exceptions.sendExceptionEvent(m), A
    }
}
class il {
    constructor(e, s, t, n, o, a) {
        this.name = Ro, this.setupOnce = function(A) {
            A(ko(e, {
                organization: s,
                projectId: t,
                prefix: n,
                severityAllowList: o,
                sendExceptionsToPostHog: a == null || a
            }))
        }
    }
}
var tl = f != null && f.location ? Mi(f.location.hash, "__posthog") || Mi(location.hash, "state") : null,
    $r = "_postHogToolbarParams",
    Wr = q("[Toolbar]"),
    $e = (function(i) {
        return i[i.UNINITIALIZED = 0] = "UNINITIALIZED", i[i.LOADING = 1] = "LOADING", i[i.LOADED = 2] = "LOADED", i
    })($e || {});
class rl {
    constructor(e) {
        this.instance = e
    }
    yt(e) {
        N.ph_toolbar_state = e
    }
    wt() {
        var e;
        return (e = N.ph_toolbar_state) !== null && e !== void 0 ? e : $e.UNINITIALIZED
    }
    maybeLoadToolbar(e, s, t) {
        if (e === void 0 && (e = void 0), s === void 0 && (s = void 0), t === void 0 && (t = void 0), this.instance.config.name && this.instance.config.name === "ph_toolbar_internal" || !f || !x) return !1;
        e = e ?? f.location, t = t ?? f.history;
        try {
            if (!s) {
                try {
                    f.localStorage.setItem("test", "test"), f.localStorage.removeItem("test")
                } catch {
                    return !1
                }
                s = f?.localStorage
            }
            var n, o = tl || Mi(e.hash, "__posthog") || Mi(e.hash, "state"),
                a = o ? kr((() => JSON.parse(atob(decodeURIComponent(o))))) || kr((() => JSON.parse(decodeURIComponent(o)))) : null;
            return a && a.action === "ph_authorize" ? ((n = a).source = "url", n && Object.keys(n).length > 0 && (a.desiredHash ? e.hash = a.desiredHash : t ? t.replaceState(t.state, "", e.pathname + e.search) : e.hash = "")) : ((n = JSON.parse(s.getItem($r) || "{}")).source = "localstorage", delete n.userIntent), !(!n.token || this.instance.config.token !== n.token) && (this.loadToolbar(n), !0)
        } catch {
            return !1
        }
    }
    xt(e) {
        var s = N.ph_load_toolbar || N.ph_load_editor;
        !P(s) && Ge(s) ? s(e, this.instance) : Wr.warn("No toolbar load function found")
    }
    loadToolbar(e) {
        var s = !(x == null || !x.getElementById(Co));
        if (!f || s) return !1;
        var t = this.instance.requestRouter.region === "custom" && this.instance.config.advanced_disable_toolbar_metrics,
            n = j({
                token: this.instance.config.token
            }, e, {
                apiURL: this.instance.requestRouter.endpointFor("ui")
            }, t ? {
                instrument: !1
            } : {});
        if (f.localStorage.setItem($r, JSON.stringify(j({}, n, {
                source: void 0
            }))), this.wt() === $e.LOADED) this.xt(n);
        else if (this.wt() === $e.UNINITIALIZED) {
            var o;
            this.yt($e.LOADING), (o = N.__PosthogExtensions__) == null || o.loadExternalDependency == null || o.loadExternalDependency(this.instance, "toolbar", (a => {
                if (a) return Wr.error("[Toolbar] Failed to load", a), void this.yt($e.UNINITIALIZED);
                this.yt($e.LOADED), this.xt(n)
            })), Z(f, "turbolinks:load", (() => {
                this.yt($e.UNINITIALIZED), this.loadToolbar(n)
            }))
        }
        return !0
    }
    $t(e) {
        return this.loadToolbar(e)
    }
    maybeLoadEditor(e, s, t) {
        return e === void 0 && (e = void 0), s === void 0 && (s = void 0), t === void 0 && (t = void 0), this.maybeLoadToolbar(e, s, t)
    }
}
var nl = q("[TracingHeaders]");
class ol {
    constructor(e) {
        this.Et = void 0, this.St = void 0, this.rt = () => {
            var s, t;
            _(this.Et) && ((s = N.__PosthogExtensions__) == null || (s = s.tracingHeadersPatchFns) == null || s._patchXHR(this._instance.config.__add_tracing_headers || [], this._instance.get_distinct_id(), this._instance.sessionManager)), _(this.St) && ((t = N.__PosthogExtensions__) == null || (t = t.tracingHeadersPatchFns) == null || t._patchFetch(this._instance.config.__add_tracing_headers || [], this._instance.get_distinct_id(), this._instance.sessionManager))
        }, this._instance = e
    }
    it(e) {
        var s, t;
        (s = N.__PosthogExtensions__) != null && s.tracingHeadersPatchFns && e(), (t = N.__PosthogExtensions__) == null || t.loadExternalDependency == null || t.loadExternalDependency(this._instance, "tracing-headers", (n => {
            if (n) return nl.error("failed to load script", n);
            e()
        }))
    }
    startIfEnabledOrStop() {
        var e, s;
        this._instance.config.__add_tracing_headers ? this.it(this.rt) : ((e = this.Et) == null || e.call(this), (s = this.St) == null || s.call(this), this.Et = void 0, this.St = void 0)
    }
}
var Ii = "https?://(.*)",
    Rs = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "irclid", "_kx"],
    al = Ns(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid"], Rs),
    ci = "<masked>",
    Al = ["li_fat_id"];

function Mo(i, e, s) {
    if (!x) return {};
    var t, n = e ? Ns([], Rs, s || []) : [],
        o = Fo(li(x.URL, n, ci), i),
        a = (t = {}, O(Al, (function(A) {
            var l = je.q(A);
            t[A] = l || null
        })), t);
    return z(a, o)
}

function Fo(i, e) {
    var s = al.concat(e || []),
        t = {};
    return O(s, (function(n) {
        var o = ki(i, n);
        t[n] = o || null
    })), t
}

function Po(i) {
    var e = (function(o) {
            return o ? o.search(Ii + "google.([^/?]*)") === 0 ? "google" : o.search(Ii + "bing.com") === 0 ? "bing" : o.search(Ii + "yahoo.com") === 0 ? "yahoo" : o.search(Ii + "duckduckgo.com") === 0 ? "duckduckgo" : null : null
        })(i),
        s = e != "yahoo" ? "q" : "p",
        t = {};
    if (!Qe(e)) {
        t.$search_engine = e;
        var n = x ? ki(x.referrer, s) : "";
        n.length && (t.ph_keyword = n)
    }
    return t
}

function Zr() {
    return navigator.language || navigator.userLanguage
}

function Lo() {
    return x?.referrer || "$direct"
}

function To(i, e) {
    var s = i ? Ns([], Rs, e || []) : [],
        t = ie?.href.substring(0, 1e3);
    return {
        r: Lo().substring(0, 1e3),
        u: t ? li(t, s, ci) : void 0
    }
}

function Go(i) {
    var e, {
            r: s,
            u: t
        } = i,
        n = {
            $referrer: s,
            $referring_domain: s == null ? void 0 : s == "$direct" ? "$direct" : (e = Ri(s)) == null ? void 0 : e.host
        };
    if (t) {
        n.$current_url = t;
        var o = Ri(t);
        n.$host = o?.host, n.$pathname = o?.pathname;
        var a = Fo(t);
        z(n, a)
    }
    if (s) {
        var A = Po(s);
        z(n, A)
    }
    return n
}

function Uo() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
    } catch {
        return
    }
}

function ll() {
    try {
        return new Date().getTimezoneOffset()
    } catch {
        return
    }
}

function cl(i, e) {
    if (!de) return {};
    var s, t, n, o = i ? Ns([], Rs, e || []) : [],
        [a, A] = (function(l) {
            for (var c = 0; c < br.length; c++) {
                var [g, d] = br[c], u = g.exec(l), h = u && (Ge(d) ? d(u, l) : d);
                if (h) return h
            }
            return ["", ""]
        })(de);
    return z(ar({
        $os: a,
        $os_version: A,
        $browser: Ao(de, navigator.vendor),
        $device: jr(de),
        $device_type: (t = de, n = jr(t), n === zn || n === Jn || n === "Kobo" || n === "Kindle Fire" || n === ao ? si : n === ti || n === _s || n === ri || n === bt ? "Console" : n === $n ? "Wearable" : n ? me : "Desktop"),
        $timezone: Uo(),
        $timezone_offset: ll()
    }), {
        $current_url: li(ie?.href, o, ci),
        $host: ie?.host,
        $pathname: ie?.pathname,
        $raw_user_agent: de.length > 1e3 ? de.substring(0, 997) + "..." : de,
        $browser_version: sA(de, navigator.vendor),
        $browser_language: Zr(),
        $browser_language_prefix: (s = Zr(), typeof s == "string" ? s.split("-")[0] : void 0),
        $screen_height: f?.screen.height,
        $screen_width: f?.screen.width,
        $viewport_height: f?.innerHeight,
        $viewport_width: f?.innerWidth,
        $lib: "web",
        $lib_version: Fe.LIB_VERSION,
        $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
        $time: Date.now() / 1e3
    })
}
var ze = q("[Web Vitals]"),
    Xr = 9e5;
class gl {
    constructor(e) {
        var s;
        this.kt = !1, this.P = !1, this.N = {
            url: void 0,
            metrics: [],
            firstMetricTimestamp: void 0
        }, this.Pt = () => {
            clearTimeout(this.Tt), this.N.metrics.length !== 0 && (this._instance.capture("$web_vitals", this.N.metrics.reduce(((t, n) => j({}, t, {
                ["$web_vitals_" + n.name + "_event"]: j({}, n),
                ["$web_vitals_" + n.name + "_value"]: n.value
            })), {})), this.N = {
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
            })
        }, this.It = t => {
            var n, o = (n = this._instance.sessionManager) == null ? void 0 : n.checkAndGetSessionAndWindowId(!0);
            if (_(o)) ze.error("Could not read session ID. Dropping metrics!");
            else {
                this.N = this.N || {
                    url: void 0,
                    metrics: [],
                    firstMetricTimestamp: void 0
                };
                var a = this.Ct();
                _(a) || (P(t?.name) || P(t?.value) ? ze.error("Invalid metric received", t) : this.Rt && t.value >= this.Rt ? ze.error("Ignoring metric with value >= " + this.Rt, t) : (this.N.url !== a && (this.Pt(), this.Tt = setTimeout(this.Pt, this.flushToCaptureTimeoutMs)), _(this.N.url) && (this.N.url = a), this.N.firstMetricTimestamp = _(this.N.firstMetricTimestamp) ? Date.now() : this.N.firstMetricTimestamp, t.attribution && t.attribution.interactionTargetElement && (t.attribution.interactionTargetElement = void 0), this.N.metrics.push(j({}, t, {
                    $current_url: a,
                    $session_id: o.sessionId,
                    $window_id: o.windowId,
                    timestamp: Date.now()
                })), this.N.metrics.length === this.allowedMetrics.length && this.Pt()))
            }
        }, this.rt = () => {
            if (!this.P) {
                var t, n, o, a, A = N.__PosthogExtensions__;
                _(A) || _(A.postHogWebVitalsCallbacks) || ({
                    onLCP: t,
                    onCLS: n,
                    onFCP: o,
                    onINP: a
                } = A.postHogWebVitalsCallbacks), t && n && o && a ? (this.allowedMetrics.indexOf("LCP") > -1 && t(this.It.bind(this)), this.allowedMetrics.indexOf("CLS") > -1 && n(this.It.bind(this)), this.allowedMetrics.indexOf("FCP") > -1 && o(this.It.bind(this)), this.allowedMetrics.indexOf("INP") > -1 && a(this.It.bind(this)), this.P = !0) : ze.error("web vitals callbacks not loaded - not starting")
            }
        }, this._instance = e, this.kt = !((s = this._instance.persistence) == null || !s.props[Lr]), this.startIfEnabled()
    }
    get allowedMetrics() {
        var e, s, t = ee(this._instance.config.capture_performance) ? (e = this._instance.config.capture_performance) == null ? void 0 : e.web_vitals_allowed_metrics : void 0;
        return P(t) ? ((s = this._instance.persistence) == null ? void 0 : s.props[Gr]) || ["CLS", "FCP", "INP", "LCP"] : t
    }
    get flushToCaptureTimeoutMs() {
        return (ee(this._instance.config.capture_performance) ? this._instance.config.capture_performance.web_vitals_delayed_flush_ms : void 0) || 5e3
    }
    get useAttribution() {
        var e = ee(this._instance.config.capture_performance) ? this._instance.config.capture_performance.web_vitals_attribution : void 0;
        return e != null && e
    }
    get Rt() {
        var e = ee(this._instance.config.capture_performance) && Ye(this._instance.config.capture_performance.__web_vitals_max_value) ? this._instance.config.capture_performance.__web_vitals_max_value : Xr;
        return 0 < e && e <= 6e4 ? Xr : e
    }
    get isEnabled() {
        var e = ie?.protocol;
        if (e !== "http:" && e !== "https:") return ze.info("Web Vitals are disabled on non-http/https protocols"), !1;
        var s = ee(this._instance.config.capture_performance) ? this._instance.config.capture_performance.web_vitals : Oe(this._instance.config.capture_performance) ? this._instance.config.capture_performance : void 0;
        return Oe(s) ? s : this.kt
    }
    startIfEnabled() {
        this.isEnabled && !this.P && (ze.info("enabled, starting..."), this.it(this.rt))
    }
    onRemoteConfig(e) {
        if ("capturePerformance" in e) {
            var s = ee(e.capturePerformance) && !!e.capturePerformance.web_vitals,
                t = ee(e.capturePerformance) ? e.capturePerformance.web_vitals_allowed_metrics : void 0;
            this._instance.persistence && (this._instance.persistence.register({
                [Lr]: s
            }), this._instance.persistence.register({
                [Gr]: t
            })), this.kt = s, this.startIfEnabled()
        }
    }
    it(e) {
        var s, t;
        if ((s = N.__PosthogExtensions__) != null && s.postHogWebVitalsCallbacks) e();
        else {
            var n = this.useAttribution ? "web-vitals-with-attribution" : "web-vitals";
            (t = N.__PosthogExtensions__) == null || t.loadExternalDependency == null || t.loadExternalDependency(this._instance, n, (o => {
                o ? ze.error("failed to load script", o) : e()
            }))
        }
    }
    Ct() {
        var e = f ? f.location.href : void 0;
        if (e) {
            var s = this._instance.config.mask_personal_data_properties,
                t = this._instance.config.custom_personal_data_properties,
                n = s ? Ns([], Rs, t || []) : [];
            return li(e, n, ci)
        }
        ze.error("Could not determine current URL")
    }
}
var dl = q("[Heatmaps]");

function en(i) {
    return ee(i) && "clientX" in i && "clientY" in i && Ye(i.clientX) && Ye(i.clientY)
}
class ul {
    constructor(e) {
        var s;
        this.kt = !1, this.P = !1, this.Ft = null, this.instance = e, this.kt = !((s = this.instance.persistence) == null || !s.props[Nt]), this.rageclicks = new jo(e.config.rageclick)
    }
    get flushIntervalMilliseconds() {
        var e = 5e3;
        return ee(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (e = this.instance.config.capture_heatmaps.flush_interval_milliseconds), e
    }
    get isEnabled() {
        return P(this.instance.config.capture_heatmaps) ? P(this.instance.config.enable_heatmaps) ? this.kt : this.instance.config.enable_heatmaps : this.instance.config.capture_heatmaps !== !1
    }
    startIfEnabled() {
        if (this.isEnabled) {
            if (this.P) return;
            dl.info("starting..."), this.Ot(), this.Mt()
        } else {
            var e;
            clearInterval((e = this.Ft) !== null && e !== void 0 ? e : void 0), this.At(), this.getAndClearBuffer()
        }
    }
    onRemoteConfig(e) {
        if ("heatmaps" in e) {
            var s = !!e.heatmaps;
            this.instance.persistence && this.instance.persistence.register({
                [Nt]: s
            }), this.kt = s, this.startIfEnabled()
        }
    }
    getAndClearBuffer() {
        var e = this.N;
        return this.N = void 0, e
    }
    jt(e) {
        this.Dt(e.originalEvent, "deadclick")
    }
    Mt() {
        this.Ft && clearInterval(this.Ft), this.Ft = (function(e) {
            return e?.visibilityState === "visible"
        })(x) ? setInterval(this.Lt.bind(this), this.flushIntervalMilliseconds) : null
    }
    Ot() {
        f && x && (this.Nt = this.Lt.bind(this), Z(f, "beforeunload", this.Nt), this.Ut = e => this.Dt(e || f?.event), Z(x, "click", this.Ut, {
            capture: !0
        }), this.zt = e => this.Ht(e || f?.event), Z(x, "mousemove", this.zt, {
            capture: !0
        }), this.Bt = new No(this.instance, WA, this.jt.bind(this)), this.Bt.startIfEnabledOrStop(), this.qt = this.Mt.bind(this), Z(x, "visibilitychange", this.qt), this.P = !0)
    }
    At() {
        var e;
        f && x && (this.Nt && f.removeEventListener("beforeunload", this.Nt), this.Ut && x.removeEventListener("click", this.Ut, {
            capture: !0
        }), this.zt && x.removeEventListener("mousemove", this.zt, {
            capture: !0
        }), this.qt && x.removeEventListener("visibilitychange", this.qt), clearTimeout(this.Wt), (e = this.Bt) == null || e.stop(), this.P = !1)
    }
    Gt(e, s) {
        var t = this.instance.scrollManager.scrollY(),
            n = this.instance.scrollManager.scrollX(),
            o = this.instance.scrollManager.scrollElement(),
            a = (function(A, l, c) {
                for (var g = A; g && qi(g) && !es(g, "body");) {
                    if (g === c) return !1;
                    if (F(l, f?.getComputedStyle(g).position)) return !0;
                    g = vo(g)
                }
                return !1
            })(Bo(e), ["fixed", "sticky"], o);
        return {
            x: e.clientX + (a ? 0 : n),
            y: e.clientY + (a ? 0 : t),
            target_fixed: a,
            type: s
        }
    }
    Dt(e, s) {
        var t;
        if (s === void 0 && (s = "click"), !Ur(e.target) && en(e)) {
            var n = this.Gt(e, s);
            (t = this.rageclicks) != null && t.isRageClick(e.clientX, e.clientY, new Date().getTime()) && this.Vt(j({}, n, {
                type: "rageclick"
            })), this.Vt(n)
        }
    }
    Ht(e) {
        !Ur(e.target) && en(e) && (clearTimeout(this.Wt), this.Wt = setTimeout((() => {
            this.Vt(this.Gt(e, "mousemove"))
        }), 500))
    }
    Vt(e) {
        if (f) {
            var s = f.location.href,
                t = this.instance.config.mask_personal_data_properties,
                n = this.instance.config.custom_personal_data_properties,
                o = t ? Ns([], Rs, n || []) : [],
                a = li(s, o, ci);
            this.N = this.N || {}, this.N[a] || (this.N[a] = []), this.N[a].push(e)
        }
    }
    Lt() {
        this.N && !Bs(this.N) && this.instance.capture("$$heatmap", {
            $heatmap_data: this.getAndClearBuffer()
        })
    }
}
class sn {
    constructor(e) {
        this.Jt = (s, t, n) => {
            n && (n.noSessionId || n.activityTimeout || n.sessionPastMaximumLength) && (D.info("[PageViewManager] Session rotated, clearing pageview state", {
                sessionId: s,
                changeReason: n
            }), this.Kt = void 0, this._instance.scrollManager.resetContext())
        }, this._instance = e, this.Yt()
    }
    Yt() {
        var e;
        this.Xt = (e = this._instance.sessionManager) == null ? void 0 : e.onSessionId(this.Jt)
    }
    destroy() {
        var e;
        (e = this.Xt) == null || e.call(this), this.Xt = void 0
    }
    doPageView(e, s) {
        var t, n = this.Qt(e, s);
        return this.Kt = {
            pathname: (t = f?.location.pathname) !== null && t !== void 0 ? t : "",
            pageViewId: s,
            timestamp: e
        }, this._instance.scrollManager.resetContext(), n
    }
    doPageLeave(e) {
        var s;
        return this.Qt(e, (s = this.Kt) == null ? void 0 : s.pageViewId)
    }
    doEvent() {
        var e;
        return {
            $pageview_id: (e = this.Kt) == null ? void 0 : e.pageViewId
        }
    }
    Qt(e, s) {
        var t = this.Kt;
        if (!t) return {
            $pageview_id: s
        };
        var n = {
                $pageview_id: s,
                $prev_pageview_id: t.pageViewId
            },
            o = this._instance.scrollManager.getContext();
        if (o && !this._instance.config.disable_scroll_properties) {
            var {
                maxScrollHeight: a,
                lastScrollY: A,
                maxScrollY: l,
                maxContentHeight: c,
                lastContentY: g,
                maxContentY: d
            } = o;
            if (!(_(a) || _(A) || _(l) || _(c) || _(g) || _(d))) {
                a = Math.ceil(a), A = Math.ceil(A), l = Math.ceil(l), c = Math.ceil(c), g = Math.ceil(g), d = Math.ceil(d);
                var u = a <= 1 ? 1 : Se(A / a, 0, 1, D),
                    h = a <= 1 ? 1 : Se(l / a, 0, 1, D),
                    I = c <= 1 ? 1 : Se(g / c, 0, 1, D),
                    p = c <= 1 ? 1 : Se(d / c, 0, 1, D);
                n = z(n, {
                    $prev_pageview_last_scroll: A,
                    $prev_pageview_last_scroll_percentage: u,
                    $prev_pageview_max_scroll: l,
                    $prev_pageview_max_scroll_percentage: h,
                    $prev_pageview_last_content: g,
                    $prev_pageview_last_content_percentage: I,
                    $prev_pageview_max_content: d,
                    $prev_pageview_max_content_percentage: p
                })
            }
        }
        return t.pathname && (n.$prev_pageview_pathname = t.pathname), t.timestamp && (n.$prev_pageview_duration = (e.getTime() - t.timestamp.getTime()) / 1e3), n
    }
}
var Te = (function(i) {
        return i.GZipJS = "gzip-js", i.Base64 = "base64", i
    })({}),
    Be = Uint8Array,
    he = Uint16Array,
    Ss = Uint32Array,
    gr = new Be([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
    dr = new Be([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
    tn = new Be([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
    Oo = function(i, e) {
        for (var s = new he(31), t = 0; t < 31; ++t) s[t] = e += 1 << i[t - 1];
        var n = new Ss(s[30]);
        for (t = 1; t < 30; ++t)
            for (var o = s[t]; o < s[t + 1]; ++o) n[o] = o - s[t] << 5 | t;
        return [s, n]
    },
    Yo = Oo(gr, 2),
    hl = Yo[0],
    Ot = Yo[1];
hl[28] = 258, Ot[258] = 28;
for (var rn = Oo(dr, 0)[1], Ko = new he(32768), Y = 0; Y < 32768; ++Y) {
    var rs = (43690 & Y) >>> 1 | (21845 & Y) << 1;
    rs = (61680 & (rs = (52428 & rs) >>> 2 | (13107 & rs) << 2)) >>> 4 | (3855 & rs) << 4, Ko[Y] = ((65280 & rs) >>> 8 | (255 & rs) << 8) >>> 1
}
var Zs = function(i, e, s) {
        for (var t = i.length, n = 0, o = new he(e); n < t; ++n) ++o[i[n] - 1];
        var a, A = new he(e);
        for (n = 0; n < e; ++n) A[n] = A[n - 1] + o[n - 1] << 1;
        for (a = new he(t), n = 0; n < t; ++n) a[n] = Ko[A[i[n] - 1]++] >>> 15 - i[n];
        return a
    },
    ls = new Be(288);
for (Y = 0; Y < 144; ++Y) ls[Y] = 8;
for (Y = 144; Y < 256; ++Y) ls[Y] = 9;
for (Y = 256; Y < 280; ++Y) ls[Y] = 7;
for (Y = 280; Y < 288; ++Y) ls[Y] = 8;
var Pi = new Be(32);
for (Y = 0; Y < 32; ++Y) Pi[Y] = 5;
var Il = Zs(ls, 9),
    pl = Zs(Pi, 5),
    qo = function(i) {
        return (i / 8 >> 0) + (7 & i && 1)
    },
    Ho = function(i, e, s) {
        (s == null || s > i.length) && (s = i.length);
        var t = new(i instanceof he ? he : i instanceof Ss ? Ss : Be)(s - e);
        return t.set(i.subarray(e, s)), t
    },
    ke = function(i, e, s) {
        s <<= 7 & e;
        var t = e / 8 >> 0;
        i[t] |= s, i[t + 1] |= s >>> 8
    },
    Ps = function(i, e, s) {
        s <<= 7 & e;
        var t = e / 8 >> 0;
        i[t] |= s, i[t + 1] |= s >>> 8, i[t + 2] |= s >>> 16
    },
    rt = function(i, e) {
        for (var s = [], t = 0; t < i.length; ++t) i[t] && s.push({
            s: t,
            f: i[t]
        });
        var n = s.length,
            o = s.slice();
        if (!n) return [new Be(0), 0];
        if (n == 1) {
            var a = new Be(s[0].s + 1);
            return a[s[0].s] = 1, [a, 1]
        }
        s.sort((function(b, k) {
            return b.f - k.f
        })), s.push({
            s: -1,
            f: 25001
        });
        var A = s[0],
            l = s[1],
            c = 0,
            g = 1,
            d = 2;
        for (s[0] = {
                s: -1,
                f: A.f + l.f,
                l: A,
                r: l
            }; g != n - 1;) A = s[s[c].f < s[d].f ? c++ : d++], l = s[c != g && s[c].f < s[d].f ? c++ : d++], s[g++] = {
            s: -1,
            f: A.f + l.f,
            l: A,
            r: l
        };
        var u = o[0].s;
        for (t = 1; t < n; ++t) o[t].s > u && (u = o[t].s);
        var h = new he(u + 1),
            I = Yt(s[g - 1], h, 0);
        if (I > e) {
            t = 0;
            var p = 0,
                m = I - e,
                E = 1 << m;
            for (o.sort((function(b, k) {
                    return h[k.s] - h[b.s] || b.f - k.f
                })); t < n; ++t) {
                var B = o[t].s;
                if (!(h[B] > e)) break;
                p += E - (1 << I - h[B]), h[B] = e
            }
            for (p >>>= m; p > 0;) {
                var v = o[t].s;
                h[v] < e ? p -= 1 << e - h[v]++ - 1 : ++t
            }
            for (; t >= 0 && p; --t) {
                var y = o[t].s;
                h[y] == e && (--h[y], ++p)
            }
            I = e
        }
        return [new Be(h), I]
    },
    Yt = function(i, e, s) {
        return i.s == -1 ? Math.max(Yt(i.l, e, s + 1), Yt(i.r, e, s + 1)) : e[i.s] = s
    },
    nn = function(i) {
        for (var e = i.length; e && !i[--e];);
        for (var s = new he(++e), t = 0, n = i[0], o = 1, a = function(l) {
                s[t++] = l
            }, A = 1; A <= e; ++A)
            if (i[A] == n && A != e) ++o;
            else {
                if (!n && o > 2) {
                    for (; o > 138; o -= 138) a(32754);
                    o > 2 && (a(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), o = 0)
                } else if (o > 3) {
                    for (a(n), --o; o > 6; o -= 6) a(8304);
                    o > 2 && (a(o - 3 << 5 | 8208), o = 0)
                }
                for (; o--;) a(n);
                o = 1, n = i[A]
            } return [s.subarray(0, t), e]
    },
    Ls = function(i, e) {
        for (var s = 0, t = 0; t < e.length; ++t) s += i[t] * e[t];
        return s
    },
    Kt = function(i, e, s) {
        var t = s.length,
            n = qo(e + 2);
        i[n] = 255 & t, i[n + 1] = t >>> 8, i[n + 2] = 255 ^ i[n], i[n + 3] = 255 ^ i[n + 1];
        for (var o = 0; o < t; ++o) i[n + o + 4] = s[o];
        return 8 * (n + 4 + t)
    },
    on = function(i, e, s, t, n, o, a, A, l, c, g) {
        ke(e, g++, s), ++n[256];
        for (var d = rt(n, 15), u = d[0], h = d[1], I = rt(o, 15), p = I[0], m = I[1], E = nn(u), B = E[0], v = E[1], y = nn(p), b = y[0], k = y[1], R = new he(19), S = 0; S < B.length; ++S) R[31 & B[S]]++;
        for (S = 0; S < b.length; ++S) R[31 & b[S]]++;
        for (var M = rt(R, 7), G = M[0], re = M[1], ne = 19; ne > 4 && !G[tn[ne - 1]]; --ne);
        var ge, Ae, _e, cs, Ke = c + 5 << 3,
            is = Ls(n, ls) + Ls(o, Pi) + a,
            we = Ls(n, u) + Ls(o, p) + a + 14 + 3 * ne + Ls(R, G) + (2 * R[16] + 3 * R[17] + 7 * R[18]);
        if (Ke <= is && Ke <= we) return Kt(e, g, i.subarray(l, l + c));
        if (ke(e, g, 1 + (we < is)), g += 2, we < is) {
            ge = Zs(u, h), Ae = u, _e = Zs(p, m), cs = p;
            var qe = Zs(G, re);
            for (ke(e, g, v - 257), ke(e, g + 5, k - 1), ke(e, g + 10, ne - 4), g += 14, S = 0; S < ne; ++S) ke(e, g + 3 * S, G[tn[S]]);
            g += 3 * ne;
            for (var gs = [B, b], le = 0; le < 2; ++le) {
                var Ee = gs[le];
                for (S = 0; S < Ee.length; ++S) {
                    var Ie = 31 & Ee[S];
                    ke(e, g, qe[Ie]), g += G[Ie], Ie > 15 && (ke(e, g, Ee[S] >>> 5 & 127), g += Ee[S] >>> 12)
                }
            }
        } else ge = Il, Ae = ls, _e = pl, cs = Pi;
        for (S = 0; S < A; ++S)
            if (t[S] > 255) {
                Ie = t[S] >>> 18 & 31, Ps(e, g, ge[Ie + 257]), g += Ae[Ie + 257], Ie > 7 && (ke(e, g, t[S] >>> 23 & 31), g += gr[Ie]);
                var ds = 31 & t[S];
                Ps(e, g, _e[ds]), g += cs[ds], ds > 3 && (Ps(e, g, t[S] >>> 5 & 8191), g += dr[ds])
            } else Ps(e, g, ge[t[S]]), g += Ae[t[S]];
        return Ps(e, g, ge[256]), g + Ae[256]
    },
    Cl = new Ss([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
    fl = (function() {
        for (var i = new Ss(256), e = 0; e < 256; ++e) {
            for (var s = e, t = 9; --t;) s = (1 & s && 3988292384) ^ s >>> 1;
            i[e] = s
        }
        return i
    })(),
    El = function(i, e, s, t, n) {
        return (function(o, a, A, l, c, g) {
            var d = o.length,
                u = new Be(l + d + 5 * (1 + Math.floor(d / 7e3)) + c),
                h = u.subarray(l, u.length - c),
                I = 0;
            if (!a || d < 8)
                for (var p = 0; p <= d; p += 65535) {
                    var m = p + 65535;
                    m < d ? I = Kt(h, I, o.subarray(p, m)) : (h[p] = g, I = Kt(h, I, o.subarray(p, d)))
                } else {
                    for (var E = Cl[a - 1], B = E >>> 13, v = 8191 & E, y = (1 << A) - 1, b = new he(32768), k = new he(y + 1), R = Math.ceil(A / 3), S = 2 * R, M = function($i) {
                            return (o[$i] ^ o[$i + 1] << R ^ o[$i + 2] << S) & y
                        }, G = new Ss(25e3), re = new he(288), ne = new he(32), ge = 0, Ae = 0, _e = (p = 0, 0), cs = 0, Ke = 0; p < d; ++p) {
                        var is = M(p),
                            we = 32767 & p,
                            qe = k[is];
                        if (b[we] = qe, k[is] = we, cs <= p) {
                            var gs = d - p;
                            if ((ge > 7e3 || _e > 24576) && gs > 423) {
                                I = on(o, h, 0, G, re, ne, Ae, _e, Ke, p - Ke, I), _e = ge = Ae = 0, Ke = p;
                                for (var le = 0; le < 286; ++le) re[le] = 0;
                                for (le = 0; le < 30; ++le) ne[le] = 0
                            }
                            var Ee = 2,
                                Ie = 0,
                                ds = v,
                                He = we - qe & 32767;
                            if (gs > 2 && is == M(p - He))
                                for (var Qa = Math.min(B, gs) - 1, va = Math.min(32767, p), ya = Math.min(258, gs); He <= va && --ds && we != qe;) {
                                    if (o[p + Ee] == o[p + Ee - He]) {
                                        for (var Je = 0; Je < ya && o[p + Je] == o[p + Je - He]; ++Je);
                                        if (Je > Ee) {
                                            if (Ee = Je, Ie = He, Je > Qa) break;
                                            var xa = Math.min(He, Je - 2),
                                                fr = 0;
                                            for (le = 0; le < xa; ++le) {
                                                var Vi = p - He + le + 32768 & 32767,
                                                    Er = Vi - b[Vi] + 32768 & 32767;
                                                Er > fr && (fr = Er, qe = Vi)
                                            }
                                        }
                                    }
                                    He += (we = qe) - (qe = b[we]) + 32768 & 32767
                                }
                            if (Ie) {
                                G[_e++] = 268435456 | Ot[Ee] << 18 | rn[Ie];
                                var mr = 31 & Ot[Ee],
                                    Br = 31 & rn[Ie];
                                Ae += gr[mr] + dr[Br], ++re[257 + mr], ++ne[Br], cs = p + Ee, ++ge
                            } else G[_e++] = o[p], ++re[o[p]]
                        }
                    }
                    I = on(o, h, g, G, re, ne, Ae, _e, Ke, p - Ke, I)
                }
            return Ho(u, 0, l + qo(I) + c)
        })(i, e.level == null ? 6 : e.level, e.mem == null ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(i.length)))) : 12 + e.mem, s, t, !0)
    },
    nt = function(i, e, s) {
        for (; s; ++e) i[e] = s, s >>>= 8
    };

function ml(i, e) {
    e === void 0 && (e = {});
    var s = (function() {
            var A = 4294967295;
            return {
                p: function(l) {
                    for (var c = A, g = 0; g < l.length; ++g) c = fl[255 & c ^ l[g]] ^ c >>> 8;
                    A = c
                },
                d: function() {
                    return 4294967295 ^ A
                }
            }
        })(),
        t = i.length;
    s.p(i);
    var n, o = El(i, e, 10 + ((n = e).filename && n.filename.length + 1 || 0), 8),
        a = o.length;
    return (function(A, l) {
        var c = l.filename;
        if (A[0] = 31, A[1] = 139, A[2] = 8, A[8] = l.level < 2 ? 4 : l.level == 9 ? 2 : 0, A[9] = 3, l.mtime != 0 && nt(A, 4, Math.floor(new Date(l.mtime || Date.now()) / 1e3)), c) {
            A[3] = 8;
            for (var g = 0; g <= c.length; ++g) A[g + 10] = c.charCodeAt(g)
        }
    })(o, e), nt(o, a - 8, s.d()), nt(o, a - 4, t), o
}
var Bl = function(i) {
        var e, s, t, n, o = "";
        for (e = s = 0, t = (i = (i + "").replace(/\r\n/g, `
`).replace(/\r/g, `
`)).length, n = 0; n < t; n++) {
            var a = i.charCodeAt(n),
                A = null;
            a < 128 ? s++ : A = a > 127 && a < 2048 ? String.fromCharCode(a >> 6 | 192, 63 & a | 128) : String.fromCharCode(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128), Qe(A) || (s > e && (o += i.substring(e, s)), o += A, e = s = n + 1)
        }
        return s > e && (o += i.substring(e, i.length)), o
    },
    Ql = !!yt || !!vt,
    an = "text/plain",
    Li = function(i, e, s) {
        var t;
        s === void 0 && (s = !0);
        var [n, o] = i.split("?"), a = j({}, e), A = (t = o?.split("&").map((c => {
            var g, [d, u] = c.split("="),
                h = s && (g = a[d]) !== null && g !== void 0 ? g : u;
            return delete a[d], d + "=" + h
        }))) !== null && t !== void 0 ? t : [], l = LA(a);
        return l && A.push(l), n + "?" + A.join("&")
    },
    zs = (i, e) => JSON.stringify(i, ((s, t) => typeof t == "bigint" ? t.toString() : t), e),
    ot = i => {
        var {
            data: e,
            compression: s
        } = i;
        if (e) {
            if (s === Te.GZipJS) {
                var t = ml((function(l, c) {
                        var g = l.length;
                        if (typeof TextEncoder < "u") return new TextEncoder().encode(l);
                        for (var d = new Be(l.length + (l.length >>> 1)), u = 0, h = function(E) {
                                d[u++] = E
                            }, I = 0; I < g; ++I) {
                            if (u + 5 > d.length) {
                                var p = new Be(u + 8 + (g - I << 1));
                                p.set(d), d = p
                            }
                            var m = l.charCodeAt(I);
                            m < 128 || c ? h(m) : m < 2048 ? (h(192 | m >>> 6), h(128 | 63 & m)) : m > 55295 && m < 57344 ? (h(240 | (m = 65536 + (1047552 & m) | 1023 & l.charCodeAt(++I)) >>> 18), h(128 | m >>> 12 & 63), h(128 | m >>> 6 & 63), h(128 | 63 & m)) : (h(224 | m >>> 12), h(128 | m >>> 6 & 63), h(128 | 63 & m))
                        }
                        return Ho(d, 0, u)
                    })(zs(e)), {
                        mtime: 0
                    }),
                    n = new Blob([t], {
                        type: an
                    });
                return {
                    contentType: an,
                    body: n,
                    estimatedSize: n.size
                }
            }
            if (s === Te.Base64) {
                var o = (function(l) {
                        var c, g, d, u, h, I = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            p = 0,
                            m = 0,
                            E = "",
                            B = [];
                        if (!l) return l;
                        l = Bl(l);
                        do c = (h = l.charCodeAt(p++) << 16 | l.charCodeAt(p++) << 8 | l.charCodeAt(p++)) >> 18 & 63, g = h >> 12 & 63, d = h >> 6 & 63, u = 63 & h, B[m++] = I.charAt(c) + I.charAt(g) + I.charAt(d) + I.charAt(u); while (p < l.length);
                        switch (E = B.join(""), l.length % 3) {
                            case 1:
                                E = E.slice(0, -2) + "==";
                                break;
                            case 2:
                                E = E.slice(0, -1) + "="
                        }
                        return E
                    })(zs(e)),
                    a = (l => "data=" + encodeURIComponent(typeof l == "string" ? l : zs(l)))(o);
                return {
                    contentType: "application/x-www-form-urlencoded",
                    body: a,
                    estimatedSize: new Blob([a]).size
                }
            }
            var A = zs(e);
            return {
                contentType: "application/json",
                body: A,
                estimatedSize: new Blob([A]).size
            }
        }
    },
    Bi = [];
vt && Bi.push({
    transport: "fetch",
    method: i => {
        var e, s, {
                contentType: t,
                body: n,
                estimatedSize: o
            } = (e = ot(i)) !== null && e !== void 0 ? e : {},
            a = new Headers;
        O(i.headers, (function(g, d) {
            a.append(d, g)
        })), t && a.append("Content-Type", t);
        var A = i.url,
            l = null;
        if (yr) {
            var c = new yr;
            l = {
                signal: c.signal,
                timeout: setTimeout((() => c.abort()), i.timeout)
            }
        }
        vt(A, j({
            method: i?.method || "GET",
            headers: a,
            keepalive: i.method === "POST" && (o || 0) < 52428.8,
            body: n,
            signal: (s = l) == null ? void 0 : s.signal
        }, i.fetchOptions)).then((g => g.text().then((d => {
            var u = {
                statusCode: g.status,
                text: d
            };
            if (g.status === 200) try {
                u.json = JSON.parse(d)
            } catch (h) {
                D.error(h)
            }
            i.callback == null || i.callback(u)
        })))).catch((g => {
            D.error(g), i.callback == null || i.callback({
                statusCode: 0,
                error: g
            })
        })).finally((() => l ? clearTimeout(l.timeout) : null))
    }
}), yt && Bi.push({
    transport: "XHR",
    method: i => {
        var e, s = new yt;
        s.open(i.method || "GET", i.url, !0);
        var {
            contentType: t,
            body: n
        } = (e = ot(i)) !== null && e !== void 0 ? e : {};
        O(i.headers, (function(o, a) {
            s.setRequestHeader(a, o)
        })), t && s.setRequestHeader("Content-Type", t), i.timeout && (s.timeout = i.timeout), i.disableXHRCredentials || (s.withCredentials = !0), s.onreadystatechange = () => {
            if (s.readyState === 4) {
                var o = {
                    statusCode: s.status,
                    text: s.responseText
                };
                if (s.status === 200) try {
                    o.json = JSON.parse(s.responseText)
                } catch {}
                i.callback == null || i.callback(o)
            }
        }, s.send(n)
    }
}), fe != null && fe.sendBeacon && Bi.push({
    transport: "sendBeacon",
    method: i => {
        var e = Li(i.url, {
            beacon: "1"
        });
        try {
            var s, {
                    contentType: t,
                    body: n
                } = (s = ot(i)) !== null && s !== void 0 ? s : {},
                o = typeof n == "string" ? new Blob([n], {
                    type: t
                }) : n;
            fe.sendBeacon(e, o)
        } catch {}
    }
});
var Ti = function(i, e) {
    if (!(function(s) {
            try {
                new RegExp(s)
            } catch {
                return !1
            }
            return !0
        })(e)) return !1;
    try {
        return new RegExp(e).test(i)
    } catch {
        return !1
    }
};

function An(i, e, s) {
    return zs({
        distinct_id: i,
        userPropertiesToSet: e,
        userPropertiesToSetOnce: s
    })
}
var Jo = {
        exact: (i, e) => e.some((s => i.some((t => s === t)))),
        is_not: (i, e) => e.every((s => i.every((t => s !== t)))),
        regex: (i, e) => e.some((s => i.some((t => Ti(s, t))))),
        not_regex: (i, e) => e.every((s => i.every((t => !Ti(s, t))))),
        icontains: (i, e) => e.map(pi).some((s => i.map(pi).some((t => s.includes(t))))),
        not_icontains: (i, e) => e.map(pi).every((s => i.map(pi).every((t => !s.includes(t))))),
        gt: (i, e) => e.some((s => {
            var t = parseFloat(s);
            return !isNaN(t) && i.some((n => t > parseFloat(n)))
        })),
        lt: (i, e) => e.some((s => {
            var t = parseFloat(s);
            return !isNaN(t) && i.some((n => t < parseFloat(n)))
        }))
    },
    pi = i => i.toLowerCase();

function zo(i, e) {
    return !i || Object.entries(i).every((s => {
        var [t, n] = s, o = e?.[t];
        if (_(o) || Qe(o)) return !1;
        var a = [String(o)],
            A = Jo[n.operator];
        return !!A && A(n.values, a)
    }))
}
var at = q("[Error tracking]");
class vl {
    constructor(e) {
        var s, t;
        this.Zt = [], this.ti = new rA([new uA, new QA, new IA, new hA, new mA, new EA, new CA, new BA], dA()), this._instance = e, this.Zt = (s = (t = this._instance.persistence) == null ? void 0 : t.get_property(Rt)) !== null && s !== void 0 ? s : []
    }
    onRemoteConfig(e) {
        var s, t, n;
        if ("errorTracking" in e) {
            var o = (s = (t = e.errorTracking) == null ? void 0 : t.suppressionRules) !== null && s !== void 0 ? s : [],
                a = (n = e.errorTracking) == null ? void 0 : n.captureExtensionExceptions;
            this.Zt = o, this._instance.persistence && this._instance.persistence.register({
                [Rt]: this.Zt,
                [Pr]: a
            })
        }
    }
    get ii() {
        var e, s = !!this._instance.get_property(Pr),
            t = this._instance.config.error_tracking.captureExtensionExceptions;
        return (e = t ?? s) !== null && e !== void 0 && e
    }
    buildProperties(e, s) {
        return this.ti.buildFromUnknown(e, {
            syntheticException: s?.syntheticException,
            mechanism: {
                handled: s?.handled
            }
        })
    }
    sendExceptionEvent(e) {
        var s = e.$exception_list;
        if (this.ei(s)) {
            if (this.ri(s)) return void at.info("Skipping exception capture because a suppression rule matched");
            if (!this.ii && this.si(s)) return void at.info("Skipping exception capture because it was thrown by an extension");
            if (!this._instance.config.error_tracking.__capturePostHogExceptions && this.ni(s)) return void at.info("Skipping exception capture because it was thrown by the PostHog SDK")
        }
        return this._instance.capture("$exception", e, {
            _noTruncate: !0,
            _batchKey: "exceptionEvent",
            oi: !0
        })
    }
    ri(e) {
        if (e.length === 0) return !1;
        var s = e.reduce(((t, n) => {
            var {
                type: o,
                value: a
            } = n;
            return W(o) && o.length > 0 && t.$exception_types.push(o), W(a) && a.length > 0 && t.$exception_values.push(a), t
        }), {
            $exception_types: [],
            $exception_values: []
        });
        return this.Zt.some((t => {
            var n = t.values.map((o => {
                var a, A = Jo[o.operator],
                    l = L(o.value) ? o.value : [o.value],
                    c = (a = s[o.key]) !== null && a !== void 0 ? a : [];
                return l.length > 0 && A(l, c)
            }));
            return t.type === "OR" ? n.some(Boolean) : n.every(Boolean)
        }))
    }
    si(e) {
        return e.flatMap((s => {
            var t, n;
            return (t = (n = s.stacktrace) == null ? void 0 : n.frames) !== null && t !== void 0 ? t : []
        })).some((s => s.filename && s.filename.startsWith("chrome-extension://")))
    }
    ni(e) {
        if (e.length > 0) {
            var s, t, n, o, a = (s = (t = e[0].stacktrace) == null ? void 0 : t.frames) !== null && s !== void 0 ? s : [],
                A = a[a.length - 1];
            return (n = A == null || (o = A.filename) == null ? void 0 : o.includes("posthog.com/static")) !== null && n !== void 0 && n
        }
        return !1
    }
    ei(e) {
        return !P(e) && L(e)
    }
}
var pe = q("[FeatureFlags]"),
    Ts = q("[FeatureFlags]", {
        debugEnabled: !0
    }),
    yl = "errors_while_computing_flags",
    xl = "flag_missing",
    _l = "quota_limited",
    wl = "timeout",
    Dl = "connection_error",
    bl = "unknown_error",
    jl = i => "api_error_" + i,
    At = "$active_feature_flags",
    us = "$override_feature_flags",
    ln = "$feature_flag_payloads",
    Gs = "$override_feature_flag_payloads",
    cn = "$feature_flag_request_id",
    gn = "$feature_flag_evaluated_at",
    dn = i => {
        var e = {};
        for (var [s, t] of mi(i || {})) t && (e[s] = t);
        return e
    },
    Sl = i => {
        var e = i.flags;
        return e ? (i.featureFlags = Object.fromEntries(Object.keys(e).map((s => {
            var t;
            return [s, (t = e[s].variant) !== null && t !== void 0 ? t : e[s].enabled]
        }))), i.featureFlagPayloads = Object.fromEntries(Object.keys(e).filter((s => e[s].enabled)).filter((s => {
            var t;
            return (t = e[s].metadata) == null ? void 0 : t.payload
        })).map((s => {
            var t;
            return [s, (t = e[s].metadata) == null ? void 0 : t.payload]
        })))) : pe.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), i
    },
    Nl = (function(i) {
        return i.FeatureFlags = "feature_flags", i.Recordings = "recordings", i
    })({});
class Rl {
    constructor(e) {
        this.ai = !1, this.li = !1, this.ui = !1, this.hi = !1, this.di = !1, this.vi = !1, this.ci = !1, this._instance = e, this.featureFlagEventHandlers = []
    }
    fi() {
        var e, s = (e = this._instance.config.evaluation_contexts) !== null && e !== void 0 ? e : this._instance.config.evaluation_environments;
        return !this._instance.config.evaluation_environments || this._instance.config.evaluation_contexts || this.ci || (pe.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this.ci = !0), s != null && s.length ? s.filter((t => {
            var n = t && typeof t == "string" && t.trim().length > 0;
            return n || pe.error("Invalid evaluation context found:", t, "Expected non-empty string"), n
        })) : []
    }
    pi() {
        return this.fi().length > 0
    }
    get hasLoadedFlags() {
        return this.li
    }
    getFlags() {
        return Object.keys(this.getFlagVariants())
    }
    getFlagsWithDetails() {
        var e = this._instance.get_property(kt),
            s = this._instance.get_property(us),
            t = this._instance.get_property(Gs);
        if (!t && !s) return e || {};
        var n = z({}, e || {}),
            o = [...new Set([...Object.keys(t || {}), ...Object.keys(s || {})])];
        for (var a of o) {
            var A, l, c = n[a],
                g = s?.[a],
                d = _(g) ? (A = c?.enabled) !== null && A !== void 0 && A : !!g,
                u = _(g) ? c.variant : typeof g == "string" ? g : void 0,
                h = t?.[a],
                I = j({}, c, {
                    enabled: d,
                    variant: d ? u ?? c?.variant : void 0
                });
            d !== c?.enabled && (I.original_enabled = c?.enabled), u !== c?.variant && (I.original_variant = c?.variant), h && (I.metadata = j({}, c?.metadata, {
                payload: h,
                original_payload: c == null || (l = c.metadata) == null ? void 0 : l.payload
            })), n[a] = I
        }
        return this.ai || (pe.warn(" Overriding feature flag details!", {
            flagDetails: e,
            overriddenPayloads: t,
            finalDetails: n
        }), this.ai = !0), n
    }
    getFlagVariants() {
        var e = this._instance.get_property(Qs),
            s = this._instance.get_property(us);
        if (!s) return e || {};
        for (var t = z({}, e), n = Object.keys(s), o = 0; o < n.length; o++) t[n[o]] = s[n[o]];
        return this.ai || (pe.warn(" Overriding feature flags!", {
            enabledFlags: e,
            overriddenFlags: s,
            finalFlags: t
        }), this.ai = !0), t
    }
    getFlagPayloads() {
        var e = this._instance.get_property(ln),
            s = this._instance.get_property(Gs);
        if (!s) return e || {};
        for (var t = z({}, e || {}), n = Object.keys(s), o = 0; o < n.length; o++) t[n[o]] = s[n[o]];
        return this.ai || (pe.warn(" Overriding feature flag payloads!", {
            flagPayloads: e,
            overriddenPayloads: s,
            finalPayloads: t
        }), this.ai = !0), t
    }
    reloadFeatureFlags() {
        this.hi || this._instance.config.advanced_disable_feature_flags || this.gi || (this._instance.mi.emit("featureFlagsReloading", !0), this.gi = setTimeout((() => {
            this.bi()
        }), 5))
    }
    yi() {
        clearTimeout(this.gi), this.gi = void 0
    }
    ensureFlagsLoaded() {
        this.li || this.ui || this.gi || this.reloadFeatureFlags()
    }
    setAnonymousDistinctId(e) {
        this.$anon_distinct_id = e
    }
    setReloadingPaused(e) {
        this.hi = e
    }
    bi(e) {
        var s;
        if (this.yi(), !this._instance.M())
            if (this.ui) this.di = !0;
            else {
                var t = this._instance.config.token,
                    n = this._instance.get_property("$device_id"),
                    o = {
                        token: t,
                        distinct_id: this._instance.get_distinct_id(),
                        groups: this._instance.getGroups(),
                        $anon_distinct_id: this.$anon_distinct_id,
                        person_properties: j({}, ((s = this._instance.persistence) == null ? void 0 : s.get_initial_props()) || {}, this._instance.get_property(Js) || {}),
                        group_properties: this._instance.get_property(os),
                        timezone: Uo()
                    };
                Qe(n) || _(n) || (o.$device_id = n), (e != null && e.disableFlags || this._instance.config.advanced_disable_feature_flags) && (o.disable_flags = !0), this.pi() && (o.evaluation_contexts = this.fi());
                var a = this._instance.config.advanced_only_evaluate_survey_feature_flags ? "&only_evaluate_survey_feature_flags=true" : "",
                    A = this._instance.requestRouter.endpointFor("flags", "/flags/?v=2" + a);
                this.ui = !0, this._instance._send_request({
                    method: "POST",
                    url: A,
                    data: o,
                    compression: this._instance.config.disable_compression ? void 0 : Te.Base64,
                    timeout: this._instance.config.feature_flag_request_timeout_ms,
                    callback: l => {
                        var c, g, d, u = !0;
                        if (l.statusCode === 200 && (this.di || (this.$anon_distinct_id = void 0), u = !1), this.ui = !1, !o.disable_flags || this.di) {
                            this.vi = !u;
                            var h = [];
                            l.error ? l.error instanceof Error ? h.push(l.error.name === "AbortError" ? wl : Dl) : h.push(bl) : l.statusCode !== 200 && h.push(jl(l.statusCode)), (c = l.json) != null && c.errorsWhileComputingFlags && h.push(yl);
                            var I = !((g = l.json) == null || (g = g.quotaLimited) == null || !g.includes(Nl.FeatureFlags));
                            if (I && h.push(_l), (d = this._instance.persistence) == null || d.register({
                                    [Ft]: h
                                }), I) pe.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.");
                            else {
                                var p;
                                o.disable_flags || this.receivedFeatureFlags((p = l.json) !== null && p !== void 0 ? p : {}, u), this.di && (this.di = !1, this.bi())
                            }
                        }
                    }
                })
            }
    }
    getFeatureFlag(e, s) {
        var t;
        if (s === void 0 && (s = {}), this.li || this.getFlags() && this.getFlags().length > 0) {
            var n = this.getFeatureFlagResult(e, s);
            return (t = n?.variant) !== null && t !== void 0 ? t : n?.enabled
        }
        pe.warn('getFeatureFlag for key "' + e + `" failed. Feature flags didn't load in time.`)
    }
    getFeatureFlagDetails(e) {
        return this.getFlagsWithDetails()[e]
    }
    getFeatureFlagPayload(e) {
        var s = this.getFeatureFlagResult(e, {
            send_event: !1
        });
        return s?.payload
    }
    getFeatureFlagResult(e, s) {
        if (s === void 0 && (s = {}), this.li || this.getFlags() && this.getFlags().length > 0) {
            var t = this.getFlagVariants(),
                n = e in t,
                o = t[e],
                a = this.getFlagPayloads()[e],
                A = String(o),
                l = this._instance.get_property(cn) || void 0,
                c = this._instance.get_property(gn) || void 0,
                g = this._instance.get_property(bi) || {};
            if ((s.send_event || !("send_event" in s)) && (!(e in g) || !g[e].includes(A))) {
                var d, u, h, I, p, m, E, B, v, y;
                L(g[e]) ? g[e].push(A) : g[e] = [A], (d = this._instance.persistence) == null || d.register({
                    [bi]: g
                });
                var b = this.getFeatureFlagDetails(e),
                    k = [...(u = this._instance.get_property(Ft)) !== null && u !== void 0 ? u : []];
                _(o) && k.push(xl);
                var R = {
                    $feature_flag: e,
                    $feature_flag_response: o,
                    $feature_flag_payload: a || null,
                    $feature_flag_request_id: l,
                    $feature_flag_evaluated_at: c,
                    $feature_flag_bootstrapped_response: ((h = this._instance.config.bootstrap) == null || (h = h.featureFlags) == null ? void 0 : h[e]) || null,
                    $feature_flag_bootstrapped_payload: ((I = this._instance.config.bootstrap) == null || (I = I.featureFlagPayloads) == null ? void 0 : I[e]) || null,
                    $used_bootstrap_value: !this.vi
                };
                _(b == null || (p = b.metadata) == null ? void 0 : p.version) || (R.$feature_flag_version = b.metadata.version);
                var S, M = (m = b == null || (E = b.reason) == null ? void 0 : E.description) !== null && m !== void 0 ? m : b == null || (B = b.reason) == null ? void 0 : B.code;
                M && (R.$feature_flag_reason = M), b != null && (v = b.metadata) != null && v.id && (R.$feature_flag_id = b.metadata.id), _(b?.original_variant) && _(b?.original_enabled) || (R.$feature_flag_original_response = _(b.original_variant) ? b.original_enabled : b.original_variant), b != null && (y = b.metadata) != null && y.original_payload && (R.$feature_flag_original_payload = b == null || (S = b.metadata) == null ? void 0 : S.original_payload), k.length && (R.$feature_flag_error = k.join(",")), this._instance.capture("$feature_flag_called", R)
            }
            if (n) {
                var G = a;
                if (!_(a)) try {
                    G = JSON.parse(a)
                } catch {}
                return {
                    key: e,
                    enabled: !!o,
                    variant: typeof o == "string" ? o : void 0,
                    payload: G
                }
            }
        } else pe.warn('getFeatureFlagResult for key "' + e + `" failed. Feature flags didn't load in time.`)
    }
    getRemoteConfigPayload(e, s) {
        var t = this._instance.config.token,
            n = {
                distinct_id: this._instance.get_distinct_id(),
                token: t
            };
        this.pi() && (n.evaluation_contexts = this.fi()), this._instance._send_request({
            method: "POST",
            url: this._instance.requestRouter.endpointFor("flags", "/flags/?v=2"),
            data: n,
            compression: this._instance.config.disable_compression ? void 0 : Te.Base64,
            timeout: this._instance.config.feature_flag_request_timeout_ms,
            callback: o => {
                var a, A = (a = o.json) == null ? void 0 : a.featureFlagPayloads;
                s(A?.[e] || void 0)
            }
        })
    }
    isFeatureEnabled(e, s) {
        if (s === void 0 && (s = {}), this.li || this.getFlags() && this.getFlags().length > 0) {
            var t = this.getFeatureFlag(e, s);
            return _(t) ? void 0 : !!t
        }
        pe.warn('isFeatureEnabled for key "' + e + `" failed. Feature flags didn't load in time.`)
    }
    addFeatureFlagsHandler(e) {
        this.featureFlagEventHandlers.push(e)
    }
    removeFeatureFlagsHandler(e) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((s => s !== e))
    }
    receivedFeatureFlags(e, s) {
        if (this._instance.persistence) {
            this.li = !0;
            var t = this.getFlagVariants(),
                n = this.getFlagPayloads(),
                o = this.getFlagsWithDetails();
            (function(a, A, l, c, g) {
                l === void 0 && (l = {}), c === void 0 && (c = {}), g === void 0 && (g = {});
                var d = Sl(a),
                    u = d.flags,
                    h = d.featureFlags,
                    I = d.featureFlagPayloads;
                if (h) {
                    var p = a.requestId,
                        m = a.evaluatedAt;
                    if (L(h)) {
                        pe.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
                        var E = {};
                        if (h)
                            for (var B = 0; B < h.length; B++) E[h[B]] = !0;
                        A && A.register({
                            [At]: h,
                            [Qs]: E
                        })
                    } else {
                        var v = h,
                            y = I,
                            b = u;
                        if (a.errorsWhileComputingFlags)
                            if (u) {
                                var k = new Set(Object.keys(u).filter((R => {
                                    var S;
                                    return !((S = u[R]) != null && S.failed)
                                })));
                                v = j({}, l, Object.fromEntries(Object.entries(v).filter((R => {
                                    var [S] = R;
                                    return k.has(S)
                                })))), y = j({}, c, Object.fromEntries(Object.entries(y || {}).filter((R => {
                                    var [S] = R;
                                    return k.has(S)
                                })))), b = j({}, g, Object.fromEntries(Object.entries(b || {}).filter((R => {
                                    var [S] = R;
                                    return k.has(S)
                                }))))
                            } else v = j({}, l, v), y = j({}, c, y), b = j({}, g, b);
                        A && A.register(j({
                            [At]: Object.keys(dn(v)),
                            [Qs]: v || {},
                            [ln]: y || {},
                            [kt]: b || {}
                        }, p ? {
                            [cn]: p
                        } : {}, m ? {
                            [gn]: m
                        } : {}))
                    }
                }
            })(e, this._instance.persistence, t, n, o), this.wi(s)
        }
    }
    override(e, s) {
        s === void 0 && (s = !1), pe.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
            flags: e,
            suppressWarning: s
        })
    }
    overrideFeatureFlags(e) {
        if (!this._instance.__loaded || !this._instance.persistence) return pe.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags");
        if (e === !1) return this._instance.persistence.unregister(us), this._instance.persistence.unregister(Gs), this.wi(), Ts.info("All overrides cleared");
        if (e && typeof e == "object" && ("flags" in e || "payloads" in e)) {
            var s, t = e;
            if (this.ai = !!((s = t.suppressWarning) !== null && s !== void 0 && s), "flags" in t) {
                if (t.flags === !1) this._instance.persistence.unregister(us), Ts.info("Flag overrides cleared");
                else if (t.flags) {
                    if (L(t.flags)) {
                        for (var n = {}, o = 0; o < t.flags.length; o++) n[t.flags[o]] = !0;
                        this._instance.persistence.register({
                            [us]: n
                        })
                    } else this._instance.persistence.register({
                        [us]: t.flags
                    });
                    Ts.info("Flag overrides set", {
                        flags: t.flags
                    })
                }
            }
            return "payloads" in t && (t.payloads === !1 ? (this._instance.persistence.unregister(Gs), Ts.info("Payload overrides cleared")) : t.payloads && (this._instance.persistence.register({
                [Gs]: t.payloads
            }), Ts.info("Payload overrides set", {
                payloads: t.payloads
            }))), void this.wi()
        }
        this.wi()
    }
    onFeatureFlags(e) {
        if (this.addFeatureFlagsHandler(e), this.li) {
            var {
                flags: s,
                flagVariants: t
            } = this.xi();
            e(s, t)
        }
        return () => this.removeFeatureFlagsHandler(e)
    }
    updateEarlyAccessFeatureEnrollment(e, s, t) {
        var n, o = (this._instance.get_property(Hs) || []).find((c => c.flagKey === e)),
            a = {
                ["$feature_enrollment/" + e]: s
            },
            A = {
                $feature_flag: e,
                $feature_enrollment: s,
                $set: a
            };
        o && (A.$early_access_feature_name = o.name), t && (A.$feature_enrollment_stage = t), this._instance.capture("$feature_enrollment_update", A), this.setPersonPropertiesForFlags(a, !1);
        var l = j({}, this.getFlagVariants(), {
            [e]: s
        });
        (n = this._instance.persistence) == null || n.register({
            [At]: Object.keys(dn(l)),
            [Qs]: l
        }), this.wi()
    }
    getEarlyAccessFeatures(e, s, t) {
        s === void 0 && (s = !1);
        var n = this._instance.get_property(Hs),
            o = t ? "&" + t.map((a => "stage=" + a)).join("&") : "";
        if (n && !s) return e(n);
        this._instance._send_request({
            url: this._instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=" + this._instance.config.token + o),
            method: "GET",
            callback: a => {
                var A, l;
                if (a.json) {
                    var c = a.json.earlyAccessFeatures;
                    return (A = this._instance.persistence) == null || A.unregister(Hs), (l = this._instance.persistence) == null || l.register({
                        [Hs]: c
                    }), e(c)
                }
            }
        })
    }
    xi() {
        var e = this.getFlags(),
            s = this.getFlagVariants();
        return {
            flags: e.filter((t => s[t])),
            flagVariants: Object.keys(s).filter((t => s[t])).reduce(((t, n) => (t[n] = s[n], t)), {})
        }
    }
    wi(e) {
        var {
            flags: s,
            flagVariants: t
        } = this.xi();
        this.featureFlagEventHandlers.forEach((n => n(s, t, {
            errorsLoading: e
        })))
    }
    setPersonPropertiesForFlags(e, s) {
        s === void 0 && (s = !0);
        var t = this._instance.get_property(Js) || {};
        this._instance.register({
            [Js]: j({}, t, e)
        }), s && this._instance.reloadFeatureFlags()
    }
    resetPersonPropertiesForFlags() {
        this._instance.unregister(Js)
    }
    setGroupPropertiesForFlags(e, s) {
        s === void 0 && (s = !0);
        var t = this._instance.get_property(os) || {};
        Object.keys(t).length !== 0 && Object.keys(t).forEach((n => {
            t[n] = j({}, t[n], e[n]), delete e[n]
        })), this._instance.register({
            [os]: j({}, t, e)
        }), s && this._instance.reloadFeatureFlags()
    }
    resetGroupPropertiesForFlags(e) {
        if (e) {
            var s = this._instance.get_property(os) || {};
            this._instance.register({
                [os]: j({}, s, {
                    [e]: {}
                })
            })
        } else this._instance.unregister(os)
    }
    reset() {
        this.li = !1, this.ui = !1, this.hi = !1, this.di = !1, this.vi = !1, this.$anon_distinct_id = void 0, this.yi(), this.ai = !1
    }
}
var kl = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"];
class lt {
    constructor(e, s) {
        this.R = e, this.props = {}, this.$i = !1, this.Ei = (t => {
            var n = "";
            return t.token && (n = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), t.persistence_name ? "ph_" + t.persistence_name : "ph_" + n + "_posthog"
        })(e), this.Y = this.Si(e), this.load(), e.debug && D.info("Persistence loaded", e.persistence, j({}, this.props)), this.update_config(e, e, s), this.save()
    }
    isDisabled() {
        return !!this.ki
    }
    Si(e) {
        kl.indexOf(e.persistence.toLowerCase()) === -1 && (D.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), e.persistence = "localStorage+cookie");
        var s = (function(n) {
                n === void 0 && (n = []);
                var o = [...zA, ...n];
                return j({}, K, {
                    W: function(a) {
                        try {
                            var A = {};
                            try {
                                A = je.W(a) || {}
                            } catch {}
                            var l = z(A, JSON.parse(K.q(a) || "{}"));
                            return K.G(a, l), l
                        } catch {}
                        return null
                    },
                    G: function(a, A, l, c, g, d) {
                        try {
                            K.G(a, A, void 0, void 0, d);
                            var u = {};
                            o.forEach((h => {
                                A[h] && (u[h] = A[h])
                            })), Object.keys(u).length && je.G(a, u, l, c, g, d)
                        } catch (h) {
                            K.B(h)
                        }
                    },
                    V: function(a, A) {
                        try {
                            f?.localStorage.removeItem(a), je.V(a, A)
                        } catch (l) {
                            K.B(l)
                        }
                    }
                })
            })(e.cookie_persisted_properties || []),
            t = e.persistence.toLowerCase();
        return t === "localstorage" && K.H() ? K : t === "localstorage+cookie" && s.H() ? s : t === "sessionstorage" && se.H() ? se : t === "memory" ? VA : t === "cookie" ? je : s.H() ? s : je
    }
    properties() {
        var e = {};
        return O(this.props, (function(s, t) {
            if (t === Qs && ee(s))
                for (var n = Object.keys(s), o = 0; o < n.length; o++) e["$feature/" + n[o]] = s[n[o]];
            else A = t, l = !1, (Qe(a = DA) ? l : vr && a.indexOf === vr ? a.indexOf(A) != -1 : (O(a, (function(c) {
                if (l || (l = c === A)) return wi
            })), l)) || (e[t] = s);
            var a, A, l
        })), e
    }
    load() {
        if (!this.ki) {
            var e = this.Y.W(this.Ei);
            e && (this.props = z({}, e))
        }
    }
    save() {
        this.ki || this.Y.G(this.Ei, this.props, this.Pi, this.Ti, this.Ii, this.R.debug)
    }
    remove() {
        this.Y.V(this.Ei, !1), this.Y.V(this.Ei, !0)
    }
    clear() {
        this.remove(), this.props = {}
    }
    register_once(e, s, t) {
        if (ee(e)) {
            _(s) && (s = "None"), this.Pi = _(t) ? this.Ci : t;
            var n = !1;
            if (O(e, ((o, a) => {
                    this.props.hasOwnProperty(a) && this.props[a] !== s || (this.props[a] = o, n = !0)
                })), n) return this.save(), !0
        }
        return !1
    }
    register(e, s) {
        if (ee(e)) {
            this.Pi = _(s) ? this.Ci : s;
            var t = !1;
            if (O(e, ((n, o) => {
                    e.hasOwnProperty(o) && this.props[o] !== n && (this.props[o] = n, t = !0)
                })), t) return this.save(), !0
        }
        return !1
    }
    unregister(e) {
        e in this.props && (delete this.props[e], this.save())
    }
    update_campaign_params() {
        if (!this.$i) {
            var e = Mo(this.R.custom_campaign_params, this.R.mask_personal_data_properties, this.R.custom_personal_data_properties);
            Bs(ar(e)) || this.register(e), this.$i = !0
        }
    }
    update_search_keyword() {
        var e;
        this.register((e = x?.referrer) ? Po(e) : {})
    }
    update_referrer_info() {
        var e;
        this.register_once({
            $referrer: Lo(),
            $referring_domain: x != null && x.referrer && ((e = Ri(x.referrer)) == null ? void 0 : e.host) || "$direct"
        }, void 0)
    }
    set_initial_person_info() {
        this.props[Tt] || this.props[Gt] || this.register_once({
            [ji]: To(this.R.mask_personal_data_properties, this.R.custom_personal_data_properties)
        }, void 0)
    }
    get_initial_props() {
        var e = {};
        O([Gt, Tt], (a => {
            var A = this.props[a];
            A && O(A, (function(l, c) {
                e["$initial_" + xt(c)] = l
            }))
        }));
        var s, t, n = this.props[ji];
        if (n) {
            var o = (s = Go(n), t = {}, O(s, (function(a, A) {
                t["$initial_" + xt(A)] = a
            })), t);
            z(e, o)
        }
        return e
    }
    safe_merge(e) {
        return O(this.props, (function(s, t) {
            t in e || (e[t] = s)
        })), e
    }
    update_config(e, s, t) {
        if (this.Ci = this.Pi = e.cookie_expiration, this.set_disabled(e.disable_persistence || !!t), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), e.persistence !== s.persistence || !((a, A) => {
                if (a.length !== A.length) return !1;
                var l = [...a].sort(),
                    c = [...A].sort();
                return l.every(((g, d) => g === c[d]))
            })(e.cookie_persisted_properties || [], s.cookie_persisted_properties || [])) {
            var n = this.Si(e),
                o = this.props;
            this.clear(), this.Y = n, this.props = o, this.save()
        }
    }
    set_disabled(e) {
        this.ki = e, this.ki ? this.remove() : this.save()
    }
    set_cross_subdomain(e) {
        e !== this.Ti && (this.Ti = e, this.remove(), this.save())
    }
    set_secure(e) {
        e !== this.Ii && (this.Ii = e, this.remove(), this.save())
    }
    set_event_timer(e, s) {
        var t = this.props[qs] || {};
        t[e] = s, this.props[qs] = t, this.save()
    }
    remove_event_timer(e) {
        var s = (this.props[qs] || {})[e];
        return _(s) || (delete this.props[qs][e], this.save()), s
    }
    get_property(e) {
        return this.props[e]
    }
    set_property(e, s) {
        this.props[e] = s, this.save()
    }
}
var un = q("[Product Tours]"),
    ct = "ph_product_tours";
class Ml {
    constructor(e) {
        this.Ri = null, this.Fi = null, this._instance = e
    }
    onRemoteConfig(e) {
        "productTours" in e && (this._instance.persistence && this._instance.persistence.register({
            [Tr]: !!e.productTours
        }), this.loadIfEnabled())
    }
    loadIfEnabled() {
        var e, s;
        this.Ri || (e = this._instance).config.disable_product_tours || (s = e.persistence) == null || !s.get_property(Tr) || this.it((() => this.Oi()))
    }
    it(e) {
        var s, t;
        (s = N.__PosthogExtensions__) != null && s.generateProductTours ? e() : (t = N.__PosthogExtensions__) == null || t.loadExternalDependency == null || t.loadExternalDependency(this._instance, "product-tours", (n => {
            n ? un.error("Could not load product tours script", n) : e()
        }))
    }
    Oi() {
        var e;
        !this.Ri && (e = N.__PosthogExtensions__) != null && e.generateProductTours && (this.Ri = N.__PosthogExtensions__.generateProductTours(this._instance, !0))
    }
    getProductTours(e, s) {
        if (s === void 0 && (s = !1), !L(this.Fi) || s) {
            var t = this._instance.persistence;
            if (t) {
                var n = t.props[ct];
                if (L(n) && !s) return this.Fi = n, void e(n, {
                    isLoaded: !0
                })
            }
            this._instance._send_request({
                url: this._instance.requestRouter.endpointFor("api", "/api/product_tours/?token=" + this._instance.config.token),
                method: "GET",
                callback: o => {
                    var a = o.statusCode;
                    if (a !== 200 || !o.json) {
                        var A = "Product Tours API could not be loaded, status: " + a;
                        return un.error(A), void e([], {
                            isLoaded: !1,
                            error: A
                        })
                    }
                    var l = L(o.json.product_tours) ? o.json.product_tours : [];
                    this.Fi = l, t && t.register({
                        [ct]: l
                    }), e(l, {
                        isLoaded: !0
                    })
                }
            })
        } else e(this.Fi, {
            isLoaded: !0
        })
    }
    getActiveProductTours(e) {
        P(this.Ri) ? e([], {
            isLoaded: !1,
            error: "Product tours not loaded"
        }) : this.Ri.getActiveProductTours(e)
    }
    showProductTour(e) {
        var s;
        (s = this.Ri) == null || s.showTourById(e)
    }
    previewTour(e) {
        this.Ri ? this.Ri.previewTour(e) : this.it((() => {
            var s;
            this.Oi(), (s = this.Ri) == null || s.previewTour(e)
        }))
    }
    dismissProductTour() {
        var e;
        (e = this.Ri) == null || e.dismissTour("user_clicked_skip")
    }
    nextStep() {
        var e;
        (e = this.Ri) == null || e.nextStep()
    }
    previousStep() {
        var e;
        (e = this.Ri) == null || e.previousStep()
    }
    clearCache() {
        var e;
        this.Fi = null, (e = this._instance.persistence) == null || e.unregister(ct)
    }
    resetTour(e) {
        var s;
        (s = this.Ri) == null || s.resetTour(e)
    }
    resetAllTours() {
        var e;
        (e = this.Ri) == null || e.resetAllTours()
    }
    cancelPendingTour(e) {
        var s;
        (s = this.Ri) == null || s.cancelPendingTour(e)
    }
}
var Us = (function(i) {
    return i.Activation = "events", i.Cancellation = "cancelEvents", i
})({});
(function(i) {
    return i.Button = "button", i.Tab = "tab", i.Selector = "selector", i
})({});
(function(i) {
    return i.TopLeft = "top_left", i.TopRight = "top_right", i.TopCenter = "top_center", i.MiddleLeft = "middle_left", i.MiddleRight = "middle_right", i.MiddleCenter = "middle_center", i.Left = "left", i.Center = "center", i.Right = "right", i.NextToTrigger = "next_to_trigger", i
})({});
(function(i) {
    return i.Top = "top", i.Left = "left", i.Right = "right", i.Bottom = "bottom", i
})({});
var gt = (function(i) {
    return i.Popover = "popover", i.API = "api", i.Widget = "widget", i.ExternalSurvey = "external_survey", i
})({});
(function(i) {
    return i.Open = "open", i.MultipleChoice = "multiple_choice", i.SingleChoice = "single_choice", i.Rating = "rating", i.Link = "link", i
})({});
(function(i) {
    return i.NextQuestion = "next_question", i.End = "end", i.ResponseBased = "response_based", i.SpecificQuestion = "specific_question", i
})({});
(function(i) {
    return i.Once = "once", i.Recurring = "recurring", i.Always = "always", i
})({});
var Vs = (function(i) {
        return i.SHOWN = "survey shown", i.DISMISSED = "survey dismissed", i.SENT = "survey sent", i.ABANDONED = "survey abandoned", i
    })({}),
    dt = (function(i) {
        return i.SURVEY_ID = "$survey_id", i.SURVEY_NAME = "$survey_name", i.SURVEY_RESPONSE = "$survey_response", i.SURVEY_ITERATION = "$survey_iteration", i.SURVEY_ITERATION_START_DATE = "$survey_iteration_start_date", i.SURVEY_PARTIALLY_COMPLETED = "$survey_partially_completed", i.SURVEY_SUBMISSION_ID = "$survey_submission_id", i.SURVEY_QUESTIONS = "$survey_questions", i.SURVEY_COMPLETED = "$survey_completed", i.PRODUCT_TOUR_ID = "$product_tour_id", i.SURVEY_LAST_SEEN_DATE = "$survey_last_seen_date", i
    })({}),
    qt = (function(i) {
        return i.Popover = "popover", i.Inline = "inline", i
    })({}),
    U = q("[Surveys]"),
    Vo = "seenSurvey_",
    Fl = (i, e) => {
        var s = "$survey_" + e + "/" + i.id;
        return i.current_iteration && i.current_iteration > 0 && (s = "$survey_" + e + "/" + i.id + "/" + i.current_iteration), s
    },
    hn = i => ((e, s) => {
        var t = "" + e + s.id;
        return s.current_iteration && s.current_iteration > 0 && (t = "" + e + s.id + "_" + s.current_iteration), t
    })(Vo, i),
    Pl = [gt.Popover, gt.Widget, gt.API],
    Ll = {
        ignoreConditions: !1,
        ignoreDelay: !1,
        displayType: qt.Popover
    };
class ur {
    constructor() {
        this.Mi = {}, this.Mi = {}
    }
    on(e, s) {
        return this.Mi[e] || (this.Mi[e] = []), this.Mi[e].push(s), () => {
            this.Mi[e] = this.Mi[e].filter((t => t !== s))
        }
    }
    emit(e, s) {
        for (var t of this.Mi[e] || []) t(s);
        for (var n of this.Mi["*"] || []) n(e, s)
    }
}

function hs(i, e, s) {
    if (P(i)) return !1;
    switch (s) {
        case "exact":
            return i === e;
        case "contains":
            var t = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
            return new RegExp(t, "i").test(i);
        case "regex":
            try {
                return new RegExp(e).test(i)
            } catch {
                return !1
            }
        default:
            return !1
    }
}
class Tl {
    constructor(e) {
        this.Ai = new ur, this.ji = (s, t) => this.Di(s, t) && this.Li(s, t) && this.Ni(s, t) && this.Ui(s, t), this.Di = (s, t) => t == null || !t.event || s?.event === t?.event, this._instance = e, this.zi = new Set, this.Hi = new Set
    }
    init() {
        var e;
        if (!_((e = this._instance) == null ? void 0 : e._addCaptureHook)) {
            var s;
            (s = this._instance) == null || s._addCaptureHook(((t, n) => {
                this.on(t, n)
            }))
        }
    }
    register(e) {
        var s, t;
        if (!_((s = this._instance) == null ? void 0 : s._addCaptureHook) && (e.forEach((a => {
                var A, l;
                (A = this.Hi) == null || A.add(a), (l = a.steps) == null || l.forEach((c => {
                    var g;
                    (g = this.zi) == null || g.add(c?.event || "")
                }))
            })), (t = this._instance) != null && t.autocapture)) {
            var n, o = new Set;
            e.forEach((a => {
                var A;
                (A = a.steps) == null || A.forEach((l => {
                    l != null && l.selector && o.add(l?.selector)
                }))
            })), (n = this._instance) == null || n.autocapture.setElementSelectors(o)
        }
    }
    on(e, s) {
        var t;
        s != null && e.length != 0 && (this.zi.has(e) || this.zi.has(s?.event)) && this.Hi && ((t = this.Hi) == null ? void 0 : t.size) > 0 && this.Hi.forEach((n => {
            this.Bi(s, n) && this.Ai.emit("actionCaptured", n.name)
        }))
    }
    qi(e) {
        this.onAction("actionCaptured", (s => e(s)))
    }
    Bi(e, s) {
        if (s?.steps == null) return !1;
        for (var t of s.steps)
            if (this.ji(e, t)) return !0;
        return !1
    }
    onAction(e, s) {
        return this.Ai.on(e, s)
    }
    Li(e, s) {
        if (s != null && s.url) {
            var t, n = e == null || (t = e.properties) == null ? void 0 : t.$current_url;
            if (!n || typeof n != "string" || !hs(n, s.url, s.url_matching || "contains")) return !1
        }
        return !0
    }
    Ni(e, s) {
        return !!this.Wi(e, s) && !!this.Gi(e, s) && !!this.Vi(e, s)
    }
    Wi(e, s) {
        var t;
        if (s == null || !s.href) return !0;
        var n = this.Ji(e);
        if (n.length > 0) return n.some((A => hs(A.href, s.href, s.href_matching || "exact")));
        var o, a = (e == null || (t = e.properties) == null ? void 0 : t.$elements_chain) || "";
        return !!a && hs((o = a.match(/(?::|")href="(.*?)"/)) ? o[1] : "", s.href, s.href_matching || "exact")
    }
    Gi(e, s) {
        var t;
        if (s == null || !s.text) return !0;
        var n = this.Ji(e);
        if (n.length > 0) return n.some((c => hs(c.text, s.text, s.text_matching || "exact") || hs(c.$el_text, s.text, s.text_matching || "exact")));
        var o, a, A, l = (e == null || (t = e.properties) == null ? void 0 : t.$elements_chain) || "";
        return !!l && (o = (function(c) {
            for (var g, d = [], u = /(?::|")text="(.*?)"/g; !P(g = u.exec(c));) d.includes(g[1]) || d.push(g[1]);
            return d
        })(l), a = s.text, A = s.text_matching || "exact", o.some((c => hs(c, a, A))))
    }
    Vi(e, s) {
        var t, n;
        if (s == null || !s.selector) return !0;
        var o = e == null || (t = e.properties) == null ? void 0 : t.$element_selectors;
        if (o != null && o.includes(s.selector)) return !0;
        var a = (e == null || (n = e.properties) == null ? void 0 : n.$elements_chain) || "";
        if (s.selector_regex && a) try {
            return new RegExp(s.selector_regex).test(a)
        } catch {
            return !1
        }
        return !1
    }
    Ji(e) {
        var s;
        return (e == null || (s = e.properties) == null ? void 0 : s.$elements) == null ? [] : e?.properties.$elements
    }
    Ui(e, s) {
        return s == null || !s.properties || s.properties.length === 0 || zo(s.properties.reduce(((t, n) => {
            var o = L(n.value) ? n.value.map(String) : n.value != null ? [String(n.value)] : [];
            return t[n.key] = {
                values: o,
                operator: n.operator || "exact"
            }, t
        }), {}), e?.properties)
    }
}
class Gl {
    constructor(e) {
        this._instance = e, this.Ki = new Map, this.Yi = new Map, this.Xi = new Map
    }
    Qi(e, s) {
        return !!e && zo(e.propertyFilters, s?.properties)
    }
    Zi(e, s) {
        var t = new Map;
        return e.forEach((n => {
            var o;
            (o = n.conditions) == null || (o = o[s]) == null || (o = o.values) == null || o.forEach((a => {
                if (a != null && a.name) {
                    var A = t.get(a.name) || [];
                    A.push(n.id), t.set(a.name, A)
                }
            }))
        })), t
    }
    te(e, s, t) {
        var n = (t === Us.Activation ? this.Ki : this.Yi).get(e),
            o = [];
        return this.ie((a => {
            o = a.filter((A => n?.includes(A.id)))
        })), o.filter((a => {
            var A, l = (A = a.conditions) == null || (A = A[t]) == null || (A = A.values) == null ? void 0 : A.find((c => c.name === e));
            return this.Qi(l, s)
        }))
    }
    register(e) {
        var s;
        _((s = this._instance) == null ? void 0 : s._addCaptureHook) || (this.ee(e), this.re(e))
    }
    re(e) {
        var s = e.filter((t => {
            var n, o;
            return ((n = t.conditions) == null ? void 0 : n.actions) && ((o = t.conditions) == null || (o = o.actions) == null || (o = o.values) == null ? void 0 : o.length) > 0
        }));
        s.length !== 0 && (this.se == null && (this.se = new Tl(this._instance), this.se.init(), this.se.qi((t => {
            this.onAction(t)
        }))), s.forEach((t => {
            var n, o, a, A, l;
            t.conditions && (n = t.conditions) != null && n.actions && (o = t.conditions) != null && (o = o.actions) != null && o.values && ((a = t.conditions) == null || (a = a.actions) == null || (a = a.values) == null ? void 0 : a.length) > 0 && ((A = this.se) == null || A.register(t.conditions.actions.values), (l = t.conditions) == null || (l = l.actions) == null || (l = l.values) == null || l.forEach((c => {
                if (c && c.name) {
                    var g = this.Xi.get(c.name);
                    g && g.push(t.id), this.Xi.set(c.name, g || [t.id])
                }
            })))
        })))
    }
    ee(e) {
        var s, t = e.filter((o => {
                var a, A;
                return ((a = o.conditions) == null ? void 0 : a.events) && ((A = o.conditions) == null || (A = A.events) == null || (A = A.values) == null ? void 0 : A.length) > 0
            })),
            n = e.filter((o => {
                var a, A;
                return ((a = o.conditions) == null ? void 0 : a.cancelEvents) && ((A = o.conditions) == null || (A = A.cancelEvents) == null || (A = A.values) == null ? void 0 : A.length) > 0
            }));
        (t.length !== 0 || n.length !== 0) && ((s = this._instance) == null || s._addCaptureHook(((o, a) => {
            this.onEvent(o, a)
        })), this.Ki = this.Zi(e, Us.Activation), this.Yi = this.Zi(e, Us.Cancellation))
    }
    onEvent(e, s) {
        var t, n = this.ne(),
            o = this.oe(),
            a = this.ae(),
            A = ((t = this._instance) == null || (t = t.persistence) == null ? void 0 : t.props[o]) || [];
        if (a === e && s && A.length > 0) {
            var l, c;
            n.info("event matched, removing item from activated items", {
                event: e,
                eventPayload: s,
                existingActivatedItems: A
            });
            var g = (s == null || (l = s.properties) == null ? void 0 : l.$survey_id) || (s == null || (c = s.properties) == null ? void 0 : c.$product_tour_id);
            if (g) {
                var d = A.indexOf(g);
                d >= 0 && (A.splice(d, 1), this.le(A))
            }
        } else {
            if (this.Yi.has(e)) {
                var u = this.te(e, s, Us.Cancellation);
                u.length > 0 && (n.info("cancel event matched, cancelling items", {
                    event: e,
                    itemsToCancel: u.map((I => I.id))
                }), u.forEach((I => {
                    var p = A.indexOf(I.id);
                    p >= 0 && A.splice(p, 1), this.ue(I.id)
                })), this.le(A))
            }
            if (this.Ki.has(e)) {
                n.info("event name matched", {
                    event: e,
                    eventPayload: s,
                    items: this.Ki.get(e)
                });
                var h = this.te(e, s, Us.Activation);
                this.le(A.concat(h.map((I => I.id)) || []))
            }
        }
    }
    onAction(e) {
        var s, t = this.oe(),
            n = ((s = this._instance) == null || (s = s.persistence) == null ? void 0 : s.props[t]) || [];
        this.Xi.has(e) && this.le(n.concat(this.Xi.get(e) || []))
    }
    le(e) {
        var s, t = this.ne(),
            n = this.oe(),
            o = [...new Set(e)].filter((a => !this.he(a)));
        t.info("updating activated items", {
            activatedItems: o
        }), (s = this._instance) == null || (s = s.persistence) == null || s.register({
            [n]: o
        })
    }
    getActivatedIds() {
        var e, s = this.oe(),
            t = (e = this._instance) == null || (e = e.persistence) == null ? void 0 : e.props[s];
        return t || []
    }
    getEventToItemsMap() {
        return this.Ki
    }
    de() {
        return this.se
    }
}
class Ul extends Gl {
    constructor(e) {
        super(e)
    }
    oe() {
        return "$surveys_activated"
    }
    ae() {
        return Vs.SHOWN
    }
    ie(e) {
        var s;
        (s = this._instance) == null || s.getSurveys(e)
    }
    ue(e) {
        var s;
        (s = this._instance) == null || s.cancelPendingSurvey(e)
    }
    ne() {
        return U
    }
    he() {
        return !1
    }
    getSurveys() {
        return this.getActivatedIds()
    }
    getEventToSurveys() {
        return this.getEventToItemsMap()
    }
}
class Ol {
    constructor(e) {
        this.ve = void 0, this._surveyManager = null, this.ce = !1, this.fe = [], this.pe = null, this._instance = e, this._surveyEventReceiver = null
    }
    onRemoteConfig(e) {
        if (!this._instance.config.disable_surveys) {
            var s = e.surveys;
            if (P(s)) return U.warn("Flags not loaded yet. Not loading surveys.");
            var t = L(s);
            this.ve = t ? s.length > 0 : s, U.info("flags response received, isSurveysEnabled: " + this.ve), this.loadIfEnabled()
        }
    }
    reset() {
        localStorage.removeItem("lastSeenSurveyDate");
        for (var e = [], s = 0; s < localStorage.length; s++) {
            var t = localStorage.key(s);
            (t != null && t.startsWith(Vo) || t != null && t.startsWith("inProgressSurvey_")) && e.push(t)
        }
        e.forEach((n => localStorage.removeItem(n)))
    }
    loadIfEnabled() {
        if (!this._surveyManager)
            if (this.ce) U.info("Already initializing surveys, skipping...");
            else if (this._instance.config.disable_surveys) U.info("Disabled. Not loading surveys.");
        else if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) U.info("Not loading surveys in cookieless mode without consent.");
        else {
            var e = N?.__PosthogExtensions__;
            if (e) {
                if (!_(this.ve) || this._instance.config.advanced_enable_surveys) {
                    var s = this.ve || this._instance.config.advanced_enable_surveys;
                    this.ce = !0;
                    try {
                        var t = e.generateSurveys;
                        if (t) return void this._e(t, s);
                        var n = e.loadExternalDependency;
                        if (!n) return void this.ge("PostHog loadExternalDependency extension not found.");
                        n(this._instance, "surveys", (o => {
                            o || !e.generateSurveys ? this.ge("Could not load surveys script", o) : this._e(e.generateSurveys, s)
                        }))
                    } catch (o) {
                        throw this.ge("Error initializing surveys", o), o
                    } finally {
                        this.ce = !1
                    }
                }
            } else U.error("PostHog Extensions not found.")
        }
    }
    _e(e, s) {
        this._surveyManager = e(this._instance, s), this._surveyEventReceiver = new Ul(this._instance), U.info("Surveys loaded successfully"), this.me({
            isLoaded: !0
        })
    }
    ge(e, s) {
        U.error(e, s), this.me({
            isLoaded: !1,
            error: e
        })
    }
    onSurveysLoaded(e) {
        return this.fe.push(e), this._surveyManager && this.me({
            isLoaded: !0
        }), () => {
            this.fe = this.fe.filter((s => s !== e))
        }
    }
    getSurveys(e, s) {
        if (s === void 0 && (s = !1), this._instance.config.disable_surveys) return U.info("Disabled. Not loading surveys."), e([]);
        var t, n = this._instance.get_property(Mt);
        if (n && !s) return e(n, {
            isLoaded: !0
        });
        typeof Promise < "u" && this.pe ? this.pe.then((o => {
            var {
                surveys: a,
                context: A
            } = o;
            return e(a, A)
        })) : (typeof Promise < "u" && (this.pe = new Promise((o => {
            t = o
        }))), this._instance._send_request({
            url: this._instance.requestRouter.endpointFor("api", "/api/surveys/?token=" + this._instance.config.token),
            method: "GET",
            timeout: this._instance.config.surveys_request_timeout_ms,
            callback: o => {
                var a;
                this.pe = null;
                var A = o.statusCode;
                if (A !== 200 || !o.json) {
                    var l = "Surveys API could not be loaded, status: " + A;
                    U.error(l);
                    var c = {
                        isLoaded: !1,
                        error: l
                    };
                    return e([], c), void(t == null || t({
                        surveys: [],
                        context: c
                    }))
                }
                var g, d = o.json.surveys || [],
                    u = d.filter((I => (function(p) {
                        return !(!p.start_date || p.end_date)
                    })(I) && ((function(p) {
                        var m;
                        return !((m = p.conditions) == null || (m = m.events) == null || (m = m.values) == null || !m.length)
                    })(I) || (function(p) {
                        var m;
                        return !((m = p.conditions) == null || (m = m.actions) == null || (m = m.values) == null || !m.length)
                    })(I))));
                u.length > 0 && ((g = this._surveyEventReceiver) == null || g.register(u)), (a = this._instance.persistence) == null || a.register({
                    [Mt]: d
                });
                var h = {
                    isLoaded: !0
                };
                e(d, h), t?.({
                    surveys: d,
                    context: h
                })
            }
        }))
    }
    me(e) {
        for (var s of this.fe) try {
            if (!e.isLoaded) return s([], e);
            this.getSurveys(s)
        } catch (t) {
            U.error("Error in survey callback", t)
        }
    }
    getActiveMatchingSurveys(e, s) {
        if (s === void 0 && (s = !1), !P(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(e, s);
        U.warn("init was not called")
    }
    be(e) {
        var s = null;
        return this.getSurveys((t => {
            var n;
            s = (n = t.find((o => o.id === e))) !== null && n !== void 0 ? n : null
        })), s
    }
    ye(e) {
        if (P(this._surveyManager)) return {
            eligible: !1,
            reason: "SDK is not enabled or survey functionality is not yet loaded"
        };
        var s = typeof e == "string" ? this.be(e) : e;
        return s ? this._surveyManager.checkSurveyEligibility(s) : {
            eligible: !1,
            reason: "Survey not found"
        }
    }
    canRenderSurvey(e) {
        if (P(this._surveyManager)) return U.warn("init was not called"), {
            visible: !1,
            disabledReason: "SDK is not enabled or survey functionality is not yet loaded"
        };
        var s = this.ye(e);
        return {
            visible: s.eligible,
            disabledReason: s.reason
        }
    }
    canRenderSurveyAsync(e, s) {
        return P(this._surveyManager) ? (U.warn("init was not called"), Promise.resolve({
            visible: !1,
            disabledReason: "SDK is not enabled or survey functionality is not yet loaded"
        })) : new Promise((t => {
            this.getSurveys((n => {
                var o, a = (o = n.find((l => l.id === e))) !== null && o !== void 0 ? o : null;
                if (a) {
                    var A = this.ye(a);
                    t({
                        visible: A.eligible,
                        disabledReason: A.reason
                    })
                } else t({
                    visible: !1,
                    disabledReason: "Survey not found"
                })
            }), s)
        }))
    }
    renderSurvey(e, s, t) {
        var n;
        if (P(this._surveyManager)) U.warn("init was not called");
        else {
            var o = typeof e == "string" ? this.be(e) : e;
            if (o != null && o.id)
                if (Pl.includes(o.type)) {
                    var a = x?.querySelector(s);
                    if (a) return (n = o.appearance) != null && n.surveyPopupDelaySeconds ? (U.info("Rendering survey " + o.id + " with delay of " + o.appearance.surveyPopupDelaySeconds + " seconds"), void setTimeout((() => {
                        var A, l;
                        U.info("Rendering survey " + o.id + " with delay of " + ((A = o.appearance) == null ? void 0 : A.surveyPopupDelaySeconds) + " seconds"), (l = this._surveyManager) == null || l.renderSurvey(o, a, t), U.info("Survey " + o.id + " rendered")
                    }), 1e3 * o.appearance.surveyPopupDelaySeconds)) : void this._surveyManager.renderSurvey(o, a, t);
                    U.warn("Survey element not found")
                } else U.warn("Surveys of type " + o.type + " cannot be rendered in the app");
            else U.warn("Survey not found")
        }
    }
    displaySurvey(e, s) {
        var t;
        if (P(this._surveyManager)) U.warn("init was not called");
        else {
            var n = this.be(e);
            if (n) {
                var o = n;
                if ((t = n.appearance) != null && t.surveyPopupDelaySeconds && s.ignoreDelay && (o = j({}, n, {
                        appearance: j({}, n.appearance, {
                            surveyPopupDelaySeconds: 0
                        })
                    })), s.displayType !== qt.Popover && s.initialResponses && U.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), s.ignoreConditions === !1) {
                    var a = this.canRenderSurvey(n);
                    if (!a.visible) return void U.warn("Survey is not eligible to be displayed: ", a.disabledReason)
                }
                s.displayType !== qt.Inline ? this._surveyManager.handlePopoverSurvey(o, s) : this.renderSurvey(o, s.selector, s.properties)
            } else U.warn("Survey not found")
        }
    }
    cancelPendingSurvey(e) {
        P(this._surveyManager) ? U.warn("init was not called") : this._surveyManager.cancelSurvey(e)
    }
    handlePageUnload() {
        var e;
        (e = this._surveyManager) == null || e.handlePageUnload()
    }
}
var Me = q("[Conversations]");
class Yl {
    constructor(e) {
        this.we = void 0, this._conversationsManager = null, this.xe = !1, this.$e = null, this._instance = e
    }
    onRemoteConfig(e) {
        if (!this._instance.config.disable_conversations) {
            var s = e.conversations;
            P(s) || (Oe(s) ? this.we = s : (this.we = s.enabled, this.$e = s), this.loadIfEnabled())
        }
    }
    reset() {
        var e;
        (e = this._conversationsManager) == null || e.reset(), this._conversationsManager = null, this.we = void 0, this.$e = null
    }
    loadIfEnabled() {
        if (!this._conversationsManager && !this.xe && !(this._instance.config.disable_conversations || this._instance.config.cookieless_mode && this._instance.consent.isOptedOut())) {
            var e = N?.__PosthogExtensions__;
            if (e && !_(this.we) && this.we)
                if (this.$e && this.$e.token) {
                    this.xe = !0;
                    try {
                        var s = e.initConversations;
                        if (s) return this.Ee(s), void(this.xe = !1);
                        var t = e.loadExternalDependency;
                        if (!t) return void this.Se("PostHog loadExternalDependency extension not found.");
                        t(this._instance, "conversations", (n => {
                            n || !e.initConversations ? this.Se("Could not load conversations script", n) : this.Ee(e.initConversations), this.xe = !1
                        }))
                    } catch (n) {
                        this.Se("Error initializing conversations", n), this.xe = !1
                    }
                } else Me.error("Conversations enabled but missing token in remote config.")
        }
    }
    Ee(e) {
        if (this.$e) try {
            this._conversationsManager = e(this.$e, this._instance), Me.info("Conversations loaded successfully")
        } catch (s) {
            this.Se("Error completing conversations initialization", s)
        } else Me.error("Cannot complete initialization: remote config is null")
    }
    Se(e, s) {
        Me.error(e, s), this._conversationsManager = null, this.xe = !1
    }
    show() {
        this._conversationsManager ? this._conversationsManager.show() : Me.warn("Conversations not loaded yet.")
    }
    hide() {
        this._conversationsManager && this._conversationsManager.hide()
    }
    isAvailable() {
        return this.we === !0 && !Qe(this._conversationsManager)
    }
    isVisible() {
        var e, s;
        return (e = (s = this._conversationsManager) == null ? void 0 : s.isVisible()) !== null && e !== void 0 && e
    }
    sendMessage(e, s, t) {
        var n = this;
        return ms((function*() {
            return n._conversationsManager ? n._conversationsManager.sendMessage(e, s, t) : (Me.warn("Conversations not available yet."), null)
        }))()
    }
    getMessages(e, s) {
        var t = this;
        return ms((function*() {
            return t._conversationsManager ? t._conversationsManager.getMessages(e, s) : (Me.warn("Conversations not available yet."), null)
        }))()
    }
    markAsRead(e) {
        var s = this;
        return ms((function*() {
            return s._conversationsManager ? s._conversationsManager.markAsRead(e) : (Me.warn("Conversations not available yet."), null)
        }))()
    }
    getTickets(e) {
        var s = this;
        return ms((function*() {
            return s._conversationsManager ? s._conversationsManager.getTickets(e) : (Me.warn("Conversations not available yet."), null)
        }))()
    }
    getCurrentTicketId() {
        var e, s;
        return (e = (s = this._conversationsManager) == null ? void 0 : s.getCurrentTicketId()) !== null && e !== void 0 ? e : null
    }
    getWidgetSessionId() {
        var e, s;
        return (e = (s = this._conversationsManager) == null ? void 0 : s.getWidgetSessionId()) !== null && e !== void 0 ? e : null
    }
}
class Kl {
    constructor(e) {
        var s;
        this.ke = !1, this.Pe = !1, this._instance = e, this._instance && (s = this._instance.config.logs) != null && s.captureConsoleLogs && (this.ke = !0)
    }
    onRemoteConfig(e) {
        var s, t = (s = e.logs) == null ? void 0 : s.captureConsoleLogs;
        !P(t) && t && (this.ke = !0, this.loadIfEnabled())
    }
    reset() {}
    loadIfEnabled() {
        if (this.ke && !this.Pe) {
            var e = q("[logs]"),
                s = N?.__PosthogExtensions__;
            if (s) {
                var t = s.loadExternalDependency;
                t ? t(this._instance, "logs", (n => {
                    var o;
                    n || (o = s.logs) == null || !o.initializeLogs ? e.error("Could not load logs script", n) : (s.logs.initializeLogs(this._instance), this.Pe = !0)
                })) : e.error("PostHog loadExternalDependency extension not found.")
            } else e.error("PostHog Extensions not found.")
        }
    }
}
var In = q("[RateLimiter]");
class ql {
    constructor(e) {
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = s => {
            var t = s.text;
            if (t && t.length) try {
                (JSON.parse(t).quota_limited || []).forEach((n => {
                    In.info((n || "events") + " is quota limited."), this.serverLimits[n] = new Date().getTime() + 6e4
                }))
            } catch (n) {
                return void In.warn('could not rate limit - continuing. Error: "' + n?.message + '"', {
                    text: t
                })
            }
        }, this.instance = e, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
    }
    get captureEventsPerSecond() {
        var e;
        return ((e = this.instance.config.rate_limiting) == null ? void 0 : e.events_per_second) || 10
    }
    get captureEventsBurstLimit() {
        var e;
        return Math.max(((e = this.instance.config.rate_limiting) == null ? void 0 : e.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
    }
    clientRateLimitContext(e) {
        var s, t, n;
        e === void 0 && (e = !1);
        var {
            captureEventsBurstLimit: o,
            captureEventsPerSecond: a
        } = this, A = new Date().getTime(), l = (s = (t = this.instance.persistence) == null ? void 0 : t.get_property(Lt)) !== null && s !== void 0 ? s : {
            tokens: o,
            last: A
        };
        l.tokens += (A - l.last) / 1e3 * a, l.last = A, l.tokens > o && (l.tokens = o);
        var c = l.tokens < 1;
        return c || e || (l.tokens = Math.max(0, l.tokens - 1)), !c || this.lastEventRateLimited || e || this.instance.capture("$$client_ingestion_warning", {
            $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to " + a + " events per second and " + o + " events burst limit."
        }, {
            skip_client_rate_limiting: !0
        }), this.lastEventRateLimited = c, (n = this.instance.persistence) == null || n.set_property(Lt, l), {
            isRateLimited: c,
            remainingTokens: l.tokens
        }
    }
    isServerRateLimited(e) {
        var s = this.serverLimits[e || "events"] || !1;
        return s !== !1 && new Date().getTime() < s
    }
}
var Os = q("[RemoteConfig]");
class $o {
    constructor(e) {
        this._instance = e
    }
    get remoteConfig() {
        var e;
        return (e = N._POSTHOG_REMOTE_CONFIG) == null || (e = e[this._instance.config.token]) == null ? void 0 : e.config
    }
    Te(e) {
        var s, t;
        (s = N.__PosthogExtensions__) != null && s.loadExternalDependency ? (t = N.__PosthogExtensions__) == null || t.loadExternalDependency == null || t.loadExternalDependency(this._instance, "remote-config", (() => e(this.remoteConfig))) : e()
    }
    Ie(e) {
        this._instance._send_request({
            method: "GET",
            url: this._instance.requestRouter.endpointFor("assets", "/array/" + this._instance.config.token + "/config"),
            callback: s => {
                e(s.json)
            }
        })
    }
    load() {
        try {
            if (this.remoteConfig) return Os.info("Using preloaded remote config", this.remoteConfig), this.Ce(this.remoteConfig), void this.Re();
            if (this._instance.M()) return void Os.warn("Remote config is disabled. Falling back to local config.");
            this.Te((e => {
                if (!e) return Os.info("No config found after loading remote JS config. Falling back to JSON."), void this.Ie((s => {
                    this.Ce(s), this.Re()
                }));
                this.Ce(e), this.Re()
            }))
        } catch (e) {
            Os.error("Error loading remote config", e)
        }
    }
    stop() {
        this.Fe && (clearInterval(this.Fe), this.Fe = void 0)
    }
    refresh() {
        this._instance.M() || x?.visibilityState === "hidden" || this._instance.featureFlags.reloadFeatureFlags()
    }
    Re() {
        this.Fe || (this.Fe = setInterval((() => {
            this.refresh()
        }), 3e5))
    }
    Ce(e) {
        e || Os.error("Failed to fetch remote config from PostHog."), this._instance.Ce(e ?? {}), e?.hasFeatureFlags !== !1 && (this._instance.config.advanced_disable_feature_flags_on_first_load || this._instance.featureFlags.ensureFlagsLoaded())
    }
}
var Ht = 3e3;
class Hl {
    constructor(e, s) {
        this.Oe = !0, this.Me = [], this.Ae = Se(s?.flush_interval_ms || Ht, 250, 5e3, D.createLogger("flush interval"), Ht), this.je = e
    }
    enqueue(e) {
        this.Me.push(e), this.De || this.Le()
    }
    unload() {
        this.Ne();
        var e = this.Me.length > 0 ? this.Ue() : {},
            s = Object.values(e);
        [...s.filter((t => t.url.indexOf("/e") === 0)), ...s.filter((t => t.url.indexOf("/e") !== 0))].map((t => {
            this.je(j({}, t, {
                transport: "sendBeacon"
            }))
        }))
    }
    enable() {
        this.Oe = !1, this.Le()
    }
    Le() {
        var e = this;
        this.Oe || (this.De = setTimeout((() => {
            if (this.Ne(), this.Me.length > 0) {
                var s = this.Ue(),
                    t = function() {
                        var o = s[n],
                            a = new Date().getTime();
                        o.data && L(o.data) && O(o.data, (A => {
                            A.offset = Math.abs(A.timestamp - a), delete A.timestamp
                        })), e.je(o)
                    };
                for (var n in s) t()
            }
        }), this.Ae))
    }
    Ne() {
        clearTimeout(this.De), this.De = void 0
    }
    Ue() {
        var e = {};
        return O(this.Me, (s => {
            var t, n = s,
                o = (n ? n.batchKey : null) || n.url;
            _(e[o]) && (e[o] = j({}, n, {
                data: []
            })), (t = e[o].data) == null || t.push(n.data)
        })), this.Me = [], e
    }
}
var Jl = ["retriesPerformedSoFar"];
class zl {
    constructor(e) {
        this.ze = !1, this.He = 3e3, this.Me = [], this._instance = e, this.Me = [], this.Be = !0, !_(f) && "onLine" in f.navigator && (this.Be = f.navigator.onLine, this.qe = () => {
            this.Be = !0, this.Lt()
        }, this.We = () => {
            this.Be = !1
        }, Z(f, "online", this.qe), Z(f, "offline", this.We))
    }
    get length() {
        return this.Me.length
    }
    retriableRequest(e) {
        var {
            retriesPerformedSoFar: s
        } = e, t = Yn(e, Jl);
        Cs(s) && (t.url = Li(t.url, {
            retry_count: s
        })), this._instance._send_request(j({}, t, {
            callback: n => {
                n.statusCode !== 200 && (n.statusCode < 400 || n.statusCode >= 500) && (s ?? 0) < 10 ? this.Ge(j({
                    retriesPerformedSoFar: s
                }, t)) : t.callback == null || t.callback(n)
            }
        }))
    }
    Ge(e) {
        var s = e.retriesPerformedSoFar || 0;
        e.retriesPerformedSoFar = s + 1;
        var t = (function(a) {
                var A = 3e3 * Math.pow(2, a),
                    l = A / 2,
                    c = Math.min(18e5, A),
                    g = (Math.random() - .5) * (c - l);
                return Math.ceil(c + g)
            })(s),
            n = Date.now() + t;
        this.Me.push({
            retryAt: n,
            requestOptions: e
        });
        var o = "Enqueued failed request for retry in " + t;
        navigator.onLine || (o += " (Browser is offline)"), D.warn(o), this.ze || (this.ze = !0, this.Ve())
    }
    Ve() {
        if (this.Je && clearTimeout(this.Je), this.Me.length === 0) return this.ze = !1, void(this.Je = void 0);
        this.Je = setTimeout((() => {
            this.Be && this.Me.length > 0 && this.Lt(), this.Ve()
        }), this.He)
    }
    Lt() {
        var e = Date.now(),
            s = [],
            t = this.Me.filter((o => o.retryAt < e || (s.push(o), !1)));
        if (this.Me = s, t.length > 0)
            for (var {
                    requestOptions: n
                }
                of t) this.retriableRequest(n)
    }
    unload() {
        for (var {
                requestOptions: e
            }
            of(this.Je && (clearTimeout(this.Je), this.Je = void 0), this.ze = !1, _(f) || (this.qe && (f.removeEventListener("online", this.qe), this.qe = void 0), this.We && (f.removeEventListener("offline", this.We), this.We = void 0)), this.Me)) try {
            this._instance._send_request(j({}, e, {
                transport: "sendBeacon"
            }))
        } catch (s) {
            D.error(s)
        }
        this.Me = []
    }
}
class Vl {
    constructor(e) {
        this.Ke = () => {
            var s, t, n, o;
            this.Ye || (this.Ye = {});
            var a = this.scrollElement(),
                A = this.scrollY(),
                l = a ? Math.max(0, a.scrollHeight - a.clientHeight) : 0,
                c = A + (a?.clientHeight || 0),
                g = a?.scrollHeight || 0;
            this.Ye.lastScrollY = Math.ceil(A), this.Ye.maxScrollY = Math.max(A, (s = this.Ye.maxScrollY) !== null && s !== void 0 ? s : 0), this.Ye.maxScrollHeight = Math.max(l, (t = this.Ye.maxScrollHeight) !== null && t !== void 0 ? t : 0), this.Ye.lastContentY = c, this.Ye.maxContentY = Math.max(c, (n = this.Ye.maxContentY) !== null && n !== void 0 ? n : 0), this.Ye.maxContentHeight = Math.max(g, (o = this.Ye.maxContentHeight) !== null && o !== void 0 ? o : 0)
        }, this._instance = e
    }
    getContext() {
        return this.Ye
    }
    resetContext() {
        var e = this.Ye;
        return setTimeout(this.Ke, 0), e
    }
    startMeasuringScrollPosition() {
        Z(f, "scroll", this.Ke, {
            capture: !0
        }), Z(f, "scrollend", this.Ke, {
            capture: !0
        }), Z(f, "resize", this.Ke)
    }
    scrollElement() {
        if (!this._instance.config.scroll_root_selector) return f?.document.documentElement;
        var e = L(this._instance.config.scroll_root_selector) ? this._instance.config.scroll_root_selector : [this._instance.config.scroll_root_selector];
        for (var s of e) {
            var t = f?.document.querySelector(s);
            if (t) return t
        }
    }
    scrollY() {
        if (this._instance.config.scroll_root_selector) {
            var e = this.scrollElement();
            return e && e.scrollTop || 0
        }
        return f && (f.scrollY || f.pageYOffset || f.document.documentElement.scrollTop) || 0
    }
    scrollX() {
        if (this._instance.config.scroll_root_selector) {
            var e = this.scrollElement();
            return e && e.scrollLeft || 0
        }
        return f && (f.scrollX || f.pageXOffset || f.document.documentElement.scrollLeft) || 0
    }
}
var $l = i => To(i?.config.mask_personal_data_properties, i?.config.custom_personal_data_properties);
class pn {
    constructor(e, s, t, n) {
        this.Xe = o => {
            var a = this.Qe();
            if (!a || a.sessionId !== o) {
                var A = {
                    sessionId: o,
                    props: this.Ze(this._instance)
                };
                this.tr.register({
                    [Pt]: A
                })
            }
        }, this._instance = e, this.ir = s, this.tr = t, this.Ze = n || $l, this.ir.onSessionId(this.Xe)
    }
    Qe() {
        return this.tr.props[Pt]
    }
    getSetOnceProps() {
        var e, s = (e = this.Qe()) == null ? void 0 : e.props;
        return s ? "r" in s ? Go(s) : {
            $referring_domain: s.referringDomain,
            $pathname: s.initialPathName,
            utm_source: s.utm_source,
            utm_campaign: s.utm_campaign,
            utm_medium: s.utm_medium,
            utm_content: s.utm_content,
            utm_term: s.utm_term
        } : {}
    }
    getSessionProps() {
        var e = {};
        return O(ar(this.getSetOnceProps()), ((s, t) => {
            t === "$current_url" && (t = "url"), e["$session_entry_" + xt(t)] = s
        })), e
    }
}
var ut = q("[SessionId]");
class Cn {
    on(e, s) {
        return this.er.on(e, s)
    }
    constructor(e, s, t) {
        var n;
        if (this.rr = [], this.sr = void 0, this.er = new ur, this.nr = (g, d) => !(!Cs(g) || !Cs(d)) && Math.abs(g - d) > this.sessionTimeoutMs, !e.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if (e.config.cookieless_mode === "always") throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
        this.R = e.config, this.tr = e.persistence, this.ar = void 0, this.lr = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this.ur = s || Ze, this.hr = t || Ze;
        var o = this.R.persistence_name || this.R.token,
            a = this.R.session_idle_timeout_seconds || 1800;
        if (this._sessionTimeoutMs = 1e3 * Se(a, 60, 36e3, ut.createLogger("session_idle_timeout_seconds"), 1800), e.register({
                $configured_session_timeout_ms: this._sessionTimeoutMs
            }), this.dr(), this.vr = "ph_" + o + "_window_id", this.cr = "ph_" + o + "_primary_window_exists", this.pr()) {
            var A = se.W(this.vr),
                l = se.W(this.cr);
            A && !l ? this.ar = A : se.V(this.vr), se.G(this.cr, !0)
        }
        if ((n = this.R.bootstrap) != null && n.sessionID) try {
            var c = (g => {
                var d = g.replace(/-/g, "");
                if (d.length !== 32) throw new Error("Not a valid UUID");
                if (d[12] !== "7") throw new Error("Not a UUIDv7");
                return parseInt(d.substring(0, 12), 16)
            })(this.R.bootstrap.sessionID);
            this._r(this.R.bootstrap.sessionID, new Date().getTime(), c)
        } catch (g) {
            ut.error("Invalid sessionID in bootstrap", g)
        }
        this.gr()
    }
    get sessionTimeoutMs() {
        return this._sessionTimeoutMs
    }
    onSessionId(e) {
        return _(this.rr) && (this.rr = []), this.rr.push(e), this.lr && e(this.lr, this.ar), () => {
            this.rr = this.rr.filter((s => s !== e))
        }
    }
    pr() {
        return this.R.persistence !== "memory" && !this.tr.ki && se.H()
    }
    mr(e) {
        e !== this.ar && (this.ar = e, this.pr() && se.G(this.vr, e))
    }
    br() {
        return this.ar ? this.ar : this.pr() ? se.W(this.vr) : null
    }
    _r(e, s, t) {
        e === this.lr && s === this._sessionActivityTimestamp && t === this._sessionStartTimestamp || (this._sessionStartTimestamp = t, this._sessionActivityTimestamp = s, this.lr = e, this.tr.register({
            [Di]: [s, e, t]
        }))
    }
    yr() {
        var e = this.tr.props[Di];
        return L(e) && e.length === 2 && e.push(e[0]), e || [0, null, 0]
    }
    resetSessionId() {
        this._r(null, null, null)
    }
    destroy() {
        clearTimeout(this.wr), this.wr = void 0, this.sr && f && (f.removeEventListener("beforeunload", this.sr, {
            capture: !1
        }), this.sr = void 0), this.rr = []
    }
    gr() {
        this.sr = () => {
            this.pr() && se.V(this.cr)
        }, Z(f, "beforeunload", this.sr, {
            capture: !1
        })
    }
    checkAndGetSessionAndWindowId(e, s) {
        if (e === void 0 && (e = !1), s === void 0 && (s = null), this.R.cookieless_mode === "always") throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
        var t = s || new Date().getTime(),
            [n, o, a] = this.yr(),
            A = this.br(),
            l = Cs(a) && Math.abs(t - a) > 864e5,
            c = !1,
            g = !o,
            d = !g && !e && this.nr(t, n);
        g || d || l ? (o = this.ur(), A = this.hr(), ut.info("new session ID generated", {
            sessionId: o,
            windowId: A,
            changeReason: {
                noSessionId: g,
                activityTimeout: d,
                sessionPastMaximumLength: l
            }
        }), a = t, c = !0) : A || (A = this.hr(), c = !0);
        var u = Cs(n) && e && !l ? n : t,
            h = Cs(a) ? a : new Date().getTime();
        return this.mr(A), this._r(o, u, h), e || this.dr(), c && this.rr.forEach((I => I(o, A, c ? {
            noSessionId: g,
            activityTimeout: d,
            sessionPastMaximumLength: l
        } : void 0))), {
            sessionId: o,
            windowId: A,
            sessionStartTimestamp: h,
            changeReason: c ? {
                noSessionId: g,
                activityTimeout: d,
                sessionPastMaximumLength: l
            } : void 0,
            lastActivityTimestamp: n
        }
    }
    dr() {
        clearTimeout(this.wr), this.wr = setTimeout((() => {
            var [e] = this.yr();
            if (this.nr(new Date().getTime(), e)) {
                var s = this.lr;
                this.resetSessionId(), this.er.emit("forcedIdleReset", {
                    idleSessionId: s
                })
            }
        }), 1.1 * this.sessionTimeoutMs)
    }
}
var Wl = ["$set_once", "$set"],
    Ve = q("[SiteApps]");
class Zl {
    constructor(e) {
        this._instance = e, this.$r = [], this.apps = {}
    }
    get isEnabled() {
        return !!this._instance.config.opt_in_site_apps
    }
    Er(e, s) {
        if (s) {
            var t = this.globalsForEvent(s);
            this.$r.push(t), this.$r.length > 1e3 && (this.$r = this.$r.slice(10))
        }
    }
    get siteAppLoaders() {
        var e;
        return (e = N._POSTHOG_REMOTE_CONFIG) == null || (e = e[this._instance.config.token]) == null ? void 0 : e.siteApps
    }
    init() {
        if (this.isEnabled) {
            var e = this._instance._addCaptureHook(this.Er.bind(this));
            this.Sr = () => {
                e(), this.$r = [], this.Sr = void 0
            }
        }
    }
    globalsForEvent(e) {
        var s, t, n, o, a, A, l;
        if (!e) throw new Error("Event payload is required");
        var c = {},
            g = this._instance.get_property("$groups") || [],
            d = this._instance.get_property("$stored_group_properties") || {};
        for (var [u, h] of Object.entries(d)) c[u] = {
            id: g[u],
            type: u,
            properties: h
        };
        var {
            $set_once: I,
            $set: p
        } = e;
        return {
            event: j({}, Yn(e, Wl), {
                properties: j({}, e.properties, p ? {
                    $set: j({}, (s = (t = e.properties) == null ? void 0 : t.$set) !== null && s !== void 0 ? s : {}, p)
                } : {}, I ? {
                    $set_once: j({}, (n = (o = e.properties) == null ? void 0 : o.$set_once) !== null && n !== void 0 ? n : {}, I)
                } : {}),
                elements_chain: (a = (A = e.properties) == null ? void 0 : A.$elements_chain) !== null && a !== void 0 ? a : "",
                distinct_id: (l = e.properties) == null ? void 0 : l.distinct_id
            }),
            person: {
                properties: this._instance.get_property("$stored_person_properties")
            },
            groups: c
        }
    }
    setupSiteApp(e) {
        var s = this.apps[e.id],
            t = () => {
                var A;
                !s.errored && this.$r.length && (Ve.info("Processing " + this.$r.length + " events for site app with id " + e.id), this.$r.forEach((l => s.processEvent == null ? void 0 : s.processEvent(l))), s.processedBuffer = !0), Object.values(this.apps).every((l => l.processedBuffer || l.errored)) && ((A = this.Sr) == null || A.call(this))
            },
            n = !1,
            o = A => {
                s.errored = !A, s.loaded = !0, Ve.info("Site app with id " + e.id + " " + (A ? "loaded" : "errored")), n && t()
            };
        try {
            var {
                processEvent: a
            } = e.init({
                posthog: this._instance,
                callback: A => {
                    o(A)
                }
            });
            a && (s.processEvent = a), n = !0
        } catch (A) {
            Ve.error("Error while initializing PostHog app with config id " + e.id, A), o(!1)
        }
        if (n && s.loaded) try {
            t()
        } catch (A) {
            Ve.error("Error while processing buffered events PostHog app with config id " + e.id, A), s.errored = !0
        }
    }
    kr() {
        var e = this.siteAppLoaders || [];
        for (var s of e) this.apps[s.id] = {
            id: s.id,
            loaded: !1,
            errored: !1,
            processedBuffer: !1
        };
        for (var t of e) this.setupSiteApp(t)
    }
    Pr(e) {
        if (Object.keys(this.apps).length !== 0) {
            var s = this.globalsForEvent(e);
            for (var t of Object.values(this.apps)) try {
                t.processEvent == null || t.processEvent(s)
            } catch (n) {
                Ve.error("Error while processing event " + e.event + " for site app " + t.id, n)
            }
        }
    }
    onRemoteConfig(e) {
        var s, t, n, o = this;
        if ((s = this.siteAppLoaders) != null && s.length) return this.isEnabled ? (this.kr(), void this._instance.on("eventCaptured", (c => this.Pr(c)))) : void Ve.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
        if ((t = this.Sr) == null || t.call(this), (n = e.siteApps) != null && n.length)
            if (this.isEnabled) {
                var a = function(c) {
                    var g;
                    N["__$$ph_site_app_" + c] = o._instance, (g = N.__PosthogExtensions__) == null || g.loadSiteApp == null || g.loadSiteApp(o._instance, l, (d => {
                        if (d) return Ve.error("Error while initializing PostHog app with config id " + c, d)
                    }))
                };
                for (var {
                        id: A,
                        url: l
                    }
                    of e.siteApps) a(A)
            } else Ve.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
    }
}
var Wo = function(i, e) {
        if (!i) return !1;
        var s = i.userAgent;
        if (s && _r(s, e)) return !0;
        try {
            var t = i?.userAgentData;
            if (t != null && t.brands && t.brands.some((n => _r(n?.brand, e)))) return !0
        } catch {}
        return !!i.webdriver
    },
    $s = (function(i) {
        return i.US = "us", i.EU = "eu", i.CUSTOM = "custom", i
    })({}),
    fn = "i.posthog.com";
class Xl {
    constructor(e) {
        this.Tr = {}, this.instance = e
    }
    get apiHost() {
        var e = this.instance.config.api_host.trim().replace(/\/$/, "");
        return e === "https://app.posthog.com" ? "https://us.i.posthog.com" : e
    }
    get flagsApiHost() {
        var e = this.instance.config.flags_api_host;
        return e ? e.trim().replace(/\/$/, "") : this.apiHost
    }
    get uiHost() {
        var e, s = (e = this.instance.config.ui_host) == null ? void 0 : e.replace(/\/$/, "");
        return s || (s = this.apiHost.replace("." + fn, ".posthog.com")), s === "https://app.posthog.com" ? "https://us.posthog.com" : s
    }
    get region() {
        return this.Tr[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this.Tr[this.apiHost] = $s.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this.Tr[this.apiHost] = $s.EU : this.Tr[this.apiHost] = $s.CUSTOM), this.Tr[this.apiHost]
    }
    endpointFor(e, s) {
        if (s === void 0 && (s = ""), s && (s = s[0] === "/" ? s : "/" + s), e === "ui") return this.uiHost + s;
        if (e === "flags") return this.flagsApiHost + s;
        if (this.region === $s.CUSTOM) return this.apiHost + s;
        var t = fn + s;
        switch (e) {
            case "assets":
                return "https://" + this.region + "-assets." + t;
            case "api":
                return "https://" + this.region + "." + t
        }
    }
}
var ec = {
    icontains: (i, e) => !!f && e.href.toLowerCase().indexOf(i.toLowerCase()) > -1,
    not_icontains: (i, e) => !!f && e.href.toLowerCase().indexOf(i.toLowerCase()) === -1,
    regex: (i, e) => !!f && Ti(e.href, i),
    not_regex: (i, e) => !!f && !Ti(e.href, i),
    exact: (i, e) => e.href === i,
    is_not: (i, e) => e.href !== i
};
class oe {
    constructor(e) {
        var s = this;
        this.getWebExperimentsAndEvaluateDisplayLogic = function(t) {
            t === void 0 && (t = !1), s.getWebExperiments((n => {
                oe.Ir("retrieved web experiments from the server"), s.Cr = new Map, n.forEach((o => {
                    if (o.feature_flag_key) {
                        var a;
                        s.Cr && (oe.Ir("setting flag key ", o.feature_flag_key, " to web experiment ", o), (a = s.Cr) == null || a.set(o.feature_flag_key, o));
                        var A = s._instance.getFeatureFlag(o.feature_flag_key);
                        W(A) && o.variants[A] && s.Rr(o.name, A, o.variants[A].transforms)
                    } else if (o.variants)
                        for (var l in o.variants) {
                            var c = o.variants[l];
                            oe.Fr(c) && s.Rr(o.name, l, c.transforms)
                        }
                }))
            }), t)
        }, this._instance = e, this._instance.onFeatureFlags((t => {
            this.onFeatureFlags(t)
        }))
    }
    onFeatureFlags(e) {
        if (this._is_bot()) oe.Ir("Refusing to render web experiment since the viewer is a likely bot");
        else if (!this._instance.config.disable_web_experiments) {
            if (P(this.Cr)) return this.Cr = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
            oe.Ir("applying feature flags", e), e.forEach((s => {
                var t;
                if (this.Cr && (t = this.Cr) != null && t.has(s)) {
                    var n, o = this._instance.getFeatureFlag(s),
                        a = (n = this.Cr) == null ? void 0 : n.get(s);
                    o && a != null && a.variants[o] && this.Rr(a.name, o, a.variants[o].transforms)
                }
            }))
        }
    }
    previewWebExperiment() {
        var e = oe.getWindowLocation();
        if (e != null && e.search) {
            var s = ki(e?.search, "__experiment_id"),
                t = ki(e?.search, "__experiment_variant");
            s && t && (oe.Ir("previewing web experiments " + s + " && " + t), this.getWebExperiments((n => {
                this.Or(parseInt(s), t, n)
            }), !1, !0))
        }
    }
    loadIfEnabled() {
        this._instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
    }
    getWebExperiments(e, s, t) {
        if (this._instance.config.disable_web_experiments && !t) return e([]);
        var n = this._instance.get_property("$web_experiments");
        if (n && !s) return e(n);
        this._instance._send_request({
            url: this._instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=" + this._instance.config.token),
            method: "GET",
            callback: o => {
                if (o.statusCode !== 200 || !o.json) return e([]);
                var a = o.json.experiments || [];
                return e(a)
            }
        })
    }
    Or(e, s, t) {
        var n = t.filter((o => o.id === e));
        n && n.length > 0 && (oe.Ir("Previewing web experiment [" + n[0].name + "] with variant [" + s + "]"), this.Rr(n[0].name, s, n[0].variants[s].transforms))
    }
    static Fr(e) {
        return !P(e.conditions) && oe.Mr(e) && oe.Ar(e)
    }
    static Mr(e) {
        var s;
        if (P(e.conditions) || P((s = e.conditions) == null ? void 0 : s.url)) return !0;
        var t, n, o, a = oe.getWindowLocation();
        return !!a && ((t = e.conditions) == null || !t.url || ec[(n = (o = e.conditions) == null ? void 0 : o.urlMatchType) !== null && n !== void 0 ? n : "icontains"](e.conditions.url, a))
    }
    static getWindowLocation() {
        return f?.location
    }
    static Ar(e) {
        var s;
        if (P(e.conditions) || P((s = e.conditions) == null ? void 0 : s.utm)) return !0;
        var t = Mo();
        if (t.utm_source) {
            var n, o, a, A, l, c, g, d, u = (n = e.conditions) == null || (n = n.utm) == null || !n.utm_campaign || ((o = e.conditions) == null || (o = o.utm) == null ? void 0 : o.utm_campaign) == t.utm_campaign,
                h = (a = e.conditions) == null || (a = a.utm) == null || !a.utm_source || ((A = e.conditions) == null || (A = A.utm) == null ? void 0 : A.utm_source) == t.utm_source,
                I = (l = e.conditions) == null || (l = l.utm) == null || !l.utm_medium || ((c = e.conditions) == null || (c = c.utm) == null ? void 0 : c.utm_medium) == t.utm_medium,
                p = (g = e.conditions) == null || (g = g.utm) == null || !g.utm_term || ((d = e.conditions) == null || (d = d.utm) == null ? void 0 : d.utm_term) == t.utm_term;
            return u && I && p && h
        }
        return !1
    }
    static Ir(e) {
        for (var s = arguments.length, t = new Array(s > 1 ? s - 1 : 0), n = 1; n < s; n++) t[n - 1] = arguments[n];
        D.info("[WebExperiments] " + e, t)
    }
    Rr(e, s, t) {
        this._is_bot() ? oe.Ir("Refusing to render web experiment since the viewer is a likely bot") : s !== "control" ? t.forEach((n => {
            if (n.selector) {
                var o;
                oe.Ir("applying transform of variant " + s + " for experiment " + e + " ", n);
                var a = (o = document) == null ? void 0 : o.querySelectorAll(n.selector);
                a?.forEach((A => {
                    var l = A;
                    n.html && (l.innerHTML = n.html), n.css && l.setAttribute("style", n.css)
                }))
            }
        })) : oe.Ir("Control variants leave the page unmodified.")
    }
    _is_bot() {
        return fe && this._instance ? Wo(fe, this._instance.config.custom_blocked_useragents) : void 0
    }
}
var sc = q("[PostHog ExternalIntegrations]"),
    ic = {
        intercom: "intercom-integration",
        crispChat: "crisp-chat-integration"
    };
class tc {
    constructor(e) {
        this._instance = e
    }
    it(e, s) {
        var t;
        (t = N.__PosthogExtensions__) == null || t.loadExternalDependency == null || t.loadExternalDependency(this._instance, e, (n => {
            if (n) return sc.error("failed to load script", n);
            s()
        }))
    }
    startIfEnabledOrStop() {
        var e = this,
            s = function(a) {
                var A, l, c;
                !n || (A = N.__PosthogExtensions__) != null && (A = A.integrations) != null && A[a] || e.it(ic[a], (() => {
                    var g;
                    (g = N.__PosthogExtensions__) == null || (g = g.integrations) == null || (g = g[a]) == null || g.start(e._instance)
                })), !n && (l = N.__PosthogExtensions__) != null && (l = l.integrations) != null && l[a] && ((c = N.__PosthogExtensions__) == null || (c = c.integrations) == null || (c = c[a]) == null || c.stop())
            };
        for (var [t, n] of Object.entries((o = this._instance.config.integrations) !== null && o !== void 0 ? o : {})) {
            var o;
            s(t)
        }
    }
}
q("[SessionRecording]");
var Jt = "[SessionRecording]",
    Is = q(Jt);
class En {
    get started() {
        var e;
        return !((e = this.jr) == null || !e.isStarted)
    }
    get status() {
        return this.jr ? this.jr.status : this.Dr && !this.Lr ? "disabled" : "lazy_loading"
    }
    constructor(e) {
        if (this._forceAllowLocalhostNetworkCapture = !1, this.Dr = !1, this.Nr = !1, this.Ur = void 0, this._instance = e, !this._instance.sessionManager) throw Is.error("started without valid sessionManager"), new Error(Jt + " started without valid sessionManager. This is a bug.");
        if (this._instance.config.cookieless_mode === "always") throw new Error(Jt + ' cannot be used with cookieless_mode="always"')
    }
    get Lr() {
        var e, s = !((e = this._instance.get_property(di)) == null || !e.enabled),
            t = !this._instance.config.disable_session_recording,
            n = this._instance.config.disable_session_recording || this._instance.consent.isOptedOut();
        return f && s && t && !n
    }
    startIfEnabledOrStop(e) {
        var s;
        if (!this.Lr || (s = this.jr) == null || !s.isStarted) {
            var t = !_(Object.assign) && !_(Array.from);
            this.Lr && t ? (this.zr(e), Is.info("starting")) : this.stopRecording()
        }
    }
    zr(e) {
        var s, t, n;
        this.Lr && (N != null && (s = N.__PosthogExtensions__) != null && (s = s.rrweb) != null && s.record && (t = N.__PosthogExtensions__) != null && t.initSessionRecording ? this.Hr(e) : (n = N.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, this.Br, (o => {
            if (o) return Is.error("could not load recorder", o);
            this.Hr(e)
        })))
    }
    stopRecording() {
        var e, s;
        (e = this.Ur) == null || e.call(this), this.Ur = void 0, (s = this.jr) == null || s.stop()
    }
    qr() {
        var e;
        (e = this._instance.persistence) == null || e.unregister(po)
    }
    Wr(e) {
        if (this._instance.persistence) {
            var s, t, n = this._instance.persistence,
                o = () => {
                    var a = e.sessionRecording === !1 ? void 0 : e.sessionRecording,
                        A = a?.sampleRate,
                        l = P(A) ? null : parseFloat(A);
                    P(l) && this.qr();
                    var c = a?.minimumDurationMilliseconds;
                    n.register({
                        [di]: j({
                            cache_timestamp: Date.now(),
                            enabled: !!a
                        }, a, {
                            networkPayloadCapture: j({
                                capturePerformance: e.capturePerformance
                            }, a?.networkPayloadCapture),
                            canvasRecording: {
                                enabled: a?.recordCanvas,
                                fps: a?.canvasFps,
                                quality: a?.canvasQuality
                            },
                            sampleRate: l,
                            minimumDurationMilliseconds: _(c) ? null : c,
                            endpoint: a?.endpoint,
                            triggerMatchType: a?.triggerMatchType,
                            masking: a?.masking,
                            urlTriggers: a?.urlTriggers
                        })
                    })
                };
            o(), (s = this.Ur) == null || s.call(this), this.Ur = (t = this._instance.sessionManager) == null ? void 0 : t.onSessionId(o)
        }
    }
    onRemoteConfig(e) {
        "sessionRecording" in e ? e.sessionRecording !== !1 ? (this.Nr = !1, this.Wr(e), this.Dr = !0, this.startIfEnabledOrStop()) : this.Dr = !0 : Is.info("skipping remote config with no sessionRecording", e)
    }
    log(e, s) {
        var t;
        s === void 0 && (s = "log"), (t = this.jr) != null && t.log ? this.jr.log(e, s) : Is.warn("log called before recorder was ready")
    }
    get Br() {
        var e, s, t = (e = this._instance) == null || (e = e.persistence) == null ? void 0 : e.get_property(di);
        return (t == null || (s = t.scriptConfig) == null ? void 0 : s.script) || "lazy-recorder"
    }
    Gr() {
        var e, s = this._instance.get_property(di);
        if (!s) return !1;
        var t = (e = (typeof s == "object" ? s : JSON.parse(s)).cache_timestamp) !== null && e !== void 0 ? e : Date.now();
        return Date.now() - t <= 3e5
    }
    Hr(e) {
        var s, t;
        if ((s = N.__PosthogExtensions__) == null || !s.initSessionRecording) throw Error("Called on script loaded before session recording is available");
        this.jr || (this.jr = (t = N.__PosthogExtensions__) == null ? void 0 : t.initSessionRecording(this._instance), this.jr._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), this.Gr() ? this.jr.start(e) : this.Nr || (this.Nr = !0, Is.info("persisted remote config is stale, requesting fresh config before starting"), new $o(this._instance).load())
    }
    onRRwebEmit(e) {
        var s;
        (s = this.jr) == null || s.onRRwebEmit == null || s.onRRwebEmit(e)
    }
    overrideLinkedFlag() {
        var e, s;
        this.jr || (s = this._instance.persistence) == null || s.register({
            $replay_override_linked_flag: !0
        }), (e = this.jr) == null || e.overrideLinkedFlag()
    }
    overrideSampling() {
        var e, s;
        this.jr || (s = this._instance.persistence) == null || s.register({
            $replay_override_sampling: !0
        }), (e = this.jr) == null || e.overrideSampling()
    }
    overrideTrigger(e) {
        var s, t;
        this.jr || (t = this._instance.persistence) == null || t.register({
            [e === "url" ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0
        }), (s = this.jr) == null || s.overrideTrigger(e)
    }
    get sdkDebugProperties() {
        var e;
        return ((e = this.jr) == null ? void 0 : e.sdkDebugProperties) || {
            $recording_status: this.status
        }
    }
    tryAddCustomEvent(e, s) {
        var t;
        return !((t = this.jr) == null || !t.tryAddCustomEvent(e, s))
    }
}
var Xs = {},
    ht = 0,
    zt = () => {},
    fs = "posthog",
    Zo = !Ql && de?.indexOf("MSIE") === -1 && de?.indexOf("Mozilla") === -1,
    mn = i => {
        var e;
        return j({
            api_host: "https://us.i.posthog.com",
            flags_api_host: null,
            ui_host: null,
            token: "",
            autocapture: !0,
            cross_subdomain_cookie: wA(x?.location),
            persistence: "localStorage+cookie",
            persistence_name: "",
            cookie_persisted_properties: [],
            loaded: zt,
            save_campaign_params: !0,
            custom_campaign_params: [],
            custom_blocked_useragents: [],
            save_referrer: !0,
            capture_pageleave: "if_capture_pageview",
            defaults: i ?? "unset",
            __preview_deferred_init_extensions: !1,
            debug: ie && W(ie?.search) && ie.search.indexOf("__posthog_debug=true") !== -1 || !1,
            cookie_expiration: 365,
            upgrade: !1,
            disable_session_recording: !1,
            disable_persistence: !1,
            disable_web_experiments: !0,
            disable_surveys: !1,
            disable_surveys_automatic_display: !1,
            disable_conversations: !1,
            disable_product_tours: !1,
            disable_external_dependency_loading: !1,
            enable_recording_console_log: void 0,
            secure_cookie: (f == null || (e = f.location) == null ? void 0 : e.protocol) === "https:",
            ip: !1,
            opt_out_capturing_by_default: !1,
            opt_out_persistence_by_default: !1,
            opt_out_useragent_filter: !1,
            opt_out_capturing_persistence_type: "localStorage",
            consent_persistence_name: null,
            opt_out_capturing_cookie_prefix: null,
            opt_in_site_apps: !1,
            property_denylist: [],
            respect_dnt: !1,
            sanitize_properties: null,
            request_headers: {},
            request_batching: !0,
            properties_string_max_length: 65535,
            mask_all_element_attributes: !1,
            mask_all_text: !1,
            mask_personal_data_properties: !1,
            custom_personal_data_properties: [],
            advanced_disable_flags: !1,
            advanced_disable_decide: !1,
            advanced_disable_feature_flags: !1,
            advanced_disable_feature_flags_on_first_load: !1,
            advanced_only_evaluate_survey_feature_flags: !1,
            advanced_enable_surveys: !1,
            advanced_disable_toolbar_metrics: !1,
            feature_flag_request_timeout_ms: 3e3,
            surveys_request_timeout_ms: 1e4,
            on_request_error: s => {
                var t = "Bad HTTP status: " + s.statusCode + " " + s.text;
                D.error(t)
            },
            get_device_id: s => s,
            capture_performance: void 0,
            name: "posthog",
            bootstrap: {},
            disable_compression: !1,
            session_idle_timeout_seconds: 1800,
            person_profiles: "identified_only",
            before_send: void 0,
            request_queue_config: {
                flush_interval_ms: Ht
            },
            error_tracking: {},
            _onCapture: zt,
            __preview_eager_load_replay: !1
        }, (s => ({
            rageclick: !(s && s >= "2025-11-30") || {
                content_ignorelist: !0
            },
            capture_pageview: !(s && s >= "2025-05-24") || "history_change",
            session_recording: s && s >= "2025-11-30" ? {
                strictMinimumDuration: !0
            } : {},
            external_scripts_inject_target: s && s >= "2026-01-30" ? "head" : "body",
            internal_or_test_user_hostname: s && s >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0
        }))(i))
    },
    Bn = i => {
        var e = {};
        _(i.process_person) || (e.person_profiles = i.process_person), _(i.xhr_headers) || (e.request_headers = i.xhr_headers), _(i.cookie_name) || (e.persistence_name = i.cookie_name), _(i.disable_cookie) || (e.disable_persistence = i.disable_cookie), _(i.store_google) || (e.save_campaign_params = i.store_google), _(i.verbose) || (e.debug = i.verbose);
        var s = z({}, e, i);
        return L(i.property_blacklist) && (_(i.property_denylist) ? s.property_denylist = i.property_blacklist : L(i.property_denylist) ? s.property_denylist = [...i.property_blacklist, ...i.property_denylist] : D.error("Invalid value for property_denylist config: " + i.property_denylist)), s
    };
class rc {
    constructor() {
        this.__forceAllowLocalhost = !1
    }
    get Vr() {
        return this.__forceAllowLocalhost
    }
    set Vr(e) {
        D.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e
    }
}
class oi {
    get decideEndpointWasHit() {
        var e, s;
        return (e = (s = this.featureFlags) == null ? void 0 : s.hasLoadedFlags) !== null && e !== void 0 && e
    }
    get flagsEndpointWasHit() {
        var e, s;
        return (e = (s = this.featureFlags) == null ? void 0 : s.hasLoadedFlags) !== null && e !== void 0 && e
    }
    constructor() {
        this.webPerformance = new rc, this.Jr = !1, this.version = Fe.LIB_VERSION, this.mi = new ur, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = mn(), this.SentryIntegration = il, this.sentryIntegration = e => (function(s, t) {
            var n = ko(s, t);
            return {
                name: Ro,
                processEvent: o => n(o)
            }
        })(this, e), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this.Kr = !1, this.Yr = null, this.Xr = null, this.Qr = null, this.featureFlags = new Rl(this), this.toolbar = new rl(this), this.scrollManager = new Vl(this), this.pageViewManager = new sn(this), this.surveys = new Ol(this), this.conversations = new Yl(this), this.logs = new Kl(this), this.experiments = new oe(this), this.exceptions = new vl(this), this.rateLimiter = new ql(this), this.requestRouter = new Xl(this), this.consent = new $A(this), this.externalIntegrations = new tc(this), this.people = {
            set: (e, s, t) => {
                var n = W(e) ? {
                    [e]: s
                } : e;
                this.setPersonProperties(n), t?.({})
            },
            set_once: (e, s, t) => {
                var n = W(e) ? {
                    [e]: s
                } : e;
                this.setPersonProperties(void 0, n), t?.({})
            }
        }, this.on("eventCaptured", (e => D.info('send "' + e?.event + '"', e)))
    }
    init(e, s, t) {
        if (t && t !== fs) {
            var n, o = (n = Xs[t]) !== null && n !== void 0 ? n : new oi;
            return o._init(e, s, t), Xs[t] = o, Xs[fs][t] = o, o
        }
        return this._init(e, s, t)
    }
    _init(e, s, t) {
        var n;
        if (s === void 0 && (s = {}), _(e) || _t(e)) return D.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
        if (this.__loaded) return this;
        this.__loaded = !0, this.config = {}, s.debug = this.Zr(s.debug), this.ts = s, this.es = [], s.person_profiles ? this.Xr = s.person_profiles : s.process_person && (this.Xr = s.process_person), this.set_config(z({}, mn(s.defaults), Bn(s), {
            name: t,
            token: e
        })), this.config.on_xhr_error && D.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = s.disable_compression ? void 0 : Te.GZipJS;
        var o = this.rs();
        this.persistence = new lt(this.config, o), this.sessionPersistence = this.config.persistence === "sessionStorage" || this.config.persistence === "memory" ? this.persistence : new lt(j({}, this.config, {
            persistence: "sessionStorage"
        }), o);
        var a = j({}, this.persistence.props),
            A = j({}, this.sessionPersistence.props);
        this.register({
            $initialization_time: new Date().toISOString()
        }), this.ss = new Hl((B => this.ns(B)), this.config.request_queue_config), this.os = new zl(this), this.__request_queue = [];
        var l = this.config.cookieless_mode === "always" || this.config.cookieless_mode === "on_reject" && this.consent.isExplicitlyOptedOut();
        if (l || (this.sessionManager = new Cn(this), this.sessionPropsManager = new pn(this, this.sessionManager, this.persistence)), this.config.__preview_deferred_init_extensions ? (D.info("Deferring extension initialization to improve startup performance"), setTimeout((() => {
                this.ls(l)
            }), 0)) : (D.info("Initializing extensions synchronously"), this.ls(l)), Fe.DEBUG = Fe.DEBUG || this.config.debug, Fe.DEBUG && D.info("Starting in debug mode", {
                this: this,
                config: s,
                thisC: j({}, this.config),
                p: a,
                s: A
            }), ((n = s.bootstrap) == null ? void 0 : n.distinctID) !== void 0) {
            var c, g, d = this.config.get_device_id(Ze()),
                u = (c = s.bootstrap) != null && c.isIdentifiedID ? d : s.bootstrap.distinctID;
            this.persistence.set_property(Pe, (g = s.bootstrap) != null && g.isIdentifiedID ? "identified" : "anonymous"), this.register({
                distinct_id: s.bootstrap.distinctID,
                $device_id: u
            })
        }
        if (this.us()) {
            var h, I, p = Object.keys(((h = s.bootstrap) == null ? void 0 : h.featureFlags) || {}).filter((B => {
                    var v;
                    return !((v = s.bootstrap) == null || (v = v.featureFlags) == null || !v[B])
                })).reduce(((B, v) => {
                    var y;
                    return B[v] = ((y = s.bootstrap) == null || (y = y.featureFlags) == null ? void 0 : y[v]) || !1, B
                }), {}),
                m = Object.keys(((I = s.bootstrap) == null ? void 0 : I.featureFlagPayloads) || {}).filter((B => p[B])).reduce(((B, v) => {
                    var y, b;
                    return (y = s.bootstrap) != null && (y = y.featureFlagPayloads) != null && y[v] && (B[v] = (b = s.bootstrap) == null || (b = b.featureFlagPayloads) == null ? void 0 : b[v]), B
                }), {});
            this.featureFlags.receivedFeatureFlags({
                featureFlags: p,
                featureFlagPayloads: m
            })
        }
        if (l) this.register_once({
            distinct_id: ks,
            $device_id: null
        }, "");
        else if (!this.get_distinct_id()) {
            var E = this.config.get_device_id(Ze());
            this.register_once({
                distinct_id: E,
                $device_id: E
            }, ""), this.persistence.set_property(Pe, "anonymous")
        }
        return Z(f, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
        }), this.toolbar.maybeLoadToolbar(), s.segment ? sl(this, (() => this.hs())) : this.hs(), Ge(this.config._onCapture) && this.config._onCapture !== zt && (D.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (B => this.config._onCapture(B.event, B)))), this.config.ip && D.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this
    }
    ls(e) {
        var s = performance.now();
        this.historyAutocapture = new el(this), this.historyAutocapture.startIfEnabled();
        var t = [];
        t.push((() => {
            new ol(this).startIfEnabledOrStop()
        })), t.push((() => {
            var n;
            this.siteApps = new Zl(this), (n = this.siteApps) == null || n.init()
        })), e || t.push((() => {
            this.sessionRecording = new En(this), this.sessionRecording.startIfEnabledOrStop()
        })), this.config.disable_scroll_properties || t.push((() => {
            this.scrollManager.startMeasuringScrollPosition()
        })), t.push((() => {
            this.autocapture = new OA(this), this.autocapture.startIfEnabled()
        })), t.push((() => {
            this.surveys.loadIfEnabled()
        })), t.push((() => {
            this.logs.loadIfEnabled()
        })), t.push((() => {
            this.conversations.loadIfEnabled()
        })), t.push((() => {
            this.productTours = new Ml(this), this.productTours.loadIfEnabled()
        })), t.push((() => {
            this.heatmaps = new ul(this), this.heatmaps.startIfEnabled()
        })), t.push((() => {
            this.webVitalsAutocapture = new gl(this)
        })), t.push((() => {
            this.exceptionObserver = new XA(this), this.exceptionObserver.startIfEnabledOrStop()
        })), t.push((() => {
            this.deadClicksAutocapture = new No(this, ZA), this.deadClicksAutocapture.startIfEnabledOrStop()
        })), t.push((() => {
            if (this.ds) {
                var n = this.ds;
                this.ds = void 0, this.Ce(n)
            }
        })), this.vs(t, s)
    }
    vs(e, s) {
        for (; e.length > 0;) {
            if (this.config.__preview_deferred_init_extensions && performance.now() - s >= 30 && e.length > 0) return void setTimeout((() => {
                this.vs(e, s)
            }), 0);
            var t = e.shift();
            if (t) try {
                t()
            } catch (o) {
                D.error("Error initializing extension:", o)
            }
        }
        var n = Math.round(performance.now() - s);
        this.register_for_session({
            $sdk_debug_extensions_init_method: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            $sdk_debug_extensions_init_time_ms: n
        }), this.config.__preview_deferred_init_extensions && D.info("PostHog extensions initialized (" + n + "ms)")
    }
    Ce(e) {
        var s, t, n, o, a, A, l, c, g;
        if (!x || !x.body) return D.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
            this.Ce(e)
        }), 500);
        this.config.__preview_deferred_init_extensions && (this.ds = e), this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = F(e.supportedCompression, Te.GZipJS) ? Te.GZipJS : F(e.supportedCompression, Te.Base64) ? Te.Base64 : void 0), (s = e.analytics) != null && s.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), this.set_config({
            person_profiles: this.Xr ? this.Xr : "identified_only"
        }), (t = this.siteApps) == null || t.onRemoteConfig(e), (n = this.sessionRecording) == null || n.onRemoteConfig(e), (o = this.autocapture) == null || o.onRemoteConfig(e), (a = this.heatmaps) == null || a.onRemoteConfig(e), this.surveys.onRemoteConfig(e), this.logs.onRemoteConfig(e), this.conversations.onRemoteConfig(e), (A = this.productTours) == null || A.onRemoteConfig(e), (l = this.webVitalsAutocapture) == null || l.onRemoteConfig(e), (c = this.exceptionObserver) == null || c.onRemoteConfig(e), this.exceptions.onRemoteConfig(e), (g = this.deadClicksAutocapture) == null || g.onRemoteConfig(e)
    }
    hs() {
        try {
            this.config.loaded(this)
        } catch (t) {
            D.critical("`loaded` function failed", t)
        }
        if (this.cs(), this.config.internal_or_test_user_hostname && ie != null && ie.hostname) {
            var e = ie.hostname,
                s = this.config.internal_or_test_user_hostname;
            (typeof s == "string" ? e === s : s.test(e)) && this.setInternalOrTestUser()
        }
        this.config.capture_pageview && setTimeout((() => {
            (this.consent.isOptedIn() || this.config.cookieless_mode === "always") && this.fs()
        }), 1), this.ps = new $o(this), this.ps.load()
    }
    cs() {
        var e;
        this.is_capturing() && this.config.request_batching && ((e = this.ss) == null || e.enable())
    }
    _dom_loaded() {
        this.is_capturing() && Xe(this.__request_queue, (e => this.ns(e))), this.__request_queue = [], this.cs()
    }
    _handle_unload() {
        var e, s;
        this.surveys.handlePageUnload(), this.config.request_batching ? (this._s() && this.capture("$pageleave"), (e = this.ss) == null || e.unload(), (s = this.os) == null || s.unload()) : this._s() && this.capture("$pageleave", null, {
            transport: "sendBeacon"
        })
    }
    _send_request(e) {
        this.__loaded && (Zo ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, e.url = Li(e.url, {
            ip: this.config.ip ? 1 : 0
        }), e.headers = j({}, this.config.request_headers, e.headers), e.compression = e.compression === "best-available" ? this.compression : e.compression, e.disableXHRCredentials = this.config.__preview_disable_xhr_credentials, this.config.__preview_disable_beacon && (e.disableTransport = ["sendBeacon"]), e.fetchOptions = e.fetchOptions || this.config.fetch_options, (s => {
            var t, n, o, a = j({}, s);
            a.timeout = a.timeout || 6e4, a.url = Li(a.url, {
                _: new Date().getTime().toString(),
                ver: Fe.LIB_VERSION,
                compression: a.compression
            });
            var A = (t = a.transport) !== null && t !== void 0 ? t : "fetch",
                l = Bi.filter((g => !a.disableTransport || !g.transport || !a.disableTransport.includes(g.transport))),
                c = (n = (o = uo(l, (g => g.transport === A))) == null ? void 0 : o.method) !== null && n !== void 0 ? n : l[0].method;
            if (!c) throw new Error("No available transport method");
            c(a)
        })(j({}, e, {
            callback: s => {
                var t, n;
                this.rateLimiter.checkForLimiting(s), s.statusCode >= 400 && ((t = (n = this.config).on_request_error) == null || t.call(n, s)), e.callback == null || e.callback(s)
            }
        }))))
    }
    ns(e) {
        this.os ? this.os.retriableRequest(e) : this._send_request(e)
    }
    _execute_array(e) {
        ht++;
        try {
            var s, t = [],
                n = [],
                o = [];
            Xe(e, (A => {
                A && (s = A[0], L(s) ? o.push(A) : Ge(A) ? A.call(this) : L(A) && s === "alias" ? t.push(A) : L(A) && s.indexOf("capture") !== -1 && Ge(this[s]) ? o.push(A) : n.push(A))
            }));
            var a = function(A, l) {
                Xe(A, (function(c) {
                    if (L(c[0])) {
                        var g = l;
                        O(c, (function(d) {
                            g = g[d[0]].apply(g, d.slice(1))
                        }))
                    } else this[c[0]].apply(this, c.slice(1))
                }), l)
            };
            a(t, this), a(n, this), a(o, this)
        } finally {
            ht--
        }
    }
    us() {
        var e, s;
        return ((e = this.config.bootstrap) == null ? void 0 : e.featureFlags) && Object.keys((s = this.config.bootstrap) == null ? void 0 : s.featureFlags).length > 0 || !1
    }
    push(e) {
        if (ht > 0 && L(e) && W(e[0])) {
            var s = oi.prototype[e[0]];
            Ge(s) && s.apply(this, e.slice(1))
        } else this._execute_array([e])
    }
    capture(e, s, t) {
        var n;
        if (this.__loaded && this.persistence && this.sessionPersistence && this.ss) {
            if (this.is_capturing())
                if (!_(e) && W(e)) {
                    var o = !this.config.opt_out_useragent_filter && this._is_bot();
                    if (!(o && !this.config.__preview_capture_bot_pageviews)) {
                        var a = t != null && t.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
                        if (a == null || !a.isRateLimited) {
                            s != null && s.$current_url && !W(s?.$current_url) && (D.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), s == null || delete s.$current_url), e !== "$exception" || t != null && t.oi || D.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
                            var A = new Date,
                                l = t?.timestamp || A,
                                c = Ze(),
                                g = {
                                    uuid: c,
                                    event: e,
                                    properties: this.calculateEventProperties(e, s || {}, l, c)
                                };
                            e === "$pageview" && this.config.__preview_capture_bot_pageviews && o && (g.event = "$bot_pageview", g.properties.$browser_type = "bot"), a && (g.properties.$lib_rate_limit_remaining_tokens = a.remainingTokens), t?.$set && (g.$set = t?.$set);
                            var d, u = e !== "$groupidentify",
                                h = this.gs(t?.$set_once, u);
                            if (h && (g.$set_once = h), (g = xA(g, t != null && t._noTruncate ? null : this.config.properties_string_max_length)).timestamp = l, _(t?.timestamp) || (g.properties.$event_time_override_provided = !0, g.properties.$event_time_override_system_time = A), e === Vs.DISMISSED || e === Vs.SENT) {
                                var I = s?.[dt.SURVEY_ID],
                                    p = s?.[dt.SURVEY_ITERATION];
                                d = {
                                    id: I,
                                    current_iteration: p
                                }, localStorage.getItem(hn(d)) || localStorage.setItem(hn(d), "true"), g.$set = j({}, g.$set, {
                                    [Fl({
                                        id: I,
                                        current_iteration: p
                                    }, e === Vs.SENT ? "responded" : "dismissed")]: !0
                                })
                            } else e === Vs.SHOWN && (g.$set = j({}, g.$set, {
                                [dt.SURVEY_LAST_SEEN_DATE]: new Date().toISOString()
                            }));
                            var m = j({}, g.properties.$set, g.$set);
                            if (Bs(m) || this.setPersonPropertiesForFlags(m), !P(this.config.before_send)) {
                                var E = this.bs(g);
                                if (!E) return;
                                g = E
                            }
                            this.mi.emit("eventCaptured", g);
                            var B = {
                                method: "POST",
                                url: (n = t?._url) !== null && n !== void 0 ? n : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
                                data: g,
                                compression: "best-available",
                                batchKey: t?._batchKey
                            };
                            return !this.config.request_batching || t && (t == null || !t._batchKey) || t != null && t.send_instantly ? this.ns(B) : this.ss.enqueue(B), g
                        }
                        D.critical("This capture call is ignored due to client rate limiting.")
                    }
                } else D.error("No event name provided to posthog.capture")
        } else D.uninitializedWarning("posthog.capture")
    }
    _addCaptureHook(e) {
        return this.on("eventCaptured", (s => e(s.event, s)))
    }
    calculateEventProperties(e, s, t, n, o) {
        if (t = t || new Date, !this.persistence || !this.sessionPersistence) return s;
        var a = o ? void 0 : this.persistence.remove_event_timer(e),
            A = j({}, s);
        if (A.token = this.config.token, A.$config_defaults = this.config.defaults, (this.config.cookieless_mode == "always" || this.config.cookieless_mode == "on_reject" && this.consent.isExplicitlyOptedOut()) && (A.$cookieless_mode = !0), e === "$snapshot") {
            var l = j({}, this.persistence.properties(), this.sessionPersistence.properties());
            return A.distinct_id = l.distinct_id, (!W(A.distinct_id) && !Ye(A.distinct_id) || _t(A.distinct_id)) && D.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), A
        }
        var c, g = cl(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties);
        if (this.sessionManager) {
            var {
                sessionId: d,
                windowId: u
            } = this.sessionManager.checkAndGetSessionAndWindowId(o, t.getTime());
            A.$session_id = d, A.$window_id = u
        }
        this.sessionPropsManager && z(A, this.sessionPropsManager.getSessionProps());
        try {
            var h;
            this.sessionRecording && z(A, this.sessionRecording.sdkDebugProperties), A.$sdk_debug_retry_queue_size = (h = this.os) == null ? void 0 : h.length
        } catch (E) {
            A.$sdk_debug_error_capturing_properties = String(E)
        }
        if (this.requestRouter.region === $s.CUSTOM && (A.$lib_custom_api_host = this.config.api_host), c = e !== "$pageview" || o ? e !== "$pageleave" || o ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(t) : this.pageViewManager.doPageView(t, n), A = z(A, c), e === "$pageview" && x && (A.title = x.title), !_(a)) {
            var I = t.getTime() - a;
            A.$duration = parseFloat((I / 1e3).toFixed(3))
        }
        de && this.config.opt_out_useragent_filter && (A.$browser_type = this._is_bot() ? "bot" : "browser"), (A = z({}, g, this.persistence.properties(), this.sessionPersistence.properties(), A)).$is_identified = this._isIdentified(), L(this.config.property_denylist) ? O(this.config.property_denylist, (function(E) {
            delete A[E]
        })) : D.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
        var p = this.config.sanitize_properties;
        p && (D.error("sanitize_properties is deprecated. Use before_send instead"), A = p(A, e));
        var m = this.ys();
        return A.$process_person_profile = m, m && !o && this.ws("_calculate_event_properties"), A
    }
    gs(e, s) {
        var t;
        if (s === void 0 && (s = !0), !this.persistence || !this.ys() || this.Jr) return e;
        var n = this.persistence.get_initial_props(),
            o = (t = this.sessionPropsManager) == null ? void 0 : t.getSetOnceProps(),
            a = z({}, n, o || {}, e || {}),
            A = this.config.sanitize_properties;
        return A && (D.error("sanitize_properties is deprecated. Use before_send instead"), a = A(a, "$set_once")), s && (this.Jr = !0), Bs(a) ? void 0 : a
    }
    register(e, s) {
        var t;
        (t = this.persistence) == null || t.register(e, s)
    }
    register_once(e, s, t) {
        var n;
        (n = this.persistence) == null || n.register_once(e, s, t)
    }
    register_for_session(e) {
        var s;
        (s = this.sessionPersistence) == null || s.register(e)
    }
    unregister(e) {
        var s;
        (s = this.persistence) == null || s.unregister(e)
    }
    unregister_for_session(e) {
        var s;
        (s = this.sessionPersistence) == null || s.unregister(e)
    }
    xs(e, s) {
        this.register({
            [e]: s
        })
    }
    getFeatureFlag(e, s) {
        return this.featureFlags.getFeatureFlag(e, s)
    }
    getFeatureFlagPayload(e) {
        return this.featureFlags.getFeatureFlagPayload(e)
    }
    getFeatureFlagResult(e, s) {
        return this.featureFlags.getFeatureFlagResult(e, s)
    }
    isFeatureEnabled(e, s) {
        return this.featureFlags.isFeatureEnabled(e, s)
    }
    reloadFeatureFlags() {
        this.featureFlags.reloadFeatureFlags()
    }
    updateFlags(e, s, t) {
        var n = t != null && t.merge ? this.featureFlags.getFlagVariants() : {},
            o = t != null && t.merge ? this.featureFlags.getFlagPayloads() : {},
            a = j({}, n, e),
            A = j({}, o, s),
            l = {};
        for (var [c, g] of Object.entries(a)) {
            var d = typeof g == "string";
            l[c] = {
                key: c,
                enabled: !!d || !!g,
                variant: d ? g : void 0,
                reason: void 0,
                metadata: _(A?.[c]) ? void 0 : {
                    id: 0,
                    version: void 0,
                    description: void 0,
                    payload: A[c]
                }
            }
        }
        this.featureFlags.receivedFeatureFlags({
            flags: l
        })
    }
    updateEarlyAccessFeatureEnrollment(e, s, t) {
        this.featureFlags.updateEarlyAccessFeatureEnrollment(e, s, t)
    }
    getEarlyAccessFeatures(e, s, t) {
        return s === void 0 && (s = !1), this.featureFlags.getEarlyAccessFeatures(e, s, t)
    }
    on(e, s) {
        return this.mi.on(e, s)
    }
    onFeatureFlags(e) {
        return this.featureFlags.onFeatureFlags(e)
    }
    onSurveysLoaded(e) {
        return this.surveys.onSurveysLoaded(e)
    }
    onSessionId(e) {
        var s, t;
        return (s = (t = this.sessionManager) == null ? void 0 : t.onSessionId(e)) !== null && s !== void 0 ? s : () => {}
    }
    getSurveys(e, s) {
        s === void 0 && (s = !1), this.surveys.getSurveys(e, s)
    }
    getActiveMatchingSurveys(e, s) {
        s === void 0 && (s = !1), this.surveys.getActiveMatchingSurveys(e, s)
    }
    renderSurvey(e, s) {
        this.surveys.renderSurvey(e, s)
    }
    displaySurvey(e, s) {
        s === void 0 && (s = Ll), this.surveys.displaySurvey(e, s)
    }
    cancelPendingSurvey(e) {
        this.surveys.cancelPendingSurvey(e)
    }
    canRenderSurvey(e) {
        return this.surveys.canRenderSurvey(e)
    }
    canRenderSurveyAsync(e, s) {
        return s === void 0 && (s = !1), this.surveys.canRenderSurveyAsync(e, s)
    }
    identify(e, s, t) {
        if (!this.__loaded || !this.persistence) return D.uninitializedWarning("posthog.identify");
        if (Ye(e) && (e = e.toString(), D.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), e)
            if (["distinct_id", "distinctid"].includes(e.toLowerCase())) D.critical('The string "' + e + '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.');
            else if (e !== ks) {
            if (this.ws("posthog.identify")) {
                var n = this.get_distinct_id();
                if (this.register({
                        $user_id: e
                    }), !this.get_property("$device_id")) {
                    var o = n;
                    this.register_once({
                        $had_persisted_distinct_id: !0,
                        $device_id: o
                    }, "")
                }
                e !== n && e !== this.get_property(Ks) && (this.unregister(Ks), this.register({
                    distinct_id: e
                }));
                var a = (this.persistence.get_property(Pe) || "anonymous") === "anonymous";
                e !== n && a ? (this.persistence.set_property(Pe, "identified"), this.setPersonPropertiesForFlags(j({}, t || {}, s || {}), !1), this.capture("$identify", {
                    distinct_id: e,
                    $anon_distinct_id: n
                }, {
                    $set: s || {},
                    $set_once: t || {}
                }), this.Qr = An(e, s, t), this.featureFlags.setAnonymousDistinctId(n)) : (s || t) && this.setPersonProperties(s, t), e !== n && (this.reloadFeatureFlags(), this.unregister(bi))
            }
        } else D.critical('The string "' + ks + '" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.');
        else D.error("Unique user id has not been set in posthog.identify")
    }
    setPersonProperties(e, s) {
        if ((e || s) && this.ws("posthog.setPersonProperties")) {
            var t = An(this.get_distinct_id(), e, s);
            this.Qr !== t ? (this.setPersonPropertiesForFlags(j({}, s || {}, e || {})), this.capture("$set", {
                $set: e || {},
                $set_once: s || {}
            }), this.Qr = t) : D.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")
        }
    }
    group(e, s, t) {
        if (e && s) {
            var n = this.getGroups();
            n[e] !== s && this.resetGroupPropertiesForFlags(e), this.register({
                $groups: j({}, n, {
                    [e]: s
                })
            }), t && (this.capture("$groupidentify", {
                $group_type: e,
                $group_key: s,
                $group_set: t
            }), this.setGroupPropertiesForFlags({
                [e]: t
            })), n[e] === s || t || this.reloadFeatureFlags()
        } else D.error("posthog.group requires a group type and group key")
    }
    resetGroups() {
        this.register({
            $groups: {}
        }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
    }
    setPersonPropertiesForFlags(e, s) {
        s === void 0 && (s = !0), this.featureFlags.setPersonPropertiesForFlags(e, s)
    }
    resetPersonPropertiesForFlags() {
        this.featureFlags.resetPersonPropertiesForFlags()
    }
    setGroupPropertiesForFlags(e, s) {
        s === void 0 && (s = !0), this.ws("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(e, s)
    }
    resetGroupPropertiesForFlags(e) {
        this.featureFlags.resetGroupPropertiesForFlags(e)
    }
    reset(e) {
        var s, t, n, o, a;
        if (D.info("reset"), !this.__loaded) return D.uninitializedWarning("posthog.reset");
        var A = this.get_property("$device_id");
        if (this.consent.reset(), (s = this.persistence) == null || s.clear(), (t = this.sessionPersistence) == null || t.clear(), this.surveys.reset(), (n = this.ps) == null || n.stop(), this.featureFlags.reset(), (o = this.persistence) == null || o.set_property(Pe, "anonymous"), (a = this.sessionManager) == null || a.resetSessionId(), this.Qr = null, this.config.cookieless_mode === "always") this.register_once({
            distinct_id: ks,
            $device_id: null
        }, "");
        else {
            var l = this.config.get_device_id(Ze());
            this.register_once({
                distinct_id: l,
                $device_id: e ? l : A
            }, "")
        }
        this.register({
            $last_posthog_reset: new Date().toISOString()
        }, 1)
    }
    get_distinct_id() {
        return this.get_property("distinct_id")
    }
    getGroups() {
        return this.get_property("$groups") || {}
    }
    get_session_id() {
        var e, s;
        return (e = (s = this.sessionManager) == null ? void 0 : s.checkAndGetSessionAndWindowId(!0).sessionId) !== null && e !== void 0 ? e : ""
    }
    get_session_replay_url(e) {
        if (!this.sessionManager) return "";
        var {
            sessionId: s,
            sessionStartTimestamp: t
        } = this.sessionManager.checkAndGetSessionAndWindowId(!0), n = this.requestRouter.endpointFor("ui", "/project/" + this.config.token + "/replay/" + s);
        if (e != null && e.withTimestamp && t) {
            var o, a = (o = e.timestampLookBack) !== null && o !== void 0 ? o : 10;
            if (!t) return n;
            n += "?t=" + Math.max(Math.floor((new Date().getTime() - t) / 1e3) - a, 0)
        }
        return n
    }
    alias(e, s) {
        return e === this.get_property(ho) ? (D.critical("Attempting to create alias for existing People user - aborting."), -2) : this.ws("posthog.alias") ? (_(s) && (s = this.get_distinct_id()), e !== s ? (this.xs(Ks, e), this.capture("$create_alias", {
            alias: e,
            distinct_id: s
        })) : (D.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1)) : void 0
    }
    set_config(e) {
        var s = j({}, this.config);
        if (ee(e)) {
            var t, n, o, a, A, l, c, g;
            z(this.config, Bn(e));
            var d = this.rs();
            (t = this.persistence) == null || t.update_config(this.config, s, d), this.sessionPersistence = this.config.persistence === "sessionStorage" || this.config.persistence === "memory" ? this.persistence : new lt(j({}, this.config, {
                persistence: "sessionStorage"
            }), d);
            var u = this.Zr(this.config.debug);
            Oe(u) && (this.config.debug = u), Oe(this.config.debug) && (this.config.debug ? (Fe.DEBUG = !0, K.H() && K.G("ph_debug", "true"), D.info("set_config", {
                config: e,
                oldConfig: s,
                newConfig: j({}, this.config)
            })) : (Fe.DEBUG = !1, K.H() && K.V("ph_debug"))), (n = this.exceptionObserver) == null || n.onConfigChange(), (o = this.sessionRecording) == null || o.startIfEnabledOrStop(), (a = this.autocapture) == null || a.startIfEnabled(), (A = this.heatmaps) == null || A.startIfEnabled(), (l = this.exceptionObserver) == null || l.startIfEnabledOrStop(), (c = this.deadClicksAutocapture) == null || c.startIfEnabledOrStop(), this.surveys.loadIfEnabled(), this.$s(), (g = this.externalIntegrations) == null || g.startIfEnabledOrStop()
        }
    }
    startSessionRecording(e) {
        var s = e === !0,
            t = {
                sampling: s || !(e == null || !e.sampling),
                linked_flag: s || !(e == null || !e.linked_flag),
                url_trigger: s || !(e == null || !e.url_trigger),
                event_trigger: s || !(e == null || !e.event_trigger)
            };
        if (Object.values(t).some(Boolean)) {
            var n, o, a, A, l;
            (n = this.sessionManager) == null || n.checkAndGetSessionAndWindowId(), t.sampling && ((o = this.sessionRecording) == null || o.overrideSampling()), t.linked_flag && ((a = this.sessionRecording) == null || a.overrideLinkedFlag()), t.url_trigger && ((A = this.sessionRecording) == null || A.overrideTrigger("url")), t.event_trigger && ((l = this.sessionRecording) == null || l.overrideTrigger("event"))
        }
        this.set_config({
            disable_session_recording: !1
        })
    }
    stopSessionRecording() {
        this.set_config({
            disable_session_recording: !0
        })
    }
    sessionRecordingStarted() {
        var e;
        return !((e = this.sessionRecording) == null || !e.started)
    }
    captureException(e, s) {
        var t = new Error("PostHog syntheticException"),
            n = this.exceptions.buildProperties(e, {
                handled: !0,
                syntheticException: t
            });
        return this.exceptions.sendExceptionEvent(j({}, n, s))
    }
    startExceptionAutocapture(e) {
        this.set_config({
            capture_exceptions: e == null || e
        })
    }
    stopExceptionAutocapture() {
        this.set_config({
            capture_exceptions: !1
        })
    }
    loadToolbar(e) {
        return this.toolbar.loadToolbar(e)
    }
    get_property(e) {
        var s;
        return (s = this.persistence) == null ? void 0 : s.props[e]
    }
    getSessionProperty(e) {
        var s;
        return (s = this.sessionPersistence) == null ? void 0 : s.props[e]
    }
    toString() {
        var e, s = (e = this.config.name) !== null && e !== void 0 ? e : fs;
        return s !== fs && (s = fs + "." + s), s
    }
    _isIdentified() {
        var e, s;
        return ((e = this.persistence) == null ? void 0 : e.get_property(Pe)) === "identified" || ((s = this.sessionPersistence) == null ? void 0 : s.get_property(Pe)) === "identified"
    }
    ys() {
        var e, s;
        return !(this.config.person_profiles === "never" || this.config.person_profiles === "identified_only" && !this._isIdentified() && Bs(this.getGroups()) && ((e = this.persistence) == null || (e = e.props) == null || !e[Ks]) && ((s = this.persistence) == null || (s = s.props) == null || !s[Si]))
    }
    _s() {
        return this.config.capture_pageleave === !0 || this.config.capture_pageleave === "if_capture_pageview" && (this.config.capture_pageview === !0 || this.config.capture_pageview === "history_change")
    }
    createPersonProfile() {
        this.ys() || this.ws("posthog.createPersonProfile") && this.setPersonProperties({}, {})
    }
    setInternalOrTestUser() {
        this.ws("posthog.setInternalOrTestUser") && this.setPersonProperties({
            $internal_or_test_user: !0
        })
    }
    ws(e) {
        return this.config.person_profiles === "never" ? (D.error(e + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this.xs(Si, !0), !0)
    }
    rs() {
        if (this.config.cookieless_mode === "always") return !0;
        var e = this.consent.isOptedOut(),
            s = this.config.opt_out_persistence_by_default || this.config.cookieless_mode === "on_reject";
        return this.config.disable_persistence || e && !!s
    }
    $s() {
        var e, s, t, n, o = this.rs();
        return ((e = this.persistence) == null ? void 0 : e.ki) !== o && ((t = this.persistence) == null || t.set_disabled(o)), ((s = this.sessionPersistence) == null ? void 0 : s.ki) !== o && ((n = this.sessionPersistence) == null || n.set_disabled(o)), o
    }
    opt_in_capturing(e) {
        var s;
        if (this.config.cookieless_mode !== "always") {
            var t, n, o;
            this.config.cookieless_mode === "on_reject" && this.consent.isExplicitlyOptedOut() && (this.reset(!0), (t = this.sessionManager) == null || t.destroy(), (n = this.pageViewManager) == null || n.destroy(), this.sessionManager = new Cn(this), this.pageViewManager = new sn(this), this.persistence && (this.sessionPropsManager = new pn(this, this.sessionManager, this.persistence)), this.sessionRecording = new En(this), this.sessionRecording.startIfEnabledOrStop()), this.consent.optInOut(!0), this.$s(), this.cs(), (s = this.sessionRecording) == null || s.startIfEnabledOrStop(), this.config.cookieless_mode == "on_reject" && this.surveys.loadIfEnabled(), (_(e?.captureEventName) || e != null && e.captureEventName) && this.capture((o = e?.captureEventName) !== null && o !== void 0 ? o : "$opt_in", e?.captureProperties, {
                send_instantly: !0
            }), this.config.capture_pageview && this.fs()
        } else D.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')
    }
    opt_out_capturing() {
        var e, s, t;
        this.config.cookieless_mode !== "always" ? (this.config.cookieless_mode === "on_reject" && this.consent.isOptedIn() && this.reset(!0), this.consent.optInOut(!1), this.$s(), this.config.cookieless_mode === "on_reject" && (this.register({
            distinct_id: ks,
            $device_id: null
        }), (e = this.sessionManager) == null || e.destroy(), (s = this.pageViewManager) == null || s.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, (t = this.sessionRecording) == null || t.stopRecording(), this.sessionRecording = void 0, this.fs())) : D.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')
    }
    has_opted_in_capturing() {
        return this.consent.isOptedIn()
    }
    has_opted_out_capturing() {
        return this.consent.isOptedOut()
    }
    get_explicit_consent_status() {
        var e = this.consent.consent;
        return e === Le.GRANTED ? "granted" : e === Le.DENIED ? "denied" : "pending"
    }
    is_capturing() {
        return this.config.cookieless_mode === "always" || (this.config.cookieless_mode === "on_reject" ? this.consent.isExplicitlyOptedOut() || this.consent.isOptedIn() : !this.has_opted_out_capturing())
    }
    clear_opt_in_out_capturing() {
        this.consent.reset(), this.$s()
    }
    _is_bot() {
        return fe ? Wo(fe, this.config.custom_blocked_useragents) : void 0
    }
    fs() {
        x && (x.visibilityState === "visible" ? this.Kr || (this.Kr = !0, this.capture("$pageview", {
            title: x.title
        }, {
            send_instantly: !0
        }), this.Yr && (x.removeEventListener("visibilitychange", this.Yr), this.Yr = null)) : this.Yr || (this.Yr = this.fs.bind(this), Z(x, "visibilitychange", this.Yr)))
    }
    debug(e) {
        e === !1 ? (f?.console.log("You've disabled debug mode."), this.set_config({
            debug: !1
        })) : (f?.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
            debug: !0
        }))
    }
    M() {
        var e, s, t, n, o, a, A, l = this.ts || {};
        return "advanced_disable_flags" in l ? !!l.advanced_disable_flags : this.config.advanced_disable_flags !== !1 ? !!this.config.advanced_disable_flags : this.config.advanced_disable_decide === !0 ? (D.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : (t = "advanced_disable_decide", n = !1, o = D, a = (s = "advanced_disable_flags") in(e = l) && !P(e[s]), A = t in e && !P(e[t]), a ? e[s] : A ? (o && o.warn("Config field '" + t + "' is deprecated. Please use '" + s + "' instead. The old field will be removed in a future major version."), e[t]) : n)
    }
    bs(e) {
        if (P(this.config.before_send)) return e;
        var s = L(this.config.before_send) ? this.config.before_send : [this.config.before_send],
            t = e;
        for (var n of s) {
            if (t = n(t), P(t)) {
                var o = "Event '" + e.event + "' was rejected in beforeSend function";
                return Oa(e.event) ? D.warn(o + ". This can cause unexpected behavior.") : D.info(o), null
            }
            t.properties && !Bs(t.properties) || D.warn("Event '" + e.event + "' has no properties after beforeSend function, this is likely an error.")
        }
        return t
    }
    getPageViewId() {
        var e;
        return (e = this.pageViewManager.Kt) == null ? void 0 : e.pageViewId
    }
    captureTraceFeedback(e, s) {
        this.capture("$ai_feedback", {
            $ai_trace_id: String(e),
            $ai_feedback_text: s
        })
    }
    captureTraceMetric(e, s, t) {
        this.capture("$ai_metric", {
            $ai_trace_id: String(e),
            $ai_metric_name: s,
            $ai_metric_value: String(t)
        })
    }
    Zr(e) {
        var s = Oe(e) && !e,
            t = K.H() && K.q("ph_debug") === "true";
        return !s && (!!t || e)
    }
}(function(i, e) {
    for (var s = 0; s < e.length; s++) i.prototype[e[s]] = yA(i.prototype[e[s]])
})(oi, ["identify"]);
var Qn;
(function(i) {
    return i.SHOWN = "product tour shown", i.DISMISSED = "product tour dismissed", i.COMPLETED = "product tour completed", i.STEP_SHOWN = "product tour step shown", i.STEP_COMPLETED = "product tour step completed", i.BUTTON_CLICKED = "product tour button clicked", i.STEP_SELECTOR_FAILED = "product tour step selector failed", i.BANNER_CONTAINER_SELECTOR_FAILED = "product tour banner container selector failed", i.BANNER_ACTION_CLICKED = "product tour banner action clicked", i
})({});
(function(i) {
    return i.TOUR_ID = "$product_tour_id", i.TOUR_NAME = "$product_tour_name", i.TOUR_ITERATION = "$product_tour_iteration", i.TOUR_RENDER_REASON = "$product_tour_render_reason", i.TOUR_STEP_ID = "$product_tour_step_id", i.TOUR_STEP_ORDER = "$product_tour_step_order", i.TOUR_STEP_TYPE = "$product_tour_step_type", i.TOUR_DISMISS_REASON = "$product_tour_dismiss_reason", i.TOUR_BUTTON_TEXT = "$product_tour_button_text", i.TOUR_BUTTON_ACTION = "$product_tour_button_action", i.TOUR_BUTTON_LINK = "$product_tour_button_link", i.TOUR_BUTTON_TOUR_ID = "$product_tour_button_tour_id", i.TOUR_STEPS_COUNT = "$product_tour_steps_count", i.TOUR_STEP_SELECTOR = "$product_tour_step_selector", i.TOUR_STEP_SELECTOR_FOUND = "$product_tour_step_selector_found", i.TOUR_STEP_ELEMENT_TAG = "$product_tour_step_element_tag", i.TOUR_STEP_ELEMENT_ID = "$product_tour_step_element_id", i.TOUR_STEP_ELEMENT_CLASSES = "$product_tour_step_element_classes", i.TOUR_STEP_ELEMENT_TEXT = "$product_tour_step_element_text", i.TOUR_ERROR = "$product_tour_error", i.TOUR_MATCHES_COUNT = "$product_tour_matches_count", i.TOUR_FAILURE_PHASE = "$product_tour_failure_phase", i.TOUR_WAITED_FOR_ELEMENT = "$product_tour_waited_for_element", i.TOUR_WAIT_DURATION_MS = "$product_tour_wait_duration_ms", i.TOUR_BANNER_SELECTOR = "$product_tour_banner_selector", i.TOUR_LINKED_SURVEY_ID = "$product_tour_linked_survey_id", i.USE_MANUAL_SELECTOR = "$use_manual_selector", i.INFERENCE_DATA_PRESENT = "$inference_data_present", i
})({});
var ae = (Qn = Xs[fs] = new oi, (function() {
    function i() {
        i.done || (i.done = !0, Zo = !1, O(Xs, (function(e) {
            e._dom_loaded()
        })))
    }
    x != null && x.addEventListener ? x.readyState === "complete" ? i() : Z(x, "DOMContentLoaded", i, {
        capture: !1
    }) : f && D.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
})(), Qn);
const Xo = "https://api.mafagrafos.com",
    J = Un.create({
        baseURL: Xo,
        headers: {
            "Content-Type": "application/json"
        }
    });
J.interceptors.request.use(i => {
    const e = localStorage.getItem("authToken");
    return e && (i.headers.Authorization = `Bearer ${e}`), i
}, i => Promise.reject(i));
let It = !1,
    Vt = [];
const vn = (i, e = null) => {
    Vt.forEach(({
        resolve: s,
        reject: t
    }) => {
        i ? t(i) : s(e)
    }), Vt = []
};
J.interceptors.response.use(i => i, async i => {
    const e = i.config;
    if (i.response?.status !== 401 || e._retry || e.url?.includes("/api/auth/refresh-token") || e.url?.includes("/api/auth/login") || e.url?.includes("/api/auth/google")) return Promise.reject(i);
    const s = localStorage.getItem("refreshToken");
    if (!s) return Promise.reject(i);
    if (It) return new Promise((t, n) => {
        Vt.push({
            resolve: t,
            reject: n
        })
    }).then(t => (e.headers.Authorization = `Bearer ${t}`, J(e)));
    e._retry = !0, It = !0;
    try {
        const {
            data: t
        } = await Un.post(`${Xo}/api/auth/refresh-token`, {
            refreshToken: s
        }), n = t.idToken;
        return localStorage.setItem("authToken", n), t.user && localStorage.setItem("user", JSON.stringify(t.user)), vn(null, n), e.headers.Authorization = `Bearer ${n}`, J(e)
    } catch (t) {
        return vn(t, null), localStorage.removeItem("authToken"), localStorage.removeItem("refreshToken"), localStorage.removeItem("user"), Promise.reject(t)
    } finally {
        It = !1
    }
});
const De = {
        signup: async (i, e, s, t = {}) => (await J.post("/api/auth/signup", {
            email: i,
            password: e,
            name: s,
            ...t
        })).data,
        confirmSignup: async (i, e) => (await J.post("/api/auth/confirm-signup", {
            email: i,
            code: e
        })).data,
        resendCode: async i => (await J.post("/api/auth/resend-code", {
            email: i
        })).data,
        login: async (i, e) => (await J.post("/api/auth/login", {
            email: i,
            password: e
        })).data,
        refreshToken: async i => (await J.post("/api/auth/refresh-token", {
            refreshToken: i
        })).data,
        getMe: async () => (await J.get("/api/auth/me")).data.user,
        updateName: async i => (await J.patch("/api/auth/update-name", {
            name: i
        })).data.user,
        forgotPassword: async i => (await J.post("/api/auth/forgot-password", {
            email: i
        })).data,
        confirmForgotPassword: async (i, e, s) => (await J.post("/api/auth/confirm-forgot-password", {
            email: i,
            code: e,
            newPassword: s
        })).data,
        googleLogin: async (i, e = {}) => (await J.post("/api/auth/google", {
            googleIdToken: i,
            ...e
        })).data
    },
    Qi = {
        getStatus: async () => (await J.get("/api/subscription/status")).data,
        cancel: async () => (await J.post("/api/subscription/cancel")).data,
        resume: async () => (await J.post("/api/subscription/resume")).data,
        setConversionUtm: async i => (await J.post("/api/subscription/set-conversion-utm", i)).data
    },
    nc = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
    ea = "mfg_utm";

function oc() {
    const i = new URLSearchParams(window.location.search),
        e = {};
    let s = !1;
    for (const t of nc) {
        const n = i.get(t);
        n && (e[t] = n, s = !0)
    }
    s && sessionStorage.setItem(ea, JSON.stringify(e))
}

function ws() {
    try {
        return JSON.parse(sessionStorage.getItem(ea)) || {}
    } catch {
        return {}
    }
}
let pt = !1,
    yn = !1;
const ve = ka((i, e) => ({
        user: null,
        token: null,
        refreshToken: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null,
        pendingEmail: null,
        initialize: async () => {
            if (!(pt || yn)) {
                pt = !0;
                try {
                    const s = localStorage.getItem("authToken"),
                        t = localStorage.getItem("refreshToken"),
                        n = localStorage.getItem("user"),
                        o = localStorage.getItem("pendingEmail");
                    if (o && i({
                            pendingEmail: o,
                            isAuthenticated: !1
                        }), !s) {
                        localStorage.removeItem("authToken"), localStorage.removeItem("refreshToken"), localStorage.removeItem("user"), i({
                            user: null,
                            token: null,
                            refreshToken: null,
                            isAuthenticated: !1
                        });
                        return
                    }
                    let a = null;
                    if (n && n !== "undefined" && n !== "null") try {
                        a = JSON.parse(n)
                    } catch {}
                    i({
                        token: s,
                        refreshToken: t,
                        user: a,
                        isAuthenticated: !1,
                        isLoading: !0
                    });
                    try {
                        const A = await De.getMe(),
                            l = localStorage.getItem("authToken") || s;
                        localStorage.setItem("user", JSON.stringify(A)), i({
                            user: A,
                            token: l,
                            refreshToken: t,
                            isAuthenticated: !0,
                            isLoading: !1
                        }), ae.__loaded && ae.identify(A.id || A.sub, {
                            email: A.email,
                            subscription_tier: A.subscription_tier || "free"
                        })
                    } catch (A) {
                        A.response?.status === 401 ? (localStorage.removeItem("authToken"), localStorage.removeItem("refreshToken"), localStorage.removeItem("user"), i({
                            user: null,
                            token: null,
                            refreshToken: null,
                            isAuthenticated: !1,
                            isLoading: !1
                        })) : i({
                            user: a,
                            token: s,
                            refreshToken: t,
                            isAuthenticated: !0,
                            isLoading: !1
                        })
                    }
                } catch {
                    localStorage.removeItem("authToken"), localStorage.removeItem("refreshToken"), localStorage.removeItem("user"), i({
                        user: null,
                        token: null,
                        refreshToken: null,
                        isAuthenticated: !1,
                        isLoading: !1
                    })
                } finally {
                    pt = !1, yn = !0
                }
            }
        },
        login: async (s, t) => {
            i({
                isLoading: !0,
                error: null
            });
            try {
                const n = await De.login(s, t);
                return localStorage.setItem("authToken", n.idToken), localStorage.setItem("refreshToken", n.refreshToken), localStorage.setItem("user", JSON.stringify(n.user)), i({
                    user: n.user,
                    token: n.idToken,
                    refreshToken: n.refreshToken,
                    isAuthenticated: !0,
                    isLoading: !1,
                    error: null
                }), ae.__loaded && ae.identify(n.user.id || n.user.sub, {
                    email: n.user.email,
                    name: n.user.name || null,
                    subscription_tier: n.user.subscription_tier || "free",
                    ...ws()
                }), {
                    success: !0
                }
            } catch (n) {
                const o = n.response?.data || {},
                    a = o.error || "Login failed";
                if (o.code === "USER_NOT_CONFIRMED") {
                    const l = o.email || s;
                    return localStorage.setItem("pendingEmail", l), i({
                        isLoading: !1,
                        error: a,
                        pendingEmail: l
                    }), {
                        success: !1,
                        needsConfirmation: !0,
                        email: l,
                        error: a
                    }
                }
                return i({
                    isLoading: !1,
                    error: a
                }), {
                    success: !1,
                    error: a
                }
            }
        },
        loginWithGoogle: async s => {
            i({
                isLoading: !0,
                error: null
            });
            try {
                const t = await De.googleLogin(s, ws());
                return localStorage.setItem("authToken", t.idToken), localStorage.setItem("refreshToken", t.refreshToken), localStorage.setItem("user", JSON.stringify(t.user)), localStorage.removeItem("pendingEmail"), i({
                    user: t.user,
                    token: t.idToken,
                    refreshToken: t.refreshToken,
                    isAuthenticated: !0,
                    isLoading: !1,
                    error: null,
                    pendingEmail: null
                }), ae.__loaded && ae.identify(t.user.id || t.user.sub, {
                    email: t.user.email,
                    name: t.user.name || null,
                    subscription_tier: t.user.subscriptionTier || "free",
                    auth_method: "google",
                    ...ws()
                }), {
                    success: !0,
                    isNewUser: t.isNewUser
                }
            } catch (t) {
                const n = t.response?.data?.error || "Google login failed";
                return i({
                    isLoading: !1,
                    error: n
                }), {
                    success: !1,
                    error: n
                }
            }
        },
        signup: async (s, t, n, o = {}) => {
            i({
                isLoading: !0,
                error: null
            });
            try {
                return await De.signup(s, t, n, o), localStorage.setItem("pendingEmail", s), i({
                    pendingEmail: s,
                    isLoading: !1,
                    error: null
                }), {
                    success: !0,
                    needsConfirmation: !0
                }
            } catch (a) {
                const A = a.response?.data?.error || "Signup failed";
                return i({
                    isLoading: !1,
                    error: A
                }), {
                    success: !1,
                    error: A
                }
            }
        },
        confirmSignup: async (s, t) => {
            i({
                isLoading: !0,
                error: null
            });
            try {
                return await De.confirmSignup(s, t), localStorage.removeItem("pendingEmail"), i({
                    pendingEmail: null,
                    isLoading: !1,
                    error: null
                }), {
                    success: !0,
                    confirmed: !0
                }
            } catch (n) {
                const o = n.response?.data?.error || "Confirmation failed";
                return i({
                    isLoading: !1,
                    error: o
                }), {
                    success: !1,
                    error: o
                }
            }
        },
        resendCode: async s => {
            i({
                isLoading: !0,
                error: null
            });
            try {
                return await De.resendCode(s), i({
                    isLoading: !1,
                    error: null
                }), {
                    success: !0
                }
            } catch (t) {
                const n = t.response?.data?.error || "Failed to resend code";
                return i({
                    isLoading: !1,
                    error: n
                }), {
                    success: !1,
                    error: n
                }
            }
        },
        forgotPassword: async s => {
            i({
                isLoading: !0,
                error: null
            });
            try {
                return await De.forgotPassword(s), sessionStorage.setItem("resetEmail", s), i({
                    isLoading: !1,
                    error: null
                }), {
                    success: !0
                }
            } catch (t) {
                const n = t.response?.data?.error || "Failed to send reset code";
                return i({
                    isLoading: !1,
                    error: n
                }), {
                    success: !1,
                    error: n
                }
            }
        },
        confirmForgotPassword: async (s, t, n) => {
            i({
                isLoading: !0,
                error: null
            });
            try {
                return await De.confirmForgotPassword(s, t, n), sessionStorage.removeItem("resetEmail"), sessionStorage.removeItem("resetCodeSentAt"), i({
                    isLoading: !1,
                    error: null
                }), {
                    success: !0
                }
            } catch (o) {
                const a = o.response?.data?.error || "Failed to reset password";
                return i({
                    isLoading: !1,
                    error: a
                }), {
                    success: !1,
                    error: a
                }
            }
        },
        logout: () => {
            ae.__loaded && ae.reset(), localStorage.removeItem("authToken"), localStorage.removeItem("refreshToken"), localStorage.removeItem("user"), localStorage.removeItem("pendingEmail"), sessionStorage.removeItem("resetEmail"), sessionStorage.removeItem("resetCodeSentAt"), i({
                user: null,
                token: null,
                refreshToken: null,
                pendingEmail: null,
                isAuthenticated: !1,
                error: null
            })
        },
        updateUserName: async s => {
            i({
                isLoading: !0,
                error: null
            });
            try {
                const t = await De.updateName(s);
                return localStorage.setItem("user", JSON.stringify(t)), i(n => ({
                    user: t,
                    isLoading: !1,
                    error: null
                })), {
                    success: !0
                }
            } catch (t) {
                const n = t.response?.data?.error || "Failed to update name";
                throw i({
                    isLoading: !1,
                    error: n
                }), t
            }
        },
        clearError: () => i({
            error: null
        }),
        refreshUser: async () => {
            try {
                if (!localStorage.getItem("authToken")) return;
                const t = await De.getMe();
                localStorage.setItem("user", JSON.stringify(t)), i({
                    user: t
                })
            } catch {}
        }
    })),
    Ct = [{
        code: "en",
        name: "English",
        flag: "🇺🇸"
    }, {
        code: "pt",
        name: "Português",
        flag: "🇧🇷"
    }, {
        code: "es",
        name: "Español",
        flag: "🇪🇸"
    }];

function ac() {
    const {
        i18n: i
    } = X(), [e, s] = w.useState(!1), [t, n] = w.useState({
        top: 0,
        left: 0
    }), o = w.useRef(null), a = Ct.find(l => l.code === i.language) || Ct[0], A = l => {
        i.changeLanguage(l), s(!1)
    };
    return w.useEffect(() => {
        if (e && o.current) {
            const l = o.current.getBoundingClientRect();
            n({
                top: l.top - 8,
                left: l.left
            })
        }
    }, [e]), r.jsxs("div", {
        className: "language-selector",
        children: [r.jsx("button", {
            ref: o,
            className: "language-toggle",
            onClick: () => s(!e),
            "aria-label": "Select language",
            children: r.jsx("span", {
                className: "flag-icon",
                children: a.flag
            })
        }), e && wa.createPortal(r.jsxs(r.Fragment, {
            children: [r.jsx("div", {
                className: "language-backdrop",
                onClick: () => s(!1)
            }), r.jsx("div", {
                className: "language-dropdown",
                style: {
                    top: `${t.top}px`,
                    left: `${t.left}px`,
                    transform: "translateY(-100%)"
                },
                children: Ct.map(l => r.jsxs("button", {
                    className: `language-option ${l.code===i.language?"active":""}`,
                    onClick: () => A(l.code),
                    children: [r.jsx("span", {
                        className: "flag-icon",
                        children: l.flag
                    }), r.jsx("span", {
                        className: "language-name",
                        children: l.name
                    })]
                }, l.code))
            })]
        }), document.body)]
    })
}

function Ac({
    remaining: i = 4,
    total: e = 4,
    subscriptionTier: s = "free"
}) {
    const {
        t
    } = X();
    return r.jsxs("div", {
        className: "credits-counter",
        children: [r.jsx("div", {
            className: "credits-value",
            children: i
        }), r.jsx("div", {
            className: "credits-label",
            children: t("nav.credits")
        })]
    })
}
const ps = {
        FREE: "free",
        MONTHLY_BASIC: "monthly_basic",
        MONTHLY_PRO: "monthly_pro",
        CREDIT_PACK_MINI: "credit_pack_mini",
        CREDIT_PACK_DEFAULT: "credit_pack_default",
        CREDIT_PACK_SINGLE: "credit_pack_single"
    },
    lc = {
        [ps.FREE]: 5,
        [ps.MONTHLY_BASIC]: 35,
        [ps.MONTHLY_PRO]: 65,
        [ps.CREDIT_PACK_MINI]: 15,
        [ps.CREDIT_PACK_DEFAULT]: 30,
        [ps.CREDIT_PACK_SINGLE]: 1
    };

function cc() {
    const {
        t: i
    } = X(), e = Da(), {
        user: s,
        isAuthenticated: t
    } = ve(), n = a => a === "/models" ? e.pathname === "/" || e.pathname === "/models" : e.pathname === a;
    return r.jsxs("aside", {
        className: "sidebar ",
        children: [r.jsx("div", {
            className: "sidebar-header",
            children: r.jsx(T, {
                to: "/",
                className: "logo-link",
                children: r.jsxs("div", {
                    className: "logo-container",
                    children: [r.jsx("svg", {
                        className: "logo",
                        width: "40",
                        height: "40",
                        viewBox: "0 0 300 300",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: r.jsx("path", {
                            fill: "#4a1f2e",
                            d: "M 55.261761,293.13795 C 23.193702,288.93129 16.102005,273.15353 22.407174,220.04241 26.572254,184.95817 21.890396,169.90876 5.1678006,164.62796 1.7233342,163.54024 1.7233342,163.54024 1.7233342,150.40542 v -13.13478 l 4.7578252,-1.73862 C 23.019624,129.48845 26.448764,116.29841 21.945437,76.049427 15.408453,17.624304 33.665418,-1.4901776 86.063245,8.9200357 l 9.435972,1.8747133 19.129343,52.970734 c 10.52115,29.133899 23.11937,64.936247 27.99604,79.560807 8.64126,25.91405 9.93978,29.31355 9.93978,26.02278 0,-2.88778 22.37759,-66.61704 39.63834,-112.886119 l 16.95315,-45.444597 5.02359,-1.2322513 c 55.28687,-13.5614939 75.32602,6.2864223 68.47311,67.8196883 -4.30499,38.655329 -0.0427,53.747479 16.51933,58.495539 l 4.23349,1.21365 v 13.05498 13.05501 l -4.49366,1.64209 c -17.16907,6.27398 -20.56814,18.67253 -16.18293,59.02932 6.5778,60.53506 -13.89544,80.58622 -68.43325,67.02232 -4.66781,-1.16094 -4.6375,-0.45371 -0.6268,-14.62296 3.89019,-13.74341 3.7958,-13.61925 9.17779,-12.07634 21.89076,6.27562 26.54404,-2.1821 22.15574,-40.26984 -4.58781,-39.81926 0.9843,-58.64294 21.20946,-71.6499 2.58288,-1.66108 2.58288,-1.66108 -0.5166,-3.87046 -19.55446,-13.93898 -25.64126,-33.33505 -21.18494,-67.507672 3.54583,-27.190632 3.13913,-37.310798 -1.69334,-42.13717 l -2.77239,-2.768891 -36.40659,93.149173 -36.4066,93.1492 H 151.40351 135.57575 L 99.516815,130.2863 C 64.646012,41.097656 63.39416,38.113881 61.524809,39.732622 57.562233,43.163987 57.261301,55.703309 60.543374,80.627251 65.089853,115.15301 58.922988,135.04689 39.433596,148.72595 l -3.099477,2.17543 3.099477,2.17623 c 20.362981,14.29753 25.472969,31.82245 20.67888,70.91909 -4.654314,37.9567 0.158888,46.73275 22.169728,40.4227 4.785841,-1.37199 15.74282,21.97853 11.995632,25.56403 -2.491499,2.38398 -28.722514,4.5048 -39.016075,3.15452 z"
                        })
                    }), r.jsx("span", {
                        className: "beta-badge",
                        children: "Beta"
                    })]
                })
            })
        }), r.jsxs("nav", {
            className: "sidebar-nav",
            children: [r.jsxs(T, {
                to: "/home",
                className: `nav-item ${n("/home")?"active":""}`,
                children: [r.jsx("div", {
                    className: "nav-icon-container",
                    children: r.jsxs("svg", {
                        className: "nav-icon",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [r.jsx("path", {
                            d: "M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), r.jsx("path", {
                            d: "M9 22V12H15V22",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                }), r.jsx("span", {
                    className: "nav-label",
                    children: i("nav.home")
                })]
            }), r.jsxs(T, {
                to: "/models",
                className: `nav-item ${n("/models")?"active":""}`,
                children: [r.jsx("div", {
                    className: "nav-icon-container",
                    children: r.jsxs("svg", {
                        className: "nav-icon",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [r.jsx("path", {
                            d: "M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), r.jsx("path", {
                            d: "M14 2V8H20",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), r.jsx("path", {
                            d: "M12 18V12",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), r.jsx("path", {
                            d: "M9 15H15",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                }), r.jsx("span", {
                    className: "nav-label",
                    children: i("nav.templates")
                })]
            }), r.jsxs(T, {
                to: "/printables",
                className: `nav-item ${n("/printables")?"active":""}`,
                children: [r.jsx("div", {
                    className: "nav-icon-container",
                    children: r.jsxs("svg", {
                        className: "nav-icon",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [r.jsx("path", {
                            d: "M12 2L2 7L12 12L22 7L12 2Z",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), r.jsx("path", {
                            d: "M2 17L12 22L22 17",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), r.jsx("path", {
                            d: "M2 12L12 17L22 12",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                }), r.jsx("span", {
                    className: "nav-label",
                    children: i("nav.printables")
                })]
            }), !1]
        }), r.jsxs("div", {
            className: "sidebar-footer",
            children: [r.jsx("div", {
                className: "footer-actions",
                children: r.jsx(ac, {})
            }), t && r.jsx(T, {
                to: "/profile",
                style: {
                    textDecoration: "none"
                },
                children: r.jsx(Ac, {
                    remaining: s?.credits || 0,
                    total: lc[s?.subscriptionTier] || 5,
                    subscriptionTier: s?.subscriptionTier || "free"
                })
            }), t ? r.jsxs(T, {
                to: "/profile",
                className: "user-nav-item",
                children: [r.jsx("div", {
                    className: "user-avatar",
                    children: (s?.name || "U").charAt(0).toUpperCase()
                }), r.jsx("span", {
                    className: "nav-label",
                    children: i("nav.account")
                })]
            }) : r.jsxs(T, {
                to: "/login",
                className: "user-nav-item",
                children: [r.jsx("div", {
                    className: "user-avatar-placeholder",
                    children: r.jsxs("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [r.jsx("path", {
                            d: "M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), r.jsx("path", {
                            d: "M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                }), r.jsx("span", {
                    className: "nav-label",
                    children: i("nav.login")
                })]
            }), r.jsxs("div", {
                className: "legal-links",
                children: [r.jsx(T, {
                    to: "/terms",
                    children: i("legal.termsOfUse")
                }), r.jsx(T, {
                    to: "/privacy",
                    children: i("legal.privacyPolicy")
                })]
            })]
        })]
    })
}
const Ne = (i, e) => {
        if (!i || typeof i != "object") return i || "";
        const s = e === "pt" ? "pt-BR" : e,
            t = [s, s.toLowerCase(), s.split("-")[0], e, e.toLowerCase()];
        for (const n of t) {
            const o = i[n];
            if (o && o.trim() !== "") return o
        }
        return i.en || i["en-us"] || i["en-US"] || ""
    },
    gc = "https://dyi8lrgme5gvu.cloudfront.net",
    Hi = i => {
        if (!i) return null;
        if (typeof i == "string" && (i.startsWith("http://") || i.startsWith("https://"))) return i;
        const e = typeof i == "string" && i.startsWith("/") ? i.slice(1) : i;
        return `${gc}/${e}`
    };

function Ji({
    src: i,
    alt: e,
    className: s = "",
    priority: t = !1,
    aspectRatio: n = "4 / 3",
    objectFit: o = "cover",
    placeholder: a,
    ...A
}) {
    const [l, c] = w.useState(!1), [g, d] = w.useState(!1);
    return !i || g ? a || r.jsx("div", {
        className: `optimized-image-placeholder ${s}`,
        style: {
            aspectRatio: n
        },
        children: r.jsx("span", {
            children: "3D"
        })
    }) : r.jsxs("div", {
        className: `optimized-image-wrapper ${s}`,
        style: {
            aspectRatio: n
        },
        children: [!l && r.jsx("div", {
            className: "optimized-image-skeleton"
        }), r.jsx("img", {
            src: i,
            alt: e,
            className: `optimized-image ${l?"loaded":""}`,
            loading: t ? "eager" : "lazy",
            decoding: t ? "sync" : "async",
            fetchpriority: t ? "high" : void 0,
            onLoad: () => c(!0),
            onError: () => d(!0),
            style: {
                objectFit: o
            },
            ...A
        })]
    })
}

function dc({
    collection: i,
    onClick: e
}) {
    const {
        i18n: s
    } = X(), t = Ne(i.title, s.language), n = Ne(i.subtitle, s.language), o = Hi(i.coverImage), a = () => {
        e && e(i)
    };
    return r.jsxs("div", {
        className: "collection-card",
        onClick: a,
        children: [r.jsx("div", {
            className: "collection-card-image",
            children: r.jsx(Ji, {
                src: o,
                alt: t,
                aspectRatio: "auto",
                placeholder: r.jsx("div", {
                    className: "collection-card-placeholder",
                    children: r.jsxs("svg", {
                        width: "64",
                        height: "64",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [r.jsx("path", {
                            d: "M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), r.jsx("path", {
                            d: "M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), r.jsx("path", {
                            d: "M21 15L16 10L5 21",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                })
            })
        }), r.jsxs("div", {
            className: "collection-card-content",
            children: [r.jsx("h3", {
                className: "collection-card-title",
                children: t
            }), n && r.jsx("p", {
                className: "collection-card-subtitle",
                children: n
            })]
        })]
    })
}
const uc = "https://api.mafagrafos.com";

function hc() {
    const {
        t: i,
        i18n: e
    } = X(), s = Re(), [t, n] = w.useState(""), [o, a] = w.useState([]), [A, l] = w.useState(!0), [c, g] = w.useState(null);
    w.useEffect(() => {
        d()
    }, []);
    const d = async () => {
        try {
            l(!0);
            const E = await fetch(`${uc}/api/collections`);
            if (!E.ok) throw new Error("Failed to fetch collections");
            const B = await E.json();
            a(B.collections || [])
        } catch (E) {
            g(E.message)
        } finally {
            l(!1)
        }
    }, u = E => {
        n(E.target.value)
    }, h = () => {
        n("")
    }, I = E => {
        const B = E.slug || E.id;
        s(`/collections/${B}`)
    }, p = e.language, m = o.filter(E => {
        if (!t) return !0;
        const B = (E.title?.[p] || E.title?.en || "").toLowerCase(),
            v = (E.subtitle?.[p] || E.subtitle?.en || "").toLowerCase(),
            y = t.toLowerCase();
        return B.includes(y) || v.includes(y)
    });
    return r.jsxs("div", {
        className: "home-container",
        children: [r.jsxs("div", {
            className: "home-header",
            children: [r.jsx("h1", {
                children: i("home.whatCreate")
            }), r.jsx("p", {
                children: i("home.customizeModels")
            })]
        }), r.jsx("div", {
            className: "search-section",
            children: r.jsxs("div", {
                className: "search-bar",
                children: [r.jsx("svg", {
                    className: "search-icon",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: r.jsx("path", {
                        d: "M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }), r.jsx("input", {
                    type: "text",
                    placeholder: i("home.searchPlaceholder"),
                    value: t,
                    onChange: u,
                    className: "search-input"
                }), t && r.jsx("button", {
                    className: "clear-search-btn",
                    onClick: h,
                    "aria-label": i("home.clearSearch"),
                    children: "×"
                })]
            })
        }), r.jsxs("div", {
            className: "collections-section",
            children: [A && r.jsx("div", {
                className: "loading-state",
                children: r.jsx("p", {
                    children: i("home.loadingModels")
                })
            }), c && r.jsx("div", {
                className: "error-state",
                children: r.jsxs("p", {
                    children: [i("common.error"), ": ", c]
                })
            }), !A && !c && m.length === 0 && t && r.jsxs("div", {
                className: "empty-state",
                children: [r.jsx("h3", {
                    children: i("home.noModelsFound")
                }), r.jsx("p", {
                    children: i("home.tryDifferentKeywords")
                }), r.jsx("button", {
                    className: "btn-clear-search",
                    onClick: h,
                    children: i("home.clearSearch")
                })]
            }), !A && !c && m.length === 0 && !t && r.jsxs("div", {
                className: "empty-state",
                children: [r.jsx("h3", {
                    children: i("home.noModelsYet")
                }), r.jsx("p", {
                    children: i("home.checkBackSoon")
                })]
            }), !A && !c && m.length > 0 && r.jsx("div", {
                className: "collections-grid",
                children: m.map(E => r.jsx(dc, {
                    collection: E,
                    onClick: I
                }, E.id))
            })]
        })]
    })
}
const Ic = "3712083091-vd18h1ic99rd2rek01rhmj3rkj787mig.apps.googleusercontent.com",
    pc = i => ({
        en: "en",
        pt: "pt-BR",
        es: "es"
    })[i] || "en";

function sa({
    onSuccess: i,
    onError: e
}) {
    const {
        i18n: s
    } = X(), t = w.useRef(null), {
        loginWithGoogle: n,
        isLoading: o
    } = ve(), a = w.useRef(!1), A = w.useCallback(async l => {
        const c = await n(l.credential);
        c.success ? i?.(c) : e?.(c.error)
    }, [n, i, e]);
    return w.useEffect(() => {
        if (a.current) return;
        const l = () => {
            !window.google?.accounts?.id || !t.current || (window.google.accounts.id.initialize({
                client_id: Ic,
                callback: A,
                auto_select: !1
            }), window.google.accounts.id.renderButton(t.current, {
                type: "standard",
                theme: "outline",
                size: "large",
                width: t.current.offsetWidth || 320,
                text: "continue_with",
                locale: pc(s.language)
            }), a.current = !0)
        };
        if (window.google?.accounts?.id) {
            l();
            return
        }
        const c = document.querySelector('script[src="https://accounts.google.com/gsi/client"]');
        if (c) {
            c.addEventListener("load", l);
            return
        }
        const g = document.createElement("script");
        g.src = "https://accounts.google.com/gsi/client", g.async = !0, g.defer = !0, g.onload = l, document.head.appendChild(g)
    }, [A, s.language]), r.jsx("div", {
        ref: t,
        className: "google-login-button",
        style: {
            opacity: o ? .6 : 1,
            pointerEvents: o ? "none" : "auto"
        }
    })
}

function hr(i) {
    if (!i || typeof i != "string") return "/";
    const e = i.trim();
    return e.startsWith("/") && !e.startsWith("//") && !e.includes(":") ? e : "/"
}

function Cc() {
    const {
        t: i
    } = X(), e = Re(), [s] = ir(), {
        login: t,
        isLoading: n,
        error: o,
        clearError: a,
        isAuthenticated: A
    } = ve(), [l, c] = w.useState({
        email: "",
        password: ""
    }), g = s.get("confirmed") === "true", d = hr(s.get("redirect"));
    w.useEffect(() => {
        A && e(d)
    }, [A, e, d]), w.useEffect(() => () => a(), [a]);
    const u = I => {
            c({
                ...l,
                [I.target.name]: I.target.value
            })
        },
        h = async I => {
            I.preventDefault();
            const p = await t(l.email, l.password);
            if (p.success) e(d);
            else if (p.needsConfirmation) {
                const m = d !== "/" ? `/confirm-signup?redirect=${encodeURIComponent(d)}` : "/confirm-signup";
                e(m)
            }
        };
    return r.jsx("div", {
        className: "auth-container",
        children: r.jsxs("div", {
            className: "auth-card",
            children: [r.jsx("h2", {
                children: i("auth.welcomeBack")
            }), r.jsx("p", {
                className: "auth-subtitle",
                children: i("auth.loginSubtitle")
            }), g && r.jsx("div", {
                className: "success-message",
                children: i("auth.emailConfirmedSuccess")
            }), o && r.jsx("div", {
                className: "error-message",
                children: o
            }), r.jsx(sa, {
                onSuccess: () => e(d),
                onError: () => {}
            }), r.jsx("div", {
                className: "auth-divider",
                children: r.jsx("span", {
                    children: i("auth.orContinueWithEmail")
                })
            }), r.jsxs("form", {
                onSubmit: h,
                children: [r.jsxs("div", {
                    className: "form-group",
                    children: [r.jsx("label", {
                        htmlFor: "email",
                        children: i("auth.email")
                    }), r.jsx("input", {
                        type: "email",
                        id: "email",
                        name: "email",
                        value: l.email,
                        onChange: u,
                        required: !0,
                        autoComplete: "email",
                        placeholder: i("auth.emailPlaceholder")
                    })]
                }), r.jsxs("div", {
                    className: "form-group",
                    children: [r.jsx("label", {
                        htmlFor: "password",
                        children: i("auth.password")
                    }), r.jsx("input", {
                        type: "password",
                        id: "password",
                        name: "password",
                        value: l.password,
                        onChange: u,
                        required: !0,
                        autoComplete: "current-password",
                        placeholder: i("auth.passwordPlaceholder")
                    })]
                }), r.jsx("div", {
                    className: "forgot-password-link",
                    children: r.jsx(T, {
                        to: "/forgot-password",
                        children: i("auth.forgotPasswordLink")
                    })
                }), r.jsx("button", {
                    type: "submit",
                    className: "btn-primary",
                    disabled: n,
                    children: i(n ? "auth.loggingIn" : "auth.login")
                })]
            }), r.jsxs("p", {
                className: "auth-footer",
                children: [i("auth.dontHaveAccount"), " ", r.jsx(T, {
                    to: "/signup",
                    children: i("auth.signUp")
                })]
            }), r.jsxs("p", {
                className: "legal-links",
                children: [r.jsx(T, {
                    to: "/terms",
                    children: i("legal.termsOfUse")
                }), " • ", r.jsx(T, {
                    to: "/privacy",
                    children: i("legal.privacyPolicy")
                })]
            })]
        })
    })
}

function fc() {
    const {
        t: i
    } = X(), e = Re(), [s] = ir(), {
        signup: t,
        isLoading: n,
        error: o,
        clearError: a,
        isAuthenticated: A
    } = ve(), [l, c] = w.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }), [g, d] = w.useState(""), u = hr(s.get("redirect"));
    w.useEffect(() => {
        A && e(u)
    }, [A, e, u]), w.useEffect(() => {
        ae.__loaded && ae.capture("signup_form_viewed")
    }, []), w.useEffect(() => () => {
        a(), d("")
    }, [a]);
    const h = m => {
            c({
                ...l,
                [m.target.name]: m.target.value
            }), d("")
        },
        I = async m => {
            if (m.preventDefault(), l.password !== l.confirmPassword) {
                d(i("auth.passwordsNoMatch"));
                return
            }
            if (l.password.length < 6) {
                d(i("auth.passwordMinLength"));
                return
            }
            const E = ws(),
                B = await t(l.email, l.password, l.name, E);
            if (B.success && B.needsConfirmation) {
                const v = u !== "/" ? `/confirm-signup?redirect=${encodeURIComponent(u)}` : "/confirm-signup";
                e(v)
            }
        }, p = g || o;
    return r.jsx("div", {
        className: "auth-container",
        children: r.jsxs("div", {
            className: "auth-card",
            children: [r.jsx("h2", {
                children: i("auth.createAccount")
            }), r.jsx("p", {
                className: "auth-subtitle",
                children: i("auth.signupSubtitle")
            }), p && r.jsx("div", {
                className: "error-message",
                children: p
            }), r.jsx(sa, {
                onSuccess: () => e(u),
                onError: () => {}
            }), r.jsx("div", {
                className: "auth-divider",
                children: r.jsx("span", {
                    children: i("auth.orContinueWithEmail")
                })
            }), r.jsxs("form", {
                onSubmit: I,
                children: [r.jsxs("div", {
                    className: "form-group",
                    children: [r.jsx("label", {
                        htmlFor: "name",
                        children: i("auth.name")
                    }), r.jsx("input", {
                        type: "text",
                        id: "name",
                        name: "name",
                        value: l.name,
                        onChange: h,
                        required: !0,
                        autoComplete: "name",
                        placeholder: i("auth.namePlaceholder")
                    })]
                }), r.jsxs("div", {
                    className: "form-group",
                    children: [r.jsx("label", {
                        htmlFor: "email",
                        children: i("auth.email")
                    }), r.jsx("input", {
                        type: "email",
                        id: "email",
                        name: "email",
                        value: l.email,
                        onChange: h,
                        required: !0,
                        autoComplete: "email",
                        placeholder: i("auth.emailPlaceholder")
                    })]
                }), r.jsxs("div", {
                    className: "form-group",
                    children: [r.jsx("label", {
                        htmlFor: "password",
                        children: i("auth.password")
                    }), r.jsx("input", {
                        type: "password",
                        id: "password",
                        name: "password",
                        value: l.password,
                        onChange: h,
                        required: !0,
                        autoComplete: "new-password",
                        placeholder: i("auth.passwordPlaceholder"),
                        minLength: 6
                    })]
                }), r.jsxs("div", {
                    className: "form-group",
                    children: [r.jsx("label", {
                        htmlFor: "confirmPassword",
                        children: i("auth.confirmPassword")
                    }), r.jsx("input", {
                        type: "password",
                        id: "confirmPassword",
                        name: "confirmPassword",
                        value: l.confirmPassword,
                        onChange: h,
                        required: !0,
                        autoComplete: "new-password",
                        placeholder: i("auth.passwordPlaceholder"),
                        minLength: 6
                    })]
                }), r.jsx("button", {
                    type: "submit",
                    className: "btn-primary",
                    disabled: n,
                    children: i(n ? "auth.creatingAccount" : "auth.signUp")
                })]
            }), r.jsxs("p", {
                className: "legal-notice",
                children: [i("legal.agreeToTerms"), " ", r.jsx(T, {
                    to: "/terms",
                    children: i("legal.termsOfUse")
                }), " ", i("legal.and"), " ", r.jsx(T, {
                    to: "/privacy",
                    children: i("legal.privacyPolicy")
                })]
            }), r.jsxs("p", {
                className: "auth-footer",
                children: [i("auth.alreadyHaveAccount"), " ", r.jsx(T, {
                    to: "/login",
                    children: i("auth.login")
                })]
            })]
        })
    })
}

function Ec() {
    const {
        t: i
    } = X(), e = Re(), [s] = ir(), {
        confirmSignup: t,
        resendCode: n,
        isLoading: o,
        error: a,
        clearError: A,
        isAuthenticated: l,
        pendingEmail: c
    } = ve(), [g, d] = w.useState(""), [u, h] = w.useState(!1), [I, p] = w.useState(""), m = hr(s.get("redirect")), E = c || localStorage.getItem("pendingEmail");
    w.useEffect(() => {
        l && e(m)
    }, [l, e, m]), w.useEffect(() => {
        E || e("/signup")
    }, [E, e]), w.useEffect(() => () => {
        A(), p("")
    }, [A]);
    const B = k => {
            const R = k.target.value.replace(/[^0-9]/g, "").slice(0, 6);
            d(R), p(""), h(!1)
        },
        v = async k => {
            if (k.preventDefault(), g.length !== 6) {
                p(i("auth.codeLength"));
                return
            }
            const R = await t(E, g);
            if (R.success && R.confirmed) {
                const S = m !== "/" ? `/login?redirect=${encodeURIComponent(m)}&confirmed=true` : "/login?confirmed=true";
                e(S)
            }
        }, y = async () => {
            h(!1), (await n(E)).success && h(!0)
        }, b = I || a;
    return E ? r.jsx("div", {
        className: "auth-container",
        children: r.jsxs("div", {
            className: "auth-card",
            children: [r.jsx("h2", {
                children: i("auth.confirmEmail")
            }), r.jsx("p", {
                className: "auth-subtitle",
                children: i("auth.confirmEmailSubtitle", {
                    email: E
                })
            }), b && r.jsx("div", {
                className: "error-message",
                children: b
            }), u && r.jsx("div", {
                className: "success-message",
                children: i("auth.codeResent")
            }), r.jsxs("form", {
                onSubmit: v,
                children: [r.jsxs("div", {
                    className: "form-group",
                    children: [r.jsx("label", {
                        htmlFor: "code",
                        children: i("auth.confirmationCode")
                    }), r.jsx("input", {
                        type: "text",
                        id: "code",
                        name: "code",
                        value: g,
                        onChange: B,
                        required: !0,
                        autoComplete: "one-time-code",
                        placeholder: i("auth.codePlaceholder"),
                        maxLength: 6,
                        style: {
                            fontFamily: "monospace",
                            letterSpacing: "0.3em",
                            textAlign: "center",
                            fontSize: "24px"
                        }
                    })]
                }), r.jsx("button", {
                    type: "submit",
                    className: "btn-primary",
                    disabled: o || g.length !== 6,
                    children: i(o ? "auth.confirming" : "auth.confirmAccount")
                })]
            }), r.jsxs("p", {
                className: "auth-footer",
                children: [i("auth.didntReceiveCode"), " ", r.jsx("button", {
                    onClick: y,
                    disabled: o,
                    className: "link-button",
                    children: i("auth.resendCode")
                })]
            }), r.jsxs("p", {
                className: "auth-footer",
                children: [i("auth.wrongEmail"), " ", r.jsx(T, {
                    to: "/signup",
                    children: i("auth.startOver")
                })]
            })]
        })
    }) : null
}
const xn = 60;

function mc() {
    const {
        t: i
    } = X(), e = Re(), {
        forgotPassword: s,
        isLoading: t,
        error: n,
        clearError: o,
        isAuthenticated: a
    } = ve(), [A, l] = w.useState(""), [c, g] = w.useState(""), [d, u] = w.useState(0);
    w.useEffect(() => {
        a && e("/")
    }, [a, e]), w.useEffect(() => {
        const E = sessionStorage.getItem("resetCodeSentAt");
        if (E) {
            const B = Math.floor((Date.now() - Number(E)) / 1e3),
                v = xn - B;
            v > 0 ? u(v) : sessionStorage.removeItem("resetCodeSentAt")
        }
    }, []), w.useEffect(() => {
        if (d <= 0) return;
        const E = setTimeout(() => u(d - 1), 1e3);
        return () => clearTimeout(E)
    }, [d]), w.useEffect(() => () => {
        o(), g("")
    }, [o]);
    const h = E => {
            l(E.target.value), g("")
        },
        I = async E => {
            if (E.preventDefault(), !A) {
                g(i("auth.emailRequired"));
                return
            }(await s(A.trim().toLowerCase())).success && (sessionStorage.setItem("resetCodeSentAt", String(Date.now())), u(xn), e("/reset-password"))
        }, p = t || d > 0, m = c || n;
    return r.jsx("div", {
        className: "auth-container",
        children: r.jsxs("div", {
            className: "auth-card",
            children: [r.jsx("h2", {
                children: i("auth.forgotPassword")
            }), r.jsx("p", {
                className: "auth-subtitle",
                children: i("auth.forgotPasswordSubtitle")
            }), m && r.jsx("div", {
                className: "error-message",
                children: m
            }), r.jsxs("form", {
                onSubmit: I,
                children: [r.jsxs("div", {
                    className: "form-group",
                    children: [r.jsx("label", {
                        htmlFor: "email",
                        children: i("auth.email")
                    }), r.jsx("input", {
                        type: "email",
                        id: "email",
                        name: "email",
                        value: A,
                        onChange: h,
                        required: !0,
                        autoComplete: "email",
                        placeholder: i("auth.emailPlaceholder")
                    })]
                }), r.jsx("button", {
                    type: "submit",
                    className: "btn-primary",
                    disabled: p,
                    children: t ? i("auth.sendingCode") : d > 0 ? i("auth.resendIn", {
                        seconds: d
                    }) : i("auth.sendResetCode")
                })]
            }), r.jsxs("p", {
                className: "auth-footer",
                children: [i("auth.rememberPassword"), " ", r.jsx(T, {
                    to: "/login",
                    children: i("auth.backToLogin")
                })]
            })]
        })
    })
}

function Bc() {
    const {
        t: i
    } = X(), e = Re(), {
        confirmForgotPassword: s,
        isLoading: t,
        error: n,
        clearError: o,
        isAuthenticated: a
    } = ve(), [A, l] = w.useState({
        code: "",
        newPassword: "",
        confirmPassword: ""
    }), [c, g] = w.useState(""), [d, u] = w.useState(!1), h = sessionStorage.getItem("resetEmail");
    w.useEffect(() => {
        a && e("/")
    }, [a, e]), w.useEffect(() => {
        h || e("/forgot-password")
    }, [h, e]), w.useEffect(() => () => {
        o(), g("")
    }, [o]);
    const I = E => {
            let B = E.target.value;
            E.target.name === "code" && (B = B.replace(/[^0-9]/g, "").slice(0, 6)), l({
                ...A,
                [E.target.name]: B
            }), g("")
        },
        p = async E => {
            if (E.preventDefault(), A.code.length !== 6) {
                g(i("auth.codeLength"));
                return
            }
            if (A.newPassword.length < 8) {
                g(i("auth.passwordMinLengthCognito"));
                return
            }
            if (A.newPassword !== A.confirmPassword) {
                g(i("auth.passwordsNoMatch"));
                return
            }(await s(h, A.code, A.newPassword)).success && u(!0)
        }, m = c || n;
    return h ? d ? r.jsx("div", {
        className: "auth-container",
        children: r.jsxs("div", {
            className: "auth-card",
            children: [r.jsx("h2", {
                children: i("auth.passwordResetSuccess")
            }), r.jsx("p", {
                className: "auth-subtitle",
                children: i("auth.passwordResetSuccessSubtitle")
            }), r.jsx(T, {
                to: "/login",
                className: "btn-primary",
                style: {
                    display: "block",
                    textAlign: "center",
                    textDecoration: "none"
                },
                children: i("auth.backToLogin")
            })]
        })
    }) : r.jsx("div", {
        className: "auth-container",
        children: r.jsxs("div", {
            className: "auth-card",
            children: [r.jsx("h2", {
                children: i("auth.resetPassword")
            }), r.jsx("p", {
                className: "auth-subtitle",
                children: i("auth.resetPasswordSubtitle", {
                    email: h
                })
            }), m && r.jsx("div", {
                className: "error-message",
                children: m
            }), r.jsxs("form", {
                onSubmit: p,
                children: [r.jsxs("div", {
                    className: "form-group",
                    children: [r.jsx("label", {
                        htmlFor: "code",
                        children: i("auth.confirmationCode")
                    }), r.jsx("input", {
                        type: "text",
                        id: "code",
                        name: "code",
                        value: A.code,
                        onChange: I,
                        required: !0,
                        autoComplete: "one-time-code",
                        placeholder: i("auth.codePlaceholder"),
                        maxLength: 6,
                        style: {
                            fontFamily: "monospace",
                            letterSpacing: "0.3em",
                            textAlign: "center",
                            fontSize: "24px"
                        }
                    })]
                }), r.jsxs("div", {
                    className: "form-group",
                    children: [r.jsx("label", {
                        htmlFor: "newPassword",
                        children: i("auth.newPassword")
                    }), r.jsx("input", {
                        type: "password",
                        id: "newPassword",
                        name: "newPassword",
                        value: A.newPassword,
                        onChange: I,
                        required: !0,
                        autoComplete: "new-password",
                        placeholder: i("auth.passwordPlaceholder"),
                        minLength: 8
                    })]
                }), r.jsxs("div", {
                    className: "form-group",
                    children: [r.jsx("label", {
                        htmlFor: "confirmPassword",
                        children: i("auth.confirmPassword")
                    }), r.jsx("input", {
                        type: "password",
                        id: "confirmPassword",
                        name: "confirmPassword",
                        value: A.confirmPassword,
                        onChange: I,
                        required: !0,
                        autoComplete: "new-password",
                        placeholder: i("auth.passwordPlaceholder"),
                        minLength: 8
                    })]
                }), r.jsx("button", {
                    type: "submit",
                    className: "btn-primary",
                    disabled: t,
                    children: i(t ? "auth.resettingPassword" : "auth.resetPassword")
                })]
            }), r.jsx("p", {
                className: "auth-footer",
                children: r.jsx(T, {
                    to: "/forgot-password",
                    children: i("auth.requestNewCode")
                })
            })]
        })
    }) : null
}

function _n() {
    const {
        t: i,
        i18n: e
    } = X(), [s, t] = w.useState([]), [n, o] = w.useState(!0), [a, A] = w.useState("");
    w.useEffect(() => {
        const c = new AbortController;
        return (async () => {
            try {
                o(!0);
                const u = (await J.get("/api/models", {
                    signal: c.signal
                })).data.models || [];
                t(u)
            } catch (d) {
                if (d.name === "CanceledError" || d.code === "ERR_CANCELED") return;
                t([])
            } finally {
                c.signal.aborted || o(!1)
            }
        })(), () => {
            c.abort()
        }
    }, []);
    const l = w.useMemo(() => {
        let c = s;
        if (a.trim() !== "") {
            const g = a.toLowerCase();
            c = c.filter(d => Ne(d.title, e.language).toLowerCase().includes(g) || d.tags && d.tags.some(h => h.toLowerCase().includes(g)))
        }
        return c
    }, [s, a, e.language]);
    return r.jsxs("div", {
        className: "models-container",
        children: [r.jsxs("div", {
            className: "templates-header",
            children: [r.jsx("h1", {
                className: "templates-title",
                children: i("templates.title")
            }), r.jsx("div", {
                className: "search-container",
                children: r.jsxs("div", {
                    className: "search-bar",
                    children: [r.jsx("svg", {
                        className: "search-icon",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: r.jsx("path", {
                            d: "M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    }), r.jsx("input", {
                        type: "text",
                        className: "search-input",
                        placeholder: s.length > 0 ? i("templates.searchPlaceholder", {
                            count: s.length
                        }) : i("templates.searchPlaceholderEmpty"),
                        value: a,
                        onChange: c => A(c.target.value)
                    })]
                })
            })]
        }), r.jsx("div", {
            className: "models-section",
            children: n ? r.jsxs("div", {
                className: "loading-state",
                children: [r.jsx("div", {
                    className: "spinner"
                }), r.jsx("p", {
                    children: i("templates.loadingModels")
                })]
            }) : l.length === 0 ? r.jsxs("div", {
                className: "empty-state",
                children: [r.jsx("div", {
                    className: "empty-icon",
                    children: "📦"
                }), r.jsx("h3", {
                    children: i("home.noModelsYet")
                }), r.jsx("p", {
                    children: i("home.checkBackSoon")
                })]
            }) : r.jsx("div", {
                className: "models-grid",
                children: l.map(c => {
                    const g = Ne(c.title, e.language),
                        d = Hi(c.coverImage);
                    return r.jsxs(T, {
                        to: `/models/${c.slug}`,
                        className: "model-card",
                        children: [r.jsx("div", {
                            className: "model-preview",
                            children: r.jsx(Ji, {
                                src: d,
                                alt: g,
                                className: "model-cover-image"
                            })
                        }), r.jsxs("div", {
                            className: "model-info",
                            children: [r.jsx("h3", {
                                className: "model-title",
                                children: g
                            }), r.jsxs("div", {
                                className: "model-meta",
                                children: [c.credits > 0 && r.jsxs("span", {
                                    className: "credits-pill",
                                    children: [c.credits, " ", c.credits === 1 ? i("nav.credits").slice(0, -1) : i("nav.credits")]
                                }), c.downloads > 0 && r.jsxs("span", {
                                    className: "downloads-counter",
                                    children: [r.jsxs("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [r.jsx("path", {
                                            d: "M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), r.jsx("path", {
                                            d: "M7 10L12 15L17 10",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), r.jsx("path", {
                                            d: "M12 15V3",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })]
                                    }), c.downloads, " ", c.downloads === 1 ? i("home.download") : i("home.downloads")]
                                })]
                            })]
                        })]
                    }, c.id)
                })
            })
        })]
    })
}

function Qc() {
    const i = Re(),
        {
            slug: e
        } = ba(),
        {
            t: s,
            i18n: t
        } = X(),
        [n, o] = w.useState(null),
        [a, A] = w.useState([]),
        [l, c] = w.useState(!0),
        [g, d] = w.useState("");
    w.useEffect(() => {
        const E = new AbortController;
        return (async () => {
            try {
                c(!0);
                const [v, y] = await Promise.all([J.get(`/api/collections/${e}`, {
                    signal: E.signal
                }), J.get(`/api/collections/${e}/models`, {
                    signal: E.signal
                })]);
                o(v.data.collection || v.data), A(y.data.models || []), ae.__loaded && ae.capture("collection_viewed", {
                    collection_slug: e
                })
            } catch (v) {
                if (v.name === "CanceledError" || v.code === "ERR_CANCELED") return;
                o(null), A([])
            } finally {
                E.signal.aborted || c(!1)
            }
        })(), () => {
            E.abort()
        }
    }, [e]);
    const u = w.useMemo(() => {
            let E = a;
            if (g.trim() !== "") {
                const B = g.toLowerCase();
                E = E.filter(v => Ne(v.title, t.language).toLowerCase().includes(B))
            }
            return E
        }, [a, g, t.language]),
        h = E => {
            i(`/models/${E.slug}`)
        },
        I = () => {
            i("/")
        };
    if (l) return r.jsx("div", {
        className: "collection-detail-container",
        children: r.jsxs("div", {
            className: "loading-state",
            children: [r.jsx("div", {
                className: "spinner"
            }), r.jsx("p", {
                children: s("collections.loading")
            })]
        })
    });
    if (!n) return r.jsx("div", {
        className: "collection-detail-container",
        children: r.jsxs("div", {
            className: "empty-state",
            children: [r.jsx("div", {
                className: "empty-icon",
                children: "404"
            }), r.jsx("h3", {
                children: s("collections.notFound")
            }), r.jsx("p", {
                children: s("collections.notFoundDescription")
            }), r.jsx("button", {
                className: "btn-primary",
                onClick: I,
                children: s("collections.backToCollections")
            })]
        })
    });
    const p = Ne(n.title, t.language),
        m = Ne(n.subtitle, t.language);
    return r.jsxs("div", {
        className: "collection-detail-container",
        children: [r.jsx("div", {
            className: "back-button-container",
            children: r.jsxs("button", {
                className: "back-button",
                onClick: I,
                children: [r.jsx("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: r.jsx("path", {
                        d: "M19 12H5M5 12L12 19M5 12L12 5",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }), s("common.back")]
            })
        }), r.jsxs("div", {
            className: "collection-header",
            children: [r.jsxs("div", {
                className: "collection-info",
                children: [r.jsx("h1", {
                    className: "collection-title",
                    children: p
                }), m && r.jsx("p", {
                    className: "collection-subtitle",
                    children: m
                }), r.jsx("div", {
                    className: "collection-stats",
                    children: r.jsxs("span", {
                        className: "model-count",
                        children: [a.length, " ", a.length === 1 ? s("collections.model") : s("collections.models")]
                    })
                })]
            }), a.length > 0 && r.jsx("div", {
                className: "search-container",
                children: r.jsxs("div", {
                    className: "search-bar",
                    children: [r.jsx("svg", {
                        className: "search-icon",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: r.jsx("path", {
                            d: "M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    }), r.jsx("input", {
                        type: "text",
                        className: "search-input",
                        placeholder: s("collections.searchModels"),
                        value: g,
                        onChange: E => d(E.target.value)
                    })]
                })
            })]
        }), r.jsx("div", {
            className: "models-section",
            children: u.length === 0 ? r.jsxs("div", {
                className: "empty-state",
                children: [r.jsx("div", {
                    className: "empty-icon",
                    children: "📦"
                }), r.jsx("h3", {
                    children: s(g ? "collections.noResults" : "collections.noModels")
                }), r.jsx("p", {
                    children: s(g ? "collections.tryDifferentSearch" : "collections.noModelsDescription")
                })]
            }) : r.jsx("div", {
                className: "models-grid",
                children: u.map(E => {
                    const B = Ne(E.title, t.language),
                        v = Hi(E.coverImage);
                    return r.jsxs("div", {
                        className: "model-card",
                        onClick: () => h(E),
                        children: [r.jsx("div", {
                            className: "model-preview",
                            children: r.jsx(Ji, {
                                src: v,
                                alt: B,
                                className: "model-cover-image"
                            })
                        }), r.jsxs("div", {
                            className: "model-info",
                            children: [r.jsx("h3", {
                                children: B
                            }), r.jsxs("div", {
                                className: "model-meta",
                                children: [E.credits > 0 && r.jsxs("span", {
                                    className: "credits-pill",
                                    children: [E.credits, " ", E.credits === 1 ? s("nav.credit") : s("nav.credits")]
                                }), r.jsxs("span", {
                                    className: "download-count",
                                    children: [r.jsx("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: r.jsx("path", {
                                            d: "M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    }), E.downloads || 0]
                                })]
                            })]
                        })]
                    }, E.id)
                })
            })
        })]
    })
}

function vc() {
    const {
        t: i,
        i18n: e
    } = X(), [s, t] = w.useState([]), [n, o] = w.useState(!0), [a, A] = w.useState("");
    w.useEffect(() => {
        const c = new AbortController;
        return (async () => {
            try {
                o(!0);
                const u = (await J.get("/api/printables", {
                    signal: c.signal
                })).data.printables || [];
                t(u)
            } catch (d) {
                if (d.name === "CanceledError" || d.code === "ERR_CANCELED") return;
                t([])
            } finally {
                c.signal.aborted || o(!1)
            }
        })(), () => {
            c.abort()
        }
    }, []);
    const l = w.useMemo(() => {
        let c = s;
        if (a.trim() !== "") {
            const g = a.toLowerCase();
            c = c.filter(d => Ne(d.title, e.language).toLowerCase().includes(g) || d.tags && d.tags.some(h => h.toLowerCase().includes(g)))
        }
        return c
    }, [s, a, e.language]);
    return r.jsxs("div", {
        className: "models-container",
        children: [r.jsxs("div", {
            className: "templates-header",
            children: [r.jsx("h1", {
                className: "templates-title",
                children: i("printables.title")
            }), r.jsx("div", {
                className: "search-container",
                children: r.jsxs("div", {
                    className: "search-bar",
                    children: [r.jsx("svg", {
                        className: "search-icon",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: r.jsx("path", {
                            d: "M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    }), r.jsx("input", {
                        type: "text",
                        className: "search-input",
                        placeholder: i("printables.searchPlaceholder"),
                        value: a,
                        onChange: c => A(c.target.value)
                    })]
                })
            })]
        }), r.jsx("div", {
            className: "models-section",
            children: n ? r.jsxs("div", {
                className: "loading-state",
                children: [r.jsx("div", {
                    className: "spinner"
                }), r.jsx("p", {
                    children: i("printables.loadingPrintables")
                })]
            }) : l.length === 0 ? r.jsxs("div", {
                className: "empty-state",
                children: [r.jsx("div", {
                    className: "empty-icon",
                    children: "📦"
                }), r.jsx("h3", {
                    children: i("printables.noPrintablesYet")
                }), r.jsx("p", {
                    children: i("printables.checkBackSoon")
                })]
            }) : r.jsx("div", {
                className: "models-grid",
                children: l.map(c => {
                    const g = Ne(c.title, e.language),
                        d = Hi(c.coverImage);
                    return r.jsxs(T, {
                        to: `/printables/${c.slug}`,
                        className: "model-card",
                        children: [r.jsx("div", {
                            className: "model-preview",
                            children: r.jsx(Ji, {
                                src: d,
                                alt: g,
                                className: "model-cover-image"
                            })
                        }), r.jsxs("div", {
                            className: "model-info",
                            children: [r.jsx("h3", {
                                className: "model-title",
                                children: g
                            }), r.jsxs("div", {
                                className: "model-meta",
                                children: [c.credits > 0 && r.jsxs("span", {
                                    className: "credits-pill",
                                    children: [c.credits, " ", c.credits === 1 ? i("download.credit") : i("download.credits")]
                                }), c.downloads > 0 && r.jsxs("span", {
                                    className: "downloads-counter",
                                    children: [r.jsxs("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [r.jsx("path", {
                                            d: "M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), r.jsx("path", {
                                            d: "M7 10L12 15L17 10",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }), r.jsx("path", {
                                            d: "M12 15V3",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })]
                                    }), c.downloads, " ", c.downloads === 1 ? i("home.download") : i("home.downloads")]
                                })]
                            })]
                        })]
                    }, c.id)
                })
            })
        })]
    })
}
const yc = i => ({
        free: "profile.freeTier",
        monthly_basic: "profile.monthlyBasic",
        monthly_pro: "profile.monthlyPro"
    })[i] || "profile.freeTier",
    wn = i => !i || i === "free";

function xc() {
    const i = Re(),
        {
            t: e
        } = X(),
        {
            user: s,
            isAuthenticated: t,
            isLoading: n,
            logout: o,
            updateUserName: a
        } = ve(),
        [A, l] = w.useState(!1),
        [c, g] = w.useState(""),
        [d, u] = w.useState(!1),
        h = s?.subscriptionTier || "free",
        I = s?.credits || 0,
        p = () => {
            o(), i("/")
        },
        m = () => {
            g(s?.name || ""), l(!0)
        },
        E = () => {
            l(!1), g("")
        },
        B = async () => {
            if (c.trim()) {
                u(!0);
                try {
                    await a(c.trim()), l(!1)
                } catch {} finally {
                    u(!1)
                }
            }
        };
    return n ? r.jsx("div", {
        className: "profile-container",
        children: r.jsx("div", {
            className: "profile-loading",
            children: r.jsx("p", {
                children: e("common.loading")
            })
        })
    }) : t ? r.jsx("div", {
        className: "profile-container",
        children: r.jsxs("div", {
            className: "profile-content",
            children: [r.jsxs("div", {
                className: "social-media-section",
                children: [r.jsx("h3", {
                    children: e("profile.followUs")
                }), r.jsxs("div", {
                    className: "social-links",
                    children: [r.jsxs("a", {
                        href: "https://www.instagram.com/mafagrafos",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "social-link instagram",
                        "aria-label": "Instagram",
                        children: [r.jsx("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: r.jsx("path", {
                                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                            })
                        }), r.jsx("span", {
                            children: "Instagram"
                        })]
                    }), r.jsxs("a", {
                        href: "https://www.tiktok.com/@mafagrafos",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "social-link tiktok",
                        "aria-label": "TikTok",
                        children: [r.jsx("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: r.jsx("path", {
                                d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                            })
                        }), r.jsx("span", {
                            children: "TikTok"
                        })]
                    }), r.jsxs("a", {
                        href: "https://www.youtube.com/@Mafagrafos",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "social-link youtube",
                        "aria-label": "YouTube",
                        children: [r.jsx("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: r.jsx("path", {
                                d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                            })
                        }), r.jsx("span", {
                            children: "YouTube"
                        })]
                    })]
                })]
            }), r.jsxs("div", {
                className: "profile-card",
                children: [r.jsx("div", {
                    className: "profile-avatar-large",
                    children: (() => {
                        const v = s?.name || "U",
                            y = v.trim().split(/\s+/);
                        return y.length >= 2 ? (y[0].charAt(0) + y[y.length - 1].charAt(0)).toUpperCase() : v.charAt(0).toUpperCase()
                    })()
                }), r.jsxs("div", {
                    className: "profile-info-section",
                    children: [r.jsx("h2", {
                        children: e("profile.accountInformation")
                    }), r.jsxs("div", {
                        className: "info-group",
                        children: [r.jsx("label", {
                            children: e("profile.name")
                        }), r.jsx("div", {
                            className: "info-value-editable",
                            children: A ? r.jsxs("div", {
                                className: "edit-name-container",
                                children: [r.jsx("input", {
                                    type: "text",
                                    value: c,
                                    onChange: v => g(v.target.value),
                                    className: "edit-name-input",
                                    autoFocus: !0,
                                    disabled: d
                                }), r.jsxs("div", {
                                    className: "edit-name-actions",
                                    children: [r.jsx("button", {
                                        onClick: B,
                                        className: "btn-save-name",
                                        disabled: d || !c.trim(),
                                        children: e(d ? "profile.saving" : "profile.save")
                                    }), r.jsx("button", {
                                        onClick: E,
                                        className: "btn-cancel-name",
                                        disabled: d,
                                        children: e("profile.cancel")
                                    })]
                                })]
                            }) : r.jsxs(r.Fragment, {
                                children: [r.jsx("span", {
                                    children: s?.name || e("profile.notSet")
                                }), r.jsx("button", {
                                    onClick: m,
                                    className: "btn-edit-name",
                                    "aria-label": e("profile.editName"),
                                    children: r.jsx("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: r.jsx("path", {
                                            d: "M11.333 2.00004C11.5081 1.82494 11.716 1.68605 11.9447 1.59129C12.1735 1.49653 12.4187 1.44775 12.6663 1.44775C12.914 1.44775 13.1592 1.49653 13.3879 1.59129C13.6167 1.68605 13.8246 1.82494 13.9997 2.00004C14.1748 2.17513 14.3137 2.383 14.4084 2.61178C14.5032 2.84055 14.552 3.08575 14.552 3.33337C14.552 3.58099 14.5032 3.82619 14.4084 4.05497C14.3137 4.28374 14.1748 4.49161 13.9997 4.66671L5.33301 13.3334L1.33301 14.6667L2.66634 10.6667L11.333 2.00004Z",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                })]
                            })
                        })]
                    }), r.jsxs("div", {
                        className: "info-group",
                        children: [r.jsx("label", {
                            children: e("profile.email")
                        }), r.jsx("div", {
                            className: "info-value",
                            children: s?.email || e("profile.notSet")
                        })]
                    }), r.jsxs("div", {
                        className: "info-group",
                        children: [r.jsx("label", {
                            children: e("profile.support")
                        }), r.jsx("div", {
                            className: "info-value-subtitle",
                            children: e("profile.supportSubtitle")
                        }), r.jsx("a", {
                            href: "mailto:contato@mafagrafos.com",
                            className: "support-email",
                            children: "contato@mafagrafos.com"
                        })]
                    }), r.jsxs("div", {
                        className: "info-group",
                        children: [r.jsx("label", {
                            children: e("profile.accountType")
                        }), r.jsx("div", {
                            className: "info-value",
                            children: r.jsx("span", {
                                className: "badge",
                                children: e(yc(h))
                            })
                        })]
                    })]
                }), r.jsxs("div", {
                    className: "quota-section",
                    children: [r.jsx("h3", {
                        children: e("profile.creditsTitle")
                    }), r.jsx("p", {
                        className: "credits-count",
                        children: I
                    }), r.jsx("p", {
                        className: "quota-text",
                        children: e("profile.creditsAvailable", {
                            count: I
                        })
                    }), r.jsxs("div", {
                        className: "quota-actions",
                        children: [r.jsx("button", {
                            className: "btn-upgrade",
                            onClick: () => i("/upgrade"),
                            children: wn(h) ? e("profile.upgrade") : e("profile.buyCredits")
                        }), r.jsx("button", {
                            className: "btn-manage-subscription",
                            onClick: () => i("/subscription"),
                            children: e("subscription.manageSubscription")
                        })]
                    }), r.jsxs("p", {
                        className: "faq-link-text",
                        children: [e("profile.questionsAboutCredits"), " ", r.jsx(T, {
                            to: "/faq",
                            children: e("legal.faq")
                        })]
                    })]
                }), wn(h) && r.jsxs("div", {
                    className: "subscription-promo-section",
                    children: [r.jsx("h3", {
                        children: e("upgrade.subscriptionPlans")
                    }), r.jsx("stripe-pricing-table", {
                        "pricing-table-id": "prctbl_1Sw1xU1BhRsob9PEyqDFU8Xz",
                        "publishable-key": "pk_live_51Spotf1BhRsob9PEVEbltLPl1sDngEAQYbguvanjc8ZJcB4nDZSy9aGaQ8JyoA9JbUwxmcecW54FJ0bDf86j5KHq00hPV3tOwr",
                        "client-reference-id": s?.id,
                        "customer-email": s?.email
                    })]
                }), r.jsxs("div", {
                    className: "legal-section",
                    children: [r.jsx(T, {
                        to: "/terms",
                        className: "legal-link",
                        children: e("legal.termsOfUse")
                    }), r.jsx(T, {
                        to: "/privacy",
                        className: "legal-link",
                        children: e("legal.privacyPolicy")
                    }), r.jsx(T, {
                        to: "/faq",
                        className: "legal-link",
                        children: e("legal.faq")
                    })]
                }), r.jsx("div", {
                    className: "profile-actions",
                    children: r.jsx("button", {
                        onClick: p,
                        className: "btn-logout",
                        children: e("profile.logout")
                    })
                })]
            })]
        })
    }) : r.jsx("div", {
        className: "profile-container",
        children: r.jsxs("div", {
            className: "profile-content",
            children: [r.jsxs("div", {
                className: "auth-required",
                children: [r.jsx("div", {
                    className: "auth-icon",
                    children: "🔒"
                }), r.jsx("h2", {
                    children: e("profile.loginRequired")
                }), r.jsx("p", {
                    children: e("profile.pleaseLogin")
                }), r.jsxs("div", {
                    className: "auth-buttons",
                    children: [r.jsx("button", {
                        onClick: () => i("/login"),
                        className: "btn-primary",
                        children: e("profile.login")
                    }), r.jsx("button", {
                        onClick: () => i("/signup"),
                        className: "btn-secondary",
                        children: e("profile.signUp")
                    })]
                })]
            }), r.jsxs("div", {
                className: "social-media-section",
                children: [r.jsx("h3", {
                    children: e("profile.followUs")
                }), r.jsxs("div", {
                    className: "social-links",
                    children: [r.jsxs("a", {
                        href: "https://www.instagram.com/mafagrafos",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "social-link instagram",
                        "aria-label": "Instagram",
                        children: [r.jsx("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: r.jsx("path", {
                                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                            })
                        }), r.jsx("span", {
                            children: "Instagram"
                        })]
                    }), r.jsxs("a", {
                        href: "https://www.tiktok.com/@mafagrafos",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "social-link tiktok",
                        "aria-label": "TikTok",
                        children: [r.jsx("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: r.jsx("path", {
                                d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                            })
                        }), r.jsx("span", {
                            children: "TikTok"
                        })]
                    }), r.jsxs("a", {
                        href: "https://www.youtube.com/@Mafagrafos",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "social-link youtube",
                        "aria-label": "YouTube",
                        children: [r.jsx("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: r.jsx("path", {
                                d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                            })
                        }), r.jsx("span", {
                            children: "YouTube"
                        })]
                    })]
                })]
            })]
        })
    })
}

function _c() {
    const {
        t: i
    } = X(), e = Re(), {
        user: s,
        isAuthenticated: t,
        isLoading: n
    } = ve();
    w.useEffect(() => {
        !n && !t && e("/login", {
            state: {
                from: "/upgrade"
            }
        })
    }, [n, t, e]), w.useEffect(() => {
        if (!t || !s?.id) return;
        const g = ws();
        Object.keys(g).length > 0 && Qi.setConversionUtm(g).catch(() => {}), ae.__loaded && ae.capture("upgrade_page_viewed")
    }, [t, s?.id]);
    const o = "pk_live_51Spotf1BhRsob9PEVEbltLPl1sDngEAQYbguvanjc8ZJcB4nDZSy9aGaQ8JyoA9JbUwxmcecW54FJ0bDf86j5KHq00hPV3tOwr",
        a = "prctbl_1Sw1xU1BhRsob9PEyqDFU8Xz",
        A = "prctbl_1Sw21I1BhRsob9PEpMwjIDnH",
        l = t && s?.id ? s.id : void 0,
        c = t && s?.email ? s.email : void 0;
    return n ? r.jsx("div", {
        className: "upgrade-container",
        children: r.jsx("div", {
            className: "upgrade-content",
            children: r.jsx("p", {
                children: i("common.loading")
            })
        })
    }) : !t || !s?.id ? r.jsx("div", {
        className: "upgrade-container",
        children: r.jsx("div", {
            className: "upgrade-content",
            children: r.jsx("p", {
                children: i("upgrade.loginRequired")
            })
        })
    }) : r.jsx("div", {
        className: "upgrade-container",
        children: r.jsxs("div", {
            className: "upgrade-content",
            children: [r.jsx("h1", {
                className: "page-title",
                children: i("upgrade.upgradeTitle")
            }), r.jsx("div", {
                className: "pricing-layout",
                children: r.jsxs("section", {
                    className: "stripe-pricing-section",
                    children: [r.jsx("h2", {
                        children: i("upgrade.subscriptionPlans")
                    }), r.jsx("stripe-pricing-table", {
                        "pricing-table-id": a,
                        "publishable-key": o,
                        "client-reference-id": l,
                        "customer-email": c
                    })]
                })
            }), r.jsx("div", {
                className: "pricing-layout",
                children: r.jsxs("section", {
                    className: "stripe-pricing-section",
                    children: [r.jsx("h2", {
                        children: i("upgrade.creditPacks")
                    }), r.jsx("p", {
                        className: "section-description",
                        children: i("upgrade.creditPacksDescription")
                    }), r.jsx("stripe-pricing-table", {
                        "pricing-table-id": A,
                        "publishable-key": o,
                        "client-reference-id": l,
                        "customer-email": c
                    })]
                })
            })]
        })
    })
}

function wc() {
    const i = Re(),
        {
            t: e
        } = X(),
        {
            isAuthenticated: s
        } = ve(),
        [t, n] = w.useState(null),
        [o, a] = w.useState(!0),
        [A, l] = w.useState(!1),
        [c, g] = w.useState(null),
        [d, u] = w.useState(!1),
        [h, I] = w.useState(!1);
    w.useEffect(() => {
        s && p()
    }, [s]);
    const p = async () => {
        a(!0), g(null);
        try {
            const k = await Qi.getStatus();
            n(k.subscription)
        } catch {
            g(e("subscription.error"))
        } finally {
            a(!1)
        }
    }, m = async () => {
        l(!0), g(null);
        try {
            await Qi.cancel(), u(!1), await p()
        } catch {
            g(e("subscription.error"))
        } finally {
            l(!1)
        }
    }, E = async () => {
        l(!0), g(null);
        try {
            await Qi.resume(), I(!1), await p()
        } catch {
            g(e("subscription.error"))
        } finally {
            l(!1)
        }
    }, B = k => k ? new Date(k).toLocaleDateString(void 0, {
        year: "numeric",
        month: "long",
        day: "numeric"
    }) : "-", v = () => t ? t.status === "canceling" || t.cancelAtPeriodEnd ? r.jsx("span", {
        className: "badge badge-warning",
        children: e("subscription.statusCanceling", {
            date: B(t.periodEnd)
        })
    }) : t.status === "active" ? r.jsx("span", {
        className: "badge badge-success",
        children: e("subscription.statusActive")
    }) : t.status === "past_due" ? r.jsx("span", {
        className: "badge badge-error",
        children: e("subscription.statusPastDue")
    }) : !t.tier || t.tier === "free" ? r.jsx("span", {
        className: "badge badge-neutral",
        children: e("subscription.statusFree")
    }) : null : null;
    if (!s) return r.jsx("div", {
        className: "subscription-container",
        children: r.jsxs("div", {
            className: "auth-required",
            children: [r.jsx("div", {
                className: "auth-icon",
                children: "🔒"
            }), r.jsx("h2", {
                children: e("profile.loginRequired")
            }), r.jsx("p", {
                children: e("profile.pleaseLogin")
            }), r.jsxs("div", {
                className: "auth-buttons",
                children: [r.jsx("button", {
                    onClick: () => i("/login"),
                    className: "btn-primary",
                    children: e("profile.login")
                }), r.jsx("button", {
                    onClick: () => i("/signup"),
                    className: "btn-secondary",
                    children: e("profile.signUp")
                })]
            })]
        })
    });
    if (o) return r.jsx("div", {
        className: "subscription-container",
        children: r.jsxs("div", {
            className: "loading-state",
            children: [r.jsx("div", {
                className: "spinner"
            }), r.jsx("p", {
                children: e("common.loading")
            })]
        })
    });
    const y = t && t.tier && t.tier !== "free",
        b = t?.status === "canceling" || t?.cancelAtPeriodEnd;
    return r.jsx("div", {
        className: "subscription-container",
        children: r.jsxs("div", {
            className: "subscription-content",
            children: [r.jsx("h1", {
                children: e("subscription.title")
            }), c && r.jsx("div", {
                className: "error-message",
                children: c
            }), r.jsxs("div", {
                className: "subscription-card",
                children: [r.jsxs("div", {
                    className: "card-header",
                    children: [r.jsx("h2", {
                        children: e("subscription.status")
                    }), v()]
                }), y ? r.jsxs("div", {
                    className: "subscription-details",
                    children: [r.jsxs("div", {
                        className: "detail-row",
                        children: [r.jsx("span", {
                            className: "detail-label",
                            children: e("subscription.plan")
                        }), r.jsx("span", {
                            className: "detail-value",
                            children: t.tierLabel
                        })]
                    }), t.periodEnd && r.jsxs("div", {
                        className: "detail-row",
                        children: [r.jsx("span", {
                            className: "detail-label",
                            children: e("subscription.nextPayment")
                        }), r.jsx("span", {
                            className: "detail-value",
                            children: B(t.periodEnd)
                        })]
                    }), r.jsxs("div", {
                        className: "detail-row",
                        children: [r.jsx("span", {
                            className: "detail-label",
                            children: e("subscription.credits")
                        }), r.jsx("span", {
                            className: "detail-value",
                            children: e("subscription.creditsRemaining", {
                                current: t.credits,
                                total: t.creditsTotal
                            })
                        })]
                    }), r.jsx("div", {
                        className: "credits-bar",
                        children: r.jsx("div", {
                            className: "credits-fill",
                            style: {
                                width: `${Math.min(t.credits/t.creditsTotal*100,100)}%`
                            }
                        })
                    }), r.jsx("div", {
                        className: "subscription-actions",
                        children: b ? r.jsx("button", {
                            className: "btn-primary",
                            onClick: () => I(!0),
                            disabled: A,
                            children: e(A ? "subscription.resuming" : "subscription.resumeSubscription")
                        }) : r.jsx("button", {
                            className: "btn-danger",
                            onClick: () => u(!0),
                            disabled: A,
                            children: e(A ? "subscription.canceling" : "subscription.cancelSubscription")
                        })
                    })]
                }) : r.jsxs("div", {
                    className: "no-subscription",
                    children: [r.jsx("p", {
                        children: e("subscription.noSubscription")
                    }), r.jsx("button", {
                        className: "btn-primary",
                        onClick: () => i("/upgrade"),
                        children: e("subscription.upgradeNow")
                    })]
                })]
            }), d && r.jsx("div", {
                className: "modal-overlay",
                onClick: () => u(!1),
                children: r.jsxs("div", {
                    className: "modal-content",
                    onClick: k => k.stopPropagation(),
                    children: [r.jsx("h3", {
                        children: e("subscription.cancelConfirmTitle")
                    }), r.jsx("p", {
                        children: e("subscription.cancelConfirmMessage", {
                            date: B(t?.periodEnd)
                        })
                    }), r.jsxs("div", {
                        className: "modal-actions",
                        children: [r.jsx("button", {
                            className: "btn-secondary",
                            onClick: () => u(!1),
                            disabled: A,
                            children: e("common.cancel")
                        }), r.jsx("button", {
                            className: "btn-danger",
                            onClick: m,
                            disabled: A,
                            children: e(A ? "subscription.canceling" : "subscription.cancelConfirmButton")
                        })]
                    })]
                })
            }), h && r.jsx("div", {
                className: "modal-overlay",
                onClick: () => I(!1),
                children: r.jsxs("div", {
                    className: "modal-content",
                    onClick: k => k.stopPropagation(),
                    children: [r.jsx("h3", {
                        children: e("subscription.resumeConfirmTitle")
                    }), r.jsx("p", {
                        children: e("subscription.resumeConfirmMessage", {
                            date: B(t?.periodEnd)
                        })
                    }), r.jsxs("div", {
                        className: "modal-actions",
                        children: [r.jsx("button", {
                            className: "btn-secondary",
                            onClick: () => I(!1),
                            disabled: A,
                            children: e("common.cancel")
                        }), r.jsx("button", {
                            className: "btn-primary",
                            onClick: E,
                            disabled: A,
                            children: e(A ? "subscription.resuming" : "subscription.resumeConfirmButton")
                        })]
                    })]
                })
            })]
        })
    })
}

function Dc() {
    const {
        t: i,
        i18n: e
    } = X(), s = e.language, t = () => s === "pt" || s === "pt-BR" ? r.jsx(bc, {}) : s === "es" ? r.jsx(Sc, {}) : r.jsx(jc, {});
    return r.jsx("div", {
        className: "legal-container",
        children: r.jsx("div", {
            className: "legal-content",
            children: t()
        })
    })
}

function bc() {
    return r.jsxs(r.Fragment, {
        children: [r.jsx("h1", {
            children: "Termos de Uso - Mafagrafos"
        }), r.jsx("p", {
            className: "last-updated",
            children: r.jsx("em", {
                children: "Última atualização: 12 de fevereiro de 2026"
            })
        }), r.jsx("h2", {
            children: "1. Identificação"
        }), r.jsx("p", {
            children: "Este serviço é oferecido por:"
        }), r.jsxs("p", {
            children: [r.jsx("strong", {
                children: "MAFAGRAFOS CONSULTORIA E DESENVOLVIMENTO LTDA"
            }), r.jsx("br", {}), "CNPJ: 45.598.456/0001-33", r.jsx("br", {}), "Email: contato@mafagrafos.com"]
        }), r.jsx("h2", {
            children: "2. Definições"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Plataforma"
                }), ": O site e software Mafagrafos, acessível via web."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Usuário"
                }), ": Pessoa física ou jurídica que se cadastra e utiliza a Plataforma."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Créditos"
                }), ": Unidade utilizada para gerar e baixar arquivos 3D na Plataforma."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Arquivos 3D"
                }), ": Arquivos em formato STL ou 3MF gerados pela Plataforma."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Modelos Paramétricos"
                }), ": Modelos 3D que podem ser personalizados pelo Usuário antes do download."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Modelos Fixos"
                }), ": Arquivos STL ou 3MF prontos, disponibilizados sem opção de personalização."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Licença Comercial"
                }), ": Autorização para vender peças físicas impressas a partir dos Arquivos 3D."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Rollover"
                }), ": Créditos não utilizados que podem ser transferidos para o mês seguinte, dentro do limite estabelecido pelo plano."]
            })]
        }), r.jsx("h2", {
            children: "3. Aceitação dos Termos"
        }), r.jsx("p", {
            children: "Ao criar uma conta ou utilizar a Plataforma, você concorda integralmente com estes Termos de Uso. Se você não concorda com algum termo, não utilize o serviço."
        }), r.jsx("h2", {
            children: "4. Descrição do Serviço"
        }), r.jsx("p", {
            children: "O Mafagrafos é um software que permite a geração de modelos 3D personalizados para impressão 3D. O Usuário pode ajustar parâmetros dos modelos e baixar os arquivos resultantes em formato STL ou 3MF."
        }), r.jsxs("p", {
            children: ["A Plataforma também disponibiliza ", r.jsx("strong", {
                children: "Modelos Fixos"
            }), ": arquivos STL ou 3MF prontos, gerados previamente pelo software, que podem ser baixados sem personalização de parâmetros."]
        }), r.jsx("p", {
            children: "O serviço opera por meio de um sistema de créditos. Cada download de arquivo (seja de modelo paramétrico ou modelo fixo) consome créditos conforme definido na Plataforma. As mesmas regras de licenciamento se aplicam a ambos os tipos de modelo."
        }), r.jsx("h2", {
            children: "5. Cadastro e Conta"
        }), r.jsx("h3", {
            children: "5.1 Requisitos"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "O Usuário deve ter no mínimo 18 anos ou possuir autorização legal."
            }), r.jsx("li", {
                children: "As informações de cadastro devem ser verdadeiras e atualizadas."
            }), r.jsx("li", {
                children: "Cada pessoa pode manter apenas uma conta."
            })]
        }), r.jsx("h3", {
            children: "5.2 Créditos de Boas-Vindas"
        }), r.jsxs("p", {
            children: ["Ao criar uma conta, o Usuário recebe ", r.jsx("strong", {
                children: "5 créditos gratuitos"
            }), " para testar a Plataforma. Estes créditos não incluem licença comercial."]
        }), r.jsx("h3", {
            children: "5.3 Segurança"
        }), r.jsx("p", {
            children: "O Usuário é responsável por manter a confidencialidade de suas credenciais de acesso. Qualquer atividade realizada em sua conta é de sua responsabilidade."
        }), r.jsx("h2", {
            children: "6. Planos e Créditos"
        }), r.jsx("h3", {
            children: "6.1 Credit Packs (Pacotes Avulsos)"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Compra única de créditos para uso esporádico."
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Não inclui licença comercial"
                }), " — uso pessoal apenas."]
            }), r.jsxs("li", {
                children: ["Créditos ", r.jsx("strong", {
                    children: "expiram em 1 ano"
                }), " a partir da data da compra."]
            })]
        }), r.jsx("h3", {
            children: "6.2 Plano Basic (Assinatura Mensal)"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "35 créditos"
                }), " por mês."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Rollover"
                }), ": até 20 créditos podem ser acumulados para o mês seguinte."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Inclui licença comercial"
                }), " para venda de peças físicas impressas."]
            })]
        }), r.jsx("h3", {
            children: "6.3 Plano Pro (Assinatura Mensal)"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "65 créditos"
                }), " por mês."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Rollover"
                }), ": até 40 créditos podem ser acumulados para o mês seguinte."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Inclui licença comercial"
                }), " para venda de peças físicas impressas."]
            })]
        }), r.jsx("h3", {
            children: "6.4 Regras de Rollover"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Créditos não utilizados no mês podem ser transferidos para o mês seguinte, respeitando o limite de rollover do plano."
            }), r.jsxs("li", {
                children: ["Em caso de cancelamento da assinatura, ", r.jsx("strong", {
                    children: "não há rollover"
                }), ". Os créditos restantes são válidos apenas até o final do período já pago."]
            }), r.jsx("li", {
                children: "Créditos acumulados além do limite de rollover são perdidos ao final do ciclo."
            })]
        }), r.jsx("h2", {
            children: "7. Pagamentos"
        }), r.jsx("h3", {
            children: "7.1 Cobrança"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Assinaturas são cobradas mensalmente de forma recorrente."
            }), r.jsx("li", {
                children: "O pagamento é processado no início de cada ciclo de cobrança."
            })]
        }), r.jsx("h3", {
            children: "7.2 Cancelamento"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "O Usuário pode cancelar sua assinatura a qualquer momento."
            }), r.jsx("li", {
                children: "O acesso aos benefícios do plano permanece até o final do período já pago."
            })]
        }), r.jsx("h3", {
            children: "7.3 Política de Reembolso"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Não há reembolso"
                }), " para downloads realizados, créditos adquiridos ou assinaturas."]
            }), r.jsx("li", {
                children: "Arquivos 3D são produtos digitais entregues instantaneamente."
            }), r.jsx("li", {
                children: "Recomendamos utilizar os 5 créditos gratuitos para testar a Plataforma antes de efetuar qualquer compra."
            })]
        }), r.jsx("h3", {
            children: "7.4 Falha de Pagamento"
        }), r.jsx("p", {
            children: "Em caso de falha no pagamento, o acesso aos recursos do plano pode ser suspenso até a regularização."
        }), r.jsx("h2", {
            children: "8. Licença de Uso dos Arquivos 3D"
        }), r.jsx("h3", {
            children: "8.1 O que você PODE fazer"
        }), r.jsx("p", {
            children: r.jsx("strong", {
                children: "Com Credit Packs (uso pessoal):"
            })
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Baixar e imprimir os Arquivos 3D para uso próprio."
            }), r.jsx("li", {
                children: "Modificar os arquivos (escalar, cortar, combinar) para uso pessoal."
            }), r.jsx("li", {
                children: "Presentear peças impressas."
            })]
        }), r.jsx("p", {
            children: r.jsx("strong", {
                children: "Com Planos Basic e Pro (licença comercial):"
            })
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Tudo acima, mais:"
            }), r.jsx("li", {
                children: "Vender peças físicas impressas a partir dos Arquivos 3D."
            }), r.jsx("li", {
                children: "Modificar os arquivos antes de imprimir para venda."
            }), r.jsx("li", {
                children: "Utilizar em produtos e projetos comerciais (peças físicas)."
            })]
        }), r.jsxs("p", {
            children: [r.jsx("strong", {
                children: "Importante:"
            }), " A licença comercial é válida ", r.jsx("strong", {
                children: "apenas enquanto a assinatura estiver ativa"
            }), ". Ao cancelar a assinatura, o direito de venda comercial permanece até o final do período já pago. Após esse período, a licença comercial é encerrada."]
        }), r.jsx("h3", {
            children: "8.2 O que você NÃO PODE fazer (todos os planos)"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Redistribuir, revender, compartilhar ou sublicenciar os Arquivos 3D digitais."
            }), r.jsx("li", {
                children: "Disponibilizar os arquivos em sites de compartilhamento, marketplaces ou qualquer plataforma."
            }), r.jsx("li", {
                children: "Utilizar os arquivos para treinar inteligência artificial ou modelos generativos."
            }), r.jsx("li", {
                children: "Reivindicar autoria ou propriedade sobre os designs originais."
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Utilizar as fotos e imagens da Plataforma para fins comerciais."
                }), " As fotografias dos modelos disponíveis no site são de uso exclusivo do Mafagrafos e não podem ser utilizadas para divulgação ou venda de produtos."]
            })]
        }), r.jsx("h2", {
            children: "9. Propriedade Intelectual"
        }), r.jsx("h3", {
            children: "9.1 Titularidade"
        }), r.jsx("p", {
            children: "Todos os designs, modelos paramétricos, código-fonte e elementos visuais da Plataforma são de propriedade exclusiva da MAFAGRAFOS CONSULTORIA E DESENVOLVIMENTO LTDA ou de seus licenciadores."
        }), r.jsx("h3", {
            children: "9.2 Licença Limitada"
        }), r.jsx("p", {
            children: "O download de Arquivos 3D concede ao Usuário uma licença limitada, não exclusiva e intransferível para uso conforme descrito na Seção 8, de acordo com o plano contratado."
        }), r.jsx("h3", {
            children: "9.3 Marcas"
        }), r.jsx("p", {
            children: '"Mafagrafos" e logos associados são marcas registradas. O uso não autorizado é proibido.'
        }), r.jsx("h2", {
            children: "10. Limitação de Responsabilidade"
        }), r.jsx("h3", {
            children: "10.1 Uso por Conta e Risco"
        }), r.jsx("p", {
            children: "O uso da Plataforma e dos Arquivos 3D é por conta e risco do Usuário. O Mafagrafos não se responsabiliza por:"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Resultados de impressão 3D (qualidade, resistência, adequação)."
            }), r.jsx("li", {
                children: "Uso inadequado dos arquivos ou peças impressas."
            }), r.jsx("li", {
                children: "Danos diretos, indiretos ou consequenciais decorrentes do uso."
            })]
        }), r.jsx("h3", {
            children: "10.2 Disponibilidade"
        }), r.jsx("p", {
            children: "O Mafagrafos se esforça para manter a Plataforma disponível, mas não garante acesso ininterrupto. Manutenções e atualizações podem ocorrer."
        }), r.jsx("h3", {
            children: "10.3 Arquivos"
        }), r.jsx("p", {
            children: 'Os Arquivos 3D são fornecidos "como estão". O Mafagrafos não garante que os arquivos sejam adequados para qualquer finalidade específica.'
        }), r.jsx("h2", {
            children: "11. Conduta do Usuário"
        }), r.jsx("p", {
            children: "O Usuário concorda em:"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Não utilizar a Plataforma para fins ilegais."
            }), r.jsx("li", {
                children: "Não tentar acessar áreas restritas ou burlar sistemas de segurança."
            }), r.jsx("li", {
                children: "Não compartilhar credenciais de acesso."
            }), r.jsx("li", {
                children: "Não utilizar automação (bots, scripts) sem autorização."
            })]
        }), r.jsx("p", {
            children: "O descumprimento pode resultar em suspensão ou encerramento da conta, sem direito a reembolso."
        }), r.jsx("h2", {
            children: "12. Modificações dos Termos"
        }), r.jsx("p", {
            children: "O Mafagrafos pode atualizar estes Termos a qualquer momento. Alterações significativas serão comunicadas por email ou aviso na Plataforma. O uso continuado após as alterações implica aceitação dos novos termos."
        }), r.jsx("h2", {
            children: "13. Rescisão"
        }), r.jsx("h3", {
            children: "13.1 Pelo Usuário"
        }), r.jsx("p", {
            children: "O Usuário pode encerrar sua conta a qualquer momento através das configurações da conta ou entrando em contato pelo email contato@mafagrafos.com."
        }), r.jsx("h3", {
            children: "13.2 Pelo Mafagrafos"
        }), r.jsx("p", {
            children: "O Mafagrafos pode suspender ou encerrar contas que violem estes Termos, sem aviso prévio e sem direito a reembolso."
        }), r.jsx("h3", {
            children: "13.3 Efeitos da Rescisão"
        }), r.jsx("p", {
            children: r.jsx("strong", {
                children: "Cancelamento ou encerramento de conta com assinatura ativa:"
            })
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "A licença comercial permanece válida até o final do período já pago."
            }), r.jsx("li", {
                children: "Exemplo: se a assinatura foi feita no dia 10, a licença comercial é válida até o dia 10 do mês seguinte, independente de quando o cancelamento foi solicitado."
            }), r.jsx("li", {
                children: "Após o término do período, créditos não utilizados serão perdidos (sem rollover)."
            }), r.jsx("li", {
                children: "Após o término do período, a licença comercial é encerrada."
            })]
        }), r.jsx("p", {
            children: r.jsx("strong", {
                children: "Após o encerramento da licença comercial:"
            })
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "O uso pessoal dos Arquivos 3D já baixados permanece permitido."
            }), r.jsx("li", {
                children: "O Usuário não poderá mais vender peças físicas impressas a partir dos Arquivos 3D."
            })]
        }), r.jsx("h2", {
            children: "14. Lei Aplicável e Foro"
        }), r.jsx("p", {
            children: "Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca da sede da empresa para dirimir quaisquer controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja."
        }), r.jsx("h2", {
            children: "15. Disposições Gerais"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Se qualquer disposição destes Termos for considerada inválida, as demais permanecem em vigor."
            }), r.jsx("li", {
                children: "A tolerância quanto ao descumprimento de qualquer condição não implica renúncia."
            }), r.jsx("li", {
                children: "Estes Termos constituem o acordo integral entre o Usuário e o Mafagrafos."
            })]
        }), r.jsx("h2", {
            children: "16. Contato"
        }), r.jsx("p", {
            children: "Para dúvidas sobre estes Termos de Uso:"
        }), r.jsxs("p", {
            children: [r.jsx("strong", {
                children: "Email"
            }), ": contato@mafagrafos.com"]
        }), r.jsx("p", {
            className: "agreement-notice",
            children: r.jsx("em", {
                children: "Ao utilizar o Mafagrafos, você confirma que leu, entendeu e concorda com estes Termos de Uso."
            })
        })]
    })
}

function jc() {
    return r.jsxs(r.Fragment, {
        children: [r.jsx("h1", {
            children: "Terms of Use - Mafagrafos"
        }), r.jsx("p", {
            className: "last-updated",
            children: r.jsx("em", {
                children: "Last updated: February 12, 2026"
            })
        }), r.jsx("h2", {
            children: "1. Identification"
        }), r.jsx("p", {
            children: "This service is provided by:"
        }), r.jsxs("p", {
            children: [r.jsx("strong", {
                children: "MAFAGRAFOS CONSULTORIA E DESENVOLVIMENTO LTDA"
            }), r.jsx("br", {}), "CNPJ: 45.598.456/0001-33", r.jsx("br", {}), "Email: contato@mafagrafos.com"]
        }), r.jsx("h2", {
            children: "2. Definitions"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Platform"
                }), ": The Mafagrafos website and software, accessible via web."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "User"
                }), ": Individual or legal entity that registers and uses the Platform."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Credits"
                }), ": Unit used to generate and download 3D files on the Platform."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "3D Files"
                }), ": Files in STL or 3MF format generated by the Platform."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Parametric Models"
                }), ": 3D models that can be customized by the User before download."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Fixed Models"
                }), ": Ready-to-use STL or 3MF files, available without customization options."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Commercial License"
                }), ": Authorization to sell physical printed parts from the 3D Files."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Rollover"
                }), ": Unused credits that can be transferred to the following month, within the plan's established limit."]
            })]
        }), r.jsx("h2", {
            children: "3. Acceptance of Terms"
        }), r.jsx("p", {
            children: "By creating an account or using the Platform, you fully agree to these Terms of Use. If you do not agree with any term, do not use the service."
        }), r.jsx("h2", {
            children: "4. Service Description"
        }), r.jsx("p", {
            children: "Mafagrafos is software that enables the generation of customized 3D models for 3D printing. Users can adjust model parameters and download the resulting files in STL or 3MF format."
        }), r.jsxs("p", {
            children: ["The Platform also provides ", r.jsx("strong", {
                children: "Fixed Models"
            }), ": ready-to-use STL or 3MF files, previously generated by the software, that can be downloaded without parameter customization."]
        }), r.jsx("p", {
            children: "The service operates through a credit system. Each file download (whether parametric or fixed model) consumes credits as defined on the Platform. The same licensing rules apply to both types of models."
        }), r.jsx("h2", {
            children: "5. Registration and Account"
        }), r.jsx("h3", {
            children: "5.1 Requirements"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Users must be at least 18 years old or have legal authorization."
            }), r.jsx("li", {
                children: "Registration information must be true and up-to-date."
            }), r.jsx("li", {
                children: "Each person may maintain only one account."
            })]
        }), r.jsx("h3", {
            children: "5.2 Welcome Credits"
        }), r.jsxs("p", {
            children: ["Upon creating an account, Users receive ", r.jsx("strong", {
                children: "5 free credits"
            }), " to test the Platform. These credits do not include commercial license."]
        }), r.jsx("h3", {
            children: "5.3 Security"
        }), r.jsx("p", {
            children: "Users are responsible for maintaining the confidentiality of their access credentials. Any activity performed on their account is their responsibility."
        }), r.jsx("h2", {
            children: "6. Plans and Credits"
        }), r.jsx("h3", {
            children: "6.1 Credit Packs (One-time Purchase)"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "One-time purchase of credits for occasional use."
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Does not include commercial license"
                }), " — personal use only."]
            }), r.jsxs("li", {
                children: ["Credits ", r.jsx("strong", {
                    children: "expire in 1 year"
                }), " from the purchase date."]
            })]
        }), r.jsx("h3", {
            children: "6.2 Basic Plan (Monthly Subscription)"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "35 credits"
                }), " per month."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Rollover"
                }), ": up to 20 credits can be accumulated for the following month."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Includes commercial license"
                }), " for selling printed physical parts."]
            })]
        }), r.jsx("h3", {
            children: "6.3 Pro Plan (Monthly Subscription)"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "65 credits"
                }), " per month."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Rollover"
                }), ": up to 40 credits can be accumulated for the following month."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Includes commercial license"
                }), " for selling printed physical parts."]
            })]
        }), r.jsx("h3", {
            children: "6.4 Rollover Rules"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Unused credits in a month can be transferred to the following month, respecting the plan's rollover limit."
            }), r.jsxs("li", {
                children: ["In case of subscription cancellation, ", r.jsx("strong", {
                    children: "there is no rollover"
                }), ". Remaining credits are valid only until the end of the already paid period."]
            }), r.jsx("li", {
                children: "Credits accumulated beyond the rollover limit are lost at the end of the cycle."
            })]
        }), r.jsx("h2", {
            children: "7. Payments"
        }), r.jsx("h3", {
            children: "7.1 Billing"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Subscriptions are billed monthly on a recurring basis."
            }), r.jsx("li", {
                children: "Payment is processed at the beginning of each billing cycle."
            })]
        }), r.jsx("h3", {
            children: "7.2 Cancellation"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Users can cancel their subscription at any time."
            }), r.jsx("li", {
                children: "Access to plan benefits remains until the end of the already paid period."
            })]
        }), r.jsx("h3", {
            children: "7.3 Refund Policy"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "No refunds"
                }), " for downloads made, credits purchased, or subscriptions."]
            }), r.jsx("li", {
                children: "3D files are digital products delivered instantly."
            }), r.jsx("li", {
                children: "We recommend using the 5 free credits to test the Platform before making any purchase."
            })]
        }), r.jsx("h3", {
            children: "7.4 Payment Failure"
        }), r.jsx("p", {
            children: "In case of payment failure, access to plan resources may be suspended until regularization."
        }), r.jsx("h2", {
            children: "8. License for Use of 3D Files"
        }), r.jsx("h3", {
            children: "8.1 What you CAN do"
        }), r.jsx("p", {
            children: r.jsx("strong", {
                children: "With Credit Packs (personal use):"
            })
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Download and print 3D Files for personal use."
            }), r.jsx("li", {
                children: "Modify files (scale, cut, combine) for personal use."
            }), r.jsx("li", {
                children: "Gift printed pieces."
            })]
        }), r.jsx("p", {
            children: r.jsx("strong", {
                children: "With Basic and Pro Plans (commercial license):"
            })
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Everything above, plus:"
            }), r.jsx("li", {
                children: "Sell physical printed parts from the 3D Files."
            }), r.jsx("li", {
                children: "Modify files before printing for sale."
            }), r.jsx("li", {
                children: "Use in commercial products and projects (physical parts)."
            })]
        }), r.jsxs("p", {
            children: [r.jsx("strong", {
                children: "Important:"
            }), " The commercial license is valid ", r.jsx("strong", {
                children: "only while the subscription is active"
            }), ". Upon canceling the subscription, commercial selling rights remain until the end of the already paid period. After this period, the commercial license ends."]
        }), r.jsx("h3", {
            children: "8.2 What you CANNOT do (all plans)"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Redistribute, resell, share, or sublicense the digital 3D Files."
            }), r.jsx("li", {
                children: "Make files available on sharing sites, marketplaces, or any platform."
            }), r.jsx("li", {
                children: "Use files to train artificial intelligence or generative models."
            }), r.jsx("li", {
                children: "Claim authorship or ownership of the original designs."
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Use the Platform's photos and images for commercial purposes."
                }), " The photographs of models available on the site are for exclusive use by Mafagrafos and may not be used for product promotion or sales."]
            })]
        }), r.jsx("h2", {
            children: "9. Intellectual Property"
        }), r.jsx("h3", {
            children: "9.1 Ownership"
        }), r.jsx("p", {
            children: "All designs, parametric models, source code, and visual elements of the Platform are the exclusive property of MAFAGRAFOS CONSULTORIA E DESENVOLVIMENTO LTDA or its licensors."
        }), r.jsx("h3", {
            children: "9.2 Limited License"
        }), r.jsx("p", {
            children: "Downloading 3D Files grants the User a limited, non-exclusive, and non-transferable license for use as described in Section 8, according to the contracted plan."
        }), r.jsx("h3", {
            children: "9.3 Trademarks"
        }), r.jsx("p", {
            children: '"Mafagrafos" and associated logos are registered trademarks. Unauthorized use is prohibited.'
        }), r.jsx("h2", {
            children: "10. Limitation of Liability"
        }), r.jsx("h3", {
            children: "10.1 Use at Your Own Risk"
        }), r.jsx("p", {
            children: "Use of the Platform and 3D Files is at the User's own risk. Mafagrafos is not responsible for:"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "3D printing results (quality, strength, suitability)."
            }), r.jsx("li", {
                children: "Improper use of files or printed parts."
            }), r.jsx("li", {
                children: "Direct, indirect, or consequential damages arising from use."
            })]
        }), r.jsx("h3", {
            children: "10.2 Availability"
        }), r.jsx("p", {
            children: "Mafagrafos strives to keep the Platform available but does not guarantee uninterrupted access. Maintenance and updates may occur."
        }), r.jsx("h3", {
            children: "10.3 Files"
        }), r.jsx("p", {
            children: '3D Files are provided "as is". Mafagrafos does not guarantee that files are suitable for any specific purpose.'
        }), r.jsx("h2", {
            children: "11. User Conduct"
        }), r.jsx("p", {
            children: "Users agree to:"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Not use the Platform for illegal purposes."
            }), r.jsx("li", {
                children: "Not attempt to access restricted areas or bypass security systems."
            }), r.jsx("li", {
                children: "Not share access credentials."
            }), r.jsx("li", {
                children: "Not use automation (bots, scripts) without authorization."
            })]
        }), r.jsx("p", {
            children: "Non-compliance may result in suspension or termination of the account, without right to refund."
        }), r.jsx("h2", {
            children: "12. Modifications to Terms"
        }), r.jsx("p", {
            children: "Mafagrafos may update these Terms at any time. Significant changes will be communicated by email or notice on the Platform. Continued use after changes implies acceptance of the new terms."
        }), r.jsx("h2", {
            children: "13. Termination"
        }), r.jsx("h3", {
            children: "13.1 By the User"
        }), r.jsx("p", {
            children: "Users can close their account at any time through account settings or by contacting contato@mafagrafos.com."
        }), r.jsx("h3", {
            children: "13.2 By Mafagrafos"
        }), r.jsx("p", {
            children: "Mafagrafos may suspend or terminate accounts that violate these Terms, without prior notice and without right to refund."
        }), r.jsx("h3", {
            children: "13.3 Effects of Termination"
        }), r.jsx("p", {
            children: r.jsx("strong", {
                children: "Cancellation or account closure with active subscription:"
            })
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "The commercial license remains valid until the end of the already paid period."
            }), r.jsx("li", {
                children: "Example: if the subscription was made on the 10th, the commercial license is valid until the 10th of the following month, regardless of when the cancellation was requested."
            }), r.jsx("li", {
                children: "After the period ends, unused credits will be lost (no rollover)."
            }), r.jsx("li", {
                children: "After the period ends, the commercial license is terminated."
            })]
        }), r.jsx("p", {
            children: r.jsx("strong", {
                children: "After termination of the commercial license:"
            })
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Personal use of already downloaded 3D Files remains permitted."
            }), r.jsx("li", {
                children: "The User may no longer sell physical printed parts from the 3D Files."
            })]
        }), r.jsx("h2", {
            children: "14. Applicable Law and Jurisdiction"
        }), r.jsx("p", {
            children: "These Terms are governed by the laws of the Federative Republic of Brazil. The court of the company's headquarters is elected to resolve any disputes, with waiver of any other, however privileged."
        }), r.jsx("h2", {
            children: "15. General Provisions"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "If any provision of these Terms is found invalid, the others remain in effect."
            }), r.jsx("li", {
                children: "Tolerance of non-compliance with any condition does not imply waiver."
            }), r.jsx("li", {
                children: "These Terms constitute the entire agreement between the User and Mafagrafos."
            })]
        }), r.jsx("h2", {
            children: "16. Contact"
        }), r.jsx("p", {
            children: "For questions about these Terms of Use:"
        }), r.jsxs("p", {
            children: [r.jsx("strong", {
                children: "Email"
            }), ": contato@mafagrafos.com"]
        }), r.jsx("p", {
            className: "agreement-notice",
            children: r.jsx("em", {
                children: "By using Mafagrafos, you confirm that you have read, understood, and agree to these Terms of Use."
            })
        })]
    })
}

function Sc() {
    return r.jsxs(r.Fragment, {
        children: [r.jsx("h1", {
            children: "Términos de Uso - Mafagrafos"
        }), r.jsx("p", {
            className: "last-updated",
            children: r.jsx("em", {
                children: "Última actualización: 12 de febrero de 2026"
            })
        }), r.jsx("h2", {
            children: "1. Identificación"
        }), r.jsx("p", {
            children: "Este servicio es ofrecido por:"
        }), r.jsxs("p", {
            children: [r.jsx("strong", {
                children: "MAFAGRAFOS CONSULTORIA E DESENVOLVIMENTO LTDA"
            }), r.jsx("br", {}), "CNPJ: 45.598.456/0001-33", r.jsx("br", {}), "Email: contato@mafagrafos.com"]
        }), r.jsx("h2", {
            children: "2. Definiciones"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Plataforma"
                }), ": El sitio web y software Mafagrafos, accesible vía web."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Usuario"
                }), ": Persona física o jurídica que se registra y utiliza la Plataforma."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Créditos"
                }), ": Unidad utilizada para generar y descargar archivos 3D en la Plataforma."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Archivos 3D"
                }), ": Archivos en formato STL o 3MF generados por la Plataforma."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Modelos Paramétricos"
                }), ": Modelos 3D que pueden ser personalizados por el Usuario antes de la descarga."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Modelos Fijos"
                }), ": Archivos STL o 3MF listos, disponibles sin opción de personalización."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Licencia Comercial"
                }), ": Autorización para vender piezas físicas impresas a partir de los Archivos 3D."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Rollover"
                }), ": Créditos no utilizados que pueden ser transferidos al mes siguiente, dentro del límite establecido por el plan."]
            })]
        }), r.jsx("h2", {
            children: "3. Aceptación de los Términos"
        }), r.jsx("p", {
            children: "Al crear una cuenta o utilizar la Plataforma, usted acepta íntegramente estos Términos de Uso. Si no está de acuerdo con algún término, no utilice el servicio."
        }), r.jsx("h2", {
            children: "4. Descripción del Servicio"
        }), r.jsx("p", {
            children: "Mafagrafos es un software que permite la generación de modelos 3D personalizados para impresión 3D. El Usuario puede ajustar los parámetros de los modelos y descargar los archivos resultantes en formato STL o 3MF."
        }), r.jsxs("p", {
            children: ["La Plataforma también ofrece ", r.jsx("strong", {
                children: "Modelos Fijos"
            }), ": archivos STL o 3MF listos, generados previamente por el software, que pueden descargarse sin personalización de parámetros."]
        }), r.jsx("p", {
            children: "El servicio opera mediante un sistema de créditos. Cada descarga de archivo (ya sea modelo paramétrico o fijo) consume créditos según lo definido en la Plataforma. Las mismas reglas de licenciamiento se aplican a ambos tipos de modelos."
        }), r.jsx("h2", {
            children: "5. Registro y Cuenta"
        }), r.jsx("h3", {
            children: "5.1 Requisitos"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "El Usuario debe tener al menos 18 años o poseer autorización legal."
            }), r.jsx("li", {
                children: "La información de registro debe ser verdadera y actualizada."
            }), r.jsx("li", {
                children: "Cada persona puede mantener solo una cuenta."
            })]
        }), r.jsx("h3", {
            children: "5.2 Créditos de Bienvenida"
        }), r.jsxs("p", {
            children: ["Al crear una cuenta, el Usuario recibe ", r.jsx("strong", {
                children: "5 créditos gratuitos"
            }), " para probar la Plataforma. Estos créditos no incluyen licencia comercial."]
        }), r.jsx("h3", {
            children: "5.3 Seguridad"
        }), r.jsx("p", {
            children: "El Usuario es responsable de mantener la confidencialidad de sus credenciales de acceso. Cualquier actividad realizada en su cuenta es su responsabilidad."
        }), r.jsx("h2", {
            children: "6. Planes y Créditos"
        }), r.jsx("h3", {
            children: "6.1 Paquetes de Créditos (Compra Única)"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Compra única de créditos para uso esporádico."
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "No incluye licencia comercial"
                }), " — solo uso personal."]
            }), r.jsxs("li", {
                children: ["Los créditos ", r.jsx("strong", {
                    children: "expiran en 1 año"
                }), " desde la fecha de compra."]
            })]
        }), r.jsx("h3", {
            children: "6.2 Plan Basic (Suscripción Mensual)"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "35 créditos"
                }), " por mes."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Rollover"
                }), ": hasta 20 créditos pueden acumularse para el mes siguiente."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Incluye licencia comercial"
                }), " para venta de piezas físicas impresas."]
            })]
        }), r.jsx("h3", {
            children: "6.3 Plan Pro (Suscripción Mensual)"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "65 créditos"
                }), " por mes."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Rollover"
                }), ": hasta 40 créditos pueden acumularse para el mes siguiente."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Incluye licencia comercial"
                }), " para venta de piezas físicas impresas."]
            })]
        }), r.jsx("h2", {
            children: "7. Pagos"
        }), r.jsx("h3", {
            children: "7.1 Cobro"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Las suscripciones se cobran mensualmente de forma recurrente."
            }), r.jsx("li", {
                children: "El pago se procesa al inicio de cada ciclo de facturación."
            })]
        }), r.jsx("h3", {
            children: "7.2 Cancelación"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "El Usuario puede cancelar su suscripción en cualquier momento."
            }), r.jsx("li", {
                children: "El acceso a los beneficios del plan permanece hasta el final del período ya pagado."
            })]
        }), r.jsx("h3", {
            children: "7.3 Política de Reembolso"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "No hay reembolsos"
                }), " para descargas realizadas, créditos adquiridos o suscripciones."]
            }), r.jsx("li", {
                children: "Los archivos 3D son productos digitales entregados instantáneamente."
            }), r.jsx("li", {
                children: "Recomendamos usar los 5 créditos gratuitos para probar la Plataforma antes de realizar cualquier compra."
            })]
        }), r.jsx("h2", {
            children: "8. Licencia de Uso de Archivos 3D"
        }), r.jsx("h3", {
            children: "8.1 Lo que PUEDE hacer"
        }), r.jsx("p", {
            children: r.jsx("strong", {
                children: "Con Paquetes de Créditos (uso personal):"
            })
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Descargar e imprimir los Archivos 3D para uso propio."
            }), r.jsx("li", {
                children: "Modificar los archivos (escalar, cortar, combinar) para uso personal."
            }), r.jsx("li", {
                children: "Regalar piezas impresas."
            })]
        }), r.jsx("p", {
            children: r.jsx("strong", {
                children: "Con Planes Basic y Pro (licencia comercial):"
            })
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Todo lo anterior, más:"
            }), r.jsx("li", {
                children: "Vender piezas físicas impresas a partir de los Archivos 3D."
            }), r.jsx("li", {
                children: "Modificar los archivos antes de imprimir para venta."
            }), r.jsx("li", {
                children: "Usar en productos y proyectos comerciales (piezas físicas)."
            })]
        }), r.jsxs("p", {
            children: [r.jsx("strong", {
                children: "Importante:"
            }), " La licencia comercial es válida ", r.jsx("strong", {
                children: "solo mientras la suscripción esté activa"
            }), ". Al cancelar la suscripción, el derecho de venta comercial permanece hasta el final del período ya pagado. Después de este período, la licencia comercial termina."]
        }), r.jsx("h3", {
            children: "8.2 Lo que NO PUEDE hacer (todos los planes)"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Redistribuir, revender, compartir o sublicenciar los Archivos 3D digitales."
            }), r.jsx("li", {
                children: "Publicar los archivos en sitios de compartición, marketplaces o cualquier plataforma."
            }), r.jsx("li", {
                children: "Usar los archivos para entrenar inteligencia artificial o modelos generativos."
            }), r.jsx("li", {
                children: "Reclamar autoría o propiedad sobre los diseños originales."
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Utilizar las fotos e imágenes de la Plataforma con fines comerciales."
                }), " Las fotografías de los modelos disponibles en el sitio son de uso exclusivo de Mafagrafos y no pueden utilizarse para promoción o venta de productos."]
            })]
        }), r.jsx("h2", {
            children: "9. Propiedad Intelectual"
        }), r.jsx("p", {
            children: "Todos los diseños, modelos paramétricos, código fuente y elementos visuales de la Plataforma son propiedad exclusiva de MAFAGRAFOS CONSULTORIA E DESENVOLVIMENTO LTDA o sus licenciantes."
        }), r.jsx("h2", {
            children: "10. Limitación de Responsabilidad"
        }), r.jsx("p", {
            children: "El uso de la Plataforma y los Archivos 3D es bajo responsabilidad del Usuario. Mafagrafos no se responsabiliza por resultados de impresión, uso inadecuado o daños derivados del uso."
        }), r.jsx("h2", {
            children: "11. Ley Aplicable"
        }), r.jsx("p", {
            children: "Estos Términos se rigen por las leyes de la República Federativa de Brasil."
        }), r.jsx("h2", {
            children: "12. Contacto"
        }), r.jsx("p", {
            children: "Para preguntas sobre estos Términos de Uso:"
        }), r.jsxs("p", {
            children: [r.jsx("strong", {
                children: "Email"
            }), ": contato@mafagrafos.com"]
        }), r.jsx("p", {
            className: "agreement-notice",
            children: r.jsx("em", {
                children: "Al usar Mafagrafos, confirma que ha leído, entendido y acepta estos Términos de Uso."
            })
        })]
    })
}

function Nc() {
    const {
        i18n: i
    } = X(), e = i.language, s = () => e === "pt" || e === "pt-BR" ? r.jsx(Rc, {}) : e === "es" ? r.jsx(Mc, {}) : r.jsx(kc, {});
    return r.jsx("div", {
        className: "legal-container",
        children: r.jsx("div", {
            className: "legal-content",
            children: s()
        })
    })
}

function Rc() {
    return r.jsxs(r.Fragment, {
        children: [r.jsx("h1", {
            children: "Política de Privacidade - Mafagrafos"
        }), r.jsx("p", {
            className: "last-updated",
            children: r.jsx("em", {
                children: "Última atualização: 12 de fevereiro de 2026"
            })
        }), r.jsx("h2", {
            children: "1. Identificação do Controlador"
        }), r.jsxs("p", {
            children: [r.jsx("strong", {
                children: "MAFAGRAFOS CONSULTORIA E DESENVOLVIMENTO LTDA"
            }), r.jsx("br", {}), "CNPJ: 45.598.456/0001-33", r.jsx("br", {}), "Email: contato@mafagrafos.com"]
        }), r.jsx("p", {
            children: "Esta Política de Privacidade descreve como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)."
        }), r.jsx("h2", {
            children: "2. Dados Pessoais Coletados"
        }), r.jsx("h3", {
            children: "2.1 Dados fornecidos pelo Usuário"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Cadastro"
                }), ": nome, endereço de email, senha (armazenada de forma criptografada)."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Pagamento (opcional)"
                }), ": CPF ou CNPJ, quando informado no checkout."]
            })]
        }), r.jsx("h3", {
            children: "2.2 Dados coletados automaticamente"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Dados de uso"
                }), ": páginas visitadas, modelos visualizados, downloads realizados."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Dados técnicos"
                }), ": endereço IP, tipo de navegador, sistema operacional, data e hora de acesso."]
            })]
        }), r.jsx("h3", {
            children: "2.3 Dados de pagamento"
        }), r.jsxs("p", {
            children: ["Os dados de cartão de crédito são processados diretamente pelo ", r.jsx("strong", {
                children: "Stripe"
            }), ", nosso processador de pagamentos. O Mafagrafos ", r.jsx("strong", {
                children: "não armazena"
            }), " dados de cartão de crédito."]
        }), r.jsx("h2", {
            children: "3. Finalidade do Tratamento"
        }), r.jsx("p", {
            children: "Utilizamos seus dados para:"
        }), r.jsxs("table", {
            children: [r.jsx("thead", {
                children: r.jsxs("tr", {
                    children: [r.jsx("th", {
                        children: "Finalidade"
                    }), r.jsx("th", {
                        children: "Base Legal (LGPD)"
                    })]
                })
            }), r.jsxs("tbody", {
                children: [r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Criar e gerenciar sua conta"
                    }), r.jsx("td", {
                        children: "Execução de contrato"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Processar pagamentos e assinaturas"
                    }), r.jsx("td", {
                        children: "Execução de contrato"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Enviar emails transacionais (confirmações, recibos)"
                    }), r.jsx("td", {
                        children: "Execução de contrato"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Controlar créditos e downloads"
                    }), r.jsx("td", {
                        children: "Execução de contrato"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Melhorar a Plataforma e corrigir erros"
                    }), r.jsx("td", {
                        children: "Interesse legítimo"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Análise de uso da Plataforma"
                    }), r.jsx("td", {
                        children: "Interesse legítimo"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Cumprir obrigações legais e fiscais"
                    }), r.jsx("td", {
                        children: "Obrigação legal"
                    })]
                })]
            })]
        }), r.jsx("h2", {
            children: "4. Compartilhamento de Dados"
        }), r.jsx("p", {
            children: "Seus dados podem ser compartilhados com:"
        }), r.jsxs("table", {
            children: [r.jsx("thead", {
                children: r.jsxs("tr", {
                    children: [r.jsx("th", {
                        children: "Terceiro"
                    }), r.jsx("th", {
                        children: "Finalidade"
                    }), r.jsx("th", {
                        children: "Dados compartilhados"
                    })]
                })
            }), r.jsxs("tbody", {
                children: [r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Stripe (EUA)"
                    }), r.jsx("td", {
                        children: "Processamento de pagamentos"
                    }), r.jsx("td", {
                        children: "Nome, email, CPF/CNPJ (se fornecido)"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Amazon Web Services - AWS (EUA)"
                    }), r.jsx("td", {
                        children: "Hospedagem e armazenamento"
                    }), r.jsx("td", {
                        children: "Todos os dados da conta"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Google Analytics"
                    }), r.jsx("td", {
                        children: "Análise de uso"
                    }), r.jsx("td", {
                        children: "Dados anonimizados de navegação"
                    })]
                })]
            })]
        }), r.jsx("p", {
            children: r.jsx("strong", {
                children: "Não vendemos seus dados pessoais a terceiros."
            })
        }), r.jsx("h2", {
            children: "5. Armazenamento e Segurança"
        }), r.jsx("h3", {
            children: "5.1 Onde armazenamos"
        }), r.jsx("p", {
            children: "Seus dados são armazenados em servidores da Amazon Web Services (AWS) localizados nos Estados Unidos."
        }), r.jsx("h3", {
            children: "5.2 Por quanto tempo"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Dados da conta"
                }), ": enquanto a conta estiver ativa, e por até 5 anos após o encerramento para fins legais."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Dados de transações"
                }), ": 5 anos (obrigação fiscal)."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Logs de acesso"
                }), ": 6 meses."]
            })]
        }), r.jsx("h3", {
            children: "5.3 Medidas de segurança"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Criptografia de dados em trânsito (HTTPS/TLS)."
            }), r.jsx("li", {
                children: "Senhas armazenadas com hash criptográfico (nunca em texto puro)."
            }), r.jsx("li", {
                children: "Acesso restrito aos dados por colaboradores autorizados."
            }), r.jsx("li", {
                children: "Infraestrutura AWS com certificações de segurança (ISO 27001, SOC 2)."
            })]
        }), r.jsx("h2", {
            children: "6. Cookies"
        }), r.jsxs("p", {
            children: ["Utilizamos apenas ", r.jsx("strong", {
                children: "cookies essenciais"
            }), " para o funcionamento da Plataforma:"]
        }), r.jsxs("table", {
            children: [r.jsx("thead", {
                children: r.jsxs("tr", {
                    children: [r.jsx("th", {
                        children: "Tipo"
                    }), r.jsx("th", {
                        children: "Finalidade"
                    }), r.jsx("th", {
                        children: "Duração"
                    })]
                })
            }), r.jsxs("tbody", {
                children: [r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Sessão"
                    }), r.jsx("td", {
                        children: "Manter você logado na Plataforma"
                    }), r.jsx("td", {
                        children: "Até o logout ou fechamento do navegador"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Preferências"
                    }), r.jsx("td", {
                        children: "Salvar idioma e configurações"
                    }), r.jsx("td", {
                        children: "1 ano"
                    })]
                })]
            })]
        }), r.jsx("p", {
            children: "Não utilizamos cookies de marketing ou rastreamento de terceiros."
        }), r.jsx("h2", {
            children: "7. Transferência Internacional de Dados"
        }), r.jsx("p", {
            children: "Seus dados são transferidos e armazenados em servidores nos Estados Unidos (AWS e Stripe). Essa transferência é necessária para a prestação do serviço e está amparada por:"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Cláusulas contratuais padrão aprovadas pela Autoridade Nacional de Proteção de Dados (ANPD)."
            }), r.jsx("li", {
                children: "Certificações de segurança dos prestadores de serviço (AWS, Stripe)."
            })]
        }), r.jsx("p", {
            children: "Ao utilizar a Plataforma, você consente com essa transferência internacional."
        }), r.jsx("h2", {
            children: "8. Seus Direitos (LGPD)"
        }), r.jsx("p", {
            children: "Você tem direito a:"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Confirmação e acesso"
                }), ": saber se tratamos seus dados e acessá-los."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Correção"
                }), ": corrigir dados incompletos ou desatualizados."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Anonimização ou exclusão"
                }), ": solicitar a remoção de dados desnecessários."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Portabilidade"
                }), ": receber seus dados em formato estruturado."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Informação sobre compartilhamento"
                }), ": saber com quais terceiros seus dados são compartilhados."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Revogação do consentimento"
                }), ": quando o tratamento for baseado em consentimento."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Oposição"
                }), ": opor-se a tratamentos baseados em interesse legítimo."]
            })]
        }), r.jsxs("p", {
            children: ["Para exercer seus direitos, entre em contato: ", r.jsx("strong", {
                children: "contato@mafagrafos.com"
            })]
        }), r.jsx("p", {
            children: "Responderemos em até 15 dias úteis."
        }), r.jsx("h2", {
            children: "9. Menores de Idade"
        }), r.jsx("p", {
            children: "A Plataforma não é destinada a menores de 18 anos. Não coletamos intencionalmente dados de menores. Se tomarmos conhecimento de que coletamos dados de menor sem autorização dos responsáveis, excluiremos essas informações."
        }), r.jsx("h2", {
            children: "10. Alterações nesta Política"
        }), r.jsx("p", {
            children: "Podemos atualizar esta Política periodicamente. Alterações significativas serão comunicadas por email ou aviso na Plataforma. A data da última atualização estará sempre indicada no início do documento."
        }), r.jsx("h2", {
            children: "11. Contato"
        }), r.jsx("p", {
            children: "Para dúvidas sobre privacidade ou exercício de direitos:"
        }), r.jsxs("p", {
            children: [r.jsx("strong", {
                children: "Email"
            }), ": contato@mafagrafos.com"]
        }), r.jsx("p", {
            className: "agreement-notice",
            children: r.jsx("em", {
                children: "Ao utilizar o Mafagrafos, você confirma que leu e compreendeu esta Política de Privacidade."
            })
        })]
    })
}

function kc() {
    return r.jsxs(r.Fragment, {
        children: [r.jsx("h1", {
            children: "Privacy Policy - Mafagrafos"
        }), r.jsx("p", {
            className: "last-updated",
            children: r.jsx("em", {
                children: "Last updated: February 12, 2026"
            })
        }), r.jsx("h2", {
            children: "1. Data Controller Identification"
        }), r.jsxs("p", {
            children: [r.jsx("strong", {
                children: "MAFAGRAFOS CONSULTORIA E DESENVOLVIMENTO LTDA"
            }), r.jsx("br", {}), "CNPJ: 45.598.456/0001-33", r.jsx("br", {}), "Email: contato@mafagrafos.com"]
        }), r.jsx("p", {
            children: "This Privacy Policy describes how we collect, use, and protect your personal data, in compliance with the Brazilian General Data Protection Law (LGPD - Law No. 13.709/2018)."
        }), r.jsx("h2", {
            children: "2. Personal Data Collected"
        }), r.jsx("h3", {
            children: "2.1 Data provided by the User"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Registration"
                }), ": name, email address, password (stored encrypted)."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Payment (optional)"
                }), ": CPF or CNPJ, when provided at checkout."]
            })]
        }), r.jsx("h3", {
            children: "2.2 Automatically collected data"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Usage data"
                }), ": pages visited, models viewed, downloads made."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Technical data"
                }), ": IP address, browser type, operating system, access date and time."]
            })]
        }), r.jsx("h3", {
            children: "2.3 Payment data"
        }), r.jsxs("p", {
            children: ["Credit card data is processed directly by ", r.jsx("strong", {
                children: "Stripe"
            }), ", our payment processor. Mafagrafos ", r.jsx("strong", {
                children: "does not store"
            }), " credit card data."]
        }), r.jsx("h2", {
            children: "3. Purpose of Processing"
        }), r.jsx("p", {
            children: "We use your data to:"
        }), r.jsxs("table", {
            children: [r.jsx("thead", {
                children: r.jsxs("tr", {
                    children: [r.jsx("th", {
                        children: "Purpose"
                    }), r.jsx("th", {
                        children: "Legal Basis"
                    })]
                })
            }), r.jsxs("tbody", {
                children: [r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Create and manage your account"
                    }), r.jsx("td", {
                        children: "Contract execution"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Process payments and subscriptions"
                    }), r.jsx("td", {
                        children: "Contract execution"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Send transactional emails (confirmations, receipts)"
                    }), r.jsx("td", {
                        children: "Contract execution"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Control credits and downloads"
                    }), r.jsx("td", {
                        children: "Contract execution"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Improve the Platform and fix errors"
                    }), r.jsx("td", {
                        children: "Legitimate interest"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Platform usage analysis"
                    }), r.jsx("td", {
                        children: "Legitimate interest"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Comply with legal and tax obligations"
                    }), r.jsx("td", {
                        children: "Legal obligation"
                    })]
                })]
            })]
        }), r.jsx("h2", {
            children: "4. Data Sharing"
        }), r.jsx("p", {
            children: "Your data may be shared with:"
        }), r.jsxs("table", {
            children: [r.jsx("thead", {
                children: r.jsxs("tr", {
                    children: [r.jsx("th", {
                        children: "Third Party"
                    }), r.jsx("th", {
                        children: "Purpose"
                    }), r.jsx("th", {
                        children: "Shared Data"
                    })]
                })
            }), r.jsxs("tbody", {
                children: [r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Stripe (USA)"
                    }), r.jsx("td", {
                        children: "Payment processing"
                    }), r.jsx("td", {
                        children: "Name, email, CPF/CNPJ (if provided)"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Amazon Web Services - AWS (USA)"
                    }), r.jsx("td", {
                        children: "Hosting and storage"
                    }), r.jsx("td", {
                        children: "All account data"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Google Analytics"
                    }), r.jsx("td", {
                        children: "Usage analysis"
                    }), r.jsx("td", {
                        children: "Anonymized browsing data"
                    })]
                })]
            })]
        }), r.jsx("p", {
            children: r.jsx("strong", {
                children: "We do not sell your personal data to third parties."
            })
        }), r.jsx("h2", {
            children: "5. Storage and Security"
        }), r.jsx("h3", {
            children: "5.1 Where we store"
        }), r.jsx("p", {
            children: "Your data is stored on Amazon Web Services (AWS) servers located in the United States."
        }), r.jsx("h3", {
            children: "5.2 For how long"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Account data"
                }), ": while the account is active, and up to 5 years after closure for legal purposes."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Transaction data"
                }), ": 5 years (tax obligation)."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Access logs"
                }), ": 6 months."]
            })]
        }), r.jsx("h3", {
            children: "5.3 Security measures"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Data encryption in transit (HTTPS/TLS)."
            }), r.jsx("li", {
                children: "Passwords stored with cryptographic hash (never in plain text)."
            }), r.jsx("li", {
                children: "Restricted data access by authorized employees."
            }), r.jsx("li", {
                children: "AWS infrastructure with security certifications (ISO 27001, SOC 2)."
            })]
        }), r.jsx("h2", {
            children: "6. Cookies"
        }), r.jsxs("p", {
            children: ["We use only ", r.jsx("strong", {
                children: "essential cookies"
            }), " for the Platform to function:"]
        }), r.jsxs("table", {
            children: [r.jsx("thead", {
                children: r.jsxs("tr", {
                    children: [r.jsx("th", {
                        children: "Type"
                    }), r.jsx("th", {
                        children: "Purpose"
                    }), r.jsx("th", {
                        children: "Duration"
                    })]
                })
            }), r.jsxs("tbody", {
                children: [r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Session"
                    }), r.jsx("td", {
                        children: "Keep you logged into the Platform"
                    }), r.jsx("td", {
                        children: "Until logout or browser closure"
                    })]
                }), r.jsxs("tr", {
                    children: [r.jsx("td", {
                        children: "Preferences"
                    }), r.jsx("td", {
                        children: "Save language and settings"
                    }), r.jsx("td", {
                        children: "1 year"
                    })]
                })]
            })]
        }), r.jsx("p", {
            children: "We do not use marketing or third-party tracking cookies."
        }), r.jsx("h2", {
            children: "7. International Data Transfer"
        }), r.jsx("p", {
            children: "Your data is transferred and stored on servers in the United States (AWS and Stripe). This transfer is necessary for service provision and is supported by:"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Standard contractual clauses approved by the National Data Protection Authority (ANPD)."
            }), r.jsx("li", {
                children: "Security certifications from service providers (AWS, Stripe)."
            })]
        }), r.jsx("p", {
            children: "By using the Platform, you consent to this international transfer."
        }), r.jsx("h2", {
            children: "8. Your Rights"
        }), r.jsx("p", {
            children: "You have the right to:"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Confirmation and access"
                }), ": know if we process your data and access it."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Correction"
                }), ": correct incomplete or outdated data."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Anonymization or deletion"
                }), ": request removal of unnecessary data."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Portability"
                }), ": receive your data in structured format."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Information about sharing"
                }), ": know which third parties your data is shared with."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Consent revocation"
                }), ": when processing is based on consent."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Opposition"
                }), ": oppose processing based on legitimate interest."]
            })]
        }), r.jsxs("p", {
            children: ["To exercise your rights, contact: ", r.jsx("strong", {
                children: "contato@mafagrafos.com"
            })]
        }), r.jsx("p", {
            children: "We will respond within 15 business days."
        }), r.jsx("h2", {
            children: "9. Minors"
        }), r.jsx("p", {
            children: "The Platform is not intended for minors under 18 years old. We do not intentionally collect data from minors. If we become aware that we have collected data from a minor without parental authorization, we will delete this information."
        }), r.jsx("h2", {
            children: "10. Changes to this Policy"
        }), r.jsx("p", {
            children: "We may update this Policy periodically. Significant changes will be communicated by email or notice on the Platform. The last update date will always be indicated at the beginning of the document."
        }), r.jsx("h2", {
            children: "11. Contact"
        }), r.jsx("p", {
            children: "For questions about privacy or exercising rights:"
        }), r.jsxs("p", {
            children: [r.jsx("strong", {
                children: "Email"
            }), ": contato@mafagrafos.com"]
        }), r.jsx("p", {
            className: "agreement-notice",
            children: r.jsx("em", {
                children: "By using Mafagrafos, you confirm that you have read and understood this Privacy Policy."
            })
        })]
    })
}

function Mc() {
    return r.jsxs(r.Fragment, {
        children: [r.jsx("h1", {
            children: "Política de Privacidad - Mafagrafos"
        }), r.jsx("p", {
            className: "last-updated",
            children: r.jsx("em", {
                children: "Última actualización: 12 de febrero de 2026"
            })
        }), r.jsx("h2", {
            children: "1. Identificación del Controlador"
        }), r.jsxs("p", {
            children: [r.jsx("strong", {
                children: "MAFAGRAFOS CONSULTORIA E DESENVOLVIMENTO LTDA"
            }), r.jsx("br", {}), "CNPJ: 45.598.456/0001-33", r.jsx("br", {}), "Email: contato@mafagrafos.com"]
        }), r.jsx("p", {
            children: "Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos sus datos personales, de conformidad con la Ley General de Protección de Datos de Brasil (LGPD - Ley Nº 13.709/2018)."
        }), r.jsx("h2", {
            children: "2. Datos Personales Recopilados"
        }), r.jsx("h3", {
            children: "2.1 Datos proporcionados por el Usuario"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Registro"
                }), ": nombre, dirección de correo electrónico, contraseña (almacenada de forma encriptada)."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Pago (opcional)"
                }), ": CPF o CNPJ, cuando se proporciona en el checkout."]
            })]
        }), r.jsx("h3", {
            children: "2.2 Datos recopilados automáticamente"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Datos de uso"
                }), ": páginas visitadas, modelos visualizados, descargas realizadas."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Datos técnicos"
                }), ": dirección IP, tipo de navegador, sistema operativo, fecha y hora de acceso."]
            })]
        }), r.jsx("h3", {
            children: "2.3 Datos de pago"
        }), r.jsxs("p", {
            children: ["Los datos de tarjeta de crédito son procesados directamente por ", r.jsx("strong", {
                children: "Stripe"
            }), ", nuestro procesador de pagos. Mafagrafos ", r.jsx("strong", {
                children: "no almacena"
            }), " datos de tarjeta de crédito."]
        }), r.jsx("h2", {
            children: "3. Finalidad del Tratamiento"
        }), r.jsx("p", {
            children: "Utilizamos sus datos para:"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Crear y gestionar su cuenta"
            }), r.jsx("li", {
                children: "Procesar pagos y suscripciones"
            }), r.jsx("li", {
                children: "Enviar correos transaccionales (confirmaciones, recibos)"
            }), r.jsx("li", {
                children: "Controlar créditos y descargas"
            }), r.jsx("li", {
                children: "Mejorar la Plataforma y corregir errores"
            }), r.jsx("li", {
                children: "Análisis de uso de la Plataforma"
            }), r.jsx("li", {
                children: "Cumplir obligaciones legales y fiscales"
            })]
        }), r.jsx("h2", {
            children: "4. Compartición de Datos"
        }), r.jsx("p", {
            children: "Sus datos pueden ser compartidos con:"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Stripe (EE.UU.)"
                }), ": Procesamiento de pagos"]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Amazon Web Services - AWS (EE.UU.)"
                }), ": Alojamiento y almacenamiento"]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Google Analytics"
                }), ": Análisis de uso (datos anonimizados)"]
            })]
        }), r.jsx("p", {
            children: r.jsx("strong", {
                children: "No vendemos sus datos personales a terceros."
            })
        }), r.jsx("h2", {
            children: "5. Almacenamiento y Seguridad"
        }), r.jsx("h3", {
            children: "5.1 Dónde almacenamos"
        }), r.jsx("p", {
            children: "Sus datos se almacenan en servidores de Amazon Web Services (AWS) ubicados en Estados Unidos."
        }), r.jsx("h3", {
            children: "5.2 Por cuánto tiempo"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Datos de cuenta"
                }), ": mientras la cuenta esté activa, y hasta 5 años después del cierre para fines legales."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Datos de transacciones"
                }), ": 5 años (obligación fiscal)."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Registros de acceso"
                }), ": 6 meses."]
            })]
        }), r.jsx("h3", {
            children: "5.3 Medidas de seguridad"
        }), r.jsxs("ul", {
            children: [r.jsx("li", {
                children: "Encriptación de datos en tránsito (HTTPS/TLS)."
            }), r.jsx("li", {
                children: "Contraseñas almacenadas con hash criptográfico."
            }), r.jsx("li", {
                children: "Acceso restringido a datos por empleados autorizados."
            }), r.jsx("li", {
                children: "Infraestructura AWS con certificaciones de seguridad (ISO 27001, SOC 2)."
            })]
        }), r.jsx("h2", {
            children: "6. Cookies"
        }), r.jsxs("p", {
            children: ["Utilizamos solo ", r.jsx("strong", {
                children: "cookies esenciales"
            }), " para el funcionamiento de la Plataforma:"]
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Sesión"
                }), ": Mantenerlo conectado a la Plataforma"]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Preferencias"
                }), ": Guardar idioma y configuraciones"]
            })]
        }), r.jsx("p", {
            children: "No utilizamos cookies de marketing o rastreo de terceros."
        }), r.jsx("h2", {
            children: "7. Transferencia Internacional de Datos"
        }), r.jsx("p", {
            children: "Sus datos se transfieren y almacenan en servidores en Estados Unidos (AWS y Stripe). Esta transferencia es necesaria para la prestación del servicio."
        }), r.jsx("p", {
            children: "Al utilizar la Plataforma, usted consiente esta transferencia internacional."
        }), r.jsx("h2", {
            children: "8. Sus Derechos"
        }), r.jsx("p", {
            children: "Usted tiene derecho a:"
        }), r.jsxs("ul", {
            children: [r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Confirmación y acceso"
                }), ": saber si tratamos sus datos y acceder a ellos."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Corrección"
                }), ": corregir datos incompletos o desactualizados."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Anonimización o eliminación"
                }), ": solicitar la eliminación de datos innecesarios."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Portabilidad"
                }), ": recibir sus datos en formato estructurado."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Información sobre compartición"
                }), ": saber con qué terceros se comparten sus datos."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Revocación del consentimiento"
                }), ": cuando el tratamiento se base en consentimiento."]
            }), r.jsxs("li", {
                children: [r.jsx("strong", {
                    children: "Oposición"
                }), ": oponerse a tratamientos basados en interés legítimo."]
            })]
        }), r.jsxs("p", {
            children: ["Para ejercer sus derechos, contacte: ", r.jsx("strong", {
                children: "contato@mafagrafos.com"
            })]
        }), r.jsx("p", {
            children: "Responderemos en un plazo de 15 días hábiles."
        }), r.jsx("h2", {
            children: "9. Menores de Edad"
        }), r.jsx("p", {
            children: "La Plataforma no está destinada a menores de 18 años. No recopilamos intencionalmente datos de menores."
        }), r.jsx("h2", {
            children: "10. Cambios en esta Política"
        }), r.jsx("p", {
            children: "Podemos actualizar esta Política periódicamente. Los cambios significativos serán comunicados por correo electrónico o aviso en la Plataforma."
        }), r.jsx("h2", {
            children: "11. Contacto"
        }), r.jsx("p", {
            children: "Para preguntas sobre privacidad o ejercicio de derechos:"
        }), r.jsxs("p", {
            children: [r.jsx("strong", {
                children: "Email"
            }), ": contato@mafagrafos.com"]
        }), r.jsx("p", {
            className: "agreement-notice",
            children: r.jsx("em", {
                children: "Al usar Mafagrafos, confirma que ha leído y comprendido esta Política de Privacidad."
            })
        })]
    })
}

function Fc() {
    const {
        t: i,
        i18n: e
    } = X(), s = e.language, t = () => s === "pt" || s === "pt-BR" ? r.jsx(Pc, {}) : s === "es" ? r.jsx(Tc, {}) : r.jsx(Lc, {});
    return r.jsx("div", {
        className: "legal-container",
        children: r.jsx("div", {
            className: "legal-content",
            children: t()
        })
    })
}

function Pc() {
    return r.jsxs(r.Fragment, {
        children: [r.jsx("h1", {
            children: "Perguntas Frequentes"
        }), r.jsxs("p", {
            className: "faq-intro",
            children: ["Resumimos aqui as principais dúvidas sobre nossos planos e licenças. Para informações completas, consulte nossos ", r.jsx(T, {
                to: "/terms",
                children: "Termos de Uso"
            }), "."]
        }), r.jsxs("div", {
            className: "faq-item",
            children: [r.jsx("h2", {
                children: "1. Quantos créditos recebo para testar a plataforma?"
            }), r.jsxs("p", {
                children: ["Ao criar sua conta, você recebe ", r.jsx("strong", {
                    children: "5 créditos gratuitos"
                }), " para testar a plataforma. Esses créditos são apenas para uso pessoal e não incluem licença comercial."]
            })]
        }), r.jsxs("div", {
            className: "faq-item",
            children: [r.jsx("h2", {
                children: "2. Como funciona a licença comercial?"
            }), r.jsxs("p", {
                children: ["A licença comercial permite que você ", r.jsx("strong", {
                    children: "venda peças físicas impressas"
                }), " a partir dos arquivos 3D baixados. Ela está incluída apenas nos ", r.jsx("strong", {
                    children: "planos de assinatura"
                }), " (Basic e Pro)."]
            }), r.jsxs("p", {
                children: [r.jsx("strong", {
                    children: "Importante:"
                }), " A licença comercial é válida apenas enquanto sua assinatura estiver ativa. Se você cancelar, poderá continuar vendendo até o final do período já pago."]
            })]
        }), r.jsxs("div", {
            className: "faq-item",
            children: [r.jsx("h2", {
                children: "3. Comprei apenas créditos avulsos, posso vender as peças comercialmente?"
            }), r.jsxs("p", {
                children: [r.jsx("strong", {
                    children: "Não."
                }), " Os pacotes de créditos avulsos (Credit Packs) são apenas para ", r.jsx("strong", {
                    children: "uso pessoal"
                }), ". Se você deseja vender as peças impressas, precisa ter uma assinatura ativa (Basic ou Pro)."]
            })]
        }), r.jsxs("div", {
            className: "faq-item",
            children: [r.jsx("h2", {
                children: "4. Tenho assinatura e não usei todos os créditos no mês, perco eles?"
            }), r.jsxs("p", {
                children: [r.jsx("strong", {
                    children: "Não necessariamente."
                }), " Seus créditos não utilizados podem ser transferidos para o mês seguinte, respeitando o limite de rollover do seu plano:"]
            }), r.jsxs("ul", {
                children: [r.jsxs("li", {
                    children: [r.jsx("strong", {
                        children: "Plano Basic:"
                    }), " até 20 créditos podem acumular"]
                }), r.jsxs("li", {
                    children: [r.jsx("strong", {
                        children: "Plano Pro:"
                    }), " até 40 créditos podem acumular"]
                })]
            }), r.jsx("p", {
                children: "Créditos acima do limite de rollover são perdidos ao final do ciclo. Se você cancelar a assinatura, os créditos restantes são válidos apenas até o final do período já pago (sem rollover)."
            })]
        }), r.jsxs("div", {
            className: "faq-item",
            children: [r.jsx("h2", {
                children: "5. Posso usar as fotos do site para vender os produtos?"
            }), r.jsxs("p", {
                children: [r.jsx("strong", {
                    children: "Não."
                }), " As fotografias e imagens disponíveis na plataforma são de uso exclusivo do Mafagrafos e ", r.jsx("strong", {
                    children: "não podem ser utilizadas"
                }), " para divulgação ou venda de produtos."]
            }), r.jsx("p", {
                children: "Se você deseja vender peças impressas, recomendamos tirar suas próprias fotos dos produtos."
            })]
        }), r.jsx("div", {
            className: "faq-footer",
            children: r.jsxs("p", {
                children: ["Ainda tem dúvidas? Entre em contato pelo email ", r.jsx("a", {
                    href: "mailto:contato@mafagrafos.com",
                    children: "contato@mafagrafos.com"
                })]
            })
        })]
    })
}

function Lc() {
    return r.jsxs(r.Fragment, {
        children: [r.jsx("h1", {
            children: "Frequently Asked Questions"
        }), r.jsxs("p", {
            className: "faq-intro",
            children: ["Here we summarize the main questions about our plans and licenses. For complete information, please refer to our ", r.jsx(T, {
                to: "/terms",
                children: "Terms of Use"
            }), "."]
        }), r.jsxs("div", {
            className: "faq-item",
            children: [r.jsx("h2", {
                children: "1. How many credits do I get to test the platform?"
            }), r.jsxs("p", {
                children: ["When you create your account, you receive ", r.jsx("strong", {
                    children: "5 free credits"
                }), " to test the platform. These credits are for personal use only and do not include a commercial license."]
            })]
        }), r.jsxs("div", {
            className: "faq-item",
            children: [r.jsx("h2", {
                children: "2. How does the commercial license work?"
            }), r.jsxs("p", {
                children: ["The commercial license allows you to ", r.jsx("strong", {
                    children: "sell physical printed parts"
                }), " from the downloaded 3D files. It is included only in ", r.jsx("strong", {
                    children: "subscription plans"
                }), " (Basic and Pro)."]
            }), r.jsxs("p", {
                children: [r.jsx("strong", {
                    children: "Important:"
                }), " The commercial license is valid only while your subscription is active. If you cancel, you can continue selling until the end of the already paid period."]
            })]
        }), r.jsxs("div", {
            className: "faq-item",
            children: [r.jsx("h2", {
                children: "3. I only bought credit packs, can I sell the pieces commercially?"
            }), r.jsxs("p", {
                children: [r.jsx("strong", {
                    children: "No."
                }), " Credit packs are for ", r.jsx("strong", {
                    children: "personal use only"
                }), ". If you want to sell printed pieces, you need an active subscription (Basic or Pro)."]
            })]
        }), r.jsxs("div", {
            className: "faq-item",
            children: [r.jsx("h2", {
                children: "4. I have a subscription and didn't use all my credits this month, do I lose them?"
            }), r.jsxs("p", {
                children: [r.jsx("strong", {
                    children: "Not necessarily."
                }), " Your unused credits can be transferred to the following month, respecting your plan's rollover limit:"]
            }), r.jsxs("ul", {
                children: [r.jsxs("li", {
                    children: [r.jsx("strong", {
                        children: "Basic Plan:"
                    }), " up to 20 credits can accumulate"]
                }), r.jsxs("li", {
                    children: [r.jsx("strong", {
                        children: "Pro Plan:"
                    }), " up to 40 credits can accumulate"]
                })]
            }), r.jsx("p", {
                children: "Credits above the rollover limit are lost at the end of the cycle. If you cancel your subscription, remaining credits are valid only until the end of the already paid period (no rollover)."
            })]
        }), r.jsxs("div", {
            className: "faq-item",
            children: [r.jsx("h2", {
                children: "5. Can I use the site photos to sell my products?"
            }), r.jsxs("p", {
                children: [r.jsx("strong", {
                    children: "No."
                }), " The photographs and images available on the platform are for exclusive use by Mafagrafos and ", r.jsx("strong", {
                    children: "cannot be used"
                }), " for product promotion or sales."]
            }), r.jsx("p", {
                children: "If you want to sell printed pieces, we recommend taking your own product photos."
            })]
        }), r.jsx("div", {
            className: "faq-footer",
            children: r.jsxs("p", {
                children: ["Still have questions? Contact us at ", r.jsx("a", {
                    href: "mailto:contato@mafagrafos.com",
                    children: "contato@mafagrafos.com"
                })]
            })
        })]
    })
}

function Tc() {
    return r.jsxs(r.Fragment, {
        children: [r.jsx("h1", {
            children: "Preguntas Frecuentes"
        }), r.jsxs("p", {
            className: "faq-intro",
            children: ["Aquí resumimos las principales dudas sobre nuestros planes y licencias. Para información completa, consulta nuestros ", r.jsx(T, {
                to: "/terms",
                children: "Términos de Uso"
            }), "."]
        }), r.jsxs("div", {
            className: "faq-item",
            children: [r.jsx("h2", {
                children: "1. ¿Cuántos créditos recibo para probar la plataforma?"
            }), r.jsxs("p", {
                children: ["Al crear tu cuenta, recibes ", r.jsx("strong", {
                    children: "5 créditos gratuitos"
                }), " para probar la plataforma. Estos créditos son solo para uso personal y no incluyen licencia comercial."]
            })]
        }), r.jsxs("div", {
            className: "faq-item",
            children: [r.jsx("h2", {
                children: "2. ¿Cómo funciona la licencia comercial?"
            }), r.jsxs("p", {
                children: ["La licencia comercial te permite ", r.jsx("strong", {
                    children: "vender piezas físicas impresas"
                }), " a partir de los archivos 3D descargados. Está incluida solo en los ", r.jsx("strong", {
                    children: "planes de suscripción"
                }), " (Basic y Pro)."]
            }), r.jsxs("p", {
                children: [r.jsx("strong", {
                    children: "Importante:"
                }), " La licencia comercial es válida solo mientras tu suscripción esté activa. Si cancelas, puedes continuar vendiendo hasta el final del período ya pagado."]
            })]
        }), r.jsxs("div", {
            className: "faq-item",
            children: [r.jsx("h2", {
                children: "3. Solo compré paquetes de créditos, ¿puedo vender las piezas comercialmente?"
            }), r.jsxs("p", {
                children: [r.jsx("strong", {
                    children: "No."
                }), " Los paquetes de créditos son solo para ", r.jsx("strong", {
                    children: "uso personal"
                }), ". Si deseas vender las piezas impresas, necesitas una suscripción activa (Basic o Pro)."]
            })]
        }), r.jsxs("div", {
            className: "faq-item",
            children: [r.jsx("h2", {
                children: "4. Tengo suscripción y no usé todos mis créditos este mes, ¿los pierdo?"
            }), r.jsxs("p", {
                children: [r.jsx("strong", {
                    children: "No necesariamente."
                }), " Tus créditos no utilizados pueden transferirse al mes siguiente, respetando el límite de rollover de tu plan:"]
            }), r.jsxs("ul", {
                children: [r.jsxs("li", {
                    children: [r.jsx("strong", {
                        children: "Plan Basic:"
                    }), " hasta 20 créditos pueden acumularse"]
                }), r.jsxs("li", {
                    children: [r.jsx("strong", {
                        children: "Plan Pro:"
                    }), " hasta 40 créditos pueden acumularse"]
                })]
            }), r.jsx("p", {
                children: "Los créditos por encima del límite de rollover se pierden al final del ciclo. Si cancelas tu suscripción, los créditos restantes son válidos solo hasta el final del período ya pagado (sin rollover)."
            })]
        }), r.jsxs("div", {
            className: "faq-item",
            children: [r.jsx("h2", {
                children: "5. ¿Puedo usar las fotos del sitio para vender mis productos?"
            }), r.jsxs("p", {
                children: [r.jsx("strong", {
                    children: "No."
                }), " Las fotografías e imágenes disponibles en la plataforma son de uso exclusivo de Mafagrafos y ", r.jsx("strong", {
                    children: "no pueden utilizarse"
                }), " para promoción o venta de productos."]
            }), r.jsx("p", {
                children: "Si deseas vender piezas impresas, te recomendamos tomar tus propias fotos de los productos."
            })]
        }), r.jsx("div", {
            className: "faq-footer",
            children: r.jsxs("p", {
                children: ["¿Aún tienes dudas? Contáctanos en ", r.jsx("a", {
                    href: "mailto:contato@mafagrafos.com",
                    children: "contato@mafagrafos.com"
                })]
            })
        })]
    })
}
var ft, Gi, Ui, Et, Ci, mt, Q = Q !== void 0 ? Q : {},
    Dn = Object.assign({}, Q),
    Ir = (i, e) => {
        throw e
    },
    ia = typeof window == "object",
    Ws = typeof importScripts == "function",
    $t = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string",
    be = "";
$t ? (be = Ws ? require("path").dirname(be) + "/" : __dirname + "/", mt = () => {
    Ci || (Et = require("fs"), Ci = require("path"))
}, ft = function(i, e) {
    var s = Es(i);
    return s ? e ? s : s.toString() : (mt(), i = Ci.normalize(i), Et.readFileSync(i, e ? void 0 : "utf8"))
}, Ui = i => {
    var e = ft(i, !0);
    return e.buffer || (e = new Uint8Array(e)), e
}, Gi = (i, e, s) => {
    var t = Es(i);
    t && e(t), mt(), i = Ci.normalize(i), Et.readFile(i, (function(n, o) {
        n ? s(n) : e(o.buffer)
    }))
}, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), typeof module < "u" && (module.exports = Q), process.on("uncaughtException", (function(i) {
    if (!(i instanceof Ia)) throw i
})), process.on("unhandledRejection", (function(i) {
    throw i
})), Ir = (i, e) => {
    throw process.exitCode = i, e
}, Q.inspect = function() {
    return "[Emscripten Module object]"
}) : (ia || Ws) && (Ws ? be = self.location.href : typeof document < "u" && document.currentScript && (be = document.currentScript.src), be = be.indexOf("blob:") !== 0 ? be.substr(0, be.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", ft = i => {
    try {
        var e = new XMLHttpRequest;
        return e.open("GET", i, !1), e.send(null), e.responseText
    } catch (t) {
        var s = Es(i);
        if (s) return (function(n) {
            for (var o = [], a = 0; a < n.length; a++) {
                var A = n[a];
                A > 255 && (A &= 255), o.push(String.fromCharCode(A))
            }
            return o.join("")
        })(s);
        throw t
    }
}, Ws && (Ui = i => {
    try {
        var e = new XMLHttpRequest;
        return e.open("GET", i, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response)
    } catch (t) {
        var s = Es(i);
        if (s) return s;
        throw t
    }
}), Gi = (i, e, s) => {
    var t = new XMLHttpRequest;
    t.open("GET", i, !0), t.responseType = "arraybuffer", t.onload = () => {
        if (t.status == 200 || t.status == 0 && t.response) e(t.response);
        else {
            var n = Es(i);
            n ? e(n.buffer) : s()
        }
    }, t.onerror = s, t.send(null)
});
var ai, Gc = Q.print || (() => {}).bind(console),
    vs = Q.printErr || (() => {}).bind(console);
Object.assign(Q, Dn), Dn = null, Q.arguments && Q.arguments, Q.thisProgram && Q.thisProgram, Q.quit && (Ir = Q.quit), Q.wasmBinary && (ai = Q.wasmBinary);
var Wt;
Q.noExitRuntime;
typeof WebAssembly != "object" && zi("no native wasm support detected");
var ta = !1;

function ra(i) {
    return Q["_" + i]
}

function Uc(i, e, s, t, n) {
    var o = {
            string: function(u) {
                var h = 0;
                if (u != null && u !== 0) {
                    var I = 1 + (u.length << 2);
                    (function(p, m, E) {
                        (function(B, v, y, b) {
                            if (!(b > 0)) return 0;
                            for (var k = y, R = y + b - 1, S = 0; S < B.length; ++S) {
                                var M = B.charCodeAt(S);
                                if (M >= 55296 && M <= 57343 && (M = 65536 + ((1023 & M) << 10) | 1023 & B.charCodeAt(++S)), M <= 127) {
                                    if (y >= R) break;
                                    v[y++] = M
                                } else if (M <= 2047) {
                                    if (y + 1 >= R) break;
                                    v[y++] = 192 | M >> 6, v[y++] = 128 | 63 & M
                                } else if (M <= 65535) {
                                    if (y + 2 >= R) break;
                                    v[y++] = 224 | M >> 12, v[y++] = 128 | M >> 6 & 63, v[y++] = 128 | 63 & M
                                } else {
                                    if (y + 3 >= R) break;
                                    v[y++] = 240 | M >> 18, v[y++] = 128 | M >> 12 & 63, v[y++] = 128 | M >> 6 & 63, v[y++] = 128 | 63 & M
                                }
                            }
                            v[y] = 0
                        })(p, Ds, m, E)
                    })(u, h = Zt(I), I)
                }
                return h
            },
            array: function(u) {
                var h = Zt(u.length);
                return (function(I, p) {
                    ys.set(I, p)
                })(u, h), h
            }
        },
        a = ra(i),
        A = [],
        l = 0;
    if (t)
        for (var c = 0; c < t.length; c++) {
            var g = o[s[c]];
            g ? (l === 0 && (l = ua()), A[c] = g(t[c])) : A[c] = t[c]
        }
    var d = a.apply(null, A);
    return d = (function(u) {
        return l !== 0 && ha(l), (function(h) {
            return e === "string" ? aa(h) : e === "boolean" ? !!h : h
        })(u)
    })(d)
}
var na, ys, Ds, ue, bn = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;

function oa(i, e, s) {
    for (var t = e + s, n = e; i[n] && !(n >= t);) ++n;
    if (n - e > 16 && i.subarray && bn) return bn.decode(i.subarray(e, n));
    for (var o = ""; e < n;) {
        var a = i[e++];
        if (128 & a) {
            var A = 63 & i[e++];
            if ((224 & a) != 192) {
                var l = 63 & i[e++];
                if ((a = (240 & a) == 224 ? (15 & a) << 12 | A << 6 | l : (7 & a) << 18 | A << 12 | l << 6 | 63 & i[e++]) < 65536) o += String.fromCharCode(a);
                else {
                    var c = a - 65536;
                    o += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                }
            } else o += String.fromCharCode((31 & a) << 6 | A)
        } else o += String.fromCharCode(a)
    }
    return o
}

function aa(i, e) {
    return i ? oa(Ds, i, e) : ""
}

function Aa(i) {
    na = i, Q.HEAP8 = ys = new Int8Array(i), Q.HEAP16 = new Int16Array(i), Q.HEAP32 = ue = new Int32Array(i), Q.HEAPU8 = Ds = new Uint8Array(i), Q.HEAPU16 = new Uint16Array(i), Q.HEAPU32 = new Uint32Array(i), Q.HEAPF32 = new Float32Array(i), Q.HEAPF64 = new Float64Array(i)
}
Q.INITIAL_MEMORY;
var la, jn = [],
    ca = [],
    Sn = [],
    ga = !1,
    as = 0,
    ei = null;

function zi(i) {
    throw Q.onAbort && Q.onAbort(i), vs(i = "Aborted(" + i + ")"), ta = !0, i += ". Build with -s ASSERTIONS=1 for more info.", new WebAssembly.RuntimeError(i)
}
Q.preloadedImages = {}, Q.preloadedAudios = {};
var Ce, Bt;

function pr(i) {
    return i.startsWith("data:application/octet-stream;base64,")
}

function Nn(i) {
    return i.startsWith("file://")
}

function Rn(i) {
    try {
        if (i == Ce && ai) return new Uint8Array(ai);
        var e = Es(i);
        if (e) return e;
        if (Ui) return Ui(i);
        throw "both async and sync fetching of the wasm failed"
    } catch (s) {
        zi(s)
    }
}

function Qt(i) {
    for (; i.length > 0;) {
        var e = i.shift();
        if (typeof e != "function") {
            var s = e.func;
            typeof s == "number" ? e.arg === void 0 ? kn(s)() : kn(s)(e.arg) : s(e.arg === void 0 ? null : e.arg)
        } else e(Q)
    }
}
pr(Ce = "data:application/octet-stream;base64,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NgIAIAEPC0GgzQBBMDYCAEF/C4MBAgN/AX4CQCAAQoCAgIAQVARAIAAhBQwBCwNAIAFBAWsiASAAIABCCoAiBUIKfn2nQTByOgAAIABC/////58BViECIAUhACACDQALCyAFpyICBEADQCABQQFrIgEgAiACQQpuIgNBCmxrQTByOgAAIAJBCUshBCADIQIgBA0ACwsgAQt/AQN/IAAhAQJAIABBA3EEQANAIAEtAABFDQIgAUEBaiIBQQNxDQALCwNAIAEiAkEEaiEBIAIoAgAiA0F/cyADQYGChAhrcUGAgYKEeHFFDQALIANB/wFxRQRAIAIgAGsPCwNAIAItAAEhAyACQQFqIgEhAiADDQALCyABIABrCygBAX8jAEEQayIDJAAgAyACNgIMIAAgASACQRpBABAhGiADQRBqJAAL6wEBA38gAEUEQEGkzQAoAgAEQEGkzQAoAgAQGSEBC0GILSgCAARAQYgtKAIAEBkgAXIhAQtBrM0AKAIAIgAEQANAIAAoAkwaIAAoAhQgACgCHEcEQCAAEBkgAXIhAQsgACgCOCIADQALCyABDwsgACgCTEEATiECAkACQCAAKAIUIAAoAhxGDQAgAEEAQQAgACgCJBEDABogACgCFA0AQX8hAQwBCyAAKAIEIgEgACgCCCIDRwRAIAAgASADa6xBASAAKAIoEQoAGgtBACEBIABBADYCHCAAQgA3AxAgAEIANwIEIAJFDQALIAELzAEBAn8CQAJAIAEoAkwiAkEATgRAIAJFDQFB+M0AKAIAIAJB/////3txRw0BCwJAIABB/wFxIgMgASgCUEYNACABKAIUIgIgASgCEEYNACABIAJBAWo2AhQgAiAAOgAADAILIAEgAxA5DAELIAEgASgCTCICQf////8DIAIbNgJMAkACQCAAQf8BcSIDIAEoAlBGDQAgASgCFCICIAEoAhBGDQAgASACQQFqNgIUIAIgADoAAAwBCyABIAMQOQsgASgCTBogAUEANgJMCwsrAQF/IwBBEGsiAyQAIAMgAjYCDCAAIAEgAkEAQQAQISEAIANBEGokACAACwQAIAAL7gkCC38CfCMAQbABayIEJAACfyABKAIIIAEoAgAiDUEwbGoiBUEIaysDAEQAAAAAAAAkQKJEAAAAAAAA4D+gnCIPmUQAAAAAAADgQWMEQCAPqgwBC0GA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IgIgAigCACgCEBEBACABQQA2AhAgACAANgIQIAMgASADKAIAKAIMEQIAIAMgAygCACgCEBEBACABIAE2AhAMAgsgAiABIAIoAgAoAgwRAgAgACgCECICIAIoAgAoAhARAQAgACABKAIQNgIQIAEgATYCEAwBCyABKAIQIgQgAUYEQCAEIAAgBCgCACgCDBECACABKAIQIgIgAigCACgCEBEBACABIAAoAhA2AhAgACAANgIQDAELIAAgBDYCECABIAI2AhALIANBEGokAAu8AgEKfyABKAIAIglBAEoEQCABKAIEIgooAgBBQHEhAyAJQQN0IApqQQRrKAIAIQEDQCABIAogBEEDdGoiAigCBCIFRwRAIAUgASABIAVKGyEGIAIoAgAiAUE/cSELAkAgAyABQUBxIgJMBEAgAiADTA0BIAAoAgwgACgCCCAGbEEDdGohByADIQEDQCAHIAFBwABtQQN0aiIIIAgpAwBCf4U3AwAgAUFAayIBIAJIDQALDAELIAAoAgwgACgCCCAGbEEDdGohByACIQEDQCAHIAFBwABtQQN0aiIIIAgpAwBCf4U3AwAgAUFAayIBIANIDQALCyALBEAgACgCDCAAKAIIIAZsQQN0aiACQcAAbUEDdGoiASABKQMAQn9BwAAgC2uthoU3AwALIAUhAQsgBEEBaiIEIAlHDQALCwuaAQAgAEEBOgA1AkAgACgCBCACRw0AIABBAToANAJAIAAoAhAiAkUEQCAAQQE2AiQgACADNgIYIAAgATYCECADQQFHDQIgACgCMEEBRg0BDAILIAEgAkYEQCAAKAIYIgJBAkYEQCAAIAM2AhggAyECCyAAKAIwQQFHDQIgAkEBRg0BDAILIAAgACgCJEEBajYCJAsgAEEBOgA2CwtdAQF/IAAoAhAiA0UEQCAAQQE2AiQgACACNgIYIAAgATYCEA8LAkAgASADRgRAIAAoAhhBAkcNASAAIAI2AhgPCyAAQQE6ADYgAEECNgIYIAAgACgCJEEBajYCJAsLswQCDH8CfkECIQQDQCACIARrIQdBASAEayEGIAEgBGsiCEEGdiELIAIgBGoiCUEBayEMIAEgBGoiCkEBayIDQQZ2IQ1CgICAgICAgICAfyAIQT9xrYghD0KAgICAgICAgIB/IANBP3GtiCEQQQAhAwNAIAMCfwJAIAEgBmoi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KAIANgIADwsACyACIAIoAgAiAUEEajYCACAAIAEyAQA3AwAPCyACIAIoAgAiAUEEajYCACAAIAEzAQA3AwAPCyACIAIoAgAiAUEEajYCACAAIAEwAAA3AwAPCyACIAIoAgAiAUEEajYCACAAIAExAAA3AwAPCwALIAIgAigCAEEHakF4cSIBQQhqNgIAIAAgASsDADkDAA8LIAAgAiADEQIACw8LIAIgAigCACIBQQRqNgIAIAAgATQCADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATUCADcDAA8LIAIgAigCAEEHakF4cSIBQQhqNgIAIAAgASkDADcDAAtyAQN/IAAoAgAsAABBMGtBCk8EQEEADwsDQCAAKAIAIQNBfyEBIAJBzJmz5gBNBEBBfyADLAAAQTBrIgEgAkEKbCICaiABQf////8HIAJrShshAQsgACADQQFqNgIAIAEhAiADLAABQTBrQQpJDQALIAILrBQCEX8BfiMAQdAAayIHJAAgByABNgJMIAdBN2ohFiAHQThqIRRBACEBAkACQAJAAkADQCABQf////8HIA1rSg0BIAEgDWohDSAHKAJMIgshAQJAAkACQCALLQAAIggEQANAAkACQCAIQf8BcSIIRQRAIAEhCAwBCyAIQSVHDQEgASEIA0AgAS0AAUElRw0BIAcgAUECaiIMNgJMIAhBAWohCCABLQACIQkgDCEBIAlBJUYNAAsLIAggC2siAUH/////ByANayIXSg0HIAAEQCAAIAsgARALCyAIIAtHDQZBfyESQQEhCAJAIAcoAkwiASwAAUEwa0EKTw0AIAEtAAJBJEcNACABLAABQTBrIRJBASEVQQMhCAsgByABIAhqIgE2AkxBACEOAkAgASwAACITQSBrIgxBH0sEQCABIQgMAQsgASEIQQEgDHQiCUGJ0QRxRQ0AA0AgByABQQFqIgg2AkwgCSAOciEOIAEsAAEiE0EgayIMQSBPDQEgCCEBQQEgDHQiCUGJ0QRxDQALCwJAIBNBKkYEQCAHAn8CQCAILAABQTBrQQpPDQAgBygCTCIBLQACQSRHDQAgASwAAUECdCAEakHAAWtBCjYCACABLAABQQN0IANqQYADaygCACEPQQEhFSABQQNqDAELIBUNBkEAIRVBACEPIAAEQCACIAIoAgAiAUEEajYCACABKAIAIQ8LIAcoAkxBAWoLIgE2AkwgD0EATg0BQQAgD2shDyAOQYDAAHIhDgwBCyAHQcwAahAzIg9BAEgNCCAHKAJMIQELQQAhCEF/IQkCf0EAIAEtAABBLkcNABogAS0AAUEqRgRAIAcCfwJAIAEsAAJBMGtBCk8NACAHKAJMIgEtAANBJEcNACABLAACQQJ0IARqQcABa0EKNgIAIAEsAAJBA3QgA2pBgANrKAIAIQkgAUEEagwBCyAVDQYgAAR/IAIgAigCACIBQQRqNgIAIAEoAgAFQQALIQkgBygCTEECagsiATYCTCAJQX9zQR92DAELIAcgAUEBajYCTCAHQcwAahAzIQkgBygCTCEBQQELIRADQCAIIRFBHCEKIAEsAABB+wBrQUZJDQkgByABQQFqIhM2AkwgASwAACEIIBMhASAIIBFBOmxqQY8kai0AACIIQQFrQQhJDQALAkACQCAIQRtHBEAgCEUNCyASQQBOBEAgBCASQQJ0aiAINgIAIAcgAyASQQN0aikDADcDQAwCCyAARQ0IIAdBQGsgCCACIAYQMiAHKAJMIRMMAgsgEkEATg0KC0EAIQEgAEUNBwsgDkH//3txIgwgDiAOQYDAAHEbIQhBACEOQYAIIRIgFCEKAkACQAJAAn8CQAJAAkACQAJ/AkACQAJAAkACQAJAAkAgE0EBaywAACIBQV9xIAEgAUEPcUEDRhsgASARGyIBQdgAaw4hBBQUFBQUFBQUDhQPBg4ODhQGFBQUFAIFAxQUCRQBFBQEAAsCQCABQcEAaw4HDhQLFA4ODgALIAFB0wBGDQkMEwsgBykDQCEYQYAIDAULQQAhAQJAAkACQAJAAkACQAJAIBFB/wFxDggAAQIDBBoFBhoLIAcoAkAgDTYCAAwZCyAHKAJAIA02AgAMGAsgBygCQCANrDcDAAwXCyAHKAJAIA07AQAMFgsgBygCQCANOgAADBULIAcoAkAgDTYCAAwUCyAHKAJAIA2sNwMADBMLIAlBCCAJQQhLGyEJIAhBCHIhCEH4ACEBCyAUIQsgAUEgcSERIAcpA0AiGFBFBEADQCALQQFrIgsgGKdBD3FBoChqLQAAIBFyOgAAIBhCD1YhDCAYQgSIIRggDA0ACwsgBykDQFANAyAIQQhxRQ0DIAFBBHZBgAhqIRJBAiEODAMLIBQhASAHKQNAIhhQRQRAA0AgAUEBayIBIBinQQdxQTByOgAAIBhCB1YhCyAYQgOIIRggCw0ACwsgASELIAhBCHFFDQIgCSAUIAtrIgFBAWogASAJSBshCQwCCyAHKQNAIhhCAFMEQCAHQgAgGH0iGDcDQEEBIQ5BgAgMAQsgCEGAEHEEQEEBIQ5BgQgMAQtBgghBgAggCEEBcSIOGwshEiAYIBQQFiELCyAQQQAgCUEASBsNDiAIQf//e3EgCCAQGyEIAkAgBykDQCIYQgBSDQAgCQ0AIBQiCyEKQQAhCQwMCyAJIBhQIBQgC2tqIgEgASAJSBshCQwLCwJ/IAlB/////wcgCUH/////B0kbIhEiCkEARyETAkACQAJAIAcoAkAiAUHOCyABGyILIggiEEEDcUUNACAKRQ0AA0AgEC0AAEUNAiAKQQFrIgpBAEchEyAQQQFqIhBBA3FFDQEgCg0ACwsgE0UNAQsCQCAQLQAARQ0AIApBBEkNAANAIBAoAgAiAUF/cyABQYGChAhrcUGAgYKEeHENASAQQQRqIRAgCkEEayIKQQNLDQALCyAKRQ0AA0AgECAQLQAARQ0CGiAQQQFqIRAgCkEBayIKDQALC0EACyIBIAhrIBEgARsiASALaiEKIAlBAE4EQCAMIQggASEJDAsLIAwhCCABIQkgCi0AAA0NDAoLIAkEQCAHKAJADAILQQAhASAAQSAgD0EAIAgQDAwCCyAHQQA2AgwgByAHKQNAPgIIIAcgB0EIaiIBNgJAQX8hCSABCyEKQQAhAQJAA0AgCigCACILRQ0BAkAgB0EEaiALEDAiDEEASCILDQAgDCAJIAFrSw0AIApBBGohCiAJIAEgDGoiAUsNAQwCCwsgCw0NC0E9IQogAUEASA0LIABBICAPIAEgCBAMIAFFBEBBACEBDAELQQAhCSAHKAJAIQoDQCAKKAIAIgtFDQEgB0EEaiALEDAiCyAJaiIJIAFLDQEgACAHQQRqIAsQCyAKQQRqIQogASAJSw0ACwsgAEEgIA8gASAIQYDAAHMQDCAPIAEgASAPSBshAQwICyAQQQAgCUEASBsNCEE9IQogACAHKwNAIA8gCSAIIAEgBREMACIBQQBODQcMCQsgByAHKQNAPAA3QQEhCSAWIQsgDCEIDAQLIAcgAUEBaiIMNgJMIAEtAAEhCCAMIQEMAAsACyAADQcgFUUNAkEBIQEDQCAEIAFBAnRqKAIAIgAEQCADIAFBA3RqIAAgAiAGEDJBASENIAFBAWoiAUEKRw0BDAkLC0EBIQ0gAUEKTw0HA0AgBCABQQJ0aigCAA0BIAFBAWoiAUEKRw0ACwwHC0EcIQoMBAsgCSAKIAtrIhEgCSARShsiDEH/////ByAOa0oNAkE9IQogDyAMIA5qIgkgCSAPSBsiASAXSg0DIABBICABIAkgCBAMIAAgEiAOEAsgAEEwIAEgCSAIQYCABHMQDCAAQTAgDCARQQAQDCAAIAsgERALIABBICABIAkgCEGAwABzEAwMAQsLQQAhDQwDC0E9IQoLQaDNACAKNgIAC0F/IQ0LIAdB0ABqJAAgDQt+AgF/AX4gAL0iA0I0iKdB/w9xIgJB/w9HBHwgAkUEQCABIABEAAAAAAAAAABhBH9BAAUgAEQAAAAAAADwQ6IgARA1IQAgASgCAEFAags2AgAgAA8LIAEgAkH+B2s2AgAgA0L/////////h4B/g0KAgICAgICA8D+EvwUgAAsL5AEBA38gACgCVCEDAn8gACgCFCIEIAAoAhwiBUcEQCAAIAU2AhRBACAAIAUgBCAFayIAEDYgAEkNARoLIAMoAggiACACaiIEIAMoAhQiBU8EfyADKAIMIARBAWogBUEBdHJBAXIiABAvIgRFBEBBAA8LIAMgBDYCDCADKAIAIAQ2AgAgAygCFCIEIAMoAgxqQQAgACAEaxAOGiADIAA2AhQgAygCCAUgAAsgAygCDGogASACEBAaIAMgAygCCCACaiIANgIIIAMoAhAgAE0EQCADIAA2AhALIAMoAgQgADYCACACCwv/AQEDf0GoCRAPIgIEf0EBEA8iA0UEQCACEAlBAA8LIAJBAEGQARAOGiACQZABaiIEQQBBGBAOGiACIAE2ApQBIAIgADYCkAEgAiAENgJUIAFBADYCACACQgA3A6ABIAJBADYCmAEgACADNgIAIAIgAzYCnAEgA0EAOgAAIAJBfzYCPCACQQQ2AgAgAkF/NgJQIAJBgAg2AjAgAiACQagBajYCLCACQRQ2AiggAkEVNgIkIAJBfzYCSCACQRY2AgxBsc0ALQAARQRAIAJBfzYCTAsgAkGszQAoAgA2AjhBrM0AKAIAIgAEQCAAIAI2AjQLQazNACACNgIAIAIFQQALC7UCAQV/IwBBMGsiBCQAAn8gAkQAAAAAAAAkQKJEAAAAAAAA4D+gnCICmUQAAAAAAADgQWMEQCACqgwBC0GAgICAeAsiB0GcLSgCAGshBQJ/IAFEAAAAAAAAJECiRAAAAAAAAOA/oJwiAZlEAAAAAAAA4EFjBEAgAaoMAQtBgICAgHgLIghBmC0oAgBrIQYCQCADBEAgAysDGCEBIAQgAysDECAGt6K2uzkDICAEIAEgBbeitrs5AyggAEHeCEHdCEGVLS0AAEHsAEYbIARBIGoQEwwBC0GVLS0AAEHsAEcEQCAEIAU2AhQgBCAGNgIQIABB3wkgBEEQahATDAELIAQgBTYCBCAEIAY2AgAgAEHgCSAEEBMLQZwtIAc2AgBBmC0gCDYCAEGVLUHsADoAACAEQTBqJAALgAEBAn8jAEEQayICJAAgAiABOgAPAkACQCAAKAIQIgMEfyADBSAAECYNAiAAKAIQCyAAKAIUIgNGDQAgACgCUCABQf8BcUYNACAAIANBAWo2AhQgAyABOgAADAELIAAgAkEPakEBIAAoAiQRAwBBAUcNACACLQAPGgsgAkEQaiQAC2wBAn8gACgCTBogABAZGiAAIAAoAgwRAAAaIAAtAABBAXFFBEAgACgCNCIBBEAgASAAKAI4NgI4CyAAKAI4IgIEQCACIAE2AjQLIABBrM0AKAIARgRAQazNACACNgIACyAAKAJgEAkgABAJCwstAQJ/IAAoAgQiAQRAA0AgASgCFCECIAFBADYCFCABECMgAiIBDQALCyAAEAkLlHMDIH8mfAF+IwBBEGsiHyQAIB9BADYCDAJAQQwQDyIaRQ0AIAAhEEEAIQAjAEEQayIXJAAgF0EANgIEIAEiCygCACIFBEAgBUEBa0HAAG1BAWohAAsCQAJAIAsoAgQiByAAIABBH3UiAXMgAWsiAmwiAUEATgRAIAFBA3QhAyAHRQ0BIABFDQEgAyAHbSACbUEIRg0BC0GgzQBBMDYCAEF/IQIMAQtBfyECQRAQDyIJRQ0AIAkgBzYCBCAJIAU2AgAgCSAANgIIIAlBASADQQggARsQCiIDNgIMAkACQAJAIAMEQCAHQQBMDQMgB0EBcSEOIABBA3QhBCALKAIIIQggCygCDCEPIAdBAWsiCg0BQQAhAgwCCyAJEAkMAwsgB0F+cSEMQQAhAkEAIQEDQCADIAAgAmxBA3RqIA8gAiAIbEEDdGogBBAQGiADIAJBAXIiEiAAbEEDdGogDyAIIBJsQQN0aiAEEBAaIAJBAmohAiABQQJqIgEgDEcNAAsLIA4EQCADIAAgAmxBA3RqIA8gAiAIbEEDdGogBBAQGgsCQCAFIAVBwABtIgFBBnRrIgJFDQAgB0EATA0BQn9BwAAgAmuthiFIIAMgAUEDdGohAUEAIQIgCkEDTwRAIAdBfHEhBEEAIQMDQCABIAAgAmxBA3RqIgggCCkDACBIgzcDACABIAJBAXIgAGxBA3RqIgggCCkDACBIgzcDACABIAJBAnIgAGxBA3RqIgggCCkDACBIgzcDACABIAJBA3IgAGxBA3RqIgggCCkDACBIgzcDACACQQRqIQIgA0EEaiIDIARHDQALCyAHQQNxIgNFDQADQCABIAAgAmxBA3RqIgQgBCkDACBIgzcDACACQQFqIQIgDUEBaiINIANHDQALCyAHQQBMDQAgB0EBayECIBdBBGohD0EAIQADQCAAQUBxIQADQAJAIAIhBwJAIABBAEgNACAAIAVODQAgCSgCDCAJKAIIIAdsQQN0aiEBA0AgASAAQQN2aikDAFBFBEADQAJAIABBAEgNACAAIAVODQAgByAJKAIETg0AQoCAgICAgICAgH8gAEE/ca2IIkggASAAQQZ2QQN0IgJqKQMAg0IAUg0FCyAAQQFqIQAMAAsACyAAQUBrIgBBAEgNASAAIAVIDQALCyAHQQFrIQJBACEAIAdBAEoNAQwDCwtBACEBQStBLQJ/QQAgACALKAIATg0AGkEAIAdBAEgNABpBACAHIAsoAgRODQAaIAsoAgwgCygCCCAHbEEDdGogAmopAwAgSINCAFILIgIbIRQgAkUgECgCBCIKQQFGcSAKRSACQQBHcSAKQQNGcnIhFkIAIUhBfyEFQQAhA0EAIQwgB0EBaiIVIQ0gACECQQAhCANAIAEhBAJAAkACQCADIAxOBEAgCAJ/IAxB5ABqt0TNzMzMzMz0P6IiIplEAAAAAAAA4EFjBEAgIqoMAQtBgICAgHgLIgxBA3QQLyIBRQ0BIAEhCAsgCCADQQN0aiIBIA02AgQgASACNgIAIANBAWohAyBIIAIgBGoiAiAFbKx8IUggACACRiAVIAUgDWoiDUZxRQRAQQAhDkEAIQECQCACIAQgBWpBAWtBAm0iE2oiEkEASA0AIBIgCSgCAE4NACANIAUgBEF/c2pBAm1qIhFBAEgNACARIAkoAgRODQAgCSgCDCAJKAIIIBFsQQN0aiASQQN2Qfj///8BcWopAwAgEkE/ca2GQj+IpyEBCwJAIAIgBCAFQX9zakECbWoiEkEASA0AIBIgCSgCAE4NACANIBNqIhFBAEgNACARIAkoAgRODQAgCSgCDCAJKAIIIBFsQQN0aiASQQN2Qfj///8BcWopAwAgEkE/ca2GQj+IpyEOCwJAIAFFDQAgDg0AIBYNBAJAAkACQAJAIApBBGsOAwEAAgMLIAkgAiANEC0NBwwCCyAJIAIgDRAtDQEMBgsgAkH1xs8lbCANc0GT36MtbCIBQQh2Qf8BcUHQDWotAAAgAUH/AXFB0A1qLQAAcyABQRB2Qf8BcUHQDWotAABzIAFBGHZB0A1qLQAARw0FC0EAIAVrIQEgBCEFDAULIAEEQCAFIQFBACAEayEFDAULIARBACAFayAOGyEBIAUgBCAOGyEFDAQLAn8CQEEBQSQQCiIBRQ0AQQFB5AAQCiICRQ0AIAEgAjYCICABDAELIAEQCUEACyIBDQELIAgQCSAJKAIMIgAEQAJAIAkoAggiAUEATg0AIAkoAgQiAkUNACAAIAJBAWsgAWxBA3RqIQALIAAQCQsgCRAJQX8hAiAXKAIEIgBFDQUDQCAAKAIUIQEgAEEANgIUIAAQIyABIgANAAsMBQsgASgCICICIAM2AgAgAiAINgIEIAEgFDYCBCABIEhC/////wcgSEL/////B1QbPgIAIAkgAhAqAkAgASgCACAQKAIATARAIAEQIwwBCyABIA8oAgA2AhQgDyABNgIAIAFBFGohDwsgB0EASA0DIAkoAgAhBSAHIQIMAgsgBSEBQQAgBGshBQwACwALAAsgFyAXKAIEIgQ2AgwCf0F/IAkoAggiCiAKQR91IgBzIABrIgEgCSgCBCISbCIAQQBIDQAaIABBA3QhAAJAIBJFDQAgCkUNAEF/IAAgEm0gAW1BCEcNARoLIAALIQAgCSgCDEEAIBJBAWsgCmwiFEEAIBIbIApBAE4bQQN0akEAIAAQDhoCQCAERQ0AIAQhAANAIABBADYCGCAAIAAoAhQiADYCHCAADQALIAQhAANAIAAoAhghDyAAKAIUIQIgAEIANwIUIAkgACgCIBAqAkAgACgCICIBKAIAIhZBAEwEQEH/////ByEFQQAhDkEAIQhB/////wchEQwBCyABKAIEIRVB/////wchBUEAIQ5BACEIQf////8HIRFBACEHQf////8HIQ1BACEDQf////8HIQxBACEBA0AgFSABQQN0aiITKAIEIgsgByAHIAtIIhgbIQcgCyAOIBgbIQ4gCyANIAsgDUgiGBshDSALIAUgGBshBSATKAIAIgsgAyADIAtIIhMbIQMgCyAIIBMbIQggCyAMIAsgDEgiExshDCALIBEgExshESABQQFqIgEgFkcNAAsLIABBFGohAyAAIgtBGGohAQJAIAJFDQADQCACKAIUIQ0gAkEANgIUIAUgAigCICgCBCIMKAIEIgdOBEAgAyACNgIAIAIgDTYCFAwCCyACQRRqIQACQAJAIAwoAgAiDEEASA0AIAwgCSgCAE4NACAHQQBMDQAgByASSg0AIAkoAgwgCiAHQQFrbEEDdGogDEEDdkH4////AXFqKQMAIAxBP3GthkKAgICAgICAgIB/g1ANACABIQcgACEBDAELIAMhByAAIQMLIAIgBygCADYCFCAHIAI2AgAgDSICDQALCyARQcAAbSEBIAhBP2pBwABtIQACQCAFIA5ODQAgACABTA0AIA4gBWsiDUEDcSEIIAAgAWtBA3QhAiAJKAIMIQdBACEDQQAhACAOIAVBf3NqQQNPBEAgDUF8cSENQQAhDANAIAcgACAFaiAKbCABakEDdGpBACACEA4aIAcgAEEBciAFaiAKbCABakEDdGpBACACEA4aIAcgAEECciAFaiAKbCABakEDdGpBACACEA4aIAcgAEEDciAFaiAKbCABakEDdGpBACACEA4aIABBBGohACAMQQRqIgwgDUcNAAsLIAhFDQADQCAHIAAgBWogCmwgAWpBA3RqQQAgAhAOGiAAQQFqIQAgA0EBaiIDIAhHDQALCwJAIAsoAhQiAEUEQCAPIQAMAQsgACAPNgIYCyALKAIYIgEEQCABIAA2AhggCygCGCEACyAADQALIBcoAgwiA0UNACADIQADQCAAKAIcIQEgACAAKAIUNgIcIAEiAA0ACyADQQA2AhQgF0EANgIMIBdBDGohAEEAIQUDQCAXIAU2AggDQCADIAAoAgA2AhQgACADNgIAIANBFGohACADKAIYIgcEQANAIAcgACgCADYC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QCAaQQE2AgALIBohBgsgH0EQaiQAIAYLXQEDf0EIEAIiAUHYKjYCACABQYQrNgIAIAAQFyICQQ1qEBIiA0EANgIIIAMgAjYCBCADIAI2AgAgASADQQxqIAAgAkEBahAQNgIEIAFBtCs2AgAgAUHUK0ECEAEACwgAQZ0IED0AC5sEAQN/IAEgACABRiICOgAMAkAgAg0AA0AgASgCCCICLQAMDQECQAJ/IAIgAigCCCIDKAIAIgRGBEACQCADKAIEIgRFDQAgBC0ADA0ADAMLAkAgASACKAIARgRAIAIhAQwBCyACIAIoAgQiASgCACIANgIEIAEgAAR/IAAgAjYCCCACKAIIBSADCzYCCCACKAIIIgAgACgCACACR0ECdGogATYCACABIAI2AgAgAiABNgIIIAEoAgghAwsgAUEBOgAMIANBADoADCADIAMoAgAiACgCBCIBNgIAIAEEQCABIAM2AggLIAAgAygCCDYCCCADKAIIIgEgASgCACADR0ECdGogADYCACAAIAM2AgQgA0EIagwBCwJAIARFDQAgBC0ADA0ADAILAkAgASACKAIARwRAIAIhAQwBCyACIAEoAgQiADYCACABIAAEfyAAIAI2AgggAigCCAUgAws2AgggAigCCCIAIAAoAgAgAkdBAnRqIAE2AgAgASACNgIEIAIgATYCCCABKAIIIQMLIAFBAToADCADQQA6AAwgAyADKAIEIgAoAgAiATYCBCABBEAgASADNgIICyAAIAMoAgg2AgggAygCCCIBIAEoAgAgA0dBAnRqIAA2AgAgACADNgIAIANBCGoLIAA2AgAMAgsgBEEMaiEBIAJBAToADCADIAAgA0YiAjoADCABQQE6AAAgAyEBIAJFDQALCwsQACMAIABrQXBxIgAkACAACwYAIAAkAAsEACMACwsAIAAQIBogABAJCwcAIAAoAgQLCAAgABAgEAkLBQBBpAgLGgAgACABKAIIIAUQEQRAIAEgAiADIAQQKwsLNwAgACABKAIIIAUQEQRAIAEgAiADIAQQKw8LIAAoAggiACABIAIgAyAEIAUgACgCACgCFBEIAAunAQAgACABKAIIIAQQEQRAAkAgASgCBCACRw0AIAEoAhxBAUYNACABIAM2AhwLDwsCQCAAIAEoAgAgBBARRQ0AAkAgAiABKAIQRwRAIAEoAhQgAkcNAQsgA0EBRw0BIAFBATYCIA8LIAEgAjYCFCABIAM2AiAgASABKAIoQQFqNgIoAkAgASgCJEEBRw0AIAEoAhhBAkcNACABQQE6ADYLIAFBBDYCLAsLiAIAIAAgASgCCCAEEBEEQAJAIAEoAgQgAkcNACABKAIcQQFGDQAgASADNgIcCw8LAkAgACABKAIAIAQQEQRAAkAgAiABKAIQRwRAIAEoAhQgAkcNAQsgA0EBRw0CIAFBATYCIA8LIAEgAzYCIAJAIAEoAixBBEYNACABQQA7ATQgACgCCCIAIAEgAiACQQEgBCAAKAIAKAIUEQgAIAEtADUEQCABQQM2AiwgAS0ANEUNAQwDCyABQQQ2AiwLIAEgAjYCFCABIAEoAihBAWo2AiggASgCJEEBRw0BIAEoAhhBAkcNASABQQE6ADYPCyAAKAIIIgAgASACIAMgBCAAKAIAKAIYEQcACwsxACAAIAEoAghBABARBEAgASACIAMQLA8LIAAoAggiACABIAIgAyAAKAIAKAIcEQUACxgAIAAgASgCCEEAEBEEQCABIAIgAxAsCwu3AwEFfyMAQUBqIgQkAAJ/QQEgACABQQAQEQ0AGkEAIAFFDQAaIwBBQGoiAyQAIAEoAgAiBUEEaygCACEGIAVBCGsoAgAhByADQQA2AhQgA0GQKTYCECADIAE2AgwgA0HAKTYCCEEAIQUgA0EYakEAQScQDhogASAHaiEBAkAgBkHAKUEAEBEEQCADQQE2AjggBiADQQhqIAEgAUEBQQAgBigCACgCFBEIACABQQAgAygCIEEBRhshBQwBCyAGIANBCGogAUEBQQAgBigCACgCGBEHAAJAAkAgAygCLA4CAAECCyADKAIcQQAgAygCKEEBRhtBACADKAIkQQFGG0EAIAMoAjBBAUYbIQUMAQsgAygCIEEBRwRAIAMoAjANASADKAIkQQFHDQEgAygCKEEBRw0BCyADKAIYIQULIANBQGskAEEAIAUiAUUNABogBEEIaiIDQQRyQQBBNBAOGiAEQQE2AjggBEF/NgIUIAQgADYCECAEIAE2AgggASADIAIoAgBBASABKAIAKAIcEQUAIAQoAiAiAEEBRgRAIAIgBCgCGDYCAAsgAEEBRgshACAEQUBrJAAgAAsFAEG3CAupAQEEfyAAKAJUIgMoAgQiBSAAKAIUIAAoAhwiBmsiBCAEIAVLGyIEBEAgAygCACAGIAQQEBogAyADKAIAIARqNgIAIAMgAygCBCAEayIFNgIECyADKAIAIQQgBSACIAIgBUsbIgUEQCAEIAEgBRAQGiADIAMoAgAgBWoiBDYCACADIAMoAgQgBWs2AgQLIARBADoAACAAIAAoAiwiATYCHCAAIAE2AhQgAguPBQIGfgF/IAEgASgCAEEHakF4cSIBQRBqNgIAIAACfCABKQMAIQQgASkDCCEFIwBBIGsiACQAAkAgBUL///////////8AgyIDQoCAgICAgMCAPH0gA0KAgICAgIDA/8MAfVQEQCAFQgSGIARCPIiEIQMgBEL//////////w+DIgRCgYCAgICAgIAIWgRAIANCgYCAgICAgIDAAHwhAgwCCyADQoCAgICAgICAQH0hAiAEQoCAgICAgICACIVCAFINASACIANCAYN8IQIMAQsgBFAgA0KAgICAgIDA//8AVCADQoCAgICAgMD//wBRG0UEQCAFQgSGIARCPIiEQv////////8Dg0KAgICAgICA/P8AhCECDAELQoCAgICAgID4/wAhAiADQv///////7//wwBWDQBCACECIANCMIinIgFBkfcASQ0AIAQhAiAFQv///////z+DQoCAgICAgMAAhCIDIQYCQCABQYH3AGsiCEHAAHEEQCACIAhBQGqthiEGQgAhAgwBCyAIRQ0AIAYgCK0iB4YgAkHAACAIa62IhCEGIAIgB4YhAgsgACACNwMQIAAgBjcDGAJAQYH4ACABayIBQcAAcQRAIAMgAUFAaq2IIQRCACEDDAELIAFFDQAgA0HAACABa62GIAQgAa0iAoiEIQQgAyACiCEDCyAAIAQ3AwAgACADNwMIIAApAwhCBIYgACkDACIEQjyIhCECIAApAxAgACkDGIRCAFKtIARC//////////8Pg4QiBEKBgICAgICAgAhaBEAgAkIBfCECDAELIARCgICAgICAgIAIhUIAUg0AIAJCAYMgAnwhAgsgAEEgaiQAIAIgBUKAgICAgICAgIB/g4S/CzkDAAuoGAMSfwF8An4jAEGwBGsiCyQAIAtBADYCLAJAIAG9IhlCAFMEQEEBIRBBigghEyABmiIBvSEZDAELIARBgBBxBEBBASEQQY0IIRMMAQtBkAhBiwggBEEBcSIQGyETIBBFIRUL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AQAAAQEAAQAAAAAAAAEAAAAAAQEBAQABAQAAAQEAAAEBAAEBAAAAAQEBAQABAAAAAAEAAQEBAAAAAQABAQAAAQEBAAEAAAEBAAABAQEAAAEBAQAAAAABAAEAAQABAAEAMDEyMzQ1Njc4OUFCQ0RFRgAAAACsCAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAAoAAAALAAAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJWjExc3RhcnRfY29sb3JQalA5aW1naW5mb19zUDE1cG90cmFjZV9wYXJhbV9zUDlzdmdpbmZvX3NoaEUzJF8wTlNfOWFsbG9jYXRvcklTOV9FRUZoaEVFRQBOU3QzX18yMTBfX2Z1bmN0aW9uNl9fYmFzZUlGaGhFRUUAAADUFAAAgAgAAPwUAAAMCAAApAgAAFoxMXN0YXJ0X2NvbG9yUGpQOWltZ2luZm9fc1AxNXBvdHJhY2VfcGFyYW1fc1A5c3ZnaW5mb19zaGhFMyRfMADUFAAAuAgAAAAAAACgCQAAAwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJWjExc3RhcnRfY29sb3JQalA5aW1naW5mb19zUDE1cG90cmFjZV9wYXJhbV9zUDlzdmdpbmZvX3NoaEUzJF8xTlNfOWFsbG9jYXRvcklTOV9FRUZoaEVFRQD8FAAALAkAAKQIAABaMTFzdGFydF9jb2xvclBqUDlpbWdpbmZvX3NQMTVwb3RyYWNlX3BhcmFtX3NQOXN2Z2luZm9fc2hoRTMkXzEA1BQAAKwJAAD4FQAATm8gZXJyb3IgaW5mb3JtYXRpb24ASWxsZWdhbCBieXRlIHNlcXVlbmNlAERvbWFpbiBlcnJvcgBSZXN1bHQgbm90IHJlcHJlc2VudGFibGUATm90IGEgdHR5AFBlcm1pc3Npb24gZGVuaWVkAE9wZXJhdGlvbiBub3QgcGVybWl0dGVkAE5vIHN1Y2ggZmlsZSBvciBkaXJlY3RvcnkATm8gc3VjaCBwcm9jZXNzAEZpbGUgZXhpc3RzAFZhbHVlIHRvbyBsYXJnZSBmb3IgZGF0YSB0eXBlAE5vIHNwYWNlIGxlZnQgb24gZGV2aWNlAE91dCBvZiBtZW1vcnkAUmVzb3VyY2UgYnVzeQBJbnRlcnJ1cHRlZCBzeXN0ZW0gY2FsbABSZXNvdXJjZSB0ZW1wb3JhcmlseSB1bmF2YWlsYWJsZQBJbnZhbGlkIHNlZWsAQ3Jvc3MtZGV2aWNlIGxpbmsAUmVhZC1vbmx5IGZpbGUgc3lzdGVtAERpcmVjdG9yeSBub3QgZW1wdHkAQ29ubmVjdGlvbiByZXNldCBieSBwZWVyAE9wZXJhdGlvbiB0aW1lZCBvdXQAQ29ubmVjdGlvbiByZWZ1c2VkAEhvc3QgaXMgZG93bgBIb3N0IGlzIHVucmVhY2hhYmxlAEFkZHJlc3MgaW4gdXNlAEJyb2tlbiBwaXBlAEkvTyBlcnJvcgBObyBzdWNoIGRldmljZSBvciBhZGRyZXNzAEJsb2NrIGRldmljZSByZXF1aXJlZABObyBzdWNoIGRldmljZQBOb3QgYSBkaXJlY3RvcnkASXMgYSBkaXJlY3RvcnkAVGV4dCBmaWxlIGJ1c3kARXhlYyBmb3JtYXQgZXJyb3IASW52YWxpZCBhcmd1bWVudABBcmd1bWVudCBsaXN0IHRvbyBsb25nAFN5bWJvbGljIGxpbmsgbG9vcABGaWxlbmFtZSB0b28gbG9uZwBUb28gbWFueSBvcGVuIGZpbGVzIGluIHN5c3RlbQBObyBmaWxlIGRlc2NyaXB0b3JzIGF2YWlsYWJsZQBCYWQgZmlsZSBkZXNjcmlwdG9yAE5vIGNoaWxkIHByb2Nlc3MAQmFkIGFkZHJlc3MARmlsZSB0b28gbGFyZ2UAVG9vIG1hbnkgbGlua3MATm8gbG9ja3MgYXZhaWxhYmxlAFJlc291cmNlIGRlYWRsb2NrIHdvdWxkIG9jY3VyAFN0YXRlIG5vdCByZWNvdmVyYWJsZQBQcmV2aW91cyBvd25lciBkaWVkAE9wZXJhdGlvbiBjYW5jZWxlZABGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQATm8gbWVzc2FnZSBvZiBkZXNpcmVkIHR5cGUASWRlbnRpZmllciByZW1vdmVkAERldmljZSBub3QgYSBzdHJlYW0ATm8gZGF0YSBhdmFpbGFibGUARGV2aWNlIHRpbWVvdXQAT3V0IG9mIHN0cmVhbXMgcmVzb3VyY2VzAExpbmsgaGFzIGJlZW4gc2V2ZXJlZABQcm90b2NvbCBlcnJvcgBCYWQgbWVzc2FnZQBGaWxlIGRlc2NyaXB0b3IgaW4gYmFkIHN0YXRlAE5vdCBhIHNvY2tldABEZXN0aW5hdGlvbiBhZGRyZXNzIHJlcXVpcmVkAE1lc3NhZ2UgdG9vIGxhcmdlAFByb3RvY29sIHdyb25nIHR5cGUgZm9yIHNvY2tldABQcm90b2NvbCBub3QgYXZhaWxhYmxlAFByb3RvY29sIG5vdCBzdXBwb3J0ZWQAU29ja2V0IHR5cGUgbm90IHN1cHBvcnRlZABOb3Qgc3VwcG9ydGVkAFByb3RvY29sIGZhbWlseSBub3Qgc3VwcG9ydGVkAEFkZHJlc3MgZmFtaWx5IG5vdCBzdXBwb3J0ZWQgYnkgcHJvdG9jb2wAQWRkcmVzcyBub3QgYXZhaWxhYmxlAE5ldHdvcmsgaXMgZG93bgBOZXR3b3JrIHVucmVhY2hhYmxlAENvbm5lY3Rpb24gcmVzZXQgYnkgbmV0d29yawBDb25uZWN0aW9uIGFib3J0ZWQATm8gYnVmZmVyIHNwYWNlIGF2YWlsYWJsZQBTb2NrZXQgaXMgY29ubmVjdGVkAFNvY2tldCBub3QgY29ubmVjdGVkAENhbm5vdCBzZW5kIGFmdGVyIHNvY2tldCBzaHV0ZG93bgBPcGVyYXRpb24gYWxyZWFkeSBpbiBwcm9ncmVzcwBPcGVyYXRpb24gaW4gcHJvZ3Jlc3MAU3RhbGUgZmlsZSBoYW5kbGUAUmVtb3RlIEkvTyBlcnJvcgBRdW90YSBleGNlZWRlZABObyBtZWRpdW0gZm91bmQAV3JvbmcgbWVkaXVtIHR5cGUATXVsdGlob3AgYXR0ZW1wdGVkAEGiIguWAaUCWwDwAbUFjAUlAYMGHQOUBP8AxwMxAwsGvAGPAX8DygQrANoGrwBCA04D3AEOBBUAoQYNAZQCCwI4BmQCvAL/Al0D5wQLB88CywXvBdsF4QIeBkUChQCCAmwDbwTxAPMDGAXZANoDTAZUAnsBnQO9BAAAUQAVArsAswNtAP8BhQQvBfkEOABlAUYBnwC3BqgBcwJTAQBB6CMLDCEEAAAAAAAAAAAvAgBBiCQLBjUERwRWBABBniQLAqAEAEGyJAtfRgVgBW4FYQYAAM8BAAAAAAAAAADJBukG+QYAAAAAGQAKABkZGQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAAZABEKGRkZAwoHAAEACQsYAAAJBgsAAAsABhkAAAAZGRkAQaElCyEOAAAAAAAAAAAZAAoNGRkZAA0AAAIACQ4AAAAJAA4AAA4AQdslCwEMAEHnJQsVEwAAAAATAAAAAAkMAAAAAAAMAAAMAEGVJgsBEABBoSYLFQ8AAAAEDwAAAAAJEAAAAAAAEAAAEABBzyYLARIAQdsmCx4RAAAAABEAAAAACRIAAAAAABIAABIAABoAAAAaGhoAQZInCw4aAAAAGhoaAAAAAAAACQBBwycLARQAQc8nCxUXAAAAABcAAAAACRQAAAAAABQAABQAQf0nCwEWAEGJKAvtAxUAAAAAFQAAAAAJFgAAAAAAFgAAFgAAMDEyMzQ1Njc4OUFCQ0RFRgAAAABgFAAAAQAAAB0AAAAeAAAATlN0M19fMjE3YmFkX2Z1bmN0aW9uX2NhbGxFAPwUAABEFAAAdBUAAE4xMF9fY3h4YWJpdjExNl9fc2hpbV90eXBlX2luZm9FAAAAAPwUAABsFAAA8BUAAE4xMF9fY3h4YWJpdjExN19fY2xhc3NfdHlwZV9pbmZvRQAAAPwUAACcFAAAkBQAAAAAAADAFAAAHwAAACAAAAAhAAAAIgAAACMAAAAkAAAAJQAAACYAAAAAAAAARBUAAB8AAAAnAAAAIQAAACIAAAAjAAAAKAAAACkAAAAqAAAATjEwX19jeHhhYml2MTIwX19zaV9jbGFzc190eXBlX2luZm9FAAAAAPwUAAAcFQAAwBQAAAAAAAB0FQAAKwAAACwAAAAtAAAAU3Q5ZXhjZXB0aW9uAAAAANQUAABkFQAAAAAAAKAVAAACAAAALgAAAC8AAABTdDExbG9naWNfZXJyb3IA/BQAAJAVAAB0FQAAAAAAANQVAAACAAAAMAAAAC8AAABTdDEybGVuZ3RoX2Vycm9yAAAAAPwUAADAFQAAoBUAAFN0OXR5cGVfaW5mbwAAAADUFAAA4BUAQfgrCwEFAEGELAsBFwBBnCwLChgAAAAZAAAAYCcAQbQsCwECAEHELAsI//////////8AQYgtCwf4FQAAYClQ") || (Bt = Ce, Ce = Q.locateFile ? Q.locateFile(Bt, be) : be + Bt);
var fi = [];

function kn(i) {
    var e = fi[i];
    return e || (i >= fi.length && (fi.length = i + 1), fi[i] = e = la.get(i)), e
}

function Oc(i) {
    this.excPtr = i, this.ptr = i - 16, this.set_type = function(e) {
        ue[this.ptr + 4 >> 2] = e
    }, this.get_type = function() {
        return ue[this.ptr + 4 >> 2]
    }, this.set_destructor = function(e) {
        ue[this.ptr + 8 >> 2] = e
    }, this.get_destructor = function() {
        return ue[this.ptr + 8 >> 2]
    }, this.set_refcount = function(e) {
        ue[this.ptr >> 2] = e
    }, this.set_caught = function(e) {
        e = e ? 1 : 0, ys[this.ptr + 12 >> 0] = e
    }, this.get_caught = function() {
        return ys[this.ptr + 12 >> 0] != 0
    }, this.set_rethrown = function(e) {
        e = e ? 1 : 0, ys[this.ptr + 13 >> 0] = e
    }, this.get_rethrown = function() {
        return ys[this.ptr + 13 >> 0] != 0
    }, this.init = function(e, s) {
        this.set_type(e), this.set_destructor(s), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
    }, this.add_ref = function() {
        var e = ue[this.ptr >> 2];
        ue[this.ptr >> 2] = e + 1
    }, this.release_ref = function() {
        var e = ue[this.ptr >> 2];
        return ue[this.ptr >> 2] = e - 1, e === 1
    }
}

function Yc(i) {
    try {
        return Wt.grow(i - na.byteLength + 65535 >>> 16), Aa(Wt.buffer), 1
    } catch {}
}
var vi = {
        buffers: [null, [],
            []
        ],
        printChar: function(i, e) {
            var s = vi.buffers[i];
            e === 0 || e === 10 ? ((i === 1 ? Gc : vs)(oa(s, 0)), s.length = 0) : s.push(e)
        },
        varargs: void 0,
        get: function() {
            return vi.varargs += 4, ue[vi.varargs - 4 >> 2]
        },
        getStr: function(i) {
            return aa(i)
        },
        get64: function(i, e) {
            return i
        }
    },
    Kc = typeof atob == "function" ? atob : function(i) {
        var e, s, t, n, o, a, A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            l = "",
            c = 0;
        i = i.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do e = A.indexOf(i.charAt(c++)) << 2 | (n = A.indexOf(i.charAt(c++))) >> 4, s = (15 & n) << 4 | (o = A.indexOf(i.charAt(c++))) >> 2, t = (3 & o) << 6 | (a = A.indexOf(i.charAt(c++))), l += String.fromCharCode(e), o !== 64 && (l += String.fromCharCode(s)), a !== 64 && (l += String.fromCharCode(t)); while (c < i.length);
        return l
    };

function Es(i) {
    if (pr(i)) return (function(e) {
        if (typeof $t == "boolean" && $t) {
            var s = Buffer.from(e, "base64");
            return new Uint8Array(s.buffer, s.byteOffset, s.byteLength)
        }
        try {
            for (var t = Kc(e), n = new Uint8Array(t.length), o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
            return n
        } catch {
            throw new Error("Converting base64 string to bytes failed.")
        }
    })(i.slice(37))
}
var Oi, qc = {
        c: function(i) {
            return da(i + 16) + 16
        },
        b: function(i, e, s) {
            throw new Oc(i).init(e, s), i
        },
        f: function() {
            zi("")
        },
        i: function(i, e, s) {
            Ds.copyWithin(i, e, e + s)
        },
        g: function(i) {
            var e, s, t = Ds.length,
                n = 2147483648;
            if ((i >>>= 0) > n) return !1;
            for (var o = 1; o <= 4; o *= 2) {
                var a = t * (1 + .2 / o);
                if (a = Math.min(a, i + 100663296), Yc(Math.min(n, (e = Math.max(i, a)) + ((s = 65536) - e % s) % s))) return !0
            }
            return !1
        },
        d: function(i) {
            (function(e, s) {
                (function(t) {
                    Ir(t, new Ia(t))
                })(e)
            })(i)
        },
        h: function(i) {
            return 0
        },
        e: function(i, e, s, t, n) {},
        a: function(i, e, s, t) {
            for (var n = 0, o = 0; o < s; o++) {
                var a = ue[e >> 2],
                    A = ue[e + 4 >> 2];
                e += 8;
                for (var l = 0; l < A; l++) vi.printChar(i, Ds[a + l]);
                n += A
            }
            return ue[t >> 2] = n, 0
        }
    },
    da = ((function() {
        var i = {
            a: qc
        };

        function e(n, o) {
            var a, A = n.exports;
            Q.asm = A, Aa((Wt = Q.asm.j).buffer), la = Q.asm.n, a = Q.asm.k, ca.unshift(a), (function(l) {
                if (as--, Q.monitorRunDependencies && Q.monitorRunDependencies(as), as == 0 && ei) {
                    var c = ei;
                    ei = null, c()
                }
            })()
        }

        function s(n) {
            e(n.instance)
        }

        function t(n) {
            return (function() {
                if (!ai && (ia || Ws)) {
                    if (typeof fetch == "function" && !Nn(Ce)) return fetch(Ce, {
                        credentials: "same-origin"
                    }).then((function(o) {
                        if (!o.ok) throw "failed to load wasm binary file at '" + Ce + "'";
                        return o.arrayBuffer()
                    })).catch((function() {
                        return Rn(Ce)
                    }));
                    if (Gi) return new Promise((function(o, a) {
                        Gi(Ce, (function(A) {
                            o(new Uint8Array(A))
                        }), a)
                    }))
                }
                return Promise.resolve().then((function() {
                    return Rn(Ce)
                }))
            })().then((function(o) {
                return WebAssembly.instantiate(o, i)
            })).then((function(o) {
                return o
            })).then(n, (function(o) {
                vs("failed to asynchronously prepare wasm: " + o), zi(o)
            }))
        }
        if (as++, Q.monitorRunDependencies && Q.monitorRunDependencies(as), Q.instantiateWasm) try {
            return Q.instantiateWasm(i, e)
        } catch (n) {
            return vs("Module.instantiateWasm callback failed with error: " + n), !1
        }
        ai || typeof WebAssembly.instantiateStreaming != "function" || pr(Ce) || Nn(Ce) || typeof fetch != "function" ? t(s) : fetch(Ce, {
            credentials: "same-origin"
        }).then((function(n) {
            return WebAssembly.instantiateStreaming(n, i).then(s, (function(o) {
                return vs("wasm streaming compile failed: " + o), vs("falling back to ArrayBuffer instantiation"), t(s)
            }))
        }))
    })(), Q.___wasm_call_ctors = function() {
        return (Q.___wasm_call_ctors = Q.asm.k).apply(null, arguments)
    }, Q._malloc = function() {
        return (da = Q._malloc = Q.asm.l).apply(null, arguments)
    }),
    ua = (Q._start = function() {
        return (Q._start = Q.asm.m).apply(null, arguments)
    }, Q.stackSave = function() {
        return (ua = Q.stackSave = Q.asm.o).apply(null, arguments)
    }),
    ha = Q.stackRestore = function() {
        return (ha = Q.stackRestore = Q.asm.p).apply(null, arguments)
    },
    Zt = Q.stackAlloc = function() {
        return (Zt = Q.stackAlloc = Q.asm.q).apply(null, arguments)
    };

function Ia(i) {
    this.name = "ExitStatus", this.message = "Program terminated with exit(" + i + ")", this.status = i
}

function Xt(i) {
    function e() {
        Oi || (Oi = !0, Q.calledRun = !0, ta || (ga = !0, Qt(ca), Q.onRuntimeInitialized && Q.onRuntimeInitialized(), (function() {
            if (Q.postRun)
                for (typeof Q.postRun == "function" && (Q.postRun = [Q.postRun]); Q.postRun.length;) s = Q.postRun.shift(), Sn.unshift(s);
            var s;
            Qt(Sn)
        })()))
    }
    as > 0 || ((function() {
        if (Q.preRun)
            for (typeof Q.preRun == "function" && (Q.preRun = [Q.preRun]); Q.preRun.length;) s = Q.preRun.shift(), jn.unshift(s);
        var s;
        Qt(jn)
    })(), as > 0 || (Q.setStatus ? (Q.setStatus("Running..."), setTimeout((function() {
        setTimeout((function() {
            Q.setStatus("")
        }), 1), e()
    }), 1)) : e()))
}
if (ei = function i() {
        Oi || Xt(), Oi || (ei = i)
    }, Q.run = Xt, Q.preInit)
    for (typeof Q.preInit == "function" && (Q.preInit = [Q.preInit]); Q.preInit.length > 0;) Q.preInit.pop()();
Xt();
const Hc = async (i, e = {}) => {
    let s;
    e = Object.assign({
        turdsize: 2,
        turnpolicy: 4,
        alphamax: 1,
        opticurve: 1,
        opttolerance: .2,
        pathonly: !1,
        extractcolors: !0,
        posterizelevel: 5,
        posterizationalgorithm: 1
    }, e);
    const t = i.constructor.name;
    if (t === "Blob") s = await (async () => new Promise((d => {
        const u = URL.createObjectURL(i),
            h = new Image;
        h.onload = () => {
            const I = document.createElement("canvas"),
                p = I.getContext("2d");
            if (!p) throw new Error("Canvas is not supported.");
            const m = h;
            I.width = Number(m.width), I.height = Number(m.height), p.drawImage(m, 0, 0, I.width, I.height), d(p.getImageData(0, 0, I.width, I.height))
        }, h.src = u
    })))();
    else if (t === "HTMLImageElement" || t === "SVGImageElement" || t === "HTMLVideoElement" || t === "HTMLCanvasElement" || t === "ImageBitmap") {
        const d = document.createElement("canvas"),
            u = d.getContext("2d");
        if (!u) throw new Error("Canvas is not supported.");
        const h = i;
        d.width = Number(h.width), d.height = Number(h.height), u.drawImage(h, 0, 0, d.width, d.height), s = u.getImageData(0, 0, d.width, d.height)
    } else s = i;
    const n = (o = "start", a = "string", c = (A = (A = ["array", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number"]) || []).every((function(d) {
        return d === "number"
    })), a !== "string" && c && !l ? ra(o) : function() {
        return Uc(o, a, A, arguments)
    });
    var o, a, A, l, c;
    await pa();
    const g = n(s.data, s.width, s.height, !0, e.pathonly, e.extractcolors, e.posterizelevel, e.posterizationalgorithm, e.turdsize, e.turnpolicy, e.alphamax, e.opticurve, e.opttolerance);
    return e.pathonly ? g.split("M").filter((d => d)).map((d => "M" + d)) : g
};

function pa() {
    return new Promise((i => {
        ga ? i() : Q.onRuntimeInitialized = () => {
            i()
        }
    }))
}
if (typeof module < "u") {
    const i = pa;
    module.exports = {
        potrace: Hc,
        init: i
    }
}
const $ = " ";

function Jc(i) {
    let e = "";
    Array.isArray(i) || (i = [i]);
    for (let s = 0; s < i.length; s++) {
        const t = i[s];
        if (t.type === C.CLOSE_PATH) e += "z";
        else if (t.type === C.HORIZ_LINE_TO) e += (t.relative ? "h" : "H") + t.x;
        else if (t.type === C.VERT_LINE_TO) e += (t.relative ? "v" : "V") + t.y;
        else if (t.type === C.MOVE_TO) e += (t.relative ? "m" : "M") + t.x + $ + t.y;
        else if (t.type === C.LINE_TO) e += (t.relative ? "l" : "L") + t.x + $ + t.y;
        else if (t.type === C.CURVE_TO) e += (t.relative ? "c" : "C") + t.x1 + $ + t.y1 + $ + t.x2 + $ + t.y2 + $ + t.x + $ + t.y;
        else if (t.type === C.SMOOTH_CURVE_TO) e += (t.relative ? "s" : "S") + t.x2 + $ + t.y2 + $ + t.x + $ + t.y;
        else if (t.type === C.QUAD_TO) e += (t.relative ? "q" : "Q") + t.x1 + $ + t.y1 + $ + t.x + $ + t.y;
        else if (t.type === C.SMOOTH_QUAD_TO) e += (t.relative ? "t" : "T") + t.x + $ + t.y;
        else if (t.type === C.ARC) e += (t.relative ? "a" : "A") + t.rX + $ + t.rY + $ + t.xRot + $ + +t.lArcFlag + $ + +t.sweepFlag + $ + t.x + $ + t.y;
        else throw new Error(`Unexpected command type "${t?.type}" at index ${s}.`)
    }
    return e
}

function er([i, e], s) {
    return [i * Math.cos(s) - e * Math.sin(s), i * Math.sin(s) + e * Math.cos(s)]
}

function ye(...i) {
    for (let e = 0; e < i.length; e++)
        if (typeof i[e] != "number") throw new Error(`assertNumbers arguments[${e}] is not a number. ${typeof i[e]} == typeof ${i[e]}`);
    return !0
}
const We = Math.PI;

function Cr(i, e, s) {
    i.lArcFlag = i.lArcFlag === 0 ? 0 : 1, i.sweepFlag = i.sweepFlag === 0 ? 0 : 1;
    let {
        rX: t,
        rY: n
    } = i;
    const {
        x: o,
        y: a
    } = i;
    if (Math.abs(t) < 1e-10 || Math.abs(n) < 1e-10) {
        i.rX = 0, i.rY = 0, i.cX = (e + o) / 2, i.cY = (s + a) / 2, i.phi1 = 0, i.phi2 = 0;
        return
    }
    t = Math.abs(i.rX), n = Math.abs(i.rY);
    const A = i.xRot / 180 * We,
        [l, c] = er([(e - o) / 2, (s - a) / 2], -A),
        g = Math.pow(l, 2) / Math.pow(t, 2) + Math.pow(c, 2) / Math.pow(n, 2);
    1 < g && (t *= Math.sqrt(g), n *= Math.sqrt(g)), i.rX = t, i.rY = n;
    const d = Math.pow(t, 2) * Math.pow(c, 2) + Math.pow(n, 2) * Math.pow(l, 2),
        u = (i.lArcFlag !== i.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(t, 2) * Math.pow(n, 2) - d) / d)),
        h = t * c / n * u,
        I = -n * l / t * u,
        p = er([h, I], A);
    i.cX = p[0] + (e + o) / 2, i.cY = p[1] + (s + a) / 2, i.phi1 = Math.atan2((c - I) / n, (l - h) / t), i.phi2 = Math.atan2((-c - I) / n, (-l - h) / t), i.sweepFlag === 0 && i.phi2 > i.phi1 && (i.phi2 -= 2 * We), i.sweepFlag === 1 && i.phi2 < i.phi1 && (i.phi2 += 2 * We), i.phi1 *= 180 / We, i.phi2 *= 180 / We
}

function Mn(i, e, s) {
    ye(i, e, s);
    const t = i * i + e * e - s * s;
    if (0 > t) return [];
    if (t === 0) return [
        [i * s / (i * i + e * e), e * s / (i * i + e * e)]
    ];
    const n = Math.sqrt(t);
    return [
        [(i * s + e * n) / (i * i + e * e), (e * s - i * n) / (i * i + e * e)],
        [(i * s - e * n) / (i * i + e * e), (e * s + i * n) / (i * i + e * e)]
    ]
}
const ns = Math.PI / 180;

function Fn(i, e, s) {
    return (1 - s) * i + s * e
}

function Pn(i, e, s, t) {
    return i + Math.cos(t / 180 * We) * e + Math.sin(t / 180 * We) * s
}

function Ln(i, e, s, t) {
    const o = e - i,
        a = s - e,
        A = t - s,
        l = 3 * o + 3 * A - 6 * a,
        c = (a - o) * 6,
        g = 3 * o;
    return Math.abs(l) < 1e-6 ? Math.abs(c) < 1e-6 ? [] : [-g / c] : zc(c / l, g / l, 1e-6)
}

function Tn(i, e, s, t, n) {
    const o = 1 - n,
        a = o * o * o,
        A = 3 * o * o * n,
        l = 3 * o * n * n,
        c = n * n * n;
    return i * a + e * A + s * l + t * c
}

function zc(i, e, s = 1e-6) {
    const t = i * i / 4 - e;
    if (t < -s) return [];
    if (t <= s) return [-i / 2];
    const n = Math.sqrt(t);
    return [-(i / 2) - n, -(i / 2) + n]
}

function Vc(i, e, s) {
    i.cX || Cr(i, e, s);
    const t = i.xRot / 180 * We;
    if (Math.abs(i.rX) < 1e-10 || Math.abs(i.rY) < 1e-10) return [{
        relative: i.relative,
        type: C.CURVE_TO,
        x1: e + (i.x - e) / 3,
        y1: s + (i.y - s) / 3,
        x2: e + 2 * (i.x - e) / 3,
        y2: s + 2 * (i.y - s) / 3,
        x: i.x,
        y: i.y
    }];
    const n = Math.min(i.phi1, i.phi2),
        o = Math.max(i.phi1, i.phi2),
        a = o - n,
        A = Math.ceil(a / 90),
        l = new Array(A);
    let c = e,
        g = s;
    const d = (u, h) => {
        const [I, p] = er([u * i.rX, h * i.rY], t);
        return [i.cX + I, i.cY + p]
    };
    for (let u = 0; u < A; u++) {
        const h = Fn(i.phi1, i.phi2, u / A),
            I = Fn(i.phi1, i.phi2, (u + 1) / A),
            p = I - h,
            m = 4 / 3 * Math.tan(p * ns / 4),
            E = Math.cos(h * ns) - m * Math.sin(h * ns),
            B = Math.sin(h * ns) + m * Math.cos(h * ns),
            v = Math.cos(I * ns),
            y = Math.sin(I * ns),
            b = v + m * y,
            k = y - m * v,
            R = d(E, B),
            S = d(b, k),
            M = d(v, y),
            G = {
                relative: i.relative,
                type: C.CURVE_TO,
                x: M[0],
                y: M[1],
                x1: R[0],
                y1: R[1],
                x2: S[0],
                y2: S[1]
            };
        i.relative && (G.x1 -= c, G.y1 -= g, G.x2 -= c, G.y2 -= g, G.x -= c, G.y -= g), c = M[0], g = M[1], l[u] = G
    }
    return l
}

function yi(i, e, s) {
    const t = e[0] - i[0],
        n = e[1] - i[1],
        o = s[0] - i[0],
        a = s[1] - i[1],
        A = t * a - n * o;
    if (!(Math.abs(A) < 1e-10)) return !1;
    const c = t * o + n * a,
        g = t * t + n * n,
        d = o * o + a * a;
    return 0 <= c && c <= d && g <= d
}

function $c(i) {
    if (i.length <= 2) return i;
    const e = [],
        s = i.map(H.INFO((n, o, a) => {
            const A = "relative" in n && n.relative;
            return ["x" in n ? n.x + (A ? o : 0) : o, "y" in n ? n.y + (A ? a : 0) : a]
        }));
    let t = s[0];
    e.push(i[0]);
    for (let n = 1; n < i.length; n++) {
        const o = i[n],
            a = i[n + 1];
        if (n < i.length - 1 && a && o.type & C.LINE_COMMANDS && a.type & C.LINE_COMMANDS) {
            const A = s[n + 1];
            if (yi(t, s[n], A)) {
                "relative" in a && a.relative && ("x" in a && (a.x = A[0] - t[0]), "y" in a && (a.y = A[1] - t[1]));
                continue
            }
        }
        e.push(o), t = s[n]
    }
    return e
}

function Wc(i, e = !0) {
    if (i.length < 2) return i;
    const s = H.INFO((o, a, A) => ({
            ...o,
            x: o.x ?? a,
            y: o.y ?? A,
            relative: o.relative ?? !1
        })),
        t = [];
    let n = [];
    for (const o of i) {
        const a = s(o);
        a.type === C.MOVE_TO && n.length > 0 && (e ? t.push(...Ei(n)) : t.unshift(...Ei(n)), n = []), n.push(a)
    }
    return n.length > 0 && (e ? t.push(...Ei(n)) : t.unshift(...Ei(n))), t
}

function Ei(i) {
    const e = i[i.length - 1]?.type === C.CLOSE_PATH,
        s = e ? i.length - 2 : i.length - 1,
        t = [{
            type: C.MOVE_TO,
            relative: !1,
            x: i[s].x,
            y: i[s].y
        }];
    for (let n = s; n > 0; n--) {
        const o = i[n],
            a = i[n - 1];
        if (o.relative) throw new Error("Relative command are not supported convert first with `toAbs()`");
        switch (o.type) {
            case C.HORIZ_LINE_TO:
                t.push({
                    type: C.HORIZ_LINE_TO,
                    relative: !1,
                    x: a.x
                });
                break;
            case C.VERT_LINE_TO:
                t.push({
                    type: C.VERT_LINE_TO,
                    relative: !1,
                    y: a.y
                });
                break;
            case C.LINE_TO:
            case C.MOVE_TO:
                t.push({
                    type: C.LINE_TO,
                    relative: !1,
                    x: a.x,
                    y: a.y
                });
                break;
            case C.CURVE_TO:
                t.push({
                    type: C.CURVE_TO,
                    relative: !1,
                    x: a.x,
                    y: a.y,
                    x1: o.x2,
                    y1: o.y2,
                    x2: o.x1,
                    y2: o.y1
                });
                break;
            case C.SMOOTH_CURVE_TO:
                throw new Error("Unsupported command: S (smooth cubic bezier)");
            case C.SMOOTH_QUAD_TO:
                throw new Error("Unsupported command: T (smooth quadratic bezier)");
            case C.ARC:
                throw new Error("Unsupported command: A (arc)");
            case C.QUAD_TO:
                throw new Error("Unsupported command: Q (quadratic bezier)")
        }
    }
    return e && t.push({
        type: C.CLOSE_PATH
    }), t
}

function Zc(i = 1e13) {
    ye(i);

    function e(s) {
        return Math.round(s * i) / i
    }
    return function(t) {
        return "x1" in t && typeof t.x1 < "u" && (t.x1 = e(t.x1)), "y1" in t && typeof t.y1 < "u" && (t.y1 = e(t.y1)), "x2" in t && typeof t.x2 < "u" && (t.x2 = e(t.x2)), "y2" in t && typeof t.y2 < "u" && (t.y2 = e(t.y2)), "x" in t && typeof t.x < "u" && (t.x = e(t.x)), "y" in t && typeof t.y < "u" && (t.y = e(t.y)), "rX" in t && typeof t.rX < "u" && (t.rX = e(t.rX)), "rY" in t && typeof t.rY < "u" && (t.rY = e(t.rY)), t
    }
}

function Ca() {
    return xe((i, e, s) => (i.relative && (typeof i.x1 < "u" && (i.x1 += e), typeof i.y1 < "u" && (i.y1 += s), typeof i.x2 < "u" && (i.x2 += e), typeof i.y2 < "u" && (i.y2 += s), typeof i.x < "u" && (i.x += e), typeof i.y < "u" && (i.y += s), i.relative = !1), i))
}

function Xc() {
    return xe((i, e, s) => (i.relative || (typeof i.x1 < "u" && (i.x1 -= e), typeof i.y1 < "u" && (i.y1 -= s), typeof i.x2 < "u" && (i.x2 -= e), typeof i.y2 < "u" && (i.y2 -= s), typeof i.x < "u" && (i.x -= e), typeof i.y < "u" && (i.y -= s), i.relative = !0), i))
}

function eg(i = !0, e = !0, s = !0, t = !0) {
    return xe((n, o, a, A, l) => {
        if (isNaN(A) && !(n.type & C.MOVE_TO)) throw new Error("path must start with moveto");
        if (e && n.type & C.HORIZ_LINE_TO && (n.type = C.LINE_TO, n.y = n.relative ? 0 : a), s && n.type & C.VERT_LINE_TO && (n.type = C.LINE_TO, n.x = n.relative ? 0 : o), i && n.type & C.CLOSE_PATH && (n.type = C.LINE_TO, n.x = n.relative ? A - o : A, n.y = n.relative ? l - a : l), n.type & C.ARC && (n.rX === 0 || n.rY === 0) && (n.type = C.LINE_TO, delete n.rX, delete n.rY, delete n.xRot, delete n.lArcFlag, delete n.sweepFlag), t && n.type & C.QUAD_TO) {
            const c = [o, a],
                g = n.relative ? [o + n.x1, a + n.y1] : [n.x1, n.y1],
                d = n.relative ? [o + n.x, a + n.y] : [n.x, n.y];
            yi(c, g, d) && (n.type = C.LINE_TO, delete n.x1, delete n.y1)
        }
        if (t && n.type & C.CURVE_TO) {
            const c = [o, a],
                g = n.relative ? [o + n.x1, a + n.y1] : [n.x1, n.y1],
                d = n.relative ? [o + n.x2, a + n.y2] : [n.x2, n.y2],
                u = n.relative ? [o + n.x, a + n.y] : [n.x, n.y];
            yi(c, g, u) && yi(c, d, u) && (n.type = C.LINE_TO, delete n.x1, delete n.y1, delete n.x2, delete n.y2)
        }
        return n
    })
}

function fa() {
    let i = NaN,
        e = NaN,
        s = NaN,
        t = NaN;
    return xe((n, o, a) => (n.type & C.SMOOTH_CURVE_TO && (n.type = C.CURVE_TO, i = isNaN(i) ? o : i, e = isNaN(e) ? a : e, n.x1 = n.relative ? o - i : 2 * o - i, n.y1 = n.relative ? a - e : 2 * a - e), n.type & C.CURVE_TO ? (i = n.relative ? o + n.x2 : n.x2, e = n.relative ? a + n.y2 : n.y2) : (i = NaN, e = NaN), n.type & C.SMOOTH_QUAD_TO && (n.type = C.QUAD_TO, s = isNaN(s) ? o : s, t = isNaN(t) ? a : t, n.x1 = n.relative ? o - s : 2 * o - s, n.y1 = n.relative ? a - t : 2 * a - t), n.type & C.QUAD_TO ? (s = n.relative ? o + n.x1 : n.x1, t = n.relative ? a + n.y1 : n.y1) : (s = NaN, t = NaN), n))
}

function Ea() {
    let i = NaN,
        e = NaN;
    return xe((s, t, n) => {
        if (s.type & C.SMOOTH_QUAD_TO && (s.type = C.QUAD_TO, i = isNaN(i) ? t : i, e = isNaN(e) ? n : e, s.x1 = s.relative ? t - i : 2 * t - i, s.y1 = s.relative ? n - e : 2 * n - e), s.type & C.QUAD_TO) {
            i = s.relative ? t + s.x1 : s.x1, e = s.relative ? n + s.y1 : s.y1;
            const o = s.x1,
                a = s.y1;
            s.type = C.CURVE_TO, s.x1 = ((s.relative ? 0 : t) + o * 2) / 3, s.y1 = ((s.relative ? 0 : n) + a * 2) / 3, s.x2 = (s.x + o * 2) / 3, s.y2 = (s.y + a * 2) / 3
        } else i = NaN, e = NaN;
        return s
    })
}

function xe(i) {
    let e = 0,
        s = 0,
        t = NaN,
        n = NaN;
    return function(a) {
        if (isNaN(t) && !(a.type & C.MOVE_TO)) throw new Error("path must start with moveto");
        const A = i(a, e, s, t, n);
        return a.type & C.CLOSE_PATH && (e = t, s = n), "x" in a && typeof a.x < "u" && (e = a.relative ? e + a.x : a.x), "y" in a && typeof a.y < "u" && (s = a.relative ? s + a.y : a.y), a.type & C.MOVE_TO && (t = e, n = s), A
    }
}

function sg(i = 0) {
    ye(i);
    let e = NaN,
        s = NaN,
        t = NaN,
        n = NaN;
    return xe((o, a, A, l, c) => {
        const g = Math.abs;
        let d = !1,
            u = 0,
            h = 0;
        if (o.type & C.SMOOTH_CURVE_TO && (u = isNaN(e) ? 0 : a - e, h = isNaN(s) ? 0 : A - s), o.type & (C.CURVE_TO | C.SMOOTH_CURVE_TO) ? (e = o.relative ? a + o.x2 : o.x2, s = o.relative ? A + o.y2 : o.y2) : (e = NaN, s = NaN), o.type & C.SMOOTH_QUAD_TO ? (t = isNaN(t) ? a : 2 * a - t, n = isNaN(n) ? A : 2 * A - n) : o.type & C.QUAD_TO ? (t = o.relative ? a + o.x1 : o.x1, n = o.relative ? A + o.y1 : o.y2) : (t = NaN, n = NaN), o.type & C.LINE_COMMANDS || o.type & C.ARC && (o.rX === 0 || o.rY === 0 || !o.lArcFlag) || o.type & C.CURVE_TO || o.type & C.SMOOTH_CURVE_TO || o.type & C.QUAD_TO || o.type & C.SMOOTH_QUAD_TO) {
            const I = typeof o.x > "u" ? 0 : o.relative ? o.x : o.x - a,
                p = typeof o.y > "u" ? 0 : o.relative ? o.y : o.y - A;
            u = isNaN(t) ? typeof o.x1 > "u" ? u : o.relative ? o.x : o.x1 - a : t - a, h = isNaN(n) ? typeof o.y1 > "u" ? h : o.relative ? o.y : o.y1 - A : n - A;
            const m = typeof o.x2 > "u" ? 0 : o.relative ? o.x : o.x2 - a,
                E = typeof o.y2 > "u" ? 0 : o.relative ? o.y : o.y2 - A;
            g(I) <= i && g(p) <= i && g(u) <= i && g(h) <= i && g(m) <= i && g(E) <= i && (d = !0)
        }
        return o.type & C.CLOSE_PATH && g(a - l) <= i && g(A - c) <= i && (d = !0), d ? [] : o
    })
}

function ss(i, e, s, t, n, o) {
    return ye(i, e, s, t, n, o), xe((a, A, l, c) => {
        const g = a.x1,
            d = a.x2,
            u = a.relative && !isNaN(c),
            h = typeof a.x < "u" ? a.x : u ? 0 : A,
            I = typeof a.y < "u" ? a.y : u ? 0 : l;
        a.type & C.HORIZ_LINE_TO && e !== 0 && (a.type = C.LINE_TO, a.y = a.relative ? 0 : l), a.type & C.VERT_LINE_TO && s !== 0 && (a.type = C.LINE_TO, a.x = a.relative ? 0 : A), typeof a.x < "u" && (a.x = a.x * i + I * s + (u ? 0 : n)), typeof a.y < "u" && (a.y = h * e + a.y * t + (u ? 0 : o)), typeof a.x1 < "u" && (a.x1 = a.x1 * i + a.y1 * s + (u ? 0 : n)), typeof a.y1 < "u" && (a.y1 = g * e + a.y1 * t + (u ? 0 : o)), typeof a.x2 < "u" && (a.x2 = a.x2 * i + a.y2 * s + (u ? 0 : n)), typeof a.y2 < "u" && (a.y2 = d * e + a.y2 * t + (u ? 0 : o));

        function p(E) {
            return E * E
        }
        const m = i * t - e * s;
        if (typeof a.xRot < "u" && (i !== 1 || e !== 0 || s !== 0 || t !== 1))
            if (m === 0) delete a.rX, delete a.rY, delete a.xRot, delete a.lArcFlag, delete a.sweepFlag, a.type = C.LINE_TO;
            else {
                const E = a.xRot * Math.PI / 180,
                    B = Math.sin(E),
                    v = Math.cos(E),
                    y = 1 / p(a.rX),
                    b = 1 / p(a.rY),
                    k = p(v) * y + p(B) * b,
                    R = 2 * B * v * (y - b),
                    S = p(B) * y + p(v) * b,
                    M = k * t * t - R * e * t + S * e * e,
                    G = R * (i * t + e * s) - 2 * (k * s * t + S * i * e),
                    re = k * s * s - R * i * s + S * i * i,
                    ne = (Math.atan2(G, M - re) + Math.PI) % Math.PI / 2,
                    ge = Math.sin(ne),
                    Ae = Math.cos(ne);
                a.rX = Math.abs(m) / Math.sqrt(M * p(Ae) + G * ge * Ae + re * p(ge)), a.rY = Math.abs(m) / Math.sqrt(M * p(ge) - G * ge * Ae + re * p(Ae)), a.xRot = ne * 180 / Math.PI
            } return typeof a.sweepFlag < "u" && 0 > m && (a.sweepFlag = +!a.sweepFlag), a
    })
}

function ig(i, e = 0, s = 0) {
    ye(i, e, s);
    const t = Math.sin(i),
        n = Math.cos(i);
    return ss(n, t, -t, n, e - e * n + s * t, s - e * t - s * n)
}

function tg(i, e = 0) {
    return ye(i, e), ss(1, 0, 0, 1, i, e)
}

function rg(i, e = i) {
    return ye(i, e), ss(i, 0, 0, e, 0, 0)
}

function ng(i) {
    return ye(i), ss(1, 0, Math.tan(i), 1, 0, 0)
}

function og(i) {
    return ye(i), ss(1, Math.tan(i), 0, 1, 0, 0)
}

function ag(i = 0) {
    return ye(i), ss(-1, 0, 0, 1, i, 0)
}

function Ag(i = 0) {
    return ye(i), ss(1, 0, 0, -1, 0, i)
}

function lg() {
    return xe((i, e, s) => C.ARC === i.type ? Vc(i, i.relative ? 0 : e, i.relative ? 0 : s) : i)
}

function cg() {
    return xe((i, e, s) => (i.relative && (e = 0, s = 0), C.ARC === i.type && Cr(i, e, s), i))
}

function ma() {
    return i => ({
        ...i
    })
}

function gg() {
    const i = ma(),
        e = Ca(),
        s = Ea(),
        t = fa(),
        n = xe((o, a, A) => {
            const l = t(s(e(i(o))));

            function c(d) {
                d > n.maxX && (n.maxX = d), d < n.minX && (n.minX = d)
            }

            function g(d) {
                d > n.maxY && (n.maxY = d), d < n.minY && (n.minY = d)
            }
            if (l.type & C.DRAWING_COMMANDS && (c(a), g(A)), l.type & C.HORIZ_LINE_TO && c(l.x), l.type & C.VERT_LINE_TO && g(l.y), l.type & C.LINE_TO && (c(l.x), g(l.y)), l.type & C.CURVE_TO) {
                c(l.x), g(l.y);
                const d = Ln(a, l.x1, l.x2, l.x);
                for (const h of d) 0 < h && 1 > h && c(Tn(a, l.x1, l.x2, l.x, h));
                const u = Ln(A, l.y1, l.y2, l.y);
                for (const h of u) 0 < h && 1 > h && g(Tn(A, l.y1, l.y2, l.y, h))
            }
            if (l.type & C.ARC) {
                c(l.x), g(l.y), Cr(l, a, A);
                const d = l.xRot / 180 * Math.PI,
                    u = Math.cos(d) * l.rX,
                    h = Math.sin(d) * l.rX,
                    I = -Math.sin(d) * l.rY,
                    p = Math.cos(d) * l.rY,
                    [m, E] = l.phi1 < l.phi2 ? [l.phi1, l.phi2] : -180 > l.phi2 ? [l.phi2 + 360, l.phi1 + 360] : [l.phi2, l.phi1],
                    B = ([b, k]) => {
                        const S = Math.atan2(k, b) * 180 / Math.PI;
                        return S < m ? S + 360 : S
                    },
                    v = Mn(I, -u, 0).map(B);
                for (const b of v) b > m && b < E && c(Pn(l.cX, u, I, b));
                const y = Mn(p, -h, 0).map(B);
                for (const b of y) b > m && b < E && g(Pn(l.cY, h, p, b))
            }
            return o
        });
    return n.minX = 1 / 0, n.maxX = -1 / 0, n.minY = 1 / 0, n.maxY = -1 / 0, n
}
const H = {
    ROUND: Zc,
    TO_ABS: Ca,
    TO_REL: Xc,
    NORMALIZE_HVZ: eg,
    NORMALIZE_ST: fa,
    QT_TO_C: Ea,
    INFO: xe,
    SANITIZE: sg,
    MATRIX: ss,
    ROTATE: ig,
    TRANSLATE: tg,
    SCALE: rg,
    SKEW_X: ng,
    SKEW_Y: og,
    X_AXIS_SYMMETRY: ag,
    Y_AXIS_SYMMETRY: Ag,
    A_TO_C: lg,
    ANNOTATE_ARCS: cg,
    CLONE: ma,
    CALCULATE_BOUNDS: gg,
    REVERSE_PATH: Wc,
    REMOVE_COLLINEAR: $c
};
class Ba {
    round(e) {
        return this.transform(H.ROUND(e))
    }
    toAbs() {
        return this.transform(H.TO_ABS())
    }
    toRel() {
        return this.transform(H.TO_REL())
    }
    normalizeHVZ(e, s, t) {
        return this.transform(H.NORMALIZE_HVZ(e, s, t))
    }
    normalizeST() {
        return this.transform(H.NORMALIZE_ST())
    }
    qtToC() {
        return this.transform(H.QT_TO_C())
    }
    aToC() {
        return this.transform(H.A_TO_C())
    }
    sanitize(e) {
        return this.transform(H.SANITIZE(e))
    }
    translate(e, s) {
        return this.transform(H.TRANSLATE(e, s))
    }
    scale(e, s) {
        return this.transform(H.SCALE(e, s))
    }
    rotate(e, s, t) {
        return this.transform(H.ROTATE(e, s, t))
    }
    matrix(e, s, t, n, o, a) {
        return this.transform(H.MATRIX(e, s, t, n, o, a))
    }
    skewX(e) {
        return this.transform(H.SKEW_X(e))
    }
    skewY(e) {
        return this.transform(H.SKEW_Y(e))
    }
    xSymmetry(e) {
        return this.transform(H.X_AXIS_SYMMETRY(e))
    }
    ySymmetry(e) {
        return this.transform(H.Y_AXIS_SYMMETRY(e))
    }
    annotateArcs() {
        return this.transform(H.ANNOTATE_ARCS())
    }
}
const dg = i => i === " " || i === "	" || i === "\r" || i === `
`,
    Gn = i => 48 <= i.charCodeAt(0) && i.charCodeAt(0) <= 57;
class ug extends Ba {
    curNumber = "";
    curCommandType = -1;
    curCommandRelative = !1;
    canParseCommandOrComma = !0;
    curNumberHasExp = !1;
    curNumberHasExpDigits = !1;
    curNumberHasDecimal = !1;
    curArgs = [];
    constructor() {
        super()
    }
    finish(e = []) {
        if (this.parse(" ", e), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
        return e
    }
    parse(e, s = []) {
        const t = n => {
            s.push(n), this.curArgs.length = 0, this.canParseCommandOrComma = !0
        };
        for (let n = 0; n < e.length; n++) {
            const o = e[n],
                a = this.curCommandType === C.ARC && (this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber.length === 1 && (this.curNumber === "0" || this.curNumber === "1"),
                A = Gn(o) && (this.curNumber === "0" && o === "0" || a);
            if (Gn(o) && !A) {
                this.curNumber += o, this.curNumberHasExpDigits = this.curNumberHasExp;
                continue
            }
            if (o === "e" || o === "E") {
                this.curNumber += o, this.curNumberHasExp = !0;
                continue
            }
            if ((o === "-" || o === "+") && this.curNumberHasExp && !this.curNumberHasExpDigits) {
                this.curNumber += o;
                continue
            }
            if (o === "." && !this.curNumberHasExp && !this.curNumberHasDecimal && !a) {
                this.curNumber += o, this.curNumberHasDecimal = !0;
                continue
            }
            if (this.curNumber && this.curCommandType !== -1) {
                const l = Number(this.curNumber);
                if (isNaN(l)) throw new SyntaxError(`Invalid number ending at ${n}`);
                if (this.curCommandType === C.ARC) {
                    if (this.curArgs.length === 0 || this.curArgs.length === 1) {
                        if (0 > l) throw new SyntaxError(`Expected positive number, got "${l}" at index "${n}"`)
                    } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError(`Expected a flag, got "${this.curNumber}" at index "${n}"`)
                }
                this.curArgs.push(l), this.curArgs.length === hg[this.curCommandType] && (C.HORIZ_LINE_TO === this.curCommandType ? t({
                    type: C.HORIZ_LINE_TO,
                    relative: this.curCommandRelative,
                    x: l
                }) : C.VERT_LINE_TO === this.curCommandType ? t({
                    type: C.VERT_LINE_TO,
                    relative: this.curCommandRelative,
                    y: l
                }) : this.curCommandType === C.MOVE_TO || this.curCommandType === C.LINE_TO || this.curCommandType === C.SMOOTH_QUAD_TO ? (t({
                    type: this.curCommandType,
                    relative: this.curCommandRelative,
                    x: this.curArgs[0],
                    y: this.curArgs[1]
                }), C.MOVE_TO === this.curCommandType && (this.curCommandType = C.LINE_TO)) : this.curCommandType === C.CURVE_TO ? t({
                    type: C.CURVE_TO,
                    relative: this.curCommandRelative,
                    x1: this.curArgs[0],
                    y1: this.curArgs[1],
                    x2: this.curArgs[2],
                    y2: this.curArgs[3],
                    x: this.curArgs[4],
                    y: this.curArgs[5]
                }) : this.curCommandType === C.SMOOTH_CURVE_TO ? t({
                    type: C.SMOOTH_CURVE_TO,
                    relative: this.curCommandRelative,
                    x2: this.curArgs[0],
                    y2: this.curArgs[1],
                    x: this.curArgs[2],
                    y: this.curArgs[3]
                }) : this.curCommandType === C.QUAD_TO ? t({
                    type: C.QUAD_TO,
                    relative: this.curCommandRelative,
                    x1: this.curArgs[0],
                    y1: this.curArgs[1],
                    x: this.curArgs[2],
                    y: this.curArgs[3]
                }) : this.curCommandType === C.ARC && t({
                    type: C.ARC,
                    relative: this.curCommandRelative,
                    rX: this.curArgs[0],
                    rY: this.curArgs[1],
                    xRot: this.curArgs[2],
                    lArcFlag: this.curArgs[3],
                    sweepFlag: this.curArgs[4],
                    x: this.curArgs[5],
                    y: this.curArgs[6]
                })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0
            }
            if (!dg(o)) {
                if (o === "," && this.canParseCommandOrComma) {
                    this.canParseCommandOrComma = !1;
                    continue
                }
                if (o === "+" || o === "-" || o === ".") {
                    this.curNumber = o, this.curNumberHasDecimal = o === ".";
                    continue
                }
                if (A) {
                    this.curNumber = o, this.curNumberHasDecimal = !1;
                    continue
                }
                if (this.curArgs.length !== 0) throw new SyntaxError(`Unterminated command at index ${n}.`);
                if (!this.canParseCommandOrComma) throw new SyntaxError(`Unexpected character "${o}" at index ${n}. Command cannot follow comma`);
                if (this.canParseCommandOrComma = !1, o === "z" || o === "Z") {
                    s.push({
                        type: C.CLOSE_PATH
                    }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
                    continue
                } else if (o === "h" || o === "H") this.curCommandType = C.HORIZ_LINE_TO, this.curCommandRelative = o === "h";
                else if (o === "v" || o === "V") this.curCommandType = C.VERT_LINE_TO, this.curCommandRelative = o === "v";
                else if (o === "m" || o === "M") this.curCommandType = C.MOVE_TO, this.curCommandRelative = o === "m";
                else if (o === "l" || o === "L") this.curCommandType = C.LINE_TO, this.curCommandRelative = o === "l";
                else if (o === "c" || o === "C") this.curCommandType = C.CURVE_TO, this.curCommandRelative = o === "c";
                else if (o === "s" || o === "S") this.curCommandType = C.SMOOTH_CURVE_TO, this.curCommandRelative = o === "s";
                else if (o === "q" || o === "Q") this.curCommandType = C.QUAD_TO, this.curCommandRelative = o === "q";
                else if (o === "t" || o === "T") this.curCommandType = C.SMOOTH_QUAD_TO, this.curCommandRelative = o === "t";
                else if (o === "a" || o === "A") this.curCommandType = C.ARC, this.curCommandRelative = o === "a";
                else throw new SyntaxError(`Unexpected character "${o}" at index ${n}.`)
            }
        }
        return s
    }
    transform(e) {
        return Object.create(this, {
            parse: {
                value(t, n = []) {
                    const o = Object.getPrototypeOf(this).parse.call(this, t);
                    for (const a of o) {
                        const A = e(a);
                        Array.isArray(A) ? n.push(...A) : n.push(A)
                    }
                    return n
                }
            }
        })
    }
}
class C extends Ba {
    commands;
    constructor(e) {
        super(), typeof e == "string" ? this.commands = C.parse(e) : this.commands = e
    }
    encode() {
        return C.encode(this.commands)
    }
    getBounds() {
        const e = H.CALCULATE_BOUNDS();
        return this.transform(e), e
    }
    transform(e) {
        const s = [];
        for (const t of this.commands) {
            const n = e(t);
            Array.isArray(n) ? s.push(...n) : s.push(n)
        }
        return this.commands = s, this
    }
    reverse(e = !0) {
        return this.commands = H.REVERSE_PATH(this.commands, e), this
    }
    removeCollinear() {
        return this.commands = H.REMOVE_COLLINEAR(this.commands), this
    }
    static encode(e) {
        return Jc(e)
    }
    static parse(e) {
        const s = new ug,
            t = [];
        return s.parse(e, t), s.finish(t), t
    }
    static CLOSE_PATH = 1;
    static MOVE_TO = 2;
    static HORIZ_LINE_TO = 4;
    static VERT_LINE_TO = 8;
    static LINE_TO = 16;
    static CURVE_TO = 32;
    static SMOOTH_CURVE_TO = 64;
    static QUAD_TO = 128;
    static SMOOTH_QUAD_TO = 256;
    static ARC = 512;
    static LINE_COMMANDS = C.LINE_TO | C.HORIZ_LINE_TO | C.VERT_LINE_TO;
    static DRAWING_COMMANDS = C.HORIZ_LINE_TO | C.VERT_LINE_TO | C.LINE_TO | C.CURVE_TO | C.SMOOTH_CURVE_TO | C.QUAD_TO | C.SMOOTH_QUAD_TO | C.ARC
}
const hg = {
        [C.MOVE_TO]: 2,
        [C.LINE_TO]: 2,
        [C.HORIZ_LINE_TO]: 1,
        [C.VERT_LINE_TO]: 1,
        [C.CLOSE_PATH]: 0,
        [C.QUAD_TO]: 4,
        [C.SMOOTH_QUAD_TO]: 2,
        [C.CURVE_TO]: 6,
        [C.SMOOTH_CURVE_TO]: 4,
        [C.ARC]: 7
    },
    Ig = w.lazy(() => sr(() => import("./ModelDetail-B8SaGqlX.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]))),
    pg = w.lazy(() => sr(() => import("./Customize-CpqIuGmI.js"), __vite__mapDeps([7, 1, 2, 4, 3, 5, 8]))),
    Cg = w.lazy(() => sr(() => import("./PrintableDetail-B_ZOBIuj.js"), __vite__mapDeps([9, 1, 2, 4, 5, 10, 6])));

function fg() {
    const {
        initialize: i
    } = ve();
    return w.useEffect(() => {
        i()
    }, []), r.jsx(ja, {
        future: {
            v7_startTransition: !0,
            v7_relativeSplatPath: !0
        },
        children: r.jsxs("div", {
            className: "app",
            children: [r.jsx(cc, {}), r.jsx("main", {
                className: "main-content",
                children: r.jsx(w.Suspense, {
                    fallback: r.jsx("div", {
                        className: "loading",
                        children: "Loading..."
                    }),
                    children: r.jsxs(Sa, {
                        children: [r.jsx(V, {
                            path: "/",
                            element: r.jsx(_n, {})
                        }), r.jsx(V, {
                            path: "/home",
                            element: r.jsx(hc, {})
                        }), r.jsx(V, {
                            path: "/login",
                            element: r.jsx(Cc, {})
                        }), r.jsx(V, {
                            path: "/signup",
                            element: r.jsx(fc, {})
                        }), r.jsx(V, {
                            path: "/confirm-signup",
                            element: r.jsx(Ec, {})
                        }), r.jsx(V, {
                            path: "/forgot-password",
                            element: r.jsx(mc, {})
                        }), r.jsx(V, {
                            path: "/reset-password",
                            element: r.jsx(Bc, {})
                        }), r.jsx(V, {
                            path: "/collections/:slug",
                            element: r.jsx(Qc, {})
                        }), r.jsx(V, {
                            path: "/models",
                            element: r.jsx(_n, {})
                        }), r.jsx(V, {
                            path: "/models/:slug",
                            element: r.jsx(Ig, {})
                        }), r.jsx(V, {
                            path: "/customize/:slug",
                            element: r.jsx(pg, {})
                        }), r.jsx(V, {
                            path: "/printables",
                            element: r.jsx(vc, {})
                        }), r.jsx(V, {
                            path: "/printables/:slug",
                            element: r.jsx(Cg, {})
                        }), r.jsx(V, {
                            path: "/stls",
                            element: r.jsx(Na, {
                                to: "/printables",
                                replace: !0
                            })
                        }), r.jsx(V, {
                            path: "/profile",
                            element: r.jsx(xc, {})
                        }), r.jsx(V, {
                            path: "/upgrade",
                            element: r.jsx(_c, {})
                        }), r.jsx(V, {
                            path: "/subscription",
                            element: r.jsx(wc, {})
                        }), r.jsx(V, {
                            path: "/terms",
                            element: r.jsx(Dc, {})
                        }), r.jsx(V, {
                            path: "/privacy",
                            element: r.jsx(Nc, {})
                        }), r.jsx(V, {
                            path: "/faq",
                            element: r.jsx(Fc, {})
                        }), !1]
                    })
                })
            })]
        })
    })
}
const Eg = {
        home: "Home",
        templates: "Models",
        printables: "Printables",
        svgTester: "SVG Tester",
        profile: "Profile",
        account: "Account",
        login: "Login",
        credits: "Credits",
        credit: "credit",
        signUpBonus: "Sign Up Bonus",
        creditPack: "Credit Pack",
        monthlyQuota: "Monthly Quota"
    },
    mg = {
        welcomeBack: "Welcome back, {{name}}!",
        whatCreate: "What will you create today?",
        customizeModels: "Customize 3D models in seconds",
        exploreModels: "Explore customizable 3D models ready to download",
        searchPlaceholder: "Search for models...",
        loadingModels: "Loading models...",
        noModelsFound: "No models found",
        tryDifferentKeywords: "Try searching with different keywords",
        clearSearch: "Clear search",
        noModelsYet: "No models yet",
        checkBackSoon: "Check back soon for customizable 3D models!",
        getStartedFree: "Get Started Free",
        noDescription: "No description available",
        download: "download",
        downloads: "downloads"
    },
    Bg = {
        welcomeBack: "Welcome Back",
        loginSubtitle: "Login to customize 3D models",
        createAccount: "Create Account",
        signupSubtitle: "Create your account to start customizing 3D models.",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        name: "Name",
        loggingIn: "Logging in...",
        login: "Login",
        creatingAccount: "Creating account...",
        signUp: "Sign Up",
        dontHaveAccount: "Don't have an account?",
        alreadyHaveAccount: "Already have an account?",
        passwordsNoMatch: "Passwords do not match",
        passwordMinLength: "Password must be at least 6 characters",
        passwordMinLengthCognito: "Password must be at least 8 characters",
        emailPlaceholder: "you@example.com",
        passwordPlaceholder: "••••••••",
        namePlaceholder: "John Doe",
        confirmEmail: "Confirm Your Email",
        confirmEmailSubtitle: "We sent a verification code to {{email}}",
        confirmationCode: "Verification Code",
        codePlaceholder: "000000",
        codeLength: "Code must be 6 digits",
        confirming: "Confirming...",
        confirmAccount: "Confirm Account",
        didntReceiveCode: "Didn't receive the code?",
        resendCode: "Resend code",
        codeResent: "A new code has been sent to your email",
        wrongEmail: "Wrong email?",
        startOver: "Start over",
        forgotPasswordLink: "Forgot password?",
        forgotPassword: "Forgot Password",
        forgotPasswordSubtitle: "Enter your email and we'll send you a code to reset your password",
        emailRequired: "Email is required",
        sendingCode: "Sending code...",
        sendResetCode: "Send Reset Code",
        resendIn: "Resend in {{seconds}}s",
        rememberPassword: "Remember your password?",
        backToLogin: "Back to login",
        resetPassword: "Reset Password",
        resetPasswordSubtitle: "Enter the code sent to {{email}} and your new password",
        newPassword: "New Password",
        resettingPassword: "Resetting password...",
        requestNewCode: "Request a new code",
        passwordResetSuccess: "Password Reset",
        passwordResetSuccessSubtitle: "Your password has been reset successfully. You can now login with your new password.",
        emailConfirmedSuccess: "Email verified successfully! You can now log in.",
        orContinueWithEmail: "or continue with email",
        googleLoginFailed: "Google login failed. Please try again."
    },
    Qg = {
        loginRequired: "Login Required",
        pleaseLogin: "Please log in to view your profile",
        login: "Login",
        signUp: "Sign Up",
        profile: "Profile",
        manageAccount: "Manage your account settings and preferences",
        accountInformation: "Account Information",
        name: "Name",
        email: "Email",
        support: "Support",
        supportSubtitle: "Did you have problems or have a suggestion? Send an email",
        followUs: "Follow us on social media",
        accountType: "Account Type",
        freeTier: "Free Tier",
        monthlyBasic: "Basic Monthly",
        monthlyPro: "Pro Monthly",
        yearlyBasic: "Basic Annual",
        yearlyPro: "Pro Annual",
        creditPack: "Credit Pack",
        notSet: "Not set",
        creditsTitle: "Credits",
        creditsAvailable: "{{count}} credits available",
        questionsAboutCredits: "Questions about credits and licenses?",
        upgrade: "Upgrade",
        buyCredits: "Buy Credits",
        upgradeToPro: "Upgrade to Pro",
        logout: "Logout",
        editName: "Edit name",
        save: "Save",
        cancel: "Cancel",
        saving: "Saving...",
        dangerZone: "Danger Zone",
        deleteAccount: "Delete Account",
        deleteAccountWarning: "Once you delete your account, there is no going back. Please be certain.",
        deleteAccountConfirmTitle: "Delete Account?",
        deleteAccountConfirmMessage: "Are you sure you want to delete your account? This action cannot be undone.",
        deleteAccountWarningMessage: "All your data, including credits and download history, will be permanently deleted.",
        deleteAccountConfirm: "Yes, Delete My Account",
        deleting: "Deleting..."
    },
    vg = {
        back: "Back",
        close: "Close",
        cancel: "Cancel",
        confirm: "Confirm",
        save: "Save",
        delete: "Delete",
        edit: "Edit",
        loading: "Loading...",
        error: "Error",
        success: "Success"
    },
    yg = {
        title: "Choose a Font",
        previewTextLabel: "Preview Text",
        previewTextPlaceholder: "Type text to preview...",
        defaultPreviewText: "The quick brown fox jumps",
        searchPlaceholder: "Search fonts...",
        noResults: "No fonts found matching your search"
    },
    xg = {
        title: "Choose a Color",
        paletteTab: "Palette",
        presetsTab: "PLA Presets",
        selectColor: "Select Color",
        preview: "Preview",
        hexCode: "Hex Code",
        invalidHex: "Invalid hex color code",
        presetsDescription: "Common PLA filament colors for 3D printing"
    },
    _g = {
        noCredits: "You have no credits remaining. Please upgrade to continue downloading.",
        svgUploadRequired: "Please upload an SVG image before generating the preview.",
        svgRequiredNotUploaded: 'Please upload an SVG image for "{{paramName}}" before proceeding.'
    },
    wg = {
        title: "Customizable Models",
        searchPlaceholder: "Search {{count}} models...",
        searchPlaceholderEmpty: "Search models...",
        allModels: "All Models",
        allTags: "All Tags",
        filterByTag: "Filter by tag",
        clearFilter: "Clear filter",
        showingTag: "Showing: {{tagName}}",
        noModelsWithTag: "No models with this tag yet",
        loadingModels: "Loading models..."
    },
    Dg = {
        title: "Printables",
        searchPlaceholder: "Search packs...",
        loadingPrintables: "Loading packs...",
        noPrintablesYet: "No packs yet",
        checkBackSoon: "Check back soon for ready-to-print file packs!",
        downloadButton: "Download Pack",
        loginToDownload: "Login to download",
        subscriptionRequired: "Subscribe to download",
        upgradePrompt: "Upgrade to Basic or Pro to download printable packs",
        confirmDownload: "Confirm Download",
        confirmDescription: "You're about to download this pack. This will use credits from your account.",
        relatedModel: "Customize this model",
        fileSize: "File size",
        downloading: "Downloading...",
        downloadError: "Download failed. Please try again.",
        insufficientCredits: "Insufficient credits"
    },
    bg = {
        customizeButton: "Customize this model",
        creditNote: "Credit is only deducted on download"
    },
    jg = {
        printingInstructions: "Printing Instructions",
        filesIncluded: "Files Included"
    },
    Sg = {
        starting: "Starting...",
        button: "Download",
        confirmTitle: "Confirm Download",
        confirmDescription: "You're about to download the following files. This will use credits from your account.",
        filesGenerated: "Files to be generated:",
        creditCost: "Credit cost:",
        credit: "credit",
        credits: "credits",
        confirmButton: "Download ({{credits}} credit)",
        buttonSTL: "Download STL File",
        button3MF: "Download 3MF File",
        yourCredits: "Your Credits:",
        insufficientCredits: "Insufficient credits.",
        getMoreCredits: "Get more credits"
    },
    Ng = {
        title: "Manage Subscription",
        status: "Subscription Status",
        plan: "Plan",
        nextPayment: "Next payment",
        value: "Value",
        credits: "Credits",
        creditsRemaining: "{{current}} of {{total}} remaining",
        cancelSubscription: "Cancel Subscription",
        resumeSubscription: "Resume Subscription",
        paymentHistory: "Payment History",
        creditPack: "Credit Pack",
        upcomingPayment: "Upcoming Payment",
        statusActive: "Active",
        statusCanceling: "Cancels on {{date}}",
        statusPastDue: "Payment overdue",
        statusFree: "Free Plan",
        cancelConfirmTitle: "Cancel subscription?",
        cancelConfirmMessage: "You'll keep access until {{date}}. After that, you'll be moved to the free plan.",
        cancelConfirmButton: "Yes, cancel",
        resumeConfirmTitle: "Resume subscription?",
        resumeConfirmMessage: "Your subscription will renew automatically on {{date}}.",
        resumeConfirmButton: "Yes, resume",
        noSubscription: "You don't have an active subscription.",
        upgradeNow: "Subscribe now",
        canceling: "Canceling...",
        resuming: "Resuming...",
        cancelSuccess: "Subscription canceled successfully",
        resumeSuccess: "Subscription resumed successfully",
        error: "An error occurred. Please try again.",
        noPayments: "No payments yet",
        manageSubscription: "Manage Subscription",
        paid: "Paid",
        succeeded: "Paid",
        pending: "Pending",
        failed: "Failed"
    },
    Rg = {
        loading: "Loading collection...",
        notFound: "Collection not found",
        notFoundDescription: "The collection you're looking for doesn't exist or has been removed.",
        backToCollections: "Back to Collections",
        model: "model",
        models: "models",
        searchModels: "Search models in this collection...",
        noModels: "No models in this collection",
        noModelsDescription: "This collection doesn't have any models yet.",
        noResults: "No models found",
        tryDifferentSearch: "Try searching with different keywords"
    },
    kg = {
        rendering: "Rendering Your Model...",
        renderingTime: "This usually takes 5-30 seconds",
        complete: "Render Complete!",
        readyToDownload: "Your custom model is ready to download",
        downloadNote: "File will download automatically. If not, click the button above.",
        failed: "Render Failed",
        failedMessage: "Something went wrong. Please try again."
    },
    Mg = {
        loginRequired: "Please log in to upgrade your plan",
        title: "Upgrade Your Plan",
        upgradeTitle: "Choose Your Plan",
        description: "Choose the perfect plan for your needs",
        subscriptionPlans: "Subscription Plans",
        creditPacks: "Credit Packs",
        creditPacksDescription: "One-time purchase, 1 year to use",
        pricingComparison: "Pricing Comparison",
        plan: "Plan",
        price: "Price",
        credits: "Credits",
        perCredit: "Per Credit",
        total: "total",
        basicMonthly: "Basic Monthly",
        basicAnnual: "Basic Annual",
        proMonthly: "Pro Monthly",
        proAnnual: "Pro Annual",
        creditPacksNote: "* Credit packs valid for 1 year",
        monthly: "Monthly",
        annual: "Annual",
        save15: "Save 15%",
        month: "month",
        year: "year",
        basic: "Basic",
        basicAudience: "For hobbyists and occasional users",
        pro: "Pro",
        proAudience: "For regular users and small studios",
        packMini: "Mini",
        packLight: "Light",
        packStandard: "Standard",
        packAudience: "Perfect for casual use",
        packAudienceWithCost: "R${{cost}} per credit",
        popular: "Popular",
        recommended: "Recommended",
        creditsPerMonth: "{{count}} credits/month",
        totalCredits: "{{count}} total credits",
        perCreditCost: "R${{cost}} per credit",
        commercialLicense: "Commercial license included",
        creditsResetMonthly: "Up to 20 credits rollover",
        creditsNeverExpire: "Valid for 1 year",
        validFor365Days: "Valid for 365 days",
        bestValue: "Best value per credit",
        selectPlan: "Select Plan",
        billedAnnually: "Billed R${{amount}}/year"
    },
    Fg = {
        generatingPreview: "Generating Colored Preview...",
        estimatedTime: "30-60 sec",
        controlsHelp: "🖱️ Drag to rotate • Scroll to zoom • Right-click to pan • Click part for dimensions",
        dimensions: {
            width: "W",
            height: "H",
            depth: "D"
        }
    },
    Pg = {
        openParameters: "Open parameters",
        closeParameters: "Close parameters"
    },
    Lg = {
        original: "Original",
        outline: "Outline"
    },
    Tg = {
        required: "Required",
        optional: "Optional",
        requiredHint: "You must upload an SVG or PNG image.",
        optionalHint: "Upload an image or skip this parameter.",
        button: "Upload SVG or PNG",
        buttonOptional: "Upload SVG or PNG (optional)",
        uploading: "Uploading..."
    },
    Gg = {
        title: "PNG to SVG Conversion Preview",
        threshold: "Threshold:",
        thresholdHint: "(Lower = more pixels kept, Higher = fewer pixels kept)",
        showThresholded: "Show thresholded image (what gets sent to converter)",
        thresholdedImage: "Thresholded Image",
        originalPng: "Original PNG",
        convertedSvg: "Converted SVG",
        converting: "Converting to SVG...",
        conversionFailed: "Conversion failed",
        uploading: "Uploading...",
        uploadFailed: "Upload failed. Please try again.",
        confirmUpload: "Confirm & Upload"
    },
    Ug = {
        title: "SVG Conversion Tester",
        subtitle: "Upload an image to convert it to SVG and download both the image and outline",
        uploadButton: "Upload Image",
        reset: "Reset",
        originalImage: "Original Image",
        outline: "Outline (Broken Apart)",
        downloadSvg: "Download SVG",
        downloadOutline: "Download Outline",
        waitingForImage: "Upload an image to see the result",
        emptyState: "Upload a PNG, JPEG, or WebP image to convert it to SVG"
    },
    Og = {
        termsOfUse: "Terms of Use",
        privacyPolicy: "Privacy Policy",
        faq: "FAQ",
        agreeToTerms: "By creating an account, you agree to our",
        and: "and"
    },
    Yg = {
        nav: Eg,
        home: mg,
        auth: Bg,
        profile: Qg,
        common: vg,
        fontPicker: yg,
        colorPicker: xg,
        errors: _g,
        templates: wg,
        printables: Dg,
        models: bg,
        modelDetail: jg,
        download: Sg,
        subscription: Ng,
        collections: Rg,
        renderStatus: kg,
        upgrade: Mg,
        viewer: Fg,
        customize: Pg,
        svgPreview: Lg,
        svgUpload: Tg,
        pngToSvg: Gg,
        svgTester: Ug,
        legal: Og
    },
    Kg = {
        home: "Início",
        templates: "Modelos",
        printables: "Printables",
        svgTester: "Teste SVG",
        profile: "Perfil",
        account: "Conta",
        login: "Entrar",
        credits: "Créditos",
        credit: "crédito",
        signUpBonus: "Bônus de Cadastro",
        creditPack: "Pacote de Créditos",
        monthlyQuota: "Cota Mensal"
    },
    qg = {
        welcomeBack: "Bem-vindo de volta, {{name}}!",
        whatCreate: "O que você vai criar hoje?",
        customizeModels: "Personalize modelos 3D em segundos",
        exploreModels: "Explore modelos 3D personalizáveis prontos para baixar",
        searchPlaceholder: "Buscar modelos...",
        loadingModels: "Carregando modelos...",
        noModelsFound: "Nenhum modelo encontrado",
        tryDifferentKeywords: "Tente buscar com palavras-chave diferentes",
        clearSearch: "Limpar busca",
        noModelsYet: "Nenhum modelo ainda",
        checkBackSoon: "Volte em breve para modelos 3D personalizáveis!",
        getStartedFree: "Começar Grátis",
        noDescription: "Sem descrição disponível",
        download: "download",
        downloads: "downloads"
    },
    Hg = {
        welcomeBack: "Bem-vindo de Volta",
        loginSubtitle: "Entre para personalizar modelos 3D",
        createAccount: "Criar Conta",
        signupSubtitle: "Crie sua conta para começar a personalizar modelos 3D.",
        email: "E-mail",
        password: "Senha",
        confirmPassword: "Confirmar Senha",
        name: "Nome",
        loggingIn: "Entrando...",
        login: "Entrar",
        creatingAccount: "Criando conta...",
        signUp: "Cadastrar",
        dontHaveAccount: "Não tem uma conta?",
        alreadyHaveAccount: "Já tem uma conta?",
        passwordsNoMatch: "As senhas não coincidem",
        passwordMinLength: "A senha deve ter pelo menos 6 caracteres",
        passwordMinLengthCognito: "A senha deve ter pelo menos 8 caracteres",
        emailPlaceholder: "voce@exemplo.com",
        passwordPlaceholder: "••••••••",
        namePlaceholder: "João Silva",
        confirmEmail: "Confirme Seu E-mail",
        confirmEmailSubtitle: "Enviamos um código de verificação para {{email}}",
        confirmationCode: "Código de Verificação",
        codePlaceholder: "000000",
        codeLength: "O código deve ter 6 dígitos",
        confirming: "Confirmando...",
        confirmAccount: "Confirmar Conta",
        didntReceiveCode: "Não recebeu o código?",
        resendCode: "Reenviar código",
        codeResent: "Um novo código foi enviado para o seu e-mail",
        wrongEmail: "E-mail errado?",
        startOver: "Começar de novo",
        forgotPasswordLink: "Esqueceu a senha?",
        forgotPassword: "Esqueci Minha Senha",
        forgotPasswordSubtitle: "Digite seu e-mail e enviaremos um código para redefinir sua senha",
        emailRequired: "E-mail é obrigatório",
        sendingCode: "Enviando código...",
        sendResetCode: "Enviar Código",
        resendIn: "Reenviar em {{seconds}}s",
        rememberPassword: "Lembrou a senha?",
        backToLogin: "Voltar ao login",
        resetPassword: "Redefinir Senha",
        resetPasswordSubtitle: "Digite o código enviado para {{email}} e sua nova senha",
        newPassword: "Nova Senha",
        resettingPassword: "Redefinindo senha...",
        requestNewCode: "Solicitar novo código",
        passwordResetSuccess: "Senha Redefinida",
        passwordResetSuccessSubtitle: "Sua senha foi redefinida com sucesso. Agora você pode entrar com sua nova senha.",
        emailConfirmedSuccess: "E-mail verificado com sucesso! Agora você pode entrar.",
        orContinueWithEmail: "ou continue com e-mail",
        googleLoginFailed: "Falha no login com Google. Tente novamente."
    },
    Jg = {
        loginRequired: "Login Necessário",
        pleaseLogin: "Por favor, faça login para ver seu perfil",
        login: "Entrar",
        signUp: "Cadastrar",
        profile: "Perfil",
        manageAccount: "Gerencie as configurações e preferências da sua conta",
        accountInformation: "Informações da Conta",
        name: "Nome",
        email: "E-mail",
        support: "Suporte",
        supportSubtitle: "Teve problemas ou tem alguma sugestão? Envie um e-mail",
        followUs: "Siga-nos nas redes sociais",
        accountType: "Tipo de Conta",
        freeTier: "Plano Gratuito",
        monthlyBasic: "Básico Mensal",
        monthlyPro: "Pro Mensal",
        yearlyBasic: "Básico Anual",
        yearlyPro: "Pro Anual",
        creditPack: "Pacote de Créditos",
        notSet: "Não definido",
        creditsTitle: "Créditos",
        creditsAvailable: "{{count}} créditos disponíveis",
        questionsAboutCredits: "Dúvidas sobre créditos e licenças?",
        upgrade: "Upgrade",
        buyCredits: "Comprar Créditos",
        upgradeToPro: "Atualizar para Pro",
        logout: "Sair",
        editName: "Editar nome",
        save: "Salvar",
        cancel: "Cancelar",
        saving: "Salvando...",
        dangerZone: "Zona de Perigo",
        deleteAccount: "Excluir Conta",
        deleteAccountWarning: "Uma vez que você exclua sua conta, não há como voltar atrás. Por favor, tenha certeza.",
        deleteAccountConfirmTitle: "Excluir Conta?",
        deleteAccountConfirmMessage: "Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.",
        deleteAccountWarningMessage: "Todos os seus dados, incluindo créditos e histórico de downloads, serão permanentemente excluídos.",
        deleteAccountConfirm: "Sim, Excluir Minha Conta",
        deleting: "Excluindo..."
    },
    zg = {
        back: "Voltar",
        close: "Fechar",
        cancel: "Cancelar",
        confirm: "Confirmar",
        save: "Salvar",
        delete: "Excluir",
        edit: "Editar",
        loading: "Carregando...",
        error: "Erro",
        success: "Sucesso"
    },
    Vg = {
        title: "Escolha uma Fonte",
        previewTextLabel: "Texto de Visualização",
        previewTextPlaceholder: "Digite um texto para visualizar...",
        defaultPreviewText: "Texto de exemplo aqui",
        searchPlaceholder: "Buscar fontes...",
        noResults: "Nenhuma fonte encontrada"
    },
    $g = {
        title: "Escolha uma Cor",
        paletteTab: "Paleta",
        presetsTab: "PLA Presets",
        selectColor: "Selecionar Cor",
        preview: "Visualizar",
        hexCode: "Código Hex",
        invalidHex: "Código de cor hex inválido",
        presetsDescription: "Cores comuns de filamento PLA para impressão 3D"
    },
    Wg = {
        noCredits: "Você não tem créditos restantes. Por favor, faça upgrade para continuar baixando.",
        svgUploadRequired: "Por favor, faça upload de uma imagem SVG antes de gerar a visualização.",
        svgRequiredNotUploaded: 'Por favor, envie uma imagem SVG para "{{paramName}}" antes de continuar.'
    },
    Zg = {
        title: "Modelos Customizáveis",
        searchPlaceholder: "Buscar {{count}} modelos...",
        searchPlaceholderEmpty: "Buscar modelos...",
        allModels: "Todos os Modelos",
        allTags: "Todas as Tags",
        filterByTag: "Filtrar por tag",
        clearFilter: "Limpar filtro",
        showingTag: "Mostrando: {{tagName}}",
        noModelsWithTag: "Nenhum modelo com esta tag ainda",
        loadingModels: "Carregando modelos..."
    },
    Xg = {
        title: "Printables",
        searchPlaceholder: "Buscar packs...",
        loadingPrintables: "Carregando packs...",
        noPrintablesYet: "Nenhum pack ainda",
        checkBackSoon: "Volte em breve para packs de arquivos prontos para imprimir!",
        downloadButton: "Baixar Pack",
        loginToDownload: "Entre para baixar",
        subscriptionRequired: "Assine para baixar",
        upgradePrompt: "Assine o plano Basic ou Pro para baixar packs de impressos",
        confirmDownload: "Confirmar Download",
        confirmDescription: "Você está prestes a baixar este pack. Isso usará créditos da sua conta.",
        relatedModel: "Personalizar este modelo",
        fileSize: "Tamanho do arquivo",
        downloading: "Baixando...",
        downloadError: "Falha no download. Tente novamente.",
        insufficientCredits: "Créditos insuficientes"
    },
    ed = {
        customizeButton: "Personalizar este modelo",
        creditNote: "O crédito só é cobrado na hora do download"
    },
    sd = {
        printingInstructions: "Instruções de Impressão",
        filesIncluded: "Arquivos Incluídos"
    },
    id = {
        starting: "Iniciando...",
        button: "Baixar",
        confirmTitle: "Confirmar Download",
        confirmDescription: "Você está prestes a baixar os seguintes arquivos. Isso usará créditos da sua conta.",
        filesGenerated: "Arquivos a serem gerados:",
        creditCost: "Custo em créditos:",
        credit: "crédito",
        credits: "créditos",
        confirmButton: "Baixar ({{credits}} crédito)",
        buttonSTL: "Baixar Arquivo STL",
        button3MF: "Baixar Arquivo 3MF",
        yourCredits: "Seus Créditos:",
        insufficientCredits: "Créditos insuficientes.",
        getMoreCredits: "Obter mais créditos"
    },
    td = {
        title: "Gerenciar Assinatura",
        status: "Status da Assinatura",
        plan: "Plano",
        nextPayment: "Proximo pagamento",
        value: "Valor",
        credits: "Creditos",
        creditsRemaining: "{{current}} de {{total}} restantes",
        cancelSubscription: "Cancelar Assinatura",
        resumeSubscription: "Retomar Assinatura",
        paymentHistory: "Historico de Pagamentos",
        creditPack: "Pacote de Creditos",
        upcomingPayment: "Proxima Cobranca",
        statusActive: "Ativo",
        statusCanceling: "Cancela em {{date}}",
        statusPastDue: "Pagamento pendente",
        statusFree: "Plano Gratuito",
        cancelConfirmTitle: "Cancelar assinatura?",
        cancelConfirmMessage: "Voce mantera acesso ate {{date}}. Apos esta data, sera movido para o plano gratuito.",
        cancelConfirmButton: "Sim, cancelar",
        resumeConfirmTitle: "Retomar assinatura?",
        resumeConfirmMessage: "Sua assinatura sera renovada automaticamente em {{date}}.",
        resumeConfirmButton: "Sim, retomar",
        noSubscription: "Voce nao tem uma assinatura ativa.",
        upgradeNow: "Assinar agora",
        canceling: "Cancelando...",
        resuming: "Retomando...",
        cancelSuccess: "Assinatura cancelada com sucesso",
        resumeSuccess: "Assinatura retomada com sucesso",
        error: "Ocorreu um erro. Por favor, tente novamente.",
        noPayments: "Nenhum pagamento ainda",
        manageSubscription: "Gerenciar Assinatura",
        paid: "Pago",
        succeeded: "Pago",
        pending: "Pendente",
        failed: "Falhou"
    },
    rd = {
        loading: "Carregando coleção...",
        notFound: "Coleção não encontrada",
        notFoundDescription: "A coleção que você procura não existe ou foi removida.",
        backToCollections: "Voltar para Coleções",
        model: "modelo",
        models: "modelos",
        searchModels: "Buscar modelos nesta coleção...",
        noModels: "Nenhum modelo nesta coleção",
        noModelsDescription: "Esta coleção ainda não tem modelos.",
        noResults: "Nenhum modelo encontrado",
        tryDifferentSearch: "Tente buscar com palavras-chave diferentes"
    },
    nd = {
        rendering: "Renderizando Seu Modelo...",
        renderingTime: "Isso geralmente leva de 5 a 30 segundos",
        complete: "Renderização Concluída!",
        readyToDownload: "Seu modelo personalizado está pronto para baixar",
        downloadNote: "O arquivo será baixado automaticamente. Se não, clique no botão acima.",
        failed: "Renderização Falhou",
        failedMessage: "Algo deu errado. Por favor, tente novamente."
    },
    od = {
        loginRequired: "Faça login para atualizar seu plano",
        title: "Atualize Seu Plano",
        upgradeTitle: "Escolha Seu Plano",
        description: "Escolha o plano perfeito para suas necessidades",
        subscriptionPlans: "Planos de Assinatura",
        creditPacks: "Pacotes de Créditos",
        creditPacksDescription: "Compra única, 1 ano para usar",
        pricingComparison: "Comparação de Preços",
        plan: "Plano",
        price: "Preço",
        credits: "Créditos",
        perCredit: "Por Crédito",
        total: "total",
        basicMonthly: "Básico Mensal",
        basicAnnual: "Básico Anual",
        proMonthly: "Pro Mensal",
        proAnnual: "Pro Anual",
        creditPacksNote: "* Pacotes de créditos válidos por 1 ano",
        monthly: "Mensal",
        annual: "Anual",
        save15: "Economize 15%",
        month: "mês",
        year: "ano",
        basic: "Básico",
        basicAudience: "Para hobbyistas e usuários ocasionais",
        pro: "Pro",
        proAudience: "Para usuários regulares e pequenos estúdios",
        packMini: "Mini",
        packLight: "Light",
        packStandard: "Standard",
        packAudience: "Perfeito para uso casual",
        packAudienceWithCost: "R${{cost}} por crédito",
        popular: "Popular",
        recommended: "Recomendado",
        creditsPerMonth: "{{count}} créditos/mês",
        totalCredits: "{{count}} créditos totais",
        perCreditCost: "R${{cost}} por crédito",
        commercialLicense: "Licença comercial incluída",
        creditsResetMonthly: "Até 20 créditos acumulam",
        creditsNeverExpire: "Válido por 1 ano",
        validFor365Days: "Válido por 365 dias",
        bestValue: "Melhor custo-benefício",
        selectPlan: "Selecionar Plano",
        billedAnnually: "Cobrado R${{amount}}/ano"
    },
    ad = {
        generatingPreview: "Gerando Preview Colorido...",
        estimatedTime: "30-60 seg",
        controlsHelp: "🖱️ Arraste para girar • Role para zoom • Clique direito para mover • Clique na peça para dimensões",
        dimensions: {
            width: "L",
            height: "A",
            depth: "P"
        }
    },
    Ad = {
        openParameters: "Abrir parâmetros",
        closeParameters: "Fechar parâmetros"
    },
    ld = {
        original: "Original",
        outline: "Contorno"
    },
    cd = {
        required: "Obrigatório",
        optional: "Opcional",
        requiredHint: "Você deve enviar uma imagem SVG ou PNG.",
        optionalHint: "Envie uma imagem ou pule este parâmetro.",
        button: "Enviar SVG ou PNG",
        buttonOptional: "Enviar SVG ou PNG (opcional)",
        uploading: "Enviando..."
    },
    gd = {
        title: "Conversão de PNG para SVG",
        threshold: "Limiar:",
        thresholdHint: "(Menor = mais pixels mantidos, Maior = menos pixels mantidos)",
        showThresholded: "Mostrar imagem limiarizada (o que é enviado ao conversor)",
        thresholdedImage: "Imagem Limiarizada",
        originalPng: "PNG Original",
        convertedSvg: "SVG Convertido",
        converting: "Convertendo para SVG...",
        conversionFailed: "Conversão falhou",
        uploading: "Enviando...",
        uploadFailed: "Falha no envio. Tente novamente.",
        confirmUpload: "Confirmar e Enviar"
    },
    dd = {
        title: "Testador de Conversão SVG",
        subtitle: "Envie uma imagem para converter em SVG e baixe a imagem e o contorno",
        uploadButton: "Enviar Imagem",
        reset: "Resetar",
        originalImage: "Imagem Original",
        outline: "Contorno (Separado)",
        downloadSvg: "Baixar SVG",
        downloadOutline: "Baixar Contorno",
        waitingForImage: "Envie uma imagem para ver o resultado",
        emptyState: "Envie uma imagem PNG, JPEG ou WebP para converter em SVG"
    },
    ud = {
        termsOfUse: "Termos de Uso",
        privacyPolicy: "Política de Privacidade",
        faq: "Perguntas Frequentes",
        agreeToTerms: "Ao criar uma conta, você concorda com nossos",
        and: "e"
    },
    hd = {
        nav: Kg,
        home: qg,
        auth: Hg,
        profile: Jg,
        common: zg,
        fontPicker: Vg,
        colorPicker: $g,
        errors: Wg,
        templates: Zg,
        printables: Xg,
        models: ed,
        modelDetail: sd,
        download: id,
        subscription: td,
        collections: rd,
        renderStatus: nd,
        upgrade: od,
        viewer: ad,
        customize: Ad,
        svgPreview: ld,
        svgUpload: cd,
        pngToSvg: gd,
        svgTester: dd,
        legal: ud
    },
    Id = {
        home: "Inicio",
        templates: "Modelos",
        printables: "Printables",
        svgTester: "Prueba SVG",
        profile: "Perfil",
        account: "Cuenta",
        login: "Iniciar Sesión",
        credits: "Créditos",
        credit: "crédito",
        signUpBonus: "Bono de Registro",
        creditPack: "Paquete de Créditos",
        monthlyQuota: "Cuota Mensual"
    },
    pd = {
        welcomeBack: "¡Bienvenido de vuelta, {{name}}!",
        whatCreate: "¿Qué crearás hoy?",
        customizeModels: "Personaliza modelos 3D en segundos",
        exploreModels: "Explora modelos 3D personalizables listos para descargar",
        searchPlaceholder: "Buscar modelos...",
        loadingModels: "Cargando modelos...",
        noModelsFound: "No se encontraron modelos",
        tryDifferentKeywords: "Intenta buscar con palabras clave diferentes",
        clearSearch: "Limpiar búsqueda",
        noModelsYet: "Aún no hay modelos",
        checkBackSoon: "¡Vuelve pronto para ver modelos 3D personalizables!",
        getStartedFree: "Comenzar Gratis",
        noDescription: "Sin descripción disponible",
        download: "descarga",
        downloads: "descargas"
    },
    Cd = {
        welcomeBack: "Bienvenido de Vuelta",
        loginSubtitle: "Inicia sesión para personalizar modelos 3D",
        createAccount: "Crear Cuenta",
        signupSubtitle: "Crea tu cuenta para empezar a personalizar modelos 3D.",
        email: "Correo Electrónico",
        password: "Contraseña",
        confirmPassword: "Confirmar Contraseña",
        name: "Nombre",
        loggingIn: "Iniciando sesión...",
        login: "Iniciar Sesión",
        creatingAccount: "Creando cuenta...",
        signUp: "Registrarse",
        dontHaveAccount: "¿No tienes una cuenta?",
        alreadyHaveAccount: "¿Ya tienes una cuenta?",
        passwordsNoMatch: "Las contraseñas no coinciden",
        passwordMinLength: "La contraseña debe tener al menos 6 caracteres",
        passwordMinLengthCognito: "La contraseña debe tener al menos 8 caracteres",
        emailPlaceholder: "tu@ejemplo.com",
        passwordPlaceholder: "••••••••",
        namePlaceholder: "Juan Pérez",
        confirmEmail: "Confirma Tu Correo",
        confirmEmailSubtitle: "Enviamos un código de verificación a {{email}}",
        confirmationCode: "Código de Verificación",
        codePlaceholder: "000000",
        codeLength: "El código debe tener 6 dígitos",
        confirming: "Confirmando...",
        confirmAccount: "Confirmar Cuenta",
        didntReceiveCode: "¿No recibiste el código?",
        resendCode: "Reenviar código",
        codeResent: "Se ha enviado un nuevo código a tu correo",
        wrongEmail: "¿Correo incorrecto?",
        startOver: "Empezar de nuevo",
        forgotPasswordLink: "¿Olvidaste tu contraseña?",
        forgotPassword: "Olvidé Mi Contraseña",
        forgotPasswordSubtitle: "Ingresa tu correo y te enviaremos un código para restablecer tu contraseña",
        emailRequired: "El correo es obligatorio",
        sendingCode: "Enviando código...",
        sendResetCode: "Enviar Código",
        resendIn: "Reenviar en {{seconds}}s",
        rememberPassword: "¿Recuerdas tu contraseña?",
        backToLogin: "Volver al inicio de sesión",
        resetPassword: "Restablecer Contraseña",
        resetPasswordSubtitle: "Ingresa el código enviado a {{email}} y tu nueva contraseña",
        newPassword: "Nueva Contraseña",
        resettingPassword: "Restableciendo contraseña...",
        requestNewCode: "Solicitar nuevo código",
        passwordResetSuccess: "Contraseña Restablecida",
        passwordResetSuccessSubtitle: "Tu contraseña ha sido restablecida exitosamente. Ahora puedes iniciar sesión con tu nueva contraseña.",
        emailConfirmedSuccess: "¡Correo verificado exitosamente! Ahora puedes iniciar sesión.",
        orContinueWithEmail: "o continúa con correo electrónico",
        googleLoginFailed: "Error al iniciar sesión con Google. Inténtalo de nuevo."
    },
    fd = {
        loginRequired: "Inicio de Sesión Requerido",
        pleaseLogin: "Por favor, inicia sesión para ver tu perfil",
        login: "Iniciar Sesión",
        signUp: "Registrarse",
        profile: "Perfil",
        manageAccount: "Administra la configuración y preferencias de tu cuenta",
        accountInformation: "Información de la Cuenta",
        name: "Nombre",
        email: "Correo Electrónico",
        support: "Soporte",
        supportSubtitle: "¿Tuviste problemas o tienes alguna sugerencia? Envía un correo",
        followUs: "Síguenos en redes sociales",
        accountType: "Tipo de Cuenta",
        freeTier: "Plan Gratuito",
        monthlyBasic: "Básico Mensual",
        monthlyPro: "Pro Mensual",
        yearlyBasic: "Básico Anual",
        yearlyPro: "Pro Anual",
        creditPack: "Paquete de Créditos",
        notSet: "No establecido",
        creditsTitle: "Créditos",
        creditsAvailable: "{{count}} créditos disponibles",
        questionsAboutCredits: "¿Dudas sobre créditos y licencias?",
        upgrade: "Upgrade",
        buyCredits: "Comprar Créditos",
        upgradeToPro: "Actualizar a Pro",
        logout: "Cerrar Sesión",
        editName: "Editar nombre",
        save: "Guardar",
        cancel: "Cancelar",
        saving: "Guardando...",
        dangerZone: "Zona de Peligro",
        deleteAccount: "Eliminar Cuenta",
        deleteAccountWarning: "Una vez que elimines tu cuenta, no hay vuelta atrás. Por favor, ten certeza.",
        deleteAccountConfirmTitle: "¿Eliminar Cuenta?",
        deleteAccountConfirmMessage: "¿Estás seguro que deseas eliminar tu cuenta? Esta acción no se puede deshacer.",
        deleteAccountWarningMessage: "Todos tus datos, incluyendo créditos e historial de descargas, serán eliminados permanentemente.",
        deleteAccountConfirm: "Sí, Eliminar Mi Cuenta",
        deleting: "Eliminando..."
    },
    Ed = {
        back: "Volver",
        close: "Cerrar",
        cancel: "Cancelar",
        confirm: "Confirmar",
        save: "Guardar",
        delete: "Eliminar",
        edit: "Editar",
        loading: "Cargando...",
        error: "Error",
        success: "Éxito"
    },
    md = {
        title: "Elige una Fuente",
        previewTextLabel: "Texto de Vista Previa",
        previewTextPlaceholder: "Escribe texto para previsualizar...",
        defaultPreviewText: "El veloz murciélago hindú",
        searchPlaceholder: "Buscar fuentes...",
        noResults: "No se encontraron fuentes"
    },
    Bd = {
        title: "Elige un Color",
        paletteTab: "Paleta",
        presetsTab: "Presets PLA",
        selectColor: "Seleccionar Color",
        preview: "Vista Previa",
        hexCode: "Código Hex",
        invalidHex: "Código de color hex inválido",
        presetsDescription: "Colores comunes de filamento PLA para impresión 3D"
    },
    Qd = {
        noCredits: "No tienes créditos restantes. Por favor, actualiza para continuar descargando.",
        svgUploadRequired: "Por favor, sube una imagen SVG antes de generar la vista previa.",
        svgRequiredNotUploaded: 'Por favor, sube una imagen SVG para "{{paramName}}" antes de continuar.'
    },
    vd = {
        title: "Modelos Personalizables",
        searchPlaceholder: "Buscar {{count}} modelos...",
        searchPlaceholderEmpty: "Buscar modelos...",
        allModels: "Todos los Modelos",
        allTags: "Todas las Etiquetas",
        filterByTag: "Filtrar por etiqueta",
        clearFilter: "Limpiar filtro",
        showingTag: "Mostrando: {{tagName}}",
        noModelsWithTag: "No hay modelos con esta etiqueta todavía",
        loadingModels: "Cargando modelos..."
    },
    yd = {
        title: "Printables",
        searchPlaceholder: "Buscar packs...",
        loadingPrintables: "Cargando packs...",
        noPrintablesYet: "Sin packs aún",
        checkBackSoon: "¡Vuelve pronto para packs de archivos listos para imprimir!",
        downloadButton: "Descargar Pack",
        loginToDownload: "Inicia sesión para descargar",
        subscriptionRequired: "Suscríbete para descargar",
        upgradePrompt: "Actualiza a Basic o Pro para descargar packs de imprimibles",
        confirmDownload: "Confirmar Descarga",
        confirmDescription: "Estás a punto de descargar este pack. Esto usará créditos de tu cuenta.",
        relatedModel: "Personalizar este modelo",
        fileSize: "Tamaño del archivo",
        downloading: "Descargando...",
        downloadError: "Descarga fallida. Inténtalo de nuevo.",
        insufficientCredits: "Créditos insuficientes"
    },
    xd = {
        customizeButton: "Personalizar este modelo",
        creditNote: "El crédito solo se descuenta al descargar"
    },
    _d = {
        printingInstructions: "Instrucciones de Impresión",
        filesIncluded: "Archivos Incluidos"
    },
    wd = {
        starting: "Iniciando...",
        button: "Descargar",
        confirmTitle: "Confirmar Descarga",
        confirmDescription: "Estás a punto de descargar los siguientes archivos. Esto usará créditos de tu cuenta.",
        filesGenerated: "Archivos a generar:",
        creditCost: "Costo en créditos:",
        credit: "crédito",
        credits: "créditos",
        confirmButton: "Descargar ({{credits}} crédito)",
        buttonSTL: "Descargar Archivo STL",
        button3MF: "Descargar Archivo 3MF",
        yourCredits: "Tus Créditos:",
        insufficientCredits: "Créditos insuficientes.",
        getMoreCredits: "Obtener más créditos"
    },
    Dd = {
        title: "Administrar Suscripcion",
        status: "Estado de la Suscripcion",
        plan: "Plan",
        nextPayment: "Proximo pago",
        value: "Valor",
        credits: "Creditos",
        creditsRemaining: "{{current}} de {{total}} restantes",
        cancelSubscription: "Cancelar Suscripcion",
        resumeSubscription: "Reanudar Suscripcion",
        paymentHistory: "Historial de Pagos",
        creditPack: "Paquete de Creditos",
        upcomingPayment: "Proximo Cobro",
        statusActive: "Activo",
        statusCanceling: "Se cancela el {{date}}",
        statusPastDue: "Pago pendiente",
        statusFree: "Plan Gratuito",
        cancelConfirmTitle: "Cancelar suscripcion?",
        cancelConfirmMessage: "Mantendras el acceso hasta {{date}}. Despues, seras movido al plan gratuito.",
        cancelConfirmButton: "Si, cancelar",
        resumeConfirmTitle: "Reanudar suscripcion?",
        resumeConfirmMessage: "Tu suscripcion se renovara automaticamente el {{date}}.",
        resumeConfirmButton: "Si, reanudar",
        noSubscription: "No tienes una suscripcion activa.",
        upgradeNow: "Suscribirse ahora",
        canceling: "Cancelando...",
        resuming: "Reanudando...",
        cancelSuccess: "Suscripcion cancelada exitosamente",
        resumeSuccess: "Suscripcion reanudada exitosamente",
        error: "Ocurrio un error. Por favor, intenta de nuevo.",
        noPayments: "Sin pagos todavia",
        manageSubscription: "Administrar Suscripcion",
        paid: "Pagado",
        succeeded: "Pagado",
        pending: "Pendiente",
        failed: "Fallido"
    },
    bd = {
        loading: "Cargando colección...",
        notFound: "Colección no encontrada",
        notFoundDescription: "La colección que buscas no existe o ha sido eliminada.",
        backToCollections: "Volver a Colecciones",
        model: "modelo",
        models: "modelos",
        searchModels: "Buscar modelos en esta colección...",
        noModels: "No hay modelos en esta colección",
        noModelsDescription: "Esta colección aún no tiene modelos.",
        noResults: "No se encontraron modelos",
        tryDifferentSearch: "Intenta buscar con palabras clave diferentes"
    },
    jd = {
        rendering: "Renderizando Tu Modelo...",
        renderingTime: "Esto generalmente toma de 5 a 30 segundos",
        complete: "Renderizado Completo!",
        readyToDownload: "Tu modelo personalizado está listo para descargar",
        downloadNote: "El archivo se descargará automáticamente. Si no, haz clic en el botón de arriba.",
        failed: "Renderizado Fallido",
        failedMessage: "Algo salió mal. Por favor, inténtalo de nuevo."
    },
    Sd = {
        loginRequired: "Inicia sesión para actualizar tu plan",
        title: "Actualiza Tu Plan",
        upgradeTitle: "Elige Tu Plan",
        description: "Elige el plan perfecto para tus necesidades",
        subscriptionPlans: "Planes de Suscripción",
        creditPacks: "Paquetes de Créditos",
        creditPacksDescription: "Compra única, 1 año para usar",
        pricingComparison: "Comparación de Precios",
        plan: "Plan",
        price: "Precio",
        credits: "Créditos",
        perCredit: "Por Crédito",
        total: "total",
        basicMonthly: "Básico Mensual",
        basicAnnual: "Básico Anual",
        proMonthly: "Pro Mensual",
        proAnnual: "Pro Anual",
        creditPacksNote: "* Paquetes de créditos válidos por 1 año",
        monthly: "Mensual",
        annual: "Anual",
        save15: "Ahorra 15%",
        month: "mes",
        year: "año",
        basic: "Básico",
        basicAudience: "Para aficionados y usuarios ocasionales",
        pro: "Pro",
        proAudience: "Para usuarios regulares y pequeños estudios",
        packMini: "Mini",
        packLight: "Light",
        packStandard: "Standard",
        packAudience: "Perfecto para uso casual",
        packAudienceWithCost: "R${{cost}} por crédito",
        popular: "Popular",
        recommended: "Recomendado",
        creditsPerMonth: "{{count}} créditos/mes",
        totalCredits: "{{count}} créditos totales",
        perCreditCost: "R${{cost}} por crédito",
        commercialLicense: "Licencia comercial incluida",
        creditsResetMonthly: "Hasta 20 créditos se acumulan",
        creditsNeverExpire: "Válido por 1 año",
        validFor365Days: "Válido por 365 días",
        bestValue: "Mejor relación calidad-precio",
        selectPlan: "Seleccionar Plan",
        billedAnnually: "Facturado R${{amount}}/año"
    },
    Nd = {
        generatingPreview: "Generando Vista Previa en Color...",
        estimatedTime: "30-60 seg",
        controlsHelp: "🖱️ Arrastra para rotar • Desplaza para zoom • Clic derecho para mover • Clic en pieza para dimensiones",
        dimensions: {
            width: "An",
            height: "Al",
            depth: "P"
        }
    },
    Rd = {
        openParameters: "Abrir parámetros",
        closeParameters: "Cerrar parámetros"
    },
    kd = {
        original: "Original",
        outline: "Contorno"
    },
    Md = {
        required: "Obligatorio",
        optional: "Opcional",
        requiredHint: "Debes subir una imagen SVG o PNG.",
        optionalHint: "Sube una imagen o salta este parámetro.",
        button: "Subir SVG o PNG",
        buttonOptional: "Subir SVG o PNG (opcional)",
        uploading: "Subiendo..."
    },
    Fd = {
        title: "Conversión de PNG a SVG",
        threshold: "Umbral:",
        thresholdHint: "(Menor = más píxeles conservados, Mayor = menos píxeles conservados)",
        showThresholded: "Mostrar imagen umbralizada (lo que se envía al conversor)",
        thresholdedImage: "Imagen Umbralizada",
        originalPng: "PNG Original",
        convertedSvg: "SVG Convertido",
        converting: "Convirtiendo a SVG...",
        conversionFailed: "Conversión fallida",
        uploading: "Subiendo...",
        uploadFailed: "Error al subir. Inténtalo de nuevo.",
        confirmUpload: "Confirmar y Subir"
    },
    Pd = {
        title: "Probador de Conversión SVG",
        subtitle: "Sube una imagen para convertirla a SVG y descarga la imagen y el contorno",
        uploadButton: "Subir Imagen",
        reset: "Reiniciar",
        originalImage: "Imagen Original",
        outline: "Contorno (Separado)",
        downloadSvg: "Descargar SVG",
        downloadOutline: "Descargar Contorno",
        waitingForImage: "Sube una imagen para ver el resultado",
        emptyState: "Sube una imagen PNG, JPEG o WebP para convertirla a SVG"
    },
    Ld = {
        termsOfUse: "Términos de Uso",
        privacyPolicy: "Política de Privacidad",
        faq: "Preguntas Frecuentes",
        agreeToTerms: "Al crear una cuenta, aceptas nuestros",
        and: "y"
    },
    Td = {
        nav: Id,
        home: pd,
        auth: Cd,
        profile: fd,
        common: Ed,
        fontPicker: md,
        colorPicker: Bd,
        errors: Qd,
        templates: vd,
        printables: yd,
        models: xd,
        modelDetail: _d,
        download: wd,
        subscription: Dd,
        collections: bd,
        renderStatus: jd,
        upgrade: Sd,
        viewer: Nd,
        customize: Rd,
        svgPreview: kd,
        svgUpload: Md,
        pngToSvg: Fd,
        svgTester: Pd,
        legal: Ld
    };
Ma.use(Fa).use(Pa).init({
    resources: {
        en: {
            translation: Yg
        },
        pt: {
            translation: hd
        },
        es: {
            translation: Td
        }
    },
    fallbackLng: "en",
    interpolation: {
        escapeValue: !1
    },
    detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"]
    }
});
oc();
const Gd = "phc_h4M9jK0mBZFVs2inmZltsl0cWLO96wBpi5Csehkobz9";
{
    ae.init(Gd, {
        api_host: "https://us.i.posthog.com",
        persistence: "memory",
        autocapture: !0,
        capture_pageview: !0,
        capture_pageleave: !0
    });
    const i = ws();
    Object.keys(i).length > 0 && ae.register(i)
}
_a.createRoot(document.getElementById("root")).render(r.jsx(Ra.StrictMode, {
    children: r.jsx(fg, {})
}));
export {
    pa as D, Ji as O, C as S, J as a, Ne as b, Jc as e, Hi as g, Hc as i, ae as n, ve as u
};