import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div className='contact' id='contact'>
            <div className='form'>
                <div className='heading'>
                    <h1>Contact</h1>
                </div>
                <form>
                    <h2>Message ME</h2>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email' />
                    <input type='number' placeholder='Phone No.' />
                    <input type='area' placeholder='Message' className='message' />
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact