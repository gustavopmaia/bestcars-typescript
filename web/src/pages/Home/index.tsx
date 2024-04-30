import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { BoxContainer, ImgContainer, ImgTitleContainer } from './style'
import { CarouselPage } from '../../components/Carousel'
import { Box } from '../../components/Box'

export const Home = () => {
  const boxes = [
    {
      title: 'Seminovos',
      children:
        'Encontre os melhores carros seminovos no nosso site. Nossos veículos passam por uma rigorosa inspeção para garantir a qualidade e segurança. Temos uma ampla variedade de marcas e modelos disponíveis. Venha conferir!',
    },
    {
      title: 'Novos',
      children:
        'Descubra os mais recentes modelos de carros novos em nosso site. Oferecemos uma seleção diversificada de marcas e modelos para atender às suas necessidades. Venha conferir nossas ofertas especiais!',
    },
    {
      title: 'Entre em contato',
      children:
        'Entre em contato conosco pelo telefone (11) 9999-9999 ou pelo e-mail contato@bestcars.com.br.',
    },
    {
      title: 'Quem somos',
      children:
        'Descubra os mais recentes modelos de carros novos em nosso site. Oferecemos uma seleção diversificada de marcas e modelos para atender às suas necessidades. Venha conferir nossas ofertas especiais!',
    },
  ]

  return (
    <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto' }}>
      <Menu />
      <CarouselPage />
      <BoxContainer>
        {boxes.map((box) => (
          <Box title={box.title}>{box.children}</Box>
        ))}
      </BoxContainer>
      <Footer />
    </div>
  )
}
