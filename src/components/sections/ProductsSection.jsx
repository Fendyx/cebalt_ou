import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wheat, Apple, Sprout } from "lucide-react";
import "./ProductsSection.css";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const grainProducts = [
    {
        name: "Rapeseed flower",
        description: "High-quality rapeseed for oil production and animal feed",
        image:
            "https://images.unsplash.com/photo-1654415195216-74c3280dd120?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Wheat",
      description: "Premium quality wheat varieties for diverse applications",
      image:
        "https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Corn",
      description: "High-yield corn for food, feed, and industrial use",
      image:
        "https://images.unsplash.com/photo-1649251037465-72c9d378acb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sunflower",
      description: "Premium sunflower seeds and oil-grade sunflowers",
      image:
        "https://images.unsplash.com/photo-1589430940232-2a7ffa0f1953?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const fruitProducts = [
    {
      name: "Apples & Pears",
      description: "Fresh, crisp apples and pears from select orchards",
      image:
        "https://images.unsplash.com/photo-1610397962076-02407a169a5b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Grapes",
      description: "Premium table grapes and wine grapes",
      image:
        "https://images.unsplash.com/photo-1745670922388-cc34082bb8cb?fm=jpg&q=80&w=1080",
    },
  ];

  return (
    <section id="products" className="products" ref={ref}>
      <div className="products__container">
        {/* Header */}
        <motion.div
          className="products__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="products__label">Our Products</span>
          <h2 className="products__title">
            Premium Agricultural Commodities
          </h2>
          <p className="products__subtitle">
            We source and deliver the highest quality grains, oilseeds, and fresh fruits
            to markets worldwide.
          </p>
        </motion.div>

        {/* Grains */}
        <div className="products__block">
          <motion.div
            className="products__block-title"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Wheat size={32} />
            <h3>Grains & Oilseeds</h3>
          </motion.div>

          <div className="products__grid products__grid--3">
            {grainProducts.map((product, index) => (
              <motion.div
                key={index}
                className="product-card"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="product-card__image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-card__overlay" />
                </div>
                <div className="product-card__content">
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fruits */}
        <div className="products__block">
          <motion.div
            className="products__block-title"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Apple size={32} />
            <h3>Fresh Fruits</h3>
          </motion.div>

          <div className="products__grid products__grid--2">
            {fruitProducts.map((product, index) => (
              <motion.div
                key={index}
                className="product-card"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="product-card__image product-card__image--large">
                  <img src={product.image} alt={product.name} />
                  <div className="product-card__overlay" />
                </div>
                <div className="product-card__content">
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <motion.div
          className="products__note"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Sprout size={48} />
          <h4>Need Something Specific?</h4>
          <p>
            We also trade rapeseed, barley, and other agricultural commodities.
            Contact us for custom orders and inquiries.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
