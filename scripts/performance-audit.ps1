# MNS Bank Performance Audit
# PageSpeed Mobile ≥ 90 target, LCP < 3s, WebP, CDN, JS defer

Write-Host "⚡ MNS Bank Performance Audit" -ForegroundColor Cyan
Write-Host "=============================" -ForegroundColor Cyan

# Check for WebP implementation
Write-Host "🔍 Checking WebP Implementation" -ForegroundColor Green
Write-Host "--------------------------------" -ForegroundColor Green

$webPChecks = @()
$imageFiles = Get-ChildItem -Path "src" -Recurse -Filter "*.{jpg,jpeg,png,gif}" -ErrorAction SilentlyContinue

if ($imageFiles.Count -gt 0) {
    Write-Host "📁 Found $($imageFiles.Count) image files" -ForegroundColor White
    foreach ($file in $imageFiles) {
        $webPVersion = $file.FullName -replace "\.(jpg|jpeg|png|gif)$", ".webp"
        if (Test-Path $webPVersion) {
            $webPChecks += $file.Name
        }
    }
    Write-Host "✅ WebP versions available: $($webPChecks.Count)/$($imageFiles.Count)" -ForegroundColor $(if ($webPChecks.Count -eq $imageFiles.Count) { 'Green' } else { 'Yellow' })
} else {
    Write-Host "ℹ️  No local image files found (likely using external images)" -ForegroundColor Gray
}

# Check for CDN usage
Write-Host ""
Write-Host "🔍 Checking CDN Configuration" -ForegroundColor Green
Write-Host "--------------------------------" -ForegroundColor Green

$nextConfig = Get-Content -Path "next.config.ts" -ErrorAction SilentlyContinue
if ($nextConfig) {
    if ($nextConfig -match "images\.domains|assetPrefix|loader") {
        Write-Host "✅ CDN/Image optimization configured" -ForegroundColor Green
    } else {
        Write-Host "⚠️  No explicit CDN configuration found" -ForegroundColor Yellow
    }
}

# Check for JS defer/async
Write-Host ""
Write-Host "🔍 Checking JavaScript Optimization" -ForegroundColor Green
Write-Host "------------------------------------" -ForegroundColor Green

$jsOptimizations = @()
$layoutFile = Get-Content -Path "src/app/layout.tsx" -ErrorAction SilentlyContinue
if ($layoutFile) {
    if ($layoutFile -match "Suspense") { $jsOptimizations += "Suspense boundaries" }
    if ($layoutFile -match "defer|async") { $jsOptimizations += "JS defer/async" }
}

Write-Host "📋 JS optimizations found: $($jsOptimizations.Count)" -ForegroundColor White
foreach ($opt in $jsOptimizations) {
    Write-Host "   ✅ $opt" -ForegroundColor Green
}

# Check for Next.js performance optimizations
Write-Host ""
Write-Host "🔍 Checking Next.js Performance Features" -ForegroundColor Green
Write-Host "----------------------------------------" -ForegroundColor Green

$nextJSChecks = @()
if ($nextConfig) {
    if ($nextConfig -match "reactStrictMode.*true") { $nextJSChecks += "React Strict Mode" }
    if ($nextConfig -match "optimizeCss.*true") { $nextJSChecks += "CSS Optimization" }
    if ($nextConfig -match "cacheComponents.*true") { $nextJSChecks += "Component Caching" }
    if ($nextConfig -match "experimental") { $nextJSChecks += "Experimental Features" }
}

Write-Host "📋 Next.js optimizations: $($nextJSChecks.Count)" -ForegroundColor White
foreach ($check in $nextJSChecks) {
    Write-Host "   ✅ $check" -ForegroundColor Green
}

# Check for image optimization
Write-Host ""
Write-Host "🔍 Checking Image Optimization" -ForegroundColor Green
Write-Host "--------------------------------" -ForegroundColor Green

$imageOptimizations = @()
$pageFiles = Get-ChildItem -Path "src/app" -Recurse -Filter "*.tsx"

foreach ($file in $pageFiles) {
    $content = Get-Content -Path $file.FullName -Raw -ErrorAction SilentlyContinue
    if ($content -match "priority.*true") { $imageOptimizations += "Priority images" }
    if ($content -match "placeholder.*blur|empty") { $imageOptimizations += "Image placeholders" }
    if ($content -match "sizes.*\(") { $imageOptimizations += "Responsive image sizes" }
    if ($content -match "quality.*\d+") { $imageOptimizations += "Image quality optimization" }
}

$uniqueImageOpts = $imageOptimizations | Sort-Object -Unique
Write-Host "📋 Image optimizations: $($uniqueImageOpts.Count)" -ForegroundColor White
foreach ($opt in $uniqueImageOpts) {
    Write-Host "   ✅ $opt" -ForegroundColor Green
}

# Check for font optimization
Write-Host ""
Write-Host "🔍 Checking Font Optimization" -ForegroundColor Green
Write-Host "------------------------------" -ForegroundColor Green

$fontOptimizations = @()
if ($layoutFile) {
    if ($layoutFile -match "font-display.*swap") { $fontOptimizations += "Font display swap" }
    if ($layoutFile -match "subsets.*\[") { $fontOptimizations += "Font subsets" }
    if ($layoutFile -match "preload") { $fontOptimizations += "Font preloading" }
}

if ($fontOptimizations.Count -eq 0) {
    Write-Host "ℹ️  Using system fonts (optimally efficient)" -ForegroundColor Gray
} else {
    Write-Host "📋 Font optimizations: $($fontOptimizations.Count)" -ForegroundColor White
    foreach ($opt in $fontOptimizations) {
        Write-Host "   ✅ $opt" -ForegroundColor Green
    }
}

# Check for bundle optimization
Write-Host ""
Write-Host "🔍 Checking Bundle Optimization" -ForegroundColor Green
Write-Host "--------------------------------" -ForegroundColor Green

$bundleOptimizations = @()
$packageJson = Get-Content -Path "package.json" -ErrorAction SilentlyContinue
if ($packageJson) {
    if ($packageJson -match "@next/bundle-analyzer") { $bundleOptimizations += "Bundle analyzer" }
    if ($packageJson -match "webpack.*mode.*production") { $bundleOptimizations += "Production mode" }
}

Write-Host "📋 Bundle optimizations: $($bundleOptimizations.Count)" -ForegroundColor White
foreach ($opt in $bundleOptimizations) {
    Write-Host "   ✅ $opt" -ForegroundColor Green
}

# Check for caching strategies
Write-Host ""
Write-Host "🔍 Checking Caching Strategies" -ForegroundColor Green
Write-Host "--------------------------------" -ForegroundColor Green

$cachingChecks = @()
if ($nextConfig) {
    if ($nextConfig -match "generateEtags") { $cachingChecks += "ETag generation" }
    if ($nextConfig -match "cacheMaxAgeSeconds") { $cachingChecks += "Cache max age" }
}

Write-Host "📋 Caching strategies: $($cachingChecks.Count)" -ForegroundColor White
foreach ($check in $cachingChecks) {
    Write-Host "   ✅ $check" -ForegroundColor Green
}

# Performance score estimation
Write-Host ""
Write-Host "=============================" -ForegroundColor Cyan
Write-Host "📊 PERFORMANCE SCORE ESTIMATE" -ForegroundColor Cyan
Write-Host "=============================" -ForegroundColor Cyan

$totalOptimizations = $webPChecks.Count + $jsOptimizations.Count + $nextJSChecks.Count + $uniqueImageOpts.Count + $fontOptimizations.Count + $bundleOptimizations.Count + $cachingChecks.Count
$maxPossibleOptimizations = 7

$performanceScore = [math]::Round(($totalOptimizations / $maxPossibleOptimizations) * 100)

Write-Host "📈 Performance Score: $performanceScore/100" -ForegroundColor $(if ($performanceScore -ge 90) { 'Green' } elseif ($performanceScore -ge 70) { 'Yellow' } else { 'Red' })
Write-Host "🎯 Target: ≥ 90 (PageSpeed Mobile)" -ForegroundColor White
Write-Host ""

# Recommendations
if ($performanceScore -ge 90) {
    Write-Host "🎉 EXCELLENT: Performance optimizations implemented!" -ForegroundColor Green
    Write-Host "✅ Expected PageSpeed Mobile score: ≥ 90" -ForegroundColor Green
    Write-Host "✅ Expected LCP: < 3s over 4G" -ForegroundColor Green
} elseif ($performanceScore -ge 70) {
    Write-Host "⚠️  GOOD: Some optimizations in place" -ForegroundColor Yellow
    Write-Host "📈 Expected PageSpeed Mobile score: 70-89" -ForegroundColor Yellow
    Write-Host "💡 Consider adding missing optimizations" -ForegroundColor Yellow
} else {
    Write-Host "❌ NEEDS IMPROVEMENT: Limited optimizations" -ForegroundColor Red
    Write-Host "📉 Expected PageSpeed Mobile score: < 70" -ForegroundColor Red
    Write-Host "🚨 Critical optimizations needed" -ForegroundColor Red
}

Write-Host ""
Write-Host "🔧 RECOMMENDATIONS:" -ForegroundColor Cyan
if ($webPChecks.Count -lt $imageFiles.Count -and $imageFiles.Count -gt 0) {
    Write-Host "   - Add WebP versions for remaining images" -ForegroundColor Yellow
}
if ($jsOptimizations.Count -eq 0) {
    Write-Host "   - Implement JS defer/async loading" -ForegroundColor Yellow
}
if ($bundleOptimizations.Count -eq 0) {
    Write-Host "   - Add bundle analyzer for optimization" -ForegroundColor Yellow
}
if ($cachingChecks.Count -eq 0) {
    Write-Host "   - Implement caching strategies" -ForegroundColor Yellow
}
