import React from "react";
import Projects from "../component/Slider/Projects";
import PictureWall from "../component/PictureWall";
import { Gallery } from "../component/Gallery";
import Video from "../component/Video";

const Home = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <h2 className="font-tertiary text-[52px] font-bold text-[#750321] pt-4 pb-2">
          - ART STUDIO & SHOP PAINTINGS FOR SALE SINGULART -
        </h2>
      </div>
      <Projects />
      <PictureWall />
      <Gallery />
      <Video />
    </div>
  );
};

export default Home;
