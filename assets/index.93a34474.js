import {
  r as c,
  j as t,
  A as De,
  t as Pt,
  p as Nt,
  q as Xe,
  d as l,
  _ as Ke,
  g as Ee,
  y as Re,
  a as ce,
  u as Z,
  aL as Ve,
  C as ee,
  H as Te,
  c as q,
  v as Dt,
  I as Le,
  w as X,
  b as Et,
  aH as Rt,
  b3 as Vt,
  N as Tt,
  aU as Lt,
  G as Bt,
  F as Fe,
  S as Ht,
  aJ as At,
  z as zt,
  $ as qt,
  a6 as Ut,
} from "./index.5783a347.js";
import {
  p as Gt,
  E as Wt,
  B as Pe,
  C as Y,
  c as Zt,
  d as Xt,
  e as Kt,
  M as Qe,
  u as Qt,
  a as Yt,
  L as lt,
  F as Jt,
  A as eo,
  P as to,
} from "./index.e756e717.js";
import { T as oo } from "./index.00327ade.js";
import {
  m as at,
  a as ke,
  u as he,
  d as Be,
  b as ro,
  c as Ne,
  v as no,
  O as ct,
  x as Ye,
  t as io,
  w as Je,
  s as so,
  o as lo,
  e as ao,
  q as co,
  B as uo,
} from "./RightOutlined.47fd6db5.js";
import {
  F as de,
  a as He,
  b as po,
  V as ho,
  c as dt,
  d as se,
  R as fo,
  u as mo,
  C as go,
  e as ut,
  f as bo,
  L as Co,
  W as xo,
  h as vo,
  i as yo,
} from "./context.f1b74157.js";
import { W as pt, T as ht, c as ft } from "./row.8837a6bf.js";
import { u as wo, a as ko, I as Ae, T as So } from "./TextArea.487d66e3.js";
import { S as mt } from "./index.aa199a5d.js";
import "./index.adbb0b1c.js";
import "./useStoreApi.2ef56e49.js";
import "./AntdIcon.45ec2ce6.js";
const et = (e) => typeof e == "object" && e != null && e.nodeType === 1,
  tt = (e, o) => (!o || e !== "hidden") && e !== "visible" && e !== "clip",
  Ie = (e, o) => {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
      const n = getComputedStyle(e, null);
      return (
        tt(n.overflowY, o) ||
        tt(n.overflowX, o) ||
        ((r) => {
          const i = ((s) => {
            if (!s.ownerDocument || !s.ownerDocument.defaultView) return null;
            try {
              return s.ownerDocument.defaultView.frameElement;
            } catch {
              return null;
            }
          })(r);
          return (
            !!i &&
            (i.clientHeight < r.scrollHeight || i.clientWidth < r.scrollWidth)
          );
        })(e)
      );
    }
    return !1;
  },
  xe = (e, o, n, r, i, s, a, d) =>
    (s < e && a > o) || (s > e && a < o)
      ? 0
      : (s <= e && d <= n) || (a >= o && d >= n)
      ? s - e - r
      : (a > o && d < n) || (s < e && d > n)
      ? a - o + i
      : 0,
  $o = (e) => {
    const o = e.parentElement;
    return o == null ? e.getRootNode().host || null : o;
  },
  ot = (e, o) => {
    var n, r, i, s;
    if (typeof document > "u") return [];
    const {
        scrollMode: a,
        block: d,
        inline: u,
        boundary: g,
        skipOverflowHiddenElements: p,
      } = o,
      x = typeof g == "function" ? g : (D) => D !== g;
    if (!et(e)) throw new TypeError("Invalid target");
    const _ = document.scrollingElement || document.documentElement,
      C = [];
    let $ = e;
    for (; et($) && x($); ) {
      if ((($ = $o($)), $ === _)) {
        C.push($);
        break;
      }
      ($ != null &&
        $ === document.body &&
        Ie($) &&
        !Ie(document.documentElement)) ||
        ($ != null && Ie($, p) && C.push($));
    }
    const j =
        (r = (n = window.visualViewport) == null ? void 0 : n.width) != null
          ? r
          : innerWidth,
      S =
        (s = (i = window.visualViewport) == null ? void 0 : i.height) != null
          ? s
          : innerHeight,
      { scrollX: m, scrollY: h } = window,
      {
        height: v,
        width: k,
        top: y,
        right: f,
        bottom: F,
        left: O,
      } = e.getBoundingClientRect(),
      {
        top: P,
        right: R,
        bottom: I,
        left: L,
      } = ((D) => {
        const M = window.getComputedStyle(D);
        return {
          top: parseFloat(M.scrollMarginTop) || 0,
          right: parseFloat(M.scrollMarginRight) || 0,
          bottom: parseFloat(M.scrollMarginBottom) || 0,
          left: parseFloat(M.scrollMarginLeft) || 0,
        };
      })(e);
    let N =
        d === "start" || d === "nearest"
          ? y - P
          : d === "end"
          ? F + I
          : y + v / 2 - P + I,
      w = u === "center" ? O + k / 2 - L + R : u === "end" ? f + R : O - L;
    const b = [];
    for (let D = 0; D < C.length; D++) {
      const M = C[D],
        {
          height: G,
          width: K,
          top: V,
          right: E,
          bottom: A,
          left: ae,
        } = M.getBoundingClientRect();
      if (
        a === "if-needed" &&
        y >= 0 &&
        O >= 0 &&
        F <= S &&
        f <= j &&
        y >= V &&
        F <= A &&
        O >= ae &&
        f <= E
      )
        return b;
      const te = getComputedStyle(M),
        Q = parseInt(te.borderLeftWidth, 10),
        T = parseInt(te.borderTopWidth, 10),
        B = parseInt(te.borderRightWidth, 10),
        H = parseInt(te.borderBottomWidth, 10);
      let U = 0,
        W = 0;
      const oe = "offsetWidth" in M ? M.offsetWidth - M.clientWidth - Q - B : 0,
        re = "offsetHeight" in M ? M.offsetHeight - M.clientHeight - T - H : 0,
        ne =
          "offsetWidth" in M
            ? M.offsetWidth === 0
              ? 0
              : K / M.offsetWidth
            : 0,
        z =
          "offsetHeight" in M
            ? M.offsetHeight === 0
              ? 0
              : G / M.offsetHeight
            : 0;
      if (_ === M)
        (U =
          d === "start"
            ? N
            : d === "end"
            ? N - S
            : d === "nearest"
            ? xe(h, h + S, S, T, H, h + N, h + N + v, v)
            : N - S / 2),
          (W =
            u === "start"
              ? w
              : u === "center"
              ? w - j / 2
              : u === "end"
              ? w - j
              : xe(m, m + j, j, Q, B, m + w, m + w + k, k)),
          (U = Math.max(0, U + h)),
          (W = Math.max(0, W + m));
      else {
        (U =
          d === "start"
            ? N - V - T
            : d === "end"
            ? N - A + H + re
            : d === "nearest"
            ? xe(V, A, G, T, H + re, N, N + v, v)
            : N - (V + G / 2) + re / 2),
          (W =
            u === "start"
              ? w - ae - Q
              : u === "center"
              ? w - (ae + K / 2) + oe / 2
              : u === "end"
              ? w - E + B + oe
              : xe(ae, E, K, Q, B + oe, w, w + k, k));
        const { scrollLeft: ue, scrollTop: be } = M;
        (U =
          z === 0
            ? 0
            : Math.max(0, Math.min(be + U / z, M.scrollHeight - G / z + re))),
          (W =
            ne === 0
              ? 0
              : Math.max(
                  0,
                  Math.min(ue + W / ne, M.scrollWidth - K / ne + oe)
                )),
          (N += be - U),
          (w += ue - W);
      }
      b.push({ el: M, top: U, left: W });
    }
    return b;
  },
  _o = (e) =>
    e === !1
      ? { block: "end", inline: "nearest" }
      : ((o) => o === Object(o) && Object.keys(o).length !== 0)(e)
      ? e
      : { block: "start", inline: "nearest" };
function Oo(e, o) {
  if (
    !e.isConnected ||
    !((i) => {
      let s = i;
      for (; s && s.parentNode; ) {
        if (s.parentNode === document) return !0;
        s =
          s.parentNode instanceof ShadowRoot ? s.parentNode.host : s.parentNode;
      }
      return !1;
    })(e)
  )
    return;
  const n = ((i) => {
    const s = window.getComputedStyle(i);
    return {
      top: parseFloat(s.scrollMarginTop) || 0,
      right: parseFloat(s.scrollMarginRight) || 0,
      bottom: parseFloat(s.scrollMarginBottom) || 0,
      left: parseFloat(s.scrollMarginLeft) || 0,
    };
  })(e);
  if (((i) => typeof i == "object" && typeof i.behavior == "function")(o))
    return o.behavior(ot(e, o));
  const r = typeof o == "boolean" || o == null ? void 0 : o.behavior;
  for (const { el: i, top: s, left: a } of ot(e, _o(o))) {
    const d = s - n.top + n.bottom,
      u = a - n.left + n.right;
    i.scroll({ top: d, left: u, behavior: r });
  }
}
var Io = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",
        },
      },
    ],
  },
  name: "search",
  theme: "outlined",
};
const Mo = Io;
var jo = function (o, n) {
  return t(De, { ...o, ref: n, icon: Mo });
};
const Fo = c.exports.forwardRef(jo),
  gt = c.exports.createContext(null),
  Po = gt.Provider,
  bt = c.exports.createContext(null),
  No = bt.Provider;
var Ct = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var o = {}.hasOwnProperty;
    function n() {
      for (var s = "", a = 0; a < arguments.length; a++) {
        var d = arguments[a];
        d && (s = i(s, r(d)));
      }
      return s;
    }
    function r(s) {
      if (typeof s == "string" || typeof s == "number") return s;
      if (typeof s != "object") return "";
      if (Array.isArray(s)) return n.apply(null, s);
      if (
        s.toString !== Object.prototype.toString &&
        !s.toString.toString().includes("[native code]")
      )
        return s.toString();
      var a = "";
      for (var d in s) o.call(s, d) && s[d] && (a = i(a, d));
      return a;
    }
    function i(s, a) {
      return a ? (s ? s + " " + a : s + a) : s;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Ct);
const Do = Ct.exports;
var Eo = [
    "prefixCls",
    "className",
    "style",
    "checked",
    "disabled",
    "defaultChecked",
    "type",
    "title",
    "onChange",
  ],
  xt = c.exports.forwardRef(function (e, o) {
    var n,
      r = e.prefixCls,
      i = r === void 0 ? "rc-checkbox" : r,
      s = e.className,
      a = e.style,
      d = e.checked,
      u = e.disabled,
      g = e.defaultChecked,
      p = g === void 0 ? !1 : g,
      x = e.type,
      _ = x === void 0 ? "checkbox" : x,
      C = e.title,
      $ = e.onChange,
      j = Pt(e, Eo),
      S = c.exports.useRef(null),
      m = at(p, { value: d }),
      h = Nt(m, 2),
      v = h[0],
      k = h[1];
    c.exports.useImperativeHandle(o, function () {
      return {
        focus: function () {
          var O;
          (O = S.current) === null || O === void 0 || O.focus();
        },
        blur: function () {
          var O;
          (O = S.current) === null || O === void 0 || O.blur();
        },
        input: S.current,
      };
    });
    var y = Do(
        i,
        s,
        ((n = {}),
        Xe(n, "".concat(i, "-checked"), v),
        Xe(n, "".concat(i, "-disabled"), u),
        n)
      ),
      f = function (O) {
        u ||
          ("checked" in e || k(O.target.checked),
          $ == null ||
            $({
              target: Ke(Ke({}, e), {}, { type: _, checked: O.target.checked }),
              stopPropagation: function () {
                O.stopPropagation();
              },
              preventDefault: function () {
                O.preventDefault();
              },
              nativeEvent: O.nativeEvent,
            }));
      };
    return l("span", {
      className: y,
      title: C,
      style: a,
      children: [
        t("input", {
          ...j,
          className: "".concat(i, "-input"),
          ref: S,
          onChange: f,
          disabled: u,
          checked: !!v,
          type: _,
        }),
        t("span", { className: "".concat(i, "-inner") }),
      ],
    });
  });
const Ro = (e) => {
    const { componentCls: o, antCls: n } = e,
      r = `${o}-group`;
    return {
      [r]: Object.assign(Object.assign({}, ce(e)), {
        display: "inline-block",
        fontSize: 0,
        [`&${r}-rtl`]: { direction: "rtl" },
        [`${n}-badge ${n}-badge-count`]: { zIndex: 1 },
        [`> ${n}-badge:not(:first-child) > ${n}-button-wrapper`]: {
          borderInlineStart: "none",
        },
      }),
    };
  },
  Vo = (e) => {
    const {
        componentCls: o,
        wrapperMarginInlineEnd: n,
        colorPrimary: r,
        radioSize: i,
        motionDurationSlow: s,
        motionDurationMid: a,
        motionEaseInOutCirc: d,
        colorBgContainer: u,
        colorBorder: g,
        lineWidth: p,
        colorBgContainerDisabled: x,
        colorTextDisabled: _,
        paddingXS: C,
        dotColorDisabled: $,
        lineType: j,
        radioColor: S,
        radioBgColor: m,
        calc: h,
      } = e,
      v = `${o}-inner`,
      k = 4,
      y = h(i).sub(h(k).mul(2)),
      f = h(1).mul(i).equal();
    return {
      [`${o}-wrapper`]: Object.assign(Object.assign({}, ce(e)), {
        display: "inline-flex",
        alignItems: "baseline",
        marginInlineStart: 0,
        marginInlineEnd: n,
        cursor: "pointer",
        [`&${o}-wrapper-rtl`]: { direction: "rtl" },
        "&-disabled": { cursor: "not-allowed", color: e.colorTextDisabled },
        "&::after": {
          display: "inline-block",
          width: 0,
          overflow: "hidden",
          content: '"\\a0"',
        },
        [`${o}-checked::after`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: "100%",
          height: "100%",
          border: `${Z(p)} ${j} ${r}`,
          borderRadius: "50%",
          visibility: "hidden",
          content: '""',
        },
        [o]: Object.assign(Object.assign({}, ce(e)), {
          position: "relative",
          display: "inline-block",
          outline: "none",
          cursor: "pointer",
          alignSelf: "center",
          borderRadius: "50%",
        }),
        [`${o}-wrapper:hover &,
        &:hover ${v}`]: { borderColor: r },
        [`${o}-input:focus-visible + ${v}`]: Object.assign({}, Ve(e)),
        [`${o}:hover::after, ${o}-wrapper:hover &::after`]: {
          visibility: "visible",
        },
        [`${o}-inner`]: {
          "&::after": {
            boxSizing: "border-box",
            position: "absolute",
            insetBlockStart: "50%",
            insetInlineStart: "50%",
            display: "block",
            width: f,
            height: f,
            marginBlockStart: h(1).mul(i).div(-2).equal(),
            marginInlineStart: h(1).mul(i).div(-2).equal(),
            backgroundColor: S,
            borderBlockStart: 0,
            borderInlineStart: 0,
            borderRadius: f,
            transform: "scale(0)",
            opacity: 0,
            transition: `all ${s} ${d}`,
            content: '""',
          },
          boxSizing: "border-box",
          position: "relative",
          insetBlockStart: 0,
          insetInlineStart: 0,
          display: "block",
          width: f,
          height: f,
          backgroundColor: u,
          borderColor: g,
          borderStyle: "solid",
          borderWidth: p,
          borderRadius: "50%",
          transition: `all ${a}`,
        },
        [`${o}-input`]: {
          position: "absolute",
          inset: 0,
          zIndex: 1,
          cursor: "pointer",
          opacity: 0,
        },
        [`${o}-checked`]: {
          [v]: {
            borderColor: r,
            backgroundColor: m,
            "&::after": {
              transform: `scale(${e.calc(e.dotSize).div(i).equal()})`,
              opacity: 1,
              transition: `all ${s} ${d}`,
            },
          },
        },
        [`${o}-disabled`]: {
          cursor: "not-allowed",
          [v]: {
            backgroundColor: x,
            borderColor: g,
            cursor: "not-allowed",
            "&::after": { backgroundColor: $ },
          },
          [`${o}-input`]: { cursor: "not-allowed" },
          [`${o}-disabled + span`]: { color: _, cursor: "not-allowed" },
          [`&${o}-checked`]: {
            [v]: {
              "&::after": {
                transform: `scale(${h(y).div(i).equal({ unit: !1 })})`,
              },
            },
          },
        },
        [`span${o} + *`]: { paddingInlineStart: C, paddingInlineEnd: C },
      }),
    };
  },
  To = (e) => {
    const {
      buttonColor: o,
      controlHeight: n,
      componentCls: r,
      lineWidth: i,
      lineType: s,
      colorBorder: a,
      motionDurationSlow: d,
      motionDurationMid: u,
      buttonPaddingInline: g,
      fontSize: p,
      buttonBg: x,
      fontSizeLG: _,
      controlHeightLG: C,
      controlHeightSM: $,
      paddingXS: j,
      borderRadius: S,
      borderRadiusSM: m,
      borderRadiusLG: h,
      buttonCheckedBg: v,
      buttonSolidCheckedColor: k,
      colorTextDisabled: y,
      colorBgContainerDisabled: f,
      buttonCheckedBgDisabled: F,
      buttonCheckedColorDisabled: O,
      colorPrimary: P,
      colorPrimaryHover: R,
      colorPrimaryActive: I,
      buttonSolidCheckedBg: L,
      buttonSolidCheckedHoverBg: N,
      buttonSolidCheckedActiveBg: w,
      calc: b,
    } = e;
    return {
      [`${r}-button-wrapper`]: {
        position: "relative",
        display: "inline-block",
        height: n,
        margin: 0,
        paddingInline: g,
        paddingBlock: 0,
        color: o,
        fontSize: p,
        lineHeight: Z(b(n).sub(b(i).mul(2)).equal()),
        background: x,
        border: `${Z(i)} ${s} ${a}`,
        borderBlockStartWidth: b(i).add(0.02).equal(),
        borderInlineStartWidth: 0,
        borderInlineEndWidth: i,
        cursor: "pointer",
        transition: [`color ${u}`, `background ${u}`, `box-shadow ${u}`].join(
          ","
        ),
        a: { color: o },
        [`> ${r}-button`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
        },
        "&:not(:first-child)": {
          "&::before": {
            position: "absolute",
            insetBlockStart: b(i).mul(-1).equal(),
            insetInlineStart: b(i).mul(-1).equal(),
            display: "block",
            boxSizing: "content-box",
            width: 1,
            height: "100%",
            paddingBlock: i,
            paddingInline: 0,
            backgroundColor: a,
            transition: `background-color ${d}`,
            content: '""',
          },
        },
        "&:first-child": {
          borderInlineStart: `${Z(i)} ${s} ${a}`,
          borderStartStartRadius: S,
          borderEndStartRadius: S,
        },
        "&:last-child": { borderStartEndRadius: S, borderEndEndRadius: S },
        "&:first-child:last-child": { borderRadius: S },
        [`${r}-group-large &`]: {
          height: C,
          fontSize: _,
          lineHeight: Z(b(C).sub(b(i).mul(2)).equal()),
          "&:first-child": {
            borderStartStartRadius: h,
            borderEndStartRadius: h,
          },
          "&:last-child": { borderStartEndRadius: h, borderEndEndRadius: h },
        },
        [`${r}-group-small &`]: {
          height: $,
          paddingInline: b(j).sub(i).equal(),
          paddingBlock: 0,
          lineHeight: Z(b($).sub(b(i).mul(2)).equal()),
          "&:first-child": {
            borderStartStartRadius: m,
            borderEndStartRadius: m,
          },
          "&:last-child": { borderStartEndRadius: m, borderEndEndRadius: m },
        },
        "&:hover": { position: "relative", color: P },
        "&:has(:focus-visible)": Object.assign({}, Ve(e)),
        [`${r}-inner, input[type='checkbox'], input[type='radio']`]: {
          width: 0,
          height: 0,
          opacity: 0,
          pointerEvents: "none",
        },
        [`&-checked:not(${r}-button-wrapper-disabled)`]: {
          zIndex: 1,
          color: P,
          background: v,
          borderColor: P,
          "&::before": { backgroundColor: P },
          "&:first-child": { borderColor: P },
          "&:hover": {
            color: R,
            borderColor: R,
            "&::before": { backgroundColor: R },
          },
          "&:active": {
            color: I,
            borderColor: I,
            "&::before": { backgroundColor: I },
          },
        },
        [`${r}-group-solid &-checked:not(${r}-button-wrapper-disabled)`]: {
          color: k,
          background: L,
          borderColor: L,
          "&:hover": { color: k, background: N, borderColor: N },
          "&:active": { color: k, background: w, borderColor: w },
        },
        "&-disabled": {
          color: y,
          backgroundColor: f,
          borderColor: a,
          cursor: "not-allowed",
          "&:first-child, &:hover": {
            color: y,
            backgroundColor: f,
            borderColor: a,
          },
        },
        [`&-disabled${r}-button-wrapper-checked`]: {
          color: O,
          backgroundColor: F,
          borderColor: a,
          boxShadow: "none",
        },
      },
    };
  },
  Lo = (e) => {
    const {
        wireframe: o,
        padding: n,
        marginXS: r,
        lineWidth: i,
        fontSizeLG: s,
        colorText: a,
        colorBgContainer: d,
        colorTextDisabled: u,
        controlItemBgActiveDisabled: g,
        colorTextLightSolid: p,
        colorPrimary: x,
        colorPrimaryHover: _,
        colorPrimaryActive: C,
        colorWhite: $,
      } = e,
      j = 4,
      S = s,
      m = o ? S - j * 2 : S - (j + i) * 2;
    return {
      radioSize: S,
      dotSize: m,
      dotColorDisabled: u,
      buttonSolidCheckedColor: p,
      buttonSolidCheckedBg: x,
      buttonSolidCheckedHoverBg: _,
      buttonSolidCheckedActiveBg: C,
      buttonBg: d,
      buttonCheckedBg: d,
      buttonColor: a,
      buttonCheckedBgDisabled: g,
      buttonCheckedColorDisabled: u,
      buttonPaddingInline: n - i,
      wrapperMarginInlineEnd: r,
      radioColor: o ? x : $,
      radioBgColor: o ? d : x,
    };
  },
  vt = Ee(
    "Radio",
    (e) => {
      const { controlOutline: o, controlOutlineWidth: n } = e,
        r = `0 0 0 ${Z(n)} ${o}`,
        s = Re(e, { radioFocusShadow: r, radioButtonFocusShadow: r });
      return [Ro(s), Vo(s), To(s)];
    },
    Lo,
    { unitless: { radioSize: !0, dotSize: !0 } }
  );
var Bo =
  (globalThis && globalThis.__rest) ||
  function (e, o) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        o.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        o.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const Ho = (e, o) => {
    var n, r;
    const i = c.exports.useContext(gt),
      s = c.exports.useContext(bt),
      { getPrefixCls: a, direction: d, radio: u } = c.exports.useContext(ee),
      g = c.exports.useRef(null),
      p = ke(o, g),
      { isFormItemInput: x } = c.exports.useContext(de),
      _ = (w) => {
        var b, D;
        (b = e.onChange) === null || b === void 0 || b.call(e, w),
          (D = i == null ? void 0 : i.onChange) === null ||
            D === void 0 ||
            D.call(i, w);
      },
      {
        prefixCls: C,
        className: $,
        rootClassName: j,
        children: S,
        style: m,
        title: h,
      } = e,
      v = Bo(e, [
        "prefixCls",
        "className",
        "rootClassName",
        "children",
        "style",
        "title",
      ]),
      k = a("radio", C),
      y = ((i == null ? void 0 : i.optionType) || s) === "button",
      f = y ? `${k}-button` : k,
      F = he(k),
      [O, P, R] = vt(k, F),
      I = Object.assign({}, v),
      L = c.exports.useContext(Te);
    i &&
      ((I.name = i.name),
      (I.onChange = _),
      (I.checked = e.value === i.value),
      (I.disabled =
        (n = I.disabled) !== null && n !== void 0 ? n : i.disabled)),
      (I.disabled = (r = I.disabled) !== null && r !== void 0 ? r : L);
    const N = q(
      `${f}-wrapper`,
      {
        [`${f}-wrapper-checked`]: I.checked,
        [`${f}-wrapper-disabled`]: I.disabled,
        [`${f}-wrapper-rtl`]: d === "rtl",
        [`${f}-wrapper-in-form-item`]: x,
      },
      u == null ? void 0 : u.className,
      $,
      j,
      P,
      R,
      F
    );
    return O(
      t(pt, {
        component: "Radio",
        disabled: I.disabled,
        children: l("label", {
          className: N,
          style: Object.assign(
            Object.assign({}, u == null ? void 0 : u.style),
            m
          ),
          onMouseEnter: e.onMouseEnter,
          onMouseLeave: e.onMouseLeave,
          title: h,
          children: [
            t(xt, {
              ...Object.assign({}, I, {
                className: q(I.className, !y && ht),
                type: "radio",
                prefixCls: f,
                ref: p,
              }),
            }),
            S !== void 0 ? t("span", { children: S }) : null,
          ],
        }),
      })
    );
  },
  Ao = c.exports.forwardRef(Ho),
  ye = Ao,
  zo = c.exports.forwardRef((e, o) => {
    const { getPrefixCls: n, direction: r } = c.exports.useContext(ee),
      [i, s] = at(e.defaultValue, { value: e.value }),
      a = (w) => {
        const b = i,
          D = w.target.value;
        "value" in e || s(D);
        const { onChange: M } = e;
        M && D !== b && M(w);
      },
      {
        prefixCls: d,
        className: u,
        rootClassName: g,
        options: p,
        buttonStyle: x = "outline",
        disabled: _,
        children: C,
        size: $,
        style: j,
        id: S,
        onMouseEnter: m,
        onMouseLeave: h,
        onFocus: v,
        onBlur: k,
      } = e,
      y = n("radio", d),
      f = `${y}-group`,
      F = he(y),
      [O, P, R] = vt(y, F);
    let I = C;
    p &&
      p.length > 0 &&
      (I = p.map((w) =>
        typeof w == "string" || typeof w == "number"
          ? t(
              ye,
              {
                prefixCls: y,
                disabled: _,
                value: w,
                checked: i === w,
                children: w,
              },
              w.toString()
            )
          : t(
              ye,
              {
                prefixCls: y,
                disabled: w.disabled || _,
                value: w.value,
                checked: i === w.value,
                title: w.title,
                style: w.style,
                id: w.id,
                required: w.required,
                children: w.label,
              },
              `radio-group-value-options-${w.value}`
            )
      ));
    const L = Be($),
      N = q(
        f,
        `${f}-${x}`,
        { [`${f}-${L}`]: L, [`${f}-rtl`]: r === "rtl" },
        u,
        g,
        P,
        R,
        F
      );
    return O(
      t("div", {
        ...Object.assign({}, Gt(e, { aria: !0, data: !0 }), {
          className: N,
          style: j,
          onMouseEnter: m,
          onMouseLeave: h,
          onFocus: v,
          onBlur: k,
          id: S,
          ref: o,
        }),
        children: t(Po, {
          value: {
            onChange: a,
            value: i,
            disabled: e.disabled,
            name: e.name,
            optionType: e.optionType,
          },
          children: I,
        }),
      })
    );
  }),
  qo = c.exports.memo(zo);
var Uo =
  (globalThis && globalThis.__rest) ||
  function (e, o) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        o.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        o.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const Go = (e, o) => {
    const { getPrefixCls: n } = c.exports.useContext(ee),
      { prefixCls: r } = e,
      i = Uo(e, ["prefixCls"]),
      s = n("radio", r);
    return t(No, {
      value: "button",
      children: t(ye, {
        ...Object.assign({ prefixCls: s }, i, { type: "radio", ref: o }),
      }),
    });
  },
  Wo = c.exports.forwardRef(Go),
  Se = ye;
Se.Button = Wo;
Se.Group = qo;
Se.__ANT_RADIO = !0;
const Me = Se,
  Zo = (e) => {
    const { checkboxCls: o } = e,
      n = `${o}-wrapper`;
    return [
      {
        [`${o}-group`]: Object.assign(Object.assign({}, ce(e)), {
          display: "inline-flex",
          flexWrap: "wrap",
          columnGap: e.marginXS,
          [`> ${e.antCls}-row`]: { flex: 1 },
        }),
        [n]: Object.assign(Object.assign({}, ce(e)), {
          display: "inline-flex",
          alignItems: "baseline",
          cursor: "pointer",
          "&:after": {
            display: "inline-block",
            width: 0,
            overflow: "hidden",
            content: "'\\a0'",
          },
          [`& + ${n}`]: { marginInlineStart: 0 },
          [`&${n}-in-form-item`]: {
            'input[type="checkbox"]': { width: 14, height: 14 },
          },
        }),
        [o]: Object.assign(Object.assign({}, ce(e)), {
          position: "relative",
          whiteSpace: "nowrap",
          lineHeight: 1,
          cursor: "pointer",
          borderRadius: e.borderRadiusSM,
          alignSelf: "center",
          [`${o}-input`]: {
            position: "absolute",
            inset: 0,
            zIndex: 1,
            cursor: "pointer",
            opacity: 0,
            margin: 0,
            [`&:focus-visible + ${o}-inner`]: Object.assign({}, Ve(e)),
          },
          [`${o}-inner`]: {
            boxSizing: "border-box",
            display: "block",
            width: e.checkboxSize,
            height: e.checkboxSize,
            direction: "ltr",
            backgroundColor: e.colorBgContainer,
            border: `${Z(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
            borderRadius: e.borderRadiusSM,
            borderCollapse: "separate",
            transition: `all ${e.motionDurationSlow}`,
            "&:after": {
              boxSizing: "border-box",
              position: "absolute",
              top: "50%",
              insetInlineStart: "25%",
              display: "table",
              width: e.calc(e.checkboxSize).div(14).mul(5).equal(),
              height: e.calc(e.checkboxSize).div(14).mul(8).equal(),
              border: `${Z(e.lineWidthBold)} solid ${e.colorWhite}`,
              borderTop: 0,
              borderInlineStart: 0,
              transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
              opacity: 0,
              content: '""',
              transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`,
            },
          },
          "& + span": {
            paddingInlineStart: e.paddingXS,
            paddingInlineEnd: e.paddingXS,
          },
        }),
      },
      {
        [`
        ${n}:not(${n}-disabled),
        ${o}:not(${o}-disabled)
      `]: { [`&:hover ${o}-inner`]: { borderColor: e.colorPrimary } },
        [`${n}:not(${n}-disabled)`]: {
          [`&:hover ${o}-checked:not(${o}-disabled) ${o}-inner`]: {
            backgroundColor: e.colorPrimaryHover,
            borderColor: "transparent",
          },
          [`&:hover ${o}-checked:not(${o}-disabled):after`]: {
            borderColor: e.colorPrimaryHover,
          },
        },
      },
      {
        [`${o}-checked`]: {
          [`${o}-inner`]: {
            backgroundColor: e.colorPrimary,
            borderColor: e.colorPrimary,
            "&:after": {
              opacity: 1,
              transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
              transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`,
            },
          },
        },
        [`
        ${n}-checked:not(${n}-disabled),
        ${o}-checked:not(${o}-disabled)
      `]: {
          [`&:hover ${o}-inner`]: {
            backgroundColor: e.colorPrimaryHover,
            borderColor: "transparent",
          },
        },
      },
      {
        [o]: {
          "&-indeterminate": {
            [`${o}-inner`]: {
              backgroundColor: e.colorBgContainer,
              borderColor: e.colorBorder,
              "&:after": {
                top: "50%",
                insetInlineStart: "50%",
                width: e.calc(e.fontSizeLG).div(2).equal(),
                height: e.calc(e.fontSizeLG).div(2).equal(),
                backgroundColor: e.colorPrimary,
                border: 0,
                transform: "translate(-50%, -50%) scale(1)",
                opacity: 1,
                content: '""',
              },
            },
          },
        },
      },
      {
        [`${n}-disabled`]: { cursor: "not-allowed" },
        [`${o}-disabled`]: {
          [`&, ${o}-input`]: { cursor: "not-allowed", pointerEvents: "none" },
          [`${o}-inner`]: {
            background: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            "&:after": { borderColor: e.colorTextDisabled },
          },
          "&:after": { display: "none" },
          "& + span": { color: e.colorTextDisabled },
          [`&${o}-indeterminate ${o}-inner::after`]: {
            background: e.colorTextDisabled,
          },
        },
      },
    ];
  };
function Xo(e, o) {
  const n = Re(o, {
    checkboxCls: `.${e}`,
    checkboxSize: o.controlInteractiveSize,
  });
  return [Zo(n)];
}
const yt = Ee("Checkbox", (e, o) => {
    let { prefixCls: n } = o;
    return [Xo(n, e)];
  }),
  Ko = Dt.createContext(null),
  wt = Ko;
var Qo =
  (globalThis && globalThis.__rest) ||
  function (e, o) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        o.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        o.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const Yo = (e, o) => {
    var n;
    const {
        prefixCls: r,
        className: i,
        rootClassName: s,
        children: a,
        indeterminate: d = !1,
        style: u,
        onMouseEnter: g,
        onMouseLeave: p,
        skipGroup: x = !1,
        disabled: _,
      } = e,
      C = Qo(e, [
        "prefixCls",
        "className",
        "rootClassName",
        "children",
        "indeterminate",
        "style",
        "onMouseEnter",
        "onMouseLeave",
        "skipGroup",
        "disabled",
      ]),
      { getPrefixCls: $, direction: j, checkbox: S } = c.exports.useContext(ee),
      m = c.exports.useContext(wt),
      { isFormItemInput: h } = c.exports.useContext(de),
      v = c.exports.useContext(Te),
      k =
        (n = (m == null ? void 0 : m.disabled) || _) !== null && n !== void 0
          ? n
          : v,
      y = c.exports.useRef(C.value);
    c.exports.useEffect(() => {
      m == null || m.registerValue(C.value);
    }, []),
      c.exports.useEffect(() => {
        if (!x)
          return (
            C.value !== y.current &&
              (m == null || m.cancelValue(y.current),
              m == null || m.registerValue(C.value),
              (y.current = C.value)),
            () => (m == null ? void 0 : m.cancelValue(C.value))
          );
      }, [C.value]);
    const f = $("checkbox", r),
      F = he(f),
      [O, P, R] = yt(f, F),
      I = Object.assign({}, C);
    m &&
      !x &&
      ((I.onChange = function () {
        C.onChange && C.onChange.apply(C, arguments),
          m.toggleOption && m.toggleOption({ label: a, value: C.value });
      }),
      (I.name = m.name),
      (I.checked = m.value.includes(C.value)));
    const L = q(
        `${f}-wrapper`,
        {
          [`${f}-rtl`]: j === "rtl",
          [`${f}-wrapper-checked`]: I.checked,
          [`${f}-wrapper-disabled`]: k,
          [`${f}-wrapper-in-form-item`]: h,
        },
        S == null ? void 0 : S.className,
        i,
        s,
        R,
        F,
        P
      ),
      N = q({ [`${f}-indeterminate`]: d }, ht, P),
      w = d ? "mixed" : void 0;
    return O(
      t(pt, {
        component: "Checkbox",
        disabled: k,
        children: l("label", {
          className: L,
          style: Object.assign(
            Object.assign({}, S == null ? void 0 : S.style),
            u
          ),
          onMouseEnter: g,
          onMouseLeave: p,
          children: [
            t(xt, {
              ...Object.assign({ "aria-checked": w }, I, {
                prefixCls: f,
                className: N,
                disabled: k,
                ref: o,
              }),
            }),
            a !== void 0 && t("span", { children: a }),
          ],
        }),
      })
    );
  },
  Jo = c.exports.forwardRef(Yo),
  kt = Jo;
var er =
  (globalThis && globalThis.__rest) ||
  function (e, o) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        o.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        o.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const tr = c.exports.forwardRef((e, o) => {
    const {
        defaultValue: n,
        children: r,
        options: i = [],
        prefixCls: s,
        className: a,
        rootClassName: d,
        style: u,
        onChange: g,
      } = e,
      p = er(e, [
        "defaultValue",
        "children",
        "options",
        "prefixCls",
        "className",
        "rootClassName",
        "style",
        "onChange",
      ]),
      { getPrefixCls: x, direction: _ } = c.exports.useContext(ee),
      [C, $] = c.exports.useState(p.value || n || []),
      [j, S] = c.exports.useState([]);
    c.exports.useEffect(() => {
      "value" in p && $(p.value || []);
    }, [p.value]);
    const m = c.exports.useMemo(
        () =>
          i.map((b) =>
            typeof b == "string" || typeof b == "number"
              ? { label: b, value: b }
              : b
          ),
        [i]
      ),
      h = (b) => {
        S((D) => D.filter((M) => M !== b));
      },
      v = (b) => {
        S((D) => [].concat(X(D), [b]));
      },
      k = (b) => {
        const D = C.indexOf(b.value),
          M = X(C);
        D === -1 ? M.push(b.value) : M.splice(D, 1),
          "value" in p || $(M),
          g == null ||
            g(
              M.filter((G) => j.includes(G)).sort((G, K) => {
                const V = m.findIndex((A) => A.value === G),
                  E = m.findIndex((A) => A.value === K);
                return V - E;
              })
            );
      },
      y = x("checkbox", s),
      f = `${y}-group`,
      F = he(y),
      [O, P, R] = yt(y, F),
      I = Le(p, ["value", "disabled"]),
      L = i.length
        ? m.map((b) =>
            t(
              kt,
              {
                prefixCls: y,
                disabled: "disabled" in b ? b.disabled : p.disabled,
                value: b.value,
                checked: C.includes(b.value),
                onChange: b.onChange,
                className: `${f}-item`,
                style: b.style,
                title: b.title,
                id: b.id,
                required: b.required,
                children: b.label,
              },
              b.value.toString()
            )
          )
        : r,
      N = {
        toggleOption: k,
        value: C,
        disabled: p.disabled,
        name: p.name,
        registerValue: v,
        cancelValue: h,
      },
      w = q(f, { [`${f}-rtl`]: _ === "rtl" }, a, d, R, F, P);
    return O(
      t("div", {
        ...Object.assign({ className: w, style: u }, I, { ref: o }),
        children: t(wt.Provider, { value: N, children: L }),
      })
    );
  }),
  or = tr,
  ze = kt;
ze.Group = or;
ze.__ANT_CHECKBOX = !0;
const J = ze,
  rr = (e) => {
    const { getPrefixCls: o, direction: n } = c.exports.useContext(ee),
      { prefixCls: r, className: i } = e,
      s = o("input-group", r),
      a = o("input"),
      [d, u] = wo(a),
      g = q(
        s,
        {
          [`${s}-lg`]: e.size === "large",
          [`${s}-sm`]: e.size === "small",
          [`${s}-compact`]: e.compact,
          [`${s}-rtl`]: n === "rtl",
        },
        u,
        i
      ),
      p = c.exports.useContext(de),
      x = c.exports.useMemo(
        () => Object.assign(Object.assign({}, p), { isFormItemInput: !1 }),
        [p]
      );
    return d(
      t("span", {
        className: g,
        style: e.style,
        onMouseEnter: e.onMouseEnter,
        onMouseLeave: e.onMouseLeave,
        onFocus: e.onFocus,
        onBlur: e.onBlur,
        children: t(de.Provider, { value: x, children: e.children }),
      })
    );
  },
  nr = rr;
var ir = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z",
        },
      },
    ],
  },
  name: "eye-invisible",
  theme: "outlined",
};
const sr = ir;
var lr = function (o, n) {
  return t(De, { ...o, ref: n, icon: sr });
};
const ar = c.exports.forwardRef(lr);
var cr =
  (globalThis && globalThis.__rest) ||
  function (e, o) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        o.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        o.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const dr = (e) => (e ? t(Wt, {}) : t(ar, {})),
  ur = { click: "onClick", hover: "onMouseOver" },
  pr = c.exports.forwardRef((e, o) => {
    const { visibilityToggle: n = !0 } = e,
      r = typeof n == "object" && n.visible !== void 0,
      [i, s] = c.exports.useState(() => (r ? n.visible : !1)),
      a = c.exports.useRef(null);
    c.exports.useEffect(() => {
      r && s(n.visible);
    }, [r, n]);
    const d = ko(a),
      u = () => {
        const { disabled: y } = e;
        y ||
          (i && d(),
          s((f) => {
            var F;
            const O = !f;
            return (
              typeof n == "object" &&
                ((F = n.onVisibleChange) === null ||
                  F === void 0 ||
                  F.call(n, O)),
              O
            );
          }));
      },
      g = (y) => {
        const { action: f = "click", iconRender: F = dr } = e,
          O = ur[f] || "",
          P = F(i),
          R = {
            [O]: u,
            className: `${y}-icon`,
            key: "passwordIcon",
            onMouseDown: (I) => {
              I.preventDefault();
            },
            onMouseUp: (I) => {
              I.preventDefault();
            },
          };
        return c.exports.cloneElement(
          c.exports.isValidElement(P) ? P : t("span", { children: P }),
          R
        );
      },
      { className: p, prefixCls: x, inputPrefixCls: _, size: C } = e,
      $ = cr(e, ["className", "prefixCls", "inputPrefixCls", "size"]),
      { getPrefixCls: j } = c.exports.useContext(ee),
      S = j("input", _),
      m = j("input-password", x),
      h = n && g(m),
      v = q(m, p, { [`${m}-${C}`]: !!C }),
      k = Object.assign(
        Object.assign({}, Le($, ["suffix", "iconRender", "visibilityToggle"])),
        { type: i ? "text" : "password", className: v, prefixCls: S, suffix: h }
      );
    return C && (k.size = C), t(Ae, { ...Object.assign({ ref: ke(o, a) }, k) });
  }),
  hr = pr;
var fr =
  (globalThis && globalThis.__rest) ||
  function (e, o) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        o.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        o.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const mr = c.exports.forwardRef((e, o) => {
    const {
        prefixCls: n,
        inputPrefixCls: r,
        className: i,
        size: s,
        suffix: a,
        enterButton: d = !1,
        addonAfter: u,
        loading: g,
        disabled: p,
        onSearch: x,
        onChange: _,
        onCompositionStart: C,
        onCompositionEnd: $,
      } = e,
      j = fr(e, [
        "prefixCls",
        "inputPrefixCls",
        "className",
        "size",
        "suffix",
        "enterButton",
        "addonAfter",
        "loading",
        "disabled",
        "onSearch",
        "onChange",
        "onCompositionStart",
        "onCompositionEnd",
      ]),
      { getPrefixCls: S, direction: m } = c.exports.useContext(ee),
      h = c.exports.useRef(!1),
      v = S("input-search", n),
      k = S("input", r),
      { compactSize: y } = ro(v, m),
      f = Be((V) => {
        var E;
        return (E = s != null ? s : y) !== null && E !== void 0 ? E : V;
      }),
      F = c.exports.useRef(null),
      O = (V) => {
        V &&
          V.target &&
          V.type === "click" &&
          x &&
          x(V.target.value, V, { source: "clear" }),
          _ && _(V);
      },
      P = (V) => {
        var E;
        document.activeElement ===
          ((E = F.current) === null || E === void 0 ? void 0 : E.input) &&
          V.preventDefault();
      },
      R = (V) => {
        var E, A;
        x &&
          x(
            (A =
              (E = F.current) === null || E === void 0 ? void 0 : E.input) ===
              null || A === void 0
              ? void 0
              : A.value,
            V,
            { source: "input" }
          );
      },
      I = (V) => {
        h.current || g || R(V);
      },
      L = typeof d == "boolean" ? t(Fo, {}) : null,
      N = `${v}-button`;
    let w;
    const b = d || {},
      D = b.type && b.type.__ANT_BUTTON === !0;
    D || b.type === "button"
      ? (w = Ne(
          b,
          Object.assign(
            {
              onMouseDown: P,
              onClick: (V) => {
                var E, A;
                (A =
                  (E = b == null ? void 0 : b.props) === null || E === void 0
                    ? void 0
                    : E.onClick) === null ||
                  A === void 0 ||
                  A.call(E, V),
                  R(V);
              },
              key: "enterButton",
            },
            D ? { className: N, size: f } : {}
          )
        ))
      : (w = t(
          Pe,
          {
            className: N,
            type: d ? "primary" : void 0,
            size: f,
            disabled: p,
            onMouseDown: P,
            onClick: R,
            loading: g,
            icon: L,
            children: d,
          },
          "enterButton"
        )),
      u && (w = [w, Ne(u, { key: "addonAfter" })]);
    const M = q(
        v,
        {
          [`${v}-rtl`]: m === "rtl",
          [`${v}-${f}`]: !!f,
          [`${v}-with-button`]: !!d,
        },
        i
      ),
      G = (V) => {
        (h.current = !0), C == null || C(V);
      },
      K = (V) => {
        (h.current = !1), $ == null || $(V);
      };
    return t(Ae, {
      ...Object.assign({ ref: ke(F, o), onPressEnter: I }, j, {
        size: f,
        onCompositionStart: G,
        onCompositionEnd: K,
        prefixCls: k,
        addonAfter: w,
        suffix: a,
        onChange: O,
        className: M,
        disabled: p,
      }),
    });
  }),
  gr = mr,
  ge = Ae;
ge.Group = nr;
ge.Search = gr;
ge.TextArea = So;
ge.Password = hr;
const ve = ge;
function we(e) {
  const [o, n] = c.exports.useState(e);
  return (
    c.exports.useEffect(() => {
      const r = setTimeout(
        () => {
          n(e);
        },
        e.length ? 0 : 10
      );
      return () => {
        clearTimeout(r);
      };
    }, [e]),
    o
  );
}
const br = (e) => {
    const { componentCls: o } = e,
      n = `${o}-show-help`,
      r = `${o}-show-help-item`;
    return {
      [n]: {
        transition: `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
        "&-appear, &-enter": { opacity: 0, "&-active": { opacity: 1 } },
        "&-leave": { opacity: 1, "&-active": { opacity: 0 } },
        [r]: {
          overflow: "hidden",
          transition: `height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,
          [`&${r}-appear, &${r}-enter`]: {
            transform: "translateY(-5px)",
            opacity: 0,
            ["&-active"]: { transform: "translateY(0)", opacity: 1 },
          },
          [`&${r}-leave-active`]: { transform: "translateY(-5px)" },
        },
      },
    };
  },
  Cr = br,
  xr = (e) => ({
    legend: {
      display: "block",
      width: "100%",
      marginBottom: e.marginLG,
      padding: 0,
      color: e.colorTextDescription,
      fontSize: e.fontSizeLG,
      lineHeight: "inherit",
      border: 0,
      borderBottom: `${Z(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
    },
    'input[type="search"]': { boxSizing: "border-box" },
    'input[type="radio"], input[type="checkbox"]': { lineHeight: "normal" },
    'input[type="file"]': { display: "block" },
    'input[type="range"]': { display: "block", width: "100%" },
    "select[multiple], select[size]": { height: "auto" },
    [`input[type='file']:focus,
  input[type='radio']:focus,
  input[type='checkbox']:focus`]: {
      outline: 0,
      boxShadow: `0 0 0 ${Z(e.controlOutlineWidth)} ${e.controlOutline}`,
    },
    output: {
      display: "block",
      paddingTop: 15,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
    },
  }),
  rt = (e, o) => {
    const { formItemCls: n } = e;
    return {
      [n]: {
        [`${n}-label > label`]: { height: o },
        [`${n}-control-input`]: { minHeight: o },
      },
    };
  },
  vr = (e) => {
    const { componentCls: o } = e;
    return {
      [e.componentCls]: Object.assign(
        Object.assign(Object.assign({}, ce(e)), xr(e)),
        {
          [`${o}-text`]: {
            display: "inline-block",
            paddingInlineEnd: e.paddingSM,
          },
          "&-small": Object.assign({}, rt(e, e.controlHeightSM)),
          "&-large": Object.assign({}, rt(e, e.controlHeightLG)),
        }
      ),
    };
  },
  yr = (e) => {
    const {
      formItemCls: o,
      iconCls: n,
      componentCls: r,
      rootPrefixCls: i,
      labelRequiredMarkColor: s,
      labelColor: a,
      labelFontSize: d,
      labelHeight: u,
      labelColonMarginInlineStart: g,
      labelColonMarginInlineEnd: p,
      itemMarginBottom: x,
    } = e;
    return {
      [o]: Object.assign(Object.assign({}, ce(e)), {
        marginBottom: x,
        verticalAlign: "top",
        "&-with-help": { transition: "none" },
        [`&-hidden,
        &-hidden.${i}-row`]: { display: "none" },
        "&-has-warning": { [`${o}-split`]: { color: e.colorError } },
        "&-has-error": { [`${o}-split`]: { color: e.colorWarning } },
        [`${o}-label`]: {
          flexGrow: 0,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textAlign: "end",
          verticalAlign: "middle",
          "&-left": { textAlign: "start" },
          "&-wrap": {
            overflow: "unset",
            lineHeight: e.lineHeight,
            whiteSpace: "unset",
          },
          "> label": {
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            maxWidth: "100%",
            height: u,
            color: a,
            fontSize: d,
            [`> ${n}`]: { fontSize: e.fontSize, verticalAlign: "top" },
            [`&${o}-required:not(${o}-required-mark-optional)::before`]: {
              display: "inline-block",
              marginInlineEnd: e.marginXXS,
              color: s,
              fontSize: e.fontSize,
              fontFamily: "SimSun, sans-serif",
              lineHeight: 1,
              content: '"*"',
              [`${r}-hide-required-mark &`]: { display: "none" },
            },
            [`${o}-optional`]: {
              display: "inline-block",
              marginInlineStart: e.marginXXS,
              color: e.colorTextDescription,
              [`${r}-hide-required-mark &`]: { display: "none" },
            },
            [`${o}-tooltip`]: {
              color: e.colorTextDescription,
              cursor: "help",
              writingMode: "horizontal-tb",
              marginInlineStart: e.marginXXS,
            },
            "&::after": {
              content: '":"',
              position: "relative",
              marginBlock: 0,
              marginInlineStart: g,
              marginInlineEnd: p,
            },
            [`&${o}-no-colon::after`]: { content: '"\\a0"' },
          },
        },
        [`${o}-control`]: {
          ["--ant-display"]: "flex",
          flexDirection: "column",
          flexGrow: 1,
          [`&:first-child:not([class^="'${i}-col-'"]):not([class*="' ${i}-col-'"])`]:
            { width: "100%" },
          "&-input": {
            position: "relative",
            display: "flex",
            alignItems: "center",
            minHeight: e.controlHeight,
            "&-content": { flex: "auto", maxWidth: "100%" },
          },
        },
        [o]: {
          "&-explain, &-extra": {
            clear: "both",
            color: e.colorTextDescription,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
          },
          "&-explain-connected": { width: "100%" },
          "&-extra": {
            minHeight: e.controlHeightSM,
            transition: `color ${e.motionDurationMid} ${e.motionEaseOut}`,
          },
          "&-explain": {
            "&-error": { color: e.colorError },
            "&-warning": { color: e.colorWarning },
          },
        },
        [`&-with-help ${o}-explain`]: { height: "auto", opacity: 1 },
        [`${o}-feedback-icon`]: {
          fontSize: e.fontSize,
          textAlign: "center",
          visibility: "visible",
          animationName: ct,
          animationDuration: e.motionDurationMid,
          animationTimingFunction: e.motionEaseOutBack,
          pointerEvents: "none",
          "&-success": { color: e.colorSuccess },
          "&-error": { color: e.colorError },
          "&-warning": { color: e.colorWarning },
          "&-validating": { color: e.colorPrimary },
        },
      }),
    };
  },
  wr = (e) => {
    const { componentCls: o, formItemCls: n } = e;
    return {
      [`${o}-horizontal`]: {
        [`${n}-label`]: { flexGrow: 0 },
        [`${n}-control`]: { flex: "1 1 0", minWidth: 0 },
        [`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]: {
          [`& + ${n}-control`]: { minWidth: "unset" },
        },
      },
    };
  },
  kr = (e) => {
    const { componentCls: o, formItemCls: n } = e;
    return {
      [`${o}-inline`]: {
        display: "flex",
        flexWrap: "wrap",
        [n]: {
          flex: "none",
          marginInlineEnd: e.margin,
          marginBottom: 0,
          "&-row": { flexWrap: "nowrap" },
          [`> ${n}-label,
        > ${n}-control`]: { display: "inline-block", verticalAlign: "top" },
          [`> ${n}-label`]: { flex: "none" },
          [`${o}-text`]: { display: "inline-block" },
          [`${n}-has-feedback`]: { display: "inline-block" },
        },
      },
    };
  },
  fe = (e) => ({
    padding: e.verticalLabelPadding,
    margin: e.verticalLabelMargin,
    whiteSpace: "initial",
    textAlign: "start",
    "> label": { margin: 0, "&::after": { visibility: "hidden" } },
  }),
  Sr = (e) => {
    const { componentCls: o, formItemCls: n, rootPrefixCls: r } = e;
    return {
      [`${n} ${n}-label`]: fe(e),
      [`${o}:not(${o}-inline)`]: {
        [n]: {
          flexWrap: "wrap",
          [`${n}-label, ${n}-control`]: {
            [`&:not([class*=" ${r}-col-xs"])`]: {
              flex: "0 0 100%",
              maxWidth: "100%",
            },
          },
        },
      },
    };
  },
  $r = (e) => {
    const { componentCls: o, formItemCls: n, rootPrefixCls: r } = e;
    return {
      [`${o}-vertical`]: {
        [n]: {
          "&-row": { flexDirection: "column" },
          "&-label > label": { height: "auto" },
          [`${o}-item-control`]: { width: "100%" },
        },
      },
      [`${o}-vertical ${n}-label,
      .${r}-col-24${n}-label,
      .${r}-col-xl-24${n}-label`]: fe(e),
      [`@media (max-width: ${Z(e.screenXSMax)})`]: [
        Sr(e),
        { [o]: { [`.${r}-col-xs-24${n}-label`]: fe(e) } },
      ],
      [`@media (max-width: ${Z(e.screenSMMax)})`]: {
        [o]: { [`.${r}-col-sm-24${n}-label`]: fe(e) },
      },
      [`@media (max-width: ${Z(e.screenMDMax)})`]: {
        [o]: { [`.${r}-col-md-24${n}-label`]: fe(e) },
      },
      [`@media (max-width: ${Z(e.screenLGMax)})`]: {
        [o]: { [`.${r}-col-lg-24${n}-label`]: fe(e) },
      },
    };
  },
  _r = (e) => ({
    labelRequiredMarkColor: e.colorError,
    labelColor: e.colorTextHeading,
    labelFontSize: e.fontSize,
    labelHeight: e.controlHeight,
    labelColonMarginInlineStart: e.marginXXS / 2,
    labelColonMarginInlineEnd: e.marginXS,
    itemMarginBottom: e.marginLG,
    verticalLabelPadding: `0 0 ${e.paddingXS}px`,
    verticalLabelMargin: 0,
  }),
  St = (e, o) =>
    Re(e, { formItemCls: `${e.componentCls}-item`, rootPrefixCls: o }),
  qe = Ee(
    "Form",
    (e, o) => {
      let { rootPrefixCls: n } = o;
      const r = St(e, n);
      return [vr(r), yr(r), Cr(r), wr(r), kr(r), $r(r), no(r), ct];
    },
    _r,
    { order: -1e3 }
  ),
  nt = [];
function je(e, o, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  return {
    key: typeof e == "string" ? e : `${o}-${r}`,
    error: e,
    errorStatus: n,
  };
}
const Or = (e) => {
    let {
      help: o,
      helpStatus: n,
      errors: r = nt,
      warnings: i = nt,
      className: s,
      fieldId: a,
      onVisibleChanged: d,
    } = e;
    const { prefixCls: u } = c.exports.useContext(He),
      g = `${u}-item-explain`,
      p = he(u),
      [x, _, C] = qe(u, p),
      $ = c.exports.useMemo(() => Ye(u), [u]),
      j = we(r),
      S = we(i),
      m = c.exports.useMemo(
        () =>
          o != null
            ? [je(o, "help", n)]
            : [].concat(
                X(j.map((v, k) => je(v, "error", "error", k))),
                X(S.map((v, k) => je(v, "warning", "warning", k)))
              ),
        [o, n, j, S]
      ),
      h = {};
    return (
      a && (h.id = `${a}_help`),
      x(
        t(Et, {
          motionDeadline: $.motionDeadline,
          motionName: `${u}-show-help`,
          visible: !!m.length,
          onVisibleChanged: d,
          children: (v) => {
            const { className: k, style: y } = v;
            return t("div", {
              ...Object.assign({}, h, {
                className: q(g, k, C, p, s, _),
                style: y,
                role: "alert",
              }),
              children: t(Rt, {
                ...Object.assign({ keys: m }, Ye(u), {
                  motionName: `${u}-show-help-item`,
                  component: !1,
                }),
                children: (f) => {
                  const {
                    key: F,
                    error: O,
                    errorStatus: P,
                    className: R,
                    style: I,
                  } = f;
                  return t(
                    "div",
                    {
                      className: q(R, { [`${g}-${P}`]: P }),
                      style: I,
                      children: O,
                    },
                    F
                  );
                },
              }),
            });
          },
        })
      )
    );
  },
  $t = Or,
  Ir = ["parentNode"],
  Mr = "form_item";
function me(e) {
  return e === void 0 || e === !1 ? [] : Array.isArray(e) ? e : [e];
}
function _t(e, o) {
  if (!e.length) return;
  const n = e.join("_");
  return o ? `${o}_${n}` : Ir.includes(n) ? `${Mr}_${n}` : n;
}
function Ot(e, o, n, r, i, s) {
  let a = r;
  return (
    s !== void 0
      ? (a = s)
      : n.validating
      ? (a = "validating")
      : e.length
      ? (a = "error")
      : o.length
      ? (a = "warning")
      : (n.touched || (i && n.validated)) && (a = "success"),
    a
  );
}
function it(e) {
  return me(e).join("_");
}
function It(e) {
  const [o] = po(),
    n = c.exports.useRef({}),
    r = c.exports.useMemo(
      () =>
        e != null
          ? e
          : Object.assign(Object.assign({}, o), {
              __INTERNAL__: {
                itemRef: (i) => (s) => {
                  const a = it(i);
                  s ? (n.current[a] = s) : delete n.current[a];
                },
              },
              scrollToField: function (i) {
                let s =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
                const a = me(i),
                  d = _t(a, r.__INTERNAL__.name),
                  u = d ? document.getElementById(d) : null;
                u &&
                  Oo(
                    u,
                    Object.assign(
                      { scrollMode: "if-needed", block: "nearest" },
                      s
                    )
                  );
              },
              getFieldInstance: (i) => {
                const s = it(i);
                return n.current[s];
              },
            }),
      [e, o]
    );
  return [r];
}
var jr =
  (globalThis && globalThis.__rest) ||
  function (e, o) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        o.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        o.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const Fr = (e, o) => {
    const n = c.exports.useContext(Te),
      { getPrefixCls: r, direction: i, form: s } = c.exports.useContext(ee),
      {
        prefixCls: a,
        className: d,
        rootClassName: u,
        size: g,
        disabled: p = n,
        form: x,
        colon: _,
        labelAlign: C,
        labelWrap: $,
        labelCol: j,
        wrapperCol: S,
        hideRequiredMark: m,
        layout: h = "horizontal",
        scrollToFirstError: v,
        requiredMark: k,
        onFinishFailed: y,
        name: f,
        style: F,
        feedbackIcons: O,
        variant: P,
      } = e,
      R = jr(e, [
        "prefixCls",
        "className",
        "rootClassName",
        "size",
        "disabled",
        "form",
        "colon",
        "labelAlign",
        "labelWrap",
        "labelCol",
        "wrapperCol",
        "hideRequiredMark",
        "layout",
        "scrollToFirstError",
        "requiredMark",
        "onFinishFailed",
        "name",
        "style",
        "feedbackIcons",
        "variant",
      ]),
      I = Be(g),
      L = c.exports.useContext(Vt),
      N = c.exports.useMemo(
        () =>
          k !== void 0
            ? k
            : m
            ? !1
            : s && s.requiredMark !== void 0
            ? s.requiredMark
            : !0,
        [m, k, s]
      ),
      w = _ != null ? _ : s == null ? void 0 : s.colon,
      b = r("form", a),
      D = he(b),
      [M, G, K] = qe(b, D),
      V = q(
        b,
        `${b}-${h}`,
        {
          [`${b}-hide-required-mark`]: N === !1,
          [`${b}-rtl`]: i === "rtl",
          [`${b}-${I}`]: I,
        },
        K,
        D,
        G,
        s == null ? void 0 : s.className,
        d,
        u
      ),
      [E] = It(x),
      { __INTERNAL__: A } = E;
    A.name = f;
    const ae = c.exports.useMemo(
      () => ({
        name: f,
        labelAlign: C,
        labelCol: j,
        labelWrap: $,
        wrapperCol: S,
        vertical: h === "vertical",
        colon: w,
        requiredMark: N,
        itemRef: A.itemRef,
        form: E,
        feedbackIcons: O,
      }),
      [f, C, j, S, h, w, N, E, O]
    );
    c.exports.useImperativeHandle(o, () => E);
    const te = (T, B) => {
        if (T) {
          let H = { block: "nearest" };
          typeof T == "object" && (H = T), E.scrollToField(B, H);
        }
      },
      Q = (T) => {
        if ((y == null || y(T), T.errorFields.length)) {
          const B = T.errorFields[0].name;
          if (v !== void 0) {
            te(v, B);
            return;
          }
          s && s.scrollToFirstError !== void 0 && te(s.scrollToFirstError, B);
        }
      };
    return M(
      t(ho.Provider, {
        value: P,
        children: t(Tt, {
          disabled: p,
          children: t(Lt.Provider, {
            value: I,
            children: t(dt, {
              validateMessages: L,
              children: t(se.Provider, {
                value: ae,
                children: t(fo, {
                  ...Object.assign({ id: f }, R, {
                    name: f,
                    onFinishFailed: Q,
                    form: E,
                    style: Object.assign(
                      Object.assign({}, s == null ? void 0 : s.style),
                      F
                    ),
                    className: V,
                  }),
                }),
              }),
            }),
          }),
        }),
      })
    );
  },
  Pr = c.exports.forwardRef(Fr),
  Nr = Pr;
function Dr(e) {
  if (typeof e == "function") return e;
  const o = io(e);
  return o.length <= 1 ? o[0] : o;
}
const Mt = () => {
  const {
    status: e,
    errors: o = [],
    warnings: n = [],
  } = c.exports.useContext(de);
  return { status: e, errors: o, warnings: n };
};
Mt.Context = de;
const Er = Mt;
function Rr(e) {
  const [o, n] = c.exports.useState(e),
    r = c.exports.useRef(null),
    i = c.exports.useRef([]),
    s = c.exports.useRef(!1);
  c.exports.useEffect(
    () => (
      (s.current = !1),
      () => {
        (s.current = !0), Je.cancel(r.current), (r.current = null);
      }
    ),
    []
  );
  function a(d) {
    s.current ||
      (r.current === null &&
        ((i.current = []),
        (r.current = Je(() => {
          (r.current = null),
            n((u) => {
              let g = u;
              return (
                i.current.forEach((p) => {
                  g = p(g);
                }),
                g
              );
            });
        }))),
      i.current.push(d));
  }
  return [o, a];
}
function Vr() {
  const { itemRef: e } = c.exports.useContext(se),
    o = c.exports.useRef({});
  function n(r, i) {
    const s = i && typeof i == "object" && i.ref,
      a = r.join("_");
    return (
      (o.current.name !== a || o.current.originRef !== s) &&
        ((o.current.name = a),
        (o.current.originRef = s),
        (o.current.ref = ke(e(r), s))),
      o.current.ref
    );
  }
  return n;
}
const Tr = (e) => {
    const { formItemCls: o } = e;
    return {
      "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":
        { [`${o}-control`]: { display: "flex" } },
    };
  },
  Lr = Bt(["Form", "item-item"], (e, o) => {
    let { rootPrefixCls: n } = o;
    const r = St(e, n);
    return [Tr(r)];
  }),
  Br = (e) => {
    const {
        prefixCls: o,
        status: n,
        wrapperCol: r,
        children: i,
        errors: s,
        warnings: a,
        _internalItemRender: d,
        extra: u,
        help: g,
        fieldId: p,
        marginBottom: x,
        onErrorVisibleChanged: _,
      } = e,
      C = `${o}-item`,
      $ = c.exports.useContext(se),
      j = r || $.wrapperCol || {},
      S = q(`${C}-control`, j.className),
      m = c.exports.useMemo(() => Object.assign({}, $), [$]);
    delete m.labelCol, delete m.wrapperCol;
    const h = t("div", {
        className: `${C}-control-input`,
        children: t("div", {
          className: `${C}-control-input-content`,
          children: i,
        }),
      }),
      v = c.exports.useMemo(() => ({ prefixCls: o, status: n }), [o, n]),
      k =
        x !== null || s.length || a.length
          ? l("div", {
              style: { display: "flex", flexWrap: "nowrap" },
              children: [
                t(He.Provider, {
                  value: v,
                  children: t($t, {
                    fieldId: p,
                    errors: s,
                    warnings: a,
                    help: g,
                    helpStatus: n,
                    className: `${C}-explain-connected`,
                    onVisibleChanged: _,
                  }),
                }),
                !!x && t("div", { style: { width: 0, height: x } }),
              ],
            })
          : null,
      y = {};
    p && (y.id = `${p}_extra`);
    const f = u
        ? t("div", {
            ...Object.assign({}, y, { className: `${C}-extra` }),
            children: u,
          })
        : null,
      F =
        d && d.mark === "pro_table_render" && d.render
          ? d.render(e, { input: h, errorList: k, extra: f })
          : l(Fe, { children: [h, k, f] });
    return l(se.Provider, {
      value: m,
      children: [
        t(Y, { ...Object.assign({}, j, { className: S }), children: F }),
        t(Lr, { prefixCls: o }),
      ],
    });
  },
  Hr = Br;
var Ar = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z",
        },
      },
    ],
  },
  name: "question-circle",
  theme: "outlined",
};
const zr = Ar;
var qr = function (o, n) {
  return t(De, { ...o, ref: n, icon: zr });
};
const Ur = c.exports.forwardRef(qr);
var Gr =
  (globalThis && globalThis.__rest) ||
  function (e, o) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        o.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        o.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
function Wr(e) {
  return e
    ? typeof e == "object" && !c.exports.isValidElement(e)
      ? e
      : { title: e }
    : null;
}
const Zr = (e) => {
    let {
      prefixCls: o,
      label: n,
      htmlFor: r,
      labelCol: i,
      labelAlign: s,
      colon: a,
      required: d,
      requiredMark: u,
      tooltip: g,
    } = e;
    var p;
    const [x] = mo("Form"),
      {
        vertical: _,
        labelAlign: C,
        labelCol: $,
        labelWrap: j,
        colon: S,
      } = c.exports.useContext(se);
    if (!n) return null;
    const m = i || $ || {},
      h = s || C,
      v = `${o}-item-label`,
      k = q(v, h === "left" && `${v}-left`, m.className, {
        [`${v}-wrap`]: !!j,
      });
    let y = n;
    const f = a === !0 || (S !== !1 && a !== !1);
    f &&
      !_ &&
      typeof n == "string" &&
      n.trim() !== "" &&
      (y = n.replace(/[:|：]\s*$/, ""));
    const O = Wr(g);
    if (O) {
      const { icon: L = t(Ur, {}) } = O,
        N = Gr(O, ["icon"]),
        w = t(so, {
          ...Object.assign({}, N),
          children: c.exports.cloneElement(L, {
            className: `${o}-item-tooltip`,
            title: "",
            onClick: (b) => {
              b.preventDefault();
            },
            tabIndex: null,
          }),
        });
      y = l(Fe, { children: [y, w] });
    }
    const P = u === "optional",
      R = typeof u == "function";
    R
      ? (y = u(y, { required: !!d }))
      : P &&
        !d &&
        (y = l(Fe, {
          children: [
            y,
            t("span", {
              className: `${o}-item-optional`,
              title: "",
              children:
                (x == null ? void 0 : x.optional) ||
                ((p = Ht.Form) === null || p === void 0 ? void 0 : p.optional),
            }),
          ],
        }));
    const I = q({
      [`${o}-item-required`]: d,
      [`${o}-item-required-mark-optional`]: P || R,
      [`${o}-item-no-colon`]: !f,
    });
    return t(Y, {
      ...Object.assign({}, m, { className: k }),
      children: t("label", {
        htmlFor: r,
        className: I,
        title: typeof n == "string" ? n : "",
        children: y,
      }),
    });
  },
  Xr = Zr,
  Kr = { success: Zt, warning: Xt, error: go, validating: Kt };
function jt(e) {
  let {
    children: o,
    errors: n,
    warnings: r,
    hasFeedback: i,
    validateStatus: s,
    prefixCls: a,
    meta: d,
    noStyle: u,
  } = e;
  const g = `${a}-item`,
    { feedbackIcons: p } = c.exports.useContext(se),
    x = Ot(n, r, d, null, !!i, s),
    {
      isFormItemInput: _,
      status: C,
      hasFeedback: $,
      feedbackIcon: j,
    } = c.exports.useContext(de),
    S = c.exports.useMemo(() => {
      var m;
      let h;
      if (i) {
        const k = (i !== !0 && i.icons) || p,
          y =
            x &&
            ((m =
              k == null ? void 0 : k({ status: x, errors: n, warnings: r })) ===
              null || m === void 0
              ? void 0
              : m[x]),
          f = x && Kr[x];
        h =
          y !== !1 && f
            ? t("span", {
                className: q(`${g}-feedback-icon`, `${g}-feedback-icon-${x}`),
                children: y || t(f, {}),
              })
            : null;
      }
      const v = {
        status: x || "",
        errors: n,
        warnings: r,
        hasFeedback: !!i,
        feedbackIcon: h,
        isFormItemInput: !0,
      };
      return (
        u &&
          ((v.status = (x != null ? x : C) || ""),
          (v.isFormItemInput = _),
          (v.hasFeedback = !!(i != null ? i : $)),
          (v.feedbackIcon = i !== void 0 ? v.feedbackIcon : j)),
        v
      );
    }, [x, i, u, _, C]);
  return t(de.Provider, { value: S, children: o });
}
var Qr =
  (globalThis && globalThis.__rest) ||
  function (e, o) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        o.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        o.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
function Yr(e) {
  const {
      prefixCls: o,
      className: n,
      rootClassName: r,
      style: i,
      help: s,
      errors: a,
      warnings: d,
      validateStatus: u,
      meta: g,
      hasFeedback: p,
      hidden: x,
      children: _,
      fieldId: C,
      required: $,
      isRequired: j,
      onSubItemMetaChange: S,
    } = e,
    m = Qr(e, [
      "prefixCls",
      "className",
      "rootClassName",
      "style",
      "help",
      "errors",
      "warnings",
      "validateStatus",
      "meta",
      "hasFeedback",
      "hidden",
      "children",
      "fieldId",
      "required",
      "isRequired",
      "onSubItemMetaChange",
    ]),
    h = `${o}-item`,
    { requiredMark: v } = c.exports.useContext(se),
    k = c.exports.useRef(null),
    y = we(a),
    f = we(d),
    F = s != null,
    O = !!(F || a.length || d.length),
    P = !!k.current && lo(k.current),
    [R, I] = c.exports.useState(null);
  At(() => {
    if (O && k.current) {
      const D = getComputedStyle(k.current);
      I(parseInt(D.marginBottom, 10));
    }
  }, [O, P]);
  const L = (D) => {
      D || I(null);
    },
    w = (function () {
      let D =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      const M = D ? y : g.errors,
        G = D ? f : g.warnings;
      return Ot(M, G, g, "", !!p, u);
    })(),
    b = q(h, n, r, {
      [`${h}-with-help`]: F || y.length || f.length,
      [`${h}-has-feedback`]: w && p,
      [`${h}-has-success`]: w === "success",
      [`${h}-has-warning`]: w === "warning",
      [`${h}-has-error`]: w === "error",
      [`${h}-is-validating`]: w === "validating",
      [`${h}-hidden`]: x,
    });
  return l("div", {
    className: b,
    style: i,
    ref: k,
    children: [
      l(ft, {
        ...Object.assign(
          { className: `${h}-row` },
          Le(m, [
            "_internalItemRender",
            "colon",
            "dependencies",
            "extra",
            "fieldKey",
            "getValueFromEvent",
            "getValueProps",
            "htmlFor",
            "id",
            "initialValue",
            "isListField",
            "label",
            "labelAlign",
            "labelCol",
            "labelWrap",
            "messageVariables",
            "name",
            "normalize",
            "noStyle",
            "preserve",
            "requiredMark",
            "rules",
            "shouldUpdate",
            "trigger",
            "tooltip",
            "validateFirst",
            "validateTrigger",
            "valuePropName",
            "wrapperCol",
            "validateDebounce",
          ])
        ),
        children: [
          t(Xr, {
            ...Object.assign({ htmlFor: C }, e, {
              requiredMark: v,
              required: $ != null ? $ : j,
              prefixCls: o,
            }),
          }),
          t(Hr, {
            ...Object.assign({}, e, g, {
              errors: y,
              warnings: f,
              prefixCls: o,
              status: w,
              help: s,
              marginBottom: R,
              onErrorVisibleChanged: L,
            }),
            children: t(ut.Provider, {
              value: S,
              children: t(jt, {
                prefixCls: o,
                meta: g,
                errors: g.errors,
                warnings: g.warnings,
                hasFeedback: p,
                validateStatus: w,
                children: _,
              }),
            }),
          }),
        ],
      }),
      !!R &&
        t("div", {
          className: `${h}-margin-offset`,
          style: { marginBottom: -R },
        }),
    ],
  });
}
const Jr = "__SPLIT__";
function en(e, o) {
  const n = Object.keys(e),
    r = Object.keys(o);
  return (
    n.length === r.length &&
    n.every((i) => {
      const s = e[i],
        a = o[i];
      return s === a || typeof s == "function" || typeof a == "function";
    })
  );
}
const tn = c.exports.memo(
  (e) => {
    let { children: o } = e;
    return o;
  },
  (e, o) =>
    en(e.control, o.control) &&
    e.update === o.update &&
    e.childProps.length === o.childProps.length &&
    e.childProps.every((n, r) => n === o.childProps[r])
);
function st() {
  return {
    errors: [],
    warnings: [],
    touched: !1,
    validating: !1,
    name: [],
    validated: !1,
  };
}
function on(e) {
  const {
      name: o,
      noStyle: n,
      className: r,
      dependencies: i,
      prefixCls: s,
      shouldUpdate: a,
      rules: d,
      children: u,
      required: g,
      label: p,
      messageVariables: x,
      trigger: _ = "onChange",
      validateTrigger: C,
      hidden: $,
      help: j,
    } = e,
    { getPrefixCls: S } = c.exports.useContext(ee),
    { name: m } = c.exports.useContext(se),
    h = Dr(u),
    v = typeof h == "function",
    k = c.exports.useContext(ut),
    { validateTrigger: y } = c.exports.useContext(bo),
    f = C !== void 0 ? C : y,
    F = o != null,
    O = S("form", s),
    P = he(O),
    [R, I, L] = qe(O, P);
  zt();
  const N = c.exports.useContext(Co),
    w = c.exports.useRef(),
    [b, D] = Rr({}),
    [M, G] = ao(() => st()),
    K = (T) => {
      const B = N == null ? void 0 : N.getKey(T.name);
      if ((G(T.destroy ? st() : T, !0), n && j !== !1 && k)) {
        let H = T.name;
        if (T.destroy) H = w.current || H;
        else if (B !== void 0) {
          const [U, W] = B;
          (H = [U].concat(X(W))), (w.current = H);
        }
        k(T, H);
      }
    },
    V = (T, B) => {
      D((H) => {
        const U = Object.assign({}, H),
          oe = [].concat(X(T.name.slice(0, -1)), X(B)).join(Jr);
        return T.destroy ? delete U[oe] : (U[oe] = T), U;
      });
    },
    [E, A] = c.exports.useMemo(() => {
      const T = X(M.errors),
        B = X(M.warnings);
      return (
        Object.values(b).forEach((H) => {
          T.push.apply(T, X(H.errors || [])),
            B.push.apply(B, X(H.warnings || []));
        }),
        [T, B]
      );
    }, [b, M.errors, M.warnings]),
    ae = Vr();
  function te(T, B, H) {
    return n && !$
      ? t(jt, {
          prefixCls: O,
          hasFeedback: e.hasFeedback,
          validateStatus: e.validateStatus,
          meta: M,
          errors: E,
          warnings: A,
          noStyle: !0,
          children: T,
        })
      : t(Yr, {
          ...Object.assign({ key: "row" }, e, {
            className: q(r, L, P, I),
            prefixCls: O,
            fieldId: B,
            isRequired: H,
            errors: E,
            warnings: A,
            meta: M,
            onSubItemMetaChange: V,
          }),
          children: T,
        });
  }
  if (!F && !v && !i) return R(te(h));
  let Q = {};
  return (
    typeof p == "string" ? (Q.label = p) : o && (Q.label = String(o)),
    x && (Q = Object.assign(Object.assign({}, Q), x)),
    R(
      t(xo, {
        ...Object.assign({}, e, {
          messageVariables: Q,
          trigger: _,
          validateTrigger: f,
          onMetaChange: K,
        }),
        children: (T, B, H) => {
          const U = me(o).length && B ? B.name : [],
            W = _t(U, m),
            oe =
              g !== void 0
                ? g
                : !!(
                    d &&
                    d.some((z) => {
                      if (
                        z &&
                        typeof z == "object" &&
                        z.required &&
                        !z.warningOnly
                      )
                        return !0;
                      if (typeof z == "function") {
                        const ue = z(H);
                        return ue && ue.required && !ue.warningOnly;
                      }
                      return !1;
                    })
                  ),
            re = Object.assign({}, T);
          let ne = null;
          if (Array.isArray(h) && F) ne = h;
          else if (!(v && (!(a || i) || F))) {
            if (!(i && !v && !F))
              if (co(h)) {
                const z = Object.assign(Object.assign({}, h.props), re);
                if (
                  (z.id || (z.id = W),
                  j || E.length > 0 || A.length > 0 || e.extra)
                ) {
                  const pe = [];
                  (j || E.length > 0) && pe.push(`${W}_help`),
                    e.extra && pe.push(`${W}_extra`),
                    (z["aria-describedby"] = pe.join(" "));
                }
                E.length > 0 && (z["aria-invalid"] = "true"),
                  oe && (z["aria-required"] = "true"),
                  uo(h) && (z.ref = ae(U, h)),
                  new Set([].concat(X(me(_)), X(me(f)))).forEach((pe) => {
                    z[pe] = function () {
                      for (
                        var Ue,
                          Ge,
                          $e,
                          We,
                          _e,
                          Ze = arguments.length,
                          Oe = new Array(Ze),
                          Ce = 0;
                        Ce < Ze;
                        Ce++
                      )
                        Oe[Ce] = arguments[Ce];
                      ($e = re[pe]) === null ||
                        $e === void 0 ||
                        (Ue = $e).call.apply(Ue, [re].concat(Oe)),
                        (_e = (We = h.props)[pe]) === null ||
                          _e === void 0 ||
                          (Ge = _e).call.apply(Ge, [We].concat(Oe));
                    };
                  });
                const be = [
                  z["aria-required"],
                  z["aria-invalid"],
                  z["aria-describedby"],
                ];
                ne = t(tn, {
                  control: re,
                  update: h,
                  childProps: be,
                  children: Ne(h, z),
                });
              } else v && (a || i) && !F ? (ne = h(H)) : (ne = h);
          }
          return te(ne, W, oe);
        },
      })
    )
  );
}
const Ft = on;
Ft.useStatus = Er;
const rn = Ft;
var nn =
  (globalThis && globalThis.__rest) ||
  function (e, o) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        o.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        o.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const sn = (e) => {
    var { prefixCls: o, children: n } = e,
      r = nn(e, ["prefixCls", "children"]);
    const { getPrefixCls: i } = c.exports.useContext(ee),
      s = i("form", o),
      a = c.exports.useMemo(() => ({ prefixCls: s, status: "error" }), [s]);
    return t(vo, {
      ...Object.assign({}, r),
      children: (d, u, g) =>
        t(He.Provider, {
          value: a,
          children: n(
            d.map((p) =>
              Object.assign(Object.assign({}, p), { fieldKey: p.key })
            ),
            u,
            { errors: g.errors, warnings: g.warnings }
          ),
        }),
    });
  },
  ln = sn;
function an() {
  const { form: e } = c.exports.useContext(se);
  return e;
}
const le = Nr;
le.Item = rn;
le.List = ln;
le.ErrorList = $t;
le.useForm = It;
le.useFormInstance = an;
le.useWatch = yo;
le.Provider = dt;
le.create = () => {};
const ie = le;
const cn = "/assets/Frame.24b4f9b9.svg";
const dn = ({ open: e, onClose: o, onSuccess: n }) => {
    const [r] = ie.useForm(),
      [i] = c.exports.useState("vertical"),
      s = ({ layout: p }) => {},
      [a, d] = c.exports.useState(!1),
      u = async () => {
        r.validateFields()
          .then((p) => {
            d(!0);
            let x = {};
            for (const _ in p)
              p[_] !== void 0 &&
                (_ === "interested" ? (x[_] = p[_].join(",")) : (x[_] = p[_]));
            fetch("https://tgbotwatch.network3.io/crescent/add-data", {
              method: "POST",
              mode: "cors",
              body: JSON.stringify(x),
              headers: { "Content-type": "application/json" },
            }).then((_) => {
              console.log("::res", _),
                d(!1),
                n(),
                Qe.info({
                  title: "Congrats! You successfully submitted your request.",
                  content: t("div", {
                    children: t("p", {
                      children:
                        "We will contact you as soon as possible via the email address you provided in the form.",
                    }),
                  }),
                  onOk: () => {},
                  okText: "Okay",
                  cancelText: "Cancel",
                  centered: !0,
                  okButtonProps: { className: "custom-ok-button" },
                  cancelButtonProps: { className: "custom-cancel-button" },
                });
            });
          })
          .catch((p) => {
            d(!1);
          });
      },
      g = () => {
        o();
      };
    return (
      c.exports.useEffect(() => {
        e && r.resetFields();
      }, [e]),
      t(Qe, {
        closable: !1,
        open: e,
        maskClosable: !1,
        onOk: u,
        okButtonProps: { loading: a },
        onCancel: g,
        className: "custom-modal",
        title: "IP Request",
        centered: !0,
        okText: "Submit request",
        cancelText: "Cancel",
        children: l(ie, {
          layout: i,
          form: r,
          initialValues: { layout: i },
          onValuesChange: s,
          children: [
            t(ie.Item, {
              children: "Let\u2019s know what data you are interested in",
            }),
            t(ie.Item, {
              label: "",
              name: "name",
              rules: [{ required: !0, message: "please enter Name" }],
              children: t(ve, { placeholder: "Name*" }),
            }),
            t(ie.Item, {
              label: "",
              name: "email",
              rules: [
                { type: "email", required: !0, message: "please enter Email" },
              ],
              children: t(ve, { placeholder: "Email address* " }),
            }),
            t(ie.Item, {
              required: !0,
              label: "I am",
              name: "userType",
              rules: [{ required: !0, message: "please select" }],
              children: t(Me.Group, {
                children: l(mt, {
                  direction: "vertical",
                  children: [
                    t(Me, {
                      value: "individual",
                      children: " Individual user ",
                    }),
                    t(Me, {
                      value: "enterprise",
                      children: " Enterprise user ",
                    }),
                  ],
                }),
              }),
            }),
            t(ie.Item, {
              name: "interested",
              label: "Your interested data:",
              children: t(J.Group, {
                children: l(ft, {
                  children: [
                    t(Y, {
                      span: 8,
                      children: t(J, {
                        value: "Education",
                        style: { lineHeight: "32px" },
                        children: "Education",
                      }),
                    }),
                    t(Y, {
                      span: 8,
                      children: t(J, {
                        value: "Ad_Tech",
                        style: { lineHeight: "32px" },
                        children: "Ad Tech",
                      }),
                    }),
                    t(Y, {
                      span: 8,
                      children: t(J, {
                        value: "Marketing",
                        style: { lineHeight: "32px" },
                        children: "Marketing",
                      }),
                    }),
                    t(Y, {
                      span: 8,
                      children: t(J, {
                        value: "Data_for_AI",
                        style: { lineHeight: "32px" },
                        children: "Data for AI",
                      }),
                    }),
                    t(Y, {
                      span: 8,
                      children: t(J, {
                        value: "Travel",
                        style: { lineHeight: "32px" },
                        children: "Travel",
                      }),
                    }),
                    t(Y, {
                      span: 8,
                      children: t(J, {
                        value: "Finance",
                        style: { lineHeight: "32px" },
                        children: "Finance",
                      }),
                    }),
                    t(Y, {
                      span: 8,
                      children: t(J, {
                        value: "Real_Estate",
                        style: { lineHeight: "32px" },
                        children: "Real Estate",
                      }),
                    }),
                    t(Y, {
                      span: 8,
                      children: t(J, {
                        value: "Social_media",
                        style: { lineHeight: "32px" },
                        children: "Social media",
                      }),
                    }),
                    t(Y, {
                      span: 8,
                      children: t(J, {
                        value: "Data_Security",
                        style: { lineHeight: "32px" },
                        children: "Data Security",
                      }),
                    }),
                    t(Y, {
                      span: 8,
                      children: t(J, {
                        value: "SEO",
                        style: { lineHeight: "32px" },
                        children: "SEO",
                      }),
                    }),
                  ],
                }),
              }),
            }),
            t(ie.Item, {
              name: "otherDate",
              label: "",
              children: t(ve, {
                style: { width: 300 },
                placeholder: "Enter other date",
              }),
            }),
            t(ie.Item, {
              name: "extra",
              label: "Additional notes",
              children: t(ve.TextArea, {
                showCount: !0,
                placeholder:
                  "Tell us more about what data and IPs you are interested.",
                maxLength: 100,
              }),
            }),
          ],
        }),
      })
    );
  },
  un = dn,
  { Content: pn } = lt,
  Sn = () => {
    const [e] = qt(),
      o = Qt(document.querySelector("body")),
      [n, r] = Yt("cookieAlertShow"),
      [i, s] = c.exports.useState(!1),
      a = () => {
        s(!0);
      },
      d = () => {
        r("1");
      },
      [u, g] = c.exports.useState(!1),
      p = () => {
        g(!0);
      };
    return t("div", {
      className: "pool_wrap",
      children: l(lt, {
        className: "pool-main",
        children: [
          t(oo, {}),
          l("div", {
            className: "pool-layout",
            children: [
              t(pn, {
                className: "pool-content-group",
                children: l("div", {
                  className: "pool-content-group-group1",
                  children: [
                    l("div", {
                      className: "slogan",
                      children: [
                        t("div", {
                          className: "slogan-1",
                          children: "Altarra IP Pool",
                        }),
                        l("div", {
                          className: "slogan-2 mini",
                          children: [
                            "Unleash Maximum Control ",
                            t("br", {}),
                            " and Efficiency",
                          ],
                        }),
                        l("div", {
                          className: "slogan-3",
                          children: [
                            "Welcome to the internet's most trusted platform for web data. Leading IP address ",
                            t("br", {}),
                            " pool services, AI-driven smart scraping, and downloadable business-ready datasets",
                          ],
                        }),
                        t("div", {
                          className: "start_btn",
                          onClick: p,
                          children: "Submit request",
                        }),
                      ],
                    }),
                    t("div", { className: "diamon-1" }),
                    t("div", { className: "diamon-4" }),
                  ],
                }),
              }),
              l("div", {
                children: [
                  l("div", {
                    className: "icons",
                    children: [
                      l("div", {
                        className: "item",
                        children: [
                          l("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "60",
                            height: "60",
                            viewBox: "0 0 60 60",
                            fill: "none",
                            children: [
                              t("path", {
                                d: "M27.5 10V25C27.5 27.7614 22.4633 30 16.25 30C10.0368 30 5 27.7614 5 25V10",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M27.5 17.5C27.5 20.2614 22.4633 22.5 16.25 22.5C10.0368 22.5 5 20.2614 5 17.5",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M27.5 10C27.5 12.7614 22.4633 15 16.25 15C10.0368 15 5 12.7614 5 10C5 7.23857 10.0368 5 16.25 5C22.4633 5 27.5 7.23857 27.5 10Z",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M40 7.5H47.5C50.2614 7.5 52.5 9.73857 52.5 12.5V20",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M20 52.5H12.5C9.73857 52.5 7.5 50.2614 7.5 47.5V40",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M43.75 47.5V55",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M51.25 55H43.75H36.25",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M55 47.5V32.5H32.5V47.5H55Z",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                            ],
                          }),
                          t("div", { children: "Datasets" }),
                          l("div", {
                            children: [
                              "Access fresh data from any",
                              t("br", {}),
                              " website",
                            ],
                          }),
                        ],
                      }),
                      l("div", {
                        className: "item",
                        children: [
                          l("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "60",
                            height: "60",
                            viewBox: "0 0 60 60",
                            fill: "none",
                            children: [
                              t("path", {
                                d: "M30 45V37.5",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M25 50H7.5",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M35 50H52.5",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M35 50C35 52.7614 32.7614 55 30 55C27.2386 55 25 52.7614 25 50C25 47.2386 27.2386 45 30 45C32.7614 45 35 47.2386 35 50Z",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M46.25 21.25C46.25 30.2246 38.9746 37.5 30 37.5C21.0254 37.5 13.75 30.2246 13.75 21.25M46.25 21.25C46.25 12.2754 38.9746 5 30 5C21.0254 5 13.75 12.2754 13.75 21.25M46.25 21.25H13.75",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M36.25 21.25C36.25 30.2246 33.4517 37.5 30 37.5C26.5483 37.5 23.75 30.2246 23.75 21.25C23.75 12.2754 26.5483 5 30 5C33.4517 5 36.25 12.2754 36.25 21.25Z",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M46.25 21.25H13.75",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                            ],
                          }),
                          t("div", { children: "Proxies" }),
                          l("div", {
                            children: [
                              "Global Proxy Network: 190+ ",
                              t("br", {}),
                              " Locations, Precise Targeting",
                            ],
                          }),
                        ],
                      }),
                      l("div", {
                        className: "item",
                        children: [
                          l("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "60",
                            height: "60",
                            viewBox: "0 0 60 60",
                            fill: "none",
                            children: [
                              t("path", {
                                d: "M30 45V37.5",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M25 50H7.5",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M35 50H52.5",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M35 50C35 52.7614 32.7614 55 30 55C27.2386 55 25 52.7614 25 50C25 47.2386 27.2386 45 30 45C32.7614 45 35 47.2386 35 50Z",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M46.25 21.25C46.25 30.2246 38.9746 37.5 30 37.5C21.0254 37.5 13.75 30.2246 13.75 21.25M46.25 21.25C46.25 12.2754 38.9746 5 30 5C21.0254 5 13.75 12.2754 13.75 21.25M46.25 21.25H13.75",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M36.25 21.25C36.25 30.2246 33.4517 37.5 30 37.5C26.5483 37.5 23.75 30.2246 23.75 21.25C23.75 12.2754 26.5483 5 30 5C33.4517 5 36.25 12.2754 36.25 21.25Z",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M46.25 21.25H13.75",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                            ],
                          }),
                          t("div", { children: "Web Unlocker" }),
                          l("div", {
                            children: [
                              "Scrape any website easily - ",
                              t("br", {}),
                              " automated unblocking at scale",
                            ],
                          }),
                        ],
                      }),
                      l("div", {
                        className: "item",
                        children: [
                          l("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "60",
                            height: "60",
                            viewBox: "0 0 60 60",
                            fill: "none",
                            children: [
                              t("path", {
                                d: "M52.5 22.5V50C52.5 51.3807 51.3807 52.5 50 52.5H10C8.61929 52.5 7.5 51.3807 7.5 50V22.5",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M7.5 10C7.5 8.61929 8.61929 7.5 10 7.5H50C51.3807 7.5 52.5 8.61929 52.5 10V22.5H7.5V10Z",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M15 17.5C16.3807 17.5 17.5 16.3807 17.5 15C17.5 13.6193 16.3807 12.5 15 12.5C13.6193 12.5 12.5 13.6193 12.5 15C12.5 16.3807 13.6193 17.5 15 17.5Z",
                                fill: "#00D193",
                              }),
                              t("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M22.5 17.5C23.8807 17.5 25 16.3807 25 15C25 13.6193 23.8807 12.5 22.5 12.5C21.1193 12.5 20 13.6193 20 15C20 16.3807 21.1193 17.5 22.5 17.5Z",
                                fill: "#00D193",
                              }),
                              t("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M30 17.5C31.3807 17.5 32.5 16.3807 32.5 15C32.5 13.6193 31.3807 12.5 30 12.5C28.6193 12.5 27.5 13.6193 27.5 15C27.5 16.3807 28.6193 17.5 30 17.5Z",
                                fill: "#00D193",
                              }),
                            ],
                          }),
                          t("div", { children: "Browser" }),
                          l("div", {
                            children: [
                              "Run browser automation scripts on ",
                              t("br", {}),
                              " managed cloud browsers",
                            ],
                          }),
                        ],
                      }),
                      l("div", {
                        className: "item",
                        children: [
                          l("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "60",
                            height: "60",
                            viewBox: "0 0 60 60",
                            fill: "none",
                            children: [
                              t("path", {
                                d: "M51.25 7.5H8.75C6.67893 7.5 5 9.17893 5 11.25V41.25C5 43.3211 6.67893 45 8.75 45H51.25C53.3211 45 55 43.3211 55 41.25V11.25C55 9.17893 53.3211 7.5 51.25 7.5Z",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M30 45V53.75",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M40 17.5L20 35",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M12.5 53.75H47.5",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M18.75 25C20.8211 25 22.5 23.3211 22.5 21.25C22.5 19.1789 20.8211 17.5 18.75 17.5C16.6789 17.5 15 19.1789 15 21.25C15 23.3211 16.6789 25 18.75 25Z",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M41.25 35C43.3211 35 45 33.3211 45 31.25C45 29.1789 43.3211 27.5 41.25 27.5C39.1789 27.5 37.5 29.1789 37.5 31.25C37.5 33.3211 39.1789 35 41.25 35Z",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                            ],
                          }),
                          t("div", { children: "Web Scraper" }),
                          l("div", {
                            children: [
                              "Structured web data from 100+ ",
                              t("br", {}),
                              "sites via ready-made APIs",
                            ],
                          }),
                        ],
                      }),
                      l("div", {
                        className: "item",
                        children: [
                          l("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "60",
                            height: "60",
                            viewBox: "0 0 60 60",
                            fill: "none",
                            children: [
                              t("path", {
                                d: "M51.25 7.5H8.75C6.67893 7.5 5 9.17893 5 11.25V41.25C5 43.3211 6.67893 45 8.75 45H51.25C53.3211 45 55 43.3211 55 41.25V11.25C55 9.17893 53.3211 7.5 51.25 7.5Z",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M30 45V53.75",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M40 17.5L20 35",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M12.5 53.75H47.5",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M18.75 25C20.8211 25 22.5 23.3211 22.5 21.25C22.5 19.1789 20.8211 17.5 18.75 17.5C16.6789 17.5 15 19.1789 15 21.25C15 23.3211 16.6789 25 18.75 25Z",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M41.25 35C43.3211 35 45 33.3211 45 31.25C45 29.1789 43.3211 27.5 41.25 27.5C39.1789 27.5 37.5 29.1789 37.5 31.25C37.5 33.3211 39.1789 35 41.25 35Z",
                                stroke: "#00D193",
                                "stroke-width": "3",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                            ],
                          }),
                          t("div", { children: "SERP API" }),
                          l("div", {
                            children: [
                              "Effortlessly scrape SERP data with",
                              t("br", {}),
                              " our SERP API, Pay only for",
                              t("br", {}),
                              " successful requests",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  l("div", {
                    className: "slogan",
                    children: [
                      t("div", {
                        className: "slogan-1",
                        children: "Our Popular Use Case",
                      }),
                      l("div", {
                        className: "slogan-2 mini",
                        children: [
                          "Unlock possibilities, gain ",
                          t("br", {}),
                          " a competitive edge in ",
                          t("br", {}),
                          " your industry",
                          " ",
                        ],
                      }),
                      t("div", {
                        className: "start_btn",
                        onClick: p,
                        children: "Submit request",
                      }),
                    ],
                  }),
                  l("div", {
                    className: "bottom_icons",
                    children: [
                      l("div", {
                        className: "item",
                        children: [
                          l("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "33",
                            height: "32",
                            viewBox: "0 0 33 32",
                            fill: "none",
                            children: [
                              l("g", {
                                "clip-path": "url(#clip0_214_1184)",
                                children: [
                                  t("path", {
                                    d: "M16.5 14.6663C19.8137 14.6663 22.5 11.98 22.5 8.66626C22.5 5.35255 19.8137 2.66626 16.5 2.66626C13.1863 2.66626 10.5 5.35255 10.5 8.66626C10.5 11.98 13.1863 14.6663 16.5 14.6663Z",
                                    stroke: "url(#paint0_linear_214_1184)",
                                    "stroke-width": "2.66667",
                                    "stroke-linejoin": "round",
                                  }),
                                  t("path", {
                                    d: "M3.83252 29.333C3.83252 23.708 7.94919 18.458 11.4325 17.333C11.4325 17.333 14.5992 20.708 16.4992 22.958L21.5659 17.333C24.4159 17.708 29.1659 23.708 29.1659 29.333",
                                    stroke: "url(#paint1_linear_214_1184)",
                                    "stroke-width": "2.66667",
                                    "stroke-linejoin": "round",
                                  }),
                                  t("path", {
                                    d: "M1.83252 29.333H31.1659",
                                    stroke: "url(#paint2_linear_214_1184)",
                                    "stroke-width": "2.66667",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                  }),
                                ],
                              }),
                              l("defs", {
                                children: [
                                  l("linearGradient", {
                                    id: "paint0_linear_214_1184",
                                    x1: "10.2412",
                                    y1: "8.66625",
                                    x2: "23.2844",
                                    y2: "8.66625",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint1_linear_214_1184",
                                    x1: "3.28625",
                                    y1: "23.333",
                                    x2: "30.8217",
                                    y2: "23.333",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint2_linear_214_1184",
                                    x1: "1.19999",
                                    y1: "29.833",
                                    x2: "33.0832",
                                    y2: "29.833",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  t("clipPath", {
                                    id: "clip0_214_1184",
                                    children: t("rect", {
                                      width: "32",
                                      height: "32",
                                      fill: "white",
                                      transform: "translate(0.5)",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t("div", { children: "Education" }),
                        ],
                      }),
                      l("div", {
                        className: "item",
                        children: [
                          l("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "33",
                            height: "32",
                            viewBox: "0 0 33 32",
                            fill: "none",
                            children: [
                              t("path", {
                                d: "M16.7489 3.33325L12.6736 11.6517L3.4165 12.994L10.1224 19.55L8.51944 28.6666L16.7489 24.2794L24.9801 28.6666L23.3889 19.55L30.0832 12.994L20.8774 11.6517L16.7489 3.33325Z",
                                stroke: "url(#paint0_linear_214_1190)",
                                "stroke-width": "2.66667",
                                "stroke-linejoin": "round",
                              }),
                              t("defs", {
                                children: l("linearGradient", {
                                  id: "paint0_linear_214_1190",
                                  x1: "2.84148",
                                  y1: "15.9999",
                                  x2: "31.8262",
                                  y2: "15.9999",
                                  gradientUnits: "userSpaceOnUse",
                                  children: [
                                    t("stop", { "stop-color": "#00D193" }),
                                    t("stop", {
                                      offset: "1",
                                      "stop-color": "#20AFF3",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          t("div", { children: "Data for AI" }),
                        ],
                      }),
                      l("div", {
                        className: "item",
                        children: [
                          l("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "32",
                            height: "32",
                            viewBox: "0 0 32 32",
                            fill: "none",
                            children: [
                              t("path", {
                                d: "M29.3337 29.3334V13.3334L16.0003 2.66675L2.66699 13.3334V29.3334H10.667V17.3334H21.3337V29.3334H29.3337Z",
                                stroke: "url(#paint0_linear_214_1743)",
                                "stroke-width": "2.66667",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M16.0005 29.3334V22.6667",
                                stroke: "url(#paint1_linear_214_1743)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l("defs", {
                                children: [
                                  l("linearGradient", {
                                    id: "paint0_linear_214_1743",
                                    x1: "2.09197",
                                    y1: "16.0001",
                                    x2: "31.0767",
                                    y2: "16.0001",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint1_linear_214_1743",
                                    x1: "15.9789",
                                    y1: "26.0001",
                                    x2: "17.0659",
                                    y2: "26.0001",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t("div", { children: "Real Estate" }),
                        ],
                      }),
                      l("div", {
                        className: "item",
                        children: [
                          l("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "33",
                            height: "32",
                            viewBox: "0 0 33 32",
                            fill: "none",
                            children: [
                              t("path", {
                                d: "M27.5832 5.33325H4.9165C3.81193 5.33325 2.9165 6.22868 2.9165 7.33325V24.6666C2.9165 25.7712 3.81193 26.6666 4.9165 26.6666H27.5832C28.6877 26.6666 29.5832 25.7712 29.5832 24.6666V7.33325C29.5832 6.22868 28.6877 5.33325 27.5832 5.33325Z",
                                stroke: "url(#paint0_linear_214_1748)",
                                "stroke-width": "2.66667",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M2.9165 7.33325C2.9165 6.22869 3.81194 5.33325 4.9165 5.33325H27.5832C28.6878 5.33325 29.5832 6.22869 29.5832 7.33325V13.3333H2.9165V7.33325Z",
                                stroke: "url(#paint1_linear_214_1748)",
                                "stroke-width": "2.66667",
                              }),
                              t("path", {
                                d: "M5.58333 9.33342C5.58333 8.59704 6.18029 8.00008 6.91667 8.00008C7.65305 8.00008 8.25 8.59703 8.25 9.33341C8.25 10.0698 7.65305 10.6667 6.91667 10.6667C6.18029 10.6667 5.58333 10.0698 5.58333 9.33342Z",
                                fill: "url(#paint2_linear_214_1748)",
                              }),
                              t("path", {
                                d: "M9.58333 9.33342C9.58333 8.59704 10.1803 8.00008 10.9167 8.00008C11.653 8.00008 12.25 8.59703 12.25 9.33341C12.25 10.0698 11.653 10.6667 10.9167 10.6667C10.1803 10.6667 9.58333 10.0698 9.58333 9.33342Z",
                                fill: "url(#paint3_linear_214_1748)",
                              }),
                              l("defs", {
                                children: [
                                  l("linearGradient", {
                                    id: "paint0_linear_214_1748",
                                    x1: "2.34148",
                                    y1: "15.9999",
                                    x2: "31.3262",
                                    y2: "15.9999",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint1_linear_214_1748",
                                    x1: "2.34148",
                                    y1: "9.33325",
                                    x2: "31.3262",
                                    y2: "9.33325",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint2_linear_214_1748",
                                    x1: "6.91667",
                                    y1: "10.7243",
                                    x2: "6.91667",
                                    y2: "7.82578",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint3_linear_214_1748",
                                    x1: "10.9167",
                                    y1: "10.7243",
                                    x2: "10.9167",
                                    y2: "7.82578",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t("div", { children: "Ad Tech" }),
                        ],
                      }),
                      l("div", {
                        className: "item",
                        children: [
                          l("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "33",
                            height: "32",
                            viewBox: "0 0 33 32",
                            fill: "none",
                            children: [
                              t("path", {
                                d: "M14.1663 7.02488C14.1663 4.34295 15.7219 3.00199 16.4997 2.66675C17.2775 3.00199 18.833 4.34295 18.833 7.02488V12.0535L29.1663 20.6667V23.3334L18.4997 18.0001V24.0001L21.833 29.3334L16.4997 27.3334L11.1663 29.3334L14.4997 24.0001V18.0001L3.83301 23.3334V20.6667L14.1663 12.0535V7.02488Z",
                                stroke: "url(#paint0_linear_214_1754)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("defs", {
                                children: l("linearGradient", {
                                  id: "paint0_linear_214_1754",
                                  x1: "3.28674",
                                  y1: "16.0001",
                                  x2: "30.8222",
                                  y2: "16.0001",
                                  gradientUnits: "userSpaceOnUse",
                                  children: [
                                    t("stop", { "stop-color": "#00D193" }),
                                    t("stop", {
                                      offset: "1",
                                      "stop-color": "#20AFF3",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          t("div", { children: "Travel" }),
                        ],
                      }),
                      l("div", {
                        className: "item",
                        children: [
                          t("img", { src: cn, alt: "" }),
                          t("div", { children: "Social Media" }),
                        ],
                      }),
                      l("div", {
                        className: "item",
                        children: [
                          l("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "33",
                            height: "32",
                            viewBox: "0 0 33 32",
                            fill: "none",
                            children: [
                              t("path", {
                                d: "M30.0832 7.33337C30.0832 6.22881 29.1878 5.33337 28.0832 5.33337H5.4165C4.31194 5.33337 3.4165 6.22881 3.4165 7.33337V13.3334H30.0832V7.33337Z",
                                stroke: "url(#paint0_linear_214_1764)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M3.49121 26.0201L11.6083 17.8196L15.9945 22.0201L21.3567 17.3334L24.3437 20.2454",
                                stroke: "url(#paint1_linear_214_1764)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M30.0828 12V24.6667C30.0828 25.7713 29.1874 26.6667 28.0828 26.6667H8.74951",
                                stroke: "url(#paint2_linear_214_1764)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M13.4907 9.33337H25.4907",
                                stroke: "url(#paint3_linear_214_1764)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M8.15674 9.33337H9.49007",
                                stroke: "url(#paint4_linear_214_1764)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M3.4165 12V18",
                                stroke: "url(#paint5_linear_214_1764)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l("defs", {
                                children: [
                                  l("linearGradient", {
                                    id: "paint0_linear_214_1764",
                                    x1: "2.84148",
                                    y1: "9.33337",
                                    x2: "31.8262",
                                    y2: "9.33337",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint1_linear_214_1764",
                                    x1: "3.04156",
                                    y1: "21.6767",
                                    x2: "25.7067",
                                    y2: "21.6767",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint2_linear_214_1764",
                                    x1: "8.28949",
                                    y1: "19.3333",
                                    x2: "31.4773",
                                    y2: "19.3333",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint3_linear_214_1764",
                                    x1: "13.232",
                                    y1: "9.83337",
                                    x2: "26.2751",
                                    y2: "9.83337",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint4_linear_214_1764",
                                    x1: "8.12799",
                                    y1: "9.83337",
                                    x2: "9.57722",
                                    y2: "9.83337",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint5_linear_214_1764",
                                    x1: "3.39494",
                                    y1: "15",
                                    x2: "4.48187",
                                    y2: "15",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t("div", { children: "Marketing" }),
                        ],
                      }),
                      l("div", {
                        className: "item",
                        children: [
                          l("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "32",
                            height: "32",
                            viewBox: "0 0 32 32",
                            fill: "none",
                            children: [
                              t("path", {
                                d: "M16.0003 29.3333C23.3641 29.3333 29.3337 23.3638 29.3337 16C29.3337 8.63616 23.3641 2.66663 16.0003 2.66663C8.63653 2.66663 2.66699 8.63616 2.66699 16C2.66699 23.3638 8.63653 29.3333 16.0003 29.3333Z",
                                stroke: "url(#paint0_linear_214_1772)",
                                "stroke-width": "2.66667",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M19.7717 15.057L16.9433 12.2286C16.4226 11.7079 15.5784 11.7079 15.0577 12.2286L12.2293 15.057C11.7086 15.5777 11.7086 16.4219 12.2293 16.9426L15.0577 19.771C15.5784 20.2917 16.4226 20.2917 16.9433 19.771L19.7717 16.9426C20.2924 16.4219 20.2924 15.5777 19.7717 15.057Z",
                                stroke: "url(#paint1_linear_214_1772)",
                                "stroke-width": "2.66667",
                                "stroke-linejoin": "round",
                              }),
                              l("defs", {
                                children: [
                                  l("linearGradient", {
                                    id: "paint0_linear_214_1772",
                                    x1: "2.09197",
                                    y1: "15.9999",
                                    x2: "31.0767",
                                    y2: "15.9999",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint1_linear_214_1772",
                                    x1: "13.5418",
                                    y1: "13.5411",
                                    x2: "18.6656",
                                    y2: "18.665",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t("div", { children: "Finance" }),
                        ],
                      }),
                      l("div", {
                        className: "item",
                        children: [
                          l("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "33",
                            height: "32",
                            viewBox: "0 0 33 32",
                            fill: "none",
                            children: [
                              t("path", {
                                d: "M29.5833 20.6667C29.5833 24.3485 26.5985 27.3333 22.9167 27.3333C21.7227 27.3333 20.6021 27.0195 19.6327 26.4697C17.9262 25.5019 16.6886 23.8031 16.3457 21.7989C16.2828 21.4309 16.25 21.0526 16.25 20.6667C16.25 18.9549 16.8952 17.3937 17.9557 16.2132C19.1761 14.8545 20.9466 14 22.9167 14C26.5985 14 29.5833 16.9848 29.5833 20.6667Z",
                                stroke: "url(#paint0_linear_214_1776)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M22.9165 8V13.3333V14C20.9464 14 19.176 14.8545 17.9555 16.2132C16.895 17.3937 16.2498 18.9549 16.2498 20.6667C16.2498 21.0526 16.2826 21.4309 16.3456 21.7989C16.6884 23.8031 17.926 25.5019 19.6326 26.4697C17.8576 27.0064 15.5016 27.3333 12.9165 27.3333C7.39364 27.3333 2.9165 25.8409 2.9165 24V18.6667V13.3333V8",
                                stroke: "url(#paint1_linear_214_1776)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M22.9165 7.99996C22.9165 9.84089 18.4394 11.3333 12.9165 11.3333C7.39364 11.3333 2.9165 9.84089 2.9165 7.99996C2.9165 6.15901 7.39364 4.66663 12.9165 4.66663C18.4394 4.66663 22.9165 6.15901 22.9165 7.99996Z",
                                stroke: "url(#paint2_linear_214_1776)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M2.9165 18.6666C2.9165 20.5076 7.39364 22 12.9165 22C14.1212 22 15.276 21.929 16.3456 21.7988",
                                stroke: "url(#paint3_linear_214_1776)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M2.9165 13.3334C2.9165 15.1743 7.39364 16.6667 12.9165 16.6667C14.754 16.6667 16.4758 16.5015 17.9555 16.2132",
                                stroke: "url(#paint4_linear_214_1776)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M25.9167 19.3334L22.25 23L20.25 21",
                                stroke: "url(#paint5_linear_214_1776)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l("defs", {
                                children: [
                                  l("linearGradient", {
                                    id: "paint0_linear_214_1776",
                                    x1: "15.9625",
                                    y1: "20.6667",
                                    x2: "30.4549",
                                    y2: "20.6667",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint1_linear_214_1776",
                                    x1: "2.48524",
                                    y1: "17.6667",
                                    x2: "24.2238",
                                    y2: "17.6667",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint2_linear_214_1776",
                                    x1: "2.48524",
                                    y1: "7.99996",
                                    x2: "24.2238",
                                    y2: "7.99996",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint3_linear_214_1776",
                                    x1: "2.62693",
                                    y1: "20.3333",
                                    x2: "17.2233",
                                    y2: "20.3333",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint4_linear_214_1776",
                                    x1: "2.59221",
                                    y1: "15",
                                    x2: "18.9385",
                                    y2: "15",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint5_linear_214_1776",
                                    x1: "20.1278",
                                    y1: "21.1667",
                                    x2: "26.2871",
                                    y2: "21.1667",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t("div", { children: "Data Security" }),
                        ],
                      }),
                      l("div", {
                        className: "item",
                        children: [
                          l("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "33",
                            height: "32",
                            viewBox: "0 0 33 32",
                            fill: "none",
                            children: [
                              t("path", {
                                d: "M28.7447 5.33337H4.25494C3.65381 5.33337 3.1665 5.82068 3.1665 6.42181V25.5783C3.1665 26.1794 3.65381 26.6667 4.25494 26.6667H28.7447C29.3459 26.6667 29.8332 26.1794 29.8332 25.5783V6.42181C29.8332 5.82068 29.3459 5.33337 28.7447 5.33337Z",
                                stroke: "url(#paint0_linear_214_1784)",
                                "stroke-width": "2.66667",
                              }),
                              t("path", {
                                d: "M11.1665 12.6319C9.83317 10.6666 7.49837 11.9583 7.66577 13.9791C7.83317 15.9999 10.4998 15.9999 10.6664 18.0207C10.833 20.0415 8.49984 21.3332 7.1665 19.3679",
                                stroke: "url(#paint1_linear_214_1784)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M17.8332 12H15.1665V20.6667H17.8332",
                                stroke: "url(#paint2_linear_214_1784)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M15.1665 16.6666H17.8332",
                                stroke: "url(#paint3_linear_214_1784)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              t("path", {
                                d: "M25.833 14C25.833 12.8954 24.9376 12 23.833 12C22.7284 12 21.833 12.8954 21.833 14V18.6667C21.833 19.7712 22.7284 20.6667 23.833 20.6667C24.9376 20.6667 25.833 19.7712 25.833 18.6667V14Z",
                                stroke: "url(#paint4_linear_214_1784)",
                                "stroke-width": "2.66667",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l("defs", {
                                children: [
                                  l("linearGradient", {
                                    id: "paint0_linear_214_1784",
                                    x1: "2.59148",
                                    y1: "16",
                                    x2: "31.5762",
                                    y2: "16",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint1_linear_214_1784",
                                    x1: "7.08025",
                                    y1: "15.9999",
                                    x2: "11.428",
                                    y2: "15.9999",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint2_linear_214_1784",
                                    x1: "15.109",
                                    y1: "16.3333",
                                    x2: "18.0075",
                                    y2: "16.3333",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint3_linear_214_1784",
                                    x1: "15.109",
                                    y1: "17.1666",
                                    x2: "18.0075",
                                    y2: "17.1666",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                  l("linearGradient", {
                                    id: "paint4_linear_214_1784",
                                    x1: "21.7468",
                                    y1: "16.3333",
                                    x2: "26.0945",
                                    y2: "16.3333",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      t("stop", { "stop-color": "#00D193" }),
                                      t("stop", {
                                        offset: "1",
                                        "stop-color": "#20AFF3",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t("div", { children: "SEO" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              t(Jt, { hanlderShowDialog: a, trackHandle: e }),
              t("div", { className: "g-1" }),
              t("div", { className: "g-2" }),
            ],
          }),
          t(un, {
            open: u,
            onClose: () => {
              g(!1);
            },
            onSuccess: () => {
              g(!1);
            },
          }),
          !n &&
            t(eo, {
              className: "cookieAlert",
              message: l("p", {
                children: [
                  "We use cookies on our website to see how you interact with it. By accepting, you agree to our use of such cookies. For more information, please refer to our",
                  t(Ut, { to: "pp", children: " Privacy Policy " }),
                ],
              }),
              type: "info",
              action: l(mt, {
                direction:
                  (o == null ? void 0 : o.width) > 540
                    ? "horizontal"
                    : "vertical",
                children: [
                  t(Pe, {
                    size: "small",
                    ghost: !0,
                    onClick: d,
                    children: "Decline All",
                  }),
                  t(Pe, { size: "small", onClick: d, children: "Accept All" }),
                ],
              }),
            }),
          t(to, { show: i, setShow: s }),
        ],
      }),
    });
  };
export { Sn as default };
