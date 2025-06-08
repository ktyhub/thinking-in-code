// 🚀 COMPREHENSIVE UX ENHANCEMENTS - INTERACTIVE FEATURES

(function() {
    'use strict';

    // ===== UTILITY FUNCTIONS =====
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    // ===== READING PROGRESS INDICATOR =====
    function initReadingProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        document.body.appendChild(progressBar);

        const updateProgress = throttle(() => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = `${Math.min(progress, 100)}%`;
        }, 10);

        window.addEventListener('scroll', updateProgress);
        updateProgress();
    }

    // ===== SCROLL TO TOP BUTTON =====
    function initScrollToTop() {
        const scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.innerHTML = '↑';
        scrollBtn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollBtn);

        const toggleVisibility = throttle(() => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        }, 100);

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', toggleVisibility);
    }

    // ===== ENHANCED HEADER SCROLL BEHAVIOR =====
    function initHeaderScrollBehavior() {
        const header = document.querySelector('.md-header');
        if (!header) return;

        let lastScrollTop = 0;
        const handleScroll = throttle(() => {
            const scrollTop = window.pageYOffset;
            
            if (scrollTop > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Auto-hide header on scroll down, show on scroll up
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        }, 10);

        window.addEventListener('scroll', handleScroll);
    }

    // ===== SMART NAVIGATION ENHANCEMENTS =====
    function initSmartNavigation() {
        const navLinks = document.querySelectorAll('.md-nav__link');
        
        navLinks.forEach(link => {
            // Add ripple effect
            link.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Add CSS for ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ===== ENHANCED SEARCH FUNCTIONALITY =====
    function initEnhancedSearch() {
        const searchInput = document.querySelector('.md-search__input');
        if (!searchInput) return;

        // Add search suggestions
        const suggestions = document.createElement('div');
        suggestions.className = 'search-suggestions';
        suggestions.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(26, 26, 26, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            margin-top: 4px;
            max-height: 300px;
            overflow-y: auto;
            z-index: 1000;
            display: none;
            backdrop-filter: blur(10px);
        `;

        searchInput.parentElement.style.position = 'relative';
        searchInput.parentElement.appendChild(suggestions);

        // Enhanced search with debouncing
        const handleSearch = debounce((query) => {
            if (query.length < 2) {
                suggestions.style.display = 'none';
                return;
            }

            // Simulate search results (replace with actual search logic)
            const mockResults = [
                'Spring Boot Configuration',
                'Kubernetes Deployment',
                'Docker Containers',
                'Microservices Architecture',
                'Database Optimization'
            ].filter(item => 
                item.toLowerCase().includes(query.toLowerCase())
            );

            if (mockResults.length > 0) {
                suggestions.innerHTML = mockResults.map(result => 
                    `<div class="search-suggestion" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.1);">${result}</div>`
                ).join('');
                suggestions.style.display = 'block';
            } else {
                suggestions.style.display = 'none';
            }
        }, 300);

        searchInput.addEventListener('input', (e) => {
            handleSearch(e.target.value);
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.parentElement.contains(e.target)) {
                suggestions.style.display = 'none';
            }
        });
    }

    // ===== LAZY LOADING FOR IMAGES =====
    function initLazyLoading() {
        const images = document.querySelectorAll('img');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.setAttribute('data-loaded', 'true');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            img.setAttribute('data-loaded', 'false');
            imageObserver.observe(img);
        });
    }

    // ===== KEYBOARD SHORTCUTS =====
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K for search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.querySelector('.md-search__input');
                if (searchInput) {
                    searchInput.focus();
                }
            }

            // Escape to close search
            if (e.key === 'Escape') {
                const searchInput = document.querySelector('.md-search__input');
                if (searchInput && document.activeElement === searchInput) {
                    searchInput.blur();
                }
            }

            // Arrow keys for navigation
            if (e.key === 'ArrowUp' && e.altKey) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            if (e.key === 'ArrowDown' && e.altKey) {
                e.preventDefault();
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
        });
    }

    // ===== NOTIFICATION SYSTEM =====
    function showNotification(message, type = 'success', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Auto remove
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }

    // ===== THEME PERSISTENCE =====
    function initThemePersistence() {
        const themeToggle = document.querySelector('[data-md-color-scheme]');
        if (!themeToggle) return;

        // Load saved theme
        const savedTheme = localStorage.getItem('preferred-theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-md-color-scheme', savedTheme);
        }

        // Save theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-md-color-scheme') {
                    const theme = document.documentElement.getAttribute('data-md-color-scheme');
                    localStorage.setItem('preferred-theme', theme);
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-md-color-scheme']
        });
    }

    // ===== SMOOTH ANCHOR SCROLLING =====
    function initSmoothAnchors() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = document.querySelector('.md-header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ===== COPY CODE FUNCTIONALITY =====
    function initCodeCopy() {
        document.querySelectorAll('pre code').forEach(codeBlock => {
            const pre = codeBlock.parentElement;
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-code-btn';
            copyBtn.innerHTML = '📋';
            copyBtn.style.cssText = `
                position: absolute;
                top: 8px;
                right: 8px;
                background: rgba(255, 255, 255, 0.1);
                border: none;
                border-radius: 4px;
                padding: 4px 8px;
                color: white;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.3s ease;
                z-index: 1;
            `;

            pre.style.position = 'relative';
            pre.appendChild(copyBtn);

            pre.addEventListener('mouseenter', () => {
                copyBtn.style.opacity = '1';
            });

            pre.addEventListener('mouseleave', () => {
                copyBtn.style.opacity = '0';
            });

            copyBtn.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(codeBlock.textContent);
                    copyBtn.innerHTML = '✅';
                    showNotification('Code copied to clipboard!');
                    setTimeout(() => {
                        copyBtn.innerHTML = '📋';
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy code:', err);
                    showNotification('Failed to copy code', 'error');
                }
            });
        });
    }

    // ===== COLLAPSIBLE SECTIONS =====
    function initCollapsibleSections() {
        document.querySelectorAll('.md-nav__item--nested').forEach(item => {
            const link = item.querySelector('.md-nav__link');
            if (link) {
                link.addEventListener('click', (e) => {
                    if (item.querySelector('.md-nav')) {
                        e.preventDefault();
                        item.classList.toggle('expanded');
                    }
                });
            }
        });
    }

    // ===== PERFORMANCE MONITORING =====
    function initPerformanceMonitoring() {
        // Monitor page load performance
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            
            if (loadTime > 3000) {
                console.warn('Page load time is slow:', loadTime + 'ms');
            }
        });

        // Monitor scroll performance
        let scrollCount = 0;
        const scrollMonitor = throttle(() => {
            scrollCount++;
            if (scrollCount % 100 === 0) {
                console.log('Scroll performance check:', scrollCount, 'scroll events');
            }
        }, 100);

        window.addEventListener('scroll', scrollMonitor);
    }

    // ===== ACCESSIBILITY ENHANCEMENTS =====
    function initAccessibilityEnhancements() {
        // Add skip link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: #fff;
            padding: 8px;
            text-decoration: none;
            z-index: 1000;
            transition: top 0.3s ease;
        `;

        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });

        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add main content landmark
        const mainContent = document.querySelector('.md-content');
        if (mainContent) {
            mainContent.id = 'main-content';
            mainContent.setAttribute('role', 'main');
        }

        // Enhance focus indicators
        const style = document.createElement('style');
        style.textContent = `
            *:focus {
                outline: 2px solid #007acc !important;
                outline-offset: 2px !important;
            }
        `;
        document.head.appendChild(style);
    }

    // ===== INITIALIZATION =====
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        try {
            initReadingProgress();
            initScrollToTop();
            initHeaderScrollBehavior();
            initSmartNavigation();
            initEnhancedSearch();
            initLazyLoading();
            initKeyboardShortcuts();
            initThemePersistence();
            initSmoothAnchors();
            initCodeCopy();
            initCollapsibleSections();
            initPerformanceMonitoring();
            initAccessibilityEnhancements();

            // Show welcome notification
            setTimeout(() => {
                showNotification('Welcome to Thinking In Code! 🚀', 'success', 4000);
            }, 1000);

            console.log('🚀 UX Enhancements loaded successfully!');
        } catch (error) {
            console.error('Error initializing UX enhancements:', error);
        }
    }

    // Start initialization
    init();

    // Expose utilities globally for debugging
    window.UXEnhancements = {
        showNotification,
        debounce,
        throttle
    };

})();