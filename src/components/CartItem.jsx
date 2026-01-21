const CartItem = ({item}) => {
  return (
    <div className="p-2 hover:bg-[#DAFFA2]">
        <img className="h-24" src={item.src}/>
        <div>{item.title}</div>
        <div>{item.description}</div>
        <div>{item.price}</div>
    </div>
  )
}

export default CartItem