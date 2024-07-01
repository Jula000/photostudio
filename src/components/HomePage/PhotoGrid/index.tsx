import React from "react";
import Image from "next/image";
import photoGrid from "../../../../public/photo-grid.png";

const PhotoGrid: React.FC = () => {
  return (
    <main className="flex justify-center p-10">
      <div className="relative w-full max-w-screen-lg h-[500px]">
        <Image
          src={photoGrid}
          layout="fill"
          objectFit="cover"
          alt="Combined Photography"
        />
      </div>
    </main>
  );
};

export default PhotoGrid;
