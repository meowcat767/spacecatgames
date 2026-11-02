/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

!(function (e) {
  function a(a) {
    for (var t, r, n = a[0], i = a[1], s = 0, c = []; s < n.length; s++)
      (r = n[s]),
        Object.prototype.hasOwnProperty.call(o, r) && o[r] && c.push(o[r][0]),
        (o[r] = 0);
    for (t in i) Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
    for (l && l(a); c.length; ) c.shift()();
  }
  var t = {},
    o = { 4: 0 };
  function r(a) {
    if (t[a]) return t[a].exports;
    var o = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.e = function (e) {
    var a = [],
      t = o[e];
    if (0 !== t)
      if (t) a.push(t[2]);
      else {
        var n = new Promise(function (a, r) {
          t = o[e] = [a, r];
        });
        a.push((t[2] = n));
        var i,
          s = document.createElement("script");
        (s.charset = "utf-8"),
          (s.timeout = 120),
          r.nc && s.setAttribute("nonce", r.nc),
          (s.src = (function (e) {
            return (
              r.p +
              "js/" +
              ({
                0: "vendors~downloader~icns~jszip~sha256",
                1: "downloader",
                2: "icns",
                3: "jszip",
                5: "packager-options-ui",
                6: "sha256",
              }[e] || e) +
              "." +
              {
                0: "06c11af252a04c3ba91a",
                1: "6be867a5573163ee46e9",
                2: "3fb4249648379d94d6d0",
                3: "9ef51e88f541a11e4a66",
                5: "51a5810e4972fc948316",
                6: "bafc49e65acc30b8a760",
              }[e] +
              ".js"
            );
          })(e));
        var l = new Error();
        i = function (a) {
          (s.onerror = s.onload = null), clearTimeout(c);
          var t = o[e];
          if (0 !== t) {
            if (t) {
              var r = a && ("load" === a.type ? "missing" : a.type),
                n = a && a.target && a.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + n + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = r),
                (l.request = n),
                t[1](l);
            }
            o[e] = void 0;
          }
        };
        var c = setTimeout(function () {
          i({ type: "timeout", target: s });
        }, 12e4);
        (s.onerror = s.onload = i), document.head.appendChild(s);
      }
    return Promise.all(a);
  }),
    (r.m = e),
    (r.c = t),
    (r.d = function (e, a, t) {
      r.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: t });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, a) {
      if ((1 & a && (e = r(e)), 8 & a)) return e;
      if (4 & a && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & a && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            t,
            o,
            function (a) {
              return e[a];
            }.bind(null, o)
          );
      return t;
    }),
    (r.n = function (e) {
      var a =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(a, "a", a), a;
    }),
    (r.o = function (e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (r.p = ""),
    (r.oe = function (e) {
      throw (console.error(e), e);
    });
  var n = (window.webpackJsonp = window.webpackJsonp || []),
    i = n.push.bind(n);
  (n.push = a), (n = n.slice());
  for (var s = 0; s < n.length; s++) a(n[s]);
  var l = i;
  r((r.s = 43));
})([
  function (e, a, t) {
    "use strict";
    function o() {}
    t.d(a, "a", function () {
      return _e;
    }),
      t.d(a, "b", function () {
        return ze;
      }),
      t.d(a, "c", function () {
        return we;
      }),
      t.d(a, "d", function () {
        return T;
      }),
      t.d(a, "e", function () {
        return H;
      }),
      t.d(a, "f", function () {
        return n;
      }),
      t.d(a, "g", function () {
        return Z;
      }),
      t.d(a, "h", function () {
        return qe;
      }),
      t.d(a, "i", function () {
        return ge;
      }),
      t.d(a, "j", function () {
        return me;
      }),
      t.d(a, "k", function () {
        return Le;
      }),
      t.d(a, "l", function () {
        return g;
      }),
      t.d(a, "m", function () {
        return pe;
      }),
      t.d(a, "n", function () {
        return Be;
      }),
      t.d(a, "o", function () {
        return Ue;
      }),
      t.d(a, "p", function () {
        return De;
      }),
      t.d(a, "q", function () {
        return Ne;
      }),
      t.d(a, "r", function () {
        return b;
      }),
      t.d(a, "s", function () {
        return Je;
      }),
      t.d(a, "t", function () {
        return N;
      }),
      t.d(a, "u", function () {
        return D;
      }),
      t.d(a, "v", function () {
        return B;
      }),
      t.d(a, "w", function () {
        return F;
      }),
      t.d(a, "x", function () {
        return f;
      }),
      t.d(a, "y", function () {
        return h;
      }),
      t.d(a, "z", function () {
        return He;
      }),
      t.d(a, "A", function () {
        return Re;
      }),
      t.d(a, "B", function () {
        return r;
      }),
      t.d(a, "C", function () {
        return Ke;
      }),
      t.d(a, "D", function () {
        return K;
      }),
      t.d(a, "E", function () {
        return $;
      }),
      t.d(a, "F", function () {
        return c;
      }),
      t.d(a, "G", function () {
        return q;
      }),
      t.d(a, "H", function () {
        return Ze;
      }),
      t.d(a, "I", function () {
        return o;
      }),
      t.d(a, "J", function () {
        return ue;
      }),
      t.d(a, "K", function () {
        return de;
      }),
      t.d(a, "L", function () {
        return l;
      }),
      t.d(a, "M", function () {
        return d;
      }),
      t.d(a, "N", function () {
        return X;
      }),
      t.d(a, "O", function () {
        return ee;
      }),
      t.d(a, "P", function () {
        return U;
      }),
      t.d(a, "Q", function () {
        return J;
      }),
      t.d(a, "R", function () {
        return G;
      }),
      t.d(a, "S", function () {
        return Q;
      }),
      t.d(a, "T", function () {
        return y;
      }),
      t.d(a, "U", function () {
        return Y;
      }),
      t.d(a, "V", function () {
        return W;
      }),
      t.d(a, "W", function () {
        return w;
      }),
      t.d(a, "X", function () {
        return p;
      }),
      t.d(a, "Y", function () {
        return k;
      }),
      t.d(a, "Z", function () {
        return R;
      }),
      t.d(a, "ab", function () {
        return ye;
      }),
      t.d(a, "bb", function () {
        return _;
      }),
      t.d(a, "cb", function () {
        return ae;
      }),
      t.d(a, "db", function () {
        return Ve;
      }),
      t.d(a, "eb", function () {
        return Me;
      }),
      t.d(a, "fb", function () {
        return We;
      }),
      t.d(a, "gb", function () {
        return j;
      });
    const r = (e) => e;
    function n(e, a) {
      for (const t in a) e[t] = a[t];
      return e;
    }
    function i(e) {
      return e();
    }
    function s() {
      return Object.create(null);
    }
    function l(e) {
      e.forEach(i);
    }
    function c(e) {
      return "function" == typeof e;
    }
    function d(e, a) {
      return e != e
        ? a == a
        : e !== a || (e && "object" == typeof e) || "function" == typeof e;
    }
    let u;
    function p(e, a) {
      return u || (u = document.createElement("a")), (u.href = a), e === u.href;
    }
    function m(e) {
      return 0 === Object.keys(e).length;
    }
    function k(e, ...a) {
      if (null == e) return o;
      const t = e.subscribe(...a);
      return t.unsubscribe ? () => t.unsubscribe() : t;
    }
    function g(e, a, t) {
      e.$$.on_destroy.push(k(a, t));
    }
    function b(e, a, t, o) {
      if (e) {
        const r = v(e, a, t, o);
        return e[0](r);
      }
    }
    function v(e, a, t, o) {
      return e[1] && o ? n(t.ctx.slice(), e[1](o(a))) : t.ctx;
    }
    function h(e, a, t, o) {
      if (e[2] && o) {
        const r = e[2](o(t));
        if (void 0 === a.dirty) return r;
        if ("object" == typeof r) {
          const e = [],
            t = Math.max(a.dirty.length, r.length);
          for (let o = 0; o < t; o += 1) e[o] = a.dirty[o] | r[o];
          return e;
        }
        return a.dirty | r;
      }
      return a.dirty;
    }
    function j(e, a, t, o, r, n) {
      if (r) {
        const i = v(a, t, o, n);
        e.p(i, r);
      }
    }
    function f(e) {
      if (e.ctx.length > 32) {
        const a = [],
          t = e.ctx.length / 32;
        for (let e = 0; e < t; e++) a[e] = -1;
        return a;
      }
      return -1;
    }
    function y(e, a, t) {
      return e.set(t), a;
    }
    function w(e) {
      const a = "string" == typeof e && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
      return a ? [parseFloat(a[1]), a[2] || "px"] : [e, "px"];
    }
    const z = "undefined" != typeof window;
    let S = z ? () => window.performance.now() : () => Date.now(),
      O = z ? (e) => requestAnimationFrame(e) : o;
    const C = new Set();
    function x(e) {
      C.forEach((a) => {
        a.c(e) || (C.delete(a), a.f());
      }),
        0 !== C.size && O(x);
    }
    function P(e) {
      let a;
      return (
        0 === C.size && O(x),
        {
          promise: new Promise((t) => {
            C.add((a = { c: e, f: t }));
          }),
          abort() {
            C.delete(a);
          },
        }
      );
    }
    const I =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof globalThis
        ? globalThis
        : global;
    class A {
      constructor(e) {
        (this.options = e),
          (this._listeners = "WeakMap" in I ? new WeakMap() : void 0);
      }
      observe(e, a) {
        return (
          this._listeners.set(e, a),
          this._getObserver().observe(e, this.options),
          () => {
            this._listeners.delete(e), this._observer.unobserve(e);
          }
        );
      }
      _getObserver() {
        var e;
        return null !== (e = this._observer) && void 0 !== e
          ? e
          : (this._observer = new ResizeObserver((e) => {
              var a;
              for (const t of e)
                A.entries.set(t.target, t),
                  null === (a = this._listeners.get(t.target)) ||
                    void 0 === a ||
                    a(t);
            }));
      }
    }
    A.entries = "WeakMap" in I ? new WeakMap() : void 0;
    let E = !1;
    function T(e, a) {
      e.appendChild(a);
    }
    function H(e, a, t) {
      const o = L(e);
      if (!o.getElementById(a)) {
        const e = B("style");
        (e.id = a), (e.textContent = t), M(o, e);
      }
    }
    function L(e) {
      if (!e) return document;
      const a = e.getRootNode ? e.getRootNode() : e.ownerDocument;
      return a && a.host ? a : e.ownerDocument;
    }
    function V(e) {
      const a = B("style");
      return M(L(e), a), a.sheet;
    }
    function M(e, a) {
      return T(e.head || e, a), a.sheet;
    }
    function $(e, a, t) {
      e.insertBefore(a, t || null);
    }
    function D(e) {
      e.parentNode && e.parentNode.removeChild(e);
    }
    function N(e, a) {
      for (let t = 0; t < e.length; t += 1) e[t] && e[t].d(a);
    }
    function B(e) {
      return document.createElement(e);
    }
    function R(e) {
      return document.createTextNode(e);
    }
    function W() {
      return R(" ");
    }
    function F() {
      return R("");
    }
    function q(e, a, t, o) {
      return e.addEventListener(a, t, o), () => e.removeEventListener(a, t, o);
    }
    function U(e) {
      return function (a) {
        a.target === this && e.call(this, a);
      };
    }
    function Z(e, a, t) {
      null == t
        ? e.removeAttribute(a)
        : e.getAttribute(a) !== t && e.setAttribute(a, t);
    }
    function J(e, a, t) {
      a in e
        ? (e[a] = ("boolean" == typeof e[a] && "" === t) || t)
        : Z(e, a, t);
    }
    function K(e) {
      let a;
      return {
        p(...t) {
          (a = t), a.forEach((a) => e.push(a));
        },
        r() {
          a.forEach((a) => e.splice(e.indexOf(a), 1));
        },
      };
    }
    function _(e) {
      return "" === e ? null : +e;
    }
    function G(e, a) {
      (a = "" + a), e.data !== a && (e.data = a);
    }
    function Q(e, a) {
      e.value = null == a ? "" : a;
    }
    function Y(e, a, t, o) {
      null == t
        ? e.style.removeProperty(a)
        : e.style.setProperty(a, t, o ? "important" : "");
    }
    function X(e, a, t) {
      for (let t = 0; t < e.options.length; t += 1) {
        const o = e.options[t];
        if (o.__value === a) return void (o.selected = !0);
      }
      (t && void 0 === a) || (e.selectedIndex = -1);
    }
    function ee(e) {
      const a = e.querySelector(":checked");
      return a && a.__value;
    }
    function ae(e, a, t) {
      e.classList[t ? "add" : "remove"](a);
    }
    function te(e, a, { bubbles: t = !1, cancelable: o = !1 } = {}) {
      const r = document.createEvent("CustomEvent");
      return r.initCustomEvent(e, t, o, a), r;
    }
    const oe = new Map();
    let re,
      ne = 0;
    function ie(e, a, t, o, r, n, i, s = 0) {
      const l = 16.666 / o;
      let c = "{\n";
      for (let e = 0; e <= 1; e += l) {
        const o = a + (t - a) * n(e);
        c += 100 * e + `%{${i(o, 1 - o)}}\n`;
      }
      const d = c + `100% {${i(t, 1 - t)}}\n}`,
        u = `__svelte_${(function (e) {
          let a = 5381,
            t = e.length;
          for (; t--; ) a = ((a << 5) - a) ^ e.charCodeAt(t);
          return a >>> 0;
        })(d)}_${s}`,
        p = L(e),
        { stylesheet: m, rules: k } =
          oe.get(p) ||
          (function (e, a) {
            const t = { stylesheet: V(a), rules: {} };
            return oe.set(e, t), t;
          })(p, e);
      k[u] ||
        ((k[u] = !0), m.insertRule(`@keyframes ${u} ${d}`, m.cssRules.length));
      const g = e.style.animation || "";
      return (
        (e.style.animation = `${
          g ? `${g}, ` : ""
        }${u} ${o}ms linear ${r}ms 1 both`),
        (ne += 1),
        u
      );
    }
    function se(e, a) {
      const t = (e.style.animation || "").split(", "),
        o = t.filter(
          a ? (e) => e.indexOf(a) < 0 : (e) => -1 === e.indexOf("__svelte")
        ),
        r = t.length - o.length;
      r &&
        ((e.style.animation = o.join(", ")),
        (ne -= r),
        ne ||
          O(() => {
            ne ||
              (oe.forEach((e) => {
                const { ownerNode: a } = e.stylesheet;
                a && D(a);
              }),
              oe.clear());
          }));
    }
    function le(e) {
      re = e;
    }
    function ce() {
      if (!re)
        throw new Error("Function called outside component initialization");
      return re;
    }
    function de(e) {
      ce().$$.on_mount.push(e);
    }
    function ue(e) {
      ce().$$.on_destroy.push(e);
    }
    function pe() {
      const e = ce();
      return (a, t, { cancelable: o = !1 } = {}) => {
        const r = e.$$.callbacks[a];
        if (r) {
          const n = te(a, t, { cancelable: o });
          return (
            r.slice().forEach((a) => {
              a.call(e, n);
            }),
            !n.defaultPrevented
          );
        }
        return !0;
      };
    }
    function me(e, a) {
      const t = e.$$.callbacks[a.type];
      t && t.slice().forEach((e) => e.call(this, a));
    }
    const ke = [],
      ge = [];
    let be = [];
    const ve = [],
      he = Promise.resolve();
    let je = !1;
    function fe() {
      je || ((je = !0), he.then(xe));
    }
    function ye() {
      return fe(), he;
    }
    function we(e) {
      be.push(e);
    }
    function ze(e) {
      ve.push(e);
    }
    const Se = new Set();
    let Oe,
      Ce = 0;
    function xe() {
      if (0 !== Ce) return;
      const e = re;
      do {
        try {
          for (; Ce < ke.length; ) {
            const e = ke[Ce];
            Ce++, le(e), Pe(e.$$);
          }
        } catch (e) {
          throw ((ke.length = 0), (Ce = 0), e);
        }
        for (le(null), ke.length = 0, Ce = 0; ge.length; ) ge.pop()();
        for (let e = 0; e < be.length; e += 1) {
          const a = be[e];
          Se.has(a) || (Se.add(a), a());
        }
        be.length = 0;
      } while (ke.length);
      for (; ve.length; ) ve.pop()();
      (je = !1), Se.clear(), le(e);
    }
    function Pe(e) {
      if (null !== e.fragment) {
        e.update(), l(e.before_update);
        const a = e.dirty;
        (e.dirty = [-1]),
          e.fragment && e.fragment.p(e.ctx, a),
          e.after_update.forEach(we);
      }
    }
    function Ie() {
      return (
        Oe ||
          ((Oe = Promise.resolve()),
          Oe.then(() => {
            Oe = null;
          })),
        Oe
      );
    }
    function Ae(e, a, t) {
      e.dispatchEvent(te(`${a ? "intro" : "outro"}${t}`));
    }
    const Ee = new Set();
    let Te;
    function He() {
      Te = { r: 0, c: [], p: Te };
    }
    function Le() {
      Te.r || l(Te.c), (Te = Te.p);
    }
    function Ve(e, a) {
      e && e.i && (Ee.delete(e), e.i(a));
    }
    function Me(e, a, t, o) {
      if (e && e.o) {
        if (Ee.has(e)) return;
        Ee.add(e),
          Te.c.push(() => {
            Ee.delete(e), o && (t && e.d(1), o());
          }),
          e.o(a);
      } else o && o();
    }
    const $e = { duration: 0 };
    function De(e, a, t) {
      const n = { direction: "in" };
      let i,
        s,
        l = a(e, t, n),
        d = !1,
        u = 0;
      function p() {
        i && se(e, i);
      }
      function m() {
        const {
          delay: a = 0,
          duration: t = 300,
          easing: n = r,
          tick: c = o,
          css: m,
        } = l || $e;
        m && (i = ie(e, 0, 1, t, a, n, m, u++)), c(0, 1);
        const k = S() + a,
          g = k + t;
        s && s.abort(),
          (d = !0),
          we(() => Ae(e, !0, "start")),
          (s = P((a) => {
            if (d) {
              if (a >= g) return c(1, 0), Ae(e, !0, "end"), p(), (d = !1);
              if (a >= k) {
                const e = n((a - k) / t);
                c(e, 1 - e);
              }
            }
            return d;
          }));
      }
      let k = !1;
      return {
        start() {
          k || ((k = !0), se(e), c(l) ? ((l = l(n)), Ie().then(m)) : m());
        },
        invalidate() {
          k = !1;
        },
        end() {
          d && (p(), (d = !1));
        },
      };
    }
    function Ne(e, a, t) {
      const n = { direction: "out" };
      let i,
        s = a(e, t, n),
        d = !0;
      const u = Te;
      function p() {
        const {
          delay: a = 0,
          duration: t = 300,
          easing: n = r,
          tick: c = o,
          css: p,
        } = s || $e;
        p && (i = ie(e, 1, 0, t, a, n, p));
        const m = S() + a,
          k = m + t;
        we(() => Ae(e, !1, "start")),
          P((a) => {
            if (d) {
              if (a >= k) return c(0, 1), Ae(e, !1, "end"), --u.r || l(u.c), !1;
              if (a >= m) {
                const e = n((a - m) / t);
                c(1 - e, e);
              }
            }
            return d;
          });
      }
      return (
        (u.r += 1),
        c(s)
          ? Ie().then(() => {
              (s = s(n)), p();
            })
          : p(),
        {
          end(a) {
            a && s.tick && s.tick(1, 0), d && (i && se(e, i), (d = !1));
          },
        }
      );
    }
    function Be(e, a, t, n) {
      const i = { direction: "both" };
      let s = a(e, t, i),
        d = n ? 0 : 1,
        u = null,
        p = null,
        m = null;
      function k() {
        m && se(e, m);
      }
      function g(e, a) {
        const t = e.b - d;
        return (
          (a *= Math.abs(t)),
          {
            a: d,
            b: e.b,
            d: t,
            duration: a,
            start: e.start,
            end: e.start + a,
            group: e.group,
          }
        );
      }
      function b(a) {
        const {
            delay: t = 0,
            duration: n = 300,
            easing: i = r,
            tick: c = o,
            css: b,
          } = s || $e,
          v = { start: S() + t, b: a };
        a || ((v.group = Te), (Te.r += 1)),
          u || p
            ? (p = v)
            : (b && (k(), (m = ie(e, d, a, n, t, i, b))),
              a && c(0, 1),
              (u = g(v, n)),
              we(() => Ae(e, a, "start")),
              P((a) => {
                if (
                  (p &&
                    a > p.start &&
                    ((u = g(p, n)),
                    (p = null),
                    Ae(e, u.b, "start"),
                    b && (k(), (m = ie(e, d, u.b, u.duration, 0, i, s.css)))),
                  u)
                )
                  if (a >= u.end)
                    c((d = u.b), 1 - d),
                      Ae(e, u.b, "end"),
                      p || (u.b ? k() : --u.group.r || l(u.group.c)),
                      (u = null);
                  else if (a >= u.start) {
                    const e = a - u.start;
                    (d = u.a + u.d * i(e / u.duration)), c(d, 1 - d);
                  }
                return !(!u && !p);
              }));
      }
      return {
        run(e) {
          c(s)
            ? Ie().then(() => {
                (s = s(i)), b(e);
              })
            : b(e);
        },
        end() {
          k(), (u = p = null);
        },
      };
    }
    function Re(e, a) {
      const t = (a.token = {});
      function o(e, o, r, n) {
        if (a.token !== t) return;
        a.resolved = n;
        let i = a.ctx;
        void 0 !== r && ((i = i.slice()), (i[r] = n));
        const s = e && (a.current = e)(i);
        let l = !1;
        a.block &&
          (a.blocks
            ? a.blocks.forEach((e, t) => {
                t !== o &&
                  e &&
                  (He(),
                  Me(e, 1, 1, () => {
                    a.blocks[t] === e && (a.blocks[t] = null);
                  }),
                  Le());
              })
            : a.block.d(1),
          s.c(),
          Ve(s, 1),
          s.m(a.mount(), a.anchor),
          (l = !0)),
          (a.block = s),
          a.blocks && (a.blocks[o] = s),
          l && xe();
      }
      if (
        !(r = e) ||
        ("object" != typeof r && "function" != typeof r) ||
        "function" != typeof r.then
      ) {
        if (a.current !== a.then) return o(a.then, 1, a.value, e), !0;
        a.resolved = e;
      } else {
        const t = ce();
        if (
          (e.then(
            (e) => {
              le(t), o(a.then, 1, a.value, e), le(null);
            },
            (e) => {
              if ((le(t), o(a.catch, 2, a.error, e), le(null), !a.hasCatch))
                throw e;
            }
          ),
          a.current !== a.pending)
        )
          return o(a.pending, 0), !0;
      }
      var r;
    }
    function We(e, a, t) {
      const o = a.slice(),
        { resolved: r } = e;
      e.current === e.then && (o[e.value] = r),
        e.current === e.catch && (o[e.error] = r),
        e.block.p(o, t);
    }
    new Set([
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected",
    ]);
    let Fe;
    function qe(e, a, t) {
      const o = e.$$.props[a];
      void 0 !== o && ((e.$$.bound[o] = t), t(e.$$.ctx[o]));
    }
    function Ue(e) {
      e && e.c();
    }
    function Ze(e, a, t, o) {
      const { fragment: r, after_update: n } = e.$$;
      r && r.m(a, t),
        o ||
          we(() => {
            const a = e.$$.on_mount.map(i).filter(c);
            e.$$.on_destroy ? e.$$.on_destroy.push(...a) : l(a),
              (e.$$.on_mount = []);
          }),
        n.forEach(we);
    }
    function Je(e, a) {
      const t = e.$$;
      null !== t.fragment &&
        (!(function (e) {
          const a = [],
            t = [];
          be.forEach((o) => (-1 === e.indexOf(o) ? a.push(o) : t.push(o))),
            t.forEach((e) => e()),
            (be = a);
        })(t.after_update),
        l(t.on_destroy),
        t.fragment && t.fragment.d(a),
        (t.on_destroy = t.fragment = null),
        (t.ctx = []));
    }
    function Ke(e, a, t, r, n, i, c, d = [-1]) {
      const u = re;
      le(e);
      const p = (e.$$ = {
        fragment: null,
        ctx: [],
        props: i,
        update: o,
        not_equal: n,
        bound: s(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(a.context || (u ? u.$$.context : [])),
        callbacks: s(),
        dirty: d,
        skip_bound: !1,
        root: a.target || u.$$.root,
      });
      c && c(p.root);
      let m = !1;
      if (
        ((p.ctx = t
          ? t(e, a.props || {}, (a, t, ...o) => {
              const r = o.length ? o[0] : t;
              return (
                p.ctx &&
                  n(p.ctx[a], (p.ctx[a] = r)) &&
                  (!p.skip_bound && p.bound[a] && p.bound[a](r),
                  m &&
                    (function (e, a) {
                      -1 === e.$$.dirty[0] &&
                        (ke.push(e), fe(), e.$$.dirty.fill(0)),
                        (e.$$.dirty[(a / 31) | 0] |= 1 << a % 31);
                    })(e, a)),
                t
              );
            })
          : []),
        p.update(),
        (m = !0),
        l(p.before_update),
        (p.fragment = !!r && r(p.ctx)),
        a.target)
      ) {
        if (a.hydrate) {
          E = !0;
          const e = (function (e) {
            return Array.from(e.childNodes);
          })(a.target);
          p.fragment && p.fragment.l(e), e.forEach(D);
        } else p.fragment && p.fragment.c();
        a.intro && Ve(e.$$.fragment),
          Ze(e, a.target, a.anchor, a.customElement),
          (E = !1),
          xe();
      }
      le(u);
    }
    "function" == typeof HTMLElement &&
      (Fe = class extends HTMLElement {
        constructor() {
          super(), this.attachShadow({ mode: "open" });
        }
        connectedCallback() {
          const { on_mount: e } = this.$$;
          this.$$.on_disconnect = e.map(i).filter(c);
          for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
        }
        attributeChangedCallback(e, a, t) {
          this[e] = t;
        }
        disconnectedCallback() {
          l(this.$$.on_disconnect);
        }
        $destroy() {
          Je(this, 1), (this.$destroy = o);
        }
        $on(e, a) {
          if (!c(a)) return o;
          const t = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return (
            t.push(a),
            () => {
              const e = t.indexOf(a);
              -1 !== e && t.splice(e, 1);
            }
          );
        }
        $set(e) {
          this.$$set &&
            !m(e) &&
            ((this.$$.skip_bound = !0),
            this.$$set(e),
            (this.$$.skip_bound = !1));
        }
      });
    class _e {
      $destroy() {
        Je(this, 1), (this.$destroy = o);
      }
      $on(e, a) {
        if (!c(a)) return o;
        const t = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return (
          t.push(a),
          () => {
            const e = t.indexOf(a);
            -1 !== e && t.splice(e, 1);
          }
        );
      }
      $set(e) {
        this.$$set &&
          !m(e) &&
          ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
      }
    }
  },
  function (e, a, t) {
    "use strict";
    t.d(a, "b", function () {
      return r;
    }),
      t.d(a, "c", function () {
        return n;
      }),
      t.d(a, "a", function () {
        return i;
      }),
      t.d(a, "d", function () {
        return c;
      });
    var o = t(6);
    const r = Object(o.b)(null),
      n = Object(o.b)({ progress: 0, visible: !1, text: "" });
    n.reset = () => {
      n.set({ progress: 0, visible: !1, text: "" });
    };
    const i = Object(o.b)(null);
    (i.replace = (e) => {
      i.update((a) => (a && a.abort(), e));
    }),
      (i.abort = () => {
        i.update((e) => (e && (e.abort(), n.reset()), null));
      });
    const s = ["system", "dark", "light"],
      l = "P4.theme",
      c = Object(o.b)("system");
    try {
      const e = localStorage.getItem(l);
      s.includes(e) && c.set(e);
    } catch (e) {}
    c.subscribe((e) => {
      try {
        "system" === e
          ? (localStorage.removeItem(l),
            document
              .getElementsByTagName("html")[0]
              .setAttribute("class", "mdui-theme-auto"))
          : (localStorage.setItem(l, e),
            document
              .getElementsByTagName("html")[0]
              .setAttribute("class", "mdui-theme-" + e));
      } catch (e) {}
    });
  },
  function (e, a, t) {
    "use strict";
    t.d(a, "f", function () {
      return o;
    }),
      t.d(a, "a", function () {
        return r;
      }),
      t.d(a, "e", function () {
        return n;
      }),
      t.d(a, "d", function () {
        return i;
      }),
      t.d(a, "c", function () {
        return s;
      }),
      t.d(a, "b", function () {
        return l;
      });
    class o extends Error {
      constructor(e) {
        super(e), (this.name = "UserError");
      }
    }
    class r extends Error {
      constructor(e) {
        super(
          e ||
            "Aborted. Although this looks like a scary error, it's perfectly normal if you interrupted a loading bar."
        ),
          (this.name = "AbortError");
      }
    }
    class n extends Error {
      constructor(e) {
        super(`Could not fetch ${e} for unknown reason.`),
          (this.name = "UnknownNetworkError"),
          (this.url = e);
      }
    }
    class i extends Error {
      constructor(e) {
        super(e), (this.name = "OutdatedPackagerError");
      }
    }
    class s extends Error {
      constructor(e, a) {
        super(e), (this.status = a), (this.name = "HTTPError");
      }
    }
    class l extends Error {
      constructor(e) {
        super(e), (this.name = "CannotAccessProjectError");
      }
    }
  },
  function (e, a, t) {
    "use strict";
    t.d(a, "b", function () {
      return c;
    }),
      t.d(a, "a", function () {
        return u;
      });
    var o = t(6),
      r = t(10),
      n = t(13),
      i = t(17);
    t.d(a, "c", function () {
      return i;
    });
    const s = {
        en: () => n,
        ca: () => t(20),
        cs: () => t(21),
        de: () => t(22),
        es: () => t(23),
        fi: () => t(24),
        fr: () => t(25),
        hu: () => t(26),
        it: () => t(27),
        ja: () => t(28),
        ko: () => t(29),
        lt: () => t(30),
        nb: () => t(31),
        nl: () => t(32),
        pl: () => t(33),
        pt: () => t(34),
        "pt-br": () => t(35),
        ru: () => t(36),
        sl: () => t(37),
        sv: () => t(38),
        tr: () => t(39),
        uk: () => t(40),
        "zh-cn": () => t(41),
        "zh-tw": () => t(42),
      },
      l = ["en", "es", "ja", "nl", "it", "sl"],
      c = Object(r.a)(
        "P4.locale",
        [
          navigator.language.toLowerCase(),
          navigator.language.toLowerCase().split("-")[0],
        ].find((e) => l.includes(e) && s[e]) || "en"
      );
    c.subscribe((e) => {
      s[e] || c.set("en"), (document.documentElement.lang = e);
    });
    const d = (e, a) => {
        const t = a.split(".");
        for (let a = 0; a < t.length - 1; a++) if (!(e = e[t[a]])) return null;
        return e[t[t.length - 1]] || null;
      },
      u = Object(o.a)(c, (e) => {
        const a = s[e](),
          t = (e) => d(a, e) || d(n, e) || e;
        return (u.translate = t), t;
      });
  },
  function (e, a, t) {
    "use strict";
    var o = t(0);
    t.d(a, "a", function () {
      return o.m;
    }),
      t.d(a, "b", function () {
        return o.J;
      }),
      t.d(a, "c", function () {
        return o.K;
      }),
      t.d(a, "d", function () {
        return o.ab;
      });
  },
  function (e, a, t) {
    "use strict";
    var o = t(0),
      r = t(4),
      n = t(3),
      i = t.p + "assets/reset.80a6e1615fc013684ad8047dba5ce064.svg";
    function s(e) {
      Object(o.e)(
        e,
        "svelte-zife22",
        'button.svelte-zife22{width:26px;height:26px;margin:0;padding:4px;border:none;background:none;cursor:pointer;border-radius:4px}button.svelte-zife22:hover{background:rgba(0, 0, 0, 0.15)}button.svelte-zife22:active{background:rgba(0, 0, 0, 0.3)}[theme="dark"] button.svelte-zife22:hover{background:rgba(255, 255, 255, 0.15)}[theme="dark"] button.svelte-zife22:active{background:rgba(255, 255, 255, 0.3)}img.svelte-zife22{width:100%;height:100%}[theme="dark"] img.svelte-zife22{filter:invert(100%)}'
      );
    }
    function l(e) {
      let a, t, r, n, s, l, c, d;
      return {
        c() {
          (a = Object(o.v)("button")),
            (t = Object(o.v)("img")),
            Object(o.X)(t.src, (r = i)) || Object(o.g)(t, "src", r),
            Object(o.g)(t, "draggable", (n = !1)),
            Object(o.g)(t, "alt", (s = e[0]("reset.reset"))),
            Object(o.g)(t, "title", (l = e[0]("reset.reset"))),
            Object(o.g)(t, "class", "svelte-zife22"),
            Object(o.g)(a, "class", "svelte-zife22");
        },
        m(r, n) {
          Object(o.E)(r, a, n),
            Object(o.d)(a, t),
            c || ((d = Object(o.G)(a, "click", e[1])), (c = !0));
        },
        p(e, [a]) {
          1 & a && s !== (s = e[0]("reset.reset")) && Object(o.g)(t, "alt", s),
            1 & a &&
              l !== (l = e[0]("reset.reset")) &&
              Object(o.g)(t, "title", l);
        },
        i: o.I,
        o: o.I,
        d(e) {
          e && Object(o.u)(a), (c = !1), d();
        },
      };
    }
    function c(e, a, t) {
      let i;
      Object(o.l)(e, n.a, (e) => t(0, (i = e)));
      const s = Object(r.a)();
      return [
        i,
        () => {
          confirm(i("reset.confirm")) && s("click");
        },
      ];
    }
    class d extends o.a {
      constructor(e) {
        super(), Object(o.C)(this, e, c, l, o.M, {}, s);
      }
    }
    var u = d;
    function p(e) {
      Object(o.e)(e, "svelte-7upl3d", ".reset.svelte-7upl3d{float:right}");
    }
    function m(e) {
      let a, t, r;
      return (
        (t = new u({})),
        t.$on("click", function () {
          Object(o.F)(e[0]) && e[0].apply(this, arguments);
        }),
        {
          c() {
            (a = Object(o.v)("div")),
              Object(o.o)(t.$$.fragment),
              Object(o.g)(a, "class", "reset svelte-7upl3d");
          },
          m(e, n) {
            Object(o.E)(e, a, n), Object(o.H)(t, a, null), (r = !0);
          },
          p(a, t) {
            e = a;
          },
          i(e) {
            r || (Object(o.db)(t.$$.fragment, e), (r = !0));
          },
          o(e) {
            Object(o.eb)(t.$$.fragment, e), (r = !1);
          },
          d(e) {
            e && Object(o.u)(a), Object(o.s)(t);
          },
        }
      );
    }
    function k(e) {
      let a,
        t,
        r,
        n,
        i = e[0] && m(e);
      const s = e[2].default,
        l = Object(o.r)(s, e, e[1], null);
      return {
        c() {
          (a = Object(o.v)("center")),
            (t = Object(o.v)("mdui-card")),
            i && i.c(),
            (r = Object(o.V)()),
            l && l.c(),
            Object(o.Q)(t, "variant", "filled");
        },
        m(e, s) {
          Object(o.E)(e, a, s),
            Object(o.d)(a, t),
            i && i.m(t, null),
            Object(o.d)(t, r),
            l && l.m(t, null),
            (n = !0);
        },
        p(e, [a]) {
          e[0]
            ? i
              ? (i.p(e, a), 1 & a && Object(o.db)(i, 1))
              : ((i = m(e)), i.c(), Object(o.db)(i, 1), i.m(t, r))
            : i &&
              (Object(o.z)(),
              Object(o.eb)(i, 1, 1, () => {
                i = null;
              }),
              Object(o.k)()),
            l &&
              l.p &&
              (!n || 2 & a) &&
              Object(o.gb)(
                l,
                s,
                e,
                e[1],
                n ? Object(o.y)(s, e[1], a, null) : Object(o.x)(e[1]),
                null
              );
        },
        i(e) {
          n || (Object(o.db)(i), Object(o.db)(l, e), (n = !0));
        },
        o(e) {
          Object(o.eb)(i), Object(o.eb)(l, e), (n = !1);
        },
        d(e) {
          e && Object(o.u)(a), i && i.d(), l && l.d(e);
        },
      };
    }
    function g(e, a, t) {
      let { $$slots: o = {}, $$scope: r } = a,
        { reset: n } = a;
      return (
        (e.$$set = (e) => {
          "reset" in e && t(0, (n = e.reset)),
            "$$scope" in e && t(1, (r = e.$$scope));
        }),
        [n, r, o]
      );
    }
    class b extends o.a {
      constructor(e) {
        super(), Object(o.C)(this, e, g, k, o.M, { reset: 0 }, p);
      }
    }
    a.a = b;
  },
  function (e, a, t) {
    "use strict";
    t.d(a, "a", function () {
      return i;
    }),
      t.d(a, "b", function () {
        return n;
      });
    var o = t(0);
    const r = [];
    function n(e, a = o.I) {
      let t;
      const n = new Set();
      function i(a) {
        if (Object(o.M)(e, a) && ((e = a), t)) {
          const a = !r.length;
          for (const a of n) a[1](), r.push(a, e);
          if (a) {
            for (let e = 0; e < r.length; e += 2) r[e][0](r[e + 1]);
            r.length = 0;
          }
        }
      }
      return {
        set: i,
        update: function (a) {
          i(a(e));
        },
        subscribe: function (r, s = o.I) {
          const l = [r, s];
          return (
            n.add(l),
            1 === n.size && (t = a(i) || o.I),
            r(e),
            () => {
              n.delete(l), 0 === n.size && t && (t(), (t = null));
            }
          );
        },
      };
    }
    function i(e, a, t) {
      const r = !Array.isArray(e),
        i = r ? [e] : e,
        s = a.length < 2;
      return (
        (l = (e) => {
          let t = !1;
          const n = [];
          let l = 0,
            c = o.I;
          const d = () => {
              if (l) return;
              c();
              const t = a(r ? n[0] : n, e);
              s ? e(t) : (c = Object(o.F)(t) ? t : o.I);
            },
            u = i.map((e, a) =>
              Object(o.Y)(
                e,
                (e) => {
                  (n[a] = e), (l &= ~(1 << a)), t && d();
                },
                () => {
                  l |= 1 << a;
                }
              )
            );
          return (
            (t = !0),
            d(),
            function () {
              Object(o.L)(u), c(), (t = !1);
            }
          );
        }),
        { subscribe: n(t, l).subscribe }
      );
      var l;
    }
  },
  function (e, a, t) {
    "use strict";
    var o = t(0);
    function r(e) {
      let a, t, r, n;
      return {
        c() {
          (a = Object(o.v)("mdui-button")), (t = Object(o.Z)(e[0]));
        },
        m(i, s) {
          Object(o.E)(i, a, s),
            Object(o.d)(a, t),
            r || ((n = Object(o.G)(a, "click", e[1])), (r = !0));
        },
        p(e, [a]) {
          1 & a && Object(o.R)(t, e[0]);
        },
        i: o.I,
        o: o.I,
        d(e) {
          e && Object(o.u)(a), (r = !1), n();
        },
      };
    }
    function n(e, a, t) {
      let { text: r } = a;
      return (
        (e.$$set = (e) => {
          "text" in e && t(0, (r = e.text));
        }),
        [
          r,
          function (a) {
            o.j.call(this, e, a);
          },
        ]
      );
    }
    class i extends o.a {
      constructor(e) {
        super(), Object(o.C)(this, e, n, r, o.M, { text: 0 });
      }
    }
    a.a = i;
  },
  function (e, a, t) {
    "use strict";
    t.d(a, "d", function () {
      return o;
    }),
      t.d(a, "b", function () {
        return r;
      }),
      t.d(a, "a", function () {
        return n;
      }),
      t.d(a, "c", function () {
        return i;
      }),
      t.d(a, "e", function () {
        return s;
      });
    const o = "function" == typeof TextDecoder,
      r = "Apple Computer, Inc." === navigator.vendor,
      n = navigator.userAgent.includes("CrOS"),
      i = !1,
      s = null;
  },
  function (e, a) {
    e.exports = {
      APP_NAME: "Ikuyo Packaging System",
      WEBSITE: "https://spacecatgame.netlify.app",
      COPYRIGHT_NOTICE:
        "Copyright (C) 2021-2024 Thomas Weber\n\nThis version has been modified by 40code and Starry Systems.",
      ACCENT_COLOR: "#ff4c4c",
      SOURCE_CODE: "https://github.com/TurboWarp/packager",
      FEEDBACK_PRIMARY: {
        name: "Scratch",
        link: "https://scratch.mit.edu/users/GarboMuffin/#comments",
      },
      FEEDBACK_SECONDARY: {
        name: "GitHub",
        link: "https://github.com/TurboWarp/packager/issues",
      },
      DONATE: "https://github.com/sponsors/GarboMuffin",
      PRIVACY_POLICY: "https://turbowarp.org/privacy.html",
    };
  },
  function (e, a, t) {
    "use strict";
    var o = t(6),
      r = t(16);
    const n = (e, a) => {
      if (e instanceof Blob) return null;
      if ((t = a) && "object" == typeof t && !Array.isArray(t)) {
        const t = {};
        for (const o of Object.keys(a)) {
          if (!Object.prototype.hasOwnProperty.call(e, o)) continue;
          const r = n(e[o], a[o]);
          null !== r && (t[o] = r);
        }
        return 0 === Object.keys(t).length ? null : t;
      }
      var t;
      if (Array.isArray(e)) {
        if (!Array.isArray(a)) return null;
        if (
          ((e, a) => {
            if (e.length !== a.length) return !1;
            for (let t = 0; t < e.length; t++) if (e[t] !== a[t]) return !1;
            return !0;
          })(e, a)
        )
          return null;
      }
      return e === a ? null : e;
    };
    var i = n;
    a.a = (e, a) => {
      let t = JSON.parse(JSON.stringify(a));
      const n = JSON.parse(localStorage.getItem(e));
      n && (t = Object(r.a)(n, t));
      const s = Object(o.b)(t, () => {
        const t = s.subscribe((t) => {
          const o = i(t, a);
          null === o
            ? localStorage.removeItem(e)
            : localStorage.setItem(e, JSON.stringify(o));
        });
        return t;
      });
      return s;
    };
  },
  function (e, a, t) {
    "use strict";
    var o = t(2);
    const r = (e) => Math.max(0, Math.min(1, e)),
      n = [400, 404];
    a.a = async (e) => {
      const {
          type: a,
          progressCallback: t,
          timeout: i,
          estimatedSize: s,
          abortTarget: l,
        } = e,
        c = (e) =>
          new Promise((n, c) => {
            const d = new XMLHttpRequest();
            (d.onload = () => {
              u(),
                200 === d.status
                  ? n(d.response)
                  : c(
                      new o.c(
                        `Couldn't fetch ${e}: status code ${d.status}`,
                        d.status
                      )
                    );
            }),
              (d.onerror = () => {
                u(), c(new o.e(e));
              }),
              t &&
                (d.onprogress = (e) => {
                  e.lengthComputable
                    ? t(r(e.loaded / e.total))
                    : s && t(r(e.loaded / s));
                }),
              (d.responseType = a),
              d.open("GET", e),
              d.send();
            const u = () => {
              p && p(), m && clearTimeout(m);
            };
            let p, m;
            if (l) {
              const a = () => {
                d.abort(), u(), c(new Error(`Couldn't fetch ${e}: aborted`));
              };
              l.addEventListener("abort", a),
                (p = () => {
                  l.removeEventListener("abort", a);
                });
            }
            i &&
              (m = setTimeout(() => {
                d.abort(), u(), c(new Error(`Couldn't fetch ${e}: timed out`));
              }, i));
          }),
        d = Array.isArray(e.url) ? e.url : [e.url];
      if (0 === d.length) throw new Error("no URLs");
      let u;
      for (const e of d)
        try {
          return await c(e);
        } catch (e) {
          if (e instanceof o.c && n.includes(e.status)) throw e;
          (!u || (u instanceof o.e && !(e instanceof o.e))) && (u = e);
        }
      throw u;
    };
  },
  function (e, a, t) {
    "use strict";
    t.d(a, "a", function () {
      return n;
    }),
      t.d(a, "b", function () {
        return i;
      });
    var o = t(0);
    function r(e) {
      const a = e - 1;
      return a * a * a + 1;
    }
    function n(e, { delay: a = 0, duration: t = 400, easing: r = o.B } = {}) {
      const n = +getComputedStyle(e).opacity;
      return {
        delay: a,
        duration: t,
        easing: r,
        css: (e) => "opacity: " + e * n,
      };
    }
    function i(
      e,
      { delay: a = 0, duration: t = 400, easing: o = r, axis: n = "y" } = {}
    ) {
      const i = getComputedStyle(e),
        s = +i.opacity,
        l = "y" === n ? "height" : "width",
        c = parseFloat(i[l]),
        d = "y" === n ? ["top", "bottom"] : ["left", "right"],
        u = d.map((e) => `${e[0].toUpperCase()}${e.slice(1)}`),
        p = parseFloat(i[`padding${u[0]}`]),
        m = parseFloat(i[`padding${u[1]}`]),
        k = parseFloat(i[`margin${u[0]}`]),
        g = parseFloat(i[`margin${u[1]}`]),
        b = parseFloat(i[`border${u[0]}Width`]),
        v = parseFloat(i[`border${u[1]}Width`]);
      return {
        delay: a,
        duration: t,
        easing: o,
        css: (e) =>
          `overflow: hidden;opacity: ${Math.min(20 * e, 1) * s};${l}: ${
            e * c
          }px;padding-${d[0]}: ${e * p}px;padding-${d[1]}: ${e * m}px;margin-${
            d[0]
          }: ${e * k}px;margin-${d[1]}: ${e * g}px;border-${d[0]}-width: ${
            e * b
          }px;border-${d[1]}-width: ${e * v}px;`,
      };
    }
  },
  function (e) {
    e.exports = JSON.parse(
      '{"p4":{"description1":"Converts Scratch projects into HTML files, zip archives, or executable programs for Windows, macOS, and Linux.","description2":"If you just want an easy way to embed a project into your website, you may be interested in {embedding}.","description2-embedding":"Embedding","description3":"Report bugs, give feedback, and suggest ideas {onScratch} or {onGitHub}.","disclaimer":"This site is not affiliated with Scratch, the Scratch Team, or the Scratch Foundation.","description3-on":"on {brand}","error":"Error","errorMessage":"Message: {error}","networkError":"Couldn\'t download {url}. Make sure you\'re connected to the internet and try disabling any browser extensions.","outdated":"This version of the packager appears to be outdated. Please refresh and try again.","cannotAccessProject":"Can\'t access project token. This usually means the project is unshared, never existed, the ID is invalid, or your network is blocking turbowarp.org.","cannotAccessProjectCaching":"If the project was shared recently, it may take a few minutes for this message to go away.","close":"Close","refresh":"Refresh","browserNotSupported":"Browser not supported","browserNotSupportedDescription":"Please update your browser.","importingInterface":"Loading options...","unknownImportError":"Something went wrong. Please refresh and try again.","reportBug":"Report Bug","privacy":"Privacy Policy","feedback":"Feedback","sourceCode":"Source Code","donate":"Donate","documentation":"Additional resources and help"},"progress":{"loadingAssets":"Downloading assets ({complete}/{total})","compressingProject":"Compressing project","loadingProjectMetadata":"Downloading project metadata","loadingProjectData":"Downloading project data","packagingProject":"Packaging project","loadingLargeAsset":"Downloading {thing}","loadingScripts":"Downloading scripts","downloadingExtensions":"Downloading custom extensions"},"select":{"select":"Select Project","selectHelp":"Select the project you want to package by copying and pasting the Scratch project link or using one of the other modes. If you use a project you didn\'t make, make sure to credit the creator.","id":"Scratch Project ID or URL","file":"File","url":"Other URL","loadProject":"Load Project","loadToContinue":"Load a project to continue","invalidId":"Invalid project ID","invalidUrl":"Invalid URL","noFileSelected":"No file selected","unsharedProjects":"Unshared projects are no longer accessible using their project ID due to Scratch API changes.","unsharedProjectsWorkaround":"Instead, you can either share the project or save the project to your computer (File > Save to your computer) and load the file in the packager. Files generated by the packager are fully self contained and not affected by these changes.","unsharedProjectsMore":"For more information and workarounds, visit: {link}"},"options":{"learnMore":"Learn more","runtimeOptions":"Runtime Options","storedWarning":"Note: This project has settings stored in it, which may override these settings.","turbo":"Turbo Mode","framerate":"Framerate","interpolation":"Interpolation","highQualityPen":"High Quality Pen","infiniteClones":"Infinite Clones","removeFencing":"Remove Fencing","removeMiscLimits":"Remove Miscellaneous Limits","stage":"Stage","stageSize":"Custom Stage Size","preserveRatio":"Preserve aspect ratio when resized (recommended)","stretch":"Stretch stage to fill screen without changing actual size (experimental)","dynamicResize":"Dynamically resize size to match window size (experimental)","username":"Username (each \\"#\\" gets replaced with a random number)","customUsernameWarning":"Be careful when changing the default username as it can cause connections to the default cloud variable server to be blocked. Only the default username is guaranteed to work.","closeWhenStopped":"Close window when project stops","autoplay":"Start project automatically instead of showing a big green flag","autoplayHint":"Note: Many browsers will not allow websites to automatically play sound, so sounds might not play until the user interacts with the project.","playerOptions":"Player Options","pageTitle":"Page title","loadingScreen":"Loading Screen","showProgressBar":"Show progress bar","loadingScreenText":"Loading screen text","loadingScreenImage":"Loading screen image","sizeNormal":"Display at normal size","sizeStretch":"Fill screen","loadingScreenTextPlaceholder":"(Nothing)","icon":"Page icon","controls":"Controls","showFlag":"Show green flag button in controls","showStop":"Show stop sign button in controls","showFullscreen":"Show fullscreen button in controls","showPause":"Show pause button in controls","accentColor":"Accent color (active/hovered controls, ask prompt, context menus)","controlsHelp":"If all controls are disabled, the controls bar is removed entirely. If only fullscreen is enabled, it will always be located in the top left corner, not in the controls header.","colors":"Colors","backgroundColor":"Background color","foregroundColor":"Foreground color (progress bar, some icons, some text)","monitors":"Monitors","editableLists":"Editable lists","variableColor":"Variable color","listColor":"List color","interaction":"Input","normalCursor":"Normal cursor","noCursor":"No cursor","customCursor":"Custom cursor","cursorCenter":"Cursor center:","automaticallyCenter":"Automatically center","cursorHelp":"Images up to 32x32 work best. Larger images may not work reliably.","pointerlock":"Lock mouse cursor","pointerlockHelp":"Based on a TurboWarp Experiment.","gamepad":"Support USB or Bluetooth gamepads/controllers","gamepadHelp":"Based on the \\"Gamepad support\\" addon.","cloudVariables":"Cloud Variables","noCloudVariables":"This project does not contain cloud variables.","mode":"Mode","cloudVariablesHost":"Cloud host","cloudVariables-ws":"Connect to cloud variable server","cloudVariables-ws-help":"\\"Connect to cloud variable server\\" syncs variables with other users.","cloudVariables-local":"Store in local storage","cloudVariables-local-help":"\\"Store in local storage\\" stores variables on each user\'s computer and restores them when the project is opened. If a user has multiple windows/tabs of the project open, changes will sync between those windows.","cloudVariables-ignore":"Ignore","cloudVariables-ignore-help":"\\"Ignore\\" treats cloud variables like normal variables.","cloudVariables-custom":"Advanced","cloudVariables-custom-help":"\\"Advanced\\" uses a different mode for each variable, so some variables can sync with other users but others can be stored locally, for example.","advancedOptions":"Advanced Options","advancedSummary":"You probably don\'t want to change these. (Click to open)","specialCloudBehaviors":"Special cloud variable behaviors like HTMLifier","unsafeCloudBehaviors":"Additional unsafe special cloud behaviors","unsafeCloudBehaviorsWarning":"Unsafe cloud behaviors allows the packaged project to execute arbitrary code outside of the \\"sandbox\\" that projects are typically executed in. Depending on the environment you\'re packaging for, this grants projects full control over your computer, including the ability to install viruses. If you do not trust the project you\'re packaging, please turn off this option.","implicitCloudHint":"Tip: Any variable with a name starting with \\"{cloud}\\" will be converted to a cloud variable regardless of whether it was marked as one.","enableCompiler":"Enable Compiler","warpTimer":"Warp Timer","projectId":"Project ID","projectIdHelp":"Project ID is used when connecting to a cloud variable server and storing local cloud variables. It can contain more than just numbers.","packagedRuntime":"Remove raw asset data after loading to save RAM","customExtensions":"Custom extensions (one URL per line)","customExtensionsSecurity":"Custom extensions are always run unsandboxed in the packager. Depending on the environment you\'re packaging for, this grants extensions full control over your computer, including the ability to install viruses. Don\'t use extensions you don\'t trust.","bakeExtensions":"Try to embed cached copy of custom extensions instead of downloading them each time the project is run","customCSS":"Custom CSS (Don\'t change if you don\'t know what you\'re doing!)","customJS":"Custom JS (Don\'t change if you don\'t know what you\'re doing!)","environment":"Environment","html":"Plain HTML (standalone, works anywhere)","zip":"Zip (ideal for websites)","zip-one-asset":"Zip, combine assets into single file (not recommended)","application-win32":"{type} Windows application (32-bit)","application-win64":"{type} Windows application (64-bit)","application-win-arm":"{type} Windows application for ARM","application-mac":"{type} macOS application","application-linux64":"{type} Linux application (64-bit)","application-linux-arm32":"{type} Linux application for ARM (32-bit)","application-linux-arm64":"{type} Linux application for ARM (64-bit)","otherEnvironments":"Other environments (Click to open)","otherEnvironmentsHelp":"Most new projects should use the options listed above instead.","applicationSettings":"Application Settings","packageName":"Package name","packageNameHelp":"Package name should be a unique name used only by your application. The same project should always have the same package name.","version":"Version","versionHelp":"Updating the version is completely optional and doesn\'t affect your project\'s behavior. It may appear in places like about screens depending on the environment. Should be formatted as X.Y.Z.","initalWindowSize":"Initial window size","startWindow":"Start as window","startMaximized":"Start as maximized window","startFullscreen":"Start in fullscreen","escapeBehavior":"When escape key pressed","unFullscreenOnly":"Leave fullscreen only","exitOnly":"Exit only","unFullscreenOrExit":"Leave fullscreen or exit","doNothing":"Do nothing","windowControls":"Window controls","defaultControls":"Default","noControls":"Hidden (frameless)","maxTextureDimension":"Increase max vector costume resolution to make large costumes look better. May increase memory use and cause crashes.","steamworksExtension":"Steamworks Extension","steamworksMacWarning":"Warning: macOS games published on Steam need to be notarized by Apple, which the packager doesn\'t support. You can still test your game on a Mac, but you won\'t be able to publish it for macOS yet.","steamworksDocumentation":"See the extension\'s documentation for more details.","steamworksUnavailable":"To enable the Steamworks extension, you must use one of these environments:","steamworksAvailable":"This project is using the Steamworks extension. You can find your game\'s App ID in Steamworks, or use {n} for testing with the Steamworks demo game.","steamworksAppId":"App ID","steamworksOnError":"If there is an error initializing Steamworks","steamworksIgnore":"Do nothing","steamworksWarning":"Show a warning but continue","steamworksError":"Show an error and exit","package":"Package","preview":"Preview","resetAll":"Reset All Settings","export":"Export Settings","import":"Import Settings","confirmImportUnsafe":"These settings use advanced features such as custom JS that run unknown and possibly malicious code on your computer. Only import this file if you trust the person who created it. If you\'re not sure what this means, you probably shouldn\'t import these settings.","downloadsWillAppearHere":"Downloads will appear here"},"downloads":{"link":"Download {filename} ({size})","useWorkaround":"Click here if download link doesn\'t work"},"fileInput":{"select":"Select or drop file","clear":"Clear Selection","selected":"Selected {file}"},"theme":{"system":"Use system theme","dark":"Dark","light":"Light"},"reset":{"reset":"Reset","confirm":"Are you sure you want to reset these settings? This cannot be undone.","confirmAll":"Are you sure you want to reset ALL settings? This cannot be undone."},"preview":{"loading":"Loading Preview"},"import":{"header":"Importing project...","description":"This may take a while if the project is large.","cancel":"Cancel"}}'
    );
  },
  function (e, a, t) {
    "use strict";
    t.d(a, "a", function () {
      return o;
    }),
      t.d(a, "c", function () {
        return r;
      }),
      t.d(a, "b", function () {
        return n;
      });
    const o = (e) =>
        new Promise((a, t) => {
          const o = new FileReader();
          (o.onload = () => a(o.result)),
            (o.onerror = () =>
              t(new Error(`Cannot read as array buffer: ${o.error}`))),
            o.readAsArrayBuffer(e);
        }),
      r = (e) =>
        new Promise((a, t) => {
          const o = new FileReader();
          (o.onload = () => a(o.result)),
            (o.onerror = () => t(new Error(`Cannot read as URL: ${o.error}`))),
            o.readAsDataURL(e);
        }),
      n = (e) =>
        new Promise((a, t) => {
          const o = new FileReader();
          (o.onload = () => a(o.result)),
            (o.onerror = () => t(new Error(`Cannot read as text: ${o.error}`))),
            o.readAsText(e);
        });
  },
  function (e, a, t) {
    "use strict";
    var o = t(0),
      r = t(4);
    function n(e) {
      let a, t, r, n;
      const i = e[3].default,
        s = Object(o.r)(i, e, e[2], null);
      return {
        c() {
          (a = Object(o.v)("div")), s && s.c();
        },
        m(i, l) {
          Object(o.E)(i, a, l),
            s && s.m(a, null),
            (t = !0),
            r ||
              ((n = [
                Object(o.G)(a, "drop", e[4]),
                Object(o.G)(a, "dragover", e[5]),
                Object(o.G)(a, "dragleave", e[6]),
              ]),
              (r = !0));
        },
        p(e, [a]) {
          s &&
            s.p &&
            (!t || 4 & a) &&
            Object(o.gb)(
              s,
              i,
              e,
              e[2],
              t ? Object(o.y)(i, e[2], a, null) : Object(o.x)(e[2]),
              null
            );
        },
        i(e) {
          t || (Object(o.db)(s, e), (t = !0));
        },
        o(e) {
          Object(o.eb)(s, e), (t = !1);
        },
        d(e) {
          e && Object(o.u)(a), s && s.d(e), (r = !1), Object(o.L)(n);
        },
      };
    }
    function i(e, a, t) {
      let { $$slots: o = {}, $$scope: n } = a,
        { dropping: i = !1 } = a;
      const s = Object(r.a)();
      return (
        (e.$$set = (e) => {
          "dropping" in e && t(0, (i = e.dropping)),
            "$$scope" in e && t(2, (n = e.$$scope));
        }),
        [
          i,
          s,
          n,
          o,
          (e) => {
            e.dataTransfer.types.includes("Files") &&
              e.dataTransfer.files[0] &&
              (e.preventDefault(), s("drop", e.dataTransfer), t(0, (i = !1)));
          },
          (e) => {
            e.dataTransfer.types.includes("Files") &&
              (e.preventDefault(),
              (e.dataTransfer.dropEffect = "copy"),
              t(0, (i = !0)));
          },
          (e) => {
            t(0, (i = !1));
          },
        ]
      );
    }
    class s extends o.a {
      constructor(e) {
        super(), Object(o.C)(this, e, i, n, o.M, { dropping: 0 });
      }
    }
    a.a = s;
  },
  function (e, a, t) {
    "use strict";
    const o = (e) =>
        null === e
          ? "null"
          : Array.isArray(e)
          ? "array"
          : "undefined" != typeof Blob && e instanceof Blob
          ? "blob"
          : typeof e,
      r = (e, a) => {
        const t = o(e),
          n = o(a);
        if (null === a && "blob" === t) return e;
        if (t !== n || "undefined" === t) return a;
        if ("object" === t) {
          for (const t of Object.keys(a)) e[t] = r(e[t], a[t]);
          for (const t of Object.keys(e))
            Object.prototype.hasOwnProperty.call(a, t) || delete e[t];
        }
        return e;
      };
    a.a = r;
  },
  function (e) {
    e.exports = JSON.parse(
      '{"en":"English","ca":"Català","cs":"Česky","de":"Deutsch","es":"Español (España)","fi":"Suomi","fr":"Français","hu":"Magyar","it":"Italiano","ja":"日本語","ko":"한국어","lt":"Lietuvių","nb":"Norsk Bokmål","nl":"Nederlands","pl":"Polski","pt":"Português","pt-br":"Português Brasileiro","ru":"Русский","sl":"Slovenščina","sv":"Svenska","tr":"Türkçe","uk":"Українська","zh-cn":"简体中文","zh-tw":"繁體中文"}'
    );
  },
  function (e, a, t) {
    "use strict";
    var o = t(19),
      r = t(2),
      n = t(1);
    class i extends o.b {
      constructor() {
        super(),
          (this.aborted = !1),
          n.c.reset(),
          n.c.update((e) => ((e.visible = !0), e)),
          n.a.replace(this);
      }
      abort() {
        this.aborted ||
          ((this.aborted = !0), this.dispatchEvent(new Event("abort")));
      }
      error(e) {
        this.aborted || (n.b.set(e), n.c.reset(), this.abort());
      }
      setProgress(e) {
        this.aborted || n.c.update((a) => ((a.progress = e), a));
      }
      setProgressText(e) {
        this.aborted || n.c.update((a) => ((a.text = e), a));
      }
      whenAbort(e) {
        this.addEventListener("abort", e), this.aborted && e();
      }
      do(e) {
        return this.aborted
          ? Promise.reject(new r.a())
          : new Promise((a, t) => {
              const o = () => {
                t(new r.a());
              };
              this.addEventListener("abort", o),
                e
                  .then((e) => {
                    a(e), this.removeEventListener("abort", o);
                  })
                  .catch((e) => {
                    t(e), this.error(e), this.removeEventListener("abort", o);
                  });
            });
      }
      done() {
        n.c.update((e) => ((e.visible = !1), e)), n.a.set(null);
      }
    }
    a.a = i;
  },
  function (e, a, t) {
    "use strict";
    t.d(a, "b", function () {
      return o;
    }),
      t.d(a, "a", function () {
        return r;
      });
    class o {
      constructor() {
        this._events = {};
      }
      addEventListener(e, a) {
        this._events[e] || (this._events[e] = []), this._events[e].push(a);
      }
      removeEventListener(e, a) {
        const t = this._events[e];
        t && (this._events[e] = t.filter((e) => e !== a));
      }
      dispatchEvent(e) {
        const a = this._events[e.type];
        if (a) for (const t of a) t(e);
      }
    }
    class r {
      constructor(e, a) {
        (this.type = e), (this.detail = a ? a.detail : {});
      }
    }
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"Descarrega {filename} ({size})","useWorkaround":"Fes click aquí si l\'enllaç de descàrrega no funciona"},"fileInput":{"clear":"Esborra la selecció","select":"Selecciona o deixa anar el fitxer","selected":"Seleccionat {file}"},"import":{"cancel":"Cancel·la","description":"Això pot trigar una estona si el projecte és gran.","header":"S\'està important el projecte..."},"options":{"accentColor":"Color de UI (controls actius amb el ratolí, sol·licitud de pregunta, menús contextuals)","advancedOptions":"Opcions avançades","advancedSummary":"Probablement no vulguis canviar-les. (Fes click per obrir)","application-mac":"{type} aplicació per el macOS ","applicationSettings":"Configuració de l\'aplicació","automaticallyCenter":"Centrar automàticament","autoplay":"Inicia el projecte automàticament en comptes de mostrar la bandera verda gran","autoplayHint":"Nota: molts exploradors no permetran que les webs reprodueixin so automàticament, de manera que, és probable que els sons no es reprodueixin fins que l\'usuari faci click al projecte.","backgroundColor":"Color de fons","bakeExtensions":"Intenta incrustar còpies a la memòria cau de les extensions personalitzades en comptes de baixar-les cada vegada que s\'inicia el projecte","closeWhenStopped":"Tanca la finestra quan el projecte es pari","cloudVariables":"Variables al núvol","cloudVariables-custom":"Avançat","cloudVariables-custom-help":"\\"Avançat\\" utilitza un mode diferent per a cada variable, de manera que algunes variables es poden sincronitzar amb altres usuaris però d\'altres es poden emmagatzemar localment, per exemple.","cloudVariables-ignore":"Ignora","cloudVariables-ignore-help":"\\"Ignora\\" converteix les variables al núvol com a variables normals.","cloudVariables-local":"Desar a l\'emmagatzematge intern","cloudVariables-local-help":"\\"Desar a l\'emmagatzematge intern\\" emmagatzema variables a l\'ordinador de cada usuari i les restaura quan s\'obre el projecte. Si un usuari té obertes diverses finestres/pestanyes del projecte, els canvis se sincronitzaran entre aquestes finestres en temps real.","cloudVariables-ws":"Conectar al servidor de variables al núvol","cloudVariables-ws-help":"\\"Conectar al servidor de variables al núvol\\" sincronitza les variables amb altres usuaris.","cloudVariablesHost":"Amfitrió al núvol","confirmImportUnsafe":"Aquesta configuració utilitza funcions avançades com ara JS personalitzat que executa codi desconegut i probablement maliciós a l\'ordinador. Importa aquest fitxer només si confies en la persona que el va crear. Si no ets segur de què significa això, probablement no hauríes d\'importar aquesta configuració.","controlsHelp":"Si tots els controls estan desactivats, la barra de controls es treu totalment. Si només està activada la pantalla completa, es trobarà a l\'extrem a dalt a la esquerre, no a la barra de controls.","cursorCenter":"Centre del cursor:","cursorHelp":"Les imatges de fins 32x32 funcionen molt millor. És possible que les imatges més grans no funcionin gaire bé.","customCSS":"CSS personalitzat (No canviïs res si no saps el què estàs fent!)","customCursor":"Cursor personalitzat","customExtensions":"Extensions personalitzades (un URL per línia)","customExtensionsSecurity":"Les extensions personalitzades sempre s\'executen sense sandbox al empaquetador. Depenent de l\'entorn per al qual estigueu empaquetant, això atorga a les extensions un control total sobre el vostre equip, incloent la possibilitat d\'instal·lar virus. No utilitzeu extensions en què no confieu.","customJS":"JS personalitzat (no canviïs res si no saps el què estàs fent!)","customUsernameWarning":"Ves amb compte quan canviïs el nom d\'usuari per defecte, ja que pot provocar que es bloquegin les connexions al servidor de variables al núvol predeterminat. Només es garanteix que funcioni el nom d\'usuari predeterminat.","downloadsWillAppearHere":"Les baixades apareixeran aquí","dynamicResize":"Canvia la mida de manera dinàmica i així coincidir amb la mida de la finestra (experimental)","editableLists":"Llistes editables","enableCompiler":"Activa el compilador","environment":"Entorn","export":"Exporta configurament","foregroundColor":"Color de primer pla (barra de progrés, algunes icones, alguns textos)","framerate":"Velocitat de fotogrames","gamepad":"Admeteix gamepads/comandaments USB o Bluetooth","gamepadHelp":"Basat en el addon \\"Gamepad Support\\".","highQualityPen":"Llapis d\'alta qualitat","html":"HTML senzill (autònom, funciona a qualsevol lloc)","icon":"Icona de la pàgina","implicitCloudHint":"Consell: qualsevol variable amb un nom que comenci per \\"{cloud}\\" es convertirà en una variable de núvol independentment de si s\'ha marcat com a una.","import":"Importa configurament","infiniteClones":"Clons infinits","interaction":"Entrada","interpolation":"Interpolació","learnMore":"Aprèn més","listColor":"Color de les llistes","loadingScreen":"Pantalla de càrrega","loadingScreenImage":"Imatge de fons de la pantalla de càrrega:","loadingScreenText":"Text de la pantalla de càrrega:","loadingScreenTextPlaceholder":"(Res)","maxTextureDimension":"Augmenta la resolució màxima dels vestits vectorials per fer que els més grans es vegin millor. Podria augmentar l\'ús de la memòria i provocar errors.","noCloudVariables":"Aquest projecte no té variables al núvol.","noCursor":"Sense cursor","normalCursor":"Cursor normal","otherEnvironments":"Altres entorns (Fes click per obrir)","otherEnvironmentsHelp":"La majoria dels projectes nous haurien d\'utilitzar les opcions mencionades anteriorment.","package":"Empaquetar","packageName":"Nom del paquet","packageNameHelp":"El nom del paquet hauria de ser un nom únic utilitzat només per la vostra aplicació. El mateix projecte ha de tenir sempre el mateix nom de paquet.","packagedRuntime":"Eliminar les dades d\'actius sense processar després de carregar-los per estalviar RAM","pageTitle":"Títol de la pàgina","playerOptions":"Opcions del reproductor","pointerlock":"Bloqueja el cursor del ratolí","pointerlockHelp":"Basat en un experiment de TurboWarp.","preserveRatio":"Preserva la relació d\'aspecte quan es canvia la mida (recomanat)","preview":"Vista prèvia","projectId":"ID del projecte","projectIdHelp":"L\'ID del projecte s\'utilitza quan es connecta a un servidor de variables al núvol i s\'emmagatzemen variables al núvol locasl. Pot contenir més que números.","removeFencing":"Eliminar les limitacions de pantalla","removeMiscLimits":"Treure límits miscel·lanis","resetAll":"Restablir totes les configuracions","runtimeOptions":"Opcions d\'execució","showFlag":"Mostra la bandera verda als controls","showFullscreen":"Mostra el botó de pantalla completa","showPause":"Mostra el botó de pausa als controls","showProgressBar":"Mostra una barra de progrés","showStop":"Mostra el stop als controls","sizeNormal":"Visualització a mida normal","sizeStretch":"Omple la pantalla","specialCloudBehaviors":"Comportaments especials de variables al núvol com al HTMLifier","stage":"Escenari","stageSize":"Mida de l\'escenari personalitzada","startFullscreen":"Comença a pantalla completa","startMaximized":"Comença com a finestra maximitzada","startWindow":"Comença com a finestra","storedWarning":"Nota: Aquest projecte té una configuració desada, que pot anul·lar aquesta configuració.","stretch":"Estireu l\'escenari per omplir la pantalla sense canviar la mida actual (experimental)","turbo":"Mode Turbo","unsafeCloudBehaviors":"Comportaments especials insegurs addicionals al núvol","unsafeCloudBehaviorsWarning":"Els comportaments no segurs del núvol permeten que el projecte empaquetat executi codi arbitrari fora de la \\"sandbox\\" en què s\'executen normalment els projectes. Depenent de l\'entorn per al qual estiguen empaquetats, això atorga als projectes un control absolut sobre el teu ordinador, fins i tot la capacitat d\'instal·lar programari maliciós. Si no confies en el projecte que estas empaquetant, desactiva aquesta opció.","username":"Nom d\'usuari (cada \\"#\\" es reemplaça per un numero aleatori)","variableColor":"Color de les variables","version":"Versió","warpTimer":"Temporitzador Warp","zip":"Zip (ideal per a webs)","zip-one-asset":"Zip, combinant els recursos en un sol arxiu (no recomanat)"},"p4":{"browserNotSupported":"Explorador no compatible","browserNotSupportedDescription":"Si us plau, actualitza el teu navegador.","cannotAccessProject":"No es pot accedir al token del projecte. Això normalment significa que el projecte s\'ha compartit, no ha exisitit, l\'ID no és correcte o la xarxa està bloquejant turbowarp.org.","cannotAccessProjectCaching":"Si el projecte s\'ha compartit recentment, aquest avís pot trigar uns minuts en desaparèixer.","close":"Tanca","description1":"Converteix projectes del Scratch en fitxers HTML, arxius zip o programes executables per el Windows, macOS i Linux.","description2":"Si només busques una manera fàcil d\'incorporar un projecte al teu lloc web, potser t\'interessa {embedding}.","description2-embedding":"Incrustació web","description3":"Informa d\'errors, doneu-nos comentaris i suggereix idees {onScratch} o {onGitHub}.","description3-on":"a {brand}","disclaimer":"Aquest lloc web no està afiliat amb l\'Scratch, el Scratch Team o la Scratch Foundation.","documentation":"Recursos addicionals i ajuda","donate":"Fes una donació","errorMessage":"Missatge: {error}","feedback":"Comentaris","importingInterface":"S\'estan carregant les opcions...","networkError":"No s\'ha pogut baixar {url}. Assegura\'t que tens connectivitat a internet i prova de desactivar les extensions del explorador.","outdated":"Aquesta versió del packager sembla estar obsoleta. Actualitza i torna-ho a intentar.","privacy":"Política de privacitat","refresh":"Refresca","reportBug":"Reportar error","sourceCode":"Codi font","unknownImportError":"Alguna cosa ha anat malament. Refresca i torna-ho a provar."},"preview":{"loading":"S\'està carregant la vista prèvia"},"progress":{"compressingProject":"Comprimint projecte","downloadingExtensions":"Baixant extensions personalitzades","loadingAssets":"S\'estan baixant els recursos ({complete}/{total})","loadingLargeAsset":"Baixant {thing}","loadingProjectData":"Descarregant dades del projecte","loadingProjectMetadata":"Descarregant metadades del projecte","loadingScripts":"Baixant scripts","packagingProject":"Empaquetant el projecte"},"reset":{"confirm":"Segur que vols restablir la configuració? Això no es pot desfer.","confirmAll":"Segur que vols restablir TOTA la configuració? Això no es pot desfer.","reset":"Restableix"},"select":{"file":"Fitxer","id":"ID o URL del projecte de Scratch","invalidId":"ID del projecte no vàlid","invalidUrl":"URL no vàlid","loadProject":"Carregar projecte","loadToContinue":"Carrega un projecte per continuar","noFileSelected":"No hi ha cap fitxer seleccionat","select":"Selecciona projecte","selectHelp":"Seleccioneu el projecte que voleu empaquetar copiant i enganxant l\'enllaç del projecte Scratch o utilitzant un dels altres modes. Si utilitzeu un projecte que no heu fet, assegureu-vos de donar crèdit al creador.","unsharedProjects":"Els projectes no compartits ja no són accessibles amb el seu ID a causa dels canvis de l\'API de Scratch.","unsharedProjectsMore":"Per a més informació i solucions, visita: {link}","unsharedProjectsWorkaround":"En lloc d\'això, pots compartir el projecte o desar-lo al teu ordinador (Fitxer > Desa a l\'ordinador) i carregar el fitxer al empaquetador. Els fitxers generats pel empaquetador són totalment autònoms i no estan afectats per aquests canvis.","url":"Un altre URL"},"theme":{"dark":"Fosc","light":"Blanc","system":"Utilitza el tema del sistema"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"fileInput":{"clear":"Vymazat výběr","select":"Vyberte nebo přetáhněte soubor","selected":"Vybrán {file}"},"import":{"cancel":"Storno"},"options":{"accentColor":"Dekorační barva (aktivní/podržené řízení, zeptání, kontextové menu)","advancedOptions":"Pokročilé nastavení","advancedSummary":"Pravděpodobně nechcete toto měnit. (Klikněte pro otevření)","application-mac":"{type} Aplikace macOS","applicationSettings":"Nastavení aplikace","backgroundColor":"Barva pozadí","cloudVariables":"Cloudové proměnné","cloudVariables-custom":"Pokročilé","cloudVariables-custom-help":"\\"Pokročilé\\" používá jiný režim pro každé proměnné, takže se některé proměnné můžou synchronizovat s ostatními uživateli, ale například se ostatní proměnné můžou ukládat místně.","cloudVariables-ignore":"Ignorovat","cloudVariables-ignore-help":"\\"Ignorovat\\" považuje cloudové proměnné jako normální proměnné.","cloudVariables-local":"Ukládat v místním úložišti","cloudVariables-ws":"Připojit se do serveru cloudových proměň","cloudVariables-ws-help":"\\"Připojit se do serveru cloudových proměň\\" synchronizuje proměnné s ostatními uživateli.","cloudVariablesHost":"Cloudový host","colors":"Barvy","controls":"Řízení","controlsHelp":"Jestliže jsou všechna řízení deaktivována, lišta řízení bude odstraněna. Jestli je aktivována jen plná obrazovka, vždy bude lišta v levým horním rohu, ne v hlavičce řízení.","cursorHelp":"Obrázky do rozlišení 32x32 fungují nejlépe. Vetší obrázky nemusí spolehlivě fungovat.","customCursor":"Vlastní kurzor","customExtensions":"Vlastní rozšíření (jeden odkaz na řádek)","customJS":"Vlastní JS (Neměňte, pokud nevíte co děláte!)","downloadsWillAppearHere":"Stažené soubory se ukážou zde","enableCompiler":"Aktivovat kompilátor","environment":"Prostředí","foregroundColor":"Barva popředí (průběh, některé ikony, některé texty)","framerate":"Snímková frekvence","gamepad":"Podporovat USB nebo Bluetooth ovladače","gamepadHelp":"Na základě doplňku \\"Gamepad support\\"","highQualityPen":"Pero s vysokým rozlišením","html":"Prostý HTML (samostatný, funguje všude)","icon":"Ikona stránky","infiniteClones":"Nekonečné klony","interaction":"Vstup","interpolation":"Interpolace","learnMore":"Zjistit více","loadingScreen":"Obrazovka načítání","loadingScreenImage":"Obrázek obrazovky načítání","loadingScreenText":"Text obrazovky načítání","loadingScreenTextPlaceholder":"(Nic)","mode":"Režim","noCursor":"Žádný kurzor","normalCursor":"Normální kurzor","otherEnvironments":"Jiné prostředí (Klikněte pro otevření)","otherEnvironmentsHelp":"Většina nových projektů by měli používat nastavení vypsaná nahoře.","package":"Balík","packageName":"Název balíku","packageNameHelp":"Název balíku by měl být unikátní název používán jen vaší aplikací. Stejný projekt by měl vždy mít stejný název balíku.","pageTitle":"Název stránky","playerOptions":"Nastavení přehrávače","pointerlock":"Uzamknout kurzor myši","pointerlockHelp":"Na základě experimentu TurboWarp.","preview":"Náhled","removeFencing":"Odstranit hranice","removeMiscLimits":"Odstranit různé limity","runtimeOptions":"Nastavení běhu","showFlag":"Ukazovat tlačítko zelené vlajky v řízení","showFullscreen":"Ukazovat tlačítko plné obrazovky v řízení","showProgressBar":"Ukazovat průběh","showStop":"Ukazovat tlačítko stopky v řízení","sizeNormal":"Zobrazit na normální velikosti","sizeStretch":"Vyplnit obrazovku","specialCloudBehaviors":"Speciální cloudové proměnné se chovají jako HTMLifier","turbo":"Režim turb","username":"Jméno (každý znak \\"#\\" bude nahrazen za náhodné číslo)","warpTimer":"Warp časovač","zip":"Zip (ideální pro stránky)","zip-one-asset":"Zip, spojit soubory do jednoho souboru (nedoporučeno)"},"p4":{"close":"Zavřít","description1":"Zkonvertuje projekty Scratch do souborů HTML, zip archivů nebo programů pro Windows, macOS a Linux.","description2-embedding":"Vkládání","description3":"Nahlašte chyby, dejte zpětnou vazbu, a navrhněte nápady {onScratch} nebo {onGitHub}.","error":"Chyba","errorMessage":"Zpráva: {error}","feedback":"Zpětná vazba","privacy":"Zásady ochrany osobních údajů","reportBug":"Nahlásit chybu","sourceCode":"Zdrojový kód"},"progress":{"compressingProject":"Komprimuji projekt","packagingProject":"Balím projekt"},"reset":{"reset":"Obnovit"},"select":{"file":"Soubor","id":"ID projektu Scratch nebo odkaz projektu","invalidId":"Neplatný ID projektu","invalidUrl":"Neplatný odkaz","loadProject":"Načíst projekt","loadToContinue":"Pro pokračování načtěte projekt","noFileSelected":"Žádný soubor není vybrán","select":"Vyberte projekt","selectHelp":"Vyberte projekt který chcete sbalit kopírováním a vložením odkazu projektu Scratch nebo používáním jeden z ostatních režimů. Jestli používáte projekt, který jste nevytvořeli, ujistěte se, že děkujete tvůrci. ","url":"Jiný odkaz"},"theme":{"dark":"Tmavé","light":"Světlé","system":"Použít téma systému"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"{filename} herunterladen ({size})","useWorkaround":"Klicke hier, falls der Download nicht funktioniert"},"fileInput":{"clear":"Auswahl löschen","select":"Datei auswählen oder ziehen","selected":"{file} ausgewählt"},"import":{"cancel":"Abbrechen","description":"Dies könnte eine Weile dauern, wenn das Projekt groß ist.","header":"Projekt wird importiert..."},"options":{"accentColor":"Akzentfarbe (aktive/gehoverte Steuerelemente, Eingabeaufforderungen, Kontextmenüs)","advancedOptions":"Erweiterte Optionen","advancedSummary":"Du willst diese wahrscheinlich nicht ändern. (Zum Öffnen klicken)","application-linux-arm32":"{type} Linux-App für ARM (32 Bit)","application-linux-arm64":"{type} Linux-App für ARM (64 Bit)","application-linux64":"{type} Linux-Anwendung (64 Bit)","application-mac":"{type} macOS-App","application-win-arm":"{type} Windows-App für ARM","application-win32":"{type} Windows-Anwendung (32 Bit)","application-win64":"{type} Windows-Anwendung (64 Bit)","applicationSettings":"App-Einstellungen","automaticallyCenter":"Automatisch zentrieren","autoplay":"Projekt automatisch starten, anstatt eine große grüne Flagge zu zeigen","autoplayHint":"Anmerkung: Viele Browser lassen das automatische Abspielen von Ton nicht zu, deshalb könnten Klänge nicht abgespielt werden, bis der Nutzer mit dem Projekt interagiert.","backgroundColor":"Hintergrundfarbe","bakeExtensions":"Versuche, gecachte Kopien von benutzerdefinierten Erweiterungen einzubetten, anstatt sie bei jeder Ausführung des Projekts neu herunterzuladen","closeWhenStopped":"Fenster schließen, wenn das Projekt gestoppt wird","cloudVariables":"Cloudvariablen","cloudVariables-custom":"Erweitert","cloudVariables-custom-help":"\\"Erweitert\\" verwendet für jede Variable einen anderen Modus, damit manche Variablen zum Beispiel mit anderen Benutzern synchronisiert und andere lokal gespeichert werden.","cloudVariables-ignore":"Ignorieren","cloudVariables-ignore-help":"\\"Ignorieren\\" behandelt Cloudvariablen wie normale Variablen","cloudVariables-local":"Lokal speichern","cloudVariables-local-help":"\\"Lokal speichern\\" speichert die Variablen am Computer des Benutzers und stellt sie beim Neustarten des Projekts wieder her. Wenn mehrere Fenster des Projekts offen sind, werden die Daten zwischen ihnen synchronisiert.","cloudVariables-ws":"Mit Cloudvariablenserver verbinden","cloudVariables-ws-help":"\\"Mit Cloudvariablenserver verbinden\\" synchronisiert Variablen mit anderen Benutzern.","cloudVariablesHost":"Cloud-Host","colors":"Farben","confirmImportUnsafe":"Diese Einstellungen benutzen fortgeschrittene Funktionen wie benutzerdefiniertes JS, der unbekannten und möglicherweise schädlichen Code auf deinem Computer ausführt. Importiere diese Datei nur, wenn du der Person, die diese Datei erstellt hat, vertraust.","controls":"Steuerelemente","controlsHelp":"Falls alle Steuerelemente deaktiviert sind, wird die Steuerungsleiste komplett entfernt. Falls nur der Vollbildknopf aktiviert ist, wird er nicht im Steuerungsheader, sondern oben links platziert.","cursorCenter":"Cursormitte:","cursorHelp":"Bilder bis zu 32x32 funktionieren am besten. Größere Bilder könnten nicht zuverlässig funktionieren.","customCSS":"Benutzerdefiniertes CSS (Nur ändern, wenn man weiß, was man tut!)","customCursor":"Benutzerdefinierter Cursor","customExtensions":"Benutzerdefinierte Erweiterungen (eine URL pro Zeile)","customExtensionsSecurity":"Benutzerdefinierte Erweiterungen werden immer außerhalb der Packager-Sandbox ausgeführt. Je nachdem, für welche Umgebung du paketisierst, ermöglicht dies Erweiterungen die volle Steuerung über deinen Computer, einschließlich der Möglichkeit, Viren zu installieren. Benutze keine Erweiterungen, denen du nicht vertraust.","customJS":"Benutzerdefiniertes JS (Nur ändern, wenn man weiß, was man tut!)","customUsernameWarning":"Sei beim Ändern des Standard-Benutzernamens vorsichtig, da dadurch Verbindungen mit dem Standardmäßigen Server blockiert werden könnten. Nur der standardmäßige Benutzername wird garantiert funktionieren.","defaultControls":"Standard","doNothing":"Nichts tun","downloadsWillAppearHere":"Downloads weren hier erscheinen","dynamicResize":"Bühne dynamisch anpassen (experimentell)","editableLists":"Bearbeitbare Listen","enableCompiler":"Compiler einschalten","environment":"Umgebung","escapeBehavior":"Wenn die Escape-Taste gedrückt wird","exitOnly":"Beende die App","export":"Exportiere die Einstellungen","foregroundColor":"Farbe im Vordergrund (Ladebalken, manche Symbole und Texte)","framerate":"Framefrequenz","gamepad":"USB- oder Bluetooth-Controller unterstützen","gamepadHelp":"Basierend auf dem \\"Gamepad-Unterstützung\\"-Addon","highQualityPen":"Stift mit Hoher Qualität","html":"Einfaches HTML (alleinstehend, funktioniert überall)","icon":"Seiten-Icon","implicitCloudHint":"Tipp: Jede Variable mit einem Namen, der mit \\"{cloud}\\" beginnt, wird in eine Cloud-Variable umgewandelt, unabhängig davon, ob sie also solche markiert wurde oder nicht.","import":"Importiere die Einstellungen","infiniteClones":"Unendliche Klone","initalWindowSize":"Fenstergröße beim Start","interaction":"Eingabe","learnMore":"Mehr erfahren","listColor":"Listenfarbe","loadingScreen":"Ladebildschirm","loadingScreenImage":"Bild am Ladebildschirm","loadingScreenText":"Text am Ladebildschirm","loadingScreenTextPlaceholder":"(Nichts)","maxTextureDimension":"Erhöhe die maximale Vektorkostümauflösung, um große Kostüme besser aussehen zu lassen. Könnte den benötigten Speicher erhöhen und Abstürze verursachen.","mode":"Modus","monitors":"Daten","noCloudVariables":"Dieses Projekt enthält keine Cloudvariablen","noControls":"Versteckt (ohne Rand)","noCursor":"Kein Cursor","normalCursor":"Normaler Cursor","otherEnvironments":"Weitere Umgebungen (Zum Öffnen klicken)","otherEnvironmentsHelp":"Die meisten neuen Projekte sollten stattdessen die oben aufgelisteten Optionen verwenden.","package":"Paketisieren","packageName":"Paketname","packageNameHelp":"Der Paketname sollte ein Name sein, der nur für deine Anwendung verwendet wird. Das Paket sollte immer denselben Namen haben wie das Projekt.","packagedRuntime":"Ressourcendaten nach Laden löschen, um RAM zu sparen","pageTitle":"Seitentitel","playerOptions":"Player-Optionen","pointerlock":"Mauscursor blockieren","pointerlockHelp":"Basierend auf einem TurboWarp-Experiment","preserveRatio":"Skalierung beibehalten (empfohlen)","preview":"Vorschau","projectId":"Projekt-ID","projectIdHelp":"Die Projekt-ID wird beim Verbinden mit einem Cloudvariablenserver verwendet. Sie kann mehr als nur Zahlen enthalten.","removeFencing":"Einzäunung entfernen","removeMiscLimits":"Verschiedene Begrenzungen entfernen","resetAll":"Alle Einstellungen zurücksetzen","runtimeOptions":"Laufzeit-Optionen","showFlag":"Grüne flagge in Steuerelementen zeigen","showFullscreen":"Vollbildknopf in Steuerungen anzeigen","showPause":"Pauseknopf in Steuerungen anzeigen","showProgressBar":"Fortschrittleiste anzeigen","showStop":"Stoppschildknopf in Steuerungen anzeigen","sizeNormal":"Normalgröße anzeigen","sizeStretch":"Bildschirm füllen","specialCloudBehaviors":"Spezielle Verhalten für Cloudvariablen wie HTMLifier","stage":"Bühne","stageSize":"Bühnengröße","startFullscreen":"In Vollbild starten","startMaximized":"Als maximiertes Fenster starten","startWindow":"Als Fenster starten","steamworksAppId":"App-ID","steamworksAvailable":"Dieses Projekt nutzt die Steamworks-Erweiterung. Du kannst die App-ID deines Spiels in Steamworks finden, oder {n} zum Testen mit dem Steamworks-Demo-Spiel nutzen.","steamworksDocumentation":"Mehr Details in der Dokumentation der Erweiterung.","steamworksError":"Fehlermeldung anzeigen und abbrechen","steamworksExtension":"Steamworks-Erweiterung","steamworksIgnore":"Nichts tun","steamworksMacWarning":"Achtung: Spiele für macOS, die auf Steam veröffentlicht werden, müssen von Apple notarisiert werden. Da dies vom Packager nicht unterstützt wird, kannst du dein Spiel zwar auf einem Mac testen, aber noch nicht veröffentlichen.","steamworksOnError":"Falls ein Fehler bei der Initialisierung von Steamworks auftritt","steamworksUnavailable":"Um die Steamworks-Erweiterung zu aktivieren, musst du eine der folgenden Umgebungen nutzen:","steamworksWarning":"Warnung anzeigen und Vorgang fortsetzen","storedWarning":"Anmerkung: Dieses Projekt hat Einstellungen in sich gespeichert, deshalb könnten diese Einstellungen überschrieben werden.","stretch":"Bühne erweitern, um den BIldschirm zu füllen, ohne die aktuelle Größe zu ändern (experimentell)","turbo":"Turbo-Modus","unFullscreenOnly":"Verlasse den Vollbildmodus","unFullscreenOrExit":"Vollbildmodus verlassen oder App beenden","unsafeCloudBehaviors":"Zusätzliche unsichere Cloud-Verhaltensweisen","unsafeCloudBehaviorsWarning":"Unsichere Cloud-Verhaltensweisen ermöglichen es dem paketisierten Projekt, beliebigen Code außerhalb der \\"Sandbox\\" auszuführen, in der Projekte normalerweise ausgeführt werden. Abhängig von der Umgebung, für die du paketisierst, bietet dies die volle Kontrolle über deinen Computer, einschließlich der Möglichkeit, Viren zu installieren. Wenn du dem paketisierten Projekt nicht vertraust, deaktiviere diese Option.","username":"Benutzername (alle \\"#\\" werden mit einer zufälligen Zahl ersetzt)","variableColor":"Variablenfarbe","versionHelp":"Das Aktualisieren der Version ist vollkommen optional und betrifft das Verhalten deines Projektes nicht. Die Versionsnummer könnte je nach Umgebung auf Informationsseiten erscheinen. Sollte als X.Y.Z formatiert sein.","windowControls":"Fenstersteuerelemente","zip":"Zip (ideal für Websites)","zip-one-asset":"Zip, Ressourcen in einer einzelnen Datei kombinieren (nicht empfohlen)"},"p4":{"browserNotSupported":"Dein Browser wird nicht unterstützt.","browserNotSupportedDescription":"Bitte aktualisiere deinen Brower.","cannotAccessProject":"Kein Zugriff auf Projekt-Token. Dies bedeutet normalerweise, dass das Projekt nicht veröffentlicht ist, nicht existiert, die ID ungültig ist oder dein Netzwerk turbowarp.org blockiert.","cannotAccessProjectCaching":"Falls das Projekt erst vor kurzem veröffentlicht wurde, könnte es ein paar Minuten dauern, bis diese Nachricht nicht mehr erscheint.","close":"Schließen","description1":"Wandelt Scratch-Projekte in alleinstehende Dateien oder ausführbare Programme um.","description2":"Falls du einfach ein Projekt in deine Website einbetten willst, könntest du in {embedding} interessiert sein.","description2-embedding":"Einbettung","description3":"{onScratch} oder {onGitHub} kannst du Fehler melden, Feedback geben oder Ideen vorschlagen.","description3-on":"auf {brand}","disclaimer":"Diese Seite ist nicht mit Scratch, dem Scratch Team oder der Scratch-Stiftung verbunden.","documentation":"Zusätzliche Ressourcen und Hilfe","donate":"Spenden","error":"Fehler","errorMessage":"Nachricht: {error}","importingInterface":"Einstellungen werden geladen...","networkError":"Fehler beim Herunterladen von {url}. Stelle sicher, dass du mit dem Internet verbunden bist und versuche, jegliche Browsererweiterungen auszuschalten.","outdated":"Diese Packagerversion scheint veraltet zu sein. Bitte aktualisiere die Seite und versuche es erneut.","privacy":"Datenschutzerklärung","refresh":"Aktualisieren","reportBug":"Fehler melden","sourceCode":"Quellcode","unknownImportError":"Es ist ein Fehler aufgetreten. Aktualisiere die Seite und versuche es erneut."},"preview":{"loading":"Vorschau wird geladen"},"progress":{"compressingProject":"Projekt wird komprimiert","downloadingExtensions":"Benutzerdefinierte Erweiterungen werden heruntergeladen","loadingAssets":"Ressourcen werden heruntergeladen ({complete}/{total})","loadingLargeAsset":"{thing} wird heruntergeladen","loadingProjectData":"Projektdaten werden heruntergeladen","loadingProjectMetadata":"Projektmetadaten werden heruntergeladen","loadingScripts":"Skripte werden heruntergeladen","packagingProject":"Projekt wird paketisiert"},"reset":{"confirm":"Bist du sicher, dass du diese Einstellungen zurücksetzen möchtest? Dies kann nicht rückgängig gemacht werden.","confirmAll":"Bist du sicher, dass du ALLE Einstallungen zurücksetzen willst? Dies kann nicht rückgängig gemacht werden.","reset":"Zurücksetzen"},"select":{"file":"Datei","id":"Scratch-Projekt-ID oder -URL","invalidId":"Ungültige Projekt-ID","invalidUrl":"Ungültige URL","loadProject":"Projekt laden","loadToContinue":"Lade ein Projekt, um fortzufahren","noFileSelected":"Keine Datei ausgewählt","select":"Projekt auswählen","selectHelp":"Wähle das Projekt, das du paketisieren willst, indem du den Link dazu kopierst und einfügst oder einen der anderen Modi verwendest. Falls das Projekt jemand anderem gehört, vergewissere dich, dass du dich dafür bedankst.","unsharedProjects":"Der Zugriff auf nicht veröffentlichte Projekte ist aufgrund von Änderungen in der Scratch-API nicht mehr möglich.","unsharedProjectsMore":"Mehr Infos und Alternativen auf {link}.","unsharedProjectsWorkaround":"Du kannst stattdessen entweder das Projekt veröffentlichen oder es auf deinem Computer speichern (Datei > Auf deinem Computer speichern) und die Datei dann im Packager laden. Vom Packager generierte Dateien sind vollkommen selbstenthalten und nicht von diesen Änderungen betroffen.","url":"Andere URL"},"theme":{"dark":"Dunkel","light":"Hell","system":"Systemdesign verwenden"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"Descargar {filename} ({size})","useWorkaround":"Haga click aquí si el enlace de descarga no funciona"},"fileInput":{"clear":"Borrar selección","select":"Selecciona o suelta aquí un archivo","selected":"{file} seleccionados"},"import":{"cancel":"Cancelar","description":"Esto puede tomar un tiempo si el proyecto es largo.","header":"Importando proyecto..."},"options":{"accentColor":"Color de resaltado (controles activos o con el cursor sobre ellos, entrada de respuestas, menús al dar click derecho)","advancedOptions":"Opciones Avanzadas","advancedSummary":"Probablemente no quiera cambiar estas. (Click para abrir)","application-mac":"Aplicación {type} para macOS","applicationSettings":"Ajustes de aplicación","automaticallyCenter":"Centrar automáticamente","autoplay":"Empezar proyecto automáticamente en vez de mostrar una bandera verde grande","autoplayHint":"Nota: muchos navegadores no le permiten a las páginas web automáticamente reproducir sonido, por lo que los sonidos podrían no reproducirse hasta que el usuario interactúa con el proyecto.","backgroundColor":"Color del fondo","bakeExtensions":"Intente incrustar (embed) una copia del caché de extensiones personalizadas en vez de descargarlas cada vez que ejecute el proyecto","closeWhenStopped":"Cerrar ventana cuando el proyecto se detiene","cloudVariables":"Variables en la Nube","cloudVariables-custom":"Avanzado","cloudVariables-custom-help":"«Avanzado» usa un modo diferente para cada variable, por lo que algunas variables se pueden sincronizar con otros usuarios pero otras pueden guardarse localmente, por ejemplo.","cloudVariables-ignore":"Ignorar","cloudVariables-ignore-help":"«Ignorar» trata variables en la nube como variables normales.","cloudVariables-local":"Guardar en almacenamiento local","cloudVariables-local-help":"«Guardar en almacenamiento local» guarda variables en la computadora del usuario y las recupera cuando el archivo es abierto. Si un usuario tiene muchas ventanas/pestañas abiertas con el proyectos, los cambios se sincronizarán entre esas ventanas.","cloudVariables-ws":"Conectar a servidor de variables en la nube","cloudVariables-ws-help":"«Conectar a servidor de variables en la nube» sincroniza las variables con otros usuarios.","cloudVariablesHost":"Hosteo de nube","colors":"Colores","confirmImportUnsafe":"Estas configuraciones usan características avanzadas como JS personalizado, que podría correr código desconocido o posiblemente malicioso en su computadora. Importe este archivo solamente si confía en la persona que lo creó, si no está seguro de lo que esto significa, probablemente no quiera importar estas configuraciones.","controls":"Controles","controlsHelp":"Si todos los controles están desactivados, la barra de controles se remueve totalmente. Si solo se activa el botón de pantalla completa, siempre estará ubicado en la esquina superior izquierda, en vez de en la barra de controles.","cursorCenter":"Centro del cursor:","cursorHelp":"Imágenes de hasta 32x32 píxeles funcionan mejor. Imágenes más grandes no funcionarán.","customCSS":"CSS Personalizado (¡No cambie esto si no sabe lo que esta haciendo!)","customCursor":"Puntero del ratón personalizado","customExtensions":"Extensiones personalizadas (una URL por línea)","customExtensionsSecurity":"Las extensiones personalizadas siempre se ejecutan de forma no aislada en el convertidor. Dependiendo del entorno en el que usted esté convirtiendo, esto les da a las extensiones un control total sobre su computadora, incluyendo la habilidad de instalar virus. No use extensiones en las que no confía.","customJS":"JS Personalizado (¡No cambie esto si no sabe lo que esta haciendo!)","customUsernameWarning":"Se cuidadoso al cambiar el nombre de usuario predeterminado ya que puede bloquear conexiones con el servidor predeterminado de variables guardadas en la nube. Sólo se garantiza que el nombre de usuario predeterminado funcione.","downloadsWillAppearHere":"Las descargas aparecerán aquí","dynamicResize":"Cambiar el tamaño dinámicamente para hacer coincidir el tamaño de la ventana (experimental)","editableLists":"Listas editables","enableCompiler":"Activar Compilador","environment":"Entorno","export":"Exportar Configuraciones","foregroundColor":"Color en primer plano (barra de progreso, algunos íconos, algunos textos)","framerate":"FPS","gamepad":"Soporte para mandos/controles USB o Bluetooth","gamepadHelp":"Basado en el addon de «Soporte para mandos»","highQualityPen":"Lápiz de Alta Calidad","html":"HTML plano (autónomo, funciona en todos lados)","icon":"Ícono de la página","implicitCloudHint":"Consejo: cualquier variable con un nombre empezando con «{cloud}» será convertida a una variable en la nube sin importar si ha sido marcada como una.","import":"Importar Configuraciones","infiniteClones":"Clones Infinitos","interaction":"Entrada","interpolation":"Interpolación","learnMore":"Ver más","listColor":"Color de lista","loadingScreen":"Pantalla de carga","loadingScreenImage":"Imagen de la pantalla de carga","loadingScreenText":"Cargando texto en pantalla","loadingScreenTextPlaceholder":"(Nada)","maxTextureDimension":"Aumentar resolución máxima de disfraces en vectores para hacer disfraces largos verse mejor. Puede aumentar el uso de la memoria y causar accidentes.","mode":"Modo","monitors":"Monitores","noCloudVariables":"Este proyecto no contiene variables en la nube.","noCursor":"Sin puntero del ratón","normalCursor":"Puntero del ratón normal","otherEnvironments":"Otros entornos (Click para abrir)","otherEnvironmentsHelp":"Los proyectos nuevos, en su mayoría, deben usar las opciones listadas arriba.","package":"Empacar","packageName":"Nombre del paquete","packageNameHelp":"El nombre del paquete debe ser único, solo usado en tu aplicación. El mismo proyecto debería tener el mismo nombre del paquete siempre.","packagedRuntime":"Eliminar datos sin procesar después de cargar para ahorrar RAM","pageTitle":"Título de la página","playerOptions":"Opciones del Reproductor","pointerlock":"Bloquear puntero del ratón","pointerlockHelp":"Basado en un experimento de TurboWarp","preserveRatio":"Preservar relación de aspecto al cambiar el tamaño (recomendado)","preview":"Previsualización","projectId":"ID del proyecto","projectIdHelp":"El ID del proyecto es usado al conectar a un servidor de variables en la nube y para guardar variables en la nube locales. Puede contener más que solo números.","removeFencing":"Quitar Fencing","removeMiscLimits":"Quitar Límites Varios","resetAll":"Restablecer Todas las Configuraciones","runtimeOptions":"Opciones de Runtime","showFlag":"Mostrar botón de bandera verde en controles","showFullscreen":"Mostrar botón de pantalla completa en controles","showPause":"Mostrar botón de pausa en controles","showProgressBar":"Mostrar barra de carga","showStop":"Mostrar botón de detener en controles","sizeNormal":"Mostrar en tamaño normal","sizeStretch":"Rellenar pantalla","specialCloudBehaviors":"Comportamientos especiales de variables en la nube como HTMLifier","stage":"Escenario","stageSize":"Tamaño Personalizado del Escenario","startFullscreen":"Empezar en pantalla completa","startMaximized":"Empezar como ventana maximizada","startWindow":"Empezar como ventana","storedWarning":"Nota: este proyecto tiene ajustes guardados en él, los cuales pueden invalidar estos ajustes.","stretch":"Estirar escenario para llenar pantalla sin cambiar el tamaño real (experimental)","turbo":"Modo Turbo","unsafeCloudBehaviors":"Comportamientos inseguros adicionales de variables en la nube","unsafeCloudBehaviorsWarning":"Comportamientos inseguros de nube le permite al proyecto empaquetado ejecutar código arbitrario por fuera del \\"sandbox\\" donde suelen ejecutarse los proyectos. Dependiendo del entorno para donde está empaquetando, esto concede control completo a su computadora al proyecto, incluyendo la habilidad de instalar virus. Si no confía en el proyecto que esta empaquetando, por favor desactive esta opción.","username":"Nombre de usuario (cada «#» se reemplaza con un número aleatorio)","variableColor":"Color de variable","version":"Versión","zip":"Zip (ideal para sitios web)","zip-one-asset":"Zip, combinar assets a un solo archivo (no recomendado)"},"p4":{"browserNotSupported":"Navegador no compatible","browserNotSupportedDescription":"Por favor actualice su navegador.","cannotAccessProject":"No se puede acceder al token del proyecto. Esto usualmente significa que el proyecto no está compartido, nunca existió, la ID es inválida, o su red está bloqueando turbowarp.org.","cannotAccessProjectCaching":"Si el proyecto ha sido compartido recientemente, podría tardar algunos minutos para que este mensaje se vaya.","close":"Cerrar","description1":"Convierte proyectos de Scratch a archivos HTML, zip o programas ejecutables para Windows, macOS y Linux.","description2":"Si simplemente quiere una manera fácil de incrustar un proyecto en una página web, podría estar interesado en {embedding}.","description2-embedding":"Embedido","description3":"Reporte bugs, dé comentarios y sugiera ideas {onScratch} o {onGitHub}.","description3-on":"en {brand}","disclaimer":"Esta página web no está afiliada con Scratch, el Equipo de Scratch o la Fundación de Scratch.","documentation":"Recursos adicionales y ayuda","donate":"Donar","errorMessage":"Mensaje: {error}","feedback":"Comentarios","importingInterface":"Cargando opciones...","networkError":"No se ha podido descargar {url}. Asegúrese de estar conectado a Internet e intente deshabilitar cualquier extensión de navegador.","outdated":"Esta versión del convertidor parece estar desactualizada. Por favor, actualice la página e inténtelo de nuevo.","privacy":"Política de Privacidad","refresh":"Actualizar","reportBug":"Reportar Bug","sourceCode":"Código Fuente","unknownImportError":"Algo salió mal. Por favor actualice e intente otra vez."},"preview":{"loading":"Cargando Previsualización"},"progress":{"compressingProject":"Comprimiendo proyecto","downloadingExtensions":"Descargar extensiones personalizadas","loadingAssets":"Descargando assets ({complete}/{total})","loadingLargeAsset":"Descargando {thing}","loadingProjectData":"Descargando la información del proyecto","loadingProjectMetadata":"Descargando los metadatos del proyecto","loadingScripts":"Descargando scripts","packagingProject":"Empacando proyecto"},"reset":{"confirm":"¿Está seguro de que quiere reiniciar estos ajustes? Esto no se puede deshacer.","confirmAll":"¿Está seguro de que quiere reestablecer TODOS los ajustes? Esta acción es irreversible","reset":"Reiniciar"},"select":{"file":"Archivo","id":"ID o URL de proyecto de Scratch","invalidId":"ID de proyecto inválido","invalidUrl":"URL inválida","loadProject":"Cargar Proyecto","loadToContinue":"Cargar un proyecto para continuar","noFileSelected":"Ningún archivo seleccionado","select":"Seleccionar proyecto","selectHelp":"Seleccione el proyecto que quiere empacar copiando y pegando el enlace de proyecto de Scratch o usando alguno de los otros modos. Si usa un proyecto que no creó, asegúrese de dar créditos al creador.","unsharedProjects":"Proyectos no compartidos ya no son accesibles usando su ID debido a cambios en el API de Scratch.","unsharedProjectsMore":"Para más información y soluciones alternativas, visite: {link}","unsharedProjectsWorkaround":"En cambio, puedes compartir o guardar el proyecto en tu computadora (Archivo > Guardar en tu ordenador) y cargar el archivo en el convertidor. Los archivos generados por el convertidor son totalmente autónomos y no son afectados por estos cambios.","url":"Otra URL"},"theme":{"dark":"Oscuro","light":"Claro","system":"Usar tema del sistema"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"Lataa {filename} ({size})","useWorkaround":"Napauta tästä, jos latauslinkki ei toimi"},"fileInput":{"clear":"Tyhjennä valinta","select":"Valitse tai pudota tiedosto","selected":"{file} valittu"},"import":{"cancel":"Peru","description":"Tässä saattaa mennä hetki, jos projekti on suuri.","header":"Tuodaan projektia..."},"options":{"accentColor":"Korostusväri (aktiiviset ohjaimet ja ohjaimet, joiden päällä hiiren osoitin on, kysymyslaatikko, avattavat valikot)","advancedOptions":"Edistykselliset asetukset","advancedSummary":"Et todennäköisesti halua muuttaa näitä. (avaa napauttamalla)","application-linux-arm32":"{type} Linux -sovellus ARM:lle (32-bittinen)","application-linux-arm64":"{type} Linux -sovellus ARM:lle (64-bittinen)","application-mac":"{type} macOS -sovellus","application-win-arm":"{type} Windows -sovellus ARM:lle","applicationSettings":"Sovelluksen asetukset","automaticallyCenter":"Keskitä automaattisesti","autoplay":"Käynnistä projekti automaattisesti suuren vihreän lipun näyttämisen sijaan","autoplayHint":"Huomaa: Monet selaimet eivät anna verkkosivustojen toistaa ääntä automaattisesti, joten ääniä ei toisteta ennen kuin käyttäjä on vuorovaikutuksessa projektin kanssa.","backgroundColor":"Taustaväri","bakeExtensions":"Yritä upottaa omien laajennusten välimuistikopiot sen sijaan, että ne ladataan joka kerta, kun projekti suoritetaan","closeWhenStopped":"Sulje ikkuna, kun projekti pysäytetään","cloudVariables":"Pilvimuuttujat","cloudVariables-custom":"Edistyksellinen","cloudVariables-custom-help":"\\"Edistyksellinen\\" käyttää eri tilaa jokaiselle muuttujalle, joten jotkin muuttujat voivat synkronoitua muiden käyttäjien kanssa ja jotkin esimerkiksi tallennetaan paikallisesti.","cloudVariables-ignore":"Jätä huomiotta","cloudVariables-ignore-help":"\\"Jätä huomiotta\\" kohtelee pilvimuuttujia kuin tavallisia muuttujia.","cloudVariables-local":"Tallenna paikalliseen muistiin","cloudVariables-local-help":"\\"Tallenna paikalliseen muistiin\\" tallentaa muuttujat jokaisen käyttäjän tietokoneelle ja säilyttää ne, kun projekti avataan uudelleen. Jos käyttäjällä on useita ikkunoita/välilehtiä auki, muutokset synkronoidaan ikkunoiden välillä.","cloudVariables-ws":"Yhdistä pilvimuuttujapalvelimeen","cloudVariables-ws-help":"\\"Yhdistä pilvimuuttujapalvelimeen\\" synkronoi muuttujat muiden käyttäjien kanssa.","cloudVariablesHost":"Pilvi-isäntä","colors":"Värit","confirmImportUnsafe":"Nämä asetukset käyttävät edistyksellisiä toimintoja, kuten omaa JS-koodia, joka suorittaa tuntematonta ja mahdollisesti pahantahtoista koodia tietokoneellasi. Tuo tämä tiedosto vain, jos luotat sen tekijään. Jos et ole varma, mitä tämä tarkoittaa, sinun ei pitäisi tuoda näitä asetuksia.","controls":"Ohjaimet","controlsHelp":"Jos kaikki ohjaimet on poistettu käytöstä, ohjainpalkki poistetaan kokonaan. Jos pelkkä koko näytön painike on käytössä, se sijoitetaan aina vasempaan yläreunaan, ei ohjainpalkkiin.","cursorCenter":"Kohdistimen keskipiste:","cursorHelp":"Enintään 32x32-kokoiset kuvat toimivat parhaiten. Suuremmat kuvat eivät välttämättä toimi luotettavasti.","customCSS":"Oma CSS-koodi (Älä muokkaa, jos et tiedä, mitä teet!)","customCursor":"Oma hiiren kohdistin","customExtensions":"Omat laajennukset (yksi URL-osoite yhdelle riville)","customExtensionsSecurity":"Omat laajennukset suoritetaan pakkauskoneessa aina hiekkalaatikon ulkopuolella. Riippuen alustasta, johon pakkaamiseen käytät pakkauskonetta, tämä antaa projektillesi täyden hallinnan tietokoneellasi, mukaan lukien kyvyn asentaa viruksia. Älä käytä laajennuksia, joihin et luota.","customJS":"Oma JS-koodi (Älä muokkaa, jos et tiedä, mitä tee!)","customUsernameWarning":"Ole varovainen muuttaessasi oletuskäyttäjänimeä, koska se voi johtaa siihen, että yhteydet oletuspilvimuuttujapalvelimeen estyvät. Ainoastaan oletuskäyttäjänimen toiminta on taattu.","defaultControls":"Oletus","doNothing":"Älä tee mitään","downloadsWillAppearHere":"Lataukset näkyvät täss","dynamicResize":"Muuta koko dynaamisesti vastaamaan ikkunan kokoa (kokeellinen)","editableLists":"Muokattavat listat","enableCompiler":"Ota kääntäjä käyttöön","environment":"Alusta","escapeBehavior":"Kun poispääsypainiketta painetaan","exitOnly":"Poistu pelkästään sovelluksesta","export":"Lataa asetukset","foregroundColor":"Edustan väri (edistymispalkki, jotkin kuvakkeet, osa tekstistä)","framerate":"Kuvataajuus","gamepad":"USB- tai Bluetooth-peliohjainten tuki","gamepadHelp":"Pohjautuu \\"Peliohjaintuki\\"-lisäosaan.","highQualityPen":"Korkealaatuinen kynä","html":"Tavallinen HTML (itsenäinen, toimii missä vain)","icon":"Sivun kuvake","implicitCloudHint":"Vinkki: Mikä tahansa symbolilla \\"{cloud}\\" alkava muuttuja muunnetaan pilvimuuttujaksi riippumatta siitä, merkittiinkö se sellaiseksi.","import":"Tuo asetukset","infiniteClones":"Loputtomasti klooneja","initalWindowSize":"Alustava ikkunan koko","interaction":"Syöte","interpolation":"Interpolaatio","learnMore":"Lisätietoa","listColor":"Listojen väri","loadingScreen":"Latausnäkymä","loadingScreenImage":"Latausnäkymän kuva","loadingScreenText":"Latausnäkymän teksti","loadingScreenTextPlaceholder":"(ei mitään)","maxTextureDimension":"Kasvata vektoriasusteiden enimmäislaatua, jotta ne näyttävät paremmilta. Kasvattaa muistin käyttöä ja saattaa aiheuttaa kaatumisia.","mode":"Tila","monitors":"Muuttujien ja listojen näyttimet","noCloudVariables":"Tässä projektissa ei ole pilvimuuttujia.","noControls":"Piilossa (kehyksetön)","noCursor":"Ei hiiren kohdistinta","normalCursor":"Tavallinen hiiren kohdistin","otherEnvironments":"Muita alustoja (avaa napauttamalla)","otherEnvironmentsHelp":"Useimpien uusien projektien tulisi käyttää yllä lueteltuja vaihtoehtoja näiden sijaan.","package":"Pakkaa","packageName":"Pakkauksen nimi","packageNameHelp":"Pakkauksen nimen tulisi olla yksiselitteinen, vain projektisi käyttämä nimi. Samalla projektilla tulee aina olla sama pakkauksen nimi.","packagedRuntime":"Poista raa\'at resurssit lataamisen jälkeen järjestelmämuistin säästämiseksi","pageTitle":"Sivun otsikko","playerOptions":"Soittimen asetukset","pointerlock":"Lukitse hiiren kohdistin","pointerlockHelp":"Pohjautuu TurboWarpin kokeiluun.","preserveRatio":"Säilytä kuvasuhde, kun koko muuttuu (suositeltava)","preview":"Esikatsele","projectId":"Projektitunnus","projectIdHelp":"Projektitunnusta käytetään pilvimuuttujapalvelimeen yhdistäessä ja paikallisia pilvimuuttujia tallentaessa. Se voi sisältää muutakin kuin vain numeroita.","removeFencing":"Poista esiintymislavan rajat","removeMiscLimits":"Poista erilaiset rajoitukset","resetAll":"Palauta kaikki asetukset","runtimeOptions":"Ajonaikaiset asetukset","showFlag":"Näytä vihreä lippu ohjaimissa","showFullscreen":"Näytä koko näytön painike ohjaimissa","showPause":"Näytä keskeytyspainike ohjaimissa","showProgressBar":"Näytä edistymispalkki","showStop":"Näytä pysäytyspainike ohjaimissa","sizeNormal":"Näytä normaalikokoisena","sizeStretch":"Täytä näyttö","specialCloudBehaviors":"HTMLifierin kaltainen pilvimuuttujien erityiskäytös","stage":"Esiintymislava","stageSize":"Oma esiintymislavan koko","startFullscreen":"Käynnisty koko näytön tilassa","startMaximized":"Käynnisty suurennettu ikkunana","startWindow":"Käynnisty ikkunana","steamworksIgnore":"Älä tee mitään","storedWarning":"Huomaa: Tässä projektissa on sisäisiä asetuksia, jotka saattavat kumota nämä asetukset.","stretch":"Venytä esiintymislava täyttämään näyttö ilman kohteiden todellisen koon muuttamista (kokeellinen)","turbo":"Turbotila","unFullscreenOnly":"Poistu pelkästään koko näytön tilasta","unFullscreenOrExit":"Poistu koko näytön tilasta tai poistu sovelluksesta","unsafeCloudBehaviors":"Lisää epäturvallista erityistä pilvikäytöstä","unsafeCloudBehaviorsWarning":"Epäturvallinen erityinen pilvikäytös antaa pakattujen projektien suorittaa mielivaltaista koodia \\"hiekkalaatikon\\" ulkopuolella, jossa projektit yleensä suoritetaan. Riippuen alustasta, johon pakkaamiseen käytät pakkauskonetta, tämä antaa projektillesi täyden hallinnan tietokoneellasi, mukaan lukien kyvyn asentaa viruksia. Jos et luota pakattavaan projektiin, älä kytke tätä päälle.","username":"Käyttäjänimi (jokainen \\"#\\" korvataan satunnaisella numerolla)","variableColor":"Muuttujien väri","version":"Versio","versionHelp":"Version päivittäminen on täysin valinnaista eikä se vaikuta projektisi toimintaan. Se voi näkyä eri paikoissa riippuen alustasta. Version pitäisi olla muotoa X.Y.Z.","warpTimer":"Warp-ajastin","windowControls":"Ikkunan ohjaimet","zip":"Zip (ihanteellinen verkkosivustoille)","zip-one-asset":"Zip, yhdistä resurssit yhteen tiedostoon (ei-suositeltava)"},"p4":{"browserNotSupported":"Selainta ei tueta","browserNotSupportedDescription":"Päivitä selain.","cannotAccessProject":"Projektitunnusta ei löytynyt. Yleensä tämä tarkoittaa sitä, että projekti on jakamaton tai sitä ei ikinä ollut olemassa, projektitunnus on virheellinen tai verkkosi estää turbowarp.org:in.","cannotAccessProjectCaching":"Jos projekti jaettiin äskettäin, tämän viestin poistumiseen saattaa kulua muutamia minuutteja.","close":"Sulje","description1":"Muuntaa Scratch-projekteja HTML-tiedostoiksi, zip-arkistoiksi tai suoritettaviksi Windows-, macOS- tai Linux-ohjelmiksi.","description2":"Jos haluat vain upottaa projektin helposti verkkosivustollesi, sinun kannattaa käyttää {embedding}. ","description2-embedding":"upottamista","description3":"Ilmoita bugeista, anna palautetta ja kerro ideoita {onScratch} tai {onGitHub}.","description3-on":"{brand}issa","disclaimer":"Tämä sivusto ei ole kytköksissä Scratchiin, Scratch-tiimiin tai Scratch-säätiöön.","documentation":"Lisämateriaalit ja ohjeet","donate":"Lahjoita","error":"Virhe","errorMessage":"Viesti: {error}","feedback":"Palaute","importingInterface":"Ladataan asetuksia...","networkError":"Projektia osoitteessa {url} ei voitu ladata. Tarkista internet-yhteytesi ja koeta poistaa käytöstä kaikki selainlaajennukset.","outdated":"Tämä pakkauskoneen versio vaikuttaa olevan vanhentunut. Lataa sivu uudelleen ja yritä uudelleen.","privacy":"Tietosuojakäytäntö","refresh":"Lataa uudelleen","reportBug":"Ilmoita bugista","sourceCode":"Lähdekoodi","unknownImportError":"Jokin meni pieleen. Lataa sivu uudelleen ja yritä uudelleen."},"preview":{"loading":"Ladataan esikatselua"},"progress":{"compressingProject":"Pakataan projektia","downloadingExtensions":"Ladataan omia laajennuksia","loadingAssets":"Ladataan resursseja ({complete}/{total})","loadingLargeAsset":"Ladataan kohdetta {thing}","loadingProjectData":"Ladataan projektin dataa","loadingProjectMetadata":"Ladataan projektin metatietoja","loadingScripts":"Ladataan skriptejä","packagingProject":"Pakataan projektia"},"reset":{"confirm":"Haluatko varmasti palauttaa nämä asetukset? Tätä ei voida perua.","confirmAll":"Haluatko varmasti palauttaa KAIKKI asetukset? Tätä ei voida perua.","reset":"Nollaa"},"select":{"file":"Tiedosto","id":"Scratch-projektin tunnus tai URL-osoite","invalidId":"Virheellinen projektitunnus","invalidUrl":"Virheellinen URL-osoite","loadProject":"Lataa projekti","loadToContinue":"Jatka lataamalla projekti","noFileSelected":"Ei valittua tiedostoa","select":"Valitse projekti","selectHelp":"Valitse pakattava projekti kopioimalla ja liittämällä Scratch-projektin linkki tai käyttämällä muita tapoja. Jos käytät jonkun muun tekemää projektia, muista mainita tekijä.","unsharedProjects":"Jakamattomiin projekteihin ei ole enää pääsyä käyttämällä projektitunnusta Scratchin ohjelmointirajapintaan tehtyjen muutosten vuoksi.","unsharedProjectsMore":"Lisätietoja hätäratkaisuista: {link}","unsharedProjectsWorkaround":"Sen sijaan voit joko jakaa projektin tai tallentaa projektin tietokoneellesi (kohdasta Tiedosto > Tallenna tietokoneellesi) ja ladata sitten tiedoston pakkauskoneeseen. Pakkauskoneen tuottamat tiedostot ovat täysin itsenäisiä eivätkä nämä muutokset vaikuta niihin.","url":"Muu URL-osoite"},"theme":{"dark":"Tumma","light":"Vaalea","system":"Käytä järjestelmän teemaa"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"Télécharger {filename} ({size})","useWorkaround":"Si le lien ne fonctionne pas, cliquez ici"},"fileInput":{"clear":"Effacer la sélection","select":"Sélectionne ou dépose un fichier","selected":"Sélectionné {file}"},"import":{"cancel":"Annuler","description":"Cela peut prendre un moment car le projet est lourd.","header":"Imporation du projet..."},"options":{"advancedOptions":"Paramètres avancés","applicationSettings":"Paramètres de l\'application","automaticallyCenter":"Centrer automatiquement","backgroundColor":"Couleur d\'arrière-plan","closeWhenStopped":"Fermer la fenêtre quand le projet s\'arrête","cloudVariables":"Variables globales (Cloud)","cloudVariables-custom":"Avancé","cloudVariables-ignore":"Ignorer","cloudVariables-ws":"Connexion au serveur de variables globales (Cloud).","cloudVariablesHost":"Serveur Cloud","colors":"Couleurs","controls":"Commandes","cursorCenter":"Centre du curseur : ","customCursor":"Curseur personnalisé","downloadsWillAppearHere":"Les téléchargements vont apparaître ici","enableCompiler":"Activer le compilateur","environment":"Environnement","framerate":"Images par seconde (FPS)","highQualityPen":"Stylo de haute qualité","icon":"Icône de la page","infiniteClones":"Clones Infinis","interaction":"Entrée","learnMore":"En savoir plus","listColor":"Couleur des listes","loadingScreen":"Écran de chargement","loadingScreenImage":"Image de l\'écran de chargement","loadingScreenText":"Texte de chargement","loadingScreenTextPlaceholder":"(Rien)","noCursor":"Aucun curseur","normalCursor":"Curseur de base","package":"Compiler","packageName":"Nom de la compilation","pageTitle":"Titre de la page","playerOptions":"Options de lecture","pointerlock":"Bloquer le curseur de la souris","pointerlockHelp":"Basé sur une expérience de TurboWarp.","preview":"Prévisualiser","removeFencing":"Supprimer les limites","removeMiscLimits":"Supprimer diverses limites","runtimeOptions":"Options d\'exécution","showFlag":"Afficher le drapeau vert","showFullscreen":"Afficher le bouton de plein écran","showProgressBar":"Afficher la barre de chargement","showStop":"Afficher le panneau stop","sizeNormal":"Afficher en taille normale","sizeStretch":"Remplir l\'écran","stage":"Scène","stretch":"Étirer la scène pour remplir l\'écran sans changer la taille réelle (expérimental)","turbo":"Mode Turbo","username":"Nom d\'utilisateur (chaque \\"#\\" est remplacé par un chiffre aléatoire entre 0 et 9)","variableColor":"Couleur des variables","warpTimer":"Vérificateur de boucles infinies."},"p4":{"browserNotSupported":"Navigateur non supporté","browserNotSupportedDescription":"Mettez à jour votre navigateur.","close":"Fermer","description2-embedding":"Intégrer","description3":"Rapportez des bugs, envoyez votre avis ou suggérer vos idées {onScratch} ou {onGitHub}.","documentation":"Ressources et aide supplémentaires","donate":"Faire un don","error":"Erreur","errorMessage":"Message : {error}","feedback":"Envoyer des commentaires","importingInterface":"Chargement des options...","networkError":"Impossible de télécharger {url}. Assurez-vous d\'être connecté à Internet et essayez de désactiver toutes les extensions de votre navigateur.","privacy":"Politique de Confidentialité","reportBug":"Rapporter des bugs","sourceCode":"Code source","unknownImportError":"Quelque chose s\'est mal passé. Rafraîchissez la page et réessayez."},"progress":{"compressingProject":"Compression du projet","loadingLargeAsset":"Téléchargement {thing}","loadingProjectMetadata":"Téléchargement des metadonnées du projet","packagingProject":"Compilation du projet"},"reset":{"confirm":"Voulez-vous vraiment réinitialiser ces paramètres ? Ça ne peut pas être annulé.","confirmAll":"Êtes vous sûr de vouloir reinitialiser TOUS les paramètres ? Cela ne peut pas être annulé.","reset":"Réinitialiser"},"select":{"file":"Fichier","id":"ID ou URL du projet Scratch","invalidId":"ID du projet invalide","invalidUrl":"URL invalide","loadProject":"Charger le projet","loadToContinue":"Chargez un projet pour continuer","noFileSelected":"Aucun fichier sélectionné","select":"Choix du projet","selectHelp":"Choisissez le projet que vous souhaitez compiler en copiant-collant le lien du projet Scratch, ou utilisez l\'un de nos autre modes d\'importation. Si vous choisissez un projet que vous n\'avez pas créé, vous êtes tenu de créditer le créateur.","unsharedProjects":"Les projets non partagés ne sont plus accesibles via leur ID en raison des changements de l\'API de Scratch.","unsharedProjectsWorkaround":"A la place, vous pouvez soit partager le projet, soit le sauvegarder sur votre ordinateur (Fichier > Sauvegarder sur votre ordinateur) et importer le projet dans le conditionneur.\\nLes fichiers générés par le conditionneur sont totalement indépendants et ne seront pas affectés par ces changements.","url":"Autre URL"},"theme":{"dark":"Sombre","light":"Clair","system":"Thème du système"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"fileInput":{"clear":"Választás törlése","select":"Válasszon ki, vagy húzzon ide egy fájlt","selected":"Kiválasztva {file}"},"options":{"accentColor":"Hangsúlyos színek (aktív/egérmutatóval érintett irányítási lehetőségek, kérdőmezők, helyi menük)","advancedOptions":"Fejlettebb Opciók","advancedSummary":"Valószínűleg nem szeretné ezeket megváltoztatni. (Kattintson a megnyitásukhoz.)","application-mac":"{type} macOS alkalmazás","applicationSettings":"Alkalmazásbeállítások","autoplay":"Kezdje el a projektet rögtön egy nagy zöld zászló mutatása helyet","autoplayHint":"Megjegyzés: sok böngésző nem fogja engedélyezni az automatikus hanglejátszást, így a hangok nem biztos, hogy elfognak indulni lejátszódni, amíg a felhasználó nem lép kapcsolatba a projekttel.","backgroundColor":"Háttérszín","cloudVariables":"Megosztott Változók","cloudVariables-custom":"Haladó","cloudVariables-custom-help":"A \\"Haadó\\" különböző módot használ minden egyes változónál, így egyes változók szinkronizálhatóak egyéb felhasználókkal, mások meg helyileg is eltárolhatóak például.","cloudVariables-ignore":"Mellőzés","cloudVariables-ignore-help":"\\"Mellőzés\\" úgy kezeli a megosztott változókat, mint a normális változókat.","cloudVariables-local":"Eltárolás helyi raktárban","cloudVariables-local-help":"Az \\"Eltárolás helyi raktárban\\" elraktározza a változókat minden felhasználó gépén, és visszaállítja őket a projekt megnyitásánál. Ha egy felhasználónak több oldala/ablaka is meg van nyitva ugyanazon projektről, akkor a változtatások szinkronizálódni fognak közöttük.","cloudVariables-ws":"Megosztott-változószerverekhez csatlakozás","cloudVariables-ws-help":"A \\"Megosztott-változószerverekhez csatlakozás\\" szinkronizálja a változókat a többi felhasználóval is.","cloudVariablesHost":"Felhő megosztója","colors":"Színek","controls":"Vezérlők","controlsHelp":"Ha mindegyik vezérlő le van tiltva, a vezérlősáv teljesen le lesz véve. Ha csak a teljes képernyő van bepipálva, akkor az mindig a felső bal sarokban fog megjelenni, nem a vezérlő fejlécében. ","cursorHelp":"32×32-ig terjedő képek működnek a legjobban. Nagyobb képek lehet, hogy nem megbízhatóan működnének.","customCSS":"Egyéni CSS (Ne változtasd meg, ha nem tudod, hogy mit csinálsz!)","customCursor":"Egyéni egérmutató","customExtensions":"Egyéni kiegészítők (egy URL soronként)","customJS":"Egyéni JS (Ne változtasd meg, ha nem tudod, hogy mit csinálsz!)","dynamicResize":"Méret átméretezése rugalmasan, hogy egyezzen az ablak méretével (kísérleti)","editableLists":"Szerkeszthető listák","enableCompiler":"Fordítóprogram bekapcsolása","environment":"Környezet","foregroundColor":"Előtér színe (haladásmutató sáv, néhány ikon, egyes szövegek is)","framerate":"Képkockaarány","gamepad":"USB vagy Bluetooth gamepad/kontrollerek támogatása","gamepadHelp":"A \\"Gamepad támogatása\\" kiegészítőn alapszik.","highQualityPen":"Magas Minőségű Toll","html":"Sima HTML (önálló, működik mindenhol )","icon":"Oldal ikonja","infiniteClones":"Végtelen másolatszám","interaction":"Bevitel","interpolation":"Interpoláció","learnMore":"Több megtudása","loadingScreen":"Betöltésképernyő","loadingScreenImage":"Betöltésképernyőn megjelenített kép","loadingScreenText":"Betöltésképernyő szövege","loadingScreenTextPlaceholder":"(Semmi)","mode":"Mód","monitors":"Monitorok","noCursor":"Semmilyen egérmutató","normalCursor":"Normális egérmutató","otherEnvironments":"Egyéb környezetek (Kattintás a megnyitásukhoz)","otherEnvironmentsHelp":"A legtöbb új projekt a föntebb felsorolt lehetőségek egyékét kéne használja","package":"Csomagolás","packageName":"Csomag neve","packageNameHelp":"A csomagnevek egyedi nevek kellenek, hogy legyenek, amit egyedül csak a te applikációd használ. Ugyanaz a projekt mindig ugyanaz a csomagnevet kell hogy jelentse.","pageTitle":"Oldal címe","playerOptions":"Lejátszó Opciók","pointerlock":"Egérkurzor rögzítése","pointerlockHelp":"Egy TurboWarp kísérleten alapszik.","preview":"Előnézet","removeFencing":"Lekerítés eltávolítása","removeMiscLimits":"Egyéb Korlátok Eltávolítása","runtimeOptions":"Lefutási Opciók","showFlag":"Zöld zászló mutatása a vezérlők között","showFullscreen":"Teljes-képernyő gomb mutatása a vezérlők között","showPause":"Szüneteltetés gomb mutatása a vezérlők között","showProgressBar":"Haladásmutató sáv megjelenítése","showStop":"Leállítás gomb megjelenítése a vezérlők között","sizeNormal":"Megjelenítés normális méretében","sizeStretch":"Képernyő kitöltése","specialCloudBehaviors":"Egyedi megosztott változók viselkedés, mint a HTMLifiernél","storedWarning":"Megjegyzés: ebben a projektben beállítások vannak eltárolva, amik felülírhatják a beállításokat","turbo":"Turbo mód","username":"Felhasználónév (Minden \\"#\\" lecserélődik egy random számmal)","warpTimer":"Warp Időzítő","zip":"Zip (ideális weboldalakhoz)","zip-one-asset":"Zip, tartozékok egyetlen fájlba becsomagolása (nem ajánlott)"},"p4":{"close":"Bezárás","description1":"Scratch projektek átkonvertálása HTML fájllá, zip archívummá, vagy futtatható programokká Windowshoz, macOS-hez és Linuxhoz is.","description2":"Ha csak egy egyszerű módját szeretné megtalálni a projektek weboldalhoz történő beágyazásához, akkor talán érdekelheti a következő: {embedding}.","description2-embedding":"Beágyazás","description3":"Hibák jelentése, visszajelzés küldése és ötletek javaslása {onScratch}, vagy {onGitHub}.","description3-on":"a {brand}-en","documentation":"Kiegészítő anyagok és segítség","error":"Hiba","errorMessage":"Üzenet: {error}","feedback":"Visszajelzés","privacy":"Adatvédelmi Irányelvek","reportBug":"Hiba jelentése","sourceCode":"Forráskód"},"progress":{"compressingProject":"Projekt tömörítése","loadingAssets":"Tartozékok letöltése ({complete}/{total})","loadingLargeAsset":"{thing} letöltése","loadingProjectData":"Projektadatok letöltése","packagingProject":"Projekt becsomagolása"},"reset":{"reset":"Visszaállítás"},"select":{"file":"Fájl","id":"Scratch projektazonosító vagy URL","invalidId":"Érvénytelen projektazonosító","invalidUrl":"Érvénytelen URL","loadProject":"Projekt betöltése","loadToContinue":"Tölts e projektet a továbblépéshez","noFileSelected":"Nincs kiválasztva fájl","select":"Projekt kiválasztása","selectHelp":"Válassza ki a projektet, amit be szeretne csomagolni, az által, hogy kimásolj, majd beilleszti a Scratch projekt linkjét, vagy az egyéb módok egyikét használva. ha egy olyan projektet használna, ami nem saját-készítésű, akkor ne felejtse el megjelölni az eredeti alkotót.","url":"Egyéb URL"},"theme":{"dark":"Sötét","light":"Világos","system":"Rendszertéma használata"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"Scarica {filename} ({size})","useWorkaround":"Se il download non parte clicca qui"},"fileInput":{"clear":"Cancella Selezione","select":"Seleziona o trascina qui un file","selected":"Selezionato {file}"},"import":{"cancel":"Annulla","description":"Può richiedere un po\' se il progetto è grande.","header":"Importazione del progetto in corso …"},"options":{"accentColor":"Colore di evidenziazione (controlli attivi, casella chiedi, menu contestuali) ","advancedOptions":"Opzioni Avanzate","advancedSummary":"Probabilmente non sei interessato a cambiare queste impostazioni. (Clicca per aprire)","application-linux-arm32":"App Linux {type} per architettura ARM (32-bit)","application-linux-arm64":"App Linux {type}per architettura ARM (64-bit)","application-linux64":"App Linux {type} (64-bit)","application-mac":"App macOS {type}","application-win-arm":"App Windows {type} per architettura ARM","application-win32":"App Windows {type} (32-bit)","application-win64":"App Windows {type} (64-bit)","applicationSettings":"Impostazioni Applicazione","automaticallyCenter":"Centra automaticamente","autoplay":"Inizia il progetto automaticamente, senza mostrare la bandiera verde al centro","autoplayHint":"Nota: Alcuni browser non permettono ai siti web di riprodurre automaticamente suoni, quindi i suoni non verranno riprodotti fino a che l\'utente non interagirà con il progetto.","backgroundColor":"Colore sfondo","bakeExtensions":"Prova a includere una copia cache delle estensioni personali invece di scaricarle ogni volta che il progetto viene eseguito","closeWhenStopped":"Chiudi la finestra quando il progetto termina","cloudVariables":"Variabili Cloud","cloudVariables-custom":"Impostazioni Avanzate","cloudVariables-custom-help":"\\"Avanzate\\" usa una diversa modalità per ogni variabile, ad esempio alcune variabili possono sincronizzarsi con altri utenti mentre altre possono essere memorizzate localmente.  ","cloudVariables-ignore":"Ignora","cloudVariables-ignore-help":"\\"Ignora\\" tratta le variabili cloud come variabili normali.","cloudVariables-local":"Memorizza nella memoria locale","cloudVariables-local-help":"\\"Memorizza localmente\\" memorizza le variabili sul computer del singolo utente e le ripristina quando il progetto viene riaperto. Se un utente ha diverse finestre/schede del progetto aperte i cambiamenti verranno sincronizzati con tutte le finestre.","cloudVariables-ws":"Connessione al server delle variabili cloud","cloudVariables-ws-help":"\\"Connessione al server delle variabili cloud\\" sincronizza le variabili con altri utenti.","cloudVariablesHost":"Host cloud","colors":"Colori","confirmImportUnsafe":"Queste impostazioni usano caratteristiche avanzate come ad esempio JS personalizzato che esegue sul tuo computer codice sconosciuto e potenzialmente dannoso. Importa questo file soltanto se ti fidi della persona che lo ha creato. Se non sei sicuro di cosa questo significhi, probabilmente non dovresti importare queste impostazioni.","controls":"Controlli","controlsHelp":"Se tutti i controlli sono disabilitati, la barra dei controlli viene rimossa. Se è abilitato solo il pulsante schermo intero lo trovi sempre nell\'angolo in alto a sinistra, non nella barra dei controlli.","cursorCenter":"Centro del cursore:","cursorHelp":"Le immagini migliori sono quelle 32x32. Immagini più grandi possono non funzionare in modo affidabile.","customCSS":"CSS personalizzato (Non cambiare se non sai cosa stai facendo!)","customCursor":"Puntatore del mouse personalizzato","customExtensions":"Estensioni personalizzate (un URL per riga)","customExtensionsSecurity":"Le estensioni custom sono sempre eseguite senza sandbox nel packager. A seconda dell\'ambiente per il quale stai creando il pacchetto, questo garantisce alle estensioni completo controllo del tuo computer, inclusa la possibilità di installare virus. Non usare estensioni di cui non ti fidi del tutto. ","customJS":"JS personalizzato (Non cambiare se non sai cosa stai facendo!)","customUsernameWarning":"Fai attenzione quando cambi il nome utente predefinito perché può causare il blocco delle connessioni al server predefinito delle variabili cloud. Solo il nome utente predefinito è garantito funzionare.","defaultControls":"Standard","doNothing":"Non fare nulla","downloadsWillAppearHere":"I download appariranno qui","dynamicResize":"Aggiusta le dimensioni dinamicamente per adattarsi alle dimensioni della finestra (sperimentale)","editableLists":"Liste modificabili","enableCompiler":"Abilita Compilatore","environment":"Ambiente","escapeBehavior":"Quando si preme il tasto escape","exitOnly":"Esci dal progetto","export":"Esporta le Impostazioni","foregroundColor":"Colore primo piano (barra di avanzamento, alcune icone, alcuni testi)","gamepad":"Supporta gamepad/controlli USB o Bluetooth","gamepadHelp":"Basato sull\'addon \\"Supporto gamepad\\".","highQualityPen":"Penna Alta Qualità","html":"Puro HTML (autonomo, funziona ovunque)","icon":"Icona della pagina","implicitCloudHint":"Suggerimento: Qualunque variabile il cui nome inizia con \\"{cloud}\\" sarà convertita in una variabile cloud anche se non è stata esplicitamente indicata come variabile cloud.","import":"Importa le Impostazioni","infiniteClones":"Cloni Infiniti","initalWindowSize":"Dimensioni iniziali della finestra","interpolation":"Interpolazione","learnMore":"Ulteriori informazioni","listColor":"Colore liste","loadingScreen":"Schermata di Caricamento","loadingScreenImage":"Immagine della schermata di caricamento","loadingScreenText":"Testo della schermata di caricamento","loadingScreenTextPlaceholder":"(Nulla)","maxTextureDimension":"Aumenta la massima risoluzione dei costumi vettoriali permettendo ai costumi di grandi dimensioni di avere un aspetto migliore. Può aumentare il consumo di memoria e causare blocchi.","mode":"Modalità","monitors":"Monitor","noCloudVariables":"Questo progetto non contiene variabili cloud.","noControls":"Nascosti (finestra senza bordo)","noCursor":"Nessun puntatore del mouse","normalCursor":"Puntatore del mouse normale","otherEnvironments":"Altri ambienti (Cliccare per aprire)","otherEnvironmentsHelp":"La maggior parte dei nuovi progetti dovrebbe usare invece le opzioni elencate qui sopra.","package":"Pacchetto","packageName":"Nome pacchetto","packageNameHelp":"Il nome del pacchetto deve essere un nome unico usato solo dalla tua applicazione. Lo stesso progetto dovrebbe avere sempre lo stesso nome per il pacchetto.","packagedRuntime":"Rimuovi i dati grezzi delle risorse dopo il caricamento per risparmiare RAM","pageTitle":"Titolo della pagina","playerOptions":"Opzioni Player","pointerlock":"Blocca puntatore del mouse","pointerlockHelp":"Basato su TurboWarp Sperimentale.","preserveRatio":"Mantieni le proporzioni quando si ridimensiona (raccomandato)","preview":"Anteprima","projectId":"ID progetto","projectIdHelp":"L\'ID del progetto è usato quando ci si collega ad un server di variabili cloud e quando si quando si memorizzano le variabili cloud locali. Non è obbligatorio che contenga solo numeri.","removeFencing":"Rimozione limiti Stage","removeMiscLimits":"Rimozione Limiti Vari","resetAll":"Resetta Tutte le Impostazioni","runtimeOptions":"Opzioni Runtime","showFlag":"Mostra la bandiera verde","showFullscreen":"Mostra il pulsante schermo intero","showPause":"Mostra il pulsante pausa","showProgressBar":"Mostra barra di avanzamento","showStop":"Mostra il pulsante di stop","sizeNormal":"Mostra a dimensione normale","sizeStretch":"Riempi lo schermo","specialCloudBehaviors":"Comportamento speciale delle variabili cloud (come in HTMLifier; vedi https://github.com/SheepTester/htmlifier/wiki/Special-cloud-behaviours)","stageSize":"Dimensioni Stage Personalizzate","startFullscreen":"Avvia a tutto schermo","startMaximized":"Avvia come finestra a tutto schermo","startWindow":"Avvia come finestra","steamworksAppId":"ID App","steamworksAvailable":"Questo progetto usa l\'estensione Steamworks. Puoi trovare il tuo App ID su Steamworks oppure puoi inserire {n} per fare un test con il gioco demo di Steamwork.","steamworksDocumentation":"Per ulteriori dettagli consulta la documentazione dell\'estensione. ","steamworksError":"Mostra un errore e esci","steamworksExtension":"Estenzione Steamworks","steamworksIgnore":"Non fare nulla","steamworksMacWarning":"Attenzione: i giochi macOS pubblicati su Steam devono essere approvati da Apple, operazione che il packager non supporta. Puoi certamente testare i tuoi giochi su un Mac, ma non potrai pubblicarli per macOS.","steamworksOnError":"In caso di errore quando si inizializza Steamworks","steamworksUnavailable":"Per abilitare l\'estenzione Steamworks devi usare uno degli ambienti seguenti:","steamworksWarning":"Mostra un avviso e vai avanti","storedWarning":"Nota: Questo progetto contiene al suo interno delle impostazioni che possono sovrascrivere queste impostazioni.","stretch":"Allarga lo stage per riempire lo schermo senza cambiare le dimensioni attuali (sperimentale)","turbo":"Modalità Turbo","unFullscreenOnly":"Esci solo da Schermo intero","unFullscreenOrExit":"Esci da Schermo intero o dal progetto","unsafeCloudBehaviors":"Ulteriori comportanti insicuri del cloud speciale ","unsafeCloudBehaviorsWarning":"Comportanti non sicuri del cloud permettono ai progetti pacchettizzati di eseguire codice al di fuori della \\"sandbox\\" al cui interno i progetti sono tipicamente eseguiti. A seconda dell\'ambiente per il quale stai creando il pacchetto. questo garantisce ai progetti pieno controllo sul tuo computer, inclusa la possibilità di installare virus. Se non ti fidi del progetto che stai pacchettizzando, disabilita questa opzione. ","username":"Username (ogni \\"#\\" viene rimpiazzato da un numero casuale)","variableColor":"Colore variabili","version":"Versione","versionHelp":"Aggiornare la versione è del tutto opzionale e non ha effetto sul funzionamento dei tuoi progetti. Il numero di versione può apparire ad esempio nella schermata info a seconda dell\'ambiente. Dovrebbe avere il formato X.Y.Z.","windowControls":"Controlli finestra","zip":"Zip (ideale Per i siti web)","zip-one-asset":"Zip, le risorse vengono combinate in un singolo file (non raccomandato)"},"p4":{"browserNotSupported":"Browser non supportato","browserNotSupportedDescription":"Ti preghiamo di aggiornare il tuo browser.","cannotAccessProject":"Impossibile accedere al token del progetto. Il progetto potrebbe non essere condiviso, non esistere, l\'ID potrebbe non essere corretto o la tua rete potrebbe bloccare turbowarp.org.","cannotAccessProjectCaching":"Se il progetto è stato condiviso da poco, potrebbero essere necessari alcuni minuti prima che questo messaggio scompaia.","close":"Chiudi","description1":"Converte i progetti Scratch in file HTML, archivi zip o programmi eseguibili per Windows, macOS e Linux.","description2":"Se cerchi un modo semplice di includere un progetto nel tuo sito web puoi essere interessato all\' {embedding}.","description2-embedding":"Inclusione","description3":"Segnala i bug, dacci un feedback o suggeriscici delle idee {onScratch} o {onGitHub}.","description3-on":"sul sito {brand}","disclaimer":"Questo sito non è affiliato a Scratch, allo Scratch Team o alla Scratch Foundation.","documentation":"Risorse aggiuntive e aiuto","donate":"Dona","error":"Errore","errorMessage":"Messaggio: {error}","importingInterface":"Caricamento opzioni in corso...","networkError":"Impossibile scaricare {url}. Assicurati di essere collegato a internet e prova a disabilitare tutte le estensioni del browser.","outdated":"Questa versione del packager è scaduta. Aggiorna la pagina e prova di nuovo.","privacy":"Politica della Privacy","refresh":"Aggiorna","reportBug":"Segnala Problema","sourceCode":"Codice Sorgente","unknownImportError":"Qualcosa è andato storto. Aggiorna e prova di nuovo."},"preview":{"loading":"Caricamento Anteprima"},"progress":{"compressingProject":"Compressione progetto","downloadingExtensions":"Scaricamento delle estensioni personalizzate","loadingAssets":"Scaricamento risorse ({complete}/{total})","loadingLargeAsset":"Scaricamento di {thing} in corso","loadingProjectData":"Scaricamento dei dati del progetto","loadingProjectMetadata":"Scaricamento dei metadati del progetto","loadingScripts":"Scaricamento degli script","packagingProject":"Pacchettizzazione progetto"},"reset":{"confirm":"Sei sicuro di voler resettare queste impostazioni? Questa operazione non potrà essere annullata.","confirmAll":"Sei sicuro di voler resettare TUTTE le impostazioni? Questa operazione non potrà essere annullata.","reset":"Resetta"},"select":{"id":"ID o URL del Progetto Scratch","invalidId":"ID del progetto non valida","invalidUrl":"URL non valido","loadProject":"Carica Progetto","loadToContinue":"Carica un progetto per continuare","noFileSelected":"Nessun file selezionato","select":"Seleziona il Progetto","selectHelp":"Seleziona il progetto che vuoi pacchettizzare copiando e incollando il link del progetto Scratch o usando uno degli altri metodi. Se usi un progetto che non hai creato tu stesso assicurati di dare il giusto credito.","unsharedProjects":"I progetti non convidisi, a causa di cambiamenti alla API di Scratch, non sono più accessibili.","unsharedProjectsMore":"Per ulteriori informazioni o soluzioni alternative vai a {link}","unsharedProjectsWorkaround":"Per ovviare al problema, puoi condividere il progetto o salvarlo sul tuo computer (File > Salva sul tuo computer) e caricare quindi il file nel packager. I file generati dal packager sono autosufficienti e non risentono delle modifiche alla API di Scratch.","url":"Altro URL"},"theme":{"dark":"Scuro","light":"Chiaro","system":"Usa il tema di sistema"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"{filename}をダウンロード({size})","useWorkaround":"リンクが機能していない場合はこちらをクリックしてください"},"fileInput":{"clear":"選択を解除","select":"選択するか、ファイルをドロップする","selected":"{file}を選ぶ"},"import":{"cancel":"キャンセル","description":"プロジェクトが大きいと、時間がかかる場合があります。","header":"プロジェクトをインポート中…"},"options":{"accentColor":"アクセントカラー(アクティブ/ホバリングコントロール、質問バー、コンテキストメニュー)","advancedOptions":"高度なオプション","advancedSummary":"これらの設定はおそらく変更不要です。(クリックで開く)","application-linux-arm32":"{type}ARM版Linuxアプリケーション(32ビット)","application-linux-arm64":"{type}ARM版Linuxアプリケーション(64ビット)","application-mac":"{type} macOSのアプリケーション","application-win-arm":"{type}ARM版Windowsアプリケーション","applicationSettings":"アプリケーションの設定","automaticallyCenter":"自動で中心を決める","autoplay":"大きな緑の旗を表示せずに自動でプロジェクトを始める","autoplayHint":"注意：多くのブラウザでは、ウェブサイトが自動で音を再生することができません。そのため、ユーザーがプロジェクトに参加するまで音が再生されない場合があります。","backgroundColor":"背景の色","bakeExtensions":"プロジェクトを実行するたびにダウンロードするのではなく、カスタム拡張機能のキャッシュされたコピーを埋め込むようにしてください","closeWhenStopped":"プロジェクトを止めたとき、ウィンドウを閉じます","cloudVariables":"クラウド変数","cloudVariables-custom":"詳細設定","cloudVariables-custom-help":"「詳細設定」では、変数ごとに異なるモードを選ぶことができます。","cloudVariables-ignore":"無視する","cloudVariables-ignore-help":"「無視する」は、クラウド変数を通常の変数のように扱います。","cloudVariables-local":"ローカルに保存する","cloudVariables-local-help":"「ローカルに保存」はそれぞれのコンピューターに変数が保存され、プロジェクトをもう一度開いたときに復元できます。ユーザーがプロジェクトの複数のウィンドウ/タブを開いている場合、変更はそのウィンドウ同士で同期されます。","cloudVariables-ws":"クラウド変数のサーバーに接続する","cloudVariables-ws-help":"「クラウド変数のサーバーに接続する」は他のユーザーと変数を同期します。","cloudVariablesHost":"クラウドのホスト","colors":"色","confirmImportUnsafe":"これらの設定は、コンピュータ上で未知の悪意のあるコードを実行するカスタムJSなどの高度な機能を使用します。作成した人を信頼している場合にのみ、このファイルをインポートしてください。これが何を意味するのかわからない場合は、これらの設定を読み込むべきではないでしょう。","controls":"コントロール","controlsHelp":"すべてのコントロールが無効の場合、コントロールバーは完全に削除されます。フルスクリーンのみを有効にすると、コントロールのヘッダーではなく、左上にボタンが配置されます。","cursorCenter":"カーソルの中心:","cursorHelp":"32x32以下の大きさの画像が最適です。それ以上の大きさの画像は、確実に動作しないことがあります。","customCSS":"カスタム CSS(何をするのか分からない場合は変更しないでください)","customCursor":"カスタムカーソル","customExtensions":"カスタム拡張機能(1行にURLを1つ)","customExtensionsSecurity":"カスタム拡張機能は、パッケージャーで常にサンドボックスなしで実行されます。拡張機能によっては、コンピュータを完全に制御できるようになり、ウイルスをインストールすることもできます。信頼できない拡張機能は使用しないでください。","customJS":"カスタム JS(何をするのか分からない場合は変更しないでください)","customUsernameWarning":"デフォルトのユーザー名を変更すると、デフォルトのクラウド変数サーバーへの接続がブロックされることがありますので、ご注意ください。デフォルトのユーザー名のみ動作が保証されています。","doNothing":"何もしない","downloadsWillAppearHere":"ダウンロードでここに表示する","dynamicResize":"ウィンドウの大きさに合わせて、サイズを動的に変更する（実験的）","editableLists":"編集できるリスト","enableCompiler":"コンパイラを有効にする","environment":"環境","escapeBehavior":"Escキーが押されたとき","exitOnly":"プロジェクトを終了するのみ","export":"設定を書き出す","foregroundColor":"主な色(読み込みの進捗バー、アイコンや文字の一部)","framerate":"フレームレート","gamepad":"USBかBluetoothのコントローラーやゲームパッドを利用できるようにする","gamepadHelp":"「ゲームパッド」のアドオンに基づいています。","highQualityPen":"ペンできれいに描画する","html":"プレーン HTML (スタンドアロンはどこでも機能します) ","icon":"ページのアイコン","implicitCloudHint":"「{cloud}」で始まる変数はチェックされているかに関わらずクラウド変数になります。","import":"設定を読み込む","infiniteClones":"クローンの制限を解除","initalWindowSize":"デフォルトウィンドウサイズ","interaction":"入力","interpolation":"補完機能","learnMore":"もっと知る","listColor":"リストの色","loadingScreen":"スクリーンをロードする","loadingScreenImage":"ロード時の画面の絵","loadingScreenText":"ロード時の画面の文字","loadingScreenTextPlaceholder":"(なし)","maxTextureDimension":"ベクターのコスチュームの最大解像度を上げて、大きなコスチュームを見えやすくします。メモリ使用量を増やし、クラッシュを引き起こすことがあります。","mode":"モード","monitors":"モニター","noCloudVariables":"このプロジェクトはクラウド変数を使っていません。","noCursor":"カーソルを表示しない","normalCursor":"通常のカーソル","otherEnvironments":"その他の環境(クリックして開く)","otherEnvironmentsHelp":"ほとんどの新しいプロジェクトは、上記にリストされているオプションを代わりに使用するべきです。","package":"パッケージ","packageName":"パッケージの名前","packageNameHelp":"パッケージの名前は、あなたのアプリケーションだけで使うユニークな名前にしてください。同じプロジェクトでは、常に同じ名前を使用してください。","packagedRuntime":"RAMを節約するために、読み込んだ後に元のデータを削除する","pageTitle":"ページの題名","playerOptions":"プレイヤーのオプション","pointerlock":"マウスカーソルをロックする","pointerlockHelp":"TurboWarpの試験的な機能です。","preserveRatio":"サイズを変えてもアスペクト比を維持する（推奨）","preview":"プレビュー","projectId":"プロジェクトID","projectIdHelp":"プロジェクトIDは、クラウド変数のサーバーに接続し、ローカルのクラウド変数を保存する際に使用します。数字以外を含めることもできます。","removeFencing":"動く範囲と大きさの制限を解除する","removeMiscLimits":"その他の制限を解除","resetAll":"全てをリセット","runtimeOptions":"ランタイムのオプション","showFlag":"緑の旗のボタンを表示する","showFullscreen":"フルスクリーンボタンを表示する","showPause":"一時停止ボタンを表示する","showProgressBar":"進捗バーを読み込む","showStop":"止めるボタンを表示する","sizeNormal":"通常にサイズで表示","sizeStretch":"フルスクリーン","specialCloudBehaviors":"HTMLifierのような挙動をする特別なクラウド変数","stage":"ステージ","stageSize":"ステージの大きさを変える","startFullscreen":"全画面で実行","startMaximized":"最大化されたウィンドウとして実行","startWindow":"ウィンドウとして実行","steamworksIgnore":"何もしない","storedWarning":"注意：このプロジェクトの設定は保存されて、設定を上書きする可能性があります。","stretch":"実際のサイズは変えずに、画面いっぱいにステージを引き伸ばす（実験的）","turbo":"ターボモード","unFullscreenOnly":"全画面表示を終了するのみ","unFullscreenOrExit":"全画面表示を終了するかプロジェクトを終了する","unsafeCloudBehaviors":"安全でない特殊な動作をするクラウド変数の追加","unsafeCloudBehaviorsWarning":"安全でないクラウドの動作は、パッケージ化されたプロジェクトが通常実行される\\"サンドボックス\\"の外で任意のコードを実行できるようにします。パッケージ化の環境によって異なりますが、これによりプロジェクトはウイルスをインストールする能力を含む、コンピューターを完全に制御できるようになります。信頼できないプロジェクトをパッケージ化する場合は、このオプションをオフにしてください。","username":"ユーザー名(#はそれぞれランダムな数に入れ替わります。)","variableColor":"変数モニターの色","version":"バージョン","versionHelp":"バージョンアップは任意であり、プロジェクトの動作に影響を与えるものではありません。環境によっては、about画面などに表示されることがあります。X.Y.Zというように書いてください。","warpTimer":"Warpタイマー","zip":"Zip(ウェブサイトに最適)","zip-one-asset":"Zip、アセットを1つのファイルにまとめる（非推奨)"},"p4":{"browserNotSupported":"ブラウザはサポートしていません","browserNotSupportedDescription":"お使いのブラウザをアップデートしてください。","cannotAccessProject":"プロジェクトのトークンにアクセスできません。これは、プロジェクトが共有されていない、存在しなかった、IDが無効であること、またはあなたのネットワークがturbowarp.orgにブロックされているを意味します。","cannotAccessProjectCaching":"プロジェクトが最近共有された場合、このメッセージが消えるまで数分かかることがあります。","close":"閉じる","description1":"Scratchプロジェクトを、HTMLファイル、ZIPファイルや、Windows、macOS、Linux用の実行形式プログラムに変換します。","description2":"プロジェクトをあなたのウェブサイトに埋め込む簡単な方法は、{embedding}をご覧ください。","description2-embedding":"埋め込みコード","description3":"不具合を報告、フィードバック、アイデアを提案する場合は{onScratch}または{onGitHub}ですることができます。","description3-on":"{brand}","disclaimer":"このウェブサイトはScratch、Scratch Team、Scratch財団と提携していません。","documentation":"その他のリソースとヘルプ","donate":"寄付する","error":"エラー","errorMessage":"メッセージ: {error}","feedback":"フィードバック","importingInterface":"オプションを読み込み中…","networkError":"{url}をダウンロードできませんでした。インターネットに接続されていることを確認し、ブラウザの拡張機能を無効にしてください。","outdated":"このバージョンのパッケージャーは古くなったようです。再読み込みして再度お試しください。","privacy":"プライバシーポリシー","refresh":"再読み込み","reportBug":"不具合を報告する","sourceCode":"ソースコード","unknownImportError":"問題が発生しました。再読み込みをして、やり直してください。"},"preview":{"loading":"プレビューをロードする"},"progress":{"compressingProject":"プロジェクトを圧縮する","downloadingExtensions":"カスタム拡張機能をダウンロード","loadingAssets":"プロジェクトをダウンロードしています({complete}/{total})","loadingLargeAsset":"{thing}をダウンロードしています","loadingProjectData":"プロジェクトのデータを読み込んでいます","loadingProjectMetadata":"プロジェクトのメタデータを読み込んでいます","loadingScripts":"スクリプトをダウンロード中","packagingProject":"プロジェクトをパッケージ化する"},"reset":{"confirm":"本当にこの設定をリセットしてもいいですか？元に戻すことができません。","confirmAll":"本当にこの設定をリセットしてもいいですか？元に戻すことができません。","reset":"リセット"},"select":{"file":"ファイル","id":"ScratchでのプロジェクトのIDかURL","invalidId":"プロジェクトIDが無効です。","invalidUrl":"URLが無効です。","loadProject":"プロジェクトを読み込む","loadToContinue":"プロジェクトを読み込んで続ける","noFileSelected":"ファイルを選んでいません","select":"プロジェクトの選択","selectHelp":"Scratchプロジェクトのリンクをコピー＆ペーストするか、その他の方法で、パッケージ化したいプロジェクトを選びます。自分が作ったものではないプロジェクトを使用する場合は、必ず制作者のクレジットを明記してください。","unsharedProjects":"Scratch API の変更に伴い、非共有プロジェクトはプロジェクト ID でアクセスできなくなりました。","unsharedProjectsMore":"詳細と回避策については、{link}を参照してください。","unsharedProjectsWorkaround":"その代わりに、プロジェクトを共有するか、コンピュータに保存して(ファイル > コンピュータに保存)、そのファイルを読み込むことができます。パッケージャーによって生成されたファイルは、完全に自己完結しており、これらの変更の影響を受けません。","url":"他のURL"},"theme":{"dark":"ダーク","light":"ライト","system":"システムのテーマを使う"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"클릭하여 파일 다운로드 : {filename} ({size})","useWorkaround":"다운로드 링크가 작동하지 않으면 여기를 클릭하세요."},"fileInput":{"clear":"선택 지우기","select":"선택하거나 끌어다 놓기","selected":"{file} 파일 선택됨 "},"import":{"cancel":"취소","description":"프로젝트 용량이 큰 경우 이 작업은 시간이 걸릴 수 있습니다.","header":"프로젝트 불러오는 중..."},"options":{"accentColor":"강조 색상 (활성/비활성 제어, 묻기 입력란, 우클릭 메뉴)","advancedOptions":"고급 설정","advancedSummary":"이 설정을 되도록 변경하지 마시기 바랍니다. (클릭해서 펼치기)","application-linux-arm32":"{type} ARM 기반 Linux 앱 (32비트)","application-linux-arm64":"{type} ARM 기반 Linux 앱 (64비트)","application-linux64":"{type} Linux 앱 (64비트)","application-mac":"{type} macOS 앱","application-win-arm":"{type} ARM 기반 Windows 앱","application-win32":"{type} Windows 앱 (32비트)","application-win64":"{type} Windows 앱 (64비트)","applicationSettings":"앱 설정","automaticallyCenter":"자동으로 중심 지정","autoplay":"중앙에 깃발 버튼을 보여주는 대신 자동으로 프로젝트 시작하기","autoplayHint":"알림 : 브라우저에서 이 웹사이트에서 소리 자동 재생을 허용하지 않을 수 있습니다.\\n따라서 사용자가 프로젝트와 상호작용하기 전까지 소리가 재생되지 않을 수 있습니다.","backgroundColor":"배경색","bakeExtensions":"프로젝트가 실행될 때마다 확장 기능을 다운로드하는 대신, 저장된 사용자 지정 확장 기능의 사본을 프로젝트에 포함시키는 방법을 시도합니다.","closeWhenStopped":"프로젝트가 멈췄을 때 창 닫기","cloudVariables":"클라우드 변수","cloudVariables-custom":"고급 설정","cloudVariables-custom-help":"\\"고급 설정\\"은 각 변수마다 다른 설정을 사용합니다. 예를 들어, 몇몇 변수는 서버와 동기화되도록 할 수 있지만 다른 변수는 로컬에 저장되도록 할 수 있습니다.","cloudVariables-ignore":"무시하기","cloudVariables-ignore-help":"\\"무시하기\\" 기능은 클라우드 변수를 일반 변수처럼 사용합니다.","cloudVariables-local":"로컬 저장소에 저장하기","cloudVariables-local-help":"\\"로컬 저장소에 저장하기\\" 기능은 사용자의 컴퓨터에 변수값을 저장한 후 프로젝트가 다시 열렸을 때 복구합니다. 만약 같은 프로젝트 창이 여러 개 열려있을 경우, 변경사항은 열려있는 프로젝트 창 사이에서 동기화됩니다.","cloudVariables-ws":"클라우드 변수 서버에 연결하기","cloudVariables-ws-help":"\\"클라우드 변수 서버에 연결하기\\" 기능은 클라우드 서버에 연결하여 다른 사용자들과 변수값이 동기화되도록 해줍니다.","cloudVariablesHost":"클라우드 호스트","colors":"색","confirmImportUnsafe":"이 설정은 사용자 지정 JS와 같은 고급 기능을 사용합니다. 사용자 지정 JS는 알 수 없거나 컴퓨터를 위협할 수 있는 코드를 실행할 수도 있으므로 제작자를 신뢰할 수 있는 경우에만 이 설정을 사용하세요. 만약 이 설명이 정확히 무엇을 뜻하는지 모르는 경우, 이 설정을 불러오지 않는 것을 권장합니다.","controls":"제어","controlsHelp":"모든 제어 버튼이 비활성화되면 컨트롤 바는 완전히 제거됩니다. 풀스크린 버튼만 활성화되어 있을 경우, 컨트롤 바는 제거되고 풀스크린 버튼은 좌측 상단으로 이동하게 됩니다.","cursorCenter":"커서의 중심 : ","cursorHelp":"32x32 크기의 사진이 가장 적합합니다. 더 큰 사진은 안정적이지 않을 수 있습니다.","customCSS":"사용자 지정 CSS (이 기능에 대해 모르는 경우 변경하지 마세요!)","customCursor":"사용자 지정 커서","customExtensions":"사용자 지정 확장 기능 (한 줄당 한 URL)","customExtensionsSecurity":"사용자 지정 확장 기능은 패키징 프로그램에서 항상 샌드박스 처리되지 않은 상태로 실행됩니다. 이는 사용자의 환경에 따라 확장 기능이 사용자의 컴퓨터에 대한 통제 권한을 부여받을 수 있으며, 바이러스를 설치할 수도 있음을 뜻합니다. 따라서 신뢰할 수 없는 확장 기능은 사용해서는 안 됩니다.","customJS":"사용자 지정 자바스크립트 파일 (무엇을 하고 있는지 명확히 아는 것이 아니라면 변경하지 마세요!)","customUsernameWarning":"기본값으로 지정된 사용자 이름을 변경하면 기본 클라우드 변수 서버와 통신이 불가능할 수 있으므로 주의해야 합니다. 기본값으로 지정된 사용자 이름은 기본 클라우드 변수 서버와 반드시 통신이 가능합니다.","defaultControls":"기본","doNothing":"아무것도 하지 않기","downloadsWillAppearHere":"다운로드는 여기에 표시됩니다","dynamicResize":"무대 크기를 창 크기에 맞춰 재설정하기 (실험 기능)","editableLists":"리스트를 직접 수정 가능하도록 하기","enableCompiler":"컴파일러 활성화","environment":"환경","escapeBehavior":"Esc 키가 입력되었을 때","exitOnly":"실행 끝내기","export":"설정 내보내기","foregroundColor":"주요색 (진행 표시줄, 일부 아이콘, 일부 글자)","framerate":"프레임률","gamepad":"USB 혹은 블루투스 게임패드/컨트롤러 지원","gamepadHelp":"\\"게임패드 지원\\" 애드온에 기반함.","highQualityPen":"고품질 펜 활성화","html":"일반 HTML (자립적, 어디에서나 작동)","icon":"페이지 아이콘","implicitCloudHint":"알림 : \\"{cloud}\\" 아이콘으로 시작하는 모든 변수는 무조건 클라우드 변수로 변환됩니다.","import":"설정 불러오기","infiniteClones":"무제한 복제본 활성화","initalWindowSize":"시작할 때 창 크기","interaction":"입력","interpolation":"보간법 활성화","learnMore":"추가 정보","listColor":"리스트 색상","loadingScreen":"로딩 스크린","loadingScreenImage":"로딩 스크린에 표시할 이미지","loadingScreenText":"로딩 스크린에 표시할 텍스트","loadingScreenTextPlaceholder":"(텍스트 입력)","maxTextureDimension":"벡터 이미지의 최대 해상도를 높여 커다란 이미지를 더 보기 좋게 만듭니다. 메모리 사용량이 증가하거나 충돌이 발생할 수 있습니다.","mode":"모드","monitors":"값 표시기","noCloudVariables":"이 프로젝트는 클라우드 변수를 포함하고 있지 않습니다.","noControls":"숨겨짐 (테두리없음)","noCursor":"커서 없음","normalCursor":"일반 커서","otherEnvironments":"기타 환경 (클릭해서 펼치기)","otherEnvironmentsHelp":"대부분의 새 프로젝트는 위에 나열된 옵션을 사용하는 것이 권장됩니다.","package":"패키지","packageName":"패키지 이름","packageNameHelp":"패키지 이름은 당신의 앱만이 가지는 고유한 이름이여야 합니다. 같은 프로젝트는 항상 같은 패키지 이름을 가져야 합니다.","packagedRuntime":"RAM 공간을 절약하기 위해 로딩 이후 로우 에셋 데이터 제거","pageTitle":"페이지 타이틀","playerOptions":"플레이어 설정","pointerlock":"마우스 커서 잠금","pointerlockHelp":"TurboWarp 실험 기능에 기반함.","preserveRatio":"창 크기가 변경되었을 때 화면 비율 고정하기 (추천)","preview":"미리보기","projectId":"프로젝트 아이디","projectIdHelp":"프로젝트 아이디는 클라우드 변수 서버와 연결할 때 그리고 로컬 클라우드 변수를 저장할 때 사용됩니다. 프로젝트 아이디는 숫자뿐만 아니라 문자열로도 지정 가능합니다.","removeFencing":"무대 밖 동작 활성화","removeMiscLimits":"기타 제한 비활성화","resetAll":"모든 설정 초기화","runtimeOptions":"실행 설정","showFlag":"제어에 시작하기 버튼 표시하기","showFullscreen":"제어에 전체 화면 버튼 표시하기","showPause":"제어에 일시정지 버튼 표시하기","showProgressBar":"진행 표시줄 보이기","showStop":"제어에 멈추기 버튼 표시하기","sizeNormal":"일반 크기로 보이기","sizeStretch":"화면 채우기","specialCloudBehaviors":"HTMLifier와 같은 특별한 클라우드 변수 행동","stage":"무대","stageSize":"사용자 지정 무대 크기","startFullscreen":"전체 화면으로 시작하기","startMaximized":"최대화된 창으로 시작하기","startWindow":"창으로 시작하기","steamworksAppId":"앱 ID","steamworksAvailable":"이 프로젝트는 Steamworks 확장 기능을 사용합니다. Steamworks 게임의 앱 ID를 얻을 수 있으며, 혹은 Steamworks 데모 게임을 테스트하려면 {n}을(를) 사용해볼 수도 있습니다.","steamworksDocumentation":"확장 기능의 문서에서 더 알아보세요.","steamworksError":"오류를 표시하고 실행 끝내기","steamworksExtension":"Steamworks 확장 기능","steamworksIgnore":"아무것도 하지 않기","steamworksMacWarning":"주의: Steam에 출시된 macOS 게임들은 Apple에서 정식 인증을 받아야 합니다. 그러나 패키저는 아직 이를 지원하지 않습니다. Mac 기기 내에서 본인의 게임을 테스트하는 것에는 문제 없지만, 아직 macOS 전용으로 출시할 수 없습니다.","steamworksOnError":"Steamworks를 초기화하는 도중 오류가 발생할 때","steamworksUnavailable":"Steamworks 확장 기능을 활성화하려면, 반드시 다음의 Electron 환경 중 하나를 사용해야 합니다.","steamworksWarning":"주의사항을 표시하고 계속하기","storedWarning":"알림 : 이 프로젝트는 현재 설정을 덮어쓰기 할 수 있는 몇몇 설정을 저장하고 있습니다.","stretch":"실제 크기를 바꾸지 않고 무대를 늘려 화면 채우기 (실험 기능)","turbo":"터보 모드","unFullscreenOnly":"전체 화면 나가기","unFullscreenOrExit":"전체 화면 나가기 또는 실행 끝내기","unsafeCloudBehaviors":"안전하지 않은 특수 클라우드 변수 기능","unsafeCloudBehaviorsWarning":"안전하지 않은 클라우드 변수 기능은 패키징된 프로젝트가 일반적으로 프로젝트가 실행되는 \\"샌드박스\\" 외부에서 임의의 코드를 실행할 수 있도록 허용합니다. 당신이 패키징하는 환경에 따라서, 이 기능은 바이러스를 설치하는 것을 포함한 컴퓨터에 대한 모든 제어 권한을 부여합니다. 따라서 패키징 하려는 프로젝트를 확실히 신뢰하지 않는다면 이 기능을 꺼주세요.","username":"사용자 이름 (각각의 \\"#\\"은 랜덤한 숫자로 대체됩니다)","variableColor":"변수 모니터 색상","version":"버전","versionHelp":"앱의 버전 업데이트는 선택 사항이며 프로젝트의 기능에 영향을 미치지 않습니다. 앱의 버전은 사용자의 환경에 따라 프로그램 정보 화면에 나타날 수도 있습니다. X.Y.Z 형식으로 니타납니다.","warpTimer":"워프 타이머","windowControls":"창 제어","zip":"Zip (웹사이드에 적합)","zip-one-asset":"Zip, 한 파일에 에셋 묶기 (권장되지 않음)"},"p4":{"browserNotSupported":"해당 브라우저는 지원되지 않음","browserNotSupportedDescription":"브라우저를 업데이트 해 주세요.","cannotAccessProject":"프로젝트 토큰에 액세스할 수 없습니다. 이 현상은 프로젝트가 공유되지 않았거나, 존재한 적이 없거나, ID가 잘못되었거나, 네트워크가 turbowarp.org를 차단한 경우 발생할 수 있습니다.","cannotAccessProjectCaching":"최근에 공유된 프로젝트의 경우, 몇 분간 이 메시지가 계속 나타날 수 있습니다.","close":"닫기","description1":"Scratch 프로젝트를 HTML, ZIP 아카이브 파일 또는 Windows, macOS, Linux에서 실행 가능한 프로그램으로 변환합니다.","description2":"만약 웹사이트에 프로젝트를 임베딩 하는 쉬운 방법을 원한다면 {embedding}이 도움이 될 수 있습니다.","description2-embedding":"임베딩","description3":"오류를 발견했거나, 제안 사항이 발생한다면 {onScratch} 또는 {onGitHub} 으로 연락해 주세요.","description3-on":"{brand}","disclaimer":"해당 사이트는 Scratch, 스크래치 팀 또는 스크래치 재단과 제휴를 맺지 않았습니다.","documentation":"추가적인 리소스와 도움말","donate":"기부하기","error":"오류","errorMessage":"메시지: {error}","feedback":"문의하기","importingInterface":"옵션을 불러오는 중...","networkError":"{url}에서 다운로드할 수 없습니다. 인터넷에 연결되었는지 확인 후 인터넷 확장 프로그램을 비활성화 해보세요.","outdated":"이 버전의 패키저는 구버전으로 확인됩니다. 새로고침 후 다시 시도해 주세요.","privacy":"개인정보 보호 정책","refresh":"새로고침","reportBug":"오류 제보하기","sourceCode":"소스코드","unknownImportError":"오류가 발생했습니다. 새로고침 후에 다시 시도해 주세요."},"preview":{"loading":"미리보기 불러오는 중"},"progress":{"compressingProject":"프로젝트 압축하는 중","downloadingExtensions":"사용자 지정 확장 기능 다운로드 중","loadingAssets":"에셋 다운로드 중 ({complete}/{total})","loadingLargeAsset":"{thing} 다운로드 중","loadingProjectData":"프로젝트 데이터 다운로드 중","loadingProjectMetadata":"프로젝트 메타데이터 다운로드 중","loadingScripts":"스크립트 다운로드 중","packagingProject":"프로젝트 패키징하는 중"},"reset":{"confirm":"정말로 설정을 초기화하시겠습니까? 이 작업은 되돌릴 수 없습니다.","confirmAll":"정말로 모든 설정을 초기화 하시겠습니까? 이 작업은 되돌릴 수 없습니다.","reset":"초기화"},"select":{"file":"파일","id":"스크래치 프로젝트 ID 혹은 URL","invalidId":"잘못된 프로젝트 ID","invalidUrl":"잘못된 URL","loadProject":"프로젝트 불러오기","loadToContinue":"프로젝트를 불러오고 계속하기","noFileSelected":"파일이 선택되지 않음","select":"프로젝트 선택하기","selectHelp":"스크래치 프로젝트의 링크를 복사하여 붙여넣거나 다른 모드 중 하나를 사용하여 패키징할 프로젝트를 선택하세요. 만들지 않은 프로젝트를 사용하는 경우에도, 제작자에게 출처를 남겨야 한다는 사실을 잊지 마세요.","unsharedProjects":"Scratch API의 변경으로 더 이상 공유되지 않은 프로젝트를 프로젝트 ID를 통해 액세스 할 수 없습니다.","unsharedProjectsMore":"더 많은 정보나 해결 방법을 원하는 경우, 다음 링크가 도움이 될 수 있습니다 : {link}","unsharedProjectsWorkaround":"대신에, 프로젝트를 공유하거나 프로젝트 파일을 컴퓨터에 저장(파일 -> 컴퓨터에 저장)한 다음 패키징 프로그램에서 파일을 불러올 수 있습니다. 패키징 프로그램에 의해 생성된 파일은 완전히 독림적이며, 변경 사항의 영향을 받지 않습니다.","url":"기타 URL"},"theme":{"dark":"다크","light":"라이트","system":"시스템 테마 사용하기"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"Atsisiųsti {filename} ({size})","useWorkaround":"Spustelėkite čia jei atsisiuntimo nuoroda neveikia"},"fileInput":{"clear":"Išvalyti pasirinkimus","select":"Pasirinkite arba numeskite failą","selected":"Pasirinktas {file}"},"import":{"cancel":"Atšaukti","description":"Tai gali užtrukti jei projektas didelis.","header":"Importuojamas projektas..."},"options":{"accentColor":"Akcento spalva (matomos/paslėptos kontrolės, klausimo užklausa, konteksto meniu)","advancedOptions":"Išplėstiniai nustatymai","advancedSummary":"Jūs tikriausiai nenorite keisti šių dalykų. (Spustėlkite kad atidarytumėte)","application-mac":"{type} macOS programa","applicationSettings":"Programos nustatymai","automaticallyCenter":"Automatiškai centruoti","autoplay":"Pradėti projektą automatiškai vietoje didėlės žalios vėliavėlės rodymo","autoplayHint":"Pastaba: Daugelis naršyklių neleidžia svetainėms automatiškai atkurti garso, todėl garsai gali būti atkuriami tik tada, kai naudotojas pradeda naudotis projektu.","backgroundColor":"Fono spalva","closeWhenStopped":"Uždaryti langą kai projektas sustoja","cloudVariables":"Debesies kintamieji","cloudVariables-custom":"Išplėstiniai","cloudVariables-custom-help":"\\"Įšplėstiniai\\" kiekvienam kintamajam naudojamas skirtingas režimas, todėl kai kurie kintamieji gali būti sinchronizuojami su kitais naudotojais, o kiti, pavyzdžiui, gali būti saugomi vietoje.","cloudVariables-ignore":"Ignoruoti","cloudVariables-ignore-help":"\\"Ignoruoti\\" Pavers debesies kintamuosius į įprastus kintamuosius.","cloudVariables-local":"Įkelti į vietinę saugyklą","cloudVariables-local-help":"Saugoti vietinėje saugykloje išsaugo kintamuosius kiekvieno naudotojo kompiuteryje ir atkuria juos atidarius projektą. Jei naudotojas yra atidaręs kelis projekto langus / skirtukus, pakeitimai bus sinchronizuojami tarp tų langų.","cloudVariables-ws":"Prisijungti prie debesies kintamųjų serverio","cloudVariables-ws-help":"\\"Prisijungti prie debesies kintamųjų serverio\\" sinchronizuoja kintamuosius su kitais naudotojais.","cloudVariablesHost":"Debesies administratorius","colors":"Spalvos","controls":"Kontrolės","controlsHelp":"Jei visi valdikliai išjungti, valdymo juosta visiškai pašalinama. Jei įjungtas tik pilnas ekranas, jis visada bus viršutiniame kairiajame kampe, o ne valdiklių antraštėje.","cursorCenter":"Žymeklio centras:","cursorHelp":"Nuotraukos iki 32x32 veikia geriausiai. Didesnės nuotraukos gali taip gerai neveikti.","customCSS":"Pasirinktinis CSS (nekeiskite jei nežinote ką darote!)","customCursor":"pasirinktinis žymeklis","customExtensions":"Pasirinktiniai papildiniai (vienas URL per eilutę)","customJS":"Pasirinktinis JS (nekeiskite jei nežinote ką darote!)","customUsernameWarning":"Būkite atsargūs keisdami numatytąjį naudotojo vardą, nes dėl to gali būti užblokuoti prisijungimai prie numatytojo debesies kintamojo serverio. Garantuojama, kad veiks tik numatytasis naudotojo vardas.","downloadsWillAppearHere":"Atsisiuntimai atsiras čia","dynamicResize":"Dinamiškai keisti dydį, kad jis atitiktų lango dydį (eksperimentinis)","editableLists":"Redaguojami sąrašai","enableCompiler":"Įjungti kompiliatorių","environment":"Aplinka","foregroundColor":"Pirmojo plano spalva (progreso juosta, kai kurios piktogramos, kai kurie tekstai)","framerate":"Kadrų per sekundę greitis","gamepad":"USB arba Bluetooth žaidimų pultelių/valdiklių palaikymas.","gamepadHelp":"Paremta \\"Gamepad support\\" įskiepiu.","highQualityPen":"Aukštos kokybės pieštukas","html":"Paprastas HTML (atskiras, veikia bet kur)","icon":"Puslapio įkona","implicitCloudHint":"Patarimas: Bet kuris kintamasis, kurio pavadinimas prasideda \\"{cloud}\\", bus paverstas debesies kintamuoju, nepaisant to, ar jis buvo pažymėtas kaip debesies kintamasis.","infiniteClones":"Begaliniai Klonai","interaction":"Įvestis","interpolation":"Interpoliacija","learnMore":"Sužinokite daugiau","loadingScreen":"Užkrovimo ekranas","loadingScreenImage":"Užkrovimo ekrano nuotrauka","loadingScreenText":"Užkrovimo ekrano tekstas","loadingScreenTextPlaceholder":"(Niekas)","mode":"Režimas","monitors":"Monitoriai","noCloudVariables":"Šis projektas neturi debesies kintamųjų.","noCursor":"Jokio žymeklio","normalCursor":"Įprastas žymeklis","otherEnvironments":"Kitos aplinkos (Spustėlkite kad atidarytumėte)","otherEnvironmentsHelp":"Daugiausia naujų projektų turėtų naudoti pasirinktus nustatymus viršuje.","package":"Pakuotė","packageName":"Pakuotės vardas","packageNameHelp":"Pakuotės vardas turėtų būti originalus vardas naudojamas tik jūsų programos. Tas pats projektas turėtų turėti tą patį pakuotės vardą.","pageTitle":"Puslapio pavadinimas","playerOptions":"Paleidėjo nustatymai","pointerlock":"Užrakinti pėlės žymeklį","pointerlockHelp":"Paremta TurboWarp eksperimentu.","preserveRatio":"Išlaikyti kraštinių santykį keičiant dydį (rekomenduojama)","preview":"Peržiūrėti","projectId":"Projekto ID","projectIdHelp":"Projekto ID naudojamas jungiantis prie debesies kintamųjų serverio ir saugant vietinius debesies kintamuosius. Jame gali būti ne tik skaičiai.","removeFencing":"Panaikinti scenos aptvarus","removeMiscLimits":"Pašalinti įvairius limitus.","runtimeOptions":"Paleidimo laiko parinktys","showFlag":"Rodyti žalios vėliavėlės mygtuką valdymo skiltyje","showFullscreen":"Rodyti viso ekrano mygtuką valdikliuose","showPause":"Rodyti pauzės mygtuko mygtuką valdymo srįtyje","showProgressBar":"Rodyti progreso juostą","showStop":"Rodyti stop ženklo mygtuką valdymo srįtyje","sizeNormal":"Rodyti įprastu dydžiu","sizeStretch":"Užpildyti ekraną","specialCloudBehaviors":"Specialūs debesies kintamųjų elgsena kaip per HTMLifier","stage":"Scena","stageSize":"Pasirinktinis Scenos dydis","startFullscreen":"Pradėti pilno ekrano režimu","startMaximized":"Pradėti kaip maksimaliai padidintas langas","startWindow":"Pradėti kaip langas","storedWarning":"Pastaba: šiame projekte yra išsaugoti nustatymai, kurie gali pakeisti šiuos nustatymus.","stretch":"Išplėskite sceną, kad užpildytų ekraną nekeisdami tikrojo dydžio (eksperimentinis)","turbo":"Turbo Režimas","unsafeCloudBehaviors":"Papildomos nesaugios specialios debesies elgsenos","unsafeCloudBehaviorsWarning":"Nesaugus elgesys debesyje leidžia supakuotam projektui vykdyti savavališką kodą už \\"sandbox\\", kurioje paprastai vykdomi projektai, ribų. Priklausomai nuo aplinkos, kuriai pakuojate, tai suteikia projektams visišką jūsų kompiuterio kontrolę, įskaitant galimybę įdiegti virusus. Jei nepasitikite projektu, kurį pakuojate, išjunkite šią parinktį.","username":"Naudotojo vardas (kiekvienas \\"#\\" bus pakeistas su atsitiktiniu skaičiumi)","variableColor":"Kintamųjų spa;va","warpTimer":"Nukreipimo laikmatis","zip":"Zip (tobula svetainėms)","zip-one-asset":"Zip, sujungti personažų, veikėjų failus į vieną failą (nerekomenduotina)"},"p4":{"browserNotSupported":"Nepalaikoma naršyklė","browserNotSupportedDescription":"Atnaujinkite jūsų naršyklę","close":"Uždaryti","description1":"Konvertuoja Scratch Projektus į HTML failus, zip archyvus, vykdomasias programas skirtas Windows, macOS, ir Linux.","description2":"Jei ieškote lengvo projekto įterpimo į jūsų svetainę, tikriausiai jums bus įdomus {embedding}.","description2-embedding":"Įterpimas","description3":"Praneškite apie klaidas, duokite atsiliepimus, ir siūlykite įdėjų per {onScratch} arba {onGitHub}.","description3-on":"Per {brand}","disclaimer":"Ši svetainė nėra susieta su Scratch, the Scratch Team ar su the Scratch Foundation.","documentation":"Papildomi ištekliai bei pagalba","donate":"Paaukoti","error":"Klaida","errorMessage":"Žinutė: {error}","feedback":"Atsiliepimas","importingInterface":"Užkraunami pasirinkimai...","networkError":"Nepavyksta atsisiųsti {url}. Įsitikinkite kad jūs esate prisijungę prie interneto ir pabandykite išjungti visus naršyklės papildinius.","outdated":"Atrodo kad ši pakuotojo versija pasenusi. Prašau perkrauti ir bandyti vėl.","privacy":"Privatumo politika","refresh":"Perkrauti","reportBug":"Pranešti apie klaidą","sourceCode":"Šaltinio kodas","unknownImportError":"Kažkas atsitiko. Perkraukite svetainę ir bandykite vėl."},"preview":{"loading":"Užkraunama peržiūra"},"progress":{"compressingProject":"Projektas suspaudžiamas","loadingAssets":"Atsisiunčiami duomenys ({complete}/{total})","loadingLargeAsset":"Atsisiunčiamas {thing}","loadingProjectData":"Atsisiunčiami projekto duomenys","loadingProjectMetadata":"Atsiunčiami projekto metaduomenys","loadingScripts":"Atsiunčiami kodai","packagingProject":"Pakuojamas projektas"},"reset":{"confirm":"Ar tikrai norite iš naujo nustatyti šiuos nustatymus? To negalima atšaukti.","confirmAll":"Ar tikrai norite iš naujo nustatyti VISUS nustatymus? To negalima atšaukti.","reset":"nustatyti iš naujo"},"select":{"file":"Failas","id":"Scratch Projekto ID arba URL","invalidId":"Neteisingas projekto ID","invalidUrl":"Neteisingas URL","loadProject":"Užkrauti projektą","loadToContinue":"Įkelkite projekte kad tęstumėte","noFileSelected":"Nėra pasirinkto failo","select":"Pasirinkti Projektą","selectHelp":"Pasirinkite projektą, kurį norite supakuoti, nukopijuodami ir įklijuodami Scratch projekto nuorodą arba naudodami vieną iš kitų režimų. Jei naudojate ne savo sukurtą projektą, būtinai padėkokite jo kūrėjui.","unsharedProjects":"Dėl Scratch API pakeitimų nesidalijami projektai nebėra pasiekiami naudojant jų projekto ID.","unsharedProjectsWorkaround":"Vietoj to galite bendrinti projektą arba įrašyti projektą į kompiuterį (Failas > Įrašyti į kompiuterį) ir įkelti failą į pakuotoją. Pakuotojo sukurti failai yra visiškai savarankiški ir šie pakeitimai jiems įtakos neturi.","url":"Kitas URL"},"theme":{"dark":"Tamsus","light":"Šviesus","system":"Naudoti sistemos foną"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"Last ned {filename} ({size})","useWorkaround":"Klikk her hvis nedlastingslenken ikke fungerer."},"fileInput":{"clear":"Fjern valg","select":"Velg eller slipp fil","selected":"Valgt {file}"},"import":{"cancel":"Avbryt","description":"Dette kan ta litt tid hvis prosjektet er stort.","header":"Importerer prosjektet..."},"options":{"accentColor":"Accentfarge (aktive/hoverede kontroller, spørreprompt, kontekstmenyer)","advancedOptions":"Avanserte alternativer","advancedSummary":"Du vil sannsynligvis ikke endre disse. (Klikk for å åpne)","application-linux-arm32":"{type} Linux-applikasjon for ARM (32-bit)","application-linux-arm64":"{type} Linux-applikasjon for ARM (64-bit)","application-mac":"{type} macOS-applikasjon","application-win-arm":"{type} Windows-applikasjon for ARM","applicationSettings":"Applikasjonsinnstillinger","automaticallyCenter":"Automatisk sentrering","autoplay":"Start prosjektet automatisk i stedet for å vise en stor grønn flagg","autoplayHint":"Merk: Mange nettlesere vil ikke tillate at nettsider automatisk spiller av lyd, så lyder kan ikke spilles av før brukeren interagerer med prosjektet.","backgroundColor":"Bakgrunnsfarge","bakeExtensions":"Prøv å innlemme en mellomlagret kopi av egendefinerte utvidelser i stedet for å laste dem ned hver gang prosjektet kjøres.","closeWhenStopped":"Lukk vinduet når prosjektet stopper.","cloudVariables":"Skyvariabler","cloudVariables-custom":"Avansert","cloudVariables-custom-help":"\\"Avansert\\" bruker en annen modus for hver variabel, slik at noen variabler kan synkroniseres med andre brukere, men andre kan lagres lokalt, for eksempel.","cloudVariables-ignore":"Ignorer","cloudVariables-ignore-help":"\\"Ignore\\" behandler skyvariabler som normale variabler.","cloudVariables-local":"Lagre i lokal lagring","cloudVariables-local-help":"\\"Lagre i lokal lagring\\" lagrer variabler på hver brukers datamaskin og gjenoppretter dem når prosjektet åpnes. Hvis en bruker har flere vinduer/faner av prosjektet åpne, vil endringer synkroniseres mellom disse vinduene.","cloudVariables-ws":"Koble til skyvariabelserver","cloudVariables-ws-help":"\\"Koble til skyvariabelserveren\\" synkroniserer variabler med andre brukere.","cloudVariablesHost":"Skyvert","colors":"Farger","confirmImportUnsafe":"Disse innstillingene bruker avanserte funksjoner som tilpasset JS som kjører ukjent og muligens skadelig kode på datamaskinen din. Importer bare denne filen hvis du stoler på personen som opprettet den. Hvis du er usikker på hva dette betyr, bør du sannsynligvis ikke importere disse innstillingene.","controls":"Kontroller","controlsHelp":"Hvis alle kontroller er deaktivert, blir kontrollfeltet fjernet helt. Hvis bare fullskjerm er aktivert, vil det alltid være plassert i øverste venstre hjørne, ikke i kontrollhodet.","cursorCenter":"Markør senter:","cursorHelp":"Bilder opptil 32x32 fungerer best. Større bilder kan være upålitelige.","customCSS":"Custom CSS (Ikke endre hvis du ikke vet hva du gjør!)","customCursor":"Tilpasset markør","customExtensions":"Tilpassede utvidelser (én URL per linje)","customExtensionsSecurity":"Tilpassede utvidelser kjøres alltid usandboxed i pakkeren. Avhengig av miljøet du pakker for, gir dette utvidelser full kontroll over datamaskinen din, inkludert evnen til å installere virus. Ikke bruk utvidelser du ikke stoler på.","customJS":"Custom JS (Ikke endre hvis du ikke vet hva du gjør!)","customUsernameWarning":"Vær forsiktig når du endrer standardbrukernavnet, da det kan føre til at tilkoblinger til standard skyvariabelserver blir blokkert. Bare standardbrukernavnet er garantert å fungere.","defaultControls":"Vanlig","doNothing":"Ikke gjør noe","downloadsWillAppearHere":"Nedlastinger vil vises her","dynamicResize":"Dynamisk endre størrelsen for å tilpasse vindusstørrelsen (eksperimentell)","editableLists":"Redigerbare lister","enableCompiler":"Aktiver kompilatoren","environment":"Miljø","escapeBehavior":"Når escape-tasten trykkes","exitOnly":"Kun avslutt","export":"Eksport innstillinger","foregroundColor":"Forgrunnsfarge (fremdriftslinje, noen ikoner, noe tekst)","framerate":"Bildetakt","gamepad":"Støtt USB- eller Bluetooth-spillkontroller","gamepadHelp":"Basert på tillegget \\"Gamepad-støtte\\".","highQualityPen":"Høy kvalitet penn ","html":"Vanlig HTML (frittstående, fungerer hvor som helst)","icon":"Sideikon","implicitCloudHint":"Tips: Enhver variabel med et navn som starter med \\"{cloud}\\" vil bli konvertert til en skyvariabel uavhengig av om den ble merket som en.","import":"Import innstillinger","infiniteClones":"Uendelige kloner","initalWindowSize":"Initial vindustørrelse","interpolation":"Interpolasjon","learnMore":"Lær mer","listColor":"Liste farge","loadingScreen":"Laste skjerm","loadingScreenImage":"Lasteskjerm skjermbilde","loadingScreenText":"Lasteskjerm skjermbildetekst","loadingScreenTextPlaceholder":"(Ingenting)","maxTextureDimension":"Øk maksimal vektor kostymeoppløsning for å få store kostymer til å se bedre ut. Kan øke minnebruk og forårsake krasj.","mode":"Modus","monitors":"Skjermer","noCloudVariables":"Dette prosjektet inneholder ikke skyvariabler.","noControls":"Skjult (frameless)","noCursor":"Ingen markør","normalCursor":"Normal markør","otherEnvironments":"Andre miljøer (Klikk for å åpne)","otherEnvironmentsHelp":"De fleste nye prosjekter bør heller bruke alternativene som er oppført ovenfor.","package":"Pakke","packageName":"Pakkenavn","packageNameHelp":"Pakkenavnet skal være et unikt navn som bare brukes av applikasjonen din. Det samme prosjektet skal alltid ha det samme pakkenavnet.","packagedRuntime":"Fjern rå eiendomsdata etter lasting for å spare RAM","pageTitle":"Side tittel","playerOptions":"Spilleralternativer","pointerlock":"Lås muspekeren","pointerlockHelp":"Basert på et TurboWarp-eksperiment.","preserveRatio":"Behold aspektforholdet når det endres i størrelse (anbefalt)","preview":"Forhåndsvisning","projectId":"Prosjekt-ID","projectIdHelp":"Prosjekt-ID brukes når man kobler til en skyvariabelserver og lagrer lokale skyvariabler. Den kan inneholde mer enn bare tall.","removeFencing":"Fjern gjerde","removeMiscLimits":"Fjern diverse begrensninger","resetAll":"Tilbakestill alle innstillinger","runtimeOptions":"Kjøretidsalternativer","showFlag":"Vis grønn flaggknapp i kontroller","showFullscreen":"Vis fullskjermknappen i kontrollene","showPause":"Vis pauseknappen i kontrollene","showProgressBar":"Vis fremdriftslinjen","showStop":"Vis stoppskiltknappen i kontrollene","sizeNormal":"Vis på normal størrelse","sizeStretch":"Fyll skjermen","specialCloudBehaviors":"Spesielle skyvariabeloppføringer som HTMLifier","stage":"Scene","stageSize":"Bytt scene størrelse","startFullscreen":"Start i fullskjerm","startMaximized":"Start som maksimert vindu","startWindow":"Start som vindu","steamworksIgnore":"Ikke gjør noe","storedWarning":"Merk: Dette prosjektet har innstillinger lagret i det, som kan overstyre disse innstillingene.","stretch":"Strekke scenen for å fylle skjermen uten å endre faktisk størrelse (eksperimentell)","turbo":"Turbo Modus","unFullscreenOnly":"Forlat kun fullskjerm","unFullscreenOrExit":"Avslutt fullskjerm eller avslutt","unsafeCloudBehaviors":"Ytterligere usikre spesielle skyatferder","unsafeCloudBehaviorsWarning":"Usikre skyatferder tillater at det pakket prosjektet kan utføre vilkårlig kode utenfor \\"sandkassen\\" som prosjekter vanligvis utføres i. Avhengig av miljøet du pakker for, gir dette prosjekter full kontroll over datamaskinen din, inkludert evnen til å installere virus. Hvis du ikke stoler på prosjektet du pakker, vennligst slå av denne muligheten.","username":"Brukernavn (hver \\"#\\" blir erstattet med et tilfeldig tall)","variableColor":"Variabel farge","version":"Versjon","versionHelp":"Oppdatering av versjonen er helt valgfritt og påvirker ikke prosjektets oppførsel. Det kan vises på steder som \\"om\\" skjermer, avhengig av miljøet. Skal formateres som X.Y.Z.","windowControls":"Vinduskontroller","zip":"Zip (ideell for nettsteder)","zip-one-asset":"Zip, kombiner ressurser til én fil (ikke anbefalt)"},"p4":{"browserNotSupported":"Nettleseren støttes ikke","browserNotSupportedDescription":"Vennligst oppdater nettleseren din.","cannotAccessProject":"Kan ikke få tilgang til prosjektetoken. Dette betyr vanligvis at prosjektet ikke er delt, aldri har eksistert, ID-en er ugyldig, eller nettverket ditt blokkerer turbowarp.org.","cannotAccessProjectCaching":"Hvis prosjektet ble delt nylig, kan det ta noen minutter før denne meldingen forsvinner.","close":"Lukk","description1":"Konverterer Scratch-prosjekter til HTML-filer, zip-arkiver eller kjørbare programmer for Windows, macOS og Linux.","description2":"Hvis du bare vil ha en enkel måte å integrere et prosjekt i nettsiden din på, kan du være interessert i {embedding}.","description2-embedding":"Innebygging","description3":"Rapporter feil, gi tilbakemelding og kom med forslag {onScratch} eller {onGitHub}.","description3-on":"på {brand}","disclaimer":"Dette nettstedet er ikke tilknyttet Scratch, Scratch Team eller Scratch Foundation.","documentation":"Tilleggsressurser og hjelp","donate":"Doner","error":"Feil","errorMessage":"Melding: {error}","feedback":"Tilbakemelding","importingInterface":"Laster inn alternativer...","networkError":"Kunne ikke laste ned {url}. Sørg for at du er koblet til internett og prøv å deaktivere eventuelle nettleserutvidelser.","outdated":"Denne versjonen av pakkeren ser ut til å være utdatert. Vennligst oppdater og prøv igjen.","privacy":"Personvernregler","refresh":"Oppdater","reportBug":"Rapporter feil","sourceCode":"Kildekode","unknownImportError":"Noe gikk galt. Vennligst oppdater og prøv igjen."},"preview":{"loading":"Laster forhåndsvisning"},"progress":{"compressingProject":"Komprimerer prosjektet","downloadingExtensions":"Nedlaster tilpassede utvidelser","loadingAssets":"Laster ned eiendeler ({complete}/{total})","loadingLargeAsset":"Nedlaster {thing}","loadingProjectData":"Laster ned prosjektdata ...","loadingProjectMetadata":"Laster ned prosjektmetadata","loadingScripts":"Nedlaster skripter","packagingProject":"Pakker prosjekt"},"reset":{"confirm":"Er du sikker på at du vil tilbakestille disse innstillingene? Dette kan ikke angres.","confirmAll":"Er du sikker på at du vil tilbakestille ALLE innstillinger? Dette kan ikke angres.","reset":"Tilbakestill"},"select":{"file":"Fil","id":"Scratch prosjekt-ID eller URL","invalidId":"Ugyldig prosjekt-ID","invalidUrl":"Ugyldig URL","loadProject":"Last inn prosjekt","loadToContinue":"Last inn et prosjekt for å fortsette","noFileSelected":"Ingen fil valgt.","select":"Velg prosjekt","selectHelp":"Velg prosjektet du ønsker å pakke ved å kopiere og lime inn Scratch-prosjektkoblingen eller bruke en av de andre modusene. Hvis du bruker et prosjekt du ikke har laget selv, sørg for å kreditere skaperen.","unsharedProjects":"Udelte prosjekter er ikke lenger tilgjengelige ved hjelp av deres prosjekt-ID på grunn av endringer i Scratch API.","unsharedProjectsMore":"For mer informasjon og løsninger, besøk: {link}","unsharedProjectsWorkaround":"I stedet kan du enten dele prosjektet eller lagre prosjektet på datamaskinen din (Fil > Lagre på datamaskinen din) og laste filen inn i pakkeren. Filer generert av pakkeren er fullstendig selvstendige og påvirkes ikke av disse endringene.","url":"Andre URL"},"theme":{"dark":"Mørk","light":"Lys","system":"Bruk systemtema"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"{filename} downloaden ({size})","useWorkaround":"Hier klikken als downloadlink niet werkt"},"fileInput":{"clear":"Selectie Wissen","select":"Bestand selecteren of neerzetten","selected":"{file} geselecteerd"},"import":{"cancel":"Annuleren","description":"Dit kan even duren als het project groot is.","header":"Project aan het importeren..."},"options":{"accentColor":"Accentkleur (actieve/zwevende besturing, vraagveld, rechterklikmenu\'s)","advancedOptions":"Geavanceerde Opties","advancedSummary":"Deze wil je waarschijnlijk niet veranderen. (Klik om te openen)","application-linux-arm32":"{type} Linuxapplicatie voor ARM (32-bits)","application-linux-arm64":"{type} Linuxapplicatie voor ARM (64-bits)","application-mac":"{type} macOS-applicatie","application-win-arm":"{type} Windowsapplicatie voor ARM","applicationSettings":"Applicatie-Instellingen","automaticallyCenter":"Automatisch centreren","autoplay":"Project automatisch starten in plaats van een grote groene vlag laten zien","autoplayHint":"Opmerking: Veel browsers laten websites niet automatisch geluid afspelen, dus geluiden spelen soms niet af totdat de gebruiker iets doet met het project.","backgroundColor":"Achtergrondkleur","bakeExtensions":"Proberen om gecachte kopie van aangepaste extensies in te voegen in plaats van ze elke keer dat het project wordt uitgevoerd te downloaden","closeWhenStopped":"Venster sluiten wanneer project stopt","cloudVariables":"Cloudvariabelen","cloudVariables-custom":"Geavanceerd","cloudVariables-custom-help":"\\"Geavanceerd\\" gebruikt een andere modus voor elke variabele, dus sommige variabelen kunnen synchroniseren met andere gebruikers maar anderen kunnen lokaal worden opgeslagen, bijvoorbeeld.","cloudVariables-ignore":"Negeren","cloudVariables-ignore-help":"\\"Negeren\\" behandeld cloudvariabelen als normale variabelen.","cloudVariables-local":"Opslaan in lokale opslag","cloudVariables-local-help":"\\"Opslaan in lokale opslag\\" slaat variabelen op de computer van elke gebruiker en herstelt ze wanneer het project wordt geopend. Als een gebruiker meerdere vensters/tabbladen van hetzelfde project open heeft staan, worden veranderingen gesynchroniseerd tussen die vensters.","cloudVariables-ws":"Verbinden met cloudvariabelen-server","cloudVariables-ws-help":"\\"Verbinden met cloudvariabelen-server\\" synchroniseert cloudvariabelen met andere gebruikers.","cloudVariablesHost":"Cloudbeheerder","colors":"Kleuren","confirmImportUnsafe":"Deze instellingen maken gebruik van geavanceerde functies zoals aangepaste JS die onbekende en mogelijk schadelijke code uitvoeren op je computer. Importeer dit bestand alleen als je de maker ervan vertrouwt. Als je niet weet wat dit allemaal betekent, importeer deze instellingen dan niet.","controls":"Bediening","controlsHelp":"Als alle besturingen zijn uitgeschakeld, wordt de bedieningsbalk weggehaald. Als alleen het volledig scherm is ingeschakeld, wordt het altijd in de linkerbovenhoek weergegeven, niet in de bedieningsheader.","cursorCenter":"Midden van muisaanwijzer:","cursorHelp":"Afbeeldingen tot 32x32 werken het best. Grote afbeeldingen werken mogelijk niet goed.","customCSS":"Aangepaste CSS (Niet veranderen als je niet weet wat je doet!)","customCursor":"Aangepaste muisaanwijzer","customExtensions":"Aangepaste extensies (één URL per regel)","customExtensionsSecurity":"Aangepaste extensies worden altijd niet-gesandboxed uitgevoerd in de packager. Afhankelijk van de omgeving waarvoor je packaget, geeft dit extensies volledige controle over je computer, inclusief de mogelijk om virussen te installeren. Gebruik geen extensies die je niet vertrouwt.","customJS":"Aangepaste JS (Niet veranderen als je niet weet wat je doet!)","customUsernameWarning":"Wees voorzichtig met het veranderen van de standaardgebruikersnaam omdat het verbindingen met de standaardservers voor cloudvariabelen kan blokkeren. Alleen de standaardgebruikersnaam werkt altijd.","defaultControls":"Standaard","doNothing":"Niets doen","downloadsWillAppearHere":"Downloads komen hier","dynamicResize":"Dynamisch grootte veranderen om venstergrootte te passen (experimenteel)","editableLists":"Bewerkbare lijsten","enableCompiler":"Compiler Inschakelen","environment":"Omgeving","escapeBehavior":"Wanneer escapetoets wordt ingedrukt","exitOnly":"Alleen afsluiten","export":"Instellingen Exporteren","foregroundColor":"Voorgrondkleur (progressiebalk, sommige pictogrammen, sommige tekst)","gamepad":"Ondersteun USB- or Bluetooth-gamepads/controllers","gamepadHelp":"Gebaseerd op de \\"Gamepad-ondersteuning\\"-addon.","highQualityPen":"Pen met hoge kwaliteit","html":"Gewone HTML (op zichzelf staand, werkt overal)","icon":"Paginapictogram","implicitCloudHint":"Tip: Elke variabele met een naam die begint met \\"{cloud}\\" wordt geconverteerd naar een cloudvariabele ongeacht of het zo is gemaakt.","import":"Instellingen Importeren","infiniteClones":"Kloonlimiet weghalen","initalWindowSize":"Oorspronkelijke venstergrootte","interaction":"Invoer","interpolation":"Interpolatie","learnMore":"Lees meer","listColor":"Lijstkleur","loadingScreen":"Laadscherm","loadingScreenImage":"Laadscherm-afbeelding","loadingScreenText":"Laadscherm-tekst","loadingScreenTextPlaceholder":"(Niets)","maxTextureDimension":"Maximale resolutie van vectoruiterlijken verhogen om grote uiterlijken er beter uit te laten zien. Kan geheugengebruik verhogen en crashes veroorzaken.","mode":"Modus","monitors":"Monitoren","noCloudVariables":"Dit project bevat geen cloudvariabelen.","noControls":"Verborgen (frameless)","noCursor":"Geen muisaanwijzer","normalCursor":"Normale muisaanwijzer","otherEnvironments":"Overige omgevingen (Klik om te openen)","otherEnvironmentsHelp":"De meeste nieuwe projecten zouden in plaats daarvan de opties hierboven vermeld moeten gebruiken.","packageName":"Packagenaam","packageNameHelp":"Packagenaam moet een unieke naam zijn die alleen wordt gebruikt door jouw applicatie. Hetzelfde project moet altijd dezelfde packagenaam hebben.","packagedRuntime":"Onbewerkte onderdelendata verwijderen na het laden om RAM te besparen","pageTitle":"Paginatitel","playerOptions":"Speleropties","pointerlock":"Muisaanwijzer vergrendelen","pointerlockHelp":"Gebaseerd op een TurboWarp-Experiment.","preserveRatio":"Beeldverhouding behouden bij verandering (aanbevolen)","preview":"Voorbeeld","projectId":"Project-ID","projectIdHelp":"Project-ID wordt gebruikt bij het verbinden met een cloudvariabelenserver en lokale cloudvariabelen opslaan. Het kan meer dan alleen getallen bevatten.","removeFencing":"Waarde-limieten van sprites weghalen","removeMiscLimits":"Diverse limieten weghalen","resetAll":"Alle Instellingen Resetten","runtimeOptions":"Looptijdopties","showFlag":"Groene vlag-knop laten zien in bediening","showFullscreen":"Volledig scherm-knop laten zien in bediening","showPause":"Pauzeknop laten zien in bediening","showProgressBar":"Progressiebalk laten zien","showStop":"Stopknop laten zien in bediening","sizeNormal":"Met normale grootte weergeven","sizeStretch":"Scherm vullen","specialCloudBehaviors":"Speciaal cloudvariabelen-gedrag zoals HTMLifier","stage":"Speelveld","stageSize":"Aangepaste speelveldgrootte","startFullscreen":"Starten in volledig scherm","startMaximized":"Starten als gemaximaliseerd venster","startWindow":"Starten als venster","steamworksIgnore":"Niets doen","storedWarning":"Opmerking: Dit project draagt instellingen met zich mee die deze instellingen mogelijk kan overschrijven.","stretch":"Scherm uitrekken om scherm te vullen zonder de echte grootte te veranderen (experimenteel)","turbo":"Turbomodus","unFullscreenOnly":"Alleen volledig scherm verlaten","unFullscreenOrExit":"Volledig scherm verlaten of afsluiten","unsafeCloudBehaviors":"Aanvullende onveilige speciaal cloudvariabelen-gedrag","unsafeCloudBehaviorsWarning":"Onveilig cloudgedrag geeft het gepackagete project de mogelijkheid om arbitraire code uit te voeren buiten de \\"sandbox\\" waarin projecten normaliter worden uitgevoerd. Afhankelijk van de omgeving waarvoor je packaget, dit geeft projecten volledige controle over je computer, inclusief de mogelijkheid om virussen te installeren. Als je het project dat je packaget niet vertrouwt, schakel deze optie dan alsjeblieft uit.","username":"Gebruikersnaam (elke \\"#\\" wordt vervangen door een willekeurig getal)","variableColor":"Variabelekleur","version":"Versie","versionHelp":"De versie updaten is volledig optioneel en heeft geen effect op het gedrag van je projecten. Het kan in plekken zoals \\"over\\"-schermen plaatsvinden, afhankelijk van de omgeving. Formatteer als X.Y.Z.","warpTimer":"Warp-Stopwatch","windowControls":"Vensterbesturing","zip":"Zip (ideaal voor websites)","zip-one-asset":"Zip, combineer onderdelen in een enkel bestand (niet aanbevolen)"},"p4":{"browserNotSupported":"Browser wordt niet ondersteund","browserNotSupportedDescription":"Update je browser.","cannotAccessProject":"Geen toegang tot projecttoken. Dit betekent meestal dat het project niet gedeeld is, nooit heeft bestaan, het ID ongeldig is, of turbowarp.org wordt geblokkeerd door je netwerk.","cannotAccessProjectCaching":"Als het project recentelijk is gedeeld, kan het een paar minuten duren voordat dit bericht verdwijnt.","close":"Sluiten","description1":"Converteert Scratch-projecten in HTML-bestanden, zip-archieven, of uitvoerbare programma\'s voor Windows, macOS, en Linux.","description2":"Als je een makkelijke manier zoekt om een project in je website in te voegen, ben je misschien geïnteresseerd in {embedding}.","description2-embedding":"Invoeging","description3":"Meld bugs, geef feedback, en stel ideeën voor {onScratch}of {onGitHub}.","description3-on":"aan {brand}","disclaimer":"Deze site is niet aangesloten bij Scratch, het Scratch-Team, of de Scratch-organisatie.","documentation":"Aanvullende bronnen en hulp","donate":"Doneren","errorMessage":"Bericht: {error}","importingInterface":"Opties aan het laden...","networkError":"Kon {url} niet downloaden. Zorg dat je verbonden bent met het internet en probeer andere browserextensies uit te schakelen.","outdated":"Deze versie van de packager lijkt verouderd. Ververs de pagina en probeer het opnieuw.","privacy":"Privacybeleid","refresh":"Verversen","reportBug":"Bug Melden","sourceCode":"Broncode","unknownImportError":"Er is iets misgegaan. Ververs en probeer het opnieuw."},"preview":{"loading":"Voorbeeld aan het Laden"},"progress":{"compressingProject":"Project aan het comprimeren","downloadingExtensions":"Aangepaste extensies downloaden","loadingAssets":"Onderdelen downloaden ({complete}/{total})","loadingLargeAsset":"{thing} aan het downloaden","loadingProjectData":"Projectgegevens aan het downloaden","loadingProjectMetadata":"Metadata van project aan het downloaden","loadingScripts":"Scripts aan het downloaden","packagingProject":"Project aan het packagen"},"reset":{"confirm":"Weet je zeker dat je deze instellingen wilt resetten? Dit kan niet ongedaan worden gemaakt.","confirmAll":"Weet je zeker dat je ALLE instellingen wilt resetten? Dit kan niet ongedaan worden gemaakt.","reset":"Resetten"},"select":{"file":"Bestand","id":"ID of URL van Scratchproject","invalidId":"Ongeldig project-ID","invalidUrl":"Ongeldige URL","loadProject":"Project Laden","loadToContinue":"Laad een project om door te gaan","noFileSelected":"Geen bestand geselecteerd","select":"Project Selecteren","selectHelp":"Selecteer het project dat je wilt packagen door de Scratch-projectlink te kopiëren en te plakken of door een andere methode te gebruiken. Als je een project gebruikt die niet van jezelf is, zorg dat je de maker bedankt.","unsharedProjects":"Niet-gedeelde projecten zijn niet meer toegankelijk met hun project-ID\'s wegens veranderingen in de API van Scratch.","unsharedProjectsMore":"Voor meer informatie en tijdelijke oplossingen: {link}","unsharedProjectsWorkaround":"Je kunt daarvoor in de plaats het project delen, of het project opslaan op je computer (Bestand > Opslaan op je computer) en het bestand laden in de packager. Bestanden die gegenereerd zijn door de packager zijn helemaal vrijstaand en niet beïnvloed door deze veranderingen.","url":"Andere URL"},"theme":{"dark":"Donker","light":"Licht","system":"Systeemthema gebruiken"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"Pobierz {filename} ({size})","useWorkaround":"Kliknij tutaj, jeśli link pobierania nie działa"},"fileInput":{"clear":"Wyczyść Zaznaczenie","select":"Wybierz lub upuść plik","selected":"Wybrano {file}"},"import":{"cancel":"Anuluj","header":"Importowanie projektu..."},"options":{"accentColor":"Kolor akcentów (aktywne/najechane kontrolki, ekrany pytań, menu kontekstowe)","advancedOptions":"Zaawansowane Opcje","advancedSummary":"Prawdopodobnie nie chcesz tego zmieniać. (Kliknij, aby otworzyć)","application-mac":"{type} Aplikacja systemu macOS","applicationSettings":"Ustawienia Aplikacji","automaticallyCenter":"Wycentruj automatycznie","autoplay":"Rozpocznij projekt automatycznie, bez wyświetlania najpierw wielkiej zielonej flagi","backgroundColor":"Kolor tła","closeWhenStopped":"Zamknij okno kiedy projekt jest zatrzymany","cloudVariables":"Zmienne w Chmurze","cloudVariables-custom":"Zaawansowane","cloudVariables-ignore":"Ignoruj","cloudVariables-ignore-help":"\\"Ignoruj\\" traktuje zmienne w chmurze jak zwykłe zmienne.","cloudVariables-local":"Przechowuj w lokalnej pamięci","cloudVariables-ws":"Połącz z serwerem zmiennych w chmurze","cloudVariables-ws-help":"\\"Połącz z serwerem zmiennych w chmurze\\" synchronizuje zmienne z innymi użytkownikami.","cloudVariablesHost":"Hosting w chmurze","colors":"Kolory","controls":"Kontrola","controlsHelp":"Jeżeli wszystkie kontrolki są wyłączone, pasek kontrolek zostanie usunięty całkowicie. Jeżeli tylko kontrolka pełnego ekranu jest aktywna, to będzie ona zawsze umieszczona w lewym górnym rogu, nie w pasku kontrolek.","cursorCenter":"Środek kursora:","cursorHelp":"Obrazy do 32x32 są najlepsze. Większe obrazy mogą nie działać niezawodnie.","customCSS":"Własne CSS (Nie zmieniaj, jeżeli nie wiesz co robisz!)","customCursor":"Niestandardowy kursor","customExtensions":"Niestandardowe rozszerzenia (jedno URL na linię)","customJS":"Własne JS (Nie zmieniaj, jeżeli nie wiesz co robisz!)","customUsernameWarning":"Bądź ostrożny przy zmienianiu domyślnej nazwy użytkownika, gdyż może to powodować blokowanie połączeń z domyślnym serwerem zmiennych w chmurze. Tylko domyślna nazwa użytkownika gwarantuje poprawne działanie.","downloadsWillAppearHere":"Tutaj pojawią się pliki do pobrania ","dynamicResize":"Dynamicznie zmień rozmiar, tak aby dopasować go do wielkości okna (eksperymentalne)","editableLists":"Edytowalne listy","enableCompiler":"Włącz Kompilator","environment":"Środowisko","export":"Eksportuj Ustawienia","foregroundColor":"Kolor pierwszoplanowy (pasek postępu, niektóre ikony, niektóre teksty)","framerate":"Ilość klatek na sekundę","gamepad":"Obsługa gamepadów/kontrolerów USB lub Bluetooth","gamepadHelp":"Na podstawie dodatku \\"Wsparcie dla gamepadów\\".","highQualityPen":"Pióro Wysokiej Jakości","html":"Zwykły HTML (samodzielny, działa wszędzie)","icon":"Ikona strony","import":"Importuj Ustawienia","infiniteClones":"Nieskończone Klony","interaction":"Wejście","interpolation":"Interpolacja","learnMore":"Ucz się więcej","listColor":"Kolor list","loadingScreen":"Ekran Ładowania","loadingScreenImage":"Obraz ekranu ładowania","loadingScreenText":"Tekst ekranu ładowania","loadingScreenTextPlaceholder":"(Nic)","mode":"Tryb","monitors":"Ekrany","noCloudVariables":"Ten projekt nie zawiera zmiennych w chmurze.","noCursor":"Brak kursora","normalCursor":"Normalny kursor","otherEnvironments":"Inne środowiska (Kliknij aby otworzyć)","otherEnvironmentsHelp":"Większość nowych projektów powinna używać powyższych opcji.","package":"Paczka","packageName":"Nazwa pakietu","packagedRuntime":"Usuń surowe dane po załadowaniu, aby zaoszczędzić pamięć RAM","pageTitle":"Tytuł Strony","playerOptions":"Opcje gracza","pointerlock":"Zablokuj kursor myszy","pointerlockHelp":"Na podstawie eksperymentu TurboWarp.","preserveRatio":"Zachowaj stosunek pomiędzy wysokością a szerokością okna po zmienieniu rozmiaru (rekomendowane)","preview":"Przejżyj","projectId":"ID projektu","projectIdHelp":"ID projektu używane jest podczas łączenia się z serwerem zmiennych w chmurze oraz przechowywania lokalnych zmiennych w chmurze. Może składać się nie tylko z numerów.","removeFencing":"Usuń Ograniczenia","removeMiscLimits":"Usuń Różne Limity","resetAll":"Resetuj Wszystkie Ustawienia","runtimeOptions":"Opcje Uruchamiania","showFlag":"Pokaż przycisk zielonej flagi w kontrolkach","showFullscreen":"Pokaż przycisk pełnego ekranu w kontrolkach","showPause":"Pokaż przycisk pauzy w kontrolkach","showProgressBar":"Pokaż pasek postępu","showStop":"Pokaż przycisk znaku stop w kontrolkach","sizeNormal":"Wyświetl w normalnym rozmiarze","sizeStretch":"Wypełnij ekran","stage":"Scena","stageSize":"Niestandardowy Rozmiar Sceny","startFullscreen":"Zacznij w trybie pełnoekranowym","startMaximized":"Zacznij jako zmaksymalizowane okno","startWindow":"Zacznij jako okno","stretch":"Rozciąnij scenę, żeby zapełnić cały ekran bez zmieniania faktycznego rozmiaru (eksperymentalne)","turbo":"Tryb Turbo","unsafeCloudBehaviors":"Dodatkowe niebezpieczne specjalne zachowania chmury","username":"Nazwa użytkownika (każde \\"#\\" zostanie zamienione na losową cyfrę)","variableColor":"Kolor zmiennej","version":"Wersja","warpTimer":"Warp Stoper","zip":"Zip (idealne dla stron internetowych)","zip-one-asset":"Zip, zapakuj pliki projektu do jednego pliku (odradzane)"},"p4":{"browserNotSupported":"Twoja przeglądarka nie jest obsługiwana","browserNotSupportedDescription":"Zaktualizuj swoją przeglądarkę","close":"Zamknij","description2-embedding":"Osadzanie","description3":"Zgloś błędy, wyraź swoją opinię i zasugeruj pomysły w {onScratch} lub {onGitHub}.","description3-on":"w {brand}","disclaimer":"TurboWarp nie jest powiązany ze Scratch, Scratch Team, ani Scratch Foundation.","documentation":"Dodatkowe treści i pomoc","donate":"Wesprzyj","error":"Błąd","errorMessage":"Wiadomość: {error}","feedback":"Opinia Zwrotna","importingInterface":"Ładowanie opcji...","privacy":"Polityka Prywatności","refresh":"Odśwież","reportBug":"Zgłoś Błąd","sourceCode":"Kod Źródłowy","unknownImportError":"Coś poszło nie tak. Odśwież i spróbuj ponownie."},"preview":{"loading":"Ładowanie Podglądu"},"progress":{"compressingProject":"Kompresowanie projektu","downloadingExtensions":"Pobieranie niestandardowych rozszerzeń","loadingAssets":"Pobieranie zasobów ({complete}/{total})","loadingLargeAsset":"Pobieranie {thing}","loadingProjectData":"Pobieranie danych projektu","loadingProjectMetadata":"Pobieranie metadanych projektu","loadingScripts":"Pobieranie skryptów","packagingProject":"Pakowanie projektu"},"reset":{"confirm":"Jesteś pewien, że chcesz zresetować te ustawienia? Tej czynności nie można cofnąć.","confirmAll":"Jesteś pewien, że chcesz zresetować WSZYSTKIE ustawienia? Tej czynności nie można cofnąć.","reset":"Resetuj"},"select":{"file":"Plik","id":"ID lub URL projektu Scratcha","invalidId":"Nieprawidłowe ID projektu","invalidUrl":"Niepoprawny URL","loadProject":"Załaduj Projekt","loadToContinue":"Załaduj projekt, aby kontynuować","noFileSelected":"Nie wybrano pliku","select":"Wybierz Projekt","url":"Inny URL"},"theme":{"dark":"Ciemny","light":"Jasny","system":"Użyj motywu systemowego"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"fileInput":{"clear":"Limpar Seleção","select":"Selecione ou arraste um arquivo","selected":"Selecionado {file}"},"import":{"cancel":"Cancelar"},"options":{"accentColor":"Cor de destaque (controles ativos/em foco, caixa de pergunta, menus de contexto)","advancedOptions":"Opções Avançadas","advancedSummary":"Talvez você não queira mexer nessas opções. (Clique para abrir)","application-mac":"Aplicativo {type} para macOS","applicationSettings":"Opções de Aplicativo","autoplay":"Começar projeto automaticamente ao invés de mostrar a bandeira verde","autoplayHint":"Nota: Muitos navegadores não permitem que websites toquem sons automaticamente, então pode ser que os sons não toquem até que o usuário interaja com o projeto.","backgroundColor":"Cor de fundo","cloudVariables":"Variáveis na nuvem","cloudVariables-custom":"Avançado","cloudVariables-custom-help":"\\"Avançado\\" utiliza um modo diferente para cada variável para que, por exemplo, sincronizem algumas variáveis com outros usuários e que outras sejam salvas localmente.","cloudVariables-ignore":"Ignorar","cloudVariables-ignore-help":"\\"Ignorar\\" trata variáveis na nuvem como variáveis normais.","cloudVariables-local":"Armazenar localmente","cloudVariables-local-help":"\\"Armazenar localmente\\" salva as variáveis no computador de cada usuário e carrega os valores quando o projeto é reaberto. Se o usuário tiver várias janelas/abas do mesmo projeto abertas, as mudanças ficarão sincronizadas entre elas.","cloudVariables-ws":"Conectar a servidor de variáveis na nuvem","cloudVariables-ws-help":"\\"Conectar a servidor de variáveis na nuvem\\" sincroniza as variáveis com outros usuários.","cloudVariablesHost":"Hospedagem Cloud","colors":"Cores","controls":"Controles","controlsHelp":"Se todos os controles forem desativados, a barra de controle é completamente removida. Se só o botão de tela cheia for ativado, ele aparecerá no canto superior esquerdo ao invés de na barra de controles.","cursorHelp":"Imagens de até 32x32 pixels funcionam melhor. Imagens maiores podem não funcionar adequadamente.","customCSS":"CSS customizado (Não mude caso não souber o que está fazendo!)","customCursor":"Cursor customizado","customExtensions":"Extensões customizadas (um URL por linha)","customJS":"JS customizado (Não mexa se você não sabe o que está fazendo!)","customUsernameWarning":"Seja cuidadoso ao trocar o nome de usuário padrão pois ele pode ser bloqueado de se conectar ao servidor de nuvem padrão. Apenas o nome de usuário padrão é garantido de funcionar.","downloadsWillAppearHere":"Downloads aparecerão aqui","dynamicResize":"Redimensionar dinamicamente para encaixar com o tamanho da janela (experimental)","editableLists":"Listas editáveis","enableCompiler":"Ativar Compilador","environment":"Ambiente","foregroundColor":"Cor principal (barra de carregamento, alguns ícones e textos)","gamepad":"Suporte a controles de videogame USB ou Bluetooth","gamepadHelp":"Baseado no addon \\"Suporte para controle\\".","highQualityPen":"Caneta de Alta Qualidade","html":"Arquivo HTML (pode ser rodado localmente ou na web)","icon":"Ícone da página","implicitCloudHint":"Atenção: Toda variável com o nome que começa com \\"{cloud}\\" será convertida em variável na nuvem, não importando se ela estiver marcada como tal.","infiniteClones":"Clones Infinitos","interaction":"Controles","interpolation":"Interpolação","learnMore":"Saiba mais","loadingScreen":"Tela de Carregamento","loadingScreenImage":"Imagem da tela de carregamento","loadingScreenText":"Texto da tela de carregamento","loadingScreenTextPlaceholder":"(Nada)","mode":"Modo","monitors":"Monitores","noCloudVariables":"Esse projeto não contém variáveis na nuvem.","noCursor":"Sem cursor","normalCursor":"Cursor normal","otherEnvironments":"Outras plataformas (Clique para abrir)","otherEnvironmentsHelp":"É recomendado que a maioria dos projetos novos usem apenas as opções listadas acima.","package":"Exportar","packageName":"Nome de pacote","packageNameHelp":"O nome de pacote deve ser um nome único usado exclusivamente para o seu aplicativo. O mesmo projeto deve sempre ter o mesmo nome de pacote.","pageTitle":"Título da página","playerOptions":"Opções do Player","pointerlock":"Bloquear o cursor","pointerlockHelp":"Baseado em um Experimento do TurboWarp","preserveRatio":"Preservar a proporção da tela quando redimensionada (recomendado)","preview":"Pré-visualizar","projectId":"ID do Projeto","projectIdHelp":"O ID do Projeto é usado ao conectar a um servidor de variáveis na nuvem e ao guardar variáveis na nuvem localmente. Ele não precisa ser um número.","removeFencing":"Remover Borda","removeMiscLimits":"Remover Outros Limites","runtimeOptions":"Opções de Execução","showFlag":"Mostrar bandeira verde nos controles","showFullscreen":"Mostrar botão de tela cheia nos controles","showPause":"Mostrar botão de pausa nos controles","showProgressBar":"Mostrar barra de progresso","showStop":"Mostrar placa de pare nos controles","sizeNormal":"Mostrar em tamanho normal","sizeStretch":"Preencher a tela","specialCloudBehaviors":"Comportamentos especiais para variáveis na nuvem específicas, como no HTMLifier","stage":"Palco","stageSize":"Tamanho Customizado do Palco","startFullscreen":"Iniciar em tela cheia","startMaximized":"Iniciar em modo janela maximizada","startWindow":"Iniciar em modo janela","storedWarning":"Nota: Este projeto tem configurações armazenadas nele, que podem sobrepor-se a estas configurações.","stretch":"Esticar o palco para preencher a tela sem alterar o tamanho real (experimental)","turbo":"Modo Turbo","unsafeCloudBehaviors":"Funções inseguras para variáveis na nuvem especiais","unsafeCloudBehaviorsWarning":"Comportamentos inseguros de variáveis na nuvem permitem que o projeto exportado execute código arbitrário fora da \\"caixa de areia\\" na qual os projetos normalmente rodam. Dependendo do dispositivo para o qual você está exportando, isto concede aos projetos controle total sobre o mesmo, incluindo a capacidade de instalar vírus. Se você não confiar no projeto que está empacotando, por favor, desligue esta opção.","username":"Nome de usuário (cada \\"#\\" torna-se um número aleatório)","zip":"Zip (ideal para websites)","zip-one-asset":"Zip, juntar todos os recursos em um único arquivo (não recomendado)"},"p4":{"close":"Fechar","description1":"Converte projetos do Scratch para arquivos HTML, ZIP, ou programas executáveis para Windows, macOS e Linux.","description2":"Se você apenas quer um jeito fácil de colocar um projeto do TurboWarp no seu site, {embedding} pode ser de seu interesse. ","description2-embedding":"Incorporação","description3":"Relate bugs, dê feedback e sugira ideias {onScratch} ou {onGitHub}.","description3-on":"no {brand}","documentation":"Recursos e ajuda adicionais","error":"Erro","errorMessage":"Mensagem: {error}","privacy":"Política de Privacidade","reportBug":"Relatar Bug","sourceCode":"Código-fonte"},"preview":{"loading":"Carregando Pré-visualização"},"progress":{"compressingProject":"Comprimindo projeto","packagingProject":"Exportando projeto"},"reset":{"confirm":"Tem certeza que quer redefinir essas configurações? Isto não poderá ser desfeito.","reset":"Redefinir"},"select":{"file":"Arquivo","id":"ID ou URL do Projeto no Scratch","invalidId":"ID de projeto inválido","invalidUrl":"URL Inválido","loadProject":"Carregar Projeto","loadToContinue":"Carregue um projeto para continuar","noFileSelected":"Nenhum arquivo selecionado","select":"Selecionar Projeto","selectHelp":"Selecione o projeto que você quer exportar copiando e colando o link do projeto no Scratch ou usando um dos outros meios. Se você usar um projeto criado por outra pessoa, lembre-se de dar créditos ao autor.","url":"Outro URL"},"theme":{"dark":"Escuro","light":"Claro","system":"Usar tema do sistema"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"Baixar {filename} ({size})","useWorkaround":"Clique aqui se o link do download não estiver funcionando"},"fileInput":{"clear":"Limpar Seleção","select":"Selecione ou arraste um arquivo","selected":"Selecionado {file}"},"import":{"cancel":"Cancelar","description":"Talvez levará um tempo se o projeto for grande.","header":"Importando projeto..."},"options":{"accentColor":"Cor de destaque (controles ativos/em foco, caixa de pergunta, menus de contexto)","advancedOptions":"Opções Avançadas","advancedSummary":"Talvez você não queira mexer nessas opções. (Clique para abrir)","application-mac":"Aplicativo {type} para macOS","applicationSettings":"Opções de Aplicativo","automaticallyCenter":"Centralizar automaticamente","autoplay":"Começar projeto automaticamente ao invés de mostrar a bandeira verde","autoplayHint":"Nota: Muitos navegadores não permitem que websites toquem sons automaticamente, então pode ser que os sons não toquem até que o usuário interaja com o projeto.","backgroundColor":"Cor de fundo","bakeExtensions":"Tente incorporar uma cópia em cache de extensões personalizadas em vez de baixá-las toda vez que o projeto for executado","closeWhenStopped":"Fechar a janela quando projeto parar","cloudVariables":"Variáveis na nuvem","cloudVariables-custom":"Avançado","cloudVariables-custom-help":"\\"Avançado\\" utiliza um modo diferente para cada variável para que, por exemplo, sincronizem algumas variáveis com outros usuários e que outras sejam salvas localmente.","cloudVariables-ignore":"Ignorar","cloudVariables-ignore-help":"\\"Ignorar\\" trata variáveis na nuvem como variáveis normais.","cloudVariables-local":"Armazenar localmente","cloudVariables-local-help":"\\"Armazenar localmente\\" salva as variáveis no computador de cada usuário e carrega os valores quando o projeto é reaberto. Se o usuário tiver várias janelas/abas do mesmo projeto abertas, as mudanças ficarão sincronizadas entre elas.","cloudVariables-ws":"Conectar a servidor de variáveis na nuvem","cloudVariables-ws-help":"\\"Conectar a servidor de variáveis na nuvem\\" sincroniza as variáveis com outros usuários.","cloudVariablesHost":"Hospedagem Cloud","colors":"Cores","confirmImportUnsafe":"Essas configurações usam recursos avançados, como JavaScript personalizado, que executa códigos desconhecidos e possivelmente maliciosos em seu computador. Importe este arquivo somente se você confia na pessoa que o criou. Se você não tem certeza do que isso significa, provavelmente não deverá importar essas configurações.","controls":"Controles","controlsHelp":"Se todos os controles forem desativados, a barra de controle é completamente removida. Se só o botão de tela cheia for ativado, ele aparecerá no canto superior esquerdo ao invés na barra de controles.","cursorCenter":"Centro do cursor:","cursorHelp":"Imagens de até 32x32 pixels funcionam melhor. Imagens maiores podem não funcionar adequadamente.","customCSS":"CSS customizado (Não mude caso não souber o que está fazendo!)","customCursor":"Cursor customizado","customExtensions":"Extensões customizadas (um URL por linha)","customExtensionsSecurity":"As extensões personalizadas são sempre executadas fora do sandbox no exportador. Dependendo do dispositivo para o qual você está o exportando, isso concede às extensões controle total sobre o seu computador, incluindo a capacidade de instalar vírus. Não use extensões nas quais você não confia.","customJS":"JS customizado (Não mude caso não souber o que está fazendo!)","customUsernameWarning":"Seja cuidadoso ao trocar o nome de usuário padrão pois ele pode ser bloqueado de se conectar ao servidor de nuvem padrão. Apenas o nome de usuário padrão é garantido de funcionar.","downloadsWillAppearHere":"Downloads aparecerão aqui","dynamicResize":"Redimensionar dinamicamente para encaixar com o tamanho da janela (experimental)","editableLists":"Listas editáveis","enableCompiler":"Ativar Compilador","environment":"Ambiente","export":"Exportar Configurações","foregroundColor":"Cor principal (barra de carregamento, alguns ícones e textos)","gamepad":"Suporte a controles de videogame USB ou Bluetooth","gamepadHelp":"Baseado no addon \\"Suporte para controle\\".","highQualityPen":"Caneta de Alta Qualidade","html":"Arquivo HTML (pode ser rodado localmente ou na web)","icon":"Ícone da página","implicitCloudHint":"Atenção: Toda variável com o nome que começa com \\"{cloud}\\" será convertida em variável na nuvem, não importando se ela estiver marcada como tal.","import":"Importar Configurações","infiniteClones":"Clones Infinitos","interaction":"Controles","interpolation":"Interpolação","learnMore":"Saiba mais","listColor":"Cor da lista","loadingScreen":"Tela de Carregamento","loadingScreenImage":"Imagem da tela de carregamento","loadingScreenText":"Texto da tela de carregamento","loadingScreenTextPlaceholder":"(Nada)","maxTextureDimension":"Aumentará o limite da resolução máxima da fantasia em vetor para tornar as fantasias gigantes mais nítidas. Esta opção pode aumentar consideravelmente o uso da memória e causar instabilidades.","mode":"Modo","monitors":"Monitores","noCloudVariables":"Esse projeto não contém variáveis na nuvem.","noCursor":"Sem cursor","normalCursor":"Cursor normal","otherEnvironments":"Outras plataformas (Clique para abrir)","otherEnvironmentsHelp":"É recomendado que a maioria dos projetos novos usem apenas as opções listadas acima.","package":"Exportar","packageName":"Nome de pacote","packageNameHelp":"O nome de pacote deve ser um nome único usado exclusivamente para o seu aplicativo. O mesmo projeto deve sempre ter o mesmo nome de pacote.","packagedRuntime":"Remova os dados de arquivos brutos após o carregamento para economizar RAM","pageTitle":"Título da página","playerOptions":"Opções do Player","pointerlock":"Bloquear o cursor","pointerlockHelp":"Baseado em um Experimento do TurboWarp","preserveRatio":"Preservar a proporção da tela quando redimensionada (recomendado)","preview":"Pré-visualizar","projectId":"ID do Projeto","projectIdHelp":"O ID do Projeto é usado ao conectar a um servidor de variáveis na nuvem e ao guardar variáveis na nuvem localmente. Ele não precisa ser um número.","removeFencing":"Remover Borda","removeMiscLimits":"Remover Outros Limites","resetAll":"Redefinir Todas Configurações","runtimeOptions":"Opções de Execução","showFlag":"Mostrar bandeira verde nos controles","showFullscreen":"Mostrar botão de tela cheia nos controles","showPause":"Mostrar botão de pausa nos controles","showProgressBar":"Mostrar barra de progresso","showStop":"Mostrar placa de pare nos controles","sizeNormal":"Mostrar em tamanho normal","sizeStretch":"Preencher a tela","specialCloudBehaviors":"Comportamentos especiais para variáveis na nuvem específicas, como no HTMLifier","stage":"Palco","stageSize":"Tamanho Customizado do Palco","startFullscreen":"Iniciar em tela cheia","startMaximized":"Iniciar em modo janela maximizada","startWindow":"Iniciar em modo janela","storedWarning":"Nota: Este projeto tem configurações armazenadas nele, que podem sobrepor-se a estas configurações.","stretch":"Esticar o palco para preencher a tela sem alterar o tamanho real (experimental)","turbo":"Modo Turbo","unsafeCloudBehaviors":"Funções inseguras para variáveis na nuvem especiais","unsafeCloudBehaviorsWarning":"Comportamentos inseguros de variáveis na nuvem permitem que o projeto exportado execute código arbitrário fora da \\"caixa de areia\\" na qual os projetos normalmente rodam. Dependendo do dispositivo para o qual você está exportando, isto concede aos projetos controle total sobre o mesmo, incluindo a capacidade de instalar vírus. Se você não confiar no projeto que está empacotando, por favor, desligue esta opção.","username":"Nome de usuário (cada \\"#\\" torna-se num número aleatório)","variableColor":"Cor da variável","version":"Versão","zip":"Zip (ideal para websites)","zip-one-asset":"Zip, juntar todos os recursos em um único arquivo (não recomendado)"},"p4":{"browserNotSupported":"Navegador incompatível","browserNotSupportedDescription":"Por favor, atualize o seu navegador.","cannotAccessProject":"Não foi possível acessar o token do projeto. Normalmente isto significa que o projeto não está compartilhado, nunca existiu, o ID é inválido, ou a sua rede está bloqueando acesso ao turbowarp.org.","cannotAccessProjectCaching":"Se o projeto foi compartilhado recentemente, talvez irá levar algum tempo para esta mensagem sumir.","close":"Fechar","description1":"Converte projetos do Scratch para arquivos HTML, ZIP, ou programas executáveis para Windows, macOS e Linux.","description2":"Se você apenas quer um jeito fácil de colocar um projeto do TurboWarp no seu site, {embedding} pode ser de seu interesse. ","description2-embedding":"Incorporação","description3":"Relate bugs, dê feedback e sugira ideias {onScratch} ou {onGitHub}.","description3-on":"no {brand}","disclaimer":"Este site não é afiliado com o Scratch, nem com a Equipe do Scratch ou a Fundação Scratch.","documentation":"Recursos e ajuda adicionais","donate":"Doar","error":"Erro","errorMessage":"Mensagem: {error}","importingInterface":"Carregando opções...","networkError":"Não foi possível baixar {url}. Verifique se está conectado a internet e tente desativar quaisquer extensão de navegador.","outdated":"Esta versão do exportador aparenta estar desatualizada. Por favor, renicie a página e tente novamente.","privacy":"Política de Privacidade","refresh":"Atualizar","reportBug":"Relatar Bug","sourceCode":"Código-fonte","unknownImportError":"Algo deu errado. Por favor, renicie e tente novamente."},"preview":{"loading":"Carregando Pré-visualização"},"progress":{"compressingProject":"Comprimindo projeto","downloadingExtensions":"Baixando extensões personalizadas","loadingAssets":"Baixando recursos ({complete}/{total})","loadingLargeAsset":"Baixando {thing}","loadingProjectData":"Baixando conteúdo do projeto","loadingProjectMetadata":"Baixando dados do projeto","loadingScripts":"Baixando scripts","packagingProject":"Exportando projeto"},"reset":{"confirm":"Tem certeza que quer redefinir essas configurações? Isto não poderá ser desfeito.","confirmAll":"Tens certeza que quer redefinir TODAS as configurações? Isso não poderá ser desfeito.","reset":"Redefinir"},"select":{"file":"Arquivo","id":"ID ou URL do Projeto no Scratch","invalidId":"ID de projeto inválido","invalidUrl":"URL Inválido","loadProject":"Carregar Projeto","loadToContinue":"Carregue um projeto para continuar","noFileSelected":"Nenhum arquivo selecionado","select":"Selecionar Projeto","selectHelp":"Selecione o projeto que você quer exportar copiando e colando o link do projeto no Scratch ou usando um dos outros meios. Se você usar um projeto criado por outra pessoa, lembre-se de dar créditos ao autor.","unsharedProjects":"Projetos não compartilhados não serão mais acessíveis através do ID do projeto devido a mudanças da API do Scratch.","unsharedProjectsMore":"Para mais informações e maneiras de solução de problemas, visite: {link}","unsharedProjectsWorkaround":"Em vez disso, você pode compartilhar o projeto ou salvá-lo em seu computador (Arquivo > Baixar para o seu computador) e importar o arquivo no exportador. Os arquivos gerados pelo exportador são totalmente independentes e não são afetados por essas alterações.","url":"Outro URL"},"theme":{"dark":"Escuro","light":"Claro","system":"Usar tema do sistema"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"Скачать {filename} ({size})","useWorkaround":"Нажмите сюда, если ссылка для скачивания не работает."},"fileInput":{"clear":"Очистить выбор","select":"Выберите или \\"закиньте\\" файл","selected":"Выбран {file}"},"import":{"cancel":"Отмена","description":"Это займёт некоторое время, если проект большой.","header":"Импорт проекта..."},"options":{"accentColor":"Акцентный цвет (цвет фона активных/наведённых кнопок, поля ввода, контекстные меню и т.д.)","advancedOptions":"Дополнительные опции","advancedSummary":"Скорее всего, Вам не захочется менять эти настройки. (Нажмите, чтобы открыть)","application-linux-arm32":"{type} Linux приложение для ARM (32-bit)","application-linux-arm64":"{type} Linux приложение для ARM (64-bit)","application-mac":"{type} приложение macOS","application-win-arm":"{type} Windows приложение для ARM","applicationSettings":"Настройки Приложения","automaticallyCenter":"Автоцентрирование","autoplay":"Запускать проект автоматически вместо того, чтобы показывать большой зелёный флаг","autoplayHint":"Примечание. Многие браузеры не позволяют веб-сайтам автоматически воспроизводить звук, поэтому звуки могут не воспроизводиться, пока пользователь не повзаимодействует с проектом.","backgroundColor":"Цвет фона","bakeExtensions":"Попробуйте внедрить кэшированную копию пользовательских расширений вместо того, чтобы загружать их при каждом запуске проекта","closeWhenStopped":"Закрывать окно когда проект остановится","cloudVariables":"Облачные Переменные","cloudVariables-custom":"Дополнительно","cloudVariables-custom-help":"Режим \\"Дополнительно\\" использует разные режимы для каждой переменной, поэтому некоторые переменные могут синхронизироваться с другими пользователями, а другие, например, могут храниться локально.","cloudVariables-ignore":"Игнорировать","cloudVariables-ignore-help":"Функция «Игнорировать» обрабатывает облачные переменные как обычные.","cloudVariables-local":"Сохранить на свой компьютер","cloudVariables-local-help":"Функция «Хранить в локальном хранилище» сохраняет переменные на каждом компьютере пользователя и восстанавливает их при открытии проекта. Если у пользователя открыто несколько окон/вкладок проекта, изменения будут синхронизироваться между этими окнами.","cloudVariables-ws":"Подключение к серверу облачных переменных","cloudVariables-ws-help":"Функция \\"Подключение к серверу облачных переменных\\" синхронизирует переменные с другими пользователями.","cloudVariablesHost":"Облачный хост","colors":"Цвета","confirmImportUnsafe":"Эти настройки используют расширенные функции, такие как настраиваемый JS, который запускает неизвестный и, возможно, вредоносный код на вашем компьютере. Импортируйте этот файл только в том случае, если вы доверяете человеку, который его создал. Если вы не уверены, что это означает, вам, вероятно, не следует импортировать эти настройки.","controls":"Управление","controlsHelp":"Если все элементы управления отключены, панель элементов управления полностью убирается. Если включен только полноэкранный режим, то его кнопка всегда будет располагаться в верхнем левом углу, а не в заголовке элементов управления.","cursorCenter":"Центр курсора:","cursorHelp":"Изображения размером до 32х32 работают лучше всего. Изображения большего размера могут работать неправильно.","customCSS":"Пользовательский CSS (Не трогай, если не знаешь, что это!)","customCursor":"Пользовательский указатель мыши","customExtensions":"Собственные дополнения (по одной ссылке в строке)","customExtensionsSecurity":"Пользовательские расширения всегда запускаются в не режиме песочницы в упаковщике. В зависимости от среды, для которой вы выполняете упаковку, это предоставляет расширениям полный контроль над вашим компьютером, включая возможность установки вирусов. Не используйте расширения, которым вы не доверяете.","customJS":"Собственный JS (Не трогай, если не знаешь, что это!)","customUsernameWarning":"Будьте осторожны, изменяя имя пользователя по умолчанию, т.к. это может вызвать блокировку соединения к штатному серверу облачных переменных. Только имя пользователя, выставленное по умолчанию, гарантирует нормальную работу.","defaultControls":"По умолчанию","doNothing":"Ничего не делать","downloadsWillAppearHere":"Загрузки будут отображаться здесь","dynamicResize":"Динамическое изменение размера сцены для соответствия размеру экрана (экспериментально)","editableLists":"Изменяемые списки","enableCompiler":"Включить компилятор","environment":"Окружение","escapeBehavior":"Когда клавиша escape нажата","exitOnly":"Только выйти","export":"Экспортировать Настройки","foregroundColor":"Цвет переднего плана (шкала загрузки, некоторые значки и текст)","framerate":"Частота кадров","gamepad":"Поддержка USB и Bluetooth геймпадов/контроллеров","gamepadHelp":"Основано на аддоне «Поддержка геймпадов».","highQualityPen":"Перо в Высоком Качестве","html":"Обычный HTML (автономный, работает где угодно)","icon":"Значок страницы","implicitCloudHint":"Примечание: Любая переменная, у которой название начинается с \\"{cloud}\\", будет конвертирована в облачную переменную, независимо от настроек.","import":"Импортировать Настройки","infiniteClones":"Бесконечные клоны","initalWindowSize":"Первоначальный размер окна","interaction":"Ввод","interpolation":"Интерполяция","learnMore":"Узнать больше","listColor":"Цвет списков","loadingScreen":"Экран Загрузки","loadingScreenImage":"Изображение на экране загрузки","loadingScreenText":"Текст на экране загрузки","loadingScreenTextPlaceholder":"(Ничего)","maxTextureDimension":"Увеличьте максимальное разрешение векторных костюмов, чтобы большие костюмы выглядели лучше. Может увеличить использование памяти и привести к сбоям.","mode":"Режим","monitors":"Отображение переменных/списков","noCloudVariables":"Этот проект не содержит облачных переменных.","noControls":"Скрытый (бескадровый)","noCursor":"Указатель мыши убран","normalCursor":"Обычный указатель мыши","otherEnvironments":"Прочее окружение (Нажми, чтобы открыть)","otherEnvironmentsHelp":"В большинстве новых проектах следует использовать перечисленные выше параметры вместо этих.","package":"Упаковать","packageName":"Название пакета","packageNameHelp":"Название пакета должно быть таким именем, которое будет использовано только вашим приложением. Проект должен иметь такое название, как и название пакета.","packagedRuntime":"Удалите raw данные после загрузки, чтобы сэкономить оперативную память","pageTitle":"Заголовок страницы","playerOptions":"Настройки Игрока","pointerlock":"Заблокировать курсор мыши","pointerlockHelp":"Основано на TurboWarp Experiment.","preserveRatio":"Сохранять соотношение сторон при изменении размера (рекомендуется)","preview":"Предпросмотр","projectId":"ID проекта","projectIdHelp":"ID проекта используется при подключении к облачному серверу переменных и сохранении локальных облачных переменных. Он может содержать не только цифры.","removeFencing":"Убрать Рамку","removeMiscLimits":"Удалить Разные Ограничения","resetAll":"Сбросить Все Настройки","runtimeOptions":"Опции Выполнения","showFlag":"Показать кнопку зелёного флажка в элементах управления","showFullscreen":"Показать кнопку полноэкранного режима в элементах управления","showPause":"Показать кнопку паузы среди элементов управления","showProgressBar":"Показывать шкалу загрузки","showStop":"Показать кнопку остановки в элементах управления","sizeNormal":"Отображать в нормальном размере","sizeStretch":"Заполнить экран","specialCloudBehaviors":"Особое поведение облачных переменных, наподобии HTMLifier","stage":"Сцена","stageSize":"Пользовательский Размер Сцены","startFullscreen":"Запустить в полноэкранном режиме","startMaximized":"Запустить развёрнутым окном","startWindow":"Запустить окном","steamworksIgnore":"Ничего не делать","storedWarning":"Примечание. В этом проекте хранятся настройки, которые могут иметь приоритет над этими настройками.","stretch":"Растянуть сцену до заполнения экрана без изменения фактического размера (экспериментально)","turbo":"Турбо Режим","unFullscreenOnly":"Оставить только полноэкранный режим","unFullscreenOrExit":"Оставить полноэкранный режим и выйти","unsafeCloudBehaviors":"Дополнительные небезопасные особенности поведения в облаке","unsafeCloudBehaviorsWarning":"Небезопасное поведение в облаке позволяет упакованному проекту выполнять произвольный код за пределами «песочницы», в которой обычно выполняются проекты. В зависимости от среды, для которой выполняется упаковка, это предоставляет проектам полный контроль над вашим компьютером, включая возможность установки вирусов. Если вы не доверяете пакетируемому проекту, отключите эту опцию.","username":"Имя пользователя (символы \\"#\\" будут заменены случайными цифрами)","variableColor":"Цвет переменных","version":"Версия","versionHelp":"Обновление версии совершенно необязательно и не влияет на поведение вашего проекта. Это может отображаться в таких местах, как экраны \\"О программе\\", в зависимости от среды. Должно быть отформатировано как X.Y.Z.","warpTimer":"Warp Таймер","windowControls":"Контроль окна","zip":"Zip (идеально для веб-сайтов)","zip-one-asset":"Сжатие, объединение ресурсов в одном файле (не рекомендуется)"},"p4":{"browserNotSupported":"Браузер не поддерживается","browserNotSupportedDescription":"Пожалуйста, обновите Ваш браузер.","cannotAccessProject":"Не удается получить доступ к токену проекта. Обычно это означает, что проект недоступен, никогда не существовал, идентификатор недействителен или ваша сеть заблокирована turbowarp.org.","cannotAccessProjectCaching":"Если проект недавно был опубликован, это сообщение может исчезнуть через несколько минут.","close":"Закрыть","description1":"Конвертация проектов Scratch в файлы HTML, zip архивы или приложения для Windows, macOS и Linux.","description2":"Если вы хотите простым способом встроить проект на ваш веб-сайт, вас может заинтересовать {embedding}.","description2-embedding":"Встраивание","description3":"Сообщайте о багах, предлагайте идеи, оставляйте отзывы {onScratch} или {onGitHub}.","description3-on":"на {brand}","disclaimer":"Этот сайт не связан со Scratch, Командой Scratch или Фондом Scratch.","documentation":"Дополнительные ресурсы и помощь","donate":"Пожертвовать","error":"Ошибка","errorMessage":"Сообщение: {error}","feedback":"Обратная связь","importingInterface":"Загрузка настроек...","networkError":"Не удаётся скачать {url}. Убедитесь, что Вы подключены к Интернету и попробуйте отключить расширения браузера.","outdated":"Эта версия упаковщика, похоже, устарела. Пожалуйста, обновите страницу и повторите попытку.","privacy":"Политика Конфиденциальности","refresh":"Обновить страницу","reportBug":"Сообщить о Баге","sourceCode":"Исходный Код","unknownImportError":"Что-то пошло не так. Пожалуйста, обновите страницу и повторите попытку."},"preview":{"loading":"Загрузка Превью"},"progress":{"compressingProject":"Сжатие проекта","downloadingExtensions":"Загрузка пользовательских расширений","loadingAssets":"Загрузка ресурсов ({complete}/{total})","loadingLargeAsset":"Загрузка {thing}","loadingProjectData":"Загрузка данных проекта","loadingProjectMetadata":"Загрузка метаданных проекта","loadingScripts":"Загрузка скриптов","packagingProject":"Упаковка проекта"},"reset":{"confirm":"Вы уверенны, что хотите сбросить настройки? Это нельзя отменить.","confirmAll":"Вы уверены, что хотите сбросить ВСЕ настройки? Это действие нельзя будет отменить.","reset":"Сбросить"},"select":{"file":"Файл","id":"ID проекта Scratch или ссылка на него","invalidId":"Некорректный ID проекта","invalidUrl":"Некооректная ссылка","loadProject":"Загрузить проект","loadToContinue":"Загрузите проект, чтобы продолжить","noFileSelected":"Файл не выбран","select":"Выберите проект","selectHelp":"Выберите проект, который вы хотите упаковать, скопировав и вставив ссылку на проект Scratch или используя один из других режимов. Если Вы используете проект, сделанный не Вами, то не забудьте упомянуть автора.","unsharedProjects":"Проекты, не выложенные в открытый доступ более не доступны через идентификатор объекта в связи с изменением Scratch API.","unsharedProjectsMore":"Подробнее и об обходных приёмах, посетите: {link}","unsharedProjectsWorkaround":"Вместо этого вы можете либо поделиться проектом, либо сохранить проект на свой компьютер (Файл > Сохранить на свой компьютер) и загрузить файл в упаковщик. Файлы, сгенерированные упаковщиком, полностью автономны и не затрагиваются этими изменениями.","url":"Другой URL"},"theme":{"dark":"Тёмная","light":"Светлая","system":"Использовать системную тему"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"Prenesi {filename} ({size})","useWorkaround":"Kliknite tukaj, če povezava za prenos ne deluje"},"fileInput":{"clear":"Odstrani izbiro","select":"Izberite ali povlecite datoteko","selected":"Izbrano: {file}"},"import":{"cancel":"Prekliči","description":"To lahko traja nekaj časa, če je projekt velik."},"options":{"accentColor":"Barva poudarkov (aktivni gumbi, polje za vnos odgovora, kontekstni meniji)","advancedOptions":"Napredne možnosti","advancedSummary":"Teh verjetno nočete spremeniti. (Kliknite, da odprete)","application-mac":"Aplikacija {type} za macOS","applicationSettings":"Nastavitve aplikacije","automaticallyCenter":"Samodejno določi sredino","autoplay":"Samodejno začni namesto prikazovanja velike zelene zastavice","backgroundColor":"Barva ozadja","closeWhenStopped":"Zapri okno, ko se projekt ustavi","cloudVariables":"Spremenljivke v oblaku","cloudVariables-custom":"Napredno","cloudVariables-custom-help":"\\"Napredno\\" uporabi drugačen način za vsako spremenljivko, tako da lahko npr. do nekaterih dostopajo vsi uporabniki, druge pa so shranjene lokalno.","cloudVariables-ignore":"Ignoriraj","cloudVariables-ignore-help":"\\"Ignoriraj\\" spremeni spremenljivke v oblaku v navadne spremenljivke.","cloudVariables-local":"Shrani lokalno","cloudVariables-local-help":"\\"Shrani lokalno\\" shrani spremenljivke v računalniku posameznega uporabnika in jih spet prebere, ko ta odpre projekt. Če uporabnik odpre več oken/zavihkov s projektom, bodo vsaka sprememba vidna v vseh oknih.","cloudVariables-ws":"Poveži s strežnikom za spremenljivke v oblaku","cloudVariables-ws-help":"\\"Poveži s strežnikom za spremenljivke v oblaku\\" sinhronizira spremembe z drugimi uporabniki.","cloudVariablesHost":"Gostitelj oblaka","colors":"Barve","confirmImportUnsafe":"Te nastavitve vsebujejo napredne možnosti, kot je JS po meri, ki na vašem računalniku izvedejo neznano in morda nevarno kodo. To datoteko uvozite samo, če zaupate osebi, ki jo je naredila. Če niste prepričani, kaj to pomeni, je bolje, če teh nastavitev ne uvozite.","controls":"Gumbi","controlsHelp":"Če so vsi gumbi izključeni, bo cela vrstica z gumbi odstranjena. Če je vključen le gumb za celoten zaslon, bo vedno v zgornjem levem kotu in ne v vrstici z gumbi.","cursorCenter":"Sredina kazalca:","cursorHelp":"Najbolje delujejo slike velikosti do 32x32. Večje slike so lahko nezanesljive.","customCSS":"CSS po meri (Ne spreminjajte, če ne veste, kaj počnete!)","customCursor":"Kazalec po meri","customExtensions":"Razširitve po meri (en URL v vsaki vrstici)","customJS":"JS po meri (Ne spreminjajte, če ne veste, kaj počnete!)","downloadsWillAppearHere":"Prenosi bodo prikazani tu","dynamicResize":"Samodejno spremeni velikost, da se ujema z velikostjo okna (poskusno)","editableLists":"Omogoči urejanje seznamov","enableCompiler":"Omogoči prevajalnik","environment":"Okolje","export":"Izvozi nastavitve","foregroundColor":"Barva ospredja (vrstica napredka, nekatere ikone in besedilo)","framerate":"Sličice na sekundo","highQualityPen":"Visoka ločljivost svinčnika","html":"Samo HTML (samostojna datoteka, deluje kjerkoli)","icon":"Ikona strani","import":"Uvozi nastavitve","infiniteClones":"Neskončno klonov","interaction":"Vhod","interpolation":"Interpolacija","learnMore":"Več informacij","listColor":"Barva seznamov","loadingScreen":"Nalaganje","loadingScreenImage":"Slika med nalaganjem","loadingScreenText":"Besedilo med nalaganjem","loadingScreenTextPlaceholder":"(Brez)","mode":"Način","monitors":"Prikaz spremenljivk in seznamov","noCloudVariables":"Ta projekt ne vsebuje spremenljivk v oblaku.","noCursor":"Brez kazalca","normalCursor":"Običajni kazalec","otherEnvironments":"Druga okolja (Kliknite, da odprete)","otherEnvironmentsHelp":"Za večino novih projektov so primernejše zgornje možnosti.","package":"Paket","packageName":"Ime paketa","packageNameHelp":"Ime paketa mora biti unikatno ime, ki ga uporablja samo vaša aplikacija. Isti projekt naj ima vedno isto ime paketa.","pageTitle":"Naslov strani","playerOptions":"Možnosti predvajalnika","pointerlock":"Zakleni kazalec miške","preserveRatio":"Ohrani razmerje stranic pri spremembi velikosti (priporočeno)","preview":"Predogled","projectId":"ID projekta","removeFencing":"Odstrani omejitve premikanja figur","removeMiscLimits":"Odstrani razne omejitve","resetAll":"Ponastavi vse","runtimeOptions":"Možnosti izvajanja","showFlag":"Pokaži gumb z zeleno zastavico","showFullscreen":"Pokaži gumb za celoten zaslon","showPause":"Pokaži gumb za premor","showProgressBar":"Pokaži vrstico napredka","showStop":"Pokaži gumb za zaustavitev","sizeNormal":"Pokaži v navadni velikosti","sizeStretch":"Napolni zaslon","specialCloudBehaviors":"Posebno vedenje spremenljivk v oblaku kot v HTMLifier","stage":"Oder","stageSize":"Velikost odra po meri","startFullscreen":"Začni v celozaslonskem načinu","startMaximized":"Začni v razširjenem oknu","startWindow":"Začni v oknu","storedWarning":"Opomba: V tem projektu so shranjene nastavitve, ki lahko povozijo te nastavitve.","stretch":"Raztegni oder, da napolni zaslon, brez spreminjanja dejanske velikosti (poskusno)","turbo":"Turbo način","username":"Uporabniško ime (vsak \\"#\\" bo zamenjan z naključno številko)","variableColor":"Barva spremenljivk","version":"Različica","zip":"Zip (priporočeno za spletne strani)","zip-one-asset":"Stisnjena mapa, vse slike in zvoki v eni datoteki (ni priporočeno)"},"p4":{"browserNotSupported":"Brskalnik ni podprt","browserNotSupportedDescription":"Prosimo, da posodobite svoj brskalnik.","close":"Zapri","description1":"Spremeni Scratcheve projekte v datoteke HTML, zip ali izvedljive programe za Windows, macOS in Linux.","description2":"Če potrebujete samo enostaven način vgradnje projekta v svojo spletno stran, lahko preberete dokumentacijo o {embedding}.","description2-embedding":"vgradnji","description3":"Prijavite napake in predlagajte izboljšave {onScratch} ali {onGitHub}.","description3-on":"na {brand}","disclaimer":"Ta spletna stran ni povezana s Scratchem, skupino Scratch ali fundacijo Scratch.","documentation":"Dodatno gradivo in pomoč","donate":"Prispevaj","error":"Napaka","errorMessage":"Sporočilo: {error}","feedback":"Povratne informacije","networkError":"Prenašanje {url} ni uspelo. Prepričajte se, da ste povezani z internetom, in poskusite izključiti vse razširitve brskalnika.","outdated":"Ta različica Packagerja je zastarela. Prosimo, da ponovno naložite stran in poskusite znova.","privacy":"Politika zasebnosti","refresh":"Znova naloži","reportBug":"Prijavite napako","sourceCode":"Izvirna koda","unknownImportError":"Prišlo je do napake. Prosimo, da ponovno naložite stran in poskusite znova."},"preview":{"loading":"Nalaganje predogleda"},"progress":{"compressingProject":"Stiskanje projekta","loadingAssets":"Prenašanje videzov in zvokov ({complete}/{total})","loadingLargeAsset":"Prenašam {thing}","loadingProjectData":"Prenašanje podatkov projekta","loadingProjectMetadata":"Prenašanje podatkov o projektu","loadingScripts":"Prenašanje skript","packagingProject":"Pakiranje projekta"},"reset":{"confirm":"Ste prepričani, da želite te nastavitve ponastaviti? Tega ni mogoče razveljaviti.","confirmAll":"Ste prepričani, da želite ponastaviti VSE nastavitve? Tega ni mogoče razveljaviti.","reset":"Ponastavi"},"select":{"file":"Datoteka","id":"ID ali URL projekta na Scratchu","invalidId":"ID projekta ni veljaven","invalidUrl":"Neveljaven URL","loadProject":"Naloži projekt","loadToContinue":"Za nadaljevanje naložite projekt","noFileSelected":"Datoteka ni izbrana","select":"Izberite projekt","selectHelp":"Izberite projekt, ki bi ga radi zapakirali. Lahko prilepite povezavo na projekt na Scratchu ali uporabite enega od ostalih načinov. Če uporabite projekt, ki ga niste naredili, ne pozabite navesti avtorja.","unsharedProjects":"Dostop do nedeljenih projektov z njihovim ID-jem ni več mogoč zaradi sprememb v Scratchevem programskem vmesniku.","url":"Drug URL"},"theme":{"dark":"Temno","light":"Svetlo","system":"Uporabi temo sistema"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"Ladda ned {filename} ({size})","useWorkaround":"Klicka här om nedladdningslänken funkar inte"},"fileInput":{"clear":"Rensa urval","select":"Välj eller släpp fil","selected":"Vald {file}"},"import":{"cancel":"Avbryt","description":"Detta kommer att ta en stund om projektet är för stort","header":"Importerar projekt..."},"options":{"accentColor":"Accentfärg (aktiva/svävade kontroller, frågprompt, snabbmenyer)","advancedOptions":"Avancerade alternativ","advancedSummary":"Du kommer inte vilja att ändra dessa. (Klicka för att öppna)","application-linux-arm32":"{type} Linux applikation för ARM (32-bit)","application-linux-arm64":"{type} Linux applikation för ARM (64-bit)","application-mac":"{type} MacOS applikation","application-win-arm":"{type} Windows applikation för ARM","applicationSettings":"Applikationsinställningar","automaticallyCenter":"Automatiskt centrera","autoplay":"Starta projektet automatiskt istället för att visa en stor grön flagga","autoplayHint":"Observera: Många webbläsare kommer inte att tillåta webbsidor att spela ljud, så ljud kanske inte spelas upp förrän användaren interagerar med projektet.","backgroundColor":"Bakgrundsfärg","bakeExtensions":"Försök att bädda in kopian av anpassade tillägg istället för att ladda ner dem varje gång projektet körs","closeWhenStopped":"Stäng fönstret när projektet stoppar","cloudVariables":"Molnvariabler","cloudVariables-custom":"Avancerat","cloudVariables-custom-help":"\\"Avancerade\\" använder ett annat läge för varje variabel, så några variabler kan synca med andra användare men andra kan vara sparade lokalt, till exempel.","cloudVariables-ignore":"Ignorera","cloudVariables-ignore-help":"\\"Ignorera\\" använd molnvariabler som vanliga variabler","cloudVariables-local":"Spara i lokal lagring","cloudVariables-local-help":"\\"Spara i lokala minnet\\" sparar variabler på varje användares dator och återställer dem när projektet är öppnat. Om en användare har flera fönster/flikar av projektet öppna, ändringar kommer att synca mellan de där fönstren.","cloudVariables-ws":"Anslut till molnvariabelserver","cloudVariables-ws-help":"\\"Koppla till molnvariablernas server\\" syncar variabler med andra användare","cloudVariablesHost":"Molnvärd","colors":"Färger","confirmImportUnsafe":"Dessa inställningar använder avancerade funktioner som anpassad JS som kör okända och kanske skadlig kod på din dator. Importera denna fil om du litar på den som gjorde projektet. Om du inte vet vad detta betyder så betyder det att du ska inte importera dessa inställningar.","controls":"Kontroller","controlsHelp":"Om alla kontrollerna är avaktiverade så tas kontrollfältet bort helt. Om bara helskärm är aktiverat så kommer den alltid att vara i det övre vänstra hörnet, inte i kontrollernas rubrik.","cursorCenter":"Pekarens center:","cursorHelp":"Bilder upp till 32x32 funkar bäst. Större bilder kommer kanske inte funka tillförlitligt. ","customCSS":"Anpassad CSS (Ändra inte om du inte vet vad du gör)","customCursor":"Anpassad muspekare","customExtensions":"Anpassade tillägg (ett URL per linje)","customExtensionsSecurity":"Anpassade tillägg är alltid körda utan sandlåda i paketeraren. Beroende på miljön som du packar för kommer detta garantera full kotroll över din dator, även förmågan att installera virus. Använd inte tillägg som du inte litar på.","customJS":"Anpassad JS (Ändra inte om du inte vet vad du gör)","customUsernameWarning":"Var försiktig när du ändrar standardanvändarnamnet eftersom det kan göra att anslutningar till standardmolnvariabelservern blockeras. Endast standardanvändarnamnet är garanterat att fungera.","doNothing":"Gör inget","downloadsWillAppearHere":"Nedladdningar visas här","dynamicResize":"Ändra storleken för att matcha fönstrets storlek (experimental)","editableLists":"Redigerbara listor","enableCompiler":"Aktivera kompilatorn","environment":"Miljö","export":"Exportera Inställningar","foregroundColor":"Förgrundsfärg (förloppsindikator, ikoner, text)","framerate":" Uppspelningshastighet","gamepad":"Stöd USB eller Bluetooth gamepads/kontroller","gamepadHelp":"Baserad på \\"Gamepad stöd\\" tillägget","highQualityPen":"Högkvalitativ penna","html":"Planera HTML (fristående, funkar var som helst)","icon":"Sidans bild","implicitCloudHint":"Tips: Vilken variabel som helst som börjar med \\"{cloud}\\" kommer att bli konverterad till en molnvariabel oavsett om den var markerat som en.","import":"Importera inställningar","infiniteClones":"Oändliga kloner","interaction":"Inmatning","interpolation":"Interplotation","learnMore":"Lär mer","listColor":"Färg på listorna","loadingScreen":"Laddar skärmen","loadingScreenImage":"Laddar skämbild","loadingScreenText":"Laddar skärmtext","loadingScreenTextPlaceholder":"(Inget)","maxTextureDimension":"Öka maximala vektorkostymens kvalité för att för stora kostymer ska se ut bättre. Kan öka minnesanvändning och orsaka kraschar. ","mode":"Läge","monitors":"Övervakar","noCloudVariables":"Detta projekt innehåller inte molnvariabler.","noCursor":"Ingen muspekare","normalCursor":"Normal muspekare","otherEnvironments":"Andra miljöer (Klicka för att öppna)","otherEnvironmentsHelp":"De flesta nya projekt ska ha de alternativ över.","package":"Paket","packageName":"Paketets namn","packageNameHelp":"Paketets namn ska vara ett unikt namn använt bara av din applikation. Samma projekt ska ha samma namn på paketet.","packagedRuntime":"Ta bort rå tillgångsdata efter laddning för att spara RAM","pageTitle":"Sidans namn","playerOptions":"Spelaralternativ","pointerlock":"Lås muspekaren","pointerlockHelp":"Baserad på ett TurboWarp experiment.","preserveRatio":"Bevara bildförhållandet när du ändrar storlek (rekomenderat)","preview":"Förhandsvisning","projectId":"Projekt ID","projectIdHelp":"Projekt ID är använt när du kopplas med en molnvariabel server och när du sparar lokala molnvariabler. Det kan innehålla mer än bara nummer.","removeFencing":"Ta bort scengränser","removeMiscLimits":"Ta bort diverse gränser","resetAll":"Återställ alla inställningar","runtimeOptions":"Körtidsalternativ","showFlag":"Visa gröna flaggan i kontrolerna","showFullscreen":"Visa helskärmsknapp i kontrollerna","showPause":"Visa pausknappen i konrollerna","showProgressBar":"Visa förloppsindikator","showStop":"Visa stopknappen i kontrollerna","sizeNormal":"Visa i normal storlek","sizeStretch":"Fyll skärmen","specialCloudBehaviors":"Speciala molnvariabler beter sig som HTMLifier","stage":"Scen","stageSize":"Anpassad scenstorlek:","startFullscreen":"Starta i helskärm","startMaximized":"Starta som maximerat fönster","startWindow":"Starta som fönster","steamworksIgnore":"Gör inget","storedWarning":"Observera: Detta projekt har inställningar sparade i sig som kanske kommer åsidosätta dessa inställingar.","stretch":"Sträck ut scenen för att fylla skärmen utan att ändra verkliga storlek en (experimentell)","turbo":"Turboläge","unFullscreenOnly":"Lämna bara helskärm","unFullscreenOrExit":"Lämna helskärm eller avsluta","unsafeCloudBehaviors":"Ytterligare osäkra speciella molnbeteenden","unsafeCloudBehaviorsWarning":"Osäkra moln beteenden tillåter det packade projektet att köra slumpmässig kod utanför \\"sandboxen\\" som projekt vanligtvis körs i. Beroende på miljön som du packar för, detta garanterar full kontroll över din dator, inklusive förmågan att installera virus. Om du inte litar på projektet du packar, stäng av detta alternativ. ","username":"Användarnamn (varje \\"#\\" blir utbyten mot en slumpmässigt nummer)","variableColor":"Variabel färg","versionHelp":"Att uppdatera versionen är frivilligt och kommer inte påverka dina projekts beteende. Det kan förekomma på plaster som skärmar beroende på miljön. Ska vara formaterat som X.Y.Z.","zip":"Zip (idealisk för webbsidor)","zip-one-asset":"Zip, kombinera tillgångar till en enda fil (inte rekomenderat)"},"p4":{"browserNotSupported":"Webbläsaren stöds inte","browserNotSupportedDescription":"Uppdatera din webbläsare.","cannotAccessProject":"Kan inte åtkomma projektens token. Detta betyder främst att projektet är odelat, aldrig existerade, eller är ID:et felaktigt, eller blockerar ditt nätverk turbowarp.org.","cannotAccessProjectCaching":"Om projektet har varigt delat nyligen så kommer det ta några minuter för detta meddelande att gå bort","close":"Stäng","description1":"Konverterar Scratch projekt till HTML filer, zip arkiv eller program som kan köras på Windows, MacOS och Linux.","description2":"Om du vill ha det lätt att bifoga ett projekt till don webbsida så kommer du kanske vara intresserad i {embedding}","description2-embedding":"Inbäddning","description3":"Rapportera buggar, ge feedback och idéer {onScratch} eller {onGitHub}","description3-on":"på {brand}","disclaimer":"Denna sida är inte ansluten med Scratch, Scratch teamet eller Scratchstiftelsen.","documentation":"Ytterligare resurser och hjälp","donate":"Donera","error":"Fel","errorMessage":"Meddelande: {error}","feedback":"Respons","importingInterface":"Laddar alternativ...","networkError":"Kunde inte ladda ned {url}. Titta om du har internet och försök att avaktivera tillägg i webbläsaren.","outdated":"Denna version av paketeraren ser ut som vara gammal. Ladda om och försök igen.","privacy":"Integritetspolicy","refresh":"Hämta igen","reportBug":"Rapportera bugg","sourceCode":"Källkod","unknownImportError":"Något gick fel. Ladda om och försök igen."},"preview":{"loading":"Ladda förhandsvisning"},"progress":{"compressingProject":"Kompressar projekt","downloadingExtensions":"Laddar ned anpassade tillägg","loadingAssets":"Hämtar tillgångar({complete}/{total})","loadingLargeAsset":"Laddar ned {thing}","loadingProjectData":"Hämtar projektdata","loadingProjectMetadata":"Hämtar projektets metadata","loadingScripts":"Laddar ned skripter","packagingProject":"Packar projekt"},"reset":{"confirm":"Är du säker på att du vill återställa dessa inställningar? Detta kan inte ångras.","confirmAll":"Är du säker på att du vill återställa ALLA inställningar? Detta kan inte ångras.","reset":"Starta om"},"select":{"file":"Fil","id":"Scratch projekt ID eller URL","invalidId":"Ogiltigt projekt ID","invalidUrl":"Ogiltig URL","loadProject":"Ladda in projekt","loadToContinue":"Ladda ett projekt för att fortsätta","noFileSelected":"Ingen fil vald","select":"Välj Projekt","selectHelp":"Välj projektet du vill paketera genom att kopiera och klistra in projektets Scratch link eller att använda ett annat läge. Om du använder ett projekt du inte gjorde, se till att kreditera skaparen.","unsharedProjects":"Odelade projekt kommer inte vara tillgängliga med deras ID på grund av Scratch API ändringar.","unsharedProjectsMore":"För mer information och omvägar, besök: {link}","unsharedProjectsWorkaround":"Istället kan du dela projektet eller spara projektet till din dator (Filer > Spara till din dator) och ladda file i paketeraren. Filer genererade från paketeraren är helt fristående och påverkas inte av dessa förändringar.","url":"Annan URL"},"theme":{"dark":"Svart","light":"Ljus","system":"Använd systemtemat"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"İndir{filename}({size})","useWorkaround":"İndirme bağlantısı çalışmazsa buraya tıklayın"},"fileInput":{"clear":"Seçimi Temizle","select":"Dosyayı şeçin yada buraya bırakın","selected":"{file}seçilmiştir"},"import":{"cancel":"İptal","description":"Proje büyükse biraz zaman alabilir","header":"Proje İçe Aktarılıyor"},"options":{"accentColor":"Vurgu rengi (etkin/gezintili kontroller, soru istemi, bağlam menüleri)","advancedOptions":"Gelişmiş ayarlar","advancedSummary":"Bunları değiştirmeyi bence istemezsiniz. (Açmak için tıklayın)","application-linux-arm32":"ARM için {type} Linux uygulaması (32 bit)","application-linux-arm64":"ARM için {type} Linux uygulaması (64 bit)","application-mac":"{type} macOS uygulaması","application-win-arm":"ARM için {type} Windows uygulaması","applicationSettings":"Uygulama ayarları","automaticallyCenter":"Otomatik merkez","autoplay":"Projeyi otomatik olarak başlatın","autoplayHint":"Not: Çoğu tarayıcılar websitelerin otomatik olarak ses çalmasına izin vermez, dolayısıyla sesler kullanıcı projeyle etkileşime geçinceye kadar çalmayabilir.","backgroundColor":"Arka-plan rengi","bakeExtensions":"Proje her çalıştırıldığında bunları indirmek yerine, özel uzantıların önbelleğe alınmış kopyasını yerleştirmeyi deneyin","closeWhenStopped":"Proje durduğunda pencereyi de kapat","cloudVariables":"Bulut değişkenleri","cloudVariables-custom":"Gelişmiş","cloudVariables-custom-help":"\\"Gelişmiş\\" her değişken için farklı modu kullanıyor, yanı bazı değişkenler başka kullanacılarla senkronize edebilir ancak diğerleri örneğin yerel olarak depolanabilir.","cloudVariables-ignore":"Yoksay","cloudVariables-ignore-help":"\\"Yoksay\\" bulut değişkenleri normal değişkener olarak çalıştırıyor.","cloudVariables-local":"Yerel depolamada saklayın","cloudVariables-local-help":"\\"Yerel depoda saklayın\\" değişkenleri kullanıcının bilgisayarında saklar ve projeyi açılırsa bunları geri yükler. Bir kullanıcının projenin birden çok penceresi/sekmesi açıksa, değişiklikler bu pencereler arasında eşitlenir.","cloudVariables-ws":"Bulut değişkenler sunucuya bağlanın","cloudVariables-ws-help":"\\"Bulut değişkenler sunucuya bağlanın\\" değişkenleri diğer kullanıcılarla senkronize eder.","cloudVariablesHost":"Bulut ana bilgisayarı","colors":"Renkler","confirmImportUnsafe":"Bu ayarlar, bilgisayarınızda bilinmeyen ve muhtemelen kötü amaçlı kod çalıştıran özel JS gibi gelişmiş özellikleri kullanır. Bu dosyayı yalnızca onu oluşturan kişiye güveniyorsanız içe aktarın. Bunun ne anlama geldiğinden emin değilseniz muhtemelen bu ayarları içe aktarmamalısınız.","controls":"Kontroller","controlsHelp":"Eğer bütün kontroller devre dışı bırakılırsa kontrol çubuğu artık gösterilemez. Yalnızca tam ekran etkinleştirilirse, kontroller başlığında değil, her zaman sol üst köşede bulunur.","cursorCenter":"İmleç merkezi","cursorHelp":"32x32\'ye kadar olan resimler en iyi görünebilir. Daha büyük resimler doğru düzgün bir şekilde çalışmayabilir. ","customCSS":"Özel CSS (Eğer ne yaptığınızı bilmiyorsanız değiştirmeyin!)","customCursor":"Değişik kürsör","customExtensions":"Öze eklentiler (satır başına bir URL)","customExtensionsSecurity":"Özel eklentiler sandbox\'lanmadan çalıştırılır. Virüs içermelerine karşın güvenmediğiniz eklentileri kullanmayın.","customJS":"Özel JS (Eğer sen ne yapmayı bilmiyorsan burada hiç bir şey yapma)","customUsernameWarning":"Varsayılan bulut değişken sunucusuna olan bağlantıları engelleyebileceğinden dolayı, lütfen varsayılan kullanıcı adını değiştirirken dikkatli olun. Sadece varsayılan kullanıcı adının çalışacağı garanti edilmiştir.","doNothing":"Hiçbir şey yapmayın","downloadsWillAppearHere":"İndirilenler burada görünecek","dynamicResize":"Pencere büyüklüğüyle eşitlemek için dinamik olarak yeniden boyutlandır (deneysel)","editableLists":"Düzenlenebilen listeler","enableCompiler":"Derlemeyi aç","environment":"Çevre","escapeBehavior":"Esc, Escape tuşuna basıldığında","exitOnly":"Sadece çıkış","export":"Ayarları dışa aktar","foregroundColor":"Ön-plan rengi (ilerleme çubuğu, bazı simgeler, bazı metinler)","framerate":"Karehızı","gamepad":"USB yada Bluetooth oyun kumandaları kullanabilirsin","gamepadHelp":"\\"Gamepad desteği\\" eklentisine dayanmaktadır.","highQualityPen":"Yüksek kalite kalem","html":"Sade HTML (bağımsız, her yerde çalışır)","icon":"Sayfa simgesi","implicitCloudHint":"İpucu: Any variable with a name starting with \\"{cloud}\\" ile başlayan bir ad taşıyan tüm değişkenler bulut olarak işaretlendiğinden bağımsız olarak bulut değişkenine dönüştürülecektir.","import":"Ayarları içe aktar","infiniteClones":"Sonsuz klonlar","initalWindowSize":"İlk pencere boyutu","interaction":"Giriş","interpolation":"Enterpolasyon","learnMore":"Daha fazla bilgi edin","listColor":"Liste rengi","loadingScreen":"Yükleme ekranı","loadingScreenImage":"Yükleme ekran resimi","loadingScreenText":"Yükleme ekran metini","loadingScreenTextPlaceholder":"(Hiç birşey)","maxTextureDimension":"Büyük kostümlerin daha iyi görünmesini sağlamak için maksimum vektör kostüm çözünürlüğünü artırın. Bellek kullanımını artırabilir ve çökmelere neden olabilir.","mode":"Modu","monitors":"Monitörlar","noCloudVariables":"Bu proje bulut değişkenleri içermez.","noCursor":"Kürsör yok","normalCursor":"Normal kürsör","otherEnvironments":"Diğer ortamlar (Tıklayarak açın) ","otherEnvironmentsHelp":"Çoğu yeni proje, bunun yerine yukarıda listelenen seçenekleri kullanılmalıdır. ","package":"Paketle","packageName":"Paket Adı","packageNameHelp":"Paket adı, yalnızca uygulamanız tarafından kullanılan benzersiz bir ad olmalıdır. Aynı proje hep aynı paket adı olmalıdır. ","packagedRuntime":"Ham varlıkları RAM\'den tasarruf etmek için sil","pageTitle":"Sayfa başlığı","playerOptions":"Oynatıcı ayarları","pointerlock":"Fare kürsörü kilitle","pointerlockHelp":"Bir TurboWarp Deneyine dayanmaktadır.","preserveRatio":"Yeniden boyutlandırıldığında en/boy oranını koru (önerilen)","preview":"Önizleme","projectId":"Proje ID\'si","projectIdHelp":"Project ID\'si bir bulut değişken sunucusuna bağlanırken ve yerel bulut değişkenlerini saklarken kullanılır. Sadece rakamlardan daha fazlasını içerebilir.","removeFencing":"Eskirimi çıkart","removeMiscLimits":"Çeşitli Limitleri Kaldır","resetAll":"Tüm ayarları sıfırla","runtimeOptions":"Çalışma Zamanı Seçenekleri","showFlag":"Yeşil bayrağı kontrollerde gösterin.","showFullscreen":"Büyük ekranı tuşunu kontrollerde gösterin.","showPause":"Kontrollerde duraklat düğmesini göster","showProgressBar":"İlerleme çubuğunu göster","showStop":"Dur tuşunu kontrollerde gösterin.","sizeNormal":"Normal büyüklükte göster","sizeStretch":"Ekranı doldur","specialCloudBehaviors":"HTMLifier gibi özel bulut değişkeni davranışları","stage":"Sahne","stageSize":"Özel Sahne Büyüklüğü","startFullscreen":"Tam ekranda başlat","startMaximized":"Büyütülmüş pencere olarak başlat","startWindow":"Pencere olarak başlat","steamworksIgnore":"Hiçbir şey yapmayın","storedWarning":"Not: Bu projenin içinde, bu ayarları geçersiz kılabilecek ayarlar bulunmaktadır.","stretch":"Asıl boyutu büyütmeden ekranı doldurmak için sahneyi büyüt (deneysel)","turbo":"Turbo Modu","unFullscreenOnly":"Yalnızca tam ekran bırakın","unFullscreenOrExit":"Tam ekrandan çıkın veya çıkın","unsafeCloudBehaviors":"Ek tehlikeli özel bulut davranışları","unsafeCloudBehaviorsWarning":"Tehlikeli bulut davranışları projelerin genellikle çalıştırıldığı \\"sandbox\\"un dışında paketlenmiş projenin keyfi kod çalıştırmasına olanak sağlar. Paketlemek istediğiniz ortama bağlı olarak, bu projelere bilgisayarınız üzerinde, virüs yüklemek dahil olmak üzere, tam yetki verir. Eğer paketledğiniz projeye güvenmiyorsanız, lütfen bu seçeneği devre dışı bırakın.","username":"Kullanıcı Adı (her \\"#\\" rastgele bir sayı ile değiştirililecek)","variableColor":"Değişken rengi","version":"Sürüm","versionHelp":"Sürümün güncellenmesi tamamen isteğe bağlıdır ve projenizin davranışını etkilemez. Ortama bağlı olarak yaklaşık ekranlar gibi yerlerde görünebilir. X.Y.Z. olarak biçimlendirilmelidir.","warpTimer":"Warp zamanlayıcı","zip":"Zip (web siteleri için iyidir)","zip-one-asset":"Zip, varlıkları tek bir dosyada birleştirin (hiç önerilmez)"},"p4":{"browserNotSupported":"Tarayıcı desteklenmiyor","browserNotSupportedDescription":"Lütfen tarayıcınızı güncelleyin.","cannotAccessProject":"Proje belirtecine erişilemiyor. Bu genellikle projenin paylaşılmadığı, hiçbir zaman var olmadığı, kimliğin geçersiz olduğu veya ağınızın turbowarp.org\'u engellediği anlamına gelir.","cannotAccessProjectCaching":"Proje yakın zamanda paylaşıldıysa bu mesajın kaybolması birkaç dakika sürebilir.","close":"Kapat","description1":"Scratch Projeleri Windows, macOS, ve Linux ile HTML dosyalara, zip arçivelere yada uygulamaya dönüştürebilir.","description2":"Bir projeyi web sitenize yerleştirmenin kolay bir yolunu istiyorsanız, {embedding} ilginizi çekebilir.","description2-embedding":"Gömmek","description3":"Hataları bildirin, geri bildirimde ve yeni fikirleri göstermek için {onScratch} veya {onGitHub} ile yapınız. ","description3-on":"{brand}\'de","disclaimer":"Bu site Scratch, Scratch Takımı veya Vakfı tarafından desteklenmemektedir.","documentation":"Ek kaynaklar ve yardım","donate":"Bağış Yapın","error":"Hata","errorMessage":"Mesaj: {error}","feedback":"Geribildirim","importingInterface":"Seçenekler yükleniyor...","networkError":"İndirilemedi {url}. İnternete bağlı olduğunuzdan emin olun ve tüm tarayıcı uzantılarını devre dışı bırakmayı deneyin.","outdated":"Paketleyicinin bu sürümü eski görünüyor. Lütfen yenileyin ve tekrar deneyin.","privacy":"Gizillik Politikası","refresh":"Yenile","reportBug":"Hata Bildirin","sourceCode":"Kaynak Kodu","unknownImportError":"Birşeyler yanlış gitti. Sayfayı yenileyip tekrar deneyin."},"preview":{"loading":"Önizleme Yüklemesi"},"progress":{"compressingProject":"Projeyi sıkıştıryor","downloadingExtensions":"Eklentiler yükleniyor","loadingAssets":"Varlıklar indiriliyor ({complete}/{total}) ...","loadingLargeAsset":"Yükleniyor{thing}","loadingProjectData":"Proje verisi yükleniyor...","loadingProjectMetadata":"Proje meta verilerini yükleniyor...","loadingScripts":"Bloklar yükleniyor","packagingProject":"Proje paketleniyor"},"reset":{"confirm":"Ayarları sıfırlamak istediğinizden emin misiniz? Bu işlem geri alınamaz.","confirmAll":"TÜM ayarları sıfırlamak istediğinizden emin misiniz? Bu geri alınamaz.","reset":"Sıfırla"},"select":{"file":"Dosya","id":"Scratch Proje ID yada URL","invalidId":"Hatalı Proje ID","invalidUrl":"Hatalı URL","loadProject":"Proje yükle","loadToContinue":"Devam etmek için bir proje yükleyin","noFileSelected":"Dosya şeçilmemiştir","select":"Projeyi şeç","selectHelp":"Scratch proje bağlantısını kopyalayıp yapıştırarak veya diğer modlardan birini kullanarak paketlemek istediğiniz projeyi seçin. Eğer senin yapmadığın bir projeyi kullanırsanız lütfen yaratıcıya saygı gösterin. ","unsharedProjects":"Scratch API değişiklikleri nedeniyle, paylaşılmayan projelere artık proje kimlikleri kullanılarak erişilemiyor.","unsharedProjectsMore":"Daha fazla bilgi için siteyi ziyaret edin: {link}","unsharedProjectsWorkaround":"Bunun yerine projeyi paylaşabilir veya projeyi bilgisayarınıza kaydedebilir (Dosya > Bilgisayarınıza kaydet) ve dosyayı paketleyiciye yükleyebilirsiniz. Paketleyici tarafından oluşturulan dosyalar tamamen bağımsızdır ve bu değişikliklerden etkilenmez.","url":"Başka URL"},"theme":{"dark":"Karanlık","light":"Aydınlık","system":"Sistem temasını kullan"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"Завантажити {filename} ({size})","useWorkaround":"Натисни сюди, якщо посилання для завантаження не працює"},"fileInput":{"clear":"Очистити вибір","select":"Виберіть або \\"закиньте\\" файл","selected":"Обрано {file}"},"import":{"cancel":"Скасувати","description":"Це займе деякий час, якщо проєкт великий.","header":"Імпортування проєкту..."},"options":{"accentColor":"Акцентний колір (колір фону активних/наведених кнопок, поля вводу, контекстного меню і т. д.)","advancedOptions":"Розширені Налаштування","advancedSummary":"Напевно, вам не захочется змінювати це. (Натисніть щоб відкрити)","application-linux-arm32":"{type} Програма для Linux з ARM (32-bit)","application-linux-arm64":"{type} Програма для Linux з ARM (64-bit)","application-linux64":"{type} Програма для Linux (64-біт)","application-mac":"{type} Програма для macOS","application-win-arm":"{type} Програма для Windows з ARM","application-win32":"{type} Програма для Windows (32-біт)","application-win64":"{type} Програма для Windows (64-біт)","applicationSettings":"Налаштування програми","automaticallyCenter":"Автоцентрування","autoplay":"Запускати проєкт автоматично замість того, щоб показувати великий зелений прапорець.","autoplayHint":"Примітка: Більшість браузерів не дозволяють сайтам автоматично відтворювати звук, тому звуки можуть не відтворюватися, доки користувач не почне взаємодяти з проєктом.","backgroundColor":"Колір заднього плану","bakeExtensions":"Спробуйте застосовувати кешовану копію користувальницьких розширень, замість того щоб завантажувати їх після кожного запуску проєкту","closeWhenStopped":"Закрити вкладку коли проєкт зупиниться","cloudVariables":"Хмарні змінні","cloudVariables-custom":"Розширені","cloudVariables-custom-help":"Режим \\"Розширені\\" використовує інший режим для кожної змінної, тому деякі змінні можуть синхронізуватися з іншими користувачами, а інші можуть зберігатися, наприклад, локально.","cloudVariables-ignore":"Ігнорувати","cloudVariables-ignore-help":"Функція \\"ігнорувати\\" буде обробляти хмарні змінні як звичайні.","cloudVariables-local":"Зберігати дані в паміяті пристрою","cloudVariables-local-help":"Функція \\"зберігати дані в пам\'яті пристрою\\" зберігає значення змінних на пристрої користувача і відновлює їх після запуску проєкту. Якщо у користувача відкрито кілька вкладок/вікон з проєктом, зміни будуть синхронізуватися між цими вікнами.","cloudVariables-ws":"Підключення до серверу хмарних змінних","cloudVariables-ws-help":"Функція \\"підключення до серверу хмарних змінних\\" синхронізує змінні з іншими користувачами.","cloudVariablesHost":"Хмарний хост","colors":"Кольори","confirmImportUnsafe":"Ці налаштування використовують розширені функції, такі як спеціальний JS, який запускає невідомий і, можливо, шкідливий код на вашому комп’ютері. Імпортуйте цей файл тільки якщо ви довіряєте людині, яка його створила. Якщо ви не впевнені, що це означає, можливо, вам не слід імпортувати ці налаштування.","controls":"Управління","controlsHelp":"Якщо всі елементи управління вимкнені, панель елементів управління повністю прибирається. Якщо увімкнено тільки кнопку повноекранного режиму, то вона буде знаходитися в правому верхньому куті екрану.","cursorCenter":"Центр вказівника:","cursorHelp":"Зображення розміром 32х32 працюють найкраще. Зображення більшого розміру можуть працювати некоректно.","customCSS":"Власний CSS (Не чіпай, якщо не знаєш що це!)","customCursor":"Корисувальницький вказівник миші","customExtensions":"Користувальницькі доповнення (тільки по одній URL в строці)","customExtensionsSecurity":"Користувальницькі розширення завжди працюють без пісочниці в Запакованому стані. Залежно від середовища, на якому ваш проєкт буде працювати, йому гарантується повний контроль, включаючи можливість встановлювати віруси. Не використовуйте розширення, яким не довіряєте.","customJS":"Власний JS (Не чіпай, якщо не знаєш що це!)","customUsernameWarning":"Будьте обережні, змінюючи ім’я користувача за замовчуванням, оскільки це може спричинити блокування з’єднань із сервером хмарних змінних. Гарантовано працює лише ім’я користувача за умовчанням.","defaultControls":"Стандартні","doNothing":"Нічого не робити","downloadsWillAppearHere":"Завантаження будуть відображатися тут","dynamicResize":"Динамічна зміна розміру сцени відповідно до розміру вікна (експерементальна функція)","editableLists":"Списки можна змінювати","enableCompiler":"Увімкнути компілятор","environment":"Середовище","escapeBehavior":"Коли натиснуто Esc","exitOnly":"Тільки виходити","export":"Експортувати налаштування","foregroundColor":"Колір переднього плану (шкала завантаження, деякі значки і текст)","framerate":"Частота кадрів","gamepad":"Підтримка USB або Bluetooth геймпадів/контроллерів","gamepadHelp":"Засновано на доповненні \\"Gamepad support\\" .","highQualityPen":"Перо високої якості","html":"Стандартний HTML (автономний, працює де завгодно)","icon":"Значок сторінки","implicitCloudHint":"Порада: Будь-яку змінну, ім’я якої починається на \\"{cloud}\\", буде перетворено на хмарну змінну, незалежно від налаштувань.","import":"Імпортувати налаштування","infiniteClones":"Безмежна кількість клонів","initalWindowSize":"Початковий розмір вікна","interaction":"Ввід","interpolation":"Інтерполяція","learnMore":"Дізнатися більше","listColor":"Колір списків","loadingScreen":"Екран завантаження","loadingScreenImage":"Зображення на екрані завантаження","loadingScreenText":"Текст на екрані завантаження","loadingScreenTextPlaceholder":"(Нічого)","maxTextureDimension":"Покращення якості векторів в образах, що заставляє великі зображення виглядати краще. Може використовувати більше пам\'яті та спричиняти \\"виліти\\".","mode":"Режим","monitors":"Відображення змінних/списків","noCloudVariables":"Цей проєкт не використовує хмарні змінні.","noControls":"Приховані (вікно без рамки)","noCursor":"Вказівник миші сховано","normalCursor":"Звичайний вказівник миші","otherEnvironments":"Інше (натисніть щоб відкрити)","otherEnvironmentsHelp":"У більшості нових проєктів мають використовуватися параметри, перелічені вище.","package":"Упакувати","packageName":"Назва пакету","packageNameHelp":"Ім’я пакета має бути таким ім\'ям, яке буде використано тільки вашою програмою. Проєкт повинен мати таку саму назву, як і назва пакета.","packagedRuntime":"Видалити необроблені файли для економії оперативної пам\'яті.","pageTitle":"Назва сторінки","playerOptions":"Налаштування програвача","pointerlock":"Заблокувати вказівник миші","pointerlockHelp":"Засновано на TurboWarp Experiment.","preserveRatio":"Зберігати співвідношення сторін після зміни розміру (рекомендується)","preview":"Переглянути","projectId":"ID Проєкту","projectIdHelp":"ID проєкту використовується під час підключення до сервера хмарних змінних і зберігання локальних хмарних змінних. Він може містити не тільки цифри.","removeFencing":"Прибрати рамку","removeMiscLimits":"Прибрати різні обмеження","resetAll":"Скинути всі налаштування","runtimeOptions":"Параметри виконання","showFlag":"Показати зелений прапорець на панелі управління","showFullscreen":"Показати кнопку повноекранного режиму на панелі управління","showPause":"Показати кнопку паузи на панелі управління","showProgressBar":"Показувати екран завантаження","showStop":"Показати кнопку стоп на панелі управління","sizeNormal":"Показати в нормальному розмірі","sizeStretch":"Повноекранний режим","specialCloudBehaviors":"Особлива поведінка хмарних змінних, подібна до HTMLifer","stage":"Сцена","stageSize":"Користувальницький розмір сцени","startFullscreen":"Запуск в повноекранному режимі","startMaximized":"Запуск розгрнутим вікном","startWindow":"Запустити вікном","steamworksAvailable":"Цей проєкт використовує розширення Steamworks. Ви можете знайти AppID вашої гри на Steamworks, або використати {n} для тестування з Steamworks демоверсії.","steamworksDocumentation":"Перегляньте документацію цього розширення, щоб отримати більше інформації.","steamworksError":"Показати помилку та вийти","steamworksExtension":"Розширення Steamworks","steamworksIgnore":"Нічого не робити","steamworksMacWarning":"Увага: ігри для macOS опубліковані на Steam повинні бути нотаріально завірені компанією Apple, що не є можливим за допомогою пакувальника. Ви все ще можете тестувати свою гру на Mac, але ви не зможете опублікувати її на Steam для macOS, поки що.","steamworksOnError":"У випадку помилки при ініціалізації Steamworks","steamworksUnavailable":"Щоб розширення Steamworks працювало, ви повинні використовувати одне з цих середовищ:","steamworksWarning":"Показати попередження, але продовжити","storedWarning":"Примітка: цей проєкт містить збережені налаштування, які можуть замінити ці налаштування.","stretch":"Розтягнути сцену на весь екран без зміни фактичного розміру (експерементальна функція)","turbo":"Турбо режим","unFullscreenOnly":"Залишати тільки повноекранний режим","unFullscreenOrExit":"Залишити в повноекранному режимі або вийти","unsafeCloudBehaviors":"Додаткові небезпечні особливості поведінки в хмарі","unsafeCloudBehaviorsWarning":"Небезпечна хмарна поведінка дозволяє запакованому проєкту виконувати довільний код поза «пісочницею», у якій проєкти зазвичай виконуються. Залежно від середовища, для якого ви пакуєте, це надає проєктам повний контроль над вашим комп’ютером, зокрема можливість інсталювати віруси. Якщо ви не довіряєте проєкту, який пакуєте, вимкніть цю опцію.","username":"Ім\'я користувача (усі символи \\"#\\" будуть замінені випадковими цифрами)","variableColor":"Колір змінних","version":"Версія","versionHelp":"Оновлення версії є абсолютно необов’язковим і не впливає на поведінку вашого проекту. Залежно від навколишнього середовища вона може з’являтися, наприклад, на екранах. Мусить бути форматовано як X.Y.Z.","warpTimer":"Warp Таймер","windowControls":"Кнопки керування вікном","zip":"Zip (ідеально для веб сайтів)","zip-one-asset":"Стискання, об\'єднання ресурсів в однім файлі (не рекомендується)"},"p4":{"browserNotSupported":"Браузер не підтримуєтся","browserNotSupportedDescription":"Будь ласка, оновіть свій браузер","cannotAccessProject":"Не вдається отримати доступ до метаданих проекту. Напевно, це означає, що проект не виставлений у відкритий доступ, ніколи не існував або індентифікатор проекту неправильний, або ваша мережа блокує turbowarp.org.","cannotAccessProjectCaching":"Якщо проект був тільки нещодавно опублікований, то до зникнення цього повідомлення може пройти кілька хвилин.","close":"Закрити","description1":"Конвертуйте Scratch проєкти в HTML файли, zip архіви, або програми для Windows, macOS, і Linux.","description2":"Якщо ви хочете простим способом вбудувати ваш проєкт на сайт, вас може зацікавити {embedding} .","description2-embedding":"Вбудовування","description3":"Повідомляйте про баги, пропонуйте ідеї, та залишайте відгуки {onScratch} або {onGitHub}.","description3-on":"на {brand}","disclaimer":"Цей сайт не зв\'язаний зі Scratch, Scratch Team, або Scratch Foundation.","documentation":"Допомога та додаткові ресурси","donate":"Пожертвувати","error":"Помилка","errorMessage":"Повідомлення: {error}","feedback":"Зворотній зв\'язок","importingInterface":"Завантаження налаштувань...","networkError":"Не вдається завантажити {url}. Переконайтеся що ви підключені до інтернету та спробуйте вимкнути деякі розширення браузера.","outdated":"Схоже, ця версія пакувальника застаріла. Будь ласка, оновіть сторінку та спробуйте ще раз.","privacy":"Політика Конфіденсійності","refresh":"Оновити","reportBug":"Звіт про помилку","sourceCode":"Початковий Код","unknownImportError":"Щось пішло не так. Будь ласка, оновіть та спробуйте знову."},"preview":{"loading":"Завантаження прев\'ю"},"progress":{"compressingProject":"Стискання проєкту","downloadingExtensions":"Завантаження користувальницьких розширень","loadingAssets":"Завантаження ресурсів ({complete}/{total} )","loadingLargeAsset":"Завантаження {thing}","loadingProjectData":"Завантаження даних проєкту","loadingProjectMetadata":"Завантаження метаданих проєкту","loadingScripts":"Завантаження скриптів","packagingProject":"Упаковування проєкту"},"reset":{"confirm":"Ви впевнені, що хочете скинути ці налаштування? Цю дію не можна відмінити.","confirmAll":"Ви впевнені, що хочете скинути ВСІ налаштування? Цю дію не можна відмінити.","reset":"Скинути"},"select":{"file":"Файл","id":"ID або URL Scratch проєкту","invalidId":"Неправельне ID проєкту","invalidUrl":"Направельна URL адреса","loadProject":"Завантажити Проєкт","loadToContinue":"Завантажте проєкт, щоб продовжити","noFileSelected":"Файл не вибрано","select":"Оберіть проєкт","selectHelp":"Виберіть проєкт, який хочете упакувати, скопіювавши та вставивши посилання на проєкт Scratch, або використовуючи один з інших методів. Якщо ви використовуєте проєкт, зроблений не вами, не забудьте згадати автора.","unsharedProjects":"Неопубліковані проєкти більше не доступні за його інтендифікатором в зв\'язку зі зміною Scratch API.","unsharedProjectsMore":"Перейдіть на {link}, щоб отримати більше інформації та обхідні шляхи","unsharedProjectsWorkaround":"Замість цього ви можете опублікувати проєкт або зберегти його на своєму комп’ютері (Файл > Зберегти на своєму комп’ютері) і завантажити файл у пакувальник. Файли, створені пакувальником, є повністю автономними, на них ці зміни не впливають.","url":"Інше URL"},"theme":{"dark":"Темна","light":"Світла","system":"Використовувати системну тему"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"downloads":{"link":"下载 {filename}（{size}）","useWorkaround":"如果下载链接不起作用，请单击此处"},"fileInput":{"clear":"清除选择","select":"选择或拖入文件","selected":"已选择 {file}"},"import":{"cancel":"取消","description":"如果作品太大，可能需要很多时间。","header":"导入作品中..."},"options":{"accentColor":"主题色（激活/悬停的控件、询问窗口、上下文菜单）","advancedOptions":"高级选项","advancedSummary":"大部分情况下，你不需要修改这里的设置。（点击打开）","application-linux-arm32":"{type} 打包的 ARM 架构 Linux 程序（32 位）","application-linux-arm64":"{type} 打包的 ARM 架构 Linux 程序（64 位）","application-linux64":"{type} Linux 应用程序 (64 位)","application-mac":"{type} 打包的的 macOS 程序","application-win-arm":"{type} 打包的 ARM 架构 Windows 程序","application-win32":"{type} 打包的 Windows 程序（32 位）","application-win64":"{type} 打包的 Windows 程序（64 位）","applicationSettings":"应用程序设置","automaticallyCenter":"自动设为中心","autoplay":"加载完成时自动开始运行而不是显示一个大绿旗","autoplayHint":"注意：很多浏览器不允许网站自动播放声音，因此在用户与作品交互前，声音可能不会播放。","backgroundColor":"背景色","bakeExtensions":"尝试嵌入自定义扩展的缓存副本，而不是每次运行作品时下载它们","closeWhenStopped":"当作品停止时关闭窗口","cloudVariables":"云变量","cloudVariables-custom":"高级","cloudVariables-custom-help":"“高级”可以给每个云变量不同的设置。例如，有些变量可以和他人同步，有些变量就在本地储存。","cloudVariables-ignore":"忽略","cloudVariables-ignore-help":"“忽略”让所有云变量像普通变量一样工作","cloudVariables-local":"存储在本地","cloudVariables-local-help":"“存储在本地”选项会将变量存储在每个用户的电脑浏览器上，并在作品打开时恢复它们。 如果用户使用同一个电脑浏览器打开了作品的多个窗口/选项卡，更改将在这些窗口之间同步。但这个存储位置可能被用户意外清除。","cloudVariables-ws":"连接到云变量服务器","cloudVariables-ws-help":"“连接到云变量服务器”与其他用户同步变量。","cloudVariablesHost":"云变量服务器地址","colors":"颜色","confirmImportUnsafe":"这些设置使用JavaScript，而JavaScript可能会运行病毒。请务必不要导入未知来源或来自外人的文件。","controls":"控制按钮","controlsHelp":"如果此处的所有选项都不勾选，将会删除控制栏。如果只有全屏按钮被选中，则它会放在网页的左上角，而不是控制栏上。","cursorCenter":"鼠标中心：","cursorHelp":"尺寸为 32x32 及以下的图像表现得最好。更大的图像可能无法正常工作。","customCSS":"自定义 CSS（如果你不确定你在做什么，别动它）","customCursor":"自定义指针","customExtensions":"自定义扩展（每行一个 URL）","customExtensionsSecurity":"自定义扩展总是在打包程序中未被隔离地运行。根据您打包的环境，这将授予扩展对计算机的完全控制权，包括安装病毒的能力。不要使用不信任的扩展。","customJS":"自定义 JS (如果你不确定你在做什么，别动它)","customUsernameWarning":"如果您修改了默认用户名，请小心，因为它可能造成与默认云变量服务器的连接被阻止。只有默认用户名是确保可用的。","defaultControls":"默认","doNothing":"什么都不做","downloadsWillAppearHere":"下载进度将显示在这里","dynamicResize":"动态匹配窗口大小（实验性）","editableLists":"允许编辑列表","enableCompiler":"使用编译","environment":"运行环境","escapeBehavior":"当 Esc 键被按下","exitOnly":"仅退出","export":"导出设置","foregroundColor":"前景色（进度栏、一些图标、一些文本）","framerate":"帧率","gamepad":"支持 USB 或蓝牙游戏手柄","gamepadHelp":"基于 Gamepad 插件。","highQualityPen":"高清画笔","html":"HTML 文件（单个文件，在大部分现代浏览器上可用）","icon":"窗口图标","implicitCloudHint":"提示：任何名称以“{cloud}”开头的变量都将被转换为云变量，无论它们创建时是否是云变量。","import":"导入设置","infiniteClones":"无限克隆","initalWindowSize":"原始窗口大小","interaction":"输入","interpolation":"补帧","learnMore":"查看更多","listColor":"列表颜色","loadingScreen":"加载页面","loadingScreenImage":"加载页面图片","loadingScreenText":"加载提示文本","loadingScreenTextPlaceholder":"（无）","maxTextureDimension":"增大最大矢量图像分辨率来让大图像看起来更好，可能会增加内存使用并导致崩溃。","mode":"模式","monitors":"查看","noCloudVariables":"该作品不含云变量。","noControls":"隐藏（无边框）","noCursor":"无指针","normalCursor":"正常指针","otherEnvironments":"其它平台（点击打开）","otherEnvironmentsHelp":"大部分作品只需要使用上面列出的选项即可。","package":"打包","packageName":"程序包名称","packageNameHelp":"程序包名称应该是一个只由你的应用程序使用的唯一名称。同一个作品应该总是使用相同的程序包名称。","packagedRuntime":"加载后移除原始素材数据以节约内存","pageTitle":"页面标题","playerOptions":"展示选项","pointerlock":"锁定鼠标指针","pointerlockHelp":"基于一项 TurboWarp 实验性功能。","preserveRatio":"调整大小时保留纵横比（推荐）","preview":"预览","projectId":"作品 ID","projectIdHelp":"作品 ID 用于连接云变量服务器或存储本地云变量。可以包含非数字内容。","removeFencing":"角色可穿过边缘","removeMiscLimits":"移除其他限制","resetAll":"重置所有设置","runtimeOptions":"运行选项","showFlag":"在控制栏显示绿旗按钮","showFullscreen":"在控制栏显示全屏按钮","showPause":"在控制栏显示暂停按钮","showProgressBar":"显示进度","showStop":"在控制栏显示停止按钮","sizeNormal":"以正常尺寸展示","sizeStretch":"全屏","specialCloudBehaviors":"兼容 HTMLifier 的特殊云变量","stage":"舞台","stageSize":"自定义舞台大小","startFullscreen":"以全屏模式启动","startMaximized":"以最大化窗口模式启动","startWindow":"以窗口模式启动","steamworksAvailable":"此作品使用了 Steamworks 扩展。您可以在 Steamworks 找到您游戏的 App ID，或者使用 {n} 来通过 Steamworks demo 测试。","steamworksDocumentation":"查看扩展文档以了解详情","steamworksError":"展示错误并退出","steamworksExtension":"Steamworks 扩展","steamworksIgnore":"什么都不做","steamworksMacWarning":"警告: 发布在 Steam 上的 macOS 游戏需要经由 Apple 认证，而打包器并不支持这一功能。你仍然可以在一台 Mac 上测试你的游戏，但你将不能把你的游戏发布到 macOS 平台。","steamworksOnError":"如果初始化 Steamworks 时出错：","steamworksUnavailable":"要启用 Steamworks 扩展，你必须使用以下环境之一：","steamworksWarning":"展示警告但继续","storedWarning":"注意：此作品中已经存储了设置信息，可能会被覆盖。","stretch":"拉伸舞台以填充屏幕而不改变实际大小（测试）","turbo":"加速模式","unFullscreenOnly":"仅离开全屏","unFullscreenOrExit":"离开全屏或退出","unsafeCloudBehaviors":"额外的不安全的特殊云变量行为","unsafeCloudBehaviorsWarning":"不安全的云变量行为允许打包的作品在作品通常执行的“沙盒”之外执行任意代码。根据你打包的环境，这可能会赋予作品对你的计算机的完全控制权，包括安装病毒的能力。如果你不信任你要打包的作品，请关闭这个选项。","username":"用户名（每个“#”号代表一位随机数字）","variableColor":"变量颜色","version":"版本","versionHelp":"更新作品版本是完全可选的，不会影响作品的。根据环境的不同，它可能会出现在关于页面等地方。格式应该像 X.Y.Z 这样","warpTimer":"循环计时器","windowControls":"窗口控制栏","zip":"Zip 压缩包（适合嵌入网站）","zip-one-asset":"Zip 压缩包，把所有素材打包在一个文件中（不推荐）"},"p4":{"browserNotSupported":"不支持浏览器","browserNotSupportedDescription":"请更新您的浏览器。","cannotAccessProject":"无法访问作品令牌。这通常意味着此作品未共享、不存在或 ID 无效，或者您的网络正在屏蔽 turbowarp.org。","cannotAccessProjectCaching":"如果作品刚刚分享，这条消息可能需要几分钟才消失。","close":"关闭","description1":"将 Scratch 作品转换为 HTML 文件、ZIP 压缩包或 Windows、MacOS 和 Linux 的可执行文件。","description2":"如果您只是想以一种简单的方式将 Scratch 官网作品嵌入您的网站，您可能会对 {embedding} 感兴趣。 ","description2-embedding":"网站嵌入","description3":"在 {onScratch} 或者 {onGitHub} 报告错误，提供反馈，并提出建议。","description3-on":"{brand}","disclaimer":"此网站不属于 Scratch、Scratch 团队或 Scratch 基金会。","documentation":"更多资源和帮助","donate":"捐赠","error":"错误","errorMessage":"信息：{error}","feedback":"反馈","importingInterface":"正在加载选项...","networkError":"无法下载 {url}。请确保你已连接到互联网，并尝试禁用浏览器扩展。","outdated":"TurboWarp Packager 在您打开此页面后推送了更新。请刷新并重试。","privacy":"隐私政策","refresh":"刷新","reportBug":"反馈问题","sourceCode":"源代码","unknownImportError":"发生了一些问题。请刷新并重试。"},"preview":{"loading":"加载预览"},"progress":{"compressingProject":"压缩作品中","downloadingExtensions":"加载自定义扩展","loadingAssets":"加载素材中（第 {complete} 个，共 {total} 个）","loadingLargeAsset":"下载 {thing} 中","loadingProjectData":"下载作品数据中","loadingProjectMetadata":"下载作品元数据中","loadingScripts":"加载脚本中","packagingProject":"打包作品中"},"reset":{"confirm":"该操作不可撤销，确定要重置吗？","confirmAll":"你确定重置所有的设置？该操作不可撤销。","reset":"重置"},"select":{"file":"文件","id":"Scratch 官网作品 ID 或者网页链接","invalidId":"无效的作品 ID","invalidUrl":"无效的作品链接。请检查链接是否为直接链接，即右键打开是否会直接开始下载。","loadProject":"加载作品","loadToContinue":"加载作品以继续","noFileSelected":"没有选择文件","select":"选择作品","selectHelp":"您可以通过复制粘贴 Scratch 作品链接，或使用其他模式来选择要打包的作品。 如果您打包的作品并非原创，请做好署名。","unsharedProjects":"未分享的作品将不会显示。","unsharedProjectsMore":"有关更多信息和解决方法，请访问：{link}","unsharedProjectsWorkaround":"您可以尝试分享作品或者将作品保存到设备（文件 > 保存到电脑）并在打包机中打开。打包程序生成的文件是完全独立的，不受 Scratch API 更新的影响。","url":"其他链接"},"theme":{"dark":"暗黑主题","light":"明亮主题","system":"使用系统主题"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"fileInput":{"clear":"清除所選","select":"選擇或放入檔案","selected":"已選擇「{file}」"},"import":{"cancel":"取消"},"options":{"accentColor":"主題色（按鈕背景、詢問框、右鍵選單等）","advancedOptions":"進階選項","advancedSummary":"正常來說，你不會想要、也不需更改這些（點擊以展開）。","application-mac":"{type} macOS 應用程式","applicationSettings":"應用程式選項","autoplay":"直接開始程序而不顯示一個大綠旗","backgroundColor":"背景色","cloudVariables":"雲端變數","cloudVariables-custom":"個別更改","cloudVariables-custom-help":"個別更改⸺個別更改運行方式。","cloudVariables-ignore":"忽略","cloudVariables-ignore-help":"忽略⸺以普通變數方式運行。","cloudVariables-local":"存儲在本機","cloudVariables-ws":"連接到雲端變數主機","cloudVariables-ws-help":"連接到雲端變數主機⸺與其他玩家同步。","cloudVariablesHost":"雲端變數主機：","colors":"顏色","controls":"控制欄","controlsHelp":"若全部隱藏，控制欄不會顯示。\\n若僅全螢幕按鈕顯示，它會被置於螢幕右上方，控制欄同樣不會顯示。","cursorHelp":"圖片大小最好為 32×32，再大的圖片可能無法正常運行。","customCSS":"自定義CSS(如果你不知道你在做什麼，別動！)","customCursor":"自訂指標","customExtensions":"自訂擴充功能（一行一個網址）","customJS":"自訂 JS（如果你不知道你在做什麼，千萬別更改它！）","downloadsWillAppearHere":"這裡會顯示下載連結","editableLists":"可編輯鏈表","enableCompiler":"編譯器","environment":"封裝選項","foregroundColor":"前景色（進度條、某些圖示和文字等）","framerate":"幀率","gamepad":"支援 USB 或藍牙遊戲手把","gamepadHelp":"基於「遊戲手把支援」附加元件。","highQualityPen":"高品質畫筆","html":"HTML（獨立，各處皆可用）","icon":"圖示","infiniteClones":"無限分身","interaction":"輸入","interpolation":"補幀","learnMore":"瞭解更多","loadingScreen":"載入畫面","loadingScreenImage":"載入畫面圖片","loadingScreenText":"載入畫面文字","loadingScreenTextPlaceholder":"（無）","mode":"模式：","monitors":"監視器","noCursor":"隱藏指標","normalCursor":"顯示指標","otherEnvironments":"其他方式（點擊以展開）","otherEnvironmentsHelp":"大多數的新專案應使用上面的方式。","package":"封裝","packageName":"應用程式名稱","packageNameHelp":"應用程式名稱必須是唯一的，相同的專案應使用同樣的應用程式名稱。","pageTitle":"標題","playerOptions":"介面設定","pointerlock":"鎖定指標","pointerlockHelp":"基於 TurboWarp 實驗性功能。","preview":"預覽","projectId":"作品ID","removeFencing":"移除屏障","removeMiscLimits":"移除各類限制","runtimeOptions":"運行選項","showFlag":"在控制欄顯示綠旗","showFullscreen":"全螢幕按鈕","showPause":"在控制欄顯示暫停按鈕","showProgressBar":"進度條","showStop":"停止按鈕","sizeNormal":"原始大小","sizeStretch":"填滿畫面","startFullscreen":"以滿屏方式啟動","startMaximized":"以最大化窗口啟動","startWindow":"以窗口啟動","turbo":"加速模式","username":"用戶名稱（以「#」代表一個隨機數）","warpTimer":"防卡死","zip":"Zip（用於網站的最佳選擇）","zip-one-asset":"Zip，封裝所有素材（不推薦）"},"p4":{"close":"關閉","description1":"將Scratch項目打包為網頁文件、ZIP压缩包或Windows、macOS与Linux應用程序","description2-embedding":"嵌入","description3":"在 {onScratch} 或 {onGitHub} 上回報錯誤、給予回饋或提出建議。","error":"錯誤","errorMessage":"訊息：{error}","feedback":"回饋","privacy":"隱私權政策","refresh":"重新整理","reportBug":"回報錯誤","sourceCode":"原始碼"},"preview":{"loading":"預覽加載中"},"progress":{"compressingProject":"壓縮專案中……","loadingLargeAsset":"下載中{thing}","loadingProjectData":"作品數據下載中","loadingScripts":"腳本下載中","packagingProject":"封裝專案中……"},"reset":{"confirm":"你確定要重設這些設定嗎？這不能被撤銷。","reset":"重設"},"select":{"file":"檔案","id":"Scratch 專案 ID 或網址","invalidId":"無效的專案 ID","invalidUrl":"無效的專案網址","loadProject":"載入專案","loadToContinue":"載入專案以繼續","noFileSelected":"沒有選擇檔案。","select":"選擇專案","selectHelp":"貼上你要封裝的專案網址、ID 或上傳檔案。\\n注意：若此專案並非你的作品，請標記原作者。","url":"其他網址"},"theme":{"dark":"黑暗主題","light":"明亮主題","system":"使用系統主題"}}'
    );
  },
  function (e, a, t) {
    "use strict";
    t.r(a);
    var o = t(0),
      r = t(3),
      n = t(12),
      i = t(4);
    function s(e) {
      let a;
      return {
        c() {
          a = Object(o.v)("span");
        },
        m(t, r) {
          Object(o.E)(t, a, r), e[3](a);
        },
        p: o.I,
        i: o.I,
        o: o.I,
        d(t) {
          t && Object(o.u)(a), e[3](null);
        },
      };
    }
    function l(e, a, t) {
      let n,
        { message: s } = a,
        { values: l } = a;
      const c = () => {
          for (; n.firstChild; ) n.removeChild(n.firstChild);
          const e = s.split(/{(\w+)}/g);
          for (let a = 0; a < e.length; a++) {
            const t = e[a];
            if (a % 2 == 0) n.appendChild(document.createTextNode(t));
            else {
              const e = l && l[t];
              if (e) {
                const a = document.createElement("a");
                (a.href = e.href),
                  (a.textContent = e.text),
                  e.newTab &&
                    ((a.target = "_blank"), (a.rel = "noopener noreferrer")),
                  n.appendChild(a);
              } else
                console.warn("Missing placeholder", t),
                  n.appendChild(document.createTextNode(`???{${t}}`));
            }
          }
        },
        d = r.a.subscribe(() => {
          n && Object(i.d)().then(c);
        });
      return (
        Object(i.c)(c),
        Object(i.b)(d),
        (e.$$set = (e) => {
          "message" in e && t(1, (s = e.message)),
            "values" in e && t(2, (l = e.values));
        }),
        [
          n,
          s,
          l,
          function (e) {
            o.i[e ? "unshift" : "push"](() => {
              (n = e), t(0, n);
            });
          },
        ]
      );
    }
    class c extends o.a {
      constructor(e) {
        super(), Object(o.C)(this, e, l, s, o.M, { message: 1, values: 2 });
      }
    }
    var d = c,
      u = t(5),
      p = t(7),
      m = t(15);
    function k(e) {
      Object(o.e)(
        e,
        "svelte-4m5nmg",
        '.outer.svelte-4m5nmg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:20;background:rgba(255, 255, 255, 0.8);color:black;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;user-select:none}[theme="dark"] .outer.svelte-4m5nmg{background:rgba(0, 0, 0, 0.8);color:white}.inner.svelte-4m5nmg{max-width:480px}'
      );
    }
    function g(e) {
      let a,
        t,
        r,
        i,
        s,
        l,
        c,
        d,
        u,
        p,
        m,
        k,
        g,
        b,
        v = e[0]("import.header") + "",
        h = e[0]("import.description") + "",
        j = e[0]("import.cancel") + "";
      return {
        c() {
          (a = Object(o.v)("div")),
            (t = Object(o.v)("div")),
            (r = Object(o.v)("h2")),
            (i = Object(o.Z)(v)),
            (s = Object(o.V)()),
            (l = Object(o.v)("p")),
            (c = Object(o.Z)(h)),
            (d = Object(o.V)()),
            (u = Object(o.v)("button")),
            (p = Object(o.Z)(j)),
            Object(o.g)(t, "class", "inner svelte-4m5nmg"),
            Object(o.g)(a, "class", "outer svelte-4m5nmg");
        },
        m(n, m) {
          Object(o.E)(n, a, m),
            Object(o.d)(a, t),
            Object(o.d)(t, r),
            Object(o.d)(r, i),
            Object(o.d)(t, s),
            Object(o.d)(t, l),
            Object(o.d)(l, c),
            Object(o.d)(t, d),
            Object(o.d)(t, u),
            Object(o.d)(u, p),
            (k = !0),
            g || ((b = Object(o.G)(u, "click", e[1])), (g = !0));
        },
        p(e, [a]) {
          (!k || 1 & a) &&
            v !== (v = e[0]("import.header") + "") &&
            Object(o.R)(i, v),
            (!k || 1 & a) &&
              h !== (h = e[0]("import.description") + "") &&
              Object(o.R)(c, h),
            (!k || 1 & a) &&
              j !== (j = e[0]("import.cancel") + "") &&
              Object(o.R)(p, j);
        },
        i(e) {
          k || (m && m.end(1), (k = !0));
        },
        o(e) {
          (m = Object(o.q)(a, n.a, { duration: 200 })), (k = !1);
        },
        d(e) {
          e && Object(o.u)(a), e && m && m.end(), (g = !1), b();
        },
      };
    }
    function b(e, a, t) {
      let n;
      Object(o.l)(e, r.a, (e) => t(0, (n = e)));
      const s = Object(i.a)();
      return [
        n,
        () => {
          s("cancel");
        },
      ];
    }
    class v extends o.a {
      constructor(e) {
        super(), Object(o.C)(this, e, b, g, o.M, {}, k);
      }
    }
    var h = v,
      j = t(10),
      f = t(1),
      y = t(2),
      w = t(11);
    var z = async (e) => {
        try {
          const a = await Object(w.a)({
            url: [
              `https://trampoline.turbowarp.org/api/projects/${e}`,
              `https://trampoline.turbowarp.xyz/api/projects/${e}`,
            ],
            type: "json",
          });
          return { title: a.title, token: a.project_token };
        } catch (a) {
          if (a && 404 === a.status)
            throw new y.b(`Cannot access project ${e}`);
          throw a;
        }
      },
      S = t(14);
    const O = async (e, a) => {
        const o = "function" == typeof AbortController && new AbortController(),
          r = await Promise.all([t.e(0), t.e(1)]).then(t.bind(null, 157));
        let n;
        return {
          promise: new Promise((t, i) => {
            (n = i),
              r
                .downloadProject(e, a, o && o.signal)
                .then((e) => t(e))
                .catch((e) => i(e));
          }),
          terminate: () => {
            n(new y.a()), o && o.abort();
          },
        };
      },
      C = async (e, a) => {
        const t = await Object(w.a)({
          url: e,
          type: "arraybuffer",
          progressCallback: (e) => {
            a("fetch", e);
          },
        });
        return O(t, a);
      };
    var x = (e, a, t) =>
        C(`https://projects.scratch.mit.edu/${e}${a ? `?token=${a}` : ""}`, t),
      P = C,
      I = async (e, a) => {
        const t = await Object(S.a)(e);
        return O(t, a);
      };
    const A = (e) => {
      const a = e.match(/\d+/);
      return a ? a[0] : "";
    };
    var E = t(18);
    const T = (e, a) => {
      a || (a = "Untitled");
      const t = new File([e], a),
        o = new DataTransfer();
      return o.items.add(t), o.files;
    };
    var H = ({
      onStartImporting: e,
      onFinishImporting: a,
      onCancelImporting: t,
    }) => {
      if ("function" == typeof GlobalPackagerImporter)
        return void (async ({
          onStartImporting: e,
          onFinishImporting: a,
          onCancelImporting: t,
        }) => {
          try {
            e();
            const { data: t, name: o } = await GlobalPackagerImporter();
            a(T(t, o));
          } catch (e) {
            t();
          }
        })({ onStartImporting: e, onFinishImporting: a, onCancelImporting: t });
      const o = new URLSearchParams(location.search);
      o.has("import_from") &&
        (({
          origin: e,
          onStartImporting: a,
          onFinishImporting: t,
          onCancelImporting: o,
        }) => {
          if (!e.startsWith("http:") && !e.startsWith("https:"))
            return void console.warn("Import ignored: invalid origin");
          const r = window.opener || window.parent;
          if (!r || r === window)
            return void console.warn(
              "Import ignored: cannot find parent window or opener"
            );
          let n = !1,
            i = !1;
          const s = (r) => {
            if (r.origin !== e) return;
            const s = r.data && r.data.p4;
            s &&
              (n
                ? i ||
                  ("finish-import" === s.type
                    ? (l(), t(T(s.data, s.name)))
                    : "cancel-import" === s.type && (l(), o()))
                : "start-import" === s.type && ((n = !0), a()));
          };
          window.addEventListener("message", s);
          const l = () => {
            (i = !0), window.removeEventListener("message", s);
          };
          ((a) => {
            try {
              r.postMessage({ p4: a }, e);
            } catch (e) {
              console.warn("Cannot post message", e);
            }
          })({ type: "ready-for-import" });
        })({
          origin: o.get("import_from"),
          onStartImporting: e,
          onFinishImporting: a,
          onCancelImporting: t,
        });
    };
    function L(e) {
      Object(o.e)(
        e,
        "svelte-cekwmz",
        'input[type="text"].svelte-cekwmz{max-width:300px;flex-grow:1}.options.svelte-cekwmz{margin:12px 0}.option.svelte-cekwmz{min-height:25px;display:flex;align-items:center;flex-wrap:wrap}input[type="text"].svelte-cekwmz,input[type="file"].svelte-cekwmz{margin-left:4px}'
      );
    }
    function V(e) {
      let a, t;
      return (
        (a = new h({})),
        a.$on("cancel", e[15]),
        {
          c() {
            Object(o.o)(a.$$.fragment);
          },
          m(e, r) {
            Object(o.H)(a, e, r), (t = !0);
          },
          p: o.I,
          i(e) {
            t || (Object(o.db)(a.$$.fragment, e), (t = !0));
          },
          o(e) {
            Object(o.eb)(a.$$.fragment, e), (t = !1);
          },
          d(e) {
            Object(o.s)(a, e);
          },
        }
      );
    }
    function M(e) {
      let a,
        t,
        r,
        n,
        i,
        s,
        l,
        c,
        d,
        u,
        p,
        m,
        k,
        g,
        b,
        v,
        h,
        j,
        f,
        y = e[4]("select.file") + "",
        w = e[4]("select.url") + "",
        z = "url" === e[1] && $(e);
      return (
        (h = Object(o.D)(e[17][0])),
        {
          c() {
            (a = Object(o.v)("div")),
              (t = Object(o.v)("div")),
              (r = Object(o.v)("label")),
              (n = Object(o.v)("input")),
              (i = Object(o.V)()),
              (s = Object(o.Z)(y)),
              (l = Object(o.V)()),
              (c = Object(o.v)("input")),
              (u = Object(o.V)()),
              (p = Object(o.v)("div")),
              (m = Object(o.v)("label")),
              (k = Object(o.v)("input")),
              (g = Object(o.V)()),
              (b = Object(o.Z)(w)),
              (v = Object(o.V)()),
              z && z.c(),
              Object(o.g)(n, "type", "radio"),
              Object(o.g)(n, "name", "project-type"),
              (n.__value = "file"),
              (n.value = n.__value),
              (c.hidden = d = "file" !== e[1]),
              Object(o.g)(c, "type", "file"),
              Object(o.g)(c, "accept", ".sb,.sb2,.sb3"),
              Object(o.g)(c, "class", "svelte-cekwmz"),
              Object(o.g)(t, "class", "option file-input-option svelte-cekwmz"),
              Object(o.g)(k, "type", "radio"),
              Object(o.g)(k, "name", "project-type"),
              (k.__value = "url"),
              (k.value = k.__value),
              Object(o.g)(p, "class", "option svelte-cekwmz"),
              Object(o.g)(a, "class", "options svelte-cekwmz"),
              h.p(n, k);
          },
          m(d, h) {
            Object(o.E)(d, a, h),
              Object(o.d)(a, t),
              Object(o.d)(t, r),
              Object(o.d)(r, n),
              (n.checked = n.__value === e[1]),
              Object(o.d)(r, i),
              Object(o.d)(r, s),
              Object(o.d)(t, l),
              Object(o.d)(t, c),
              e[18](c),
              Object(o.d)(a, u),
              Object(o.d)(a, p),
              Object(o.d)(p, m),
              Object(o.d)(m, k),
              (k.checked = k.__value === e[1]),
              Object(o.d)(m, g),
              Object(o.d)(m, b),
              Object(o.d)(p, v),
              z && z.m(p, null),
              j ||
                ((f = [
                  Object(o.G)(n, "change", e[16]),
                  Object(o.G)(c, "change", e[12]),
                  Object(o.G)(k, "change", e[19]),
                ]),
                (j = !0));
          },
          p(e, a) {
            2 & a && (n.checked = n.__value === e[1]),
              16 & a &&
                y !== (y = e[4]("select.file") + "") &&
                Object(o.R)(s, y),
              2 & a && d !== (d = "file" !== e[1]) && (c.hidden = d),
              2 & a && (k.checked = k.__value === e[1]),
              16 & a &&
                w !== (w = e[4]("select.url") + "") &&
                Object(o.R)(b, w),
              "url" === e[1]
                ? z
                  ? z.p(e, a)
                  : ((z = $(e)), z.c(), z.m(p, null))
                : z && (z.d(1), (z = null));
          },
          d(t) {
            t && Object(o.u)(a),
              e[18](null),
              z && z.d(),
              h.r(),
              (j = !1),
              Object(o.L)(f);
          },
        }
      );
    }
    function $(e) {
      let a, t, r;
      return {
        c() {
          (a = Object(o.v)("input")),
            Object(o.g)(a, "type", "text"),
            Object(o.g)(a, "spellcheck", "false"),
            Object(o.g)(a, "placeholder", "https://..."),
            Object(o.g)(a, "class", "svelte-cekwmz");
        },
        m(n, i) {
          Object(o.E)(n, a, i),
            Object(o.S)(a, e[5]),
            t ||
              ((r = [
                Object(o.G)(a, "input", e[20]),
                Object(o.G)(a, "keypress", e[10]),
              ]),
              (t = !0));
        },
        p(e, t) {
          32 & t && a.value !== e[5] && Object(o.S)(a, e[5]);
        },
        d(e) {
          e && Object(o.u)(a), (t = !1), Object(o.L)(r);
        },
      };
    }
    function D(e) {
      let a,
        t,
        r,
        n,
        i,
        s,
        l,
        c,
        u,
        p = e[4]("select.unsharedProjects") + "",
        m = e[4]("select.unsharedProjectsWorkaround") + "";
      return (
        (c = new d({
          props: {
            message: e[4]("select.unsharedProjectsMore"),
            values: {
              link: {
                text: "https://docs.turbowarp.org/unshared-projects",
                href: "https://docs.turbowarp.org/unshared-projects",
                newTab: !0,
              },
            },
          },
        })),
        {
          c() {
            (a = Object(o.v)("p")),
              (t = Object(o.Z)(p)),
              (r = Object(o.V)()),
              (n = Object(o.v)("p")),
              (i = Object(o.Z)(m)),
              (s = Object(o.V)()),
              (l = Object(o.v)("p")),
              Object(o.o)(c.$$.fragment);
          },
          m(e, d) {
            Object(o.E)(e, a, d),
              Object(o.d)(a, t),
              Object(o.E)(e, r, d),
              Object(o.E)(e, n, d),
              Object(o.d)(n, i),
              Object(o.E)(e, s, d),
              Object(o.E)(e, l, d),
              Object(o.H)(c, l, null),
              (u = !0);
          },
          p(e, a) {
            (!u || 16 & a) &&
              p !== (p = e[4]("select.unsharedProjects") + "") &&
              Object(o.R)(t, p),
              (!u || 16 & a) &&
                m !== (m = e[4]("select.unsharedProjectsWorkaround") + "") &&
                Object(o.R)(i, m);
            const r = {};
            16 & a && (r.message = e[4]("select.unsharedProjectsMore")),
              c.$set(r);
          },
          i(e) {
            u || (Object(o.db)(c.$$.fragment, e), (u = !0));
          },
          o(e) {
            Object(o.eb)(c.$$.fragment, e), (u = !1);
          },
          d(e) {
            e && Object(o.u)(a),
              e && Object(o.u)(r),
              e && Object(o.u)(n),
              e && Object(o.u)(s),
              e && Object(o.u)(l),
              Object(o.s)(c);
          },
        }
      );
    }
    function N(e) {
      let a,
        t,
        r,
        n,
        i,
        s,
        l,
        c,
        d,
        u,
        m,
        k,
        g = e[4]("select.select") + "",
        b = e[4]("select.selectHelp") + "",
        v = "post" !== e[1] && M(e),
        h = "id" === e[1] && D(e);
      return (
        (u = new p.a({ props: { text: e[4]("select.loadProject") } })),
        u.$on("click", e[13]),
        {
          c() {
            (a = Object(o.v)("mdui-card")),
              (t = Object(o.v)("h2")),
              (r = Object(o.Z)(g)),
              (n = Object(o.V)()),
              (i = Object(o.v)("p")),
              (s = Object(o.Z)(b)),
              (l = Object(o.V)()),
              v && v.c(),
              (c = Object(o.V)()),
              h && h.c(),
              (d = Object(o.V)()),
              Object(o.o)(u.$$.fragment),
              Object(o.Q)(a, "variant", "filled"),
              Object(o.Q)(a, "accent", "#4C97FF"),
              Object(o.Q)(
                a,
                "style",
                (m = "post" == e[1] && e[0] ? "display:none" : "")
              );
          },
          m(e, p) {
            Object(o.E)(e, a, p),
              Object(o.d)(a, t),
              Object(o.d)(t, r),
              Object(o.d)(a, n),
              Object(o.d)(a, i),
              Object(o.d)(i, s),
              Object(o.d)(a, l),
              v && v.m(a, null),
              Object(o.d)(a, c),
              h && h.m(a, null),
              Object(o.d)(a, d),
              Object(o.H)(u, a, null),
              (k = !0);
          },
          p(e, t) {
            (!k || 16 & t) &&
              g !== (g = e[4]("select.select") + "") &&
              Object(o.R)(r, g),
              (!k || 16 & t) &&
                b !== (b = e[4]("select.selectHelp") + "") &&
                Object(o.R)(s, b),
              "post" !== e[1]
                ? v
                  ? v.p(e, t)
                  : ((v = M(e)), v.c(), v.m(a, c))
                : v && (v.d(1), (v = null)),
              "id" === e[1]
                ? h
                  ? (h.p(e, t), 2 & t && Object(o.db)(h, 1))
                  : ((h = D(e)), h.c(), Object(o.db)(h, 1), h.m(a, d))
                : h &&
                  (Object(o.z)(),
                  Object(o.eb)(h, 1, 1, () => {
                    h = null;
                  }),
                  Object(o.k)());
            const n = {};
            16 & t && (n.text = e[4]("select.loadProject")),
              u.$set(n),
              (!k ||
                (3 & t &&
                  m !== (m = "post" == e[1] && e[0] ? "display:none" : ""))) &&
                Object(o.Q)(a, "style", m);
          },
          i(e) {
            k || (Object(o.db)(h), Object(o.db)(u.$$.fragment, e), (k = !0));
          },
          o(e) {
            Object(o.eb)(h), Object(o.eb)(u.$$.fragment, e), (k = !1);
          },
          d(e) {
            e && Object(o.u)(a), v && v.d(), h && h.d(), Object(o.s)(u);
          },
        }
      );
    }
    function B(e) {
      let a, t;
      return (
        (a = new u.a({
          props: {
            caption: !0,
            $$slots: { default: [R] },
            $$scope: { ctx: e },
          },
        })),
        {
          c() {
            Object(o.o)(a.$$.fragment);
          },
          m(e, r) {
            Object(o.H)(a, e, r), (t = !0);
          },
          p(e, t) {
            const o = {};
            1073741840 & t && (o.$$scope = { dirty: t, ctx: e }), a.$set(o);
          },
          i(e) {
            t || (Object(o.db)(a.$$.fragment, e), (t = !0));
          },
          o(e) {
            Object(o.eb)(a.$$.fragment, e), (t = !1);
          },
          d(e) {
            Object(o.s)(a, e);
          },
        }
      );
    }
    function R(e) {
      let a,
        t,
        r = e[4]("select.loadToContinue") + "";
      return {
        c() {
          (a = Object(o.v)("p")), (t = Object(o.Z)(r));
        },
        m(e, r) {
          Object(o.E)(e, a, r), Object(o.d)(a, t);
        },
        p(e, a) {
          16 & a &&
            r !== (r = e[4]("select.loadToContinue") + "") &&
            Object(o.R)(t, r);
        },
        d(e) {
          e && Object(o.u)(a);
        },
      };
    }
    function W(e) {
      let a,
        t,
        r,
        n,
        i,
        s,
        l = e[2] && V(e);
      (r = new m.a({
        props: { $$slots: { default: [N] }, $$scope: { ctx: e } },
      })),
        r.$on("drop", e[11]);
      let c = !e[6].visible && !e[0] && B(e);
      return {
        c() {
          l && l.c(),
            (a = Object(o.V)()),
            (t = Object(o.v)("center")),
            Object(o.o)(r.$$.fragment),
            (n = Object(o.V)()),
            c && c.c(),
            (i = Object(o.w)());
        },
        m(e, d) {
          l && l.m(e, d),
            Object(o.E)(e, a, d),
            Object(o.E)(e, t, d),
            Object(o.H)(r, t, null),
            Object(o.E)(e, n, d),
            c && c.m(e, d),
            Object(o.E)(e, i, d),
            (s = !0);
        },
        p(e, [t]) {
          e[2]
            ? l
              ? (l.p(e, t), 4 & t && Object(o.db)(l, 1))
              : ((l = V(e)), l.c(), Object(o.db)(l, 1), l.m(a.parentNode, a))
            : l &&
              (Object(o.z)(),
              Object(o.eb)(l, 1, 1, () => {
                l = null;
              }),
              Object(o.k)());
          const n = {};
          1073741883 & t && (n.$$scope = { dirty: t, ctx: e }),
            r.$set(n),
            e[6].visible || e[0]
              ? c &&
                (Object(o.z)(),
                Object(o.eb)(c, 1, 1, () => {
                  c = null;
                }),
                Object(o.k)())
              : c
              ? (c.p(e, t), 65 & t && Object(o.db)(c, 1))
              : ((c = B(e)), c.c(), Object(o.db)(c, 1), c.m(i.parentNode, i));
        },
        i(e) {
          s ||
            (Object(o.db)(l),
            Object(o.db)(r.$$.fragment, e),
            Object(o.db)(c),
            (s = !0));
        },
        o(e) {
          Object(o.eb)(l),
            Object(o.eb)(r.$$.fragment, e),
            Object(o.eb)(c),
            (s = !1);
        },
        d(e) {
          l && l.d(e),
            e && Object(o.u)(a),
            e && Object(o.u)(t),
            Object(o.s)(r),
            e && Object(o.u)(n),
            c && c.d(e),
            e && Object(o.u)(i);
        },
      };
    }
    function F(e, a, t) {
      let n, s, l, c, d;
      Object(o.l)(e, r.a, (e) => t(4, (s = e))),
        Object(o.l)(e, f.c, (e) => t(6, (d = e)));
      const u = Object(j.a)("SelectProject.type", "id");
      Object(o.l)(e, u, (e) => t(1, (n = e))),
        console.log(u, n),
        Object(o.T)(u, (n = "file"), n);
      const p = Object(j.a)("SelectProject.id", "60917032");
      Object(o.l)(e, p, (e) => t(14, (c = e)));
      const m = Object(j.a)("SelectProject.url", "");
      Object(o.l)(e, m, (e) => t(5, (l = e)));
      const k = /^#\d+$/.test(location.hash)
        ? location.hash.substring(1)
        : null;
      k && (Object(o.T)(u, (n = "id"), n), Object(o.T)(p, (c = k), c));
      let g = !1;
      H({
        onStartImporting: () => {
          t(2, (g = !0));
        },
        onCancelImporting: () => {
          t(2, (g = !1));
        },
        onFinishImporting: (e) => {
          g &&
            (Object(o.T)(u, (n = "file"), n),
            t(2, (g = !1)),
            t(3, (h.files = e), h),
            O(e));
        },
      });
      let { projectData: b = null } = a;
      const v = () => {
        t(0, (b = null)), f.a.abort();
      };
      Object(o.T)(p, (c = A(c)), c);
      let h;
      const w = (e) => {
          const a = new DataTransfer();
          for (const t of e) a.items.add(t);
          return a.files;
        },
        S = document.querySelector(".input-for-remembering-project-file");
      S &&
        Object(i.c)(() => {
          const e = S.files;
          e.length && t(3, (h.files = w(e)), h);
        });
      const O = (e) => {
          v(),
            h.files !== e && t(3, (h.files = e), h),
            S && (S.files = w(e)),
            e.length && "file" === n && Object(i.d)().then(T);
        },
        C = async (e) => {
          let a,
            t = "",
            o = null,
            r = "";
          const i = (a, t, o) => {
            "fetch" === a
              ? e.setProgress(t)
              : "assets" === a
              ? (e.setProgressText(
                  s("progress.loadingAssets")
                    .replace("{complete}", t)
                    .replace("{total}", o)
                ),
                e.setProgress(t / o))
              : "compress" === a &&
                (e.setProgressText(s("progress.compressingProject")),
                e.setProgress(t));
          };
          if ("id" === n) {
            if (((o = c), !o)) throw new y.f(s("select.invalidId"));
            (t = `#${o}`),
              e.setProgressText(s("progress.loadingProjectMetadata"));
            const n = await z(o),
              l = n.token;
            (r = n.title), e.setProgressText(s("progress.loadingProjectData"));
            const { promise: d, terminate: u } = await x(o, l, i);
            e.whenAbort(u), (a = await d);
          } else if ("file" === n) {
            const o = h.files,
              n = o && o[0];
            if (!n) throw new y.f(s("select.noFileSelected"));
            (t = `@${n.name}`),
              (r = n.name),
              e.setProgressText(s("progress.compressingProject")),
              (a = await (await I(n, i)).promise);
          } else if ("url" === n) {
            const o = l;
            if (
              !((e) => {
                try {
                  const a = new URL(e);
                  return "http:" === a.protocol || "https:" === a.protocol;
                } catch (e) {
                  return !1;
                }
              })(o)
            )
              throw new y.f(s("select.invalidUrl"));
            (t = `$${o}`),
              (r = ((e) => {
                const a = e.match(/\/([^\/]+)\.sb[2|3]?$/);
                return a ? a[1] : "";
              })(o)),
              e.setProgressText(s("progress.loadingProjectData")),
              (a = await (await P(o, i)).promise);
          } else {
            if ("post" !== n) throw new Error("Unknown type");
            (t = `${Math.random()}`),
              (r = "Ikuyo Packaging System"),
              (a = await (await I(window.postData, i)).promise);
          }
          return { projectId: o, uniqueId: t, title: r, project: a };
        },
        T = async () => {
          v();
          const e = new E.a();
          t(0, (b = await e.do(C(e)))), e.done();
        };
      window.loadFromPostMessage = (e) => {
        Object(o.T)(u, (n = "post"), n), T();
      };
      return (
        (e.$$set = (e) => {
          "projectData" in e && t(0, (b = e.projectData));
        }),
        (e.$$.update = () => {
          16386 & e.$$.dirty && v();
        }),
        [
          b,
          n,
          g,
          h,
          s,
          l,
          d,
          u,
          p,
          m,
          (e) => {
            "Enter" === e.key && T();
          },
          ({ detail: e }) => {
            const a = e.files[0].name;
            (a.endsWith(".sb") || a.endsWith(".sb2") || a.endsWith(".sb3")) &&
              (Object(o.T)(u, (n = "file"), n), O(e.files));
          },
          (e) => {
            O(e.target.files);
          },
          T,
          c,
          () => {
            t(2, (g = !1));
          },
          function () {
            (n = this.__value), u.set(n);
          },
          [[]],
          function (e) {
            o.i[e ? "unshift" : "push"](() => {
              (h = e), t(3, h);
            });
          },
          function () {
            (n = this.__value), u.set(n);
          },
          function () {
            (l = this.value), m.set(l);
          },
        ]
      );
    }
    class q extends o.a {
      constructor(e) {
        super(), Object(o.C)(this, e, F, W, o.M, { projectData: 0 }, L);
      }
    }
    var U = q;
    function Z(e, a, t) {
      const o = e.slice();
      return (o[2] = a[t][0]), (o[3] = a[t][1]), o;
    }
    function J(e) {
      let a,
        t,
        r,
        n = (e[3] || e[2]) + "";
      return {
        c() {
          (a = Object(o.v)("option")),
            (t = Object(o.Z)(n)),
            (a.__value = r = e[2]),
            (a.value = a.__value);
        },
        m(e, r) {
          Object(o.E)(e, a, r), Object(o.d)(a, t);
        },
        p: o.I,
        d(e) {
          e && Object(o.u)(a);
        },
      };
    }
    function K(e) {
      let a,
        t,
        n,
        i = Object.entries(r.c),
        s = [];
      for (let a = 0; a < i.length; a += 1) s[a] = J(Z(e, i, a));
      return {
        c() {
          a = Object(o.v)("select");
          for (let e = 0; e < s.length; e += 1) s[e].c();
          void 0 === e[0] && Object(o.c)(() => e[1].call(a));
        },
        m(r, i) {
          Object(o.E)(r, a, i);
          for (let e = 0; e < s.length; e += 1) s[e] && s[e].m(a, null);
          Object(o.N)(a, e[0], !0),
            t || ((n = Object(o.G)(a, "change", e[1])), (t = !0));
        },
        p(e, [t]) {
          1 & t && Object(o.N)(a, e[0]);
        },
        i: o.I,
        o: o.I,
        d(e) {
          e && Object(o.u)(a), Object(o.t)(s, e), (t = !1), n();
        },
      };
    }
    function _(e, a, t) {
      let n;
      return (
        Object(o.l)(e, r.b, (e) => t(0, (n = e))),
        [
          n,
          function () {
            (n = Object(o.O)(this)), r.b.set(n);
          },
        ]
      );
    }
    class G extends o.a {
      constructor(e) {
        super(), Object(o.C)(this, e, _, K, o.M, {});
      }
    }
    var Q = G;
    function Y(e) {
      let a,
        t,
        r,
        n,
        i,
        s,
        l,
        c,
        d,
        u = e[1]("theme.system") + "",
        p = e[1]("theme.light") + "",
        m = e[1]("theme.dark") + "";
      return {
        c() {
          (a = Object(o.v)("select")),
            (t = Object(o.v)("option")),
            (r = Object(o.Z)(u)),
            (n = Object(o.v)("option")),
            (i = Object(o.Z)(p)),
            (s = Object(o.v)("option")),
            (l = Object(o.Z)(m)),
            (t.__value = "system"),
            (t.value = t.__value),
            (n.__value = "light"),
            (n.value = n.__value),
            (s.__value = "dark"),
            (s.value = s.__value),
            void 0 === e[0] && Object(o.c)(() => e[2].call(a));
        },
        m(u, p) {
          Object(o.E)(u, a, p),
            Object(o.d)(a, t),
            Object(o.d)(t, r),
            Object(o.d)(a, n),
            Object(o.d)(n, i),
            Object(o.d)(a, s),
            Object(o.d)(s, l),
            Object(o.N)(a, e[0], !0),
            c || ((d = Object(o.G)(a, "change", e[2])), (c = !0));
        },
        p(e, [t]) {
          2 & t && u !== (u = e[1]("theme.system") + "") && Object(o.R)(r, u),
            2 & t && p !== (p = e[1]("theme.light") + "") && Object(o.R)(i, p),
            2 & t && m !== (m = e[1]("theme.dark") + "") && Object(o.R)(l, m),
            1 & t && Object(o.N)(a, e[0]);
        },
        i: o.I,
        o: o.I,
        d(e) {
          e && Object(o.u)(a), (c = !1), d();
        },
      };
    }
    function X(e, a, t) {
      let n, i;
      return (
        Object(o.l)(e, f.d, (e) => t(0, (n = e))),
        Object(o.l)(e, r.a, (e) => t(1, (i = e))),
        [
          n,
          i,
          function () {
            (n = Object(o.O)(this)), f.d.set(n);
          },
        ]
      );
    }
    class ee extends o.a {
      constructor(e) {
        super(), Object(o.C)(this, e, X, Y, o.M, {});
      }
    }
    var ae = ee;
    function te(e) {
      Object(o.e)(
        e,
        "svelte-19rq0vp",
        '.progress.svelte-19rq0vp{display:flex;align-items:center;flex-direction:column}.bar-outer.svelte-19rq0vp{width:200px;height:10px;border:1px solid currentColor;margin-bottom:4px;background:black}[theme="dark"] .bar-outer.svelte-19rq0vp{background:transparent}.bar-inner.svelte-19rq0vp{height:100%;width:0;background:white}.text.svelte-19rq0vp{font-style:italic}'
      );
    }
    function oe(e) {
      let a, t, r, n, i, s;
      return {
        c() {
          (a = Object(o.v)("div")),
            (t = Object(o.v)("div")),
            (r = Object(o.v)("div")),
            (n = Object(o.V)()),
            (i = Object(o.v)("div")),
            (s = Object(o.Z)(e[1])),
            Object(o.g)(r, "class", "bar-inner svelte-19rq0vp"),
            Object(o.U)(r, "width", 100 * e[0] + "%"),
            Object(o.g)(t, "class", "bar-outer svelte-19rq0vp"),
            Object(o.g)(i, "class", "text svelte-19rq0vp"),
            Object(o.g)(a, "class", "progress svelte-19rq0vp");
        },
        m(e, l) {
          Object(o.E)(e, a, l),
            Object(o.d)(a, t),
            Object(o.d)(t, r),
            Object(o.d)(a, n),
            Object(o.d)(a, i),
            Object(o.d)(i, s);
        },
        p(e, [a]) {
          1 & a && Object(o.U)(r, "width", 100 * e[0] + "%"),
            2 & a && Object(o.R)(s, e[1]);
        },
        i: o.I,
        o: o.I,
        d(e) {
          e && Object(o.u)(a);
        },
      };
    }
    function re(e, a, t) {
      let { progress: o = 0 } = a,
        { text: r = "" } = a;
      return (
        (e.$$set = (e) => {
          "progress" in e && t(0, (o = e.progress)),
            "text" in e && t(1, (r = e.text));
        }),
        [o, r]
      );
    }
    class ne extends o.a {
      constructor(e) {
        super(),
          Object(o.C)(this, e, re, oe, o.M, { progress: 0, text: 1 }, te);
      }
    }
    var ie = ne,
      se = t(9);
    function le(e) {
      Object(o.e)(
        e,
        "svelte-15nxjx",
        "[p4-modal-visible]{overflow:hidden}.modal.svelte-15nxjx{position:fixed;top:0;left:0;width:100%;height:100%;z-index:20;display:flex;align-items:center;justify-content:center;background-color:rgba(0, 0, 0, 0.75);word-break:break-word}.technical.svelte-15nxjx{font-style:italic}"
      );
    }
    function ce(e) {
      let a, t, r, n, i;
      return (
        (t = new u.a({
          props: { modal: !0, $$slots: { default: [ge] }, $$scope: { ctx: e } },
        })),
        {
          c() {
            (a = Object(o.v)("div")),
              Object(o.o)(t.$$.fragment),
              Object(o.g)(a, "class", "modal svelte-15nxjx");
          },
          m(s, l) {
            Object(o.E)(s, a, l),
              Object(o.H)(t, a, null),
              e[8](a),
              (r = !0),
              n || ((i = Object(o.G)(a, "click", Object(o.P)(e[4]))), (n = !0));
          },
          p(e, a) {
            const o = {};
            1036 & a && (o.$$scope = { dirty: a, ctx: e }), t.$set(o);
          },
          i(e) {
            r || (Object(o.db)(t.$$.fragment, e), (r = !0));
          },
          o(e) {
            Object(o.eb)(t.$$.fragment, e), (r = !1);
          },
          d(r) {
            r && Object(o.u)(a), Object(o.s)(t), e[8](null), (n = !1), i();
          },
        }
      );
    }
    function de(e) {
      let a,
        t,
        r,
        n,
        i,
        s,
        l,
        c,
        d,
        u,
        m = e[3]("p4.errorMessage").replace("{error}", e[2]) + "",
        k = e[3]("p4.reportBug") + "";
      return (
        (i = new p.a({ props: { text: e[3]("p4.close") } })),
        i.$on("click", e[4]),
        {
          c() {
            (a = Object(o.v)("p")),
              (t = Object(o.Z)(m)),
              (r = Object(o.V)()),
              (n = Object(o.v)("p")),
              Object(o.o)(i.$$.fragment),
              (s = Object(o.V)()),
              (l = Object(o.v)("a")),
              (c = Object(o.Z)(k)),
              Object(o.g)(l, "href", (d = se.FEEDBACK_PRIMARY.link));
          },
          m(e, d) {
            Object(o.E)(e, a, d),
              Object(o.d)(a, t),
              Object(o.E)(e, r, d),
              Object(o.E)(e, n, d),
              Object(o.H)(i, n, null),
              Object(o.d)(n, s),
              Object(o.d)(n, l),
              Object(o.d)(l, c),
              (u = !0);
          },
          p(e, a) {
            (!u || 12 & a) &&
              m !==
                (m = e[3]("p4.errorMessage").replace("{error}", e[2]) + "") &&
              Object(o.R)(t, m);
            const r = {};
            8 & a && (r.text = e[3]("p4.close")),
              i.$set(r),
              (!u || 8 & a) &&
                k !== (k = e[3]("p4.reportBug") + "") &&
                Object(o.R)(c, k);
          },
          i(e) {
            u || (Object(o.db)(i.$$.fragment, e), (u = !0));
          },
          o(e) {
            Object(o.eb)(i.$$.fragment, e), (u = !1);
          },
          d(e) {
            e && Object(o.u)(a),
              e && Object(o.u)(r),
              e && Object(o.u)(n),
              Object(o.s)(i);
          },
        }
      );
    }
    function ue(e) {
      let a,
        t,
        r,
        n,
        i,
        s,
        l,
        c,
        u,
        m,
        k,
        g,
        b,
        v,
        h,
        j = e[3]("p4.cannotAccessProject") + "",
        f = e[3]("select.unsharedProjects") + "",
        y = e[3]("p4.cannotAccessProjectCaching") + "";
      return (
        (c = new d({
          props: {
            message: e[3]("select.unsharedProjectsMore"),
            values: {
              link: {
                text: "https://docs.turbowarp.org/unshared-projects",
                href: "https://docs.turbowarp.org/unshared-projects",
                newTab: !0,
              },
            },
          },
        })),
        (v = new p.a({ props: { text: e[3]("p4.close") } })),
        v.$on("click", e[4]),
        {
          c() {
            (a = Object(o.v)("p")),
              (t = Object(o.Z)(j)),
              (r = Object(o.V)()),
              (n = Object(o.v)("p")),
              (i = Object(o.Z)(f)),
              (s = Object(o.V)()),
              (l = Object(o.v)("p")),
              Object(o.o)(c.$$.fragment),
              (u = Object(o.V)()),
              (m = Object(o.v)("p")),
              (k = Object(o.Z)(y)),
              (g = Object(o.V)()),
              (b = Object(o.v)("p")),
              Object(o.o)(v.$$.fragment);
          },
          m(e, d) {
            Object(o.E)(e, a, d),
              Object(o.d)(a, t),
              Object(o.E)(e, r, d),
              Object(o.E)(e, n, d),
              Object(o.d)(n, i),
              Object(o.E)(e, s, d),
              Object(o.E)(e, l, d),
              Object(o.H)(c, l, null),
              Object(o.E)(e, u, d),
              Object(o.E)(e, m, d),
              Object(o.d)(m, k),
              Object(o.E)(e, g, d),
              Object(o.E)(e, b, d),
              Object(o.H)(v, b, null),
              (h = !0);
          },
          p(e, a) {
            (!h || 8 & a) &&
              j !== (j = e[3]("p4.cannotAccessProject") + "") &&
              Object(o.R)(t, j),
              (!h || 8 & a) &&
                f !== (f = e[3]("select.unsharedProjects") + "") &&
                Object(o.R)(i, f);
            const r = {};
            8 & a && (r.message = e[3]("select.unsharedProjectsMore")),
              c.$set(r),
              (!h || 8 & a) &&
                y !== (y = e[3]("p4.cannotAccessProjectCaching") + "") &&
                Object(o.R)(k, y);
            const n = {};
            8 & a && (n.text = e[3]("p4.close")), v.$set(n);
          },
          i(e) {
            h ||
              (Object(o.db)(c.$$.fragment, e),
              Object(o.db)(v.$$.fragment, e),
              (h = !0));
          },
          o(e) {
            Object(o.eb)(c.$$.fragment, e),
              Object(o.eb)(v.$$.fragment, e),
              (h = !1);
          },
          d(e) {
            e && Object(o.u)(a),
              e && Object(o.u)(r),
              e && Object(o.u)(n),
              e && Object(o.u)(s),
              e && Object(o.u)(l),
              Object(o.s)(c),
              e && Object(o.u)(u),
              e && Object(o.u)(m),
              e && Object(o.u)(g),
              e && Object(o.u)(b),
              Object(o.s)(v);
          },
        }
      );
    }
    function pe(e) {
      let a,
        t,
        r,
        n,
        i,
        s,
        l,
        c,
        d,
        u,
        m,
        k = e[3]("p4.outdated") + "";
      return (
        (c = new p.a({ props: { text: e[3]("p4.refresh") } })),
        c.$on("click", e[6]),
        (u = new p.a({ props: { secondary: !0, text: e[3]("p4.close") } })),
        u.$on("click", e[4]),
        {
          c() {
            (a = Object(o.v)("p")),
              (t = Object(o.Z)(k)),
              (r = Object(o.V)()),
              (n = Object(o.v)("p")),
              (i = Object(o.Z)(e[2])),
              (s = Object(o.V)()),
              (l = Object(o.v)("p")),
              Object(o.o)(c.$$.fragment),
              (d = Object(o.V)()),
              Object(o.o)(u.$$.fragment),
              Object(o.g)(n, "class", "technical svelte-15nxjx");
          },
          m(e, p) {
            Object(o.E)(e, a, p),
              Object(o.d)(a, t),
              Object(o.E)(e, r, p),
              Object(o.E)(e, n, p),
              Object(o.d)(n, i),
              Object(o.E)(e, s, p),
              Object(o.E)(e, l, p),
              Object(o.H)(c, l, null),
              Object(o.d)(l, d),
              Object(o.H)(u, l, null),
              (m = !0);
          },
          p(e, a) {
            (!m || 8 & a) &&
              k !== (k = e[3]("p4.outdated") + "") &&
              Object(o.R)(t, k),
              (!m || 4 & a) && Object(o.R)(i, e[2]);
            const r = {};
            8 & a && (r.text = e[3]("p4.refresh")), c.$set(r);
            const n = {};
            8 & a && (n.text = e[3]("p4.close")), u.$set(n);
          },
          i(e) {
            m ||
              (Object(o.db)(c.$$.fragment, e),
              Object(o.db)(u.$$.fragment, e),
              (m = !0));
          },
          o(e) {
            Object(o.eb)(c.$$.fragment, e),
              Object(o.eb)(u.$$.fragment, e),
              (m = !1);
          },
          d(e) {
            e && Object(o.u)(a),
              e && Object(o.u)(r),
              e && Object(o.u)(n),
              e && Object(o.u)(s),
              e && Object(o.u)(l),
              Object(o.s)(c),
              Object(o.s)(u);
          },
        }
      );
    }
    function me(e) {
      let a, t, r, n, i, s;
      return (
        (t = new d({
          props: {
            message: e[3]("p4.networkError"),
            values: { url: { text: e[2].url, href: e[2].url, newTab: !0 } },
          },
        })),
        (i = new p.a({ props: { text: e[3]("p4.close") } })),
        i.$on("click", e[4]),
        {
          c() {
            (a = Object(o.v)("p")),
              Object(o.o)(t.$$.fragment),
              (r = Object(o.V)()),
              (n = Object(o.v)("p")),
              Object(o.o)(i.$$.fragment);
          },
          m(e, l) {
            Object(o.E)(e, a, l),
              Object(o.H)(t, a, null),
              Object(o.E)(e, r, l),
              Object(o.E)(e, n, l),
              Object(o.H)(i, n, null),
              (s = !0);
          },
          p(e, a) {
            const o = {};
            8 & a && (o.message = e[3]("p4.networkError")),
              4 & a &&
                (o.values = {
                  url: { text: e[2].url, href: e[2].url, newTab: !0 },
                }),
              t.$set(o);
            const r = {};
            8 & a && (r.text = e[3]("p4.close")), i.$set(r);
          },
          i(e) {
            s ||
              (Object(o.db)(t.$$.fragment, e),
              Object(o.db)(i.$$.fragment, e),
              (s = !0));
          },
          o(e) {
            Object(o.eb)(t.$$.fragment, e),
              Object(o.eb)(i.$$.fragment, e),
              (s = !1);
          },
          d(e) {
            e && Object(o.u)(a),
              Object(o.s)(t),
              e && Object(o.u)(r),
              e && Object(o.u)(n),
              Object(o.s)(i);
          },
        }
      );
    }
    function ke(e) {
      let a,
        t,
        r,
        n,
        i,
        s,
        l = e[2].message + "";
      return (
        (i = new p.a({ props: { text: e[3]("p4.close") } })),
        i.$on("click", e[4]),
        {
          c() {
            (a = Object(o.v)("p")),
              (t = Object(o.Z)(l)),
              (r = Object(o.V)()),
              (n = Object(o.v)("p")),
              Object(o.o)(i.$$.fragment);
          },
          m(e, l) {
            Object(o.E)(e, a, l),
              Object(o.d)(a, t),
              Object(o.E)(e, r, l),
              Object(o.E)(e, n, l),
              Object(o.H)(i, n, null),
              (s = !0);
          },
          p(e, a) {
            (!s || 4 & a) && l !== (l = e[2].message + "") && Object(o.R)(t, l);
            const r = {};
            8 & a && (r.text = e[3]("p4.close")), i.$set(r);
          },
          i(e) {
            s || (Object(o.db)(i.$$.fragment, e), (s = !0));
          },
          o(e) {
            Object(o.eb)(i.$$.fragment, e), (s = !1);
          },
          d(e) {
            e && Object(o.u)(a),
              e && Object(o.u)(r),
              e && Object(o.u)(n),
              Object(o.s)(i);
          },
        }
      );
    }
    function ge(e) {
      let a,
        t,
        r,
        n,
        i,
        s,
        l,
        c = e[3]("p4.error") + "";
      const d = [ke, me, pe, ue, de],
        u = [];
      function p(e, a) {
        return e[2] instanceof y.f
          ? 0
          : e[2] instanceof y.e
          ? 1
          : e[2] instanceof y.d
          ? 2
          : e[2] instanceof y.b
          ? 3
          : 4;
      }
      return (
        (n = p(e)),
        (i = u[n] = d[n](e)),
        {
          c() {
            (a = Object(o.v)("h2")),
              (t = Object(o.Z)(c)),
              (r = Object(o.V)()),
              i.c(),
              (s = Object(o.w)());
          },
          m(e, i) {
            Object(o.E)(e, a, i),
              Object(o.d)(a, t),
              Object(o.E)(e, r, i),
              u[n].m(e, i),
              Object(o.E)(e, s, i),
              (l = !0);
          },
          p(e, a) {
            (!l || 8 & a) &&
              c !== (c = e[3]("p4.error") + "") &&
              Object(o.R)(t, c);
            let r = n;
            (n = p(e)),
              n === r
                ? u[n].p(e, a)
                : (Object(o.z)(),
                  Object(o.eb)(u[r], 1, 1, () => {
                    u[r] = null;
                  }),
                  Object(o.k)(),
                  (i = u[n]),
                  i ? i.p(e, a) : ((i = u[n] = d[n](e)), i.c()),
                  Object(o.db)(i, 1),
                  i.m(s.parentNode, s));
          },
          i(e) {
            l || (Object(o.db)(i), (l = !0));
          },
          o(e) {
            Object(o.eb)(i), (l = !1);
          },
          d(e) {
            e && Object(o.u)(a),
              e && Object(o.u)(r),
              u[n].d(e),
              e && Object(o.u)(s);
          },
        }
      );
    }
    function be(e) {
      let a,
        t,
        r,
        n,
        i = e[0] && ce(e);
      return {
        c() {
          i && i.c(), (a = Object(o.w)());
        },
        m(s, l) {
          i && i.m(s, l),
            Object(o.E)(s, a, l),
            (t = !0),
            r || ((n = Object(o.G)(window, "keydown", e[5])), (r = !0));
        },
        p(e, [t]) {
          e[0]
            ? i
              ? (i.p(e, t), 1 & t && Object(o.db)(i, 1))
              : ((i = ce(e)), i.c(), Object(o.db)(i, 1), i.m(a.parentNode, a))
            : i &&
              (Object(o.z)(),
              Object(o.eb)(i, 1, 1, () => {
                i = null;
              }),
              Object(o.k)());
        },
        i(e) {
          t || (Object(o.db)(i), (t = !0));
        },
        o(e) {
          Object(o.eb)(i), (t = !1);
        },
        d(e) {
          i && i.d(e), e && Object(o.u)(a), (r = !1), n();
        },
      };
    }
    function ve(e, a, t) {
      let n, i;
      Object(o.l)(e, f.b, (e) => t(2, (n = e))),
        Object(o.l)(e, r.a, (e) => t(3, (i = e)));
      let s,
        l,
        { modalVisible: c } = a;
      const d = () =>
          Array.from(
            document.querySelectorAll(
              "a, button, input, select, summary, textarea"
            )
          ).filter((e) => !s || !s.contains(e)),
        u = () => {
          Object(o.T)(f.b, (n = null), n);
        };
      return (
        (e.$$set = (e) => {
          "modalVisible" in e && t(0, (c = e.modalVisible));
        }),
        (e.$$.update = () => {
          if (
            (132 & e.$$.dirty &&
              (t(0, (c = !!n)),
              n
                ? (console.error(n),
                  document.body.setAttribute("p4-modal-visible", ""),
                  t(7, (l = document.activeElement)),
                  d().forEach((e) => {
                    e.setAttribute("p4-old-tabIndex", e.tabIndex),
                      (e.tabIndex = -1);
                  }))
                : (document.body.removeAttribute("p4-modal-visible"),
                  d().forEach((e) => {
                    e.hasAttribute("p4-old-tabIndex") &&
                      ((e.tabIndex = e.getAttribute("p4-old-tabIndex")),
                      e.removeAttribute("p4-old-tabIndex"));
                  }),
                  l && l.focus())),
            2 & e.$$.dirty && s)
          ) {
            const e = s.querySelector("button");
            e && e.focus();
          }
        }),
        [
          c,
          s,
          n,
          i,
          u,
          (e) => {
            "Escape" === e.key && u();
          },
          () => location.reload(),
          l,
          function (e) {
            o.i[e ? "unshift" : "push"](() => {
              (s = e), t(1, s);
            });
          },
        ]
      );
    }
    class he extends o.a {
      constructor(e) {
        super(), Object(o.C)(this, e, ve, be, o.M, { modalVisible: 0 }, le);
      }
    }
    var je = he;
    class fe extends o.a {
      constructor(e) {
        super(), Object(o.C)(this, e, null, null, o.M, {});
      }
    }
    var ye = fe,
      we = t(8);
    function ze(e) {
      Object(o.e)(
        e,
        "svelte-1c4nbyi",
        "footer.svelte-1c4nbyi{text-align:center}"
      );
    }
    function Se(e) {
      e[14] = e[15].default;
    }
    function Oe(e) {
      let a,
        t,
        r,
        n =
          we.c &&
          (function () {
            let e, a, t;
            return {
              c() {
                (e = Object(o.Z)("- ")),
                  (a = Object(o.v)("a")),
                  (t = Object(o.Z)(se.WEBSITE)),
                  Object(o.g)(a, "href", se.WEBSITE);
              },
              m(r, n) {
                Object(o.E)(r, e, n), Object(o.E)(r, a, n), Object(o.d)(a, t);
              },
              p: o.I,
              d(t) {
                t && Object(o.u)(e), t && Object(o.u)(a);
              },
            };
          })();
      return {
        c() {
          (a = Object(o.v)("p")),
            (t = Object(o.Z)(we.e)),
            (r = Object(o.V)()),
            n && n.c(),
            Object(o.g)(a, "class", "version");
        },
        m(e, i) {
          Object(o.E)(e, a, i),
            Object(o.d)(a, t),
            Object(o.d)(a, r),
            n && n.m(a, null);
        },
        p(e, a) {
          we.c && n.p(e, a);
        },
        d(e) {
          e && Object(o.u)(a), n && n.d();
        },
      };
    }
    function Ce(e) {
      let a,
        t,
        r,
        n,
        i,
        s,
        l = e[3]("p4.description1") + "",
        c = we.e && Oe();
      return {
        c() {
          (a = Object(o.v)("div")),
            (t = Object(o.v)("h1")),
            (t.textContent = `${se.APP_NAME}`),
            (r = Object(o.V)()),
            c && c.c(),
            (n = Object(o.V)()),
            (i = Object(o.v)("p")),
            (s = Object(o.Z)(l));
        },
        m(e, l) {
          Object(o.E)(e, a, l),
            Object(o.d)(a, t),
            Object(o.d)(a, r),
            c && c.m(a, null),
            Object(o.d)(a, n),
            Object(o.d)(a, i),
            Object(o.d)(i, s);
        },
        p(e, a) {
          we.e && c.p(e, a),
            8 & a &&
              l !== (l = e[3]("p4.description1") + "") &&
              Object(o.R)(s, l);
        },
        d(e) {
          e && Object(o.u)(a), c && c.d();
        },
      };
    }
    function xe(e) {
      let a, t;
      return (
        (a = new u.a({
          props: {
            accent: "#4C97FF",
            $$slots: { default: [Ie] },
            $$scope: { ctx: e },
          },
        })),
        {
          c() {
            Object(o.o)(a.$$.fragment);
          },
          m(e, r) {
            Object(o.H)(a, e, r), (t = !0);
          },
          p(e, t) {
            const o = {};
            65544 & t && (o.$$scope = { dirty: t, ctx: e }), a.$set(o);
          },
          i(e) {
            t || (Object(o.db)(a.$$.fragment, e), (t = !0));
          },
          o(e) {
            Object(o.eb)(a.$$.fragment, e), (t = !1);
          },
          d(e) {
            Object(o.s)(a, e);
          },
        }
      );
    }
    function Pe(e) {
      let a, t, r;
      function n(a) {
        e[9](a);
      }
      let i = {};
      return (
        void 0 !== e[0] && (i.projectData = e[0]),
        (a = new U({ props: i })),
        o.i.push(() => Object(o.h)(a, "projectData", n)),
        {
          c() {
            Object(o.o)(a.$$.fragment);
          },
          m(e, t) {
            Object(o.H)(a, e, t), (r = !0);
          },
          p(e, r) {
            const n = {};
            !t &&
              1 & r &&
              ((t = !0), (n.projectData = e[0]), Object(o.b)(() => (t = !1))),
              a.$set(n);
          },
          i(e) {
            r || (Object(o.db)(a.$$.fragment, e), (r = !0));
          },
          o(e) {
            Object(o.eb)(a.$$.fragment, e), (r = !1);
          },
          d(e) {
            Object(o.s)(a, e);
          },
        }
      );
    }
    function Ie(e) {
      let a,
        t,
        r,
        n,
        i,
        s = e[3]("p4.browserNotSupported") + "",
        l = e[3]("p4.browserNotSupportedDescription") + "";
      return {
        c() {
          (a = Object(o.v)("h2")),
            (t = Object(o.Z)(s)),
            (r = Object(o.V)()),
            (n = Object(o.v)("p")),
            (i = Object(o.Z)(l));
        },
        m(e, s) {
          Object(o.E)(e, a, s),
            Object(o.d)(a, t),
            Object(o.E)(e, r, s),
            Object(o.E)(e, n, s),
            Object(o.d)(n, i);
        },
        p(e, a) {
          8 & a &&
            s !== (s = e[3]("p4.browserNotSupported") + "") &&
            Object(o.R)(t, s),
            8 & a &&
              l !== (l = e[3]("p4.browserNotSupportedDescription") + "") &&
              Object(o.R)(i, l);
        },
        d(e) {
          e && Object(o.u)(a), e && Object(o.u)(r), e && Object(o.u)(n);
        },
      };
    }
    function Ae(e) {
      let a,
        t,
        r,
        n = {
          ctx: e,
          current: null,
          token: null,
          hasCatch: !0,
          pending: Le,
          then: He,
          catch: Ee,
          value: 15,
          blocks: [, , ,],
        };
      return (
        Object(o.A)((t = e[5]()), n),
        {
          c() {
            (a = Object(o.w)()), n.block.c();
          },
          m(e, t) {
            Object(o.E)(e, a, t),
              n.block.m(e, (n.anchor = t)),
              (n.mount = () => a.parentNode),
              (n.anchor = a),
              (r = !0);
          },
          p(a, t) {
            (e = a), Object(o.fb)(n, e, t);
          },
          i(e) {
            r || (Object(o.db)(n.block), (r = !0));
          },
          o(e) {
            for (let e = 0; e < 3; e += 1) {
              const a = n.blocks[e];
              Object(o.eb)(a);
            }
            r = !1;
          },
          d(e) {
            e && Object(o.u)(a), n.block.d(e), (n.token = null), (n = null);
          },
        }
      );
    }
    function Ee(e) {
      let a, t;
      return (
        (a = new u.a({
          props: {
            center: !0,
            $$slots: { default: [Te] },
            $$scope: { ctx: e },
          },
        })),
        {
          c() {
            Object(o.o)(a.$$.fragment);
          },
          m(e, r) {
            Object(o.H)(a, e, r), (t = !0);
          },
          p(e, t) {
            const o = {};
            65544 & t && (o.$$scope = { dirty: t, ctx: e }), a.$set(o);
          },
          i(e) {
            t || (Object(o.db)(a.$$.fragment, e), (t = !0));
          },
          o(e) {
            Object(o.eb)(a.$$.fragment, e), (t = !1);
          },
          d(e) {
            Object(o.s)(a, e);
          },
        }
      );
    }
    function Te(e) {
      let a,
        t,
        r = e[3]("p4.unknownImportError") + "";
      return {
        c() {
          (a = Object(o.v)("p")), (t = Object(o.Z)(r));
        },
        m(e, r) {
          Object(o.E)(e, a, r), Object(o.d)(a, t);
        },
        p(e, a) {
          8 & a &&
            r !== (r = e[3]("p4.unknownImportError") + "") &&
            Object(o.R)(t, r);
        },
        d(e) {
          e && Object(o.u)(a);
        },
      };
    }
    function He(e) {
      let a, t, r, i, s;
      function l(a) {
        e[10](a);
      }
      Se(e);
      let c = { projectData: e[0] };
      return (
        void 0 !== e[1] && (c.title = e[1]),
        (t = new e[14]({ props: c })),
        o.i.push(() => Object(o.h)(t, "title", l)),
        {
          c() {
            (a = Object(o.v)("div")), Object(o.o)(t.$$.fragment);
          },
          m(e, r) {
            Object(o.E)(e, a, r), Object(o.H)(t, a, null), (s = !0);
          },
          p(e, a) {
            Se(e);
            const n = {};
            1 & a && (n.projectData = e[0]),
              !r &&
                2 & a &&
                ((r = !0), (n.title = e[1]), Object(o.b)(() => (r = !1))),
              t.$set(n);
          },
          i(e) {
            s ||
              (Object(o.db)(t.$$.fragment, e),
              i ||
                Object(o.c)(() => {
                  (i = Object(o.p)(a, n.a, {})), i.start();
                }),
              (s = !0));
          },
          o(e) {
            Object(o.eb)(t.$$.fragment, e), (s = !1);
          },
          d(e) {
            e && Object(o.u)(a), Object(o.s)(t);
          },
        }
      );
    }
    function Le(e) {
      let a, t;
      return (
        (a = new u.a({
          props: {
            center: !0,
            $$slots: { default: [Ve] },
            $$scope: { ctx: e },
          },
        })),
        {
          c() {
            Object(o.o)(a.$$.fragment);
          },
          m(e, r) {
            Object(o.H)(a, e, r), (t = !0);
          },
          p(e, t) {
            const o = {};
            65544 & t && (o.$$scope = { dirty: t, ctx: e }), a.$set(o);
          },
          i(e) {
            t || (Object(o.db)(a.$$.fragment, e), (t = !0));
          },
          o(e) {
            Object(o.eb)(a.$$.fragment, e), (t = !1);
          },
          d(e) {
            Object(o.s)(a, e);
          },
        }
      );
    }
    function Ve(e) {
      let a, t;
      return (
        (a = new ie({ props: { text: e[3]("p4.importingInterface") } })),
        {
          c() {
            Object(o.o)(a.$$.fragment);
          },
          m(e, r) {
            Object(o.H)(a, e, r), (t = !0);
          },
          p(e, t) {
            const o = {};
            8 & t && (o.text = e[3]("p4.importingInterface")), a.$set(o);
          },
          i(e) {
            t || (Object(o.db)(a.$$.fragment, e), (t = !0));
          },
          o(e) {
            Object(o.eb)(a.$$.fragment, e), (t = !1);
          },
          d(e) {
            Object(o.s)(a, e);
          },
        }
      );
    }
    function Me(e) {
      let a, t;
      return (
        (a = new u.a({
          props: {
            center: !0,
            $$slots: { default: [$e] },
            $$scope: { ctx: e },
          },
        })),
        {
          c() {
            Object(o.o)(a.$$.fragment);
          },
          m(e, r) {
            Object(o.H)(a, e, r), (t = !0);
          },
          p(e, t) {
            const o = {};
            65552 & t && (o.$$scope = { dirty: t, ctx: e }), a.$set(o);
          },
          i(e) {
            t || (Object(o.db)(a.$$.fragment, e), (t = !0));
          },
          o(e) {
            Object(o.eb)(a.$$.fragment, e), (t = !1);
          },
          d(e) {
            Object(o.s)(a, e);
          },
        }
      );
    }
    function $e(e) {
      let a, t;
      return (
        (a = new ie({ props: { progress: e[4].progress, text: e[4].text } })),
        {
          c() {
            Object(o.o)(a.$$.fragment);
          },
          m(e, r) {
            Object(o.H)(a, e, r), (t = !0);
          },
          p(e, t) {
            const o = {};
            16 & t && (o.progress = e[4].progress),
              16 & t && (o.text = e[4].text),
              a.$set(o);
          },
          i(e) {
            t || (Object(o.db)(a.$$.fragment, e), (t = !0));
          },
          o(e) {
            Object(o.eb)(a.$$.fragment, e), (t = !1);
          },
          d(e) {
            Object(o.s)(a, e);
          },
        }
      );
    }
    function De(e) {
      let a, t, r, n, i, s, l, c, d, p, m, k, g, b, v, h, j, f, y;
      function w(a) {
        e[8](a);
      }
      let z = {};
      void 0 !== e[2] && (z.modalVisible = e[2]),
        (a = new je({ props: z })),
        o.i.push(() => Object(o.h)(a, "modalVisible", w)),
        (i = new u.a({
          props: {
            accent: se.ACCENT_COLOR,
            $$slots: { default: [Ce] },
            $$scope: { ctx: e },
          },
        }));
      let S =
        !we.c &&
        (function () {
          let e, a;
          return (
            (e = new ye({})),
            {
              c() {
                Object(o.o)(e.$$.fragment);
              },
              m(t, r) {
                Object(o.H)(e, t, r), (a = !0);
              },
              i(t) {
                a || (Object(o.db)(e.$$.fragment, t), (a = !0));
              },
              o(t) {
                Object(o.eb)(e.$$.fragment, t), (a = !1);
              },
              d(a) {
                Object(o.s)(e, a);
              },
            }
          );
        })();
      const O = [Pe, xe],
        C = [];
      (c = we.d ? 0 : 1), (d = C[c] = O[c](e));
      let x = e[0] && Ae(e),
        P = e[4].visible && Me(e);
      return (
        (v = new ae({})),
        (f = new Q({})),
        {
          c() {
            Object(o.o)(a.$$.fragment),
              (r = Object(o.V)()),
              (n = Object(o.v)("main")),
              Object(o.o)(i.$$.fragment),
              (s = Object(o.V)()),
              S && S.c(),
              (l = Object(o.V)()),
              d.c(),
              (p = Object(o.V)()),
              x && x.c(),
              (m = Object(o.V)()),
              P && P.c(),
              (k = Object(o.V)()),
              (g = Object(o.v)("footer")),
              (b = Object(o.v)("div")),
              Object(o.o)(v.$$.fragment),
              (h = Object(o.V)()),
              (j = Object(o.v)("div")),
              Object(o.o)(f.$$.fragment),
              Object(o.g)(g, "class", "svelte-1c4nbyi"),
              Object(o.g)(n, "aria-hidden", e[2]),
              Object(o.cb)(n, "is-not-safari", !we.b);
          },
          m(e, t) {
            Object(o.H)(a, e, t),
              Object(o.E)(e, r, t),
              Object(o.E)(e, n, t),
              Object(o.H)(i, n, null),
              Object(o.d)(n, s),
              S && S.m(n, null),
              Object(o.d)(n, l),
              C[c].m(n, null),
              Object(o.d)(n, p),
              x && x.m(n, null),
              Object(o.d)(n, m),
              P && P.m(n, null),
              Object(o.d)(n, k),
              Object(o.d)(n, g),
              Object(o.d)(g, b),
              Object(o.H)(v, b, null),
              Object(o.d)(g, h),
              Object(o.d)(g, j),
              Object(o.H)(f, j, null),
              (y = !0);
          },
          p(e, [r]) {
            const s = {};
            !t &&
              4 & r &&
              ((t = !0), (s.modalVisible = e[2]), Object(o.b)(() => (t = !1))),
              a.$set(s);
            const l = {};
            65544 & r && (l.$$scope = { dirty: r, ctx: e }),
              i.$set(l),
              d.p(e, r),
              e[0]
                ? x
                  ? (x.p(e, r), 1 & r && Object(o.db)(x, 1))
                  : ((x = Ae(e)), x.c(), Object(o.db)(x, 1), x.m(n, m))
                : x &&
                  (Object(o.z)(),
                  Object(o.eb)(x, 1, 1, () => {
                    x = null;
                  }),
                  Object(o.k)()),
              e[4].visible
                ? P
                  ? (P.p(e, r), 16 & r && Object(o.db)(P, 1))
                  : ((P = Me(e)), P.c(), Object(o.db)(P, 1), P.m(n, k))
                : P &&
                  (Object(o.z)(),
                  Object(o.eb)(P, 1, 1, () => {
                    P = null;
                  }),
                  Object(o.k)()),
              (!y || 4 & r) && Object(o.g)(n, "aria-hidden", e[2]);
          },
          i(e) {
            y ||
              (Object(o.db)(a.$$.fragment, e),
              Object(o.db)(i.$$.fragment, e),
              Object(o.db)(S),
              Object(o.db)(d),
              Object(o.db)(x),
              Object(o.db)(P),
              Object(o.db)(v.$$.fragment, e),
              Object(o.db)(f.$$.fragment, e),
              (y = !0));
          },
          o(e) {
            Object(o.eb)(a.$$.fragment, e),
              Object(o.eb)(i.$$.fragment, e),
              Object(o.eb)(S),
              Object(o.eb)(d),
              Object(o.eb)(x),
              Object(o.eb)(P),
              Object(o.eb)(v.$$.fragment, e),
              Object(o.eb)(f.$$.fragment, e),
              (y = !1);
          },
          d(e) {
            Object(o.s)(a, e),
              e && Object(o.u)(r),
              e && Object(o.u)(n),
              Object(o.s)(i),
              S && S.d(),
              C[c].d(),
              x && x.d(),
              P && P.d(),
              Object(o.s)(v),
              Object(o.s)(f);
          },
        }
      );
    }
    function Ne(e, a, n) {
      let i, s, l, c, d;
      Object(o.l)(e, f.b, (e) => n(11, (i = e))),
        Object(o.l)(e, f.d, (e) => n(7, (s = e))),
        Object(o.l)(e, r.a, (e) => n(3, (l = e))),
        Object(o.l)(e, f.c, (e) => n(4, (c = e)));
      const u = window.matchMedia("(prefers-color-scheme: dark)");
      let p = u.matches ? "dark" : "light";
      u.addEventListener &&
        u.addEventListener("change", () => {
          n(6, (p = u.matches ? "dark" : "light"));
        });
      let m = !1;
      const k = document.title;
      let g = "";
      const b = () =>
        t
          .e(5)
          .then(t.bind(null, 156))
          .catch((e) => {
            Object(o.T)(f.b, (i = e), i);
          });
      return (
        b(),
        (e.$$.update = () => {
          192 & e.$$.dirty &&
            document.documentElement.setAttribute(
              "theme",
              "system" === s ? p : s
            ),
            3 & e.$$.dirty &&
              (document.title = d && g ? `${g} - ${se.APP_NAME}` : k);
        }),
        [
          d,
          g,
          m,
          l,
          c,
          b,
          p,
          s,
          function (e) {
            (m = e), n(2, m);
          },
          function (e) {
            (d = e), n(0, d);
          },
          function (e) {
            (g = e), n(1, g);
          },
        ]
      );
    }
    class Be extends o.a {
      constructor(e) {
        super(), Object(o.C)(this, e, Ne, De, o.M, {}, ze);
      }
    }
    var Re = Be;
    t.p;
    new Re({ target: document.getElementById("app") });
    document.body.setAttribute("p4-loaded", "");
  },
]);
//# sourceMappingURL=p4.8927bbbc7e1fc3891fb7.js.map
