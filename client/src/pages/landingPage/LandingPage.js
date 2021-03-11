import { useState, useEffect } from 'react'


export default function LandingPage() {
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        chenkToken()
    }, [])

    const chenkToken = () => {
        const token = localStorage.getItem('auth_token')
        if(token) {
            setIsLogin(true)
        } else {
            window.location.replace("/")
        }
    }
    
    const onLogout = e => {
        e.preventDefault();
        localStorage.removeItem("auth_token")
        chenkToken()
    }

    return (
        <div className="welcome-container">
            {
                isLogin ?
                <div className="welcome-box">
                    <h1>Welcome</h1>
                    <button onClick={onLogout}>logout</button>
                </div> 
                :
                <div>please login to continue</div>
            }
        </div>
    )
}
