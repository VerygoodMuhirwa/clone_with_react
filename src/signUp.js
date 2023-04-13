import React,{useState} from "react";
import axios from 'axios'
export default function SignUp(){
    const [Firstname, setFirstName]= useState("")
    const [Lastname, setLastname] =useState("")
    const [Email, setEmail] =useState("")
    const [Password, setPassword] = useState("")

    const handleFormSubmit= (e)=>{
e.preventDefault()

const formData= {
    Firstname,
    Lastname,
    Email,
    Password
}

axios.post("http://localhost:3000/v1/api/create",formData,{
    body:JSON.stringify(formData),
    headers:{
        'Content-Type':"application/json"

    }
})
 }

    const handleFirstname= (e)=>{
        setFirstName(e.target.value)
    }

    const handleLastname= (e)=>{
        setLastname(e.target.value)
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
                <label>Firstname</label>
                <input type="text" name="Firstname" placeholder="Enter the firstname"  value={Firstname} onChange={handleFirstname}/>

                <label>Lastname</label>
                <input type="text" name="Lastname" placeholder="Enter the lastname"  value={Lastname} onChange={handleLastname}/>

                <label>Email</label>
                <input type="email" name="Email" placeholder="Enter the Email"  value={Email} onChange={handleEmail}/>

                <label>Password</label>
                <input type="password" name="Password" placeholder="Enter the Password"  value={Password} onChange={handlePassword}/>
                <input type="submit" onClick={handleFormSubmit} />
            </form>
        </div>
    )
}