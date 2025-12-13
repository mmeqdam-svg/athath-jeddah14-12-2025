// Script to verify posts data loads correctly
const fs = require('fs');
const postsPath = './src/data/posts.ts';
const content = fs.readFileSync(postsPath, 'utf-8');

// Count posts
const postMatches = content.match(/id: '/g);
console.log(`✓ Found ${postMatches ? postMatches.length : 0} posts in data`);

// Check export
if (content.includes('export default posts')) {
  console.log('✓ Default export found');
} else {
  console.log('✗ Default export missing!');
}
