import Link from 'next/link'

function NavBarLinks() {
    return ( 
        <ul className=" hidden  md:flex gap-7 text-slate-600 font-bold  text-sm  ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/usa">USA</Link>
        </li>
        <li>
          <Link href="/china">China</Link> 
        </li>
        <li>
          <Link href="/japan">Japan</Link> 
        </li>
        <li>
          <Link href="/germany">Germany</Link> 
        </li>
      </ul>
     );
}

export default NavBarLinks;