export default function BrowseCategories() {
  return (
    <section className="container py-10 lg:py-20">
      {/* Headline */}
      <div>
        <h1 className="font-sans font-semibold text-xl lg:text-2xl mb-[10px]">
          Browse Categories
        </h1>
      </div>

      {/* Category Cards */}
      <div className="h-[918px] md:h-[470px] lg:h-[662px] w-full mt-10 lg:mt-[60px] grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-[30px]">
        <div className="h-[209px] md:h-[231px] lg:h-[316px] bg-sec rounded-[20px]"></div>
        <div className="h-[209px] md:h-[231px] lg:h-[316px] bg-sec rounded-[20px]"></div>
        <div className="h-[209px] md:h-[231px] lg:h-[316px] bg-sec rounded-[20px]"></div>
        <div className="h-[209px] md:h-[231px] lg:h-[316px] bg-sec rounded-[20px]"></div>
        <div className="h-[209px] md:h-[231px] lg:h-[316px] bg-sec rounded-[20px]"></div>
        <div className="h-[209px] md:h-[231px] lg:h-[316px] bg-sec rounded-[20px]"></div>
        <div className="h-[209px] md:h-[231px] lg:h-[316px] bg-sec rounded-[20px]"></div>
        <div className="h-[209px] md:h-[231px] lg:h-[316px] bg-sec rounded-[20px]"></div>
      </div>
    </section>
  );
}
