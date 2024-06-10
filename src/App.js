import './style/App.css';
import NotedList from './components/notedList.jsx';
import useCount from './hook/useCount';
import useNotes from './hook/useNote';
import Statistic from './components/statistic.jsx';
import Input from './components/input.jsx';

function App() {
  const { name, setName, age, setAge, noted, setNoted, notes, addNote, deleteNote } = useNotes();
  const { state, incrementCount, countAge16, countAge17 } = useCount();

  const handleAddNote = () => {
    addNote(incrementCount, countAge16, countAge17);
  };

  return (
    <div>
      <div className="header">
        <Input name={name} age={age} noted={noted}
          getName={(e) => setName(e.target.value)}
          getAge={(e) => setAge(e.target.value)}
          getNoted={(e) => setNoted(e.target.value)}
          addNote={handleAddNote}
        />
        <Statistic state={state}/>
      </div>
      <div className="listNote">
        <label class="note-label">List note: </label>
        <div className="note">
          {notes.map((note, index) => (
            <NotedList key={index} {...note} onDelete={() => deleteNote(index)}/> 
          ))}
        </div>
      </div>
    </div>   
  );
}
export default App;