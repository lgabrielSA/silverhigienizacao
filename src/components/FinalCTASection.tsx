import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5511988120857?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

const FinalCTASection = () => (
  <section className="py-24 md:py-32 bg-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]">
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />
    </div>

    <div className="container relative z-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-primary-foreground italic mb-4"
      >
        Não espere seu sofá piorar.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-primary-foreground/50 text-lg md:text-xl mb-10 max-w-lg mx-auto"
      >
        Agende agora sua higienização profissional e tenha estofados como novos.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-4 bg-success text-success-foreground rounded-full text-lg font-bold hover:brightness-110 transition-all duration-200 shadow-prominent hover:shadow-dramatic whatsapp-pulse"
        >
          <MessageCircle className="w-5 h-5" />
          Falar no WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
