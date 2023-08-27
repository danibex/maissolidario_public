import HeroBase from "./HeroBase"
import Image from "next/image"
import estudante from "@/assets/img/estudante.png"
import style from "@/styles/heroSobre.module.css"
export default function HeroSobre(props) {
return(
<div className={`w-full p-3 m-0 h-auto bg-[#189ED7]`}>
    <div className={`md:flex-row-reverse p-4 rounded-lg justify-center items-center flex flex-col w-full`}>
        <HeroBase className="m-2 text-center">
            <p className="text-3xl text-slate-100 font-semibold">O programa Mais Solidário Bolsas oferece bolsas de estudo para estudantes de baixa renda, permitindo que tenham acesso à educação de qualidade e oportunidades de desenvolvimento.</p>
        </HeroBase>
        <HeroBase className="m-2">  
            <Image src="/images/jovemComLivro.jpg" width={600} height={200} className="rounded-xl" alt="Estudante apontando para texto"/>
        </HeroBase>
    </div>
</div>
)
}