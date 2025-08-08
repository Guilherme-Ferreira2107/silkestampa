import { useEffect, useState } from "react";
import { PixelImage } from "./pixel-image";

const PixelImageComponent = ({
  src,
  grayscaleAnimation,
  pixelFadeInDuration,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <PixelImage
      src={src}
      grayscaleAnimation={grayscaleAnimation}
      pixelFadeInDuration={pixelFadeInDuration}
    />
  );
};

export default PixelImageComponent;
