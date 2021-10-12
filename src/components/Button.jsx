import { useState } from 'react';

const Button = ({
   type,
   text,
   hoverColor,
   hoverBGcolor,
   onClick,
   style,
   className,
   id,
}) => {
   const [hover, setHover] = useState(false);
   const hoverStyles = {
      backgroundColor: hoverBGcolor,
      color: hoverColor,
   };

   return (
      <button
         className={className}
         id={id}
         type={type}
         onMouseEnter={() => {
            setHover(true);
         }}
         onMouseLeave={() => {
            setHover(false);
         }}
         style={hover ? { ...style, ...hoverStyles } : { ...style }}
         onClick={onClick}
      >
         {text}
      </button>
   );
};

Button.defaultProps = {
   type: 'button',
   text: 'BUTTON',
   style: {},
   className: '',
   id: '',
};

export default Button;
