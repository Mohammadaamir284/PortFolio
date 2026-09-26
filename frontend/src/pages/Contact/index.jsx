import React from 'react'
import Navbar from '../../Component/Navbar'
import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <section className='h-[90vh] overflow-y-scroll scrollbar-hide w-full bg-linear-to-tl from-violet-700 via-[#0b0b15] to-[#43335e] text-white'>
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <main className='h-[90vh] md:px-[15vw] grid md:grid-cols-2 gaid-col-1 md:gap-5 gap-10 place-items-center p-4 md:overflow-hidden overflow-y-scroll'>
          <div className='md:w-[30vw] w-[80vw] grid gap-5'>
            <h1 className='capitalize md:text-6xl text-3xl font-bold  text-[#5d4eb1]'>email us a digital note</h1>

            <div className='  rounded-full h-1 bg-[#982596c0] md:w-1/2'></div>

            <p className='capitalize font-semibold opacity-75'>we are here to answer any question you may have reach out to us anytime and let's building something extraodinary together. <h4 className='font-bold'>Contact Us</h4>
            </p>

            <div className='  rounded-full h-1 bg-[#982596c0] md:w-1/2'></div>

            <div className="flex items-center gap-4">
              <p className="text-gray-400">Email :</p>
              <Link
                className="text-white hover:text-cyan-400"
              >
               aamirmohammad2285@gmail.com
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-gray-400">Phone No. :</p>
              <a
                className="text-white hover:text-cyan-400"
              >
                 +91 9990651131
              </a>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-gray-400">GITHUB :</p>
              <Link
              to={'https://github.com/Mohammadaamir284'}
               target='_blank'
                className="text-white hover:text-cyan-400"
              >
                 GitHub
              </Link>
            </div>
            
          </div>

          <div className='p-3 bg-[#4b36c760] md:w-[30vw] w-[80vw]  rounded-2xl'>
            <form action="" className='grid gap-2'>
              <label className='font-semibold text-lg' >Name</label>
              <input
                className='w-full outline-none p-1 h-10 rounded-lg px-2 bg-[#4c36c7a9]  text-[20px]' type="text"
                placeholder='Name'
              />
              <label
                className='font-semibold text-lg' >
                Email
              </label>
              <input
                className='w-full outline-none p-1 h-10 rounded-lg px-2 bg-[#4c36c7a9]  text-[20px]' type="text"
                placeholder='Email'
              />
              <label className='font-semibold text-lg' >Location</label>
              <input
                className='w-full outline-none p-1 h-10 rounded-lg px-2 bg-[#4c36c7a9]  text-[20px]' type="text"
                placeholder='Location'
              />

              <label className='font-semibold text-lg' >Message</label>

              <textarea
                className='w-full outline-none p-1 h-20 rounded-lg px-2 bg-[#4c36c7a9]  text-[20px]' type="text"
                placeholder='Type The Message Here'
                name="" id=""></textarea>

              <input
                className='bg-blue-600 h-10 rounded-lg text-[20px] font-semibold '
                type='submit'
                value='Submit'
              />
            </form>
          </div>


        </main>
      </section>
    </>
  )
}

export default ContactPage
