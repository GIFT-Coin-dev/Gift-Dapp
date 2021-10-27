import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers } from 'ethers'
import Head from 'next/head'
import { useCallback, useEffect, useReducer } from 'react'
import WalletLink from 'walletlink'
import Web3Modal from 'web3modal'
import { ellipseAddress, getChainData } from '../lib/utilities'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'

import Layout from '../components/layout'



import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
 
      <main>
        <div className="pt-10 bg-gray-100 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <a
                    href="#"
                    className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                      Are you an artist?
                    </span>
                    <span className="ml-4 text-sm">Visit our creator page</span>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a>
                  <h1 className="mt-10 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-10 xl:text-6xl">
                    <span className="block">Send your friends</span>
                    <span className="block text-indigo-400">NFT Greetings Cards</span>
                  </h1>
                  <Link  href='/shop'>
                  <button
                        type="button"
                        className="inline-flex items-center mt-4 sm:mt-5 lg:mt-10 xl:mt-20 px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Explore our Shop
                  </button>
                  </Link>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://gateway.pinata.cloud/ipfs/QmWMhzn3kEdDbGAqgsQwtuZxeoh3qW5GuwfQPYxdknCRxa"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return(
    <Layout>
      {page}
    </Layout>
  )
}
