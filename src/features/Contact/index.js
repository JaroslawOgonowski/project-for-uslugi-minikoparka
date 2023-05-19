import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Input, Label, StyledContact, StyledForm, TextArea, Title } from './styled';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const phone = form.current.user_phone.value;

    if(!phone.match(/^\d{9,}$/)) {
      alert("🚧 Numer telefonu musi składać się z co najmniej 9 cyfr 🚧");
      return;
    }
    emailjs.sendForm('service_zxvivlk', 'template_mt428iq', form.current, 'ZtlgmRZ8fDNJvb-9c')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
      alert("Twoja wiadomość została wysłana 👷‍♂️")
  };

  return (

    <StyledContact>
      <Title> Napisz do nas!</Title>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <Label>Imię i Nazwisko:</Label>
        <Input type="text" required name="user_name" />
        <Label>Telefon:</Label>
        <Input type="tel" pattern="^\d{9,}$" required name="user_phone" placeholder='np.: 123456789' />
        <Label>Email:</Label>
        <Input type="email" required name="user_email" />
        <Label>Wiadomość:</Label>
        <TextArea name="message" required wrap="soft" rows="10" cols="50" />
        <Button type="submit" value="Wyślij" />
      </StyledForm>
    </StyledContact>

  );
};
