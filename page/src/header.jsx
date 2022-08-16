import React from 'react';
import './header.css'
import headerImage from './images/first.png'

function Header()
{
    return(
        <div>
            <div class = "topnav">
                <button1 class ="active" href="#home">DEV@Deakin</button1>
                <button2 class="active" href="#login">Login</button2>
                {/* <button2></button2> */}
                <button2 class="active" href ="#post">Post</button2>
                {/* <button2></button2> */}
                <div class = "bar">
                    <form class="searchbar">
                        <input type="text" placeholder="🔎 Search..." name="search"></input>
                    </form>
                </div>
            </div>
            <div class = "headerimage">
                <img src = {headerImage} alt = "beachview" class="beach"></img>
            </div>
        </div>
    )
}

export default Header;