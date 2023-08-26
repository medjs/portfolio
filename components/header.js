import Link from 'next/link'

export default function Header () {
  return (
    <nav className='w-full p-3'>
      <div className='sm:container mx-auto flex-wrap justify-center md:flex'>
        <div className='sm:w-full flex justify-center items-center md:w-1/2'>
          <h1 className='sm:w-full text-2xl p-3 justify-center font-semibold md:ml-12 text-left'>LOGO</h1>
        </div>
        <ul className='sm:w-full font-semibold flex justify-around p-2 list-none uppercase text-black md:w-1/2'>
          <Link href='/'>
            <li className='px-2 py-1 hover:bg-gray-100'>Home</li>
          </Link>
          <Link href='/projects'>
            <li className='px-2 py-1 hover:bg-gray-100'>Projects</li>
          </Link>
          <Link href='/about'>
            <li className='px-2 py-1 hover:bg-gray-100'>About me</li>
          </Link>
          <Link href='/contact'>
            <li className='px-2 py-1 hover:bg-gray-100'>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
