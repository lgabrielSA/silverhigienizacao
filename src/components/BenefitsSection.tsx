import { Bug, Droplets, Heart, Smile, Shield } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { icon: Bug, title: "Eliminação de ácaros, fungos e bactérias" },
  { icon: Droplets, title: "Remoção de manchas e odores" },
  { icon: Heart, title: "Ambiente mais saudável" },
  { icon: Smile, title: "Mais conforto para sua família" },
  { icon: Shield, title: "Maior durabilidade do estofado" },
];

const BenefitsSection = () => (
  <section className="section-padding bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Benefícios da <span className="text-secondary">higienização</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-4 p-5 rounded-2xl bg-surface hover:shadow-elevated transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-300">
              <b.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold text-foreground leading-snug">{b.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
