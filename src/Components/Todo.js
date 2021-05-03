import React from 'react';
import { connect, useDispatch } from 'react-redux';

import { deleteTodo, completeTodo } from '../Redux/Actions/todosActions';

import EditTodo from './EditTodo';

const Todo = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <p
        style={{ textDecoration: task.complete ? 'line-through' : 'none' }}
        onClick={() => dispatch(completeTodo(task.id))}
      >
        {task.text}
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '60px',
        }}
      >
        <EditTodo task={task} />
        <button className="btn" onClick={() => dispatch(deleteTodo(task.id))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 172 172"
            style={{ fill: '#7c7c7c' }}
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: 'normal' }}
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#7c7c7c">
                <path d="M71.66667,14.33333l-7.16667,7.16667h-35.83333v14.33333h114.66667v-14.33333h-35.83333l-7.16667,-7.16667zM35.83333,50.16667v107.5h100.33333v-107.5zM67.43945,71.66667l18.56055,18.56055l18.56055,-18.56055l10.10612,10.10612l-18.56055,18.56055l18.56055,18.56055l-10.10612,10.10612l-18.56055,-18.56055l-18.56055,18.56055l-10.10612,-10.10612l18.56055,-18.56055l-18.56055,-18.56055z"></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </li>
  );
};

export default connect()(Todo);
