import React from 'react';

function ContactForm() {
    return (
        <form className='justify-center'>
            <div className="flex-row bg-color__contactform">
                <label>
                    Name<br/>
                    <input type="text" name="name" className='input-box'/>
                </label>
                <label>
                    Email<br/>
                    <input type="text" name="email" className='input-box'/>
                </label>
            </div>
            <div className="flex-col bg-color__contactform">
                <label>
                    Timeline<br/>
                    <input type="text" name="timeline" className='input-box'/>
                </label>
                <label>
                    Message<br/><br/>
                    <input type="text" name="message" className='input-box'/>
                </label>
                <input type="submit" value="Send" className='text-right input-box'/>
            </div>
        </form>
    )
}

export default ContactForm;
