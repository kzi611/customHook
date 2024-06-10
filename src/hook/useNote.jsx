import { useState } from 'react';

const useNotes = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [noted, setNoted] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = (incrementCount, countAge16, countAge17) => {
    const newNote = { name, age, noted };
    setNotes([...notes, newNote]);
    setName('');
    setAge('');
    setNoted('');
    incrementCount();
    countAge16(parseInt(age));
    countAge17(parseInt(age));
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes.slice(0, index), ...notes.slice(index + 1)];
    setNotes(updatedNotes);
  };

  return {
    name, setName,
    age, setAge,
    noted, setNoted,
    notes, addNote,
    deleteNote
  };
};

export default useNotes;