import ProductCard from "../component/product/ProductCard";
import "../pages/Shop.css";

const Shop = () => {

    const products = [

        {
            id: 1,
            name: "Solar Panel System",
            price: "$500",
            image:
                "https://images.unsplash.com/photo-1509391366360-2e959784a276",
        },

        {
            id: 2,
            name: "CCTV Camera",
            price: "$200",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475",
        },

        {
            id: 3,
            name: "Smart Lock",
            price: "$150",
            image:
                "https://images.unsplash.com/photo-1558002038-1055907df827",
        },

        {
            id: 4,
            name: "Inverter Battery",
            price: "$400",
            image:
                "https://images.unsplash.com/photo-1581092921461-eab62e97a780",
        },

        {
            id: 5,
            name: "Smart Lighting",
            price: "$120",
            image:
                "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
        },

        {
            id: 6,
            name: "Solar Street Light",
            price: "$250",
            image:
                "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
        },

    ];

    return (

        <section id="shop" className="shop">

            <h1>Our Products</h1>

            <div className="shop-grid">

                {products.map((product) => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                ))}

            </div>

        </section>

    );
};

export default Shop;