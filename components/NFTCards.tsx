import NFTCard from "./NFTCard";

interface NFTProto {
  name: string;
  artist: string;
  price: number;
  highestBid: number;
  nftImgSrc: string;
  artistAvatarSrc: string;
}

interface CardProp {
  datas: NFTProto[];
  bgColorCard: string;
}

export default function NFTCards(prop: CardProp) {
  return (
    <div className="container h-[1266px] overflow-hidden md:h-[auto] grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
      {prop.datas.map((nft, i) => (
        <NFTCard
          name={nft.name}
          artist={nft.artist}
          price={nft.price}
          highestBid={nft.highestBid}
          imgSrc={nft.nftImgSrc}
          bgColor={prop.bgColorCard}
          avatarArtist={nft.artistAvatarSrc}
        />
      ))}
    </div>
  );
}
