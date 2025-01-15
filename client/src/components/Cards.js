import React from 'react'

function Cards({ userid=123, name, mobile }) {
    return (
        <>
            <div className='shadow-lg bg-gray-200 shadow-gray-800 p-4 max-w-100 m-5 rounded border-2 border-gray-600 border-solid hover:scale-[1.02] duration-300 hover:border-indigo-400 border-2 relative xs:w-4/5' key={userid}>
                <div className=''>{userid}</div>
                <div className=''>{name}</div>
                <div className=''>{mobile}</div>
            </div>
        </>
    )
}

export default Cards