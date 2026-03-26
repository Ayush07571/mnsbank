#!/usr/bin/env pwsh

# MNS Bank Link Inventory Checker
# Creates an inventory of all internal links across the 67 pages

Write-Host "🔗 MNS Bank Link Inventory Checker" -ForegroundColor Cyan
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

Write-Host "📋 Total pages in inventory: $($pages.Count)" -ForegroundColor Green
Write-Host ""

# Check if page files exist
$existingPages = @()
$missingPages = @()

foreach ($page in $pages) {
    # Convert URL to file path
    if ($page -eq "/") {
        $filePath = "src/app/(public)/page.tsx"
    } else {
        $filePath = "src/app$($page)/page.tsx" -replace "//", "/"
    }
    
    if (Test-Path $filePath) {
        $existingPages += $page
        Write-Host "✅ EXISTS: $page" -ForegroundColor Green
    } else {
        $missingPages += $page
        Write-Host "❌ MISSING: $page ($filePath)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "=================================" -ForegroundColor Cyan
Write-Host "📊 PAGE INVENTORY SUMMARY" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Total expected pages: $($pages.Count)" -ForegroundColor White
Write-Host "Existing page files: $($existingPages.Count)" -ForegroundColor $(if ($existingPages.Count -eq $pages.Count) { 'Green' } else { 'Yellow' })
Write-Host "Missing page files: $($missingPages.Count)" -ForegroundColor $(if ($missingPages.Count -eq 0) { 'Green' } else { 'Red' })
Write-Host ""

if ($missingPages.Count -gt 0) {
    Write-Host "❌ MISSING PAGES:" -ForegroundColor Red
    foreach ($missing in $missingPages) {
        Write-Host "   - $missing" -ForegroundColor Red
    }
    Write-Host ""
    Write-Host "🚨 Please create the missing page files before deployment." -ForegroundColor Red
    exit 1
} else {
    Write-Host "🎉 SUCCESS: All 67 pages are present!" -ForegroundColor Green
    Write-Host "✅ Complete page inventory validated" -ForegroundColor Green
    
    # Now extract internal links from existing pages
    Write-Host ""
    Write-Host "🔍 Extracting internal links from all pages..." -ForegroundColor Cyan
    
    $allInternalLinks = @()
    $linkCounts = @{}
    
    foreach ($page in $existingPages) {
        if ($page -eq "/") {
            $filePath = "src/app/(public)/page.tsx"
        } else {
            $filePath = "src/app$($page)/page.tsx" -replace "//", "/"
        }
        
        try {
            $content = Get-Content -Path $filePath -Raw
            
            # Find all internal links (href attributes)
            $links = ([regex]'href="(/[^"]*)"').Matches($content) | ForEach-Object { $_.Groups[1].Value }
            
            # Filter internal links only
            $internalLinks = $links | Where-Object { 
                $_ -match "^/" -and 
                $_ -notmatch "^http" -and 
                $_ -notmatch "#" -and
                $_ -notmatch "^mailto:" -and
                $_ -notmatch "^tel:"
            } | Sort-Object -Unique
            
            foreach ($link in $internalLinks) {
                $allInternalLinks += $link
                if ($linkCounts.ContainsKey($link)) {
                    $linkCounts[$link]++
                } else {
                    $linkCounts[$link] = 1
                }
            }
            
            Write-Host "📄 $page`: $($internalLinks.Count) internal links" -ForegroundColor Gray
            
        } catch {
            Write-Host "❌ Error reading $filePath`: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    
    $uniqueLinks = $allInternalLinks | Sort-Object -Unique
    Write-Host ""
    Write-Host "📊 LINK ANALYSIS:" -ForegroundColor Cyan
    Write-Host "Total internal links found: $($allInternalLinks.Count)" -ForegroundColor White
    Write-Host "Unique internal links: $($uniqueLinks.Count)" -ForegroundColor White
    
    # Check for links to non-existent pages
    Write-Host ""
    Write-Host "🔍 Validating link targets..." -ForegroundColor Cyan
    
    $invalidLinks = @()
    foreach ($link in $uniqueLinks) {
        if ($link -eq "/") {
            $targetPath = "src/app/(public)/page.tsx"
        } else {
            $targetPath = "src/app$($link)/page.tsx" -replace "//", "/"
        }
        
        if (-not (Test-Path $targetPath)) {
            $invalidLinks += @{
                Link = $link
                Count = $linkCounts[$link]
                Sources = @()
            }
            Write-Host "❌ INVALID TARGET: $link (used $($linkCounts[$link]) times)" -ForegroundColor Red
        } else {
            Write-Host "✅ VALID TARGET: $link (used $($linkCounts[$link]) times)" -ForegroundColor Green
        }
    }
    
    Write-Host ""
    if ($invalidLinks.Count -eq 0) {
        Write-Host "🎉 SUCCESS: All internal links point to existing pages!" -ForegroundColor Green
        Write-Host "✅ Zero broken links detected in code analysis" -ForegroundColor Green
        exit 0
    } else {
        Write-Host "❌ FAILURE: Found $($invalidLinks.Count) links to non-existent pages" -ForegroundColor Red
        exit 1
    }
}
