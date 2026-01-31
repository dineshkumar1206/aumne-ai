import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  { src: "/image/img1.jpg", alt: "Beautiful landscape view" },
  { src: "/image/img2.jpg", alt: "City skyline at night" },
  { src: "/image/img3.jpg", alt: "Mountain adventure" },
  { src: "/image/img4.jpg", alt: "Beach sunset" },
  { src: "/image/img5.jpg", alt: "Forest trail" },
  { src: "/image/img6.jpg", alt: "Desert dunes" },
];

const VISIBLE_IMAGES = 2;
const AUTO_PLAY_INTERVAL = 3000;
const TRANSITION_DURATION = 500;

export default function MinimalCarousel() {
  const trackRef = useRef(null);
  const autoPlayRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create extended array for seamless continuous flow
  const extendedImages = [...images, ...images.slice(0, VISIBLE_IMAGES)];

  // Get the transform value for the track
  const getTransformValue = () => {
    // Each image takes 50% width (100 / VISIBLE_IMAGES)
    const percentagePerImage = 100 / VISIBLE_IMAGES;
    // Move by one image at a time
    const translateX = currentPosition * percentagePerImage;
    return `translateX(-${translateX}%)`;
  };

  // Move to next position (one image at a time)
  const moveNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setCurrentPosition(prev => {
      const nextPosition = prev + 1;
      
      // If we're about to go beyond original images, reset position
      if (nextPosition > images.length) {
        // This will trigger the seamless reset
        return nextPosition;
      }
      return nextPosition;
    });
  }, [isTransitioning]);

  // Move to previous position
  const movePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setCurrentPosition(prev => {
      const prevPosition = prev - 1;
      
      // If we go before 0, show last position
      if (prevPosition < 0) {
        return images.length - 1;
      }
      return prevPosition;
    });
  }, [isTransitioning]);

  // Handle seamless reset when we reach the end
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      
      // If we've moved beyond the original images, reset to beginning
      if (currentPosition >= images.length) {
        // Disable transition for instant reset
        trackRef.current.style.transition = 'none';
        
        // Reset position to 0 (but keep the visual continuity)
        setCurrentPosition(prev => prev - images.length);
        
        // Re-enable transition
        requestAnimationFrame(() => {
          trackRef.current.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;
        });
      }
    }, TRANSITION_DURATION);

    return () => clearTimeout(timer);
  }, [currentPosition, isTransitioning]);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused || selectedImage || isTransitioning) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }

    autoPlayRef.current = setInterval(() => {
      moveNext();
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, selectedImage, isTransitioning, moveNext]);

  // Get current image indices
  const getCurrentImageIndex = () => {
    return currentPosition % images.length;
  };

  // Handle image click
  const handleImageClick = (img, index) => {
    setSelectedImage({ ...img, index });
  };

  // Handle lightbox navigation
  const handleLightboxPrev = (e) => {
    e.stopPropagation();
    movePrev();
    const currentIndex = getCurrentImageIndex();
    setSelectedImage({ ...images[currentIndex], index: currentIndex });
  };

  const handleLightboxNext = (e) => {
    e.stopPropagation();
    moveNext();
    const currentIndex = getCurrentImageIndex();
    setSelectedImage({ ...images[currentIndex], index: currentIndex });
  };

  return (
    <section className="py-12 px-4 md:px-6">
      <div className="relative max-w-4xl mx-auto">
        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => !selectedImage && setIsPaused(false)}
        >
          {/* Track */}
          <div
            ref={trackRef}
            className="flex transition-transform ease-in-out"
            style={{
              transform: getTransformValue(),
              transitionDuration: `${TRANSITION_DURATION}ms`,
            }}
          >
            {extendedImages.map((img, index) => {
              const actualIndex = index % images.length;
              return (
                <div
                  key={`${img.src}-${index}`}
                  className="w-1/2 px-2 flex-shrink-0"
                >
                  <div className="relative group aspect-square">
                    {/* Square Clickable Image */}
                    <div 
                      className="relative overflow-hidden cursor-pointer aspect-square"
                      onClick={() => handleImageClick(img, actualIndex)}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Simple overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows - Clean and minimal */}
          <button
            onClick={movePrev}
            disabled={isTransitioning}
            className="absolute top-1/2 left-2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={moveNext}
            disabled={isTransitioning}
            className="absolute top-1/2 right-2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          {/* Minimal progress dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 z-20">
            {images.map((_, index) => {
              const isActive = getCurrentImageIndex() === index;
              return (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    isActive ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal - Clean and minimal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            <div className="relative h-full">
              {/* Square Image in Lightbox */}
              <div className="aspect-square max-w-full mx-auto">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              
              {/* Navigation in Lightbox */}
              <button
                onClick={handleLightboxPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>

              <button
                onClick={handleLightboxNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={20} className="text-white" />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 p-1.5 rounded-full backdrop-blur-sm transition-colors"
                aria-label="Close lightbox"
              >
                <X size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}