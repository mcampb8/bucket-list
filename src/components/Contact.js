import React from 'react';

export default function Contact() {
    const linkStyle = { border: '1px black', padding: '5px' };
    return (
        <>
        <form>
            <label>
                Name
            <input type = "text"/>
            </label>
            <label>
                Email
            <input type = "text"/>
            </label>
            <label>
                Message
            <input type = "text"/>
            </label>
        </form>
        </>
    )
}