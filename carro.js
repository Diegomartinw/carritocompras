let template="";
let misFotos, misProductos;
let articulo, imagen;


let leerLocal= function(){
misFotos=localStorage.getItem("misfotos");
misProductos=localStorage.getItem("misproductos");
imagen=JSON.parse(misFotos);
articulo=JSON.parse(misProductos);

console.log(imagen);
console.log(articulo);

template+=`<h1>Carrito de compras</h1>`;

for (let i = 0; i < imagen.length; i++) {
let celdasFila = imagen[i].split(',');
console.log(celdasFila);   


template+=`<table>`;
template+=`<tr>`;
template+=`<th>Artículos</th>`;
template+=`<th>Imágenes</th>`;
template+=`</tr>`;
template+=`<tr>`;
template+=`<td><h3>${articulo[i]}</h3></td>`;
template+=`<td><img src="${celdasFila}"/></td>`;
template+=`</tr>`;
template+=`</table>`;


}
document.querySelector("#tabla").innerHTML=template;
}

leerLocal();

function vaciar(){
    localStorage.removeItem("misfotos");
    localStorage.removeItem("misproductos");
    let templatevacio="";
    templatevacio=`<h1>Su carrito de compras se encuentra vacío</h1>`
    document.querySelector("#tabla").innerHTML=templatevacio;
    
}



