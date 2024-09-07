import Image, { StaticImageData } from "next/image";
import FormButton from "../FormButton";
import s from "./s.module.scss";
import logo from "@/../public/logos/imzo_2.png";

function MobileDescription({ el }: { el: { id: number; description: string; image: StaticImageData } }) {
   return (
      <div className={s.content}>
         <div className={s.label}>
            <div className={s.label__container}>
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
   );
}
export default MobileDescription;
