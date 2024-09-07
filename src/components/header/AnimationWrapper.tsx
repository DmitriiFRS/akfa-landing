"use client";

import { useEffect, useState } from "react";
import s from "./s.module.scss";

function AnimationWrapper({ children }: { children: React.ReactNode }) {
   const [isScrolled, setIsScrolled] = useState(false);
   function toggleHeader() {
      if (window.scrollY > 0 && !isScrolled) {
         setIsScrolled(true);
      } else if (window.scrollY === 0) {
         setIsScrolled(false);
      }
   }
   useEffect(() => {
      window.addEventListener("scroll", toggleHeader);
      return () => {
         window.removeEventListener("scroll", toggleHeader);
      };
   }, []);
   return <div className={`${s.wrapper} ${isScrolled && s.wrapper_scrolled}`}>{children}</div>;
}
export default AnimationWrapper;
