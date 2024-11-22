import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ disabled, onClick, label, link, size, icon, type, variant }) => {
  const classes = `
    button flex gap-1 items-center justify-center
    ${variant === "outlined" ? "border border-primary-600" : "border-none"}
    ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
    font-bold ${["outlined", "text"].includes(variant) ? "bg-transparent" : "bg-primary-600"}
    ${variant === "text" ? "text-neutral-500" : variant === "outlined" ? "text-primary-600" : "text-white"}
    font-semibold rounded-sm
    ${size === "lg" ? "px-6 py-4 text-body-sm" : "px-5 py-3 text-body-xs"}
  `;

  if (link && link.startsWith("/")) {
    return (
      <Link to={link} className={classes} onClick={onClick} role="button">
        {label}
        {icon && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
        )}
      </Link>
    );
  } else if (link) {
    return (
      <a href={link} className={classes} onClick={onClick} role="button">
        {label}
        {icon && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
        )}
      </a>
    );
  } else {
    return (
      <button className={classes} type={type} onClick={onClick} disabled={disabled}>
        {label}
        {icon && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
        )}
      </button>
    );
  }
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["outlined", "text", "default"]),
};

export default Button;
