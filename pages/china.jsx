import ContentPageLayout from '../components/layouts/ContentPageLayout';
import { ContentPageHeader } from '../components/headers'

function ChinaPage() {
    return (
        <>
           <main>
            
           </main>
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
