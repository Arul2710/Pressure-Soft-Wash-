/**
 * footer.js — ProWash Premium Footer
 * ─────────────────────────────────────────────────────────────────
 * Modern blue-themed footer matching the navbar design.
 * Auto-injects into <div id="footer-root"></div> on all pages.
 * ─────────────────────────────────────────────────────────────────
 */

document.addEventListener("DOMContentLoaded", () => {
    const footerRoot = document.getElementById("footer-root");
    if (!footerRoot) {
        console.warn("[footer] #footer-root element not found on this page.");
        return;
    }

    const currentYear = new Date().getFullYear();

    footerRoot.innerHTML = `
    <footer class="bg-slate-50 dark:bg-black text-slate-600 dark:text-gray-300 py-16 font-['Plus_Jakarta_Sans',system-ui,sans-serif] border-t border-slate-200 dark:border-gray-800 relative overflow-hidden transition-colors duration-300">

      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-90"></div>
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div class="max-w-[1360px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 relative z-10">

        <div class="space-y-6">
          <a href="index.html" class="nb-logo inline-flex items-center gap-[11px] transition-opacity duration-200 hover:opacity-90">
            <div class="nb-logo-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                   stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
                <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>
              </svg>
            </div>
            <div class="nb-logo-text">
              <span class="nb-logo-name">ProWash</span>
              <span class="nb-logo-tag">Pressure & Soft Wash</span>
            </div>
          </a>
          <p class="text-sm leading-relaxed text-slate-600 dark:text-gray-400">
            Professional pressure washing services restoring the beauty of your property with eco-friendly solutions and advanced equipment. We make it shine like new.
          </p>
        </div>

        <div>
          <h4 class="text-slate-900 dark:text-white font-bold text-lg mb-6">Quick Links</h4>
          <ul class="space-y-3">
            <li>
              <a href="index.html" class="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-3 group text-sm font-medium w-fit">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0"></span>
                <span class="transform -translate-x-2 group-hover:translate-x-0 transition-transform">Home</span>
              </a>
            </li>
            <li>
              <a href="about.html" class="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-3 group text-sm font-medium w-fit">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0"></span>
                <span class="transform -translate-x-2 group-hover:translate-x-0 transition-transform">About</span>
              </a>
            </li>
            <li>
              <a href="service.html" class="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-3 group text-sm font-medium w-fit">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0"></span>
                <span class="transform -translate-x-2 group-hover:translate-x-0 transition-transform">Services</span>
              </a>
            </li>
            <li>
              <a href="gallery.html" class="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-3 group text-sm font-medium w-fit">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0"></span>
                <span class="transform -translate-x-2 group-hover:translate-x-0 transition-transform">Gallery</span>
              </a>
            </li>
            <li>
              <a href="price.html" class="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-3 group text-sm font-medium w-fit">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0"></span>
                <span class="transform -translate-x-2 group-hover:translate-x-0 transition-transform">Pricing</span>
              </a>
            </li>
            <li>
              <a href="contact.html" class="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-3 group text-sm font-medium w-fit">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0"></span>
                <span class="transform -translate-x-2 group-hover:translate-x-0 transition-transform">Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-slate-900 dark:text-white font-bold text-lg mb-6">Contact Us</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-gray-800 shadow-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <span class="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">123 Clean Street, Sparkle City<br/>New York, NY 10001</span>
            </li>
            <li class="flex items-center gap-3 group">
              <div class="w-8 h-8 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-gray-800 shadow-sm group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <a href="tel:+15551234567" class="text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-sm font-medium">+1 (555) 123-4567</a>
            </li>
            <li class="flex items-center gap-3 group">
              <div class="w-8 h-8 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-gray-800 shadow-sm group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <a href="mailto:info@prowash.com" class="text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-sm font-medium">info@prowash.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-slate-900 dark:text-white font-bold text-lg mb-6">Follow Us</h4>
          <p class="text-slate-600 dark:text-gray-400 text-sm mb-6">Stay connected for tips and special offers directly to your feed.</p>
          <div class="flex gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-600 hover:-translate-y-1 transition-all shadow-md hover:shadow-blue-600/20">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-600 hover:-translate-y-1 transition-all shadow-md hover:shadow-blue-600/20">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-600 hover:-translate-y-1 transition-all shadow-md hover:shadow-blue-600/20">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke-width="2" />
                <path stroke-width="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="2" stroke-linecap="round" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-600 hover:-translate-y-1 transition-all shadow-md hover:shadow-blue-600/20">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="max-w-[1360px] mx-auto px-6 mt-16 pt-8 border-t border-slate-200 dark:border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <p class="text-sm font-medium text-slate-500 dark:text-gray-500 text-center sm:text-left">
          &copy; ${currentYear} ProWash Premium Service. All rights reserved.
        </p>
        <div class="flex items-center gap-6 text-sm font-medium">
          <a href="#" class="text-slate-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#" class="text-slate-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
    `;
});