// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
// import {Link} from 'react-router-dom'

import LatestMatch from '../LatestMatch'
// import TeamCard from '../TeamCard'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamId: '',
    matchesList: {},
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    // console.log(match)
    const {params} = match
    // console.log(params)
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const responseJson = await response.json()
    console.log(responseJson)
    this.setState({
      matchList: responseJson.recent_matches,
      matchesList: responseJson.latest_match_details,
      teamBannerUrl: responseJson.team_banner_url,
      isLoading: false,
      teamId: id,
    })
  }

  render() {
    const {
      isLoading,
      teamBannerUrl,
      matchList,
      matchesList,
      teamId,
    } = this.state
    const teamClassName = `TeamContainer ${teamId}`
    console.log(teamClassName)
    return (
      <div className={teamClassName}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="TeamMatchCont">
            <img src={teamBannerUrl} alt="team banner" className="teamBanner" />
            <div className="textCont">
              <h1 className="teamMatches">Latest Matches</h1>

              <LatestMatch matchDetails={matchesList} />
            </div>
            <ul className="matchCardCont">
              {matchList.map(ele => (
                <MatchCard team={ele} key={ele.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
