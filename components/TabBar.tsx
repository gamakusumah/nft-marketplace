export default function TabBar() {
  return (
    <section className="container h-[70px]">
      <div className="h-[60px] grid grid-cols-3 text-caption font-semibold md:w-[545px] lg:w-[620px]">
        <button className="cursor-pointer hover:bg-sec lg:text-lg text-white border-b-2 border-caption">
          Created
          <span className="font-mono bg-caption rounded-[20px] px-[10px] py-[5px] ml-4 hidden md:inline-block">
            302
          </span>
        </button>
        <button className="cursor-pointer hover:bg-sec lg:text-lg">
          Owned
          <span className="font-mono bg-sec text-white rounded-[20px] px-[10px] py-[5px] ml-4 hidden md:inline-block">
            67
          </span>
        </button>
        <button className="cursor-pointer hover:bg-sec lg:text-lg">
          Collection
          <span className="font-mono bg-sec text-white rounded-[20px] px-[10px] py-[5px] ml-4 hidden md:inline-block">
            4
          </span>
        </button>
      </div>
    </section>
  );
}
