import React, { useState, useEffect } from 'react'
import Navbar from '../../Component/Navbar'
import { useAuth } from '../../context/AuthContext'
import axios from 'axios'
import AddSkills from './AddSkills'
import Loading from '../../Component/Loading'

const SkillPage = () => {
    const { isAdmin } = useAuth();
    const [Add, setAdd] = useState(false)
    const [AllSkill, setAllSkill] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const data = () => {
            setLoading(true)
            let config = {
                withCredentials: true
            };
            config.headers = {
                "Content-Type": "application/json"
            };
            axios.get(`http://localhost:3000/skill/allskill`, config)
                .then((r) => {
                    setAllSkill(r.data.data)
                    
                }).catch((err) => {
                    console.log(err);
                }).finally(() => {
                    setLoading(false);
                });
        }
        data()
    }, [])

    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this skill?"
        );
        if (!confirmDelete) {
            return;
        }
        let config = {
            withCredentials: true
        };
        config.headers = {
            "Content-Type": "application/json"
        };
        axios.delete(`http://localhost:3000/skill/delete/${id}`, config)
            .then((r) => {
                console.log(r);
                setAllSkill(prev =>
                    prev.filter(item => item._id !== id)
                );
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            {loading && (<Loading text='Loading Skills...' />)}
            <Navbar />
            <section className='h-[90vh] w-full bg-linear-to-tl from-violet-700 via-[#0b0b15] to-[#43335e]'>
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
                <h1 className='text-center font-bold text-3xl py-3'>
                    <span className='text-yellow-300'>My</span>
                    <span className='text-red-500'> Skills</span>
                </h1>
                <p className=' text-white text-center text-xl opacity-50 font-semibold'>Technologies I use to build modern, responsive and scalable web applications.</p>
                <main className={`mt-4 ${isAdmin ? 'md:h-[68vh]' : 'md:h-[73vh]'} h-[70vh] overflow-y-scroll scrollbar-hide p-3 md:px-15 grid md:grid-cols-8 grid-cols-3 place-items-center gap-5 `}>
                    {AllSkill.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`
                                    w-28 
                                    rounded-2xl
                                    border border-violet-500/30
                                    bg-white/5
                                    backdrop-blur-md
                                    flex flex-col 
                                    justify-center items-center
                                   
                                    hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                                    ${isAdmin ?
                                        'h-36 gap-2'
                                        : 'h-28 p-3 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 gap-2'}
                                    `}>
                                <img src={item.skillImages} className=' bg-white/45 w-18 h-18 rounded-2xl' />
                                <h2 className='text-white font-semibold text-sm'>{item.skillTitle}</h2>
                                {isAdmin &&
                                    <div
                                        onClick={() => handleDelete(item._id)}
                                        className='cursor-pointer text-xl'>
                                        🗑️
                                    </div>}
                            </div>

                        )
                    })}

                </main>
                {isAdmin && <div
                    className="text-white w-full flex justify-end pr-5"
                >
                    <div
                        onClick={() => setAdd(!Add)}
                        className="cursor-pointer w-fit mt-2 px-3 py-1 bg-blue-500 font-semibold rounded-xl">
                        Add Skill
                    </div>
                </div>}

            </section>
            {Add &&
                <AddSkills setAdd={setAdd} />
            }
        </>
    )
}

export default SkillPage
