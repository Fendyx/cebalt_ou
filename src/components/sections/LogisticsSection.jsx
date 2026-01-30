import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Ship, Truck, Globe2, MapPin } from "lucide-react";
import "./LogisticsSection.css";

const LogisticsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const regions = [
    {
      name: "Europe",
      description: "Comprehensive coverage across EU member states",
      countries: ["Germany", "Poland", "Netherlands", "France", "Spain", "Italy"],
      gradient: "logistics__badge--blue",
    },
    {
      name: "South Caucasus",
      description: "Strategic partnerships in the Caucasus region",
      countries: ["Georgia", "Azerbaijan", "Armenia"],
      gradient: "logistics__badge--green",
    },
    {
      name: "Central Asia",
      description: "Expanding network in Kazakhstan and beyond",
      countries: ["Kazakhstan", "Uzbekistan", "Turkmenistan"],
      gradient: "logistics__badge--amber",
    },
    {
      name: "Asia",
      description: "Growing presence in Asian markets",
      countries: ["Turkey", "Iran", "UAE", "China"],
      gradient: "logistics__badge--purple",
    },
  ];

  const services = [
    {
      icon: Ship,
      title: "Sea Freight",
      description: "Bulk cargo shipping across international waters",
    },
    {
      icon: Truck,
      title: "Road Transport",
      description: "Reliable overland delivery throughout Europe and Asia",
    },
    {
      icon: Globe2,
      title: "Customs Clearance",
      description: "Expert handling of all documentation and regulations",
    },
    {
      icon: MapPin,
      title: "Warehousing",
      description: "Secure storage facilities at strategic locations",
    },
  ];

  return (
    <section id="logistics" className="logistics" ref={ref}>
      <div className="logistics__container">
        {/* Header */}
        <motion.div
          className="logistics__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="logistics__label">Logistics & Geography</span>
          <h2 className="logistics__title">
            Global Reach, Local Expertise
          </h2>
          <p className="logistics__subtitle">
            Our extensive logistics network ensures timely and secure delivery across
            multiple continents.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="logistics__image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="logistics__image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1768796373360-95d80c5830fb?fm=jpg&q=80&w=1080"
              alt="Modern Logistics"
            />
            <div className="logistics__image-overlay" />
            <div className="logistics__image-content">
              <h3>State-of-the-Art Infrastructure</h3>
              <p>
                Modern warehouses, temperature-controlled facilities, and advanced
                tracking systems ensure your products arrive in perfect condition.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <div className="logistics__services">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="logistics__service"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="logistics__service-icon">
                <service.icon size={32} />
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Regions */}
        <motion.div
          className="logistics__regions"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3 className="logistics__regions-title">Regional Coverage</h3>

          <div className="logistics__regions-grid">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                className="logistics__region-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <span
                  className={`logistics__badge ${region.gradient}`}
                >
                  {region.name}
                </span>
                <p className="logistics__region-desc">
                  {region.description}
                </p>
                <div className="logistics__countries">
                  {region.countries.map((country, idx) => (
                    <span key={idx} className="logistics__country">
                      {country}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogisticsSection;
