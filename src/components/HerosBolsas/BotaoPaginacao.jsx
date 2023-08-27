export default function BotaoPaginacao(props) {
    return(
        <button disabled={props.disabled} className={`${props.className} flex flex-row justify-center items-center m-3 border border-blue-500 text-blue-500 rounded-full ${props.disabled ? "opacity-50" : "hover:bg-blue-500 hover:text-white hover:underline active:shadow-none"}  shadow-xl `}>{props.children}</button>
    )
}