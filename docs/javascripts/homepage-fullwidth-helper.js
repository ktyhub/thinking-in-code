/**
 * Homepage Full-Width Helper Script
 * 
 * This script ensures full-width layout works across all browsers,
 * including those that don't support CSS :has() selector.
 * 
 * Features:
 * 1. Adds fallback class for browsers without :has() support
 * 2. Monitors and logs layout issues
 * 3. Provides runtime fixes for common problems
 */

(function() {
  'use strict';
  
  // Check if we're on a homepage
  function isHomepage() {
    return !!(document.querySelector('.homepage-hero') || document.querySelector('.plugin-showcase'));
  }
  
  // Only run on homepage
  if (!isHomepage()) {
    return;
  }
  
  console.log('[Homepage Fullwidth] Initializing...');
  
  // Feature detection for :has() support
  function supportsHasSelector() {
    try {
      document.querySelector(':has(*)');
      return true;
    } catch (e) {
      return false;
    }
  }
  
  // Add fallback class for browsers without :has() support
  if (!supportsHasSelector()) {
    console.log('[Homepage Fullwidth] Browser does not support :has(), adding fallback class');
    document.body.classList.add('homepage-fullwidth');
  } else {
    console.log('[Homepage Fullwidth] Browser supports :has()');
  }
  
  // Function to check and fix width constraints
  function checkAndFixWidthConstraints() {
    const viewportWidth = window.innerWidth;
    const bodyScrollWidth = document.body.scrollWidth;
    
    console.log('[Homepage Fullwidth] Viewport:', viewportWidth, 'Body scroll width:', bodyScrollWidth);
    
    // If body is wider than viewport, we have a horizontal scrollbar issue
    if (bodyScrollWidth > viewportWidth + 5) {  // 5px tolerance
      console.warn('[Homepage Fullwidth] Horizontal scroll detected. Body is wider than viewport.');
      
      // Find the culprit element
      let maxWidth = 0;
      let culpritElement = null;
      
      document.querySelectorAll('*').forEach(el => {
        const width = el.scrollWidth;
        if (width > maxWidth) {
          maxWidth = width;
          culpritElement = el;
        }
      });
      
      if (culpritElement) {
        console.warn('[Homepage Fullwidth] Widest element:', culpritElement, 'Width:', maxWidth);
      }
    }
    
    // Check Material for MkDocs elements
    const elementsToCheck = [
      '.md-container',
      '.md-main',
      '.md-main__inner',
      '.md-content',
      '.md-content__inner',
      '.md-grid'
    ];
    
    elementsToCheck.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) {
        const rect = element.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(element);
        
        // Check if element is constraining width
        if (rect.width < viewportWidth - 50) {  // 50px tolerance for margins
          console.warn(`[Homepage Fullwidth] ${selector} is not full width:`, {
            width: rect.width,
            viewport: viewportWidth,
            maxWidth: computedStyle.maxWidth,
            margin: computedStyle.marginLeft + ' ' + computedStyle.marginRight
          });
          
          // Apply runtime fix if needed
          if (computedStyle.maxWidth !== 'none' && !computedStyle.maxWidth.includes('100%')) {
            console.log(`[Homepage Fullwidth] Applying runtime fix to ${selector}`);
            element.style.maxWidth = 'none';
            element.style.width = '100%';
            element.style.marginLeft = '0';
            element.style.marginRight = '0';
          }
        }
      }
    });
  }
  
  // Run checks after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(checkAndFixWidthConstraints, 100);
    });
  } else {
    setTimeout(checkAndFixWidthConstraints, 100);
  }
  
  // Run checks after page is fully loaded (including CSS)
  window.addEventListener('load', function() {
    setTimeout(checkAndFixWidthConstraints, 200);
  });
  
  // Monitor for layout shifts
  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === document.body) {
          const bodyWidth = entry.contentRect.width;
          const viewportWidth = window.innerWidth;
          
          if (Math.abs(bodyWidth - viewportWidth) > 10) {
            console.warn('[Homepage Fullwidth] Body width changed:', bodyWidth, 'Viewport:', viewportWidth);
          }
        }
      }
    });
    
    resizeObserver.observe(document.body);
  }
  
  // Monitor viewport resize
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(checkAndFixWidthConstraints, 250);
  });
  
  console.log('[Homepage Fullwidth] Initialization complete');
  
})();
