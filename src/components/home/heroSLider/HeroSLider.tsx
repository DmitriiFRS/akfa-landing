"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import s from "./s.module.scss";
import { A11y, Autoplay } from "swiper/modules";
import slide1 from "@/../public/slide1-1.webp";
import slide2 from "@/../public/slide2-1.webp";
import slide3 from "@/../public/slide3-1.webp";
import Image from "next/image";

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
   return (
      <section className={s.hero}>
         <Swiper
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
      </section>
   );
}
export default HeroSLider;
