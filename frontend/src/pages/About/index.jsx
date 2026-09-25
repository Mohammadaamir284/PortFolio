import React from 'react'
import Navbar from '../../Component/Navbar'

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <section className='h-[90vh] overflow-y-scroll scrollbar-hide w-full bg-linear-to-tl from-violet-700 via-[#0b0b15] to-[#43335e] text-white'>
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
                <h1 className='text-center font-bold text-5xl py-3'>
                    <span className='text-blue-600'>About</span>
                    <span className='text-white'> Me</span>
                </h1>
                <p className=' text-white text-center text-2xl opacity-50 font-semibold my-4'>  Get to know me and my journey</p>

                <main className='py-5 grid grid-cols-1 place-items-center'>
                    <h2 className='text-3xl font-bold opacity-65 mb-4 text-violet-600'> Hello I'm Aamir</h2>
                    <p className='md:w-[70vw] px-4 text-center capitalize my-2 opacity-55 font-semibold md:text-xl'>a passionate MERN Stack Developer focused on building modern, responsive, and user-friendly web applications. I work with React, JavaScript, Node.js, Express.js, and MongoDB to create complete web solutions. I enjoy turning ideas into functional products and continuously improving my development skills through real-world projects.</p>

                    <section className='grid md:grid-cols-2 grid-cols-1 place-items-center gap-5 my-10 px-4'>
                        <div className="
                                    md:w-[30vw] h-28
                                    p-3
                                    rounded-2xl
                                    border border-violet-500/30
                                    bg-white/5
                                    backdrop-blur-md
                                    flex flex-col 
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:border-cyan-400
                                    hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                                      overflow-y-scroll
                                      scrollbar-hide
                                    ">
                            <span className='text-xl py-1'>⚛️ Frontend Development</span>
                            <p className='px-3 font-semibold opacity-55'>Building responsive interfaces with React,
                                JavaScript and Tailwind CSS.</p>
                        </div>

                        <div className="
                                    md:w-[30vw] h-28
                                    p-3
                                    rounded-2xl
                                    border border-violet-500/30
                                    bg-white/5
                                    backdrop-blur-md
                                    flex flex-col 
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:border-cyan-400
                                    hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                                      overflow-y-scroll
                                      scrollbar-hide
                                    ">
                            <span className='text-xl py-1'>⚙️ Backend Development</span>
                            <p className='px-3 font-semibold opacity-55'>Creating REST APIs using Node.js
                                and Express.js.</p>
                        </div>

                        <div className="
                                    md:w-[30vw] h-28
                                    p-3
                                    rounded-2xl
                                    border border-violet-500/30
                                    bg-white/5
                                    backdrop-blur-md
                                    flex flex-col 
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:border-cyan-400
                                    hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                                    overflow-y-scroll
                                    scrollbar-hide
                                    ">
                            <span className='text-xl py-1'>🍃 Database</span>
                            <p className='px-3 font-semibold opacity-55'>Working with MongoDB for storing
                                and managing application data.</p>
                        </div>

                        <div className="
                                    md:w-[30vw] h-28
                                    p-3
                                    rounded-2xl
                                    border border-violet-500/30
                                    bg-white/5
                                    backdrop-blur-md
                                    flex flex-col 
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:border-cyan-400
                                    hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                                      overflow-y-scroll
                                      scrollbar-hide
                                    ">
                            <span className='text-xl py-1'>🚀 Full Stack Applications</span>
                            <p className='px-3 font-semibold opacity-55'>Connecting frontend, backend and
                                database into complete applications.</p>
                        </div>
                    </section>
                    <div className='h-[30vh] border border-purple-600 px-2 py-4 md:w-1/2 text-center rounded-2xl grid place-items-center  bg-white/5 backdrop-blur-md mx-4'>
                        <h3 className='text-2xl text-blue-400 font-bold'>My Developer Journey in Short</h3>

                        <dir className='text-center md:text-lg text-sm md:w-[30vw] font-semibold opacity-55 '>
                            Started with HTML & CSS
                            <span className='text-gray-300 text-2xl'> → </span>
                            Learned JavaScript
                            <span className='text-gray-300 text-2xl'> → </span>
                            Moved to React
                            <span className='text-gray-300 text-2xl'> → </span>
                            Learned Node + Express
                            <span className='text-gray-300 text-2xl'> → </span>
                            MongoDB & REST APIs
                            <span className='text-gray-300 text-2xl'> → </span>
                            Building MERN Projects 🚀
                        </dir>

                    </div>

                    <div className='grid place-items-center my-12 px-4'>
                        <h2 className='text-3xl text-emerald-300'> What I'm Looking For</h2>

                        <p className='md:w-1/2 text-center py-3 font-semibold text-xl opacity-55'>I'm currently looking for an entry-level
                            Frontend / MERN Stack Developer opportunity
                            where I can contribute to real projects,
                            learn from experienced developers and
                            grow as a professional developer.</p>

                    </div>
                </main>
            </section>
        </>
    )
}

export default AboutPage
