import Image from 'next/image';
import Liink from 'next/link';
import logo from '../../assets/img/logomaisnovo.png';
import BotaoMenu from './BotaoMenu';
import { useContext, useState } from 'react';
import {
  IconNews,
  IconCertificate,
  IconSchool,
  IconUser,
  IconUserPlus,
  IconUserCircle,
  IconMenu2,
  IconX,
  IconChevronDown,
  IconBuil,
  IconHome2,
  IconBuildingBank,
  IconHeadset,
  IconUsersGroup,
  IconMedal2
} from '@tabler/icons-react';
import BotaoMenuBolsas from './BotaoMenuBolsas';
import BotaoMenuUsuario from './BotaoMenuUsuario';
import { AutenticacaoContext } from '@/contexts/AuthGoogle';
import { Link, Element } from 'react-scroll';
export default function MenuNavegacao(props) {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div className={props.className}>
      <div className={`
        flex md:flex-row flex-col justify-between items-center p-4 border-b-2 border-green-100 shadow-lg
      `}>
        <div className='flex flex-row justify-between items-center w-[100%] md:w-auto'>
          <Liink className='ml-2' href="/"><Image alt="" width={150} height={100} src="/logo.png" /></Liink>
          <div className='md:hidden flex mr-5'>
            <button onClick={() => { toggleMenu() }}>{toggle ? <IconX size={40} /> : <IconMenu2 size={40} />}</button>
          </div>
        </div>
        <div className={`${toggle ? "flex" : "hidden"}  flex-col md:flex md:flex-row justify-center items-center`}>
          <div className='w-[100%] flex flex-col md:flex-row justify-center items-center'>
                {/**<Liink className='w-[100%] md:w-auto flex justify-center items-center' href="/"><BotaoMenu><IconHome2 className='mr-1' />Início</BotaoMenu></Liink> */}
                <Link to="cursos" smooth={true} duration={500} className='w-[100%] md:w-auto flex justify-center items-center' href="#parceiros"><BotaoMenu>
                <IconSchool className='mr-1' />Principais Cursos</BotaoMenu></Link>
                <Link to="formulario" smooth={true} duration={500} className='w-[100%] md:w-auto flex justify-center items-center' href="#parceiros"><BotaoMenu>
                <IconHeadset className='mr-1' />Solicitar Minha Bolsa</BotaoMenu></Link>
                <Link to="parceiros" smooth={true} duration={500} className='w-[100%] md:w-auto flex justify-center items-center' href="#parceiros"><BotaoMenu>
                <IconBuildingBank className='mr-1' />Parceiros</BotaoMenu></Link>
                <Link to="depoimentos" smooth={true} duration={500} className='w-[100%] md:w-auto flex justify-center items-center' href="#parceiros"><BotaoMenu>
                <IconUsersGroup className='mr-1' />Depoimentos</BotaoMenu></Link>
                <Link to="selos" smooth={true} duration={500} className='w-[100%] md:w-auto flex justify-center items-center' href="#parceiros"><BotaoMenu>
                <IconMedal2 className='mr-1' />Selos</BotaoMenu></Link>
          </div>
        </div>
      </div>

      <div>
        {props.children}
      </div>
    </div>
  );
}
