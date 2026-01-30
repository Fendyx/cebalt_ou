import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wheat, Apple, Sprout, Carrot } from "lucide-react";
import "./ProductsSection.css";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const grainProducts = [
    {
      name: "Rapeseed flower",
      description: "High-quality rapeseed for oil production and animal feed",
      image:
        "https://images.unsplash.com/photo-1654415195216-74c3280dd120?q=80&w=1170&auto=format&fit=crop",
    },
    {
      name: "Wheat",
      description: "Premium quality wheat varieties for diverse applications",
      image:
        "https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1074&auto=format&fit=crop",
    },
    {
      name: "Corn",
      description: "High-yield corn for food, feed, and industrial use",
      image:
        "https://images.unsplash.com/photo-1649251037465-72c9d378acb6?q=80&w=1170&auto=format&fit=crop",
    },
    {
      name: "Sunflower",
      description: "Premium sunflower seeds and oil-grade sunflowers",
      image:
        "https://images.unsplash.com/photo-1589430940232-2a7ffa0f1953?q=80&w=1170&auto=format&fit=crop",
    },
    {
        name: "Oats",
        description: "Nutritious oats for food and feed applications",
        image:
          "https://images.unsplash.com/photo-1676289124506-bdce1e1acc97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Barley",
        description: "Versatile barley for malting, feed, and food uses",
        image:
          "https://images.unsplash.com/photo-1582363476910-3223e5fd0b32?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
  ];

  const fruitProducts = [
    {
      name: "Apples",
      description: "Fresh, crisp apples from select orchards",
      image:
        "https://images.unsplash.com/photo-1610397962076-02407a169a5b?q=80&w=1074&auto=format&fit=crop",
    },
    {
        name: "Pears",
        description: "Juicy and flavorful pears for fresh eating and processing",
        image:
          "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    {
      name: "Grapes",
      description: "Premium table grapes and wine grapes",
      image:
        "https://images.unsplash.com/photo-1745670922388-cc34082bb8cb?fm=jpg&q=80&w=1080",
    },
    {
      name: "Cherries",
      description: "High-quality cherries for fresh consumption and processing",
      image:
        "https://images.unsplash.com/photo-1594150749328-c7288bf2eb0b?q=80&w=1170&auto=format&fit=crop",
    },
  ];

  const vegetableProducts = [
    {
      name: "Tomatoes",
      description: "Fresh, vine-ripened tomatoes for salads and cooking",
      image:
        "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?q=80&w=1170&auto=format&fit=crop",
    },
    {
      name: "Sweet Pepper",
      description: "Vibrant sweet peppers in various colors for fresh use",
      image:
        "https://images.unsplash.com/photo-1506365069540-904bcc762636?q=80&w=1170&auto=format&fit=crop",
    },
    {
      name: "Cucumbers",
      description: "Fresh cucumbers for salads and pickling",
      image:
        "https://images.unsplash.com/photo-1568584711271-6c929fb49b60?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Carrot",
        description: "Crunchy and sweet carrots for fresh consumption and processing",
        image:
          "https://images.unsplash.com/photo-1633380110125-f6e685676160?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            We source and deliver the highest quality grains, oilseeds, fruits,
            and vegetables worldwide.
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

        {/* Vegetables */}
        <div className="products__block">
          <motion.div
            className="products__block-title"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Carrot size={32} />
            <h3>Fresh Vegetables</h3>
          </motion.div>

          <div className="products__grid products__grid--2">
            {vegetableProducts.map((product, index) => (
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
