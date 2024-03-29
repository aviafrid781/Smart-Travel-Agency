import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <div>
                    <span>Address Our Office</span> <br />
                    <small>32A/12 ,New York,USA</small> <br />
                    <span>Telephone</span>
                    <br />
                    <small>684-696-8370</small>   <br />
                    <span>Email</span> <br />
                    <small>example@gmail.com</small>   <br />
                </div>
                <div>
                    <div>
                        <h5>Careers</h5>
                        <p>Job openings</p>
                        <p>Employee success</p>
                        <p>Benefits</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;