import React from "react";
import { useForm } from "react-hook-form";

export default function Search(props) {
  const { register, handleSubmit, errors } = useForm();

  const onKeyUp = (data) => {
    props.fnFilterCharacters(data);
    console.log(data);
  };

  return (
    <form
      onChange={handleSubmit(onKeyUp)}
      onKeyPress={(event) => {
        if (event.which === 13 /* Enter */) {
          event.preventDefault();
        }
      }}
    >
      <input type="text" name="name" id="name" placeholder="search" ref={register} />
    </form>
  );
}