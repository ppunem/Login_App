// Write your code here
import {Component} from 'react'
import './index.css'

class Logout extends Component {
  state = {btnTxt: Logout, btnClicked: True}

  changeBtnClick=()=>{
      const {btnClicked}=this.state
      this.setState({btnClicked:False})
    }

  render() {
    const {btnTxt, btnClicked} = this.state

    return (
        {btnClicked && <div className="btn">
        <button type="button" onClick={this.changeBtnClick}>{btnTxt}</button>
      </div>}
    )
  }
}

export default Logout
