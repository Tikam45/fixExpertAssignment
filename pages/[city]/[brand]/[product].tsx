
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
    console.log("eh");
    const res = await fetch(`http://localhost:3000/api?city=${encodeURIComponent(params.city)}&brand=${encodeURIComponent(params.brand)}&product=${encodeURIComponent(params.product)}`);
    const data = await res.json();
    console.log("daa", data)
    return {props: {data, params}};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DetailPage({data, params}: any) {
    console.log("hello", data, params)
    return(
        <>
            <div>
                This is a page generated dynamically
                <pre>{JSON.stringify(data)}</pre>
            </div>
        </>
    )
}