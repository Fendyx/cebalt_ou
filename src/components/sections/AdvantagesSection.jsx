import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Users, TrendingUp, Award, Headphones } from "lucide-react";
import "./AdvantagesSection.css";

const AdvantagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const advantages = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous quality control at every stage, ensuring only premium products reach your facility.",
      colorClass: "advantages__icon--green",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "Efficient logistics network and real-time tracking guarantee on-time deliveries worldwide.",
      colorClass: "advantages__icon--blue",
    },
    {
      icon: Users,
      title: "Trusted Relationships",
      description:
        "Long-standing partnerships with producers and buyers built on transparency and reliability.",
      colorClass: "advantages__icon--purple",
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description:
        "Direct sourcing and optimized operations enable us to offer the best market rates.",
      colorClass: "advantages__icon--amber",
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description:
        "Decades of experience in agricultural trading and deep understanding of global markets.",
      colorClass: "advantages__icon--red",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Dedicated customer service team available around the clock to address your needs.",
      colorClass: "advantages__icon--teal",
    },
  ];

  return (
    <section id="advantages" className="advantages" ref={ref}>
      <div className="advantages__container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="advantages__header"
        >
          <span className="advantages__badge">Why Choose Us</span>
          <h2 className="advantages__title">Your Success is Our Priority</h2>
          <p className="advantages__text">
            Partner with C.E. Balt OU and experience the difference that dedication,
            expertise, and reliability make in agricultural trading.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="advantages__grid">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              className="advantages__card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={`advantages__icon ${adv.colorClass}`}>
                <adv.icon className="advantages__icon-svg" />
              </div>
              <h3 className="advantages__card-title">{adv.title}</h3>
              <p className="advantages__card-text">{adv.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="advantages__cta"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="advantages__cta-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1678716193852-e6ca47a46b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Global Trade"
              className="advantages__cta-image"
            />
            <div className="advantages__cta-overlay" />
            <div className="advantages__cta-content">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="advantages__cta-title"
              >
                Ready to Partner with Us?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="advantages__cta-text"
              >
                Join hundreds of satisfied partners worldwide who trust C.E. Balt OU for
                their agricultural trading needs.
              </motion.p>
              <motion.button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="advantages__cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                Get Started Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
