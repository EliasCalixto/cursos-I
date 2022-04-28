const footballTeams = ['Liverpool', 'United', 'Barcelona', 'Real Madrid', 'benfica'];

function onDocumentLoaded(){
    const sectionTest = document.getElementById('test');
    console.log(sectionTest);
    sectionTest.innerHTML = 'Hola DOM';

    const listTeams = document.createElement('ul');
    footballTeams.forEach((team) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = team;

        listTeams.appendChild(listItem);
    })

    console.log(listTeams);
    sectionTest.appendChild(listTeams);
}

window.onload = onDocumentLoaded;