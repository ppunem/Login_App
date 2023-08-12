// Write your code here
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

const Message = props => {
  const {ci, co} = props
  return (
    <>
      {!ci && <p>Please Login</p>}
      {co && <p>Welcome User</p>}
    </>
  )
}

export default Message
