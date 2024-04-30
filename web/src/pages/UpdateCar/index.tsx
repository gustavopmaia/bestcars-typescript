import { useState, useEffect } from 'react'
import api from '../../services/api'
import { InputField } from '../../components/InputField'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { ErrorTitle } from './style'

export const UpdateCar = () => {
  const car = [
    {
      carName: 'UP TSI 1',
      img: '../../../public/up-tsi.jpg',
      price: 'R$ 50.000,00',
      year: '2021',
      color: 'Preto',
    },
  ]

  return (
    <div className='App'>
      <Menu />
      <form className='flex flex-col items-center justify-center'>
        {car ? (
          <InputField label='Nome do Carro' type='text' id='carName' name='carName' value={car[0].carName} />
        ) : (
          <ErrorTitle>Carro nao encontrado</ErrorTitle>
        )}

        {car && <InputField label='Preço' type='text' id='price' name='price' value={car[0].price} />}

        {car && <InputField label='Ano' type='text' id='year' name='year' value={car[0].year} />}

        {car && <InputField label='Cor do Carro' type='text' id='color' name='color' value={car[0].color} />}

        {car && (
          <button
            className='w-1/3 h-20 rounded transition delay-150 bg-white hover:bg-zinc-300 duration-300 text-zinc-900'
            type='submit'
          >
            ATUALIZAR
          </button>
        )}
      </form>
      <Footer fixed />
    </div>
  )
}
