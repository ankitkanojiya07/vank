import React from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/data/gallery';

interface MasonryProps {
  items: GalleryImage[];
  columns?: number;
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'bottom' | 'top' | 'left' | 'right';
  scaleOnHover?: boolean;
  colorShiftOnHover?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  columns = 3,
  scaleOnHover = true,
  colorShiftOnHover = false,
}) => {

  // Masonry layout logic
  const columnWrappers: { [key: number]: GalleryImage[] } = {};
  for (let i = 0; i < columns; i++) {
    columnWrappers[i] = [];
  }
  items.forEach((item, idx) => {
    columnWrappers[idx % columns].push(item);
  });

  return (
    <div className="flex gap-8 w-full">
      {Array.from({ length: columns }).map((_, colIdx) => (
        <div key={colIdx} className="flex flex-col gap-8 flex-1">
          {columnWrappers[colIdx].map((item) => (
            <div
              key={item.id}
              className={`masonry-item relative rounded-2xl overflow-hidden shadow-xl group transition-all duration-300 cursor-pointer bg-white border border-gray-200 hover:shadow-2xl`}
            >
              <div
                className={`transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl ${scaleOnHover ? '' : ''}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                  style={{
                    filter: colorShiftOnHover ? 'grayscale(100%)' : undefined,
                    transition: 'filter 0.3s',
                  }}
                />
                {/* Overlay with gradient and text on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 rounded-2xl">
                  <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">{item.title}</h3>
                  <p className="text-gray-200 text-base drop-shadow">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Masonry; 