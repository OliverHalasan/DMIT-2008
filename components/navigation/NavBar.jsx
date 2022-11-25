import LoginButton from "./LoginButton";
import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
    return (
        <nav className="p-2 shadow relative flex justify-between">
           <NavBarBranding/>
           <NavBarLinks/>
           <LoginButton className='md:flex'/>
           <MobileMenuButton/>

        </nav>
    )
}

export default NavBar;