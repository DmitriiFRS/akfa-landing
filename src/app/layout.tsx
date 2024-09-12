import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import AnimationWrapper from "@/components/header/AnimationWrapper";
import CallButton from "@/components/common/callButton/CallButton";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Купить окна Акфа и двери Imzo, Engelberg в Ташкенте по выгодной цене | Установка пластиковых окон и дверей",
   description:
      "Здесь Вы можете приобрести пластиковые окна и двери от производителей Акфа (Akfa), Imzo, Engelberg в Ташкенте по выгодной цене. Установка пластиковых окон и дверей недорого. Звоните!",
   keywords: ["акфа", "цена", "окна и двери", "пластиковые", "купить", "ташкент", "установка", "имзо", "энгельберг"],
   verification: {
      google: "HovDfvMZTNVJvlsr44obSahWMHRMFgXInDnJT8Nnig8",
   },
};
export async function generateStaticParams() {
   return [];
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={montserrat.className}>
            <CallButton />
            <div className="wrapper">
               <AnimationWrapper>
                  <Header />
               </AnimationWrapper>
               {children}
               <Footer />
            </div>
         </body>
      </html>
   );
}
