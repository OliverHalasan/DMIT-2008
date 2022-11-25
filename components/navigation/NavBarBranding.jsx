import { LogoSvg } from "../icons";


function NavBarBranding(className, ...props) {
    return(
        <figure className='flex items-center'>
        <LogoSvg className="fill-yellow-500 w-10"/>
        <figcaption>
            <h1 className="font-bold ">Car Categories</h1>
        </figcaption>
    </figure>
    )
}

export default NavBarBranding;