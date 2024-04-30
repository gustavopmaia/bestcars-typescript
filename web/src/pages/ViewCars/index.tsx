import React from 'react'
import api from '../../services/api'
import cookie from 'cookiejs'
import { useEffect, useState } from 'react'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { Container, ContainerList, ListTitle, CarList, CarBox, CarTitle, CarDetail, CarImage } from './style'
import { UserBox } from '../../components/UserBox'

export const Cars = () => {
  const cars = [
    {
      carName: 'UP TSI 1',
      img: '../../../public/up-tsi.jpg',
      price: 'R$ 50.000,00',
      year: '2021',
      color: 'Preto',
      userName: 'Gustavo Maia',
      id: 1,
    },
    {
      carName: 'UP TSI 2',
      img: '../../../public/up-tsi.jpg',
      price: 'R$ 57.000,00',
      year: '2021',
      color: 'Preto',
      userName: 'Gustavo Maia',
      id: 2,
    },
    {
      carName: 'UP TSI 3',
      img: '../../../public/up-tsi.jpg',
      price: 'R$ 49.000,00',
      year: '2021',
      color: 'Preto',
      userName: 'Gustavo Maia',
      id: 3,
    },
    {
      carName: 'UP TSI 4',
      img: '../../../public/up-tsi.jpg',
      price: 'R$ 50.000,00',
      year: '2021',
      color: 'Preto',
      userName: 'Gustavo Maia',
      id: 4,
    },
    {
      carName: 'UP TSI 5',
      img: '../../../public/up-tsi.jpg',
      price: 'R$ 57.000,00',
      year: '2021',
      color: 'Preto',
      userName: 'Gustavo Maia',
      id: 5,
    },
    {
      carName: 'UP TSI 6',
      img: '../../../public/up-tsi.jpg',
      price: 'R$ 49.000,00',
      year: '2021',
      color: 'Preto',
      userName: 'Gustavo Maia',
      id: 6,
    },
  ]

  return (
    <>
      <Menu />
      <Container>
        <ContainerList>
          <ListTitle>All Cars</ListTitle>
          <CarList>
            {cars.map((car) => (
              <CarBox key={car.id}>
                <CarImage src={car.img} />
                <CarTitle>{car.carName}</CarTitle>
                <CarDetail>{car.price}</CarDetail>
                <CarDetail>{car.year}</CarDetail>
                <CarDetail>{car.color}</CarDetail>
                <UserBox style={{ color: '#333', fontSize: '13px' }}>{car.userName}</UserBox>
              </CarBox>
            ))}
          </CarList>
        </ContainerList>
      </Container>
      <Footer fixed />
    </>
  )
}
