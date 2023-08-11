// Write your code here
import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {btnTxt: 'Login', btnClicked: False}

  render() {
    const {btnTxt, btnClicked} = this.state
    
    changeState=()=>{
        const {btnClicked}=this.state
        this.setState({btnClicked:True})
    }

    return (
      {!btnClicked && (
        <div className="btn">
          <button type="button" onClick={this.changeState}>{btnTxt}</button>
        </div>}
      )
    )
  }
}

export default Login
