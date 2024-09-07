import * as Yup from "yup";
import "yup-phone-lite";

const regx = {
   name: /^[a-zA-Zа-яА-Я]{2,20}$/,
   tel: /^.{16}$/,
};

const name = Yup.string().matches(regx.name, "Имя от 2 до 20 символов").required("Обязательное поле");

const phoneNumber = Yup.string().phone().required("Обязательное поле");

export const schemas = Yup.object().shape({
   name,
   tel: Yup.string(),
   comment: Yup.string(),
});

export const formData = {
   name: "",
   tel: "",
   comment: "",
};
