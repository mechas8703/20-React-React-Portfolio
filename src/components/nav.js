import React from 'react'

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <a className="navbar-brand mx-5" href="#about">Maria Cardona</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav ms-auto mx-5">

                        <li className="nav-item active">
                            <a className="nav-link" href="#about">About <span className="sr-only"></span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="./ims/Maria's resume 12-21-2021.pdf">Resume</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Nav;