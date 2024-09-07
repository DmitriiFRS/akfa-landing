import s from "./s.module.scss";

interface Props {
   isFormSubmitted: boolean;
}

const SuccessForm: React.FC<Props> = ({ isFormSubmitted }) => {
   return (
      <div className={`${s.label} ${s.label__success}`}>
         <h3 className={s.label__title}>Ваша заявка успешно отравлена</h3>
      </div>
   );
};

export default SuccessForm;
