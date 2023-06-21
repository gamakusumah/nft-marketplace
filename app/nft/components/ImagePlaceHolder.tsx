import Image from "next/image";

export default function ImagePlaceHolder() {
  return (
    <section className="w-full h-80 md:h-[420px] lg:h-[560px]">
      <Image
        src="/images/Image-PlaceHolder.jpg"
        width={1280}
        height={1280}
        alt="Image Placeholder"
        className="object-cover w-full h-full"
      />
    </section>
  );
}
