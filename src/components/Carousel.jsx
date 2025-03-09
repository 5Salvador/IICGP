import { useEffect } from "react";
import Glide from "@glidejs/glide";

const Carousel = ({ images = [] }) => {
  useEffect(() => {
    if (!images.length) return; // Prevent errors if images array is empty

    const glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 3, // Number of items visible
      gap: 20, // Space between items
      autoplay: 3000, // Auto-slide every 3 seconds
      hoverpause: true, // Pause on hover
      breakpoints: {
        1024: { perView: 2 },
        768: { perView: 1 },
      },
    });

    glide.mount();
    return () => glide.destroy(); // Cleanup on unmount
  }, [images]);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {images.map((img, index) => (
            <li key={index} className="glide__slide">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="h-[335px] md:h-[220px] w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation Arrows */}
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          ❮
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
