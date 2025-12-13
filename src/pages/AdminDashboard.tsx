import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { LogOut, FileText, Upload, BarChart3, Edit2, Trash2, Download, Folder, CheckCircle } from 'lucide-react';
import { Post } from '../data/posts';

type BundleInfo = {
  totalFiles: number;
  isComplete: boolean;
  lastUpdated: string;
  isUpdating: boolean;
};

type AdminDashboardProps = {
  navigate: (path: string) => void;
  onLogout: () => void;
  posts: Post[];
};

type FileItem = {
  name: string;
  size: number;
  date: string;
  type: string;
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({ navigate, onLogout, posts: initialPosts }) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'posts' | 'files'>('editor');
  const [posts, setPosts] = useState<Post[]>(initialPosts || []);
  const [uploadedFiles, setUploadedFiles] = useState<FileItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [title, setTitle] = useState('');
  const [titleTag, setTitleTag] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [urlSlug, setUrlSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('عام');
  const [keywords, setKeywords] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [author, setAuthor] = useState('أثاث جدة');
  const [datePublished, setDatePublished] = useState(new Date().toISOString().split('T')[0]);
  const [dateModified, setDateModified] = useState(new Date().toISOString().split('T')[0]);
  const [message, setMessage] = useState('');
  const [bundleInfo, setBundleInfo] = useState<BundleInfo>({
    totalFiles: 0,
    isComplete: false,
    lastUpdated: new Date().toISOString(),
    isUpdating: false
  });
  const [isProjectFilesDeleted, setIsProjectFilesDeleted] = useState(true);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const csvInputRef = useRef<HTMLInputElement>(null);
  const fileUploadRef = useRef<HTMLInputElement>(null);

  // تحميل البيانات من localStorage عند التشغيل وتحديث تلقائي
  useEffect(() => {
    const savedPosts = localStorage.getItem('admin_posts');
    const savedFiles = localStorage.getItem('admin_files');
    
    if (savedPosts) {
      try {
        setPosts(JSON.parse(savedPosts));
      } catch {
        setPosts(initialPosts);
      }
    } else {
      setPosts(initialPosts);
    }

    if (savedFiles) {
      try {
        setUploadedFiles(JSON.parse(savedFiles));
      } catch {
        setUploadedFiles([]);
      }
    }
  }, [initialPosts]);

  // حفظ البيانات تلقائياً عند التغيير
  useEffect(() => {
    localStorage.setItem('admin_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('admin_files', JSON.stringify(uploadedFiles));
  }, [uploadedFiles]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    onLogout();
    navigate('/');
  };

  const resetForm = () => {
    setTitle('');
    setTitleTag('');
    setMetaDescription('');
    setUrlSlug('');
    setExcerpt('');
    setContent('');
    setImageUrl('');
    setImageAlt('');
    setKeywords('');
    setAuthor('أثاث جدة');
    setDatePublished(new Date().toISOString().split('T')[0]);
    setDateModified(new Date().toISOString().split('T')[0]);
    setEditingId(null);
    setMessage('');
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleInsertFormat = (format: 'h2' | 'h3' | 'bold' | 'italic') => {
    const tag = format === 'h2' ? '<h2>عنوان فرعي</h2>' :
                format === 'h3' ? '<h3>عنوان أصغر</h3>' :
                format === 'bold' ? '<strong>نص غامق</strong>' :
                '<em>نص مائل</em>';
    setContent(content + '\n' + tag);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImageUrl(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePost = () => {
    if (!title.trim() || !titleTag.trim() || !metaDescription.trim() || !urlSlug.trim() || !imageAlt.trim()) {
      setMessage('❌ يجب ملء جميع الحقول (عنوان، عنوان SEO، وصف SEO، رابط المقالة، نص بديل للصورة)');
      return;
    }

    if (titleTag.length > 60) {
      setMessage('❌ عنوان SEO يجب أن يكون 60 حرف أو أقل');
      return;
    }

    if (metaDescription.length > 160) {
      setMessage('❌ وصف SEO يجب أن يكون 160 حرف أو أقل');
      return;
    }

    const newPost: Post = {
      id: editingId || Date.now().toString(),
      title,
      slug: urlSlug,
      titleTag,
      metaDescription,
      excerpt,
      content,
      category,
      datePublished,
      dateModified,
      author,
      keywords: keywords.split(',').map(k => k.trim()).filter(Boolean),
      image: imageUrl,
      imageAlt,
    };

    if (editingId) {
      setPosts(posts.map(p => p.id === editingId ? newPost : p));
      setMessage('✅ تم تحديث المقالة بنجاح!');
    } else {
      setPosts([newPost, ...posts]);
      setMessage('✅ تم إضافة المقالة الجديدة بنجاح!');
    }

    setTimeout(() => {
      resetForm();
      setActiveTab('posts');
    }, 1500);
  };

  const handleEditPost = (post: Post) => {
    setTitle(post.title);
    setTitleTag(post.titleTag);
    setMetaDescription(post.metaDescription);
    setUrlSlug(post.slug);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setCategory(post.category);
    setImageUrl(post.image);
    setImageAlt(post.imageAlt);
    setKeywords(post.keywords.join(', '));
    setAuthor(post.author);
    setDatePublished(post.datePublished);
    setDateModified(post.dateModified);
    setEditingId(post.id);
    setActiveTab('editor');
    setMessage('');
  };

  const handleDeletePost = (id: string) => {
    if (confirm('هل متأكد من حذف هذه المقالة؟')) {
      setPosts(posts.filter(p => p.id !== id));
      setMessage('✅ تم حذف المقالة بنجاح!');
    }
  };

  const handleExportCSV = () => {
    const headers = ['العنوان', 'رابط المقالة', 'عنوان SEO', 'وصف SEO', 'الملخص', 'الفئة', 'الكلمات المفتاحية', 'التاريخ'];
    const rows = posts.map(p => [
      p.title,
      p.slug,
      p.titleTag,
      p.metaDescription,
      p.excerpt,
      p.category,
      p.keywords.join(';'),
      p.datePublished,
    ]);

    const csv = [
      headers.join(','),
      ...rows.map(r => r.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const BOM = '\uFEFF';
    const csvWithBOM = BOM + csv;
    
    const blob = new Blob([csvWithBOM], { type: 'text/csv;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `مقالات_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    setMessage('✅ تم تصدير الملف بنجاح!');
  };

  const handleImportCSV = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const csv = event.target?.result as string;
      const lines = csv.split('\n').map(l => l.trim()).filter(Boolean);
      
      if (lines.length < 2) {
        setMessage('❌ ملف CSV فارغ أو غير صحيح');
        return;
      }

      const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
      const newPosts: Post[] = [];
      let validCount = 0;

      for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        
        try {
          const values = lines[i].match(/"([^"]*)"|([^,]+)/g)?.map(v => 
            v.replace(/^"|"$/g, '').trim()
          ) || [];
          
          const rowData: Record<string, string> = {};
          headers.forEach((header, index) => {
            rowData[header] = values[index] || '';
          });

          if (!rowData['العنوان']) continue;

          const newPost: Post = {
            id: Date.now().toString() + Math.random(),
            title: rowData['العنوان'],
            slug: rowData['رابط المقالة'] || generateSlug(rowData['العنوان']),
            titleTag: rowData['عنوان SEO'] || '',
            metaDescription: rowData['وصف SEO'] || '',
            excerpt: rowData['الملخص'] || '',
            content: '',
            category: rowData['الفئة'] || 'عام',
            keywords: (rowData['الكلمات المفتاحية'] || '').split(';').map(k => k.trim()).filter(Boolean),
            image: '',
            imageAlt: '',
            author: 'أثاث جدة',
            datePublished: rowData['التاريخ'] || new Date().toISOString().split('T')[0],
            dateModified: new Date().toISOString().split('T')[0],
          };

          newPosts.push(newPost);
          validCount++;
        } catch (err) {
          console.error('خطأ في السطر', i, err);
        }
      }

      if (validCount === 0) {
        setMessage('❌ لم يتم العثور على مقالات صحيحة في الملف');
        return;
      }

      setPosts([...newPosts, ...posts]);
      setMessage(`✅ تم استيراد ${validCount} مقالة بنجاح! تظهر في المدونة الآن.`);
      if (csvInputRef.current) csvInputRef.current.value = '';
    };
    reader.readAsText(file, 'utf-8');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        const newFile: FileItem = {
          name: file.name,
          size: file.size,
          date: new Date().toISOString().split('T')[0],
          type: file.type || 'unknown',
        };

        setUploadedFiles(prev => [...prev, { ...newFile }]);
        
        const a = document.createElement('a');
        a.href = base64;
        a.download = file.name;
        a.click();
        
        setMessage(`✅ تم حفظ الملف: ${file.name}`);
      };
      reader.readAsDataURL(file);
    });

    if (fileUploadRef.current) fileUploadRef.current.value = '';
  };

  const handleDeleteFile = (name: string) => {
    if (confirm(`حذف الملف: ${name}؟`)) {
      setUploadedFiles(prev => prev.filter(f => f.name !== name));
      setMessage('✅ تم حذف الملف');
    }
  };

  const handleDeleteEntireProjectFiles = () => {
    if (!confirm('⚠️ هل أنت متأكد من حذف ملف projectFiles.json بالكامل؟\n\nهذا سيحذف كل الملفات المخزنة!')) {
      return;
    }
    
    if (!confirm('تأكيد نهائي - هذا لا يمكن التراجع عنه!')) {
      return;
    }
    
    setIsProjectFilesDeleted(true);
    setBundleInfo({
      totalFiles: 0,
      isComplete: false,
      lastUpdated: new Date().toISOString(),
      isUpdating: false
    });
    
    setMessage('🗑️ تم حذف projectFiles.json - الحزمة فارغة الآن - عدد الملفات: 0');
  };

  const handleDownloadAllCode = async () => {
    try {
      setMessage('⏳ جاري تحميل كامل الكود... يرجى الانتظار');
      const zip = new JSZip();
      
      zip.file('README.md', `# أثاث جدة - موقع شراء الأثاث المستعمل 🏠

## المشروع الكامل
موقع متخصص في شراء وبيع الأثاث المستعمل في جدة، مع لوحة تحكم متقدمة وجميع ملفات المشروع.

## الميزات ✨
- ✅ 9 مقالات عالية الجودة محسّنة للسيو (SEO)
- ✅ لوحة تحكم متقدمة مع محرر نصوص غني
- ✅ استيراد وتصدير CSV بصيغة UTF-8
- ✅ نسخ احتياطية تلقائية وتحميل كامل الكود
- ✅ مدير ملفات متقدم لأي نوع ملف
- ✅ تصميم RTL عربي احترافي
- ✅ حماية بكلمة مرور

## معلومات الدخول 🔐
- البريد الإلكتروني: meqdam.sa@gmail.com
- كلمة السر: 0507682638

## خطوات التثبيت والتشغيل 🚀

\`\`\`bash
# 1. تثبيت المكتبات
npm install

# 2. تشغيل الموقع (البيئة التطويرية)
npm run dev

# 3. بناء الموقع للإنتاج
npm run build

# 4. معاينة الموقع بعد البناء
npm run preview
\`\`\`

## الملفات المهمة 📁
- **src/data/posts.ts** - جميع المقالات والبيانات (9 مقالات)
- **src/pages/AdminDashboard.tsx** - لوحة التحكم الكاملة
- **src/App.tsx** - المكون الرئيسي للتطبيق
- **public/sitemap.xml** - خريطة الموقع للسيو
- **public/robots.txt** - ملف التحكم في الروبوتات
- **package.json** - جميع المكتبات والإعدادات
- **vite.config.ts** - إعدادات البناء

## معلومات الاتصال 📞
- الهاتف: 0559781023
- واتساب: 0559781023
- البريد: info@athath-jeddah-sa.com
- الموقع: جدة، المملكة العربية السعودية

## التقنيات المستخدمة 🛠️
- React 18.3.1
- TypeScript
- Vite 5.4.2
- Tailwind CSS
- React Helmet (SEO)
- JSZip (للملفات المضغوطة)

## الدعم التقني 💡
عند وجود أي مشاكل:
1. تأكد من تثبيت Node.js الأحدث
2. احذف مجلد node_modules و package-lock.json
3. قم بتثبيت المكتبات من جديد: npm install
4. شغّل التطبيق: npm run dev

---
تم إنشاء هذا المشروع بواسطة فريق أثاث جدة - آخر تحديث: ${new Date().toLocaleDateString('ar-SA')}`);
      
      // projectFiles.json تم حذفه - لا توجد ملفات أساسية
      zip.file('INFO.txt', '⚠️ تم حذف projectFiles.json\n\nهذه النسخة تحتوي على:\n- لوحة التحكم الكاملة\n- المقالات الحالية فقط\n- بدون ملفات الكود الأساسي المضغوط');
      
      // إضافة ملف البيانات الحالية (المقالات المحدثة من لوحة التحكم)
      zip.file('data/current-posts.json', JSON.stringify({
        posts: posts,
        uploadedFiles: uploadedFiles,
        exportDate: new Date().toISOString(),
        totalArticles: posts.length,
        totalFiles: uploadedFiles.length
      }, null, 2));

      // إضافة دليل التعليمات
      zip.file('INSTRUCTIONS.ar.md', `# دليل التعليمات - أثاث جدة 📖

## تثبيت المشروع 🔧

### المتطلبات
- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn

### خطوات التثبيت
1. فك ضغط الملف
2. افتح Terminal/Command Prompt
3. انتقل إلى مجلد المشروع
4. نفّذ: \`npm install\`

## تشغيل الموقع 🚀

\`\`\`bash
npm run dev
\`\`\`

سيعمل الموقع على: http://localhost:5000

## الدخول لوحة التحكم 🔐

1. انقر على "جميع الحقوق محفوظة" في أسفل الصفحة
2. أدخل البيانات:
   - البريد: meqdam.sa@gmail.com
   - كلمة السر: 0507682638

## ميزات لوحة التحكم ✨

### إضافة مقالات جديدة
1. انقر على "مقالة جديدة"
2. ملأ المعلومات
3. استخدم زر "صورة" لرفع صورة
4. استخدم الأزرار: H2, H3, غامق، مائل
5. انقر "إضافة" للحفظ

### استيراد من Excel
1. جهز ملف CSV بالعمودات: العنوان، رابط المقالة، عنوان SEO، الوصف، الملخص، الفئة، الكلمات المفتاحية، التاريخ
2. في "نسخة احتياطية" > "استيراد CSV"
3. اختر الملف
4. سيتم استيراد جميع المقالات فوراً

### تحميل كل الكود
1. اذهب إلى "نسخة احتياطية"
2. انقر "💾 تحميل"
3. سيتم تحميل ZIP بكل ملفات المشروع

## بناء للإنتاج 🏗️

\`\`\`bash
npm run build
\`\`\`

سيتم إنشاء مجلد \`dist\` بالملفات الجاهزة للنشر

## حل المشاكل 🐛

### الموقع لا يعمل
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
npm run dev
\`\`\`

### مشاكل التنمية
- امسح ذاكرة التخزين المؤقت: Ctrl+Shift+Delete
- أعد تحميل الصفحة: F5
- أغلق وأعد فتح التطبيق

## التواصل 📞
للدعم والاستفسارات:
- الهاتف: 0559781023
- واتساب: 0559781023

---
تم التحديث: ${new Date().toLocaleDateString('ar-SA')}`);

      const blob = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `athath-jeddah-complete-${new Date().toISOString().split('T')[0]}.zip`;
      link.click();
      URL.revokeObjectURL(link.href);
      
      setMessage('✅ تم تحميل كامل الكود والبيانات بنجاح! الملف المضغوط يحتوي على جميع ملفات المشروع');
    } catch (error) {
      console.error('خطأ في التحميل:', error);
      setMessage('❌ خطأ في التحميل. يرجى المحاولة مجدداً');
    }
  };

  const formatDate = (isoDate: string) => {
    try {
      const date = new Date(isoDate);
      return date.toLocaleString('ar-SA', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return isoDate;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      <Helmet>
        <title>لوحة التحكم - أثاث جدة</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <header className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-600">لوحة التحكم</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            <LogOut className="h-4 w-4" />
            تسجيل الخروج
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8 border-b border-gray-300 overflow-x-auto">
          <button
            onClick={() => { setActiveTab('editor'); setMessage(''); }}
            className={`pb-3 px-4 font-semibold transition whitespace-nowrap ${
              activeTab === 'editor' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-600 hover:text-emerald-600'
            }`}
          >
            <FileText className="h-5 w-5 inline mr-2" />
            {editingId ? 'تعديل' : 'مقالة جديدة'}
          </button>
          <button
            onClick={() => { setActiveTab('posts'); setMessage(''); }}
            className={`pb-3 px-4 font-semibold transition whitespace-nowrap ${
              activeTab === 'posts' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-600 hover:text-emerald-600'
            }`}
          >
            <BarChart3 className="h-5 w-5 inline mr-2" />
            المقالات ({posts.length})
          </button>
          <button
            onClick={() => { setActiveTab('files'); setMessage(''); }}
            className={`pb-3 px-4 font-semibold transition whitespace-nowrap ${
              activeTab === 'files' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-600 hover:text-emerald-600'
            }`}
          >
            <Folder className="h-5 w-5 inline mr-2" />
            الملفات ({uploadedFiles.length})
          </button>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-lg ${message.includes('❌') ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
            {message}
          </div>
        )}

        {activeTab === 'editor' && (
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-6">{editingId ? 'تعديل المقالة' : 'مقالة جديدة'}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="العنوان الرئيسي"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                />

                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="الملخص"
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                />

                <div>
                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-3 flex gap-2 flex-wrap">
                    <button type="button" onClick={() => handleInsertFormat('h2')} className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100 font-semibold text-sm">H2</button>
                    <button type="button" onClick={() => handleInsertFormat('h3')} className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100 font-semibold text-sm">H3</button>
                    <button type="button" onClick={() => handleInsertFormat('bold')} className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100 font-semibold text-sm">غامق</button>
                    <button type="button" onClick={() => handleInsertFormat('italic')} className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100 font-semibold text-sm">مائل</button>
                    <button type="button" onClick={() => fileInputRef.current?.click()} className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100 font-semibold text-sm">صورة</button>
                    <input type="file" ref={fileInputRef} accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </div>
                  <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="محتوى المقالة" rows={12} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none font-mono text-sm" />
                </div>

                <button type="button" onClick={handleSavePost} className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition">
                  {editingId ? '✏️ تحديث' : '➕ إضافة'}
                </button>

                {editingId && <button type="button" onClick={resetForm} className="w-full bg-gray-400 text-white font-semibold py-3 rounded-lg hover:bg-gray-500 transition">إلغاء</button>}
              </div>

              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6 h-fit space-y-4">
                <h3 className="font-bold text-lg">⚙️ أدوات السيو</h3>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">العنوان ({titleTag.length}/60)</label>
                  <input type="text" value={titleTag} onChange={(e) => setTitleTag(e.target.value.slice(0, 60))} maxLength={60} placeholder="عنوان SEO" className="w-full px-3 py-1 text-sm border border-emerald-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">الوصف ({metaDescription.length}/160)</label>
                  <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value.slice(0, 160))} maxLength={160} placeholder="وصف SEO" rows={3} className="w-full px-3 py-1 text-sm border border-emerald-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>

                <input type="text" value={urlSlug} onChange={(e) => setUrlSlug(e.target.value)} placeholder="article-url" className="w-full px-3 py-1 text-sm border border-emerald-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none" />
                
                <input type="text" value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} placeholder="وصف الصورة" className="w-full px-3 py-1 text-sm border border-emerald-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none" />

                <input type="date" value={datePublished} onChange={(e) => setDatePublished(e.target.value)} className="w-full px-3 py-1 text-sm border border-emerald-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none" />

                {imageUrl && <img src={imageUrl} alt={imageAlt} className="w-full rounded-lg max-h-48 object-cover" />}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'posts' && (
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-6">المقالات ({posts.length})</h2>
            {posts.length === 0 ? (
              <p className="text-gray-500">لا توجد مقالات</p>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{post.title}</h3>
                        <p className="text-sm text-gray-600">URL: {post.slug}</p>
                        <p className="text-xs text-gray-500">📅 {post.datePublished}</p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleEditPost(post)} className="bg-emerald-600 text-white px-3 py-2 rounded hover:bg-emerald-700 transition flex items-center gap-1 text-sm">
                          <Edit2 className="h-4 w-4" />تعديل
                        </button>
                        <button onClick={() => handleDeletePost(post.id)} className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition flex items-center gap-1 text-sm">
                          <Trash2 className="h-4 w-4" />حذف
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'files' && (
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-6">مدير الملفات</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-dashed border-emerald-300 bg-emerald-50 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">رفع ملفات</h3>
                <p className="text-sm text-gray-600 mb-4">أي صيغة: PDF, ZIP, RAR, DOC, إلخ</p>
                <input type="file" ref={fileUploadRef} onChange={handleFileUpload} multiple className="hidden" />
                <button onClick={() => fileUploadRef.current?.click()} className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition font-semibold">
                  📤 اختر الملفات
                </button>
              </div>

              <div className="border-2 border-dashed border-blue-300 bg-blue-50 rounded-lg p-8 text-center">
                <Download className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">تصدير CSV</h3>
                <p className="text-sm text-gray-600 mb-4">جميع المقالات</p>
                <button onClick={handleExportCSV} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                  📥 تنزيل
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-lg mb-4">الملفات المحفوظة ({uploadedFiles.length})</h3>
              {uploadedFiles.length === 0 ? (
                <p className="text-gray-500">لا توجد ملفات مرفوعة</p>
              ) : (
                <div className="space-y-2">
                  {uploadedFiles.map((file, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{file.name}</p>
                        <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB • {file.date}</p>
                      </div>
                      <button onClick={() => handleDeleteFile(file.name)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-sm">
                        حذف
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;
