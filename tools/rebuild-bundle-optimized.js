import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

console.log('🔄 جاري بناء Bundle محسّن (بدون صور Base64)...');

const projectFiles = {
  _metadata: {
    projectName: 'athath-jeddah',
    totalTextFiles: 0,
    totalImageFiles: 0,
    images: [],
    description: 'Complete project bundle with all text files and image references',
    lastUpdated: new Date().toISOString(),
  }
};

// جمع ملفات النصوص فقط
function collectTextFiles(dir, relativePath = '') {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const relPath = path.join(relativePath, file).replace(/\\/g, '/');
    
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', 'dist', '.git', '.replit', 'tools'].includes(file)) {
        collectTextFiles(fullPath, relPath);
      }
    } else {
      const ext = path.extname(file);
      // ملفات النصوص فقط
      if (['.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.css', '.md', '.xml', '.txt'].includes(ext)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf-8');
          projectFiles[relPath] = content;
          projectFiles._metadata.totalTextFiles++;
        } catch (e) {
          console.warn(`⚠️ تجاوز: ${relPath}`);
        }
      }
    }
  });
}

// تسجيل الصور (بدون Base64)
function collectImages() {
  const publicDir = path.join(projectRoot, 'public');
  if (!fs.existsSync(publicDir)) return;
  
  const files = fs.readdirSync(publicDir);
  
  files.forEach(file => {
    if (['.webp', '.png', '.jpg', '.jpeg', '.gif'].includes(path.extname(file).toLowerCase())) {
      projectFiles._metadata.images.push(`public/${file}`);
      projectFiles._metadata.totalImageFiles++;
      console.log(`✅ مرجع صورة: ${file}`);
    }
  });
}

// البداية
collectTextFiles(projectRoot);
collectImages();

// الحفظ
const outputPath = path.join(projectRoot, 'src/data/projectFiles.json');
fs.writeFileSync(outputPath, JSON.stringify(projectFiles, null, 2));

const stat = fs.statSync(outputPath);
console.log(`\n✅ اكتمل البناء!`);
console.log(`📝 ملفات نصية: ${projectFiles._metadata.totalTextFiles}`);
console.log(`🖼️ صور (مراجع): ${projectFiles._metadata.totalImageFiles}`);
console.log(`🎯 إجمالي: ${projectFiles._metadata.totalTextFiles + projectFiles._metadata.totalImageFiles}`);
console.log(`💾 حجم الملف: ${(stat.size / 1024).toFixed(1)} KB (بدل 5.5 MB!)`);
