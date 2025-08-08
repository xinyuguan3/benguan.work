export interface Work {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  backgroundImage: string;
  cardMedia: {
    type: 'image' | 'video';
    src: string;
  }[];
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}

import AgentSociety from "../assets/AgentSociety.mp4"
import RelatoDemo from "../assets/RelatoDemo.mp4"
import Oasis from "../assets/Oasis.png"
import CommunityData from "../assets/CommunityData.gif"
import CommunityCompare from "../assets/CommunityCompare.png"
import RelatoNetwork from "../assets/RelatoNetwork.png"
import HouseHoldModal from "../assets/householdModel.gif"
import SocietyNFT from "../assets/SocietyNFT.mp4"
import SocietyNFT2 from "../assets/SocietyNFT2.mp4"
import Arkala from "../assets/Arkala.mp4"

export const works: Work[] = [
  {
    id: "01",
    title: "Smart City",
    subtitle: "Media Lab Toronto's research on collect information from the city",
    date: "2023.10",
    backgroundImage: HouseHoldModal,
    cardMedia: [
      {
        type: 'image',
        src: CommunityData
      },
      {
        type: 'image',
        src: CommunityCompare
      }
    ],
    position: {
      top: '20%',
      right: '10%'
    }
  },
  {
    id: "02",
    title: "Agent Society",
    subtitle: "Society Simulator for Related research",
    date: "2024.12",
    backgroundImage: "https://source.unsplash.com/random/1920x1080?cinema&sig=2",
    cardMedia: [
      {
        type: 'video',
        src: AgentSociety
      },
    ],
    position: {
      bottom: '15%',
      right: '5%'
    }
  },
  {
    id: "03",
    title: "NFT Marketplace",
    subtitle: "A NFT Marketplace for Society Simulation",
    date: "2024.12",
    backgroundImage: "https://source.unsplash.com/random/1920x1080?garden,digital&sig=3",
    cardMedia: [
      {
        type: 'video',
        src: SocietyNFT
      },
      {
        type: 'video',
        src: SocietyNFT2
      }
    ],
    position: {
      top: '30%',
      left: '15%'
    }
  },
  {
    id: "04",
    title: "Oasis",
    subtitle: "A social media simulation by camel-AI",
    date: "2024.8",
    backgroundImage: "https://source.unsplash.com/random/1920x1080?network,tech&sig=4",
    cardMedia: [
      {
        type: 'image',
        src: Oasis
      },
      {
        type: 'image',
        src: "https://source.unsplash.com/random/600x400?network,visualization&sig=42"
      }
    ],
    position: {
      top: '10%',
      right: '20%'
    }
  },
  {
    id: "05",
    title: "Relato",
    subtitle: "AI Roleplay game to help theater actors to practice",
    date: "2025.5",
    backgroundImage: "https://source.unsplash.com/random/1920x1080?quantum,space&sig=5",
    cardMedia: [
      {
        type: 'video',
        src: RelatoDemo
      },
      {
        type: 'image',
        src: RelatoNetwork
      }
    ],
    position: {
      bottom: '20%',
      left: '10%'
    }
  },
  {
    id: "06",
    title: "Arkala",
    subtitle: "AI driven colony simulator, base-building Game",
    date: "2023.6",
    backgroundImage: "https://source.unsplash.com/random/1920x1080?network,tech&sig=4",
    cardMedia: [
      {
        type: 'video',
        src: Arkala
      }
    ],
    position: {
      top: '10%',
      right: '20%'
    }
  }
  

]; 