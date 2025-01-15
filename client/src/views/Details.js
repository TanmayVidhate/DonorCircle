import React from 'react'
import { useParams, Link } from 'react-router-dom'
function Details() {
    const { userid } = useParams();
    return (
        <div>
            <p>Details Page</p>
                {userid}
        </div>
    )
}

export default Details