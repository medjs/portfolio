import HeaderHero from '@/pages/components/headerHero'
import Image from 'next/image'

export default function Home () {
  return (
    <main>
      <div className='w-full h-screen'>
        <HeaderHero />
        {/* <h1 className="text-3xl font-semibold transform transition-all hover:scale-200 hover:rotate-12 hover:translate-y-40 ">My Portfolio</h1> */}
      </div>
    </main>
  )
}
