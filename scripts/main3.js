let category = (localStorage.getItem('categoria'));
document.getElementById('imgRecomendadas')

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
