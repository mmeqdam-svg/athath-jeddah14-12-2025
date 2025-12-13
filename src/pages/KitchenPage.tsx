import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Refrigerator, CheckCircle, Phone, MessageCircle, Wind, Microwave, Zap, Award, TrendingUp, Clock } from 'lucide-react';
import InternalLinks from '../components/InternalLinks';
import { Language, translations } from '../utils/translations';

interface KitchenPageProps {
  navigate: (path: string) => void;
  language: Language;
}

const KitchenPage: React.FC<KitchenPageProps> = ({ navigate, language }) => {
  const t = translations[language];
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>شراء أثاث المطبخ والأجهزة الكهربائية المستعملة في جدة - أثاث</title>
        <meta name="description" content="نشتري أثاث المطبخ والأجهزة الكهربائية المستعملة في جدة: ثلاجات، مكيفات، غسالات، أفران، مايكرويف. تقييم فوري ونقل مجاني. خبرة 15 عام. اتصل 0559781023" />
        <meta name="keywords" content="شراء مكيفات مستعملة جدة، شراء ثلاجات مستعملة، شراء غسالات، أجهزة كهربائية مستعملة، شراء أثاث مطبخ، أفران مستعملة جدة" />
        <meta property="og:title" content="شراء أثاث المطبخ والأجهزة الكهربائية المستعملة في جدة" />
        <meta property="og:description" content="نشتري المكيفات والثلاجات وأجهزة المطبخ المستعملة في جدة بأعلى الأسعار" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_SA" />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/buy-used-kitchen-appliances-jeddah" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "شراء الأجهزة الكهربائية المستعملة",
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
          "description": "نشتري جميع أنواع الأجهزة الكهربائية المستعملة والمكيفات في جدة بأعلى الأسعار"
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
              "name": "شراء أثاث المطبخ والأجهزة الكهربائية",
              "item": "https://www.athath-jeddah-sa.com/buy-used-kitchen-appliances-jeddah"
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
                <Refrigerator className="h-5 w-5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">{t.kitchenSpecialized}</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t.kitchenMainTitle}
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.kitchenIntro1 }} />
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.kitchenIntro2}
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{t.kitchenBenefit1}</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{t.kitchenBenefit2}</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{t.kitchenBenefit3}</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{t.kitchenBenefit4}</span>
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
                  src="/kitchen-appliances.webp"
                  alt={language === 'ar' ? t.kitchenImageAlt : 'Buy used kitchen appliances in Jeddah - refrigerator, oven and microwave at best prices'}
                  title={language === 'ar' ? 'نشتري أجهزة المطبخ الكهربائية المستعملة في جدة' : 'We buy used kitchen electrical appliances in Jeddah'}
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
              {t.kitchenTypesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.kitchenTypesDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wind className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.kitchenType1}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.ac1}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.ac2}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.ac3}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.ac4}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.ac5}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Refrigerator className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.kitchenType2}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.fridge1}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.fridge2}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.fridge3}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.fridge4}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.fridge5}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.kitchenType3}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.washer1}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.washer2}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.washer3}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.washer4}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.washer5}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Microwave className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.kitchenType4}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.oven1}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.oven2}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.oven3}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.oven4}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.oven5}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.kitchenType5}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.small1}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.small2}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.small3}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.small4}</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{t.small5}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Refrigerator className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.kitchenType6}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Kitchen wooden cabinets</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Aluminum cabinets</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Kitchen marble and sink</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Dining tables and chairs</span>
                </li>
                <li className="flex items-start space-x-reverse space-x-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Food storage cabinets</span>
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
              {language === 'ar' ? 'شراء المكيفات المستعملة في جدة بأعلى الأسعار' : 'Buy Used Air Conditioners in Jeddah at Best Prices'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 'المكيفات من أكثر الأجهزة طلباً في السوق - نقدم أفضل الأسعار' : 'Air conditioners are the most demanded appliances in the market - we offer the best prices'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{language === 'ar' ? 'مكيفات السبليت' : 'Split Air Conditioners'}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {language === 'ar' ? 'نشتري مكيفات السبليت بجميع قدراتها من 12,000 وحدة حرارية حتى 36,000 وحدة. نقيّم المكيف بناءً على الماركة، حالة الضاغط، وكفاءة التبريد. المكيفات الموفرة للطاقة (Inverter) تحصل على تقييم أعلى.' : 'We buy split air conditioners of all capacities from 12,000 to 36,000 BTU. We evaluate the AC based on brand, compressor condition, and cooling efficiency. Energy-efficient (Inverter) units get higher ratings.'}
                </p>
                <div className="flex items-center space-x-reverse space-x-2 text-blue-700">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">{language === 'ar' ? 'نقدم خدمة فك وتركيب مجانية' : 'Free disassembly and installation service'}</span>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{language === 'ar' ? 'مكيفات الشباك' : 'Window Air Conditioners'}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {language === 'ar' ? 'المكيفات الشباك لا تزال شائعة في العديد من المنازل والمحلات التجارية. نشتري مكيفات الشباك بمختلف الأحجام والقدرات سواء كانت ساخن/بارد أو بارد فقط. نقيّم المكيف بناءً على حالته العامة وقدرته على التبريد.' : 'Window units are still common in many homes and commercial spaces. We buy window air conditioners of various sizes and capacities whether hot/cold or cooling only. We evaluate based on general condition and cooling performance.'}
                </p>
                <div className="flex items-center space-x-reverse space-x-2 text-blue-700">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">{language === 'ar' ? 'نشتري المكيفات حتى لو كانت تحتاج صيانة بسيطة' : 'We buy AC units even if they need simple maintenance'}</span>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-3">{t.brandsWeBuy}</h4>
                <div className="grid grid-cols-2 gap-3 text-gray-700">
                  <div className="flex items-center space-x-reverse space-x-2">
                    <span className="text-emerald-500">✓</span>
                    <span>LG</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Samsung</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Gree</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Carrier</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Midea</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <span className="text-emerald-500">✓</span>
                    <span>TCL</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white">
                <Wind className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{language === 'ar' ? 'عوامل تقييم المكيفات' : 'AC Evaluation Factors'}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-reverse space-x-3">
                    <TrendingUp className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">{language === 'ar' ? 'العمر والحالة' : 'Age and Condition'}</p>
                      <p className="text-blue-100 text-sm">{language === 'ar' ? 'المكيفات الأحدث والمحافظ عليها تحصل على سعر أعلى' : 'Newer and well-maintained units get higher prices'}</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-reverse space-x-3">
                    <Award className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">{language === 'ar' ? 'الماركة والجودة' : 'Brand and Quality'}</p>
                      <p className="text-blue-100 text-sm">{language === 'ar' ? 'الماركات العالمية المعروفة تحصل على تقييم أفضل' : 'Well-known international brands get better ratings'}</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-reverse space-x-3">
                    <Zap className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">{language === 'ar' ? 'كفاءة الطاقة' : 'Energy Efficiency'}</p>
                      <p className="text-blue-100 text-sm">{language === 'ar' ? 'المكيفات الموفرة (Inverter) أغلى في السعر' : 'Energy-efficient (Inverter) models cost more'}</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-reverse space-x-3">
                    <Clock className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">{language === 'ar' ? 'سرعة الخدمة' : 'Service Speed'}</p>
                      <p className="text-blue-100 text-sm">{language === 'ar' ? 'نشتري ونزيل المكيف في نفس اليوم' : 'We buy and remove AC same day'}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">{language === 'ar' ? 'نشتري المكيفات حتى لو كانت' : 'We Buy AC Even If'}</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-reverse space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>{language === 'ar' ? 'تحتاج إلى تنظيف' : 'Needs cleaning'}</span>
                  </li>
                  <li className="flex items-start space-x-reverse space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>{language === 'ar' ? 'تحتاج إلى إعادة تعبئة فريون' : 'Needs refrigerant refill'}</span>
                  </li>
                  <li className="flex items-start space-x-reverse space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>{language === 'ar' ? 'بها أعطال بسيطة يمكن إصلاحها' : 'Has minor fixable faults'}</span>
                  </li>
                  <li className="flex items-start space-x-reverse space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>{language === 'ar' ? 'قديمة لكن تعمل بشكل جيد' : 'Old but working well'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.kitchenProcessTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.kitchenProcessDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.step1}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.step1Desc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.step2}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.step2Desc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.step3}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.step3Desc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.step4}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.step4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.kitchenFaqTitle}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.kitchenFaq1Q}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.kitchenFaq1A}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.kitchenFaq2Q}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.kitchenFaq2A}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.kitchenFaq3Q}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.kitchenFaq3A}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.kitchenFaq4Q}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.kitchenFaq4A}
              </p>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks currentPage="kitchen" navigate={navigate} language={language} />

      <section className="py-20 bg-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t.kitchenCtaTitle}
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            {t.kitchenCtaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/966559781023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-reverse space-x-3 bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{t.sendAppliancePhotos}</span>
            </a>
            <a
              href="tel:+966559781023"
              className="inline-flex items-center justify-center space-x-reverse space-x-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="h-5 w-5" />
              <span>{t.callNowAppliances}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitchenPage;
