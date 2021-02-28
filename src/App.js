import './App.css';
import Student from './components/Student.js'

function App() {
  return (
    <div className="App">
    <h1 className="l-board-heading">Leaders Board</h1>
    <div className="header">
        <p className="name-heading">Name</p>
        <p className="score-heading">Score</p>
    </div>
    <hr />
    <Student name="Yaseen" university="SZABIST" score={345}/>
    <Student name="Bilal" university="FAST" score={345}/>
    <Student name="Jibran" university="COMSATS" score={345}/>
    <Student name="Omer" university="FAST" score={345}/>
    <Student name="Hammad" university="SZABIST" score={345}/>
    <Student name="Sheheryar" university="SZABIST" score={345}/>
    <Student name="Asher" university="SZABIST" score={345}/>
    </div>
  );
}

export default App;
