import Cart from "./components/Cart";
import Nav from "./components/Nav";
import { NewArrivalSection } from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import SideBar from "./components/SideBar";
import { SHOE_LIST } from "./constant";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi"

const FAKE_CART_ITEMS = SHOE_LIST.map(shoe => {
  return {
    product: shoe, 
    qty: 1,
    size: 44
  }
})

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode")
    if(isDarkMode==="true"){
      window.document.documentElement.classList.add("dark");
    }
  }, [])

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "isDarkMode", 
      window.document.documentElement.classList.contains("dark"),
    );
  };

  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night dark:text-white">
      <Nav onClickShoppingBtn = {() => setIsSidebarOpen(true)}/>
      <ShoeDetail/>
      <NewArrivalSection items={SHOE_LIST}/>
      <SideBar 
        isOpen={isSidebarOpen} 
        onClickClose={() => setIsSidebarOpen(false)}
      >
      <Cart cartItems={FAKE_CART_ITEMS}/>
      </SideBar>
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          onClick={toggleDarkMode}
          className="shadow-lg bg-night-50 px-4 py-2 rounded-full text-white dark:bg-white dark:text-night hover:scale-110 transition-transform"
        >
          <BiSun className="hidden dark:block"/>
          <BiMoon className="dark:hidden"/>
        </button>
      </div>
    </div>
  );
}