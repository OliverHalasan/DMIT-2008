import { ContentPageHeader } from './../components/headers'
import { NavBar } from './../components/navigation'

function SubaruPage() {
    return (
        <>
            <NavBar />
            <ContentPageHeader type='Subaru Catalog' title='Subaru' tagline='this is a catalog for Subaru where its shows all of their cars.' />
        </>
    );
}

export default SubaruPage;