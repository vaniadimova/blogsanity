import Link from 'next/link'
import { FaTwitter, FaGithub } from 'react-icons/fa';



function Header() {
  return (
    <header className="flex justify-between p-5 mx-auto max-w-7xl">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="object-contain cursor-pointer w-44"
            src="https://links.papareact.com/yvf"
            alt=""
          />
        </Link>
        <div className="items-center hidden space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3 className="px-4 py-1 text-white bg-blue-600 rounded-full">Follow</h3>
      </div>
      </div>
      <div className="flex items-center space-x-5 text-blue-600 cursor-pointer">
      <h3 className="px-4 py-1 border border-blue-600 rounded-full">
        <Link href="https://github.com/vaniadimova"><FaGithub /></Link>
      </h3>
      </div>
     <div className="flex items-center space-x-5 text-blue-600 cursor-pointer">
      <h3 className="px-4 py-1 border border-blue-600 rounded-full">
         <Link href="https://twitter.com/12Dimov"><FaTwitter /></Link>
    </h3>
      </div>
    </header>
  )
}

export default Header