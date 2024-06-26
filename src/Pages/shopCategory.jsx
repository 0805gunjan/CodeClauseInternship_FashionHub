import React, { useContext } from 'react'
import './CSS/shopCategory.css'
import { shopContext } from '../Context/shopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/items/item'

const ShopCategory = (props) => {
  const {all_product} = useContext(shopContext);
  return (
    <div className='shopCategory'>
      <div className="shopcategory-banner"><img src={props.banner} alt="" /></div>
      <div className="shopCategory-index">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopCategory-sort'>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((item,i) => {
            if (props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
        })}
      </div>
      <div className="shopCategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory