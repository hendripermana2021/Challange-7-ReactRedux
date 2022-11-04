import React from "react";

import ReactOwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import {people1, people2} from './imageimport.js'

function Testimonial() {

    const options = {
        loop: true,
        margin: 10,
        dots: false,
        navText: ["<div className='btn-nav'>&#x2039;</div>", "<div className='btn-nav'>&#x203a;</div>"],
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsiveclassName: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
                stagePadding: 250,
            }
        }
    };

    return (
        <>
            <section className="testimonial" id="testi">
                <div className="container-fluid">
                    <div className="testi-header">
                        <h2>Testimonial</h2>
                        <p>Berbagai review positif dari para pelanggan kami</p>
                    </div>
                    <ReactOwlCarousel className="owl-theme"{...options}>

                        <div className="item">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-lg-3 m-auto text-center card-actor">
                                        <img src={people1}
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-body">
                                            <div className="font-10">
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                            </div>
                                            <p className="card-text">
                                                <q>This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a little bit
                                                    longer.</q>
                                            </p>
                                            <h5 className="card-title">John Dee 32, Bromo</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-lg-3 m-auto text-center card-actor">
                                        <img src={people2}
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-body">
                                            <div className="font-10">
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                            </div>
                                            <p className="card-text">
                                                <q>This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a little bit
                                                    longer.</q>
                                            </p>
                                            <h5 className="card-title">John Dee 32, Bromo</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item" id="card-3">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-lg-3 m-auto text-center card-actor">
                                        <img src={people1}
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-body">
                                            <div className="font-10">
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                            </div>
                                            <p className="card-text">
                                                <q>This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a little bit
                                                    longer.</q>
                                            </p>
                                            <h5 className="card-title">John Dee 32, Bromo</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-lg-3 m-auto text-center card-actor">
                                        <img src={people2}
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-body">
                                            <div className="font-10">
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                            </div>
                                            <p className="card-text">
                                                <q>This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a little bit
                                                    longer.</q>
                                            </p>
                                            <h5 className="card-title">John Dee 32, Bromo</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactOwlCarousel>
                </div>
            </section >
        </>
    );

}

export default Testimonial
