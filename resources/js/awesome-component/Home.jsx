import React from 'react'
import ReactDOM from 'react-dom'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

    console.log("Component Home constructor")
  }

  increment = () => {
    let { counter } = this.state
    this.setState({counter: ++counter})
  }

  decrement = () => {
    let { counter } = this.state
    this.setState({counter: --counter})
  }

  componentDidMount() {
    console.log("Component Home did mount")
  }

  componentDidUpdate() {
    console.log("Component Home did update")
  }

  componentWillUnmount() {
    console.log("Component Home will unmount")
  }

  render() {
    let { counter } = this.state
    return (
      <div>
        <div>{ counter }</div>
        <button type="button" onClick={this.increment}>+</button>
        <button type="button" onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default Home
//ReactDOM.render(<Home />, document.getElementById('example'));
