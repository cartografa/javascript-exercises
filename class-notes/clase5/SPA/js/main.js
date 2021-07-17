console.log(document.querySelector('title').textContent);

function ajax(url, metodo='get') {
    let xhr = new XMLHttpRequest;
    xhr.open(metodo, url);
    xhr.send();

    return xhr;
};


/* Marca el link activo en la navegación */
function marcarLink(url) {
    let id = url.split('/')[1].split('.')[0];
    console.log(id);

    let links = document.querySelectorAll('a');
    links.forEach(link => {
        link.id == id ? link.classList.add('active') : link.classList.remove('active')
    })
}

function getRutaPlantilla(id) {
    return 'plantillas/' + (id? id : 'home') + '.html'
}

// function SPAsinHistory() {
//     const links = document.querySelectorAll('a');
//     console.log(links)
//     const main = document.querySelector('main')

//     links.forEach(link => {
//         link.addEventListener('click', e => {
//             e.preventDefault();
    
//             let id = link.id;
//             console.log(id);
    
//             let plantillaUrl = getRutaPlantilla(id);
//             let xhr = ajax(plantillaUrl, 'get');
//             xhr.addEventListener('load', () => {
//                 if(xhr.status == 200) {
//                     main.innerHTML = xhr.response;
//                 }
//             })
//         })
//     })
// }

// SPAsinHistory();

function SPAconHistory() {
    const links = document.querySelectorAll('a');
    const main = document.querySelector('main');


    /* Carga de la página inicial */
    let id = location.hash.slice(1);

    let plantillaUrl = getRutaPlantilla(id);
    marcarLink(plantillaUrl)

    let xhr = ajax(plantillaUrl, 'get');
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            main.innerHTML = xhr.response;
        }
    })


    /* Carga de las plantillas a través de las navegaciones*/
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
    
            let id = link.id;

            location.hash = id;
         
        })
    })

    window.addEventListener('hashchange', () => {

        let id = location.hash.slice(1);

        let plantillaUrl = getRutaPlantilla(id);
        marcarLink(plantillaUrl)

        let xhr = ajax(plantillaUrl, 'get');
        xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
                main.innerHTML = xhr.response;
            }
        })
    })
}

SPAconHistory();

