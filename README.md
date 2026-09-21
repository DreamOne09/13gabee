# 十三咖啡（13Gabee）— 靜態行銷 Demo（Astro）

台中南屯 **十三咖啡** 的行銷站提案 Demo。**純靜態** `astro build`，無資料庫、無 CMS。

> **僅供 Demo 使用** · 公開來源整理 · **非店家委託** · **由琢奧科技製作（顧問 Dream）**

## 搜尋引擎（硬條件：不收錄）

- 全站 `<meta name="robots" content="noindex, nofollow, noarchive">`（含 `googlebot`），解鎖前後皆同
- `public/robots.txt`：`User-agent: *` · `Disallow: /`（並含 `/13gabee/` 供 GitHub Pages）
- **未**產生 sitemap；請勿在 Search Console 提交此 Demo

## 提案預覽密碼（門禁）

冷啟動一律顯示**全屏提案門**；同分頁輸入密碼 **`demo`**（區分大小寫）後以 `sessionStorage` 解鎖，關閉分頁需重輸。此為客端防誤入，**非正式資安**。

## GitHub Pages（Project site）

公開網址（合併 `main` 並啟用 Pages 後）：`https://dreamone09.github.io/13gabee/`

建置時**必須**帶 base path，否則 `/_astro` 與 `/photos` 會 404：

```bash
npm run build:pages
# 等同 PUBLIC_BASE=/13gabee astro build
```

根路徑／Vercel 部署：

```bash
npm run build   # PUBLIC_BASE 未設 → base '/'
```

內部連結與 public 資源請透過 `src/lib/paths.ts`（`asset()`、`route()`、`anchor()`），勿寫死 `/` 開頭路徑。

## 改文案與資料

```text
src/config/site.ts
```

## 本地

```bash
npm install
npm run dev
npm run build:pages && npm run preview:pages
# 開啟 http://127.0.0.1:43123/13gabee/
npm run verify:g5
```

## 區塊順序

Hero（immersive + GSAP 一拍）→ 空間 Gallery → 關於 → 公開資訊 → 體驗 → 到店 → FAQ → CTA

## 技術

Astro 6 · 單檔 `site.ts` · GSAP 首屏一拍 · CafeOrCoffeeShop JSON-LD · RWD 375／768／1440
