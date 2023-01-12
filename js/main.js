const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    fetch('https://eshop-deve.herokuapp.com/api/v2/orders', {

        headers: {
            "Authorization": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ"
        }
    }
    )
        .then(respuesta => respuesta.json())
        // .then(resultado => mostrarHTML(resultado))
        .then(productos => console.log(productos))
        .catch(error => console.log(error));

    // .then(respuesta => respuesta.json())
    // .catch(error => console.log(error));
}


function mostrarHTML(productos) {
    const contenido = document.querySelector('.contenido');
    let html = '';

    productos.forEach( producto => {
        const { id, number, name } = producto;

        html += `
        <p> ID : ${id}</p>
        <p> NUMERO : ${number}</p>
        <p> NAME : ${name}</p>
        `
    });

    contenido.innerHTML = html;
}
