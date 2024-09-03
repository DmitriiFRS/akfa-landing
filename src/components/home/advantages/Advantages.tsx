import Container from "@/components/common/container/Container";
import s from "./s.module.scss";
import Image from "next/image";
import img1 from "@/../public/1.webp";
import img2 from "@/../public/2.webp";

function Advantages() {
   return (
      <section className={s.advantages}>
         <Container className={s.container}>
            <Image className={s.image} src={img2} alt="advantages" width={1440} height={100} style={{ objectFit: "contain" }} />
            <Image className={s.image} src={img1} alt="advantages" width={1440} height={100} style={{ objectFit: "contain" }} />
         </Container>
      </section>
   );
}
export default Advantages;
