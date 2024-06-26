import { Link } from 'react-router-dom'
import { Logo, Navbar, List, ListItem } from './styles'
import logo from '/logo.png'

export const Menu = () => {
  return (
    <Navbar>
      <Logo>
        <Link to='/'>
          <img src={logo} alt='Logo' />
        </Link>
      </Logo>
      <List>
        <ListItem>
          <Link to='/register'>Register</Link>
        </ListItem>
        <ListItem>
          <Link to='/login'>Login</Link>
        </ListItem>
        <ListItem>
          <Link to='/users'>Users</Link>
        </ListItem>
        <ListItem>
          <Link to='/update-user'>Update User</Link>
        </ListItem>
        <ListItem>
          <Link to='/delete'>Delete User</Link>
        </ListItem>
      </List>
    </Navbar>
  )
}
