// Select the time element and update to milliseconds
const timeElement = document.getElementById("test-user-time");

function updateTime() {
  timeElement.textContent = Date.now();
}

updateTime();

setInterval(updateTime, 1000);
