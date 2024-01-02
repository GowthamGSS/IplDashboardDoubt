// import TeamCard from '../TeamCard'
import './index.css'
// Write your code here
const LatestMatch = props => {
  const {matchDetails} = props
  const altText = `latest match ${matchDetails.competing_team}`
  return (
    <div className="latestMatch">
      <div className="placeDetails">
        <p className="competingTeam">{matchDetails.competing_team}</p>
        <p className="competingTeam">{matchDetails.date}</p>
        <p>{matchDetails.venue}</p>
        <p>{matchDetails.result}</p>
      </div>
      <img
        src={matchDetails.competing_team_logo}
        alt={altText}
        className="competingLogo"
      />
      <div className="playerDetails">
        <h1 className="head">First Innings</h1>
        <p>{matchDetails.first_innings}</p>
        <h1 className="head">Second Innings</h1>
        <p>{matchDetails.second_innings}</p>
        <h1 className="head">Man of The Match</h1>
        <p>{matchDetails.man_of_the_match}</p>
        <h1 className="head">Umpire</h1>
        <p>{matchDetails.umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
