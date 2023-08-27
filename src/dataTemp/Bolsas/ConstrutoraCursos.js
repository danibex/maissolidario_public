export default class Colegio {
    constructor(id, nomeDoCurso, cidade, modalidade, especializacao, parceiro, precoCheio, porcentagemDesconto, campus, sobre, duracao, urlImage = "") {
        this.id = id;
        this.nomeDoCurso = nomeDoCurso;
        this.cidade = cidade;
        this.modalidade = modalidade; /*EAD / Presencial */
        this.especializacao = especializacao; /* Graduação, técnico... */
        this.parceiro = parceiro;
        this.precoCheio = precoCheio;
        this.porcentagemDesconto = porcentagemDesconto;
        this.economiaTotal = economiaTotal;
        this.valorComDesconto = precoCheio-(precoCheio * (porcentagemDesconto/100));
        this.campus = campus;
        this.sobre = sobre;
        this.duracao = duracao;
        this.urlImage = urlImage
    }
}