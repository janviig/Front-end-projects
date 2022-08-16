import React from 'react';
import './newsletter.css'

function Newsletter()
{
    return(
        <div>
            <br></br>
            <div class = "newsletter">
            <br></br>
            <h2>SIGN UP FOR DAILY NEWSLETTER</h2>
            </div>

            <div class = "newsletter">
                <input type = "text" placeholder="email" name = "mail"></input>
                <input type = "submit" value="Subscribe"></input>
            </div>
            {/* <div class = "newsletter">
                <input type = "submit" value="Subscribe"></input>
            </div> */}
        </div>
    )
}

export default Newsletter;