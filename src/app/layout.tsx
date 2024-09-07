import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import AnimationWrapper from "@/components/header/AnimationWrapper";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "AKFA",
   description: "AKFA",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={montserrat.className}>
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
