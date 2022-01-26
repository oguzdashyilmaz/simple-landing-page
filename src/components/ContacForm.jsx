import React from 'react';

function ContactForm() {
    return (
            // <form action="/action_page.php">
            //     <label htmlFor="name">Name</label>
            //     <input type="text" id='fname' name='fname'>
            //     <label htmlFor="email">Email</label>
            //     <input type="text" id='femail' name='femail'>
            //     <label htmlFor="timeline">Timeline</label>
            //     <input type="text" id='ftimeline' name='ftimeline'>
            //     <label htmlFor="message">Message</label>
            //     <input type="text" id='fmessage' name='fmessage'>
            //     <input type="submit" value="Submit">
            // </form>
            <Form.Field>
                <input type='text' placeholder='First name' />
                <Label pointing>Please enter a value</Label>
            </Form.Field>
    )
}

export default ContactForm;
