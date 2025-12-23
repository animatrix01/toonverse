import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeonBackground from "@/components/NeonBackground";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cartoons } from "@/data/cartoons";

const CartoonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cartoon = cartoons.find((c) => c.id === id);

  if (!cartoon) {
    return (
      <div className="min-h-screen flex flex-col relative">
        <NeonBackground />
        <Navbar />
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="text-center space-y-6">
            <div className="text-8xl">😢</div>
            <h1 className="text-5xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Cartoon Not Found</h1>
            <Button variant="gradient" size="lg" onClick={() => navigate("/")}>
              <ArrowLeft className="mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Extract YouTube video ID or playlist ID from URL
  const getYouTubeEmbedUrl = (url: string) => {
    // Check for playlist
    const playlistMatch = url.match(/[?&]list=([^&]+)/);
    if (playlistMatch) {
      return `https://www.youtube.com/embed/videoseries?list=${playlistMatch[1]}`;
    }
    
    // Check for video
    const videoMatch = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/);
    if (videoMatch) {
      return `https://www.youtube.com/embed/${videoMatch[1]}`;
    }
    
    return null;
  };

  const embedUrl = cartoon.youtubePlaylist ? getYouTubeEmbedUrl(cartoon.youtubePlaylist) : null;

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <NeonBackground />
      <Navbar />
      
      <div className="flex-1 relative z-10">
        {/* Netflix-style Hero Banner */}
        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={cartoon.thumbnail}
            alt={cartoon.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="container mx-auto">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/")}
                className="mb-6 glass border border-white/20"
              >
                <ArrowLeft className="mr-2" />
                Back to Home
              </Button>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 drop-shadow-2xl">
                {cartoon.title}
              </h1>
              <p className="text-xl text-white/90 font-semibold mb-6">{cartoon.year}</p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {cartoon.category.map((cat) => (
                  <Badge key={cat} className="bg-primary/90 text-white border-0 text-sm px-4 py-2 font-bold">
                    {cat}
                  </Badge>
                ))}
              </div>
              
              {cartoon.youtubePlaylist && (
                <Button 
                  variant="gradient" 
                  size="lg"
                  onClick={() => window.open(cartoon.youtubePlaylist, "_blank")}
                >
                  <Play className="mr-2" />
                  Watch Now
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="md:col-span-2 space-y-6">
              <div className="aspect-video rounded-[25px] overflow-hidden shadow-neon border-2 border-primary/30 bg-black">
                {embedUrl ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={embedUrl}
                    title={cartoon.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={cartoon.thumbnail}
                      alt={cartoon.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              
              <div className="bg-card/95 backdrop-blur-md rounded-[25px] p-8 border-2 border-secondary/30 shadow-cyan">
                <h2 className="text-3xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent mb-4">About</h2>
                <p className="text-foreground/90 leading-relaxed font-medium text-lg">{cartoon.description}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {cartoon.characters && cartoon.characters.length > 0 && (
                <div className="bg-card/95 backdrop-blur-md rounded-[25px] p-6 border-2 border-primary/30 shadow-neon">
                  <h2 className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
                    Main Characters
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {cartoon.characters.map((character) => (
                      <Badge 
                        key={character} 
                        className="bg-gradient-to-r from-primary/30 to-secondary/30 text-foreground border-2 border-primary/40 px-4 py-2 text-sm font-bold"
                      >
                        {character}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {cartoon.youtubePlaylist && (
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open(cartoon.youtubePlaylist, "_blank")}
                >
                  <Play className="mr-2" />
                  Full Playlist
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartoonDetail;
