# Deploy to GitHub Pages from main branch
Write-Host "Building project..." -ForegroundColor Green
npm run build

Write-Host "Creating gh-pages branch..." -ForegroundColor Green
git checkout --orphan gh-pages

Write-Host "Removing all files except dist..." -ForegroundColor Green
git rm -rf .

Write-Host "Copying dist contents to root..." -ForegroundColor Green
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

Write-Host "Adding all files..." -ForegroundColor Green
git add .

Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "Deploy to GitHub Pages"

Write-Host "Pushing to gh-pages branch..." -ForegroundColor Green
git push origin gh-pages --force

Write-Host "Switching back to main branch..." -ForegroundColor Green
git checkout main

Write-Host "Deployment complete!" -ForegroundColor Green
Write-Host "Your site should be available at: https://crustaly.github.io/newsite/" -ForegroundColor Yellow
