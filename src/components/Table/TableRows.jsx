import Button from '../Button';
import React from 'react';

const TableRows = ({ todos, handleDelete, handleEdit }) => {
   return (
      <tbody id='table-body'>
         {todos.map((todo, index) => {
            return (
               <tr key={todo.id} id='t-row'>
                  <td>{index + 1}</td>
                  <td>{todo.title}</td>
                  <td>{todo.desc}</td>
                  <td className='buttontd'>
                     <Button
                        className='btn'
                        id='editbtn'
                        type='button'
                        text='Edit'
                        onClick={() => handleEdit(todo.id)}
                     />
                     <Button
                        id='dltbtn'
                        className='btn'
                        onClick={() => handleDelete(todo.id)}
                        text='Delete'
                     />
                  </td>
               </tr>
            );
         })}
      </tbody>
   );
};

export default TableRows;
