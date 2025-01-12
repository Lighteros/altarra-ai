import {
  v as U,
  r as u,
  d as X,
  F as Y,
  j as i,
  C as Z,
  c as P,
} from "./index.5783a347.js";
import { y as ee, t as te, A as se } from "./RightOutlined.47fd6db5.js";
function w(e) {
  return ["small", "middle", "large"].includes(e);
}
function _(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const I = U.createContext({ latestIndex: 0 }),
  le = I.Provider,
  ne = (e) => {
    let { className: o, index: n, children: t, split: l, style: s } = e;
    const { latestIndex: f } = u.exports.useContext(I);
    return t == null
      ? null
      : X(Y, {
          children: [
            i("div", { className: o, style: s, children: t }),
            n < f && l && i("span", { className: `${o}-split`, children: l }),
          ],
        });
  },
  ae = ne;
var oe =
  (globalThis && globalThis.__rest) ||
  function (e, o) {
    var n = {};
    for (var t in e)
      Object.prototype.hasOwnProperty.call(e, t) &&
        o.indexOf(t) < 0 &&
        (n[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, t = Object.getOwnPropertySymbols(e); l < t.length; l++)
        o.indexOf(t[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, t[l]) &&
          (n[t[l]] = e[t[l]]);
    return n;
  };
const re = u.exports.forwardRef((e, o) => {
    var n, t;
    const { getPrefixCls: l, space: s, direction: f } = u.exports.useContext(Z),
      {
        size: c = (s == null ? void 0 : s.size) || "small",
        align: S,
        className: A,
        rootClassName: k,
        children: G,
        direction: b = "horizontal",
        prefixCls: E,
        split: F,
        style: H,
        wrap: R = !1,
        classNames: v,
        styles: y,
      } = e,
      T = oe(e, [
        "size",
        "align",
        "className",
        "rootClassName",
        "children",
        "direction",
        "prefixCls",
        "split",
        "style",
        "wrap",
        "classNames",
        "styles",
      ]),
      [d, p] = Array.isArray(c) ? c : [c, c],
      h = w(p),
      $ = w(d),
      M = _(p),
      W = _(d),
      z = te(G, { keepEmpty: !0 }),
      O = S === void 0 && b === "horizontal" ? "center" : S,
      a = l("space", E),
      [q, B, D] = se(a),
      J = P(
        a,
        s == null ? void 0 : s.className,
        B,
        `${a}-${b}`,
        {
          [`${a}-rtl`]: f === "rtl",
          [`${a}-align-${O}`]: O,
          [`${a}-gap-row-${p}`]: h,
          [`${a}-gap-col-${d}`]: $,
        },
        A,
        k,
        D
      ),
      j = P(
        `${a}-item`,
        (n = v == null ? void 0 : v.item) !== null && n !== void 0
          ? n
          : (t = s == null ? void 0 : s.classNames) === null || t === void 0
          ? void 0
          : t.item
      );
    let x = 0;
    const K = z.map((r, C) => {
        var g, N;
        r != null && (x = C);
        const Q = (r && r.key) || `${j}-${C}`;
        return i(
          ae,
          {
            className: j,
            index: C,
            split: F,
            style:
              (g = y == null ? void 0 : y.item) !== null && g !== void 0
                ? g
                : (N = s == null ? void 0 : s.styles) === null || N === void 0
                ? void 0
                : N.item,
            children: r,
          },
          Q
        );
      }),
      L = u.exports.useMemo(() => ({ latestIndex: x }), [x]);
    if (z.length === 0) return null;
    const m = {};
    return (
      R && (m.flexWrap = "wrap"),
      !$ && W && (m.columnGap = d),
      !h && M && (m.rowGap = p),
      q(
        i("div", {
          ...Object.assign(
            {
              ref: o,
              className: J,
              style: Object.assign(
                Object.assign(
                  Object.assign({}, m),
                  s == null ? void 0 : s.style
                ),
                H
              ),
            },
            T
          ),
          children: i(le, { value: L, children: K }),
        })
      )
    );
  }),
  V = re;
V.Compact = ee;
const de = V;
export { de as S };
