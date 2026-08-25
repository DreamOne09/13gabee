export const SHOP = {
  name: "十三咖啡",
  alias: "13Gabee",
  address: "台中市南屯區環中路五段200號",
  district: "南屯",
  phone: "0917-646-373",
  phoneTel: "tel:+886917646373",
  facebook: "https://www.facebook.com/13Gabee/",
  hours: "每日 13:30–18:30（原則上天黑即打烊）",
  googleMaps: "https://maps.google.com/?q=十三咖啡+台中市南屯區環中路五段200號",
} as const;

export const DEMO_DISCLAIMER =
  "本站僅供 Demo，資料來自 Google Maps／粉專等公開來源，非店家委託";

export const AGENCY = {
  name: "琢奧科技",
  consultant: "Dream",
} as const;

export type Photo = {
  src: string;
  alt: string;
  source: string;
  sourceUrl: string;
};

export const PHOTOS: Photo[] = [
  {
    src: "/photos/20260728132526-68c4a2dd.jpg",
    alt: "十三咖啡石頭屋建築外觀",
    source: "食尚玩家",
    sourceUrl: "https://supertaste.tvbs.com.tw/infocard/33852",
  },
  {
    src: "/photos/20260728132541-c52a8d28.jpg",
    alt: "十三咖啡庭院與植栽",
    source: "食尚玩家",
    sourceUrl: "https://supertaste.tvbs.com.tw/infocard/33852",
  },
  {
    src: "/photos/20260728100921-000742e0.jpg",
    alt: "十三咖啡戶外座位區",
    source: "食尚玩家",
    sourceUrl: "https://supertaste.tvbs.com.tw/infocard/33852",
  },
  {
    src: "/photos/1787653555_0ab690cedf0076392c42458dbfbe107a.jpg",
    alt: "十三咖啡手沖咖啡",
    source: "食尚玩家",
    sourceUrl: "https://supertaste.tvbs.com.tw/infocard/33852",
  },
  {
    src: "/photos/1787653556_fa7038d6a6c64a091ac8a29584296e39.jpg",
    alt: "十三咖啡室內空間",
    source: "食尚玩家",
    sourceUrl: "https://supertaste.tvbs.com.tw/infocard/33852",
  },
  {
    src: "/photos/1787653192_e8ab6e32099ee6c87fd52169dae7d3d4.jpg",
    alt: "十三咖啡建築細節",
    source: "食尚玩家",
    sourceUrl: "https://supertaste.tvbs.com.tw/infocard/33852",
  },
  {
    src: "/photos/ating-20200924201321_9.jpg",
    alt: "十三咖啡石牆與木作窗框",
    source: "婷玩味生活",
    sourceUrl: "https://ating.tw/13gabee/",
  },
  {
    src: "/photos/ating-20200924192418_77.jpg",
    alt: "十三咖啡庭園一角",
    source: "婷玩味生活",
    sourceUrl: "https://ating.tw/13gabee/",
  },
  {
    src: "/photos/ating-20200924192316_54.jpg",
    alt: "十三咖啡戶外咖啡座",
    source: "婷玩味生活",
    sourceUrl: "https://ating.tw/13gabee/",
  },
  {
    src: "/photos/ating-20200924195146_58.jpg",
    alt: "十三咖啡手沖器具",
    source: "婷玩味生活",
    sourceUrl: "https://ating.tw/13gabee/",
  },
  {
    src: "/photos/ating-20200924192759_51.jpg",
    alt: "十三咖啡環境氛圍",
    source: "婷玩味生活",
    sourceUrl: "https://ating.tw/13gabee/",
  },
];

export const ORDER_STEPS = [
  "無菜單：店內僅提供手沖單品咖啡，不提供餐點、甜點或拿鐵。",
  "入店後選擇座位，由店方依當日豆子為您沖煮。",
  "出發前建議致電確認，或關注 Facebook 粉專了解營業與路況。",
] as const;

export const ROUTE_WARNINGS = [
  "周邊道路施工、路況多變，請出發前查看 Facebook 粉專最新公告。",
  "導航可能繞路；開車建議：環中路五段 → 精誠南路 → 大忠南街。",
  "勿從建國路轉入狹窄小巷，大型車輛難以通行。",
] as const;

export const EXPERIENCE_POINTS = [
  {
    title: "石頭堆砌的秘境空間",
    body: "老闆以廢棄木材、舊建材與石頭親手堆砌建築，戶外庭園與室內木質空間，常被造訪者形容為宮崎駿電影場景般的氛圍。",
  },
  {
    title: "只專注在咖啡本身",
    body: "沒有菜單、沒有甜點搭配。來這裡的人，是為了手沖單品與可以慢下來的片刻。",
  },
  {
    title: "有拍就好，不要一直拍",
    body: "店內提醒「有拍就好，不要一直拍」——空間雖美，但老闆更希望客人把注意力放在咖啡與安靜的氛圍。",
  },
] as const;

export const VISIT_OPTIONS = [
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
] as const;
