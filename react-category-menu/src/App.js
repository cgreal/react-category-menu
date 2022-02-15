import React, { useState } from 'react';
import Menu from './Components/Menu';
import Categories from './Components/Categories';
import items from './dummyData';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
	const [menuItems, setMenuItems] = useState(items);
	const [activeMenuItem, setActiveMenuItem] = useState(items);
	const [categories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(items);
			setActiveMenuItem('all');
			return;
		}
		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
		setActiveMenuItem(category);
	};

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>menu</h2>
					<div className="underline"/>
				</div>
				<Categories categories={categories} filterItems={filterItems} activeMenuItem={activeMenuItem}/>
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
