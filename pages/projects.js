import { projet } from '@/images'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
export default function Projects () {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='container  flex-col justify-center mx-auto my-16'>
      <div className='sm:flex flex-wrap justify-center'>
        {/* <div className='relative flex items-center w-96 h-96 bg-blue-100 '>
            <Image src={projet} alt='projet' className=" w-96 h-auto absolute z-0 left-0 transform transition-all hover:-translate-y-16" />
            <p className="absolute bottom-20 right-1/3 text-2xl text-white z-20 transform transition-all hover:translate-y-16">Live project</p>
        </div> */}
        <a
            
            href='http://google.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div
          className='relative flex items-center w-96 h-80 mx-auto bg-black'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={` w-full h-auto absolute z-10 inset-0 flex items-center justify-center transform transition-all ${
              isHovered ? '-translate-y-8' : 'translate-y-0'
            }`}
          >
            <Image src={projet} alt='projet' className={`w-full h-auto`} />
          </div>

          
            <p className={`absolute inset-0  mt-10 font-bold flex items-center justify-center text-3xl text-green-400 z-0 transform transition-all ${
              isHovered ? 'translate-y-24 z-20' : 'translate-y-0'
            }`} style={{ animation: 'signalEffect 1.5s infinite' }}>

            Go Live
            </p>
          

          <p
            className={`absolute inset-0 font-semibold flex items-start justify-center text-shadow text-2xl text-white  z-20 transform transition-all`}
          >
            AirCoolPalace
          </p>
        </div>
        </a>

        <div className=' sm:w-fllh-auto flex items-center text-justify px-2 pb-2 z-10 md:w-96 lg:p-5'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error
            provident autem ducimus cum adipisci voluptate pariatur blanditiis
            maiores. Explicabo aut expedita autem repudiandae fugit laudantium
            reprehenderit, nisi cumque ut.
          </p>
        </div>
      </div>
      
      
    </div>
  )
}
