import React from 'react';
import {logoBrand, logoinstagram, logoTwitch, logoTwitter, logoMail, logoFacebook} from './imageimport';



function Footer() {
    return (
        <footer>
            <div className="container py-5 pt-0">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                            </li>
                            <li className="mb-2">
                                <p>binarcarrental@gmail.com</p>
                            </li>
                            <li className="mb-2">
                                <p>081-233-334-808</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 mb-3">
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#services" className="text-decoration-none link-footer">Our
                                services</a></li>
                            <li className="mb-2"><a href="#whyus" className="text-decoration-none link-footer">Why Us</a>
                            </li>
                            <li className="mb-2"><a href="#testi" className="text-decoration-none link-footer">Testimonial</a>
                            </li>
                            <li className="mb-2"><a href="#faq" className="text-decoration-none link-footer">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <p className="mb-2">Connect with us</p>
                        <div className="footer_socials">
                            <a href="https://www.facebook.com/hendrik.putra.90834/"
                                className="footer_social text-decoration-none " target="_blank" rel="noreferrer" >
                                <img src={logoFacebook} alt="facebook" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Facebook"></img>
                            </a>
                            <a href="https://www.instagram.com/ponpesdaarulistiqlalmedan/?hl=id" className="footer_social text-decoration-none "
                                target="_blank" rel="noreferrer">
                                <img src={logoinstagram} alt="instagram" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Instagram"></img>
                            </a>
                            <a href="https://twitter.com/academybinar" className="footer_social text-decoration-none "
                                target="_blank" rel="noreferrer">
                                <img src={logoTwitter} alt="icon_twitter" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Twitter"></img>
                            </a>
                            <a href="mailto:hendripermana60@gmail.com" className="footer_social text-decoration-none "
                                target="_blank" rel="noreferrer">
                                <img src={logoMail}alt="gmail" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Gmail"></img>
                            </a>
                            <a href="https://daarulistiqlalmedan.ponpes.id" className="footer_social text-decoration-none "
                                target="_blank" rel="noreferrer">
                                <img src={logoTwitch} alt="icon_twitch" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Twitch"></img>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <p className="mb-2">Copyright Binar 2022</p>
                        <a className="navbar-brand" href="/">
                            <img src={logoBrand} alt="logo-bcr"></img>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
