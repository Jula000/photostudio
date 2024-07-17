import React from "react";
import Image from "next/image";
import photoGrid from "../../../../public/photo-grid.png";

const PhotoGrid: React.FC = () => {
  return (
    <main className="flex container justify-center p-10 self-center">
      <div className="relative w-full h-[500px]">
        <Image
          src={photoGrid}
          layout="fill"
          objectFit="contain"
          alt="Combined Photography"
        />
      </div>
    </main>
  );
};

export default PhotoGrid;
