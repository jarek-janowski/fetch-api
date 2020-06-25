import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

fetch('https://api.github.com/users/jarek-janowski/repos?sort=created&direction=asc')
    .then(resp => resp.json())
    .then(resp => {
        for (let repo of resp) {
            const {
                name,
                html_url
            } = repo;
            const repositoryList = document.querySelector('.main__list--js');
            const myTemplate = `<li>
            ${name} <a href="${html_url}" tittle ="link do repozytorium ${name} na githubie"><i class="fab fa-github"></i></a>
            </li>`;
            repositoryList.innerHTML += myTemplate;
        }
    })
    .catch(error => {
        console.log(error);
    })