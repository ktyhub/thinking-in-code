---
title: "ant-design 6.6.0"
project: "ant-design"
repo: "ant-design/ant-design"
tag: "6.6.0"
published: "2026-08-10"
type: "minor"
lang: "en"
---

# ant-design 6.6.0

- 🔥 Add Listy component for high-performance virtualized lists with grouping, sticky headers, and imperative scrolling. [#58724](https://github.com/ant-design/ant-design/pull/58724) [@aojunhao123](https://github.com/aojunhao123)
- ConfigProvider
  - 🆕 Add ConfigProvider `focusOutline` theme token to control shared focus outlines across Input, Select, Rate, Steps, Splitter, and other components. [#58647](https://github.com/ant-design/ant-design/pull/58647) [#58708](https://github.com/ant-design/ant-design/pull/58708) [@QDyanbing](https://github.com/QDyanbing)
  - 🆕 Add ConfigProvider global `variant` configuration for Input.Search, Input.Password, and Input.OTP. [#58784](https://github.com/ant-design/ant-design/pull/58784) [@QDyanbing](https://github.com/QDyanbing)
  - 🆕 Add ConfigProvider global `mouseEnterDelay` and `mouseLeaveDelay` configuration for Tooltip, Popover, and Popconfirm. [#58892](https://github.com/ant-design/ant-design/pull/58892) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
- 🌐 Localization
  - 🇦🇱 Add Albanian `sq_AL` locale support. [#58618](https://github.com/ant-design/ant-design/pull/58618) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 Add Tree `useTree` for retrieving node paths and support `scrollTo({ autoExpand: true })` to expand target nodes before scrolling. [#58841](https://github.com/ant-design/ant-design/pull/58841) [@zombieJ](https://github.com/zombieJ)
- 🆕 Add FloatButton.BackTop `showProgress` to display the current scroll progress around the button. [#58894](https://github.com/ant-design/ant-design/pull/58894) [@ZQDesigned](https://github.com/ZQDesigned)
- 🆕 Add Table `expandable.forceRender` to render expanded row content before its first expansion. [#58860](https://github.com/ant-design/ant-design/pull/58860) [@nikzanda](https://github.com/nikzanda)
- 🆕 Add Pagination `components.sizeChanger` to customize the page-size changer, including in Table pagination. [#58831](https://github.com/ant-design/ant-design/pull/58831) [@QDyanbing](https://github.com/QDyanbing)
- 🆕 Add Mentions `popupRender` to customize suggestion dropdown rendering. [#58582](https://github.com/ant-design/ant-design/pull/58582) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
- 🆕 Add Tabs `more.popupRender` to customize the overflow dropdown content. [#58651](https://github.com/ant-design/ant-design/pull/58651) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
- 🆕 Add BorderBeam `count` to display multiple evenly distributed beams around the container border. [#58691](https://github.com/ant-design/ant-design/pull/58691) [@meet-student](https://github.com/meet-student)
- 🆕 Add Image `preview.wheel` to control mouse wheel zoom in preview. [#58728](https://github.com/ant-design/ant-design/pull/58728) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
- 🆕 Add Alert `borderRadius` component token to customize its corner radius. [#57765](https://github.com/ant-design/ant-design/pull/57765) [@guoyunhe](https://github.com/guoyunhe)
- 🆕 Add `nativeElement` ref support to Avatar.Group, Badge.Ribbon, Breadcrumb, Calendar, Card.Grid, Card.Meta, Carousel, Descriptions, Divider, Empty, FloatButton.Group, List.Item.Meta, QRCode, Result, Skeleton, Space.Compact, Spin, Splitter, Transfer, and Watermark. [#58627](https://github.com/ant-design/ant-design/pull/58627) [#58628](https://github.com/ant-design/ant-design/pull/58628) [#58629](https://github.com/ant-design/ant-design/pull/58629) [#58630](https://github.com/ant-design/ant-design/pull/58630) [#58631](https://github.com/ant-design/ant-design/pull/58631) [#58632](https://github.com/ant-design/ant-design/pull/58632) [#58633](https://github.com/ant-design/ant-design/pull/58633) [#58634](https://github.com/ant-design/ant-design/pull/58634) [#58635](https://github.com/ant-design/ant-design/pull/58635) [#58636](https://github.com/ant-design/ant-design/pull/58636) [#58637](https://github.com/ant-design/ant-design/pull/58637) [#58638](https://github.com/ant-design/ant-design/pull/58638) [#58639](https://github.com/ant-design/ant-design/pull/58639) [#58640](https://github.com/ant-design/ant-design/pull/58640) [#58641](https://github.com/ant-design/ant-design/pull/58641) [#58642](https://github.com/ant-design/ant-design/pull/58642) [#58643](https://github.com/ant-design/ant-design/pull/58643) [#58644](https://github.com/ant-design/ant-design/pull/58644) [#58645](https://github.com/ant-design/ant-design/pull/58645) [#58667](https://github.com/ant-design/ant-design/pull/58667) [@li-jia-nan](https://github.com/li-jia-nan)
- 🤖 Export missing public Props and Ref types for Alert, Carousel, Cascader, Masonry, Mentions, Radio, Slider, Statistic, Table, Tabs, Tooltip, and Upload. [#58700](https://github.com/ant-design/ant-design/pull/58700) [#58798](https://github.com/ant-design/ant-design/pull/58798) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 Fix semantic style precedence for Calendar, ColorPicker, DatePicker, Divider, Dropdown, Input, Masonry, Popover, Popconfirm, QRCode, Space, Spin, Tag, TimePicker, Tooltip, Typography, Badge, Drawer, FloatButton, Image, Message, Modal, Notification, Steps, Timeline, Tour, and Upload when combining ConfigProvider and component-level `style` and `styles` settings. [#58550](https://github.com/ant-design/ant-design/pull/58550) [#58564](https://github.com/ant-design/ant-design/pull/58564) [@QDyanbing](https://github.com/QDyanbing)
- Select
  - 🐞 Fix Select placeholder remaining visible when an ancestor is hidden. [#58572](https://github.com/ant-design/ant-design/pull/58572) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 Fix Select clear icon showing a native button background in dark mode. [#58928](https://github.com/ant-design/ant-design/pull/58928) [@zombieJ](https://github.com/zombieJ)
- 🐞 Fix Drawer close button remaining interactive when `closable.disabled` is enabled. [#58853](https://github.com/ant-design/ant-design/pull/58853) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Carousel jumping to the first slide when children are dynamically added. [#58845](https://github.com/ant-design/ant-design/pull/58845) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
- 🐞 Fix Button layout shift when the `loading` animation starts. [#58690](https://github.com/ant-design/ant-design/pull/58690) [#58712](https://github.com/ant-design/ant-design/pull/58712) [@zombieJ](https://github.com/zombieJ)
- 🐞 Fix Typography ellipsis tooltip closing before users can interact with its popup, and improve its hover behavior around action buttons. [#58661](https://github.com/ant-design/ant-design/pull/58661) [#58722](https://github.com/ant-design/ant-design/pull/58722) [@zombieJ](https://github.com/zombieJ)
- 💄 Improve Select, Tree, and Table virtual scrollbar track feedback, and support clicking the Table scrollbar track to jump. [#58625](https://github.com/ant-design/ant-design/pull/58625) [#58658](https://github.com/ant-design/ant-design/pull/58658) [@QDyanbing](https://github.com/QDyanbing)
---
- 🔥 新增 Listy 高性能虚拟列表组件，支持分组、吸顶标题和命令式滚动。[#58724](https://github.com/ant-design/ant-design/pull/58724) [@aojunhao123](https://github.com/aojunhao123)
- ConfigProvider
  - 🆕 新增 ConfigProvider 主题 Token `focusOutline`，用于统一控制 Input、Select、Rate、Steps、Splitter 等组件的聚焦描边。[#58647](https://github.com/ant-design/ant-design/pull/58647) [#58708](https://github.com/ant-design/ant-design/pull/58708) [@QDyanbing](https://github.com/QDyanbing)
  - 🆕 新增 ConfigProvider 全局配置 Input.Search、Input.Password 和 Input.OTP `variant` 的能力。[#58784](https://github.com/ant-design/ant-design/pull/58784) [@QDyanbing](https://github.com/QDyanbing)
  - 🆕 新增 ConfigProvider 对 Tooltip、Popover 和 Popconfirm `mouseEnterDelay` 与 `mouseLeaveDelay` 的全局配置支持。[#58892](https://github.com/ant-design/ant-design/pull/58892) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
- 🌐 国际化
  - 🇦🇱 新增阿尔巴尼亚语 `sq_AL` locale 本地化支持。[#58618](https://github.com/ant-design/ant-design/pull/58618) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 新增 Tree `useTree` 以获取节点路径，并支持 `scrollTo({ autoExpand: true })` 在滚动前自动展开目标节点。[#58841](https://github.com/ant-design/ant-design/pull/58841) [@zombieJ](https://github.com/zombieJ)
- 🆕 新增 FloatButton.BackTop `showProgress`，用于在按钮边缘展示当前滚动进度。[#58894](https://github.com/ant-design/ant-design/pull/58894) [@ZQDesigned](https://github.com/ZQDesigned)
- 🆕 新增 Table `expandable.forceRender`，支持在首次展开前渲染展开行内容。[#58860](https://github.com/ant-design/ant-design/pull/58860) [@nikzanda](https://github.com/nikzanda)
- 🆕 新增 Pagination `components.sizeChanger`，支持自定义每页条数切换器，并可用于 Table 分页。[#58831](https://github.com/ant-design/ant-design/pull/58831) [@QDyanbing](https://github.com/QDyanbing)
- 🆕 新增 Mentions `popupRender` 属性，支持自定义建议下拉菜单的渲染。[#58582](https://github.com/ant-design/ant-design/pull/58582) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
- 🆕 新增 Tabs `more.popupRender`，支持自定义折叠下拉菜单内容。[#58651](https://github.com/ant-design/ant-design/pull/58651) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
- 🆕 新增 BorderBeam `count` 属性，支持在容器边缘显示多条均匀分布的流光。[#58691](https://github.com/ant-design/ant-design/pull/58691) [@meet-student](https://github.com/meet-student)
- 🆕 新增 Image `preview.wheel` 属性，用于控制预览时是否启用鼠标滚轮缩放。[#58728](https://github.com/ant-design/ant-design/pull/58728) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
- 🆕 新增 Alert `borderRadius` 组件 Token，用于自定义圆角。[#57765](https://github.com/ant-design/ant-design/pull/57765) [@guoyunhe](https://github.com/guoyunhe)
- 🆕 新增 Avatar.Group、Badge.Ribbon、Breadcrumb、Calendar、Card.Grid、Card.Meta、Carousel、Descriptions、Divider、Empty、FloatButton.Group、List.Item.Meta、QRCode、Result、Skeleton、Space.Compact、Spin、Splitter、Transfer 和 Watermark 的 `nativeElement` ref，用于访问各自的根 DOM 元素。[#58627](https://github.com/ant-design/ant-design/pull/58627) [#58628](https://github.com/ant-design/ant-design/pull/58628) [#58629](https://github.com/ant-design/ant-design/pull/58629) [#58630](https://github.com/ant-design/ant-design/pull/58630) [#58631](https://github.com/ant-design/ant-design/pull/58631) [#58632](https://github.com/ant-design/ant-design/pull/58632) [#58633](https://github.com/ant-design/ant-design/pull/58633) [#58634](https://github.com/ant-design/ant-design/pull/58634) [#58635](https://github.com/ant-design/ant-design/pull/58635) [#58636](https://github.com/ant-design/ant-design/pull/58636) [#58637](https://github.com/ant-design/ant-design/pull/58637) [#58638](https://github.com/ant-design/ant-design/pull/58638) [#58639](https://github.com/ant-design/ant-design/pull/58639) [#58640](https://github.com/ant-design/ant-design/pull/58640) [#58641](https://github.com/ant-design/ant-design/pull/58641) [#58642](https://github.com/ant-design/ant-design/pull/58642) [#58643](https://github.com/ant-design/ant-design/pull/58643) [#58644](https://github.com/ant-design/ant-design/pull/58644) [#58645](https://github.com/ant-design/ant-design/pull/58645) [#58667](https://github.com/ant-design/ant-design/pull/58667) [@li-jia-nan](https://github.com/li-jia-nan)
- 🤖 补充导出 Alert、Carousel、Cascader、Masonry、Mentions、Radio、Slider、Statistic、Table、Tabs、Tooltip 和 Upload 缺失的公开 Props 与 Ref 类型。[#58700](https://github.com/ant-design/ant-design/pull/58700) [#58798](https://github.com/ant-design/ant-design/pull/58798) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Calendar、ColorPicker、DatePicker、Divider、Dropdown、Input、Masonry、Popover、Popconfirm、QRCode、Space、Spin、Tag、TimePicker、Tooltip、Typography、Badge、Drawer、FloatButton、Image、Message、Modal、Notification、Steps、Timeline、Tour 和 Upload 同时使用 ConfigProvider 与组件级 `style`、`styles` 时的语义样式优先级。[#58550](https://github.com/ant-design/ant-design/pull/58550) [#58564](https://github.com/ant-design/ant-design/pull/58564) [@QDyanbing](https://github.com/QDyanbing)
- Select
  - 🐞 修复 Select 占位文本在祖先元素隐藏时仍然可见的问题。[#58572](https://github.com/ant-design/ant-design/pull/58572) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 修复 Select 清除图标在暗色模式下显示原生按钮背景的问题。[#58928](https://github.com/ant-design/ant-design/pull/58928) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Drawer 启用 `closable.disabled` 后关闭按钮仍可交互的问题。[#58853](https://github.com/ant-design/ant-design/pull/58853) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Carousel 动态添加子项时自动跳回第一张的问题。[#58845](https://github.com/ant-design/ant-design/pull/58845) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
- 🐞 修复 Button 开始 `loading` 动画时的布局跳动问题。[#58690](https://github.com/ant-design/ant-design/pull/58690) [#58712](https://github.com/ant-design/ant-design/pull/58712) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Typography 省略提示提前关闭导致无法与弹层交互的问题，并优化操作按钮附近的悬浮交互。[#58661](https://github.com/ant-design/ant-design/pull/58661) [#58722](https://github.com/ant-design/ant-design/pull/58722) [@zombieJ](https://github.com/zombieJ)
- 💄 优化 Select、Tree 和 Table 虚拟滚动条轨道的交互反馈，并支持点击 Table 滚动条轨道快速跳转。[#58625](https://github.com/ant-design/ant-design/pull/58625) [#58658](https://github.com/ant-design/ant-design/pull/58658) [@QDyanbing](https://github.com/QDyanbing)

---

> **Source** [ant-design/ant-design](https://github.com/ant-design/ant-design) · `6.6.0` · 2026-08-10 · [upstream release](https://github.com/ant-design/ant-design/releases/tag/6.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
