import { getData } from "../modules/getData.js";
import { printCateg } from "../modules/printCategories.js";

const url = "http://localhost:3000/";
const template = document.getElementById("template").content;
const container = document.querySelector(".container");   
let d;
let categ;

async function categoria(id){
    try {
        const data = await getData(url + id);
        printCateg(data, template, container )
        localStorage.clear()
        categ = localStorage.setItem('valor',JSON.stringify(data))
    } catch (error) {
        console.log(error)
    }
    localStorage.setItem('categoria',id);
}




//imprimir productos segun categoria
document.addEventListener('click', async ({target})=>{
    let val =   JSON.parse(localStorage.getItem('valor'));
    console.log(val)
    
    
    switch (target.id) {
        case "automovil":
            categoria("automovil");
            break;

        case "herramientas":
            categoria("herramientas");
            break;
        
        case "electrodomesticos":
            categoria("electrodomesticos");            
            break;

        case "construccion":
            categoria("construccion");          
            break;

        case "pintura":
            categoria("pintura");           
            break;
            
    } 
})

// capturar el segundo click  
    
    
    document.addEventListener('click',({target}) => {
        let idObjeto =  target.id
        localStorage.setItem('objet',idObjeto);
        

        // let valor  =   JSON.parse(localStorage.getItem('valor'));
        // console.log(valor[idObjeto])
    }) 

        
        
        


