import React, { useState, useEffect } from 'react';
import './App.css';

const removeIcon = <svg t="1594631006229" className="remove icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1144" width="200" height="200"><path d="M256 810.666667c0 46.933333 38.4 85.333333 85.333333 85.333333h341.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V298.666667H256v512z m105.173333-303.786667l60.373334-60.373333L512 536.96l90.453333-90.453333 60.373334 60.373333L572.373333 597.333333l90.453334 90.453334-60.373334 60.373333L512 657.706667l-90.453333 90.453333-60.373334-60.373333L451.626667 597.333333l-90.453334-90.453333zM661.333333 170.666667l-42.666666-42.666667H405.333333l-42.666666 42.666667h-149.333334v85.333333h597.333334V170.666667z" p-id="1145" fill="#ffffff"></path></svg>;
const completeIcon = <svg t="1594633274688" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1772" width="200" height="200"><path d="M512 1024C229.678545 1024 0 794.321455 0 512 0 229.701818 229.678545 0 512 0s512 229.701818 512 512C1024 794.321455 794.321455 1024 512 1024zM512 44.520727C254.231273 44.520727 44.520727 254.231273 44.520727 512S254.231273 979.502545 512 979.502545 979.479273 769.768727 979.479273 512 769.768727 44.520727 512 44.520727z" p-id="1773" fill="#ffffff"></path><path d="M460.613818 680.750545c-4.514909 0-9.076364-1.326545-13.102545-4.049455l-191.092364-130.373818c-10.635636-7.261091-13.358545-21.736727-6.120727-32.349091 7.261091-10.612364 21.736727-13.358545 32.349091-6.120727l191.092364 130.373818c10.635636 7.261091 13.358545 21.736727 6.120727 32.349091C475.345455 677.213091 468.037818 680.750545 460.613818 680.750545z" p-id="1774" fill="#ffffff"></path><path d="M460.637091 680.750545c-5.934545 0-11.892364-2.257455-16.430545-6.795636-9.099636-9.076364-9.122909-23.784727-0.046545-32.907636l293.818182-294.818909c9.053091-9.099636 23.761455-9.146182 32.907636-0.046545 9.099636 9.076364 9.146182 23.808 0.046545 32.930909L477.114182 673.908364C472.576 678.469818 466.594909 680.750545 460.637091 680.750545z" p-id="1775" fill="#ffffff"></path></svg>;
const uncompleteIcon = <svg t="1594633315729" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2532" width="200" height="200"><path d="M510.742357 92.463901c230.651171 0 418.307108 187.654914 418.307107 418.307108s-187.654914 418.307108-418.307107 418.307108-418.307108-187.654914-418.307108-418.307108 187.655937-418.307108 418.307108-418.307108m0-29.879517c-247.518327 0-448.185602 200.667276-448.185602 448.185602s200.667276 448.185602 448.185602 448.185602c247.532653 0 448.185602-200.667276 448.185602-448.185602S758.27501 62.584384 510.742357 62.584384z" fill="#ffffff" p-id="2533"></path></svg>;

function Todo({ index, todo, removeTodo, completeTodo }) {
  return (
    <div className="item">
      <div className="left">
        <a href="#!" onClick={e => e.preventDefault() || completeTodo(index)}>{todo.completed ? completeIcon : uncompleteIcon}</a>
        <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{todo.name}</span>
      </div>
      <a href="#!" onClick={e => e.preventDefault() || removeTodo(index)}>{removeIcon}</a>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    addTodo(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} className="input" onChange={e => setValue(e.target.value)}></input>
    </form>
  );
}

export function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos'))
    ||
    [
      { name: 'Apple Inc.', completed: false },
      { name: 'Google Inc.', completed: false },
      { name: 'Huawei Inc.', completed: false }
    ]
  );
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  const addTodo = name => {
    const temp = [{ name, completed: false }, ...todos];
    setTodos(temp);
  };
  const removeTodo = index => {
    const temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };
  const completeTodo = index => {
    const temp = [...todos];
    temp.find((v, i) => i === index).completed = true;
    setTodos(temp);
  };
  return (
    <div className="app">
      <div className="todo-list">
        <TodoForm addTodo={addTodo}></TodoForm>
        {todos.map((todo, index) => <Todo key={Math.random()} index={index} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}></Todo>)}
      </div>
    </div>
  );
}

export default App;
