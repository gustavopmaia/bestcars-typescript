import React from 'react'
import api from '../../services/api'
import cookie from 'cookiejs'
import { useEffect, useState } from 'react'
import { Menu } from '../../components/Menu'
import { Container, ContainerList, ListTitle, UserBox, UserList, UserTitle } from './style'
import { Footer } from '../../components/Footer'

interface User {
  id: number
  name: string
  email: string
}

const user = [
  {
    id: 1,
    name: 'Gustavo Maia',
    email: 'gustavo@teste.com',
  },
  {
    id: 2,
    name: 'Gustavo Maia',
    email: 'gustavo2@teste.com',
  },
]

const Users = () => {
  let config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }

  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    console.log(users)
    const fetchUsers = async () => {
      try {
        if (!config.headers.Authorization) {
          setError('Token not found. Please log in.')
          return
        }

        const response = await api.get('/users', config)
        setUsers(response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <>
      <Menu />
      <Container>
        <ContainerList>
          <ListTitle>All Users</ListTitle>
          {error && <p>{error}</p>}
          <UserList>
            {users.map((user) => (
              <UserBox key={user.id}>
                <UserTitle>Name: {user.name}</UserTitle>
                <p>Email: {user.email}</p>
              </UserBox>
            ))}
          </UserList>
        </ContainerList>
      </Container>
      <Footer fixed />
    </>
  )
}

export default Users
