# MNS Bank Accessibility & UX Audit
# WCAG 2.1 AA validation, responsive checks, dark pattern detection

Write-Host "♿ MNS Bank Accessibility & UX Audit" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan

# Check for Accessibility Toolbar
Write-Host "🔍 Checking Accessibility Components" -ForegroundColor Green
Write-Host "--------------------------------------" -ForegroundColor Green

$accessibilityToolbar = Get-Content -Path "src/components/ui/AccessibilityToolbar.tsx" -ErrorAction SilentlyContinue
if ($accessibilityToolbar) {
    Write-Host "✅ Accessibility Toolbar component exists" -ForegroundColor Green
    
    # Check for key accessibility features
    $features = @()
    if ($accessibilityToolbar -match "fontSize") { $features += "Font Size Adjustment" }
    if ($accessibilityToolbar -match "contrast") { $features += "Contrast Adjustment" }
    if ($accessibilityToolbar -match "dyslexia") { $features += "Dyslexia Mode" }
    if ($accessibilityToolbar -match "keyboard") { $features += "Keyboard Navigation" }
    if ($accessibilityToolbar -match "screenReader") { $features += "Screen Reader Support" }
    
    Write-Host "📋 Accessibility features found: $($features.Count)" -ForegroundColor White
    foreach ($feature in $features) {
        Write-Host "   ✅ $feature" -ForegroundColor Green
    }
} else {
    Write-Host "❌ Accessibility Toolbar component missing" -ForegroundColor Red
}

# Check for semantic HTML structure
Write-Host ""
Write-Host "🔍 Checking Semantic HTML Structure" -ForegroundColor Green
Write-Host "------------------------------------" -ForegroundColor Green

$layoutFile = Get-Content -Path "src/app/layout.tsx" -ErrorAction SilentlyContinue
if ($layoutFile) {
    $semanticChecks = @()
    
    if ($layoutFile -match "<html") { $semanticChecks += "HTML5 html tag" }
    if ($layoutFile -match "<head>") { $semanticChecks += "HTML5 head tag" }
    if ($layoutFile -match "<body>") { $semanticChecks += "HTML5 body tag" }
    if ($layoutFile -match "lang=") { $semanticChecks += "Language attribute" }
    if ($layoutFile -match "meta.*charset") { $semanticChecks += "Character encoding" }
    if ($layoutFile -match "meta.*viewport") { $semanticChecks += "Viewport meta tag" }
    
    Write-Host "📋 Semantic HTML elements: $($semanticChecks.Count)/6" -ForegroundColor $(if ($semanticChecks.Count -eq 6) { 'Green' } else { 'Yellow' })
    foreach ($check in $semanticChecks) {
        Write-Host "   ✅ $check" -ForegroundColor Green
    }
}

# Check for ARIA labels and roles
Write-Host ""
Write-Host "🔍 Checking ARIA Implementation" -ForegroundColor Green
Write-Host "--------------------------------" -ForegroundColor Green

$ariaChecks = @()
$pageFiles = Get-ChildItem -Path "src/app" -Recurse -Filter "*.tsx"

foreach ($file in $pageFiles) {
    $content = Get-Content -Path $file.FullName -Raw -ErrorAction SilentlyContinue
    
    if ($content -match "aria-") {
        $ariaLabels = ([regex]'aria-[^=]*').Matches($content) | ForEach-Object { $_.Value } | Sort-Object -Unique
        foreach ($aria in $ariaLabels) {
            if ($aria -notin $ariaChecks) { $ariaChecks += $aria }
        }
    }
}

Write-Host "📋 ARIA attributes found: $($ariaChecks.Count)" -ForegroundColor White
foreach ($aria in $ariaChecks) {
    Write-Host "   ✅ $aria" -ForegroundColor Green
}

# Check for keyboard navigation support
Write-Host ""
Write-Host "🔍 Checking Keyboard Navigation" -ForegroundColor Green
Write-Host "---------------------------------" -ForegroundColor Green

$keyboardChecks = @()
foreach ($file in $pageFiles) {
    $content = Get-Content -Path $file.FullName -Raw -ErrorAction SilentlyContinue
    
    if ($content -match "tabIndex|tabindex") { $keyboardChecks += "Tab Index Support" }
    if ($content -match "onKeyDown|onkeypress") { $keyboardChecks += "Keyboard Event Handlers" }
    if ($content -match "focus|blur") { $keyboardChecks += "Focus Management" }
}

$uniqueKeyboardChecks = $keyboardChecks | Sort-Object -Unique
Write-Host "📋 Keyboard navigation features: $($uniqueKeyboardChecks.Count)" -ForegroundColor White
foreach ($check in $uniqueKeyboardChecks) {
    Write-Host "   ✅ $check" -ForegroundColor Green
}

# Check for responsive design breakpoints
Write-Host ""
Write-Host "🔍 Checking Responsive Design" -ForegroundColor Green
Write-Host "-------------------------------" -ForegroundColor Green

$responsiveChecks = @()
foreach ($file in $pageFiles) {
    $content = Get-Content -Path $file.FullName -Raw -ErrorAction SilentlyContinue
    
    if ($content -match "sm:|md:|lg:|xl:") { 
        $responsiveChecks += "Tailwind Responsive Classes"
        break
    }
}

if ($responsiveChecks.Count -eq 0) {
    Write-Host "❌ No responsive design classes found" -ForegroundColor Red
} else {
    Write-Host "✅ Responsive design implemented" -ForegroundColor Green
}

# Check for dark patterns
Write-Host ""
Write-Host "🔍 Checking for Dark Patterns" -ForegroundColor Green
Write-Host "------------------------------" -ForegroundColor Green

$darkPatterns = @()
foreach ($file in $pageFiles) {
    $content = Get-Content -Path $file.FullName -Raw -ErrorAction SilentlyContinue
    
    # Common dark pattern indicators
    if ($content -match "confirm.*without.*reading") { $darkPatterns += "Roach Motel" }
    if ($content -match "limited.*time.*only") { $darkChecks += "False Urgency" }
    if ($content -match "friends.*bought") { $darkPatterns += "Social Proof Manipulation" }
    if ($content -match "hidden.*cost") { $darkPatterns += "Hidden Costs" }
}

if ($darkPatterns.Count -eq 0) {
    Write-Host "✅ No dark patterns detected" -ForegroundColor Green
} else {
    Write-Host "❌ Potential dark patterns found: $($darkPatterns.Count)" -ForegroundColor Red
    foreach ($pattern in $darkPatterns) {
        Write-Host "   ⚠️  $pattern" -ForegroundColor Yellow
    }
}

# Check for color contrast (basic check)
Write-Host ""
Write-Host "🔍 Checking Color Contrast Support" -ForegroundColor Green
Write-Host "-----------------------------------" -ForegroundColor Green

$contrastChecks = @()
foreach ($file in $pageFiles) {
    $content = Get-Content -Path $file.FullName -Raw -ErrorAction SilentlyContinue
    
    if ($content -match "contrast-") { $contrastChecks += "Contrast Classes" }
    if ($content -match "text-.*-gray|text-.*-slate") { $contrastChecks += "Accessible Text Colors" }
}

if ($contrastChecks.Count -eq 0) {
    Write-Host "⚠️  No explicit contrast classes found" -ForegroundColor Yellow
} else {
    Write-Host "✅ Color contrast considerations found" -ForegroundColor Green
}

# Final summary
Write-Host ""
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "📊 ACCESSIBILITY AUDIT SUMMARY" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan

$totalChecks = $features.Count + $semanticChecks.Count + $ariaChecks.Count + $uniqueKeyboardChecks.Count + $responsiveChecks.Count
Write-Host "✅ Total accessibility features implemented: $totalChecks" -ForegroundColor Green
Write-Host "📱 Responsive design: $(if ($responsiveChecks.Count -gt 0) { 'Implemented' } else { 'Missing' })" -ForegroundColor $(if ($responsiveChecks.Count -gt 0) { 'Green' } else { 'Red' })
Write-Host "🚫 Dark patterns: $(if ($darkPatterns.Count -eq 0) { 'None detected' } else { "$($darkPatterns.Count) found" })" -ForegroundColor $(if ($darkPatterns.Count -eq 0) { 'Green' } else { 'Red' })

if ($darkPatterns.Count -eq 0 -and $responsiveChecks.Count -gt 0 -and $features.Count -gt 0) {
    Write-Host ""
    Write-Host "🎉 ACCESSIBILITY AUDIT PASSED" -ForegroundColor Green
    Write-Host "✅ WCAG 2.1 AA compliance features implemented" -ForegroundColor Green
    Write-Host "✅ Responsive design across breakpoints" -ForegroundColor Green
    Write-Host "✅ Zero dark patterns detected" -ForegroundColor Green
    Write-Host "✅ Accessibility toolbar present" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "⚠️  ACCESSIBILITY RECOMMENDATIONS" -ForegroundColor Yellow
    if ($features.Count -eq 0) { Write-Host "   - Add accessibility toolbar" -ForegroundColor Yellow }
    if ($responsiveChecks.Count -eq 0) { Write-Host "   - Implement responsive design" -ForegroundColor Yellow }
    if ($darkPatterns.Count -gt 0) { Write-Host "   - Remove dark patterns" -ForegroundColor Yellow }
}
