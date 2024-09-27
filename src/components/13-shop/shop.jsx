import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { ProductList } from './product-list'

export const Shop = () => {
  return (
    <div>
        <Header/>
        <ProductList/>
        <Footer/>
    </div>
  )
}