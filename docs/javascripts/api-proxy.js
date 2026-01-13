/**
 * API 请求代理脚本
 * 拦截所有以 /api/ 开头的请求，并转发到目标服务器
 * 目标服务器: http://106.14.193.92:8000
 */

(function() {
  'use strict';

  const TARGET_SERVER = 'http://106.14.193.92:8000';
  const API_PREFIX = '/api/';

  /**
   * 检查 URL 是否是 API 请求
   * @param {string} url - 请求的 URL
   * @returns {boolean} 是否是 API 请求
   */
  function isApiRequest(url) {
    try {
      // 处理相对路径
      if (url.startsWith(API_PREFIX)) {
        return true;
      }
      // 处理绝对路径
      const urlObj = new URL(url, window.location.origin);
      return urlObj.pathname.startsWith(API_PREFIX);
    } catch (e) {
      return false;
    }
  }

  /**
   * 将 API 请求 URL 转换为目标服务器 URL
   * @param {string} url - 原始请求 URL
   * @returns {string} 转换后的 URL
   */
  function convertToTargetUrl(url) {
    try {
      // 处理相对路径
      if (url.startsWith(API_PREFIX)) {
        const targetUrl = TARGET_SERVER + url;
        console.log('[API Proxy] Converted relative URL:', url, '->', targetUrl);
        return targetUrl;
      }
      // 处理绝对路径
      const urlObj = new URL(url, window.location.origin);
      if (urlObj.pathname.startsWith(API_PREFIX)) {
        const targetUrl = TARGET_SERVER + urlObj.pathname + urlObj.search + urlObj.hash;
        console.log('[API Proxy] Converted absolute URL:', url, '->', targetUrl);
        return targetUrl;
      }
      return url;
    } catch (e) {
      console.error('[API Proxy] Error converting URL:', url, e);
      return url;
    }
  }

  // 保存原始的 fetch 方法
  const originalFetch = window.fetch;

  /**
   * 拦截 fetch 请求
   */
  window.fetch = function(resource, init) {
    let url = resource;
    
    // 处理 Request 对象
    if (resource instanceof Request) {
      url = resource.url;
    }

    // 如果是 API 请求，转换 URL
    if (isApiRequest(url)) {
      const newUrl = convertToTargetUrl(url);
      
      // 如果传入的是 Request 对象，需要创建新的 Request
      if (resource instanceof Request) {
        try {
          resource = new Request(newUrl, resource);
        } catch (e) {
          console.error('[API Proxy] Error creating new Request:', e);
        }
      } else {
        resource = newUrl;
      }
      
      console.log('[API Proxy] Intercepted fetch request:', url, '->', newUrl);
    }

    // 调用原始 fetch
    return originalFetch.call(this, resource, init);
  };

  // 保存原始的 XMLHttpRequest.prototype.open 方法
  const originalXhrOpen = XMLHttpRequest.prototype.open;

  /**
   * 拦截 XMLHttpRequest 请求
   */
  XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
    // 如果是 API 请求，转换 URL
    if (isApiRequest(url)) {
      const newUrl = convertToTargetUrl(url);
      console.log('[API Proxy] Intercepted XHR request:', url, '->', newUrl);
      url = newUrl;
    }

    // 调用原始 open 方法
    return originalXhrOpen.call(this, method, url, async, user, password);
  };

  console.log('[API Proxy] API proxy initialized. All requests to ' + API_PREFIX + ' will be forwarded to ' + TARGET_SERVER);
  console.log('[API Proxy] Note: CORS headers must be properly configured on the target server.');
})();
