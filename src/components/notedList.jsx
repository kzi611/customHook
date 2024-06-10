import React from "react";
import STYLE from "../style/style";
import TrashIcon from "../button/iconDelete";

function NotedList({ name, age, noted, onDelete }) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div class="anote" style={STYLE.anote}>
      <div class="name" style={STYLE.name}>
        <label style={STYLE.label}>Name: </label>
        <div>{name}</div>
      </div>
      <div class="name" style={STYLE.name}>
        <label style={STYLE.label}>Age: </label>
        <div>{age}</div>
      </div>
      <div class="name" style={STYLE.name}>
        <label style={STYLE.label}>Noted: </label>
        <div>{noted}</div>
      </div>
      <div class="button" style={STYLE.button}>
        <button onClick={handleDelete}><TrashIcon/></button>
      </div>
    </div>
  );
}

export default NotedList;