import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Clock, Users, MapPin } from 'lucide-react';
import InternalLinks from '../components/InternalLinks';
import { Language, translations } from '../utils/translations';

interface AboutPageProps {
  navigate: (path: string) => void;
  language: Language;
}

const AboutPage: React.FC<AboutPageProps> = ({ navigate, language }) => {
  const t = translations[language];
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{language === 'ar' ? 'من نحن - شراء الأثاث المستعمل في جدة' : 'About Us - Buy Used Furniture in Jeddah'}</title>
        <meta name="description" content={language === 'ar' ? 'تعرف على شركة شراء الأثاث المستعمل في جدة. نحن متخصصون في شراء جميع أنواع الأثاث المستعمل بأعلى الأسعار مع خدمة نقل مجانية في جدة.' : 'Learn about our used furniture buying company in Jeddah. We specialize in buying all types of used furniture at the best prices with free delivery in Jeddah.'} />
        <meta name="keywords" content={language === 'ar' ? 'من نحن، شراء أثاث مستعمل جدة، شركة شراء أثاث، خدمات شراء الأثاث المستعمل' : 'about us, buy used furniture Jeddah, furniture buying company, used furniture buying services'} />
        <meta property="og:title" content={language === 'ar' ? 'من نحن - شراء الأثاث المستعمل في جدة' : 'About Us - Buy Used Furniture in Jeddah'} />
        <meta property="og:description" content={language === 'ar' ? 'تعرف على شركة شراء الأثاث المستعمل في جدة. نحن متخصصون في شراء جميع أنواع الأثاث المستعمل بأعلى الأسعار.' : 'Learn about our company specializing in buying all types of used furniture at the best prices.'} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'ar' ? 'ar_SA' : 'en_US'} />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/about" />
        <link rel="alternate" hrefLang="ar" href="https://www.athath-jeddah-sa.com/about" />
        <link rel="alternate" hrefLang="en" href="https://www.athath-jeddah-sa.com/about" />
        <link rel="alternate" hrefLang="x-default" href="https://www.athath-jeddah-sa.com/about" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "الرئيسية",
              "item": "https://www.athath-jeddah-sa.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "من نحن",
              "item": "https://www.athath-jeddah-sa.com/about"
            }
          ]
        })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t.aboutTitle}</h1>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6" dangerouslySetInnerHTML={{ __html: t.aboutIntro1 }} />
              <p className="text-xl mb-6" dangerouslySetInnerHTML={{ __html: t.aboutIntro2 }} />
              <p className="text-xl" dangerouslySetInnerHTML={{ __html: t.aboutIntro3 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.aboutValuesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.aboutValuesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.value1Title}</h3>
              <p className="text-gray-600 text-sm">{t.value1Desc}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.value2Title}</h3>
              <p className="text-gray-600 text-sm">{t.value2Desc}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.value3Title}</h3>
              <p className="text-gray-600 text-sm">{t.value3Desc}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.value4Title}</h3>
              <p className="text-gray-600 text-sm">{t.value4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <InternalLinks currentPage="about" navigate={navigate} language={language} />

      {/* CTA Section */}
      <section className="py-16 bg-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t.aboutCtaTitle}
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            {t.aboutCtaText}
          </p>
          <a
            href="https://wa.me/966559781023"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-reverse space-x-3 bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>📱</span>
            <span>{t.contactUsButton}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;