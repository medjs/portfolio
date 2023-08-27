import Link from 'next/link'

export default function Header ({ pathname }) {
  const pages = [
    {
      name: 'Home',
      target: '/'
    },
    {
      name: 'Projects',
      target: '/projects'
    },
    {
      name: 'About',
      target: '/about'
    },
    {
      name: 'Contact',
      target: '/contact'
    }
  ]

  return (
    <nav
      className={`relative top-0 w-full bg-transparent z-40 p-4 ${
        pathname !== '/' && 'shadow-sm'
      }`}
    >
      <div className='sm:container mx-auto flex-wrap justify-center md:flex'>
        <div className='sm:w-full flex justify-center items-center md:w-1/2'>
          <h1 className='sm:w-full text-2xl p-3 justify-center font-semibold md:ml-12 text-left'>
            LOGO
          </h1>
        </div>
        <ul
          className={`sm:w-full font-semibold flex justify-around py-2 list-none uppercase ${
            pathname === '/' && 'text-white'
          } md:w-1/2 `}
        >
          {pages.length && pages.map((res, i)=>(
            <Link key={i} href={res.target}>
              <li
                className={`px-2 py-1 hover:${
                  pathname === '/' ? ' bg-transparent' : 'bg-gray-100'
                }`}
              >
                {res.name}
              </li>
            </Link>
          )) }
        </ul>
      </div>
    </nav>
  )
}
