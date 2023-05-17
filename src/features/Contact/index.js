import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Title } from '../AboutUs/styled';
import { Button, Input, Label, StyledContact, StyledForm, TextArea } from './styled';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <StyledContact>
      <Title> Napisz do nas!</Title>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <Label>Imię i Nazwisko:</Label>
        <Input type="text" name="user_name" />
        <Label>Telefon:</Label>
        <Input type="number" name="user_phone" />
        <Label>Email:</Label>
        <Input type="email" name="user_email" />
        <Label>Wiadomość:</Label>
        <TextArea name="message" wrap="soft" rows="10" cols="50" />
        <Button type="submit" value="Wyślij" />
      </StyledForm>
    </StyledContact>

  );
};
