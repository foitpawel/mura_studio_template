import React, { useEffect, useState } from "react";

import Button from "./button";
import InputField from "./InputField";

const genEmptyForm = () => ({
  name: '',
  email: '',
  message: ''
});

const Formularz = () => {
  const [values, setValues] = useState(genEmptyForm());
  const [disabled, setDisabled] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const handleChangeValue = key => evt => setValues({...values, [key]: evt.target.value});
  const handleClearValues = () => {
    setValues(genEmptyForm());
    setIsClicked(false);
  };
  const handleSetIsClicked = () => setIsClicked(true);

  const handleInvalid = (e) => {
    if (e.target.validity.valueMissing) {
      e.target.setCustomValidity("To pole jest wymagane. Proszę je wypełnić.");
    }
    
    if (e.target.name === 'email' && e.target.validity.typeMismatch) {
      e.target.setCustomValidity("Proszę podać prawidłowy adres e-mail.");
    }
  };

  const handleInput = (e) => {
    e.target.setCustomValidity("");
  };

  useEffect(() => {
    setDisabled(Object.values(values).some(v => v === ''));
  }, [values]);

  return (
    <form 
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      action="/successScreen/"
      className="flex flex-col grid gap-2"
    >
      <h2 className="mb-4 text-primary-600 font-body text-body-lg">Formularz kontaktowy</h2>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <InputField
        type="text"
        name="name"
        value={values.name}
        onChange={handleChangeValue("name")}
        placeholder="Imię"
        title="Podaj swoje imię"
      />
      <InputField
        type="email"
        name="email"
        value={values.email}
        onChange={handleChangeValue("email")}
        placeholder="Adres e-mail"
        title="Podaj swój adres e-mail"
      />
      <textarea name="message" id="message" rows="5" 
        value={values.message || ''} 
        onChange={handleChangeValue('message')} 
        onInvalid={handleInvalid}
        onInput={handleInput}
        placeholder="Wiadomość" 
        title="Napisz swoją wiadomość"
        className="pt-2 resize-non placeholder-primary-600 font-body text-body-base focus:placeholder-primary-300" 
        required 
      />
      <div className="flex justify-end grid-row flex-row gap-2">
        <a className={`${isClicked ? "block" : "hidden"} text-red mr-auto`}>Wypełnij wszystkie pola!</a>
        <Button type="reset" value="Anuluj" onClick={handleClearValues} label="Anuluj" variant="text" />
        <Button type="submit" label="Wyślij" onClick={handleSetIsClicked} disabled={disabled} />
      </div>
    </form>
  );
};

export default Formularz;
