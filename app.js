const topTextInput = document.querySelector('#top-text');
const topTextOutput = document.querySelector('.top');
const bottomTextInput = document.querySelector('#bottom-text');
const bottomTextOutput = document.querySelector('.bottom');
const imgLinkIn = document.querySelector('#image');
const imgOut = document.querySelector('#current-img');
const button = document.querySelector('#submit');
const form = document.querySelector('form');
const leftDisplay = document.querySelector('.left-display');
const rightDisplay = document.querySelector('.right-display');
const h1 = document.querySelector('h1');






let leftDisplayCount = 0;
let rightDisplayCount = 0;

let submitForm = () => {
	createMeme();
};

let createMeme = () => {
	if (leftDisplayCount < 5) {
		let createDiv = document.createElement('div');
		createDiv.innerHTML = form.children[4].innerHTML;
		createDiv.classList.add('img-container');
        createDiv.classList.add('make-smaller');
        createDiv.children[3].classList.remove('hidden');
        createDiv.children[3].classList.add('show');
        deleteButton =document.querySelector('.show')
		leftDisplay.appendChild(createDiv);
		leftDisplayCount++;
	} else if (rightDisplayCount < 5 ){
		let createDiv = document.createElement('div');
		createDiv.innerHTML = form.children[4].innerHTML;
		createDiv.classList.add('img-container');
        createDiv.classList.add('make-smaller');
        createDiv.children[3].classList.remove('hidden');
        createDiv.children[3].classList.add('show')
        deleteButton = document.querySelector('.show');
		rightDisplay.appendChild(createDiv);
		rightDisplayCount++;
	} else {
        alert('Gallery Full!')
    }
};



imgLinkIn.addEventListener('keyup', () => {
	imgOut.src = imgLinkIn.value;
});

topTextInput.addEventListener('keyup', () => {
	topTextOutput.innerText = topTextInput.value;
});
bottomTextInput.addEventListener('keyup', () => {
	bottomTextOutput.innerText = bottomTextInput.value;
});

button.addEventListener('click', (e) => {
	e.preventDefault();
	submitForm();
});

leftDisplay.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
       e.target.parentElement.remove()
       leftDisplayCount--
    }
})
rightDisplay.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
       e.target.parentElement.remove();
       rightDisplayCount--;
    }
})