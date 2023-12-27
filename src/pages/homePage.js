import React from "react";
import classes from'./homepage.module.css';
import { useNavigate } from "react-router-dom";


function HomePage(){
    let navigate = useNavigate()
    function handleClick(){
        navigate("/Contact-us")
    }
    function handleReadMoreClick(){
        navigate("/Mobile-app.");
    }

    return(
        
        <div className={classes.main} >
            <div className={classes.header}>
                <div className={classes.left}>
                    <h1>SOCIFYLABS</h1>
                </div>
                <div className={classes.right}>
                    
                    <button onClick={handleClick}>Contact us</button>
                </div> 
            </div>
            <div className={classes.center}>
                <div className={classes.top}>
                   <h2>Launching Soon</h2>
                   <p>A Multi Collaboration platform to create Innovative Products</p>
                </div>
                <div className={classes.bottom}>
                    <h3>Mobile Application Development</h3>
                    <p>User-friendly,responsive and engaging digital solutions usin the latest technologies including
                    <a onClick={handleReadMoreClick} className={classes.red}> Readmore </a> <a onClick={handleClick} className={classes.blue}>Contribute</a>
                    
                  </p>
                </div>
                
            </div>

        </div>
       
    );
}
export default HomePage;