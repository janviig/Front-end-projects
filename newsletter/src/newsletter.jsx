import React, {useState} from 'react';
import './newsletter.css'

const Newsletter = (props) => {
    const [contact, setContact] = useState({
        email: ''
    })

    const handleChange = (event) => {
        const { email, value } = event.target
        setContact((preValue) => {
            return {
                ...preValue,
                [email]: value
            }
        })
    }
    const handleClick = async () => {
        await fetch('http://localhost:/8003', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                email: contact.email
            })
        })
            .then(response => response.json())
            .then(data => JSON.parse(data))
            .catch(err => {
                console.log(err)
            })
    }

    // const Input = (props) => {
    //     return <div>
    //         <input 
    //         name={props.name} 
    //         type={props.type} 
    //         placeholder={props.placeholder} 
    //         onChange={props.onChange}
    //         value={props.value} />
    //     </div>
    // }

    return (

        <div className='container'>
            {/* <div class="signup-form"> */}
                <h2>SIGN UP FOR DAILY NEWSLETTER</h2>

                    <input name = "email"
                    type ="text"
                    placeholder='email'
                    onChange={handleChange}
                    // value={contact.email}
                    input/>

                    <button 
                    type="submit" 
                    onClick={handleClick}
                    class="btn btn-lg btn-primary btn-block">Subscribe</button>
            </div>
    )
}
export default Newsletter;