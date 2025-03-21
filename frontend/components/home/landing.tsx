"use client"
export default function LandingPage() {
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
        </>
    )
}