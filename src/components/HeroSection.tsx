import { MessageCircle, Play } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-cleaning.jpg";

const WHATSAPP_URL = "https://wa.me/5511988120857?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Higienização profissional de estofados" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
    </div>

    <div className="container relative z-10 pt-20">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6 backdrop-blur-sm border border-secondary/20">
            <Play className="w-3 h-3 fill-current" />
            Higienização Profissional em Barueri e Região
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-6 text-balance"
        >
          Seu estofado{" "}
          <span className="text-secondary">como novo.</span>
          <br />
          Sua família protegida.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-lg leading-relaxed"
        >
          Eliminamos ácaros, bactérias e manchas com equipamentos profissionais. 
          Resultados visíveis na hora.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-success text-success-foreground rounded-full text-base font-bold hover:brightness-110 transition-all duration-200 shadow-prominent hover:shadow-dramatic whatsapp-pulse"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Orçamento Grátis
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground/10 text-primary-foreground rounded-full text-base font-semibold hover:bg-primary-foreground/20 transition-all duration-200 backdrop-blur-sm border border-primary-foreground/20"
          >
            Ver Serviços
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-6 mt-12 pt-8 border-t border-primary-foreground/10"
        >
          {[
            { value: "+2.000", label: "clientes" },
            { value: "5★", label: "no Google" },
            { value: "+3 anos", label: "de experiência" },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="text-xl font-bold text-primary-foreground tabular-nums">{stat.value}</span>
              <p className="text-xs text-primary-foreground/50 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
