import { useEffect } from 'react'
import { BoxTitle, Box as StyledBox } from './styles'

interface BoxProps {
  children: string
  title: string
  fixed?: string
  none?: string
}

export const Box = ({ title, children }: BoxProps) => {
  const clickButton = () => {
    console.log(title)
    console.log(children)
  }

  return (
    <StyledBox>
      <BoxTitle style={{ fontWeight: 'bold' }}>{title}</BoxTitle>
      <p>{children}</p>
    </StyledBox>
  )
}
