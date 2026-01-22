const SideBar = ({children, isOpen, onClickClose}) => {
  return (
    <div>
        <div 
            className={`overflow-y-auto p-5 fixed right-0 top-0 z-50 h-full w-full md:w-[50%] lg:w-[35%] shadow-lg bg-white transition transform duration-300 dark:bg-night dark:text-white ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}>
            <button 
                onClick={onClickClose}
                className="absolute right-4 top-4 p-2 font-bold text-black dark:text-white"
            >
                X
            </button>
            {children}
        </div>
        {isOpen && <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"/>}
    </div>
  )
}

export default SideBar