import Depoimentos from "./DepoimentosConstrutor"
import anaSilva from "@/assets/img/Depoimentos/anaSilva.png"
import carlosMendes from "@/assets/img/Depoimentos/carlosMendes.png"
import lucasSouza from "@/assets/img/Depoimentos/lucasSouza.png"

export const depoimentos = [
    new Depoimentos(
        1, 
        anaSilva, 
        "Ana Silva", 
        "Advogada", 
        "A oportunidade proporcionada pela bolsa de estudo do programa Mais Solidário foi o ponto de virada na minha vida, permitindo-me ingressar em uma faculdade e transformar minha realidade. Hoje, sou uma graduada em Direito pela Universo, atuando com sucesso na área há mais de 4 anos."
        ),
    new Depoimentos(
        2, 
        carlosMendes, 
        "Carlos Mendes", 
        "Enfermeiro", 
        "Deixei de estar na informalidade e agora sou um profissional formado em Enfermagem, cursando Enfermagem Obstétrica e atuando em um prestigiado hospital em Salvador. A bolsa concedida pelo Mais Solidário abriu inúmeras oportunidades para o meu desenvolvimento na carreira."
        ),
    new Depoimentos(
        3, 
        lucasSouza, 
        "Lucas Souza", 
        "Psicólogo", 
        "Com a bolsa do Mais Solidário, me formei em Psicologia e hoje atendo em meu próprio consultório, ajudando pessoas a encontrar equilíbrio emocional. Obrigado por acreditar em mim e nunca desistir dos seus sonhos."
        ),
]