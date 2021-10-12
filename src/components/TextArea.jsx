import React from 'react';

const TextArea = ({ col, row, styleID, text }) => {
   return (
      <textarea col={col} row={row}>
         {text ? text : ''}
      </textarea>
   );
};

export default TextArea;
