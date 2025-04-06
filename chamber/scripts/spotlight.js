const spotlightContainer = document.getElementById('spotlight-container');

fetch('data/members.json') 
  .then(response => response.json())
  .then(data => {
    const qualifiedMembers = data.members.filter(member =>
      member.membership === 'Gold' || member.membership === 'Silver'
    );

    const spotlightCount = Math.floor(Math.random() * 2) + 2; 
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, spotlightCount);

    selected.forEach(member => {
      const spotlight = document.createElement('div');
      spotlight.classList.add('spotlight');

      spotlight.innerHTML = `
        <img src="${member.image}" alt="Logo of ${member.name}" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.description}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;

      spotlightContainer.appendChild(spotlight);
    });
  })
  .catch(error => console.error('Error loading member data:', error));
