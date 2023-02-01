var botao = document.getElementById("boton");

botao.addEventListener('click', ()=>{
    var num1 = prompt("Digite um número");
    var num2 = prompt("Digite outro número");

    alert(num1 * num2);
})