import React, {useState} from 'react';
import './account.css'
import {Outlet, Link} from 'react-router-dom'
import {createAuthUserWithEmailAndPassword, createUserDocFromAuth} from './utils/firebase';
import { useNavigate } from 'react-router-dom';

const Account = (props) => {

    const navigate = useNavigate();
     
    const [contact, setContact] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirm: ''
    })

    const {firstname, lastname, email, password, confirm} = contact;

    const handleChange = (event) => {
        const { name, value } = event.target
        setContact((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const handleSubmit = async(event) =>
    {
        event.preventDefault();

        if(password !== confirm)
        {
            alert('passwords not matching!')
            return;
        }
        try
        {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, {firstname});
            navigate("/login")
        }
        catch(error)
        {
            console.log('error in creating user', error)
        }
    }

    return(
        <div className = "account">
            <div class = "title">
                <h2>Create a DEV@Deakin Account:</h2> 
            </div>

            <div class = "name">
                <label>First Name:*</label>
                <input name = "firstname"
                onChange = {handleChange}
                value = {contact.firstname}/>
            </div>

            <div class = "surname">
                <label>Last Name:*</label>
                <input name = "lastname"
                 onChange = {handleChange}
                 value = {contact.lastname}/>
            </div>

            <div class = "email">
                <label>Email:*</label>
                <input name = "email"
                 onChange = {handleChange}
                 value = {contact.email}/>
            </div>

            <div class = "password">
                <label>Password:*</label>
                <input 
                type="password" 
                name="password" 
                // minlength="16"
                onChange = {handleChange}
                value = {contact.password}/>
            </div>

            <div class = "confirm">
                <label>Confirm password:*</label>
                <input 
                type="password" 
                name="confirm" 
                // minlength="16"
                onChange = {handleChange}
                value = {contact.confirm}/>
            </div>
        
            <div class = "create">
                <button onClick = {handleSubmit}>
                    Create Account
                </button>
                {/* <button class = "make" hred="#home">Create Account</button> */}
            </div>

            <div class = "main">
                <button class = "ma">
                <Link className='pa' to="/">Back to Home</Link>
                </button>
            </div>

            <Outlet />
        </div>
    )
}

export default Account