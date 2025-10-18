// Select the time element and update to milliseconds
const timeElement = document.getElementById("time-display");

function updateTime() {
  timeElement.textContent = Date.now();
}

updateTime();

setInterval(updateTime, 1000);
