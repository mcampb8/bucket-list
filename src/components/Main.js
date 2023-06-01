import React, { useState, useEffect } from 'react';
import Nav from './Nav'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'

export default function Main() {
    return (
        <div>
            <header >
                <Nav/>
            </header>
            <section>
                <AboutMe/>
                <Portfolio/>
                <Contact/>
                <Resume/>

            </section>
    
            <footer>
                <a href = "github.com/mcampb8">My Github </a>
                <a href = "linkedin.com/mcampb8">My LinkedIn</a>
                <a href = "goggle.com">My Social Media</a>
            </footer>
        </div>
    )
};