/**
 * Full-Width Layout Debugger
 * 
 * This script helps diagnose and fix full-width layout issues on the homepage
 * by inspecting and logging all width-constraining elements in the DOM.
 */

(function() {
  'use strict';
  
  // Configuration constants
  const FULLWIDTH_TOLERANCE_PX = 20;  // Tolerance for full-width check
  const EXCESSIVE_PADDING_THRESHOLD = 100;  // Threshold for excessive padding
  const MIN_WIDTH_CONSTRAINT_PX = 100;  // Minimum width difference to report constraint
  
  // Only run on homepage
  const isHomepage = document.querySelector('.homepage-hero') || document.querySelector('.plugin-showcase');
  if (!isHomepage) {
    console.log('[Fullwidth Debug] Not on homepage, skipping debug');
    return;
  }
  
  console.log('[Fullwidth Debug] Homepage detected, starting diagnostic...');
  
  // Function to check if an element is constraining width
  function checkWidthConstraints(element) {
    const styles = window.getComputedStyle(element);
    const constraints = [];
    
    // Check max-width
    if (styles.maxWidth && styles.maxWidth !== 'none' && !styles.maxWidth.includes('100%')) {
      constraints.push(`max-width: ${styles.maxWidth}`);
    }
    
    // Check width
    if (styles.width && !styles.width.includes('100%') && !styles.width.includes('auto') && parseInt(styles.width) < window.innerWidth) {
      constraints.push(`width: ${styles.width}`);
    }
    
    // Check margins that might offset content
    if (styles.marginLeft && parseInt(styles.marginLeft) > 0) {
      constraints.push(`margin-left: ${styles.marginLeft}`);
    }
    if (styles.marginRight && parseInt(styles.marginRight) > 0) {
      constraints.push(`margin-right: ${styles.marginRight}`);
    }
    
    // Check padding
    if (styles.paddingLeft && parseInt(styles.paddingLeft) > EXCESSIVE_PADDING_THRESHOLD) {
      constraints.push(`padding-left: ${styles.paddingLeft}`);
    }
    if (styles.paddingRight && parseInt(styles.paddingRight) > EXCESSIVE_PADDING_THRESHOLD) {
      constraints.push(`padding-right: ${styles.paddingRight}`);
    }
    
    return constraints;
  }
  
  // Get all Material for MkDocs layout elements
  const layoutSelectors = [
    'html',
    'body',
    '.md-container',
    '.md-main',
    '.md-main__inner',
    '.md-content',
    '.md-content__inner',
    '.md-grid',
    '.md-typeset',
    '[data-md-component="container"]',
    '[data-md-component="content"]'
  ];
  
  const report = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    elements: {}
  };
  
  // Check each layout element
  layoutSelectors.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      const constraints = checkWidthConstraints(element);
      const rect = element.getBoundingClientRect();
      
      report.elements[selector] = {
        actualWidth: rect.width,
        computedWidth: window.getComputedStyle(element).width,
        constraints: constraints,
        isFullWidth: rect.width >= window.innerWidth - FULLWIDTH_TOLERANCE_PX
      };
      
      // Log if element is not full width
      if (!report.elements[selector].isFullWidth && constraints.length > 0) {
        console.warn(`[Fullwidth Debug] ${selector} is NOT full width:`, {
          actual: rect.width,
          viewport: window.innerWidth,
          constraints: constraints
        });
      }
    } else {
      console.log(`[Fullwidth Debug] ${selector} not found`);
    }
  });
  
  // Check homepage sections
  const homepageSections = document.querySelectorAll('.homepage-hero, section');
  homepageSections.forEach((section, index) => {
    const className = section.className || `section-${index}`;
    const constraints = checkWidthConstraints(section);
    const rect = section.getBoundingClientRect();
    
    if (rect.width < window.innerWidth - FULLWIDTH_TOLERANCE_PX) {
      console.warn(`[Fullwidth Debug] Section "${className}" is NOT full width:`, {
        actual: rect.width,
        viewport: window.innerWidth,
        constraints: constraints
      });
    }
  });
  
  // Log summary
  console.log('[Fullwidth Debug] Diagnostic Report:', report);
  
  // Check for any element with max-width in px that's less than viewport
  const allElements = document.querySelectorAll('*');
  const problematicElements = [];
  
  allElements.forEach(el => {
    const styles = window.getComputedStyle(el);
    const maxWidth = styles.maxWidth;
    
    if (maxWidth && maxWidth !== 'none' && maxWidth.endsWith('px')) {
      const maxWidthValue = parseInt(maxWidth);
      if (maxWidthValue > 0 && maxWidthValue < window.innerWidth - MIN_WIDTH_CONSTRAINT_PX) {
        const rect = el.getBoundingClientRect();
        // Only report if element is actually affecting layout (has significant width)
        if (rect.width > window.innerWidth * 0.5) {
          problematicElements.push({
            element: el,
            tagName: el.tagName,
            className: el.className,
            id: el.id,
            maxWidth: maxWidth,
            actualWidth: rect.width,
            selector: getSelector(el)
          });
        }
      }
    }
  });
  
  if (problematicElements.length > 0) {
    console.warn('[Fullwidth Debug] Found elements with constraining max-width:', problematicElements);
    
    // Provide fix suggestions
    console.log('[Fullwidth Debug] Suggested CSS fixes:');
    problematicElements.forEach(item => {
      console.log(`${item.selector} { max-width: none !important; width: 100% !important; }`);
    });
  }
  
  // Helper function to get CSS selector for an element
  function getSelector(element) {
    if (element.id) {
      return `#${element.id}`;
    }
    if (element.className && typeof element.className === 'string') {
      const classes = element.className.trim().split(/\s+/).join('.');
      return `.${classes}`;
    }
    return element.tagName.toLowerCase();
  }
  
  // Add visual indicator for full-width verification
  function addFullWidthIndicator() {
    const indicator = document.createElement('div');
    indicator.id = 'fullwidth-indicator';
    indicator.style.cssText = `
      position: fixed;
      bottom: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 10px 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 12px;
      z-index: 10000;
      pointer-events: none;
    `;
    
    function updateIndicator() {
      const isFullWidth = document.body.scrollWidth <= window.innerWidth;
      indicator.textContent = `Viewport: ${window.innerWidth}px | Body: ${document.body.scrollWidth}px | ${isFullWidth ? '✓ Full Width' : '✗ Not Full Width'}`;
      indicator.style.background = isFullWidth ? 'rgba(0, 128, 0, 0.8)' : 'rgba(255, 0, 0, 0.8)';
    }
    
    document.body.appendChild(indicator);
    updateIndicator();
    
    // Update on resize
    window.addEventListener('resize', updateIndicator);
  }
  
  // Add indicator after page load
  if (document.readyState === 'complete') {
    addFullWidthIndicator();
  } else {
    window.addEventListener('load', addFullWidthIndicator);
  }
  
  console.log('[Fullwidth Debug] Diagnostic complete. Check console for details.');
})();
