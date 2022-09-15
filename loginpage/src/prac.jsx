// import React, {useState} from 'react';
// import './login.css';
// import {Outlet, Link} from 'react-router-dom'
// import Input from './Input'
// import Button from './Button'
// import Greeting from './Greeting'
// import {signInWithGooglePopup, createUserDocFromAuth} from './utils/firebase'

// function Login(){

//     const [contact, setContact] = useState({
//         username: '',
//         password: ''
//     })

//     // const login = (props) => {
//         // const logGoogleUser = async () => 
//         // {
//         //     const {user} = await signInWithGooglePopup();
//         //     // console.log(response) 
//         //     createUserDocFromAuth(user)
//         // }
//     //     const [contact, setContact] = useState({
//     //         username: '',
//     //         password: ''
//     //     })
//     // }


//     const handleChange = (event) => {
//         const { name, value } = event.target
//         setContact((preValue) => {
//             return {
//                 ...preValue,
//                 [name]: value
//             }
//         })
//     }

//     return(
//         <div class = "log">
//                <Greeting 
//                 htext={contact.username}
//                 ptext={contact.password}
//             />

//             <Input
//                 name='username'
//                 type='text'
//                 placeholder='username'
//                 onChange={handleChange}
//                 value={contact.username}
//             />

//             <br></br>

//             <Input
//                 name='password'
//                 type='password'
//                 placeholder='password'
//                 onChange={handleChange}
//                 value={contact.password}
//             />

//             <br></br>

//             <Button
//                 type='submit'
//                 text='Login'
//             />
  
//             <div className = "loginHead">
//                 <h2>Create a DEV@Deakin Account:</h2> 
//             </div>
//             <div class = "emailDetails">
//                 <label>Your email:</label>
//                 <input name = "mail"/>
//                 onChange = {handleChange}
//                 value={contact.username}
//             </div>
//             <div class = "passwordDetails">
//                 <label>Your password:</label>
//                 <input type="password" id="pwd" name="pwd" minlength="16"></input>
//                 onChange = {handleChange}
//                 value={contact.username}
//             </div>
//             <div class = "sign">
//             <button class = "make" hred="#home">Log in</button>
//             </div>

//             <div class = "signup">
//                 <button class = "si">
//                 <Link className='li' to="/createaccount">Signup</Link>
//                 </button>
//             </div> 
//             <div class = "go">
//                 <button onClick={logGoogleUser}>
//                 Log in with Google
//                 </button>
//             </div>
//             <Outlet />
//         </div>  
//     )
// }

// export default Login