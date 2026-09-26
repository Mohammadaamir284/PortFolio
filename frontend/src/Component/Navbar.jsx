import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../context/AuthContext.jsx";
import axios from 'axios';

const Navbar = () => {
    const { isAdmin, port, setIsAdmin } = useAuth();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    const handleLogout = async () => {
        const result = confirm("Are you sure you want to LogOut Admin");

        if (!result) {
            return
        } try {
            await axios.post(
                `${port}/admin/logout`,
                {},
                { withCredentials: true }
            );
            setIsAdmin(false);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav className="relative w-full h-[10vh] flex items-center justify-between px-5
                        bg-linear-to-tl from-violet-700 via-[#0b0b15] to-[#43335e]">

            {/* Logo */}
            <Link
                to="/"
                className="text-2xl font-bold bg-gradient-to-r from-violet-500 via-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer"
            >
                MY.DEVSPACE
            </Link>

            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center gap-7 text-xl font-semibold text-white">
                <Link to="/">Home</Link>
                <Link to="/project">Project</Link>
                <Link to="/skill">Skill</Link>
                <Link to="/about">About</Link>
                {isAdmin && <Link to="/addproject">Add_New_Project</Link>}

            </div>

            <div className={`hidden md:flex items-center gap-7 text-xl px-3 rounded-2xl bg-gradient-to-r
                               ${isAdmin ? 'from-orange-500 to-red-700' :
                    ' from-emerald-500 to-violet-600'}
                                py-2 font-semibold text-white
                                transition hover:scale-[1.02]
                                hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] cursor-pointer`}>
                {!isAdmin ? (
                    <Link to="/contact">Contact</Link>
                ) : (

                    <div onClick={handleLogout}>
                        Logout
                    </div>
                )}
            </div>


            <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-white text-3xl"
            >
                ☰
            </button>


            {open && (
                <div className="
                    absolute
                    top-full
                    right-4
                    mt-2
                    w-48
                    rounded-xl
                    bg-[#0b0b15]
                    border border-violet-500/40
                    shadow-lg
                    p-3
                    flex
                    flex-col
                    gap-2
                    z-50
                    text-white
                ">

                    <Link
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 rounded-lg hover:bg-violet-600/30"
                        to="/"
                    >
                        Home
                    </Link>

                    <Link
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 rounded-lg hover:bg-violet-600/30"
                        to="/project"
                    >
                        Project
                    </Link>

                    <Link
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 rounded-lg hover:bg-violet-600/30"
                        to="/skill"
                    >
                        Skill
                    </Link>

                    <Link
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 rounded-lg hover:bg-violet-600/30"
                        to="/about"
                    >
                        About
                    </Link>

                    {!isAdmin ? (
                        <Link
                            onClick={() => setOpen(false)}
                            className="px-3 py-2 rounded-lg hover:bg-violet-600/30"
                            to="/contact"
                        >
                            Contact
                        </Link>
                    ) : (
                        <Link
                            onClick={() => setOpen(false)}
                            className="px-3 py-2 rounded-lg hover:bg-violet-600/30"
                            to="/addproject"
                        >
                            Add New Project
                        </Link>
                    )}

                </div>
            )}

        </nav>
    )
}

export default Navbar