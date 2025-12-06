@echo off
chcp 65001 >nul
color 0B
title 🚀 ActuPro Global - Serveur Local

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║          🚀 ACTUPRO GLOBAL - SERVEUR LOCAL 🚀            ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

echo [1/2] 🔍 Vérification des fichiers...
if not exist "package.json" (
    echo ❌ ERREUR: Lancez d'abord INSTALLER.bat
    pause
    exit /b 1
)
echo ✅ Fichiers OK!
echo.

echo [2/2] 🚀 Démarrage du serveur...
echo.
echo ┌────────────────────────────────────────────────────────────┐
echo │                                                            │
echo │  ✅ Serveur démarré!                                      │
echo │                                                            │
echo │  🌐 Ouvrez votre navigateur:                              │
echo │     http://localhost:3000                                 │
echo │                                                            │
echo │  ⏹️  Pour arrêter: Appuyez sur Ctrl+C                    │
echo │                                                            │
echo └────────────────────────────────────────────────────────────┘
echo.

call npm run dev