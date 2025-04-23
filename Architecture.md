fashion-website/
├── README.md
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
├── public/
│   ├── favicon.ico
│   └── images/            # 放品牌 Logo、商品預覽圖、Banner
├── src/
│   ├── pages/
│   │   ├── _app.tsx        # 全站共用設定
│   │   ├── _document.tsx   # HTML 模板
│   │   ├── index.tsx       # 首頁
│   │   ├── about.tsx       # 關於我們
│   │   ├── products/       # 商品系列頁
│   │   │   ├── index.tsx   # 商品列表
│   │   │   └── [id].tsx    # 單一商品頁
│   │   └── cart.tsx        # 購物車
│   ├── components/         # 共用 React 元件
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── Carousel.tsx
│   │   └── Button.tsx
│   ├── styles/
│   │   └── globals.css     # TailwindBase + 自訂樣式
│   ├── lib/                # 放 API 呼叫、資料模擬
│   │   └── products.ts
│   ├── context/            # React Context (購物車、使用者等)
│   │   └── CartContext.tsx
│   └── utils/              # 工具函式 (格式化、計算等)
│       └── helpers.ts
└── …
