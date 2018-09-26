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
    this.subDelList = window.EventBus.on('remove_list', this.onDel)
  }

  componentWillUnmount () {
    this.subAddList()
    this.subSearchList()
    this.subDelList()
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

  onDel = (index) => {
    const newList = this.state.list
    this.state.list.splice(index, 1)
    this.setState({
      list: newList
    })
  }

  sendDel = (index) => {
    window.EventBus.publish('remove_list', index)
  }

  render () {
    const {list, search} = this.state
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
