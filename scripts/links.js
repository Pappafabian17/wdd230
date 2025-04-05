const baseURL = "https://Pappafabian17.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) throw new Error("No se pudo obtener el JSON");
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error al obtener los links:", error);
    }
}

function displayLinks(weeks) {
    const ul = document.getElementById("learning-activities");
    ul.innerHTML = "";

    weeks.forEach(week => {
        const li = document.createElement("li");
        const strong = document.createElement("strong");
        strong.textContent = `${week.week}: `;
        li.appendChild(strong);

        week.links.forEach((link, index) => {
            const a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.title;
            a.target = "_blank";

            li.appendChild(a);

            // Separador entre múltiples links
            if (index < week.links.length - 1) {
                li.appendChild(document.createTextNode(" | "));
            }
        });

        ul.appendChild(li);
    });
}

getLinks(); // Llamada inicial
