!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
            return e[t]
        }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 317)
}({
    0: function (e, t, n) {
        "use strict";
        var r = [{
            defaultEnabled: !0,
            site: "topit.me",
            srcPattern: "https?://.{2,}.topit.me/.*",
            replaceRule1: [/[/][mst][/]/g, /[mst][.]jpg/g, /[/][mst]/g],
            replaceRule2: ["/l/", "l.jpg", "/l"]
        }, {
            defaultEnabled: !0,
            site: "bilibili",
            srcPattern: "i\\d\\.hdslb\\.com",
            replaceRule1: [/@(\d+[a-z]_?)+\.webp$/i],
            replaceRule2: [""]
        }, {
            defaultEnabled: !0,
            site: "新浪微博",
            srcPattern: "https?://.*[.]sinaimg[.]cn/.*",
            replaceRule1: [/[/]small[/]/, /[/]square[/]/, /[/]thumbnail[/]/, /[/]bmiddle[/]/, /[/]thumb[\d]*[/]/, /[/]mw[\d]+[/]/, /\/orj\d+\//],
            replaceRule2: ["/large/", "/large/", "/large/", "/large/", "/large/", "/large/", "/large/"]
        }, {
            defaultEnabled: !0,
            site: "QQ相册/空间",
            srcPattern: "https?://.*[.]photo[.]store[.]qq[.]com/.*",
            replaceRule1: [/[/]m[/]/, /&w=[\d]+&h=[\d]+/],
            replaceRule2: ["/o/", ""]
        }, {
            defaultEnabled: !0,
            site: "QQ相册/空间 - new",
            srcPattern: "qpic.cn/psb",
            replaceRule1: [/\/m\//],
            replaceRule2: ["/b/"]
        }, {
            defaultEnabled: !0,
            site: "考拉海购",
            srcPattern: "pop.nosdn.127.net|haitao.nosdn\\d+.127.net|haitao.nos.netease.com",
            replaceRule1: [/\?imageView.*/],
            replaceRule2: [""]
        }, {
            defaultEnabled: !0,
            site: "QQ相册2",
            srcPattern: "https?://group[.]store[.]qq[.]com/.*",
            replaceRule1: [/[\/]400$/, /[/]200$/, /[/]100$/],
            replaceRule2: ["/800", "/800", "/800"]
        }, {
            defaultEnabled: !0,
            site: "Twitter",
            srcPattern: "https://pbs.twimg.com/media/.*\\?format=",
            replaceRule1: [/format=(.+?)\b.*/],
            replaceRule2: ["format=$1&name=4096x4096"]
        }, {
            defaultEnabled: !0,
            site: "百度图趣",
            srcPattern: "https?://hiphotos[.]baidu[.]com/.*",
            replaceRule1: [/[/]abpic[/]/, /[/]pin[/]w=[\d]+[/].+[/]/],
            replaceRule2: ["/pic/", "/pin/pic/item/"]
        }, {
            defaultEnabled: !0,
            site: "豆瓣相册",
            srcPattern: "https?://img[\\d]*[.]douban(io)?[.]com/.*",
            replaceRule1: [/[/]thumb[/]/, /[/]albumicon[/]/, "photo/m/"],
            replaceRule2: ["/photo/", "/photo/", "photo/l/"]
        }, {
            defaultEnabled: !0,
            site: "花瓣",
            srcPattern: "https?://img[.]hb[.]aicdn[.]com/.*|hbimg.huabanimg.com",
            replaceRule1: [/_fw[\d]+[w]*$|_\/fw\/\d+.*|_fw[\d]+.*$/],
            replaceRule2: [""]
        }, {
            defaultEnabled: !0,
            site: "Flickr",
            srcPattern: ".*[.]staticflickr[.]com.*",
            replaceRule1: [/_[ms]\.jpg$/],
            replaceRule2: ["_b.jpg"]
        }, {
            defaultEnabled: !0,
            site: "Google+",
            srcPattern: "http.*lh.*\\.googleusercontent.com.*",
            replaceRule1: [/[/]w\d+-h\d+(-n)*-k[/]/],
            replaceRule2: ["/s1600/"]
        }, {
            defaultEnabled: !0,
            site: "迅雷方舟",
            srcPattern: "http.*\\.xlpan\\.kanimg\\.com.*",
            replaceRule1: [/&s=.*[\d]+.*$/],
            replaceRule2: ["&s=1600"]
        }, {
            defaultEnabled: !0,
            site: "poco.cn",
            srcPattern: "http.*image[\\d]*-c.poco.cn.*",
            replaceRule1: [/_\d{3}.jpg$/],
            replaceRule2: [".jpg"]
        }, {
            defaultEnabled: !0,
            site: "pconline太平洋摄影",
            srcPattern: "http.*.pconline.com.cn.*",
            replaceRule1: [/_mthumb.jpg$/, /_thumb.jpg$/],
            replaceRule2: [".jpg", ".jpg"]
        }, {
            defaultEnabled: !0,
            site: "yangkeduo",
            srcPattern: "(img.pddpic.com|img.yangkeduo.com)",
            replaceRule1: [/\/webp$/i],
            replaceRule2: ["jpg"]
        }, {
            defaultEnabled: !0,
            site: "美丽说",
            srcPattern: "(http.*[.]meilishuo[.]net.*)|(http.*[.]meiliworks[.]com.*)",
            replaceRule1: [/[/]l[/]/, /[/]r[/]/],
            replaceRule2: ["/_o/", "/_o/"]
        }, {
            defaultEnabled: !0,
            site: "蘑菇街",
            srcPattern: "https?://.*[.]mogujie[.]cn/.*",
            replaceRule1: [/_[\d]{3}x[\d]+.jpg$/],
            replaceRule2: ["_468x468.jpg"]
        }, {
            defaultEnabled: !0,
            site: "又拍网",
            srcPattern: "https?://photo.yupoo.com/.*.jpg",
            replaceRule1: [/(square.jpg$)|(fw200.jpg$)/],
            replaceRule2: ["medish.jpg"]
        }, {
            defaultEnabled: !0,
            site: "brickvisual",
            srcPattern: "https?://brickvisual.com/.*.jpg",
            replaceRule1: [/-\d+x\d+\.jpg$/],
            replaceRule2: [".jpg"]
        }, {
            defaultEnabled: !0,
            site: "archdaily",
            srcPattern: "https?://images.adsttc.com.qtlcn.com/media/images/.*?.jpg.*?",
            replaceRule1: [/\/\w+\/([\w%]+)\.jpg.*?/],
            replaceRule2: ["/large_jpg/$1.jpg"]
        }, {
            defaultEnabled: !0,
            site: "hao123美图",
            srcPattern: "http.*img.*[.]hao123[.]com.*",
            replaceRule1: [/_310$/],
            replaceRule2: ["_0"]
        }, {
            defaultEnabled: !0,
            site: "pinterest",
            srcPattern: "https?://.*[.]pinimg[.]com/.*.jpg",
            replaceRule1: [/[/]2([\d]+)x[/]/, /474/, /i.pinimg.com\/\d+x.*?\//],
            replaceRule2: ["/7$1x/", "736", "i.pinimg.com/originals/"]
        }, {
            defaultEnabled: !0,
            site: "1688",
            srcPattern: "https?://cbu01.alicdn.com/img/ibank/.*\\..*x.*\\.jpg",
            replaceRule1: [/_\.webp$/, /\.\d+x\d+\./, ".220x220xz."],
            replaceRule2: ["", ".", "."]
        }, {
            defaultEnabled: !0,
            site: "淘宝天猫",
            srcPattern: "alicdn.com",
            replaceRule1: [/_\.webp/, /\.jpg\_\d+x\d+\.jpg$/, /_\d+x\d+\.jpg$/, /_\d+x\d+q\d+\.jpg$/, /\.\d+x\d+\.jpg$/, /\.jpg_\d+x\d+xzq\d+\.jpg$/, /_\d+x\d+.*?\.(jpg|webp|png)$/],
            replaceRule2: ["", ".jpg", "_800x800.jpg", "", ".jpg", ".jpg", ""]
        }, {
            defaultEnabled: !0,
            site: "京东",
            srcPattern: "360buyimg.com",
            replaceRule1: [/\/n\d+\//, /s\d+x\d+_jfs/, /!cc_50x64.jpg$/, /\!q\d+\.dpg\.webp$/],
            replaceRule2: ["/imgzone/", "jfs", "", ""]
        }, {
            defaultEnabled: !0,
            site: "唯品会",
            srcPattern: "a.vpimg\\d+.com/upload",
            replaceRule1: [/(_\d+)*x\d+(_\d+)*.jpg/],
            replaceRule2: [".jpg"]
        }, {
            defaultEnabled: !0,
            site: "Amazon",
            srcPattern: "images-na.ssl-images-amazon.com/images",
            replaceRule1: [/\.[^./]+\.jpg/],
            replaceRule2: [".jpg"]
        }, {
            defaultEnabled: !0,
            site: "小红书",
            srcPattern: "ci.xiaohongshu.com",
            replaceRule1: [/\?imageView2\/2\/w\/100\/h\/100\/q\/90/],
            replaceRule2: [""]
        }, {
            defaultEnabled: !0,
            site: "airbnb",
            srcPattern: "muscache..+/im/pictures",
            replaceRule1: [/\?aki_policy=.*|\?tdsourcetag=s_pcqq_aiomsg/],
            replaceRule2: ["?aki_policy=xx_large"]
        }, {
            defaultEnabled: !0,
            site: "美工云",
            srcPattern: "src.meigongyun.com/forum.*\\.jpg-png_gif",
            replaceRule1: [/\.jpg-png_gif/],
            replaceRule2: [".jpg-homeSlide"]
        }, {
            site: "shein.com",
            srcPattern: "//img.ltwebstatic.com/images2_pi/.*_thumbnail.*\\.jpg",
            replaceRule1: [/_thumbnail.*?\./],
            replaceRule2: ["."]
        }, {
            defaultEnabled: !0,
            site: "易派客 epec.com",
            srcPattern: "//img.epec.com/.*\\.(jpg|png)",
            replaceRule1: [/\.(jpg|png).\d+w_\d+h_.*/],
            replaceRule2: [".$1"]
        }, {
            defaultEnabled: !0,
            site: "pailixiang.com",
            srcPattern: "http://img.pailixiang.com.*@!(pbig|psmall)",
            replaceRule1: [/.!(pbig|psmall)/],
            replaceRule2: [""]
        }, {
            defaultEnabled: !0,
            site: "aikucun",
            srcPattern: "akmer.aikucun.com/",
            replaceRule1: [/\?x-oss-process.*/],
            replaceRule2: [""]
        }, {
            defaultEnabled: !0,
            site: "lookbooks.com",
            srcPattern: "amazonaws.com.*/lg_|lookbookspro.com.*/lg_",
            replaceRule1: [/\/lg_/],
            replaceRule2: ["/gxl_"]
        }, {
            defaultEnabled: !0,
            site: "www.aplusprod.com",
            srcPattern: "images.squarespace-cdn.com/content/.*?format=\\d+w",
            replaceRule1: [/\?format=\d+w/],
            replaceRule2: [""]
        }, {
            defaultEnabled: !0,
            site: "unsplash.com",
            srcPattern: "images.unsplash.com/photo-",
            replaceRule1: [/&auto=format&.*|&w=\d+.*/],
            replaceRule2: [""]
        }, {
            defaultEnabled: !0,
            site: "m.inmuu.com",
            srcPattern: "s.tupianzhibo.cn/image/jpeg.*!listpc",
            replaceRule1: [/!listpc/],
            replaceRule2: [""]
        }, {
            defaultEnabled: !0,
            site: "www.reiss.com",
            srcPattern: "www.reiss.com/media/product",
            replaceRule1: [/\?format=.*/],
            replaceRule2: [""]
        }, {
            defaultEnabled: !0,
            site: "微相册",
            srcPattern: "xcimg.szwego.com/.*.jpg\\?imageMogr2.*",
            replaceRule1: [/\?imageMogr2.*/],
            replaceRule2: [""]
        }, {
            defaultEnabled: !0,
            site: "人人网",
            srcPattern: "fmn.xnpic.com|fmn.rrfmn.com",
            replaceRule1: [/\p\/(.*?)_p/],
            replaceRule2: ["p"]
        }, {
            defaultEnabled: !0,
            site: "知乎",
            srcPattern: "pic\\d.zhimg.com",
            replaceRule1: [/\.com\\\d+\//, "_hd."],
            replaceRule2: [".com/", "_r."]
        }, {
            defaultEnabled: !0,
            site: "堆糖",
            srcPattern: "duitang.com/uploads/item/.*\\.thumb\\.",
            replaceRule1: [/\.thumb.*\./],
            replaceRule2: ["."]
        }, {
            defaultEnabled: !0,
            site: "POCO",
            srcPattern: "pocoimg.cn/image/poco",
            replaceRule1: [/_W\d+.jpg/],
            replaceRule2: [".jpg"]
        }, {
            defaultEnabled: !0,
            site: "DHgate",
            srcPattern: "www.dhresource.com",
            replaceRule1: [/\/\d+x\d+(s?)\//],
            replaceRule2: ["/0x0$1/"]
        }, {
            defaultEnabled: !0,
            site: "yzcdn",
            srcPattern: "img.yzcdn.cn/upload_files",
            replaceRule1: [/!large.webp/],
            replaceRule2: [""]
        }, {
            defaultEnabled: !0,
            site: "途家民宿",
            srcPattern: "pic.tujia.com/upload/.*/thumb/",
            replaceRule1: ["_300_200"],
            replaceRule2: ["_1500_1003"]
        }, {
            defaultEnabled: !0,
            site: "kidsfootlocker",
            srcPattern: "images.footlocker.com",
            replaceRule1: ["&fmt=png-alpha", /wid=\d+/, /hei=\d+/],
            replaceRule2: ["", "wid=640", "hei=640"]
        }, {
            defaultEnabled: !1,
            site: "美叶 www.meiye.art",
            srcPattern: "images.psketch.com",
            replaceRule1: [/_min_.*/, "?imageView2/2/w/500"],
            replaceRule2: ["", ""]
        }, {
            defaultEnabled: !1,
            site: "caselio.com",
            srcPattern: "medias-caselio.e-systemes",
            replaceRule1: [/_\d+\.jpg$/],
            replaceRule2: [".jpg"]
        }, {
            defaultEnabled: !1,
            site: "gallery.vphotos.cn",
            srcPattern: "img.vphotos.cn",
            replaceRule1: ["logothumb"],
            replaceRule2: ["logosmall"]
        }, {
            defaultEnabled: !1,
            site: "bp.pep.com.cn",
            srcPattern: "bp.pep.com.cn/ebook/",
            replaceRule1: ["/thumb/"],
            replaceRule2: ["/mobile/"]
        }, {
            defaultEnabled: !1,
            site: "www.archdaily.com",
            srcPattern: "images.adsttc.com",
            replaceRule1: ["/thumb_jpg/"],
            replaceRule2: ["/slideshow/"]
        }, {
            defaultEnabled: !0,
            site: "洋码头 ymatou.com",
            srcPattern: "pic\\d+.ymatou.com/",
            replaceRule1: ["_i.jpg"],
            replaceRule2: ["_o.jpg"]
        }, {
            defaultEnabled: !0,
            site: "站酷",
            srcPattern: "img.zcool.cn/community",
            replaceRule1: [/@.*/],
            replaceRule2: [""]
        }, {
            defaultEnabled: !1,
            site: "FURLA",
            srcPattern: "furla-cdn.thron.cn/delivery/public/image",
            replaceRule1: [/\/std\/\d+x\d+/],
            replaceRule2: ["/std/1000x1000"]
        }, {
            defaultEnabled: !1,
            site: "图虫网",
            srcPattern: "photo.tuchong.com|pstatp.com/weili",
            replaceRule1: [/\/ft\d+\//, "/sm/"],
            replaceRule2: ["/f/", "/l/"]
        }, {
            defaultEnabled: !1,
            site: "Pexels",
            srcPattern: "images.pexels.com",
            replaceRule1: [/\?.*/],
            replaceRule2: [""]
        }, {
            defaultEnabled: !0,
            site: "Youtuge",
            srcPattern: "i.ytimg.com/",
            replaceRule1: ["hqdefault"],
            replaceRule2: ["maxresdefault"]
        }];

        function i(e, t) {
            var n, r = {
                "Y+": t.getFullYear().toString(),
                "m+": (t.getMonth() + 1).toString(),
                "d+": t.getDate().toString(),
                "H+": t.getHours().toString(),
                "M+": t.getMinutes().toString(),
                "S+": t.getSeconds().toString()
            };
            for (var i in r) (n = new RegExp("(" + i + ")").exec(e)) && (e = e.replace(n[1], 1 == n[1].length ? r[i] : r[i].padStart(n[1].length, "0")));
            return e
        }

        function o(e) {
            if (!(e > 0)) return "0B";
            var t = "B";
            return e > 1024 && (t = "KB", e /= 1024), e > 1024 && (t = "MB", e /= 1024), e > 1024 && (t = "GB", e /= 1024), e > 1024 && (t = "TB", e /= 1024), e > 1024 && (t = "PB", e /= 1024), e > 1024 && (t = "EB", e /= 1024), e.toFixed(2) + t
        }

        function a(e) {
            if (e.match(/^data/)) return e;
            for (var t = 0; t < r.length; t++) {
                var n = r[t], i = new RegExp(n.srcPattern);
                if (i && i.test(e)) {
                    var o = e;
                    try {
                        for (var a = 0; a < n.replaceRule1.length; a++) o = o.replace(n.replaceRule1[a], n.replaceRule2[a]);
                        return o
                    } catch (e) {
                        console.log("image rule error:", e)
                    }
                }
            }
            return e
        }

        function s(e) {
            var t = localStorage.getItem("imgRule"), n = t || "DM_{DATE}_{NO001}.{EXT}";
            if (n = (n = (n = n.replace(/.\{EXT\}$/, "")).replace(/\{PAGETITLE\}/g, e.title)).replace(/\{DATE\}/g, i("YYYYmmddHHMMSS", new Date)), null != e.name && (n = n.replace(/\{NAME\}/g, e.name)), null != e.imgType && (n = n.replace(/\{EXT\}/g, e.imgType)), null != e.index) if (n.search(/\{NO[\d]*\}/g) > -1) {
                var r = (n = n.replace(/\{NO\}/g, e.index + 1)).match(/\{NO([\d]+)\}/);
                if (r) {
                    var o = r[1], a = o.length, s = e.index + parseInt(o);
                    ("" + s).length < a && (s = ("000000000000000000000000000000" + s).substr(-a)), n = n.replace(/\{NO([\d]+)\}/g, s)
                }
            } else e.index > 0 && (n += "(" + e.index + ")");
            return n
        }

        function l(e) {
            var t = e.split("?");
            return (t = (t = t[0].split("/"))[t.length - 1].split("#"))[0].toLowerCase()
        }

        n.d(t, "a", (function () {
            return i
        })), n.d(t, "e", (function () {
            return o
        })), n.d(t, "c", (function () {
            return a
        })), n.d(t, "d", (function () {
            return s
        })), n.d(t, "b", (function () {
            return l
        }))
    }, 3: function (e, t, n) {
        "use strict";

        function r(e, t) {
            for (var n = [], r = {}, i = 0; i < t.length; i++) {
                var o = t[i], a = o[0], s = {id: e + ":" + i, css: o[1], media: o[2], sourceMap: o[3]};
                r[a] ? r[a].parts.push(s) : n.push(r[a] = {id: a, parts: [s]})
            }
            return n
        }

        n.r(t), n.d(t, "default", (function () {
            return f
        }));
        var i = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !i) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var o = {}, a = i && (document.head || document.getElementsByTagName("head")[0]), s = null, l = 0, u = !1,
            c = function () {
            }, p = null, d = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

        function f(e, t, n, i) {
            u = n, p = i || {};
            var a = r(e, t);
            return h(a), function (t) {
                for (var n = [], i = 0; i < a.length; i++) {
                    var s = a[i];
                    (l = o[s.id]).refs--, n.push(l)
                }
                t ? h(a = r(e, t)) : a = [];
                for (i = 0; i < n.length; i++) {
                    var l;
                    if (0 === (l = n[i]).refs) {
                        for (var u = 0; u < l.parts.length; u++) l.parts[u]();
                        delete o[l.id]
                    }
                }
            }
        }

        function h(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t], r = o[n.id];
                if (r) {
                    r.refs++;
                    for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
                    for (; i < n.parts.length; i++) r.parts.push(m(n.parts[i]));
                    r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                } else {
                    var a = [];
                    for (i = 0; i < n.parts.length; i++) a.push(m(n.parts[i]));
                    o[n.id] = {id: n.id, refs: 1, parts: a}
                }
            }
        }

        function g() {
            var e = document.createElement("style");
            return e.type = "text/css", a.appendChild(e), e
        }

        function m(e) {
            var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
            if (r) {
                if (u) return c;
                r.parentNode.removeChild(r)
            }
            if (d) {
                var i = l++;
                r = s || (s = g()), t = b.bind(null, r, i, !1), n = b.bind(null, r, i, !0)
            } else r = g(), t = x.bind(null, r), n = function () {
                r.parentNode.removeChild(r)
            };
            return t(e), function (r) {
                if (r) {
                    if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                    t(e = r)
                } else n()
            }
        }

        var v, y = (v = [], function (e, t) {
            return v[e] = t, v.filter(Boolean).join("\n")
        });

        function b(e, t, n, r) {
            var i = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, i); else {
                var o = document.createTextNode(i), a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
            }
        }

        function x(e, t) {
            var n = t.css, r = t.media, i = t.sourceMap;
            if (r && e.setAttribute("media", r), p.ssrId && e.setAttribute("data-vue-ssr-id", t.id), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), e.styleSheet) e.styleSheet.cssText = n; else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
    }, 317: function (e, t, n) {
        e.exports = n(318)
    }, 318: function (e, t, n) {
        "use strict";
        n.r(t);
        n(319);
        var r = n(60);

        function i(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0, i = function () {
                    };
                    return {
                        s: i, n: function () {
                            return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                        }, e: function (e) {
                            throw e
                        }, f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, s = !0, l = !1;
            return {
                s: function () {
                    n = n.call(e)
                }, n: function () {
                    var e = n.next();
                    return s = e.done, e
                }, e: function (e) {
                    l = !0, a = e
                }, f: function () {
                    try {
                        s || null == n.return || n.return()
                    } finally {
                        if (l) throw a
                    }
                }
            }
        }

        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        document.onkeydown = function (e) {
            var t = {
                tip: "opNewTab",
                e: {
                    keyCode: e.keyCode,
                    code: e.code,
                    ctrlKey: e.ctrlKey,
                    shiftKey: e.shiftKey,
                    altKey: e.altKey,
                    metaKey: e.metaKey
                }
            };
            chrome.runtime.sendMessage(t)
        };
        var a = [], s = [], l = [], u = {}, c = {}, p = {};

        function d(e) {
            var t = e.split("?");
            return (t = (t = t[0].split("/"))[t.length - 1].split("#"))[0].toLowerCase()
        }

        function f() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, t = 0, n = Array.from(e.getElementsByTagName("video")); t < n.length; t++) {
                var r = n[t];
                r.getAttribute("src") && !c[r.src] && -1 === r.src.search(/^blob:/i) && (c[r.src] = !0, s.push(), chrome.runtime.sendMessage({
                    tip: "addVideoBg",
                    row: {
                        type: "video",
                        thumb: r.poster,
                        url: r.src,
                        fileName: d(r.src),
                        bytSize: 0,
                        videoType: "",
                        isSelect: !1
                    }
                }))
            }
        }

        chrome.extension.onMessage.addListener((function (e, t, n) {
            "addVideoRow" === e.tip ? e.lists.forEach((function (e) {
                u[e.url] || (u[e.url] = !0, e.fileName || (e.fileName = document.title.split("-")[0]), "true" === e.superSpecialFileName && (e.superSpecialFileName = e.fileName += " 第" + e.videoIndex + "段"), e.title = document.title, a.push(e), chrome.runtime.sendMessage({
                    tip: "grabVideo",
                    row: e
                }))
            })) : "addAudioRowFromBg" === e.tip ? e.lists.forEach((function (e) {
                u[e.url] || (u[e.url] = !0, a.push(e), chrome.runtime.sendMessage({tip: "grabVideo", row: e}))
            })) : "addAudioRow" === e.tip ? e.lists.forEach((function (e) {
                c[e.url] || (c[e.url] = !0, e.title = document.title, s.push(e))
            })) : "addFileRow" === e.tip ? e.lists.forEach((function (e) {
                p[e.url] || (p[e.url] = !0, e.title = document.title, l.push(e))
            })) : "queryVideo" === e.tip ? n(a) : "queryAudio" === e.tip ? n(s) : "queryFile" === e.tip && n(l)
        })), setInterval((function () {
            var e, t = i(function e() {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, n = [t], r = 0, i = Array.from(t.querySelectorAll("iframe")); r < i.length; r++) {
                    var o = i[r];
                    try {
                        n = n.concat(e(o.contentDocument || o.contentWindow.document))
                    } catch (e) {
                    }
                }
                return n
            }());
            try {
                for (t.s(); !(e = t.n()).done;) {
                    f(e.value)
                }
            } catch (e) {
                t.e(e)
            } finally {
                t.f()
            }
        }), 500), chrome.runtime.sendMessage({tip: "get_config", name: "enabledDragDownload"}, (function (e) {
            "true" === e && r.a.addDragDownload()
        }))
    }, 319: function (e, t, n) {
        var r = n(320);
        r.__esModule && (r = r.default), "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
        (0, n(3).default)("411e6cd7", r, !0, {})
    }, 320: function (e, t, n) {
    }, 4: function (e, t, n) {
        var r;
        /*!
         * jQuery JavaScript Library v3.6.0
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2021-03-02T17:08Z
         */
        !function (t, n) {
            "use strict";
            "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : this, (function (n, i) {
            "use strict";
            var o = [], a = Object.getPrototypeOf, s = o.slice, l = o.flat ? function (e) {
                    return o.flat.call(e)
                } : function (e) {
                    return o.concat.apply([], e)
                }, u = o.push, c = o.indexOf, p = {}, d = p.toString, f = p.hasOwnProperty, h = f.toString,
                g = h.call(Object), m = {}, v = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                }, y = function (e) {
                    return null != e && e === e.window
                }, b = n.document, x = {type: !0, src: !0, nonce: !0, noModule: !0};

            function w(e, t, n) {
                var r, i, o = (n = n || b).createElement("script");
                if (o.text = e, t) for (r in x) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                n.head.appendChild(o).parentNode.removeChild(o)
            }

            function T(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[d.call(e)] || "object" : typeof e
            }

            var E = function (e, t) {
                return new E.fn.init(e, t)
            };

            function C(e) {
                var t = !!e && "length" in e && e.length, n = T(e);
                return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }

            E.fn = E.prototype = {
                jquery: "3.6.0", constructor: E, length: 0, toArray: function () {
                    return s.call(this)
                }, get: function (e) {
                    return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
                }, pushStack: function (e) {
                    var t = E.merge(this.constructor(), e);
                    return t.prevObject = this, t
                }, each: function (e) {
                    return E.each(this, e)
                }, map: function (e) {
                    return this.pushStack(E.map(this, (function (t, n) {
                        return e.call(t, n, t)
                    })))
                }, slice: function () {
                    return this.pushStack(s.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, even: function () {
                    return this.pushStack(E.grep(this, (function (e, t) {
                        return (t + 1) % 2
                    })))
                }, odd: function () {
                    return this.pushStack(E.grep(this, (function (e, t) {
                        return t % 2
                    })))
                }, eq: function (e) {
                    var t = this.length, n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor()
                }, push: u, sort: o.sort, splice: o.splice
            }, E.extend = E.fn.extend = function () {
                var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
                for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (u && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(u, o, r)) : void 0 !== r && (a[t] = r));
                return a
            }, E.extend({
                expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                    throw new Error(e)
                }, noop: function () {
                }, isPlainObject: function (e) {
                    var t, n;
                    return !(!e || "[object Object]" !== d.call(e)) && (!(t = a(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && h.call(n) === g)
                }, isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                }, globalEval: function (e, t, n) {
                    w(e, {nonce: t && t.nonce}, n)
                }, each: function (e, t) {
                    var n, r = 0;
                    if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                }, makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (C(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
                }, inArray: function (e, t, n) {
                    return null == t ? -1 : c.call(t, e, n)
                }, merge: function (e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e
                }, grep: function (e, t, n) {
                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                    return r
                }, map: function (e, t, n) {
                    var r, i, o = 0, a = [];
                    if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                    return l(a)
                }, guid: 1, support: m
            }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = o[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
                p["[object " + t + "]"] = t.toLowerCase()
            }));
            var j =
                /*!
             * Sizzle CSS Selector Engine v2.3.6
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2021-02-16
             */
                function (e) {
                    var t, n, r, i, o, a, s, l, u, c, p, d, f, h, g, m, v, y, b, x = "sizzle" + 1 * new Date,
                        w = e.document, T = 0, E = 0, C = le(), j = le(), R = le(), k = le(), S = function (e, t) {
                            return e === t && (p = !0), 0
                        }, A = {}.hasOwnProperty, D = [], N = D.pop, P = D.push, q = D.push, L = D.slice,
                        _ = function (e, t) {
                            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                            return -1
                        },
                        M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        O = "[\\x20\\t\\r\\n\\f]",
                        H = "(?:\\\\[\\da-fA-F]{1,6}" + O + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                        $ = "\\[" + O + "*(" + H + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + O + "*\\]",
                        I = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
                        B = new RegExp(O + "+", "g"),
                        W = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                        F = new RegExp("^" + O + "*," + O + "*"),
                        z = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"), U = new RegExp(O + "|>"),
                        X = new RegExp(I), V = new RegExp("^" + H + "$"), Y = {
                            ID: new RegExp("^#(" + H + ")"),
                            CLASS: new RegExp("^\\.(" + H + ")"),
                            TAG: new RegExp("^(" + H + "|[*])"),
                            ATTR: new RegExp("^" + $),
                            PSEUDO: new RegExp("^" + I),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + M + ")$", "i"),
                            needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
                        }, G = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i,
                        J = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
                        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + O + "?|\\\\([^\\r\\n\\f])", "g"),
                        ne = function (e, t) {
                            var n = "0x" + e.slice(1) - 65536;
                            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
                            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                        }, oe = function () {
                            d()
                        }, ae = xe((function (e) {
                            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                        }), {dir: "parentNode", next: "legend"});
                    try {
                        q.apply(D = L.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
                    } catch (e) {
                        q = {
                            apply: D.length ? function (e, t) {
                                P.apply(e, L.call(t))
                            } : function (e, t) {
                                for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                                e.length = n - 1
                            }
                        }
                    }

                    function se(e, t, r, i) {
                        var o, s, u, c, p, h, v, y = t && t.ownerDocument, w = t ? t.nodeType : 9;
                        if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                        if (!i && (d(t), t = t || f, g)) {
                            if (11 !== w && (p = Z.exec(e))) if (o = p[1]) {
                                if (9 === w) {
                                    if (!(u = t.getElementById(o))) return r;
                                    if (u.id === o) return r.push(u), r
                                } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return r.push(u), r
                            } else {
                                if (p[2]) return q.apply(r, t.getElementsByTagName(e)), r;
                                if ((o = p[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(r, t.getElementsByClassName(o)), r
                            }
                            if (n.qsa && !k[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                                if (v = e, y = t, 1 === w && (U.test(e) || z.test(e))) {
                                    for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = x)), s = (h = a(e)).length; s--;) h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
                                    v = h.join(",")
                                }
                                try {
                                    return q.apply(r, y.querySelectorAll(v)), r
                                } catch (t) {
                                    k(e, !0)
                                } finally {
                                    c === x && t.removeAttribute("id")
                                }
                            }
                        }
                        return l(e.replace(W, "$1"), t, r, i)
                    }

                    function le() {
                        var e = [];
                        return function t(n, i) {
                            return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                        }
                    }

                    function ue(e) {
                        return e[x] = !0, e
                    }

                    function ce(e) {
                        var t = f.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function pe(e, t) {
                        for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                    }

                    function de(e, t) {
                        var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (r) return r;
                        if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                        return e ? 1 : -1
                    }

                    function fe(e) {
                        return function (t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }

                    function he(e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }

                    function ge(e) {
                        return function (t) {
                            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                        }
                    }

                    function me(e) {
                        return ue((function (t) {
                            return t = +t, ue((function (n, r) {
                                for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                            }))
                        }))
                    }

                    function ve(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }

                    for (t in n = se.support = {}, o = se.isXML = function (e) {
                        var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
                        return !G.test(t || n && n.nodeName || "HTML")
                    }, d = se.setDocument = function (e) {
                        var t, i, a = e ? e.ownerDocument || e : w;
                        return a != f && 9 === a.nodeType && a.documentElement ? (h = (f = a).documentElement, g = !o(f), w != f && (i = f.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce((function (e) {
                            return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        })), n.attributes = ce((function (e) {
                            return e.className = "i", !e.getAttribute("className")
                        })), n.getElementsByTagName = ce((function (e) {
                            return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                        })), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = ce((function (e) {
                            return h.appendChild(e).id = x, !f.getElementsByName || !f.getElementsByName(x).length
                        })), n.getById ? (r.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }, r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (r.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n, r, i, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                }
                                return []
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function (e, t) {
                            var n, r = [], i = 0, o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                        }, v = [], m = [], (n.qsa = J.test(f.querySelectorAll)) && (ce((function (e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + O + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + O + "*name" + O + "*=" + O + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                        })), ce((function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = f.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + O + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                        }))), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function (e) {
                            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", I)
                        })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function (e, t) {
                            if (t) for (; t = t.parentNode;) if (t === e) return !0;
                            return !1
                        }, S = t ? function (e, t) {
                            if (e === t) return p = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == f || e.ownerDocument == w && b(w, e) ? -1 : t == f || t.ownerDocument == w && b(w, t) ? 1 : c ? _(c, e) - _(c, t) : 0 : 4 & r ? -1 : 1)
                        } : function (e, t) {
                            if (e === t) return p = !0, 0;
                            var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                            if (!i || !o) return e == f ? -1 : t == f ? 1 : i ? -1 : o ? 1 : c ? _(c, e) - _(c, t) : 0;
                            if (i === o) return de(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; a[r] === s[r];) r++;
                            return r ? de(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                        }, f) : f
                    }, se.matches = function (e, t) {
                        return se(e, null, null, t)
                    }, se.matchesSelector = function (e, t) {
                        if (d(e), n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                            var r = y.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (e) {
                            k(t, !0)
                        }
                        return se(t, f, null, [e]).length > 0
                    }, se.contains = function (e, t) {
                        return (e.ownerDocument || e) != f && d(e), b(e, t)
                    }, se.attr = function (e, t) {
                        (e.ownerDocument || e) != f && d(e);
                        var i = r.attrHandle[t.toLowerCase()],
                            o = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                        return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }, se.escape = function (e) {
                        return (e + "").replace(re, ie)
                    }, se.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, se.uniqueSort = function (e) {
                        var t, r = [], i = 0, o = 0;
                        if (p = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(S), p) {
                            for (; t = e[o++];) t === e[o] && (i = r.push(o));
                            for (; i--;) e.splice(r[i], 1)
                        }
                        return c = null, e
                    }, i = se.getText = function (e) {
                        var t, n = "", r = 0, o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else for (; t = e[r++];) n += i(t);
                        return n
                    }, (r = se.selectors = {
                        cacheLength: 50,
                        createPseudo: ue,
                        match: Y,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {dir: "parentNode", first: !0},
                            " ": {dir: "parentNode"},
                            "+": {dir: "previousSibling", first: !0},
                            "~": {dir: "previousSibling"}
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            }, CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                            }, PSEUDO: function (e) {
                                var t, n = !e[6] && e[2];
                                return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            }, CLASS: function (e) {
                                var t = C[e + " "];
                                return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && C(e, (function (e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }))
                            }, ATTR: function (e, t, n) {
                                return function (r) {
                                    var i = se.attr(r, e);
                                    return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                }
                            }, CHILD: function (e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                                return 1 === r && 0 === i ? function (e) {
                                    return !!e.parentNode
                                } : function (t, n, l) {
                                    var u, c, p, d, f, h, g = o !== a ? "nextSibling" : "previousSibling",
                                        m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                                    if (m) {
                                        if (o) {
                                            for (; g;) {
                                                for (d = t; d = d[g];) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                h = g = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                            for (b = (f = (u = (c = (p = (d = m)[x] || (d[x] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] || [])[0] === T && u[1]) && u[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (b = f = 0) || h.pop();) if (1 === d.nodeType && ++b && d === t) {
                                                c[e] = [T, f, b];
                                                break
                                            }
                                        } else if (y && (b = f = (u = (c = (p = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] || [])[0] === T && u[1]), !1 === b) for (; (d = ++f && d && d[g] || (b = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (p = d[x] || (d[x] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] = [T, b]), d !== t));) ;
                                        return (b -= i) === r || b % r == 0 && b / r >= 0
                                    }
                                }
                            }, PSEUDO: function (e, t) {
                                var n,
                                    i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function (e, n) {
                                    for (var r, o = i(e, t), a = o.length; a--;) e[r = _(e, o[a])] = !(n[r] = o[a])
                                })) : function (e) {
                                    return i(e, 0, n)
                                }) : i
                            }
                        },
                        pseudos: {
                            not: ue((function (e) {
                                var t = [], n = [], r = s(e.replace(W, "$1"));
                                return r[x] ? ue((function (e, t, n, i) {
                                    for (var o, a = r(e, null, i, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
                                })) : function (e, i, o) {
                                    return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                }
                            })), has: ue((function (e) {
                                return function (t) {
                                    return se(e, t).length > 0
                                }
                            })), contains: ue((function (e) {
                                return e = e.replace(te, ne), function (t) {
                                    return (t.textContent || i(t)).indexOf(e) > -1
                                }
                            })), lang: ue((function (e) {
                                return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                                    var n;
                                    do {
                                        if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                            })), target: function (t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            }, root: function (e) {
                                return e === h
                            }, focus: function (e) {
                                return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            }, selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            }, empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                return !0
                            }, parent: function (e) {
                                return !r.pseudos.empty(e)
                            }, header: function (e) {
                                return K.test(e.nodeName)
                            }, input: function (e) {
                                return Q.test(e.nodeName)
                            }, button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            }, text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            }, first: me((function () {
                                return [0]
                            })), last: me((function (e, t) {
                                return [t - 1]
                            })), eq: me((function (e, t, n) {
                                return [n < 0 ? n + t : n]
                            })), even: me((function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            })), odd: me((function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            })), lt: me((function (e, t, n) {
                                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                return e
                            })), gt: me((function (e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            }))
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = fe(t);
                    for (t in {submit: !0, reset: !0}) r.pseudos[t] = he(t);

                    function ye() {
                    }

                    function be(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                        return r
                    }

                    function xe(e, t, n) {
                        var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = E++;
                        return t.first ? function (t, n, i) {
                            for (; t = t[r];) if (1 === t.nodeType || a) return e(t, n, i);
                            return !1
                        } : function (t, n, l) {
                            var u, c, p, d = [T, s];
                            if (l) {
                                for (; t = t[r];) if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                            } else for (; t = t[r];) if (1 === t.nodeType || a) if (c = (p = t[x] || (t[x] = {}))[t.uniqueID] || (p[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                                if ((u = c[o]) && u[0] === T && u[1] === s) return d[2] = u[2];
                                if (c[o] = d, d[2] = e(t, n, l)) return !0
                            }
                            return !1
                        }
                    }

                    function we(e) {
                        return e.length > 1 ? function (t, n, r) {
                            for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                            return !0
                        } : e[0]
                    }

                    function Te(e, t, n, r, i) {
                        for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
                        return a
                    }

                    function Ee(e, t, n, r, i, o) {
                        return r && !r[x] && (r = Ee(r)), i && !i[x] && (i = Ee(i, o)), ue((function (o, a, s, l) {
                            var u, c, p, d = [], f = [], h = a.length, g = o || function (e, t, n) {
                                    for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                    return n
                                }(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : Te(g, d, e, s, l),
                                v = n ? i || (o ? e : h || r) ? [] : a : m;
                            if (n && n(m, v, s, l), r) for (u = Te(v, f), r(u, [], s, l), c = u.length; c--;) (p = u[c]) && (v[f[c]] = !(m[f[c]] = p));
                            if (o) {
                                if (i || e) {
                                    if (i) {
                                        for (u = [], c = v.length; c--;) (p = v[c]) && u.push(m[c] = p);
                                        i(null, v = [], u, l)
                                    }
                                    for (c = v.length; c--;) (p = v[c]) && (u = i ? _(o, p) : d[c]) > -1 && (o[u] = !(a[u] = p))
                                }
                            } else v = Te(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, l) : q.apply(a, v)
                        }))
                    }

                    function Ce(e) {
                        for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, c = xe((function (e) {
                            return e === t
                        }), s, !0), p = xe((function (e) {
                            return _(t, e) > -1
                        }), s, !0), d = [function (e, n, r) {
                            var i = !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
                            return t = null, i
                        }]; l < o; l++) if (n = r.relative[e[l].type]) d = [xe(we(d), n)]; else {
                            if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                                for (i = ++l; i < o && !r.relative[e[i].type]; i++) ;
                                return Ee(l > 1 && we(d), l > 1 && be(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(W, "$1"), n, l < i && Ce(e.slice(l, i)), i < o && Ce(e = e.slice(i)), i < o && be(e))
                            }
                            d.push(n)
                        }
                        return we(d)
                    }

                    return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function (e, t) {
                        var n, i, o, a, s, l, u, c = j[e + " "];
                        if (c) return t ? 0 : c.slice(0);
                        for (s = e, l = [], u = r.preFilter; s;) {
                            for (a in n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
                                value: n,
                                type: i[0].replace(W, " ")
                            }), s = s.slice(n.length)), r.filter) !(i = Y[a].exec(s)) || u[a] && !(i = u[a](i)) || (n = i.shift(), o.push({
                                value: n,
                                type: a,
                                matches: i
                            }), s = s.slice(n.length));
                            if (!n) break
                        }
                        return t ? s.length : s ? se.error(e) : j(e, l).slice(0)
                    }, s = se.compile = function (e, t) {
                        var n, i = [], o = [], s = R[e + " "];
                        if (!s) {
                            for (t || (t = a(e)), n = t.length; n--;) (s = Ce(t[n]))[x] ? i.push(s) : o.push(s);
                            (s = R(e, function (e, t) {
                                var n = t.length > 0, i = e.length > 0, o = function (o, a, s, l, c) {
                                    var p, h, m, v = 0, y = "0", b = o && [], x = [], w = u,
                                        E = o || i && r.find.TAG("*", c), C = T += null == w ? 1 : Math.random() || .1,
                                        j = E.length;
                                    for (c && (u = a == f || a || c); y !== j && null != (p = E[y]); y++) {
                                        if (i && p) {
                                            for (h = 0, a || p.ownerDocument == f || (d(p), s = !g); m = e[h++];) if (m(p, a || f, s)) {
                                                l.push(p);
                                                break
                                            }
                                            c && (T = C)
                                        }
                                        n && ((p = !m && p) && v--, o && b.push(p))
                                    }
                                    if (v += y, n && y !== v) {
                                        for (h = 0; m = t[h++];) m(b, x, a, s);
                                        if (o) {
                                            if (v > 0) for (; y--;) b[y] || x[y] || (x[y] = N.call(l));
                                            x = Te(x)
                                        }
                                        q.apply(l, x), c && !o && x.length > 0 && v + t.length > 1 && se.uniqueSort(l)
                                    }
                                    return c && (T = C, u = w), b
                                };
                                return n ? ue(o) : o
                            }(o, i))).selector = e
                        }
                        return s
                    }, l = se.select = function (e, t, n, i) {
                        var o, l, u, c, p, d = "function" == typeof e && e, f = !i && a(e = d.selector || e);
                        if (n = n || [], 1 === f.length) {
                            if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
                                if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                                d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                            }
                            for (o = Y.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !r.relative[c = u.type]);) if ((p = r.find[c]) && (i = p(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                                if (l.splice(o, 1), !(e = i.length && be(l))) return q.apply(n, i), n;
                                break
                            }
                        }
                        return (d || s(e, f))(i, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
                    }, n.sortStable = x.split("").sort(S).join("") === x, n.detectDuplicates = !!p, d(), n.sortDetached = ce((function (e) {
                        return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
                    })), ce((function (e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    })) || pe("type|href|height|width", (function (e, t, n) {
                        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    })), n.attributes && ce((function (e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    })) || pe("value", (function (e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                    })), ce((function (e) {
                        return null == e.getAttribute("disabled")
                    })) || pe(M, (function (e, t, n) {
                        var r;
                        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    })), se
                }(n);
            E.find = j, E.expr = j.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = j.uniqueSort, E.text = j.getText, E.isXMLDoc = j.isXML, E.contains = j.contains, E.escapeSelector = j.escape;
            var R = function (e, t, n) {
                for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                    if (i && E(e).is(n)) break;
                    r.push(e)
                }
                return r
            }, k = function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }, S = E.expr.match.needsContext;

            function A(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }

            var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function N(e, t, n) {
                return v(t) ? E.grep(e, (function (e, r) {
                    return !!t.call(e, r, e) !== n
                })) : t.nodeType ? E.grep(e, (function (e) {
                    return e === t !== n
                })) : "string" != typeof t ? E.grep(e, (function (e) {
                    return c.call(t, e) > -1 !== n
                })) : E.filter(t, e, n)
            }

            E.filter = function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, (function (e) {
                    return 1 === e.nodeType
                })))
            }, E.fn.extend({
                find: function (e) {
                    var t, n, r = this.length, i = this;
                    if ("string" != typeof e) return this.pushStack(E(e).filter((function () {
                        for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0
                    })));
                    for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
                    return r > 1 ? E.uniqueSort(n) : n
                }, filter: function (e) {
                    return this.pushStack(N(this, e || [], !1))
                }, not: function (e) {
                    return this.pushStack(N(this, e || [], !0))
                }, is: function (e) {
                    return !!N(this, "string" == typeof e && S.test(e) ? E(e) : e || [], !1).length
                }
            });
            var P, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (E.fn.init = function (e, t, n) {
                var r, i;
                if (!e) return this;
                if (n = n || P, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), D.test(r[1]) && E.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (i = b.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
            }).prototype = E.fn, P = E(b);
            var L = /^(?:parents|prev(?:Until|All))/, _ = {children: !0, contents: !0, next: !0, prev: !0};

            function M(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;) ;
                return e
            }

            E.fn.extend({
                has: function (e) {
                    var t = E(e, this), n = t.length;
                    return this.filter((function () {
                        for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0
                    }))
                }, closest: function (e, t) {
                    var n, r = 0, i = this.length, o = [], a = "string" != typeof e && E(e);
                    if (!S.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
                    return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o)
                }, index: function (e) {
                    return e ? "string" == typeof e ? c.call(E(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (e, t) {
                    return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
                }, addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), E.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                }, parents: function (e) {
                    return R(e, "parentNode")
                }, parentsUntil: function (e, t, n) {
                    return R(e, "parentNode", n)
                }, next: function (e) {
                    return M(e, "nextSibling")
                }, prev: function (e) {
                    return M(e, "previousSibling")
                }, nextAll: function (e) {
                    return R(e, "nextSibling")
                }, prevAll: function (e) {
                    return R(e, "previousSibling")
                }, nextUntil: function (e, t, n) {
                    return R(e, "nextSibling", n)
                }, prevUntil: function (e, t, n) {
                    return R(e, "previousSibling", n)
                }, siblings: function (e) {
                    return k((e.parentNode || {}).firstChild, e)
                }, children: function (e) {
                    return k(e.firstChild)
                }, contents: function (e) {
                    return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
                }
            }, (function (e, t) {
                E.fn[e] = function (n, r) {
                    var i = E.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = E.filter(r, i)), this.length > 1 && (_[e] || E.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i)
                }
            }));
            var O = /[^\x20\t\r\n\f]+/g;

            function H(e) {
                return e
            }

            function $(e) {
                throw e
            }

            function I(e, t, n, r) {
                var i;
                try {
                    e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }

            E.Callbacks = function (e) {
                e = "string" == typeof e ? function (e) {
                    var t = {};
                    return E.each(e.match(O) || [], (function (e, n) {
                        t[n] = !0
                    })), t
                }(e) : E.extend({}, e);
                var t, n, r, i, o = [], a = [], s = -1, l = function () {
                    for (i = i || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                    e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                }, u = {
                    add: function () {
                        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                            E.each(n, (function (n, r) {
                                v(r) ? e.unique && u.has(r) || o.push(r) : r && r.length && "string" !== T(r) && t(r)
                            }))
                        }(arguments), n && !t && l()), this
                    }, remove: function () {
                        return E.each(arguments, (function (e, t) {
                            for (var n; (n = E.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                        })), this
                    }, has: function (e) {
                        return e ? E.inArray(e, o) > -1 : o.length > 0
                    }, empty: function () {
                        return o && (o = []), this
                    }, disable: function () {
                        return i = a = [], o = n = "", this
                    }, disabled: function () {
                        return !o
                    }, lock: function () {
                        return i = a = [], n || t || (o = n = ""), this
                    }, locked: function () {
                        return !!i
                    }, fireWith: function (e, n) {
                        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
                    }, fire: function () {
                        return u.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!r
                    }
                };
                return u
            }, E.extend({
                Deferred: function (e) {
                    var t = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]],
                        r = "pending", i = {
                            state: function () {
                                return r
                            }, always: function () {
                                return o.done(arguments).fail(arguments), this
                            }, catch: function (e) {
                                return i.then(null, e)
                            }, pipe: function () {
                                var e = arguments;
                                return E.Deferred((function (n) {
                                    E.each(t, (function (t, r) {
                                        var i = v(e[r[4]]) && e[r[4]];
                                        o[r[1]]((function () {
                                            var e = i && i.apply(this, arguments);
                                            e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                        }))
                                    })), e = null
                                })).promise()
                            }, then: function (e, r, i) {
                                var o = 0;

                                function a(e, t, r, i) {
                                    return function () {
                                        var s = this, l = arguments, u = function () {
                                            var n, u;
                                            if (!(e < o)) {
                                                if ((n = r.apply(s, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, v(u) ? i ? u.call(n, a(o, t, H, i), a(o, t, $, i)) : (o++, u.call(n, a(o, t, H, i), a(o, t, $, i), a(o, t, H, t.notifyWith))) : (r !== H && (s = void 0, l = [n]), (i || t.resolveWith)(s, l))
                                            }
                                        }, c = i ? u : function () {
                                            try {
                                                u()
                                            } catch (n) {
                                                E.Deferred.exceptionHook && E.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (r !== $ && (s = void 0, l = [n]), t.rejectWith(s, l))
                                            }
                                        };
                                        e ? c() : (E.Deferred.getStackHook && (c.stackTrace = E.Deferred.getStackHook()), n.setTimeout(c))
                                    }
                                }

                                return E.Deferred((function (n) {
                                    t[0][3].add(a(0, n, v(i) ? i : H, n.notifyWith)), t[1][3].add(a(0, n, v(e) ? e : H)), t[2][3].add(a(0, n, v(r) ? r : $))
                                })).promise()
                            }, promise: function (e) {
                                return null != e ? E.extend(e, i) : i
                            }
                        }, o = {};
                    return E.each(t, (function (e, n) {
                        var a = n[2], s = n[5];
                        i[n[1]] = a.add, s && a.add((function () {
                            r = s
                        }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), o[n[0]] = function () {
                            return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                        }, o[n[0] + "With"] = a.fireWith
                    })), i.promise(o), e && e.call(o, o), o
                }, when: function (e) {
                    var t = arguments.length, n = t, r = Array(n), i = s.call(arguments), o = E.Deferred(),
                        a = function (e) {
                            return function (n) {
                                r[e] = this, i[e] = arguments.length > 1 ? s.call(arguments) : n, --t || o.resolveWith(r, i)
                            }
                        };
                    if (t <= 1 && (I(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();
                    for (; n--;) I(i[n], a(n), o.reject);
                    return o.promise()
                }
            });
            var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            E.Deferred.exceptionHook = function (e, t) {
                n.console && n.console.warn && e && B.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, E.readyException = function (e) {
                n.setTimeout((function () {
                    throw e
                }))
            };
            var W = E.Deferred();

            function F() {
                b.removeEventListener("DOMContentLoaded", F), n.removeEventListener("load", F), E.ready()
            }

            E.fn.ready = function (e) {
                return W.then(e).catch((function (e) {
                    E.readyException(e)
                })), this
            }, E.extend({
                isReady: !1, readyWait: 1, ready: function (e) {
                    (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== e && --E.readyWait > 0 || W.resolveWith(b, [E]))
                }
            }), E.ready.then = W.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", F), n.addEventListener("load", F));
            var z = function (e, t, n, r, i, o, a) {
                var s = 0, l = e.length, u = null == n;
                if ("object" === T(n)) for (s in i = !0, n) z(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, v(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(E(e), n)
                })), t)) for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
            }, U = /^-ms-/, X = /-([a-z])/g;

            function V(e, t) {
                return t.toUpperCase()
            }

            function Y(e) {
                return e.replace(U, "ms-").replace(X, V)
            }

            var G = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function Q() {
                this.expando = E.expando + Q.uid++
            }

            Q.uid = 1, Q.prototype = {
                cache: function (e) {
                    var t = e[this.expando];
                    return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                }, set: function (e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[Y(t)] = n; else for (r in t) i[Y(r)] = t[r];
                    return i
                }, get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
                }, access: function (e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                }, remove: function (e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in r ? [t] : t.match(O) || []).length;
                            for (; n--;) delete r[t[n]]
                        }
                        (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                }, hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !E.isEmptyObject(t)
                }
            };
            var K = new Q, J = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;

            function te(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = function (e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {
                    }
                    J.set(e, t, n)
                } else n = void 0;
                return n
            }

            E.extend({
                hasData: function (e) {
                    return J.hasData(e) || K.hasData(e)
                }, data: function (e, t, n) {
                    return J.access(e, t, n)
                }, removeData: function (e, t) {
                    J.remove(e, t)
                }, _data: function (e, t, n) {
                    return K.access(e, t, n)
                }, _removeData: function (e, t) {
                    K.remove(e, t)
                }
            }), E.fn.extend({
                data: function (e, t) {
                    var n, r, i, o = this[0], a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = J.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = Y(r.slice(5)), te(o, r, i[r]));
                            K.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each((function () {
                        J.set(this, e)
                    })) : z(this, (function (t) {
                        var n;
                        if (o && void 0 === t) return void 0 !== (n = J.get(o, e)) || void 0 !== (n = te(o, e)) ? n : void 0;
                        this.each((function () {
                            J.set(this, e, t)
                        }))
                    }), null, t, arguments.length > 1, null, !0)
                }, removeData: function (e) {
                    return this.each((function () {
                        J.remove(this, e)
                    }))
                }
            }), E.extend({
                queue: function (e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, E.makeArray(n)) : r.push(n)), r || []
                }, dequeue: function (e, t) {
                    t = t || "fx";
                    var n = E.queue(e, t), r = n.length, i = n.shift(), o = E._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function () {
                        E.dequeue(e, t)
                    }), o)), !r && o && o.empty.fire()
                }, _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return K.get(e, n) || K.access(e, n, {
                        empty: E.Callbacks("once memory").add((function () {
                            K.remove(e, [t + "queue", n])
                        }))
                    })
                }
            }), E.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                        var n = E.queue(this, e, t);
                        E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e)
                    }))
                }, dequeue: function (e) {
                    return this.each((function () {
                        E.dequeue(this, e)
                    }))
                }, clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                }, promise: function (e, t) {
                    var n, r = 1, i = E.Deferred(), o = this, a = this.length, s = function () {
                        --r || i.resolveWith(o, [o])
                    };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = K.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"), ie = ["Top", "Right", "Bottom", "Left"],
                oe = b.documentElement, ae = function (e) {
                    return E.contains(e.ownerDocument, e)
                }, se = {composed: !0};
            oe.getRootNode && (ae = function (e) {
                return E.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
            });
            var le = function (e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === E.css(e, "display")
            };

            function ue(e, t, n, r) {
                var i, o, a = 20, s = r ? function () {
                        return r.cur()
                    } : function () {
                        return E.css(e, t, "")
                    }, l = s(), u = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                    c = e.nodeType && (E.cssNumber[t] || "px" !== u && +l) && re.exec(E.css(e, t));
                if (c && c[3] !== u) {
                    for (l /= 2, u = u || c[3], c = +l || 1; a--;) E.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;
                    c *= 2, E.style(e, t, c + u), n = n || []
                }
                return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
            }

            var ce = {};

            function pe(e) {
                var t, n = e.ownerDocument, r = e.nodeName, i = ce[r];
                return i || (t = n.body.appendChild(n.createElement(r)), i = E.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ce[r] = i, i)
            }

            function de(e, t) {
                for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = K.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && le(r) && (i[o] = pe(r))) : "none" !== n && (i[o] = "none", K.set(r, "display", n)));
                for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                return e
            }

            E.fn.extend({
                show: function () {
                    return de(this, !0)
                }, hide: function () {
                    return de(this)
                }, toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                        le(this) ? E(this).show() : E(this).hide()
                    }))
                }
            });
            var fe, he, ge = /^(?:checkbox|radio)$/i, me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ve = /^$|^module$|\/(?:java|ecma)script/i;
            fe = b.createDocumentFragment().appendChild(b.createElement("div")), (he = b.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), fe.appendChild(he), m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", m.option = !!fe.lastChild;
            var ye = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

            function be(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? E.merge([e], n) : n
            }

            function xe(e, t) {
                for (var n = 0, r = e.length; n < r; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
            }

            ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, m.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
            var we = /<|&#?\w+;/;

            function Te(e, t, n, r, i) {
                for (var o, a, s, l, u, c, p = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++) if ((o = e[f]) || 0 === o) if ("object" === T(o)) E.merge(d, o.nodeType ? [o] : o); else if (we.test(o)) {
                    for (a = a || p.appendChild(t.createElement("div")), s = (me.exec(o) || ["", ""])[1].toLowerCase(), l = ye[s] || ye._default, a.innerHTML = l[1] + E.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
                    E.merge(d, a.childNodes), (a = p.firstChild).textContent = ""
                } else d.push(t.createTextNode(o));
                for (p.textContent = "", f = 0; o = d[f++];) if (r && E.inArray(o, r) > -1) i && i.push(o); else if (u = ae(o), a = be(p.appendChild(o), "script"), u && xe(a), n) for (c = 0; o = a[c++];) ve.test(o.type || "") && n.push(o);
                return p
            }

            var Ee = /^([^.]*)(?:\.(.+)|)/;

            function Ce() {
                return !0
            }

            function je() {
                return !1
            }

            function Re(e, t) {
                return e === function () {
                    try {
                        return b.activeElement
                    } catch (e) {
                    }
                }() == ("focus" === t)
            }

            function ke(e, t, n, r, i, o) {
                var a, s;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
                    return e
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = je; else if (!i) return e;
                return 1 === o && (a = i, (i = function (e) {
                    return E().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = E.guid++)), e.each((function () {
                    E.event.add(this, t, i, r, n)
                }))
            }

            function Se(e, t, n) {
                n ? (K.set(e, t, !1), E.event.add(e, t, {
                    namespace: !1, handler: function (e) {
                        var r, i, o = K.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (o.length) (E.event.special[t] || {}).delegateType && e.stopPropagation(); else if (o = s.call(arguments), K.set(this, t, o), r = n(this, t), this[t](), o !== (i = K.get(this, t)) || r ? K.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i && i.value
                        } else o.length && (K.set(this, t, {value: E.event.trigger(E.extend(o[0], E.Event.prototype), o.slice(1), this)}), e.stopImmediatePropagation())
                    }
                })) : void 0 === K.get(e, t) && E.event.add(e, t, Ce)
            }

            E.event = {
                global: {}, add: function (e, t, n, r, i) {
                    var o, a, s, l, u, c, p, d, f, h, g, m = K.get(e);
                    if (G(e)) for (n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(oe, i), n.guid || (n.guid = E.guid++), (l = m.events) || (l = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function (t) {
                        return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(O) || [""]).length; u--;) f = g = (s = Ee.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), f && (p = E.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, p = E.event.special[f] || {}, c = E.extend({
                        type: f,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && E.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(f, a)), p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), E.event.global[f] = !0)
                }, remove: function (e, t, n, r, i) {
                    var o, a, s, l, u, c, p, d, f, h, g, m = K.hasData(e) && K.get(e);
                    if (m && (l = m.events)) {
                        for (u = (t = (t || "").match(O) || [""]).length; u--;) if (f = g = (s = Ee.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), f) {
                            for (p = E.event.special[f] || {}, d = l[f = (r ? p.delegateType : p.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(e, c));
                            a && !d.length && (p.teardown && !1 !== p.teardown.call(e, h, m.handle) || E.removeEvent(e, f, m.handle), delete l[f])
                        } else for (f in l) E.event.remove(e, f + t[u], n, r, !0);
                        E.isEmptyObject(l) && K.remove(e, "handle events")
                    }
                }, dispatch: function (e) {
                    var t, n, r, i, o, a, s = new Array(arguments.length), l = E.event.fix(e),
                        u = (K.get(this, "events") || Object.create(null))[l.type] || [],
                        c = E.event.special[l.type] || {};
                    for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                    if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                        for (a = E.event.handlers.call(this, l, u), t = 0; (i = a[t++]) && !l.isPropagationStopped();) for (l.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, l), l.result
                    }
                }, handlers: function (e, t) {
                    var n, r, i, o, a, s = [], l = t.delegateCount, u = e.target;
                    if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? E(i, this).index(u) > -1 : E.find(i, this, null, [u]).length), a[i] && o.push(r);
                        o.length && s.push({elem: u, handlers: o})
                    }
                    return u = this, l < t.length && s.push({elem: u, handlers: t.slice(l)}), s
                }, addProp: function (e, t) {
                    Object.defineProperty(E.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(t) ? function () {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function (t) {
                            Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                        }
                    })
                }, fix: function (e) {
                    return e[E.expando] ? e : new E.Event(e)
                }, special: {
                    load: {noBubble: !0}, click: {
                        setup: function (e) {
                            var t = this || e;
                            return ge.test(t.type) && t.click && A(t, "input") && Se(t, "click", Ce), !1
                        }, trigger: function (e) {
                            var t = this || e;
                            return ge.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
                        }, _default: function (e) {
                            var t = e.target;
                            return ge.test(t.type) && t.click && A(t, "input") && K.get(t, "click") || A(t, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, E.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, E.Event = function (e, t) {
                if (!(this instanceof E.Event)) return new E.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : je, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
            }, E.Event.prototype = {
                constructor: E.Event,
                isDefaultPrevented: je,
                isPropagationStopped: je,
                isImmediatePropagationStopped: je,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, E.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0
            }, E.event.addProp), E.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
                E.event.special[e] = {
                    setup: function () {
                        return Se(this, e, Re), !1
                    }, trigger: function () {
                        return Se(this, e), !0
                    }, _default: function () {
                        return !0
                    }, delegateType: t
                }
            })), E.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function (e, t) {
                E.event.special[e] = {
                    delegateType: t, bindType: t, handle: function (e) {
                        var n, r = this, i = e.relatedTarget, o = e.handleObj;
                        return i && (i === r || E.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            })), E.fn.extend({
                on: function (e, t, n, r) {
                    return ke(this, e, t, n, r)
                }, one: function (e, t, n, r) {
                    return ke(this, e, t, n, r, 1)
                }, off: function (e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = je), this.each((function () {
                        E.event.remove(this, e, n, t)
                    }))
                }
            });
            var Ae = /<script|<style|<link/i, De = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Pe(e, t) {
                return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
            }

            function qe(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function Le(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function _e(e, t) {
                var n, r, i, o, a, s;
                if (1 === t.nodeType) {
                    if (K.hasData(e) && (s = K.get(e).events)) for (i in K.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
                    J.hasData(e) && (o = J.access(e), a = E.extend({}, o), J.set(t, a))
                }
            }

            function Me(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }

            function Oe(e, t, n, r) {
                t = l(t);
                var i, o, a, s, u, c, p = 0, d = e.length, f = d - 1, h = t[0], g = v(h);
                if (g || d > 1 && "string" == typeof h && !m.checkClone && De.test(h)) return e.each((function (i) {
                    var o = e.eq(i);
                    g && (t[0] = h.call(this, i, o.html())), Oe(o, t, n, r)
                }));
                if (d && (o = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                    for (s = (a = E.map(be(i, "script"), qe)).length; p < d; p++) u = i, p !== f && (u = E.clone(u, !0, !0), s && E.merge(a, be(u, "script"))), n.call(e[p], u, p);
                    if (s) for (c = a[a.length - 1].ownerDocument, E.map(a, Le), p = 0; p < s; p++) u = a[p], ve.test(u.type || "") && !K.access(u, "globalEval") && E.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}, c) : w(u.textContent.replace(Ne, ""), u, c))
                }
                return e
            }

            function He(e, t, n) {
                for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(be(r)), r.parentNode && (n && ae(r) && xe(be(r, "script")), r.parentNode.removeChild(r));
                return e
            }

            E.extend({
                htmlPrefilter: function (e) {
                    return e
                }, clone: function (e, t, n) {
                    var r, i, o, a, s = e.cloneNode(!0), l = ae(e);
                    if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (a = be(s), r = 0, i = (o = be(e)).length; r < i; r++) Me(o[r], a[r]);
                    if (t) if (n) for (o = o || be(e), a = a || be(s), r = 0, i = o.length; r < i; r++) _e(o[r], a[r]); else _e(e, s);
                    return (a = be(s, "script")).length > 0 && xe(a, !l && be(e, "script")), s
                }, cleanData: function (e) {
                    for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++) if (G(n)) {
                        if (t = n[K.expando]) {
                            if (t.events) for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                            n[K.expando] = void 0
                        }
                        n[J.expando] && (n[J.expando] = void 0)
                    }
                }
            }), E.fn.extend({
                detach: function (e) {
                    return He(this, e, !0)
                }, remove: function (e) {
                    return He(this, e)
                }, text: function (e) {
                    return z(this, (function (e) {
                        return void 0 === e ? E.text(this) : this.empty().each((function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        }))
                    }), null, e, arguments.length)
                }, append: function () {
                    return Oe(this, arguments, (function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
                    }))
                }, prepend: function () {
                    return Oe(this, arguments, (function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Pe(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    }))
                }, before: function () {
                    return Oe(this, arguments, (function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    }))
                }, after: function () {
                    return Oe(this, arguments, (function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    }))
                }, empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(be(e, !1)), e.textContent = "");
                    return this
                }, clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function () {
                        return E.clone(this, e, t)
                    }))
                }, html: function (e) {
                    return z(this, (function (e) {
                        var t = this[0] || {}, n = 0, r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ae.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = E.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(be(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {
                            }
                        }
                        t && this.empty().append(e)
                    }), null, e, arguments.length)
                }, replaceWith: function () {
                    var e = [];
                    return Oe(this, arguments, (function (t) {
                        var n = this.parentNode;
                        E.inArray(this, e) < 0 && (E.cleanData(be(this)), n && n.replaceChild(t, this))
                    }), e)
                }
            }), E.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function (e, t) {
                E.fn[e] = function (e) {
                    for (var n, r = [], i = E(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), E(i[a])[t](n), u.apply(r, n.get());
                    return this.pushStack(r)
                }
            }));
            var $e = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"), Ie = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            }, Be = function (e, t, n) {
                var r, i, o = {};
                for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                for (i in r = n.call(e), t) e.style[i] = o[i];
                return r
            }, We = new RegExp(ie.join("|"), "i");

            function Fe(e, t, n) {
                var r, i, o, a, s = e.style;
                return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ae(e) || (a = E.style(e, t)), !m.pixelBoxStyles() && $e.test(a) && We.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function ze(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }

            !function () {
                function e() {
                    if (c) {
                        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(u).appendChild(c);
                        var e = n.getComputedStyle(c);
                        r = "1%" !== e.top, l = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", o = 12 === t(c.offsetWidth / 3), oe.removeChild(u), c = null
                    }
                }

                function t(e) {
                    return Math.round(parseFloat(e))
                }

                var r, i, o, a, s, l, u = b.createElement("div"), c = b.createElement("div");
                c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === c.style.backgroundClip, E.extend(m, {
                    boxSizingReliable: function () {
                        return e(), i
                    }, pixelBoxStyles: function () {
                        return e(), a
                    }, pixelPosition: function () {
                        return e(), r
                    }, reliableMarginLeft: function () {
                        return e(), l
                    }, scrollboxSize: function () {
                        return e(), o
                    }, reliableTrDimensions: function () {
                        var e, t, r, i;
                        return null == s && (e = b.createElement("table"), t = b.createElement("tr"), r = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", r.style.height = "9px", r.style.display = "block", oe.appendChild(e).appendChild(t).appendChild(r), i = n.getComputedStyle(t), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight, oe.removeChild(e)), s
                    }
                }))
            }();
            var Ue = ["Webkit", "Moz", "ms"], Xe = b.createElement("div").style, Ve = {};

            function Ye(e) {
                var t = E.cssProps[e] || Ve[e];
                return t || (e in Xe ? e : Ve[e] = function (e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;) if ((e = Ue[n] + t) in Xe) return e
                }(e) || e)
            }

            var Ge = /^(none|table(?!-c[ea]).+)/, Qe = /^--/,
                Ke = {position: "absolute", visibility: "hidden", display: "block"},
                Je = {letterSpacing: "0", fontWeight: "400"};

            function Ze(e, t, n) {
                var r = re.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function et(e, t, n, r, i, o) {
                var a = "width" === t ? 1 : 0, s = 0, l = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === n && (l += E.css(e, n + ie[a], !0, i)), r ? ("content" === n && (l -= E.css(e, "padding" + ie[a], !0, i)), "margin" !== n && (l -= E.css(e, "border" + ie[a] + "Width", !0, i))) : (l += E.css(e, "padding" + ie[a], !0, i), "padding" !== n ? l += E.css(e, "border" + ie[a] + "Width", !0, i) : s += E.css(e, "border" + ie[a] + "Width", !0, i));
                return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l
            }

            function tt(e, t, n) {
                var r = Ie(e), i = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
                    o = i, a = Fe(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
                if ($e.test(a)) {
                    if (!n) return a;
                    a = "auto"
                }
                return (!m.boxSizingReliable() && i || !m.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
            }

            function nt(e, t, n, r, i) {
                return new nt.prototype.init(e, t, n, r, i)
            }

            E.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = Fe(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = Y(t), l = Qe.test(t), u = e.style;
                        if (l || (t = Ye(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                        "string" === (o = typeof n) && (i = re.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n == n && ("number" !== o || l || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
                    }
                },
                css: function (e, t, n, r) {
                    var i, o, a, s = Y(t);
                    return Qe.test(t) || (t = Ye(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                }
            }), E.each(["height", "width"], (function (e, t) {
                E.cssHooks[t] = {
                    get: function (e, n, r) {
                        if (n) return !Ge.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : Be(e, Ke, (function () {
                            return tt(e, t, r)
                        }))
                    }, set: function (e, n, r) {
                        var i, o = Ie(e), a = !m.scrollboxSize() && "absolute" === o.position,
                            s = (a || r) && "border-box" === E.css(e, "boxSizing", !1, o),
                            l = r ? et(e, t, r, s, o) : 0;
                        return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - .5)), l && (i = re.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = E.css(e, t)), Ze(0, n, l)
                    }
                }
            })), E.cssHooks.marginLeft = ze(m.reliableMarginLeft, (function (e, t) {
                if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {marginLeft: 0}, (function () {
                    return e.getBoundingClientRect().left
                }))) + "px"
            })), E.each({margin: "", padding: "", border: "Width"}, (function (e, t) {
                E.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, "margin" !== e && (E.cssHooks[e + t].set = Ze)
            })), E.fn.extend({
                css: function (e, t) {
                    return z(this, (function (e, t, n) {
                        var r, i, o = {}, a = 0;
                        if (Array.isArray(t)) {
                            for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                    }), e, t, arguments.length > 1)
                }
            }), E.Tween = nt, nt.prototype = {
                constructor: nt, init: function (e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var e = nt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
                }, run: function (e) {
                    var t, n = nt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
                }
            }, nt.prototype.init.prototype = nt.prototype, nt.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    }, set: function (e) {
                        E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, E.easing = {
                linear: function (e) {
                    return e
                }, swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }, _default: "swing"
            }, E.fx = nt.prototype.init, E.fx.step = {};
            var rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;

            function st() {
                it && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(st) : n.setTimeout(st, E.fx.interval), E.fx.tick())
            }

            function lt() {
                return n.setTimeout((function () {
                    rt = void 0
                })), rt = Date.now()
            }

            function ut(e, t) {
                var n, r = 0, i = {height: e};
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ie[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function ct(e, t, n) {
                for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
            }

            function pt(e, t, n) {
                var r, i, o = 0, a = pt.prefilters.length, s = E.Deferred().always((function () {
                    delete l.elem
                })), l = function () {
                    if (i) return !1;
                    for (var t = rt || lt(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(r);
                    return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
                }, u = s.promise({
                    elem: e,
                    props: E.extend({}, t),
                    opts: E.extend(!0, {specialEasing: {}, easing: E.easing._default}, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: rt || lt(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = E.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(r), r
                    },
                    stop: function (t) {
                        var n = 0, r = t ? u.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) u.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                    }
                }), c = u.props;
                for (!function (e, t) {
                    var n, r, i, o, a;
                    for (n in e) if (i = t[r = Y(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = E.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
                }(c, u.opts.specialEasing); o < a; o++) if (r = pt.prefilters[o].call(u, e, c, u.opts)) return v(r.stop) && (E._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
                return E.map(c, ct, u), v(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), E.fx.timer(E.extend(l, {
                    elem: e,
                    anim: u,
                    queue: u.opts.queue
                })), u
            }

            E.Animation = E.extend(pt, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return ue(n.elem, e, re.exec(t), n), n
                    }]
                }, tweener: function (e, t) {
                    v(e) ? (t = e, e = ["*"]) : e = e.match(O);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
                }, prefilters: [function (e, t, n) {
                    var r, i, o, a, s, l, u, c, p = "width" in t || "height" in t, d = this, f = {}, h = e.style,
                        g = e.nodeType && le(e), m = K.get(e, "fxshow");
                    for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                        a.unqueued || s()
                    }), a.unqueued++, d.always((function () {
                        d.always((function () {
                            a.unqueued--, E.queue(e, "fx").length || a.empty.fire()
                        }))
                    }))), t) if (i = t[r], ot.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !m || void 0 === m[r]) continue;
                            g = !0
                        }
                        f[r] = m && m[r] || E.style(e, r)
                    }
                    if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(f)) for (r in p && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = m && m.display) && (u = K.get(e, "display")), "none" === (c = E.css(e, "display")) && (u ? c = u : (de([e], !0), u = e.style.display || u, c = E.css(e, "display"), de([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === E.css(e, "float") && (l || (d.done((function () {
                        h.display = u
                    })), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always((function () {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    }))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = K.access(e, "fxshow", {display: u}), o && (m.hidden = !g), g && de([e], !0), d.done((function () {
                        for (r in g || de([e]), K.remove(e, "fxshow"), f) E.style(e, r, f[r])
                    }))), l = ct(g ? m[r] : 0, r, d), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0))
                }], prefilter: function (e, t) {
                    t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
                }
            }), E.speed = function (e, t, n) {
                var r = e && "object" == typeof e ? E.extend({}, e) : {
                    complete: n || !n && t || v(e) && e,
                    duration: e,
                    easing: n && t || t && !v(t) && t
                };
                return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    v(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
                }, r
            }, E.fn.extend({
                fadeTo: function (e, t, n, r) {
                    return this.filter(le).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
                }, animate: function (e, t, n, r) {
                    var i = E.isEmptyObject(e), o = E.speed(t, n, r), a = function () {
                        var t = pt(this, E.extend({}, e), o);
                        (i || K.get(this, "finish")) && t.stop(!0)
                    };
                    return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                }, stop: function (e, t, n) {
                    var r = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () {
                        var t = !0, i = null != e && e + "queueHooks", o = E.timers, a = K.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && at.test(i) && r(a[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        !t && n || E.dequeue(this, e)
                    }))
                }, finish: function (e) {
                    return !1 !== e && (e = e || "fx"), this.each((function () {
                        var t, n = K.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = E.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, E.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    }))
                }
            }), E.each(["toggle", "show", "hide"], (function (e, t) {
                var n = E.fn[t];
                E.fn[t] = function (e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
                }
            })), E.each({
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, (function (e, t) {
                E.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r)
                }
            })), E.timers = [], E.fx.tick = function () {
                var e, t = 0, n = E.timers;
                for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || E.fx.stop(), rt = void 0
            }, E.fx.timer = function (e) {
                E.timers.push(e), E.fx.start()
            }, E.fx.interval = 13, E.fx.start = function () {
                it || (it = !0, st())
            }, E.fx.stop = function () {
                it = null
            }, E.fx.speeds = {slow: 600, fast: 200, _default: 400}, E.fn.delay = function (e, t) {
                return e = E.fx && E.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function (t, r) {
                    var i = n.setTimeout(t, e);
                    r.stop = function () {
                        n.clearTimeout(i)
                    }
                }))
            }, function () {
                var e = b.createElement("input"), t = b.createElement("select").appendChild(b.createElement("option"));
                e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value
            }();
            var dt, ft = E.expr.attrHandle;
            E.fn.extend({
                attr: function (e, t) {
                    return z(this, E.attr, e, t, arguments.length > 1)
                }, removeAttr: function (e) {
                    return this.each((function () {
                        E.removeAttr(this, e)
                    }))
                }
            }), E.extend({
                attr: function (e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
                }, attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!m.radioValue && "radio" === t && A(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }, removeAttr: function (e, t) {
                    var n, r = 0, i = t && t.match(O);
                    if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
                }
            }), dt = {
                set: function (e, t, n) {
                    return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, E.each(E.expr.match.bool.source.match(/\w+/g), (function (e, t) {
                var n = ft[t] || E.find.attr;
                ft[t] = function (e, t, r) {
                    var i, o, a = t.toLowerCase();
                    return r || (o = ft[a], ft[a] = i, i = null != n(e, t, r) ? a : null, ft[a] = o), i
                }
            }));
            var ht = /^(?:input|select|textarea|button)$/i, gt = /^(?:a|area)$/i;

            function mt(e) {
                return (e.match(O) || []).join(" ")
            }

            function vt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function yt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
            }

            E.fn.extend({
                prop: function (e, t) {
                    return z(this, E.prop, e, t, arguments.length > 1)
                }, removeProp: function (e) {
                    return this.each((function () {
                        delete this[E.propFix[e] || e]
                    }))
                }
            }), E.extend({
                prop: function (e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                }, propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = E.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                }, propFix: {for: "htmlFor", class: "className"}
            }), m.optSelected || (E.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }, set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
                E.propFix[this.toLowerCase()] = this
            })), E.fn.extend({
                addClass: function (e) {
                    var t, n, r, i, o, a, s, l = 0;
                    if (v(e)) return this.each((function (t) {
                        E(this).addClass(e.call(this, t, vt(this)))
                    }));
                    if ((t = yt(e)).length) for (; n = this[l++];) if (i = vt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
                    return this
                }, removeClass: function (e) {
                    var t, n, r, i, o, a, s, l = 0;
                    if (v(e)) return this.each((function (t) {
                        E(this).removeClass(e.call(this, t, vt(this)))
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = yt(e)).length) for (; n = this[l++];) if (i = vt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        for (a = 0; o = t[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
                    return this
                }, toggleClass: function (e, t) {
                    var n = typeof e, r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function (n) {
                        E(this).toggleClass(e.call(this, n, vt(this), t), t)
                    })) : this.each((function () {
                        var t, i, o, a;
                        if (r) for (i = 0, o = E(this), a = yt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = vt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
                    }))
                }, hasClass: function (e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + mt(vt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var bt = /\r/g;
            E.fn.extend({
                val: function (e) {
                    var t, n, r, i = this[0];
                    return arguments.length ? (r = v(e), this.each((function (n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, E(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = E.map(i, (function (e) {
                            return null == e ? "" : e + ""
                        }))), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    }))) : i ? (t = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
                }
            }), E.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = E.find.attr(e, "value");
                            return null != t ? t : mt(E.text(e))
                        }
                    }, select: {
                        get: function (e) {
                            var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type,
                                s = a ? null : [], l = a ? o + 1 : i.length;
                            for (r = o < 0 ? l : a ? o : 0; r < l; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                if (t = E(n).val(), a) return t;
                                s.push(t)
                            }
                            return s
                        }, set: function (e, t) {
                            for (var n, r, i = e.options, o = E.makeArray(t), a = i.length; a--;) ((r = i[a]).selected = E.inArray(E.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), E.each(["radio", "checkbox"], (function () {
                E.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t)) return e.checked = E.inArray(E(e).val(), t) > -1
                    }
                }, m.checkOn || (E.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            })), m.focusin = "onfocusin" in n;
            var xt = /^(?:focusinfocus|focusoutblur)$/, wt = function (e) {
                e.stopPropagation()
            };
            E.extend(E.event, {
                trigger: function (e, t, r, i) {
                    var o, a, s, l, u, c, p, d, h = [r || b], g = f.call(e, "type") ? e.type : e,
                        m = f.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = d = s = r = r || b, 3 !== r.nodeType && 8 !== r.nodeType && !xt.test(g + E.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), u = g.indexOf(":") < 0 && "on" + g, (e = e[E.expando] ? e : new E.Event(g, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : E.makeArray(t, [e]), p = E.event.special[g] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, t))) {
                        if (!i && !p.noBubble && !y(r)) {
                            for (l = p.delegateType || g, xt.test(l + g) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                            s === (r.ownerDocument || b) && h.push(s.defaultView || s.parentWindow || n)
                        }
                        for (o = 0; (a = h[o++]) && !e.isPropagationStopped();) d = a, e.type = o > 1 ? l : p.bindType || g, (c = (K.get(a, "events") || Object.create(null))[e.type] && K.get(a, "handle")) && c.apply(a, t), (c = u && a[u]) && c.apply && G(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
                        return e.type = g, i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), t) || !G(r) || u && v(r[g]) && !y(r) && ((s = r[u]) && (r[u] = null), E.event.triggered = g, e.isPropagationStopped() && d.addEventListener(g, wt), r[g](), e.isPropagationStopped() && d.removeEventListener(g, wt), E.event.triggered = void 0, s && (r[u] = s)), e.result
                    }
                }, simulate: function (e, t, n) {
                    var r = E.extend(new E.Event, n, {type: e, isSimulated: !0});
                    E.event.trigger(r, null, t)
                }
            }), E.fn.extend({
                trigger: function (e, t) {
                    return this.each((function () {
                        E.event.trigger(e, t, this)
                    }))
                }, triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return E.event.trigger(e, t, n, !0)
                }
            }), m.focusin || E.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
                var n = function (e) {
                    E.event.simulate(t, e.target, E.event.fix(e))
                };
                E.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this.document || this, i = K.access(r, t);
                        i || r.addEventListener(e, n, !0), K.access(r, t, (i || 0) + 1)
                    }, teardown: function () {
                        var r = this.ownerDocument || this.document || this, i = K.access(r, t) - 1;
                        i ? K.access(r, t, i) : (r.removeEventListener(e, n, !0), K.remove(r, t))
                    }
                }
            }));
            var Tt = n.location, Et = {guid: Date.now()}, Ct = /\?/;
            E.parseXML = function (e) {
                var t, r;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new n.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                }
                return r = t && t.getElementsByTagName("parsererror")[0], t && !r || E.error("Invalid XML: " + (r ? E.map(r.childNodes, (function (e) {
                    return e.textContent
                })).join("\n") : e)), t
            };
            var jt = /\[\]$/, Rt = /\r?\n/g, kt = /^(?:submit|button|image|reset|file)$/i,
                St = /^(?:input|select|textarea|keygen)/i;

            function At(e, t, n, r) {
                var i;
                if (Array.isArray(t)) E.each(t, (function (t, i) {
                    n || jt.test(e) ? r(e, i) : At(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                })); else if (n || "object" !== T(t)) r(e, t); else for (i in t) At(e + "[" + i + "]", t[i], n, r)
            }

            E.param = function (e, t) {
                var n, r = [], i = function (e, t) {
                    var n = v(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, (function () {
                    i(this.name, this.value)
                })); else for (n in e) At(n, e[n], t, i);
                return r.join("&")
            }, E.fn.extend({
                serialize: function () {
                    return E.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map((function () {
                        var e = E.prop(this, "elements");
                        return e ? E.makeArray(e) : this
                    })).filter((function () {
                        var e = this.type;
                        return this.name && !E(this).is(":disabled") && St.test(this.nodeName) && !kt.test(e) && (this.checked || !ge.test(e))
                    })).map((function (e, t) {
                        var n = E(this).val();
                        return null == n ? null : Array.isArray(n) ? E.map(n, (function (e) {
                            return {name: t.name, value: e.replace(Rt, "\r\n")}
                        })) : {name: t.name, value: n.replace(Rt, "\r\n")}
                    })).get()
                }
            });
            var Dt = /%20/g, Nt = /#.*$/, Pt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Lt = /^(?:GET|HEAD)$/, _t = /^\/\//, Mt = {}, Ot = {}, Ht = "*/".concat("*"), $t = b.createElement("a");

            function It(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0, o = t.toLowerCase().match(O) || [];
                    if (v(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function Bt(e, t, n, r) {
                var i = {}, o = e === Ot;

                function a(s) {
                    var l;
                    return i[s] = !0, E.each(e[s] || [], (function (e, s) {
                        var u = s(t, n, r);
                        return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
                    })), l
                }

                return a(t.dataTypes[0]) || !i["*"] && a("*")
            }

            function Wt(e, t) {
                var n, r, i = E.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && E.extend(!0, e, r), e
            }

            $t.href = Tt.href, E.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Tt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ht,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": E.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (e, t) {
                    return t ? Wt(Wt(e, E.ajaxSettings), t) : Wt(E.ajaxSettings, e)
                },
                ajaxPrefilter: It(Mt),
                ajaxTransport: It(Ot),
                ajax: function (e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, i, o, a, s, l, u, c, p, d, f = E.ajaxSetup({}, t), h = f.context || f,
                        g = f.context && (h.nodeType || h.jquery) ? E(h) : E.event, m = E.Deferred(),
                        v = E.Callbacks("once memory"), y = f.statusCode || {}, x = {}, w = {}, T = "canceled", C = {
                            readyState: 0, getResponseHeader: function (e) {
                                var t;
                                if (u) {
                                    if (!a) for (a = {}; t = qt.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = a[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            }, getAllResponseHeaders: function () {
                                return u ? o : null
                            }, setRequestHeader: function (e, t) {
                                return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                            }, overrideMimeType: function (e) {
                                return null == u && (f.mimeType = e), this
                            }, statusCode: function (e) {
                                var t;
                                if (e) if (u) C.always(e[C.status]); else for (t in e) y[t] = [y[t], e[t]];
                                return this
                            }, abort: function (e) {
                                var t = e || T;
                                return r && r.abort(t), j(0, t), this
                            }
                        };
                    if (m.promise(C), f.url = ((e || f.url || Tt.href) + "").replace(_t, Tt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(O) || [""], null == f.crossDomain) {
                        l = b.createElement("a");
                        try {
                            l.href = f.url, l.href = l.href, f.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host
                        } catch (e) {
                            f.crossDomain = !0
                        }
                    }
                    if (f.data && f.processData && "string" != typeof f.data && (f.data = E.param(f.data, f.traditional)), Bt(Mt, f, t, C), u) return C;
                    for (p in (c = E.event && f.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Lt.test(f.type), i = f.url.replace(Nt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Dt, "+")) : (d = f.url.slice(i.length), f.data && (f.processData || "string" == typeof f.data) && (i += (Ct.test(i) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (i = i.replace(Pt, "$1"), d = (Ct.test(i) ? "&" : "?") + "_=" + Et.guid++ + d), f.url = i + d), f.ifModified && (E.lastModified[i] && C.setRequestHeader("If-Modified-Since", E.lastModified[i]), E.etag[i] && C.setRequestHeader("If-None-Match", E.etag[i])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(p, f.headers[p]);
                    if (f.beforeSend && (!1 === f.beforeSend.call(h, C, f) || u)) return C.abort();
                    if (T = "abort", v.add(f.complete), C.done(f.success), C.fail(f.error), r = Bt(Ot, f, t, C)) {
                        if (C.readyState = 1, c && g.trigger("ajaxSend", [C, f]), u) return C;
                        f.async && f.timeout > 0 && (s = n.setTimeout((function () {
                            C.abort("timeout")
                        }), f.timeout));
                        try {
                            u = !1, r.send(x, j)
                        } catch (e) {
                            if (u) throw e;
                            j(-1, e)
                        }
                    } else j(-1, "No Transport");

                    function j(e, t, a, l) {
                        var p, d, b, x, w, T = t;
                        u || (u = !0, s && n.clearTimeout(s), r = void 0, o = l || "", C.readyState = e > 0 ? 4 : 0, p = e >= 200 && e < 300 || 304 === e, a && (x = function (e, t, n) {
                            for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r) for (i in s) if (s[i] && s[i].test(r)) {
                                l.unshift(i);
                                break
                            }
                            if (l[0] in n) o = l[0]; else {
                                for (i in n) {
                                    if (!l[0] || e.converters[i + " " + l[0]]) {
                                        o = i;
                                        break
                                    }
                                    a || (a = i)
                                }
                                o = o || a
                            }
                            if (o) return o !== l[0] && l.unshift(o), n[o]
                        }(f, C, a)), !p && E.inArray("script", f.dataTypes) > -1 && E.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {
                        }), x = function (e, t, n, r) {
                            var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
                            if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                                if (!(a = u[l + " " + o] || u["* " + o])) for (i in u) if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                                if (!0 !== a) if (a && e.throws) t = a(t); else try {
                                    t = a(t)
                                } catch (e) {
                                    return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o}
                                }
                            }
                            return {state: "success", data: t}
                        }(f, x, C, p), p ? (f.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (E.lastModified[i] = w), (w = C.getResponseHeader("etag")) && (E.etag[i] = w)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, d = x.data, p = !(b = x.error))) : (b = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || T) + "", p ? m.resolveWith(h, [d, T, C]) : m.rejectWith(h, [C, T, b]), C.statusCode(y), y = void 0, c && g.trigger(p ? "ajaxSuccess" : "ajaxError", [C, f, p ? d : b]), v.fireWith(h, [C, T]), c && (g.trigger("ajaxComplete", [C, f]), --E.active || E.event.trigger("ajaxStop")))
                    }

                    return C
                },
                getJSON: function (e, t, n) {
                    return E.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return E.get(e, void 0, t, "script")
                }
            }), E.each(["get", "post"], (function (e, t) {
                E[t] = function (e, n, r, i) {
                    return v(n) && (i = i || r, r = n, n = void 0), E.ajax(E.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, E.isPlainObject(e) && e))
                }
            })), E.ajaxPrefilter((function (e) {
                var t;
                for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
            })), E._evalUrl = function (e, t, n) {
                return E.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function () {
                        }
                    },
                    dataFilter: function (e) {
                        E.globalEval(e, t, n)
                    }
                })
            }, E.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return this[0] && (v(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    })).append(this)), this
                }, wrapInner: function (e) {
                    return v(e) ? this.each((function (t) {
                        E(this).wrapInner(e.call(this, t))
                    })) : this.each((function () {
                        var t = E(this), n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }))
                }, wrap: function (e) {
                    var t = v(e);
                    return this.each((function (n) {
                        E(this).wrapAll(t ? e.call(this, n) : e)
                    }))
                }, unwrap: function (e) {
                    return this.parent(e).not("body").each((function () {
                        E(this).replaceWith(this.childNodes)
                    })), this
                }
            }), E.expr.pseudos.hidden = function (e) {
                return !E.expr.pseudos.visible(e)
            }, E.expr.pseudos.visible = function (e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, E.ajaxSettings.xhr = function () {
                try {
                    return new n.XMLHttpRequest
                } catch (e) {
                }
            };
            var Ft = {0: 200, 1223: 204}, zt = E.ajaxSettings.xhr();
            m.cors = !!zt && "withCredentials" in zt, m.ajax = zt = !!zt, E.ajaxTransport((function (e) {
                var t, r;
                if (m.cors || zt && !e.crossDomain) return {
                    send: function (i, o) {
                        var a, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                        t = function (e) {
                            return function () {
                                t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ft[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                            }
                        }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                            4 === s.readyState && n.setTimeout((function () {
                                t && r()
                            }))
                        }, t = t("abort");
                        try {
                            s.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t) throw e
                        }
                    }, abort: function () {
                        t && t()
                    }
                }
            })), E.ajaxPrefilter((function (e) {
                e.crossDomain && (e.contents.script = !1)
            })), E.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /\b(?:java|ecma)script\b/},
                converters: {
                    "text script": function (e) {
                        return E.globalEval(e), e
                    }
                }
            }), E.ajaxPrefilter("script", (function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            })), E.ajaxTransport("script", (function (e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs) return {
                    send: function (r, i) {
                        t = E("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), b.head.appendChild(t[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }));
            var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
            E.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var e = Xt.pop() || E.expando + "_" + Et.guid++;
                    return this[e] = !0, e
                }
            }), E.ajaxPrefilter("json jsonp", (function (e, t, r) {
                var i, o, a,
                    s = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Vt, "$1" + i) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                    return a || E.error(i + " was not called"), a[0]
                }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
                    a = arguments
                }, r.always((function () {
                    void 0 === o ? E(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Xt.push(i)), a && v(o) && o(a[0]), a = o = void 0
                })), "script"
            })), m.createHTMLDocument = ((Ut = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), E.parseHTML = function (e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(r)) : t = b), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = Te([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
                var r, i, o
            }, E.fn.load = function (e, t, n) {
                var r, i, o, a = this, s = e.indexOf(" ");
                return s > -1 && (r = mt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && E.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done((function (e) {
                    o = arguments, a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
                })).always(n && function (e, t) {
                    a.each((function () {
                        n.apply(this, o || [e.responseText, t, e])
                    }))
                }), this
            }, E.expr.pseudos.animated = function (e) {
                return E.grep(E.timers, (function (t) {
                    return e === t.elem
                })).length
            }, E.offset = {
                setOffset: function (e, t, n) {
                    var r, i, o, a, s, l, u = E.css(e, "position"), c = E(e), p = {};
                    "static" === u && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), l = E.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), v(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : c.css(p)
                }
            }, E.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                        E.offset.setOffset(this, e, t)
                    }));
                    var t, n, r = this[0];
                    return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {top: 0, left: 0} : void 0
                }, position: function () {
                    if (this[0]) {
                        var e, t, n, r = this[0], i = {top: 0, left: 0};
                        if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect(); else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - i.top - E.css(r, "marginTop", !0),
                            left: t.left - i.left - E.css(r, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map((function () {
                        for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                        return e || oe
                    }))
                }
            }), E.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, (function (e, t) {
                var n = "pageYOffset" === t;
                E.fn[e] = function (r) {
                    return z(this, (function (e, r, i) {
                        var o;
                        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                    }), e, r, arguments.length)
                }
            })), E.each(["top", "left"], (function (e, t) {
                E.cssHooks[t] = ze(m.pixelPosition, (function (e, n) {
                    if (n) return n = Fe(e, t), $e.test(n) ? E(e).position()[t] + "px" : n
                }))
            })), E.each({Height: "height", Width: "width"}, (function (e, t) {
                E.each({padding: "inner" + e, content: t, "": "outer" + e}, (function (n, r) {
                    E.fn[r] = function (i, o) {
                        var a = arguments.length && (n || "boolean" != typeof i),
                            s = n || (!0 === i || !0 === o ? "margin" : "border");
                        return z(this, (function (t, n, i) {
                            var o;
                            return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? E.css(t, n, s) : E.style(t, n, i, s)
                        }), t, a ? i : void 0, a)
                    }
                }))
            })), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
                E.fn[t] = function (e) {
                    return this.on(t, e)
                }
            })), E.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                }, unbind: function (e, t) {
                    return this.off(e, null, t)
                }, delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                }, undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }, hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
                E.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }));
            var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            E.proxy = function (e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = s.call(arguments, 2), (i = function () {
                    return e.apply(t || this, r.concat(s.call(arguments)))
                }).guid = e.guid = e.guid || E.guid++, i
            }, E.holdReady = function (e) {
                e ? E.readyWait++ : E.ready(!0)
            }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = v, E.isWindow = y, E.camelCase = Y, E.type = T, E.now = Date.now, E.isNumeric = function (e) {
                var t = E.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, E.trim = function (e) {
                return null == e ? "" : (e + "").replace(Yt, "")
            }, void 0 === (r = function () {
                return E
            }.apply(t, [])) || (e.exports = r);
            var Gt = n.jQuery, Qt = n.$;
            return E.noConflict = function (e) {
                return n.$ === E && (n.$ = Qt), e && n.jQuery === E && (n.jQuery = Gt), E
            }, void 0 === i && (n.jQuery = n.$ = E), E
        }))
    }, 60: function (e, t, n) {
        "use strict";
        var r = n(0), i = n(4), o = n.n(i);
        t.a = {
            addDragDownload: function () {
                var e, t, n, r, i, a,
                    s = '\n    <div id="fatkun-drop-panel">\n    <a id="fatkun-drop-panel-close-btn">×</a>\n        <div id="fatkun-drop-panel-inner">\n            <div class="fatkun-content">\n                <svg class="fatkun-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5892"><path d="M494.933333 782.933333c2.133333 2.133333 4.266667 4.266667 8.533334 6.4h8.533333c6.4 0 10.666667-2.133333 14.933333-6.4l2.133334-2.133333 275.2-275.2c8.533333-8.533333 8.533333-21.333333 0-29.866667-8.533333-8.533333-21.333333-8.533333-29.866667 0L533.333333 716.8V128c0-12.8-8.533333-21.333333-21.333333-21.333333s-21.333333 8.533333-21.333333 21.333333v588.8L249.6 475.733333c-8.533333-8.533333-21.333333-8.533333-29.866667 0-8.533333 8.533333-8.533333 21.333333 0 29.866667l275.2 277.333333zM853.333333 874.666667H172.8c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333333H853.333333c12.8 0 21.333333-8.533333 21.333334-21.333333s-10.666667-21.333333-21.333334-21.333333z" p-id="5893"></path></svg>\n                <div class="fatkun-title">Drag and Drop</div>\n                <div class="fatkun-desc">The image will be downloaded</div>\n            </div>\n            <div id="fatkun-supported-by">'.concat(chrome.i18n.getMessage("supportedBy", [chrome.runtime.getManifest().name]), "</div>\n        </div>\n    </div>\n    ");

                function l(e) {
                    var t = n, o = r;
                    0 === n && 0 === r || ("Top" === e.orientation ? ((o = o - 240 - 80) < 0 && (o = 0), (t -= 120) + 240 > window.innerWidth && (t = window.innerWidth - 240), i.css({
                        opacity: .8,
                        left: t,
                        top: o,
                        transform: "scale(1)"
                    })) : "Bottom" === e.orientation ? ((o += 80) < 0 && (o = 0), (t -= 120) + 240 > window.innerWidth && (t = window.innerWidth - 240), i.css({
                        opacity: .8,
                        left: t,
                        top: o,
                        transform: "scale(1)"
                    })) : "Right" === e.orientation ? ((o -= 120) < 0 && (o = 0), (t += 80) + 240 > window.innerWidth && (t = window.innerWidth - 240), i.css({
                        opacity: .8,
                        left: t,
                        top: o,
                        transform: "scale(1)"
                    })) : ((o -= 120) < 0 && (o = 0), (t = t - 80 - 240) < 0 && (t = 0), i.css({
                        opacity: .8,
                        top: o,
                        left: t,
                        transform: "scale(1)"
                    })))
                }

                o()((function () {
                    top != self || i || 0 != o()("#yuntu-drop-panel").length || 0 != o()("#fatkun-drop-panel").length || ((i = o()(s).appendTo(document.body)).find(".fatkun-title").text(chrome.i18n.getMessage("dragDownloadTitle")), i.find(".fatkun-desc").text(chrome.i18n.getMessage("dragDownloadDesc")), i.on("dragleave", (function () {
                        return console.log("dragleave"), i.css({opacity: .8, transform: "scale(1)"}), !1
                    })).on("dragover", (function () {
                        return console.log("dragover"), i.css({opacity: 1, transform: "scale(1.05)"}), !1
                    })).on("drop", (function (e) {
                        if (location.href.match("instagram.com")) parsers.instagram(a, (function (e) {
                            chrome.runtime.sendMessage({
                                tip: "downloadByDrag",
                                item: {src: e}
                            }), i.stop().css({top: "-9999999px", transform: "scale(1)", opacity: 0})
                        })); else {
                            var t = e.originalEvent.dataTransfer.getData("fatkun");
                            e.originalEvent.dataTransfer.getData("type"), chrome.runtime.sendMessage({
                                tip: "downloadByDrag",
                                item: {src: t}
                            }), i.stop().css({top: "-9999999px", transform: "scale(1)", opacity: 0})
                        }
                        return !1
                    })), i.find("#fatkun-drop-panel-close-btn").click((function () {
                        i.stop().css({top: "-9999999px", transform: "scale(1)", opacity: 0})
                    }))), o()("body").on("mousemove", (function (n) {
                        n.originalEvent.pageX, n.originalEvent.pageY, e = n.originalEvent.clientX, t = n.originalEvent.clientY
                    })), o()("body").on("mousedown", "video", (function (e) {
                        o()(this).attr("draggable", "true")
                    })), o()("body").on("dragstart", "img, a, video", (function (i) {
                        var s;
                        if (a = i.target, "IMG" == i.target.tagName ? s = i.target.src : "A" == i.target.tagName ? (location.href.match("facebook.com") && (s = o()(i.target).attr("data-ploi")), s || (s = (s = o()(i.target).find("img")[0]) ? s.src : "")) : "VIDEO" == i.target.tagName && (s = i.target.currentSrc), s) {
                            var u = i.dataTransfer || i.originalEvent.dataTransfer;
                            u.setData("fatkun", s), u.setData("type", i.target.tagName), u.setData("text/plain", "fatkun"), n = i.originalEvent.clientX, r = i.originalEvent.clientY, setTimeout((function () {
                                l(Math.abs(n - e) > Math.abs(r - t) ? n <= e ? {orientation: "Right"} : {orientation: "Left"} : r <= t ? {orientation: "Bottom"} : {orientation: "Top"})
                            }), 150)
                        }
                    }))
                })), window.addEventListener("dragend", (function () {
                    i && i.stop().css({top: "-9999999px", transform: "scale(1)", opacity: 0})
                }))
            }, downloadDragedItem: function (e) {
                chrome.downloads.download({url: Object(r.c)(e.src)})
            }
        }
    }
});
