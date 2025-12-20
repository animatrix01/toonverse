import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0F] border-t border-[rgba(255,255,255,0.1)] mt-20 relative z-10">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-white font-bold text-lg">
            Made with <Heart className="w-5 h-5 text-[#FF455E] fill-[#FF455E] animate-pulse" /> by fans, for fans
          </div>
          
          <p className="text-sm text-[rgba(255,255,255,0.75)] font-medium max-w-2xl mx-auto">
            ToonVerse India is a nostalgia hub for 2000s kids to rediscover their favorite Hindi cartoons.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/" className="text-[rgba(255,255,255,0.75)] hover:text-[#FFD93D] transition-colors font-semibold">
              Home
            </a>
            <a href="/about" className="text-[rgba(255,255,255,0.75)] hover:text-[#FFD93D] transition-colors font-semibold">
              About
            </a>
            <a href="/contact" className="text-[rgba(255,255,255,0.75)] hover:text-[#FFD93D] transition-colors font-semibold">
              Contact
            </a>
          </div>
          
          <div className="w-full h-px bg-[rgba(255,255,255,0.06)] my-6" />
          
          <p className="text-xs text-[rgba(255,255,255,0.55)]">
            All videos are embedded from official YouTube sources. We do not host any copyrighted content.
          </p>
          <p className="text-xs text-[rgba(255,255,255,0.55)] font-semibold">
            © 2025 ToonVerse India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
