import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    {
      image:
        "https://powermaccenter.com/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-US_6a996bb5-c9a4-429e-a37e-175572663ead.jpg?v=1695860839&width=1445",
      name: "iPhone 15 Pro",
      price: 999.99,
      description:
        "The latest Apple iPhone with A17 Bionic chip, 128GB storage, and ProMotion display.",
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-skyblue-select-202503?wid=892&hei=820&fmt=jpeg&qlt=90&.v=M2RyY09CWXlTQUp1KzEveHR6VXNxcTQ1bzN1SitYTU83Mm9wbk1xa1lWN2h4SGtCQ2R3aStVaDRhL2VUV1NjdkJkRlpCNVhYU3AwTldRQldlSnpRa0lIV0Fmdk9rUlVsZ3hnNXZ3K3lEVlk",
      name: "MacBook Air M2",
      price: 1199.0,
      description:
        "13-inch MacBook Air with Apple M2 chip, 8GB RAM, and 256GB SSD.",
    },
    {
      image:
        "https://m.media-amazon.com/images/S/aplus-media-library-service-media/d73d531c-b64d-4df3-a616-3a3043e53df8.__CR0,0,600,450_PT0_SX600_V1___.png",
      name: "Sony WH-1000XM5",
      price: 379.99,
      description:
        "Industry-leading noise-canceling over-ear headphones with 30 hours of battery life.",
    },
    {
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/ph/2307/gallery/ph-galaxy-watch6-classic-r955-sm-r950nzkaasa-537412559?$684_547_PNG$",
      name: "Samsung Galaxy Watch 6",
      price: 329.99,
      description: "Smartwatch with health tracking, GPS, and AMOLED display.",
    },
    {
      image:
        "https://static.nike.com/a/images/t_default/pysqd15onjaeugu8mh4l/AIR+MAX+270.png",
      name: "Nike Air Max 270",
      price: 150.0,
      description: "Comfortable and stylish sneakers with Nike Air cushioning.",
    },
    {
      image:
        "https://www.logitech.com/content/dam/logitech/en/products/mice/mx-master-3s/migration-assets-for-delorean-2025/gallery/mx-master-3s-top-view-graphite.png",
      name: "Logitech MX Master 3S",
      price: 99.99,
      description:
        "Advanced wireless mouse with ergonomic design and customizable buttons.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="product-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
