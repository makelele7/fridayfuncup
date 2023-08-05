// Warte, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
    // Wähle alle Elemente mit der Klasse "animate-icon"
    const animateIcons = document.querySelectorAll(".animate-icon");

    // Füge jedem Element einen Klickereignis-Listener hinzu
    animateIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            // Deaktiviere die Farbe von allen Icons
            animateIcons.forEach(otherIcon => {
                otherIcon.querySelector("i").style.color = "";
            });

            // Überprüfe, ob das Icon bereits die gewünschte Farbe hat
            if (this.querySelector("i").style.color !== "var(--accent-color2)") {
                // Ändere die Farbe des Icons auf Rot
                this.querySelector("i").style.color = "var(--accent-color2)";
            } else {
                // Setze die Farbe zurück
                this.querySelector("i").style.color = "";
            }

            // Vergrößere das Icon mit einer "ease"-Funktion
            this.querySelector("i").style.transition = "transform 0.2s ease";
            this.querySelector("i").style.transform = "scale(1.1)";
            
            // Setze nach einer kurzen Verzögerung die ursprünglichen Stile zurück
            setTimeout(() => {
                this.querySelector("i").style.transition = ""; // Zurücksetzen der Übergangseigenschaft
                this.querySelector("i").style.transform = "";
            }, 100); // Anpassbare Verzögerungszeit in Millisekunden
        });
    });
});