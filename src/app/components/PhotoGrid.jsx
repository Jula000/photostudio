import Image from "next/image";
import PhotoGrit from "../../../public/photo-grid.png";

export default function PhotoGrid() {
  return (
    <main className="flex justify-center p-10">
      <div className="relative w-full max-w-screen-lg h-[500px]">
        <Image
          src={PhotoGrit}
          layout="fill"
          objectFit="cover"
          alt="Combined Photography"
        />
      </div>
    </main>
  );
}
