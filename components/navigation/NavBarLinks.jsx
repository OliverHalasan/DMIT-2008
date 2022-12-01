import Link from 'next/link'

function NavBarLinks() {
    return ( 
        <ul className=" hidden  md:flex gap-7 text-slate-600 font-bold  text-sm  ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/honda">Honda</Link>
        </li>
        <li>
          <Link href="/toyota">Toyota</Link> 
        </li>
        <li>
          <Link href="/acura">Acura</Link> 
        </li>
        <li>
          <Link href="/subaru">Subaru</Link> 
        </li>
      </ul>
     );
}

export default NavBarLinks;