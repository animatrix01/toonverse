import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard"; 
import CartoonCard from "@/components/CartoonCard";
import NeonBackground from "@/components/NeonBackground";
import ChannelSlider from "@/components/ChannelSlider";
import { Button } from "@/components/ui/button";
import { cartoons, categories } from "@/data/cartoons";
import tvLogo from "@/assets/tv-logo.png.png";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredCartoons = cartoons.filter((cartoon) => {
    const matchesSearch = cartoon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cartoon.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || cartoon.category.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <NeonBackground />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full min-h-[85vh] overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 z-0" />
        
        {/* TV Logo Container */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img
            src={tvLogo}
            alt="ToonVerse India TV"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-40 animate-float drop-shadow-2xl"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center px-4 pt-20 pointer-events-none">
          <div className="text-center w-full max-w-5xl mx-auto mb-12">
            <h1 className="font-display font-bold leading-tight mb-6">
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white drop-shadow-2xl">
                Relive Your Childhood
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground mt-4">
                with Your Favorite Hindi Cartoons!
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 font-medium">
              Watch classic cartoons from the early 2000s & 2010s
            </p>
          </div>

          {/* Channel Slider - positioned below TV with spacing */}
          <div className="w-full max-w-4xl mt-48 pointer-events-auto">
            <ChannelSlider />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none z-[5]" />
      </div>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-8 relative z-10">
        {/* Neon divider */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-6 opacity-50" />
        
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground">Discover your favorite cartoon genres</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              icon={category.icon}
              logo={category.logo}
              onClick={() => handleCategoryClick(category.name)}
              isSelected={selectedCategory === category.name}
            />
          ))}
        </div>
      </section>

      {/* Featured Cartoons Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        {/* Neon divider */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mb-12 opacity-50" />
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              {selectedCategory ? `${selectedCategory} Cartoons` : "Featured Cartoons"}
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              {selectedCategory ? "Filtered by category" : "Trending now"}
            </p>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div className="w-80">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
            {selectedCategory && (
              <Button variant="outline" onClick={() => setSelectedCategory(null)}>
                Clear Filter
              </Button>
            )}
          </div>
        </div>
        
        {filteredCartoons.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredCartoons.map((cartoon, index) => (
              <div 
                key={cartoon.id} 
                className="animate-bounce-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CartoonCard cartoon={cartoon} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-foreground/60 font-semibold">
              No cartoons found. Try a different search!
            </p>
          </div>
        )}
      </section>

      {/* Coming Soon Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        {/* Neon divider */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent mb-12 opacity-50" />
        
        <div className="glass rounded-[30px] p-10 md:p-16 text-center space-y-6 shadow-neon border-2 border-primary/30">
          <div className="text-6xl mb-4">🎬</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold bg-clip-text text-transparent bg-gradient-neon">
            More Cartoons Coming Soon!
          </h2>
          <p className="text-lg text-foreground/70 font-semibold max-w-2xl mx-auto">
            Have a favorite cartoon you want to see? Let us know and we'll add it to our collection! 💭
          </p>
          <Button 
            variant="gradient" 
            size="lg"
            onClick={() => navigate("/contact")}
          >
            Suggest a Cartoon
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
