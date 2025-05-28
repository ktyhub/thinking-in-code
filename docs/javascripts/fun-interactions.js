// 🎨 Sophisticated Interactive Features for Thinking In Code Documentation
// Elegant monochrome interactions with black, white, and gray

document.addEventListener('DOMContentLoaded', function() {
    
    // 🌟 Elegant Sparkle Cursor Effect
    function createSparkle(e) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle-cursor';
        
        // Monochrome sparkle colors
        const colors = ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        sparkle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, ${randomColor} 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX - 4}px;
            top: ${e.clientY - 4}px;
            animation: elegantSparkle 1.5s ease-out forwards;
            box-shadow: 0 0 10px ${randomColor};
        `;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1500);
    }
    
    // Add sparkle animation CSS
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes elegantSparkle {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 0.8;
                transform: scale(1.2) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0.5) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(sparkleStyle);
    
    // Throttled mouse move for performance
    let lastSparkleTime = 0;
    document.addEventListener('mousemove', function(e) {
        const now = Date.now();
        if (now - lastSparkleTime > 100) { // Throttle to every 100ms
            createSparkle(e);
            lastSparkleTime = now;
        }
    });
    
    // 🎯 Sophisticated Hover Effects for Navigation
    const navLinks = document.querySelectorAll('.md-nav__link, .md-tabs__link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.transform = 'translateX(8px)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // 📄 Elegant Content Animations
    function animateContentOnScroll() {
        const elements = document.querySelectorAll('h1, h2, h3, p, li, .md-typeset .admonition');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                    entry.target.style.opacity = '1';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        elements.forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }
    
    // Add fade-in animation CSS
    const fadeStyle = document.createElement('style');
    fadeStyle.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(fadeStyle);
    
    // Initialize scroll animations
    animateContentOnScroll();
    
    // 🎭 Theme Toggle Enhancement
    const themeToggle = document.querySelector('[data-md-color-scheme]');
    if (themeToggle) {
        const toggleButtons = document.querySelectorAll('[data-md-color-scheme] input');
        toggleButtons.forEach(button => {
            button.addEventListener('change', function() {
                // Create elegant transition effect
                const overlay = document.createElement('div');
                overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: ${this.value === 'slate' ? '#000000' : '#ffffff'};
                    opacity: 0;
                    z-index: 10000;
                    pointer-events: none;
                    transition: opacity 0.3s ease;
                `;
                
                document.body.appendChild(overlay);
                
                // Fade in overlay
                setTimeout(() => {
                    overlay.style.opacity = '0.3';
                }, 10);
                
                // Fade out overlay
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        if (overlay.parentNode) {
                            overlay.parentNode.removeChild(overlay);
                        }
                    }, 300);
                }, 200);
            });
        });
    }
    
    // 🌟 Floating Geometric Shapes
    function createFloatingShapes() {
        const shapes = ['circle', 'square', 'triangle'];
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        `;
        
        for (let i = 0; i < 5; i++) {
            const shape = document.createElement('div');
            const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
            const size = Math.random() * 20 + 10;
            const opacity = Math.random() * 0.1 + 0.05;
            
            shape.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${Math.random() > 0.5 ? '#000000' : '#cccccc'};
                opacity: ${opacity};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatShape ${Math.random() * 20 + 20}s linear infinite;
            `;
            
            if (shapeType === 'circle') {
                shape.style.borderRadius = '50%';
            } else if (shapeType === 'triangle') {
                shape.style.width = '0';
                shape.style.height = '0';
                shape.style.borderLeft = `${size/2}px solid transparent`;
                shape.style.borderRight = `${size/2}px solid transparent`;
                shape.style.borderBottom = `${size}px solid ${Math.random() > 0.5 ? '#000000' : '#cccccc'}`;
                shape.style.background = 'transparent';
            }
            
            container.appendChild(shape);
        }
        
        document.body.appendChild(container);
    }
    
    // Add floating animation CSS
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes floatShape {
            0% {
                transform: translateY(100vh) rotate(0deg);
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(floatStyle);
    
    // Initialize floating shapes
    createFloatingShapes();
    
    // 🎯 Interactive Code Blocks
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const pre = block.parentElement;
        
        // Add copy button
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: #ffffff;
            color: #000000;
            border: 1px solid #cccccc;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        pre.style.position = 'relative';
        pre.appendChild(copyButton);
        
        pre.addEventListener('mouseenter', () => {
            copyButton.style.opacity = '1';
        });
        
        pre.addEventListener('mouseleave', () => {
            copyButton.style.opacity = '0';
        });
        
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent).then(() => {
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            });
        });
    });
    
    // 🎨 Elegant Typography Effects
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        heading.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.letterSpacing = '2px';
            this.style.textShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        });
        
        heading.addEventListener('mouseleave', function() {
            this.style.letterSpacing = 'normal';
            this.style.textShadow = 'none';
        });
    });
    
    // 🌟 Smooth Scroll Enhancement
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 🎯 Performance Monitoring
    function addPerformanceIndicator() {
        const indicator = document.createElement('div');
        indicator.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            z-index: 1000;
            opacity: 0.7;
        `;
        
        function updateFPS() {
            const now = performance.now();
            const fps = Math.round(1000 / (now - (updateFPS.lastTime || now)));
            indicator.textContent = `FPS: ${fps}`;
            updateFPS.lastTime = now;
            requestAnimationFrame(updateFPS);
        }
        
        document.body.appendChild(indicator);
        updateFPS();
    }
    
    // Add performance indicator in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        addPerformanceIndicator();
    }
    
    // 🎪 Easter Egg: Konami Code
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            // Activate special monochrome mode
            const specialStyle = document.createElement('style');
            specialStyle.textContent = `
                * {
                    animation: monochromeGlitch 2s ease-in-out;
                }
                
                @keyframes monochromeGlitch {
                    0%, 100% { filter: none; }
                    25% { filter: invert(1); }
                    50% { filter: contrast(2); }
                    75% { filter: grayscale(1); }
                }
            `;
            document.head.appendChild(specialStyle);
            
            setTimeout(() => {
                if (specialStyle.parentNode) {
                    specialStyle.parentNode.removeChild(specialStyle);
                }
            }, 2000);
            
            konamiCode = [];
        }
    });
    
    console.log('🎨 Sophisticated monochrome interactions loaded!');
    console.log('💡 Try the Konami code: ↑↑↓↓←→←→BA');
});