import '@/styles/globals.css'
import Header from './components/header'
import { usePathname } from 'next/navigation'
export default function App({ Component, pageProps }) {
  const pathname = usePathname()
  
  return(
  <>
  <Header pathname={pathname} />
  <Component {...pageProps} />
  </> 

  )
}
