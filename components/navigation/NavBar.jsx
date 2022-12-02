import LoginButton from "./LoginButton";
import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";
import GithubButton from "./GithubButton";
import DeploymentLink from "./DeploymenLink"

function NavBar() {
    return (
        <nav className="p-2 shadow relative flex justify-between">
           <NavBarBranding/>
           <NavBarLinks/>
            <div className="flex">
            <LoginButton className='md:flex'/>
            <GithubButton className='md:flex'/>
            <DeploymentLink className='md:flex'/>

            </div>
           <MobileMenuButton/>

        </nav>
    )
}

export default NavBar;