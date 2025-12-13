import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Post } from '../data/posts';
import { Language, translations } from '../utils/translations';

type BlogPageProps = {
  navigate: (path: string) => void;
  posts: Post[];
  language: Language;
};

const BlogPage: React.FC<BlogPageProps> = ({ navigate, posts, language }) => {
  const t = translations[language];
  const isArabic = language === 'ar';
  
  const fullUrlAr = `https://www.athath-jeddah-sa.com/ar/blog`;
  const fullUrlEn = `https://www.athath-jeddah-sa.com/en/blog`;
  const canonical = isArabic ? fullUrlAr : fullUrlEn;
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Helmet>
        <title>{isArabic ? 'المدونة - نصائح ودليل شراء الأثاث المستعمل في جدة' : 'Blog - Tips and Guide for Buying Used Furniture in Jeddah'}</title>
        <meta name="description" content={isArabic ? 'اقرأ أحدث المقالات والنصائح حول شراء وبيع الأثاث المستعمل في جدة. دليل شامل للأسعار، أنواع الأثاث، والمزيد من المحتوى المفيد' : 'Read the latest articles and tips about buying and selling used furniture in Jeddah. Comprehensive guide on prices, furniture types, and more useful content'} />
        <meta name="keywords" content={isArabic ? 'مدونة أثاث جدة، نصائح بيع الأثاث، دليل الأسعار، شراء أثاث مستعمل' : 'Jeddah furniture blog, furniture selling tips, price guide, buy used furniture'} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="ar" href={fullUrlAr} />
        <link rel="alternate" hrefLang="en" href={fullUrlEn} />
        <link rel="alternate" hrefLang="x-default" href={fullUrlAr} />
      </Helmet>

      <div className="mb-12 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t.blog}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {isArabic 
            ? 'نصائح، أدلة، وأحدث المعلومات حول شراء وبيع الأثاث المستعمل في جدة'
            : 'Tips, guides, and latest information about buying and selling used furniture in Jeddah'}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <article 
            key={post.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => navigate(`/blog/${post.slug}`)}
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={post.image} 
                alt={isArabic ? post.imageAlt : post.imageAltEn || post.imageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-600 bg-emerald-100 rounded-full">
                  {isArabic ? post.category : post.categoryEn || post.category}
                </span>
                <time className="text-sm text-gray-500" dateTime={post.datePublished}>
                  {new Date(post.datePublished).toLocaleDateString(isArabic ? 'ar-SA' : 'en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-emerald-600 transition-colors">
                {isArabic ? post.title : post.titleEn || post.title}
              </h2>
              
              <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                {isArabic ? post.excerpt : post.excerptEn || post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{t.by} {isArabic ? post.author : post.authorEn || post.author}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/blog/${post.slug}`);
                  }}
                  className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors inline-flex items-center"
                >
                  {t.readMore}
                  <svg className={`w-4 h-4 ${isArabic ? 'mr-1' : 'ml-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-emerald-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {t.wantToSell}
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          {t.getFreeEstimate}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/966559781023"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition"
            aria-label={isArabic ? 'تواصل معنا عبر واتساب' : 'Contact us via WhatsApp'}
          >
            {t.whatsappButton}
          </a>
          <a
            href="tel:+966559781023"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition"
            aria-label={isArabic ? 'اتصل بنا' : 'Call us'}
          >
            {isArabic ? 'اتصل الآن' : 'Call Now'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;