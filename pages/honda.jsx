import { ContentPageHeader } from './../components/headers'
import ContentPageLayout from '../components/layouts/ContentPageLayout';

function HondaPage() {
    return (
        <>
            <main>

            </main>
        </>
    );
}

export default HondaPage;

HondaPage.getLayout = function getLayout(page) {
    return (
        <ContentPageLayout type='Honda Catalog' title='Honda' tagline='this is a catalog for honda where its shows all of their cars.'>
            {page}
        </ContentPageLayout>
    )
}