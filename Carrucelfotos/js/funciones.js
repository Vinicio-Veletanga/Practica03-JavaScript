var direccion
var par2
var num = 0
var participantes = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg'];

function iniciar() {
    console.log(participantes)
    num = 0
    for (var i = 0; i < 5; i++) {
        participantes[i] = Math.floor(Math.random() * (10))
    }
    console.log(participantes)
    par2 = participantes.slice(0, 5)
    alert('Se escogieron las ' + par2.length + ' imagenes aleatorias')
    console.log(par2)
    console.log(num)
    direccion = "images/" + par2[num] + ".jpg";
    console.log(direccion);
    document.getElementById("foto").src = direccion;
    document.getElementById("previous").disabled = true;
    document.getElementById("next").disabled = false;
}


function siguiente() {
    num++
    if (num == 4) {
        document.getElementById("next").disabled = true;
        document.getElementById("previous").disabled = false;
    }
    else if (num == 0) {
        document.getElementById("previous").disabled = true;
        document.getElementById("next").disabled = false;
    } else {
        document.getElementById("next").disabled = false;
        document.getElementById("previous").disabled = false;
    }
    direccion = "images/" + par2[num] + ".jpg";
    console.log(direccion);
    document.getElementById("foto").src = direccion;
}

function anterior() {
    num--
    if (num == 4) {
        document.getElementById("next").disabled = true;
        document.getElementById("previous").disabled = false;
    }
    else if (num == 0) {
        document.getElementById("previous").disabled = true;
        document.getElementById("next").disabled = false;
    } else {
        document.getElementById("next").disabled = false;
        document.getElementById("previous").disabled = false;
    }
    direccion = "images/" + par2[num] + ".jpg";
    console.log(direccion);
    document.getElementById("foto").src = direccion;
}