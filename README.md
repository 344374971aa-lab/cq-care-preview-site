# 重庆本地生命关怀志愿陪伴机构 · 官网技术预览／评审站

> **性质**：这是一套**可公开访问的技术预览／评审站**，供内部评审与转发讨论，**不是正式对外官网**。
> 全篇为可替换占位内容，统一用全角方括号占位符标注；正式信息以机构发布为准。

## 1. 合规前提（阅读前先确认）

- 全站**无任何真实机构名称、统一社会信用代码、资质、电话、邮箱、地址、数据、案例、二维码、真实人名**；所有待补项均为全角方括号占位符。
- 全站**禁用**外部机构品牌名，以及分级课程名称与编号、星级或技术体系称谓；授权关系按**未确认／无授权**表述，不声称任何合作或授权关系。
- 定位为**非医疗性志愿陪伴**：不做专业医疗科普、不自建医疗机构名录、不出现真实老人正脸／病床／遗像／夕阳剪影／水彩花束／印章，不放募捐或收款入口，不承诺服务效果。
- 纯 HTML + CSS + 原生 JS：**无构建、无框架、无 CDN、无外部字体、无后端、无表单、无登录、无会员、无在线检索、无统计／分析脚本、无第三方 JS**。
- 所有资源路径均为相对路径（`./` 或 `../`），无 `/` 开头绝对路径，无外部 `http(s)://` 资源引用。官方政策原文在「生命关怀知识」页只以**纯文本 URL + 文号 + 发布机构 + 〔待核〕标签**呈现，当前一律不做可点击外链。

## 2. 文件清单

```
site/
├── index.html                  首页
├── about/index.html            关于我们
├── services/index.html         服务与边界
├── help/index.html             找到帮助（仅导引态）
├── volunteer/index.html        志愿者中心（零表单，C3 静态展示）
├── knowledge/index.html        生命关怀知识（政策转载位与用语对照）
├── disclosure/index.html       信息公开（台账〔待台账〕空态）
├── privacy/index.html          隐私政策
├── 404.html                    静态异常页
├── assets/
│   ├── styles.css              全站唯一样式表（含设计令牌、断点、打印、减少动效）
│   ├── script.js               全站唯一脚本（占位检测 / 二维码 / 抽屉 / 回到顶部）
│   └── favicon.svg             几何标识（纯 SVG，无外部资源）
├── sitemap.xml                 域名占位 https://〔机构域名〕/
├── robots.txt                  域名占位，见下方第 5 节警告
├── .nojekyll                   禁用 Jekyll，保证静态文件原样发布
├── .github/workflows/deploy.yml GitHub Pages 官方标准发布流程
└── README.md                   本文件
```

- `news/index.html` **预留但不首发**，本版本未创建，也未在任何导航中链接。
- `site/docs/` 下的 6 份规格、文案、设计与裁定文档为**内部评审材料**：`.github/workflows/deploy.yml` 在 `upload-pages-artifact` 之前执行 `rm -rf docs`，**不随 GitHub Pages 公开发布**；请在本地仓库保留，不要从源码删除。

## 3. 本地预览

全站相对路径，可直接**双击 `index.html`** 以 `file://` 打开；也可在 `site/` 目录起任意静态文件服务。8 个页面共用 `assets/styles.css` 与 `assets/script.js`，内页按层级使用 `../assets/…`。

主 CTA 在占位未补齐时由 `assets/script.js` 检测全角方括号占位符后灰化禁用并显示「联系方式待公布」；二维码资源缺失时隐藏图片、保留文字「二维码待公布」。禁用 JS 后正文、导航抽屉（原生 `<details>`）与主 CTA 文案仍可读。

## 4. 主 CTA 冻结表（唯一事实来源）

| 页面 | 主 CTA |
|---|---|
| `index.html` | C1 `<a href="tel:〔咨询电话〕">拨打咨询电话</a>` |
| `about/index.html` | C1 拨打咨询电话 |
| `services/index.html` | C1 拨打咨询电话 |
| `help/index.html` | C1 拨打咨询电话 |
| `knowledge/index.html` | C1 拨打咨询电话 |
| `disclosure/index.html` | C1 拨打咨询电话 |
| `volunteer/index.html` | C3 纯静态展示〔公众号名称〕〔公众号关键词·志愿者〕〔公众号二维码图〕，展示语「回复关键词取报名方式」；无跳转／请求／表单／回执 |
| `privacy/index.html` | C2 `<a href="mailto:〔咨询邮箱〕?subject=〔机构简称〕官网咨询">发邮件申请更正</a>` |

〔监督与投诉电话〕〔监督与投诉邮箱〕仅作为八页 R-02 页脚常显文本，**绝不做成主按钮**。每页仅 1 个主 CTA；站内跳转、相关阅读、下载项均为次级文字链。

## 5. 部署

1. 将 `site/` 作为 GitHub 仓库根目录（或 Pages 发布源根），推送到 `main` 分支。
2. `.github/workflows/deploy.yml` 使用 GitHub 官方 `actions/configure-pages` + `actions/upload-pages-artifact` + `actions/deploy-pages` 标准配置，触发分支 `main`，上传路径 `.`，不写死任何仓库名。
3. 仓库 Settings → Pages → Build and deployment 选择 **GitHub Actions**。
4. `.nojekyll` 保证以 `_` 开头或目录内静态文件不被 Jekyll 处理。

> **⚠️ 替换真实域名前不可提交搜索引擎。** `sitemap.xml` 与 `robots.txt` 中的域名一律为占位 `https://〔机构域名〕/`，当前不应提交到搜索引擎站长平台，也不应据占位地址对外宣称官方网址。正式对外发布前须同时完成：真实域名、ICP 备案主体、12 项硬闸门占位替换、授权关系书面结论。

## 5.1 预览态统一说明（终局口径，八页一致）

文案逐字为「本站为可公开访问的技术预览与评审页面，全篇为可替换占位内容；正式信息以机构发布为准。」，**仅两处纯文本**：① R-02 页脚末行，八页逐字一致；② 首页首屏信息卡内「最近核验日期」行下方。不设顶栏标识条、不加背景块／边框／图标／按钮、不进 Tab 序列、不可关闭。正式对外发布后由主理人决定是否移除，**两处一起移除**。

## 6. 占位符说明

全站统一使用 `〔〕` 标注待替换项（如〔机构法定全称〕〔咨询电话〕〔最近核验日期〕等）；〔待台账〕〔待核〕〔待补〕〔待核验〕〔待配置〕为「未补齐时页面如何呈现」的**呈现态文字**，不是独立字段。缺失素材（二维码、制度 PDF、授权配图）按空态处理：隐藏图片或链接、保留文字说明，**不放假图、不放假链接、不填估算值、不填 0**。

## 7. 结构与交互约定

- 八页统一结构：**不设顶栏占位说明条**；header（7 项主导航，移动端原生 `<details>` 抽屉）→ skip-link → 面包屑 → 眉标 / H1 / lead → 信息卡 → 分节正文 → R-01 边界声明带 → 单一主 CTA（移动吸底条 `position:sticky; bottom:0`，**非 fixed**，位于 `<main>` 末尾、`<footer>` 之前）→ 相关阅读 2 条 → R-02 页脚（**末行含预览态统一说明，八页逐字一致**）。首页首屏信息卡内另有一句同样的说明，全站仅此两处。
- 焦点可见：`:focus-visible` 为 `2px solid #185FA5` + offset 2px；装饰性 SVG 一律 `aria-hidden="true" focusable="false"`；无正 `tabindex`、无键盘陷阱。
- 过期／待核态以「换文字色 + 状态标签 + 置底」表达，**不使用 `opacity` 降透明度**。
- 含 `@media print` 基础打印样式与 `@media (prefers-reduced-motion: reduce)` 关闭过渡。

## 8. 自检记录

功能与兼容性验证由主理人用 `verify_site.py` 独立执行（不采信实现方自检），结果回填 `site/docs/delivery-checklist.md` §5 与 `site/docs/verification-report.json`。覆盖：HTML 标签配对与嵌套、相对路径与外链、禁用词与零表单、逐页单 CTA 契约比对、站内死链、八页公共结构件、占位符统计、Chrome 1280/375 双断点渲染截图。

---

本文件为技术说明，不含任何真实机构信息，不构成对外发布内容。
