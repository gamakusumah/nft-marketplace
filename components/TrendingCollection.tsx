import CollectionCard from "./CollectionCard";

export default function TrendingCollection() {
  return (
    <section className="container py-10 lg:py-20">
      <div>
        <h1 className="font-sans font-semibold text-xl lg:text-2xl mb-[10px]">
          Trending Collections
        </h1>
        <p className="font-sans lg:text-md">
          Checkout our weekly updated trending collection.
        </p>
      </div>

      {/* Collections*/}
      <div className="max-h-[505px] md:max-h-[525px] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[30px] mt-10 lg:mt-[60px]">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </section>
  );
}
