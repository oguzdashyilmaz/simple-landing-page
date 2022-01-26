import React from 'react';
import { ReactDOM } from 'react';


function ContactForm() {
    return (
        <form>
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
            <div className="flex-col">
                <label>
                    Timeline<br/>
                    <input type="text" name="timeline" className='input-box'/>
                </label>
                <label>
                    Message<br/><br/>
                    <input type="text" name="message" className='input-box'/>
                </label>
            </div>
            <input type="submit" value="Send" className='text-right input-box'/>
        </form>
    )
}

export default ContactForm;
