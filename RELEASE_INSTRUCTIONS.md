# How to Upload the Setup File to GitHub Releases

Since the EV Wheels Management System setup file is too large for Vercel (162MB), we host it on GitHub Releases instead.

## Steps to Create a Release:

1. **Rename the file** (remove spaces for better URL compatibility):
   - Rename: `EV Wheels Management System-Setup.exe`
   - To: `EV-Wheels-Management-System-Setup.exe`

2. **Go to GitHub Releases**:
   - Visit: https://github.com/ilan2004/ewheels-setup/releases
   - Click "Create a new release" or "Draft a new release"

3. **Create the Release**:
   - **Tag version**: `v1.0.0` (or your current version)
   - **Release title**: `EV Wheels Management System v1.0.0`
   - **Description**: Add release notes (what's new, features, etc.)
   - **Attach files**: Drag and drop `EV-Wheels-Management-System-Setup.exe`
   - Click "Publish release"

4. **Verify the Download Link**:
   - After publishing, the file will be available at:
   - `https://github.com/ilan2004/ewheels-setup/releases/latest/download/EV-Wheels-Management-System-Setup.exe`
   - This is the URL already configured in the landing page!

## For Future Updates:

When you have a new version:
1. Create a new release with a new version tag (e.g., `v1.0.1`, `v1.1.0`)
2. Upload the new setup file
3. The `/latest/` URL will automatically point to the newest release

## Alternative: Use Direct Link

If you prefer, you can also use a specific version link:
```
https://github.com/ilan2004/ewheels-setup/releases/download/v1.0.0/EV-Wheels-Management-System-Setup.exe
```

But using `/latest/` is recommended so you don't need to update the website code for each new version.
