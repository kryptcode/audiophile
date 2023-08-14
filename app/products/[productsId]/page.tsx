"use client"
import BringingBanner from '@/components/BringingBanner';
import Categories from '@/components/Categories';
import PrevBtn from '@/components/Product/PrevBtn'
import ProductItem from '@/components/Product/ProductItem'
import Features from '@/components/Product/Features'
import Cards from '@/components/Product/Cards'
import Recommendations from '@/components/Product/Recommendations'
import Header from '@/components/Header';
import data from '@/data.json'
import React, { useEffect, useState } from 'react'
import Footer from '@/components/Footer';

const ProductsPage = () => {
  const url = window.location.pathname.toString().slice(10); 
  const product = data?.find((mil) => mil.slug === url)
  

  return (
    <div>
      {
        product ? (
          <>
            <Header />
            <PrevBtn />
            <ProductItem product={product}  />
            <Features text={product.features} includes={product.includes} />
            <Cards img1={product.gallery.first.desktop} img2={product.gallery.second.desktop} img3={product.gallery.third.desktop} img3b={product.gallery.third.mobile} />
            {/* <Recommendations items={product.others} /> */}
            <Categories /> 
            <BringingBanner />
            <Footer />
          </>
        ) : (
          <div onMouseOver={() => window.location.reload()} className='min-h-screen'>
          <Header />
          <div>
            Not available
          </div>
          <Footer />
          </div>
        )
      }
    </div>
  )
}

export default ProductsPage