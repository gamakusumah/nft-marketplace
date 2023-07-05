import Image from "next/image";
interface CardProp {
  title: string;
  text: string;
  imgSrc: string;
}
import { motion } from "framer-motion";
import { item } from "@/app/animations";

export default function InfoCard(prop: CardProp) {
  return (
    <motion.div
      variants={item}
      className="w-full h-[157px] p-5 lg:px-[30px] lg:pb-[30px] md:h-[337px] lg:h-[439px] bg-sec rounded-[20px] flex items-center justify-center md:justify-normal md:flex-col md:text-center"
    >
      <div className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] lg:w-[250px] lg:h-[250px] mr-5 md:mr-0 md:mb-5 lg:-mt-3">
        <Image
          src={prop.imgSrc}
          width={276}
          height={276}
          alt="Card Icon"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-[155px] md:w-full lg:w-[270px]">
        <h6 className="font-sans font-semibold mb-[10px] lg:text-lg">
          {prop.title}
        </h6>
        <p className="text-sm leading-[140%] lg:text-base">{prop.text}</p>
      </div>
    </motion.div>
  );
}
