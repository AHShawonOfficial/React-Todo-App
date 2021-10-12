import TableRows from './TableRows';
import React from 'react';

const Table = ({ todos, handleDelete, handleEdit }) => {
   return (
      <div className='tableWrapper'>
         <table border='1'>
            <colgroup>
               <col style={{ width: '5%' }} />
               <col style={{ width: '25%' }} />
               <col style={{ width: '55%' }} />
               <col style={{ minWidth: '190px', maxWidth: '190px' }} />
            </colgroup>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Action</th>
               </tr>
            </thead>
            <TableRows
               todos={todos}
               handleDelete={handleDelete}
               handleEdit={handleEdit}
            />
         </table>
      </div>
   );
};

export default Table;
