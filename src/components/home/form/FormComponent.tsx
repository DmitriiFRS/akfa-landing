"use client";

import Container from "@/components/common/container/Container";
import s from "./s.module.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { formData, schemas } from "./helper";
import Input from "./Input";
import InputMask from "react-input-mask";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { postApplication } from "@/functions/postApplicaton";

const data = [
   {
      id: 0,
      title: "Узбекистан, г. Ташкент ул. Мустакиллик 8",
      icon: FaLocationDot,
   },
   {
      id: 1,
      title: "info@akfa.uz",
      icon: MdOutlineEmail,
   },
   {
      id: 2,
      title: "+998 71 200 00 00",
      icon: FaPhoneVolume,
   },
];

function FormComponent() {
   const [phoneValue, setPhoneValue] = useState<string>("");
   const [isFocused, setIsFocused] = useState(false);

   const [isLoading, setIsLoading] = useState(false);
   const [formSended, setFormSended] = useState(false);
   const [formDataObj, setFormDataObj] = useState({
      name: "",
      tel: "",
      comment: "",
   });
   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (value === "+998") return;
      if (value.startsWith("+998") || value === "") {
         setPhoneValue(value);
      }
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
   const handleChangeObj = (e: any) => {
      setFormDataObj({
         ...formDataObj,
         [e.target.name]: e.target.value,
      });
   };
   const onSubmit = async (values: { name: string; tel: string; comment: string }) => {
      setIsLoading(true);
      const result = await postApplication({
         name: values.name,
         tel: values.tel,
         msg: values.comment,
         url: `https://api.telegram.org/bot7361432516:AAF6ve7fehG3vtJZ1Ilayqk84zXwVD1LhL0/sendMessage`,
      });
      setIsLoading(false);
      setFormSended(true);
   };
   return (
      <section className={s.formSection}>
         <Container>
            <h2 className={s.title}>Связаться с нами</h2>
         </Container>
         <Container className={s.container}>
            <div className={s.left}>
               <h3 className={s.innerTitle}>Контакты</h3>
               <p className={s.innerP}>Если у Вас остались вопросы, Вы можете связаться с нами или оставить заявку и наш менеджер перезвонит Вам!</p>
               <ul className={s.info}>
                  {data.map((el) => {
                     return (
                        <li className={s.info__item} key={el.id}>
                           <el.icon />
                           <span>{el.title}</span>
                        </li>
                     );
                  })}
               </ul>
               <div className={s.social__list}>
                  <a href="#" target="_blank">
                     <FaTelegramPlane className={s.social__icon} />
                  </a>
                  <a href="#" target="_blank">
                     <FaInstagram className={s.social__icon} />
                  </a>
               </div>
            </div>
            {!formSended ? (
               <Formik initialValues={formData} validationSchema={schemas} onSubmit={onSubmit}>
                  {() => (
                     <Form className={s.right}>
                        <div className={`${s.loaderContainer} ${isLoading && s.loader__active}`}>
                           <span className={s.loader}></span>
                        </div>
                        <div className={`${s.right__container} ${isLoading && s.right__container_active}`}>
                           <Input name="name" id="formName1" placeholder="Имя *" className={s.input__name} />
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
                                    className={` ${s.input} ${s.input__tel}`}
                                 />
                              )}
                           </Field>
                           <div className={`${s.input} ${s.input__textfield}`}>
                              <Field as="textarea" name="comment" id="formTextArea1" placeholder={"Сообщение"} className={s.field} />
                           </div>
                           <button type="submit" className={s.btn}>
                              Отправить
                           </button>
                        </div>
                     </Form>
                  )}
               </Formik>
            ) : (
               <div className={`${s.right} ${s.right__success}`}>Ваша заявка успешно отправлена! В ближайшее время с вами свяжется наш менеджер</div>
            )}
         </Container>
      </section>
   );
}
export default FormComponent;
