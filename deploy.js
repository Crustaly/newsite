const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment to GitHub Pages...');

try {
  // Build the project
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Create gh-pages branch
  console.log('🌿 Creating gh-pages branch...');
  execSync('git checkout --orphan gh-pages', { stdio: 'inherit' });

  // Remove all files except dist
  console.log('🧹 Cleaning up files...');
  const files = fs.readdirSync('.');
  files.forEach(file => {
    if (file !== 'dist' && file !== '.git') {
      if (fs.lstatSync(file).isDirectory()) {
        fs.rmSync(file, { recursive: true, force: true });
      } else {
        fs.unlinkSync(file);
      }
    }
  });

  // Copy dist contents to root
  console.log('📋 Copying build files...');
  const distFiles = fs.readdirSync('dist');
  distFiles.forEach(file => {
    const srcPath = path.join('dist', file);
    const destPath = file;
    if (fs.lstatSync(srcPath).isDirectory()) {
      fs.cpSync(srcPath, destPath, { recursive: true });
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });

  // Remove dist folder
  fs.rmSync('dist', { recursive: true, force: true });

  // Add all files
  console.log('➕ Adding files to git...');
  execSync('git add .', { stdio: 'inherit' });

  // Commit
  console.log('💾 Committing changes...');
  execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });

  // Push to gh-pages branch
  console.log('📤 Pushing to gh-pages branch...');
  execSync('git push origin gh-pages --force', { stdio: 'inherit' });

  // Switch back to main
  console.log('🔄 Switching back to main branch...');
  execSync('git checkout main', { stdio: 'inherit' });

  console.log('✅ Deployment complete!');
  console.log('🌐 Your site should be available at: https://crustaly.github.io/newsite/');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
