import MenuNavegacao from '@/components/Menu/MenuNavegacao'
import HeroPrincipal from '@/components/HerosLandingPage/HeroPrincipal'
import HeroParceiros from '@/components/HerosLandingPage/HeroParceiros'
import HeroMaisProcurados from '@/components/HerosLandingPage/HeroMaisProcurados'
import PrincipaisNoticias from '@/components/HerosLandingPage/PrincipaisNoticias'
import HeroSobre from '../components/HerosLandingPage/HeroSobre'
import HeroDepoimentos from '../components/HerosLandingPage/HeroDepoimentos'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'
import BotaoWhatsapp from '@/components/BotaoWhatsapp'
import { Element } from 'react-scroll';
export default function Home() {
  return (
    <div className='h-full w-full'>
      <MenuNavegacao>
      <Head>
        <title>Mais Solidário</title>
      </Head>
        <HeroSobre/>
        <Element name="cursos" className="cursos">
          <HeroMaisProcurados/>
        </Element>
        <Element name="formulario" className="formulario">
          <HeroPrincipal/>
        </Element>
        <Element name="parceiros" className="parceiros">
          <HeroParceiros/>
        </Element>
        <Element name="depoimentos" className="depoimentos">
          <HeroDepoimentos/>
        </Element>
        <Element name="selos" className="selos">
          <PrincipaisNoticias/>
        </Element>
      <Footer/>
      <BotaoWhatsapp/>
      </MenuNavegacao>
    </div>

  )
}

/*
*/
