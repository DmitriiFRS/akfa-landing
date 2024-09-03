import s from "./s.module.scss";

interface Props {
   children: React.ReactNode;
   className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
   return <div className={`${s.container} ${className}`}>{children}</div>;
};

export default Container;
