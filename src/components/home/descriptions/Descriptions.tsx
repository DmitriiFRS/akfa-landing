"use server";
import Container from "@/components/common/container/Container";
import s from "./s.module.scss";
import description1 from "@/../public/blog1.webp";
import description2 from "@/../public/blog2.webp";
import description3 from "@/../public/blog3.webp";
import Image, { StaticImageData } from "next/image";
import FadeUp from "@/components/common/fadeUp/FadeUp";
import FormButton from "./FormButton";
import logo from "@/../public/logos/imzo_2.png";
import MobileDescription from "./mobileDescription/MobileDescription";

const data = [
   {
      id: 0,
      description:
         "За годы существования компания AKFA зарекомендовала себя как надежного и ответственного производителя, в продукции которого вы можете быть уверены. На сегодняшний день предприятие обладает одним из крупнейших в Средней Азии автоматизированным производственным комплексом",
      image: description1,
   },
   {
      id: 1,
      description:
         "Миссия создавать новые стандарты и тренды. Нести ответственность за развитие индустриализации. Изменять традиционные методы ведения бизнеса и принципов взаимодействия. Постоянно поднимать эффективность компании ради наших клиентов, сотрудников, партнеров и общества.",
      image: description2,
   },
   {
      id: 2,
      description: "Ориентация на клиента - какой бы не была технологичная база и инновации, мы строим их вокруг клиента, а не подбираем клиента под нее.",
      image: description3,
   },
];

function Descriptions() {
   return (
      <section className={s.description}>
         <Container className={s.container}>
            {data.map((el, index) => {
               return <DescriptionContent key={el.id} index={index} el={el} />;
            })}
         </Container>
      </section>
   );
}

interface DescriptionContentProps {
   index: number;
   el: { id: number; description: string; image: StaticImageData };
}

function DescriptionContent({ index, el }: DescriptionContentProps) {
   return (
      <FadeUp delay={0.2}>
         <div className={`${s.content} ${index % 2 === 0 ? s.content__inverted : ""}`}>
            <div className={s.label}>
               <div className={`${s.label__container} ${index % 2 === 0 ? s.label__container__inverted : ""}`}>
                  <Image className={s.logo} src={logo} alt="logo" width={200} height={400} />
                  <div className={s.label__text}>
                     <p className={s.label__p}>{el.description}</p>
                     <FormButton className={s.btn}>Оставить заявку</FormButton>
                  </div>
               </div>
            </div>
            <div className={s.image}>
               <Image src={el.image} alt="description" fill style={{ objectFit: "cover" }} />
            </div>
         </div>
         <MobileDescription el={el} />
      </FadeUp>
   );
}
export default Descriptions;
