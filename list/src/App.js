import React, { Component } from 'react'

const styles = {backgroundColor: '#222222', padding: 20, color: 'white'}

class App extends Component {

  sendDel = (index) => {
    setTimeout(() => {
      window._state.remove(index)
    }, 1)
  }

  render () {
    const {list, search} = this.props
    const finalList = search ? list.filter(v => v.search(search) !== -1) : list
    return (
      <div style={styles}>
        <h1>List (React)</h1>
        <ul>
          {finalList.map((v, i) => <li key={i}>{v}
            <span style={{color: 'red', cursor: 'pointer'}} onClick={() => this.sendDel(i)}>(X)</span></li>)}
        </ul>
      </div>
    )
  }
}

export default App
