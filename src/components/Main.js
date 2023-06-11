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
            <header >
                <Nav 
                changePage={setCurrentPage} 
                currentPage = {currentPage}
                />
            </header>
            <section>
               {renderPage()}

            </section>
    
            <footer class = "footer">
                <a href = "github.com/mcampb8">My Github </a>
                <a href = "linkedin.com/mcampb8">My LinkedIn</a>
                <a href = "goggle.com">My Social Media</a>
            </footer>
        </div>
    )
};