import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from '../../dummyData.jsx';
import reducer from '../../screens/Cart/Reducer.jsx';
// ATTENTION!!!!!!!!!!
// if you want to request data from external domain, remove url line from comment line
// const url = 'endpoind url should be here';
const dummyCartItems=[
	{
		"id": "1",
		"title": "Samsung Galaxy S20",
		"price": "599.99",
		"img": "https://specifications-pro.com/wp-content/uploads/2020/02/Samsung-Galaxy-S20-5G-2048x2048.jpeg",
		"amount": 1
	},
	{
		"id": "2",
		"title": "google pixel 3a",
		"price": "399.99",
		"img": "https://www.pricerunner.com/product/1200x630/1871593059/Google-Pixel-3a-64GB.jpg",
		"amount": 1
	},
	{
		"id": "3",
		"title": "Xiaomi Redmi Note 8",
		"price": "499.99",
		"img": "https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDFPOXp1UVVSLUwuX1NTNDAwXy5qcGc.jpg",
		"amount": 1
	},
	{
		"id": "4",
		"title": "iPhone 12 pro",
		"price": "800.99 ",
		"img": "https://www.powerplanetonline.com/cdnassets/iphone_12_pro_128gb_04_blanco_ad_l.jpg",
		"amount": 1
	}
];
const AppContext = React.createContext();

const initialState = {
	loading: false,
	cart: cartItems,
	total: 0,
	amount: 0,
}

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' })
	}
	const remove = (id) => {
		dispatch({ type: 'REMOVE', payload: id })
	}
	const increase = (id) => {
		dispatch({ type: 'INCREASE', payload: id })
	}
	const decrease = (id) => {
		dispatch({ type: 'DECREASE', payload: id })
	}
	const fetchData = async () => {
		dispatch({ type: 'LOADING' })
		// const response = await fetch(url);
		const cart =  dummyCartItems;
		dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
	}
	const toggleAmount = (id, type) => {
		dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
	}
	useEffect(() => {
		fetchData();
	}, [])

	useEffect(() => {
		dispatch({ type: 'GET_TOTALS' });
	}, [state.cart])
	return (
		<AppContext.Provider
			value={{
				...state,
				clearCart,
				remove,
				increase,
				decrease,
				toggleAmount,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }
