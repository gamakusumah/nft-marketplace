export default function TabBar() {
  return (
    <section className="container h-[60px]">
      <div className="h-full grid grid-cols-4 text-caption font-semibold">
        <button className="cursor-pointer hover:bg-sec lg:text-lg text-white border-b-2 border-caption">
          <span className="md:hidden">1d</span>
          <span className="hidden md:inline-block">Today</span>
        </button>
        <button className="cursor-pointer hover:bg-sec lg:text-lg">
          <span className="md:hidden">7d</span>
          <span className="hidden md:inline-block">This Week</span>
        </button>
        <button className="cursor-pointer hover:bg-sec lg:text-lg">
          <span className="md:hidden">30d</span>
          <span className="hidden md:inline-block">This Month</span>
        </button>
        <button className="cursor-pointer hover:bg-sec lg:text-lg">
          <span className="md:hidden">All Time</span>
          <span className="hidden md:inline-block">All Time</span>
        </button>
      </div>
    </section>
  );
}
