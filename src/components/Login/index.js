// Write your code here
import {Component} from 'react'
import Message from '../Message'
import './index.css'

class Login extends Component {
  state = {btnTxt: 'Login', btnClicked: 'False'}

  render() {
    const {btnTxt, btnClicked} = this.state

    const changeState = () => {
      this.setState({btnClicked: 'True'})
    }

    return (
      <>
        <Message ci={btnClicked} />
        <div className="btn">
          {!btnClicked && (
            <button type="button" onClick={this.changeState}>
              {btnTxt}
            </button>
          )}
        </div>
      </>
    )
  }
}

export default Login
