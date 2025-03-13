"use client"

import Image from "next/image";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ".../styles/scss/_bootstrap.scss"
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../../styles/scss/_bootstrap.scss";
import "../../styles/scss/_fonts.scss";
import "../../styles/scss/_variables.scss";
import "../../styles/scss/main.scss";
import AOS from "aos";
import "aos/dist/aos.css";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper-bundle.min.js";
import {Swiper , SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../../styles/scss/components/slider.scss"
import "../../js/main.js"
import "../../js/bootstrap.js"
// import Link from "next/link";

export default function LandingPage() {
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: false,
        });
      }, []);
    return(
        <>
        <section className="landing-page mx-4 mt-7" data-aos="zoom-out-up">
            <div className="container-fluid">
                <div className="landing-page-content row align-items-center">
                    <div className="col-md-9 position-relative">
                        <h1 className="display-4 mt-0 mt-md-5 fw-bold">
                            {/* <!-- Expert Service for Air Conditioners, <br/>Washing Machines <br/>& Dishwashers! -->
                            <!-- Fast, Reliable, and Affordable Repair Services at Your Doorstep! --> */}
                            Schedule a Service <br />Appointment and Enjoy <br />Comfort in Your Home Again!
                        </h1>

                        {/* <!-- <a className="btn btn-primary rounded-pill my-5 btn-with-icon" href="tel:7550331197">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                    <g fill="none" fillRule="evenodd">
                                        <path
                                            d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                        <path fill="#000"
                                            d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535" />
                                    </g>
                                </svg>
                            </span>
                            7550331197</a> --> */}

                        {/* <!-- <p className="fs-6 mt-5 pt-md-5 pt-0 w-100 w-md-50 desc">
                            At EasyFix Expert, we specialize in providing high-quality repair and
                            maintenance services for
                            all your home appliances.</p> --> */}
                    </div>

                    <div className="col-md-3">
                        <div className="booking-form p-4 bg-white rounded-4">
                            <h6 className="mb-4 text-custom fw-semibold">
                                <span className="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                                        <path fill="var(--sk-text-custom-color)" fillRule="evenodd"
                                            d="M11.25 2.5a2.25 2.25 0 0 0-2.154 2.904l.13.43l-.317.318l-6.254 6.253l-.53-.53l.53.53a.664.664 0 0 0 .94.94L9.848 7.09l.318-.318l.43.13a2.25 2.25 0 0 0 2.685-3.124l-1.5 1.501a.75.75 0 1 1-1.061-1.06l1.5-1.5a2.24 2.24 0 0 0-.97-.22ZM7.5 4.75a3.75 3.75 0 1 1 3.114 3.696L10.061 9l.939.94l.47-.47l.53-.53l.53.53l1.875 1.875a2.164 2.164 0 1 1-3.06 3.06L9.47 12.53L8.94 12l.53-.53l.47-.47l-.94-.94l-4.345 4.345l-.53-.53l.53.53a2.164 2.164 0 1 1-3.06-3.06L5.939 7L3.5 4.56l-.617.617l-.507-.761l-1-1.5l-.341-.512l.435-.434l.5-.5l.434-.435l.512.341l1.5 1l.761.507l-.616.617L7 5.94l.554-.554A4 4 0 0 1 7.5 4.75m4.5 6.31l1.345 1.345a.664.664 0 0 1-.94.94L11.061 12z"
                                            clipRule="evenodd" />
                                    </svg>
                                </span>
                                For Service Booking
                            </h6>
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-custom-light">Name</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label text-body-tertiary">Phone
                                        Number</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1"/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label text-body-tertiary">Service</label>
                                    <select className="form-select" aria-label="Default select example" defaultValue="">
                                        <option value=""></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-primary rounded-pill mt-3 w-100 p-2">Book Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="aboutus my-8" id="about">
        <div className="container">
            <div className="row g-4">
                <div className="col-md-5" data-aos="fade-right">
                    <Image src="/images/album/ac-service1730471015.jpg" className="aboutus-Image" width={400} height={300} 
                    style={{width:"100%", height:"100%"}} alt=""/>
                </div>
                <div className="col-md-7" data-aos="fade-left">
                    <div className="p-3 p-md-5 custom-bg custom-border-radius">
                        <h6 className="text-primary text-uppercase">About us</h6>
                        <h2 className="fw-bold display-5">
                            Service That Makes a <br /><span className="gradient-text">Difference</span>
                        </h2>
                        <p className="mt-5">
                            You are looking for a home appliance service center in Karaikudi at the most affordable
                            rates.
                            We have 15+ Years of experience in services and best in market. We also in sales and service
                            of
                            Air Conditioners, Washing Machines, Refrigerators, Air Coolers and Other Electronics on top
                            brand in the market of both domestic and imported such as LG, Samsung, Warlpool, Bajaj,
                            Panasonic, Voltas, Hitachi, Onida, Hair, IFB, Bosch, Electrolux & More.
                        </p>



                    </div>

                    <div className="custom-bg custom-border-radius p-5 milestones-temp">
                        <div className="milestones-content">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="counter">
                                        <h2 className="display-4">3k+</h2>
                                        <p>successfull services</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="counter">
                                        <h2 className="display-4">5+</h2>
                                        <p>years in business</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="counter">
                                        <h2 className="display-4">99%</h2>
                                        <p>happy clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="milestones my-8" data-aos="fade-up">
        <div className="container">
            <div className="milestones-content">
                <div className="row">
                    <div className="col-md-3">
                        <div className="counter">
                            <h2 className="display-4">3k+</h2>
                            <p>successfull services</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="counter">
                            <h2 className="display-4">5+</h2>
                            <p>years in business</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="counter">
                            <h2 className="display-4">99%</h2>
                            <p>happy clients</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="counter">
                            <h2 className="display-4">99%</h2>
                            <p>client satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="services">
        <div className="container">
            <div className="mb-5" data-aos="fade-right">
                {/* <!-- <div className="w-100 d-flex align-items-center justify-content-center"> --> */}
                <h6 className="text-primary section-title text-uppercase">What We Offer</h6>
                {/* <!-- </div> --> */}
                <h2 className="display-5 fw-bold section-subtitle">
                    {/* <!-- Complete Care for Every <br /><span className="gradient-text">Appliance</span> in Your Home --> */}
                    Explore our <span className="explore-icon">
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                                <path fill="white"
                                    d="M764.416 254.72a351.7 351.7 0 0 1 86.336 149.184H960v192.064H850.752a351.7 351.7 0 0 1-86.336 149.312l54.72 94.72l-166.272 96l-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96l54.72-94.72a351.7 351.7 0 0 1-86.336-149.312H64v-192h109.248a351.7 351.7 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0a192 192 0 0 0 384 0" />
                            </svg>
                        </span>
                    </span> Expert <span className="gradient-text">Services</span>
                </h2>
                <p className="m-0 text-custom-light w-100 w-md-50">
                    From installation to regular maintenance and repairs, we provide expert service for all
                    your essential home appliances, including air conditioners, washing machines, refrigerators,
                    ovens, and dishwashers. With skilled technicians and a commitment to quality, we ensure your
                    appliances run smoothly, efficiently, and for longer.
                </p>
            </div>


            <div className="d-flex align-items-center " data-aos="fade-up">
                {/* <!-- <p className="me-5 align-self-start fw-semibold">categories</p> -->
                <!-- Swiper --> */}
                {/* <!-- <div className="swiper servicesSwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <g fill="none" fillRule="evenodd">
                                            <path
                                                d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                            <path fill="white"
                                                d="M10 16a1 1 0 0 1 1 1v1.172a3 3 0 0 1-.879 2.12l-.414.415a1 1 0 0 1-1.414-1.414l.414-.414A1 1 0 0 0 9 18.172V17a1 1 0 0 1 1-1m4 0a1 1 0 0 1 .993.883L15 17v1.172a1 1 0 0 0 .206.608l.087.099l.414.414a1 1 0 0 1-1.32 1.497l-.094-.083l-.414-.414a3 3 0 0 1-.872-1.923L13 18.172V17a1 1 0 0 1 1-1m-8 0a1 1 0 0 1 .993.883L7 17v.613a2 2 0 0 1-1.218 1.84l-.15.057l-1.316.439a1 1 0 0 1-.74-1.854l.108-.044L5 17.613V17a1 1 0 0 1 1-1m12 0a1 1 0 0 1 .993.883L19 17v.613l1.316.438a1 1 0 0 1-.52 1.928l-.112-.03l-1.316-.44a2 2 0 0 1-1.362-1.736l-.006-.16V17a1 1 0 0 1 1-1m0-13a3 3 0 0 1 2.995 2.824L21 6v6a3 3 0 0 1-2.824 2.995L18 15H6a3 3 0 0 1-2.995-2.824L3 12V6a3 3 0 0 1 2.824-2.995L6 3zm0 8H6a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-1-1m-1-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Air Conditioner</h5>
                                        <p>Expert AC installation, regular maintenance, and efficient repair services
                                            for
                                            all
                                            brands and models.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#Installation</span>
                                        <span className="chips">#regular maintenance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                        viewBox="0 0 512 512">
                                        <path fill="white"
                                            d="M73 41v78h110V41zm128 0v78h238V41zm199 23a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 16-16m-176 7h48v18h-48zm80 0h48v18h-48zM73 137v350h366V137zm183 30c82.7 0 150 67.3 150 150s-67.3 150-150 150s-150-67.3-150-150s67.3-150 150-150m0 18c-73 0-132 59-132 132s59 132 132 132c48.5 0 90.8-26 113.7-64.9L339.6 360a94.02 94.02 0 0 1-83.6 51a94.02 94.02 0 0 1-94-94a94.02 94.02 0 0 1 94-94a94.02 94.02 0 0 1 85.7 55.3l30.4-24.3c-22.3-41.1-65.9-69-116.1-69m-6.9 62c-50.1 1.1-76.9 51-62 93.9c-.7-37.8 30.1-78 62-93.9m130.6 23.9l-32 25.6A94 94 0 0 1 350 317a94 94 0 0 1-3.5 25.5l31.4 25.2C384.4 352.1 388 335 388 317c0-16.2-2.9-31.8-8.3-46.1" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Washing Machine</h5>
                                        <p>Seamless washing machine installation, thorough periodic servicing, and
                                            prompt repairs to keep your laundry hassle-free.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#installation</span>
                                        <span className="chips">#PeriodicService</span>
                                        <span className="chips">#Repairs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M7 2h10a2 2 0 0 1 2 2v5H5V4a2 2 0 0 1 2-2m12 17a2 2 0 0 1-2 2v1h-2v-1H9v1H7v-1a2 2 0 0 1-2-2v-9h14zM8 5v2h2V5zm0 7v3h2v-3z" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Fridge</h5>
                                        <p>Reliable fridge servicing, cooling issue fixes, and professional installation
                                            for all types and brands.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#CoolingFix</span>
                                        <span className="chips">#Maintenance</span>
                                        <span className="chips">#SetupService</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616v14.769q0 .69-.462 1.153T17.384 21zM8 6.77q.31 0 .54-.23T8.77 6t-.23-.54T8 5.23t-.54.23t-.23.54t.23.54t.54.23m3 0q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m1 10.73q1.364 0 2.332-.93t.968-2.27q0-.629-.212-1.22q-.211-.591-.653-1.034L12 9.612l-2.354 2.353q-.473.473-.722 1.077T8.7 14.3q.05 1.339 1.006 2.27T12 17.5m0-.92q-.961 0-1.63-.659q-.67-.66-.67-1.621q0-.452.147-.857t.48-.737L12 11.033l1.744 1.744q.295.294.425.702q.131.408.131.821q0 .962-.67 1.621q-.668.66-1.63.66" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Dish Washer</h5>
                                        <p>Comprehensive dishwasher installations, periodic servicing, and swift repairs
                                            for a spotless performance every time.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#Setup</span>
                                        <span className="chips">#RoutineService</span>
                                        <span className="chips">#QuickRepairs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                                        <defs>
                                            <mask id="ipSOven0">
                                                <g fill="none">
                                                    <rect width="40" height="28" x="4" y="8" fill="#fff" stroke="#fff"
                                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"
                                                        rx="2" />
                                                    <rect width="16" height="12" x="12" y="16" fill="#000" stroke="#000"
                                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"
                                                        rx="1" />
                                                    <circle cx="37" cy="15" r="2" fill="#000" />
                                                    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="4" d="M36 22h2m-2 7h2" />
                                                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="4" d="M12 36v6m24-6v6" />
                                                </g>
                                            </mask>
                                        </defs>
                                        <path fill="white" d="M0 0h48v48H0z" mask="url(#ipSOven0)" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Oven</h5>
                                        <p>Precise oven repairs, maintenance, and safe installations to keep your
                                            cooking uninterrupted.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#Installation</span>
                                        <span className="chips">#RegularCheckups</span>
                                        <span className="chips">#RepairService</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> --> */}


                <div className="container servicesSwiper">
                    <div className="row g-4">
                        <div className="col-md-4 ">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <g fill="none" fillRule="evenodd">
                                            <path
                                                d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                            <path fill="white"
                                                d="M10 16a1 1 0 0 1 1 1v1.172a3 3 0 0 1-.879 2.12l-.414.415a1 1 0 0 1-1.414-1.414l.414-.414A1 1 0 0 0 9 18.172V17a1 1 0 0 1 1-1m4 0a1 1 0 0 1 .993.883L15 17v1.172a1 1 0 0 0 .206.608l.087.099l.414.414a1 1 0 0 1-1.32 1.497l-.094-.083l-.414-.414a3 3 0 0 1-.872-1.923L13 18.172V17a1 1 0 0 1 1-1m-8 0a1 1 0 0 1 .993.883L7 17v.613a2 2 0 0 1-1.218 1.84l-.15.057l-1.316.439a1 1 0 0 1-.74-1.854l.108-.044L5 17.613V17a1 1 0 0 1 1-1m12 0a1 1 0 0 1 .993.883L19 17v.613l1.316.438a1 1 0 0 1-.52 1.928l-.112-.03l-1.316-.44a2 2 0 0 1-1.362-1.736l-.006-.16V17a1 1 0 0 1 1-1m0-13a3 3 0 0 1 2.995 2.824L21 6v6a3 3 0 0 1-2.824 2.995L18 15H6a3 3 0 0 1-2.995-2.824L3 12V6a3 3 0 0 1 2.824-2.995L6 3zm0 8H6a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-1-1m-1-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Air Conditioner</h5>
                                        <p>Expert AC installation, regular maintenance, and efficient repair services
                                            for
                                            all
                                            brands and models.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#Installation</span>
                                        <span className="chips">#regular maintenance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                        viewBox="0 0 512 512">
                                        <path fill="white"
                                            d="M73 41v78h110V41zm128 0v78h238V41zm199 23a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 16-16m-176 7h48v18h-48zm80 0h48v18h-48zM73 137v350h366V137zm183 30c82.7 0 150 67.3 150 150s-67.3 150-150 150s-150-67.3-150-150s67.3-150 150-150m0 18c-73 0-132 59-132 132s59 132 132 132c48.5 0 90.8-26 113.7-64.9L339.6 360a94.02 94.02 0 0 1-83.6 51a94.02 94.02 0 0 1-94-94a94.02 94.02 0 0 1 94-94a94.02 94.02 0 0 1 85.7 55.3l30.4-24.3c-22.3-41.1-65.9-69-116.1-69m-6.9 62c-50.1 1.1-76.9 51-62 93.9c-.7-37.8 30.1-78 62-93.9m130.6 23.9l-32 25.6A94 94 0 0 1 350 317a94 94 0 0 1-3.5 25.5l31.4 25.2C384.4 352.1 388 335 388 317c0-16.2-2.9-31.8-8.3-46.1" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Washing Machine</h5>
                                        <p>Seamless washing machine installation, thorough periodic servicing, and
                                            prompt repairs to keep your laundry hassle-free.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#installation</span>
                                        <span className="chips">#PeriodicService</span>
                                        <span className="chips">#Repairs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M7 2h10a2 2 0 0 1 2 2v5H5V4a2 2 0 0 1 2-2m12 17a2 2 0 0 1-2 2v1h-2v-1H9v1H7v-1a2 2 0 0 1-2-2v-9h14zM8 5v2h2V5zm0 7v3h2v-3z" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Fridge</h5>
                                        <p>Reliable fridge servicing, cooling issue fixes, and professional installation
                                            for all types and brands.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#CoolingFix</span>
                                        <span className="chips">#Maintenance</span>
                                        <span className="chips">#SetupService</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616v14.769q0 .69-.462 1.153T17.384 21zM8 6.77q.31 0 .54-.23T8.77 6t-.23-.54T8 5.23t-.54.23t-.23.54t.23.54t.54.23m3 0q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m1 10.73q1.364 0 2.332-.93t.968-2.27q0-.629-.212-1.22q-.211-.591-.653-1.034L12 9.612l-2.354 2.353q-.473.473-.722 1.077T8.7 14.3q.05 1.339 1.006 2.27T12 17.5m0-.92q-.961 0-1.63-.659q-.67-.66-.67-1.621q0-.452.147-.857t.48-.737L12 11.033l1.744 1.744q.295.294.425.702q.131.408.131.821q0 .962-.67 1.621q-.668.66-1.63.66" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Dish Washer</h5>
                                        <p>Comprehensive dishwasher installations, periodic servicing, and swift repairs
                                            for a spotless performance every time.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#Setup</span>
                                        <span className="chips">#RoutineService</span>
                                        <span className="chips">#QuickRepairs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="service-card border">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                                        <defs>
                                            <mask id="ipSOven0">
                                                <g fill="none">
                                                    <rect width="40" height="28" x="4" y="8" fill="#fff" stroke="#fff"
                                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"
                                                        rx="2" />
                                                    <rect width="16" height="12" x="12" y="16" fill="#000" stroke="#000"
                                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"
                                                        rx="1" />
                                                    <circle cx="37" cy="15" r="2" fill="#000" />
                                                    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="4" d="M36 22h2m-2 7h2" />
                                                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="4" d="M12 36v6m24-6v6" />
                                                </g>
                                            </mask>
                                        </defs>
                                        <path fill="white" d="M0 0h48v48H0z" mask="url(#ipSOven0)" />
                                    </svg>
                                </div>
                                <div className="services-content">
                                    <div>
                                        <h5 className="service-title fw-semibold">Oven</h5>
                                        <p>Precise oven repairs, maintenance, and safe installations to keep your
                                            cooking uninterrupted.</p>
                                    </div>
                                    <div className="chips-box">
                                        <span className="chips">#Installation</span>
                                        <span className="chips">#RegularCheckups</span>
                                        <span className="chips">#RepairService</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div
                                className="d-flex align-items-center service-card justify-content-center h-100 fw-semibold border">
                                {/* <!-- categories --> */}
                                Expert Care, Every Repair
                                {/* <!-- <p className="me-5 align-self-start fw-semibold">categories</p> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="showcase__controls d-flex justify-content-end align-items-center mt-3">
                <button className="button button--stroke swiper-button-services-prev "
                    style={{ "--button-stroke": "#0e100f", "--button-hoverColor": "var(--bs-primary)" } as React.CSSProperties} aria-label="Previous"
                    data-block="button">
                    <span className="button__icon button__icon--circle-arrow-left"></span>
                </button>
                <button className="button button--stroke swiper-button-services-next ms-2"
                    style={{ "--button-stroke": "#0e100f", "--button-hoverColor": "var(--color-just-black)" } as React.CSSProperties} aria-label="Next"
                    data-block="button">
                    <span className="button__icon button__icon--circle-arrow-right"></span>
                </button>
            </div>


            {/* <!-- <div className="row">
                <div className="col-md-7">
                    <div className="gray-box">
                        <p className="m-0">
                            From installation to regular maintenance and repairs, we provide expert service for all
                            your essential home appliances, including air conditioners, washing machines, refrigerators,
                            ovens, and dishwashers. With skilled technicians and a commitment to quality, we ensure your
                            appliances run smoothly, efficiently, and for longer.
                        </p>
                        <p className="m-0">
                            From installation to regular maintenance and repairs, we provide expert service for all
                            your essential home appliances, including air conditioners, washing machines, refrigerators,
                            ovens, and dishwashers. With skilled technicians and a commitment to quality, we ensure your
                            appliances run smoothly, efficiently, and for longer.
                        </p>
                        <p className="m-0">
                            From installation to regular maintenance and repairs, we provide expert service for all
                            your essential home appliances, including air conditioners, washing machines, refrigerators,
                            ovens, and dishwashers. With skilled technicians and a commitment to quality, we ensure your
                            appliances run smoothly, efficiently, and for longer.
                        </p>
                        <p className="m-0">
                            From installation to regular maintenance and repairs, we provide expert service for all
                            your essential home appliances, including air conditioners, washing machines, refrigerators,
                            ovens, and dishwashers. With skilled technicians and a commitment to quality, we ensure your
                            appliances run smoothly, efficiently, and for longer.
                        </p>

                        <Image src="/images/album/appliance-repair-11731591351-removebg-preview.png" className="mt-5" width="100%" height="100%" alt=""/>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="gray-box h-100">
                        <h5 className="services-title display-6">
                            Air Conditioner Services
                        </h5>
                        <p className="services-brief">
                            Expert AC installation, regular maintenance, and efficient repair services for all brands
                            and models.
                        </p>

                        <Image src="/images/album/2-air-conditonar.png" className="Image-fluid"  alt="">
                    </div>
                </div>
            </div> --> */}
        </div>
    </section>

    <section className="brands py-4 my-5" data-aos="fade-up">
        <div className="container">
            <div className="mb-7 text-right">
                <h6 className="text-primary section-title text-uppercase">Brands We Service</h6>
                {/* <!-- <h2 className="display-5 fw-bold">Partnering with Leading Brands to <br />Deliver <span className="gradient-text">Quality</span> Service
                </h2> --> */}
                <h2 className="display-5 fw-bold section-subtitle">
                    Expert Care for Your Trusted <span className="gradient-text">Brands</span> <br />From Samsung to LG and
                    More
                </h2>
            </div>
            <div className="brands-swiper-wrapper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide>
          <Image src="/images/album/brands/bosch.svg" width={100} height={60} alt="Bosch" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/album/brands/godrej.svg" width={100} height={60} alt="Godrej" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/album/brands/ifb-logo.svg" width={100} height={60} alt="IFB" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/album/brands/lg.svg" width={100} height={60} alt="LG" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/album/brands/samsung.svg" width={100} height={60} alt="Samsung" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/album/brands/whirlpool.svg" width={100} height={60} alt="Whirlpool" />
        </SwiperSlide>
      </Swiper>
    </div>
        </div>
    </section>

    <section className="faq my-8" data-aos="fade-up">
        <div className="container">
            <div className="text-center mb-5">
                <div className="w-100 d-flex align-items-center justify-content-center">
                    <h6 className="text-primary text-uppercase section-title">faq</h6>
                </div>
                <h2 className="fw-bold display-5 section-subtitle">
                    Find the <span className="gradient-text">answer</span><br /> you needs
                </h2>
            </div>

            <div className="accordion accordion-flush w-100 w-md-50 mx-auto" id="accordionFlushExample">
                <div className="accordion-item" data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion
                            body.</div>
                    </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-delay="500">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion
                            body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-delay="600">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to
                            demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion
                            body. Nothing more exciting happening here in terms of content, but just filling up the
                            space to make it look, at least at first glance, a bit more representative of how this would
                            look in a real-world application.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="testimonials my-8">
        <div className="container">

            <div className="d-flex flex-wrap flex-md-nowrap justify-content-between">
                <div className="mb-3" data-aos="fade-right">
                    <h6 className="text-primary text-uppercase section-title">testimonials</h6>
                    <h2 className="fw-bold display-5 section-subtitle">
                        Our client speaks highly of us, <br />why not <span className="gradient-text">try</span> it
                        yourself?
                    </h2>
                </div>

                <div className="swiper testimonialsSwiper" data-aos="fade-left">
                    {/* <!-- <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div> --> */}
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="card custom-bg custom-border-radius" style={{ maxWidth: "540px" }}>
                                <div className="card-body">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                            viewBox="0 0 48 48">
                                            <path fill="var(--bs-primary)" fillRule="evenodd"
                                                d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <p className="card-text my-4">Some quick example text to build on the card title and
                                        make up
                                        the bulk of the card's content.</p>

                                    <div className="reviewer d-flex align-items-center ">
                                        <Image src="/images/album/user.jpg" width={50} height={50} className="card-Image-top"
                                            alt="..."/>
                                        <div className="ms-3">
                                            <h5 className="m-0 fw-semibold">Suresh Ragavan</h5>
                                            <p className="text-custom m-0">Washing machine service</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card custom-bg custom-border-radius" style={{maxWidth: "540px"}}>
                                <div className="card-body">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                            viewBox="0 0 48 48">
                                            <path fill="var(--bs-primary)" fillRule="evenodd"
                                                d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <p className="card-text my-4">Some quick example text to build on the card title and
                                        make up
                                        the bulk of the card's content.</p>

                                    <div className="reviewer d-flex align-items-center ">
                                        <Image src="/images/album/user.jpg" width={50} height={50} className="card-Image-top"
                                            alt="..."/>
                                        <div className="ms-3">
                                            <h5 className="m-0 fw-semibold">Karthik</h5>
                                            <p className="text-custom m-0">Washing machine service</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card custom-bg custom-border-radius" style={{maxWidth: "540px"}}>
                                <div className="card-body">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                            viewBox="0 0 48 48">
                                            <path fill="var(--bs-primary)" fillRule="evenodd"
                                                d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <p className="card-text my-4">Some quick example text to build on the card title and
                                        make up
                                        the bulk of the card's content.</p>

                                    <div className="reviewer d-flex align-items-center ">
                                        <Image src="/images/album/user.jpg" width={50} height={50} className="card-Image-top"
                                            alt="..."/>
                                        <div className="ms-3">
                                            <h5 className="m-0 fw-semibold">Dhinesh Kumar</h5>
                                            <p className="text-custom m-0">Washing machine service</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card custom-bg custom-border-radius" style={{maxWidth: "540px"}}>
                                <div className="card-body">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                            viewBox="0 0 48 48">
                                            <path fill="var(--bs-primary)" fillRule="evenodd"
                                                d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <p className="card-text my-4">Some quick example text to build on the card title and
                                        make up
                                        the bulk of the card's content.</p>

                                    <div className="reviewer d-flex align-items-center ">
                                        <Image src="/images/album/user.jpg" width={50} height={50} className="card-Image-top"
                                            alt="..."/>
                                        <div className="ms-3">
                                            <h5 className="m-0 fw-semibold">Vignesh Mani</h5>
                                            <p className="text-custom m-0">Washing machine service</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card custom-bg custom-border-radius" style={{maxWidth: "540px"}}>
                                <div className="card-body">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                            viewBox="0 0 48 48">
                                            <path fill="var(--bs-primary)" fillRule="evenodd"
                                                d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <p className="card-text my-4">Some quick example text to build on the card title and
                                        make up
                                        the bulk of the card's content.</p>

                                    <div className="reviewer d-flex align-items-center ">
                                        <Image src="/images/album/user.jpg" width={50} height={50} className="card-Image-top"
                                            alt="..."/>
                                        <div className="ms-3">
                                            <h5 className="m-0 fw-semibold">Rajesh</h5>
                                            <p className="text-custom m-0">Washing machine service</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card custom-bg custom-border-radius" style={{maxWidth: "540px"}}>
                                <div className="card-body">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                            viewBox="0 0 48 48">
                                            <path fill="var(--bs-primary)" fillRule="evenodd"
                                                d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <p className="card-text my-4">Some quick example text to build on the card title and
                                        make up
                                        the bulk of the card's content.</p>

                                    <div className="reviewer d-flex align-items-center ">
                                        <Image src="/images/album/user.jpg" width={50} height={50} className="card-Image-top"
                                            alt="..."/>
                                        <div className="ms-3">
                                            <h5 className="m-0 fw-semibold">Dilip Kumar</h5>
                                            <p className="text-custom m-0">Washing machine service</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card custom-bg custom-border-radius" style={{maxWidth: "540px"}}>
                                <div className="card-body">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                            viewBox="0 0 48 48">
                                            <path fill="var(--bs-primary)" fillRule="evenodd"
                                                d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185"
                                                clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <p className="card-text my-4">Some quick example text to build on the card title and
                                        make up
                                        the bulk of the card's content.</p>

                                    <div className="reviewer d-flex align-items-center ">
                                        <Image src="/images/album/user.jpg" width={50} height={50} className="card-Image-top"
                                            alt="..."/>
                                        <div className="ms-3">
                                            <h5 className="m-0 fw-semibold">Parthiban</h5>
                                            <p className="text-custom m-0">Washing machine service</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </section>


    <section id="contact" className="contact text-white">
        <div className="container">
            <div className="text-center mb-5">
                <div className="w-100 d-flex align-items-center justify-content-center">
                    <h6 className="text-primary text-uppercase section-title">Contact Us</h6>
                </div>
                <h2 className="fw-bold display-5 section-subtitle">
                    Reach out for a <span className="gradient-text">service</span>
                </h2>
            </div>

            <div className="row g-4">
                <div className="col-md-8" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <iframe
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Easyfix Expert&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" className="custom-border-radius"></iframe>
                </div>
                <div className="col-md-4" data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <div className="custom-bg-dark custom-border-radius p-5">
                        <h5>
                            contact info
                        </h5>
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <h6>Where to Find Us</h6>
                                <address>
                                    #1, Subramaniyapuram, <br />1st Street South Extension, <br />State Bank Road,
                                    Karaikudi
                                </address>
                            </div>
                            <div className="col-md-12 mb-4">
                                <h6>Email Us At</h6>
                                <p>
                                    <a className="break" href="mailto:info@easyfixexpert.com">info@easyfixexpert.com</a>
                                </p>
                            </div>
                            <div className="col-md-12 mb-4">
                                <p className="d-flex align-items-center">
                                    <a href="http://www.w3.org/2000/svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
                                        </svg>
                                    </a>
                                    <a href="http://www.w3.org/2000/svg" className="ms-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
                                        </svg>
                                    </a>
                                    <a href="http://www.w3.org/2000/svg" className="ms-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor" fillRule="evenodd"
                                                d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13zm15-3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M14 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0m2 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0"
                                                clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
        

    )
}