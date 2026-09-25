import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Input from '../../Component/Input';
import AddImages from '../../Component/AddImages';
import axios from 'axios';
import Loading from '../../Component/Loading';

const AddSkills = ({ setAdd }) => {
    const [resetKey, setResetKey] = useState(0);
    const [media, setMedia] = useState({
        url: "",
        mediaType: ""
    });
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        shouldUnregister: true
    })

    const submitForm = (data) => {
        setLoading(true)
        const appendSkill = new FormData()
        Object.keys(data).forEach((key) => {
            appendSkill.append(key, data[key]);
        });

        appendSkill.append('skillImages', media.url)

        let config = {
            withCredentials: true
        };
        config.headers = {
            "Content-Type": "application/json"
        };

        axios.post(`http://localhost:3000/skill`, appendSkill, config)
            .then((r) => {
                console.log(r);
                reset()
                setResetKey(prev => prev + 1);
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                setLoading(false);
            });
    }
    return (<>
        {loading && (<Loading text='Add Skill...' />)}
        <div
            onClick={() => setAdd(false)}
            className="
                            fixed inset-0 z-50
                            flex items-center justify-center
                            bg-black/40 backdrop-blur-sm
                            p-4
                        "
        >
            {/* Modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="
                                relative
                                w-full max-w-md
                                rounded-2xl
                                border border-white/10
                                bg-[#0b0b15]/95
                                p-6
                                shadow-[0_0_40px_rgba(139,92,246,0.25)]
                            "
            >

                {/* Close Button */}
                <button
                    type="button"
                    onClick={() => setAdd(false)}
                    className="
                                        absolute right-4 top-4
                                        flex h-8 w-8
                                        items-center justify-center
                                        rounded-full
                                        bg-white/10
                                        text-white/70
                                        transition
                                        hover:bg-red-500/20
                                        hover:text-red-400
                                    "
                >
                    ✕
                </button>

                {/* Heading */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white">
                        Add New Skill
                    </h2>

                    <p className="mt-1 text-sm text-white/50">
                        Add a skill to your portfolio
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(submitForm)}
                    className="space-y-5"
                >

                    {/* Skill Name */}
                    <div>
                        <Input
                            label="Skill Title"
                            type="text"
                            placeholder="Enter skill name"
                            {...register("skillTitle")}
                        />
                    </div>

                    {/* Skill Image */}
                    <div>
                        <label className='text-white text-sm my-2'>Skill Image</label>
                        < AddImages
                            key={resetKey}
                            onDataChange={setMedia}
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="
                    w-full
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-violet-600
                    py-3
                    font-semibold
                    text-white
                    transition
                    duration-200
                    hover:scale-[1.02]
                    hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
                    active:scale-[0.98]
                "
                    >
                        Add Skill
                    </button>

                </form>
            </div>
        </div>
    </>)
}

export default AddSkills
