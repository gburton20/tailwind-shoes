import { TbShoppingBag } from "react-icons/tb"; 
import NikeLogo from "../assets/nike-logo.svg?react"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = [
    "Home",
    "About",
    "Services",
    "Pricing",
    "Contact",
];

export default function Nav() {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="z-10 relative flex flex-wrap items-center justify-between">

        {/* Logo: */}
        <a href="#">
            <NikeLogo className="h-20 w-20"/>
        </a>

        {/* Hamburger button: */}
        <button onClick={()=> setIsMobileMenuShown(!isMobileMenuShown)} className="lg:hidden rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 ">
            <RxHamburgerMenu size={25}/>
        </button>

        {/* Menu list: */}
        <div className={`${ 
            !isMobileMenuShown && "hidden"
            } w-full lg:w-auto lg:block`}
        >
            <ul className="lg:space-x-8 flex flex-col lg:flex-row rounded-lg border border-gray-100 lg:border-none bg-gray-50 lg:bg-transparent p-4 text-lg">
                {ROUTES.map((route, i) => {
                    return (
                        <li className={`lg:hover:text-blue-500 cursor-pointer rounded px-3 py-2 lg:hover:bg-transparent ${
                            i===0 
                                ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" 
                                : "hover:bg-gray-100"
                            } ${(i==3 || i==4) && "lg:text-white"}`} 
                            key={route}
                        >
                            {route}
                        </li>
                    )
                })}
            </ul>
        </div>

        {/* Cart button */}
        <div className="fixed left-4 bottom-4 lg:static lg:mr-8">
            <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
                <TbShoppingBag />
            </div>
        </div>

    </nav>
  );
}