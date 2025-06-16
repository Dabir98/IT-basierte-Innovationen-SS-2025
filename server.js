import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { exec } from 'child_process';
import os from 'os';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const USERS_FILE = path.join(__dirname, 'users.json');
console.log("📁 Nutzt Datei:", USERS_FILE);
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const API_KEY = process.env.OPENROUTER_API_KEY;

// 🔁 Statische Dateien
app.use(express.static(__dirname));

/* === REGISTRIERUNG === */
app.post('/api/register', (req, res) => {
  const { username, password, character } = req.body;

  if (!username || !password || !character) {
    return res.status(400).json({ error: 'Alle Felder erforderlich (inkl. Charakter)' });
  }

  const users = fs.existsSync(USERS_FILE)
    ? JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'))
    : [];

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ error: 'Benutzername existiert bereits' });
  }

  // ➕ Neuer Benutzer mit Fortschrittsfeldern
  users.push({
    username,
    password,
    character,
    xp: 0,
    exercises: 0,
    badges: 0,
    streak: 0
  });

  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  console.log('Benutzer registriert:', username);
  res.json({ success: true });
});

/* === LOGIN === */
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const users = fs.existsSync(USERS_FILE)
    ? JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'))
    : [];

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Ungültige Anmeldedaten' });
  }

  console.log('Login erfolgreich für:', username);
  res.json({ success: true, username, character: user.character });
});

/* === PASSWORT ÄNDERN === */
app.post('/api/change-password', (req, res) => {
  const { username, oldPassword, newPassword } = req.body;

  if (!username || !oldPassword || !newPassword) {
    return res.status(400).json({ error: 'Fehlende Felder' });
  }

  const users = fs.existsSync(USERS_FILE)
    ? JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'))
    : [];

  const user = users.find(u => u.username === username && u.password === oldPassword);
  if (!user) {
    return res.status(401).json({ error: 'Altes Passwort ist falsch' });
  }

  user.password = newPassword;
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

  res.json({ success: true, message: 'Passwort erfolgreich geändert' });
});

/* === AI CHAT === */
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Keine Nachricht übergeben" });

  try {
    const response = await axios.post(API_URL, {
      model: 'openai/gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('OpenRouter API Error:', error.response?.data || error.message);
    res.status(500).json({ error: "Fehler bei der AI-Antwort" });
  }
});

/* === JAVA CODE AUSFÜHREN === */
app.post('/api/run-java', (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: 'Kein Code übergeben' });
  }

  // 1. Klassennamen mit Regex extrahieren
  const match = code.match(/public\s+class\s+([A-Za-z0-9_]+)/);
  const className = match ? match[1] : 'Main';
  const tmpDir = os.tmpdir();
  const filePath = path.join(tmpDir, `${className}.java`);

  // 2. Code speichern
  fs.writeFileSync(filePath, code);

  // 3. Kompilieren
  exec(`javac ${filePath}`, (err, stdout, stderr) => {
    if (err) {
      return res.json({ output: stderr || 'Kompilierungsfehler' });
    }

    // 4. Ausführen
    exec(`java -cp ${tmpDir} ${className}`, (err, stdout, stderr) => {
      if (err) {
        return res.json({ output: stderr || 'Laufzeitfehler' });
      }

      res.json({ output: stdout });
    });
  });
});


/* === FORTSCHRITT ABRUFEN === */
app.post('/api/get-user-stats', (req, res) => {
  const { username } = req.body;
  const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(404).json({ error: 'Benutzer nicht gefunden' });
  }

  res.json({
    xp: user.xp || 0,
    exercises: user.exercises || 0,
    badges: user.badges || 0,
    streak: user.streak || 0
  });
});

/* === FORTSCHRITT AKTUALISIEREN === */

app.post('/api/update-progress', (req, res) => {
  const { username, addXp = 0, addExercise = 0, setStreak = null } = req.body;
  const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(404).json({ error: 'Benutzer nicht gefunden' });
  }

  // Fortschritt vorher merken
  const oldExercises = user.exercises || 0;
  const oldBadges = user.badges || 0;

  // Fortschritt aktualisieren
  user.xp += addXp;
  user.exercises += addExercise;

  // Prüfen, ob neues Badge erreicht wurde
  const newBadges = Math.floor(user.exercises / 5);
  const badgeGained = newBadges > oldBadges;

  user.badges = newBadges;

  if (setStreak !== null) {
    user.streak = setStreak;
  }

  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  console.log("✅ Fortschritt aktualisiert für", username);

  res.json({
    success: true,
    badgeGained,
    newBadgeCount: newBadges
  });
});
app.post("/api/update-badges", (req, res) => {
  const { username, badges } = req.body;

  if (!username || typeof badges !== "number") {
    return res.status(400).json({ success: false, message: "Ungültige Anfrage" });
  }

  const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(404).json({ success: false, message: "Benutzer nicht gefunden" });
  }

  user.badges = badges;

  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  res.json({ success: true });
});





app.listen(port, () => {
  console.log(`✅ CodePilot Backend läuft unter http://localhost:${port}`);
});
