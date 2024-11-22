import React, { useEffect, useState } from "react";
import Button from "./button";

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
      <input type="text" name="name" id="name" 
        value={values.name || ''} 
        onChange={handleChangeValue('name')} 
        onInvalid={handleInvalid}
        onInput={handleInput}
        placeholder="Imię" 
        title="Podaj swoje imię"
        className="placeholder-primary-600 font-body text-body-base focus:placeholder-primary-300 mb-2 pb-1.5 border-b-2 border-primary-600" 
        required 
      />
      <input type="email" name="email" id="email" 
        value={values.email || ''} 
        onChange={handleChangeValue('email')} 
        onInvalid={handleInvalid}
        onInput={handleInput}
        placeholder="Adres e-mail"
        title="Podaj swój adres e-mail"
        className="placeholder-primary-600 font-body text-body-base focus:placeholder-primary-300 mb-5 pb-1.5 border-b-2 border-primary-600" 
        required 
      />
      <textarea name="message" id="message" rows="5" 
        value={values.message || ''} 
        onChange={handleChangeValue('message')} 
        onInvalid={handleInvalid}
        onInput={handleInput}
        placeholder="Wiadomość" 
        title="Napisz swoją wiadomość"
        className="resize-non placeholder-primary-600 font-body text-body-base focus:placeholder-primary-300" 
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
