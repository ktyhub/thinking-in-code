/**
 * 添加主页导航链接到导航栏
 * 此脚本会在页面加载后动态向导航栏顶部添加一个主页链接
 */
document.addEventListener('DOMContentLoaded', function() {
  // 等待页面完全加载，确保导航元素存在
  setTimeout(function() {
    // 查找导航元素
    const tabsNav = document.querySelector('.md-tabs__list');

    if (tabsNav) {
      // 创建首页导航项
      const homeNavItem = document.createElement('li');
      homeNavItem.className = 'md-tabs__item';

      const homeNavLink = document.createElement('a');
      homeNavLink.href = '/';
      homeNavLink.className = 'md-tabs__link';
      homeNavLink.title = '返回网站主页';
      homeNavLink.setAttribute('aria-label', '返回网站主页');
      homeNavLink.innerHTML = '🏠 首页';

      homeNavItem.appendChild(homeNavLink);

      // 找到技术博客和新技术的导航项
      const navItems = tabsNav.querySelectorAll('.md-tabs__item');
      let techBlogTab = null;
      let newTechTab = null;

      navItems.forEach(item => {
        const linkText = item.textContent.trim();
        if (linkText.includes('技术博客')) {
          techBlogTab = item;
        } else if (linkText.includes('新技术')) {
          newTechTab = item;
        }
      });

      // 如果找到技术博客标签，在它前面插入首页
      if (techBlogTab) {
        tabsNav.insertBefore(homeNavItem, techBlogTab);
      } else {
        // 如果没找到，就插入到最前面
        tabsNav.insertBefore(homeNavItem, tabsNav.firstChild);
      }

      // 添加样式
      const style = document.createElement('style');
      style.textContent = `
        /* 首页导航项样式 */
        .md-tabs__item a:first-child:contains('🏠') {
          margin-right: 0.8em;
          font-weight: 500;
        }
        
        /* 高亮当前页面为主页时的导航项 */
        body[data-md-url^="/"] .md-tabs__item a[href="/"],
        body[data-md-url^="/index.html"] .md-tabs__item a[href="/"] {
          opacity: 1;
          font-weight: bold;
        }
        
        /* 添加视觉分隔 */
        .md-tabs__item:has(a[href="/"]) {
          position: relative;
        }
        
        .md-tabs__item:has(a[href="/"]):after {
          content: "";
          position: absolute;
          right: -4px;
          top: 25%;
          height: 50%;
          width: 1px;
          background-color: rgba(0,0,0,0.1);
        }
      `;
      document.head.appendChild(style);

      // 为移动设备添加首页导航
      const mobileNav = document.querySelector('.md-nav--primary .md-nav__list');
      if (mobileNav) {
        const mobileHomeItem = document.createElement('li');
        mobileHomeItem.className = 'md-nav__item';

        const mobileHomeLink = document.createElement('a');
        mobileHomeLink.href = '/';
        mobileHomeLink.className = 'md-nav__link';
        mobileHomeLink.title = '返回网站主页';
        mobileHomeLink.setAttribute('aria-label', '返回网站主页');
        mobileHomeLink.innerHTML = '🏠 首页';

        mobileHomeItem.appendChild(mobileHomeLink);
        mobileNav.insertBefore(mobileHomeItem, mobileNav.firstChild);
      }

      // 添加当前页面URL数据属性，用于高亮显示
      document.body.setAttribute('data-md-url', window.location.pathname);

      // 如果新技术标签不存在且技术博客标签存在，添加新技术标签
      if (!newTechTab && techBlogTab) {
        const newTechItem = document.createElement('li');
        newTechItem.className = 'md-tabs__item';

        const newTechLink = document.createElement('a');
        newTechLink.href = '/zh/release_note/';
        newTechLink.className = 'md-tabs__link';
        newTechLink.title = '浏览最新技术动态';
        newTechLink.setAttribute('aria-label', '最新技术动态');
        newTechLink.innerHTML = '🆕 新技术';

        newTechItem.appendChild(newTechLink);

        // 将新技术标签插入到技术博客后面
        if (techBlogTab.nextSibling) {
          tabsNav.insertBefore(newTechItem, techBlogTab.nextSibling);
        } else {
          tabsNav.appendChild(newTechItem);
        }
      }
    }
  }, 300); // 延迟300毫秒确保DOM已完全加载
});
