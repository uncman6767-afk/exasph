const templatetopnav = document.createElement("template");

templatetopnav.innerHTML = `
<div class="topnav" id="topnav">
<div class="dropdown">
  <a href="/more/index.html" class="topnavbutton">MORE↓</a>
  <div class="dropdown-content">
    <a href="/more/apps.html" class="first">Apps</a>
    <a href="/more/discord.html" class="dis">Discord</a>
    <a href="/more/game_help.html" class="vm">Game Help</a>
    <a href="/more/takedown.html" class="vm">DMCA</a>
    <a href="/more/blank.html" class="gr last">about:blank</a>
  </div>
</div>
<a href="/about.html">📝ABOUT</a>
<a href="/leaderboard.html">🏆LEADERBOARD</a>
<a href="/">LESSONS</a>
<div class="centered-fixed-blur"></div>
<div class="centered-fixed">
     <img src="/assets/img/duck.webp" onmouseover="spin(this)"
    onmouseout="unspin(this)" alt="Mike" onClick="home()" width="40px" height="40px" />
      <span id="duckmath-header" class="duckmath-header" onmouseenter="showchildren(this);" onmouseleave="hidechildren(this);">Math Lessons with Mike</span>
</div>


</div>



<div id="hamburger-icon" onclick="toggleMobileMenu(this)">
<div class="bar1"></div>
<div class="bar2"></div>
<div class="bar3"></div>
<ul class="mobile-menu">
  <li><a href="/index.html">HOME</a></li>
  <li><a href="/">GAMES</a></li>
  <li><a href="/leaderboard.html">LEADERBOARD</a></li>
  <li><a href="/about.html">ABOUT</a></li>
  <li>
    <a class="topnavbutton">MORE↓</a>
    <div class="dropdown-content">
      <a href="/more/apps.html">Apps</a>
      <a href="/more/Virtual_Machines.html" class="vm">Virtual Machines</a>
      <a href="/more/discord.html" class="dis">Discord</a>
      <a href="/more/game_help.html" class="gr">Game Help</a>
    </div>
  </li>
</ul>
</div>
`;

function spin(element) {
  element.style.transform = "rotate(360deg)";
  element.style.transition = "transform 0.25s ease";
}

function unspin(element) {
  element.style.transform = "";
}

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

document.body.appendChild(templatetopnav.content);

// Inject global footer on every page
const templatefooter = document.createElement("template");
templatefooter.innerHTML = `
<footer id="site-footer" class="site-footer" style="margin-top: 24px; padding: 20px 16px; border-top: 1px solid rgba(255,255,255,0.1);">
  <div style="max-width: 1200px; margin: 0 auto; display: grid; gap: 16px;">
    <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <img loading="lazy" src="/assets/img/duck.webp" alt="MikeMath" width="40" height="40" style="border-radius: 6px;"/>
        <div>
          <a href="/" style="font-weight: 700; font-size: 1.05rem; text-decoration: none; color: inherit;">MikeMath — Math Lessons</a>
          <div style="opacity: 0.9; font-size: 0.95rem;">New lessons every day!</div>
        </div>
      </div>
      <div style="max-width: 680px; opacity: 0.9; font-size: 0.95rem;">
        MikeMath provides tons of resources and lessons for yoor convenience.
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
      <div>
        <div style="font-weight: 600; margin-bottom: 8px;">Quick Links</div>
        <div style="display: grid; gap: 6px;">
          <a href="/about.html" style="text-decoration: none; color: inherit; opacity: 0.95;">About</a>
          <a href="/leaderboard.html" style="text-decoration: none; color: inherit; opacity: 0.95;">Leaderboard</a>
          <a href="/" style="text-decoration: none; color: inherit; opacity: 0.95;">Games</a>
          <a href="/blog/" style="text-decoration: none; color: inherit; opacity: 0.95;">Blog</a>
          <a href="/advertise.html" style="text-decoration: none; color: inherit; opacity: 0.95;">Advertise</a>
          <a href="/more/create-site.html" style="text-decoration: none; color: inherit; opacity: 0.95;">Create Your Own Site</a>
          <a href="/more/apps.html" style="text-decoration: none; color: inherit; opacity: 0.95;">Apps & Unblockers</a>
          <a href="/more/tab-cloak.html" style="text-decoration: none; color: inherit; opacity: 0.95;">Tab Cloak</a>
          <a href="/more/cache.html" style="text-decoration: none; color: inherit; opacity: 0.95;">Item Shop</a>
          <a href="/more/streak.html" style="text-decoration: none; color: inherit; opacity: 0.95;">Streak</a>
          <a href="/more/discord.html" style="text-decoration: none; color: inherit; opacity: 0.95;">Discord (In‑Site)</a>
          <a href="/more/game_help.html" style="text-decoration: none; color: inherit; opacity: 0.95;">Help & Requests</a>
          <a href="/more/takedown.html" style="text-decoration: none; color: inherit; opacity: 0.95;">DMCA</a>
        </div>
      </div>
      <div>
        <div style="font-weight: 600; margin-bottom: 8px;">Socials</div>
        <div style="display: grid; gap: 6px;">
          
          <a href="https://discord.gg/aMUVSARrEy" target="_blank" rel="noopener" style="text-decoration: none; color: inherit; opacity: 0.95;">Discord</a>
          <a href="https://www.tiktok.com/@rockyf2p" target="_blank" rel="noopener" style="text-decoration: none; color: inherit; opacity: 0.95;">TikTok</a>
          <a href="https://www.youtube.com/@duckmathgames" target="_blank" rel="noopener" style="text-decoration: none; color: inherit; opacity: 0.95;">YouTube</a>
          <a href="https://www.instagram.com/duckmath/reels/" target="_blank" rel="noopener" style="text-decoration: none; color: inherit; opacity: 0.95;">Instagram</a>
        </div>
      </div>
      <div>
        <div style="font-weight: 600; margin-bottom: 8px;">Our Manifesto</div>
        <div style="opacity: 0.9; font-size: 0.95rem;">Math can be difficult, and that's why MikeMath was established; to help students worldwide learn about math.</div>
      </div>
    </div>

    <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; opacity: 0.85; font-size: 0.9rem; padding-top: 8px;">
      <div>© <span id="footer-year"></span> mathwith-mikemorse.pages.dev</div>
      <div>Built for fast, accessible, helpful lessons.</div>
    </div>
  </div>
</footer>
`;

document.body.appendChild(templatefooter.content);

// Set footer year dynamically
const footerYearSpan = document.getElementById("footer-year");
if (footerYearSpan) {
  const now = new Date();
  footerYearSpan.textContent = now.getFullYear();
}

// Ensure body layout supports a sticky footer at the bottom in natural flow
(function ensureFooterLayout() {
  if (!document.getElementById("global-footer-layout-style")) {
    const style = document.createElement("style");
    style.id = "global-footer-layout-style";
    style.textContent = `
      html, body { min-height: 100%; }
      body { display: flex; flex-direction: column; min-height: 100vh; }
      #site-footer { margin-top: auto !important; }
    `;
    document.head.appendChild(style);
  }
})();

// Ensure footer stays as the last element in <body> across pages that inject content late
function placeFooterAtEnd() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;
  if (document.body.lastElementChild !== footer) {
    document.body.appendChild(footer);
  }
}

document.addEventListener("DOMContentLoaded", placeFooterAtEnd);
window.addEventListener("load", placeFooterAtEnd);

const bodyObserver = new MutationObserver(function () {
  placeFooterAtEnd();
});
bodyObserver.observe(document.body, { childList: true });
