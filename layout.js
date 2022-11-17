const body = document.querySelector('body')
const allButtons = document.querySelectorAll('.subcat-btn')
const allContent = document.querySelectorAll('.content-item')

allButtons.forEach(item => {
    item.addEventListener('click', () => {
        const id = item.dataset.id
        const active = document.getElementById(id)

        allContent.forEach(content => content.classList.add('hide'))
        active.classList.remove('hide')

    })
});


//stappen plan voor een actie of microinteractie
//1: selecteer het element in een variabele (queryselector)
//2: event toevoegen (addEventlistener)
//3: class aan een element toevoegen (classlist)

//const increaseFontSize = document.querySelector('p')

function fontSize() {
    const textincrease = document.getElementById("fontIncrease")
    textincrease.classList.toggle('text-large')
    textincrease.style.fontSize = textincrease.style.fontSize === '200%' ? '100%' : '200%'
};

const contrastTrigger = document.querySelector('.contrast-trigger');

// function colorChange() {
//     const allHeadingOne = document.querySelector('h1');
//     allHeadingOne.classList.toggle('dark-contrast');
// };
contrastTrigger.addEventListener('click', () => {
    body.classList.toggle('dark-contrast')
});


function sendEmotion() {
    const element = document.getElementById('emotion-group')
    const html = `
        <div style="height: 3em;">
            <h3>Bedankt voor uw feedback</h3>
        </div>
    `
    element.innerHTML = html
}