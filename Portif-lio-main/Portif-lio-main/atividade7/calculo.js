function aleatorio(){
let min = 1;
let max = 100;
let dif = max-min;
let num = min + Math.trunc(dif * aleatorio);

let mostrar = document.getElementById("resultado")
mostrar.innerHTML = `<p> acabeide pensar isso ${num}.</p>`;

}