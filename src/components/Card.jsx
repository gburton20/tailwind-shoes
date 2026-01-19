export function Card ({item}) {
  return (
    <div classN>
        <div>
            <div>{item.title}</div>
            <div>SHOP NOW</div>
            
        </div>
        <img src={item.src}/>
    </div>
  )
}

export default Card