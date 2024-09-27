import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add signup logic here (e.g., create an account)
        navigate('/home');
    };

    return (
        <div className="signup-container">
            
            <div className="signup-box">
                <button className="close-btn">&times;</button>
                <h2>Sign up <span className="or">or <a href="/login">login your account</a></span></h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your full name*"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email Address*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number*"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password*"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? '🙈' : '👁'}
                        </span>
                    </div>
                    <button type="submit" className="register-btn">REGISTER</button>
                </form>
                <div className="alternative-signup">
                    <p>Or connect with</p>
                    <button className="google-signup-btn">Sign up with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;