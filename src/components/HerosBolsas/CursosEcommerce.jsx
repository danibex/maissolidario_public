export default function CursosEcommerce(props){
return(
<div className="
w-full justify-center justify-items-center bg-slate-100 p-4 
grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 pt-10">
    {props.children}
</div>
)
}