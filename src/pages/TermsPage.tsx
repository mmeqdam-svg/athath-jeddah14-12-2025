import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText } from 'lucide-react';
import { Language, translations } from '../utils/translations';

type TermsPageProps = {
  language: Language;
};

const TermsPage: React.FC<TermsPageProps> = ({ language }) => {
  const isArabic = language === 'ar';
  
  const content = {
    intro: isArabic ? 'مقدمة' : 'Introduction',
    intro_text: isArabic 
      ? 'تحدد شروط الخدمة هذه الشروط والأحكام التي تحكم استخدام خدمات أثاث لشراء الأثاث المستعمل والأجهزة الكهربائية. باستخدامك لخدماتنا، فإنك توافق على هذه الشروط.'
      : 'These Terms of Service set out the terms and conditions that govern the use of Athath services for buying used furniture and electrical appliances. By using our services, you agree to these terms.',
    
    s1: isArabic ? '1. تعريف الخدمات' : '1. Services Definition',
    s1_text: isArabic
      ? 'خدماتنا تشمل: تقييم الأثاث والأجهزة الكهربائية، شراء الأثاث والأجهزة المستعملة، خدمة النقل والفك والتركيب. جميع الخدمات متوفرة في جدة والمناطق المحيطة.'
      : 'Our services include: furniture and appliance appraisal, buying used furniture and appliances, and moving, disassembly and installation services. All services are available in Jeddah and surrounding areas.',
    
    s2: isArabic ? '2. شروط الشراء' : '2. Purchase Terms',
    s2_items: [
      isArabic ? 'التقييم الأولي يتم بناءً على الصور والمعلومات المقدمة' : 'Initial appraisal is based on photos and information provided',
      isArabic ? 'الفحص النهائي يتم في موقع العميل قبل الشراء النهائي' : 'Final inspection is done at customer location before final purchase',
      isArabic ? 'السعر النهائي قد يختلف عن السعر المبدئي حسب حالة الأثاث الفعلية' : 'Final price may differ from initial price based on actual furniture condition',
      isArabic ? 'الدفع يتم نقداً عند استلام الأثاث' : 'Payment is made in cash upon furniture collection',
      isArabic ? 'نحتفظ بالحق في رفض الشراء إذا اختلفت الحالة عن الصور' : 'We reserve the right to refuse purchase if condition differs from photos'
    ],
    
    s3: isArabic ? '3. خدمة النقل' : '3. Moving Service',
    s3_items: [
      isArabic ? 'خدمة النقل مجانية لجميع البيع في جدة' : 'Moving service is free for all sales in Jeddah',
      isArabic ? 'الفك والتركيب يتم بواسطة فريق متخصص' : 'Disassembly and assembly is done by specialist team',
      isArabic ? 'العميل مسؤول عن إزالة الأشياء الشخصية من الأثاث' : 'Customer is responsible for removing personal items from furniture',
      isArabic ? 'ننقل الأثاث في الحالة التي هو عليها' : 'We move furniture in its current condition',
      isArabic ? 'نحتفظ بالحق في عدم نقل الأثاث الثقيل جداً أو المحظور' : 'We reserve the right not to move extremely heavy or prohibited furniture'
    ],
    
    s4: isArabic ? '4. مسؤولية العميل' : '4. Customer Responsibility',
    s4_intro: isArabic ? 'العميل يتحمل المسؤولية عن:' : 'Customer is responsible for:',
    s4_items: [
      isArabic ? 'تقديم معلومات دقيقة وصحيحة عن الأثاث' : 'Providing accurate information about furniture',
      isArabic ? 'ضمان الوصول الآمن للعاملين' : 'Ensuring safe access for our workers',
      isArabic ? 'إزالة الأشياء الثمينة من الأثاث قبل النقل' : 'Removing valuable items from furniture before transport',
      isArabic ? 'توفير موقف سيارة أو مكان آمن لعاملينا' : 'Providing parking or safe place for our workers',
      isArabic ? 'الإفصاح عن أي أضرار أو مشاكل في الأثاث' : 'Disclosing any damage or issues with furniture'
    ],
    
    s5: isArabic ? '5. سياسة الإلغاء والاسترجاع' : '5. Cancellation & Return Policy',
    s5_items: [
      isArabic ? 'يمكن إلغاء الموعد قبل 24 ساعة من الزيارة' : 'Appointments can be cancelled 24 hours before visit',
      isArabic ? 'بعد استلام الأثاث من العميل، لا يمكن استرجاعه' : 'After furniture collection from customer, it cannot be returned',
      isArabic ? 'في حالة عدم تطابق السعر المتفق عليه مع حالة الأثاث، يحق للعميل رفض البيع' : 'If agreed price does not match furniture condition, customer can refuse sale'
    ],
    
    s6: isArabic ? '6. الالتزامات القانونية' : '6. Legal Obligations',
    s6_items: [
      isArabic ? 'الأثاث يجب أن يكون ملك العميل أو لديه الحق في بيعه' : 'Furniture must be owned by customer or customer must have right to sell',
      isArabic ? 'الأثاث لا يجب أن يكون مسروقاً أو مرهوناً' : 'Furniture must not be stolen or mortgaged',
      isArabic ? 'العميل يضمن عدم انتهاكه لأي حقوق ملكية فكرية' : 'Customer guarantees no intellectual property rights violation',
      isArabic ? 'نحن لا نقبل بيع أثاث مشبوه أو الأصل غير معروف' : 'We do not accept suspicious furniture or items of unknown origin'
    ],
    
    s7: isArabic ? '7. تحديد المسؤولية' : '7. Limitation of Liability',
    s7_text: isArabic
      ? 'أثاث غير مسؤول عن أي أضرار غير مباشرة أو تبعية ناجمة عن استخدام خدماتنا. مسؤوليتنا محدودة بمبلغ الشراء الذي تم الاتفاق عليه.'
      : 'Athath is not responsible for any indirect or consequential damages arising from use of our services. Our liability is limited to the agreed purchase amount.',
    
    s8: isArabic ? '8. القانون الحاكم' : '8. Governing Law',
    s8_text: isArabic
      ? 'تخضع هذه الشروط للقوانين والأنظمة المعمول بها في المملكة العربية السعودية. أي نزاع يتم حله وفقاً للقوانين السعودية.'
      : 'These terms are subject to the laws and regulations applicable in the Kingdom of Saudi Arabia. Any dispute will be resolved according to Saudi law.',
    
    s9: isArabic ? '9. التغييرات على الشروط' : '9. Changes to Terms',
    s9_text: isArabic
      ? 'نحتفظ بالحق في تحديث هذه الشروط في أي وقت. التغييرات الجوهرية سيتم إخطار العملاء بها مقدماً.'
      : 'We reserve the right to update these terms at any time. Material changes will be communicated to customers in advance.',
    
    s10: isArabic ? '10. الاتصال والشكاوى' : '10. Contact & Complaints',
    s10_text: isArabic
      ? 'إذا كان لديك أي شكاوى أو استفسارات، يرجى التواصل معنا:'
      : 'If you have any complaints or inquiries, please contact us:',
    
    footer: isArabic
      ? 'بموافقتك على استخدام خدماتنا، أنت توافق على جميع شروط الخدمة هذه. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام خدماتنا.'
      : 'By agreeing to use our services, you accept all these Terms of Service. If you do not agree with any of these terms, please do not use our services.'
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{isArabic ? 'شروط الخدمة - أثاث جدة' : 'Terms of Service - Athath Jeddah'}</title>
        <meta name="description" content={isArabic ? 'شروط الخدمة والاستخدام لموقع أثاث جدة' : 'Terms of Service and use for Athath Jeddah'} />
        <link rel="canonical" href="https://www.athath-jeddah-sa.com/terms" />
        <link rel="alternate" hrefLang="ar" href="https://www.athath-jeddah-sa.com/terms" />
        <link rel="alternate" hrefLang="en" href="https://www.athath-jeddah-sa.com/terms" />
        <link rel="alternate" hrefLang="x-default" href="https://www.athath-jeddah-sa.com/terms" />
      </Helmet>

      <section className="bg-gradient-to-b from-emerald-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-reverse space-x-3 mb-6">
            <FileText className="h-8 w-8 text-emerald-600" />
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{isArabic ? 'شروط الخدمة' : 'Terms of Service'}</h1>
          </div>
          <p className="text-lg text-gray-600">{isArabic ? 'آخر تحديث: نوفمبر 2025' : 'Last updated: November 2025'}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8 prose prose-lg max-w-none text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{isArabic ? 'مقدمة' : 'Introduction'}</h2>
            <p>
              {isArabic 
                ? 'تحدد شروط الخدمة هذه الشروط والأحكام التي تحكم استخدام خدمات أثاث لشراء الأثاث المستعمل والأجهزة الكهربائية. باستخدامك لخدماتنا، فإنك توافق على هذه الشروط.'
                : 'These Terms of Service set out the terms and conditions that govern the use of Athath services for buying used furniture and electrical appliances. By using our services, you agree to these terms.'}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.s1}</h2>
            <p>{content.s1_text}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.s2}</h2>
            <ul className="list-disc list-inside space-y-2 my-4">
              {content.s2_items.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.s3}</h2>
            <ul className="list-disc list-inside space-y-2 my-4">
              {content.s3_items.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.s4}</h2>
            <p>{content.s4_intro}</p>
            <ul className="list-disc list-inside space-y-2 my-4">
              {content.s4_items.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.s5}</h2>
            <ul className="list-disc list-inside space-y-2 my-4">
              {content.s5_items.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.s6}</h2>
            <ul className="list-disc list-inside space-y-2 my-4">
              {content.s6_items.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.s7}</h2>
            <p>{content.s7_text}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.s8}</h2>
            <p>{content.s8_text}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.s9}</h2>
            <p>{content.s9_text}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.s10}</h2>
            <p>{content.s10_text}</p>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p><strong>{isArabic ? 'الهاتف' : 'Phone'}:</strong> 0559781023</p>
              <p><strong>{isArabic ? 'واتساب' : 'WhatsApp'}:</strong> 0559781023</p>
              <p><strong>{isArabic ? 'البريد الإلكتروني' : 'Email'}:</strong> info@athath-jeddah.com</p>
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

export default TermsPage;
