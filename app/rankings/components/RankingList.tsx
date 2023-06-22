import TableItem from "./TableItem";

export default function RankingList() {
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
    <section className="container py-10">
      {/* Table Header */}
      <div className="w-full h-[50px] mb-5 text-caption md:h-[60px] lg:h-[84px] px-[10px] md:px-5 flex items-center justify-between border-[1px] border-sec rounded-[20px]">
        <div className="flex items-center">
          <span className="font-mono text-caption text-sm mr-[10px] md:text-base md:mr-5 w-[30px] h-[30px] flex items-center justify-center">
            #
          </span>
          <p className="font-mono text-sm md:text-base">Artist</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:w-[220px] lg:w-[520px]">
          <p className="font-mono text-sm md:text-base hidden md:inline-block">
            Page
          </p>
          <p className="font-mono text-sm md:text-base hidden lg:inline-block">
            NFTs Sold
          </p>
          <p className="font-mono text-sm w-20 md:text-base">Volume</p>
        </div>
      </div>

      {/* Cards Rankings */}
      <div className="grid gap-5">
        {artists.map((artist, i) => (
          <TableItem
            index={i + 1}
            artistName={artist.name}
            avatarImgSrc={artist.imgSrc}
          />
        ))}
      </div>
    </section>
  );
}
