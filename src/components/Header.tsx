import React from 'react';
import { Language, translations } from '../utils/translations';

type HeaderProps = {
  navigate: (path: string) => void;
  currentPath: string;
  language: Language;
  setLanguage: (lang: Language) => void;
};

const Header: React.FC<HeaderProps> = ({ navigate, currentPath, language, setLanguage }) => {
  const t = translations[language];
  const isRTL = language === 'ar';
  
  return (
    <header className={`bg-white shadow sticky top-0 z-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); navigate('/'); }} 
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <img 
              src="/logo.svg" 
              alt={`${t.brandName} - logo`}
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold text-emerald-700">{t.brandName}</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); navigate('/'); }}
              className={`hover:text-emerald-600 transition text-sm px-3 py-2 rounded ${currentPath === '/' ? 'text-emerald-600 font-semibold' : 'text-gray-700'}`}
            >{t.home}</a>
            <a
              href="/about"
              onClick={(e) => { e.preventDefault(); navigate('/about'); }}
              className={`hover:text-emerald-600 transition text-sm px-3 py-2 rounded ${currentPath === '/about' ? 'text-emerald-600 font-semibold' : 'text-gray-700'}`}
            >{t.about}</a>
            <a
              href="/blog"
              onClick={(e) => { e.preventDefault(); navigate('/blog'); }}
              className={`hover:text-emerald-600 transition text-sm px-3 py-2 rounded ${currentPath.startsWith('/blog') ? 'text-emerald-600 font-semibold' : 'text-gray-700'}`}
            >{t.blog}</a>
            <a
              href="/faq"
              onClick={(e) => { e.preventDefault(); navigate('/faq'); }}
              className={`hover:text-emerald-600 transition text-sm px-3 py-2 rounded ${currentPath === '/faq' ? 'text-emerald-600 font-semibold' : 'text-gray-700'}`}
            >{t.faq}</a>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className={`hover:text-emerald-600 transition text-sm px-3 py-2 rounded ${currentPath === '/contact' ? 'text-emerald-600 font-semibold' : 'text-gray-700'}`}
            >{t.contact}</a>
            
            {/* Language Switcher */}
            <div className={`flex gap-1 ml-4 ${isRTL ? 'mr-4' : ''}`}>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-2 rounded text-sm font-medium transition ${
                  language === 'ar' 
                    ? 'bg-emerald-100 text-emerald-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-2 rounded text-sm font-medium transition ${
                  language === 'en' 
                    ? 'bg-emerald-100 text-emerald-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                English
              </button>
            </div>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-2">
            <div className="flex gap-1">
              <button
                onClick={() => setLanguage('ar')}
                className={`px-2 py-1 text-xs rounded ${language === 'ar' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-600'}`}
              >
                AR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs rounded ${language === 'en' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-600'}`}
              >
                EN
              </button>
            </div>
            <button className="text-gray-700 hover:text-emerald-600 text-2xl">☰</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
