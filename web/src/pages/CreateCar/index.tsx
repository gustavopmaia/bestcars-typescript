import { useState } from 'react'
import api from '../../services/api'
import { InputField } from '../../components/InputField'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { PageTitle } from '../../components/PageTitle'
import { InputFile, LabelFile } from './style'

export const CreateCar = () => {
  interface user {
    name: string
    email: string
    password: string
  }
  return (
    <div className='App'>
      <Menu />
      <form className='flex flex-col items-center justify-center'>
        <PageTitle>Adicione seu carro</PageTitle>
        <InputField label='Nome do carro' type='text' id='carName' name='carName' />
        <LabelFile>Imagem do carro</LabelFile>
        <InputFile type='file' id='carImage' name='carImage' />
        <InputField label='Preco' type='text' id='price' name='price' />
        <InputField label='Ano do carro' type='text' id='carYear' name='carYear' />
        <InputField label='Cor do carro' type='text' id='carColor' name='carColor' />

        <button
          className='w-1/3 h-20 rounded transition delay-150 bg-white hover:bg-zinc-300 duration-300 text-zinc-900'
          type='submit'
        >
          ENVIAR
        </button>
      </form>
      <Footer fixed />
    </div>
  )
}
