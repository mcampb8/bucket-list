import React from 'react';

export default function Resume() {
    const linkStyle = { border: '1px black', padding: '5px' };
    return (
        <>
            <a href="https://docs.google.com/document/d/e/2PACX-1vTSh4nZTaTHq10zLNTlLXqPsFOMGkOZrGieJbnGZCCJN78i8drS2Q7U4UND8ufz8c-8s6W2GJ1XULuO/pub" class = "resume badge badge-primary"download>Download My Resume Here</a>
            <ul>
                <h2>Here is a list of my language proificiences and qualifications:</h2>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Javascript</h5>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="card-link btn btn-primary">Javascript Documentation</a>                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Node</h5>
                        <a href="https://nodejs.org/en/docs" class="card-link btn btn-primary">Node Documentation</a>                    </div>
                    <div class="card-body">
                        <h5 class="card-title">CSS</h5>
                        <a href="https://www.w3schools.com/html/default.asp" class="card-link btn btn-primary">CSS Documentation</a>                    </div>
                    <div class="card-body">
                        <h5 class="card-title">HTML</h5>
                        <a href="https://www.w3schools.com/html/default.asp" class="card-link btn btn-primary">HTML Documentation</a>                    </div>
                    <div class="card-body">
                        <h5 class="card-title">React</h5>
                        <a href="https://react.dev/" class="card-link btn btn-primary">React Documentation</a>                    </div>
                </div>

            </ul>
        </>
    )
}