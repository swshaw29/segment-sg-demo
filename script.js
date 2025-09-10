!function () {
    var analytics = window.analytics = window.analytics || []; if (!analytics.initialize)
        if (analytics.invoked) console && console.error && console.error("Segment snippet included twice.");
        else {
            analytics.invoked = !0; analytics.methods = ["track", "identify", "page", "ready", "on", "off"];
            analytics.factory = function (t) { return function () { var e = Array.prototype.slice.call(arguments); e.unshift(t); analytics.push(e); return analytics } };
            for (var t = 0; t < analytics.methods.length; t++) { var e = analytics.methods[t]; analytics[e] = analytics.factory(e) }
            analytics.load = function (t) {
                var n = document.createElement("script"); n.type = "text/javascript"; n.async = !0;
                n.src = "https://cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
                var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(n, a)
            };
            analytics.load("WRITE_KEY");
        }
}();
