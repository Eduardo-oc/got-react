import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import './Search.scss';

export default function Search(props) {
  const { register, handleSubmit, errors } = useForm();
  const { t, i18n } = useTranslation("global");

  const onKeyUp = (data) => {
    props.fnFilterCharacters(data);
    console.log(data);
  };



  return (
    <form
      className="container-fluid"
      onChange={handleSubmit(onKeyUp)}
      onKeyPress={(event) => {
        if (event.which === 13) {
          event.preventDefault();
        }
      }}
    >
      <input className="row align-items-start search" type="text" name="name" id="name" placeholder={t("search.placeholder")} ref={register} />
    </form>
  );
}