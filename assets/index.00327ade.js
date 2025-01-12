import {
  aa as zo,
  _ as ae,
  p as oe,
  ab as Bs,
  ac as Ns,
  ad as zs,
  ae as Ls,
  af as Ws,
  ag as Hs,
  ah as Fs,
  ai as Ks,
  aj as Us,
  ak as Vs,
  K as at,
  al as Xs,
  am as Gs,
  an as Ys,
  ao as Qs,
  u as re,
  U as qe,
  ap as To,
  aq as Kn,
  ar as da,
  as as Zs,
  at as Js,
  au as eu,
  av as tu,
  aw as ru,
  ax as nu,
  ay as ou,
  az as au,
  aA as iu,
  aB as lu,
  aC as su,
  aD as uu,
  aE as cu,
  aF as du,
  aG as fu,
  b as pu,
  aH as vu,
  aI as gu,
  r as _,
  t as me,
  j as T,
  x as Il,
  v as mu,
  aJ as hu,
  d as Ee,
  aK as bu,
  T as Tl,
  w as Rt,
  q as se,
  e as yu,
  o as Cu,
  f as xu,
  h as _u,
  I as Et,
  m as Su,
  A as Lo,
  C as Wo,
  c as Ae,
  F as Ou,
  aL as Pu,
  V as wu,
  g as $u,
  y as fa,
  O as pa,
  a as Mu,
  aM as Ru,
  a2 as Pn,
  aN as Iu,
  aO as Tu,
  aP as ju,
  aQ as jl,
  P as ku,
  a6 as qu,
  $ as Du,
} from "./index.5783a347.js";
import { c as Ve } from "./index.adbb0b1c.js";
import {
  h as Au,
  n as kl,
  w as At,
  g as ql,
  o as Eu,
  K as it,
  m as bn,
  p as Bu,
  t as Dl,
  T as Nu,
  f as zu,
  R as va,
  c as Ho,
  q as Ir,
  s as Lu,
  k as Wu,
  v as Hu,
  j as Fu,
  x as Ku,
  u as Uu,
} from "./RightOutlined.47fd6db5.js";
function Mt(e, t) {
  var r = t.path,
    n = t.parentSelectors;
  zo(
    !1,
    "[Ant Design CSS-in-JS] "
      .concat(r ? "Error in ".concat(r, ": ") : "")
      .concat(e)
      .concat(n.length ? " Selector: ".concat(n.join(" | ")) : "")
  );
}
function Vu(e) {
  var t,
    r =
      ((t = e.match(/:not\(([^)]*)\)/)) === null || t === void 0
        ? void 0
        : t[1]) || "",
    n = r.split(/(\[[^[]*])|(?=[.#])/).filter(function (o) {
      return o;
    });
  return n.length > 1;
}
function Xu(e) {
  return e.parentSelectors.reduce(function (t, r) {
    return t
      ? r.includes("&")
        ? r.replace(/&/g, t)
        : "".concat(t, " ").concat(r)
      : r;
  }, "");
}
var Gu = function (t, r, n) {
    var o = Xu(n),
      a = o.match(/:not\([^)]*\)/g) || [];
    a.length > 0 &&
      a.some(Vu) &&
      Mt("Concat ':not' selector not support in legacy browsers.", n);
  },
  Yu = function (t, r, n) {
    switch (t) {
      case "marginLeft":
      case "marginRight":
      case "paddingLeft":
      case "paddingRight":
      case "left":
      case "right":
      case "borderLeft":
      case "borderLeftWidth":
      case "borderLeftStyle":
      case "borderLeftColor":
      case "borderRight":
      case "borderRightWidth":
      case "borderRightStyle":
      case "borderRightColor":
      case "borderTopLeftRadius":
      case "borderTopRightRadius":
      case "borderBottomLeftRadius":
      case "borderBottomRightRadius":
        Mt(
          "You seem to be using non-logical property '".concat(
            t,
            "' which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."
          ),
          n
        );
        return;
      case "margin":
      case "padding":
      case "borderWidth":
      case "borderStyle":
        if (typeof r == "string") {
          var o = r.split(" ").map(function (l) {
            return l.trim();
          });
          o.length === 4 &&
            o[1] !== o[3] &&
            Mt(
              "You seem to be using '"
                .concat(t, "' property with different left ")
                .concat(t, " and right ")
                .concat(
                  t,
                  ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."
                ),
              n
            );
        }
        return;
      case "clear":
      case "textAlign":
        (r === "left" || r === "right") &&
          Mt(
            "You seem to be using non-logical value '"
              .concat(r, "' of ")
              .concat(
                t,
                ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."
              ),
            n
          );
        return;
      case "borderRadius":
        if (typeof r == "string") {
          var a = r.split("/").map(function (l) {
              return l.trim();
            }),
            i = a.reduce(function (l, f) {
              if (l) return l;
              var d = f.split(" ").map(function (s) {
                return s.trim();
              });
              return (d.length >= 2 && d[0] !== d[1]) ||
                (d.length === 3 && d[1] !== d[2]) ||
                (d.length === 4 && d[2] !== d[3])
                ? !0
                : l;
            }, !1);
          i &&
            Mt(
              "You seem to be using non-logical value '"
                .concat(r, "' of ")
                .concat(
                  t,
                  ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."
                ),
              n
            );
        }
        return;
    }
  },
  Qu = function (t, r, n) {
    ((typeof r == "string" && /NaN/g.test(r)) || Number.isNaN(r)) &&
      Mt("Unexpected 'NaN' in property '".concat(t, ": ").concat(r, "'."), n);
  },
  Zu = function (t, r, n) {
    n.parentSelectors.some(function (o) {
      var a = o.split(",");
      return a.some(function (i) {
        return i.split("&").length > 2;
      });
    }) && Mt("Should not use more than one `&` in a selector.", n);
  },
  Un = /url\([^)]+\)|var\([^)]+\)|(\d*\.?\d+)px/g;
function Ju(e, t) {
  var r = Math.pow(10, t + 1),
    n = Math.floor(e * r);
  return (Math.round(n / 10) * 10) / r;
}
var ec = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.rootValue,
      n = r === void 0 ? 16 : r,
      o = t.precision,
      a = o === void 0 ? 5 : o,
      i = t.mediaQuery,
      l = i === void 0 ? !1 : i,
      f = function (b, p) {
        if (!p) return b;
        var u = parseFloat(p);
        if (u <= 1) return b;
        var c = Ju(u / n, a);
        return "".concat(c, "rem");
      },
      d = function (b) {
        var p = ae({}, b);
        return (
          Object.entries(b).forEach(function (u) {
            var c = oe(u, 2),
              v = c[0],
              g = c[1];
            if (typeof g == "string" && g.includes("px")) {
              var m = g.replace(Un, f);
              p[v] = m;
            }
            !Bs[v] &&
              typeof g == "number" &&
              g !== 0 &&
              (p[v] = "".concat(g, "px").replace(Un, f));
            var y = v.trim();
            if (y.startsWith("@") && y.includes("px") && l) {
              var h = v.replace(Un, f);
              (p[h] = p[v]), delete p[v];
            }
          }),
          p
        );
      };
    return { visit: d };
  },
  tc = {
    supportModernCSS: function () {
      return Ns() && zs();
    },
  };
const rc = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Theme: Ls,
      createTheme: Ws,
      useStyleRegister: Hs,
      useCSSVarRegister: Fs,
      useCacheToken: Ks,
      createCache: Us,
      StyleProvider: Vs,
      Keyframes: at,
      extractStyle: Xs,
      getComputedToken: Gs,
      legacyLogicalPropertiesTransformer: Ys,
      px2remTransformer: ec,
      logicalPropertiesLinter: Yu,
      legacyNotSelectorLinter: Gu,
      parentSelectorLinter: Zu,
      NaNLinter: Qu,
      token2CSSVar: Qs,
      unit: re,
      _experimental: tc,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Fo(e, t) {
  var r = new qe(e),
    n = new qe(t);
  return (
    (Math.max(r.getLuminance(), n.getLuminance()) + 0.05) /
    (Math.min(r.getLuminance(), n.getLuminance()) + 0.05)
  );
}
function Al(e, t, r) {
  var n, o;
  r === void 0 && (r = { level: "AA", size: "small" });
  var a = Fo(e, t);
  switch (
    ((n = r.level) !== null && n !== void 0 ? n : "AA") +
    ((o = r.size) !== null && o !== void 0 ? o : "small")
  ) {
    case "AAsmall":
    case "AAAlarge":
      return a >= 4.5;
    case "AAlarge":
      return a >= 3;
    case "AAAsmall":
      return a >= 7;
    default:
      return !1;
  }
}
function El(e, t, r) {
  r === void 0 &&
    (r = { includeFallbackColors: !1, level: "AA", size: "small" });
  for (
    var n = null,
      o = 0,
      a = r.includeFallbackColors,
      i = r.level,
      l = r.size,
      f = 0,
      d = t;
    f < d.length;
    f++
  ) {
    var s = d[f],
      b = Fo(e, s);
    b > o && ((o = b), (n = new qe(s)));
  }
  return Al(e, n, { level: i, size: l }) || !a
    ? n
    : ((r.includeFallbackColors = !1), El(e, ["#fff", "#000"], r));
}
function nc(e, t) {
  var r = new qe(e),
    n = "#" + To(r.r, r.g, r.b, r.a),
    o = n,
    a = r.gradientType ? "GradientType = 1, " : "";
  if (t) {
    var i = new qe(t);
    o = "#" + To(i.r, i.g, i.b, i.a);
  }
  return "progid:DXImageTransform.Microsoft.gradient("
    .concat(a, "startColorstr=")
    .concat(n, ",endColorstr=")
    .concat(o, ")");
}
function oc(e, t) {
  var r = { r: Kn(e.r), g: Kn(e.g), b: Kn(e.b) };
  return e.a !== void 0 && (r.a = Number(e.a)), new qe(r, t);
}
function ac() {
  return new qe({ r: Math.random(), g: Math.random(), b: Math.random() });
}
function Bl(e) {
  if ((e === void 0 && (e = {}), e.count !== void 0 && e.count !== null)) {
    var t = e.count,
      r = [];
    for (e.count = void 0; t > r.length; )
      (e.count = null), e.seed && (e.seed += 1), r.push(Bl(e));
    return (e.count = t), r;
  }
  var n = ic(e.hue, e.seed),
    o = lc(n, e),
    a = sc(n, o, e),
    i = { h: n, s: o, v: a };
  return e.alpha !== void 0 && (i.a = e.alpha), new qe(i);
}
function ic(e, t) {
  var r = cc(e),
    n = xn(r, t);
  return n < 0 && (n = 360 + n), n;
}
function lc(e, t) {
  if (t.hue === "monochrome") return 0;
  if (t.luminosity === "random") return xn([0, 100], t.seed);
  var r = Nl(e).saturationRange,
    n = r[0],
    o = r[1];
  switch (t.luminosity) {
    case "bright":
      n = 55;
      break;
    case "dark":
      n = o - 10;
      break;
    case "light":
      o = 55;
      break;
  }
  return xn([n, o], t.seed);
}
function sc(e, t, r) {
  var n = uc(e, t),
    o = 100;
  switch (r.luminosity) {
    case "dark":
      o = n + 20;
      break;
    case "light":
      n = (o + n) / 2;
      break;
    case "random":
      (n = 0), (o = 100);
      break;
  }
  return xn([n, o], r.seed);
}
function uc(e, t) {
  for (var r = Nl(e).lowerBounds, n = 0; n < r.length - 1; n++) {
    var o = r[n][0],
      a = r[n][1],
      i = r[n + 1][0],
      l = r[n + 1][1];
    if (t >= o && t <= i) {
      var f = (l - a) / (i - o),
        d = a - f * o;
      return f * t + d;
    }
  }
  return 0;
}
function cc(e) {
  var t = parseInt(e, 10);
  if (!Number.isNaN(t) && t < 360 && t > 0) return [t, t];
  if (typeof e == "string") {
    var r = Ko.find(function (i) {
      return i.name === e;
    });
    if (r) {
      var n = zl(r);
      if (n.hueRange) return n.hueRange;
    }
    var o = new qe(e);
    if (o.isValid) {
      var a = o.toHsv().h;
      return [a, a];
    }
  }
  return [0, 360];
}
function Nl(e) {
  e >= 334 && e <= 360 && (e -= 360);
  for (var t = 0, r = Ko; t < r.length; t++) {
    var n = r[t],
      o = zl(n);
    if (o.hueRange && e >= o.hueRange[0] && e <= o.hueRange[1]) return o;
  }
  throw Error("Color not found");
}
function xn(e, t) {
  if (t === void 0) return Math.floor(e[0] + Math.random() * (e[1] + 1 - e[0]));
  var r = e[1] || 1,
    n = e[0] || 0;
  t = (t * 9301 + 49297) % 233280;
  var o = t / 233280;
  return Math.floor(n + o * (r - n));
}
function zl(e) {
  var t = e.lowerBounds[0][0],
    r = e.lowerBounds[e.lowerBounds.length - 1][0],
    n = e.lowerBounds[e.lowerBounds.length - 1][1],
    o = e.lowerBounds[0][1];
  return {
    name: e.name,
    hueRange: e.hueRange,
    lowerBounds: e.lowerBounds,
    saturationRange: [t, r],
    brightnessRange: [n, o],
  };
}
var Ko = [
  {
    name: "monochrome",
    hueRange: null,
    lowerBounds: [
      [0, 0],
      [100, 0],
    ],
  },
  {
    name: "red",
    hueRange: [-26, 18],
    lowerBounds: [
      [20, 100],
      [30, 92],
      [40, 89],
      [50, 85],
      [60, 78],
      [70, 70],
      [80, 60],
      [90, 55],
      [100, 50],
    ],
  },
  {
    name: "orange",
    hueRange: [19, 46],
    lowerBounds: [
      [20, 100],
      [30, 93],
      [40, 88],
      [50, 86],
      [60, 85],
      [70, 70],
      [100, 70],
    ],
  },
  {
    name: "yellow",
    hueRange: [47, 62],
    lowerBounds: [
      [25, 100],
      [40, 94],
      [50, 89],
      [60, 86],
      [70, 84],
      [80, 82],
      [90, 80],
      [100, 75],
    ],
  },
  {
    name: "green",
    hueRange: [63, 178],
    lowerBounds: [
      [30, 100],
      [40, 90],
      [50, 85],
      [60, 81],
      [70, 74],
      [80, 64],
      [90, 50],
      [100, 40],
    ],
  },
  {
    name: "blue",
    hueRange: [179, 257],
    lowerBounds: [
      [20, 100],
      [30, 86],
      [40, 80],
      [50, 74],
      [60, 60],
      [70, 52],
      [80, 44],
      [90, 39],
      [100, 35],
    ],
  },
  {
    name: "purple",
    hueRange: [258, 282],
    lowerBounds: [
      [20, 100],
      [30, 87],
      [40, 79],
      [50, 70],
      [60, 65],
      [70, 59],
      [80, 52],
      [90, 45],
      [100, 42],
    ],
  },
  {
    name: "pink",
    hueRange: [283, 334],
    lowerBounds: [
      [20, 100],
      [30, 90],
      [40, 86],
      [60, 84],
      [80, 80],
      [90, 75],
      [100, 73],
    ],
  },
];
const dc = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: da,
        TinyColor: qe,
        tinycolor: da,
        names: Zs,
        readability: Fo,
        isReadable: Al,
        mostReadable: El,
        toMsFilter: nc,
        fromRatio: oc,
        legacyRandom: ac,
        inputToRGB: Js,
        stringInputToObject: eu,
        isValidCSSUnit: tu,
        random: Bl,
        bounds: Ko,
        rgbToRgb: ru,
        rgbToHsl: nu,
        hslToRgb: ou,
        rgbToHsv: au,
        hsvToRgb: iu,
        rgbToHex: lu,
        rgbaToHex: su,
        rgbaToArgbHex: To,
        convertDecimalToHex: uu,
        convertHexToDecimal: cu,
        parseIntFromHex: du,
        numberInputToObject: fu,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  fc = Object.freeze(
    Object.defineProperty(
      { __proto__: null, CSSMotionList: vu, default: pu, Provider: gu },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  pc = new at("antSlideUpIn", {
    "0%": { transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0 },
    "100%": { transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1 },
  }),
  vc = new at("antSlideUpOut", {
    "0%": { transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1 },
    "100%": { transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0 },
  }),
  gc = new at("antSlideDownIn", {
    "0%": {
      transform: "scaleY(0.8)",
      transformOrigin: "100% 100%",
      opacity: 0,
    },
    "100%": {
      transform: "scaleY(1)",
      transformOrigin: "100% 100%",
      opacity: 1,
    },
  }),
  mc = new at("antSlideDownOut", {
    "0%": { transform: "scaleY(1)", transformOrigin: "100% 100%", opacity: 1 },
    "100%": {
      transform: "scaleY(0.8)",
      transformOrigin: "100% 100%",
      opacity: 0,
    },
  }),
  hc = new at("antSlideLeftIn", {
    "0%": { transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0 },
    "100%": { transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1 },
  }),
  bc = new at("antSlideLeftOut", {
    "0%": { transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1 },
    "100%": { transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0 },
  }),
  yc = new at("antSlideRightIn", {
    "0%": { transform: "scaleX(0.8)", transformOrigin: "100% 0%", opacity: 0 },
    "100%": { transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1 },
  }),
  Cc = new at("antSlideRightOut", {
    "0%": { transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1 },
    "100%": {
      transform: "scaleX(0.8)",
      transformOrigin: "100% 0%",
      opacity: 0,
    },
  }),
  xc = {
    "slide-up": { inKeyframes: pc, outKeyframes: vc },
    "slide-down": { inKeyframes: gc, outKeyframes: mc },
    "slide-left": { inKeyframes: hc, outKeyframes: bc },
    "slide-right": { inKeyframes: yc, outKeyframes: Cc },
  },
  ga = (e, t) => {
    const { antCls: r } = e,
      n = `${r}-${t}`,
      { inKeyframes: o, outKeyframes: a } = xc[t];
    return [
      Au(n, o, a, e.motionDurationMid),
      {
        [`
      ${n}-enter,
      ${n}-appear
    `]: {
          transform: "scale(0)",
          transformOrigin: "0% 0%",
          opacity: 0,
          animationTimingFunction: e.motionEaseOutQuint,
          ["&-prepare"]: { transform: "scale(1)" },
        },
        [`${n}-leave`]: { animationTimingFunction: e.motionEaseInQuint },
      },
    ];
  };
var _c = [
    "prefixCls",
    "invalidate",
    "item",
    "renderItem",
    "responsive",
    "responsiveDisabled",
    "registerSize",
    "itemKey",
    "className",
    "style",
    "children",
    "display",
    "order",
    "component",
  ],
  qt = void 0;
function Sc(e, t) {
  var r = e.prefixCls,
    n = e.invalidate,
    o = e.item,
    a = e.renderItem,
    i = e.responsive,
    l = e.responsiveDisabled,
    f = e.registerSize,
    d = e.itemKey,
    s = e.className,
    b = e.style,
    p = e.children,
    u = e.display,
    c = e.order,
    v = e.component,
    g = v === void 0 ? "div" : v,
    m = me(e, _c),
    y = i && !u;
  function h(w) {
    f(d, w);
  }
  _.exports.useEffect(function () {
    return function () {
      h(null);
    };
  }, []);
  var O = a && o !== qt ? a(o) : p,
    S;
  n ||
    (S = {
      opacity: y ? 0 : 1,
      height: y ? 0 : qt,
      overflowY: y ? "hidden" : qt,
      order: i ? c : qt,
      pointerEvents: y ? "none" : qt,
      position: y ? "absolute" : qt,
    });
  var $ = {};
  y && ($["aria-hidden"] = !0);
  var x = T(g, {
    className: Ve(!n && r, s),
    style: ae(ae({}, S), b),
    ...$,
    ...m,
    ref: t,
    children: O,
  });
  return (
    i &&
      (x = T(kl, {
        onResize: function (C) {
          var P = C.offsetWidth;
          h(P);
        },
        disabled: l,
        children: x,
      })),
    x
  );
}
var Rr = _.exports.forwardRef(Sc);
Rr.displayName = "Item";
function Oc(e) {
  if (typeof MessageChannel > "u") At(e);
  else {
    var t = new MessageChannel();
    (t.port1.onmessage = function () {
      return e();
    }),
      t.port2.postMessage(void 0);
  }
}
function Pc() {
  var e = _.exports.useRef(null),
    t = function (n) {
      e.current ||
        ((e.current = []),
        Oc(function () {
          Il.exports.unstable_batchedUpdates(function () {
            e.current.forEach(function (o) {
              o();
            }),
              (e.current = null);
          });
        })),
        e.current.push(n);
    };
  return t;
}
function Kt(e, t) {
  var r = _.exports.useState(t),
    n = oe(r, 2),
    o = n[0],
    a = n[1],
    i = ql(function (l) {
      e(function () {
        a(l);
      });
    });
  return [o, i];
}
var _n = mu.createContext(null),
  wc = ["component"],
  $c = ["className"],
  Mc = ["className"],
  Rc = function (t, r) {
    var n = _.exports.useContext(_n);
    if (!n) {
      var o = t.component,
        a = o === void 0 ? "div" : o,
        i = me(t, wc);
      return T(a, { ...i, ref: r });
    }
    var l = n.className,
      f = me(n, $c),
      d = t.className,
      s = me(t, Mc);
    return T(_n.Provider, {
      value: null,
      children: T(Rr, { ref: r, className: Ve(l, d), ...f, ...s }),
    });
  },
  Ll = _.exports.forwardRef(Rc);
Ll.displayName = "RawItem";
var Ic = [
    "prefixCls",
    "data",
    "renderItem",
    "renderRawItem",
    "itemKey",
    "itemWidth",
    "ssr",
    "style",
    "className",
    "maxCount",
    "renderRest",
    "renderRawRest",
    "suffix",
    "component",
    "itemComponent",
    "onVisibleChange",
  ],
  Wl = "responsive",
  Hl = "invalidate";
function Tc(e) {
  return "+ ".concat(e.length, " ...");
}
function jc(e, t) {
  var r = e.prefixCls,
    n = r === void 0 ? "rc-overflow" : r,
    o = e.data,
    a = o === void 0 ? [] : o,
    i = e.renderItem,
    l = e.renderRawItem,
    f = e.itemKey,
    d = e.itemWidth,
    s = d === void 0 ? 10 : d,
    b = e.ssr,
    p = e.style,
    u = e.className,
    c = e.maxCount,
    v = e.renderRest,
    g = e.renderRawRest,
    m = e.suffix,
    y = e.component,
    h = y === void 0 ? "div" : y,
    O = e.itemComponent,
    S = e.onVisibleChange,
    $ = me(e, Ic),
    x = b === "full",
    w = Pc(),
    C = Kt(w, null),
    P = oe(C, 2),
    M = P[0],
    I = P[1],
    R = M || 0,
    j = Kt(w, new Map()),
    D = oe(j, 2),
    E = D[0],
    B = D[1],
    W = Kt(w, 0),
    Z = oe(W, 2),
    ee = Z[0],
    G = Z[1],
    J = Kt(w, 0),
    k = oe(J, 2),
    z = k[0],
    N = k[1],
    q = Kt(w, 0),
    Y = oe(q, 2),
    Q = Y[0],
    te = Y[1],
    ne = _.exports.useState(null),
    A = oe(ne, 2),
    X = A[0],
    le = A[1],
    he = _.exports.useState(null),
    ge = oe(he, 2),
    _e = ge[0],
    st = ge[1],
    be = _.exports.useMemo(
      function () {
        return _e === null && x ? Number.MAX_SAFE_INTEGER : _e || 0;
      },
      [_e, M]
    ),
    ye = _.exports.useState(!1),
    Ne = oe(ye, 2),
    fe = Ne[0],
    ut = Ne[1],
    ze = "".concat(n, "-item"),
    Le = Math.max(ee, z),
    Xe = c === Wl,
    pe = a.length && Xe,
    We = c === Hl,
    Ge = pe || (typeof c == "number" && a.length > c),
    Me = _.exports.useMemo(
      function () {
        var L = a;
        return (
          pe
            ? M === null && x
              ? (L = a)
              : (L = a.slice(0, Math.min(a.length, R / s)))
            : typeof c == "number" && (L = a.slice(0, c)),
          L
        );
      },
      [a, s, M, c, pe]
    ),
    Te = _.exports.useMemo(
      function () {
        return pe ? a.slice(be + 1) : a.slice(Me.length);
      },
      [a, Me, pe, be]
    ),
    ce = _.exports.useCallback(
      function (L, V) {
        var ie;
        return typeof f == "function"
          ? f(L)
          : (ie = f && (L == null ? void 0 : L[f])) !== null && ie !== void 0
          ? ie
          : V;
      },
      [f]
    ),
    He = _.exports.useCallback(
      i ||
        function (L) {
          return L;
        },
      [i]
    );
  function Pe(L, V, ie) {
    (_e === L && (V === void 0 || V === X)) ||
      (st(L),
      ie || (ut(L < a.length - 1), S == null || S(L)),
      V !== void 0 && le(V));
  }
  function Ye(L, V) {
    I(V.clientWidth);
  }
  function Ce(L, V) {
    B(function (ie) {
      var $e = new Map(ie);
      return V === null ? $e.delete(L) : $e.set(L, V), $e;
    });
  }
  function Se(L, V) {
    N(V), G(z);
  }
  function zt(L, V) {
    te(V);
  }
  function Qe(L) {
    return E.get(ce(Me[L], L));
  }
  hu(
    function () {
      if (R && typeof Le == "number" && Me) {
        var L = Q,
          V = Me.length,
          ie = V - 1;
        if (!V) {
          Pe(0, null);
          return;
        }
        for (var $e = 0; $e < V; $e += 1) {
          var Ze = Qe($e);
          if ((x && (Ze = Ze || 0), Ze === void 0)) {
            Pe($e - 1, void 0, !0);
            break;
          }
          if (
            ((L += Ze),
            (ie === 0 && L <= R) || ($e === ie - 1 && L + Qe(ie) <= R))
          ) {
            Pe(ie, null);
            break;
          } else if (L + Le > R) {
            Pe($e - 1, L - Ze - Q + z);
            break;
          }
        }
        m && Qe(0) + Q > R && le(null);
      }
    },
    [R, E, z, Q, ce, Me]
  );
  var It = fe && !!Te.length,
    vt = {};
  X !== null && pe && (vt = { position: "absolute", left: X, top: 0 });
  var je = { prefixCls: ze, responsive: pe, component: O, invalidate: We },
    gt = l
      ? function (L, V) {
          var ie = ce(L, V);
          return T(
            _n.Provider,
            {
              value: ae(
                ae({}, je),
                {},
                {
                  order: V,
                  item: L,
                  itemKey: ie,
                  registerSize: Ce,
                  display: V <= be,
                }
              ),
              children: l(L, V),
            },
            ie
          );
        }
      : function (L, V) {
          var ie = ce(L, V);
          return _.exports.createElement(Rr, {
            ...je,
            order: V,
            key: ie,
            item: L,
            renderItem: He,
            itemKey: ie,
            registerSize: Ce,
            display: V <= be,
          });
        },
    ct,
    Tt = {
      order: It ? be : Number.MAX_SAFE_INTEGER,
      className: "".concat(ze, "-rest"),
      registerSize: Se,
      display: It,
    };
  if (g)
    g && (ct = T(_n.Provider, { value: ae(ae({}, je), Tt), children: g(Te) }));
  else {
    var dt = v || Tc;
    ct = T(Rr, {
      ...je,
      ...Tt,
      children: typeof dt == "function" ? dt(Te) : dt,
    });
  }
  var we = Ee(h, {
    className: Ve(!We && n, u),
    style: p,
    ref: t,
    ...$,
    children: [
      Me.map(gt),
      Ge ? ct : null,
      m &&
        T(Rr, {
          ...je,
          responsive: Xe,
          responsiveDisabled: !pe,
          order: be,
          className: "".concat(ze, "-suffix"),
          registerSize: zt,
          display: !0,
          style: vt,
          children: m,
        }),
    ],
  });
  return Xe && (we = T(kl, { onResize: Ye, disabled: !pe, children: we })), we;
}
var ot = _.exports.forwardRef(jc);
ot.displayName = "Overflow";
ot.Item = Ll;
ot.RESPONSIVE = Wl;
ot.INVALIDATE = Hl;
var Fl = _.exports.createContext(null);
function Kl(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t);
}
function Ul(e) {
  var t = _.exports.useContext(Fl);
  return Kl(t, e);
}
var kc = ["children", "locked"],
  Be = _.exports.createContext(null);
function qc(e, t) {
  var r = ae({}, e);
  return (
    Object.keys(t).forEach(function (n) {
      var o = t[n];
      o !== void 0 && (r[n] = o);
    }),
    r
  );
}
function Tr(e) {
  var t = e.children,
    r = e.locked,
    n = me(e, kc),
    o = _.exports.useContext(Be),
    a = bu(
      function () {
        return qc(o, n);
      },
      [o, n],
      function (i, l) {
        return !r && (i[0] !== l[0] || !Tl(i[1], l[1], !0));
      }
    );
  return T(Be.Provider, { value: a, children: t });
}
var Dc = [],
  Vl = _.exports.createContext(null);
function wn() {
  return _.exports.useContext(Vl);
}
var Xl = _.exports.createContext(Dc);
function Bt(e) {
  var t = _.exports.useContext(Xl);
  return _.exports.useMemo(
    function () {
      return e !== void 0 ? [].concat(Rt(t), [e]) : t;
    },
    [t, e]
  );
}
var Gl = _.exports.createContext(null),
  Uo = _.exports.createContext({});
function ma(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (Eu(e)) {
    var r = e.nodeName.toLowerCase(),
      n =
        ["input", "select", "textarea", "button"].includes(r) ||
        e.isContentEditable ||
        (r === "a" && !!e.getAttribute("href")),
      o = e.getAttribute("tabindex"),
      a = Number(o),
      i = null;
    return (
      o && !Number.isNaN(a) ? (i = a) : n && i === null && (i = 0),
      n && e.disabled && (i = null),
      i !== null && (i >= 0 || (t && i < 0))
    );
  }
  return !1;
}
function Ac(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    r = Rt(e.querySelectorAll("*")).filter(function (n) {
      return ma(n, t);
    });
  return ma(e, t) && r.unshift(e), r;
}
var jo = it.LEFT,
  ko = it.RIGHT,
  qo = it.UP,
  yn = it.DOWN,
  Cn = it.ENTER,
  Yl = it.ESC,
  Ut = it.HOME,
  Vt = it.END,
  ha = [qo, yn, jo, ko];
function Ec(e, t, r, n) {
  var o,
    a,
    i,
    l,
    f = "prev",
    d = "next",
    s = "children",
    b = "parent";
  if (e === "inline" && n === Cn) return { inlineTrigger: !0 };
  var p = ((o = {}), se(o, qo, f), se(o, yn, d), o),
    u =
      ((a = {}),
      se(a, jo, r ? d : f),
      se(a, ko, r ? f : d),
      se(a, yn, s),
      se(a, Cn, s),
      a),
    c =
      ((i = {}),
      se(i, qo, f),
      se(i, yn, d),
      se(i, Cn, s),
      se(i, Yl, b),
      se(i, jo, r ? s : b),
      se(i, ko, r ? b : s),
      i),
    v = {
      inline: p,
      horizontal: u,
      vertical: c,
      inlineSub: p,
      horizontalSub: c,
      verticalSub: c,
    },
    g =
      (l = v["".concat(e).concat(t ? "" : "Sub")]) === null || l === void 0
        ? void 0
        : l[n];
  switch (g) {
    case f:
      return { offset: -1, sibling: !0 };
    case d:
      return { offset: 1, sibling: !0 };
    case b:
      return { offset: -1, sibling: !1 };
    case s:
      return { offset: 1, sibling: !1 };
    default:
      return null;
  }
}
function Bc(e) {
  for (var t = e; t; ) {
    if (t.getAttribute("data-menu-list")) return t;
    t = t.parentElement;
  }
  return null;
}
function Nc(e, t) {
  for (var r = e || document.activeElement; r; ) {
    if (t.has(r)) return r;
    r = r.parentElement;
  }
  return null;
}
function Vo(e, t) {
  var r = Ac(e, !0);
  return r.filter(function (n) {
    return t.has(n);
  });
}
function ba(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e) return null;
  var o = Vo(e, t),
    a = o.length,
    i = o.findIndex(function (l) {
      return r === l;
    });
  return (
    n < 0 ? (i === -1 ? (i = a - 1) : (i -= 1)) : n > 0 && (i += 1),
    (i = (i + a) % a),
    o[i]
  );
}
var Do = function (t, r) {
  var n = new Set(),
    o = new Map(),
    a = new Map();
  return (
    t.forEach(function (i) {
      var l = document.querySelector("[data-menu-id='".concat(Kl(r, i), "']"));
      l && (n.add(l), a.set(l, i), o.set(i, l));
    }),
    { elements: n, key2element: o, element2key: a }
  );
};
function zc(e, t, r, n, o, a, i, l, f, d) {
  var s = _.exports.useRef(),
    b = _.exports.useRef();
  b.current = t;
  var p = function () {
    At.cancel(s.current);
  };
  return (
    _.exports.useEffect(function () {
      return function () {
        p();
      };
    }, []),
    function (u) {
      var c = u.which;
      if ([].concat(ha, [Cn, Yl, Ut, Vt]).includes(c)) {
        var v = a(),
          g = Do(v, n),
          m = g,
          y = m.elements,
          h = m.key2element,
          O = m.element2key,
          S = h.get(t),
          $ = Nc(S, y),
          x = O.get($),
          w = Ec(e, i(x, !0).length === 1, r, c);
        if (!w && c !== Ut && c !== Vt) return;
        (ha.includes(c) || [Ut, Vt].includes(c)) && u.preventDefault();
        var C = function (B) {
          if (B) {
            var W = B,
              Z = B.querySelector("a");
            Z != null && Z.getAttribute("href") && (W = Z);
            var ee = O.get(B);
            l(ee),
              p(),
              (s.current = At(function () {
                b.current === ee && W.focus();
              }));
          }
        };
        if ([Ut, Vt].includes(c) || w.sibling || !$) {
          var P;
          !$ || e === "inline" ? (P = o.current) : (P = Bc($));
          var M,
            I = Vo(P, y);
          c === Ut
            ? (M = I[0])
            : c === Vt
            ? (M = I[I.length - 1])
            : (M = ba(P, y, $, w.offset)),
            C(M);
        } else if (w.inlineTrigger) f(x);
        else if (w.offset > 0)
          f(x, !0),
            p(),
            (s.current = At(function () {
              g = Do(v, n);
              var E = $.getAttribute("aria-controls"),
                B = document.getElementById(E),
                W = ba(B, g.elements);
              C(W);
            }, 5));
        else if (w.offset < 0) {
          var R = i(x, !0),
            j = R[R.length - 2],
            D = h.get(j);
          f(j, !1), C(D);
        }
      }
      d == null || d(u);
    }
  );
}
function Lc(e) {
  Promise.resolve().then(e);
}
var Xo = "__RC_UTIL_PATH_SPLIT__",
  ya = function (t) {
    return t.join(Xo);
  },
  Wc = function (t) {
    return t.split(Xo);
  },
  Ao = "rc-menu-more";
function Hc() {
  var e = _.exports.useState({}),
    t = oe(e, 2),
    r = t[1],
    n = _.exports.useRef(new Map()),
    o = _.exports.useRef(new Map()),
    a = _.exports.useState([]),
    i = oe(a, 2),
    l = i[0],
    f = i[1],
    d = _.exports.useRef(0),
    s = _.exports.useRef(!1),
    b = function () {
      s.current || r({});
    },
    p = _.exports.useCallback(function (h, O) {
      var S = ya(O);
      o.current.set(S, h), n.current.set(h, S), (d.current += 1);
      var $ = d.current;
      Lc(function () {
        $ === d.current && b();
      });
    }, []),
    u = _.exports.useCallback(function (h, O) {
      var S = ya(O);
      o.current.delete(S), n.current.delete(h);
    }, []),
    c = _.exports.useCallback(function (h) {
      f(h);
    }, []),
    v = _.exports.useCallback(
      function (h, O) {
        var S = n.current.get(h) || "",
          $ = Wc(S);
        return O && l.includes($[0]) && $.unshift(Ao), $;
      },
      [l]
    ),
    g = _.exports.useCallback(
      function (h, O) {
        return h.some(function (S) {
          var $ = v(S, !0);
          return $.includes(O);
        });
      },
      [v]
    ),
    m = function () {
      var O = Rt(n.current.keys());
      return l.length && O.push(Ao), O;
    },
    y = _.exports.useCallback(function (h) {
      var O = "".concat(n.current.get(h)).concat(Xo),
        S = new Set();
      return (
        Rt(o.current.keys()).forEach(function ($) {
          $.startsWith(O) && S.add(o.current.get($));
        }),
        S
      );
    }, []);
  return (
    _.exports.useEffect(function () {
      return function () {
        s.current = !0;
      };
    }, []),
    {
      registerPath: p,
      unregisterPath: u,
      refreshOverflowKeys: c,
      isSubPathKey: g,
      getKeyPath: v,
      getKeys: m,
      getSubPathKeys: y,
    }
  );
}
function Mr(e) {
  var t = _.exports.useRef(e);
  t.current = e;
  var r = _.exports.useCallback(function () {
    for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (n = t.current) === null || n === void 0
      ? void 0
      : n.call.apply(n, [t].concat(a));
  }, []);
  return e ? r : void 0;
}
var Fc = Math.random().toFixed(5).toString().slice(2),
  Ca = 0;
function Kc(e) {
  var t = bn(e, { value: e }),
    r = oe(t, 2),
    n = r[0],
    o = r[1];
  return (
    _.exports.useEffect(function () {
      Ca += 1;
      var a = "".concat(Fc, "-").concat(Ca);
      o("rc-menu-uuid-".concat(a));
    }, []),
    n
  );
}
function Ql(e, t, r, n) {
  var o = _.exports.useContext(Be),
    a = o.activeKey,
    i = o.onActive,
    l = o.onInactive,
    f = { active: a === e };
  return (
    t ||
      ((f.onMouseEnter = function (d) {
        r == null || r({ key: e, domEvent: d }), i(e);
      }),
      (f.onMouseLeave = function (d) {
        n == null || n({ key: e, domEvent: d }), l(e);
      })),
    f
  );
}
function Zl(e) {
  var t = _.exports.useContext(Be),
    r = t.mode,
    n = t.rtl,
    o = t.inlineIndent;
  if (r !== "inline") return null;
  var a = e;
  return n ? { paddingRight: a * o } : { paddingLeft: a * o };
}
function Jl(e) {
  var t = e.icon,
    r = e.props,
    n = e.children,
    o;
  return t === null || t === !1
    ? null
    : (typeof t == "function"
        ? (o = _.exports.createElement(t, ae({}, r)))
        : typeof t != "boolean" && (o = t),
      o || n || null);
}
var Uc = ["item"];
function Sn(e) {
  var t = e.item,
    r = me(e, Uc);
  return (
    Object.defineProperty(r, "item", {
      get: function () {
        return (
          zo(
            !1,
            "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."
          ),
          t
        );
      },
    }),
    r
  );
}
var Vc = ["title", "attribute", "elementRef"],
  Xc = [
    "style",
    "className",
    "eventKey",
    "warnKey",
    "disabled",
    "itemIcon",
    "children",
    "role",
    "onMouseEnter",
    "onMouseLeave",
    "onClick",
    "onKeyDown",
    "onFocus",
  ],
  Gc = ["active"],
  Yc = (function (e) {
    yu(r, e);
    var t = Cu(r);
    function r() {
      return xu(this, r), t.apply(this, arguments);
    }
    return (
      _u(r, [
        {
          key: "render",
          value: function () {
            var o = this.props,
              a = o.title,
              i = o.attribute,
              l = o.elementRef,
              f = me(o, Vc),
              d = Et(f, [
                "eventKey",
                "popupClassName",
                "popupOffset",
                "onTitleClick",
              ]);
            return (
              zo(
                !i,
                "`attribute` of Menu.Item is deprecated. Please pass attribute directly."
              ),
              T(ot.Item, {
                ...i,
                title: typeof a == "string" ? a : void 0,
                ...d,
                ref: l,
              })
            );
          },
        },
      ]),
      r
    );
  })(_.exports.Component),
  Qc = _.exports.forwardRef(function (e, t) {
    var r,
      n = e.style,
      o = e.className,
      a = e.eventKey;
    e.warnKey;
    var i = e.disabled,
      l = e.itemIcon,
      f = e.children,
      d = e.role,
      s = e.onMouseEnter,
      b = e.onMouseLeave,
      p = e.onClick,
      u = e.onKeyDown,
      c = e.onFocus,
      v = me(e, Xc),
      g = Ul(a),
      m = _.exports.useContext(Be),
      y = m.prefixCls,
      h = m.onItemClick,
      O = m.disabled,
      S = m.overflowDisabled,
      $ = m.itemIcon,
      x = m.selectedKeys,
      w = m.onActive,
      C = _.exports.useContext(Uo),
      P = C._internalRenderMenuItem,
      M = "".concat(y, "-item"),
      I = _.exports.useRef(),
      R = _.exports.useRef(),
      j = O || i,
      D = Bu(t, R),
      E = Bt(a),
      B = function (ne) {
        return {
          key: a,
          keyPath: Rt(E).reverse(),
          item: I.current,
          domEvent: ne,
        };
      },
      W = l || $,
      Z = Ql(a, j, s, b),
      ee = Z.active,
      G = me(Z, Gc),
      J = x.includes(a),
      k = Zl(E.length),
      z = function (ne) {
        if (!j) {
          var A = B(ne);
          p == null || p(Sn(A)), h(A);
        }
      },
      N = function (ne) {
        if ((u == null || u(ne), ne.which === it.ENTER)) {
          var A = B(ne);
          p == null || p(Sn(A)), h(A);
        }
      },
      q = function (ne) {
        w(a), c == null || c(ne);
      },
      Y = {};
    e.role === "option" && (Y["aria-selected"] = J);
    var Q = Ee(Yc, {
      ref: I,
      elementRef: D,
      role: d === null ? "none" : d || "menuitem",
      tabIndex: i ? null : -1,
      "data-menu-id": S && g ? null : g,
      ...v,
      ...G,
      ...Y,
      component: "li",
      "aria-disabled": i,
      style: ae(ae({}, k), n),
      className: Ve(
        M,
        ((r = {}),
        se(r, "".concat(M, "-active"), ee),
        se(r, "".concat(M, "-selected"), J),
        se(r, "".concat(M, "-disabled"), j),
        r),
        o
      ),
      onClick: z,
      onKeyDown: N,
      onFocus: q,
      children: [
        f,
        T(Jl, { props: ae(ae({}, e), {}, { isSelected: J }), icon: W }),
      ],
    });
    return P && (Q = P(Q, e, { selected: J })), Q;
  });
function Zc(e, t) {
  var r = e.eventKey,
    n = wn(),
    o = Bt(r);
  return (
    _.exports.useEffect(
      function () {
        if (n)
          return (
            n.registerPath(r, o),
            function () {
              n.unregisterPath(r, o);
            }
          );
      },
      [o]
    ),
    n ? null : T(Qc, { ...e, ref: t })
  );
}
const $n = _.exports.forwardRef(Zc);
var Jc = ["className", "children"],
  ed = function (t, r) {
    var n = t.className,
      o = t.children,
      a = me(t, Jc),
      i = _.exports.useContext(Be),
      l = i.prefixCls,
      f = i.mode,
      d = i.rtl;
    return T("ul", {
      className: Ve(
        l,
        d && "".concat(l, "-rtl"),
        "".concat(l, "-sub"),
        "".concat(l, "-").concat(f === "inline" ? "inline" : "vertical"),
        n
      ),
      role: "menu",
      ...a,
      "data-menu-list": !0,
      ref: r,
      children: o,
    });
  },
  Go = _.exports.forwardRef(ed);
Go.displayName = "SubMenuList";
function Yo(e, t) {
  return Dl(e).map(function (r, n) {
    if (_.exports.isValidElement(r)) {
      var o,
        a,
        i = r.key,
        l =
          (o = (a = r.props) === null || a === void 0 ? void 0 : a.eventKey) !==
            null && o !== void 0
            ? o
            : i,
        f = l == null;
      f && (l = "tmp_key-".concat([].concat(Rt(t), [n]).join("-")));
      var d = { key: l, eventKey: l };
      return _.exports.cloneElement(r, d);
    }
    return r;
  });
}
var xe = { adjustX: 1, adjustY: 1 },
  td = {
    topLeft: { points: ["bl", "tl"], overflow: xe },
    topRight: { points: ["br", "tr"], overflow: xe },
    bottomLeft: { points: ["tl", "bl"], overflow: xe },
    bottomRight: { points: ["tr", "br"], overflow: xe },
    leftTop: { points: ["tr", "tl"], overflow: xe },
    leftBottom: { points: ["br", "bl"], overflow: xe },
    rightTop: { points: ["tl", "tr"], overflow: xe },
    rightBottom: { points: ["bl", "br"], overflow: xe },
  },
  rd = {
    topLeft: { points: ["bl", "tl"], overflow: xe },
    topRight: { points: ["br", "tr"], overflow: xe },
    bottomLeft: { points: ["tl", "bl"], overflow: xe },
    bottomRight: { points: ["tr", "br"], overflow: xe },
    rightTop: { points: ["tr", "tl"], overflow: xe },
    rightBottom: { points: ["br", "bl"], overflow: xe },
    leftTop: { points: ["tl", "tr"], overflow: xe },
    leftBottom: { points: ["bl", "br"], overflow: xe },
  };
function es(e, t, r) {
  if (t) return t;
  if (r) return r[e] || r.other;
}
var nd = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop",
};
function od(e) {
  var t = e.prefixCls,
    r = e.visible,
    n = e.children,
    o = e.popup,
    a = e.popupStyle,
    i = e.popupClassName,
    l = e.popupOffset,
    f = e.disabled,
    d = e.mode,
    s = e.onVisibleChange,
    b = _.exports.useContext(Be),
    p = b.getPopupContainer,
    u = b.rtl,
    c = b.subMenuOpenDelay,
    v = b.subMenuCloseDelay,
    g = b.builtinPlacements,
    m = b.triggerSubMenuAction,
    y = b.forceSubMenuRender,
    h = b.rootClassName,
    O = b.motion,
    S = b.defaultMotions,
    $ = _.exports.useState(!1),
    x = oe($, 2),
    w = x[0],
    C = x[1],
    P = u ? ae(ae({}, rd), g) : ae(ae({}, td), g),
    M = nd[d],
    I = es(d, O, S),
    R = _.exports.useRef(I);
  d !== "inline" && (R.current = I);
  var j = ae(
      ae({}, R.current),
      {},
      {
        leavedClassName: "".concat(t, "-hidden"),
        removeOnLeave: !1,
        motionAppear: !0,
      }
    ),
    D = _.exports.useRef();
  return (
    _.exports.useEffect(
      function () {
        return (
          (D.current = At(function () {
            C(r);
          })),
          function () {
            At.cancel(D.current);
          }
        );
      },
      [r]
    ),
    T(Nu, {
      prefixCls: t,
      popupClassName: Ve(
        "".concat(t, "-popup"),
        se({}, "".concat(t, "-rtl"), u),
        i,
        h
      ),
      stretch: d === "horizontal" ? "minWidth" : null,
      getPopupContainer: p,
      builtinPlacements: P,
      popupPlacement: M,
      popupVisible: w,
      popup: o,
      popupStyle: a,
      popupAlign: l && { offset: l },
      action: f ? [] : [m],
      mouseEnterDelay: c,
      mouseLeaveDelay: v,
      onPopupVisibleChange: s,
      forceRender: y,
      popupMotion: j,
      fresh: !0,
      children: n,
    })
  );
}
function ad(e) {
  var t = e.id,
    r = e.open,
    n = e.keyPath,
    o = e.children,
    a = "inline",
    i = _.exports.useContext(Be),
    l = i.prefixCls,
    f = i.forceSubMenuRender,
    d = i.motion,
    s = i.defaultMotions,
    b = i.mode,
    p = _.exports.useRef(!1);
  p.current = b === a;
  var u = _.exports.useState(!p.current),
    c = oe(u, 2),
    v = c[0],
    g = c[1],
    m = p.current ? r : !1;
  _.exports.useEffect(
    function () {
      p.current && g(!1);
    },
    [b]
  );
  var y = ae({}, es(a, d, s));
  n.length > 1 && (y.motionAppear = !1);
  var h = y.onVisibleChanged;
  return (
    (y.onVisibleChanged = function (O) {
      return !p.current && !O && g(!0), h == null ? void 0 : h(O);
    }),
    v
      ? null
      : T(Tr, {
          mode: a,
          locked: !p.current,
          children: T(zu, {
            visible: m,
            ...y,
            forceRender: f,
            removeOnLeave: !1,
            leavedClassName: "".concat(l, "-hidden"),
            children: function (O) {
              var S = O.className,
                $ = O.style;
              return T(Go, { id: t, className: S, style: $, children: o });
            },
          }),
        })
  );
}
var id = [
    "style",
    "className",
    "title",
    "eventKey",
    "warnKey",
    "disabled",
    "internalPopupClose",
    "children",
    "itemIcon",
    "expandIcon",
    "popupClassName",
    "popupOffset",
    "popupStyle",
    "onClick",
    "onMouseEnter",
    "onMouseLeave",
    "onTitleClick",
    "onTitleMouseEnter",
    "onTitleMouseLeave",
  ],
  ld = ["active"],
  sd = function (t) {
    var r,
      n = t.style,
      o = t.className,
      a = t.title,
      i = t.eventKey;
    t.warnKey;
    var l = t.disabled,
      f = t.internalPopupClose,
      d = t.children,
      s = t.itemIcon,
      b = t.expandIcon,
      p = t.popupClassName,
      u = t.popupOffset,
      c = t.popupStyle,
      v = t.onClick,
      g = t.onMouseEnter,
      m = t.onMouseLeave,
      y = t.onTitleClick,
      h = t.onTitleMouseEnter,
      O = t.onTitleMouseLeave,
      S = me(t, id),
      $ = Ul(i),
      x = _.exports.useContext(Be),
      w = x.prefixCls,
      C = x.mode,
      P = x.openKeys,
      M = x.disabled,
      I = x.overflowDisabled,
      R = x.activeKey,
      j = x.selectedKeys,
      D = x.itemIcon,
      E = x.expandIcon,
      B = x.onItemClick,
      W = x.onOpenChange,
      Z = x.onActive,
      ee = _.exports.useContext(Uo),
      G = ee._internalRenderSubMenuItem,
      J = _.exports.useContext(Gl),
      k = J.isSubPathKey,
      z = Bt(),
      N = "".concat(w, "-submenu"),
      q = M || l,
      Y = _.exports.useRef(),
      Q = _.exports.useRef(),
      te = s != null ? s : D,
      ne = b != null ? b : E,
      A = P.includes(i),
      X = !I && A,
      le = k(j, i),
      he = Ql(i, q, h, O),
      ge = he.active,
      _e = me(he, ld),
      st = _.exports.useState(!1),
      be = oe(st, 2),
      ye = be[0],
      Ne = be[1],
      fe = function (Se) {
        q || Ne(Se);
      },
      ut = function (Se) {
        fe(!0), g == null || g({ key: i, domEvent: Se });
      },
      ze = function (Se) {
        fe(!1), m == null || m({ key: i, domEvent: Se });
      },
      Le = _.exports.useMemo(
        function () {
          return ge || (C !== "inline" ? ye || k([R], i) : !1);
        },
        [C, ge, R, ye, i, k]
      ),
      Xe = Zl(z.length),
      pe = function (Se) {
        q ||
          (y == null || y({ key: i, domEvent: Se }),
          C === "inline" && W(i, !A));
      },
      We = Mr(function (Ce) {
        v == null || v(Sn(Ce)), B(Ce);
      }),
      Ge = function (Se) {
        C !== "inline" && W(i, Se);
      },
      Me = function () {
        Z(i);
      },
      Te = $ && "".concat($, "-popup"),
      ce = Ee("div", {
        role: "menuitem",
        style: Xe,
        className: "".concat(N, "-title"),
        tabIndex: q ? null : -1,
        ref: Y,
        title: typeof a == "string" ? a : null,
        "data-menu-id": I && $ ? null : $,
        "aria-expanded": X,
        "aria-haspopup": !0,
        "aria-controls": Te,
        "aria-disabled": q,
        onClick: pe,
        onFocus: Me,
        ..._e,
        children: [
          a,
          T(Jl, {
            icon: C !== "horizontal" ? ne : void 0,
            props: ae(ae({}, t), {}, { isOpen: X, isSubMenu: !0 }),
            children: T("i", { className: "".concat(N, "-arrow") }),
          }),
        ],
      }),
      He = _.exports.useRef(C);
    if (
      (C !== "inline" && z.length > 1
        ? (He.current = "vertical")
        : (He.current = C),
      !I)
    ) {
      var Pe = He.current;
      ce = T(od, {
        mode: Pe,
        prefixCls: N,
        visible: !f && X && C !== "inline",
        popupClassName: p,
        popupOffset: u,
        popupStyle: c,
        popup: T(Tr, {
          mode: Pe === "horizontal" ? "vertical" : Pe,
          children: T(Go, { id: Te, ref: Q, children: d }),
        }),
        disabled: q,
        onVisibleChange: Ge,
        children: ce,
      });
    }
    var Ye = Ee(ot.Item, {
      role: "none",
      ...S,
      component: "li",
      style: n,
      className: Ve(
        N,
        "".concat(N, "-").concat(C),
        o,
        ((r = {}),
        se(r, "".concat(N, "-open"), X),
        se(r, "".concat(N, "-active"), Le),
        se(r, "".concat(N, "-selected"), le),
        se(r, "".concat(N, "-disabled"), q),
        r)
      ),
      onMouseEnter: ut,
      onMouseLeave: ze,
      children: [ce, !I && T(ad, { id: Te, open: X, keyPath: z, children: d })],
    });
    return (
      G && (Ye = G(Ye, t, { selected: le, active: Le, open: X, disabled: q })),
      T(Tr, {
        onItemClick: We,
        mode: C === "horizontal" ? "vertical" : C,
        itemIcon: te,
        expandIcon: ne,
        children: Ye,
      })
    );
  };
function Mn(e) {
  var t = e.eventKey,
    r = e.children,
    n = Bt(t),
    o = Yo(r, n),
    a = wn();
  _.exports.useEffect(
    function () {
      if (a)
        return (
          a.registerPath(t, n),
          function () {
            a.unregisterPath(t, n);
          }
        );
    },
    [n]
  );
  var i;
  return (
    a ? (i = o) : (i = T(sd, { ...e, children: o })),
    T(Xl.Provider, { value: n, children: i })
  );
}
var ud = ["className", "title", "eventKey", "children"],
  cd = ["children"],
  dd = function (t) {
    var r = t.className,
      n = t.title;
    t.eventKey;
    var o = t.children,
      a = me(t, ud),
      i = _.exports.useContext(Be),
      l = i.prefixCls,
      f = "".concat(l, "-item-group");
    return Ee("li", {
      role: "presentation",
      ...a,
      onClick: function (s) {
        return s.stopPropagation();
      },
      className: Ve(f, r),
      children: [
        T("div", {
          role: "presentation",
          className: "".concat(f, "-title"),
          title: typeof n == "string" ? n : void 0,
          children: n,
        }),
        T("ul", {
          role: "group",
          className: "".concat(f, "-list"),
          children: o,
        }),
      ],
    });
  };
function Rn(e) {
  var t = e.children,
    r = me(e, cd),
    n = Bt(r.eventKey),
    o = Yo(t, n),
    a = wn();
  return a ? o : T(dd, { ...Et(r, ["warnKey"]), children: o });
}
function Qo(e) {
  var t = e.className,
    r = e.style,
    n = _.exports.useContext(Be),
    o = n.prefixCls,
    a = wn();
  return a
    ? null
    : T("li", {
        role: "separator",
        className: Ve("".concat(o, "-item-divider"), t),
        style: r,
      });
}
var fd = ["label", "children", "key", "type"];
function Eo(e) {
  return (e || [])
    .map(function (t, r) {
      if (t && Su(t) === "object") {
        var n = t,
          o = n.label,
          a = n.children,
          i = n.key,
          l = n.type,
          f = me(n, fd),
          d = i != null ? i : "tmp-".concat(r);
        return a || l === "group"
          ? l === "group"
            ? T(Rn, { ...f, title: o, children: Eo(a) }, d)
            : T(Mn, { ...f, title: o, children: Eo(a) }, d)
          : l === "divider"
          ? T(Qo, { ...f }, d)
          : T($n, { ...f, children: o }, d);
      }
      return null;
    })
    .filter(function (t) {
      return t;
    });
}
function pd(e, t, r) {
  var n = e;
  return t && (n = Eo(t)), Yo(n, r);
}
var vd = [
    "prefixCls",
    "rootClassName",
    "style",
    "className",
    "tabIndex",
    "items",
    "children",
    "direction",
    "id",
    "mode",
    "inlineCollapsed",
    "disabled",
    "disabledOverflow",
    "subMenuOpenDelay",
    "subMenuCloseDelay",
    "forceSubMenuRender",
    "defaultOpenKeys",
    "openKeys",
    "activeKey",
    "defaultActiveFirst",
    "selectable",
    "multiple",
    "defaultSelectedKeys",
    "selectedKeys",
    "onSelect",
    "onDeselect",
    "inlineIndent",
    "motion",
    "defaultMotions",
    "triggerSubMenuAction",
    "builtinPlacements",
    "itemIcon",
    "expandIcon",
    "overflowedIndicator",
    "overflowedIndicatorPopupClassName",
    "getPopupContainer",
    "onClick",
    "onOpenChange",
    "onKeyDown",
    "openAnimation",
    "openTransitionName",
    "_internalRenderMenuItem",
    "_internalRenderSubMenuItem",
  ],
  Dt = [],
  gd = _.exports.forwardRef(function (e, t) {
    var r,
      n,
      o = e,
      a = o.prefixCls,
      i = a === void 0 ? "rc-menu" : a,
      l = o.rootClassName,
      f = o.style,
      d = o.className,
      s = o.tabIndex,
      b = s === void 0 ? 0 : s,
      p = o.items,
      u = o.children,
      c = o.direction,
      v = o.id,
      g = o.mode,
      m = g === void 0 ? "vertical" : g,
      y = o.inlineCollapsed,
      h = o.disabled,
      O = o.disabledOverflow,
      S = o.subMenuOpenDelay,
      $ = S === void 0 ? 0.1 : S,
      x = o.subMenuCloseDelay,
      w = x === void 0 ? 0.1 : x,
      C = o.forceSubMenuRender,
      P = o.defaultOpenKeys,
      M = o.openKeys,
      I = o.activeKey,
      R = o.defaultActiveFirst,
      j = o.selectable,
      D = j === void 0 ? !0 : j,
      E = o.multiple,
      B = E === void 0 ? !1 : E,
      W = o.defaultSelectedKeys,
      Z = o.selectedKeys,
      ee = o.onSelect,
      G = o.onDeselect,
      J = o.inlineIndent,
      k = J === void 0 ? 24 : J,
      z = o.motion,
      N = o.defaultMotions,
      q = o.triggerSubMenuAction,
      Y = q === void 0 ? "hover" : q,
      Q = o.builtinPlacements,
      te = o.itemIcon,
      ne = o.expandIcon,
      A = o.overflowedIndicator,
      X = A === void 0 ? "..." : A,
      le = o.overflowedIndicatorPopupClassName,
      he = o.getPopupContainer,
      ge = o.onClick,
      _e = o.onOpenChange,
      st = o.onKeyDown;
    o.openAnimation, o.openTransitionName;
    var be = o._internalRenderMenuItem,
      ye = o._internalRenderSubMenuItem,
      Ne = me(o, vd),
      fe = _.exports.useMemo(
        function () {
          return pd(u, p, Dt);
        },
        [u, p]
      ),
      ut = _.exports.useState(!1),
      ze = oe(ut, 2),
      Le = ze[0],
      Xe = ze[1],
      pe = _.exports.useRef(),
      We = Kc(v),
      Ge = c === "rtl",
      Me = bn(P, {
        value: M,
        postState: function (F) {
          return F || Dt;
        },
      }),
      Te = oe(Me, 2),
      ce = Te[0],
      He = Te[1],
      Pe = function (F) {
        var K =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        function ve() {
          He(F), _e == null || _e(F);
        }
        K ? Il.exports.flushSync(ve) : ve();
      },
      Ye = _.exports.useState(ce),
      Ce = oe(Ye, 2),
      Se = Ce[0],
      zt = Ce[1],
      Qe = _.exports.useRef(!1),
      It = _.exports.useMemo(
        function () {
          return (m === "inline" || m === "vertical") && y
            ? ["vertical", y]
            : [m, !1];
        },
        [m, y]
      ),
      vt = oe(It, 2),
      je = vt[0],
      gt = vt[1],
      ct = je === "inline",
      Tt = _.exports.useState(je),
      dt = oe(Tt, 2),
      we = dt[0],
      L = dt[1],
      V = _.exports.useState(gt),
      ie = oe(V, 2),
      $e = ie[0],
      Ze = ie[1];
    _.exports.useEffect(
      function () {
        L(je), Ze(gt), Qe.current && (ct ? He(Se) : Pe(Dt));
      },
      [je, gt]
    );
    var jn = _.exports.useState(0),
      Nr = oe(jn, 2),
      jt = Nr[0],
      kn = Nr[1],
      Lt = jt >= fe.length - 1 || we !== "horizontal" || O;
    _.exports.useEffect(
      function () {
        ct && zt(ce);
      },
      [ce]
    ),
      _.exports.useEffect(function () {
        return (
          (Qe.current = !0),
          function () {
            Qe.current = !1;
          }
        );
      }, []);
    var Je = Hc(),
      zr = Je.registerPath,
      Lr = Je.unregisterPath,
      qn = Je.refreshOverflowKeys,
      Wr = Je.isSubPathKey,
      Dn = Je.getKeyPath,
      Hr = Je.getKeys,
      An = Je.getSubPathKeys,
      En = _.exports.useMemo(
        function () {
          return { registerPath: zr, unregisterPath: Lr };
        },
        [zr, Lr]
      ),
      Bn = _.exports.useMemo(
        function () {
          return { isSubPathKey: Wr };
        },
        [Wr]
      );
    _.exports.useEffect(
      function () {
        qn(
          Lt
            ? Dt
            : fe.slice(jt + 1).map(function (H) {
                return H.key;
              })
        );
      },
      [jt, Lt]
    );
    var Nn = bn(
        I || (R && ((r = fe[0]) === null || r === void 0 ? void 0 : r.key)),
        { value: I }
      ),
      Fr = oe(Nn, 2),
      mt = Fr[0],
      Wt = Fr[1],
      zn = Mr(function (H) {
        Wt(H);
      }),
      Ln = Mr(function () {
        Wt(void 0);
      });
    _.exports.useImperativeHandle(t, function () {
      return {
        list: pe.current,
        focus: function (F) {
          var K,
            ve = Hr(),
            Oe = Do(ve, We),
            ht = Oe.elements,
            bt = Oe.key2element,
            Ur = Oe.element2key,
            Vr = Vo(pe.current, ht),
            Xr =
              mt != null
                ? mt
                : Vr[0]
                ? Ur.get(Vr[0])
                : (K = fe.find(function (Es) {
                    return !Es.props.disabled;
                  })) === null || K === void 0
                ? void 0
                : K.key,
            yt = bt.get(Xr);
          if (Xr && yt) {
            var Re;
            yt == null ||
              (Re = yt.focus) === null ||
              Re === void 0 ||
              Re.call(yt, F);
          }
        },
      };
    });
    var Wn = bn(W || [], {
        value: Z,
        postState: function (F) {
          return Array.isArray(F) ? F : F == null ? Dt : [F];
        },
      }),
      ft = oe(Wn, 2),
      Fe = ft[0],
      Ht = ft[1],
      Ft = function (F) {
        if (D) {
          var K = F.key,
            ve = Fe.includes(K),
            Oe;
          B
            ? ve
              ? (Oe = Fe.filter(function (bt) {
                  return bt !== K;
                }))
              : (Oe = [].concat(Rt(Fe), [K]))
            : (Oe = [K]),
            Ht(Oe);
          var ht = ae(ae({}, F), {}, { selectedKeys: Oe });
          ve ? G == null || G(ht) : ee == null || ee(ht);
        }
        !B && ce.length && we !== "inline" && Pe(Dt);
      },
      kt = Mr(function (H) {
        ge == null || ge(Sn(H)), Ft(H);
      }),
      et = Mr(function (H, F) {
        var K = ce.filter(function (Oe) {
          return Oe !== H;
        });
        if (F) K.push(H);
        else if (we !== "inline") {
          var ve = An(H);
          K = K.filter(function (Oe) {
            return !ve.has(Oe);
          });
        }
        Tl(ce, K, !0) || Pe(K, !0);
      }),
      Hn = function (F, K) {
        var ve = K != null ? K : !ce.includes(F);
        et(F, ve);
      },
      de = zc(we, mt, Ge, We, pe, Hr, Dn, Wt, Hn, st);
    _.exports.useEffect(function () {
      Xe(!0);
    }, []);
    var Kr = _.exports.useMemo(
        function () {
          return {
            _internalRenderMenuItem: be,
            _internalRenderSubMenuItem: ye,
          };
        },
        [be, ye]
      ),
      Fn =
        we !== "horizontal" || O
          ? fe
          : fe.map(function (H, F) {
              return T(Tr, { overflowDisabled: F > jt, children: H }, H.key);
            }),
      ue = T(ot, {
        id: v,
        ref: pe,
        prefixCls: "".concat(i, "-overflow"),
        component: "ul",
        itemComponent: $n,
        className: Ve(
          i,
          "".concat(i, "-root"),
          "".concat(i, "-").concat(we),
          d,
          ((n = {}),
          se(n, "".concat(i, "-inline-collapsed"), $e),
          se(n, "".concat(i, "-rtl"), Ge),
          n),
          l
        ),
        dir: c,
        style: f,
        role: "menu",
        tabIndex: b,
        data: Fn,
        renderRawItem: function (F) {
          return F;
        },
        renderRawRest: function (F) {
          var K = F.length,
            ve = K ? fe.slice(-K) : null;
          return T(Mn, {
            eventKey: Ao,
            title: X,
            disabled: Lt,
            internalPopupClose: K === 0,
            popupClassName: le,
            children: ve,
          });
        },
        maxCount: we !== "horizontal" || O ? ot.INVALIDATE : ot.RESPONSIVE,
        ssr: "full",
        "data-menu-list": !0,
        onVisibleChange: function (F) {
          kn(F);
        },
        onKeyDown: de,
        ...Ne,
      });
    return T(Uo.Provider, {
      value: Kr,
      children: T(Fl.Provider, {
        value: We,
        children: Ee(Tr, {
          prefixCls: i,
          rootClassName: l,
          mode: we,
          openKeys: ce,
          rtl: Ge,
          disabled: h,
          motion: Le ? z : null,
          defaultMotions: Le ? N : null,
          activeKey: mt,
          onActive: zn,
          onInactive: Ln,
          selectedKeys: Fe,
          inlineIndent: k,
          subMenuOpenDelay: $,
          subMenuCloseDelay: w,
          forceSubMenuRender: C,
          builtinPlacements: Q,
          triggerSubMenuAction: Y,
          getPopupContainer: he,
          itemIcon: te,
          expandIcon: ne,
          onItemClick: kt,
          onOpenChange: et,
          children: [
            T(Gl.Provider, { value: Bn, children: ue }),
            T("div", {
              style: { display: "none" },
              "aria-hidden": !0,
              children: T(Vl.Provider, { value: En, children: fe }),
            }),
          ],
        }),
      }),
    });
  }),
  jr = gd;
jr.Item = $n;
jr.SubMenu = Mn;
jr.ItemGroup = Rn;
jr.Divider = Qo;
var md = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z",
        },
      },
    ],
  },
  name: "bars",
  theme: "outlined",
};
const hd = md;
var bd = function (t, r) {
  return T(Lo, { ...t, ref: r, icon: hd });
};
const yd = _.exports.forwardRef(bd);
var Cd = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z",
        },
      },
    ],
  },
  name: "left",
  theme: "outlined",
};
const xd = Cd;
var _d = function (t, r) {
  return T(Lo, { ...t, ref: r, icon: xd });
};
const xa = _.exports.forwardRef(_d),
  Sd = (e) => !isNaN(parseFloat(e)) && isFinite(e),
  Od = Sd,
  Pd = _.exports.createContext({
    siderHook: { addSider: () => null, removeSider: () => null },
  });
var wd =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
        t.indexOf(n[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
          (r[n[o]] = e[n[o]]);
    return r;
  };
const _a = {
    xs: "479.98px",
    sm: "575.98px",
    md: "767.98px",
    lg: "991.98px",
    xl: "1199.98px",
    xxl: "1599.98px",
  },
  Zo = _.exports.createContext({}),
  $d = (() => {
    let e = 0;
    return function () {
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return (e += 1), `${t}${e}`;
    };
  })(),
  Md = _.exports.forwardRef((e, t) => {
    const {
        prefixCls: r,
        className: n,
        trigger: o,
        children: a,
        defaultCollapsed: i = !1,
        theme: l = "dark",
        style: f = {},
        collapsible: d = !1,
        reverseArrow: s = !1,
        width: b = 200,
        collapsedWidth: p = 80,
        zeroWidthTriggerStyle: u,
        breakpoint: c,
        onCollapse: v,
        onBreakpoint: g,
      } = e,
      m = wd(e, [
        "prefixCls",
        "className",
        "trigger",
        "children",
        "defaultCollapsed",
        "theme",
        "style",
        "collapsible",
        "reverseArrow",
        "width",
        "collapsedWidth",
        "zeroWidthTriggerStyle",
        "breakpoint",
        "onCollapse",
        "onBreakpoint",
      ]),
      { siderHook: y } = _.exports.useContext(Pd),
      [h, O] = _.exports.useState("collapsed" in e ? e.collapsed : i),
      [S, $] = _.exports.useState(!1);
    _.exports.useEffect(() => {
      "collapsed" in e && O(e.collapsed);
    }, [e.collapsed]);
    const x = (R, j) => {
        "collapsed" in e || O(R), v == null || v(R, j);
      },
      w = _.exports.useRef();
    (w.current = (R) => {
      $(R.matches),
        g == null || g(R.matches),
        h !== R.matches && x(R.matches, "responsive");
    }),
      _.exports.useEffect(() => {
        function R(D) {
          return w.current(D);
        }
        let j;
        if (typeof window < "u") {
          const { matchMedia: D } = window;
          if (D && c && c in _a) {
            j = D(`screen and (max-width: ${_a[c]})`);
            try {
              j.addEventListener("change", R);
            } catch {
              j.addListener(R);
            }
            R(j);
          }
        }
        return () => {
          try {
            j == null || j.removeEventListener("change", R);
          } catch {
            j == null || j.removeListener(R);
          }
        };
      }, [c]),
      _.exports.useEffect(() => {
        const R = $d("ant-sider-");
        return y.addSider(R), () => y.removeSider(R);
      }, []);
    const C = () => {
        x(!h, "clickTrigger");
      },
      { getPrefixCls: P } = _.exports.useContext(Wo),
      M = () => {
        const R = P("layout-sider", r),
          j = Et(m, ["collapsed"]),
          D = h ? p : b,
          E = Od(D) ? `${D}px` : String(D),
          B =
            parseFloat(String(p || 0)) === 0
              ? T("span", {
                  onClick: C,
                  className: Ae(
                    `${R}-zero-width-trigger`,
                    `${R}-zero-width-trigger-${s ? "right" : "left"}`
                  ),
                  style: u,
                  children: o || T(yd, {}),
                })
              : null,
          ee = {
            expanded: s ? T(va, {}) : T(xa, {}),
            collapsed: s ? T(xa, {}) : T(va, {}),
          }[h ? "collapsed" : "expanded"],
          G =
            o !== null
              ? B ||
                T("div", {
                  className: `${R}-trigger`,
                  onClick: C,
                  style: { width: E },
                  children: o || ee,
                })
              : null,
          J = Object.assign(Object.assign({}, f), {
            flex: `0 0 ${E}`,
            maxWidth: E,
            minWidth: E,
            width: E,
          }),
          k = Ae(
            R,
            `${R}-${l}`,
            {
              [`${R}-collapsed`]: !!h,
              [`${R}-has-trigger`]: d && o !== null && !B,
              [`${R}-below`]: !!S,
              [`${R}-zero-width`]: parseFloat(E) === 0,
            },
            n
          );
        return Ee("aside", {
          ...Object.assign({ className: k }, j, { style: J, ref: t }),
          children: [
            T("div", { className: `${R}-children`, children: a }),
            d || (S && B) ? G : null,
          ],
        });
      },
      I = _.exports.useMemo(() => ({ siderCollapsed: h }), [h]);
    return T(Zo.Provider, { value: I, children: M() });
  }),
  Pp = Md;
var Rd = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z",
        },
      },
    ],
  },
  name: "ellipsis",
  theme: "outlined",
};
const Id = Rd;
var Td = function (t, r) {
  return T(Lo, { ...t, ref: r, icon: Id });
};
const jd = _.exports.forwardRef(Td);
var kd =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
        t.indexOf(n[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
          (r[n[o]] = e[n[o]]);
    return r;
  };
const qd = (e) => {
    const { prefixCls: t, className: r, dashed: n } = e,
      o = kd(e, ["prefixCls", "className", "dashed"]),
      { getPrefixCls: a } = _.exports.useContext(Wo),
      i = a("menu", t),
      l = Ae({ [`${i}-item-divider-dashed`]: !!n }, r);
    return T(Qo, { ...Object.assign({ className: l }, o) });
  },
  ts = qd,
  Dd = _.exports.createContext({
    prefixCls: "",
    firstLevel: !0,
    inlineCollapsed: !1,
  }),
  On = Dd,
  Ad = (e) => {
    var t;
    const { className: r, children: n, icon: o, title: a, danger: i } = e,
      {
        prefixCls: l,
        firstLevel: f,
        direction: d,
        disableMenuItemTitleTooltip: s,
        inlineCollapsed: b,
      } = _.exports.useContext(On),
      p = (y) => {
        const h = T("span", { className: `${l}-title-content`, children: n });
        return (!o || (Ir(n) && n.type === "span")) &&
          n &&
          y &&
          f &&
          typeof n == "string"
          ? T("div", {
              className: `${l}-inline-collapsed-noicon`,
              children: n.charAt(0),
            })
          : h;
      },
      { siderCollapsed: u } = _.exports.useContext(Zo);
    let c = a;
    typeof a > "u" ? (c = f ? n : "") : a === !1 && (c = "");
    const v = { title: c };
    !u && !b && ((v.title = null), (v.open = !1));
    const g = Dl(n).length;
    let m = Ee($n, {
      ...Object.assign({}, Et(e, ["title", "icon", "danger"]), {
        className: Ae(
          {
            [`${l}-item-danger`]: i,
            [`${l}-item-only-child`]: (o ? g + 1 : g) === 1,
          },
          r
        ),
        title: typeof a == "string" ? a : void 0,
      }),
      children: [
        Ho(o, {
          className: Ae(
            Ir(o)
              ? (t = o.props) === null || t === void 0
                ? void 0
                : t.className
              : "",
            `${l}-item-icon`
          ),
        }),
        p(b),
      ],
    });
    return (
      s ||
        (m = T(Lu, {
          ...Object.assign({}, v, {
            placement: d === "rtl" ? "left" : "right",
            overlayClassName: `${l}-inline-collapsed-tooltip`,
          }),
          children: m,
        })),
      m
    );
  },
  rs = Ad,
  Ed = (e) => {
    var t;
    const { popupClassName: r, icon: n, title: o, theme: a } = e,
      i = _.exports.useContext(On),
      { prefixCls: l, inlineCollapsed: f, theme: d } = i,
      s = Bt();
    let b;
    if (!n)
      b =
        f && !s.length && o && typeof o == "string"
          ? T("div", {
              className: `${l}-inline-collapsed-noicon`,
              children: o.charAt(0),
            })
          : T("span", { className: `${l}-title-content`, children: o });
    else {
      const c = Ir(o) && o.type === "span";
      b = Ee(Ou, {
        children: [
          Ho(n, {
            className: Ae(
              Ir(n)
                ? (t = n.props) === null || t === void 0
                  ? void 0
                  : t.className
                : "",
              `${l}-item-icon`
            ),
          }),
          c ? o : T("span", { className: `${l}-title-content`, children: o }),
        ],
      });
    }
    const p = _.exports.useMemo(
        () => Object.assign(Object.assign({}, i), { firstLevel: !1 }),
        [i]
      ),
      [u] = Wu("Menu");
    return T(On.Provider, {
      value: p,
      children: T(Mn, {
        ...Object.assign({}, Et(e, ["icon"]), {
          title: b,
          popupClassName: Ae(l, r, `${l}-${a || d}`),
          popupStyle: { zIndex: u },
        }),
      }),
    });
  },
  ns = Ed;
var Bd =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
        t.indexOf(n[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
          (r[n[o]] = e[n[o]]);
    return r;
  };
function Bo(e) {
  return (e || [])
    .map((t, r) => {
      if (t && typeof t == "object") {
        const n = t,
          { label: o, children: a, key: i, type: l } = n,
          f = Bd(n, ["label", "children", "key", "type"]),
          d = i != null ? i : `tmp-${r}`;
        return a || l === "group"
          ? l === "group"
            ? T(Rn, {
                ...Object.assign({ key: d }, f, { title: o }),
                children: Bo(a),
              })
            : T(ns, {
                ...Object.assign({ key: d }, f, { title: o }),
                children: Bo(a),
              })
          : l === "divider"
          ? T(ts, { ...Object.assign({ key: d }, f) })
          : T(rs, { ...Object.assign({ key: d }, f), children: o });
      }
      return null;
    })
    .filter((t) => t);
}
function Nd(e) {
  return _.exports.useMemo(() => e && Bo(e), [e]);
}
globalThis && globalThis.__rest;
const zd = _.exports.createContext(null),
  Sa = zd,
  Ld = (e) => {
    const {
      componentCls: t,
      motionDurationSlow: r,
      horizontalLineHeight: n,
      colorSplit: o,
      lineWidth: a,
      lineType: i,
      itemPaddingInline: l,
    } = e;
    return {
      [`${t}-horizontal`]: {
        lineHeight: n,
        border: 0,
        borderBottom: `${re(a)} ${i} ${o}`,
        boxShadow: "none",
        "&::after": {
          display: "block",
          clear: "both",
          height: 0,
          content: '"\\20"',
        },
        [`${t}-item, ${t}-submenu`]: {
          position: "relative",
          display: "inline-block",
          verticalAlign: "bottom",
          paddingInline: l,
        },
        [`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]: {
          backgroundColor: "transparent",
        },
        [`${t}-item, ${t}-submenu-title`]: {
          transition: [`border-color ${r}`, `background ${r}`].join(","),
        },
        [`${t}-submenu-arrow`]: { display: "none" },
      },
    };
  },
  Wd = Ld,
  Hd = (e) => {
    let { componentCls: t, menuArrowOffset: r, calc: n } = e;
    return {
      [`${t}-rtl`]: { direction: "rtl" },
      [`${t}-submenu-rtl`]: { transformOrigin: "100% 0" },
      [`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]: {
        [`${t}-submenu-arrow`]: {
          "&::before": {
            transform: `rotate(-45deg) translateY(${re(n(r).mul(-1).equal())})`,
          },
          "&::after": { transform: `rotate(45deg) translateY(${re(r)})` },
        },
      },
    };
  },
  Fd = Hd,
  Oa = (e) => Object.assign({}, Pu(e)),
  Kd = (e, t) => {
    const {
      componentCls: r,
      itemColor: n,
      itemSelectedColor: o,
      groupTitleColor: a,
      itemBg: i,
      subMenuItemBg: l,
      itemSelectedBg: f,
      activeBarHeight: d,
      activeBarWidth: s,
      activeBarBorderWidth: b,
      motionDurationSlow: p,
      motionEaseInOut: u,
      motionEaseOut: c,
      itemPaddingInline: v,
      motionDurationMid: g,
      itemHoverColor: m,
      lineType: y,
      colorSplit: h,
      itemDisabledColor: O,
      dangerItemColor: S,
      dangerItemHoverColor: $,
      dangerItemSelectedColor: x,
      dangerItemActiveBg: w,
      dangerItemSelectedBg: C,
      popupBg: P,
      itemHoverBg: M,
      itemActiveBg: I,
      menuSubMenuBg: R,
      horizontalItemSelectedColor: j,
      horizontalItemSelectedBg: D,
      horizontalItemBorderRadius: E,
      horizontalItemHoverBg: B,
    } = e;
    return {
      [`${r}-${t}, ${r}-${t} > ${r}`]: {
        color: n,
        background: i,
        [`&${r}-root:focus-visible`]: Object.assign({}, Oa(e)),
        [`${r}-item-group-title`]: { color: a },
        [`${r}-submenu-selected`]: { [`> ${r}-submenu-title`]: { color: o } },
        [`${r}-item-disabled, ${r}-submenu-disabled`]: {
          color: `${O} !important`,
        },
        [`${r}-item:not(${r}-item-selected):not(${r}-submenu-selected)`]: {
          [`&:hover, > ${r}-submenu-title:hover`]: { color: m },
        },
        [`&:not(${r}-horizontal)`]: {
          [`${r}-item:not(${r}-item-selected)`]: {
            "&:hover": { backgroundColor: M },
            "&:active": { backgroundColor: I },
          },
          [`${r}-submenu-title`]: {
            "&:hover": { backgroundColor: M },
            "&:active": { backgroundColor: I },
          },
        },
        [`${r}-item-danger`]: {
          color: S,
          [`&${r}-item:hover`]: {
            [`&:not(${r}-item-selected):not(${r}-submenu-selected)`]: {
              color: $,
            },
          },
          [`&${r}-item:active`]: { background: w },
        },
        [`${r}-item a`]: { "&, &:hover": { color: "inherit" } },
        [`${r}-item-selected`]: {
          color: o,
          [`&${r}-item-danger`]: { color: x },
          ["a, a:hover"]: { color: "inherit" },
        },
        [`& ${r}-item-selected`]: {
          backgroundColor: f,
          [`&${r}-item-danger`]: { backgroundColor: C },
        },
        [`${r}-item, ${r}-submenu-title`]: {
          [`&:not(${r}-item-disabled):focus-visible`]: Object.assign({}, Oa(e)),
        },
        [`&${r}-submenu > ${r}`]: { backgroundColor: R },
        [`&${r}-popup > ${r}`]: { backgroundColor: P },
        [`&${r}-submenu-popup > ${r}`]: { backgroundColor: P },
        [`&${r}-horizontal`]: Object.assign(
          Object.assign({}, t === "dark" ? { borderBottom: 0 } : {}),
          {
            [`> ${r}-item, > ${r}-submenu`]: {
              top: b,
              marginTop: e.calc(b).mul(-1).equal(),
              marginBottom: 0,
              borderRadius: E,
              "&::after": {
                position: "absolute",
                insetInline: v,
                bottom: 0,
                borderBottom: `${re(d)} solid transparent`,
                transition: `border-color ${p} ${u}`,
                content: '""',
              },
              ["&:hover, &-active, &-open"]: {
                background: B,
                "&::after": { borderBottomWidth: d, borderBottomColor: j },
              },
              ["&-selected"]: {
                color: j,
                backgroundColor: D,
                "&:hover": { backgroundColor: D },
                "&::after": { borderBottomWidth: d, borderBottomColor: j },
              },
            },
          }
        ),
        [`&${r}-root`]: {
          [`&${r}-inline, &${r}-vertical`]: {
            borderInlineEnd: `${re(b)} ${y} ${h}`,
          },
        },
        [`&${r}-inline`]: {
          [`${r}-sub${r}-inline`]: { background: l },
          [`${r}-item`]: {
            position: "relative",
            "&::after": {
              position: "absolute",
              insetBlock: 0,
              insetInlineEnd: 0,
              borderInlineEnd: `${re(s)} solid ${o}`,
              transform: "scaleY(0.0001)",
              opacity: 0,
              transition: [`transform ${g} ${c}`, `opacity ${g} ${c}`].join(
                ","
              ),
              content: '""',
            },
            [`&${r}-item-danger`]: { "&::after": { borderInlineEndColor: x } },
          },
          [`${r}-selected, ${r}-item-selected`]: {
            "&::after": {
              transform: "scaleY(1)",
              opacity: 1,
              transition: [`transform ${g} ${u}`, `opacity ${g} ${u}`].join(
                ","
              ),
            },
          },
        },
      },
    };
  },
  Pa = Kd,
  wa = (e) => {
    const {
        componentCls: t,
        itemHeight: r,
        itemMarginInline: n,
        padding: o,
        menuArrowSize: a,
        marginXS: i,
        itemMarginBlock: l,
        itemWidth: f,
      } = e,
      d = e.calc(a).add(o).add(i).equal();
    return {
      [`${t}-item`]: { position: "relative", overflow: "hidden" },
      [`${t}-item, ${t}-submenu-title`]: {
        height: r,
        lineHeight: re(r),
        paddingInline: o,
        overflow: "hidden",
        textOverflow: "ellipsis",
        marginInline: n,
        marginBlock: l,
        width: f,
      },
      [`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]: {
        height: r,
        lineHeight: re(r),
      },
      [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: { paddingInlineEnd: d },
    };
  },
  Ud = (e) => {
    const {
        componentCls: t,
        iconCls: r,
        itemHeight: n,
        colorTextLightSolid: o,
        dropdownWidth: a,
        controlHeightLG: i,
        motionDurationMid: l,
        motionEaseOut: f,
        paddingXL: d,
        itemMarginInline: s,
        fontSizeLG: b,
        motionDurationSlow: p,
        paddingXS: u,
        boxShadowSecondary: c,
        collapsedWidth: v,
        collapsedIconSize: g,
      } = e,
      m = {
        height: n,
        lineHeight: re(n),
        listStylePosition: "inside",
        listStyleType: "disc",
      };
    return [
      {
        [t]: {
          ["&-inline, &-vertical"]: Object.assign(
            { [`&${t}-root`]: { boxShadow: "none" } },
            wa(e)
          ),
        },
        [`${t}-submenu-popup`]: {
          [`${t}-vertical`]: Object.assign(Object.assign({}, wa(e)), {
            boxShadow: c,
          }),
        },
      },
      {
        [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
          minWidth: a,
          maxHeight: `calc(100vh - ${re(e.calc(i).mul(2.5).equal())})`,
          padding: "0",
          overflow: "hidden",
          borderInlineEnd: 0,
          "&:not([class*='-active'])": {
            overflowX: "hidden",
            overflowY: "auto",
          },
        },
      },
      {
        [`${t}-inline`]: {
          width: "100%",
          [`&${t}-root`]: {
            [`${t}-item, ${t}-submenu-title`]: {
              display: "flex",
              alignItems: "center",
              transition: [
                `border-color ${p}`,
                `background ${p}`,
                `padding ${l} ${f}`,
              ].join(","),
              [`> ${t}-title-content`]: {
                flex: "auto",
                minWidth: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
              "> *": { flex: "none" },
            },
          },
          [`${t}-sub${t}-inline`]: {
            padding: 0,
            border: 0,
            borderRadius: 0,
            boxShadow: "none",
            [`& > ${t}-submenu > ${t}-submenu-title`]: m,
            [`& ${t}-item-group-title`]: { paddingInlineStart: d },
          },
          [`${t}-item`]: m,
        },
      },
      {
        [`${t}-inline-collapsed`]: {
          width: v,
          [`&${t}-root`]: {
            [`${t}-item, ${t}-submenu ${t}-submenu-title`]: {
              [`> ${t}-inline-collapsed-noicon`]: {
                fontSize: b,
                textAlign: "center",
              },
            },
          },
          [`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]: {
            insetInlineStart: 0,
            paddingInline: `calc(50% - ${re(e.calc(b).div(2).equal())} - ${re(
              s
            )})`,
            textOverflow: "clip",
            [`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]: { opacity: 0 },
            [`${t}-item-icon, ${r}`]: {
              margin: 0,
              fontSize: g,
              lineHeight: re(n),
              "+ span": { display: "inline-block", opacity: 0 },
            },
          },
          [`${t}-item-icon, ${r}`]: { display: "inline-block" },
          "&-tooltip": {
            pointerEvents: "none",
            [`${t}-item-icon, ${r}`]: { display: "none" },
            "a, a:hover": { color: o },
          },
          [`${t}-item-group-title`]: Object.assign(Object.assign({}, wu), {
            paddingInline: u,
          }),
        },
      },
    ];
  },
  Vd = Ud,
  $a = (e) => {
    const {
      componentCls: t,
      motionDurationSlow: r,
      motionDurationMid: n,
      motionEaseInOut: o,
      motionEaseOut: a,
      iconCls: i,
      iconSize: l,
      iconMarginInlineEnd: f,
    } = e;
    return {
      [`${t}-item, ${t}-submenu-title`]: {
        position: "relative",
        display: "block",
        margin: 0,
        whiteSpace: "nowrap",
        cursor: "pointer",
        transition: [
          `border-color ${r}`,
          `background ${r}`,
          `padding ${r} ${o}`,
        ].join(","),
        [`${t}-item-icon, ${i}`]: {
          minWidth: l,
          fontSize: l,
          transition: [
            `font-size ${n} ${a}`,
            `margin ${r} ${o}`,
            `color ${r}`,
          ].join(","),
          "+ span": {
            marginInlineStart: f,
            opacity: 1,
            transition: [`opacity ${r} ${o}`, `margin ${r}`, `color ${r}`].join(
              ","
            ),
          },
        },
        [`${t}-item-icon`]: Object.assign({}, Ru()),
        [`&${t}-item-only-child`]: {
          [`> ${i}, > ${t}-item-icon`]: { marginInlineEnd: 0 },
        },
      },
      [`${t}-item-disabled, ${t}-submenu-disabled`]: {
        background: "none !important",
        cursor: "not-allowed",
        "&::after": { borderColor: "transparent !important" },
        a: { color: "inherit !important" },
        [`> ${t}-submenu-title`]: {
          color: "inherit !important",
          cursor: "not-allowed",
        },
      },
    };
  },
  Ma = (e) => {
    const {
      componentCls: t,
      motionDurationSlow: r,
      motionEaseInOut: n,
      borderRadius: o,
      menuArrowSize: a,
      menuArrowOffset: i,
    } = e;
    return {
      [`${t}-submenu`]: {
        ["&-expand-icon, &-arrow"]: {
          position: "absolute",
          top: "50%",
          insetInlineEnd: e.margin,
          width: a,
          color: "currentcolor",
          transform: "translateY(-50%)",
          transition: `transform ${r} ${n}, opacity ${r}`,
        },
        "&-arrow": {
          "&::before, &::after": {
            position: "absolute",
            width: e.calc(a).mul(0.6).equal(),
            height: e.calc(a).mul(0.15).equal(),
            backgroundColor: "currentcolor",
            borderRadius: o,
            transition: [
              `background ${r} ${n}`,
              `transform ${r} ${n}`,
              `top ${r} ${n}`,
              `color ${r} ${n}`,
            ].join(","),
            content: '""',
          },
          "&::before": {
            transform: `rotate(45deg) translateY(${re(
              e.calc(i).mul(-1).equal()
            )})`,
          },
          "&::after": { transform: `rotate(-45deg) translateY(${re(i)})` },
        },
      },
    };
  },
  Xd = (e) => {
    const {
      antCls: t,
      componentCls: r,
      fontSize: n,
      motionDurationSlow: o,
      motionDurationMid: a,
      motionEaseInOut: i,
      paddingXS: l,
      padding: f,
      colorSplit: d,
      lineWidth: s,
      zIndexPopup: b,
      borderRadiusLG: p,
      subMenuItemBorderRadius: u,
      menuArrowSize: c,
      menuArrowOffset: v,
      lineType: g,
      menuPanelMaskInset: m,
      groupTitleLineHeight: y,
      groupTitleFontSize: h,
    } = e;
    return [
      {
        "": {
          [`${r}`]: Object.assign(Object.assign({}, pa()), {
            ["&-hidden"]: { display: "none" },
          }),
        },
        [`${r}-submenu-hidden`]: { display: "none" },
      },
      {
        [r]: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(Object.assign(Object.assign({}, Mu(e)), pa()), {
                  marginBottom: 0,
                  paddingInlineStart: 0,
                  fontSize: n,
                  lineHeight: 0,
                  listStyle: "none",
                  outline: "none",
                  transition: `width ${o} cubic-bezier(0.2, 0, 0, 1) 0s`,
                  ["ul, ol"]: { margin: 0, padding: 0, listStyle: "none" },
                  ["&-overflow"]: {
                    display: "flex",
                    [`${r}-item`]: { flex: "none" },
                  },
                  [`${r}-item, ${r}-submenu, ${r}-submenu-title`]: {
                    borderRadius: e.itemBorderRadius,
                  },
                  [`${r}-item-group-title`]: {
                    padding: `${re(l)} ${re(f)}`,
                    fontSize: h,
                    lineHeight: y,
                    transition: `all ${o}`,
                  },
                  [`&-horizontal ${r}-submenu`]: {
                    transition: [
                      `border-color ${o} ${i}`,
                      `background ${o} ${i}`,
                    ].join(","),
                  },
                  [`${r}-submenu, ${r}-submenu-inline`]: {
                    transition: [
                      `border-color ${o} ${i}`,
                      `background ${o} ${i}`,
                      `padding ${a} ${i}`,
                    ].join(","),
                  },
                  [`${r}-submenu ${r}-sub`]: {
                    cursor: "initial",
                    transition: [
                      `background ${o} ${i}`,
                      `padding ${o} ${i}`,
                    ].join(","),
                  },
                  [`${r}-title-content`]: {
                    transition: `color ${o}`,
                    [`> ${t}-typography-ellipsis-single-line`]: {
                      display: "inline",
                      verticalAlign: "unset",
                    },
                  },
                  [`${r}-item a`]: {
                    "&::before": {
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "transparent",
                      content: '""',
                    },
                  },
                  [`${r}-item-divider`]: {
                    overflow: "hidden",
                    lineHeight: 0,
                    borderColor: d,
                    borderStyle: g,
                    borderWidth: 0,
                    borderTopWidth: s,
                    marginBlock: s,
                    padding: 0,
                    "&-dashed": { borderStyle: "dashed" },
                  },
                }),
                $a(e)
              ),
              {
                [`${r}-item-group`]: {
                  [`${r}-item-group-list`]: {
                    margin: 0,
                    padding: 0,
                    [`${r}-item, ${r}-submenu-title`]: {
                      paddingInline: `${re(e.calc(n).mul(2).equal())} ${re(f)}`,
                    },
                  },
                },
                "&-submenu": {
                  "&-popup": {
                    position: "absolute",
                    zIndex: b,
                    borderRadius: p,
                    boxShadow: "none",
                    transformOrigin: "0 0",
                    [`&${r}-submenu`]: { background: "transparent" },
                    "&::before": {
                      position: "absolute",
                      inset: `${re(m)} 0 0`,
                      zIndex: -1,
                      width: "100%",
                      height: "100%",
                      opacity: 0,
                      content: '""',
                    },
                  },
                  "&-placement-rightTop::before": {
                    top: 0,
                    insetInlineStart: m,
                  },
                  [`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]: { transformOrigin: "100% 0" },
                  [`
          &-placement-leftBottom,
          &-placement-topRight,
          `]: { transformOrigin: "100% 100%" },
                  [`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]: { transformOrigin: "0 100%" },
                  [`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]: { transformOrigin: "0 0" },
                  [`
          &-placement-leftTop,
          &-placement-leftBottom
          `]: { paddingInlineEnd: e.paddingXS },
                  [`
          &-placement-rightTop,
          &-placement-rightBottom
          `]: { paddingInlineStart: e.paddingXS },
                  [`
          &-placement-topRight,
          &-placement-topLeft
          `]: { paddingBottom: e.paddingXS },
                  [`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]: { paddingTop: e.paddingXS },
                  [`> ${r}`]: Object.assign(
                    Object.assign(
                      Object.assign({ borderRadius: p }, $a(e)),
                      Ma(e)
                    ),
                    {
                      [`${r}-item, ${r}-submenu > ${r}-submenu-title`]: {
                        borderRadius: u,
                      },
                      [`${r}-submenu-title::after`]: {
                        transition: `transform ${o} ${i}`,
                      },
                    }
                  ),
                },
              }
            ),
            Ma(e)
          ),
          {
            [`&-inline-collapsed ${r}-submenu-arrow,
        &-inline ${r}-submenu-arrow`]: {
              "&::before": { transform: `rotate(-45deg) translateX(${re(v)})` },
              "&::after": {
                transform: `rotate(45deg) translateX(${re(
                  e.calc(v).mul(-1).equal()
                )})`,
              },
            },
            [`${r}-submenu-open${r}-submenu-inline > ${r}-submenu-title > ${r}-submenu-arrow`]:
              {
                transform: `translateY(${re(
                  e.calc(c).mul(0.2).mul(-1).equal()
                )})`,
                "&::after": {
                  transform: `rotate(-45deg) translateX(${re(
                    e.calc(v).mul(-1).equal()
                  )})`,
                },
                "&::before": {
                  transform: `rotate(45deg) translateX(${re(v)})`,
                },
              },
          }
        ),
      },
      { [`${t}-layout-header`]: { [r]: { lineHeight: "inherit" } } },
    ];
  },
  Gd = (e) => {
    var t, r, n;
    const {
        colorPrimary: o,
        colorError: a,
        colorTextDisabled: i,
        colorErrorBg: l,
        colorText: f,
        colorTextDescription: d,
        colorBgContainer: s,
        colorFillAlter: b,
        colorFillContent: p,
        lineWidth: u,
        lineWidthBold: c,
        controlItemBgActive: v,
        colorBgTextHover: g,
        controlHeightLG: m,
        lineHeight: y,
        colorBgElevated: h,
        marginXXS: O,
        padding: S,
        fontSize: $,
        controlHeightSM: x,
        fontSizeLG: w,
        colorTextLightSolid: C,
        colorErrorHover: P,
      } = e,
      M = (t = e.activeBarWidth) !== null && t !== void 0 ? t : 0,
      I = (r = e.activeBarBorderWidth) !== null && r !== void 0 ? r : u,
      R = (n = e.itemMarginInline) !== null && n !== void 0 ? n : e.marginXXS,
      j = new qe(C).setAlpha(0.65).toRgbString();
    return {
      dropdownWidth: 160,
      zIndexPopup: e.zIndexPopupBase + 50,
      radiusItem: e.borderRadiusLG,
      itemBorderRadius: e.borderRadiusLG,
      radiusSubMenuItem: e.borderRadiusSM,
      subMenuItemBorderRadius: e.borderRadiusSM,
      colorItemText: f,
      itemColor: f,
      colorItemTextHover: f,
      itemHoverColor: f,
      colorItemTextHoverHorizontal: o,
      horizontalItemHoverColor: o,
      colorGroupTitle: d,
      groupTitleColor: d,
      colorItemTextSelected: o,
      itemSelectedColor: o,
      colorItemTextSelectedHorizontal: o,
      horizontalItemSelectedColor: o,
      colorItemBg: s,
      itemBg: s,
      colorItemBgHover: g,
      itemHoverBg: g,
      colorItemBgActive: p,
      itemActiveBg: v,
      colorSubItemBg: b,
      subMenuItemBg: b,
      colorItemBgSelected: v,
      itemSelectedBg: v,
      colorItemBgSelectedHorizontal: "transparent",
      horizontalItemSelectedBg: "transparent",
      colorActiveBarWidth: 0,
      activeBarWidth: M,
      colorActiveBarHeight: c,
      activeBarHeight: c,
      colorActiveBarBorderSize: u,
      activeBarBorderWidth: I,
      colorItemTextDisabled: i,
      itemDisabledColor: i,
      colorDangerItemText: a,
      dangerItemColor: a,
      colorDangerItemTextHover: a,
      dangerItemHoverColor: a,
      colorDangerItemTextSelected: a,
      dangerItemSelectedColor: a,
      colorDangerItemBgActive: l,
      dangerItemActiveBg: l,
      colorDangerItemBgSelected: l,
      dangerItemSelectedBg: l,
      itemMarginInline: R,
      horizontalItemBorderRadius: 0,
      horizontalItemHoverBg: "transparent",
      itemHeight: m,
      groupTitleLineHeight: y,
      collapsedWidth: m * 2,
      popupBg: h,
      itemMarginBlock: O,
      itemPaddingInline: S,
      horizontalLineHeight: `${m * 1.15}px`,
      iconSize: $,
      iconMarginInlineEnd: x - $,
      collapsedIconSize: w,
      groupTitleFontSize: $,
      darkItemDisabledColor: new qe(C).setAlpha(0.25).toRgbString(),
      darkItemColor: j,
      darkDangerItemColor: a,
      darkItemBg: "#001529",
      darkPopupBg: "#001529",
      darkSubMenuItemBg: "#000c17",
      darkItemSelectedColor: C,
      darkItemSelectedBg: o,
      darkDangerItemSelectedBg: a,
      darkItemHoverBg: "transparent",
      darkGroupTitleColor: j,
      darkItemHoverColor: C,
      darkDangerItemHoverColor: P,
      darkDangerItemSelectedColor: C,
      darkDangerItemActiveBg: a,
      itemWidth: M ? `calc(100% + ${I}px)` : `calc(100% - ${R * 2}px)`,
    };
  },
  Yd = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e,
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    return $u(
      "Menu",
      (o) => {
        const {
            colorBgElevated: a,
            colorPrimary: i,
            colorTextLightSolid: l,
            controlHeightLG: f,
            fontSize: d,
            darkItemColor: s,
            darkDangerItemColor: b,
            darkItemBg: p,
            darkSubMenuItemBg: u,
            darkItemSelectedColor: c,
            darkItemSelectedBg: v,
            darkDangerItemSelectedBg: g,
            darkItemHoverBg: m,
            darkGroupTitleColor: y,
            darkItemHoverColor: h,
            darkItemDisabledColor: O,
            darkDangerItemHoverColor: S,
            darkDangerItemSelectedColor: $,
            darkDangerItemActiveBg: x,
            popupBg: w,
            darkPopupBg: C,
          } = o,
          P = o.calc(d).div(7).mul(5).equal(),
          M = fa(o, {
            menuArrowSize: P,
            menuHorizontalHeight: o.calc(f).mul(1.15).equal(),
            menuArrowOffset: o.calc(P).mul(0.25).equal(),
            menuPanelMaskInset: -7,
            menuSubMenuBg: a,
            calc: o.calc,
            popupBg: w,
          }),
          I = fa(M, {
            itemColor: s,
            itemHoverColor: h,
            groupTitleColor: y,
            itemSelectedColor: c,
            itemBg: p,
            popupBg: C,
            subMenuItemBg: u,
            itemActiveBg: "transparent",
            itemSelectedBg: v,
            activeBarHeight: 0,
            activeBarBorderWidth: 0,
            itemHoverBg: m,
            itemDisabledColor: O,
            dangerItemColor: b,
            dangerItemHoverColor: S,
            dangerItemSelectedColor: $,
            dangerItemActiveBg: x,
            dangerItemSelectedBg: g,
            menuSubMenuBg: u,
            horizontalItemSelectedColor: l,
            horizontalItemSelectedBg: i,
          });
        return [
          Xd(M),
          Wd(M),
          Vd(M),
          Pa(M, "light"),
          Pa(I, "dark"),
          Fd(M),
          Hu(M),
          ga(M, "slide-up"),
          ga(M, "slide-down"),
          Fu(M, "zoom-big"),
        ];
      },
      Gd,
      {
        deprecatedTokens: [
          ["colorGroupTitle", "groupTitleColor"],
          ["radiusItem", "itemBorderRadius"],
          ["radiusSubMenuItem", "subMenuItemBorderRadius"],
          ["colorItemText", "itemColor"],
          ["colorItemTextHover", "itemHoverColor"],
          ["colorItemTextHoverHorizontal", "horizontalItemHoverColor"],
          ["colorItemTextSelected", "itemSelectedColor"],
          ["colorItemTextSelectedHorizontal", "horizontalItemSelectedColor"],
          ["colorItemTextDisabled", "itemDisabledColor"],
          ["colorDangerItemText", "dangerItemColor"],
          ["colorDangerItemTextHover", "dangerItemHoverColor"],
          ["colorDangerItemTextSelected", "dangerItemSelectedColor"],
          ["colorDangerItemBgActive", "dangerItemActiveBg"],
          ["colorDangerItemBgSelected", "dangerItemSelectedBg"],
          ["colorItemBg", "itemBg"],
          ["colorItemBgHover", "itemHoverBg"],
          ["colorSubItemBg", "subMenuItemBg"],
          ["colorItemBgActive", "itemActiveBg"],
          ["colorItemBgSelectedHorizontal", "horizontalItemSelectedBg"],
          ["colorActiveBarWidth", "activeBarWidth"],
          ["colorActiveBarHeight", "activeBarHeight"],
          ["colorActiveBarBorderSize", "activeBarBorderWidth"],
          ["colorItemBgSelected", "itemSelectedBg"],
        ],
        injectStyle: r,
        unitless: { groupTitleLineHeight: !0 },
      }
    )(e, t);
  };
var Qd =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
        t.indexOf(n[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
          (r[n[o]] = e[n[o]]);
    return r;
  };
const Zd = _.exports.forwardRef((e, t) => {
    var r, n;
    const o = _.exports.useContext(Sa),
      a = o || {},
      {
        getPrefixCls: i,
        getPopupContainer: l,
        direction: f,
        menu: d,
      } = _.exports.useContext(Wo),
      s = i(),
      {
        prefixCls: b,
        className: p,
        style: u,
        theme: c = "light",
        expandIcon: v,
        _internalDisableMenuItemTitleTooltip: g,
        inlineCollapsed: m,
        siderCollapsed: y,
        items: h,
        children: O,
        rootClassName: S,
        mode: $,
        selectable: x,
        onClick: w,
        overflowedIndicatorPopupClassName: C,
      } = e,
      P = Qd(e, [
        "prefixCls",
        "className",
        "style",
        "theme",
        "expandIcon",
        "_internalDisableMenuItemTitleTooltip",
        "inlineCollapsed",
        "siderCollapsed",
        "items",
        "children",
        "rootClassName",
        "mode",
        "selectable",
        "onClick",
        "overflowedIndicatorPopupClassName",
      ]),
      M = Et(P, ["collapsedWidth"]),
      I = Nd(h) || O;
    (r = a.validator) === null || r === void 0 || r.call(a, { mode: $ });
    const R = ql(function () {
        var q;
        w == null || w.apply(void 0, arguments),
          (q = a.onClick) === null || q === void 0 || q.call(a);
      }),
      j = a.mode || $,
      D = x != null ? x : a.selectable,
      E = _.exports.useMemo(() => (y !== void 0 ? y : m), [m, y]),
      B = {
        horizontal: { motionName: `${s}-slide-up` },
        inline: Ku(s),
        other: { motionName: `${s}-zoom-big` },
      },
      W = i("menu", b || a.prefixCls),
      Z = Uu(W),
      [ee, G, J] = Yd(W, Z, !o),
      k = Ae(`${W}-${c}`, d == null ? void 0 : d.className, p);
    let z;
    if (typeof v == "function") z = v;
    else if (v === null || v === !1) z = null;
    else if (a.expandIcon === null || a.expandIcon === !1) z = null;
    else {
      const q = v != null ? v : a.expandIcon;
      z = Ho(q, {
        className: Ae(
          `${W}-submenu-expand-icon`,
          Ir(q)
            ? (n = q.props) === null || n === void 0
              ? void 0
              : n.className
            : ""
        ),
      });
    }
    const N = _.exports.useMemo(
      () => ({
        prefixCls: W,
        inlineCollapsed: E || !1,
        direction: f,
        firstLevel: !0,
        theme: c,
        mode: j,
        disableMenuItemTitleTooltip: g,
      }),
      [W, E, f, g, c]
    );
    return ee(
      T(Sa.Provider, {
        value: null,
        children: T(On.Provider, {
          value: N,
          children: T(jr, {
            ...Object.assign(
              {
                getPopupContainer: l,
                overflowedIndicator: T(jd, {}),
                overflowedIndicatorPopupClassName: Ae(W, `${W}-${c}`, C),
                mode: j,
                selectable: D,
                onClick: R,
              },
              M,
              {
                inlineCollapsed: E,
                style: Object.assign(
                  Object.assign({}, d == null ? void 0 : d.style),
                  u
                ),
                className: k,
                prefixCls: W,
                direction: f,
                defaultMotions: B,
                expandIcon: z,
                ref: t,
                rootClassName: Ae(S, G, a.rootClassName, J, Z),
              }
            ),
            children: I,
          }),
        }),
      })
    );
  }),
  Jd = Zd,
  kr = _.exports.forwardRef((e, t) => {
    const r = _.exports.useRef(null),
      n = _.exports.useContext(Zo);
    return (
      _.exports.useImperativeHandle(t, () => ({
        menu: r.current,
        focus: (o) => {
          var a;
          (a = r.current) === null || a === void 0 || a.focus(o);
        },
      })),
      T(Jd, { ...Object.assign({ ref: r }, e, n) })
    );
  });
kr.Item = rs;
kr.SubMenu = ns;
kr.Divider = ts;
kr.ItemGroup = Rn;
const Ra = kr;
var nt = {},
  U = { exports: {} };
(function (e) {
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(U);
var Vn = { exports: {} },
  Xn = { exports: {} },
  Gn = { exports: {} },
  Ia;
function os() {
  return (
    Ia ||
      ((Ia = 1),
      (function (e) {
        function t(r, n) {
          (n == null || n > r.length) && (n = r.length);
          for (var o = 0, a = new Array(n); o < n; o++) a[o] = r[o];
          return a;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Gn)),
    Gn.exports
  );
}
var Ta;
function ef() {
  return (
    Ta ||
      ((Ta = 1),
      (function (e) {
        var t = os();
        function r(n) {
          if (Array.isArray(n)) return t(n);
        }
        (e.exports = r),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Xn)),
    Xn.exports
  );
}
var Yn = { exports: {} },
  ja;
function as() {
  return (
    ja ||
      ((ja = 1),
      (function (e) {
        function t(r) {
          if (
            (typeof Symbol < "u" && r[Symbol.iterator] != null) ||
            r["@@iterator"] != null
          )
            return Array.from(r);
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Yn)),
    Yn.exports
  );
}
var Qn = { exports: {} },
  ka;
function is() {
  return (
    ka ||
      ((ka = 1),
      (function (e) {
        var t = os();
        function r(n, o) {
          if (!!n) {
            if (typeof n == "string") return t(n, o);
            var a = Object.prototype.toString.call(n).slice(8, -1);
            if (
              (a === "Object" && n.constructor && (a = n.constructor.name),
              a === "Map" || a === "Set")
            )
              return Array.from(n);
            if (
              a === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return t(n, o);
          }
        }
        (e.exports = r),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Qn)),
    Qn.exports
  );
}
var Zn = { exports: {} },
  qa;
function tf() {
  return (
    qa ||
      ((qa = 1),
      (function (e) {
        function t() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Zn)),
    Zn.exports
  );
}
var Da;
function ls() {
  return (
    Da ||
      ((Da = 1),
      (function (e) {
        var t = ef(),
          r = as(),
          n = is(),
          o = tf();
        function a(i) {
          return t(i) || r(i) || n(i) || o();
        }
        (e.exports = a),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Vn)),
    Vn.exports
  );
}
var Gr = {},
  Jn = { exports: {} },
  eo = { exports: {} },
  to = { exports: {} },
  ro = { exports: {} },
  Aa;
function Nt() {
  return (
    Aa ||
      ((Aa = 1),
      (function (e) {
        function t(r) {
          return (
            (e.exports = t =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n &&
                      typeof Symbol == "function" &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? "symbol"
                      : typeof n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(ro)),
    ro.exports
  );
}
var no = { exports: {} },
  Ea;
function rf() {
  return (
    Ea ||
      ((Ea = 1),
      (function (e) {
        var t = Nt().default;
        function r(n, o) {
          if (t(n) !== "object" || n === null) return n;
          var a = n[Symbol.toPrimitive];
          if (a !== void 0) {
            var i = a.call(n, o || "default");
            if (t(i) !== "object") return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (o === "string" ? String : Number)(n);
        }
        (e.exports = r),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(no)),
    no.exports
  );
}
var Ba;
function ss() {
  return (
    Ba ||
      ((Ba = 1),
      (function (e) {
        var t = Nt().default,
          r = rf();
        function n(o) {
          var a = r(o, "string");
          return t(a) === "symbol" ? a : String(a);
        }
        (e.exports = n),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(to)),
    to.exports
  );
}
var Na;
function nf() {
  return (
    Na ||
      ((Na = 1),
      (function (e) {
        var t = ss();
        function r(n, o, a) {
          return (
            (o = t(o)),
            o in n
              ? Object.defineProperty(n, o, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[o] = a),
            n
          );
        }
        (e.exports = r),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(eo)),
    eo.exports
  );
}
var za;
function us() {
  return (
    za ||
      ((za = 1),
      (function (e) {
        var t = nf();
        function r(o, a) {
          var i = Object.keys(o);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(o);
            a &&
              (l = l.filter(function (f) {
                return Object.getOwnPropertyDescriptor(o, f).enumerable;
              })),
              i.push.apply(i, l);
          }
          return i;
        }
        function n(o) {
          for (var a = 1; a < arguments.length; a++) {
            var i = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? r(Object(i), !0).forEach(function (l) {
                  t(o, l, i[l]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
              : r(Object(i)).forEach(function (l) {
                  Object.defineProperty(
                    o,
                    l,
                    Object.getOwnPropertyDescriptor(i, l)
                  );
                });
          }
          return o;
        }
        (e.exports = n),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Jn)),
    Jn.exports
  );
}
var La;
function cs() {
  if (La) return Gr;
  La = 1;
  var e = U.exports.default;
  Object.defineProperty(Gr, "__esModule", { value: !0 }), (Gr.default = r);
  var t = e(us());
  function r(n, o) {
    var a = (0, t.default)({}, n);
    return (
      Array.isArray(o) &&
        o.forEach(function (i) {
          delete a[i];
        }),
      a
    );
  }
  return Gr;
}
var oo = {};
const lt = Pn(rc);
var ao = {},
  Wa;
function Jo() {
  return (
    Wa ||
      ((Wa = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
        var t = _.exports,
          r = (0, t.createContext)({}),
          n = r;
      })(ao)),
    ao
  );
}
var Yr = {},
  io = { exports: {} },
  Ha;
function of() {
  return (
    Ha ||
      ((Ha = 1),
      (function (e) {
        var t = Nt().default;
        function r(o) {
          if (typeof WeakMap != "function") return null;
          var a = new WeakMap(),
            i = new WeakMap();
          return (r = function (f) {
            return f ? i : a;
          })(o);
        }
        function n(o, a) {
          if (!a && o && o.__esModule) return o;
          if (o === null || (t(o) !== "object" && typeof o != "function"))
            return { default: o };
          var i = r(a);
          if (i && i.has(o)) return i.get(o);
          var l = {},
            f = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var d in o)
            if (d !== "default" && Object.prototype.hasOwnProperty.call(o, d)) {
              var s = f ? Object.getOwnPropertyDescriptor(o, d) : null;
              s && (s.get || s.set)
                ? Object.defineProperty(l, d, s)
                : (l[d] = o[d]);
            }
          return (l.default = o), i && i.set(o, l), l;
        }
        (e.exports = n),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(io)),
    io.exports
  );
}
var Fa;
function ds() {
  if (Fa) return Yr;
  Fa = 1;
  var e = of().default;
  Object.defineProperty(Yr, "__esModule", { value: !0 }), (Yr.default = r);
  var t = e(_.exports);
  function r(n, o, a) {
    var i = t.useRef({});
    return (
      (!("value" in i.current) || a(i.current.condition, o)) &&
        ((i.current.value = n()), (i.current.condition = o)),
      i.current.value
    );
  }
  return Yr;
}
var Xt = {},
  lo = { exports: {} },
  so = { exports: {} },
  Ka;
function af() {
  return (
    Ka ||
      ((Ka = 1),
      (function (e) {
        function t(r) {
          if (Array.isArray(r)) return r;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(so)),
    so.exports
  );
}
var uo = { exports: {} },
  Ua;
function lf() {
  return (
    Ua ||
      ((Ua = 1),
      (function (e) {
        function t() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(uo)),
    uo.exports
  );
}
var Va;
function sf() {
  return (
    Va ||
      ((Va = 1),
      (function (e) {
        var t = af(),
          r = as(),
          n = is(),
          o = lf();
        function a(i) {
          return t(i) || r(i) || n(i) || o();
        }
        (e.exports = a),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(lo)),
    lo.exports
  );
}
var Qr = {},
  Xa;
function uf() {
  if (Xa) return Qr;
  (Xa = 1),
    Object.defineProperty(Qr, "__esModule", { value: !0 }),
    (Qr.default = e);
  function e(t, r) {
    for (var n = t, o = 0; o < r.length; o += 1) {
      if (n == null) return;
      n = n[r[o]];
    }
    return n;
  }
  return Qr;
}
var Ga;
function cf() {
  if (Ga) return Xt;
  Ga = 1;
  var e = U.exports.default;
  Object.defineProperty(Xt, "__esModule", { value: !0 }),
    (Xt.default = l),
    (Xt.merge = b);
  var t = e(Nt()),
    r = e(us()),
    n = e(ls()),
    o = e(sf()),
    a = e(uf());
  function i(p, u, c, v) {
    if (!u.length) return c;
    var g = (0, o.default)(u),
      m = g[0],
      y = g.slice(1),
      h;
    return (
      !p && typeof m == "number"
        ? (h = [])
        : Array.isArray(p)
        ? (h = (0, n.default)(p))
        : (h = (0, r.default)({}, p)),
      v && c === void 0 && y.length === 1
        ? delete h[m][y[0]]
        : (h[m] = i(h[m], y, c, v)),
      h
    );
  }
  function l(p, u, c) {
    var v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    return u.length && v && c === void 0 && !(0, a.default)(p, u.slice(0, -1))
      ? p
      : i(p, u, c, v);
  }
  function f(p) {
    return (
      (0, t.default)(p) === "object" &&
      p !== null &&
      Object.getPrototypeOf(p) === Object.prototype
    );
  }
  function d(p) {
    return Array.isArray(p) ? [] : {};
  }
  var s = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
  function b() {
    for (var p = arguments.length, u = new Array(p), c = 0; c < p; c++)
      u[c] = arguments[c];
    var v = d(u[0]);
    return (
      u.forEach(function (g) {
        function m(y, h) {
          var O = new Set(h),
            S = (0, a.default)(g, y),
            $ = Array.isArray(S);
          if ($ || f(S)) {
            if (!O.has(S)) {
              O.add(S);
              var x = (0, a.default)(v, y);
              $
                ? (v = l(v, y, []))
                : (!x || (0, t.default)(x) !== "object") && (v = l(v, y, d(S))),
                s(S).forEach(function (w) {
                  m([].concat((0, n.default)(y), [w]), O);
                });
            }
          } else v = l(v, y, S);
        }
        m([]);
      }),
      v
    );
  }
  return Xt;
}
var De = {},
  Ie = {},
  Ya;
function ea() {
  if (Ya) return Ie;
  (Ya = 1),
    Object.defineProperty(Ie, "__esModule", { value: !0 }),
    (Ie.call = a),
    (Ie.default = void 0),
    (Ie.note = n),
    (Ie.noteOnce = l),
    (Ie.preMessage = void 0),
    (Ie.resetWarned = o),
    (Ie.warning = r),
    (Ie.warningOnce = i);
  var e = {},
    t = (Ie.preMessage = function (d) {});
  function r(f, d) {}
  function n(f, d) {}
  function o() {
    e = {};
  }
  function a(f, d, s) {
    !d && !e[s] && (f(!1, s), (e[s] = !0));
  }
  function i(f, d) {
    a(r, f, d);
  }
  function l(f, d) {
    a(n, f, d);
  }
  return (
    (i.preMessage = t),
    (i.resetWarned = o),
    (i.noteOnce = l),
    (Ie.default = i),
    Ie
  );
}
var Qa;
function qr() {
  if (Qa) return De;
  (Qa = 1),
    Object.defineProperty(De, "__esModule", { value: !0 }),
    (De.devUseWarning = De.default = De.WarningContext = void 0),
    (De.noop = o),
    (De.resetWarned = a);
  var e = n(_.exports),
    t = n(ea());
  function r(l) {
    if (typeof WeakMap != "function") return null;
    var f = new WeakMap(),
      d = new WeakMap();
    return (r = function (s) {
      return s ? d : f;
    })(l);
  }
  function n(l, f) {
    if (!f && l && l.__esModule) return l;
    if (l === null || (typeof l != "object" && typeof l != "function"))
      return { default: l };
    var d = r(f);
    if (d && d.has(l)) return d.get(l);
    var s = { __proto__: null },
      b = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var p in l)
      if (p !== "default" && Object.prototype.hasOwnProperty.call(l, p)) {
        var u = b ? Object.getOwnPropertyDescriptor(l, p) : null;
        u && (u.get || u.set) ? Object.defineProperty(s, p, u) : (s[p] = l[p]);
      }
    return (s.default = l), d && d.set(l, s), s;
  }
  function o() {}
  function a() {
    (0, t.resetWarned)();
  }
  let i = o;
  return (
    (De.WarningContext = e.createContext({})),
    (De.devUseWarning = () => {
      const l = () => {};
      return (l.deprecated = o), l;
    }),
    (De.default = i),
    De
  );
}
var Gt = {},
  Za;
function df() {
  if (Za) return Gt;
  (Za = 1),
    Object.defineProperty(Gt, "__esModule", { value: !0 }),
    (Gt.default = void 0);
  var e = _.exports;
  return (Gt.default = (0, e.createContext)(void 0)), Gt;
}
var co = {},
  Yt = {},
  Qt = {},
  Zt = {},
  Ja;
function ff() {
  if (Ja) return Zt;
  (Ja = 1),
    Object.defineProperty(Zt, "__esModule", { value: !0 }),
    (Zt.default = void 0);
  var e = {
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "Page",
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages",
    page_size: "Page Size",
  };
  return (Zt.default = e), Zt;
}
var Jt = {},
  er = {},
  tr = {},
  ei;
function pf() {
  if (ei) return tr;
  (ei = 1),
    Object.defineProperty(tr, "__esModule", { value: !0 }),
    (tr.default = void 0);
  var e = {
    locale: "en_US",
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "OK",
    clear: "Clear",
    month: "Month",
    year: "Year",
    timeSelect: "select time",
    dateSelect: "select date",
    weekSelect: "Choose a week",
    monthSelect: "Choose a month",
    yearSelect: "Choose a year",
    decadeSelect: "Choose a decade",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthBeforeYear: !0,
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Last year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century",
  };
  return (tr.default = e), tr;
}
var rr = {},
  ti;
function fs() {
  if (ti) return rr;
  (ti = 1),
    Object.defineProperty(rr, "__esModule", { value: !0 }),
    (rr.default = void 0);
  const e = {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"],
  };
  return (rr.default = e), rr;
}
var ri;
function ps() {
  if (ri) return er;
  ri = 1;
  var e = U.exports;
  Object.defineProperty(er, "__esModule", { value: !0 }), (er.default = void 0);
  var t = e(pf()),
    r = e(fs());
  const n = {
    lang: Object.assign(
      {
        placeholder: "Select date",
        yearPlaceholder: "Select year",
        quarterPlaceholder: "Select quarter",
        monthPlaceholder: "Select month",
        weekPlaceholder: "Select week",
        rangePlaceholder: ["Start date", "End date"],
        rangeYearPlaceholder: ["Start year", "End year"],
        rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
        rangeMonthPlaceholder: ["Start month", "End month"],
        rangeWeekPlaceholder: ["Start week", "End week"],
      },
      t.default
    ),
    timePickerLocale: Object.assign({}, r.default),
  };
  return (er.default = n), er;
}
var ni;
function vf() {
  if (ni) return Jt;
  ni = 1;
  var e = U.exports;
  Object.defineProperty(Jt, "__esModule", { value: !0 }), (Jt.default = void 0);
  var t = e(ps());
  return (Jt.default = t.default), Jt;
}
var oi;
function ta() {
  if (oi) return Qt;
  oi = 1;
  var e = U.exports;
  Object.defineProperty(Qt, "__esModule", { value: !0 }), (Qt.default = void 0);
  var t = e(ff()),
    r = e(vf()),
    n = e(ps()),
    o = e(fs());
  const a = "${label} is not a valid ${type}",
    i = {
      locale: "en",
      Pagination: t.default,
      DatePicker: n.default,
      TimePicker: o.default,
      Calendar: r.default,
      global: { placeholder: "Please select" },
      Table: {
        filterTitle: "Filter menu",
        filterConfirm: "OK",
        filterReset: "Reset",
        filterEmptyText: "No filters",
        filterCheckall: "Select all items",
        filterSearchPlaceholder: "Search in filters",
        emptyText: "No data",
        selectAll: "Select current page",
        selectInvert: "Invert current page",
        selectNone: "Clear all data",
        selectionAll: "Select all data",
        sortTitle: "Sort",
        expand: "Expand row",
        collapse: "Collapse row",
        triggerDesc: "Click to sort descending",
        triggerAsc: "Click to sort ascending",
        cancelSort: "Click to cancel sorting",
      },
      Tour: { Next: "Next", Previous: "Previous", Finish: "Finish" },
      Modal: { okText: "OK", cancelText: "Cancel", justOkText: "OK" },
      Popconfirm: { okText: "OK", cancelText: "Cancel" },
      Transfer: {
        titles: ["", ""],
        searchPlaceholder: "Search here",
        itemUnit: "item",
        itemsUnit: "items",
        remove: "Remove",
        selectCurrent: "Select current page",
        removeCurrent: "Remove current page",
        selectAll: "Select all data",
        removeAll: "Remove all data",
        selectInvert: "Invert current page",
      },
      Upload: {
        uploading: "Uploading...",
        removeFile: "Remove file",
        uploadError: "Upload error",
        previewFile: "Preview file",
        downloadFile: "Download file",
      },
      Empty: { description: "No data" },
      Icon: { icon: "icon" },
      Text: { edit: "Edit", copy: "Copy", copied: "Copied", expand: "Expand" },
      PageHeader: { back: "Back" },
      Form: {
        optional: "(optional)",
        defaultValidateMessages: {
          default: "Field validation error for ${label}",
          required: "Please enter ${label}",
          enum: "${label} must be one of [${enum}]",
          whitespace: "${label} cannot be a blank character",
          date: {
            format: "${label} date format is invalid",
            parse: "${label} cannot be converted to a date",
            invalid: "${label} is an invalid date",
          },
          types: {
            string: a,
            method: a,
            array: a,
            object: a,
            number: a,
            date: a,
            boolean: a,
            integer: a,
            float: a,
            regexp: a,
            email: a,
            url: a,
            hex: a,
          },
          string: {
            len: "${label} must be ${len} characters",
            min: "${label} must be at least ${min} characters",
            max: "${label} must be up to ${max} characters",
            range: "${label} must be between ${min}-${max} characters",
          },
          number: {
            len: "${label} must be equal to ${len}",
            min: "${label} must be minimum ${min}",
            max: "${label} must be maximum ${max}",
            range: "${label} must be between ${min}-${max}",
          },
          array: {
            len: "Must be ${len} ${label}",
            min: "At least ${min} ${label}",
            max: "At most ${max} ${label}",
            range: "The amount of ${label} must be between ${min}-${max}",
          },
          pattern: {
            mismatch: "${label} does not match the pattern ${pattern}",
          },
        },
      },
      Image: { preview: "Preview" },
      QRCode: {
        expired: "QR code expired",
        refresh: "Refresh",
        scanned: "Scanned",
      },
      ColorPicker: { presetEmpty: "Empty" },
    };
  return (Qt.default = i), Qt;
}
var ai;
function gf() {
  if (ai) return Yt;
  ai = 1;
  var e = U.exports;
  Object.defineProperty(Yt, "__esModule", { value: !0 }),
    (Yt.changeConfirmLocale = a),
    (Yt.getConfirmLocale = i);
  var t = e(ta());
  let r = Object.assign({}, t.default.Modal),
    n = [];
  const o = () =>
    n.reduce((l, f) => Object.assign(Object.assign({}, l), f), t.default.Modal);
  function a(l) {
    if (l) {
      const f = Object.assign({}, l);
      return (
        n.push(f),
        (r = o()),
        () => {
          (n = n.filter((d) => d !== f)), (r = o());
        }
      );
    }
    r = Object.assign({}, t.default.Modal);
  }
  function i() {
    return r;
  }
  return Yt;
}
var nr = {},
  ii;
function ra() {
  if (ii) return nr;
  (ii = 1),
    Object.defineProperty(nr, "__esModule", { value: !0 }),
    (nr.default = void 0);
  var e = _.exports;
  const t = (0, e.createContext)(void 0);
  return (nr.default = t), nr;
}
var or = {},
  li;
function mf() {
  if (li) return or;
  li = 1;
  var e = U.exports;
  Object.defineProperty(or, "__esModule", { value: !0 }), (or.default = void 0);
  var t = a(_.exports),
    r = e(ra()),
    n = e(ta());
  function o(l) {
    if (typeof WeakMap != "function") return null;
    var f = new WeakMap(),
      d = new WeakMap();
    return (o = function (s) {
      return s ? d : f;
    })(l);
  }
  function a(l, f) {
    if (!f && l && l.__esModule) return l;
    if (l === null || (typeof l != "object" && typeof l != "function"))
      return { default: l };
    var d = o(f);
    if (d && d.has(l)) return d.get(l);
    var s = { __proto__: null },
      b = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var p in l)
      if (p !== "default" && Object.prototype.hasOwnProperty.call(l, p)) {
        var u = b ? Object.getOwnPropertyDescriptor(l, p) : null;
        u && (u.get || u.set) ? Object.defineProperty(s, p, u) : (s[p] = l[p]);
      }
    return (s.default = l), d && d.set(l, s), s;
  }
  const i = (l, f) => {
    const d = t.useContext(r.default),
      s = t.useMemo(() => {
        var p;
        const u = f || n.default[l],
          c = (p = d == null ? void 0 : d[l]) !== null && p !== void 0 ? p : {};
        return Object.assign(
          Object.assign({}, typeof u == "function" ? u() : u),
          c || {}
        );
      }, [l, f, d]),
      b = t.useMemo(() => {
        const p = d == null ? void 0 : d.locale;
        return (d == null ? void 0 : d.exist) && !p ? n.default.locale : p;
      }, [d]);
    return [s, b];
  };
  return (or.default = i), or;
}
var si;
function hf() {
  return (
    si ||
      ((si = 1),
      (function (e) {
        var t = U.exports;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = e.ANT_MARK = void 0),
          Object.defineProperty(e, "useLocale", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          });
        var r = l(_.exports);
        qr();
        var n = gf(),
          o = t(ra()),
          a = t(mf());
        function i(d) {
          if (typeof WeakMap != "function") return null;
          var s = new WeakMap(),
            b = new WeakMap();
          return (i = function (p) {
            return p ? b : s;
          })(d);
        }
        function l(d, s) {
          if (!s && d && d.__esModule) return d;
          if (d === null || (typeof d != "object" && typeof d != "function"))
            return { default: d };
          var b = i(s);
          if (b && b.has(d)) return b.get(d);
          var p = { __proto__: null },
            u = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var c in d)
            if (c !== "default" && Object.prototype.hasOwnProperty.call(d, c)) {
              var v = u ? Object.getOwnPropertyDescriptor(d, c) : null;
              v && (v.get || v.set)
                ? Object.defineProperty(p, c, v)
                : (p[c] = d[c]);
            }
          return (p.default = d), b && b.set(d, p), p;
        }
        e.ANT_MARK = "internalMark";
        const f = (d) => {
          const { locale: s = {}, children: b, _ANT_MARK__: p } = d;
          r.useEffect(() => (0, n.changeConfirmLocale)(s && s.Modal), [s]);
          const u = r.useMemo(
            () => Object.assign(Object.assign({}, s), { exist: !0 }),
            [s]
          );
          return r.createElement(o.default.Provider, { value: u }, b);
        };
        e.default = f;
      })(co)),
    co
  );
}
var tt = {},
  Zr = {};
const Dr = Pn(Iu);
var ar = {},
  ui;
function bf() {
  if (ui) return ar;
  (ui = 1),
    Object.defineProperty(ar, "__esModule", { value: !0 }),
    (ar.default = void 0);
  const e = (t) => {
    const { controlHeight: r } = t;
    return {
      controlHeightSM: r * 0.75,
      controlHeightXS: r * 0.5,
      controlHeightLG: r * 1.25,
    };
  };
  return (ar.default = e), ar;
}
var Jr = {},
  ci;
function yf() {
  if (ci) return Jr;
  (ci = 1),
    Object.defineProperty(Jr, "__esModule", { value: !0 }),
    (Jr.default = e);
  function e(t) {
    const { sizeUnit: r, sizeStep: n } = t;
    return {
      sizeXXL: r * (n + 8),
      sizeXL: r * (n + 4),
      sizeLG: r * (n + 2),
      sizeMD: r * (n + 1),
      sizeMS: r * n,
      size: r * n,
      sizeSM: r * (n - 1),
      sizeXS: r * (n - 2),
      sizeXXS: r * (n - 3),
    };
  }
  return Jr;
}
var Ct = {},
  di;
function Ar() {
  if (di) return Ct;
  (di = 1),
    Object.defineProperty(Ct, "__esModule", { value: !0 }),
    (Ct.defaultPresetColors = Ct.default = void 0);
  const e = (Ct.defaultPresetColors = {
      blue: "#1677ff",
      purple: "#722ED1",
      cyan: "#13C2C2",
      green: "#52C41A",
      magenta: "#EB2F96",
      pink: "#eb2f96",
      red: "#F5222D",
      orange: "#FA8C16",
      yellow: "#FADB14",
      volcano: "#FA541C",
      geekblue: "#2F54EB",
      gold: "#FAAD14",
      lime: "#A0D911",
    }),
    t = Object.assign(Object.assign({}, e), {
      colorPrimary: "#1677ff",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorInfo: "#1677ff",
      colorLink: "",
      colorTextBase: "",
      colorBgBase: "",
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
      fontFamilyCode:
        "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
      fontSize: 14,
      lineWidth: 1,
      lineType: "solid",
      motionUnit: 0.1,
      motionBase: 0,
      motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
      motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
      motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
      motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
      motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
      motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
      borderRadius: 6,
      sizeUnit: 4,
      sizeStep: 4,
      sizePopupArrow: 16,
      controlHeight: 32,
      zIndexBase: 0,
      zIndexPopupBase: 1e3,
      opacityImage: 1,
      wireframe: !1,
      motion: !0,
    });
  return (Ct.default = t), Ct;
}
var en = {};
const Er = Pn(dc);
var fi;
function Cf() {
  if (fi) return en;
  (fi = 1),
    Object.defineProperty(en, "__esModule", { value: !0 }),
    (en.default = t);
  var e = Er;
  function t(r, n) {
    let { generateColorPalettes: o, generateNeutralColorPalettes: a } = n;
    const {
        colorSuccess: i,
        colorWarning: l,
        colorError: f,
        colorInfo: d,
        colorPrimary: s,
        colorBgBase: b,
        colorTextBase: p,
      } = r,
      u = o(s),
      c = o(i),
      v = o(l),
      g = o(f),
      m = o(d),
      y = a(b, p),
      h = r.colorLink || r.colorInfo,
      O = o(h);
    return Object.assign(Object.assign({}, y), {
      colorPrimaryBg: u[1],
      colorPrimaryBgHover: u[2],
      colorPrimaryBorder: u[3],
      colorPrimaryBorderHover: u[4],
      colorPrimaryHover: u[5],
      colorPrimary: u[6],
      colorPrimaryActive: u[7],
      colorPrimaryTextHover: u[8],
      colorPrimaryText: u[9],
      colorPrimaryTextActive: u[10],
      colorSuccessBg: c[1],
      colorSuccessBgHover: c[2],
      colorSuccessBorder: c[3],
      colorSuccessBorderHover: c[4],
      colorSuccessHover: c[4],
      colorSuccess: c[6],
      colorSuccessActive: c[7],
      colorSuccessTextHover: c[8],
      colorSuccessText: c[9],
      colorSuccessTextActive: c[10],
      colorErrorBg: g[1],
      colorErrorBgHover: g[2],
      colorErrorBorder: g[3],
      colorErrorBorderHover: g[4],
      colorErrorHover: g[5],
      colorError: g[6],
      colorErrorActive: g[7],
      colorErrorTextHover: g[8],
      colorErrorText: g[9],
      colorErrorTextActive: g[10],
      colorWarningBg: v[1],
      colorWarningBgHover: v[2],
      colorWarningBorder: v[3],
      colorWarningBorderHover: v[4],
      colorWarningHover: v[4],
      colorWarning: v[6],
      colorWarningActive: v[7],
      colorWarningTextHover: v[8],
      colorWarningText: v[9],
      colorWarningTextActive: v[10],
      colorInfoBg: m[1],
      colorInfoBgHover: m[2],
      colorInfoBorder: m[3],
      colorInfoBorderHover: m[4],
      colorInfoHover: m[4],
      colorInfo: m[6],
      colorInfoActive: m[7],
      colorInfoTextHover: m[8],
      colorInfoText: m[9],
      colorInfoTextActive: m[10],
      colorLinkHover: O[4],
      colorLink: O[6],
      colorLinkActive: O[7],
      colorBgMask: new e.TinyColor("#000").setAlpha(0.45).toRgbString(),
      colorWhite: "#fff",
    });
  }
  return en;
}
var tn = {},
  ir = {},
  pi;
function xf() {
  if (pi) return ir;
  (pi = 1),
    Object.defineProperty(ir, "__esModule", { value: !0 }),
    (ir.default = void 0);
  const e = (t) => {
    let r = t,
      n = t,
      o = t,
      a = t;
    return (
      t < 6 && t >= 5
        ? (r = t + 1)
        : t < 16 && t >= 6
        ? (r = t + 2)
        : t >= 16 && (r = 16),
      t < 7 && t >= 5
        ? (n = 4)
        : t < 8 && t >= 7
        ? (n = 5)
        : t < 14 && t >= 8
        ? (n = 6)
        : t < 16 && t >= 14
        ? (n = 7)
        : t >= 16 && (n = 8),
      t < 6 && t >= 2 ? (o = 1) : t >= 6 && (o = 2),
      t > 4 && t < 8 ? (a = 4) : t >= 8 && (a = 6),
      {
        borderRadius: t,
        borderRadiusXS: o,
        borderRadiusSM: n,
        borderRadiusLG: r,
        borderRadiusOuter: a,
      }
    );
  };
  return (ir.default = e), ir;
}
var vi;
function _f() {
  if (vi) return tn;
  vi = 1;
  var e = U.exports;
  Object.defineProperty(tn, "__esModule", { value: !0 }), (tn.default = r);
  var t = e(xf());
  function r(n) {
    const { motionUnit: o, motionBase: a, borderRadius: i, lineWidth: l } = n;
    return Object.assign(
      {
        motionDurationFast: `${(a + o).toFixed(1)}s`,
        motionDurationMid: `${(a + o * 2).toFixed(1)}s`,
        motionDurationSlow: `${(a + o * 3).toFixed(1)}s`,
        lineWidthBold: l + 1,
      },
      (0, t.default)(i)
    );
  }
  return tn;
}
var xt = {},
  _t = {},
  gi;
function Sf() {
  if (gi) return _t;
  (gi = 1),
    Object.defineProperty(_t, "__esModule", { value: !0 }),
    (_t.getSolidColor = _t.getAlphaColor = void 0);
  var e = Er;
  const t = (n, o) => new e.TinyColor(n).setAlpha(o).toRgbString();
  _t.getAlphaColor = t;
  const r = (n, o) => new e.TinyColor(n).darken(o).toHexString();
  return (_t.getSolidColor = r), _t;
}
var mi;
function Of() {
  if (mi) return xt;
  (mi = 1),
    Object.defineProperty(xt, "__esModule", { value: !0 }),
    (xt.generateNeutralColorPalettes = xt.generateColorPalettes = void 0);
  var e = Dr,
    t = Sf();
  const r = (o) => {
    const a = (0, e.generate)(o);
    return {
      1: a[0],
      2: a[1],
      3: a[2],
      4: a[3],
      5: a[4],
      6: a[5],
      7: a[6],
      8: a[4],
      9: a[5],
      10: a[6],
    };
  };
  xt.generateColorPalettes = r;
  const n = (o, a) => {
    const i = o || "#fff",
      l = a || "#000";
    return {
      colorBgBase: i,
      colorTextBase: l,
      colorText: (0, t.getAlphaColor)(l, 0.88),
      colorTextSecondary: (0, t.getAlphaColor)(l, 0.65),
      colorTextTertiary: (0, t.getAlphaColor)(l, 0.45),
      colorTextQuaternary: (0, t.getAlphaColor)(l, 0.25),
      colorFill: (0, t.getAlphaColor)(l, 0.15),
      colorFillSecondary: (0, t.getAlphaColor)(l, 0.06),
      colorFillTertiary: (0, t.getAlphaColor)(l, 0.04),
      colorFillQuaternary: (0, t.getAlphaColor)(l, 0.02),
      colorBgLayout: (0, t.getSolidColor)(i, 4),
      colorBgContainer: (0, t.getSolidColor)(i, 0),
      colorBgElevated: (0, t.getSolidColor)(i, 0),
      colorBgSpotlight: (0, t.getAlphaColor)(l, 0.85),
      colorBgBlur: "transparent",
      colorBorder: (0, t.getSolidColor)(i, 15),
      colorBorderSecondary: (0, t.getSolidColor)(i, 6),
    };
  };
  return (xt.generateNeutralColorPalettes = n), xt;
}
var lr = {},
  sr = {},
  hi;
function vs() {
  if (hi) return sr;
  (hi = 1),
    Object.defineProperty(sr, "__esModule", { value: !0 }),
    (sr.default = t),
    (sr.getLineHeight = e);
  function e(r) {
    return (r + 8) / r;
  }
  function t(r) {
    const n = new Array(10).fill(null).map((o, a) => {
      const i = a - 1,
        l = r * Math.pow(2.71828, i / 5),
        f = a > 1 ? Math.floor(l) : Math.ceil(l);
      return Math.floor(f / 2) * 2;
    });
    return (n[1] = r), n.map((o) => ({ size: o, lineHeight: e(o) }));
  }
  return sr;
}
var bi;
function Pf() {
  if (bi) return lr;
  bi = 1;
  var e = U.exports;
  Object.defineProperty(lr, "__esModule", { value: !0 }), (lr.default = void 0);
  var t = e(vs());
  const r = (n) => {
    const o = (0, t.default)(n),
      a = o.map((u) => u.size),
      i = o.map((u) => u.lineHeight),
      l = a[1],
      f = a[0],
      d = a[2],
      s = i[1],
      b = i[0],
      p = i[2];
    return {
      fontSizeSM: f,
      fontSize: l,
      fontSizeLG: d,
      fontSizeXL: a[3],
      fontSizeHeading1: a[6],
      fontSizeHeading2: a[5],
      fontSizeHeading3: a[4],
      fontSizeHeading4: a[3],
      fontSizeHeading5: a[2],
      lineHeight: s,
      lineHeightLG: p,
      lineHeightSM: b,
      fontHeight: Math.round(s * l),
      fontHeightLG: Math.round(p * d),
      fontHeightSM: Math.round(b * f),
      lineHeightHeading1: i[6],
      lineHeightHeading2: i[5],
      lineHeightHeading3: i[4],
      lineHeightHeading4: i[3],
      lineHeightHeading5: i[2],
    };
  };
  return (lr.default = r), lr;
}
var yi;
function wf() {
  if (yi) return Zr;
  yi = 1;
  var e = U.exports;
  Object.defineProperty(Zr, "__esModule", { value: !0 }), (Zr.default = d);
  var t = Dr,
    r = e(bf()),
    n = e(yf()),
    o = Ar(),
    a = e(Cf()),
    i = e(_f()),
    l = Of(),
    f = e(Pf());
  function d(s) {
    const b = Object.keys(o.defaultPresetColors)
      .map((p) => {
        const u = (0, t.generate)(s[p]);
        return new Array(10)
          .fill(1)
          .reduce(
            (c, v, g) => (
              (c[`${p}-${g + 1}`] = u[g]), (c[`${p}${g + 1}`] = u[g]), c
            ),
            {}
          );
      })
      .reduce((p, u) => ((p = Object.assign(Object.assign({}, p), u)), p), {});
    return Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, s), b),
              (0, a.default)(s, {
                generateColorPalettes: l.generateColorPalettes,
                generateNeutralColorPalettes: l.generateNeutralColorPalettes,
              })
            ),
            (0, f.default)(s.fontSize)
          ),
          (0, n.default)(s)
        ),
        (0, r.default)(s)
      ),
      (0, i.default)(s)
    );
  }
  return Zr;
}
var Ci;
function na() {
  if (Ci) return tt;
  Ci = 1;
  var e = U.exports;
  Object.defineProperty(tt, "__esModule", { value: !0 }),
    (tt.defaultTheme = tt.defaultConfig = tt.DesignTokenContext = void 0);
  var t = e(_.exports),
    r = lt,
    n = e(wf()),
    o = e(Ar());
  tt.defaultTheme = (0, r.createTheme)(n.default);
  const a = (tt.defaultConfig = {
    token: o.default,
    override: { override: o.default },
    hashed: !0,
  });
  return (tt.DesignTokenContext = t.default.createContext(a)), tt;
}
var rt = {},
  xi;
function gs() {
  if (xi) return rt;
  (xi = 1),
    Object.defineProperty(rt, "__esModule", { value: !0 }),
    (rt.defaultIconPrefixCls = rt.ConfigContext = rt.ConfigConsumer = void 0);
  var e = r(_.exports);
  function t(l) {
    if (typeof WeakMap != "function") return null;
    var f = new WeakMap(),
      d = new WeakMap();
    return (t = function (s) {
      return s ? d : f;
    })(l);
  }
  function r(l, f) {
    if (!f && l && l.__esModule) return l;
    if (l === null || (typeof l != "object" && typeof l != "function"))
      return { default: l };
    var d = t(f);
    if (d && d.has(l)) return d.get(l);
    var s = { __proto__: null },
      b = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var p in l)
      if (p !== "default" && Object.prototype.hasOwnProperty.call(l, p)) {
        var u = b ? Object.getOwnPropertyDescriptor(l, p) : null;
        u && (u.get || u.set) ? Object.defineProperty(s, p, u) : (s[p] = l[p]);
      }
    return (s.default = l), d && d.set(l, s), s;
  }
  const n = (rt.defaultIconPrefixCls = "anticon"),
    o = (l, f) => f || (l ? `ant-${l}` : "ant"),
    a = (rt.ConfigContext = e.createContext({
      getPrefixCls: o,
      iconPrefixCls: n,
    })),
    { Consumer: i } = a;
  return (rt.ConfigConsumer = i), rt;
}
var ur = {},
  rn = {},
  _i;
function ms() {
  if (_i) return rn;
  (_i = 1),
    Object.defineProperty(rn, "__esModule", { value: !0 }),
    (rn.default = e);
  function e() {
    return !!(
      typeof window < "u" &&
      window.document &&
      window.document.createElement
    );
  }
  return rn;
}
var St = {},
  nn = {},
  Si;
function $f() {
  if (Si) return nn;
  (Si = 1),
    Object.defineProperty(nn, "__esModule", { value: !0 }),
    (nn.default = e);
  function e(t, r) {
    if (!t) return !1;
    if (t.contains) return t.contains(r);
    for (var n = r; n; ) {
      if (n === t) return !0;
      n = n.parentNode;
    }
    return !1;
  }
  return nn;
}
var Oi;
function hs() {
  if (Oi) return St;
  Oi = 1;
  var e = U.exports.default;
  Object.defineProperty(St, "__esModule", { value: !0 }),
    (St.clearContainerCache = v),
    (St.injectCSS = b),
    (St.removeCSS = u),
    (St.updateCSS = g);
  var t = e(ms()),
    r = e($f()),
    n = "data-rc-order",
    o = "data-rc-priority",
    a = "rc-util-key",
    i = new Map();
  function l() {
    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      y = m.mark;
    return y ? (y.startsWith("data-") ? y : "data-".concat(y)) : a;
  }
  function f(m) {
    if (m.attachTo) return m.attachTo;
    var y = document.querySelector("head");
    return y || document.body;
  }
  function d(m) {
    return m === "queue" ? "prependQueue" : m ? "prepend" : "append";
  }
  function s(m) {
    return Array.from((i.get(m) || m).children).filter(function (y) {
      return y.tagName === "STYLE";
    });
  }
  function b(m) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!(0, t.default)()) return null;
    var h = y.csp,
      O = y.prepend,
      S = y.priority,
      $ = S === void 0 ? 0 : S,
      x = d(O),
      w = x === "prependQueue",
      C = document.createElement("style");
    C.setAttribute(n, x),
      w && $ && C.setAttribute(o, "".concat($)),
      h != null && h.nonce && (C.nonce = h == null ? void 0 : h.nonce),
      (C.innerHTML = m);
    var P = f(y),
      M = P.firstChild;
    if (O) {
      if (w) {
        var I = s(P).filter(function (R) {
          if (!["prepend", "prependQueue"].includes(R.getAttribute(n)))
            return !1;
          var j = Number(R.getAttribute(o) || 0);
          return $ >= j;
        });
        if (I.length) return P.insertBefore(C, I[I.length - 1].nextSibling), C;
      }
      P.insertBefore(C, M);
    } else P.appendChild(C);
    return C;
  }
  function p(m) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      h = f(y);
    return s(h).find(function (O) {
      return O.getAttribute(l(y)) === m;
    });
  }
  function u(m) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      h = p(m, y);
    if (h) {
      var O = f(y);
      O.removeChild(h);
    }
  }
  function c(m, y) {
    var h = i.get(m);
    if (!h || !(0, r.default)(document, h)) {
      var O = b("", y),
        S = O.parentNode;
      i.set(m, S), m.removeChild(O);
    }
  }
  function v() {
    i.clear();
  }
  function g(m, y) {
    var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      O = f(h);
    c(O, h);
    var S = p(y, h);
    if (S) {
      var $, x;
      if (
        ($ = h.csp) !== null &&
        $ !== void 0 &&
        $.nonce &&
        S.nonce !== ((x = h.csp) === null || x === void 0 ? void 0 : x.nonce)
      ) {
        var w;
        S.nonce = (w = h.csp) === null || w === void 0 ? void 0 : w.nonce;
      }
      return S.innerHTML !== m && (S.innerHTML = m), S;
    }
    var C = b(m, h);
    return C.setAttribute(l(h), y), C;
  }
  return St;
}
var Pi;
function Mf() {
  if (Pi) return ur;
  Pi = 1;
  var e = U.exports;
  Object.defineProperty(ur, "__esModule", { value: !0 }),
    (ur.getStyle = i),
    (ur.registerTheme = l);
  var t = Dr,
    r = Er,
    n = e(ms()),
    o = hs();
  e(qr());
  const a = `-ant-${Date.now()}-${Math.random()}`;
  function i(f, d) {
    const s = {},
      b = (c, v) => {
        let g = c.clone();
        return (g = (v == null ? void 0 : v(g)) || g), g.toRgbString();
      },
      p = (c, v) => {
        const g = new r.TinyColor(c),
          m = (0, t.generate)(g.toRgbString());
        (s[`${v}-color`] = b(g)),
          (s[`${v}-color-disabled`] = m[1]),
          (s[`${v}-color-hover`] = m[4]),
          (s[`${v}-color-active`] = m[6]),
          (s[`${v}-color-outline`] = g.clone().setAlpha(0.2).toRgbString()),
          (s[`${v}-color-deprecated-bg`] = m[0]),
          (s[`${v}-color-deprecated-border`] = m[2]);
      };
    if (d.primaryColor) {
      p(d.primaryColor, "primary");
      const c = new r.TinyColor(d.primaryColor),
        v = (0, t.generate)(c.toRgbString());
      v.forEach((m, y) => {
        s[`primary-${y + 1}`] = m;
      }),
        (s["primary-color-deprecated-l-35"] = b(c, (m) => m.lighten(35))),
        (s["primary-color-deprecated-l-20"] = b(c, (m) => m.lighten(20))),
        (s["primary-color-deprecated-t-20"] = b(c, (m) => m.tint(20))),
        (s["primary-color-deprecated-t-50"] = b(c, (m) => m.tint(50))),
        (s["primary-color-deprecated-f-12"] = b(c, (m) =>
          m.setAlpha(m.getAlpha() * 0.12)
        ));
      const g = new r.TinyColor(v[0]);
      (s["primary-color-active-deprecated-f-30"] = b(g, (m) =>
        m.setAlpha(m.getAlpha() * 0.3)
      )),
        (s["primary-color-active-deprecated-d-02"] = b(g, (m) => m.darken(2)));
    }
    return (
      d.successColor && p(d.successColor, "success"),
      d.warningColor && p(d.warningColor, "warning"),
      d.errorColor && p(d.errorColor, "error"),
      d.infoColor && p(d.infoColor, "info"),
      `
  :root {
    ${Object.keys(s).map((c) => `--${f}-${c}: ${s[c]};`).join(`
`)}
  }
  `.trim()
    );
  }
  function l(f, d) {
    const s = i(f, d);
    (0, n.default)() && (0, o.updateCSS)(s, `${a}-dynamic-theme`);
  }
  return ur;
}
var Ot = {},
  wi;
function bs() {
  if (wi) return Ot;
  (wi = 1),
    Object.defineProperty(Ot, "__esModule", { value: !0 }),
    (Ot.default = Ot.DisabledContextProvider = void 0);
  var e = r(_.exports);
  function t(a) {
    if (typeof WeakMap != "function") return null;
    var i = new WeakMap(),
      l = new WeakMap();
    return (t = function (f) {
      return f ? l : i;
    })(a);
  }
  function r(a, i) {
    if (!i && a && a.__esModule) return a;
    if (a === null || (typeof a != "object" && typeof a != "function"))
      return { default: a };
    var l = t(i);
    if (l && l.has(a)) return l.get(a);
    var f = { __proto__: null },
      d = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var s in a)
      if (s !== "default" && Object.prototype.hasOwnProperty.call(a, s)) {
        var b = d ? Object.getOwnPropertyDescriptor(a, s) : null;
        b && (b.get || b.set) ? Object.defineProperty(f, s, b) : (f[s] = a[s]);
      }
    return (f.default = a), l && l.set(a, f), f;
  }
  const n = e.createContext(!1),
    o = (a) => {
      let { children: i, disabled: l } = a;
      const f = e.useContext(n);
      return e.createElement(n.Provider, { value: l != null ? l : f }, i);
    };
  return (Ot.DisabledContextProvider = o), (Ot.default = n), Ot;
}
var cr = {},
  Pt = {},
  $i;
function ys() {
  if ($i) return Pt;
  ($i = 1),
    Object.defineProperty(Pt, "__esModule", { value: !0 }),
    (Pt.default = Pt.SizeContextProvider = void 0);
  var e = r(_.exports);
  function t(a) {
    if (typeof WeakMap != "function") return null;
    var i = new WeakMap(),
      l = new WeakMap();
    return (t = function (f) {
      return f ? l : i;
    })(a);
  }
  function r(a, i) {
    if (!i && a && a.__esModule) return a;
    if (a === null || (typeof a != "object" && typeof a != "function"))
      return { default: a };
    var l = t(i);
    if (l && l.has(a)) return l.get(a);
    var f = { __proto__: null },
      d = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var s in a)
      if (s !== "default" && Object.prototype.hasOwnProperty.call(a, s)) {
        var b = d ? Object.getOwnPropertyDescriptor(a, s) : null;
        b && (b.get || b.set) ? Object.defineProperty(f, s, b) : (f[s] = a[s]);
      }
    return (f.default = a), l && l.set(a, f), f;
  }
  const n = e.createContext(void 0),
    o = (a) => {
      let { children: i, size: l } = a;
      const f = e.useContext(n);
      return e.createElement(n.Provider, { value: l || f }, i);
    };
  return (Pt.SizeContextProvider = o), (Pt.default = n), Pt;
}
var Mi;
function Rf() {
  if (Mi) return cr;
  Mi = 1;
  var e = U.exports;
  Object.defineProperty(cr, "__esModule", { value: !0 }), (cr.default = void 0);
  var t = _.exports,
    r = e(bs()),
    n = e(ys());
  function o() {
    const a = (0, t.useContext)(r.default),
      i = (0, t.useContext)(n.default);
    return { componentDisabled: a, componentSize: i };
  }
  return (cr.default = o), cr;
}
var on = {},
  dr = {},
  Ri;
function If() {
  if (Ri) return dr;
  Ri = 1;
  var e = U.exports.default;
  Object.defineProperty(dr, "__esModule", { value: !0 }), (dr.default = void 0);
  var t = e(Nt()),
    r = e(ea());
  function n(o, a) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
      l = new Set();
    function f(d, s) {
      var b =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
        p = l.has(d);
      if (((0, r.default)(!p, "Warning: There may be circular references"), p))
        return !1;
      if (d === s) return !0;
      if (i && b > 1) return !1;
      l.add(d);
      var u = b + 1;
      if (Array.isArray(d)) {
        if (!Array.isArray(s) || d.length !== s.length) return !1;
        for (var c = 0; c < d.length; c++) if (!f(d[c], s[c], u)) return !1;
        return !0;
      }
      if (
        d &&
        s &&
        (0, t.default)(d) === "object" &&
        (0, t.default)(s) === "object"
      ) {
        var v = Object.keys(d);
        return v.length !== Object.keys(s).length
          ? !1
          : v.every(function (g) {
              return f(d[g], s[g], u);
            });
      }
      return !1;
    }
    return f(o, a);
  }
  return (dr.default = n), dr;
}
var fo = {},
  po = {},
  fr = {},
  Ii;
function Tf() {
  return (
    Ii ||
      ((Ii = 1),
      Object.defineProperty(fr, "__esModule", { value: !0 }),
      (fr.PresetColors = void 0),
      (fr.PresetColors = [
        "blue",
        "purple",
        "cyan",
        "green",
        "magenta",
        "pink",
        "red",
        "orange",
        "yellow",
        "volcano",
        "geekblue",
        "lime",
        "gold",
      ])),
    fr
  );
}
var Ti;
function Cs() {
  return (
    Ti ||
      ((Ti = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "PresetColors", {
            enumerable: !0,
            get: function () {
              return t.PresetColors;
            },
          });
        var t = Tf();
      })(po)),
    po
  );
}
var Ke = {},
  pr = {},
  vr = {},
  ji;
function jf() {
  return (
    ji ||
      ((ji = 1),
      Object.defineProperty(vr, "__esModule", { value: !0 }),
      (vr.default = void 0),
      (vr.default = "5.13.1")),
    vr
  );
}
var ki;
function kf() {
  if (ki) return pr;
  ki = 1;
  var e = U.exports;
  Object.defineProperty(pr, "__esModule", { value: !0 }), (pr.default = void 0);
  var t = e(jf());
  return (pr.default = t.default), pr;
}
var an = {},
  gr = {},
  qi;
function qf() {
  if (qi) return gr;
  (qi = 1),
    Object.defineProperty(gr, "__esModule", { value: !0 }),
    (gr.default = void 0);
  var e = Er;
  function t(n) {
    return n >= 0 && n <= 255;
  }
  function r(n, o) {
    const { r: a, g: i, b: l, a: f } = new e.TinyColor(n).toRgb();
    if (f < 1) return n;
    const { r: d, g: s, b } = new e.TinyColor(o).toRgb();
    for (let p = 0.01; p <= 1; p += 0.01) {
      const u = Math.round((a - d * (1 - p)) / p),
        c = Math.round((i - s * (1 - p)) / p),
        v = Math.round((l - b * (1 - p)) / p);
      if (t(u) && t(c) && t(v))
        return new e.TinyColor({
          r: u,
          g: c,
          b: v,
          a: Math.round(p * 100) / 100,
        }).toRgbString();
    }
    return new e.TinyColor({ r: a, g: i, b: l, a: 1 }).toRgbString();
  }
  return (gr.default = r), gr;
}
var Di;
function Df() {
  if (Di) return an;
  Di = 1;
  var e = U.exports;
  Object.defineProperty(an, "__esModule", { value: !0 }), (an.default = a);
  var t = Er,
    r = e(Ar()),
    n = e(qf()),
    o = function (i, l) {
      var f = {};
      for (var d in i)
        Object.prototype.hasOwnProperty.call(i, d) &&
          l.indexOf(d) < 0 &&
          (f[d] = i[d]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, d = Object.getOwnPropertySymbols(i); s < d.length; s++)
          l.indexOf(d[s]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(i, d[s]) &&
            (f[d[s]] = i[d[s]]);
      return f;
    };
  function a(i) {
    const { override: l } = i,
      f = o(i, ["override"]),
      d = Object.assign({}, l);
    Object.keys(r.default).forEach((y) => {
      delete d[y];
    });
    const s = Object.assign(Object.assign({}, f), d),
      b = 480,
      p = 576,
      u = 768,
      c = 992,
      v = 1200,
      g = 1600;
    if (s.motion === !1) {
      const y = "0s";
      (s.motionDurationFast = y),
        (s.motionDurationMid = y),
        (s.motionDurationSlow = y);
    }
    return Object.assign(
      Object.assign(Object.assign({}, s), {
        colorFillContent: s.colorFillSecondary,
        colorFillContentHover: s.colorFill,
        colorFillAlter: s.colorFillQuaternary,
        colorBgContainerDisabled: s.colorFillTertiary,
        colorBorderBg: s.colorBgContainer,
        colorSplit: (0, n.default)(s.colorBorderSecondary, s.colorBgContainer),
        colorTextPlaceholder: s.colorTextQuaternary,
        colorTextDisabled: s.colorTextQuaternary,
        colorTextHeading: s.colorText,
        colorTextLabel: s.colorTextSecondary,
        colorTextDescription: s.colorTextTertiary,
        colorTextLightSolid: s.colorWhite,
        colorHighlight: s.colorError,
        colorBgTextHover: s.colorFillSecondary,
        colorBgTextActive: s.colorFill,
        colorIcon: s.colorTextTertiary,
        colorIconHover: s.colorText,
        colorErrorOutline: (0, n.default)(s.colorErrorBg, s.colorBgContainer),
        colorWarningOutline: (0, n.default)(
          s.colorWarningBg,
          s.colorBgContainer
        ),
        fontSizeIcon: s.fontSizeSM,
        lineWidthFocus: s.lineWidth * 4,
        lineWidth: s.lineWidth,
        controlOutlineWidth: s.lineWidth * 2,
        controlInteractiveSize: s.controlHeight / 2,
        controlItemBgHover: s.colorFillTertiary,
        controlItemBgActive: s.colorPrimaryBg,
        controlItemBgActiveHover: s.colorPrimaryBgHover,
        controlItemBgActiveDisabled: s.colorFill,
        controlTmpOutline: s.colorFillQuaternary,
        controlOutline: (0, n.default)(s.colorPrimaryBg, s.colorBgContainer),
        lineType: s.lineType,
        borderRadius: s.borderRadius,
        borderRadiusXS: s.borderRadiusXS,
        borderRadiusSM: s.borderRadiusSM,
        borderRadiusLG: s.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: 0.65,
        linkDecoration: "none",
        linkHoverDecoration: "none",
        linkFocusDecoration: "none",
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: s.sizeXXS,
        paddingXS: s.sizeXS,
        paddingSM: s.sizeSM,
        padding: s.size,
        paddingMD: s.sizeMD,
        paddingLG: s.sizeLG,
        paddingXL: s.sizeXL,
        paddingContentHorizontalLG: s.sizeLG,
        paddingContentVerticalLG: s.sizeMS,
        paddingContentHorizontal: s.sizeMS,
        paddingContentVertical: s.sizeSM,
        paddingContentHorizontalSM: s.size,
        paddingContentVerticalSM: s.sizeXS,
        marginXXS: s.sizeXXS,
        marginXS: s.sizeXS,
        marginSM: s.sizeSM,
        margin: s.size,
        marginMD: s.sizeMD,
        marginLG: s.sizeLG,
        marginXL: s.sizeXL,
        marginXXL: s.sizeXXL,
        boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
        screenXS: b,
        screenXSMin: b,
        screenXSMax: p - 1,
        screenSM: p,
        screenSMMin: p,
        screenSMMax: u - 1,
        screenMD: u,
        screenMDMin: u,
        screenMDMax: c - 1,
        screenLG: c,
        screenLGMin: c,
        screenLGMax: v - 1,
        screenXL: v,
        screenXLMin: v,
        screenXLMax: g - 1,
        screenXXL: g,
        screenXXLMin: g,
        boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
        boxShadowCard: `
      0 1px 2px -2px ${new t.TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new t.TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new t.TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
        boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowRight:
          "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowBottom:
          "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
      }),
      d
    );
  }
  return an;
}
var Ai;
function oa() {
  if (Ai) return Ke;
  Ai = 1;
  var e = U.exports;
  Object.defineProperty(Ke, "__esModule", { value: !0 }),
    (Ke.default = p),
    (Ke.unitless = Ke.ignore = Ke.getComputedToken = void 0);
  var t = e(_.exports),
    r = lt,
    n = e(kf()),
    o = na(),
    a = e(Ar()),
    i = e(Df()),
    l = function (u, c) {
      var v = {};
      for (var g in u)
        Object.prototype.hasOwnProperty.call(u, g) &&
          c.indexOf(g) < 0 &&
          (v[g] = u[g]);
      if (u != null && typeof Object.getOwnPropertySymbols == "function")
        for (var m = 0, g = Object.getOwnPropertySymbols(u); m < g.length; m++)
          c.indexOf(g[m]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(u, g[m]) &&
            (v[g[m]] = u[g[m]]);
      return v;
    };
  const f = (Ke.unitless = {
      lineHeight: !0,
      lineHeightSM: !0,
      lineHeightLG: !0,
      lineHeightHeading1: !0,
      lineHeightHeading2: !0,
      lineHeightHeading3: !0,
      lineHeightHeading4: !0,
      lineHeightHeading5: !0,
      opacityLoading: !0,
      fontWeightStrong: !0,
      zIndexPopupBase: !0,
      zIndexBase: !0,
    }),
    d = (Ke.ignore = {
      size: !0,
      sizeSM: !0,
      sizeLG: !0,
      sizeMD: !0,
      sizeXS: !0,
      sizeXXS: !0,
      sizeMS: !0,
      sizeXL: !0,
      sizeXXL: !0,
      sizeUnit: !0,
      sizeStep: !0,
      motionBase: !0,
      motionUnit: !0,
    }),
    s = {
      screenXS: !0,
      screenXSMin: !0,
      screenXSMax: !0,
      screenSM: !0,
      screenSMMin: !0,
      screenSMMax: !0,
      screenMD: !0,
      screenMDMin: !0,
      screenMDMax: !0,
      screenLG: !0,
      screenLGMin: !0,
      screenLGMax: !0,
      screenXL: !0,
      screenXLMin: !0,
      screenXLMax: !0,
      screenXXL: !0,
      screenXXLMin: !0,
    },
    b = (u, c, v) => {
      const g = v.getDerivativeToken(u),
        { override: m } = c,
        y = l(c, ["override"]);
      let h = Object.assign(Object.assign({}, g), { override: m });
      return (
        (h = (0, i.default)(h)),
        y &&
          Object.entries(y).forEach((O) => {
            let [S, $] = O;
            const { theme: x } = $,
              w = l($, ["theme"]);
            let C = w;
            x &&
              (C = b(
                Object.assign(Object.assign({}, h), w),
                { override: w },
                x
              )),
              (h[S] = C);
          }),
        h
      );
    };
  Ke.getComputedToken = b;
  function p() {
    const {
        token: u,
        hashed: c,
        theme: v,
        override: g,
        cssVar: m,
      } = t.default.useContext(o.DesignTokenContext),
      y = `${n.default}-${c || ""}`,
      h = v || o.defaultTheme,
      [O, S, $] = (0, r.useCacheToken)(h, [a.default, u], {
        salt: y,
        override: g,
        getComputedToken: b,
        formatToken: i.default,
        cssVar: m && {
          prefix: m.prefix,
          key: m.key,
          unitless: f,
          ignore: d,
          preserve: s,
        },
      });
    return [h, $, c ? S : "", O, m];
  }
  return Ke;
}
var pt = {},
  vo = {},
  mr = {},
  Ei;
function Af() {
  if (Ei) return mr;
  (Ei = 1),
    Object.defineProperty(mr, "__esModule", { value: !0 }),
    (mr.operationUnit = void 0);
  const e = (t) => ({
    color: t.colorLink,
    textDecoration: "none",
    outline: "none",
    cursor: "pointer",
    transition: `color ${t.motionDurationSlow}`,
    "&:focus, &:hover": { color: t.colorLinkHover },
    "&:active": { color: t.colorLinkActive },
  });
  return (mr.operationUnit = e), mr;
}
var Bi;
function xs() {
  return (
    Bi ||
      ((Bi = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.genLinkStyle =
            e.genFocusStyle =
            e.genFocusOutline =
            e.genCommonStyle =
            e.clearFix =
              void 0),
          Object.defineProperty(e, "operationUnit", {
            enumerable: !0,
            get: function () {
              return r.operationUnit;
            },
          }),
          (e.textEllipsis = e.resetIcon = e.resetComponent = void 0);
        var t = lt,
          r = Af();
        e.textEllipsis = {
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        };
        const n = function (s) {
          let b =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            color: s.colorText,
            fontSize: s.fontSize,
            lineHeight: s.lineHeight,
            listStyle: "none",
            fontFamily: b ? "inherit" : s.fontFamily,
          };
        };
        e.resetComponent = n;
        const o = () => ({
          display: "inline-flex",
          alignItems: "center",
          color: "inherit",
          fontStyle: "normal",
          lineHeight: 0,
          textAlign: "center",
          textTransform: "none",
          verticalAlign: "-0.125em",
          textRendering: "optimizeLegibility",
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
          "> *": { lineHeight: 1 },
          svg: { display: "inline-block" },
        });
        e.resetIcon = o;
        const a = () => ({
          "&::before": { display: "table", content: '""' },
          "&::after": { display: "table", clear: "both", content: '""' },
        });
        e.clearFix = a;
        const i = (s) => ({
          a: {
            color: s.colorLink,
            textDecoration: s.linkDecoration,
            backgroundColor: "transparent",
            outline: "none",
            cursor: "pointer",
            transition: `color ${s.motionDurationSlow}`,
            "-webkit-text-decoration-skip": "objects",
            "&:hover": { color: s.colorLinkHover },
            "&:active": { color: s.colorLinkActive },
            [`&:active,
  &:hover`]: { textDecoration: s.linkHoverDecoration, outline: 0 },
            "&:focus": { textDecoration: s.linkFocusDecoration, outline: 0 },
            "&[disabled]": {
              color: s.colorTextDisabled,
              cursor: "not-allowed",
            },
          },
        });
        e.genLinkStyle = i;
        const l = (s, b) => {
          const { fontFamily: p, fontSize: u } = s,
            c = `[class^="${b}"], [class*=" ${b}"]`;
          return {
            [c]: {
              fontFamily: p,
              fontSize: u,
              boxSizing: "border-box",
              "&::before, &::after": { boxSizing: "border-box" },
              [c]: {
                boxSizing: "border-box",
                "&::before, &::after": { boxSizing: "border-box" },
              },
            },
          };
        };
        e.genCommonStyle = l;
        const f = (s) => ({
          outline: `${(0, t.unit)(s.lineWidthFocus)} solid ${
            s.colorPrimaryBorder
          }`,
          outlineOffset: 1,
          transition: "outline-offset 0s, outline 0s",
        });
        e.genFocusOutline = f;
        const d = (s) => ({ "&:focus-visible": Object.assign({}, f(s)) });
        e.genFocusStyle = d;
      })(vo)),
    vo
  );
}
var hr = {},
  br = {},
  go = { exports: {} },
  Ni;
function aa() {
  return (
    Ni ||
      ((Ni = 1),
      (function (e) {
        function t(r, n) {
          if (!(r instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(go)),
    go.exports
  );
}
var mo = { exports: {} },
  zi;
function ia() {
  return (
    zi ||
      ((zi = 1),
      (function (e) {
        var t = ss();
        function r(o, a) {
          for (var i = 0; i < a.length; i++) {
            var l = a[i];
            (l.enumerable = l.enumerable || !1),
              (l.configurable = !0),
              "value" in l && (l.writable = !0),
              Object.defineProperty(o, t(l.key), l);
          }
        }
        function n(o, a, i) {
          return (
            a && r(o.prototype, a),
            i && r(o, i),
            Object.defineProperty(o, "prototype", { writable: !1 }),
            o
          );
        }
        (e.exports = n),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(mo)),
    mo.exports
  );
}
var ho = { exports: {} },
  bo = { exports: {} },
  Li;
function Ef() {
  return (
    Li ||
      ((Li = 1),
      (function (e) {
        function t(r) {
          if (r === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return r;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(bo)),
    bo.exports
  );
}
var Wi;
function _s() {
  return (
    Wi ||
      ((Wi = 1),
      (function (e) {
        var t = Nt().default,
          r = Ef();
        function n(o, a) {
          if (a && (t(a) === "object" || typeof a == "function")) return a;
          if (a !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return r(o);
        }
        (e.exports = n),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(ho)),
    ho.exports
  );
}
var yo = { exports: {} },
  Hi;
function Ss() {
  return (
    Hi ||
      ((Hi = 1),
      (function (e) {
        function t() {
          if (
            typeof Reflect > "u" ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if (typeof Proxy == "function") return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch {
            return !1;
          }
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(yo)),
    yo.exports
  );
}
var Co = { exports: {} },
  Fi;
function Os() {
  return (
    Fi ||
      ((Fi = 1),
      (function (e) {
        function t(r) {
          return (
            (e.exports = t =
              Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Co)),
    Co.exports
  );
}
var xo = { exports: {} },
  _o = { exports: {} },
  Ki;
function Bf() {
  return (
    Ki ||
      ((Ki = 1),
      (function (e) {
        function t(r, n) {
          return (
            (e.exports = t =
              Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (a, i) {
                    return (a.__proto__ = i), a;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(r, n)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(_o)),
    _o.exports
  );
}
var Ui;
function Ps() {
  return (
    Ui ||
      ((Ui = 1),
      (function (e) {
        var t = Bf();
        function r(n, o) {
          if (typeof o != "function" && o !== null)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (n.prototype = Object.create(o && o.prototype, {
            constructor: { value: n, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            o && t(n, o);
        }
        (e.exports = r),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(xo)),
    xo.exports
  );
}
var yr = {},
  Vi;
function ws() {
  if (Vi) return yr;
  Vi = 1;
  var e = U.exports;
  Object.defineProperty(yr, "__esModule", { value: !0 }), (yr.default = void 0);
  var t = e(ia()),
    r = e(aa());
  let n = (0, t.default)(function o() {
    (0, r.default)(this, o);
  });
  return (yr.default = n), yr;
}
var Xi;
function Nf() {
  if (Xi) return br;
  Xi = 1;
  var e = U.exports;
  Object.defineProperty(br, "__esModule", { value: !0 }), (br.default = void 0);
  var t = e(aa()),
    r = e(ia()),
    n = e(_s()),
    o = e(Ss()),
    a = e(Os()),
    i = e(Ps()),
    l = e(ws());
  function f(d, s, b) {
    return (
      (s = (0, a.default)(s)),
      (0, n.default)(
        d,
        (0, o.default)()
          ? Reflect.construct(s, b || [], (0, a.default)(d).constructor)
          : s.apply(d, b)
      )
    );
  }
  return (
    (br.default = (function (d) {
      (0, i.default)(s, d);
      function s(b) {
        var p;
        return (
          (0, t.default)(this, s),
          (p = f(this, s)),
          (p.result = 0),
          b instanceof s
            ? (p.result = b.result)
            : typeof b == "number" && (p.result = b),
          p
        );
      }
      return (
        (0, r.default)(s, [
          {
            key: "add",
            value: function (p) {
              return (
                p instanceof s
                  ? (this.result += p.result)
                  : typeof p == "number" && (this.result += p),
                this
              );
            },
          },
          {
            key: "sub",
            value: function (p) {
              return (
                p instanceof s
                  ? (this.result -= p.result)
                  : typeof p == "number" && (this.result -= p),
                this
              );
            },
          },
          {
            key: "mul",
            value: function (p) {
              return (
                p instanceof s
                  ? (this.result *= p.result)
                  : typeof p == "number" && (this.result *= p),
                this
              );
            },
          },
          {
            key: "div",
            value: function (p) {
              return (
                p instanceof s
                  ? (this.result /= p.result)
                  : typeof p == "number" && (this.result /= p),
                this
              );
            },
          },
          {
            key: "equal",
            value: function () {
              return this.result;
            },
          },
        ]),
        s
      );
    })(l.default)),
    br
  );
}
var Cr = {},
  Gi;
function zf() {
  if (Gi) return Cr;
  Gi = 1;
  var e = U.exports;
  Object.defineProperty(Cr, "__esModule", { value: !0 }), (Cr.default = void 0);
  var t = e(aa()),
    r = e(ia()),
    n = e(_s()),
    o = e(Ss()),
    a = e(Os()),
    i = e(Ps()),
    l = e(ws());
  function f(b, p, u) {
    return (
      (p = (0, a.default)(p)),
      (0, n.default)(
        b,
        (0, o.default)()
          ? Reflect.construct(p, u || [], (0, a.default)(b).constructor)
          : p.apply(b, u)
      )
    );
  }
  const d = "CALC_UNIT";
  function s(b) {
    return typeof b == "number" ? `${b}${d}` : b;
  }
  return (
    (Cr.default = (function (b) {
      (0, i.default)(p, b);
      function p(u) {
        var c;
        return (
          (0, t.default)(this, p),
          (c = f(this, p)),
          (c.result = ""),
          u instanceof p
            ? (c.result = `(${u.result})`)
            : typeof u == "number"
            ? (c.result = s(u))
            : typeof u == "string" && (c.result = u),
          c
        );
      }
      return (
        (0, r.default)(p, [
          {
            key: "add",
            value: function (c) {
              return (
                c instanceof p
                  ? (this.result = `${this.result} + ${c.getResult()}`)
                  : (typeof c == "number" || typeof c == "string") &&
                    (this.result = `${this.result} + ${s(c)}`),
                (this.lowPriority = !0),
                this
              );
            },
          },
          {
            key: "sub",
            value: function (c) {
              return (
                c instanceof p
                  ? (this.result = `${this.result} - ${c.getResult()}`)
                  : (typeof c == "number" || typeof c == "string") &&
                    (this.result = `${this.result} - ${s(c)}`),
                (this.lowPriority = !0),
                this
              );
            },
          },
          {
            key: "mul",
            value: function (c) {
              return (
                this.lowPriority && (this.result = `(${this.result})`),
                c instanceof p
                  ? (this.result = `${this.result} * ${c.getResult(!0)}`)
                  : (typeof c == "number" || typeof c == "string") &&
                    (this.result = `${this.result} * ${c}`),
                (this.lowPriority = !1),
                this
              );
            },
          },
          {
            key: "div",
            value: function (c) {
              return (
                this.lowPriority && (this.result = `(${this.result})`),
                c instanceof p
                  ? (this.result = `${this.result} / ${c.getResult(!0)}`)
                  : (typeof c == "number" || typeof c == "string") &&
                    (this.result = `${this.result} / ${c}`),
                (this.lowPriority = !1),
                this
              );
            },
          },
          {
            key: "getResult",
            value: function (c) {
              return this.lowPriority || c ? `(${this.result})` : this.result;
            },
          },
          {
            key: "equal",
            value: function (c) {
              const { unit: v = !0 } = c || {},
                g = new RegExp(`${d}`, "g");
              return (
                (this.result = this.result.replace(g, v ? "px" : "")),
                typeof this.lowPriority < "u"
                  ? `calc(${this.result})`
                  : this.result
              );
            },
          },
        ]),
        p
      );
    })(l.default)),
    Cr
  );
}
var Yi;
function $s() {
  if (Yi) return hr;
  Yi = 1;
  var e = U.exports;
  Object.defineProperty(hr, "__esModule", { value: !0 }), (hr.default = void 0);
  var t = e(Nf()),
    r = e(zf());
  const n = (o) => {
    const a = o === "css" ? r.default : t.default;
    return (i) => new a(i);
  };
  return (hr.default = n), hr;
}
var ln = {},
  Qi;
function Lf() {
  if (Qi) return ln;
  (Qi = 1),
    Object.defineProperty(ln, "__esModule", { value: !0 }),
    (ln.default = t);
  var e = lt;
  function t(r) {
    return r === "js"
      ? { max: Math.max, min: Math.min }
      : {
          max: function () {
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
              o[a] = arguments[a];
            return `max(${o.map((i) => (0, e.unit)(i)).join(",")})`;
          },
          min: function () {
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
              o[a] = arguments[a];
            return `min(${o.map((i) => (0, e.unit)(i)).join(",")})`;
          },
        };
  }
  return ln;
}
var Ue = {},
  Zi;
function Ms() {
  if (Zi) return Ue;
  (Zi = 1),
    Object.defineProperty(Ue, "__esModule", { value: !0 }),
    (Ue.default = Ue._statistic_build_ = void 0),
    (Ue.merge = r),
    (Ue.statistic = void 0);
  const e = typeof CSSINJS_STATISTIC < "u";
  let t = !0;
  function r() {
    for (var i = arguments.length, l = new Array(i), f = 0; f < i; f++)
      l[f] = arguments[f];
    if (!e) return Object.assign.apply(Object, [{}].concat(l));
    t = !1;
    const d = {};
    return (
      l.forEach((s) => {
        Object.keys(s).forEach((p) => {
          Object.defineProperty(d, p, {
            configurable: !0,
            enumerable: !0,
            get: () => s[p],
          });
        });
      }),
      (t = !0),
      d
    );
  }
  const n = (Ue.statistic = {});
  Ue._statistic_build_ = {};
  function o() {}
  const a = (i) => {
    let l,
      f = i,
      d = o;
    return (
      e &&
        typeof Proxy < "u" &&
        ((l = new Set()),
        (f = new Proxy(i, {
          get(s, b) {
            return t && l.add(b), s[b];
          },
        })),
        (d = (s, b) => {
          var p;
          n[s] = {
            global: Array.from(l),
            component: Object.assign(
              Object.assign(
                {},
                (p = n[s]) === null || p === void 0 ? void 0 : p.component
              ),
              b
            ),
          };
        })),
      { token: f, keys: l, flush: d }
    );
  };
  return (Ue.default = a), Ue;
}
var xr = {},
  Ji;
function Rs() {
  if (Ji) return xr;
  Ji = 1;
  var e = U.exports;
  Object.defineProperty(xr, "__esModule", { value: !0 }), (xr.default = void 0);
  var t = lt,
    r = xs(),
    n = e(oa());
  const o = (a, i) => {
    const [l, f] = (0, n.default)();
    return (0, t.useStyleRegister)(
      {
        theme: l,
        token: f,
        hashId: "",
        path: ["ant-design-icons", a],
        nonce: () => (i == null ? void 0 : i.nonce),
      },
      () => [
        {
          [`.${a}`]: Object.assign(Object.assign({}, (0, r.resetIcon)()), {
            [`.${a} .${a}-icon`]: { display: "block" },
          }),
        },
      ]
    );
  };
  return (xr.default = o), xr;
}
var el;
function Wf() {
  if (el) return pt;
  el = 1;
  var e = U.exports;
  Object.defineProperty(pt, "__esModule", { value: !0 }),
    (pt.default = v),
    (pt.genSubStyleComponent = pt.genStyleHooks = void 0);
  var t = b(_.exports),
    r = lt,
    n = gs(),
    o = xs(),
    a = b(oa()),
    i = e($s()),
    l = e(Lf()),
    f = b(Ms()),
    d = e(Rs());
  function s(h) {
    if (typeof WeakMap != "function") return null;
    var O = new WeakMap(),
      S = new WeakMap();
    return (s = function ($) {
      return $ ? S : O;
    })(h);
  }
  function b(h, O) {
    if (!O && h && h.__esModule) return h;
    if (h === null || (typeof h != "object" && typeof h != "function"))
      return { default: h };
    var S = s(O);
    if (S && S.has(h)) return S.get(h);
    var $ = { __proto__: null },
      x = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var w in h)
      if (w !== "default" && Object.prototype.hasOwnProperty.call(h, w)) {
        var C = x ? Object.getOwnPropertyDescriptor(h, w) : null;
        C && (C.get || C.set) ? Object.defineProperty($, w, C) : ($[w] = h[w]);
      }
    return ($.default = h), S && S.set(h, $), $;
  }
  const p = (h, O, S) => {
      var $;
      return typeof S == "function"
        ? S((0, f.merge)(O, ($ = O[h]) !== null && $ !== void 0 ? $ : {}))
        : S != null
        ? S
        : {};
    },
    u = (h, O, S, $) => {
      const x = Object.assign({}, O[h]);
      if ($ != null && $.deprecatedTokens) {
        const { deprecatedTokens: C } = $;
        C.forEach((P) => {
          let [M, I] = P;
          var R;
          ((x == null ? void 0 : x[M]) || (x == null ? void 0 : x[I])) &&
            (((R = x[I]) !== null && R !== void 0) ||
              (x[I] = x == null ? void 0 : x[M]));
        });
      }
      const w = Object.assign(Object.assign({}, S), x);
      return (
        Object.keys(w).forEach((C) => {
          w[C] === O[C] && delete w[C];
        }),
        w
      );
    },
    c = (h, O) =>
      `${[
        O,
        h
          .replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2")
          .replace(/([a-z])([A-Z])/g, "$1-$2"),
      ]
        .filter(Boolean)
        .join("-")}`;
  function v(h, O, S) {
    let $ = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const x = Array.isArray(h) ? h : [h, h],
      [w] = x,
      C = x.join("-");
    return (P) => {
      const [M, I, R, j, D] = (0, a.default)(),
        {
          getPrefixCls: E,
          iconPrefixCls: B,
          csp: W,
        } = (0, t.useContext)(n.ConfigContext),
        Z = E(),
        ee = D ? "css" : "js",
        G = (0, i.default)(ee),
        { max: J, min: k } = (0, l.default)(ee),
        z = {
          theme: M,
          token: j,
          hashId: R,
          nonce: () => (W == null ? void 0 : W.nonce),
          clientOnly: $.clientOnly,
          order: $.order || -999,
        };
      return (
        (0, r.useStyleRegister)(
          Object.assign(Object.assign({}, z), {
            clientOnly: !1,
            path: ["Shared", Z],
          }),
          () => [{ "&": (0, o.genLinkStyle)(j) }]
        ),
        (0, d.default)(B, W),
        [
          (0, r.useStyleRegister)(
            Object.assign(Object.assign({}, z), { path: [C, P, B] }),
            () => {
              if ($.injectStyle === !1) return [];
              const { token: q, flush: Y } = (0, f.default)(j),
                Q = p(w, I, S),
                te = `.${P}`,
                ne = u(w, I, Q, { deprecatedTokens: $.deprecatedTokens });
              D &&
                Object.keys(Q).forEach((le) => {
                  Q[le] = `var(${(0, r.token2CSSVar)(le, c(w, D.prefix))})`;
                });
              const A = (0, f.merge)(
                  q,
                  {
                    componentCls: te,
                    prefixCls: P,
                    iconCls: `.${B}`,
                    antCls: `.${Z}`,
                    calc: G,
                    max: J,
                    min: k,
                  },
                  D ? Q : ne
                ),
                X = O(A, {
                  hashId: R,
                  prefixCls: P,
                  rootPrefixCls: Z,
                  iconPrefixCls: B,
                });
              return (
                Y(w, ne),
                [$.resetStyle === !1 ? null : (0, o.genCommonStyle)(A, P), X]
              );
            }
          ),
          R,
        ]
      );
    };
  }
  const g = (h, O, S, $) => {
    const x = v(h, O, S, Object.assign({ resetStyle: !1, order: -998 }, $));
    return (C) => {
      let { prefixCls: P } = C;
      return x(P), null;
    };
  };
  pt.genSubStyleComponent = g;
  const m = (h, O, S) => {
      function $(I) {
        return `${h}${I.slice(0, 1).toUpperCase()}${I.slice(1)}`;
      }
      const { unitless: x = {}, injectStyle: w = !0 } = S != null ? S : {},
        C = { [$("zIndexPopup")]: !0 };
      Object.keys(x).forEach((I) => {
        C[$(I)] = x[I];
      });
      const P = (I) => {
        let { rootCls: R, cssVar: j } = I;
        const [, D] = (0, a.default)();
        return (
          (0, r.useCSSVarRegister)(
            {
              path: [h],
              prefix: j.prefix,
              key: j == null ? void 0 : j.key,
              unitless: Object.assign(Object.assign({}, a.unitless), C),
              ignore: a.ignore,
              token: D,
              scope: R,
            },
            () => {
              const E = p(h, D, O),
                B = u(h, D, E, {
                  deprecatedTokens: S == null ? void 0 : S.deprecatedTokens,
                });
              return (
                Object.keys(E).forEach((W) => {
                  (B[$(W)] = B[W]), delete B[W];
                }),
                B
              );
            }
          ),
          null
        );
      };
      return (I) => {
        const [, , , , R] = (0, a.default)();
        return [
          (j) =>
            w && R
              ? t.default.createElement(
                  t.default.Fragment,
                  null,
                  t.default.createElement(P, {
                    rootCls: I,
                    cssVar: R,
                    component: h,
                  }),
                  j
                )
              : j,
          R == null ? void 0 : R.key,
        ];
      };
    },
    y = (h, O, S, $) => {
      const x = v(h, O, S, $),
        w = m(Array.isArray(h) ? h[0] : h, S, $);
      return function (C) {
        let P =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C;
        const [, M] = x(C),
          [I, R] = w(P);
        return [I, M, R];
      };
    };
  return (pt.genStyleHooks = y), pt;
}
var sn = {},
  tl;
function Hf() {
  if (tl) return sn;
  (tl = 1),
    Object.defineProperty(sn, "__esModule", { value: !0 }),
    (sn.default = t);
  var e = Cs();
  function t(r, n) {
    return e.PresetColors.reduce((o, a) => {
      const i = r[`${a}1`],
        l = r[`${a}3`],
        f = r[`${a}6`],
        d = r[`${a}7`];
      return Object.assign(
        Object.assign({}, o),
        n(a, { lightColor: i, lightBorderColor: l, darkColor: f, textColor: d })
      );
    }, {});
  }
  return sn;
}
var rl;
function In() {
  return (
    rl ||
      ((rl = 1),
      (function (e) {
        var t = U.exports;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "DesignTokenContext", {
            enumerable: !0,
            get: function () {
              return b.DesignTokenContext;
            },
          }),
          Object.defineProperty(e, "PresetColors", {
            enumerable: !0,
            get: function () {
              return n.PresetColors;
            },
          }),
          Object.defineProperty(e, "calc", {
            enumerable: !0,
            get: function () {
              return d.default;
            },
          }),
          Object.defineProperty(e, "defaultConfig", {
            enumerable: !0,
            get: function () {
              return b.defaultConfig;
            },
          }),
          Object.defineProperty(e, "genComponentStyleHook", {
            enumerable: !0,
            get: function () {
              return a.default;
            },
          }),
          Object.defineProperty(e, "genPresetColor", {
            enumerable: !0,
            get: function () {
              return i.default;
            },
          }),
          Object.defineProperty(e, "genStyleHooks", {
            enumerable: !0,
            get: function () {
              return a.genStyleHooks;
            },
          }),
          Object.defineProperty(e, "genSubStyleComponent", {
            enumerable: !0,
            get: function () {
              return a.genSubStyleComponent;
            },
          }),
          Object.defineProperty(e, "getLineHeight", {
            enumerable: !0,
            get: function () {
              return s.getLineHeight;
            },
          }),
          Object.defineProperty(e, "mergeToken", {
            enumerable: !0,
            get: function () {
              return l.merge;
            },
          }),
          Object.defineProperty(e, "statisticToken", {
            enumerable: !0,
            get: function () {
              return l.default;
            },
          }),
          Object.defineProperty(e, "useResetIconStyle", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          Object.defineProperty(e, "useStyleRegister", {
            enumerable: !0,
            get: function () {
              return r.useStyleRegister;
            },
          }),
          Object.defineProperty(e, "useToken", {
            enumerable: !0,
            get: function () {
              return o.default;
            },
          });
        var r = lt,
          n = Cs(),
          o = t(oa()),
          a = u(Wf()),
          i = t(Hf()),
          l = u(Ms()),
          f = t(Rs()),
          d = t($s()),
          s = vs(),
          b = na();
        function p(c) {
          if (typeof WeakMap != "function") return null;
          var v = new WeakMap(),
            g = new WeakMap();
          return (p = function (m) {
            return m ? g : v;
          })(c);
        }
        function u(c, v) {
          if (!v && c && c.__esModule) return c;
          if (c === null || (typeof c != "object" && typeof c != "function"))
            return { default: c };
          var g = p(v);
          if (g && g.has(c)) return g.get(c);
          var m = { __proto__: null },
            y = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var h in c)
            if (h !== "default" && Object.prototype.hasOwnProperty.call(c, h)) {
              var O = y ? Object.getOwnPropertyDescriptor(c, h) : null;
              O && (O.get || O.set)
                ? Object.defineProperty(m, h, O)
                : (m[h] = c[h]);
            }
          return (m.default = c), g && g.set(c, m), m;
        }
      })(fo)),
    fo
  );
}
var _r = {},
  nl;
function Ff() {
  if (nl) return _r;
  (nl = 1),
    Object.defineProperty(_r, "__esModule", { value: !0 }),
    (_r.default = void 0);
  var e = r(_.exports);
  function t(l) {
    if (typeof WeakMap != "function") return null;
    var f = new WeakMap(),
      d = new WeakMap();
    return (t = function (s) {
      return s ? d : f;
    })(l);
  }
  function r(l, f) {
    if (!f && l && l.__esModule) return l;
    if (l === null || (typeof l != "object" && typeof l != "function"))
      return { default: l };
    var d = t(f);
    if (d && d.has(l)) return d.get(l);
    var s = { __proto__: null },
      b = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var p in l)
      if (p !== "default" && Object.prototype.hasOwnProperty.call(l, p)) {
        var u = b ? Object.getOwnPropertyDescriptor(l, p) : null;
        u && (u.get || u.set) ? Object.defineProperty(s, p, u) : (s[p] = l[p]);
      }
    return (s.default = l), d && d.set(l, s), s;
  }
  const n = Object.assign({}, e),
    { useId: o } = n,
    i = typeof o > "u" ? () => "" : o;
  return (_r.default = i), _r;
}
var ol;
function Kf() {
  if (ol) return on;
  ol = 1;
  var e = U.exports;
  Object.defineProperty(on, "__esModule", { value: !0 }), (on.default = i);
  var t = e(ds()),
    r = e(If()),
    n = In(),
    o = e(Ff()),
    a = qr();
  function i(l, f) {
    (0, a.devUseWarning)("ConfigProvider");
    const d = l || {},
      s = d.inherit === !1 || !f ? n.defaultConfig : f,
      b = (0, o.default)();
    return (0, t.default)(
      () => {
        var p, u;
        if (!l) return f;
        const c = Object.assign({}, s.components);
        Object.keys(l.components || {}).forEach((m) => {
          c[m] = Object.assign(Object.assign({}, c[m]), l.components[m]);
        });
        const v = `css-var-${b.replace(/:/g, "")}`,
          g =
            ((p = d.cssVar) !== null && p !== void 0 ? p : s.cssVar) &&
            Object.assign(
              Object.assign(
                Object.assign(
                  { prefix: "ant" },
                  typeof s.cssVar == "object" ? s.cssVar : {}
                ),
                typeof d.cssVar == "object" ? d.cssVar : {}
              ),
              {
                key:
                  (typeof d.cssVar == "object" &&
                    ((u = d.cssVar) === null || u === void 0
                      ? void 0
                      : u.key)) ||
                  v,
              }
            );
        return Object.assign(Object.assign(Object.assign({}, s), d), {
          token: Object.assign(Object.assign({}, s.token), d.token),
          components: c,
          cssVar: g,
        });
      },
      [d, s],
      (p, u) =>
        p.some((c, v) => {
          const g = u[v];
          return !(0, r.default)(c, g, !0);
        })
    );
  }
  return on;
}
var un = {};
const Uf = Pn(fc);
var al;
function Vf() {
  if (al) return un;
  (al = 1),
    Object.defineProperty(un, "__esModule", { value: !0 }),
    (un.default = a);
  var e = Uf,
    t = o(_.exports),
    r = In();
  function n(i) {
    if (typeof WeakMap != "function") return null;
    var l = new WeakMap(),
      f = new WeakMap();
    return (n = function (d) {
      return d ? f : l;
    })(i);
  }
  function o(i, l) {
    if (!l && i && i.__esModule) return i;
    if (i === null || (typeof i != "object" && typeof i != "function"))
      return { default: i };
    var f = n(l);
    if (f && f.has(i)) return f.get(i);
    var d = { __proto__: null },
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var b in i)
      if (b !== "default" && Object.prototype.hasOwnProperty.call(i, b)) {
        var p = s ? Object.getOwnPropertyDescriptor(i, b) : null;
        p && (p.get || p.set) ? Object.defineProperty(d, b, p) : (d[b] = i[b]);
      }
    return (d.default = i), f && f.set(i, d), d;
  }
  function a(i) {
    const { children: l } = i,
      [, f] = (0, r.useToken)(),
      { motion: d } = f,
      s = t.useRef(!1);
    return (
      (s.current = s.current || d === !1),
      s.current ? t.createElement(e.Provider, { motion: d }, l) : l
    );
  }
  return un;
}
var Sr = {},
  il;
function Xf() {
  if (il) return Sr;
  (il = 1),
    Object.defineProperty(Sr, "__esModule", { value: !0 }),
    (Sr.default = void 0),
    t(_.exports),
    qr();
  function e(r) {
    if (typeof WeakMap != "function") return null;
    var n = new WeakMap(),
      o = new WeakMap();
    return (e = function (a) {
      return a ? o : n;
    })(r);
  }
  function t(r, n) {
    if (!n && r && r.__esModule) return r;
    if (r === null || (typeof r != "object" && typeof r != "function"))
      return { default: r };
    var o = e(n);
    if (o && o.has(r)) return o.get(r);
    var a = { __proto__: null },
      i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var l in r)
      if (l !== "default" && Object.prototype.hasOwnProperty.call(r, l)) {
        var f = i ? Object.getOwnPropertyDescriptor(r, l) : null;
        f && (f.get || f.set) ? Object.defineProperty(a, l, f) : (a[l] = r[l]);
      }
    return (a.default = r), o && o.set(r, a), a;
  }
  return (Sr.default = () => null), Sr;
}
var So = {},
  ll;
function Gf() {
  return (
    ll ||
      ((ll = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.useResetIconStyle;
            },
          });
        var t = In();
      })(So)),
    So
  );
}
var sl;
function Is() {
  return (
    sl ||
      ((sl = 1),
      (function (e) {
        var t = U.exports;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "ConfigConsumer", {
            enumerable: !0,
            get: function () {
              return c.ConfigConsumer;
            },
          }),
          Object.defineProperty(e, "ConfigContext", {
            enumerable: !0,
            get: function () {
              return c.ConfigContext;
            },
          }),
          (e.default = e.configConsumerProps = void 0),
          Object.defineProperty(e, "defaultIconPrefixCls", {
            enumerable: !0,
            get: function () {
              return c.defaultIconPrefixCls;
            },
          }),
          (e.warnContext = e.globalConfig = e.defaultPrefixCls = void 0);
        var r = w(_.exports),
          n = lt,
          o = t(Jo()),
          a = t(ds()),
          i = cf(),
          l = w(qr()),
          f = t(df()),
          d = w(hf()),
          s = t(ra()),
          b = t(ta()),
          p = na(),
          u = t(Ar()),
          c = gs(),
          v = Mf(),
          g = bs(),
          m = t(Rf()),
          y = t(Kf()),
          h = t(Vf()),
          O = t(Xf()),
          S = w(ys()),
          $ = t(Gf());
        function x(k) {
          if (typeof WeakMap != "function") return null;
          var z = new WeakMap(),
            N = new WeakMap();
          return (x = function (q) {
            return q ? N : z;
          })(k);
        }
        function w(k, z) {
          if (!z && k && k.__esModule) return k;
          if (k === null || (typeof k != "object" && typeof k != "function"))
            return { default: k };
          var N = x(z);
          if (N && N.has(k)) return N.get(k);
          var q = { __proto__: null },
            Y = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var Q in k)
            if (Q !== "default" && Object.prototype.hasOwnProperty.call(k, Q)) {
              var te = Y ? Object.getOwnPropertyDescriptor(k, Q) : null;
              te && (te.get || te.set)
                ? Object.defineProperty(q, Q, te)
                : (q[Q] = k[Q]);
            }
          return (q.default = k), N && N.set(k, q), q;
        }
        var C = function (k, z) {
          var N = {};
          for (var q in k)
            Object.prototype.hasOwnProperty.call(k, q) &&
              z.indexOf(q) < 0 &&
              (N[q] = k[q]);
          if (k != null && typeof Object.getOwnPropertySymbols == "function")
            for (
              var Y = 0, q = Object.getOwnPropertySymbols(k);
              Y < q.length;
              Y++
            )
              z.indexOf(q[Y]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(k, q[Y]) &&
                (N[q[Y]] = k[q[Y]]);
          return N;
        };
        (e.warnContext = null),
          (e.configConsumerProps = [
            "getTargetContainer",
            "getPopupContainer",
            "rootPrefixCls",
            "getPrefixCls",
            "renderEmpty",
            "csp",
            "autoInsertSpaceInButton",
            "locale",
            "pageHeader",
          ]);
        const P = [
            "getTargetContainer",
            "getPopupContainer",
            "renderEmpty",
            "pageHeader",
            "input",
            "pagination",
            "form",
            "select",
            "button",
          ],
          M = (e.defaultPrefixCls = "ant");
        let I, R, j, D;
        function E() {
          return I || M;
        }
        function B() {
          return R || c.defaultIconPrefixCls;
        }
        function W(k) {
          return Object.keys(k).some((z) => z.endsWith("Color"));
        }
        const Z = (k) => {
            const {
              prefixCls: z,
              iconPrefixCls: N,
              theme: q,
              holderRender: Y,
            } = k;
            z !== void 0 && (I = z),
              N !== void 0 && (R = N),
              "holderRender" in k && (D = Y),
              q && (W(q) ? (0, v.registerTheme)(E(), q) : (j = q));
          },
          ee = () => ({
            getIconPrefixCls: B,
            getRootPrefixCls: () => I || E(),
            getTheme: () => j,
            holderRender: D,
          });
        e.globalConfig = ee;
        const G = (k) => {
            const {
                children: z,
                csp: N,
                autoInsertSpaceInButton: q,
                alert: Y,
                anchor: Q,
                form: te,
                locale: ne,
                componentSize: A,
                direction: X,
                space: le,
                virtual: he,
                dropdownMatchSelectWidth: ge,
                popupMatchSelectWidth: _e,
                popupOverflow: st,
                legacyLocale: be,
                parentContext: ye,
                iconPrefixCls: Ne,
                theme: fe,
                componentDisabled: ut,
                segmented: ze,
                statistic: Le,
                spin: Xe,
                calendar: pe,
                carousel: We,
                cascader: Ge,
                collapse: Me,
                typography: Te,
                checkbox: ce,
                descriptions: He,
                divider: Pe,
                drawer: Ye,
                skeleton: Ce,
                steps: Se,
                image: zt,
                layout: Qe,
                list: It,
                mentions: vt,
                modal: je,
                progress: gt,
                result: ct,
                slider: Tt,
                breadcrumb: dt,
                menu: we,
                pagination: L,
                input: V,
                empty: ie,
                badge: $e,
                radio: Ze,
                rate: jn,
                switch: Nr,
                transfer: jt,
                avatar: kn,
                message: Lt,
                tag: Je,
                table: zr,
                card: Lr,
                tabs: qn,
                timeline: Wr,
                timePicker: Dn,
                upload: Hr,
                notification: An,
                tree: En,
                colorPicker: Bn,
                datePicker: Nn,
                rangePicker: Fr,
                flex: mt,
                wave: Wt,
                dropdown: zn,
                warning: Ln,
              } = k,
              Wn = r.useCallback(
                (ue, H) => {
                  const { prefixCls: F } = k;
                  if (H) return H;
                  const K = F || ye.getPrefixCls("");
                  return ue ? `${K}-${ue}` : K;
                },
                [ye.getPrefixCls, k.prefixCls]
              ),
              ft = Ne || ye.iconPrefixCls || c.defaultIconPrefixCls,
              Fe = N || ye.csp;
            (0, $.default)(ft, Fe);
            const Ht = (0, y.default)(fe, ye.theme),
              Ft = {
                csp: Fe,
                autoInsertSpaceInButton: q,
                alert: Y,
                anchor: Q,
                locale: ne || be,
                direction: X,
                space: le,
                virtual: he,
                popupMatchSelectWidth: _e != null ? _e : ge,
                popupOverflow: st,
                getPrefixCls: Wn,
                iconPrefixCls: ft,
                theme: Ht,
                segmented: ze,
                statistic: Le,
                spin: Xe,
                calendar: pe,
                carousel: We,
                cascader: Ge,
                collapse: Me,
                typography: Te,
                checkbox: ce,
                descriptions: He,
                divider: Pe,
                drawer: Ye,
                skeleton: Ce,
                steps: Se,
                image: zt,
                input: V,
                layout: Qe,
                list: It,
                mentions: vt,
                modal: je,
                progress: gt,
                result: ct,
                slider: Tt,
                breadcrumb: dt,
                menu: we,
                pagination: L,
                empty: ie,
                badge: $e,
                radio: Ze,
                rate: jn,
                switch: Nr,
                transfer: jt,
                avatar: kn,
                message: Lt,
                tag: Je,
                table: zr,
                card: Lr,
                tabs: qn,
                timeline: Wr,
                timePicker: Dn,
                upload: Hr,
                notification: An,
                tree: En,
                colorPicker: Bn,
                datePicker: Nn,
                rangePicker: Fr,
                flex: mt,
                wave: Wt,
                dropdown: zn,
                warning: Ln,
              },
              kt = Object.assign({}, ye);
            Object.keys(Ft).forEach((ue) => {
              Ft[ue] !== void 0 && (kt[ue] = Ft[ue]);
            }),
              P.forEach((ue) => {
                const H = k[ue];
                H && (kt[ue] = H);
              });
            const et = (0, a.default)(
                () => kt,
                kt,
                (ue, H) => {
                  const F = Object.keys(ue),
                    K = Object.keys(H);
                  return (
                    F.length !== K.length || F.some((ve) => ue[ve] !== H[ve])
                  );
                }
              ),
              Hn = r.useMemo(() => ({ prefixCls: ft, csp: Fe }), [ft, Fe]);
            let de = r.createElement(
              r.Fragment,
              null,
              r.createElement(O.default, { dropdownMatchSelectWidth: ge }),
              z
            );
            const Kr = r.useMemo(() => {
              var ue, H, F, K;
              return (0, i.merge)(
                ((ue = b.default.Form) === null || ue === void 0
                  ? void 0
                  : ue.defaultValidateMessages) || {},
                ((F =
                  (H = et.locale) === null || H === void 0
                    ? void 0
                    : H.Form) === null || F === void 0
                  ? void 0
                  : F.defaultValidateMessages) || {},
                ((K = et.form) === null || K === void 0
                  ? void 0
                  : K.validateMessages) || {},
                (te == null ? void 0 : te.validateMessages) || {}
              );
            }, [et, te == null ? void 0 : te.validateMessages]);
            Object.keys(Kr).length > 0 &&
              (de = r.createElement(f.default.Provider, { value: Kr }, de)),
              ne &&
                (de = r.createElement(
                  d.default,
                  { locale: ne, _ANT_MARK__: d.ANT_MARK },
                  de
                )),
              (ft || Fe) &&
                (de = r.createElement(o.default.Provider, { value: Hn }, de)),
              A &&
                (de = r.createElement(S.SizeContextProvider, { size: A }, de)),
              (de = r.createElement(h.default, null, de));
            const Fn = r.useMemo(() => {
              const ue = Ht || {},
                { algorithm: H, token: F, components: K, cssVar: ve } = ue,
                Oe = C(ue, ["algorithm", "token", "components", "cssVar"]),
                ht =
                  H && (!Array.isArray(H) || H.length > 0)
                    ? (0, n.createTheme)(H)
                    : p.defaultTheme,
                bt = {};
              Object.entries(K || {}).forEach((Vr) => {
                let [Xr, yt] = Vr;
                const Re = Object.assign({}, yt);
                "algorithm" in Re &&
                  (Re.algorithm === !0
                    ? (Re.theme = ht)
                    : (Array.isArray(Re.algorithm) ||
                        typeof Re.algorithm == "function") &&
                      (Re.theme = (0, n.createTheme)(Re.algorithm)),
                  delete Re.algorithm),
                  (bt[Xr] = Re);
              });
              const Ur = Object.assign(Object.assign({}, u.default), F);
              return Object.assign(Object.assign({}, Oe), {
                theme: ht,
                token: Ur,
                components: bt,
                override: Object.assign({ override: Ur }, bt),
                cssVar: ve,
              });
            }, [Ht]);
            return (
              fe &&
                (de = r.createElement(
                  p.DesignTokenContext.Provider,
                  { value: Fn },
                  de
                )),
              et.warning &&
                (de = r.createElement(
                  l.WarningContext.Provider,
                  { value: et.warning },
                  de
                )),
              ut !== void 0 &&
                (de = r.createElement(
                  g.DisabledContextProvider,
                  { disabled: ut },
                  de
                )),
              r.createElement(c.ConfigContext.Provider, { value: et }, de)
            );
          },
          J = (k) => {
            const z = r.useContext(c.ConfigContext),
              N = r.useContext(s.default);
            return r.createElement(
              G,
              Object.assign({ parentContext: z, legacyLocale: N }, k)
            );
          };
        (J.ConfigContext = c.ConfigContext),
          (J.SizeContext = S.default),
          (J.config = Z),
          (J.useConfig = m.default),
          Object.defineProperty(J, "SizeContext", { get: () => S.default }),
          (e.default = J);
      })(oo)),
    oo
  );
}
var Or = {},
  ul;
function Ts() {
  if (ul) return Or;
  (ul = 1),
    Object.defineProperty(Or, "__esModule", { value: !0 }),
    (Or.LayoutContext = void 0);
  var e = r(_.exports);
  function t(n) {
    if (typeof WeakMap != "function") return null;
    var o = new WeakMap(),
      a = new WeakMap();
    return (t = function (i) {
      return i ? a : o;
    })(n);
  }
  function r(n, o) {
    if (!o && n && n.__esModule) return n;
    if (n === null || (typeof n != "object" && typeof n != "function"))
      return { default: n };
    var a = t(o);
    if (a && a.has(n)) return a.get(n);
    var i = { __proto__: null },
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var f in n)
      if (f !== "default" && Object.prototype.hasOwnProperty.call(n, f)) {
        var d = l ? Object.getOwnPropertyDescriptor(n, f) : null;
        d && (d.get || d.set) ? Object.defineProperty(i, f, d) : (i[f] = n[f]);
      }
    return (i.default = n), a && a.set(n, i), i;
  }
  return (
    (Or.LayoutContext = e.createContext({
      siderHook: { addSider: () => null, removeSider: () => null },
    })),
    Or
  );
}
var cn = {},
  dn = {},
  cl;
function Yf() {
  if (cl) return dn;
  cl = 1;
  var e = U.exports.default;
  Object.defineProperty(dn, "__esModule", { value: !0 }), (dn.default = n);
  var t = e(_.exports),
    r = Tu.exports;
  function n(o) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i = [];
    return (
      t.default.Children.forEach(o, function (l) {
        (l == null && !a.keepEmpty) ||
          (Array.isArray(l)
            ? (i = i.concat(n(l)))
            : (0, r.isFragment)(l) && l.props
            ? (i = i.concat(n(l.props.children, a)))
            : i.push(l));
      }),
      i
    );
  }
  return dn;
}
var wt = {},
  fn = { exports: {} },
  Oo = {},
  pn = {},
  dl;
function Qf() {
  if (dl) return pn;
  (dl = 1), Object.defineProperty(pn, "__esModule", { value: !0 });
  var e = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z",
          },
        },
      ],
    },
    name: "bars",
    theme: "outlined",
  };
  return (pn.default = e), pn;
}
var Po = {},
  wo = {},
  $o = {},
  Pr = {},
  fl;
function Zf() {
  if (fl) return Pr;
  (fl = 1),
    Object.defineProperty(Pr, "__esModule", { value: !0 }),
    (Pr.getShadowRoot = r),
    (Pr.inShadow = t);
  function e(n) {
    var o;
    return n == null || (o = n.getRootNode) === null || o === void 0
      ? void 0
      : o.call(n);
  }
  function t(n) {
    return e(n) instanceof ShadowRoot;
  }
  function r(n) {
    return t(n) ? e(n) : null;
  }
  return Pr;
}
var pl;
function la() {
  return (
    pl ||
      ((pl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        function t(x, w) {
          for (var C in w)
            Object.defineProperty(x, C, { enumerable: !0, get: w[C] });
        }
        t(e, {
          warning: function () {
            return c;
          },
          isIconDefinition: function () {
            return v;
          },
          normalizeAttrs: function () {
            return g;
          },
          generate: function () {
            return m;
          },
          getSecondaryColor: function () {
            return y;
          },
          normalizeTwoToneColors: function () {
            return h;
          },
          svgBaseProps: function () {
            return O;
          },
          iconStyles: function () {
            return S;
          },
          useInsertStyles: function () {
            return $;
          },
        });
        var r = Dr,
          n = hs(),
          o = Zf(),
          a = d(ea()),
          i = b(_.exports),
          l = d(Jo());
        function f(x, w, C) {
          return (
            w in x
              ? Object.defineProperty(x, w, {
                  value: C,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (x[w] = C),
            x
          );
        }
        function d(x) {
          return x && x.__esModule ? x : { default: x };
        }
        function s(x) {
          if (typeof WeakMap != "function") return null;
          var w = new WeakMap(),
            C = new WeakMap();
          return (s = function (P) {
            return P ? C : w;
          })(x);
        }
        function b(x, w) {
          if (!w && x && x.__esModule) return x;
          if (x === null || (typeof x != "object" && typeof x != "function"))
            return { default: x };
          var C = s(w);
          if (C && C.has(x)) return C.get(x);
          var P = {},
            M = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var I in x)
            if (I !== "default" && Object.prototype.hasOwnProperty.call(x, I)) {
              var R = M ? Object.getOwnPropertyDescriptor(x, I) : null;
              R && (R.get || R.set)
                ? Object.defineProperty(P, I, R)
                : (P[I] = x[I]);
            }
          return (P.default = x), C && C.set(x, P), P;
        }
        function p(x) {
          for (var w = 1; w < arguments.length; w++) {
            var C = arguments[w] != null ? arguments[w] : {},
              P = Object.keys(C);
            typeof Object.getOwnPropertySymbols == "function" &&
              (P = P.concat(
                Object.getOwnPropertySymbols(C).filter(function (M) {
                  return Object.getOwnPropertyDescriptor(C, M).enumerable;
                })
              )),
              P.forEach(function (M) {
                f(x, M, C[M]);
              });
          }
          return x;
        }
        function u(x) {
          return x.replace(/-(.)/g, function (w, C) {
            return C.toUpperCase();
          });
        }
        function c(x, w) {
          (0, a.default)(x, "[@ant-design/icons] ".concat(w));
        }
        function v(x) {
          return (
            typeof x == "object" &&
            typeof x.name == "string" &&
            typeof x.theme == "string" &&
            (typeof x.icon == "object" || typeof x.icon == "function")
          );
        }
        function g() {
          var x =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return Object.keys(x).reduce(function (w, C) {
            var P = x[C];
            switch (C) {
              case "class":
                (w.className = P), delete w.class;
                break;
              default:
                delete w[C], (w[u(C)] = P);
            }
            return w;
          }, {});
        }
        function m(x, w, C) {
          return C
            ? i.default.createElement(
                x.tag,
                p({ key: w }, g(x.attrs), C),
                (x.children || []).map(function (P, M) {
                  return m(P, "".concat(w, "-").concat(x.tag, "-").concat(M));
                })
              )
            : i.default.createElement(
                x.tag,
                p({ key: w }, g(x.attrs)),
                (x.children || []).map(function (P, M) {
                  return m(P, "".concat(w, "-").concat(x.tag, "-").concat(M));
                })
              );
        }
        function y(x) {
          return (0, r.generate)(x)[0];
        }
        function h(x) {
          return x ? (Array.isArray(x) ? x : [x]) : [];
        }
        var O = {
            width: "1em",
            height: "1em",
            fill: "currentColor",
            "aria-hidden": "true",
            focusable: "false",
          },
          S = `
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
          $ = function (x) {
            var w = (0, i.useContext)(l.default),
              C = w.csp,
              P = w.prefixCls,
              M = S;
            P && (M = M.replace(/anticon/g, P)),
              (0, i.useEffect)(function () {
                var I = x.current,
                  R = (0, o.getShadowRoot)(I);
                (0,
                n.updateCSS)(M, "@ant-design-icons", { prepend: !0, csp: C, attachTo: R });
              }, []);
          };
      })($o)),
    $o
  );
}
var vl;
function js() {
  return (
    vl ||
      ((vl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return v;
            },
          });
        var t = a(_.exports),
          r = la();
        function n(g, m, y) {
          return (
            m in g
              ? Object.defineProperty(g, m, {
                  value: y,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (g[m] = y),
            g
          );
        }
        function o(g) {
          if (typeof WeakMap != "function") return null;
          var m = new WeakMap(),
            y = new WeakMap();
          return (o = function (h) {
            return h ? y : m;
          })(g);
        }
        function a(g, m) {
          if (!m && g && g.__esModule) return g;
          if (g === null || (typeof g != "object" && typeof g != "function"))
            return { default: g };
          var y = o(m);
          if (y && y.has(g)) return y.get(g);
          var h = {},
            O = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var S in g)
            if (S !== "default" && Object.prototype.hasOwnProperty.call(g, S)) {
              var $ = O ? Object.getOwnPropertyDescriptor(g, S) : null;
              $ && ($.get || $.set)
                ? Object.defineProperty(h, S, $)
                : (h[S] = g[S]);
            }
          return (h.default = g), y && y.set(g, h), h;
        }
        function i(g) {
          for (var m = 1; m < arguments.length; m++) {
            var y = arguments[m] != null ? arguments[m] : {},
              h = Object.keys(y);
            typeof Object.getOwnPropertySymbols == "function" &&
              (h = h.concat(
                Object.getOwnPropertySymbols(y).filter(function (O) {
                  return Object.getOwnPropertyDescriptor(y, O).enumerable;
                })
              )),
              h.forEach(function (O) {
                n(g, O, y[O]);
              });
          }
          return g;
        }
        function l(g, m) {
          var y = Object.keys(g);
          if (Object.getOwnPropertySymbols) {
            var h = Object.getOwnPropertySymbols(g);
            m &&
              (h = h.filter(function (O) {
                return Object.getOwnPropertyDescriptor(g, O).enumerable;
              })),
              y.push.apply(y, h);
          }
          return y;
        }
        function f(g, m) {
          return (
            (m = m != null ? m : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(m))
              : l(Object(m)).forEach(function (y) {
                  Object.defineProperty(
                    g,
                    y,
                    Object.getOwnPropertyDescriptor(m, y)
                  );
                }),
            g
          );
        }
        function d(g, m) {
          if (g == null) return {};
          var y = s(g, m),
            h,
            O;
          if (Object.getOwnPropertySymbols) {
            var S = Object.getOwnPropertySymbols(g);
            for (O = 0; O < S.length; O++)
              (h = S[O]),
                !(m.indexOf(h) >= 0) &&
                  (!Object.prototype.propertyIsEnumerable.call(g, h) ||
                    (y[h] = g[h]));
          }
          return y;
        }
        function s(g, m) {
          if (g == null) return {};
          var y = {},
            h = Object.keys(g),
            O,
            S;
          for (S = 0; S < h.length; S++)
            (O = h[S]), !(m.indexOf(O) >= 0) && (y[O] = g[O]);
          return y;
        }
        var b = {
          primaryColor: "#333",
          secondaryColor: "#E6E6E6",
          calculated: !1,
        };
        function p(g) {
          var m = g.primaryColor,
            y = g.secondaryColor;
          (b.primaryColor = m),
            (b.secondaryColor = y || (0, r.getSecondaryColor)(m)),
            (b.calculated = !!y);
        }
        function u() {
          return i({}, b);
        }
        var c = function (g) {
          var m = g.icon,
            y = g.className,
            h = g.onClick,
            O = g.style,
            S = g.primaryColor,
            $ = g.secondaryColor,
            x = d(g, [
              "icon",
              "className",
              "onClick",
              "style",
              "primaryColor",
              "secondaryColor",
            ]),
            w = t.useRef(),
            C = b;
          if (
            (S &&
              (C = {
                primaryColor: S,
                secondaryColor: $ || (0, r.getSecondaryColor)(S),
              }),
            (0, r.useInsertStyles)(w),
            (0, r.warning)(
              (0, r.isIconDefinition)(m),
              "icon should be icon definiton, but got ".concat(m)
            ),
            !(0, r.isIconDefinition)(m))
          )
            return null;
          var P = m;
          return (
            P &&
              typeof P.icon == "function" &&
              (P = f(i({}, P), {
                icon: P.icon(C.primaryColor, C.secondaryColor),
              })),
            (0, r.generate)(
              P.icon,
              "svg-".concat(P.name),
              f(
                i(
                  {
                    className: y,
                    onClick: h,
                    style: O,
                    "data-icon": P.name,
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    "aria-hidden": "true",
                  },
                  x
                ),
                { ref: w }
              )
            )
          );
        };
        (c.displayName = "IconReact"),
          (c.getTwoToneColors = u),
          (c.setTwoToneColors = p);
        var v = c;
      })(wo)),
    wo
  );
}
var Mo = {},
  gl;
function Jf() {
  return (
    gl ||
      ((gl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        function t(u, c) {
          for (var v in c)
            Object.defineProperty(u, v, { enumerable: !0, get: c[v] });
        }
        t(e, {
          setTwoToneColor: function () {
            return b;
          },
          getTwoToneColor: function () {
            return p;
          },
        });
        var r = i(js()),
          n = la();
        function o(u, c) {
          (c == null || c > u.length) && (c = u.length);
          for (var v = 0, g = new Array(c); v < c; v++) g[v] = u[v];
          return g;
        }
        function a(u) {
          if (Array.isArray(u)) return u;
        }
        function i(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function l(u, c) {
          var v =
            u == null
              ? null
              : (typeof Symbol < "u" && u[Symbol.iterator]) || u["@@iterator"];
          if (v != null) {
            var g = [],
              m = !0,
              y = !1,
              h,
              O;
            try {
              for (
                v = v.call(u);
                !(m = (h = v.next()).done) &&
                (g.push(h.value), !(c && g.length === c));
                m = !0
              );
            } catch (S) {
              (y = !0), (O = S);
            } finally {
              try {
                !m && v.return != null && v.return();
              } finally {
                if (y) throw O;
              }
            }
            return g;
          }
        }
        function f() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function d(u, c) {
          return a(u) || l(u, c) || s(u, c) || f();
        }
        function s(u, c) {
          if (!!u) {
            if (typeof u == "string") return o(u, c);
            var v = Object.prototype.toString.call(u).slice(8, -1);
            if (
              (v === "Object" && u.constructor && (v = u.constructor.name),
              v === "Map" || v === "Set")
            )
              return Array.from(v);
            if (
              v === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)
            )
              return o(u, c);
          }
        }
        function b(u) {
          var c = d((0, n.normalizeTwoToneColors)(u), 2),
            v = c[0],
            g = c[1];
          return r.default.setTwoToneColors({
            primaryColor: v,
            secondaryColor: g,
          });
        }
        function p() {
          var u = r.default.getTwoToneColors();
          return u.calculated
            ? [u.primaryColor, u.secondaryColor]
            : u.primaryColor;
        }
      })(Mo)),
    Mo
  );
}
var ml;
function sa() {
  return (
    ml ||
      ((ml = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return w;
            },
          });
        var t = u(_.exports),
          r = b(ju.exports),
          n = Dr,
          o = b(Jo()),
          a = b(js()),
          i = Jf(),
          l = la();
        function f(C, P) {
          (P == null || P > C.length) && (P = C.length);
          for (var M = 0, I = new Array(P); M < P; M++) I[M] = C[M];
          return I;
        }
        function d(C) {
          if (Array.isArray(C)) return C;
        }
        function s(C, P, M) {
          return (
            P in C
              ? Object.defineProperty(C, P, {
                  value: M,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (C[P] = M),
            C
          );
        }
        function b(C) {
          return C && C.__esModule ? C : { default: C };
        }
        function p(C) {
          if (typeof WeakMap != "function") return null;
          var P = new WeakMap(),
            M = new WeakMap();
          return (p = function (I) {
            return I ? M : P;
          })(C);
        }
        function u(C, P) {
          if (!P && C && C.__esModule) return C;
          if (C === null || (typeof C != "object" && typeof C != "function"))
            return { default: C };
          var M = p(P);
          if (M && M.has(C)) return M.get(C);
          var I = {},
            R = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var j in C)
            if (j !== "default" && Object.prototype.hasOwnProperty.call(C, j)) {
              var D = R ? Object.getOwnPropertyDescriptor(C, j) : null;
              D && (D.get || D.set)
                ? Object.defineProperty(I, j, D)
                : (I[j] = C[j]);
            }
          return (I.default = C), M && M.set(C, I), I;
        }
        function c(C, P) {
          var M =
            C == null
              ? null
              : (typeof Symbol < "u" && C[Symbol.iterator]) || C["@@iterator"];
          if (M != null) {
            var I = [],
              R = !0,
              j = !1,
              D,
              E;
            try {
              for (
                M = M.call(C);
                !(R = (D = M.next()).done) &&
                (I.push(D.value), !(P && I.length === P));
                R = !0
              );
            } catch (B) {
              (j = !0), (E = B);
            } finally {
              try {
                !R && M.return != null && M.return();
              } finally {
                if (j) throw E;
              }
            }
            return I;
          }
        }
        function v() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function g(C) {
          for (var P = 1; P < arguments.length; P++) {
            var M = arguments[P] != null ? arguments[P] : {},
              I = Object.keys(M);
            typeof Object.getOwnPropertySymbols == "function" &&
              (I = I.concat(
                Object.getOwnPropertySymbols(M).filter(function (R) {
                  return Object.getOwnPropertyDescriptor(M, R).enumerable;
                })
              )),
              I.forEach(function (R) {
                s(C, R, M[R]);
              });
          }
          return C;
        }
        function m(C, P) {
          var M = Object.keys(C);
          if (Object.getOwnPropertySymbols) {
            var I = Object.getOwnPropertySymbols(C);
            P &&
              (I = I.filter(function (R) {
                return Object.getOwnPropertyDescriptor(C, R).enumerable;
              })),
              M.push.apply(M, I);
          }
          return M;
        }
        function y(C, P) {
          return (
            (P = P != null ? P : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(P))
              : m(Object(P)).forEach(function (M) {
                  Object.defineProperty(
                    C,
                    M,
                    Object.getOwnPropertyDescriptor(P, M)
                  );
                }),
            C
          );
        }
        function h(C, P) {
          if (C == null) return {};
          var M = O(C, P),
            I,
            R;
          if (Object.getOwnPropertySymbols) {
            var j = Object.getOwnPropertySymbols(C);
            for (R = 0; R < j.length; R++)
              (I = j[R]),
                !(P.indexOf(I) >= 0) &&
                  (!Object.prototype.propertyIsEnumerable.call(C, I) ||
                    (M[I] = C[I]));
          }
          return M;
        }
        function O(C, P) {
          if (C == null) return {};
          var M = {},
            I = Object.keys(C),
            R,
            j;
          for (j = 0; j < I.length; j++)
            (R = I[j]), !(P.indexOf(R) >= 0) && (M[R] = C[R]);
          return M;
        }
        function S(C, P) {
          return d(C) || c(C, P) || $(C, P) || v();
        }
        function $(C, P) {
          if (!!C) {
            if (typeof C == "string") return f(C, P);
            var M = Object.prototype.toString.call(C).slice(8, -1);
            if (
              (M === "Object" && C.constructor && (M = C.constructor.name),
              M === "Map" || M === "Set")
            )
              return Array.from(M);
            if (
              M === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)
            )
              return f(C, P);
          }
        }
        (0, i.setTwoToneColor)(n.blue.primary);
        var x = t.forwardRef(function (C, P) {
          var M = C.className,
            I = C.icon,
            R = C.spin,
            j = C.rotate,
            D = C.tabIndex,
            E = C.onClick,
            B = C.twoToneColor,
            W = h(C, [
              "className",
              "icon",
              "spin",
              "rotate",
              "tabIndex",
              "onClick",
              "twoToneColor",
            ]),
            Z = t.useContext(o.default),
            ee = Z.prefixCls,
            G = ee === void 0 ? "anticon" : ee,
            J = Z.rootClassName,
            k,
            z = (0, r.default)(
              J,
              G,
              ((k = {}),
              s(k, "".concat(G, "-").concat(I.name), !!I.name),
              s(k, "".concat(G, "-spin"), !!R || I.name === "loading"),
              k),
              M
            ),
            N = D;
          N === void 0 && E && (N = -1);
          var q = j
              ? {
                  msTransform: "rotate(".concat(j, "deg)"),
                  transform: "rotate(".concat(j, "deg)"),
                }
              : void 0,
            Y = S((0, l.normalizeTwoToneColors)(B), 2),
            Q = Y[0],
            te = Y[1];
          return t.createElement(
            "span",
            y(g({ role: "img", "aria-label": I.name }, W), {
              ref: P,
              tabIndex: N,
              onClick: E,
              className: z,
            }),
            t.createElement(a.default, {
              icon: I,
              primaryColor: Q,
              secondaryColor: te,
              style: q,
            })
          );
        });
        (x.displayName = "AntdIcon"),
          (x.getTwoToneColor = i.getTwoToneColor),
          (x.setTwoToneColor = i.setTwoToneColor);
        var w = x;
      })(Po)),
    Po
  );
}
var hl;
function ep() {
  return (
    hl ||
      ((hl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return p;
            },
          });
        var t = l(_.exports),
          r = a(Qf()),
          n = a(sa());
        function o(u, c, v) {
          return (
            c in u
              ? Object.defineProperty(u, c, {
                  value: v,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[c] = v),
            u
          );
        }
        function a(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function i(u) {
          if (typeof WeakMap != "function") return null;
          var c = new WeakMap(),
            v = new WeakMap();
          return (i = function (g) {
            return g ? v : c;
          })(u);
        }
        function l(u, c) {
          if (!c && u && u.__esModule) return u;
          if (u === null || (typeof u != "object" && typeof u != "function"))
            return { default: u };
          var v = i(c);
          if (v && v.has(u)) return v.get(u);
          var g = {},
            m = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var y in u)
            if (y !== "default" && Object.prototype.hasOwnProperty.call(u, y)) {
              var h = m ? Object.getOwnPropertyDescriptor(u, y) : null;
              h && (h.get || h.set)
                ? Object.defineProperty(g, y, h)
                : (g[y] = u[y]);
            }
          return (g.default = u), v && v.set(u, g), g;
        }
        function f(u) {
          for (var c = 1; c < arguments.length; c++) {
            var v = arguments[c] != null ? arguments[c] : {},
              g = Object.keys(v);
            typeof Object.getOwnPropertySymbols == "function" &&
              (g = g.concat(
                Object.getOwnPropertySymbols(v).filter(function (m) {
                  return Object.getOwnPropertyDescriptor(v, m).enumerable;
                })
              )),
              g.forEach(function (m) {
                o(u, m, v[m]);
              });
          }
          return u;
        }
        function d(u, c) {
          var v = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(u);
            c &&
              (g = g.filter(function (m) {
                return Object.getOwnPropertyDescriptor(u, m).enumerable;
              })),
              v.push.apply(v, g);
          }
          return v;
        }
        function s(u, c) {
          return (
            (c = c != null ? c : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c))
              : d(Object(c)).forEach(function (v) {
                  Object.defineProperty(
                    u,
                    v,
                    Object.getOwnPropertyDescriptor(c, v)
                  );
                }),
            u
          );
        }
        var b = function (u, c) {
            return t.createElement(
              n.default,
              s(f({}, u), { ref: c, icon: r.default })
            );
          },
          p = t.forwardRef(b);
      })(Oo)),
    Oo
  );
}
var bl;
function tp() {
  return (
    bl ||
      ((bl = 1),
      (function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        const r = n(ep());
        function n(a) {
          return a && a.__esModule ? a : { default: a };
        }
        const o = r;
        (t.default = o), (e.exports = o);
      })(fn, fn.exports)),
    fn.exports
  );
}
var vn = { exports: {} },
  Ro = {},
  gn = {},
  yl;
function rp() {
  if (yl) return gn;
  (yl = 1), Object.defineProperty(gn, "__esModule", { value: !0 });
  var e = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z",
          },
        },
      ],
    },
    name: "left",
    theme: "outlined",
  };
  return (gn.default = e), gn;
}
var Cl;
function np() {
  return (
    Cl ||
      ((Cl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return p;
            },
          });
        var t = l(_.exports),
          r = a(rp()),
          n = a(sa());
        function o(u, c, v) {
          return (
            c in u
              ? Object.defineProperty(u, c, {
                  value: v,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[c] = v),
            u
          );
        }
        function a(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function i(u) {
          if (typeof WeakMap != "function") return null;
          var c = new WeakMap(),
            v = new WeakMap();
          return (i = function (g) {
            return g ? v : c;
          })(u);
        }
        function l(u, c) {
          if (!c && u && u.__esModule) return u;
          if (u === null || (typeof u != "object" && typeof u != "function"))
            return { default: u };
          var v = i(c);
          if (v && v.has(u)) return v.get(u);
          var g = {},
            m = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var y in u)
            if (y !== "default" && Object.prototype.hasOwnProperty.call(u, y)) {
              var h = m ? Object.getOwnPropertyDescriptor(u, y) : null;
              h && (h.get || h.set)
                ? Object.defineProperty(g, y, h)
                : (g[y] = u[y]);
            }
          return (g.default = u), v && v.set(u, g), g;
        }
        function f(u) {
          for (var c = 1; c < arguments.length; c++) {
            var v = arguments[c] != null ? arguments[c] : {},
              g = Object.keys(v);
            typeof Object.getOwnPropertySymbols == "function" &&
              (g = g.concat(
                Object.getOwnPropertySymbols(v).filter(function (m) {
                  return Object.getOwnPropertyDescriptor(v, m).enumerable;
                })
              )),
              g.forEach(function (m) {
                o(u, m, v[m]);
              });
          }
          return u;
        }
        function d(u, c) {
          var v = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(u);
            c &&
              (g = g.filter(function (m) {
                return Object.getOwnPropertyDescriptor(u, m).enumerable;
              })),
              v.push.apply(v, g);
          }
          return v;
        }
        function s(u, c) {
          return (
            (c = c != null ? c : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c))
              : d(Object(c)).forEach(function (v) {
                  Object.defineProperty(
                    u,
                    v,
                    Object.getOwnPropertyDescriptor(c, v)
                  );
                }),
            u
          );
        }
        var b = function (u, c) {
            return t.createElement(
              n.default,
              s(f({}, u), { ref: c, icon: r.default })
            );
          },
          p = t.forwardRef(b);
      })(Ro)),
    Ro
  );
}
var xl;
function op() {
  return (
    xl ||
      ((xl = 1),
      (function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        const r = n(np());
        function n(a) {
          return a && a.__esModule ? a : { default: a };
        }
        const o = r;
        (t.default = o), (e.exports = o);
      })(vn, vn.exports)),
    vn.exports
  );
}
var mn = { exports: {} },
  Io = {},
  hn = {},
  _l;
function ap() {
  if (_l) return hn;
  (_l = 1), Object.defineProperty(hn, "__esModule", { value: !0 });
  var e = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z",
          },
        },
      ],
    },
    name: "right",
    theme: "outlined",
  };
  return (hn.default = e), hn;
}
var Sl;
function ip() {
  return (
    Sl ||
      ((Sl = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return p;
            },
          });
        var t = l(_.exports),
          r = a(ap()),
          n = a(sa());
        function o(u, c, v) {
          return (
            c in u
              ? Object.defineProperty(u, c, {
                  value: v,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[c] = v),
            u
          );
        }
        function a(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function i(u) {
          if (typeof WeakMap != "function") return null;
          var c = new WeakMap(),
            v = new WeakMap();
          return (i = function (g) {
            return g ? v : c;
          })(u);
        }
        function l(u, c) {
          if (!c && u && u.__esModule) return u;
          if (u === null || (typeof u != "object" && typeof u != "function"))
            return { default: u };
          var v = i(c);
          if (v && v.has(u)) return v.get(u);
          var g = {},
            m = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var y in u)
            if (y !== "default" && Object.prototype.hasOwnProperty.call(u, y)) {
              var h = m ? Object.getOwnPropertyDescriptor(u, y) : null;
              h && (h.get || h.set)
                ? Object.defineProperty(g, y, h)
                : (g[y] = u[y]);
            }
          return (g.default = u), v && v.set(u, g), g;
        }
        function f(u) {
          for (var c = 1; c < arguments.length; c++) {
            var v = arguments[c] != null ? arguments[c] : {},
              g = Object.keys(v);
            typeof Object.getOwnPropertySymbols == "function" &&
              (g = g.concat(
                Object.getOwnPropertySymbols(v).filter(function (m) {
                  return Object.getOwnPropertyDescriptor(v, m).enumerable;
                })
              )),
              g.forEach(function (m) {
                o(u, m, v[m]);
              });
          }
          return u;
        }
        function d(u, c) {
          var v = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(u);
            c &&
              (g = g.filter(function (m) {
                return Object.getOwnPropertyDescriptor(u, m).enumerable;
              })),
              v.push.apply(v, g);
          }
          return v;
        }
        function s(u, c) {
          return (
            (c = c != null ? c : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c))
              : d(Object(c)).forEach(function (v) {
                  Object.defineProperty(
                    u,
                    v,
                    Object.getOwnPropertyDescriptor(c, v)
                  );
                }),
            u
          );
        }
        var b = function (u, c) {
            return t.createElement(
              n.default,
              s(f({}, u), { ref: c, icon: r.default })
            );
          },
          p = t.forwardRef(b);
      })(Io)),
    Io
  );
}
var Ol;
function lp() {
  return (
    Ol ||
      ((Ol = 1),
      (function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        const r = n(ip());
        function n(a) {
          return a && a.__esModule ? a : { default: a };
        }
        const o = r;
        (t.default = o), (e.exports = o);
      })(mn, mn.exports)),
    mn.exports
  );
}
var wr = {},
  Pl;
function sp() {
  if (Pl) return wr;
  (Pl = 1),
    Object.defineProperty(wr, "__esModule", { value: !0 }),
    (wr.default = void 0);
  const e = (t) => !isNaN(parseFloat(t)) && isFinite(t);
  return (wr.default = e), wr;
}
var wl;
function up() {
  if (wl) return wt;
  wl = 1;
  var e = U.exports;
  Object.defineProperty(wt, "__esModule", { value: !0 }),
    (wt.default = wt.SiderContext = void 0);
  var t = p(_.exports),
    r = t,
    n = e(tp()),
    o = e(op()),
    a = e(lp()),
    i = e(jl.exports),
    l = e(cs()),
    f = e(sp()),
    d = Is(),
    s = Ts();
  function b(y) {
    if (typeof WeakMap != "function") return null;
    var h = new WeakMap(),
      O = new WeakMap();
    return (b = function (S) {
      return S ? O : h;
    })(y);
  }
  function p(y, h) {
    if (!h && y && y.__esModule) return y;
    if (y === null || (typeof y != "object" && typeof y != "function"))
      return { default: y };
    var O = b(h);
    if (O && O.has(y)) return O.get(y);
    var S = { __proto__: null },
      $ = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var x in y)
      if (x !== "default" && Object.prototype.hasOwnProperty.call(y, x)) {
        var w = $ ? Object.getOwnPropertyDescriptor(y, x) : null;
        w && (w.get || w.set) ? Object.defineProperty(S, x, w) : (S[x] = y[x]);
      }
    return (S.default = y), O && O.set(y, S), S;
  }
  var u = function (y, h) {
    var O = {};
    for (var S in y)
      Object.prototype.hasOwnProperty.call(y, S) &&
        h.indexOf(S) < 0 &&
        (O[S] = y[S]);
    if (y != null && typeof Object.getOwnPropertySymbols == "function")
      for (var $ = 0, S = Object.getOwnPropertySymbols(y); $ < S.length; $++)
        h.indexOf(S[$]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(y, S[$]) &&
          (O[S[$]] = y[S[$]]);
    return O;
  };
  const c = {
      xs: "479.98px",
      sm: "575.98px",
      md: "767.98px",
      lg: "991.98px",
      xl: "1199.98px",
      xxl: "1599.98px",
    },
    v = (wt.SiderContext = r.createContext({})),
    g = (() => {
      let y = 0;
      return function () {
        let h =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        return (y += 1), `${h}${y}`;
      };
    })(),
    m = r.forwardRef((y, h) => {
      const {
          prefixCls: O,
          className: S,
          trigger: $,
          children: x,
          defaultCollapsed: w = !1,
          theme: C = "dark",
          style: P = {},
          collapsible: M = !1,
          reverseArrow: I = !1,
          width: R = 200,
          collapsedWidth: j = 80,
          zeroWidthTriggerStyle: D,
          breakpoint: E,
          onCollapse: B,
          onBreakpoint: W,
        } = y,
        Z = u(y, [
          "prefixCls",
          "className",
          "trigger",
          "children",
          "defaultCollapsed",
          "theme",
          "style",
          "collapsible",
          "reverseArrow",
          "width",
          "collapsedWidth",
          "zeroWidthTriggerStyle",
          "breakpoint",
          "onCollapse",
          "onBreakpoint",
        ]),
        { siderHook: ee } = (0, t.useContext)(s.LayoutContext),
        [G, J] = (0, t.useState)("collapsed" in y ? y.collapsed : w),
        [k, z] = (0, t.useState)(!1);
      (0, t.useEffect)(() => {
        "collapsed" in y && J(y.collapsed);
      }, [y.collapsed]);
      const N = (A, X) => {
          "collapsed" in y || J(A), B == null || B(A, X);
        },
        q = (0, t.useRef)();
      (q.current = (A) => {
        z(A.matches),
          W == null || W(A.matches),
          G !== A.matches && N(A.matches, "responsive");
      }),
        (0, t.useEffect)(() => {
          function A(le) {
            return q.current(le);
          }
          let X;
          if (typeof window < "u") {
            const { matchMedia: le } = window;
            if (le && E && E in c) {
              X = le(`screen and (max-width: ${c[E]})`);
              try {
                X.addEventListener("change", A);
              } catch {
                X.addListener(A);
              }
              A(X);
            }
          }
          return () => {
            try {
              X == null || X.removeEventListener("change", A);
            } catch {
              X == null || X.removeListener(A);
            }
          };
        }, [E]),
        (0, t.useEffect)(() => {
          const A = g("ant-sider-");
          return ee.addSider(A), () => ee.removeSider(A);
        }, []);
      const Y = () => {
          N(!G, "clickTrigger");
        },
        { getPrefixCls: Q } = (0, t.useContext)(d.ConfigContext),
        te = () => {
          const A = Q("layout-sider", O),
            X = (0, l.default)(Z, ["collapsed"]),
            le = G ? j : R,
            he = (0, f.default)(le) ? `${le}px` : String(le),
            ge =
              parseFloat(String(j || 0)) === 0
                ? r.createElement(
                    "span",
                    {
                      onClick: Y,
                      className: (0, i.default)(
                        `${A}-zero-width-trigger`,
                        `${A}-zero-width-trigger-${I ? "right" : "left"}`
                      ),
                      style: D,
                    },
                    $ || r.createElement(n.default, null)
                  )
                : null,
            be = {
              expanded: I
                ? r.createElement(a.default, null)
                : r.createElement(o.default, null),
              collapsed: I
                ? r.createElement(o.default, null)
                : r.createElement(a.default, null),
            }[G ? "collapsed" : "expanded"],
            ye =
              $ !== null
                ? ge ||
                  r.createElement(
                    "div",
                    {
                      className: `${A}-trigger`,
                      onClick: Y,
                      style: { width: he },
                    },
                    $ || be
                  )
                : null,
            Ne = Object.assign(Object.assign({}, P), {
              flex: `0 0 ${he}`,
              maxWidth: he,
              minWidth: he,
              width: he,
            }),
            fe = (0, i.default)(
              A,
              `${A}-${C}`,
              {
                [`${A}-collapsed`]: !!G,
                [`${A}-has-trigger`]: M && $ !== null && !ge,
                [`${A}-below`]: !!k,
                [`${A}-zero-width`]: parseFloat(he) === 0,
              },
              S
            );
          return r.createElement(
            "aside",
            Object.assign({ className: fe }, X, { style: Ne, ref: h }),
            r.createElement("div", { className: `${A}-children` }, x),
            M || (k && ge) ? ye : null
          );
        },
        ne = r.useMemo(() => ({ siderCollapsed: G }), [G]);
      return r.createElement(v.Provider, { value: ne }, te());
    });
  return (wt.default = m), wt;
}
var $l;
function cp() {
  if ($l) return cn;
  $l = 1;
  var e = U.exports;
  Object.defineProperty(cn, "__esModule", { value: !0 }), (cn.default = n);
  var t = e(Yf()),
    r = e(up());
  function n(o, a, i) {
    return typeof i == "boolean"
      ? i
      : o.length
      ? !0
      : (0, t.default)(a).some((f) => f.type === r.default);
  }
  return cn;
}
var $t = {},
  $r = {},
  Ml;
function dp() {
  if (Ml) return $r;
  (Ml = 1),
    Object.defineProperty($r, "__esModule", { value: !0 }),
    ($r.default = void 0);
  const e = (t) => {
    const {
      componentCls: r,
      bodyBg: n,
      lightSiderBg: o,
      lightTriggerBg: a,
      lightTriggerColor: i,
    } = t;
    return {
      [`${r}-sider-light`]: {
        background: o,
        [`${r}-sider-trigger`]: { color: i, background: a },
        [`${r}-sider-zero-width-trigger`]: {
          color: i,
          background: a,
          border: `1px solid ${n}`,
          borderInlineStart: 0,
        },
      },
    };
  };
  return ($r.default = e), $r;
}
var Rl;
function fp() {
  if (Rl) return $t;
  Rl = 1;
  var e = U.exports;
  Object.defineProperty($t, "__esModule", { value: !0 }),
    ($t.prepareComponentToken = $t.default = void 0);
  var t = lt,
    r = In(),
    n = e(dp());
  const o = (i) => {
      const {
        antCls: l,
        componentCls: f,
        colorText: d,
        triggerColor: s,
        footerBg: b,
        triggerBg: p,
        headerHeight: u,
        headerPadding: c,
        headerColor: v,
        footerPadding: g,
        triggerHeight: m,
        zeroTriggerHeight: y,
        zeroTriggerWidth: h,
        motionDurationMid: O,
        motionDurationSlow: S,
        fontSize: $,
        borderRadius: x,
        bodyBg: w,
        headerBg: C,
        siderBg: P,
      } = i;
      return {
        [f]: Object.assign(
          Object.assign(
            {
              display: "flex",
              flex: "auto",
              flexDirection: "column",
              minHeight: 0,
              background: w,
              "&, *": { boxSizing: "border-box" },
              [`&${f}-has-sider`]: {
                flexDirection: "row",
                [`> ${f}, > ${f}-content`]: { width: 0 },
              },
              [`${f}-header, &${f}-footer`]: { flex: "0 0 auto" },
              [`${f}-sider`]: {
                position: "relative",
                minWidth: 0,
                background: P,
                transition: `all ${O}, background 0s`,
                "&-children": {
                  height: "100%",
                  marginTop: -0.1,
                  paddingTop: 0.1,
                  [`${l}-menu${l}-menu-inline-collapsed`]: { width: "auto" },
                },
                "&-has-trigger": { paddingBottom: m },
                "&-right": { order: 1 },
                "&-trigger": {
                  position: "fixed",
                  bottom: 0,
                  zIndex: 1,
                  height: m,
                  color: s,
                  lineHeight: (0, t.unit)(m),
                  textAlign: "center",
                  background: p,
                  cursor: "pointer",
                  transition: `all ${O}`,
                },
                "&-zero-width": {
                  "> *": { overflow: "hidden" },
                  "&-trigger": {
                    position: "absolute",
                    top: u,
                    insetInlineEnd: i.calc(h).mul(-1).equal(),
                    zIndex: 1,
                    width: h,
                    height: y,
                    color: s,
                    fontSize: i.fontSizeXL,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: P,
                    borderStartStartRadius: 0,
                    borderStartEndRadius: x,
                    borderEndEndRadius: x,
                    borderEndStartRadius: 0,
                    cursor: "pointer",
                    transition: `background ${S} ease`,
                    "&::after": {
                      position: "absolute",
                      inset: 0,
                      background: "transparent",
                      transition: `all ${S}`,
                      content: '""',
                    },
                    "&:hover::after": {
                      background: "rgba(255, 255, 255, 0.2)",
                    },
                    "&-right": {
                      insetInlineStart: i.calc(h).mul(-1).equal(),
                      borderStartStartRadius: x,
                      borderStartEndRadius: 0,
                      borderEndEndRadius: 0,
                      borderEndStartRadius: x,
                    },
                  },
                },
              },
            },
            (0, n.default)(i)
          ),
          { "&-rtl": { direction: "rtl" } }
        ),
        [`${f}-header`]: {
          height: u,
          padding: c,
          color: v,
          lineHeight: (0, t.unit)(u),
          background: C,
          [`${l}-menu`]: { lineHeight: "inherit" },
        },
        [`${f}-footer`]: { padding: g, color: d, fontSize: $, background: b },
        [`${f}-content`]: { flex: "auto", minHeight: 0 },
      };
    },
    a = (i) => {
      const {
          colorBgLayout: l,
          controlHeight: f,
          controlHeightLG: d,
          colorText: s,
          controlHeightSM: b,
          marginXXS: p,
          colorTextLightSolid: u,
          colorBgContainer: c,
        } = i,
        v = d * 1.25;
      return {
        colorBgHeader: "#001529",
        colorBgBody: l,
        colorBgTrigger: "#002140",
        bodyBg: l,
        headerBg: "#001529",
        headerHeight: f * 2,
        headerPadding: `0 ${v}px`,
        headerColor: s,
        footerPadding: `${b}px ${v}px`,
        footerBg: l,
        siderBg: "#001529",
        triggerHeight: d + p * 2,
        triggerBg: "#002140",
        triggerColor: u,
        zeroTriggerWidth: d,
        zeroTriggerHeight: d,
        lightSiderBg: c,
        lightTriggerBg: c,
        lightTriggerColor: s,
      };
    };
  return (
    ($t.prepareComponentToken = a),
    ($t.default = (0, r.genStyleHooks)("Layout", (i) => [o(i)], a, {
      deprecatedTokens: [
        ["colorBgBody", "bodyBg"],
        ["colorBgHeader", "headerBg"],
        ["colorBgTrigger", "triggerBg"],
      ],
    })),
    $t
  );
}
var ua,
  Br = U.exports;
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.default = ua = nt.Header = nt.Footer = nt.Content = void 0;
var pp = Br(ls()),
  ke = hp(_.exports),
  ks = Br(jl.exports),
  vp = Br(cs()),
  No = Is(),
  gp = Ts(),
  mp = Br(cp()),
  qs = Br(fp());
function Ds(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (Ds = function (n) {
    return n ? r : t;
  })(e);
}
function hp(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var r = Ds(t);
  if (r && r.has(e)) return r.get(e);
  var n = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, a, i) : (n[a] = e[a]);
    }
  return (n.default = e), r && r.set(e, n), n;
}
var As = function (e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]]);
  return r;
};
function Tn(e) {
  let { suffixCls: t, tagName: r, displayName: n } = e;
  return (o) =>
    ke.forwardRef((i, l) =>
      ke.createElement(
        o,
        Object.assign({ ref: l, suffixCls: t, tagName: r }, i)
      )
    );
}
const ca = ke.forwardRef((e, t) => {
    const { prefixCls: r, suffixCls: n, className: o, tagName: a } = e,
      i = As(e, ["prefixCls", "suffixCls", "className", "tagName"]),
      { getPrefixCls: l } = ke.useContext(No.ConfigContext),
      f = l("layout", r),
      [d, s, b] = (0, qs.default)(f),
      p = n ? `${f}-${n}` : f;
    return d(
      ke.createElement(
        a,
        Object.assign(
          { className: (0, ks.default)(r || p, o, s, b), ref: t },
          i
        )
      )
    );
  }),
  bp = ke.forwardRef((e, t) => {
    const { direction: r } = ke.useContext(No.ConfigContext),
      [n, o] = ke.useState([]),
      {
        prefixCls: a,
        className: i,
        rootClassName: l,
        children: f,
        hasSider: d,
        tagName: s,
        style: b,
      } = e,
      p = As(e, [
        "prefixCls",
        "className",
        "rootClassName",
        "children",
        "hasSider",
        "tagName",
        "style",
      ]),
      u = (0, vp.default)(p, ["suffixCls"]),
      { getPrefixCls: c, layout: v } = ke.useContext(No.ConfigContext),
      g = c("layout", a),
      m = (0, mp.default)(n, f, d),
      [y, h, O] = (0, qs.default)(g),
      S = (0, ks.default)(
        g,
        { [`${g}-has-sider`]: m, [`${g}-rtl`]: r === "rtl" },
        v == null ? void 0 : v.className,
        i,
        l,
        h,
        O
      ),
      $ = ke.useMemo(
        () => ({
          siderHook: {
            addSider: (x) => {
              o((w) => [].concat((0, pp.default)(w), [x]));
            },
            removeSider: (x) => {
              o((w) => w.filter((C) => C !== x));
            },
          },
        }),
        []
      );
    return y(
      ke.createElement(
        gp.LayoutContext.Provider,
        { value: $ },
        ke.createElement(
          s,
          Object.assign(
            {
              ref: t,
              className: S,
              style: Object.assign(
                Object.assign({}, v == null ? void 0 : v.style),
                b
              ),
            },
            u
          ),
          f
        )
      )
    );
  }),
  yp = Tn({ tagName: "div", displayName: "Layout" })(bp);
ua = nt.Header = Tn({
  suffixCls: "header",
  tagName: "header",
  displayName: "Header",
})(ca);
nt.Footer = Tn({
  suffixCls: "footer",
  tagName: "footer",
  displayName: "Footer",
})(ca);
nt.Content = Tn({
  suffixCls: "content",
  tagName: "main",
  displayName: "Content",
})(ca);
nt.default = yp;
const Cp = "/assets/logomark.69159e65.svg";
const xp = () => {
    const [e] = Du(),
      t = [
        {
          label: T("a", {
            href: "https://bit.ly/network3download",
            onClick: () => {
              e("click_download");
            },
            target: "_self",
            rel: "noopener noreferrer",
            children: "Download",
          }),
          key: "download",
        },
        {
          label: T("a", {
            href: "/document",
            onClick: () => {
              e("click_resource");
            },
            target: "_self",
            rel: "noopener noreferrer",
            children: "Resource",
          }),
          key: "resource",
        },
        {
          label: T("a", {
            href: "/news",
            target: "_self",
            rel: "noopener noreferrer",
            children: "News",
          }),
          key: "news",
        },
        {
          label: T("a", {
            href: "/blogs",
            target: "_self",
            rel: "noopener noreferrer",
            children: "Blog",
          }),
          key: "blog",
        },
        {
          label: T("a", {
            href: "https://medium.com/@network3",
            onClick: () => {
              e("click_medium");
            },
            target: "_self",
            rel: "noopener noreferrer",
            children: "Medium",
          }),
          key: "medium",
        },
        {
          label: T("a", {
            href: "/pool",
            onClick: () => {
              e("ip_pool");
            },
            target: "_self",
            rel: "noopener noreferrer",
            children: "IP Pool",
          }),
          key: "ip",
        },
        {
          label: T("a", {
            href: "/careers",
            onClick: () => {
              e("click_career");
            },
            target: "_self",
            rel: "noopener noreferrer",
            children: "Career",
          }),
          key: "career",
        },
        {
          label: T("a", {
            href: "https://account.network3.ai/register_page",
            onClick: () => {
              e("click_signup");
            },
            target: "_self",
            rel: "noopener noreferrer",
            children: "Sign Up",
          }),
          key: "signup",
        },
      ],
      r = [
        {
          label: T("a", {
            href: "https://account.network3.ai/register_page",
            onClick: () => {
              e("click_signup");
            },
            target: "_self",
            rel: "noopener noreferrer",
            children: "Sign Up",
          }),
          key: "signup",
        },
        {
          label: T("a", {
            href: "https://bit.ly/network3download",
            onClick: () => {
              e("click_download");
            },
            target: "_self",
            rel: "noopener noreferrer",
            children: "Download",
          }),
          key: "download",
        },
        {
          label: T("a", {
            href: "/document",
            onClick: () => {
              e("click_resource");
            },
            target: "_self",
            rel: "noopener noreferrer",
            children: "Resource",
          }),
          key: "resource",
        },
        {
          label: T("a", {
            href: "/news",
            target: "_self",
            rel: "noopener noreferrer",
            children: "News",
          }),
          key: "news",
        },
        {
          label: T("a", {
            href: "/blogs",
            target: "_self",
            rel: "noopener noreferrer",
            children: "Blog",
          }),
          key: "blog",
        },
        {
          label: T("a", {
            href: "https://medium.com/@network3",
            onClick: () => {
              e("click_medium");
            },
            target: "_self",
            rel: "noopener noreferrer",
            children: "Medium",
          }),
          key: "medium",
        },
        {
          label: T("a", {
            href: "/pool",
            onClick: () => {
              e("ip_pool");
            },
            target: "_self",
            rel: "noopener noreferrer",
            children: "IP Pool",
          }),
          key: "ip",
        },
        {
          label: T("a", {
            href: "/careers",
            onClick: () => {
              e("click_career");
            },
            target: "_self",
            rel: "noopener noreferrer",
            children: "Career",
          }),
          key: "career",
        },
      ];
    return (
      _.exports.useState(!1),
      T("div", {
        children: T(ku, {
          theme: {
            components: {
              Menu: {
                darkItemBg: "#00000000",
                activeBarHeight: 0,
                activeBarWidth: 0,
                activeBarBorderWidth: 0,
                fontSize: 16,
                darkPopupBg: "#2b363e",
                darkItemSelectedBg: "#25332D",
              },
            },
          },
          children: Ee(ua, {
            className: "topbar-header",
            children: [
              Ee(qu, {
                to: "/",
                className: "topbar-left",
                children: [
                  T("div", { className: "logo" }),
                  T("img", { src: Cp, alt: "Logomark", className: "Logomark" }),
                ],
              }),
              T("div", {
                className: "topbar-right-menu",
                children: T(Ra, {
                  mode: "horizontal",
                  theme: "dark",
                  items: t,
                }),
              }),
              T("div", {
                className: "topbar-right-menu-phone",
                children: T(Ra, {
                  mode: "horizontal",
                  theme: "dark",
                  items: r,
                }),
              }),
            ],
          }),
        }),
      })
    );
  },
  wp = xp;
export { xa as L, Pp as S, wp as T, Pd as a, Zo as b, Cp as c };
