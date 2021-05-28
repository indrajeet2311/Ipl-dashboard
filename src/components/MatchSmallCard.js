import {React} from 'react';
import {Link } from 'react-router-dom';
import './MatchSmallCard.css';

export const MatchSmallCard = ({match, teamName}) => {

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamName === match.matchWinner;
  return (
    <div className={isMatchWon ? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card'} >
        <h3>vs 
        <Link to={otherTeamRoute}> {otherTeam} 
        </Link></h3>
        <h3 className="match-result"> {match.matchWinner} won by {match.resultMargin} {match.result}</h3>
    </div>
  );
}


