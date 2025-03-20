const visitDisplay = document.querySelector('.visit-display');

let numVisit = Number(localStorage.getItem('visits')) || 0;

if(numVisit !== 0 ){
    visitDisplay.textContent = numVisit;
}else{
    visitDisplay.textContent = 'This is your first visit!';
}

numVisit++;

localStorage.setItem('visits',numVisit);