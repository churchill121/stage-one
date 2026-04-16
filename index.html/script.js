document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  // Function to update the time in minutes and seconds format
  function updateTime() {
    if (timeElement) {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      timeElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }

  // Set initial time on render
  updateTime();

  // Update time every 1000ms (1 second) to balance accuracy and performance
  setInterval(updateTime, 1000);
});