"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Pages({ pages }: { pages: { pageName: string }[] }) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1} // <-- هنا حطينا واحد فقط
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {pages.map((page, index) => (
        <SwiperSlide key={index} className="!w-full !h-[300px] mx-auto">
          <div className="w-full h-full relative">
            <Image
              className="rounded !h-fit my-auto"
              src={page.pageName}
              alt="صفحة المشروع"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
