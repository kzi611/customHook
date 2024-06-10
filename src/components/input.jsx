import React from 'react';

const Input = ({ nameRef, ageRef, notedRef, addNote }) => {
  const handleAddNote = () => {
    addNote();
    nameRef.current.value = '';
    ageRef.current.value = '';
    notedRef.current.value = '';
  };

  return (
    <div className="input">
      <div className="name">
        <label>Name: </label>
        <textarea name="name" ref={nameRef} />
      </div>
      <div className="age">
        <label>Age:</label>
        <textarea name="age" ref={ageRef} />
      </div>
      <div className="noted">
        <label>Noted: </label>
        <textarea name="noted" ref={notedRef} />
      </div>
      <button className="add" onClick={handleAddNote}>Add</button>
    </div>
  );
};

export default Input;