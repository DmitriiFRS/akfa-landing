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
            <nav className={s.nav}>
               <ul className={s.navlist}>
                  {nav.map((el) => {
                     return (
                        <li key={el.id}>
                           <StyledLink href={el.url}>{el.title}</StyledLink>
                        </li>
                     );
                  })}
               </ul>
            </nav>
            <a href="#">+998 99 999 99</a>
         </Container>
      </header>
   );
}
export default Header;
