import {useState, useEffect} from 'react'
import FormComponent from '../../components/formComponent/FormComponent'

export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    
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
    function validatePassword(pwd) {
        const re =  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return re.test((pwd));
    }

    const onSubmitData = async e => {
        e.preventDefault()
        if(!validateEmail(email)) {
            setErrors('enter valid email')
            return
        }
        if(!validatePassword(password)) {
            setErrors('Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
            return
        }
        let data = {
            email: email,
            password: password
        }

        fetch('http://localhost:8000/api/signup', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(data =>  {
            if(data.msg.code === 11000) {
                setErrors('email already exists')
            } else {
                setErrors('signup success go to login page')
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
                linkto="login"
                h4="Signup"
             />
        </>
    )
}
