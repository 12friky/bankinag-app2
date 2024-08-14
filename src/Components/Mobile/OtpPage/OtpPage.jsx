import React, { useState, useEffect } from 'react';
import { MdOutlineLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';  
import emailjs from 'emailjs-com';
import './OtpPage.css';

const OtpPage = () => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();  

   
    const email = 'godwinarizi313@gmail.com';
    const name = 'Rose';

    const generateOtp = () => {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        sessionStorage.setItem('otp', otp); 
        return otp;
    };

    const sendOtp = () => {
        const otp = generateOtp();

        const templateParams = {
            to_email: email,
            otp_code: otp,
            to_name: name,  
        };

        emailjs.send(
            'service_o0zqi3x',
            'template_blt7w1z',
            templateParams,
            'Jx-86x90R1cKbBlLe'
        ).then((response) => {
            console.log('OTP sent!', response.status, response.text);
        }).catch((error) => {
            console.error('Failed to send OTP:', error);
        });
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleVerify = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            const storedOtp = sessionStorage.getItem('otp');
            if (otp === storedOtp) {
                alert('OTP Verified Successfully!');
                navigate('/dashboard');  // Navigate to the dashboard
            } else {
                alert('Incorrect OTP, please try again.');
            }
        }, 5000);
    };

    useEffect(() => {
        sendOtp();
    }, []); // Send OTP when the component mounts

    return (
        <div className="otp-page">
            <div className="otp-container">
                <MdOutlineLock className="otp-icon" />
                <h2>Verification</h2>
                <p>You will get an OTP via email</p>
                
                <form onSubmit={handleVerify} className="otp-form">
                    <input
                        type="password"
                        maxLength="6"
                        value={otp}
                        onChange={handleOtpChange}
                        className="otp-input"
                        placeholder="• • • • • •"
                    />
                    <button type="submit" className="verify-btn" disabled={loading}>
                        {loading ? 'Loading...' : 'VERIFY'}
                    </button>
                </form>
                <p className="resend-text">
                    Didn't receive the OTP? <span className="resend-link" onClick={sendOtp}>Resend again</span>
                </p>
            </div>
        </div>
    );
};

export default OtpPage;
