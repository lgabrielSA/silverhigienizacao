import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511988120857?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

const Footer = () => (
  <footer className="py-12 bg-background border-t border-border">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#" className="font-display font-bold text-xl text-foreground">
            Silver Higienização<span className="text-secondary">.</span>
          </a>
          <p className="text-sm text-muted-foreground mt-1">
            Higienização profissional de estofados
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
          <a href="#como-funciona" className="hover:text-foreground transition-colors">Como Funciona</a>
          <a href="#resultados" className="hover:text-foreground transition-colors">Resultados</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-success hover:text-success/80 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Silver Higienização. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground">CNPJ: 54.777.394/0001-18</p>
      </div>
    </div>
  </footer>
);

export default Footer;
