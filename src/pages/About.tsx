import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeonBackground from "@/components/NeonBackground";
import { Heart, Tv, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <NeonBackground />
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 flex-1 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-display font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">About</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">ToonVerse India</span>
            </h1>
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              A nostalgia hub for 2000s kids ✨
            </p>
          </div>

          <div className="glass rounded-[30px] p-10 md:p-14 space-y-8 shadow-neon border-2 border-primary/30 animate-bounce-in">
            <div className="flex items-center gap-6 mb-8">
              <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-[20px] shadow-neon">
                <Tv className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Mission</h2>
            </div>
            <p className="text-lg leading-relaxed font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              ToonVerse India was created by fans, for fans. We grew up watching these amazing Hindi-dubbed cartoons 
              on Cartoon Network and Disney XD, and we wanted to create a place where others could relive those 
              magical memories.
            </p>
            <p className="text-lg leading-relaxed font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              This is more than just a website—it's a time machine back to Saturday mornings, summer vacations, 
              and after-school TV time. Every cartoon here holds a special place in our hearts, and we hope it 
              does in yours too!
            </p>
          </div>

          <div className="glass rounded-[25px] p-8 space-y-6 shadow-card border-2 border-primary/30 hover:shadow-neon transition-all hover:-translate-y-2 animate-bounce-in">
            <div className="bg-gradient-to-br from-secondary to-primary p-5 rounded-[20px] w-fit shadow-cyan">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">Community Driven</h3>
            <p className="font-semibold leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              Don't see your favorite cartoon? Let us know! We're always adding more shows based on community 
              suggestions.
            </p>
          </div>

          <div className="glass rounded-[25px] p-10 space-y-6 shadow-card border-2 border-accent/30 animate-slide-up">
            <h3 className="text-3xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">Important Note</h3>
            <p className="text-foreground/80 font-medium leading-relaxed">
              ToonVerse India does not host, store, or distribute any copyrighted content. All videos are 
              embedded from official YouTube channels and sources. We respect copyright laws and intellectual 
              property rights.
            </p>
            <p className="text-foreground/80 font-medium leading-relaxed">
              If you're a copyright holder and have concerns about any content on this site, please contact us 
              immediately and we'll remove it.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
