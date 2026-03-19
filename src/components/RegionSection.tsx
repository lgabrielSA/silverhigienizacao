import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const cities = ["Barueri", "Osasco", "Carapicuíba", "Santana de Parnaíba"];

const RegionSection = () => (
  <section className="section-padding bg-surface">
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Região de atendimento</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {cities.map((city) => (
          <span
            key={city}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background shadow-soft text-sm font-medium text-foreground"
          >
            <MapPin className="w-4 h-4 text-success" />
            {city}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default RegionSection;
