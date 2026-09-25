import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../Component/Loading";
import { useAuth } from "../../context/AuthContext";

const ProjectDetails = () => {
    const { id } = useParams();

    const { port } = useAuth()

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProject = async () => {
            try {
                const res = await axios.get(
                    `${port}/project/${id}`
                );

                setProject(res.data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        getProject();
    }, [id]);

    if (loading) {
        return (
           <Loading text='Loading Project...'/>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-[#0b0b15] text-white flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-3">
                    Project Not Found
                </h1>

                <Link
                    to="/project"
                    className="text-cyan-400 hover:text-cyan-300"
                >
                    ← Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-linear-to-br from-[#0b0b15] via-[#15102a] to-[#2a1458] text-white px-4 py-8 md:px-10">

            {/* Back */}
            <div className="max-w-6xl mx-auto mb-6">
                <Link
                    to="/project"
                    className="text-white/60 hover:text-cyan-400 transition"
                >
                    ← Back to Projects
                </Link>
            </div>

            {/* Main Card */}
            <section className="
                max-w-7xl mx-auto
                rounded-3xl
                border border-violet-500/30
                bg-white/5
                backdrop-blur-xl
                overflow-hidden
                shadow-2xl
            ">

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-0
                ">

                    {/* Image */}
                    <div className="
                        p-4 md:p-6
                        flex items-center justify-center
                    ">
                        <div className="
                            w-full
                            overflow-hidden
                            rounded-2xl
                            border border-white/10
                            bg-black/20
                        ">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="
                                    w-full
                                    h-[250px]
                                    sm:h-[350px]
                                    lg:h-[450px]
                                    object-cover
                                    hover:scale-105
                                    transition duration-500
                                "
                            />
                        </div>
                    </div>

                    {/* Details */}
                    <div className="p-5 md:p-8 lg:p-10 flex flex-col justify-center">

                        {/* Category + Status */}
                        <div className="flex flex-wrap gap-3 mb-5">

                            <span className="
                                px-3 py-1
                                rounded-full
                                bg-cyan-400/10
                                border border-cyan-400/20
                                text-cyan-400
                                text-sm font-semibold
                            ">
                                {project.category}
                            </span>

                            <span className="
                                px-3 py-1
                                rounded-full
                                bg-green-400/10
                                border border-green-400/20
                                text-green-400
                                text-sm font-semibold
                            ">
                                {project.status}
                            </span>

                        </div>

                        {/* Title */}
                        <h1 className="
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            font-bold
                            bg-linear-to-r
                            from-cyan-400
                            via-violet-400
                            to-pink-400
                            bg-clip-text
                            text-transparent
                            mb-5
                        ">
                            {project.title}
                        </h1>

                        {/* Description */}
                        <p className="
                            text-white/65
                            text-sm
                            sm:text-base
                            leading-7
                            whitespace-pre-line
                            mb-7
                        ">
                            {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-7">
                            <h2 className="text-lg font-semibold mb-3">
                                Technologies
                            </h2>

                            <div className="flex flex-wrap justify-center items-center  px-3 py-2 gap-4 rounded-lg
                                            bg-violet-500/20
                                            border border-violet-500/40">
                                {project.technologies?.flatMap((tech) =>
                                    tech.split(",")
                                ).map((tech, index) => (
                                    <span key={index}
                                     className="
                                            px-3 py-2
                                            rounded-lg
                                            bg-violet-500/10
                                            border border-violet-500/20
                                            text-sm
                                            text-violet-200
                                        "
                                    >
                                        {tech.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="
                            flex
                            flex-col
                            sm:flex-row
                            gap-3
                        ">

                            <Link
                                to={project.liveUrl}
                                target="_blank"
                                className="
                                    flex-1
                                    text-center
                                    rounded-xl
                                    bg-linear-to-r
                                    from-cyan-500
                                    to-violet-600
                                    px-5 py-3
                                    font-semibold
                                    transition
                                    hover:scale-[1.02]
                                    hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
                                "
                            >
                                Live Demo ↗
                            </Link>

                            <Link
                                to={project.githubUrl}
                                target="_blank"
                                className="
                                    flex-1
                                    text-center
                                    rounded-xl
                                    border
                                    border-white/20
                                    bg-white/5
                                    px-5 py-3
                                    font-semibold
                                    hover:bg-white/10
                                    transition
                                "
                            >
                                GitHub ↗
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProjectDetails;