import React from 'react';
import { ReactDOM } from 'react';


function ContactForm() {
    return (
        <form>
            <div className="flex-row">
                <label>
                    Name<br/>
                    <input type="text" name="name" className='input-box'/>
                </label>
                <label>
                    Email<br/>
                    <input type="text" name="email" />
                </label>
            </div>
            <div className="flex-col">
                <label>
                    Timeline<br/>
                    <input type="text" name="timeline" />
                </label>
                <label>
                    Message<br/><br/>
                    <input type="text" name="message" />
                </label>
            </div>
            <input type="submit" value="Send" className='text-right'/>
        </form>
    )
}

export default ContactForm;
