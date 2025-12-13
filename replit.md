# Athath Jeddah - Used Furniture Buying Service

## Overview
This is a React + Vite + TypeScript website for a used furniture buying service in Jeddah, Saudi Arabia. The website is in Arabic (RTL layout) and provides information about buying various types of used furniture including bedroom sets, living room furniture, kitchen appliances, and more.

## Tech Stack
- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **SEO**: react-helmet-async

## Project Structure
```
├── public/           # Static assets (images, icons, sitemap, robots.txt)
├── src/
│   ├── components/   # Reusable React components (Header, ContactButtons, Footer, etc.)
│   ├── data/         # Content data files
│   │   └── posts.ts              # 13 blog articles (SEO-optimized guides)
│   ├── pages/        # Page components
│   │   ├── HomePage.tsx
│   │   ├── BlogPage.tsx          # Blog with 13 articles
│   │   ├── PostPage.tsx          # Individual blog post
│   │   ├── ContactPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── FAQPage.tsx
│   │   ├── BedroomPage.tsx
│   │   ├── KitchenPage.tsx
│   │   ├── LivingroomPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── AdminDashboard.tsx
│   │   ├── PrivacyPage.tsx
│   │   └── TermsPage.tsx
│   ├── utils/        # Utility functions (slugify)
│   ├── App.tsx       # Main app component with client-side routing
│   ├── main.tsx      # App entry point
│   └── routes.ts     # Route definitions
├── tools/            # Build scripts (sitemap generation, image optimization)
└── vite.config.ts    # Vite configuration
```

## Development Setup
The app runs on port 5000 with host 0.0.0.0 to work with Replit's proxy system.

### Running the App
- **Development**: `npm run dev` (runs on http://0.0.0.0:5000)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

### Scripts
- `npm run generate:sitemap` - Generates sitemap.xml with all routes
- `npm run optimize:images` - Optimizes images using Sharp
- `npm run lint` - Runs ESLint

## Deployment
The app is configured for static deployment:
- Build command: `npm run build`
- Output directory: `dist`
- Deployment type: Static (Netlify/GitHub Pages)

## Features

### Content Structure
- **Blog Section** (`/blog`): 13 comprehensive SEO-optimized articles
  - دليل شامل لشراء غرف النوم المستعملة في جدة 2025
  - أفضل طرق شراء الكنب المستعمل في جدة
  - شراء المكيفات والأجهزة الكهربائية
  - 5 أخطاء تجنبها عند بيع أثاثك المستعمل
  - أنواع الأثاث المستعمل الأكثر طلباً
  - الحفاظ على قيمة الأثاث المستعمل
  - الفرق بين الأثاث الأصلي والمقلد
  - خدمة النقل والفك المجانية
  - تقييم الأثاث المستعمل
  - شراء الثلاجات والأجهزة الكهربائية
  - شراء الغسالات والمجففات
  - شراء الأثاث المكتبي
  - شراء الأرائك الفاخرة
  - أسعار الأثاث المستعمل في جدة 2025

### Navigation & Routing
- Client-side routing with custom implementation
- English URL slugs with Arabic content (RTL)
- Active route highlighting in header
- Header navigation includes:
  - Home (الرئيسية)
  - About (من نحن)
  - Blog (المدونة) - 13 articles
  - FAQ (الأسئلة الشائعة)
  - Contact (تواصل معنا)

### SEO Optimization
- Article Schema (JSON-LD) for all blog posts
- Open Graph tags for social sharing
- Twitter Card tags
- Meta tags and canonical URLs
- Sitemap and robots.txt (auto-updated)
- Auto-generated sitemap with all routes including `/posts`

### Design & UX
- Responsive design with Tailwind CSS
- RTL (Right-to-Left) layout for Arabic content
- Blue accent color for Posts section (different from green Blog)
- Featured images (16:9 aspect ratio) with lazy loading
- Professional typography and spacing
- Call-to-Action buttons (WhatsApp + Phone)
- Footer with NAP (Name, Address, Phone)

### Accessibility
- aria-labels on Contact Buttons (WhatsApp, Phone)
- aria-hidden on decorative icons
- Semantic HTML structure
- Proper heading hierarchy (H1 unique per page)
- Color contrast optimized (text-emerald-700 on white)

## Recent Changes (December 13, 2025)

### Website Cleanup & Optimization
- ✅ Removed Posts section (merged into Blog) - deleted PostsPage.tsx, PostContentPage.tsx, posts-content.ts
- ✅ Replaced all external Unsplash image URLs with local webp images
- ✅ Updated sitemap.xml to remove /posts URLs
- ✅ Added missing readyToSellTitle translation key to English
- ✅ All 13 blog articles with 800+ word SEO-optimized content
- ✅ Local images: bedroom-furniture.webp, living-room-furniture.webp, kitchen-appliances.webp, usedfurniture 1.webp, athathjeddah(1).webp

## Data Model

### Blog Post Structure (posts.ts)
```typescript
type Post = {
  id: string;
  title: string;
  slug: string;
  titleTag: string;      // SEO Title (max 60 chars)
  metaDescription: string; // SEO Description (max 160 chars)
  excerpt: string;
  content: string;        // HTML content with h2, h3, ul, ol, etc
  category: string;
  datePublished: string;  // ISO 8601
  dateModified: string;   // ISO 8601
  author: string;
  keywords: string[];
  image: string;          // Featured image URL
  imageAlt: string;       // Alt text
}
```

### Posts Content Structure (posts-content.ts)
- Same structure as blog posts
- Different content (customer stories, tips, guides)
- Separate data file to keep content independent
- Can be managed separately from blog

## Contact Info
- **Business Name**: أثاث جدة (Athath Jeddah)
- **Phone**: 0559781023
- **WhatsApp**: 0559781023
- **Location**: جدة, المملكة العربية السعودية
- **Website**: athath-jeddah-sa.com

## Next Steps (Optional Future Enhancements)
1. Admin dashboard for blog/posts management
2. Image optimization pipeline
3. Performance monitoring with Lighthouse
4. Additional blog/posts content expansion
5. Email newsletter integration
6. Analytics tracking (Google Analytics)

## Testing Checklist
- ✅ All pages have exactly one H1 tag
- ✅ All internal links use client-side routing
- ✅ Blog articles display properly formatted content
- ✅ Posts pages display distinct content from blog
- ✅ Featured images load with lazy loading
- ✅ SEO tags present and valid on all pages
- ✅ RTL layout working correctly
- ✅ Responsive design verified
- ✅ Header navigation highlights active page
- ✅ Sitemap auto-generates with all routes
