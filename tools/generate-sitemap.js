import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const base = 'https://www.athath-jeddah-sa.com';

// قراءة المقالات من posts.ts تلقائياً
let blogPosts = [];
try {
  const postsPath = path.join(process.cwd(), 'src/data/posts.ts');
  const postsContent = fs.readFileSync(postsPath, 'utf8');
  
  // البحث عن كل مقالة وأخذ slug الخاص بها
  const slugMatches = postsContent.match(/slug:\s*['"`]([^'"`]+)['"`]/g);
  if (slugMatches) {
    blogPosts = slugMatches.map(match => {
      const slug = match.match(/slug:\s*['"`]([^'"`]+)['"`]/)[1];
      return `/blog/${slug}`;
    });
  }
} catch (e) {
  console.warn('⚠️ Could not read posts.ts, using default blogs');
}

// قراءة المنشورات من posts-content.ts تلقائياً
let postsContent = [];
try {
  const postsContentPath = path.join(process.cwd(), 'src/data/posts-content.ts');
  const fileContent = fs.readFileSync(postsContentPath, 'utf8');
  
  // البحث عن كل منشور وأخذ slug الخاص به
  const postSlugs = fileContent.match(/slug:\s*['"`]([^'"`]+)['"`]/g);
  if (postSlugs) {
    postsContent = postSlugs.map(match => {
      const slug = match.match(/slug:\s*['"`]([^'"`]+)['"`]/)[1];
      return `/posts/${slug}`;
    });
  }
} catch (e) {
  console.warn('⚠️ Could not read posts-content.ts');
}

const routes = [
  '/',
  '/blog',
  '/posts',
  '/about',
  '/contact',
  '/faq',
  '/bedroom',
  '/kitchen',
  '/livingroom',
  '/privacy',
  '/terms',
  ...blogPosts,
  ...postsContent
];

const urls = routes.map(p => `  <url>
    <loc>${base}${p}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === '/' ? '1.0' : p === '/blog' || p === '/posts' ? '0.9' : '0.8'}</priority>
  </url>`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

const outDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap, 'utf8');
console.log('✅ Sitemap generated: public/sitemap.xml');
