import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    console.log(event.target.value)

    this.setState({activeId: event.target.value})
  }

  render() {
    const {activeId} = this.state
    const capital = countryAndCapitalsList.find(each => each.id === activeId)
    const {country} = capital
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question">
            <select onChange={this.onChangeCapital} className="select">
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id} className="option">
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="para1">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
