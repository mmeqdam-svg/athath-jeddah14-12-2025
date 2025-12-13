import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Sofa, CheckCircle, Phone, MessageCircle, TrendingUp, Award, Clock, Zap } from 'lucide-react';
import InternalLinks from '../components/InternalLinks';
import { Language, translations } from '../utils/translations';

interface LivingroomPageProps {
  navigate: (path: string) => void;
  language: Language;
}

const LivingroomPage: React.FC<LivingroomPageProps> = ({ navigate, language }) => {
  const t = translations[language];
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>شراء كنب وأثاث الصالة المستعمل في جدة بأعلى الأسعار - أثاث</title>
        <meta name="description" content="نشتري الكنب والأثاث المنزلي المستعمل في جدة: كنب فاخر، كراسي جلوس، طاولات قهوة، ستائر. تقييم فوري ونقل مجاني. خبرة 15 عام. اتصل 0559781023" />
        <meta name="keywords" content="شراء كنب مستعمل جدة، بيع كنب، أثاث صالة مستعمل، كنب جلد، كنب ستائر، مجموعات جلوس مستعملة جدة" />
        <meta property="og:title" content="شراء كنب وأثاث الصالة المستعمل في جدة بأعلى الأسعار" />
        <meta property="og:description" content="نشتري الكنب والأثاث المنزلي المستعمل في جدة بأفضل الأسعار مع خدمة نقل مجانية" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_SA" />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/buy-used-livingroom-sofas-jeddah" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "شراء الكنب والأثاث المنزلي المستعمل",
          "provider": {
            "@type": "LocalBusiness",
            "name": "أثاث جدة- لشراء الأثاث المستعمل في جدة",
            "telephone": "+966559781023",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "جدة",
              "addressRegion": "منطقة مكة المكرمة",
              "addressCountry": "SA"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "جدة"
          },
          "description": "نشتري الكنب وأثاث الصالة والمنزل المستعمل في جدة بأعلى الأسعار"
        })}
        </script>
      </Helmet>

      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-reverse space-x-2 bg-emerald-100 px-4 py-2 rounded-full">
                <Sofa className="h-5 w-5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">{t.livingroomSpecialized}</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t.livingroomMainTitle}
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.livingroomIntro1 }} />
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.livingroomIntro2}
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{t.livingroomBenefit1}</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{t.livingroomBenefit2}</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{t.livingroomBenefit3}</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{t.livingroomBenefit4}</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/966559781023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-reverse space-x-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>{t.whatsappQuickAppraisal}</span>
                </a>
                <a
                  href="tel:+966559781023"
                  className="inline-flex items-center justify-center space-x-reverse space-x-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Phone className="h-5 w-5" />
                  <span>{t.callNow}</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/living-room-furniture.webp"
                  alt={language === 'ar' ? t.livingroomImageAlt : 'Buy used sofas in Jeddah - luxury leather sofa at best prices'}
                  title={language === 'ar' ? 'نشتري الكنب والأثاث المنزلي المستعمل في جدة' : 'We buy used sofas and home furniture in Jeddah'}
                  loading="eager"
                  width="800"
                  height="800"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm opacity-90">{t.yearsExperience}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.livingroomTypesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.livingroomTypesDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Sofa className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.livingroomType1}</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• {t.leather1}</li>
                <li>• {t.leather2}</li>
                <li>• {t.leather3}</li>
                <li>• {t.leather4}</li>
                <li>• {t.leather5}</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Sofa className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.livingroomType2}</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• {t.fabric1}</li>
                <li>• {t.fabric2}</li>
                <li>• {t.fabric3}</li>
                <li>• {t.fabric4}</li>
                <li>• {t.fabric5}</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Sofa className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.livingroomType3}</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• {t.classic1}</li>
                <li>• {t.classic2}</li>
                <li>• {t.classic3}</li>
                <li>• {t.classic4}</li>
                <li>• {t.classic5}</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.livingroomType4}</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• {t.chair1}</li>
                <li>• {t.chair2}</li>
                <li>• {t.chair3}</li>
                <li>• {t.chair4}</li>
                <li>• {t.chair5}</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Zap className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.livingroomType5}</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• {t.table1}</li>
                <li>• {t.table2}</li>
                <li>• {t.table3}</li>
                <li>• {t.table4}</li>
                <li>• {t.table5}</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <TrendingUp className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.livingroomType6}</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• {t.curtain1}</li>
                <li>• {t.curtain2}</li>
                <li>• {t.curtain3}</li>
                <li>• {t.curtain4}</li>
                <li>• {t.curtain5}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.livingroomEvalTitle}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-xl border-r-4 border-emerald-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.evalMaterial}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.evalMaterialDesc}
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl border-r-4 border-emerald-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.evalCondition}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.evalConditionDesc}
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl border-r-4 border-emerald-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.evalDesign}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.evalDesignDesc}
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl border-r-4 border-emerald-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.evalBrand}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.evalBrandDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.livingroomFaqTitle}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.livingroomFaq1Q}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.livingroomFaq1A}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.livingroomFaq2Q}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.livingroomFaq2A}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.livingroomFaq3Q}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.livingroomFaq3A}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.livingroomFaq4Q}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.livingroomFaq4A}
              </p>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks currentPage="livingroom" navigate={navigate} language={language} />

      <section className="py-20 bg-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t.livingroomCtaTitle}
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            {t.livingroomCtaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/966559781023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-reverse space-x-3 bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{t.sendFurniturePhotos}</span>
            </a>
            <a
              href="tel:+966559781023"
              className="inline-flex items-center justify-center space-x-reverse space-x-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="h-5 w-5" />
              <span>{t.callNowPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LivingroomPage;
