import { Register } from './pages/Register'
import { Login } from './pages/Login'
import Users from './pages/Users'
import { Home } from './pages/Home'
import { Update } from './pages/UpdateUser'
import { Delete } from './pages/DeleteUser'
import { Cars } from './pages/ViewCars'
import { CreateCar } from './pages/CreateCar'
import { Car } from './pages/ViewCar'
import { UpdateCar } from './pages/UpdateCar'
import { createBrowserRouter } from 'react-router-dom'

export const AllRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/update-user',
    element: <Update />,
  },
  {
    path: '/delete',
    element: <Delete />,
  },
  {
    path: '/cars',
    element: <Cars />,
  },
  {
    path: '/create-car',
    element: <CreateCar />,
  },
  {
    path: '/car',
    element: <Car />,
  },
  {
    path: '/update-car',
    element: <UpdateCar />,
  },
])
