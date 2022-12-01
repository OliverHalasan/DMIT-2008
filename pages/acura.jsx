import { ContentPageHeader } from './../components/headers'
import { NavBar } from './../components/navigation'

function AcuraPage() {
    return (
        <>
            <NavBar />

            <ContentPageHeader type='Acura Catalog' title='Acura' tagline='this is a catalog for Acura where its shows all of their cars.' />
        </>
    );
}

export default AcuraPage;