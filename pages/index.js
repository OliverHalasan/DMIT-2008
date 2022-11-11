import Head from 'next/head'
export default function Home() {
    return (

        <>
            <Head>
                <meta name="description" content="find the next best react developer for your business. Next Best Dev gives you access to North Americas largest pool of React Developers." />
                <title>Next Best Developer</title>
            </Head>
            <header className='text-center py-[10rem] bg-zinc-500'>
                <img className='w-[98px] mx-auto ' src="myfavicon.svg" alt="next best developer" />
                <h1 className='text-6xl text-red-500'>Next Best Developer</h1>
                <p>find your perfect</p>
            </header>

        </>


    );
}
