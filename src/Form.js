import React, { useState } from 'react';
import { Menu } from './Menu';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { questions } from './constants';
import emailjs from 'emailjs-com';

export const Form = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    emailjs
      .send(
        'service_7yokpsv',
        'template_j8s4jp9',
        data,
        'user_lHT5i4iPwLt5UeWyUxt7G'
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            setLoading(false);
            setSuccess(true);
          }
        },
        (error) => {
          if (error.text) {
            setLoading(false);
            setError(true);
          }
        }
      );
  };

  return (
    <div>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='Un dia en la protesta de....'
          type='text'
          {...register('nombre', { required: true })}
        />

        <input placeholder='Edad' type='number' {...register('edad')} />

        <input placeholder='Género' type='text' {...register('genero')} />

        <input placeholder='Fecha' type='date' {...register('fecha')} />

        <input placeholder='Lugar' type='text' {...register('lugar')} />

        {questions.map((question, index) => {
          return (
            <input
              key={index}
              placeholder={question.label}
              type='text'
              {...register(question.name)}
            />
          );
        })}

        <input
          type='submit'
          value={
            loading
              ? 'Enviando...'
              : success
              ? 'Enviado!'
              : error
              ? 'Server Error'
              : 'Enviar'
          }
        />
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
  margin: 15px auto;

  @media screen and (min-width: 768px) {
    max-width: 50vw;
    margin: 50px auto;
  }

  input {
    height: 35px;
    padding: 0 5px;
    border: 1px solid #bfbfbf;
    border-radius: 5px;
  }
`;
