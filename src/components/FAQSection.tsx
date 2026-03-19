import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo demora o serviço?",
    a: "O tempo varia de acordo com o tamanho e tipo do estofado. Em média, uma higienização completa de sofá leva de 2 a 3 horas.",
  },
  {
    q: "Quanto tempo leva para secar?",
    a: "O tempo de secagem varia entre 4 a 8 horas, dependendo da ventilação e umidade do ambiente.",
  },
  {
    q: "Remove manchas antigas?",
    a: "Sim! Nosso processo profissional remove a grande maioria das manchas, inclusive as mais antigas. Algumas manchas muito profundas podem necessitar de tratamentos adicionais.",
  },
  {
    q: "O serviço é feito em casa?",
    a: "Sim! Vamos até o seu endereço com todos os equipamentos necessários. Você não precisa transportar nada.",
  },
  {
    q: "É seguro para pets e crianças?",
    a: "Totalmente seguro! Utilizamos produtos biodegradáveis e hipoalergênicos, seguros para toda a família, incluindo pets.",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-background" id="faq">
    <div className="container max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Dúvidas frequentes</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-surface rounded-xl px-6 border-none shadow-soft"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
