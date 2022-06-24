

export const printCateg = (data, template, container) => {
    container.innerHTML = "";   
    const fragment = document.createDocumentFragment();
    let contador = 0;
    data.forEach(e => {
        const { nombre, url, precio} = e;
        template.querySelector("img").setAttribute("src", url);
        template.querySelector("img").setAttribute('id', contador)
        template.querySelector("h5").textContent = nombre;
        template.querySelector("p").textContent = precio;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
        contador++;

    });

    container.appendChild(fragment);
}