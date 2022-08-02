import React from 'react'
import Button from 'react-bootstrap/Button';
import "./home.css"
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='mainDiv'>
    <Link to="/login"><Button variant="success" >Login</Button>{' '}</Link>
    <Link to="/register"> <Button variant="warning">Register</Button>{' '}</Link>
    </div>
  )
}
