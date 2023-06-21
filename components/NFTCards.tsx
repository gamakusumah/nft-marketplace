import NFTCard from "./NFTCard";
interface CardProp {
  bgColorCard: string;
}

export default function NFTCards(prop: CardProp) {
  return (
    <div className="container h-[1266px] overflow-hidden md:h-[1467px] grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
      <NFTCard
        name="NFT Name"
        artist="NFT Artist"
        price={1.63}
        highestBid={0.33}
        imgSrc="/images/nft/1.jpg"
        bgColor={prop.bgColorCard}
      />
      <NFTCard
        name="NFT Name"
        artist="NFT Artist"
        price={1.63}
        highestBid={0.33}
        imgSrc="/images/nft/2.jpg"
        bgColor={prop.bgColorCard}
      />
      <NFTCard
        name="NFT Name"
        artist="NFT Artist"
        price={1.63}
        highestBid={0.33}
        imgSrc="/images/nft/3.jpg"
        bgColor={prop.bgColorCard}
      />
      <NFTCard
        name="NFT Name"
        artist="NFT Artist"
        price={1.63}
        highestBid={0.33}
        imgSrc="/images/nft/4.jpg"
        bgColor={prop.bgColorCard}
      />
      <NFTCard
        name="NFT Name"
        artist="NFT Artist"
        price={1.63}
        highestBid={0.33}
        imgSrc="/images/nft/1.jpg"
        bgColor={prop.bgColorCard}
      />
      <NFTCard
        name="NFT Name"
        artist="NFT Artist"
        price={1.63}
        highestBid={0.33}
        imgSrc="/images/nft/2.jpg"
        bgColor={prop.bgColorCard}
      />
      <NFTCard
        name="NFT Name"
        artist="NFT Artist"
        price={1.63}
        highestBid={0.33}
        imgSrc="/images/nft/3.jpg"
        bgColor={prop.bgColorCard}
      />
      <NFTCard
        name="NFT Name"
        artist="NFT Artist"
        price={1.63}
        highestBid={0.33}
        imgSrc="/images/nft/4.jpg"
        bgColor={prop.bgColorCard}
      />
      <NFTCard
        name="NFT Name"
        artist="NFT Artist"
        price={1.63}
        highestBid={0.33}
        imgSrc="/images/nft/1.jpg"
        bgColor={prop.bgColorCard}
      />
    </div>
  );
}
