var contenedor = document.querySelector("#contenido");

const mostrarData = () => {
  fetch("https://randomuser.me/api")
    .then((resp) => resp.json())
    .then(
      (objeto) =>
        (contenedor.innerHTML = `<p> Name: ${objeto.results[0].name.title} ${objeto.results[0].name.first}, ${objeto.results[0].name.last}</p>
            <img src="${objeto.results[0].picture.large}" with="100em" class="img-fluid rounded-circle">`)
    );
};
