import HeroBase from "./HeroBase"
import InputForm from "./InputForm"
import style from "../../styles/heroPrincipal.module.css"
import { IconRocket, IconX } from '@tabler/icons-react';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Puff } from 'react-loader-spinner'

export default function Hero(props) {
    const [carregando, setCarregando] = useState(false)
    const apiKey = 'c1449ef939676f2c33db2ff448a96b2c'
    const leadPadrao = {
        conversion_identifier: 'Conversão Da Nova Landing Page Principal (Mais Solidário) - Daniel',
        email: '', // Mudar
        name: '', // Mudar
        mobile_phone: '', // Mudar
        available_for_mailing: true,
        tags: ['Curso', 'Instituição'], // Mudar
        city: '' // Mudar
    }
    const [lead, setLead] = useState(leadPadrao)
    const options = {
        method: 'POST',
        headers: {accept: 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({
            event_type: 'CONVERSION',
            event_family: 'CDP',
            payload: lead
        })
    };
    const [popUp, setPopUp] = useState(false)  
    function capturarLead() {
        if(lead.nome == false || lead.email == false || lead.mobile_phone == false || lead.tags == false || lead.city == false) {
            alert("Preencha todos os campos!!!")
        } else {
            setCarregando(true)
            fetch(`https://api.rd.services/platform/conversions?api_key=${apiKey}`, options)
              .then(response => response.json())
              .then(response => console.log(response))
              .then(setCarregando(false))
              .then(setPopUp(true))
              .catch(err => console.error(err));
        }
      }
    return(
    <div className={`bg-[#147BA7] w-full p-3 m-0 h-auto`}>
        <div className={`p-4 rounded-lg justify-center items-center flex flex-col w-full md:flex-row-reverse`}>
            <HeroBase className="mb-10 flex justify-center items-center">
                <Image src="/images/jovemNoNotebook.png" width={500} height={200} className="rounded-xl" alt="Gif promoções mais solidário"/>
                {/*<iframe className="rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/lM8v8Tf2PIw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>*/}
            </HeroBase>
            <HeroBase className="flex justify-center items-center">
                <div className="shadow-xl mb-5 flex flex-col justify-center items-center rounded-xl w-[90%] md:w-[80%] bg-slate-200">
                    <h1 className={`
                    bg-[#D64517]
                    rounded-t-xl p-2 mt-0 w-[100%] flex justify-center items-center text-center
                    text-4xl text-white font-semibold
                    `}>Preencha Aqui<br/>e Garanta sua Bolsa <br/> Agora Mesmo!</h1> 
                    <form className={`flex flex-col justify-center my-3 w-[90%]`}> 
                        <input onChange={(e) => {setLead({...lead, name: e.target.value})}} type="text" placeholder="Nome" className='p-2 m-2 rounded-2xl'/>
                        <input onChange={(e) => {setLead({...lead, email: e.target.value})}} type="text" placeholder="E-mail" className='p-2 m-2 rounded-2xl'/>
                        <input onChange={(e) => {setLead({...lead, mobile_phone: e.target.value})}} type="text" placeholder="Telefone" className='p-2 m-2 rounded-2xl'/>
                        
                        <select onChange={(e) => {setLead({ ...lead, tags: [e.target.value, lead.tags[1]] });}} placeholder="Curso Desejado" className='p-2 m-2 rounded-2xl'>
                            <option value="">Curso Desejado</option>
                            <option value="Administração">Administração</option>
                            <option value="Agente Comunitário">Agente Comunitário</option>
                            <option value="Agrocomputação">Agrocomputação</option>
                            <option value="Agronegócio">Agronegócio</option>
                            <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
                            <option value="Arquitetura e Urbanismo">Arquitetura e Urbanismo</option>
                            <option value="Artes">Artes</option>
                            <option value="Artes Visuais">Artes Visuais</option>
                            <option value="Automação Industrial">Automação Industrial</option>
                            <option value="Biblioteconomia">Biblioteconomia</option>
                            <option value="Biomedicina">Biomedicina</option>
                            <option value="Ciência da Felicidade">Ciência da Felicidade</option>
                            <option value="Ciências Biológicas">Ciências Biológicas</option>
                            <option value="Ciências Contábeis">Ciências Contábeis</option>
                            <option value="Coach e Desenvolvimento Humano">Coach e Desenvolvimento Humano</option>
                            <option value="Comércio Exterior">Comércio Exterior</option>
                            <option value="Computação">Computação</option>
                            <option value="Criminologia">Criminologia</option>
                            <option value="Design de Interiores">Design de Interiores</option>
                            <option value="Design de Moda">Design de Moda</option>
                            <option value="Design de Produto">Design de Produto</option>
                            <option value="Design Gráfico">Design Gráfico</option>
                            <option value="Direito">Direito</option>
                            <option value="Economia">Economia</option>
                            <option value="Educação Especial">Educação Especial</option>
                            <option value="Educação Física">Educação Física</option>
                            <option value="Energias Renováveis">Energias Renováveis</option>
                            <option value="Engenharia Agronômica (Agronomia)">Engenharia Agronômica (Agronomia)</option>
                            <option value="Engenharia Ambiental e Sanitária">Engenharia Ambiental e Sanitária</option>
                            <option value="Engenharia Civil">Engenharia Civil</option>
                            <option value="Engenharia da Computação">Engenharia da Computação</option>
                            <option value="Engenharia de Alimentos">Engenharia de Alimentos</option>
                            <option value="Engenharia de Controle e Automação">Engenharia de Controle e Automação</option>
                            <option value="Engenharia de Design Digital">Engenharia de Design Digital</option>
                            <option value="Engenharia de Produção">Engenharia de Produção</option>
                            <option value="Engenharia de Software">Engenharia de Software</option>
                            <option value="Engenharia Elétrica">Engenharia Elétrica</option>
                            <option value="Engenharia Mecânica">Engenharia Mecânica</option>
                            <option value="Estética e Cosmética">Estética e Cosmética</option>
                            <option value="Farmácia">Farmácia</option>
                            <option value="Filosofia">Filosofia</option>
                            <option value="Física">Física</option>
                            <option value="Fisioterapia">Fisioterapia</option>
                            <option value="Fonoaudiologia">Fonoaudiologia</option>
                            <option value="Gastronomia">Gastronomia</option>
                            <option value="Geografia">Geografia</option>
                            <option value="Gerontologia">Gerontologia</option>
                            <option value="Gestão Ambiental">Gestão Ambiental</option>
                            <option value="Gestão Comercial">Gestão Comercial</option>
                            <option value="Gestão da Qualidade">Gestão da Qualidade</option>
                            <option value="Gestão de Produção Industrial">Gestão de Produção Industrial</option>
                            <option value="Gestão de Recursos Humanos">Gestão de Recursos Humanos</option>
                            <option value="Gestão de Segurança Privada">Gestão de Segurança Privada</option>
                            <option value="Gestão Financeira">Gestão Financeira</option>
                            <option value="Gestão Fiscal e Tributária">Gestão Fiscal e Tributária</option>
                            <option value="Gestão Hospitalar">Gestão Hospitalar</option>
                            <option value="Gestão Pública">Gestão Pública</option>
                            <option value="História">História</option>
                            <option value="Hotelaria">Hotelaria</option>
                            <option value="Investigação Forense e Perícia Criminal">Investigação Forense e Perícia Criminal</option>
                            <option value="Jogos Digitais">Jogos Digitais</option>
                            <option value="Jornalismo">Jornalismo</option>
                            <option value="Letras (Português/Inglês)">Letras (Português/Inglês)</option>
                            <option value="Letras (Português/Libras)">Letras (Português/Libras)</option>
                            <option value="Logística">Logística</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Massoterapia">Massoterapia</option>
                            <option value="Matemática">Matemática</option>
                            <option value="Música">Música</option>
                            <option value="Negócios Imobiliários">Negócios Imobiliários</option>
                            <option value="Nutrição">Nutrição</option>
                            <option value="Odontologia">Odontologia</option>
                            <option value="Pedagogia">Pedagogia</option>
                            <option value="Podologia">Podologia</option>
                            <option value="Processo Cervejeiros">Processo Cervejeiros</option>
                            <option value="Processos Escolares">Processos Escolares</option>
                            <option value="Processos Gerenciais">Processos Gerenciais</option>
                            <option value="Processos Químicos">Processos Químicos</option>
                            <option value="Produção Publicitária">Produção Publicitária</option>
                            <option value="Psicanálise">Psicanálise</option>
                            <option value="Psicologia">Psicologia</option>
                            <option value="Psicopedagogia">Psicopedagogia</option>
                            <option value="Publicidade e Propaganda">Publicidade e Propaganda</option>
                            <option value="Química">Química</option>
                            <option value="Radiologia">Radiologia</option>
                            <option value="Saneamento Ambiental">Saneamento Ambiental</option>
                            <option value="Secretariado Executivo">Secretariado Executivo</option>
                            <option value="Segurança do Trabalho">Segurança do Trabalho</option>
                            <option value="Segurança no Trânsito">Segurança no Trânsito</option>
                            <option value="Segurança Pública">Segurança Pública</option>
                            <option value="Serviço Social">Serviço Social</option>
                            <option value="Serviços Jurídicos">Serviços Jurídicos</option>
                            <option value="Sistemas Biomédicos">Sistemas Biomédicos</option>
                            <option value="Sistemas de Informação">Sistemas de Informação</option>
                            <option value="Sistemas para Internet">Sistemas para Internet</option>
                            <option value="Sociologia">Sociologia</option>
                            <option value="Tecnologia Oftálmica">Tecnologia Oftálmica</option>
                            <option value="Teologia">Teologia</option>
                            <option value="Terapia Ocupacional">Terapia Ocupacional</option>
                            <option value="Terapias Integrativas e Complementares">Terapias Integrativas e Complementares</option>
                            <option value="Zootecnia">Zootecnia</option> 
                        </select>

                        <select onChange={(e) => {setLead({ ...lead, tags: [lead.tags[0], e.target.value] });}} placeholder="Instituição de Ensino Desejada(opcional)" className='p-2 m-2 rounded-2xl'>
                            <option value="">Instituição de Ensino(opcional)</option>
                            <option value="Universo">Universo</option>
                            <option value="Unifatecie">Unifatecie</option>
                        </select>
                        
                        <select onChange={(e) => {setLead({...lead, city: e.target.value})}} placeholder="Cidade" className='p-2 m-2 rounded-2xl'>
                            <option value="">Cidade</option>
                            <option value="Alagoinhas">Alagoinhas</option>
                            <option value="EAD">EAD (Ensino a distância)</option>
                            <option value="Feira de Santana">Feira de Santana</option>
                            <option value="Itabuna">Itabuna</option>
                            <option value="Jequié">Jequié</option>
                            <option value="Juazeiro">Juazeiro</option>
                            <option value="Lauro de Freitas">Lauro de Freitas</option>
                            <option value="Petrolina">Petrolina</option>
                            <option value="Salvador">Salvador</option>
                            <option value="Vitória da Conquista">Vitória da Conquista</option>
                        </select>
                        
                        <div className="w-[100%] flex justify-center items-center">
                            <button onClick={(e) => {e.preventDefault(); capturarLead()}} className="px-4 py-2 my-2 text-xl flex justify-center items-center w-[60%] rounded-2xl bg-[#D64517] hover:bg-orange-800 active:bg-orange-900 text-white font-medium mx-1">
                            {carregando ? 
                                <Puff
                                height="50"
                                width="50"
                                radius={1}
                                color="#fff"
                                ariaLabel="puff-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                className="mr-1"
                                /> :
                                <IconRocket size={40} className="mr-1"/>
                            }
                            Mudar Meu Futuro
                            </button>
                        </div>
                    </form>
                </div>
            </HeroBase>
        </div>
        <div className={`${popUp ? "flex" : "hidden"} ease-in flex flex-col justify-center items-center z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-md rounded-xl text-center`}>
        <button onClick={() => setPopUp(false)} className='absolute top-2 right-2'><IconX /></button>
        <h2 className='my-4 text-4xl font-semibold'>Parabéns</h2>
        <Image alt='Check' src="/check.gif" width={200} height={200}/>
        <p className='my-4 text-lg'>Inscrição realizada com sucesso</p>
        <p className="font-bold">Agora é só aguardar o nosso contato</p>
    </div>
    </div>
    )
}