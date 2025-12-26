/**
 * Enhanced Language Switcher with Multi-language Support
 * Supports navigation between different language versions
 */
document.addEventListener('DOMContentLoaded', function() {
  // Configuration
  const DEFAULT_LANGUAGE = 'zh';
  
  // Supported languages with display names and icons
  // Only include languages that have actual content
  const languages = {
    'zh': { name: '中文', icon: '🇨🇳', fullName: 'Chinese (Simplified)' },
    'en': { name: 'English', icon: '🇺🇸', fullName: 'English' }
  };
  
  // Future languages (commented out until content is available)
  // 'ja': { name: '日本語', icon: '🇯🇵', fullName: 'Japanese' },
  // 'ko': { name: '한국어', icon: '🇰🇷', fullName: 'Korean' },
  // 'fr': { name: 'Français', icon: '🇫🇷', fullName: 'French' },
  // 'de': { name: 'Deutsch', icon: '🇩🇪', fullName: 'German' },
  // 'es': { name: 'Español', icon: '🇪🇸', fullName: 'Spanish' },
  // 'pt': { name: 'Português', icon: '🇵🇹', fullName: 'Portuguese' },
  // 'ru': { name: 'Русский', icon: '🇷🇺', fullName: 'Russian' },
  // 'ar': { name: 'العربية', icon: '🇸🇦', fullName: 'Arabic' }

  // Detect current language from URL path
  function getCurrentLanguage() {
    const path = window.location.pathname;
    const match = path.match(/^\/([a-z]{2})\//);
    return match ? match[1] : DEFAULT_LANGUAGE;
  }

  // Save language preference to localStorage
  function saveLanguagePreference(lang) {
    try {
      localStorage.setItem('preferred-language', lang);
    } catch (e) {
      console.warn('Could not save language preference:', e);
    }
  }

  // Navigate to a different language version
  function switchToLanguage(targetLang) {
    if (targetLang === getCurrentLanguage()) {
      return; // Already on this language
    }

    // Save preference
    saveLanguagePreference(targetLang);

    // Build target URL
    const currentPath = window.location.pathname;
    const currentLang = getCurrentLanguage();
    
    // Replace language in path or add it
    let newPath;
    if (currentLang && currentPath.startsWith(`/${currentLang}/`)) {
      newPath = currentPath.replace(`/${currentLang}/`, `/${targetLang}/`);
    } else {
      newPath = `/${targetLang}/`;
    }

    // Navigate to new language version
    window.location.href = window.location.origin + newPath;
  }

  // Create language switcher dropdown
  function createLanguageSwitcher() {
    const currentLang = getCurrentLanguage();
    const currentLanguage = languages[currentLang] || languages['en'];

    // Create container
    const switcherContainer = document.createElement('div');
    switcherContainer.className = 'language-switcher';
    switcherContainer.setAttribute('role', 'navigation');
    switcherContainer.setAttribute('aria-label', 'Language Switcher');

    // Create button
    const button = document.createElement('button');
    button.className = 'language-btn';
    button.setAttribute('aria-label', `Current language: ${currentLanguage.fullName}. Click to switch language`);
    button.setAttribute('aria-haspopup', 'true');
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = `
      <span class="lang-icon">${currentLanguage.icon}</span>
      <span class="lang-name">${currentLanguage.name}</span>
      <span class="lang-arrow">▼</span>
    `;

    // Create dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'language-dropdown';
    dropdown.setAttribute('role', 'menu');
    dropdown.style.display = 'none';

    // Add language options
    Object.keys(languages).forEach(langCode => {
      const lang = languages[langCode];
      const option = document.createElement('button');
      option.className = 'language-option';
      option.setAttribute('role', 'menuitem');
      option.setAttribute('data-lang', langCode);
      option.setAttribute('aria-label', `Switch to ${lang.fullName}`);
      
      if (langCode === currentLang) {
        option.classList.add('active');
        option.setAttribute('aria-current', 'true');
      }

      option.innerHTML = `
        <span class="lang-icon">${lang.icon}</span>
        <span class="lang-name">${lang.name}</span>
      `;

      option.addEventListener('click', function(e) {
        e.stopPropagation();
        switchToLanguage(langCode);
      });

      dropdown.appendChild(option);
    });

    // Toggle dropdown
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = dropdown.style.display === 'block';
      dropdown.style.display = isOpen ? 'none' : 'block';
      button.setAttribute('aria-expanded', !isOpen);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
      dropdown.style.display = 'none';
      button.setAttribute('aria-expanded', 'false');
    });

    // Keyboard navigation
    button.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });

    dropdown.addEventListener('keydown', function(e) {
      const options = Array.from(dropdown.querySelectorAll('.language-option'));
      const currentIndex = options.indexOf(document.activeElement);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % options.length;
        options[nextIndex].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + options.length) % options.length;
        options[prevIndex].focus();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        dropdown.style.display = 'none';
        button.setAttribute('aria-expanded', 'false');
        button.focus();
      }
    });

    // Assemble switcher
    switcherContainer.appendChild(button);
    switcherContainer.appendChild(dropdown);

    // Add to page
    const header = document.querySelector('.md-header__inner');
    if (header) {
      header.appendChild(switcherContainer);
    }

    // Add styles
    addStyles();
  }

  // Get cookie value (kept for backward compatibility)
  function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  // Add styles
  function addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .language-switcher {
        position: relative;
        display: inline-block;
        margin-left: 1rem;
      }
      
      .language-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background-color: rgba(255,255,255,0.1);
        color: var(--md-primary-fg-color--light);
        border: 1px solid rgba(255,255,255,0.3);
        border-radius: 6px;
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
        cursor: pointer;
        transition: all 0.2s ease;
        font-weight: 500;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      }
      
      .language-btn:hover {
        background-color: rgba(255,255,255,0.2);
        border-color: rgba(255,255,255,0.5);
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0,0,0,0.15);
      }

      .language-btn:focus {
        outline: 2px solid rgba(255,255,255,0.5);
        outline-offset: 2px;
      }
      
      .lang-icon {
        font-size: 1rem;
        line-height: 1;
      }
      
      .lang-name {
        font-weight: 500;
      }
      
      .lang-arrow {
        font-size: 0.6rem;
        opacity: 0.7;
        transition: transform 0.2s ease;
      }

      .language-btn[aria-expanded="true"] .lang-arrow {
        transform: rotate(180deg);
      }
      
      .language-dropdown {
        position: absolute;
        top: calc(100% + 0.5rem);
        right: 0;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        min-width: 180px;
        z-index: 1000;
        overflow: hidden;
        animation: slideDown 0.2s ease;
      }

      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .language-option {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        width: 100%;
        padding: 0.7rem 1rem;
        border: none;
        background: white;
        color: #333;
        cursor: pointer;
        transition: background-color 0.2s ease;
        font-size: 0.85rem;
        text-align: left;
      }
      
      .language-option:hover {
        background-color: #f5f5f5;
      }

      .language-option:focus {
        outline: 2px solid #667eea;
        outline-offset: -2px;
        background-color: #f0f4ff;
      }
      
      .language-option.active {
        background-color: #667eea;
        color: white;
        font-weight: 600;
      }

      .language-option.active:hover {
        background-color: #5568d3;
      }
      
      .language-option .lang-icon {
        font-size: 1.2rem;
      }
      
      /* 适应深色模式 */
      [data-md-color-scheme="slate"] .language-btn {
        background-color: rgba(0,0,0,0.2);
        border-color: rgba(255,255,255,0.1);
        color: rgba(255,255,255,0.85);
      }
      
      [data-md-color-scheme="slate"] .language-btn:hover {
        background-color: rgba(0,0,0,0.3);
        border-color: rgba(255,255,255,0.2);
      }
      
      [data-md-color-scheme="slate"] .language-dropdown {
        background: #2a2a2a;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      }
      
      [data-md-color-scheme="slate"] .language-option {
        background: #2a2a2a;
        color: rgba(255,255,255,0.85);
      }
      
      [data-md-color-scheme="slate"] .language-option:hover {
        background: #333;
      }

      [data-md-color-scheme="slate"] .language-option:focus {
        background-color: #3a3a4a;
      }
      
      [data-md-color-scheme="slate"] .language-option.active {
        background-color: #667eea;
        color: white;
      }
      
      /* 移动端样式 */
      @media screen and (max-width: 76.1875em) {
        .language-switcher {
          margin-left: 0.5rem;
        }
        
        .language-btn {
          padding: 0.3rem 0.6rem;
          font-size: 0.75rem;
        }

        .lang-name {
          display: none;
        }

        .lang-icon {
          font-size: 1.1rem;
        }

        .language-dropdown {
          min-width: 150px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Initialize
  createLanguageSwitcher();
});
