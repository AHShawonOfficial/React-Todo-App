import Table from './components/Table/Table';
import { useState, useEffect } from 'react';
import AddForm from './components/AddForm';
import ModifyForm from './components/ModifyForm';

function App() {
   //States and Consts
   const [todos, setTodos] = useState([]);
   const [editTodoId, setEditTodoId] = useState(null);
   const [showModifyForm, setShowModifyForm] = useState('modifyForm');

   //Get Todos from Server
   useEffect(() => {
      const getTodos = async () => {
         const res = await fetch('http://localhost:5000/todos');
         const data = await res.json();
         setTodos(data);
      };
      getTodos();
   }, []);

   const validateTable = () => {
      if (todos.length === 0) {
         return (
            <div
               style={{
                  textAlign: 'center',
                  userSelect: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '40%',
               }}
            >
               <p style={{ fontSize: '1.7rem' }}>There is no ToDo to show...</p>
               <p>
                  <b>Add some...</b>
               </p>
            </div>
         );
      } else {
         return (
            <Table
               todos={todos}
               handleDelete={deleteTodo}
               handleEdit={handleEdit}
            />
         );
      }
   };

   //Add Section Start//
   const addTodo = async (todo) => {
      const res = await fetch('http://localhost:5000/todos', {
         method: 'POST',
         headers: { 'content-type': 'application/json' },
         body: JSON.stringify(todo),
      });

      const data = await res.json();
      setTodos([...todos, data]);
   };
   //Add Section End//

   //Delete Section Start//
   const deleteTodo = async (id) => {
      await fetch(`http://localhost:5000/todos/${id}`, {
         method: 'Delete',
      });

      setTodos(todos.filter((todo) => todo.id !== id));
      setShowModifyForm('modifyFormHidden');
   };
   //Delete Section End//

   //Edit Section Start//
   const handleEdit = (id) => {
      setEditTodoId(id);
      setShowModifyForm('showModifyForm');
   };

   const modifyData = async (modifiedtodo) => {
      const res = await fetch(`http://localhost:5000/todos/${editTodoId}`, {
         method: 'PUT',
         headers: { 'Content-type': 'application/json' },
         body: JSON.stringify(modifiedtodo),
      });

      const data = await res.json();
      setTodos(todos.map((todo) => (todo.id === editTodoId ? data : todo)));
      setEditTodoId(null);
      setShowModifyForm('modifyFormHidden');
   };

   const modifyCancel = () => {
      setEditTodoId(null);
      setShowModifyForm('modifyFormHidden');
   };

   const modifyForm = () => {
      if (showModifyForm) {
         return (
            <ModifyForm
               editTodoId={editTodoId}
               modifyData={modifyData}
               modifyCancel={modifyCancel}
               id={showModifyForm}
            />
         );
      } else {
         return (
            <ModifyForm
               editTodoId={editTodoId}
               modifyData={modifyData}
               modifyCancel={modifyCancel}
               id={showModifyForm}
            />
         );
      }
   };
   //Edit Section End//

   return (
      <>
         <div className='container'>
            <h1>To Do App</h1>
            <AddForm addTodo={addTodo} />
            {validateTable()}
            {modifyForm()}
         </div>
      </>
   );
}

export default App;
