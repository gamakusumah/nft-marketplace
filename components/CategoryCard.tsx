import Image from "next/image";

interface CategoryProp {
  name: string;
  imgSrc: string;
  iconSrc: string;
}

export default function CategoryCard(prop: CategoryProp) {
  return (
    <div className="bg-sec h-full rounded-[20px] overflow-hidden transition-cust">
      <div className="h-[142px] lg:h-60 w-full overflow-hidden relative">
        <Image
          src={prop.imgSrc}
          width={240}
          height={240}
          alt="Category Image"
          className="object-fit h-full w-full blur-sm"
        />
        <div className="w-full h-full absolute top-0 flex items-center justify-center">
          <Image
            src={prop.iconSrc}
            width={100}
            height={100}
            alt="Category Icon"
            className="object-fit h-20 w-20 lg:h-[100px] lg:w-[100px]"
          />
        </div>
      </div>
      <h5 className="pt-5 pb-[25px] bg-sec px-5 lg:px-[30px] font-sans font-semibold lg:text-lg items-stretch">
        {prop.name}
      </h5>
    </div>
  );
}
