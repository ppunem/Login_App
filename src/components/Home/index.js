// Write your code here
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

const Home = props => {
  const {ci, co} = props
  return (
    <div className="home">
      <div className="container">
        {!ci && <Login />}
        {co && <Logout />}
      </div>
    </div>
  )
}

export default Home
