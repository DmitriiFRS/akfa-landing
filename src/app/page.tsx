import Image from "next/image";
import styles from "./page.module.css";
import HeroSLider from "@/components/home/heroSLider/HeroSLider";
import Descriptions from "@/components/home/descriptions/Descriptions";
import Advantages from "@/components/home/advantages/Advantages";
import FormComponent from "@/components/home/form/FormComponent";

export default function Home() {
   return (
      <main className={styles.main}>
         <HeroSLider />
         <Advantages />
         <Descriptions />
         <FormComponent />
      </main>
   );
}
