import React,{useState} from "react";
import axios from "axios";
export default function SignIn(){
    const [Email, setEmail] =useState("")
    const [Password, setPassword] = useState("")

    const handleFormSubmit= (e)=>{
e.preventDefault()

const formData= {
    Email,
    Password
}

axios.post("http://localhost:3000/v1/api/login",formData,{
    body:JSON.stringify(formData),
    headers:{
        'Content-Type':"application/json"

    }
})
    }

    const handleEmail= (e)=>{
        setEmail(e.target.value)
    }

    const handlePassword= (e)=>{
        setPassword(e.target.value)
    }
        return(
        <div className="signUp" >
            <form style={{display:'flex',flexDirection:'column',alignItems:'center',}} onSubmit={handleFormSubmit}>
               <label>Email</label>
                <input name="Email" placeholder="Enter the Email"  value={Email} onChange={handleEmail}/>

                <label>Password</label>
                <input name="Password" placeholder="Enter the Password"  value={Password} onChange={handlePassword}/>
                <input type="submit" onClick={handleFormSubmit} />
            </form>
        </div>
    )
}