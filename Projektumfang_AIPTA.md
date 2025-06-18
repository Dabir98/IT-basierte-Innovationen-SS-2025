# 🤖 Code Pilot – AI-based Personal Teaching Assistant (AIPTA)

**Modul:** IT-Innovationen SS 2025  
**Projektstart:** 07.04.2025  
**Status:** Abgeschlossen (Prototyp)

---

## 📌 Projektumfang – AI-based Personal Teaching Assistant (AIPTA)

### 🎯 Zielsetzung

Das Ziel des Projekts ist die Entwicklung eines AI-basierten persönlichen Teaching Assistants (AIPTA), der Studierende in der Lehrveranstaltung *Grundlagen Programmieren 1* unterstützt. Der Assistant soll eine interaktive, adaptive und jederzeit verfügbare Lernhilfe bieten, insbesondere bei:

- Verständnisproblemen zu Programmierkonzepten (z. B. Variablen, Schleifen, Funktionen)
- Übungsaufgaben, Fehlermeldungen und Syntax-Fragen
- Wiederholungen & Lernstandkontrolle

Der AI-Assistent soll **individualisiertes Feedback**, **Code-Beispiele** und **Erklärungen auf Abruf** bieten – direkt im Browser oder via Chat-Interface.

---

## 👤 Stakeholder

| Rolle                   | Beschreibung                                                        |
|-------------------------|---------------------------------------------------------------------|
| **Studierende**         | Hauptnutzer*innen; erhalten Hilfe beim Lernen und Üben             |
| **Dozent*innen**        | Können Inhalte beisteuern, Fragen und Antworten analysieren        |
| **Tutor*innen**         | Geben Feedback zur Nutzung und Qualität der Antworten              |
| **Entwicklungsteam**    | Implementiert das System                                            |
| **Systemadmin**         | Technischer Support, ggf. Hosting / Deployment                     |

---

## 🔗 Systemgrenzen & Schnittstellen

### ✅ Im System enthalten:
- Natural Language Interface (Chat auf `index.html`)
- AI-Modul zur Beantwortung von Fragen (LLM via API)
- Datenbasis: selbst erstellte Java-Kurse, Übungen, Musterlösungen
- XP-System, Fortschrittsanzeige, Badges

### 🔄 Mögliche externe Schnittstellen:
- GitHub (Quellcodeverwaltung, Open-Source-Release)
- YouTube (Videointegration)
- JSON-APIs für Benutzer & Fortschritt
- Optional: Moodle / ILIAS (nicht realisiert)

### 🚫 Abgrenzungen:
- ❌ Keine automatische Notenvergabe
- ❌ Kein Zugriff auf personenbezogene Daten
- ❌ Kein LMS-Ersatz – nur Lernunterstützung

---

## 🧠 Projektidee: „Code Pilot“

**Code Pilot** ist ein webbasiertes Lernsystem zur Unterstützung von Java-Einsteiger*innen. Es kombiniert spielerische Übungsformate, strukturierte Wissensvermittlung und KI-Hilfe in einem Retro-Design. Features:

- Interaktive Übungen (MC, Lückentext, Editor)
- XP-/Levelsystem & Badges
- Java-Wiki mit Videos & Fun-Facts
- KI-Chat mit Verlauf
- Fortschrittsanzeige & Profil
- Dark-/Light-Mode
- Responsive Umsetzung in HTML/CSS/JS

---

## 🧩 Hauptkomponenten (Auswahl)

| Datei              | Funktion                                          |
|--------------------|---------------------------------------------------|
| `index.html`       | Einstieg + KI-Chat (LLM-Anbindung via API)       |
| `seite1.html`      | Fortschritt, XP, Badges, Kursnavigation          |
| `seite2.html`      | Wissens-Karten & Theorietipps                    |
| `quizX.X.html`     | Multiple-Choice & Lückentext-Übungen             |
| `editor.html`      | Live-Java-Code mit CodeMirror                    |
| `konto.html`       | Profil, Level, Passwortänderung                  |
| `wiki.html`        | Java-Videothek mit Sidebar                       |
| `Javabib.html`     | Java-Bibliothek (Themen: Hello World – Exceptions) |

---

## ✨ Features

- 💬 KI-Chat mit Chatverlauf
- 🧪 45+ Übungen: MC, Lückentext, Editor
- 📈 XP-/Levelsystem mit Badges
- 🎮 Charakterauswahl mit Avatar
- 🎉 Retro-UI: Dark-/Light-Mode, Confetti, Pixel-Forscher
- 📺 Java-Videos + Fun-Facts
- 🔐 Login/Registrierung (JSON basiert)
- ✅ Fortschritt lokal & serverseitig gespeichert

---

## ⚙️ Technischer Stack

| Bereich       | Technologie                     |
|---------------|----------------------------------|
| Frontend      | HTML, CSS, Vanilla JavaScript    |
| Editor        | CodeMirror                       |
| Backend       | Node.js + Express.js             |
| Datenhaltung  | JSON (users.json), LocalStorage  |
| API           | REST-Endpunkte für Fortschritt   |
| KI-Anbindung  | API-Post zu LLM (ChatGPT/OpenRouter optional) |
| Design        | Custom CSS im Retro-Stil         |

---


