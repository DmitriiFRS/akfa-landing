"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation, stagger } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeUpInterface {
   children: React.ReactNode;
   delayOrder?: number;
   delay?: number;
   childrenDelay?: number;
}

export default function FadeUp({ children, delayOrder, delay, childrenDelay = 0.5 }: FadeUpInterface) {
   const control = useAnimation();
   const [ref, inView] = useInView();

   const boxVariant = {
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            delay: delay,
            duration: 0.5,
         },
      },
      hidden: {
         opacity: 0,
         y: 50,
      },
   };

   useEffect(() => {
      if (inView) {
         control.start("visible");
      }
   }, [control, inView]);

   return (
      <motion.div ref={ref} className="box" variants={boxVariant} initial="hidden" animate={control}>
         {children}
      </motion.div>
   );
}
