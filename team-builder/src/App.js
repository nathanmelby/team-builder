import React, { useState } from 'react';
import './App.css';

import TeamMembers from "./components/TeamMembers.js";
import Form from "./components/Form.js";

function App() {


  const [teamMembers, setTeamMembers] = useState ([
    {    
      id:1,
      name: "Meera Andersen",
      email: "Meera@email.com",
      role: "UX Designer"
    }


  ])

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  };



  return (
    <div className="App">
      <Form addNewTeamMember = {addNewTeamMember}/>
      <TeamMembers teamMembers = {teamMembers} />
    </div>
  );
}

export default App;

