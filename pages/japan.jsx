import { ContentPageHeader } from '../components/headers'
import ContentPageLayout from '../components/layouts/ContentPageLayout';
function JapanPage() {
    return (
        <>
           <main></main>
        </>
    );
}

export default JapanPage;

JapanPage.getLayout = function getLayout(page) {
    return (
        <ContentPageLayout type='Japan Catalog' title='Japan' tagline='this is a catalog for Japan where its shows all of their cars.'>
            {page}
        </ContentPageLayout>
    )
}