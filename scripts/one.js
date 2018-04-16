/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.dat = t() }(this, function () { "use strict"; function e(e, t) { var n = e.__state.conversionName.toString(), o = Math.round(e.r), i = Math.round(e.g), r = Math.round(e.b), s = e.a, a = Math.round(e.h), l = e.s.toFixed(1), d = e.v.toFixed(1); if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) { for (var c = e.hex.toString(16); c.length < 6;)c = "0" + c; return "#" + c } return "CSS_RGB" === n ? "rgb(" + o + "," + i + "," + r + ")" : "CSS_RGBA" === n ? "rgba(" + o + "," + i + "," + r + "," + s + ")" : "HEX" === n ? "0x" + e.hex.toString(16) : "RGB_ARRAY" === n ? "[" + o + "," + i + "," + r + "]" : "RGBA_ARRAY" === n ? "[" + o + "," + i + "," + r + "," + s + "]" : "RGB_OBJ" === n ? "{r:" + o + ",g:" + i + ",b:" + r + "}" : "RGBA_OBJ" === n ? "{r:" + o + ",g:" + i + ",b:" + r + ",a:" + s + "}" : "HSV_OBJ" === n ? "{h:" + a + ",s:" + l + ",v:" + d + "}" : "HSVA_OBJ" === n ? "{h:" + a + ",s:" + l + ",v:" + d + ",a:" + s + "}" : "unknown format" } function t(e, t, n) { Object.defineProperty(e, t, { get: function () { return "RGB" === this.__state.space ? this.__state[t] : (V.recalculateRGB(this, t, n), this.__state[t]) }, set: function (e) { "RGB" !== this.__state.space && (V.recalculateRGB(this, t, n), this.__state.space = "RGB"), this.__state[t] = e } }) } function n(e, t) { Object.defineProperty(e, t, { get: function () { return "HSV" === this.__state.space ? this.__state[t] : (V.recalculateHSV(this), this.__state[t]) }, set: function (e) { "HSV" !== this.__state.space && (V.recalculateHSV(this), this.__state.space = "HSV"), this.__state[t] = e } }) } function o(e) { if ("0" === e || k.isUndefined(e)) return 0; var t = e.match(G); return k.isNull(t) ? 0 : parseFloat(t[1]) } function i(e) { var t = e.toString(); return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0 } function r(e, t) { var n = Math.pow(10, t); return Math.round(e * n) / n } function s(e, t, n, o, i) { return o + (e - t) / (n - t) * (i - o) } function a(e, t, n, o) { e.style.background = "", k.each($, function (i) { e.style.cssText += "background: " + i + "linear-gradient(" + t + ", " + n + " 0%, " + o + " 100%); " }) } function l(e) { e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);" } function d(e, t, n) { var o = document.createElement("li"); return t && o.appendChild(t), n ? e.__ul.insertBefore(o, n) : e.__ul.appendChild(o), e.onResize(), o } function c(e) { U.unbind(window, "resize", e.__resizeHandler), e.saveToLocalStorageIfPossible && U.unbind(window, "unload", e.saveToLocalStorageIfPossible) } function u(e, t) { var n = e.__preset_select[e.__preset_select.selectedIndex]; n.innerHTML = t ? n.value + "*" : n.value } function _(e, t, n) { if (n.__li = t, n.__gui = e, k.extend(n, { options: function (t) { if (arguments.length > 1) { var o = n.__li.nextElementSibling; return n.remove(), p(e, n.object, n.property, { before: o, factoryArgs: [k.toArray(arguments)] }) } if (k.isArray(t) || k.isObject(t)) { var i = n.__li.nextElementSibling; return n.remove(), p(e, n.object, n.property, { before: i, factoryArgs: [t] }) } }, name: function (e) { return n.__li.firstElementChild.firstElementChild.innerHTML = e, n }, listen: function () { return n.__gui.listen(n), n }, remove: function () { return n.__gui.remove(n), n } }), n instanceof Q) { var o = new W(n.object, n.property, { min: n.__min, max: n.__max, step: n.__step }); k.each(["updateDisplay", "onChange", "onFinishChange", "step"], function (e) { var t = n[e], i = o[e]; n[e] = o[e] = function () { var e = Array.prototype.slice.call(arguments); return i.apply(o, e), t.apply(n, e) } }), U.addClass(t, "has-slider"), n.domElement.insertBefore(o.domElement, n.domElement.firstElementChild) } else if (n instanceof W) { var i = function (t) { if (k.isNumber(n.__min) && k.isNumber(n.__max)) { var o = n.__li.firstElementChild.firstElementChild.innerHTML, i = n.__gui.__listening.indexOf(n) > -1; n.remove(); var r = p(e, n.object, n.property, { before: n.__li.nextElementSibling, factoryArgs: [n.__min, n.__max, n.__step] }); return r.name(o), i && r.listen(), r } return t }; n.min = k.compose(i, n.min), n.max = k.compose(i, n.max) } else n instanceof X ? (U.bind(t, "click", function () { U.fakeEvent(n.__checkbox, "click") }), U.bind(n.__checkbox, "click", function (e) { e.stopPropagation() })) : n instanceof q ? (U.bind(t, "click", function () { U.fakeEvent(n.__button, "click") }), U.bind(t, "mouseover", function () { U.addClass(n.__button, "hover") }), U.bind(t, "mouseout", function () { U.removeClass(n.__button, "hover") })) : n instanceof Z && (U.addClass(t, "color"), n.updateDisplay = k.compose(function (e) { return t.style.borderLeftColor = n.__color.toString(), e }, n.updateDisplay), n.updateDisplay()); n.setValue = k.compose(function (t) { return e.getRoot().__preset_select && n.isModified() && u(e.getRoot(), !0), t }, n.setValue) } function h(e, t) { var n = e.getRoot(), o = n.__rememberedObjects.indexOf(t.object); if (-1 !== o) { var i = n.__rememberedObjectIndecesToControllers[o]; if (void 0 === i && (i = {}, n.__rememberedObjectIndecesToControllers[o] = i), i[t.property] = t, n.load && n.load.remembered) { var r = n.load.remembered, s = void 0; if (r[e.preset]) s = r[e.preset]; else { if (!r[re]) return; s = r[re] } if (s[o] && void 0 !== s[o][t.property]) { var a = s[o][t.property]; t.initialValue = a, t.setValue(a) } } } } function p(e, t, n, o) { if (void 0 === t[n]) throw new Error('Object "' + t + '" has no property "' + n + '"'); var i = void 0; if (o.color) i = new Z(t, n); else { var r = [t, n].concat(o.factoryArgs); i = te.apply(e, r) } o.before instanceof I && (o.before = o.before.__li), h(e, i), U.addClass(i.domElement, "c"); var s = document.createElement("span"); U.addClass(s, "property-name"), s.innerHTML = i.property; var a = document.createElement("div"); a.appendChild(s), a.appendChild(i.domElement); var l = d(e, a, o.before); return U.addClass(l, _e.CLASS_CONTROLLER_ROW), i instanceof Z ? U.addClass(l, "color") : U.addClass(l, N(i.getValue())), _(e, l, i), e.__controllers.push(i), i } function f(e, t) { return document.location.href + "." + t } function m(e, t, n) { var o = document.createElement("option"); o.innerHTML = t, o.value = t, e.__preset_select.appendChild(o), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1) } function g(e, t) { t.style.display = e.useLocalStorage ? "block" : "none" } function b(e) { var t = e.__save_row = document.createElement("li"); U.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), U.addClass(t, "save-row"); var n = document.createElement("span"); n.innerHTML = "&nbsp;", U.addClass(n, "button gears"); var o = document.createElement("span"); o.innerHTML = "Save", U.addClass(o, "button"), U.addClass(o, "save"); var i = document.createElement("span"); i.innerHTML = "New", U.addClass(i, "button"), U.addClass(i, "save-as"); var r = document.createElement("span"); r.innerHTML = "Revert", U.addClass(r, "button"), U.addClass(r, "revert"); var s = e.__preset_select = document.createElement("select"); if (e.load && e.load.remembered ? k.each(e.load.remembered, function (t, n) { m(e, n, n === e.preset) }) : m(e, re, !1), U.bind(s, "change", function () { for (var t = 0; t < e.__preset_select.length; t++)e.__preset_select[t].innerHTML = e.__preset_select[t].value; e.preset = this.value }), t.appendChild(s), t.appendChild(n), t.appendChild(o), t.appendChild(i), t.appendChild(r), se) { var a = document.getElementById("dg-local-explain"), l = document.getElementById("dg-local-storage"); document.getElementById("dg-save-locally").style.display = "block", "true" === localStorage.getItem(f(e, "isLocal")) && l.setAttribute("checked", "checked"), g(e, a), U.bind(l, "change", function () { e.useLocalStorage = !e.useLocalStorage, g(e, a) }) } var d = document.getElementById("dg-new-constructor"); U.bind(d, "keydown", function (e) { !e.metaKey || 67 !== e.which && 67 !== e.keyCode || ae.hide() }), U.bind(n, "click", function () { d.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), ae.show(), d.focus(), d.select() }), U.bind(o, "click", function () { e.save() }), U.bind(i, "click", function () { var t = prompt("Enter a new preset name."); t && e.saveAs(t) }), U.bind(r, "click", function () { e.revert() }) } function v(e) { function t(t) { return t.preventDefault(), e.width += i - t.clientX, e.onResize(), i = t.clientX, !1 } function n() { U.removeClass(e.__closeButton, _e.CLASS_DRAG), U.unbind(window, "mousemove", t), U.unbind(window, "mouseup", n) } function o(o) { return o.preventDefault(), i = o.clientX, U.addClass(e.__closeButton, _e.CLASS_DRAG), U.bind(window, "mousemove", t), U.bind(window, "mouseup", n), !1 } var i = void 0; e.__resize_handle = document.createElement("div"), k.extend(e.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" }), U.bind(e.__resize_handle, "mousedown", o), U.bind(e.__closeButton, "mousedown", o), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild) } function y(e, t) { e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px") } function w(e, t) { var n = {}; return k.each(e.__rememberedObjects, function (o, i) { var r = {}, s = e.__rememberedObjectIndecesToControllers[i]; k.each(s, function (e, n) { r[n] = t ? e.initialValue : e.getValue() }), n[i] = r }), n } function x(e) { for (var t = 0; t < e.__preset_select.length; t++)e.__preset_select[t].value === e.preset && (e.__preset_select.selectedIndex = t) } function E(e) { 0 !== e.length && ne.call(window, function () { E(e) }), k.each(e, function (e) { e.updateDisplay() }) } var C = Array.prototype.forEach, A = Array.prototype.slice, k = { BREAK: {}, extend: function (e) { return this.each(A.call(arguments, 1), function (t) { (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) { this.isUndefined(t[n]) || (e[n] = t[n]) }.bind(this)) }, this), e }, defaults: function (e) { return this.each(A.call(arguments, 1), function (t) { (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) { this.isUndefined(e[n]) && (e[n] = t[n]) }.bind(this)) }, this), e }, compose: function () { var e = A.call(arguments); return function () { for (var t = A.call(arguments), n = e.length - 1; n >= 0; n--)t = [e[n].apply(this, t)]; return t[0] } }, each: function (e, t, n) { if (e) if (C && e.forEach && e.forEach === C) e.forEach(t, n); else if (e.length === e.length + 0) { var o = void 0, i = void 0; for (o = 0, i = e.length; o < i; o++)if (o in e && t.call(n, e[o], o) === this.BREAK) return } else for (var r in e) if (t.call(n, e[r], r) === this.BREAK) return }, defer: function (e) { setTimeout(e, 0) }, debounce: function (e, t, n) { var o = void 0; return function () { var i = this, r = arguments, s = n || !o; clearTimeout(o), o = setTimeout(function () { o = null, n || e.apply(i, r) }, t), s && e.apply(i, r) } }, toArray: function (e) { return e.toArray ? e.toArray() : A.call(e) }, isUndefined: function (e) { return void 0 === e }, isNull: function (e) { return null === e }, isNaN: function (e) { function t(t) { return e.apply(this, arguments) } return t.toString = function () { return e.toString() }, t }(function (e) { return isNaN(e) }), isArray: Array.isArray || function (e) { return e.constructor === Array }, isObject: function (e) { return e === Object(e) }, isNumber: function (e) { return e === e + 0 }, isString: function (e) { return e === e + "" }, isBoolean: function (e) { return !1 === e || !0 === e }, isFunction: function (e) { return "[object Function]" === Object.prototype.toString.call(e) } }, S = [{ litmus: k.isString, conversions: { THREE_CHAR_HEX: { read: function (e) { var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i); return null !== t && { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0) } }, write: e }, SIX_CHAR_HEX: { read: function (e) { var t = e.match(/^#([A-F0-9]{6})$/i); return null !== t && { space: "HEX", hex: parseInt("0x" + t[1].toString(), 0) } }, write: e }, CSS_RGB: { read: function (e) { var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/); return null !== t && { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) } }, write: e }, CSS_RGBA: { read: function (e) { var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/); return null !== t && { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) } }, write: e } } }, { litmus: k.isNumber, conversions: { HEX: { read: function (e) { return { space: "HEX", hex: e, conversionName: "HEX" } }, write: function (e) { return e.hex } } } }, { litmus: k.isArray, conversions: { RGB_ARRAY: { read: function (e) { return 3 === e.length && { space: "RGB", r: e[0], g: e[1], b: e[2] } }, write: function (e) { return [e.r, e.g, e.b] } }, RGBA_ARRAY: { read: function (e) { return 4 === e.length && { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] } }, write: function (e) { return [e.r, e.g, e.b, e.a] } } } }, { litmus: k.isObject, conversions: { RGBA_OBJ: { read: function (e) { return !!(k.isNumber(e.r) && k.isNumber(e.g) && k.isNumber(e.b) && k.isNumber(e.a)) && { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a } }, write: function (e) { return { r: e.r, g: e.g, b: e.b, a: e.a } } }, RGB_OBJ: { read: function (e) { return !!(k.isNumber(e.r) && k.isNumber(e.g) && k.isNumber(e.b)) && { space: "RGB", r: e.r, g: e.g, b: e.b } }, write: function (e) { return { r: e.r, g: e.g, b: e.b } } }, HSVA_OBJ: { read: function (e) { return !!(k.isNumber(e.h) && k.isNumber(e.s) && k.isNumber(e.v) && k.isNumber(e.a)) && { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a } }, write: function (e) { return { h: e.h, s: e.s, v: e.v, a: e.a } } }, HSV_OBJ: { read: function (e) { return !!(k.isNumber(e.h) && k.isNumber(e.s) && k.isNumber(e.v)) && { space: "HSV", h: e.h, s: e.s, v: e.v } }, write: function (e) { return { h: e.h, s: e.s, v: e.v } } } } }], O = void 0, T = void 0, R = function () { T = !1; var e = arguments.length > 1 ? k.toArray(arguments) : arguments[0]; return k.each(S, function (t) { if (t.litmus(e)) return k.each(t.conversions, function (t, n) { if (O = t.read(e), !1 === T && !1 !== O) return T = O, O.conversionName = n, O.conversion = t, k.BREAK }), k.BREAK }), T }, L = void 0, B = { hsv_to_rgb: function (e, t, n) { var o = Math.floor(e / 60) % 6, i = e / 60 - Math.floor(e / 60), r = n * (1 - t), s = n * (1 - i * t), a = n * (1 - (1 - i) * t), l = [[n, a, r], [s, n, r], [r, n, a], [r, s, n], [a, r, n], [n, r, s]][o]; return { r: 255 * l[0], g: 255 * l[1], b: 255 * l[2] } }, rgb_to_hsv: function (e, t, n) { var o = Math.min(e, t, n), i = Math.max(e, t, n), r = i - o, s = void 0, a = void 0; return 0 === i ? { h: NaN, s: 0, v: 0 } : (a = r / i, s = e === i ? (t - n) / r : t === i ? 2 + (n - e) / r : 4 + (e - t) / r, (s /= 6) < 0 && (s += 1), { h: 360 * s, s: a, v: i / 255 }) }, rgb_to_hex: function (e, t, n) { var o = this.hex_with_component(0, 2, e); return o = this.hex_with_component(o, 1, t), o = this.hex_with_component(o, 0, n) }, component_from_hex: function (e, t) { return e >> 8 * t & 255 }, hex_with_component: function (e, t, n) { return n << (L = 8 * t) | e & ~(255 << L) } }, N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, H = function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }, F = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } return function (t, n, o) { return n && e(t.prototype, n), o && e(t, o), t } }(), P = function e(t, n, o) { null === t && (t = Function.prototype); var i = Object.getOwnPropertyDescriptor(t, n); if (void 0 === i) { var r = Object.getPrototypeOf(t); return null === r ? void 0 : e(r, n, o) } if ("value" in i) return i.value; var s = i.get; if (void 0 !== s) return s.call(o) }, j = function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }, D = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }, V = function () { function t() { if (H(this, t), this.__state = R.apply(this, arguments), !1 === this.__state) throw new Error("Failed to interpret color arguments"); this.__state.a = this.__state.a || 1 } return F(t, [{ key: "toString", value: function () { return e(this) } }, { key: "toHexString", value: function () { return e(this, !0) } }, { key: "toOriginal", value: function () { return this.__state.conversion.write(this) } }]), t }(); V.recalculateRGB = function (e, t, n) { if ("HEX" === e.__state.space) e.__state[t] = B.component_from_hex(e.__state.hex, n); else { if ("HSV" !== e.__state.space) throw new Error("Corrupted color state"); k.extend(e.__state, B.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v)) } }, V.recalculateHSV = function (e) { var t = B.rgb_to_hsv(e.r, e.g, e.b); k.extend(e.__state, { s: t.s, v: t.v }), k.isNaN(t.h) ? k.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h }, V.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], t(V.prototype, "r", 2), t(V.prototype, "g", 1), t(V.prototype, "b", 0), n(V.prototype, "h"), n(V.prototype, "s"), n(V.prototype, "v"), Object.defineProperty(V.prototype, "a", { get: function () { return this.__state.a }, set: function (e) { this.__state.a = e } }), Object.defineProperty(V.prototype, "hex", { get: function () { return "HEX" !== !this.__state.space && (this.__state.hex = B.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex }, set: function (e) { this.__state.space = "HEX", this.__state.hex = e } }); var I = function () { function e(t, n) { H(this, e), this.initialValue = t[n], this.domElement = document.createElement("div"), this.object = t, this.property = n, this.__onChange = void 0, this.__onFinishChange = void 0 } return F(e, [{ key: "onChange", value: function (e) { return this.__onChange = e, this } }, { key: "onFinishChange", value: function (e) { return this.__onFinishChange = e, this } }, { key: "setValue", value: function (e) { return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this } }, { key: "getValue", value: function () { return this.object[this.property] } }, { key: "updateDisplay", value: function () { return this } }, { key: "isModified", value: function () { return this.initialValue !== this.getValue() } }]), e }(), z = { HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] }, M = {}; k.each(z, function (e, t) { k.each(e, function (e) { M[e] = t }) }); var G = /(\d+(\.\d+)?)px/, U = { makeSelectable: function (e, t) { void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function () { return !1 } : function () { }, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off") }, makeFullscreen: function (e, t, n) { var o = n, i = t; k.isUndefined(i) && (i = !0), k.isUndefined(o) && (o = !0), e.style.position = "absolute", i && (e.style.left = 0, e.style.right = 0), o && (e.style.top = 0, e.style.bottom = 0) }, fakeEvent: function (e, t, n, o) { var i = n || {}, r = M[t]; if (!r) throw new Error("Event type " + t + " not supported."); var s = document.createEvent(r); switch (r) { case "MouseEvents": var a = i.x || i.clientX || 0, l = i.y || i.clientY || 0; s.initMouseEvent(t, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, a, l, !1, !1, !1, !1, 0, null); break; case "KeyboardEvents": var d = s.initKeyboardEvent || s.initKeyEvent; k.defaults(i, { cancelable: !0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, keyCode: void 0, charCode: void 0 }), d(t, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode); break; default: s.initEvent(t, i.bubbles || !1, i.cancelable || !0) }k.defaults(s, o), e.dispatchEvent(s) }, bind: function (e, t, n, o) { var i = o || !1; return e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n), U }, unbind: function (e, t, n, o) { var i = o || !1; return e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n), U }, addClass: function (e, t) { if (void 0 === e.className) e.className = t; else if (e.className !== t) { var n = e.className.split(/ +/); -1 === n.indexOf(t) && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")) } return U }, removeClass: function (e, t) { if (t) if (e.className === t) e.removeAttribute("class"); else { var n = e.className.split(/ +/), o = n.indexOf(t); -1 !== o && (n.splice(o, 1), e.className = n.join(" ")) } else e.className = void 0; return U }, hasClass: function (e, t) { return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1 }, getWidth: function (e) { var t = getComputedStyle(e); return o(t["border-left-width"]) + o(t["border-right-width"]) + o(t["padding-left"]) + o(t["padding-right"]) + o(t.width) }, getHeight: function (e) { var t = getComputedStyle(e); return o(t["border-top-width"]) + o(t["border-bottom-width"]) + o(t["padding-top"]) + o(t["padding-bottom"]) + o(t.height) }, getOffset: function (e) { var t = e, n = { left: 0, top: 0 }; if (t.offsetParent) do { n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent } while (t); return n }, isActive: function (e) { return e === document.activeElement && (e.type || e.href) } }, X = function (e) { function t(e, n) { H(this, t); var o = D(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)), i = o; return o.__prev = o.getValue(), o.__checkbox = document.createElement("input"), o.__checkbox.setAttribute("type", "checkbox"), U.bind(o.__checkbox, "change", function () { i.setValue(!i.__prev) }, !1), o.domElement.appendChild(o.__checkbox), o.updateDisplay(), o } return j(t, I), F(t, [{ key: "setValue", value: function (e) { var n = P(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e); return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), n } }, { key: "updateDisplay", value: function () { return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), P(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this) } }]), t }(), K = function (e) { function t(e, n, o) { H(this, t); var i = D(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)), r = o, s = i; if (i.__select = document.createElement("select"), k.isArray(r)) { var a = {}; k.each(r, function (e) { a[e] = e }), r = a } return k.each(r, function (e, t) { var n = document.createElement("option"); n.innerHTML = t, n.setAttribute("value", e), s.__select.appendChild(n) }), i.updateDisplay(), U.bind(i.__select, "change", function () { var e = this.options[this.selectedIndex].value; s.setValue(e) }), i.domElement.appendChild(i.__select), i } return j(t, I), F(t, [{ key: "setValue", value: function (e) { var n = P(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e); return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), n } }, { key: "updateDisplay", value: function () { return U.isActive(this.__select) ? this : (this.__select.value = this.getValue(), P(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this)) } }]), t }(), Y = function (e) { function t(e, n) { function o() { r.setValue(r.__input.value) } H(this, t); var i = D(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)), r = i; return i.__input = document.createElement("input"), i.__input.setAttribute("type", "text"), U.bind(i.__input, "keyup", o), U.bind(i.__input, "change", o), U.bind(i.__input, "blur", function () { r.__onFinishChange && r.__onFinishChange.call(r, r.getValue()) }), U.bind(i.__input, "keydown", function (e) { 13 === e.keyCode && this.blur() }), i.updateDisplay(), i.domElement.appendChild(i.__input), i } return j(t, I), F(t, [{ key: "updateDisplay", value: function () { return U.isActive(this.__input) || (this.__input.value = this.getValue()), P(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this) } }]), t }(), J = function (e) { function t(e, n, o) { H(this, t); var r = D(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)), s = o || {}; return r.__min = s.min, r.__max = s.max, r.__step = s.step, k.isUndefined(r.__step) ? 0 === r.initialValue ? r.__impliedStep = 1 : r.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(r.initialValue)) / Math.LN10)) / 10 : r.__impliedStep = r.__step, r.__precision = i(r.__impliedStep), r } return j(t, I), F(t, [{ key: "setValue", value: function (e) { var n = e; return void 0 !== this.__min && n < this.__min ? n = this.__min : void 0 !== this.__max && n > this.__max && (n = this.__max), void 0 !== this.__step && n % this.__step != 0 && (n = Math.round(n / this.__step) * this.__step), P(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, n) } }, { key: "min", value: function (e) { return this.__min = e, this } }, { key: "max", value: function (e) { return this.__max = e, this } }, { key: "step", value: function (e) { return this.__step = e, this.__impliedStep = e, this.__precision = i(e), this } }]), t }(), W = function (e) { function t(e, n, o) { function i() { l.__onFinishChange && l.__onFinishChange.call(l, l.getValue()) } function r(e) { var t = d - e.clientY; l.setValue(l.getValue() + t * l.__impliedStep), d = e.clientY } function s() { U.unbind(window, "mousemove", r), U.unbind(window, "mouseup", s), i() } H(this, t); var a = D(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, o)); a.__truncationSuspended = !1; var l = a, d = void 0; return a.__input = document.createElement("input"), a.__input.setAttribute("type", "text"), U.bind(a.__input, "change", function () { var e = parseFloat(l.__input.value); k.isNaN(e) || l.setValue(e) }), U.bind(a.__input, "blur", function () { i() }), U.bind(a.__input, "mousedown", function (e) { U.bind(window, "mousemove", r), U.bind(window, "mouseup", s), d = e.clientY }), U.bind(a.__input, "keydown", function (e) { 13 === e.keyCode && (l.__truncationSuspended = !0, this.blur(), l.__truncationSuspended = !1, i()) }), a.updateDisplay(), a.domElement.appendChild(a.__input), a } return j(t, J), F(t, [{ key: "updateDisplay", value: function () { return this.__input.value = this.__truncationSuspended ? this.getValue() : r(this.getValue(), this.__precision), P(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this) } }]), t }(), Q = function (e) { function t(e, n, o, i, r) { function a(e) { e.preventDefault(); var t = _.__background.getBoundingClientRect(); return _.setValue(s(e.clientX, t.left, t.right, _.__min, _.__max)), !1 } function l() { U.unbind(window, "mousemove", a), U.unbind(window, "mouseup", l), _.__onFinishChange && _.__onFinishChange.call(_, _.getValue()) } function d(e) { var t = e.touches[0].clientX, n = _.__background.getBoundingClientRect(); _.setValue(s(t, n.left, n.right, _.__min, _.__max)) } function c() { U.unbind(window, "touchmove", d), U.unbind(window, "touchend", c), _.__onFinishChange && _.__onFinishChange.call(_, _.getValue()) } H(this, t); var u = D(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, { min: o, max: i, step: r })), _ = u; return u.__background = document.createElement("div"), u.__foreground = document.createElement("div"), U.bind(u.__background, "mousedown", function (e) { document.activeElement.blur(), U.bind(window, "mousemove", a), U.bind(window, "mouseup", l), a(e) }), U.bind(u.__background, "touchstart", function (e) { 1 === e.touches.length && (U.bind(window, "touchmove", d), U.bind(window, "touchend", c), d(e)) }), U.addClass(u.__background, "slider"), U.addClass(u.__foreground, "slider-fg"), u.updateDisplay(), u.__background.appendChild(u.__foreground), u.domElement.appendChild(u.__background), u } return j(t, J), F(t, [{ key: "updateDisplay", value: function () { var e = (this.getValue() - this.__min) / (this.__max - this.__min); return this.__foreground.style.width = 100 * e + "%", P(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this) } }]), t }(), q = function (e) { function t(e, n, o) { H(this, t); var i = D(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)), r = i; return i.__button = document.createElement("div"), i.__button.innerHTML = void 0 === o ? "Fire" : o, U.bind(i.__button, "click", function (e) { return e.preventDefault(), r.fire(), !1 }), U.addClass(i.__button, "button"), i.domElement.appendChild(i.__button), i } return j(t, I), F(t, [{ key: "fire", value: function () { this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()) } }]), t }(), Z = function (e) { function t(e, n) { function o(e) { u(e), U.bind(window, "mousemove", u), U.bind(window, "touchmove", u), U.bind(window, "mouseup", r), U.bind(window, "touchend", r) } function i(e) { _(e), U.bind(window, "mousemove", _), U.bind(window, "touchmove", _), U.bind(window, "mouseup", s), U.bind(window, "touchend", s) } function r() { U.unbind(window, "mousemove", u), U.unbind(window, "touchmove", u), U.unbind(window, "mouseup", r), U.unbind(window, "touchend", r), c() } function s() { U.unbind(window, "mousemove", _), U.unbind(window, "touchmove", _), U.unbind(window, "mouseup", s), U.unbind(window, "touchend", s), c() } function d() { var e = R(this.value); !1 !== e ? (p.__color.__state = e, p.setValue(p.__color.toOriginal())) : this.value = p.__color.toString() } function c() { p.__onFinishChange && p.__onFinishChange.call(p, p.__color.toOriginal()) } function u(e) { -1 === e.type.indexOf("touch") && e.preventDefault(); var t = p.__saturation_field.getBoundingClientRect(), n = e.touches && e.touches[0] || e, o = n.clientX, i = n.clientY, r = (o - t.left) / (t.right - t.left), s = 1 - (i - t.top) / (t.bottom - t.top); return s > 1 ? s = 1 : s < 0 && (s = 0), r > 1 ? r = 1 : r < 0 && (r = 0), p.__color.v = s, p.__color.s = r, p.setValue(p.__color.toOriginal()), !1 } function _(e) { -1 === e.type.indexOf("touch") && e.preventDefault(); var t = p.__hue_field.getBoundingClientRect(), n = 1 - ((e.touches && e.touches[0] || e).clientY - t.top) / (t.bottom - t.top); return n > 1 ? n = 1 : n < 0 && (n = 0), p.__color.h = 360 * n, p.setValue(p.__color.toOriginal()), !1 } H(this, t); var h = D(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); h.__color = new V(h.getValue()), h.__temp = new V(0); var p = h; h.domElement = document.createElement("div"), U.makeSelectable(h.domElement, !1), h.__selector = document.createElement("div"), h.__selector.className = "selector", h.__saturation_field = document.createElement("div"), h.__saturation_field.className = "saturation-field", h.__field_knob = document.createElement("div"), h.__field_knob.className = "field-knob", h.__field_knob_border = "2px solid ", h.__hue_knob = document.createElement("div"), h.__hue_knob.className = "hue-knob", h.__hue_field = document.createElement("div"), h.__hue_field.className = "hue-field", h.__input = document.createElement("input"), h.__input.type = "text", h.__input_textShadow = "0 1px 1px ", U.bind(h.__input, "keydown", function (e) { 13 === e.keyCode && d.call(this) }), U.bind(h.__input, "blur", d), U.bind(h.__selector, "mousedown", function () { U.addClass(this, "drag").bind(window, "mouseup", function () { U.removeClass(p.__selector, "drag") }) }), U.bind(h.__selector, "touchstart", function () { U.addClass(this, "drag").bind(window, "touchend", function () { U.removeClass(p.__selector, "drag") }) }); var f = document.createElement("div"); return k.extend(h.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), k.extend(h.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: h.__field_knob_border + (h.__color.v < .5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), k.extend(h.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), k.extend(h.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), k.extend(f.style, { width: "100%", height: "100%", background: "none" }), a(f, "top", "rgba(0,0,0,0)", "#000"), k.extend(h.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), l(h.__hue_field), k.extend(h.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: h.__input_textShadow + "rgba(0,0,0,0.7)" }), U.bind(h.__saturation_field, "mousedown", o), U.bind(h.__saturation_field, "touchstart", o), U.bind(h.__field_knob, "mousedown", o), U.bind(h.__field_knob, "touchstart", o), U.bind(h.__hue_field, "mousedown", i), U.bind(h.__hue_field, "touchstart", i), h.__saturation_field.appendChild(f), h.__selector.appendChild(h.__field_knob), h.__selector.appendChild(h.__saturation_field), h.__selector.appendChild(h.__hue_field), h.__hue_field.appendChild(h.__hue_knob), h.domElement.appendChild(h.__input), h.domElement.appendChild(h.__selector), h.updateDisplay(), h } return j(t, I), F(t, [{ key: "updateDisplay", value: function () { var e = R(this.getValue()); if (!1 !== e) { var t = !1; k.each(V.COMPONENTS, function (n) { if (!k.isUndefined(e[n]) && !k.isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n]) return t = !0, {} }, this), t && k.extend(this.__color.__state, e) } k.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1; var n = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0, o = 255 - n; k.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + n + "," + n + "," + n + ")" }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, a(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), k.extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + n + "," + n + "," + n + ")", textShadow: this.__input_textShadow + "rgba(" + o + "," + o + "," + o + ",.7)" }) } }]), t }(), $ = ["-moz-", "-o-", "-webkit-", "-ms-", ""], ee = { load: function (e, t) { var n = t || document, o = n.createElement("link"); o.type = "text/css", o.rel = "stylesheet", o.href = e, n.getElementsByTagName("head")[0].appendChild(o) }, inject: function (e, t) { var n = t || document, o = document.createElement("style"); o.type = "text/css", o.innerHTML = e; var i = n.getElementsByTagName("head")[0]; try { i.appendChild(o) } catch (e) { } } }, te = function (e, t) { var n = e[t]; return k.isArray(arguments[2]) || k.isObject(arguments[2]) ? new K(e, t, arguments[2]) : k.isNumber(n) ? k.isNumber(arguments[2]) && k.isNumber(arguments[3]) ? k.isNumber(arguments[4]) ? new Q(e, t, arguments[2], arguments[3], arguments[4]) : new Q(e, t, arguments[2], arguments[3]) : k.isNumber(arguments[4]) ? new W(e, t, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new W(e, t, { min: arguments[2], max: arguments[3] }) : k.isString(n) ? new Y(e, t) : k.isFunction(n) ? new q(e, t, "") : k.isBoolean(n) ? new X(e, t) : null }, ne = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) { setTimeout(e, 1e3 / 60) }, oe = function () { function e() { H(this, e), this.backgroundElement = document.createElement("div"), k.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), U.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), k.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement); var t = this; U.bind(this.backgroundElement, "click", function () { t.hide() }) } return F(e, [{ key: "show", value: function () { var e = this; this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), k.defer(function () { e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)" }) } }, { key: "hide", value: function () { var e = this, t = function t() { e.domElement.style.display = "none", e.backgroundElement.style.display = "none", U.unbind(e.domElement, "webkitTransitionEnd", t), U.unbind(e.domElement, "transitionend", t), U.unbind(e.domElement, "oTransitionEnd", t) }; U.bind(this.domElement, "webkitTransitionEnd", t), U.bind(this.domElement, "transitionend", t), U.bind(this.domElement, "oTransitionEnd", t), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)" } }, { key: "layout", value: function () { this.domElement.style.left = window.innerWidth / 2 - U.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - U.getHeight(this.domElement) / 2 + "px" } }]), e }(), ie = function (e) { if (e && "undefined" != typeof window) { var t = document.createElement("style"); return t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t), e } }(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid transparent}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n"); ee.inject(ie); var re = "Default", se = function () { try { return "localStorage" in window && null !== window.localStorage } catch (e) { return !1 } }(), ae = void 0, le = !0, de = void 0, ce = !1, ue = [], _e = function e(t) { var n = this, o = t || {}; this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), U.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], o = k.defaults(o, { closeOnTop: !1, autoPlace: !0, width: e.DEFAULT_WIDTH }), o = k.defaults(o, { resizable: o.autoPlace, hideable: o.autoPlace }), k.isUndefined(o.load) ? o.load = { preset: re } : o.preset && (o.load.preset = o.preset), k.isUndefined(o.parent) && o.hideable && ue.push(this), o.resizable = k.isUndefined(o.parent) && o.resizable, o.autoPlace && k.isUndefined(o.scrollable) && (o.scrollable = !0); var i = se && "true" === localStorage.getItem(f(this, "isLocal")), r = void 0; if (Object.defineProperties(this, { parent: { get: function () { return o.parent } }, scrollable: { get: function () { return o.scrollable } }, autoPlace: { get: function () { return o.autoPlace } }, closeOnTop: { get: function () { return o.closeOnTop } }, preset: { get: function () { return n.parent ? n.getRoot().preset : o.load.preset }, set: function (e) { n.parent ? n.getRoot().preset = e : o.load.preset = e, x(this), n.revert() } }, width: { get: function () { return o.width }, set: function (e) { o.width = e, y(n, e) } }, name: { get: function () { return o.name }, set: function (e) { o.name = e, titleRowName && (titleRowName.innerHTML = o.name) } }, closed: { get: function () { return o.closed }, set: function (t) { o.closed = t, o.closed ? U.addClass(n.__ul, e.CLASS_CLOSED) : U.removeClass(n.__ul, e.CLASS_CLOSED), this.onResize(), n.__closeButton && (n.__closeButton.innerHTML = t ? e.TEXT_OPEN : e.TEXT_CLOSED) } }, load: { get: function () { return o.load } }, useLocalStorage: { get: function () { return i }, set: function (e) { se && (i = e, e ? U.bind(window, "unload", r) : U.unbind(window, "unload", r), localStorage.setItem(f(n, "isLocal"), e)) } } }), k.isUndefined(o.parent)) { if (o.closed = !1, U.addClass(this.domElement, e.CLASS_MAIN), U.makeSelectable(this.domElement, !1), se && i) { n.useLocalStorage = !0; var s = localStorage.getItem(f(this, "gui")); s && (o.load = JSON.parse(s)) } this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = e.TEXT_CLOSED, U.addClass(this.__closeButton, e.CLASS_CLOSE_BUTTON), o.closeOnTop ? (U.addClass(this.__closeButton, e.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (U.addClass(this.__closeButton, e.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), U.bind(this.__closeButton, "click", function () { n.closed = !n.closed }) } else { void 0 === o.closed && (o.closed = !0); var a = document.createTextNode(o.name); U.addClass(a, "controller-name"); var l = d(n, a); U.addClass(this.__ul, e.CLASS_CLOSED), U.addClass(l, "title"), U.bind(l, "click", function (e) { return e.preventDefault(), n.closed = !n.closed, !1 }), o.closed || (this.closed = !1) } o.autoPlace && (k.isUndefined(o.parent) && (le && (de = document.createElement("div"), U.addClass(de, "dg"), U.addClass(de, e.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(de), le = !1), de.appendChild(this.domElement), U.addClass(this.domElement, e.CLASS_AUTO_PLACE)), this.parent || y(n, o.width)), this.__resizeHandler = function () { n.onResizeDebounced() }, U.bind(window, "resize", this.__resizeHandler), U.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), U.bind(this.__ul, "transitionend", this.__resizeHandler), U.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), o.resizable && v(this), r = function () { se && "true" === localStorage.getItem(f(n, "isLocal")) && localStorage.setItem(f(n, "gui"), JSON.stringify(n.getSaveObject())) }, this.saveToLocalStorageIfPossible = r, o.parent || function () { var e = n.getRoot(); e.width += 1, k.defer(function () { e.width -= 1 }) }() }; return _e.toggleHide = function () { ce = !ce, k.each(ue, function (e) { e.domElement.style.display = ce ? "none" : "" }) }, _e.CLASS_AUTO_PLACE = "a", _e.CLASS_AUTO_PLACE_CONTAINER = "ac", _e.CLASS_MAIN = "main", _e.CLASS_CONTROLLER_ROW = "cr", _e.CLASS_TOO_TALL = "taller-than-window", _e.CLASS_CLOSED = "closed", _e.CLASS_CLOSE_BUTTON = "close-button", _e.CLASS_CLOSE_TOP = "close-top", _e.CLASS_CLOSE_BOTTOM = "close-bottom", _e.CLASS_DRAG = "drag", _e.DEFAULT_WIDTH = 245, _e.TEXT_CLOSED = "Close Controls", _e.TEXT_OPEN = "Open Controls", _e._keydownHandler = function (e) { "text" === document.activeElement.type || 72 !== e.which && 72 !== e.keyCode || _e.toggleHide() }, U.bind(window, "keydown", _e._keydownHandler, !1), k.extend(_e.prototype, { add: function (e, t) { return p(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) }) }, addColor: function (e, t) { return p(this, e, t, { color: !0 }) }, remove: function (e) { this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1); var t = this; k.defer(function () { t.onResize() }) }, destroy: function () { if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead."); this.autoPlace && de.removeChild(this.domElement); var e = this; k.each(this.__folders, function (t) { e.removeFolder(t) }), U.unbind(window, "keydown", _e._keydownHandler, !1), c(this) }, addFolder: function (e) { if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"'); var t = { name: e, parent: this }; t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]); var n = new _e(t); this.__folders[e] = n; var o = d(this, n.domElement); return U.addClass(o, "folder"), n }, removeFolder: function (e) { this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], c(e); var t = this; k.each(e.__folders, function (t) { e.removeFolder(t) }), k.defer(function () { t.onResize() }) }, open: function () { this.closed = !1 }, close: function () { this.closed = !0 }, onResize: function () { var e = this.getRoot(); if (e.scrollable) { var t = U.getOffset(e.__ul).top, n = 0; k.each(e.__ul.childNodes, function (t) { e.autoPlace && t === e.__save_row || (n += U.getHeight(t)) }), window.innerHeight - t - 20 < n ? (U.addClass(e.domElement, _e.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - 20 + "px") : (U.removeClass(e.domElement, _e.CLASS_TOO_TALL), e.__ul.style.height = "auto") } e.__resize_handle && k.defer(function () { e.__resize_handle.style.height = e.__ul.offsetHeight + "px" }), e.__closeButton && (e.__closeButton.style.width = e.width + "px") }, onResizeDebounced: k.debounce(function () { this.onResize() }, 50), remember: function () { if (k.isUndefined(ae) && ((ae = new oe).domElement.innerHTML = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>'), this.parent) throw new Error("You can only call remember on a top level GUI."); var e = this; k.each(Array.prototype.slice.call(arguments), function (t) { 0 === e.__rememberedObjects.length && b(e), -1 === e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t) }), this.autoPlace && y(this, this.width) }, getRoot: function () { for (var e = this; e.parent;)e = e.parent; return e }, getSaveObject: function () { var e = this.load; return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = w(this)), e.folders = {}, k.each(this.__folders, function (t, n) { e.folders[n] = t.getSaveObject() }), e }, save: function () { this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = w(this), u(this, !1), this.saveToLocalStorageIfPossible() }, saveAs: function (e) { this.load.remembered || (this.load.remembered = {}, this.load.remembered[re] = w(this, !0)), this.load.remembered[e] = w(this), this.preset = e, m(this, e, !0), this.saveToLocalStorageIfPossible() }, revert: function (e) { k.each(this.__controllers, function (t) { this.getRoot().load.remembered ? h(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue()) }, this), k.each(this.__folders, function (e) { e.revert(e) }), e || u(this.getRoot(), !1) }, listen: function (e) { var t = 0 === this.__listening.length; this.__listening.push(e), t && E(this.__listening) }, updateDisplay: function () { k.each(this.__controllers, function (e) { e.updateDisplay() }), k.each(this.__folders, function (e) { e.updateDisplay() }) } }), { color: { Color: V, math: B, interpret: R }, controllers: { Controller: I, BooleanController: X, OptionController: K, StringController: Y, NumberController: J, NumberControllerBox: W, NumberControllerSlider: Q, FunctionController: q, ColorController: Z }, dom: { dom: U }, gui: { GUI: _e }, GUI: _e } });

/**
 * All global variables 
 */

//canvas
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
//prevents canvas from 'smoothing' (blurring) image edges
context.imageSmoothingEnabled = false;
context.textBaseline = 'top';

//dat.GUI

var gui = new dat.GUI({
    autoPlace: false,
});
document.getElementById('controls').appendChild(gui.domElement);

var pubFolder = gui.addFolder('publicity');
var resFolder = gui.addFolder('resources');
var trainFolder = gui.addFolder('training');
//var workFolder = gui.addFolder('employees');

//videos
var idleImage = document.getElementById('idle');
var backImage = document.getElementById('back');
var dirImage = document.getElementById('dir');
var startImage = document.getElementById('start');
var altImage = document.getElementById('alt');
var succVideo = document.getElementById('success');
var boomVideo = document.getElementById('boom');
var coastVideo = document.getElementById('coast');
var overpopVideo = document.getElementById('overpop');

//random
function genRandom(minInc, maxExc) {
    return Math.floor(Math.random() * (maxExc - minInc)) + minInc;
}

/**
 * allows videos to be inserted into the canvas
 */

VIDEOS = {
    videos: {},
    add: function (key, video, callback) {
        this.videos[key] = {
            video: video,
            callback: callback
        }
    },
    play: function (key) {
        var video = this.videos[key].video;
        video.addEventListener('ended', function () {
            this.pause();
        });
        video.play();
    },
    remove: function (key) {
        var video = this.videos[key].video;
        if (!video.paused) video.pause();
        this.videos[key] = undefined;
    },
    get: function (key) {
        return this.videos[key].video;
    },
    draw: function (key, x1, y1, w1, h1, x2, y2, w2, h2) {
        var entry = this.videos[key];
        var video = entry.video;
        var callback = entry.callback;
        if (!video.paused) {
            context.drawImage(video, x1, y1, w1, h1, x2, y2, w2, h2);
        } else {
            if (callback) callback();
        }
    }
}

CONTROLS = {
    adCampaign: {
        disabled: false,
        click: function () {
            if (!CONTROLS.adCampaign.disabled) {
                if (!GAME.call_campaign()) disable('adCampaign');
            }
        }
    },
    announceDelay: {
        disabled: false,
        click: function () {
            if (!CONTROLS.announceDelay.disabled) {
                GAME.call_delay();
            }
        }
    },
    oxygen: {
        disabled: false,
        click: function () {
            if (!CONTROLS.oxygen.disabled) {
                GAME.call_oxygen();
            }
        }
    },
    water: {
        disabled: false,
        click: function () {
            if (!CONTROLS.water.disabled) {
                GAME.call_water();
            }
        }
    },
    food: {
        disabled: false,
        click: function () {
            if (!CONTROLS.food.disabled) {
                GAME.call_food();
            }
        }
    },
    fuel: {
        disabled: false,
        click: function () {
            if (!CONTROLS.fuel.disabled) {
                GAME.call_fuel();
            }
        }
    },
    acclimatization: {
        disabled: false,
        click: function () {
            if (!CONTROLS.acclimatization.disabled) {
                GAME.call_acclimatization();
            }
        }
    },
    conditioning: {
        disabled: false,
        click: function () {
            if (!CONTROLS.conditioning.disabled) {
                GAME.call_conditioning();
            }
        }
    },
    education: {
        disabled: false,
        click: function () {
            if (!CONTROLS.education.disabled) {
                GAME.call_education();
            }
        }
    }
}

CONTROLS.adCampaign.controller = pubFolder.add(CONTROLS.adCampaign, 'click').name('ad campaign');
CONTROLS.announceDelay.controller = pubFolder.add(CONTROLS.announceDelay, 'click').name('delay (30 days)');

CONTROLS.oxygen.controller = resFolder.add(CONTROLS.oxygen, 'click').name('oxygen');
CONTROLS.food.controller = resFolder.add(CONTROLS.food, 'click').name('food');
CONTROLS.water.controller = resFolder.add(CONTROLS.water, 'click').name('water');
CONTROLS.fuel.controller = resFolder.add(CONTROLS.fuel, 'click').name('fuel');

CONTROLS.acclimatization.controller = trainFolder.add(CONTROLS.acclimatization, 'click').name('acclimatization');
CONTROLS.conditioning.controller = trainFolder.add(CONTROLS.conditioning, 'click').name('conditioning');
CONTROLS.education.controller = trainFolder.add(CONTROLS.education, 'click').name('education');

pubFolder.open();
resFolder.open();
trainFolder.open();

function disable(name) {
    var control = CONTROLS[name];
    if (!control.disabled) {
        control.disabled = true;
        control.controller.domElement.parentNode.parentNode.classList.add('disabled');
    }
}

function enable(name) {
    console.log(name);
    var control = CONTROLS[name];
    if (control.disabled) {
        control.disabled = false;
        control.controller.domElement.parentNode.parentNode.classList.remove('disabled');
    }
}

function isDisabled(name) {
    return CONTROLS[name].disabled;
}

canvas.addEventListener('click', function (event) {
    if (GAME_STATE == GS_GAME) {
        var x = Math.floor(event.offsetX / 600 * 800), y = Math.floor(event.offsetY / 450 * 600);
        if (!(x < 670 || x > 780 || y < 540 || y > 580)) {
            GAME.call();
        }
    } else if (GAME_STATE == GS_BACK) {
        GAME_STATE = GS_DIR;
    } else if (GAME_STATE == GS_DIR) {
        GAME_STATE = GS_START;
    } else if (GAME_STATE == GS_START) {
        GAME_STATE = GS_GAME;
    } else if (GAME_STATE == GS_ALT) {
        disable('adCampaign');
        disable('announceDelay');
        disable('oxygen');
        disable('food');
        disable('water');
        disable('fuel');
        disable('acclimatization');
        disable('conditioning');
        disable('education');
        GAME = new Game(true);
        GAME_STATE = GS_GAME;
    }
});


disable('adCampaign');
disable('announceDelay');
disable('oxygen');
disable('food');
disable('water');
disable('fuel');
disable('acclimatization');
disable('conditioning');
disable('education');

var Counter = function (name, moneyChange, days, valueChange, special) {
    this.name = name;
    this.moneyChange = moneyChange;
    this.maxDays = days;
    this.counter = days;
    this.value = 0;
    this.valueChange = valueChange;
    this.called = false;
    this.special = special || false;
}

Counter.prototype.day = function (currMoney) {
    this.counter += 1;
    var newMoney = currMoney + this.moneyChange;
    var name = this.name;
    if (this.counter >= this.maxDays && newMoney > 0) {
        if (!this.special && this.value < 100) enable(name);
        if (this.called) {
            this.counter = 0;
            if (this.value < 100) {
                this.value += this.valueChange;
            } else {
                if (!this.special) disable(name);
            }
            this.called = false;
            return newMoney;
        }
    } else {
        if (!this.special) disable(name);
    }
    this.called = false;
    return currMoney;
}

Counter.prototype.call = function () {
    this.called = true;
}

var Game = function (robotMode) {
    this.robotMode = robotMode;
    this.money = 0;
    this.days = 0;
    this.daysMission = genRandom(330, 351);
    this.daysApoc = this.daysMission + genRandom(15, 85);
    this.delays = 3;
    this.called = false;
    if (!this.robotMode) {
        this.counters = [
            new Counter('income', 10000, 30, 10, true),
            new Counter('oxygen', genRandom(70, 81) * -30, 30, 10), //300
            new Counter('food', genRandom(70, 81) * -12, 12, 5), //120
            new Counter('water', genRandom(70, 81) * -8, 8, 4),
            new Counter('fuel', genRandom(70, 81) * -60, 60, 20),
            new Counter('acclimatization', genRandom(70, 81) * -16, 16, 5),
            new Counter('conditioning', genRandom(70, 81) * -10, 10, 4),
            new Counter('education', genRandom(70, 81) * -8, 8, 4)
        ];
    } else {
        this.counters = [
            new Counter('income', 10000, 30, 10, true),
            new Counter('fuel', genRandom(70, 81) * -60, 60, 25),
            new Counter('education', genRandom(70, 81) * -8, 8, 4)
        ];
    }

    for (var i = 0; i < this.counters.length; i++) {
        var counter = this.counters[i];
        this['call_' + counter.name] = buildCall(counter);
    }

    this.campaigns = new CampaignManager();
}

function buildCall(counter) {
    return function() {counter.call()};
}

Game.prototype.day = function () {
    if ((this.daysApoc - this.days > 0 && this.daysMission - this.days > 0 && !this.called)) {
        this.call_income();
        for (var i = 0; i < this.counters.length; i++) {
            this.money = this.counters[i].day(this.money);
        }
        this.money = this.campaigns.day(this.money);
        if (this.days == 30) {
            enable('announceDelay');
        } else if (this.delays == 0) {
            disable('announceDelay');
        }
        if (this.days > 30) {
            if (this.delayCalled && this.delays > 0) {
                this.daysMission += 30;
                this.delays -= 1;
                if (this.days < 30) disable('announceDelay');
            }
            this.delayCalled = false;
        }
        this.days += 1;
    } else {
        this.end();
    }
    this.called = false;
}

Game.prototype.end = function () {
    //take the current state of the game and decide whether the user won
    var victory = true;
    var counters = this.counters;
    for (var i = 1; i < counters.length; i++) {
        var counter = counters[i];
        var diff = (100 - counter.value) / 2;
        if (genRandom(1, 101) <= diff) {
            victory = false;
            break;
        }
    }
    if (victory) {
        VIDEOS.play('success');
        GAME_STATE = GS_END_SUCCESS;
    } else {
        VIDEOS.play('boom');
        GAME_STATE = GS_END_FAIL;
    }
    //display the option to rerun the demo without humans
}

Game.prototype.call_campaign = function () {
    this.campaigns.called = true;
}

Game.prototype.call_delay = function () {
    this.delayCalled = true;
}

Game.prototype.call = function () {
    this.called = true;
}

var CampaignManager = function () {
    this.campaigns = [];
    this.called = false;
};

CampaignManager.prototype.day = function (currMoney) {
    var campaigns = this.campaigns;
    var newMoney = currMoney;
    for (var i = campaigns.length - 1; i >= 0; i--) {
        var campaign = campaigns[i];
        if (campaign.days > 0) {
            campaign.day();
            newMoney += 350 - Math.abs(2 - i) * 35;
        } else {
            campaigns.splice(i);
        }
    }
    if (this.called && newMoney - 5000 > 0 && this.campaigns.length < 5) {
        this.campaigns.push({
            days: genRandom(15, 23),
            day: function () {
                this.days -= 1;
            }
        });
        newMoney = newMoney - 5000;
    }
    if (newMoney >= 5000 && this.campaigns.length < 5) {
        enable('adCampaign');
    } else {
        disable('adCampaign');
    }
    this.called = false;
    return newMoney;
}

GS_INTRO_OP = 0; //Intro > Overpopulation
GS_INTRO_CF = 1; //Intro > Coastal Flooding
GS_BACK = 7;
GS_DIR = 8;
GS_START = 2; //Backstory and directions
GS_GAME = 3; //Game
GS_END_SUCCESS = 4; //End > Success
GS_END_FAIL = 5; //End > Success
GS_ALT = 6;

GAME_STATE = GS_INTRO_OP;

GAME = new Game(false);


VIDEOS.add('overpop', overpopVideo, function () {
    VIDEOS.play('coast');
    GAME_STATE = GS_INTRO_CF;
});

VIDEOS.add('coast', coastVideo, function () {
    GAME_STATE = GS_BACK;
});

VIDEOS.add('boom', boomVideo, function () {
    GAME_STATE = GS_ALT;
});

VIDEOS.add('success', succVideo, function () {
    GAME_STATE = GS_ALT;
});

VIDEOS.play('overpop');

var millis = 0;

function update() {
    if (GAME_STATE == GS_GAME) {
        var time = new Date().getTime();
        if (time - millis >= 600) {
            GAME.day();
            console.log(GAME);
            millis = time;
        }
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    switch (GAME_STATE) {
        case GS_INTRO_OP:
            VIDEOS.draw('overpop', 0, 0, 1200, 958, 0, 0, 800, 600);
            context.font = '100px Roboto';
            context.fillStyle = 'white';
            context.strokeStyle = 'black';
            context.fillText('9.6 billion', 190, 200);
            context.strokeText('9.6 billion', 190, 200);
            context.font = '50px Roboto';
            context.fillText('world pop. 2050', 230, 290);
            context.strokeText('world pop. 2050', 230, 290);
            break;
        case GS_INTRO_CF:
            VIDEOS.draw('coast', 0, 0, 1024, 684, 0, 0, 800, 600);
            context.font = '150px Roboto';
            context.fillStyle = 'white';
            context.strokeStyle = 'black';
            context.fillText('490', 270, 180);
            context.strokeText('490', 270, 180);
            context.font = '50px Roboto';
            context.fillText('coastal communities', 170, 320);
            context.strokeText('coastal communities', 170, 320);
            context.fillText('experiencing chronic flooding', 65, 365);
            context.strokeText('experiencing chronic flooding', 65, 365);
            context.font = '75px Roboto';
            context.fillText('in 2100', 270, 420);
            context.strokeText('in 2100', 270, 420);
            break;
        case GS_BACK:
            context.drawImage(backImage, 0, 0, 800, 600, 0, 0, 800, 600);
            break;
        case GS_DIR:
            context.drawImage(dirImage, 0, 0, 800, 600, 0, 0, 800, 600);
            break;
        case GS_START:
            context.drawImage(startImage, 0, 0, 800, 600, 0, 0, 800, 600);
            break;
        case GS_GAME:
            var counters = GAME.counters;

            context.drawImage(idleImage, 0, 0, 1920, 1080, -100, 0, 800, 600);
            context.font = '22px Roboto';
            context.lineWidth = 3;

            if (!GAME.robotMode) {
                for (var i = 1; i < counters.length; i++) {
                    var counter = counters[i];
                    var value = Math.floor(counter.value / 100 * ((i > 4) ? 315 : 150));
                    var curr = counter.counter;
                    var cooldown = Math.floor(((curr > counter.maxDays) ? counter.maxDays : curr) / counter.maxDays * ((i > 4) ? 315 : 150));
                    var x = ((i > 4 || i % 2 != 0) ? 425 : 590);
                    var y = ((i > 4) ? 270 + (i - 5) * 90 : (i > 2) ? 160 : 70);
                    context.fillStyle = 'white';
                    context.fillText(counter.name, x, y);
                    context.fillStyle = 'rgb(0,100,0)';
                    context.fillRect(x, y + 30, (i > 4) ? 315 : 150, 15);
                    context.fillStyle = 'rgb(0,175,0)';
                    context.fillRect(x, y + 30, value, 15);
                    context.strokeRect(x, y + 30, (i > 4) ? 315 : 150, 15);
                    context.fillStyle = 'rgb(0,110,255)';
                    context.fillRect(x, y + 50, cooldown, 15);
                    context.strokeRect(x, y + 50, (i > 4) ? 315 : 150, 15);
                }
            } else {
                var fuelCounter = counters[1];
                var fuelValue = Math.floor(fuelCounter.value / 100 * 315);
                var fuelCurr = fuelCounter.counter;
                var fuelCooldown = Math.floor(((fuelCurr > fuelCounter.maxDays) ? fuelCounter.maxDays : fuelCurr) / fuelCounter.maxDays * 315);
                context.fillStyle = 'white';
                context.fillText(fuelCounter.name, 425, 70);
                context.fillStyle = 'rgb(0,100,0)';
                context.fillRect(425, 100, 315, 15);
                context.fillStyle = 'rgb(0,175,0)';
                context.fillRect(425, 100, fuelValue, 15);
                context.strokeRect(425, 100, 315, 15);
                context.fillStyle = 'rgb(0,110,255)';
                context.fillRect(425, 120, fuelCooldown, 15);
                context.strokeRect(425, 120, 315, 15);

                var eduCounter = counters[2];
                var eduValue = Math.floor(eduCounter.value / 100 * 315);
                var eduCurr = eduCounter.counter;
                var eduCooldown = Math.floor(((eduCurr > eduCounter.maxDays) ? eduCounter.maxDays : eduCurr) / eduCounter.maxDays * 315);
                context.fillStyle = 'white';
                context.fillText(eduCounter.name, 425, 160);
                context.fillStyle = 'rgb(0,100,0)';
                context.fillRect(425, 190, 315, 15);
                context.fillStyle = 'rgb(0,175,0)';
                context.fillRect(425, 190, eduValue, 15);
                context.strokeRect(425, 190, 315, 15);
                context.fillStyle = 'rgb(0,110,255)';
                context.fillRect(425, 210, eduCooldown, 15);
                context.strokeRect(425, 210, 315, 15);
            }

            var daysLeft = Math.floor(GAME.days / GAME.daysMission * 590);
            context.fillStyle = 'rgb(100,0,0)';
            context.fillRect(58, 550, 590, 25);
            context.fillStyle = 'rgb(255,0,0)';
            context.fillRect(58, 550, daysLeft, 25);
            context.strokeRect(58, 550, 590, 25);

            context.fillStyle = 'rgb(150,0,0)';
            context.fillRect(670, 540, 110, 40);
            context.fillStyle = 'white';
            context.font = '23px Roboto';
            context.fillText('LAUNCH', 678, 549);

            context.font = '40px Roboto';
            context.fillText('$' + GAME.money, 20, 20);

            context.font = '20px Roboto';
            context.fillText('DELAYS LEFT: ' + GAME.delays + '/' + 3, 20, 60);
            context.fillText('AD CAMPAIGNS: ' + GAME.campaigns.campaigns.length + '/' + 5, 20, 85);
            context.fillStyle = 'red';
            context.fillText('LAUNCH: ' + (GAME.daysMission - GAME.days) + " days", 20, 110);
            break;
        case GS_END_SUCCESS:
            VIDEOS.draw('success', 0, 0, 1920, 1080, 0, 0, 800, 600);
            context.fillStyle = 'red';
            context.font = '150px Roboto';
            context.fillText('SUCCESS', 75, 250);
            break;
        case GS_END_FAIL:
            VIDEOS.draw('boom', 0, 0, 800, 450, 0, 0, 800, 600);
            context.fillStyle = 'red';
            context.font = '150px Roboto';
            context.fillText('FAILED', 180, 250);
            break;
        case GS_ALT:
            context.drawImage(altImage, 0, 0, 800, 600, 0, 0, 800, 600);
            break;
    }
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);