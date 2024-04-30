import React from 'react'
import api from '../../services/api'
import cookie from 'cookiejs'
import { useEffect, useState } from 'react'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import * as S from './style'
import { UserBox } from '../../components/UserBox'

export const Car = () => {
  const car = [
    {
      carName: 'UP TSI 1',
      img: '../../../public/up-tsi.jpg',
      price: 'R$ 50.000,00',
      year: '2021',
      color: 'Preto',
      userName: 'Gustavo Maia',
      id: 1,
    },
  ]

  return (
    <>
      <Menu />
      <S.Container>
        <S.ContainerList>
          <S.ListTitle>{car[0].carName}</S.ListTitle>
          <S.CarList>
            {car.map((car) => (
              <S.CarBox key={car.id}>
                <S.CarImage src={car.img} />
                <S.CarTitle>{car.carName}</S.CarTitle>
                <S.CarDetail>{car.price}</S.CarDetail>
                <S.CarDetail>{car.year}</S.CarDetail>
                <S.CarDetail>{car.color}</S.CarDetail>
                <UserBox style={{ color: '#333', fontSize: '13px' }}>{car.userName}</UserBox>
              </S.CarBox>
            ))}
          </S.CarList>
        </S.ContainerList>
      </S.Container>
      <Footer fixed />
    </>
  )
}
