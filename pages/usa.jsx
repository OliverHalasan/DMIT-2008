import path from 'path'
import {promises as  fs} from 'fs';
import ContentPageLayout from '../components/layouts/ContentPageLayout';
import {CarsCard} from '../components/Cars'

function USAPage({ui}) {
    console.log(ui)
    return (
        <>
            <div className='flex items-center space-x-4 '>
            { ui.map(dev=> <CarsCard 
                key={dev.id} 
                image={dev.image}
                model={dev.model}
                manufacturer={dev.manufacturer}
                carvin={dev.carvin}
                year={dev.year}
                country={dev.country}
                
                />)}
            </div>
                
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
    const filePath = path.join(process.cwd(), './mock/car.json')
    const devs = JSON.parse(await fs.readFile(filePath, 'utf-8'))
    const uiDevs = devs.filter(dev=> dev.country==='United States')

    return{
        props:{
           ui:uiDevs
        }
    }
}