import React from "react";
import { Menu } from "./Menu";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { questions } from "./constants";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Un dia en la protesta de...."
          type="text"
          {...register("nombre", { required: true })}
        />

        <input placeholder="Edad" type="number" {...register("edad")} />

        <input placeholder="Género" type="text" {...register("genero")} />

        <input placeholder="Fecha" type="date" {...register("fecha")} />

        <input placeholder="Lugar" type="text" {...register("lugar")} />

        {questions.map((question, index) => {
          const name = question.replace(/\s/g, "");
          return (
            <input
              key={index}
              placeholder={question}
              type="text"
              {...register(name)}
            />
          );
        })}

        <input type="submit" value="Enviar" />
      </FormBox>
      <Menu />
    </div>
  );
};

const FormBox = styled.form`
  background: white;
  color: #282c34;
  padding: 20px;
  position: relative;
  box-shadow: 5px 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 50vw;
  margin: 50px auto;

  input {
    height: 35px;
    padding: 0 5px;
    border: 1px solid #bfbfbf;
    border-radius: 5px;
  }
`;
