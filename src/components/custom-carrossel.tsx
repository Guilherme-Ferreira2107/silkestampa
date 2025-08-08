import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

export const CustomCarrousel = () => {
  const images = [
    "/img1.jpeg", // replace with your img URLes
    "/img2.jpeg",
    "/img3.jpeg",
    "/img4.jpeg",
  ];

  // Configuration for the carousel
  const responsive = {
    superLarge: {
      // 5k+ screen size
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      // Desktop screen size
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    tablet: {
      // Tablet screen size
      breakpoint: { max: 768, min: 480 },
      items: 3,
    },
    mobile: {
      // Mobile screen size
      breakpoint: { max: 480, min: 0 },
      items: 2,
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ButtonGroup = ({ next, previous }: any) => {
    return (
      <div className="flex w-full justify-end gap-4 mt-4 mr-8">
        <button
          onClick={previous}
          className="px-4 py-2 border rounded-sm hover:text-[#cb2b37] transition duration-300 cursor-pointer"
        >
          <MoveLeftIcon />
        </button>
        <button
          onClick={next}
          className="px-4 py-2 border rounded-sm hover:text-[#cb2b37] transition duration-300 cursor-pointer"
        >
          <MoveRightIcon />
        </button>
      </div>
    );
  };

  return (
    <section className="w-full mt-20">
      <div className="w-full flex flex-col items-center justify-center py-12">
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay={true}
          centerMode={false}
          className="w-full"
          containerClass="container-with-dots"
          draggable
          infinite
          itemClass="carousel-item-padding-40-px"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
          responsive={responsive}
          shouldResetAutoplay
          showDots={false}
          swipeable
          customButtonGroup={<ButtonGroup />}
        >
          {images.map((image, index) => (
            <div key={index} className="relative object-cover max-h-[400px]">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full"
                height={400}
                width={400}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
