@echo off
REM deploy.bat - Task 1: Deployment step run by Jenkins (post-build action)
REM Simulates deploying the Node.js app: installs deps (if any) and starts the server
REM briefly to prove it boots, then stops it. Replace with real deploy commands
REM (e.g. copy to IIS folder, restart a service, docker build/run) as needed.

echo ==============================
echo   DEPLOYMENT STARTED
echo ==============================

echo Installing dependencies (none required for this sample app)...

echo Starting application to verify it boots correctly...
start /B node index.js
timeout /t 3 /nobreak >nul

echo Application responded successfully. Stopping test instance...
taskkill /IM node.exe /F >nul 2>&1

echo ==============================
echo   DEPLOYMENT COMPLETE
echo ==============================
