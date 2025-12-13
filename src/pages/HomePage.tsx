import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Truck, Phone, Home } from 'lucide-react';
import InternalLinks from '../components/InternalLinks';
import { Language, translations } from '../utils/translations';

interface HomePageProps {
  navigate: (path: string) => void;
  language: Language;
}

const HomePage: React.FC<HomePageProps> = ({ navigate, language }) => {
  const t = translations[language];
  const features = [
    {
      icon: Home,
      title: t.feature1Title,
      description: t.feature1Desc
    },
    {
      icon: CheckCircle,
      title: t.feature2Title,
      description: t.feature2Desc
    },
    {
      icon: Truck,
      title: t.feature3Title,
      description: t.feature3Desc
    },
    {
      icon: Phone,
      title: t.feature4Title,
      description: t.feature4Desc
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>{language === 'ar' ? 'شراء الأثاث المستعمل في جدة بأعلى الأسعار - خدمة نقل مجانية' : 'Buy Used Furniture in Jeddah at the Best Prices - Free Delivery'}</title>
        <meta name="description" content={language === 'ar' ? 'احصل على أفضل سعر للأثاث المستعمل في جدة! نشتري غرف النوم، الكنب، المكاتب، والأجهزة الكهربائية. تقييم مجاني فوري ونقل مجاني. اتصل الآن 0559781023' : 'Get the best price for used furniture in Jeddah! We buy bedrooms, sofas, desks, and electrical appliances. Free instant appraisal and free delivery. Call now +966 55 978 1023'} />
        <meta name="keywords" content={language === 'ar' ? 'شراء أثاث مستعمل جدة، بيع أثاث، أثاث مستعمل، جدة، المملكة العربية السعودية' : 'buy used furniture Jeddah, sell furniture, used furniture, Jeddah, Saudi Arabia'} />
        <meta property="og:title" content={language === 'ar' ? 'شراء الأثاث المستعمل في جدة بأعلى الأسعار - خدمة نقل مجانية' : 'Buy Used Furniture in Jeddah at the Best Prices - Free Delivery'} />
        <meta property="og:description" content={language === 'ar' ? 'نشتري جميع أنواع الأثاث المستعمل في جدة: غرف النوم، الكنب، المكاتب، الأجهزة الكهربائية والمكيفات بأسعار عادلة. تقييم فوري وخدمة نقل مجانية.' : 'We buy all types of used furniture in Jeddah: bedrooms, sofas, desks, electrical appliances and air conditioners at fair prices. Instant appraisal and free delivery service.'} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'ar' ? 'ar_SA' : 'en_US'} />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/" />
        <link rel="alternate" hrefLang="ar" href="https://www.athath-jeddah-sa.com/" />
        <link rel="alternate" hrefLang="en" href="https://www.athath-jeddah-sa.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.athath-jeddah-sa.com/" />

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
            }
          ]
        })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t.heroMainTitle}
              </h1>
              <div className="space-y-4">
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t.heroParagraph1} <strong className="text-emerald-700">{t.heroParagraph1Bold}</strong> {t.heroParagraph1End}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.heroParagraph2} <strong className="text-emerald-700">{t.heroParagraph2Bold}</strong>{t.heroParagraph2End}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.heroParagraph3} <strong className="text-emerald-600">{t.heroParagraph3Bold}</strong> {t.heroParagraph3Middle} <strong className="text-emerald-600 dir-ltr">{language === 'ar' ? '0559781023' : '+966 55 978 1023'}</strong> {t.heroParagraph3End}
                </p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-lg text-gray-700">{t.heroListItem1}</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-lg text-gray-700">{t.heroListItem2}</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-lg text-gray-700">{t.heroListItem3}</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  <span className="text-lg text-gray-700">{t.heroListItem4}</span>
                </li>
              </ul>

              <a
                href="https://wa.me/966559781023"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-reverse space-x-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>📱</span>
                <span>{t.heroButton}</span>
              </a>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/bedroom-furniture.webp"
                  alt="شراء اثاث مستعمل في جدة - غرفة نوم كاملة مع أجهزة كهربائية | ثلاجة وغسالة وغسالة صحون ودولاب وطاولة وكراسي وستائر بأعلى الأسعار في جدة"
                  title="نشتري الأثاث المستعمل في جدة - غرف نوم وأجهزة كهربائية"
                  loading="eager"
                  width="800"
                  height="800"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-4 rounded-xl shadow-lg">
                <p className="text-sm font-medium">{t.instantAppraisal}</p>
                <p className="text-xs opacity-90">{t.inJeddah}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.whyChooseUs}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.featuresDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* SEO Content Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t.servicesTitle}
            </h3>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="mb-4">
                {t.servicesPara1} <strong className="text-emerald-600">{t.servicesHighlight1}</strong> {t.servicesHighlight1End}
              </p>
              <p className="mb-4">
                {t.servicesPara2Start} <strong className="text-emerald-600">{t.servicesPara2Highlight}</strong> {t.servicesPara2End}
              </p>
              <p>
                {t.servicesPara3Start} <strong className="text-emerald-600">{t.servicesPara3Highlight}</strong> {t.servicesPara3End}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.galleryTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {t.galleryDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/usedfurniture 1.webp"
                  alt={language === 'ar' ? 'شراء غرف نوم مستعملة في جدة - دولاب خشبي وسرير نوم مع كومودينو ومرآة بأعلى الأسعار' : 'Buy used bedrooms in Jeddah - wooden wardrobe and bed with nightstands and mirror at best prices'}
                  title={language === 'ar' ? 'نشتري غرف النوم المستعملة في جدة بأفضل الأسعار' : 'We buy used bedrooms in Jeddah at the best prices'}
                  loading="lazy"
                  width="600"
                  height="600"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">{t.gallery1Title}</h3>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/living-room-furniture.webp"
                  alt={language === 'ar' ? 'شراء كنب مستعمل في جدة - أثاث صالة وكنب رمادي مع طاولة قهوة وسجاد بأعلى الأسعار في جدة' : 'Buy used sofas in Jeddah - living room furniture and gray sofa with coffee table and carpet at best prices'}
                  title={language === 'ar' ? 'نشتري الكنب وأثاث الصالة المستعمل في جدة' : 'We buy used sofas and living room furniture in Jeddah'}
                  loading="lazy"
                  width="600"
                  height="600"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">{t.gallery2Title}</h3>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/kitchen-appliances.webp"
                  alt={language === 'ar' ? 'شراء أثاث مطبخ مستعمل في جدة - دواليب مطبخ وثلاجة وفرن وغسالة صحون ومايكرويف بأعلى الأسعار' : 'Buy used kitchen furniture in Jeddah - kitchen cabinets, refrigerator, oven, dishwasher and microwave at best prices'}
                  title={language === 'ar' ? 'نشتري أثاث المطبخ والأجهزة الكهربائية المستعملة في جدة' : 'We buy used kitchen furniture and electrical appliances in Jeddah'}
                  loading="lazy"
                  width="600"
                  height="600"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">{t.gallery3Title}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <InternalLinks currentPage="home" navigate={navigate} language={language} />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t.faqSectionTitle}</h2>
          <div className="space-y-6">
            {[
              {q: t.faqQuestion1, a: t.faqAnswer1},
              {q: t.faqQuestion2, a: t.faqAnswer2},
              {q: t.faqQuestion3, a: t.faqAnswer3},
              {q: t.faqQuestion4, a: t.faqAnswer4},
              {q: t.faqQuestion5, a: t.faqAnswer5}
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-emerald-700 mb-3">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">{t.areasTitle}</h2>
          <p className="text-xl text-gray-600 text-center mb-10">{t.areasDescription}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {(t.areasList ? (language === 'ar' ? t.areasList.split('، ') : t.areasList.split(', ')) : []).map((area, index) => (
              <div key={index} className="bg-emerald-50 p-4 rounded-lg text-center hover:bg-emerald-100 transition-colors">
                <p className="text-emerald-700 font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t.trustTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {p: t.trustPoint1},
              {p: t.trustPoint2},
              {p: t.trustPoint3},
              {p: t.trustPoint4},
              {p: t.trustPoint5}
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow flex items-start space-x-reverse space-x-3">
                <div className="text-emerald-600 text-2xl flex-shrink-0">✓</div>
                <p className="text-gray-700 font-medium">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            {t.ctaDescription}
          </p>
          <a
            href="https://wa.me/966559781023"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-reverse space-x-3 bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>📱</span>
            <span>{t.heroButton}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
