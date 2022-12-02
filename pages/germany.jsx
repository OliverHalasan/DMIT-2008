import { ContentPageHeader } from '../components/headers'
import ContentPageLayout from '../components/layouts/ContentPageLayout';


function GermanyPage() {
    return (
        <>
                <main>

                </main>
        </>
    );
}

export default GermanyPage;

GermanyPage.getLayout = function getLayout(page) {
    return (
        <ContentPageLayout type='Germany Catalog' title='Germany' tagline='this is a catalog for Germany where its shows all of their cars.'>
            {page}
        </ContentPageLayout>
    )
}