import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import { addTodo } from '../Redux/Actions/todosActions';

/* const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
}; */

const AddTodo = () => {
  const [input, setInput] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  let id = tasks.length + 1;
  return (
    <div className="Input-Container">
      <div className="add-element">
        <h1>TO-DO APPLiCATION</h1>
       
        <div>
          <input
            type="text"
            id="myInput"
            placeholder=" "
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            className="add-Btn"
            onClick={() => {
              input.trim()
                ? dispatch(addTodo({ id, text: input, complete: false }))
                : alert(' enter a valid text');
              setInput('');
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect()(AddTodo);
