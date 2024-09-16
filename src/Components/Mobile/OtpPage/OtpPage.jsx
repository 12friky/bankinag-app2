import React, { useState, useEffect } from 'react';
import { MdOutlineLock } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';  
import emailjs from 'emailjs-com'; // Import EmailJS
import './OtpPage.css';

const OtpPage = () => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Retrieve email from location state
    const email = location.state?.email;

    useEffect(() => {
        if (email) {
            // Email received, proceed with sending OTP
            sendOtp(); // Send OTP when the component mounts
        } else {
            console.log('No email received'); // Log this for debugging if no email is present
        }
    }, [email]);

    const generateOtp = () => {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        sessionStorage.setItem('otp', otp); 
        return otp;
    };

    const sendOtp = async () => {
        if (loading || !email) {
            console.log('Cannot send OTP: Loading or email not available');
            return;
        }

        const otp = generateOtp();
        const templateParams = {
            to_email: email,
            otp_code: otp,
        };

        try {
            const response = await emailjs.send('service_q6l16vx', 'template_hx376pg', templateParams, '8tcICjeh46aJKasHO');
            console.log('OTP sent successfully'); // Keeping this log for success feedback
        } catch (error) {
            console.error('Failed to send OTP:', error); // Only log error messages
            alert('Failed to send OTP. Please try again.');
        }
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);

        const storedOtp = sessionStorage.getItem('otp');
        if (otp === storedOtp) {
            alert('OTP Verified Successfully!');
            navigate('/dashboard'); // Navigate to the dashboard
        } else {
            alert('Incorrect OTP, please try again.');
        }

        setLoading(false);
    };

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
