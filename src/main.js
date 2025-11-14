fetch("footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("footer-placeholder").innerHTML = html;
  })
  .catch((err) => {
    console.error("Fehler beim Laden des Footers:", err);
  });
