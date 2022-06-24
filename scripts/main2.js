let valor  =   JSON.parse(localStorage.getItem('valor'));
let id  =   JSON.parse(localStorage.getItem('objet'));
let objeto = valor[id]
document.querySelector('#imgBig').setAttribute( 'src', objeto.url);
document.querySelector('#nameProduct').innerHTML= objeto.nombre;
let precioObjeto = `$ ${Number(objeto.precio)}`
document.querySelector('#precio').innerHTML= precioObjeto;

let category = (localStorage.getItem('categoria'));
switch (category) {
    case "automovil":
        category="Automóvil";
      break;

    case "herramientas":
        category="Herramientas";
       break;

    case "electrodomesticos":
        category = "Electrodomésticos"
        break;

    case "construccion":
        category ="Construcción y Ferretería"
      break;

    case "pintura":
        category ="Pinturas"
       break;
  }  

document.querySelector('.ruta').innerHTML= category;



