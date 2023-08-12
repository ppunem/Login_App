// Write your code here
import '../Login'
import '../logout'
import './index.css'

const Message = props => {
  const {ci, co} = props
  return(
      {!ci && <p>Please Login</p>}
      {co && <p>Welcome User</p>}
  )
}

export default Message
