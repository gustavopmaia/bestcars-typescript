import { Container, UserName } from './style'

interface UserBoxProps {
  children: string
  style?: any
}

export const UserBox = (props: UserBoxProps) => {
  return (
    <Container>
      <UserName style={props.style}>{props.children}</UserName>
    </Container>
  )
}
