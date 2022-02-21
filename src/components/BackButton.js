import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {

    const navigate = useNavigate()

    return (
        <div className="back-btn" onClick={() => navigate("/")}>
            <FaAngleLeft size={40} color="rgba(8, 206, 163, 0.774)" />
        </div>
    )
}

export default BackButton