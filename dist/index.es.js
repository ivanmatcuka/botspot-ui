"use client";
import * as E from "react";
import pt, { useState as Ne, useEffect as vt, isValidElement as sn, cloneElement as po, Children as Vl, useRef as yo, useCallback as Dn, createContext as Wl, useContext as Ul, Fragment as ql, useMemo as Ti } from "react";
import na, { jsx as x, jsxs as se, Fragment as vn } from "react/jsx-runtime";
import { CacheProvider as Gl, Global as Hl, ThemeContext as Wr, css as wr, keyframes as xn } from "@emotion/react";
import Yl from "@emotion/styled";
import * as Kl from "react-dom";
import Qn from "react-dom";
import { useFormContext as Xl, useForm as Jl, FormProvider as Zl } from "react-hook-form";
const ht = {
  action: {
    disabledBackground: "#AEAEAE"
  },
  common: {
    black: "#151515",
    white: "#FFFFFF"
  },
  error: {
    main: "#D02D24"
  },
  grey: {
    100: "#F3F3F3",
    200: "#AEAEAE",
    700: "#616161"
  },
  info: {
    main: "#3A3A3A"
  },
  primary: {
    main: "#4119BC"
  },
  secondary: {
    main: "#FFFFFF"
  }
}, Ql = (e) => ({
  MuiAccordion: {
    defaultProps: {
      disableGutters: !0
    },
    styleOverrides: {
      root: {
        boxShadow: "none",
        "&:before": {
          display: "none"
        }
      }
    }
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        "&:hover": {
          color: ht.primary.main
        }
      }
    }
  },
  MuiButton: {
    defaultProps: {
      disableElevation: !0,
      disableRipple: !0
    },
    styleOverrides: {
      root: {
        border: "solid",
        borderWidth: "0.1em",
        padding: e.spacing(1.5, 2.5),
        "&:disabled": {
          backgroundColor: ht.grey[200],
          borderColor: ht.common.white,
          color: ht.common.white
        }
      },
      sizeSmall: {
        padding: e.spacing(1, 2)
      },
      text: {
        border: "none",
        "&:disabled": {
          backgroundColor: ht.grey[100],
          border: "none",
          color: ht.common.black
        },
        "&:hover": {
          backgroundColor: "transparent",
          color: ht.primary.main
        }
      }
    }
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        alignItems: "center",
        borderRadius: e.spacing(2),
        padding: e.spacing(8, 2)
      }
    }
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        maxWidth: 648,
        width: "100%"
      }
    }
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: ht.grey[200]
      }
    }
  },
  MuiList: {
    styleOverrides: {
      root: {
        padding: 0
      }
    }
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        padding: 0
      }
    }
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        border: "none",
        "&:hover": {
          color: ht.primary.main
        }
      }
    }
  },
  MuiMenuItem: {
    defaultProps: {
      disableRipple: !0
    },
    styleOverrides: {
      root: {
        borderRadius: e.shape.borderRadius,
        padding: 0
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        borderWidth: 2
      }
    }
  },
  MuiPagination: {
    styleOverrides: {
      root: {
        ".MuiPagination-ul": {
          gap: e.spacing(3),
          justifyContent: "flex-start",
          [e.breakpoints.down("xl")]: {
            gap: e.spacing(1),
            justifyContent: "space-evenly"
          }
        }
      }
    }
  }
});
function Ct(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let o = 1; o < arguments.length; o += 1)
    t += "&args[]=" + encodeURIComponent(arguments[o]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ct
}, Symbol.toStringTag, { value: "Module" })), pn = "$$material";
function b() {
  return b = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o) ({}).hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, b.apply(null, arguments);
}
function q(e, t) {
  if (e == null) return {};
  var o = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    o[r] = e[r];
  }
  return o;
}
function Ur(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ot(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var o = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    o.prototype = t.prototype;
  } else o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(o, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), o;
}
var eo = { exports: {} }, to = { exports: {} }, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ci;
function tc() {
  if (Ci) return ve;
  Ci = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function y(v) {
    if (typeof v == "object" && v !== null) {
      var N = v.$$typeof;
      switch (N) {
        case t:
          switch (v = v.type, v) {
            case c:
            case u:
            case r:
            case s:
            case i:
            case m:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case d:
                case g:
                case T:
                case a:
                  return v;
                default:
                  return N;
              }
          }
        case o:
          return N;
      }
    }
  }
  function C(v) {
    return y(v) === u;
  }
  return ve.AsyncMode = c, ve.ConcurrentMode = u, ve.ContextConsumer = l, ve.ContextProvider = a, ve.Element = t, ve.ForwardRef = d, ve.Fragment = r, ve.Lazy = g, ve.Memo = T, ve.Portal = o, ve.Profiler = s, ve.StrictMode = i, ve.Suspense = m, ve.isAsyncMode = function(v) {
    return C(v) || y(v) === c;
  }, ve.isConcurrentMode = C, ve.isContextConsumer = function(v) {
    return y(v) === l;
  }, ve.isContextProvider = function(v) {
    return y(v) === a;
  }, ve.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, ve.isForwardRef = function(v) {
    return y(v) === d;
  }, ve.isFragment = function(v) {
    return y(v) === r;
  }, ve.isLazy = function(v) {
    return y(v) === g;
  }, ve.isMemo = function(v) {
    return y(v) === T;
  }, ve.isPortal = function(v) {
    return y(v) === o;
  }, ve.isProfiler = function(v) {
    return y(v) === s;
  }, ve.isStrictMode = function(v) {
    return y(v) === i;
  }, ve.isSuspense = function(v) {
    return y(v) === m;
  }, ve.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === u || v === s || v === i || v === m || v === f || typeof v == "object" && v !== null && (v.$$typeof === g || v.$$typeof === T || v.$$typeof === a || v.$$typeof === l || v.$$typeof === d || v.$$typeof === R || v.$$typeof === O || v.$$typeof === S || v.$$typeof === p);
  }, ve.typeOf = y, ve;
}
var xe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oi;
function nc() {
  return Oi || (Oi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function y(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === u || _ === s || _ === i || _ === m || _ === f || typeof _ == "object" && _ !== null && (_.$$typeof === g || _.$$typeof === T || _.$$typeof === a || _.$$typeof === l || _.$$typeof === d || _.$$typeof === R || _.$$typeof === O || _.$$typeof === S || _.$$typeof === p);
    }
    function C(_) {
      if (typeof _ == "object" && _ !== null) {
        var re = _.$$typeof;
        switch (re) {
          case t:
            var oe = _.type;
            switch (oe) {
              case c:
              case u:
              case r:
              case s:
              case i:
              case m:
                return oe;
              default:
                var de = oe && oe.$$typeof;
                switch (de) {
                  case l:
                  case d:
                  case g:
                  case T:
                  case a:
                    return de;
                  default:
                    return re;
                }
            }
          case o:
            return re;
        }
      }
    }
    var v = c, N = u, h = l, P = a, $ = t, w = d, I = r, F = g, A = T, j = o, D = s, L = i, z = m, M = !1;
    function H(_) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(_) || C(_) === c;
    }
    function k(_) {
      return C(_) === u;
    }
    function V(_) {
      return C(_) === l;
    }
    function ee(_) {
      return C(_) === a;
    }
    function Z(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function U(_) {
      return C(_) === d;
    }
    function Q(_) {
      return C(_) === r;
    }
    function B(_) {
      return C(_) === g;
    }
    function Y(_) {
      return C(_) === T;
    }
    function G(_) {
      return C(_) === o;
    }
    function K(_) {
      return C(_) === s;
    }
    function ne(_) {
      return C(_) === i;
    }
    function te(_) {
      return C(_) === m;
    }
    xe.AsyncMode = v, xe.ConcurrentMode = N, xe.ContextConsumer = h, xe.ContextProvider = P, xe.Element = $, xe.ForwardRef = w, xe.Fragment = I, xe.Lazy = F, xe.Memo = A, xe.Portal = j, xe.Profiler = D, xe.StrictMode = L, xe.Suspense = z, xe.isAsyncMode = H, xe.isConcurrentMode = k, xe.isContextConsumer = V, xe.isContextProvider = ee, xe.isElement = Z, xe.isForwardRef = U, xe.isFragment = Q, xe.isLazy = B, xe.isMemo = Y, xe.isPortal = G, xe.isProfiler = K, xe.isStrictMode = ne, xe.isSuspense = te, xe.isValidElementType = y, xe.typeOf = C;
  }()), xe;
}
var Ri;
function oa() {
  return Ri || (Ri = 1, process.env.NODE_ENV === "production" ? to.exports = tc() : to.exports = nc()), to.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var lr, Si;
function oc() {
  if (Si) return lr;
  Si = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return lr = i() ? Object.assign : function(s, a) {
    for (var l, c = r(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var m in l)
        t.call(l, m) && (c[m] = l[m]);
      if (e) {
        u = e(l);
        for (var f = 0; f < u.length; f++)
          o.call(l, u[f]) && (c[u[f]] = l[u[f]]);
      }
    }
    return c;
  }, lr;
}
var cr, $i;
function qr() {
  if ($i) return cr;
  $i = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return cr = e, cr;
}
var ur, Pi;
function ra() {
  return Pi || (Pi = 1, ur = Function.call.bind(Object.prototype.hasOwnProperty)), ur;
}
var dr, wi;
function rc() {
  if (wi) return dr;
  wi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ qr(), o = {}, r = /* @__PURE__ */ ra();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (r(s, d)) {
          var m;
          try {
            if (typeof s[d] != "function") {
              var f = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            m = s[d](a, d, c, l, null, t);
          } catch (g) {
            m = g;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in o)) {
            o[m.message] = !0;
            var T = u ? u() : "";
            e(
              "Failed " + l + " type: " + m.message + (T ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, dr = i, dr;
}
var pr, Ni;
function ic() {
  if (Ni) return pr;
  Ni = 1;
  var e = oa(), t = oc(), o = /* @__PURE__ */ qr(), r = /* @__PURE__ */ ra(), i = /* @__PURE__ */ rc(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return pr = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function m(k) {
      var V = k && (u && k[u] || k[d]);
      if (typeof V == "function")
        return V;
    }
    var f = "<<anonymous>>", T = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: S(),
      arrayOf: y,
      element: C(),
      elementType: v(),
      instanceOf: N,
      node: w(),
      objectOf: P,
      oneOf: h,
      oneOfType: $,
      shape: F,
      exact: A
    };
    function g(k, V) {
      return k === V ? k !== 0 || 1 / k === 1 / V : k !== k && V !== V;
    }
    function p(k, V) {
      this.message = k, this.data = V && typeof V == "object" ? V : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function R(k) {
      if (process.env.NODE_ENV !== "production")
        var V = {}, ee = 0;
      function Z(Q, B, Y, G, K, ne, te) {
        if (G = G || f, ne = ne || Y, te !== o) {
          if (c) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var re = G + ":" + Y;
            !V[re] && // Avoid spamming the console because they are often not actionable except for lib authors
            ee < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + ne + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), V[re] = !0, ee++);
          }
        }
        return B[Y] == null ? Q ? B[Y] === null ? new p("The " + K + " `" + ne + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new p("The " + K + " `" + ne + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : k(B, Y, G, K, ne);
      }
      var U = Z.bind(null, !1);
      return U.isRequired = Z.bind(null, !0), U;
    }
    function O(k) {
      function V(ee, Z, U, Q, B, Y) {
        var G = ee[Z], K = L(G);
        if (K !== k) {
          var ne = z(G);
          return new p(
            "Invalid " + Q + " `" + B + "` of type " + ("`" + ne + "` supplied to `" + U + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return R(V);
    }
    function S() {
      return R(a);
    }
    function y(k) {
      function V(ee, Z, U, Q, B) {
        if (typeof k != "function")
          return new p("Property `" + B + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var Y = ee[Z];
        if (!Array.isArray(Y)) {
          var G = L(Y);
          return new p("Invalid " + Q + " `" + B + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected an array."));
        }
        for (var K = 0; K < Y.length; K++) {
          var ne = k(Y, K, U, Q, B + "[" + K + "]", o);
          if (ne instanceof Error)
            return ne;
        }
        return null;
      }
      return R(V);
    }
    function C() {
      function k(V, ee, Z, U, Q) {
        var B = V[ee];
        if (!l(B)) {
          var Y = L(B);
          return new p("Invalid " + U + " `" + Q + "` of type " + ("`" + Y + "` supplied to `" + Z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return R(k);
    }
    function v() {
      function k(V, ee, Z, U, Q) {
        var B = V[ee];
        if (!e.isValidElementType(B)) {
          var Y = L(B);
          return new p("Invalid " + U + " `" + Q + "` of type " + ("`" + Y + "` supplied to `" + Z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return R(k);
    }
    function N(k) {
      function V(ee, Z, U, Q, B) {
        if (!(ee[Z] instanceof k)) {
          var Y = k.name || f, G = H(ee[Z]);
          return new p("Invalid " + Q + " `" + B + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected ") + ("instance of `" + Y + "`."));
        }
        return null;
      }
      return R(V);
    }
    function h(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function V(ee, Z, U, Q, B) {
        for (var Y = ee[Z], G = 0; G < k.length; G++)
          if (g(Y, k[G]))
            return null;
        var K = JSON.stringify(k, function(te, _) {
          var re = z(_);
          return re === "symbol" ? String(_) : _;
        });
        return new p("Invalid " + Q + " `" + B + "` of value `" + String(Y) + "` " + ("supplied to `" + U + "`, expected one of " + K + "."));
      }
      return R(V);
    }
    function P(k) {
      function V(ee, Z, U, Q, B) {
        if (typeof k != "function")
          return new p("Property `" + B + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var Y = ee[Z], G = L(Y);
        if (G !== "object")
          return new p("Invalid " + Q + " `" + B + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected an object."));
        for (var K in Y)
          if (r(Y, K)) {
            var ne = k(Y, K, U, Q, B + "." + K, o);
            if (ne instanceof Error)
              return ne;
          }
        return null;
      }
      return R(V);
    }
    function $(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var V = 0; V < k.length; V++) {
        var ee = k[V];
        if (typeof ee != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + M(ee) + " at index " + V + "."
          ), a;
      }
      function Z(U, Q, B, Y, G) {
        for (var K = [], ne = 0; ne < k.length; ne++) {
          var te = k[ne], _ = te(U, Q, B, Y, G, o);
          if (_ == null)
            return null;
          _.data && r(_.data, "expectedType") && K.push(_.data.expectedType);
        }
        var re = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new p("Invalid " + Y + " `" + G + "` supplied to " + ("`" + B + "`" + re + "."));
      }
      return R(Z);
    }
    function w() {
      function k(V, ee, Z, U, Q) {
        return j(V[ee]) ? null : new p("Invalid " + U + " `" + Q + "` supplied to " + ("`" + Z + "`, expected a ReactNode."));
      }
      return R(k);
    }
    function I(k, V, ee, Z, U) {
      return new p(
        (k || "React class") + ": " + V + " type `" + ee + "." + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function F(k) {
      function V(ee, Z, U, Q, B) {
        var Y = ee[Z], G = L(Y);
        if (G !== "object")
          return new p("Invalid " + Q + " `" + B + "` of type `" + G + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var K in k) {
          var ne = k[K];
          if (typeof ne != "function")
            return I(U, Q, B, K, z(ne));
          var te = ne(Y, K, U, Q, B + "." + K, o);
          if (te)
            return te;
        }
        return null;
      }
      return R(V);
    }
    function A(k) {
      function V(ee, Z, U, Q, B) {
        var Y = ee[Z], G = L(Y);
        if (G !== "object")
          return new p("Invalid " + Q + " `" + B + "` of type `" + G + "` " + ("supplied to `" + U + "`, expected `object`."));
        var K = t({}, ee[Z], k);
        for (var ne in K) {
          var te = k[ne];
          if (r(k, ne) && typeof te != "function")
            return I(U, Q, B, ne, z(te));
          if (!te)
            return new p(
              "Invalid " + Q + " `" + B + "` key `" + ne + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(ee[Z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var _ = te(Y, ne, U, Q, B + "." + ne, o);
          if (_)
            return _;
        }
        return null;
      }
      return R(V);
    }
    function j(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(j);
          if (k === null || l(k))
            return !0;
          var V = m(k);
          if (V) {
            var ee = V.call(k), Z;
            if (V !== k.entries) {
              for (; !(Z = ee.next()).done; )
                if (!j(Z.value))
                  return !1;
            } else
              for (; !(Z = ee.next()).done; ) {
                var U = Z.value;
                if (U && !j(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function D(k, V) {
      return k === "symbol" ? !0 : V ? V["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && V instanceof Symbol : !1;
    }
    function L(k) {
      var V = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : D(V, k) ? "symbol" : V;
    }
    function z(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var V = L(k);
      if (V === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return V;
    }
    function M(k) {
      var V = z(k);
      switch (V) {
        case "array":
        case "object":
          return "an " + V;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + V;
        default:
          return V;
      }
    }
    function H(k) {
      return !k.constructor || !k.constructor.name ? f : k.constructor.name;
    }
    return T.checkPropTypes = i, T.resetWarningCache = i.resetWarningCache, T.PropTypes = T, T;
  }, pr;
}
var fr, _i;
function sc() {
  if (_i) return fr;
  _i = 1;
  var e = /* @__PURE__ */ qr();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, fr = function() {
    function r(a, l, c, u, d, m) {
      if (m !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: o,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, fr;
}
var Ii;
function ac() {
  if (Ii) return eo.exports;
  if (Ii = 1, process.env.NODE_ENV !== "production") {
    var e = oa(), t = !0;
    eo.exports = /* @__PURE__ */ ic()(e.isElement, t);
  } else
    eo.exports = /* @__PURE__ */ sc()();
  return eo.exports;
}
var lc = /* @__PURE__ */ ac();
const n = /* @__PURE__ */ Ur(lc);
function cc(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function uc(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var dc = /* @__PURE__ */ function() {
  function e(o) {
    var r = this;
    this._insertTag = function(i) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, s), r.tags.push(i);
    }, this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(uc(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = cc(i);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var i;
      return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Ve = "-ms-", vo = "-moz-", be = "-webkit-", ia = "comm", Gr = "rule", Hr = "decl", pc = "@import", sa = "@keyframes", fc = "@layer", mc = Math.abs, Io = String.fromCharCode, hc = Object.assign;
function bc(e, t) {
  return je(e, 0) ^ 45 ? (((t << 2 ^ je(e, 0)) << 2 ^ je(e, 1)) << 2 ^ je(e, 2)) << 2 ^ je(e, 3) : 0;
}
function aa(e) {
  return e.trim();
}
function gc(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ge(e, t, o) {
  return e.replace(t, o);
}
function Nr(e, t) {
  return e.indexOf(t);
}
function je(e, t) {
  return e.charCodeAt(t) | 0;
}
function Vn(e, t, o) {
  return e.slice(t, o);
}
function bt(e) {
  return e.length;
}
function Yr(e) {
  return e.length;
}
function no(e, t) {
  return t.push(e), e;
}
function yc(e, t) {
  return e.map(t).join("");
}
var ko = 1, fn = 1, la = 0, Ye = 0, Ae = 0, En = "";
function Mo(e, t, o, r, i, s, a) {
  return { value: e, root: t, parent: o, type: r, props: i, children: s, line: ko, column: fn, length: a, return: "" };
}
function Rn(e, t) {
  return hc(Mo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function vc() {
  return Ae;
}
function xc() {
  return Ae = Ye > 0 ? je(En, --Ye) : 0, fn--, Ae === 10 && (fn = 1, ko--), Ae;
}
function Ze() {
  return Ae = Ye < la ? je(En, Ye++) : 0, fn++, Ae === 10 && (fn = 1, ko++), Ae;
}
function gt() {
  return je(En, Ye);
}
function fo() {
  return Ye;
}
function Hn(e, t) {
  return Vn(En, e, t);
}
function Wn(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ca(e) {
  return ko = fn = 1, la = bt(En = e), Ye = 0, [];
}
function ua(e) {
  return En = "", e;
}
function mo(e) {
  return aa(Hn(Ye - 1, _r(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ec(e) {
  for (; (Ae = gt()) && Ae < 33; )
    Ze();
  return Wn(e) > 2 || Wn(Ae) > 3 ? "" : " ";
}
function Tc(e, t) {
  for (; --t && Ze() && !(Ae < 48 || Ae > 102 || Ae > 57 && Ae < 65 || Ae > 70 && Ae < 97); )
    ;
  return Hn(e, fo() + (t < 6 && gt() == 32 && Ze() == 32));
}
function _r(e) {
  for (; Ze(); )
    switch (Ae) {
      // ] ) " '
      case e:
        return Ye;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && _r(Ae);
        break;
      // (
      case 40:
        e === 41 && _r(e);
        break;
      // \
      case 92:
        Ze();
        break;
    }
  return Ye;
}
function Cc(e, t) {
  for (; Ze() && e + Ae !== 57; )
    if (e + Ae === 84 && gt() === 47)
      break;
  return "/*" + Hn(t, Ye - 1) + "*" + Io(e === 47 ? e : Ze());
}
function Oc(e) {
  for (; !Wn(gt()); )
    Ze();
  return Hn(e, Ye);
}
function Rc(e) {
  return ua(ho("", null, null, null, [""], e = ca(e), 0, [0], e));
}
function ho(e, t, o, r, i, s, a, l, c) {
  for (var u = 0, d = 0, m = a, f = 0, T = 0, g = 0, p = 1, R = 1, O = 1, S = 0, y = "", C = i, v = s, N = r, h = y; R; )
    switch (g = S, S = Ze()) {
      // (
      case 40:
        if (g != 108 && je(h, m - 1) == 58) {
          Nr(h += ge(mo(S), "&", "&\f"), "&\f") != -1 && (O = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        h += mo(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        h += Ec(g);
        break;
      // \
      case 92:
        h += Tc(fo() - 1, 7);
        continue;
      // /
      case 47:
        switch (gt()) {
          case 42:
          case 47:
            no(Sc(Cc(Ze(), fo()), t, o), c);
            break;
          default:
            h += "/";
        }
        break;
      // {
      case 123 * p:
        l[u++] = bt(h) * O;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (S) {
          // \0 }
          case 0:
          case 125:
            R = 0;
          // ;
          case 59 + d:
            O == -1 && (h = ge(h, /\f/g, "")), T > 0 && bt(h) - m && no(T > 32 ? Mi(h + ";", r, o, m - 1) : Mi(ge(h, " ", "") + ";", r, o, m - 2), c);
            break;
          // @ ;
          case 59:
            h += ";";
          // { rule/at-rule
          default:
            if (no(N = ki(h, t, o, u, d, i, l, y, C = [], v = [], m), s), S === 123)
              if (d === 0)
                ho(h, t, N, N, C, s, m, l, v);
              else
                switch (f === 99 && je(h, 3) === 110 ? 100 : f) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ho(e, N, N, r && no(ki(e, N, N, 0, 0, i, l, y, i, C = [], m), v), i, v, m, l, r ? C : v);
                    break;
                  default:
                    ho(h, N, N, N, [""], v, 0, l, v);
                }
        }
        u = d = T = 0, p = O = 1, y = h = "", m = a;
        break;
      // :
      case 58:
        m = 1 + bt(h), T = g;
      default:
        if (p < 1) {
          if (S == 123)
            --p;
          else if (S == 125 && p++ == 0 && xc() == 125)
            continue;
        }
        switch (h += Io(S), S * p) {
          // &
          case 38:
            O = d > 0 ? 1 : (h += "\f", -1);
            break;
          // ,
          case 44:
            l[u++] = (bt(h) - 1) * O, O = 1;
            break;
          // @
          case 64:
            gt() === 45 && (h += mo(Ze())), f = gt(), d = m = bt(y = h += Oc(fo())), S++;
            break;
          // -
          case 45:
            g === 45 && bt(h) == 2 && (p = 0);
        }
    }
  return s;
}
function ki(e, t, o, r, i, s, a, l, c, u, d) {
  for (var m = i - 1, f = i === 0 ? s : [""], T = Yr(f), g = 0, p = 0, R = 0; g < r; ++g)
    for (var O = 0, S = Vn(e, m + 1, m = mc(p = a[g])), y = e; O < T; ++O)
      (y = aa(p > 0 ? f[O] + " " + S : ge(S, /&\f/g, f[O]))) && (c[R++] = y);
  return Mo(e, t, o, i === 0 ? Gr : l, c, u, d);
}
function Sc(e, t, o) {
  return Mo(e, t, o, ia, Io(vc()), Vn(e, 2, -2), 0);
}
function Mi(e, t, o, r) {
  return Mo(e, t, o, Hr, Vn(e, 0, r), Vn(e, r + 1, -1), r);
}
function an(e, t) {
  for (var o = "", r = Yr(e), i = 0; i < r; i++)
    o += t(e[i], i, e, t) || "";
  return o;
}
function $c(e, t, o, r) {
  switch (e.type) {
    case fc:
      if (e.children.length) break;
    case pc:
    case Hr:
      return e.return = e.return || e.value;
    case ia:
      return "";
    case sa:
      return e.return = e.value + "{" + an(e.children, r) + "}";
    case Gr:
      e.value = e.props.join(",");
  }
  return bt(o = an(e.children, r)) ? e.return = e.value + "{" + o + "}" : "";
}
function Pc(e) {
  var t = Yr(e);
  return function(o, r, i, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](o, r, i, s) || "";
    return a;
  };
}
function wc(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Nc = function(t, o, r) {
  for (var i = 0, s = 0; i = s, s = gt(), i === 38 && s === 12 && (o[r] = 1), !Wn(s); )
    Ze();
  return Hn(t, Ye);
}, _c = function(t, o) {
  var r = -1, i = 44;
  do
    switch (Wn(i)) {
      case 0:
        i === 38 && gt() === 12 && (o[r] = 1), t[r] += Nc(Ye - 1, o, r);
        break;
      case 2:
        t[r] += mo(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = gt() === 58 ? "&\f" : "", o[r] = t[r].length;
          break;
        }
      // fallthrough
      default:
        t[r] += Io(i);
    }
  while (i = Ze());
  return t;
}, Ic = function(t, o) {
  return ua(_c(ca(t), o));
}, Ai = /* @__PURE__ */ new WeakMap(), kc = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var o = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && o.charCodeAt(0) !== 58 && !Ai.get(r)) && !i) {
      Ai.set(t, !0);
      for (var s = [], a = Ic(o, s), l = r.props, c = 0, u = 0; c < a.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = s[c] ? a[c].replace(/&\f/g, l[d]) : l[d] + " " + a[c];
    }
  }
}, Mc = function(t) {
  if (t.type === "decl") {
    var o = t.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function da(e, t) {
  switch (bc(e, t)) {
    // color-adjust
    case 5103:
      return be + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return be + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return be + e + vo + e + Ve + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return be + e + Ve + e + e;
    // order
    case 6165:
      return be + e + Ve + "flex-" + e + e;
    // align-items
    case 5187:
      return be + e + ge(e, /(\w+).+(:[^]+)/, be + "box-$1$2" + Ve + "flex-$1$2") + e;
    // align-self
    case 5443:
      return be + e + Ve + "flex-item-" + ge(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return be + e + Ve + "flex-line-pack" + ge(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return be + e + Ve + ge(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return be + e + Ve + ge(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return be + "box-" + ge(e, "-grow", "") + be + e + Ve + ge(e, "grow", "positive") + e;
    // transition
    case 4554:
      return be + ge(e, /([^-])(transform)/g, "$1" + be + "$2") + e;
    // cursor
    case 6187:
      return ge(ge(ge(e, /(zoom-|grab)/, be + "$1"), /(image-set)/, be + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return ge(e, /(image-set\([^]*)/, be + "$1$`$1");
    // justify-content
    case 4968:
      return ge(ge(e, /(.+:)(flex-)?(.*)/, be + "box-pack:$3" + Ve + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + be + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ge(e, /(.+)-inline(.+)/, be + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (bt(e) - 1 - t > 6) switch (je(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (je(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return ge(e, /(.+:)(.+)-([^]+)/, "$1" + be + "$2-$3$1" + vo + (je(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Nr(e, "stretch") ? da(ge(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (je(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (je(e, bt(e) - 3 - (~Nr(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return ge(e, ":", ":" + be) + e;
        // (inline-)?fl(e)x
        case 101:
          return ge(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + be + (je(e, 14) === 45 ? "inline-" : "") + "box$3$1" + be + "$2$3$1" + Ve + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (je(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return be + e + Ve + ge(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return be + e + Ve + ge(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return be + e + Ve + ge(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return be + e + Ve + e + e;
  }
  return e;
}
var Ac = function(t, o, r, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Hr:
      t.return = da(t.value, t.length);
      break;
    case sa:
      return an([Rn(t, {
        value: ge(t.value, "@", "@" + be)
      })], i);
    case Gr:
      if (t.length) return yc(t.props, function(s) {
        switch (gc(s, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return an([Rn(t, {
              props: [ge(s, /:(read-\w+)/, ":" + vo + "$1")]
            })], i);
          // :placeholder
          case "::placeholder":
            return an([Rn(t, {
              props: [ge(s, /:(plac\w+)/, ":" + be + "input-$1")]
            }), Rn(t, {
              props: [ge(s, /:(plac\w+)/, ":" + vo + "$1")]
            }), Rn(t, {
              props: [ge(s, /:(plac\w+)/, Ve + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, Dc = [Ac], Fc = function(t) {
  var o = t.key;
  if (o === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(p) {
      var R = p.getAttribute("data-emotion");
      R.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Dc, s = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(p) {
      for (var R = p.getAttribute("data-emotion").split(" "), O = 1; O < R.length; O++)
        s[R[O]] = !0;
      l.push(p);
    }
  );
  var c, u = [kc, Mc];
  {
    var d, m = [$c, wc(function(p) {
      d.insert(p);
    })], f = Pc(u.concat(i, m)), T = function(R) {
      return an(Rc(R), f);
    };
    c = function(R, O, S, y) {
      d = S, T(R ? R + "{" + O.styles + "}" : O.styles), y && (g.inserted[O.name] = !0);
    };
  }
  var g = {
    key: o,
    sheet: new dc({
      key: o,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: c
  };
  return g.sheet.hydrate(l), g;
};
let Ir;
typeof document == "object" && (Ir = Fc({
  key: "css",
  prepend: !0
}));
function pa(e) {
  const {
    injectFirst: t,
    children: o
  } = e;
  return t && Ir ? /* @__PURE__ */ x(Gl, {
    value: Ir,
    children: o
  }) : o;
}
process.env.NODE_ENV !== "production" && (pa.propTypes = {
  /**
   * Your component tree.
   */
  children: n.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: n.bool
});
function Lc(e) {
  return e == null || Object.keys(e).length === 0;
}
function Kr(e) {
  const {
    styles: t,
    defaultTheme: o = {}
  } = e;
  return /* @__PURE__ */ x(Hl, {
    styles: typeof t == "function" ? (i) => t(Lc(i) ? o : i) : t
  });
}
process.env.NODE_ENV !== "production" && (Kr.propTypes = {
  defaultTheme: n.object,
  styles: n.oneOfType([n.array, n.string, n.object, n.func])
});
/**
 * @mui/styled-engine v5.16.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Xr(e, t) {
  const o = Yl(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), o(...r);
  } : o;
}
const fa = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, jc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Kr,
  StyledEngineProvider: pa,
  ThemeContext: Wr,
  css: wr,
  default: Xr,
  internal_processStyles: fa,
  keyframes: xn
}, Symbol.toStringTag, { value: "Module" }));
function Tt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ma(e) {
  if (/* @__PURE__ */ E.isValidElement(e) || !Tt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = ma(e[o]);
  }), t;
}
function qe(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? b({}, e) : e;
  return Tt(e) && Tt(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ E.isValidElement(t[i]) ? r[i] = t[i] : Tt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Tt(e[i]) ? r[i] = qe(e[i], t[i], o) : o.clone ? r[i] = Tt(t[i]) ? ma(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const Bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qe,
  isPlainObject: Tt
}, Symbol.toStringTag, { value: "Module" })), zc = ["values", "unit", "step"], Vc = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => b({}, o, {
    [r.key]: r.val
  }), {});
};
function ha(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: o = "px",
    step: r = 5
  } = e, i = q(e, zc), s = Vc(t), a = Object.keys(s);
  function l(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${o})`;
  }
  function c(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${o})`;
  }
  function u(f, T) {
    const g = a.indexOf(T);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${o}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : T) - r / 100}${o})`;
  }
  function d(f) {
    return a.indexOf(f) + 1 < a.length ? u(f, a[a.indexOf(f) + 1]) : l(f);
  }
  function m(f) {
    const T = a.indexOf(f);
    return T === 0 ? l(a[1]) : T === a.length - 1 ? c(a[T]) : u(f, a[a.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return b({
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: d,
    not: m,
    unit: o
  }, i);
}
const Wc = {
  borderRadius: 4
}, It = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {};
function jn(e, t) {
  return t ? qe(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Jr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Di = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Jr[e]}px)`
};
function Ke(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || Di;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = o(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || Di;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(s.values || Jr).indexOf(l) !== -1) {
        const c = s.up(l);
        a[c] = o(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return o(t);
}
function ba(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const s = e.up(i);
    return r[s] = {}, r;
  }, {})) || {};
}
function ga(e, t) {
  return e.reduce((o, r) => {
    const i = o[r];
    return (!i || Object.keys(i).length === 0) && delete o[r], o;
  }, t);
}
function Uc(e, ...t) {
  const o = ba(e), r = [o, ...t].reduce((i, s) => qe(i, s), {});
  return ga(Object.keys(o), r);
}
function qc(e, t) {
  if (typeof e != "object")
    return {};
  const o = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((i, s) => {
    s < e.length && (o[i] = !0);
  }) : r.forEach((i) => {
    e[i] != null && (o[i] = !0);
  }), o;
}
function Bt({
  values: e,
  breakpoints: t,
  base: o
}) {
  const r = o || qc(e, t), i = Object.keys(r);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function X(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ct(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Gc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: X
}, Symbol.toStringTag, { value: "Module" }));
function Ao(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function xo(e, t, o, r = o) {
  let i;
  return typeof e == "function" ? i = e(o) : Array.isArray(e) ? i = e[o] || r : i = Ao(e, o) || r, t && (i = t(i, r, e)), i;
}
function Me(e) {
  const {
    prop: t,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = Ao(c, r) || {};
    return Ke(a, l, (m) => {
      let f = xo(u, i, m);
      return m === f && typeof m == "string" && (f = xo(u, i, `${t}${m === "default" ? "" : X(m)}`, m)), o === !1 ? f : {
        [o]: f
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: It
  } : {}, s.filterProps = [t], s;
}
function Hc(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
const Yc = {
  m: "margin",
  p: "padding"
}, Kc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Fi = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Xc = Hc((e) => {
  if (e.length > 2)
    if (Fi[e])
      e = Fi[e];
    else
      return [e];
  const [t, o] = e.split(""), r = Yc[t], i = Kc[o] || "";
  return Array.isArray(i) ? i.map((s) => r + s) : [r + i];
}), Do = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Fo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Jc = [...Do, ...Fo];
function Yn(e, t, o, r) {
  var i;
  const s = (i = Ao(e, t, !1)) != null ? i : o;
  return typeof s == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), s * a) : Array.isArray(s) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > s.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${a} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[a]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Zr(e) {
  return Yn(e, "spacing", 8, "spacing");
}
function zt(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const o = Math.abs(t), r = e(o);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Zc(e, t) {
  return (o) => e.reduce((r, i) => (r[i] = zt(t, o), r), {});
}
function Qc(e, t, o, r) {
  if (t.indexOf(o) === -1)
    return null;
  const i = Xc(o), s = Zc(i, r), a = e[o];
  return Ke(e, a, s);
}
function ya(e, t) {
  const o = Zr(e.theme);
  return Object.keys(e).map((r) => Qc(e, t, r, o)).reduce(jn, {});
}
function _e(e) {
  return ya(e, Do);
}
_e.propTypes = process.env.NODE_ENV !== "production" ? Do.reduce((e, t) => (e[t] = It, e), {}) : {};
_e.filterProps = Do;
function Ie(e) {
  return ya(e, Fo);
}
Ie.propTypes = process.env.NODE_ENV !== "production" ? Fo.reduce((e, t) => (e[t] = It, e), {}) : {};
Ie.filterProps = Fo;
process.env.NODE_ENV !== "production" && Jc.reduce((e, t) => (e[t] = It, e), {});
function eu(e = 8) {
  if (e.mui)
    return e;
  const t = Zr({
    spacing: e
  }), o = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return o.mui = !0, o;
}
function Lo(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((s) => {
    r[s] = i;
  }), r), {}), o = (r) => Object.keys(r).reduce((i, s) => t[s] ? jn(i, t[s](r)) : i, {});
  return o.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, o.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), o;
}
function rt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function st(e, t) {
  return Me({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const tu = st("border", rt), nu = st("borderTop", rt), ou = st("borderRight", rt), ru = st("borderBottom", rt), iu = st("borderLeft", rt), su = st("borderColor"), au = st("borderTopColor"), lu = st("borderRightColor"), cu = st("borderBottomColor"), uu = st("borderLeftColor"), du = st("outline", rt), pu = st("outlineColor"), jo = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Yn(e.theme, "shape.borderRadius", 4, "borderRadius"), o = (r) => ({
      borderRadius: zt(t, r)
    });
    return Ke(e, e.borderRadius, o);
  }
  return null;
};
jo.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: It
} : {};
jo.filterProps = ["borderRadius"];
Lo(tu, nu, ou, ru, iu, su, au, lu, cu, uu, jo, du, pu);
const Bo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Yn(e.theme, "spacing", 8, "gap"), o = (r) => ({
      gap: zt(t, r)
    });
    return Ke(e, e.gap, o);
  }
  return null;
};
Bo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: It
} : {};
Bo.filterProps = ["gap"];
const zo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Yn(e.theme, "spacing", 8, "columnGap"), o = (r) => ({
      columnGap: zt(t, r)
    });
    return Ke(e, e.columnGap, o);
  }
  return null;
};
zo.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: It
} : {};
zo.filterProps = ["columnGap"];
const Vo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Yn(e.theme, "spacing", 8, "rowGap"), o = (r) => ({
      rowGap: zt(t, r)
    });
    return Ke(e, e.rowGap, o);
  }
  return null;
};
Vo.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: It
} : {};
Vo.filterProps = ["rowGap"];
const fu = Me({
  prop: "gridColumn"
}), mu = Me({
  prop: "gridRow"
}), hu = Me({
  prop: "gridAutoFlow"
}), bu = Me({
  prop: "gridAutoColumns"
}), gu = Me({
  prop: "gridAutoRows"
}), yu = Me({
  prop: "gridTemplateColumns"
}), vu = Me({
  prop: "gridTemplateRows"
}), xu = Me({
  prop: "gridTemplateAreas"
}), Eu = Me({
  prop: "gridArea"
});
Lo(Bo, zo, Vo, fu, mu, hu, bu, gu, yu, vu, xu, Eu);
function ln(e, t) {
  return t === "grey" ? t : e;
}
const Tu = Me({
  prop: "color",
  themeKey: "palette",
  transform: ln
}), Cu = Me({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ln
}), Ou = Me({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ln
});
Lo(Tu, Cu, Ou);
function Je(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ru = Me({
  prop: "width",
  transform: Je
}), Qr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      var r, i;
      const s = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[o]) || Jr[o];
      return s ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: Je(o)
      };
    };
    return Ke(e, e.maxWidth, t);
  }
  return null;
};
Qr.filterProps = ["maxWidth"];
const Su = Me({
  prop: "minWidth",
  transform: Je
}), $u = Me({
  prop: "height",
  transform: Je
}), Pu = Me({
  prop: "maxHeight",
  transform: Je
}), wu = Me({
  prop: "minHeight",
  transform: Je
});
Me({
  prop: "size",
  cssProperty: "width",
  transform: Je
});
Me({
  prop: "size",
  cssProperty: "height",
  transform: Je
});
const Nu = Me({
  prop: "boxSizing"
});
Lo(Ru, Qr, Su, $u, Pu, wu, Nu);
const Kn = {
  // borders
  border: {
    themeKey: "borders",
    transform: rt
  },
  borderTop: {
    themeKey: "borders",
    transform: rt
  },
  borderRight: {
    themeKey: "borders",
    transform: rt
  },
  borderBottom: {
    themeKey: "borders",
    transform: rt
  },
  borderLeft: {
    themeKey: "borders",
    transform: rt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: rt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: jo
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ln
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ln
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ln
  },
  // spacing
  p: {
    style: Ie
  },
  pt: {
    style: Ie
  },
  pr: {
    style: Ie
  },
  pb: {
    style: Ie
  },
  pl: {
    style: Ie
  },
  px: {
    style: Ie
  },
  py: {
    style: Ie
  },
  padding: {
    style: Ie
  },
  paddingTop: {
    style: Ie
  },
  paddingRight: {
    style: Ie
  },
  paddingBottom: {
    style: Ie
  },
  paddingLeft: {
    style: Ie
  },
  paddingX: {
    style: Ie
  },
  paddingY: {
    style: Ie
  },
  paddingInline: {
    style: Ie
  },
  paddingInlineStart: {
    style: Ie
  },
  paddingInlineEnd: {
    style: Ie
  },
  paddingBlock: {
    style: Ie
  },
  paddingBlockStart: {
    style: Ie
  },
  paddingBlockEnd: {
    style: Ie
  },
  m: {
    style: _e
  },
  mt: {
    style: _e
  },
  mr: {
    style: _e
  },
  mb: {
    style: _e
  },
  ml: {
    style: _e
  },
  mx: {
    style: _e
  },
  my: {
    style: _e
  },
  margin: {
    style: _e
  },
  marginTop: {
    style: _e
  },
  marginRight: {
    style: _e
  },
  marginBottom: {
    style: _e
  },
  marginLeft: {
    style: _e
  },
  marginX: {
    style: _e
  },
  marginY: {
    style: _e
  },
  marginInline: {
    style: _e
  },
  marginInlineStart: {
    style: _e
  },
  marginInlineEnd: {
    style: _e
  },
  marginBlock: {
    style: _e
  },
  marginBlockStart: {
    style: _e
  },
  marginBlockEnd: {
    style: _e
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Bo
  },
  rowGap: {
    style: Vo
  },
  columnGap: {
    style: zo
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Je
  },
  maxWidth: {
    style: Qr
  },
  minWidth: {
    transform: Je
  },
  height: {
    transform: Je
  },
  maxHeight: {
    transform: Je
  },
  minHeight: {
    transform: Je
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function _u(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function Iu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function va() {
  function e(o, r, i, s) {
    const a = {
      [o]: r,
      theme: i
    }, l = s[o];
    if (!l)
      return {
        [o]: r
      };
    const {
      cssProperty: c = o,
      themeKey: u,
      transform: d,
      style: m
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [o]: r
      };
    const f = Ao(i, u) || {};
    return m ? m(a) : Ke(a, r, (g) => {
      let p = xo(f, d, g);
      return g === p && typeof g == "string" && (p = xo(f, d, `${o}${g === "default" ? "" : X(g)}`, g)), c === !1 ? p : {
        [c]: p
      };
    });
  }
  function t(o) {
    var r;
    const {
      sx: i,
      theme: s = {}
    } = o || {};
    if (!i)
      return null;
    const a = (r = s.unstable_sxConfig) != null ? r : Kn;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(s);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = ba(s.breakpoints), m = Object.keys(d);
      let f = d;
      return Object.keys(u).forEach((T) => {
        const g = Iu(u[T], s);
        if (g != null)
          if (typeof g == "object")
            if (a[T])
              f = jn(f, e(T, g, s, a));
            else {
              const p = Ke({
                theme: s
              }, g, (R) => ({
                [T]: R
              }));
              _u(p, g) ? f[T] = t({
                sx: g,
                theme: s
              }) : f = jn(f, p);
            }
          else
            f = jn(f, e(T, g, s, a));
      }), ga(m, f);
    }
    return Array.isArray(i) ? i.map(l) : l(i);
  }
  return t;
}
const Tn = va();
Tn.filterProps = ["sx"];
function xa(e, t) {
  const o = this;
  return o.vars && typeof o.getColorSchemeSelector == "function" ? {
    [o.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : o.palette.mode === e ? t : {};
}
const ku = ["breakpoints", "palette", "spacing", "shape"];
function Cn(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: i,
    shape: s = {}
  } = e, a = q(e, ku), l = ha(o), c = eu(i);
  let u = qe({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: b({
      mode: "light"
    }, r),
    spacing: c,
    shape: b({}, Wc, s)
  }, a);
  return u.applyStyles = xa, u = t.reduce((d, m) => qe(d, m), u), u.unstable_sxConfig = b({}, Kn, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(m) {
    return Tn({
      sx: m,
      theme: this
    });
  }, u;
}
const Mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cn,
  private_createBreakpoints: ha,
  unstable_applyStyles: xa
}, Symbol.toStringTag, { value: "Module" }));
function Au(e) {
  return Object.keys(e).length === 0;
}
function ei(e = null) {
  const t = E.useContext(Wr);
  return !t || Au(t) ? e : t;
}
const Du = Cn();
function Wo(e = Du) {
  return ei(e);
}
function Ea({
  styles: e,
  themeId: t,
  defaultTheme: o = {}
}) {
  const r = Wo(o), i = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ x(Kr, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (Ea.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: n.object,
  /**
   * @ignore
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool]),
  /**
   * @ignore
   */
  themeId: n.string
});
const Fu = ["sx"], Lu = (e) => {
  var t, o;
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = (t = e == null || (o = e.theme) == null ? void 0 : o.unstable_sxConfig) != null ? t : Kn;
  return Object.keys(e).forEach((s) => {
    i[s] ? r.systemProps[s] = e[s] : r.otherProps[s] = e[s];
  }), r;
};
function Xn(e) {
  const {
    sx: t
  } = e, o = q(e, Fu), {
    systemProps: r,
    otherProps: i
  } = Lu(o);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return Tt(l) ? b({}, r, l) : r;
  } : s = b({}, r, t), b({}, i, {
    sx: s
  });
}
const ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tn,
  extendSxProp: Xn,
  unstable_createStyleFunctionSx: va,
  unstable_defaultSxConfig: Kn
}, Symbol.toStringTag, { value: "Module" })), Li = (e) => e, Bu = () => {
  let e = Li;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Li;
    }
  };
}, ti = Bu();
function Ta(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (o = Ta(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function J() {
  for (var e, t, o = 0, r = "", i = arguments.length; o < i; o++) (e = arguments[o]) && (t = Ta(e)) && (r && (r += " "), r += t);
  return r;
}
const zu = ["className", "component"];
function Vu(e = {}) {
  const {
    themeId: t,
    defaultTheme: o,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, s = Xr("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Tn);
  return /* @__PURE__ */ E.forwardRef(function(c, u) {
    const d = Wo(o), m = Xn(c), {
      className: f,
      component: T = "div"
    } = m, g = q(m, zu);
    return /* @__PURE__ */ x(s, b({
      as: T,
      ref: u,
      className: J(f, i ? i(r) : r),
      theme: t && d[t] || d
    }, g));
  });
}
const Wu = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ce(e, t, o = "Mui") {
  const r = Wu[t];
  return r ? `${o}-${r}` : `${ti.generate(e)}-${t}`;
}
function ae(e, t, o = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = ce(e, i, o);
  }), r;
}
var oo = { exports: {} }, Ce = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ji;
function Uu() {
  if (ji) return Ce;
  ji = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), f = Symbol.for("react.view_transition"), T = Symbol.for("react.client.reference");
  function g(p) {
    if (typeof p == "object" && p !== null) {
      var R = p.$$typeof;
      switch (R) {
        case e:
          switch (p = p.type, p) {
            case o:
            case i:
            case r:
            case c:
            case u:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case l:
                case m:
                case d:
                  return p;
                case s:
                  return p;
                default:
                  return R;
              }
          }
        case t:
          return R;
      }
    }
  }
  return Ce.ContextConsumer = s, Ce.ContextProvider = a, Ce.Element = e, Ce.ForwardRef = l, Ce.Fragment = o, Ce.Lazy = m, Ce.Memo = d, Ce.Portal = t, Ce.Profiler = i, Ce.StrictMode = r, Ce.Suspense = c, Ce.SuspenseList = u, Ce.isContextConsumer = function(p) {
    return g(p) === s;
  }, Ce.isContextProvider = function(p) {
    return g(p) === a;
  }, Ce.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ce.isForwardRef = function(p) {
    return g(p) === l;
  }, Ce.isFragment = function(p) {
    return g(p) === o;
  }, Ce.isLazy = function(p) {
    return g(p) === m;
  }, Ce.isMemo = function(p) {
    return g(p) === d;
  }, Ce.isPortal = function(p) {
    return g(p) === t;
  }, Ce.isProfiler = function(p) {
    return g(p) === i;
  }, Ce.isStrictMode = function(p) {
    return g(p) === r;
  }, Ce.isSuspense = function(p) {
    return g(p) === c;
  }, Ce.isSuspenseList = function(p) {
    return g(p) === u;
  }, Ce.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === o || p === i || p === r || p === c || p === u || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === d || p.$$typeof === a || p.$$typeof === s || p.$$typeof === l || p.$$typeof === T || p.getModuleId !== void 0);
  }, Ce.typeOf = g, Ce;
}
var Oe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bi;
function qu() {
  return Bi || (Bi = 1, process.env.NODE_ENV !== "production" && function() {
    function e(p) {
      if (typeof p == "object" && p !== null) {
        var R = p.$$typeof;
        switch (R) {
          case t:
            switch (p = p.type, p) {
              case r:
              case s:
              case i:
              case u:
              case d:
              case T:
                return p;
              default:
                switch (p = p && p.$$typeof, p) {
                  case l:
                  case c:
                  case f:
                  case m:
                    return p;
                  case a:
                    return p;
                  default:
                    return R;
                }
            }
          case o:
            return R;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), T = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    Oe.ContextConsumer = a, Oe.ContextProvider = l, Oe.Element = t, Oe.ForwardRef = c, Oe.Fragment = r, Oe.Lazy = f, Oe.Memo = m, Oe.Portal = o, Oe.Profiler = s, Oe.StrictMode = i, Oe.Suspense = u, Oe.SuspenseList = d, Oe.isContextConsumer = function(p) {
      return e(p) === a;
    }, Oe.isContextProvider = function(p) {
      return e(p) === l;
    }, Oe.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, Oe.isForwardRef = function(p) {
      return e(p) === c;
    }, Oe.isFragment = function(p) {
      return e(p) === r;
    }, Oe.isLazy = function(p) {
      return e(p) === f;
    }, Oe.isMemo = function(p) {
      return e(p) === m;
    }, Oe.isPortal = function(p) {
      return e(p) === o;
    }, Oe.isProfiler = function(p) {
      return e(p) === s;
    }, Oe.isStrictMode = function(p) {
      return e(p) === i;
    }, Oe.isSuspense = function(p) {
      return e(p) === u;
    }, Oe.isSuspenseList = function(p) {
      return e(p) === d;
    }, Oe.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === r || p === s || p === i || p === u || p === d || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === m || p.$$typeof === l || p.$$typeof === a || p.$$typeof === c || p.$$typeof === g || p.getModuleId !== void 0);
    }, Oe.typeOf = e;
  }()), Oe;
}
var zi;
function Gu() {
  return zi || (zi = 1, process.env.NODE_ENV === "production" ? oo.exports = /* @__PURE__ */ Uu() : oo.exports = /* @__PURE__ */ qu()), oo.exports;
}
var mn = /* @__PURE__ */ Gu();
const Hu = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Ca(e) {
  const t = `${e}`.match(Hu);
  return t && t[1] || "";
}
function Oa(e, t = "") {
  return e.displayName || e.name || Ca(e) || t;
}
function Vi(e, t, o) {
  const r = Oa(t);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function Ra(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Oa(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case mn.ForwardRef:
          return Vi(e, e.render, "ForwardRef");
        case mn.Memo:
          return Vi(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Yu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ra,
  getFunctionName: Ca
}, Symbol.toStringTag, { value: "Module" })), Ku = ["ownerState"], Xu = ["variants"], Ju = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Zu(e) {
  return Object.keys(e).length === 0;
}
function Qu(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function mr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ed = Cn(), Wi = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function ro({
  defaultTheme: e,
  theme: t,
  themeId: o
}) {
  return Zu(t) ? e : t[o] || t;
}
function td(e) {
  return e ? (t, o) => o[e] : null;
}
function bo(e, t) {
  let {
    ownerState: o
  } = t, r = q(t, Ku);
  const i = typeof e == "function" ? e(b({
    ownerState: o
  }, r)) : e;
  if (Array.isArray(i))
    return i.flatMap((s) => bo(s, b({
      ownerState: o
    }, r)));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: s = []
    } = i;
    let l = q(i, Xu);
    return s.forEach((c) => {
      let u = !0;
      typeof c.props == "function" ? u = c.props(b({
        ownerState: o
      }, r, o)) : Object.keys(c.props).forEach((d) => {
        (o == null ? void 0 : o[d]) !== c.props[d] && r[d] !== c.props[d] && (u = !1);
      }), u && (Array.isArray(l) || (l = [l]), l.push(typeof c.style == "function" ? c.style(b({
        ownerState: o
      }, r, o)) : c.style));
    }), l;
  }
  return i;
}
function nd(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = ed,
    rootShouldForwardProp: r = mr,
    slotShouldForwardProp: i = mr
  } = e, s = (a) => Tn(b({}, a, {
    theme: ro(b({}, a, {
      defaultTheme: o,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (a, l = {}) => {
    fa(a, (v) => v.filter((N) => !(N != null && N.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = td(Wi(u))
    } = l, T = q(l, Ju), g = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), p = m || !1;
    let R;
    process.env.NODE_ENV !== "production" && c && (R = `${c}-${Wi(u || "Root")}`);
    let O = mr;
    u === "Root" || u === "root" ? O = r : u ? O = i : Qu(a) && (O = void 0);
    const S = Xr(a, b({
      shouldForwardProp: O,
      label: R
    }, T)), y = (v) => typeof v == "function" && v.__emotion_real !== v || Tt(v) ? (N) => bo(v, b({}, N, {
      theme: ro({
        theme: N.theme,
        defaultTheme: o,
        themeId: t
      })
    })) : v, C = (v, ...N) => {
      let h = y(v);
      const P = N ? N.map(y) : [];
      c && f && P.push((I) => {
        const F = ro(b({}, I, {
          defaultTheme: o,
          themeId: t
        }));
        if (!F.components || !F.components[c] || !F.components[c].styleOverrides)
          return null;
        const A = F.components[c].styleOverrides, j = {};
        return Object.entries(A).forEach(([D, L]) => {
          j[D] = bo(L, b({}, I, {
            theme: F
          }));
        }), f(I, j);
      }), c && !g && P.push((I) => {
        var F;
        const A = ro(b({}, I, {
          defaultTheme: o,
          themeId: t
        })), j = A == null || (F = A.components) == null || (F = F[c]) == null ? void 0 : F.variants;
        return bo({
          variants: j
        }, b({}, I, {
          theme: A
        }));
      }), p || P.push(s);
      const $ = P.length - N.length;
      if (Array.isArray(v) && $ > 0) {
        const I = new Array($).fill("");
        h = [...v, ...I], h.raw = [...v.raw, ...I];
      }
      const w = S(h, ...P);
      if (process.env.NODE_ENV !== "production") {
        let I;
        c && (I = `${c}${X(u || "")}`), I === void 0 && (I = `Styled(${Ra(a)})`), w.displayName = I;
      }
      return a.muiName && (w.muiName = a.muiName), w;
    };
    return S.withConfig && (C.withConfig = S.withConfig), C;
  };
}
const Sa = nd();
function Un(e, t) {
  const o = b({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      o[r] = b({}, e[r], o[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[r] || {}, s = t[r];
      o[r] = {}, !s || !Object.keys(s) ? o[r] = i : !i || !Object.keys(i) ? o[r] = s : (o[r] = b({}, s), Object.keys(i).forEach((a) => {
        o[r][a] = Un(i[a], s[a]);
      }));
    } else o[r] === void 0 && (o[r] = e[r]);
  }), o;
}
function $a(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? r : Un(t.components[o].defaultProps, r);
}
function Pa({
  props: e,
  name: t,
  defaultTheme: o,
  themeId: r
}) {
  let i = Wo(o);
  return r && (i = i[r] || i), $a({
    theme: i,
    name: t,
    props: e
  });
}
const it = typeof window < "u" ? E.useLayoutEffect : E.useEffect;
function od(e, t, o, r, i) {
  const [s, a] = E.useState(() => i && o ? o(e).matches : r ? r(e).matches : t);
  return it(() => {
    let l = !0;
    if (!o)
      return;
    const c = o(e), u = () => {
      l && a(c.matches);
    };
    return u(), c.addListener(u), () => {
      l = !1, c.removeListener(u);
    };
  }, [e, o]), s;
}
const wa = E.useSyncExternalStore;
function rd(e, t, o, r, i) {
  const s = E.useCallback(() => t, [t]), a = E.useMemo(() => {
    if (i && o)
      return () => o(e).matches;
    if (r !== null) {
      const {
        matches: d
      } = r(e);
      return () => d;
    }
    return s;
  }, [s, e, r, i, o]), [l, c] = E.useMemo(() => {
    if (o === null)
      return [s, () => () => {
      }];
    const d = o(e);
    return [() => d.matches, (m) => (d.addListener(m), () => {
      d.removeListener(m);
    })];
  }, [s, o, e]);
  return wa(c, l, a);
}
function Na(e, t = {}) {
  const o = ei(), r = typeof window < "u" && typeof window.matchMedia < "u", {
    defaultMatches: i = !1,
    matchMedia: s = r ? window.matchMedia : null,
    ssrMatchMedia: a = null,
    noSsr: l = !1
  } = $a({
    name: "MuiUseMediaQuery",
    props: t,
    theme: o
  });
  process.env.NODE_ENV !== "production" && typeof e == "function" && o === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
  let c = typeof e == "function" ? e(o) : e;
  c = c.replace(/^@media( ?)/m, "");
  const d = (wa !== void 0 ? rd : od)(c, i, s, a, l);
  return process.env.NODE_ENV !== "production" && E.useDebugValue({
    query: c,
    match: d
  }), d;
}
function _a(e, t = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, o));
}
const id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _a
}, Symbol.toStringTag, { value: "Module" }));
function sd(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), _a(e, t, o);
}
function ad(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ia(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ia(ad(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ct(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (o === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ct(10, i));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: o,
    values: r,
    colorSpace: i
  };
}
function ld(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function cd(e, t) {
  return e = Ia(e), t = sd(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ld(e);
}
function Rt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function ud(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ka(e, t, o, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !ud(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Wt = Rt(n.element, ka);
Wt.isRequired = Rt(n.element.isRequired, ka);
function dd(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function pd(e, t, o, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !dd(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Jn = Rt(n.elementType, pd), fd = "exact-prop: ​";
function Zn(e) {
  return process.env.NODE_ENV === "production" ? e : b({}, e, {
    [fd]: (t) => {
      const o = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function hn(e, t, o, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an HTMLElement.`) : null;
}
const at = n.oneOfType([n.func, n.object]);
function kr(...e) {
  return e.reduce((t, o) => o == null ? t : function(...i) {
    t.apply(this, i), o.apply(this, i);
  }, () => {
  });
}
function Uo(e, t = 166) {
  let o;
  function r(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(o), o = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(o);
  }, r;
}
function md(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (o, r, i, s, a) => {
    const l = i || "<<anonymous>>", c = a || r;
    return typeof o[r] < "u" ? new Error(`The ${s} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function cn(e, t) {
  var o, r;
  return /* @__PURE__ */ E.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (o = e.type.muiName) != null ? o : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function Be(e) {
  return e && e.ownerDocument || document;
}
function xt(e) {
  return Be(e).defaultView || window;
}
function Ma(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const o = t ? b({}, t.propTypes) : null;
  return (i) => (s, a, l, c, u, ...d) => {
    const m = u || a, f = o == null ? void 0 : o[m];
    if (f) {
      const T = f(s, a, l, c, u, ...d);
      if (T)
        return T;
    }
    return typeof s[a] < "u" && !s[i] ? new Error(`The prop \`${m}\` of \`${e}\` can only be used together with the \`${i}\` prop.`) : null;
  };
}
function Eo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Ui = 0;
function hd(e) {
  const [t, o] = E.useState(e), r = e || t;
  return E.useEffect(() => {
    t == null && (Ui += 1, o(`mui-${Ui}`));
  }, [t]), r;
}
const qi = E.useId;
function ni(e) {
  if (qi !== void 0) {
    const t = qi();
    return e ?? t;
  }
  return hd(e);
}
function bd(e, t, o, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${s}\` is not supported. Please remove it.`) : null;
}
function bn({
  controlled: e,
  default: t,
  name: o,
  state: r = "value"
}) {
  const {
    current: i
  } = E.useRef(e !== void 0), [s, a] = E.useState(t), l = i ? e : s;
  if (process.env.NODE_ENV !== "production") {
    E.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${o} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${o} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, o, e]);
    const {
      current: u
    } = E.useRef(t);
    E.useEffect(() => {
      !i && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${o} after being initialized. To suppress this warning opt to use a controlled ${o}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = E.useCallback((u) => {
    i || a(u);
  }, []);
  return [l, c];
}
function ft(e) {
  const t = E.useRef(e);
  return it(() => {
    t.current = e;
  }), E.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function ke(...e) {
  return E.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((o) => {
      Eo(o, t);
    });
  }, e);
}
const Gi = {};
function gd(e, t) {
  const o = E.useRef(Gi);
  return o.current === Gi && (o.current = e(t)), o;
}
const yd = [];
function vd(e) {
  E.useEffect(e, yd);
}
class qo {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new qo();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, t);
  }
}
function Go() {
  const e = gd(qo.create).current;
  return vd(e.disposeEffect), e;
}
let Ho = !0, Mr = !1;
const xd = new qo(), Ed = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Td(e) {
  const {
    type: t,
    tagName: o
  } = e;
  return !!(o === "INPUT" && Ed[t] && !e.readOnly || o === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Cd(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Ho = !0);
}
function hr() {
  Ho = !1;
}
function Od() {
  this.visibilityState === "hidden" && Mr && (Ho = !0);
}
function Rd(e) {
  e.addEventListener("keydown", Cd, !0), e.addEventListener("mousedown", hr, !0), e.addEventListener("pointerdown", hr, !0), e.addEventListener("touchstart", hr, !0), e.addEventListener("visibilitychange", Od, !0);
}
function Sd(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Ho || Td(t);
}
function Aa() {
  const e = E.useCallback((i) => {
    i != null && Rd(i.ownerDocument);
  }, []), t = E.useRef(!1);
  function o() {
    return t.current ? (Mr = !0, xd.start(100, () => {
      Mr = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(i) {
    return Sd(i) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: o,
    ref: e
  };
}
function Da(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function $d(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Pd(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const wd = Number.isInteger || Pd;
function Fa(e, t, o, r) {
  const i = e[t];
  if (i == null || !wd(i)) {
    const s = $d(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${o}\`, expected \`integer\`.`);
  }
  return null;
}
function La(e, t, ...o) {
  return e[t] === void 0 ? null : Fa(e, t, ...o);
}
function Ar() {
  return null;
}
La.isRequired = Fa;
Ar.isRequired = Ar;
const Nt = process.env.NODE_ENV === "production" ? Ar : La;
function ue(e, t, o = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (i) => {
      r[i] = e[i].reduce((s, a) => {
        if (a) {
          const l = t(a);
          l !== "" && s.push(l), o && o[a] && s.push(o[a]);
        }
        return s;
      }, []).join(" ");
    }
  ), r;
}
function gn(e) {
  return typeof e == "string";
}
function ja(e, t, o) {
  return e === void 0 || gn(e) ? t : b({}, t, {
    ownerState: b({}, t.ownerState, o)
  });
}
function To(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function Hi(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function Ba(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const T = J(o == null ? void 0 : o.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), g = b({}, o == null ? void 0 : o.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), p = b({}, o, i, r);
    return T.length > 0 && (p.className = T), Object.keys(g).length > 0 && (p.style = g), {
      props: p,
      internalRef: void 0
    };
  }
  const a = To(b({}, i, r)), l = Hi(r), c = Hi(i), u = t(a), d = J(u == null ? void 0 : u.className, o == null ? void 0 : o.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), m = b({}, u == null ? void 0 : u.style, o == null ? void 0 : o.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), f = b({}, u, o, c, l);
  return d.length > 0 && (f.className = d), Object.keys(m).length > 0 && (f.style = m), {
    props: f,
    internalRef: u.ref
  };
}
function za(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
const Nd = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Vt(e) {
  var t;
  const {
    elementType: o,
    externalSlotProps: r,
    ownerState: i,
    skipResolvingSlotProps: s = !1
  } = e, a = q(e, Nd), l = s ? {} : za(r, i), {
    props: c,
    internalRef: u
  } = Ba(b({}, a, {
    externalSlotProps: l
  })), d = ke(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return ja(o, b({}, c, {
    ref: d
  }), i);
}
function Ut(e) {
  if (parseInt(E.version, 10) >= 19) {
    var t;
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null;
  }
  return (e == null ? void 0 : e.ref) || null;
}
const oi = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (oi.displayName = "ThemeContext");
function Va() {
  const e = E.useContext(oi);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e;
}
const _d = typeof Symbol == "function" && Symbol.for, Id = _d ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function kd(e, t) {
  if (typeof t == "function") {
    const o = t(e);
    return process.env.NODE_ENV !== "production" && (o || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), o;
  }
  return b({}, e, t);
}
function Co(e) {
  const {
    children: t,
    theme: o
  } = e, r = Va();
  process.env.NODE_ENV !== "production" && r === null && typeof o == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const i = E.useMemo(() => {
    const s = r === null ? o : kd(r, o);
    return s != null && (s[Id] = r !== null), s;
  }, [o, r]);
  return /* @__PURE__ */ x(oi.Provider, {
    value: i,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Co.propTypes = {
  /**
   * Your component tree.
   */
  children: n.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: n.oneOfType([n.object, n.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Co.propTypes = Zn(Co.propTypes));
const Md = ["value"], Wa = /* @__PURE__ */ E.createContext();
function Ua(e) {
  let {
    value: t
  } = e, o = q(e, Md);
  return /* @__PURE__ */ x(Wa.Provider, b({
    value: t ?? !0
  }, o));
}
process.env.NODE_ENV !== "production" && (Ua.propTypes = {
  children: n.node,
  value: n.bool
});
const ri = () => {
  const e = E.useContext(Wa);
  return e ?? !1;
}, qa = /* @__PURE__ */ E.createContext(void 0);
function Ga({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ x(qa.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Ga.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: n.node,
  /**
   * @ignore
   */
  value: n.object
});
function Ad(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  if (!t || !t.components || !t.components[o])
    return r;
  const i = t.components[o];
  return i.defaultProps ? Un(i.defaultProps, r) : !i.styleOverrides && !i.variants ? Un(i, r) : r;
}
function Dd({
  props: e,
  name: t
}) {
  const o = E.useContext(qa);
  return Ad({
    props: e,
    name: t,
    theme: {
      components: o
    }
  });
}
const Yi = {};
function Ki(e, t, o, r = !1) {
  return E.useMemo(() => {
    const i = e && t[e] || t;
    if (typeof o == "function") {
      const s = o(i), a = e ? b({}, t, {
        [e]: s
      }) : s;
      return r ? () => a : a;
    }
    return e ? b({}, t, {
      [e]: o
    }) : b({}, t, o);
  }, [e, t, o, r]);
}
function Oo(e) {
  const {
    children: t,
    theme: o,
    themeId: r
  } = e, i = ei(Yi), s = Va() || Yi;
  process.env.NODE_ENV !== "production" && (i === null && typeof o == "function" || r && i && !i[r] && typeof o == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = Ki(r, i, o), l = Ki(r, s, o, !0), c = a.direction === "rtl";
  return /* @__PURE__ */ x(Co, {
    theme: l,
    children: /* @__PURE__ */ x(Wr.Provider, {
      value: a,
      children: /* @__PURE__ */ x(Ua, {
        value: c,
        children: /* @__PURE__ */ x(Ga, {
          value: a == null ? void 0 : a.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Oo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: n.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: n.oneOfType([n.func, n.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: n.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Oo.propTypes = Zn(Oo.propTypes));
const Fd = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"], Ld = Cn(), jd = Sa("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`maxWidth${X(String(o.maxWidth))}`], o.fixed && t.fixed, o.disableGutters && t.disableGutters];
  }
}), Bd = (e) => Pa({
  props: e,
  name: "MuiContainer",
  defaultTheme: Ld
}), zd = (e, t) => {
  const o = (c) => ce(t, c), {
    classes: r,
    fixed: i,
    disableGutters: s,
    maxWidth: a
  } = e, l = {
    root: ["root", a && `maxWidth${X(String(a))}`, i && "fixed", s && "disableGutters"]
  };
  return ue(l, o, r);
};
function Vd(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = jd,
    useThemeProps: o = Bd,
    componentName: r = "MuiContainer"
  } = e, i = t(({
    theme: a,
    ownerState: l
  }) => b({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    display: "block"
  }, !l.disableGutters && {
    paddingLeft: a.spacing(2),
    paddingRight: a.spacing(2),
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [a.breakpoints.up("sm")]: {
      paddingLeft: a.spacing(3),
      paddingRight: a.spacing(3)
    }
  }), ({
    theme: a,
    ownerState: l
  }) => l.fixed && Object.keys(a.breakpoints.values).reduce((c, u) => {
    const d = u, m = a.breakpoints.values[d];
    return m !== 0 && (c[a.breakpoints.up(d)] = {
      maxWidth: `${m}${a.breakpoints.unit}`
    }), c;
  }, {}), ({
    theme: a,
    ownerState: l
  }) => b({}, l.maxWidth === "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [a.breakpoints.up("xs")]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: Math.max(a.breakpoints.values.xs, 444)
    }
  }, l.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
  l.maxWidth !== "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [a.breakpoints.up(l.maxWidth)]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: `${a.breakpoints.values[l.maxWidth]}${a.breakpoints.unit}`
    }
  })), s = /* @__PURE__ */ E.forwardRef(function(l, c) {
    const u = o(l), {
      className: d,
      component: m = "div",
      disableGutters: f = !1,
      fixed: T = !1,
      maxWidth: g = "lg"
    } = u, p = q(u, Fd), R = b({}, u, {
      component: m,
      disableGutters: f,
      fixed: T,
      maxWidth: g
    }), O = zd(R, r);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ x(i, b({
        as: m,
        ownerState: R,
        className: J(O.root, d),
        ref: c
      }, p))
    );
  });
  return process.env.NODE_ENV !== "production" && (s.propTypes = {
    children: n.node,
    classes: n.object,
    className: n.string,
    component: n.elementType,
    disableGutters: n.bool,
    fixed: n.bool,
    maxWidth: n.oneOfType([n.oneOf(["xs", "sm", "md", "lg", "xl", !1]), n.string]),
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
  }), s;
}
const Wd = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], Ud = Cn(), qd = Sa("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function Gd(e) {
  return Pa({
    props: e,
    name: "MuiStack",
    defaultTheme: Ud
  });
}
function Hd(e, t) {
  const o = E.Children.toArray(e).filter(Boolean);
  return o.reduce((r, i, s) => (r.push(i), s < o.length - 1 && r.push(/* @__PURE__ */ E.cloneElement(t, {
    key: `separator-${s}`
  })), r), []);
}
const Yd = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Kd = ({
  ownerState: e,
  theme: t
}) => {
  let o = b({
    display: "flex",
    flexDirection: "column"
  }, Ke({
    theme: t
  }, Bt({
    values: e.direction,
    breakpoints: t.breakpoints.values
  }), (r) => ({
    flexDirection: r
  })));
  if (e.spacing) {
    const r = Zr(t), i = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = Bt({
      values: e.direction,
      base: i
    }), a = Bt({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((c, u, d) => {
      if (!s[c]) {
        const f = u > 0 ? s[d[u - 1]] : "column";
        s[c] = f;
      }
    }), o = qe(o, Ke({
      theme: t
    }, a, (c, u) => e.useFlexGap ? {
      gap: zt(r, c)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Yd(u ? s[u] : e.direction)}`]: zt(r, c)
      }
    }));
  }
  return o = Uc(t.breakpoints, o), o;
};
function Xd(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = qd,
    useThemeProps: o = Gd,
    componentName: r = "MuiStack"
  } = e, i = () => ue({
    root: ["root"]
  }, (c) => ce(r, c), {}), s = t(Kd), a = /* @__PURE__ */ E.forwardRef(function(c, u) {
    const d = o(c), m = Xn(d), {
      component: f = "div",
      direction: T = "column",
      spacing: g = 0,
      divider: p,
      children: R,
      className: O,
      useFlexGap: S = !1
    } = m, y = q(m, Wd), C = {
      direction: T,
      spacing: g,
      useFlexGap: S
    }, v = i();
    return /* @__PURE__ */ x(s, b({
      as: f,
      ownerState: C,
      ref: u,
      className: J(v.root, O)
    }, y, {
      children: p ? Hd(R, p) : R
    }));
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: n.node,
    direction: n.oneOfType([n.oneOf(["column-reverse", "column", "row-reverse", "row"]), n.arrayOf(n.oneOf(["column-reverse", "column", "row-reverse", "row"])), n.object]),
    divider: n.node,
    spacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
  }), a;
}
function Jd(e, t) {
  return b({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var we = {}, br = { exports: {} }, Xi;
function ii() {
  return Xi || (Xi = 1, function(e) {
    function t(o) {
      return o && o.__esModule ? o : {
        default: o
      };
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(br)), br.exports;
}
const Zd = /* @__PURE__ */ Ot(ec), Qd = /* @__PURE__ */ Ot(id);
var Ji;
function ep() {
  if (Ji) return we;
  Ji = 1;
  var e = ii();
  Object.defineProperty(we, "__esModule", {
    value: !0
  }), we.alpha = g, we.blend = N, we.colorChannel = void 0, we.darken = R, we.decomposeColor = a, we.emphasize = C, we.getContrastRatio = T, we.getLuminance = f, we.hexToRgb = i, we.hslToRgb = m, we.lighten = S, we.private_safeAlpha = p, we.private_safeColorChannel = void 0, we.private_safeDarken = O, we.private_safeEmphasize = v, we.private_safeLighten = y, we.recomposeColor = u, we.rgbToHex = d;
  var t = e(Zd), o = e(Qd);
  function r(h, P = 0, $ = 1) {
    return process.env.NODE_ENV !== "production" && (h < P || h > $) && console.error(`MUI: The value provided ${h} is out of range [${P}, ${$}].`), (0, o.default)(h, P, $);
  }
  function i(h) {
    h = h.slice(1);
    const P = new RegExp(`.{1,${h.length >= 6 ? 2 : 1}}`, "g");
    let $ = h.match(P);
    return $ && $[0].length === 1 && ($ = $.map((w) => w + w)), $ ? `rgb${$.length === 4 ? "a" : ""}(${$.map((w, I) => I < 3 ? parseInt(w, 16) : Math.round(parseInt(w, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function s(h) {
    const P = h.toString(16);
    return P.length === 1 ? `0${P}` : P;
  }
  function a(h) {
    if (h.type)
      return h;
    if (h.charAt(0) === "#")
      return a(i(h));
    const P = h.indexOf("("), $ = h.substring(0, P);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf($) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${h}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, t.default)(9, h));
    let w = h.substring(P + 1, h.length - 1), I;
    if ($ === "color") {
      if (w = w.split(" "), I = w.shift(), w.length === 4 && w[3].charAt(0) === "/" && (w[3] = w[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(I) === -1)
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${I}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, t.default)(10, I));
    } else
      w = w.split(",");
    return w = w.map((F) => parseFloat(F)), {
      type: $,
      values: w,
      colorSpace: I
    };
  }
  const l = (h) => {
    const P = a(h);
    return P.values.slice(0, 3).map(($, w) => P.type.indexOf("hsl") !== -1 && w !== 0 ? `${$}%` : $).join(" ");
  };
  we.colorChannel = l;
  const c = (h, P) => {
    try {
      return l(h);
    } catch {
      return P && process.env.NODE_ENV !== "production" && console.warn(P), h;
    }
  };
  we.private_safeColorChannel = c;
  function u(h) {
    const {
      type: P,
      colorSpace: $
    } = h;
    let {
      values: w
    } = h;
    return P.indexOf("rgb") !== -1 ? w = w.map((I, F) => F < 3 ? parseInt(I, 10) : I) : P.indexOf("hsl") !== -1 && (w[1] = `${w[1]}%`, w[2] = `${w[2]}%`), P.indexOf("color") !== -1 ? w = `${$} ${w.join(" ")}` : w = `${w.join(", ")}`, `${P}(${w})`;
  }
  function d(h) {
    if (h.indexOf("#") === 0)
      return h;
    const {
      values: P
    } = a(h);
    return `#${P.map(($, w) => s(w === 3 ? Math.round(255 * $) : $)).join("")}`;
  }
  function m(h) {
    h = a(h);
    const {
      values: P
    } = h, $ = P[0], w = P[1] / 100, I = P[2] / 100, F = w * Math.min(I, 1 - I), A = (L, z = (L + $ / 30) % 12) => I - F * Math.max(Math.min(z - 3, 9 - z, 1), -1);
    let j = "rgb";
    const D = [Math.round(A(0) * 255), Math.round(A(8) * 255), Math.round(A(4) * 255)];
    return h.type === "hsla" && (j += "a", D.push(P[3])), u({
      type: j,
      values: D
    });
  }
  function f(h) {
    h = a(h);
    let P = h.type === "hsl" || h.type === "hsla" ? a(m(h)).values : h.values;
    return P = P.map(($) => (h.type !== "color" && ($ /= 255), $ <= 0.03928 ? $ / 12.92 : (($ + 0.055) / 1.055) ** 2.4)), Number((0.2126 * P[0] + 0.7152 * P[1] + 0.0722 * P[2]).toFixed(3));
  }
  function T(h, P) {
    const $ = f(h), w = f(P);
    return (Math.max($, w) + 0.05) / (Math.min($, w) + 0.05);
  }
  function g(h, P) {
    return h = a(h), P = r(P), (h.type === "rgb" || h.type === "hsl") && (h.type += "a"), h.type === "color" ? h.values[3] = `/${P}` : h.values[3] = P, u(h);
  }
  function p(h, P, $) {
    try {
      return g(h, P);
    } catch {
      return $ && process.env.NODE_ENV !== "production" && console.warn($), h;
    }
  }
  function R(h, P) {
    if (h = a(h), P = r(P), h.type.indexOf("hsl") !== -1)
      h.values[2] *= 1 - P;
    else if (h.type.indexOf("rgb") !== -1 || h.type.indexOf("color") !== -1)
      for (let $ = 0; $ < 3; $ += 1)
        h.values[$] *= 1 - P;
    return u(h);
  }
  function O(h, P, $) {
    try {
      return R(h, P);
    } catch {
      return $ && process.env.NODE_ENV !== "production" && console.warn($), h;
    }
  }
  function S(h, P) {
    if (h = a(h), P = r(P), h.type.indexOf("hsl") !== -1)
      h.values[2] += (100 - h.values[2]) * P;
    else if (h.type.indexOf("rgb") !== -1)
      for (let $ = 0; $ < 3; $ += 1)
        h.values[$] += (255 - h.values[$]) * P;
    else if (h.type.indexOf("color") !== -1)
      for (let $ = 0; $ < 3; $ += 1)
        h.values[$] += (1 - h.values[$]) * P;
    return u(h);
  }
  function y(h, P, $) {
    try {
      return S(h, P);
    } catch {
      return $ && process.env.NODE_ENV !== "production" && console.warn($), h;
    }
  }
  function C(h, P = 0.15) {
    return f(h) > 0.5 ? R(h, P) : S(h, P);
  }
  function v(h, P, $) {
    try {
      return C(h, P);
    } catch {
      return $ && process.env.NODE_ENV !== "production" && console.warn($), h;
    }
  }
  function N(h, P, $, w = 1) {
    const I = (D, L) => Math.round((D ** (1 / w) * (1 - $) + L ** (1 / w) * $) ** w), F = a(h), A = a(P), j = [I(F.values[0], A.values[0]), I(F.values[1], A.values[1]), I(F.values[2], A.values[2])];
    return u({
      type: "rgb",
      values: j
    });
  }
  return we;
}
var me = /* @__PURE__ */ ep();
const qn = {
  black: "#000",
  white: "#fff"
}, tp = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Kt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Xt = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Sn = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Jt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Zt = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Qt = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, np = ["mode", "contrastThreshold", "tonalOffset"], Zi = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: qn.white,
    default: qn.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, gr = {
  text: {
    primary: qn.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: qn.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Qi(e, t, o, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = me.lighten(e.main, i) : t === "dark" && (e.dark = me.darken(e.main, s)));
}
function op(e = "light") {
  return e === "dark" ? {
    main: Jt[200],
    light: Jt[50],
    dark: Jt[400]
  } : {
    main: Jt[700],
    light: Jt[400],
    dark: Jt[800]
  };
}
function rp(e = "light") {
  return e === "dark" ? {
    main: Kt[200],
    light: Kt[50],
    dark: Kt[400]
  } : {
    main: Kt[500],
    light: Kt[300],
    dark: Kt[700]
  };
}
function ip(e = "light") {
  return e === "dark" ? {
    main: Xt[500],
    light: Xt[300],
    dark: Xt[700]
  } : {
    main: Xt[700],
    light: Xt[400],
    dark: Xt[800]
  };
}
function sp(e = "light") {
  return e === "dark" ? {
    main: Zt[400],
    light: Zt[300],
    dark: Zt[700]
  } : {
    main: Zt[700],
    light: Zt[500],
    dark: Zt[900]
  };
}
function ap(e = "light") {
  return e === "dark" ? {
    main: Qt[400],
    light: Qt[300],
    dark: Qt[700]
  } : {
    main: Qt[800],
    light: Qt[500],
    dark: Qt[900]
  };
}
function lp(e = "light") {
  return e === "dark" ? {
    main: Sn[400],
    light: Sn[300],
    dark: Sn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Sn[500],
    dark: Sn[900]
  };
}
function cp(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2
  } = e, i = q(e, np), s = e.primary || op(t), a = e.secondary || rp(t), l = e.error || ip(t), c = e.info || sp(t), u = e.success || ap(t), d = e.warning || lp(t);
  function m(p) {
    const R = me.getContrastRatio(p, gr.text.primary) >= o ? gr.text.primary : Zi.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = me.getContrastRatio(p, R);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${R} on ${p}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return R;
  }
  const f = ({
    color: p,
    name: R,
    mainShade: O = 500,
    lightShade: S = 300,
    darkShade: y = 700
  }) => {
    if (p = b({}, p), !p.main && p[O] && (p.main = p[O]), !p.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${R ? ` (${R})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : Ct(11, R ? ` (${R})` : "", O));
    if (typeof p.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${R ? ` (${R})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(p.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ct(12, R ? ` (${R})` : "", JSON.stringify(p.main)));
    return Qi(p, "light", S, r), Qi(p, "dark", y, r), p.contrastText || (p.contrastText = m(p.main)), p;
  }, T = {
    dark: gr,
    light: Zi
  };
  return process.env.NODE_ENV !== "production" && (T[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), qe(b({
    // A collection of common colors.
    common: b({}, qn),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: f({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: f({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: f({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: f({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: tp,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, T[t]), i);
}
const up = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function dp(e) {
  return Math.round(e * 1e5) / 1e5;
}
const es = {
  textTransform: "uppercase"
}, ts = '"Roboto", "Helvetica", "Arial", sans-serif';
function pp(e, t) {
  const o = typeof t == "function" ? t(e) : t, {
    fontFamily: r = ts,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: m
  } = o, f = q(o, up);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const T = i / 14, g = m || ((O) => `${O / u * T}rem`), p = (O, S, y, C, v) => b({
    fontFamily: r,
    fontWeight: O,
    fontSize: g(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: y
  }, r === ts ? {
    letterSpacing: `${dp(C / S)}em`
  } : {}, v, d), R = {
    h1: p(s, 96, 1.167, -1.5),
    h2: p(s, 60, 1.2, -0.5),
    h3: p(a, 48, 1.167, 0),
    h4: p(a, 34, 1.235, 0.25),
    h5: p(a, 24, 1.334, 0),
    h6: p(l, 20, 1.6, 0.15),
    subtitle1: p(a, 16, 1.75, 0.15),
    subtitle2: p(l, 14, 1.57, 0.1),
    body1: p(a, 16, 1.5, 0.15),
    body2: p(a, 14, 1.43, 0.15),
    button: p(l, 14, 1.75, 0.4, es),
    caption: p(a, 12, 1.66, 0.4),
    overline: p(a, 12, 2.66, 1, es),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return qe(b({
    htmlFontSize: u,
    pxToRem: g,
    fontFamily: r,
    fontSize: i,
    fontWeightLight: s,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: c
  }, R), f, {
    clone: !1
    // No need to clone deep
  });
}
const fp = 0.2, mp = 0.14, hp = 0.12;
function $e(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${fp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${mp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${hp})`].join(",");
}
const bp = ["none", $e(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), $e(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), $e(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), $e(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), $e(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), $e(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), $e(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), $e(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), $e(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), $e(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), $e(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), $e(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), $e(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), $e(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), $e(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), $e(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), $e(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), $e(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), $e(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), $e(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), $e(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), $e(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), $e(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), $e(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], gp = ["duration", "easing", "delay"], yp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ha = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function ns(e) {
  return `${Math.round(e)}ms`;
}
function vp(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function xp(e) {
  const t = b({}, yp, e.easing), o = b({}, Ha, e.duration);
  return b({
    getAutoHeightDuration: vp,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = o.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = s, u = q(s, gp);
      if (process.env.NODE_ENV !== "production") {
        const d = (f) => typeof f == "string", m = (f) => !isNaN(parseFloat(f));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : ns(a)} ${l} ${typeof c == "string" ? c : ns(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: o
  });
}
const Ep = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Tp = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function si(e = {}, ...t) {
  const {
    mixins: o = {},
    palette: r = {},
    transitions: i = {},
    typography: s = {}
  } = e, a = q(e, Tp);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ct(18));
  const l = cp(r), c = Cn(e);
  let u = qe(c, {
    mixins: Jd(c.breakpoints, o),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: bp.slice(),
    typography: pp(l, s),
    transitions: xp(i),
    zIndex: b({}, Ep)
  });
  if (u = qe(u, a), u = t.reduce((d, m) => qe(d, m), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (f, T) => {
      let g;
      for (g in f) {
        const p = f[g];
        if (d.indexOf(g) !== -1 && Object.keys(p).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const R = ce("", g);
            console.error([`MUI: The \`${T}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(f, null, 2), "", `Instead, you need to use the '&.${R}' syntax:`, JSON.stringify({
              root: {
                [`&.${R}`]: p
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          f[g] = {};
        }
      }
    };
    Object.keys(u.components).forEach((f) => {
      const T = u.components[f].styleOverrides;
      T && f.indexOf("Mui") === 0 && m(T, f);
    });
  }
  return u.unstable_sxConfig = b({}, Kn, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(m) {
    return Tn({
      sx: m,
      theme: this
    });
  }, u;
}
function Cp(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function Op(e) {
  return parseFloat(e);
}
const ai = si();
function lt() {
  const e = Wo(ai);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e[pn] || e;
}
var At = {}, yr = { exports: {} }, os;
function Rp() {
  return os || (os = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(o) {
        for (var r = 1; r < arguments.length; r++) {
          var i = arguments[r];
          for (var s in i) ({}).hasOwnProperty.call(i, s) && (o[s] = i[s]);
        }
        return o;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(yr)), yr.exports;
}
var vr = { exports: {} }, rs;
function Sp() {
  return rs || (rs = 1, function(e) {
    function t(o, r) {
      if (o == null) return {};
      var i = {};
      for (var s in o) if ({}.hasOwnProperty.call(o, s)) {
        if (r.indexOf(s) !== -1) continue;
        i[s] = o[s];
      }
      return i;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(vr)), vr.exports;
}
const $p = /* @__PURE__ */ Ot(jc), Pp = /* @__PURE__ */ Ot(Bc), wp = /* @__PURE__ */ Ot(Gc), Np = /* @__PURE__ */ Ot(Yu), _p = /* @__PURE__ */ Ot(Mu), Ip = /* @__PURE__ */ Ot(ju);
var is;
function kp() {
  if (is) return At;
  is = 1;
  var e = ii();
  Object.defineProperty(At, "__esModule", {
    value: !0
  }), At.default = N, At.shouldForwardProp = R, At.systemDefaultTheme = void 0;
  var t = e(Rp()), o = e(Sp()), r = T($p), i = Pp, s = e(wp), a = e(Np), l = e(_p), c = e(Ip);
  const u = ["ownerState"], d = ["variants"], m = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
  function f(h) {
    if (typeof WeakMap != "function") return null;
    var P = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakMap();
    return (f = function(w) {
      return w ? $ : P;
    })(h);
  }
  function T(h, P) {
    if (h && h.__esModule) return h;
    if (h === null || typeof h != "object" && typeof h != "function") return { default: h };
    var $ = f(P);
    if ($ && $.has(h)) return $.get(h);
    var w = { __proto__: null }, I = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var F in h) if (F !== "default" && Object.prototype.hasOwnProperty.call(h, F)) {
      var A = I ? Object.getOwnPropertyDescriptor(h, F) : null;
      A && (A.get || A.set) ? Object.defineProperty(w, F, A) : w[F] = h[F];
    }
    return w.default = h, $ && $.set(h, w), w;
  }
  function g(h) {
    return Object.keys(h).length === 0;
  }
  function p(h) {
    return typeof h == "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    h.charCodeAt(0) > 96;
  }
  function R(h) {
    return h !== "ownerState" && h !== "theme" && h !== "sx" && h !== "as";
  }
  const O = At.systemDefaultTheme = (0, l.default)(), S = (h) => h && h.charAt(0).toLowerCase() + h.slice(1);
  function y({
    defaultTheme: h,
    theme: P,
    themeId: $
  }) {
    return g(P) ? h : P[$] || P;
  }
  function C(h) {
    return h ? (P, $) => $[h] : null;
  }
  function v(h, P) {
    let {
      ownerState: $
    } = P, w = (0, o.default)(P, u);
    const I = typeof h == "function" ? h((0, t.default)({
      ownerState: $
    }, w)) : h;
    if (Array.isArray(I))
      return I.flatMap((F) => v(F, (0, t.default)({
        ownerState: $
      }, w)));
    if (I && typeof I == "object" && Array.isArray(I.variants)) {
      const {
        variants: F = []
      } = I;
      let j = (0, o.default)(I, d);
      return F.forEach((D) => {
        let L = !0;
        typeof D.props == "function" ? L = D.props((0, t.default)({
          ownerState: $
        }, w, $)) : Object.keys(D.props).forEach((z) => {
          ($ == null ? void 0 : $[z]) !== D.props[z] && w[z] !== D.props[z] && (L = !1);
        }), L && (Array.isArray(j) || (j = [j]), j.push(typeof D.style == "function" ? D.style((0, t.default)({
          ownerState: $
        }, w, $)) : D.style));
      }), j;
    }
    return I;
  }
  function N(h = {}) {
    const {
      themeId: P,
      defaultTheme: $ = O,
      rootShouldForwardProp: w = R,
      slotShouldForwardProp: I = R
    } = h, F = (A) => (0, c.default)((0, t.default)({}, A, {
      theme: y((0, t.default)({}, A, {
        defaultTheme: $,
        themeId: P
      }))
    }));
    return F.__mui_systemSx = !0, (A, j = {}) => {
      (0, r.internal_processStyles)(A, (G) => G.filter((K) => !(K != null && K.__mui_systemSx)));
      const {
        name: D,
        slot: L,
        skipVariantsResolver: z,
        skipSx: M,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver: H = C(S(L))
      } = j, k = (0, o.default)(j, m), V = z !== void 0 ? z : (
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        L && L !== "Root" && L !== "root" || !1
      ), ee = M || !1;
      let Z;
      process.env.NODE_ENV !== "production" && D && (Z = `${D}-${S(L || "Root")}`);
      let U = R;
      L === "Root" || L === "root" ? U = w : L ? U = I : p(A) && (U = void 0);
      const Q = (0, r.default)(A, (0, t.default)({
        shouldForwardProp: U,
        label: Z
      }, k)), B = (G) => typeof G == "function" && G.__emotion_real !== G || (0, i.isPlainObject)(G) ? (K) => v(G, (0, t.default)({}, K, {
        theme: y({
          theme: K.theme,
          defaultTheme: $,
          themeId: P
        })
      })) : G, Y = (G, ...K) => {
        let ne = B(G);
        const te = K ? K.map(B) : [];
        D && H && te.push((oe) => {
          const de = y((0, t.default)({}, oe, {
            defaultTheme: $,
            themeId: P
          }));
          if (!de.components || !de.components[D] || !de.components[D].styleOverrides)
            return null;
          const De = de.components[D].styleOverrides, Fe = {};
          return Object.entries(De).forEach(([Ge, Xe]) => {
            Fe[Ge] = v(Xe, (0, t.default)({}, oe, {
              theme: de
            }));
          }), H(oe, Fe);
        }), D && !V && te.push((oe) => {
          var de;
          const De = y((0, t.default)({}, oe, {
            defaultTheme: $,
            themeId: P
          })), Fe = De == null || (de = De.components) == null || (de = de[D]) == null ? void 0 : de.variants;
          return v({
            variants: Fe
          }, (0, t.default)({}, oe, {
            theme: De
          }));
        }), ee || te.push(F);
        const _ = te.length - K.length;
        if (Array.isArray(G) && _ > 0) {
          const oe = new Array(_).fill("");
          ne = [...G, ...oe], ne.raw = [...G.raw, ...oe];
        }
        const re = Q(ne, ...te);
        if (process.env.NODE_ENV !== "production") {
          let oe;
          D && (oe = `${D}${(0, s.default)(L || "")}`), oe === void 0 && (oe = `Styled(${(0, a.default)(A)})`), re.displayName = oe;
        }
        return A.muiName && (re.muiName = A.muiName), re;
      };
      return Q.withConfig && (Y.withConfig = Q.withConfig), Y;
    };
  }
  return At;
}
var Mp = /* @__PURE__ */ kp();
const Ap = /* @__PURE__ */ Ur(Mp);
function Ya(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ue = (e) => Ya(e) && e !== "classes", W = Ap({
  themeId: pn,
  defaultTheme: ai,
  rootShouldForwardProp: Ue
}), Dp = ["theme"];
function Ka(e) {
  let {
    theme: t
  } = e, o = q(e, Dp);
  const r = t[pn];
  let i = r || t;
  return typeof t != "function" && (r && !r.vars ? i = b({}, r, {
    vars: null
  }) : t && !t.vars && (i = b({}, t, {
    vars: null
  }))), /* @__PURE__ */ x(Oo, b({}, o, {
    themeId: r ? pn : void 0,
    theme: i
  }));
}
process.env.NODE_ENV !== "production" && (Ka.propTypes = {
  /**
   * Your component tree.
   */
  children: n.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: n.oneOfType([n.object, n.func]).isRequired
});
const ss = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, Fp = {
  fontFamily: "Poppins",
  body1: {
    fontSize: 16,
    lineHeight: 1.4
  },
  button: {
    fontSize: 16,
    lineHeight: "22.4px",
    textTransform: "none"
  },
  caption: {
    fontSize: 12,
    lineHeight: 1.4
  },
  h1: {
    fontSize: 60,
    fontWeight: 400,
    lineHeight: 1
  },
  h2: {
    fontSize: 40,
    fontWeight: 400,
    lineHeight: 1.2
  },
  h3: {
    fontSize: 32,
    fontWeight: 400,
    lineHeight: 1.2
  },
  h4: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 1.2
  },
  h5: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 1.2
  }
}, un = si({
  palette: ht,
  typography: Fp,
  breakpoints: {
    values: {
      lg: 1024,
      md: 768,
      sm: 375,
      xl: 1280,
      xs: 0
    }
  },
  shadows: [
    "none",
    "0px 36px 72px 0px rgba(22, 25, 79, 0.1)",
    ...Array(23).fill("none")
  ],
  shape: {
    borderRadius: 8
  }
});
un.components = Ql(un);
un.typography.h1 = {
  ...un.typography.h1,
  [un.breakpoints.down("xl")]: {
    fontSize: 40
  }
};
function Hv({ children: e }) {
  return /* @__PURE__ */ x(Ka, { theme: un, children: e });
}
const Yv = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
}, xr = "min-w-full md:min-w-[386px] lg:min-w-[493px]", Er = "min-h-[327px] md:min-h-[384px] lg:min-h-[420px]", as = "flex items-center justify-center", Lp = "bg-gray-100 text-gray-400", jp = "bg-red-100 text-red-500", Bp = "No 3D model URL provided.", zp = "Failed to load 3D model.", Kv = ({ src: e }) => {
  const [t, o] = Ne(!1);
  return vt(() => {
    try {
      new URL(e);
    } catch {
      console.error("Invalid URL:", e), o(!0);
    }
  }, [e]), e ? /* @__PURE__ */ x("div", { children: t ? /* @__PURE__ */ x(
    "div",
    {
      className: `${xr} ${Er} ${as} ${jp}`,
      children: zp
    }
  ) : /* @__PURE__ */ x(
    "iframe",
    {
      allow: "autoplay; fullscreen; xr-spatial-tracking",
      className: `${xr} ${Er}`,
      "execution-while-not-rendered": "true",
      "execution-while-out-of-viewport": "true",
      height: "100%",
      loading: "lazy",
      onError: () => o(!0),
      src: e,
      "web-share": "true",
      width: "100%",
      "xr-spatial-tracking": "true"
    }
  ) }) : /* @__PURE__ */ x(
    "div",
    {
      className: `${xr} ${Er} ${as} ${Lp}`,
      children: Bp
    }
  );
};
process.env.NODE_ENV !== "production" && (n.node, n.object.isRequired);
function pe(e) {
  return Dd(e);
}
function Vp(e) {
  return ce("MuiSvgIcon", e);
}
ae("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Wp = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Up = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${X(t)}`, `fontSize${X(o)}`]
  };
  return ue(i, Vp, r);
}, qp = W("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "inherit" && t[`color${X(o.color)}`], t[`fontSize${X(o.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r, i, s, a, l, c, u, d, m, f, T, g;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (o = e.transitions) == null || (r = o.create) == null ? void 0 : r.call(o, "fill", {
      duration: (i = e.transitions) == null || (i = i.duration) == null ? void 0 : i.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((s = e.typography) == null || (a = s.pxToRem) == null ? void 0 : a.call(s, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (m = (f = (e.vars || e).palette) == null || (f = f[t.color]) == null ? void 0 : f.main) != null ? m : {
      action: (T = (e.vars || e).palette) == null || (T = T.action) == null ? void 0 : T.active,
      disabled: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
      inherit: void 0
    }[t.color]
  };
}), Ro = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: m,
    viewBox: f = "0 0 24 24"
  } = r, T = q(r, Wp), g = /* @__PURE__ */ E.isValidElement(i) && i.type === "svg", p = b({}, r, {
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: f,
    hasSvgAsChild: g
  }), R = {};
  d || (R.viewBox = f);
  const O = Up(p);
  return /* @__PURE__ */ se(qp, b({
    as: l,
    className: J(O.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: o
  }, R, T, g && i.props, {
    ownerState: p,
    children: [g ? i.props.children : i, m ? /* @__PURE__ */ x("title", {
      children: m
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Ro.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: n.oneOfType([n.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: n.oneOfType([n.oneOf(["inherit", "large", "medium", "small"]), n.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: n.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: n.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: n.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: n.string
});
Ro.muiName = "SvgIcon";
function ze(e, t) {
  function o(r, i) {
    return /* @__PURE__ */ x(Ro, b({
      "data-testid": `${t}Icon`,
      ref: i
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (o.displayName = `${t}Icon`), o.muiName = Ro.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(o));
}
const Gp = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), ti.configure(e);
  }
}, Hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: X,
  createChainedFunction: kr,
  createSvgIcon: ze,
  debounce: Uo,
  deprecatedPropType: md,
  isMuiElement: cn,
  ownerDocument: Be,
  ownerWindow: xt,
  requirePropFactory: Ma,
  setRef: Eo,
  unstable_ClassNameGenerator: Gp,
  unstable_useEnhancedEffect: it,
  unstable_useId: ni,
  unsupportedProp: bd,
  useControlled: bn,
  useEventCallback: ft,
  useForkRef: ke,
  useIsFocusVisible: Aa
}, Symbol.toStringTag, { value: "Module" }));
function Dr(e, t) {
  return Dr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, Dr(e, t);
}
function Xa(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Dr(e, t);
}
const ls = {
  disabled: !1
};
var Yp = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
  enter: n.number,
  exit: n.number,
  appear: n.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && n.oneOfType([n.string, n.shape({
  enter: n.string,
  exit: n.string,
  active: n.string
}), n.shape({
  enter: n.string,
  enterDone: n.string,
  enterActive: n.string,
  exit: n.string,
  exitDone: n.string,
  exitActive: n.string
})]);
const So = pt.createContext(null);
var Kp = function(t) {
  return t.scrollTop;
}, Fn = "unmounted", Ft = "exited", Lt = "entering", tn = "entered", Fr = "exiting", ct = /* @__PURE__ */ function(e) {
  Xa(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, l = a && !a.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = Ft, s.appearStatus = Lt) : c = tn : r.unmountOnExit || r.mountOnEnter ? c = Fn : c = Ft, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Fn ? {
      status: Ft
    } : null;
  };
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Lt && a !== tn && (s = Lt) : (a === Lt || a === tn) && (s = Fr);
    }
    this.updateStatus(!1, s);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var i = this.props.timeout, s, a, l;
    return s = a = l = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, o.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === Lt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Qn.findDOMNode(this);
          a && Kp(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Ft && this.setState({
      status: Fn
    });
  }, o.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [Qn.findDOMNode(this), l], u = c[0], d = c[1], m = this.getTimeouts(), f = l ? m.appear : m.enter;
    if (!i && !a || ls.disabled) {
      this.safeSetState({
        status: tn
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Lt
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(f, function() {
        s.safeSetState({
          status: tn
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, o.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Qn.findDOMNode(this);
    if (!s || ls.disabled) {
      this.safeSetState({
        status: Ft
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Fr
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Ft
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, o.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Qn.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, o.render = function() {
    var i = this.state.status;
    if (i === Fn)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = q(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ pt.createElement(So.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : pt.cloneElement(pt.Children.only(a), l))
    );
  }, t;
}(pt.Component);
ct.contextType = So;
ct.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: n.shape({
    current: typeof Element > "u" ? n.any : function(e, t, o, r, i, s) {
      var a = e[t];
      return n.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, o, r, i, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: n.oneOfType([n.func.isRequired, n.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: n.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: n.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: n.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: n.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: n.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: n.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var o = Yp;
    t.addEndListener || (o = o.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      i[s - 1] = arguments[s];
    return o.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: n.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: n.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: n.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: n.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: n.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: n.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: n.func
} : {};
function en() {
}
ct.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: en,
  onEntering: en,
  onEntered: en,
  onExit: en,
  onExiting: en,
  onExited: en
};
ct.UNMOUNTED = Fn;
ct.EXITED = Ft;
ct.ENTERING = Lt;
ct.ENTERED = tn;
ct.EXITING = Fr;
function Xp(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function li(e, t) {
  var o = function(s) {
    return t && sn(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Vl.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = o(i);
  }), r;
}
function Jp(e, t) {
  e = e || {}, t = t || {};
  function o(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var s in e)
    s in t ? i.length && (r[s] = i, i = []) : i.push(s);
  var a, l = {};
  for (var c in t) {
    if (r[c])
      for (a = 0; a < r[c].length; a++) {
        var u = r[c][a];
        l[r[c][a]] = o(u);
      }
    l[c] = o(c);
  }
  for (a = 0; a < i.length; a++)
    l[i[a]] = o(i[a]);
  return l;
}
function jt(e, t, o) {
  return o[t] != null ? o[t] : e.props[t];
}
function Zp(e, t) {
  return li(e.children, function(o) {
    return po(o, {
      onExited: t.bind(null, o),
      in: !0,
      appear: jt(o, "appear", e),
      enter: jt(o, "enter", e),
      exit: jt(o, "exit", e)
    });
  });
}
function Qp(e, t, o) {
  var r = li(e.children), i = Jp(t, r);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (sn(a)) {
      var l = s in t, c = s in r, u = t[s], d = sn(u) && !u.props.in;
      c && (!l || d) ? i[s] = po(a, {
        onExited: o.bind(null, a),
        in: !0,
        exit: jt(a, "exit", e),
        enter: jt(a, "enter", e)
      }) : !c && l && !d ? i[s] = po(a, {
        in: !1
      }) : c && l && sn(u) && (i[s] = po(a, {
        onExited: o.bind(null, a),
        in: u.props.in,
        exit: jt(a, "exit", e),
        enter: jt(a, "enter", e)
      }));
    }
  }), i;
}
var ef = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, tf = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ci = /* @__PURE__ */ function(e) {
  Xa(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = s.handleExited.bind(Xp(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
  }
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, o.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? Zp(i, l) : Qp(i, a, l),
      firstRender: !1
    };
  }, o.handleExited = function(i, s) {
    var a = li(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = b({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, o.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = q(i, ["component", "childFactory"]), c = this.state.contextValue, u = ef(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ pt.createElement(So.Provider, {
      value: c
    }, u) : /* @__PURE__ */ pt.createElement(So.Provider, {
      value: c
    }, /* @__PURE__ */ pt.createElement(s, l, u));
  }, t;
}(pt.Component);
ci.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: n.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: n.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: n.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: n.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: n.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: n.func
} : {};
ci.defaultProps = tf;
const ui = (e) => e.scrollTop;
function _t(e, t) {
  var o, r;
  const {
    timeout: i,
    easing: s,
    style: a = {}
  } = e;
  return {
    duration: (o = a.transitionDuration) != null ? o : typeof i == "number" ? i : i[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof s == "object" ? s[t.mode] : s,
    delay: a.transitionDelay
  };
}
function nf(e) {
  return ce("MuiCollapse", e);
}
ae("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const of = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"], rf = (e) => {
  const {
    orientation: t,
    classes: o
  } = e, r = {
    root: ["root", `${t}`],
    entered: ["entered"],
    hidden: ["hidden"],
    wrapper: ["wrapper", `${t}`],
    wrapperInner: ["wrapperInner", `${t}`]
  };
  return ue(r, nf, o);
}, sf = W("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.orientation], o.state === "entered" && t.entered, o.state === "exited" && !o.in && o.collapsedSize === "0px" && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  height: 0,
  overflow: "hidden",
  transition: e.transitions.create("height")
}, t.orientation === "horizontal" && {
  height: "auto",
  width: 0,
  transition: e.transitions.create("width")
}, t.state === "entered" && b({
  height: "auto",
  overflow: "visible"
}, t.orientation === "horizontal" && {
  width: "auto"
}), t.state === "exited" && !t.in && t.collapsedSize === "0px" && {
  visibility: "hidden"
})), af = W("div", {
  name: "MuiCollapse",
  slot: "Wrapper",
  overridesResolver: (e, t) => t.wrapper
})(({
  ownerState: e
}) => b({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%"
}, e.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
})), lf = W("div", {
  name: "MuiCollapse",
  slot: "WrapperInner",
  overridesResolver: (e, t) => t.wrapperInner
})(({
  ownerState: e
}) => b({
  width: "100%"
}, e.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
})), di = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiCollapse"
  }), {
    addEndListener: i,
    children: s,
    className: a,
    collapsedSize: l = "0px",
    component: c,
    easing: u,
    in: d,
    onEnter: m,
    onEntered: f,
    onEntering: T,
    onExit: g,
    onExited: p,
    onExiting: R,
    orientation: O = "vertical",
    style: S,
    timeout: y = Ha.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = ct
  } = r, v = q(r, of), N = b({}, r, {
    orientation: O,
    collapsedSize: l
  }), h = rf(N), P = lt(), $ = Go(), w = E.useRef(null), I = E.useRef(), F = typeof l == "number" ? `${l}px` : l, A = O === "horizontal", j = A ? "width" : "height", D = E.useRef(null), L = ke(o, D), z = (B) => (Y) => {
    if (B) {
      const G = D.current;
      Y === void 0 ? B(G) : B(G, Y);
    }
  }, M = () => w.current ? w.current[A ? "clientWidth" : "clientHeight"] : 0, H = z((B, Y) => {
    w.current && A && (w.current.style.position = "absolute"), B.style[j] = F, m && m(B, Y);
  }), k = z((B, Y) => {
    const G = M();
    w.current && A && (w.current.style.position = "");
    const {
      duration: K,
      easing: ne
    } = _t({
      style: S,
      timeout: y,
      easing: u
    }, {
      mode: "enter"
    });
    if (y === "auto") {
      const te = P.transitions.getAutoHeightDuration(G);
      B.style.transitionDuration = `${te}ms`, I.current = te;
    } else
      B.style.transitionDuration = typeof K == "string" ? K : `${K}ms`;
    B.style[j] = `${G}px`, B.style.transitionTimingFunction = ne, T && T(B, Y);
  }), V = z((B, Y) => {
    B.style[j] = "auto", f && f(B, Y);
  }), ee = z((B) => {
    B.style[j] = `${M()}px`, g && g(B);
  }), Z = z(p), U = z((B) => {
    const Y = M(), {
      duration: G,
      easing: K
    } = _t({
      style: S,
      timeout: y,
      easing: u
    }, {
      mode: "exit"
    });
    if (y === "auto") {
      const ne = P.transitions.getAutoHeightDuration(Y);
      B.style.transitionDuration = `${ne}ms`, I.current = ne;
    } else
      B.style.transitionDuration = typeof G == "string" ? G : `${G}ms`;
    B.style[j] = F, B.style.transitionTimingFunction = K, R && R(B);
  });
  return /* @__PURE__ */ x(C, b({
    in: d,
    onEnter: H,
    onEntered: V,
    onEntering: k,
    onExit: ee,
    onExited: Z,
    onExiting: U,
    addEndListener: (B) => {
      y === "auto" && $.start(I.current || 0, B), i && i(D.current, B);
    },
    nodeRef: D,
    timeout: y === "auto" ? null : y
  }, v, {
    children: (B, Y) => /* @__PURE__ */ x(sf, b({
      as: c,
      className: J(h.root, a, {
        entered: h.entered,
        exited: !d && F === "0px" && h.hidden
      }[B]),
      style: b({
        [A ? "minWidth" : "minHeight"]: F
      }, S),
      ref: L
    }, Y, {
      // `ownerState` is set after `childProps` to override any existing `ownerState` property in `childProps`
      // that might have been forwarded from the Transition component.
      ownerState: b({}, N, {
        state: B
      }),
      children: /* @__PURE__ */ x(af, {
        ownerState: b({}, N, {
          state: B
        }),
        className: h.wrapper,
        ref: w,
        children: /* @__PURE__ */ x(lf, {
          ownerState: b({}, N, {
            state: B
          }),
          className: h.wrapperInner,
          children: s
        })
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (di.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * The content node to be collapsed.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * @default '0px'
   */
  collapsedSize: n.oneOfType([n.number, n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Jn,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * The transition orientation.
   * @default 'vertical'
   */
  orientation: n.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default duration.standard
   */
  timeout: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
di.muiSupportAuto = !0;
function cf(e) {
  return ce("MuiPaper", e);
}
ae("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const uf = ["className", "component", "elevation", "square", "variant"], df = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: i
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return ue(s, cf, i);
}, pf = W("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], !o.square && t.rounded, o.variant === "elevation" && t[`elevation${o.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
  return b({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && b({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${me.alpha("#fff", ss(t.elevation))}, ${me.alpha("#fff", ss(t.elevation))})`
  }, e.vars && {
    backgroundImage: (o = e.vars.overlays) == null ? void 0 : o[t.elevation]
  }));
}), qt = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = q(r, uf), d = b({}, r, {
    component: s,
    elevation: a,
    square: l,
    variant: c
  }), m = df(d);
  return process.env.NODE_ENV !== "production" && lt().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ x(pf, b({
    as: s,
    ownerState: d,
    className: J(m.root, i),
    ref: o
  }, u));
});
process.env.NODE_ENV !== "production" && (qt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Rt(Nt, (e) => {
    const {
      elevation: t,
      variant: o
    } = e;
    return t > 0 && o === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${o}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: n.oneOfType([n.oneOf(["elevation", "outlined"]), n.string])
});
const pi = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (pi.displayName = "AccordionContext");
const ff = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"], mf = ["component", "slots", "slotProps"], hf = ["component"];
function bf(e, t) {
  const {
    className: o,
    elementType: r,
    ownerState: i,
    externalForwardedProps: s,
    getSlotOwnerState: a,
    internalForwardedProps: l
  } = t, c = q(t, ff), {
    component: u,
    slots: d = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    }
  } = s;
  q(s, mf);
  const f = d[e] || r, T = za(m[e], i), g = Ba(b({
    className: o
  }, c, {
    externalForwardedProps: void 0,
    externalSlotProps: T
  })), {
    props: {
      component: p
    },
    internalRef: R
  } = g, O = q(g.props, hf), S = ke(R, T == null ? void 0 : T.ref, t.ref), y = a ? a(O) : {}, C = b({}, i, y), v = p, N = ja(f, b({}, e === "root", !d[e] && l, O, v && {
    as: v
  }, {
    ref: S
  }), C);
  return Object.keys(y).forEach((h) => {
    delete N[h];
  }), [f, N];
}
function gf(e) {
  return ce("MuiAccordion", e);
}
const io = ae("MuiAccordion", ["root", "rounded", "expanded", "disabled", "gutters", "region"]), yf = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "slots", "slotProps", "TransitionComponent", "TransitionProps"], vf = (e) => {
  const {
    classes: t,
    square: o,
    expanded: r,
    disabled: i,
    disableGutters: s
  } = e;
  return ue({
    root: ["root", !o && "rounded", r && "expanded", i && "disabled", !s && "gutters"],
    region: ["region"]
  }, gf, t);
}, xf = W(qt, {
  name: "MuiAccordion",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${io.region}`]: t.region
    }, t.root, !o.square && t.rounded, !o.disableGutters && t.gutters];
  }
})(({
  theme: e
}) => {
  const t = {
    duration: e.transitions.duration.shortest
  };
  return {
    position: "relative",
    transition: e.transitions.create(["margin"], t),
    overflowAnchor: "none",
    // Keep the same scrolling position
    "&::before": {
      position: "absolute",
      left: 0,
      top: -1,
      right: 0,
      height: 1,
      content: '""',
      opacity: 1,
      backgroundColor: (e.vars || e).palette.divider,
      transition: e.transitions.create(["opacity", "background-color"], t)
    },
    "&:first-of-type": {
      "&::before": {
        display: "none"
      }
    },
    [`&.${io.expanded}`]: {
      "&::before": {
        opacity: 0
      },
      "&:first-of-type": {
        marginTop: 0
      },
      "&:last-of-type": {
        marginBottom: 0
      },
      "& + &": {
        "&::before": {
          display: "none"
        }
      }
    },
    [`&.${io.disabled}`]: {
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    }
  };
}, ({
  theme: e
}) => ({
  variants: [{
    props: (t) => !t.square,
    style: {
      borderRadius: 0,
      "&:first-of-type": {
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius
      },
      "&:last-of-type": {
        borderBottomLeftRadius: (e.vars || e).shape.borderRadius,
        borderBottomRightRadius: (e.vars || e).shape.borderRadius,
        // Fix a rendering issue on Edge
        "@supports (-ms-ime-align: auto)": {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    }
  }, {
    props: (t) => !t.disableGutters,
    style: {
      [`&.${io.expanded}`]: {
        margin: "16px 0"
      }
    }
  }]
})), Ef = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiAccordion"
  }), {
    children: i,
    className: s,
    defaultExpanded: a = !1,
    disabled: l = !1,
    disableGutters: c = !1,
    expanded: u,
    onChange: d,
    square: m = !1,
    slots: f = {},
    slotProps: T = {},
    TransitionComponent: g,
    TransitionProps: p
  } = r, R = q(r, yf), [O, S] = bn({
    controlled: u,
    default: a,
    name: "Accordion",
    state: "expanded"
  }), y = E.useCallback((A) => {
    S(!O), d && d(A, !O);
  }, [O, d, S]), [C, ...v] = E.Children.toArray(i), N = E.useMemo(() => ({
    expanded: O,
    disabled: l,
    disableGutters: c,
    toggle: y
  }), [O, l, c, y]), h = b({}, r, {
    square: m,
    disabled: l,
    disableGutters: c,
    expanded: O
  }), P = vf(h), $ = b({
    transition: g
  }, f), w = b({
    transition: p
  }, T), [I, F] = bf("transition", {
    elementType: di,
    externalForwardedProps: {
      slots: $,
      slotProps: w
    },
    ownerState: h
  });
  return /* @__PURE__ */ se(xf, b({
    className: J(P.root, s),
    ref: o,
    ownerState: h,
    square: m
  }, R, {
    children: [/* @__PURE__ */ x(pi.Provider, {
      value: N,
      children: C
    }), /* @__PURE__ */ x(I, b({
      in: O,
      timeout: "auto"
    }, F, {
      children: /* @__PURE__ */ x("div", {
        "aria-labelledby": C.props.id,
        id: C.props["aria-controls"],
        role: "region",
        className: P.region,
        children: v
      })
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Ef.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: Rt(n.node.isRequired, (e) => {
    const t = E.Children.toArray(e.children)[0];
    return mn.isFragment(t) ? new Error("MUI: The Accordion doesn't accept a Fragment as a child. Consider providing an array instead.") : /* @__PURE__ */ E.isValidElement(t) ? null : new Error("MUI: Expected the first child of Accordion to be a valid element.");
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, expands the accordion by default.
   * @default false
   */
  defaultExpanded: n.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, it removes the margin between two expanded accordion items and the increase of height.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * If `true`, expands the accordion, otherwise collapse it.
   * Setting this prop enables control over the accordion.
   */
  expanded: n.bool,
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {boolean} expanded The `expanded` state of the accordion.
   */
  onChange: n.func,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    transition: n.elementType
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   */
  TransitionComponent: n.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   */
  TransitionProps: n.object
});
function Ja(e) {
  const {
    className: t,
    classes: o,
    pulsate: r = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, m] = E.useState(!1), f = J(t, o.ripple, o.rippleVisible, r && o.ripplePulsate), T = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, g = J(o.child, d && o.childLeaving, r && o.childPulsate);
  return !l && !d && m(!0), E.useEffect(() => {
    if (!l && c != null) {
      const p = setTimeout(c, u);
      return () => {
        clearTimeout(p);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ x("span", {
    className: f,
    style: T,
    children: /* @__PURE__ */ x("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (Ja.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object.isRequired,
  className: n.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: n.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: n.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: n.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: n.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: n.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: n.number,
  /**
   * exit delay
   */
  timeout: n.number.isRequired
});
const ot = ae("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Tf = ["center", "classes", "className"];
let Yo = (e) => e, cs, us, ds, ps;
const Lr = 550, Cf = 80, Of = xn(cs || (cs = Yo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Rf = xn(us || (us = Yo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Sf = xn(ds || (ds = Yo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), $f = W("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Pf = W(Ja, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(ps || (ps = Yo`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), ot.rippleVisible, Of, Lr, ({
  theme: e
}) => e.transitions.easing.easeInOut, ot.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, ot.child, ot.childLeaving, Rf, Lr, ({
  theme: e
}) => e.transitions.easing.easeInOut, ot.childPulsate, Sf, ({
  theme: e
}) => e.transitions.easing.easeInOut), Za = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a
  } = r, l = q(r, Tf), [c, u] = E.useState([]), d = E.useRef(0), m = E.useRef(null);
  E.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [c]);
  const f = E.useRef(!1), T = Go(), g = E.useRef(null), p = E.useRef(null), R = E.useCallback((C) => {
    const {
      pulsate: v,
      rippleX: N,
      rippleY: h,
      rippleSize: P,
      cb: $
    } = C;
    u((w) => [...w, /* @__PURE__ */ x(Pf, {
      classes: {
        ripple: J(s.ripple, ot.ripple),
        rippleVisible: J(s.rippleVisible, ot.rippleVisible),
        ripplePulsate: J(s.ripplePulsate, ot.ripplePulsate),
        child: J(s.child, ot.child),
        childLeaving: J(s.childLeaving, ot.childLeaving),
        childPulsate: J(s.childPulsate, ot.childPulsate)
      },
      timeout: Lr,
      pulsate: v,
      rippleX: N,
      rippleY: h,
      rippleSize: P
    }, d.current)]), d.current += 1, m.current = $;
  }, [s]), O = E.useCallback((C = {}, v = {}, N = () => {
  }) => {
    const {
      pulsate: h = !1,
      center: P = i || v.pulsate,
      fakeElement: $ = !1
      // For test purposes
    } = v;
    if ((C == null ? void 0 : C.type) === "mousedown" && f.current) {
      f.current = !1;
      return;
    }
    (C == null ? void 0 : C.type) === "touchstart" && (f.current = !0);
    const w = $ ? null : p.current, I = w ? w.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let F, A, j;
    if (P || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      F = Math.round(I.width / 2), A = Math.round(I.height / 2);
    else {
      const {
        clientX: D,
        clientY: L
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      F = Math.round(D - I.left), A = Math.round(L - I.top);
    }
    if (P)
      j = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3), j % 2 === 0 && (j += 1);
    else {
      const D = Math.max(Math.abs((w ? w.clientWidth : 0) - F), F) * 2 + 2, L = Math.max(Math.abs((w ? w.clientHeight : 0) - A), A) * 2 + 2;
      j = Math.sqrt(D ** 2 + L ** 2);
    }
    C != null && C.touches ? g.current === null && (g.current = () => {
      R({
        pulsate: h,
        rippleX: F,
        rippleY: A,
        rippleSize: j,
        cb: N
      });
    }, T.start(Cf, () => {
      g.current && (g.current(), g.current = null);
    })) : R({
      pulsate: h,
      rippleX: F,
      rippleY: A,
      rippleSize: j,
      cb: N
    });
  }, [i, R, T]), S = E.useCallback(() => {
    O({}, {
      pulsate: !0
    });
  }, [O]), y = E.useCallback((C, v) => {
    if (T.clear(), (C == null ? void 0 : C.type) === "touchend" && g.current) {
      g.current(), g.current = null, T.start(0, () => {
        y(C, v);
      });
      return;
    }
    g.current = null, u((N) => N.length > 0 ? N.slice(1) : N), m.current = v;
  }, [T]);
  return E.useImperativeHandle(o, () => ({
    pulsate: S,
    start: O,
    stop: y
  }), [S, O, y]), /* @__PURE__ */ x($f, b({
    className: J(ot.root, s.root, a),
    ref: p
  }, l, {
    children: /* @__PURE__ */ x(ci, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (Za.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string
});
function wf(e) {
  return ce("MuiButtonBase", e);
}
const Nf = ae("MuiButtonBase", ["root", "disabled", "focusVisible"]), _f = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], If = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: i
  } = e, a = ue({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, wf, i);
  return o && r && (a.root += ` ${r}`), a;
}, kf = W("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Nf.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), St = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: s = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: m = !1,
    focusRipple: f = !1,
    LinkComponent: T = "a",
    onBlur: g,
    onClick: p,
    onContextMenu: R,
    onDragLeave: O,
    onFocus: S,
    onFocusVisible: y,
    onKeyDown: C,
    onKeyUp: v,
    onMouseDown: N,
    onMouseLeave: h,
    onMouseUp: P,
    onTouchEnd: $,
    onTouchMove: w,
    onTouchStart: I,
    tabIndex: F = 0,
    TouchRippleProps: A,
    touchRippleRef: j,
    type: D
  } = r, L = q(r, _f), z = E.useRef(null), M = E.useRef(null), H = ke(M, j), {
    isFocusVisibleRef: k,
    onFocus: V,
    onBlur: ee,
    ref: Z
  } = Aa(), [U, Q] = E.useState(!1);
  u && U && Q(!1), E.useImperativeHandle(i, () => ({
    focusVisible: () => {
      Q(!0), z.current.focus();
    }
  }), []);
  const [B, Y] = E.useState(!1);
  E.useEffect(() => {
    Y(!0);
  }, []);
  const G = B && !d && !u;
  E.useEffect(() => {
    U && f && !d && B && M.current.pulsate();
  }, [d, f, U, B]);
  function K(le, mt, On = m) {
    return ft((Ht) => (mt && mt(Ht), !On && M.current && M.current[le](Ht), !0));
  }
  const ne = K("start", N), te = K("stop", R), _ = K("stop", O), re = K("stop", P), oe = K("stop", (le) => {
    U && le.preventDefault(), h && h(le);
  }), de = K("start", I), De = K("stop", $), Fe = K("stop", w), Ge = K("stop", (le) => {
    ee(le), k.current === !1 && Q(!1), g && g(le);
  }, !1), Xe = ft((le) => {
    z.current || (z.current = le.currentTarget), V(le), k.current === !0 && (Q(!0), y && y(le)), S && S(le);
  }), Qe = () => {
    const le = z.current;
    return c && c !== "button" && !(le.tagName === "A" && le.href);
  }, Pe = E.useRef(!1), et = ft((le) => {
    f && !Pe.current && U && M.current && le.key === " " && (Pe.current = !0, M.current.stop(le, () => {
      M.current.start(le);
    })), le.target === le.currentTarget && Qe() && le.key === " " && le.preventDefault(), C && C(le), le.target === le.currentTarget && Qe() && le.key === "Enter" && !u && (le.preventDefault(), p && p(le));
  }), He = ft((le) => {
    f && le.key === " " && M.current && U && !le.defaultPrevented && (Pe.current = !1, M.current.stop(le, () => {
      M.current.pulsate(le);
    })), v && v(le), p && le.target === le.currentTarget && Qe() && le.key === " " && !le.defaultPrevented && p(le);
  });
  let Se = c;
  Se === "button" && (L.href || L.to) && (Se = T);
  const tt = {};
  Se === "button" ? (tt.type = D === void 0 ? "button" : D, tt.disabled = u) : (!L.href && !L.to && (tt.role = "button"), u && (tt["aria-disabled"] = u));
  const Mt = ke(o, Z, z);
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    G && !M.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [G]);
  const Pt = b({}, r, {
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: m,
    focusRipple: f,
    tabIndex: F,
    focusVisible: U
  }), ye = If(Pt);
  return /* @__PURE__ */ se(kf, b({
    as: Se,
    className: J(ye.root, l),
    ownerState: Pt,
    onBlur: Ge,
    onClick: p,
    onContextMenu: te,
    onFocus: Xe,
    onKeyDown: et,
    onKeyUp: He,
    onMouseDown: ne,
    onMouseLeave: oe,
    onMouseUp: re,
    onDragLeave: _,
    onTouchEnd: De,
    onTouchMove: Fe,
    onTouchStart: de,
    ref: Mt,
    tabIndex: u ? -1 : F,
    type: D
  }, tt, L, {
    children: [a, G ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ x(Za, b({
        ref: H,
        center: s
      }, A))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (St.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: at,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Jn,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: n.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  href: n.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: n.elementType,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onContextMenu: n.func,
  /**
   * @ignore
   */
  onDragLeave: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * @ignore
   */
  onMouseDown: n.func,
  /**
   * @ignore
   */
  onMouseLeave: n.func,
  /**
   * @ignore
   */
  onMouseUp: n.func,
  /**
   * @ignore
   */
  onTouchEnd: n.func,
  /**
   * @ignore
   */
  onTouchMove: n.func,
  /**
   * @ignore
   */
  onTouchStart: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: n.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      pulsate: n.func.isRequired,
      start: n.func.isRequired,
      stop: n.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string])
});
function Mf(e) {
  return ce("MuiAccordionSummary", e);
}
const rn = ae("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]), Af = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"], Df = (e) => {
  const {
    classes: t,
    expanded: o,
    disabled: r,
    disableGutters: i
  } = e;
  return ue({
    root: ["root", o && "expanded", r && "disabled", !i && "gutters"],
    focusVisible: ["focusVisible"],
    content: ["content", o && "expanded", !i && "contentGutters"],
    expandIconWrapper: ["expandIconWrapper", o && "expanded"]
  }, Mf, t);
}, Ff = W(St, {
  name: "MuiAccordionSummary",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => {
  const t = {
    duration: e.transitions.duration.shortest
  };
  return {
    display: "flex",
    minHeight: 48,
    padding: e.spacing(0, 2),
    transition: e.transitions.create(["min-height", "background-color"], t),
    [`&.${rn.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${rn.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity
    },
    [`&:hover:not(.${rn.disabled})`]: {
      cursor: "pointer"
    },
    variants: [{
      props: (o) => !o.disableGutters,
      style: {
        [`&.${rn.expanded}`]: {
          minHeight: 64
        }
      }
    }]
  };
}), Lf = W("div", {
  name: "MuiAccordionSummary",
  slot: "Content",
  overridesResolver: (e, t) => t.content
})(({
  theme: e
}) => ({
  display: "flex",
  flexGrow: 1,
  margin: "12px 0",
  variants: [{
    props: (t) => !t.disableGutters,
    style: {
      transition: e.transitions.create(["margin"], {
        duration: e.transitions.duration.shortest
      }),
      [`&.${rn.expanded}`]: {
        margin: "20px 0"
      }
    }
  }]
})), jf = W("div", {
  name: "MuiAccordionSummary",
  slot: "ExpandIconWrapper",
  overridesResolver: (e, t) => t.expandIconWrapper
})(({
  theme: e
}) => ({
  display: "flex",
  color: (e.vars || e).palette.action.active,
  transform: "rotate(0deg)",
  transition: e.transitions.create("transform", {
    duration: e.transitions.duration.shortest
  }),
  [`&.${rn.expanded}`]: {
    transform: "rotate(180deg)"
  }
})), Bf = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiAccordionSummary"
  }), {
    children: i,
    className: s,
    expandIcon: a,
    focusVisibleClassName: l,
    onClick: c
  } = r, u = q(r, Af), {
    disabled: d = !1,
    disableGutters: m,
    expanded: f,
    toggle: T
  } = E.useContext(pi), g = (O) => {
    T && T(O), c && c(O);
  }, p = b({}, r, {
    expanded: f,
    disabled: d,
    disableGutters: m
  }), R = Df(p);
  return /* @__PURE__ */ se(Ff, b({
    focusRipple: !1,
    disableRipple: !0,
    disabled: d,
    component: "div",
    "aria-expanded": f,
    className: J(R.root, s),
    focusVisibleClassName: J(R.focusVisible, l),
    onClick: g,
    ref: o,
    ownerState: p
  }, u, {
    children: [/* @__PURE__ */ x(Lf, {
      className: R.content,
      ownerState: p,
      children: i
    }), a && /* @__PURE__ */ x(jf, {
      className: R.expandIconWrapper,
      ownerState: p,
      children: a
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Bf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: n.node,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function zf(e) {
  return ce("MuiIconButton", e);
}
const Vf = ae("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Wf = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], Uf = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: i,
    size: s
  } = e, a = {
    root: ["root", o && "disabled", r !== "default" && `color${X(r)}`, i && `edge${X(i)}`, `size${X(s)}`]
  };
  return ue(a, zf, t);
}, qf = W(St, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "default" && t[`color${X(o.color)}`], o.edge && t[`edge${X(o.edge)}`], t[`size${X(o.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : me.alpha(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var o;
  const r = (o = (e.vars || e).palette) == null ? void 0 : o[t.color];
  return b({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && b({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": b({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : me.alpha(r.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${Vf.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Gf = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: s,
    className: a,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium"
  } = r, m = q(r, Wf), f = b({}, r, {
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), T = Uf(f);
  return /* @__PURE__ */ x(qf, b({
    className: J(T.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: o
  }, m, {
    ownerState: f,
    children: s
  }));
});
process.env.NODE_ENV !== "production" && (Gf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Rt(n.node, (e) => E.Children.toArray(e.children).some((o) => /* @__PURE__ */ E.isValidElement(o) && o.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function Hf(e) {
  return ce("MuiTypography", e);
}
ae("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Yf = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Kf = (e) => {
  const {
    align: t,
    gutterBottom: o,
    noWrap: r,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${X(t)}`, o && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return ue(l, Hf, a);
}, Xf = W("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.variant && t[o.variant], o.align !== "inherit" && t[`align${X(o.align)}`], o.noWrap && t.noWrap, o.gutterBottom && t.gutterBottom, o.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), fs = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, Jf = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Zf = (e) => Jf[e] || e, We = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiTypography"
  }), i = Zf(r.color), s = Xn(b({}, r, {
    color: i
  })), {
    align: a = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: m = !1,
    variant: f = "body1",
    variantMapping: T = fs
  } = s, g = q(s, Yf), p = b({}, s, {
    align: a,
    color: i,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: d,
    paragraph: m,
    variant: f,
    variantMapping: T
  }), R = c || (m ? "p" : T[f] || fs[f]) || "span", O = Kf(p);
  return /* @__PURE__ */ x(Xf, b({
    as: R,
    ref: o,
    ownerState: p,
    className: J(O.root, l)
  }, g));
});
process.env.NODE_ENV !== "production" && (We.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: n.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: n.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: n.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: n.oneOfType([n.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), n.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: n.object
});
function Qf(e) {
  return ce("MuiAppBar", e);
}
ae("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const em = ["className", "color", "enableColorOnDark", "position"], tm = (e) => {
  const {
    color: t,
    position: o,
    classes: r
  } = e, i = {
    root: ["root", `color${X(t)}`, `position${X(o)}`]
  };
  return ue(i, Qf, r);
}, so = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, nm = W(qt, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`position${X(o.position)}`], t[`color${X(o.color)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
  return b({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    // Prevent padding issue with the Modal and fixed positioned AppBar.
    flexShrink: 0
  }, t.position === "fixed" && {
    position: "fixed",
    zIndex: (e.vars || e).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0,
    "@media print": {
      // Prevent the app bar to be visible on each printed page.
      position: "absolute"
    }
  }, t.position === "absolute" && {
    position: "absolute",
    zIndex: (e.vars || e).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, t.position === "sticky" && {
    // ⚠️ sticky is not supported by IE11.
    position: "sticky",
    zIndex: (e.vars || e).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, t.position === "static" && {
    position: "static"
  }, t.position === "relative" && {
    position: "relative"
  }, !e.vars && b({}, t.color === "default" && {
    backgroundColor: o,
    color: e.palette.getContrastText(o)
  }, t.color && t.color !== "default" && t.color !== "inherit" && t.color !== "transparent" && {
    backgroundColor: e.palette[t.color].main,
    color: e.palette[t.color].contrastText
  }, t.color === "inherit" && {
    color: "inherit"
  }, e.palette.mode === "dark" && !t.enableColorOnDark && {
    backgroundColor: null,
    color: null
  }, t.color === "transparent" && b({
    backgroundColor: "transparent",
    color: "inherit"
  }, e.palette.mode === "dark" && {
    backgroundImage: "none"
  })), e.vars && b({}, t.color === "default" && {
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette.AppBar.defaultBg : so(e.vars.palette.AppBar.darkBg, e.vars.palette.AppBar.defaultBg),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette.text.primary : so(e.vars.palette.AppBar.darkColor, e.vars.palette.text.primary)
  }, t.color && !t.color.match(/^(default|inherit|transparent)$/) && {
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette[t.color].main : so(e.vars.palette.AppBar.darkBg, e.vars.palette[t.color].main),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette[t.color].contrastText : so(e.vars.palette.AppBar.darkColor, e.vars.palette[t.color].contrastText)
  }, !["inherit", "transparent"].includes(t.color) && {
    backgroundColor: "var(--AppBar-background)"
  }, {
    color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)"
  }, t.color === "transparent" && {
    backgroundImage: "none",
    backgroundColor: "transparent",
    color: "inherit"
  }));
}), om = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiAppBar"
  }), {
    className: i,
    color: s = "primary",
    enableColorOnDark: a = !1,
    position: l = "fixed"
  } = r, c = q(r, em), u = b({}, r, {
    color: s,
    position: l,
    enableColorOnDark: a
  }), d = tm(u);
  return /* @__PURE__ */ x(nm, b({
    square: !0,
    component: "header",
    ownerState: u,
    elevation: 4,
    className: J(d.root, i, l === "fixed" && "mui-fixed"),
    ref: o
  }, c));
});
process.env.NODE_ENV !== "production" && (om.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["default", "inherit", "primary", "secondary", "transparent", "error", "info", "success", "warning"]), n.string]),
  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark: n.bool,
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position: n.oneOf(["absolute", "fixed", "relative", "static", "sticky"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function rm(e) {
  return typeof e == "function" ? e() : e;
}
const $o = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    children: r,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = E.useState(null), c = ke(/* @__PURE__ */ E.isValidElement(r) ? Ut(r) : null, o);
  if (it(() => {
    s || l(rm(i) || document.body);
  }, [i, s]), it(() => {
    if (a && !s)
      return Eo(o, a), () => {
        Eo(o, null);
      };
  }, [o, a, s]), s) {
    if (/* @__PURE__ */ E.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ E.cloneElement(r, u);
    }
    return /* @__PURE__ */ x(E.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ x(E.Fragment, {
    children: a && /* @__PURE__ */ Kl.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && ($o.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: n.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([hn, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
process.env.NODE_ENV !== "production" && ($o.propTypes = Zn($o.propTypes));
const im = ["onChange", "maxRows", "minRows", "style", "value"];
function ao(e) {
  return parseInt(e, 10) || 0;
}
const sm = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function am(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ms(e) {
  return am(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const Qa = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    onChange: r,
    maxRows: i,
    minRows: s = 1,
    style: a,
    value: l
  } = t, c = q(t, im), {
    current: u
  } = E.useRef(l != null), d = E.useRef(null), m = ke(o, d), f = E.useRef(null), T = E.useRef(null), g = E.useCallback(() => {
    const y = d.current, C = T.current;
    if (!y || !C)
      return;
    const N = xt(y).getComputedStyle(y);
    if (N.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    C.style.width = N.width, C.value = y.value || t.placeholder || "x", C.value.slice(-1) === `
` && (C.value += " ");
    const h = N.boxSizing, P = ao(N.paddingBottom) + ao(N.paddingTop), $ = ao(N.borderBottomWidth) + ao(N.borderTopWidth), w = C.scrollHeight;
    C.value = "x";
    const I = C.scrollHeight;
    let F = w;
    s && (F = Math.max(Number(s) * I, F)), i && (F = Math.min(Number(i) * I, F)), F = Math.max(F, I);
    const A = F + (h === "border-box" ? P + $ : 0), j = Math.abs(F - w) <= 1;
    return {
      outerHeightStyle: A,
      overflowing: j
    };
  }, [i, s, t.placeholder]), p = ft(() => {
    const y = d.current, C = g();
    if (!y || !C || ms(C))
      return !1;
    const v = C.outerHeightStyle;
    return f.current != null && f.current !== v;
  }), R = E.useCallback(() => {
    const y = d.current, C = g();
    if (!y || !C || ms(C))
      return;
    const v = C.outerHeightStyle;
    f.current !== v && (f.current = v, y.style.height = `${v}px`), y.style.overflow = C.overflowing ? "hidden" : "";
  }, [g]), O = E.useRef(-1);
  it(() => {
    const y = Uo(R), C = d == null ? void 0 : d.current;
    if (!C)
      return;
    const v = xt(C);
    v.addEventListener("resize", y);
    let N;
    return typeof ResizeObserver < "u" && (N = new ResizeObserver(() => {
      p() && (N.unobserve(C), cancelAnimationFrame(O.current), R(), O.current = requestAnimationFrame(() => {
        N.observe(C);
      }));
    }), N.observe(C)), () => {
      y.clear(), cancelAnimationFrame(O.current), v.removeEventListener("resize", y), N && N.disconnect();
    };
  }, [g, R, p]), it(() => {
    R();
  });
  const S = (y) => {
    u || R(), r && r(y);
  };
  return /* @__PURE__ */ se(E.Fragment, {
    children: [/* @__PURE__ */ x("textarea", b({
      value: l,
      onChange: S,
      ref: m,
      rows: s,
      style: a
    }, c)), /* @__PURE__ */ x("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: T,
      tabIndex: -1,
      style: b({}, sm.shadow, a, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Qa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  onChange: n.func,
  /**
   * @ignore
   */
  placeholder: n.string,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * @ignore
   */
  value: n.oneOfType([n.arrayOf(n.string), n.number, n.string])
});
function kt({
  props: e,
  states: t,
  muiFormControl: o
}) {
  return t.reduce((r, i) => (r[i] = e[i], o && typeof e[i] > "u" && (r[i] = o[i]), r), {});
}
const Ko = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ko.displayName = "FormControlContext");
function $t() {
  return E.useContext(Ko);
}
function el(e) {
  return /* @__PURE__ */ x(Ea, b({}, e, {
    defaultTheme: ai,
    themeId: pn
  }));
}
process.env.NODE_ENV !== "production" && (el.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool])
});
function hs(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Po(e, t = !1) {
  return e && (hs(e.value) && e.value !== "" || t && hs(e.defaultValue) && e.defaultValue !== "");
}
function lm(e) {
  return e.startAdornment;
}
function cm(e) {
  return ce("MuiInputBase", e);
}
const yn = ae("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), um = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Xo = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.formControl && t.formControl, o.startAdornment && t.adornedStart, o.endAdornment && t.adornedEnd, o.error && t.error, o.size === "small" && t.sizeSmall, o.multiline && t.multiline, o.color && t[`color${X(o.color)}`], o.fullWidth && t.fullWidth, o.hiddenLabel && t.hiddenLabel];
}, Jo = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.input, o.size === "small" && t.inputSizeSmall, o.multiline && t.inputMultiline, o.type === "search" && t.inputTypeSearch, o.startAdornment && t.inputAdornedStart, o.endAdornment && t.inputAdornedEnd, o.hiddenLabel && t.inputHiddenLabel];
}, dm = (e) => {
  const {
    classes: t,
    color: o,
    disabled: r,
    error: i,
    endAdornment: s,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: m,
    size: f,
    startAdornment: T,
    type: g
  } = e, p = {
    root: ["root", `color${X(o)}`, r && "disabled", i && "error", c && "fullWidth", a && "focused", l && "formControl", f && f !== "medium" && `size${X(f)}`, d && "multiline", T && "adornedStart", s && "adornedEnd", u && "hiddenLabel", m && "readOnly"],
    input: ["input", r && "disabled", g === "search" && "inputTypeSearch", d && "inputMultiline", f === "small" && "inputSizeSmall", u && "inputHiddenLabel", T && "inputAdornedStart", s && "inputAdornedEnd", m && "readOnly"]
  };
  return ue(p, cm, t);
}, Zo = W("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Xo
})(({
  theme: e,
  ownerState: t
}) => b({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${yn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && b({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), Qo = W("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Jo
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light", r = b({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: o ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), i = {
    opacity: "0 !important"
  }, s = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: o ? 0.42 : 0.5
  };
  return b({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${yn.formControl} &`]: {
      "&::-webkit-input-placeholder": i,
      "&::-moz-placeholder": i,
      // Firefox 19+
      "&:-ms-input-placeholder": i,
      // IE11
      "&::-ms-input-placeholder": i,
      // Edge
      "&:focus::-webkit-input-placeholder": s,
      "&:focus::-moz-placeholder": s,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": s,
      // IE11
      "&:focus::-ms-input-placeholder": s
      // Edge
    },
    [`&.${yn.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, t.size === "small" && {
    paddingTop: 1
  }, t.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, t.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), pm = /* @__PURE__ */ x(el, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), er = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r;
  const i = pe({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": s,
    autoComplete: a,
    autoFocus: l,
    className: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: m,
    disabled: f,
    disableInjectingGlobalStyles: T,
    endAdornment: g,
    fullWidth: p = !1,
    id: R,
    inputComponent: O = "input",
    inputProps: S = {},
    inputRef: y,
    maxRows: C,
    minRows: v,
    multiline: N = !1,
    name: h,
    onBlur: P,
    onChange: $,
    onClick: w,
    onFocus: I,
    onKeyDown: F,
    onKeyUp: A,
    placeholder: j,
    readOnly: D,
    renderSuffix: L,
    rows: z,
    slotProps: M = {},
    slots: H = {},
    startAdornment: k,
    type: V = "text",
    value: ee
  } = i, Z = q(i, um), U = S.value != null ? S.value : ee, {
    current: Q
  } = E.useRef(U != null), B = E.useRef(), Y = E.useCallback((ye) => {
    process.env.NODE_ENV !== "production" && ye && ye.nodeName !== "INPUT" && !ye.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), G = ke(B, y, S.ref, Y), [K, ne] = E.useState(!1), te = $t();
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    if (te)
      return te.registerEffect();
  }, [te]);
  const _ = kt({
    props: i,
    muiFormControl: te,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  _.focused = te ? te.focused : K, E.useEffect(() => {
    !te && f && K && (ne(!1), P && P());
  }, [te, f, K, P]);
  const re = te && te.onFilled, oe = te && te.onEmpty, de = E.useCallback((ye) => {
    Po(ye) ? re && re() : oe && oe();
  }, [re, oe]);
  it(() => {
    Q && de({
      value: U
    });
  }, [U, de, Q]);
  const De = (ye) => {
    if (_.disabled) {
      ye.stopPropagation();
      return;
    }
    I && I(ye), S.onFocus && S.onFocus(ye), te && te.onFocus ? te.onFocus(ye) : ne(!0);
  }, Fe = (ye) => {
    P && P(ye), S.onBlur && S.onBlur(ye), te && te.onBlur ? te.onBlur(ye) : ne(!1);
  }, Ge = (ye, ...le) => {
    if (!Q) {
      const mt = ye.target || B.current;
      if (mt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Ct(1));
      de({
        value: mt.value
      });
    }
    S.onChange && S.onChange(ye, ...le), $ && $(ye, ...le);
  };
  E.useEffect(() => {
    de(B.current);
  }, []);
  const Xe = (ye) => {
    B.current && ye.currentTarget === ye.target && B.current.focus(), w && w(ye);
  };
  let Qe = O, Pe = S;
  N && Qe === "input" && (z ? (process.env.NODE_ENV !== "production" && (v || C) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Pe = b({
    type: void 0,
    minRows: z,
    maxRows: z
  }, Pe)) : Pe = b({
    type: void 0,
    maxRows: C,
    minRows: v
  }, Pe), Qe = Qa);
  const et = (ye) => {
    de(ye.animationName === "mui-auto-fill-cancel" ? B.current : {
      value: "x"
    });
  };
  E.useEffect(() => {
    te && te.setAdornedStart(!!k);
  }, [te, k]);
  const He = b({}, i, {
    color: _.color || "primary",
    disabled: _.disabled,
    endAdornment: g,
    error: _.error,
    focused: _.focused,
    formControl: te,
    fullWidth: p,
    hiddenLabel: _.hiddenLabel,
    multiline: N,
    size: _.size,
    startAdornment: k,
    type: V
  }), Se = dm(He), tt = H.root || u.Root || Zo, Mt = M.root || d.root || {}, Pt = H.input || u.Input || Qo;
  return Pe = b({}, Pe, (r = M.input) != null ? r : d.input), /* @__PURE__ */ se(E.Fragment, {
    children: [!T && pm, /* @__PURE__ */ se(tt, b({}, Mt, !gn(tt) && {
      ownerState: b({}, He, Mt.ownerState)
    }, {
      ref: o,
      onClick: Xe
    }, Z, {
      className: J(Se.root, Mt.className, c, D && "MuiInputBase-readOnly"),
      children: [k, /* @__PURE__ */ x(Ko.Provider, {
        value: null,
        children: /* @__PURE__ */ x(Pt, b({
          ownerState: He,
          "aria-invalid": _.error,
          "aria-describedby": s,
          autoComplete: a,
          autoFocus: l,
          defaultValue: m,
          disabled: _.disabled,
          id: R,
          onAnimationStart: et,
          name: h,
          placeholder: j,
          readOnly: D,
          required: _.required,
          rows: z,
          value: U,
          onKeyDown: F,
          onKeyUp: A,
          type: V
        }, Pe, !gn(Pt) && {
          as: Qe,
          ownerState: b({}, He, Pe.ownerState)
        }, {
          ref: G,
          className: J(Se.input, Pe.className, D && "MuiInputBase-readOnly"),
          onBlur: Fe,
          onChange: Ge,
          onFocus: De
        }))
      }), g, L ? L(b({}, _, {
        startAdornment: k
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (er.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Jn,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: at,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * @ignore
   */
  renderSuffix: n.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The size of the component.
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
function fm(e) {
  return ce("MuiInput", e);
}
const $n = b({}, yn, ae("MuiInput", ["root", "underline", "input"]));
function mm(e) {
  return ce("MuiOutlinedInput", e);
}
const wt = b({}, yn, ae("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
function hm(e) {
  return ce("MuiFilledInput", e);
}
const Dt = b({}, yn, ae("MuiFilledInput", ["root", "underline", "input"])), bm = ze(/* @__PURE__ */ x("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), gm = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], ym = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, tl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = lt(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: m,
    onEntering: f,
    onExit: T,
    onExited: g,
    onExiting: p,
    style: R,
    timeout: O = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = ct
  } = t, y = q(t, gm), C = E.useRef(null), v = ke(C, Ut(l), o), N = (j) => (D) => {
    if (j) {
      const L = C.current;
      D === void 0 ? j(L) : j(L, D);
    }
  }, h = N(f), P = N((j, D) => {
    ui(j);
    const L = _t({
      style: R,
      timeout: O,
      easing: c
    }, {
      mode: "enter"
    });
    j.style.webkitTransition = r.transitions.create("opacity", L), j.style.transition = r.transitions.create("opacity", L), d && d(j, D);
  }), $ = N(m), w = N(p), I = N((j) => {
    const D = _t({
      style: R,
      timeout: O,
      easing: c
    }, {
      mode: "exit"
    });
    j.style.webkitTransition = r.transitions.create("opacity", D), j.style.transition = r.transitions.create("opacity", D), T && T(j);
  }), F = N(g);
  return /* @__PURE__ */ x(S, b({
    appear: a,
    in: u,
    nodeRef: C,
    onEnter: P,
    onEntered: $,
    onEntering: h,
    onExit: I,
    onExited: F,
    onExiting: w,
    addEndListener: (j) => {
      s && s(C.current, j);
    },
    timeout: O
  }, y, {
    children: (j, D) => /* @__PURE__ */ E.cloneElement(l, b({
      style: b({
        opacity: 0,
        visibility: j === "exited" && !u ? "hidden" : void 0
      }, ym[j], R, l.props.style),
      ref: v
    }, D))
  }));
});
process.env.NODE_ENV !== "production" && (tl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: Wt.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function vm(e) {
  return ce("MuiBackdrop", e);
}
ae("MuiBackdrop", ["root", "invisible"]);
const xm = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Em = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return ue({
    root: ["root", o && "invisible"]
  }, vm, t);
}, Tm = W("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => b({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), nl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, s;
  const a = pe({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: m = {},
    invisible: f = !1,
    open: T,
    slotProps: g = {},
    slots: p = {},
    TransitionComponent: R = tl,
    transitionDuration: O
  } = a, S = q(a, xm), y = b({}, a, {
    component: u,
    invisible: f
  }), C = Em(y), v = (r = g.root) != null ? r : m.root;
  return /* @__PURE__ */ x(R, b({
    in: T,
    timeout: O
  }, S, {
    children: /* @__PURE__ */ x(Tm, b({
      "aria-hidden": !0
    }, v, {
      as: (i = (s = p.root) != null ? s : d.Root) != null ? i : u,
      className: J(C.root, c, v == null ? void 0 : v.className),
      ownerState: b({}, y, v == null ? void 0 : v.ownerState),
      classes: C,
      ref: o,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (nl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    root: n.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: n.bool,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
const Cm = ae("MuiBox", ["root"]), Om = si(), he = Vu({
  themeId: pn,
  defaultTheme: Om,
  defaultClassName: Cm.root,
  generateClassName: ti.generate
});
process.env.NODE_ENV !== "production" && (he.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: n.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function Rm(e) {
  return ce("MuiButton", e);
}
const lo = ae("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), ol = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (ol.displayName = "ButtonGroupContext");
const rl = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (rl.displayName = "ButtonGroupButtonContext");
const Sm = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], $m = (e) => {
  const {
    color: t,
    disableElevation: o,
    fullWidth: r,
    size: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, `${s}${X(t)}`, `size${X(i)}`, `${s}Size${X(i)}`, `color${X(t)}`, o && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${X(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${X(i)}`]
  }, c = ue(l, Rm, a);
  return b({}, a, c);
}, il = (e) => b({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), Pm = W(St, {
  shouldForwardProp: (e) => Ue(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${X(o.color)}`], t[`size${X(o.size)}`], t[`${o.variant}Size${X(o.size)}`], o.color === "inherit" && t.colorInherit, o.disableElevation && t.disableElevation, o.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r;
  const i = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], s = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return b({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": b({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : me.alpha(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : me.alpha(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : me.alpha(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : s,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": b({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${lo.focusVisible}`]: b({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${lo.disabled}`]: b({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${me.alpha(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (o = (r = e.palette).getContrastText) == null ? void 0 : o.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : i,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${lo.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${lo.disabled}`]: {
    boxShadow: "none"
  }
}), wm = W("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.startIcon, t[`iconSize${X(o.size)}`]];
  }
})(({
  ownerState: e
}) => b({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, il(e))), Nm = W("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.endIcon, t[`iconSize${X(o.size)}`]];
  }
})(({
  ownerState: e
}) => b({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, il(e))), Gt = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = E.useContext(ol), i = E.useContext(rl), s = Un(r, t), a = pe({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: m = !1,
    disableElevation: f = !1,
    disableFocusRipple: T = !1,
    endIcon: g,
    focusVisibleClassName: p,
    fullWidth: R = !1,
    size: O = "medium",
    startIcon: S,
    type: y,
    variant: C = "text"
  } = a, v = q(a, Sm), N = b({}, a, {
    color: c,
    component: u,
    disabled: m,
    disableElevation: f,
    disableFocusRipple: T,
    fullWidth: R,
    size: O,
    type: y,
    variant: C
  }), h = $m(N), P = S && /* @__PURE__ */ x(wm, {
    className: h.startIcon,
    ownerState: N,
    children: S
  }), $ = g && /* @__PURE__ */ x(Nm, {
    className: h.endIcon,
    ownerState: N,
    children: g
  }), w = i || "";
  return /* @__PURE__ */ se(Pm, b({
    ownerState: N,
    className: J(r.className, h.root, d, w),
    component: u,
    disabled: m,
    focusRipple: !T,
    focusVisibleClassName: J(h.focusVisible, p),
    ref: o,
    type: y
  }, v, {
    classes: h,
    children: [P, l, $]
  }));
});
process.env.NODE_ENV !== "production" && (Gt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * Element placed after the children.
   */
  endIcon: n.node,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: n.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * Element placed before the children.
   */
  startIcon: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["contained", "outlined", "text"]), n.string])
});
function _m(e) {
  return ce("PrivateSwitchBase", e);
}
ae("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Im = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"], km = (e) => {
  const {
    classes: t,
    checked: o,
    disabled: r,
    edge: i
  } = e, s = {
    root: ["root", o && "checked", r && "disabled", i && `edge${X(i)}`],
    input: ["input"]
  };
  return ue(s, _m, t);
}, Mm = W(St)(({
  ownerState: e
}) => b({
  padding: 9,
  borderRadius: "50%"
}, e.edge === "start" && {
  marginLeft: e.size === "small" ? -3 : -12
}, e.edge === "end" && {
  marginRight: e.size === "small" ? -3 : -12
})), Am = W("input", {
  shouldForwardProp: Ue
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), sl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    autoFocus: r,
    checked: i,
    checkedIcon: s,
    className: a,
    defaultChecked: l,
    disabled: c,
    disableFocusRipple: u = !1,
    edge: d = !1,
    icon: m,
    id: f,
    inputProps: T,
    inputRef: g,
    name: p,
    onBlur: R,
    onChange: O,
    onFocus: S,
    readOnly: y,
    required: C = !1,
    tabIndex: v,
    type: N,
    value: h
  } = t, P = q(t, Im), [$, w] = bn({
    controlled: i,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), I = $t(), F = (H) => {
    S && S(H), I && I.onFocus && I.onFocus(H);
  }, A = (H) => {
    R && R(H), I && I.onBlur && I.onBlur(H);
  }, j = (H) => {
    if (H.nativeEvent.defaultPrevented)
      return;
    const k = H.target.checked;
    w(k), O && O(H, k);
  };
  let D = c;
  I && typeof D > "u" && (D = I.disabled);
  const L = N === "checkbox" || N === "radio", z = b({}, t, {
    checked: $,
    disabled: D,
    disableFocusRipple: u,
    edge: d
  }), M = km(z);
  return /* @__PURE__ */ se(Mm, b({
    component: "span",
    className: J(M.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: D,
    tabIndex: null,
    role: void 0,
    onFocus: F,
    onBlur: A,
    ownerState: z,
    ref: o
  }, P, {
    children: [/* @__PURE__ */ x(Am, b({
      autoFocus: r,
      checked: i,
      defaultChecked: l,
      className: M.input,
      disabled: D,
      id: L ? f : void 0,
      name: p,
      onChange: j,
      readOnly: y,
      ref: g,
      required: C,
      ownerState: z,
      tabIndex: v,
      type: N
    }, N === "checkbox" && h === void 0 ? {} : {
      value: h
    }, T)), $ ? s : m]
  }));
});
process.env.NODE_ENV !== "production" && (sl.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: n.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: n.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * @ignore
   */
  defaultChecked: n.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: n.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: at,
  /*
   * @ignore
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.object,
  /**
   * @ignore
   */
  tabIndex: n.oneOfType([n.number, n.string]),
  /**
   * The input component prop `type`.
   */
  type: n.string.isRequired,
  /**
   * The value of the component.
   */
  value: n.any
});
const Dm = ze(/* @__PURE__ */ x("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), Fm = ze(/* @__PURE__ */ x("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), Lm = ze(/* @__PURE__ */ x("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function jm(e) {
  return ce("MuiCheckbox", e);
}
const Tr = ae("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), Bm = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"], zm = (e) => {
  const {
    classes: t,
    indeterminate: o,
    color: r,
    size: i
  } = e, s = {
    root: ["root", o && "indeterminate", `color${X(r)}`, `size${X(i)}`]
  }, a = ue(s, jm, t);
  return b({}, t, a);
}, Vm = W(sl, {
  shouldForwardProp: (e) => Ue(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.indeterminate && t.indeterminate, t[`size${X(o.size)}`], o.color !== "default" && t[`color${X(o.color)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  color: (e.vars || e).palette.text.secondary
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${t.color === "default" ? e.vars.palette.action.activeChannel : e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : me.alpha(t.color === "default" ? e.palette.action.active : e.palette[t.color].main, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.color !== "default" && {
  [`&.${Tr.checked}, &.${Tr.indeterminate}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Tr.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  }
})), Wm = /* @__PURE__ */ x(Fm, {}), Um = /* @__PURE__ */ x(Dm, {}), qm = /* @__PURE__ */ x(Lm, {}), al = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i;
  const s = pe({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: a = Wm,
    color: l = "primary",
    icon: c = Um,
    indeterminate: u = !1,
    indeterminateIcon: d = qm,
    inputProps: m,
    size: f = "medium",
    className: T
  } = s, g = q(s, Bm), p = u ? d : c, R = u ? d : a, O = b({}, s, {
    color: l,
    indeterminate: u,
    size: f
  }), S = zm(O);
  return /* @__PURE__ */ x(Vm, b({
    type: "checkbox",
    inputProps: b({
      "data-indeterminate": u
    }, m),
    icon: /* @__PURE__ */ E.cloneElement(p, {
      fontSize: (r = p.props.fontSize) != null ? r : f
    }),
    checkedIcon: /* @__PURE__ */ E.cloneElement(R, {
      fontSize: (i = R.props.fontSize) != null ? i : f
    }),
    ownerState: O,
    ref: o,
    className: J(S.root, T)
  }, g, {
    classes: S
  }));
});
process.env.NODE_ENV !== "production" && (al.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: n.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: n.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: n.node,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: n.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: n.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: at,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: n.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: n.any
});
function bs(e) {
  return e.substring(2).toLowerCase();
}
function Gm(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function wo(e) {
  const {
    children: t,
    disableReactTree: o = !1,
    mouseEvent: r = "onClick",
    onClickAway: i,
    touchEvent: s = "onTouchEnd"
  } = e, a = E.useRef(!1), l = E.useRef(null), c = E.useRef(!1), u = E.useRef(!1);
  E.useEffect(() => (setTimeout(() => {
    c.current = !0;
  }, 0), () => {
    c.current = !1;
  }), []);
  const d = ke(Ut(t), l), m = ft((g) => {
    const p = u.current;
    u.current = !1;
    const R = Be(l.current);
    if (!c.current || !l.current || "clientX" in g && Gm(g, R))
      return;
    if (a.current) {
      a.current = !1;
      return;
    }
    let O;
    g.composedPath ? O = g.composedPath().indexOf(l.current) > -1 : O = !R.documentElement.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      g.target
    ) || l.current.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      g.target
    ), !O && (o || !p) && i(g);
  }), f = (g) => (p) => {
    u.current = !0;
    const R = t.props[g];
    R && R(p);
  }, T = {
    ref: d
  };
  return s !== !1 && (T[s] = f(s)), E.useEffect(() => {
    if (s !== !1) {
      const g = bs(s), p = Be(l.current), R = () => {
        a.current = !0;
      };
      return p.addEventListener(g, m), p.addEventListener("touchmove", R), () => {
        p.removeEventListener(g, m), p.removeEventListener("touchmove", R);
      };
    }
  }, [m, s]), r !== !1 && (T[r] = f(r)), E.useEffect(() => {
    if (r !== !1) {
      const g = bs(r), p = Be(l.current);
      return p.addEventListener(g, m), () => {
        p.removeEventListener(g, m);
      };
    }
  }, [m, r]), /* @__PURE__ */ x(E.Fragment, {
    children: /* @__PURE__ */ E.cloneElement(t, T)
  });
}
process.env.NODE_ENV !== "production" && (wo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The wrapped element.
   */
  children: Wt.isRequired,
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   * @default false
   */
  disableReactTree: n.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent: n.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", !1]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: n.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent: n.oneOf(["onTouchEnd", "onTouchStart", !1])
});
process.env.NODE_ENV !== "production" && (wo.propTypes = Zn(wo.propTypes));
const ll = Vd({
  createStyledComponent: W("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: o
      } = e;
      return [t.root, t[`maxWidth${X(String(o.maxWidth))}`], o.fixed && t.fixed, o.disableGutters && t.disableGutters];
    }
  }),
  useThemeProps: (e) => pe({
    props: e,
    name: "MuiContainer"
  })
});
process.env.NODE_ENV !== "production" && (ll.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: n.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: n.oneOfType([n.oneOf(["xs", "sm", "md", "lg", "xl", !1]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function Hm(e) {
  const t = Be(e);
  return t.body === e ? xt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Bn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function gs(e) {
  return parseInt(xt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Ym(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function ys(e, t, o, r, i) {
  const s = [t, o, ...r];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1, c = !Ym(a);
    l && c && Bn(a, i);
  });
}
function Cr(e, t) {
  let o = -1;
  return e.some((r, i) => t(r) ? (o = i, !0) : !1), o;
}
function Km(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Hm(r)) {
      const a = Da(Be(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${gs(r) + a}px`;
      const l = Be(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        o.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${gs(c) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = Be(r).body;
    else {
      const a = r.parentElement, l = xt(r);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    o.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    o.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function Xm(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class Jm {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Bn(t.modalRef, !1);
    const i = Xm(o);
    ys(o, t.mount, t.modalRef, i, !0);
    const s = Cr(this.containers, (a) => a.container === o);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, o) {
    const r = Cr(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[r];
    i.restore || (i.restore = Km(i, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Cr(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Bn(t.modalRef, o), ys(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Bn(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Zm = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Qm(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function eh(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function th(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || eh(e));
}
function nh(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(Zm)).forEach((r, i) => {
    const s = Qm(r);
    s === -1 || !th(r) || (s === 0 ? t.push(r) : o.push({
      documentOrder: i,
      tabIndex: s,
      node: r
    }));
  }), o.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function oh() {
  return !0;
}
function No(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = nh,
    isEnabled: a = oh,
    open: l
  } = e, c = E.useRef(!1), u = E.useRef(null), d = E.useRef(null), m = E.useRef(null), f = E.useRef(null), T = E.useRef(!1), g = E.useRef(null), p = ke(Ut(t), g), R = E.useRef(null);
  E.useEffect(() => {
    !l || !g.current || (T.current = !o);
  }, [o, l]), E.useEffect(() => {
    if (!l || !g.current)
      return;
    const y = Be(g.current);
    return g.current.contains(y.activeElement) || (g.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", "-1")), T.current && g.current.focus()), () => {
      i || (m.current && m.current.focus && (c.current = !0, m.current.focus()), m.current = null);
    };
  }, [l]), E.useEffect(() => {
    if (!l || !g.current)
      return;
    const y = Be(g.current), C = (h) => {
      R.current = h, !(r || !a() || h.key !== "Tab") && y.activeElement === g.current && h.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, v = () => {
      const h = g.current;
      if (h === null)
        return;
      if (!y.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (h.contains(y.activeElement) || r && y.activeElement !== u.current && y.activeElement !== d.current)
        return;
      if (y.activeElement !== f.current)
        f.current = null;
      else if (f.current !== null)
        return;
      if (!T.current)
        return;
      let P = [];
      if ((y.activeElement === u.current || y.activeElement === d.current) && (P = s(g.current)), P.length > 0) {
        var $, w;
        const I = !!(($ = R.current) != null && $.shiftKey && ((w = R.current) == null ? void 0 : w.key) === "Tab"), F = P[0], A = P[P.length - 1];
        typeof F != "string" && typeof A != "string" && (I ? A.focus() : F.focus());
      } else
        h.focus();
    };
    y.addEventListener("focusin", v), y.addEventListener("keydown", C, !0);
    const N = setInterval(() => {
      y.activeElement && y.activeElement.tagName === "BODY" && v();
    }, 50);
    return () => {
      clearInterval(N), y.removeEventListener("focusin", v), y.removeEventListener("keydown", C, !0);
    };
  }, [o, r, i, a, l, s]);
  const O = (y) => {
    m.current === null && (m.current = y.relatedTarget), T.current = !0, f.current = y.target;
    const C = t.props.onFocus;
    C && C(y);
  }, S = (y) => {
    m.current === null && (m.current = y.relatedTarget), T.current = !0;
  };
  return /* @__PURE__ */ se(E.Fragment, {
    children: [/* @__PURE__ */ x("div", {
      tabIndex: l ? 0 : -1,
      onFocus: S,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(t, {
      ref: p,
      onFocus: O
    }), /* @__PURE__ */ x("div", {
      tabIndex: l ? 0 : -1,
      onFocus: S,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (No.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Wt,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: n.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: n.func,
  /**
   * If `true`, focus is locked.
   */
  open: n.bool.isRequired
});
process.env.NODE_ENV !== "production" && (No.propTypes = Zn(No.propTypes));
function rh(e) {
  return typeof e == "function" ? e() : e;
}
function ih(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const sh = new Jm();
function ah(e) {
  const {
    container: t,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: i = sh,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: m
  } = e, f = E.useRef({}), T = E.useRef(null), g = E.useRef(null), p = ke(g, m), [R, O] = E.useState(!d), S = ih(c);
  let y = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (y = !1);
  const C = () => Be(T.current), v = () => (f.current.modalRef = g.current, f.current.mount = T.current, f.current), N = () => {
    i.mount(v(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, h = ft(() => {
    const L = rh(t) || C().body;
    i.add(v(), L), g.current && N();
  }), P = E.useCallback(() => i.isTopModal(v()), [i]), $ = ft((L) => {
    T.current = L, L && (d && P() ? N() : g.current && Bn(g.current, y));
  }), w = E.useCallback(() => {
    i.remove(v(), y);
  }, [y, i]);
  E.useEffect(() => () => {
    w();
  }, [w]), E.useEffect(() => {
    d ? h() : (!S || !s) && w();
  }, [d, w, S, s, h]);
  const I = (L) => (z) => {
    var M;
    (M = L.onKeyDown) == null || M.call(L, z), !(z.key !== "Escape" || z.which === 229 || // Wait until IME is settled.
    !P()) && (o || (z.stopPropagation(), u && u(z, "escapeKeyDown")));
  }, F = (L) => (z) => {
    var M;
    (M = L.onClick) == null || M.call(L, z), z.target === z.currentTarget && u && u(z, "backdropClick");
  };
  return {
    getRootProps: (L = {}) => {
      const z = To(e);
      delete z.onTransitionEnter, delete z.onTransitionExited;
      const M = b({}, z, L);
      return b({
        role: "presentation"
      }, M, {
        onKeyDown: I(M),
        ref: p
      });
    },
    getBackdropProps: (L = {}) => {
      const z = L;
      return b({
        "aria-hidden": !0
      }, z, {
        onClick: F(z),
        open: d
      });
    },
    getTransitionProps: () => {
      const L = () => {
        O(!1), a && a();
      }, z = () => {
        O(!0), l && l(), s && w();
      };
      return {
        onEnter: kr(L, c == null ? void 0 : c.props.onEnter),
        onExited: kr(z, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: p,
    portalRef: $,
    isTopModal: P,
    exited: R,
    hasTransition: S
  };
}
function lh(e) {
  return ce("MuiModal", e);
}
ae("MuiModal", ["root", "hidden", "backdrop"]);
const ch = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], uh = (e) => {
  const {
    open: t,
    exited: o,
    classes: r
  } = e;
  return ue({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, lh, r);
}, dh = W("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.open && o.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), ph = W(nl, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), fi = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, s, a, l, c;
  const u = pe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = ph,
    BackdropProps: m,
    className: f,
    closeAfterTransition: T = !1,
    children: g,
    container: p,
    component: R,
    components: O = {},
    componentsProps: S = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: C = !1,
    disableEscapeKeyDown: v = !1,
    disablePortal: N = !1,
    disableRestoreFocus: h = !1,
    disableScrollLock: P = !1,
    hideBackdrop: $ = !1,
    keepMounted: w = !1,
    onBackdropClick: I,
    open: F,
    slotProps: A,
    slots: j
    // eslint-disable-next-line react/prop-types
  } = u, D = q(u, ch), L = b({}, u, {
    closeAfterTransition: T,
    disableAutoFocus: y,
    disableEnforceFocus: C,
    disableEscapeKeyDown: v,
    disablePortal: N,
    disableRestoreFocus: h,
    disableScrollLock: P,
    hideBackdrop: $,
    keepMounted: w
  }), {
    getRootProps: z,
    getBackdropProps: M,
    getTransitionProps: H,
    portalRef: k,
    isTopModal: V,
    exited: ee,
    hasTransition: Z
  } = ah(b({}, L, {
    rootRef: o
  })), U = b({}, L, {
    exited: ee
  }), Q = uh(U), B = {};
  if (g.props.tabIndex === void 0 && (B.tabIndex = "-1"), Z) {
    const {
      onEnter: re,
      onExited: oe
    } = H();
    B.onEnter = re, B.onExited = oe;
  }
  const Y = (r = (i = j == null ? void 0 : j.root) != null ? i : O.Root) != null ? r : dh, G = (s = (a = j == null ? void 0 : j.backdrop) != null ? a : O.Backdrop) != null ? s : d, K = (l = A == null ? void 0 : A.root) != null ? l : S.root, ne = (c = A == null ? void 0 : A.backdrop) != null ? c : S.backdrop, te = Vt({
    elementType: Y,
    externalSlotProps: K,
    externalForwardedProps: D,
    getSlotProps: z,
    additionalProps: {
      ref: o,
      as: R
    },
    ownerState: U,
    className: J(f, K == null ? void 0 : K.className, Q == null ? void 0 : Q.root, !U.open && U.exited && (Q == null ? void 0 : Q.hidden))
  }), _ = Vt({
    elementType: G,
    externalSlotProps: ne,
    additionalProps: m,
    getSlotProps: (re) => M(b({}, re, {
      onClick: (oe) => {
        I && I(oe), re != null && re.onClick && re.onClick(oe);
      }
    })),
    className: J(ne == null ? void 0 : ne.className, m == null ? void 0 : m.className, Q == null ? void 0 : Q.backdrop),
    ownerState: U
  });
  return !w && !F && (!Z || ee) ? null : /* @__PURE__ */ x($o, {
    ref: k,
    container: p,
    disablePortal: N,
    children: /* @__PURE__ */ se(Y, b({}, te, {
      children: [!$ && d ? /* @__PURE__ */ x(G, b({}, _)) : null, /* @__PURE__ */ x(No, {
        disableEnforceFocus: C,
        disableAutoFocus: y,
        disableRestoreFocus: h,
        isEnabled: V,
        open: F,
        children: /* @__PURE__ */ E.cloneElement(g, B)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (fi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: n.object,
  /**
   * A single child content element.
   */
  children: Wt.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: n.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Backdrop: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([hn, n.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: n.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const vs = ae("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), fh = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function mh(e, t, o) {
  const r = t.getBoundingClientRect(), i = o && o.getBoundingClientRect(), s = xt(t);
  let a;
  if (t.fakeTransform)
    a = t.fakeTransform;
  else {
    const u = s.getComputedStyle(t);
    a = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let l = 0, c = 0;
  if (a && a !== "none" && typeof a == "string") {
    const u = a.split("(")[1].split(")")[0].split(",");
    l = parseInt(u[4], 10), c = parseInt(u[5], 10);
  }
  return e === "left" ? i ? `translateX(${i.right + l - r.left}px)` : `translateX(${s.innerWidth + l - r.left}px)` : e === "right" ? i ? `translateX(-${r.right - i.left - l}px)` : `translateX(-${r.left + r.width - l}px)` : e === "up" ? i ? `translateY(${i.bottom + c - r.top}px)` : `translateY(${s.innerHeight + c - r.top}px)` : i ? `translateY(-${r.top - i.top + r.height - c}px)` : `translateY(-${r.top + r.height - c}px)`;
}
function cl(e) {
  return typeof e == "function" ? e() : e;
}
function co(e, t, o) {
  const r = cl(o), i = mh(e, t, r);
  i && (t.style.webkitTransform = i, t.style.transform = i);
}
const ul = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = lt(), i = {
    enter: r.transitions.easing.easeOut,
    exit: r.transitions.easing.sharp
  }, s = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: l = !0,
    children: c,
    container: u,
    direction: d = "down",
    easing: m = i,
    in: f,
    onEnter: T,
    onEntered: g,
    onEntering: p,
    onExit: R,
    onExited: O,
    onExiting: S,
    style: y,
    timeout: C = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = ct
  } = t, N = q(t, fh), h = E.useRef(null), P = ke(Ut(c), h, o), $ = (M) => (H) => {
    M && (H === void 0 ? M(h.current) : M(h.current, H));
  }, w = $((M, H) => {
    co(d, M, u), ui(M), T && T(M, H);
  }), I = $((M, H) => {
    const k = _t({
      timeout: C,
      style: y,
      easing: m
    }, {
      mode: "enter"
    });
    M.style.webkitTransition = r.transitions.create("-webkit-transform", b({}, k)), M.style.transition = r.transitions.create("transform", b({}, k)), M.style.webkitTransform = "none", M.style.transform = "none", p && p(M, H);
  }), F = $(g), A = $(S), j = $((M) => {
    const H = _t({
      timeout: C,
      style: y,
      easing: m
    }, {
      mode: "exit"
    });
    M.style.webkitTransition = r.transitions.create("-webkit-transform", H), M.style.transition = r.transitions.create("transform", H), co(d, M, u), R && R(M);
  }), D = $((M) => {
    M.style.webkitTransition = "", M.style.transition = "", O && O(M);
  }), L = (M) => {
    a && a(h.current, M);
  }, z = E.useCallback(() => {
    h.current && co(d, h.current, u);
  }, [d, u]);
  return E.useEffect(() => {
    if (f || d === "down" || d === "right")
      return;
    const M = Uo(() => {
      h.current && co(d, h.current, u);
    }), H = xt(h.current);
    return H.addEventListener("resize", M), () => {
      M.clear(), H.removeEventListener("resize", M);
    };
  }, [d, f, u]), E.useEffect(() => {
    f || z();
  }, [f, z]), /* @__PURE__ */ x(v, b({
    nodeRef: h,
    onEnter: w,
    onEntered: F,
    onEntering: I,
    onExit: j,
    onExited: D,
    onExiting: A,
    addEndListener: L,
    appear: l,
    in: f,
    timeout: C
  }, N, {
    children: (M, H) => /* @__PURE__ */ E.cloneElement(c, b({
      ref: P,
      style: b({
        visibility: M === "exited" && !f ? "hidden" : void 0
      }, y, c.props.style)
    }, H))
  }));
});
process.env.NODE_ENV !== "production" && (ul.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: Wt.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Rt(n.oneOfType([hn, n.func]), (e) => {
    if (e.open) {
      const t = cl(e.container);
      if (t && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: n.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function hh(e) {
  return ce("MuiDrawer", e);
}
ae("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const bh = ["BackdropProps"], gh = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], dl = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, (o.variant === "permanent" || o.variant === "persistent") && t.docked, t.modal];
}, yh = (e) => {
  const {
    classes: t,
    anchor: o,
    variant: r
  } = e, i = {
    root: ["root"],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${X(o)}`, r !== "temporary" && `paperAnchorDocked${X(o)}`]
  };
  return ue(i, hh, t);
}, vh = W(fi, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: dl
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})), xs = W("div", {
  shouldForwardProp: Ue,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: dl
})({
  flex: "0 0 auto"
}), xh = W(qt, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.paper, t[`paperAnchor${X(o.anchor)}`], o.variant !== "temporary" && t[`paperAnchorDocked${X(o.anchor)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (e.vars || e).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0
}, t.anchor === "left" && {
  left: 0
}, t.anchor === "top" && {
  top: 0,
  left: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "right" && {
  right: 0
}, t.anchor === "bottom" && {
  top: "auto",
  left: 0,
  bottom: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "left" && t.variant !== "temporary" && {
  borderRight: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "top" && t.variant !== "temporary" && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "right" && t.variant !== "temporary" && {
  borderLeft: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "bottom" && t.variant !== "temporary" && {
  borderTop: `1px solid ${(e.vars || e).palette.divider}`
})), pl = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function Eh(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function Th({
  direction: e
}, t) {
  return e === "rtl" && Eh(t) ? pl[t] : t;
}
const Ch = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiDrawer"
  }), i = lt(), s = ri(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    BackdropProps: c,
    children: u,
    className: d,
    elevation: m = 16,
    hideBackdrop: f = !1,
    ModalProps: {
      BackdropProps: T
    } = {},
    onClose: g,
    open: p = !1,
    PaperProps: R = {},
    SlideProps: O,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = ul,
    transitionDuration: y = a,
    variant: C = "temporary"
  } = r, v = q(r.ModalProps, bh), N = q(r, gh), h = E.useRef(!1);
  E.useEffect(() => {
    h.current = !0;
  }, []);
  const P = Th({
    direction: s ? "rtl" : "ltr"
  }, l), w = b({}, r, {
    anchor: l,
    elevation: m,
    open: p,
    variant: C
  }, N), I = yh(w), F = /* @__PURE__ */ x(xh, b({
    elevation: C === "temporary" ? m : 0,
    square: !0
  }, R, {
    className: J(I.paper, R.className),
    ownerState: w,
    children: u
  }));
  if (C === "permanent")
    return /* @__PURE__ */ x(xs, b({
      className: J(I.root, I.docked, d),
      ownerState: w,
      ref: o
    }, N, {
      children: F
    }));
  const A = /* @__PURE__ */ x(S, b({
    in: p,
    direction: pl[P],
    timeout: y,
    appear: h.current
  }, O, {
    children: F
  }));
  return C === "persistent" ? /* @__PURE__ */ x(xs, b({
    className: J(I.root, I.docked, d),
    ownerState: w,
    ref: o
  }, N, {
    children: A
  })) : /* @__PURE__ */ x(vh, b({
    BackdropProps: b({}, c, T, {
      transitionDuration: y
    }),
    className: J(I.root, I.modal, d),
    open: p,
    ownerState: w,
    onClose: g,
    hideBackdrop: f,
    ref: o
  }, N, v, {
    children: A
  }));
});
process.env.NODE_ENV !== "production" && (Ch.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: n.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: n.object,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: Nt,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Props applied to the [`Modal`](/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: n.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: n.bool,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: n.object,
  /**
   * Props applied to the [`Slide`](/material-ui/api/slide/) element.
   */
  SlideProps: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: n.oneOf(["permanent", "persistent", "temporary"])
});
const Oh = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], Rh = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, i = ue({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, hm, t);
  return b({}, t, i);
}, Sh = W(Zo, {
  shouldForwardProp: (e) => Ue(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...Xo(e, t), !o.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
  const r = e.palette.mode === "light", i = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", s = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return b({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
      }
    },
    [`&.${Dt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
    },
    [`&.${Dt.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(o = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : o.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${Dt.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Dt.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : i}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${Dt.disabled}, .${Dt.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${Dt.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && b({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, t.hiddenLabel && t.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
}), $h = W(Qo, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Jo
})(({
  theme: e,
  ownerState: t
}) => b({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, t.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
})), tr = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, s, a;
  const l = pe({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: c = {},
    componentsProps: u,
    fullWidth: d = !1,
    // declare here to prevent spreading to DOM
    inputComponent: m = "input",
    multiline: f = !1,
    slotProps: T,
    slots: g = {},
    type: p = "text"
  } = l, R = q(l, Oh), O = b({}, l, {
    fullWidth: d,
    inputComponent: m,
    multiline: f,
    type: p
  }), S = Rh(l), y = {
    root: {
      ownerState: O
    },
    input: {
      ownerState: O
    }
  }, C = T ?? u ? qe(y, T ?? u) : y, v = (r = (i = g.root) != null ? i : c.Root) != null ? r : Sh, N = (s = (a = g.input) != null ? a : c.Input) != null ? s : $h;
  return /* @__PURE__ */ x(er, b({
    slots: {
      root: v,
      input: N
    },
    componentsProps: C,
    fullWidth: d,
    inputComponent: m,
    multiline: f,
    ref: o,
    type: p
  }, R, {
    classes: S
  }));
});
process.env.NODE_ENV !== "production" && (tr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: at,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
tr.muiName = "Input";
function Ph(e) {
  return ce("MuiFormControl", e);
}
ae("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const wh = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], Nh = (e) => {
  const {
    classes: t,
    margin: o,
    fullWidth: r
  } = e, i = {
    root: ["root", o !== "none" && `margin${X(o)}`, r && "fullWidth"]
  };
  return ue(i, Ph, t);
}, _h = W("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => b({}, t.root, t[`margin${X(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => b({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), fl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiFormControl"
  }), {
    children: i,
    className: s,
    color: a = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: m = !1,
    hiddenLabel: f = !1,
    margin: T = "none",
    required: g = !1,
    size: p = "medium",
    variant: R = "outlined"
  } = r, O = q(r, wh), S = b({}, r, {
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: m,
    hiddenLabel: f,
    margin: T,
    required: g,
    size: p,
    variant: R
  }), y = Nh(S), [C, v] = E.useState(() => {
    let A = !1;
    return i && E.Children.forEach(i, (j) => {
      if (!cn(j, ["Input", "Select"]))
        return;
      const D = cn(j, ["Select"]) ? j.props.input : j;
      D && lm(D.props) && (A = !0);
    }), A;
  }), [N, h] = E.useState(() => {
    let A = !1;
    return i && E.Children.forEach(i, (j) => {
      cn(j, ["Input", "Select"]) && (Po(j.props, !0) || Po(j.props.inputProps, !0)) && (A = !0);
    }), A;
  }), [P, $] = E.useState(!1);
  c && P && $(!1);
  const w = d !== void 0 && !c ? d : P;
  let I;
  if (process.env.NODE_ENV !== "production") {
    const A = E.useRef(!1);
    I = () => (A.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), A.current = !0, () => {
      A.current = !1;
    });
  }
  const F = E.useMemo(() => ({
    adornedStart: C,
    setAdornedStart: v,
    color: a,
    disabled: c,
    error: u,
    filled: N,
    focused: w,
    fullWidth: m,
    hiddenLabel: f,
    size: p,
    onBlur: () => {
      $(!1);
    },
    onEmpty: () => {
      h(!1);
    },
    onFilled: () => {
      h(!0);
    },
    onFocus: () => {
      $(!0);
    },
    registerEffect: I,
    required: g,
    variant: R
  }), [C, a, c, u, N, w, m, f, I, g, p, R]);
  return /* @__PURE__ */ x(Ko.Provider, {
    value: F,
    children: /* @__PURE__ */ x(_h, b({
      as: l,
      ownerState: S,
      className: J(y.root, s),
      ref: o
    }, O, {
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (fl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: n.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const ml = Xd({
  createStyledComponent: W("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => pe({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (ml.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: n.oneOfType([n.oneOf(["column-reverse", "column", "row-reverse", "row"]), n.arrayOf(n.oneOf(["column-reverse", "column", "row-reverse", "row"])), n.object]),
  /**
   * Add an element between each child.
   */
  divider: n.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: n.bool
});
function Ih(e) {
  return ce("MuiFormControlLabel", e);
}
const Ln = ae("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), kh = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"], Mh = (e) => {
  const {
    classes: t,
    disabled: o,
    labelPlacement: r,
    error: i,
    required: s
  } = e, a = {
    root: ["root", o && "disabled", `labelPlacement${X(r)}`, i && "error", s && "required"],
    label: ["label", o && "disabled"],
    asterisk: ["asterisk", i && "error"]
  };
  return ue(a, Ih, t);
}, Ah = W("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Ln.label}`]: t.label
    }, t.root, t[`labelPlacement${X(o.labelPlacement)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${Ln.disabled}`]: {
    cursor: "default"
  }
}, t.labelPlacement === "start" && {
  flexDirection: "row-reverse",
  marginLeft: 16,
  // used for row presentation of radio/checkbox
  marginRight: -11
}, t.labelPlacement === "top" && {
  flexDirection: "column-reverse",
  marginLeft: 16
}, t.labelPlacement === "bottom" && {
  flexDirection: "column",
  marginLeft: 16
}, {
  [`& .${Ln.label}`]: {
    [`&.${Ln.disabled}`]: {
      color: (e.vars || e).palette.text.disabled
    }
  }
})), Dh = W("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Ln.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), hl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i;
  const s = pe({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    className: a,
    componentsProps: l = {},
    control: c,
    disabled: u,
    disableTypography: d,
    label: m,
    labelPlacement: f = "end",
    required: T,
    slotProps: g = {}
  } = s, p = q(s, kh), R = $t(), O = (r = u ?? c.props.disabled) != null ? r : R == null ? void 0 : R.disabled, S = T ?? c.props.required, y = {
    disabled: O,
    required: S
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach(($) => {
    typeof c.props[$] > "u" && typeof s[$] < "u" && (y[$] = s[$]);
  });
  const C = kt({
    props: s,
    muiFormControl: R,
    states: ["error"]
  }), v = b({}, s, {
    disabled: O,
    labelPlacement: f,
    required: S,
    error: C.error
  }), N = Mh(v), h = (i = g.typography) != null ? i : l.typography;
  let P = m;
  return P != null && P.type !== We && !d && (P = /* @__PURE__ */ x(We, b({
    component: "span"
  }, h, {
    className: J(N.label, h == null ? void 0 : h.className),
    children: P
  }))), /* @__PURE__ */ se(Ah, b({
    className: J(N.root, a),
    ownerState: v,
    ref: o
  }, p, {
    children: [/* @__PURE__ */ E.cloneElement(c, y), S ? /* @__PURE__ */ se(ml, {
      display: "block",
      children: [P, /* @__PURE__ */ se(Dh, {
        ownerState: v,
        "aria-hidden": !0,
        className: N.asterisk,
        children: [" ", "*"]
      })]
    }) : P]
  }));
});
process.env.NODE_ENV !== "production" && (hl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component appears selected.
   */
  checked: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: n.shape({
    typography: n.object
  }),
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: n.element.isRequired,
  /**
   * If `true`, the control is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: n.bool,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: at,
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: n.node,
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement: n.oneOf(["bottom", "end", "start", "top"]),
  /**
   * @ignore
   */
  name: n.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: n.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    typography: n.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The value of the component.
   */
  value: n.any
});
function Fh(e) {
  return ce("MuiFormGroup", e);
}
ae("MuiFormGroup", ["root", "row", "error"]);
const Lh = ["className", "row"], jh = (e) => {
  const {
    classes: t,
    row: o,
    error: r
  } = e;
  return ue({
    root: ["root", o && "row", r && "error"]
  }, Fh, t);
}, Bh = W("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.row && t.row];
  }
})(({
  ownerState: e
}) => b({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap"
}, e.row && {
  flexDirection: "row"
})), bl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiFormGroup"
  }), {
    className: i,
    row: s = !1
  } = r, a = q(r, Lh), l = $t(), c = kt({
    props: r,
    muiFormControl: l,
    states: ["error"]
  }), u = b({}, r, {
    row: s,
    error: c.error
  }), d = jh(u);
  return /* @__PURE__ */ x(Bh, b({
    className: J(d.root, i),
    ownerState: u,
    ref: o
  }, a));
});
process.env.NODE_ENV !== "production" && (bl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Display group of elements in a compact row.
   * @default false
   */
  row: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function zh(e) {
  return ce("MuiFormHelperText", e);
}
const Es = ae("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Ts;
const Vh = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], Wh = (e) => {
  const {
    classes: t,
    contained: o,
    size: r,
    disabled: i,
    error: s,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", i && "disabled", s && "error", r && `size${X(r)}`, o && "contained", l && "focused", a && "filled", c && "required"]
  };
  return ue(u, zh, t);
}, Uh = W("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.size && t[`size${X(o.size)}`], o.contained && t.contained, o.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Es.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Es.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), gl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: s,
    component: a = "p"
  } = r, l = q(r, Vh), c = $t(), u = kt({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), d = b({}, r, {
    component: a,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), m = Wh(d);
  return /* @__PURE__ */ x(Uh, b({
    as: a,
    ownerState: d,
    className: J(m.root, s),
    ref: o
  }, l, {
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Ts || (Ts = /* @__PURE__ */ x("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  }));
});
process.env.NODE_ENV !== "production" && (gl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined", "standard"]), n.string])
});
function qh(e) {
  return ce("MuiFormLabel", e);
}
const zn = ae("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Gh = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], Hh = (e) => {
  const {
    classes: t,
    color: o,
    focused: r,
    disabled: i,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${X(o)}`, i && "disabled", s && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return ue(c, qh, t);
}, Yh = W("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => b({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => b({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${zn.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${zn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${zn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Kh = W("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${zn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), yl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: s,
    component: a = "label"
  } = r, l = q(r, Gh), c = $t(), u = kt({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), d = b({}, r, {
    color: u.color || "primary",
    component: a,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), m = Hh(d);
  return /* @__PURE__ */ se(Yh, b({
    as: a,
    ownerState: d,
    className: J(m.root, s),
    ref: o
  }, l, {
    children: [i, u.required && /* @__PURE__ */ se(Kh, {
      ownerState: d,
      "aria-hidden": !0,
      className: m.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (yl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: n.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const jr = /* @__PURE__ */ E.createContext();
process.env.NODE_ENV !== "production" && (jr.displayName = "GridContext");
function Xh(e) {
  return ce("MuiGrid", e);
}
const Jh = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Zh = ["column-reverse", "column", "row-reverse", "row"], Qh = ["nowrap", "wrap-reverse", "wrap"], Pn = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], Gn = ae("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...Jh.map((e) => `spacing-xs-${e}`),
  // direction values
  ...Zh.map((e) => `direction-xs-${e}`),
  // wrap values
  ...Qh.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...Pn.map((e) => `grid-xs-${e}`),
  ...Pn.map((e) => `grid-sm-${e}`),
  ...Pn.map((e) => `grid-md-${e}`),
  ...Pn.map((e) => `grid-lg-${e}`),
  ...Pn.map((e) => `grid-xl-${e}`)
]), eb = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function dn(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function tb({
  theme: e,
  ownerState: t
}) {
  let o;
  return e.breakpoints.keys.reduce((r, i) => {
    let s = {};
    if (t[i] && (o = t[i]), !o)
      return r;
    if (o === !0)
      s = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    else if (o === "auto")
      s = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    else {
      const a = Bt({
        values: t.columns,
        breakpoints: e.breakpoints.values
      }), l = typeof a == "object" ? a[i] : a;
      if (l == null)
        return r;
      const c = `${Math.round(o / l * 1e8) / 1e6}%`;
      let u = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const d = e.spacing(t.columnSpacing);
        if (d !== "0px") {
          const m = `calc(${c} + ${dn(d)})`;
          u = {
            flexBasis: m,
            maxWidth: m
          };
        }
      }
      s = b({
        flexBasis: c,
        flexGrow: 0,
        maxWidth: c
      }, u);
    }
    return e.breakpoints.values[i] === 0 ? Object.assign(r, s) : r[e.breakpoints.up(i)] = s, r;
  }, {});
}
function nb({
  theme: e,
  ownerState: t
}) {
  const o = Bt({
    values: t.direction,
    breakpoints: e.breakpoints.values
  });
  return Ke({
    theme: e
  }, o, (r) => {
    const i = {
      flexDirection: r
    };
    return r.indexOf("column") === 0 && (i[`& > .${Gn.item}`] = {
      maxWidth: "none"
    }), i;
  });
}
function vl({
  breakpoints: e,
  values: t
}) {
  let o = "";
  Object.keys(t).forEach((i) => {
    o === "" && t[i] !== 0 && (o = i);
  });
  const r = Object.keys(e).sort((i, s) => e[i] - e[s]);
  return r.slice(0, r.indexOf(o));
}
function ob({
  theme: e,
  ownerState: t
}) {
  const {
    container: o,
    rowSpacing: r
  } = t;
  let i = {};
  if (o && r !== 0) {
    const s = Bt({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof s == "object" && (a = vl({
      breakpoints: e.breakpoints.values,
      values: s
    })), i = Ke({
      theme: e
    }, s, (l, c) => {
      var u;
      const d = e.spacing(l);
      return d !== "0px" ? {
        marginTop: `-${dn(d)}`,
        [`& > .${Gn.item}`]: {
          paddingTop: dn(d)
        }
      } : (u = a) != null && u.includes(c) ? {} : {
        marginTop: 0,
        [`& > .${Gn.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return i;
}
function rb({
  theme: e,
  ownerState: t
}) {
  const {
    container: o,
    columnSpacing: r
  } = t;
  let i = {};
  if (o && r !== 0) {
    const s = Bt({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof s == "object" && (a = vl({
      breakpoints: e.breakpoints.values,
      values: s
    })), i = Ke({
      theme: e
    }, s, (l, c) => {
      var u;
      const d = e.spacing(l);
      return d !== "0px" ? {
        width: `calc(100% + ${dn(d)})`,
        marginLeft: `-${dn(d)}`,
        [`& > .${Gn.item}`]: {
          paddingLeft: dn(d)
        }
      } : (u = a) != null && u.includes(c) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${Gn.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return i;
}
function ib(e, t, o = {}) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [o[`spacing-xs-${String(e)}`]];
  const r = [];
  return t.forEach((i) => {
    const s = e[i];
    Number(s) > 0 && r.push(o[`spacing-${i}-${String(s)}`]);
  }), r;
}
const sb = W("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      container: r,
      direction: i,
      item: s,
      spacing: a,
      wrap: l,
      zeroMinWidth: c,
      breakpoints: u
    } = o;
    let d = [];
    r && (d = ib(a, u, t));
    const m = [];
    return u.forEach((f) => {
      const T = o[f];
      T && m.push(t[`grid-${f}-${String(T)}`]);
    }), [t.root, r && t.container, s && t.item, c && t.zeroMinWidth, ...d, i !== "row" && t[`direction-xs-${String(i)}`], l !== "wrap" && t[`wrap-xs-${String(l)}`], ...m];
  }
})(({
  ownerState: e
}) => b({
  boxSizing: "border-box"
}, e.container && {
  display: "flex",
  flexWrap: "wrap",
  width: "100%"
}, e.item && {
  margin: 0
  // For instance, it's useful when used with a `figure` element.
}, e.zeroMinWidth && {
  minWidth: 0
}, e.wrap !== "wrap" && {
  flexWrap: e.wrap
}), nb, ob, rb, tb);
function ab(e, t) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [`spacing-xs-${String(e)}`];
  const o = [];
  return t.forEach((r) => {
    const i = e[r];
    if (Number(i) > 0) {
      const s = `spacing-${r}-${String(i)}`;
      o.push(s);
    }
  }), o;
}
const lb = (e) => {
  const {
    classes: t,
    container: o,
    direction: r,
    item: i,
    spacing: s,
    wrap: a,
    zeroMinWidth: l,
    breakpoints: c
  } = e;
  let u = [];
  o && (u = ab(s, c));
  const d = [];
  c.forEach((f) => {
    const T = e[f];
    T && d.push(`grid-${f}-${String(T)}`);
  });
  const m = {
    root: ["root", o && "container", i && "item", l && "zeroMinWidth", ...u, r !== "row" && `direction-xs-${String(r)}`, a !== "wrap" && `wrap-xs-${String(a)}`, ...d]
  };
  return ue(m, Xh, t);
}, Re = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: i
  } = lt(), s = Xn(r), {
    className: a,
    columns: l,
    columnSpacing: c,
    component: u = "div",
    container: d = !1,
    direction: m = "row",
    item: f = !1,
    rowSpacing: T,
    spacing: g = 0,
    wrap: p = "wrap",
    zeroMinWidth: R = !1
  } = s, O = q(s, eb), S = T || g, y = c || g, C = E.useContext(jr), v = d ? l || 12 : C, N = {}, h = b({}, O);
  i.keys.forEach((w) => {
    O[w] != null && (N[w] = O[w], delete h[w]);
  });
  const P = b({}, s, {
    columns: v,
    container: d,
    direction: m,
    item: f,
    rowSpacing: S,
    columnSpacing: y,
    wrap: p,
    zeroMinWidth: R,
    spacing: g
  }, N, {
    breakpoints: i.keys
  }), $ = lb(P);
  return /* @__PURE__ */ x(jr.Provider, {
    value: v,
    children: /* @__PURE__ */ x(sb, b({
      ownerState: P,
      className: J($.root, a),
      as: u,
      ref: o
    }, h))
  });
});
process.env.NODE_ENV !== "production" && (Re.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The number of columns.
   * @default 12
   */
  columns: n.oneOfType([n.arrayOf(n.number), n.number, n.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: n.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: n.oneOfType([n.oneOf(["column-reverse", "column", "row-reverse", "row"]), n.arrayOf(n.oneOf(["column-reverse", "column", "row-reverse", "row"])), n.object]),
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: n.bool,
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: n.oneOfType([n.oneOf(["auto"]), n.number, n.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: n.oneOfType([n.oneOf(["auto"]), n.number, n.bool]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: n.oneOfType([n.oneOf(["auto"]), n.number, n.bool]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: n.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: n.oneOfType([n.oneOf(["auto"]), n.number, n.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: n.oneOfType([n.oneOf(["auto"]), n.number, n.bool]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: n.bool
});
if (process.env.NODE_ENV !== "production") {
  const e = Ma("Grid", Re);
  Re.propTypes = b({}, Re.propTypes, {
    direction: e("container"),
    lg: e("item"),
    md: e("item"),
    sm: e("item"),
    spacing: e("container"),
    wrap: e("container"),
    xs: e("item"),
    zeroMinWidth: e("item")
  });
}
const cb = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Br(e) {
  return `scale(${e}, ${e ** 2})`;
}
const ub = {
  entering: {
    opacity: 1,
    transform: Br(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Or = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), nr = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: s,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: m,
    onExited: f,
    onExiting: T,
    style: g,
    timeout: p = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: R = ct
  } = t, O = q(t, cb), S = Go(), y = E.useRef(), C = lt(), v = E.useRef(null), N = ke(v, Ut(s), o), h = (D) => (L) => {
    if (D) {
      const z = v.current;
      L === void 0 ? D(z) : D(z, L);
    }
  }, P = h(d), $ = h((D, L) => {
    ui(D);
    const {
      duration: z,
      delay: M,
      easing: H
    } = _t({
      style: g,
      timeout: p,
      easing: a
    }, {
      mode: "enter"
    });
    let k;
    p === "auto" ? (k = C.transitions.getAutoHeightDuration(D.clientHeight), y.current = k) : k = z, D.style.transition = [C.transitions.create("opacity", {
      duration: k,
      delay: M
    }), C.transitions.create("transform", {
      duration: Or ? k : k * 0.666,
      delay: M,
      easing: H
    })].join(","), c && c(D, L);
  }), w = h(u), I = h(T), F = h((D) => {
    const {
      duration: L,
      delay: z,
      easing: M
    } = _t({
      style: g,
      timeout: p,
      easing: a
    }, {
      mode: "exit"
    });
    let H;
    p === "auto" ? (H = C.transitions.getAutoHeightDuration(D.clientHeight), y.current = H) : H = L, D.style.transition = [C.transitions.create("opacity", {
      duration: H,
      delay: z
    }), C.transitions.create("transform", {
      duration: Or ? H : H * 0.666,
      delay: Or ? z : z || H * 0.333,
      easing: M
    })].join(","), D.style.opacity = 0, D.style.transform = Br(0.75), m && m(D);
  }), A = h(f);
  return /* @__PURE__ */ x(R, b({
    appear: i,
    in: l,
    nodeRef: v,
    onEnter: $,
    onEntered: w,
    onEntering: P,
    onExit: F,
    onExited: A,
    onExiting: I,
    addEndListener: (D) => {
      p === "auto" && S.start(y.current || 0, D), r && r(v.current, D);
    },
    timeout: p === "auto" ? null : p
  }, O, {
    children: (D, L) => /* @__PURE__ */ E.cloneElement(s, b({
      style: b({
        opacity: 0,
        transform: Br(0.75),
        visibility: D === "exited" && !l ? "hidden" : void 0
      }, ub[D], g, s.props.style),
      ref: N
    }, L))
  }));
});
process.env.NODE_ENV !== "production" && (nr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: Wt.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
nr.muiSupportAuto = !0;
const db = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], pb = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, i = ue({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, fm, t);
  return b({}, t, i);
}, fb = W(Zo, {
  shouldForwardProp: (e) => Ue(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...Xo(e, t), !o.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), b({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${$n.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${$n.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${$n.disabled}, .${$n.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${$n.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), mb = W(Qo, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Jo
})({}), or = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, s, a;
  const l = pe({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: m = !1,
    inputComponent: f = "input",
    multiline: T = !1,
    slotProps: g,
    slots: p = {},
    type: R = "text"
  } = l, O = q(l, db), S = pb(l), C = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, v = g ?? d ? qe(g ?? d, C) : C, N = (r = (i = p.root) != null ? i : u.Root) != null ? r : fb, h = (s = (a = p.input) != null ? a : u.Input) != null ? s : mb;
  return /* @__PURE__ */ x(er, b({
    slots: {
      root: N,
      input: h
    },
    slotProps: v,
    fullWidth: m,
    inputComponent: f,
    multiline: T,
    ref: o,
    type: R
  }, O, {
    classes: S
  }));
});
process.env.NODE_ENV !== "production" && (or.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: at,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
or.muiName = "Input";
function hb(e) {
  return ce("MuiInputLabel", e);
}
ae("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const bb = ["disableAnimation", "margin", "shrink", "variant", "className"], gb = (e) => {
  const {
    classes: t,
    formControl: o,
    size: r,
    shrink: i,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", o && "formControl", !s && "animated", i && "shrink", r && r !== "normal" && `size${X(r)}`, a],
    asterisk: [l && "asterisk"]
  }, u = ue(c, hb, t);
  return b({}, t, u);
}, yb = W(yl, {
  shouldForwardProp: (e) => Ue(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${zn.asterisk}`]: t.asterisk
    }, t.root, o.formControl && t.formControl, o.size === "small" && t.sizeSmall, o.shrink && t.shrink, !o.disableAnimation && t.animated, o.focused && t.focused, t[o.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, t.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !t.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, t.variant === "filled" && b({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, t.shrink && b({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && b({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), mi = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    shrink: s,
    className: a
  } = r, l = q(r, bb), c = $t();
  let u = s;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = kt({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required", "focused"]
  }), m = b({}, r, {
    disableAnimation: i,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }), f = gb(m);
  return /* @__PURE__ */ x(yb, b({
    "data-shrink": u,
    ownerState: m,
    ref: o,
    className: J(f.root, a)
  }, l, {
    classes: f
  }));
});
process.env.NODE_ENV !== "production" && (mi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: n.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: n.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: n.oneOfType([n.oneOf(["normal", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const yt = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (yt.displayName = "ListContext");
function vb(e) {
  return ce("MuiList", e);
}
ae("MuiList", ["root", "padding", "dense", "subheader"]);
const xb = ["children", "className", "component", "dense", "disablePadding", "subheader"], Eb = (e) => {
  const {
    classes: t,
    disablePadding: o,
    dense: r,
    subheader: i
  } = e;
  return ue({
    root: ["root", !o && "padding", r && "dense", i && "subheader"]
  }, vb, t);
}, Tb = W("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disablePadding && t.padding, o.dense && t.dense, o.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => b({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), xl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: s,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = q(r, xb), m = E.useMemo(() => ({
    dense: l
  }), [l]), f = b({}, r, {
    component: a,
    dense: l,
    disablePadding: c
  }), T = Eb(f);
  return /* @__PURE__ */ x(yt.Provider, {
    value: m,
    children: /* @__PURE__ */ se(Tb, b({
      as: a,
      className: J(T.root, s),
      ref: o,
      ownerState: f
    }, d, {
      children: [u, i]
    }))
  });
});
process.env.NODE_ENV !== "production" && (xl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: n.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function Cb(e) {
  return ce("MuiListItem", e);
}
const nn = ae("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]);
function Ob(e) {
  return ce("MuiListItemButton", e);
}
const on = ae("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), Rb = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"], Sb = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.alignItems === "flex-start" && t.alignItemsFlexStart, o.divider && t.divider, !o.disableGutters && t.gutters];
}, $b = (e) => {
  const {
    alignItems: t,
    classes: o,
    dense: r,
    disabled: i,
    disableGutters: s,
    divider: a,
    selected: l
  } = e, u = ue({
    root: ["root", r && "dense", !s && "gutters", a && "divider", i && "disabled", t === "flex-start" && "alignItemsFlexStart", l && "selected"]
  }, Ob, o);
  return b({}, o, u);
}, Pb = W(St, {
  shouldForwardProp: (e) => Ue(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: Sb
})(({
  theme: e,
  ownerState: t
}) => b({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minWidth: 0,
  boxSizing: "border-box",
  textAlign: "left",
  paddingTop: 8,
  paddingBottom: 8,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${on.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${on.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${on.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${on.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${on.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, t.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.dense && {
  paddingTop: 4,
  paddingBottom: 4
})), wb = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiListItemButton"
  }), {
    alignItems: i = "center",
    autoFocus: s = !1,
    component: a = "div",
    children: l,
    dense: c = !1,
    disableGutters: u = !1,
    divider: d = !1,
    focusVisibleClassName: m,
    selected: f = !1,
    className: T
  } = r, g = q(r, Rb), p = E.useContext(yt), R = E.useMemo(() => ({
    dense: c || p.dense || !1,
    alignItems: i,
    disableGutters: u
  }), [i, p.dense, c, u]), O = E.useRef(null);
  it(() => {
    s && (O.current ? O.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [s]);
  const S = b({}, r, {
    alignItems: i,
    dense: R.dense,
    disableGutters: u,
    divider: d,
    selected: f
  }), y = $b(S), C = ke(O, o);
  return /* @__PURE__ */ x(yt.Provider, {
    value: R,
    children: /* @__PURE__ */ x(Pb, b({
      ref: C,
      href: g.href || g.to,
      component: (g.href || g.to) && a === "div" ? "button" : a,
      focusVisibleClassName: J(y.focusVisible, m),
      ownerState: S,
      className: J(y.root, T)
    }, g, {
      classes: y,
      children: l
    }))
  });
});
process.env.NODE_ENV !== "production" && (wb.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: n.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  href: n.string,
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function Nb(e) {
  return ce("MuiListItemSecondaryAction", e);
}
ae("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const _b = ["className"], Ib = (e) => {
  const {
    disableGutters: t,
    classes: o
  } = e;
  return ue({
    root: ["root", t && "disableGutters"]
  }, Nb, o);
}, kb = W("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.disableGutters && t.disableGutters];
  }
})(({
  ownerState: e
}) => b({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, e.disableGutters && {
  right: 0
})), hi = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: i
  } = r, s = q(r, _b), a = E.useContext(yt), l = b({}, r, {
    disableGutters: a.disableGutters
  }), c = Ib(l);
  return /* @__PURE__ */ x(kb, b({
    className: J(c.root, i),
    ownerState: l,
    ref: o
  }, s));
});
process.env.NODE_ENV !== "production" && (hi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
hi.muiName = "ListItemSecondaryAction";
const Mb = ["className"], Ab = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], Db = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.alignItems === "flex-start" && t.alignItemsFlexStart, o.divider && t.divider, !o.disableGutters && t.gutters, !o.disablePadding && t.padding, o.button && t.button, o.hasSecondaryAction && t.secondaryAction];
}, Fb = (e) => {
  const {
    alignItems: t,
    button: o,
    classes: r,
    dense: i,
    disabled: s,
    disableGutters: a,
    disablePadding: l,
    divider: c,
    hasSecondaryAction: u,
    selected: d
  } = e;
  return ue({
    root: ["root", i && "dense", !a && "gutters", !l && "padding", c && "divider", s && "disabled", o && "button", t === "flex-start" && "alignItemsFlexStart", u && "secondaryAction", d && "selected"],
    container: ["container"]
  }, Cb, r);
}, Lb = W("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: Db
})(({
  theme: e,
  ownerState: t
}) => b({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !t.disablePadding && b({
  paddingTop: 8,
  paddingBottom: 8
}, t.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!t.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!t.secondaryAction && {
  [`& > .${on.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${nn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${nn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${nn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${nn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, t.button && {
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${nn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  }
}, t.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
})), jb = W("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), Bb = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiListItem"
  }), {
    alignItems: i = "center",
    autoFocus: s = !1,
    button: a = !1,
    children: l,
    className: c,
    component: u,
    components: d = {},
    componentsProps: m = {},
    ContainerComponent: f = "li",
    ContainerProps: {
      className: T
    } = {},
    dense: g = !1,
    disabled: p = !1,
    disableGutters: R = !1,
    disablePadding: O = !1,
    divider: S = !1,
    focusVisibleClassName: y,
    secondaryAction: C,
    selected: v = !1,
    slotProps: N = {},
    slots: h = {}
  } = r, P = q(r.ContainerProps, Mb), $ = q(r, Ab), w = E.useContext(yt), I = E.useMemo(() => ({
    dense: g || w.dense || !1,
    alignItems: i,
    disableGutters: R
  }), [i, w.dense, g, R]), F = E.useRef(null);
  it(() => {
    s && (F.current ? F.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [s]);
  const A = E.Children.toArray(l), j = A.length && cn(A[A.length - 1], ["ListItemSecondaryAction"]), D = b({}, r, {
    alignItems: i,
    autoFocus: s,
    button: a,
    dense: I.dense,
    disabled: p,
    disableGutters: R,
    disablePadding: O,
    divider: S,
    hasSecondaryAction: j,
    selected: v
  }), L = Fb(D), z = ke(F, o), M = h.root || d.Root || Lb, H = N.root || m.root || {}, k = b({
    className: J(L.root, H.className, c),
    disabled: p
  }, $);
  let V = u || "li";
  return a && (k.component = u || "div", k.focusVisibleClassName = J(nn.focusVisible, y), V = St), j ? (V = !k.component && !u ? "div" : V, f === "li" && (V === "li" ? V = "div" : k.component === "li" && (k.component = "div")), /* @__PURE__ */ x(yt.Provider, {
    value: I,
    children: /* @__PURE__ */ se(jb, b({
      as: f,
      className: J(L.container, T),
      ref: z,
      ownerState: D
    }, P, {
      children: [/* @__PURE__ */ x(M, b({}, H, !gn(M) && {
        as: V,
        ownerState: b({}, D, H.ownerState)
      }, k, {
        children: A
      })), A.pop()]
    }))
  })) : /* @__PURE__ */ x(yt.Provider, {
    value: I,
    children: /* @__PURE__ */ se(M, b({}, H, {
      as: V,
      ref: z
    }, !gn(M) && {
      ownerState: b({}, D, H.ownerState)
    }, k, {
      children: [A, C && /* @__PURE__ */ x(hi, {
        children: C
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Bb.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: n.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  autoFocus: n.bool,
  /**
   * If `true`, the list item is a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  button: n.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: Rt(n.node, (e) => {
    const t = E.Children.toArray(e.children);
    let o = -1;
    for (let r = t.length - 1; r >= 0; r -= 1) {
      const i = t[r];
      if (cn(i, ["ListItemSecondaryAction"])) {
        o = r;
        break;
      }
    }
    return o !== -1 && o !== t.length - 1 ? new Error("MUI: You used an element after ListItemSecondaryAction. For ListItem to detect that it has a secondary action you must pass it as the last child to ListItem.") : null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    root: n.object
  }),
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated
   */
  ContainerComponent: Jn,
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated
   */
  ContainerProps: n.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  disabled: n.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: n.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: n.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: n.node,
  /**
   * Use to apply selected styling.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  selected: n.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const Cs = ae("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Os = ae("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), zb = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Rr(e, t, o) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild;
}
function Rs(e, t, o) {
  return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild;
}
function El(e, t) {
  if (t === void 0)
    return !0;
  let o = e.innerText;
  return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : t.repeating ? o[0] === t.keys[0] : o.indexOf(t.keys.join("")) === 0;
}
function wn(e, t, o, r, i, s) {
  let a = !1, l = i(e, t, t ? o : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !El(l, s) || c)
      l = i(e, l, o);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Tl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: i = !1,
    autoFocusItem: s = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: m = "selectedMenu"
  } = t, f = q(t, zb), T = E.useRef(null), g = E.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  it(() => {
    i && T.current.focus();
  }, [i]), E.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (y, {
      direction: C
    }) => {
      const v = !T.current.style.width;
      if (y.clientHeight < T.current.clientHeight && v) {
        const N = `${Da(Be(y))}px`;
        T.current.style[C === "rtl" ? "paddingLeft" : "paddingRight"] = N, T.current.style.width = `calc(100% + ${N})`;
      }
      return T.current;
    }
  }), []);
  const p = (y) => {
    const C = T.current, v = y.key, N = Be(C).activeElement;
    if (v === "ArrowDown")
      y.preventDefault(), wn(C, N, u, c, Rr);
    else if (v === "ArrowUp")
      y.preventDefault(), wn(C, N, u, c, Rs);
    else if (v === "Home")
      y.preventDefault(), wn(C, null, u, c, Rr);
    else if (v === "End")
      y.preventDefault(), wn(C, null, u, c, Rs);
    else if (v.length === 1) {
      const h = g.current, P = v.toLowerCase(), $ = performance.now();
      h.keys.length > 0 && ($ - h.lastTime > 500 ? (h.keys = [], h.repeating = !0, h.previousKeyMatched = !0) : h.repeating && P !== h.keys[0] && (h.repeating = !1)), h.lastTime = $, h.keys.push(P);
      const w = N && !h.repeating && El(N, h);
      h.previousKeyMatched && (w || wn(C, N, !1, c, Rr, h)) ? y.preventDefault() : h.previousKeyMatched = !1;
    }
    d && d(y);
  }, R = ke(T, o);
  let O = -1;
  E.Children.forEach(a, (y, C) => {
    if (!/* @__PURE__ */ E.isValidElement(y)) {
      O === C && (O += 1, O >= a.length && (O = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && mn.isFragment(y) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), y.props.disabled || (m === "selectedMenu" && y.props.selected || O === -1) && (O = C), O === C && (y.props.disabled || y.props.muiSkipListHighlight || y.type.muiSkipListHighlight) && (O += 1, O >= a.length && (O = -1));
  });
  const S = E.Children.map(a, (y, C) => {
    if (C === O) {
      const v = {};
      return s && (v.autoFocus = !0), y.props.tabIndex === void 0 && m === "selectedMenu" && (v.tabIndex = 0), /* @__PURE__ */ E.cloneElement(y, v);
    }
    return y;
  });
  return /* @__PURE__ */ x(xl, b({
    role: "menu",
    ref: R,
    className: l,
    onKeyDown: p,
    tabIndex: i ? 0 : -1
  }, f, {
    children: S
  }));
});
process.env.NODE_ENV !== "production" && (Tl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: n.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: n.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: n.bool,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
function Vb(e) {
  return ce("MuiPopover", e);
}
ae("MuiPopover", ["root", "paper"]);
const Wb = ["onEntering"], Ub = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], qb = ["slotProps"];
function Ss(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o;
}
function $s(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o;
}
function Ps(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function go(e) {
  return typeof e == "function" ? e() : e;
}
const Gb = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    paper: ["paper"]
  }, Vb, t);
}, Hb = W(fi, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Cl = W(qt, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ol = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, s;
  const a = pe({
    props: t,
    name: "MuiPopover"
  }), {
    action: l,
    anchorEl: c,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: d,
    anchorReference: m = "anchorEl",
    children: f,
    className: T,
    container: g,
    elevation: p = 8,
    marginThreshold: R = 16,
    open: O,
    PaperProps: S = {},
    slots: y,
    slotProps: C,
    transformOrigin: v = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: N = nr,
    transitionDuration: h = "auto",
    TransitionProps: {
      onEntering: P
    } = {},
    disableScrollLock: $ = !1
  } = a, w = q(a.TransitionProps, Wb), I = q(a, Ub), F = (r = C == null ? void 0 : C.paper) != null ? r : S, A = E.useRef(), j = ke(A, F.ref), D = b({}, a, {
    anchorOrigin: u,
    anchorReference: m,
    elevation: p,
    marginThreshold: R,
    externalPaperSlotProps: F,
    transformOrigin: v,
    TransitionComponent: N,
    transitionDuration: h,
    TransitionProps: w
  }), L = Gb(D), z = E.useCallback(() => {
    if (m === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const re = go(c), oe = re && re.nodeType === 1 ? re : Be(A.current).body, de = oe.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const De = oe.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && De.top === 0 && De.left === 0 && De.right === 0 && De.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: de.top + Ss(de, u.vertical),
      left: de.left + $s(de, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, m]), M = E.useCallback((re) => ({
    vertical: Ss(re, v.vertical),
    horizontal: $s(re, v.horizontal)
  }), [v.horizontal, v.vertical]), H = E.useCallback((re) => {
    const oe = {
      width: re.offsetWidth,
      height: re.offsetHeight
    }, de = M(oe);
    if (m === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ps(de)
      };
    const De = z();
    let Fe = De.top - de.vertical, Ge = De.left - de.horizontal;
    const Xe = Fe + oe.height, Qe = Ge + oe.width, Pe = xt(go(c)), et = Pe.innerHeight - R, He = Pe.innerWidth - R;
    if (R !== null && Fe < R) {
      const Se = Fe - R;
      Fe -= Se, de.vertical += Se;
    } else if (R !== null && Xe > et) {
      const Se = Xe - et;
      Fe -= Se, de.vertical += Se;
    }
    if (process.env.NODE_ENV !== "production" && oe.height > et && oe.height && et && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${oe.height - et}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), R !== null && Ge < R) {
      const Se = Ge - R;
      Ge -= Se, de.horizontal += Se;
    } else if (Qe > He) {
      const Se = Qe - He;
      Ge -= Se, de.horizontal += Se;
    }
    return {
      top: `${Math.round(Fe)}px`,
      left: `${Math.round(Ge)}px`,
      transformOrigin: Ps(de)
    };
  }, [c, m, z, M, R]), [k, V] = E.useState(O), ee = E.useCallback(() => {
    const re = A.current;
    if (!re)
      return;
    const oe = H(re);
    oe.top !== null && (re.style.top = oe.top), oe.left !== null && (re.style.left = oe.left), re.style.transformOrigin = oe.transformOrigin, V(!0);
  }, [H]);
  E.useEffect(() => ($ && window.addEventListener("scroll", ee), () => window.removeEventListener("scroll", ee)), [c, $, ee]);
  const Z = (re, oe) => {
    P && P(re, oe), ee();
  }, U = () => {
    V(!1);
  };
  E.useEffect(() => {
    O && ee();
  }), E.useImperativeHandle(l, () => O ? {
    updatePosition: () => {
      ee();
    }
  } : null, [O, ee]), E.useEffect(() => {
    if (!O)
      return;
    const re = Uo(() => {
      ee();
    }), oe = xt(c);
    return oe.addEventListener("resize", re), () => {
      re.clear(), oe.removeEventListener("resize", re);
    };
  }, [c, O, ee]);
  let Q = h;
  h === "auto" && !N.muiSupportAuto && (Q = void 0);
  const B = g || (c ? Be(go(c)).body : void 0), Y = (i = y == null ? void 0 : y.root) != null ? i : Hb, G = (s = y == null ? void 0 : y.paper) != null ? s : Cl, K = Vt({
    elementType: G,
    externalSlotProps: b({}, F, {
      style: k ? F.style : b({}, F.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: p,
      ref: j
    },
    ownerState: D,
    className: J(L.paper, F == null ? void 0 : F.className)
  }), ne = Vt({
    elementType: Y,
    externalSlotProps: (C == null ? void 0 : C.root) || {},
    externalForwardedProps: I,
    additionalProps: {
      ref: o,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: B,
      open: O
    },
    ownerState: D,
    className: J(L.root, T)
  }), {
    slotProps: te
  } = ne, _ = q(ne, qb);
  return /* @__PURE__ */ x(Y, b({}, _, !gn(Y) && {
    slotProps: te,
    disableScrollLock: $
  }, {
    children: /* @__PURE__ */ x(N, b({
      appear: !0,
      in: O,
      onEntering: Z,
      onExited: U,
      timeout: Q
    }, w, {
      children: /* @__PURE__ */ x(G, b({}, K, {
        children: f
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Ol.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: at,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Rt(n.oneOfType([hn, n.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = go(e.anchorEl);
      if (t && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: n.shape({
    left: n.number.isRequired,
    top: n.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: n.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([hn, n.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Nt,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: n.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: n.shape({
    component: Jn
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: n.shape({
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.shape({
    paper: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: n.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: n.object
});
function Yb(e) {
  return ce("MuiMenu", e);
}
ae("MuiMenu", ["root", "paper", "list"]);
const Kb = ["onEntering"], Xb = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], Jb = {
  vertical: "top",
  horizontal: "right"
}, Zb = {
  vertical: "top",
  horizontal: "left"
}, Qb = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Yb, t);
}, eg = W(Ol, {
  shouldForwardProp: (e) => Ue(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), tg = W(Cl, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), ng = W(Tl, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), rr = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i;
  const s = pe({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: a = !0,
    children: l,
    className: c,
    disableAutoFocusItem: u = !1,
    MenuListProps: d = {},
    onClose: m,
    open: f,
    PaperProps: T = {},
    PopoverClasses: g,
    transitionDuration: p = "auto",
    TransitionProps: {
      onEntering: R
    } = {},
    variant: O = "selectedMenu",
    slots: S = {},
    slotProps: y = {}
  } = s, C = q(s.TransitionProps, Kb), v = q(s, Xb), N = ri(), h = b({}, s, {
    autoFocus: a,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: R,
    PaperProps: T,
    transitionDuration: p,
    TransitionProps: C,
    variant: O
  }), P = Qb(h), $ = a && !u && f, w = E.useRef(null), I = (M, H) => {
    w.current && w.current.adjustStyleForScrollbar(M, {
      direction: N ? "rtl" : "ltr"
    }), R && R(M, H);
  }, F = (M) => {
    M.key === "Tab" && (M.preventDefault(), m && m(M, "tabKeyDown"));
  };
  let A = -1;
  E.Children.map(l, (M, H) => {
    /* @__PURE__ */ E.isValidElement(M) && (process.env.NODE_ENV !== "production" && mn.isFragment(M) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), M.props.disabled || (O === "selectedMenu" && M.props.selected || A === -1) && (A = H));
  });
  const j = (r = S.paper) != null ? r : tg, D = (i = y.paper) != null ? i : T, L = Vt({
    elementType: S.root,
    externalSlotProps: y.root,
    ownerState: h,
    className: [P.root, c]
  }), z = Vt({
    elementType: j,
    externalSlotProps: D,
    ownerState: h,
    className: P.paper
  });
  return /* @__PURE__ */ x(eg, b({
    onClose: m,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: N ? "right" : "left"
    },
    transformOrigin: N ? Jb : Zb,
    slots: {
      paper: j,
      root: S.root
    },
    slotProps: {
      root: L,
      paper: z
    },
    open: f,
    ref: o,
    transitionDuration: p,
    TransitionProps: b({
      onEntering: I
    }, C),
    ownerState: h
  }, v, {
    classes: g,
    children: /* @__PURE__ */ x(ng, b({
      onKeyDown: F,
      actions: w,
      autoFocus: a && (A === -1 || u),
      autoFocusItem: $,
      variant: O
    }, d, {
      className: J(P.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (rr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: n.oneOfType([hn, n.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: n.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: n.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: n.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: n.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: n.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: n.shape({
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.shape({
    paper: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: n.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
function og(e) {
  return ce("MuiMenuItem", e);
}
const Nn = ae("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), rg = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], ig = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.divider && t.divider, !o.disableGutters && t.gutters];
}, sg = (e) => {
  const {
    disabled: t,
    dense: o,
    divider: r,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, c = ue({
    root: ["root", o && "dense", t && "disabled", !i && "gutters", r && "divider", s && "selected"]
  }, og, a);
  return b({}, a, c);
}, ag = W(St, {
  shouldForwardProp: (e) => Ue(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: ig
})(({
  theme: e,
  ownerState: t
}) => b({}, e.typography.body1, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, {
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Nn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Nn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Nn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Nn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Nn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${vs.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${vs.inset}`]: {
    marginLeft: 52
  },
  [`& .${Os.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Os.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Cs.root}`]: {
    minWidth: 36
  }
}, !t.dense && {
  [e.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, t.dense && b({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, e.typography.body2, {
  [`& .${Cs.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), Rl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: s = "li",
    dense: a = !1,
    divider: l = !1,
    disableGutters: c = !1,
    focusVisibleClassName: u,
    role: d = "menuitem",
    tabIndex: m,
    className: f
  } = r, T = q(r, rg), g = E.useContext(yt), p = E.useMemo(() => ({
    dense: a || g.dense || !1,
    disableGutters: c
  }), [g.dense, a, c]), R = E.useRef(null);
  it(() => {
    i && (R.current ? R.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const O = b({}, r, {
    dense: p.dense,
    divider: l,
    disableGutters: c
  }), S = sg(r), y = ke(R, o);
  let C;
  return r.disabled || (C = m !== void 0 ? m : -1), /* @__PURE__ */ x(yt.Provider, {
    value: p,
    children: /* @__PURE__ */ x(ag, b({
      ref: y,
      role: d,
      tabIndex: C,
      component: s,
      focusVisibleClassName: J(S.focusVisible, u),
      className: J(S.root, f)
    }, T, {
      ownerState: O,
      classes: S
    }))
  });
});
process.env.NODE_ENV !== "production" && (Rl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: n.bool,
  /**
   * @ignore
   */
  disabled: n.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  role: n.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number
});
function lg(e) {
  return ce("MuiNativeSelect", e);
}
const bi = ae("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), cg = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], ug = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", o, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${X(o)}`, s && "iconOpen", r && "disabled"]
  };
  return ue(l, lg, t);
}, Sl = ({
  ownerState: e,
  theme: t
}) => b({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": b({}, t.vars ? {
    backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${bi.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (t.vars || t).shape.borderRadius,
  "&:focus": {
    borderRadius: (t.vars || t).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), dg = W("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Ue,
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.select, t[o.variant], o.error && t.error, {
      [`&.${bi.multiple}`]: t.multiple
    }];
  }
})(Sl), $l = ({
  ownerState: e,
  theme: t
}) => b({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${bi.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), pg = W("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${X(o.variant)}`], o.open && t.iconOpen];
  }
})($l), Pl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    className: r,
    disabled: i,
    error: s,
    IconComponent: a,
    inputRef: l,
    variant: c = "standard"
  } = t, u = q(t, cg), d = b({}, t, {
    disabled: i,
    variant: c,
    error: s
  }), m = ug(d);
  return /* @__PURE__ */ se(E.Fragment, {
    children: [/* @__PURE__ */ x(dg, b({
      ownerState: d,
      className: J(m.select, r),
      disabled: i,
      ref: l || o
    }, u)), t.multiple ? null : /* @__PURE__ */ x(pg, {
      as: a,
      ownerState: d,
      className: m.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Pl.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: at,
  /**
   * @ignore
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
});
var ws;
const fg = ["children", "classes", "className", "label", "notched"], mg = W("fieldset", {
  shouldForwardProp: Ue
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), hg = W("legend", {
  shouldForwardProp: Ue
})(({
  ownerState: e,
  theme: t
}) => b({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: t.transitions.create("width", {
    duration: 150,
    easing: t.transitions.easing.easeOut
  })
}, e.withLabel && b({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: t.transitions.create("max-width", {
    duration: 50,
    easing: t.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: t.transitions.create("max-width", {
    duration: 100,
    easing: t.transitions.easing.easeOut,
    delay: 50
  })
})));
function wl(e) {
  const {
    className: t,
    label: o,
    notched: r
  } = e, i = q(e, fg), s = o != null && o !== "", a = b({}, e, {
    notched: r,
    withLabel: s
  });
  return /* @__PURE__ */ x(mg, b({
    "aria-hidden": !0,
    className: t,
    ownerState: a
  }, i, {
    children: /* @__PURE__ */ x(hg, {
      ownerState: a,
      children: s ? /* @__PURE__ */ x("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        ws || (ws = /* @__PURE__ */ x("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (wl.propTypes = {
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The label.
   */
  label: n.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool.isRequired,
  /**
   * @ignore
   */
  style: n.object
});
const bg = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], gg = (e) => {
  const {
    classes: t
  } = e, r = ue({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, mm, t);
  return b({}, t, r);
}, yg = W(Zo, {
  shouldForwardProp: (e) => Ue(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Xo
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return b({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${wt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${wt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : o
      }
    },
    [`&.${wt.focused} .${wt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${wt.error} .${wt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${wt.disabled} .${wt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && b({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), vg = W(wl, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), xg = W(Qo, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Jo
})(({
  theme: e,
  ownerState: t
}) => b({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  padding: "8.5px 14px"
}, t.multiline && {
  padding: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
})), ir = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, s, a, l;
  const c = pe({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: m = "input",
    label: f,
    multiline: T = !1,
    notched: g,
    slots: p = {},
    type: R = "text"
  } = c, O = q(c, bg), S = gg(c), y = $t(), C = kt({
    props: c,
    muiFormControl: y,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), v = b({}, c, {
    color: C.color || "primary",
    disabled: C.disabled,
    error: C.error,
    focused: C.focused,
    formControl: y,
    fullWidth: d,
    hiddenLabel: C.hiddenLabel,
    multiline: T,
    size: C.size,
    type: R
  }), N = (r = (i = p.root) != null ? i : u.Root) != null ? r : yg, h = (s = (a = p.input) != null ? a : u.Input) != null ? s : xg;
  return /* @__PURE__ */ x(er, b({
    slots: {
      root: N,
      input: h
    },
    renderSuffix: (P) => /* @__PURE__ */ x(vg, {
      ownerState: v,
      className: S.notchedOutline,
      label: f != null && f !== "" && C.required ? l || (l = /* @__PURE__ */ se(E.Fragment, {
        children: [f, " ", "*"]
      })) : f,
      notched: typeof g < "u" ? g : !!(P.startAdornment || P.filled || P.focused)
    }),
    fullWidth: d,
    inputComponent: m,
    multiline: T,
    ref: o,
    type: R
  }, O, {
    classes: b({}, S, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (ir.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: at,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: n.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
ir.muiName = "Input";
function Eg(e) {
  return ce("MuiPagination", e);
}
ae("MuiPagination", ["root", "ul", "outlined", "text"]);
const Tg = ["boundaryCount", "componentName", "count", "defaultPage", "disabled", "hideNextButton", "hidePrevButton", "onChange", "page", "showFirstButton", "showLastButton", "siblingCount"];
function Cg(e = {}) {
  const {
    boundaryCount: t = 1,
    componentName: o = "usePagination",
    count: r = 1,
    defaultPage: i = 1,
    disabled: s = !1,
    hideNextButton: a = !1,
    hidePrevButton: l = !1,
    onChange: c,
    page: u,
    showFirstButton: d = !1,
    showLastButton: m = !1,
    siblingCount: f = 1
  } = e, T = q(e, Tg), [g, p] = bn({
    controlled: u,
    default: i,
    name: o,
    state: "page"
  }), R = ($, w) => {
    u || p(w), c && c($, w);
  }, O = ($, w) => {
    const I = w - $ + 1;
    return Array.from({
      length: I
    }, (F, A) => $ + A);
  }, S = O(1, Math.min(t, r)), y = O(Math.max(r - t + 1, t + 1), r), C = Math.max(
    Math.min(
      // Natural start
      g - f,
      // Lower boundary when page is high
      r - t - f * 2 - 1
    ),
    // Greater than startPages
    t + 2
  ), v = Math.min(
    Math.max(
      // Natural end
      g + f,
      // Upper boundary when page is low
      t + f * 2 + 2
    ),
    // Less than endPages
    y.length > 0 ? y[0] - 2 : r - 1
  ), N = [
    ...d ? ["first"] : [],
    ...l ? [] : ["previous"],
    ...S,
    // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...C > t + 2 ? ["start-ellipsis"] : t + 1 < r - t ? [t + 1] : [],
    // Sibling pages
    ...O(C, v),
    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...v < r - t - 1 ? ["end-ellipsis"] : r - t > t ? [r - t] : [],
    ...y,
    ...a ? [] : ["next"],
    ...m ? ["last"] : []
  ], h = ($) => {
    switch ($) {
      case "first":
        return 1;
      case "previous":
        return g - 1;
      case "next":
        return g + 1;
      case "last":
        return r;
      default:
        return null;
    }
  }, P = N.map(($) => typeof $ == "number" ? {
    onClick: (w) => {
      R(w, $);
    },
    type: "page",
    page: $,
    selected: $ === g,
    disabled: s,
    "aria-current": $ === g ? "true" : void 0
  } : {
    onClick: (w) => {
      R(w, h($));
    },
    type: $,
    page: h($),
    selected: !1,
    disabled: s || $.indexOf("ellipsis") === -1 && ($ === "next" || $ === "last" ? g >= r : g <= 1)
  });
  return b({
    items: P
  }, T);
}
function Og(e) {
  return ce("MuiPaginationItem", e);
}
const nt = ae("MuiPaginationItem", ["root", "page", "sizeSmall", "sizeLarge", "text", "textPrimary", "textSecondary", "outlined", "outlinedPrimary", "outlinedSecondary", "rounded", "ellipsis", "firstLast", "previousNext", "focusVisible", "disabled", "selected", "icon", "colorPrimary", "colorSecondary"]), Ns = ze(/* @__PURE__ */ x("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), "FirstPage"), _s = ze(/* @__PURE__ */ x("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), "LastPage"), Is = ze(/* @__PURE__ */ x("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), "NavigateBefore"), ks = ze(/* @__PURE__ */ x("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "NavigateNext"), Rg = ["className", "color", "component", "components", "disabled", "page", "selected", "shape", "size", "slots", "type", "variant"], Nl = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, t[o.variant], t[`size${X(o.size)}`], o.variant === "text" && t[`text${X(o.color)}`], o.variant === "outlined" && t[`outlined${X(o.color)}`], o.shape === "rounded" && t.rounded, o.type === "page" && t.page, (o.type === "start-ellipsis" || o.type === "end-ellipsis") && t.ellipsis, (o.type === "previous" || o.type === "next") && t.previousNext, (o.type === "first" || o.type === "last") && t.firstLast];
}, Sg = (e) => {
  const {
    classes: t,
    color: o,
    disabled: r,
    selected: i,
    size: s,
    shape: a,
    type: l,
    variant: c
  } = e, u = {
    root: ["root", `size${X(s)}`, c, a, o !== "standard" && `color${X(o)}`, o !== "standard" && `${c}${X(o)}`, r && "disabled", i && "selected", {
      page: "page",
      first: "firstLast",
      last: "firstLast",
      "start-ellipsis": "ellipsis",
      "end-ellipsis": "ellipsis",
      previous: "previousNext",
      next: "previousNext"
    }[l]],
    icon: ["icon"]
  };
  return ue(u, Og, t);
}, $g = W("div", {
  name: "MuiPaginationItem",
  slot: "Root",
  overridesResolver: Nl
})(({
  theme: e,
  ownerState: t
}) => b({}, e.typography.body2, {
  borderRadius: 32 / 2,
  textAlign: "center",
  boxSizing: "border-box",
  minWidth: 32,
  padding: "0 6px",
  margin: "0 3px",
  color: (e.vars || e).palette.text.primary,
  height: "auto",
  [`&.${nt.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.size === "small" && {
  minWidth: 26,
  borderRadius: 26 / 2,
  margin: "0 1px",
  padding: "0 4px"
}, t.size === "large" && {
  minWidth: 40,
  borderRadius: 40 / 2,
  padding: "0 10px",
  fontSize: e.typography.pxToRem(15)
})), Pg = W(St, {
  name: "MuiPaginationItem",
  slot: "Root",
  overridesResolver: Nl
})(({
  theme: e,
  ownerState: t
}) => b({}, e.typography.body2, {
  borderRadius: 32 / 2,
  textAlign: "center",
  boxSizing: "border-box",
  minWidth: 32,
  height: 32,
  padding: "0 6px",
  margin: "0 3px",
  color: (e.vars || e).palette.text.primary,
  [`&.${nt.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${nt.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  transition: e.transitions.create(["color", "background-color"], {
    duration: e.transitions.duration.short
  }),
  "&:hover": {
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${nt.selected}`]: {
    backgroundColor: (e.vars || e).palette.action.selected,
    "&:hover": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : me.alpha(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette.action.selected
      }
    },
    [`&.${nt.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : me.alpha(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    },
    [`&.${nt.disabled}`]: {
      opacity: 1,
      color: (e.vars || e).palette.action.disabled,
      backgroundColor: (e.vars || e).palette.action.selected
    }
  }
}, t.size === "small" && {
  minWidth: 26,
  height: 26,
  borderRadius: 26 / 2,
  margin: "0 1px",
  padding: "0 4px"
}, t.size === "large" && {
  minWidth: 40,
  height: 40,
  borderRadius: 40 / 2,
  padding: "0 10px",
  fontSize: e.typography.pxToRem(15)
}, t.shape === "rounded" && {
  borderRadius: (e.vars || e).shape.borderRadius
}), ({
  theme: e,
  ownerState: t
}) => b({}, t.variant === "text" && {
  [`&.${nt.selected}`]: b({}, t.color !== "standard" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main,
    "&:hover": {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    },
    [`&.${nt.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  }, {
    [`&.${nt.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    }
  })
}, t.variant === "outlined" && {
  border: e.vars ? `1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
  [`&.${nt.selected}`]: b({}, t.color !== "standard" && {
    color: (e.vars || e).palette[t.color].main,
    border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : me.alpha(e.palette[t.color].main, 0.5)}`,
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.activatedOpacity})` : me.alpha(e.palette[t.color].main, e.palette.action.activatedOpacity),
    "&:hover": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))` : me.alpha(e.palette[t.color].main, e.palette.action.activatedOpacity + e.palette.action.focusOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${nt.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))` : me.alpha(e.palette[t.color].main, e.palette.action.activatedOpacity + e.palette.action.focusOpacity)
    }
  }, {
    [`&.${nt.disabled}`]: {
      borderColor: (e.vars || e).palette.action.disabledBackground,
      color: (e.vars || e).palette.action.disabled
    }
  })
})), wg = W("div", {
  name: "MuiPaginationItem",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})(({
  theme: e,
  ownerState: t
}) => b({
  fontSize: e.typography.pxToRem(20),
  margin: "0 -8px"
}, t.size === "small" && {
  fontSize: e.typography.pxToRem(18)
}, t.size === "large" && {
  fontSize: e.typography.pxToRem(22)
})), _l = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiPaginationItem"
  }), {
    className: i,
    color: s = "standard",
    component: a,
    components: l = {},
    disabled: c = !1,
    page: u,
    selected: d = !1,
    shape: m = "circular",
    size: f = "medium",
    slots: T = {},
    type: g = "page",
    variant: p = "text"
  } = r, R = q(r, Rg), O = b({}, r, {
    color: s,
    disabled: c,
    selected: d,
    shape: m,
    size: f,
    type: g,
    variant: p
  }), S = ri(), y = Sg(O), v = (S ? {
    previous: T.next || l.next || ks,
    next: T.previous || l.previous || Is,
    last: T.first || l.first || Ns,
    first: T.last || l.last || _s
  } : {
    previous: T.previous || l.previous || Is,
    next: T.next || l.next || ks,
    first: T.first || l.first || Ns,
    last: T.last || l.last || _s
  })[g];
  return g === "start-ellipsis" || g === "end-ellipsis" ? /* @__PURE__ */ x($g, {
    ref: o,
    ownerState: O,
    className: J(y.root, i),
    children: "…"
  }) : /* @__PURE__ */ se(Pg, b({
    ref: o,
    ownerState: O,
    component: a,
    disabled: c,
    className: J(y.root, i)
  }, R, {
    children: [g === "page" && u, v ? /* @__PURE__ */ x(wg, {
      as: v,
      ownerState: O,
      className: y.icon
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (_l.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "standard"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    first: n.elementType,
    last: n.elementType,
    next: n.elementType,
    previous: n.elementType
  }),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * The current page number.
   */
  page: n.node,
  /**
   * If `true` the pagination item is selected.
   * @default false
   */
  selected: n.bool,
  /**
   * The shape of the pagination item.
   * @default 'circular'
   */
  shape: n.oneOf(["circular", "rounded"]),
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    first: n.elementType,
    last: n.elementType,
    next: n.elementType,
    previous: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The type of pagination item.
   * @default 'page'
   */
  type: n.oneOf(["end-ellipsis", "first", "last", "next", "page", "previous", "start-ellipsis"]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["outlined", "text"]), n.string])
});
const Ng = ["boundaryCount", "className", "color", "count", "defaultPage", "disabled", "getItemAriaLabel", "hideNextButton", "hidePrevButton", "onChange", "page", "renderItem", "shape", "showFirstButton", "showLastButton", "siblingCount", "size", "variant"], _g = (e) => {
  const {
    classes: t,
    variant: o
  } = e;
  return ue({
    root: ["root", o],
    ul: ["ul"]
  }, Eg, t);
}, Ig = W("nav", {
  name: "MuiPagination",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant]];
  }
})({}), kg = W("ul", {
  name: "MuiPagination",
  slot: "Ul",
  overridesResolver: (e, t) => t.ul
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none"
});
function Mg(e, t, o) {
  return e === "page" ? `${o ? "" : "Go to "}page ${t}` : `Go to ${e} page`;
}
const Il = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiPagination"
  }), {
    boundaryCount: i = 1,
    className: s,
    color: a = "standard",
    count: l = 1,
    defaultPage: c = 1,
    disabled: u = !1,
    getItemAriaLabel: d = Mg,
    hideNextButton: m = !1,
    hidePrevButton: f = !1,
    renderItem: T = (P) => /* @__PURE__ */ x(_l, b({}, P)),
    shape: g = "circular",
    showFirstButton: p = !1,
    showLastButton: R = !1,
    siblingCount: O = 1,
    size: S = "medium",
    variant: y = "text"
  } = r, C = q(r, Ng), {
    items: v
  } = Cg(b({}, r, {
    componentName: "Pagination"
  })), N = b({}, r, {
    boundaryCount: i,
    color: a,
    count: l,
    defaultPage: c,
    disabled: u,
    getItemAriaLabel: d,
    hideNextButton: m,
    hidePrevButton: f,
    renderItem: T,
    shape: g,
    showFirstButton: p,
    showLastButton: R,
    siblingCount: O,
    size: S,
    variant: y
  }), h = _g(N);
  return /* @__PURE__ */ x(Ig, b({
    "aria-label": "pagination navigation",
    className: J(h.root, s),
    ownerState: N,
    ref: o
  }, C, {
    children: /* @__PURE__ */ x(kg, {
      className: h.ul,
      ownerState: N,
      children: v.map((P, $) => /* @__PURE__ */ x("li", {
        children: T(b({}, P, {
          color: a,
          "aria-label": d(P.type, P.page, P.selected),
          shape: g,
          size: S,
          variant: y
        }))
      }, $))
    })
  }));
});
process.env.NODE_ENV !== "production" && (Il.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount: Nt,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "standard"]), n.string]),
  /**
   * The total number of pages.
   * @default 1
   */
  count: Nt,
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage: Nt,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous' | 'start-ellipsis' | 'end-ellipsis'). Defaults to 'page'.
   * @param {number} page The page number to format.
   * @param {bool} selected If true, the current page is selected.
   * @returns {string}
   */
  getItemAriaLabel: n.func,
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton: n.bool,
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton: n.bool,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange: n.func,
  /**
   * The current page. Unlike `TablePagination`, which starts numbering from `0`, this pagination starts from `1`.
   */
  page: Nt,
  /**
   * Render the item.
   * @param {PaginationRenderItemParams} params The props to spread on a PaginationItem.
   * @returns {ReactNode}
   * @default (item) => <PaginationItem {...item} />
   */
  renderItem: n.func,
  /**
   * The shape of the pagination items.
   * @default 'circular'
   */
  shape: n.oneOf(["circular", "rounded"]),
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton: n.bool,
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton: n.bool,
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount: Nt,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["outlined", "text"]), n.string])
});
function Ag(e) {
  return ce("MuiSelect", e);
}
const _n = ae("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Ms;
const Dg = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], Fg = W("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${_n.select}`]: t.select
      },
      {
        [`&.${_n.select}`]: t[o.variant]
      },
      {
        [`&.${_n.error}`]: t.error
      },
      {
        [`&.${_n.multiple}`]: t.multiple
      }
    ];
  }
})(Sl, {
  // Win specificity over the input base
  [`&.${_n.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), Lg = W("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${X(o.variant)}`], o.open && t.iconOpen];
  }
})($l), jg = W("input", {
  shouldForwardProp: (e) => Ya(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function As(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Bg(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const zg = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", o, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${X(o)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return ue(l, Ag, t);
}, kl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r;
  const {
    "aria-describedby": i,
    "aria-label": s,
    autoFocus: a,
    autoWidth: l,
    children: c,
    className: u,
    defaultOpen: d,
    defaultValue: m,
    disabled: f,
    displayEmpty: T,
    error: g = !1,
    IconComponent: p,
    inputRef: R,
    labelId: O,
    MenuProps: S = {},
    multiple: y,
    name: C,
    onBlur: v,
    onChange: N,
    onClose: h,
    onFocus: P,
    onOpen: $,
    open: w,
    readOnly: I,
    renderValue: F,
    SelectDisplayProps: A = {},
    tabIndex: j,
    value: D,
    variant: L = "standard"
  } = t, z = q(t, Dg), [M, H] = bn({
    controlled: D,
    default: m,
    name: "Select"
  }), [k, V] = bn({
    controlled: w,
    default: d,
    name: "Select"
  }), ee = E.useRef(null), Z = E.useRef(null), [U, Q] = E.useState(null), {
    current: B
  } = E.useRef(w != null), [Y, G] = E.useState(), K = ke(o, R), ne = E.useCallback((ie) => {
    Z.current = ie, ie && Q(ie);
  }, []), te = U == null ? void 0 : U.parentNode;
  E.useImperativeHandle(K, () => ({
    focus: () => {
      Z.current.focus();
    },
    node: ee.current,
    value: M
  }), [M]), E.useEffect(() => {
    d && k && U && !B && (G(l ? null : te.clientWidth), Z.current.focus());
  }, [U, l]), E.useEffect(() => {
    a && Z.current.focus();
  }, [a]), E.useEffect(() => {
    if (!O)
      return;
    const ie = Be(Z.current).getElementById(O);
    if (ie) {
      const fe = () => {
        getSelection().isCollapsed && Z.current.focus();
      };
      return ie.addEventListener("click", fe), () => {
        ie.removeEventListener("click", fe);
      };
    }
  }, [O]);
  const _ = (ie, fe) => {
    ie ? $ && $(fe) : h && h(fe), B || (G(l ? null : te.clientWidth), V(ie));
  }, re = (ie) => {
    ie.button === 0 && (ie.preventDefault(), Z.current.focus(), _(!0, ie));
  }, oe = (ie) => {
    _(!1, ie);
  }, de = E.Children.toArray(c), De = (ie) => {
    const fe = de.find((Le) => Le.props.value === ie.target.value);
    fe !== void 0 && (H(fe.props.value), N && N(ie, fe));
  }, Fe = (ie) => (fe) => {
    let Le;
    if (fe.currentTarget.hasAttribute("tabindex")) {
      if (y) {
        Le = Array.isArray(M) ? M.slice() : [];
        const Yt = M.indexOf(ie.props.value);
        Yt === -1 ? Le.push(ie.props.value) : Le.splice(Yt, 1);
      } else
        Le = ie.props.value;
      if (ie.props.onClick && ie.props.onClick(fe), M !== Le && (H(Le), N)) {
        const Yt = fe.nativeEvent || fe, Ei = new Yt.constructor(Yt.type, Yt);
        Object.defineProperty(Ei, "target", {
          writable: !0,
          value: {
            value: Le,
            name: C
          }
        }), N(Ei, ie);
      }
      y || _(!1, fe);
    }
  }, Ge = (ie) => {
    I || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(ie.key) !== -1 && (ie.preventDefault(), _(!0, ie));
  }, Xe = U !== null && k, Qe = (ie) => {
    !Xe && v && (Object.defineProperty(ie, "target", {
      writable: !0,
      value: {
        value: M,
        name: C
      }
    }), v(ie));
  };
  delete z["aria-invalid"];
  let Pe, et;
  const He = [];
  let Se = !1, tt = !1;
  (Po({
    value: M
  }) || T) && (F ? Pe = F(M) : Se = !0);
  const Mt = de.map((ie) => {
    if (!/* @__PURE__ */ E.isValidElement(ie))
      return null;
    process.env.NODE_ENV !== "production" && mn.isFragment(ie) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let fe;
    if (y) {
      if (!Array.isArray(M))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Ct(2));
      fe = M.some((Le) => As(Le, ie.props.value)), fe && Se && He.push(ie.props.children);
    } else
      fe = As(M, ie.props.value), fe && Se && (et = ie.props.children);
    return fe && (tt = !0), /* @__PURE__ */ E.cloneElement(ie, {
      "aria-selected": fe ? "true" : "false",
      onClick: Fe(ie),
      onKeyUp: (Le) => {
        Le.key === " " && Le.preventDefault(), ie.props.onKeyUp && ie.props.onKeyUp(Le);
      },
      role: "option",
      selected: fe,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ie.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    if (!tt && !y && M !== "") {
      const ie = de.map((fe) => fe.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${M}\` for the select ${C ? `(name="${C}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ie.filter((fe) => fe != null).map((fe) => `\`${fe}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [tt, de, y, C, M]), Se && (y ? He.length === 0 ? Pe = null : Pe = He.reduce((ie, fe, Le) => (ie.push(fe), Le < He.length - 1 && ie.push(", "), ie), []) : Pe = et);
  let Pt = Y;
  !l && B && U && (Pt = te.clientWidth);
  let ye;
  typeof j < "u" ? ye = j : ye = f ? null : 0;
  const le = A.id || (C ? `mui-component-select-${C}` : void 0), mt = b({}, t, {
    variant: L,
    value: M,
    open: Xe,
    error: g
  }), On = zg(mt), Ht = b({}, S.PaperProps, (r = S.slotProps) == null ? void 0 : r.paper), ar = ni();
  return /* @__PURE__ */ se(E.Fragment, {
    children: [/* @__PURE__ */ x(Fg, b({
      ref: ne,
      tabIndex: ye,
      role: "combobox",
      "aria-controls": ar,
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": Xe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": s,
      "aria-labelledby": [O, le].filter(Boolean).join(" ") || void 0,
      "aria-describedby": i,
      onKeyDown: Ge,
      onMouseDown: f || I ? null : re,
      onBlur: Qe,
      onFocus: P
    }, A, {
      ownerState: mt,
      className: J(A.className, On.select, u),
      id: le,
      children: Bg(Pe) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ms || (Ms = /* @__PURE__ */ x("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Pe
    })), /* @__PURE__ */ x(jg, b({
      "aria-invalid": g,
      value: Array.isArray(M) ? M.join(",") : M,
      name: C,
      ref: ee,
      "aria-hidden": !0,
      onChange: De,
      tabIndex: -1,
      disabled: f,
      className: On.nativeInput,
      autoFocus: a,
      ownerState: mt
    }, z)), /* @__PURE__ */ x(Lg, {
      as: p,
      className: On.icon,
      ownerState: mt
    }), /* @__PURE__ */ x(rr, b({
      id: `menu-${C || ""}`,
      anchorEl: te,
      open: Xe,
      onClose: oe,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, S, {
      MenuListProps: b({
        "aria-labelledby": O,
        role: "listbox",
        "aria-multiselectable": y ? "true" : void 0,
        disableListWrap: !0,
        id: ar
      }, S.MenuListProps),
      slotProps: b({}, S.slotProps, {
        paper: b({}, Ht, {
          style: b({
            minWidth: Pt
          }, Ht != null ? Ht.style : null)
        })
      }),
      children: Mt
    }))]
  });
});
process.env.NODE_ENV !== "production" && (kl.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * @ignore
   */
  "aria-label": n.string,
  /**
   * @ignore
   */
  autoFocus: n.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: at,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * @ignore
   */
  readOnly: n.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * @ignore
   */
  tabIndex: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  type: n.any,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
});
const Vg = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], Wg = ["root"], Ug = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, gi = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Ue(e) && e !== "variant",
  slot: "Root"
}, qg = W(or, gi)(""), Gg = W(ir, gi)(""), Hg = W(tr, gi)(""), yi = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = bm,
    id: m,
    input: f,
    inputProps: T,
    label: g,
    labelId: p,
    MenuProps: R,
    multiple: O = !1,
    native: S = !1,
    onClose: y,
    onOpen: C,
    open: v,
    renderValue: N,
    SelectDisplayProps: h,
    variant: P = "outlined"
  } = r, $ = q(r, Vg), w = S ? Pl : kl, I = $t(), F = kt({
    props: r,
    muiFormControl: I,
    states: ["variant", "error"]
  }), A = F.variant || P, j = b({}, r, {
    variant: A,
    classes: a
  }), D = Ug(j), L = q(D, Wg), z = f || {
    standard: /* @__PURE__ */ x(qg, {
      ownerState: j
    }),
    outlined: /* @__PURE__ */ x(Gg, {
      label: g,
      ownerState: j
    }),
    filled: /* @__PURE__ */ x(Hg, {
      ownerState: j
    })
  }[A], M = ke(o, Ut(z));
  return /* @__PURE__ */ x(E.Fragment, {
    children: /* @__PURE__ */ E.cloneElement(z, b({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: w,
      inputProps: b({
        children: s,
        error: F.error,
        IconComponent: d,
        variant: A,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: O
      }, S ? {
        id: m
      } : {
        autoWidth: i,
        defaultOpen: c,
        displayEmpty: u,
        labelId: p,
        MenuProps: R,
        onClose: y,
        onOpen: C,
        open: v,
        renderValue: N,
        SelectDisplayProps: b({
          id: m
        }, h)
      }, T, {
        classes: T ? qe(L, T.classes) : L
      }, f ? f.props.inputProps : {})
    }, (O && S || u) && A === "outlined" ? {
      notched: !0
    } : {}, {
      ref: M,
      className: J(z.props.className, l, D.root)
    }, !f && {
      variant: A
    }, $))
  });
});
process.env.NODE_ENV !== "production" && (yi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: n.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: n.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: n.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: n.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: n.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: n.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: n.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: n.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: n.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: n.oneOfType([n.oneOf([""]), n.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
yi.muiName = "Select";
function Yg(e) {
  return ce("MuiSkeleton", e);
}
ae("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const Kg = ["animation", "className", "component", "height", "style", "variant", "width"];
let _o = (e) => e, Ds, Fs, Ls, js;
const Xg = (e) => {
  const {
    classes: t,
    variant: o,
    animation: r,
    hasChildren: i,
    width: s,
    height: a
  } = e;
  return ue({
    root: ["root", o, r, i && "withChildren", i && !s && "fitContent", i && !a && "heightAuto"]
  }, Yg, t);
}, Jg = xn(Ds || (Ds = _o`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)), Zg = xn(Fs || (Fs = _o`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)), Qg = W("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], o.animation !== !1 && t[o.animation], o.hasChildren && t.withChildren, o.hasChildren && !o.width && t.fitContent, o.hasChildren && !o.height && t.heightAuto];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const o = Cp(e.shape.borderRadius) || "px", r = Op(e.shape.borderRadius);
  return b({
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : cd(e.palette.text.primary, e.palette.mode === "light" ? 0.11 : 0.13),
    height: "1.2em"
  }, t.variant === "text" && {
    marginTop: 0,
    marginBottom: 0,
    height: "auto",
    transformOrigin: "0 55%",
    transform: "scale(1, 0.60)",
    borderRadius: `${r}${o}/${Math.round(r / 0.6 * 10) / 10}${o}`,
    "&:empty:before": {
      content: '"\\00a0"'
    }
  }, t.variant === "circular" && {
    borderRadius: "50%"
  }, t.variant === "rounded" && {
    borderRadius: (e.vars || e).shape.borderRadius
  }, t.hasChildren && {
    "& > *": {
      visibility: "hidden"
    }
  }, t.hasChildren && !t.width && {
    maxWidth: "fit-content"
  }, t.hasChildren && !t.height && {
    height: "auto"
  });
}, ({
  ownerState: e
}) => e.animation === "pulse" && wr(Ls || (Ls = _o`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `), Jg), ({
  ownerState: e,
  theme: t
}) => e.animation === "wave" && wr(js || (js = _o`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), Zg, (t.vars || t).palette.action.hover)), sr = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiSkeleton"
  }), {
    animation: i = "pulse",
    className: s,
    component: a = "span",
    height: l,
    style: c,
    variant: u = "text",
    width: d
  } = r, m = q(r, Kg), f = b({}, r, {
    animation: i,
    component: a,
    variant: u,
    hasChildren: !!m.children
  }), T = Xg(f);
  return /* @__PURE__ */ x(Qg, b({
    as: a,
    ref: o,
    className: J(T.root, s),
    ownerState: f
  }, m, {
    style: b({
      width: d,
      height: l
    }, c)
  }));
});
process.env.NODE_ENV !== "production" && (sr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */
  animation: n.oneOf(["pulse", "wave", !1]),
  /**
   * Optional children to infer width and height from.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Height of the skeleton.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The type of content that will be rendered.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["circular", "rectangular", "rounded", "text"]), n.string]),
  /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */
  width: n.oneOfType([n.number, n.string])
});
function ey(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: o = !1,
    onClose: r,
    open: i,
    resumeHideDuration: s
  } = e, a = Go();
  E.useEffect(() => {
    if (!i)
      return;
    function O(S) {
      S.defaultPrevented || (S.key === "Escape" || S.key === "Esc") && (r == null || r(S, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", O), () => {
      document.removeEventListener("keydown", O);
    };
  }, [i, r]);
  const l = ft((O, S) => {
    r == null || r(O, S);
  }), c = ft((O) => {
    !r || O == null || a.start(O, () => {
      l(null, "timeout");
    });
  });
  E.useEffect(() => (i && c(t), a.clear), [i, t, c, a]);
  const u = (O) => {
    r == null || r(O, "clickaway");
  }, d = a.clear, m = E.useCallback(() => {
    t != null && c(s ?? t * 0.5);
  }, [t, s, c]), f = (O) => (S) => {
    const y = O.onBlur;
    y == null || y(S), m();
  }, T = (O) => (S) => {
    const y = O.onFocus;
    y == null || y(S), d();
  }, g = (O) => (S) => {
    const y = O.onMouseEnter;
    y == null || y(S), d();
  }, p = (O) => (S) => {
    const y = O.onMouseLeave;
    y == null || y(S), m();
  };
  return E.useEffect(() => {
    if (!o && i)
      return window.addEventListener("focus", m), window.addEventListener("blur", d), () => {
        window.removeEventListener("focus", m), window.removeEventListener("blur", d);
      };
  }, [o, i, m, d]), {
    getRootProps: (O = {}) => {
      const S = b({}, To(e), To(O));
      return b({
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation"
      }, O, S, {
        onBlur: f(S),
        onFocus: T(S),
        onMouseEnter: g(S),
        onMouseLeave: p(S)
      });
    },
    onClickAway: u
  };
}
function ty(e) {
  return ce("MuiSnackbarContent", e);
}
ae("MuiSnackbarContent", ["root", "message", "action"]);
const ny = ["action", "className", "message", "role"], oy = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, ty, t);
}, ry = W(qt, {
  name: "MuiSnackbarContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98, o = me.emphasize(e.palette.background.default, t);
  return b({}, e.typography.body2, {
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(o),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : o,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    flexGrow: 1,
    [e.breakpoints.up("sm")]: {
      flexGrow: "initial",
      minWidth: 288
    }
  });
}), iy = W("div", {
  name: "MuiSnackbarContent",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0"
}), sy = W("div", {
  name: "MuiSnackbarContent",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), vi = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: i,
    className: s,
    message: a,
    role: l = "alert"
  } = r, c = q(r, ny), u = r, d = oy(u);
  return /* @__PURE__ */ se(ry, b({
    role: l,
    square: !0,
    elevation: 6,
    className: J(d.root, s),
    ownerState: u,
    ref: o
  }, c, {
    children: [/* @__PURE__ */ x(iy, {
      className: d.message,
      ownerState: u,
      children: a
    }), i ? /* @__PURE__ */ x(sy, {
      className: d.action,
      ownerState: u,
      children: i
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (vi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The message to display.
   */
  message: n.node,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function ay(e) {
  return ce("MuiSnackbar", e);
}
ae("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const ly = ["onEnter", "onExited"], cy = ["action", "anchorOrigin", "autoHideDuration", "children", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"], uy = (e) => {
  const {
    classes: t,
    anchorOrigin: o
  } = e, r = {
    root: ["root", `anchorOrigin${X(o.vertical)}${X(o.horizontal)}`]
  };
  return ue(r, ay, t);
}, Bs = W("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`anchorOrigin${X(o.anchorOrigin.vertical)}${X(o.anchorOrigin.horizontal)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const o = {
    left: "50%",
    right: "auto",
    transform: "translateX(-50%)"
  };
  return b({
    zIndex: (e.vars || e).zIndex.snackbar,
    position: "fixed",
    display: "flex",
    left: 8,
    right: 8,
    justifyContent: "center",
    alignItems: "center"
  }, t.anchorOrigin.vertical === "top" ? {
    top: 8
  } : {
    bottom: 8
  }, t.anchorOrigin.horizontal === "left" && {
    justifyContent: "flex-start"
  }, t.anchorOrigin.horizontal === "right" && {
    justifyContent: "flex-end"
  }, {
    [e.breakpoints.up("sm")]: b({}, t.anchorOrigin.vertical === "top" ? {
      top: 24
    } : {
      bottom: 24
    }, t.anchorOrigin.horizontal === "center" && o, t.anchorOrigin.horizontal === "left" && {
      left: 24,
      right: "auto"
    }, t.anchorOrigin.horizontal === "right" && {
      right: 24,
      left: "auto"
    })
  });
}), Ml = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiSnackbar"
  }), i = lt(), s = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    action: a,
    anchorOrigin: {
      vertical: l,
      horizontal: c
    } = {
      vertical: "bottom",
      horizontal: "left"
    },
    autoHideDuration: u = null,
    children: d,
    className: m,
    ClickAwayListenerProps: f,
    ContentProps: T,
    disableWindowBlurListener: g = !1,
    message: p,
    open: R,
    TransitionComponent: O = nr,
    transitionDuration: S = s,
    TransitionProps: {
      onEnter: y,
      onExited: C
    } = {}
  } = r, v = q(r.TransitionProps, ly), N = q(r, cy), h = b({}, r, {
    anchorOrigin: {
      vertical: l,
      horizontal: c
    },
    autoHideDuration: u,
    disableWindowBlurListener: g,
    TransitionComponent: O,
    transitionDuration: S
  }), P = uy(h), {
    getRootProps: $,
    onClickAway: w
  } = ey(b({}, h)), [I, F] = E.useState(!0), A = Vt({
    elementType: Bs,
    getSlotProps: $,
    externalForwardedProps: N,
    ownerState: h,
    additionalProps: {
      ref: o
    },
    className: [P.root, m]
  }), j = (L) => {
    F(!0), C && C(L);
  }, D = (L, z) => {
    F(!1), y && y(L, z);
  };
  return !R && I ? null : /* @__PURE__ */ x(wo, b({
    onClickAway: w
  }, f, {
    children: /* @__PURE__ */ x(Bs, b({}, A, {
      children: /* @__PURE__ */ x(O, b({
        appear: !0,
        in: R,
        timeout: S,
        direction: l === "top" ? "down" : "up",
        onEnter: D,
        onExited: j
      }, v, {
        children: d || /* @__PURE__ */ x(vi, b({
          message: p,
          action: a
        }, T))
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Ml.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: n.node,
  /**
   * The anchor of the `Snackbar`.
   * On smaller screens, the component grows to occupy all the available width,
   * the horizontal alignment is ignored.
   * @default { vertical: 'bottom', horizontal: 'left' }
   */
  anchorOrigin: n.shape({
    horizontal: n.oneOf(["center", "left", "right"]).isRequired,
    vertical: n.oneOf(["bottom", "top"]).isRequired
  }),
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration: n.number,
  /**
   * Replace the `SnackbarContent` component.
   */
  children: n.element,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Props applied to the `ClickAwayListener` element.
   */
  ClickAwayListenerProps: n.object,
  /**
   * Props applied to the [`SnackbarContent`](/material-ui/api/snackbar-content/) element.
   */
  ContentProps: n.object,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   * @default false
   */
  disableWindowBlurListener: n.bool,
  /**
   * When displaying multiple consecutive snackbars using a single parent-rendered
   * `<Snackbar/>`, add the `key` prop to ensure independent treatment of each message.
   * For instance, use `<Snackbar key={message} />`. Otherwise, messages might update
   * in place, and features like `autoHideDuration` could be affected.
   */
  key: () => null,
  /**
   * The message to display.
   */
  message: n.node,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
   */
  onClose: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * @ignore
   */
  onMouseEnter: n.func,
  /**
   * @ignore
   */
  onMouseLeave: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: n.number,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: n.object
});
function dy(e) {
  return ce("MuiToolbar", e);
}
ae("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const py = ["className", "component", "disableGutters", "variant"], fy = (e) => {
  const {
    classes: t,
    disableGutters: o,
    variant: r
  } = e;
  return ue({
    root: ["root", !o && "gutters", r]
  }, dy, t);
}, my = W("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disableGutters && t.gutters, t[o.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  position: "relative",
  display: "flex",
  alignItems: "center"
}, !t.disableGutters && {
  paddingLeft: e.spacing(2),
  paddingRight: e.spacing(2),
  [e.breakpoints.up("sm")]: {
    paddingLeft: e.spacing(3),
    paddingRight: e.spacing(3)
  }
}, t.variant === "dense" && {
  minHeight: 48
}), ({
  theme: e,
  ownerState: t
}) => t.variant === "regular" && e.mixins.toolbar), hy = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiToolbar"
  }), {
    className: i,
    component: s = "div",
    disableGutters: a = !1,
    variant: l = "regular"
  } = r, c = q(r, py), u = b({}, r, {
    component: s,
    disableGutters: a,
    variant: l
  }), d = fy(u);
  return /* @__PURE__ */ x(my, b({
    as: s,
    className: J(d.root, i),
    ref: o,
    ownerState: u
  }, c));
});
process.env.NODE_ENV !== "production" && (hy.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: n.oneOfType([n.oneOf(["dense", "regular"]), n.string])
});
function by(e) {
  return ce("MuiTextField", e);
}
ae("MuiTextField", ["root"]);
const gy = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], yy = {
  standard: or,
  filled: tr,
  outlined: ir
}, vy = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, by, t);
}, xy = W(fl, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Al = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: i,
    autoFocus: s = !1,
    children: a,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: m = !1,
    FormHelperTextProps: f,
    fullWidth: T = !1,
    helperText: g,
    id: p,
    InputLabelProps: R,
    inputProps: O,
    InputProps: S,
    inputRef: y,
    label: C,
    maxRows: v,
    minRows: N,
    multiline: h = !1,
    name: P,
    onBlur: $,
    onChange: w,
    onFocus: I,
    placeholder: F,
    required: A = !1,
    rows: j,
    select: D = !1,
    SelectProps: L,
    type: z,
    value: M,
    variant: H = "outlined"
  } = r, k = q(r, gy), V = b({}, r, {
    autoFocus: s,
    color: c,
    disabled: d,
    error: m,
    fullWidth: T,
    multiline: h,
    required: A,
    select: D,
    variant: H
  }), ee = vy(V);
  process.env.NODE_ENV !== "production" && D && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const Z = {};
  H === "outlined" && (R && typeof R.shrink < "u" && (Z.notched = R.shrink), Z.label = C), D && ((!L || !L.native) && (Z.id = void 0), Z["aria-describedby"] = void 0);
  const U = ni(p), Q = g && U ? `${U}-helper-text` : void 0, B = C && U ? `${U}-label` : void 0, Y = yy[H], G = /* @__PURE__ */ x(Y, b({
    "aria-describedby": Q,
    autoComplete: i,
    autoFocus: s,
    defaultValue: u,
    fullWidth: T,
    multiline: h,
    name: P,
    rows: j,
    maxRows: v,
    minRows: N,
    type: z,
    value: M,
    id: U,
    inputRef: y,
    onBlur: $,
    onChange: w,
    onFocus: I,
    placeholder: F,
    inputProps: O
  }, Z, S));
  return /* @__PURE__ */ se(xy, b({
    className: J(ee.root, l),
    disabled: d,
    error: m,
    fullWidth: T,
    ref: o,
    required: A,
    color: c,
    variant: H,
    ownerState: V
  }, k, {
    children: [C != null && C !== "" && /* @__PURE__ */ x(mi, b({
      htmlFor: U,
      id: B
    }, R, {
      children: C
    })), D ? /* @__PURE__ */ x(yi, b({
      "aria-describedby": Q,
      id: U,
      labelId: B,
      value: M,
      input: G
    }, L, {
      children: a
    })) : G, g && /* @__PURE__ */ x(gl, b({
      id: Q
    }, f, {
      children: g
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Al.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * @ignore
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: n.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The helper text content.
   */
  helperText: n.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: n.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: n.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: n.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: at,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: n.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: n.object,
  /**
   * The size of the component.
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
var ut = {}, In = {}, uo = { exports: {} }, Ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function Ey() {
  if (zs) return Ee;
  zs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function y(v) {
    if (typeof v == "object" && v !== null) {
      var N = v.$$typeof;
      switch (N) {
        case t:
          switch (v = v.type, v) {
            case c:
            case u:
            case r:
            case s:
            case i:
            case m:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case d:
                case g:
                case T:
                case a:
                  return v;
                default:
                  return N;
              }
          }
        case o:
          return N;
      }
    }
  }
  function C(v) {
    return y(v) === u;
  }
  return Ee.AsyncMode = c, Ee.ConcurrentMode = u, Ee.ContextConsumer = l, Ee.ContextProvider = a, Ee.Element = t, Ee.ForwardRef = d, Ee.Fragment = r, Ee.Lazy = g, Ee.Memo = T, Ee.Portal = o, Ee.Profiler = s, Ee.StrictMode = i, Ee.Suspense = m, Ee.isAsyncMode = function(v) {
    return C(v) || y(v) === c;
  }, Ee.isConcurrentMode = C, Ee.isContextConsumer = function(v) {
    return y(v) === l;
  }, Ee.isContextProvider = function(v) {
    return y(v) === a;
  }, Ee.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, Ee.isForwardRef = function(v) {
    return y(v) === d;
  }, Ee.isFragment = function(v) {
    return y(v) === r;
  }, Ee.isLazy = function(v) {
    return y(v) === g;
  }, Ee.isMemo = function(v) {
    return y(v) === T;
  }, Ee.isPortal = function(v) {
    return y(v) === o;
  }, Ee.isProfiler = function(v) {
    return y(v) === s;
  }, Ee.isStrictMode = function(v) {
    return y(v) === i;
  }, Ee.isSuspense = function(v) {
    return y(v) === m;
  }, Ee.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === u || v === s || v === i || v === m || v === f || typeof v == "object" && v !== null && (v.$$typeof === g || v.$$typeof === T || v.$$typeof === a || v.$$typeof === l || v.$$typeof === d || v.$$typeof === R || v.$$typeof === O || v.$$typeof === S || v.$$typeof === p);
  }, Ee.typeOf = y, Ee;
}
var Te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vs;
function Ty() {
  return Vs || (Vs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function y(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === u || _ === s || _ === i || _ === m || _ === f || typeof _ == "object" && _ !== null && (_.$$typeof === g || _.$$typeof === T || _.$$typeof === a || _.$$typeof === l || _.$$typeof === d || _.$$typeof === R || _.$$typeof === O || _.$$typeof === S || _.$$typeof === p);
    }
    function C(_) {
      if (typeof _ == "object" && _ !== null) {
        var re = _.$$typeof;
        switch (re) {
          case t:
            var oe = _.type;
            switch (oe) {
              case c:
              case u:
              case r:
              case s:
              case i:
              case m:
                return oe;
              default:
                var de = oe && oe.$$typeof;
                switch (de) {
                  case l:
                  case d:
                  case g:
                  case T:
                  case a:
                    return de;
                  default:
                    return re;
                }
            }
          case o:
            return re;
        }
      }
    }
    var v = c, N = u, h = l, P = a, $ = t, w = d, I = r, F = g, A = T, j = o, D = s, L = i, z = m, M = !1;
    function H(_) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(_) || C(_) === c;
    }
    function k(_) {
      return C(_) === u;
    }
    function V(_) {
      return C(_) === l;
    }
    function ee(_) {
      return C(_) === a;
    }
    function Z(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function U(_) {
      return C(_) === d;
    }
    function Q(_) {
      return C(_) === r;
    }
    function B(_) {
      return C(_) === g;
    }
    function Y(_) {
      return C(_) === T;
    }
    function G(_) {
      return C(_) === o;
    }
    function K(_) {
      return C(_) === s;
    }
    function ne(_) {
      return C(_) === i;
    }
    function te(_) {
      return C(_) === m;
    }
    Te.AsyncMode = v, Te.ConcurrentMode = N, Te.ContextConsumer = h, Te.ContextProvider = P, Te.Element = $, Te.ForwardRef = w, Te.Fragment = I, Te.Lazy = F, Te.Memo = A, Te.Portal = j, Te.Profiler = D, Te.StrictMode = L, Te.Suspense = z, Te.isAsyncMode = H, Te.isConcurrentMode = k, Te.isContextConsumer = V, Te.isContextProvider = ee, Te.isElement = Z, Te.isForwardRef = U, Te.isFragment = Q, Te.isLazy = B, Te.isMemo = Y, Te.isPortal = G, Te.isProfiler = K, Te.isStrictMode = ne, Te.isSuspense = te, Te.isValidElementType = y, Te.typeOf = C;
  }()), Te;
}
var Ws;
function Cy() {
  return Ws || (Ws = 1, process.env.NODE_ENV === "production" ? uo.exports = Ey() : uo.exports = Ty()), uo.exports;
}
var Sr, Us;
function Oy() {
  if (Us) return Sr;
  Us = 1;
  var e = Cy(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, o = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, r = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, i = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, s = {};
  s[e.ForwardRef] = r, s[e.Memo] = i;
  function a(g) {
    return e.isMemo(g) ? i : s[g.$$typeof] || t;
  }
  var l = Object.defineProperty, c = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, m = Object.getPrototypeOf, f = Object.prototype;
  function T(g, p, R) {
    if (typeof p != "string") {
      if (f) {
        var O = m(p);
        O && O !== f && T(g, O, R);
      }
      var S = c(p);
      u && (S = S.concat(u(p)));
      for (var y = a(g), C = a(p), v = 0; v < S.length; ++v) {
        var N = S[v];
        if (!o[N] && !(R && R[N]) && !(C && C[N]) && !(y && y[N])) {
          var h = d(p, N);
          try {
            l(g, N, h);
          } catch {
          }
        }
      }
    }
    return g;
  }
  return Sr = T, Sr;
}
var kn = {}, dt = {}, qs;
function Dl() {
  if (qs) return dt;
  qs = 1, dt.__esModule = !0, dt.noop = dt.defaultProps = dt.defaultOptions = dt.defaultConfig = void 0, dt.defaultOptions = {}, dt.defaultConfig = {
    disconnectOnLeave: !1
  };
  var e = () => {
  };
  return dt.noop = e, dt.defaultProps = {
    onEnterViewport: e,
    onLeaveViewport: e
  }, dt;
}
var Gs;
function Fl() {
  if (Gs) return kn;
  Gs = 1, kn.__esModule = !0, kn.default = void 0;
  var e = pt, t = Dl(), o = {
    attributes: !0,
    childList: !0,
    subtree: !0
  }, r = function(s, a, l, c) {
    a === void 0 && (a = t.defaultOptions), l === void 0 && (l = t.defaultConfig), c === void 0 && (c = t.defaultProps);
    var {
      onEnterViewport: u,
      onLeaveViewport: d
    } = c, [, m] = (0, e.useState)(), f = (0, e.useRef)(), T = (0, e.useRef)(!1), g = (0, e.useRef)(!1), p = (0, e.useRef)(0), R = (0, e.useRef)(0), [O, S] = (0, e.useState)(!!s.current);
    function y(h) {
      var {
        observerRef: P
      } = h, $ = s.current;
      if ($) {
        var w = $;
        w && (P == null || P.observe(w));
      }
    }
    function C(h) {
      var {
        observerRef: P
      } = h, $ = s.current;
      if ($) {
        var w = $;
        w && (P == null || P.unobserve(w));
      }
      P == null || P.disconnect(), f.current = null;
    }
    var v = (h) => {
      var P = h[0] || {}, {
        isIntersecting: $,
        intersectionRatio: w
      } = P, I = typeof $ < "u" ? $ : w > 0;
      if (!g.current && I) {
        g.current = !0, u == null || u(), p.current += 1, T.current = I, m(I);
        return;
      }
      g.current && !I && (g.current = !1, d == null || d(), l.disconnectOnLeave && f.current && f.current.disconnect(), R.current += 1, T.current = I, m(I));
    };
    function N(h) {
      var {
        observerRef: P
      } = h;
      return P || (f.current = new IntersectionObserver(v, a), f.current);
    }
    return (0, e.useEffect)(() => {
      var h = f.current;
      return h = N({
        observerRef: h
      }), y({
        observerRef: h
      }), () => {
        C({
          observerRef: h
        });
      };
    }, [s.current, a, l, u, d]), (0, e.useEffect)(() => {
      var h = s.current, P = null, $ = () => {
        s.current && !O && (S(!0), P && P.disconnect());
      };
      return h ? S(!0) : (P = new MutationObserver($), P.observe(document.body, o)), () => {
        P && P.disconnect();
      };
    }, [s.current]), {
      inViewport: T.current,
      enterCount: p.current,
      leaveCount: R.current
    };
  };
  return kn.default = r, kn;
}
var Hs;
function Ry() {
  if (Hs) return In;
  Hs = 1, In.__esModule = !0, In.default = void 0;
  var e = pt, t = a(Oy()), o = a(Fl()), r = Dl(), i = na, s = ["onEnterViewport", "onLeaveViewport"];
  function a(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function l(d, m) {
    if (d == null) return {};
    var f = {};
    for (var T in d) if ({}.hasOwnProperty.call(d, T)) {
      if (m.includes(T)) continue;
      f[T] = d[T];
    }
    return f;
  }
  function c() {
    return c = Object.assign ? Object.assign.bind() : function(d) {
      for (var m = 1; m < arguments.length; m++) {
        var f = arguments[m];
        for (var T in f) ({}).hasOwnProperty.call(f, T) && (d[T] = f[T]);
      }
      return d;
    }, c.apply(null, arguments);
  }
  function u(d, m, f) {
    m === void 0 && (m = r.defaultOptions), f === void 0 && (f = r.defaultConfig);
    var T = /* @__PURE__ */ (0, e.forwardRef)((R, O) => {
      var S = {
        forwardedRef: O
        // pass both ref/forwardedRef for class component for backward compatibility
      };
      return /* @__PURE__ */ (0, i.jsx)(d, c({}, R, S));
    }), g = (R) => {
      var {
        onEnterViewport: O = r.noop,
        onLeaveViewport: S = r.noop
      } = R, y = l(R, s), C = (0, e.useRef)(null), {
        inViewport: v,
        enterCount: N,
        leaveCount: h
      } = (0, o.default)(C, m, f, {
        onEnterViewport: O,
        onLeaveViewport: S
      }), P = c({}, y, {
        inViewport: v,
        enterCount: N,
        leaveCount: h
      });
      return /* @__PURE__ */ (0, i.jsx)(T, c({}, P, {
        ref: C
      }));
    }, p = d.displayName || d.name || "Component";
    return g.displayName = "handleViewport(" + p + ")", (0, t.default)(g, T);
  }
  return In.default = u, In;
}
var Ys;
function Sy() {
  if (Ys) return ut;
  Ys = 1, ut.__esModule = !0, ut.useInViewport = ut.handleViewport = ut.default = ut.customProps = void 0;
  var e = o(Ry());
  ut.handleViewport = e.default;
  var t = o(Fl());
  ut.useInViewport = t.default;
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  return ut.customProps = ["inViewport", "enterCount", "leaveCount"], ut.default = e.default, ut;
}
var $y = Sy();
const Ks = ({ thumbSrc: e }) => e ? /* @__PURE__ */ x(
  "img",
  {
    className: "absolute inset-0 w-full h-full ",
    height: "100%",
    loading: "lazy",
    src: e,
    width: "100%"
  }
) : /* @__PURE__ */ x(
  sr,
  {
    className: "absolute inset-0 w-full h-full",
    height: "100%",
    variant: "rectangular"
  }
), Py = ({
  autoPlay: e,
  className: t = "",
  loop: o,
  muted: r = !0,
  thumbSrc: i,
  videoSrc: s
}) => {
  const a = yo(null), l = yo(null), { inViewport: c } = $y.useInViewport(a), [u, d] = Ne(!1), [m, f] = Ne(!1);
  return vt(() => {
    c && f(!0);
  }, [c]), vt(() => {
    var T, g;
    !e || !u || !m || (c ? (T = l.current) == null || T.play().catch(() => {
    }) : (g = l.current) == null || g.pause());
  }, [e, c, u, m]), /* @__PURE__ */ x("div", { className: `relative ${t}`, ref: a, children: m ? /* @__PURE__ */ se(vn, { children: [
    !u && /* @__PURE__ */ x(Ks, { thumbSrc: i }),
    /* @__PURE__ */ x(
      "video",
      {
        autoPlay: e,
        className: "w-full h-full relative object-cover",
        controls: !1,
        loop: o,
        muted: r,
        onCanPlayThrough: () => d(!0),
        preload: "auto",
        ref: l,
        playsInline: !0,
        children: /* @__PURE__ */ x("source", { src: s })
      }
    )
  ] }) : /* @__PURE__ */ x(Ks, { thumbSrc: i }) });
}, zr = ({
  assetUrl: e,
  autoplay: t = !0,
  banner: o = !1,
  containerClassName: r,
  fullHeight: i = !1,
  objectFit: s = "cover",
  thumbSrc: a
}) => {
  if (!e) return null;
  const l = `w-full !h-full !md:min-h-[768px] !lg:min-h-[800px] ${s === "cover" ? "object-cover" : "object-contain"} ${o ? "!xs:min-h-[420px]" : "!xs:min-h-auto"}`, c = { lg: 800, md: 768, xs: o ? 420 : "auto" };
  return ["mp4", "mov", "webm"].some((d) => e.endsWith(d)) ? /* @__PURE__ */ x(
    he,
    {
      className: r,
      height: c,
      minHeight: i ? "100vh" : void 0,
      children: /* @__PURE__ */ x(
        Py,
        {
          autoPlay: t,
          className: l,
          thumbSrc: a,
          videoSrc: e,
          loop: !0,
          muted: !0
        }
      )
    }
  ) : /* @__PURE__ */ x(
    he,
    {
      className: r,
      height: c,
      minHeight: i ? "100vh" : void 0,
      children: /* @__PURE__ */ x(
        "img",
        {
          alt: "",
          className: l,
          height: 1080,
          loading: "lazy",
          src: e,
          width: 1920
        }
      )
    }
  );
}, wy = "absolute inset-0 bg-gradient-to-t from-black to-transparent", Xv = ({
  children: e,
  headline: t,
  mediaBlockOptions: o,
  sublineElement: r
}) => /* @__PURE__ */ se(he, { minHeight: { lg: 800, md: 768, xs: "100vh" }, position: "relative", children: [
  o && /* @__PURE__ */ x(zr, { ...o, banner: !0, fullHeight: !0 }),
  /* @__PURE__ */ x("div", { className: wy }),
  /* @__PURE__ */ x(
    he,
    {
      bottom: 0,
      left: 0,
      maxWidth: "xl",
      mx: "auto",
      position: "absolute",
      px: 3,
      right: 0,
      top: 0,
      children: /* @__PURE__ */ se(Re, { alignItems: "end", height: "100%", justifyContent: "end", container: !0, children: [
        /* @__PURE__ */ se(
          Re,
          {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mb: { lg: 29, md: 15, xs: "auto" },
            md: 6,
            mt: { md: 0, xs: "auto" },
            textAlign: { md: "left", xs: "center" },
            xs: 12,
            item: !0,
            children: [
              /* @__PURE__ */ x(We, { color: "white", component: "h1", variant: "h1", children: t }),
              sn(r) ? r : /* @__PURE__ */ x(
                We,
                {
                  color: "white",
                  component: "div",
                  dangerouslySetInnerHTML: { __html: r ?? "" },
                  mb: { sm: 2, xs: 3 },
                  mt: { sm: 0.5, xs: 1 },
                  variant: "body1"
                }
              ),
              e && /* @__PURE__ */ x(
                he,
                {
                  alignItems: "center",
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  gap: 2,
                  justifyContent: { md: "left", xs: "center" },
                  mt: { md: 8, xs: 3 },
                  children: e
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ x(Re, { md: 1, xs: 0 })
      ] })
    }
  )
] }), Ny = ze(/* @__PURE__ */ x("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "ErrorOutline"), _y = ze(/* @__PURE__ */ x("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), "ExpandLess"), Iy = ze(/* @__PURE__ */ x("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore"), ky = ze(/* @__PURE__ */ x("path", {
  d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
}), "Facebook"), My = ze(/* @__PURE__ */ x("path", {
  d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
}), "Instagram"), Ay = ze(/* @__PURE__ */ x("path", {
  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
}), "LinkedIn"), Dy = ze(/* @__PURE__ */ x("path", {
  d: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
}), "Twitter"), Fy = ze(/* @__PURE__ */ x("path", {
  d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
}), "X");
function Mn(e) {
  if (typeof window > "u")
    return e;
  const t = E.useRef(null);
  return E.useLayoutEffect(() => {
    t.current = e;
  }), E.useCallback((...o) => {
    var r;
    (r = t.current) === null || r === void 0 || r.call(t, ...o);
  }, []);
}
const Xs = {};
function Ly(e, t) {
  Xs[e] || (Xs[e] = !0, console.error("[material-ui-popup-state] WARNING", t));
}
const jy = {
  isOpen: !1,
  setAnchorElUsed: !1,
  anchorEl: void 0,
  anchorPosition: void 0,
  hovered: !1,
  focused: !1,
  _openEventType: null,
  _childPopupState: null,
  _deferNextOpen: !1,
  _deferNextClose: !1
}, Js = E, By = "useId" in Js ? () => Js.useId() : (
  // istanbul ignore next
  () => {
  }
);
function zy({
  parentPopupState: e,
  popupId: t = By(),
  variant: o,
  disableAutoFocus: r
}) {
  const i = yo(!0);
  vt(() => (i.current = !0, () => {
    i.current = !1;
  }), []);
  const [s, a] = Ne(jy), l = Dn((S) => {
    i.current && a(S);
  }, []), c = Dn((S) => l((y) => ({
    ...y,
    setAnchorElUsed: !0,
    anchorEl: S ?? void 0
  })), []), u = Mn((S) => (s.isOpen ? f(S) : d(S), s)), d = Mn((S) => {
    const y = S instanceof Element ? void 0 : S, C = S instanceof Element ? S : (S == null ? void 0 : S.currentTarget) instanceof Element ? S.currentTarget : void 0;
    if ((y == null ? void 0 : y.type) === "touchstart") {
      l(($) => ({
        ...$,
        _deferNextOpen: !0
      }));
      return;
    }
    const v = y == null ? void 0 : y.clientX, N = y == null ? void 0 : y.clientY, h = typeof v == "number" && typeof N == "number" ? {
      left: v,
      top: N
    } : void 0, P = ($) => {
      if (!S && !$.setAnchorElUsed && o !== "dialog" && Ly("missingEventOrAnchorEl", "eventOrAnchorEl should be defined if setAnchorEl is not used"), e) {
        if (!e.isOpen) return $;
        setTimeout(() => e._setChildPopupState(O));
      }
      const w = {
        ...$,
        isOpen: !0,
        anchorPosition: h,
        hovered: (y == null ? void 0 : y.type) === "mouseover" || $.hovered,
        focused: (y == null ? void 0 : y.type) === "focus" || $.focused,
        _openEventType: y == null ? void 0 : y.type
      };
      return $.setAnchorElUsed || (y != null && y.currentTarget ? w.anchorEl = y == null ? void 0 : y.currentTarget : C && (w.anchorEl = C)), w;
    };
    l(($) => $._deferNextOpen ? (setTimeout(() => l(P), 0), {
      ...$,
      _deferNextOpen: !1
    }) : P($));
  }), m = (S) => {
    const {
      _childPopupState: y
    } = S;
    return setTimeout(() => {
      y == null || y.close(), e == null || e._setChildPopupState(null);
    }), {
      ...S,
      isOpen: !1,
      hovered: !1,
      focused: !1
    };
  }, f = Mn((S) => {
    const y = S instanceof Element ? void 0 : S;
    if ((y == null ? void 0 : y.type) === "touchstart") {
      l((C) => ({
        ...C,
        _deferNextClose: !0
      }));
      return;
    }
    l((C) => C._deferNextClose ? (setTimeout(() => l(m), 0), {
      ...C,
      _deferNextClose: !1
    }) : m(C));
  }), T = Dn((S, y) => {
    S ? d(y) : f(y);
  }, []), g = Mn((S) => {
    const {
      relatedTarget: y
    } = S;
    l((C) => C.hovered && !(y instanceof Element && Vr(y, O)) ? C.focused ? {
      ...C,
      hovered: !1
    } : m(C) : C);
  }), p = Mn((S) => {
    if (!S) return;
    const {
      relatedTarget: y
    } = S;
    l((C) => C.focused && !(y instanceof Element && Vr(y, O)) ? C.hovered ? {
      ...C,
      focused: !1
    } : m(C) : C);
  }), R = Dn((S) => l((y) => ({
    ...y,
    _childPopupState: S
  })), []), O = {
    ...s,
    setAnchorEl: c,
    popupId: t ?? void 0,
    variant: o,
    open: d,
    close: f,
    toggle: u,
    setOpen: T,
    onBlur: p,
    onMouseLeave: g,
    disableAutoFocus: r ?? !!(s.hovered || s.focused),
    _setChildPopupState: R
  };
  return O;
}
function Vy({
  isOpen: e,
  popupId: t,
  variant: o
}) {
  return {
    ...o === "popover" ? {
      "aria-haspopup": !0,
      "aria-controls": e ? t : void 0
    } : o === "popper" ? {
      "aria-describedby": e ? t : void 0
    } : void 0
  };
}
function Wy(e) {
  const {
    open: t,
    onMouseLeave: o
  } = e;
  return {
    ...Vy(e),
    onTouchStart: t,
    onMouseOver: t,
    onMouseLeave: o
  };
}
function Uy({
  isOpen: e,
  anchorEl: t,
  anchorPosition: o,
  close: r,
  popupId: i,
  onMouseLeave: s,
  disableAutoFocus: a,
  _openEventType: l
}) {
  return {
    id: i,
    anchorEl: t,
    anchorPosition: o,
    anchorReference: l === "contextmenu" ? "anchorPosition" : "anchorEl",
    open: e,
    onClose: r,
    onMouseLeave: s,
    ...a && {
      autoFocus: !1,
      disableAutoFocusItem: !0,
      disableAutoFocus: !0,
      disableEnforceFocus: !0,
      disableRestoreFocus: !0
    }
  };
}
function qy(e, {
  popupId: t
}) {
  if (!t) return null;
  const o = typeof e.getRootNode == "function" ? e.getRootNode() : document;
  return typeof o.getElementById == "function" ? o.getElementById(t) : null;
}
function Vr(e, t) {
  const {
    anchorEl: o,
    _childPopupState: r
  } = t;
  return Zs(o, e) || Zs(qy(e, t), e) || r != null && Vr(e, r);
}
function Zs(e, t) {
  if (!e) return !1;
  for (; t; ) {
    if (t === e) return !0;
    t = t.parentElement;
  }
  return !1;
}
function Gy(e) {
  const t = e;
  return t.__esModule ? t.default : e;
}
const Hy = Gy(rr), Yy = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i;
  const s = E.useMemo(() => {
    var a;
    const l = (a = t.slotProps) === null || a === void 0 ? void 0 : a.paper;
    return l instanceof Function ? (c) => {
      const u = l(c);
      return {
        ...u,
        style: {
          pointerEvents: "auto",
          ...u == null ? void 0 : u.style
        }
      };
    } : {
      ...l,
      style: {
        pointerEvents: "auto",
        ...l == null ? void 0 : l.style
      }
    };
  }, [(r = t.slotProps) === null || r === void 0 ? void 0 : r.paper]);
  return /* @__PURE__ */ E.createElement(Hy, b({}, t, {
    ref: o,
    style: {
      pointerEvents: "none",
      ...t.style
    },
    PaperProps: {
      ...t.PaperProps,
      style: {
        pointerEvents: "auto",
        ...(i = t.PaperProps) === null || i === void 0 ? void 0 : i.style
      }
    },
    slotProps: {
      ...t.slotProps,
      paper: s
    }
  }));
}), Ll = ({
  href: e,
  label: t,
  onClick: o,
  open: r,
  variant: i,
  ...s
}) => /* @__PURE__ */ x(
  Et,
  {
    "aria-controls": r ? `basic-menu-${t}` : void 0,
    "aria-expanded": r ? "true" : void 0,
    "aria-haspopup": "true",
    endIconName: r ? "ExpandLess" : "ExpandMore",
    id: `basic-button-${t}`,
    onClick: o,
    variant: i,
    ...s,
    href: e,
    children: t
  }
), Ky = ({
  children: e,
  className: t,
  href: o,
  label: r,
  popupState: i,
  variant: s
}) => {
  const { shadows: a } = lt(), l = i.isOpen;
  return /* @__PURE__ */ se(vn, { children: [
    /* @__PURE__ */ x(
      Ll,
      {
        className: t,
        href: o,
        label: r,
        open: l,
        variant: s,
        ...Wy(i)
      }
    ),
    /* @__PURE__ */ x(
      Yy,
      {
        MenuListProps: {
          "aria-labelledby": `basic-button-${r}`
        },
        slotProps: {
          paper: {
            className: "border-2 border-divider",
            sx: { boxShadow: a[1] }
          }
        },
        ...Uy(i),
        children: e
      }
    )
  ] });
}, Xy = ({
  children: e,
  label: t,
  variant: o
}) => {
  const { shadows: r } = lt(), [i, s] = Ne(null), a = !!i, l = () => s(null);
  return /* @__PURE__ */ se(vn, { children: [
    /* @__PURE__ */ x(
      Ll,
      {
        label: t,
        onClick: (c) => s(c.currentTarget),
        open: a,
        variant: o
      }
    ),
    /* @__PURE__ */ x(
      rr,
      {
        MenuListProps: {
          "aria-labelledby": `basic-button-${t}`
        },
        slotProps: {
          paper: {
            className: "border-2 border-divider",
            sx: { boxShadow: r[1] }
          }
        },
        anchorEl: i,
        onClose: l,
        open: a,
        children: e
      }
    )
  ] });
}, Jy = W(
  Rl
)(({ theme: e }) => ({
  "&.active": {
    backgroundColor: e.palette.grey[100],
    a: {
      color: e.palette.primary.main
    }
  }
})), Zy = ({
  children: e,
  className: t,
  href: o,
  label: r,
  variant: i = "menu"
}) => {
  const { breakpoints: s } = lt(), a = Na(s.down("xl")), l = zy({ popupId: "demoMenu", variant: "popper" });
  return /* @__PURE__ */ x(vn, { children: a ? /* @__PURE__ */ x(Xy, { label: r, variant: i, children: e }) : /* @__PURE__ */ x(
    Ky,
    {
      className: t,
      href: o,
      label: r,
      popupState: l,
      variant: i,
      children: e
    }
  ) });
}, Qs = {
  ExpandLess: _y,
  ExpandMore: Iy,
  Facebook: ky,
  Instagram: My,
  LinkedIn: Ay,
  Twitter: Dy,
  X: Fy
}, Qy = W(({ ...e }) => /* @__PURE__ */ x(Gt, { color: "primary", ...e, variant: "contained" }))(({ theme: e }) => ({
  "&:hover": {
    backgroundColor: e.palette.common.white,
    borderColor: e.palette.primary.main,
    color: e.palette.primary.main
  }
})), jl = W(({ ...e }) => /* @__PURE__ */ x(Gt, { color: "primary", ...e, variant: "outlined" }))(({ theme: e }) => ({
  backgroundColor: e.palette.common.white,
  "&:hover": {
    backgroundColor: e.palette.primary.main,
    borderColor: e.palette.primary.main,
    color: e.palette.common.white
  }
})), ev = W(jl)(({ theme: e }) => ({
  borderColor: e.palette.common.black,
  color: e.palette.common.black,
  "&:hover": {
    backgroundColor: e.palette.common.black,
    borderColor: e.palette.common.black,
    color: e.palette.common.white
  }
})), tv = W(({ ...e }) => /* @__PURE__ */ x(Gt, { color: "info", ...e, variant: "text" }))(({ theme: e }) => ({
  "&.active": {
    backgroundColor: e.palette.grey[100],
    color: e.palette.primary.main
  }
})), nv = W(({ ...e }) => /* @__PURE__ */ x(Gt, { color: "primary", ...e, variant: "text" }))(({ theme: e }) => ({
  padding: 0,
  ...e.typography.h2
})), ov = W(({ ...e }) => /* @__PURE__ */ x(Jy, { className: e.className, children: /* @__PURE__ */ x(Gt, { color: "info", ...e, variant: "text" }) }))(({ theme: e }) => ({
  "&:hover": {
    color: e.palette.primary.main
  }
})), Et = ({
  endIconName: e,
  startIconName: t,
  variant: o,
  ...r
}) => {
  const i = t ? Qs[t] : null, s = e ? Qs[e] : null, a = {
    ...r,
    endIcon: s ? /* @__PURE__ */ x(s, {}) : void 0,
    startIcon: i ? /* @__PURE__ */ x(i, {}) : void 0
  };
  switch (o) {
    case "primary":
      return /* @__PURE__ */ x(Qy, { ...a });
    case "secondary":
      return /* @__PURE__ */ x(jl, { ...a });
    case "outline":
      return /* @__PURE__ */ x(ev, { ...a });
    case "menu":
      return /* @__PURE__ */ x(tv, { ...a });
    case "menuItem":
      return /* @__PURE__ */ x(ov, { ...a });
    case "topic":
      return /* @__PURE__ */ x(nv, { ...a });
    default:
      return /* @__PURE__ */ x(Gt, { ...a });
  }
}, Bl = Wl({ showSnackbar: () => ({}) }), Jv = ({ children: e }) => {
  const [t, o] = Ne(!1), [r, i] = Ne(""), [s, a] = Ne("success"), [l, c] = Ne(3e3), u = (d, m, f = 3e3) => {
    o(!0), i(d), a(m), c(f), setTimeout(() => o(!1), f);
  };
  return /* @__PURE__ */ se(Bl.Provider, { value: { showSnackbar: u }, children: [
    e,
    /* @__PURE__ */ x(Ml, { autoHideDuration: l, open: t, children: /* @__PURE__ */ x(
      vi,
      {
        className: `${s === "success" ? "!bg-primary-main" : "!bg-error-main"}`,
        message: r
      }
    ) })
  ] });
}, rv = () => Ul(Bl), iv = ({
  color: e,
  error: t,
  fullWidth: o,
  label: r,
  name: i,
  register: s,
  required: a,
  rows: l,
  rules: c,
  type: u,
  value: d
}) => /* @__PURE__ */ se(he, { flex: o ? "0 0 100%" : "auto", flexGrow: 1, children: [
  r && /* @__PURE__ */ x(he, { mb: 0.5, children: /* @__PURE__ */ x(
    mi,
    {
      className: e === "white" ? "!text-white" : "",
      required: a,
      sx: { textAlign: "left" },
      children: /* @__PURE__ */ x(We, { variant: "caption", children: r })
    }
  ) }),
  /* @__PURE__ */ x(
    Al,
    {
      error: !!t,
      InputProps: { className: "bg-white" },
      inputProps: {},
      multiline: u === "textarea",
      placeholder: r,
      rows: l,
      type: u,
      value: d,
      fullWidth: !0,
      ...s(i, c)
    }
  ),
  t && /* @__PURE__ */ se(he, { alignItems: "center", display: "flex", mt: 0.5, children: [
    /* @__PURE__ */ x(Ny, { color: "error", fontSize: "small" }),
    /* @__PURE__ */ x(We, { color: "error", ml: 0.5, variant: "caption", children: t.message })
  ] })
] }), sv = ({
  field: e,
  secondary: t
}) => {
  const {
    formState: { errors: o },
    register: r
  } = Xl(), { basetype: i, labels: s, name: a, type: l } = e, c = l.includes("*"), u = s[0] || a;
  return /* @__PURE__ */ x(
    iv,
    {
      color: t ? "white" : "primary",
      error: o[a],
      fullWidth: i === "textarea",
      label: u,
      name: a,
      register: r,
      required: c,
      rules: c ? { required: `${u} is required` } : void 0,
      type: i
    }
  );
}, av = "Submitting...", lv = "Submit", cv = ({
  children: e,
  fields: t,
  frameless: o,
  isLoading: r,
  onSubmit: i,
  secondary: s
}) => /* @__PURE__ */ se(
  he,
  {
    alignItems: { md: "baseline", xs: "center" },
    component: "form",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 3,
    onSubmit: i,
    p: o ? 0 : { md: 5, xs: 3 },
    py: o ? 0 : { xs: 2 },
    children: [
      e && /* @__PURE__ */ x(he, { width: "100%", children: e }),
      /* @__PURE__ */ x(
        he,
        {
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: { md: "left", xs: "center" },
          rowGap: 2,
          width: "100%",
          children: t.map((a) => /* @__PURE__ */ x(
            sv,
            {
              field: a,
              secondary: s
            },
            a.name
          ))
        }
      ),
      /* @__PURE__ */ x(Et, { disabled: r, type: "submit", variant: "primary", children: r ? av : lv })
    ]
  }
), uv = "No fields to display.", dv = "Loading form...", pv = "Thank you for your feedback!", fv = "Something went wrong!", mv = ({
  children: e,
  formId: t,
  frameless: o = !1,
  getForm: r,
  secondary: i = !1,
  submitForm: s
}) => {
  const [a, l] = Ne([]), [c, u] = Ne(!1), [d, m] = Ne(null), { showSnackbar: f } = rv(), T = Jl(), { formState: g, handleSubmit: p, reset: R, watch: O } = T;
  vt(() => {
    !t || !r || (m(null), l([]), r(t).then((C) => l((C == null ? void 0 : C.fields) ?? [])).catch(() => m("Failed to load form fields.")));
  }, [t, r]);
  const S = async () => {
    if (!t) return;
    u(!0);
    const C = new FormData();
    C.append("_wpcf7_unit_tag", `${t}`), a.forEach((v) => {
      C.append(`${v.raw_name}`, O(v.raw_name));
    }), O("your-topic") && C.append("your-topic", O("your-topic"));
    try {
      await s(C, t), f(pv, "success", 3e3), R();
    } catch {
      f(fv, "error", 3e3);
    } finally {
      u(!1);
    }
  };
  if (d)
    return /* @__PURE__ */ x(he, { color: "error.main", p: 3, textAlign: "center", children: d });
  if (!a.length && !c)
    return /* @__PURE__ */ x(he, { p: 3, textAlign: "center", children: uv });
  if (c && !a.length)
    return /* @__PURE__ */ x(he, { p: 3, textAlign: "center", children: dv });
  const y = /* @__PURE__ */ x(Zl, { ...T, formState: g, children: /* @__PURE__ */ x(
    cv,
    {
      fields: a,
      frameless: o,
      isLoading: c,
      onSubmit: p(S),
      secondary: i,
      children: e
    }
  ) });
  return o ? y : /* @__PURE__ */ x(
    qt,
    {
      className: `${i && "!bg-primary-main"} border-2 border-divider`,
      elevation: 1,
      children: y
    }
  );
}, hv = ({
  children: e,
  headline: t,
  subAssetUrl: o,
  subline: r
}) => /* @__PURE__ */ se(he, { textAlign: { md: "left", xs: "center" }, children: [
  r && /* @__PURE__ */ x(We, { mb: 2, variant: "body1", children: r }),
  t && /* @__PURE__ */ x(We, { mb: e ? 4 : 0, variant: "h2", children: t }),
  e,
  o && /* @__PURE__ */ x(
    "img",
    {
      alt: t,
      className: "object-cover w-full h-auto pt-[48px] min-h-[240px]",
      height: 800,
      loading: "lazy",
      src: o,
      width: 800
    }
  )
] }), bv = "relative rounded-lg text-white overflow-hidden h-full min-h-[360px]", gv = "bg-common-black !bg-opacity-80 w-full text-center z-10", yv = "line-clamp-2 !text-white", vv = "line-clamp-3", xv = "w-full h-full absolute inset-0", $r = "https://lightwidget.com/wp-content/uploads/localhost-file-not-found-480x480.avif", xi = ({
  children: e,
  excerpt: t,
  featuredImage: o = $r,
  objectFit: r = "cover",
  title: i,
  titleVariant: s = "h4"
}) => {
  const [a, l] = Ne(!1), c = `${xv} ${r === "cover" ? "object-cover object-center" : "object-contain object-top"}`;
  return /* @__PURE__ */ se(he, { alignItems: "flex-end", className: bv, display: "flex", children: [
    /* @__PURE__ */ se(
      he,
      {
        alignItems: "center",
        className: gv,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: 2,
        children: [
          /* @__PURE__ */ x(
            We,
            {
              className: yv,
              component: "h3",
              dangerouslySetInnerHTML: { __html: i },
              mb: t ? 0 : 1,
              variant: s
            }
          ),
          t && /* @__PURE__ */ x(
            We,
            {
              className: vv,
              component: "div",
              dangerouslySetInnerHTML: { __html: t },
              mb: 1,
              variant: "body1"
            }
          ),
          e
        ]
      }
    ),
    /* @__PURE__ */ x(
      "img",
      {
        alt: "",
        className: c,
        loading: "lazy",
        onError: () => l(!0),
        src: a || o === "" ? $r : o
      }
    )
  ] });
}, Zv = ({
  children: e,
  formId: t,
  getForm: o,
  products: r,
  submitForm: i
}) => {
  const [s, a] = Ne(!1);
  return s ? /* @__PURE__ */ se(vn, { children: [
    /* @__PURE__ */ x(
      hv,
      {
        headline: "Exclusively access all relevant data about our 3D Scanners below.",
        subline: "Download Area"
      }
    ),
    /* @__PURE__ */ x(Re, { mt: 6, spacing: { lg: 5, md: 3, xs: 2 }, container: !0, children: r.map((l, c) => {
      const { datasheet: u, picture: d } = l.info ?? {};
      return /* @__PURE__ */ x(Re, { lg: 4, md: 6, xs: 12, item: !0, children: /* @__PURE__ */ x(
        xi,
        {
          excerpt: l.excerpt,
          featuredImage: d,
          objectFit: "contain",
          title: l.title || "",
          children: /* @__PURE__ */ x(Et, { href: u, variant: "secondary", children: "Download Data Sheet" })
        }
      ) }, c);
    }) })
  ] }) : /* @__PURE__ */ x(
    mv,
    {
      submitForm: async (l, c) => {
        a(!0), i(l, c);
      },
      formId: t,
      getForm: o,
      children: e
    }
  );
}, Ev = "No gallery items to display.", Qv = ({
  children: e,
  transparent: t = !0
}) => {
  const o = !e || Array.isArray(e) && e.length === 0;
  return /* @__PURE__ */ x(
    he,
    {
      alignItems: "center",
      bgcolor: t ? "transparent" : "grey.100",
      borderRadius: 1,
      columnGap: { md: 2, xs: 0 },
      display: "flex",
      flexDirection: { md: "row", xs: "column" },
      justifyContent: "center",
      minHeight: o ? 240 : void 0,
      mx: "auto",
      py: 3,
      rowGap: { md: 0, xs: 2 },
      children: o ? /* @__PURE__ */ x(he, { color: "grey.500", textAlign: "center", width: "100%", children: Ev }) : e
    }
  );
}, Tv = "https://placehold.co/493x304?text=No+Image", e0 = ({
  alt: e,
  bgColor: t = "grey.100",
  children: o,
  imgUrl: r
}) => /* @__PURE__ */ x(he, { bgcolor: t, py: { md: 10, xs: 5 }, children: /* @__PURE__ */ se(Re, { alignItems: "center", maxWidth: "xl", mx: "auto", px: 3, container: !0, children: [
  /* @__PURE__ */ x(Re, { md: 1, xs: 0 }),
  /* @__PURE__ */ x(Re, { md: 5, xs: 12, item: !0, children: /* @__PURE__ */ x(
    "img",
    {
      alt: e ?? "",
      className: "rounded-xl",
      height: 304,
      loading: "lazy",
      src: r || Tv,
      width: 493
    }
  ) }),
  /* @__PURE__ */ x(Re, { md: 1, xs: 0 }),
  /* @__PURE__ */ x(Re, { md: 4, mt: { md: 0, xs: 2 }, xs: 12, item: !0, children: o }),
  /* @__PURE__ */ x(Re, { md: 1, xs: 0 })
] }) });
var An = {}, Pr = {};
const Cv = /* @__PURE__ */ Ot(Hp);
var ea;
function Ov() {
  return ea || (ea = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = Cv;
  }(Pr)), Pr;
}
var ta;
function Rv() {
  if (ta) return An;
  ta = 1;
  var e = ii();
  Object.defineProperty(An, "__esModule", {
    value: !0
  }), An.default = void 0;
  var t = e(/* @__PURE__ */ Ov()), o = na;
  return An.default = (0, t.default)(/* @__PURE__ */ (0, o.jsx)("path", {
    d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"
  }), "ArrowForwardIos"), An;
}
var Sv = /* @__PURE__ */ Rv();
const $v = /* @__PURE__ */ Ur(Sv), Pv = ({
  children: e,
  headline: t
}) => /* @__PURE__ */ se(
  Re,
  {
    className: "border-t border-gray-700",
    mb: { md: 6, xs: 3 },
    mx: "auto",
    pt: { md: 6, xs: 3 },
    textAlign: { md: "left", xs: "center" },
    xs: 12,
    container: !0,
    children: [
      /* @__PURE__ */ x(Re, { md: 6, mt: 0.5, pr: 4, xs: 12, item: !0, children: /* @__PURE__ */ x(We, { component: "h3", mb: 2, variant: "h4", children: t }) }),
      /* @__PURE__ */ x(Re, { md: 6, xs: 12, item: !0, children: e })
    ]
  }
), wv = "No description available.", Nv = ({ excerpt: e, slug: t, title: o }) => /* @__PURE__ */ x(Pv, { headline: o, children: /* @__PURE__ */ se(
  he,
  {
    alignItems: "center",
    columnGap: { md: 2, xs: 0 },
    display: "flex",
    flexDirection: { md: "row", xs: "column" },
    justifyContent: "space-between",
    rowGap: { md: 0, xs: 2 },
    children: [
      e ? /* @__PURE__ */ x(
        We,
        {
          component: "div",
          dangerouslySetInnerHTML: { __html: e }
        }
      ) : /* @__PURE__ */ x(We, { color: "grey.500", variant: "body2", children: wv }),
      /* @__PURE__ */ x(Et, { href: `/about/careers/${t}`, variant: "primary", children: /* @__PURE__ */ x($v, {}) })
    ]
  }
) }), _v = "No jobs available at the moment.", t0 = ({ jobs: e }) => e.length ? e.map(({ excerpt: t, slug: o, title: r }) => /* @__PURE__ */ x(he, { display: "flex", children: /* @__PURE__ */ x(Nv, { excerpt: t, slug: o, title: r }) }, o)) : /* @__PURE__ */ x(he, { color: "grey.500", p: 4, textAlign: "center", width: "100%", children: _v }), zl = ({
  banner: e = !1,
  bgcolor: t = "white",
  children: o,
  mb: r,
  mt: i,
  pb: s,
  pt: a,
  py: l,
  ...c
}) => /* @__PURE__ */ x(he, { bgcolor: t, mb: r, mt: i, pb: s, pt: a, py: l, children: /* @__PURE__ */ x(ll, { maxWidth: "xl", children: /* @__PURE__ */ x(Re, { md: 10, mx: "auto", xs: 12, container: !0, ...c, children: /* @__PURE__ */ x(
  Re,
  {
    md: e ? 7 : void 0,
    ml: e ? "auto" : void 0,
    mx: e ? void 0 : "auto",
    textAlign: { md: "left", xs: "center" },
    xl: e ? 6 : void 0,
    xs: 12,
    item: !0,
    children: o
  }
) }) }) }), Iv = ({ imagesUrls: e }) => {
  var c;
  const t = yo(null), [o, r] = Ne([]), [i, s] = Ne(0), [a, l] = Ne(!1);
  return vt(() => {
    (async () => {
      const d = (f) => new Promise((T, g) => {
        const p = new Image();
        p.src = f, p.onload = () => T(p), p.onerror = () => g("broken");
      }), m = [];
      for (const f of [...e ?? []].sort(
        (T, g) => T.localeCompare(g)
      )) {
        const T = d(f);
        m.push(T);
      }
      r(await Promise.all(m)), l(!0);
    })().finally(() => console.log("done"));
  }, [e]), vt(() => {
    const u = () => {
      var T, g;
      if (!a) return;
      const d = (T = t.current) == null ? void 0 : T.getBoundingClientRect();
      if (!d || !t.current) return;
      const m = Math.min(
        Math.abs(Math.min(0, d.top)) / (((g = t.current) == null ? void 0 : g.clientHeight) - window.innerHeight),
        1
      ), f = Math.floor(m * (o.length - 1));
      o[f] && s(f);
    };
    return window.addEventListener("scroll", u), () => window.removeEventListener("scroll", u);
  }, [o, e, a]), /* @__PURE__ */ x(he, { height: a ? "300vh" : "100vh", children: /* @__PURE__ */ x("div", { className: "h-full relative", ref: t, children: /* @__PURE__ */ x("div", { className: "w-full h-[100vh] xs:min-h-[1024px] md:min-h-[768px] lg:min-h-[800px] sticky top-0", children: a ? /* @__PURE__ */ x(
    "img",
    {
      alt: `frame_${i + 1}`,
      className: "w-full h-full object-cover",
      loading: "lazy",
      src: (c = o == null ? void 0 : o[i]) == null ? void 0 : c.src
    }
  ) : /* @__PURE__ */ x(sr, { height: "100%", variant: "rectangular" }) }) }) });
}, kv = ({
  children: e,
  imagesUrls: t
}) => /* @__PURE__ */ se(vn, { children: [
  /* @__PURE__ */ x(Iv, { imagesUrls: t }),
  /* @__PURE__ */ x(he, { children: /* @__PURE__ */ x(zl, { children: e }) })
] }), Mv = ({
  children: e,
  headline: t,
  sublineElement: o
}) => /* @__PURE__ */ se(he, { textAlign: { md: "left", xs: "center" }, children: [
  /* @__PURE__ */ x(We, { variant: "h2", children: t }),
  sn(o) ? o : o && /* @__PURE__ */ x(
    We,
    {
      component: "div",
      dangerouslySetInnerHTML: { __html: o },
      mb: { sm: 2, xs: 3 },
      mt: { sm: 0.5, xs: 1 },
      variant: "body1"
    }
  ),
  !!e && /* @__PURE__ */ x(
    he,
    {
      alignItems: { md: "left", xs: "center" },
      display: "flex",
      flexDirection: { md: "row", xs: "column" },
      gap: 2,
      children: e
    }
  )
] }), Av = "/download-area", Dv = "Explore", n0 = ({
  products: e,
  scrollable: t = !1
}) => e == null ? void 0 : e.map((o, r) => {
  if (!(o != null && o.info)) return null;
  const {
    "download-cta": i,
    "download-url": s = Av,
    // Legacy leftover
    "explore-cta": a = Dv,
    // Legacy leftover
    "full-name": l,
    photo_gallery: c,
    picture: u,
    "short-name": d
  } = o.info ?? {}, m = (c == null ? void 0 : c.animation.flat().map((R) => R.full_image_url)) ?? [], f = m.length > 9, T = l || o.title, g = /* @__PURE__ */ x(zl, { py: { md: 10, xs: 5 }, children: /* @__PURE__ */ se(Mv, { headline: T, sublineElement: o.excerpt, children: [
    /* @__PURE__ */ se(Et, { href: `/products/${o.slug}`, variant: "primary", children: [
      a,
      " ",
      d || o.title
    ] }),
    /* @__PURE__ */ x(
      Et,
      {
        href: `${s}?default=${o.title}`,
        variant: "secondary",
        children: i
      }
    )
  ] }) }), p = t ? m[0] ?? o.featuredImage : u;
  return f && t ? /* @__PURE__ */ x(
    kv,
    {
      imagesUrls: m,
      children: g
    },
    `${o.id}_${r + 1}`
  ) : /* @__PURE__ */ se(ql, { children: [
    /* @__PURE__ */ x(
      zr,
      {
        assetUrl: p,
        containerClassName: "block md:hidden",
        objectFit: "cover"
      }
    ),
    /* @__PURE__ */ x(
      zr,
      {
        assetUrl: p,
        containerClassName: "hidden md:block",
        objectFit: "contain"
      }
    ),
    g
  ] }, `${o.id}_${r + 1}`);
}), Fv = ({ count: e = 12 }) => Array(e).fill(null).map((t, o) => /* @__PURE__ */ x(Re, { lg: 4, md: 6, xs: 12, item: !0, children: /* @__PURE__ */ x(sr, { height: 360, variant: "rounded" }) }, o)), Lv = ({
  count: e,
  perPage: t,
  setPage: o
}) => {
  const { breakpoints: r } = lt(), i = Na(r.down("xl")), s = Dn(
    ({
      disabled: a,
      onClick: l,
      page: c,
      selected: u,
      type: d
    }) => {
      const m = {
        "end-ellipsis": {
          buttonText: "..."
        },
        first: {
          buttonText: "<<",
          onClick: () => o(1)
        },
        last: {
          buttonText: ">>",
          onClick: () => o(Math.ceil(e / t))
        },
        next: {
          buttonText: ">",
          onClick: () => o((c ?? 1) + 1)
        },
        page: {
          buttonText: `${c}`,
          onClick: l
        },
        previous: {
          buttonText: "<",
          onClick: () => o((c ?? 1) - 1)
        },
        "start-ellipsis": {
          buttonText: "..."
        }
      };
      return d !== "page" ? /* @__PURE__ */ x(Et, { disabled: a, onClick: l, variant: "secondary", children: m[d].buttonText }) : /* @__PURE__ */ x(
        Et,
        {
          disabled: a,
          onClick: l,
          variant: u ? "primary" : "secondary",
          children: c
        }
      );
    },
    [e, t, o]
  );
  return /* @__PURE__ */ x(he, { children: /* @__PURE__ */ x(
    Il,
    {
      boundaryCount: i ? 0 : 1,
      color: "primary",
      count: e,
      onChange: (a, l) => o(l),
      renderItem: s,
      shape: "rounded",
      siblingCount: i ? 0 : 1,
      variant: "outlined"
    }
  ) });
}, jv = "No people to display.", o0 = ({ people: e }) => /* @__PURE__ */ x(Re, { spacing: { lg: 5, md: 3, xs: 2 }, xs: 12, container: !0, children: (e == null ? void 0 : e.length) === 0 ? /* @__PURE__ */ x(Re, { xs: 12, item: !0, children: /* @__PURE__ */ x(he, { color: "grey.500", p: 4, textAlign: "center", children: jv }) }) : e.map((t) => /* @__PURE__ */ x(Re, { lg: 4, md: 6, xs: 12, item: !0, children: /* @__PURE__ */ x(
  xi,
  {
    excerpt: t.excerpt,
    featuredImage: t.featuredImage,
    title: t.title
  }
) }, t.id)) }), r0 = ({
  getPosts: e,
  hidePagination: t = !1,
  list: o = !1,
  perPage: r = 12
}) => {
  const [i, s] = Ne(!0), [a, l] = Ne(1), [c, u] = Ne(0), [d, m] = Ne([]);
  return vt(() => {
    s(!0), e(a, r).then(({ count: f, data: T }) => {
      m(T), u(f);
    }).finally(() => s(!1));
  }, [a, r, e]), /* @__PURE__ */ se(Re, { spacing: { lg: 5, md: 3, xs: 2 }, container: !0, children: [
    i ? /* @__PURE__ */ x(Fv, { count: r }) : d.map((f) => /* @__PURE__ */ x(
      Re,
      {
        lg: o ? 12 : 4,
        md: o ? 12 : 6,
        xs: 12,
        item: !0,
        children: /* @__PURE__ */ x(xi, { featuredImage: f.featuredImage, title: f.title || "", children: /* @__PURE__ */ x(
          Et,
          {
            href: `/3d-academy/${f.slug}`,
            target: "_blank",
            variant: "secondary",
            children: "Read Full Article"
          }
        ) })
      },
      f.id
    )),
    !t && /* @__PURE__ */ x(Re, { mx: "auto", xs: 12, item: !0, children: /* @__PURE__ */ x(Lv, { count: c, perPage: r, setPage: l }) })
  ] });
}, Bv = ["Scan Service", "botspot"], i0 = ({
  defaultProductName: e,
  getProducts: t,
  onChange: o
}) => {
  const [r, i] = Ne(), [s, a] = Ne(""), l = Ti(
    () => (r == null ? void 0 : r.map((u) => u.title)) ?? [],
    [r]
  );
  vt(() => {
    t().then(({ data: u }) => {
      i(u);
    });
  }, [t]), vt(() => {
    const u = e ?? (l == null ? void 0 : l[0]) ?? "";
    a(u), o(u);
  }, [e, l, o]);
  const c = Ti(
    () => [...l, ...Bv],
    [l]
  );
  return /* @__PURE__ */ x(he, { children: /* @__PURE__ */ x(Zy, { label: s, variant: "topic", children: /* @__PURE__ */ x(bl, { sx: { px: 2, py: 1 }, children: c.map((u, d) => /* @__PURE__ */ x(
    hl,
    {
      onChange: () => {
        u && (a(u), o(u));
      },
      control: /* @__PURE__ */ x(al, { checked: s === u }),
      label: u
    },
    d
  )) }) }) });
}, s0 = (e) => {
  var o;
  const t = e.href + ((o = window == null ? void 0 : window.location) == null ? void 0 : o.href) || "";
  return /* @__PURE__ */ x(Et, { ...e, href: t });
};
export {
  Ef as Accordion,
  Bf as AccordionSummary,
  om as AppBar,
  Xv as Banner,
  he as Box,
  Et as Button,
  ll as Container,
  Zv as DownloadAreaContent,
  Ch as Drawer,
  mv as DynamicForm,
  ky as Facebook,
  Qv as Gallery,
  e0 as GalleryTile,
  Re as Grid,
  Gf as IconButton,
  Kv as Iframe,
  mi as InputLabel,
  My as Instagram,
  Nv as Job,
  t0 as Jobs,
  Ay as LinkedIn,
  xl as List,
  Bb as ListItem,
  wb as ListItemButton,
  Fv as LoadingSkeletons,
  hv as MainBlock,
  zr as MediaBlock,
  Zy as Menu,
  Jy as MenuItem,
  zl as PageContainer,
  Lv as Pagination,
  qt as Paper,
  o0 as People,
  xi as Post,
  r0 as Posts,
  n0 as ProductsList,
  i0 as ProductsTopic,
  kv as ScrollableBlock,
  Mv as SecondaryBlock,
  s0 as ShareButton,
  sr as Skeleton,
  Py as SkeletonVideo,
  Jv as SnackbarProvider,
  Al as TextField,
  Hv as ThemeRegistry,
  Pv as Tile,
  hy as Toolbar,
  We as Typography,
  Fy as X,
  Ql as getComponents,
  ht as palette,
  Yv as requestInit,
  un as theme,
  Fp as typography,
  Na as useMediaQuery,
  lt as useTheme
};
