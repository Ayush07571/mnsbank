# MNS Bank Link Validation Summary
# Generated: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

Write-Host "🔗 MNS Bank Link Validation Summary" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

# Get all page files
$pageFiles = Get-ChildItem -Path "src/app" -Recurse -Filter "page.tsx" | ForEach-Object { $_.FullName }

Write-Host "📊 Page Inventory Analysis" -ForegroundColor Green
Write-Host "Found $($pageFiles.Count) page files" -ForegroundColor White
Write-Host ""

# Expected pages based on tasks.md (67 total)
$expectedPages = @(
    "/",
    "/savings-account",
    "/current-account", 
    "/double-deposit",
    "/time-deposit",
    "/recurring-deposit",
    "/personal-loan",
    "/home-loan",
    "/car-loan",
    "/gold-loan",
    "/consumer-loan",
    "/festival-loan",
    "/house-construction-loan",
    "/loan-against-property",
    "/loan-against-fd",
    "/loan-against-nsc",
    "/mortgage-overdraft",
    "/education-loan",
    "/biz-double-deposit",
    "/biz-time-deposit",
    "/biz-recurring-deposit",
    "/working-capital-loan",
    "/transport-loan",
    "/professional-loan",
    "/micro-finance",
    "/self-employed-loan",
    "/overdraft-facility",
    "/upi-qr",
    "/bbps",
    "/imps",
    "/neft-rtgs",
    "/sms-banking",
    "/mobile-banking",
    "/net-banking",
    "/atm",
    "/debit-cards",
    "/pan",
    "/locker",
    "/pm-jeevan-yojana",
    "/pm-suraksha-yojana",
    "/interest-rates",
    "/service-charges",
    "/download-forms",
    "/privacy-policy",
    "/policy-centre",
    "/kyc-ckyc",
    "/cyber-awareness",
    "/positive-pay",
    "/ifsc-codes",
    "/deaf-unclaimed-deposits",
    "/grievance-redressal",
    "/contact-us",
    "/branch-locator",
    "/atm-locator",
    "/locate-us",
    "/about-us",
    "/board-of-directors",
    "/committees",
    "/management",
    "/annual-reports",
    "/membership",
    "/careers",
    "/tenders",
    "/emi-calculator",
    "/feedback",
    "/sitemap",
    "/insurance",
    "/mutual-funds",
    "/demat",
    "/asba"
)

# Convert page files to URLs
$existingUrls = @()
foreach ($file in $pageFiles) {
    if ($file -match "src\\app\\\(public\)\\page.tsx") {
        $url = "/"
    } else {
        $url = $file -replace ".*src\\app\\", "/" -replace "\\page.tsx", "" -replace "\\", "/"
    }
    $existingUrls += $url
}

Write-Host "📋 Expected pages: $($expectedPages.Count)" -ForegroundColor White
Write-Host "📁 Existing pages: $($existingUrls.Count)" -ForegroundColor White
Write-Host ""

# Find missing pages
$missingPages = $expectedPages | Where-Object { $_ -notin $existingUrls }
Write-Host "❌ Missing pages: $($missingPages.Count)" -ForegroundColor $(if ($missingPages.Count -eq 0) { 'Green' } else { 'Red' })

if ($missingPages.Count -gt 0) {
    foreach ($missing in $missingPages) {
        Write-Host "   - $missing" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "🔍 Link Analysis" -ForegroundColor Cyan
Write-Host "================" -ForegroundColor Cyan

# Analyze internal links in existing pages
$allInternalLinks = @()
$brokenLinks = @()

foreach ($file in $pageFiles) {
    try {
        $content = Get-Content -Path $file -Raw -ErrorAction Stop
        
        # Find all internal links
        $links = ([regex]'href="(/[^"]*)"').Matches($content) | ForEach-Object { $_.Groups[1].Value }
        
        # Filter internal links only
        $internalLinks = $links | Where-Object { 
            $_ -match "^/" -and 
            $_ -notmatch "^http" -and 
            $_ -notmatch "#" -and
            $_ -notmatch "^mailto:" -and
            $_ -notmatch "^tel:"
        } | Sort-Object -Unique
        
        $allInternalLinks += $internalLinks
        
        # Check if links point to existing pages
        foreach ($link in $internalLinks) {
            if ($link -notin $existingUrls) {
                $brokenLinks += @{
                    SourceFile = $file
                    BrokenLink = $link
                }
                Write-Host "❌ BROKEN LINK: $link (in $file)" -ForegroundColor Red
            }
        }
        
    } catch {
        Write-Host "⚠️  Error reading $file`: $($_.Exception.Message)" -ForegroundColor Yellow
    }
}

$uniqueLinks = $allInternalLinks | Sort-Object -Unique

Write-Host ""
Write-Host "📊 Link Statistics" -ForegroundColor Green
Write-Host "==================" -ForegroundColor Green
Write-Host "Total internal links found: $($allInternalLinks.Count)" -ForegroundColor White
Write-Host "Unique internal links: $($uniqueLinks.Count)" -ForegroundColor White
Write-Host "Broken internal links: $($brokenLinks.Count)" -ForegroundColor $(if ($brokenLinks.Count -eq 0) { 'Green' } else { 'Red' })
Write-Host ""

# Final summary
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "🎯 VALIDATION SUMMARY" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

if ($missingPages.Count -eq 0 -and $brokenLinks.Count -eq 0) {
    Write-Host "🎉 SUCCESS: Zero broken links detected!" -ForegroundColor Green
    Write-Host "✅ All $($expectedPages.Count) pages are present" -ForegroundColor Green
    Write-Host "✅ All $($uniqueLinks.Count) internal links are valid" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 READY FOR DEPLOYMENT: Complete 67-page inventory with zero broken links" -ForegroundColor Green
} else {
    Write-Host "❌ ISSUES FOUND:" -ForegroundColor Red
    if ($missingPages.Count -gt 0) {
        Write-Host "   - $($missingPages.Count) missing page files" -ForegroundColor Red
    }
    if ($brokenLinks.Count -gt 0) {
        Write-Host "   - $($brokenLinks.Count) broken internal links" -ForegroundColor Red
    }
    Write-Host ""
    Write-Host "🚨 Please fix these issues before deployment." -ForegroundColor Red
}
