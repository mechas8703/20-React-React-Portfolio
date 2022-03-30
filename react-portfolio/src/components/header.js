import React from 'react';
import image from '../img/about_img.jpg';

  
export const Header = () => {
    return (
        <div id='backgroundColor'>
            <div id="about">
                <div class="b-example-divider"></div>

                <div className="container col-xxl-8 p-4">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src = {image} className=  "d-block mx-lg-auto img-fluid" alt="heroimage" width="600" height="300"/>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold lh-1 mb-3">Hi, I am Maria Cardona</h1>
                            <p className="lead">A Colombian and motivated professional, also an accountant graduated from KSU. I am currently earning a certificate in full-stack development from the Coding Bootcamp Program at Georgia tech, with newly developed skills in JavaScript, CSS, APIs, and responsive web design.  I am a precise problem solver, great teamwork and a creative thinker. </p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <a type="button" className="btn btn-outline-light btn-lg px-4" href="react-portfolio\src\img\Maria's resume 12-21-2021.pdf" download="Maria Cardona's Resume">Download Resume</a>
                                <a target ="_blank" rel="noreferrer"type="button" className="btn btn-outline-light btn-lg px-4" href="https://github.com/mechas8703" >View GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;