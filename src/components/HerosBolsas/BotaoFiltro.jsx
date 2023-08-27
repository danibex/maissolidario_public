import Link from "next/link";
import style from "@/styles/botaoFiltro.module.css"
export default function BotaoFiltro(props) {
    return (
      <Link href={props.href}
        className={`
          w-[80%]
          hover:bg-blue-400 hover:text-white hover:underline 
          active:shadow-none text-green-700 flex justify-center 
          items-center whitespace-nowrap md:w-[200px] font-semibold 
          text-xl py-2 px-20 bg-white my-2 rounded-3xl shadow-xl
          ${props.active ? `${style.activate} text-white shadow-none after:shadow-none` : ""}
        `}
        onClick={props.onClick}
      >
        {props.children}
      </Link>
    );
  }
  