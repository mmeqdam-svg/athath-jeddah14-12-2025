import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Bed, CheckCircle, Phone, MessageCircle, Clock, TrendingUp, Award, Shield, DollarSign } from 'lucide-react';
import InternalLinks from '../components/InternalLinks';
import { Language, translations } from '../utils/translations';

interface BedroomPageProps {
  navigate: (path: string) => void;
  language: Language;
}

const BedroomPage: React.FC<BedroomPageProps> = ({ navigate, language }) => {
  const t = translations[language];
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>شراء غرف النوم المستعملة في جدة بأعلى الأسعار - أثاث جدة</title>
        <meta name="description" content="نشتري غرف النوم المستعملة في جدة بأفضل الأسعار. خبرة 15 عام في تقييم وشراء غرف النوم الخشبية والمودرن. تقييم فوري ونقل مجاني. اتصل الآن 0559781023" />
        <meta name="keywords" content="شراء غرف نوم مستعملة جدة، بيع غرفة نوم، غرف نوم خشب، غرف نوم مودرن، أثاث غرف النوم المستعمل، محلات شراء غرف النوم جدة" />
        <meta property="og:title" content="شراء غرف النوم المستعملة في جدة بأعلى الأسعار" />
        <meta property="og:description" content="نشتري غرف النوم المستعملة في جدة بأفضل الأسعار. خبرة 15 عام في تقييم وشراء غرف النوم." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_SA" />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/buy-used-bedroom-furniture-jeddah" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "شراء غرف النوم المستعملة",
          "provider": {
            "@type": "LocalBusiness",
            "name": "أثاث جدة - لشراء الأثاث المستعمل في جدة",
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
          "description": "نشتري غرف النوم المستعملة في جدة بأعلى الأسعار مع خدمة تقييم مجانية ونقل فوري"
        })}
        </script>

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
              "name": "شراء غرف النوم المستعملة",
              "item": "https://www.athath-jeddah-sa.com/buy-used-bedroom-furniture-jeddah"
            }
          ]
        })}
        </script>
      </Helmet>

      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-reverse space-x-2 bg-emerald-100 px-4 py-2 rounded-full">
                <Bed className="h-5 w-5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">{t.bedroomSpecialized}</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t.bedroomMainTitle}
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-gray-600 leading-relaxed">
                  <strong className="text-emerald-600">{language === 'ar' ? 'أثاث جدة' : 'Athath Jeddah'}</strong> {language === 'ar' ? 'هي وجهتك المثالية لبيع غرف النوم المستعملة في جدة. مع خبرة تمتد لأكثر من' : 'is your ideal destination for selling used bedrooms in Jeddah. With experience extending beyond'} <strong className="text-emerald-600">15 {language === 'ar' ? 'عاماً' : 'years'}</strong> {language === 'ar' ? 'في تقييم وشراء الأثاث المستعمل، نضمن لك الحصول على أفضل سعر لغرفة نومك.' : 'in evaluating and buying used furniture, we guarantee you the best price for your bedroom.'}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {language === 'ar' ? 'نشتري جميع أنواع غرف النوم المستعملة بما في ذلك غرف النوم الخشبية الفاخرة، غرف النوم المودرن، الغرف الكلاسيكية، وغرف نوم الأطفال. سواء كانت غرفة نومك كاملة أو أجزاء منها، نحن نقدم لك تقييماً عادلاً وفورياً خلال دقائق من تواصلك معنا.' : 'We buy all types of used bedrooms including luxury wooden bedrooms, modern bedrooms, classic rooms, and children\'s bedrooms. Whether your bedroom is complete or in parts, we offer you fair and instant appraisal within minutes of your contact.'}
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{t.bedroomBenefit1}</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{t.bedroomBenefit2}</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{t.bedroomBenefit3}</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{t.bedroomBenefit4}</span>
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
                  <span>{language === 'ar' ? t.callNow : 'Call Now: 0559781023'}</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/usedfurniture 1.webp"
                  alt={t.bedroomImageAlt}
                  title={language === 'ar' ? 'نشتري غرف النوم المستعملة في جدة' : 'We buy used bedrooms in Jeddah'}
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
              {t.bedroomTypesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.bedroomTypesDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.bedroomType1}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.wood1}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.wood2}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.wood3}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.wood4}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.bedroomType2}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.modern1}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.modern2}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.modern3}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.modern4}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.bedroomType3}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.piece1}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.piece2}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.piece3}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.piece4}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.bedroomEvalTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.bedroomEvalDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t.bedroomEval1}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t.bedroomEval1Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t.bedroomEval2}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t.bedroomEval2Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t.bedroomEval3}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t.bedroomEval3Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t.bedroomEval4}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t.bedroomEval4Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">{t.bedroomWhyTitle}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-reverse space-x-3">
                    <Award className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">{t.bedroomWhy1}</p>
                      <p className="text-emerald-100 text-sm">{t.bedroomWhy1Desc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-reverse space-x-3">
                    <DollarSign className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">{t.bedroomWhy2}</p>
                      <p className="text-emerald-100 text-sm">{t.bedroomWhy2Desc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-reverse space-x-3">
                    <Clock className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">{t.bedroomWhy3}</p>
                      <p className="text-emerald-100 text-sm">{t.bedroomWhy3Desc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-reverse space-x-3">
                    <Shield className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">{t.bedroomWhy4}</p>
                      <p className="text-emerald-100 text-sm">{t.bedroomWhy4Desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">{t.bedroomFreeAppraisal}</h4>
                <p className="text-gray-700 mb-4">
                  {t.bedroomFreeAppraisalText}
                </p>
                <a
                  href="https://wa.me/966559781023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  {t.sendBedroomPhotos}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.bedroomStepsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.bedroomStepsDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.bedroomStep1}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.bedroomStep1Desc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.bedroomStep2}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.bedroomStep2Desc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.bedroomStep3}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.bedroomStep3Desc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.bedroomStep4}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.bedroomStep4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.bedroomFaqTitle}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.bedroomFaq1Q}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.bedroomFaq1A}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.bedroomFaq2Q}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.bedroomFaq2A}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.bedroomFaq3Q}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.bedroomFaq3A}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.bedroomFaq4Q}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.bedroomFaq4A}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.bedroomFaq5Q}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.bedroomFaq5A}
              </p>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks currentPage="bedroom" navigate={navigate} language={language} />

      <section className="py-20 bg-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t.bedroomCtaTitle}
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            {t.bedroomCtaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/966559781023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-reverse space-x-3 bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{t.sendBedroomPhotosNow}</span>
            </a>
            <a
              href="tel:+966559781023"
              className="inline-flex items-center justify-center space-x-reverse space-x-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="h-5 w-5" />
              <span>{t.callNowBedroom}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BedroomPage;
