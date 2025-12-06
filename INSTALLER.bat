@echo off
chcp 65001 >nul
color 0A
title 🚀 Installation ActuPro Global

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║          🚀 INSTALLATION ACTUPRO GLOBAL 🚀                ║
echo ║                                                            ║
echo ║     Site d'actualités professionnel avec IA               ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo.

echo [1/8] 🔍 Vérification de Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ ERREUR: Node.js n'est pas installé!
    echo 👉 Installez Node.js depuis: https://nodejs.org
    pause
    exit /b 1
)
echo ✅ Node.js détecté!
echo.

echo [2/8] 📦 Création du projet Next.js...
echo ⏳ Patientez 2-3 minutes...
call npx create-next-app@latest . --typescript --tailwind --app --eslint --no-src-dir --import-alias "@/*" --use-npm

echo.
echo [3/8] 📚 Installation des dépendances...
echo ⏳ Patientez 3-5 minutes...
call npm install axios rss-parser @google/generative-ai @sendgrid/mail date-fns

echo.
echo [4/8] 📁 Création de la structure des dossiers...
mkdir lib 2>nul
mkdir public\images 2>nul
mkdir public\data 2>nul
mkdir app\actualites 2>nul
mkdir app\politique 2>nul
mkdir app\finance 2>nul
mkdir app\digital 2>nul
mkdir app\api\analyze 2>nul
mkdir app\api\newsletter 2>nul
echo ✅ Structure créée!

echo.
echo [5/8] ⚙️ Création de la configuration...

REM next.config.js
(
echo /** @type {import('next'^).NextConfig} */
echo const nextConfig = {
echo   reactStrictMode: true,
echo   images: {
echo     domains: ['images.unsplash.com', 'source.unsplash.com', 'cdn.pixabay.com', 'picsum.photos'],
echo     unoptimized: true,
echo   },
echo }
echo.
echo module.exports = nextConfig
) > next.config.js

REM netlify.toml
(
echo [build]
echo   command = "npm run build"
echo   publish = ".next"
echo.
echo [[plugins]]
echo   package = "@netlify/plugin-nextjs"
) > netlify.toml

REM .env.local
(
echo NEXT_PUBLIC_SITE_URL=http://localhost:3000
echo NEWSAPI_KEY=VOTRE_CLE_NEWSAPI_ICI
echo GOOGLE_GEMINI_API_KEY=VOTRE_CLE_GEMINI_ICI
echo NEXT_PUBLIC_ONESIGNAL_APP_ID=VOTRE_ID_ONESIGNAL_ICI
echo SENDGRID_API_KEY=VOTRE_CLE_SENDGRID_ICI
) > .env.local

echo ✅ Configuration créée!

echo.
echo [6/8] 🎨 Création des fichiers CSS...
(
echo @tailwind base;
echo @tailwind components;
echo @tailwind utilities;
echo.
echo @layer base {
echo   body {
echo     @apply bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100;
echo   }
echo }
echo.
echo .gradient-bg {
echo   background: linear-gradient(135deg, #667eea 0%%, #764ba2 100%%^);
echo }
) > app\globals.css

echo ✅ CSS créé!

echo.
echo [7/8] 📝 Création du fichier README...
(
echo # 🚀 ActuPro Global
echo.
echo Site d'actualités professionnel avec analyse IA
echo.
echo ## 🎯 Prochaines étapes:
echo.
echo 1. Ouvrez .env.local
echo 2. Remplacez les clés API par vos vraies clés
echo 3. Lancez: npm run dev
echo 4. Ouvrez: http://localhost:3000
echo.
echo ## 📚 Documentation complète dans GUIDE.md
) > README.md

echo ✅ README créé!

echo.
echo [8/8] 🎉 Finalisation...
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║           ✅ INSTALLATION TERMINÉE !                      ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo 📋 PROCHAINES ÉTAPES:
echo.
echo 1️⃣  Ouvrez le fichier: .env.local
echo 2️⃣  Remplacez les clés API par vos vraies clés
echo 3️⃣  Double-cliquez sur: DEMARRER.bat
echo.
echo 📂 Tous les fichiers sont dans: %CD%
echo.
pause