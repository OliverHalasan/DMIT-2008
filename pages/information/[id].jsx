import {CarInfoLayout} from '../../components/layouts';
import { BioHeader, BioNavigation, BioTopics } from "../../components/cars-info";
import { getCars } from '../../libs/getCars.js';
import { generateRandomTitle } from "../../libs/generateRandomTitle.js";
function SingleCarPage({ model, year, manufacturer, image, carvin, country, ...bio }) {
    return (
        <>
            <div class="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center flex-col">
                <BioHeader model={model} manufacturer={manufacturer} image={image} />
                <BioNavigation country={country} carvin={carvin} />
                <BioTopics model={model} manufacturer={manufacturer} country={country} carvin={carvin} year={year} />
            </div>


        </>


    );
}

export default SingleCarPage;

SingleCarPage.getLayout = function getLayout(page) {
    return (
      <CarInfoLayout>
        {page} 
      </CarInfoLayout>
    )
  }

export async function getStaticPaths() {
    const devs = await getCars();
    const paths = devs.map((dev) => ({ params: { id: dev.id } }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const devs = await getCars();
    const dev = devs.find((dev) => dev.id === params.id);
    const bio = { ...dev, heading: generateRandomTitle() };

    return {
        props: bio,
    };
}

