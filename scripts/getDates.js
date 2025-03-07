const currentYear = new Date().getFullYear();

const copyrightElement = document.querySelector('footer p:first-of-type');

if (copyrightElement) {
    copyrightElement.innerHTML = `©${currentYear} - Fabian Pappa - Argentina`;
}

const lastModifiedDate = document.lastModified;

const lastModifiedElement = document.getElementById('lastModified');

if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last modification: ${lastModifiedDate}`;
}