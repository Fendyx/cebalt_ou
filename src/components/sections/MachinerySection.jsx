import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cog, Wrench, Tractor } from "lucide-react";
import "./MachinerySection.css";

export default function MachinerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const machineryProducts = [
    {
      name: "Farm Vehicles",
      description:
        "Professional agricultural machinery for efficient farming operations",
      image:
        "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?q=80&w=1182&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Tractors", "Combine Harvesters", "Seeders & Planters", "Sprayers & Cultivators"],
    },
    {
      name: "Spare Parts",
      description: "Original and compatible parts for agricultural equipment maintenance",
      image:
        "https://images.unsplash.com/photo-1759419281480-bacc913c9606?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Engine Components", "Hydraulic Systems", "Filters & Bearings", "Wear Parts"],
    },
  ];

  return (
    <section id="machinery" className="machinery-section" ref={ref}>
      <div className="machinery-container">
        {/* Header */}
        <motion.div
          className="machinery-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="machinery-badge">Agricultural Machinery</span>
          <h2 className="machinery-title">
            Professional Farm Equipment & Parts
          </h2>
          <p className="machinery-subtitle">
            Reliable machinery and quality spare parts to support your agricultural operations
            year-round.
          </p>
        </motion.div>

        {/* Machinery Categories */}
        <div className="machinery-grid">
          {machineryProducts.map((product, index) => (
            <motion.div
              key={index}
              className="machinery-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="machinery-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="machinery-image"
                />
                <div className="machinery-image-overlay" />
              </div>
              <div className="machinery-card-content">
                <div className="machinery-card-header">
                  {index === 0 ? (
                    <Tractor className="machinery-icon" />
                  ) : (
                    <Cog className="machinery-icon" />
                  )}
                  <h3 className="machinery-card-title">{product.name}</h3>
                </div>
                <p className="machinery-card-desc">{product.description}</p>
                <ul className="machinery-items">
                  {product.items.map((item, idx) => (
                    <li key={idx} className="machinery-item">
                      <span className="bullet">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="machinery-cta"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Wrench className="cta-icon" />
          <h4 className="cta-title">Need Equipment or Parts?</h4>
          <p className="cta-text">
            We supply a wide range of agricultural machinery and spare parts. Contact our team
            for availability, pricing, and delivery options.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
