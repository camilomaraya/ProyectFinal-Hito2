import React from "react";
import Nav from "../Components/Nav";
import '../Assets/styles/home.css'
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";


export default function Home() {
  return (
    <>
      <Nav />
      <Carousel />
      <div class="banner animated">
        <div class="mt-2 mb-3 big-text animated ">
          <i class="fa-solid fa-book"> BOOKSWAP</i>
          </div>
        <div>La mejor tienda para comprar, vender e intercambiar libros!!</div>
        <a href="/">Ingresa</a>
      </div>
      <Footer />
    </>
  );
}
