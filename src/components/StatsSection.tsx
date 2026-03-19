import { motion } from "framer-motion";
import statsImg from "@/assets/stats-cleaning.jpg";

const stats = [
  { value: "+2.000", label: "clientes atendidos" },
  { value: "+8.000", label: "peças higienizadas" },
  { value: "+3 anos", label: "de experiência" },
  { value: "5 estrelas", label: "no Google" },
];

const StatsSection = () => (
  <section className="section-padding bg-surface">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">
            Sua Escolha Certa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance">
            Confiança de quem entende de{" "}
            <span className="text-secondary">limpeza premium</span>
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-4 rounded-xl bg-background shadow-soft"
              >
                <span className="text-2xl md:text-3xl font-extrabold text-foreground tabular-nums block">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground mt-1 block">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-dramatic">
            <img
              src={statsImg}
              alt="Equipamento profissional de higienização"
              className="w-full h-80 md:h-[420px] object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-secondary/10 -z-10" />
          <div className="absolute -top-4 -right-4 w-32 h-32 rounded-2xl bg-secondary/5 -z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default StatsSection;
