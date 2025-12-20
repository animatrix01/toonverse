import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white opacity-60" />
      <Input
        type="text"
        placeholder="Search cartoons..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 h-12 text-base rounded-md border border-[rgba(255,255,255,0.08)] bg-[#11121A] focus:border-[#FFD93D] focus:shadow-[0_0_0_1px_#FFD93D] shadow-card text-white placeholder:text-[rgba(255,255,255,0.55)] transition-all font-medium"
      />
    </div>
  );
};

export default SearchBar;
