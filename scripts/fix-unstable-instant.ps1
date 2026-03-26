# Script to remove unstable_instant from client components
# unstable_instant can only be used in Server Components

$rootDir = "src\app"
$pageFiles = Get-ChildItem -Path $rootDir -Recurse -Filter "page.tsx"

Write-Host "Processing $($pageFiles.Count) page files to remove unstable_instant from client components..."

foreach ($file in $pageFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Check if it's a client component and has unstable_instant
    if ($content -match "'use client'" -and $content -match "export const unstable_instant") {
        Write-Host "Removing unstable_instant from client component: $($file.FullName)"
        
        # Remove the unstable_instant export
        $content = $content -replace "export const unstable_instant = \{[^}]*\};\s*", ""
        
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "  - Removed unstable_instant export"
    } elseif ($content -match "export const unstable_instant") {
        Write-Host "Keeping unstable_instant in server component: $($file.FullName)"
    }
}

Write-Host "Completed processing unstable_instant exports!"
