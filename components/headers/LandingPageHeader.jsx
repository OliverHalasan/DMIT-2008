import Image from 'next/image'
import bannerImage from './../../public/mybanner.png'

function LandingPageHeader() {
    return (
        <header className=' p-10 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500'>
            <figure className='flex flex-col justify-center items-center md:flex-row gap-8'>
                <figcaption className='flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-4xl text-stone-800 text-center md:text-3xl lg:text-5xl xl:text-6xl'>
                        Finding a Perfect Car For You
                    </h1>
                    <p className="font-semibold text-base md:text-xl mb-6  md:mt-1  lg:mt-4 lg:text-xl text-stone-800">
                        Lets frind a perfect car for you that you will loved it.
                    </p>
                </figcaption>
                <Image className='max-w-xl '
                    src={bannerImage}
                    alt='car image'
                    priority={true}
                />
            </figure>
        </header>
    );
}

export default LandingPageHeader;