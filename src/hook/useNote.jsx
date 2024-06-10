import { useState, useRef } from 'react';

const useNotes = () => {
  const nameRef = useRef('');
  const ageRef = useRef('');
  const notedRef = useRef('');
  const [notes, setNotes] = useState([]);

  const addNote = (incrementCount, countAge16, countAge17) => {
    const newNote = { 
      name: nameRef.current.value, 
      age: ageRef.current.value, 
      noted: notedRef.current.value 
    };
    setNotes([...notes, newNote]);
    nameRef.current.value = ''; 
    ageRef.current.value = '';
    notedRef.current.value = '';
    incrementCount();
    countAge16(parseInt(newNote.age));
    countAge17(parseInt(newNote.age));
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes.slice(0, index), ...notes.slice(index + 1)];
    setNotes(updatedNotes);
  };

  return { 
    nameRef, ageRef, notedRef, notes, addNote, deleteNote 
  };
};

export default useNotes;