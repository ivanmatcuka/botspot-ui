"use client";
import Zs, { jsx as y, jsxs as se, Fragment as xn } from "react/jsx-runtime";
import * as E from "react";
import ft, { isValidElement as an, cloneElement as mo, Children as Vl, useRef as xo, useState as Ae, useEffect as Ct, useCallback as Fn, createContext as Wl, useContext as Ul, Fragment as ql, useMemo as Hl } from "react";
import Gl from "@emotion/styled";
import { CacheProvider as Yl, Global as Kl, ThemeContext as Vr, css as $r, keyframes as En } from "@emotion/react";
import * as Xl from "react-dom";
import to from "react-dom";
import { useForm as Jl, FormProvider as Zl } from "react-hook-form";
const Wn = {
  black: "#000",
  white: "#fff"
}, Xt = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Jt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Zt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Qt = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, en = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Sn = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ql = {
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
};
function Ot(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let o = 1; o < arguments.length; o += 1)
    t += "&args[]=" + encodeURIComponent(arguments[o]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ot
}, Symbol.toStringTag, { value: "Module" })), fn = "$$material";
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
function Wr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Rt(e) {
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
var no = { exports: {} }, oo = { exports: {} }, ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ti;
function tc() {
  if (Ti) return ye;
  Ti = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function v(x) {
    if (typeof x == "object" && x !== null) {
      var $ = x.$$typeof;
      switch ($) {
        case t:
          switch (x = x.type, x) {
            case c:
            case u:
            case r:
            case s:
            case i:
            case h:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case l:
                case d:
                case g:
                case T:
                case a:
                  return x;
                default:
                  return $;
              }
          }
        case o:
          return $;
      }
    }
  }
  function C(x) {
    return v(x) === u;
  }
  return ye.AsyncMode = c, ye.ConcurrentMode = u, ye.ContextConsumer = l, ye.ContextProvider = a, ye.Element = t, ye.ForwardRef = d, ye.Fragment = r, ye.Lazy = g, ye.Memo = T, ye.Portal = o, ye.Profiler = s, ye.StrictMode = i, ye.Suspense = h, ye.isAsyncMode = function(x) {
    return C(x) || v(x) === c;
  }, ye.isConcurrentMode = C, ye.isContextConsumer = function(x) {
    return v(x) === l;
  }, ye.isContextProvider = function(x) {
    return v(x) === a;
  }, ye.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, ye.isForwardRef = function(x) {
    return v(x) === d;
  }, ye.isFragment = function(x) {
    return v(x) === r;
  }, ye.isLazy = function(x) {
    return v(x) === g;
  }, ye.isMemo = function(x) {
    return v(x) === T;
  }, ye.isPortal = function(x) {
    return v(x) === o;
  }, ye.isProfiler = function(x) {
    return v(x) === s;
  }, ye.isStrictMode = function(x) {
    return v(x) === i;
  }, ye.isSuspense = function(x) {
    return v(x) === h;
  }, ye.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === u || x === s || x === i || x === h || x === f || typeof x == "object" && x !== null && (x.$$typeof === g || x.$$typeof === T || x.$$typeof === a || x.$$typeof === l || x.$$typeof === d || x.$$typeof === R || x.$$typeof === O || x.$$typeof === S || x.$$typeof === p);
  }, ye.typeOf = v, ye;
}
var ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ci;
function nc() {
  return Ci || (Ci = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function v(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === u || _ === s || _ === i || _ === h || _ === f || typeof _ == "object" && _ !== null && (_.$$typeof === g || _.$$typeof === T || _.$$typeof === a || _.$$typeof === l || _.$$typeof === d || _.$$typeof === R || _.$$typeof === O || _.$$typeof === S || _.$$typeof === p);
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
              case h:
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
    var x = c, $ = u, m = l, w = a, P = t, N = d, I = r, A = g, D = T, L = o, F = s, j = i, z = h, M = !1;
    function G(_) {
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
    function H(_) {
      return C(_) === o;
    }
    function K(_) {
      return C(_) === s;
    }
    function ne(_) {
      return C(_) === i;
    }
    function te(_) {
      return C(_) === h;
    }
    ve.AsyncMode = x, ve.ConcurrentMode = $, ve.ContextConsumer = m, ve.ContextProvider = w, ve.Element = P, ve.ForwardRef = N, ve.Fragment = I, ve.Lazy = A, ve.Memo = D, ve.Portal = L, ve.Profiler = F, ve.StrictMode = j, ve.Suspense = z, ve.isAsyncMode = G, ve.isConcurrentMode = k, ve.isContextConsumer = V, ve.isContextProvider = ee, ve.isElement = Z, ve.isForwardRef = U, ve.isFragment = Q, ve.isLazy = B, ve.isMemo = Y, ve.isPortal = H, ve.isProfiler = K, ve.isStrictMode = ne, ve.isSuspense = te, ve.isValidElementType = v, ve.typeOf = C;
  }()), ve;
}
var Oi;
function Qs() {
  return Oi || (Oi = 1, process.env.NODE_ENV === "production" ? oo.exports = tc() : oo.exports = nc()), oo.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var dr, Ri;
function oc() {
  if (Ri) return dr;
  Ri = 1;
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
  return dr = i() ? Object.assign : function(s, a) {
    for (var l, c = r(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var h in l)
        t.call(l, h) && (c[h] = l[h]);
      if (e) {
        u = e(l);
        for (var f = 0; f < u.length; f++)
          o.call(l, u[f]) && (c[u[f]] = l[u[f]]);
      }
    }
    return c;
  }, dr;
}
var pr, Si;
function Ur() {
  if (Si) return pr;
  Si = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return pr = e, pr;
}
var fr, Pi;
function ea() {
  return Pi || (Pi = 1, fr = Function.call.bind(Object.prototype.hasOwnProperty)), fr;
}
var mr, wi;
function rc() {
  if (wi) return mr;
  wi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Ur(), o = {}, r = /* @__PURE__ */ ea();
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
          var h;
          try {
            if (typeof s[d] != "function") {
              var f = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            h = s[d](a, d, c, l, null, t);
          } catch (g) {
            h = g;
          }
          if (h && !(h instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in o)) {
            o[h.message] = !0;
            var T = u ? u() : "";
            e(
              "Failed " + l + " type: " + h.message + (T ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, mr = i, mr;
}
var hr, $i;
function ic() {
  if ($i) return hr;
  $i = 1;
  var e = Qs(), t = oc(), o = /* @__PURE__ */ Ur(), r = /* @__PURE__ */ ea(), i = /* @__PURE__ */ rc(), s = function() {
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
  return hr = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(k) {
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
      arrayOf: v,
      element: C(),
      elementType: x(),
      instanceOf: $,
      node: N(),
      objectOf: w,
      oneOf: m,
      oneOfType: P,
      shape: A,
      exact: D
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
      function Z(Q, B, Y, H, K, ne, te) {
        if (H = H || f, ne = ne || Y, te !== o) {
          if (c) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var re = H + ":" + Y;
            !V[re] && // Avoid spamming the console because they are often not actionable except for lib authors
            ee < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + ne + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), V[re] = !0, ee++);
          }
        }
        return B[Y] == null ? Q ? B[Y] === null ? new p("The " + K + " `" + ne + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new p("The " + K + " `" + ne + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : k(B, Y, H, K, ne);
      }
      var U = Z.bind(null, !1);
      return U.isRequired = Z.bind(null, !0), U;
    }
    function O(k) {
      function V(ee, Z, U, Q, B, Y) {
        var H = ee[Z], K = j(H);
        if (K !== k) {
          var ne = z(H);
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
    function v(k) {
      function V(ee, Z, U, Q, B) {
        if (typeof k != "function")
          return new p("Property `" + B + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var Y = ee[Z];
        if (!Array.isArray(Y)) {
          var H = j(Y);
          return new p("Invalid " + Q + " `" + B + "` of type " + ("`" + H + "` supplied to `" + U + "`, expected an array."));
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
          var Y = j(B);
          return new p("Invalid " + U + " `" + Q + "` of type " + ("`" + Y + "` supplied to `" + Z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return R(k);
    }
    function x() {
      function k(V, ee, Z, U, Q) {
        var B = V[ee];
        if (!e.isValidElementType(B)) {
          var Y = j(B);
          return new p("Invalid " + U + " `" + Q + "` of type " + ("`" + Y + "` supplied to `" + Z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return R(k);
    }
    function $(k) {
      function V(ee, Z, U, Q, B) {
        if (!(ee[Z] instanceof k)) {
          var Y = k.name || f, H = G(ee[Z]);
          return new p("Invalid " + Q + " `" + B + "` of type " + ("`" + H + "` supplied to `" + U + "`, expected ") + ("instance of `" + Y + "`."));
        }
        return null;
      }
      return R(V);
    }
    function m(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function V(ee, Z, U, Q, B) {
        for (var Y = ee[Z], H = 0; H < k.length; H++)
          if (g(Y, k[H]))
            return null;
        var K = JSON.stringify(k, function(te, _) {
          var re = z(_);
          return re === "symbol" ? String(_) : _;
        });
        return new p("Invalid " + Q + " `" + B + "` of value `" + String(Y) + "` " + ("supplied to `" + U + "`, expected one of " + K + "."));
      }
      return R(V);
    }
    function w(k) {
      function V(ee, Z, U, Q, B) {
        if (typeof k != "function")
          return new p("Property `" + B + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var Y = ee[Z], H = j(Y);
        if (H !== "object")
          return new p("Invalid " + Q + " `" + B + "` of type " + ("`" + H + "` supplied to `" + U + "`, expected an object."));
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
    function P(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var V = 0; V < k.length; V++) {
        var ee = k[V];
        if (typeof ee != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + M(ee) + " at index " + V + "."
          ), a;
      }
      function Z(U, Q, B, Y, H) {
        for (var K = [], ne = 0; ne < k.length; ne++) {
          var te = k[ne], _ = te(U, Q, B, Y, H, o);
          if (_ == null)
            return null;
          _.data && r(_.data, "expectedType") && K.push(_.data.expectedType);
        }
        var re = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new p("Invalid " + Y + " `" + H + "` supplied to " + ("`" + B + "`" + re + "."));
      }
      return R(Z);
    }
    function N() {
      function k(V, ee, Z, U, Q) {
        return L(V[ee]) ? null : new p("Invalid " + U + " `" + Q + "` supplied to " + ("`" + Z + "`, expected a ReactNode."));
      }
      return R(k);
    }
    function I(k, V, ee, Z, U) {
      return new p(
        (k || "React class") + ": " + V + " type `" + ee + "." + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function A(k) {
      function V(ee, Z, U, Q, B) {
        var Y = ee[Z], H = j(Y);
        if (H !== "object")
          return new p("Invalid " + Q + " `" + B + "` of type `" + H + "` " + ("supplied to `" + U + "`, expected `object`."));
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
    function D(k) {
      function V(ee, Z, U, Q, B) {
        var Y = ee[Z], H = j(Y);
        if (H !== "object")
          return new p("Invalid " + Q + " `" + B + "` of type `" + H + "` " + ("supplied to `" + U + "`, expected `object`."));
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
    function L(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(L);
          if (k === null || l(k))
            return !0;
          var V = h(k);
          if (V) {
            var ee = V.call(k), Z;
            if (V !== k.entries) {
              for (; !(Z = ee.next()).done; )
                if (!L(Z.value))
                  return !1;
            } else
              for (; !(Z = ee.next()).done; ) {
                var U = Z.value;
                if (U && !L(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function F(k, V) {
      return k === "symbol" ? !0 : V ? V["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && V instanceof Symbol : !1;
    }
    function j(k) {
      var V = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : F(V, k) ? "symbol" : V;
    }
    function z(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var V = j(k);
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
    function G(k) {
      return !k.constructor || !k.constructor.name ? f : k.constructor.name;
    }
    return T.checkPropTypes = i, T.resetWarningCache = i.resetWarningCache, T.PropTypes = T, T;
  }, hr;
}
var br, Ni;
function sc() {
  if (Ni) return br;
  Ni = 1;
  var e = /* @__PURE__ */ Ur();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, br = function() {
    function r(a, l, c, u, d, h) {
      if (h !== e) {
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
  }, br;
}
var _i;
function ac() {
  if (_i) return no.exports;
  if (_i = 1, process.env.NODE_ENV !== "production") {
    var e = Qs(), t = !0;
    no.exports = /* @__PURE__ */ ic()(e.isElement, t);
  } else
    no.exports = /* @__PURE__ */ sc()();
  return no.exports;
}
var lc = /* @__PURE__ */ ac();
const n = /* @__PURE__ */ Wr(lc);
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
}(), Ve = "-ms-", Eo = "-moz-", he = "-webkit-", ta = "comm", qr = "rule", Hr = "decl", pc = "@import", na = "@keyframes", fc = "@layer", mc = Math.abs, Do = String.fromCharCode, hc = Object.assign;
function bc(e, t) {
  return Le(e, 0) ^ 45 ? (((t << 2 ^ Le(e, 0)) << 2 ^ Le(e, 1)) << 2 ^ Le(e, 2)) << 2 ^ Le(e, 3) : 0;
}
function oa(e) {
  return e.trim();
}
function gc(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function be(e, t, o) {
  return e.replace(t, o);
}
function Nr(e, t) {
  return e.indexOf(t);
}
function Le(e, t) {
  return e.charCodeAt(t) | 0;
}
function Un(e, t, o) {
  return e.slice(t, o);
}
function gt(e) {
  return e.length;
}
function Gr(e) {
  return e.length;
}
function ro(e, t) {
  return t.push(e), e;
}
function yc(e, t) {
  return e.map(t).join("");
}
var Fo = 1, mn = 1, ra = 0, Ye = 0, Me = 0, Tn = "";
function jo(e, t, o, r, i, s, a) {
  return { value: e, root: t, parent: o, type: r, props: i, children: s, line: Fo, column: mn, length: a, return: "" };
}
function Pn(e, t) {
  return hc(jo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function vc() {
  return Me;
}
function xc() {
  return Me = Ye > 0 ? Le(Tn, --Ye) : 0, mn--, Me === 10 && (mn = 1, Fo--), Me;
}
function Ze() {
  return Me = Ye < ra ? Le(Tn, Ye++) : 0, mn++, Me === 10 && (mn = 1, Fo++), Me;
}
function yt() {
  return Le(Tn, Ye);
}
function ho() {
  return Ye;
}
function Kn(e, t) {
  return Un(Tn, e, t);
}
function qn(e) {
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
function ia(e) {
  return Fo = mn = 1, ra = gt(Tn = e), Ye = 0, [];
}
function sa(e) {
  return Tn = "", e;
}
function bo(e) {
  return oa(Kn(Ye - 1, _r(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ec(e) {
  for (; (Me = yt()) && Me < 33; )
    Ze();
  return qn(e) > 2 || qn(Me) > 3 ? "" : " ";
}
function Tc(e, t) {
  for (; --t && Ze() && !(Me < 48 || Me > 102 || Me > 57 && Me < 65 || Me > 70 && Me < 97); )
    ;
  return Kn(e, ho() + (t < 6 && yt() == 32 && Ze() == 32));
}
function _r(e) {
  for (; Ze(); )
    switch (Me) {
      // ] ) " '
      case e:
        return Ye;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && _r(Me);
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
  for (; Ze() && e + Me !== 57; )
    if (e + Me === 84 && yt() === 47)
      break;
  return "/*" + Kn(t, Ye - 1) + "*" + Do(e === 47 ? e : Ze());
}
function Oc(e) {
  for (; !qn(yt()); )
    Ze();
  return Kn(e, Ye);
}
function Rc(e) {
  return sa(go("", null, null, null, [""], e = ia(e), 0, [0], e));
}
function go(e, t, o, r, i, s, a, l, c) {
  for (var u = 0, d = 0, h = a, f = 0, T = 0, g = 0, p = 1, R = 1, O = 1, S = 0, v = "", C = i, x = s, $ = r, m = v; R; )
    switch (g = S, S = Ze()) {
      // (
      case 40:
        if (g != 108 && Le(m, h - 1) == 58) {
          Nr(m += be(bo(S), "&", "&\f"), "&\f") != -1 && (O = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        m += bo(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        m += Ec(g);
        break;
      // \
      case 92:
        m += Tc(ho() - 1, 7);
        continue;
      // /
      case 47:
        switch (yt()) {
          case 42:
          case 47:
            ro(Sc(Cc(Ze(), ho()), t, o), c);
            break;
          default:
            m += "/";
        }
        break;
      // {
      case 123 * p:
        l[u++] = gt(m) * O;
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
            O == -1 && (m = be(m, /\f/g, "")), T > 0 && gt(m) - h && ro(T > 32 ? ki(m + ";", r, o, h - 1) : ki(be(m, " ", "") + ";", r, o, h - 2), c);
            break;
          // @ ;
          case 59:
            m += ";";
          // { rule/at-rule
          default:
            if (ro($ = Ii(m, t, o, u, d, i, l, v, C = [], x = [], h), s), S === 123)
              if (d === 0)
                go(m, t, $, $, C, s, h, l, x);
              else
                switch (f === 99 && Le(m, 3) === 110 ? 100 : f) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    go(e, $, $, r && ro(Ii(e, $, $, 0, 0, i, l, v, i, C = [], h), x), i, x, h, l, r ? C : x);
                    break;
                  default:
                    go(m, $, $, $, [""], x, 0, l, x);
                }
        }
        u = d = T = 0, p = O = 1, v = m = "", h = a;
        break;
      // :
      case 58:
        h = 1 + gt(m), T = g;
      default:
        if (p < 1) {
          if (S == 123)
            --p;
          else if (S == 125 && p++ == 0 && xc() == 125)
            continue;
        }
        switch (m += Do(S), S * p) {
          // &
          case 38:
            O = d > 0 ? 1 : (m += "\f", -1);
            break;
          // ,
          case 44:
            l[u++] = (gt(m) - 1) * O, O = 1;
            break;
          // @
          case 64:
            yt() === 45 && (m += bo(Ze())), f = yt(), d = h = gt(v = m += Oc(ho())), S++;
            break;
          // -
          case 45:
            g === 45 && gt(m) == 2 && (p = 0);
        }
    }
  return s;
}
function Ii(e, t, o, r, i, s, a, l, c, u, d) {
  for (var h = i - 1, f = i === 0 ? s : [""], T = Gr(f), g = 0, p = 0, R = 0; g < r; ++g)
    for (var O = 0, S = Un(e, h + 1, h = mc(p = a[g])), v = e; O < T; ++O)
      (v = oa(p > 0 ? f[O] + " " + S : be(S, /&\f/g, f[O]))) && (c[R++] = v);
  return jo(e, t, o, i === 0 ? qr : l, c, u, d);
}
function Sc(e, t, o) {
  return jo(e, t, o, ta, Do(vc()), Un(e, 2, -2), 0);
}
function ki(e, t, o, r) {
  return jo(e, t, o, Hr, Un(e, 0, r), Un(e, r + 1, -1), r);
}
function ln(e, t) {
  for (var o = "", r = Gr(e), i = 0; i < r; i++)
    o += t(e[i], i, e, t) || "";
  return o;
}
function Pc(e, t, o, r) {
  switch (e.type) {
    case fc:
      if (e.children.length) break;
    case pc:
    case Hr:
      return e.return = e.return || e.value;
    case ta:
      return "";
    case na:
      return e.return = e.value + "{" + ln(e.children, r) + "}";
    case qr:
      e.value = e.props.join(",");
  }
  return gt(o = ln(e.children, r)) ? e.return = e.value + "{" + o + "}" : "";
}
function wc(e) {
  var t = Gr(e);
  return function(o, r, i, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](o, r, i, s) || "";
    return a;
  };
}
function $c(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Nc = function(t, o, r) {
  for (var i = 0, s = 0; i = s, s = yt(), i === 38 && s === 12 && (o[r] = 1), !qn(s); )
    Ze();
  return Kn(t, Ye);
}, _c = function(t, o) {
  var r = -1, i = 44;
  do
    switch (qn(i)) {
      case 0:
        i === 38 && yt() === 12 && (o[r] = 1), t[r] += Nc(Ye - 1, o, r);
        break;
      case 2:
        t[r] += bo(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = yt() === 58 ? "&\f" : "", o[r] = t[r].length;
          break;
        }
      // fallthrough
      default:
        t[r] += Do(i);
    }
  while (i = Ze());
  return t;
}, Ic = function(t, o) {
  return sa(_c(ia(t), o));
}, Mi = /* @__PURE__ */ new WeakMap(), kc = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var o = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && o.charCodeAt(0) !== 58 && !Mi.get(r)) && !i) {
      Mi.set(t, !0);
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
function aa(e, t) {
  switch (bc(e, t)) {
    // color-adjust
    case 5103:
      return he + "print-" + e + e;
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
      return he + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return he + e + Eo + e + Ve + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return he + e + Ve + e + e;
    // order
    case 6165:
      return he + e + Ve + "flex-" + e + e;
    // align-items
    case 5187:
      return he + e + be(e, /(\w+).+(:[^]+)/, he + "box-$1$2" + Ve + "flex-$1$2") + e;
    // align-self
    case 5443:
      return he + e + Ve + "flex-item-" + be(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return he + e + Ve + "flex-line-pack" + be(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return he + e + Ve + be(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return he + e + Ve + be(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return he + "box-" + be(e, "-grow", "") + he + e + Ve + be(e, "grow", "positive") + e;
    // transition
    case 4554:
      return he + be(e, /([^-])(transform)/g, "$1" + he + "$2") + e;
    // cursor
    case 6187:
      return be(be(be(e, /(zoom-|grab)/, he + "$1"), /(image-set)/, he + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return be(e, /(image-set\([^]*)/, he + "$1$`$1");
    // justify-content
    case 4968:
      return be(be(e, /(.+:)(flex-)?(.*)/, he + "box-pack:$3" + Ve + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + he + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return be(e, /(.+)-inline(.+)/, he + "$1$2") + e;
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
      if (gt(e) - 1 - t > 6) switch (Le(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Le(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return be(e, /(.+:)(.+)-([^]+)/, "$1" + he + "$2-$3$1" + Eo + (Le(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Nr(e, "stretch") ? aa(be(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (Le(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Le(e, gt(e) - 3 - (~Nr(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return be(e, ":", ":" + he) + e;
        // (inline-)?fl(e)x
        case 101:
          return be(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + he + (Le(e, 14) === 45 ? "inline-" : "") + "box$3$1" + he + "$2$3$1" + Ve + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (Le(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return he + e + Ve + be(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return he + e + Ve + be(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return he + e + Ve + be(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return he + e + Ve + e + e;
  }
  return e;
}
var Ac = function(t, o, r, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Hr:
      t.return = aa(t.value, t.length);
      break;
    case na:
      return ln([Pn(t, {
        value: be(t.value, "@", "@" + he)
      })], i);
    case qr:
      if (t.length) return yc(t.props, function(s) {
        switch (gc(s, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return ln([Pn(t, {
              props: [be(s, /:(read-\w+)/, ":" + Eo + "$1")]
            })], i);
          // :placeholder
          case "::placeholder":
            return ln([Pn(t, {
              props: [be(s, /:(plac\w+)/, ":" + he + "input-$1")]
            }), Pn(t, {
              props: [be(s, /:(plac\w+)/, ":" + Eo + "$1")]
            }), Pn(t, {
              props: [be(s, /:(plac\w+)/, Ve + "input-$1")]
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
    var d, h = [Pc, $c(function(p) {
      d.insert(p);
    })], f = wc(u.concat(i, h)), T = function(R) {
      return ln(Rc(R), f);
    };
    c = function(R, O, S, v) {
      d = S, T(R ? R + "{" + O.styles + "}" : O.styles), v && (g.inserted[O.name] = !0);
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
function la(e) {
  const {
    injectFirst: t,
    children: o
  } = e;
  return t && Ir ? /* @__PURE__ */ y(Yl, {
    value: Ir,
    children: o
  }) : o;
}
process.env.NODE_ENV !== "production" && (la.propTypes = {
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
function jc(e) {
  return e == null || Object.keys(e).length === 0;
}
function Yr(e) {
  const {
    styles: t,
    defaultTheme: o = {}
  } = e;
  return /* @__PURE__ */ y(Kl, {
    styles: typeof t == "function" ? (i) => t(jc(i) ? o : i) : t
  });
}
process.env.NODE_ENV !== "production" && (Yr.propTypes = {
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
function Kr(e, t) {
  const o = Gl(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), o(...r);
  } : o;
}
const ca = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Yr,
  StyledEngineProvider: la,
  ThemeContext: Vr,
  css: $r,
  default: Kr,
  internal_processStyles: ca,
  keyframes: En
}, Symbol.toStringTag, { value: "Module" }));
function Tt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ua(e) {
  if (/* @__PURE__ */ E.isValidElement(e) || !Tt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = ua(e[o]);
  }), t;
}
function Ue(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? b({}, e) : e;
  return Tt(e) && Tt(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ E.isValidElement(t[i]) ? r[i] = t[i] : Tt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Tt(e[i]) ? r[i] = Ue(e[i], t[i], o) : o.clone ? r[i] = Tt(t[i]) ? ua(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const Bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ue,
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
function da(e) {
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
  function h(f) {
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
    not: h,
    unit: o
  }, i);
}
const Wc = {
  borderRadius: 4
}, kt = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {};
function Bn(e, t) {
  return t ? Ue(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Xr = {
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
}, Ai = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Xr[e]}px)`
};
function Ke(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || Ai;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = o(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || Ai;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(s.values || Xr).indexOf(l) !== -1) {
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
function pa(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const s = e.up(i);
    return r[s] = {}, r;
  }, {})) || {};
}
function fa(e, t) {
  return e.reduce((o, r) => {
    const i = o[r];
    return (!i || Object.keys(i).length === 0) && delete o[r], o;
  }, t);
}
function Uc(e, ...t) {
  const o = pa(e), r = [o, ...t].reduce((i, s) => Ue(i, s), {});
  return fa(Object.keys(o), r);
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
function zt({
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ot(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: X
}, Symbol.toStringTag, { value: "Module" }));
function Lo(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function To(e, t, o, r = o) {
  let i;
  return typeof e == "function" ? i = e(o) : Array.isArray(e) ? i = e[o] || r : i = Lo(e, o) || r, t && (i = t(i, r, e)), i;
}
function ke(e) {
  const {
    prop: t,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = Lo(c, r) || {};
    return Ke(a, l, (h) => {
      let f = To(u, i, h);
      return h === f && typeof h == "string" && (f = To(u, i, `${t}${h === "default" ? "" : X(h)}`, h)), o === !1 ? f : {
        [o]: f
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: kt
  } : {}, s.filterProps = [t], s;
}
function Gc(e) {
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
}, Di = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Xc = Gc((e) => {
  if (e.length > 2)
    if (Di[e])
      e = Di[e];
    else
      return [e];
  const [t, o] = e.split(""), r = Yc[t], i = Kc[o] || "";
  return Array.isArray(i) ? i.map((s) => r + s) : [r + i];
}), Bo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], zo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Jc = [...Bo, ...zo];
function Xn(e, t, o, r) {
  var i;
  const s = (i = Lo(e, t, !1)) != null ? i : o;
  return typeof s == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), s * a) : Array.isArray(s) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > s.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${a} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[a]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Jr(e) {
  return Xn(e, "spacing", 8, "spacing");
}
function Vt(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const o = Math.abs(t), r = e(o);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Zc(e, t) {
  return (o) => e.reduce((r, i) => (r[i] = Vt(t, o), r), {});
}
function Qc(e, t, o, r) {
  if (t.indexOf(o) === -1)
    return null;
  const i = Xc(o), s = Zc(i, r), a = e[o];
  return Ke(e, a, s);
}
function ma(e, t) {
  const o = Jr(e.theme);
  return Object.keys(e).map((r) => Qc(e, t, r, o)).reduce(Bn, {});
}
function Ne(e) {
  return ma(e, Bo);
}
Ne.propTypes = process.env.NODE_ENV !== "production" ? Bo.reduce((e, t) => (e[t] = kt, e), {}) : {};
Ne.filterProps = Bo;
function _e(e) {
  return ma(e, zo);
}
_e.propTypes = process.env.NODE_ENV !== "production" ? zo.reduce((e, t) => (e[t] = kt, e), {}) : {};
_e.filterProps = zo;
process.env.NODE_ENV !== "production" && Jc.reduce((e, t) => (e[t] = kt, e), {});
function eu(e = 8) {
  if (e.mui)
    return e;
  const t = Jr({
    spacing: e
  }), o = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return o.mui = !0, o;
}
function Vo(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((s) => {
    r[s] = i;
  }), r), {}), o = (r) => Object.keys(r).reduce((i, s) => t[s] ? Bn(i, t[s](r)) : i, {});
  return o.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, o.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), o;
}
function rt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function st(e, t) {
  return ke({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const tu = st("border", rt), nu = st("borderTop", rt), ou = st("borderRight", rt), ru = st("borderBottom", rt), iu = st("borderLeft", rt), su = st("borderColor"), au = st("borderTopColor"), lu = st("borderRightColor"), cu = st("borderBottomColor"), uu = st("borderLeftColor"), du = st("outline", rt), pu = st("outlineColor"), Wo = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Xn(e.theme, "shape.borderRadius", 4, "borderRadius"), o = (r) => ({
      borderRadius: Vt(t, r)
    });
    return Ke(e, e.borderRadius, o);
  }
  return null;
};
Wo.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: kt
} : {};
Wo.filterProps = ["borderRadius"];
Vo(tu, nu, ou, ru, iu, su, au, lu, cu, uu, Wo, du, pu);
const Uo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Xn(e.theme, "spacing", 8, "gap"), o = (r) => ({
      gap: Vt(t, r)
    });
    return Ke(e, e.gap, o);
  }
  return null;
};
Uo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: kt
} : {};
Uo.filterProps = ["gap"];
const qo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Xn(e.theme, "spacing", 8, "columnGap"), o = (r) => ({
      columnGap: Vt(t, r)
    });
    return Ke(e, e.columnGap, o);
  }
  return null;
};
qo.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: kt
} : {};
qo.filterProps = ["columnGap"];
const Ho = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Xn(e.theme, "spacing", 8, "rowGap"), o = (r) => ({
      rowGap: Vt(t, r)
    });
    return Ke(e, e.rowGap, o);
  }
  return null;
};
Ho.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: kt
} : {};
Ho.filterProps = ["rowGap"];
const fu = ke({
  prop: "gridColumn"
}), mu = ke({
  prop: "gridRow"
}), hu = ke({
  prop: "gridAutoFlow"
}), bu = ke({
  prop: "gridAutoColumns"
}), gu = ke({
  prop: "gridAutoRows"
}), yu = ke({
  prop: "gridTemplateColumns"
}), vu = ke({
  prop: "gridTemplateRows"
}), xu = ke({
  prop: "gridTemplateAreas"
}), Eu = ke({
  prop: "gridArea"
});
Vo(Uo, qo, Ho, fu, mu, hu, bu, gu, yu, vu, xu, Eu);
function cn(e, t) {
  return t === "grey" ? t : e;
}
const Tu = ke({
  prop: "color",
  themeKey: "palette",
  transform: cn
}), Cu = ke({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: cn
}), Ou = ke({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: cn
});
Vo(Tu, Cu, Ou);
function Je(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ru = ke({
  prop: "width",
  transform: Je
}), Zr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      var r, i;
      const s = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[o]) || Xr[o];
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
Zr.filterProps = ["maxWidth"];
const Su = ke({
  prop: "minWidth",
  transform: Je
}), Pu = ke({
  prop: "height",
  transform: Je
}), wu = ke({
  prop: "maxHeight",
  transform: Je
}), $u = ke({
  prop: "minHeight",
  transform: Je
});
ke({
  prop: "size",
  cssProperty: "width",
  transform: Je
});
ke({
  prop: "size",
  cssProperty: "height",
  transform: Je
});
const Nu = ke({
  prop: "boxSizing"
});
Vo(Ru, Zr, Su, Pu, wu, $u, Nu);
const Jn = {
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
    style: Wo
  },
  // palette
  color: {
    themeKey: "palette",
    transform: cn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: cn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: cn
  },
  // spacing
  p: {
    style: _e
  },
  pt: {
    style: _e
  },
  pr: {
    style: _e
  },
  pb: {
    style: _e
  },
  pl: {
    style: _e
  },
  px: {
    style: _e
  },
  py: {
    style: _e
  },
  padding: {
    style: _e
  },
  paddingTop: {
    style: _e
  },
  paddingRight: {
    style: _e
  },
  paddingBottom: {
    style: _e
  },
  paddingLeft: {
    style: _e
  },
  paddingX: {
    style: _e
  },
  paddingY: {
    style: _e
  },
  paddingInline: {
    style: _e
  },
  paddingInlineStart: {
    style: _e
  },
  paddingInlineEnd: {
    style: _e
  },
  paddingBlock: {
    style: _e
  },
  paddingBlockStart: {
    style: _e
  },
  paddingBlockEnd: {
    style: _e
  },
  m: {
    style: Ne
  },
  mt: {
    style: Ne
  },
  mr: {
    style: Ne
  },
  mb: {
    style: Ne
  },
  ml: {
    style: Ne
  },
  mx: {
    style: Ne
  },
  my: {
    style: Ne
  },
  margin: {
    style: Ne
  },
  marginTop: {
    style: Ne
  },
  marginRight: {
    style: Ne
  },
  marginBottom: {
    style: Ne
  },
  marginLeft: {
    style: Ne
  },
  marginX: {
    style: Ne
  },
  marginY: {
    style: Ne
  },
  marginInline: {
    style: Ne
  },
  marginInlineStart: {
    style: Ne
  },
  marginInlineEnd: {
    style: Ne
  },
  marginBlock: {
    style: Ne
  },
  marginBlockStart: {
    style: Ne
  },
  marginBlockEnd: {
    style: Ne
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
    style: Uo
  },
  rowGap: {
    style: Ho
  },
  columnGap: {
    style: qo
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
    style: Zr
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
function ha() {
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
      style: h
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [o]: r
      };
    const f = Lo(i, u) || {};
    return h ? h(a) : Ke(a, r, (g) => {
      let p = To(f, d, g);
      return g === p && typeof g == "string" && (p = To(f, d, `${o}${g === "default" ? "" : X(g)}`, g)), c === !1 ? p : {
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
    const a = (r = s.unstable_sxConfig) != null ? r : Jn;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(s);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = pa(s.breakpoints), h = Object.keys(d);
      let f = d;
      return Object.keys(u).forEach((T) => {
        const g = Iu(u[T], s);
        if (g != null)
          if (typeof g == "object")
            if (a[T])
              f = Bn(f, e(T, g, s, a));
            else {
              const p = Ke({
                theme: s
              }, g, (R) => ({
                [T]: R
              }));
              _u(p, g) ? f[T] = t({
                sx: g,
                theme: s
              }) : f = Bn(f, p);
            }
          else
            f = Bn(f, e(T, g, s, a));
      }), fa(h, f);
    }
    return Array.isArray(i) ? i.map(l) : l(i);
  }
  return t;
}
const Cn = ha();
Cn.filterProps = ["sx"];
function ba(e, t) {
  const o = this;
  return o.vars && typeof o.getColorSchemeSelector == "function" ? {
    [o.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : o.palette.mode === e ? t : {};
}
const ku = ["breakpoints", "palette", "spacing", "shape"];
function On(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: i,
    shape: s = {}
  } = e, a = q(e, ku), l = da(o), c = eu(i);
  let u = Ue({
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
  return u.applyStyles = ba, u = t.reduce((d, h) => Ue(d, h), u), u.unstable_sxConfig = b({}, Jn, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(h) {
    return Cn({
      sx: h,
      theme: this
    });
  }, u;
}
const Mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: On,
  private_createBreakpoints: da,
  unstable_applyStyles: ba
}, Symbol.toStringTag, { value: "Module" }));
function Au(e) {
  return Object.keys(e).length === 0;
}
function Qr(e = null) {
  const t = E.useContext(Vr);
  return !t || Au(t) ? e : t;
}
const Du = On();
function Go(e = Du) {
  return Qr(e);
}
function ga({
  styles: e,
  themeId: t,
  defaultTheme: o = {}
}) {
  const r = Go(o), i = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ y(Yr, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (ga.propTypes = {
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
const Fu = ["sx"], ju = (e) => {
  var t, o;
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = (t = e == null || (o = e.theme) == null ? void 0 : o.unstable_sxConfig) != null ? t : Jn;
  return Object.keys(e).forEach((s) => {
    i[s] ? r.systemProps[s] = e[s] : r.otherProps[s] = e[s];
  }), r;
};
function Zn(e) {
  const {
    sx: t
  } = e, o = q(e, Fu), {
    systemProps: r,
    otherProps: i
  } = ju(o);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return Tt(l) ? b({}, r, l) : r;
  } : s = b({}, r, t), b({}, i, {
    sx: s
  });
}
const Lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cn,
  extendSxProp: Zn,
  unstable_createStyleFunctionSx: ha,
  unstable_defaultSxConfig: Jn
}, Symbol.toStringTag, { value: "Module" })), Fi = (e) => e, Bu = () => {
  let e = Fi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Fi;
    }
  };
}, ei = Bu();
function ya(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (o = ya(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function J() {
  for (var e, t, o = 0, r = "", i = arguments.length; o < i; o++) (e = arguments[o]) && (t = ya(e)) && (r && (r += " "), r += t);
  return r;
}
const zu = ["className", "component"];
function Vu(e = {}) {
  const {
    themeId: t,
    defaultTheme: o,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, s = Kr("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Cn);
  return /* @__PURE__ */ E.forwardRef(function(c, u) {
    const d = Go(o), h = Zn(c), {
      className: f,
      component: T = "div"
    } = h, g = q(h, zu);
    return /* @__PURE__ */ y(s, b({
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
  return r ? `${o}-${r}` : `${ei.generate(e)}-${t}`;
}
function ae(e, t, o = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = ce(e, i, o);
  }), r;
}
var io = { exports: {} }, Te = {};
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
  if (ji) return Te;
  ji = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), f = Symbol.for("react.view_transition"), T = Symbol.for("react.client.reference");
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
                case h:
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
  return Te.ContextConsumer = s, Te.ContextProvider = a, Te.Element = e, Te.ForwardRef = l, Te.Fragment = o, Te.Lazy = h, Te.Memo = d, Te.Portal = t, Te.Profiler = i, Te.StrictMode = r, Te.Suspense = c, Te.SuspenseList = u, Te.isContextConsumer = function(p) {
    return g(p) === s;
  }, Te.isContextProvider = function(p) {
    return g(p) === a;
  }, Te.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Te.isForwardRef = function(p) {
    return g(p) === l;
  }, Te.isFragment = function(p) {
    return g(p) === o;
  }, Te.isLazy = function(p) {
    return g(p) === h;
  }, Te.isMemo = function(p) {
    return g(p) === d;
  }, Te.isPortal = function(p) {
    return g(p) === t;
  }, Te.isProfiler = function(p) {
    return g(p) === i;
  }, Te.isStrictMode = function(p) {
    return g(p) === r;
  }, Te.isSuspense = function(p) {
    return g(p) === c;
  }, Te.isSuspenseList = function(p) {
    return g(p) === u;
  }, Te.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === o || p === i || p === r || p === c || p === u || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === d || p.$$typeof === a || p.$$typeof === s || p.$$typeof === l || p.$$typeof === T || p.getModuleId !== void 0);
  }, Te.typeOf = g, Te;
}
var Ce = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Li;
function qu() {
  return Li || (Li = 1, process.env.NODE_ENV !== "production" && function() {
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
                  case h:
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
    var t = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), T = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    Ce.ContextConsumer = a, Ce.ContextProvider = l, Ce.Element = t, Ce.ForwardRef = c, Ce.Fragment = r, Ce.Lazy = f, Ce.Memo = h, Ce.Portal = o, Ce.Profiler = s, Ce.StrictMode = i, Ce.Suspense = u, Ce.SuspenseList = d, Ce.isContextConsumer = function(p) {
      return e(p) === a;
    }, Ce.isContextProvider = function(p) {
      return e(p) === l;
    }, Ce.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, Ce.isForwardRef = function(p) {
      return e(p) === c;
    }, Ce.isFragment = function(p) {
      return e(p) === r;
    }, Ce.isLazy = function(p) {
      return e(p) === f;
    }, Ce.isMemo = function(p) {
      return e(p) === h;
    }, Ce.isPortal = function(p) {
      return e(p) === o;
    }, Ce.isProfiler = function(p) {
      return e(p) === s;
    }, Ce.isStrictMode = function(p) {
      return e(p) === i;
    }, Ce.isSuspense = function(p) {
      return e(p) === u;
    }, Ce.isSuspenseList = function(p) {
      return e(p) === d;
    }, Ce.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === r || p === s || p === i || p === u || p === d || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === h || p.$$typeof === l || p.$$typeof === a || p.$$typeof === c || p.$$typeof === g || p.getModuleId !== void 0);
    }, Ce.typeOf = e;
  }()), Ce;
}
var Bi;
function Hu() {
  return Bi || (Bi = 1, process.env.NODE_ENV === "production" ? io.exports = /* @__PURE__ */ Uu() : io.exports = /* @__PURE__ */ qu()), io.exports;
}
var hn = /* @__PURE__ */ Hu();
const Gu = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function va(e) {
  const t = `${e}`.match(Gu);
  return t && t[1] || "";
}
function xa(e, t = "") {
  return e.displayName || e.name || va(e) || t;
}
function zi(e, t, o) {
  const r = xa(t);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function Ea(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return xa(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case hn.ForwardRef:
          return zi(e, e.render, "ForwardRef");
        case hn.Memo:
          return zi(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Yu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ea,
  getFunctionName: va
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
function gr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ed = On(), Vi = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function so({
  defaultTheme: e,
  theme: t,
  themeId: o
}) {
  return Zu(t) ? e : t[o] || t;
}
function td(e) {
  return e ? (t, o) => o[e] : null;
}
function yo(e, t) {
  let {
    ownerState: o
  } = t, r = q(t, Ku);
  const i = typeof e == "function" ? e(b({
    ownerState: o
  }, r)) : e;
  if (Array.isArray(i))
    return i.flatMap((s) => yo(s, b({
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
    rootShouldForwardProp: r = gr,
    slotShouldForwardProp: i = gr
  } = e, s = (a) => Cn(b({}, a, {
    theme: so(b({}, a, {
      defaultTheme: o,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (a, l = {}) => {
    ca(a, (x) => x.filter(($) => !($ != null && $.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = td(Vi(u))
    } = l, T = q(l, Ju), g = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), p = h || !1;
    let R;
    process.env.NODE_ENV !== "production" && c && (R = `${c}-${Vi(u || "Root")}`);
    let O = gr;
    u === "Root" || u === "root" ? O = r : u ? O = i : Qu(a) && (O = void 0);
    const S = Kr(a, b({
      shouldForwardProp: O,
      label: R
    }, T)), v = (x) => typeof x == "function" && x.__emotion_real !== x || Tt(x) ? ($) => yo(x, b({}, $, {
      theme: so({
        theme: $.theme,
        defaultTheme: o,
        themeId: t
      })
    })) : x, C = (x, ...$) => {
      let m = v(x);
      const w = $ ? $.map(v) : [];
      c && f && w.push((I) => {
        const A = so(b({}, I, {
          defaultTheme: o,
          themeId: t
        }));
        if (!A.components || !A.components[c] || !A.components[c].styleOverrides)
          return null;
        const D = A.components[c].styleOverrides, L = {};
        return Object.entries(D).forEach(([F, j]) => {
          L[F] = yo(j, b({}, I, {
            theme: A
          }));
        }), f(I, L);
      }), c && !g && w.push((I) => {
        var A;
        const D = so(b({}, I, {
          defaultTheme: o,
          themeId: t
        })), L = D == null || (A = D.components) == null || (A = A[c]) == null ? void 0 : A.variants;
        return yo({
          variants: L
        }, b({}, I, {
          theme: D
        }));
      }), p || w.push(s);
      const P = w.length - $.length;
      if (Array.isArray(x) && P > 0) {
        const I = new Array(P).fill("");
        m = [...x, ...I], m.raw = [...x.raw, ...I];
      }
      const N = S(m, ...w);
      if (process.env.NODE_ENV !== "production") {
        let I;
        c && (I = `${c}${X(u || "")}`), I === void 0 && (I = `Styled(${Ea(a)})`), N.displayName = I;
      }
      return a.muiName && (N.muiName = a.muiName), N;
    };
    return S.withConfig && (C.withConfig = S.withConfig), C;
  };
}
const Ta = nd();
function Hn(e, t) {
  const o = b({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      o[r] = b({}, e[r], o[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[r] || {}, s = t[r];
      o[r] = {}, !s || !Object.keys(s) ? o[r] = i : !i || !Object.keys(i) ? o[r] = s : (o[r] = b({}, s), Object.keys(i).forEach((a) => {
        o[r][a] = Hn(i[a], s[a]);
      }));
    } else o[r] === void 0 && (o[r] = e[r]);
  }), o;
}
function Ca(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? r : Hn(t.components[o].defaultProps, r);
}
function Oa({
  props: e,
  name: t,
  defaultTheme: o,
  themeId: r
}) {
  let i = Go(o);
  return r && (i = i[r] || i), Ca({
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
const Ra = E.useSyncExternalStore;
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
    return [() => d.matches, (h) => (d.addListener(h), () => {
      d.removeListener(h);
    })];
  }, [s, o, e]);
  return Ra(c, l, a);
}
function Sa(e, t = {}) {
  const o = Qr(), r = typeof window < "u" && typeof window.matchMedia < "u", {
    defaultMatches: i = !1,
    matchMedia: s = r ? window.matchMedia : null,
    ssrMatchMedia: a = null,
    noSsr: l = !1
  } = Ca({
    name: "MuiUseMediaQuery",
    props: t,
    theme: o
  });
  process.env.NODE_ENV !== "production" && typeof e == "function" && o === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
  let c = typeof e == "function" ? e(o) : e;
  c = c.replace(/^@media( ?)/m, "");
  const d = (Ra !== void 0 ? rd : od)(c, i, s, a, l);
  return process.env.NODE_ENV !== "production" && E.useDebugValue({
    query: c,
    match: d
  }), d;
}
function Pa(e, t = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, o));
}
const id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pa
}, Symbol.toStringTag, { value: "Module" }));
function sd(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), Pa(e, t, o);
}
function ad(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function wa(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return wa(ad(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ot(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (o === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ot(10, i));
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
  return e = wa(e), t = sd(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ld(e);
}
function St(e, t) {
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
function $a(e, t, o, r, i) {
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
const Ut = St(n.element, $a);
Ut.isRequired = St(n.element.isRequired, $a);
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
const Qn = St(n.elementType, pd), fd = "exact-prop: ​";
function eo(e) {
  return process.env.NODE_ENV === "production" ? e : b({}, e, {
    [fd]: (t) => {
      const o = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function bn(e, t, o, r, i) {
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
function Yo(e, t = 166) {
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
function un(e, t) {
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
function Na(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const o = t ? b({}, t.propTypes) : null;
  return (i) => (s, a, l, c, u, ...d) => {
    const h = u || a, f = o == null ? void 0 : o[h];
    if (f) {
      const T = f(s, a, l, c, u, ...d);
      if (T)
        return T;
    }
    return typeof s[a] < "u" && !s[i] ? new Error(`The prop \`${h}\` of \`${e}\` can only be used together with the \`${i}\` prop.`) : null;
  };
}
function Co(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Wi = 0;
function hd(e) {
  const [t, o] = E.useState(e), r = e || t;
  return E.useEffect(() => {
    t == null && (Wi += 1, o(`mui-${Wi}`));
  }, [t]), r;
}
const Ui = E.useId;
function ti(e) {
  if (Ui !== void 0) {
    const t = Ui();
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
function gn({
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
function mt(e) {
  const t = E.useRef(e);
  return it(() => {
    t.current = e;
  }), E.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function Ie(...e) {
  return E.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((o) => {
      Co(o, t);
    });
  }, e);
}
const qi = {};
function gd(e, t) {
  const o = E.useRef(qi);
  return o.current === qi && (o.current = e(t)), o;
}
const yd = [];
function vd(e) {
  E.useEffect(e, yd);
}
class Ko {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Ko();
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
function Xo() {
  const e = gd(Ko.create).current;
  return vd(e.disposeEffect), e;
}
let Jo = !0, Mr = !1;
const xd = new Ko(), Ed = {
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
  e.metaKey || e.altKey || e.ctrlKey || (Jo = !0);
}
function yr() {
  Jo = !1;
}
function Od() {
  this.visibilityState === "hidden" && Mr && (Jo = !0);
}
function Rd(e) {
  e.addEventListener("keydown", Cd, !0), e.addEventListener("mousedown", yr, !0), e.addEventListener("pointerdown", yr, !0), e.addEventListener("touchstart", yr, !0), e.addEventListener("visibilitychange", Od, !0);
}
function Sd(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Jo || Td(t);
}
function _a() {
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
function Ia(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Pd(e) {
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
function wd(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const $d = Number.isInteger || wd;
function ka(e, t, o, r) {
  const i = e[t];
  if (i == null || !$d(i)) {
    const s = Pd(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${o}\`, expected \`integer\`.`);
  }
  return null;
}
function Ma(e, t, ...o) {
  return e[t] === void 0 ? null : ka(e, t, ...o);
}
function Ar() {
  return null;
}
Ma.isRequired = ka;
Ar.isRequired = Ar;
const _t = process.env.NODE_ENV === "production" ? Ar : Ma;
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
function yn(e) {
  return typeof e == "string";
}
function Aa(e, t, o) {
  return e === void 0 || yn(e) ? t : b({}, t, {
    ownerState: b({}, t.ownerState, o)
  });
}
function Oo(e, t = []) {
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
function Da(e) {
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
  const a = Oo(b({}, i, r)), l = Hi(r), c = Hi(i), u = t(a), d = J(u == null ? void 0 : u.className, o == null ? void 0 : o.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), h = b({}, u == null ? void 0 : u.style, o == null ? void 0 : o.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), f = b({}, u, o, c, l);
  return d.length > 0 && (f.className = d), Object.keys(h).length > 0 && (f.style = h), {
    props: f,
    internalRef: u.ref
  };
}
function Fa(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
const Nd = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Wt(e) {
  var t;
  const {
    elementType: o,
    externalSlotProps: r,
    ownerState: i,
    skipResolvingSlotProps: s = !1
  } = e, a = q(e, Nd), l = s ? {} : Fa(r, i), {
    props: c,
    internalRef: u
  } = Da(b({}, a, {
    externalSlotProps: l
  })), d = Ie(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Aa(o, b({}, c, {
    ref: d
  }), i);
}
function qt(e) {
  if (parseInt(E.version, 10) >= 19) {
    var t;
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null;
  }
  return (e == null ? void 0 : e.ref) || null;
}
const ni = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (ni.displayName = "ThemeContext");
function ja() {
  const e = E.useContext(ni);
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
function Ro(e) {
  const {
    children: t,
    theme: o
  } = e, r = ja();
  process.env.NODE_ENV !== "production" && r === null && typeof o == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const i = E.useMemo(() => {
    const s = r === null ? o : kd(r, o);
    return s != null && (s[Id] = r !== null), s;
  }, [o, r]);
  return /* @__PURE__ */ y(ni.Provider, {
    value: i,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Ro.propTypes = {
  /**
   * Your component tree.
   */
  children: n.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: n.oneOfType([n.object, n.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Ro.propTypes = eo(Ro.propTypes));
const Md = ["value"], La = /* @__PURE__ */ E.createContext();
function Ba(e) {
  let {
    value: t
  } = e, o = q(e, Md);
  return /* @__PURE__ */ y(La.Provider, b({
    value: t ?? !0
  }, o));
}
process.env.NODE_ENV !== "production" && (Ba.propTypes = {
  children: n.node,
  value: n.bool
});
const oi = () => {
  const e = E.useContext(La);
  return e ?? !1;
}, za = /* @__PURE__ */ E.createContext(void 0);
function Va({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ y(za.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Va.propTypes = {
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
  return i.defaultProps ? Hn(i.defaultProps, r) : !i.styleOverrides && !i.variants ? Hn(i, r) : r;
}
function Dd({
  props: e,
  name: t
}) {
  const o = E.useContext(za);
  return Ad({
    props: e,
    name: t,
    theme: {
      components: o
    }
  });
}
const Gi = {};
function Yi(e, t, o, r = !1) {
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
function So(e) {
  const {
    children: t,
    theme: o,
    themeId: r
  } = e, i = Qr(Gi), s = ja() || Gi;
  process.env.NODE_ENV !== "production" && (i === null && typeof o == "function" || r && i && !i[r] && typeof o == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = Yi(r, i, o), l = Yi(r, s, o, !0), c = a.direction === "rtl";
  return /* @__PURE__ */ y(Ro, {
    theme: l,
    children: /* @__PURE__ */ y(Vr.Provider, {
      value: a,
      children: /* @__PURE__ */ y(Ba, {
        value: c,
        children: /* @__PURE__ */ y(Va, {
          value: a == null ? void 0 : a.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (So.propTypes = {
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
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (So.propTypes = eo(So.propTypes));
const Fd = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"], jd = On(), Ld = Ta("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`maxWidth${X(String(o.maxWidth))}`], o.fixed && t.fixed, o.disableGutters && t.disableGutters];
  }
}), Bd = (e) => Oa({
  props: e,
  name: "MuiContainer",
  defaultTheme: jd
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
    createStyledComponent: t = Ld,
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
    const d = u, h = a.breakpoints.values[d];
    return h !== 0 && (c[a.breakpoints.up(d)] = {
      maxWidth: `${h}${a.breakpoints.unit}`
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
      component: h = "div",
      disableGutters: f = !1,
      fixed: T = !1,
      maxWidth: g = "lg"
    } = u, p = q(u, Fd), R = b({}, u, {
      component: h,
      disableGutters: f,
      fixed: T,
      maxWidth: g
    }), O = zd(R, r);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ y(i, b({
        as: h,
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
const Wd = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], Ud = On(), qd = Ta("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function Hd(e) {
  return Oa({
    props: e,
    name: "MuiStack",
    defaultTheme: Ud
  });
}
function Gd(e, t) {
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
  }, zt({
    values: e.direction,
    breakpoints: t.breakpoints.values
  }), (r) => ({
    flexDirection: r
  })));
  if (e.spacing) {
    const r = Jr(t), i = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = zt({
      values: e.direction,
      base: i
    }), a = zt({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((c, u, d) => {
      if (!s[c]) {
        const f = u > 0 ? s[d[u - 1]] : "column";
        s[c] = f;
      }
    }), o = Ue(o, Ke({
      theme: t
    }, a, (c, u) => e.useFlexGap ? {
      gap: Vt(r, c)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Yd(u ? s[u] : e.direction)}`]: Vt(r, c)
      }
    }));
  }
  return o = Uc(t.breakpoints, o), o;
};
function Xd(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = qd,
    useThemeProps: o = Hd,
    componentName: r = "MuiStack"
  } = e, i = () => ue({
    root: ["root"]
  }, (c) => ce(r, c), {}), s = t(Kd), a = /* @__PURE__ */ E.forwardRef(function(c, u) {
    const d = o(c), h = Zn(d), {
      component: f = "div",
      direction: T = "column",
      spacing: g = 0,
      divider: p,
      children: R,
      className: O,
      useFlexGap: S = !1
    } = h, v = q(h, Wd), C = {
      direction: T,
      spacing: g,
      useFlexGap: S
    }, x = i();
    return /* @__PURE__ */ y(s, b({
      as: f,
      ownerState: C,
      ref: u,
      className: J(x.root, O)
    }, v, {
      children: p ? Gd(R, p) : R
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
var $e = {}, vr = { exports: {} }, Ki;
function ri() {
  return Ki || (Ki = 1, function(e) {
    function t(o) {
      return o && o.__esModule ? o : {
        default: o
      };
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(vr)), vr.exports;
}
const Zd = /* @__PURE__ */ Rt(ec), Qd = /* @__PURE__ */ Rt(id);
var Xi;
function ep() {
  if (Xi) return $e;
  Xi = 1;
  var e = ri();
  Object.defineProperty($e, "__esModule", {
    value: !0
  }), $e.alpha = g, $e.blend = $, $e.colorChannel = void 0, $e.darken = R, $e.decomposeColor = a, $e.emphasize = C, $e.getContrastRatio = T, $e.getLuminance = f, $e.hexToRgb = i, $e.hslToRgb = h, $e.lighten = S, $e.private_safeAlpha = p, $e.private_safeColorChannel = void 0, $e.private_safeDarken = O, $e.private_safeEmphasize = x, $e.private_safeLighten = v, $e.recomposeColor = u, $e.rgbToHex = d;
  var t = e(Zd), o = e(Qd);
  function r(m, w = 0, P = 1) {
    return process.env.NODE_ENV !== "production" && (m < w || m > P) && console.error(`MUI: The value provided ${m} is out of range [${w}, ${P}].`), (0, o.default)(m, w, P);
  }
  function i(m) {
    m = m.slice(1);
    const w = new RegExp(`.{1,${m.length >= 6 ? 2 : 1}}`, "g");
    let P = m.match(w);
    return P && P[0].length === 1 && (P = P.map((N) => N + N)), P ? `rgb${P.length === 4 ? "a" : ""}(${P.map((N, I) => I < 3 ? parseInt(N, 16) : Math.round(parseInt(N, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function s(m) {
    const w = m.toString(16);
    return w.length === 1 ? `0${w}` : w;
  }
  function a(m) {
    if (m.type)
      return m;
    if (m.charAt(0) === "#")
      return a(i(m));
    const w = m.indexOf("("), P = m.substring(0, w);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(P) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${m}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, t.default)(9, m));
    let N = m.substring(w + 1, m.length - 1), I;
    if (P === "color") {
      if (N = N.split(" "), I = N.shift(), N.length === 4 && N[3].charAt(0) === "/" && (N[3] = N[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(I) === -1)
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${I}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, t.default)(10, I));
    } else
      N = N.split(",");
    return N = N.map((A) => parseFloat(A)), {
      type: P,
      values: N,
      colorSpace: I
    };
  }
  const l = (m) => {
    const w = a(m);
    return w.values.slice(0, 3).map((P, N) => w.type.indexOf("hsl") !== -1 && N !== 0 ? `${P}%` : P).join(" ");
  };
  $e.colorChannel = l;
  const c = (m, w) => {
    try {
      return l(m);
    } catch {
      return w && process.env.NODE_ENV !== "production" && console.warn(w), m;
    }
  };
  $e.private_safeColorChannel = c;
  function u(m) {
    const {
      type: w,
      colorSpace: P
    } = m;
    let {
      values: N
    } = m;
    return w.indexOf("rgb") !== -1 ? N = N.map((I, A) => A < 3 ? parseInt(I, 10) : I) : w.indexOf("hsl") !== -1 && (N[1] = `${N[1]}%`, N[2] = `${N[2]}%`), w.indexOf("color") !== -1 ? N = `${P} ${N.join(" ")}` : N = `${N.join(", ")}`, `${w}(${N})`;
  }
  function d(m) {
    if (m.indexOf("#") === 0)
      return m;
    const {
      values: w
    } = a(m);
    return `#${w.map((P, N) => s(N === 3 ? Math.round(255 * P) : P)).join("")}`;
  }
  function h(m) {
    m = a(m);
    const {
      values: w
    } = m, P = w[0], N = w[1] / 100, I = w[2] / 100, A = N * Math.min(I, 1 - I), D = (j, z = (j + P / 30) % 12) => I - A * Math.max(Math.min(z - 3, 9 - z, 1), -1);
    let L = "rgb";
    const F = [Math.round(D(0) * 255), Math.round(D(8) * 255), Math.round(D(4) * 255)];
    return m.type === "hsla" && (L += "a", F.push(w[3])), u({
      type: L,
      values: F
    });
  }
  function f(m) {
    m = a(m);
    let w = m.type === "hsl" || m.type === "hsla" ? a(h(m)).values : m.values;
    return w = w.map((P) => (m.type !== "color" && (P /= 255), P <= 0.03928 ? P / 12.92 : ((P + 0.055) / 1.055) ** 2.4)), Number((0.2126 * w[0] + 0.7152 * w[1] + 0.0722 * w[2]).toFixed(3));
  }
  function T(m, w) {
    const P = f(m), N = f(w);
    return (Math.max(P, N) + 0.05) / (Math.min(P, N) + 0.05);
  }
  function g(m, w) {
    return m = a(m), w = r(w), (m.type === "rgb" || m.type === "hsl") && (m.type += "a"), m.type === "color" ? m.values[3] = `/${w}` : m.values[3] = w, u(m);
  }
  function p(m, w, P) {
    try {
      return g(m, w);
    } catch {
      return P && process.env.NODE_ENV !== "production" && console.warn(P), m;
    }
  }
  function R(m, w) {
    if (m = a(m), w = r(w), m.type.indexOf("hsl") !== -1)
      m.values[2] *= 1 - w;
    else if (m.type.indexOf("rgb") !== -1 || m.type.indexOf("color") !== -1)
      for (let P = 0; P < 3; P += 1)
        m.values[P] *= 1 - w;
    return u(m);
  }
  function O(m, w, P) {
    try {
      return R(m, w);
    } catch {
      return P && process.env.NODE_ENV !== "production" && console.warn(P), m;
    }
  }
  function S(m, w) {
    if (m = a(m), w = r(w), m.type.indexOf("hsl") !== -1)
      m.values[2] += (100 - m.values[2]) * w;
    else if (m.type.indexOf("rgb") !== -1)
      for (let P = 0; P < 3; P += 1)
        m.values[P] += (255 - m.values[P]) * w;
    else if (m.type.indexOf("color") !== -1)
      for (let P = 0; P < 3; P += 1)
        m.values[P] += (1 - m.values[P]) * w;
    return u(m);
  }
  function v(m, w, P) {
    try {
      return S(m, w);
    } catch {
      return P && process.env.NODE_ENV !== "production" && console.warn(P), m;
    }
  }
  function C(m, w = 0.15) {
    return f(m) > 0.5 ? R(m, w) : S(m, w);
  }
  function x(m, w, P) {
    try {
      return C(m, w);
    } catch {
      return P && process.env.NODE_ENV !== "production" && console.warn(P), m;
    }
  }
  function $(m, w, P, N = 1) {
    const I = (F, j) => Math.round((F ** (1 / N) * (1 - P) + j ** (1 / N) * P) ** N), A = a(m), D = a(w), L = [I(A.values[0], D.values[0]), I(A.values[1], D.values[1]), I(A.values[2], D.values[2])];
    return u({
      type: "rgb",
      values: L
    });
  }
  return $e;
}
var me = /* @__PURE__ */ ep();
const tp = ["mode", "contrastThreshold", "tonalOffset"], Ji = {
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
    paper: Wn.white,
    default: Wn.white
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
}, xr = {
  text: {
    primary: Wn.white,
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
    active: Wn.white,
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
function Zi(e, t, o, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = me.lighten(e.main, i) : t === "dark" && (e.dark = me.darken(e.main, s)));
}
function np(e = "light") {
  return e === "dark" ? {
    main: Zt[200],
    light: Zt[50],
    dark: Zt[400]
  } : {
    main: Zt[700],
    light: Zt[400],
    dark: Zt[800]
  };
}
function op(e = "light") {
  return e === "dark" ? {
    main: Jt[200],
    light: Jt[50],
    dark: Jt[400]
  } : {
    main: Jt[500],
    light: Jt[300],
    dark: Jt[700]
  };
}
function rp(e = "light") {
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
function ip(e = "light") {
  return e === "dark" ? {
    main: Qt[400],
    light: Qt[300],
    dark: Qt[700]
  } : {
    main: Qt[700],
    light: Qt[500],
    dark: Qt[900]
  };
}
function sp(e = "light") {
  return e === "dark" ? {
    main: en[400],
    light: en[300],
    dark: en[700]
  } : {
    main: en[800],
    light: en[500],
    dark: en[900]
  };
}
function ap(e = "light") {
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
function lp(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2
  } = e, i = q(e, tp), s = e.primary || np(t), a = e.secondary || op(t), l = e.error || rp(t), c = e.info || ip(t), u = e.success || sp(t), d = e.warning || ap(t);
  function h(p) {
    const R = me.getContrastRatio(p, xr.text.primary) >= o ? xr.text.primary : Ji.text.primary;
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
    darkShade: v = 700
  }) => {
    if (p = b({}, p), !p.main && p[O] && (p.main = p[O]), !p.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${R ? ` (${R})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : Ot(11, R ? ` (${R})` : "", O));
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
} });` : Ot(12, R ? ` (${R})` : "", JSON.stringify(p.main)));
    return Zi(p, "light", S, r), Zi(p, "dark", v, r), p.contrastText || (p.contrastText = h(p.main)), p;
  }, T = {
    dark: xr,
    light: Ji
  };
  return process.env.NODE_ENV !== "production" && (T[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ue(b({
    // A collection of common colors.
    common: b({}, Wn),
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
    grey: Ql,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, T[t]), i);
}
const cp = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function up(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Qi = {
  textTransform: "uppercase"
}, es = '"Roboto", "Helvetica", "Arial", sans-serif';
function dp(e, t) {
  const o = typeof t == "function" ? t(e) : t, {
    fontFamily: r = es,
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
    pxToRem: h
  } = o, f = q(o, cp);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const T = i / 14, g = h || ((O) => `${O / u * T}rem`), p = (O, S, v, C, x) => b({
    fontFamily: r,
    fontWeight: O,
    fontSize: g(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: v
  }, r === es ? {
    letterSpacing: `${up(C / S)}em`
  } : {}, x, d), R = {
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
    button: p(l, 14, 1.75, 0.4, Qi),
    caption: p(a, 12, 1.66, 0.4),
    overline: p(a, 12, 2.66, 1, Qi),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ue(b({
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
const pp = 0.2, fp = 0.14, mp = 0.12;
function Pe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${pp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${fp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${mp})`].join(",");
}
const hp = ["none", Pe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Pe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Pe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Pe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Pe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Pe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Pe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Pe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Pe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Pe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Pe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Pe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Pe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Pe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Pe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Pe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Pe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Pe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Pe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Pe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Pe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Pe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Pe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Pe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], bp = ["duration", "easing", "delay"], gp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Wa = {
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
function ts(e) {
  return `${Math.round(e)}ms`;
}
function yp(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function vp(e) {
  const t = b({}, gp, e.easing), o = b({}, Wa, e.duration);
  return b({
    getAutoHeightDuration: yp,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = o.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = s, u = q(s, bp);
      if (process.env.NODE_ENV !== "production") {
        const d = (f) => typeof f == "string", h = (f) => !isNaN(parseFloat(f));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !h(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : ts(a)} ${l} ${typeof c == "string" ? c : ts(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: o
  });
}
const xp = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Ep = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function ii(e = {}, ...t) {
  const {
    mixins: o = {},
    palette: r = {},
    transitions: i = {},
    typography: s = {}
  } = e, a = q(e, Ep);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ot(18));
  const l = lp(r), c = On(e);
  let u = Ue(c, {
    mixins: Jd(c.breakpoints, o),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: hp.slice(),
    typography: dp(l, s),
    transitions: vp(i),
    zIndex: b({}, xp)
  });
  if (u = Ue(u, a), u = t.reduce((d, h) => Ue(d, h), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (f, T) => {
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
      T && f.indexOf("Mui") === 0 && h(T, f);
    });
  }
  return u.unstable_sxConfig = b({}, Jn, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(h) {
    return Cn({
      sx: h,
      theme: this
    });
  }, u;
}
function Tp(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function Cp(e) {
  return parseFloat(e);
}
const si = ii();
function lt() {
  const e = Go(si);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e[fn] || e;
}
var Dt = {}, Er = { exports: {} }, ns;
function Op() {
  return ns || (ns = 1, function(e) {
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
  }(Er)), Er.exports;
}
var Tr = { exports: {} }, os;
function Rp() {
  return os || (os = 1, function(e) {
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
  }(Tr)), Tr.exports;
}
const Sp = /* @__PURE__ */ Rt(Lc), Pp = /* @__PURE__ */ Rt(Bc), wp = /* @__PURE__ */ Rt(Hc), $p = /* @__PURE__ */ Rt(Yu), Np = /* @__PURE__ */ Rt(Mu), _p = /* @__PURE__ */ Rt(Lu);
var rs;
function Ip() {
  if (rs) return Dt;
  rs = 1;
  var e = ri();
  Object.defineProperty(Dt, "__esModule", {
    value: !0
  }), Dt.default = $, Dt.shouldForwardProp = R, Dt.systemDefaultTheme = void 0;
  var t = e(Op()), o = e(Rp()), r = T(Sp), i = Pp, s = e(wp), a = e($p), l = e(Np), c = e(_p);
  const u = ["ownerState"], d = ["variants"], h = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
  function f(m) {
    if (typeof WeakMap != "function") return null;
    var w = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap();
    return (f = function(N) {
      return N ? P : w;
    })(m);
  }
  function T(m, w) {
    if (m && m.__esModule) return m;
    if (m === null || typeof m != "object" && typeof m != "function") return { default: m };
    var P = f(w);
    if (P && P.has(m)) return P.get(m);
    var N = { __proto__: null }, I = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var A in m) if (A !== "default" && Object.prototype.hasOwnProperty.call(m, A)) {
      var D = I ? Object.getOwnPropertyDescriptor(m, A) : null;
      D && (D.get || D.set) ? Object.defineProperty(N, A, D) : N[A] = m[A];
    }
    return N.default = m, P && P.set(m, N), N;
  }
  function g(m) {
    return Object.keys(m).length === 0;
  }
  function p(m) {
    return typeof m == "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    m.charCodeAt(0) > 96;
  }
  function R(m) {
    return m !== "ownerState" && m !== "theme" && m !== "sx" && m !== "as";
  }
  const O = Dt.systemDefaultTheme = (0, l.default)(), S = (m) => m && m.charAt(0).toLowerCase() + m.slice(1);
  function v({
    defaultTheme: m,
    theme: w,
    themeId: P
  }) {
    return g(w) ? m : w[P] || w;
  }
  function C(m) {
    return m ? (w, P) => P[m] : null;
  }
  function x(m, w) {
    let {
      ownerState: P
    } = w, N = (0, o.default)(w, u);
    const I = typeof m == "function" ? m((0, t.default)({
      ownerState: P
    }, N)) : m;
    if (Array.isArray(I))
      return I.flatMap((A) => x(A, (0, t.default)({
        ownerState: P
      }, N)));
    if (I && typeof I == "object" && Array.isArray(I.variants)) {
      const {
        variants: A = []
      } = I;
      let L = (0, o.default)(I, d);
      return A.forEach((F) => {
        let j = !0;
        typeof F.props == "function" ? j = F.props((0, t.default)({
          ownerState: P
        }, N, P)) : Object.keys(F.props).forEach((z) => {
          (P == null ? void 0 : P[z]) !== F.props[z] && N[z] !== F.props[z] && (j = !1);
        }), j && (Array.isArray(L) || (L = [L]), L.push(typeof F.style == "function" ? F.style((0, t.default)({
          ownerState: P
        }, N, P)) : F.style));
      }), L;
    }
    return I;
  }
  function $(m = {}) {
    const {
      themeId: w,
      defaultTheme: P = O,
      rootShouldForwardProp: N = R,
      slotShouldForwardProp: I = R
    } = m, A = (D) => (0, c.default)((0, t.default)({}, D, {
      theme: v((0, t.default)({}, D, {
        defaultTheme: P,
        themeId: w
      }))
    }));
    return A.__mui_systemSx = !0, (D, L = {}) => {
      (0, r.internal_processStyles)(D, (H) => H.filter((K) => !(K != null && K.__mui_systemSx)));
      const {
        name: F,
        slot: j,
        skipVariantsResolver: z,
        skipSx: M,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver: G = C(S(j))
      } = L, k = (0, o.default)(L, h), V = z !== void 0 ? z : (
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        j && j !== "Root" && j !== "root" || !1
      ), ee = M || !1;
      let Z;
      process.env.NODE_ENV !== "production" && F && (Z = `${F}-${S(j || "Root")}`);
      let U = R;
      j === "Root" || j === "root" ? U = N : j ? U = I : p(D) && (U = void 0);
      const Q = (0, r.default)(D, (0, t.default)({
        shouldForwardProp: U,
        label: Z
      }, k)), B = (H) => typeof H == "function" && H.__emotion_real !== H || (0, i.isPlainObject)(H) ? (K) => x(H, (0, t.default)({}, K, {
        theme: v({
          theme: K.theme,
          defaultTheme: P,
          themeId: w
        })
      })) : H, Y = (H, ...K) => {
        let ne = B(H);
        const te = K ? K.map(B) : [];
        F && G && te.push((oe) => {
          const de = v((0, t.default)({}, oe, {
            defaultTheme: P,
            themeId: w
          }));
          if (!de.components || !de.components[F] || !de.components[F].styleOverrides)
            return null;
          const De = de.components[F].styleOverrides, Fe = {};
          return Object.entries(De).forEach(([He, Xe]) => {
            Fe[He] = x(Xe, (0, t.default)({}, oe, {
              theme: de
            }));
          }), G(oe, Fe);
        }), F && !V && te.push((oe) => {
          var de;
          const De = v((0, t.default)({}, oe, {
            defaultTheme: P,
            themeId: w
          })), Fe = De == null || (de = De.components) == null || (de = de[F]) == null ? void 0 : de.variants;
          return x({
            variants: Fe
          }, (0, t.default)({}, oe, {
            theme: De
          }));
        }), ee || te.push(A);
        const _ = te.length - K.length;
        if (Array.isArray(H) && _ > 0) {
          const oe = new Array(_).fill("");
          ne = [...H, ...oe], ne.raw = [...H.raw, ...oe];
        }
        const re = Q(ne, ...te);
        if (process.env.NODE_ENV !== "production") {
          let oe;
          F && (oe = `${F}${(0, s.default)(j || "")}`), oe === void 0 && (oe = `Styled(${(0, a.default)(D)})`), re.displayName = oe;
        }
        return D.muiName && (re.muiName = D.muiName), re;
      };
      return Q.withConfig && (Y.withConfig = Q.withConfig), Y;
    };
  }
  return Dt;
}
var kp = /* @__PURE__ */ Ip();
const Mp = /* @__PURE__ */ Wr(kp);
function Ua(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const We = (e) => Ua(e) && e !== "classes", W = Mp({
  themeId: fn,
  defaultTheme: si,
  rootShouldForwardProp: We
}), Ap = ["theme"];
function qa(e) {
  let {
    theme: t
  } = e, o = q(e, Ap);
  const r = t[fn];
  let i = r || t;
  return typeof t != "function" && (r && !r.vars ? i = b({}, r, {
    vars: null
  }) : t && !t.vars && (i = b({}, t, {
    vars: null
  }))), /* @__PURE__ */ y(So, b({}, o, {
    themeId: r ? fn : void 0,
    theme: i
  }));
}
process.env.NODE_ENV !== "production" && (qa.propTypes = {
  /**
   * Your component tree.
   */
  children: n.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: n.oneOfType([n.object, n.func]).isRequired
});
const is = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
};
process.env.NODE_ENV !== "production" && (n.node, n.object.isRequired);
function pe(e) {
  return Dd(e);
}
function Dp(e) {
  return ce("MuiSvgIcon", e);
}
ae("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Fp = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], jp = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${X(t)}`, `fontSize${X(o)}`]
  };
  return ue(i, Dp, r);
}, Lp = W("svg", {
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
  var o, r, i, s, a, l, c, u, d, h, f, T, g;
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
    color: (h = (f = (e.vars || e).palette) == null || (f = f[t.color]) == null ? void 0 : f.main) != null ? h : {
      action: (T = (e.vars || e).palette) == null || (T = T.action) == null ? void 0 : T.active,
      disabled: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
      inherit: void 0
    }[t.color]
  };
}), Po = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    titleAccess: h,
    viewBox: f = "0 0 24 24"
  } = r, T = q(r, Fp), g = /* @__PURE__ */ E.isValidElement(i) && i.type === "svg", p = b({}, r, {
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: f,
    hasSvgAsChild: g
  }), R = {};
  d || (R.viewBox = f);
  const O = jp(p);
  return /* @__PURE__ */ se(Lp, b({
    as: l,
    className: J(O.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: o
  }, R, T, g && i.props, {
    ownerState: p,
    children: [g ? i.props.children : i, h ? /* @__PURE__ */ y("title", {
      children: h
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Po.propTypes = {
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
Po.muiName = "SvgIcon";
function ct(e, t) {
  function o(r, i) {
    return /* @__PURE__ */ y(Po, b({
      "data-testid": `${t}Icon`,
      ref: i
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (o.displayName = `${t}Icon`), o.muiName = Po.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(o));
}
const Bp = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), ei.configure(e);
  }
}, zp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: X,
  createChainedFunction: kr,
  createSvgIcon: ct,
  debounce: Yo,
  deprecatedPropType: md,
  isMuiElement: un,
  ownerDocument: Be,
  ownerWindow: xt,
  requirePropFactory: Na,
  setRef: Co,
  unstable_ClassNameGenerator: Bp,
  unstable_useEnhancedEffect: it,
  unstable_useId: ti,
  unsupportedProp: bd,
  useControlled: gn,
  useEventCallback: mt,
  useForkRef: Ie,
  useIsFocusVisible: _a
}, Symbol.toStringTag, { value: "Module" }));
function Dr(e, t) {
  return Dr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, Dr(e, t);
}
function Ha(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Dr(e, t);
}
const ss = {
  disabled: !1
};
var Vp = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
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
const wo = ft.createContext(null);
var Wp = function(t) {
  return t.scrollTop;
}, jn = "unmounted", jt = "exited", Lt = "entering", nn = "entered", Fr = "exiting", ut = /* @__PURE__ */ function(e) {
  Ha(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, l = a && !a.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = jt, s.appearStatus = Lt) : c = nn : r.unmountOnExit || r.mountOnEnter ? c = jn : c = jt, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === jn ? {
      status: jt
    } : null;
  };
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Lt && a !== nn && (s = Lt) : (a === Lt || a === nn) && (s = Fr);
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
          var a = this.props.nodeRef ? this.props.nodeRef.current : to.findDOMNode(this);
          a && Wp(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === jt && this.setState({
      status: jn
    });
  }, o.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [to.findDOMNode(this), l], u = c[0], d = c[1], h = this.getTimeouts(), f = l ? h.appear : h.enter;
    if (!i && !a || ss.disabled) {
      this.safeSetState({
        status: nn
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
          status: nn
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, o.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : to.findDOMNode(this);
    if (!s || ss.disabled) {
      this.safeSetState({
        status: jt
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
          status: jt
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : to.findDOMNode(this), l = i == null && !this.props.addEndListener;
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
    if (i === jn)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = q(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ft.createElement(wo.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : ft.cloneElement(ft.Children.only(a), l))
    );
  }, t;
}(ft.Component);
ut.contextType = wo;
ut.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var o = Vp;
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
function tn() {
}
ut.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: tn,
  onEntering: tn,
  onEntered: tn,
  onExit: tn,
  onExiting: tn,
  onExited: tn
};
ut.UNMOUNTED = jn;
ut.EXITED = jt;
ut.ENTERING = Lt;
ut.ENTERED = nn;
ut.EXITING = Fr;
function Up(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ai(e, t) {
  var o = function(s) {
    return t && an(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Vl.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = o(i);
  }), r;
}
function qp(e, t) {
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
function Bt(e, t, o) {
  return o[t] != null ? o[t] : e.props[t];
}
function Hp(e, t) {
  return ai(e.children, function(o) {
    return mo(o, {
      onExited: t.bind(null, o),
      in: !0,
      appear: Bt(o, "appear", e),
      enter: Bt(o, "enter", e),
      exit: Bt(o, "exit", e)
    });
  });
}
function Gp(e, t, o) {
  var r = ai(e.children), i = qp(t, r);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (an(a)) {
      var l = s in t, c = s in r, u = t[s], d = an(u) && !u.props.in;
      c && (!l || d) ? i[s] = mo(a, {
        onExited: o.bind(null, a),
        in: !0,
        exit: Bt(a, "exit", e),
        enter: Bt(a, "enter", e)
      }) : !c && l && !d ? i[s] = mo(a, {
        in: !1
      }) : c && l && an(u) && (i[s] = mo(a, {
        onExited: o.bind(null, a),
        in: u.props.in,
        exit: Bt(a, "exit", e),
        enter: Bt(a, "enter", e)
      }));
    }
  }), i;
}
var Yp = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Kp = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, li = /* @__PURE__ */ function(e) {
  Ha(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = s.handleExited.bind(Up(s));
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
      children: c ? Hp(i, l) : Gp(i, a, l),
      firstRender: !1
    };
  }, o.handleExited = function(i, s) {
    var a = ai(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = b({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, o.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = q(i, ["component", "childFactory"]), c = this.state.contextValue, u = Yp(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ ft.createElement(wo.Provider, {
      value: c
    }, u) : /* @__PURE__ */ ft.createElement(wo.Provider, {
      value: c
    }, /* @__PURE__ */ ft.createElement(s, l, u));
  }, t;
}(ft.Component);
li.propTypes = process.env.NODE_ENV !== "production" ? {
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
li.defaultProps = Kp;
const ci = (e) => e.scrollTop;
function It(e, t) {
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
function Xp(e) {
  return ce("MuiCollapse", e);
}
ae("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const Jp = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"], Zp = (e) => {
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
  return ue(r, Xp, o);
}, Qp = W("div", {
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
})), ef = W("div", {
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
})), tf = W("div", {
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
})), ui = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    onEnter: h,
    onEntered: f,
    onEntering: T,
    onExit: g,
    onExited: p,
    onExiting: R,
    orientation: O = "vertical",
    style: S,
    timeout: v = Wa.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = ut
  } = r, x = q(r, Jp), $ = b({}, r, {
    orientation: O,
    collapsedSize: l
  }), m = Zp($), w = lt(), P = Xo(), N = E.useRef(null), I = E.useRef(), A = typeof l == "number" ? `${l}px` : l, D = O === "horizontal", L = D ? "width" : "height", F = E.useRef(null), j = Ie(o, F), z = (B) => (Y) => {
    if (B) {
      const H = F.current;
      Y === void 0 ? B(H) : B(H, Y);
    }
  }, M = () => N.current ? N.current[D ? "clientWidth" : "clientHeight"] : 0, G = z((B, Y) => {
    N.current && D && (N.current.style.position = "absolute"), B.style[L] = A, h && h(B, Y);
  }), k = z((B, Y) => {
    const H = M();
    N.current && D && (N.current.style.position = "");
    const {
      duration: K,
      easing: ne
    } = It({
      style: S,
      timeout: v,
      easing: u
    }, {
      mode: "enter"
    });
    if (v === "auto") {
      const te = w.transitions.getAutoHeightDuration(H);
      B.style.transitionDuration = `${te}ms`, I.current = te;
    } else
      B.style.transitionDuration = typeof K == "string" ? K : `${K}ms`;
    B.style[L] = `${H}px`, B.style.transitionTimingFunction = ne, T && T(B, Y);
  }), V = z((B, Y) => {
    B.style[L] = "auto", f && f(B, Y);
  }), ee = z((B) => {
    B.style[L] = `${M()}px`, g && g(B);
  }), Z = z(p), U = z((B) => {
    const Y = M(), {
      duration: H,
      easing: K
    } = It({
      style: S,
      timeout: v,
      easing: u
    }, {
      mode: "exit"
    });
    if (v === "auto") {
      const ne = w.transitions.getAutoHeightDuration(Y);
      B.style.transitionDuration = `${ne}ms`, I.current = ne;
    } else
      B.style.transitionDuration = typeof H == "string" ? H : `${H}ms`;
    B.style[L] = A, B.style.transitionTimingFunction = K, R && R(B);
  });
  return /* @__PURE__ */ y(C, b({
    in: d,
    onEnter: G,
    onEntered: V,
    onEntering: k,
    onExit: ee,
    onExited: Z,
    onExiting: U,
    addEndListener: (B) => {
      v === "auto" && P.start(I.current || 0, B), i && i(F.current, B);
    },
    nodeRef: F,
    timeout: v === "auto" ? null : v
  }, x, {
    children: (B, Y) => /* @__PURE__ */ y(Qp, b({
      as: c,
      className: J(m.root, a, {
        entered: m.entered,
        exited: !d && A === "0px" && m.hidden
      }[B]),
      style: b({
        [D ? "minWidth" : "minHeight"]: A
      }, S),
      ref: j
    }, Y, {
      // `ownerState` is set after `childProps` to override any existing `ownerState` property in `childProps`
      // that might have been forwarded from the Transition component.
      ownerState: b({}, $, {
        state: B
      }),
      children: /* @__PURE__ */ y(ef, {
        ownerState: b({}, $, {
          state: B
        }),
        className: m.wrapper,
        ref: N,
        children: /* @__PURE__ */ y(tf, {
          ownerState: b({}, $, {
            state: B
          }),
          className: m.wrapperInner,
          children: s
        })
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ui.propTypes = {
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
  component: Qn,
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
ui.muiSupportAuto = !0;
function nf(e) {
  return ce("MuiPaper", e);
}
ae("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const of = ["className", "component", "elevation", "square", "variant"], rf = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: i
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return ue(s, nf, i);
}, sf = W("div", {
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
    backgroundImage: `linear-gradient(${me.alpha("#fff", is(t.elevation))}, ${me.alpha("#fff", is(t.elevation))})`
  }, e.vars && {
    backgroundImage: (o = e.vars.overlays) == null ? void 0 : o[t.elevation]
  }));
}), Ht = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = q(r, of), d = b({}, r, {
    component: s,
    elevation: a,
    square: l,
    variant: c
  }), h = rf(d);
  return process.env.NODE_ENV !== "production" && lt().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ y(sf, b({
    as: s,
    ownerState: d,
    className: J(h.root, i),
    ref: o
  }, u));
});
process.env.NODE_ENV !== "production" && (Ht.propTypes = {
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
  elevation: St(_t, (e) => {
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
const di = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (di.displayName = "AccordionContext");
const af = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"], lf = ["component", "slots", "slotProps"], cf = ["component"];
function uf(e, t) {
  const {
    className: o,
    elementType: r,
    ownerState: i,
    externalForwardedProps: s,
    getSlotOwnerState: a,
    internalForwardedProps: l
  } = t, c = q(t, af), {
    component: u,
    slots: d = {
      [e]: void 0
    },
    slotProps: h = {
      [e]: void 0
    }
  } = s;
  q(s, lf);
  const f = d[e] || r, T = Fa(h[e], i), g = Da(b({
    className: o
  }, c, {
    externalForwardedProps: void 0,
    externalSlotProps: T
  })), {
    props: {
      component: p
    },
    internalRef: R
  } = g, O = q(g.props, cf), S = Ie(R, T == null ? void 0 : T.ref, t.ref), v = a ? a(O) : {}, C = b({}, i, v), x = p, $ = Aa(f, b({}, e === "root", !d[e] && l, O, x && {
    as: x
  }, {
    ref: S
  }), C);
  return Object.keys(v).forEach((m) => {
    delete $[m];
  }), [f, $];
}
function df(e) {
  return ce("MuiAccordion", e);
}
const ao = ae("MuiAccordion", ["root", "rounded", "expanded", "disabled", "gutters", "region"]), pf = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "slots", "slotProps", "TransitionComponent", "TransitionProps"], ff = (e) => {
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
  }, df, t);
}, mf = W(Ht, {
  name: "MuiAccordion",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${ao.region}`]: t.region
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
    [`&.${ao.expanded}`]: {
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
    [`&.${ao.disabled}`]: {
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
      [`&.${ao.expanded}`]: {
        margin: "16px 0"
      }
    }
  }]
})), hf = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    square: h = !1,
    slots: f = {},
    slotProps: T = {},
    TransitionComponent: g,
    TransitionProps: p
  } = r, R = q(r, pf), [O, S] = gn({
    controlled: u,
    default: a,
    name: "Accordion",
    state: "expanded"
  }), v = E.useCallback((D) => {
    S(!O), d && d(D, !O);
  }, [O, d, S]), [C, ...x] = E.Children.toArray(i), $ = E.useMemo(() => ({
    expanded: O,
    disabled: l,
    disableGutters: c,
    toggle: v
  }), [O, l, c, v]), m = b({}, r, {
    square: h,
    disabled: l,
    disableGutters: c,
    expanded: O
  }), w = ff(m), P = b({
    transition: g
  }, f), N = b({
    transition: p
  }, T), [I, A] = uf("transition", {
    elementType: ui,
    externalForwardedProps: {
      slots: P,
      slotProps: N
    },
    ownerState: m
  });
  return /* @__PURE__ */ se(mf, b({
    className: J(w.root, s),
    ref: o,
    ownerState: m,
    square: h
  }, R, {
    children: [/* @__PURE__ */ y(di.Provider, {
      value: $,
      children: C
    }), /* @__PURE__ */ y(I, b({
      in: O,
      timeout: "auto"
    }, A, {
      children: /* @__PURE__ */ y("div", {
        "aria-labelledby": C.props.id,
        id: C.props["aria-controls"],
        role: "region",
        className: w.region,
        children: x
      })
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (hf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: St(n.node.isRequired, (e) => {
    const t = E.Children.toArray(e.children)[0];
    return hn.isFragment(t) ? new Error("MUI: The Accordion doesn't accept a Fragment as a child. Consider providing an array instead.") : /* @__PURE__ */ E.isValidElement(t) ? null : new Error("MUI: Expected the first child of Accordion to be a valid element.");
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
function Ga(e) {
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
  } = e, [d, h] = E.useState(!1), f = J(t, o.ripple, o.rippleVisible, r && o.ripplePulsate), T = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, g = J(o.child, d && o.childLeaving, r && o.childPulsate);
  return !l && !d && h(!0), E.useEffect(() => {
    if (!l && c != null) {
      const p = setTimeout(c, u);
      return () => {
        clearTimeout(p);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ y("span", {
    className: f,
    style: T,
    children: /* @__PURE__ */ y("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (Ga.propTypes = {
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
const ot = ae("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), bf = ["center", "classes", "className"];
let Zo = (e) => e, as, ls, cs, us;
const jr = 550, gf = 80, yf = En(as || (as = Zo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), vf = En(ls || (ls = Zo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), xf = En(cs || (cs = Zo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Ef = W("span", {
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
}), Tf = W(Ga, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(us || (us = Zo`
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
`), ot.rippleVisible, yf, jr, ({
  theme: e
}) => e.transitions.easing.easeInOut, ot.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, ot.child, ot.childLeaving, vf, jr, ({
  theme: e
}) => e.transitions.easing.easeInOut, ot.childPulsate, xf, ({
  theme: e
}) => e.transitions.easing.easeInOut), Ya = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a
  } = r, l = q(r, bf), [c, u] = E.useState([]), d = E.useRef(0), h = E.useRef(null);
  E.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [c]);
  const f = E.useRef(!1), T = Xo(), g = E.useRef(null), p = E.useRef(null), R = E.useCallback((C) => {
    const {
      pulsate: x,
      rippleX: $,
      rippleY: m,
      rippleSize: w,
      cb: P
    } = C;
    u((N) => [...N, /* @__PURE__ */ y(Tf, {
      classes: {
        ripple: J(s.ripple, ot.ripple),
        rippleVisible: J(s.rippleVisible, ot.rippleVisible),
        ripplePulsate: J(s.ripplePulsate, ot.ripplePulsate),
        child: J(s.child, ot.child),
        childLeaving: J(s.childLeaving, ot.childLeaving),
        childPulsate: J(s.childPulsate, ot.childPulsate)
      },
      timeout: jr,
      pulsate: x,
      rippleX: $,
      rippleY: m,
      rippleSize: w
    }, d.current)]), d.current += 1, h.current = P;
  }, [s]), O = E.useCallback((C = {}, x = {}, $ = () => {
  }) => {
    const {
      pulsate: m = !1,
      center: w = i || x.pulsate,
      fakeElement: P = !1
      // For test purposes
    } = x;
    if ((C == null ? void 0 : C.type) === "mousedown" && f.current) {
      f.current = !1;
      return;
    }
    (C == null ? void 0 : C.type) === "touchstart" && (f.current = !0);
    const N = P ? null : p.current, I = N ? N.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let A, D, L;
    if (w || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      A = Math.round(I.width / 2), D = Math.round(I.height / 2);
    else {
      const {
        clientX: F,
        clientY: j
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      A = Math.round(F - I.left), D = Math.round(j - I.top);
    }
    if (w)
      L = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3), L % 2 === 0 && (L += 1);
    else {
      const F = Math.max(Math.abs((N ? N.clientWidth : 0) - A), A) * 2 + 2, j = Math.max(Math.abs((N ? N.clientHeight : 0) - D), D) * 2 + 2;
      L = Math.sqrt(F ** 2 + j ** 2);
    }
    C != null && C.touches ? g.current === null && (g.current = () => {
      R({
        pulsate: m,
        rippleX: A,
        rippleY: D,
        rippleSize: L,
        cb: $
      });
    }, T.start(gf, () => {
      g.current && (g.current(), g.current = null);
    })) : R({
      pulsate: m,
      rippleX: A,
      rippleY: D,
      rippleSize: L,
      cb: $
    });
  }, [i, R, T]), S = E.useCallback(() => {
    O({}, {
      pulsate: !0
    });
  }, [O]), v = E.useCallback((C, x) => {
    if (T.clear(), (C == null ? void 0 : C.type) === "touchend" && g.current) {
      g.current(), g.current = null, T.start(0, () => {
        v(C, x);
      });
      return;
    }
    g.current = null, u(($) => $.length > 0 ? $.slice(1) : $), h.current = x;
  }, [T]);
  return E.useImperativeHandle(o, () => ({
    pulsate: S,
    start: O,
    stop: v
  }), [S, O, v]), /* @__PURE__ */ y(Ef, b({
    className: J(ot.root, s.root, a),
    ref: p
  }, l, {
    children: /* @__PURE__ */ y(li, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (Ya.propTypes = {
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
function Cf(e) {
  return ce("MuiButtonBase", e);
}
const Of = ae("MuiButtonBase", ["root", "disabled", "focusVisible"]), Rf = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Sf = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: i
  } = e, a = ue({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, Cf, i);
  return o && r && (a.root += ` ${r}`), a;
}, Pf = W("button", {
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
  [`&.${Of.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Pt = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    disableTouchRipple: h = !1,
    focusRipple: f = !1,
    LinkComponent: T = "a",
    onBlur: g,
    onClick: p,
    onContextMenu: R,
    onDragLeave: O,
    onFocus: S,
    onFocusVisible: v,
    onKeyDown: C,
    onKeyUp: x,
    onMouseDown: $,
    onMouseLeave: m,
    onMouseUp: w,
    onTouchEnd: P,
    onTouchMove: N,
    onTouchStart: I,
    tabIndex: A = 0,
    TouchRippleProps: D,
    touchRippleRef: L,
    type: F
  } = r, j = q(r, Rf), z = E.useRef(null), M = E.useRef(null), G = Ie(M, L), {
    isFocusVisibleRef: k,
    onFocus: V,
    onBlur: ee,
    ref: Z
  } = _a(), [U, Q] = E.useState(!1);
  u && U && Q(!1), E.useImperativeHandle(i, () => ({
    focusVisible: () => {
      Q(!0), z.current.focus();
    }
  }), []);
  const [B, Y] = E.useState(!1);
  E.useEffect(() => {
    Y(!0);
  }, []);
  const H = B && !d && !u;
  E.useEffect(() => {
    U && f && !d && B && M.current.pulsate();
  }, [d, f, U, B]);
  function K(le, ht, Rn = h) {
    return mt((Yt) => (ht && ht(Yt), !Rn && M.current && M.current[le](Yt), !0));
  }
  const ne = K("start", $), te = K("stop", R), _ = K("stop", O), re = K("stop", w), oe = K("stop", (le) => {
    U && le.preventDefault(), m && m(le);
  }), de = K("start", I), De = K("stop", P), Fe = K("stop", N), He = K("stop", (le) => {
    ee(le), k.current === !1 && Q(!1), g && g(le);
  }, !1), Xe = mt((le) => {
    z.current || (z.current = le.currentTarget), V(le), k.current === !0 && (Q(!0), v && v(le)), S && S(le);
  }), Qe = () => {
    const le = z.current;
    return c && c !== "button" && !(le.tagName === "A" && le.href);
  }, we = E.useRef(!1), et = mt((le) => {
    f && !we.current && U && M.current && le.key === " " && (we.current = !0, M.current.stop(le, () => {
      M.current.start(le);
    })), le.target === le.currentTarget && Qe() && le.key === " " && le.preventDefault(), C && C(le), le.target === le.currentTarget && Qe() && le.key === "Enter" && !u && (le.preventDefault(), p && p(le));
  }), Ge = mt((le) => {
    f && le.key === " " && M.current && U && !le.defaultPrevented && (we.current = !1, M.current.stop(le, () => {
      M.current.pulsate(le);
    })), x && x(le), p && le.target === le.currentTarget && Qe() && le.key === " " && !le.defaultPrevented && p(le);
  });
  let Se = c;
  Se === "button" && (j.href || j.to) && (Se = T);
  const tt = {};
  Se === "button" ? (tt.type = F === void 0 ? "button" : F, tt.disabled = u) : (!j.href && !j.to && (tt.role = "button"), u && (tt["aria-disabled"] = u));
  const At = Ie(o, Z, z);
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    H && !M.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [H]);
  const $t = b({}, r, {
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: h,
    focusRipple: f,
    tabIndex: A,
    focusVisible: U
  }), ge = Sf($t);
  return /* @__PURE__ */ se(Pf, b({
    as: Se,
    className: J(ge.root, l),
    ownerState: $t,
    onBlur: He,
    onClick: p,
    onContextMenu: te,
    onFocus: Xe,
    onKeyDown: et,
    onKeyUp: Ge,
    onMouseDown: ne,
    onMouseLeave: oe,
    onMouseUp: re,
    onDragLeave: _,
    onTouchEnd: De,
    onTouchMove: Fe,
    onTouchStart: de,
    ref: At,
    tabIndex: u ? -1 : A,
    type: F
  }, tt, j, {
    children: [a, H ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ y(Ya, b({
        ref: G,
        center: s
      }, D))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Pt.propTypes = {
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
  component: Qn,
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
function wf(e) {
  return ce("MuiAccordionSummary", e);
}
const sn = ae("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]), $f = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"], Nf = (e) => {
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
  }, wf, t);
}, _f = W(Pt, {
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
    [`&.${sn.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${sn.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity
    },
    [`&:hover:not(.${sn.disabled})`]: {
      cursor: "pointer"
    },
    variants: [{
      props: (o) => !o.disableGutters,
      style: {
        [`&.${sn.expanded}`]: {
          minHeight: 64
        }
      }
    }]
  };
}), If = W("div", {
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
      [`&.${sn.expanded}`]: {
        margin: "20px 0"
      }
    }
  }]
})), kf = W("div", {
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
  [`&.${sn.expanded}`]: {
    transform: "rotate(180deg)"
  }
})), Mf = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiAccordionSummary"
  }), {
    children: i,
    className: s,
    expandIcon: a,
    focusVisibleClassName: l,
    onClick: c
  } = r, u = q(r, $f), {
    disabled: d = !1,
    disableGutters: h,
    expanded: f,
    toggle: T
  } = E.useContext(di), g = (O) => {
    T && T(O), c && c(O);
  }, p = b({}, r, {
    expanded: f,
    disabled: d,
    disableGutters: h
  }), R = Nf(p);
  return /* @__PURE__ */ se(_f, b({
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
    children: [/* @__PURE__ */ y(If, {
      className: R.content,
      ownerState: p,
      children: i
    }), a && /* @__PURE__ */ y(kf, {
      className: R.expandIconWrapper,
      ownerState: p,
      children: a
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Mf.propTypes = {
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
function Af(e) {
  return ce("MuiIconButton", e);
}
const Df = ae("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Ff = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], jf = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: i,
    size: s
  } = e, a = {
    root: ["root", o && "disabled", r !== "default" && `color${X(r)}`, i && `edge${X(i)}`, `size${X(s)}`]
  };
  return ue(a, Af, t);
}, Lf = W(Pt, {
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
    [`&.${Df.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Bf = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
  } = r, h = q(r, Ff), f = b({}, r, {
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), T = jf(f);
  return /* @__PURE__ */ y(Lf, b({
    className: J(T.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: o
  }, h, {
    ownerState: f,
    children: s
  }));
});
process.env.NODE_ENV !== "production" && (Bf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: St(n.node, (e) => E.Children.toArray(e.children).some((o) => /* @__PURE__ */ E.isValidElement(o) && o.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
function zf(e) {
  return ce("MuiTypography", e);
}
ae("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Vf = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Wf = (e) => {
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
  return ue(l, zf, a);
}, Uf = W("span", {
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
})), ds = {
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
}, qf = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Hf = (e) => qf[e] || e, qe = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiTypography"
  }), i = Hf(r.color), s = Zn(b({}, r, {
    color: i
  })), {
    align: a = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: h = !1,
    variant: f = "body1",
    variantMapping: T = ds
  } = s, g = q(s, Vf), p = b({}, s, {
    align: a,
    color: i,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: d,
    paragraph: h,
    variant: f,
    variantMapping: T
  }), R = c || (h ? "p" : T[f] || ds[f]) || "span", O = Wf(p);
  return /* @__PURE__ */ y(Uf, b({
    as: R,
    ref: o,
    ownerState: p,
    className: J(O.root, l)
  }, g));
});
process.env.NODE_ENV !== "production" && (qe.propTypes = {
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
function Gf(e) {
  return ce("MuiAppBar", e);
}
ae("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const Yf = ["className", "color", "enableColorOnDark", "position"], Kf = (e) => {
  const {
    color: t,
    position: o,
    classes: r
  } = e, i = {
    root: ["root", `color${X(t)}`, `position${X(o)}`]
  };
  return ue(i, Gf, r);
}, lo = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, Xf = W(Ht, {
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
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette.AppBar.defaultBg : lo(e.vars.palette.AppBar.darkBg, e.vars.palette.AppBar.defaultBg),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette.text.primary : lo(e.vars.palette.AppBar.darkColor, e.vars.palette.text.primary)
  }, t.color && !t.color.match(/^(default|inherit|transparent)$/) && {
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette[t.color].main : lo(e.vars.palette.AppBar.darkBg, e.vars.palette[t.color].main),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette[t.color].contrastText : lo(e.vars.palette.AppBar.darkColor, e.vars.palette[t.color].contrastText)
  }, !["inherit", "transparent"].includes(t.color) && {
    backgroundColor: "var(--AppBar-background)"
  }, {
    color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)"
  }, t.color === "transparent" && {
    backgroundImage: "none",
    backgroundColor: "transparent",
    color: "inherit"
  }));
}), Jf = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiAppBar"
  }), {
    className: i,
    color: s = "primary",
    enableColorOnDark: a = !1,
    position: l = "fixed"
  } = r, c = q(r, Yf), u = b({}, r, {
    color: s,
    position: l,
    enableColorOnDark: a
  }), d = Kf(u);
  return /* @__PURE__ */ y(Xf, b({
    square: !0,
    component: "header",
    ownerState: u,
    elevation: 4,
    className: J(d.root, i, l === "fixed" && "mui-fixed"),
    ref: o
  }, c));
});
process.env.NODE_ENV !== "production" && (Jf.propTypes = {
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
function Zf(e) {
  return typeof e == "function" ? e() : e;
}
const $o = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    children: r,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = E.useState(null), c = Ie(/* @__PURE__ */ E.isValidElement(r) ? qt(r) : null, o);
  if (it(() => {
    s || l(Zf(i) || document.body);
  }, [i, s]), it(() => {
    if (a && !s)
      return Co(o, a), () => {
        Co(o, null);
      };
  }, [o, a, s]), s) {
    if (/* @__PURE__ */ E.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ E.cloneElement(r, u);
    }
    return /* @__PURE__ */ y(E.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ y(E.Fragment, {
    children: a && /* @__PURE__ */ Xl.createPortal(r, a)
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
  container: n.oneOfType([bn, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
process.env.NODE_ENV !== "production" && ($o.propTypes = eo($o.propTypes));
const Qf = ["onChange", "maxRows", "minRows", "style", "value"];
function co(e) {
  return parseInt(e, 10) || 0;
}
const em = {
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
function tm(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ps(e) {
  return tm(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const Ka = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    onChange: r,
    maxRows: i,
    minRows: s = 1,
    style: a,
    value: l
  } = t, c = q(t, Qf), {
    current: u
  } = E.useRef(l != null), d = E.useRef(null), h = Ie(o, d), f = E.useRef(null), T = E.useRef(null), g = E.useCallback(() => {
    const v = d.current, C = T.current;
    if (!v || !C)
      return;
    const $ = xt(v).getComputedStyle(v);
    if ($.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    C.style.width = $.width, C.value = v.value || t.placeholder || "x", C.value.slice(-1) === `
` && (C.value += " ");
    const m = $.boxSizing, w = co($.paddingBottom) + co($.paddingTop), P = co($.borderBottomWidth) + co($.borderTopWidth), N = C.scrollHeight;
    C.value = "x";
    const I = C.scrollHeight;
    let A = N;
    s && (A = Math.max(Number(s) * I, A)), i && (A = Math.min(Number(i) * I, A)), A = Math.max(A, I);
    const D = A + (m === "border-box" ? w + P : 0), L = Math.abs(A - N) <= 1;
    return {
      outerHeightStyle: D,
      overflowing: L
    };
  }, [i, s, t.placeholder]), p = mt(() => {
    const v = d.current, C = g();
    if (!v || !C || ps(C))
      return !1;
    const x = C.outerHeightStyle;
    return f.current != null && f.current !== x;
  }), R = E.useCallback(() => {
    const v = d.current, C = g();
    if (!v || !C || ps(C))
      return;
    const x = C.outerHeightStyle;
    f.current !== x && (f.current = x, v.style.height = `${x}px`), v.style.overflow = C.overflowing ? "hidden" : "";
  }, [g]), O = E.useRef(-1);
  it(() => {
    const v = Yo(R), C = d == null ? void 0 : d.current;
    if (!C)
      return;
    const x = xt(C);
    x.addEventListener("resize", v);
    let $;
    return typeof ResizeObserver < "u" && ($ = new ResizeObserver(() => {
      p() && ($.unobserve(C), cancelAnimationFrame(O.current), R(), O.current = requestAnimationFrame(() => {
        $.observe(C);
      }));
    }), $.observe(C)), () => {
      v.clear(), cancelAnimationFrame(O.current), x.removeEventListener("resize", v), $ && $.disconnect();
    };
  }, [g, R, p]), it(() => {
    R();
  });
  const S = (v) => {
    u || R(), r && r(v);
  };
  return /* @__PURE__ */ se(E.Fragment, {
    children: [/* @__PURE__ */ y("textarea", b({
      value: l,
      onChange: S,
      ref: h,
      rows: s,
      style: a
    }, c)), /* @__PURE__ */ y("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: T,
      tabIndex: -1,
      style: b({}, em.shadow, a, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ka.propTypes = {
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
function Mt({
  props: e,
  states: t,
  muiFormControl: o
}) {
  return t.reduce((r, i) => (r[i] = e[i], o && typeof e[i] > "u" && (r[i] = o[i]), r), {});
}
const Qo = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (Qo.displayName = "FormControlContext");
function wt() {
  return E.useContext(Qo);
}
function Xa(e) {
  return /* @__PURE__ */ y(ga, b({}, e, {
    defaultTheme: si,
    themeId: fn
  }));
}
process.env.NODE_ENV !== "production" && (Xa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool])
});
function fs(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function No(e, t = !1) {
  return e && (fs(e.value) && e.value !== "" || t && fs(e.defaultValue) && e.defaultValue !== "");
}
function nm(e) {
  return e.startAdornment;
}
function om(e) {
  return ce("MuiInputBase", e);
}
const vn = ae("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), rm = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], er = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.formControl && t.formControl, o.startAdornment && t.adornedStart, o.endAdornment && t.adornedEnd, o.error && t.error, o.size === "small" && t.sizeSmall, o.multiline && t.multiline, o.color && t[`color${X(o.color)}`], o.fullWidth && t.fullWidth, o.hiddenLabel && t.hiddenLabel];
}, tr = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.input, o.size === "small" && t.inputSizeSmall, o.multiline && t.inputMultiline, o.type === "search" && t.inputTypeSearch, o.startAdornment && t.inputAdornedStart, o.endAdornment && t.inputAdornedEnd, o.hiddenLabel && t.inputHiddenLabel];
}, im = (e) => {
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
    readOnly: h,
    size: f,
    startAdornment: T,
    type: g
  } = e, p = {
    root: ["root", `color${X(o)}`, r && "disabled", i && "error", c && "fullWidth", a && "focused", l && "formControl", f && f !== "medium" && `size${X(f)}`, d && "multiline", T && "adornedStart", s && "adornedEnd", u && "hiddenLabel", h && "readOnly"],
    input: ["input", r && "disabled", g === "search" && "inputTypeSearch", d && "inputMultiline", f === "small" && "inputSizeSmall", u && "inputHiddenLabel", T && "inputAdornedStart", s && "inputAdornedEnd", h && "readOnly"]
  };
  return ue(p, om, t);
}, nr = W("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: er
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
  [`&.${vn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && b({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), or = W("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: tr
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
    [`label[data-shrink=false] + .${vn.formControl} &`]: {
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
    [`&.${vn.disabled}`]: {
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
}), sm = /* @__PURE__ */ y(Xa, {
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
}), rr = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    defaultValue: h,
    disabled: f,
    disableInjectingGlobalStyles: T,
    endAdornment: g,
    fullWidth: p = !1,
    id: R,
    inputComponent: O = "input",
    inputProps: S = {},
    inputRef: v,
    maxRows: C,
    minRows: x,
    multiline: $ = !1,
    name: m,
    onBlur: w,
    onChange: P,
    onClick: N,
    onFocus: I,
    onKeyDown: A,
    onKeyUp: D,
    placeholder: L,
    readOnly: F,
    renderSuffix: j,
    rows: z,
    slotProps: M = {},
    slots: G = {},
    startAdornment: k,
    type: V = "text",
    value: ee
  } = i, Z = q(i, rm), U = S.value != null ? S.value : ee, {
    current: Q
  } = E.useRef(U != null), B = E.useRef(), Y = E.useCallback((ge) => {
    process.env.NODE_ENV !== "production" && ge && ge.nodeName !== "INPUT" && !ge.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), H = Ie(B, v, S.ref, Y), [K, ne] = E.useState(!1), te = wt();
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    if (te)
      return te.registerEffect();
  }, [te]);
  const _ = Mt({
    props: i,
    muiFormControl: te,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  _.focused = te ? te.focused : K, E.useEffect(() => {
    !te && f && K && (ne(!1), w && w());
  }, [te, f, K, w]);
  const re = te && te.onFilled, oe = te && te.onEmpty, de = E.useCallback((ge) => {
    No(ge) ? re && re() : oe && oe();
  }, [re, oe]);
  it(() => {
    Q && de({
      value: U
    });
  }, [U, de, Q]);
  const De = (ge) => {
    if (_.disabled) {
      ge.stopPropagation();
      return;
    }
    I && I(ge), S.onFocus && S.onFocus(ge), te && te.onFocus ? te.onFocus(ge) : ne(!0);
  }, Fe = (ge) => {
    w && w(ge), S.onBlur && S.onBlur(ge), te && te.onBlur ? te.onBlur(ge) : ne(!1);
  }, He = (ge, ...le) => {
    if (!Q) {
      const ht = ge.target || B.current;
      if (ht == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Ot(1));
      de({
        value: ht.value
      });
    }
    S.onChange && S.onChange(ge, ...le), P && P(ge, ...le);
  };
  E.useEffect(() => {
    de(B.current);
  }, []);
  const Xe = (ge) => {
    B.current && ge.currentTarget === ge.target && B.current.focus(), N && N(ge);
  };
  let Qe = O, we = S;
  $ && Qe === "input" && (z ? (process.env.NODE_ENV !== "production" && (x || C) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), we = b({
    type: void 0,
    minRows: z,
    maxRows: z
  }, we)) : we = b({
    type: void 0,
    maxRows: C,
    minRows: x
  }, we), Qe = Ka);
  const et = (ge) => {
    de(ge.animationName === "mui-auto-fill-cancel" ? B.current : {
      value: "x"
    });
  };
  E.useEffect(() => {
    te && te.setAdornedStart(!!k);
  }, [te, k]);
  const Ge = b({}, i, {
    color: _.color || "primary",
    disabled: _.disabled,
    endAdornment: g,
    error: _.error,
    focused: _.focused,
    formControl: te,
    fullWidth: p,
    hiddenLabel: _.hiddenLabel,
    multiline: $,
    size: _.size,
    startAdornment: k,
    type: V
  }), Se = im(Ge), tt = G.root || u.Root || nr, At = M.root || d.root || {}, $t = G.input || u.Input || or;
  return we = b({}, we, (r = M.input) != null ? r : d.input), /* @__PURE__ */ se(E.Fragment, {
    children: [!T && sm, /* @__PURE__ */ se(tt, b({}, At, !yn(tt) && {
      ownerState: b({}, Ge, At.ownerState)
    }, {
      ref: o,
      onClick: Xe
    }, Z, {
      className: J(Se.root, At.className, c, F && "MuiInputBase-readOnly"),
      children: [k, /* @__PURE__ */ y(Qo.Provider, {
        value: null,
        children: /* @__PURE__ */ y($t, b({
          ownerState: Ge,
          "aria-invalid": _.error,
          "aria-describedby": s,
          autoComplete: a,
          autoFocus: l,
          defaultValue: h,
          disabled: _.disabled,
          id: R,
          onAnimationStart: et,
          name: m,
          placeholder: L,
          readOnly: F,
          required: _.required,
          rows: z,
          value: U,
          onKeyDown: A,
          onKeyUp: D,
          type: V
        }, we, !yn($t) && {
          as: Qe,
          ownerState: b({}, Ge, we.ownerState)
        }, {
          ref: H,
          className: J(Se.input, we.className, F && "MuiInputBase-readOnly"),
          onBlur: Fe,
          onChange: He,
          onFocus: De
        }))
      }), g, j ? j(b({}, _, {
        startAdornment: k
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (rr.propTypes = {
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
  inputComponent: Qn,
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
function am(e) {
  return ce("MuiInput", e);
}
const wn = b({}, vn, ae("MuiInput", ["root", "underline", "input"]));
function lm(e) {
  return ce("MuiOutlinedInput", e);
}
const Nt = b({}, vn, ae("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
function cm(e) {
  return ce("MuiFilledInput", e);
}
const Ft = b({}, vn, ae("MuiFilledInput", ["root", "underline", "input"])), um = ct(/* @__PURE__ */ y("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), dm = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], pm = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Ja = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    onEntered: h,
    onEntering: f,
    onExit: T,
    onExited: g,
    onExiting: p,
    style: R,
    timeout: O = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = ut
  } = t, v = q(t, dm), C = E.useRef(null), x = Ie(C, qt(l), o), $ = (L) => (F) => {
    if (L) {
      const j = C.current;
      F === void 0 ? L(j) : L(j, F);
    }
  }, m = $(f), w = $((L, F) => {
    ci(L);
    const j = It({
      style: R,
      timeout: O,
      easing: c
    }, {
      mode: "enter"
    });
    L.style.webkitTransition = r.transitions.create("opacity", j), L.style.transition = r.transitions.create("opacity", j), d && d(L, F);
  }), P = $(h), N = $(p), I = $((L) => {
    const F = It({
      style: R,
      timeout: O,
      easing: c
    }, {
      mode: "exit"
    });
    L.style.webkitTransition = r.transitions.create("opacity", F), L.style.transition = r.transitions.create("opacity", F), T && T(L);
  }), A = $(g);
  return /* @__PURE__ */ y(S, b({
    appear: a,
    in: u,
    nodeRef: C,
    onEnter: w,
    onEntered: P,
    onEntering: m,
    onExit: I,
    onExited: A,
    onExiting: N,
    addEndListener: (L) => {
      s && s(C.current, L);
    },
    timeout: O
  }, v, {
    children: (L, F) => /* @__PURE__ */ E.cloneElement(l, b({
      style: b({
        opacity: 0,
        visibility: L === "exited" && !u ? "hidden" : void 0
      }, pm[L], R, l.props.style),
      ref: x
    }, F))
  }));
});
process.env.NODE_ENV !== "production" && (Ja.propTypes = {
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
  children: Ut.isRequired,
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
function fm(e) {
  return ce("MuiBackdrop", e);
}
ae("MuiBackdrop", ["root", "invisible"]);
const mm = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], hm = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return ue({
    root: ["root", o && "invisible"]
  }, fm, t);
}, bm = W("div", {
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
})), Za = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, s;
  const a = pe({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: h = {},
    invisible: f = !1,
    open: T,
    slotProps: g = {},
    slots: p = {},
    TransitionComponent: R = Ja,
    transitionDuration: O
  } = a, S = q(a, mm), v = b({}, a, {
    component: u,
    invisible: f
  }), C = hm(v), x = (r = g.root) != null ? r : h.root;
  return /* @__PURE__ */ y(R, b({
    in: T,
    timeout: O
  }, S, {
    children: /* @__PURE__ */ y(bm, b({
      "aria-hidden": !0
    }, x, {
      as: (i = (s = p.root) != null ? s : d.Root) != null ? i : u,
      className: J(C.root, c, x == null ? void 0 : x.className),
      ownerState: b({}, v, x == null ? void 0 : x.ownerState),
      classes: C,
      ref: o,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Za.propTypes = {
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
const gm = ae("MuiBox", ["root"]), ym = ii(), Oe = Vu({
  themeId: fn,
  defaultTheme: ym,
  defaultClassName: gm.root,
  generateClassName: ei.generate
});
process.env.NODE_ENV !== "production" && (Oe.propTypes = {
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
function vm(e) {
  return ce("MuiButton", e);
}
const uo = ae("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Qa = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (Qa.displayName = "ButtonGroupContext");
const el = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (el.displayName = "ButtonGroupButtonContext");
const xm = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Em = (e) => {
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
  }, c = ue(l, vm, a);
  return b({}, a, c);
}, tl = (e) => b({}, e.size === "small" && {
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
}), Tm = W(Pt, {
  shouldForwardProp: (e) => We(e) || e === "classes",
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
    [`&.${uo.focusVisible}`]: b({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${uo.disabled}`]: b({
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
  [`&.${uo.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${uo.disabled}`]: {
    boxShadow: "none"
  }
}), Cm = W("span", {
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
}, tl(e))), Om = W("span", {
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
}, tl(e))), Gt = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = E.useContext(Qa), i = E.useContext(el), s = Hn(r, t), a = pe({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: h = !1,
    disableElevation: f = !1,
    disableFocusRipple: T = !1,
    endIcon: g,
    focusVisibleClassName: p,
    fullWidth: R = !1,
    size: O = "medium",
    startIcon: S,
    type: v,
    variant: C = "text"
  } = a, x = q(a, xm), $ = b({}, a, {
    color: c,
    component: u,
    disabled: h,
    disableElevation: f,
    disableFocusRipple: T,
    fullWidth: R,
    size: O,
    type: v,
    variant: C
  }), m = Em($), w = S && /* @__PURE__ */ y(Cm, {
    className: m.startIcon,
    ownerState: $,
    children: S
  }), P = g && /* @__PURE__ */ y(Om, {
    className: m.endIcon,
    ownerState: $,
    children: g
  }), N = i || "";
  return /* @__PURE__ */ se(Tm, b({
    ownerState: $,
    className: J(r.className, m.root, d, N),
    component: u,
    disabled: h,
    focusRipple: !T,
    focusVisibleClassName: J(m.focusVisible, p),
    ref: o,
    type: v
  }, x, {
    classes: m,
    children: [w, l, P]
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
function Rm(e) {
  return ce("PrivateSwitchBase", e);
}
ae("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Sm = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"], Pm = (e) => {
  const {
    classes: t,
    checked: o,
    disabled: r,
    edge: i
  } = e, s = {
    root: ["root", o && "checked", r && "disabled", i && `edge${X(i)}`],
    input: ["input"]
  };
  return ue(s, Rm, t);
}, wm = W(Pt)(({
  ownerState: e
}) => b({
  padding: 9,
  borderRadius: "50%"
}, e.edge === "start" && {
  marginLeft: e.size === "small" ? -3 : -12
}, e.edge === "end" && {
  marginRight: e.size === "small" ? -3 : -12
})), $m = W("input", {
  shouldForwardProp: We
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
}), nl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    autoFocus: r,
    checked: i,
    checkedIcon: s,
    className: a,
    defaultChecked: l,
    disabled: c,
    disableFocusRipple: u = !1,
    edge: d = !1,
    icon: h,
    id: f,
    inputProps: T,
    inputRef: g,
    name: p,
    onBlur: R,
    onChange: O,
    onFocus: S,
    readOnly: v,
    required: C = !1,
    tabIndex: x,
    type: $,
    value: m
  } = t, w = q(t, Sm), [P, N] = gn({
    controlled: i,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), I = wt(), A = (G) => {
    S && S(G), I && I.onFocus && I.onFocus(G);
  }, D = (G) => {
    R && R(G), I && I.onBlur && I.onBlur(G);
  }, L = (G) => {
    if (G.nativeEvent.defaultPrevented)
      return;
    const k = G.target.checked;
    N(k), O && O(G, k);
  };
  let F = c;
  I && typeof F > "u" && (F = I.disabled);
  const j = $ === "checkbox" || $ === "radio", z = b({}, t, {
    checked: P,
    disabled: F,
    disableFocusRipple: u,
    edge: d
  }), M = Pm(z);
  return /* @__PURE__ */ se(wm, b({
    component: "span",
    className: J(M.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: F,
    tabIndex: null,
    role: void 0,
    onFocus: A,
    onBlur: D,
    ownerState: z,
    ref: o
  }, w, {
    children: [/* @__PURE__ */ y($m, b({
      autoFocus: r,
      checked: i,
      defaultChecked: l,
      className: M.input,
      disabled: F,
      id: j ? f : void 0,
      name: p,
      onChange: L,
      readOnly: v,
      ref: g,
      required: C,
      ownerState: z,
      tabIndex: x,
      type: $
    }, $ === "checkbox" && m === void 0 ? {} : {
      value: m
    }, T)), P ? s : h]
  }));
});
process.env.NODE_ENV !== "production" && (nl.propTypes = {
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
const Nm = ct(/* @__PURE__ */ y("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), _m = ct(/* @__PURE__ */ y("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), Im = ct(/* @__PURE__ */ y("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function km(e) {
  return ce("MuiCheckbox", e);
}
const Cr = ae("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), Mm = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"], Am = (e) => {
  const {
    classes: t,
    indeterminate: o,
    color: r,
    size: i
  } = e, s = {
    root: ["root", o && "indeterminate", `color${X(r)}`, `size${X(i)}`]
  }, a = ue(s, km, t);
  return b({}, t, a);
}, Dm = W(nl, {
  shouldForwardProp: (e) => We(e) || e === "classes",
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
  [`&.${Cr.checked}, &.${Cr.indeterminate}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Cr.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  }
})), Fm = /* @__PURE__ */ y(_m, {}), jm = /* @__PURE__ */ y(Nm, {}), Lm = /* @__PURE__ */ y(Im, {}), ol = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i;
  const s = pe({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: a = Fm,
    color: l = "primary",
    icon: c = jm,
    indeterminate: u = !1,
    indeterminateIcon: d = Lm,
    inputProps: h,
    size: f = "medium",
    className: T
  } = s, g = q(s, Mm), p = u ? d : c, R = u ? d : a, O = b({}, s, {
    color: l,
    indeterminate: u,
    size: f
  }), S = Am(O);
  return /* @__PURE__ */ y(Dm, b({
    type: "checkbox",
    inputProps: b({
      "data-indeterminate": u
    }, h),
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
process.env.NODE_ENV !== "production" && (ol.propTypes = {
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
function ms(e) {
  return e.substring(2).toLowerCase();
}
function Bm(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function _o(e) {
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
  const d = Ie(qt(t), l), h = mt((g) => {
    const p = u.current;
    u.current = !1;
    const R = Be(l.current);
    if (!c.current || !l.current || "clientX" in g && Bm(g, R))
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
      const g = ms(s), p = Be(l.current), R = () => {
        a.current = !0;
      };
      return p.addEventListener(g, h), p.addEventListener("touchmove", R), () => {
        p.removeEventListener(g, h), p.removeEventListener("touchmove", R);
      };
    }
  }, [h, s]), r !== !1 && (T[r] = f(r)), E.useEffect(() => {
    if (r !== !1) {
      const g = ms(r), p = Be(l.current);
      return p.addEventListener(g, h), () => {
        p.removeEventListener(g, h);
      };
    }
  }, [h, r]), /* @__PURE__ */ y(E.Fragment, {
    children: /* @__PURE__ */ E.cloneElement(t, T)
  });
}
process.env.NODE_ENV !== "production" && (_o.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The wrapped element.
   */
  children: Ut.isRequired,
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
process.env.NODE_ENV !== "production" && (_o.propTypes = eo(_o.propTypes));
const rl = Vd({
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
process.env.NODE_ENV !== "production" && (rl.propTypes = {
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
function zm(e) {
  const t = Be(e);
  return t.body === e ? xt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function zn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function hs(e) {
  return parseInt(xt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Vm(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function bs(e, t, o, r, i) {
  const s = [t, o, ...r];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1, c = !Vm(a);
    l && c && zn(a, i);
  });
}
function Or(e, t) {
  let o = -1;
  return e.some((r, i) => t(r) ? (o = i, !0) : !1), o;
}
function Wm(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (zm(r)) {
      const a = Ia(Be(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${hs(r) + a}px`;
      const l = Be(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        o.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${hs(c) + a}px`;
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
function Um(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class qm {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && zn(t.modalRef, !1);
    const i = Um(o);
    bs(o, t.mount, t.modalRef, i, !0);
    const s = Or(this.containers, (a) => a.container === o);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, o) {
    const r = Or(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[r];
    i.restore || (i.restore = Wm(i, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Or(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && zn(t.modalRef, o), bs(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && zn(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Hm = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Gm(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Ym(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function Km(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Ym(e));
}
function Xm(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(Hm)).forEach((r, i) => {
    const s = Gm(r);
    s === -1 || !Km(r) || (s === 0 ? t.push(r) : o.push({
      documentOrder: i,
      tabIndex: s,
      node: r
    }));
  }), o.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function Jm() {
  return !0;
}
function Io(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = Xm,
    isEnabled: a = Jm,
    open: l
  } = e, c = E.useRef(!1), u = E.useRef(null), d = E.useRef(null), h = E.useRef(null), f = E.useRef(null), T = E.useRef(!1), g = E.useRef(null), p = Ie(qt(t), g), R = E.useRef(null);
  E.useEffect(() => {
    !l || !g.current || (T.current = !o);
  }, [o, l]), E.useEffect(() => {
    if (!l || !g.current)
      return;
    const v = Be(g.current);
    return g.current.contains(v.activeElement) || (g.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", "-1")), T.current && g.current.focus()), () => {
      i || (h.current && h.current.focus && (c.current = !0, h.current.focus()), h.current = null);
    };
  }, [l]), E.useEffect(() => {
    if (!l || !g.current)
      return;
    const v = Be(g.current), C = (m) => {
      R.current = m, !(r || !a() || m.key !== "Tab") && v.activeElement === g.current && m.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, x = () => {
      const m = g.current;
      if (m === null)
        return;
      if (!v.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (m.contains(v.activeElement) || r && v.activeElement !== u.current && v.activeElement !== d.current)
        return;
      if (v.activeElement !== f.current)
        f.current = null;
      else if (f.current !== null)
        return;
      if (!T.current)
        return;
      let w = [];
      if ((v.activeElement === u.current || v.activeElement === d.current) && (w = s(g.current)), w.length > 0) {
        var P, N;
        const I = !!((P = R.current) != null && P.shiftKey && ((N = R.current) == null ? void 0 : N.key) === "Tab"), A = w[0], D = w[w.length - 1];
        typeof A != "string" && typeof D != "string" && (I ? D.focus() : A.focus());
      } else
        m.focus();
    };
    v.addEventListener("focusin", x), v.addEventListener("keydown", C, !0);
    const $ = setInterval(() => {
      v.activeElement && v.activeElement.tagName === "BODY" && x();
    }, 50);
    return () => {
      clearInterval($), v.removeEventListener("focusin", x), v.removeEventListener("keydown", C, !0);
    };
  }, [o, r, i, a, l, s]);
  const O = (v) => {
    h.current === null && (h.current = v.relatedTarget), T.current = !0, f.current = v.target;
    const C = t.props.onFocus;
    C && C(v);
  }, S = (v) => {
    h.current === null && (h.current = v.relatedTarget), T.current = !0;
  };
  return /* @__PURE__ */ se(E.Fragment, {
    children: [/* @__PURE__ */ y("div", {
      tabIndex: l ? 0 : -1,
      onFocus: S,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(t, {
      ref: p,
      onFocus: O
    }), /* @__PURE__ */ y("div", {
      tabIndex: l ? 0 : -1,
      onFocus: S,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Io.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Ut,
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
process.env.NODE_ENV !== "production" && (Io.propTypes = eo(Io.propTypes));
function Zm(e) {
  return typeof e == "function" ? e() : e;
}
function Qm(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const eh = new qm();
function th(e) {
  const {
    container: t,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: i = eh,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: h
  } = e, f = E.useRef({}), T = E.useRef(null), g = E.useRef(null), p = Ie(g, h), [R, O] = E.useState(!d), S = Qm(c);
  let v = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (v = !1);
  const C = () => Be(T.current), x = () => (f.current.modalRef = g.current, f.current.mount = T.current, f.current), $ = () => {
    i.mount(x(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, m = mt(() => {
    const j = Zm(t) || C().body;
    i.add(x(), j), g.current && $();
  }), w = E.useCallback(() => i.isTopModal(x()), [i]), P = mt((j) => {
    T.current = j, j && (d && w() ? $() : g.current && zn(g.current, v));
  }), N = E.useCallback(() => {
    i.remove(x(), v);
  }, [v, i]);
  E.useEffect(() => () => {
    N();
  }, [N]), E.useEffect(() => {
    d ? m() : (!S || !s) && N();
  }, [d, N, S, s, m]);
  const I = (j) => (z) => {
    var M;
    (M = j.onKeyDown) == null || M.call(j, z), !(z.key !== "Escape" || z.which === 229 || // Wait until IME is settled.
    !w()) && (o || (z.stopPropagation(), u && u(z, "escapeKeyDown")));
  }, A = (j) => (z) => {
    var M;
    (M = j.onClick) == null || M.call(j, z), z.target === z.currentTarget && u && u(z, "backdropClick");
  };
  return {
    getRootProps: (j = {}) => {
      const z = Oo(e);
      delete z.onTransitionEnter, delete z.onTransitionExited;
      const M = b({}, z, j);
      return b({
        role: "presentation"
      }, M, {
        onKeyDown: I(M),
        ref: p
      });
    },
    getBackdropProps: (j = {}) => {
      const z = j;
      return b({
        "aria-hidden": !0
      }, z, {
        onClick: A(z),
        open: d
      });
    },
    getTransitionProps: () => {
      const j = () => {
        O(!1), a && a();
      }, z = () => {
        O(!0), l && l(), s && N();
      };
      return {
        onEnter: kr(j, c == null ? void 0 : c.props.onEnter),
        onExited: kr(z, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: p,
    portalRef: P,
    isTopModal: w,
    exited: R,
    hasTransition: S
  };
}
function nh(e) {
  return ce("MuiModal", e);
}
ae("MuiModal", ["root", "hidden", "backdrop"]);
const oh = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], rh = (e) => {
  const {
    open: t,
    exited: o,
    classes: r
  } = e;
  return ue({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, nh, r);
}, ih = W("div", {
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
})), sh = W(Za, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), pi = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, s, a, l, c;
  const u = pe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = sh,
    BackdropProps: h,
    className: f,
    closeAfterTransition: T = !1,
    children: g,
    container: p,
    component: R,
    components: O = {},
    componentsProps: S = {},
    disableAutoFocus: v = !1,
    disableEnforceFocus: C = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: $ = !1,
    disableRestoreFocus: m = !1,
    disableScrollLock: w = !1,
    hideBackdrop: P = !1,
    keepMounted: N = !1,
    onBackdropClick: I,
    open: A,
    slotProps: D,
    slots: L
    // eslint-disable-next-line react/prop-types
  } = u, F = q(u, oh), j = b({}, u, {
    closeAfterTransition: T,
    disableAutoFocus: v,
    disableEnforceFocus: C,
    disableEscapeKeyDown: x,
    disablePortal: $,
    disableRestoreFocus: m,
    disableScrollLock: w,
    hideBackdrop: P,
    keepMounted: N
  }), {
    getRootProps: z,
    getBackdropProps: M,
    getTransitionProps: G,
    portalRef: k,
    isTopModal: V,
    exited: ee,
    hasTransition: Z
  } = th(b({}, j, {
    rootRef: o
  })), U = b({}, j, {
    exited: ee
  }), Q = rh(U), B = {};
  if (g.props.tabIndex === void 0 && (B.tabIndex = "-1"), Z) {
    const {
      onEnter: re,
      onExited: oe
    } = G();
    B.onEnter = re, B.onExited = oe;
  }
  const Y = (r = (i = L == null ? void 0 : L.root) != null ? i : O.Root) != null ? r : ih, H = (s = (a = L == null ? void 0 : L.backdrop) != null ? a : O.Backdrop) != null ? s : d, K = (l = D == null ? void 0 : D.root) != null ? l : S.root, ne = (c = D == null ? void 0 : D.backdrop) != null ? c : S.backdrop, te = Wt({
    elementType: Y,
    externalSlotProps: K,
    externalForwardedProps: F,
    getSlotProps: z,
    additionalProps: {
      ref: o,
      as: R
    },
    ownerState: U,
    className: J(f, K == null ? void 0 : K.className, Q == null ? void 0 : Q.root, !U.open && U.exited && (Q == null ? void 0 : Q.hidden))
  }), _ = Wt({
    elementType: H,
    externalSlotProps: ne,
    additionalProps: h,
    getSlotProps: (re) => M(b({}, re, {
      onClick: (oe) => {
        I && I(oe), re != null && re.onClick && re.onClick(oe);
      }
    })),
    className: J(ne == null ? void 0 : ne.className, h == null ? void 0 : h.className, Q == null ? void 0 : Q.backdrop),
    ownerState: U
  });
  return !N && !A && (!Z || ee) ? null : /* @__PURE__ */ y($o, {
    ref: k,
    container: p,
    disablePortal: $,
    children: /* @__PURE__ */ se(Y, b({}, te, {
      children: [!P && d ? /* @__PURE__ */ y(H, b({}, _)) : null, /* @__PURE__ */ y(Io, {
        disableEnforceFocus: C,
        disableAutoFocus: v,
        disableRestoreFocus: m,
        isEnabled: V,
        open: A,
        children: /* @__PURE__ */ E.cloneElement(g, B)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (pi.propTypes = {
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
  children: Ut.isRequired,
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
  container: n.oneOfType([bn, n.func]),
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
const gs = ae("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), ah = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function lh(e, t, o) {
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
function il(e) {
  return typeof e == "function" ? e() : e;
}
function po(e, t, o) {
  const r = il(o), i = lh(e, t, r);
  i && (t.style.webkitTransform = i, t.style.transform = i);
}
const sl = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    easing: h = i,
    in: f,
    onEnter: T,
    onEntered: g,
    onEntering: p,
    onExit: R,
    onExited: O,
    onExiting: S,
    style: v,
    timeout: C = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = ut
  } = t, $ = q(t, ah), m = E.useRef(null), w = Ie(qt(c), m, o), P = (M) => (G) => {
    M && (G === void 0 ? M(m.current) : M(m.current, G));
  }, N = P((M, G) => {
    po(d, M, u), ci(M), T && T(M, G);
  }), I = P((M, G) => {
    const k = It({
      timeout: C,
      style: v,
      easing: h
    }, {
      mode: "enter"
    });
    M.style.webkitTransition = r.transitions.create("-webkit-transform", b({}, k)), M.style.transition = r.transitions.create("transform", b({}, k)), M.style.webkitTransform = "none", M.style.transform = "none", p && p(M, G);
  }), A = P(g), D = P(S), L = P((M) => {
    const G = It({
      timeout: C,
      style: v,
      easing: h
    }, {
      mode: "exit"
    });
    M.style.webkitTransition = r.transitions.create("-webkit-transform", G), M.style.transition = r.transitions.create("transform", G), po(d, M, u), R && R(M);
  }), F = P((M) => {
    M.style.webkitTransition = "", M.style.transition = "", O && O(M);
  }), j = (M) => {
    a && a(m.current, M);
  }, z = E.useCallback(() => {
    m.current && po(d, m.current, u);
  }, [d, u]);
  return E.useEffect(() => {
    if (f || d === "down" || d === "right")
      return;
    const M = Yo(() => {
      m.current && po(d, m.current, u);
    }), G = xt(m.current);
    return G.addEventListener("resize", M), () => {
      M.clear(), G.removeEventListener("resize", M);
    };
  }, [d, f, u]), E.useEffect(() => {
    f || z();
  }, [f, z]), /* @__PURE__ */ y(x, b({
    nodeRef: m,
    onEnter: N,
    onEntered: A,
    onEntering: I,
    onExit: L,
    onExited: F,
    onExiting: D,
    addEndListener: j,
    appear: l,
    in: f,
    timeout: C
  }, $, {
    children: (M, G) => /* @__PURE__ */ E.cloneElement(c, b({
      ref: w,
      style: b({
        visibility: M === "exited" && !f ? "hidden" : void 0
      }, v, c.props.style)
    }, G))
  }));
});
process.env.NODE_ENV !== "production" && (sl.propTypes = {
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
  children: Ut.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: St(n.oneOfType([bn, n.func]), (e) => {
    if (e.open) {
      const t = il(e.container);
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
function ch(e) {
  return ce("MuiDrawer", e);
}
ae("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const uh = ["BackdropProps"], dh = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], al = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, (o.variant === "permanent" || o.variant === "persistent") && t.docked, t.modal];
}, ph = (e) => {
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
  return ue(i, ch, t);
}, fh = W(pi, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: al
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})), ys = W("div", {
  shouldForwardProp: We,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: al
})({
  flex: "0 0 auto"
}), mh = W(Ht, {
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
})), ll = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function hh(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function bh({
  direction: e
}, t) {
  return e === "rtl" && hh(t) ? ll[t] : t;
}
const gh = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiDrawer"
  }), i = lt(), s = oi(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    BackdropProps: c,
    children: u,
    className: d,
    elevation: h = 16,
    hideBackdrop: f = !1,
    ModalProps: {
      BackdropProps: T
    } = {},
    onClose: g,
    open: p = !1,
    PaperProps: R = {},
    SlideProps: O,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = sl,
    transitionDuration: v = a,
    variant: C = "temporary"
  } = r, x = q(r.ModalProps, uh), $ = q(r, dh), m = E.useRef(!1);
  E.useEffect(() => {
    m.current = !0;
  }, []);
  const w = bh({
    direction: s ? "rtl" : "ltr"
  }, l), N = b({}, r, {
    anchor: l,
    elevation: h,
    open: p,
    variant: C
  }, $), I = ph(N), A = /* @__PURE__ */ y(mh, b({
    elevation: C === "temporary" ? h : 0,
    square: !0
  }, R, {
    className: J(I.paper, R.className),
    ownerState: N,
    children: u
  }));
  if (C === "permanent")
    return /* @__PURE__ */ y(ys, b({
      className: J(I.root, I.docked, d),
      ownerState: N,
      ref: o
    }, $, {
      children: A
    }));
  const D = /* @__PURE__ */ y(S, b({
    in: p,
    direction: ll[w],
    timeout: v,
    appear: m.current
  }, O, {
    children: A
  }));
  return C === "persistent" ? /* @__PURE__ */ y(ys, b({
    className: J(I.root, I.docked, d),
    ownerState: N,
    ref: o
  }, $, {
    children: D
  })) : /* @__PURE__ */ y(fh, b({
    BackdropProps: b({}, c, T, {
      transitionDuration: v
    }),
    className: J(I.root, I.modal, d),
    open: p,
    ownerState: N,
    onClose: g,
    hideBackdrop: f,
    ref: o
  }, $, x, {
    children: D
  }));
});
process.env.NODE_ENV !== "production" && (gh.propTypes = {
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
  elevation: _t,
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
const yh = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], vh = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, i = ue({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, cm, t);
  return b({}, t, i);
}, xh = W(nr, {
  shouldForwardProp: (e) => We(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...er(e, t), !o.disableUnderline && t.underline];
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
    [`&.${Ft.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
    },
    [`&.${Ft.disabled}`]: {
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
    [`&.${Ft.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Ft.error}`]: {
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
    [`&:hover:not(.${Ft.disabled}, .${Ft.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${Ft.disabled}:before`]: {
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
}), Eh = W(or, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: tr
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
})), ir = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, s, a;
  const l = pe({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: c = {},
    componentsProps: u,
    fullWidth: d = !1,
    // declare here to prevent spreading to DOM
    inputComponent: h = "input",
    multiline: f = !1,
    slotProps: T,
    slots: g = {},
    type: p = "text"
  } = l, R = q(l, yh), O = b({}, l, {
    fullWidth: d,
    inputComponent: h,
    multiline: f,
    type: p
  }), S = vh(l), v = {
    root: {
      ownerState: O
    },
    input: {
      ownerState: O
    }
  }, C = T ?? u ? Ue(v, T ?? u) : v, x = (r = (i = g.root) != null ? i : c.Root) != null ? r : xh, $ = (s = (a = g.input) != null ? a : c.Input) != null ? s : Eh;
  return /* @__PURE__ */ y(rr, b({
    slots: {
      root: x,
      input: $
    },
    componentsProps: C,
    fullWidth: d,
    inputComponent: h,
    multiline: f,
    ref: o,
    type: p
  }, R, {
    classes: S
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
ir.muiName = "Input";
function Th(e) {
  return ce("MuiFormControl", e);
}
ae("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Ch = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], Oh = (e) => {
  const {
    classes: t,
    margin: o,
    fullWidth: r
  } = e, i = {
    root: ["root", o !== "none" && `margin${X(o)}`, r && "fullWidth"]
  };
  return ue(i, Th, t);
}, Rh = W("div", {
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
})), cl = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    fullWidth: h = !1,
    hiddenLabel: f = !1,
    margin: T = "none",
    required: g = !1,
    size: p = "medium",
    variant: R = "outlined"
  } = r, O = q(r, Ch), S = b({}, r, {
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: h,
    hiddenLabel: f,
    margin: T,
    required: g,
    size: p,
    variant: R
  }), v = Oh(S), [C, x] = E.useState(() => {
    let D = !1;
    return i && E.Children.forEach(i, (L) => {
      if (!un(L, ["Input", "Select"]))
        return;
      const F = un(L, ["Select"]) ? L.props.input : L;
      F && nm(F.props) && (D = !0);
    }), D;
  }), [$, m] = E.useState(() => {
    let D = !1;
    return i && E.Children.forEach(i, (L) => {
      un(L, ["Input", "Select"]) && (No(L.props, !0) || No(L.props.inputProps, !0)) && (D = !0);
    }), D;
  }), [w, P] = E.useState(!1);
  c && w && P(!1);
  const N = d !== void 0 && !c ? d : w;
  let I;
  if (process.env.NODE_ENV !== "production") {
    const D = E.useRef(!1);
    I = () => (D.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), D.current = !0, () => {
      D.current = !1;
    });
  }
  const A = E.useMemo(() => ({
    adornedStart: C,
    setAdornedStart: x,
    color: a,
    disabled: c,
    error: u,
    filled: $,
    focused: N,
    fullWidth: h,
    hiddenLabel: f,
    size: p,
    onBlur: () => {
      P(!1);
    },
    onEmpty: () => {
      m(!1);
    },
    onFilled: () => {
      m(!0);
    },
    onFocus: () => {
      P(!0);
    },
    registerEffect: I,
    required: g,
    variant: R
  }), [C, a, c, u, $, N, h, f, I, g, p, R]);
  return /* @__PURE__ */ y(Qo.Provider, {
    value: A,
    children: /* @__PURE__ */ y(Rh, b({
      as: l,
      ownerState: S,
      className: J(v.root, s),
      ref: o
    }, O, {
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (cl.propTypes = {
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
const ul = Xd({
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
process.env.NODE_ENV !== "production" && (ul.propTypes = {
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
function Sh(e) {
  return ce("MuiFormControlLabel", e);
}
const Ln = ae("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), Ph = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"], wh = (e) => {
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
  return ue(a, Sh, t);
}, $h = W("label", {
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
})), Nh = W("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Ln.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), dl = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    label: h,
    labelPlacement: f = "end",
    required: T,
    slotProps: g = {}
  } = s, p = q(s, Ph), R = wt(), O = (r = u ?? c.props.disabled) != null ? r : R == null ? void 0 : R.disabled, S = T ?? c.props.required, v = {
    disabled: O,
    required: S
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((P) => {
    typeof c.props[P] > "u" && typeof s[P] < "u" && (v[P] = s[P]);
  });
  const C = Mt({
    props: s,
    muiFormControl: R,
    states: ["error"]
  }), x = b({}, s, {
    disabled: O,
    labelPlacement: f,
    required: S,
    error: C.error
  }), $ = wh(x), m = (i = g.typography) != null ? i : l.typography;
  let w = h;
  return w != null && w.type !== qe && !d && (w = /* @__PURE__ */ y(qe, b({
    component: "span"
  }, m, {
    className: J($.label, m == null ? void 0 : m.className),
    children: w
  }))), /* @__PURE__ */ se($h, b({
    className: J($.root, a),
    ownerState: x,
    ref: o
  }, p, {
    children: [/* @__PURE__ */ E.cloneElement(c, v), S ? /* @__PURE__ */ se(ul, {
      display: "block",
      children: [w, /* @__PURE__ */ se(Nh, {
        ownerState: x,
        "aria-hidden": !0,
        className: $.asterisk,
        children: [" ", "*"]
      })]
    }) : w]
  }));
});
process.env.NODE_ENV !== "production" && (dl.propTypes = {
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
function _h(e) {
  return ce("MuiFormGroup", e);
}
ae("MuiFormGroup", ["root", "row", "error"]);
const Ih = ["className", "row"], kh = (e) => {
  const {
    classes: t,
    row: o,
    error: r
  } = e;
  return ue({
    root: ["root", o && "row", r && "error"]
  }, _h, t);
}, Mh = W("div", {
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
})), pl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiFormGroup"
  }), {
    className: i,
    row: s = !1
  } = r, a = q(r, Ih), l = wt(), c = Mt({
    props: r,
    muiFormControl: l,
    states: ["error"]
  }), u = b({}, r, {
    row: s,
    error: c.error
  }), d = kh(u);
  return /* @__PURE__ */ y(Mh, b({
    className: J(d.root, i),
    ownerState: u,
    ref: o
  }, a));
});
process.env.NODE_ENV !== "production" && (pl.propTypes = {
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
function Ah(e) {
  return ce("MuiFormHelperText", e);
}
const vs = ae("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var xs;
const Dh = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], Fh = (e) => {
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
  return ue(u, Ah, t);
}, jh = W("p", {
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
  [`&.${vs.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${vs.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), fl = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: s,
    component: a = "p"
  } = r, l = q(r, Dh), c = wt(), u = Mt({
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
  }), h = Fh(d);
  return /* @__PURE__ */ y(jh, b({
    as: a,
    ownerState: d,
    className: J(h.root, s),
    ref: o
  }, l, {
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      xs || (xs = /* @__PURE__ */ y("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  }));
});
process.env.NODE_ENV !== "production" && (fl.propTypes = {
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
function Lh(e) {
  return ce("MuiFormLabel", e);
}
const Vn = ae("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Bh = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], zh = (e) => {
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
  return ue(c, Lh, t);
}, Vh = W("label", {
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
  [`&.${Vn.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Vn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Vn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Wh = W("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Vn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), ml = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: s,
    component: a = "label"
  } = r, l = q(r, Bh), c = wt(), u = Mt({
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
  }), h = zh(d);
  return /* @__PURE__ */ se(Vh, b({
    as: a,
    ownerState: d,
    className: J(h.root, s),
    ref: o
  }, l, {
    children: [i, u.required && /* @__PURE__ */ se(Wh, {
      ownerState: d,
      "aria-hidden": !0,
      className: h.asterisk,
      children: [" ", "*"]
    })]
  }));
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
const Lr = /* @__PURE__ */ E.createContext();
process.env.NODE_ENV !== "production" && (Lr.displayName = "GridContext");
function Uh(e) {
  return ce("MuiGrid", e);
}
const qh = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Hh = ["column-reverse", "column", "row-reverse", "row"], Gh = ["nowrap", "wrap-reverse", "wrap"], $n = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], Gn = ae("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...qh.map((e) => `spacing-xs-${e}`),
  // direction values
  ...Hh.map((e) => `direction-xs-${e}`),
  // wrap values
  ...Gh.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...$n.map((e) => `grid-xs-${e}`),
  ...$n.map((e) => `grid-sm-${e}`),
  ...$n.map((e) => `grid-md-${e}`),
  ...$n.map((e) => `grid-lg-${e}`),
  ...$n.map((e) => `grid-xl-${e}`)
]), Yh = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function dn(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function Kh({
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
      const a = zt({
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
          const h = `calc(${c} + ${dn(d)})`;
          u = {
            flexBasis: h,
            maxWidth: h
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
function Xh({
  theme: e,
  ownerState: t
}) {
  const o = zt({
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
function hl({
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
function Jh({
  theme: e,
  ownerState: t
}) {
  const {
    container: o,
    rowSpacing: r
  } = t;
  let i = {};
  if (o && r !== 0) {
    const s = zt({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof s == "object" && (a = hl({
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
function Zh({
  theme: e,
  ownerState: t
}) {
  const {
    container: o,
    columnSpacing: r
  } = t;
  let i = {};
  if (o && r !== 0) {
    const s = zt({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof s == "object" && (a = hl({
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
function Qh(e, t, o = {}) {
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
const eb = W("div", {
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
    r && (d = Qh(a, u, t));
    const h = [];
    return u.forEach((f) => {
      const T = o[f];
      T && h.push(t[`grid-${f}-${String(T)}`]);
    }), [t.root, r && t.container, s && t.item, c && t.zeroMinWidth, ...d, i !== "row" && t[`direction-xs-${String(i)}`], l !== "wrap" && t[`wrap-xs-${String(l)}`], ...h];
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
}), Xh, Jh, Zh, Kh);
function tb(e, t) {
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
const nb = (e) => {
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
  o && (u = tb(s, c));
  const d = [];
  c.forEach((f) => {
    const T = e[f];
    T && d.push(`grid-${f}-${String(T)}`);
  });
  const h = {
    root: ["root", o && "container", i && "item", l && "zeroMinWidth", ...u, r !== "row" && `direction-xs-${String(r)}`, a !== "wrap" && `wrap-xs-${String(a)}`, ...d]
  };
  return ue(h, Uh, t);
}, Re = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: i
  } = lt(), s = Zn(r), {
    className: a,
    columns: l,
    columnSpacing: c,
    component: u = "div",
    container: d = !1,
    direction: h = "row",
    item: f = !1,
    rowSpacing: T,
    spacing: g = 0,
    wrap: p = "wrap",
    zeroMinWidth: R = !1
  } = s, O = q(s, Yh), S = T || g, v = c || g, C = E.useContext(Lr), x = d ? l || 12 : C, $ = {}, m = b({}, O);
  i.keys.forEach((N) => {
    O[N] != null && ($[N] = O[N], delete m[N]);
  });
  const w = b({}, s, {
    columns: x,
    container: d,
    direction: h,
    item: f,
    rowSpacing: S,
    columnSpacing: v,
    wrap: p,
    zeroMinWidth: R,
    spacing: g
  }, $, {
    breakpoints: i.keys
  }), P = nb(w);
  return /* @__PURE__ */ y(Lr.Provider, {
    value: x,
    children: /* @__PURE__ */ y(eb, b({
      ownerState: w,
      className: J(P.root, a),
      as: u,
      ref: o
    }, m))
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
  const e = Na("Grid", Re);
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
const ob = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Br(e) {
  return `scale(${e}, ${e ** 2})`;
}
const rb = {
  entering: {
    opacity: 1,
    transform: Br(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Rr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), sr = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: s,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: h,
    onExited: f,
    onExiting: T,
    style: g,
    timeout: p = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: R = ut
  } = t, O = q(t, ob), S = Xo(), v = E.useRef(), C = lt(), x = E.useRef(null), $ = Ie(x, qt(s), o), m = (F) => (j) => {
    if (F) {
      const z = x.current;
      j === void 0 ? F(z) : F(z, j);
    }
  }, w = m(d), P = m((F, j) => {
    ci(F);
    const {
      duration: z,
      delay: M,
      easing: G
    } = It({
      style: g,
      timeout: p,
      easing: a
    }, {
      mode: "enter"
    });
    let k;
    p === "auto" ? (k = C.transitions.getAutoHeightDuration(F.clientHeight), v.current = k) : k = z, F.style.transition = [C.transitions.create("opacity", {
      duration: k,
      delay: M
    }), C.transitions.create("transform", {
      duration: Rr ? k : k * 0.666,
      delay: M,
      easing: G
    })].join(","), c && c(F, j);
  }), N = m(u), I = m(T), A = m((F) => {
    const {
      duration: j,
      delay: z,
      easing: M
    } = It({
      style: g,
      timeout: p,
      easing: a
    }, {
      mode: "exit"
    });
    let G;
    p === "auto" ? (G = C.transitions.getAutoHeightDuration(F.clientHeight), v.current = G) : G = j, F.style.transition = [C.transitions.create("opacity", {
      duration: G,
      delay: z
    }), C.transitions.create("transform", {
      duration: Rr ? G : G * 0.666,
      delay: Rr ? z : z || G * 0.333,
      easing: M
    })].join(","), F.style.opacity = 0, F.style.transform = Br(0.75), h && h(F);
  }), D = m(f);
  return /* @__PURE__ */ y(R, b({
    appear: i,
    in: l,
    nodeRef: x,
    onEnter: P,
    onEntered: N,
    onEntering: w,
    onExit: A,
    onExited: D,
    onExiting: I,
    addEndListener: (F) => {
      p === "auto" && S.start(v.current || 0, F), r && r(x.current, F);
    },
    timeout: p === "auto" ? null : p
  }, O, {
    children: (F, j) => /* @__PURE__ */ E.cloneElement(s, b({
      style: b({
        opacity: 0,
        transform: Br(0.75),
        visibility: F === "exited" && !l ? "hidden" : void 0
      }, rb[F], g, s.props.style),
      ref: $
    }, j))
  }));
});
process.env.NODE_ENV !== "production" && (sr.propTypes = {
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
  children: Ut.isRequired,
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
sr.muiSupportAuto = !0;
const ib = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], sb = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, i = ue({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, am, t);
  return b({}, t, i);
}, ab = W(nr, {
  shouldForwardProp: (e) => We(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...er(e, t), !o.disableUnderline && t.underline];
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
    [`&.${wn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${wn.error}`]: {
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
    [`&:hover:not(.${wn.disabled}, .${wn.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${wn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), lb = W(or, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: tr
})({}), ar = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, s, a;
  const l = pe({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: h = !1,
    inputComponent: f = "input",
    multiline: T = !1,
    slotProps: g,
    slots: p = {},
    type: R = "text"
  } = l, O = q(l, ib), S = sb(l), C = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, x = g ?? d ? Ue(g ?? d, C) : C, $ = (r = (i = p.root) != null ? i : u.Root) != null ? r : ab, m = (s = (a = p.input) != null ? a : u.Input) != null ? s : lb;
  return /* @__PURE__ */ y(rr, b({
    slots: {
      root: $,
      input: m
    },
    slotProps: x,
    fullWidth: h,
    inputComponent: f,
    multiline: T,
    ref: o,
    type: R
  }, O, {
    classes: S
  }));
});
process.env.NODE_ENV !== "production" && (ar.propTypes = {
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
ar.muiName = "Input";
function cb(e) {
  return ce("MuiInputLabel", e);
}
ae("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const ub = ["disableAnimation", "margin", "shrink", "variant", "className"], db = (e) => {
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
  }, u = ue(c, cb, t);
  return b({}, t, u);
}, pb = W(ml, {
  shouldForwardProp: (e) => We(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Vn.asterisk}`]: t.asterisk
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
}))), fi = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    shrink: s,
    className: a
  } = r, l = q(r, ub), c = wt();
  let u = s;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = Mt({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required", "focused"]
  }), h = b({}, r, {
    disableAnimation: i,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }), f = db(h);
  return /* @__PURE__ */ y(pb, b({
    "data-shrink": u,
    ownerState: h,
    ref: o,
    className: J(f.root, a)
  }, l, {
    classes: f
  }));
});
process.env.NODE_ENV !== "production" && (fi.propTypes = {
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
const vt = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (vt.displayName = "ListContext");
function fb(e) {
  return ce("MuiList", e);
}
ae("MuiList", ["root", "padding", "dense", "subheader"]);
const mb = ["children", "className", "component", "dense", "disablePadding", "subheader"], hb = (e) => {
  const {
    classes: t,
    disablePadding: o,
    dense: r,
    subheader: i
  } = e;
  return ue({
    root: ["root", !o && "padding", r && "dense", i && "subheader"]
  }, fb, t);
}, bb = W("ul", {
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
})), bl = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
  } = r, d = q(r, mb), h = E.useMemo(() => ({
    dense: l
  }), [l]), f = b({}, r, {
    component: a,
    dense: l,
    disablePadding: c
  }), T = hb(f);
  return /* @__PURE__ */ y(vt.Provider, {
    value: h,
    children: /* @__PURE__ */ se(bb, b({
      as: a,
      className: J(T.root, s),
      ref: o,
      ownerState: f
    }, d, {
      children: [u, i]
    }))
  });
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
function gb(e) {
  return ce("MuiListItem", e);
}
const on = ae("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]);
function yb(e) {
  return ce("MuiListItemButton", e);
}
const rn = ae("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), vb = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"], xb = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.alignItems === "flex-start" && t.alignItemsFlexStart, o.divider && t.divider, !o.disableGutters && t.gutters];
}, Eb = (e) => {
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
  }, yb, o);
  return b({}, o, u);
}, Tb = W(Pt, {
  shouldForwardProp: (e) => We(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: xb
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
  [`&.${rn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${rn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${rn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${rn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${rn.disabled}`]: {
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
})), Cb = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    focusVisibleClassName: h,
    selected: f = !1,
    className: T
  } = r, g = q(r, vb), p = E.useContext(vt), R = E.useMemo(() => ({
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
  }), v = Eb(S), C = Ie(O, o);
  return /* @__PURE__ */ y(vt.Provider, {
    value: R,
    children: /* @__PURE__ */ y(Tb, b({
      ref: C,
      href: g.href || g.to,
      component: (g.href || g.to) && a === "div" ? "button" : a,
      focusVisibleClassName: J(v.focusVisible, h),
      ownerState: S,
      className: J(v.root, T)
    }, g, {
      classes: v,
      children: l
    }))
  });
});
process.env.NODE_ENV !== "production" && (Cb.propTypes = {
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
function Ob(e) {
  return ce("MuiListItemSecondaryAction", e);
}
ae("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const Rb = ["className"], Sb = (e) => {
  const {
    disableGutters: t,
    classes: o
  } = e;
  return ue({
    root: ["root", t && "disableGutters"]
  }, Ob, o);
}, Pb = W("div", {
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
})), mi = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: i
  } = r, s = q(r, Rb), a = E.useContext(vt), l = b({}, r, {
    disableGutters: a.disableGutters
  }), c = Sb(l);
  return /* @__PURE__ */ y(Pb, b({
    className: J(c.root, i),
    ownerState: l,
    ref: o
  }, s));
});
process.env.NODE_ENV !== "production" && (mi.propTypes = {
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
mi.muiName = "ListItemSecondaryAction";
const wb = ["className"], $b = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], Nb = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.alignItems === "flex-start" && t.alignItemsFlexStart, o.divider && t.divider, !o.disableGutters && t.gutters, !o.disablePadding && t.padding, o.button && t.button, o.hasSecondaryAction && t.secondaryAction];
}, _b = (e) => {
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
  }, gb, r);
}, Ib = W("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: Nb
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
  [`& > .${rn.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${on.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${on.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${on.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${on.disabled}`]: {
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
  [`&.${on.selected}:hover`]: {
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
})), kb = W("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), Mb = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    componentsProps: h = {},
    ContainerComponent: f = "li",
    ContainerProps: {
      className: T
    } = {},
    dense: g = !1,
    disabled: p = !1,
    disableGutters: R = !1,
    disablePadding: O = !1,
    divider: S = !1,
    focusVisibleClassName: v,
    secondaryAction: C,
    selected: x = !1,
    slotProps: $ = {},
    slots: m = {}
  } = r, w = q(r.ContainerProps, wb), P = q(r, $b), N = E.useContext(vt), I = E.useMemo(() => ({
    dense: g || N.dense || !1,
    alignItems: i,
    disableGutters: R
  }), [i, N.dense, g, R]), A = E.useRef(null);
  it(() => {
    s && (A.current ? A.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [s]);
  const D = E.Children.toArray(l), L = D.length && un(D[D.length - 1], ["ListItemSecondaryAction"]), F = b({}, r, {
    alignItems: i,
    autoFocus: s,
    button: a,
    dense: I.dense,
    disabled: p,
    disableGutters: R,
    disablePadding: O,
    divider: S,
    hasSecondaryAction: L,
    selected: x
  }), j = _b(F), z = Ie(A, o), M = m.root || d.Root || Ib, G = $.root || h.root || {}, k = b({
    className: J(j.root, G.className, c),
    disabled: p
  }, P);
  let V = u || "li";
  return a && (k.component = u || "div", k.focusVisibleClassName = J(on.focusVisible, v), V = Pt), L ? (V = !k.component && !u ? "div" : V, f === "li" && (V === "li" ? V = "div" : k.component === "li" && (k.component = "div")), /* @__PURE__ */ y(vt.Provider, {
    value: I,
    children: /* @__PURE__ */ se(kb, b({
      as: f,
      className: J(j.container, T),
      ref: z,
      ownerState: F
    }, w, {
      children: [/* @__PURE__ */ y(M, b({}, G, !yn(M) && {
        as: V,
        ownerState: b({}, F, G.ownerState)
      }, k, {
        children: D
      })), D.pop()]
    }))
  })) : /* @__PURE__ */ y(vt.Provider, {
    value: I,
    children: /* @__PURE__ */ se(M, b({}, G, {
      as: V,
      ref: z
    }, !yn(M) && {
      ownerState: b({}, F, G.ownerState)
    }, k, {
      children: [D, C && /* @__PURE__ */ y(mi, {
        children: C
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Mb.propTypes = {
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
  children: St(n.node, (e) => {
    const t = E.Children.toArray(e.children);
    let o = -1;
    for (let r = t.length - 1; r >= 0; r -= 1) {
      const i = t[r];
      if (un(i, ["ListItemSecondaryAction"])) {
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
  ContainerComponent: Qn,
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
const Es = ae("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Ts = ae("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Ab = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Sr(e, t, o) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild;
}
function Cs(e, t, o) {
  return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild;
}
function gl(e, t) {
  if (t === void 0)
    return !0;
  let o = e.innerText;
  return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : t.repeating ? o[0] === t.keys[0] : o.indexOf(t.keys.join("")) === 0;
}
function Nn(e, t, o, r, i, s) {
  let a = !1, l = i(e, t, t ? o : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !gl(l, s) || c)
      l = i(e, l, o);
    else
      return l.focus(), !0;
  }
  return !1;
}
const yl = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    variant: h = "selectedMenu"
  } = t, f = q(t, Ab), T = E.useRef(null), g = E.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  it(() => {
    i && T.current.focus();
  }, [i]), E.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (v, {
      direction: C
    }) => {
      const x = !T.current.style.width;
      if (v.clientHeight < T.current.clientHeight && x) {
        const $ = `${Ia(Be(v))}px`;
        T.current.style[C === "rtl" ? "paddingLeft" : "paddingRight"] = $, T.current.style.width = `calc(100% + ${$})`;
      }
      return T.current;
    }
  }), []);
  const p = (v) => {
    const C = T.current, x = v.key, $ = Be(C).activeElement;
    if (x === "ArrowDown")
      v.preventDefault(), Nn(C, $, u, c, Sr);
    else if (x === "ArrowUp")
      v.preventDefault(), Nn(C, $, u, c, Cs);
    else if (x === "Home")
      v.preventDefault(), Nn(C, null, u, c, Sr);
    else if (x === "End")
      v.preventDefault(), Nn(C, null, u, c, Cs);
    else if (x.length === 1) {
      const m = g.current, w = x.toLowerCase(), P = performance.now();
      m.keys.length > 0 && (P - m.lastTime > 500 ? (m.keys = [], m.repeating = !0, m.previousKeyMatched = !0) : m.repeating && w !== m.keys[0] && (m.repeating = !1)), m.lastTime = P, m.keys.push(w);
      const N = $ && !m.repeating && gl($, m);
      m.previousKeyMatched && (N || Nn(C, $, !1, c, Sr, m)) ? v.preventDefault() : m.previousKeyMatched = !1;
    }
    d && d(v);
  }, R = Ie(T, o);
  let O = -1;
  E.Children.forEach(a, (v, C) => {
    if (!/* @__PURE__ */ E.isValidElement(v)) {
      O === C && (O += 1, O >= a.length && (O = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && hn.isFragment(v) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), v.props.disabled || (h === "selectedMenu" && v.props.selected || O === -1) && (O = C), O === C && (v.props.disabled || v.props.muiSkipListHighlight || v.type.muiSkipListHighlight) && (O += 1, O >= a.length && (O = -1));
  });
  const S = E.Children.map(a, (v, C) => {
    if (C === O) {
      const x = {};
      return s && (x.autoFocus = !0), v.props.tabIndex === void 0 && h === "selectedMenu" && (x.tabIndex = 0), /* @__PURE__ */ E.cloneElement(v, x);
    }
    return v;
  });
  return /* @__PURE__ */ y(bl, b({
    role: "menu",
    ref: R,
    className: l,
    onKeyDown: p,
    tabIndex: i ? 0 : -1
  }, f, {
    children: S
  }));
});
process.env.NODE_ENV !== "production" && (yl.propTypes = {
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
function Db(e) {
  return ce("MuiPopover", e);
}
ae("MuiPopover", ["root", "paper"]);
const Fb = ["onEntering"], jb = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], Lb = ["slotProps"];
function Os(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o;
}
function Rs(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o;
}
function Ss(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function vo(e) {
  return typeof e == "function" ? e() : e;
}
const Bb = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    paper: ["paper"]
  }, Db, t);
}, zb = W(pi, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), vl = W(Ht, {
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
}), xl = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    anchorReference: h = "anchorEl",
    children: f,
    className: T,
    container: g,
    elevation: p = 8,
    marginThreshold: R = 16,
    open: O,
    PaperProps: S = {},
    slots: v,
    slotProps: C,
    transformOrigin: x = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: $ = sr,
    transitionDuration: m = "auto",
    TransitionProps: {
      onEntering: w
    } = {},
    disableScrollLock: P = !1
  } = a, N = q(a.TransitionProps, Fb), I = q(a, jb), A = (r = C == null ? void 0 : C.paper) != null ? r : S, D = E.useRef(), L = Ie(D, A.ref), F = b({}, a, {
    anchorOrigin: u,
    anchorReference: h,
    elevation: p,
    marginThreshold: R,
    externalPaperSlotProps: A,
    transformOrigin: x,
    TransitionComponent: $,
    transitionDuration: m,
    TransitionProps: N
  }), j = Bb(F), z = E.useCallback(() => {
    if (h === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const re = vo(c), oe = re && re.nodeType === 1 ? re : Be(D.current).body, de = oe.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const De = oe.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && De.top === 0 && De.left === 0 && De.right === 0 && De.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: de.top + Os(de, u.vertical),
      left: de.left + Rs(de, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, h]), M = E.useCallback((re) => ({
    vertical: Os(re, x.vertical),
    horizontal: Rs(re, x.horizontal)
  }), [x.horizontal, x.vertical]), G = E.useCallback((re) => {
    const oe = {
      width: re.offsetWidth,
      height: re.offsetHeight
    }, de = M(oe);
    if (h === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ss(de)
      };
    const De = z();
    let Fe = De.top - de.vertical, He = De.left - de.horizontal;
    const Xe = Fe + oe.height, Qe = He + oe.width, we = xt(vo(c)), et = we.innerHeight - R, Ge = we.innerWidth - R;
    if (R !== null && Fe < R) {
      const Se = Fe - R;
      Fe -= Se, de.vertical += Se;
    } else if (R !== null && Xe > et) {
      const Se = Xe - et;
      Fe -= Se, de.vertical += Se;
    }
    if (process.env.NODE_ENV !== "production" && oe.height > et && oe.height && et && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${oe.height - et}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), R !== null && He < R) {
      const Se = He - R;
      He -= Se, de.horizontal += Se;
    } else if (Qe > Ge) {
      const Se = Qe - Ge;
      He -= Se, de.horizontal += Se;
    }
    return {
      top: `${Math.round(Fe)}px`,
      left: `${Math.round(He)}px`,
      transformOrigin: Ss(de)
    };
  }, [c, h, z, M, R]), [k, V] = E.useState(O), ee = E.useCallback(() => {
    const re = D.current;
    if (!re)
      return;
    const oe = G(re);
    oe.top !== null && (re.style.top = oe.top), oe.left !== null && (re.style.left = oe.left), re.style.transformOrigin = oe.transformOrigin, V(!0);
  }, [G]);
  E.useEffect(() => (P && window.addEventListener("scroll", ee), () => window.removeEventListener("scroll", ee)), [c, P, ee]);
  const Z = (re, oe) => {
    w && w(re, oe), ee();
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
    const re = Yo(() => {
      ee();
    }), oe = xt(c);
    return oe.addEventListener("resize", re), () => {
      re.clear(), oe.removeEventListener("resize", re);
    };
  }, [c, O, ee]);
  let Q = m;
  m === "auto" && !$.muiSupportAuto && (Q = void 0);
  const B = g || (c ? Be(vo(c)).body : void 0), Y = (i = v == null ? void 0 : v.root) != null ? i : zb, H = (s = v == null ? void 0 : v.paper) != null ? s : vl, K = Wt({
    elementType: H,
    externalSlotProps: b({}, A, {
      style: k ? A.style : b({}, A.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: p,
      ref: L
    },
    ownerState: F,
    className: J(j.paper, A == null ? void 0 : A.className)
  }), ne = Wt({
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
    ownerState: F,
    className: J(j.root, T)
  }), {
    slotProps: te
  } = ne, _ = q(ne, Lb);
  return /* @__PURE__ */ y(Y, b({}, _, !yn(Y) && {
    slotProps: te,
    disableScrollLock: P
  }, {
    children: /* @__PURE__ */ y($, b({
      appear: !0,
      in: O,
      onEntering: Z,
      onExited: U,
      timeout: Q
    }, N, {
      children: /* @__PURE__ */ y(H, b({}, K, {
        children: f
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (xl.propTypes = {
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
  anchorEl: St(n.oneOfType([bn, n.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = vo(e.anchorEl);
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
  container: n.oneOfType([bn, n.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: _t,
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
    component: Qn
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
function Vb(e) {
  return ce("MuiMenu", e);
}
ae("MuiMenu", ["root", "paper", "list"]);
const Wb = ["onEntering"], Ub = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], qb = {
  vertical: "top",
  horizontal: "right"
}, Hb = {
  vertical: "top",
  horizontal: "left"
}, Gb = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Vb, t);
}, Yb = W(xl, {
  shouldForwardProp: (e) => We(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Kb = W(vl, {
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
}), Xb = W(yl, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), lr = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    onClose: h,
    open: f,
    PaperProps: T = {},
    PopoverClasses: g,
    transitionDuration: p = "auto",
    TransitionProps: {
      onEntering: R
    } = {},
    variant: O = "selectedMenu",
    slots: S = {},
    slotProps: v = {}
  } = s, C = q(s.TransitionProps, Wb), x = q(s, Ub), $ = oi(), m = b({}, s, {
    autoFocus: a,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: R,
    PaperProps: T,
    transitionDuration: p,
    TransitionProps: C,
    variant: O
  }), w = Gb(m), P = a && !u && f, N = E.useRef(null), I = (M, G) => {
    N.current && N.current.adjustStyleForScrollbar(M, {
      direction: $ ? "rtl" : "ltr"
    }), R && R(M, G);
  }, A = (M) => {
    M.key === "Tab" && (M.preventDefault(), h && h(M, "tabKeyDown"));
  };
  let D = -1;
  E.Children.map(l, (M, G) => {
    /* @__PURE__ */ E.isValidElement(M) && (process.env.NODE_ENV !== "production" && hn.isFragment(M) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), M.props.disabled || (O === "selectedMenu" && M.props.selected || D === -1) && (D = G));
  });
  const L = (r = S.paper) != null ? r : Kb, F = (i = v.paper) != null ? i : T, j = Wt({
    elementType: S.root,
    externalSlotProps: v.root,
    ownerState: m,
    className: [w.root, c]
  }), z = Wt({
    elementType: L,
    externalSlotProps: F,
    ownerState: m,
    className: w.paper
  });
  return /* @__PURE__ */ y(Yb, b({
    onClose: h,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: $ ? "right" : "left"
    },
    transformOrigin: $ ? qb : Hb,
    slots: {
      paper: L,
      root: S.root
    },
    slotProps: {
      root: j,
      paper: z
    },
    open: f,
    ref: o,
    transitionDuration: p,
    TransitionProps: b({
      onEntering: I
    }, C),
    ownerState: m
  }, x, {
    classes: g,
    children: /* @__PURE__ */ y(Xb, b({
      onKeyDown: A,
      actions: N,
      autoFocus: a && (D === -1 || u),
      autoFocusItem: P,
      variant: O
    }, d, {
      className: J(w.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (lr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: n.oneOfType([bn, n.func]),
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
function Jb(e) {
  return ce("MuiMenuItem", e);
}
const _n = ae("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Zb = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], Qb = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.divider && t.divider, !o.disableGutters && t.gutters];
}, eg = (e) => {
  const {
    disabled: t,
    dense: o,
    divider: r,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, c = ue({
    root: ["root", o && "dense", t && "disabled", !i && "gutters", r && "divider", s && "selected"]
  }, Jb, a);
  return b({}, a, c);
}, tg = W(Pt, {
  shouldForwardProp: (e) => We(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Qb
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
  [`&.${_n.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${_n.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${_n.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : me.alpha(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${_n.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${_n.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${gs.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${gs.inset}`]: {
    marginLeft: 52
  },
  [`& .${Ts.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Ts.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Es.root}`]: {
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
  [`& .${Es.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), El = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    tabIndex: h,
    className: f
  } = r, T = q(r, Zb), g = E.useContext(vt), p = E.useMemo(() => ({
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
  }), S = eg(r), v = Ie(R, o);
  let C;
  return r.disabled || (C = h !== void 0 ? h : -1), /* @__PURE__ */ y(vt.Provider, {
    value: p,
    children: /* @__PURE__ */ y(tg, b({
      ref: v,
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
process.env.NODE_ENV !== "production" && (El.propTypes = {
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
function ng(e) {
  return ce("MuiNativeSelect", e);
}
const hi = ae("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), og = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], rg = (e) => {
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
  return ue(l, ng, t);
}, Tl = ({
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
  [`&.${hi.disabled}`]: {
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
}), ig = W("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: We,
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.select, t[o.variant], o.error && t.error, {
      [`&.${hi.multiple}`]: t.multiple
    }];
  }
})(Tl), Cl = ({
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
  [`&.${hi.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), sg = W("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${X(o.variant)}`], o.open && t.iconOpen];
  }
})(Cl), Ol = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const {
    className: r,
    disabled: i,
    error: s,
    IconComponent: a,
    inputRef: l,
    variant: c = "standard"
  } = t, u = q(t, og), d = b({}, t, {
    disabled: i,
    variant: c,
    error: s
  }), h = rg(d);
  return /* @__PURE__ */ se(E.Fragment, {
    children: [/* @__PURE__ */ y(ig, b({
      ownerState: d,
      className: J(h.select, r),
      disabled: i,
      ref: l || o
    }, u)), t.multiple ? null : /* @__PURE__ */ y(sg, {
      as: a,
      ownerState: d,
      className: h.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ol.propTypes = {
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
var Ps;
const ag = ["children", "classes", "className", "label", "notched"], lg = W("fieldset", {
  shouldForwardProp: We
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
}), cg = W("legend", {
  shouldForwardProp: We
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
function Rl(e) {
  const {
    className: t,
    label: o,
    notched: r
  } = e, i = q(e, ag), s = o != null && o !== "", a = b({}, e, {
    notched: r,
    withLabel: s
  });
  return /* @__PURE__ */ y(lg, b({
    "aria-hidden": !0,
    className: t,
    ownerState: a
  }, i, {
    children: /* @__PURE__ */ y(cg, {
      ownerState: a,
      children: s ? /* @__PURE__ */ y("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ps || (Ps = /* @__PURE__ */ y("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (Rl.propTypes = {
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
const ug = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], dg = (e) => {
  const {
    classes: t
  } = e, r = ue({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, lm, t);
  return b({}, t, r);
}, pg = W(nr, {
  shouldForwardProp: (e) => We(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: er
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return b({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Nt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Nt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : o
      }
    },
    [`&.${Nt.focused} .${Nt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${Nt.error} .${Nt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${Nt.disabled} .${Nt.notchedOutline}`]: {
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
}), fg = W(Rl, {
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
}), mg = W(or, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: tr
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
})), cr = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r, i, s, a, l;
  const c = pe({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: h = "input",
    label: f,
    multiline: T = !1,
    notched: g,
    slots: p = {},
    type: R = "text"
  } = c, O = q(c, ug), S = dg(c), v = wt(), C = Mt({
    props: c,
    muiFormControl: v,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), x = b({}, c, {
    color: C.color || "primary",
    disabled: C.disabled,
    error: C.error,
    focused: C.focused,
    formControl: v,
    fullWidth: d,
    hiddenLabel: C.hiddenLabel,
    multiline: T,
    size: C.size,
    type: R
  }), $ = (r = (i = p.root) != null ? i : u.Root) != null ? r : pg, m = (s = (a = p.input) != null ? a : u.Input) != null ? s : mg;
  return /* @__PURE__ */ y(rr, b({
    slots: {
      root: $,
      input: m
    },
    renderSuffix: (w) => /* @__PURE__ */ y(fg, {
      ownerState: x,
      className: S.notchedOutline,
      label: f != null && f !== "" && C.required ? l || (l = /* @__PURE__ */ se(E.Fragment, {
        children: [f, " ", "*"]
      })) : f,
      notched: typeof g < "u" ? g : !!(w.startAdornment || w.filled || w.focused)
    }),
    fullWidth: d,
    inputComponent: h,
    multiline: T,
    ref: o,
    type: R
  }, O, {
    classes: b({}, S, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (cr.propTypes = {
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
cr.muiName = "Input";
function hg(e) {
  return ce("MuiPagination", e);
}
ae("MuiPagination", ["root", "ul", "outlined", "text"]);
const bg = ["boundaryCount", "componentName", "count", "defaultPage", "disabled", "hideNextButton", "hidePrevButton", "onChange", "page", "showFirstButton", "showLastButton", "siblingCount"];
function gg(e = {}) {
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
    showLastButton: h = !1,
    siblingCount: f = 1
  } = e, T = q(e, bg), [g, p] = gn({
    controlled: u,
    default: i,
    name: o,
    state: "page"
  }), R = (P, N) => {
    u || p(N), c && c(P, N);
  }, O = (P, N) => {
    const I = N - P + 1;
    return Array.from({
      length: I
    }, (A, D) => P + D);
  }, S = O(1, Math.min(t, r)), v = O(Math.max(r - t + 1, t + 1), r), C = Math.max(
    Math.min(
      // Natural start
      g - f,
      // Lower boundary when page is high
      r - t - f * 2 - 1
    ),
    // Greater than startPages
    t + 2
  ), x = Math.min(
    Math.max(
      // Natural end
      g + f,
      // Upper boundary when page is low
      t + f * 2 + 2
    ),
    // Less than endPages
    v.length > 0 ? v[0] - 2 : r - 1
  ), $ = [
    ...d ? ["first"] : [],
    ...l ? [] : ["previous"],
    ...S,
    // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...C > t + 2 ? ["start-ellipsis"] : t + 1 < r - t ? [t + 1] : [],
    // Sibling pages
    ...O(C, x),
    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...x < r - t - 1 ? ["end-ellipsis"] : r - t > t ? [r - t] : [],
    ...v,
    ...a ? [] : ["next"],
    ...h ? ["last"] : []
  ], m = (P) => {
    switch (P) {
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
  }, w = $.map((P) => typeof P == "number" ? {
    onClick: (N) => {
      R(N, P);
    },
    type: "page",
    page: P,
    selected: P === g,
    disabled: s,
    "aria-current": P === g ? "true" : void 0
  } : {
    onClick: (N) => {
      R(N, m(P));
    },
    type: P,
    page: m(P),
    selected: !1,
    disabled: s || P.indexOf("ellipsis") === -1 && (P === "next" || P === "last" ? g >= r : g <= 1)
  });
  return b({
    items: w
  }, T);
}
function yg(e) {
  return ce("MuiPaginationItem", e);
}
const nt = ae("MuiPaginationItem", ["root", "page", "sizeSmall", "sizeLarge", "text", "textPrimary", "textSecondary", "outlined", "outlinedPrimary", "outlinedSecondary", "rounded", "ellipsis", "firstLast", "previousNext", "focusVisible", "disabled", "selected", "icon", "colorPrimary", "colorSecondary"]), ws = ct(/* @__PURE__ */ y("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), "FirstPage"), $s = ct(/* @__PURE__ */ y("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), "LastPage"), Ns = ct(/* @__PURE__ */ y("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), "NavigateBefore"), _s = ct(/* @__PURE__ */ y("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "NavigateNext"), vg = ["className", "color", "component", "components", "disabled", "page", "selected", "shape", "size", "slots", "type", "variant"], Sl = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, t[o.variant], t[`size${X(o.size)}`], o.variant === "text" && t[`text${X(o.color)}`], o.variant === "outlined" && t[`outlined${X(o.color)}`], o.shape === "rounded" && t.rounded, o.type === "page" && t.page, (o.type === "start-ellipsis" || o.type === "end-ellipsis") && t.ellipsis, (o.type === "previous" || o.type === "next") && t.previousNext, (o.type === "first" || o.type === "last") && t.firstLast];
}, xg = (e) => {
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
  return ue(u, yg, t);
}, Eg = W("div", {
  name: "MuiPaginationItem",
  slot: "Root",
  overridesResolver: Sl
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
})), Tg = W(Pt, {
  name: "MuiPaginationItem",
  slot: "Root",
  overridesResolver: Sl
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
})), Cg = W("div", {
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
})), Pl = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    shape: h = "circular",
    size: f = "medium",
    slots: T = {},
    type: g = "page",
    variant: p = "text"
  } = r, R = q(r, vg), O = b({}, r, {
    color: s,
    disabled: c,
    selected: d,
    shape: h,
    size: f,
    type: g,
    variant: p
  }), S = oi(), v = xg(O), x = (S ? {
    previous: T.next || l.next || _s,
    next: T.previous || l.previous || Ns,
    last: T.first || l.first || ws,
    first: T.last || l.last || $s
  } : {
    previous: T.previous || l.previous || Ns,
    next: T.next || l.next || _s,
    first: T.first || l.first || ws,
    last: T.last || l.last || $s
  })[g];
  return g === "start-ellipsis" || g === "end-ellipsis" ? /* @__PURE__ */ y(Eg, {
    ref: o,
    ownerState: O,
    className: J(v.root, i),
    children: "…"
  }) : /* @__PURE__ */ se(Tg, b({
    ref: o,
    ownerState: O,
    component: a,
    disabled: c,
    className: J(v.root, i)
  }, R, {
    children: [g === "page" && u, x ? /* @__PURE__ */ y(Cg, {
      as: x,
      ownerState: O,
      className: v.icon
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Pl.propTypes = {
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
const Og = ["boundaryCount", "className", "color", "count", "defaultPage", "disabled", "getItemAriaLabel", "hideNextButton", "hidePrevButton", "onChange", "page", "renderItem", "shape", "showFirstButton", "showLastButton", "siblingCount", "size", "variant"], Rg = (e) => {
  const {
    classes: t,
    variant: o
  } = e;
  return ue({
    root: ["root", o],
    ul: ["ul"]
  }, hg, t);
}, Sg = W("nav", {
  name: "MuiPagination",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant]];
  }
})({}), Pg = W("ul", {
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
function wg(e, t, o) {
  return e === "page" ? `${o ? "" : "Go to "}page ${t}` : `Go to ${e} page`;
}
const wl = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    getItemAriaLabel: d = wg,
    hideNextButton: h = !1,
    hidePrevButton: f = !1,
    renderItem: T = (w) => /* @__PURE__ */ y(Pl, b({}, w)),
    shape: g = "circular",
    showFirstButton: p = !1,
    showLastButton: R = !1,
    siblingCount: O = 1,
    size: S = "medium",
    variant: v = "text"
  } = r, C = q(r, Og), {
    items: x
  } = gg(b({}, r, {
    componentName: "Pagination"
  })), $ = b({}, r, {
    boundaryCount: i,
    color: a,
    count: l,
    defaultPage: c,
    disabled: u,
    getItemAriaLabel: d,
    hideNextButton: h,
    hidePrevButton: f,
    renderItem: T,
    shape: g,
    showFirstButton: p,
    showLastButton: R,
    siblingCount: O,
    size: S,
    variant: v
  }), m = Rg($);
  return /* @__PURE__ */ y(Sg, b({
    "aria-label": "pagination navigation",
    className: J(m.root, s),
    ownerState: $,
    ref: o
  }, C, {
    children: /* @__PURE__ */ y(Pg, {
      className: m.ul,
      ownerState: $,
      children: x.map((w, P) => /* @__PURE__ */ y("li", {
        children: T(b({}, w, {
          color: a,
          "aria-label": d(w.type, w.page, w.selected),
          shape: g,
          size: S,
          variant: v
        }))
      }, P))
    })
  }));
});
process.env.NODE_ENV !== "production" && (wl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount: _t,
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
  count: _t,
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage: _t,
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
  page: _t,
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
  siblingCount: _t,
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
function $g(e) {
  return ce("MuiSelect", e);
}
const In = ae("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Is;
const Ng = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], _g = W("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${In.select}`]: t.select
      },
      {
        [`&.${In.select}`]: t[o.variant]
      },
      {
        [`&.${In.error}`]: t.error
      },
      {
        [`&.${In.multiple}`]: t.multiple
      }
    ];
  }
})(Tl, {
  // Win specificity over the input base
  [`&.${In.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), Ig = W("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${X(o.variant)}`], o.open && t.iconOpen];
  }
})(Cl), kg = W("input", {
  shouldForwardProp: (e) => Ua(e) && e !== "classes",
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
function ks(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Mg(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const Ag = (e) => {
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
  return ue(l, $g, t);
}, $l = /* @__PURE__ */ E.forwardRef(function(t, o) {
  var r;
  const {
    "aria-describedby": i,
    "aria-label": s,
    autoFocus: a,
    autoWidth: l,
    children: c,
    className: u,
    defaultOpen: d,
    defaultValue: h,
    disabled: f,
    displayEmpty: T,
    error: g = !1,
    IconComponent: p,
    inputRef: R,
    labelId: O,
    MenuProps: S = {},
    multiple: v,
    name: C,
    onBlur: x,
    onChange: $,
    onClose: m,
    onFocus: w,
    onOpen: P,
    open: N,
    readOnly: I,
    renderValue: A,
    SelectDisplayProps: D = {},
    tabIndex: L,
    value: F,
    variant: j = "standard"
  } = t, z = q(t, Ng), [M, G] = gn({
    controlled: F,
    default: h,
    name: "Select"
  }), [k, V] = gn({
    controlled: N,
    default: d,
    name: "Select"
  }), ee = E.useRef(null), Z = E.useRef(null), [U, Q] = E.useState(null), {
    current: B
  } = E.useRef(N != null), [Y, H] = E.useState(), K = Ie(o, R), ne = E.useCallback((ie) => {
    Z.current = ie, ie && Q(ie);
  }, []), te = U == null ? void 0 : U.parentNode;
  E.useImperativeHandle(K, () => ({
    focus: () => {
      Z.current.focus();
    },
    node: ee.current,
    value: M
  }), [M]), E.useEffect(() => {
    d && k && U && !B && (H(l ? null : te.clientWidth), Z.current.focus());
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
    ie ? P && P(fe) : m && m(fe), B || (H(l ? null : te.clientWidth), V(ie));
  }, re = (ie) => {
    ie.button === 0 && (ie.preventDefault(), Z.current.focus(), _(!0, ie));
  }, oe = (ie) => {
    _(!1, ie);
  }, de = E.Children.toArray(c), De = (ie) => {
    const fe = de.find((je) => je.props.value === ie.target.value);
    fe !== void 0 && (G(fe.props.value), $ && $(ie, fe));
  }, Fe = (ie) => (fe) => {
    let je;
    if (fe.currentTarget.hasAttribute("tabindex")) {
      if (v) {
        je = Array.isArray(M) ? M.slice() : [];
        const Kt = M.indexOf(ie.props.value);
        Kt === -1 ? je.push(ie.props.value) : je.splice(Kt, 1);
      } else
        je = ie.props.value;
      if (ie.props.onClick && ie.props.onClick(fe), M !== je && (G(je), $)) {
        const Kt = fe.nativeEvent || fe, Ei = new Kt.constructor(Kt.type, Kt);
        Object.defineProperty(Ei, "target", {
          writable: !0,
          value: {
            value: je,
            name: C
          }
        }), $(Ei, ie);
      }
      v || _(!1, fe);
    }
  }, He = (ie) => {
    I || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(ie.key) !== -1 && (ie.preventDefault(), _(!0, ie));
  }, Xe = U !== null && k, Qe = (ie) => {
    !Xe && x && (Object.defineProperty(ie, "target", {
      writable: !0,
      value: {
        value: M,
        name: C
      }
    }), x(ie));
  };
  delete z["aria-invalid"];
  let we, et;
  const Ge = [];
  let Se = !1, tt = !1;
  (No({
    value: M
  }) || T) && (A ? we = A(M) : Se = !0);
  const At = de.map((ie) => {
    if (!/* @__PURE__ */ E.isValidElement(ie))
      return null;
    process.env.NODE_ENV !== "production" && hn.isFragment(ie) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let fe;
    if (v) {
      if (!Array.isArray(M))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Ot(2));
      fe = M.some((je) => ks(je, ie.props.value)), fe && Se && Ge.push(ie.props.children);
    } else
      fe = ks(M, ie.props.value), fe && Se && (et = ie.props.children);
    return fe && (tt = !0), /* @__PURE__ */ E.cloneElement(ie, {
      "aria-selected": fe ? "true" : "false",
      onClick: Fe(ie),
      onKeyUp: (je) => {
        je.key === " " && je.preventDefault(), ie.props.onKeyUp && ie.props.onKeyUp(je);
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
    if (!tt && !v && M !== "") {
      const ie = de.map((fe) => fe.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${M}\` for the select ${C ? `(name="${C}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ie.filter((fe) => fe != null).map((fe) => `\`${fe}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [tt, de, v, C, M]), Se && (v ? Ge.length === 0 ? we = null : we = Ge.reduce((ie, fe, je) => (ie.push(fe), je < Ge.length - 1 && ie.push(", "), ie), []) : we = et);
  let $t = Y;
  !l && B && U && ($t = te.clientWidth);
  let ge;
  typeof L < "u" ? ge = L : ge = f ? null : 0;
  const le = D.id || (C ? `mui-component-select-${C}` : void 0), ht = b({}, t, {
    variant: j,
    value: M,
    open: Xe,
    error: g
  }), Rn = Ag(ht), Yt = b({}, S.PaperProps, (r = S.slotProps) == null ? void 0 : r.paper), ur = ti();
  return /* @__PURE__ */ se(E.Fragment, {
    children: [/* @__PURE__ */ y(_g, b({
      ref: ne,
      tabIndex: ge,
      role: "combobox",
      "aria-controls": ur,
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": Xe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": s,
      "aria-labelledby": [O, le].filter(Boolean).join(" ") || void 0,
      "aria-describedby": i,
      onKeyDown: He,
      onMouseDown: f || I ? null : re,
      onBlur: Qe,
      onFocus: w
    }, D, {
      ownerState: ht,
      className: J(D.className, Rn.select, u),
      id: le,
      children: Mg(we) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Is || (Is = /* @__PURE__ */ y("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : we
    })), /* @__PURE__ */ y(kg, b({
      "aria-invalid": g,
      value: Array.isArray(M) ? M.join(",") : M,
      name: C,
      ref: ee,
      "aria-hidden": !0,
      onChange: De,
      tabIndex: -1,
      disabled: f,
      className: Rn.nativeInput,
      autoFocus: a,
      ownerState: ht
    }, z)), /* @__PURE__ */ y(Ig, {
      as: p,
      className: Rn.icon,
      ownerState: ht
    }), /* @__PURE__ */ y(lr, b({
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
        "aria-multiselectable": v ? "true" : void 0,
        disableListWrap: !0,
        id: ur
      }, S.MenuListProps),
      slotProps: b({}, S.slotProps, {
        paper: b({}, Yt, {
          style: b({
            minWidth: $t
          }, Yt != null ? Yt.style : null)
        })
      }),
      children: At
    }))]
  });
});
process.env.NODE_ENV !== "production" && ($l.propTypes = {
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
const Dg = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], Fg = ["root"], jg = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, bi = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => We(e) && e !== "variant",
  slot: "Root"
}, Lg = W(ar, bi)(""), Bg = W(cr, bi)(""), zg = W(ir, bi)(""), gi = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    IconComponent: d = um,
    id: h,
    input: f,
    inputProps: T,
    label: g,
    labelId: p,
    MenuProps: R,
    multiple: O = !1,
    native: S = !1,
    onClose: v,
    onOpen: C,
    open: x,
    renderValue: $,
    SelectDisplayProps: m,
    variant: w = "outlined"
  } = r, P = q(r, Dg), N = S ? Ol : $l, I = wt(), A = Mt({
    props: r,
    muiFormControl: I,
    states: ["variant", "error"]
  }), D = A.variant || w, L = b({}, r, {
    variant: D,
    classes: a
  }), F = jg(L), j = q(F, Fg), z = f || {
    standard: /* @__PURE__ */ y(Lg, {
      ownerState: L
    }),
    outlined: /* @__PURE__ */ y(Bg, {
      label: g,
      ownerState: L
    }),
    filled: /* @__PURE__ */ y(zg, {
      ownerState: L
    })
  }[D], M = Ie(o, qt(z));
  return /* @__PURE__ */ y(E.Fragment, {
    children: /* @__PURE__ */ E.cloneElement(z, b({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: N,
      inputProps: b({
        children: s,
        error: A.error,
        IconComponent: d,
        variant: D,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: O
      }, S ? {
        id: h
      } : {
        autoWidth: i,
        defaultOpen: c,
        displayEmpty: u,
        labelId: p,
        MenuProps: R,
        onClose: v,
        onOpen: C,
        open: x,
        renderValue: $,
        SelectDisplayProps: b({
          id: h
        }, m)
      }, T, {
        classes: T ? Ue(j, T.classes) : j
      }, f ? f.props.inputProps : {})
    }, (O && S || u) && D === "outlined" ? {
      notched: !0
    } : {}, {
      ref: M,
      className: J(z.props.className, l, F.root)
    }, !f && {
      variant: D
    }, P))
  });
});
process.env.NODE_ENV !== "production" && (gi.propTypes = {
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
gi.muiName = "Select";
function Vg(e) {
  return ce("MuiSkeleton", e);
}
ae("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const Wg = ["animation", "className", "component", "height", "style", "variant", "width"];
let ko = (e) => e, Ms, As, Ds, Fs;
const Ug = (e) => {
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
  }, Vg, t);
}, qg = En(Ms || (Ms = ko`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)), Hg = En(As || (As = ko`
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
`)), Gg = W("span", {
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
  const o = Tp(e.shape.borderRadius) || "px", r = Cp(e.shape.borderRadius);
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
}) => e.animation === "pulse" && $r(Ds || (Ds = ko`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `), qg), ({
  ownerState: e,
  theme: t
}) => e.animation === "wave" && $r(Fs || (Fs = ko`
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
    `), Hg, (t.vars || t).palette.action.hover)), Yn = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
  } = r, h = q(r, Wg), f = b({}, r, {
    animation: i,
    component: a,
    variant: u,
    hasChildren: !!h.children
  }), T = Ug(f);
  return /* @__PURE__ */ y(Gg, b({
    as: a,
    ref: o,
    className: J(T.root, s),
    ownerState: f
  }, h, {
    style: b({
      width: d,
      height: l
    }, c)
  }));
});
process.env.NODE_ENV !== "production" && (Yn.propTypes = {
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
function Yg(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: o = !1,
    onClose: r,
    open: i,
    resumeHideDuration: s
  } = e, a = Xo();
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
  const l = mt((O, S) => {
    r == null || r(O, S);
  }), c = mt((O) => {
    !r || O == null || a.start(O, () => {
      l(null, "timeout");
    });
  });
  E.useEffect(() => (i && c(t), a.clear), [i, t, c, a]);
  const u = (O) => {
    r == null || r(O, "clickaway");
  }, d = a.clear, h = E.useCallback(() => {
    t != null && c(s ?? t * 0.5);
  }, [t, s, c]), f = (O) => (S) => {
    const v = O.onBlur;
    v == null || v(S), h();
  }, T = (O) => (S) => {
    const v = O.onFocus;
    v == null || v(S), d();
  }, g = (O) => (S) => {
    const v = O.onMouseEnter;
    v == null || v(S), d();
  }, p = (O) => (S) => {
    const v = O.onMouseLeave;
    v == null || v(S), h();
  };
  return E.useEffect(() => {
    if (!o && i)
      return window.addEventListener("focus", h), window.addEventListener("blur", d), () => {
        window.removeEventListener("focus", h), window.removeEventListener("blur", d);
      };
  }, [o, i, h, d]), {
    getRootProps: (O = {}) => {
      const S = b({}, Oo(e), Oo(O));
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
function Kg(e) {
  return ce("MuiSnackbarContent", e);
}
ae("MuiSnackbarContent", ["root", "message", "action"]);
const Xg = ["action", "className", "message", "role"], Jg = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, Kg, t);
}, Zg = W(Ht, {
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
}), Qg = W("div", {
  name: "MuiSnackbarContent",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0"
}), ey = W("div", {
  name: "MuiSnackbarContent",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), yi = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: i,
    className: s,
    message: a,
    role: l = "alert"
  } = r, c = q(r, Xg), u = r, d = Jg(u);
  return /* @__PURE__ */ se(Zg, b({
    role: l,
    square: !0,
    elevation: 6,
    className: J(d.root, s),
    ownerState: u,
    ref: o
  }, c, {
    children: [/* @__PURE__ */ y(Qg, {
      className: d.message,
      ownerState: u,
      children: a
    }), i ? /* @__PURE__ */ y(ey, {
      className: d.action,
      ownerState: u,
      children: i
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (yi.propTypes = {
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
function ty(e) {
  return ce("MuiSnackbar", e);
}
ae("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const ny = ["onEnter", "onExited"], oy = ["action", "anchorOrigin", "autoHideDuration", "children", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"], ry = (e) => {
  const {
    classes: t,
    anchorOrigin: o
  } = e, r = {
    root: ["root", `anchorOrigin${X(o.vertical)}${X(o.horizontal)}`]
  };
  return ue(r, ty, t);
}, js = W("div", {
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
}), Nl = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    className: h,
    ClickAwayListenerProps: f,
    ContentProps: T,
    disableWindowBlurListener: g = !1,
    message: p,
    open: R,
    TransitionComponent: O = sr,
    transitionDuration: S = s,
    TransitionProps: {
      onEnter: v,
      onExited: C
    } = {}
  } = r, x = q(r.TransitionProps, ny), $ = q(r, oy), m = b({}, r, {
    anchorOrigin: {
      vertical: l,
      horizontal: c
    },
    autoHideDuration: u,
    disableWindowBlurListener: g,
    TransitionComponent: O,
    transitionDuration: S
  }), w = ry(m), {
    getRootProps: P,
    onClickAway: N
  } = Yg(b({}, m)), [I, A] = E.useState(!0), D = Wt({
    elementType: js,
    getSlotProps: P,
    externalForwardedProps: $,
    ownerState: m,
    additionalProps: {
      ref: o
    },
    className: [w.root, h]
  }), L = (j) => {
    A(!0), C && C(j);
  }, F = (j, z) => {
    A(!1), v && v(j, z);
  };
  return !R && I ? null : /* @__PURE__ */ y(_o, b({
    onClickAway: N
  }, f, {
    children: /* @__PURE__ */ y(js, b({}, D, {
      children: /* @__PURE__ */ y(O, b({
        appear: !0,
        in: R,
        timeout: S,
        direction: l === "top" ? "down" : "up",
        onEnter: F,
        onExited: L
      }, x, {
        children: d || /* @__PURE__ */ y(yi, b({
          message: p,
          action: a
        }, T))
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Nl.propTypes = {
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
function iy(e) {
  return ce("MuiToolbar", e);
}
ae("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const sy = ["className", "component", "disableGutters", "variant"], ay = (e) => {
  const {
    classes: t,
    disableGutters: o,
    variant: r
  } = e;
  return ue({
    root: ["root", !o && "gutters", r]
  }, iy, t);
}, ly = W("div", {
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
}) => t.variant === "regular" && e.mixins.toolbar), cy = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = pe({
    props: t,
    name: "MuiToolbar"
  }), {
    className: i,
    component: s = "div",
    disableGutters: a = !1,
    variant: l = "regular"
  } = r, c = q(r, sy), u = b({}, r, {
    component: s,
    disableGutters: a,
    variant: l
  }), d = ay(u);
  return /* @__PURE__ */ y(ly, b({
    as: s,
    className: J(d.root, i),
    ref: o,
    ownerState: u
  }, c));
});
process.env.NODE_ENV !== "production" && (cy.propTypes = {
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
function uy(e) {
  return ce("MuiTextField", e);
}
ae("MuiTextField", ["root"]);
const dy = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], py = {
  standard: ar,
  filled: ir,
  outlined: cr
}, fy = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, uy, t);
}, my = W(cl, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), _l = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
    error: h = !1,
    FormHelperTextProps: f,
    fullWidth: T = !1,
    helperText: g,
    id: p,
    InputLabelProps: R,
    inputProps: O,
    InputProps: S,
    inputRef: v,
    label: C,
    maxRows: x,
    minRows: $,
    multiline: m = !1,
    name: w,
    onBlur: P,
    onChange: N,
    onFocus: I,
    placeholder: A,
    required: D = !1,
    rows: L,
    select: F = !1,
    SelectProps: j,
    type: z,
    value: M,
    variant: G = "outlined"
  } = r, k = q(r, dy), V = b({}, r, {
    autoFocus: s,
    color: c,
    disabled: d,
    error: h,
    fullWidth: T,
    multiline: m,
    required: D,
    select: F,
    variant: G
  }), ee = fy(V);
  process.env.NODE_ENV !== "production" && F && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const Z = {};
  G === "outlined" && (R && typeof R.shrink < "u" && (Z.notched = R.shrink), Z.label = C), F && ((!j || !j.native) && (Z.id = void 0), Z["aria-describedby"] = void 0);
  const U = ti(p), Q = g && U ? `${U}-helper-text` : void 0, B = C && U ? `${U}-label` : void 0, Y = py[G], H = /* @__PURE__ */ y(Y, b({
    "aria-describedby": Q,
    autoComplete: i,
    autoFocus: s,
    defaultValue: u,
    fullWidth: T,
    multiline: m,
    name: w,
    rows: L,
    maxRows: x,
    minRows: $,
    type: z,
    value: M,
    id: U,
    inputRef: v,
    onBlur: P,
    onChange: N,
    onFocus: I,
    placeholder: A,
    inputProps: O
  }, Z, S));
  return /* @__PURE__ */ se(my, b({
    className: J(ee.root, l),
    disabled: d,
    error: h,
    fullWidth: T,
    ref: o,
    required: D,
    color: c,
    variant: G,
    ownerState: V
  }, k, {
    children: [C != null && C !== "" && /* @__PURE__ */ y(fi, b({
      htmlFor: U,
      id: B
    }, R, {
      children: C
    })), F ? /* @__PURE__ */ y(gi, b({
      "aria-describedby": Q,
      id: U,
      labelId: B,
      value: M,
      input: H
    }, j, {
      children: a
    })) : H, g && /* @__PURE__ */ y(fl, b({
      id: Q
    }, f, {
      children: g
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (_l.propTypes = {
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
var dt = {}, kn = {}, fo = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ls;
function hy() {
  if (Ls) return xe;
  Ls = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function v(x) {
    if (typeof x == "object" && x !== null) {
      var $ = x.$$typeof;
      switch ($) {
        case t:
          switch (x = x.type, x) {
            case c:
            case u:
            case r:
            case s:
            case i:
            case h:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case l:
                case d:
                case g:
                case T:
                case a:
                  return x;
                default:
                  return $;
              }
          }
        case o:
          return $;
      }
    }
  }
  function C(x) {
    return v(x) === u;
  }
  return xe.AsyncMode = c, xe.ConcurrentMode = u, xe.ContextConsumer = l, xe.ContextProvider = a, xe.Element = t, xe.ForwardRef = d, xe.Fragment = r, xe.Lazy = g, xe.Memo = T, xe.Portal = o, xe.Profiler = s, xe.StrictMode = i, xe.Suspense = h, xe.isAsyncMode = function(x) {
    return C(x) || v(x) === c;
  }, xe.isConcurrentMode = C, xe.isContextConsumer = function(x) {
    return v(x) === l;
  }, xe.isContextProvider = function(x) {
    return v(x) === a;
  }, xe.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, xe.isForwardRef = function(x) {
    return v(x) === d;
  }, xe.isFragment = function(x) {
    return v(x) === r;
  }, xe.isLazy = function(x) {
    return v(x) === g;
  }, xe.isMemo = function(x) {
    return v(x) === T;
  }, xe.isPortal = function(x) {
    return v(x) === o;
  }, xe.isProfiler = function(x) {
    return v(x) === s;
  }, xe.isStrictMode = function(x) {
    return v(x) === i;
  }, xe.isSuspense = function(x) {
    return v(x) === h;
  }, xe.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === u || x === s || x === i || x === h || x === f || typeof x == "object" && x !== null && (x.$$typeof === g || x.$$typeof === T || x.$$typeof === a || x.$$typeof === l || x.$$typeof === d || x.$$typeof === R || x.$$typeof === O || x.$$typeof === S || x.$$typeof === p);
  }, xe.typeOf = v, xe;
}
var Ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bs;
function by() {
  return Bs || (Bs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function v(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === u || _ === s || _ === i || _ === h || _ === f || typeof _ == "object" && _ !== null && (_.$$typeof === g || _.$$typeof === T || _.$$typeof === a || _.$$typeof === l || _.$$typeof === d || _.$$typeof === R || _.$$typeof === O || _.$$typeof === S || _.$$typeof === p);
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
              case h:
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
    var x = c, $ = u, m = l, w = a, P = t, N = d, I = r, A = g, D = T, L = o, F = s, j = i, z = h, M = !1;
    function G(_) {
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
    function H(_) {
      return C(_) === o;
    }
    function K(_) {
      return C(_) === s;
    }
    function ne(_) {
      return C(_) === i;
    }
    function te(_) {
      return C(_) === h;
    }
    Ee.AsyncMode = x, Ee.ConcurrentMode = $, Ee.ContextConsumer = m, Ee.ContextProvider = w, Ee.Element = P, Ee.ForwardRef = N, Ee.Fragment = I, Ee.Lazy = A, Ee.Memo = D, Ee.Portal = L, Ee.Profiler = F, Ee.StrictMode = j, Ee.Suspense = z, Ee.isAsyncMode = G, Ee.isConcurrentMode = k, Ee.isContextConsumer = V, Ee.isContextProvider = ee, Ee.isElement = Z, Ee.isForwardRef = U, Ee.isFragment = Q, Ee.isLazy = B, Ee.isMemo = Y, Ee.isPortal = H, Ee.isProfiler = K, Ee.isStrictMode = ne, Ee.isSuspense = te, Ee.isValidElementType = v, Ee.typeOf = C;
  }()), Ee;
}
var zs;
function gy() {
  return zs || (zs = 1, process.env.NODE_ENV === "production" ? fo.exports = hy() : fo.exports = by()), fo.exports;
}
var Pr, Vs;
function yy() {
  if (Vs) return Pr;
  Vs = 1;
  var e = gy(), t = {
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
  var l = Object.defineProperty, c = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, h = Object.getPrototypeOf, f = Object.prototype;
  function T(g, p, R) {
    if (typeof p != "string") {
      if (f) {
        var O = h(p);
        O && O !== f && T(g, O, R);
      }
      var S = c(p);
      u && (S = S.concat(u(p)));
      for (var v = a(g), C = a(p), x = 0; x < S.length; ++x) {
        var $ = S[x];
        if (!o[$] && !(R && R[$]) && !(C && C[$]) && !(v && v[$])) {
          var m = d(p, $);
          try {
            l(g, $, m);
          } catch {
          }
        }
      }
    }
    return g;
  }
  return Pr = T, Pr;
}
var Mn = {}, pt = {}, Ws;
function Il() {
  if (Ws) return pt;
  Ws = 1, pt.__esModule = !0, pt.noop = pt.defaultProps = pt.defaultOptions = pt.defaultConfig = void 0, pt.defaultOptions = {}, pt.defaultConfig = {
    disconnectOnLeave: !1
  };
  var e = () => {
  };
  return pt.noop = e, pt.defaultProps = {
    onEnterViewport: e,
    onLeaveViewport: e
  }, pt;
}
var Us;
function kl() {
  if (Us) return Mn;
  Us = 1, Mn.__esModule = !0, Mn.default = void 0;
  var e = ft, t = Il(), o = {
    attributes: !0,
    childList: !0,
    subtree: !0
  }, r = function(s, a, l, c) {
    a === void 0 && (a = t.defaultOptions), l === void 0 && (l = t.defaultConfig), c === void 0 && (c = t.defaultProps);
    var {
      onEnterViewport: u,
      onLeaveViewport: d
    } = c, [, h] = (0, e.useState)(), f = (0, e.useRef)(), T = (0, e.useRef)(!1), g = (0, e.useRef)(!1), p = (0, e.useRef)(0), R = (0, e.useRef)(0), [O, S] = (0, e.useState)(!!s.current);
    function v(m) {
      var {
        observerRef: w
      } = m, P = s.current;
      if (P) {
        var N = P;
        N && (w == null || w.observe(N));
      }
    }
    function C(m) {
      var {
        observerRef: w
      } = m, P = s.current;
      if (P) {
        var N = P;
        N && (w == null || w.unobserve(N));
      }
      w == null || w.disconnect(), f.current = null;
    }
    var x = (m) => {
      var w = m[0] || {}, {
        isIntersecting: P,
        intersectionRatio: N
      } = w, I = typeof P < "u" ? P : N > 0;
      if (!g.current && I) {
        g.current = !0, u == null || u(), p.current += 1, T.current = I, h(I);
        return;
      }
      g.current && !I && (g.current = !1, d == null || d(), l.disconnectOnLeave && f.current && f.current.disconnect(), R.current += 1, T.current = I, h(I));
    };
    function $(m) {
      var {
        observerRef: w
      } = m;
      return w || (f.current = new IntersectionObserver(x, a), f.current);
    }
    return (0, e.useEffect)(() => {
      var m = f.current;
      return m = $({
        observerRef: m
      }), v({
        observerRef: m
      }), () => {
        C({
          observerRef: m
        });
      };
    }, [s.current, a, l, u, d]), (0, e.useEffect)(() => {
      var m = s.current, w = null, P = () => {
        s.current && !O && (S(!0), w && w.disconnect());
      };
      return m ? S(!0) : (w = new MutationObserver(P), w.observe(document.body, o)), () => {
        w && w.disconnect();
      };
    }, [s.current]), {
      inViewport: T.current,
      enterCount: p.current,
      leaveCount: R.current
    };
  };
  return Mn.default = r, Mn;
}
var qs;
function vy() {
  if (qs) return kn;
  qs = 1, kn.__esModule = !0, kn.default = void 0;
  var e = ft, t = a(yy()), o = a(kl()), r = Il(), i = Zs, s = ["onEnterViewport", "onLeaveViewport"];
  function a(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function l(d, h) {
    if (d == null) return {};
    var f = {};
    for (var T in d) if ({}.hasOwnProperty.call(d, T)) {
      if (h.includes(T)) continue;
      f[T] = d[T];
    }
    return f;
  }
  function c() {
    return c = Object.assign ? Object.assign.bind() : function(d) {
      for (var h = 1; h < arguments.length; h++) {
        var f = arguments[h];
        for (var T in f) ({}).hasOwnProperty.call(f, T) && (d[T] = f[T]);
      }
      return d;
    }, c.apply(null, arguments);
  }
  function u(d, h, f) {
    h === void 0 && (h = r.defaultOptions), f === void 0 && (f = r.defaultConfig);
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
      } = R, v = l(R, s), C = (0, e.useRef)(null), {
        inViewport: x,
        enterCount: $,
        leaveCount: m
      } = (0, o.default)(C, h, f, {
        onEnterViewport: O,
        onLeaveViewport: S
      }), w = c({}, v, {
        inViewport: x,
        enterCount: $,
        leaveCount: m
      });
      return /* @__PURE__ */ (0, i.jsx)(T, c({}, w, {
        ref: C
      }));
    }, p = d.displayName || d.name || "Component";
    return g.displayName = "handleViewport(" + p + ")", (0, t.default)(g, T);
  }
  return kn.default = u, kn;
}
var Hs;
function xy() {
  if (Hs) return dt;
  Hs = 1, dt.__esModule = !0, dt.useInViewport = dt.handleViewport = dt.default = dt.customProps = void 0;
  var e = o(vy());
  dt.handleViewport = e.default;
  var t = o(kl());
  dt.useInViewport = t.default;
  function o(r) {
    return r && r.__esModule ? r : { default: r };
  }
  return dt.customProps = ["inViewport", "enterCount", "leaveCount"], dt.default = e.default, dt;
}
var Ey = xy();
const Ml = ({
  autoPlay: e,
  className: t = "",
  loop: o,
  videoSrc: r,
  muted: i = !0
}) => {
  const s = xo(null), a = xo(null), { inViewport: l } = Ey.useInViewport(s), [c, u] = Ae(!1), [d, h] = Ae(!1);
  return Ct(() => {
    l && (console.log("inViewport"), h(!0));
  }, [l]), Ct(() => {
    var f, T;
    !e || !c || (l ? (f = a.current) == null || f.play().catch(() => {
    }) : (T = a.current) == null || T.pause());
  }, [e, l, c]), console.log({ canRenderVideo: d }), /* @__PURE__ */ y("div", { ref: s, className: `relative ${t}`, children: d ? /* @__PURE__ */ se(xn, { children: [
    !c && /* @__PURE__ */ y(
      Yn,
      {
        className: "absolute inset-0",
        height: "100%",
        variant: "rectangular"
      }
    ),
    /* @__PURE__ */ y(
      "video",
      {
        ref: a,
        className: "w-full h-full relative object-cover",
        onCanPlayThrough: () => u(!0),
        playsInline: !0,
        autoPlay: e,
        preload: "auto",
        controls: !1,
        loop: o,
        muted: i,
        children: /* @__PURE__ */ y("source", { src: r })
      }
    )
  ] }) : /* @__PURE__ */ y(
    Yn,
    {
      className: "absolute inset-0",
      height: "100%",
      variant: "rectangular"
    }
  ) });
}, Mo = ({
  assetUrl: e,
  autoplay: t = !0,
  banner: o = !1,
  containerClassName: r,
  fullHeight: i = !1,
  objectFit: s = "cover"
}) => {
  if (!e) return null;
  const a = `w-full h-full md:min-h-[768px] lg:min-h-[800px] ${s === "cover" ? "object-cover" : "object-contain"} ${o ? "xs:min-h-[420px]" : "xs:min-h-auto"}`, l = i ? "100vh" : { lg: 800, md: 768, xs: o ? 420 : "auto" };
  return ["mp4", "mov", "webm"].some((u) => e.endsWith(u)) ? /* @__PURE__ */ y(Oe, { className: r, height: l, children: /* @__PURE__ */ y(
    Ml,
    {
      autoPlay: t,
      className: a,
      videoSrc: e,
      loop: !0,
      muted: !0
    }
  ) }) : /* @__PURE__ */ y(Oe, { className: r, height: l, children: /* @__PURE__ */ y(
    "img",
    {
      alt: "",
      className: a,
      height: 1080,
      loading: "lazy",
      src: e,
      width: 1920
    }
  ) });
}, Ty = ({
  headline: e,
  mediaBlockOptions: t,
  children: o,
  sublineElement: r
}) => /* @__PURE__ */ se(Oe, { minHeight: { lg: 800, md: 768, xs: "100vh" }, position: "relative", children: [
  t && /* @__PURE__ */ y(Mo, { ...t, fullHeight: !0 }),
  /* @__PURE__ */ y("div", { className: "absolute inset-0 bg-gradient-to-t from-black to-transparent" }),
  /* @__PURE__ */ y(
    Oe,
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
              /* @__PURE__ */ y(qe, { color: "white", fontWeight: "medium", variant: "h1", children: e }),
              an(r) ? r : /* @__PURE__ */ y(
                qe,
                {
                  color: "white",
                  component: "div",
                  dangerouslySetInnerHTML: { __html: r ?? "" },
                  mb: { sm: 2, xs: 3 },
                  mt: { sm: 0.5, xs: 1 },
                  variant: "body1"
                }
              ),
              o && /* @__PURE__ */ y(
                Oe,
                {
                  display: "flex",
                  alignItems: "center",
                  flexDirection: { md: "row", xs: "column" },
                  justifyContent: { md: "left", xs: "center" },
                  gap: 2,
                  mt: { md: 8, xs: 3 },
                  children: o
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ y(Re, { md: 1, xs: 0 })
      ] })
    }
  )
] }), bt = {
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
}, Cy = (e) => ({
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
          color: bt.primary.main
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
        fontWeight: "normal",
        padding: e.spacing(1.5, 2.5),
        "&:disabled": {
          backgroundColor: bt.grey[200],
          borderColor: bt.common.white,
          color: bt.common.white
        }
      },
      sizeSmall: {
        padding: e.spacing(1, 2)
      },
      text: {
        border: "none",
        fontWeight: "normal",
        "&:disabled": {
          backgroundColor: bt.grey[100],
          border: "none",
          color: bt.common.black
        },
        "&:hover": {
          backgroundColor: "transparent",
          color: bt.primary.main
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
        borderColor: bt.grey[200]
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
          color: bt.primary.main
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
}), Oy = {
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
    lineHeight: 1,
    fontWeight: 400
  },
  h2: {
    fontSize: 40,
    lineHeight: 1.2,
    fontWeight: 300
  },
  h3: {
    fontSize: 32,
    lineHeight: 1.2,
    fontWeight: 300
  },
  h4: {
    fontSize: 24,
    lineHeight: 1.2,
    fontWeight: 300
  },
  h5: {
    fontSize: 20,
    lineHeight: 1.2,
    fontWeight: 300
  }
}, pn = ii({
  palette: bt,
  typography: Oy,
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
pn.components = Cy(pn);
pn.typography.h1 = {
  ...pn.typography.h1,
  [pn.breakpoints.down("xl")]: {
    fontSize: 40
  }
};
function ze({ children: e }) {
  return /* @__PURE__ */ y(qa, { theme: pn, children: e });
}
const Sv = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(Ty, { ...e }) }), Ry = ct(/* @__PURE__ */ y("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "ErrorOutline"), Sy = ct(/* @__PURE__ */ y("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), "ExpandLess"), Py = ct(/* @__PURE__ */ y("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore");
function An(e) {
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
const Gs = {};
function wy(e, t) {
  Gs[e] || (Gs[e] = !0, console.error("[material-ui-popup-state] WARNING", t));
}
const $y = {
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
}, Ys = E, Ny = "useId" in Ys ? () => Ys.useId() : (
  // istanbul ignore next
  () => {
  }
);
function _y({
  parentPopupState: e,
  popupId: t = Ny(),
  variant: o,
  disableAutoFocus: r
}) {
  const i = xo(!0);
  Ct(() => (i.current = !0, () => {
    i.current = !1;
  }), []);
  const [s, a] = Ae($y), l = Fn((S) => {
    i.current && a(S);
  }, []), c = Fn((S) => l((v) => ({
    ...v,
    setAnchorElUsed: !0,
    anchorEl: S ?? void 0
  })), []), u = An((S) => (s.isOpen ? f(S) : d(S), s)), d = An((S) => {
    const v = S instanceof Element ? void 0 : S, C = S instanceof Element ? S : (S == null ? void 0 : S.currentTarget) instanceof Element ? S.currentTarget : void 0;
    if ((v == null ? void 0 : v.type) === "touchstart") {
      l((P) => ({
        ...P,
        _deferNextOpen: !0
      }));
      return;
    }
    const x = v == null ? void 0 : v.clientX, $ = v == null ? void 0 : v.clientY, m = typeof x == "number" && typeof $ == "number" ? {
      left: x,
      top: $
    } : void 0, w = (P) => {
      if (!S && !P.setAnchorElUsed && o !== "dialog" && wy("missingEventOrAnchorEl", "eventOrAnchorEl should be defined if setAnchorEl is not used"), e) {
        if (!e.isOpen) return P;
        setTimeout(() => e._setChildPopupState(O));
      }
      const N = {
        ...P,
        isOpen: !0,
        anchorPosition: m,
        hovered: (v == null ? void 0 : v.type) === "mouseover" || P.hovered,
        focused: (v == null ? void 0 : v.type) === "focus" || P.focused,
        _openEventType: v == null ? void 0 : v.type
      };
      return P.setAnchorElUsed || (v != null && v.currentTarget ? N.anchorEl = v == null ? void 0 : v.currentTarget : C && (N.anchorEl = C)), N;
    };
    l((P) => P._deferNextOpen ? (setTimeout(() => l(w), 0), {
      ...P,
      _deferNextOpen: !1
    }) : w(P));
  }), h = (S) => {
    const {
      _childPopupState: v
    } = S;
    return setTimeout(() => {
      v == null || v.close(), e == null || e._setChildPopupState(null);
    }), {
      ...S,
      isOpen: !1,
      hovered: !1,
      focused: !1
    };
  }, f = An((S) => {
    const v = S instanceof Element ? void 0 : S;
    if ((v == null ? void 0 : v.type) === "touchstart") {
      l((C) => ({
        ...C,
        _deferNextClose: !0
      }));
      return;
    }
    l((C) => C._deferNextClose ? (setTimeout(() => l(h), 0), {
      ...C,
      _deferNextClose: !1
    }) : h(C));
  }), T = Fn((S, v) => {
    S ? d(v) : f(v);
  }, []), g = An((S) => {
    const {
      relatedTarget: v
    } = S;
    l((C) => C.hovered && !(v instanceof Element && zr(v, O)) ? C.focused ? {
      ...C,
      hovered: !1
    } : h(C) : C);
  }), p = An((S) => {
    if (!S) return;
    const {
      relatedTarget: v
    } = S;
    l((C) => C.focused && !(v instanceof Element && zr(v, O)) ? C.hovered ? {
      ...C,
      focused: !1
    } : h(C) : C);
  }), R = Fn((S) => l((v) => ({
    ...v,
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
function Iy({
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
function ky(e) {
  const {
    open: t,
    onMouseLeave: o
  } = e;
  return {
    ...Iy(e),
    onTouchStart: t,
    onMouseOver: t,
    onMouseLeave: o
  };
}
function My({
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
function Ay(e, {
  popupId: t
}) {
  if (!t) return null;
  const o = typeof e.getRootNode == "function" ? e.getRootNode() : document;
  return typeof o.getElementById == "function" ? o.getElementById(t) : null;
}
function zr(e, t) {
  const {
    anchorEl: o,
    _childPopupState: r
  } = t;
  return Ks(o, e) || Ks(Ay(e, t), e) || r != null && zr(e, r);
}
function Ks(e, t) {
  if (!e) return !1;
  for (; t; ) {
    if (t === e) return !0;
    t = t.parentElement;
  }
  return !1;
}
function Dy(e) {
  const t = e;
  return t.__esModule ? t.default : e;
}
const Fy = Dy(lr), jy = /* @__PURE__ */ E.forwardRef(function(t, o) {
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
  return /* @__PURE__ */ E.createElement(Fy, b({}, t, {
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
}), Al = ({
  href: e,
  label: t,
  onClick: o,
  open: r,
  variant: i,
  ...s
}) => /* @__PURE__ */ y(
  Et,
  {
    "aria-controls": r ? `basic-menu-${t}` : void 0,
    "aria-expanded": r ? "true" : void 0,
    "aria-haspopup": "true",
    endIcon: r ? /* @__PURE__ */ y(Sy, {}) : /* @__PURE__ */ y(Py, {}),
    id: `basic-button-${t}`,
    onClick: o,
    variant: i,
    ...s,
    href: e,
    children: t
  }
), Ly = ({
  children: e,
  className: t,
  href: o,
  label: r,
  popupState: i,
  variant: s
}) => {
  const { shadows: a } = lt(), l = i.isOpen;
  return /* @__PURE__ */ se(xn, { children: [
    /* @__PURE__ */ y(
      Al,
      {
        className: t,
        href: o,
        label: r,
        open: l,
        variant: s,
        ...ky(i)
      }
    ),
    /* @__PURE__ */ y(
      jy,
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
        ...My(i),
        children: e
      }
    )
  ] });
}, By = ({
  children: e,
  label: t,
  variant: o
}) => {
  const { shadows: r } = lt(), [i, s] = Ae(null), a = !!i, l = () => s(null);
  return /* @__PURE__ */ se(xn, { children: [
    /* @__PURE__ */ y(
      Al,
      {
        label: t,
        onClick: (c) => s(c.currentTarget),
        open: a,
        variant: o
      }
    ),
    /* @__PURE__ */ y(
      lr,
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
}, zy = W(
  El
)(({ theme: e }) => ({
  "&.active": {
    backgroundColor: e.palette.grey[100],
    a: {
      color: e.palette.primary.main
    }
  }
})), Vy = ({
  children: e,
  className: t,
  href: o,
  label: r,
  variant: i = "menu"
}) => {
  const { breakpoints: s } = lt(), a = Sa(s.down("xl")), l = _y({ popupId: "demoMenu", variant: "popper" });
  return /* @__PURE__ */ y(xn, { children: a ? /* @__PURE__ */ y(By, { label: r, variant: i, children: e }) : /* @__PURE__ */ y(
    Ly,
    {
      className: t,
      href: o,
      label: r,
      popupState: l,
      variant: i,
      children: e
    }
  ) });
}, Wy = W(({ ...e }) => /* @__PURE__ */ y(Gt, { color: "primary", ...e, variant: "contained" }))(({ theme: e }) => ({
  "&:hover": {
    backgroundColor: e.palette.common.white,
    borderColor: e.palette.primary.main,
    color: e.palette.primary.main
  }
})), Dl = W(({ ...e }) => /* @__PURE__ */ y(Gt, { color: "primary", ...e, variant: "outlined" }))(({ theme: e }) => ({
  backgroundColor: e.palette.common.white,
  "&:hover": {
    backgroundColor: e.palette.primary.main,
    borderColor: e.palette.primary.main,
    color: e.palette.common.white
  }
})), Uy = W(Dl)(({ theme: e }) => ({
  borderColor: e.palette.common.black,
  color: e.palette.common.black,
  "&:hover": {
    backgroundColor: e.palette.common.black,
    borderColor: e.palette.common.black,
    color: e.palette.common.white
  }
})), qy = W(({ ...e }) => /* @__PURE__ */ y(Gt, { color: "info", ...e, variant: "text" }))(({ theme: e }) => ({
  "&.active": {
    backgroundColor: e.palette.grey[100],
    color: e.palette.primary.main
  }
})), Hy = W(({ ...e }) => /* @__PURE__ */ y(Gt, { color: "primary", ...e, variant: "text" }))(({ theme: e }) => ({
  padding: 0,
  ...e.typography.h2
})), Gy = W(({ ...e }) => /* @__PURE__ */ y(zy, { className: e.className, children: /* @__PURE__ */ y(Gt, { color: "info", ...e, variant: "text" }) }))(({ theme: e }) => ({
  "&:hover": {
    color: e.palette.primary.main
  }
})), Et = ({ variant: e, ...t }) => {
  const o = t.component, r = {
    ...t,
    component: o
  };
  switch (e) {
    case "primary":
      return /* @__PURE__ */ y(Wy, { ...r, target: "" });
    case "secondary":
      return /* @__PURE__ */ y(Dl, { ...r });
    case "outline":
      return /* @__PURE__ */ y(Uy, { ...r });
    case "menu":
      return /* @__PURE__ */ y(qy, { ...r });
    case "menuItem":
      return /* @__PURE__ */ y(Gy, { ...r });
    case "topic":
      return /* @__PURE__ */ y(Hy, { ...r });
    default:
      return /* @__PURE__ */ y(Gt, { ...r });
  }
}, Pv = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(Et, { ...e }) }), Yy = "/wp-json/botspot/v1/forms", Ky = async (e) => {
  try {
    const t = await fetch(`${Yy}/${e}`, {
      method: "GET"
    });
    if (!t.ok)
      throw new Error("Failed to submit form");
    return await t.json();
  } catch {
    return null;
  }
}, Xy = ({
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
}) => /* @__PURE__ */ se(
  Oe,
  {
    className: "!text-white",
    flex: o ? "0 0 100%" : "auto",
    flexGrow: 1,
    children: [
      r && /* @__PURE__ */ y(Oe, { mb: 0.5, children: /* @__PURE__ */ y(
        fi,
        {
          className: e === "white" ? "!text-white" : "",
          required: a,
          sx: { textAlign: "left" },
          children: /* @__PURE__ */ y(qe, { variant: "caption", children: r })
        }
      ) }),
      /* @__PURE__ */ y(
        _l,
        {
          error: !!t,
          InputProps: { className: "bg-white" },
          placeholder: r,
          rows: l,
          type: u,
          value: d,
          fullWidth: !0,
          ...s(i, c)
        }
      ),
      t && /* @__PURE__ */ se(Oe, { alignItems: "center", display: "flex", mt: 0.5, children: [
        /* @__PURE__ */ y(Ry, { color: "error", fontSize: "small" }),
        /* @__PURE__ */ y(qe, { color: "error", ml: 0.5, variant: "caption", children: t.message })
      ] })
    ]
  }
), Fl = Wl({ showSnackbar: () => ({}) }), wv = ({ children: e }) => {
  const [t, o] = Ae(!1), [r, i] = Ae(""), [s, a] = Ae("success"), [l, c] = Ae(3e3), u = (d, h, f = 3e3) => {
    o(!0), i(d), a(h), c(f), setTimeout(() => o(!1), f);
  };
  return /* @__PURE__ */ se(Fl.Provider, { value: { showSnackbar: u }, children: [
    e,
    /* @__PURE__ */ y(Nl, { autoHideDuration: l, open: t, children: /* @__PURE__ */ y(
      yi,
      {
        className: `${s === "success" ? "!bg-primary-main" : "!bg-error-main"}`,
        message: r
      }
    ) })
  ] });
}, Jy = () => Ul(Fl), jl = ({
  children: e,
  formId: t,
  frameless: o = !1,
  secondary: r = !1,
  submitForm: i,
  getForm: s = Ky
}) => {
  const [a, l] = Ae([]), [c, u] = Ae(!1), { showSnackbar: d } = Jy(), {
    formState: h,
    handleSubmit: f,
    register: T,
    reset: g,
    watch: p,
    getValues: R,
    ...O
  } = Jl(), { errors: S } = h;
  Ct(() => {
    t && s(t).then(($) => l(($ == null ? void 0 : $.fields) ?? []));
  }, [t]);
  const v = Fn(() => {
    if (!t) return;
    u(!0);
    const $ = new FormData();
    $.append("_wpcf7_unit_tag", `${t}`);
    const m = R() ?? {};
    Object.entries(m).forEach(([w, P]) => {
      $.append(`${w}`, P);
    }), i($, t).then(() => d("Thank you for your feedback!", "success", 3e3)).catch(() => d("Something went wrong!", "error", 3e3)).finally(() => {
      u(!1), g();
    });
  }, [d, g, a, R, t]);
  if (!a) return null;
  const C = ($) => {
    const { basetype: m, labels: w, name: P, type: N } = $, I = N.includes("*"), A = w[0] || P;
    return /* @__PURE__ */ y(
      Xy,
      {
        color: r ? "white" : "primary",
        error: S[P],
        fullWidth: m === "textarea",
        label: A,
        name: P,
        register: T,
        required: I,
        rows: m === "textarea" ? 3 : void 0,
        rules: I ? { required: `${A} is required` } : void 0,
        type: m === "textarea" ? "textarea" : "text"
      },
      P
    );
  }, x = /* @__PURE__ */ y(
    Zl,
    {
      ...O,
      handleSubmit: f,
      watch: p,
      formState: h,
      register: T,
      reset: g,
      getValues: R,
      children: /* @__PURE__ */ se(
        Oe,
        {
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: 3,
          alignItems: { md: "baseline", xs: "center" },
          p: o ? 0 : { md: 5, xs: 3 },
          py: o ? 0 : { xs: 2 },
          component: "form",
          onSubmit: f(v),
          children: [
            /* @__PURE__ */ y(Oe, { width: "100%", children: e }),
            /* @__PURE__ */ y(
              Oe,
              {
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                justifyContent: { md: "left", xs: "center" },
                rowGap: 2,
                width: "100%",
                children: a.map(($) => C($))
              }
            ),
            /* @__PURE__ */ y(Et, { disabled: c, type: "submit", variant: "primary", children: "Submit" })
          ]
        }
      )
    }
  );
  return o ? x : /* @__PURE__ */ y(
    Ht,
    {
      className: `${r && "!bg-primary-main"} border-2 border-divider`,
      elevation: 1,
      children: x
    }
  );
}, Ll = ({
  children: e,
  headline: t,
  subAssetUrl: o,
  subline: r
}) => /* @__PURE__ */ se(Oe, { textAlign: { md: "left", xs: "center" }, children: [
  /* @__PURE__ */ y(qe, { mb: 2, variant: "body1", children: r }),
  /* @__PURE__ */ y(qe, { mb: e ? 4 : 0, variant: "h2", children: t }),
  e,
  o && /* @__PURE__ */ y(
    "img",
    {
      alt: "",
      className: "object-cover w-full h-auto pt-[48px] min-h-[240px]",
      height: 800,
      loading: "lazy",
      src: o,
      width: 800
    }
  )
] }), vi = ({
  children: e,
  excerpt: t,
  featuredImage: o,
  objectFit: r = "cover",
  title: i
}) => /* @__PURE__ */ se(
  Oe,
  {
    alignItems: "flex-end",
    className: "relative rounded-lg text-white overflow-hidden h-full min-h-[360px]",
    display: "flex",
    children: [
      /* @__PURE__ */ se(
        Oe,
        {
          alignItems: "center",
          className: "bg-common-black bg-opacity-80 w-full text-center z-10",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          p: 2,
          children: [
            /* @__PURE__ */ y(
              qe,
              {
                className: "line-clamp-2 !text-white",
                component: "h3",
                dangerouslySetInnerHTML: { __html: i ?? "" },
                mb: t ? 0 : 1,
                variant: "h4"
              }
            ),
            t && /* @__PURE__ */ y(
              qe,
              {
                className: "line-clamp-3",
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
      o && /* @__PURE__ */ y(
        "img",
        {
          alt: "",
          className: `w-full h-full absolute inset-0 ${r === "cover" ? "object-cover" : "object-contain"} object-top`,
          height: 1e3,
          loading: "lazy",
          src: o,
          width: 1e3
        }
      )
    ]
  }
), Zy = ({
  products: e,
  submitForm: t,
  formId: o,
  children: r,
  getForm: i
}) => {
  const [s, a] = Ae(!1);
  return s ? /* @__PURE__ */ se(xn, { children: [
    /* @__PURE__ */ y(
      Ll,
      {
        headline: "Exclusively access all relevant data about our 3D Scanners below.",
        subline: "Download Area"
      }
    ),
    /* @__PURE__ */ y(Re, { spacing: { lg: 5, md: 3, xs: 2 }, mt: 6, container: !0, children: e.map((l, c) => {
      const { datasheet: u, picture: d } = l.acf ?? {};
      return /* @__PURE__ */ y(Re, { lg: 4, md: 6, xs: 12, item: !0, children: /* @__PURE__ */ y(
        vi,
        {
          excerpt: l.excerpt.rendered,
          featuredImage: d,
          objectFit: "contain",
          title: l.title.rendered,
          children: /* @__PURE__ */ y(Et, { href: u, variant: "secondary", children: "Download Data Sheet" })
        }
      ) }, c);
    }) })
  ] }) : /* @__PURE__ */ y(
    jl,
    {
      formId: o,
      submitForm: async (l, c) => {
        a(!0), t(l, c);
      },
      getForm: i,
      children: r
    }
  );
}, $v = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(Zy, { ...e }) }), Nv = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(jl, { ...e }) }), Qy = ({ children: e, transparent: t = !0 }) => /* @__PURE__ */ y(
  Oe,
  {
    columnGap: { md: 2, xs: 0 },
    justifyContent: "center",
    mx: "auto",
    px: 3,
    display: "flex",
    rowGap: { md: 0, xs: 2 },
    height: { md: 420, xs: 320 },
    bgcolor: t ? "transparent" : "grey.100",
    borderRadius: 1,
    flexDirection: { xs: "column", md: "row" },
    children: e
  }
), _v = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(Qy, { ...e }) }), ev = ({
  alt: e,
  bgColor: t = "grey.100",
  children: o,
  imgUrl: r
}) => /* @__PURE__ */ y(Oe, { bgcolor: t, py: { md: 10, xs: 5 }, children: /* @__PURE__ */ se(Re, { alignItems: "center", maxWidth: "xl", mx: "auto", px: 3, container: !0, children: [
  /* @__PURE__ */ y(Re, { md: 1, xs: 0 }),
  /* @__PURE__ */ y(Re, { md: 5, xs: 12, item: !0, children: /* @__PURE__ */ y(
    "img",
    {
      alt: e ?? "",
      className: "rounded-xl",
      height: 304,
      loading: "lazy",
      src: r,
      width: 493
    }
  ) }),
  /* @__PURE__ */ y(Re, { md: 1, xs: 0 }),
  /* @__PURE__ */ y(Re, { md: 4, mt: { md: 0, xs: 2 }, xs: 12, item: !0, children: o }),
  /* @__PURE__ */ y(Re, { md: 1, xs: 0 })
] }) }), Iv = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(ev, { ...e }) });
var Dn = {}, wr = {};
const tv = /* @__PURE__ */ Rt(zp);
var Xs;
function nv() {
  return Xs || (Xs = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = tv;
  }(wr)), wr;
}
var Js;
function ov() {
  if (Js) return Dn;
  Js = 1;
  var e = ri();
  Object.defineProperty(Dn, "__esModule", {
    value: !0
  }), Dn.default = void 0;
  var t = e(/* @__PURE__ */ nv()), o = Zs;
  return Dn.default = (0, t.default)(/* @__PURE__ */ (0, o.jsx)("path", {
    d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"
  }), "ArrowForwardIos"), Dn;
}
var rv = /* @__PURE__ */ ov();
const iv = /* @__PURE__ */ Wr(rv), Bl = ({ children: e, headline: t }) => /* @__PURE__ */ se(
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
      /* @__PURE__ */ y(Re, { md: 6, mt: 0.5, pr: 4, xs: 12, item: !0, children: /* @__PURE__ */ y(qe, { component: "h3", mb: 2, variant: "h4", children: t }) }),
      /* @__PURE__ */ y(Re, { md: 6, xs: 12, item: !0, children: e })
    ]
  }
), sv = ({ excerpt: e, id: t, title: o }) => /* @__PURE__ */ y(Bl, { headline: o, children: /* @__PURE__ */ se(
  Oe,
  {
    alignItems: "center",
    display: "flex",
    flexDirection: { md: "row", xs: "column" },
    justifyContent: "space-between",
    rowGap: { md: 0, xs: 2 },
    children: [
      /* @__PURE__ */ y(
        qe,
        {
          component: "div",
          dangerouslySetInnerHTML: { __html: e }
        }
      ),
      /* @__PURE__ */ y(Et, { href: `/about/careers/${t}`, variant: "primary", children: /* @__PURE__ */ y(iv, {}) })
    ]
  }
) }), av = ({ jobs: e }) => e.map(({ excerpt: t, id: o, title: r }) => /* @__PURE__ */ y(Oe, { display: "flex", children: /* @__PURE__ */ y(sv, { excerpt: t.rendered, id: o, title: r.rendered }) }, o)), kv = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(av, { ...e }) }), Ao = (e) => {
  var r, i, s, a;
  const t = (i = (r = e == null ? void 0 : e._embedded) == null ? void 0 : r["wp:featuredmedia"]) == null ? void 0 : i[0], o = (s = t == null ? void 0 : t.media_details) == null ? void 0 : s.sizes;
  return ((a = o == null ? void 0 : o.large) == null ? void 0 : a.source_url) ?? "/img/404.webp";
}, zl = ({
  headline: e,
  sublineElement: t,
  children: o
}) => /* @__PURE__ */ se(Oe, { textAlign: { md: "left", xs: "center" }, children: [
  /* @__PURE__ */ y(qe, { variant: "h2", children: e }),
  an(t) ? t : /* @__PURE__ */ y(
    qe,
    {
      component: "div",
      dangerouslySetInnerHTML: { __html: t ?? "" },
      mb: { sm: 2, xs: 3 },
      mt: { sm: 0.5, xs: 1 },
      variant: "body1"
    }
  ),
  !!o && /* @__PURE__ */ y(
    Oe,
    {
      display: "flex",
      gap: 2,
      alignItems: { md: "left", xs: "center" },
      flexDirection: { md: "row", xs: "column" },
      children: o
    }
  )
] }), xi = ({
  banner: e = !1,
  children: t,
  bgcolor: o = "white",
  pb: r,
  pt: i,
  mb: s,
  mt: a,
  py: l,
  ...c
}) => /* @__PURE__ */ y(Oe, { bgcolor: o, pb: r, pt: i, mt: a, mb: s, py: l, children: /* @__PURE__ */ y(rl, { maxWidth: "xl", children: /* @__PURE__ */ y(Re, { md: 10, mx: "auto", xs: 12, container: !0, ...c, children: /* @__PURE__ */ y(
  Re,
  {
    md: e ? 7 : void 0,
    ml: e ? "auto" : void 0,
    mx: e ? void 0 : "auto",
    textAlign: { md: "left", xs: "center" },
    xl: e ? 6 : void 0,
    xs: 12,
    item: !0,
    children: t
  }
) }) }) }), lv = ({ imagesUrls: e }) => {
  var c;
  const t = xo(null), [o, r] = Ae([]), [i, s] = Ae(0), [a, l] = Ae(!1);
  return Ct(() => {
    (async () => {
      const d = (f) => new Promise((T, g) => {
        const p = new Image();
        p.src = f, p.onload = () => T(p), p.onerror = () => g("broken");
      }), h = [];
      for (const f of [...e ?? []].sort(
        (T, g) => T.localeCompare(g)
      )) {
        const T = d(f);
        h.push(T);
      }
      r(await Promise.all(h)), l(!0);
    })().finally(() => console.log("done"));
  }, [e]), Ct(() => {
    const u = () => {
      var T, g;
      if (!a) return;
      const d = (T = t.current) == null ? void 0 : T.getBoundingClientRect();
      if (!d || !t.current) return;
      const h = Math.min(
        Math.abs(Math.min(0, d.top)) / (((g = t.current) == null ? void 0 : g.clientHeight) - window.innerHeight),
        1
      ), f = Math.floor(h * (o.length - 1));
      o[f] && s(f);
    };
    return window.addEventListener("scroll", u), () => window.removeEventListener("scroll", u);
  }, [o, e, a]), /* @__PURE__ */ y(Oe, { height: a ? "300vh" : "100vh", children: /* @__PURE__ */ y("div", { className: "h-full relative", ref: t, children: /* @__PURE__ */ y("div", { className: "w-full h-[100vh] xs:min-h-[1024px] md:min-h-[768px] lg:min-h-[800px] sticky top-0", children: a ? /* @__PURE__ */ y(
    "img",
    {
      alt: `frame_${i + 1}`,
      className: "w-full h-full object-cover",
      loading: "lazy",
      src: (c = o == null ? void 0 : o[i]) == null ? void 0 : c.src
    }
  ) : /* @__PURE__ */ y(Yn, { height: "100%", variant: "rectangular" }) }) }) });
}, cv = ({
  children: e,
  imagesUrls: t
}) => /* @__PURE__ */ se(xn, { children: [
  /* @__PURE__ */ y(lv, { imagesUrls: t }),
  /* @__PURE__ */ y(Oe, { children: /* @__PURE__ */ y(xi, { children: e }) })
] }), uv = "/download-area", dv = ({
  products: e,
  scrollable: t = !1
}) => e == null ? void 0 : e.map((o, r) => {
  var c;
  if (!(o != null && o.acf)) return null;
  const i = ((c = o.acf.photo_gallery) == null ? void 0 : c.animation.flat().map((u) => u.full_image_url)) ?? [], { picture: s } = o.acf ?? {}, a = i.length > 9, l = /* @__PURE__ */ y(xi, { py: { md: 10, xs: 5 }, children: /* @__PURE__ */ se(
    zl,
    {
      headline: o.acf["full-name"] || o.title.rendered,
      sublineElement: o.excerpt.rendered,
      children: [
        /* @__PURE__ */ se(Et, { href: `/products/${o.slug}`, variant: "primary", children: [
          "Explore ",
          o.acf["short-name"] || o.title.rendered
        ] }),
        /* @__PURE__ */ y(
          Et,
          {
            href: `${o.acf["download-link"] || uv}?default=${o.title.rendered}`,
            variant: "secondary",
            children: "Download Data Sheet"
          }
        )
      ]
    }
  ) });
  return a && t ? /* @__PURE__ */ y(
    cv,
    {
      imagesUrls: i,
      children: l
    },
    `${o.id}_${r + 1}`
  ) : /* @__PURE__ */ se(ql, { children: [
    /* @__PURE__ */ y(
      Mo,
      {
        assetUrl: t ? i[0] ?? Ao(o) : s,
        containerClassName: "block md:hidden",
        objectFit: "cover"
      }
    ),
    /* @__PURE__ */ y(
      Mo,
      {
        assetUrl: t ? i[0] ?? Ao(o) : s,
        containerClassName: "hidden md:block",
        objectFit: "contain"
      }
    ),
    l
  ] }, `${o.id}_${r + 1}`);
}), Mv = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(dv, { ...e }) }), Av = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(Ll, { ...e }) }), Dv = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(Mo, { ...e }) }), Fv = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(xi, { ...e }) }), pv = ({ people: e }) => /* @__PURE__ */ y(Re, { spacing: { lg: 5, md: 3, xs: 2 }, xs: 12, container: !0, children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ y(Re, { lg: 4, md: 6, xs: 12, item: !0, children: /* @__PURE__ */ y(
  vi,
  {
    excerpt: t.excerpt.rendered,
    featuredImage: Ao(t),
    title: t.title.rendered
  }
) }, t.id)) }), jv = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(pv, { ...e }) }), fv = ({ count: e = 12 }) => Array(e).fill(null).map((t, o) => /* @__PURE__ */ y(Re, { lg: 4, md: 6, xs: 12, item: !0, children: /* @__PURE__ */ y(Yn, { height: 360, variant: "rounded" }) }, o)), mv = ({
  count: e,
  perPage: t,
  setPage: o
}) => {
  const { breakpoints: r } = lt(), i = Sa(r.down("xl"));
  return /* @__PURE__ */ y(Oe, { children: /* @__PURE__ */ y(
    wl,
    {
      renderItem: ({ disabled: s, onClick: a, page: l, selected: c, type: u }) => {
        const d = {
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
            onClick: () => o((l ?? 1) + 1)
          },
          page: {
            buttonText: `${l}`,
            onClick: a
          },
          previous: {
            buttonText: "<",
            onClick: () => o((l ?? 1) - 1)
          },
          "start-ellipsis": {
            buttonText: "..."
          }
        };
        return u !== "page" ? /* @__PURE__ */ y(Et, { disabled: s, onClick: a, variant: "secondary", children: d[u].buttonText }) : /* @__PURE__ */ y(
          Et,
          {
            disabled: s,
            onClick: a,
            variant: c ? "primary" : "secondary",
            children: l
          }
        );
      },
      boundaryCount: i ? 0 : 1,
      color: "primary",
      count: e,
      onChange: (s, a) => o(a),
      shape: "rounded",
      siblingCount: i ? 0 : 1,
      variant: "outlined"
    }
  ) });
}, hv = ({
  hidePagination: e = !1,
  list: t = !1,
  perPage: o = 12,
  getPosts: r
}) => {
  const [i, s] = Ae(!0), [a, l] = Ae(1), [c, u] = Ae(0), [d, h] = Ae([]);
  return Ct(() => {
    s(!0), r(a, o).then(({ count: f, data: T }) => {
      h(T), u(f);
    }).finally(() => s(!1));
  }, [a, o]), /* @__PURE__ */ se(Re, { spacing: { lg: 5, md: 3, xs: 2 }, container: !0, children: [
    i ? /* @__PURE__ */ y(fv, { count: o }) : d.map((f) => /* @__PURE__ */ y(
      Re,
      {
        lg: t ? 12 : 4,
        md: t ? 12 : 6,
        xs: 12,
        item: !0,
        children: /* @__PURE__ */ y(
          vi,
          {
            featuredImage: Ao(f),
            title: f.title.rendered,
            children: /* @__PURE__ */ y(
              Et,
              {
                href: `/3d-academy/${f.slug}`,
                target: "_blank",
                variant: "secondary",
                children: "Read Full Article"
              }
            )
          }
        )
      },
      f.id
    )),
    !e && /* @__PURE__ */ y(Re, { mx: "auto", xs: 12, item: !0, children: /* @__PURE__ */ y(mv, { count: c, perPage: o, setPage: l }) })
  ] });
}, Lv = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(hv, { ...e }) }), bv = ({
  defaultProductName: e,
  onChange: t,
  getProducts: o
}) => {
  const [r, i] = Ae(), [s, a] = Ae(""), l = Hl(
    () => (r == null ? void 0 : r.map((c) => c.title.rendered)) ?? [],
    [r]
  );
  return Ct(() => {
    o().then(({ data: c }) => {
      i(c);
    });
  }, []), Ct(() => {
    const c = e ?? (l == null ? void 0 : l[0]) ?? "";
    a(c), t(c);
  }, [e, l]), /* @__PURE__ */ y(Oe, { children: /* @__PURE__ */ y(Vy, { label: s, variant: "topic", children: /* @__PURE__ */ y(pl, { sx: { px: 2, py: 1 }, children: l.map((c, u) => /* @__PURE__ */ y(
    dl,
    {
      control: /* @__PURE__ */ y(ol, { checked: s === c }),
      label: c,
      onChange: () => {
        a(c), t(c);
      }
    },
    u
  )) }) }) });
}, Bv = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(bv, { ...e }) }), zv = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(zl, { ...e }) }), Vv = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(Ml, { ...e }) }), Wv = (e) => /* @__PURE__ */ y(ze, { children: /* @__PURE__ */ y(Bl, { ...e }) }), gv = (e) => `${e}/wp-json/wp/v2`, yv = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
}, Uv = (e) => async () => {
  var o;
  const t = await fetch(
    `${gv(e)}/product?&per_page=100&acf_format=standard`,
    yv
  );
  try {
    const r = await t.json(), i = Number(t.headers.get("X-WP-TotalPages")) ?? 1;
    return (o = r == null ? void 0 : r.data) != null && o.status ? { count: 0, data: [] } : { count: i, data: r };
  } catch {
    return { count: 0, data: [] };
  }
}, qv = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
}, Hv = ({ src: e }) => /* @__PURE__ */ y(
  "iframe",
  {
    allow: "autoplay; fullscreen; xr-spatial-tracking",
    "execution-while-not-rendered": "true",
    "execution-while-out-of-viewport": "true",
    height: "100%",
    loading: "lazy",
    src: e,
    "web-share": "true",
    width: "100%",
    "xr-spatial-tracking": "true"
  }
), Gv = ({ alt: e, href: t }) => /* @__PURE__ */ se(Oe, { position: "relative", children: [
  /* @__PURE__ */ y(
    "img",
    {
      alt: e,
      height: 32,
      loading: "lazy",
      src: `/link_${e}.svg`,
      width: 32
    }
  ),
  /* @__PURE__ */ y(
    "a",
    {
      className: "absolute inset-0 opacity-0 hover:opacity-100",
      href: t,
      target: "_blank",
      children: /* @__PURE__ */ y(
        "img",
        {
          alt: e,
          height: 32,
          loading: "lazy",
          src: `/white_link_${e}.svg`,
          width: 32
        }
      )
    }
  )
] }), Yv = ({ name: e, src: t }) => /* @__PURE__ */ y(
  "img",
  {
    alt: e,
    className: "object-contain flex-shrink-0",
    height: 80,
    loading: "lazy",
    src: t,
    width: 168
  }
), Kv = ({ children: e }) => /* @__PURE__ */ y(
  Oe,
  {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "xl",
    mx: "auto",
    my: { md: 10, xs: 8 },
    px: { md: 8, xs: 4 },
    children: e
  }
), vv = W("main")(({ theme: e }) => ({
  h1: {
    ...e.typography.h1
  },
  h2: {
    ...e.typography.h2
  },
  h3: {
    ...e.typography.h3
  },
  h4: {
    ...e.typography.h4
  },
  h5: {
    ...e.typography.h5
  }
})), Xv = W(vv)(({ theme: e }) => {
  const t = {
    marginBottom: e.spacing(3),
    marginTop: e.spacing(3),
    [e.breakpoints.down("md")]: {
      marginBottom: e.spacing(2),
      marginTop: e.spacing(2)
    }
  };
  return {
    "div.MuiTypography-root *": {
      marginBottom: 0,
      marginTop: 0
    },
    "h1, h2, h3, h4, h5": {
      "&:not(.MuiTypography-root)": t
    },
    hr: {
      borderColor: e.palette.info.main,
      borderTopWidth: 1,
      marginBottom: e.spacing(5)
    },
    p: {
      ...e.typography.body1,
      ...t
    },
    [e.breakpoints.down("md")]: {
      textAlign: "center"
    }
  };
});
export {
  hf as Accordion,
  Mf as AccordionSummary,
  Jf as AppBar,
  Ty as Banner,
  Oe as Box,
  Et as Button,
  rl as Container,
  Zy as DownloadAreaContent,
  gh as Drawer,
  jl as DynamicForm,
  Qy as Gallery,
  ev as GalleryTile,
  Re as Grid,
  Bf as IconButton,
  Gv as IconLink,
  Hv as Iframe,
  fi as InputLabel,
  sv as Job,
  av as Jobs,
  Xv as LegacyPostContainer,
  bl as List,
  Mb as ListItem,
  Cb as ListItemButton,
  fv as LoadingSkeletons,
  Ll as MainBlock,
  Mo as MediaBlock,
  Vy as Menu,
  zy as MenuItem,
  xi as PageContainer,
  mv as Pagination,
  Ht as Paper,
  Yv as PartnerLogo,
  Kv as PartnerLogoContainer,
  pv as People,
  vi as Post,
  hv as Posts,
  dv as ProductsList,
  bv as ProductsTopic,
  cv as ScrollableBlock,
  zl as SecondaryBlock,
  Yn as Skeleton,
  Ml as SkeletonVideo,
  wv as SnackbarProvider,
  Sv as StandaloneBanner,
  Pv as StandaloneButton,
  $v as StandaloneDownloadAreaContent,
  Nv as StandaloneDynamicForm,
  _v as StandaloneGallery,
  Iv as StandaloneGalleryTile,
  kv as StandaloneJobs,
  Av as StandaloneMainBlock,
  Dv as StandaloneMediaBlock,
  Fv as StandalonePageContainer,
  jv as StandalonePeople,
  Lv as StandalonePosts,
  Mv as StandaloneProductsList,
  Bv as StandaloneProductsTopic,
  zv as StandaloneSecondaryBlock,
  Vv as StandaloneSkeletonVideo,
  Wv as StandaloneTile,
  _l as TextField,
  ze as ThemeRegistry,
  vv as ThemedContainer,
  Bl as Tile,
  cy as Toolbar,
  qe as Typography,
  Cy as getComponents,
  Ao as getFeaturedImageUrl,
  Uv as getProductsFunction,
  bt as palette,
  qv as requestInit,
  pn as theme,
  Oy as typography,
  Sa as useMediaQuery,
  lt as useTheme
};
