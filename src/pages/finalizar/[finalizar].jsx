import BotaoWhatsapp from "@/components/BotaoWhatsapp";
import Footer from "@/components/Footer/Footer";
import MenuNavegacao from "@/components/Menu/MenuNavegacao";
import { IconQrcode, IconCreditCard, IconFileBarcode, IconFileText, IconCash, IconCheck, IconChevronsRight } from "@tabler/icons-react";
import { useContext, useState } from "react";
import { CompraContext } from "@/contexts/Compra";
import { TailSpin } from "react-loader-spinner";
import { AutenticacaoContext } from "@/contexts/AuthGoogle";
export default function Registro(props) {
    const [carregando, setCarregando] = useState(false);
    const [togglePagamento, setPagamento] = useState({pix: false, boleto: false, cartao: false})
    const [check, setCheck] = useState({passo1: false, passo2: false})
    const [toggleFinalizar, setFinalizar] = useState(false)
    const {compra} = useContext(CompraContext) // Context de compra
    const {signed} = useContext(AutenticacaoContext)
    const validarFormularioAsaas = (e) => {
        e.preventDefault(); 
        if(usuario.name && usuario.cpfCnpj && usuario.email && usuario.mobilePhone && usuario.postalCode){
            setCheck({...check, passo1: true}); 
            setFinalizar(true)
            // cadastrar()
        } else {
           // window.alert("Atenção! Preencha todos os campos do formulário!")
           // Desativado temporariamente 
           setCheck({...check, passo1: true}); 
            setFinalizar(true)
        }
    }
    let novoUsuario = {
        name: "",
        email: "",
        phone: "",
        mobilePhone: "",
        cpfCnpj: "",
        postalCode: "",
        address: "", // rua
        addressNumber: "",
        complement: "",
        province: "",
        externalReference: "",
        notificationDisabled: false,
        additionalEmails: "",
        municipalInscription: "",
        stateInscription: "",
        observations: ""
    };
    const [usuario, setUsuario] = useState(novoUsuario)
    
    // CADASTRAR NOVO USUÁRIO NA PLATAFORMA ASAAS ATRAVÉS DO BACKEND DA MINHA APLUICAÇÃO
    function cadastrar (e) {
        setCarregando(true);
        e.preventDefault()
        fetch('/api/asaas/cadastrarUsuario', {
            method: 'POST',
            body: JSON.stringify(usuario)
        })
        .then(resp =>  resp.json()) 
        .then(data => { console.log(data)}) 
        .finally(() => {
            setTimeout(() => {
              setCarregando(false);
            }, 1000); // Atraso de 2 segundos (2000 milissegundos)
          })
    }
    //

function atualizarNome(event) {
    setUsuario({...usuario, name: event.target.value})
}
function atualizarCPF(event) {
    setUsuario({...usuario, cpfCnpj: event.target.value})
}
function atualizarEmail(event) {
    setUsuario({...usuario, email: event.target.value})
}
function atualizarTelefone(event) {
    setUsuario({...usuario, mobilePhone: event.target.value})
}
function atualizarCEP(event) {
    setUsuario({...usuario, postalCode:  event.target.value})
}
function atualizarComplemento(event) {
    setUsuario({...usuario, complement: event.target.value })
}
function atualizarRua(event) {
    setUsuario({...usuario, address: event.target.value })
}
function atualizarNumero(event) {
    setUsuario({...usuario, addressNumber: event.target.value })
}
function atualizarBairro(event) {
    setUsuario({...usuario, province: event.target.value })
}
if(signed){
return(
<MenuNavegacao>
<div className="w-full md:flex-row flex-col-reverse gap-4 flex justify-center items-center md:items-start bg-gradient-to-b from-blue-200 via-blue-300 to-green-400">
        <div className="shadow-xl my-5 mb-5 flex flex-col justify-center items-center rounded-xl w-[80%] md:w-[50%]  bg-slate-200">
            <h1 className={`
            bg-gradient-to-br to-green-400 via-green-500 from-green-600
            rounded-t-xl p-2 mt-0 w-[100%] flex justify-center items-center text-center
            text-4xl text-white font-semibold
            `}>Finalizar Compra</h1> 
            <div className="flex flex-row justify-center w-[100%] items-center h-[60px] my-4 p-2 text-white">
                <div className={`${check.passo1 ? "hidden" : "flex"} mx-0 rounded-full border bg-blue-400 flex justify-center items-center p-4 h-[60px] w-[60px]`}><TailSpin width={50} /></div>
                <div className={`${check.passo1 ? "flex" : "hidden"} mx-0 rounded-full border bg-blue-400 flex justify-center items-center p-4 h-[60px] w-[60px]`}><IconCheck strokeWidth={3} size={50}/></div>
                <div><hr className="mx-0 w-[160px] border-black"/></div>
                <div className={`${check.passo2 ? "hidden" : "flex"} mx-0 rounded-full border bg-blue-400 flex justify-center items-center p-4 h-[60px] w-[60px]`}><TailSpin width={50} /></div>
                <div className={`${check.passo2 ? "flex" : "hidden"} mx-0 rounded-full border bg-blue-400 flex justify-center items-center p-4 h-[60px] w-[60px]`}><IconCheck strokeWidth={3} size={50}/></div>
            </div>
            <form className={`${check.passo1 ? "hidden" : "flex"} flex flex-col justify-center items-center my-3 w-[90%]`}> 
                <div className="flex flex-col md:flex-row items-center justify-center w-full">
                    <div className="flex flex-col items-center justify-center w-[100%] md:w-1/2">
                        <input type={"text"} placeholder="Nome Completo"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.name}
                        onChange={atualizarNome}
                        required
                        />
                        <input type={"text"} placeholder="CPF"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.cpfCnpj}
                        onChange={atualizarCPF}
                        required
                        />
                        <input type={"text"} placeholder="E-mail"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.email}
                        onChange={atualizarEmail}
                        required
                        />
                        <input type={"text"} placeholder="Telefone"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.mobilePhone}
                        onChange={atualizarTelefone}
                        required
                        />  
                    </div>
                    <div className="md:w-1/2 w-[100%] flex flex-col justify-center items-center">
                        <input type={"text"} placeholder="CEP"
                            className={`p-2 m-2 rounded-2xl w-[95%]`}
                            value={usuario.postalCode}
                            onChange={atualizarCEP}
                            required
                            />
                        <input type={"text"} placeholder="Bairro"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.province}
                        onChange={atualizarBairro}
                        />
                        <input type={"text"} placeholder="Rua"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.address}
                        onChange={atualizarRua}
                        />
                        <input type={"text"} placeholder="Complemento"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.complement}
                        onChange={atualizarComplemento}
                        />
                    </div>
                </div>
                        <input type={"text"} placeholder="Número da Casa"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.addressNumber}
                        onChange={atualizarNumero}
                        required
                        />
                <button onClick={(e) => {validarFormularioAsaas(e)}} className="mt-2 w-[250px] h-[55px] flex flex-row border p-4 text-xl font-bold text-white bg-blue-400 rounded-xl hover:bg-blue-500 active:bg-blue-600 justify-center items-center">
                    <IconChevronsRight className={`mr-2`}/>
                    <p>Próximo</p>
                </button>
            </form>
            <div className={`${check.passo1 && !check.passo2 ? "block" : "hidden"}  `}>
                <div className="flex flex-row justify-center items-center mt-4 text-blue-500 font-medium">
                    <button onClick={() => {setPagamento({boleto:true, pix: false, cartao: false}); /*  */}} className={`${togglePagamento.boleto ? "bg-blue-800 text-white" : ""} active:bg-blue-700 hover:bg-blue-600 hover:text-white bg-slate-100 m-2 border border-blue-400 px-4 py-2 rounded-xl flex flex-row`}><IconFileBarcode className="mr-1"/>Boleto</button>
                    <button onClick={() => {setPagamento({boleto:false, pix: true, cartao: false});}} className={`${togglePagamento.pix ? "bg-blue-800 text-white" : ""} active:bg-blue-700 hover:bg-blue-600 hover:text-white bg-slate-100 m-2 border border-blue-400 px-4 py-2 rounded-xl flex flex-row`}><IconQrcode className="mr-1"/> PIX</button>
                    <button onClick={() => {setPagamento({boleto:false, pix: false, cartao: true});}} className={`${togglePagamento.cartao ? "bg-blue-800 text-white" : ""} active:bg-blue-700 hover:bg-blue-600 hover:text-white bg-slate-100 m-2 border border-blue-400 px-4 py-2 rounded-xl flex flex-row`}><IconCreditCard className="mr-1"/>Crédito</button>
                    </div>
                    <div className="mt-4 mb-4 flex justify-center items-center">
                    <button onClick={() => {setCheck({...check, passo2: true});}} className="w-[250px] h-[55px] flex flex-row border p-4 text-xl font-bold text-white bg-blue-400 rounded-xl hover:bg-blue-500 active:bg-blue-600 justify-center items-center">
                        <IconCash className={`mr-2`}/>
                        <p>Gerar Pagamento</p>
                    </button>
                </div> 
            </div>
            <div className={`${check.passo2 ? "flex" : "hidden"} mb-8 flex-col justify-center items-center`}>
                <h2 className="text-2xl font-medium text-blue-700 mb-8">Pagamento Gerado</h2> 
                <div className="flex flex-row ">
                    {/* REDIRECIONAR MARA MEU CURSO */}
                    <button className={`hover:bg-blue-700 mx-4 border bg-blue-600 text-white font-medium px-4 py-2 rounded-lg flex flex-row`}><IconQrcode/>Pagar Online</button>
                    <button className={`hover:bg-blue-700 mx-4 border bg-blue-600 text-white font-medium px-4 py-2 rounded-lg flex flex-row`}><IconFileText/>PDF</button>
                </div>
            </div>
        </div>
        
        <div className={`mt-5 flex flex-col p-4 border md:w-[40%] md:min-w-[40%] min-w-[90%] rounded-xl bg-white`}>
        <div className="mb-4">
            <div className="mb-2">
                <h2 className="font-medium text-center text-2xl mb-4">Odontologia na Universo</h2>
                <div className="flex justify-center items-center"><hr className="w-[95%]"/></div>
                <div className="flex flex-row flex-wrap justify-center items-center whitespace-nowrap my-5">   
                    <p className="border-blue-400 text-blue-400 font-semibold border px-2 py-1 mx-1 my-1 rounded-full">Presencial</p>
                    <p className="border-blue-400 text-blue-400 font-semibold border px-2 py-1 mx-1 my-1 rounded-full">8 Semestres</p>
                    <p className="border-blue-400 text-blue-400 font-semibold border px-2 py-1 mx-1 my-1 rounded-full">Graduação</p>
                    <p className="border-blue-400 text-blue-400 font-semibold border px-2 py-1 mx-1 my-1 rounded-full">Noturno</p>
                </div>
            </div>
            <div className="flex justify-center items-center"><hr className="w-[95%]"/></div>
        </div>
        <div>
            <div className="flex flex-row justify-between items-center text-base text-blue-400 font-medium">
                <p>Mensalidade Integral:</p>
                <p className="line-through">R$ 2.200,00</p>
            </div>
            <div className="flex flex-row justify-between items-center text-lg text-green-500 font-semibold">
                <p>Desconto do mais solidário:</p>
                <p>R$ -1.760,00</p>
            </div>
            <div className="flex flex-row justify-between items-center text-xl text-green-700 font-semibold">
                <p>Você pagará por mês:</p>
                <p>R$ 440,00</p>
            </div>
        </div>
    </div>
</div>
    <Footer/>
    <BotaoWhatsapp/>
</MenuNavegacao>
)} else {
return(
<MenuNavegacao>
    <div className="w-full md:flex-row flex-col-reverse gap-4 flex justify-center items-center md:items-start bg-gradient-to-b from-blue-200 via-blue-300 to-green-400">
        <div className="w-[80%] p-4 bg-slate-100 rounded-xl h-[300px] flex justify-center items-center m-12">
            <h1 className="font-medium text-4xl">Faça o Login Para Continuar!!!</h1>
        </div>
    </div>
<Footer/>
<BotaoWhatsapp/>
</MenuNavegacao>
)
}
}
