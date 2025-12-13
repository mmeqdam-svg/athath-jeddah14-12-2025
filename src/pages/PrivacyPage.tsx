import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';
import { Language, translations } from '../utils/translations';

type PrivacyPageProps = {
  language: Language;
};

const PrivacyPage: React.FC<PrivacyPageProps> = ({ language }) => {
  const t = translations[language];
  const isArabic = language === 'ar';
  
  const privacyContent = {
    ar: {
      title: 'سياسة الخصوصية',
      intro: 'مقدمة',
      intro_text: 'في أثاث، نحن نقدّر خصوصيتك ونلتزم بحماية بيانات العملاء الشخصية. تشرح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك عند التعامل معنا.',
      section1: '1. المعلومات التي نجمعها',
      section1_text: 'نقوم بجمع المعلومات التالية:',
      section2: '2. كيفية استخدام البيانات',
      section2_text: 'نستخدم معلوماتك الشخصية للأغراض التالية:',
      section3: '3. حماية البيانات',
      section3_text: 'نتخذ تدابير أمنية مناسبة لحماية بيانات عملائنا من الوصول غير المصرح والتغيير والإفصاح. جميع المعلومات الحساسة يتم التعامل معها بسرية تامة.',
      section4: '4. مشاركة البيانات',
      section4_text: 'لا نشارك بيانات عملائنا الشخصية مع أطراف ثالثة إلا في الحالات التالية:',
      section5: '5. حقوقك',
      section5_text: 'لديك الحقوق التالية:',
      section6: '6. اتصل بنا',
      section6_text: 'إذا كان لديك أسئلة حول سياسة الخصوصية أو خصوصيتك، يرجى التواصل معنا على:',
      footer: 'تخضع هذه السياسة للقوانين المعمول بها في المملكة العربية السعودية. نحتفظ بالحق في تحديث هذه السياسة في أي وقت. سيتم إخطارك بأي تغييرات جوهرية.'
    },
    en: {
      title: 'Privacy Policy',
      intro: 'Introduction',
      intro_text: 'At Athath, we value your privacy and are committed to protecting customer personal data. This privacy policy explains how we collect, use, and protect your information when dealing with us.',
      section1: '1. Information We Collect',
      section1_text: 'We collect the following information:',
      section2: '2. How We Use Your Data',
      section2_text: 'We use your personal information for the following purposes:',
      section3: '3. Data Protection',
      section3_text: 'We take appropriate security measures to protect our customer data from unauthorized access, alteration, and disclosure. All sensitive information is handled with complete confidentiality.',
      section4: '4. Data Sharing',
      section4_text: 'We do not share our customer\'s personal data with third parties except in the following cases:',
      section5: '5. Your Rights',
      section5_text: 'You have the following rights:',
      section6: '6. Contact Us',
      section6_text: 'If you have questions about this privacy policy or your privacy, please contact us at:',
      footer: 'This policy is subject to the laws applicable in the Kingdom of Saudi Arabia. We reserve the right to update this policy at any time. You will be notified of any material changes.'
    }
  };

  const content = privacyContent[language];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{isArabic ? 'سياسة الخصوصية - أثاث جدة' : 'Privacy Policy - Athath Jeddah'}</title>
        <meta name="description" content={isArabic ? 'سياسة الخصوصية لموقع أثاث جدة - نحرص على حماية بيانات عملائنا' : 'Privacy Policy for Athath Jeddah - We protect your data'} />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/privacy" />
        <link rel="alternate" hrefLang="ar" href="https://www.athath-jeddah-sa.com/privacy" />
        <link rel="alternate" hrefLang="en" href="https://www.athath-jeddah-sa.com/privacy" />
        <link rel="alternate" hrefLang="x-default" href="https://www.athath-jeddah-sa.com/privacy" />
      </Helmet>

      <section className="bg-gradient-to-b from-emerald-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-reverse space-x-3 mb-6">
            <Shield className="h-8 w-8 text-emerald-600" />
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{content.title}</h1>
          </div>
          <p className="text-lg text-gray-600">{isArabic ? 'آخر تحديث: نوفمبر 2025' : 'Last updated: November 2025'}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8 prose prose-lg max-w-none text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.intro}</h2>
            <p>{content.intro_text}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.section1}</h2>
            <p>{content.section1_text}</p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>{isArabic ? 'معلومات الاتصال (الاسم، رقم الهاتف، البريد الإلكتروني)' : 'Contact information (name, phone, email)'}</li>
              <li>{isArabic ? 'عنوان المنزل والموقع الجغرافي' : 'Home address and location'}</li>
              <li>{isArabic ? 'تفاصيل الأثاث والأجهزة المراد بيعها' : 'Details of furniture and appliances'}</li>
              <li>{isArabic ? 'سجل التفاعلات معنا (رسائل واتساب، اتصالات)' : 'Interaction history with us'}</li>
              <li>{isArabic ? 'بيانات الجهاز (عنوان IP، نوع المتصفح)' : 'Device data (IP address, browser type)'}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.section2}</h2>
            <p>{content.section2_text}</p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>{isArabic ? 'تقديم خدماتنا وتقييم الأثاث والأجهزة' : 'Provide our services and evaluate furniture'}</li>
              <li>{isArabic ? 'التواصل معك بخصوص العروض والأسعار' : 'Contact you about offers and prices'}</li>
              <li>{isArabic ? 'تحسين جودة خدماتنا' : 'Improve our services'}</li>
              <li>{isArabic ? 'الامتثال للمتطلبات القانونية والتنظيمية' : 'Comply with legal requirements'}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.section3}</h2>
            <p>{content.section3_text}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.section4}</h2>
            <p>{content.section4_text}</p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>{isArabic ? 'عند الحاجة لتقديم الخدمة (مثل الفريق الفني)' : 'When needed to provide the service'}</li>
              <li>{isArabic ? 'الامتثال للقوانين والأنظمة' : 'Comply with laws and regulations'}</li>
              <li>{isArabic ? 'حماية حقوقنا أو حقوق الآخرين' : 'Protect our or others\' rights'}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.section5}</h2>
            <p>{content.section5_text}</p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>{isArabic ? 'الوصول إلى بيانات عنك' : 'Access your data'}</li>
              <li>{isArabic ? 'تصحيح البيانات الخاطئة' : 'Correct incorrect data'}</li>
              <li>{isArabic ? 'طلب حذف البيانات' : 'Request data deletion'}</li>
              <li>{isArabic ? 'الاعتراض على معالجة بيانات معينة' : 'Object to certain data processing'}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.section6}</h2>
            <p>{content.section6_text}</p>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p><strong>{isArabic ? 'الهاتف' : 'Phone'}:</strong> 0559781023</p>
              <p><strong>{isArabic ? 'واتساب' : 'WhatsApp'}:</strong> 0559781023</p>
              <p><strong>{isArabic ? 'الموقع' : 'Location'}:</strong> {isArabic ? 'جدة، المملكة العربية السعودية' : 'Jeddah, Saudi Arabia'}</p>
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
            <p className="text-sm text-gray-600">
              {content.footer}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
