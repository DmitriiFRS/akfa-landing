"use client";

import Container from "@/components/common/container/Container";
import s from "./s.module.scss";
import { ErrorMessage, Form, Formik } from "formik";
import { formData, schemas } from "./helper";
import Input from "./Input";
import InputMask from "react-input-mask";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

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
            <Formik initialValues={formData} validationSchema={schemas} onSubmit={() => console.log("success")}>
               <Form className={s.right}>
                  <Input name="name" id="formName1" placeholder="Имя *" className={s.input__name} />
                  <InputMask
                     name="tel"
                     id="formTel1"
                     placeholder="Номер телефона *"
                     defaultValue={"+998"}
                     mask="+999 (99) 999-99-99"
                     alwaysShowMask={false}
                     className={` ${s.input} ${s.input__tel}`}
                  ></InputMask>
                  <div className={`${s.input} ${s.input__textfield}`}>
                     <textarea placeholder={"Сообщение"} className={s.field} />
                  </div>
                  <button type="submit" className={s.btn}>
                     Отправить
                  </button>
               </Form>
            </Formik>
         </Container>
      </section>
   );
}
export default FormComponent;
