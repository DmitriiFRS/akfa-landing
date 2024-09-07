"use client";

import Image from "next/image";
import "../../../app/globals.css";
import s from "./s.module.scss";
import { useState } from "react";
import SuccessForm from "./SuccessForm";
import { useFormContext } from "../FormContextProvider";
import Inputs from "./inputs/Inputs";
import { IoMdClose } from "react-icons/io";

const Form = () => {
   const formContext = useFormContext();
   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   function handleClose() {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = `0px`;
      formContext.setIsOpen(false);
      setTimeout(() => {
         setIsFormSubmitted(false);
      }, 400);
   }
   return (
      <div onClick={handleClose} className={`${s.form} ${formContext.isOpen ? s.form__active : ""}`}>
         <div onClick={(e) => e.stopPropagation()} className={s.body}>
            <IoMdClose width={10} height={10} className={s.close} onClick={handleClose} />
            {!isFormSubmitted ? (
               <div className={`${s.formContainer} ${isLoading && s.formContainer__inLoading}`}>
                  <div className={s.label}>
                     <h3 className={s.label__title}>Оставьте заявку и мы свяжемся с вами в ближайшее время</h3>
                  </div>
                  <Inputs isLoading={isLoading} setIsLoading={setIsLoading} setIsFormSubmitted={setIsFormSubmitted} />
               </div>
            ) : (
               <SuccessForm isFormSubmitted={isFormSubmitted} />
            )}
         </div>
      </div>
   );
};

export default Form;
/*
<div className={`${s.loaderContainer} ${isLoading && s.loader__active}`}>
               <span className={s.loader}></span>
            </div>
            <Image onClick={handleClose} className={s.close} src={""} alt="close" width={31} height={31} />
            <Image src={""} alt="logo" className={s.logo} width={180} height={62} />*/
