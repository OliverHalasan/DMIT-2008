import Image from 'next/image'
import bannerImage from './../../public/mybanner.png'

function LandingPageHeader() {
    return (
        <header className=' p-10 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500'>
            <figure  className='flex flex-col justify-center items-center md:flex-row gap-8'>
                <figcaption>
                    <h1 className='font-bold text-4xl text-stone-800 text-center md:text-3xl lg:text-5xl xl:text-6xl'>
                        Finding a Perfect Car For You
                    </h1>
                </figcaption>
                <Image className='max-w-xl '
                src={bannerImage}
                alt='https://www.freepik.com/free-vector/isometric-public-transport-collection_26798135.htm#page=2&query=car&position=21&from_view=search&track=sph'
                />
            </figure>
        </header>
    );
}

export default LandingPageHeader;