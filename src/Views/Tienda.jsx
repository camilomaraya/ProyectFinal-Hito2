import React from 'react'
import CardsTienda from '../Components/CardsTienda'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

export default function Tienda() {
  return (
    <>
      <Nav />
      <h1 className='my-4 d-flex justify-content-center'>
        Productos Destacados
      </h1>
      <CardsTienda />
      <Footer />
    </>
  )
}
