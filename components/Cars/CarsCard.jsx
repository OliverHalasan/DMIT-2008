import Image from 'next/image'

function CarsCard({ manufacturer, model, year, carvin, country, image }) {
    return (
        <aside>
            <div class="flex justify-center flex-row ">
                <div class="rounded-lg shadow-lg bg-white max-w-sm ">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light" className='flex justify-center'>
                    <Image src={image}
                    width={150}
                    height={150} 
                    className="rounded-full border border-gray-400/20 p-1 bg-gray-400/10"
                    />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{manufacturer}</h5>
                        <ul className="text-gray-500 text-base mb-4 list-none ">
                    <li >
                        {model}
                    </li>
                    <li>
                        {year}
                    </li>
                    <li>
                        {carvin}
                    </li>
                    <li>
                        {country}
                    </li>
                </ul>
                    </div>
                </div>
            </div>
        </aside>

    );
}

export default CarsCard;