import React from 'react';

const Input = ({ name, age, noted, getName, getAge, getNoted, addNote }) => {
  return (
    <div className="input">
      <div className="name">
        <label>Name: </label>
        <textarea name="name" value={name} onChange={getName} />
      </div>
      <div className="age">
        <label>Age:</label>
        <textarea name="age" value={age} onChange={getAge} />
      </div>
      <div className="noted">
        <label>Noted: </label>
        <textarea name="noted" value={noted} onChange={getNoted} />
      </div>
      <button className="add" onClick={addNote}>Add</button>
    </div>
  );
};

export default Input;