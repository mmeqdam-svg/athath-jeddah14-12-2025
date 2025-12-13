import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface FooterProps {
  navigate: (path: string) => void;
  language?: Language;
}

const Footer: React.FC<FooterProps> = ({ navigate, language = 'ar' }) => {
  const currentYear = new Date().getFullYear();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Company Info & NAP */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">{t.companyName}</h3>
            <p className="text-gray-400 mb-4">
              {t.companyDescription}
            </p>
            
            {/* NAP - Name, Area, Phone */}
            <div className="space-y-3">
              <div className="flex items-start space-x-reverse space-x-3">
                <MapPin className="h-5 w-5 text-emerald-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">{t.footerArea}</p>
                  <p className="text-gray-400">{t.footerLocation}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-reverse space-x-3">
                <Phone className="h-5 w-5 text-emerald-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">{t.footerPhone}</p>
                  <a 
                    href="tel:+966559781023" 
                    className="text-emerald-400 hover:text-emerald-300 transition"
                    aria-label={`${t.callUs} 0559781023`}
                  >
                    {language === 'ar' ? '0559781023' : '+966 55 978 1023'}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t.footerPages}</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  onClick={(e) => { e.preventDefault(); navigate('/'); }}
                  className="hover:text-emerald-400 transition"
                >
                  {t.footerHome}
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  onClick={(e) => { e.preventDefault(); navigate('/about'); }}
                  className="hover:text-emerald-400 transition"
                >
                  {t.footerAbout}
                </a>
              </li>
              <li>
                <a 
                  href="/bedroom" 
                  onClick={(e) => { e.preventDefault(); navigate('/bedroom'); }}
                  className="hover:text-emerald-400 transition"
                >
                  {t.footerBedroom}
                </a>
              </li>
              <li>
                <a 
                  href="/kitchen" 
                  onClick={(e) => { e.preventDefault(); navigate('/kitchen'); }}
                  className="hover:text-emerald-400 transition"
                >
                  {t.footerKitchen}
                </a>
              </li>
              <li>
                <a 
                  href="/livingroom" 
                  onClick={(e) => { e.preventDefault(); navigate('/livingroom'); }}
                  className="hover:text-emerald-400 transition"
                >
                  {t.footerLivingroom}
                </a>
              </li>
              <li>
                <a 
                  href="/blog" 
                  onClick={(e) => { e.preventDefault(); navigate('/blog'); }}
                  className="hover:text-emerald-400 transition"
                >
                  {t.footerBlog}
                </a>
              </li>
              <li>
                <a 
                  href="/faq" 
                  onClick={(e) => { e.preventDefault(); navigate('/faq'); }}
                  className="hover:text-emerald-400 transition"
                >
                  {t.footerFAQ}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Legal */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t.footerContact}</h3>
            <div className="space-y-4 mb-6">
              <a
                href="https://wa.me/966559781023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-reverse space-x-3 text-emerald-400 hover:text-emerald-300 transition"
                aria-label={t.messageOnWhatsapp}
              >
                <MessageCircle className="h-5 w-5" />
                <span>{t.footerWhatsapp}</span>
              </a>
              
              <a
                href="tel:+966559781023"
                className="flex items-center space-x-reverse space-x-3 text-emerald-400 hover:text-emerald-300 transition"
                aria-label={t.callUs}
              >
                <Phone className="h-5 w-5" />
                <span>{t.footerCall}</span>
              </a>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400 mb-2">{t.footerImportantLinks}</p>
              <div className="space-y-2">
                <a 
                  href="/privacy" 
                  onClick={(e) => { e.preventDefault(); navigate('/privacy'); }}
                  className="block text-sm hover:text-emerald-400 transition"
                >
                  {t.footerPrivacy}
                </a>
                <a 
                  href="/terms" 
                  onClick={(e) => { e.preventDefault(); navigate('/terms'); }}
                  className="block text-sm hover:text-emerald-400 transition"
                >
                  {t.footerTerms}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} {t.companyName}.{' '}
            <button 
              onClick={() => navigate('/login')}
              className="text-emerald-400 hover:text-emerald-300 transition cursor-pointer"
            >
              {t.footerCopyright}
            </button>
            {' '}{t.footerCopyrightEnd}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
