import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const srcDir = path.join(process.cwd(), 'public', 'images', 'src');
const outDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(srcDir)) {
  console.warn('⚠️  Source images directory not found: public/images/src/');
  console.log('📁 To optimize images, create a "public/images/src/" folder with JPG/PNG files');
  process.exit(0);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

(async () => {
  try {
    const files = fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png)$/i.test(f));
    
    if (files.length === 0) {
      console.log('ℹ️  No images found in public/images/src/');
      process.exit(0);
    }

    let optimized = 0;
    for (const file of files) {
      const name = path.parse(file).name;
      const input = path.join(srcDir, file);
      const outWebp = path.join(outDir, `${name}.webp`);
      const outAvif = path.join(outDir, `${name}.avif`);
      
      try {
        await sharp(input).resize(1200).webp({ quality: 75 }).toFile(outWebp);
        await sharp(input).resize(1200).avif({ quality: 50 }).toFile(outAvif);
        console.log(`✅ Optimized: ${file} → .webp, .avif`);
        optimized++;
      } catch (err) {
        console.error(`❌ Error optimizing ${file}:`, err.message);
      }
    }
    
    console.log(`\n✅ Image optimization complete: ${optimized} image(s) processed`);
  } catch (err) {
    console.error('❌ Error during image optimization:', err);
    process.exit(1);
  }
})();