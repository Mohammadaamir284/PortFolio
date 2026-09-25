import React, { useState, useEffect } from 'react'
import Navbar from '../../Component/Navbar'
import { Link } from 'react-router-dom'
import Loading from '../../Component/Loading'
import { useAuth } from '../../context/AuthContext'
import axios from 'axios'
import toast from 'react-hot-toast'

const ProjectPage = () => {
    const [GetProject, setGetProject] = useState([])
    const [loading, setLoading] = useState(false);
    const { isAdmin } = useAuth()
    console.log(isAdmin);


    useEffect(() => {
        const ProjectData = async () => {
            setLoading(true)
            try {
                const res = await fetch(`http://localhost:3000/project/allproject`)
                const result = await res.json()
                setGetProject(result.data)

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        ProjectData()
    }, [])

    const handleDelete = (id) => { 
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this Project?"
        );
        if (!confirmDelete) {
            return;
        }

        axios.delete(`http://localhost:3000/project/${id}`)
        .then((r)=>{
            console.log(r);
             toast.success(r.data.message);
             setGetProject(data => 
                data.filter(item => item._id !== id)
             )
        }).catch((err)=>{
            toast.success(err.data.message);
        })
        
     }

    const uniqueCategorire = [...new Set(GetProject.map((item) => item.category))]
    return (
        <>
            {loading && (<Loading text='Loading Projects...' />)}

            <Navbar />
            <section className='h-[] w-full bg-linear-to-tl from-violet-700 via-[#0b0b15] to-[#43335e]'>
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

                <main className=' h-[90vh] overflow-x-scroll scrollbar-hide'>
                    {uniqueCategorire.map((category, index) => {
                        let filtered = GetProject.filter((item) => item.category === category);

                        return (<div key={index} className='md:px-10 md:py-5 p-3'>
                            <label className='text-white font-bold text-2xl capitalize'>{category}</label>
                            <section className='border-2 w-[95vw]  rounded-xl p-3 border-cyan-500/56 mt-3 flex gap-3 overflow-x-scroll scrollbar-hide'>
                                {filtered.map((item, index) => {
                                    return (
                                        <div key={index}
                                            className="flex flex-col justify-items-end md:w-72 w-60 rounded-2xl border border-violet-500/40
                                            bg-white/5 backdrop-blur-md p-3
                                            cursor-pointer transition duration-300
                                           shrink-0 group hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                                            <img
                                                src={item.imageUrl}
                                                className="w-full h-44 object-cover rounded-xl
                                               group-hover:scale-105 duration-200
                                               group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] shrink-0"
                                            />
                                            <h3 className="mt-4 text-xl font-bold text-white">
                                                {item.title}
                                            </h3>
                                            <p className="mt-2 text-gray-400 text-sm line-clamp-4">
                                                {item.description}
                                            </p>
                                            <div className='mt-4 flex items-center justify-between'>
                                                <Link
                                                    to={item._id}
                                                    className="  text-cyan-400">
                                                    View More Details →
                                                </Link>
                                                {isAdmin && <div
                                                onClick={()=> handleDelete(item._id)}
                                                className='text-xl'>
                                                    🗑
                                                </div>}
                                            </div>
                                        </div>
                                    )
                                })}
                            </section>

                        </div>)
                    })}
                </main>

            </section>
        </>
    )
}
export default ProjectPage