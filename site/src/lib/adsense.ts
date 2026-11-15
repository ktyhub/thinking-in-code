/**
 * AdSense 配置。
 *
 * 发布商 ID 是公开信息（ads.txt 里也会出现），可以直接写死；
 * 广告单元 ID 走构建期环境变量，未配置时页面上不渲染任何广告容器——
 * 账号还在停用/审核阶段时，站点保持完全干净，不影响 SEO 与阅读体验。
 *
 * 用法：PUBLIC_ADSENSE_DETAIL_SLOT=1234567890 npm run build
 */
export const ADSENSE_CLIENT = "ca-pub-4184355057086168";

/** 详情页文末展示广告单元；空 = 不投放 */
export const ADSENSE_DETAIL_SLOT = String(
  import.meta.env.PUBLIC_ADSENSE_DETAIL_SLOT ?? "",
).trim();

/** 只有当脚本与广告单元都存在时才渲染广告位 */
export const adsDetailEnabled = Boolean(ADSENSE_CLIENT && ADSENSE_DETAIL_SLOT);

/** AdSense 脚本地址（Shell 里全站只加载一次） */
export const adsenseScriptSrc =
  `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
