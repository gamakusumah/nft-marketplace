import TableItem from "./TableItem";

export default function RankingList() {
  return (
    <section className="container py-10">
      {/* Table Header */}
      <div className="w-full h-[50px] mb-5 text-caption md:h-[60px] lg:h-[84px] px-[10px] md:px-5 flex items-center justify-between border-[1px] border-sec rounded-[20px]">
        <div className="flex items-center">
          <span className="font-mono text-caption text-sm mr-[10px] md:text-base md:mr-5 lg:w-[30px] lg:h-[30px] lg:flex lg:items-center lg:justify-center">
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
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
      </div>
    </section>
  );
}
