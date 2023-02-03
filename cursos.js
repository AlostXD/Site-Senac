var alunos = ["Vanderlei", "Pedro", "joão", "Gurgel", "Cecília", "Giovanni", "Arthur", "Maria", "João2"]

var programadorWeb = {
    imagem: "https://th.bing.com/th/id/OIP.BoMzdvX4BWtvVr7H6XvQnQHaE8?w=238&h=180&c=7&r=0&o=5&pid=1.7",
    titulo: "Progamação",
    descricao: "Curso para todos que tem interrese de ingressar na área de programação.",
    topicos: ["Tecnologia", "Design Ui/Ux", "Desenvolvimento Web"],
}

var administração = {
    imagem: "https://th.bing.com/th/id/OIP.BoMzdvX4BWtvVr7H6XvQnQHaE8?w=238&h=180&c=7&r=0&o=5&pid=1.7",
    titulo: "Administração",
    descricao: "Curso para todos que tem interrese de ingressar na área da Administração.",
    topicos: ["Administração", "Marketing", "Finanças e Contabilidade"]
}

var enfermagem = {
    imagem: "https://th.bing.com/th/id/OIP.BoMzdvX4BWtvVr7H6XvQnQHaE8?w=238&h=180&c=7&r=0&o=5&pid=1.7",
    titulo: "Enfermagem",
    descricao: "Curso para todos que tem interrese de ingressar na área da saúde.",
    topicos: ["Biosegurança", "Primeiros Socorros", "Ministração de Medicamentos"]
}


var cursos = [programadorWeb, administração, enfermagem]

var main = document.getElementById("main")

var ulCursos = document.getElementById("cursos-lista")

main.appendChild(ulCursos)

ulCursos.classList = "cursos-lista"




cursos.forEach(curso => {
    var listaitem = document.createElement("li");
    var topicos = "";
    curso.topicos.forEach(topico => {
        topicos = topicos + `<li>${topico}</li>`
    })
    listaitem.innerHTML = `<img class="fotos" src="${curso.imagem}">
    <div class="cursos-descricao">
        <span></span>
        <h2 id="progra">${curso.titulo}</h2>
        <p>${curso.descricao}
        </p>
        <ul class="ul-topicos" id="topicos">
           ${topicos}
        </ul>
        <a href="#">Saiba Mais</a>
    </div>`
    ulCursos.appendChild(listaitem)

    listaitem.classList = "cursos-item"
})

console.log (ulCursos)
















/*
var topicos = document.getElementById("topicos");

var liTopico = document.createElement("li");
liTopico.innerText = "Front-End";

topicos.appendChild(liTopico)

liTopico.classList = "txt-box"


var headerTopicos = document.getElementById("header-bottons")

var botaoTopico = document.createElement("li")
botaoTopico.innerHTML = `<li><a href="#">Sobre Nós</a></li>`

headerTopicos.appendChild(botaoTopico)



var lista = document.getElementById("cursos-lista")
var adclista = document.createElement("li")

adclista.innerHTML = `
<img src="img/programacao.jpg" alt="programação" class="fotos">
<div class="cursos-descricao">
    <span></span>
    <h2 id="progra">Segurança do Trabalho</h2>
    <p>Curso para todos que tem interrese de ingressar na
        área de programação.
    </p>
    <ul class="ul-topicos" id="topicos">
        <li class="txt-box">Tecnologia</li>
        <li class="txt-box">Desing Ux/Ui</li>
        <li class="txt-box">Desenvolvimento Web</li>
    </ul>
    <a href="#" class="saibamais">Saiba Mais</a>
</div>`

lista.appendChild(adclista)

adclista.classList = "cursos-item"
*/


/*
var aleatorio = {
    nome: "Dodge Challenger",
    ano: 2015,
    modelo: "Hellcat",
    motor: "V8",
    variantes: "Dodge Challenger Demon",
    estilo: "Muscle Car",
    utilizadoOnline: ["GTAV/FiveM", "NFS"],
    valor: ["$80,000", "R$280,000"]
}

console.log(alunos.join(", "))


var atividade = "Os Alunos presentes ontem foram:" + alunos.join(", ");
console.log(atividade)


/*
var idade = prompt()

if (idade >= 18){
    console.log(idade + "Maior de Idade")
}
else {
    console.log(idade + ": Menor de Idade")
}

var nota = prompt()

if (nota >= 60) {
    console.log("Aprovado")
}
else {
    console.log("Reprovado")
}

var peso = prompt("Coloque seu Peso!");
var altura = prompt("Coloque sua altura! (1,70m = 170m)");
var imc = peso / (altura*altura);

if (imc <= 18.5) {
    console.log("(Magrezaaltura)om grau 0 de Obesidade")
}
else if (imc < 24.9) {
    console.log("Normal")
}
else if (imc < 29.9) {
    console.log("(Sobrepealtura) com grau 1 de Obesidade")
}
else if (imc < 39.9) {
    console.log("(Obesidade de grau 2")
}
else if (imc > 40) {
    console.log("Obesidade gráve de grau 3")
} */


/*
cursos.forEach(curso => console.log(curso.titulo + ": " + curso.topicos.join(", ")))
*/
/*

var titulo = document.getElementById("h1");

titulo.style.backgroundColor = "green";
titulo.style.color = "Black";

var saibamais = document.getElementById("enfersaiba");

saibamais.style.backgroundColor = "green";

var span = document.getElementById("spanadm");

span.style.backgroundColor = "Red";


var footer = document.getElementById("footer")

footer.innerHTML = "<h1> FOOTER </h1>"

var cursoP = document.getElementById("progra")
cursoP.innerHTML = "<h1> PROGRAMAÇÃO </h1>"
*/