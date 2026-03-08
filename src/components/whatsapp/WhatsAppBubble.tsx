
"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppBubble() {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none">
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-xl text-white border-none"
        asChild
      >
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle className="h-8 w-8" />
        </a>
      </Button>
    </div>
  );
}
