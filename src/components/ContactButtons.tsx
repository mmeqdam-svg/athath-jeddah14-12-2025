import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Language, translations } from '../utils/translations';

const phoneNumber = '966559781023';

interface ContactButtonsProps {
  language?: Language;
}

const ContactButtons: React.FC<ContactButtonsProps> = ({ language = 'ar' }) => {
  const t = translations[language];
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* زر واتساب */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 font-medium text-sm whitespace-nowrap"
        aria-label={t.whatsappButton}
      >
        <MessageCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
        <span>{t.footerWhatsapp}</span>
      </a>
      {/* زر الاتصال */}
      <a
        href={`tel:+${phoneNumber}`}
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 font-medium text-sm whitespace-nowrap"
        aria-label={t.callButton}
      >
        <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
        <span>{language === 'ar' ? 'اتصل الآن' : 'Call Now'}</span>
      </a>
    </div>
  );
};

export default ContactButtons;