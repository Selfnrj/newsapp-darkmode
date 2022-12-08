import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from "next/link"
import DarkModeButton from "./DarkModeButton"
import NavLinks from "./NavLinks"
import SearchBox from "./SearchBox"

function Header() {
  return (
    <header>
      <div className="text-black dark:text-white grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">News</h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton />
        </div>
      </div>
      <NavLinks />
      <SearchBox />
    </header>
  );
}

export default Header