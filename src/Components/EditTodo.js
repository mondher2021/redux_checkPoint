import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import Modal from 'react-modal';

import { editTodo } from '../Redux/Actions/todosActions';

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const EditTodo = ({ task }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editInput, setEditInput] = useState('');
  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditInput('');
  };

  return (
    <div>
      <button className="btn" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 48 48"
          version="1.1"
        >
          <g id="surface7246542">
            <path
              style={{ fill: '#7c7c7c' }}
              d="M 36 4 L 31.171875 8.828125 L 39.171875 16.828125 L 44 12 Z M 28.152344 11.847656 L 6 34 L 6 42 L 14 42 L 36.152344 19.847656 Z M 28.152344 11.847656 "
            />
          </g>
        </svg>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3 style={{ margin: 0, padding: 0, color: '#7c7c7c' }}>
          Edit To Do...
        </h3>
        <form>
          <input
            type="text"
            id="ModalInput"
            placeholder={task.text}
            value={editInput}
            onChange={(event) => setEditInput(event.target.value)}
          />
          <button
            className="Modal-Btn"
            onClick={() => {
              editInput.trim()
                ? dispatch(
                    editTodo({
                      id: task.id,
                      text: editInput,
                    })
                  )
                : alert('No changes were made!!');
              closeModal();
              setEditInput('');
            }}
          >
            Submit
          </button>
          <button className="Modal-Btn" onClick={closeModal}>
            close
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default connect()(EditTodo);
