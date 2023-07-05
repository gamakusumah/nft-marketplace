import { motion } from "framer-motion";
import { fadeIn } from "@/app/animations";

type Props = {
  children: JSX.Element;
};

export default function FadeInAnimation({ children }: Props) {
  return (
    <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
      {children}
    </motion.div>
  );
}
