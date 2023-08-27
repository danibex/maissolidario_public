import '@/styles/globals.css'
import '@/styles/heroPrincipal.module.css'
import '@/styles/heroSobre.module.css'
import { AutenticacaoProvider } from '@/contexts/AuthGoogle'
import { CompraProvider } from '@/contexts/Compra'
export default function App({ Component, pageProps }) {
return (
  <AutenticacaoProvider>
    <CompraProvider>
      <Component {...pageProps} />
    </CompraProvider>
  </AutenticacaoProvider>
  )
}
