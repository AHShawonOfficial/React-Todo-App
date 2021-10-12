import Button from './Button';
import { useState, useEffect } from 'react';

const ModifyForm = ({ editTodoId, modifyData, modifyCancel, id }) => {
   const [title, setTitle] = useState('');
   const [desc, setDesc] = useState('');

   useEffect(() => {
      const fetchTodo = async () => {
         const res = await fetch(`http://localhost:5000/todos/${editTodoId}`);
         const data = await res.json();
         setTitle(data.title);
         setDesc(data.desc);
      };
      fetchTodo();
   }, [editTodoId]);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!title || !desc) {
         alert("Inputs can't be empty");
         return;
      }

      modifyData({ title, desc });
      setTitle('');
      setDesc('');
   };

   const handleCancel = () => {
      setTitle('');
      setDesc('');
      modifyCancel();
   };

   return (
      <form className='inputs' id={id} onSubmit={handleSubmit}>
         <input
            type='text'
            id='modify-title'
            value={title}
            onChange={(e) => {
               setTitle(e.target.value);
               console.log(title);
            }}
         />
         <textarea
            col='20'
            row='20'
            id='modify-desc'
            onChange={(e) => {
               setDesc(e.target.value);
               console.log(desc);
            }}
            value={desc}
         ></textarea>
         <div className='buttons'>
            <Button className='btn' id='update' type='submit' text='UPDATE' />
            <Button
               className='btn'
               id='cancel'
               type='button'
               text='CANCEL'
               onClick={() => handleCancel()}
            />
         </div>
      </form>
   );
};

export default ModifyForm;
