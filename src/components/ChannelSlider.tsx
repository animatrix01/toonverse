import cartoonNetwork from "@/assets/cartoon-network.png";
import disneyXD from "@/assets/disney-xd.png";
import pogo from "@/assets/pogo.png.png";
import hungama from "@/assets/hungama.png";
import nickelodeon from "@/assets/Nickelodeon.png";

const ChannelSlider = () => {
  const channels = [
    { name: "Cartoon Network", logo: cartoonNetwork },
    { name: "Disney XD", logo: disneyXD },
    { name: "Pogo", logo: pogo },
    { name: "Hungama", logo: hungama },
    { name: "Nickelodeon", logo: nickelodeon },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Nostalgic Tagline */}
      <p className="text-center text-sm md:text-base text-white/70 font-normal mb-6 px-4">
        Bringing Your Early 2000s Childhood Vibes Back — One Channel at a Time.
      </p>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Content */}
        <div className="flex animate-scroll hover:pause-animation">
          {/* First set of channels */}
          {channels.map((channel, index) => (
            <div
              key={`channel-1-${index}`}
              className="flex-shrink-0 mx-4 group"
            >
              <div className="bg-[#11121A] border border-[rgba(255,255,255,0.03)] rounded-lg px-8 py-5 shadow-card hover:shadow-[0_0_10px_rgba(255,217,61,0.15)] hover:scale-105 transition-all duration-300 hover:border-[rgba(255,217,61,0.3)] flex items-center justify-center min-w-[140px] h-[80px]">
                <img
                  src={channel.logo}
                  alt={channel.name}
                  className={`w-auto object-contain ${channel.name === "Pogo" ? "max-h-16" : "max-h-12"}`}
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {channels.map((channel, index) => (
            <div
              key={`channel-2-${index}`}
              className="flex-shrink-0 mx-4 group"
            >
              <div className="bg-[#11121A] border border-[rgba(255,255,255,0.03)] rounded-lg px-8 py-5 shadow-card hover:shadow-[0_0_10px_rgba(255,217,61,0.15)] hover:scale-105 transition-all duration-300 hover:border-[rgba(255,217,61,0.3)] flex items-center justify-center min-w-[140px] h-[80px]">
                <img
                  src={channel.logo}
                  alt={channel.name}
                  className={`w-auto object-contain ${channel.name === "Pogo" ? "max-h-16" : "max-h-12"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelSlider;
