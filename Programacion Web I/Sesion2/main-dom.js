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

function onDocumentLoaded(){
    const sectionTest = document.querySelector('#test');
    console.log(sectionTest);
    sectionTest.innerHTML = "Hola DOM";

    const listTeams = document.createElement("ul"); //unordered list

    footballTeams.forEach((team) => {
        const listItem = document.createElement("li"); //list item
        listItem.style.fontSize = '30px';
        
        const txt = document.createTextNode(team.name);

        const img = document.createElement('img');
        img.src = team.imgUrl;
        img.style.height = '30px';
        img.style.marginLeft = '20px';
        img.style.cursor='pointer';
        img.addEventListener('click', function(){
            alert(team.name);
        })
        /*img.addEventListener('mousemove', function(event){
            console.log({
                x: event.offsetX,
                y: event.offsetY,
            })
        })*/

        const link = document.createElement('a');
        link.href = 'https://www.google.com/search?q='+ team.name +'+footbal+team';
        link.innerHTML = 'ver más';
        link.target = '_blank';
        link.style.marginLeft = '20px';
        link.style.textDecoration = 'none';

        listItem.appendChild(txt);
        listItem.appendChild(img);
        listItem.appendChild(link);

        listTeams.appendChild(listItem);
    })

    console.log(listTeams);

    sectionTest.appendChild(listTeams);

}

/*
<ul>
    <li>Liverpool</li>
    <li>United</li>
    <li>Barcelona</li>
    *****
</ul>
*/

//Decimos a window que al momento que todo su contenido haya cargado en el navegador
//ejecute la función definida como onload
//window.onload = onDocumentLoaded;
//window.addEventListener('load', onDocumentLoaded);

document.addEventListener('DOMContentLoaded', onDocumentLoaded);







