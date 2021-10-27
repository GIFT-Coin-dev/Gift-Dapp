import Head from 'next/head'
import {useEffect} from 'react'
import Layout from '../components/layout'

import 'tailwindcss/tailwind.css'

export default function MyApp({Component, pageProps}) {

    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(<Component {...pageProps} />)
}
