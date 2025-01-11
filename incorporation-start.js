/**
 * Minified by jsDelivr using Terser v5.37.0.
 * Original file: /gh/centry-digital/incorporation@refs/heads/main/incorporation-start.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
document.addEventListener("DOMContentLoaded", async function () {
  let e,
    t,
    o,
    s = "",
    n = "",
    l = window.location.search,
    c = new URLSearchParams(l);
  e =
    c.get("status") && "resume" == c.get("status")
      ? c.get("id")
      : crypto.randomUUID();
  const r = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value"
  ).set;
  window.addEventListener("Tally.FormPageView", async (l) => {
    const c = l.detail;
    if (
      (2 == c.page &&
        ((t = document.getElementById("d3838481-131e-40b6-8173-ea3e4b60fbb6")),
        t.addEventListener("input", () => {
          o = t.value;
        })),
      4 == c.page)
    ) {
      const i = document.querySelector(
        ".tally-block-ed941986-459c-4cdf-b658-0831dc34b06e"
      );
      i.style.display = "none";
      let y = document.querySelector(
        ".tally-block-407e3e2c-2adf-4bd7-884e-538edf057819"
      ).firstChild.firstChild;
      async function a() {
        y.removeEventListener("click", a),
          (y.style.cursor = "progress"),
          (document.body.style.cursor = "progress"),
          (i.style.display = "block");
        const t = await fetch(
          "https://hook.us1.make.com/cg12rx574qwmd3euut9k092vjbh4ali2",
          {
            method: "POST",
            body: JSON.stringify({ formId: e, companyName: o }),
          }
        );
        if (t.ok) {
          const e = await t.json();
          (s = e.url),
            (y.style.cursor = "pointer"),
            (document.body.style.cursor = "auto"),
            (i.style.display = "none"),
            y.addEventListener("click", a),
            window.open(e.url, "_blank");
        } else
          alert("Please try again"),
            (y.style.cursor = "pointer"),
            (document.body.style.cursor = "auto"),
            (i.style.display = "none"),
            y.addEventListener("click", a);
      }
      (y.style.cursor = "pointer"), y.addEventListener("click", a);
    }
    if (5 == c.page) {
      const u = document.querySelector(
        ".tally-block-0658b0bf-8d69-4cb6-897f-0b29f2e9f833"
      );
      u.style.display = "none";
      let b = document.querySelector(
        ".tally-block-d1326dea-8b27-4901-a9b9-1260b34dfa87"
      ).firstChild.firstChild;
      async function d() {
        b.removeEventListener("click", d),
          (b.style.cursor = "progress"),
          (document.body.style.cursor = "progress"),
          (u.style.display = "block");
        const t = await fetch(
          "https://hook.us1.make.com/n9nabpy07p2lrg8pw8lgd9krgas92c3j",
          {
            method: "POST",
            body: JSON.stringify({ formId: e, companyName: o }),
          }
        );
        if (t.ok) {
          const e = await t.json();
          (n = e.url),
            (b.style.cursor = "pointer"),
            (document.body.style.cursor = "auto"),
            (u.style.display = "none"),
            b.addEventListener("click", d),
            window.open(e.url, "_blank");
        } else
          alert("Please try again"),
            (b.style.cursor = "pointer"),
            (document.body.style.cursor = "auto"),
            (u.style.display = "none"),
            b.addEventListener("click", d);
      }
      (b.style.cursor = "pointer"), b.addEventListener("click", d);
    }
    if (7 == c.page) {
      const p = document.getElementById("304e1fc2-fe90-4aa8-bc56-b79f3bcfaeea");
      await r.call(p, e),
        p.dispatchEvent(new Event("input", { bubbles: !0 })),
        (p.disabled = !0);
      const m = document.getElementById("62ebc002-f373-4949-b83b-5aeacf27b4e1"),
        f = document.querySelector(
          ".tally-block-d936864e-a8f7-41b5-b590-584ea0b7b647"
        ),
        k = document.querySelector(
          ".tally-block-48909ab6-50ee-447a-9df3-90d438169fc6"
        ),
        g = f.firstChild.firstChild;
      await r.call(m, s),
        m.dispatchEvent(new Event("input", { bubbles: !0 })),
        (g.style.cursor = "pointer"),
        g.addEventListener("click", a),
        (k.style.display = "none"),
        (m.disabled = !0);
      const w = document.getElementById("43c14f10-da43-4bdf-a5ef-86e9af292f52"),
        v = document.querySelector(
          ".tally-block-5a914c38-5bae-4277-9546-438753d283bd"
        ),
        h = document.querySelector(
          ".tally-block-a4b52b81-d6d2-4c79-a1ba-f5645b16bb35"
        ),
        E = v.firstChild.firstChild;
      async function a() {
        g.removeEventListener("click", a),
          (g.style.cursor = "progress"),
          (document.body.style.cursor = "progress"),
          (k.style.display = "block");
        const t = await fetch(
          "https://hook.us1.make.com/cg12rx574qwmd3euut9k092vjbh4ali2",
          {
            method: "POST",
            body: JSON.stringify({ formId: e, companyName: o }),
          }
        );
        if (t.ok) {
          const e = await t.json();
          (s = e.url),
            r.call(m, s),
            (g.style.cursor = "pointer"),
            (document.body.style.cursor = "auto"),
            (k.style.display = "none"),
            g.addEventListener("click", a),
            window.open(e.url, "_blank");
        } else
          alert("Please try again"),
            (g.style.cursor = "pointer"),
            (document.body.style.cursor = "auto"),
            (k.style.display = "none"),
            g.addEventListener("click", a);
      }
      async function d() {
        E.removeEventListener("click", d),
          (E.style.cursor = "progress"),
          (document.body.style.cursor = "progress"),
          (h.style.display = "block");
        const t = await fetch(
          "https://hook.us1.make.com/n9nabpy07p2lrg8pw8lgd9krgas92c3j",
          {
            method: "POST",
            body: JSON.stringify({ formId: e, companyName: o }),
          }
        );
        if (t.ok) {
          const e = await t.json();
          (n = e.url),
            r.call(w, n),
            (E.style.cursor = "pointer"),
            (document.body.style.cursor = "auto"),
            (h.style.display = "none"),
            E.addEventListener("click", d),
            window.open(e.url, "_blank");
        } else
          alert("Please try again"),
            (E.style.cursor = "pointer"),
            (document.body.style.cursor = "auto"),
            (h.style.display = "none"),
            E.addEventListener("click", d);
      }
      await r.call(w, n),
        w.dispatchEvent(new Event("input", { bubbles: !0 })),
        (E.style.cursor = "pointer"),
        (h.style.display = "none"),
        E.addEventListener("click", d),
        (w.disabled = !0);
    }
  });
});
//# sourceMappingURL=/sm/5128a906341e6a7a6446e9fe74fe96af63ddc0e4cb9032d9596ff9d757964f19.map
