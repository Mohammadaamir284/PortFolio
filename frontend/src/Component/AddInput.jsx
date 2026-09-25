import React, { useState } from 'react'
import add from '../assets/add.svg';

const AddInput = ({ onDataChange }) => {
    const [inputs, setInputs] = useState([""]);
    const [data, setData] = useState([''])

    const addInput = () => {
        setInputs([...inputs, ""]);
        setData([...data, ""]);
    };
    const clearInput = (index) => {
        setInputs(inputs.filter((_, i) => i !== index));
        setData(data.filter((_, i) => i !== index));
        onDataChange(data.filter((_, i) => i !== index));
    };
    const handleChange = (index, value) => {
        const newData = [...data];
        newData[index] = value;
        setData(newData);
        onDataChange(newData);
    };

    return (
        <div>
           
            <div className='grid grid-cols-2 place-items-center gap-2 h-13 overflow-y-scroll mb-2 custom-scrollbar'>
                {inputs.map((item, index) => (
                    <div key={index}  
                    className='grid grid-cols-1 place-items-center'>
                    <input 
                        type="text"
                        value={data[index]}
                        placeholder={`Technologie ${index+1}`}
                        onChange={(e) =>
                            handleChange(index, e.target.value)
                        }
                        className="w-full rounded-xl border
                                                border-violet-500/30 bg-white/5
                                                px-4 py-3 text-white outline-none
                                                focus:border-cyan-400"

                    />
                    {inputs.length > 1 &&
                        <button
                            type="button"
                            className='text-red-500 font-bold'
                            onClick={() => clearInput(index)}
                        >
                            Clear
                        </button>
                    }
                </ div>))}
                <span
                    onClick={addInput}
                    className='grid grid-cols-2 text-white font-bold cursor-pointer'>
                    <img src={add} />
                    ADD
                </span>

            </div>

        </div>
    )
}

export default AddInput
