import ben10Poster from "@/assets/posters/ben-10.jpg";
import kickButtowskiPoster from "@/assets/posters/kick-buttowski.jpg";
import haddiMeraBuddyPoster from "@/assets/posters/haddi-mera-buddy.jpg";
import horridHenryPoster from "@/assets/posters/horrid-henry.jpg";
import doraemonPoster from "@/assets/posters/doraemon.jpg";
import shinchanPoster from "@/assets/posters/shinchan.jpg";
import phineasAndFerbPoster from "@/assets/posters/phineas-and-ferb.jpg";
import pokemonPoster from "@/assets/posters/pokemon.jpg";
import powerpuffGirlsPoster from "@/assets/posters/power1.jpg";
import johnnyBravoPoster from "@/assets/posters/johnny.jpg";
import couragePoster from "@/assets/posters/courage.jpg";
import teenTitansPoster from "@/assets/posters/teen-titans.jpg";
import dragonBallZPoster from "@/assets/posters/dragon-ball.jpg";
import powerRangersSPDPoster from "@/assets/posters/power rangers.jpg";
import mrBeanPoster from "@/assets/posters/mrbean.jpg";
import cartoonNetworkLogo from "@/assets/cartoon-network.png";
import disneyXDLogo from "@/assets/disney-xd.png";
import pogoLogo from "@/assets/pogo.png.png";
import hungamaLogo from "@/assets/hungama.png";
import nickelodeonLogo from "@/assets/Nickelodeon.png";
import jetixLogo from "@/assets/jetixx.png";
import discoveryKidsLogo from "@/assets/disco1.png";
import marvelHQLogo from "@/assets/Marvel_HQ_logo..png";

export interface Cartoon {
  id: string;
  title: string;
  description: string;
  year: string;
  category: string[];
  thumbnail: string;
  youtubePlaylist?: string;
  characters?: string[];
}

export const cartoons: Cartoon[] = [
  {
    id: "ben-10",
    title: "Ben 10",
    description: "A 10-year-old boy discovers a mysterious alien device that allows him to transform into 10 different alien heroes, each with unique abilities.",
    year: "2005-2008",
    category: ["Cartoon Network"],
    thumbnail: ben10Poster,
    youtubePlaylist: "https://www.youtube.com/playlist?list=PLlyROb2AKDzy1PS8JxtXC-sqdktg0JE5S",
    characters: ["Ben Tennyson", "Gwen", "Grandpa Max", "Four Arms", "Heatblast", "XLR8"]
  },
  {
    id: "kick-buttowski",
    title: "Kick Buttowski",
    description: "A fearless daredevil kid performs dangerous stunts to become the world's greatest daredevil.",
    year: "2010-2012",
    category: ["Disney XD"],
    thumbnail: kickButtowskiPoster,
    youtubePlaylist: "https://www.youtube.com/playlist?list=PL3sZKs40EX8NJLcxCSXhp1bL-DBXQpVXV",
    characters: ["Kick Buttowski", "Gunther", "Brad", "Brianna"]
  },
  {
    id: "haddi-mera-buddy",
    title: "Haddi Mera Buddy",
    description: "The hilarious adventures of a skeleton who becomes best friends with a boy, living in his closet.",
    year: "2011-2012",
    category: ["Disney XD"],
    thumbnail: haddiMeraBuddyPoster,
    youtubePlaylist: "https://www.youtube.com/playlist?list=PLRfkDUm6xuYUG4Eq_0hMzORDej6qL0Rid",
    characters: ["Haddi", "Boy"]
  },
  {
    id: "horrid-henry",
    title: "Horrid Henry",
    description: "The mischievous adventures of Henry, a boy who loves playing pranks and causing chaos.",
    year: "2006-2019",
    category: ["Disney XD"],
    thumbnail: horridHenryPoster,
    youtubePlaylist: "https://www.youtube.com/watch?v=CnejcCS3Qag",
    characters: ["Horrid Henry", "Perfect Peter", "Moody Margaret", "Rude Ralph"]
  },
  {
    id: "doraemon",
    title: "Doraemon",
    description: "A robotic cat from the future helps a young boy navigate everyday challenges with futuristic gadgets.",
    year: "2005-present",
    category: ["Hungama"],
    thumbnail: doraemonPoster,
    youtubePlaylist: "https://www.youtube.com/watch?v=agg3C3fzFwY",
    characters: ["Doraemon", "Nobita", "Shizuka", "Gian", "Suneo"]
  },
  {
    id: "shinchan",
    title: "Shinchan",
    description: "The hilarious misadventures of a kindergarten boy who loves to irritate everyone around him.",
    year: "2006-present",
    category: ["Hungama"],
    thumbnail: shinchanPoster,
    youtubePlaylist: "https://www.youtube.com/watch?v=qV0PIc5rjPA",
    characters: ["Shinchan", "Misae", "Hiroshi", "Himawari", "Shiro"]
  },
  {
    id: "phineas-and-ferb",
    title: "Phineas and Ferb",
    description: "Two stepbrothers create amazing inventions during their summer vacation while their pet platypus fights evil.",
    year: "2007-2015",
    category: ["Disney XD"],
    thumbnail: phineasAndFerbPoster,
    youtubePlaylist: "https://www.youtube.com/watch?v=9Wq9gNnspYc",
    characters: ["Phineas", "Ferb", "Perry the Platypus", "Candace", "Dr. Doofenshmirtz"]
  },
  {
    id: "pokemon",
    title: "Pokémon",
    description: "Follow Ash Ketchum and Pikachu on their journey to become the world's greatest Pokémon Master.",
    year: "2003-present",
    category: ["Cartoon Network", "Hungama"],
    thumbnail: pokemonPoster,
    youtubePlaylist: "https://www.youtube.com/playlist?list=PLRcHmntfmJ8CnSmj4C284-a1euH518aQa",
    characters: ["Ash", "Pikachu", "Brock", "Misty", "Team Rocket"]
  },
  {
    id: "powerpuff-girls",
    title: "The Powerpuff Girls",
    description: "Three super-powered little girls created by Professor Utonium save the city of Townsville from villains and monsters.",
    year: "1998-2005",
    category: ["Cartoon Network"],
    thumbnail: powerpuffGirlsPoster,
    youtubePlaylist: "https://www.youtube.com/watch?v=4mmCMUPCNgE",
    characters: ["Blossom", "Bubbles", "Buttercup", "Professor Utonium", "Mojo Jojo"]
  },
  {
    id: "johnny-bravo",
    title: "Johnny Bravo",
    description: "A muscular, Elvis-like character with a big pompadour tries to get women to date him, but always fails hilariously.",
    year: "1997-2004",
    category: ["Cartoon Network"],
    thumbnail: johnnyBravoPoster,
    youtubePlaylist: "https://www.youtube.com/watch?v=yJJA6WRpvtg",
    characters: ["Johnny Bravo", "Mama Bravo", "Little Suzy", "Carl"]
  },
  {
    id: "courage-the-cowardly-dog",
    title: "Courage the Cowardly Dog",
    description: "A timid dog must overcome his fears to protect his owners from supernatural threats in the middle of Nowhere.",
    year: "1999-2002",
    category: ["Cartoon Network"],
    thumbnail: couragePoster,
    youtubePlaylist: "https://www.youtube.com/watch?v=0AXseEnXtsc",
    characters: ["Courage", "Muriel", "Eustace"]
  },
  {
    id: "teen-titans-go",
    title: "Teen Titans Go!",
    description: "The comedic adventures of the teenage superhero team as they deal with everyday life and villains in Jump City.",
    year: "2013-present",
    category: ["Cartoon Network"],
    thumbnail: teenTitansPoster,
    youtubePlaylist: "https://www.youtube.com/watch?v=5gFKNbxGKd4",
    characters: ["Robin", "Starfire", "Raven", "Beast Boy", "Cyborg"]
  },
  {
    id: "dragon-ball-z",
    title: "Dragon Ball Z",
    description: "Goku and the Z Warriors defend Earth against powerful villains and intergalactic threats in epic battles.",
    year: "1996-2003",
    category: ["Cartoon Network"],
    thumbnail: dragonBallZPoster,
    youtubePlaylist: "https://www.youtube.com/watch?v=R4vjJrGeh1c",
    characters: ["Goku", "Vegeta", "Gohan", "Piccolo", "Krillin", "Trunks"]
  },
  {
    id: "power-rangers-spd",
    title: "Power Rangers S.P.D.",
    description: "In the year 2025, a team of Power Rangers protects Earth from alien criminals as part of Space Patrol Delta.",
    year: "2005-2006",
    category: ["Jetix"],
    thumbnail: powerRangersSPDPoster,
    youtubePlaylist: "https://www.youtube.com/watch?v=rhTSWMJ_YOo",
    characters: ["Jack Landors", "Sky Tate", "Bridge Carson", "Z Delgado", "Syd Drew"]
  },
  {
    id: "mr-bean-animated",
    title: "Mr. Bean: The Animated Series",
    description: "The hilarious animated adventures of Mr. Bean and his teddy bear as they navigate everyday situations in the most unusual ways.",
    year: "2002-2019",
    category: ["Pogo"],
    thumbnail: mrBeanPoster,
    youtubePlaylist: "https://www.youtube.com/watch?v=HgDhQ7Jl4sI",
    characters: ["Mr. Bean", "Teddy", "Irma Gobb", "Mrs. Wicket"]
  }
];

export const categories = [
  { name: "Cartoon Network", icon: "📺", logo: cartoonNetworkLogo },
  { name: "Disney XD", icon: "✨", logo: disneyXDLogo },
  { name: "Pogo", icon: "🎮", logo: pogoLogo },
  { name: "Hungama", icon: "🎪", logo: hungamaLogo },
  { name: "Nickelodeon", icon: "🟠", logo: nickelodeonLogo },
  { name: "Marvel HQ", icon: "🦸", logo: marvelHQLogo },
  { name: "Jetix", icon: "⚡", logo: jetixLogo },
  { name: "Discovery Kids", icon: "🔬", logo: discoveryKidsLogo }
];
