import {NavBar} from "./../navigation"
function DefaultLayout({childern, ...props}) {
    return ( 
        <>
        <NavBar/>
        {childern}
        </>
     );
}

export default DefaultLayout;