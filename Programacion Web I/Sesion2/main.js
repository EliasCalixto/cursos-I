
const footballTeams = [
    {
        name: 'Liverpool',
        imgUrl: 'https://www.coconis.gr/images/detailed/2/LIVERPOOL_FOOTBALL_ACADEMY2.jpg',
    },
    {
        name: 'Manchested United',
        imgUrl: 'https://i.pinimg.com/originals/7f/19/a1/7f19a16c3d3409140807a46b5058dbdc.jpg',
    },
    {
        name: 'Barcelona',
        imgUrl: 'https://image.shutterstock.com/image-vector/flag-barcelona-official-color-background-260nw-1791540650.jpg',
    },
    {
        name: 'Real Madrid',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKSuGnbWdh-KmcEMe0GCD5MvoyiYeU6_PwuOnAJ4vHjWgNVOnkMBlG3JTgIhjFBuTEllM&usqp=CAU'
    },
]


//Obtengo el section con id test de html
const sectionTest = $('#test');
sectionTest.css('font-size', '30px');

const h1 = $('<h1></h1>');
h1.text('jQuery Example');

const ul = $('<ul></ul>');
footballTeams.forEach(team => {
    const li = $('<li></li>');
    li.append(`
        ${team.name}
        <img style='height: 30px; margin-left: 20px' src='${team.imgUrl}'/>
        <a href='${'https://www.google.com/search?q='+ team.name +'+footbal+team'}'>Ver más</a>
    `);

    ul.append(li);
})

sectionTest.append(h1);
sectionTest.append(ul);

//Crear una table y mostrar los datos del arreglo en ella.
