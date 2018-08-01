/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) { var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace())) }

        function e(b, c, e, f) { if (Object.defineProperty) try { return void Object.defineProperty(b, c, { configurable: !0, enumerable: !0, get: function() { return d(f), e }, set: function(a) { d(f), e = a } }) } catch (g) {} a._definePropertyBroken = !0, b[c] = e } a.migrateVersion = "1.4.1"; var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() { f = {}, a.migrateWarnings.length = 0 }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode"); var g = a("<input/>", { size: 1 }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() { return null },
            j = a.attrHooks.value && a.attrHooks.value.set || function() { return c },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) { var j = e.toLowerCase(),
                o = b && b.nodeType; return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = { get: function(b, d) { var e, f = a.prop(b, d); return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c }, set: function(b, c, d) { var e; return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d } }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f)) }, a.attrHooks.value = { get: function(a, b) { var c = (a.nodeName || "").toLowerCase(); return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null) }, set: function(a, b) { var c = (a.nodeName || "").toLowerCase(); return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b)) } }; var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) { var g, h; return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h) }, a.fn.init.prototype = a.fn, a.find = function(a) { var b = Array.prototype.slice.call(arguments); if ("string" == typeof a && u.test(a)) try { document.querySelector(a) } catch (c) { a = a.replace(v, function(a, b, c, d) { return "[" + b + c + '"' + d + '"]' }); try { document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a } catch (e) { d("Attribute selector with '#' was not fixed: " + b[0]) } }
            return r.apply(this, b) }; var x; for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) { return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null) }, a.uaMatch = function(a) { a = a.toLowerCase(); var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || []; return { browser: b[1] || "", version: b[2] || "0" } }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) { return new b.fn.init(a, c) } a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) { var f = a.fn.init.call(this, d, e, c); return f instanceof b ? f : b(f) }, b.fn.init.prototype = b.fn; var c = b(document); return d("jQuery.sub() is deprecated"), b }, a.fn.size = function() { return d("jQuery.fn.size() is deprecated; use the .length property"), this.length }; var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) { var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() { var a; return y = !0, a = d.apply(this, arguments), y = !1, a }) }), a.swap = function(a, b, c, e) { var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated"); for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []); for (g in b) a.style[g] = h[g]; return f }, a.ajaxSetup({ converters: { "text json": a.parseJSON } }); var z = a.fn.data;
        a.fn.data = function(b) { var e, f, g = this[0]; return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f) }; var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) { c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated"); var g, h, i, j, k = []; if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) { return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0 }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length)); return k }); var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) { return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1")) };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) { a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f) }, a.event.remove = function(a, b, c, d, e) { C.call(this, a, L(b) || "", c, d, e) }, a.each(["load", "unload", "error"], function(b, c) { a.fn[c] = function() { var a = Array.prototype.slice.call(arguments, 0); return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this)) } }), a.fn.toggle = function(b, c) { if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated"); var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) { var d = (a._data(this, "lastToggle" + b.guid) || 0) % g; return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1 }; for (h.guid = f; g < e.length;) e[g++].guid = f; return this.click(h) }, a.fn.live = function(b, c, e) { return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this) }, a.fn.die = function(b, c) { return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this) }, a.event.trigger = function(a, b, c, e) { return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e) }, a.each(I.split("|"), function(b, c) { a.event.special[c] = { setup: function() { var b = this; return b !== document && (a.event.add(document, c + "." + a.guid, function() { a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0) }), a._data(this, c, a.guid++)), !1 }, teardown: function() { return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1 } } }), a.event.special.ready = { setup: function() { this === document && d("'ready' event is deprecated") } }; var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find; if (a.fn.andSelf = function() { return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments) }, a.fn.find = function(a) { var b = N.apply(this, arguments); return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b }, a.Callbacks) { var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) { var c = O(),
                    e = c.promise(); return c.pipe = e.pipe = function() { var b = arguments; return d("deferred.pipe() is deprecated"), a.Deferred(function(d) { a.each(P, function(f, g) { var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() { var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments) }) }), b = null }).promise() }, c.isResolved = function() { return d("deferred.isResolved is deprecated"), "resolved" === c.state() }, c.isRejected = function() { return d("deferred.isRejected is deprecated"), "rejected" === c.state() }, b && b.call(c, c), c } } }(jQuery, window);;
(function(factory) { 'use strict'; if (typeof define === 'function' && define.amd) { define(['jquery'], factory); } else if (typeof module !== 'undefined' && module.exports) { module.exports = factory(require('jquery')); } else { factory(jQuery); } })(function($) {
    var _previousResizeWidth = -1,
        _updateTimeout = -1;
    var _parse = function(value) { return parseFloat(value) || 0; };
    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];
        $elements.each(function() {
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;
            if (lastRow === null) { rows.push($that); } else { if (Math.floor(Math.abs(lastTop - top)) <= tolerance) { rows[rows.length - 1] = lastRow.add($that); } else { rows.push($that); } }
            lastTop = top;
        });
        return rows;
    };
    var _parseOptions = function(options) {
        var opts = { byRow: true, property: 'height', target: null, remove: false };
        if (typeof options === 'object') { return $.extend(opts, options); }
        if (typeof options === 'boolean') { opts.byRow = options; } else if (options === 'remove') { opts.remove = true; }
        return opts;
    };
    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);
        if (opts.remove) { var that = this;
            this.css(opts.property, '');
            $.each(matchHeight._groups, function(key, group) { group.elements = group.elements.not(that); }); return this; }
        if (this.length <= 1 && !opts.target) { return this; }
        matchHeight._groups.push({ elements: this, options: opts });
        matchHeight._apply(this, opts);
        return this;
    };
    matchHeight.version = 'master';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;
    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);
        var $hiddenParents = $elements.parents().filter(':hidden');
        $hiddenParents.each(function() { var $that = $(this);
            $that.data('style-cache', $that.attr('style')); });
        $hiddenParents.css('display', 'block');
        if (opts.byRow && !opts.target) {
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') { display = 'block'; }
                $that.data('style-cache', $that.attr('style'));
                $that.css({ 'display': display, 'padding-top': '0', 'padding-bottom': '0', 'margin-top': '0', 'margin-bottom': '0', 'border-top-width': '0', 'border-bottom-width': '0', 'height': '100px', 'overflow': 'hidden' });
            });
            rows = _rows($elements);
            $elements.each(function() { var $that = $(this);
                $that.attr('style', $that.data('style-cache') || ''); });
        }
        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;
            if (!opts.target) {
                if (opts.byRow && $row.length <= 1) { $row.css(opts.property, ''); return; }
                $row.each(function() {
                    var $that = $(this),
                        display = $that.css('display');
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') { display = 'block'; }
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);
                    if ($that.outerHeight(false) > targetHeight) { targetHeight = $that.outerHeight(false); }
                    $that.css('display', '');
                });
            } else { targetHeight = opts.target.outerHeight(false); }
            $row.each(function() {
                var $that = $(this),
                    verticalPadding = 0;
                if (opts.target && $that.is(opts.target)) { return; }
                if ($that.css('box-sizing') !== 'border-box') { verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom')); }
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });
        $hiddenParents.each(function() { var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null); });
        if (matchHeight._maintainScroll) { $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true)); }
        return this;
    };
    matchHeight._applyDataApi = function() { var groups = {};
        $('[data-match-height], [data-mh]').each(function() { var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height'); if (groupId in groups) { groups[groupId] = groups[groupId].add($this); } else { groups[groupId] = $this; } });
        $.each(groups, function() { this.matchHeight(true); }); };
    var _update = function(event) {
        if (matchHeight._beforeUpdate) { matchHeight._beforeUpdate(event, matchHeight._groups); }
        $.each(matchHeight._groups, function() { matchHeight._apply(this.elements, this.options); });
        if (matchHeight._afterUpdate) { matchHeight._afterUpdate(event, matchHeight._groups); }
    };
    matchHeight._update = function(throttle, event) {
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) { return; }
            _previousResizeWidth = windowWidth;
        }
        if (!throttle) { _update(event); } else if (_updateTimeout === -1) { _updateTimeout = setTimeout(function() { _update(event);
                _updateTimeout = -1; }, matchHeight._throttle); }
    };
    $(matchHeight._applyDataApi);
    $(window).bind('load', function(event) { matchHeight._update(false, event); });
    $(window).bind('resize orientationchange', function(event) { matchHeight._update(true, event); });
});
(function($) { $(function() { $("a[href='#']").click(function() { if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) { var e = $(this.hash); if (e = e.length ? e : $("[name='" + this.hash.slice(1) + "']"), e.length) return $("html,body").animate({ scrollTop: e.offset().top - ($("header").outerHeight() + 25) }, 1e3), !1 } }) });
    $.fn.toggleActive = function(t) { void 0 == t ? $(this).toggleClass("active") : $(this).toggleClass(t) };
    $.fn.centerFloat = function(t) { $(this).each(function() { var i = $(this).children(t),
                n = ($(this).outerHeight() - i.outerHeight()) / 2,
                e = { "margin-top": n, "margin-bottom": n };
            i.css(e) }) };
    $.fn.SquareUp = function(h) { "width" == h ? $(this).each(function() { $(this).height($(this).width()) }) : $(this).each(function() { $(this).width($(this).height()) }) }; })(jQuery);
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=30810b78c7ce5900162b12b2fde8d41a)
 * Config saved to config.json and https://gist.github.com/30810b78c7ce5900162b12b2fde8d41a
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) { "use strict"; var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), + function(t) { "use strict";

    function e(e) { var a, s = e.attr("data-target") || (a = e.attr("href")) && a.replace(/.*(?=#[^\s]+$)/, ""); return t(s) }

    function a(e) { return this.each(function() { var a = t(this),
                i = a.data("bs.collapse"),
                n = t.extend({}, s.DEFAULTS, a.data(), "object" == typeof e && e);!i && n.toggle && /show|hide/.test(e) && (n.toggle = !1), i || a.data("bs.collapse", i = new s(this, n)), "string" == typeof e && i[e]() }) } var s = function(e, a) { this.$element = t(e), this.options = t.extend({}, s.DEFAULTS, a), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    s.VERSION = "3.3.7", s.TRANSITION_DURATION = 350, s.DEFAULTS = { toggle: !0 }, s.prototype.dimension = function() { var t = this.$element.hasClass("width"); return t ? "width" : "height" }, s.prototype.show = function() { if (!this.transitioning && !this.$element.hasClass("in")) { var e, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(i && i.length && (e = i.data("bs.collapse"), e && e.transitioning))) { var n = t.Event("show.bs.collapse"); if (this.$element.trigger(n), !n.isDefaultPrevented()) { i && i.length && (a.call(i, "hide"), e || i.data("bs.collapse", null)); var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var l = function() { this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!t.support.transition) return l.call(this); var o = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(l, this)).emulateTransitionEnd(s.TRANSITION_DURATION)[r](this.$element[0][o]) } } } }, s.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass("in")) { var e = t.Event("hide.bs.collapse"); if (this.$element.trigger(e), !e.isDefaultPrevented()) { var a = this.dimension();
                this.$element[a](this.$element[a]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var i = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return t.support.transition ? void this.$element[a](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : i.call(this) } } }, s.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, s.prototype.getParent = function() { return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(a, s) { var i = t(s);
            this.addAriaAndCollapsedClass(e(i), i) }, this)).end() }, s.prototype.addAriaAndCollapsedClass = function(t, e) { var a = t.hasClass("in");
        t.attr("aria-expanded", a), e.toggleClass("collapsed", !a).attr("aria-expanded", a) }; var i = t.fn.collapse;
    t.fn.collapse = a, t.fn.collapse.Constructor = s, t.fn.collapse.noConflict = function() { return t.fn.collapse = i, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(s) { var i = t(this);
        i.attr("data-target") || s.preventDefault(); var n = e(i),
            r = n.data("bs.collapse"),
            l = r ? "toggle" : i.data();
        a.call(n, l) }) }(jQuery);
/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
! function(t, i, e, s) {
    function o(i, e) { var h = this; "object" == typeof e && (delete e.refresh, delete e.render, t.extend(this, e)), this.$element = t(i), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src")); var r = (this.position + "").toLowerCase().match(/\S+/g) || []; if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), ("top" == r[0] || "bottom" == r[0] || "left" == r[1] || "right" == r[1]) && (r = [r[1], r[0]]), this.positionX != s && (r[0] = this.positionX.toLowerCase()), this.positionY != s && (r[1] = this.positionY.toLowerCase()), h.positionX = r[0], h.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({ backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position }), this; if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({ backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position }), this;
        this.$mirror = t("<div />").prependTo("body"); var a = this.$element.find(">.parallax-slider"),
            n = !1;
        0 == a.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), n = !0), this.$mirror.addClass("parallax-mirror").css({ visibility: "hidden", zIndex: this.zIndex, position: "fixed", top: 0, left: 0, overflow: "hidden" }), this.$slider.addClass("parallax-slider").one("load", function() { h.naturalHeight && h.naturalWidth || (h.naturalHeight = this.naturalHeight || this.height || 1, h.naturalWidth = this.naturalWidth || this.width || 1), h.aspectRatio = h.naturalWidth / h.naturalHeight, o.isSetup || o.setup(), o.sliders.push(h), o.isFresh = !1, o.requestRender() }), n || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load") }

    function h(s) { return this.each(function() { var h = t(this),
                r = "object" == typeof s && s;
            this == i || this == e || h.is("body") ? o.configure(r) : h.data("px.parallax") ? "object" == typeof s && t.extend(h.data("px.parallax"), r) : (r = t.extend({}, h.data(), r), h.data("px.parallax", new o(this, r))), "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]()) }) }! function() { for (var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0; s < e.length && !i.requestAnimationFrame; ++s) i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[s] + "CancelAnimationFrame"] || i[e[s] + "CancelRequestAnimationFrame"];
        i.requestAnimationFrame || (i.requestAnimationFrame = function(e) { var s = (new Date).getTime(),
                o = Math.max(0, 16 - (s - t)),
                h = i.setTimeout(function() { e(s + o) }, o); return t = s + o, h }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function(t) { clearTimeout(t) }) }(), t.extend(o.prototype, { speed: .2, bleed: 0, zIndex: -100, iosFix: !0, androidFix: !0, position: "center", overScrollFix: !1, refresh: function() { this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight; var t = o.winHeight,
                i = o.docHeight,
                e = Math.min(this.boxOffsetTop, i - t),
                s = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
                h = this.boxHeight + (e - s) * (1 - this.speed) | 0,
                r = (this.boxOffsetTop - e) * (1 - this.speed) | 0; if (h * this.aspectRatio >= this.boxWidth) { this.imageWidth = h * this.aspectRatio | 0, this.imageHeight = h, this.offsetBaseTop = r; var a = this.imageWidth - this.boxWidth;
                this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -a : isNaN(this.positionX) ? -a / 2 | 0 : Math.max(this.positionX, -a) } else { this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0; var a = this.imageHeight - h;
                this.offsetBaseTop = "top" == this.positionY ? r : "bottom" == this.positionY ? r - a : isNaN(this.positionY) ? r - a / 2 | 0 : r + Math.max(this.positionY, -a) } }, render: function() { var t = o.scrollTop,
                i = o.scrollLeft,
                e = this.overScrollFix ? o.overScroll : 0,
                s = t + o.winHeight;
            this.boxOffsetBottom > t && this.boxOffsetTop <= s ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - i, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({ transform: "translate3d(0px, 0px, 0px)", visibility: this.visibility, top: this.mirrorTop - e, left: this.mirrorLeft, height: this.boxHeight, width: this.boxWidth }), this.$slider.css({ transform: "translate3d(0px, 0px, 0px)", position: "absolute", top: this.offsetTop, left: this.offsetLeft, height: this.imageHeight, width: this.imageWidth, maxWidth: "none" }) } }), t.extend(o, { scrollTop: 0, scrollLeft: 0, winHeight: 0, winWidth: 0, docHeight: 1 << 30, docWidth: 1 << 30, sliders: [], isReady: !1, isFresh: !1, isBusy: !1, setup: function() { if (!this.isReady) { var s = t(e),
                    h = t(i),
                    r = function() { o.winHeight = h.height(), o.winWidth = h.width(), o.docHeight = s.height(), o.docWidth = s.width() },
                    a = function() { var t = h.scrollTop(),
                            i = o.docHeight - o.winHeight,
                            e = o.docWidth - o.winWidth;
                        o.scrollTop = Math.max(0, Math.min(i, t)), o.scrollLeft = Math.max(0, Math.min(e, h.scrollLeft())), o.overScroll = Math.max(t - i, Math.min(t, 0)) };
                h.on("resize.px.parallax load.px.parallax", function() { r(), o.isFresh = !1, o.requestRender() }).on("scroll.px.parallax load.px.parallax", function() { a(), o.requestRender() }), r(), a(), this.isReady = !0 } }, configure: function(i) { "object" == typeof i && (delete i.refresh, delete i.render, t.extend(this.prototype, i)) }, refresh: function() { t.each(this.sliders, function() { this.refresh() }), this.isFresh = !0 }, render: function() { this.isFresh || this.refresh(), t.each(this.sliders, function() { this.render() }) }, requestRender: function() { var t = this;
            this.isBusy || (this.isBusy = !0, i.requestAnimationFrame(function() { t.render(), t.isBusy = !1 })) }, destroy: function(e) { var s, h = t(e).data("px.parallax"); for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1) this.sliders[s] == h && this.sliders.splice(s, 1);
            t(e).data("px.parallax", !1), 0 === this.sliders.length && (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o.isSetup = !1) } }); var r = t.fn.parallax;
    t.fn.parallax = h, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function() { return t.fn.parallax = r, this }, t(e).on("ready.px.parallax.data-api", function() { t('[data-parallax="scroll"]').parallax() }) }(jQuery, window, document);
/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
! function(a, b, c, d) {
    function e(b, c) { this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init() } var f = "stellar",
        g = { scrollProperty: "scroll", positionProperty: "position", horizontalScrolling: !0, verticalScrolling: !0, horizontalOffset: 0, verticalOffset: 0, responsive: !1, parallaxBackgrounds: !0, parallaxElements: !0, hideDistantElements: !0, hideElement: function(a) { a.hide() }, showElement: function(a) { a.show() } },
        h = { scroll: { getLeft: function(a) { return a.scrollLeft() }, setLeft: function(a, b) { a.scrollLeft(b) }, getTop: function(a) { return a.scrollTop() }, setTop: function(a, b) { a.scrollTop(b) } }, position: { getLeft: function(a) { return -1 * parseInt(a.css("left"), 10) }, getTop: function(a) { return -1 * parseInt(a.css("top"), 10) } }, margin: { getLeft: function(a) { return -1 * parseInt(a.css("margin-left"), 10) }, getTop: function(a) { return -1 * parseInt(a.css("margin-top"), 10) } }, transform: { getLeft: function(a) { var b = getComputedStyle(a[0])[k]; return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0 }, getTop: function(a) { var b = getComputedStyle(a[0])[k]; return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0 } } },
        i = { position: { setLeft: function(a, b) { a.css("left", b) }, setTop: function(a, b) { a.css("top", b) } }, transform: { setPosition: function(a, b, c, d, e) { a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)" } } },
        j = function() { var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                d = a("script")[0].style,
                e = ""; for (b in d)
                if (c.test(b)) { e = b.match(c)[0]; break }
            return "WebkitOpacity" in d && (e = "Webkit"), "KhtmlOpacity" in d && (e = "Khtml"),
                function(a) { return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a) } }(),
        k = j("transform"),
        l = a("<div />", { style: "background:#fff" }).css("background-position-x") !== d,
        m = l ? function(a, b, c) { a.css({ "background-position-x": b, "background-position-y": c }) } : function(a, b, c) { a.css("background-position", b + " " + c) },
        n = l ? function(a) { return [a.css("background-position-x"), a.css("background-position-y")] } : function(a) { return a.css("background-position").split(" ") },
        o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function(a) { setTimeout(a, 1e3 / 60) };
    e.prototype = { init: function() { this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({ firstLoad: !0 }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop() }, _defineElements: function() { this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent() }, _defineGetters: function() { var a = this,
                b = h[a.options.scrollProperty];
            this._getScrollLeft = function() { return b.getLeft(a.$scrollElement) }, this._getScrollTop = function() { return b.getTop(a.$scrollElement) } }, _defineSetters: function() { var b = this,
                c = h[b.options.scrollProperty],
                d = i[b.options.positionProperty],
                e = c.setLeft,
                f = c.setTop;
            this._setScrollLeft = "function" == typeof e ? function(a) { e(b.$scrollElement, a) } : a.noop, this._setScrollTop = "function" == typeof f ? function(a) { f(b.$scrollElement, a) } : a.noop, this._setPosition = d.setPosition || function(a, c, e, f, g) { b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g) } }, _handleWindowLoadAndResize: function() { var c = this,
                d = a(b);
            c.options.responsive && d.bind("load." + this.name, function() { c.refresh() }), d.bind("resize." + this.name, function() { c._detectViewport(), c.options.responsive && c.refresh() }) }, refresh: function(c) { var d = this,
                e = d._getScrollLeft(),
                f = d._getScrollTop();
            c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function() { var a = d._getScrollLeft(),
                    b = d._getScrollTop();
                d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b) }), this._setScrollLeft(e), this._setScrollTop(f) }, _detectViewport: function() { var a = this.$viewportElement.offset(),
                b = null !== a && a !== d;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0 }, _findParticles: function() { { var b = this;
                this._getScrollLeft(), this._getScrollTop() } if (this.particles !== d)
                for (var c = this.particles.length - 1; c >= 0; c--) this.particles[c].$element.data("stellar-elementIsActive", d);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() { var c, e, f, g, h, i, j, k, l, m = a(this),
                    n = 0,
                    o = 0,
                    p = 0,
                    q = 0; if (m.data("stellar-elementIsActive")) { if (m.data("stellar-elementIsActive") !== this) return } else m.data("stellar-elementIsActive", this);
                b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function() { var b = a(this); return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void(q += b.position().top)) }), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({ $element: m, $offsetParent: j, isFixed: "fixed" === m.css("position"), horizontalOffset: c, verticalOffset: e, startingPositionLeft: f, startingPositionTop: g, startingOffsetLeft: k, startingOffsetTop: l, parentOffsetLeft: n, parentOffsetTop: o, stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1, width: m.outerWidth(!0), height: m.outerHeight(!0), isHidden: !1 }) }) }, _findBackgrounds: function() { var b, c = this,
                e = this._getScrollLeft(),
                f = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function() { var b, g, h, i, j, k, l, o = a(this),
                    p = n(o),
                    q = 0,
                    r = 0,
                    s = 0,
                    t = 0; if (o.data("stellar-backgroundIsActive")) { if (o.data("stellar-backgroundIsActive") !== this) return } else o.data("stellar-backgroundIsActive", this);
                o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function() { var b = a(this); return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top)) }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({ $element: o, $offsetParent: l, isFixed: "fixed" === o.css("background-attachment"), horizontalOffset: b, verticalOffset: g, startingValueLeft: p[0], startingValueTop: p[1], startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10), startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10), startingPositionLeft: o.position().left, startingPositionTop: o.position().top, startingOffsetLeft: j, startingOffsetTop: k, parentOffsetLeft: q, parentOffsetTop: r, stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio") }) })) }, _reset: function() { var a, b, c, d, e; for (e = this.particles.length - 1; e >= 0; e--) a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null); for (e = this.backgrounds.length - 1; e >= 0; e--) d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop) }, destroy: function() { this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name) }, _setOffsets: function() { var c = this,
                d = a(b);
            d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function() { c.horizontalOffset = c.options.horizontalOffset() })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function() { c.verticalOffset = c.options.verticalOffset() })) : this.verticalOffset = this.options.verticalOffset }, _repositionElements: function() { var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(),
                l = this._getScrollTop(),
                n = !0,
                o = !0; if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) { for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--) a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0); for (j = this.backgrounds.length - 1; j >= 0; j--) c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e) } }, _handleScrollEvent: function() { var a = this,
                b = !1,
                c = function() { a._repositionElements(), b = !1 },
                d = function() { b || (o(c), b = !0) };
            this.$scrollElement.bind("scroll." + this.name, d), d() }, _startAnimationLoop: function() { var a = this;
            this._animationLoop = function() { o(a._animationLoop), a._repositionElements() }, this._animationLoop() } }, a.fn[f] = function(b) { var c = arguments; return b === d || "object" == typeof b ? this.each(function() { a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b)) }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function() { var d = a.data(this, "plugin_" + f);
            d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null) }) : void 0 }, a[f] = function() { var c = a(b); return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0)) }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e }(jQuery, this, document);
/*!
 * Lightbox v2.10.0
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2018 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */
(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['jquery'], factory); } else if (typeof exports === 'object') { module.exports = factory(require('jquery')); } else { root.lightbox = factory(root.jQuery); } }(this, function($) {
    function Lightbox(options) { this.album = [];
        this.currentImageIndex = void 0;
        this.init();
        this.options = $.extend({}, this.constructor.defaults);
        this.option(options); }
    Lightbox.defaults = { albumLabel: 'Image %1 of %2', alwaysShowNavOnTouchDevices: false, fadeDuration: 600, fitImagesInViewport: true, imageFadeDuration: 600, positionFromTop: 50, resizeDuration: 700, showImageNumberLabel: true, wrapAround: false, disableScrolling: false, sanitizeTitle: false };
    Lightbox.prototype.option = function(options) { $.extend(this.options, options); };
    Lightbox.prototype.imageCountLabel = function(currentImageNum, totalImages) { return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages); };
    Lightbox.prototype.init = function() { var self = this;
        $(document).ready(function() { self.enable();
            self.build(); }); };
    Lightbox.prototype.enable = function() { var self = this;
        $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function(event) { self.start($(event.currentTarget)); return false; }); };
    Lightbox.prototype.build = function() {
        if ($('#lightbox').length > 0) { return; }
        var self = this;
        $('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));
        this.$lightbox = $('#lightbox');
        this.$overlay = $('#lightboxOverlay');
        this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
        this.$container = this.$lightbox.find('.lb-container');
        this.$image = this.$lightbox.find('.lb-image');
        this.$nav = this.$lightbox.find('.lb-nav');
        this.containerPadding = { top: parseInt(this.$container.css('padding-top'), 10), right: parseInt(this.$container.css('padding-right'), 10), bottom: parseInt(this.$container.css('padding-bottom'), 10), left: parseInt(this.$container.css('padding-left'), 10) };
        this.imageBorderWidth = { top: parseInt(this.$image.css('border-top-width'), 10), right: parseInt(this.$image.css('border-right-width'), 10), bottom: parseInt(this.$image.css('border-bottom-width'), 10), left: parseInt(this.$image.css('border-left-width'), 10) };
        this.$overlay.hide().on('click', function() { self.end(); return false; });
        this.$lightbox.hide().on('click', function(event) {
            if ($(event.target).attr('id') === 'lightbox') { self.end(); }
            return false;
        });
        this.$outerContainer.on('click', function(event) {
            if ($(event.target).attr('id') === 'lightbox') { self.end(); }
            return false;
        });
        this.$lightbox.find('.lb-prev').on('click', function() {
            if (self.currentImageIndex === 0) { self.changeImage(self.album.length - 1); } else { self.changeImage(self.currentImageIndex - 1); }
            return false;
        });
        this.$lightbox.find('.lb-next').on('click', function() {
            if (self.currentImageIndex === self.album.length - 1) { self.changeImage(0); } else { self.changeImage(self.currentImageIndex + 1); }
            return false;
        });
        this.$nav.on('mousedown', function(event) { if (event.which === 3) { self.$nav.css('pointer-events', 'none');
                self.$lightbox.one('contextmenu', function() { setTimeout(function() { this.$nav.css('pointer-events', 'auto'); }.bind(self), 0); }); } });
        this.$lightbox.find('.lb-loader, .lb-close').on('click', function() { self.end(); return false; });
    };
    Lightbox.prototype.start = function($link) {
        var self = this;
        var $window = $(window);
        $window.on('resize', $.proxy(this.sizeOverlay, this));
        $('select, object, embed').css({ visibility: 'hidden' });
        this.sizeOverlay();
        this.album = [];
        var imageNumber = 0;

        function addToAlbum($link) { self.album.push({ alt: $link.attr('data-alt'), link: $link.attr('href'), title: $link.attr('data-title') || $link.attr('title') }); }
        var dataLightboxValue = $link.attr('data-lightbox');
        var $links;
        if (dataLightboxValue) { $links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]'); for (var i = 0; i < $links.length; i = ++i) { addToAlbum($($links[i])); if ($links[i] === $link[0]) { imageNumber = i; } } } else { if ($link.attr('rel') === 'lightbox') { addToAlbum($link); } else { $links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]'); for (var j = 0; j < $links.length; j = ++j) { addToAlbum($($links[j])); if ($links[j] === $link[0]) { imageNumber = j; } } } }
        var top = $window.scrollTop() + this.options.positionFromTop;
        var left = $window.scrollLeft();
        this.$lightbox.css({ top: top + 'px', left: left + 'px' }).fadeIn(this.options.fadeDuration);
        if (this.options.disableScrolling) { $('html').addClass('lb-disable-scrolling'); }
        this.changeImage(imageNumber);
    };
    Lightbox.prototype.changeImage = function(imageNumber) {
        var self = this;
        this.disableKeyboardNav();
        var $image = this.$lightbox.find('.lb-image');
        this.$overlay.fadeIn(this.options.fadeDuration);
        $('.lb-loader').fadeIn('slow');
        this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();
        this.$outerContainer.addClass('animating');
        var preloader = new Image();
        preloader.onload = function() {
            var $preloader;
            var imageHeight;
            var imageWidth;
            var maxImageHeight;
            var maxImageWidth;
            var windowHeight;
            var windowWidth;
            $image.attr({ 'alt': self.album[imageNumber].alt, 'src': self.album[imageNumber].link });
            $preloader = $(preloader);
            $image.width(preloader.width);
            $image.height(preloader.height);
            if (self.options.fitImagesInViewport) {
                windowWidth = $(window).width();
                windowHeight = $(window).height();
                maxImageWidth = windowWidth - self.containerPadding.left - self.containerPadding.right - self.imageBorderWidth.left - self.imageBorderWidth.right - 20;
                maxImageHeight = windowHeight - self.containerPadding.top - self.containerPadding.bottom - self.imageBorderWidth.top - self.imageBorderWidth.bottom - 120;
                if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) { maxImageWidth = self.options.maxWidth; }
                if (self.options.maxHeight && self.options.maxHeight < maxImageWidth) { maxImageHeight = self.options.maxHeight; }
                if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) { if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) { imageWidth = maxImageWidth;
                        imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
                        $image.width(imageWidth);
                        $image.height(imageHeight); } else { imageHeight = maxImageHeight;
                        imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
                        $image.width(imageWidth);
                        $image.height(imageHeight); } }
            }
            self.sizeContainer($image.width(), $image.height());
        };
        preloader.src = this.album[imageNumber].link;
        this.currentImageIndex = imageNumber;
    };
    Lightbox.prototype.sizeOverlay = function() { this.$overlay.width($(document).width()).height($(document).height()); };
    Lightbox.prototype.sizeContainer = function(imageWidth, imageHeight) {
        var self = this;
        var oldWidth = this.$outerContainer.outerWidth();
        var oldHeight = this.$outerContainer.outerHeight();
        var newWidth = imageWidth + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right;
        var newHeight = imageHeight + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;

        function postResize() { self.$lightbox.find('.lb-dataContainer').width(newWidth);
            self.$lightbox.find('.lb-prevLink').height(newHeight);
            self.$lightbox.find('.lb-nextLink').height(newHeight);
            self.showImage(); }
        if (oldWidth !== newWidth || oldHeight !== newHeight) { this.$outerContainer.animate({ width: newWidth, height: newHeight }, this.options.resizeDuration, 'swing', function() { postResize(); }); } else { postResize(); }
    };
    Lightbox.prototype.showImage = function() { this.$lightbox.find('.lb-loader').stop(true).hide();
        this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration);
        this.updateNav();
        this.updateDetails();
        this.preloadNeighboringImages();
        this.enableKeyboardNav(); };
    Lightbox.prototype.updateNav = function() {
        var alwaysShowNav = false;
        try { document.createEvent('TouchEvent');
            alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false; } catch (e) {}
        this.$lightbox.find('.lb-nav').show();
        if (this.album.length > 1) {
            if (this.options.wrapAround) {
                if (alwaysShowNav) { this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1'); }
                this.$lightbox.find('.lb-prev, .lb-next').show();
            } else {
                if (this.currentImageIndex > 0) { this.$lightbox.find('.lb-prev').show(); if (alwaysShowNav) { this.$lightbox.find('.lb-prev').css('opacity', '1'); } }
                if (this.currentImageIndex < this.album.length - 1) { this.$lightbox.find('.lb-next').show(); if (alwaysShowNav) { this.$lightbox.find('.lb-next').css('opacity', '1'); } }
            }
        }
    };
    Lightbox.prototype.updateDetails = function() {
        var self = this;
        if (typeof this.album[this.currentImageIndex].title !== 'undefined' && this.album[this.currentImageIndex].title !== '') {
            var $caption = this.$lightbox.find('.lb-caption');
            if (this.options.sanitizeTitle) { $caption.text(this.album[this.currentImageIndex].title); } else { $caption.html(this.album[this.currentImageIndex].title); }
            $caption.fadeIn('fast').find('a').on('click', function(event) { if ($(this).attr('target') !== undefined) { window.open($(this).attr('href'), $(this).attr('target')); } else { location.href = $(this).attr('href'); } });
        }
        if (this.album.length > 1 && this.options.showImageNumberLabel) { var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast'); } else { this.$lightbox.find('.lb-number').hide(); }
        this.$outerContainer.removeClass('animating');
        this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function() { return self.sizeOverlay(); });
    };
    Lightbox.prototype.preloadNeighboringImages = function() {
        if (this.album.length > this.currentImageIndex + 1) { var preloadNext = new Image();
            preloadNext.src = this.album[this.currentImageIndex + 1].link; }
        if (this.currentImageIndex > 0) { var preloadPrev = new Image();
            preloadPrev.src = this.album[this.currentImageIndex - 1].link; }
    };
    Lightbox.prototype.enableKeyboardNav = function() { $(document).on('keyup.keyboard', $.proxy(this.keyboardAction, this)); };
    Lightbox.prototype.disableKeyboardNav = function() { $(document).off('.keyboard'); };
    Lightbox.prototype.keyboardAction = function(event) { var KEYCODE_ESC = 27; var KEYCODE_LEFTARROW = 37; var KEYCODE_RIGHTARROW = 39; var keycode = event.keyCode; var key = String.fromCharCode(keycode).toLowerCase(); if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) { this.end(); } else if (key === 'p' || keycode === KEYCODE_LEFTARROW) { if (this.currentImageIndex !== 0) { this.changeImage(this.currentImageIndex - 1); } else if (this.options.wrapAround && this.album.length > 1) { this.changeImage(this.album.length - 1); } } else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) { if (this.currentImageIndex !== this.album.length - 1) { this.changeImage(this.currentImageIndex + 1); } else if (this.options.wrapAround && this.album.length > 1) { this.changeImage(0); } } };
    Lightbox.prototype.end = function() { this.disableKeyboardNav();
        $(window).off('resize', this.sizeOverlay);
        this.$lightbox.fadeOut(this.options.fadeDuration);
        this.$overlay.fadeOut(this.options.fadeDuration);
        $('select, object, embed').css({ visibility: 'visible' }); if (this.options.disableScrolling) { $('html').removeClass('lb-disable-scrolling'); } };
    return new Lightbox();
}));

! function(a, b, c, d) {
    function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) { this._handlers[c] = a.proxy(this[c], this) }, this)), a.each(e.Plugins, a.proxy(function(a, b) { this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Workers, a.proxy(function(b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() } e.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, { filter: ["width", "items", "settings"], run: function(a) { var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };!c && this.$stage.children().css(e), a.css = e } }, { filter: ["width", "items", "settings"], run: function(a) { var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = []; for (a.items = { merge: !1, width: b }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f } }, { filter: ["items", "settings"], run: function() { var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = ""; for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage) } }, { filter: ["width", "items", "settings"], run: function() { for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f } }, { filter: ["width", "items", "settings"], run: function() { var a = this.settings.stagePadding,
                b = this._coordinates,
                c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
            this.$stage.css(c) } }, { filter: ["width", "items", "settings"], run: function(a) { var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children(); if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css)) } }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function() { var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = []; for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center")) } }], e.prototype.initialize = function() { if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) { var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b) } this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized") }, e.prototype.setup = function() { var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) { a <= b && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }) }, e.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function(b) { var c = this.trigger("prepare", { content: b }); return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data }, e.prototype.update = function() { for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) { return this[a] }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid") }, e.prototype.width = function(a) { switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, e.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, e.prototype.onThrottledResize = function() { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function() { return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))))) }, e.prototype.registerEventHandlers = function() { a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this))) }, e.prototype.onDragStart = function(b) { var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) { var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag")) }, this))) }, e.prototype.onDragMove = function(a) { var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x)) }, e.prototype.onDragEnd = function(b) { var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged")) }, e.prototype.closest = function(b, c) { var d = -1,
            e = 30,
            f = this.width(),
            g = this.coordinates(); return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) { return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1 }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d }, e.prototype.animate = function(b) { var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : c ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b + "px" }) }, e.prototype.is = function(a) { return this._states.current[a] && this._states.current[a] > 0 }, e.prototype.current = function(a) { if (a === d) return this._current; if (0 === this._items.length) return d; if (a = this.normalize(a), this._current !== a) { var b = this.trigger("change", { property: { name: "position", value: a } });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } }) } return this._current }, e.prototype.invalidate = function(b) { return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) { return b }) }, e.prototype.reset = function(a) { a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function(a, b) { var c = this._items.length,
            e = b ? 0 : this._clones.length; return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a }, e.prototype.relative = function(a) { return a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function(a) { var b, c, d, e = this.settings,
            f = this._coordinates.length; if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) { for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
            f = b + 1 } else f = e.center ? this._items.length - 1 : this._items.length - e.items; return a && (f -= this._clones.length / 2), Math.max(f, 0) }, e.prototype.minimum = function(a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function(a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function(a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function(b) { var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) { return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2 }; return b === d ? a.map(this._clones, function(a, b) { return f(b) }) : a.map(this._clones, function(a, c) { return a === b ? f(c) : null }) }, e.prototype.speed = function(a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function(b) { var c, e = 1,
            f = b - 1; return b === d ? a.map(this._coordinates, a.proxy(function(a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c)) }, e.prototype.duration = function(a, b, c) { return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function(a, b) { var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update() }, e.prototype.next = function(a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function(a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.onTransitionEnd = function(a) { if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated") }, e.prototype.viewport = function() { var d; return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d }, e.prototype.replace = function(b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() { return 1 === this.nodeType }).each(a.proxy(function(a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, e.prototype.add = function(b, c) { var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", { content: b, position: c }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", { content: b, position: c }) }, e.prototype.remove = function(a) { a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.preloadAutoWidthImages = function(b) { b.each(a.proxy(function(b, c) { this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) { c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")) }, this)) }, e.prototype.destroy = function() { this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize)); for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel") }, e.prototype.op = function(a, b, c) { var d = this.settings.rtl; switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c } }, e.prototype.on = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function(a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function(b, c, d, f, g) { var h = { item: { count: this._items.length, index: this.current() } },
            i = a.camelCase(a.grep(["on", b, d], function(a) { return a }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c)); return this._supress[b] || (a.each(this._plugins, function(a, b) { b.onTrigger && b.onTrigger(j) }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j }, e.prototype.enter = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++ }, this)) }, e.prototype.leave = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b]-- }, this)) }, e.prototype.register = function(b) { if (b.type === e.Type.Event) { if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) { var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) { return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments) }, a.event.special[b.name].owl = !0 } } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) { return a.inArray(c, this._states.tags[b.name]) === d }, this))) }, e.prototype.suppress = function(b) { a.each(b, a.proxy(function(a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function(b) { a.each(b, a.proxy(function(a, b) { delete this._supress[b] }, this)) }, e.prototype.pointer = function(a) { var c = { x: null, y: null }; return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c }, e.prototype.isNumeric = function(a) { return !isNaN(parseFloat(a)) }, e.prototype.difference = function(a, b) { return { x: a.x - b.x, y: a.y - b.y } }, a.fn.owlCarousel = function(b) { var c = Array.prototype.slice.call(arguments, 1); return this.each(function() { var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) { f.register({ type: e.Type.Event, name: c }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) { a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c])) }, f)) })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c) }) }, a.fn.owlCarousel.Constructor = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function() { this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, e.prototype.refresh = function() { this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, e.prototype.destroy = function() { var a, c;
        b.clearInterval(this._interval); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) { if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) { this.load(b) }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++ }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { lazyLoad: !1 }, e.prototype.load = function(c) { var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) { var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() { f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g) }, this)), this._loaded.push(d.get(0))) }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update() }, this), "loaded.owl.lazy": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function() { var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;
        a.each(d, function(b, c) { e.push(a(c).height()) }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass) }, e.prototype.destroy = function() { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this), "resize.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault() }, this), "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" === a.property.name && this._playing && this.stop() }, this), "prepared.owl.carousel": a.proxy(function(b) { if (b.namespace) { var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content))) } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) { this.play(a) }, this)) };
    e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function(a, b) { var c = function() { return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube" }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href"); if (!g) throw new Error("Missing video URL."); if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else { if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar" } d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]) }, e.prototype.thumbnail = function(b, c) { var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e) }; if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1; "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a[0].thumbnail_large, l(f) } }) : "vzaar" === c.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a.framegrab_url, l(f) } }) }, e.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, e.prototype.play = function(b) { var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing")) }, e.prototype.isInFullScreen = function() { var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return b && a(b).parent().hasClass("owl-video-frame") }, e.prototype.destroy = function() { var a, b;
        this._core.$element.off("click.owl.video"); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Video = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) { a.namespace && (this.swapping = "translated" == a.type) }, this), "translate.owl.carousel": a.proxy(function(a) { a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function() { if (1 === this.core.settings.items && a.support.animation && a.support.transition) { this.core.speed(0); var b, c = a.proxy(this.clear, this),
                    d = this.core.$stage.children().eq(this.previous),
                    e = this.core.$stage.children().eq(this.next),
                    f = this.core.settings.animateIn,
                    g = this.core.settings.animateOut;
                this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f)) } }, e.prototype.clear = function(b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) },
        a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._timeout = null, this._paused = !1, this._handlers = { "changed.owl.carousel": a.proxy(function(a) { a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval() }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": a.proxy(function(a, b, c) { a.namespace && this.play(b, c) }, this), "stop.owl.autoplay": a.proxy(function(a) { a.namespace && this.stop() }, this), "mouseover.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options) };
    e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype.play = function(a, b) { this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval()) }, e.prototype._getNextTimeout = function(d, e) { return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() { this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed) }, this), d || this._core.settings.autoplayTimeout) }, e.prototype._setAutoPlayInterval = function() { this._timeout = this._getNextTimeout() }, e.prototype.stop = function() { this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating")) }, e.prototype.pause = function() { this._core.is("rotating") && (this._paused = !0) }, e.prototype.destroy = function() { var a, b;
        this.stop(); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { "use strict"; var e = function(b) { this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function(b) { b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && this.draw() }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers) };
    e.Defaults = { nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function() { var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) { this.prev(c.navSpeed) }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) { this.next(c.navSpeed) }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) { var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed) }, this)); for (b in this._overrides) this._core[b] = a.proxy(this[b], this) }, e.prototype.destroy = function() { var a, b, c, d; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, e.prototype.update = function() { var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items; if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) { if (b >= h || 0 === b) { if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break;
                    b = 0, ++c } b += this._core.mergers(this._core.relative(a)) } }, e.prototype.draw = function() { var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active")) }, e.prototype.onTrigger = function(b) { var c = this._core.settings;
        b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) } }, e.prototype.current = function() { var b = this._core.relative(this._core.current()); return a.grep(this._pages, a.proxy(function(a, c) { return a.start <= b && a.end >= b }, this)).pop() }, e.prototype.getPosition = function(b) { var c, d, e = this._core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c }, e.prototype.next = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, e.prototype.prev = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, e.prototype.to = function(b, c, d) { var e;!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { "use strict"; var e = function(c) { this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function(c) { c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": a.proxy(function(b) { if (b.namespace) { var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash"); if (!c) return;
                    this._hashes[c] = b.content } }, this), "changed.owl.carousel": a.proxy(function(c) { if (c.namespace && "position" === c.property.name) { var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function(a, b) { return a === d ? b : null }).join(); if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) { var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0) }, this)) };
    e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function() { var c, d;
        a(b).off("hashchange.owl.navigation"); for (c in this._handlers) this._core.$element.off(c, this._handlers[c]); for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null) }, a.fn.owlCarousel.Constructor.Plugins.Hash = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) { var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1); return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) { if (g[b] !== d) return e = !c || b, !1 }), e }

    function f(a) { return e(a, !0) } var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        j = { csstransforms: function() { return !!e("transform") }, csstransforms3d: function() { return !!e("perspective") }, csstransitions: function() { return !!e("transition") }, cssanimations: function() { return !!e("animation") } };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d()) }(window.Zepto || window.jQuery, window, document);
jQuery(document).ready(function($) {
    var jump = function(e) {
        if (e) { var target = $(this).attr("href").replace('/', ''); } else { var target = location.hash; }
        $('html,body').animate({ scrollTop: ($(target).offset().top) - 100 }, 500, function() {});
    }
    $(document).ready(function($) { $(document).on('click', 'a[href*=#]', jump); if (location.hash) { setTimeout(function() { $('html, body').scrollTop(0).show();
                jump(); }, 0); } });
    $(window).on('load resize', function() {
        if ($('.col-eq-ht').length) { $('.col-eq-ht').matchHeight(); }
        if ($('.midfloat-c').length && $('.midfloat-p').length) { $('.midfloat-p').centerFloat('.midfloat-c'); }
    });
    $(window).on('load scroll', function() { var h = $('header'),
            hc = $('#header_clear'),
            nvht = h.outerHeight(),
            scht = $(window).scrollTop(),
            mm = $('#mobile--nav');
        mm.css('top', nvht); if (scht > nvht-65) { hc.height(nvht);
            h.addClass('scrolled');
            hc.addClass('scrolled');
            mm.addClass('scrolled'); } else { h.removeClass('scrolled');
            hc.removeClass('scrolled');
            mm.removeClass('scrolled'); } });
    if ($('#mobile--nav')) { var mm = $('#mobile--nav');
        $('#mobile-toggle').click(function() { $(this).toggleClass('active');
            mm.animate({ height: 'toggle' }, 250, 'swing'); });
        $('#mobile--nav .menu-item-has-children > a').click(function(event) { if ($(this).parent('.menu-item-has-children').hasClass('active')) {} else { event.preventDefault();
                $(this).parent('.menu-item-has-children').addClass('active'); } }); }
    $('body').bind('touchstart', function() {});
    $('.acc_toggle').click(function() { $($(this).siblings($(this).attr('data-toggle'))).animate({ height: 'toggle' }, 250, 'swing');
        $(this).toggleClass('active'); });
    $('.ydb_toggle').click(function() { $($(this).attr('data-toggle')).animate({ height: 'toggle' }, 250, 'swing');
        $(this).toggleClass('active'); var attr = $(this).attr('data-linked'); if (typeof attr !== typeof undefined && attr !== false) { $(attr).toggleClass('active'); } });
    $(window).load(function() { $(window).stellar({ responsive: true, }); });
    $('.ydb_banner_text').hover(function() { $('.ydb_banner_text').removeClass('active');
        $('.ydb_banner_shape').removeClass('active');
        $(this).addClass('active');
        $('.ydb_b_' + $(this).attr('data-toggle')).addClass('active'); });
    $('.ydb_banner_reset').hover(function() { $('.ydb_banner_text').addClass('active');
        $('.ydb_banner_shape').addClass('active'); });
    if ($('.ydb_team_holder').length) {
        $('.ydb_team_holder').click(function() {
            var tib = $('#ydb_team_info_band');
            var t = $('.ydb_team_holder');
            if ($(this).hasClass('active')) { $(this).removeClass('active');
                tib.removeClass('active');
                tib.removeClass('th1 th2 th3'); } else {
                t.removeClass('active');
                tib.removeClass('active');
                tib.removeClass('th1 th2 th3');
                tib.detach();
                var pos = t.index($(this)) + 1;
                if ($(window).width() <= 767) { var iAn = Math.ceil(pos / 1) * 1; var bpn = 1; var bpc = 'th1'; } else if ($(window).width() <= 991) { var iAn = Math.ceil(pos / 2) * 2; var bpn = 2; var bpc = 'th2'; } else { var iAn = Math.ceil(pos / 3) * 3; var bpn = 3; var bpc = 'th3'; }
                var rdn = Math.floor(pos / bpn),
                    sn = rdn * bpn,
                    aPos = pos - sn;
                if (!aPos) { aPos = bpn; };
                if (iAn > $('.ydb_team_holder').length) { var iAn = $('.ydb_team_holder').length };
                console.log(iAn);
                tib.insertAfter('.ydb_team_holder:nth-child(' + (iAn) + ')');
                var teaminfo = $(this).find('.ydb_team_info').html();
                tib.html(teaminfo);
                tib.addClass('active');
                tib.addClass('th' + aPos);
                $(this).addClass('active');
            }
        });
    }
    if ($('#ptb_blog-cats').length) { $('#blog-top-toggle').click(function() { $('#blog-ptop').toggleClass('active');
            $('#ptb_blog-cats').toggleClass('active');
            $('#ptb_blog-cats').animate({ height: 'toggle' }, 250, 'swing'); }); }

    function detectIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) { return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10); }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) { var rv = ua.indexOf('rv:'); return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10); }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) { return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10); }
        return false;
    }
    if (detectIE()) { $("#main_wrapper").addClass('ie IE' + detectIE()); }
    if ($('.ydb_slider').length) { $(".ydb_slider").owlCarousel({ loop: true, items: 1, nav: true, autoplay: true, dots: false }); }
});
! function(a, b) { "use strict";

    function c() { if (!e) { e = !0; var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content"); for (c = 0; c < i.length; c++) { if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f); if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d) } } } var d = !1,
        e = !1; if (b.querySelector)
        if (a.addEventListener) d = !0; if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) { var d = c.data; if (d.secret || d.message || d.value)
                    if (!/[^a-zA-Z0-9]/.test(d.secret)) { var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                            k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]'); for (e = 0; e < k.length; e++) k[e].style.display = "none"; for (e = 0; e < j.length; e++)
                            if (f = j[e], c.source === f.contentWindow) { if (f.removeAttribute("style"), "height" === d.message) { if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                    else if (~~g < 200) g = 200;
                                    f.height = g } if ("link" === d.message)
                                    if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                        if (b.activeElement === f) a.top.location.href = d.value } else; } }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1) }(window, document);
// from: https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal
var modal = document.getElementById('regionDetails');
var modalContent = document.getElementById('modal-content');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
regionDetails = function(region) {
    modal.style.display = "block";
    modalContent.innerHTML ="<span class=\"close\">&times;</span><p>Region Details</p><p>Region: " + region + "</p>\n<p>Segment: " + region + "</p>";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}