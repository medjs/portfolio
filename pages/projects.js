import { projet } from '@/images'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const data = [
  {
    id: '0',
    title: 'AirCoolPalace 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error provident autem ducimus cum adipisci voluptate pariatur blanditiis maiores. Explicabo aut expedita autem repudiandae fugit laudantium reprehenderit, nisi cumque ut.',
    image: projet,
    reverse: false
  },
  {
    id: '1',
    title: 'AirCoolPalace 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error provident autem ducimus cum adipisci voluptate pariatur blanditiis maiores. Explicabo aut expedita autem repudiandae fugit laudantium reprehenderit, nisi cumque ut.',
    image: projet,
    reverse: true
  },
  {
    id: '2',
    title: 'AirCoolPalace 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error provident autem ducimus cum adipisci voluptate pariatur blanditiis maiores. Explicabo aut expedita autem repudiandae fugit laudantium reprehenderit, nisi cumque ut.',
    image: projet,
    reverse: false
  },
  {
    id: '3',
    title: 'AirCoolPalace 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error provident autem ducimus cum adipisci voluptate pariatur blanditiis maiores. Explicabo aut expedita autem repudiandae fugit laudantium reprehenderit, nisi cumque ut.',
    image: projet,
    reverse: true
  }
]

export default function Projects () {
  const [hoverStates, setHoverStates] = useState(Array(data.length).fill(false))
  const handleMouseEnter = index => {
    // Update the hover state for the specific index
    setHoverStates(prevStates => {
      const newStates = [...prevStates]
      newStates[index] = true
      return newStates
    })
  }

  const handleMouseLeave = index => {
    // Update the hover state for the specific index
    setHoverStates(prevStates => {
      const newStates = [...prevStates]
      newStates[index] = false
      return newStates
    })
  }

  return (
    <div className='container flex-col justify-center mx-auto my-16'>
      {data.length &&
        data.map((res, i) => (
          <div
            key={i}
            className={`sm:flex flex-wrap justify-center items-center mb-12 border rounded-md p-2 md:w-full ${
              res.reverse && 'flex-row-reverse'
            } lg:w-3/4 mx-auto justify-around`}
          >
            <a
              href='http://google.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div
                className='relative flex items-center w-80 h-80 mx-auto'
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                <div
                  className={` w-full h-auto absolute z-10 inset-0 flex items-center justify-center transform transition-all p-2 ${
                    hoverStates[i] ? '-translate-y-8' : 'translate-y-0'
                  }`}
                >
                  <Image
                    src={res.image}
                    alt='projet'
                    className={`w-full h-auto`}
                  />
                </div>

                <p
                  className={`absolute inset-0  mt-10 font-bold flex items-center justify-center text-3xl text-green-400 z-0 transform transition-all ${
                    hoverStates[i] ? 'translate-y-24 z-20' : 'translate-y-0'
                  }`}
                  style={{ animation: 'signalEffect 1.5s infinite' }}
                >
                  Go Live
                </p>
              </div>
            </a>

            <div className=' sm:w-fllh-auto flex-col items-center text-justify px-2 pb-2 z-10 md:w-96 lg:p-5'>
              <h1 className='text-center p-4 text-2xl font-semibold'>
                {res.title}
              </h1>
              <p>{res.description}</p>
            </div>
          </div>
        ))}
    </div>
  )
}
