import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Award, Users, Leaf } from "lucide-react";
import "./AboutSection.css";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Globe, value: "10+", label: "Countries Served" },
    { icon: Award, value: "20+", label: "Years Experience" },
    { icon: Users, value: "100+", label: "Trusted Partners" },
    { icon: Leaf, value: "10K+", label: "Tons Traded Annually" },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about__container">
        <div className="about__grid">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="about__badge">About C.E. Balt OU</span>

            <h2 className="about__title">
              Your Trusted Partner in Agricultural Trade
            </h2>

            <p className="about__text">
              C.E. Balt OU is a leading international agricultural trading and
              logistics company, specializing in the trade of high-quality
              grains, oilseeds, and fresh fruits across global markets.
            </p>

            <p className="about__text">
              With decades of experience and a commitment to excellence, we
              connect producers and buyers worldwide, ensuring seamless supply
              chain management from farm to destination.
            </p>

            <p className="about__text">
              We pride ourselves on reliability, transparency, and building
              long-lasting partnerships based on trust and mutual growth.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about__image-wrapper"
          >
            <div className="about__image">
              <img
                src="https://images.unsplash.com/photo-1759272548457-12b8580bfca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Agricultural Logistics"
              />
              <div className="about__overlay" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="about__stats"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="about__stat"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <stat.icon className="about__stat-icon" />
              <div className="about__stat-value">{stat.value}</div>
              <div className="about__stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
