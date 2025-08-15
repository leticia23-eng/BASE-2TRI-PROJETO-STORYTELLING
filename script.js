const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que mais te motiva?"
        alternativas: [
            {
                texto: "Criar coisas físicas e visíveis" ,
                afirmacao: "Tenho prazer em projetar e construir soluções tangíveis"
            },
            {
                texto: " Resolver problemas usando informações e tecnologia",
                afirmacao: "Adoro transformar dados e ideias em soluções inteligentes"
            }
        ]
    },
    {
        enunciado: "Se tivesse que escolher um projeto para liderar:",
        alternativas: [
            {
                texto: "Construir algo inovador para melhorar a vida das pessoas.",
                afirmacao: "Busco sempre inovar em soluções que ajudem diretamente as pessoas"
            },
            {
                texto: "Desenvolver um sistema que automatize tarefas complexas.",
                afirmacao: "Gosto de criar sistemas que simplificam o trabalho humano"
            }
        ]
    },
    {
        enunciado: "O que te deixa mais animado?",
        alternativas: [
            {
                texto: "Criar coisas que interajam com o mundo físico.",
                afirmacao: "Gosto de ver minhas criações funcionando no mundo real"
            },
            {
                texto: "Desenvolver soluções que funcionem online ou em redes digitais",
                afirmacao: "Prefiro criar soluções que vivem no mundo digital"
            }
        ]
    },
    {
        enunciado: "Quando pensa no futuro, você imagina",
        alternativas: [
            {
                texto: "Máquinas e estruturas mais inteligentes",
                afirmacao: "Acredito que a tecnologia física pode transformar o mundo"
            },
            {
                texto: "Sistemas digitais cada vez mais autônomos",
                afirmacao: "Vejo o futuro dominado pela automação e inteligência artificial"
            }
        ]
    },
    {
        enunciado: "Você prefere trabalhar com:",
        alternativas: [
            {
                texto: "projetos grandes e estruturais",
                afirmacao: "Tenho paciência e visão para projetos de grande escala"
            },
            {
                texto: "Soluções rápidas e adaptáveis",
                afirmacao: "ou ágil e gosto de adaptar soluções para diferentes contextos"
            }
        ]
    },
        {
        enunciado: "Se fosse aprender algo novo hoje",
        alternativas: [
            {
                texto: "Construção de robôs, prédios ou veículos",
                afirmacao: "Tenho interesse por engenharia e mecânica"
            },
            {
                texto: "Programação avançada e análise de dados",
                afirmacao: "Gosto de entender e criar através da programação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
