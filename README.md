
# 🏠 Tvoje Hnízdo – Konfigurátor domu

Tento konfigurátor slouží k výběru a nacenění montovaného domu podle individuálních preferencí zákazníka.

## ✅ Funkce
- Výběr tvaru domu (Obdélník, L, T, U)
- Dispozice (2+kk až 5+kk)
- Plocha domu (slider 30–200 m²)
- Terasa a zastřešení (volitelné)
- Interiér (počet WC, koupelna)
- Elektroinstalace (základní / chytrá domácnost)
- Kontaktní údaje (včetně okresu a termínu)
- Rekapitulace s cenou
- Export do PDF
- Odeslání poptávky e-mailem (EmailJS – připraveno)

## 📦 Struktura
```
index.html         # Hlavní stránka konfigurátoru
style.css          # Vzhled
script.js          # Logika výpočtu, PDF, EmailJS
.gitignore         # Git ignorace
README.md          # Tento soubor
```

## 🚀 Nasazení
1. Nahraj celý projekt na GitHub
2. Aktivuj GitHub Pages (root, branch main)
3. Nebo nahraj na Vercel

## ✉️ EmailJS nastavení
1. Vytvoř účet na https://emailjs.com
2. Získej Public Key a vlož jej do `script.js`
3. Vytvoř šablonu s ID např. `template_xxx`

---

MIT License © tvojehnizdo.cz
