import React from 'react';
import './header.css';
import {Outlet, Link} from 'react-router-dom';

function Header()
{
    return(
        <div>
            <div class = "title">
                <button1 class ="active" href="#home">DEV@Deakin</button1>
                <div class = "post">
                    <button class="button">Post</button>
                </div>
                <div class = "login">
                    <button class = "li">
                    <Link className='link' to="/login">Login</Link>
                    </button>
                </div>
                <div class = "search">
                    <form class = "bar">
                        <input type="text" name="fname" placeholder="Search"/>
                    </form>
                </div>
                <Outlet/>
            </div>
        </div>    
    )
}

export default Header;