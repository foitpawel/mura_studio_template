import React from "react";
import PropTypes from "prop-types";

const Usluga = ({ icon, title }) => {
  return (
    <button className="relative w-full" style={{ paddingBottom: '100%' }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center hover:shadow-xl transition duration-200 p-8 border border-primary-100">
        <div className="mb-4">
          <img src={icon} width={48} height={48} alt={title} />
        </div>
        <div className="flex flex-col gap-4 text-center">
          <p className="text-neutral-700 md:text-display-xxs text-display-xxs font-body text-body-lg">
            {title}
          </p>
        </div>
      </div>
    </button>
  );
};

Usluga.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Usluga;
