import React, { useState } from 'react';
import './index.css';
import close from '../../assets/icons/hide.png';
import view from '../../assets/icons/view.png';

const Register = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        console.log(formData); 
    };

    return (
        <div className='admin-register'>
            <input className='email-input' name='email' type="email" placeholder='Enter your email' onChange={handleInputChange} />
            <div className="pass-div">
                <input className='pass-input' name='password' type={open ? "text" : "password"} placeholder='Enter your password' onChange={handleInputChange} />
                <img className='eye' src={open ? close : view} alt="eye image" onClick={() => setOpen(!open)} />
            </div>
            <input className='input-btn' type="button" value="Register" onClick={handleSubmit} />
        </div>
    );
};

export default Register;
