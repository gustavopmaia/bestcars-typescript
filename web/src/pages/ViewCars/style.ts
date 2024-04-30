import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  align-items: center;
  width: 100%;
`

export const ContainerList = styled.div`
  display: grid;
  justify-content: center;
  height: 200px;
`

export const CarBox = styled.div`
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 10px;
  width: 350px;
  color: black;
`

export const CarList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  align-items: center;
`

export const CarTitle = styled.h1`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`

export const ListTitle = styled.h1`
  color: #333;
  font-size: 30px;
  color: white;
  font-weight: bold;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;
`

export const CarDetail = styled.p`
  color: #333;
  font-size: 13px;
`

export const CarImage = styled.img`
  width: 100%;
  height: 150px;
`
