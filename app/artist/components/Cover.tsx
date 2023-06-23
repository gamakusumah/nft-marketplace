import Image from "next/image";

export default function Cover() {
  return (
    <section className="relative h-[300px] md:h-[330px] lg:h-[370px]">
      <div className="w-full h-[250px] md:h-[280px] lg:h-80 relative">
        <Image
          src="/images/cover-artist.jpg"
          width={1280}
          height={1280}
          className="object-cover w-full h-full"
          alt="Cover Photo"
        />
        <div className="w-full h-full bg-gradient-to-t from-cta absolute bottom-0"></div>
      </div>
      <div className="w-full h-[120px] absolute bottom-0">
        <div className="container w-full h-[120px] flex justify-center md:justify-normal">
          <Image
            src="/images/avatar/avatar-21.jpg"
            width={120}
            height={120}
            alt="Artist Photo"
            className="bg-green-400 rounded-[20px] border-2 border-prim"
          />
        </div>
      </div>
    </section>
  );
}
