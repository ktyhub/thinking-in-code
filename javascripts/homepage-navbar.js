/**
 * Homepage Navigation Bar Optimization
 * 
 * This script improves the navigation bar behavior on the homepage:
 * - Disables auto-hide on homepage for better accessibility
 * - Adds smooth scroll behavior
 * - Enhances navigation interactions
 */

(function() {
  'use strict';
  
  /**
   * Check if current page is the homepage
   */
  function isHomepage() {
    const path = window.location.pathname;
    return path === '/' || 
           path === '/index.html' || 
           path === '/zh/' || 
           path === '/zh/index.html' ||
           document.querySelector('.homepage-hero') !== null ||
           document.querySelector('.plugin-showcase') !== null;
  }
  
  /**
   * Disable header autohide on homepage
   */
  function disableHeaderAutohideOnHomepage() {
    if (!isHomepage()) {
      return null;
    }
    
    const header = document.querySelector('.md-header');
    if (header) {
      // Prevent the header from being hidden
      header.setAttribute('data-md-state', '');
      
      // Remove hidden state if it gets applied
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'data-md-state') {
            const state = header.getAttribute('data-md-state');
            if (state && state.includes('hidden')) {
              header.setAttribute('data-md-state', state.replace('hidden', '').trim());
            }
          }
        });
      });
      
      observer.observe(header, {
        attributes: true,
        attributeFilter: ['data-md-state']
      });
      
      // Return observer for cleanup
      return observer;
    }
    return null;
  }
  
  /**
   * Add smooth scroll behavior for anchor links
   */
  function addSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          
          // Calculate offset for fixed header
          const header = document.querySelector('.md-header');
          const tabs = document.querySelector('.md-tabs');
          const headerHeight = (header?.offsetHeight || 0) + (tabs?.offsetHeight || 0);
          
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });
  }
  
  /**
   * Add active state to navigation tabs based on scroll position
   */
  function updateActiveNavOnScroll() {
    if (!isHomepage()) {
      return;
    }
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.md-tabs__link');
    
    if (sections.length === 0 || navLinks.length === 0) {
      return;
    }
    
    // Cache section positions to avoid layout thrashing
    let sectionPositions = [];
    function cacheSectionPositions() {
      sectionPositions = Array.from(sections).map(section => ({
        id: section.getAttribute('id'),
        top: section.offsetTop,
        height: section.clientHeight
      }));
    }
    
    cacheSectionPositions();
    window.addEventListener('resize', cacheSectionPositions, { passive: true });
    
    // Throttle scroll handler
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          let current = '';
          const scrollPosition = window.pageYOffset;
          
          sectionPositions.forEach(section => {
            if (scrollPosition >= section.top - 100) {
              current = section.id;
            }
          });
          
          navLinks.forEach(link => {
            link.classList.remove('md-tabs__link--active');
            const href = link.getAttribute('href');
            if (href && href.includes('#' + current)) {
              link.classList.add('md-tabs__link--active');
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
  
  /**
   * Enhance header appearance on scroll
   */
  function enhanceHeaderOnScroll() {
    const header = document.querySelector('.md-header');
    if (!header) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          const currentScroll = window.pageYOffset;
          
          // Add shadow when scrolled
          if (currentScroll > 10) {
            header.setAttribute('data-md-state', 'shadow');
          } else {
            header.setAttribute('data-md-state', '');
          }
          
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
  
  /**
   * Initialize all enhancements
   */
  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }
    
    // Store observer for cleanup
    let observer = null;
    
    // Apply enhancements
    observer = disableHeaderAutohideOnHomepage();
    addSmoothScroll();
    updateActiveNavOnScroll();
    enhanceHeaderOnScroll();
    
    // Re-apply after page transitions (Material theme's instant loading)
    document.addEventListener('DOMContentSwitch', function() {
      // Cleanup previous observer
      if (observer) {
        observer.disconnect();
      }
      
      setTimeout(function() {
        observer = disableHeaderAutohideOnHomepage();
        addSmoothScroll();
        updateActiveNavOnScroll();
      }, 100);
    });
  }
  
  // Start initialization
  init();
})();
