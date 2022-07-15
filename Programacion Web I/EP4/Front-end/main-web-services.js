import fetchData from "./fetchData.js";

const API_URL = "http://localhost/back-end/";
const ENDPOINT_TASKS= "tareas.php";

let tasks=[];

const fetchTasks = async () =>{
    try{
        const resultTasks = await fetchData(`${API_URL}${ENDPOINT_TASKS}`);
        tasks = resultTasks.tasks;
        console.log(tasks)
    }catch(err){
        console.log(err);
    }
}

window.onload = async ()=> {
    //boton add
    var btn = document.getElementById('btnasd');
    btn.onclick = function(){
        var newTask = prompt('Ingrese la tarea que desea : ')
        console.log(newTask)
    }

    try{
        await fetchTasks();

        const tasksSection = document.querySelector('#tasks-section');

        let htmlTable = 
        `<table class='table table-striped'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>createdAt</th>
                </tr>
            </head>
                <tbody>`;
        tasks.forEach(task => {
            htmlTable +=
            `<tr>
                <td>${task.id}</td>
                <td>${task.name}</td>
                <td>${task.createdAt}</td>
                <td><button type=button class=border><img class='check' src='check.png'></button></td>
                <td><button type=button class=border>Editar</button></td>
                <td><button type=button class=border>Eliminar</button></td>
            </tr>
            `
        })
        htmlTable+='</tbody></table>';

        tasksSection.innerHTML = htmlTable;

        const tasksSection2 = document.querySelector('#tasks-section2');

        let htmlTable2 = 
        `<table class='table table-striped'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>createdAt</th>
                </tr>
            </head>
                <tbody>`;
        tasks.forEach(task => {
            htmlTable2 +=
            `<tr>
                <td></td>
                <td>'Todavia no hay tareas realizadas.</td>
                <td></td>
                <td><button type=button class=border>Eliminar</button></td>
            </tr>
            `
        })
        htmlTable2+='</tbody></table>';

        tasksSection2.innerHTML = htmlTable2;
    }catch(err){
        console.log(err);
    }
}