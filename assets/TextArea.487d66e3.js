import {
  c as de,
  r as g,
  y as Oe,
  u as j,
  g as dr,
  a as Ve,
  O as cr,
  m as Ae,
  j as B,
  q as k,
  d as xe,
  v as ge,
  _ as q,
  t as Ce,
  p as ce,
  w as Ge,
  I as ur,
  F as je,
  C as Ke,
  H as Xe,
  aJ as Fe,
} from "./index.5783a347.js";
import {
  V as fr,
  g as gr,
  C as qe,
  F as Ye,
  N as We,
} from "./context.f1b74157.js";
import { c as X } from "./index.adbb0b1c.js";
import {
  m as Te,
  u as Ze,
  b as pr,
  d as Je,
  a as vr,
  N as He,
  n as hr,
  w as Pe,
} from "./RightOutlined.47fd6db5.js";
function Be(e, r, t) {
  return de({
    [`${e}-status-success`]: r === "success",
    [`${e}-status-warning`]: r === "warning",
    [`${e}-status-error`]: r === "error",
    [`${e}-status-validating`]: r === "validating",
    [`${e}-has-feedback`]: t,
  });
}
const Qe = (e, r) => r || e,
  mr = ["outlined", "borderless", "filled"],
  br = function (e) {
    let r =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
    const t = g.exports.useContext(fr);
    let o;
    typeof e < "u"
      ? (o = e)
      : r === !1
      ? (o = "borderless")
      : (o = t != null ? t : "outlined");
    const a = mr.includes(o);
    return [o, a];
  },
  Ue = br;
function xr(e) {
  return Oe(e, { inputAffixPadding: e.paddingXXS });
}
const Sr = (e) => {
    const {
      controlHeight: r,
      fontSize: t,
      lineHeight: o,
      lineWidth: a,
      controlHeightSM: d,
      controlHeightLG: n,
      fontSizeLG: c,
      lineHeightLG: v,
      paddingSM: u,
      controlPaddingHorizontalSM: m,
      controlPaddingHorizontal: T,
      colorFillAlter: $,
      colorPrimaryHover: N,
      colorPrimary: E,
      controlOutlineWidth: F,
      controlOutline: W,
      colorErrorOutline: O,
      colorWarningOutline: y,
      colorBgContainer: H,
    } = e;
    return {
      paddingBlock: Math.max(Math.round(((r - t * o) / 2) * 10) / 10 - a, 0),
      paddingBlockSM: Math.max(Math.round(((d - t * o) / 2) * 10) / 10 - a, 0),
      paddingBlockLG: Math.ceil(((n - c * v) / 2) * 10) / 10 - a,
      paddingInline: u - a,
      paddingInlineSM: m - a,
      paddingInlineLG: T - a,
      addonBg: $,
      activeBorderColor: E,
      hoverBorderColor: N,
      activeShadow: `0 0 0 ${F}px ${W}`,
      errorActiveShadow: `0 0 0 ${F}px ${O}`,
      warningActiveShadow: `0 0 0 ${F}px ${y}`,
      hoverBg: H,
      activeBg: H,
      inputFontSize: t,
      inputFontSizeLG: c,
      inputFontSizeSM: t,
    };
  },
  $r = (e) => ({ borderColor: e.hoverBorderColor, backgroundColor: e.hoverBg }),
  Ne = (e) => ({
    color: e.colorTextDisabled,
    backgroundColor: e.colorBgContainerDisabled,
    borderColor: e.colorBorder,
    boxShadow: "none",
    cursor: "not-allowed",
    opacity: 1,
    "&:hover:not([disabled])": Object.assign(
      {},
      $r(
        Oe(e, {
          hoverBorderColor: e.colorBorder,
          hoverBg: e.colorBgContainerDisabled,
        })
      )
    ),
  }),
  ke = (e, r) => ({
    background: e.colorBgContainer,
    borderWidth: e.lineWidth,
    borderStyle: e.lineType,
    borderColor: r.borderColor,
    "&:hover": { borderColor: r.hoverBorderColor, backgroundColor: e.hoverBg },
    "&:focus, &:focus-within": {
      borderColor: r.activeBorderColor,
      boxShadow: r.activeShadow,
      outline: 0,
      backgroundColor: e.activeBg,
    },
  }),
  Me = (e, r) => ({
    [`&${e.componentCls}-status-${r.status}:not(${e.componentCls}-disabled)`]:
      Object.assign(Object.assign({}, ke(e, r)), {
        [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
          color: r.affixColor,
        },
      }),
  }),
  Cr = (e, r) => ({
    "&-outlined": Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {},
              ke(e, {
                borderColor: e.colorBorder,
                hoverBorderColor: e.colorPrimaryHover,
                activeBorderColor: e.colorPrimary,
                activeShadow: e.activeShadow,
              })
            ),
            {
              [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign(
                {},
                Ne(e)
              ),
            }
          ),
          Me(e, {
            status: "error",
            borderColor: e.colorError,
            hoverBorderColor: e.colorErrorBorderHover,
            activeBorderColor: e.colorError,
            activeShadow: e.errorActiveShadow,
            affixColor: e.colorError,
          })
        ),
        Me(e, {
          status: "warning",
          borderColor: e.colorWarning,
          hoverBorderColor: e.colorWarningBorderHover,
          activeBorderColor: e.colorWarning,
          activeShadow: e.warningActiveShadow,
          affixColor: e.colorWarning,
        })
      ),
      r
    ),
  }),
  _e = (e, r) => ({
    [`&${e.componentCls}-group-wrapper-status-${r.status}`]: {
      [`${e.componentCls}-group-addon`]: {
        borderColor: r.addonBorderColor,
        color: r.addonColor,
      },
    },
  }),
  yr = (e) => ({
    "&-outlined": Object.assign(
      Object.assign(
        Object.assign(
          {
            [`${e.componentCls}-group`]: {
              "&-addon": {
                background: e.addonBg,
                border: `${j(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              },
              "&-addon:first-child": { borderInlineEnd: 0 },
              "&-addon:last-child": { borderInlineStart: 0 },
            },
          },
          _e(e, {
            status: "error",
            addonBorderColor: e.colorError,
            addonColor: e.colorErrorText,
          })
        ),
        _e(e, {
          status: "warning",
          addonBorderColor: e.colorWarning,
          addonColor: e.colorWarningText,
        })
      ),
      {
        [`&${e.componentCls}-group-wrapper-disabled`]: {
          [`${e.componentCls}-group-addon`]: Object.assign({}, Ne(e)),
        },
      }
    ),
  }),
  wr = (e, r) => ({
    "&-borderless": Object.assign(
      {
        background: "transparent",
        border: "none",
        "&:focus, &:focus-within": { outline: "none" },
        [`&${e.componentCls}-disabled, &[disabled]`]: {
          color: e.colorTextDisabled,
        },
      },
      r
    ),
  }),
  er = (e, r) => ({
    background: r.bg,
    borderWidth: e.lineWidth,
    borderStyle: e.lineType,
    borderColor: "transparent",
    ["input&, & input, textarea&, & textarea"]: {
      color: r == null ? void 0 : r.inputColor,
    },
    "&:hover": { background: r.hoverBg },
    "&:focus, &:focus-within": {
      outline: 0,
      borderColor: r.activeBorderColor,
      backgroundColor: e.activeBg,
    },
  }),
  Le = (e, r) => ({
    [`&${e.componentCls}-status-${r.status}:not(${e.componentCls}-disabled)`]:
      Object.assign(Object.assign({}, er(e, r)), {
        [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
          color: r.affixColor,
        },
      }),
  }),
  Rr = (e, r) => ({
    "&-filled": Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {},
              er(e, {
                bg: e.colorFillTertiary,
                hoverBg: e.colorFillSecondary,
                activeBorderColor: e.colorPrimary,
              })
            ),
            {
              [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign(
                {},
                Ne(e)
              ),
            }
          ),
          Le(e, {
            status: "error",
            bg: e.colorErrorBg,
            hoverBg: e.colorErrorBgHover,
            activeBorderColor: e.colorError,
            inputColor: e.colorErrorText,
            affixColor: e.colorError,
          })
        ),
        Le(e, {
          status: "warning",
          bg: e.colorWarningBg,
          hoverBg: e.colorWarningBgHover,
          activeBorderColor: e.colorWarning,
          inputColor: e.colorWarningText,
          affixColor: e.colorWarning,
        })
      ),
      r
    ),
  }),
  De = (e, r) => ({
    [`&${e.componentCls}-group-wrapper-status-${r.status}`]: {
      [`${e.componentCls}-group-addon`]: {
        background: r.addonBg,
        color: r.addonColor,
      },
    },
  }),
  Er = (e) => ({
    "&-filled": Object.assign(
      Object.assign(
        Object.assign(
          {
            [`${e.componentCls}-group`]: {
              "&-addon": { background: e.colorFillTertiary },
              [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
                "&:not(:first-child)": {
                  borderInlineStart: `${j(e.lineWidth)} ${e.lineType} ${
                    e.colorSplit
                  }`,
                },
                "&:not(:last-child)": {
                  borderInlineEnd: `${j(e.lineWidth)} ${e.lineType} ${
                    e.colorSplit
                  }`,
                },
              },
            },
          },
          De(e, {
            status: "error",
            addonBg: e.colorErrorBg,
            addonColor: e.colorErrorText,
          })
        ),
        De(e, {
          status: "warning",
          addonBg: e.colorWarningBg,
          addonColor: e.colorWarningText,
        })
      ),
      {
        [`&${e.componentCls}-group-wrapper-disabled`]: {
          [`${e.componentCls}-group`]: {
            "&-addon": {
              background: e.colorFillTertiary,
              color: e.colorTextDisabled,
            },
            "&-addon:first-child": {
              borderInlineStart: `${j(e.lineWidth)} ${e.lineType} ${
                e.colorBorder
              }`,
              borderTop: `${j(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              borderBottom: `${j(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
            },
            "&-addon:last-child": {
              borderInlineEnd: `${j(e.lineWidth)} ${e.lineType} ${
                e.colorBorder
              }`,
              borderTop: `${j(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              borderBottom: `${j(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
            },
          },
        },
      }
    ),
  }),
  Ir = (e) => ({
    "&::-moz-placeholder": { opacity: 1 },
    "&::placeholder": { color: e, userSelect: "none" },
    "&:placeholder-shown": { textOverflow: "ellipsis" },
  }),
  rr = (e) => {
    const {
      paddingBlockLG: r,
      lineHeightLG: t,
      borderRadiusLG: o,
      paddingInlineLG: a,
    } = e;
    return {
      padding: `${j(r)} ${j(a)}`,
      fontSize: e.inputFontSizeLG,
      lineHeight: t,
      borderRadius: o,
    };
  },
  tr = (e) => ({
    padding: `${j(e.paddingBlockSM)} ${j(e.paddingInlineSM)}`,
    fontSize: e.inputFontSizeSM,
    borderRadius: e.borderRadiusSM,
  }),
  or = (e) =>
    Object.assign(
      Object.assign(
        {
          position: "relative",
          display: "inline-block",
          width: "100%",
          minWidth: 0,
          padding: `${j(e.paddingBlock)} ${j(e.paddingInline)}`,
          color: e.colorText,
          fontSize: e.inputFontSize,
          lineHeight: e.lineHeight,
          borderRadius: e.borderRadius,
          transition: `all ${e.motionDurationMid}`,
        },
        Ir(e.colorTextPlaceholder)
      ),
      {
        "textarea&": {
          maxWidth: "100%",
          height: "auto",
          minHeight: e.controlHeight,
          lineHeight: e.lineHeight,
          verticalAlign: "bottom",
          transition: `all ${e.motionDurationSlow}, height 0s`,
          resize: "vertical",
        },
        "&-lg": Object.assign({}, rr(e)),
        "&-sm": Object.assign({}, tr(e)),
        "&-rtl": { direction: "rtl" },
        "&-textarea-rtl": { direction: "rtl" },
      }
    ),
  zr = (e) => {
    const { componentCls: r, antCls: t } = e;
    return {
      position: "relative",
      display: "table",
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
      ["&[class*='col-']"]: {
        paddingInlineEnd: e.paddingXS,
        "&:last-child": { paddingInlineEnd: 0 },
      },
      [`&-lg ${r}, &-lg > ${r}-group-addon`]: Object.assign({}, rr(e)),
      [`&-sm ${r}, &-sm > ${r}-group-addon`]: Object.assign({}, tr(e)),
      [`&-lg ${t}-select-single ${t}-select-selector`]: {
        height: e.controlHeightLG,
      },
      [`&-sm ${t}-select-single ${t}-select-selector`]: {
        height: e.controlHeightSM,
      },
      [`> ${r}`]: {
        display: "table-cell",
        "&:not(:first-child):not(:last-child)": { borderRadius: 0 },
      },
      [`${r}-group`]: {
        ["&-addon, &-wrap"]: {
          display: "table-cell",
          width: 1,
          whiteSpace: "nowrap",
          verticalAlign: "middle",
          "&:not(:first-child):not(:last-child)": { borderRadius: 0 },
        },
        "&-wrap > *": { display: "block !important" },
        "&-addon": {
          position: "relative",
          padding: `0 ${j(e.paddingInline)}`,
          color: e.colorText,
          fontWeight: "normal",
          fontSize: e.inputFontSize,
          textAlign: "center",
          borderRadius: e.borderRadius,
          transition: `all ${e.motionDurationSlow}`,
          lineHeight: 1,
          [`${t}-select`]: {
            margin: `${j(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${j(
              e.calc(e.paddingInline).mul(-1).equal()
            )}`,
            [`&${t}-select-single:not(${t}-select-customize-input):not(${t}-pagination-size-changer)`]:
              {
                [`${t}-select-selector`]: {
                  backgroundColor: "inherit",
                  border: `${j(e.lineWidth)} ${e.lineType} transparent`,
                  boxShadow: "none",
                },
              },
            "&-open, &-focused": {
              [`${t}-select-selector`]: { color: e.colorPrimary },
            },
          },
          [`${t}-cascader-picker`]: {
            margin: `-9px ${j(e.calc(e.paddingInline).mul(-1).equal())}`,
            backgroundColor: "transparent",
            [`${t}-cascader-input`]: {
              textAlign: "start",
              border: 0,
              boxShadow: "none",
            },
          },
        },
      },
      [`${r}`]: {
        width: "100%",
        marginBottom: 0,
        textAlign: "inherit",
        "&:focus": { zIndex: 1, borderInlineEndWidth: 1 },
        "&:hover": {
          zIndex: 1,
          borderInlineEndWidth: 1,
          [`${r}-search-with-button &`]: { zIndex: 0 },
        },
      },
      [`> ${r}:first-child, ${r}-group-addon:first-child`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-select ${t}-select-selector`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        },
      },
      [`> ${r}-affix-wrapper`]: {
        [`&:not(:first-child) ${r}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
        [`&:not(:last-child) ${r}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        },
      },
      [`> ${r}:last-child, ${r}-group-addon:last-child`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        [`${t}-select ${t}-select-selector`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
      },
      [`${r}-affix-wrapper`]: {
        "&:not(:last-child)": {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
          [`${r}-search &`]: {
            borderStartStartRadius: e.borderRadius,
            borderEndStartRadius: e.borderRadius,
          },
        },
        [`&:not(:first-child), ${r}-search &:not(:first-child)`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
      },
      [`&${r}-group-compact`]: Object.assign(
        Object.assign({ display: "block" }, cr()),
        {
          [`${r}-group-addon, ${r}-group-wrap, > ${r}`]: {
            "&:not(:first-child):not(:last-child)": {
              borderInlineEndWidth: e.lineWidth,
              "&:hover": { zIndex: 1 },
              "&:focus": { zIndex: 1 },
            },
          },
          "& > *": {
            display: "inline-block",
            float: "none",
            verticalAlign: "top",
            borderRadius: 0,
          },
          [`
        & > ${r}-affix-wrapper,
        & > ${r}-number-affix-wrapper,
        & > ${t}-picker-range
      `]: { display: "inline-flex" },
          "& > *:not(:last-child)": {
            marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
            borderInlineEndWidth: e.lineWidth,
          },
          [`${r}`]: { float: "none" },
          [`& > ${t}-select > ${t}-select-selector,
      & > ${t}-select-auto-complete ${r},
      & > ${t}-cascader-picker ${r},
      & > ${r}-group-wrapper ${r}`]: {
            borderInlineEndWidth: e.lineWidth,
            borderRadius: 0,
            "&:hover": { zIndex: 1 },
            "&:focus": { zIndex: 1 },
          },
          [`& > ${t}-select-focused`]: { zIndex: 1 },
          [`& > ${t}-select > ${t}-select-arrow`]: { zIndex: 1 },
          [`& > *:first-child,
      & > ${t}-select:first-child > ${t}-select-selector,
      & > ${t}-select-auto-complete:first-child ${r},
      & > ${t}-cascader-picker:first-child ${r}`]: {
            borderStartStartRadius: e.borderRadius,
            borderEndStartRadius: e.borderRadius,
          },
          [`& > *:last-child,
      & > ${t}-select:last-child > ${t}-select-selector,
      & > ${t}-cascader-picker:last-child ${r},
      & > ${t}-cascader-picker-focused:last-child ${r}`]: {
            borderInlineEndWidth: e.lineWidth,
            borderStartEndRadius: e.borderRadius,
            borderEndEndRadius: e.borderRadius,
          },
          [`& > ${t}-select-auto-complete ${r}`]: { verticalAlign: "top" },
          [`${r}-group-wrapper + ${r}-group-wrapper`]: {
            marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
            [`${r}-affix-wrapper`]: { borderRadius: 0 },
          },
          [`${r}-group-wrapper:not(:last-child)`]: {
            [`&${r}-search > ${r}-group`]: {
              [`& > ${r}-group-addon > ${r}-search-button`]: {
                borderRadius: 0,
              },
              [`& > ${r}`]: {
                borderStartStartRadius: e.borderRadius,
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
                borderEndStartRadius: e.borderRadius,
              },
            },
          },
        }
      ),
    };
  },
  Br = (e) => {
    const { componentCls: r, controlHeightSM: t, lineWidth: o, calc: a } = e,
      d = 16,
      n = a(t).sub(a(o).mul(2)).sub(d).div(2).equal();
    return {
      [r]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, Ve(e)), or(e)),
              Cr(e)
            ),
            Rr(e)
          ),
          wr(e)
        ),
        {
          '&[type="color"]': {
            height: e.controlHeight,
            [`&${r}-lg`]: { height: e.controlHeightLG },
            [`&${r}-sm`]: { height: t, paddingTop: n, paddingBottom: n },
          },
          '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':
            { "-webkit-appearance": "none" },
        }
      ),
    };
  },
  Or = (e) => {
    const { componentCls: r } = e;
    return {
      [`${r}-clear-icon`]: {
        margin: 0,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        verticalAlign: -1,
        cursor: "pointer",
        transition: `color ${e.motionDurationSlow}`,
        "&:hover": { color: e.colorTextTertiary },
        "&:active": { color: e.colorText },
        "&-hidden": { visibility: "hidden" },
        "&-has-suffix": { margin: `0 ${j(e.inputAffixPadding)}` },
      },
    };
  },
  Ar = (e) => {
    const {
      componentCls: r,
      inputAffixPadding: t,
      colorTextDescription: o,
      motionDurationSlow: a,
      colorIcon: d,
      colorIconHover: n,
      iconCls: c,
    } = e;
    return {
      [`${r}-affix-wrapper`]: Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, or(e)), {
            display: "inline-flex",
            [`&:not(${r}-disabled):hover`]: {
              zIndex: 1,
              [`${r}-search-with-button &`]: { zIndex: 0 },
            },
            "&-focused, &:focus": { zIndex: 1 },
            [`> input${r}`]: {
              padding: 0,
              fontSize: "inherit",
              border: "none",
              borderRadius: 0,
              outline: "none",
              background: "transparent",
              color: "inherit",
              "&::-ms-reveal": { display: "none" },
              "&:focus": { boxShadow: "none !important" },
            },
            "&::before": {
              display: "inline-block",
              width: 0,
              visibility: "hidden",
              content: '"\\a0"',
            },
            [`${r}`]: {
              "&-prefix, &-suffix": {
                display: "flex",
                flex: "none",
                alignItems: "center",
                "> *:not(:last-child)": { marginInlineEnd: e.paddingXS },
              },
              "&-show-count-suffix": { color: o },
              "&-show-count-has-suffix": { marginInlineEnd: e.paddingXXS },
              "&-prefix": { marginInlineEnd: t },
              "&-suffix": { marginInlineStart: t },
            },
          }),
          Or(e)
        ),
        {
          [`${c}${r}-password-icon`]: {
            color: d,
            cursor: "pointer",
            transition: `all ${a}`,
            "&:hover": { color: n },
          },
        }
      ),
    };
  },
  jr = (e) => {
    const { componentCls: r, borderRadiusLG: t, borderRadiusSM: o } = e;
    return {
      [`${r}-group`]: Object.assign(
        Object.assign(Object.assign({}, Ve(e)), zr(e)),
        {
          "&-rtl": { direction: "rtl" },
          "&-wrapper": Object.assign(
            Object.assign(
              Object.assign(
                {
                  display: "inline-block",
                  width: "100%",
                  textAlign: "start",
                  verticalAlign: "top",
                  "&-rtl": { direction: "rtl" },
                  "&-lg": {
                    [`${r}-group-addon`]: {
                      borderRadius: t,
                      fontSize: e.inputFontSizeLG,
                    },
                  },
                  "&-sm": { [`${r}-group-addon`]: { borderRadius: o } },
                },
                yr(e)
              ),
              Er(e)
            ),
            {
              [`&:not(${r}-compact-first-item):not(${r}-compact-last-item)${r}-compact-item`]:
                { [`${r}, ${r}-group-addon`]: { borderRadius: 0 } },
              [`&:not(${r}-compact-last-item)${r}-compact-first-item`]: {
                [`${r}, ${r}-group-addon`]: {
                  borderStartEndRadius: 0,
                  borderEndEndRadius: 0,
                },
              },
              [`&:not(${r}-compact-first-item)${r}-compact-last-item`]: {
                [`${r}, ${r}-group-addon`]: {
                  borderStartStartRadius: 0,
                  borderEndStartRadius: 0,
                },
              },
            }
          ),
        }
      ),
    };
  },
  Tr = (e) => {
    const { componentCls: r, antCls: t } = e,
      o = `${r}-search`;
    return {
      [o]: {
        [`${r}`]: {
          "&:hover, &:focus": {
            borderColor: e.colorPrimaryHover,
            [`+ ${r}-group-addon ${o}-button:not(${t}-btn-primary)`]: {
              borderInlineStartColor: e.colorPrimaryHover,
            },
          },
        },
        [`${r}-affix-wrapper`]: { borderRadius: 0 },
        [`${r}-lg`]: {
          lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal({ unit: !1 }),
        },
        [`> ${r}-group`]: {
          [`> ${r}-group-addon:last-child`]: {
            insetInlineStart: -1,
            padding: 0,
            border: 0,
            [`${o}-button`]: {
              paddingTop: 0,
              paddingBottom: 0,
              borderStartStartRadius: 0,
              borderStartEndRadius: e.borderRadius,
              borderEndEndRadius: e.borderRadius,
              borderEndStartRadius: 0,
              boxShadow: "none",
            },
            [`${o}-button:not(${t}-btn-primary)`]: {
              color: e.colorTextDescription,
              "&:hover": { color: e.colorPrimaryHover },
              "&:active": { color: e.colorPrimaryActive },
              [`&${t}-btn-loading::before`]: {
                insetInlineStart: 0,
                insetInlineEnd: 0,
                insetBlockStart: 0,
                insetBlockEnd: 0,
              },
            },
          },
        },
        [`${o}-button`]: {
          height: e.controlHeight,
          "&:hover, &:focus": { zIndex: 1 },
        },
        [`&-large ${o}-button`]: { height: e.controlHeightLG },
        [`&-small ${o}-button`]: { height: e.controlHeightSM },
        "&-rtl": { direction: "rtl" },
        [`&${r}-compact-item`]: {
          [`&:not(${r}-compact-last-item)`]: {
            [`${r}-group-addon`]: {
              [`${r}-search-button`]: {
                marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
                borderRadius: 0,
              },
            },
          },
          [`&:not(${r}-compact-first-item)`]: {
            [`${r},${r}-affix-wrapper`]: { borderRadius: 0 },
          },
          [`> ${r}-group-addon ${r}-search-button,
        > ${r},
        ${r}-affix-wrapper`]: { "&:hover,&:focus,&:active": { zIndex: 2 } },
          [`> ${r}-affix-wrapper-focused`]: { zIndex: 2 },
        },
      },
    };
  },
  Nr = (e) => {
    const { componentCls: r, paddingLG: t } = e,
      o = `${r}-textarea`;
    return {
      [o]: {
        position: "relative",
        "&-show-count": {
          [`> ${r}`]: { height: "100%" },
          [`${r}-data-count`]: {
            position: "absolute",
            bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
            insetInlineEnd: 0,
            color: e.colorTextDescription,
            whiteSpace: "nowrap",
            pointerEvents: "none",
          },
        },
        "&-allow-clear": { [`> ${r}`]: { paddingInlineEnd: t } },
        [`&-affix-wrapper${o}-has-feedback`]: {
          [`${r}`]: { paddingInlineEnd: t },
        },
        [`&-affix-wrapper${r}-affix-wrapper`]: {
          padding: 0,
          [`> textarea${r}`]: {
            fontSize: "inherit",
            border: "none",
            outline: "none",
            background: "transparent",
            "&:focus": { boxShadow: "none !important" },
          },
          [`${r}-suffix`]: {
            margin: 0,
            "> *:not(:last-child)": { marginInline: 0 },
            [`${r}-clear-icon`]: {
              position: "absolute",
              insetInlineEnd: e.paddingXS,
              insetBlockStart: e.paddingXS,
            },
            [`${o}-suffix`]: {
              position: "absolute",
              top: 0,
              insetInlineEnd: e.paddingInline,
              bottom: 0,
              zIndex: 1,
              display: "inline-flex",
              alignItems: "center",
              margin: "auto",
              pointerEvents: "none",
            },
          },
        },
      },
    };
  },
  Fr = (e) => {
    const { componentCls: r } = e;
    return {
      [`${r}-out-of-range`]: {
        [`&, & input, & textarea, ${r}-show-count-suffix, ${r}-data-count`]: {
          color: e.colorError,
        },
      },
    };
  },
  ar = dr(
    "Input",
    (e) => {
      const r = Oe(e, xr(e));
      return [Br(r), Nr(r), Ar(r), jr(r), Tr(r), Fr(r), gr(r)];
    },
    Sr
  );
function Wr(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function Hr(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function $e(e, r, t, o) {
  if (!!t) {
    var a = r;
    if (r.type === "click") {
      var d = e.cloneNode(!0);
      (a = Object.create(r, {
        target: { value: d },
        currentTarget: { value: d },
      })),
        (d.value = ""),
        t(a);
      return;
    }
    if (e.type !== "file" && o !== void 0) {
      var n = e.cloneNode(!0);
      (a = Object.create(r, {
        target: { value: n },
        currentTarget: { value: n },
      })),
        (n.value = o),
        t(a);
      return;
    }
    t(a);
  }
}
function Pr(e, r) {
  if (!!e) {
    e.focus(r);
    var t = r || {},
      o = t.cursor;
    if (o) {
      var a = e.value.length;
      switch (o) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(a, a);
          break;
        default:
          e.setSelectionRange(0, a);
      }
    }
  }
}
var nr = function (r) {
    var t,
      o,
      a = r.inputElement,
      d = r.children,
      n = r.prefixCls,
      c = r.prefix,
      v = r.suffix,
      u = r.addonBefore,
      m = r.addonAfter,
      T = r.className,
      $ = r.style,
      N = r.disabled,
      E = r.readOnly,
      F = r.focused,
      W = r.triggerFocus,
      O = r.allowClear,
      y = r.value,
      H = r.handleReset,
      A = r.hidden,
      S = r.classes,
      s = r.classNames,
      h = r.dataAttrs,
      i = r.styles,
      l = r.components,
      V = d != null ? d : a,
      M = (l == null ? void 0 : l.affixWrapper) || "span",
      _ = (l == null ? void 0 : l.groupWrapper) || "span",
      D = (l == null ? void 0 : l.wrapper) || "span",
      b = (l == null ? void 0 : l.groupAddon) || "span",
      Y = g.exports.useRef(null),
      Z = function (U) {
        var he;
        (he = Y.current) !== null &&
          he !== void 0 &&
          he.contains(U.target) &&
          (W == null || W());
      },
      w = Hr(r),
      C = g.exports.cloneElement(V, {
        value: y,
        className:
          X(V.props.className, !w && (s == null ? void 0 : s.variant)) || null,
      });
    if (w) {
      var R,
        ee = null;
      if (O) {
        var G,
          re = !N && !E && y,
          P = "".concat(n, "-clear-icon"),
          I =
            Ae(O) === "object" && O !== null && O !== void 0 && O.clearIcon
              ? O.clearIcon
              : "\u2716";
        ee = B("span", {
          onClick: H,
          onMouseDown: function (U) {
            return U.preventDefault();
          },
          className: X(
            P,
            ((G = {}),
            k(G, "".concat(P, "-hidden"), !re),
            k(G, "".concat(P, "-has-suffix"), !!v),
            G)
          ),
          role: "button",
          tabIndex: -1,
          children: I,
        });
      }
      var p = "".concat(n, "-affix-wrapper"),
        J = X(
          p,
          ((R = {}),
          k(R, "".concat(n, "-disabled"), N),
          k(R, "".concat(p, "-disabled"), N),
          k(R, "".concat(p, "-focused"), F),
          k(R, "".concat(p, "-readonly"), E),
          k(R, "".concat(p, "-input-with-clear-btn"), v && O && y),
          R),
          S == null ? void 0 : S.affixWrapper,
          s == null ? void 0 : s.affixWrapper,
          s == null ? void 0 : s.variant
        ),
        ae =
          (v || O) &&
          xe("span", {
            className: X(
              "".concat(n, "-suffix"),
              s == null ? void 0 : s.suffix
            ),
            style: i == null ? void 0 : i.suffix,
            children: [ee, v],
          });
      C = xe(M, {
        className: J,
        style: i == null ? void 0 : i.affixWrapper,
        onClick: Z,
        ...(h == null ? void 0 : h.affixWrapper),
        ref: Y,
        children: [
          c &&
            B("span", {
              className: X(
                "".concat(n, "-prefix"),
                s == null ? void 0 : s.prefix
              ),
              style: i == null ? void 0 : i.prefix,
              children: c,
            }),
          C,
          ae,
        ],
      });
    }
    if (Wr(r)) {
      var ne = "".concat(n, "-group"),
        ie = "".concat(ne, "-addon"),
        pe = "".concat(ne, "-wrapper"),
        L = X(
          "".concat(n, "-wrapper"),
          ne,
          S == null ? void 0 : S.wrapper,
          s == null ? void 0 : s.wrapper
        ),
        te = X(
          pe,
          k({}, "".concat(pe, "-disabled"), N),
          S == null ? void 0 : S.group,
          s == null ? void 0 : s.groupWrapper
        );
      C = B(_, {
        className: te,
        children: xe(D, {
          className: L,
          children: [
            u && B(b, { className: ie, children: u }),
            C,
            m && B(b, { className: ie, children: m }),
          ],
        }),
      });
    }
    return ge.cloneElement(C, {
      className:
        X((t = C.props) === null || t === void 0 ? void 0 : t.className, T) ||
        null,
      style: q(
        q({}, (o = C.props) === null || o === void 0 ? void 0 : o.style),
        $
      ),
      hidden: A,
    });
  },
  Mr = ["show"];
function ir(e, r) {
  return g.exports.useMemo(
    function () {
      var t = {};
      r && (t.show = Ae(r) === "object" && r.formatter ? r.formatter : !!r),
        (t = q(q({}, t), e));
      var o = t,
        a = o.show,
        d = Ce(o, Mr);
      return q(
        q({}, d),
        {},
        {
          show: !!a,
          showFormatter: typeof a == "function" ? a : void 0,
          strategy:
            d.strategy ||
            function (n) {
              return n.length;
            },
        }
      );
    },
    [e, r]
  );
}
var _r = [
    "autoComplete",
    "onChange",
    "onFocus",
    "onBlur",
    "onPressEnter",
    "onKeyDown",
    "prefixCls",
    "disabled",
    "htmlSize",
    "className",
    "maxLength",
    "suffix",
    "showCount",
    "count",
    "type",
    "classes",
    "classNames",
    "styles",
    "onCompositionStart",
    "onCompositionEnd",
  ],
  Lr = g.exports.forwardRef(function (e, r) {
    var t = e.autoComplete,
      o = e.onChange,
      a = e.onFocus,
      d = e.onBlur,
      n = e.onPressEnter,
      c = e.onKeyDown,
      v = e.prefixCls,
      u = v === void 0 ? "rc-input" : v,
      m = e.disabled,
      T = e.htmlSize,
      $ = e.className,
      N = e.maxLength,
      E = e.suffix,
      F = e.showCount,
      W = e.count,
      O = e.type,
      y = O === void 0 ? "text" : O,
      H = e.classes,
      A = e.classNames,
      S = e.styles,
      s = e.onCompositionStart,
      h = e.onCompositionEnd,
      i = Ce(e, _r),
      l = g.exports.useState(!1),
      V = ce(l, 2),
      M = V[0],
      _ = V[1],
      D = g.exports.useRef(!1),
      b = g.exports.useRef(null),
      Y = function (f) {
        b.current && Pr(b.current, f);
      },
      Z = Te(e.defaultValue, { value: e.value }),
      w = ce(Z, 2),
      C = w[0],
      R = w[1],
      ee = C == null ? "" : String(C),
      G = g.exports.useState(null),
      re = ce(G, 2),
      P = re[0],
      I = re[1],
      p = ir(W, F),
      J = p.max || N,
      ae = p.strategy(ee),
      ne = !!J && ae > J;
    g.exports.useImperativeHandle(r, function () {
      return {
        focus: Y,
        blur: function () {
          var f;
          (f = b.current) === null || f === void 0 || f.blur();
        },
        setSelectionRange: function (f, le, me) {
          var ue;
          (ue = b.current) === null ||
            ue === void 0 ||
            ue.setSelectionRange(f, le, me);
        },
        select: function () {
          var f;
          (f = b.current) === null || f === void 0 || f.select();
        },
        input: b.current,
      };
    }),
      g.exports.useEffect(
        function () {
          _(function (z) {
            return z && m ? !1 : z;
          });
        },
        [m]
      );
    var ie = function (f, le, me) {
      var ue = le;
      if (!D.current && p.exceedFormatter && p.max && p.strategy(le) > p.max) {
        if (((ue = p.exceedFormatter(le, { max: p.max })), le !== ue)) {
          var be, fe;
          I([
            ((be = b.current) === null || be === void 0
              ? void 0
              : be.selectionStart) || 0,
            ((fe = b.current) === null || fe === void 0
              ? void 0
              : fe.selectionEnd) || 0,
          ]);
        }
      } else if (me.source === "compositionEnd") return;
      R(ue), b.current && $e(b.current, f, o, ue);
    };
    g.exports.useEffect(
      function () {
        if (P) {
          var z;
          (z = b.current) === null ||
            z === void 0 ||
            z.setSelectionRange.apply(z, Ge(P));
        }
      },
      [P]
    );
    var pe = function (f) {
        ie(f, f.target.value, { source: "change" });
      },
      L = function (f) {
        (D.current = !1),
          ie(f, f.currentTarget.value, { source: "compositionEnd" }),
          h == null || h(f);
      },
      te = function (f) {
        n && f.key === "Enter" && n(f), c == null || c(f);
      },
      Q = function (f) {
        _(!0), a == null || a(f);
      },
      U = function (f) {
        _(!1), d == null || d(f);
      },
      he = function (f) {
        R(""), Y(), b.current && $e(b.current, f, o);
      },
      Se = ne && "".concat(u, "-out-of-range"),
      ye = function () {
        var f = ur(e, [
          "prefixCls",
          "onPressEnter",
          "addonBefore",
          "addonAfter",
          "prefix",
          "suffix",
          "allowClear",
          "defaultValue",
          "showCount",
          "count",
          "classes",
          "htmlSize",
          "styles",
          "classNames",
        ]);
        return B("input", {
          autoComplete: t,
          ...f,
          onChange: pe,
          onFocus: Q,
          onBlur: U,
          onKeyDown: te,
          className: X(
            u,
            k({}, "".concat(u, "-disabled"), m),
            A == null ? void 0 : A.input
          ),
          style: S == null ? void 0 : S.input,
          ref: b,
          size: T,
          type: y,
          onCompositionStart: function (me) {
            (D.current = !0), s == null || s(me);
          },
          onCompositionEnd: L,
        });
      },
      we = function () {
        var f = Number(J) > 0;
        if (E || p.show) {
          var le = p.showFormatter
            ? p.showFormatter({ value: ee, count: ae, maxLength: J })
            : "".concat(ae).concat(f ? " / ".concat(J) : "");
          return xe(je, {
            children: [
              p.show &&
                B("span", {
                  className: X(
                    "".concat(u, "-show-count-suffix"),
                    k({}, "".concat(u, "-show-count-has-suffix"), !!E),
                    A == null ? void 0 : A.count
                  ),
                  style: q({}, S == null ? void 0 : S.count),
                  children: le,
                }),
              E,
            ],
          });
        }
        return null;
      };
    return B(nr, {
      ...i,
      prefixCls: u,
      className: X($, Se),
      handleReset: he,
      value: ee,
      focused: M,
      triggerFocus: Y,
      suffix: we(),
      disabled: m,
      classes: H,
      classNames: A,
      styles: S,
      children: ye(),
    });
  });
function Dr(e, r) {
  const t = g.exports.useRef([]),
    o = () => {
      t.current.push(
        setTimeout(() => {
          var a, d, n, c;
          ((a = e.current) === null || a === void 0 ? void 0 : a.input) &&
            ((d = e.current) === null || d === void 0
              ? void 0
              : d.input.getAttribute("type")) === "password" &&
            ((n = e.current) === null || n === void 0
              ? void 0
              : n.input.hasAttribute("value")) &&
            ((c = e.current) === null ||
              c === void 0 ||
              c.input.removeAttribute("value"));
        })
      );
    };
  return (
    g.exports.useEffect(
      () => (
        r && o(),
        () =>
          t.current.forEach((a) => {
            a && clearTimeout(a);
          })
      ),
      []
    ),
    o
  );
}
function Vr(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
const Gr = (e) => {
    let r;
    return (
      typeof e == "object" && (e == null ? void 0 : e.clearIcon)
        ? (r = e)
        : e && (r = { clearIcon: B(qe, {}) }),
      r
    );
  },
  Kr = Gr;
var Xr =
  (globalThis && globalThis.__rest) ||
  function (e, r) {
    var t = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        r.indexOf(o) < 0 &&
        (t[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
        r.indexOf(o[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
          (t[o[a]] = e[o[a]]);
    return t;
  };
function qr(e, r) {
  if (!e) return;
  e.focus(r);
  const { cursor: t } = r || {};
  if (t) {
    const o = e.value.length;
    switch (t) {
      case "start":
        e.setSelectionRange(0, 0);
        break;
      case "end":
        e.setSelectionRange(o, o);
        break;
      default:
        e.setSelectionRange(0, o);
        break;
    }
  }
}
const Yr = g.exports.forwardRef((e, r) => {
    var t;
    const {
        prefixCls: o,
        bordered: a = !0,
        status: d,
        size: n,
        disabled: c,
        onBlur: v,
        onFocus: u,
        suffix: m,
        allowClear: T,
        addonAfter: $,
        addonBefore: N,
        className: E,
        style: F,
        styles: W,
        rootClassName: O,
        onChange: y,
        classNames: H,
        variant: A,
      } = e,
      S = Xr(e, [
        "prefixCls",
        "bordered",
        "status",
        "size",
        "disabled",
        "onBlur",
        "onFocus",
        "suffix",
        "allowClear",
        "addonAfter",
        "addonBefore",
        "className",
        "style",
        "styles",
        "rootClassName",
        "onChange",
        "classNames",
        "variant",
      ]),
      { getPrefixCls: s, direction: h, input: i } = ge.useContext(Ke),
      l = s("input", o),
      V = g.exports.useRef(null),
      M = Ze(l),
      [_, D, b] = ar(l, M),
      { compactSize: Y, compactItemClassnames: Z } = pr(l, h),
      w = Je((Q) => {
        var U;
        return (U = n != null ? n : Y) !== null && U !== void 0 ? U : Q;
      }),
      C = ge.useContext(Xe),
      R = c != null ? c : C,
      {
        status: ee,
        hasFeedback: G,
        feedbackIcon: re,
      } = g.exports.useContext(Ye),
      P = Qe(ee, d),
      I = Vr(e) || !!G;
    g.exports.useRef(I);
    const p = Dr(V, !0),
      J = (Q) => {
        p(), v == null || v(Q);
      },
      ae = (Q) => {
        p(), u == null || u(Q);
      },
      ne = (Q) => {
        p(), y == null || y(Q);
      },
      ie = (G || m) && xe(je, { children: [m, G && re] }),
      pe = Kr(T),
      [L, te] = Ue(A, a);
    return _(
      B(Lr, {
        ...Object.assign(
          {
            ref: vr(r, V),
            prefixCls: l,
            autoComplete: i == null ? void 0 : i.autoComplete,
          },
          S,
          {
            disabled: R,
            onBlur: J,
            onFocus: ae,
            style: Object.assign(
              Object.assign({}, i == null ? void 0 : i.style),
              F
            ),
            styles: Object.assign(
              Object.assign({}, i == null ? void 0 : i.styles),
              W
            ),
            suffix: ie,
            allowClear: pe,
            className: de(E, O, b, M, Z, i == null ? void 0 : i.className),
            onChange: ne,
            addonAfter:
              $ &&
              B(He, {
                children: B(We, { override: !0, status: !0, children: $ }),
              }),
            addonBefore:
              N &&
              B(He, {
                children: B(We, { override: !0, status: !0, children: N }),
              }),
            classNames: Object.assign(
              Object.assign(
                Object.assign({}, H),
                i == null ? void 0 : i.classNames
              ),
              {
                input: de(
                  {
                    [`${l}-sm`]: w === "small",
                    [`${l}-lg`]: w === "large",
                    [`${l}-rtl`]: h === "rtl",
                  },
                  H == null ? void 0 : H.input,
                  (t = i == null ? void 0 : i.classNames) === null ||
                    t === void 0
                    ? void 0
                    : t.input,
                  D
                ),
                variant: de({ [`${l}-${L}`]: te }, Be(l, P)),
                affixWrapper: de(
                  {
                    [`${l}-affix-wrapper-sm`]: w === "small",
                    [`${l}-affix-wrapper-lg`]: w === "large",
                    [`${l}-affix-wrapper-rtl`]: h === "rtl",
                  },
                  D
                ),
                wrapper: de({ [`${l}-group-rtl`]: h === "rtl" }, D),
                groupWrapper: de(
                  {
                    [`${l}-group-wrapper-sm`]: w === "small",
                    [`${l}-group-wrapper-lg`]: w === "large",
                    [`${l}-group-wrapper-rtl`]: h === "rtl",
                    [`${l}-group-wrapper-${L}`]: te,
                  },
                  Be(`${l}-group-wrapper`, P, G),
                  D
                ),
              }
            ),
          }
        ),
      })
    );
  }),
  dt = Yr;
var Zr = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,
  Jr = [
    "letter-spacing",
    "line-height",
    "padding-top",
    "padding-bottom",
    "font-family",
    "font-weight",
    "font-size",
    "font-variant",
    "text-rendering",
    "text-transform",
    "width",
    "text-indent",
    "padding-left",
    "padding-right",
    "border-width",
    "box-sizing",
    "word-break",
    "white-space",
  ],
  Re = {},
  oe;
function Qr(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    t =
      e.getAttribute("id") ||
      e.getAttribute("data-reactid") ||
      e.getAttribute("name");
  if (r && Re[t]) return Re[t];
  var o = window.getComputedStyle(e),
    a =
      o.getPropertyValue("box-sizing") ||
      o.getPropertyValue("-moz-box-sizing") ||
      o.getPropertyValue("-webkit-box-sizing"),
    d =
      parseFloat(o.getPropertyValue("padding-bottom")) +
      parseFloat(o.getPropertyValue("padding-top")),
    n =
      parseFloat(o.getPropertyValue("border-bottom-width")) +
      parseFloat(o.getPropertyValue("border-top-width")),
    c = Jr.map(function (u) {
      return "".concat(u, ":").concat(o.getPropertyValue(u));
    }).join(";"),
    v = { sizingStyle: c, paddingSize: d, borderSize: n, boxSizing: a };
  return r && t && (Re[t] = v), v;
}
function Ur(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
    o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  oe ||
    ((oe = document.createElement("textarea")),
    oe.setAttribute("tab-index", "-1"),
    oe.setAttribute("aria-hidden", "true"),
    document.body.appendChild(oe)),
    e.getAttribute("wrap")
      ? oe.setAttribute("wrap", e.getAttribute("wrap"))
      : oe.removeAttribute("wrap");
  var a = Qr(e, r),
    d = a.paddingSize,
    n = a.borderSize,
    c = a.boxSizing,
    v = a.sizingStyle;
  oe.setAttribute("style", "".concat(v, ";").concat(Zr)),
    (oe.value = e.value || e.placeholder || "");
  var u = void 0,
    m = void 0,
    T,
    $ = oe.scrollHeight;
  if (
    (c === "border-box" ? ($ += n) : c === "content-box" && ($ -= d),
    t !== null || o !== null)
  ) {
    oe.value = " ";
    var N = oe.scrollHeight - d;
    t !== null &&
      ((u = N * t),
      c === "border-box" && (u = u + d + n),
      ($ = Math.max(u, $))),
      o !== null &&
        ((m = N * o),
        c === "border-box" && (m = m + d + n),
        (T = $ > m ? "" : "hidden"),
        ($ = Math.min(m, $)));
  }
  var E = { height: $, overflowY: T, resize: "none" };
  return u && (E.minHeight = u), m && (E.maxHeight = m), E;
}
var kr = [
    "prefixCls",
    "onPressEnter",
    "defaultValue",
    "value",
    "autoSize",
    "onResize",
    "className",
    "style",
    "disabled",
    "onChange",
    "onInternalAutoSize",
  ],
  Ee = 0,
  Ie = 1,
  ze = 2,
  et = g.exports.forwardRef(function (e, r) {
    var t = e,
      o = t.prefixCls;
    t.onPressEnter;
    var a = t.defaultValue,
      d = t.value,
      n = t.autoSize,
      c = t.onResize,
      v = t.className,
      u = t.style,
      m = t.disabled,
      T = t.onChange;
    t.onInternalAutoSize;
    var $ = Ce(t, kr),
      N = Te(a, {
        value: d,
        postState: function (I) {
          return I != null ? I : "";
        },
      }),
      E = ce(N, 2),
      F = E[0],
      W = E[1],
      O = function (I) {
        W(I.target.value), T == null || T(I);
      },
      y = g.exports.useRef();
    g.exports.useImperativeHandle(r, function () {
      return { textArea: y.current };
    });
    var H = g.exports.useMemo(
        function () {
          return n && Ae(n) === "object" ? [n.minRows, n.maxRows] : [];
        },
        [n]
      ),
      A = ce(H, 2),
      S = A[0],
      s = A[1],
      h = !!n,
      i = function () {
        try {
          if (document.activeElement === y.current) {
            var I = y.current,
              p = I.selectionStart,
              J = I.selectionEnd,
              ae = I.scrollTop;
            y.current.setSelectionRange(p, J), (y.current.scrollTop = ae);
          }
        } catch {}
      },
      l = g.exports.useState(ze),
      V = ce(l, 2),
      M = V[0],
      _ = V[1],
      D = g.exports.useState(),
      b = ce(D, 2),
      Y = b[0],
      Z = b[1],
      w = function () {
        _(Ee);
      };
    Fe(
      function () {
        h && w();
      },
      [d, S, s, h]
    ),
      Fe(
        function () {
          if (M === Ee) _(Ie);
          else if (M === Ie) {
            var P = Ur(y.current, !1, S, s);
            _(ze), Z(P);
          } else i();
        },
        [M]
      );
    var C = g.exports.useRef(),
      R = function () {
        Pe.cancel(C.current);
      },
      ee = function (I) {
        M === ze &&
          (c == null || c(I),
          n &&
            (R(),
            (C.current = Pe(function () {
              w();
            }))));
      };
    g.exports.useEffect(function () {
      return R;
    }, []);
    var G = h ? Y : null,
      re = q(q({}, u), G);
    return (
      (M === Ee || M === Ie) &&
        ((re.overflowY = "hidden"), (re.overflowX = "hidden")),
      B(hr, {
        onResize: ee,
        disabled: !(n || c),
        children: B("textarea", {
          ...$,
          ref: y,
          style: re,
          className: X(o, v, k({}, "".concat(o, "-disabled"), m)),
          disabled: m,
          value: F,
          onChange: O,
        }),
      })
    );
  }),
  rt = [
    "defaultValue",
    "value",
    "onFocus",
    "onBlur",
    "onChange",
    "allowClear",
    "maxLength",
    "onCompositionStart",
    "onCompositionEnd",
    "suffix",
    "prefixCls",
    "showCount",
    "count",
    "className",
    "style",
    "disabled",
    "hidden",
    "classNames",
    "styles",
    "onResize",
  ],
  tt = ge.forwardRef(function (e, r) {
    var t,
      o,
      a = e.defaultValue,
      d = e.value,
      n = e.onFocus,
      c = e.onBlur,
      v = e.onChange,
      u = e.allowClear,
      m = e.maxLength,
      T = e.onCompositionStart,
      $ = e.onCompositionEnd,
      N = e.suffix,
      E = e.prefixCls,
      F = E === void 0 ? "rc-textarea" : E,
      W = e.showCount,
      O = e.count,
      y = e.className,
      H = e.style,
      A = e.disabled,
      S = e.hidden,
      s = e.classNames,
      h = e.styles,
      i = e.onResize,
      l = Ce(e, rt),
      V = Te(a, { value: d, defaultValue: a }),
      M = ce(V, 2),
      _ = M[0],
      D = M[1],
      b = _ == null ? "" : String(_),
      Y = ge.useState(!1),
      Z = ce(Y, 2),
      w = Z[0],
      C = Z[1],
      R = ge.useRef(!1),
      ee = ge.useState(null),
      G = ce(ee, 2),
      re = G[0],
      P = G[1],
      I = g.exports.useRef(null),
      p = function () {
        var x;
        return (x = I.current) === null || x === void 0 ? void 0 : x.textArea;
      },
      J = function () {
        p().focus();
      };
    g.exports.useImperativeHandle(r, function () {
      return {
        resizableTextArea: I.current,
        focus: J,
        blur: function () {
          p().blur();
        },
      };
    }),
      g.exports.useEffect(
        function () {
          C(function (K) {
            return !A && K;
          });
        },
        [A]
      );
    var ae = ge.useState(null),
      ne = ce(ae, 2),
      ie = ne[0],
      pe = ne[1];
    ge.useEffect(
      function () {
        if (ie) {
          var K;
          (K = p()).setSelectionRange.apply(K, Ge(ie));
        }
      },
      [ie]
    );
    var L = ir(O, W),
      te = (t = L.max) !== null && t !== void 0 ? t : m,
      Q = Number(te) > 0,
      U = L.strategy(b),
      he = !!te && U > te,
      Se = function (x, se) {
        var ve = se;
        !R.current &&
          L.exceedFormatter &&
          L.max &&
          L.strategy(se) > L.max &&
          ((ve = L.exceedFormatter(se, { max: L.max })),
          se !== ve && pe([p().selectionStart || 0, p().selectionEnd || 0])),
          D(ve),
          $e(x.currentTarget, x, v, ve);
      },
      ye = function (x) {
        (R.current = !0), T == null || T(x);
      },
      we = function (x) {
        (R.current = !1), Se(x, x.currentTarget.value), $ == null || $(x);
      },
      z = function (x) {
        Se(x, x.target.value);
      },
      f = function (x) {
        var se = l.onPressEnter,
          ve = l.onKeyDown;
        x.key === "Enter" && se && se(x), ve == null || ve(x);
      },
      le = function (x) {
        C(!0), n == null || n(x);
      },
      me = function (x) {
        C(!1), c == null || c(x);
      },
      ue = function (x) {
        D(""), J(), $e(p(), x, v);
      },
      be = N,
      fe;
    L.show &&
      (L.showFormatter
        ? (fe = L.showFormatter({ value: b, count: U, maxLength: te }))
        : (fe = "".concat(U).concat(Q ? " / ".concat(te) : "")),
      (be = xe(je, {
        children: [
          be,
          B("span", {
            className: X(
              "".concat(F, "-data-count"),
              s == null ? void 0 : s.count
            ),
            style: h == null ? void 0 : h.count,
            children: fe,
          }),
        ],
      })));
    var lr = function (x) {
        var se;
        i == null || i(x),
          (se = p()) !== null && se !== void 0 && se.style.height && P(!0);
      },
      sr = !l.autoSize && !W && !u;
    return B(nr, {
      value: b,
      allowClear: u,
      handleReset: ue,
      suffix: be,
      prefixCls: F,
      classNames: q(
        q({}, s),
        {},
        {
          affixWrapper: X(
            s == null ? void 0 : s.affixWrapper,
            ((o = {}),
            k(o, "".concat(F, "-show-count"), W),
            k(o, "".concat(F, "-textarea-allow-clear"), u),
            o)
          ),
        }
      ),
      disabled: A,
      focused: w,
      className: X(y, he && "".concat(F, "-out-of-range")),
      style: q(q({}, H), re && !sr ? { height: "auto" } : {}),
      dataAttrs: {
        affixWrapper: { "data-count": typeof fe == "string" ? fe : void 0 },
      },
      hidden: S,
      children: B(et, {
        ...l,
        maxLength: m,
        onKeyDown: f,
        onChange: z,
        onFocus: le,
        onBlur: me,
        onCompositionStart: ye,
        onCompositionEnd: we,
        className: X(s == null ? void 0 : s.textarea),
        style: q(
          q({}, h == null ? void 0 : h.textarea),
          {},
          { resize: H == null ? void 0 : H.resize }
        ),
        disabled: A,
        prefixCls: F,
        onResize: lr,
        ref: I,
      }),
    });
  }),
  ot =
    (globalThis && globalThis.__rest) ||
    function (e, r) {
      var t = {};
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) &&
          r.indexOf(o) < 0 &&
          (t[o] = e[o]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
          r.indexOf(o[a]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
            (t[o[a]] = e[o[a]]);
      return t;
    };
const at = g.exports.forwardRef((e, r) => {
    var t;
    const {
        prefixCls: o,
        bordered: a = !0,
        size: d,
        disabled: n,
        status: c,
        allowClear: v,
        classNames: u,
        rootClassName: m,
        className: T,
        variant: $,
      } = e,
      N = ot(e, [
        "prefixCls",
        "bordered",
        "size",
        "disabled",
        "status",
        "allowClear",
        "classNames",
        "rootClassName",
        "className",
        "variant",
      ]),
      { getPrefixCls: E, direction: F } = g.exports.useContext(Ke),
      W = Je(d),
      O = g.exports.useContext(Xe),
      y = n != null ? n : O,
      { status: H, hasFeedback: A, feedbackIcon: S } = g.exports.useContext(Ye),
      s = Qe(H, c),
      h = g.exports.useRef(null);
    g.exports.useImperativeHandle(r, () => {
      var Z;
      return {
        resizableTextArea:
          (Z = h.current) === null || Z === void 0
            ? void 0
            : Z.resizableTextArea,
        focus: (w) => {
          var C, R;
          qr(
            (R =
              (C = h.current) === null || C === void 0
                ? void 0
                : C.resizableTextArea) === null || R === void 0
              ? void 0
              : R.textArea,
            w
          );
        },
        blur: () => {
          var w;
          return (w = h.current) === null || w === void 0 ? void 0 : w.blur();
        },
      };
    });
    const i = E("input", o);
    let l;
    typeof v == "object" && (v == null ? void 0 : v.clearIcon)
      ? (l = v)
      : v && (l = { clearIcon: B(qe, {}) });
    const V = Ze(i),
      [M, _, D] = ar(i, V),
      [b, Y] = Ue($, a);
    return M(
      B(tt, {
        ...Object.assign({}, N, {
          disabled: y,
          allowClear: l,
          className: de(D, V, T, m),
          classNames: Object.assign(Object.assign({}, u), {
            textarea: de(
              { [`${i}-sm`]: W === "small", [`${i}-lg`]: W === "large" },
              _,
              u == null ? void 0 : u.textarea
            ),
            variant: de({ [`${i}-${b}`]: Y }, Be(i, s)),
            affixWrapper: de(
              `${i}-textarea-affix-wrapper`,
              {
                [`${i}-affix-wrapper-rtl`]: F === "rtl",
                [`${i}-affix-wrapper-sm`]: W === "small",
                [`${i}-affix-wrapper-lg`]: W === "large",
                [`${i}-textarea-show-count`]:
                  e.showCount ||
                  ((t = e.count) === null || t === void 0 ? void 0 : t.show),
              },
              _
            ),
          }),
          prefixCls: i,
          suffix:
            A && B("span", { className: `${i}-textarea-suffix`, children: S }),
          ref: h,
        }),
      })
    );
  }),
  ct = at;
export { dt as I, ct as T, Dr as a, ar as u };
