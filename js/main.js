// Diese JavaScript-Datei hilft dabei, die Browser-Elemente auf Smartphones auszublenden

// Warte, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
    // Verberge die Browser-Chrome-Elemente (Adresse, Statusleiste usw.)
    window.scrollTo(0, 1);
});

// Als App auf dem Iphone verwendbar Fullscreen

if ('standalone' in window.navigator && window.navigator.standalone) {
    // Die Web-App wird auf dem Startbildschirm ausgeführt
} else {
    // Die Web-App wird im Browser ausgeführt
}

