

import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/scss/_bootstrap.scss"
import "@/styles/scss/_bootstrap.scss";
import "@/styles/scss/_fonts.scss";
import "@/styles/scss/_variables.scss";
import "@/styles/scss/main.scss";
import "@/styles/scss/components/slider.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WashingMachinePage from '@/components/products/washingMachine';
import AirConditionerPage from '@/components/products/ac';
import WaterHeaterPage from '@/components/products/waterHeater';
import OvenPage from '@/components/products/oven';
import FridgePage from '@/components/products/fridge';
import DishWasher from '@/components/products/dishWasher';

export async function getStaticPaths(){
    const cities = ["Karaikudi", "Madurai", "Chennai", "Coimbatore", "Tirpur"];
    const brands = ["Daikin", "Samsung" , "LG", "Whirlpool", "Godrej"];
    const products = ["AC", "Fridge", "WashingMachine", "dishWasher", "oven", "waterHeater"];

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
export default function DetailPage({params}: {
	params: {
		city: string,
		brand: string,
		product: string,
	}
}) {
    const {city, brand, product} = params;

    return(
        <> 
			{
				product === "WashingMachine" && <WashingMachinePage city={city}/>
			}
			{
				product === "AC" && <AirConditionerPage city={city}/>
			}
			{
				product === "WaterHeater" && <WaterHeaterPage/>
			}
			{
				product === "oven" && <OvenPage/>
			}
			{
				product === "Fridge" && <FridgePage/>
			}
			{
				product === "DishWasher" && <DishWasher/>
			}
        </>
    )
}