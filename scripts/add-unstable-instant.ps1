# Script to add unstable_instant export to all page.tsx files
# This ensures instant navigation across all pages

$rootDir = "src\app"
$pageFiles = Get-ChildItem -Path $rootDir -Recurse -Filter "page.tsx"

Write-Host "Found $($pageFiles.Count) page files to update..."

foreach ($file in $pageFiles) {
    Write-Host "Processing: $($file.FullName)"
    
    $content = Get-Content -Path $file.FullName -Raw
    
    # Check if unstable_instant export already exists
    if ($content -match "export const unstable_instant") {
        Write-Host "  - Already has unstable_instant export, skipping"
        continue
    }
    
    # Find the last export statement and add unstable_instant after it
    $lines = $content -split "`r"
    $lastExportIndex = -1
    
    for ($i = 0; $i -lt $lines.Count; $i++) {
        if ($lines[$i] -match "^export const|^export function|^export default|^export class") {
            $lastExportIndex = $i
        }
    }
    
    if ($lastExportIndex -ge 0) {
        # Insert unstable_instant after the last export
        $lines[$lastExportIndex + 1] = "`nexport const unstable_instant = {`n  prefetch: 'static',`n};`n"
        
        $newContent = $lines -join "`r"
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
        Write-Host "  - Added unstable_instant export"
    } else {
        Write-Host "  - No export found, adding at the end"
        $newContent = $content + "`n`nexport const unstable_instant = {`n  prefetch: 'static',`n};"
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
    }
}

Write-Host "Completed adding unstable_instant exports to all page files!"
