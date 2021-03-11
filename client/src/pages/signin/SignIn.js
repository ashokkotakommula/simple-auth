import { useState, useEffect } from 'react'
import FormComponent from '../../components/formComponent/FormComponent'

export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
     
    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        if(token) {
            window.location.replace("/welcome")
        }
    })

    const onEmailChange = e => {
        setEmail(e.target.value)
    }
    const onPasswordChange = e => {
        setPassword(e.target.value)
    }

    function validateEmail(mail) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(mail).toLowerCase());
    }

    const onSubmitData = async e => {
        e.preventDefault()
        if(!validateEmail(email)) {
            setErrors('enter a valid email')
            return
        }
        
        let data = {
            email: email,
            password: password
        }

        fetch('http://localhost:8000/api/login', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(data =>  {
           if(data.msg === "loggedin successfully") {
               localStorage.setItem("auth_token", `${token}${email}`)
               window.location.replace('/welcome')
           } else {
               setErrors(data.msg)
           }
        })
        .catch(err => console.log(err));     
    }

    return (
        <>
        <FormComponent 
            email={email}
            password={password}
            onEmailChange={onEmailChange}
            onPasswordChange={onPasswordChange}
            onSubmitData={onSubmitData}
            errors={errors}
            linkto="signup"
            h4="Login"
         />
    </>
    )
}
