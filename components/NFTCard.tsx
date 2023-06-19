import Image from "next/image";

interface NFTProto {
  name: string;
  artist: string;
  price: number;
  highestBid: number;
  imgSrc: string;
}

export default function NFTCard(proto: NFTProto) {
  return (
    <div className="h-[402px] md:h-[469px] w-full max-w-[330px] bg-sec rounded-[20px] overflow-hidden">
      <div className="h-[238px] md:h-[296px] w-full">
        <Image
          src={proto.imgSrc}
          width={330}
          height={296}
          alt="NFT Card Image"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="h-[164px] w-full px-5 pt-5 pb-[25px] md:px-[30px]">
        <div className="h-[60px] mb-[25px]">
          <h5 className="font-sans font-semibold text-lg mb-[5px]">
            {proto.name}
          </h5>
          <p className="font-mono flex">
            <span className="w-6 h-6 rounded-full bg-orange-400 mr-3"></span>
            {proto.artist}
          </p>
        </div>
        <div className="font-mono grid grid-cols-2">
          <div>
            <p className="text-sm text-caption mb-2">Price</p>
            <p>{proto.price} ETH</p>
          </div>
          <div className="justify-self-end">
            <p className="text-sm text-caption mb-2">Highest Bid</p>
            <p>{proto.highestBid} wETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}
