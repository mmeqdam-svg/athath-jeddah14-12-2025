import JSZip from 'jszip';
import fs from 'fs';
import projectFiles from '../src/data/projectFiles.json' assert { type: 'json' };

async function testDownload() {
  const zip = new JSZip();
  
  // إضافة الملفات كما تفعل handleDownloadAllCode
  Object.entries(projectFiles).forEach(([filePath, content]) => {
    if (filePath !== '_metadata' && typeof content === 'string') {
      zip.file(filePath, content);
    }
  });

  const blob = await zip.generateAsync({ type: 'blob' });
  const fileName = `final-test-${new Date().toISOString().split('T')[0]}.zip`;
  fs.writeFileSync(fileName, blob);

  const stat = fs.statSync(fileName);
  
  console.log('✅ تم إنشاء ملف التحميل بنجاح!');
  console.log(`📦 الملف: ${fileName}`);
  console.log(`💾 الحجم: ${(stat.size / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📝 الملفات المتضمنة: ${projectFiles._metadata.totalTextFiles} ملف نصي + ${projectFiles._metadata.totalImageFiles} صور`);
  console.log(`🎯 إجمالي: ${projectFiles._metadata.totalTextFiles + projectFiles._metadata.totalImageFiles} ملف`);
}

testDownload();
