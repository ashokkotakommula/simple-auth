import React, {useEffect}from 'react'
import {Link} from 'react-router-dom'

export default function HomePage() {

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        if(token) {
            window.location.replace("/welcome")
        }
    })

    return (
        <div className="main-container">
            <Link to="/signup">signup</Link><br />
            <Link to="/login">signin</Link>
        </div>
    )
}
