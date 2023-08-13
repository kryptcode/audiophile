"use client"
import Header from '@/components/Header'
import Hero from '@/components/Category/Hero'
import Banner from '@/components/Category/Banner'
import Head from 'next/head'
import { useState } from 'react'
import Categories from '@/components/Categories'
import BringingBanner from '@/components/BringingBanner'
import Footer from '@/components/Footer'

async function getData() {
    const data = await fetch('https://jsonkeeper.com/b/S9OG').then(res => res.json())
  
    const result = data.filter((product: any) => product.category === "earphones") 
  
    return result
  }
  

const headphones = () => {
    const [items, setItems] = useState([])

    async function get() {
        const res = await getData()

        setItems(res)
    }
  return (
    <div className='font-main'>
        <Head>
            <title>Audiophile | Headphones</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className='bg-black pb-3' >
        <div className='bg-white/30 h-[1px]  w-[95%] md:w-[85%] mx-auto  ' />
        </div>
        <Hero title='headphones' />
        <Banner 
            img={'https://audiophile-gamma.vercel.app/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'}
            title={'XX99 Mark II Headphones'}
            text={'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'}
            slug={'items[0].slug'}
            rev={false}
        />
        <Banner 
            img={'https://audiophile-gamma.vercel.app/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'}
            title={'XX99 Mark I Headphones'}
            text={'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'}
            slug={'items[0].slug'}
            rev
        />
        <Banner 
            img={'https://audiophile-gamma.vercel.app/assets/product-xx59-headphones/desktop/image-product.jpg'}
            title={'XX59 Headphones'}
            text={'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'}
            slug={'result[2].slug'}
            rev={false}
        />
        <Categories />
        <BringingBanner />
        <Footer />
    </div>
  )
}

export default headphones