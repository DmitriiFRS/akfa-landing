import * as Yup from "yup";

const regx = {
   name: /^[a-zA-Zа-яА-Я]{2,20}$/,
   tel: /\(\d{3}\)\s\d{3}-\d{4}/,
};

const name = Yup.string().matches(regx.name, "Имя от 2 до 20 символов").required("Обязательное поле");

const phoneNumber = Yup.string().matches(regx.tel, "Введите корректный номер телефона").required("Обязательное поле");

export const schemas = Yup.object().shape({
   name,
   tel: phoneNumber,
   comment: Yup.string(),
});

export const formData = {
   name: "",
   tel: "",
   comment: "",
};
