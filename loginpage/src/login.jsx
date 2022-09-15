import React, {useState} from 'react';
import './login.css';
import {Outlet, Link} from 'react-router-dom'
import {signInWithGooglePopup, createUserDocFromAuth, signinAuthUserWithEmailAndPassword} from './utils/firebase'
import { useNavigate } from 'react-router-dom';


const Login = (props) => {

    const navigate = useNavigate();

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user)
    }

    const [contact, setContact] = useState({
        username: '',
        password: ''
    })
    const { username, password } = contact

    const handleChange = (event) => {
        const { name, value } = event.target
        setContact((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signinAuthUserWithEmailAndPassword(username, password);
            await createUserDocFromAuth(user, { username });
            navigate("/")
        }
        catch (error) {
            console.log('error', error.message)
        }
    }

    return (
        <div class="log">
            <div className="loginHead">
                <h2>Create a DEV@Deakin Account:</h2>
            </div>

            <div class="emailDetails">
                <label>Your email:</label>
                <input
                    name="username"
                    onChange={handleChange}
                    value={contact.username} />
            </div>

            <div class="passwordDetails">
                <label>Your password:</label>
                <input
                    type="password"
                    id="pwd"
                    name="password"
                    minlength="16"
                    onChange={handleChange}
                    value={contact.password} />
            </div>

            <div class="sign">
                <button onClick={handleSubmit}>
                    Log in
                </button>
            </div>

            <div class="signup">
                <button class="si">
                    <Link className='li' to="/createaccount">Signup</Link>
                </button>
            </div>
            <div class="go">
                <button onClick={logGoogleUser}>
                    Log in with Google
                </button>
            </div>
            <Outlet />
        </div>
    )
}

export default Login