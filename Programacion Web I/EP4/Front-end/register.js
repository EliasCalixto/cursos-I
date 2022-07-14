import {postData} from "../Front-end/fetchData.js"

const SERVER_URL = 'http://localhost/back-end/';
const REGISTER_PATH = 'register.php'

window.onload = function(){
    const form = document.querySelector('#app-register-form');
    form.addEventListener('submit', async (event) =>{
        event.preventDefault();
        const formData = new FormData(form)
        console.log("form", ...formData)
        const response = await postData(`${SERVER_URL}${REGISTER_PATH}`,JSON.stringify({
            'task':'asd'
        }));
        console.log("response",response);
    })
}