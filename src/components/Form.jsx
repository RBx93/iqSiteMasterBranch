import React, { useState } from 'react'
import '../css/Form.css'

const Form = () => {
    const[data, setData] = useState({name: "", email:"", phone: "", message:""});
    const handleChange = (e) =>{
        const name= e.target.name;
        const value= e.target.value;
        setData({...data, [name]: value})
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(data) 
    }

    return (
    <form method='post' onSubmit={handleSubmit}>
            <input type='text'  name='name' id='' onChange={handleChange} value={data.name} placeholder='Enter your name'/>
            
            <input type='email'  name='email' id='' onChange={handleChange} value={data.email}  placeholder='example@gmail.com'/>
            
            <input type='phone'  name='phone' id='' onChange={handleChange} value={data.phone}  placeholder='Enter your phone number'/>

            <textarea name='message' id='' onChange={handleChange} value={data.message} cols='30' rows='10' placeholder='type here...'/>
            <button type='submit'>send</button>
            <p>{data.name}, {data.email}, {data.phone}, {data.message}</p>
    </form>
  )
}

export default Form