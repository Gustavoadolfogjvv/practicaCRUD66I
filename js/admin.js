//traer los elementos que necesito del html
let campoCodigo = document.getElementById('codigo');
//console.log(campoCodigo);
let campoProducto = document.getElementById('producto');
let campoDescripcion = document.getElementById('descripcion');
let campocantidad = document.getElementById('cantidad');
let campoUrl = document.getElementById('url');


//asociar un evento a cada elemento obtenido

const handleFocus = () => {
    console.log('desde handleFocus');
    console.log(event.target.value);
}

campoCodigo.addEventListener('blur', ()=>{
    console.log('desde codigo');
})














campocantidad.addEventListener('blut' )






function guardarkocalStorage(){
    localStorage.setItem('arrayProductosKey', JSON.stringify(listarProductos))
}

function crearProducto(params) {
    






}



