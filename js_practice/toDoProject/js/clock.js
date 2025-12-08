const clock = document.getElementById("clock");
const clockHour = clock.querySelector("#clock-hour");
const clockMinute = clock.querySelector("#clock-minute");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clockHour.textContent = hours;
  clockMinute.textContent = minutes;
}

getClock();
setInterval(getClock, 1000);
