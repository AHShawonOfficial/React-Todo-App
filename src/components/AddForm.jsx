import Button from './Button';
import { useState, useRef } from 'react';

const AddForm = ({ addTodo }) => {
   const [title, setTitle] = useState('');
   const [desc, setDesc] = useState('');
   const inputFocus = useRef();

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!title || !desc) {
         alert("Inputs can't be empty");
         return;
      }

      addTodo({ title, desc });
      setTitle('');
      setDesc('');
      inputFocus.current.focus();
   };

   return (
      <form className='inputs' onSubmit={handleSubmit}>
         <input
            ref={inputFocus}
            value={title}
            type='text'
            className='inputttl'
            placeholder='Task Title'
            onChange={(e) => setTitle(e.target.value)}
         />
         <input
            value={desc}
            type='text'
            className='inputdesc'
            placeholder='Task Description'
            onChange={(e) => setDesc(e.target.value)}
         />
         <Button type='submit' text='Add' className='btn' id='addbtn' />
      </form>
   );
};

export default AddForm;
