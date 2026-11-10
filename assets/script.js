/* ==========================================================================
   assets/script.js — 全站唯一脚本（原生 JS，无依赖，渐进增强）
   职责：
     1) 检测占位符：含「〔」的 tel:/mailto: 主 CTA 灰化禁用并显示「联系方式待公布」
     2) 二维码资源缺失时隐藏图片、保留文字「二维码待公布」
     3) 移动端 <details> 抽屉的 aria-expanded 同步（原生 details 无 JS 亦可用）
     4) 回到顶部按钮显隐
   不做：任何网络请求、表单提交、状态切换、数据收集。
   ========================================================================== */
(function () {
  "use strict";

  var PLACEHOLDER = "〔";

  /* 1) 主 CTA 占位检测 --------------------------------------------------- */
  function hasPlaceholder(el) {
    var href = el.getAttribute("href") || "";
    var text = el.textContent || "";
    return href.indexOf(PLACEHOLDER) !== -1 || text.indexOf(PLACEHOLDER) !== -1;
  }

  function applyCtaState(link) {
    var dock = link.closest(".cta-dock") || document;
    var reason = dock.querySelector("[data-cta-reason]");
    if (hasPlaceholder(link)) {
      link.classList.add("is-disabled");
      link.setAttribute("aria-disabled", "true");
      link.setAttribute("tabindex", "-1");
      if (reason) { reason.hidden = false; reason.textContent = "联系方式待公布"; }
    } else {
      link.classList.remove("is-disabled");
      link.removeAttribute("aria-disabled");
      link.removeAttribute("tabindex");
      if (reason) { reason.hidden = true; }
    }
  }

  var ctas = document.querySelectorAll("[data-main-cta='c1'], [data-main-cta='c2']");
  for (var i = 0; i < ctas.length; i++) { applyCtaState(ctas[i]); }

  /* 2) 二维码资源缺失 --------------------------------------------------- */
  var qrImgs = document.querySelectorAll("[data-qr-img]");
  for (var j = 0; j < qrImgs.length; j++) {
    var img = qrImgs[j];
    var slot = img.closest(".qr-slot") || document;
    var missing = slot.querySelector("[data-qr-missing]");
    var src = img.getAttribute("src");
    var ok = src && src.indexOf(PLACEHOLDER) === -1;
    if (ok) {
      img.hidden = false;
      if (missing) { missing.hidden = true; }
    } else {
      img.hidden = true;                       // 隐藏图片，不放示意码
      if (missing) {
        missing.hidden = false;
        missing.textContent = "二维码待公布";   // 保留文字
      }
    }
  }

  /* 3) 移动端抽屉 aria-expanded 同步 ------------------------------------- */
  var drawers = document.querySelectorAll("details.nav-drawer");
  for (var k = 0; k < drawers.length; k++) {
    (function (details) {
      var summary = details.querySelector("summary");
      if (!summary) { return; }
      function sync() {
        summary.setAttribute("aria-expanded", details.open ? "true" : "false");
      }
      details.addEventListener("toggle", sync);
      sync();
    })(drawers[k]);
  }

  /* 4) 回到顶部显隐 ----------------------------------------------------- */
  var toTop = document.querySelector("[data-to-top]");
  if (toTop) {
    function onScroll() {
      toTop.hidden = window.pageYOffset < 400;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
