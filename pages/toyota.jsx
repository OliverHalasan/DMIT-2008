import ContentPageLayout from '../components/layouts/ContentPageLayout';
import { ContentPageHeader } from './../components/headers'

function ToyotaPage() {
    return (
        <>
           <main>
            
           </main>
        </>
    );
}

export default ToyotaPage;

ToyotaPage.getLayout = function getLayout(page) {
    return (
        <ContentPageLayout type='Toyota Catalog' title='Toyota' tagline='this is a catalog for Toyota where its shows all of their cars.'>
            {page}
        </ContentPageLayout>
    )
}
