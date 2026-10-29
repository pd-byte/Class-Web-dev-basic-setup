import { useState, useEffect} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() =>{
    fetch("http://localhost:8080/api/students")
      .then(res => res.json())
      .then(data => setStudents(data)); 
  }, []);

  return (
    <div>
      {students.map(s => (
        <div key={s._id}> My Name is {s.name}, I am {s.age} years old, and I am Studying {s.course}. </div> 
      ))}
    </div>
  );
}

export default App
