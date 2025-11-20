import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "91+91 98849 88988"; // Replace with actual number
  const message = encodeURIComponent(
    "Hi! I'm interested in starting my Herbalife journey with Newlife Wellness Centre."
  );

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 p-0 shadow-wellness-lg bg-[#25D366] hover:bg-[#20BA5A] text-white"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};

export default WhatsAppButton;
