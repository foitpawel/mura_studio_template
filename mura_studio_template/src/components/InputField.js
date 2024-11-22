import React, { useState, useEffect } from "react";
import "../styles/global.css";

const InputField = ({ name, type, value, onChange, placeholder, title }) => {
  const [borderColor, setBorderColor] = useState("border-primary-600");

  useEffect(() => {
    if (value) {
      setBorderColor("border-primary-600");
    } else {
      setBorderColor("border-primary-100");
    }
  }, [value]);

  return (
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      title={title}
      className={`placeholder-primary-600 font-body text-body-base mb-2 pb-1.5 border-b-2 ${borderColor} focus:border-primary-100 focus:placeholder-primary-100 transition-colors duration-300 autofill-border`} 
      required
    />
  );
};


export default InputField;
