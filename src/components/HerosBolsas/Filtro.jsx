export default function Filtro(props){
return(
<div className=" flex-row w-full md:p-auto py-5 min-h-[100px] rounded-b-xl flex justify-between items-center">
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-around w-[100%]">
        {props.children}
    </div>
</div>
)
}