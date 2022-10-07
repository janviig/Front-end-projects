import React from 'react';
import './footer.css'
import facebooklogo from './images/fb.png'
import twitterlogo from './images/twitter.png'
import instalogo from './images/insta.png'
function Footer()
{
    return(
   
        <div class = "back">
            <div class = "contactpage">
                <h2>Explore</h2>
                <p>Home</p>
                <p>Questions</p>
                <p>Articles</p>
                <p>Tutorials</p>
            </div>
            <div class = "contactpage">
                <h2>Support</h2>
                <p>Questions</p>
                <p>Articles</p>
                <p>Tutorials</p>
            </div>
            <div class = "contactpage">
                <h2>Stay Connected</h2>
                <div class = "logos">
                    <img src = {facebooklogo} alt = "faceb"></img>
                    <img src = {twitterlogo} alt = "twitter"></img>
                    <img src = {instalogo} alt = "insta"></img>
                </div>
            </div>
            <div class = "final">
                <h2>DEV@Deakin 2022</h2>
                <div class = "bottom">
                    <p>Privacy policy</p>
                    <p>Terms</p>
                    <p>Code of Conduct</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;