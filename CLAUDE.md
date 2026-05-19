# ITSD Softwareentwicklung – Website Neuaufbau

## Projektziel

Neuaufbau der Website **https://itsd-softwareentwicklung.de/** – individuelle Softwareentwicklung für Konzerne und Unternehmen. Die bestehende Site basiert auf WordPress und soll durch einen modernen, eigenständigen Next.js-Stack ersetzt werden.

---

## Unternehmens-Kontext

**Firma:** ITSD Consulting GmbH  
**Website:** https://itsd-softwareentwicklung.de/  
**Slogan:** „Individuelle Software für Konzerne und Unternehmen"  
**Zielgruppe:** Konzerne, mittelständische Unternehmen

---

## Seitenstruktur (Original)

### Navigation (Hauptmenü)
```
Softwareentwicklung
Software Betreuung
Vorteile
Über uns
Kontakt
```

---

## Leistungen & Inhalte

| Leistung | Beschreibung |
|---|---|
| **Human Resources** | Projektspitzen abfangen und Kompetenzen liefern. Spezialisten für alle Themen der Softwareentwicklung. |
| **Softwareentwicklung** | Von der ersten Idee bis zur anschließenden Betreuung: Komplettanbieter für moderne Softwareentwicklung. |
| **Softwarebetreuung** | Optimale Organisation nach Kanban in enger Abstimmung mit dem Kunden. |
| **Sichere Software** | Standardisierte Sicherheitsverfahren, weitreichende Kenntnisse in der Datenverschlüsselung. |
| **Cloud Ready** | Plattformunabhängiger Einsatz, geschützt vor Ausfällen. |
| **Full-Service Software** | 1st – 3rd Level Support und Hosting in der Cloud oder auf dedizierten Servern. |
| **SCRUM** | Alle SCRUM Rollen bekannt und perfekt besetzbar. |

---

## Kernmerkmale / Vorteile

- Profis mit über 20 Jahren Erfahrung
- Individueller SCRUM Entwicklungsprozess
- Sicherheit, Expertise und Kompetenz
- Alle Projekte in Time & Budget

---

## Positioning / Kernbotschaft

> „Individuelle Software für Konzerne und Unternehmen – Software von der Idee ab entwickelt."

Drei Differenzierungsmerkmale:
1. 20+ Jahre Erfahrung
2. SCRUM-Entwicklungsprozess
3. Sicherheit & Verschlüsselung

---

## Kundenstimmen

- **Andreas Meynhardt** – TOYOTA Kreditbank
- **Eckhard Jostmeier** – Customize-IT GmbH & Co. KG
- **Gerald Wischnewski** – Apotheken-Rechen-Zentrum GmbH
- **Roland Blask**

---

## Kontaktdaten

- **Adresse:** Blankensteinstraße 62, 32257 Bünde
- **Telefon:** +49 5223 7933400
- **E-Mail:** dev@itsd-consulting.de

---

## Footer

- © ITSD Consulting GmbH
- Links: Impressum, Datenschutz
- Social: LinkedIn, XING

---

## Technologie – Original

| Schicht | Technologie |
|---|---|
| CMS | WordPress |
| Hosting | Eigener Server |

---

## Neuaufbau – Tech-Stack

Reines Frontend / Landing Page – kein eigenes Backend.

| Schicht | Technologie |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Sprache | TypeScript |
| Icons | Lucide React |
| Formulare | mailto |
| Deployment | Vercel |

---

## Verbesserungen gegenüber Original

### Design & UX
- [x] Modernes, aufgeräumtes Design (kein WordPress-Look)
- [x] Mobile-First Responsive Layout
- [x] Klare Call-to-Actions auf jeder Seite
- [ ] Animierte Sektionsübergänge (Framer Motion)

### Inhalt
- [x] Kontaktdaten sichtbar auf der Startseite
- [x] Kundenstimmen / Testimonials
- [x] Echte Bilder aus der Original-Site
- [ ] FAQ-Sektion
- [ ] Detailseiten für jede Leistung

### Technik
- [x] Kein WordPress-Overhead – eigenständige, schnelle Site
- [ ] SEO-optimiert (Meta-Tags, strukturierte Daten)
- [ ] DSGVO-konformes Cookie-Banner
- [x] Kontaktformular (mailto)

---

## Seitenaufbau (Landing Page – Single Page + Unterseiten)

```
/ (Startseite, Scroll-Landing-Page)
  ├── #hero          → Headline, Subline, CTAs
  ├── #leistungen    → 7 Leistungskarten mit Bildern
  ├── #vorteile      → 3 Kernstärken
  ├── #referenzen    → 4 Testimonials
  ├── #kontakt       → Kontaktformular + Kontaktdaten

Unterseiten:
/softwareentwicklung   → Detailseite Softwareentwicklung
/software-betreuung    → Detailseite Software Betreuung
/hr-loesungen          → Detailseite HR
/ueber-uns             → Über uns
/impressum             → Impressum
/datenschutz           → Datenschutzerklärung
```

---

## Entwicklungs-Konventionen

- Sprache: Deutsch (alle User-facing Texte)
- Code-Sprache: Englisch (Variablen, Funktionen, Komponenten)
- Keine unnötigen Kommentare im Code
- Komponenten klein und wiederverwendbar halten
- Tailwind-Klassen direkt im JSX, keine separaten CSS-Dateien außer globals.css
- Primärfarbe: `#006098`, Dunkel: `#3d4452`
