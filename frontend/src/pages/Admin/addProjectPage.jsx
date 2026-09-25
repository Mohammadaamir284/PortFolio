import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import AddInput from "../../Component/AddInput";
import AddImages from "../../Component/AddImages";
import Input from "../../Component/Input";
import Loading from "../../Component/Loading";

const AddProjectPage = () => {
    const [adminKeys, setAdminKeys] = useState([]);
    const [resetKey, setResetKey] = useState(0);
    const [media, setMedia] = useState({
        url: "",
        mediaType: "",
    });
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const submitForm = (data) => {
        setLoading(true)
        const projectData = new FormData();

        Object.keys(data).forEach((key) => {
            projectData.append(key, data[key]);
        });

        projectData.append("technologies", adminKeys);

        projectData.append("imageUrl", media.url);
        projectData.append("mediaType", media.mediaType);

        let config = {
            withCredentials: true
        };
        config.headers = {
            "Content-Type": "application/json"
        };

        axios.post(`http://localhost:3000/project`, projectData, config)
            .then((r) => {
                console.log(r);
                toast.success(r.data.message)
                reset();
                setAdminKeys([]);
                setMedia({
                    url: "",
                    mediaType: "",
                });
                setResetKey(prev => prev + 1);
            }).catch((err) => {
                console.log(err);
                toast.error("Try Again")

            }).finally(()=>{
                setLoading(false)
            })
    };

    return (<>
        {loading && (<Loading text='Add Project' />)}
        <div
            className="
        min-h-screen
        flex items-center justify-center
        bg-gradient-to-br from-[#0f0c29] via-[#1a1338] to-[#2a1458]
       
      "
        >
            <div
                className="
          w-full max-w-6xl
          rounded-3xl
          border border-violet-500/30
          bg-white/5
          backdrop-blur-xl
          p-6 sm:p-8
          shadow-2xl
        "
            >
                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-white font-bold text-3xl">
                        Add New Project
                    </h1>

                    <p className="text-gray-400 mt-2 text-sm">
                        Add your project details to your portfolio
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(submitForm)}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {/* Project Title */}
                    <div>
                        <Input
                            label="Title"
                            type="text"
                            placeholder="Enter Project Title"
                            {...register("title")}
                        />
                    </div>

                    {/* Project URL */}
                    <div>
                        <Input
                            label="Project Live URL"
                            type="url"
                            placeholder="https://your/Project/url"
                            {...register("liveUrl", {
                                pattern: {
                                    value: /^https?:\/\/.+/,
                                    message: "Enter a valid URL",
                                },
                            })}
                        />
                        {errors.url && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.url.message}
                            </p>
                        )}
                    </div>

                    {/* GitHub URL */}
                    <div>
                        <Input
                            label="GitHub URL"
                            type="url"
                            placeholder="https://github.com/username/repo"
                            {...register("githubUrl", {
                                pattern: {
                                    value: /^https?:\/\/.+/,
                                    message: "Enter a valid GitHub URL",
                                },
                            })}
                        />
                        {errors.githubUrl && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.githubUrl.message}
                            </p>
                        )}
                    </div>

                    {/* Category */}
                    <div>
                        <Input
                            label="Category"
                            type="text"
                            placeholder="Enter Project Category"
                            {...register("category")}
                        />
                    </div>

                    {/* Technologies */}
                    <div>
                        <label className="text-gray-300 text-sm">
                            Technologies
                        </label>

                        <div className="mt-2">

                            <AddInput
                                key={resetKey}
                                onDataChange={setAdminKeys} />
                        </div>
                    </div>

                    {/* Image */}
                    <div>
                        <label className="text-gray-300 text-sm">
                            Project Image
                        </label>

                        <div className="mt-2">
                            <AddImages
                                key={resetKey}
                                onDataChange={setMedia} />
                        </div>
                    </div>

                    {/* Status */}
                    <div>
                        <label className="text-gray-300 text-sm">
                            Status
                        </label>

                        <select
                            className="
                                    mt-2 w-full rounded-xl
                                    border border-violet-500/30
                                    bg-[#21183d]
                                    px-4 py-3
                                    text-white
                                    outline-none
                                    focus:border-cyan-400
              "
                            {...register("status", {
                                required: "Status is required",
                            })}
                        >
                            <option value="">Select Status</option>
                            <option value="Completed">Completed</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Coming Soon">Coming Soon</option>
                        </select>

                        {errors.status && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.status.message}
                            </p>
                        )}
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="text-gray-300 text-sm">
                            Description
                        </label>

                        <textarea
                            rows="5"
                            placeholder="Enter your project description..."
                            className="
                                        mt-2 w-full rounded-xl
                                        border border-violet-500/30
                                        bg-white/5
                                        px-4 py-3
                                        text-white
                                        placeholder:text-gray-500
                                        outline-none
                                        focus:border-cyan-400
                                        resize-none "

                            {...register("description", {
                                required: "Description is required",
                                minLength: {
                                    value: 20,
                                    message: "Description should be at least 20 characters",
                                },
                            })}
                        />

                        {errors.description && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.description.message}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <div className="flex items-end">
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
                                    hover:scale-[1.02]
                                    hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
                                    active:scale-95
                                "
                        >
                            Add Project
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
};

export default AddProjectPage;