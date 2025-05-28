// 🎪 Fun and Interactive JavaScript for Thinking In Code
// Making the documentation site more engaging and delightful!

document.addEventListener('DOMContentLoaded', function() {
    
    // 🌟 Add sparkle cursor effect
    function createSparkle(e) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle-cursor';
        sparkle.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, #fff 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX - 5}px;
            top: ${e.clientY - 5}px;
            animation: sparkleAnimation 1s ease-out forwards;
        `;
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1000);
    }
    
    // Add sparkle animation CSS
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkleAnimation {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: scale(1.5) rotate(180deg);
                opacity: 0;
            }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .floating-emoji {
            position: fixed;
            font-size: 2em;
            pointer-events: none;
            z-index: 1000;
            animation: floatUp 3s ease-out forwards;
        }
        
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
        
        .shake {
            animation: shake 0.5s ease-in-out;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        .rainbow-text {
            background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: rainbow 3s ease infinite;
        }
        
        @keyframes rainbow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
    `;
    document.head.appendChild(sparkleStyle);
    
    // 🎯 Add sparkle effect on mouse move (throttled)
    let sparkleTimeout;
    document.addEventListener('mousemove', function(e) {
        if (!sparkleTimeout) {
            sparkleTimeout = setTimeout(() => {
                createSparkle(e);
                sparkleTimeout = null;
            }, 100);
        }
    });
    
    // 🎪 Add click effects to links
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            // Create floating emoji
            const emojis = ['🚀', '⚡', '🌟', '💫', '✨', '🎯', '🔥', '💎'];
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            
            const floatingEmoji = document.createElement('div');
            floatingEmoji.className = 'floating-emoji';
            floatingEmoji.textContent = randomEmoji;
            floatingEmoji.style.left = e.clientX + 'px';
            floatingEmoji.style.top = e.clientY + 'px';
            
            document.body.appendChild(floatingEmoji);
            
            setTimeout(() => {
                if (floatingEmoji.parentNode) {
                    floatingEmoji.parentNode.removeChild(floatingEmoji);
                }
            }, 3000);
            
            // Add shake effect to clicked element
            e.target.classList.add('shake');
            setTimeout(() => {
                e.target.classList.remove('shake');
            }, 500);
        }
    });
    
    // 🌈 Add rainbow effect to headings on hover
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        heading.addEventListener('mouseenter', function() {
            this.classList.add('rainbow-text');
        });
        
        heading.addEventListener('mouseleave', function() {
            setTimeout(() => {
                this.classList.remove('rainbow-text');
            }, 1000);
        });
    });
    
    // 🎵 Add sound effects (optional - can be enabled)
    function playSound(frequency, duration) {
        if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
            const audioContext = new (AudioContext || webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + duration);
        }
    }
    
    // 🎨 Add particle system for background
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            left: ${Math.random() * window.innerWidth}px;
            top: ${window.innerHeight + 10}px;
            animation: particleFloat ${5 + Math.random() * 5}s linear forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 10000);
    }
    
    // Add particle animation CSS
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes particleFloat {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);
    
    // Create particles periodically
    setInterval(createParticle, 2000);
    
    // 🎭 Add typing effect to the main title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Apply typing effect to main heading if it exists
    const mainHeading = document.querySelector('h1');
    if (mainHeading && mainHeading.textContent.includes('Welcome to Thinking In Code')) {
        const originalText = mainHeading.textContent;
        setTimeout(() => {
            typeWriter(mainHeading, originalText, 150);
        }, 500);
    }
    
    // 🎪 Add scroll-triggered animations
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('li, h2, h3');
        elements.forEach((el, index) => {
            if (isElementInViewport(el) && !el.classList.contains('animated')) {
                el.classList.add('animated');
                el.style.animationDelay = `${index * 0.1}s`;
            }
        });
    }
    
    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations(); // Initial check
    
    // 🎨 Add theme toggle enhancement
    const themeToggle = document.querySelector('[data-md-color-scheme]');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // Create a burst of stars
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const star = document.createElement('div');
                    star.textContent = '⭐';
                    star.style.cssText = `
                        position: fixed;
                        left: ${Math.random() * window.innerWidth}px;
                        top: ${Math.random() * window.innerHeight}px;
                        font-size: ${Math.random() * 20 + 10}px;
                        pointer-events: none;
                        z-index: 9999;
                        animation: starBurst 2s ease-out forwards;
                    `;
                    document.body.appendChild(star);
                    
                    setTimeout(() => {
                        if (star.parentNode) {
                            star.parentNode.removeChild(star);
                        }
                    }, 2000);
                }, i * 100);
            }
        });
    }
    
    // Add star burst animation
    const starStyle = document.createElement('style');
    starStyle.textContent = `
        @keyframes starBurst {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: scale(1.5) rotate(180deg);
                opacity: 1;
            }
            100% {
                transform: scale(0) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(starStyle);
    
    // 🎯 Add Easter egg - Konami code
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.length === konamiSequence.length && 
            konamiCode.every((code, index) => code === konamiSequence[index])) {
            
            // Easter egg activated!
            document.body.style.animation = 'rainbow 1s ease infinite';
            
            // Create explosion of emojis
            const celebrationEmojis = ['🎉', '🎊', '🥳', '🎈', '🎁', '🌟', '✨', '💫'];
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const emoji = document.createElement('div');
                    emoji.textContent = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
                    emoji.style.cssText = `
                        position: fixed;
                        left: ${Math.random() * window.innerWidth}px;
                        top: ${Math.random() * window.innerHeight}px;
                        font-size: ${Math.random() * 30 + 20}px;
                        pointer-events: none;
                        z-index: 9999;
                        animation: celebration 3s ease-out forwards;
                    `;
                    document.body.appendChild(emoji);
                    
                    setTimeout(() => {
                        if (emoji.parentNode) {
                            emoji.parentNode.removeChild(emoji);
                        }
                    }, 3000);
                }, i * 50);
            }
            
            // Reset after celebration
            setTimeout(() => {
                document.body.style.animation = '';
                konamiCode = [];
            }, 5000);
        }
    });
    
    // Add celebration animation
    const celebrationStyle = document.createElement('style');
    celebrationStyle.textContent = `
        @keyframes celebration {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: scale(1.5) rotate(180deg);
                opacity: 1;
            }
            100% {
                transform: scale(0.5) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(celebrationStyle);
    
    console.log('🎪 Fun interactions loaded! Try the Konami code: ↑↑↓↓←→←→BA');
});