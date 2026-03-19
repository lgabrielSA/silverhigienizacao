import { MessageCircle, Camera, FileText, CalendarCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: MessageCircle, step: "Passo 1", title: "Chame no WhatsApp" },
  { icon: Camera, step: "Passo 2", title: "Envie fotos" },
  { icon: FileText, step: "Passo 3", title: "Receba orçamento" },
  { icon: CalendarCheck, step: "Passo 4", title: "Agende o horário" },
  { icon: Sparkles, step: "Passo 5", title: "Serviço no local" },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-background" id="como-funciona">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Como funciona</h2>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* Connection line */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center relative"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-foreground flex items-center justify-center mb-4 relative z-10 shadow-prominent">
                <s.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1">
                {s.step}
              </span>
              <span className="text-sm font-semibold text-foreground">{s.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
