import { motion } from "framer-motion";

const ImpactSection = () => (
  <section className="py-24 md:py-32 bg-foreground relative overflow-hidden">
    {/* Subtle pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
        backgroundSize: "48px 48px"
      }} />
    </div>

    <div className="container relative z-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground italic leading-tight"
      >
        Não é só limpeza.
        <br />
        <span className="text-secondary">É Silver Higienização.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-primary-foreground/50 text-lg md:text-xl mt-6 max-w-xl mx-auto"
      >
        Limpamos, higienizamos e transformamos. Cuidado, saúde e renovação para sua família.
      </motion.p>
    </div>
  </section>
);

export default ImpactSection;
