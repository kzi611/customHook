import './style/App.css';
import NotedList from './components/notedList.jsx';
import useCount from './hook/useCount';
import useNotes from './hook/useNote';
import Statistic from './components/statistic.jsx';
import Input from './components/input.jsx';

function App() {
  const { nameRef, ageRef, notedRef, addNote, notes, deleteNote } = useNotes();
  const { state, incrementCount, countAge16, countAge17 } = useCount();

  const handleAddNote = () => {
    addNote(incrementCount, countAge16, countAge17);
  };

  return (
    <div>
      <div className="header">
        <Input 
          nameRef={nameRef} ageRef={ageRef} notedRef={notedRef} addNote={handleAddNote} 
        />
        <Statistic state={state} />
      </div>
      <div className="listNote">
        <label className="note-label">List note: </label>
        <div className="note">
          {notes.map((note, index) => (
            <NotedList key={index} {...note} onDelete={() => deleteNote(index)} /> 
          ))}
        </div>
      </div>
    </div>   
  );
}

export default App;