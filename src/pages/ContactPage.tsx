import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, MapPin, Clock } from 'lucide-react';
import InternalLinks from '../components/InternalLinks';
import { Language, translations } from '../utils/translations';

interface ContactPageProps {
  navigate: (path: string) => void;
  language: Language;
}

const ContactPage: React.FC<ContactPageProps> = ({ navigate, language }) => {
  const t = translations[language];
  const isArabic = language === 'ar';
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{isArabic ? 'تواصل معنا - شراء الأثاث المستعمل في جدة' : 'Contact Us - Buy Used Furniture in Jeddah'}</title>
        <meta name="description" content={isArabic ? 'تواصل معنا لشراء الأثاث المستعمل في جدة. نحن متاحون عبر واتساب والهاتف لتقديم أفضل خدمة شراء الأثاث المستعمل بأعلى الأسعار.' : 'Contact us to buy used furniture in Jeddah. We are available via WhatsApp and phone to provide the best used furniture buying service at the highest prices.'} />
        <meta name="keywords" content={isArabic ? 'تواصل معنا، شراء أثاث مستعمل جدة، واتساب، رقم الهاتف، خدمة العملاء' : 'contact us, buy used furniture Jeddah, WhatsApp, phone number, customer service'} />
        <meta property="og:title" content={isArabic ? 'تواصل معنا - شراء الأثاث المستعمل في جدة' : 'Contact Us - Buy Used Furniture in Jeddah'} />
        <meta property="og:description" content={isArabic ? 'تواصل معنا لشراء الأثاث المستعمل في جدة عبر واتساب أو الهاتف.' : 'Contact us to buy used furniture in Jeddah via WhatsApp or phone.'} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={isArabic ? 'ar_SA' : 'en_US'} />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/contact" />
        <link rel="alternate" hrefLang="ar" href="https://www.athath-jeddah-sa.com/contact" />
        <link rel="alternate" hrefLang="en" href="https://www.athath-jeddah-sa.com/contact" />
        <link rel="alternate" hrefLang="x-default" href="https://www.athath-jeddah-sa.com/contact" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "شراء الأثاث المستعمل في جدة",
            "telephone": "+966559781023",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "جدة",
              "addressRegion": "منطقة مكة المكرمة",
              "addressCountry": "SA"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+966559781023",
              "contactType": "customer service",
              "availableLanguage": "Arabic",
              "areaServed": "SA"
            }
          }
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
              "name": "تواصل معنا",
              "item": "https://www.athath-jeddah-sa.com/contact"
            }
          ]
        })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t.contactTitle}</h1>
            <p className="text-xl text-gray-600">
              {t.contactSubtitle}
            </p>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {t.contactDirect}
                </p>
                
                <a
                  href="https://wa.me/966559781023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-reverse space-x-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg w-full justify-center"
                >
                  <span>📱</span>
                  <span>{t.contactViaWhatsapp}</span>
                </a>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    {t.contactVisit}
                  </p>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-emerald-500">
                  <div className="flex items-center space-x-reverse space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{t.footerWhatsapp}</h3>
                      <p className="text-gray-600 dir-ltr">{language === 'ar' ? '+966 55 978 1023' : '+966 55 978 1023'}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-blue-500">
                  <div className="flex items-center space-x-reverse space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{t.contactLocation}</h3>
                      <p className="text-gray-600">{t.footerLocation}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-purple-500">
                  <div className="flex items-center space-x-reverse space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{t.contactWorkingHours}</h3>
                      <p className="text-gray-600">{t.workingTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/athathjeddah(1).webp"
                  alt={language === 'ar' ? t.contactImageAlt : 'Customer service for buying used furniture in Jeddah - we buy all types of furniture and electrical appliances at best prices'}
                  title={language === 'ar' ? 'تواصل معنا لشراء الاثاث المستعمل في جدة - خدمة سريعة ومضمونة' : 'Contact us to buy used furniture in Jeddah - fast and guaranteed service'}
                  loading="lazy"
                  width="800"
                  height="800"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-emerald-500 text-white p-6 rounded-xl shadow-lg">
                <p className="font-medium text-lg">{t.weServeYou}</p>
                <p className="text-sm opacity-90">{t.availableWhatsapp}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.processTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {t.processSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.processStep1Title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.processStep1Desc}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.processStep2Title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.processStep2Desc}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.processStep3Title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.processStep3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <InternalLinks currentPage="contact" navigate={navigate} language={language} />
    </div>
  );
};

export default ContactPage;