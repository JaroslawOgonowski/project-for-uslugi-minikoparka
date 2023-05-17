import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Title } from '../AboutUs/styled';

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
  <>
    <Title> Napisz do nas!</Title>
    <form ref={form} onSubmit={sendEmail}>
      <label>Imię i Nazwisko:</label>
      <input type="text" name="user_name" />
      <label>Telefon:</label>
      <input type="number" name="user_phone" />
      <label>Email:</label>
      <input type="email" name="user_email" />
      <label>Wiadomość:</label>
      <textarea name="message" />
      <input type="submit" value="Wyślij" />
    </form>
    </>
  );
};
