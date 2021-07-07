/**
 * Colorflow
 * @version v0.0.378
 * @link https://github.com/sw4/colorflow
 * @copyright (c)2014 SW4
 * @license MIT (https://github.com/sw4/colorflow/blob/master/LICENSE-MIT.md)
 */
Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
    var r;
    if (null === this) throw new TypeError('"this" is null or not defined');
    var n = Object(this),
        a = n.length || 0;
    if (0 === a) return -1;
    var o = +t || 0;
    if (1 / 0 === Math.abs(o) && (o = 0), o >= a) return -1;
    for (r = Math.max(o >= 0 ? o : a - Math.abs(o), 0); a > r;) {
        if (r in n && n[r] === e) return r;
        r++
    }
    return -1
});
var $ui = $ui || {};
! function(e) {
    e.inputCtrlMeta = function(t, r) {
        var n = t.element;
        return t.name = t.name || n.getAttribute("name") || "ui-" + r + "-" + e.getRand(1, 999), t.id = n.getAttribute("id") || t.name, t.id += "-" + r, t.value = t.value || n.getAttribute("value") || 0, t.label = t.label || n.getAttribute("label") || n.innerHTML || t.name, t.tabindex = t.tabindex || n.getAttribute("tabindex") || 0, t.disabled = t.disabled || n.getAttribute("disabled") ? "disabled" : "", t.placeholder = t.placeholder || n.getAttribute("placeholder") || "Please select...", t.multiple = Boolean(t.multiple) === !0 || n.getAttribute("multiple") ? !0 : !1, t.name = t.multiple && -1 === t.name.indexOf("[]") ? t.name + "[]" : t.name.replace("[]", ""), t
    }, e.templates = {}, e.templateCache = function(t, r) {
        r = r.replace(/^.*[\\\/]/, ""), e.templates[r.substr(0, r.indexOf("."))] = t
    }, e.compile = function(t, r) {
        var n = e.templates[t];
        for (var a in r)
            if (n.indexOf("{{" + a + "}}") > -1) {
                var o = new RegExp("{{" + a + "}}", "g");
                n = n.replace(o, r[a])
            } return n
    }, e.preventBubble = function(e) {
        return e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0, e.returnValue = !1, !1
    }, e.toggleClass = function(t, r, n) {
        return n === !0 ? (e.addClass(t, r), !0) : n === !1 ? (e.removeClass(t, r), !1) : (e.toggleClass(t, r, !e.hasClass(t, r)), e.hasClass(t, r))
    }, e.hasClass = function(e, t) {
        var r = e.getAttribute("class") || "";
        return r && r.indexOf(t) > -1 ? !0 : !1
    }, e.center = function(e) {
        return e.style.top = e.parentNode.clientHeight / 2 - e.offsetHeight / 2 + "px", e.style.left = e.parentNode.clientWidth / 2 - e.offsetWidth / 2 + "px", e
    }, e.getStyle = function(e, t) {
        return window.getComputedStyle(e).getPropertyValue(t)
    }, e.addClass = function(t, r) {
        if (!e.hasClass(t, r)) {
            var n = t.getAttribute("class") || "";
            return t.setAttribute("class", (n ? n + " " : "") + r), t
        }
    }, e.removeClass = function(e, t) {
        var r = e.getAttribute("class");
        if (r) return r === t ? e.removeAttribute("class") : e.setAttribute("class", r.replace(t, "").trim()), e
    }, e.bindEvent = function(e, t, r) {
        return "mousewheel" === e && (e = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel"), t.addEventListener ? t.addEventListener(e, r, !1) : t.attachEvent("on" + e, r), t
    }, e.unbindEvent = function(e, t, r) {
        return t.removeEventListener && t.removeEventListener(e, r, !1), t.detachEvent && t.detachEvent("on" + e, r), t
    }, e.layout = function(t, r) {
        r && (r = e.procEvent(r));
        var n = {
            offset: t.getBoundingClientRect(),
            parent: {
                top: t.offsetTop,
                left: t.offsetLeft
            },
            height: t.offsetHeight,
            width: t.offsetWidth
        };
        return n.top = n.offset.top + (document.documentElement && 0 !== document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop), n.left = n.offset.left + (document.documentElement && 0 !== document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft), n
    }, e.bindListeners = function(t, r) {
        for (var n in t) t.hasOwnProperty(n) && e.bindEvent(n, r, t[n]);
        return r
    }, e.getRand = function(e, t) {
        return Math.floor(Math.random() * (t - e)) + e
    }, e.getUnits = function(e) {
        return e.replace(/\d+/, "")
    }, e.findEl = function(t, r) {
        var n = [],
            a = r.type || null,
            o = r.attribute || null,
            i = r.class || null,
            u = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, null, !1);
        do
            if (void 0 !== u.currentNode.tagName) {
                var s = !0;
                a && u.currentNode.tagName.toLowerCase() !== a.toLowerCase() && (s = !1), i && !e.hasClass(u.currentNode, i) && (s = !1), (o && !u.currentNode.hasAttribute(o.name) || o && u.currentNode.hasAttribute(o.name) && u.currentNode.getAttribute(o.name) !== o.value) && (s = !1), s && n.push(u.currentNode)
            } while (u.nextNode());
        return n
    }, e.wrapEl = function(t, r) {
        var n = e.createEl(r);
        return t.parentNode.insertBefore(n, t), n.appendChild(t), n
    }, e.createEl = function(e) {
        var t = document.createElement("div");
        return ["<g", "<path", "<line", "<circle", "<rect"].some(function(t) {
            return e.indexOf(t) >= 0
        }) ? (t.innerHTML = "<svg>" + e + "</svg>", t.firstChild.firstChild) : (t.innerHTML = e, t.firstChild)
    }, e.getIndex = function(e) {
        if (!e) return null;
        for (var t = document.body.previousElementSibling ? "previousElementSibling" : "previousSibling", r = 1; e = e[t];) ++r;
        return r - 1
    }, e.replaceEl = function(t, r, n) {
        for (var a = e.createEl(r), o = 0; o < t.attributes.length; o++) a.setAttribute(t.attributes[o].nodeName, t.attributes[o].value);
        for (; t.firstChild;) a.appendChild(t.firstChild);
        return n && (t.innerHTML = ""), t.parentNode.replaceChild(a, t), a
    }, e.toArr = function(e) {
        var t = [];
        return e && "object" != typeof e ? -1 !== e.indexOf(",") ? t = e.split(",") : t.push(e) : t = e, t
    }, e.collide = function(t, r, n) {
        if (n = n || 0, t = e.toArr(t), r = e.toArr(r), 0 === n) return r;
        for (var a = 0; a < r.length; a++) {
            var o = -1 !== t.indexOf(r[a]) ? !0 : !1;
            o || 1 !== n && 3 !== n ? !o || 2 !== n && 3 !== n || t.splice(parseInt(t.indexOf(r[a]), 0), 1) : t.push(r[a])
        }
        return t
    }, e.perc = function(e, t) {
        return e /= t, e = 0 > e ? 0 : e, e = e > 1 ? 1 : e
    }, e.attribute = function(e, t, r) {
        if ("object" != typeof e) return !1;
        if ("string" == typeof t && void 0 === r) return t = e.hasAttribute(t) ? t : e.hasAttribute("data-" + t) ? "data-" + t : t, "selected" === t || "disabled" === t || "checked" === t ? (e.removeAttribute(t), e[t]) : e.getAttribute(t);
        if ("object" != typeof t) {
            var n = t;
            t = {}, t[n] = r
        }
        for (var a in t) a = e.hasAttribute(a) ? a : e.hasAttribute("data-" + a) ? "data-" + a : a, "selected" === a || "disabled" === a || "checked" === a ? (e.removeAttribute(a), e[a] = t[a]) : e.setAttribute(a, t[a]);
        return e
    }, e.procEvent = function(e) {
        return e.posX = 0, e.posY = 0, e || (e = window.event), e.pageX || e.pageY ? (e.posX = e.pageX, e.posY = e.pageY) : (e.clientX || e.clientY) && (e.posX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, e.posY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), void 0 === e.offsetX && (e.offsetX = e.layerX), void 0 === e.offsetY && (e.offsetY = e.layerY), e.viewportY = e.posY - document.body.scrollTop, e.viewportX = e.posX - document.body.scrollLeft, e
    }, e.getEventOffset = function(e) {
        return {
            x: void 0 === e.offsetX ? e.layerX : e.offsetX,
            y: void 0 === e.offsetY ? e.layerY : e.offsetY
        }
    }, window.onload = function() {
        e.addClass(document.body, "ui-ui")
    }
}($ui);
var $ui = $ui || {};
! function(e) {
    return e.color = {
        hex2rgb: function(e) {
            var t, r, n, a, o = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            return e = e.replace(o, function(e, t, r) {
                return e + e + t + t + r + r
            }), t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e), r = parseInt(t[1], 16), n = parseInt(t[2], 16), a = parseInt(t[3], 16), [r, n, a]
        },
        rgb2hex: function(t) {
            t = e.toArr(t);
            var r, n, a, o = "";
            for (n = 0; n < t.length; n += 1) a = t[n], r = a.toString(16), r = 1 === r.length ? "0" + r : r, o += r;
            return "#" + o
        },
        rgb2hsv: function(t) {
            t = e.toArr(t);
            var r, n, a = t[0],
                o = t[1],
                i = t[2],
                u = Math.min(a, o, i),
                s = Math.max(a, o, i),
                l = s - u,
                h = s;
            return h = Math.floor(s / 255 * 100), 0 === s ? [0, 0, 0] : (n = Math.floor(l / s * 100), r = 0 === l ? 0 : a === s ? (o - i) / l : o === s ? 2 + (i - a) / l : 4 + (a - o) / l, r = Math.floor(60 * r), 0 > r && (r += 360), [r, n, h])
        },
        hsv2rgb: function(t) {
            t = e.toArr(t);
            var r, n, a, o, i, u, s, l, h = t[0],
                c = t[1],
                f = t[2];
            if (h = Math.max(0, Math.min(360, h)), c = Math.max(0, Math.min(100, c)), f = Math.max(0, Math.min(100, f)), c /= 100, f /= 100, h = 360 === h ? 0 : h, 0 === c) return r = n = a = f, [Math.round(255 * r), Math.round(255 * n), Math.round(255 * a)];
            switch (h /= 60, o = Math.floor(h), i = h - o, u = f * (1 - c), s = f * (1 - c * i), l = f * (1 - c * (1 - i)), o) {
                case 0:
                    r = f, n = l, a = u;
                    break;
                case 1:
                    r = s, n = f, a = u;
                    break;
                case 2:
                    r = u, n = f, a = l;
                    break;
                case 3:
                    r = u, n = s, a = f;
                    break;
                case 4:
                    r = l, n = u, a = f;
                    break;
                case 5:
                    r = f, n = u, a = s
            }
            return r = Math.round(255 * r), n = Math.round(255 * n), a = Math.round(255 * a), [r, n, a]
        },
        rgb2hsl: function(t) {
            t = e.toArr(t);
            var r = t[0],
                n = t[1],
                a = t[2];
            r /= 255, n /= 255, a /= 255;
            var o, i, u = Math.max(r, n, a),
                s = Math.min(r, n, a),
                l = (u + s) / 2;
            if (u === s) o = i = 0;
            else {
                var h = u - s;
                switch (i = l > .5 ? h / (2 - u - s) : h / (u + s), u) {
                    case r:
                        o = (n - a) / h + (a > n ? 6 : 0);
                        break;
                    case n:
                        o = (a - r) / h + 2;
                        break;
                    case a:
                        o = (r - n) / h + 4
                }
                o /= 6
            }
            return [o, i, l]
        },
        hsl2rgb: function(t) {
            function r(e, t, r) {
                return 0 > r && (r += 1), r > 1 && (r -= 1), 1 / 6 > r ? e + 6 * (t - e) * r : .5 > r ? t : 2 / 3 > r ? e + (t - e) * (2 / 3 - r) * 6 : e
            }
            t = e.toArr(t);
            var n, a, o, i = t[0],
                u = t[1],
                s = t[2];
            if (0 === u) n = a = o = s;
            else {
                var l = .5 > s ? s * (1 + u) : s + u - s * u,
                    h = 2 * s - l;
                n = r(h, l, i + 1 / 3), a = r(h, l, i), o = r(h, l, i - 1 / 3)
            }
            return [255 * n, 255 * a, 255 * o]
        },
        hex2hsl: function(e) {
            return this.rgb2hsl(this.hex2rgb(e))
        },
        hsl2hex: function(t) {
            return this.rgb2hex(this.hsl2rgb(e.toArr(t)))
        },
        hsv2hsl: function(t) {
            return this.rgb2hsl(this.hsv2rgb(e.toArr(t)))
        },
        hsl2hsv: function(t) {
            return this.rgb2hsv(this.hsl2rgb(e.toArr(t)))
        },
        hex2hsv: function(e) {
            return this.rgb2hsv(this.hex2rgb(e))
        },
        hsv2hex: function(t) {
            return this.rgb2hex(this.hsv2rgb(e.toArr(t)))
        },
        random: function(t, r, n) {
            var a, o, i, u, s = [];
            if (t = "number" != typeof t ? 1 : t, r && n) {
                var l = this.hex2hsv(r),
                    h = this.hex2hsv(n);
                o = e.getRand(Math.min.apply(Math, [l[0], h[0]]), Math.max.apply(Math, [l[0], h[0]])), i = e.getRand(Math.min.apply(Math, [l[1], h[1]]), Math.max.apply(Math, [l[1], h[1]])), u = e.getRand(Math.min.apply(Math, [l[2], h[2]]), Math.max.apply(Math, [l[2], h[2]]))
            } else o = e.getRand(0, 360), i = 100, u = e.getRand(75, 100);
            for (a = 0; t > a; a += 1) s.push(this.hsv2hex([o, i, u]));
            return s
        },
        complement: function(e, t) {
            var r = 1,
                n = 180,
                a = 0;
            switch (t) {
                case "split":
                    r = 3, n = 180, a = 180;
                    break;
                case "double":
                    r = 5, n = 180, a = 180
            }
            return this.algorithmic({
                hex: e,
                count: r,
                scope: a,
                rotation: 180
            })
        },
        triadic: function(e) {
            return this.algorithmic({
                hex: e
            })
        },
        tetradic: function(e) {
            return this.algorithmic({
                hex: e,
                count: 4
            })
        },
        pentadic: function(e) {
            return this.algorithmic({
                hex: e,
                count: 5
            })
        },
        degrees: function(e, t) {
            return e += t, e > 360 ? e -= 360 : 0 > e && (e += 360), e
        },
        percentage: function(t, r, n) {
            r = r || "#ff0000", n = n || "#27ae62";
            var a = e.color.hex2hsv(r),
                o = e.color.hex2hsv(n);
            return e.color.hsv2hex([Math.round(a[0] + t * (o[0] - a[0])), Math.round(a[1] + t * (o[1] - a[1])), Math.round(a[2] + t * (o[2] - a[2]))])
        },
        scale: function(e, t, r, n) {
            r = r || "hue";
            var a = this.hex2hsv(e),
                o = "hue" === r ? a[0] : "saturation" === r ? a[1] : a[2];
            return t = Math.abs(t) > 1 ? t / 100 : t, t = n === !0 ? 100 * t : o + (("hue" === r ? 360 : 100) - o) * t, this.hsv2hex(["hue" === r ? o : a[0], "saturation" === r ? t : a[1], "value" === r ? t : a[2]])
        },
        lighten: function(e, t, r) {
            return t = t > 0 ? t : -1 * t, this.scale(e, t, "value", r)
        },
        darken: function(e, t, r) {
            return t = 0 > t ? t : -1 * t, this.scale(e, t, "value", r)
        },
        saturate: function(e, t, r) {
            return t = t > 0 ? t : -1 * t, this.scale(e, t, "saturation", r)
        },
        desaturate: function(e, t, r) {
            return t = t > 0 ? t : -1 * t, this.scale(e, t, "saturation", r)
        },
        algorithmic: function(e) {
            if (e.hex) {
                var t, r, n, a, o = e.hex,
                    i = "undefined" == typeof e.count ? 3 : e.count,
                    u = "undefined" == typeof e.type ? "hue" : e.type,
                    s = "undefined" == typeof e.scope ? 360 : e.scope,
                    l = "undefined" == typeof e.rotation ? 0 : e.rotation,
                    h = this.hex2hsv(o),
                    c = h[0],
                    f = h[1],
                    d = h[2],
                    p = [];
                for (r = "hue" !== u || 360 !== s && 0 !== s ? s / (i - 1) : s / i, t = 360 === s ? c : this.degrees(this.degrees(c, l), -1 * s / 2), a = 0; i > a; a += 1) switch (n = r * a, u) {
                    case "hue":
                        p.push(this.hsv2hex([360 === this.degrees(t, n, 360) ? 0 : this.degrees(t, n, 360), f, d]));
                        break;
                    case "saturation":
                        p.push(this.hsv2hex([c, n, d]));
                        break;
                    case "value":
                    case "lightness":
                    case "brightness":
                        p.push(this.hsv2hex([c, f, n]))
                }
                return p
            }
        }
    }, e
}($ui);