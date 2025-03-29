// src/app/services/water-heater/page.js

import Link from "next/link";
import Navbar from "../navbar";
import address from '../../dataStore/addresses.json'

export const metadata = {
    title: 'EasyFix Expert - Water Heater',
  };
  
  export default function WaterHeaterPage({city}: {city: keyof typeof address.locations}) {
    return (
      <>
        {/* NAVBAR */}
        <Navbar/>
  
        {/* FOOTER */}
        <footer className="footer d-flex align-items-center" id="footer">
          <div className="container">
            <div className="row g-4 p-2 row-cols-sm-3 row-cols-md-4">
              <div className="col-md-4">
                <h2 className="mb-4 fw-bold text-white">
                  EasyFix Expert
                </h2>
                <p className="footer-brief">
                  An application developer’s typical responsibilities include coding, designing, application
                  management, troubleshooting, monitoring updates and possible security threats, and providing
                  end user support.
                </p>
              </div>
              <div className="col-md-4">
                <h6 className="text-white">Quick Links</h6>
                <ul>
                  <li><Link href="#" className="cursorp">About</Link></li>
                  <li><Link href="#" className="cursorp">Home</Link></li>
                  <li><Link href="#" className="cursorp">Services</Link></li>
                  <li><Link href="#" className="cursorp">Contact</Link></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h6 className="text-white">Contact Information</h6>
                <ul>
                  <li>
                    <span className="iconcontainer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                          fill="inherit"
                          d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5"
                        />
                      </svg>
                    </span>
                    {address.locations?.[city]?.line1}, <br/> {address.locations?.[city]?.line2}, <br/> {address.locations?.[city]?.line3}
                  </li>
                  <li>
                    <span className="iconcontainer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                          fill="inherit"
                          d="M18.93 20q-2.528 0-5.184-1.266t-4.935-3.555t-3.545-4.935T4 5.07q0-.458.3-.763T5.05 4h2.473q.408 0 .712.257t.411.659L9.142 7.3q.07.42-.025.733t-.333.513L6.59 10.592q.616 1.117 1.361 2.076t1.59 1.817q.87.87 1.874 1.62q1.004.749 2.204 1.414l2.139-2.177q.244-.263.549-.347q.304-.083.674-.033l2.103.43q.408.1.662.411t.254.712v2.435q0 .45-.306.75t-.763.3M6.12 9.654l1.92-1.765q.095-.077.124-.212q.03-.135-.01-.25l-.443-2.12q-.039-.153-.135-.23T7.327 5H5.275q-.115 0-.192.077t-.077.192q.029 1.025.321 2.14t.794 2.245m8.45 8.334q1.014.502 2.16.743q1.148.24 2 .257q.115 0 .192-.077T19 18.72v-2.008q0-.153-.077-.25q-.077-.096-.23-.134l-1.85-.379q-.116-.039-.203-.01q-.086.03-.182.125zm0 0"
                        />
                      </svg>
                    </span>
                    <Link href="tel:++917550331197">+91 75503 31197</Link>
                    <br />
                    <Link href="tel:+918428431197">+91 84284 31197</Link>
                  </li>
                  <li>
                    <span className="iconcontainer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                          fill="inherit"
                          d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z"
                        />
                      </svg>
                    </span>
                    <Link href="mailto:info@easyfixexpert.com">info@easyfixexpert.com</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <p className="text-center">
                  This website is made with
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                      />
                    </svg>
                  </span>{' '}
                  by{' '}
                  <Link href="https://salmank07.github.io/">Pixel Crafted Dreams</Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
  
        {/* (OPTIONAL) JUMBOTRON SECTION
            If you want to enable that code, just uncomment and convert it to JSX here. */}
        {/*
        <div id="smooth-wrapper" data-scroll-container>
          <div id="smooth-content">
            <div className="container">
              <section id="jumbotron" className="my-4" data-scroll-section>
                <div className="bg-light p-5">
                  <h1
                    data-scroll
                    data-scroll-speed="1"
                    data-scroll-sticky
                    data-scroll-target="#jumbotron"
                  >
                    Hello, world!
                  </h1>
                  <div className="d-flex">
                    <p data-scroll data-scroll-speed="7" data-scroll-direction="horizontal">
                      This is a jumbotron example...
                    </p>
                    ...
                  </div>
                  <p>
                    <Link
                      className="btn btn-primary btn-lg"
                      href="https://getbootstrap.com/docs/4.1/components/jumbotron/"
                      role="button"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
        */}
      </>
    );
  }
  