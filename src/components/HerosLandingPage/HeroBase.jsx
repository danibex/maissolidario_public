export default function Hero1(props) {
return(
    <div className={`${props.className ? props.className : ""} md:w-1/2 w-[90%] flex justify-center items-center h-auto mb-5`}>
        {props.children} 
    </div> 
)
}