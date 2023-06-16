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
        {/* Card */}
        <div className="h-[505px] md:h-[525px] w-full flex flex-col justify-between">
          {/* Photos */}
          <div className="h-[425px] w-full grid gap-[15px]">
            <div className="h-[315px] md:h-[330px] w-full bg-orange-500 rounded-[20px]"></div>
            <div className="h-[95px] md:h-[100px] w-full grid grid-cols-3 items-stretch gap-[15px]">
              <div className=" rounded-[20px] bg-white"></div>
              <div className=" rounded-[20px] bg-white"></div>
              <div className=" rounded-[20px] bg-white"></div>
            </div>
          </div>

          {/* Creator */}
          <div className="h-[65px] w-full">
            <h5 className="font-sans text-lg font-semibold mb-[10px]">
              Space Walking
            </h5>
            <div className="flex items-center">
              <div className="h-6 w-6 bg-slate-500 rounded-full mr-3"></div>
              <span>MrFox</span>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="h-[505px] md:h-[525px] w-full flex flex-col justify-between">
          {/* Photos */}
          <div className="h-[425px] w-full grid gap-[15px]">
            <div className="h-[315px] md:h-[330px] w-full bg-orange-500 rounded-[20px]"></div>
            <div className="h-[95px] md:h-[100px] w-full grid grid-cols-3 items-stretch gap-[15px]">
              <div className=" rounded-[20px] bg-white"></div>
              <div className=" rounded-[20px] bg-white"></div>
              <div className=" rounded-[20px] bg-white"></div>
            </div>
          </div>

          {/* Creator */}
          <div className="h-[65px] w-full">
            <h5 className="font-sans text-lg font-semibold mb-[10px]">
              Space Walking
            </h5>
            <div className="flex items-center">
              <div className="h-6 w-6 bg-slate-500 rounded-full mr-3"></div>
              <span>MrFox</span>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="h-[505px] md:h-[525px] w-full flex flex-col justify-between">
          {/* Photos */}
          <div className="h-[425px] w-full grid gap-[15px]">
            <div className="h-[315px] md:h-[330px] w-full bg-orange-500 rounded-[20px]"></div>
            <div className="h-[95px] md:h-[100px] w-full grid grid-cols-3 items-stretch gap-[15px]">
              <div className=" rounded-[20px] bg-white"></div>
              <div className=" rounded-[20px] bg-white"></div>
              <div className=" rounded-[20px] bg-white"></div>
            </div>
          </div>

          {/* Creator */}
          <div className="h-[65px] w-full">
            <h5 className="font-sans text-lg font-semibold mb-[10px]">
              Space Walking
            </h5>
            <div className="flex items-center">
              <div className="h-6 w-6 bg-slate-500 rounded-full mr-3"></div>
              <span>MrFox</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
