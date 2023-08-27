import Image from "next/image";

export default function Parceiro(props) {
  
  return (
    <div className="flex justify-center bg-white h-[200px] rounded-xl shadow-md p-3  flex-col  items-center">
      <div className="min-h-[160px] flex justify-center items-center">
        <Image src={props.URLescudo} alt="Escudo" width={150} height={150}/>
      </div>
    </div>
  );
}