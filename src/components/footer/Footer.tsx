import Container from "../common/container/Container";
import s from "./s.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import logo from "@/../public/logos/imzo_2-small.png";

const data = [
   {
      id: 0,
      title: "г. Ташкент ул. Большая кольцевая дорога, 1А",
      icon: FaLocationDot,
   },
   {
      id: 1,
      title: "Imzotechnology@gmail.com",
      icon: MdOutlineEmail,
   },
   {
      id: 2,
      title: "+998 33 592 54 54",
      icon: FaPhoneVolume,
   },
];

function Footer() {
   return (
      <footer className={s.footer}>
         <Container className={s.container}>
            <div className={s.main}>
               <Image className={s.logo} src={logo} alt="logo" width={200} height={200} />
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
                  <a href="https://t.me/fresh877" target="_blank">
                     <FaTelegramPlane className={s.social__icon} />
                  </a>
                  <a href="https://www.instagram.com/imzotechnology?igsh=MWUyeTJtem5kbDMxcA%3D%3D&utm_source=qr" target="_blank">
                     <FaInstagram className={s.social__icon} />
                  </a>
               </div>
            </div>
         </Container>
         <div className={s.line}></div>
         <Container>
            <div className={s.rights}>© 2024 IMZO. Все права защищены</div>
         </Container>
      </footer>
   );
}
export default Footer;
