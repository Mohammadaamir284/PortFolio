import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Component/Navbar'
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import webdevimage from "../../assets/webdevimage.png";

const WelcomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleAdminShortcut = (e) => {
            if (e.ctrlKey && e.shiftKey  && e.key.toLowerCase() === "o") {
                e.preventDefault();
                navigate("/admin/login");
            }
        };

        window.addEventListener("keydown", handleAdminShortcut);

        return () => {
            window.removeEventListener("keydown", handleAdminShortcut);
        };
    }, [navigate])

    return (
        <>
            <Navbar />
            <section className='h-[90vh] w-full bg-linear-to-tl from-violet-700 via-[#0b0b15] to-[#43335e]'>
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

                <main className='grid md:grid-cols-2 grid-cols-1 place-items-center  '>
                    <div className='md:h-full  md:pt-[10vh] pt-[5vh] pl-7'>
                        <div className='p-4 h-[50vh]  w-full'>
                            <div className='text-[12px] text-violet-700 border w-fit px-2 rounded-full text-center border-violet-600 mb-3'>WELCOME TO MY UNIVERSE</div>
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="wrap-break-word text-4xl  md:text-6xl max-[380px]:text-2xl font-bold bg-gradient-to-tl from-cyan-500  to-violet-900 bg-clip-text text-transparent pb-2"
                            >
                                <span className='text-white'>Hi,I'm</span>  Mohammad Aamir
                            </motion.h1>
                            <p className='text-white max-[380px]:text-lg  wrap-break-word pb-7 opacity-45 text-xl font-extralight'>
                                A passionate MERN Stack Developer who builds responsive, fast, and user-friendly web applications using React, Node.js, Express, MongoDB, and Tailwind CSS.
                            </p>


                            <TypeAnimation
                                sequence={[
                                    "MERN Stack Developer",
                                    1000,
                                    "Frontend Developer",
                                    1000,
                                    "React Developer",
                                    1000,
                                    "Node.js Developer",
                                    1000,
                                    "Backend Developer",
                                    1000,
                                    "Next.js Developer",
                                    1000,
                                ]}
                                wrapper="span"
                                repeat={Infinity}
                                className="md:text-4xl text-3xl max-[380px]:text-2xl font-semibold text-cyan-400 "
                            />
                            <div className='flex gap-6 items-center pt-7 text-white '>
                                <Link to={'https://github.com/Mohammadaamir284'} target='_blank' className='border-2 rounded-full px-2 py-1 bg-violet-800/20 border-violet-800 text-neutral-300 font-semibold'> GITHUB Profile </Link>
                                <Link to={'https://drive.google.com/file/d/1ia6-Tg3Tqz7TXs3KBnaoOXM1KkTFJP_H/view'}
                                target='_blank'
                                className='border-2 rounded-full px-2 py-1 bg-purple-800/20 border-purple-800 text-neutral-300 font-semibold'> View Resume </Link>
                            </div>

                        </div>
                    </div>

                    <div className='p-4 md:pt-[20vh]'>
                        <img src={webdevimage}
                            className='w-full md:w-[600px] max-[380px]:w-[300px] rounded-4xl'
                        />
                    </div>
                </main>

            </section>
        </>
    )
}

export default WelcomePage
