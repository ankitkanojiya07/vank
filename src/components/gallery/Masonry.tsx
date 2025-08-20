import React from "react";
import Image from "next/image";
import { GalleryImage } from "@/data/gallery";

interface GridProps {
  items: GalleryImage[];
  columns?: number;
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: "bottom" | "top" | "left" | "right";
  scaleOnHover?: boolean;
  colorShiftOnHover?: boolean;
}

const Grid: React.FC<GridProps> = ({
  items,
  columns = 3,
  scaleOnHover = true,
  colorShiftOnHover = false,
}) => {

  // Generate grid columns class based on columns prop
  const getGridCols = (cols: number) => {
    const gridClasses: { [key: number]: string } = {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
      5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
    };
    return gridClasses[cols] || "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div
        className={`grid ${getGridCols(
          columns
        )} gap-2 sm:gap-4 md:gap-6 w-full`}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={`grid-item relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl group transition-all duration-300 cursor-pointer bg-white border border-gray-200 hover:shadow-2xl`}
          >
            <div
              className={`transition-transform duration-300 ${
                scaleOnHover ? "group-hover:scale-105" : ""
              } group-hover:shadow-2xl`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                style={{
                  filter: colorShiftOnHover ? "grayscale(100%)" : undefined,
                  transition: "filter 0.3s",
                }}
              />
              {/* Overlay with gradient and text on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl">
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1 drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm md:text-base drop-shadow">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
