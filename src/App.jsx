import Cart from "./components/Cart";
import Nav from "./components/Nav";
import { NewArrivalSection } from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import SideBar from "./components/SideBar";
import { SHOE_LIST } from "./constant";
import { useState } from "react";

const FAKE_CART_ITEMS = SHOE_LIST.map(shoe => {
  return {
    product: shoe, 
    qty: 1,
    size: 44
  }
})

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn = {() => setIsSidebarOpen(true)}/>
      <ShoeDetail/>
      <NewArrivalSection items={SHOE_LIST}/>
      <SideBar 
        isOpen={isSidebarOpen} 
        onClickClose={() => setIsSidebarOpen(false)}
      >
      <Cart cartItems={FAKE_CART_ITEMS}/>
      </SideBar>
    </div>
  );
}