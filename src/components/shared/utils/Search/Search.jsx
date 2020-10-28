import React from "react";
import { useForm } from "react-hook-form";
import './Search.scss';

export default function Search(props) {
  const { register, handleSubmit, errors } = useForm();

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
      <input className="row align-items-start search" type="text" name="name" id="name" placeholder="search" ref={register} />
    </form>
  );
}