import React, { useRef } from "react";
import Image from "next/image";
import { GalleryImage } from "@/data/gallery";

interface MasonryProps {
  items: GalleryImage[];
  columns?: number;
  scaleOnHover?: boolean;
  colorShiftOnHover?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  columns = 3,
  scaleOnHover = true,
  colorShiftOnHover = false,
}) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Distribute items into columns
  const distributeItems = () => {
    const columnWrappers: { [key: number]: GalleryImage[] } = {};
    const heights = Array(columns).fill(0);

    for (let i = 0; i < columns; i++) {
      columnWrappers[i] = [];
    }

    items.forEach((item, idx) => {
      const minHeightIndex = heights.indexOf(Math.min(...heights));
      columnWrappers[minHeightIndex].push(item);
      const estimatedHeight = 300 + (idx % 3) * 50;
      heights[minHeightIndex] += estimatedHeight;
    });

    return columnWrappers;
  };

  const columnWrappers = distributeItems();

  return (
    <div className="flex gap-4">
      {Array.from({ length: columns }).map((_, colIdx) => (
        <div key={colIdx} className="flex flex-col gap-4 flex-1">
          {columnWrappers[colIdx].map((item, itemIdx) => {
            const globalIdx =
              colIdx * Math.ceil(items.length / columns) + itemIdx;
            return (
              <div
                key={`${colIdx}-${itemIdx}`}
                ref={(el) => (itemRefs.current[globalIdx] = el)}
                className={`masonry-item relative rounded-2xl overflow-hidden shadow-xl group transition-all duration-300 cursor-pointer bg-white border border-gray-200 hover:shadow-2xl
                  ${scaleOnHover ? "hover:scale-[1.03]" : ""}
                  ${colorShiftOnHover ? "hover:brightness-90" : ""}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.caption}</p>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
