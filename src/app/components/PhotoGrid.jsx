import Image from "next/image";
import image from "../../../public/image.png";

export default function PhotoGrid() {
  return (
    <main className="flex justify-center p-10">
      <div className="relative w-full max-w-screen-lg h-[500px]">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt="Combined Photography"
        />
      </div>
      <div> Hello</div>
    </main>
  );
}
