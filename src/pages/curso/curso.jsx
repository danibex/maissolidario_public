import BotaoWhatsapp from "@/components/BotaoWhatsapp";
import Footer from "@/components/Footer/Footer";
import MenuNavegacao from "@/components/Menu/MenuNavegacao";
import Image from "next/image";
import imagemOdonto from "@/assets/img/Cursos/odontologia.png"
import imagemUniverso from "../../assets/img/Parceiros/Universo.png"
import { useContext, useState } from "react";
import { IconCash } from "@tabler/icons-react";
import Link from "next/link";
import { CompraContext } from "@/contexts/Compra";
export default function Curso() {
    let compraPadrao = {
        customer: "{CUSTOMER_ID}", 
        billingType: "BOLETO", // BOLETO | CREDIT_CARD | PIX
        dueDate: "2017-06-10", // Data(string)
        value: 0, // preço
        description: "Odontologia na Universo",
        externalReference: "",
        discount: {
          value: 0,
          dueDateLimitDays: 0
        },
        fine: { // juros
          value: 0
        },
        interest: {
          value: 0
        },
        postalService: false
      }
    const [activeSection, setActiveSection] = useState("conheca");
    const [compra, setCompra] = useState(compraPadrao) 
    function mostrarDescricao(elemento) {
      setActiveSection(elemento);
    }
    const { atualizarCompra } = useContext(CompraContext)
    function setarCompra(curso){
        atualizarCompra(curso)
    }
return(
<MenuNavegacao>
<div className={`flex-col-reverse w-full bg-slate-100 flex md:flex-row justify-center items-center md:justify-around md:items-start gap-4 p-4`}>
    <div className={`flex flex-col gap-4 md:w-[60%] w-[95%] justify-center items-center`}>
        <div className={`w-[100%] border pb-4 rounded-xl bg-white flex-col justify-center items-center`}>
            <div className="relative">
                <Image src={imagemUniverso} className="absolute opacity-70 z-10 right-1 bottom-1" width={100}/>
                <Image src={imagemOdonto} className="rounded-t-xl shadow-md"/>
            </div>
            {/* Refatorar itens (criar componentes) */}
            <h1 className="text-2xl font-bold my-3 text-center">Odontologia na Universo </h1>
            <div className="flex flex-col mx-4">
                <div className="my-2 flex flex-row justify-start items-center">
                    <h2 className="font-semibold text-lg">Modalidade:</h2>
                    <p className="border-blue-400 text-blue-400 font-semibold mx-4 border px-2 py-1 rounded-full">Presencial</p>
                </div>
                <div className="my-2 flex flex-row justify-start items-center">
                    <h2 className="font-semibold text-lg">Duração:</h2>
                    <p className="border-blue-400 text-blue-400 font-semibold ml-4 border px-2 py-1 rounded-full">8 Semestres</p>
                </div>
                <div className="my-2 flex flex-row justify-start items-center">
                    <h2 className="font-semibold text-lg">Nível:</h2>
                    <p className="border-blue-400 text-blue-400 font-semibold mx-4 border px-2 py-1 rounded-full">Graduação</p>
                </div>
                <div className="my-2 flex flex-row justify-start items-center">
                    <h2 className="font-semibold text-lg">Turno:</h2>
                    <p className="border-blue-400 text-blue-400 font-semibold mx-4 border px-2 py-1 rounded-full">Noturno</p>
                </div>
            </div>
        </div>
        <div className="border flex flex-col w-[100%] bg-white rounded-xl ">
            <div className={`w-[100%] p-4 flex flex-col md:flex-row justify-around items-center bg-green-400 rounded-t-xl`}>
                <button onClick={() => mostrarDescricao("sobre")} className={`w-[80%] md:w-auto font-medium active:shadow-none hover:text-white hover:bg-blue-500 text-blue-500 bg-white my-2 py-2 px-4 rounded-full shadow-xl text-base`}>Sobre</button>
                <button onClick={() => mostrarDescricao("localizacao")} className={`w-[80%] md:w-auto font-medium active:shadow-none hover:text-white hover:bg-blue-500 text-blue-500 bg-white my-2 py-2 px-4 rounded-full shadow-xl text-base`}>Localização</button>
                <button onClick={() => mostrarDescricao("conheca")} className={`w-[80%] md:w-auto font-medium active:shadow-none hover:text-white hover:bg-blue-500 text-blue-500 bg-white my-2 py-2 px-4 rounded-full shadow-xl text-base`}>Conheça a Universo</button>
            </div>
            <div className={``}>
                <div className={`${activeSection == "sobre" ? "flex" : "hidden"} p-2 flex justify-center items-center`}>
                    <p className="text-center font-medium">O curso de Odontologia tem como fundamentação as atuais necessidades sociais, os avanços humanísticos, científicos e tecnológicos. Preconiza recentes recomendações dos órgãos nacionais e internacionais de saúde dos núcleos e associações de ensino odontológico e atua segundo estas. O curso tem uma estruturação curricular e um projeto didático-pedagógico desenvolvido em dois núcleos: o Núcleo Profissional de Saúde com Formação Humanística e o Núcleo Odontológico.</p>
                </div>
                <div className={`${activeSection == "localizacao" ? "flex" : "hidden"} flex justify-center items-center`}>
                    <iframe className="rounded-b-xl w-[100%] h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1634.5806958963828!2d-38.4740161078204!3d-12.990391910875326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b47bf14dcdd%3A0x2750cc44b55f2a9c!2sUniverso%20Universidade%20Salgado%20de%20Oliveira%2C%20Universo%20Salvador!5e0!3m2!1spt-BR!2sbr!4v1686353731361!5m2!1spt-BR!2sbr" width="auto" height="auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={`${activeSection == "conheca" ? "flex" : "hidden"} flex justify-center items-center`}>
                    <iframe className="rounded-b-xl w-[100%] h-[300px]" src="https://www.google.com/maps/embed?pb=!4v1686354031560!6m8!1m7!1s7ZC-5Mfy0cLkjkneH-cb_w!2m2!1d-12.99091461682069!2d-38.47377564015279!3f96.01900287863124!4f9.077255736359064!5f0.7820865974627469" width="auto" height="auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
    <div className={`flex flex-col p-4 border md:w-[40%] w-[90%] rounded-xl bg-white`}>
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
        <div className="flex flex-row justify-between items-center text-lg  font-semibold">
            <p>Economia Total: </p>
            <p>R$ -84.480,00</p>
        </div>
        <div className="flex justify-center items-center">
            <hr className="w-[95%] mt-6"/>
        </div>
        <div className="mt-6 mb-4 flex justify-center items-center">
            <Link href="/finalizar/finalizar" className="w-[250px] h-[55px] flex flex-row border p-4 text-xl font-bold text-white bg-blue-400 rounded-xl hover:underline hover:bg-blue-500 active:bg-blue-600 justify-center items-center">
                <IconCash className={`mr-2`}/>
                <p>Garantir Esta Bolsa</p>
            </Link>
        </div> 
    </div>
</div>
<Footer/>
<BotaoWhatsapp/>
</MenuNavegacao>
)
}