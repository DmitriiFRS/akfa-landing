"use client";

import { ErrorMessage, Field } from "formik";
import s from "./s.module.scss";

interface Props {
   id: string;
   name: string;
   placeholder: string;
   error?: string;
   className?: string;
}

function Input({ id, name, placeholder, error, className }: Props) {
   return (
      <div className={`${s.input} ${className}`}>
         <Field
            name={name}
            id={id}
            placeholder={placeholder}
            className={s.field}
            style={{
               "&::placeholder": {
                  color: "red",
               },
            }}
         />
         <ErrorMessage name={name}>
            {(error) => (
               <span className={s.errorSpan} style={{ color: "red" }}>
                  {error}
               </span>
            )}
         </ErrorMessage>
      </div>
   );
}
export default Input;
