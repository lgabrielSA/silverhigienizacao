import { Clock, Home, Wrench, ShieldCheck, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

const diffs = [
  { icon: Clock, label: "Atendimento rápido" },
  { icon: Home, label: "Serviço na sua casa" },
  { icon: Wrench, label: "Equipamentos profissionais" },
  { icon: ShieldCheck, label: "Seguro para pets e crianças" },
];

const DifferentialsSection = () => (
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
          Por que escolher a <span className="text-secondary">Silver?</span>
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
        {diffs.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-center gap-3 w-36 md:w-40 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center shadow-soft group-hover:shadow-elevated group-hover:bg-secondary/10 transition-all duration-300">
              <d.icon className="w-7 h-7 text-foreground group-hover:text-secondary transition-colors" />
            </div>
            <span className="text-sm font-semibold text-foreground text-center leading-snug">
              {d.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
