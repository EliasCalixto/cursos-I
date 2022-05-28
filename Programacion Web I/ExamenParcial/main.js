//shit needed
const fetchData = (url) => {
    return new Promise(async (resolve, reject) => {
        try{
            const data = await fetch(url);
            const json = await data.json();
            resolve(json);
        } catch(error){
            reject(error);
        }
    });
}

function createNode(node) {
    return document.createElement(node);
}

function append(parent, child) {
    parent.appendChild(child);
}
//

const root = document.getElementById('root');

const h1 = document.createElement('h1');
h1.classList.add('text-center');
h1.textContent = 'Resultados de la Busqueda'
root.appendChild(h1);

const srp = document.createElement('div');
srp.setAttribute('id','output');
srp.classList.add('justify-content-center','align-items-center');
root.appendChild(srp);

const sr = document.createElement('div');
sr.setAttribute('id','search-results-pagination');
root.appendChild(sr);

const nav = document.createElement('nav');
nav.setAttribute('aria-label','pagination','text-center');
sr.appendChild(nav);

const ul = document.createElement('ul');
ul.classList.add('pagination');
nav.appendChild(ul);

const li = document.createElement('li');
li.classList.add('page-item');
ul.appendChild(li);

const bt = document.createElement('button');
bt.setAttribute('id','btn-prev-pag');
bt.classList.add('page-link');
bt.textContent = 'Previous';
li.appendChild(bt);

const li2 = document.createElement('li');
li2.setAttribute('aria-current','page');
li2.classList.add('page-item',);
ul.appendChild(li2);

const span = document.createElement('span');
span.setAttribute('id','search-results-pagination-info');
span.classList.add('page-link');
span.textContent='...'
li2.appendChild(span);

const li3 = document.createElement('li');
li3.classList.add('page-item');
ul.appendChild(li3);

const bt2 = document.createElement('button');
bt2.setAttribute('id','btn-next-page');
bt2.classList.add('page-link');
bt2.textContent = 'Next';
li3.appendChild(bt2);

// termina html
const pagination = {
    pageSize: 10,
    currentPage: 1,
    totalPages: 0,
    totalItems: 0
}

const previousPage = (callback) => {
    console.log("previous")
    if(pagination.currentPage > 1) {
        pagination.currentPage--;
        if(callback) callback(pagination.currentPage);
    }
}

const nextPage = (callback) => {
    console.log("next")
    if(pagination.currentPage < pagination.totalPages) {
        pagination.currentPage++;
        if(callback) callback(pagination.currentPage);
    }
}

let elementos = null;

const divContent = document.querySelector('#output')
const divContentPagination = document.querySelector('#search-results-pagination')
const spanPaginationInfo = document.querySelector('#search-results-pagination-info')
const btnPrevPage = document.querySelector('#btn-prev-pag');
const btnNextPage = document.querySelector('#btn-next-page');

btnPrevPage.addEventListener('click', ()=>{
    previousPage(getElements);
})

btnNextPage.addEventListener('click', ()=>{
    nextPage(getElements);
})

const tableData = document.createElement('table');
srp.appendChild(tableData)

const loadingElement = document.createElement('p');
loadingElement.setAttribute('id','loading-elements');
loadingElement.textContent = 'Cargando...'

function calculateTotalPages(){
    return Math.ceil(pagination.totalItems/pagination.pageSize);
}

function buildElementRow(element){
    console.log('element',element)
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = element.name.first;
    append(tr,tdName)

    const tdLastname = document.createElement('td');
    tdLastname.textContent = element.name.last;
    append(tr,tdLastname)

    const tdAge = document.createElement('td');
    tdAge.textContent = element.dob.age;
    append(tr,tdAge);

    const tdGender = document.createElement('td');
    tdGender.textContent = element.gender;
    append(tr,tdGender);

    const tdCountry = document.createElement('td');
    tdCountry.textContent = element.location.country;
    append(tr,tdCountry);
    
    const tdEmail = document.createElement('td');
    tdEmail.textContent = element.email;
    append(tr,tdEmail)

    const tdImg = document.createElement('td');
    const img = document.createElement('img');
    img.setAttribute('src',element.picture.large);
    img.classList.add('border','imgTable')
    append(tdImg,img);
    append(tr,tdImg);

    return tr
}

function removeTable(){
    if(tableData) tableData.innerHTML='';
}

function buildTable(){
    removeTable()
    tableData.setAttribute('id','table-elements');
    tableData.classList.add('table','table-striped','text-center');

    const tableHeader = document.createElement('thead');
    const trHead = document.createElement('tr');

    append(tableData,tableHeader);
    append(tableHeader,trHead);

    const headers = ['Name','lastname','Age','Gender','username','email','Photo']
            
    headers.forEach(header=>{
        const th = document.createElement('th');
        th.textContent = header;
        append(trHead,th);
    })

    const tBody = document.createElement('tbody');
    append(tableData,tBody);

    elementos.forEach(function (result){
        try{
            append(tBody,buildElementRow(result))
        }catch{
            console.log('error')
        }
    })
}

async function getElements(){
    const apiUrl = 'https://randomuser.me/api/?results=34';
    try{
        const elementosData = await fetchData(apiUrl);
        elementos = elementosData.results;
        pagination.totalItems = 34;
        pagination.totalPages = calculateTotalPages();
        spanPaginationInfo.textContent = `${pagination.currentPage} de ${pagination.totalPages}`;
        console.log('results',elementosData);
        buildTable();
    }catch{
        alert('error en getElements')
    }
};
getElements();


