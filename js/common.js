/* ===== Vampire Crawlers Guide - Common JS ===== */
/* Dark mode / Language / Global Search / Burger / Back-to-top */
(function () {
  "use strict";

  /* ---------- SVG icons ---------- */
  var ICON_SEARCH = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  var ICON_SUN = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  var ICON_MOON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  /* ---------- i18n dictionary (UI framework) ---------- */
  var I18N = {
    "nav.getting-started": { zh: "新手入门", en: "Beginner" },
    "nav.combat": { zh: "卡牌战斗", en: "Combat" },
    "nav.deckbuilding": { zh: "牌组构筑", en: "Deck Building" },
    "nav.dungeons": { zh: "地牢探索", en: "Dungeons" },
    "nav.items": { zh: "图鉴速查", en: "Codex" },
    "nav.cta.start": { zh: "开始攻略", en: "Start Guide" },
    "nav.cta.home": { zh: "返回首页", en: "Home" },
    "brand": { zh: "吸血鬼爬行者攻略站", en: "Vampire Crawlers Guide" },
    "search.placeholder": { zh: "搜索攻略、卡牌、机制…", en: "Search guides, cards, mechanics…" },
    "search.empty": { zh: "没有找到相关内容", en: "No results found" },
    "search.hint": { zh: "输入关键词搜索全站攻略", en: "Type to search the whole site" },
    "foot.nav": { zh: "攻略导航", en: "Guides" },
    "foot.systems": { zh: "系统与图鉴", en: "Systems & Codex" },
    "foot.about": { zh: "关于", en: "About" },
    "foot.aboutus": { zh: "关于本站", en: "About" },
    "foot.feedback": { zh: "投稿反馈", en: "Feedback" },
    "foot.branddesc": { zh: "《Vampire Crawlers》中文玩家攻略站，原创整理，持续更新。", en: "A player-made Vampire Crawlers guide site, original content, updated regularly." },
    "foot.copy": { zh: "© 2026 Vampire Crawlers 攻略站 · 中文攻略 · 仅供学习交流", en: "© 2026 Vampire Crawlers Guide · Fan-made · For learning only" }
  };

  /* ---------- Search index ---------- */
  var SEARCH_INDEX = [
    { page: "首页", pageEn: "Home", url: "index.html",
      title: "Vampire Crawlers 攻略站", titleEn: "Vampire Crawlers Guide",
      tags: "Vampire Crawlers 吸血鬼 爬行者 攻略 首页 卡牌 地牢", tagsEn: "Vampire Crawlers guide home cards dungeon" },
    { page: "新手入门", pageEn: "Beginner", url: "getting-started.html",
      title: "从零开始到通关地牢", titleEn: "From Zero to Dungeon Clear",
      tags: "新手 入门 教程 第一局 回合 卡牌 蓝法 顺序", tagsEn: "beginner guide tutorial first run turn card mana order" },
    { page: "卡牌战斗", pageEn: "Combat", url: "combat.html",
      title: "连击系统与Turboturn详解", titleEn: "Combo System & Turboturn Guide",
      tags: "战斗 连击 combo 蓝法 mana 顺序 Wild 万能牌 倍率 Turboturn 涡轮回合", tagsEn: "combat combo mana order wild multiplier turboturn" },
    { page: "牌组构筑", pageEn: "Deck Building", url: "deckbuilding.html",
      title: "牌组搭配与强化路线", titleEn: "Deck Synergy & Upgrade Paths",
      tags: "牌组 构筑 搭配 卡牌类型 宝石 强化 武器进化 召唤", tagsEn: "deck building synergy card type gem augment weapon evolution summon" },
    { page: "地牢探索", pageEn: "Dungeons", url: "dungeons.html",
      title: "地牢类型与楼层机制", titleEn: "Dungeon Types & Floor Mechanics",
      tags: "地牢 楼层 宝箱 铁锹 挖掘 墙壁 宝藏 探索", tagsEn: "dungeon floor chest shovel dig wall treasure explore" },
    { page: "图鉴速查", pageEn: "Codex", url: "items.html",
      title: "全卡牌图鉴与数据表", titleEn: "Card Codex & Data Tables",
      tags: "图鉴 卡牌 数据 宝石 武器 道具 速查表 筛选", tagsEn: "codex card data gem weapon item table filter" },
    /* extra searchable anchors */
    { page: "卡牌战斗", pageEn: "Combat", url: "combat.html#combo",
      title: "连击系统（Combo Chain）", titleEn: "Combo Chain System",
      tags: "连击 combo 蓝法 顺序 倍率 乘数", tagsEn: "combo chain mana order multiplier" },
    { page: "卡牌战斗", pageEn: "Combat", url: "combat.html#wilds",
      title: "万能牌（Wilds）", titleEn: "Wilds",
      tags: "万能牌 Wild 延长 连击 30张", tagsEn: "wild extend combo 30 cards" },
    { page: "卡牌战斗", pageEn: "Combat", url: "combat.html#turboturn",
      title: "涡轮回合（Turboturn）", titleEn: "Turboturn",
      tags: "涡轮 Turboturn 快速 雪球 节奏", tagsEn: "turboturn fast snowball pace" },
    { page: "牌组构筑", pageEn: "Deck Building", url: "deckbuilding.html#gems",
      title: "宝石强化系统", titleEn: "Gem Augment System",
      tags: "宝石 强化 增幅 卡牌 升级", tagsEn: "gem augment upgrade card" },
    { page: "牌组构筑", pageEn: "Deck Building", url: "deckbuilding.html#evolutions",
      title: "武器进化", titleEn: "Weapon Evolutions",
      tags: "武器 进化 传说 装备", tagsEn: "weapon evolution legendary equipment" },
    { page: "地牢探索", pageEn: "Dungeons", url: "dungeons.html#floors",
      title: "楼层进阶机制", titleEn: "Floor Progression",
      tags: "楼层 铁锹 挖掘 下一层 进阶", tagsEn: "floor shovel dig next floor progression" }
  ];

  var lang = localStorage.getItem("vc-lang") || "zh";
  var dark = localStorage.getItem("vc-dark") === "1";

  /* ---------- Apply language ---------- */
  function applyLang(l) {
    lang = l;
    localStorage.setItem("vc-lang", l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : "en";

    /* 1) UI framework elements via data-i18n dictionary */
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (I18N[key] && I18N[key][l]) {
        if (el.hasAttribute("data-i18n-ph")) el.setAttribute("placeholder", I18N[key][l]);
        else el.textContent = I18N[key][l];
      }
    });

    /* 2) Page content elements via data-en attribute */
    document.querySelectorAll("[data-en]").forEach(function (el) {
      if (l === "en") {
        if (!el.hasAttribute("data-zh")) el.setAttribute("data-zh", el.innerHTML);
        el.innerHTML = el.getAttribute("data-en");
      } else {
        if (el.hasAttribute("data-zh")) el.innerHTML = el.getAttribute("data-zh");
      }
    });

    var langBtn = document.querySelector(".lang-btn");
    if (langBtn) langBtn.textContent = l === "zh" ? "English" : "中文";

    /* 3) Update aria-labels for accessibility */
    var ariaMap = {
      ".search-btn": { zh: "搜索", en: "Search" },
      ".dark-btn": { zh: "暗色模式", en: "Toggle dark mode" },
      ".lang-btn": { zh: "语言", en: "Switch language" },
      "#burger": { zh: "菜单", en: "Menu" },
      "#toTop": { zh: "返回顶部", en: "Back to top" },
      ".search-close": { zh: "关闭", en: "Close" }
    };
    Object.keys(ariaMap).forEach(function (sel) {
      var el = document.querySelector(sel);
      if (el) el.setAttribute("aria-label", ariaMap[sel][l]);
    });

    /* 4) Re-render search results if overlay is open */
    var ov = document.getElementById("searchOverlay");
    if (ov && ov.classList.contains("show")) {
      var inp = ov.querySelector("input");
      renderSearch(inp ? inp.value : "");
    }
  }

  /* ---------- Apply dark ---------- */
  function applyDark(d) {
    dark = d;
    localStorage.setItem("vc-dark", d ? "1" : "0");
    document.body.classList.toggle("dark", d);
    var db = document.querySelector(".dark-btn");
    if (db) db.innerHTML = d ? ICON_SUN : ICON_MOON;
  }

  /* ---------- Search ---------- */
  function openSearch() {
    var ov = document.getElementById("searchOverlay");
    if (!ov) return;
    ov.classList.add("show");
    var inp = ov.querySelector("input");
    if (inp) { inp.value = ""; inp.focus(); renderSearch(""); }
  }
  function closeSearch() {
    var ov = document.getElementById("searchOverlay");
    if (ov) ov.classList.remove("show");
  }
  function renderSearch(q) {
    var box = document.querySelector("#searchOverlay .search-results");
    if (!box) return;
    q = (q || "").trim().toLowerCase();
    if (!q) {
      box.innerHTML = '<div class="sr-empty">' + t("search.hint") + "</div>";
      return;
    }
    var hits = [];
    SEARCH_INDEX.forEach(function (e) {
      var hay = (e.page + " " + e.title + " " + e.tags + " " +
                 (e.pageEn || "") + " " + (e.titleEn || "") + " " + (e.tagsEn || "")
      ).toLowerCase();
      if (hay.indexOf(q) !== -1) hits.push(e);
    });
    if (!hits.length) {
      box.innerHTML = '<div class="sr-empty">' + t("search.empty") + "</div>";
      return;
    }
    var isEn = lang === "en";
    box.innerHTML = hits.map(function (e) {
      var pg = isEn ? (e.pageEn || e.page) : e.page;
      var ti = isEn ? (e.titleEn || e.title) : e.title;
      var tg = isEn ? (e.tagsEn || e.tags) : e.tags;
      var snip = tg.split(" ").slice(0, 6).join(" · ");
      return '<a class="sr-item" href="' + e.url + '">' +
        '<div class="sr-page">' + pg + "</div>" +
        '<div class="sr-title">' + ti + "</div>" +
        '<div class="sr-snippet">' + snip + "</div></a>";
    }).join("");
  }
  function t(key) { return I18N[key] ? (I18N[key][lang] || I18N[key].zh) : key; }

  /* ---------- Init ---------- */
  function init() {
    applyDark(dark);
    applyLang(lang);

    /* set search button icon */
    var sb = document.querySelector(".search-btn");
    if (sb) sb.innerHTML = ICON_SEARCH;

    /* set search overlay icon */
    var sico = document.querySelector(".s-ico");
    if (sico) sico.innerHTML = ICON_SEARCH;

    /* burger */
    var burger = document.getElementById("burger");
    var navLinks = document.getElementById("navLinks");
    if (burger && navLinks) {
      burger.addEventListener("click", function () { navLinks.classList.toggle("open"); });
      navLinks.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () { navLinks.classList.remove("open"); });
      });
    }

    /* dark toggle */
    var db = document.querySelector(".dark-btn");
    if (db) db.addEventListener("click", function () { applyDark(!dark); });

    /* lang toggle */
    var lb = document.querySelector(".lang-btn");
    if (lb) lb.addEventListener("click", function () { applyLang(lang === "zh" ? "en" : "zh"); });

    /* back to top */
    var toTop = document.getElementById("toTop");
    if (toTop) {
      window.addEventListener("scroll", function () { toTop.classList.toggle("show", window.scrollY > 400); });
      toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    }

    /* search */
    var ov = document.getElementById("searchOverlay");
    if (sb) sb.addEventListener("click", openSearch);
    if (ov) {
      var close = ov.querySelector(".search-close");
      if (close) close.addEventListener("click", closeSearch);
      ov.addEventListener("click", function (e) { if (e.target === ov) closeSearch(); });
      var inp = ov.querySelector("input");
      if (inp) {
        inp.setAttribute("data-i18n", "search.placeholder");
        inp.setAttribute("data-i18n-ph", "1");
        inp.addEventListener("input", function () { renderSearch(inp.value); });
      }
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeSearch();
        if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); openSearch(); }
      });
    }
    applyLang(lang);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
