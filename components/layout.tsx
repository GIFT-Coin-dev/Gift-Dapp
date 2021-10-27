import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'

export default function Layout({children}) {
  return(
    <>
      <Head>
        <title>Gift</title>
        <link rel="icon" href="/Logo.png" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Accept-CH" content="DPR,Width,Viewport-Width" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"  />
      </Head>
      <Navbar/>
      <main className="z-0">{children}</main>
      <Footer/>
    </>
  )
}

