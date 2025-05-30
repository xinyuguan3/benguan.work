import { Marquee } from "./magicui/marquee";
import WithinOneArm from "../assets/WithinOneArm.png";
import WhoseWifeAnyway from "../assets/WhoseWifeAnyway.png";
import NeonCthulhu from "../assets/NeonCthulhu.png";
import SilkRoadStory from "../assets/SilkRoadStory.png"
import EastVillage from "../assets/EastVillage.png"
import BiologyGame from "../assets/BiologyGame.jpg"
import BoschUX from "../assets/BoschUX.jpg"
import BeyondTheBox from "../assets/BeyondTheBox.png"

const artworks = [
  { title: "Art Exhibition", img: WithinOneArm },
  { title: "Automotive UX", img: BoschUX },
  { title: "Theatre Poster", img: WhoseWifeAnyway },
  { title: "VR Movie Poster", img: BeyondTheBox },
  { title: "Sci-fi Game Concept", img: NeonCthulhu },
  { title: "Detective Game UI", img: EastVillage},
  { title: "Game Marketing Promo", img: SilkRoadStory },
  { title: "UIUX Flow", img: BiologyGame },

];

const firstRow = artworks.slice(0, artworks.length / 2);
const secondRow = artworks.slice(artworks.length / 2);

const ArtCard = ({ img, title }: { img: string; title?: string }) => (
  <div className="relative h-48 w-64 overflow-hidden rounded-xl border p-2 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
    <img src={img} alt={title} className="object-cover h-40 w-full rounded" />
    {title && <div className="mt-2 text-center text-sm font-medium">{title}</div>}
  </div>
);

export function ShowArt() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((art, idx) => (
          <ArtCard key={idx} {...art} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((art, idx) => (
          <ArtCard key={idx} {...art} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
