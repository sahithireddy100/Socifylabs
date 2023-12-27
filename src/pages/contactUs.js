import React, { useState } from "react";
import classes from './contactus.module.css'

function ContactUs(){
    const [formData, setFormData]=useState({
        fullName: " ",
        emailAddress: " ",
        mobileNumber: " ",
        designation: " ",
        message: " "
    });
    const handleInputChange =(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleButtonClick = (e) => {
        e.preventDefault();
        alert("Success!");

        setFormData({
            fullName: " ",
            emailAddress: " ",
            mobileNumber: " ",
            designation: " ",
            message: " "
        });
       
      };
    return(
        <div className={classes.container}>
            <text>Let Us hear your thoughts. Join Us</text>
            <div  className={classes.main}>
               <div className={classes.heading}>
                    <h3>Contact Us</h3>
                </div>
                <div className={classes.middle}>
                    <form className={classes.details}>
                        <label>Full Name</label>
                        <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        
                        />

                        <label>Email Address</label>
                        <input
                         type="email"
                         name="emailAddress"
                         value={formData.emailAddress}
                         onChange={handleInputChange}
                         />

                        <label>Mobile Number</label>
                        <input 
                        type="number"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        />

                        <label>Designation</label>
                        <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        />

                        <label>Message</label>
                        <textarea 
                         name="message"
                         value={formData.message}
                         onChange={handleInputChange}
                        />

                    </form>
                </div>
                <div className={classes.bottom}>
                    <button onClick={handleButtonClick}>Submit</button>
                </div>
            </div> 
        </div>
    );

}
export default ContactUs;
