var alunos = ["Vanderlei", "Pedro", "joão", "Gurgel", "Cecília", "Giovanni", "Arthur", "Maria", "João2"]

var programadorWeb = {
    imagem: "https://www.bing.com/images/search?view=detailV2&ccid=9y00FZcm&id=064BFEAC52155D47EF1E1093C3A053AF2F790487&thid=OIP.9y00FZcmD-4tqjIO-Xy4UAHaE8&mediaurl=https%3a%2f%2fwww.somosicev.com%2fwp-content%2fuploads%2f2019%2f09%2fshutterstock_230705539-1024x683.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.f72d341597260fee2daa320ef97cb850%3frik%3dhwR5L69ToMOTEA%26pid%3dImgRaw%26r%3d0&exph=683&expw=1024&q=programa%c3%a7%c3%a3o&simid=608033740387265231&FORM=IRPRST&ck=7FB706B795FBFDCC0E4C91C7D1BD8A33&selectedIndex=0",
    titulo: "Progamação",
    descricao: "Curso para todos que tem interrese de ingressar na área de programação.",
    topicos: ["Tecnologia", "Design Ui/Ux", "Desenvolvimento Web"],
}

var administração = {
    imagem: "https://www.bing.com/images/search?view=detailV2&ccid=OAW8fDGe&id=5A1775825A784FEBC6E300DA9995141D2EC5715F&thid=OIP.OAW8fDGe7M_FGvV78bWeFAHaE8&mediaurl=https%3a%2f%2fmaprodutorgrafico.files.wordpress.com%2f2015%2f09%2fo-segredo-da-administracao.jpg%3fw%3d1200&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.3805bc7c319eeccfc51af57bf1b59e14%3frik%3dX3HFLh0UlZnaAA%26pid%3dImgRaw%26r%3d0&exph=800&expw=1200&q=administra%c3%a7%c3%a3o&simid=608004427239070940&FORM=IRPRST&ck=E80C358AD43D6F5E34BDD9C2BA08CF6B&selectedIndex=0",
    titulo: "Administração",
    descricao: "Curso para todos que tem interrese de ingressar na área da Administração.",
    topicos: ["Administração", "Marketing", "Finanças e Contabilidade"]
}

var enfermagem = {
    imagem: "https://www.bing.com/images/search?view=detailV2&ccid=hvuX7IhW&id=53DFBCF075F073210F100805A7F783B211D5FF98&thid=OIP.hvuX7IhWJPsntoOMts6IkQHaE8&mediaurl=https%3a%2f%2fwww.ceen.com.br%2fwp-content%2fuploads%2f2019%2f11%2foriginal-d2a709d7bba60ba2fbab2dc46b2e04dc.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.86fb97ec885624fb27b6838cb6ce8891%3frik%3dmP%252fVEbKD96cFCA%26pid%3dImgRaw%26r%3d0&exph=1414&expw=2120&q=enfermagem&simid=608003778705318296&FORM=IRPRST&ck=7403814A11B193EB288F99856238E229&selectedIndex=0",
    titulo: "Enfermagem",
    descricao: "Curso para todos que tem interrese de ingressar na área da saúde.",
    topicos: ["Biosegurança", "Primeiros Socorros", "Ministração de Medicamentos"]
}


var cursos = [programadorWeb, administração, enfermagem]

console.log(cursos)


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

cursos.forEach(curso => console.log(curso.titulo + ": " + curso.topicos.join(", ")))