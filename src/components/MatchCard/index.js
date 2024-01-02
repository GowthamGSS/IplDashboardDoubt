import './index.css'

const MatchCard = props => {
  const {team} = props
  const altText = `competing team ${team.competing_team}`
  return (
    <li className="matchCard">
      <img src={team.competing_team_logo} alt={altText} className="oppLogo" />
      <p className="competingTeamTitle">{team.competing_team}</p>
      <p className="result">{team.result}</p>
      <p className={team.match_status}>{team.match_status}</p>
    </li>
  )
}
export default MatchCard
