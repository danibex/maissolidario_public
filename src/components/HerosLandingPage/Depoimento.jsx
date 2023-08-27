import Image from "next/image"
export default function Depoimento(props) {
return(
<div className={`${props.className} w-[280px] h-[340px] p-3 rounded-xl text-black`}>
    <div className="flex flex-row items-center ">
        <div className="w-[65px] p-0 h-[65px] bg-slate-500 rounded-full border flex justify-center items-center text-center">
        <Image className="rounded-full" src={props.src} alt="Imagem de perfil de ex-aluno"/>
        </div>
        <div className="ml-2">
            <h2 className="text-xl font-bold">{props.nome}</h2>
            <h3 className="text-base">{props.profissao}</h3>
        </div>
    </div>
    <div className="p-2 flex justify-center items-center">
        <p>{props.depoimento}</p>
    </div>
</div>
)
}