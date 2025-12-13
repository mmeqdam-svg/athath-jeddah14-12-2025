import { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import BedroomPage from './pages/BedroomPage';
import KitchenPage from './pages/KitchenPage';
import LivingroomPage from './pages/LivingroomPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import ContactButtons from './components/ContactButtons';
import posts from './data/posts';
import { Language } from './utils/translations';

function parsePath(pathname: string) {
  if (pathname !== '/' && pathname.endsWith('/')) pathname = pathname.slice(0, -1);
  return pathname;
}

function App() {
  const [currentPath, setCurrentPath] = useState(parsePath(window.location.pathname));
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language');
    return (saved as Language) || 'ar';
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('admin_token') === 'authenticated';
  });
  const [allPosts, setAllPosts] = useState<typeof posts>(() => {
    try {
      const saved = localStorage.getItem('admin_posts');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading posts from localStorage:', e);
    }
    return posts;
  });

  // Save language preference
  useEffect(() => {
    localStorage.setItem('app_language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const navigate = useCallback((to: string) => {
    const normalized = parsePath(to);
    if (normalized !== currentPath) {
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
      window.scrollTo(0, 0);
    }
  }, [currentPath]);

  useEffect(() => {
    const onPop = () => setCurrentPath(parsePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // حفظ جميع المقالات في localStorage عند التحميل الأول
  // وتحديث البيانات إذا كانت المقالات الجديدة موجودة
  useEffect(() => {
    const saved = localStorage.getItem('admin_posts');
    if (!saved) {
      localStorage.setItem('admin_posts', JSON.stringify(posts));
      setAllPosts(posts);
    } else {
      try {
        const parsed = JSON.parse(saved);
        // إذا كان عدد المقالات المحفوظة أقل من المقالات الجديدة، يتم التحديث
        if (Array.isArray(parsed) && parsed.length < posts.length) {
          localStorage.setItem('admin_posts', JSON.stringify(posts));
          setAllPosts(posts);
        }
      } catch (e) {
        localStorage.setItem('admin_posts', JSON.stringify(posts));
        setAllPosts(posts);
      }
    }
  }, []);

  // حفظ المقالات عند أي تعديل
  useEffect(() => {
    localStorage.setItem('admin_posts', JSON.stringify(allPosts));
  }, [allPosts]);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const renderPage = () => {
    if (currentPath === '/login') return <LoginPage navigate={navigate} onLoginSuccess={handleLoginSuccess} />;
    if (currentPath === '/admin') {
      if (!isAuthenticated) {
        navigate('/login');
        return null;
      }
      return <AdminDashboard navigate={navigate} onLogout={handleLogout} posts={allPosts} />;
    }

    if (currentPath === '/' ) return <HomePage navigate={navigate} language={language} />;
    if (currentPath === '/blog') return <BlogPage navigate={navigate} posts={allPosts} language={language} />;
    if (currentPath === '/contact') return <ContactPage navigate={navigate} language={language} />;
    if (currentPath === '/about') return <AboutPage navigate={navigate} language={language} />;
    if (currentPath === '/faq') return <FAQPage navigate={navigate} language={language} />;
    if (currentPath === '/bedroom') return <BedroomPage navigate={navigate} language={language} />;
    if (currentPath === '/kitchen') return <KitchenPage navigate={navigate} language={language} />;
    if (currentPath === '/livingroom') return <LivingroomPage navigate={navigate} language={language} />;
    if (currentPath === '/privacy') return <PrivacyPage language={language} />;
    if (currentPath === '/terms') return <TermsPage language={language} />;

    const blogPrefix = '/blog/';
    if (currentPath.startsWith(blogPrefix)) {
      const slug = currentPath.slice(blogPrefix.length);
      const exists = allPosts.some(p => p.slug === slug);
      if (exists) return <PostPage slug={slug} navigate={navigate} posts={allPosts} language={language} />;
      return <div className="max-w-4xl mx-auto py-12"><h1>{language === 'ar' ? 'المقال غير موجود' : 'Article not found'}</h1></div>;
    }

    return <HomePage navigate={navigate} language={language} />;
  };

  return (
    <div className={`min-h-screen bg-white ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {currentPath !== '/login' && currentPath !== '/admin' && (
        <>
          <Header navigate={navigate} currentPath={currentPath} language={language} setLanguage={setLanguage} />
        </>
      )}
      <main className="min-h-screen">
        {renderPage()}
      </main>
      {currentPath !== '/login' && currentPath !== '/admin' && (
        <>
          <Footer navigate={navigate} language={language} />
          <ContactButtons language={language} />
        </>
      )}
    </div>
  );
}

export default App;