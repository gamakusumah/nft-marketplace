import { motion } from "framer-motion";
import { slide } from "@/app/animations";

type Props = {
  children: JSX.Element;
};

export default function SlideAnimaton({ children }: Props) {
  return (
    <div className="relative">
      <motion.div
        variants={slide}
        initial="hidden"
        whileInView="visible"
        className="absolute bg-prim"
      ></motion.div>
      {children}
    </div>
  );
}
