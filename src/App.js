import './App.css';
import {useState} from 'react';
import NotedList from "./component/notedList";
import useCount from "./component/useCount";
function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [noted, setNoted] = useState('');
  const [notes, setNotes] = useState([]);
  const {state, incrementCount, countAge16, countAge17} = useCount();

  const getName = (event) => {
    setName(event.target.value);
  };
  const getAge = (event) => {
    setAge(event.target.value);
  };
  const getNoted = (event) => {
    setNoted(event.target.value);
  };

  const addNote = () => {
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

  return (
    <div>
      <div className="header">
        <div className="input">
          <div className="name">
            <label>Name: </label>
            <textarea name="name" value={name} onChange={getName}/>
          </div>
          <div className="age">
            <label>Age:</label>
            <textarea name="age" value={age} onChange={getAge}/>
          </div>
          <div className="noted">
            <label>Noted: </label>
            <textarea name="noted" value={noted} onChange={getNoted}/>
          </div>
          <button class="add" onClick={addNote}>Add</button>
        </div>
        <div className="statistic">
          <label class="note-label">Thống kê: </label>
          <div className="formStatistic">
            <div>
              <label>Tổng số ghi chú: </label>
              <label>{state.count}</label>
            </div>
            <div>
              <label>Số phiếu đánh giá của thành viên lớn hơn 16 tuổi: </label>
              <label>{state.count16}</label>
            </div>
            <div>
              <label>Số phiếu đánh giá của thành viên nhỏ hơn 17 tuổi: </label>
              <label>{state.count17}</label>
            </div>
          </div>
        </div>
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