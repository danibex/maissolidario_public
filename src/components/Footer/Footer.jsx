import Link from "next/link"
export default function Footer() {
return(
    <div className="bg-[#189ED7] w-[100%] h-auto p-4 shadow-lg text-slate-100 flex justify-center items-center flex-col">
        <div className="flex md:flex-row flex-col justify-around items-center w-full md:w-[80%]">
            <div className="h-[200px] flex flex-col justify-center items-center">
                <h2 className="mb-2 text-xl font-bold">Contatos</h2>
                <div className="flex flex-col justify-center items-center">
                    <p>contato@maissolidario.com.br</p>
                    <p>maissolidarioadm@gmail.com</p>
                    <p>(71) 9 9259-2363</p>
                    <p>(71) 9 8761-2190</p>
                </div>
            </div>
            <div className="h-[150px] flex flex-col justify-center items-center">
                <h2 className="mb-2 text-xl font-bold">Bolsas de Estudo</h2>
                <div className="flex flex-col justify-center items-center">
                <p>Graduação</p>
                <p>Pós-Graduação</p>
                <p>Técnico</p>
                <p>Colégio</p>
                </div> 
            </div>
            {/* 
            <div className="h-[150px] flex flex-col justify-center items-center">
                <h2 className="mb-2 text-xl font-bold">Links Úteis</h2>
                <div className="flex flex-col justify-center items-center">
                <Link href="/" className="hover:underline hover:text-slate-200 active:text-slate-400">Atendimento</Link>
                <Link href="/" className="hover:underline hover:text-slate-200 active:text-slate-400">Blog</Link>
                </div>
            </div>
            */}
        </div>
        <div className="flex justify-center items-center text-center">
            <p>© 2023 Todos os direitos reservados. Mais Solidário Bolsas de Estudo - CNPJ: 25.230.193/0001-06</p>
        </div>
    </div>
)
}