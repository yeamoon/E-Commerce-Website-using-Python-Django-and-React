

import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import "../styles/Form.css"
import { Link } from 'react-router-dom';


function Register() {
    

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const{username,email,password,password2}=formData
  
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            console.log("here")
            const res = await api.post("/api/user/register/", { username, password })
            console.log(res);

                
            navigate("/login")
          
        } catch (error) {
            
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className='auth'>
        <h1 className='auth__title'>Sign Up</h1>
        <p>Sign into your Account</p>
        <form onSubmit={handleSubmit} className="form-container">
            
            <input
                className="form-input"
                type="text"
                placeholder="Usename"
                name="username"
                value={username}
                onChange={e => onChange(e)}
                
            />
            <input 
                        className='form-input'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required 
                    />
            <input
                className="form-input"
                type="password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                placeholder="Password"
            />

            <input
                className="form-input"
                type="password"
                name="password2"
                value={password2}
                onChange={e => onChange(e)}
                placeholder="Confirm Password"
            />
            
            <button className="form-button" type="submit">
               Register
            </button>
            <p >
            Already  have an account?<Link  to='/login'>Sign in</Link> 
               
            </p>
            
        </form>
      
        </div>
       
    );

}



export default Register