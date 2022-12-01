import { ContentPageHeader } from './../components/headers'
import ContentPageLayout from '../components/layouts/ContentPageLayout';
function AcuraPage() {
    return (
        <>
           <main></main>
        </>
    );
}

export default AcuraPage;

AcuraPage.getLayout = function getLayout(page) {
    return (
        <ContentPageLayout type='Acura Catalog' title='Acura' tagline='this is a catalog for Acura where its shows all of their cars.'>
            {page}
        </ContentPageLayout>
    )
}