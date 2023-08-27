import whatsapp from '@/assets/img/whatsappLogo.png'
import Image from 'next/image'
import Link from 'next/link'
export default function BotaoWhatsapp() {
    return(
        <Link href='https://api.whatsapp.com/send?phone=5571992592363&text=Ol%C3%A1!%20Cheguei%20aqui%20pelo%20site%20do%20%22Mais%20Solid%C3%A1rio%22%20e%20tenho%20interesse%20em%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20bolsas%20de%20estudo%20dispon%C3%ADveis' className='fixed right-8 bottom-5 z-10'>
          <Image src={whatsapp} width={70} height={70} alt='Logo Whatsapp'/>
        </Link>
    )
}