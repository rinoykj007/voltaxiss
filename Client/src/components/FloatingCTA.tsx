import { useState } from "react";
import { Phone, Mail, MessageCircle, X, Building2, Briefcase } from "lucide-react";
import { CONTACT_INFO, getWhatsAppLink } from "@/constants/contact";

interface FloatingCTAProps {
  email?: string;
}

const FloatingCTA = ({
  email = CONTACT_INFO.email,
}: FloatingCTAProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
    setIsOpen(false);
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
    setIsOpen(false);
  };

  const handleWhatsApp = (type: 'showroom' | 'trading') => {
    window.open(getWhatsAppLink(type, CONTACT_INFO.messages.general), "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Backdrop with blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Button Container */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3 md:gap-4">
        {/* Action Buttons - Modern Cards */}
        {isOpen && (
          <div className="flex flex-col gap-2 md:gap-3 animate-in slide-in-from-bottom-5 fade-in duration-300 max-h-[calc(100vh-120px)] overflow-y-auto pr-2">
            {/* WhatsApp Buttons Container */}
            <div className="bg-white/95 backdrop-blur-xl rounded-xl md:rounded-2xl shadow-2xl border border-gray-200/50 p-2 md:p-3 space-y-1.5 md:space-y-2 w-[280px] md:w-auto">
              <div className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 md:px-3 py-0.5 md:py-1">
                WhatsApp
              </div>

              {/* Showroom */}
              <button
                onClick={() => handleWhatsApp('showroom')}
                className="group flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#25D366] to-[#20BA5A] text-white px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95 md:hover:scale-105 w-full"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all flex-shrink-0">
                  <Building2 className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex flex-col items-start min-w-0">
                  <span className="font-semibold text-xs md:text-sm">Showroom</span>
                  <span className="text-[10px] md:text-xs opacity-90 truncate max-w-[180px]">{CONTACT_INFO.whatsapp.showroom.number}</span>
                </div>
              </button>

              {/* Trading */}
              <button
                onClick={() => handleWhatsApp('trading')}
                className="group flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#128C7E] to-[#0E7A6F] text-white px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95 md:hover:scale-105 w-full"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all flex-shrink-0">
                  <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex flex-col items-start min-w-0">
                  <span className="font-semibold text-xs md:text-sm">Trading</span>
                  <span className="text-[10px] md:text-xs opacity-90 truncate max-w-[180px]">{CONTACT_INFO.whatsapp.trading.number}</span>
                </div>
              </button>
            </div>

            {/* Contact Options Container */}
            <div className="bg-white/95 backdrop-blur-xl rounded-xl md:rounded-2xl shadow-2xl border border-gray-200/50 p-2 md:p-3 space-y-1.5 md:space-y-2 w-[280px] md:w-auto">
              <div className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 md:px-3 py-0.5 md:py-1">
                Other Options
              </div>

              {/* Email */}
              <button
                onClick={handleEmail}
                className="group flex items-center gap-2 md:gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95 md:hover:scale-105 w-full"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all flex-shrink-0">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="font-semibold text-xs md:text-sm">Email Us</span>
              </button>

              {/* Phone Buttons */}
              <button
                onClick={() => handleCall(CONTACT_INFO.whatsapp.showroom.number)}
                className="group flex items-center gap-2 md:gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95 md:hover:scale-105 w-full"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all flex-shrink-0">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex flex-col items-start min-w-0">
                  <span className="font-semibold text-xs md:text-sm">Call Showroom</span>
                  <span className="text-[10px] md:text-xs opacity-90 truncate max-w-[180px]">{CONTACT_INFO.whatsapp.showroom.number}</span>
                </div>
              </button>

              <button
                onClick={() => handleCall(CONTACT_INFO.whatsapp.trading.number)}
                className="group flex items-center gap-2 md:gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95 md:hover:scale-105 w-full"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all flex-shrink-0">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex flex-col items-start min-w-0">
                  <span className="font-semibold text-xs md:text-sm">Call Trading</span>
                  <span className="text-[10px] md:text-xs opacity-90 truncate max-w-[180px]">{CONTACT_INFO.whatsapp.trading.number}</span>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Main Toggle Button - Modern Gradient */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl transition-all duration-500 transform active:scale-95 md:hover:scale-110 ${
            isOpen
              ? "bg-gradient-to-br from-red-500 to-red-600 rotate-90"
              : "bg-gradient-to-br from-primary to-primary/80"
          }`}
        >
          <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
          <div className="relative flex items-center justify-center">
            {isOpen ? (
              <X className="w-6 h-6 md:w-7 md:h-7 text-white" />
            ) : (
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
            )}
          </div>

          {/* Notification Dot */}
          {!isOpen && (
            <span className="absolute top-0.5 right-0.5 md:top-1 md:right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
          )}
        </button>
      </div>
    </>
  );
};

export default FloatingCTA;
