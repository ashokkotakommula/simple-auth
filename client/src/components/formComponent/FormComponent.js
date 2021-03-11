import React from 'react'
import { Link} from 'react-router-dom'

export default function FormComponent({ linkto, h4,errors, onSubmitData, email, password, onEmailChange, onPasswordChange}) {
    return (
        <div className="form-container">
            <form onSubmit={onSubmitData}>    
            <h4>{h4}</h4>        
            <h6>{errors}</h6>  
                <input type="text" value={email} onChange={onEmailChange} placeholder="Email" />
                <input type="password" value={password} onChange={onPasswordChange} placeholder="password" />
                <button onClick={onSubmitData}>{h4}</button>
                
                <Link to={`/${linkto}`}>{linkto}</Link>
            </form>
        </div>
    )
}
