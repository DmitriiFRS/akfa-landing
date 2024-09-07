"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import s from "./s.module.scss";
import { A11y, Autoplay } from "swiper/modules";
import slide1 from "@/../public/slide1-1.webp";
import slide2 from "@/../public/slide2-1.webp";
import slide3 from "@/../public/slide3-1.webp";
import Image from "next/image";
import CustomSwiperPagination from "@/components/common/customPaginationSwiper/customPaginationSwiper";
import { useRef, useState } from "react";

const slider = [
   {
      id: 0,
      image: slide1,
      text: "IMZO: воплощение надежности и элегантности в каждом элементе",
   },
   {
      id: 1,
      image: slide2,
      text: "IMZO: Защита и комфорт для вашего дома круглый год",
   },
   {
      id: 2,
      image: slide3,
      text: "IMZO: когда качество имеет значение - выберите лучшее для вашего офиса",
   },
];

function HeroSLider() {
   const swiperRef = useRef<{ swiper: SwiperClass } | null>(null);
   const [slides, setSlides] = useState(0);
   const [activeIndex, setActiveIndex] = useState(0);
   const onSwiperInit = (swiper: SwiperClass): void => {
      const numberOfSlides = swiper.slides.length || 0;
      setSlides(numberOfSlides);
   };

   const updateActivePagination = (swiper: SwiperClass) => {
      setActiveIndex(swiper.realIndex);
   };
   return (
      <section className={s.hero}>
         <Swiper
            ref={swiperRef}
            onSwiper={onSwiperInit}
            onSlideChange={updateActivePagination}
            className={s.swiper}
            slidesPerView={1}
            loop
            modules={[Autoplay, A11y]}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            speed={1000}
         >
            {slider.map((el) => {
               return (
                  <SwiperSlide className={s.slide} key={el.id}>
                     <Image className={s.image} src={el.image} alt="slide" width={1440} height={850} />
                     <h2 className={s.text}>{el.text}</h2>
                     <div className={s.shadow}></div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
         <div className={s.paginationContainer}>
            <CustomSwiperPagination
               swiperRef={swiperRef}
               el={s.pagination}
               bullet={s.bullet}
               activeBullet={s.bulletActive}
               totalSlides={slides}
               activeIndex={activeIndex}
               setActiveIndex={setActiveIndex}
            />
         </div>
      </section>
   );
}
export default HeroSLider;
