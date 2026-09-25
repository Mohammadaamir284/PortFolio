import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";


import Input from '../../Component/Input';
import Loading from '../../Component/Loading';

const AdminLogin = () => {
    const navigate = useNavigate()
    const { setIsAdmin, } = useAuth();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        shouldUnregister: true
    })

    const submitForm = (i) => {
        setLoading(true)
        let config = {
            withCredentials: true
        };
        config.headers = {
            "Content-Type": "application/json"
        };

        axios.post(`http://localhost:3000/admin/login`, i, config)
            .then((r) => {
                console.log(r);
                toast.success(r.data.message);
                setTimeout(() => {
                    setIsAdmin(true)
                    navigate("/");
                }, 2000);
            }).catch((err) => {
                console.log(err);
                toast.error("Login failed");
                setLoading(false);
            });

    }
    return (
        <>

            {loading && (<Loading text='Logging...' />)}
            <div className="min-h-screen flex items-center justify-center
                bg-gradient-to-br from-[#0f0c29] via-[#1a1338] to-[#2a1458]
                px-4">

                <div className="w-full max-w-md rounded-3xl
                  border border-violet-500/30
                  bg-white/5 backdrop-blur-xl
                  p-8 shadow-2xl">

                    <div className="text-center mb-8">
                        <div className="text-4xl mb-3">🔐</div>

                        <h1 className="text-3xl font-bold text-white">
                            Admin Access
                        </h1>

                        <p className="mt-2 text-gray-400">
                            Manage your portfolio
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(submitForm)} className="space-y-5">

                        <div>
                            <Input
                                label="Admin Key"
                                type="text"
                                placeholder="Enter admin key"
                                {...register('adminKey')}
                            />
                        </div>

                        <div>
                            <Input
                                label="Password"
                                type="password"
                                placeholder="Enter password"
                                {...register('adminPassword')}
                            />
                        </div>

                        <input
                            type="submit"
                            value='Submit'
                            className="w-full rounded-xl bg-gradient-to-r
                                from-cyan-500 to-violet-600
                                py-3 font-semibold text-white
                                transition hover:scale-[1.02]
                                hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                        />

                    </form>

                    <p className="mt-6 text-center text-xs text-gray-500">
                        🔐 Secure Admin Access
                    </p>

                </div>
            </div>
        </>
    )
}

export default AdminLogin
