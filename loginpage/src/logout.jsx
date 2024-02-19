import React from 'react';
import './logout.css';
import {Outlet, Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import {getAuth, signOut} from 'firebase/auth';
import {signOut} from 'firebase/auth';

const Logout = (props) => {

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // eslint-disable-next-line
            const { user } = signOut;
            navigate("/")
        }
        catch (error) {
            console.log('error', error.message)
        }
    }

    return (
        <div>
            <div class="title">
                <button1 class="active" href="#home">DEV@Deakin</button1>
                <div class="post">
                    <button class="button">Post</button>
                </div>

                <div class="login">
                    <button class="li">
                        <Link className='link' id="logout" onClick={handleSubmit} to="/">Logout</Link>
                    </button>
                </div>

                <div class="search">
                    <form class="bar">
                        <input type="text" name="fname" placeholder="Search" />
                    </form>
                </div>

                <div class = "status">
                    <p> You are logged in</p>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Logout;