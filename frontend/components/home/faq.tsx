"use client"
/* eslint-disable react/no-unescaped-entities */

export default function Faq(){
    return <>
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
    </section></>
}