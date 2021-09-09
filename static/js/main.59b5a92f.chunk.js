(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  {
    10: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(1),
        r = n.n(i),
        c = n(3),
        s = n.n(c),
        o = (n(8), n(0)),
        d = function (e) {
          var t = e.text;
          e.styling;
          return Object(o.jsx)("button", {
            className: a,
            style: { verticalAlign: "middle" },
            children: t,
          });
        },
        a =
          "px-4 py-2 rounded-md text-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
      d.defaultProps = { text: "Add" };
      var l = d,
        u = function (e) {
          e.title;
          return Object(o.jsx)("header", {
            className: g,
            children: Object(o.jsxs)("div", {
              className:
                "rounded-lg p-4 ring-1 ring-gray-900 ring-opacity-5 overflow-hidden bg-white",
              children: [
                Object(o.jsx)("h1", {
                  style: { display: "inline" },
                  children: "Task Tracker",
                }),
                Object(o.jsx)(l, {}),
              ],
            }),
          });
        };
      u.defaultProps = { title: "Task Tracker" };
      var g = "text-center text-6xl font-bold my-6",
        f = u,
        j = function () {
          return Object(o.jsx)(o.Fragment, { children: Object(o.jsx)(f, {}) });
        },
        b = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 11))
              .then(function (t) {
                var n = t.getCLS,
                  i = t.getFID,
                  r = t.getFCP,
                  c = t.getLCP,
                  s = t.getTTFB;
                n(e), i(e), r(e), c(e), s(e);
              });
        };
      s.a.render(
        Object(o.jsx)(r.a.StrictMode, { children: Object(o.jsx)(j, {}) }),
        document.getElementById("root")
      ),
        b();
    },
    8: function (e, t, n) {},
  },
  [[10, 1, 2]],
]);
//# sourceMappingURL=main.59b5a92f.chunk.js.map
