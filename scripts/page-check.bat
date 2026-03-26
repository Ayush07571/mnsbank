@echo off
echo 🔗 MNS Bank Page Inventory Checker
echo =================================
echo.

rem Define the complete 67-page inventory
set /a total=0
set /a existing=0

echo 📋 Checking all 67 pages...
echo.

rem Homepage
call :CheckPage "/" "src\app\(public)\page.tsx"

rem Personal Banking - Accounts
call :CheckPage "/savings-account" "src\app\savings-account\page.tsx"
call :CheckPage "/current-account" "src\app\current-account\page.tsx"
call :CheckPage "/double-deposit" "src\app\double-deposit\page.tsx"
call :CheckPage "/time-deposit" "src\app\time-deposit\page.tsx"
call :CheckPage "/recurring-deposit" "src\app\recurring-deposit\page.tsx"

rem Personal Banking - Loans
call :CheckPage "/personal-loan" "src\app\personal-loan\page.tsx"
call :CheckPage "/home-loan" "src\app\home-loan\page.tsx"
call :CheckPage "/car-loan" "src\app\car-loan\page.tsx"
call :CheckPage "/gold-loan" "src\app\gold-loan\page.tsx"
call :CheckPage "/consumer-loan" "src\app\consumer-loan\page.tsx"
call :CheckPage "/festival-loan" "src\app\festival-loan\page.tsx"
call :CheckPage "/house-construction-loan" "src\app\house-construction-loan\page.tsx"
call :CheckPage "/loan-against-property" "src\app\loan-against-property\page.tsx"
call :CheckPage "/loan-against-fd" "src\app\loan-against-fd\page.tsx"
call :CheckPage "/loan-against-nsc" "src\app\loan-against-nsc\page.tsx"
call :CheckPage "/mortgage-overdraft" "src\app\mortgage-overdraft\page.tsx"
call :CheckPage "/education-loan" "src\app\education-loan\page.tsx"

rem Business Banking - Accounts
call :CheckPage "/biz-double-deposit" "src\app\biz-double-deposit\page.tsx"
call :CheckPage "/biz-time-deposit" "src\app\biz-time-deposit\page.tsx"
call :CheckPage "/biz-recurring-deposit" "src\app\biz-recurring-deposit\page.tsx"

rem Business Banking - Loans
call :CheckPage "/working-capital-loan" "src\app\working-capital-loan\page.tsx"
call :CheckPage "/transport-loan" "src\app\transport-loan\page.tsx"
call :CheckPage "/professional-loan" "src\app\professional-loan\page.tsx"
call :CheckPage "/micro-finance" "src\app\micro-finance\page.tsx"
call :CheckPage "/self-employed-loan" "src\app\self-employed-loan\page.tsx"
call :CheckPage "/overdraft-facility" "src\app\overdraft-facility\page.tsx"

rem Digital Services
call :CheckPage "/upi-qr" "src\app\upi-qr\page.tsx"
call :CheckPage "/bbps" "src\app\bbps\page.tsx"
call :CheckPage "/imps" "src\app\imps\page.tsx"
call :CheckPage "/neft-rtgs" "src\app\neft-rtgs\page.tsx"
call :CheckPage "/sms-banking" "src\app\sms-banking\page.tsx"
call :CheckPage "/mobile-banking" "src\app\mobile-banking\page.tsx"
call :CheckPage "/net-banking" "src\app\net-banking\page.tsx"
call :CheckPage "/atm" "src\app\atm\page.tsx"
call :CheckPage "/debit-cards" "src\app\debit-cards\page.tsx"
call :CheckPage "/pan" "src\app\pan\page.tsx"
call :CheckPage "/locker" "src\app\locker\page.tsx"
call :CheckPage "/pm-jeevan-yojana" "src\app\pm-jeevan-yojana\page.tsx"
call :CheckPage "/pm-suraksha-yojana" "src\app\pm-suraksha-yojana\page.tsx"

rem Information Pages
call :CheckPage "/interest-rates" "src\app\interest-rates\page.tsx"
call :CheckPage "/service-charges" "src\app\service-charges\page.tsx"
call :CheckPage "/download-forms" "src\app\download-forms\page.tsx"
call :CheckPage "/privacy-policy" "src\app\privacy-policy\page.tsx"
call :CheckPage "/policy-centre" "src\app\policy-centre\page.tsx"
call :CheckPage "/kyc-ckyc" "src\app\kyc-ckyc\page.tsx"
call :CheckPage "/cyber-awareness" "src\app\cyber-awareness\page.tsx"
call :CheckPage "/positive-pay" "src\app\positive-pay\page.tsx"
call :CheckPage "/ifsc-codes" "src\app\ifsc-codes\page.tsx"

rem Compliance Pages
call :CheckPage "/deaf-unclaimed-deposits" "src\app\deaf-unclaimed-deposits\page.tsx"
call :CheckPage "/grievance-redressal" "src\app\grievance-redressal\page.tsx"

rem Location Pages
call :CheckPage "/contact-us" "src\app\contact-us\page.tsx"
call :CheckPage "/branch-locator" "src\app\branch-locator\page.tsx"
call :CheckPage "/atm-locator" "src\app\atm-locator\page.tsx"
call :CheckPage "/locate-us" "src\app\locate-us\page.tsx"

rem About Pages
call :CheckPage "/about-us" "src\app\about-us\page.tsx"
call :CheckPage "/board-of-directors" "src\app\board-of-directors\page.tsx"
call :CheckPage "/committees" "src\app\committees\page.tsx"
call :CheckPage "/management" "src\app\management\page.tsx"
call :CheckPage "/annual-reports" "src\app\annual-reports\page.tsx"
call :CheckPage "/membership" "src\app\membership\page.tsx"
call :CheckPage "/careers" "src\app\careers\page.tsx"
call :CheckPage "/tenders" "src\app\tenders\page.tsx"

rem Tools & Other
call :CheckPage "/emi-calculator" "src\app\emi-calculator\page.tsx"
call :CheckPage "/feedback" "src\app\feedback\page.tsx"
call :CheckPage "/sitemap" "src\app\sitemap\page.tsx"

rem Optional (if licensed)
call :CheckPage "/insurance" "src\app\insurance\page.tsx"
call :CheckPage "/mutual-funds" "src\app\mutual-funds\page.tsx"
call :CheckPage "/demat" "src\app\demat\page.tsx"
call :CheckPage "/asba" "src\app\asba\page.tsx"

echo.
echo =================================
echo 📊 SUMMARY
echo =================================
echo Total expected pages: 67
echo Existing page files: %existing%

if %existing%==67 (
    echo.
    echo 🎉 SUCCESS: All 67 pages are present!
    echo ✅ Complete page inventory validated
) else (
    echo.
    echo ❌ Missing pages: %total% - Please create missing page files
)

goto :eof

:CheckPage
set /a total+=1
if exist "%~2" (
    set /a existing+=1
    echo ✅ EXISTS: %~1
) else (
    echo ❌ MISSING: %~1
)
goto :eof
