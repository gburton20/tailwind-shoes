import CartItem from "./components/CartItem";
import Nav from "./components/Nav";
import { NewArrivalSection } from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import SideBar from "./components/SideBar";
import { SHOE_LIST } from "./constant";
import { useState } from "react";

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
        <h2 className="mb-10 text-2xl font-bold">Cart</h2>
        <CartItem item={SHOE_LIST[0]}/>
        <CartItem item={SHOE_LIST[2]}/>
        <CartItem item={SHOE_LIST[3]}/>
      </SideBar>
    </div>
  );
}