
export async function getStaticPaths(){
    const cities = ["Karaikudi", "Madurai", "Chennai", "Coimbatore", "Tirpur"];
    const brands = ["Daikin", "Samsung" , "LG", "Whirlpool", "Godrej"];
    const products = ["AC", "Fridge", "Washing-Machine"];

    const paths : {params: {
        city: string
        brand: string
        product: string
    }}[] = [];
    cities.forEach((city) => {
        brands.forEach((brand) => {
            products.forEach((product) => {
                paths.push({params : {city, brand, product}});
            })
        })
    })
    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}: {
    params: {
        city: string
        brand: string
        product: string
    }}) {
    // console.log("eh");
    // const res = await fetch(`http://localhost:3000/api?city=${encodeURIComponent(params.city)}&brand=${encodeURIComponent(params.brand)}&product=${encodeURIComponent(params.product)}`);
    // const data = await res.json();
    // console.log("daa", data)
    return {props: { params}};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DetailPage({params}: any) {
    const {city, brand, product} = params;

    return(
        <>
            <div>
                <section className="Booking-form">
			<div className="container">
				<div className="booking-form p-4 w-100 w-md-75 mx-auto shadow bg-white custom-border-radius">
					<form action="">
						<div className="row g-4 align-items-end">
							<div className="col-md-4">
								<label htmlFor="exampleInputEmail1" className="form-label">Name</label>
								<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
							</div>
							<div className="col-md-4">
								<label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
								<input className="form-control" id="exampleInputPassword1" />
							</div>
							<div className="col-md-4">
								<button type="submit" className="btn btn-primary rounded-pill w-100 p-2">Book Now</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
		<section className="intro my-10">
			<div className="container">
				<div className="row">
					<h2 className="fw-bold text-center display-5 section-subtitle">{brand} {product} Service and Repair Centre in
						<span className="gradient-text">{city}</span>
					</h2>
					<p className="text-center text-custom-light">Looking for reliable {brand} air conditioner service in {city}? Our {brand} {product} Service Centre in {city} provides expert solutions for all types of {brand} air conditioners, including split AC, window AC, inverter AC, and central air conditioning units.</p>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="p-3 p-md-5 custom-bg custom-border-radius">
							<h6 className="text-primary text-uppercase section-title">{brand} </h6>
							<h2 className="fw-bold display-5 section-subtitle"> {brand} 
								<span className="gradient-text"> {product} </span>
								Repair Service center in {city}</h2>
							<p>Are you facing issues with your air conditioner? Whether it's a minor repair, routine maintenance, or a major breakdown, we are here to provide expert solutions for all your air conditioning needs. Our skilled technicians offer top-notch {product} repair, installation, and servicing for both residential and commercial spaces.</p>
							<ul className="list-group list-group-flush mt-4">
								<li className="list-group-item d-flex align-items-center">
									<span className="">
										<img src="images/album/icon-park-solid--check-one.svg" width="24" height="24" className="me-4" alt="tick-icon"/>
									</span>Skilled Technicians</li>
								<li className="list-group-item d-flex align-items-center">
									<span className="">
										<img src="images/album/icon-park-solid--check-one.svg" width="24" height="24" className="me-4" alt="tick-icon"/>
									</span>Affordable and Transparent</li>
								<li className="list-group-item d-flex align-items-center">
									<span className="">
										<img src="images/album/icon-park-solid--check-one.svg" width="24" height="24" className="me-4" alt="tick-icon"/>
									</span>Quick Service</li>
								<li className="list-group-item d-flex align-items-center">
									<span className="">
										<img src="images/album/icon-park-solid--check-one.svg" width="24" height="24" className="me-4" alt="tick-icon"/>
									</span>All Brands Supported</li>
							</ul>
						</div>
					</div>
					<div className="col-md-6">
						<img src="images/album/pngwing.com (1).png" width="100%" height="100%" alt="{brand} {product} service centre"/>
					</div>
				</div>
			</div>
		</section>
		<section className="why-us-brand my-10">
			<div className="container">
				<div className="mb-5">
					<h6 className="text-primary text-uppercase section-title">Why Choose us?</h6>
					<h2 className="fw-bold display-5 section-subtitle">Why Choose {brand} {product} Repair<br/>Services at
						<span className="gradient-text">us</span>?</h2>
					<p className="text-custom-light w-100 w-md-50">At Easyfix Expert, we specialize in providing expert {brand} {product} repair and maintenance services in {city} and the surrounding areas. We are dedicated to ensuring that your {brand} air conditioning unit runs smoothly, efficiently, and lasts for many years. Here's why you should trust us for all your {brand} AC repair and service needs:</p>
				</div>
				<div className="row row-cols-1 row-cols-md-4 g-4">
					<div className="col">
						<div className="service-card border">
							<div className="icon-box">
								<img src="images/album/token--trust.svg" width="32" height="32" alt="token-trust-icon"/>
							</div>
							<div className="services-content">
								<h5 className="service-title fw-semibold">Certified {brand} {product} Technicians</h5>
								<p>At Easyfix Expert, our technicians are fully trained and certified to handle all {brand} {product} models. We have the expertise to quickly diagnose and repair issues specific to {brand}'s advanced cooling technology, ensuring your {product} runs at its best.</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="service-card border">
							<div className="icon-box">
								<img src="images/album/la--tools.svg" width="32" height="32" alt="tools-icon"/>
							</div>
							<div className="services-content">
								<div>
									<h5 className="service-title fw-semibold">Genuine {brand} Parts for Reliable Repairs</h5>
									<p>We prioritize using genuine {brand} parts for any replacements, ensuring the longevity and efficiency of your air conditioner. Using authentic components helps maintain your warranty and guarantees high-quality repairs.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="service-card border">
							<div className="icon-box">
								<img src="images/album/fluent--fast-acceleration-20-regular.svg" width="32" height="32" alt="fast-accleration-icon"/>
							</div>
							<div className="services-content">
								<div>
									<h5 className="service-title fw-semibold">Fast and Efficient Service</h5>
									<p>We understand the urgency of a malfunctioning AC, especially during the hot months. Our team provides quick and efficient repairs to restore comfort to your home or office as soon as possible. Whether it's a minor issue or a major repair, we work swiftly without compromising on quality.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="service-card border">
							<div className="icon-box">
								<img src="images/album/carbon--review.svg" width="32" height="32" alt="carbon-review-icon"/>
							</div>
							<div className="services-content">
								<div>
									<h5 className="service-title fw-semibold">Customer Satisfaction Guarantee</h5>
									<p>We are committed to delivering excellent service. If you're not completely satisfied with our repairs, we'll do everything we can to make it right. Our goal is to ensure your {brand} {product} works flawlessly and you’re completely happy with our service.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="service-contact">
			<div className="text-center mb-5">
				<div className="w-100 d-flex align-items-center justify-content-center">
					<h6 className="text-primary text-uppercase section-title">Get in Touch with Us</h6>
				</div>
				<h2 className="fw-bold display-5 section-subtitle">Have a Question or Need Assistance?<br/>
					<span className="gradient-text">Contact Us</span>
					Today!</h2>
				<a href="#" className="btn btn-primary rounded-pill px-5" role="button" data-bs-toggle="button">Call Us</a>
			</div>
			<div className="booking-form p-4 w-100 w-md-50 mx-auto bg-white rounded-4">
				<h6 className="mb-4 text-custom fw-semibold text-center">
					<span className="me-2">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
							<path fill="var(--sk-text-custom-color)" fill-rule="evenodd" d="M11.25 2.5a2.25 2.25 0 0 0-2.154 2.904l.13.43l-.317.318l-6.254 6.253l-.53-.53l.53.53a.664.664 0 0 0 .94.94L9.848 7.09l.318-.318l.43.13a2.25 2.25 0 0 0 2.685-3.124l-1.5 1.501a.75.75 0 1 1-1.061-1.06l1.5-1.5a2.24 2.24 0 0 0-.97-.22ZM7.5 4.75a3.75 3.75 0 1 1 3.114 3.696L10.061 9l.939.94l.47-.47l.53-.53l.53.53l1.875 1.875a2.164 2.164 0 1 1-3.06 3.06L9.47 12.53L8.94 12l.53-.53l.47-.47l-.94-.94l-4.345 4.345l-.53-.53l.53.53a2.164 2.164 0 1 1-3.06-3.06L5.939 7L3.5 4.56l-.617.617l-.507-.761l-1-1.5l-.341-.512l.435-.434l.5-.5l.434-.435l.512.341l1.5 1l.761.507l-.616.617L7 5.94l.554-.554A4 4 0 0 1 7.5 4.75m4.5 6.31l1.345 1.345a.664.664 0 0 1-.94.94L11.061 12z" clip-rule="evenodd"></path>
						</svg>
					</span>For Service Booking</h6>
				<form id="submit-to-google-sheet">
					<div className="mb-3">
						<label htmlFor="name" className="form-label text-custom-light">Name</label>
						<input name="name" className="form-control" id="name" aria-describedby="nameHelp"/>
					</div>
					<div className="mb-3">
						<label htmlFor="phone" className="form-label text-body-tertiary">Phone Number</label>
						<input type="tel" name="phone" className="form-control" id="phone" pattern="[0-9]{10}" placeholder="Enter 10-digit phone number"/>
					</div>
					<button type="submit" className="btn btn-primary rounded-pill mt-3 w-100 p-2">Book Now</button>
				</form>
			</div>
		</section>

            </div>
        </>
    )
}