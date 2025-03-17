document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    const lastModified = document.lastModified;
    footer.innerHTML = `<p>Last Modified: ${lastModified}</p>`;
  });
  