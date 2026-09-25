import React from 'react'

const Loading = ({ text}) => {
    return (
        <div className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/30
        backdrop-blur-sm
    ">
            <div className="
            rounded-2xl
            bg-[#0b0b15]
            border border-violet-500/30
            px-8 py-6
            text-center
            shadow-[0_0_30px_rgba(139,92,246,0.25)]
        ">
                <div className="
                mx-auto mb-3
                h-10 w-10
                animate-spin
                rounded-full
                border-4
                border-white/20
                border-t-violet-500
            "></div>

                <p className="text-white font-semibold">
                   {text}
                </p>

                <p className="text-sm text-white/50 mt-1">
                    Please wait
                </p>
            </div>
        </div>
    )
}

export default Loading
