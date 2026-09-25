import { input } from 'framer-motion/client';
import React, { useState } from 'react'

const AddImages = ({ onDataChange }) => {
    const [showFile, setShowFile] = useState(false);


    const handleFileChange = async (e) => {
        const pic = e.target.files[0]

        const imageURL = new FormData()
        imageURL.append('file', pic);
        imageURL.append('upload_preset', 'Portfolio');
        imageURL.append('cloud_name', 'dprrpmdoh');

        const resourceType = pic.type.startsWith("video/")
            ? "video"
            : "image";

        const res = await fetch(`https://api.cloudinary.com/v1_1/dprrpmdoh/${resourceType}/upload`, {
            method: 'POST',
            body: imageURL
        });
        const result = await res.json()

        onDataChange({
            url: result.secure_url,
            mediaType: resourceType
        })
    }

    const handleUrlChange = (e) => {
        const url = e.target.value

        onDataChange({
            url: url,
            mediaType: "image"
        })
    }

    return (<>
       
        <div className='grid grid-cols-2 place-items-center rounded-xl border
                                border-violet-500/30 bg-white/5
                              
                                focus:border-cyan-400' >
            {!showFile ?
                <input
                    type="text"
                    placeholder='Enter Image URL'
                    className=" w-full   px-2 py-3 text-white outline-none"
                    onChange={handleUrlChange}
                />
                :
                <>
                    <label
                        htmlFor="fileInput"
                        className=" flex items-center gap-3 rounded-lg bg-white/5
                                px-4 py-3 text-white outline-none cursor-pointer"
                    >
                        📁
                    </label>
                    <input
                        id="fileInput"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </>
            }

            <button
                type="button"
                onClick={() => setShowFile(!showFile)}
                className="text-white cursor-pointer border p-1 rounded-full px-2  border-violet-500/30 bg-white/5
                               font-bold outline-none
                                focus:border-cyan-400"
            >
                {showFile ? "Use URL" : "Use File"}
            </button>
        </div>
    </>)
}

export default AddImages
