import React, { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  "/image/img1.jpeg",
  "/image/image-carousel.png",

];

const ImageCarousel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full py-14 flex justify-center">
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-6">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full h-[320px]">
              <img
                src={img}
                alt={`img-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
            >
              <FiX />
            </button>

            {/* Image */}
            <div className="relative flex items-center justify-center">
              <button
                onClick={prevImage}
                className="absolute left-0 text-white text-4xl p-3 hover:bg-white/20 rounded-full"
              >
                <FiChevronLeft />
              </button>

              <img
                src={images[currentIndex]}
                alt="popup"
                className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
              />

              <button
                onClick={nextImage}
                className="absolute right-0 text-white text-4xl p-3 hover:bg-white/20 rounded-full"
              >
                <FiChevronRight />
              </button>
            </div>

            {/* Counter */}
            <p className="text-center text-white mt-4 text-base">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;