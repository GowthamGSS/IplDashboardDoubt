import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const teamList = await fetch('https://apis.ccbp.in/ipl')
    const TeamListJson = await teamList.json()
    const updatedList = TeamListJson.teams
    console.log(updatedList)
    const formattedData = updatedList.map(ele => ({
      id: ele.id,
      name: ele.name,
      teamImageUrl: ele.team_image_url,
    }))
    console.log(formattedData)
    this.setState({
      teamsList: formattedData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, teamsList} = this.state
    console.log(teamsList)
    return (
      <div className="Container">
        <div className="appContainer">
          <div className="headCont">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
              alt="ipl logo"
            />
            <h1 className="dashHead">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <div className="cardCont">
              {teamsList.map(ele => (
                <TeamCard details={ele} key={ele.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
