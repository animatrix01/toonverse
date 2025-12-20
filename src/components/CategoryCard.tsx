interface CategoryCardProps {
  name: string;
  icon: string;
  logo?: string;
  onClick: () => void;
  isSelected?: boolean;
}

const CategoryCard = ({ name, icon, logo, onClick, isSelected }: CategoryCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-6 rounded-md border transition-all duration-300 hover:scale-105 ${
        isSelected
          ? "bg-[#FFD93D]/10 border-[#FFD93D] shadow-[0_0_10px_rgba(255,217,61,0.15)]"
          : "bg-[#11121A] border-[rgba(255,255,255,0.03)] shadow-card hover:border-[rgba(255,217,61,0.3)] hover:shadow-[0_0_10px_rgba(255,217,61,0.15)]"
      }`}
    >
      {logo ? (
        <div className="h-16 flex items-center justify-center mb-3">
          <img 
            src={logo} 
            alt={name} 
            className={`w-auto object-contain ${
              name === "Pogo" || name === "Nickelodeon" ? "max-h-16" : "max-h-12"
            }`} 
          />
        </div>
      ) : (
        <div className="text-4xl mb-3">{icon}</div>
      )}
      <p className={`font-display font-bold text-sm ${isSelected ? "text-[#FFD93D]" : "text-white"}`}>
        {name}
      </p>
    </button>
  );
};

export default CategoryCard;
