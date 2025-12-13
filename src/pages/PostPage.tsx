import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Post } from '../data/posts';
import { Language } from '../utils/translations';

type PostPageProps = {
  slug: string;
  navigate?: (path: string) => void;
  posts: Post[];
  language: Language;
};

const PostPage: React.FC<PostPageProps> = ({ slug, navigate, posts, language }) => {
  const post = posts.find(p => p.slug === slug);
  if (!post) {
    return <div className="max-w-4xl mx-auto py-12"><h1>{language === 'ar' ? 'المقال غير موجود' : 'Article not found'}</h1></div>;
  }

  const isArabic = language === 'ar';
  const content = language === 'ar' 
    ? post.content 
    : (post.contentEn || post.content);

  // الحصول على مقالات ذات صلة من نفس الفئة أو عشوائية
  const relatedPosts = posts
    .filter(p => p.id !== post.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const fullUrlAr = `https://www.athath-jeddah-sa.com/ar/blog/${post.slug}`;
  const fullUrlEn = `https://www.athath-jeddah-sa.com/en/blog/${post.slug}`;
  const canonical = language === 'ar' ? fullUrlAr : fullUrlEn;
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": isArabic ? post.title : post.titleEn || post.title,
    "description": isArabic ? post.excerpt : post.excerptEn || post.excerpt,
    "url": canonical,
    "image": [post.image],
    "thumbnailUrl": post.image,
    "author": {
      "@type": "Person",
      "name": isArabic ? post.author : post.authorEn || post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": isArabic ? "أثاث جدة" : "Athath Jeddah",
      "url": "https://www.athath-jeddah-sa.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.athath-jeddah-sa.com/favicon-192x192.png",
        "width": 192,
        "height": 192
      }
    },
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical
    },
    "keywords": isArabic ? post.keywords.join(', ') : post.keywords.join(', '),
    "articleSection": isArabic ? post.category : post.categoryEn || post.category,
    "inLanguage": isArabic ? "ar-SA" : "en-US"
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Helmet>
        <title>{isArabic ? `${post.titleTag} - أثاث جدة` : `${post.titleEn || post.title} - Athath Jeddah`}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        
        <meta property="og:title" content={isArabic ? post.titleTag : post.titleEn || post.title} />
        <meta property="og:description" content={isArabic ? post.metaDescription : post.excerptEn || post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content={isArabic ? "أثاث جدة" : "Athath Jeddah"} />
        <meta property="og:locale" content={isArabic ? "ar_SA" : "en_US"} />
        <meta property="og:image" content={post.image} />
        <meta property="og:image:alt" content={isArabic ? post.imageAlt : post.imageAltEn || post.imageAlt} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@athath_jeddah" />
        <meta name="twitter:title" content={isArabic ? post.titleTag : post.titleEn || post.title} />
        <meta name="twitter:description" content={isArabic ? post.metaDescription : post.excerptEn || post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <meta name="twitter:image:alt" content={isArabic ? post.imageAlt : post.imageAltEn || post.imageAlt} />
        
        <meta property="article:published_time" content={post.datePublished} />
        <meta property="article:modified_time" content={post.dateModified} />
        <meta property="article:author" content={isArabic ? post.author : post.authorEn || post.author} />
        <meta property="article:section" content={isArabic ? post.category : post.categoryEn || post.category} />
        {post.keywords.map(keyword => (
          <meta key={keyword} property="article:tag" content={keyword} />
        ))}
        
        <link rel="canonical" href={canonical} />
        
        <link rel="alternate" hrefLang="ar" href={fullUrlAr} />
        <link rel="alternate" hrefLang="en" href={fullUrlEn} />
        <link rel="alternate" hrefLang="x-default" href={fullUrlAr} />
        
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <article className="bg-white rounded-lg shadow-sm p-8">
        <header className="mb-8 border-b pb-6">
          <div className="text-emerald-600 font-medium text-sm mb-2">{isArabic ? post.category : post.categoryEn || post.category}</div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{isArabic ? post.title : post.titleEn || post.title}</h1>
          <div className="flex items-center text-sm text-gray-600 space-x-reverse space-x-4">
            <span>{isArabic ? 'بواسطة' : 'By'} {isArabic ? post.author : post.authorEn || post.author}</span>
            <span>•</span>
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString(isArabic ? 'ar-SA' : 'en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
          </div>
        </header>
        
        <div 
          className="prose prose-lg max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-ul:list-disc prose-ul:mr-6 prose-ul:mb-4
            prose-ol:list-decimal prose-ol:mr-6 prose-ol:mb-4
            prose-li:text-gray-700 prose-li:mb-2
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: content }} 
        />
        
        <footer className="mt-12 pt-8 border-t">
          <div className="bg-emerald-50 rounded-lg p-6 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {isArabic ? 'هل تريد بيع أثاثك المستعمل؟' : 'Want to Sell Your Used Furniture?'}
            </h3>
            <p className="text-gray-700 mb-4">
              {isArabic ? 'احصل على أفضل سعر لأثاثك المستعمل في جدة مع خدمة تقييم مجانية ونقل مجاني' : 'Get the best price for your used furniture in Jeddah with free appraisal and moving service'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/966559781023"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition"
                aria-label={isArabic ? 'تواصل معنا عبر واتساب' : 'Contact us via WhatsApp'}
              >
                {isArabic ? 'واتساب: 0559781023' : 'WhatsApp: 0559781023'}
              </a>
              <a
                href="tel:+966559781023"
                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition"
                aria-label={isArabic ? 'اتصل بنا' : 'Call us'}
              >
                {isArabic ? 'اتصل الآن' : 'Call Now'}
              </a>
            </div>
          </div>

          {/* مقالات ذات صلة */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{isArabic ? 'مقالات ذات صلة' : 'Related Articles'}</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map(relatedPost => (
                  <article
                    key={relatedPost.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    onClick={() => navigate?.(`/blog/${relatedPost.slug}`)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.imageAlt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-2 py-1 text-xs font-semibold text-emerald-600 bg-emerald-100 rounded">
                          {isArabic ? relatedPost.category : relatedPost.categoryEn || relatedPost.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight hover:text-emerald-600 transition-colors line-clamp-2">
                        {isArabic ? relatedPost.title : relatedPost.titleEn || relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {isArabic ? relatedPost.excerpt : relatedPost.excerptEn || relatedPost.excerpt}
                      </p>
                      <button
                        onClick={() => navigate?.(`/blog/${relatedPost.slug}`)}
                        className="text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors"
                      >
                        {isArabic ? 'اقرأ المزيد →' : 'Read More →'}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </footer>
      </article>
    </div>
  );
};

export default PostPage;