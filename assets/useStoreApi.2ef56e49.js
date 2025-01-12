import { r as o, a7 as f, a8 as y, a9 as b } from "./index.5783a347.js";
function C() {
  var r = o.exports.useContext(f);
  return r;
}
function g(r) {
  r === void 0 && (r = f);
  var e =
    r === f
      ? C
      : function () {
          return o.exports.useContext(r);
        };
  return function () {
    var t = e(),
      s = t.store;
    return s;
  };
}
var D = g();
function E(r) {
  r === void 0 && (r = f);
  var e = r === f ? D : g(r);
  return function () {
    var t = e();
    return t.dispatch;
  };
}
var A = E(),
  $ = function (e, n) {
    return e === n;
  };
function j(r, e, n, t) {
  var s = o.exports.useReducer(function (i) {
      return i + 1;
    }, 0),
    u = s[1],
    v = o.exports.useMemo(
      function () {
        return y(n, t);
      },
      [n, t]
    ),
    a = o.exports.useRef(),
    p = o.exports.useRef(),
    l = o.exports.useRef(),
    c = o.exports.useRef(),
    d = n.getState(),
    h;
  try {
    if (r !== p.current || d !== l.current || a.current) {
      var S = r(d);
      c.current === void 0 || !e(S, c.current) ? (h = S) : (h = c.current);
    } else h = c.current;
  } catch (i) {
    throw (
      (a.current &&
        (i.message +=
          `
The error may be correlated with this previous error:
` +
          a.current.stack +
          `

`),
      i)
    );
  }
  return (
    b(function () {
      (p.current = r), (l.current = d), (c.current = h), (a.current = void 0);
    }),
    b(
      function () {
        function i() {
          try {
            var x = n.getState();
            if (x === l.current) return;
            var m = p.current(x);
            if (e(m, c.current)) return;
            (c.current = m), (l.current = x);
          } catch (k) {
            a.current = k;
          }
          u();
        }
        return (
          (v.onStateChange = i),
          v.trySubscribe(),
          i(),
          function () {
            return v.tryUnsubscribe();
          }
        );
      },
      [n, v]
    ),
    h
  );
}
function _(r) {
  r === void 0 && (r = f);
  var e =
    r === f
      ? C
      : function () {
          return o.exports.useContext(r);
        };
  return function (t, s) {
    s === void 0 && (s = $);
    var u = e(),
      v = u.store,
      a = u.subscription,
      p = j(t, s, v, a);
    return o.exports.useDebugValue(p), p;
  };
}
var H = _(),
  L = function (r) {
    return r
      .replace(/[A-Z]/g, function (e) {
        return "-" + e.toLowerCase();
      })
      .toLowerCase();
  },
  U = L,
  V = U,
  w = function (r) {
    var e = /[height|width]$/;
    return e.test(r);
  },
  R = function (r) {
    var e = "",
      n = Object.keys(r);
    return (
      n.forEach(function (t, s) {
        var u = r[t];
        (t = V(t)),
          w(t) && typeof u == "number" && (u = u + "px"),
          u === !0
            ? (e += t)
            : u === !1
            ? (e += "not " + t)
            : (e += "(" + t + ": " + u + ")"),
          s < n.length - 1 && (e += " and ");
      }),
      e
    );
  },
  I = function (r) {
    var e = "";
    return typeof r == "string"
      ? r
      : r instanceof Array
      ? (r.forEach(function (n, t) {
          (e += R(n)), t < r.length - 1 && (e += ", ");
        }),
        e)
      : R(r);
  },
  O = I;
const T = () => A(),
  W = H;
export { W as a, O as j, T as u };
