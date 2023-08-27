export default function BotaoMenu(props) {
    return(
        <button className={`${props.className} md:w-auto w-[50%] my-2 md:my-0 bg-[#6BCA91] hover:bg-[#458A64] active:bg-green-900 p-2 rounded-lg text-white font-medium mx-1 flex flex-row justify-center items-center`}>{props.children}</button>
    )
}