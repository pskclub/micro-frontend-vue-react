import React, { Component } from 'react'
import { styles } from './css'

class App extends Component {
  state = {
    input : ''
  }

  onChange = (e)=> {
    this.setState({
      input : e.target.value
    })
    console.log("send", e.target.value)
    window.EventBus.publish("text", e.target.value)
  }
  render () {
    const arr = decodeURIComponent(this.props.title) || []
    return (
      <div>
        <style type="text/css">{styles}</style>
        <input type="text" onChange={this.onChange} value={this.state.input}/>
        <button type='button' onClick={()=> window.EventBus.publish("test_event", "kuy")}>click</button>
        <section className="todoapp">
          <div data-reactid=".0">
            <header className="header" data-reactid=".0.0"><h1 data-reactid=".0.0.0">todos</h1><input
              className="new-todo" placeholder="What needs to be done?" defaultValue data-reactid=".0.0.1"/></header>
            <section className="main" data-reactid=".0.1"><input id="toggle-all" className="toggle-all" type="checkbox"
                                                                 data-reactid=".0.1.0"/><label htmlFor="toggle-all"
                                                                                               data-reactid=".0.1.1"/>
              <ul className="todo-list" data-reactid=".0.1.2">
                <li className data-reactid=".0.1.2.$342c5379-09ac-4f4b-9ce5-19e74f31f079">
                  <div className="view" data-reactid=".0.1.2.$342c5379-09ac-4f4b-9ce5-19e74f31f079.0"><input
                    className="toggle" type="checkbox" data-reactid=".0.1.2.$342c5379-09ac-4f4b-9ce5-19e74f31f079.0.0"/><label
                    data-reactid=".0.1.2.$342c5379-09ac-4f4b-9ce5-19e74f31f079.0.1">treytg</label>
                    <button className="destroy" data-reactid=".0.1.2.$342c5379-09ac-4f4b-9ce5-19e74f31f079.0.2"/>
                  </div>
                  <input className="edit" defaultValue="treytg"
                         data-reactid=".0.1.2.$342c5379-09ac-4f4b-9ce5-19e74f31f079.1"/></li>
                <li className data-reactid=".0.1.2.$75f0d5e4-7631-4fcc-9a57-d83952b822d5">
                  <div className="view" data-reactid=".0.1.2.$75f0d5e4-7631-4fcc-9a57-d83952b822d5.0"><input
                    className="toggle" type="checkbox" data-reactid=".0.1.2.$75f0d5e4-7631-4fcc-9a57-d83952b822d5.0.0"/><label
                    data-reactid=".0.1.2.$75f0d5e4-7631-4fcc-9a57-d83952b822d5.0.1">gdf</label>
                    <button className="destroy" data-reactid=".0.1.2.$75f0d5e4-7631-4fcc-9a57-d83952b822d5.0.2"/>
                  </div>
                  <input className="edit" defaultValue="gdf"
                         data-reactid=".0.1.2.$75f0d5e4-7631-4fcc-9a57-d83952b822d5.1"/></li>
                <li className data-reactid=".0.1.2.$3f197832-6120-4e22-8be6-dfbd1c340b95">
                  <div className="view" data-reactid=".0.1.2.$3f197832-6120-4e22-8be6-dfbd1c340b95.0"><input
                    className="toggle" type="checkbox" data-reactid=".0.1.2.$3f197832-6120-4e22-8be6-dfbd1c340b95.0.0"/><label
                    data-reactid=".0.1.2.$3f197832-6120-4e22-8be6-dfbd1c340b95.0.1">gdf</label>
                    <button className="destroy" data-reactid=".0.1.2.$3f197832-6120-4e22-8be6-dfbd1c340b95.0.2"/>
                  </div>
                  <input className="edit" defaultValue="gdf"
                         data-reactid=".0.1.2.$3f197832-6120-4e22-8be6-dfbd1c340b95.1"/></li>
                <li className data-reactid=".0.1.2.$a9ce6555-0bcf-417e-a07e-a569edfccf23">
                  <div className="view" data-reactid=".0.1.2.$a9ce6555-0bcf-417e-a07e-a569edfccf23.0"><input
                    className="toggle" type="checkbox" data-reactid=".0.1.2.$a9ce6555-0bcf-417e-a07e-a569edfccf23.0.0"/><label
                    data-reactid=".0.1.2.$a9ce6555-0bcf-417e-a07e-a569edfccf23.0.1">gdfg</label>
                    <button className="destroy" data-reactid=".0.1.2.$a9ce6555-0bcf-417e-a07e-a569edfccf23.0.2"/>
                  </div>
                  <input className="edit" defaultValue="gdfg"
                         data-reactid=".0.1.2.$a9ce6555-0bcf-417e-a07e-a569edfccf23.1"/></li>
                <li className data-reactid=".0.1.2.$8e70bd85-d983-45c5-9b4c-a2ac31052af8">
                  <div className="view" data-reactid=".0.1.2.$8e70bd85-d983-45c5-9b4c-a2ac31052af8.0"><input
                    className="toggle" type="checkbox" data-reactid=".0.1.2.$8e70bd85-d983-45c5-9b4c-a2ac31052af8.0.0"/><label
                    data-reactid=".0.1.2.$8e70bd85-d983-45c5-9b4c-a2ac31052af8.0.1">fdg</label>
                    <button className="destroy" data-reactid=".0.1.2.$8e70bd85-d983-45c5-9b4c-a2ac31052af8.0.2"/>
                  </div>
                  <input className="edit" defaultValue="fdg"
                         data-reactid=".0.1.2.$8e70bd85-d983-45c5-9b4c-a2ac31052af8.1"/></li>
                <li className data-reactid=".0.1.2.$fc866f8f-0cc9-43c6-9faf-9d3714f324f2">
                  <div className="view" data-reactid=".0.1.2.$fc866f8f-0cc9-43c6-9faf-9d3714f324f2.0"><input
                    className="toggle" type="checkbox" data-reactid=".0.1.2.$fc866f8f-0cc9-43c6-9faf-9d3714f324f2.0.0"/><label
                    data-reactid=".0.1.2.$fc866f8f-0cc9-43c6-9faf-9d3714f324f2.0.1">df</label>
                    <button className="destroy" data-reactid=".0.1.2.$fc866f8f-0cc9-43c6-9faf-9d3714f324f2.0.2"/>
                  </div>
                  <input className="edit" defaultValue="df"
                         data-reactid=".0.1.2.$fc866f8f-0cc9-43c6-9faf-9d3714f324f2.1"/></li>
              </ul>
            </section>
            <footer className="footer" data-reactid=".0.2"><span className="todo-count" data-reactid=".0.2.0"><strong
              data-reactid=".0.2.0.0">6</strong><span data-reactid=".0.2.0.1"> </span><span
              data-reactid=".0.2.0.2">items</span><span data-reactid=".0.2.0.3"> left</span></span>
              <ul className="filters" data-reactid=".0.2.1">
                <li data-reactid=".0.2.1.0"><a href="#/" className="selected" data-reactid=".0.2.1.0.0">All</a></li>
                <span data-reactid=".0.2.1.1"> </span>
                <li data-reactid=".0.2.1.2"><a href="#/active" className data-reactid=".0.2.1.2.0">Active</a></li>
                <span data-reactid=".0.2.1.3"> </span>
                <li data-reactid=".0.2.1.4"><a href="#/completed" className data-reactid=".0.2.1.4.0">Completed</a></li>
              </ul>
            </footer>
          </div>
        </section>


      </div>
    )
  }
}

export default App
