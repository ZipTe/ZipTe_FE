import React, { useState } from 'react';

const initState = {
  title: '',
  content: '',
  localDate: '',
};

function AddComponent(props) {
  const [todo, setTodo] = useState(...initState);

  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value;

    console.log(e.target.value, todo[e.target.name]);

    setTodo({ ...todo });
  };

  return <div></div>;
}

export default AddComponent;
