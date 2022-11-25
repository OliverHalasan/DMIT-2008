import Head from 'next/head'
import Image from 'next/image'
import { LandingPageHeader } from '../components/headers'
import {NavBar} from './../components/navigation'
export default function Home() {
    return (

        <>
            <Head>
                <meta name="description" content="find the next best react developer for your business. Next Best Dev gives you access to North Americas largest pool of React Developers." />
                {/* <title>Oliver's Project</title> */}
            </Head>
            <NavBar/>
            {/* <header className='text-center py-[10rem] bg-cyan-800'>
                <img className='w-[150px] mx-auto ' src="myfavicon.svg" alt="next best developer" />
                <h1 className='text-7xl text-slate-300'>John Oliver Halasan</h1>
                <p className='text-slate-400 text-2xl mt-3'>On this project I will demonstrate what I learn from my React class</p>
            </header> */}
            <LandingPageHeader />
            <main>



            </main>
        </>


    );
}
