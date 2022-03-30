import React from 'react'
import '../App.css';
import trekstats from '../img/Trekstats.JPG';
import ecommerceBackend from '../img/E-Commerce-back-end.JPG';
import passwordGenerator from '../img/password generator screenshot.JPG';
import noteTaker from '../img/noteTaker.JPG';
import weatherDashboard from '../img/Weather Dashboard.JPG';
import workdayScheduler from '../img/Work day scheduler.JPG';

export const Portfolio = () => {
    return (
        <>
            <div className="container p-5" id="portfolio">
            <h1 className='text-center p-4'>Portfolio</h1>

                <div className="row g-3">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card text-center h-100">
                            <img src={groovyMovie} className="card-img-top" alt="trekstats"/>
                            <div className="card-body">
                                <h5 className="card-title text-uppercase fw-bold">Trekstats</h5>
                                <p className="card-text">Travel application that allows a user to retrive information for travel, weather and map based on city using one application.</p>
                                <a href="https://github.com/dparmar32/TrekStats" className="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://dparmar32.github.io/TrekStats/" className="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>
                

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card text-center h-100">
                            <img src={passwordGenerator} className="card-img-top" alt="password generator"/>
                            <div className="card-body">
                                <h5 className="card-title text-uppercase fw-bold">Password Generator</h5>
                                <p className="card-text">This application enables employees to generate random passwords based on criteria that they’ve selected.</p>
                                <a href="https://github.com/mechas8703/03-Password-Generator" className="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://mechas8703.github.io/03-Password-Generator/" className="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card text-center h-100">
                            <img src={musicReview} class="card-img-top" alt="weatherDashboard"/>
                            <div class="card-body">
                                <h5 class="card-title text-uppercase fw-bold">Weather Dashboard</h5>
                                <p class="card-text">A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. Use the OpenWeather One Call API to retrieve weather data for cities..</p>
                                <a href="https://github.com/mechas8703/06-Weather-Dashboard" class="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://mechas8703.github.io/06-Weather-Dashboard/" class="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card text-center h-100">
                            <img src={teamProfile} class="card-img-top" alt="workdayScheduler"/>
                            <div class="card-body">
                                <h5 class="card-title text-uppercase fw-bold">Work Day Scheduler</h5>
                                <p class="card-text">calendar application that allows a user to save events for each hour of the day by modifying starter code. </p>
                                <a href="https://github.com/mechas8703/05-Work-Day-Scheduler" class="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://mechas8703.github.io/05-Work-Day-Scheduler/" class="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card text-center h-100">
                            <img src={ecommerceBackend} class="card-img-top" alt="ECOMMERCE BACKEND"/>
                            <div class="card-body">
                                <h5 class="card-title text-uppercase fw-bold">ECOMMERCE BACKEND</h5>
                                <p class="card-text">An Express.js API and MySQL database built as a back end for an e-commerce website.</p>
                                <a href="https://github.com/mechas8703/13-E-Commerce-Back-End" class="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://drive.google.com/file/d/1ZsV7A4jp4S6C3Ky0Q89U7BtRZAJbzK87/view" class="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Walkthrough Video</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card text-center h-100">
                            <img src={noteTaker} class="card-img-top" alt="NOTE TAKER"/>
                            <div class="card-body">
                                <h5 class="card-title text-uppercase fw-bold center">NOTE TAKER</h5>
                                <p class="card-text">An application that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.</p>
                                <a href="https://github.com/mechas8703/11-Note-Taker" class="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://stormy-anchorage-52037.herokuapp.com/" class="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Portfolio;