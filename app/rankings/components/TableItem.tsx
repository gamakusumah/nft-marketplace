import Image from "next/image";

interface ItemProp {
  index: number;
  artistName: string;
  avatarImgSrc: string;
}

export default function TableItem(prop: ItemProp) {
  return (
    <div className="w-full h-[50px] md:h-[60px] lg:h-[84px] px-[10px] md:px-5 flex items-center justify-between bg-sec rounded-[20px]">
      <div className="flex items-center">
        <span className="font-mono text-caption text-sm mr-[10px] md:text-base md:mr-5 w-[30px] h-[30px] lg:rounded-[20px] lg:bg-prim flex items-center justify-center">
          {prop.index}
        </span>
        <div className="flex items-center">
          <Image
            src={prop.avatarImgSrc}
            width={24}
            height={24}
            alt="Artist Photo"
            className="lg:w-[60px] lg:h-[60px] rounded-full"
          />
          <h5 className="ml-3 lg:ml-5 md:text-lg md:font-semibold lg:font-semibold">
            {prop.artistName}
          </h5>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:w-[220px] lg:w-[520px]">
        <p className="uppercase font-mono text-sm md:text-base text-[#00AC4F] hidden md:inline-block">
          +1.41%
        </p>
        <p className="uppercase font-mono text-sm md:text-base hidden lg:inline-block">
          620
        </p>
        <p className="uppercase font-mono text-sm w-20 md:text-base">
          12.4 ETH
        </p>
      </div>
    </div>
  );
}
