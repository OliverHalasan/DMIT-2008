import { ContentPageHeader } from './../components/headers'
import { NavBar } from './../components/navigation'

function HondaPage() {
    return (
        <>
            <NavBar />
            <ContentPageHeader type='Honda Catalog' title='Honda' tagline='this is a catalog for honda where its shows all of their cars.' />
        </>
    );
}

export default HondaPage;