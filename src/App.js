import './App.css'
import {Component} from 'react'
import Greeting from './Components/Greeting'
import LanguageItem from './Components/LanguageItem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeId: languageGreetingsList[0].id}

  updateActiveItem = id => {
    this.setState({activeId: id})
  }

  getFilterProjects = () => {
    const {activeId} = this.state
    const filterProjectDetails = languageGreetingsList.filter(
      each => each.id === activeId,
    )
    return filterProjectDetails
  }

  render() {
    const {activeId} = this.state
    const filterProjectDetails = this.getFilterProjects()

    return (
      <div className="greeting-container">
        <h1>Multilingual Greetings</h1>
        <ul className="greeting-text-list">
          {languageGreetingsList.map(each => (
            <Greeting
              greetingDetails={each}
              key={each.id}
              updateActiveItem={this.updateActiveItem}
              isActive={activeId === each.id}
            />
          ))}
        </ul>
        {filterProjectDetails.map(each => (
          <LanguageItem itemDetails={each} key={each.id} />
        ))}
      </div>
    )
  }
}

export default App
