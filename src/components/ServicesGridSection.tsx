import { Sofa, BedDouble, Armchair, ChevronRight, Layers, ShieldCheck, Car } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Sofa, label: "Sofá" },
  { icon: BedDouble, label: "Colchão" },
  { icon: Armchair, label: "Cadeira" },
  { icon: Car, label: "Veículo" },
  { icon: Layers, label: "Tapete" },
  { icon: ShieldCheck, label: "Blindagem" },
];

const ServicesGridSection = () => (
  <section className="section-padding bg-background" id="servicos-rapido">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          O que você precisa{" "}
          <span className="text-secondary">limpar hoje?</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 max-w-4xl mx-auto">
        {services.map((service, i) => (
          <motion.a
            key={service.label}
            href="#servicos"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group flex flex-col items-center gap-3 p-4 md:p-6 rounded-2xl bg-surface hover:bg-secondary/5 transition-all duration-300 hover:shadow-elevated cursor-pointer"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-background flex items-center justify-center shadow-soft group-hover:shadow-elevated group-hover:bg-secondary/10 transition-all duration-300">
              <service.icon className="w-6 h-6 md:w-7 md:h-7 text-foreground group-hover:text-secondary transition-colors" />
            </div>
            <span className="text-xs md:text-sm font-semibold text-foreground uppercase tracking-wider">
              {service.label}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGridSection;
