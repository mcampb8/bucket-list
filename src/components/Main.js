import React, { useState, useEffect } from 'react';
import Nav from './Nav'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'

export default function Main() {
    const [currentPage, setCurrentPage] = useState("about-me");
    
    const renderPage = ()=>{
        if(currentPage === "about-me"){
            return <AboutMe/>
        } else if(currentPage === "portfolio"){
            return <Portfolio/>
        } else if (currentPage === "contact"){
            return <Contact/>
        } else if (currentPage === "resume"){
            return <Resume/>
        }
    }
    return (
        <div>
            <header class = "bar">
                <Nav 
                changePage={setCurrentPage} 
                currentPage = {currentPage}
                />
            </header>
            <body>
            <h1 class = "header">Michael Campbell</h1>
               {renderPage()}
            </body>
    
            <footer class = "footer">
                <a href = "https://github.com/mcampb8" class = "badge badge-primary" >My Github </a>
                <a href = "https://linkedin.com/in/micampbell51" class = "badge badge-primary" >My LinkedIn</a>
                <a href = "https://instagram.com/themichaelinguide" class = "badge badge-primary" >My Social Media</a>
            </footer>
        </div>
    )
};