import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import ba1 from "@/assets/before-after-1.png";
import ba2 from "@/assets/before-after-2.png";
import ba3 from "@/assets/before-after-3.png";

const WHATSAPP_URL = "https://wa.me/5511988120857?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

const images = [
  { src: ba1, alt: "Antes e depois - Sofá" },
  { src: ba2, alt: "Antes e depois - Colchão" },
  { src: ba3, alt: "Antes e depois - Tapete" },
];

const BeforeAfterSection = () => (
  <section className="section-padding bg-surface" id="resultados">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold italic mb-3">
          Antes e depois que{" "}
          <span className="text-secondary">impressionam</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">
          Soluções profissionais em higienização para resultados impecáveis
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden shadow-prominent hover:shadow-dramatic transition-shadow duration-300"
          >
            <img src={img.src} alt={img.alt} className="w-full h-64 md:h-72 object-cover" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-center mt-10"
      >
        <p className="text-muted-foreground mb-5">
          Transformamos o que está sujo em um novo começo.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-bold hover:bg-primary/90 transition-all duration-200 shadow-elevated hover:shadow-prominent"
        >
          <MessageCircle className="w-5 h-5" />
          Solicite um Orçamento
        </a>
      </motion.div>
    </div>
  </section>
);

export default BeforeAfterSection;
