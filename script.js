const cronometro = document.getElementById("cronometro");
const iniciaBtn = document.getElementById("iniciar");
const paraBtn = document.getElementById("parar");
const resetaBtn = document.getElementById("resetar");
let intervalo;
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

document.form_main.iniciar.onclick = () => iniciar();
document.form_main.parar.onclick = () => parar();
document.form_main.resetar.onclick = () => resetar();

function iniciar() { 
    parar();
    intervalo = setInterval(() => { timer(); },10);
}

function parar() {
    clearInterval(intervalo);
}

function resetar() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;

    document.getElementById("horas").innerHTML = "00";
    document.getElementById("minutos").innerHTML = "00";
    document.getElementById("segundos").innerHTML = "00";
    document.getElementById("milisegundos").innerHTML = "000";
}

function timer() {
    if ((millisecond +=10) == 1000) {
        millisecond = 0;
        second++
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    document.getElementById("horas").innerText = returnData(hour);
    document.getElementById("minutos").innerText = returnData(minute);
    document.getElementById("segundos").innerText = returnData(second);
    document.getElementById("milisegundos").innerText = returnData(millisecond);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}