import ArtistCard from "./ArtistCard";
import Image from "next/image";
import RocketLaunchCTA from "@/public/icons/RocketLaunchCTA.svg";
import Link from "next/link";

export default function TopRatedArtist() {
  interface Artist {
    name: string;
    totalSales: number;
    imgSrc: string;
  }
  const artists: Artist[] = [
    {
      name: "Keepitereal",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-1.jpg",
    },
    {
      name: "DigiLab",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-2.jpg",
    },
    {
      name: "GravityOne",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-3.jpg",
    },
    {
      name: "Juanie",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-4.jpg",
    },
    {
      name: "BlueWhale",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-5.jpg",
    },
    {
      name: "Mr Fox",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-6.jpg",
    },
    {
      name: "Shroomie",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-7.jpg",
    },
    {
      name: "Robotica",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-8.jpg",
    },
    {
      name: "RustyRobot",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-9.jpg",
    },
    {
      name: "Animakid",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-10.jpg",
    },
    {
      name: "Dotgu",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-11.jpg",
    },
    {
      name: "Ghiblier",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-12.jpg",
    },
  ];

  return (
    <section className="container py-10 lg:py-20 grid md:grid-cols-2">
      {/* Headline */}
      <div>
        <h2 className="font-sans font-semibold text-xl lg:text-2xl mb-[10px]">
          Top Creators
        </h2>
        <p className="font-sans lg:text-md">
          Checkout Top Rated Creators on the NFT Marketplace
        </p>
      </div>

      {/* Artist Cards Row */}
      <div className="h-[580px] overflow-hidden md:h-[360px] lg:h-[774px] w-full my-10 md:mt-[60px] md:mb-0 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 md:gap-[30px] md:col-span-2 md:order-3">
        {artists.map((artist, i) => (
          <Link href="/artist">
            <ArtistCard
              index={i + 1}
              name={artist.name}
              totalSales={artist.totalSales}
              imgSrc={artist.imgSrc}
            />
          </Link>
        ))}
      </div>

      {/* Button */}
      <Link
        href="/rankings"
        className="btn-secondary-outline w-full md:w-[247px] md:place-self-end"
      >
        <Image
          src={RocketLaunchCTA}
          alt="Button Icon"
          width={20}
          height={20}
          className="mr-3"
        />
        View Rankings
      </Link>
    </section>
  );
}
