import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function DishWasher() {
  return (
    <>
      <Head>
        <title>EasyFix Expert - Dish Washer</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {/* 3rd Party CSS */}
        <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      </Head>

      <main>
        {/* NAVBAR */}
        <div className="navbar-wrap p-4">
          <nav className="nav-main fixed-top border navbar rounded-4 navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link className="navbar-brand" href="#">
                <Image src="/images/Linklbum/easy-fix-logo-bg-removed-2.png" alt="brand logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#nav-main"
                aria-controls="nav-main"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="nav-main">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="#">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" href="#javascript">
                        Air Conditioner
                      </Link>
                      <Link className="dropdown-item" href="#html-and-css">
                        Washing Machine
                      </Link>
                      <Link className="dropdown-item" href="#javascript">
                        Fridge
                      </Link>
                      <Link className="dropdown-item" href="#javascript">
                        Dish Washer
                      </Link>
                      <Link className="dropdown-item" href="#javascript">
                        Water Heater
                      </Link>
                      <Link className="dropdown-item" href="#javascript">
                        Oven
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Since the original dish-washer.html contains only a navbar and a footer, 
            the main body content is omitted. You can add your page-specific content here if needed. */}

        {/* FOOTER */}
        <footer className="footer d-flex align-items-center" id="footer">
          <div className="container">
            <div className="row g-4 p-2 row-cols-sm-3 row-cols-md-4 ">
              <div className="col-md-4">
                <h2 className="mb-4 fw-bold text-white">EasyFix Expert</h2>
                <p className="footer-brief">
                  An application developer’s typical responsibilities include coding, designing, application management,
                  troubleshooting, monitoring updates and possible security threats, and providing end user support.
                </p>
              </div>
              <div className="col-md-4">
                <h6 className="text-white">Quick Links</h6>
                <ul>
                  <li>
                    <Link href="#" className="cursorp">Home</Link>
                  </li>
                  <li>
                    <Link href="#" className="cursorp">About</Link>
                  </li>
                  <li>
                    <Link href="#" className="cursorp">Services</Link>
                  </li>
                  <li>
                    <Link href="#" className="cursorp">Contact</Link>
                  </li>
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
                          d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7"
                        />
                      </svg>
                    </span>
                    #1, Subramaniyapuram, <br />1st Street South Extension, <br />State Bank Road, Karaikudi
                  </li>
                  <li>
                    <span className="iconcontainer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                          fill="inherit"
                          d="M18.93 20q-2.528 0-5.184-1.266t-4.935-3.555t-3.545-4.935T4 5.07q0-.458.3-.763T5.05 4h2.473q.408 0 .712.257t.411.659L9.142 7.3q.07.42-.025.733t-.333.513L6.59 10.592q.616 1.117 1.361 2.076t1.59 1.817q.87.87 1.874 1.62q1.004.749 2.204 1.414l2.139-2.177q.244-.263.549-.347q.304-.083.674-.033l2.103.43q.408.1.662.411t.254.712v2.435q0 .45-.306.75t-.763.3"
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
                  This website is made with{" "}
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                      />
                    </svg>
                  </span>{" "}
                  by{" "}
                  <Link href="https://salmank07.github.io/">Pixel Crafted Dreams</Link>
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* SCRIPTS */}
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="https://unpkg.com/kursor" strategy="lazyOnload" />
      </main>
    </>
  );
}