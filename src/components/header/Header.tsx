import Container from "../common/container/Container";
import s from "./s.module.scss";
import nav from "../../data/nav.data";
import Link from "next/link";
import StyledLink from "../common/styledLink/StyledLink";

function Header() {
   return (
      <header className={s.header}>
         <Container className={s.container}>
            <div>logo</div>
            <a className={s.tel} style={{ color: "black" }} href="tel:+99899999999" target="_blank">
               +998 99 999 99
            </a>
         </Container>
      </header>
   );
}
export default Header;
