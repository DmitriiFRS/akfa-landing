import s from "./s.module.scss";

interface Props {
   el: string;
   bullet: string;
   activeBullet: string;
   totalSlides: number;
   activeIndex: number;
   handleSlideChange: (index: number) => void;
}

const CustomPaginationSwiper: React.FC<Props> = ({ el, bullet, activeBullet, totalSlides, activeIndex, handleSlideChange }) => {
   return (
      <div className={el}>
         {totalSlides > 1 &&
            Array.from({ length: totalSlides }).map((el, index) => {
               return <span className={`${bullet} ${index === activeIndex ? activeBullet : ""}`} key={index} onClick={() => handleSlideChange(index)}></span>;
            })}
      </div>
   );
};

export default CustomPaginationSwiper;
