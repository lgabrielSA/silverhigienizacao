import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511988120857?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

export const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-success text-success-foreground rounded-full flex items-center justify-center shadow-dramatic hover:brightness-110 transition-all duration-200 whatsapp-pulse"
    aria-label="Contato WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);
