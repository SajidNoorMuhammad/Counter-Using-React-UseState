import React from "react";

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className='rounded-2xl bg-green-950 text-white p-3 mt-2 font-bold'>
            {text}
        </button>
    )
}

export default Button