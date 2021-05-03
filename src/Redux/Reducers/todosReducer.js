import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
} from '../Constants/actionTypes';

const initialState = {
  tasks: [
    { text: 'Go WORK', id: 0, isCompleted: false },
    
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: state.tasks.concat(action.payload),
      };

    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter((el, i) => el.id !== action.payload),
      };

    case COMPLETE_TODO:
      return {
        ...state,
        tasks: state.tasks.map((el, i) =>
          el.id === action.payload ? { ...el, complete: !el.complete } : el
        ),
      };

    case EDIT_TODO:
      return {
        ...state,
        tasks: state.tasks.map((el, i) =>
          el.id === action.payload.id
            ? { ...el, text: action.payload.text, complete: false }
            : el
        ),
      };

    default:
      return state;
  }
};

export default todos;
