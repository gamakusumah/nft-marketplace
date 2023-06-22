import Image from "next/image";
import Link from "next/link";

interface CardProp {
  name: string;
  imgSrc: string;
}

export default function ArtistCardSmall(prop: CardProp) {
  return (
    <div className="flex items-center">
      <Link href="/artist">
        <Image
          src={prop.imgSrc}
          width={24}
          height={24}
          alt="Artist Photo"
          className="lg:w-8 lg:h-8 rounded-full"
        />
      </Link>
      <h5 className="ml-3 lg:text-lg lg:font-semibold">{prop.name}</h5>
    </div>
  );
}
