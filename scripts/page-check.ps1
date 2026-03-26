# MNS Bank Page Inventory Checker
Write-Host "🔗 MNS Bank Page Inventory Checker" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan

# Define the complete 67-page inventory
$pages = @(
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

Write-Host "📋 Total pages in inventory: $($pages.Count)" -ForegroundColor Green
Write-Host ""

$existingPages = 0
$missingPages = @()

foreach ($page in $pages) {
    if ($page -eq "/") {
        $filePath = "src/app/(public)/page.tsx"
    } else {
        $filePath = "src/app$($page)/page.tsx" -replace "//", "/"
    }
    
    if (Test-Path $filePath) {
        $existingPages++
        Write-Host "✅ EXISTS: $page" -ForegroundColor Green
    } else {
        $missingPages += $page
        Write-Host "❌ MISSING: $page" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "=================================" -ForegroundColor Cyan
Write-Host "📊 SUMMARY" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host "Total expected pages: $($pages.Count)" -ForegroundColor White
Write-Host "Existing page files: $existingPages" -ForegroundColor Green
Write-Host "Missing page files: $($missingPages.Count)" -ForegroundColor Red

if ($missingPages.Count -eq 0) {
    Write-Host ""
    Write-Host "🎉 SUCCESS: All 67 pages are present!" -ForegroundColor Green
    Write-Host "✅ Complete page inventory validated" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ MISSING PAGES:" -ForegroundColor Red
    foreach ($missing in $missingPages) {
        Write-Host "   - $missing" -ForegroundColor Red
    }
}
