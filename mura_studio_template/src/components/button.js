import React from "react";
import PropTypes from "prop-types";

const Button = ({ disabled, onClick, label, link, size, icon, type, variant }) => (
  <button
    className={`button flex gap-1 items-center justify-center
      ${variant === 'outlined' ? `border border-primary-600` : 'border-none'}
      cursor-pointer
      font-bold
      ${['outlined', 'text'].includes(variant) ? 'bg-none' : 'bg-primary-600'}
      ${variant === 'text' ? 'text-neutral-500' : 
      variant === 'outlined' ? 'text-primary600' : 'text-white'}
      font-semibold rounded-sm
      ${size === "lg" ? "px-6 py-4 text-body-sm" : "px-5 py-3 text-body-xs"}`
    }
    href={link}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
    {icon === true ? (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.1668 5.83301L5.8335 14.1663"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.6665 5.83301H14.1665V13.333"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      ""
    )}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.bool,
};

export default Button;
