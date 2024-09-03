import Link from "next/link";
import s from "./s.module.scss";

interface Props {
   children: React.ReactNode;
   href: string;
   className?: string;
}

const StyledLink: React.FC<Props> = ({ children, href, className }) => {
   return (
      <Link href={href} className={`${s.link} ${className}`}>
         {children}
      </Link>
   );
};

export default StyledLink;
