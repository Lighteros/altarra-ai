import {
  r as x,
  m as L,
  v as U,
  _ as b,
  t as ae,
  p as te,
  q as W,
  j as V,
} from "./index.5783a347.js";
import { c as Ce } from "./index.adbb0b1c.js";
var xe = x.exports.createContext({});
const oe = xe;
function l(e, r) {
  we(e) && (e = "100%");
  var n = ke(e);
  return (
    (e = r === 360 ? e : Math.min(r, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * r), 10) / 100),
    Math.abs(e - r) < 1e-6
      ? 1
      : (r === 360
          ? (e = (e < 0 ? (e % r) + r : e % r) / parseFloat(String(r)))
          : (e = (e % r) / parseFloat(String(r))),
        e)
  );
}
function we(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function ke(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Te(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function k(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function E(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Se(e, r, n) {
  return { r: l(e, 255) * 255, g: l(r, 255) * 255, b: l(n, 255) * 255 };
}
function F(e, r, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (r - e) * (6 * n)
      : n < 1 / 2
      ? r
      : n < 2 / 3
      ? e + (r - e) * (2 / 3 - n) * 6
      : e
  );
}
function Ae(e, r, n) {
  var a, t, o;
  if (((e = l(e, 360)), (r = l(r, 100)), (n = l(n, 100)), r === 0))
    (t = n), (o = n), (a = n);
  else {
    var f = n < 0.5 ? n * (1 + r) : n + r - n * r,
      i = 2 * n - f;
    (a = F(i, f, e + 1 / 3)), (t = F(i, f, e)), (o = F(i, f, e - 1 / 3));
  }
  return { r: a * 255, g: t * 255, b: o * 255 };
}
function Me(e, r, n) {
  (e = l(e, 255)), (r = l(r, 255)), (n = l(n, 255));
  var a = Math.max(e, r, n),
    t = Math.min(e, r, n),
    o = 0,
    f = a,
    i = a - t,
    c = a === 0 ? 0 : i / a;
  if (a === t) o = 0;
  else {
    switch (a) {
      case e:
        o = (r - n) / i + (r < n ? 6 : 0);
        break;
      case r:
        o = (n - e) / i + 2;
        break;
      case n:
        o = (e - r) / i + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: c, v: f };
}
function Ne(e, r, n) {
  (e = l(e, 360) * 6), (r = l(r, 100)), (n = l(n, 100));
  var a = Math.floor(e),
    t = e - a,
    o = n * (1 - r),
    f = n * (1 - t * r),
    i = n * (1 - (1 - t) * r),
    c = a % 6,
    g = [n, f, o, o, i, n][c],
    s = [i, n, n, f, o, o][c],
    v = [o, o, i, n, n, f][c];
  return { r: g * 255, g: s * 255, b: v * 255 };
}
function Ee(e, r, n, a) {
  var t = [
    E(Math.round(e).toString(16)),
    E(Math.round(r).toString(16)),
    E(Math.round(n).toString(16)),
  ];
  return a &&
    t[0].startsWith(t[0].charAt(1)) &&
    t[1].startsWith(t[1].charAt(1)) &&
    t[2].startsWith(t[2].charAt(1))
    ? t[0].charAt(0) + t[1].charAt(0) + t[2].charAt(0)
    : t.join("");
}
function $(e) {
  return u(e) / 255;
}
function u(e) {
  return parseInt(e, 16);
}
var G = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
};
function y(e) {
  var r = { r: 0, g: 0, b: 0 },
    n = 1,
    a = null,
    t = null,
    o = null,
    f = !1,
    i = !1;
  return (
    typeof e == "string" && (e = Re(e)),
    typeof e == "object" &&
      (m(e.r) && m(e.g) && m(e.b)
        ? ((r = Se(e.r, e.g, e.b)),
          (f = !0),
          (i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb"))
        : m(e.h) && m(e.s) && m(e.v)
        ? ((a = k(e.s)),
          (t = k(e.v)),
          (r = Ne(e.h, a, t)),
          (f = !0),
          (i = "hsv"))
        : m(e.h) &&
          m(e.s) &&
          m(e.l) &&
          ((a = k(e.s)),
          (o = k(e.l)),
          (r = Ae(e.h, a, o)),
          (f = !0),
          (i = "hsl")),
      Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)),
    (n = Te(n)),
    {
      ok: f,
      format: e.format || i,
      r: Math.min(255, Math.max(r.r, 0)),
      g: Math.min(255, Math.max(r.g, 0)),
      b: Math.min(255, Math.max(r.b, 0)),
      a: n,
    }
  );
}
var Fe = "[-\\+]?\\d+%?",
  Ie = "[-\\+]?\\d*\\.\\d+%?",
  h = "(?:".concat(Ie, ")|(?:").concat(Fe, ")"),
  I = "[\\s|\\(]+("
    .concat(h, ")[,|\\s]+(")
    .concat(h, ")[,|\\s]+(")
    .concat(h, ")\\s*\\)?"),
  R = "[\\s|\\(]+("
    .concat(h, ")[,|\\s]+(")
    .concat(h, ")[,|\\s]+(")
    .concat(h, ")[,|\\s]+(")
    .concat(h, ")\\s*\\)?"),
  d = {
    CSS_UNIT: new RegExp(h),
    rgb: new RegExp("rgb" + I),
    rgba: new RegExp("rgba" + R),
    hsl: new RegExp("hsl" + I),
    hsla: new RegExp("hsla" + R),
    hsv: new RegExp("hsv" + I),
    hsva: new RegExp("hsva" + R),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function Re(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var r = !1;
  if (G[e]) (e = G[e]), (r = !0);
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = d.rgb.exec(e);
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = d.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = d.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = d.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = d.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = d.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = d.hex8.exec(e)),
                          n
                            ? {
                                r: u(n[1]),
                                g: u(n[2]),
                                b: u(n[3]),
                                a: $(n[4]),
                                format: r ? "name" : "hex8",
                              }
                            : ((n = d.hex6.exec(e)),
                              n
                                ? {
                                    r: u(n[1]),
                                    g: u(n[2]),
                                    b: u(n[3]),
                                    format: r ? "name" : "hex",
                                  }
                                : ((n = d.hex4.exec(e)),
                                  n
                                    ? {
                                        r: u(n[1] + n[1]),
                                        g: u(n[2] + n[2]),
                                        b: u(n[3] + n[3]),
                                        a: $(n[4] + n[4]),
                                        format: r ? "name" : "hex8",
                                      }
                                    : ((n = d.hex3.exec(e)),
                                      n
                                        ? {
                                            r: u(n[1] + n[1]),
                                            g: u(n[2] + n[2]),
                                            b: u(n[3] + n[3]),
                                            format: r ? "name" : "hex",
                                          }
                                        : !1)))))))));
}
function m(e) {
  return Boolean(d.CSS_UNIT.exec(String(e)));
}
var T = 2,
  K = 0.16,
  Pe = 0.05,
  je = 0.05,
  He = 0.15,
  ie = 5,
  fe = 4,
  De = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
function Q(e) {
  var r = e.r,
    n = e.g,
    a = e.b,
    t = Me(r, n, a);
  return { h: t.h * 360, s: t.s, v: t.v };
}
function S(e) {
  var r = e.r,
    n = e.g,
    a = e.b;
  return "#".concat(Ee(r, n, a, !1));
}
function Oe(e, r, n) {
  var a = n / 100,
    t = {
      r: (r.r - e.r) * a + e.r,
      g: (r.g - e.g) * a + e.g,
      b: (r.b - e.b) * a + e.b,
    };
  return t;
}
function Y(e, r, n) {
  var a;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (a = n ? Math.round(e.h) - T * r : Math.round(e.h) + T * r)
      : (a = n ? Math.round(e.h) + T * r : Math.round(e.h) - T * r),
    a < 0 ? (a += 360) : a >= 360 && (a -= 360),
    a
  );
}
function Z(e, r, n) {
  if (e.h === 0 && e.s === 0) return e.s;
  var a;
  return (
    n ? (a = e.s - K * r) : r === fe ? (a = e.s + K) : (a = e.s + Pe * r),
    a > 1 && (a = 1),
    n && r === ie && a > 0.1 && (a = 0.1),
    a < 0.06 && (a = 0.06),
    Number(a.toFixed(2))
  );
}
function J(e, r, n) {
  var a;
  return (
    n ? (a = e.v + je * r) : (a = e.v - He * r),
    a > 1 && (a = 1),
    Number(a.toFixed(2))
  );
}
function D(e) {
  for (
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      a = y(e),
      t = ie;
    t > 0;
    t -= 1
  ) {
    var o = Q(a),
      f = S(y({ h: Y(o, t, !0), s: Z(o, t, !0), v: J(o, t, !0) }));
    n.push(f);
  }
  n.push(S(a));
  for (var i = 1; i <= fe; i += 1) {
    var c = Q(a),
      g = S(y({ h: Y(c, i), s: Z(c, i), v: J(c, i) }));
    n.push(g);
  }
  return r.theme === "dark"
    ? De.map(function (s) {
        var v = s.index,
          w = s.opacity,
          p = S(Oe(y(r.backgroundColor || "#141414"), y(n[v]), w * 100));
        return p;
      })
    : n;
}
var P = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1890FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666",
  },
  j = {},
  H = {};
Object.keys(P).forEach(function (e) {
  (j[e] = D(P[e])),
    (j[e].primary = j[e][5]),
    (H[e] = D(P[e], { theme: "dark", backgroundColor: "#141414" })),
    (H[e].primary = H[e][5]);
});
var X = {};
function Be(e, r) {}
function qe(e, r, n) {
  !r && !X[n] && (e(!1, n), (X[n] = !0));
}
function ze(e, r) {
  qe(Be, e, r);
}
function _e() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function Le(e, r) {
  if (!e) return !1;
  if (e.contains) return e.contains(r);
  for (var n = r; n; ) {
    if (n === e) return !0;
    n = n.parentNode;
  }
  return !1;
}
var ee = "data-rc-order",
  Ue = "rc-util-key",
  O = new Map();
function ce() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    r = e.mark;
  return r ? (r.startsWith("data-") ? r : "data-".concat(r)) : Ue;
}
function q(e) {
  if (e.attachTo) return e.attachTo;
  var r = document.querySelector("head");
  return r || document.body;
}
function We(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function se(e) {
  return Array.from((O.get(e) || e).children).filter(function (r) {
    return r.tagName === "STYLE";
  });
}
function ue(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!_e()) return null;
  var n = r.csp,
    a = r.prepend,
    t = document.createElement("style");
  t.setAttribute(ee, We(a)),
    n != null && n.nonce && (t.nonce = n == null ? void 0 : n.nonce),
    (t.innerHTML = e);
  var o = q(r),
    f = o.firstChild;
  if (a) {
    if (a === "queue") {
      var i = se(o).filter(function (c) {
        return ["prepend", "prependQueue"].includes(c.getAttribute(ee));
      });
      if (i.length) return o.insertBefore(t, i[i.length - 1].nextSibling), t;
    }
    o.insertBefore(t, f);
  } else o.appendChild(t);
  return t;
}
function Ve(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = q(r);
  return se(n).find(function (a) {
    return a.getAttribute(ce(r)) === e;
  });
}
function $e(e, r) {
  var n = O.get(e);
  if (!n || !Le(document, n)) {
    var a = ue("", r),
      t = a.parentNode;
    O.set(e, t), e.removeChild(a);
  }
}
function Ge(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    a = q(n);
  $e(a, n);
  var t = Ve(r, n);
  if (t) {
    var o, f;
    if (
      ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce) &&
      t.nonce !== ((f = n.csp) === null || f === void 0 ? void 0 : f.nonce)
    ) {
      var i;
      t.nonce = (i = n.csp) === null || i === void 0 ? void 0 : i.nonce;
    }
    return t.innerHTML !== e && (t.innerHTML = e), t;
  }
  var c = ue(e, n);
  return c.setAttribute(ce(n), r), c;
}
function Ke(e, r) {
  ze(e, "[@ant-design/icons] ".concat(r));
}
function ne(e) {
  return (
    L(e) === "object" &&
    typeof e.name == "string" &&
    typeof e.theme == "string" &&
    (L(e.icon) === "object" || typeof e.icon == "function")
  );
}
function re() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function (r, n) {
    var a = e[n];
    switch (n) {
      case "class":
        (r.className = a), delete r.class;
        break;
      default:
        r[n] = a;
    }
    return r;
  }, {});
}
function B(e, r, n) {
  return n
    ? U.createElement(
        e.tag,
        b(b({ key: r }, re(e.attrs)), n),
        (e.children || []).map(function (a, t) {
          return B(a, "".concat(r, "-").concat(e.tag, "-").concat(t));
        })
      )
    : U.createElement(
        e.tag,
        b({ key: r }, re(e.attrs)),
        (e.children || []).map(function (a, t) {
          return B(a, "".concat(r, "-").concat(e.tag, "-").concat(t));
        })
      );
}
function le(e) {
  return D(e)[0];
}
function de(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var Qe = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  Ye = function () {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Qe,
      n = x.exports.useContext(oe),
      a = n.csp;
    x.exports.useEffect(function () {
      Ge(r, "@ant-design-icons", { prepend: !0, csp: a });
    }, []);
  },
  Ze = [
    "icon",
    "className",
    "onClick",
    "style",
    "primaryColor",
    "secondaryColor",
  ],
  C = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
function Je(e) {
  var r = e.primaryColor,
    n = e.secondaryColor;
  (C.primaryColor = r), (C.secondaryColor = n || le(r)), (C.calculated = !!n);
}
function Xe() {
  return b({}, C);
}
var A = function (r) {
  var n = r.icon,
    a = r.className,
    t = r.onClick,
    o = r.style,
    f = r.primaryColor,
    i = r.secondaryColor,
    c = ae(r, Ze),
    g = C;
  if (
    (f && (g = { primaryColor: f, secondaryColor: i || le(f) }),
    Ye(),
    Ke(ne(n), "icon should be icon definiton, but got ".concat(n)),
    !ne(n))
  )
    return null;
  var s = n;
  return (
    s &&
      typeof s.icon == "function" &&
      (s = b(b({}, s), {}, { icon: s.icon(g.primaryColor, g.secondaryColor) })),
    B(
      s.icon,
      "svg-".concat(s.name),
      b(
        {
          className: a,
          onClick: t,
          style: o,
          "data-icon": s.name,
          width: "1em",
          height: "1em",
          fill: "currentColor",
          "aria-hidden": "true",
        },
        c
      )
    )
  );
};
A.displayName = "IconReact";
A.getTwoToneColors = Xe;
A.setTwoToneColors = Je;
const z = A;
function ge(e) {
  var r = de(e),
    n = te(r, 2),
    a = n[0],
    t = n[1];
  return z.setTwoToneColors({ primaryColor: a, secondaryColor: t });
}
function en() {
  var e = z.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var nn = [
  "className",
  "icon",
  "spin",
  "rotate",
  "tabIndex",
  "onClick",
  "twoToneColor",
];
ge("#1890ff");
var M = x.exports.forwardRef(function (e, r) {
  var n,
    a = e.className,
    t = e.icon,
    o = e.spin,
    f = e.rotate,
    i = e.tabIndex,
    c = e.onClick,
    g = e.twoToneColor,
    s = ae(e, nn),
    v = x.exports.useContext(oe),
    w = v.prefixCls,
    p = w === void 0 ? "anticon" : w,
    me = v.rootClassName,
    be = Ce(
      me,
      p,
      ((n = {}),
      W(n, "".concat(p, "-").concat(t.name), !!t.name),
      W(n, "".concat(p, "-spin"), !!o || t.name === "loading"),
      n),
      a
    ),
    N = i;
  N === void 0 && c && (N = -1);
  var he = f
      ? {
          msTransform: "rotate(".concat(f, "deg)"),
          transform: "rotate(".concat(f, "deg)"),
        }
      : void 0,
    ve = de(g),
    _ = te(ve, 2),
    pe = _[0],
    ye = _[1];
  return V("span", {
    ...b(
      b({ role: "img", "aria-label": t.name }, s),
      {},
      { ref: r, tabIndex: N, onClick: c, className: be }
    ),
    children: V(z, {
      icon: t,
      primaryColor: pe,
      secondaryColor: ye,
      style: he,
    }),
  });
});
M.displayName = "AntdIcon";
M.getTwoToneColor = en;
M.setTwoToneColor = ge;
const tn = M;
export { tn as A };
