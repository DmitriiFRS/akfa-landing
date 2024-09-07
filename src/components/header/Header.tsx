import Container from "../common/container/Container";
import s from "./s.module.scss";
import Image from "next/image";
import akfa from "@/../public/logos/akfa.png";
import imzo from "@/../public/logos/imzo_2.png";
import engelberg from "@/../public/logos/engelberg.png";

function Header() {
   return (
      <header className={s.header}>
         <Container className={s.container}>
            <div className={s.logos}>
               <Image className={s.logo} src={akfa} alt="logo" width={200} height={400} />
               <Image className={s.logo} src={engelberg} alt="logo" width={200} height={400} />
               <Image className={s.logo} src={imzo} alt="logo" width={200} height={400} />
            </div>
            <a className={s.tel} style={{ color: "black" }} href="tel:+99899999999" target="_blank">
               +998 99 999 99
            </a>
         </Container>
      </header>
   );
}
export default Header;
/*  */
