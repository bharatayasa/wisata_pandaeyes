import React from 'react'
import { useNavigate } from "react-router-dom";

function destinasi2() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>
                destinasi 2
            </h1>
            <button className='btn btn-primary' onClick={() => navigate('/')}>
                Kembali
            </button>
        </div>
    )
}

export default destinasi2
