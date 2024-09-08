"use client";
import { formData, schemas } from "@/components/home/form/helper";
import { postApplication } from "@/functions/postApplicaton";
import { Field, Form, Formik } from "formik";
import s from "./s.module.scss";
import Input from "@/components/home/form/Input";
import InputMask from "react-input-mask";
import { useState } from "react";

function Inputs({
   isLoading,
   setIsLoading,
   setIsFormSubmitted,
}: {
   isLoading: boolean;
   setIsLoading: (value: boolean) => void;
   setIsFormSubmitted: (value: boolean) => void;
}) {
   const [phoneValue, setPhoneValue] = useState<string>("+998 ");
   const [isFocused, setIsFocused] = useState(false);
   const onSubmit = async (values: { name: string; tel: string; comment: string }) => {
      setIsLoading(true);
      const result = await postApplication({
         name: values.name,
         tel: phoneValue,
         msg: values.comment,
         url: `https://api.telegram.org/bot7361432516:AAF6ve7fehG3vtJZ1Ilayqk84zXwVD1LhL0/sendMessage`,
      });
      setIsLoading(false);
      setIsFormSubmitted(true);
   };
   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setPhoneValue(value);
   };
   function handleFocus() {
      if (!phoneValue) {
         setPhoneValue("+998");
      }
      setIsFocused(true);
   }
   const handleBlur = () => {
      if (phoneValue === "+998") {
         setPhoneValue("");
      }
      setIsFocused(false);
   };
   return (
      <Formik initialValues={formData} validationSchema={schemas} onSubmit={onSubmit}>
         {() => (
            <Form className={s.form}>
               <div className={`${s.loaderContainer} ${isLoading && s.loader__active}`}>
                  <span className={s.loader}></span>
               </div>
               <div className={`${s.container} ${isLoading && s.container__unactive}`}>
                  <Input name="name" id="formName1" placeholder="Имя *" className={s.name} />
                  <Field name="tel">
                     {({ field }: { field: any }) => (
                        <InputMask
                           {...field}
                           mask="+999 (99) 999-99-99"
                           value={phoneValue}
                           onChange={handlePhoneChange}
                           placeholder={!isFocused ? "Номер телефона *" : ""}
                           maskPlaceholder={null}
                           onFocus={handleFocus}
                           onBlur={handleBlur}
                           className={` ${s.input} ${s.tel}`}
                        />
                     )}
                  </Field>
                  <div className={`${s.input} ${s.textfield}`}>
                     <Field as="textarea" name="comment" id="formTextArea1" placeholder={"Сообщение"} className={s.field} />
                  </div>
                  <button type="submit" className={s.btn}>
                     Отправить
                  </button>
               </div>
            </Form>
         )}
      </Formik>
   );
}
export default Inputs;
