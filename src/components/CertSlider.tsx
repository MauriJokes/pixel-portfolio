import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper/types";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

interface ImageDescriptionComponentProps {
  title: string;
  titleColor: string;
  description: string;
}

const imagesData = [
  {
    image: "/images/aws-cert.jpg",
    title: "<aws-certified-cloud-practitioner>",
    titleColor: "text-[#56b6c2]/70",
    description:
      "A short description provides context about the certification. It clarifies what the certification covers, what skills it validates, and its relevance to your career or the jobs you're targeting. Not all certifications are created equal, and a description helps you highlight the most important aspects.",
  },
  {
    image: "/images/black.png",
    title: "coming soon",
    titleColor: "text-[#e06c75]/70",
    description: "",
  },
  {
    image: "/images/black.png",
    title: "coming soon",
    titleColor: "text-[#e06c75]/70",
    description: "",
  },
  {
    image: "/images/black.png",
    title: "coming soon",
    titleColor: "text-[#e06c75]/70",
    description: "",
  },
];

const ImageDescriptionComponent: React.FC<ImageDescriptionComponentProps> = ({
  title,
  titleColor,
  description,
}) => {
  return (
    <div className="gap flex w-80 flex-col items-center justify-center gap-4">
      <p className={`font-jet-brains text-center text-2xl ${titleColor}`}>
        {title}
      </p>
      <p className="font-monserrat text-center text-base tracking-widest text-white/60">
        {description}
      </p>
    </div>
  );
};

export const CertSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex); // Update state with active slide index
  };

  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          observer={true} // Detect layout changes
          centeredSlides={true}
          slidesPerView={2.4} // Allows partial visibility of next/previous slides
          spaceBetween={-100} // Controls overlap between slides
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: true,
          }}
          // pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          onSlideChange={handleSlideChange}
          className="w-full max-w-2xl bg-transparent"
        >
          {imagesData.map((item, index) => (
            <SwiperSlide key={index} className="flex w-64">
              <img
                src={item.image}
                alt={`Movie ${index + 1}`}
                className="rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ImageDescriptionComponent
        title={imagesData[activeIndex].title}
        titleColor={imagesData[activeIndex].titleColor}
        description={imagesData[activeIndex].description}
      />
    </React.Fragment>
  );
};

export default CertSlider;
