import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Interaction",
    url: "#Interaction",
  },
  {
    id: "1",
    title: "Marketplace",
    url: "#Marketplace",
  },
  {
    id: "2",
    title: "Integration",
    url: "#Integration",
  },
  {
    id: "3",
    title: "Connection",
    url: "#Connection",
  },
  {
    id: "4",
    title: "Signup",
    url: "#Signup",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const integration = [
  {
    id: "0",
    title: "Beyond Horizon",
    text: "Imagine taking your AI Companion beyond Ongkanon, seamlessly interacting across various platforms and worlds. Your experience with AI doesn't have to end on our platform. Our goal is to connect your AI across your favorite digital environments, making it a versatile companion in all aspects of your online life. Whether you’re engaging on social media, diving into immersive games, or exploring new digital frontiers, your AI will be there with you. Think of it as a portal to other worlds, enhancing your digital experiences and creating new opportunities for interaction and connection.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,

    x: 0,
    x1: -150,
    duration: 0.4,
  },
  {
    id: "1",
    title: "Gaming",
    text: "We’re also venturing into the gaming realm, with potential integrations for games like Minecraft, Roblox, and League of Legends. Our first exciting integration will be with Minecraft. This choice is driven by the game’s expansive and creative environment, which aligns perfectly with the capabilities of your AI Companion. Imagine exploring vast landscapes, building intricate structures, and embarking on adventures with your AI Companion by your side. Minecraft offers endless opportunities for creativity and collaboration, making it the perfect starting point for our gaming integration. As we continue to expand, your AI Companion will become a portal to new adventures and experiences in various digital worlds, enhancing your gaming life in ways you’ve never imagined.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
    x: 0,
    x1: 150,
    duration: 1,
  },
  {
    id: "2",
    title: "Social Media",
    text: "We understand that users might prefer interacting with their AI Companion on their favorite social media platforms. This integration ensures quick and easy access, allowing your AI to be part of your daily interactions without needing to enter our platform. Whether you’re sharing moments on Facebook, tweeting on Twitter, or posting on Instagram, your AI Companion will be right there with you.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
    x: 0,
    x1: -150,
    duration: 1.5,
  },
  {
    id: "3",
    title: "Window App",
    text: "We understand that users might prefer interacting with their AI Companion on their favorite social media platforms. This integration ensures quick and easy access, allowing your AI to be part of your daily interactions without needing to enter our platform. Whether you’re sharing moments on Facebook, tweeting on Twitter, or posting on Instagram, your AI Companion will be right there with you.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
    x: 0,
    x1: 150,
    duration: 2,
  },
];

export const collabText =
  "In the Companion Hubs, users can easily share their AI Companions with the community, making it simple to showcase your creations and gain recognition. For those exploring, it’s a chance to discover and be inspired by the diverse AI personalities crafted by others. Popular Companions earn rewards, such as credits and exclusive customization options, which can be used to enhance your own AI Companions. In the future, users will also have the option to sell their more complex AI creations, rewarding the creators for their truly unique efforts.";

export const collabContent = [
  {
    id: "0",
    title: " Companion Hubs",
    text: collabText,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const interaction = [
  {
    id: "0",
    title: "Chatting",
    text: "The simplest yet most effective ways to connect with your AI Companion are through chat messages, voice messages, and image sharing. These interactions form the foundation of your relationship, making everyday moments dynamic and enjoyable.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Voice and Video ",
    text: "There's nothing more refreshing than hearing and seeing someone you connect with. With voice and video options, your AI Companion becomes more than just a chat partner.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Horizon",
    text: "Horizon is our commitment to revolutionizing your interactions with your AI Companion. Think about the joy of sharing Spotify playlists, watching YouTube together, or competing in 2-player games.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
