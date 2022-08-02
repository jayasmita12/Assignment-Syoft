import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import "./home.css"

export const Register = () => {
    const [name,setname]=useState(" ")
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")
    const [error,setError]=useState("")
    const [loading,setloading]=useState("")
    
    const handlerSubmit=async(e)=>{
        e.preventDefault()
        try {
            const config={
                headers:{
                    "Content-Type":"application/json"
                }
            }
            setloading(true)
            const {data} = await axios.post("/api/users",{
              name,  email,password
            },config)
            console.log(data)
            localStorage.setItem("userInfo",JSON.stringify(data))
            setloading(false)
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div>
           <div>
            <h1>Register</h1>
        <Form onSubmit={handlerSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" value={name} onChange={(e)=>setname(e.target.value)}  placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
          <Form.Label>Have an Account ?</Form.Label>
          <Link to="/login">Login</Link>
        </div>
    </div>
  )
}
