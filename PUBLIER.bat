@echo off
chcp 65001 >nul
color 0E
title 📤 Publication sur GitHub

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║          📤 PUBLICATION SUR GITHUB & NETLIFY 📤          ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

set /p username="hichammakkass-web"
set /p email="hichammakkass@gmail.com"

echo.
echo [1/5] ⚙️ Configuration Git...
git config --global user.name "%username%"
git config --global user.email "%email%"
echo ✅ Configuration OK!

echo.
echo [2/5] 📦 Initialisation du dépôt...
git init
echo ✅ Dépôt initialisé!

echo.
echo [3/5] 📁 Ajout des fichiers...
git add .
echo ✅ Fichiers ajoutés!

echo.
echo [4/5] 💾 Création du commit...
git commit -m "🚀 Premier déploiement ActuPro Global"
echo ✅ Commit créé!

echo.
echo [5/5] 📤 Prêt pour la publication...
echo.
echo ┌────────────────────────────────────────────────────────────┐
echo │                                                            │
echo │  🎯 PROCHAINES ÉTAPES:                                    │
echo │                                                            │
echo │  1. Allez sur: https://github.com/new                     │
echo │  2. Repository name: mon-site-actu                        │
echo │  3. Sélectionnez: Public                                  │
echo │  4. NE COCHEZ PAS "Add a README file"                     │
echo │  5. Cliquez "Create repository"                           │
echo │                                                            │
echo │  6. Copiez ces commandes depuis la page GitHub:           │
echo │     git remote add origin ...                             │
echo │     git branch -M main                                    │
echo │     git push -u origin main                               │
echo │                                                            │
echo │  7. Collez-les ici et appuyez sur Entrée                  │
echo │                                                            │
echo └────────────────────────────────────────────────────────────┘
echo.

pause