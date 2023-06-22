import Link from "next/link";
import CategoryCard from "./CategoryCard";

export default function BrowseCategories() {
  interface Category {
    name: string;
    imgSrc: string;
    iconSrc: string;
  }

  const categories: Category[] = [
    {
      name: "Art",
      imgSrc: "/images/category/art.jpg",
      iconSrc: "/icons/category/PaintBrush.svg",
    },
    {
      name: "Collectibles",
      imgSrc: "/images/category/collectibles.jpg",
      iconSrc: "/icons/category/Swatches.svg",
    },
    {
      name: "Music",
      imgSrc: "/images/category/music.jpg",
      iconSrc: "/icons/category/MusicNotes.svg",
    },
    {
      name: "Photography",
      imgSrc: "/images/category/photography.jpg",
      iconSrc: "/icons/category/Camera.svg",
    },
    {
      name: "Video",
      imgSrc: "/images/category/video.jpg",
      iconSrc: "/icons/category/VideoCamera.svg",
    },
    {
      name: "Utility",
      imgSrc: "/images/category/utility.jpg",
      iconSrc: "/icons/category/MagicWand.svg",
    },
    {
      name: "Sport",
      imgSrc: "/images/category/sport.jpg",
      iconSrc: "/icons/category/Basketball.svg",
    },
    {
      name: "Virtual Worlds",
      imgSrc: "/images/category/virtual-worlds.jpg",
      iconSrc: "/icons/category/Planet.svg",
    },
  ];
  return (
    <section className="container py-10 lg:py-20">
      {/* Headline */}
      <h2 className="font-sans font-semibold text-xl lg:text-2xl mb-[10px]">
        Browse Categories
      </h2>

      {/* Category Cards */}
      <div className="h-[918px] md:h-[470px] lg:h-[662px] w-full mt-10 lg:mt-[60px] grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-[30px] content-stretch">
        {categories.map((category, i) => (
          <Link href="/marketplace">
            <CategoryCard
              name={category.name}
              imgSrc={category.imgSrc}
              iconSrc={category.iconSrc}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
