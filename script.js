function countdown() {
  const eventDate = new Date("August 14, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = eventDate - now;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  document.getElementById("timer").innerText = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (gap < 0) {
    document.getElementById("timer").innerText = "🎉 Happy Independence Day!";
  }
}

setInterval(countdown, 1000);
