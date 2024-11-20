function to(t, {style: e, vars: n}, i, r) {
    for (let a in Object.assign(t.style, e, r && r.getProjectionStyles(i)),
    n)
        t.style.setProperty(a, n[a])
}





class iC {
    scrapeMotionValuesFromProps(t, e, n) {
        return {}
    }
    constructor({ parent: t, props: e, presenceContext: n, reducedMotionConfig: i, blockInitialAnimation: r, visualState: a }, o = {}) {
        this.resolveKeyframes = (t, e, n, i) => new this.KeyframeResolver(t, e, n, i, this),
            this.current = null,
            this.children = new Set,
            this.isVariantNode = !1,
            this.isControllingVariants = !1,
            this.shouldReduceMotion = null,
            this.values = new Map,
            this.KeyframeResolver = et.e,
            this.features = {},
            this.valueSubscriptions = new Map,
            this.prevMotionValues = {},
            this.events = {},
            this.propEventSubscriptions = {},
            this.notifyUpdate = () => this.notify("Update", this.latestValues),
            this.render = () => {
                this.current && (this.triggerBuild(),
                this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }
            ,
            this.scheduleRender = () => tb.Wi.render(this.render, !1, !0)
        let { latestValues: s, renderState: l } = a
        this.latestValues = s,
            this.baseTarget = {
                ...s
            },
            this.initialValues = e.initial ? {
                ...s
            } : {},
            this.renderState = l,
            this.parent = t,
            this.props = e,
            this.presenceContext = n,
            this.depth = t ? t.depth + 1 : 0,
            this.reducedMotionConfig = i,
            this.options = o,
            this.blockInitialAnimation = Boolean(r),
            this.isControllingVariants = A(e),
            this.isVariantNode = S(e),
            this.isVariantNode && (this.variantChildren = new Set),
            this.manuallyAnimateOnMount = Boolean(t && t.current)
        let { willChange: u, ...c } = this.scrapeMotionValuesFromProps(e, {}, this)
        for (let t in c) {
            let e = c[t]
            void 0 !== s[t] && (0,
                z.i)(e) && (e.set(s[t], !1),
                    eT(u) && u.add(t))
        }
    }
    renderInstance(t, e, n, i) {
        to(t, e, n, i)
    }
}

function o(t, e) {
    let n = !1
      , o = !0
      , s = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = a.reduce( (t, e) => (t[e] = function(t) {
        let e = new r
          , n = new r
          , i = 0
          , a = !1
          , o = !1
          , s = new WeakSet
          , l = {
            schedule: (t, r=!1, o=!1) => {
                let l = o && a
                  , u = l ? e : n;
                return r && s.add(t),
                u.add(t) && l && a && (i = e.order.length),
                t
            }
            ,
            cancel: t => {
                n.remove(t),
                s.delete(t)
            }
            ,
            process: r => {
                if (a) {
                    o = !0;
                    return
                }
                if (a = !0,
                [e,n] = [n, e],
                n.clear(),
                i = e.order.length)
                    for (let n = 0; n < i; n++) {
                        let i = e.order[n];
                        s.has(i) && (l.schedule(i),
                        t()),
                        i(r)
                    }
                a = !1,
                o && (o = !1,
                l.process(r))
            }
        };
        return l
    }( () => n = !0),
    t), {})
      , u = t => {
        l[t].process(s)
    }
      , c = () => {
        let r = i.c.useManualTiming ? s.timestamp : performance.now();
        n = !1,
        s.delta = o ? 1e3 / 60 : Math.max(Math.min(r - s.timestamp, 40), 1),
        s.timestamp = r,
        s.isProcessing = !0,
        a.forEach(u),
        s.isProcessing = !1,
        n && e && (o = !1,
        t(c))
    }
      , f = () => {
        n = !0,
        o = !0,
        s.isProcessing || t(c)
    }
      , h = a.reduce( (t, e) => {
        let i = l[e];
        return t[e] = (t, e=!1, r=!1) => (n || f(),
        i.schedule(t, e, r)),
        t
    }
    , {})
      , d = t => a.forEach(e => l[e].cancel(t));
    return {
        schedule: h,
        cancel: d,
        state: s,
        steps: l
    }
}




// 滚动执行函数
document.addEventListener('scroll', function () {
    let t = document.getElementsByClassName('absolute top-32 right-32')[0];
    let style;// e
    let vars = {} // n
    let r;
    let i;

    // 
    console.log(ty(t));
    




    // to(t, { style, vars }, i, r);

});