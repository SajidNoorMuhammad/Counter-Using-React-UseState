import React from "react";

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className=' rounded-[5px] bg-green-950 text-white p-3 mt-2 font-bold m-1'>
            {text}
        </button>
    )
}

export default Button