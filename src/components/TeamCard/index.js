// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  //   console.log(details)
  const {name, teamImageUrl, id} = details
  console.log(id)
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="TeamCard">
        <img src={teamImageUrl} alt={name} className="teamLogo" />
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
