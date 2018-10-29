import React, { Component } from 'react'

const styles = {backgroundColor: '#222222', padding: 20, color: 'white'}

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      list: props.list ? props.list : []
    }
  }

  sendDel = (index) => {
    setTimeout(() => {
      window._state.remove(index)
    }, 1)
  }

  render () {
    const {list} = this.state
    const finalList = this.props.search ? list.filter(v => v.search(this.props.search) !== -1) : list
    console.log(finalList)
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
