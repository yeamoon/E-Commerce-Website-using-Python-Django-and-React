
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import "../styles/Form.css"
import { Link } from 'react-router-dom';


function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const{username,password}=formData
  
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            console.log("here")
            const res = await api.post("/api/token/", { username, password })
            console.log(res);
          
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
          
        } catch (error) {
            
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className='auth'>
        <h1 className='auth__title'>Sign In</h1>
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
                className="form-input"
                type="password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                placeholder="Password"
            />
            
            <button className="form-button" type="submit">
               Login 
            </button>
            <p >
                Don't have an account?<Link  to='/register'>Sign Up</Link> 
               
            </p>
            
        </form>
      
        </div>
       
    );

}




export default Login