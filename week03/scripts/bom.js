const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const getChapterList = () => {
    return JSON.parse(localStorage.getItem('chapters')) || []; 
};

const setChapterList = () => {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
};

const deleteChapter = (chapter) => {
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
};

let chaptersArray = getChapterList();

const displayList = (item) => {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    });
};

button.addEventListener('click', () => {
    if (input.value !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

chaptersArray.forEach((chapter) => {
    displayList(chapter);
});
