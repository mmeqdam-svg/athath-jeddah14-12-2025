import React from 'react';
import { Home, Users, HelpCircle, Phone, BookOpen, Bed, Refrigerator, Sofa } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface InternalLinksProps {
  currentPage: string;
  navigate: (path: string) => void;
  language?: Language;
}

const InternalLinks: React.FC<InternalLinksProps> = ({ currentPage, navigate, language = 'ar' }) => {
  const t = translations[language];
  const links = [
    { id: 'home', path: '/', labelKey: 'home', icon: Home, descKey: 'homePageDescription' },
    { id: 'bedroom', path: '/bedroom', labelKey: 'bedroomTitle', icon: Bed, descKey: 'bedroomPageDescription' },
    { id: 'kitchen', path: '/kitchen', labelKey: 'kitchenTitle', icon: Refrigerator, descKey: 'kitchenPageDescription' },
    { id: 'livingroom', path: '/livingroom', labelKey: 'livingroomTitle', icon: Sofa, descKey: 'livingroomPageDescription' },
    { id: 'blog', path: '/blog', labelKey: 'blogTitle', icon: BookOpen, descKey: 'blogPageDescription' },
    { id: 'about', path: '/about', labelKey: 'aboutTitle', icon: Users, descKey: 'aboutPageDescription' },
    { id: 'faq', path: '/faq', labelKey: 'faqTitle', icon: HelpCircle, descKey: 'faqPageDescription' },
    { id: 'contact', path: '/contact', labelKey: 'contactTitle', icon: Phone, descKey: 'contactPageDescription' }
  ];

  const filteredLinks = links.filter(link => link.id !== currentPage).slice(0, 4);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          {t.otherUsefulPages}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => navigate(link.path)}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-right group"
            >
              <div className="flex items-start space-x-reverse space-x-4">
                <div className="bg-emerald-100 p-3 rounded-lg group-hover:bg-emerald-500 transition-colors flex-shrink-0">
                  <link.icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">{t[link.labelKey as keyof typeof t]}</h4>
                  <p className="text-xs text-gray-600 line-clamp-2">{t[link.descKey as keyof typeof t]}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
