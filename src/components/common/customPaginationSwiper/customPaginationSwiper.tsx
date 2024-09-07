// custom pagination for use with swiper.js

import { SwiperClass } from "swiper/react";

interface Props {
   swiperRef: React.RefObject<{ swiper: SwiperClass }>;
   el: string;
   bullet: string;
   activeBullet: string;
   totalSlides: number;
   activeIndex: number;
   setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
   slideToLoop?: number;
}

const CustomSwiperPagination: React.FC<Props> = ({ swiperRef, el, bullet, activeBullet, totalSlides, activeIndex, setActiveIndex, slideToLoop }) => {
   const handleSlideChange = (index: number) => {
      if (swiperRef.current && swiperRef.current.swiper.realIndex !== index) {
         swiperRef.current.swiper.slideToLoop(index, slideToLoop || 700, true);
         setActiveIndex(index);
      }
   };
   return (
      <div className={el}>
         {totalSlides > 1 &&
            Array.from({ length: totalSlides }).map((el, index) => {
               return <span className={`${bullet} ${index === activeIndex ? activeBullet : ""}`} key={index} onClick={() => handleSlideChange(index)}></span>;
            })}
      </div>
   );
};
/* need this setup in swiper component

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
   ref={swiperRef}
   onSwiper={onSwiperInit}
   onSlideChange={updateActivePagination}
*/

export default CustomSwiperPagination;
