import { getCars } from '../libs/getCars';
import ContentPageLayout from '../components/layouts/ContentPageLayout';
import {CarsCard} from '../components/Cars'

function USAPage({ui}) {
    return (
        <>
            
            { ui.map(dev=> <CarsCard 
                key={dev.id} 
                image={dev.image}
                model={dev.model}
                manufacturer={dev.manufacturer}
                carvin={dev.carvin}
                year={dev.year}
                country={dev.country}
                id={dev.id}
                
                />)}
                
        </>
    );
}

export default USAPage;

USAPage.getLayout = function getLayout(page) {
    return (
        <ContentPageLayout type='USA Catalog' title='USA' tagline='This is a catalog for USA where its shows all of their cars.'>
            {page}
        </ContentPageLayout>
    )
}

export async function getStaticProps(content){
   const devs = await getCars()
    const uiDevs = devs.filter(dev=> dev.country==='United States')

    return{
        props:{
           ui:uiDevs
        }
    }
}