import JSZip from 'jszip';
import fs from 'fs';
import projectFiles from '../src/data/projectFiles.json' assert { type: 'json' };

console.log('🧪 اختبار التحميل...\n');

async function testDownload() {
  const zip = new JSZip();
  let fileCount = 0;
  let imageCount = 0;

  // إضافة الملفات
  Object.entries(projectFiles).forEach(([filePath, content]) => {
    if (filePath !== '_metadata' && typeof content === 'string') {
      zip.file(filePath, content);
      if (filePath.includes('public/') && !filePath.includes('.svg')) {
        console.log(`✅ ${filePath}`);
        imageCount++;
      } else {
        fileCount++;
      }
    }
  });

  const blob = await zip.generateAsync({ type: 'uint8array' });
  const fileName = `test-bundle-${new Date().toISOString().split('T')[0]}.zip`;
  fs.writeFileSync(fileName, blob);

  const stat = fs.statSync(fileName);
  console.log(`\n📊 النتائج:`);
  console.log(`✅ ملفات نصية: ${fileCount}`);
  console.log(`🖼️ صور: ${imageCount}`);
  console.log(`💾 حجم الملف: ${(stat.size / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📦 الملف: ${fileName}`);
}

testDownload();
