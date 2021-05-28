import {React,useEffect, useState} from 'react';
import './HomePage.css';
import {TeamTitle} from '../components/TeamTitle';


export const HomePage = () => {

const [teams, setTeams] = useState([]);



useEffect(
()=> {
  const fetchTeam = async() =>{
 const response = await fetch(`http://localhost:8080/team`);
 const data = await response.json();
 setTeams(data);
  };
  fetchTeam();
},[]
);

  return (
    <div className="HomePage">
     <div className="header-section">
     <h1 className="app-name">IPL Dashboard</h1>
     </div>

     <div className="team-grid">
  {teams.map(team => <TeamTitle key={team.id} teamName = {team.teamName} />)}
    </div>
    </div>
     

  );
}


