import Image from "next/image"
export default function Noticia(props) {
    return(
    <div className="px-0 mx-0 h-[400px] bg-slate-100 w-[250px]  justify-center flex flex-col rounded-lg pb-3 shadow-lg ">
    {/*url, width, nomeDoCurso, precoCheio, porcentagemDesconto, valorComDesconto, salarioMedio*/}
        <div className="rounded-md h-[40%] mx-0 mt-5 mb-1 flex justify-center items-center">
            <Image className="h-[90%]" src={props.src} alt="Principal notícia"/>
        </div>
        <div className="gap-2 p-3 h-[60%] flex flex-col justify-center items-start text-left">
            <h1 className="text-xl font-bold text-left w-[100%] h-[40%]">{props.titulo}</h1>
            <p className="w-[100%] h-[60%]">{props.resumoNoticia}<button className="text-blue-600 hover:underline">Ler tudo</button></p>
        </div>
    </div>
    )
}