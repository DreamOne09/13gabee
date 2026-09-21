// ============================================================================
// 十三咖啡（13Gabee）— 單一設定檔（Astro-Chalet 家）
// ============================================================================

export const SITE = {
  url: "https://dreamone09.github.io/13gabee",
  lang: "zh-TW",
  ogLocale: "zh_TW",
  name: "十三咖啡",
  alias: "13Gabee",
  tagline: "只為這杯手沖，走進南屯石頭屋",
  description:
    "十三咖啡（13Gabee）台中南屯手沖單品。杯皿與萃取在前，石頭屋在後。環中路五段200號。公開資料 Demo，非店家委託。",

  vi: {
    imageWatermark: "僅供 Demo 使用",
  },

  crawl: {
    robotsMeta: "noindex, nofollow, noarchive",
  },

  proposal: {
    storageKey: "13gabee-proposal-unlocked",
    gateTitle: "提案預覽須知",
    gateBody:
      "本站為琢奧科技行銷提案 Demo，未公開、非店家委託、未獲授權上線。使用 Google Maps、Facebook 粉專與公開報導影像僅供提案討論；正式授權前請勿對外轉傳或當成官方網站。",
    passwordLabel: "預覽密碼",
    submitLabel: "進入提案",
    wrongPassword: "密碼錯誤，請再試一次。",
    securityNote: "門禁僅防誤入，非正式資安。",
    gateFooter: "琢奧科技｜僅供提案",
  },

  legalChrome: {
    banner: "Demo 預覽 · 非官方 · 點開說明",
    toggleLabel: "完整免責說明",
    disclaimerTitle: "提案 Demo 免責",
    disclaimerBody:
      "本網站由琢奧科技製作，僅供內部或客戶提案預覽，並非十三咖啡官方網站，亦未獲店家授權對外上線。站內文案、影像整理自 Google Maps、Facebook 粉專、食尚玩家與部落格等公開來源，僅供討論行銷方向；營業時段、路況與品項以店家現場與粉專公告為準。未經授權請勿截圖對外宣稱為已上線官網。",
  },

  demo: {
    gateTitle: "提案預覽須知",
    gateBody: "",
    gateButton: "進入提案",
    ribbon: "提案 Demo",
    disclaimer: "提案 Demo · 未授權公開 · 非官方站 · 資料來自公開來源",
  },

  agency: {
    name: "琢奧科技",
    credit: "由琢奧科技製作（顧問 Dream）",
  },

  business: {
    schemaType: "CafeOrCoffeeShop",
    phone: "+886917646373",
    phoneDisplay: "0917-646-373",
    lineUrl: "",
    facebookUrl: "https://www.facebook.com/13Gabee/",
    email: "",
    address: {
      street: "環中路五段200號",
      postalCode: "408",
      city: "台中市南屯區",
      country: "TW",
    },
    geo: { latitude: 24.1378, longitude: 120.6479 },
    priceRange: "",
    googleBusinessUrl:
      "https://maps.google.com/?q=十三咖啡+台中市南屯區環中路五段200號",
    socialProfiles: ["https://www.facebook.com/13Gabee/"],
    accessNote: "捷運綠線九張犁站步行約 5–10 分鐘",
    petFriendly: false,
  },

  openingHours: [
    {
      label: "每日",
      days: [0, 1, 2, 3, 4, 5, 6],
      opens: "13:30",
      closes: "18:30",
    },
  ] as OpeningHours[],

  hoursNote: "原則上天黑即打烊；出發前建議致電或查看粉專。",

  navigation: [
    { label: "手沖", href: "#gallery" },
    { label: "體驗", href: "#experience" },
    { label: "關於", href: "#about" },
    { label: "到店", href: "#info" },
    { label: "常見問題", href: "#faq" },
  ],

  hero: {
    layout: "immersive" as "editorial" | "split" | "immersive",
    title: "只為這杯手沖",
    titleHighlight: "",
    subtitle: "南屯石頭屋 · 無菜單單品",
    image: "/photos/demo-hero-black-coffee.jpg",
    imageAlt: "手持小杯黑咖啡液（公開來源影像 Kiwi 樂活食旅，僅供 Demo 使用）",
    eyebrow: "十三咖啡 · 台中南屯",
    primaryCta: { label: "撥打 0917-646-373", href: "tel:+886917646373" },
    highlights: [] as string[],
  },

  experience: {
    eyebrow: "體驗",
    title: "杯皿在前，空間在後",
    intro: "無菜單。入店選座，店方依當日豆子手沖——公開報導整理。",
    items: [
      {
        title: "手沖單品",
        description: "沒有菜單、沒有甜點。來這裡，是為了一杯可以慢喝的咖啡。",
        icon: "cup",
      },
      {
        title: "萃取與杯皿",
        description: "虹吸、手沖壺與小杯黑咖啡液，是店內最常被談起的畫面。",
        icon: "camera",
      },
      {
        title: "石頭屋當背景",
        description:
          "回收建材與石頭堆砌的庭園與木質室內，陪襯手沖——空間美，但咖啡仍是主角。",
        icon: "home",
      },
    ],
  },

  about: {
    eyebrow: "關於",
    title: "走進石頭屋，為一杯手沖",
    paragraphs: [
      "很多人為了這杯手沖來到南屯。沒有明顯招牌，石頭屋與庭園在後方襯托，讓杯中的風味留在前面。",
      "營業以每日下午開店為主，原則上天黑即打烊。路況多變，出發前請致電或查看粉專公告。",
    ],
    image: "/photos/demo-siphon-brew.jpg",
    imageAlt: "店內虹吸壺與杯皿沖煮（公開來源影像 Kiwi 樂活食旅，僅供 Demo 使用）",
  },

  gallery: {
    eyebrow: "手沖",
    title: "杯皿與萃取",
    lead: "黑咖啡液、虹吸與杯皿為主；石頭屋影像收在後段。",
    images: [
      {
        src: "/photos/demo-siphon-brew.jpg",
        alt: "店內虹吸壺與杯皿沖煮（公開來源影像 Kiwi 樂活食旅，僅供 Demo）",
      },
      {
        src: "/photos/demo-hero-black-coffee.jpg",
        alt: "手持小杯黑咖啡液（公開來源影像 Kiwi 樂活食旅，僅供 Demo）",
      },
      {
        src: "/photos/20260728132541-c52a8d28.jpg",
        alt: "十三咖啡室內用餐氛圍",
      },
      {
        src: "/photos/1787653556_fa7038d6a6c64a091ac8a29584296e39.jpg",
        alt: "十三咖啡戶外庭園與建築",
      },
      {
        src: "/photos/ating-20200924195146_58.jpg",
        alt: "十三咖啡石頭屋外觀",
      },
      {
        src: "/photos/ating-20200924192759_51.jpg",
        alt: "十三咖啡戶外庭園角落",
      },
      {
        src: "/photos/20260728132526-68c4a2dd.jpg",
        alt: "十三咖啡石頭屋建築外觀",
      },
      {
        src: "/photos/20260728100921-000742e0.jpg",
        alt: "十三咖啡戶外座位與造景",
      },
    ],
  },

  routeWarnings: {
    eyebrow: "路線",
    title: "出發前請先看",
    items: [
      "周邊道路施工、路況多變，請出發前查看 Facebook 粉專最新公告。",
      "導航可能繞路；開車建議：環中路五段 → 精誠南路 → 大忠南街。",
      "勿從建國路轉入狹窄小巷，大型車輛難以通行。",
    ],
  },

  visitOptions: [
    {
      label: "捷運",
      detail: "台中捷運綠線「九張犁站」下車，步行約 5–10 分鐘。",
    },
    {
      label: "開車／騎車",
      detail: "環中路五段轉精誠南路，橋下迴轉後接大忠南街或慶順二街方向進入。",
    },
    {
      label: "導航",
      detail: "Google Maps 搜尋「十三咖啡」；若路線繞遠，請改依粉專建議路線。",
    },
  ],

  trust: {
    eyebrow: "公開資訊",
    title: "想確認營業與路況？",
    intro:
      "本站是行銷 Demo，不在網頁上捏造評價或價格。請直接到 Facebook 粉專看最新公告，或到 Google 地圖核對地址與公開留言。",
    actions: [
      {
        label: "Facebook 粉專公告",
        href: "https://www.facebook.com/13Gabee/",
        variant: "secondary" as const,
      },
      {
        label: "Google 地圖核對地址",
        href: "https://maps.google.com/?q=十三咖啡+台中市南屯區環中路五段200號",
        variant: "secondary" as const,
      },
    ],
    items: [
      {
        title: "營業以粉專為準",
        body: "時段、路況、臨時公休等皆以店家 Facebook 公告為準，出發前建議致電確認。",
      },
      {
        title: "公開來源可核對",
        body: "地址、體驗描述與照片皆整理自 Google Maps、粉專與公開報導，隨時可交叉比對。",
      },
    ],
  },

  reviews: {
    eyebrow: "",
    title: "",
    allReviewsUrl: "",
    items: [] as { author: string; rating: number; text: string }[],
  },

  faq: {
    eyebrow: "常見問題",
    title: "常見問題",
    items: [
      {
        question: "有菜單嗎？可以點拿鐵或甜點嗎？",
        answer:
          "公開資訊顯示店內僅提供手沖單品咖啡，不提供餐點、甜點或拿鐵；入店後由店方依當日豆子為您沖煮。",
      },
      {
        question: "營業時間固定嗎？",
        answer:
          "公開資訊為每日 13:30 開店，原則上天黑即打烊；實際請以電話或 Facebook 粉專為準。",
      },
      {
        question: "這個網站是官方網站嗎？",
        answer: "不是。本站為琢奧科技 Demo，僅供展示行銷站能力，非店家委託。",
      },
    ],
  },

  ctaBanner: {
    title: "準備好了就聯絡店家",
    text: "出發前請致電 0917-646-373 確認營業與路況。",
    button: { label: "撥打 0917-646-373", href: "tel:+886917646373" },
  },

  contact: {
    eyebrow: "聯絡",
    title: "聯絡方式",
    intro: "無後台表單、無資料庫——請直接來電或到 Facebook 粉專。",
    endpoint: "",
    honeypotField: "website",
  },

  legal: {
    companyType: "Demo 展示站（琢奧科技）",
    registrationNumber: "—",
    publisher: "琢奧科技",
    host: {
      name: "GitHub Pages",
      address: "—",
      url: "https://pages.github.com",
    },
  },

  ui: {
    skipToContent: "跳至主要內容",
    menuOpenLabel: "開啟選單",
    closedLabel: "公休",
    hoursTitle: "營業時間",
    findUsTitle: "地址",
    infoEyebrow: "到店",
    infoTitle: "營業時間與如何前往",
    directionsLabel: "Google 地圖導航",
    googleProfileLabel: "Google 地圖上的店家",
    readAllReviews: "在 Google 查看公開評價 →",
    ratingLabel: "評分：",
    ratingOutOf: "／5",
    reviewsScoreLabel: "（本 Demo 不顯示假評價）",
    formNameLabel: "姓名",
    formEmailLabel: "Email",
    formMessageLabel: "訊息",
    formSubmitLabel: "送出",
    formHoneypotLabel: "請留空",
    legalNoticeLabel: "法律聲明",
    privacyPolicyLabel: "隱私權",
    allRightsReserved: "僅供 Demo",
    notFoundTitle: "找不到頁面",
    notFoundText: "您要找的頁面不存在或已移動。",
    notFoundCta: "返回首頁",
    demoImageCredit: "公開來源影像",
    imageWatermark: "僅供 Demo 使用",
    petFriendlyLabel: "寵物友善",
  },
} as const;

export interface OpeningHours {
  label: string;
  days: number[];
  opens?: string;
  closes?: string;
  closed?: boolean;
}

export type SiteConfig = typeof SITE;
