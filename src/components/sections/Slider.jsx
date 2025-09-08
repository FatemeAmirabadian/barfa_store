// app/slider/page.jsx
"use client";

import { useState, useEffect } from "react";
import SectionCard from "./SectionCard";

export default function SliderPage() {
  const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
  ];

  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    // پیش‌لود کردن تصاویر
    const loadImages = async () => {
      const loadPromises = images.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(src);
          img.onerror = () => resolve(null);
        });
      });

      const loaded = await Promise.all(loadPromises);
      setLoadedImages(loaded.filter(Boolean));
      
      // شبیه‌سازی تاخیر لودینگ
      setTimeout(() => setLoading(false), 1000);
    };

    loadImages();
  }, []);

  return (
    <SectionCard>
      <main className="flex items-center justify-center">
        {loading ? (
          <div className="relative w-full h-full max-h-[90vh] overflow-hidden rounded-lg shadow bg-gray-200">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-300">
              <div className="h-full bg-blue-500 animate-loading-bar"></div>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full max-h-[90vh] overflow-hidden rounded-lg shadow">
            <img
              src={images[current]}
              alt={`Slide ${current}`}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* فلش قبلی - نازک و مدرن */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 shadow transition-all duration-200 group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-gray-800 group-hover:text-black transition-colors"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* فلش بعدی - نازک و مدرن */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 shadow transition-all duration-200 group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-gray-800 group-hover:text-black transition-colors"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* نشانگرهای اسلاید */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 1s ease-in-out forwards;
        }
      `}</style>
    </SectionCard>
  );
}