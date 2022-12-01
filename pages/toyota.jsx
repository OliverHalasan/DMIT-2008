import { ContentPageHeader } from './../components/headers'
import { NavBar } from './../components/navigation'

function ToyotaPage() {
    return (
        <>
            <NavBar />
            <ContentPageHeader type='Toyota Catalog' title='Toyota' tagline='this is a catalog for Toyota where its shows all of their cars.' />
        </>
    );
}

export default ToyotaPage;