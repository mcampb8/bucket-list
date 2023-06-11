import React from 'react';

export default function Resume() {
    const linkStyle = { border: '1px black', padding: '5px' };
    return (
        <>
        <a href = "https://docs.google.com/document/d/e/2PACX-1vTSh4nZTaTHq10zLNTlLXqPsFOMGkOZrGieJbnGZCCJN78i8drS2Q7U4UND8ufz8c-8s6W2GJ1XULuO/pub" download>Download My Resume Here</a>
        <ul>
            <h1>Here is a list of my language proificiences:</h1>
            <li>
                Javascript
            </li>
            <li>
                React
            </li>
            <li>
                HTML
            </li>
            <li>
                NODE
            </li>
            
        </ul>
        </>
    )
}