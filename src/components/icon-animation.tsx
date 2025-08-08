import { SquareIcon, TriangleIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";

export const IconAnimation = ({
  className,
  size,
  color,
  variant,
}: {
  className: string;
  size: number;
  color: string;
  variant: "x" | "square" | "triangle";
}) => {
  const CustomIcon = () => {
    switch (variant) {
      case "x":
        return <XIcon size={size} className={color} />;
      case "square":
        return <SquareIcon size={size} className={color} />;
      case "triangle":
        return <TriangleIcon size={size} className={color} />;
      default:
        break;
    }
  };

  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        repeatDelay: 10,
      }}
      className={className}
    >
      <CustomIcon />
    </motion.div>
  );
};
