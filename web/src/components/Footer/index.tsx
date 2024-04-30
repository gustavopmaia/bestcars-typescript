import { ContainerFooter } from './styles'

interface FooterProps {
  fixed?: boolean
}

export const Footer = ({ fixed }: FooterProps) => {
  return (
    <ContainerFooter style={{ position: fixed ? 'fixed' : 'static', bottom: fixed ? '0' : 'none' }}>
      <p>Feito por Gustavo Maia</p>
    </ContainerFooter>
  )
}
