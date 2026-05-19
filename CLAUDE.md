# ITSD Consulting – HR-Portal Neuaufbau

## Projektziel

Neuaufbau und Verbesserung der Website **https://hr.itsd-consulting.de/** – eine B2B-HR-Softwarelösung der ITSD Consulting GmbH. Die bestehende Site basiert auf Liferay Portal und soll durch einen modernen, eigenständigen Tech-Stack ersetzt werden.

---

## Unternehmens-Kontext

**Firma:** ITSD Consulting GmbH  
**Website:** https://itsd-consulting.de  
**Produkt-Site:** https://hr.itsd-consulting.de  
**Slogan:** „Ihr Partner in Sachen HR-Lösungen"  
**Zielgruppe:** Mittelständische und Großunternehmen sowie kommunale Verwaltungen

---

## Seitenstruktur (Original)

### Navigation (Hauptmenü)
```
HR-Lösungen
  ├── HR Produkte
  │   ├── HR-Enterprise 2.0 Portal
  │   ├── ACTUS-ExpertenSystem
  │   ├── MERIT-ExpertenSystem
  │   └── BEM-ExpertenSystem
  └── Branchenlösungen
      ├── TVöD-Lösung
      └── ERA-Lösung

Service
Ansprechpartner
Unternehmen
  ├── Karriere
  └── Anfahrt
News
Anmelden
```

---

## Produkte & Inhalte

### HR-Produkte

| Produkt | Beschreibung |
|---|---|
| **HR-Enterprise 2.0 Portal** | Portallösung mit Social Software, browserbasiert, rollenbasiertes Berechtigungssystem (RBAC) |
| **ACTUS-ExpertenSystem** | Fokus auf Organisationsentwicklung: Stellenbeschreibungen, Stellenbewertungen, Anforderungsprofile |
| **MERIT-ExpertenSystem** | Fokus auf Mitarbeiterentwicklung: Beurteilungen, Zielvereinbarungen, Kompetenzprofile, Personalentwicklung |
| **BEM-ExpertenSystem** | Betriebliches Eingliederungsmanagement |

### Branchenlösungen

| Lösung | Zielgruppe |
|---|---|
| **TVöD-Lösung** | Öffentlicher Dienst / kommunale Verwaltungen |
| **ERA-Lösung** | Metall- und Elektroindustrie |

### Abgedeckte HR-Themen
- Grund- und Leistungsentgelt
- Stellenbeschreibungen & Stellenbewertungen
- Anforderungs- und Kompetenzprofile
- Mitarbeiterbeurteilungen
- Zielvereinbarungen
- Personalentwicklung
- Betriebliches Eingliederungsmanagement (BEM)

---

## Kernmerkmale der Software

- Browserbasierte Architektur (kein Desktop-Client nötig)
- Rollenbasiertes Berechtigungssystem (RBAC)
- Workflow-Unterstützung
- Revisionssichere Dokumentation
- Integration in bestehende Infrastrukturen (SAP, P&I Loga)
- DSGVO-konform
- BSI-zertifizierte Rechenzentren
- Verschlüsselung

---

## Positioning / Kernbotschaft

> „Sie suchen einen kompetenten IT-Partner, der Ihnen anpassbare HR-Lösungen liefert, Sie bei der Analyse und der Integration unterstützt und Sie auch nach der Umsetzung nicht allein lässt?"

Drei Differenzierungsmerkmale:
1. Anpassbare Lösungen
2. Begleitung bei Analyse & Integration
3. Langfristiger Support nach Go-Live

---

## Footer

- © ITSD Consulting GmbH
- Links: Impressum, Datenschutzerklärung
- Verweis auf Hauptseite: itsd-consulting.de

---

## Technologie – Original

| Schicht | Technologie |
|---|---|
| Portal-Framework | Liferay Portal |
| Hosting | BSI-zertifiziertes Rechenzentrum |
| Integrationen | SAP, P&I Loga |

---

## Neuaufbau – Tech-Stack

Reines Frontend / Landing Page – kein Backend-Eigenentwicklung nötig.

| Schicht | Technologie |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Sprache | TypeScript |
| Animationen | Framer Motion |
| Icons | Lucide React |
| Formulare | React Hook Form + mailto / Formspree |
| Deployment | Vercel |

---

## Verbesserungen gegenüber Original

Die folgenden Punkte sollen beim Neuaufbau verbessert werden:

### Design & UX
- [ ] Modernes, aufgeräumtes Design (kein veraltetes Portal-Look)
- [ ] Mobile-First Responsive Layout
- [ ] Klare Call-to-Actions auf jeder Seite
- [ ] Produktvergleichstabelle
- [ ] Animierte Sektionsübergänge

### Inhalt
- [ ] Kontaktdaten sichtbar auf der Startseite (Telefon, E-Mail, Adresse)
- [ ] Kundenreferenzen / Testimonials
- [ ] Screenshots / Demo-Videos der Software
- [ ] FAQ-Sektion
- [ ] Klares Pricing oder „Angebot anfragen"-Flow

### Technik
- [ ] Kein Liferay-Overhead – eigenständige, schnelle Site
- [ ] SEO-optimiert (Meta-Tags, strukturierte Daten)
- [ ] DSGVO-konformes Cookie-Banner
- [ ] Kontaktformular (mailto oder Formspree, kein eigenes Backend)

---

## Seitenaufbau (Landing Page – Single Page + Unterseiten)

Die Startseite (`/`) enthält alle Haupt-Sektionen als Scroll-Landing-Page:

```
/ (Startseite, Scroll-Landing-Page)
  ├── #hero          → Headline, Subline, CTA-Button
  ├── #produkte      → Produktkarten mit Filter (HR-Produkte / Branchenlösungen)
  ├── #features      → Feature-Liste / USPs der Software
  ├── #branchen      → TVöD & ERA kurz erklärt
  ├── #kontakt       → Kontaktformular + Kontaktdaten

Zusätzliche Unterseiten (optional, später):
/produkte/[slug]     → Detailseite je Produkt
/impressum           → Impressum
/datenschutz         → Datenschutzerklärung
```

---

## Entwicklungs-Konventionen

- Sprache: Deutsch (alle User-facing Texte)
- Code-Sprache: Englisch (Variablen, Funktionen, Komponenten)
- Keine unnötigen Kommentare im Code
- Komponenten klein und wiederverwendbar halten
- Tailwind-Klassen direkt im JSX, keine separaten CSS-Dateien außer globals.css
