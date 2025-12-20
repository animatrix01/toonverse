import { Link } from "react-router-dom";
import { Tv } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#0D0D11] backdrop-blur-md border-b border-[rgba(255,255,255,0.06)]" style={{ boxShadow: '0 2px 16px rgba(255, 180, 70, 0.08)' }}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-all duration-300 group">
          <img src={logo} alt="ToonVerse India" className="w-12 h-12 drop-shadow-lg group-hover:drop-shadow-2xl transition-all" />
          <div>
            <h1 className="text-2xl font-display font-bold text-white">
              ToonVerse India
            </h1>
            <p className="text-xs text-[rgba(255,255,255,0.55)] font-medium">Watch. Laugh. Relive your childhood.</p>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-[#FFD93D] transition-all font-semibold text-sm relative group" style={{ filter: 'brightness(0.85)' }}>
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD93D] group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/about" className="text-white hover:text-[#FFD93D] transition-all font-semibold text-sm relative group" style={{ filter: 'brightness(0.85)' }}>
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD93D] group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/contact" className="text-white hover:text-[#FFD93D] transition-all font-semibold text-sm relative group" style={{ filter: 'brightness(0.85)' }}>
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD93D] group-hover:w-full transition-all duration-300" />
          </Link>
        </div>
        
        <div className="md:hidden">
          <Tv className="w-6 h-6 text-[#FFD93D]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
