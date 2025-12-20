import { Link } from "react-router-dom";
import { Cartoon } from "@/data/cartoons";
import { Badge } from "@/components/ui/badge";

interface CartoonCardProps {
  cartoon: Cartoon;
}

const CartoonCard = ({ cartoon }: CartoonCardProps) => {
  return (
    <Link to={`/cartoon/${cartoon.id}`}>
      <div className="group relative bg-[#11121A] rounded-md overflow-hidden shadow-card hover:shadow-[0_6px_22px_rgba(0,0,0,0.4),0_0_10px_rgba(255,180,70,0.15)] transition-all duration-300 hover:-translate-y-1 border border-[rgba(255,255,255,0.03)]">
        <div className="aspect-video overflow-hidden bg-black relative">
          <img
            src={cartoon.thumbnail}
            alt={cartoon.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Watch button on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gradient-to-r from-[#FF455E] to-[#FFB84C] text-[#0D0D11] px-6 py-3 rounded-md font-bold text-sm flex items-center gap-2">
              <span>▶</span> Watch
            </div>
          </div>
        </div>
        
        <div className="p-4 space-y-2">
          <h3 className="font-display font-bold text-base text-white truncate">
            {cartoon.title}
          </h3>
          <p className="text-sm text-[rgba(255,255,255,0.55)] line-clamp-2">
            {cartoon.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {cartoon.category.map((cat) => (
              <Badge key={cat} className="text-xs font-medium bg-[#FFD93D]/10 text-[#FFD93D] border-0">
                {cat}
              </Badge>
            ))}
          </div>
          <p className="text-xs text-[rgba(255,255,255,0.55)] font-semibold pt-1">{cartoon.year}</p>
        </div>
      </div>
    </Link>
  );
};

export default CartoonCard;
