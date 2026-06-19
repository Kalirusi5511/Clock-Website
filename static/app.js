// ---------------- LIVE CLOCK ----------------
function updateClock() {
    const now = new Date();
    // Verwendet toLocaleTimeString für lokalisierte Zeitformate
    document.getElementById("clock").innerText = now.toLocaleTimeString();
}
// Aktualisiert die Uhr jede Sekunde
setInterval(updateClock, 1000);
// Ruft die Funktion sofort auf, um die Uhr beim Laden der Seite anzuzeigen
updateClock();

// ---------------- TIMER ----------------
let timerInterval; // Variable für das Timer-Intervall
let timerTotalSeconds; // Gesamtzahl der Sekunden für den Timer

function startTimer() {
    // Holt die Minuten und Sekunden aus den Input-Feldern
    let minutesInput = parseInt(document.getElementById("min").value) || 0;
    let secondsInput = parseInt(document.getElementById("sec").value) || 0;

    // Setzt den Gesamtwert in Sekunden
    timerTotalSeconds = minutesInput * 60 + secondsInput;

    // Verhindert, dass ein neuer Timer startet, wenn einer bereits läuft
    clearInterval(timerInterval);

    // Zeigt den initialen Timer-Wert an
    updateTimerDisplay(timerTotalSeconds);

    // Startet das Intervall, wenn der Timerwert größer als 0 ist
    if (timerTotalSeconds > 0) {
        timerInterval = setInterval(() => {
            if (timerTotalSeconds <= 0) {
                clearInterval(timerInterval); // Timer stoppen, wenn abgelaufen
                alert("Timer fertig!");
                return;
            }
            timerTotalSeconds--;
            updateTimerDisplay(timerTotalSeconds);
        }, 1000);
    }
}

function updateTimerDisplay(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    // Formatiert die Ausgabe mit führenden Nullen (z.B. 05:03 statt 5:3)
    document.getElementById("timer").innerText =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

// ---------------- STOPWATCH ----------------
let stopwatchElapsedSeconds = 0; // Zählt die verstrichenen Sekunden für die Stoppuhr
let stopwatchInterval; // Variable für das Stoppuhr-Intervall

function startStopwatch() {
    // Verhindert, dass mehrere Intervalle gleichzeitig laufen
    clearInterval(stopwatchInterval);

    // Startet das Intervall zur Aktualisierung der Stoppuhr
    stopwatchInterval = setInterval(() => {
        stopwatchElapsedSeconds++;
        updateStopwatchDisplay(stopwatchElapsedSeconds);
    }, 1000);
}

function stopStopwatch() {
    // Stoppt das Intervall
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    // Stoppt das Intervall und setzt den Zähler zurück
    clearInterval(stopwatchInterval);
    stopwatchElapsedSeconds = 0;
    updateStopwatchDisplay(stopwatchElapsedSeconds);
}

function updateStopwatchDisplay(elapsedSeconds) {
    let minutes = Math.floor(elapsedSeconds / 60);
    let seconds = elapsedSeconds % 60;

    // Formatiert die Ausgabe mit führenden Nullen
    document.getElementById("stopwatch").innerText =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}