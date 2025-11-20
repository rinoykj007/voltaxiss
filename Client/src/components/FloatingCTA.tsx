import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, X } from "lucide-react";

interface FloatingCTAProps {
  phone?: string;
  email?: string;
  whatsapp?: string;
}

const FloatingCTA = ({
  phone = "+966591351561",
  email = "info@voltaxis.com",
  whatsapp = "+966591351561",
}: FloatingCTAProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCall = () => {
    window.location.href = `tel:${phone}`;
    setIsOpen(false);
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
    setIsOpen(false);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Button Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Action Buttons - Appear when open */}
        {isOpen && (
          <div className="flex flex-col gap-3 animate-in slide-in-from-bottom-2 fade-in duration-200">
            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              className="group flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <span className="font-medium text-sm whitespace-nowrap">
                WhatsApp
              </span>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
            </button>

            {/* Email Button */}
            <button
              onClick={handleEmail}
              className="group flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <span className="font-medium text-sm whitespace-nowrap">
                Email Us
              </span>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
            </button>

            {/* Call Button */}
            <button
              onClick={handleCall}
              className="group flex items-center gap-3 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <span className="font-medium text-sm whitespace-nowrap">
                Call Now
              </span>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
            </button>
          </div>
        )}

        {/* Main Toggle Button */}
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-2xl transition-all duration-300 ${
            isOpen
              ? "bg-red-500 hover:bg-red-600 rotate-90"
              : "bg-primary hover:bg-primary/90"
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>
      </div>
    </>
  );
};

export default FloatingCTA;
