// ladebildschirm.js

// Aktuelle Seite ermitteln
const currentPage = window.location.pathname.split("/").pop();

// Nur weitermachen, wenn wir nicht bereits auf dem Ladebildschirm (test.html) sind
if (!currentPage.startsWith("test.html")) {
  // Wurde der Ladebildschirm für diese Zielseite bereits angezeigt?
  const alreadyLoaded = sessionStorage.getItem("loaded_" + currentPage);

  if (!alreadyLoaded) {
    // Ladebildschirm wurde noch nicht angezeigt → Weiterleitung zu test.html
    const zielUrl = "test.html?ziel=" + encodeURIComponent(currentPage);
    window.location.replace(zielUrl);
  }
}
