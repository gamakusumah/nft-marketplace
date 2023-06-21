import Image from "next/image";

interface CardProp {
  name: string;
  imgSrc: string;
}

export default function ArtistCardSmall(prop: CardProp) {
  return (
    <div className="flex items-center">
      <Image
        src={prop.imgSrc}
        width={24}
        height={24}
        alt="Artist Photo"
        className="lg:w-8 lg:h-8"
      />
      <h5 className="ml-3 lg:text-lg lg:font-semibold">{prop.name}</h5>
    </div>
  );
}
