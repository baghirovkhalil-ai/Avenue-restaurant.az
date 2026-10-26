(function () {
  "use strict";
  var MENU = window.AVENUE_MENU;
  var WA_NUMBER = "994552170017";
  var state = { tab: "kitchen", query: "" };

  var body = document.getElementById("menu-body");
  var chips = document.getElementById("menu-chips");
  var search = document.getElementById("menu-search");
  var tabs = document.querySelectorAll("[data-tab]");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // Azərbaycan hərflərini sadələşdirərək axtarış ("qelyanalti" ilə "qəlyanaltı" tapılsın)
  function norm(s) {
    return String(s).toLocaleLowerCase("az")
      .replace(/ə/g, "e").replace(/ı/g, "i").replace(/ö/g, "o").replace(/ü/g, "u")
      .replace(/ş/g, "s").replace(/ç/g, "c").replace(/ğ/g, "g");
  }
  function highlight(text, q) {
    if (!q) return esc(text);
    var n = norm(text), i = n.indexOf(q);
    if (i < 0) return esc(text);
    return esc(text.slice(0, i)) + "<mark>" + esc(text.slice(i, i + q.length)) + "</mark>" + esc(text.slice(i + q.length));
  }
  function fmt(p) {
    if (p === null || p === undefined) return "—";
    if (typeof p === "number") return String(p).replace(".", ",");
    return String(p);
  }
  function matches(item, q) {
    return !q || norm(item[0]).indexOf(q) > -1 || (item[2] && norm(item[2]).indexOf(q) > -1);
  }

  function render() {
    var q = norm(state.query.trim());
    var cats = MENU[state.tab];
    var html = "", chipHtml = "", total = 0;

    cats.forEach(function (cat) {
      var items = cat.items.filter(function (it) { return matches(it, q); });
      if (!items.length) return;
      total += items.length;
      chipHtml += '<a class="chip" href="#cat-' + cat.id + '" data-cat="' + cat.id + '">' + esc(cat.title) + "</a>";

      html += '<section class="cat" id="cat-' + cat.id + '"><div class="cat-head"><h3>' + esc(cat.title) +
        '</h3><span class="cat-count">' + items.length + " mövqe</span></div>";
      if (cat.note && !q) html += '<p class="cat-note">' + esc(cat.note) + "</p>";

      if (cat.cols) {
        html += '<div class="table-wrap"><table class="price-table"><thead><tr><th scope="col">Ad</th>';
        cat.cols.forEach(function (c) { html += '<th scope="col">' + esc(c) + "</th>"; });
        html += "</tr></thead><tbody>";
        items.forEach(function (it) {
          html += "<tr><td>" + highlight(it[0], q) + "</td>";
          it[1].forEach(function (p) {
            html += p === null ? '<td class="na">—</td>' : "<td>" + fmt(p) + "</td>";
          });
          html += "</tr>";
        });
        html += "</tbody></table></div>";
      } else {
        var compact = items.every(function (it) { return !it[2]; });
        html += '<div class="items' + (compact ? " compact" : "") + '">';
        items.forEach(function (it) {
          html += '<div class="item"><div class="item-line"><span class="item-name">' + highlight(it[0], q) +
            '</span><span class="item-dots" aria-hidden="true"></span><span class="item-price">' + fmt(it[1]) +
            "<small>AZN</small></span></div>" +
            (it[2] ? '<p class="item-desc">' + highlight(it[2], q) + "</p>" : "") + "</div>";
        });
        html += "</div>";
      }
      html += "</section>";
    });

    if (!total) {
      html = '<p class="menu-empty">“' + esc(state.query) + '” üzrə heç nə tapılmadı. Başqa söz yazın və ya digər bölməyə baxın.</p>';
    }
    body.innerHTML = html;
    chips.innerHTML = chipHtml;
  }

  tabs.forEach(function (b) {
    b.addEventListener("click", function () {
      state.tab = b.getAttribute("data-tab");
      tabs.forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
      render();
      var top = document.getElementById("menyu").getBoundingClientRect().top + window.scrollY - 70;
      if (window.scrollY > top) window.scrollTo({ top: top });
    });
  });
  search.addEventListener("input", function () { state.query = search.value; render(); });

  chips.addEventListener("click", function (e) {
    var a = e.target.closest(".chip");
    if (!a) return;
    e.preventDefault();
    var el = document.getElementById("cat-" + a.getAttribute("data-cat"));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Hansı kateqoriyanın göründüyünü çipdə işarələ
  if ("IntersectionObserver" in window) {
    var io;
    var watch = function () {
      if (io) io.disconnect();
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var id = en.target.id.replace("cat-", "");
          chips.querySelectorAll(".chip").forEach(function (c) {
            var on = c.getAttribute("data-cat") === id;
            c.classList.toggle("active", on);
            if (on && c.scrollIntoView) {
              var r = c.getBoundingClientRect(), pr = chips.getBoundingClientRect();
              if (r.left < pr.left || r.right > pr.right) chips.scrollLeft += r.left - pr.left - 16;
            }
          });
        });
      }, { rootMargin: "-40% 0px -55% 0px" });
      body.querySelectorAll(".cat").forEach(function (s) { io.observe(s); });
    };
    var origRender = render;
    render = function () { origRender(); watch(); };
  }

  render();

  // Mobil naviqasiya
  var toggle = document.getElementById("menu-toggle");
  var nav = document.getElementById("nav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
  });

  // Masa sifarişi → WhatsApp
  var form = document.getElementById("reserve-form");
  var dateIn = document.getElementById("r-date");
  var err = document.getElementById("r-error");
  var today = new Date();
  var iso = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
  dateIn.min = iso;
  if (!dateIn.value) dateIn.value = iso;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("r-name").value.trim();
    var phone = document.getElementById("r-phone").value.trim();
    var date = dateIn.value, time = document.getElementById("r-time").value;
    var guests = document.getElementById("r-guests").value;
    var occ = document.getElementById("r-occasion").value;
    var note = document.getElementById("r-note").value.trim();
    if (!name || !date || !time) { err.hidden = false; err.textContent = "Adınızı, tarixi və saatı yazın."; return; }
    err.hidden = true;
    var d = date.split("-").reverse().join(".");
    var msg = "Salam, Avenue! Masa sifarişi etmək istəyirəm.\n" +
      "Ad: " + name + "\n" + (phone ? "Telefon: " + phone + "\n" : "") +
      "Tarix: " + d + ", saat " + time + "\n" + "Qonaq sayı: " + guests + "\n" +
      (occ ? "Münasibət: " + occ + "\n" : "") + (note ? "Qeyd: " + note : "");
    window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });

  document.getElementById("year").textContent = today.getFullYear();
})();
