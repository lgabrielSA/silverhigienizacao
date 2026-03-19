import { Sofa, BedDouble, Armchair, Layers, ShieldCheck, MessageCircle, Car } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5511988120857?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

const services = [
  {
    icon: Sofa,
    title: "Higienização de Sofá",
    desc: "Limpeza profunda que elimina sujeira invisível e devolve o aspecto de novo.",
    tag: "SOFÁ COMO NOVO",
  },
  {
    icon: BedDouble,
    title: "Higienização de Colchão",
    desc: "Sono mais saudável e livre de ácaros, fungos e bactérias.",
    tag: "NOITES MELHORES",
  },
  {
    icon: Armchair,
    title: "Higienização de Cadeiras",
    desc: "Cadeiras limpas, sem odores e prontas para o uso diário.",
    tag: "CONFORTO NO DIA A DIA",
  },
  {
    icon: Car,
    title: "Higienização de Veículo",
    desc: "Limpeza profunda e higienização completa do interior do veículo.",
    tag: "VISUAL RENOVADO",
  },
  {
    icon: Layers,
    title: "Tapetes e Carpetes",
    desc: "Remoção profunda de sujeira, manchas e alérgenos.",
    tag: "PISOS IMPECÁVEIS",
  },
  {
    icon: ShieldCheck,
    title: "Impermeabilização",
    desc: "Proteção extra contra líquidos, sujeira e desgaste.",
    tag: "PROTEÇÃO DURADOURA",
  },
];

const ServicesSection = () => (
  <section className="section-padding bg-surface" id="servicos">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Nossos serviços</h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">
          Soluções completas em higienização e impermeabilização para sua casa
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group p-6 bg-background rounded-2xl shadow-soft hover:shadow-prominent transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mb-5 group-hover:bg-secondary/10 transition-colors">
              <s.icon className="w-6 h-6 text-foreground group-hover:text-secondary transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              {s.tag}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-center mt-12"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-bold hover:bg-primary/90 transition-all duration-200 shadow-elevated hover:shadow-prominent"
        >
          <MessageCircle className="w-5 h-5" />
          Agende Agora
        </a>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
