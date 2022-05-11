var boton = document.getElementById('agregar');
var guardar = document.getElementById('guardar');
var lista = document.getElementById('lista');
var data = [];
var cant = 0;

boton.addEventListener("click", agregar);
guardar.addEventListener("click", save);
function agregar() {
    var nombre = document.getElementById('nombre').value;
    var precio = parseFloat(document.getElementById('precio').value);
    var cantidad = parseFloat(document.getElementById('cantidad').value);
    var total = precio * cantidad;
    //agregar elemento al arreglo
    data.push(
        {
            "id": cant,
            "nombre": nombre,
            "precio": precio,
            "cantidad": cantidad,
            "total": total,
        }
    );
    var id_row = 'row'+cant;
    var fila = '<tr id='+id_row+'><td>'+nombre+'</td><td>'+precio+'</td><td>'+cantidad+'</td><td>'+total+'</td><td><a href="#" class="btn btn-danger" onclick="eliminar('+cant+')";>Eliminar</a><a href="#" class="btn btn-warning" onclick="cantidad('+cant+')";>Modificar</a></td></tr>';
    //agregar a la tabla
    $("#lista").append(fila);
    $("#nombre").val('');
    $("#precio").val('');
    $("#cantidad").val('');
    $("#nombre").focus();
    cant++;
    sumar();
}

function save(){
}

    //sumar
function sumar(){
    var tot=0
    for (x of data){
        tot=tot+x.total;
    }
    document.getElementById('total').innerHTML="Total: $"+tot;
}

function eliminar(row){
    //remover la fila de la tabla html
    $("#row"+row).remove();
    var i=0;
    var pos=0;
    for (x of data){
        if (x.id==row){
            pos=i;
        }
        i++;
    }
    data.splice(pos,1);
    sumar();
}
function cantidad(row){
    var canti=parseFloat(prompt("Modificar cantidad"));
    data[row].cantidad=canti;
    data[row].total=data[row].cantidad*data[row].precio;
    var filaid=document.getElementById("row"+row);
    celda=filaid.getElementsByTagName('td');
    celda[2].innerHTML=canti;
    celda[3].innerHTML=data[row].total;
    sumar();
}