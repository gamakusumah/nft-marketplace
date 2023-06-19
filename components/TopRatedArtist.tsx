import ArtistCard from "./ArtistCard";

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
      imgSrc: "/images/avatar/avatar-1.svg",
    },
    {
      name: "DigiLab",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-2.svg",
    },
    {
      name: "GravityOne",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-3.svg",
    },
    {
      name: "Juanie",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-4.svg",
    },
    {
      name: "BlueWhale",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-5.svg",
    },
    {
      name: "Mr Fox",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-6.svg",
    },
    {
      name: "Shroomie",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-7.svg",
    },
    {
      name: "Robotica",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-8.svg",
    },
    {
      name: "RustyRobot",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-9.svg",
    },
    {
      name: "Animakid",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-10.svg",
    },
    {
      name: "Dotgu",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-11.svg",
    },
    {
      name: "Ghiblier",
      totalSales: 34.53,
      imgSrc: "/images/avatar/avatar-12.svg",
    },
  ];

  return (
    <section className="container py-10 lg:py-20 grid md:grid-cols-2">
      {/* Headline */}
      <div>
        <h1 className="font-sans font-semibold text-xl lg:text-2xl mb-[10px]">
          Top Creators
        </h1>
        <p className="font-sans lg:text-md">
          Checkout Top Rated Creators on the NFT Marketplace
        </p>
      </div>

      {/* Artist Cards Row */}
      <div className="h-[580px] overflow-hidden md:h-[360px] lg:h-[774px] w-full my-10 md:mt-[60px] md:mb-0 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 md:gap-[30px] md:col-span-2 md:order-3">
        {artists.map((artist, i) => (
          <ArtistCard
            index={i + 1}
            name={artist.name}
            totalSales={artist.totalSales}
            imgSrc={artist.imgSrc}
          />
        ))}
      </div>

      {/* Button */}
      <button className="btn-secondary-outline w-full md:w-[247px] md:place-self-end">
        <div className="h-5 w-5 bg-cta mr-3"></div>
        View Rankings
      </button>
    </section>
  );
}
