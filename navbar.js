/**
 * navbar.js — ProWash Premium Navbar
 * ─────────────────────────────────────────────────────────────────
 * Modern blue-themed navbar with glassmorphism, React + Tailwind CSS.
 * Fully responsive with animated dropdowns and mobile sidebar.
 *
 * Usage:
 *   1. Add <div id="navbar-root"></div> anywhere in your <body>.
 *   2. Include React, ReactDOM, Tailwind CSS, and this script.
 *   3. Navbar auto-initializes on DOMContentLoaded.
 * ─────────────────────────────────────────────────────────────────
 */

/* ================================================================
   EMBEDDED CSS — injected into <head> automatically
================================================================ */
const NAVBAR_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  :root {
    --nb-blue-50:  #eff6ff;
    --nb-blue-100: #dbeafe;
    --nb-blue-200: #bfdbfe;
    --nb-blue-400: #60a5fa;
    --nb-blue-500: #3b82f6;
    --nb-blue-600: #2563eb;
    --nb-blue-700: #1d4ed8;
    --nb-blue-800: #1e40af;
    --nb-blue-900: #1e3a8a;
    --nb-slate-50:  #f8fafc;
    --nb-slate-100: #f1f5f9;
    --nb-slate-200: #e2e8f0;
    --nb-slate-400: #94a3b8;
    --nb-slate-500: #64748b;
    --nb-slate-600: #475569;
    --nb-slate-700: #334155;
    --nb-slate-800: #1e293b;
    --nb-slate-900: #0f172a;
    --nb-white: #ffffff;

    --nb-font: 'Plus Jakarta Sans', system-ui, sans-serif;
    --nb-ease: cubic-bezier(0.4, 0, 0.2, 1);
    --nb-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
    --nb-t-fast: 0.18s;
    --nb-t: 0.28s;
    --nb-t-slow: 0.42s;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .nb-font { font-family: var(--nb-font); }

  /* ── Wrapper ── */
  .nb-wrap {
    position: fixed;
    top: 20px;
    left: 0; right: 0;
    margin: 0 auto;
    width: calc(100% - 48px);
    max-width: 1360px;
    z-index: 1000;
    transition: top var(--nb-t) var(--nb-ease),
                width var(--nb-t) var(--nb-ease),
                max-width var(--nb-t) var(--nb-ease);
  }

  .nb-wrap.nb-scrolled {
    top: 0;
    width: 100%;
    max-width: 100%;
  }

  /* ── Bar ── */
  .nb-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 0 8px 0 20px;
    height: 68px;
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid rgba(37, 99, 235, 0.14);
    border-radius: 999px;
    box-shadow: 0 4px 32px rgba(37, 99, 235, 0.09),
                0 1px 4px rgba(37, 99, 235, 0.06),
                inset 0 1px 0 rgba(255,255,255,0.9);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    transition: all var(--nb-t) var(--nb-ease);
  }

  .nb-wrap.nb-scrolled .nb-bar {
    border-radius: 0;
    background: rgba(255, 255, 255, 0.97);
    border: none;
    border-bottom: 1px solid rgba(37, 99, 235, 0.12);
    box-shadow: 0 4px 24px rgba(37, 99, 235, 0.1);
    padding: 0 20px;
    height: 62px;
  }

  /* ── Logo ── */
  .nb-logo {
    display: flex;
    align-items: center;
    gap: 11px;
    text-decoration: none;
    flex-shrink: 0;
    transition: opacity var(--nb-t-fast);
  }
  .nb-logo:hover { opacity: 0.88; }

  .nb-logo-icon {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 18px rgba(37, 99, 235, 0.38);
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    transition: transform var(--nb-t) var(--nb-spring),
                box-shadow var(--nb-t) var(--nb-ease);
  }

  .nb-logo-icon::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent 340deg, rgba(255,255,255,0.25) 360deg);
    animation: nb-spin 6s linear infinite;
  }

  @keyframes nb-spin { to { transform: rotate(360deg); } }

  .nb-logo:hover .nb-logo-icon {
    transform: scale(1.07) rotate(-4deg);
    box-shadow: 0 8px 28px rgba(37, 99, 235, 0.48);
  }

  .nb-logo-svg {
    position: relative;
    z-index: 1;
  }

  .nb-logo-text { display: flex; flex-direction: column; line-height: 1.15; }

  .nb-logo-name {
    font-family: var(--nb-font);
    font-size: 18px;
    font-weight: 800;
    color: var(--nb-slate-900);
    letter-spacing: -0.03em;
    white-space: nowrap;
  }

  .nb-logo-tag {
    font-family: var(--nb-font);
    font-size: 10px;
    font-weight: 600;
    color: var(--nb-blue-600);
    letter-spacing: 0.09em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  /* ── Desktop Nav ── */
  .nb-nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
  }

  .nb-nav-link {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 7px 15px;
    border-radius: 999px;
    font-family: var(--nb-font);
    font-size: 14px;
    font-weight: 600;
    color: var(--nb-slate-600);
    background: transparent;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    transition: color var(--nb-t-fast),
                background var(--nb-t-fast);
  }

  .nb-nav-link svg { flex-shrink: 0; transition: color var(--nb-t-fast), transform var(--nb-t-fast); }

  .nb-nav-link:hover {
    color: var(--nb-blue-700);
    background: var(--nb-blue-50);
  }

  .nb-nav-link:hover svg { color: var(--nb-blue-600); }

  .nb-nav-link.nb-active {
    color: var(--nb-blue-700);
    background: var(--nb-blue-50);
    font-weight: 700;
  }

  .nb-nav-link.nb-active svg { color: var(--nb-blue-600); }

  /* active underline dot */
  .nb-nav-link::after {
    content: '';
    position: absolute;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    border-radius: 3px;
    background: var(--nb-blue-500);
    transition: width var(--nb-t) var(--nb-ease);
  }
  .nb-nav-link:hover::after  { width: 12px; }
  .nb-nav-link.nb-active::after { width: 20px; }

  .nb-chevron { transition: transform var(--nb-t) var(--nb-ease) !important; }
  .nb-has-drop.nb-open .nb-chevron { transform: rotate(180deg) !important; }

  /* ── Dropdown ── */
  .nb-has-drop { position: relative; }

  .nb-dropdown {
    position: absolute;
    top: calc(100% + 14px);
    left: 50%;
    transform: translateX(-50%) translateY(-8px);
    min-width: 200px;
    background: rgba(255, 255, 255, 0.98);
    border: 1px solid rgba(37, 99, 235, 0.13);
    border-radius: 18px;
    padding: 8px;
    box-shadow: 0 20px 60px rgba(15, 23, 42, 0.13),
                0 4px 16px rgba(37, 99, 235, 0.08);
    backdrop-filter: blur(20px);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: all var(--nb-t) var(--nb-ease);
  }

  .nb-has-drop.nb-open .nb-dropdown {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0);
  }

  .nb-drop-item {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 10px 14px;
    border-radius: 11px;
    font-family: var(--nb-font);
    font-size: 14px;
    font-weight: 600;
    color: var(--nb-slate-600);
    text-decoration: none;
    transition: all var(--nb-t-fast);
  }

  .nb-drop-item svg { color: var(--nb-blue-500); flex-shrink: 0; transition: transform var(--nb-t-fast); }

  .nb-drop-item:hover {
    background: var(--nb-blue-50);
    color: var(--nb-blue-700);
    transform: translateX(4px);
  }

  .nb-drop-item:hover svg { transform: scale(1.15); color: var(--nb-blue-600); }
  .nb-drop-item.nb-active { color: var(--nb-blue-700); background: var(--nb-blue-50); font-weight: 700; }

  /* ── Right side ── */
  .nb-right {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }

  .nb-icon-btn {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: transparent;
    color: var(--nb-slate-500);
    border: 1px solid transparent;
    cursor: pointer;
    transition: all var(--nb-t-fast);
    flex-shrink: 0;
  }

  .nb-icon-btn:hover {
    background: var(--nb-blue-50);
    color: var(--nb-blue-600);
    border-color: rgba(37, 99, 235, 0.18);
    transform: translateY(-2px);
  }

  .nb-user-wrap { position: relative; }

  .nb-user-drop {
    position: absolute;
    top: calc(100% + 12px);
    right: 0;
    min-width: 190px;
    background: rgba(255, 255, 255, 0.98);
    border: 1px solid rgba(37, 99, 235, 0.13);
    border-radius: 18px;
    padding: 8px;
    box-shadow: 0 20px 60px rgba(15, 23, 42, 0.13);
    backdrop-filter: blur(20px);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-8px);
    transition: all var(--nb-t) var(--nb-ease);
  }

  .nb-user-wrap.nb-open .nb-user-drop {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0);
  }

  .nb-divider { height: 1px; background: rgba(37,99,235,0.1); margin: 6px 8px; }

  /* ── CTA button ── */
  .nb-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 20px;
    border-radius: 999px;
    background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
    color: #fff;
    font-family: var(--nb-font);
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(37, 99, 235, 0.35);
    white-space: nowrap;
    transition: all var(--nb-t-fast);
    flex-shrink: 0;
  }
  .nb-cta:hover {
    background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.45);
  }
  .nb-cta:active { transform: translateY(0); }

  /* ── Hamburger ── */
  .nb-hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: var(--nb-blue-50);
    border: 1px solid rgba(37, 99, 235, 0.18);
    cursor: pointer;
    gap: 5px;
    transition: all var(--nb-t-fast);
    flex-shrink: 0;
  }
  .nb-hamburger:hover { background: var(--nb-blue-600); border-color: var(--nb-blue-600); }
  .nb-hamburger:hover .nb-hbar { background: #fff; }
  .nb-hbar {
    display: block;
    width: 20px;
    height: 2px;
    background: var(--nb-blue-600);
    border-radius: 2px;
    transition: all 0.32s var(--nb-ease);
  }
  .nb-hamburger.nb-open { background: var(--nb-blue-600); border-color: var(--nb-blue-600); }
  .nb-hamburger.nb-open .nb-hbar { background: #fff; }
  .nb-hamburger.nb-open .nb-hbar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .nb-hamburger.nb-open .nb-hbar:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .nb-hamburger.nb-open .nb-hbar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  /* ── Overlay ── */
  .nb-overlay {
    position: fixed;
    inset: 0;
    z-index: 990;
    background: rgba(15, 23, 42, 0.4);
    backdrop-filter: blur(10px) saturate(160%);
    -webkit-backdrop-filter: blur(10px) saturate(160%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--nb-t-slow) var(--nb-ease);
  }
  .nb-overlay.nb-open { opacity: 1; visibility: visible; }

  /* ── Sidebar ── */
  /*
   * FIX: Use position:fixed with explicit top/right/bottom/left instead of
   * relying on height alone. This ensures the sidebar always fills the full
   * visible viewport — even on iOS Safari where 100vh ≠ visible height when
   * the address bar is shown. Combined with flex column + overflow:hidden on
   * the container and overflow-y:auto only on .nb-sb-body, the footer is
   * always pinned at the bottom of the visible area.
   */
  .nb-sidebar {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;          /* KEY: anchors to visible bottom edge, not 100vh */
    left: auto;
    /* height is NOT set — top+bottom handles it */
    z-index: 1001;
    width: 320px;
    max-width: calc(100vw - 40px);
    background: #fff;
    border-left: 1px solid rgba(37, 99, 235, 0.12);
    /* FIX: flex column so body scrolls and footer sticks */
    display: flex;
    flex-direction: column;
    /* FIX: overflow hidden on the outer shell only — children manage scroll */
    overflow: hidden;
    transform: translateX(110%);
    transition: transform var(--nb-t-slow) cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow var(--nb-t-slow) var(--nb-ease);
    box-shadow: none;
  }
  .nb-sidebar.nb-open {
    transform: translateX(0);
    box-shadow: -12px 0 80px rgba(15, 23, 42, 0.16);
  }

  .nb-sb-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 20px 18px;
    border-bottom: 1px solid rgba(37, 99, 235, 0.1);
    /* FIX: never shrink — head always visible */
    flex-shrink: 0;
    flex-grow: 0;
  }

  .nb-sb-close {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--nb-blue-50);
    border: 1px solid rgba(37, 99, 235, 0.18);
    color: var(--nb-blue-600);
    cursor: pointer;
    transition: all 0.25s var(--nb-spring);
  }
  .nb-sb-close:hover {
    background: var(--nb-blue-600);
    color: #fff;
    transform: rotate(90deg);
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.38);
  }

  .nb-sb-body {
    /* FIX: flex:1 so it takes remaining space between head and footer */
    flex: 1 1 0;         /* 0 base — grows into available space, never overflows */
    /* FIX: min-height:0 is CRITICAL — without it flex children can't shrink
       below their content height, pushing the footer off-screen */
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 14px 14px 18px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    /* iOS momentum scroll */
    -webkit-overflow-scrolling: touch;
  }
  .nb-sb-body::-webkit-scrollbar { width: 3px; }
  .nb-sb-body::-webkit-scrollbar-track { background: transparent; }
  .nb-sb-body::-webkit-scrollbar-thumb { background: rgba(37,99,235,0.2); border-radius: 3px; }

  .nb-sb-section {
    font-family: var(--nb-font);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--nb-slate-400);
    padding: 6px 10px 3px;
    margin-top: 4px;
  }

  .nb-sb-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    border-radius: 12px;
    font-family: var(--nb-font);
    font-size: 14.5px;
    font-weight: 600;
    color: var(--nb-slate-600);
    background: transparent;
    border: 1px solid transparent;
    width: 100%;
    text-align: left;
    cursor: pointer;
    text-decoration: none;
    transition: all var(--nb-t-fast);
  }
  .nb-sb-link-left { display: flex; align-items: center; gap: 13px; }
  .nb-sb-link-left svg { color: var(--nb-blue-500); flex-shrink: 0; transition: transform var(--nb-t-fast); }
  .nb-sb-link-right { color: var(--nb-slate-400); transition: transform var(--nb-t) var(--nb-ease), color var(--nb-t-fast); }
  .nb-sb-link:hover {
    background: var(--nb-blue-50);
    color: var(--nb-slate-900);
    border-color: rgba(37, 99, 235, 0.12);
    transform: translateX(3px);
  }
  .nb-sb-link:hover .nb-sb-link-left svg { transform: scale(1.1); }
  .nb-sb-link.nb-active {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    color: #fff;
    box-shadow: 0 4px 16px rgba(37, 99, 235, 0.32);
  }
  .nb-sb-link.nb-active .nb-sb-link-left svg { color: rgba(255,255,255,0.9); }
  .nb-sb-link.nb-active .nb-sb-link-right { color: rgba(255,255,255,0.7); }
  .nb-sb-link.nb-expanded .nb-sb-link-right { transform: rotate(180deg); color: var(--nb-blue-500); }

  /* sub menu */
  .nb-sb-sub {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.35s var(--nb-ease), opacity 0.25s var(--nb-ease);
  }
  .nb-sb-sub.nb-open { max-height: 500px; opacity: 1; }
  .nb-sb-sub-inner {
    padding: 5px 0 10px 46px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .nb-sb-sub-link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 13px;
    border-radius: 10px;
    font-family: var(--nb-font);
    font-size: 14px;
    font-weight: 600;
    color: var(--nb-slate-500);
    text-decoration: none;
    transition: all var(--nb-t-fast);
  }
  .nb-sb-sub-link svg { color: var(--nb-blue-400); flex-shrink: 0; }
  .nb-sb-sub-link:hover { background: var(--nb-blue-50); color: var(--nb-blue-700); transform: translateX(4px); }
  .nb-sb-sub-link.nb-active { color: var(--nb-blue-700); background: var(--nb-blue-50); font-weight: 700; border: 1px solid rgba(37,99,235,0.16); }

  .nb-sb-divider { height: 1px; background: rgba(37,99,235,0.09); margin: 10px 6px; flex-shrink: 0; }

  /* settings card */
  .nb-sb-settings {
    border-radius: 14px;
    border: 1px solid rgba(37, 99, 235, 0.12);
    overflow: hidden;
    background: var(--nb-slate-50);
    flex-shrink: 0; /* never collapse the settings card */
    flex-grow: 0;
    margin-top: 2px;
  }
  .nb-sb-settings-title {
    font-family: var(--nb-font);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--nb-slate-400);
    padding: 12px 16px 6px;
  }
  .nb-sb-settings-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    border-top: 1px solid rgba(37, 99, 235, 0.08);
  }
  .nb-sb-row-label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--nb-font);
    font-size: 13px;
    font-weight: 600;
    color: var(--nb-slate-600);
  }
  .nb-sb-row-label svg { color: var(--nb-blue-500); }
  .nb-toggle-pill {
    display: flex;
    background: rgba(37, 99, 235, 0.07);
    border: 1px solid rgba(37, 99, 235, 0.16);
    border-radius: 999px;
    padding: 3px;
    gap: 3px;
  }
  .nb-toggle-pill button {
    padding: 4px 12px;
    border-radius: 999px;
    border: none;
    background: transparent;
    font-family: var(--nb-font);
    font-size: 11px;
    font-weight: 700;
    color: var(--nb-slate-500);
    cursor: pointer;
    transition: all var(--nb-t-fast);
  }
  .nb-toggle-pill button.nb-active {
    background: var(--nb-blue-600);
    color: #fff;
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
  }

  /* sidebar footer — always pinned, never clipped */
  .nb-sb-footer {
    flex-shrink: 0;
    flex-grow: 0;
    height: auto;
    padding: 14px 14px calc(14px + env(safe-area-inset-bottom, 0px));
    border-top: 1px solid rgba(37, 99, 235, 0.1);
    background: #fff;
    box-shadow: 0 -6px 20px rgba(37, 99, 235, 0.05);
    display: flex;
    flex-direction: column;
    gap: 9px;
    position: relative;
    z-index: 1;
  }
  .nb-sb-footer-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--nb-font);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--nb-slate-400);
  }
  .nb-sb-footer-label::before,
  .nb-sb-footer-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(37, 99, 235, 0.1);
  }
  .nb-sb-btn-row { display: flex; gap: 9px; }
  .nb-sb-btn {
    flex: 1;
    padding: 12px 10px;
    border-radius: 12px;
    font-family: var(--nb-font);
    font-size: 13.5px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: all var(--nb-t-fast);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    white-space: nowrap;
  }
  .nb-sb-btn svg { flex-shrink: 0; }
  .nb-sb-btn-ghost {
    background: transparent;
    border: 1.5px solid var(--nb-blue-500);
    color: var(--nb-blue-600);
  }
  .nb-sb-btn-ghost:hover { background: var(--nb-blue-50); border-color: var(--nb-blue-600); transform: translateY(-2px); }
  .nb-sb-btn-fill {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    border: 1.5px solid transparent;
    color: #fff;
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.32);
  }
  .nb-sb-btn-fill:hover { background: linear-gradient(135deg, #1d4ed8, #2563eb); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(37, 99, 235, 0.42); }
  .nb-sb-btn:active { transform: translateY(0) scale(0.97); }

  body.nb-locked { overflow: hidden; }

  /* ── DARK MODE ── */
  .dark .nb-bar {
    background: rgba(0, 0, 0, 0.82);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }
  .dark .nb-wrap.nb-scrolled .nb-bar {
    background: rgba(0, 0, 0, 0.97);
    border-bottom-color: rgba(255, 255, 255, 0.1);
  }
  .dark .nb-logo-name { color: #fff; }
  .dark .nb-logo-tag { color: var(--nb-blue-400); }
  .dark .nb-nav-link { color: var(--nb-slate-300); }
  .dark .nb-nav-link:hover, .dark .nb-nav-link.nb-active {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }
  .dark .nb-nav-link:hover svg, .dark .nb-nav-link.nb-active svg { color: var(--nb-blue-400); }
  .dark .nb-dropdown, .dark .nb-user-drop {
    background: rgba(0, 0, 0, 0.95);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }
  .dark .nb-drop-item { color: var(--nb-slate-300); }
  .dark .nb-drop-item:hover, .dark .nb-drop-item.nb-active {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
  }
  .dark .nb-icon-btn { color: var(--nb-slate-300); }
  .dark .nb-icon-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.1);
  }
  .dark .nb-hamburger {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
  }
  .dark .nb-hamburger .nb-hbar { background: #fff; }
  .dark .nb-hamburger:hover { background: var(--nb-blue-600); border-color: var(--nb-blue-600); }
  .dark .nb-overlay { background: rgba(0, 0, 0, 0.6); }
  .dark .nb-sidebar { background: #000; border-left-color: rgba(255, 255, 255, 0.1); }
  .dark .nb-sb-head { border-bottom-color: rgba(255, 255, 255, 0.1); }
  .dark .nb-sb-close {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.1);
  }
  .dark .nb-sb-close:hover { background: var(--nb-blue-600); border-color: var(--nb-blue-600); }
  .dark .nb-sb-link { color: var(--nb-slate-300); }
  .dark .nb-sb-link-right { color: var(--nb-slate-500); }
  .dark .nb-sb-link:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    border-color: transparent;
  }
  .dark .nb-sb-link.nb-active { background: var(--nb-blue-600); color: #fff; }
  .dark .nb-sb-sub-link { color: var(--nb-slate-400); }
  .dark .nb-sb-sub-link:hover { background: rgba(255, 255, 255, 0.08); color: #fff; }
  .dark .nb-sb-sub-link.nb-active {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.05);
  }
  .dark .nb-sb-divider { background: rgba(255, 255, 255, 0.05); }
  .dark .nb-sb-settings {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(255, 255, 255, 0.1);
  }
  .dark .nb-sb-settings-title { color: var(--nb-slate-500); }
  .dark .nb-sb-settings-row { border-top-color: rgba(255, 255, 255, 0.05); }
  .dark .nb-sb-row-label { color: var(--nb-slate-300); }
  .dark .nb-toggle-pill {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
  }
  .dark .nb-toggle-pill button { color: var(--nb-slate-400); }
  .dark .nb-toggle-pill button.nb-active { background: var(--nb-blue-600); color: #fff; }
  .dark .nb-sb-footer { background: #000; border-top-color: rgba(255, 255, 255, 0.1); }
  .dark .nb-sb-footer-label { color: var(--nb-slate-500); }
  .dark .nb-sb-footer-label::before, .dark .nb-sb-footer-label::after { background: rgba(255, 255, 255, 0.1); }
  .dark .nb-sb-btn-ghost { border-color: rgba(255, 255, 255, 0.2); color: var(--nb-slate-300); }
  .dark .nb-sb-btn-ghost:hover { background: rgba(255, 255, 255, 0.08); color: #fff; border-color: rgba(255, 255, 255, 0.3); }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .nb-nav { display: none; }
    .nb-desktop-only { display: none !important; }
    .nb-hamburger { display: flex; }
    .nb-wrap { width: calc(100% - 32px); }
    /* FIX: tablet sidebar — use top+bottom anchoring, NOT height */
    .nb-sidebar {
      width: 360px;
      top: 0;
      right: 0;
      bottom: 0;         /* anchors to real visible bottom */
      left: auto;
      /* do NOT set height here — top+bottom handles it */
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    /* FIX: body scrolls, footer stays put */
    .nb-sb-body {
      flex: 1 1 0;
      min-height: 0;
      overflow-y: auto;
    }
    /* FIX: footer always visible — no shrink, no height constraint */
    .nb-sb-footer {
      flex-shrink: 0;
      flex-grow: 0;
      height: auto;
      padding: 16px 16px calc(16px + env(safe-area-inset-bottom, 0px));
      gap: 10px;
    }
    .nb-sb-btn-row { gap: 10px; }
    .nb-sb-btn { padding: 13px 10px; font-size: 14px; border-radius: 13px; }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    /* Re-declare ALL flex rules — cascade alone is not reliable on tablet browsers */
    .nb-sidebar {
      width: 380px;
      max-width: calc(100vw - 48px);
      position: fixed;
      top: 0; right: 0; bottom: 0; left: auto;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .nb-sb-head {
      flex-shrink: 0;
      flex-grow: 0;
      padding: 26px 22px 20px;
    }
    /* Body: must scroll — min-height:0 is the critical property */
    .nb-sb-body {
      flex: 1 1 0;
      min-height: 0;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 16px 18px 20px;
      -webkit-overflow-scrolling: touch;
    }
    /* Footer: never shrink, never hidden — re-stated explicitly */
    .nb-sb-footer {
      flex-shrink: 0;
      flex-grow: 0;
      height: auto;
      overflow: visible;
      padding: 18px 18px calc(18px + env(safe-area-inset-bottom, 0px));
      gap: 12px;
      position: relative;
      z-index: 2;
    }
    .nb-sb-btn { padding: 14px 10px; font-size: 14px; }
    .nb-sb-settings-row { padding: 12px 18px; }
  }

  @media (min-width: 1025px) {
    .nb-hamburger { display: none !important; }
  }

  @media (max-width: 640px) {
    .nb-wrap { top: 10px; width: calc(100% - 20px); }
    .nb-bar { height: 58px; padding: 0 8px 0 12px; gap: 8px; }
    .nb-wrap.nb-scrolled .nb-bar { height: 54px; }
    .nb-logo-icon { width: 36px; height: 36px; border-radius: 10px; }
    .nb-logo-name { font-size: 16px; }
    .nb-logo-tag { font-size: 9px; }
    .nb-icon-btn { width: 36px; height: 36px; }
    .nb-hamburger { width: 38px; height: 38px; border-radius: 10px; }
    /* Mobile sidebar — full-width minus handle strip */
    .nb-sidebar { width: calc(100vw - 40px); }
    .nb-sb-footer {
      padding: 13px 13px calc(13px + env(safe-area-inset-bottom, 0px));
      gap: 9px;
    }
    .nb-sb-btn { padding: 12px 8px; font-size: 13px; border-radius: 11px; }
    .nb-cta { padding: 8px 14px; font-size: 13px; display: none; }
  }

  @media (max-width: 380px) {
    .nb-wrap { width: calc(100% - 14px); }
    .nb-bar { padding: 0 6px 0 10px; }
    .nb-logo-icon { width: 32px; height: 32px; border-radius: 8px; }
    .nb-sb-btn-row { flex-direction: column; gap: 8px; }
    .nb-sb-btn { width: 100%; padding: 13px; }
  }
`;

/* ================================================================
   SVG ICON HELPERS
================================================================ */
const Icons = {
  // Pressure washer / spray nozzle — custom path for logo
  PressureWash: (size = 22) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 6h2l3 4H4z"/>
      <path d="M9 10l5 2-1 4-4-6z"/>
      <path d="M14 12l4-2"/>
      <path d="M18 10l2-3M19 13l2 1M17 15l1 3"/>
      <circle cx="5" cy="6" r="1" fill="currentColor" stroke="none"/>
    </svg>`,

  // Water drops spray — used in logo mark
  WaterSpray: (size = 22) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2C8 7 6 10 6 13a6 6 0 0 0 12 0c0-3-2-6-6-11z"/>
      <path d="M6 14c-1.5 0-3-.8-3-2.5S4.5 8 6 8"/>
      <path d="M18 14c1.5 0 3-.8 3-2.5S19.5 8 18 8"/>
    </svg>`,

  Home: (size = 15) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>`,

  Home1: (size = 14) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>`,

  Home2: (size = 14) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="9" width="18" height="13" rx="2"/>
      <path d="M9 22V12h6v10"/>
      <path d="M1 9l11-7 11 7"/>
    </svg>`,

  About: (size = 15) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>`,

  Services: (size = 15) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>`,

  Gallery: (size = 15) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21,15 16,10 5,21"/>
    </svg>`,

  Pricing: (size = 15) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>`,

  Contact: (size = 15) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.58 4.5 2 2 0 0 1 3.55 2.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.18-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>`,

  Dashboard: (size = 15) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>`,

  Admin: (size = 14) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>`,

  User: (size = 14) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>`,

  UserCircle: (size = 18) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>`,

  LogIn: (size = 14) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
      <polyline points="10 17 15 12 10 7"/>
      <line x1="15" y1="12" x2="3" y2="12"/>
    </svg>`,

  SignUp: (size = 14) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <line x1="19" y1="8" x2="19" y2="14"/>
      <line x1="22" y1="11" x2="16" y2="11"/>
    </svg>`,

  Moon: (size = 17) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>`,

  Sun: (size = 17) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>`,

  Arrows: (size = 17) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2"  stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 16V4m0 0L3 8m4-4 4 4"/>
      <path d="M17 8v12m0 0 4-4m-4 4-4-4"/>
    </svg>`,

  ChevronDown: (size = 11) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>`,

  ChevronRight: (size = 13) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>`,

  Globe: (size = 14) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>`,

  HalfCircle: (size = 14) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2a10 10 0 0 1 0 20"/>
      <path d="M12 2a10 10 0 0 0 0 20"/>
      <line x1="12" y1="2" x2="12" y2="22"/>
    </svg>`,

  X: (size = 16) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>`,

  Droplets: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
         stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>
    </svg>`,
};

/* ================================================================
   NAV LINKS CONFIG
================================================================ */
const NAV_LINKS = [
  {
    label: 'Home',
    icon: 'Home',
    href: '#',
    children: [
      { label: 'Home 1', icon: 'Home1', href: 'index.html' },
      { label: 'Home 2', icon: 'Home2', href: 'home2.html' },
    ],
  },
  { label: 'About',    icon: 'About',    href: 'about.html' },
  { label: 'Services', icon: 'Services', href: 'service.html' },
  { label: 'Gallery',  icon: 'Gallery',  href: 'gallery.html' },
  { label: 'Pricing',  icon: 'Pricing',  href: 'price.html' },
  { label: 'Contact',  icon: 'Contact',  href: 'contact.html' },
  {
    label: 'Dashboard',
    icon: 'Dashboard',
    href: '#',
    children: [
      { label: 'Admin', icon: 'Admin', href: 'admin.html' },
      { label: 'User',  icon: 'User',  href: 'user.html'  },
    ],
  },
];

/* ================================================================
   STATE
================================================================ */
let _isDark      = false;
let _isRtl       = false;
let _sidebarOpen = false;
let _activeLink  = '';
let _mounted     = false;

/* ================================================================
   CSS INJECT
================================================================ */
function _injectCSS() {
  if (document.getElementById('nb-styles')) return;
  const style = document.createElement('style');
  style.id = 'nb-styles';
  style.textContent = NAVBAR_CSS;
  document.head.appendChild(style);

  // Google Fonts
  if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
    document.head.appendChild(link);
  }
}

/* ================================================================
   HTML BUILDERS
================================================================ */
function _icon(name, size) {
  return Icons[name] ? Icons[name](size) : '';
}

function _buildDesktopLinks() {
  return NAV_LINKS.map(link => {
    const isActive = _activeLink === link.label.toLowerCase();
    if (link.children) {
      const items = link.children.map(c =>
        `<a href="${c.href}" class="nb-drop-item${_activeLink === c.label.toLowerCase() ? ' nb-active' : ''}" onclick="NavBar.closeSidebar()">
          ${_icon(c.icon, 14)}
          <span>${c.label}</span>
        </a>`
      ).join('');
      return `
        <div class="nb-has-drop">
          <button class="nb-nav-link${isActive ? ' nb-active' : ''}" onclick="NavBar._toggleDrop(event, this)">
            ${_icon(link.icon, 15)}
            <span>${link.label}</span>
            <span class="nb-chevron">${_icon('ChevronDown', 11)}</span>
          </button>
          <div class="nb-dropdown">${items}</div>
        </div>`;
    }
    return `<a href="${link.href}" class="nb-nav-link${isActive ? ' nb-active' : ''}">
      ${_icon(link.icon, 15)}
      <span>${link.label}</span>
    </a>`;
  }).join('');
}

function _buildSidebarLinks() {
  return NAV_LINKS.map((link, idx) => {
    const isActive = _activeLink === link.label.toLowerCase();
    if (link.children) {
      const sub = link.children.map(c =>
        `<a href="${c.href}" class="nb-sb-sub-link${_activeLink === c.label.toLowerCase() ? ' nb-active' : ''}" onclick="NavBar.closeSidebar()">
          ${_icon(c.icon, 14)}
          <span>${c.label}</span>
        </a>`
      ).join('');
      return `
        <button class="nb-sb-link${isActive ? ' nb-active' : ''}" onclick="NavBar._toggleSub('nb-sub-${idx}', this)">
          <span class="nb-sb-link-left">${_icon(link.icon, 16)}<span>${link.label}</span></span>
          <span class="nb-sb-link-right">${_icon('ChevronDown', 13)}</span>
        </button>
        <div class="nb-sb-sub" id="nb-sub-${idx}">
          <div class="nb-sb-sub-inner">${sub}</div>
        </div>`;
    }
    return `<a href="${link.href}" class="nb-sb-link${isActive ? ' nb-active' : ''}" onclick="NavBar.closeSidebar()">
      <span class="nb-sb-link-left">${_icon(link.icon, 16)}<span>${link.label}</span></span>
      <span class="nb-sb-link-right">${_icon('ChevronRight', 13)}</span>
    </a>`;
  }).join('');
}

function _buildHTML() {
  return `
    <div class="nb-wrap nb-font" id="nb-wrap">
      <div class="nb-bar" id="nb-bar">

        <!-- LOGO -->
        <a href="index.html" class="nb-logo">
          <div class="nb-logo-icon">
            ${Icons.Droplets(22)}
          </div>
          <div class="nb-logo-text">
            <span class="nb-logo-name">ProWash</span>
            <span class="nb-logo-tag">Pressure & Soft Wash</span>
          </div>
        </a>

        <!-- DESKTOP NAV -->
        <nav class="nb-nav">${_buildDesktopLinks()}</nav>

        <!-- RIGHT SIDE -->
        <div class="nb-right">

          <!-- Theme toggle -->
          <button class="nb-icon-btn nb-desktop-only" id="nb-theme-btn"
                  onclick="NavBar.toggleTheme()" aria-label="Toggle theme" title="Toggle theme">
            <span id="nb-theme-icon">${Icons.Moon(17)}</span>
          </button>

          <!-- Direction toggle (Desktop) -->
          <div class="nb-toggle-pill nb-desktop-only" id="nb-desk-dir-pill">
            <button id="nb-desk-ltr" class="nb-active" onclick="NavBar.setDir('ltr')">LTR</button>
            <button id="nb-desk-rtl" onclick="NavBar.setDir('rtl')">RTL</button>
          </div>

          <!-- User dropdown (desktop) -->
          <div class="nb-user-wrap nb-desktop-only" id="nb-user-wrap">
            <button class="nb-icon-btn" onclick="NavBar._toggleUserDrop()" aria-label="Account">
              ${Icons.UserCircle(18)}
            </button>
            <div class="nb-user-drop" id="nb-user-drop">
              <a href="login.html"  class="nb-drop-item">${Icons.LogIn(14)}<span>Log In</span></a>
              <div class="nb-divider"></div>
              <a href="signup.html" class="nb-drop-item">${Icons.SignUp(14)}<span>Sign Up</span></a>
            </div>
          </div>


          <!-- Hamburger -->
          <button class="nb-hamburger" id="nb-hamburger"
                  onclick="NavBar.openSidebar()" aria-label="Open menu">
            <span class="nb-hbar"></span>
            <span class="nb-hbar"></span>
            <span class="nb-hbar"></span>
          </button>
        </div>

      </div>
    </div>

    <!-- OVERLAY -->
    <div class="nb-overlay" id="nb-overlay" onclick="NavBar.closeSidebar()"></div>

    <!-- SIDEBAR -->
    <div class="nb-sidebar nb-font" id="nb-sidebar">

      <!-- Head -->
      <div class="nb-sb-head">
        <a href="index.html" class="nb-logo" onclick="NavBar.closeSidebar()">
          <div class="nb-logo-icon">
            ${Icons.Droplets(22)}
          </div>
          <div class="nb-logo-text">
            <span class="nb-logo-name">ProWash</span>
            <span class="nb-logo-tag">Pressure & Soft Wash</span>
          </div>
        </a>
        <button class="nb-sb-close" onclick="NavBar.closeSidebar()" aria-label="Close menu">
          ${Icons.X(16)}
        </button>
      </div>

      <!-- Scrollable body -->
      <div class="nb-sb-body">
        <span class="nb-sb-section">Navigation</span>
        ${_buildSidebarLinks()}

        <div class="nb-sb-divider"></div>

        <!-- Preferences -->
        <div class="nb-sb-settings">
          <div class="nb-sb-settings-title">Preferences</div>

          <div class="nb-sb-settings-row">
            <span class="nb-sb-row-label">
              ${Icons.HalfCircle(14)} Theme
            </span>
            <div class="nb-toggle-pill">
              <button id="nb-sb-light" class="nb-active" onclick="NavBar.setTheme('light')">
                ${Icons.Sun(13)}
              </button>
              <button id="nb-sb-dark" onclick="NavBar.setTheme('dark')">
                ${Icons.Moon(13)}
              </button>
            </div>
          </div>

          <div class="nb-sb-settings-row">
            <span class="nb-sb-row-label">
              ${Icons.Globe(14)} Direction
            </span>
            <div class="nb-toggle-pill">
              <button id="nb-sb-ltr" class="nb-active" onclick="NavBar.setDir('ltr')">LTR</button>
              <button id="nb-sb-rtl" onclick="NavBar.setDir('rtl')">RTL</button>
            </div>
          </div>
        </div>
<!-- Footer -->
      <div class="nb-sb-footer">
        <div class="nb-sb-footer-label">Account</div>
        <div class="nb-sb-btn-row">
          <a href="login.html"  class="nb-sb-btn nb-sb-btn-ghost" onclick="NavBar.closeSidebar()">
            ${Icons.LogIn(14)}<span>Log In</span>
          </a>
          <a href="signup.html" class="nb-sb-btn nb-sb-btn-fill" onclick="NavBar.closeSidebar()">
            ${Icons.SignUp(14)}<span>Sign Up</span>
          </a>
        </div>
      </div>
      </div><!-- /.nb-sb-body -->

    </div><!-- /.nb-sidebar -->
  `;
}

/* ================================================================
   SIDEBAR
================================================================ */
function openSidebar() {
  _sidebarOpen = true;
  document.getElementById('nb-sidebar')?.classList.add('nb-open');
  document.getElementById('nb-overlay')?.classList.add('nb-open');
  document.getElementById('nb-hamburger')?.classList.add('nb-open');
  document.body.classList.add('nb-locked');
}

function closeSidebar() {
  _sidebarOpen = false;
  document.getElementById('nb-sidebar')?.classList.remove('nb-open');
  document.getElementById('nb-overlay')?.classList.remove('nb-open');
  document.getElementById('nb-hamburger')?.classList.remove('nb-open');
  document.body.classList.remove('nb-locked');
}

/* ================================================================
   SUBMENU TOGGLE (sidebar)
================================================================ */
function _toggleSub(id, btn) {
  const sub = document.getElementById(id);
  if (!sub) return;
  document.querySelectorAll('.nb-sb-sub.nb-open').forEach(el => {
    if (el.id !== id) {
      el.classList.remove('nb-open');
      el.previousElementSibling?.classList.remove('nb-expanded');
    }
  });
  const opening = !sub.classList.contains('nb-open');
  sub.classList.toggle('nb-open', opening);
  btn.classList.toggle('nb-expanded', opening);
}

/* ================================================================
   DROPDOWN TOGGLE (desktop)
================================================================ */
function _toggleDrop(event, btn) {
  event.preventDefault();
  event.stopPropagation();
  const parent = btn.parentElement;
  const isOpen = parent.classList.contains('nb-open');
  document.querySelectorAll('.nb-has-drop.nb-open').forEach(d => {
    if (d !== parent) d.classList.remove('nb-open');
  });
  parent.classList.toggle('nb-open', !isOpen);
}

function _toggleUserDrop() {
  const wrap = document.getElementById('nb-user-wrap');
  if (!wrap) return;
  document.querySelectorAll('.nb-has-drop.nb-open').forEach(d => d.classList.remove('nb-open'));
  wrap.classList.toggle('nb-open');
}

/* ================================================================
   THEME
================================================================ */
function setTheme(mode) {
  _isDark = mode === 'dark';
  document.documentElement.classList.toggle('dark', _isDark);
  const icon = document.getElementById('nb-theme-icon');
  if (icon) icon.innerHTML = _isDark ? Icons.Sun(17) : Icons.Moon(17);
  document.getElementById('nb-sb-light')?.classList.toggle('nb-active', !_isDark);
  document.getElementById('nb-sb-dark')?.classList.toggle('nb-active', _isDark);
  try { localStorage.setItem('nb-theme', mode); } catch (_) {}
}

function toggleTheme() { setTheme(_isDark ? 'light' : 'dark'); }

/* ================================================================
   DIRECTION
================================================================ */
function setDir(dir) {
  _isRtl = dir === 'rtl';
  document.documentElement.setAttribute('dir', dir);
  
  // Update sidebar buttons
  document.getElementById('nb-sb-ltr')?.classList.toggle('nb-active', !_isRtl);
  document.getElementById('nb-sb-rtl')?.classList.toggle('nb-active', _isRtl);
  
  // Update desktop buttons
  document.getElementById('nb-desk-ltr')?.classList.toggle('nb-active', !_isRtl);
  document.getElementById('nb-desk-rtl')?.classList.toggle('nb-active', _isRtl);
  
  try { localStorage.setItem('nb-dir', dir); } catch (_) {}
}

function toggleDir() { setDir(_isRtl ? 'ltr' : 'rtl'); }

/* ================================================================
   SCROLL
================================================================ */
function _onScroll() {
  document.getElementById('nb-wrap')?.classList.toggle('nb-scrolled', window.scrollY > 40);
}

/* ================================================================
   KEYBOARD
================================================================ */
function _onKeyDown(e) {
  if (e.key === 'Escape') {
    if (_sidebarOpen) closeSidebar();
    document.querySelectorAll('.nb-has-drop.nb-open').forEach(d => d.classList.remove('nb-open'));
    document.getElementById('nb-user-wrap')?.classList.remove('nb-open');
  }
}

/* ================================================================
   CLICK OUTSIDE
================================================================ */
function _onClickOutside(e) {
  if (!e.target.closest('.nb-has-drop') && !e.target.closest('.nb-user-wrap')) {
    document.querySelectorAll('.nb-has-drop.nb-open').forEach(d => d.classList.remove('nb-open'));
    document.getElementById('nb-user-wrap')?.classList.remove('nb-open');
  }
}

/* ================================================================
   RESTORE PREFS
================================================================ */
function _restorePrefs() {
  let theme = 'light', dir = 'ltr';
  try {
    theme = localStorage.getItem('nb-theme') || 'light';
    dir   = localStorage.getItem('nb-dir')   || 'ltr';
  } catch (_) {}
  setTheme(theme);
  setDir(dir);
}

/* ================================================================
   DETECT ACTIVE
================================================================ */
function _detectActive() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  for (const link of NAV_LINKS) {
    if (link.href.split('/').pop() === currentPath) { _activeLink = link.label.toLowerCase(); return; }
    if (link.children) {
      for (const child of link.children) {
        if (child.href.split('/').pop() === currentPath) { _activeLink = child.label.toLowerCase(); return; }
      }
    }
  }
}

/* ================================================================
   INIT
================================================================ */
function init(options = {}) {
  if (_mounted) return;
  _mounted = true;

  if (options.active) {
    _activeLink = options.active.toLowerCase();
  } else {
    _detectActive();
  }

  _injectCSS();

  const root = document.getElementById('navbar-root');
  if (!root) {
    console.error('[NavBar] #navbar-root element not found!');
    return;
  }

  root.innerHTML = _buildHTML();
  _restorePrefs();

  window.addEventListener('scroll',   _onScroll,      { passive: true });
  document.addEventListener('keydown',     _onKeyDown);
  document.addEventListener('click',       _onClickOutside);

  _onScroll();
}

/* Auto-init */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => init());
} else {
  init();
}

/* ================================================================
   PUBLIC API
============================================================ */
const NavBar = {
  init,
  openSidebar,
  closeSidebar,
  toggleTheme,
  setTheme,
  toggleDir,
  setDir,
  _toggleSub,
  _toggleDrop,
  _toggleUserDrop,
};

if (typeof window !== 'undefined') window.NavBar = NavBar;