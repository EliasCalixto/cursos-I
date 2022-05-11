function onDomLoaded() {

    let loading = false;
    const POKE_API = 'https://pokeapi.co/api/v2/';
    const POKEMON_ENDPOINT = `${POKE_API}pokemon`;
    let dataResults = null;

    /* Div Content in HTML*/
    const divContent = document.querySelector('#search-results');

    /* Table */
    const tableData = createNode('table');

    /* Loading Element */
    const loadingElement = createNode('p');
    loadingElement.setAttribute('id', 'loading-pokemons');
    loadingElement.textContent = 'Cargando ...';

    /* Pagination setup */
    const pageSize = 10;
    let currentPage = 1;
    let totalPages = 0;
    let totalItems = 0;


    function createNode(node) {
        return document.createElement(node);
    }

    function append(parent, child) {
        parent.appendChild(child);
    }

    function calculateTotalPages() {
        return Math.ceil(totalItems / pageSize);
    }

    function setLoading(value) {
        loading = value;
        divContent.innerHTML = '';

        if (!loading) {
            append(divContent, tableData);
        } else {
            append(divContent, loadingElement);
        }
    }

    function buildPokemonRow(pokemon){
        console.log("pokemon", pokemon)
        const tr = createNode('tr');
        const tdNumber = createNode('td')
        tdNumber.textContent = pokemon.order;
        append(tr, tdNumber);

        const tdName = createNode('td');
        tdName.textContent = pokemon.name;
        append(tr, tdName);

        const tdTypes = createNode('td');
        let types = '';
        pokemon.types.forEach(typeItem => {
            types += typeItem.type.name + ',';
        })
        tdTypes.textContent = types;
        append(tr, tdTypes);

        const tdSkills = createNode('td');
        let skills = '';
        pokemon.abilities.forEach(abilityItem => {
            skills += abilityItem.ability.name + ',';
        });
        tdSkills.textContent = skills;
        append(tr, tdSkills);

        const tdImg = createNode('td');
        const img = createNode('img');
        img.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default);
        img.setAttribute('alt', pokemon.name);
        img.style.height = '60px';
        append(tdImg, img)
        append(tr, tdImg);

        const tdInfo = createNode('td');
        const btn = createNode('button');
        btn.classList.add('btn', 'btn-secondary');
        btn.textContent = "Ver más";
        append(tdInfo, btn);
        append(tr, tdInfo);

        return tr;
    }

    function buildTable() {
        /* Table Building */
        tableData.setAttribute('id', 'table-pokemons');
        tableData.classList.add('table', 'table-striped');

        /* Table Header */
        const tableHeader = createNode('thead');
        const trHead = createNode('tr');


        append(tableData, tableHeader);
        append(tableHeader, trHead);

        const headers = ['#', 'Pokemon', 'Tipo', 'Habilidades', 'Imagen', '']

        headers.forEach(header => {
            const th = createNode('th');
            th.textContent = header;
            append(trHead, th);
        })

        /* Table Body */
        const tBody = createNode('tbody');
        append(tableData, tBody);

        //Recorremos la lista de resultados de pokemons
        //obtenidos desde el servidor.
        //Esto nos devuelve la API+Endopoint de cada pokemon
        dataResults.results.forEach(result => {
            //consumimos el api de cada pokemon para obtener la información de cada uno.
            fetch(result.url)
            .then(data => {
                data.json()
                .then(pokemon => {
                    append(tBody, buildPokemonRow(pokemon));
                })
                .catch(error => {
                    console.error("error", error);
                    setLoading(false);
                })
            })
            .catch(error => {
                console.error("error", error);
                setLoading(false);
            })
            
        })
    }

    //Obtener data del servidor utilizando el api fetch
    function fetchData() {
        setLoading(true);

        fetch(`${POKEMON_ENDPOINT}?limit=${pageSize}&offset=${pageSize * (currentPage - 1)}`)
            .then(data => {
                data.json().then(results => {
                    dataResults = results;
                    totalItems = results.count;
                    totalPages = calculateTotalPages();
                    console.log("results", dataResults);
                    buildTable();
                }).catch(error => {
                    console.error("error", error);
                }).finally(() => {
                    //codigo cuando termina la promesa
                    setLoading(false);
                });
            })
            .catch(error => {
                console.error("error", error);
                setLoading(false);
            })
    }

    fetchData();
}

document.addEventListener('DOMContentLoaded', onDomLoaded);