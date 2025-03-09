import React, { useState } from "react";

const CardEventos = ({ DataDoEvento, NomeDoEvento, LocalDoEvento, DescriçãoDoEvento, flyer }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col md:flex-row md:w-[1200px] md:h-[450px] p-4 border rounded-2xl shadow-xl gap-6 justify-between">
      {/* Event Details */}
      <div className="md:w-[710px] flex flex-col space-y-2">
        <p className="text-sm font-medium font-raleway">{DataDoEvento}</p>
        <p className="text-2xl font-bold">{NomeDoEvento}</p>
        <p className="text-base font-semibold">{LocalDoEvento}</p>
        <p className="text-base text-gray-500">{DescriçãoDoEvento}</p>
      </div>

      {/* Image */}
      <div className="md:w-1/3">
        <img
          src={flyer}
          alt="Event Flyer"
          className="hover:opacity-75 cursor-pointer h-full w-96"
          onClick={() => setSelectedImage(flyer)}
        />
      </div>

      {/* Modal (Only shows when an image is clicked) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-[90vh] rounded-lg" />
            <button
              className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardEventos;
