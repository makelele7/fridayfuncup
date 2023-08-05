let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval);

  const selectedDate = new Date(document.getElementById("datepicker").value).getTime();

  // Verstecke den Datepicker-Container
  document.getElementById("datepicker-container").style.display = "none";

  function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = selectedDate - now;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("days").textContent = "0";
      document.getElementById("hours").textContent = "0";
      document.getElementById("minutes").textContent = "0";
      document.getElementById("seconds").textContent = "0";
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    }
  }

  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}