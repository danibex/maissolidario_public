export default function ItemFiltro(props) {
return(
<div className="flex flex-col justify-center items-center w-full my-2">
    <p className="mb-2 text-lg font-semibold">{props.titulo}</p>
    <select onChange={props.onChange} disabled={props.disabled} name={props.selectNome} className="md:w-[80%] w-[60%] h-[35px] rounded-2xl text-center">
        {props.children}
    </select>
</div>
)
}