import React from 'react'

function Cards({ userid=123, name, mobile }) {
    return (
        <>
            <div className='w-1/4 h-48 shadow-lg bg-gray-200  shadow-gray-800 p-4 m-5 rounded border-2 border-gray-600 border-solid hover:scale-[1.02] duration-300 hover:border-indigo-400 relative' key={userid}>
                <div className=''>{userid}</div>
                <div className=''>{name}</div>
                <div className=''>{mobile}</div>
            </div>
        </>
    )
}

export default Cards