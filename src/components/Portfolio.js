import React from 'react';

export default function Portfolio() {
    const linkStyle = { border: '1px black', padding: '5px' };
    return (
        <>
        <section class = "header">
            <h1>Michael Campbell</h1>
        </section>
        <section class ="portfolio">
        <section>
        <h1>Project 1</h1>
        <a href = "https://github.com/mcampb8/employee-tracker">Employee Tracker App</a>
        <a href = "https://github.com/mcampb8/employee-tracker">Employee Tracker App Deployed</a>
        </section>
        <section>
        <h1>Project 2</h1>
        <a href = "https://github.com/mcampb8/note-taker">Note Taker App</a>
        <a href = "https://note-taker1.herokuapp.com/">Note Taker App Deployed</a>
        </section>
        <section>
        <h1>Project 3</h1>
        <a href = "github.com/mcampb8">Project 3 Github</a>
        <a href = "herokuapp.com">Project 3 Deployed</a>
        </section>
        <section>
        <h1>Project 4</h1>
        <a href = "github.com/mcampb8">Project 4 Github</a>
        <a href = "herokuapp.com">Project 4 Deployed</a>
        </section>
        <section>
        <h1>Project 5</h1>
        <a href = "github.com/mcampb8">Project 5 Github</a>
        <a href = "herokuapp.com">Project 5 Deployed</a>
        </section>
        <section>
        <h1>Project 6</h1>
        <a href = "github.com/mcampb8">Project 6 Github</a>
        <a href = "herokuapp.com">Project 6 Deployed</a>
        </section>
        </section>
      
        </>
    )
}