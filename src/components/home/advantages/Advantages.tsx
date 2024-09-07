import Container from "@/components/common/container/Container";
import s from "./s.module.scss";
import img1 from "@/../public/1.png";
import img2 from "@/../public/2.png";
import img3 from "@/../public/3.png";
import img4 from "@/../public/4.png";
import zamer from "@/../public/zamer.png";
import Image from "next/image";

const data = [
   {
      id: 0,
      title: "Заявка на выезд специалиста (бесплатно)",
      img: img1,
   },
   {
      id: 1,
      title: "Консультация, замер, подсчет стоимости (бесплатно)",
      img: img2,
   },
   {
      id: 2,
      title: "Выполнение ремонта",
      img: img3,
   },
   {
      id: 3,
      title: "Прием-сдача работ",
      img: img4,
   },
];

function Advantages() {
   return (
      <section className={s.advantages}>
         <Container className={s.container}>
            <div className={s.row}>
               {data.map((el) => {
                  return (
                     <div className={s.item} key={el.id}>
                        <div className={s.imgContainer}>
                           <Image src={el.img} alt="icon" width={100} height={100} className={s.image} />
                        </div>
                        <div className={s.title}>{el.title}</div>
                     </div>
                  );
               })}
            </div>
            <div className={s.zamer}>
               <div className={s.zamer__imgContainer}>
                  <Image src={zamer} alt="замер" width={100} height={100} className={s.zamer__image} />
               </div>
               <div className={s.zamer__labels}>
                  <h2 className={s.zamer__title}>бесплатный</h2>
                  <h3 className={s.zamer__subtitle}>выезд замерщика</h3>
               </div>
            </div>
         </Container>
      </section>
   );
}
export default Advantages;
