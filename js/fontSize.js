/**
 * Created by web on 2018/3/9.
 */
//设置fontSize
! function(f, b) {
    var e = 0,
        n = b.designWidth,
        m = b.designHeight || 0,
        a = b.designFontSize || 100,
        j = b.callback || null,
        h = document.documentElement,
        c = document.body,
        g, d, l, k;

    function i() { var o = f.innerWidth > 640 ? 640 : f.innerWidth; var p = m !== 0 ? Math.min(o / n, f.innerHeight / m) : o / n; return parseInt(p * 10000 * a) / 10000 }! function() {
        g = h.getBoundingClientRect().width;
        k = k ? k : arguments.callee;
        if (g !== f.innerWidth && e < 20) {
            f.setTimeout(function() {
                e++;
                k()
            }, 0)
        } else { d = i(); if (d + "px" !== getComputedStyle(h)["font-size"]) { h.style.fontSize = d + "px"; return j && j(d) } }
    }();
    f.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        clearTimeout(l);
        l = setTimeout(function() { k() }, 200)
    }, false)
}(window, { designWidth: 640, designFontSize: 100});