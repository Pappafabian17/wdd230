const modeButton = document.querySelector('#mode');
const body = document.querySelector('body');
const title = document.querySelector('h1');
const authorTitle = document.querySelector('.author');

modeButton.addEventListener('click',()=>{
    if(modeButton.textContent.includes('🌕')){
        body.style.backgroundColor = '#6898cc';
        title.style.color = 'black';
        authorTitle.style.color = 'black';
        modeButton.textContent = '🌑';
    }else{
        body.style.backgroundColor = '#0d1b2a';
        title.style.color = 'white';
        authorTitle.style.color = 'white';
        modeButton.textContent = '🌕';
    }
})