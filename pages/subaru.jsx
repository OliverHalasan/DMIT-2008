import { ContentPageHeader } from './../components/headers'
import ContentPageLayout from '../components/layouts/ContentPageLayout';


function SubaruPage() {
    return (
        <>
                <main>

                </main>
        </>
    );
}

export default SubaruPage;

SubaruPage.getLayout = function getLayout(page) {
    return (
        <ContentPageLayout type='Subaru Catalog' title='Subaru' tagline='this is a catalog for Subaru where its shows all of their cars.'>
            {page}
        </ContentPageLayout>
    )
}