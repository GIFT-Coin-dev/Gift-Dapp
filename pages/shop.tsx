import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers } from 'ethers'
import Head from 'next/head'
import { useCallback, useEffect, useReducer, useState } from 'react'
import WalletLink from 'walletlink'
import Web3Modal from 'web3modal'
import { ellipseAddress, getChainData } from '../lib/utilities'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import ProductDetails from '../components/productDetail'
import Layout from '../components/layout'

export default function Shop() {


  const products = [
    {
      id: 1,
      name: 'Good boi',
      href: '#',
      price: '0.1 BnB',
      description: '3 sizes available',
      imageSrc: '/placeholder1.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 2,
      name: 'Candy',
      href: '#',
      price: '0.1 BnB',
      description: 'Walnut',
      imageSrc: '/placeholder2.jpg',
      imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
      id: 3,
      name: 'Dog Xmas',
      href: '#',
      price: '0.05 BnB',
      description: 'The Perfect Gift for your Dog',
      imageSrc: '/placeholder3.jpg',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
      id: 4,
      name: 'Merry Christmas',
      href: '#',
      price: '0.1 BnB',
      description: 'Heather Gray',
      imageSrc: '/placeholder4.jpg',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
      id: 5,
      name: 'PineappleParty',
      href: '#',
      price: '0.05 BnB',
      description: 'Heather Gray',
      imageSrc: '/placeholder5.jpg',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
      id: 6,
      name: 'Happy Birthday',
      href: '#',
      price: '0.03 BnB',
      description: 'Heather Gray',
      imageSrc: '/placeholder6.jpg',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    // More products...
  ]

  return (
    
    <div className="container">

      <header>

      </header>

      <main className="z-0">

        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                    <h3>{product.name}</h3>
                    <p className="bold ">{product.price}</p>
                  </div>
                  

                </a>
              ))}
            </div>
          </div>
        </div>

      </main>

      <style jsx>{`


        .container {
          padding: 2rem;
          margin: 0 auto;

        }

      `}</style>

    </div>
  )
}

Shop.getLayout = function getLayout(page) {
  return(
    <Layout>
      {page}
    </Layout>
  )
}
