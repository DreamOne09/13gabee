import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import { SHOP } from "@/lib/site-data";
import "./globals.css";

const notoSans = Noto_Sans_TC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerif = Noto_Serif_TC({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: `${SHOP.name} | ${SHOP.alias} · 台中南屯手沖咖啡`,
  description:
    "十三咖啡（13Gabee）台中南屯秘境石頭屋咖啡廳。無菜單手沖單品、環中路五段200號。本站為琢奧科技 Demo，資料來自公開來源。",
  openGraph: {
    title: `${SHOP.name} | 台中南屯手沖咖啡`,
    description: "秘境石頭屋咖啡空間 · 僅手沖單品 · Demo 示範網站",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${notoSans.variable} ${notoSerif.variable} h-full`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("13gabee-demo-dismissed")==="1"){document.documentElement.dataset.demoDismissed="true";}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
