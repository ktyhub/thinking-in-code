/**
 * AdSense 配置。
 *
 * 发布商 ID 与广告单元 ID 都是公开信息（页面 HTML 与 ads.txt 里本来就会出现），
 * 所以直接写默认值；构建期环境变量 PUBLIC_ADSENSE_DETAIL_SLOT 可覆盖，
 * 置为空字符串即可一键下线全部广告位。
 *
 * 详情页文末广告单元：AdSense 后台「stags版本详情页」（展示广告）。
 */
export const ADSENSE_CLIENT = "ca-pub-4184355057086168";

/**
 * 详情页文末展示广告单元。
 *  - 未配置 / 空字符串：用默认单元（CI 未设置 Secret 时就是这个情况）
 *  - "off"：一键下线全部广告位
 *  - 其他数字：改用别的广告单元
 */
const envSlot = String(import.meta.env.PUBLIC_ADSENSE_DETAIL_SLOT ?? "").trim();
export const ADSENSE_DETAIL_SLOT =
  envSlot === "off" ? "" : envSlot || "9133765584";

/** 只有当脚本与广告单元都存在时才渲染广告位 */
export const adsDetailEnabled = Boolean(ADSENSE_CLIENT && ADSENSE_DETAIL_SLOT);

/** AdSense 脚本地址（Shell 里全站只加载一次） */
export const adsenseScriptSrc =
  `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
