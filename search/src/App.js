import React, { Component } from 'react'

const styles = {backgroundColor: '#4AD5FF', padding: 20, color: 'white'}

class App extends Component {
  onChange = (e) => {
    window._state.setSearch(e.target.value)
  }

  render () {
    return (
      <div style={styles}>
        <h1>Search (React)</h1>
        <input type="text" value={this.props.search} onChange={this.onChange}/>
      </div>
    )
  }
}

export default App
