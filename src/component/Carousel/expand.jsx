
import React, { useState, useEffect } from 'react';
// import './App.css';

export  const Expanding = ()=> {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('')
  const [filteredStudents, setFilteredStudents] = useState([])
  const [open, setOpen] = useState(false)


  useEffect(() => {
    fetch("https://www.hatchways.io/api/assessment/students")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setStudents(result.students);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  useEffect(() => {
    setFilteredStudents(
      students.filter(s => {
        return s.firstName.toLowerCase().includes(search.toLowerCase())
          || s.lastName.toLowerCase().includes(search.toLowerCase());
      })
    )
  }, [search, students]);

  const toggleButton = () => {
    setOpen(!open)
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="main-container">

        <ul className="list-container">
          <form >
            <input
              type="text"
              placeholder="Search by name"
              id="name-input"
              onChange={e => setSearch(e.target.value)}
            />
          </form>
          {filteredStudents.map(student => (
            <li className="student-container" key={student.id}>
              <img src={student.pic} alt="student"></img>
              <div className="student-info">
                <h1>{student.firstName}  {student.lastName}</h1>
                <p>Email: {student.email}</p>
                <p>Company: {student.company}</p>
                <p>Skill: {student.skill}</p>
                <p>Average: {(student.grades.reduce((a, b) => parseInt(b) + a, 0))
                  / (student.grades.map((grade) => grade).length)}%
                </p>
                {open ? (
                  <ul className="grades-list">
                    {student.grades.map((grade, index) => <li key={grade.id}>Test {index + 1}: {grade}%</li>)}
                  </ul>) : null}
              </div>

              <button className="expand-btn" onClick={() => toggleButton()}>{open ? '-' : '+'}</button>
            </li>
          ))
          }
        </ul >
      </div>
    );

  }


}

// export default Expand;