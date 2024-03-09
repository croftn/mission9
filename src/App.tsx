// Author: Nya Croft
// Section 004

import React from 'react';
import './App.css';
// Import JSON
import teams from './CollegeBasketballTeams.json';

// Create props interface
interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

// Heading Function
function Heading() {
  return <h1>The Complete March Madness Guide</h1>;
}

// Class to create each team (cards)
class TeamCard extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
        <br></br>
      </div>
    );
  }
}

// List of team cards
function TeamList() {
  return (
    <div>
      {teams.teams.map((teamNum: TeamProps) => (
        <TeamCard key={teamNum.tid} {...teamNum} />
      ))}
    </div>
  );
}

// Main App function
function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
