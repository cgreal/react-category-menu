import React from 'react'
import { useGlobalContext } from '../../screens/Cart/StateContext'
const CartItem = ({ id, img, title, price, amount }) => {
	const { remove, increase, decrease, toggleAmount } = useGlobalContext()
	return (
		<article className='cart-item'>
			<img src={img} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className='item-price'>${price}</h4>
				{/* remove button */}
				<button className='remove-btn' onClick={() => remove(id)}>
					remove
				</button>
			</div>
			<div className="cart-button-wrapper">
				{/* decrease amount */}
				<button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>
					-
				</button>
				{/* amount */}
				<p className='amount'>{amount}</p>
				{/* increase amount */}
				<button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}>
					+
				</button>
			</div>
		</article>
	)
}

export default CartItem
