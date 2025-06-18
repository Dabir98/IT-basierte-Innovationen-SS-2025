# 🚀 Code Pilot – IT-basierte Innovationen SS 2025

> Eine interaktive Java-Lernplattform mit XP-System, KI-Chat, Übungen und Retro-Design

## 📚 Projektbeschreibung

**Code Pilot** ist ein webbasiertes Lernsystem für Java-Einsteiger, das im Rahmen des Kurses *IT-Innovationen SS 2025* entwickelt wurde. Die Anwendung bietet spielerisches, strukturiertes Lernen über:

- Multiple-Choice- und Lückentextaufgaben
- Live-Java-Editor mit Bewertung
- Fortschrittstracking (XP, Level, Badges)
- KI-gestützte Chat-Hilfe (LLM-Anbindung)
- Themenkarten & Videos zu allen Grundlagen

---

## 💡 Ziele

- Motivation steigern durch Gamification
- Selbstständiges, interaktives Lernen ermöglichen
- Grundlagen der Java-Programmierung verständlich machen
- Einbindung eines KI-basierten Hilfesystems
- Klare Lernstruktur und Feedbackvisualisierung

---

## 🧩 Seitenstruktur (Auswahl)

| Bereich              | Inhalt/Funktion                                             |
|----------------------|------------------------------------------------------------|
| `index.html`         | KI-Chat mit Verlaufsspeicherung                            |
| `register.html`      | Registrierung inkl. Charakterauswahl (Karussell)           |
| `seite1.html`        | Kursstart & Fortschrittsanzeige (XP, Level, Badges)        |
| `seite2.html`        | Themenkarten mit Java-Wissen & Fun-Facts                   |
| `Javabib.html`       | Java-Bibliothek mit 9 Lernmodulen (Hello World – Exceptions) |
| `quizX.X.html`       | Quizseiten: Multiple-Choice & Lückentext mit Belohnung     |
| `editor.html`        | Java-Code direkt schreiben & überprüfen (CodeMirror)       |
| `konto.html`         | Profilseite mit Statistiken & Passwortänderung             |
| `wiki.html`          | Java-Videothek mit Sidebar                                  |

---

## ✅ Projektfortschritt

| Status       | Aufgabe                                  | Beschreibung                                       |
|--------------|-------------------------------------------|----------------------------------------------------|
| ✅ Done      | Login-/Register-Logik                     | JSON-gestützte Benutzerverwaltung                   |
| ✅ Done      | Editor mit Codevergleich                  | CodeMirror + Ausgabevalidierung                    |
| ✅ Done      | XP- & Badgesystem                         | Fortschritt lokal + serverseitig speichern         |
| ✅ Done      | KI-Chat auf Startseite                    | API-Anbindung + lokaler Verlauf                    |
| ✅ Done      | Dark-/Light-Mode                          | inkl. Speicherung & Umschaltung                    |
| ✅ Done      | Fun-Facts, Tipps, Pixel-Forscher          | Lernhilfe & Motivation mit Animationen             |
| ✅ Done      | Quizseiten (MC, Lückentext)               | über 45 Einzelseiten mit Feedback & Alertbox       |
| ✅ Done      | Ladebildschirm                            | Startanimation mit Weiterleitung                   |
| 🛠️ Optional | Datenbankanbindung                        | z. B. SQLite statt JSON (zukünftige Erweiterung)   |
| 🛠️ Optional | Neue Kurse (z. B. Python, HTML)           | Plattform als Lernsystem für weitere Sprachen      |

---

## 🛠️ Verwendete Technologien

- **Frontend:** HTML, CSS, Vanilla JavaScript, CodeMirror
- **Backend:** Node.js, Express, REST-API
- **Speicherung:** JSON-Dateien + LocalStorage
- **Design:** Retro-Look, eigene Alertboxen, Konfetti-Effekt, Dark-/Light-Mode
- **Tools:** GitHub, ChatGPT, VS Code

---

## ✨ Features

- Gamification: XP, Level, Abzeichen
- Charakterauswahl & Avataranzeige
- KI-Chat mit Verlauf
- Strukturierte Bibliothek mit Java-Grundlagen
- YouTube-Videothek zu allen Themen
- Quiz mit Fortschrittskontrolle
- Editor zur Codeausführung im Browser
- Benutzerprofil & Passwortänderung

---

## 📁 Projektstruktur (Ausschnitt)

├── public/
│ ├── index.html
│ ├── seite1.html
│ ├── quiz1.1.html – quiz9.5.html
│ ├── editor.html
│ └── konto.html
├── server.js
├── users.json
├── /img
├── /css
├── /js
└── README.md


---

---

## 🔮 Ausblick

- Datenbank statt JSON
- Mehrsprachigkeit (Deutsch/Englisch)
- Automatische Quizgenerierung durch KI
- Weiterführung in ein größeres Lernportal

---

## 🧑‍💻 Autor*innen

Die Namen und Aufgabenverteilung findest du [in der Dokumentation](./AufgabenlisteCodePilot.pdf) im Kapitel 7.

---

## 📄 Lizenz

Dieses Projekt wurde im Rahmen einer Hochschulveranstaltung erstellt und dient ausschließlich zu Lern- und Demonstrationszwecken.

