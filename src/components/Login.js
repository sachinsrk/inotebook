import React, { useState } from 'react'

function Login(props) {
    const [credential,setCredentials]= useState({email:"",password:""})
   
    const handleSubmit= async(e)=>{
        e.prventDefault();
        //ApiCall
        const response = await fetch(`http://localhost:5000/api/note/fetchallnotes`, {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email:credential.email,password:credential.password})
       });
       const json = await response.json()
       console.log(json)
   
  
    }
    const onChange = (e) => {
        setCredentials({...credential, [e.target.name]: e.target.value })

    }
    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onChange}  value={credential.email} id="email" aria-describedby="emailHelp"/>
                   <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control"  onChange={onChange} value={credential.password} id="password"/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>

        </>
    )
}

export default Login
