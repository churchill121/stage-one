document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  // Function to update the time in milliseconds
  function updateTime() {
    if (timeElement) {
      timeElement.textContent = Date.now();
    }
  }

  // Set initial time on render
  updateTime();

  // Update time every 1000ms (1 second) to balance accuracy and performance
  setInterval(updateTime, 1000);
});