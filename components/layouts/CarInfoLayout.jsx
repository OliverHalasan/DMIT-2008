
import Head from "next/head";
 

export default function CarInfoLayout({children} ) {
  const {manufacturer} = {...children.props}
 
  return (
    <>
      <Head>
        <title>{manufacturer}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        {children}            
    </>
  );
}
