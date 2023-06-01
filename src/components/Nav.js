import React from 'react';

export default function Nav() {
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
                <div style={linkStyle}>
                    <a href="#">Michael Campbell</a>
                </div>

                <div style={linkStyle}>
                    <button>
                        <a href="#">About Me</a>
                    </button>
                </div>
                <div style={linkStyle}>
                    <button>
                        <a href="#">Portfolio</a>
                    </button>
                </div>

                <div style={linkStyle}>
                    <button>
                        <a href="#">Contact</a>
                    </button>
                </div>

                <div style={linkStyle}>
                    <button>
                        <a href="#">Resume</a>
                    </button>
                </div>
          
        </section>
    </nav >
  );
}
