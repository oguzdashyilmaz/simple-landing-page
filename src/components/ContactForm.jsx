import React from 'react';
import { ReactDOM } from 'react';


function ContactForm() {
    return (
        <form>
            <div className="row">
                <label>
                    Name
                    <input type="text" name="name" />
                </label>
                <label>
                    Email
                    <input type="text" name="email" />
                </label>
            </div>
            <div className="flex-col">
                <label>
                    Timeline
                    <input type="text" name="timeline" />
                </label>
                <label>
                    Message
                    <input type="text" name="message" />
                </label>
            </div>
            <input type="submit" value="Send" className='text-right'/>
        </form>
    )
}

export default ContactForm;
