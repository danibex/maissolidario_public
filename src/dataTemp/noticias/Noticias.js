import Noticia from "./NoticiasConstrutor"
import estudanteDiploma from "@/assets/img/Noticias/estudanteDiploma.png"
import alunosMaisVelhos from "@/assets/img/Noticias/alunosMaisVelhos.png"
import superacao from "@/assets/img/Noticias/superacao.png"
import alunoNotebook from "@/assets/img/Noticias/alunoNotebook.png"

export const noticias = [
    new Noticia(
        1, 
        estudanteDiploma, 
        "Bolsas de Estudos Transformadoras no Nordeste", 
        "Startup Baiana Mais Solidário gera mais de 1 milhão e meio de reais em Economia...", 
        ""),
    new Noticia(
        2, 
        alunosMaisVelhos, 
        "Nunca é Tarde para entrar para a faculdade", 
        "A procura de uma graduação entre oessoas maduras após 40 anos aumentam significativamente....", 
        ""),
    new Noticia(
        3, 
        superacao, 
        "Superando Limitações financeiras", 
        "Como o programa Mais Solidário, ajuda a superar limitações financeiras na busca por educação, mudando vidas...", 
        ""),
    new Noticia(
        4, 
        alunoNotebook, 
        "Mudando o Seu Destino Com Uma Bolsa de Estudos", 
        "Bolsas de estudos podem transformar vidas, oferecendo ajuda financeira e oportunidades de mobilidade social....", 
        ""),
];
  