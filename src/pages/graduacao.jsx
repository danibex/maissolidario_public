import MenuNavegacao from "@/components/Menu/MenuNavegacao"
import CabecalhoFiltro from "@/components/HerosBolsas/CabecalhoFiltro"
import Filtro from "@/components/HerosBolsas/Filtro"
import Footer from "@/components/Footer/Footer"
import style from "@/styles/heroPrincipal.module.css"
import ItemFiltro from "@/components/HerosBolsas/ItemFiltro"
import { IconSearch, IconChevronsRight, IconChevronsLeft } from "@tabler/icons-react"
import CursosEcommerce from "@/components/HerosBolsas/CursosEcommerce"
import CardCurso from "@/components/HerosBolsas/CardCurso"
import { useState, useEffect } from "react"
import BotaoWhatsapp from "@/components/BotaoWhatsapp"
import odonto from "@/assets/img/Cursos/odontologia.png"
export default function Bolsas() {
  const [filtro, setFiltro] = useState(
    {
    modalidade: true,
    cidade: false, 
    nome: false, 
    faculdade: false, 
    })
    
  function atualizarCidadeFiltro(ativo) { // Funcão acionada ao selecionar modalidade
    setFiltro({modalidade: true, nome: false, faculdade:false, cidade: ativo})

  }
  function atualizarNomeFiltro(ativo) {
    setFiltro({modalidade: true, nome: ativo, faculdade: false,cidade: true})
  }
  function atualizarFaculdadeFiltro(ativo) {
    setFiltro({...filtro, faculdade: ativo})
  }

  // Valores do filtro
  const [valoresFiltro, setValores] = useState({modalidade: "Todas", cidade: "Todas", nome: "Todos", faculdade: "Todas"})
  // Paginação e rederização de cursos
  const [paginacao, setPaginacao] = useState(1)
  const [dados, setDados] =useState({cursos: [], limite: 0})
  function carregarDados() {
    fetch(`api/cursos/graduacao/${paginacao}`)
    .then((response) => response.json())
    .then((data) => {
      setDados({ cursos: data.cursos, limite: Math.ceil(data.limite / 9)});
      console.log(data.cursos)
    })
      
    .catch((error) => {
      console.error('Erro ao carregar os dados:', error);
    });
  }
  function carregarParceiros() {
    fetch(`api/filtro/parceiros`)
    .then((response) => response.json())
    .then((data) => {
      setParceiros(data.parceiros);
    })
    .catch((error) => {
      console.error('Erro ao carregar os dados:', error);
    });
  }

  useEffect(() => {
    carregarDados()
    carregarParceiros()
  }, []);

  useEffect(() => {
    carregarDados();
  }, [paginacao]);
  function proximaPagina() {
    setPaginacao(prevPaginacao => prevPaginacao + 1)
  }
  function paginaAnterior() {
    setPaginacao(prevPaginacao => prevPaginacao - 1)
  }

// Filtro (agora vai)
const [cidades, setCidades] = useState([])
const [parceiros, setParceiros] = useState([])

function atualizarCidades() {
  if(valoresFiltro.modalidade == "EAD") {
    setCidades(["Brasil"])   
  } else {
    setCidades([...new Set(dados.cursos.map(curso => curso.cidade))])  
  }
} 
function atualizarParceiros() {
  setParceiros([...new Set(dados.cursos.map(curso => curso.parceiro_id))])
}

useEffect(()=> {
  atualizarCidades()
  atualizarParceiros()
  console.log(valoresFiltro)
}, [valoresFiltro])
  
useEffect(() => {
  console.log(parceiros)
}, [parceiros])

return(
<MenuNavegacao>
  <CabecalhoFiltro graduacao fundo={style.fundoBolsaGraduacao}>
    <Filtro>
      <ItemFiltro onChange={(e) => {atualizarCidadeFiltro(true); setValores(prevValores => ({...prevValores, modalidade: e.target.value}));}} titulo="Modalidade" selectNome="Modalidade" disabled={filtro.modalidade ? false : true}>
          <option value="Todas">Todas</option>
          <option value="Presencial">Presencial</option>
          <option value="EAD">EAD</option>
      </ItemFiltro>
      <ItemFiltro onChange={(e) => {atualizarNomeFiltro(true); setValores(prevValores => ({...prevValores, cidade: e.target.value}))}} titulo="Cidade:" selectNome="Cidade" disabled={filtro.cidade ? false : true}>
        <option value="Todas">Todas</option>
        {cidades.map(cidade => <option value={cidade}>{cidade}</option>)}
      </ItemFiltro>
      <ItemFiltro onChange={(e) => {atualizarFaculdadeFiltro(true);setValores(prevValores => ({...prevValores, nome: e.target.value}))}} titulo="Nome do Curso:" selectNome="Curso" disabled={filtro.nome ? false : true}>
        <option value="Todos">Todos</option>
        {dados.cursos.map((curso, index) => {
          if(curso.cidade == valoresFiltro.cidade) {
            return(
              <option key={index} value={curso.nome}>{curso.nome}</option>
              )
          }
        })}
      </ItemFiltro>
      <ItemFiltro onChange={(e) => {setValores(prevValores => ({...prevValores, faculdade: e.target.value}))}} titulo="Faculdade:" selectNome="Faculdade" disabled={filtro.faculdade ? false : true}>
      <option value="Todas">Todas</option>
      {parceiros.map((parceiro, index) => {
        
        return( 
          <option key={index} value={parceiro[0]}>{parceiro[0]}</option>
        )
        
      })}
      {/* {parceiros.map((parceiro, index) => {
        return(
          <option key={index} value={parceiro.nome}>{parceiro.nome}</option>
          )
      })}*/}
      </ItemFiltro>
      <div className="flex justify-center items-center my-2 mr-4">
          <button className="justify-center items-center flex flex-row p-2 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white rounded-lg text-lg font-semibold"><IconSearch className="mr-2"/>Procurar</button>
      </div>
    </Filtro>
  </CabecalhoFiltro>
  <CursosEcommerce>
    {/* url, nome, precoCheio, porcentagemDesconto, valorComDesconto, salarioMedio */}
    {dados.cursos.map((curso, index) => {
      return(
      <CardCurso
        key={index} 
        economia={curso.economia_total} 
        url={curso.urlimagem ? curso.urlimagem : "/"} 
        nome={curso.nome} 
        precoCheio={curso.valor_cheio} 
        porcentagemDesconto={curso.porcentagem_desconto} 
        valorComDesconto={curso.valor_com_desconto}
        salarioMedio={curso.salario_medio}/>
      )
    })}
    <CardCurso economia="84.480" url={odonto} nome="Odontologia" precoCheio="2.200" porcentagemDesconto="80" valorComDesconto="440" salarioMedio="4.126"/>
  </CursosEcommerce>
  <div className="text-xl font-medium flex flex-row items-center justify-center w-full bg-slate-100 py-8">
      {/* REFATORAR BOTÃO */}
      <button 
      onClick={paginaAnterior}
      disabled={paginacao == 1 ? true : false} 
      className={`py-2 pl-1 pr-4 flex flex-row justify-center items-center m-3 border border-blue-500 text-blue-500 rounded-full ${paginacao == 1  ? "opacity-50" : "hover:bg-blue-500 hover:text-white hover:underline active:shadow-none"}  shadow-xl`}
      >
        <IconChevronsLeft size={30}/>Anterior
      </button>
      <button
      disabled={paginacao == dados.limite ? true : false} 
      className={`py-2 pr-1 pl-4 flex flex-row justify-center items-center m-3 border border-blue-500 text-blue-500 rounded-full ${paginacao == dados.limite ? "opacity-50" : "hover:bg-blue-500 hover:text-white hover:underline active:shadow-none"} shadow-xl`}
      onClick={proximaPagina}
      >
        Próximo<IconChevronsRight size={30}/>
      </button>
    </div>
<Footer/> 
<BotaoWhatsapp/>
</MenuNavegacao>
)
}