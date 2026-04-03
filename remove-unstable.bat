@echo off
echo Removing unstable_instant exports from all TSX files...

for /r "src\app" %%f in (*.tsx) do (
    echo Processing %%f
    powershell -Command "(Get-Content '%%f') -replace 'export const unstable_instant = \{[^}]+\};\s*', '' | Set-Content '%%f'"
)

echo Done!
