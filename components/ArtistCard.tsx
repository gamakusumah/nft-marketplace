import Image from "next/image";
interface CardProp {
  index: number;
  name: string;
  totalSales: number;
  imgSrc: string;
}

export default function ArtistCard(prop: CardProp) {
  return (
    <div className="w-full h-[100px] lg:h-[238px] rounded-[20px] bg-sec flex items-center justify-center lg:relative lg:flex-col">
      <div className="w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] rounded-full mr-5 lg:mb-5 lg:mr-0">
        <Image
          src={prop.imgSrc}
          width={120}
          height={120}
          className="object-cover h-[100%] w-[100%]"
          alt="Artist Avatar"
        />
      </div>
      <div className="w-[195px] md:w-[200px] lg:w-[200px] lg:text-center">
        <h5 className="font-sans text-lg font-semibold mb-[5px]">
          {prop.name}
        </h5>
        <p className="w-full flex justify-between lg:justify-center">
          <span className="text-caption lg:mr-[10px]">Total Sales:</span>
          <span className="font-mono ">{prop.totalSales} ETH</span>
        </p>
      </div>
      <div className="w-[30px] h-[30px] hidden absolute items-center justify-center top-5 left-5 bg-prim rounded-full font-mono text-caption lg:flex">
        {prop.index}
      </div>
    </div>
  );
}
