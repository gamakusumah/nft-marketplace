"use client";

import CollectionCard from "./CollectionCard";
import SlideAnimaton from "./SlideAnimaton";

export default function TrendingCollection() {
  return (
    <section className="container py-10 lg:py-20">
      <div>
        <SlideAnimaton>
          <h2 className="font-sans font-semibold text-xl lg:text-2xl mb-[10px]">
            Trending Collections
          </h2>
        </SlideAnimaton>
        <SlideAnimaton>
          <p className="font-sans lg:text-md">
            Checkout our weekly updated trending collection.
          </p>
        </SlideAnimaton>
      </div>

      {/* Collections*/}
      <div className="max-h-[505px] md:max-h-[525px] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[30px] mt-10 lg:mt-[60px]">
        <CollectionCard
          artistName="MrFox"
          avatarImgSrc="/images/avatar/avatar-6.jpg"
          NFTName="DSGN Animals"
          imgMainSrc="/images/nft/11.jpg"
          imgScdSrc="/images/nft/9.jpg"
          imgTrdSrc="/images/nft/14.jpg"
          otherCollections={1025}
        />
        <CollectionCard
          artistName="Shroomie"
          avatarImgSrc="/images/avatar/avatar-7.jpg"
          NFTName="MagicMushrooms"
          imgMainSrc="/images/nft/28.jpg"
          imgScdSrc="/images/nft/5.jpg"
          imgTrdSrc="/images/nft/28.jpg"
          otherCollections={764}
        />
        <CollectionCard
          artistName="Disco Machines"
          avatarImgSrc="/images/avatar/avatar-12.jpg"
          NFTName="BeKind2Robots"
          imgMainSrc="/images/nft/25.jpg"
          imgScdSrc="/images/nft/17.jpg"
          imgTrdSrc="/images/nft/18.jpg"
          otherCollections={928}
        />
      </div>
    </section>
  );
}
