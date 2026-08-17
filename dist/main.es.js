import { jsx as e, jsxs as l, Fragment as c } from "react/jsx-runtime";
import { forwardRef as o } from "react";
const b = "_button_g8pqx_1", w = "_primary_g8pqx_29", N = "_secondary_g8pqx_38", k = "_ghost_g8pqx_48", z = "_danger_g8pqx_57", $ = "_sm_g8pqx_67", j = "_md_g8pqx_72", H = "_lg_g8pqx_77", B = "_fullWidth_g8pqx_82", f = {
  button: b,
  primary: w,
  secondary: N,
  ghost: k,
  danger: z,
  sm: $,
  md: j,
  lg: H,
  fullWidth: B
}, V1 = o(function({ variant: n = "primary", size: a = "md", fullWidth: t = !1, className: s, type: r = "button", ...i }, _) {
  const h = [
    f.button,
    f[n],
    f[a],
    t ? f.fullWidth : null,
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("button", { ref: _, type: r, className: h, ...i });
}), L = "_card_1fmz3_1", q = "_elevated_1fmz3_8", V = "_outlined_1fmz3_13", S = "_interactive_1fmz3_17", A = "_header_1fmz3_30", C = "_body_1fmz3_37", I = "_footer_1fmz3_46", p = {
  card: L,
  elevated: q,
  outlined: V,
  interactive: S,
  header: A,
  body: C,
  footer: I
}, S1 = o(function({ variant: n = "elevated", header: a, footer: t, className: s, children: r, ...i }, _) {
  return /* @__PURE__ */ l(
    "div",
    {
      ref: _,
      className: [p.card, p[n], s].filter(Boolean).join(" "),
      ...i,
      children: [
        a != null && /* @__PURE__ */ e("div", { className: p.header, children: a }),
        /* @__PURE__ */ e("div", { className: p.body, children: r }),
        t != null && /* @__PURE__ */ e("div", { className: p.footer, children: t })
      ]
    }
  );
}), W = "_badge_1as2w_1", F = "_neutral_1as2w_15", E = "_primary_1as2w_20", R = "_success_1as2w_25", T = "_warning_1as2w_30", D = "_danger_1as2w_35", G = "_solid_1as2w_41", J = "_outline_1as2w_66", y = {
  badge: W,
  neutral: F,
  primary: E,
  success: R,
  warning: T,
  danger: D,
  solid: G,
  outline: J
}, A1 = o(function({ tone: n = "neutral", variant: a = "soft", className: t, children: s, ...r }, i) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: i,
      className: [y.badge, y[n], y[a], t].filter(Boolean).join(" "),
      ...r,
      children: s
    }
  );
}), C1 = [
  "check",
  "close",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "search",
  "plus",
  "minus",
  "alert",
  "info",
  "arrow-right",
  "arrow-left",
  "external-link",
  "copy",
  "trash",
  "edit",
  "settings",
  "user",
  "users",
  "download",
  "upload",
  "menu",
  "more-horizontal",
  "mail",
  "lock",
  "eye",
  "eye-off",
  "refresh",
  "calendar",
  "clock",
  "check-circle",
  "x-circle",
  "shield",
  "globe",
  "file",
  "folder",
  "home",
  "key",
  "link"
], K = {
  check: /* @__PURE__ */ e("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ e("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ e("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ e("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ e("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ e("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ e("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ e("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ e("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ e("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ e("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ e("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ e("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ e("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ e("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ e("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ e("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ e("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ e("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ e("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ e("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ e("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ e("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ e("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] })
}, I1 = o(function({ name: n, size: a = 16, strokeWidth: t = 2, className: s, ...r }, i) {
  return /* @__PURE__ */ e(
    "svg",
    {
      ref: i,
      className: s,
      width: a,
      height: a,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: t,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...r,
      children: K[n]
    }
  );
}), O = "_stat_17lcz_1", P = "_label_17lcz_8", Q = "_row_17lcz_16", U = "_value_17lcz_22", X = "_delta_17lcz_28", Y = "_success_17lcz_33", Z = "_danger_17lcz_37", e1 = "_neutral_17lcz_41", t1 = "_hint_17lcz_45", u = {
  stat: O,
  label: P,
  row: Q,
  value: U,
  delta: X,
  success: Y,
  danger: Z,
  neutral: e1,
  hint: t1
}, W1 = o(function({ label: n, value: a, delta: t, deltaTone: s = "neutral", hint: r, className: i, ..._ }, h) {
  return /* @__PURE__ */ l("div", { ref: h, className: [u.stat, i].filter(Boolean).join(" "), ..._, children: [
    /* @__PURE__ */ e("div", { className: u.label, children: n }),
    /* @__PURE__ */ l("div", { className: u.row, children: [
      /* @__PURE__ */ e("div", { className: u.value, children: a }),
      t != null && /* @__PURE__ */ e("div", { className: [u.delta, u[s]].join(" "), children: t })
    ] }),
    r != null && /* @__PURE__ */ e("div", { className: u.hint, children: r })
  ] });
}), l1 = "_wrap_1x8tx_1", a1 = "_table_1x8tx_8", n1 = "_start_1x8tx_40", c1 = "_center_1x8tx_44", r1 = "_end_1x8tx_48", s1 = "_empty_1x8tx_52", m = {
  wrap: l1,
  table: a1,
  start: n1,
  center: c1,
  end: r1,
  empty: s1
};
function F1({ columns: d, rows: n, rowKey: a, empty: t, className: s }) {
  return /* @__PURE__ */ l("div", { className: [m.wrap, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ l("table", { className: m.table, children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: d.map((r) => /* @__PURE__ */ e(
        "th",
        {
          className: r.align != null ? m[r.align] : void 0,
          scope: "col",
          children: r.header
        },
        r.key
      )) }) }),
      /* @__PURE__ */ e("tbody", { children: n.map((r) => /* @__PURE__ */ e("tr", { children: d.map((i) => /* @__PURE__ */ e(
        "td",
        {
          className: i.align != null ? m[i.align] : void 0,
          children: i.render != null ? i.render(r) : r[i.key]
        },
        i.key
      )) }, a(r))) })
    ] }),
    n.length === 0 && t != null && /* @__PURE__ */ e("div", { className: m.empty, children: t })
  ] });
}
const i1 = "_emptyState_1ilgs_1", d1 = "_icon_1ilgs_11", o1 = "_title_1ilgs_16", h1 = "_description_1ilgs_22", _1 = "_action_1ilgs_28", v = {
  emptyState: i1,
  icon: d1,
  title: o1,
  description: h1,
  action: _1
};
function E1({ icon: d, title: n, description: a, action: t, className: s }) {
  return /* @__PURE__ */ l("div", { className: [v.emptyState, s].filter(Boolean).join(" "), children: [
    d != null && /* @__PURE__ */ e("div", { className: v.icon, children: d }),
    /* @__PURE__ */ e("div", { className: v.title, children: n }),
    a != null && /* @__PURE__ */ e("div", { className: v.description, children: a }),
    t != null && /* @__PURE__ */ e("div", { className: v.action, children: t })
  ] });
}
const u1 = "_field_1i47m_1", p1 = "_label_1i47m_8", m1 = "_required_1i47m_14", v1 = "_hint_1i47m_19", M1 = "_error_1i47m_24", M = {
  field: u1,
  label: p1,
  required: m1,
  hint: v1,
  error: M1
};
function R1({ label: d, htmlFor: n, required: a, hint: t, error: s, children: r, className: i }) {
  return /* @__PURE__ */ l("div", { className: [M.field, i].filter(Boolean).join(" "), children: [
    d != null && /* @__PURE__ */ l("label", { className: M.label, htmlFor: n, children: [
      d,
      a === !0 && /* @__PURE__ */ e("span", { className: M.required, "aria-hidden": "true", children: "*" })
    ] }),
    r,
    s != null ? /* @__PURE__ */ e("div", { className: M.error, role: "alert", children: s }) : t != null ? /* @__PURE__ */ e("div", { className: M.hint, children: t }) : null
  ] });
}
const f1 = "_label_twicg_1", y1 = {
  label: f1
}, T1 = o(
  function({ className: n, children: a, ...t }, s) {
    return /* @__PURE__ */ e("label", { ref: s, className: [y1.label, n].filter(Boolean).join(" "), ...t, children: a });
  }
), g1 = "_input_1ju3m_1", x1 = "_invalid_1ju3m_30", b1 = "_sm_1ju3m_36", w1 = "_md_1ju3m_41", g = {
  input: g1,
  invalid: x1,
  sm: b1,
  md: w1
}, D1 = o(function({ size: n = "md", invalid: a = !1, className: t, ...s }, r) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: r,
      className: [g.input, g[n], a ? g.invalid : null, t].filter(Boolean).join(" "),
      "aria-invalid": a || void 0,
      ...s
    }
  );
}), N1 = "_select_sn5nh_1", k1 = "_invalid_sn5nh_32", z1 = "_sm_sn5nh_38", $1 = "_md_sn5nh_43", x = {
  select: N1,
  invalid: k1,
  sm: z1,
  md: $1
}, G1 = o(function({ size: n = "md", invalid: a = !1, options: t, children: s, className: r, ...i }, _) {
  return /* @__PURE__ */ e(
    "select",
    {
      ref: _,
      className: [x.select, x[n], a ? x.invalid : null, r].filter(Boolean).join(" "),
      "aria-invalid": a || void 0,
      ...i,
      children: t != null ? t.map((h) => /* @__PURE__ */ e("option", { value: h.value, disabled: h.disabled, children: h.label }, h.value)) : s
    }
  );
}), j1 = "_checkbox_sx3bj_1", H1 = {
  checkbox: j1
}, J1 = o(function({ className: n, ...a }, t) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: t,
      type: "checkbox",
      className: [H1.checkbox, n].filter(Boolean).join(" "),
      ...a
    }
  );
}), B1 = {
  switch: "_switch_1lrk0_1"
}, K1 = o(function({ className: n, ...a }, t) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: t,
      type: "checkbox",
      role: "switch",
      className: [B1.switch, n].filter(Boolean).join(" "),
      ...a
    }
  );
});
export {
  A1 as Badge,
  V1 as Button,
  S1 as Card,
  J1 as Checkbox,
  E1 as EmptyState,
  R1 as Field,
  I1 as Icon,
  D1 as Input,
  T1 as Label,
  G1 as Select,
  W1 as Stat,
  K1 as Switch,
  F1 as Table,
  C1 as iconNames
};
