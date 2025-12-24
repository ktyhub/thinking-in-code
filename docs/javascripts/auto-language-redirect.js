/**
 * Auto Language Redirect for Homepage
 * Detects user's browser language and redirects to appropriate language version
 * 
 * Priority:
 * 1. URL parameter ?lang=xx
 * 2. localStorage preference
 * 3. Browser language detection
 * 4. Default to English for unsupported languages
 */
(function() {
  'use strict';

  // Only execute on homepage
  const currentPath = window.location.pathname;
  // Match various homepage patterns
  const homepagePatterns = [
    /^\/$/,                           // Root /
    /^\/index\.html$/,                // /index.html
    /^\/thinking-in-code\/$/,         // /thinking-in-code/
    /^\/thinking-in-code\/index\.html$/ // /thinking-in-code/index.html
  ];
  
  const isHomepage = homepagePatterns.some(pattern => pattern.test(currentPath));
  
  if (!isHomepage) {
    return;
  }

  // Supported languages with their language codes and regional variants
  const supportedLanguages = {
    'zh': 'zh',
    'zh-CN': 'zh',
    'zh-cn': 'zh',
    'zh-TW': 'zh',
    'zh-tw': 'zh',
    'zh-HK': 'zh',
    'zh-hk': 'zh',
    'en': 'en',
    'en-US': 'en',
    'en-us': 'en',
    'en-GB': 'en',
    'en-gb': 'en',
    'ja': 'ja',
    'ja-JP': 'ja',
    'ja-jp': 'ja',
    'ko': 'ko',
    'ko-KR': 'ko',
    'ko-kr': 'ko',
    'fr': 'fr',
    'fr-FR': 'fr',
    'fr-fr': 'fr',
    'de': 'de',
    'de-DE': 'de',
    'de-de': 'de',
    'es': 'es',
    'es-ES': 'es',
    'es-es': 'es',
    'pt': 'pt',
    'pt-BR': 'pt',
    'pt-br': 'pt',
    'pt-PT': 'pt',
    'pt-pt': 'pt',
    'ru': 'ru',
    'ru-RU': 'ru',
    'ru-ru': 'ru',
    'ar': 'ar'
  };

  // Default language if detection fails or language not supported
  const defaultLanguage = 'en';

  /**
   * Get language from URL parameter
   * @returns {string|null} Language code or null
   */
  function getLangFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    return langParam ? langParam.toLowerCase() : null;
  }

  /**
   * Get saved language preference from localStorage
   * @returns {string|null} Language code or null
   */
  function getSavedLanguage() {
    try {
      return localStorage.getItem('preferred-language');
    } catch (e) {
      console.warn('localStorage not available:', e);
      return null;
    }
  }

  /**
   * Detect browser language
   * @returns {string} Language code
   */
  function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage || '';
    const langCode = browserLang.toLowerCase();
    
    // Try to match browser language or its base code
    if (supportedLanguages[langCode]) {
      return supportedLanguages[langCode];
    }
    
    // Try base language code (e.g., 'en' from 'en-US')
    const baseLang = langCode.split('-')[0];
    if (supportedLanguages[baseLang]) {
      return supportedLanguages[baseLang];
    }
    
    // Default language
    return defaultLanguage;
  }

  /**
   * Map language code to supported language
   * @param {string} lang Language code
   * @returns {string} Supported language code
   */
  function mapToSupportedLanguage(lang) {
    if (!lang) {
      return defaultLanguage;
    }
    
    const normalizedLang = lang.toLowerCase();
    return supportedLanguages[normalizedLang] || defaultLanguage;
  }

  /**
   * Save language preference to localStorage
   * @param {string} lang Language code
   */
  function saveLanguagePreference(lang) {
    try {
      localStorage.setItem('preferred-language', lang);
    } catch (e) {
      console.warn('Could not save language preference:', e);
    }
  }

  /**
   * Perform redirect to language-specific page
   * @param {string} targetLang Target language code
   */
  function redirectToLanguage(targetLang) {
    // Avoid infinite redirects - check if we're already being redirected
    const redirecting = sessionStorage.getItem('redirecting');
    if (redirecting === 'true') {
      console.log('Already redirecting, skipping to prevent infinite loop');
      return;
    }

    // Set redirect flag
    try {
      sessionStorage.setItem('redirecting', 'true');
    } catch (e) {
      console.warn('sessionStorage not available:', e);
    }

    // Save preference
    saveLanguagePreference(targetLang);

    // Build target URL - properly handle trailing slashes
    const origin = window.location.origin;
    const pathname = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '');
    const targetUrl = `${origin}${pathname}/${targetLang}/`;

    console.log(`Redirecting to ${targetLang} version: ${targetUrl}`);
    
    // Perform redirect
    window.location.href = targetUrl;
  }

  /**
   * Main function to determine and redirect to appropriate language
   */
  function autoRedirect() {
    // Check if we've already redirected in this session
    const hasRedirected = sessionStorage.getItem('has-redirected');
    if (hasRedirected === 'true') {
      console.log('Already redirected in this session, skipping');
      return;
    }

    // 1. Check URL parameter (highest priority)
    const urlLang = getLangFromURL();
    if (urlLang) {
      const targetLang = mapToSupportedLanguage(urlLang);
      console.log('Language from URL parameter:', urlLang, '-> mapped to:', targetLang);
      try {
        sessionStorage.setItem('has-redirected', 'true');
      } catch (e) {
        // Ignore
      }
      redirectToLanguage(targetLang);
      return;
    }

    // 2. Check localStorage preference
    const savedLang = getSavedLanguage();
    if (savedLang) {
      const targetLang = mapToSupportedLanguage(savedLang);
      console.log('Language from localStorage:', savedLang, '-> mapped to:', targetLang);
      try {
        sessionStorage.setItem('has-redirected', 'true');
      } catch (e) {
        // Ignore
      }
      redirectToLanguage(targetLang);
      return;
    }

    // 3. Detect browser language
    const browserLang = detectBrowserLanguage();
    console.log('Detected browser language:', browserLang);
    try {
      sessionStorage.setItem('has-redirected', 'true');
    } catch (e) {
      // Ignore
    }
    redirectToLanguage(browserLang);
  }

  // Execute auto-redirect after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoRedirect);
  } else {
    // DOM already loaded
    autoRedirect();
  }
})();
