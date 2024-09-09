import React from "react";

import Button from "./button";

const Formularz = () => {
  return (
    <form 
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      className="flex flex-col grid gap-2"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      {/* <div> */}
        {/* <label className="flex">
          Name
        </label> */}
        <input type="text" name="name" id="name" placeholder="Imię" className="w-1/2 placeholder-primary-600 focus:placeholder-primary-300" />
      {/* </div> */}
      {/* <div> */}
        {/* <label className="flex">
          Email */}
          <input type="email" name="email" id="email" placeholder="Adres e-mail" className="w-1/2 placeholder-primary-600 focus:placeholder-primary-300 mb-5" />
        {/* </label> */}
      {/* </div> */}
      {/* <div>
        <label> */}
          {/* Subject */}
          {/* <input type="text" name="subject" id="subject" placeholder="Temat" className="w-1/2 placeholder-primary-600 focus:placeholder-primary-300" /> */}
        {/* </label> */}
      {/* // </div> */}
      {/* // <div> */}
      {/* <label>
        Message */}
        <textarea name="message" id="message" rows="5" placeholder="Wiadomość" className="resize-non placeholder-primary-600 focus:placeholder-primary-300"/>
      {/* </label> */}
      {/* </div> */}
      <div className="flex justify-end">
      <input type="reset" value="Anuluj" label="Anuluj" className="mr-5" />
      <Button type="submit" label="Wyślij" />
      </div>
    </form>
  );
};

export default Formularz;
