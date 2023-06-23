import Cover from "./components/Cover";
import ArtistInfo from "./components/ArtistInfo";
import NFTCards from "@/components/NFTCards";
import TabBar from "./components/TabBar";

export default function Artist() {
  interface NFTProto {
    name: string;
    artist: string;
    price: number;
    highestBid: number;
    nftImgSrc: string;
    artistAvatarSrc: string;
  }

  const nfts: NFTProto[] = [
    {
      name: "Distant Galaxy",
      artist: "Animakid",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/1.jpg",
      artistAvatarSrc: "/images/avatar/avatar-21.jpg",
    },
    {
      name: "Life On Edena",
      artist: "Animakid",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/2.jpg",
      artistAvatarSrc: "/images/avatar/avatar-21.jpg",
    },
    {
      name: "AstroFiction",
      artist: "Animakid",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/3.jpg",
      artistAvatarSrc: "/images/avatar/avatar-21.jpg",
    },
    {
      name: "CryptoCity",
      artist: "Animakid",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/8.jpg",
      artistAvatarSrc: "/images/avatar/avatar-21.jpg",
    },
    {
      name: "ColorfulDog 0524",
      artist: "Animakid",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/10.jpg",
      artistAvatarSrc: "/images/avatar/avatar-21.jpg",
    },
    {
      name: "Space Tales",
      artist: "Animakid",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/12.jpg",
      artistAvatarSrc: "/images/avatar/avatar-21.jpg",
    },
    {
      name: "Cherry Blossom Girl 037",
      artist: "Animakid",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/15.jpg",
      artistAvatarSrc: "/images/avatar/avatar-21.jpg",
    },
    {
      name: "Dancing Robots 0987",
      artist: "Animakid",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/20.jpg",
      artistAvatarSrc: "/images/avatar/avatar-21.jpg",
    },
    {
      name: "IceCream Ape",
      artist: "Animakid",
      price: 1.63,
      highestBid: 0.33,
      nftImgSrc: "/images/nft/21.jpg",
      artistAvatarSrc: "/images/avatar/avatar-21.jpg",
    },
  ];

  return (
    <main>
      <Cover />
      <ArtistInfo />
      <TabBar />
      <section className="py-20 bg-sec border-b-2 border-prim ">
        <NFTCards datas={nfts} bgColorCard="prim" />
      </section>
    </main>
  );
}
