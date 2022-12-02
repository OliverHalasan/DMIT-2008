// function DeploymentLink(props) {
//     return ( 
//       <a href="https://dmit-2008.vercel.app/" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Deploy</a>
//      );
// }

// export default DeploymentLink;

import Link from 'next/link'
function GithubButton({className, ...props}) {
    return (
         <Link href="https://dmit-2008.vercel.app/" className={`hidden ${className} w-[130px]`}>
         <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Deploy</button>
     </Link>
     );
}

export default GithubButton;

