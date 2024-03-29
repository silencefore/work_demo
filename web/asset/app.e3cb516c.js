import {
    d as V,
    r as d,
    c as O,
    m as B,
    a as x,
    b as N,
    e as W,
    f as j,
    s as L,
    g as A,
    u as M,
    h as q,
    i as z,
    j as U,
    k as y,
    l as k,
    w as X,
    n as K,
    o as f,
    p as $,
    q as c,
    t as G,
    v as J,
    F as D,
    x as Q,
    y as H,
    z as F,
    A as Y,
    K as Z,
    B as ee,
    C as te,
    D as oe,
    E as se,
    G as ne,
    H as re,
    I as ae,
    J as le,
    L as ce,
    M as ue,
    N as ie,
    O as de,
    P as pe,
    Q as _e,
    R as me,
    S as ge,
    T as g
} from "./vendor.8d82c08e.js";

const he = "/vite.svg", fe = "/asset/vue.5532db34.svg", p = V("main_I", {
    state: () => ({step: d(23), coin: d(1)}),
    getters: {twiceStep: e => e.step++},
    actions: {
        autoIncrement() {
            this.step++
        }
    }
});
let ve = V("main", () => {
    let e = d(0);
    const t = d("Eduardo"), o = O(() => p().step + e.value * 2);
    return {countN: e, name: t, doubleCount: o}
});
const be = Q('<div id="wrap" data-v-f6a8024d><a href="https://vitejs.dev" target="_blank" data-v-f6a8024d><img src="' + he + '" class="logo" alt="Vite logo" data-v-f6a8024d></a><a href="https://vuejs.org/" target="_blank" data-v-f6a8024d><img src="' + fe + '" class="logo vue" alt="Vue logo" data-v-f6a8024d></a></div>', 1),
    we = {class: "special"}, ye = ["oo"], ke = {
        methods: {...B("moduleA/", ["add"]), ...B("moduleA/moduleB/", ["adds"]), ...x("moduleA/", ["HH"]), ...N("moduleA/", ["oo"])},
        mounted() {
            console.log(this.adds(), "11111111111111111111111111"), this.oo++, this.$store.registerModule("moduleA/registerModule", {
                state: {re: 23},
                namespaced: !0
            }), console.log(this.$store, "$store");
            let e = W(p, ["step"]).step();
            console.log(++e, "pinia state");
            let t = j(p, ["step"]).step;
            console.log(t.set(1e3), 123);
            let {coin: o, twiceStep: r} = L(p());
            console.log(++o.value, r.value, "toref")
        }
    }, Ee = A({
        ...ke, __name: "App", setup(e, {expose: t}) {
            M(u => ({"5986f8c5": s.value}));
            const o = d();
            console.log(o, "refList"), console.log(q({cc: 1}), "cccc");
            const r = z();
            U(), r.addRoute({path: "/about", component: () => y("div")}), console.log(y(k("router-view")), "))))))");
            const n = d("123"), s = d("red");
            d("123"), X(() => {
                console.log("\u5F00\u59CB\u4FA6\u542C\u4E86"), console.log(n.value), console.log(n.value)
            }, {
                flush: "sync", onTrack: u => {
                    console.log(u, "onTrack")
                }, onTrigger: u => {
                    console.log(u, "onTrigger")
                }
            }), K(n, () => {
                console.log("\u5F00\u59CB\u4FA6\u542C\u4E86watch"), console.log(n.value), console.log(n.value)
            }, {flush: "sync"}), t({message: n, p_color: s});
            let {proxy: l} = H();
            return console.log(l.$route, 11111111111111111e5), window._proxy = s, (u, h) => {
                const a = k("router-view");
                return f(), $(D, null, [be, c("div", we, [c("p", {oo: s.value}, "123", 8, ye)]), G(a, null, {
                    default: J(i => [(f(), F(Z, null, [(f(), F(Y(i.Component), {
                        ref_key: "refList",
                        ref: o
                    }, null, 512))], 1024))]), _: 1
                })], 64)
            }
        }
    });
const P = (e, t) => {
    const o = e.__vccOpts || e;
    for (const [r, n] of t) o[r] = n;
    return o
}, Se = P(Ee, [["__scopeId", "data-v-f6a8024d"]]), I = "HH", Ce = {
    namespaced: !0, state: () => ({pp: 2}), mutations: {}, actions: {
        adds(e) {
            e.rootState.ii++
        }
    }
}, Ae = {
    namespaced: !0, state: () => ({oo: 1}), mutations: {
        [I](e) {
            e.oo++
        }
    }, actions: {
        add(e) {
            e.commit(I), e.state.oo++
        }
    }, getters: {}, modules: {moduleB: Ce}
}, $e = {state: () => ({ii: 1}), modules: {moduleA: Ae}}, Be = "modulepreload", Fe = function (e) {
    return "/" + e
}, R = {}, T = function (t, o, r) {
    if (!o || o.length === 0) return t();
    const n = document.getElementsByTagName("link");
    return Promise.all(o.map(s => {
        if (s = Fe(s), s in R) return;
        R[s] = !0;
        const l = s.endsWith(".css"), u = l ? '[rel="stylesheet"]' : "";
        if (!!r) for (let i = n.length - 1; i >= 0; i--) {
            const m = n[i];
            if (m.href === s && (!l || m.rel === "stylesheet")) return
        } else if (document.querySelector(`link[href="${s}"]${u}`)) return;
        const a = document.createElement("link");
        if (a.rel = l ? "stylesheet" : Be, l || (a.as = "script", a.crossOrigin = ""), a.href = s, document.head.appendChild(a), l) return new Promise((i, m) => {
            a.addEventListener("load", i), a.addEventListener("error", () => m(new Error(`Unable to preload CSS for ${s}`)))
        })
    })).then(() => t())
}, Ie = [{path: "/:nofound(.*)+", redirect: "/error", children: []}, {
    path: "/404",
    component: {render: () => y("div", 404)},
    alias: "/error",
    children: [],
    meta: {re: !0}
}, {
    path: "/:intro(intro)",
    component: () => T(() => Promise.resolve().then(() => Ve), void 0),
    children: [],
    meta: {re: !0}
}, {
    path: "/test",
    component: {render: () => y(k("router-view"))},
    meta: {requiresAuth: !0},
    children: [{
        path: "redirect_1",
        name: "redirect_1",
        component: () => T(() => Promise.resolve().then(() => Le), void 0),
        props: {default: 100},
        meta: {requiresAuth: !0}
    }]
}], v = ee(Se), Re = ({store: e}) => (window[e.$id] = e, {cc: v});
let E = te($e), S = oe({
    scrollBehavior() {
        return {el: "#wrap", top: 20, behavior: "smooth"}
    }, history: se(), routes: Ie
});
S.beforeEach((e, t) => (console.log(e, t, "\u8DEF\u7531\u5143"), !0));
S.beforeResolve((e, t) => (console.log(e, t, "\u8DEF\u7531\u5143\u6840\u6840\u6840"), !0));
S.afterEach((e, t) => (console.log(e, t, "\u8DEF\u7531\u5143\u6840\u6840\u6840!!"), !0));
window.storeNew = E;
E.subscribe((e, t) => {
    console.log(e, t, "mutation")
});
E.subscribeAction((e, t) => {
    console.log(e, t, "action")
});
v.use(E);
v.use(S);
v.use(ne().use(Re));
v.mount("#app");
const Te = A({
        __name: "design", setup(e) {
            function t() {
                re().setOptions({
                    steps: [{title: "Welcome", intro: "Hello World! \u{1F44B}"}, {
                        title: "Collapse Button",
                        intro: "This is the menu collapse button."
                    }, {title: "User Action", intro: "This is the user function area."}]
                }).start()
            }

            return (o, r) => (f(), $("div", {onClick: r[0] || (r[0] = n => t())}, " 123 "))
        }
    }), Ve = Object.freeze(Object.defineProperty({__proto__: null, default: Te}, Symbol.toStringTag, {value: "Module"})),
    C = e => (me("data-v-b69d1a31"), e = e(), ge(), e), De = {class: "card"},
    He = C(() => c("p", null, [g(" Edit "), c("code", null, "components/HelloWorld.vue"), g(" to test HMR ")], -1)),
    Pe = C(() => c("p", null, [g(" Check out "), c("a", {
        href: "https://vuejs.org/guide/quick-start.html#local",
        target: "_blank"
    }, "create-vue"), g(", the official Vue + Vite starter ")], -1)),
    Oe = C(() => c("p", null, [g(" Install "), c("a", {
        href: "https://github.com/johnsoncodehk/volar",
        target: "_blank"
    }, "Volar"), g(" in your IDE for a better DX ")], -1)),
    xe = C(() => c("p", {class: "read-the-docs"}, "Click on the Vite and Vue logos to learn more", -1)),
    Ne = {name: "HelloWorld"}, We = A({
        ...Ne, props: {msg: {default: "213"}, default: null}, setup(e, {expose: t}) {
            const o = e;
            console.log(k("router-view"), "router-view");
            const r = d(0);
            ae(() => {
                debugger;
                console.log("\u8FDB\u5165")
            }), le(() => {
                console.log("\u79BB\u5F00")
            }), console.log(p()), p().$subscribe((...b) => console.log(b, "main_I")), console.log(ve());
            const s = ce();
            window.storeX = s;
            const {proxy: l} = H();
            console.log(l == null ? void 0 : l.$route, 222222), console.log(!1, 0x2bc6feee662390);
            const u = p();
            u.$subscribe((b, w) => {
                console.log(b), console.log(w)
            }), u.autoIncrement();
            let h = ue({name: "\u5F20\u4E09", age: 18, likeFood: {fruits: {apple: "\u82F9\u679C"}}}),
                a = ie({name: "\u5F20\u4E09", age: 18, likeFood: {fruits: {apple: "\u82F9\u679C"}}});
            console.log(_.cloneDeep(h)), window.person = h, window.person2 = a;
            const {msg: i, default: m} = de(o);
            return console.log(m, i, "\u6840\u6840\u6840"), t({
                person: h,
                msg: i
            }), (b, w) => (f(), $(D, null, [c("div", De, [c("button", {
                type: "button",
                onClick: w[0] || (w[0] = Me => r.value++)
            }, "count is " + pe(_e(a)), 1), He]), Pe, Oe, xe], 64))
        }
    });
const je = P(We, [["__scopeId", "data-v-b69d1a31"]]),
    Le = Object.freeze(Object.defineProperty({__proto__: null, default: je}, Symbol.toStringTag, {value: "Module"}));
