import Container from "../common/container/Container";
import s from "./s.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const data = [
   {
      id: 0,
      title: "Узбекистан, г. Ташкент ул. Мустакиллик 8",
      icon: FaLocationDot,
   },
   {
      id: 1,
      title: "info@akfa.uz",
      icon: MdOutlineEmail,
   },
   {
      id: 2,
      title: "+998 71 200 00 00",
      icon: FaPhoneVolume,
   },
];

function Footer() {
   return (
      <footer className={s.footer}>
         <Container className={s.container}>
            <div className={s.main}>
               <div>logo</div>
               <ul className={s.info}>
                  {data.map((el) => {
                     return (
                        <li className={s.info__item} key={el.id}>
                           <el.icon />
                           <span>{el.title}</span>
                        </li>
                     );
                  })}
               </ul>
            </div>
            <div className={s.social}>
               <div className={s.social__label}>Социальные сети</div>
               <div className={s.social__list}>
                  <a href="#" target="_blank">
                     <FaTelegramPlane className={s.social__icon} />
                  </a>
                  <a href="#" target="_blank">
                     <FaInstagram className={s.social__icon} />
                  </a>
               </div>
            </div>
         </Container>
         <div className={s.line}></div>
         <Container>
            <div className={s.rights}>© 2024 AKFA. Все права защищены</div>
         </Container>
      </footer>
   );
}
export default Footer;
