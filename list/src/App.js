import React, { Component } from 'react'

const styles = {backgroundColor: '#222222', padding: 20, color: 'white'}

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      search: '',
      list: props.list ? JSON.parse(decodeURIComponent(props.list)) : []
    }
  }

  componentDidMount () {
    this.subAddList = window.EventBus.on('add_list', this.onAdd)
    this.subSearchList = window.EventBus.on('search_list', this.onSearch)
  }

  componentWillUnmount () {
    this.subAddList()
    this.subSearchList()
  }

  onAdd = (value) => {
    this.setState({
      list: [
        ...this.state.list,
        value
      ]
    })
  }

  onSearch = (value) => {
    this.setState({
      search: value
    })
  }

  render () {
    const {list, search} = this.state
    const finalList = search ? list.filter(v => v.search(search) !== -1) : list
    return (
      <div style={styles}>
        <h1>List (React)</h1>
        <ul>
          {finalList.map((v, i) => <li key={i}>{v}</li>)}
        </ul>
      </div>
    )
  }
}

export default App
