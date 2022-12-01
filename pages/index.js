import Head from 'next/head'
import Image from 'next/image'
import { LandingPageHeader } from '../components/headers'
import {NavBar} from './../components/navigation'
export default function Home() {
    return (

        <>
            <Head>
                <meta name="description" content="find the next best react developer for your business. Next Best Dev gives you access to North Americas largest pool of React Developers." />
                <title>Oliver's Project</title>
            </Head>
            <NavBar/>
           
            <LandingPageHeader />
            <main>



            </main>
        </>


    );
}
