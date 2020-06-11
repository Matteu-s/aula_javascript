var nome = "Mateus Santos";
var idade = 22;
var idade2 = 10;
//aparece um log no inspecionar elemento
console.log(nome);
console.log(idade + idade2);

var frase = "Brasil joga muito ruim";
//troca o uma determinada palavra de uma variavel
console.log(frase.replace("Brasil", "Japão"));

//vetor
var lista = ["Maça", "Pêra", "Laranja"];
//adicionando uva ao vetor lista
lista.push("Uva");
console.log(lista);
//retira o ultimo elemento do vetor lista
lista.pop();
console.log(lista);
//tamanho da lista
console.log(lista.length);
//altera a ordem da lista
console.log(lista.reverse());
//transformando o vetor em uma string
console.log(lista.toString());
//colocando uma divisão entre as strings
console.log(lista.join(" - "));

//dicionário
var fruta = {nome:"Maça", cor:"Vermelha"};
//listando nome e cor do dicionario
console.log(fruta.nome);
console.log(fruta.cor);

//lista de dicionarios
var frutas = [{nome:"Maça", cor:"Vermelha"}, {nome:"Uva", cor:"Roxa"}];
//listando um item de cada lista de varios dicionarios
console.log(frutas[1].nome);
console.log(frutas[0].cor);

//comando prompt exibe uma pergunta e joga na variavel
/*var idade3 = prompt("Qual sua idade?");
if (idade3 >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};*/

//estrutura de repetição
var count = 0;
while (count <= 5){
    console.log("While: "+count);
    count++;
}

var count1;
for(count1=0; count1 <=10; count1++){
    console.log("For "+ count1);
}

var d = new Date();
    console.log("Data" + d);
    console.log(d.getMonth()+1); //para trazer o mês atual
    console.log(d.getMinutes()); //para trazer os minutos atuais
    console.log(d.getDay()); //para trazer o dia atual
    console.log("Hoje é: " + d.getDate()+ "/" + (d.getMonth()+1));
    var1 ="simpliy";
    var2 ="Leonardo"
    console.log(var1 + var2 + 1425 + "-" + 1519);

    function soma(n1, n2){
        return n1 + n2;
    }
    console.log(soma(5, 10));

    function setReplace(frase, nome, novo_nome){
        return frase.replace(nome, novo_nome)
    }
    console.log(setReplace("Vai Japão", "Japão", "Brasil"));

    //utilizando funcoes

    /*var validar; 
    function validaIdade(idade4){
        if(idade4 >= 18){
        validar = true
        }else{
            validar = false
        }
        return validar;
    }

    var idade4 = prompt("Digite sua idade: ");
    console.log(validaIdade(idade4)); */
    
    function clicou(){
        //transforma o id agradecimento em um texto HTML podendo utilizar itens do html, negrito, italico, cores etc
        document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
        //console.log(document.getElementById("agradecimento"));
        //alert("Você clicou no botão! ");
    }
    
    function redirecionar(){
        window.open("https://www.habbo.com.br/"); //abre nova aba
        //window.location.href = "https://www.habbo.com.br/"; //abre na mesma aba
    }
    
    function trocar(elemento){
        //se utilizar o document ele vai mudar todos os textos que usarem esse metodo, se utilizar o document, nao.
        //document.getElementById("mousemove").innerHTML = "Obrigado Por passar o mouse";
        elemento.innerHTML = "Obrigado por passar o mouse";
        //alert("Trocar texto");
    }

    function voltar(elemento){
        //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
        elemento.innerHTML = "Passe o mouse aqui";
    }

    function load(){
        //quando carrega o body, ele chama essa função. REF NO BODY
        alert("Página carregada");
    }
//coleta o valor que estao selecionando
    function funcaoChange(elemento){
        console.log(elemento.value);
    }