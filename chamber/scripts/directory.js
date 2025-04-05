const url = "data/members.json";
const container = document.getElementById("directory");

async function getMembers() {
  const response = await fetch(url);
  console.log("res",response);
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name} logo" loading="lazy">
      <h3>${member.name}</h3>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <a href="${member.website}" target="_blank">Website</a>
      <p><strong>Membership:</strong> ${member.membership}</p>
      <p>${member.description}</p>
    `;

    container.appendChild(card);
  });
}

document.getElementById("gridView").addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
});

document.getElementById("listView").addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
});

getMembers();
