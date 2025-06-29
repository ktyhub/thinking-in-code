// Google Analytics 4 tracking code
(function() {
  // Load Google Analytics 4
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-8ZRYQZ565W';
  document.head.appendChild(script);

  // Initialize Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-8ZRYQZ565W');

  // Make gtag available globally
  window.gtag = gtag;
})();

// Additional JavaScript for enhanced functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('Thinking In Code - Global Tech Insight Platform loaded');

  // Add any additional initialization code here
  if (typeof initTechRadar === 'function') {
    initTechRadar();
  }
});
