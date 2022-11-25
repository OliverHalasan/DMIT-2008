import Head from 'next/head'
import {DefaultLayout} from './../components/layouts'
import '../styles/global.css'


function MyApp({ Component, pageProps }) {
  
  return(
    <>
    <head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </head>

    <Component {...pageProps} />


    </>
  ) 
}

export default MyApp
