import React, { Component } from 'react'

const styles = {backgroundColor: '#4AD5FF', padding: 20, color: 'white'}

class App extends Component {
  state = {
    search: ''
  }

  onChange = (e) => {
    this.setState({
      search: e.target.value
    })

    window.EventBus.publish('search_list', e.target.value)
  }

  render () {
    return (
      <div style={styles}>
        <h1>Search (React)</h1>
        <input type="text" value={this.state.search} onChange={this.onChange}/>
      </div>
    )
  }
}

export default App
