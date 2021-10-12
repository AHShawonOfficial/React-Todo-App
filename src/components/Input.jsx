import React from "react";

const Input = ({ name, type, placeholder, styleID }) => {
   return (
      <input name={name} type={type} placeholder={placeholder} id={styleID} />
   );
};

export default Input;
