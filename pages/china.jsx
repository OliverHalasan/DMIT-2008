import path from 'path'
import {promises as  fs} from 'fs';
import ContentPageLayout from '../components/layouts/ContentPageLayout';
import {CarsCard} from '../components/Cars'


function ChinaPage({ui}) {
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

export default ChinaPage;

ChinaPage.getLayout = function getLayout(page) {
    return (
        <ContentPageLayout type='China Catalog' title='China' tagline='this is a catalog for China where its shows all of their cars.'>
            {page}
        </ContentPageLayout>
    )
}

export async function getStaticProps(content){
    const filePath = path.join(process.cwd(), './mock/car.json')
    const devs = JSON.parse(await fs.readFile(filePath, 'utf-8'))
    const uiDevs = devs.filter(dev=> dev.country==='China')

    return{
        props:{
           ui:uiDevs
        }
    }
}