#!/usr/bin/env pwsh

# MNS Bank Broken Link Checker
# Validates all 67 pages for broken internal links

Write-Host "🔗 MNS Bank Broken Link Checker" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan

# Define the complete 67-page inventory based on tasks.md
$pages = @(
    # Homepage
    "/",
    
    # Personal Banking - Accounts
    "/savings-account",
    "/current-account", 
    "/double-deposit",
    "/time-deposit",
    "/recurring-deposit",
    
    # Personal Banking - Loans
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
    
    # Business Banking - Accounts
    "/biz-double-deposit",
    "/biz-time-deposit",
    "/biz-recurring-deposit",
    "/current-account", # Shared with personal
    
    # Business Banking - Loans
    "/working-capital-loan",
    "/transport-loan",
    "/professional-loan",
    "/micro-finance",
    "/self-employed-loan",
    "/overdraft-facility",
    
    # Digital Services
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
    
    # Information Pages
    "/interest-rates",
    "/service-charges",
    "/download-forms",
    "/privacy-policy",
    "/policy-centre",
    "/kyc-ckyc",
    "/cyber-awareness",
    "/positive-pay",
    "/ifsc-codes",
    
    # Compliance Pages
    "/deaf-unclaimed-deposits",
    "/grievance-redressal",
    
    # Location Pages
    "/contact-us",
    "/branch-locator",
    "/atm-locator",
    "/locate-us",
    
    # About Pages
    "/about-us",
    "/board-of-directors",
    "/committees",
    "/management",
    "/annual-reports",
    "/membership",
    "/careers",
    "/tenders",
    
    # Tools & Other
    "/emi-calculator",
    "/feedback",
    "/sitemap",
    
    # Optional (if licensed)
    "/insurance",
    "/mutual-funds",
    "/demat",
    "/asba"
)

Write-Host "📋 Total pages to check: $($pages.Count)" -ForegroundColor Green
Write-Host ""

# Check if dev server is running
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000" -Method HEAD -TimeoutSec 5 -ErrorAction Stop
    Write-Host "✅ Development server is running on http://localhost:3000" -ForegroundColor Green
} catch {
    Write-Host "❌ Development server is not running. Please start it with 'npm run dev'" -ForegroundColor Red
    Write-Host "   Then run this script again to check for broken links." -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "🔍 Checking all pages for broken internal links..." -ForegroundColor Cyan
Write-Host ""

$brokenLinks = @()
$checkedPages = 0
$totalLinks = 0

foreach ($page in $pages) {
    $checkedPages++
    Write-Host "[$checkedPages/$($pages.Count)] Checking: $page" -ForegroundColor Yellow
    
    try {
        # Get the page content
        $response = Invoke-WebRequest -Uri "http://localhost:3000$page" -TimeoutSec 10 -ErrorAction Stop
        $content = $response.Content
        
        # Extract all internal links (href attributes that start with /)
        $links = ([regex]'href="(/[^"]*)"').Matches($content) | ForEach-Object { $_.Groups[1].Value }
        
        # Remove duplicates and filter out external links and anchors
        $internalLinks = $links | Where-Object { 
            $_ -match "^/" -and 
            $_ -notmatch "^http" -and 
            $_ -notmatch "#" -and
            $_ -notmatch "^mailto:" -and
            $_ -notmatch "^tel:"
        } | Sort-Object -Unique
        
        $totalLinks += $internalLinks.Count
        
        # Check each internal link
        foreach ($link in $internalLinks) {
            try {
                $linkResponse = Invoke-WebRequest -Uri "http://localhost:3000$link" -Method HEAD -TimeoutSec 5 -ErrorAction Stop
                if ($linkResponse.StatusCode -ne 200) {
                    $brokenLinks += @{
                        SourcePage = $page
                        BrokenLink = $link
                        StatusCode = $linkResponse.StatusCode
                        StatusText = $linkResponse.StatusDescription
                    }
                    Write-Host "  ❌ BROKEN: $link ($($linkResponse.StatusCode))" -ForegroundColor Red
                } else {
                    Write-Host "  ✅ OK: $link" -ForegroundColor Green -NoNewline
                    Write-Host "`r" -NoNewline
                }
            } catch {
                $brokenLinks += @{
                    SourcePage = $page
                    BrokenLink = $link
                    StatusCode = 0
                    StatusText = $_.Exception.Message
                }
                Write-Host "  ❌ BROKEN: $link (Connection failed)" -ForegroundColor Red
            }
        }
        
        if ($internalLinks.Count -eq 0) {
            Write-Host "  ℹ️  No internal links found" -ForegroundColor Gray
        }
        
    } catch {
        Write-Host "  ❌ FAILED to load page: $($_.Exception.Message)" -ForegroundColor Red
        $brokenLinks += @{
            SourcePage = $page
            BrokenLink = "[PAGE_LOAD_FAILED]"
            StatusCode = 0
            StatusText = $_.Exception.Message
        }
    }
    
    Write-Host ""
}

# Summary
Write-Host "=================================" -ForegroundColor Cyan
Write-Host "📊 LINK CHECK SUMMARY" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Pages checked: $checkedPages/$($pages.Count)" -ForegroundColor White
Write-Host "Total internal links found: $totalLinks" -ForegroundColor White
Write-Host "Broken links found: $($brokenLinks.Count)" -ForegroundColor $(if ($brokenLinks.Count -eq 0) { 'Green' } else { 'Red' })
Write-Host ""

if ($brokenLinks.Count -eq 0) {
    Write-Host "🎉 SUCCESS: All internal links are working!" -ForegroundColor Green
    Write-Host "✅ Zero broken links across the 67-page inventory" -ForegroundColor Green
    exit 0
} else {
    Write-Host "❌ FAILURE: Found $($brokenLinks.Count) broken links:" -ForegroundColor Red
    Write-Host ""
    
    foreach ($broken in $brokenLinks) {
        Write-Host "🔗 Source: $($broken.SourcePage)" -ForegroundColor Yellow
        Write-Host "   Link: $($broken.BrokenLink)" -ForegroundColor Red
        Write-Host "   Error: $($broken.StatusCode) - $($broken.StatusText)" -ForegroundColor Gray
        Write-Host ""
    }
    
    Write-Host "🚨 Please fix these broken links before deployment." -ForegroundColor Red
    exit 1
}
