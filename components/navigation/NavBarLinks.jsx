import Link from 'next/link'

function NavBarLinks() {
    return ( 
        <ul className=" hidden  md:flex gap-7 text-slate-600 font-bold  text-sm  ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/frontend">Honda</Link>
        </li>
        <li>
          <Link href="/uiux">Toyota</Link> 
        </li>
        <li>
          <Link href="/fullstack">Acura</Link> 
        </li>
        <li>
          <Link href="/backend">Subaru</Link> 
        </li>
      </ul>
     );
}

export default NavBarLinks;