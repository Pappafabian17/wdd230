document.getElementById('lastModified').textContent = document.lastModified;


document.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
      const now = new Date().toISOString();
      timestampInput.value = now;
    }
  });