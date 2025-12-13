import JSZip from 'jszip';
import fs from 'fs';
import projectFiles from '../src/data/projectFiles.json' assert { type: 'json' };

console.log('🧪 اختبار ملف التحميل النهائي...\n');

async function testDownload() {
  const zip = new JSZip();
  
  // ملف البيانات
  let filesCount = 0;
  let imagesCount = 0;
  let keysToCheck = ['vite.config.ts', 'src/index.css', 'src/components/Header.tsx', 'src/components/ContactButtons.tsx', 'public/bedroom-furniture.webp'];
  
  Object.entries(projectFiles).forEach(([filePath, content]) => {
    if (filePath !== '_metadata' && typeof content === 'string') {
      zip.file(filePath, content);
      filesCount++;
      
      if (filePath.includes('.webp') || filePath.includes('.png')) {
        imagesCount++;
      }
    }
  });

  // التحقق من الملفات المهمة
  console.log('✅ الملفات المهمة المضمنة:');
  keysToCheck.forEach(key => {
    if (projectFiles[key]) {
      const size = projectFiles[key].length > 1000 
        ? `${(projectFiles[key].length / 1024).toFixed(1)} KB` 
        : `${projectFiles[key].length} bytes`;
      console.log(`   ✓ ${key} (${size})`);
    } else {
      console.log(`   ✗ ${key} (مفقود)`);
    }
  });

  // إنشاء الـ zip
  const blob = await zip.generateAsync({ type: 'uint8array' });
  
  console.log(`\n📊 النتائج النهائية:`);
  console.log(`✅ ملفات نصية محدثة: ${filesCount}`);
  console.log(`🖼️ ملفات صور: ${imagesCount}`);
  console.log(`💾 حجم الملف المضغوط: ${(blob.length / 1024 / 1024).toFixed(2)} MB`);
  console.log(`✅ الملفات جاهزة للتحميل من لوحة التحكم`);
}

testDownload().catch(console.error);
