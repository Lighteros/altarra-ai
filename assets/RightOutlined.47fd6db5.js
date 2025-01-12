import {
  v as it,
  aO as Zn,
  R as en,
  m as zt,
  aK as ko,
  r as s,
  p as we,
  aT as gn,
  J as Qn,
  B as tn,
  aU as Ho,
  g as Jn,
  y as rn,
  C as nn,
  c as Rt,
  j as N,
  L as fr,
  aJ as be,
  aV as Wo,
  aW as pn,
  x as Fo,
  n as on,
  q as Te,
  _ as pe,
  e as Xn,
  o as Yn,
  f as eo,
  h as to,
  K as $e,
  d as vr,
  aX as Ur,
  F as Uo,
  t as Bo,
  u as Br,
  a as Vo,
  w as hn,
  z as Ko,
  A as Go,
} from "./index.5783a347.js";
import { c as ro, R as no } from "./index.adbb0b1c.js";
function dr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = [];
  return (
    it.Children.forEach(e, function (n) {
      (n == null && !t.keepEmpty) ||
        (Array.isArray(n)
          ? (r = r.concat(dr(n)))
          : Zn.exports.isFragment(n) && n.props
          ? (r = r.concat(dr(n.props.children, t)))
          : r.push(n));
    }),
    r
  );
}
function mr(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function jr(e) {
  return mr(e) ? e : e instanceof it.Component ? en.findDOMNode(e) : null;
}
function oo(e, t) {
  typeof e == "function"
    ? e(t)
    : zt(e) === "object" && e && "current" in e && (e.current = t);
}
function ao() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function (o) {
    return o;
  });
  return n.length <= 1
    ? n[0]
    : function (o) {
        t.forEach(function (a) {
          oo(a, o);
        });
      };
}
function an() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return ko(
    function () {
      return ao.apply(void 0, t);
    },
    t,
    function (n, o) {
      return (
        n.length !== o.length ||
        n.every(function (a, i) {
          return a !== o[i];
        })
      );
    }
  );
}
function sn(e) {
  var t,
    r,
    n = Zn.exports.isMemo(e) ? e.type.type : e.type;
  return !(
    (typeof n == "function" &&
      !((t = n.prototype) !== null && t !== void 0 && t.render)) ||
    (typeof e == "function" &&
      !((r = e.prototype) !== null && r !== void 0 && r.render))
  );
}
var io = function (t) {
    return +setTimeout(t, 16);
  },
  so = function (t) {
    return clearTimeout(t);
  };
typeof window < "u" &&
  "requestAnimationFrame" in window &&
  ((io = function (t) {
    return window.requestAnimationFrame(t);
  }),
  (so = function (t) {
    return window.cancelAnimationFrame(t);
  }));
var yn = 0,
  un = new Map();
function uo(e) {
  un.delete(e);
}
var Vr = function (t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  yn += 1;
  var n = yn;
  function o(a) {
    if (a === 0) uo(n), t();
    else {
      var i = io(function () {
        o(a - 1);
      });
      un.set(n, i);
    }
  }
  return o(r), n;
};
Vr.cancel = function (e) {
  var t = un.get(e);
  return uo(e), so(t);
};
const gr = [
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
];
function He(e) {
  var t = s.exports.useRef();
  t.current = e;
  var r = s.exports.useCallback(function () {
    for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (n = t.current) === null || n === void 0
      ? void 0
      : n.call.apply(n, [t].concat(a));
  }, []);
  return r;
}
function bn(e) {
  var t = s.exports.useRef(!1),
    r = s.exports.useState(e),
    n = we(r, 2),
    o = n[0],
    a = n[1];
  s.exports.useEffect(function () {
    return (
      (t.current = !1),
      function () {
        t.current = !0;
      }
    );
  }, []);
  function i(u, c) {
    (c && t.current) || a(u);
  }
  return [o, i];
}
function kr(e) {
  return e !== void 0;
}
function qo(e, t) {
  var r = t || {},
    n = r.defaultValue,
    o = r.value,
    a = r.onChange,
    i = r.postState,
    u = bn(function () {
      return kr(o)
        ? o
        : kr(n)
        ? typeof n == "function"
          ? n()
          : n
        : typeof e == "function"
        ? e()
        : e;
    }),
    c = we(u, 2),
    l = c[0],
    m = c[1],
    f = o !== void 0 ? o : l,
    g = i ? i(f) : f,
    p = He(a),
    d = bn([f]),
    w = we(d, 2),
    h = w[0],
    C = w[1];
  gn(
    function () {
      var b = h[0];
      l !== b && p(l, b);
    },
    [h]
  ),
    gn(
      function () {
        kr(o) || m(o);
      },
      [o]
    );
  var S = He(function (b, v) {
    m(b, v), C([f], v);
  });
  return [g, S];
}
function Zo(e, t) {
  return gr.reduce((r, n) => {
    const o = e[`${n}1`],
      a = e[`${n}3`],
      i = e[`${n}6`],
      u = e[`${n}7`];
    return Object.assign(
      Object.assign({}, r),
      t(n, { lightColor: o, lightBorderColor: a, darkColor: i, textColor: u })
    );
  }, {});
}
const { isValidElement: cn } = Qn;
function Qo(e) {
  return e && cn(e) && e.type === s.exports.Fragment;
}
function Jo(e, t, r) {
  return cn(e)
    ? s.exports.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r)
    : t;
}
function Xo(e, t) {
  return Jo(e, e, t);
}
const Yo = (e) => {
    const [, , , , t] = tn();
    return t ? `${e}-css-var` : "";
  },
  Ns = Yo;
var x = {
  MAC_ENTER: 3,
  BACKSPACE: 8,
  TAB: 9,
  NUM_CENTER: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINT_SCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  QUESTION_MARK: 63,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  META: 91,
  WIN_KEY_RIGHT: 92,
  CONTEXT_MENU: 93,
  NUM_ZERO: 96,
  NUM_ONE: 97,
  NUM_TWO: 98,
  NUM_THREE: 99,
  NUM_FOUR: 100,
  NUM_FIVE: 101,
  NUM_SIX: 102,
  NUM_SEVEN: 103,
  NUM_EIGHT: 104,
  NUM_NINE: 105,
  NUM_MULTIPLY: 106,
  NUM_PLUS: 107,
  NUM_MINUS: 109,
  NUM_PERIOD: 110,
  NUM_DIVISION: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SEMICOLON: 186,
  DASH: 189,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  APOSTROPHE: 192,
  SINGLE_QUOTE: 222,
  OPEN_SQUARE_BRACKET: 219,
  BACKSLASH: 220,
  CLOSE_SQUARE_BRACKET: 221,
  WIN_KEY: 224,
  MAC_FF_META: 224,
  WIN_IME: 229,
  isTextModifyingKeyEvent: function (t) {
    var r = t.keyCode;
    if ((t.altKey && !t.ctrlKey) || t.metaKey || (r >= x.F1 && r <= x.F12))
      return !1;
    switch (r) {
      case x.ALT:
      case x.CAPS_LOCK:
      case x.CONTEXT_MENU:
      case x.CTRL:
      case x.DOWN:
      case x.END:
      case x.ESC:
      case x.HOME:
      case x.INSERT:
      case x.LEFT:
      case x.MAC_FF_META:
      case x.META:
      case x.NUMLOCK:
      case x.NUM_CENTER:
      case x.PAGE_DOWN:
      case x.PAGE_UP:
      case x.PAUSE:
      case x.PRINT_SCREEN:
      case x.RIGHT:
      case x.SHIFT:
      case x.UP:
      case x.WIN_KEY:
      case x.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  isCharacterKey: function (t) {
    if (
      (t >= x.ZERO && t <= x.NINE) ||
      (t >= x.NUM_ZERO && t <= x.NUM_MULTIPLY) ||
      (t >= x.A && t <= x.Z) ||
      (window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
    )
      return !0;
    switch (t) {
      case x.SPACE:
      case x.QUESTION_MARK:
      case x.NUM_PLUS:
      case x.NUM_MINUS:
      case x.NUM_PERIOD:
      case x.NUM_DIVISION:
      case x.SEMICOLON:
      case x.DASH:
      case x.EQUALS:
      case x.COMMA:
      case x.PERIOD:
      case x.SLASH:
      case x.APOSTROPHE:
      case x.SINGLE_QUOTE:
      case x.OPEN_SQUARE_BRACKET:
      case x.BACKSLASH:
      case x.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  },
};
const ea = it.createContext(void 0),
  co = ea,
  at = 100,
  ta = 10,
  ra = at * ta,
  lo = {
    Modal: at,
    Drawer: at,
    Popover: at,
    Popconfirm: at,
    Tooltip: at,
    Tour: at,
  },
  na = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1,
  };
function oa(e) {
  return e in lo;
}
function aa(e, t) {
  const [, r] = tn(),
    n = it.useContext(co),
    o = oa(e);
  if (t !== void 0) return [t, t];
  let a = n != null ? n : 0;
  return (
    o
      ? ((a += (n ? 0 : r.zIndexPopupBase) + lo[e]),
        (a = Math.min(a, r.zIndexPopupBase + ra)))
      : (a += na[e]),
    [n === void 0 ? t : a, a]
  );
}
const Hr = () => ({ height: 0, opacity: 0 }),
  wn = (e) => {
    const { scrollHeight: t } = e;
    return { height: t, opacity: 1 };
  },
  ia = (e) => ({ height: e ? e.offsetHeight : 0 }),
  Wr = (e, t) =>
    (t == null ? void 0 : t.deadline) === !0 || t.propertyName === "height",
  sa = function () {
    return {
      motionName: `${
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant"
      }-motion-collapse`,
      onAppearStart: Hr,
      onEnterStart: Hr,
      onAppearActive: wn,
      onEnterActive: wn,
      onLeaveStart: ia,
      onLeaveActive: Hr,
      onAppearEnd: Wr,
      onEnterEnd: Wr,
      onLeaveEnd: Wr,
      motionDeadline: 500,
    };
  },
  ua = (e, t, r) => (r !== void 0 ? r : `${e}-${t}`),
  Is = sa,
  ca = function (e) {
    if (!e) return !1;
    if (e instanceof Element) {
      if (e.offsetParent) return !0;
      if (e.getBBox) {
        var t = e.getBBox(),
          r = t.width,
          n = t.height;
        if (r || n) return !0;
      }
      if (e.getBoundingClientRect) {
        var o = e.getBoundingClientRect(),
          a = o.width,
          i = o.height;
        if (a || i) return !0;
      }
    }
    return !1;
  },
  la = (e) => {
    const t = it.useContext(Ho);
    return it.useMemo(
      () =>
        e
          ? typeof e == "string"
            ? e != null
              ? e
              : t
            : e instanceof Function
            ? e(t)
            : t
          : t,
      [e, t]
    );
  },
  fa = la,
  va = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        "&-block": { display: "flex", width: "100%" },
        "&-vertical": { flexDirection: "column" },
      },
    };
  },
  da = va,
  ma = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        display: "inline-flex",
        "&-rtl": { direction: "rtl" },
        "&-vertical": { flexDirection: "column" },
        "&-align": {
          flexDirection: "column",
          "&-center": { alignItems: "center" },
          "&-start": { alignItems: "flex-start" },
          "&-end": { alignItems: "flex-end" },
          "&-baseline": { alignItems: "baseline" },
        },
        [`${t}-item:empty`]: { display: "none" },
      },
    };
  },
  ga = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        "&-gap-row-small": { rowGap: e.spaceGapSmallSize },
        "&-gap-row-middle": { rowGap: e.spaceGapMiddleSize },
        "&-gap-row-large": { rowGap: e.spaceGapLargeSize },
        "&-gap-col-small": { columnGap: e.spaceGapSmallSize },
        "&-gap-col-middle": { columnGap: e.spaceGapMiddleSize },
        "&-gap-col-large": { columnGap: e.spaceGapLargeSize },
      },
    };
  },
  pa = Jn(
    "Space",
    (e) => {
      const t = rn(e, {
        spaceGapSmallSize: e.paddingXS,
        spaceGapMiddleSize: e.padding,
        spaceGapLargeSize: e.paddingLG,
      });
      return [ma(t), ga(t), da(t)];
    },
    () => ({}),
    { resetStyle: !1 }
  );
var fo =
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
const hr = s.exports.createContext(null),
  Ls = (e, t) => {
    const r = s.exports.useContext(hr),
      n = s.exports.useMemo(() => {
        if (!r) return "";
        const { compactDirection: o, isFirstItem: a, isLastItem: i } = r,
          u = o === "vertical" ? "-vertical-" : "-";
        return Rt(`${e}-compact${u}item`, {
          [`${e}-compact${u}first-item`]: a,
          [`${e}-compact${u}last-item`]: i,
          [`${e}-compact${u}item-rtl`]: t === "rtl",
        });
      }, [e, t, r]);
    return {
      compactSize: r == null ? void 0 : r.compactSize,
      compactDirection: r == null ? void 0 : r.compactDirection,
      compactItemClassnames: n,
    };
  },
  ha = (e) => {
    let { children: t } = e;
    return N(hr.Provider, { value: null, children: t });
  },
  ya = (e) => {
    var { children: t } = e,
      r = fo(e, ["children"]);
    return N(hr.Provider, { value: r, children: t });
  },
  ba = (e) => {
    const { getPrefixCls: t, direction: r } = s.exports.useContext(nn),
      {
        size: n,
        direction: o,
        block: a,
        prefixCls: i,
        className: u,
        rootClassName: c,
        children: l,
      } = e,
      m = fo(e, [
        "size",
        "direction",
        "block",
        "prefixCls",
        "className",
        "rootClassName",
        "children",
      ]),
      f = fa((b) => (n != null ? n : b)),
      g = t("space-compact", i),
      [p, d] = pa(g),
      w = Rt(
        g,
        d,
        {
          [`${g}-rtl`]: r === "rtl",
          [`${g}-block`]: a,
          [`${g}-vertical`]: o === "vertical",
        },
        u,
        c
      ),
      h = s.exports.useContext(hr),
      C = dr(l),
      S = s.exports.useMemo(
        () =>
          C.map((b, v) => {
            const R = (b && b.key) || `${g}-item-${v}`;
            return N(
              ya,
              {
                compactSize: f,
                compactDirection: o,
                isFirstItem:
                  v === 0 && (!h || (h == null ? void 0 : h.isFirstItem)),
                isLastItem:
                  v === C.length - 1 &&
                  (!h || (h == null ? void 0 : h.isLastItem)),
                children: b,
              },
              R
            );
          }),
        [n, C, h]
      );
    return C.length === 0
      ? null
      : p(N("div", { ...Object.assign({ className: w }, m), children: S }));
  },
  Ds = ba;
function wa(e) {
  if (Array.isArray(e)) return e;
}
function Sa(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      a,
      i,
      u = [],
      c = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (m) {
      (l = !0), (o = m);
    } finally {
      try {
        if (!c && r.return != null && ((i = r.return()), Object(i) !== i))
          return;
      } finally {
        if (l) throw o;
      }
    }
    return u;
  }
}
function Kr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vo(e, t) {
  if (!!e) {
    if (typeof e == "string") return Kr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Kr(e, t);
  }
}
function Ca() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xt(e, t) {
  return wa(e) || Sa(e, t) || vo(e, t) || Ca();
}
var mo = s.exports.createContext(null);
function xa(e) {
  if (Array.isArray(e)) return Kr(e);
}
function Ea(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Ra() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $a(e) {
  return xa(e) || Ea(e) || vo(e) || Ra();
}
var Sn = [];
function Ma(e, t) {
  var r = s.exports.useState(function () {
      if (!fr()) return null;
      var d = document.createElement("div");
      return d;
    }),
    n = xt(r, 1),
    o = n[0],
    a = s.exports.useRef(!1),
    i = s.exports.useContext(mo),
    u = s.exports.useState(Sn),
    c = xt(u, 2),
    l = c[0],
    m = c[1],
    f =
      i ||
      (a.current
        ? void 0
        : function (d) {
            m(function (w) {
              var h = [d].concat($a(w));
              return h;
            });
          });
  function g() {
    o.parentElement || document.body.appendChild(o), (a.current = !0);
  }
  function p() {
    var d;
    (d = o.parentElement) === null || d === void 0 || d.removeChild(o),
      (a.current = !1);
  }
  return (
    be(
      function () {
        return e ? (i ? i(g) : g()) : p(), p;
      },
      [e]
    ),
    be(
      function () {
        l.length &&
          (l.forEach(function (d) {
            return d();
          }),
          m(Sn));
      },
      [l]
    ),
    [o, f]
  );
}
var Fr;
function Pa(e) {
  if (typeof document > "u") return 0;
  if (e || Fr === void 0) {
    var t = document.createElement("div");
    (t.style.width = "100%"), (t.style.height = "200px");
    var r = document.createElement("div"),
      n = r.style;
    (n.position = "absolute"),
      (n.top = "0"),
      (n.left = "0"),
      (n.pointerEvents = "none"),
      (n.visibility = "hidden"),
      (n.width = "200px"),
      (n.height = "150px"),
      (n.overflow = "hidden"),
      r.appendChild(t),
      document.body.appendChild(r);
    var o = t.offsetWidth;
    r.style.overflow = "scroll";
    var a = t.offsetWidth;
    o === a && (a = r.clientWidth), document.body.removeChild(r), (Fr = o - a);
  }
  return Fr;
}
function Cn(e) {
  var t = e.match(/^(.*)px$/),
    r = Number(t == null ? void 0 : t[1]);
  return Number.isNaN(r) ? Pa() : r;
}
function Oa(e) {
  if (typeof document > "u" || !e || !(e instanceof Element))
    return { width: 0, height: 0 };
  var t = getComputedStyle(e, "::-webkit-scrollbar"),
    r = t.width,
    n = t.height;
  return { width: Cn(r), height: Cn(n) };
}
function _a() {
  return (
    document.body.scrollHeight >
      (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  );
}
var Ta = "rc-util-locker-".concat(Date.now()),
  xn = 0;
function Aa(e) {
  var t = !!e,
    r = s.exports.useState(function () {
      return (xn += 1), "".concat(Ta, "_").concat(xn);
    }),
    n = xt(r, 1),
    o = n[0];
  be(
    function () {
      if (t) {
        var a = Oa(document.body).width,
          i = _a();
        Wo(
          `
html body {
  overflow-y: hidden;
  `.concat(
            i ? "width: calc(100% - ".concat(a, "px);") : "",
            `
}`
          ),
          o
        );
      } else pn(o);
      return function () {
        pn(o);
      };
    },
    [t, o]
  );
}
var En = !1;
function Na(e) {
  return typeof e == "boolean" && (En = e), En;
}
var Rn = function (t) {
    return t === !1
      ? !1
      : !fr() || !t
      ? null
      : typeof t == "string"
      ? document.querySelector(t)
      : typeof t == "function"
      ? t()
      : t;
  },
  go = s.exports.forwardRef(function (e, t) {
    var r = e.open,
      n = e.autoLock,
      o = e.getContainer;
    e.debug;
    var a = e.autoDestroy,
      i = a === void 0 ? !0 : a,
      u = e.children,
      c = s.exports.useState(r),
      l = xt(c, 2),
      m = l[0],
      f = l[1],
      g = m || r;
    s.exports.useEffect(
      function () {
        (i || r) && f(r);
      },
      [r, i]
    );
    var p = s.exports.useState(function () {
        return Rn(o);
      }),
      d = xt(p, 2),
      w = d[0],
      h = d[1];
    s.exports.useEffect(function () {
      var E = Rn(o);
      h(E != null ? E : null);
    });
    var C = Ma(g && !w),
      S = xt(C, 2),
      b = S[0],
      v = S[1],
      R = w != null ? w : b;
    Aa(n && r && fr() && (R === b || R === document.body));
    var O = null;
    if (u && sn(u) && t) {
      var A = u;
      O = A.ref;
    }
    var I = an(O, t);
    if (!g || !fr() || w === void 0) return null;
    var F = R === !1 || Na(),
      _ = u;
    return (
      t && (_ = s.exports.cloneElement(u, { ref: I })),
      N(mo.Provider, {
        value: v,
        children: F ? _ : Fo.exports.createPortal(_, R),
      })
    );
  });
function Ia(e) {
  return e instanceof HTMLElement ? e : en.findDOMNode(e);
}
function La(e, t) {
  typeof e == "function"
    ? e(t)
    : zt(e) === "object" && e && "current" in e && (e.current = t);
}
function Da(e) {
  var t,
    r,
    n = on.exports.isMemo(e) ? e.type.type : e.type;
  return !(
    (typeof n == "function" &&
      !(!((t = n.prototype) === null || t === void 0) && t.render)) ||
    (typeof e == "function" &&
      !(!((r = e.prototype) === null || r === void 0) && r.render))
  );
}
function ln() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function $n(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit".concat(e)] = "webkit".concat(t)),
    (r["Moz".concat(e)] = "moz".concat(t)),
    (r["ms".concat(e)] = "MS".concat(t)),
    (r["O".concat(e)] = "o".concat(t.toLowerCase())),
    r
  );
}
function za(e, t) {
  var r = {
    animationend: $n("Animation", "AnimationEnd"),
    transitionend: $n("Transition", "TransitionEnd"),
  };
  return (
    e &&
      ("AnimationEvent" in t || delete r.animationend.animation,
      "TransitionEvent" in t || delete r.transitionend.transition),
    r
  );
}
var ja = za(ln(), typeof window < "u" ? window : {}),
  po = {};
if (ln()) {
  var ka = document.createElement("div");
  po = ka.style;
}
var ar = {};
function ho(e) {
  if (ar[e]) return ar[e];
  var t = ja[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var a = r[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in po)
        return (ar[e] = t[a]), ar[e];
    }
  return "";
}
var yo = ho("animationend"),
  bo = ho("transitionend"),
  Ha = !!(yo && bo),
  Mn = yo || "animationend",
  Pn = bo || "transitionend";
function On(e, t) {
  if (!e) return null;
  if (zt(e) === "object") {
    var r = t.replace(/-\w/g, function (n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
var wt = "none",
  ir = "appear",
  sr = "enter",
  ur = "leave",
  _n = "none",
  We = "prepare",
  St = "start",
  Ct = "active",
  fn = "end";
function lr(e) {
  var t = s.exports.useRef(!1),
    r = s.exports.useState(e),
    n = we(r, 2),
    o = n[0],
    a = n[1];
  s.exports.useEffect(function () {
    return (
      (t.current = !1),
      function () {
        t.current = !0;
      }
    );
  }, []);
  function i(u, c) {
    (c && t.current) || a(u);
  }
  return [o, i];
}
var wo = function (t) {
    return +setTimeout(t, 16);
  },
  So = function (t) {
    return clearTimeout(t);
  };
typeof window < "u" &&
  "requestAnimationFrame" in window &&
  ((wo = function (t) {
    return window.requestAnimationFrame(t);
  }),
  (So = function (t) {
    return window.cancelAnimationFrame(t);
  }));
var Tn = 0,
  vn = new Map();
function Co(e) {
  vn.delete(e);
}
var Gr = function (t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Tn += 1;
  var n = Tn;
  function o(a) {
    if (a === 0) Co(n), t();
    else {
      var i = wo(function () {
        o(a - 1);
      });
      vn.set(n, i);
    }
  }
  return o(r), n;
};
Gr.cancel = function (e) {
  var t = vn.get(e);
  return Co(t), So(t);
};
const Wa = function () {
  var e = s.exports.useRef(null);
  function t() {
    Gr.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = Gr(function () {
      o <= 1
        ? n({
            isCanceled: function () {
              return a !== e.current;
            },
          })
        : r(n, o - 1);
    });
    e.current = a;
  }
  return (
    s.exports.useEffect(function () {
      return function () {
        t();
      };
    }, []),
    [r, t]
  );
};
var xo = ln() ? s.exports.useLayoutEffect : s.exports.useEffect,
  An = [We, St, Ct, fn],
  Eo = !1,
  Fa = !0;
function Ro(e) {
  return e === Ct || e === fn;
}
const Ua = function (e, t) {
    var r = lr(_n),
      n = we(r, 2),
      o = n[0],
      a = n[1],
      i = Wa(),
      u = we(i, 2),
      c = u[0],
      l = u[1];
    function m() {
      a(We, !0);
    }
    return (
      xo(
        function () {
          if (o !== _n && o !== fn) {
            var f = An.indexOf(o),
              g = An[f + 1],
              p = t(o);
            p === Eo
              ? a(g, !0)
              : c(function (d) {
                  function w() {
                    d.isCanceled() || a(g, !0);
                  }
                  p === !0 ? w() : Promise.resolve(p).then(w);
                });
          }
        },
        [e, o]
      ),
      s.exports.useEffect(function () {
        return function () {
          l();
        };
      }, []),
      [m, o]
    );
  },
  Ba = function (e) {
    var t = s.exports.useRef(),
      r = s.exports.useRef(e);
    r.current = e;
    var n = s.exports.useCallback(function (i) {
      r.current(i);
    }, []);
    function o(i) {
      i && (i.removeEventListener(Pn, n), i.removeEventListener(Mn, n));
    }
    function a(i) {
      t.current && t.current !== i && o(t.current),
        i &&
          i !== t.current &&
          (i.addEventListener(Pn, n),
          i.addEventListener(Mn, n),
          (t.current = i));
    }
    return (
      s.exports.useEffect(function () {
        return function () {
          o(t.current);
        };
      }, []),
      [a, o]
    );
  };
function Va(e, t, r, n) {
  var o = n.motionEnter,
    a = o === void 0 ? !0 : o,
    i = n.motionAppear,
    u = i === void 0 ? !0 : i,
    c = n.motionLeave,
    l = c === void 0 ? !0 : c,
    m = n.motionDeadline,
    f = n.motionLeaveImmediately,
    g = n.onAppearPrepare,
    p = n.onEnterPrepare,
    d = n.onLeavePrepare,
    w = n.onAppearStart,
    h = n.onEnterStart,
    C = n.onLeaveStart,
    S = n.onAppearActive,
    b = n.onEnterActive,
    v = n.onLeaveActive,
    R = n.onAppearEnd,
    O = n.onEnterEnd,
    A = n.onLeaveEnd,
    I = n.onVisibleChanged,
    F = lr(),
    _ = we(F, 2),
    E = _[0],
    U = _[1],
    B = lr(wt),
    j = we(B, 2),
    k = j[0],
    H = j[1],
    L = lr(null),
    P = we(L, 2),
    ee = P[0],
    W = P[1],
    ae = s.exports.useRef(!1),
    re = s.exports.useRef(null);
  function Se() {
    return r();
  }
  var Me = s.exports.useRef(!1);
  function ue(T) {
    var D = Se();
    if (!(T && !T.deadline && T.target !== D)) {
      var $ = Me.current,
        de;
      k === ir && $
        ? (de = R == null ? void 0 : R(D, T))
        : k === sr && $
        ? (de = O == null ? void 0 : O(D, T))
        : k === ur && $ && (de = A == null ? void 0 : A(D, T)),
        k !== wt && $ && de !== !1 && (H(wt, !0), W(null, !0));
    }
  }
  var ce = Ba(ue),
    le = we(ce, 1),
    V = le[0],
    K = s.exports.useMemo(
      function () {
        var T, D, $;
        switch (k) {
          case ir:
            return (T = {}), Te(T, We, g), Te(T, St, w), Te(T, Ct, S), T;
          case sr:
            return (D = {}), Te(D, We, p), Te(D, St, h), Te(D, Ct, b), D;
          case ur:
            return ($ = {}), Te($, We, d), Te($, St, C), Te($, Ct, v), $;
          default:
            return {};
        }
      },
      [k]
    ),
    ie = Ua(k, function (T) {
      if (T === We) {
        var D = K[We];
        return D ? D(Se()) : Eo;
      }
      if (ve in K) {
        var $;
        W(
          (($ = K[ve]) === null || $ === void 0
            ? void 0
            : $.call(K, Se(), null)) || null
        );
      }
      return (
        ve === Ct &&
          (V(Se()),
          m > 0 &&
            (clearTimeout(re.current),
            (re.current = setTimeout(function () {
              ue({ deadline: !0 });
            }, m)))),
        Fa
      );
    }),
    te = we(ie, 2),
    Ae = te[0],
    ve = te[1],
    Q = Ro(ve);
  (Me.current = Q),
    xo(
      function () {
        U(t);
        var T = ae.current;
        if (((ae.current = !0), !!e)) {
          var D;
          !T && t && u && (D = ir),
            T && t && a && (D = sr),
            ((T && !t && l) || (!T && f && !t && l)) && (D = ur),
            D && (H(D), Ae());
        }
      },
      [t]
    ),
    s.exports.useEffect(
      function () {
        ((k === ir && !u) || (k === sr && !a) || (k === ur && !l)) && H(wt);
      },
      [u, a, l]
    ),
    s.exports.useEffect(function () {
      return function () {
        (ae.current = !1), clearTimeout(re.current);
      };
    }, []);
  var Ce = s.exports.useRef(!1);
  s.exports.useEffect(
    function () {
      E && (Ce.current = !0),
        E !== void 0 &&
          k === wt &&
          ((Ce.current || E) && (I == null || I(E)), (Ce.current = !0));
    },
    [E, k]
  );
  var se = ee;
  return (
    K[We] && ve === St && (se = pe({ transition: "none" }, se)),
    [k, ve, se, E != null ? E : t]
  );
}
var Ka = (function (e) {
  Xn(r, e);
  var t = Yn(r);
  function r() {
    return eo(this, r), t.apply(this, arguments);
  }
  return (
    to(r, [
      {
        key: "render",
        value: function () {
          return this.props.children;
        },
      },
    ]),
    r
  );
})(s.exports.Component);
function Ga(e) {
  var t = e;
  zt(e) === "object" && (t = e.transitionSupport);
  function r(o) {
    return !!(o.motionName && t);
  }
  var n = s.exports.forwardRef(function (o, a) {
    var i = o.visible,
      u = i === void 0 ? !0 : i,
      c = o.removeOnLeave,
      l = c === void 0 ? !0 : c,
      m = o.forceRender,
      f = o.children,
      g = o.motionName,
      p = o.leavedClassName,
      d = o.eventProps,
      w = r(o),
      h = s.exports.useRef(),
      C = s.exports.useRef();
    function S() {
      try {
        return h.current instanceof HTMLElement ? h.current : Ia(C.current);
      } catch {
        return null;
      }
    }
    var b = Va(w, u, S, o),
      v = we(b, 4),
      R = v[0],
      O = v[1],
      A = v[2],
      I = v[3],
      F = s.exports.useRef(I);
    I && (F.current = !0);
    var _ = s.exports.useCallback(
        function (L) {
          (h.current = L), La(a, L);
        },
        [a]
      ),
      E,
      U = pe(pe({}, d), {}, { visible: u });
    if (!f) E = null;
    else if (R === wt || !r(o))
      I
        ? (E = f(pe({}, U), _))
        : !l && F.current
        ? (E = f(pe(pe({}, U), {}, { className: p }), _))
        : m
        ? (E = f(pe(pe({}, U), {}, { style: { display: "none" } }), _))
        : (E = null);
    else {
      var B, j;
      O === We
        ? (j = "prepare")
        : Ro(O)
        ? (j = "active")
        : O === St && (j = "start"),
        (E = f(
          pe(
            pe({}, U),
            {},
            {
              className: ro(
                On(g, R),
                ((B = {}),
                Te(B, On(g, "".concat(R, "-").concat(j)), j),
                Te(B, g, typeof g == "string"),
                B)
              ),
              style: A,
            }
          ),
          _
        ));
    }
    if (s.exports.isValidElement(E) && Da(E)) {
      var k = E,
        H = k.ref;
      H || (E = s.exports.cloneElement(E, { ref: _ }));
    }
    return N(Ka, { ref: C, children: E });
  });
  return (n.displayName = "CSSMotion"), n;
}
const $o = Ga(Ha),
  qa = (e) => ({ animationDuration: e, animationFillMode: "both" }),
  Za = (e) => ({ animationDuration: e, animationFillMode: "both" }),
  Qa = function (e, t, r, n) {
    const a = (
      arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
    )
      ? "&"
      : "";
    return {
      [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: Object.assign(Object.assign({}, qa(n)), {
        animationPlayState: "paused",
      }),
      [`${a}${e}-leave`]: Object.assign(Object.assign({}, Za(n)), {
        animationPlayState: "paused",
      }),
      [`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: "running" },
      [`${a}${e}-leave${e}-leave-active`]: {
        animationName: r,
        animationPlayState: "running",
        pointerEvents: "none",
      },
    };
  },
  Ja = new $e("antZoomIn", {
    "0%": { transform: "scale(0.2)", opacity: 0 },
    "100%": { transform: "scale(1)", opacity: 1 },
  }),
  Xa = new $e("antZoomOut", {
    "0%": { transform: "scale(1)" },
    "100%": { transform: "scale(0.2)", opacity: 0 },
  }),
  Nn = new $e("antZoomBigIn", {
    "0%": { transform: "scale(0.8)", opacity: 0 },
    "100%": { transform: "scale(1)", opacity: 1 },
  }),
  In = new $e("antZoomBigOut", {
    "0%": { transform: "scale(1)" },
    "100%": { transform: "scale(0.8)", opacity: 0 },
  }),
  Ya = new $e("antZoomUpIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "50% 0%" },
  }),
  ei = new $e("antZoomUpOut", {
    "0%": { transform: "scale(1)", transformOrigin: "50% 0%" },
    "100%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 },
  }),
  ti = new $e("antZoomLeftIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "0% 50%" },
  }),
  ri = new $e("antZoomLeftOut", {
    "0%": { transform: "scale(1)", transformOrigin: "0% 50%" },
    "100%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 },
  }),
  ni = new $e("antZoomRightIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "100% 50%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "100% 50%" },
  }),
  oi = new $e("antZoomRightOut", {
    "0%": { transform: "scale(1)", transformOrigin: "100% 50%" },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "100% 50%",
      opacity: 0,
    },
  }),
  ai = new $e("antZoomDownIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "50% 100%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "50% 100%" },
  }),
  ii = new $e("antZoomDownOut", {
    "0%": { transform: "scale(1)", transformOrigin: "50% 100%" },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 100%",
      opacity: 0,
    },
  }),
  si = {
    zoom: { inKeyframes: Ja, outKeyframes: Xa },
    "zoom-big": { inKeyframes: Nn, outKeyframes: In },
    "zoom-big-fast": { inKeyframes: Nn, outKeyframes: In },
    "zoom-left": { inKeyframes: ti, outKeyframes: ri },
    "zoom-right": { inKeyframes: ni, outKeyframes: oi },
    "zoom-up": { inKeyframes: Ya, outKeyframes: ei },
    "zoom-down": { inKeyframes: ai, outKeyframes: ii },
  },
  ui = (e, t) => {
    const { antCls: r } = e,
      n = `${r}-${t}`,
      { inKeyframes: o, outKeyframes: a } = si[t];
    return [
      Qa(
        n,
        o,
        a,
        t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid
      ),
      {
        [`
        ${n}-enter,
        ${n}-appear
      `]: {
          transform: "scale(0)",
          opacity: 0,
          animationTimingFunction: e.motionEaseOutCirc,
          "&-prepare": { transform: "none" },
        },
        [`${n}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ];
  },
  ci = (e) => ({
    [e.componentCls]: {
      [`${e.antCls}-motion-collapse-legacy`]: {
        overflow: "hidden",
        "&-active": {
          transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
        },
      },
      [`${e.antCls}-motion-collapse`]: {
        overflow: "hidden",
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
      },
    },
  }),
  zs = ci;
function qr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = [];
  return (
    it.Children.forEach(e, function (n) {
      (n == null && !t.keepEmpty) ||
        (Array.isArray(n)
          ? (r = r.concat(qr(n)))
          : on.exports.isFragment(n) && n.props
          ? (r = r.concat(qr(n.props.children, t)))
          : r.push(n));
    }),
    r
  );
}
function li(e, t) {
  typeof e == "function"
    ? e(t)
    : zt(e) === "object" && e && "current" in e && (e.current = t);
}
function fi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function (o) {
    return o;
  });
  return n.length <= 1
    ? n[0]
    : function (o) {
        t.forEach(function (a) {
          li(a, o);
        });
      };
}
function vi(e) {
  var t,
    r,
    n = on.exports.isMemo(e) ? e.type.type : e.type;
  return !(
    (typeof n == "function" &&
      !(!((t = n.prototype) === null || t === void 0) && t.render)) ||
    (typeof e == "function" &&
      !(!((r = e.prototype) === null || r === void 0) && r.render))
  );
}
function Ln(e) {
  return e instanceof HTMLElement ? e : en.findDOMNode(e);
}
var Ze = new Map();
function di(e) {
  e.forEach(function (t) {
    var r,
      n = t.target;
    (r = Ze.get(n)) === null ||
      r === void 0 ||
      r.forEach(function (o) {
        return o(n);
      });
  });
}
var Mo = new no(di);
function mi(e, t) {
  Ze.has(e) || (Ze.set(e, new Set()), Mo.observe(e)), Ze.get(e).add(t);
}
function gi(e, t) {
  Ze.has(e) &&
    (Ze.get(e).delete(t), Ze.get(e).size || (Mo.unobserve(e), Ze.delete(e)));
}
var pi = (function (e) {
    Xn(r, e);
    var t = Yn(r);
    function r() {
      return eo(this, r), t.apply(this, arguments);
    }
    return (
      to(r, [
        {
          key: "render",
          value: function () {
            return this.props.children;
          },
        },
      ]),
      r
    );
  })(s.exports.Component),
  Zr = s.exports.createContext(null);
function hi(e) {
  var t = e.children,
    r = e.onBatchResize,
    n = s.exports.useRef(0),
    o = s.exports.useRef([]),
    a = s.exports.useContext(Zr),
    i = s.exports.useCallback(
      function (u, c, l) {
        n.current += 1;
        var m = n.current;
        o.current.push({ size: u, element: c, data: l }),
          Promise.resolve().then(function () {
            m === n.current && (r == null || r(o.current), (o.current = []));
          }),
          a == null || a(u, c, l);
      },
      [r, a]
    );
  return N(Zr.Provider, { value: i, children: t });
}
function yi(e) {
  var t = e.children,
    r = e.disabled,
    n = s.exports.useRef(null),
    o = s.exports.useRef(null),
    a = s.exports.useContext(Zr),
    i = typeof t == "function",
    u = i ? t(n) : t,
    c = s.exports.useRef({
      width: -1,
      height: -1,
      offsetWidth: -1,
      offsetHeight: -1,
    }),
    l = !i && s.exports.isValidElement(u) && vi(u),
    m = l ? u.ref : null,
    f = s.exports.useMemo(
      function () {
        return fi(m, n);
      },
      [m, n]
    ),
    g = s.exports.useRef(e);
  g.current = e;
  var p = s.exports.useCallback(function (d) {
    var w = g.current,
      h = w.onResize,
      C = w.data,
      S = d.getBoundingClientRect(),
      b = S.width,
      v = S.height,
      R = d.offsetWidth,
      O = d.offsetHeight,
      A = Math.floor(b),
      I = Math.floor(v);
    if (
      c.current.width !== A ||
      c.current.height !== I ||
      c.current.offsetWidth !== R ||
      c.current.offsetHeight !== O
    ) {
      var F = { width: A, height: I, offsetWidth: R, offsetHeight: O };
      c.current = F;
      var _ = R === Math.round(b) ? b : R,
        E = O === Math.round(v) ? v : O,
        U = pe(pe({}, F), {}, { offsetWidth: _, offsetHeight: E });
      a == null || a(U, d, C),
        h &&
          Promise.resolve().then(function () {
            h(U, d);
          });
    }
  }, []);
  return (
    s.exports.useEffect(
      function () {
        var d = Ln(n.current) || Ln(o.current);
        return (
          d && !r && mi(d, p),
          function () {
            return gi(d, p);
          }
        );
      },
      [n.current, r]
    ),
    N(pi, { ref: o, children: l ? s.exports.cloneElement(u, { ref: f }) : u })
  );
}
var bi = "rc-observer-key";
function wi(e) {
  var t = e.children,
    r = typeof t == "function" ? [t] : qr(t);
  return r.map(function (n, o) {
    var a = (n == null ? void 0 : n.key) || "".concat(bi, "-").concat(o);
    return s.exports.createElement(yi, { ...e, key: a }, n);
  });
}
wi.Collection = hi;
function st(e) {
  return (
    (st =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    st(e)
  );
}
function Si(e, t) {
  if (st(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (st(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Po(e) {
  var t = Si(e, "string");
  return st(t) == "symbol" ? t : String(t);
}
function Ci(e, t, r) {
  return (
    (t = Po(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Dn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dn(Object(r), !0).forEach(function (n) {
          Ci(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Dn(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function xi(e) {
  if (Array.isArray(e)) return e;
}
function Ei(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      a,
      i,
      u = [],
      c = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (m) {
      (l = !0), (o = m);
    } finally {
      try {
        if (!c && r.return != null && ((i = r.return()), Object(i) !== i))
          return;
      } finally {
        if (l) throw o;
      }
    }
    return u;
  }
}
function Qr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Oo(e, t) {
  if (!!e) {
    if (typeof e == "string") return Qr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Qr(e, t);
  }
}
function Ri() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y(e, t) {
  return xi(e) || Ei(e, t) || Oo(e, t) || Ri();
}
function $i(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    a;
  for (a = 0; a < n.length; a++)
    (o = n[a]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Mi(e, t) {
  if (e == null) return {};
  var r = $i(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      (n = a[o]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
var _o = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function r() {
      for (var a = "", i = 0; i < arguments.length; i++) {
        var u = arguments[i];
        u && (a = o(a, n(u)));
      }
      return a;
    }
    function n(a) {
      if (typeof a == "string" || typeof a == "number") return a;
      if (typeof a != "object") return "";
      if (Array.isArray(a)) return r.apply(null, a);
      if (
        a.toString !== Object.prototype.toString &&
        !a.toString.toString().includes("[native code]")
      )
        return a.toString();
      var i = "";
      for (var u in a) t.call(a, u) && a[u] && (i = o(i, u));
      return i;
    }
    function o(a, i) {
      return i ? (a ? a + " " + i : a + i) : a;
    }
    e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
  })();
})(_o);
const Et = _o.exports;
var Jr = s.exports.createContext(null);
function Pi(e) {
  var t = e.children,
    r = e.onBatchResize,
    n = s.exports.useRef(0),
    o = s.exports.useRef([]),
    a = s.exports.useContext(Jr),
    i = s.exports.useCallback(
      function (u, c, l) {
        n.current += 1;
        var m = n.current;
        o.current.push({ size: u, element: c, data: l }),
          Promise.resolve().then(function () {
            m === n.current && (r == null || r(o.current), (o.current = []));
          }),
          a == null || a(u, c, l);
      },
      [r, a]
    );
  return N(Jr.Provider, { value: i, children: t });
}
var Qe = new Map();
function Oi(e) {
  e.forEach(function (t) {
    var r,
      n = t.target;
    (r = Qe.get(n)) === null ||
      r === void 0 ||
      r.forEach(function (o) {
        return o(n);
      });
  });
}
var To = new no(Oi);
function _i(e, t) {
  Qe.has(e) || (Qe.set(e, new Set()), To.observe(e)), Qe.get(e).add(t);
}
function Ti(e, t) {
  Qe.has(e) &&
    (Qe.get(e).delete(t), Qe.get(e).size || (To.unobserve(e), Qe.delete(e)));
}
function Ai(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zn(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Po(n.key), n);
  }
}
function Ni(e, t, r) {
  return (
    t && zn(e.prototype, t),
    r && zn(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Xr(e, t) {
  return (
    (Xr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    Xr(e, t)
  );
}
function Ii(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Xr(e, t);
}
function pr(e) {
  return (
    (pr = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    pr(e)
  );
}
function Ao() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Ao = function () {
    return !!e;
  })();
}
function Li(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Di(e, t) {
  if (t && (st(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Li(e);
}
function zi(e) {
  var t = Ao();
  return function () {
    var n = pr(e),
      o;
    if (t) {
      var a = pr(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return Di(this, o);
  };
}
var ji = (function (e) {
  Ii(r, e);
  var t = zi(r);
  function r() {
    return Ai(this, r), t.apply(this, arguments);
  }
  return (
    Ni(r, [
      {
        key: "render",
        value: function () {
          return this.props.children;
        },
      },
    ]),
    r
  );
})(s.exports.Component);
function ki(e, t) {
  var r = e.children,
    n = e.disabled,
    o = s.exports.useRef(null),
    a = s.exports.useRef(null),
    i = s.exports.useContext(Jr),
    u = typeof r == "function",
    c = u ? r(o) : r,
    l = s.exports.useRef({
      width: -1,
      height: -1,
      offsetWidth: -1,
      offsetHeight: -1,
    }),
    m = !u && s.exports.isValidElement(c) && sn(c),
    f = m ? c.ref : null,
    g = an(f, o),
    p = function () {
      var C;
      return (
        jr(o.current) ||
        (o.current && st(o.current) === "object"
          ? jr(
              (C = o.current) === null || C === void 0
                ? void 0
                : C.nativeElement
            )
          : null) ||
        jr(a.current)
      );
    };
  s.exports.useImperativeHandle(t, function () {
    return p();
  });
  var d = s.exports.useRef(e);
  d.current = e;
  var w = s.exports.useCallback(function (h) {
    var C = d.current,
      S = C.onResize,
      b = C.data,
      v = h.getBoundingClientRect(),
      R = v.width,
      O = v.height,
      A = h.offsetWidth,
      I = h.offsetHeight,
      F = Math.floor(R),
      _ = Math.floor(O);
    if (
      l.current.width !== F ||
      l.current.height !== _ ||
      l.current.offsetWidth !== A ||
      l.current.offsetHeight !== I
    ) {
      var E = { width: F, height: _, offsetWidth: A, offsetHeight: I };
      l.current = E;
      var U = A === Math.round(R) ? R : A,
        B = I === Math.round(O) ? O : I,
        j = oe(oe({}, E), {}, { offsetWidth: U, offsetHeight: B });
      i == null || i(j, h, b),
        S &&
          Promise.resolve().then(function () {
            S(j, h);
          });
    }
  }, []);
  return (
    s.exports.useEffect(
      function () {
        var h = p();
        return (
          h && !n && _i(h, w),
          function () {
            return Ti(h, w);
          }
        );
      },
      [o.current, n]
    ),
    N(ji, { ref: a, children: m ? s.exports.cloneElement(c, { ref: g }) : c })
  );
}
var Hi = s.exports.forwardRef(ki),
  Wi = "rc-observer-key";
function Fi(e, t) {
  var r = e.children,
    n = typeof r == "function" ? [r] : dr(r);
  return n.map(function (o, a) {
    var i = (o == null ? void 0 : o.key) || "".concat(Wi, "-").concat(a);
    return s.exports.createElement(
      Hi,
      { ...e, key: i, ref: a === 0 ? t : void 0 },
      o
    );
  });
}
var dn = s.exports.forwardRef(Fi);
dn.Collection = Pi;
function Ui() {
  var e = pe({}, Qn);
  return e.useId;
}
var jn = 0,
  kn = Ui();
const Bi = kn
    ? function (t) {
        var r = kn();
        return t || r;
      }
    : function (t) {
        var r = s.exports.useState("ssr-id"),
          n = we(r, 2),
          o = n[0],
          a = n[1];
        return (
          s.exports.useEffect(function () {
            var i = jn;
            (jn += 1), a("rc_unique_".concat(i));
          }, []),
          t || o
        );
      },
  Vi = function () {
    if (typeof navigator > "u" || typeof window > "u") return !1;
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        e
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        e == null ? void 0 : e.substr(0, 4)
      )
    );
  };
function Ki(e) {
  var t = e.prefixCls,
    r = e.align,
    n = e.arrow,
    o = e.arrowPos,
    a = n || {},
    i = a.className,
    u = a.content,
    c = o.x,
    l = c === void 0 ? 0 : c,
    m = o.y,
    f = m === void 0 ? 0 : m,
    g = s.exports.useRef();
  if (!r || !r.points) return null;
  var p = { position: "absolute" };
  if (r.autoArrow !== !1) {
    var d = r.points[0],
      w = r.points[1],
      h = d[0],
      C = d[1],
      S = w[0],
      b = w[1];
    h === S || !["t", "b"].includes(h)
      ? (p.top = f)
      : h === "t"
      ? (p.top = 0)
      : (p.bottom = 0),
      C === b || !["l", "r"].includes(C)
        ? (p.left = l)
        : C === "l"
        ? (p.left = 0)
        : (p.right = 0);
  }
  return N("div", {
    ref: g,
    className: Et("".concat(t, "-arrow"), i),
    style: p,
    children: u,
  });
}
function Gi(e) {
  var t = e.prefixCls,
    r = e.open,
    n = e.zIndex,
    o = e.mask,
    a = e.motion;
  return o
    ? N($o, {
        ...a,
        motionAppear: !0,
        visible: r,
        removeOnLeave: !0,
        children: function (i) {
          var u = i.className;
          return N("div", {
            style: { zIndex: n },
            className: Et("".concat(t, "-mask"), u),
          });
        },
      })
    : null;
}
var qi = s.exports.memo(
    function (e) {
      var t = e.children;
      return t;
    },
    function (e, t) {
      return t.cache;
    }
  ),
  Zi = s.exports.forwardRef(function (e, t) {
    var r = e.popup,
      n = e.className,
      o = e.prefixCls,
      a = e.style,
      i = e.target,
      u = e.onVisibleChanged,
      c = e.open,
      l = e.keepDom,
      m = e.fresh,
      f = e.onClick,
      g = e.mask,
      p = e.arrow,
      d = e.arrowPos,
      w = e.align,
      h = e.motion,
      C = e.maskMotion,
      S = e.forceRender,
      b = e.getPopupContainer,
      v = e.autoDestroy,
      R = e.portal,
      O = e.zIndex,
      A = e.onMouseEnter,
      I = e.onMouseLeave,
      F = e.onPointerEnter,
      _ = e.ready,
      E = e.offsetX,
      U = e.offsetY,
      B = e.offsetR,
      j = e.offsetB,
      k = e.onAlign,
      H = e.onPrepare,
      L = e.stretch,
      P = e.targetWidth,
      ee = e.targetHeight,
      W = typeof r == "function" ? r() : r,
      ae = c || l,
      re = (b == null ? void 0 : b.length) > 0,
      Se = s.exports.useState(!b || !re),
      Me = Y(Se, 2),
      ue = Me[0],
      ce = Me[1];
    if (
      (be(
        function () {
          !ue && re && i && ce(!0);
        },
        [ue, re, i]
      ),
      !ue)
    )
      return null;
    var le = "auto",
      V = { left: "-1000vw", top: "-1000vh", right: le, bottom: le };
    if (_ || !c) {
      var K,
        ie = w.points,
        te =
          w.dynamicInset ||
          ((K = w._experimental) === null || K === void 0
            ? void 0
            : K.dynamicInset),
        Ae = te && ie[0][1] === "r",
        ve = te && ie[0][0] === "b";
      Ae ? ((V.right = B), (V.left = le)) : ((V.left = E), (V.right = le)),
        ve ? ((V.bottom = j), (V.top = le)) : ((V.top = U), (V.bottom = le));
    }
    var Q = {};
    return (
      L &&
        (L.includes("height") && ee
          ? (Q.height = ee)
          : L.includes("minHeight") && ee && (Q.minHeight = ee),
        L.includes("width") && P
          ? (Q.width = P)
          : L.includes("minWidth") && P && (Q.minWidth = P)),
      c || (Q.pointerEvents = "none"),
      vr(R, {
        open: S || ae,
        getContainer:
          b &&
          function () {
            return b(i);
          },
        autoDestroy: v,
        children: [
          N(Gi, { prefixCls: o, open: c, zIndex: O, mask: g, motion: C }),
          N(dn, {
            onResize: k,
            disabled: !c,
            children: function (Ce) {
              return N($o, {
                motionAppear: !0,
                motionEnter: !0,
                motionLeave: !0,
                removeOnLeave: !1,
                forceRender: S,
                leavedClassName: "".concat(o, "-hidden"),
                ...h,
                onAppearPrepare: H,
                onEnterPrepare: H,
                visible: c,
                onVisibleChanged: function (T) {
                  var D;
                  h == null ||
                    (D = h.onVisibleChanged) === null ||
                    D === void 0 ||
                    D.call(h, T),
                    u(T);
                },
                children: function (se, T) {
                  var D = se.className,
                    $ = se.style,
                    de = Et(o, D, n);
                  return vr("div", {
                    ref: ao(Ce, t, T),
                    className: de,
                    style: oe(
                      oe(
                        oe(
                          oe(
                            {
                              "--arrow-x": "".concat(d.x || 0, "px"),
                              "--arrow-y": "".concat(d.y || 0, "px"),
                            },
                            V
                          ),
                          Q
                        ),
                        $
                      ),
                      {},
                      { boxSizing: "border-box", zIndex: O },
                      a
                    ),
                    onMouseEnter: A,
                    onMouseLeave: I,
                    onPointerEnter: F,
                    onClick: f,
                    children: [
                      p &&
                        N(Ki, {
                          prefixCls: o,
                          arrow: p,
                          arrowPos: d,
                          align: w,
                        }),
                      N(qi, { cache: !c && !m, children: W }),
                    ],
                  });
                },
              });
            },
          }),
        ],
      })
    );
  }),
  Qi = s.exports.forwardRef(function (e, t) {
    var r = e.children,
      n = e.getTriggerDOMNode,
      o = sn(r),
      a = s.exports.useCallback(
        function (u) {
          oo(t, n ? n(u) : u);
        },
        [n]
      ),
      i = an(a, r.ref);
    return o ? s.exports.cloneElement(r, { ref: i }) : r;
  }),
  Hn = s.exports.createContext(null);
function Wn(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
function Ji(e, t, r, n) {
  return s.exports.useMemo(
    function () {
      var o = Wn(r != null ? r : t),
        a = Wn(n != null ? n : t),
        i = new Set(o),
        u = new Set(a);
      return (
        e &&
          (i.has("hover") && (i.delete("hover"), i.add("click")),
          u.has("hover") && (u.delete("hover"), u.add("click"))),
        [i, u]
      );
    },
    [e, t, r, n]
  );
}
function Xi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Yi(e, t, r, n) {
  for (var o = r.points, a = Object.keys(e), i = 0; i < a.length; i += 1) {
    var u,
      c = a[i];
    if (Xi((u = e[c]) === null || u === void 0 ? void 0 : u.points, o, n))
      return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function Fn(e, t, r, n) {
  return (
    t ||
    (r
      ? { motionName: "".concat(e, "-").concat(r) }
      : n
      ? { motionName: n }
      : null)
  );
}
function jt(e) {
  return e.ownerDocument.defaultView;
}
function Yr(e) {
  for (
    var t = [],
      r = e == null ? void 0 : e.parentElement,
      n = ["hidden", "scroll", "clip", "auto"];
    r;

  ) {
    var o = jt(r).getComputedStyle(r),
      a = o.overflowX,
      i = o.overflowY,
      u = o.overflow;
    [a, i, u].some(function (c) {
      return n.includes(c);
    }) && t.push(r),
      (r = r.parentElement);
  }
  return t;
}
function Dt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Lt(e) {
  return Dt(parseFloat(e), 0);
}
function Un(e, t) {
  var r = oe({}, e);
  return (
    (t || []).forEach(function (n) {
      if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
        var o = jt(n).getComputedStyle(n),
          a = o.overflow,
          i = o.overflowClipMargin,
          u = o.borderTopWidth,
          c = o.borderBottomWidth,
          l = o.borderLeftWidth,
          m = o.borderRightWidth,
          f = n.getBoundingClientRect(),
          g = n.offsetHeight,
          p = n.clientHeight,
          d = n.offsetWidth,
          w = n.clientWidth,
          h = Lt(u),
          C = Lt(c),
          S = Lt(l),
          b = Lt(m),
          v = Dt(Math.round((f.width / d) * 1e3) / 1e3),
          R = Dt(Math.round((f.height / g) * 1e3) / 1e3),
          O = (d - w - S - b) * v,
          A = (g - p - h - C) * R,
          I = h * R,
          F = C * R,
          _ = S * v,
          E = b * v,
          U = 0,
          B = 0;
        if (a === "clip") {
          var j = Lt(i);
          (U = j * v), (B = j * R);
        }
        var k = f.x + _ - U,
          H = f.y + I - B,
          L = k + f.width + 2 * U - _ - E - O,
          P = H + f.height + 2 * B - I - F - A;
        (r.left = Math.max(r.left, k)),
          (r.top = Math.max(r.top, H)),
          (r.right = Math.min(r.right, L)),
          (r.bottom = Math.min(r.bottom, P));
      }
    }),
    r
  );
}
function Bn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = "".concat(t),
    n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function Vn(e, t) {
  var r = t || [],
    n = Y(r, 2),
    o = n[0],
    a = n[1];
  return [Bn(e.width, o), Bn(e.height, a)];
}
function Kn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function ht(e, t) {
  var r = t[0],
    n = t[1],
    o,
    a;
  return (
    r === "t"
      ? (a = e.y)
      : r === "b"
      ? (a = e.y + e.height)
      : (a = e.y + e.height / 2),
    n === "l"
      ? (o = e.x)
      : n === "r"
      ? (o = e.x + e.width)
      : (o = e.x + e.width / 2),
    { x: o, y: a }
  );
}
function qe(e, t) {
  var r = { t: "b", b: "t", l: "r", r: "l" };
  return e
    .map(function (n, o) {
      return o === t ? r[n] || "c" : n;
    })
    .join("");
}
function es(e, t, r, n, o, a, i) {
  var u = s.exports.useState({
      ready: !1,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: o[n] || {},
    }),
    c = Y(u, 2),
    l = c[0],
    m = c[1],
    f = s.exports.useRef(0),
    g = s.exports.useMemo(
      function () {
        return t ? Yr(t) : [];
      },
      [t]
    ),
    p = s.exports.useRef({}),
    d = function () {
      p.current = {};
    };
  e || d();
  var w = He(function () {
      if (t && r && e) {
        let Ee = function (ke, ot) {
            var gt =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : de,
              pt = W.x + ke,
              Nt = W.y + ot,
              It = pt + K,
              rr = Nt + V,
              Nr = Math.max(pt, gt.left),
              Ir = Math.max(Nt, gt.top),
              Lr = Math.min(It, gt.right),
              Dr = Math.min(rr, gt.bottom);
            return Math.max(0, (Lr - Nr) * (Dr - Ir));
          },
          tr = function () {
            (Be = W.y + z), (Ve = Be + V), (Ke = W.x + Z), (ft = Ke + K);
          };
        var S,
          b,
          v = t,
          R = v.ownerDocument,
          O = jt(v),
          A = O.getComputedStyle(v),
          I = A.width,
          F = A.height,
          _ = A.position,
          E = v.style.left,
          U = v.style.top,
          B = v.style.right,
          j = v.style.bottom,
          k = v.style.overflow,
          H = oe(oe({}, o[n]), a),
          L = R.createElement("div");
        (S = v.parentElement) === null || S === void 0 || S.appendChild(L),
          (L.style.left = "".concat(v.offsetLeft, "px")),
          (L.style.top = "".concat(v.offsetTop, "px")),
          (L.style.position = _),
          (L.style.height = "".concat(v.offsetHeight, "px")),
          (L.style.width = "".concat(v.offsetWidth, "px")),
          (v.style.left = "0"),
          (v.style.top = "0"),
          (v.style.right = "auto"),
          (v.style.bottom = "auto"),
          (v.style.overflow = "hidden");
        var P;
        if (Array.isArray(r)) P = { x: r[0], y: r[1], width: 0, height: 0 };
        else {
          var ee = r.getBoundingClientRect();
          P = { x: ee.x, y: ee.y, width: ee.width, height: ee.height };
        }
        var W = v.getBoundingClientRect(),
          ae = R.documentElement,
          re = ae.clientWidth,
          Se = ae.clientHeight,
          Me = ae.scrollWidth,
          ue = ae.scrollHeight,
          ce = ae.scrollTop,
          le = ae.scrollLeft,
          V = W.height,
          K = W.width,
          ie = P.height,
          te = P.width,
          Ae = { left: 0, top: 0, right: re, bottom: Se },
          ve = { left: -le, top: -ce, right: Me - le, bottom: ue - ce },
          Q = H.htmlRegion,
          Ce = "visible",
          se = "visibleFirst";
        Q !== "scroll" && Q !== se && (Q = Ce);
        var T = Q === se,
          D = Un(ve, g),
          $ = Un(Ae, g),
          de = Q === Ce ? $ : D,
          me = T ? $ : de;
        (v.style.left = "auto"),
          (v.style.top = "auto"),
          (v.style.right = "0"),
          (v.style.bottom = "0");
        var ut = v.getBoundingClientRect();
        (v.style.left = E),
          (v.style.top = U),
          (v.style.right = B),
          (v.style.bottom = j),
          (v.style.overflow = k),
          (b = v.parentElement) === null || b === void 0 || b.removeChild(L);
        var J = Dt(Math.round((K / parseFloat(I)) * 1e3) / 1e3),
          fe = Dt(Math.round((V / parseFloat(F)) * 1e3) / 1e3);
        if (J === 0 || fe === 0 || (mr(r) && !ca(r))) return;
        var Pe = H.offset,
          Oe = H.targetOffset,
          yr = Vn(W, Pe),
          kt = Y(yr, 2),
          _e = kt[0],
          xe = kt[1],
          Ne = Vn(P, Oe),
          Ht = Y(Ne, 2),
          Wt = Ht[0],
          br = Ht[1];
        (P.x -= Wt), (P.y -= br);
        var ct = H.points || [],
          he = Y(ct, 2),
          Fe = he[0],
          wr = he[1],
          De = Kn(wr),
          ye = Kn(Fe),
          Ft = ht(P, De),
          $t = ht(W, ye),
          Ue = oe({}, H),
          Z = Ft.x - $t.x + _e,
          z = Ft.y - $t.y + xe,
          Ie = Ee(Z, z),
          Le = Ee(Z, z, $),
          Je = ht(P, ["t", "l"]),
          Mt = ht(W, ["t", "l"]),
          Pt = ht(P, ["b", "r"]),
          Ot = ht(W, ["b", "r"]),
          ge = H.overflow || {},
          Sr = ge.adjustX,
          Ut = ge.adjustY,
          lt = ge.shiftX,
          _t = ge.shiftY,
          Bt = function (ot) {
            return typeof ot == "boolean" ? ot : ot >= 0;
          },
          Be,
          Ve,
          Ke,
          ft;
        tr();
        var Tt = Bt(Ut),
          At = ye[0] === De[0];
        if (Tt && ye[0] === "t" && (Ve > me.bottom || p.current.bt)) {
          var Xe = z;
          At ? (Xe -= V - ie) : (Xe = Je.y - Ot.y - xe);
          var Ye = Ee(Z, Xe),
            Cr = Ee(Z, Xe, $);
          Ye > Ie || (Ye === Ie && (!T || Cr >= Le))
            ? ((p.current.bt = !0),
              (z = Xe),
              (xe = -xe),
              (Ue.points = [qe(ye, 0), qe(De, 0)]))
            : (p.current.bt = !1);
        }
        if (Tt && ye[0] === "b" && (Be < me.top || p.current.tb)) {
          var ne = z;
          At ? (ne += V - ie) : (ne = Pt.y - Mt.y - xe);
          var Vt = Ee(Z, ne),
            xr = Ee(Z, ne, $);
          Vt > Ie || (Vt === Ie && (!T || xr >= Le))
            ? ((p.current.tb = !0),
              (z = ne),
              (xe = -xe),
              (Ue.points = [qe(ye, 0), qe(De, 0)]))
            : (p.current.tb = !1);
        }
        var Kt = Bt(Sr),
          Gt = ye[1] === De[1];
        if (Kt && ye[1] === "l" && (ft > me.right || p.current.rl)) {
          var et = Z;
          Gt ? (et -= K - te) : (et = Je.x - Ot.x - _e);
          var qt = Ee(et, z),
            Er = Ee(et, z, $);
          qt > Ie || (qt === Ie && (!T || Er >= Le))
            ? ((p.current.rl = !0),
              (Z = et),
              (_e = -_e),
              (Ue.points = [qe(ye, 1), qe(De, 1)]))
            : (p.current.rl = !1);
        }
        if (Kt && ye[1] === "r" && (Ke < me.left || p.current.lr)) {
          var tt = Z;
          Gt ? (tt += K - te) : (tt = Pt.x - Mt.x - _e);
          var Zt = Ee(tt, z),
            vt = Ee(tt, z, $);
          Zt > Ie || (Zt === Ie && (!T || vt >= Le))
            ? ((p.current.lr = !0),
              (Z = tt),
              (_e = -_e),
              (Ue.points = [qe(ye, 1), qe(De, 1)]))
            : (p.current.lr = !1);
        }
        tr();
        var ze = lt === !0 ? 0 : lt;
        typeof ze == "number" &&
          (Ke < $.left &&
            ((Z -= Ke - $.left - _e),
            P.x + te < $.left + ze && (Z += P.x - $.left + te - ze)),
          ft > $.right &&
            ((Z -= ft - $.right - _e),
            P.x > $.right - ze && (Z += P.x - $.right + ze)));
        var rt = _t === !0 ? 0 : _t;
        typeof rt == "number" &&
          (Be < $.top &&
            ((z -= Be - $.top - xe),
            P.y + ie < $.top + rt && (z += P.y - $.top + ie - rt)),
          Ve > $.bottom &&
            ((z -= Ve - $.bottom - xe),
            P.y > $.bottom - rt && (z += P.y - $.bottom + rt)));
        var dt = W.x + Z,
          mt = dt + K,
          je = W.y + z,
          Qt = je + V,
          nt = P.x,
          Ge = nt + te,
          Jt = P.y,
          Rr = Jt + ie,
          $r = Math.max(dt, nt),
          Xt = Math.min(mt, Ge),
          Mr = ($r + Xt) / 2,
          Pr = Mr - dt,
          Or = Math.max(je, Jt),
          Yt = Math.min(Qt, Rr),
          _r = (Or + Yt) / 2,
          Tr = _r - je;
        i == null || i(t, Ue);
        var er = ut.right - W.x - (Z + W.width),
          Ar = ut.bottom - W.y - (z + W.height);
        m({
          ready: !0,
          offsetX: Z / J,
          offsetY: z / fe,
          offsetR: er / J,
          offsetB: Ar / fe,
          arrowX: Pr / J,
          arrowY: Tr / fe,
          scaleX: J,
          scaleY: fe,
          align: Ue,
        });
      }
    }),
    h = function () {
      f.current += 1;
      var b = f.current;
      Promise.resolve().then(function () {
        f.current === b && w();
      });
    },
    C = function () {
      m(function (b) {
        return oe(oe({}, b), {}, { ready: !1 });
      });
    };
  return (
    be(C, [n]),
    be(
      function () {
        e || C();
      },
      [e]
    ),
    [
      l.ready,
      l.offsetX,
      l.offsetY,
      l.offsetR,
      l.offsetB,
      l.arrowX,
      l.arrowY,
      l.scaleX,
      l.scaleY,
      l.align,
      h,
    ]
  );
}
function ts(e) {
  if (Array.isArray(e)) return Qr(e);
}
function rs(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function ns() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gn(e) {
  return ts(e) || rs(e) || Oo(e) || ns();
}
function os(e, t, r, n, o) {
  be(
    function () {
      if (e && t && r) {
        let f = function () {
          n(), o();
        };
        var a = t,
          i = r,
          u = Yr(a),
          c = Yr(i),
          l = jt(i),
          m = new Set([l].concat(Gn(u), Gn(c)));
        return (
          m.forEach(function (g) {
            g.addEventListener("scroll", f, { passive: !0 });
          }),
          l.addEventListener("resize", f, { passive: !0 }),
          n(),
          function () {
            m.forEach(function (g) {
              g.removeEventListener("scroll", f),
                l.removeEventListener("resize", f);
            });
          }
        );
      }
    },
    [e, t, r]
  );
}
function as(e, t, r, n, o, a, i, u) {
  var c = s.exports.useRef(e),
    l = s.exports.useRef(!1);
  c.current !== e && ((l.current = !0), (c.current = e)),
    s.exports.useEffect(
      function () {
        var m = Vr(function () {
          l.current = !1;
        });
        return function () {
          Vr.cancel(m);
        };
      },
      [e]
    ),
    s.exports.useEffect(
      function () {
        if (t && n && (!o || a)) {
          var m = function () {
              var O = !1,
                A = function (_) {
                  var E = _.target;
                  O = i(E);
                },
                I = function (_) {
                  var E = _.target;
                  !l.current && c.current && !O && !i(E) && u(!1);
                };
              return [A, I];
            },
            f = m(),
            g = Y(f, 2),
            p = g[0],
            d = g[1],
            w = m(),
            h = Y(w, 2),
            C = h[0],
            S = h[1],
            b = jt(n);
          b.addEventListener("mousedown", p, !0),
            b.addEventListener("click", d, !0),
            b.addEventListener("contextmenu", d, !0);
          var v = Ur(r);
          return (
            v &&
              (v.addEventListener("mousedown", C, !0),
              v.addEventListener("click", S, !0),
              v.addEventListener("contextmenu", S, !0)),
            function () {
              b.removeEventListener("mousedown", p, !0),
                b.removeEventListener("click", d, !0),
                b.removeEventListener("contextmenu", d, !0),
                v &&
                  (v.removeEventListener("mousedown", C, !0),
                  v.removeEventListener("click", S, !0),
                  v.removeEventListener("contextmenu", S, !0));
            }
          );
        }
      },
      [t, r, n, o, a]
    );
}
var is = [
  "prefixCls",
  "children",
  "action",
  "showAction",
  "hideAction",
  "popupVisible",
  "defaultPopupVisible",
  "onPopupVisibleChange",
  "afterPopupVisibleChange",
  "mouseEnterDelay",
  "mouseLeaveDelay",
  "focusDelay",
  "blurDelay",
  "mask",
  "maskClosable",
  "getPopupContainer",
  "forceRender",
  "autoDestroy",
  "destroyPopupOnHide",
  "popup",
  "popupClassName",
  "popupStyle",
  "popupPlacement",
  "builtinPlacements",
  "popupAlign",
  "zIndex",
  "stretch",
  "getPopupClassNameFromAlign",
  "fresh",
  "alignPoint",
  "onPopupClick",
  "onPopupAlign",
  "arrow",
  "popupMotion",
  "maskMotion",
  "popupTransitionName",
  "popupAnimation",
  "maskTransitionName",
  "maskAnimation",
  "className",
  "getTriggerDOMNode",
];
function ss() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : go,
    t = s.exports.forwardRef(function (r, n) {
      var o = r.prefixCls,
        a = o === void 0 ? "rc-trigger-popup" : o,
        i = r.children,
        u = r.action,
        c = u === void 0 ? "hover" : u,
        l = r.showAction,
        m = r.hideAction,
        f = r.popupVisible,
        g = r.defaultPopupVisible,
        p = r.onPopupVisibleChange,
        d = r.afterPopupVisibleChange,
        w = r.mouseEnterDelay,
        h = r.mouseLeaveDelay,
        C = h === void 0 ? 0.1 : h,
        S = r.focusDelay,
        b = r.blurDelay,
        v = r.mask,
        R = r.maskClosable,
        O = R === void 0 ? !0 : R,
        A = r.getPopupContainer,
        I = r.forceRender,
        F = r.autoDestroy,
        _ = r.destroyPopupOnHide,
        E = r.popup,
        U = r.popupClassName,
        B = r.popupStyle,
        j = r.popupPlacement,
        k = r.builtinPlacements,
        H = k === void 0 ? {} : k,
        L = r.popupAlign,
        P = r.zIndex,
        ee = r.stretch,
        W = r.getPopupClassNameFromAlign,
        ae = r.fresh,
        re = r.alignPoint,
        Se = r.onPopupClick,
        Me = r.onPopupAlign,
        ue = r.arrow,
        ce = r.popupMotion,
        le = r.maskMotion,
        V = r.popupTransitionName,
        K = r.popupAnimation,
        ie = r.maskTransitionName,
        te = r.maskAnimation,
        Ae = r.className,
        ve = r.getTriggerDOMNode,
        Q = Mi(r, is),
        Ce = F || _ || !1,
        se = s.exports.useState(!1),
        T = Y(se, 2),
        D = T[0],
        $ = T[1];
      be(function () {
        $(Vi());
      }, []);
      var de = s.exports.useRef({}),
        me = s.exports.useContext(Hn),
        ut = s.exports.useMemo(
          function () {
            return {
              registerSubPopup: function (M, G) {
                (de.current[M] = G), me == null || me.registerSubPopup(M, G);
              },
            };
          },
          [me]
        ),
        J = Bi(),
        fe = s.exports.useState(null),
        Pe = Y(fe, 2),
        Oe = Pe[0],
        yr = Pe[1],
        kt = He(function (y) {
          mr(y) && Oe !== y && yr(y), me == null || me.registerSubPopup(J, y);
        }),
        _e = s.exports.useState(null),
        xe = Y(_e, 2),
        Ne = xe[0],
        Ht = xe[1],
        Wt = s.exports.useRef(null),
        br = He(function (y) {
          mr(y) && Ne !== y && (Ht(y), (Wt.current = y));
        }),
        ct = s.exports.Children.only(i),
        he = (ct == null ? void 0 : ct.props) || {},
        Fe = {},
        wr = He(function (y) {
          var M,
            G,
            X = Ne;
          return (
            (X == null ? void 0 : X.contains(y)) ||
            ((M = Ur(X)) === null || M === void 0 ? void 0 : M.host) === y ||
            y === X ||
            (Oe == null ? void 0 : Oe.contains(y)) ||
            ((G = Ur(Oe)) === null || G === void 0 ? void 0 : G.host) === y ||
            y === Oe ||
            Object.values(de.current).some(function (q) {
              return (q == null ? void 0 : q.contains(y)) || y === q;
            })
          );
        }),
        De = Fn(a, ce, K, V),
        ye = Fn(a, le, te, ie),
        Ft = s.exports.useState(g || !1),
        $t = Y(Ft, 2),
        Ue = $t[0],
        Z = $t[1],
        z = f != null ? f : Ue,
        Ie = He(function (y) {
          f === void 0 && Z(y);
        });
      be(
        function () {
          Z(f || !1);
        },
        [f]
      );
      var Le = s.exports.useRef(z);
      Le.current = z;
      var Je = s.exports.useRef([]);
      Je.current = [];
      var Mt = He(function (y) {
          var M;
          Ie(y),
            ((M = Je.current[Je.current.length - 1]) !== null && M !== void 0
              ? M
              : z) !== y && (Je.current.push(y), p == null || p(y));
        }),
        Pt = s.exports.useRef(),
        Ot = function () {
          clearTimeout(Pt.current);
        },
        ge = function (M) {
          var G =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          Ot(),
            G === 0
              ? Mt(M)
              : (Pt.current = setTimeout(function () {
                  Mt(M);
                }, G * 1e3));
        };
      s.exports.useEffect(function () {
        return Ot;
      }, []);
      var Sr = s.exports.useState(!1),
        Ut = Y(Sr, 2),
        lt = Ut[0],
        _t = Ut[1];
      be(
        function (y) {
          (!y || z) && _t(!0);
        },
        [z]
      );
      var Bt = s.exports.useState(null),
        Be = Y(Bt, 2),
        Ve = Be[0],
        Ke = Be[1],
        ft = s.exports.useState([0, 0]),
        Tt = Y(ft, 2),
        At = Tt[0],
        Xe = Tt[1],
        Ye = function (M) {
          Xe([M.clientX, M.clientY]);
        },
        Cr = es(z, Oe, re ? At : Ne, j, H, L, Me),
        ne = Y(Cr, 11),
        Vt = ne[0],
        xr = ne[1],
        Kt = ne[2],
        Gt = ne[3],
        et = ne[4],
        qt = ne[5],
        Er = ne[6],
        tt = ne[7],
        Zt = ne[8],
        vt = ne[9],
        ze = ne[10],
        rt = Ji(D, c, l, m),
        dt = Y(rt, 2),
        mt = dt[0],
        je = dt[1],
        Qt = mt.has("click"),
        nt = je.has("click") || je.has("contextMenu"),
        Ge = He(function () {
          lt || ze();
        }),
        Jt = function () {
          Le.current && re && nt && ge(!1);
        };
      os(z, Ne, Oe, Ge, Jt),
        be(
          function () {
            Ge();
          },
          [At, j]
        ),
        be(
          function () {
            z && !(H != null && H[j]) && Ge();
          },
          [JSON.stringify(L)]
        );
      var Rr = s.exports.useMemo(
        function () {
          var y = Yi(H, a, vt, re);
          return Et(y, W == null ? void 0 : W(vt));
        },
        [vt, W, H, a, re]
      );
      s.exports.useImperativeHandle(n, function () {
        return { nativeElement: Wt.current, forceAlign: Ge };
      });
      var $r = s.exports.useState(0),
        Xt = Y($r, 2),
        Mr = Xt[0],
        Pr = Xt[1],
        Or = s.exports.useState(0),
        Yt = Y(Or, 2),
        _r = Yt[0],
        Tr = Yt[1],
        er = function () {
          if (ee && Ne) {
            var M = Ne.getBoundingClientRect();
            Pr(M.width), Tr(M.height);
          }
        },
        Ar = function () {
          er(), Ge();
        },
        Ee = function (M) {
          _t(!1), ze(), d == null || d(M);
        },
        tr = function () {
          return new Promise(function (M) {
            er(),
              Ke(function () {
                return M;
              });
          });
        };
      be(
        function () {
          Ve && (ze(), Ve(), Ke(null));
        },
        [Ve]
      );
      function ke(y, M, G, X) {
        Fe[y] = function (q) {
          var nr;
          X == null || X(q), ge(M, G);
          for (
            var zr = arguments.length,
              mn = new Array(zr > 1 ? zr - 1 : 0),
              or = 1;
            or < zr;
            or++
          )
            mn[or - 1] = arguments[or];
          (nr = he[y]) === null ||
            nr === void 0 ||
            nr.call.apply(nr, [he, q].concat(mn));
        };
      }
      (Qt || nt) &&
        (Fe.onClick = function (y) {
          var M;
          Le.current && nt ? ge(!1) : !Le.current && Qt && (Ye(y), ge(!0));
          for (
            var G = arguments.length, X = new Array(G > 1 ? G - 1 : 0), q = 1;
            q < G;
            q++
          )
            X[q - 1] = arguments[q];
          (M = he.onClick) === null ||
            M === void 0 ||
            M.call.apply(M, [he, y].concat(X));
        }),
        as(z, nt, Ne, Oe, v, O, wr, ge);
      var ot = mt.has("hover"),
        gt = je.has("hover"),
        pt,
        Nt;
      ot &&
        (ke("onMouseEnter", !0, w, function (y) {
          Ye(y);
        }),
        ke("onPointerEnter", !0, w, function (y) {
          Ye(y);
        }),
        (pt = function () {
          (z || lt) && ge(!0, w);
        }),
        re &&
          (Fe.onMouseMove = function (y) {
            var M;
            (M = he.onMouseMove) === null || M === void 0 || M.call(he, y);
          })),
        gt &&
          (ke("onMouseLeave", !1, C),
          ke("onPointerLeave", !1, C),
          (Nt = function () {
            ge(!1, C);
          })),
        mt.has("focus") && ke("onFocus", !0, S),
        je.has("focus") && ke("onBlur", !1, b),
        mt.has("contextMenu") &&
          (Fe.onContextMenu = function (y) {
            var M;
            Le.current && je.has("contextMenu") ? ge(!1) : (Ye(y), ge(!0)),
              y.preventDefault();
            for (
              var G = arguments.length, X = new Array(G > 1 ? G - 1 : 0), q = 1;
              q < G;
              q++
            )
              X[q - 1] = arguments[q];
            (M = he.onContextMenu) === null ||
              M === void 0 ||
              M.call.apply(M, [he, y].concat(X));
          }),
        Ae && (Fe.className = Et(he.className, Ae));
      var It = oe(oe({}, he), Fe),
        rr = {},
        Nr = [
          "onContextMenu",
          "onClick",
          "onMouseDown",
          "onTouchStart",
          "onMouseEnter",
          "onMouseLeave",
          "onFocus",
          "onBlur",
        ];
      Nr.forEach(function (y) {
        Q[y] &&
          (rr[y] = function () {
            for (
              var M, G = arguments.length, X = new Array(G), q = 0;
              q < G;
              q++
            )
              X[q] = arguments[q];
            (M = It[y]) === null ||
              M === void 0 ||
              M.call.apply(M, [It].concat(X)),
              Q[y].apply(Q, X);
          });
      });
      var Ir = s.exports.cloneElement(ct, oe(oe({}, It), rr)),
        Lr = { x: qt, y: Er },
        Dr = ue ? oe({}, ue !== !0 ? ue : {}) : null;
      return vr(Uo, {
        children: [
          N(dn, {
            disabled: !z,
            ref: br,
            onResize: Ar,
            children: N(Qi, { getTriggerDOMNode: ve, children: Ir }),
          }),
          N(Hn.Provider, {
            value: ut,
            children: N(Zi, {
              portal: e,
              ref: kt,
              prefixCls: a,
              popup: E,
              className: Et(U, Rr),
              style: B,
              target: Ne,
              onMouseEnter: pt,
              onMouseLeave: Nt,
              onPointerEnter: pt,
              zIndex: P,
              open: z,
              keepDom: lt,
              fresh: ae,
              onClick: Se,
              mask: v,
              motion: De,
              maskMotion: ye,
              onVisibleChanged: Ee,
              onPrepare: tr,
              forceRender: I,
              autoDestroy: Ce,
              getPopupContainer: A,
              align: vt,
              arrow: Dr,
              arrowPos: Lr,
              ready: Vt,
              offsetX: xr,
              offsetY: Kt,
              offsetR: Gt,
              offsetB: et,
              onAlign: Ge,
              stretch: ee,
              targetWidth: Mr / tt,
              targetHeight: _r / Zt,
            }),
          }),
        ],
      });
    });
  return t;
}
const us = ss(go);
function No(e) {
  var t = e.children,
    r = e.prefixCls,
    n = e.id,
    o = e.overlayInnerStyle,
    a = e.className,
    i = e.style;
  return N("div", {
    className: ro("".concat(r, "-content"), a),
    style: i,
    children: N("div", {
      className: "".concat(r, "-inner"),
      id: n,
      role: "tooltip",
      style: o,
      children: typeof t == "function" ? t() : t,
    }),
  });
}
var yt = { shiftX: 64, adjustY: 1 },
  bt = { adjustX: 1, shiftY: !0 },
  Re = [0, 0],
  cs = {
    left: {
      points: ["cr", "cl"],
      overflow: bt,
      offset: [-4, 0],
      targetOffset: Re,
    },
    right: {
      points: ["cl", "cr"],
      overflow: bt,
      offset: [4, 0],
      targetOffset: Re,
    },
    top: {
      points: ["bc", "tc"],
      overflow: yt,
      offset: [0, -4],
      targetOffset: Re,
    },
    bottom: {
      points: ["tc", "bc"],
      overflow: yt,
      offset: [0, 4],
      targetOffset: Re,
    },
    topLeft: {
      points: ["bl", "tl"],
      overflow: yt,
      offset: [0, -4],
      targetOffset: Re,
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: bt,
      offset: [-4, 0],
      targetOffset: Re,
    },
    topRight: {
      points: ["br", "tr"],
      overflow: yt,
      offset: [0, -4],
      targetOffset: Re,
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: bt,
      offset: [4, 0],
      targetOffset: Re,
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: yt,
      offset: [0, 4],
      targetOffset: Re,
    },
    rightBottom: {
      points: ["bl", "br"],
      overflow: bt,
      offset: [4, 0],
      targetOffset: Re,
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: yt,
      offset: [0, 4],
      targetOffset: Re,
    },
    leftBottom: {
      points: ["br", "bl"],
      overflow: bt,
      offset: [-4, 0],
      targetOffset: Re,
    },
  },
  ls = [
    "overlayClassName",
    "trigger",
    "mouseEnterDelay",
    "mouseLeaveDelay",
    "overlayStyle",
    "prefixCls",
    "children",
    "onVisibleChange",
    "afterVisibleChange",
    "transitionName",
    "animation",
    "motion",
    "placement",
    "align",
    "destroyTooltipOnHide",
    "defaultVisible",
    "getTooltipContainer",
    "overlayInnerStyle",
    "arrowContent",
    "overlay",
    "id",
    "showArrow",
  ],
  fs = function (t, r) {
    var n = t.overlayClassName,
      o = t.trigger,
      a = o === void 0 ? ["hover"] : o,
      i = t.mouseEnterDelay,
      u = i === void 0 ? 0 : i,
      c = t.mouseLeaveDelay,
      l = c === void 0 ? 0.1 : c,
      m = t.overlayStyle,
      f = t.prefixCls,
      g = f === void 0 ? "rc-tooltip" : f,
      p = t.children,
      d = t.onVisibleChange,
      w = t.afterVisibleChange,
      h = t.transitionName,
      C = t.animation,
      S = t.motion,
      b = t.placement,
      v = b === void 0 ? "right" : b,
      R = t.align,
      O = R === void 0 ? {} : R,
      A = t.destroyTooltipOnHide,
      I = A === void 0 ? !1 : A,
      F = t.defaultVisible,
      _ = t.getTooltipContainer,
      E = t.overlayInnerStyle;
    t.arrowContent;
    var U = t.overlay,
      B = t.id,
      j = t.showArrow,
      k = j === void 0 ? !0 : j,
      H = Bo(t, ls),
      L = s.exports.useRef(null);
    s.exports.useImperativeHandle(r, function () {
      return L.current;
    });
    var P = pe({}, H);
    "visible" in t && (P.popupVisible = t.visible);
    var ee = function () {
      return N(
        No,
        { prefixCls: g, id: B, overlayInnerStyle: E, children: U },
        "content"
      );
    };
    return N(us, {
      popupClassName: n,
      prefixCls: g,
      popup: ee,
      action: a,
      builtinPlacements: cs,
      popupPlacement: v,
      ref: L,
      popupAlign: O,
      getPopupContainer: _,
      onPopupVisibleChange: d,
      afterPopupVisibleChange: w,
      popupTransitionName: h,
      popupAnimation: C,
      popupMotion: S,
      defaultPopupVisible: F,
      autoDestroy: I,
      mouseLeaveDelay: l,
      popupStyle: m,
      mouseEnterDelay: u,
      arrow: k,
      ...P,
      children: p,
    });
  };
const vs = s.exports.forwardRef(fs);
function ds(e) {
  const { sizePopupArrow: t, borderRadiusXS: r, borderRadiusOuter: n } = e,
    o = t / 2,
    a = 0,
    i = o,
    u = (n * 1) / Math.sqrt(2),
    c = o - n * (1 - 1 / Math.sqrt(2)),
    l = o - r * (1 / Math.sqrt(2)),
    m = n * (Math.sqrt(2) - 1) + r * (1 / Math.sqrt(2)),
    f = 2 * o - l,
    g = m,
    p = 2 * o - u,
    d = c,
    w = 2 * o - a,
    h = i,
    C = o * Math.sqrt(2) + n * (Math.sqrt(2) - 2),
    S = n * (Math.sqrt(2) - 1),
    b = `polygon(${S}px 100%, 50% ${S}px, ${2 * o - S}px 100%, ${S}px 100%)`,
    v = `path('M ${a} ${i} A ${n} ${n} 0 0 0 ${u} ${c} L ${l} ${m} A ${r} ${r} 0 0 1 ${f} ${g} L ${p} ${d} A ${n} ${n} 0 0 0 ${w} ${h} Z')`;
  return { arrowShadowWidth: C, arrowPath: v, arrowPolygon: b };
}
const ms = (e, t, r) => {
    const {
      sizePopupArrow: n,
      arrowPolygon: o,
      arrowPath: a,
      arrowShadowWidth: i,
      borderRadiusXS: u,
      calc: c,
    } = e;
    return {
      pointerEvents: "none",
      width: n,
      height: n,
      overflow: "hidden",
      "&::before": {
        position: "absolute",
        bottom: 0,
        insetInlineStart: 0,
        width: n,
        height: c(n).div(2).equal(),
        background: t,
        clipPath: { _multi_value_: !0, value: [o, a] },
        content: '""',
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: i,
        height: i,
        bottom: 0,
        insetInline: 0,
        margin: "auto",
        borderRadius: { _skip_check_: !0, value: `0 0 ${Br(u)} 0` },
        transform: "translateY(50%) rotate(-135deg)",
        boxShadow: r,
        zIndex: 0,
        background: "transparent",
      },
    };
  },
  Io = 8;
function Lo(e) {
  const { contentRadius: t, limitVerticalRadius: r } = e,
    n = t > 12 ? t + 2 : 12;
  return { arrowOffsetHorizontal: n, arrowOffsetVertical: r ? Io : n };
}
function cr(e, t) {
  return e ? t : {};
}
function gs(e, t, r) {
  const {
      componentCls: n,
      boxShadowPopoverArrow: o,
      arrowOffsetVertical: a,
      arrowOffsetHorizontal: i,
    } = e,
    {
      arrowDistance: u = 0,
      arrowPlacement: c = { left: !0, right: !0, top: !0, bottom: !0 },
    } = r || {};
  return {
    [n]: Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {
              [`${n}-arrow`]: [
                Object.assign(
                  Object.assign(
                    { position: "absolute", zIndex: 1, display: "block" },
                    ms(e, t, o)
                  ),
                  { "&:before": { background: t } }
                ),
              ],
            },
            cr(!!c.top, {
              [[
                `&-placement-top > ${n}-arrow`,
                `&-placement-topLeft > ${n}-arrow`,
                `&-placement-topRight > ${n}-arrow`,
              ].join(",")]: {
                bottom: u,
                transform: "translateY(100%) rotate(180deg)",
              },
              [`&-placement-top > ${n}-arrow`]: {
                left: { _skip_check_: !0, value: "50%" },
                transform: "translateX(-50%) translateY(100%) rotate(180deg)",
              },
              [`&-placement-topLeft > ${n}-arrow`]: {
                left: { _skip_check_: !0, value: i },
              },
              [`&-placement-topRight > ${n}-arrow`]: {
                right: { _skip_check_: !0, value: i },
              },
            })
          ),
          cr(!!c.bottom, {
            [[
              `&-placement-bottom > ${n}-arrow`,
              `&-placement-bottomLeft > ${n}-arrow`,
              `&-placement-bottomRight > ${n}-arrow`,
            ].join(",")]: { top: u, transform: "translateY(-100%)" },
            [`&-placement-bottom > ${n}-arrow`]: {
              left: { _skip_check_: !0, value: "50%" },
              transform: "translateX(-50%) translateY(-100%)",
            },
            [`&-placement-bottomLeft > ${n}-arrow`]: {
              left: { _skip_check_: !0, value: i },
            },
            [`&-placement-bottomRight > ${n}-arrow`]: {
              right: { _skip_check_: !0, value: i },
            },
          })
        ),
        cr(!!c.left, {
          [[
            `&-placement-left > ${n}-arrow`,
            `&-placement-leftTop > ${n}-arrow`,
            `&-placement-leftBottom > ${n}-arrow`,
          ].join(",")]: {
            right: { _skip_check_: !0, value: u },
            transform: "translateX(100%) rotate(90deg)",
          },
          [`&-placement-left > ${n}-arrow`]: {
            top: { _skip_check_: !0, value: "50%" },
            transform: "translateY(-50%) translateX(100%) rotate(90deg)",
          },
          [`&-placement-leftTop > ${n}-arrow`]: { top: a },
          [`&-placement-leftBottom > ${n}-arrow`]: { bottom: a },
        })
      ),
      cr(!!c.right, {
        [[
          `&-placement-right > ${n}-arrow`,
          `&-placement-rightTop > ${n}-arrow`,
          `&-placement-rightBottom > ${n}-arrow`,
        ].join(",")]: {
          left: { _skip_check_: !0, value: u },
          transform: "translateX(-100%) rotate(-90deg)",
        },
        [`&-placement-right > ${n}-arrow`]: {
          top: { _skip_check_: !0, value: "50%" },
          transform: "translateY(-50%) translateX(-100%) rotate(-90deg)",
        },
        [`&-placement-rightTop > ${n}-arrow`]: { top: a },
        [`&-placement-rightBottom > ${n}-arrow`]: { bottom: a },
      })
    ),
  };
}
function ps(e, t, r, n) {
  if (n === !1) return { adjustX: !1, adjustY: !1 };
  const o = n && typeof n == "object" ? n : {},
    a = {};
  switch (e) {
    case "top":
    case "bottom":
      (a.shiftX = t.arrowOffsetHorizontal * 2 + r),
        (a.shiftY = !0),
        (a.adjustY = !0);
      break;
    case "left":
    case "right":
      (a.shiftY = t.arrowOffsetVertical * 2 + r),
        (a.shiftX = !0),
        (a.adjustX = !0);
      break;
  }
  const i = Object.assign(Object.assign({}, a), o);
  return i.shiftX || (i.adjustX = !0), i.shiftY || (i.adjustY = !0), i;
}
const qn = {
    left: { points: ["cr", "cl"] },
    right: { points: ["cl", "cr"] },
    top: { points: ["bc", "tc"] },
    bottom: { points: ["tc", "bc"] },
    topLeft: { points: ["bl", "tl"] },
    leftTop: { points: ["tr", "tl"] },
    topRight: { points: ["br", "tr"] },
    rightTop: { points: ["tl", "tr"] },
    bottomRight: { points: ["tr", "br"] },
    rightBottom: { points: ["bl", "br"] },
    bottomLeft: { points: ["tl", "bl"] },
    leftBottom: { points: ["br", "bl"] },
  },
  hs = {
    topLeft: { points: ["bl", "tc"] },
    leftTop: { points: ["tr", "cl"] },
    topRight: { points: ["br", "tc"] },
    rightTop: { points: ["tl", "cr"] },
    bottomRight: { points: ["tr", "bc"] },
    rightBottom: { points: ["bl", "cr"] },
    bottomLeft: { points: ["tl", "bc"] },
    leftBottom: { points: ["br", "cl"] },
  },
  ys = new Set([
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
    "leftTop",
    "leftBottom",
    "rightTop",
    "rightBottom",
  ]);
function bs(e) {
  const {
      arrowWidth: t,
      autoAdjustOverflow: r,
      arrowPointAtCenter: n,
      offset: o,
      borderRadius: a,
      visibleFirst: i,
    } = e,
    u = t / 2,
    c = {};
  return (
    Object.keys(qn).forEach((l) => {
      const m = (n && hs[l]) || qn[l],
        f = Object.assign(Object.assign({}, m), {
          offset: [0, 0],
          dynamicInset: !0,
        });
      switch (((c[l] = f), ys.has(l) && (f.autoArrow = !1), l)) {
        case "top":
        case "topLeft":
        case "topRight":
          f.offset[1] = -u - o;
          break;
        case "bottom":
        case "bottomLeft":
        case "bottomRight":
          f.offset[1] = u + o;
          break;
        case "left":
        case "leftTop":
        case "leftBottom":
          f.offset[0] = -u - o;
          break;
        case "right":
        case "rightTop":
        case "rightBottom":
          f.offset[0] = u + o;
          break;
      }
      const g = Lo({ contentRadius: a, limitVerticalRadius: !0 });
      if (n)
        switch (l) {
          case "topLeft":
          case "bottomLeft":
            f.offset[0] = -g.arrowOffsetHorizontal - u;
            break;
          case "topRight":
          case "bottomRight":
            f.offset[0] = g.arrowOffsetHorizontal + u;
            break;
          case "leftTop":
          case "rightTop":
            f.offset[1] = -g.arrowOffsetHorizontal - u;
            break;
          case "leftBottom":
          case "rightBottom":
            f.offset[1] = g.arrowOffsetHorizontal + u;
            break;
        }
      (f.overflow = ps(l, g, t, r)), i && (f.htmlRegion = "visibleFirst");
    }),
    c
  );
}
const ws = (e) => {
    const {
      componentCls: t,
      tooltipMaxWidth: r,
      tooltipColor: n,
      tooltipBg: o,
      tooltipBorderRadius: a,
      zIndexPopup: i,
      controlHeight: u,
      boxShadowSecondary: c,
      paddingSM: l,
      paddingXS: m,
    } = e;
    return [
      {
        [t]: Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, Vo(e)), {
              position: "absolute",
              zIndex: i,
              display: "block",
              width: "max-content",
              maxWidth: r,
              visibility: "visible",
              transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
              "&-hidden": { display: "none" },
              "--antd-arrow-background-color": o,
              [`${t}-inner`]: {
                minWidth: u,
                minHeight: u,
                padding: `${Br(e.calc(l).div(2).equal())} ${Br(m)}`,
                color: n,
                textAlign: "start",
                textDecoration: "none",
                wordWrap: "break-word",
                backgroundColor: o,
                borderRadius: a,
                boxShadow: c,
                boxSizing: "border-box",
              },
              [[
                "&-placement-left",
                "&-placement-leftTop",
                "&-placement-leftBottom",
                "&-placement-right",
                "&-placement-rightTop",
                "&-placement-rightBottom",
              ].join(",")]: { [`${t}-inner`]: { borderRadius: e.min(a, Io) } },
              [`${t}-content`]: { position: "relative" },
            }),
            Zo(e, (f, g) => {
              let { darkColor: p } = g;
              return {
                [`&${t}-${f}`]: {
                  [`${t}-inner`]: { backgroundColor: p },
                  [`${t}-arrow`]: { "--antd-arrow-background-color": p },
                },
              };
            })
          ),
          { "&-rtl": { direction: "rtl" } }
        ),
      },
      gs(e, "var(--antd-arrow-background-color)"),
      {
        [`${t}-pure`]: {
          position: "relative",
          maxWidth: "none",
          margin: e.sizePopupArrow,
        },
      },
    ];
  },
  Ss = (e) =>
    Object.assign(
      Object.assign(
        { zIndexPopup: e.zIndexPopupBase + 70 },
        Lo({ contentRadius: e.borderRadius, limitVerticalRadius: !0 })
      ),
      ds(rn(e, { borderRadiusOuter: Math.min(e.borderRadiusOuter, 4) }))
    ),
  Do = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return Jn(
      "Tooltip",
      (n) => {
        const {
            borderRadius: o,
            colorTextLightSolid: a,
            colorBgSpotlight: i,
          } = n,
          u = rn(n, {
            tooltipMaxWidth: 250,
            tooltipColor: a,
            tooltipBorderRadius: o,
            tooltipBg: i,
          });
        return [ws(u), ui(n, "zoom-big-fast")];
      },
      Ss,
      { resetStyle: !1, injectStyle: t }
    )(e);
  },
  Cs = gr.map((e) => `${e}-inverse`),
  xs = ["success", "processing", "error", "default", "warning"];
function Es(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0)
    ? [].concat(hn(Cs), hn(gr)).includes(e)
    : gr.includes(e);
}
function js(e) {
  return xs.includes(e);
}
function zo(e, t) {
  const r = Es(t),
    n = Rt({ [`${e}-${t}`]: t && r }),
    o = {},
    a = {};
  return (
    t && !r && ((o.background = t), (a["--antd-arrow-background-color"] = t)),
    { className: n, overlayStyle: o, arrowStyle: a }
  );
}
const Rs = (e) => {
    const {
        prefixCls: t,
        className: r,
        placement: n = "top",
        title: o,
        color: a,
        overlayInnerStyle: i,
      } = e,
      { getPrefixCls: u } = s.exports.useContext(nn),
      c = u("tooltip", t),
      [l, m, f] = Do(c),
      g = zo(c, a),
      p = g.arrowStyle,
      d = Object.assign(Object.assign({}, i), g.overlayStyle),
      w = Rt(m, f, c, `${c}-pure`, `${c}-placement-${n}`, r, g.className);
    return l(
      vr("div", {
        className: w,
        style: p,
        children: [
          N("div", { className: `${c}-arrow` }),
          N(No, {
            ...Object.assign({}, e, {
              className: m,
              prefixCls: c,
              overlayInnerStyle: d,
            }),
            children: o,
          }),
        ],
      })
    );
  },
  $s = Rs;
var Ms =
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
const jo = s.exports.forwardRef((e, t) => {
  var r, n;
  const {
      prefixCls: o,
      openClassName: a,
      getTooltipContainer: i,
      overlayClassName: u,
      color: c,
      overlayInnerStyle: l,
      children: m,
      afterOpenChange: f,
      afterVisibleChange: g,
      destroyTooltipOnHide: p,
      arrow: d = !0,
      title: w,
      overlay: h,
      builtinPlacements: C,
      arrowPointAtCenter: S = !1,
      autoAdjustOverflow: b = !0,
    } = e,
    v = !!d,
    [, R] = tn(),
    {
      getPopupContainer: O,
      getPrefixCls: A,
      direction: I,
    } = s.exports.useContext(nn),
    F = Ko(),
    _ = s.exports.useRef(null),
    E = () => {
      var J;
      (J = _.current) === null || J === void 0 || J.forceAlign();
    };
  s.exports.useImperativeHandle(t, () => ({
    forceAlign: E,
    forcePopupAlign: () => {
      F.deprecated(!1, "forcePopupAlign", "forceAlign"), E();
    },
  }));
  const [U, B] = qo(!1, {
      value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
      defaultValue:
        (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible,
    }),
    j = !w && !h && w !== 0,
    k = (J) => {
      var fe, Pe;
      B(j ? !1 : J),
        j ||
          ((fe = e.onOpenChange) === null || fe === void 0 || fe.call(e, J),
          (Pe = e.onVisibleChange) === null || Pe === void 0 || Pe.call(e, J));
    },
    H = s.exports.useMemo(() => {
      var J, fe;
      let Pe = S;
      return (
        typeof d == "object" &&
          (Pe =
            (fe =
              (J = d.pointAtCenter) !== null && J !== void 0
                ? J
                : d.arrowPointAtCenter) !== null && fe !== void 0
              ? fe
              : S),
        C ||
          bs({
            arrowPointAtCenter: Pe,
            autoAdjustOverflow: b,
            arrowWidth: v ? R.sizePopupArrow : 0,
            borderRadius: R.borderRadius,
            offset: R.marginXXS,
            visibleFirst: !0,
          })
      );
    }, [S, d, C, R]),
    L = s.exports.useMemo(() => (w === 0 ? w : h || w || ""), [h, w]),
    P = N(ha, { children: typeof L == "function" ? L() : L }),
    {
      getPopupContainer: ee,
      placement: W = "top",
      mouseEnterDelay: ae = 0.1,
      mouseLeaveDelay: re = 0.1,
      overlayStyle: Se,
      rootClassName: Me,
    } = e,
    ue = Ms(e, [
      "getPopupContainer",
      "placement",
      "mouseEnterDelay",
      "mouseLeaveDelay",
      "overlayStyle",
      "rootClassName",
    ]),
    ce = A("tooltip", o),
    le = A(),
    V = e["data-popover-inject"];
  let K = U;
  !("open" in e) && !("visible" in e) && j && (K = !1);
  const ie = cn(m) && !Qo(m) ? m : N("span", { children: m }),
    te = ie.props,
    Ae =
      !te.className || typeof te.className == "string"
        ? Rt(te.className, a || `${ce}-open`)
        : te.className,
    [ve, Q, Ce] = Do(ce, !V),
    se = zo(ce, c),
    T = se.arrowStyle,
    D = Object.assign(Object.assign({}, l), se.overlayStyle),
    $ = Rt(u, { [`${ce}-rtl`]: I === "rtl" }, se.className, Me, Q, Ce),
    [de, me] = aa("Tooltip", ue.zIndex),
    ut = N(vs, {
      ...Object.assign({}, ue, {
        zIndex: de,
        showArrow: v,
        placement: W,
        mouseEnterDelay: ae,
        mouseLeaveDelay: re,
        prefixCls: ce,
        overlayClassName: $,
        overlayStyle: Object.assign(Object.assign({}, T), Se),
        getTooltipContainer: ee || i || O,
        ref: _,
        builtinPlacements: H,
        overlay: P,
        visible: K,
        onVisibleChange: k,
        afterVisibleChange: f != null ? f : g,
        overlayInnerStyle: D,
        arrowContent: N("span", { className: `${ce}-arrow-content` }),
        motion: {
          motionName: ua(le, "zoom-big-fast", e.transitionName),
          motionDeadline: 1e3,
        },
        destroyTooltipOnHide: !!p,
      }),
      children: K ? Xo(ie, { className: Ae }) : ie,
    });
  return ve(s.exports.createElement(co.Provider, { value: me }, ut));
});
jo._InternalPanelDoNotUseOrYouWillBeFired = $s;
const ks = jo;
var Ps = {
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
const Os = Ps;
var _s = function (t, r) {
  return N(Go, { ...t, ref: r, icon: Os });
};
const Hs = s.exports.forwardRef(_s);
export {
  pa as A,
  sn as B,
  ra as C,
  jr as D,
  gs as E,
  gr as F,
  ds as G,
  Lo as H,
  No as I,
  Zo as J,
  x as K,
  Es as L,
  js as M,
  ha as N,
  Ja as O,
  go as P,
  Hs as R,
  us as T,
  ao as a,
  Ls as b,
  Xo as c,
  fa as d,
  bn as e,
  $o as f,
  He as g,
  Qa as h,
  Qo as i,
  ui as j,
  aa as k,
  ua as l,
  qo as m,
  wi as n,
  ca as o,
  an as p,
  cn as q,
  Jo as r,
  ks as s,
  dr as t,
  Ns as u,
  zs as v,
  Vr as w,
  Is as x,
  Ds as y,
  co as z,
};
