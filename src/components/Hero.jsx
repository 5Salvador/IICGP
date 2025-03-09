import React from "react";
import Carousel from "./Carousel";
import books from "../assets/books.avif";
import { Headphones, BookMarked } from "lucide-react";
import { imagesCarousel, imageMeta } from "../assets/assets";





const Hero = () => {
  
  return (
    <div className="flex flex-col w-full h-auto md:flex-row mb-10">
      <div className="relative md:w-1/2">
        <img src={imageMeta} alt="" className="w-full md:h-[650px]" />
      </div>
      <div className="flex flex-col md:w-1/2 space-y-1 bg-quinary">
        <div className="flex-1 md:p-4 md:px-2 h-1/2 mt-10">
          <Carousel images={imagesCarousel}/>
        </div>
        <div className="relative flex-1 h-1/2">
          <img src={books} alt="" className="w-full h-[310px]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-48  md:-translate-x-38 -translate-y-20 text-center border p-4 w-96 h-auto bg-slate-100 flex flex-col justify-center items-center">
            <p className="text-3xl font-semibold">RECURSOS</p>
            <div className="flex flex-row gap-2">
              <div className="flex items-center">
                <BookMarked />
              </div>
              <p className="text-2xl">ENSINAMENTOS</p>
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex items-center">
                <Headphones />
              </div>
              <p className="text-2xl">ENSINAMENTOS AUDIO</p>
            </div>
            <div className="flex-row gap-2">
              <p className="text-2xl">ESCOLA DA VERDADE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
