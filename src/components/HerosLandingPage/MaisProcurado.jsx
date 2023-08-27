import Image from "next/image"
export default function MaisProcurado(props) {
    return(
        <>
        {/*url, width, nomeDoCurso, precoCheio, porcentagemDesconto, valorComDesconto, salarioMedio*/}
        <div className="rounded-t-lg mx-0 px-0 mt-0 pt-0 mb-1 w-[250px]">
            <Image alt="" src={props.url} width={250} className="rounded-t-lg h-[170px]"/>
            <div className="text-2xl font-medium h-[35px]">{props.nome}</div>
        </div>
        </>
    )
}