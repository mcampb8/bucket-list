import React from 'react';

export default function Nav(props) {
    const linkStyle = { border: '1px black', padding: '5px' };

    return (
        <nav className="main-header-menu">
            <section
                style={{
                    display: 'flex',
                    fontFamily: 'helvetica',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
            >
                <div class = {props.currentPage === "about-me" && "active"} style={linkStyle}>
                    <button class = "btn btn-primary" onClick={()=> props.changePage("about-me")}>
                        About Me
                    </button>
                </div>
                <div class = {props.currentPage === "portfolio" && "active"}style={linkStyle}>
                    <button class = "btn btn-primary" onClick = {()=> props.changePage("portfolio")}>
                        Portfolio
                    </button>
                </div>

                <div class = {props.currentPage === "contact" && "active"}style={linkStyle}>
                    <button class = "btn btn-primary" onClick = {()=> props.changePage("contact")}>
                        Contact
                    </button>
                </div>

                <div class = {props.currentPage === "resume" && "active"}style={linkStyle}>
                    <button class = "btn btn-primary" onClick={()=> props.changePage("resume")}>
                        Resume
                    </button>
                </div>
          
        </section>
    </nav >
  );
}
